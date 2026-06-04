"use client";

import { useState, type ChangeEvent } from "react";

// Mirrors the canonical schema in src/lib/intake-webhook.ts. Kept simple
// (no useReducer / no library) — the form is data-driven by step config,
// state lives in a single object, submission is a POST to /api/intake.

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const TOTAL_STEPS: Step = 5; // 0..5 inclusive; 6 segments (welcome + 5 form steps)

interface FormState {
  // Honeypot — humans never see this field; bots fill every visible-by-DOM
  // input. Hidden via off-screen positioning + aria-hidden + tabIndex=-1.
  // Server returns 200 OK silently on non-empty submit (don't reveal the
  // catch). Mirrors /api/lead-magnet pattern.
  website: string;

  // Step 1 — Identity
  first_name: string;
  last_name: string;
  email: string;
  phone: string;

  // Step 2 — Household
  is_couple: boolean;
  partner_name: string;
  partner_email: string;
  partner_participation: "" | "both_attending_all_meetings" | "primary_contact_only" | "uncertain";

  // Step 3 — Financial gestalt
  est_net_worth_usd: string;
  est_investable_assets_usd: string;
  est_annual_income_usd: string;
  income_stability_flag: "" | "stable" | "variable" | "unclear";
  prospect_segment: "" | "re_investor" | "business_owner" | "portfolio_post_exit";

  // Step 4 — Planning context
  presenting_issue: string;
  success_definition: string;
  current_obstacle: string;
  five_year_aspiration: string;
  prior_planning_experience: string;

  // Step 5 — Consent + send
  privacy_policy_consent: boolean;
  lead_source: string;
}

const INITIAL_STATE: FormState = {
  website: "",

  first_name: "",
  last_name: "",
  email: "",
  phone: "",

  is_couple: false,
  partner_name: "",
  partner_email: "",
  partner_participation: "",

  est_net_worth_usd: "",
  est_investable_assets_usd: "",
  est_annual_income_usd: "",
  income_stability_flag: "",
  prospect_segment: "",

  presenting_issue: "",
  success_definition: "",
  current_obstacle: "",
  five_year_aspiration: "",
  prior_planning_experience: "",

  privacy_policy_consent: false,
  lead_source: "",
};

function parseDollarInput(raw: string): number | undefined {
  // Strip commas + $ + spaces. Empty string → undefined.
  const clean = raw.replace(/[$,\s]/g, "").trim();
  if (!clean) return undefined;
  const n = Number(clean);
  if (!Number.isFinite(n) || n < 0) return undefined;
  return n;
}

const SEGMENT_LABELS: Record<NonNullable<FormState["prospect_segment"]>, string> = {
  "": "Select one (optional)",
  re_investor: "Real estate investor",
  business_owner: "Business owner",
  portfolio_post_exit: "Portfolio-stage / post-exit",
};

const STABILITY_LABELS: Record<NonNullable<FormState["income_stability_flag"]>, string> = {
  "": "Select one (optional)",
  stable: "Stable (W-2 / predictable)",
  variable: "Variable (commission / equity / business)",
  unclear: "Hard to characterize",
};

const PARTNER_PARTICIPATION_LABELS: Record<
  NonNullable<FormState["partner_participation"]>,
  string
> = {
  "": "Select one",
  both_attending_all_meetings: "Both of us attending all meetings",
  primary_contact_only: "I'm the primary contact",
  uncertain: "Not sure yet",
};

export interface IntakeFormProps {
  /** Default = "wiy". Pass "tspw" from a TSPW-side surface if reused. */
  brand?: "wiy" | "tspw";
  /** Cal.com getting-acquainted slug for the success-step CTA. */
  gaPath?: string;
}

