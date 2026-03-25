import type { ClickEvent } from "@/types";

export async function trackClick(
  event: Omit<ClickEvent, "timestamp" | "sessionId">
): Promise<void> {
  try {
    await fetch("/api/track-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
  } catch {
    // Fail silently — click tracking should never block the user
    console.error("Failed to track click");
  }
}
