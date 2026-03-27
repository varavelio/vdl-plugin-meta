import * as irb from "@varavel/vdl-plugin-sdk/testing";
import { describe, expect, it } from "vitest";
import { generate } from "./index";

/**
 * Builds a plugin input with enough nested IR structure to validate
 * position filtering behavior in generated metadata output.
 *
 * @returns A realistic plugin input payload.
 */
function buildPluginInput() {
  return irb.pluginInput({
    ir: irb.schema({
      types: [
        irb.typeDef(
          "User",
          irb.objectType([
            irb.field("id", irb.primitiveType("string")),
            irb.field("active", irb.primitiveType("bool")),
          ]),
          {
            annotations: [irb.annotation("entity")],
          },
        ),
      ],
    }),
  });
}

/**
 * Detects whether a value contains a `position` key at any depth.
 *
 * @param value - Parsed JSON value to inspect.
 * @returns `true` when at least one `position` key is present.
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

describe("generate", () => {
  it("writes vdl-meta.json and strips positions by default", () => {
    const output = generate(buildPluginInput());
    const files = output.files ?? [];
    const firstFile = files[0];

    expect(files).toHaveLength(1);
    expect(firstFile).toBeDefined();

    if (!firstFile) {
      throw new Error("Expected one generated file.");
    }

    expect(firstFile.path).toBe("vdl-meta.json");

    const parsed = JSON.parse(firstFile.content);
    expect(hasPositionKey(parsed)).toBe(false);
  });

  it("uses outFile and includes positions when requested", () => {
    const output = generate(
      irb.pluginInput({
        ...buildPluginInput(),
        options: {
          outFile: "schema.json",
          includePositions: "true",
        },
      }),
    );
    const files = output.files ?? [];
    const firstFile = files[0];

    expect(files).toHaveLength(1);
    expect(firstFile).toBeDefined();

    if (!firstFile) {
      throw new Error("Expected one generated file.");
    }

    expect(firstFile.path).toBe("schema.json");

    const parsed = JSON.parse(firstFile.content);
    expect(hasPositionKey(parsed)).toBe(true);
  });

  it("falls back to default output file when outFile is blank", () => {
    const output = generate(
      irb.pluginInput({
        ...buildPluginInput(),
        options: {
          outFile: "   ",
        },
      }),
    );
    const files = output.files ?? [];
    const firstFile = files[0];

    expect(files).toHaveLength(1);
    expect(firstFile).toBeDefined();

    if (!firstFile) {
      throw new Error("Expected one generated file.");
    }

    expect(firstFile.path).toBe("vdl-meta.json");
  });
});
