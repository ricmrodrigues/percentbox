export type InlinePart =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "code"; text: string }
  | { type: "link"; text: string; href: string };

export type GuideBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string };

function isSafeHref(href: string): boolean {
  if (href.startsWith("/") && !href.startsWith("//")) return true;
  try {
    const url = new URL(href);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function parseInline(input: string): InlinePart[] {
  const re = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: InlinePart[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(input))) {
    if (match.index > last) {
      parts.push({ type: "text", text: input.slice(last, match.index) });
    }
    if (match[2]) parts.push({ type: "strong", text: match[2] });
    else if (match[3]) parts.push({ type: "code", text: match[3] });
    else if (match[4] && match[5] && isSafeHref(match[5])) {
      parts.push({ type: "link", text: match[4], href: match[5] });
    } else if (match[4]) {
      parts.push({ type: "text", text: match[4] });
    }
    last = match.index + match[0].length;
  }
  if (last < input.length) parts.push({ type: "text", text: input.slice(last) });
  return parts;
}

function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function isSeparator(line: string): boolean {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

/** Small markdown subset: headings, paragraphs, lists, tables, and callout quotes. */
export function parseGuideMarkdown(source: string): GuideBlock[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: GuideBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i += 1;
      continue;
    }
    if (line.trim().startsWith("> ")) {
      const notes: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        notes.push(lines[i].trim().slice(2).trim());
        i += 1;
      }
      blocks.push({ type: "note", text: notes.join(" ") });
      continue;
    }
    if (line.trim().startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!isSeparator(lines[i])) rows.push(splitRow(lines[i]));
        i += 1;
      }
      if (rows.length > 0) {
        const [headers, ...body] = rows;
        blocks.push({ type: "table", headers, rows: body });
      }
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, "").trim());
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, "").trim());
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("> ") &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i += 1;
    }
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

export function markdownToPlainText(source: string): string {
  return parseGuideMarkdown(source)
    .flatMap((block) => {
      switch (block.type) {
        case "h2":
        case "h3":
        case "p":
        case "note":
          return [block.text];
        case "ul":
        case "ol":
          return block.items;
        case "table":
          return [...block.headers, ...block.rows.flat()];
      }
    })
    .join(" ");
}
