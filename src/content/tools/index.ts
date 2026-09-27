import { depthChange } from "./depth-change";
import { depthCore } from "./depth-core";
import { depthFinance } from "./depth-finance";
import { depthShopping } from "./depth-shopping";
import type { EditorialDepth } from "./depth-types";

export type { EditorialDepth } from "./depth-types";

export const TOOL_DEPTH: Record<string, EditorialDepth> = {
  ...depthCore,
  ...depthChange,
  ...depthShopping,
  ...depthFinance,
};
