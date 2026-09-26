import { markdownToPlainText } from "@/lib/guide-markdown";
import { everydayGuides } from "./everyday";
import { financeGuides } from "./finance";
import { moreGuidesA } from "./more-a";
import { moreGuidesB } from "./more-b";
import { priorityGuides } from "./priority";
import { GUIDE_AUTHOR, type Guide } from "./types";

export { GUIDE_AUTHOR };
export type { Guide };

/** Foundational pieces first, then shopping, pricing, and credit. */
export const GUIDES: Guide[] = [
  ...everydayGuides,
  ...priorityGuides,
  ...financeGuides,
  ...moreGuidesA,
  ...moreGuidesB,
];

const bySlug = new Map(GUIDES.map((guide) => [guide.slug, guide]));

if (bySlug.size !== GUIDES.length) {
  throw new Error("Duplicate guide slug");
}

export function getGuide(slug: string): Guide | undefined {
  return bySlug.get(slug);
}

export function guidePlainText(guide: Guide): string {
  const faqText = guide.faqs.map((faq) => `${faq.q} ${faq.a}`).join(" ");
  return `${guide.title} ${guide.description} ${markdownToPlainText(guide.body)} ${faqText}`;
}

export function guideWordCount(guide: Guide): number {
  return guidePlainText(guide).trim().split(/\s+/).filter(Boolean).length;
}

export function guideReadingMinutes(guide: Guide): number {
  return Math.max(1, Math.round(guideWordCount(guide) / 220));
}

export function formatGuideDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
