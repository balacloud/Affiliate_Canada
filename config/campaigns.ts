import type { Campaign, CampaignKey } from "@/types";

export const ACTIVE_CAMPAIGN: CampaignKey = "Q2_2026_SPRING";

export const campaigns: Record<CampaignKey, Campaign> = {
  Q1_2026_WINTER: {
    label: "New Year WFH Reset 2026",
    slug: "q1-winter-2026",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    heroHeadline: "Start 2026 with a better home office setup",
    color: "#3B82F6",
  },
  Q2_2026_SPRING: {
    label: "Spring Setup 2026",
    slug: "q2-spring-2026",
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    heroHeadline: "Spring refresh your Canadian home office",
    color: "#10B981",
  },
  Q3_2026_BTS: {
    label: "Back to School / Work 2026",
    slug: "q3-back-to-school-2026",
    startDate: "2026-07-01",
    endDate: "2026-09-30",
    heroHeadline: "Best back-to-school setups in Canada 2026",
    color: "#F59E0B",
  },
  Q4_2026_BOXING: {
    label: "Boxing Day & Black Friday 2026",
    slug: "q4-boxing-day-2026",
    startDate: "2026-10-01",
    endDate: "2026-12-31",
    heroHeadline: "Best Boxing Day tech deals in Canada 2026",
    color: "#EF4444",
  },
};

export function getActiveCampaign(): Campaign {
  return campaigns[ACTIVE_CAMPAIGN];
}

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return Object.values(campaigns).find((c) => c.slug === slug);
}

export function getCampaignKeyBySlug(slug: string): CampaignKey | undefined {
  const entry = Object.entries(campaigns).find(([, c]) => c.slug === slug);
  return entry ? (entry[0] as CampaignKey) : undefined;
}
