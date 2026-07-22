import type { CalculatorMode } from "./calculations";

export interface HistoryItem {
  id: string;
  mode: CalculatorMode;
  summary: string;
  result: string;
  timestamp: number;
}

const STORAGE_KEY = "percentbox-history";
const MAX_ITEMS = 10;

export function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HistoryItem[];
    return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : [];
  } catch {
    return [];
  }
}

export function saveHistory(items: HistoryItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
  } catch {
    // quota or private mode
  }
}

export function addHistoryItem(
  items: HistoryItem[],
  item: Omit<HistoryItem, "id" | "timestamp">
): HistoryItem[] {
  const next: HistoryItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: Date.now(),
  };
  // Avoid consecutive duplicates
  if (
    items[0] &&
    items[0].summary === next.summary &&
    items[0].result === next.result
  ) {
    return items;
  }
  const updated = [next, ...items].slice(0, MAX_ITEMS);
  saveHistory(updated);
  return updated;
}

export function clearHistory(): HistoryItem[] {
  saveHistory([]);
  return [];
}
