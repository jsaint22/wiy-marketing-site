import fs from "fs/promises";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.csv");

export async function appendSubscriber(email: string, source: string = "lead-magnet"): Promise<void> {
  const timestamp = new Date().toISOString();
  const line = `${email},${timestamp},${source}\n`;

  try {
    // Check if file exists; if not, write header first
    try {
      await fs.access(SUBSCRIBERS_FILE);
    } catch {
      await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
      await fs.writeFile(SUBSCRIBERS_FILE, "email,subscribed_at,source\n");
    }

    await fs.appendFile(SUBSCRIBERS_FILE, line);
    console.log(`[Subscriber] Added: ${email}`);
  } catch (err) {
    // Log but don't fail the request — email was already sent
    console.error("[Subscriber] Failed to save:", err);
  }
}
