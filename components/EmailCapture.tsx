"use client";

import { useState } from "react";
import { ACTIVE_CAMPAIGN, campaigns } from "@/config/campaigns";

interface EmailCaptureProps {
  campaignOverride?: string;
}

export default function EmailCapture({ campaignOverride }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const campaign = campaigns[ACTIVE_CAMPAIGN];
  const seasonLabel = campaignOverride || campaign.label;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Wire up ConvertKit API when API key is provided (KI-003)
    // For now, log the submission
    console.log("Email capture:", { email, campaign: ACTIVE_CAMPAIGN });

    // Simulate success for Phase 0
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 500);
  };

  return (
    <section className="my-10 rounded-xl bg-slate-50 px-6 py-8 text-center">
      <h3 className="mb-2 text-xl font-bold text-primary">
        Get our {seasonLabel} Canadian deals guide free
      </h3>
      <p className="mb-5 text-sm text-slate-500">
        Join Canadians who shop smarter. No spam. Unsubscribe anytime.
      </p>

      {status === "success" ? (
        <p className="font-semibold text-emerald-600">
          You&apos;re in! Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Get the Guide"}
          </button>
        </form>
      )}
    </section>
  );
}
