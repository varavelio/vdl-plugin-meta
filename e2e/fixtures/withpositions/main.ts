import { readFileSync } from "node:fs";
import * as misc from "@varavel/vdl-plugin-sdk/utils/misc";

/**
 * Detects whether a value contains a `position` key at any depth.
 *
 * @param value - Parsed JSON value to inspect.
 * @returns `true` when at least one `position` key exists.
 */
function hasPositionKey(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some(hasPositionKey);
  }

  if (value && typeof value === "object") {
    for (const [key, nestedValue] of Object.entries(value)) {
      if (key === "position") {
        return true;
      }

      if (hasPositionKey(nestedValue)) {
        return true;
      }
    }
  }

  return false;
}

const metaJson = readFileSync("gen/schema.json", "utf-8");
const parsedMeta = JSON.parse(metaJson);

misc.assert(
  hasPositionKey(parsedMeta) === true,
  "Expected generated metadata to keep position keys when includePositions is enabled.",
);
