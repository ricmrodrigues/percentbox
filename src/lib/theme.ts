export type Theme = "light" | "dark";

const STORAGE_KEY = "percentbox-theme";

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    if (t === "light" || t === "dark") return t;
  } catch {
    // ignore
  }
  return null;
}

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function resolveTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}