export default function IntakeForm({
  brand = "wiy",
  gaPath = "/get-acquainted",
}: IntakeFormProps) {
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onText(key: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      update(key, e.target.value as FormState[typeof key]);
    };
  }

  function onCheckbox(key: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      update(key, e.target.checked as FormState[typeof key]);
    };
  }

  function next() {
    if (step < TOTAL_STEPS) setStep((s) => (s + 1) as Step);
  }
  function back() {
    if (step > 0) setStep((s) => (s - 1) as Step);
  }

  // Per-step validation — light client-side; server-side via Zod at receiver.
  function canAdvance(): boolean {
    switch (step) {
      case 0:
        return true;
      case 1:
        return (
          data.first_name.trim().length > 0 &&
          data.email.trim().length > 0 &&
          /@/.test(data.email)
        );
      case 2:
        if (!data.is_couple) return true;
        return data.partner_name.trim().length > 0 && /@/.test(data.partner_email);
      case 3:
        return true; // financial gestalt is fully optional
      case 4:
        return true; // planning context is fully optional
      case 5:
        return data.privacy_policy_consent && status !== "submitting";
      default:
        return false;
    }
  }

  async function submit() {
    if (!data.privacy_policy_consent) {
      setErrorMsg("Consent is required to submit.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      brand,
      // Honeypot — humans leave blank; server silently 200s if non-empty.
      website: data.website,
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim() || undefined,
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim() || undefined,

      sms_consent: true, // checkbox copy bundles SMS with Privacy Policy

      est_net_worth_usd: parseDollarInput(data.est_net_worth_usd),
      est_investable_assets_usd: parseDollarInput(data.est_investable_assets_usd),
      est_annual_income_usd: parseDollarInput(data.est_annual_income_usd),
      income_stability_flag: data.income_stability_flag || undefined,
      prospect_segment: data.prospect_segment || undefined,

      planning_context: {
        presenting_issue: data.presenting_issue.trim() || undefined,
        success_definition: data.success_definition.trim() || undefined,
        current_obstacle: data.current_obstacle.trim() || undefined,
        five_year_aspiration: data.five_year_aspiration.trim() || undefined,
      },

      is_couple: data.is_couple,
      partner_name: data.is_couple ? data.partner_name.trim() : undefined,
      partner_email: data.is_couple ? data.partner_email.trim().toLowerCase() : undefined,
      partner_participation: data.is_couple
        ? data.partner_participation || undefined
        : undefined,

      prior_planning_experience: data.prior_planning_experience.trim() || undefined,

      lead_source: data.lead_source.trim() || "wiy-marketing-site",
    };

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          json?.error ||
            "Something went wrong sending your intake. Email josh@wealthinyourself.com and we'll handle it manually.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Email josh@wealthinyourself.com and we'll handle it manually.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-8 sm:p-12 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="inline-flex w-16 h-16 rounded-full bg-secondary/10 items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-primary">Got it. Now let&rsquo;s talk.</h2>
          <p className="mt-4 text-lg text-neutral-dark/80 leading-relaxed">
            Your intake is in. The next step is a 60-minute Getting Acquainted
            conversation — that&rsquo;s where we go deeper on what you&rsquo;re
            building and figure out if working together makes sense.
          </p>
          <a
            href={gaPath}
            className="inline-block mt-8 px-8 py-4 bg-secondary text-primary font-semibold text-lg rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Book your Getting Acquainted call
          </a>
          <p className="mt-6 text-sm text-neutral-dark/60">
            Or if you&rsquo;d rather email first: josh@wealthinyourself.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-6 sm:p-10 max-w-2xl mx-auto">
      {/*
        Honeypot — bots that fill every input will populate this; server
        silently returns 200 OK on non-empty submit without doing any work.
        Hidden via off-screen positioning + aria-hidden + tabIndex=-1 +
        autocomplete=off. Pattern mirrors src/app/api/lead-magnet.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website-honeypot">Website (leave blank)</label>
        <input
          type="text"
          id="website-honeypot"
          name="website"
          value={data.website}
          onChange={onText("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-neutral-dark/60 mb-2">
          <span>Step {step === 0 ? "0" : step} of {TOTAL_STEPS}</span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}% complete</span>
        </div>
        <div className="h-1.5 bg-neutral-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Tell me about you.
          </h2>
          <p className="mt-4 text-lg text-neutral-dark/80 leading-relaxed">
            Six short steps. About 5 minutes. The first three give me the
            financial picture; the last two give me the human one. The more
            you share, the better prepared I am for our first conversation.
          </p>
          <p className="mt-4 text-neutral-dark/70 text-sm">
            Skip anything that doesn&rsquo;t apply. You can always fill in
            the rest when we meet.
          </p>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Who are you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="First name" required>
              <input
                type="text"
                value={data.first_name}
                onChange={onText("first_name")}
                className={inputClass}
                required
                autoComplete="given-name"
              />
            </FormField>
            <FormField label="Last name">
              <input
                type="text"
                value={data.last_name}
                onChange={onText("last_name")}
                className={inputClass}
                autoComplete="family-name"
              />
            </FormField>
          </div>
          <FormField label="Email" required>
            <input
              type="email"
              value={data.email}
              onChange={onText("email")}
              className={inputClass}
              required
              autoComplete="email"
              placeholder="your@email.com"
            />
          </FormField>
          <FormField label="Phone" hint="Optional. We'll text you appointment reminders if you opt in below.">
            <input
              type="tel"
              value={data.phone}
              onChange={onText("phone")}
              className={inputClass}
              autoComplete="tel"
              placeholder="(555) 555-5555"
            />
          </FormField>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Your household.</h2>
          <p className="text-sm text-neutral-dark/70">
            If you&rsquo;re planning with a spouse or partner, give me their
            details too so I can set them up alongside you.
          </p>
          <label className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              checked={data.is_couple}
              onChange={onCheckbox("is_couple")}
              className="mt-1 h-4 w-4 text-secondary focus:ring-secondary"
            />
            <span className="text-neutral-dark">
              I&rsquo;m planning with a spouse or partner.
            </span>
          </label>

          {data.is_couple && (
            <div className="space-y-4 pl-7 border-l-2 border-secondary/30 mt-4">
              <FormField label="Partner's name" required>
                <input
                  type="text"
                  value={data.partner_name}
                  onChange={onText("partner_name")}
                  className={inputClass}
                  required
                />
              </FormField>
              <FormField label="Partner's email" required hint="They'll get their own portal access tied to your household.">
                <input
                  type="email"
                  value={data.partner_email}
                  onChange={onText("partner_email")}
                  className={inputClass}
                  required
                  placeholder="partner@email.com"
                />
              </FormField>
              <FormField label="How do you want to do this together?">
                <select
                  value={data.partner_participation}
                  onChange={onText("partner_participation")}
                  className={inputClass}
                >
                  {Object.entries(PARTNER_PARTICIPATION_LABELS).map(([v, lbl]) => (
                    <option key={v} value={v}>
                      {lbl}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Your financial picture.</h2>
          <p className="text-sm text-neutral-dark/70">
            Rough estimates are fine — we&rsquo;ll get the real numbers later.
            Skip what you don&rsquo;t want to share here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Estimated net worth" hint="Assets minus debts.">
              <DollarInput value={data.est_net_worth_usd} onChange={onText("est_net_worth_usd")} />
            </FormField>
            <FormField label="Investable assets" hint="Excludes primary residence.">
              <DollarInput value={data.est_investable_assets_usd} onChange={onText("est_investable_assets_usd")} />
            </FormField>
            <FormField label="Annual household income">
              <DollarInput value={data.est_annual_income_usd} onChange={onText("est_annual_income_usd")} />
            </FormField>
            <FormField label="Income type">
              <select
                value={data.income_stability_flag}
                onChange={onText("income_stability_flag")}
                className={inputClass}
              >
                {Object.entries(STABILITY_LABELS).map(([v, lbl]) => (
                  <option key={v} value={v}>
                    {lbl}
                  </option>
                ))}
              </select>
            </FormField>
          </div>
          <FormField label="Which of these describes you best?" hint="Helps me come prepared with the right context.">
            <select
              value={data.prospect_segment}
              onChange={onText("prospect_segment")}
              className={inputClass}
            >
              {Object.entries(SEGMENT_LABELS).map(([v, lbl]) => (
                <option key={v} value={v}>
                  {lbl}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">What brings you here?</h2>
          <p className="text-sm text-neutral-dark/70">
            Take your time. There are no wrong answers — short is fine, long
            is fine, blank is fine.
          </p>
          <FormField label="What's the one financial thing on your mind right now?">
            <textarea
              value={data.presenting_issue}
              onChange={onText("presenting_issue")}
              className={`${inputClass} min-h-[96px]`}
              rows={3}
            />
          </FormField>
          <FormField label="What would success a year from now look like?">
            <textarea
              value={data.success_definition}
              onChange={onText("success_definition")}
              className={`${inputClass} min-h-[96px]`}
              rows={3}
            />
          </FormField>
          <FormField label="What's getting in the way of making that happen?">
            <textarea
              value={data.current_obstacle}
              onChange={onText("current_obstacle")}
              className={`${inputClass} min-h-[96px]`}
              rows={3}
            />
          </FormField>
          <FormField label="Five years out, what does life actually look like?">
            <textarea
              value={data.five_year_aspiration}
              onChange={onText("five_year_aspiration")}
              className={`${inputClass} min-h-[96px]`}
              rows={3}
            />
          </FormField>
          <FormField label="Have you worked with a financial planner before? (Optional)">
            <textarea
              value={data.prior_planning_experience}
              onChange={onText("prior_planning_experience")}
              className={`${inputClass} min-h-[72px]`}
              rows={2}
              placeholder="What worked, what didn't, what you'd want different."
            />
          </FormField>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Almost done.</h2>
          <p className="text-neutral-dark/80">
            One consent box, and we&rsquo;re ready to talk. After you submit,
            you&rsquo;ll get to book a 60-minute Getting Acquainted
            conversation on my calendar.
          </p>
          <FormField label="How did you hear about Wealth In Yourself? (Optional)">
            <input
              type="text"
              value={data.lead_source}
              onChange={onText("lead_source")}
              className={inputClass}
              placeholder="A friend, podcast, search, etc."
            />
          </FormField>

          {/*
            Privacy Policy + SMS consent gate — verbatim copy locked
            2026-05-20 per op-debt AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1.
            Mirrors src/components/LeadMagnetCapture.tsx; any edit requires
            Compliance Officer re-attestation (Standing Rule 8).
          */}
          <label className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              checked={data.privacy_policy_consent}
              onChange={onCheckbox("privacy_policy_consent")}
              required
              aria-required="true"
              className="mt-1 h-4 w-4 flex-shrink-0 text-secondary focus:ring-secondary"
            />
            <span className="text-sm text-neutral-dark/80">
              By checking this box, I agree to Wealth In Yourself&rsquo;s{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-secondary"
              >
                Privacy Policy
              </a>
              . I also consent to receive text messages from Wealth In
              Yourself, including appointment reminders, responses to my
              questions, event announcements, and financial education
              resources. Message frequency varies. Message and data rates
              may apply. Text HELP for help or STOP to opt out.
            </span>
          </label>

          {status === "error" && errorMsg && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
              {errorMsg}
            </p>
          )}
        </div>
      )}

      {/* Nav */}
      <div className="mt-10 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            disabled={status === "submitting"}
            className="px-5 py-2.5 text-neutral-dark/70 hover:text-primary font-medium transition-colors disabled:opacity-50"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50"
          >
            {step === 0 ? "Get started →" : "Continue →"}
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canAdvance()}
            className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : "Submit & book the call →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ---------- shared UI primitives ----------

const inputClass =
  "w-full px-4 py-2.5 rounded-lg bg-white border border-neutral-bg text-neutral-dark placeholder:text-neutral-dark/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60";

function FormField({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-primary mb-1.5">
        {label}
        {required && <span className="text-secondary ml-1">*</span>}
      </span>
      {children}
      {hint && (
        <span className="block text-xs text-neutral-dark/60 mt-1.5">{hint}</span>
      )}
    </label>
  );
}

function DollarInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark/50 text-sm">
        $
      </span>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        className={`${inputClass} pl-8`}
        placeholder="e.g. 1,500,000"
      />
    </div>
  );
}
