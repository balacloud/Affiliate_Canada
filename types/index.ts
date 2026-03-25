export interface Merchant {
  id: string;
  name: string;
  affiliateNetwork: "impact" | "direct" | "maxbounty" | "amazon";
  affiliateBaseUrl: string;
  commissionNote: string;
  tags: string[];
}

export interface Product {
  id: string;
  merchantId: string;
  name: string;
  category:
    | "monitor"
    | "chair"
    | "webcam"
    | "desk"
    | "lighting"
    | "headset";
  normalPrice: number;
  salePrice?: number;
  currency: "CAD";
  affiliateLink: string;
  images: string[];
  pros: string[];
  cons: string[];
  chooseIf: string;
  avoidIf: string;
  specs: Record<string, string>;
  region: "canada";
  provinces?: string[];
  startDate?: string;
  endDate?: string;
  tags: string[];
  slug: string;
  editorialBadge?: "Best Overall" | "Best Budget" | "Best Premium" | "Staff Pick";
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  season:
    | "Q1_2026_WINTER"
    | "Q2_2026_SPRING"
    | "Q3_2026_BTS"
    | "Q4_2026_BOXING";
  startDate: string;
  endDate: string;
  description: string;
  heroHeadline: string;
  productIds: string[];
  tags: string[];
}

export interface ContentPage {
  slug: string;
  title: string;
  description: string;
  collectionIds: string[];
  schemaType: "Article" | "ProductCollection" | "FAQPage";
  language: "en" | "fr";
  lastUpdated: string;
}

export interface ClickEvent {
  timestamp: string;
  sessionId: string;
  pageSlug: string;
  productId: string;
  merchantId: string;
  campaignId: string;
  affiliateLink: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type CampaignKey =
  | "Q1_2026_WINTER"
  | "Q2_2026_SPRING"
  | "Q3_2026_BTS"
  | "Q4_2026_BOXING";

export interface Campaign {
  label: string;
  slug: string;
  startDate: string;
  endDate: string;
  heroHeadline: string;
  color: string;
}
