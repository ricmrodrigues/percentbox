import type { CalculatorMode } from "./calculations";

export interface ExamplePreset {
  label: string;
  mode: CalculatorMode;
  a: string;
  b: string;
  direction?: "increase" | "decrease";
  people?: string;
}

export const POPULAR_EXAMPLES: ExamplePreset[] = [
  {
    label: "What is 15% of 200?",
    mode: "percent-of",
    a: "15",
    b: "200",
  },
  {
    label: "What is 20% of 50?",
    mode: "percent-of",
    a: "20",
    b: "50",
  },
  {
    label: "25 is what % of 100?",
    mode: "is-what-percent",
    a: "25",
    b: "100",
  },
  {
    label: "Increase 80 by 25%",
    mode: "increase-decrease",
    a: "80",
    b: "25",
    direction: "increase",
  },
  {
    label: "18% tip on $64.50",
    mode: "tip",
    a: "64.50",
    b: "18",
    people: "1",
  },
  {
    label: "30% off $99.99",
    mode: "discount",
    a: "99.99",
    b: "30",
  },
];

export const LOAD_EXAMPLE_EVENT = "percentbox:load-example";

export function loadExample(example: ExamplePreset): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<ExamplePreset>(LOAD_EXAMPLE_EVENT, { detail: example })
  );
  document.getElementById("calculator")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
