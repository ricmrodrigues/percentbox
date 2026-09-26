export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  published: string;
  /** ISO date (YYYY-MM-DD) */
  updated: string;
  relatedTools: string[];
  relatedGuides: string[];
  faqs: GuideFaq[];
  body: string;
}

export const GUIDE_AUTHOR = "Ricardo Rodrigues";
