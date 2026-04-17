import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/virtual-family-office", label: "Virtual Family Office" },
    { href: "/for-business-owners", label: "For Business Owners" },
    { href: "/for-real-estate-investors", label: "For Real Estate Investors" },
    { href: "/for-fire-followers", label: "For FIRE Followers" },
  ],
  Learn: [
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/calculator", label: "Fee Calculator" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/wiy-logo-stacked.png"
              alt="Wealth In Yourself"
              width={120}
              height={80}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              A flat-fee fiduciary advisory firm built for people designing their
              lives on their own terms.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs leading-relaxed max-w-4xl">
            Wealth In Yourself is an Investment Adviser registered in Nevada.
            Advisory services provided to clients nationwide where permitted.
            Registration does not imply a certain level of skill or training.
            Past performance is not indicative of future results.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/50">
            <a
              href="https://wealthinyourself.com/form-crs/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Form CRS (ADV Part 3)
            </a>
            <a
              href="https://wealthinyourself.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <span>&copy; {new Date().getFullYear()} Wealth In Yourself LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
