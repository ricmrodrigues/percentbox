export interface FieldNote {
  name: string;
  detail: string;
}

export interface Walkthrough {
  title: string;
  paragraphs: string[];
}

export interface EditorialDepth {
  relatedGuides: string[];
  audience: string[];
  fields: FieldNote[];
  formulaNotes: string[];
  walkthroughs: Walkthrough[];
  extraPitfalls: { title: string; detail: string }[];
  extraFaqs: { q: string; a: string }[];
}
