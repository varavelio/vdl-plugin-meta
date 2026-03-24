import {
  definePlugin,
  type IrSchema,
  type PluginInput,
} from "@varavel/vdl-plugin-sdk";
import { options } from "@varavel/vdl-plugin-sdk/utils";

const DEFAULT_OUTPUT_FILE = "vdl-meta.json";

/**
 * Resolves the output filename for the generated metadata file.
 *
 * The plugin reads `outFile` from `vdl.config.vdl` and falls back to
 * `vdl-meta.json` when the option is missing or blank.
 *
 * @param input - Plugin invocation payload received from VDL.
 * @returns A safe output filename.
 */
function resolveOutFile(input: PluginInput): string {
  const outFile = options.getOptionString(
    input.options,
    "outFile",
    DEFAULT_OUTPUT_FILE,
  );
  const trimmedOutFile = outFile.trim();

  return trimmedOutFile.length > 0 ? trimmedOutFile : DEFAULT_OUTPUT_FILE;
}

/**
 * Resolves whether source `position` metadata should be kept in the output.
 *
 * @param input - Plugin invocation payload received from VDL.
 * @returns `true` when `includePositions` is enabled, otherwise `false`.
 */
function resolveIncludePositions(input: PluginInput): boolean {
  return options.getOptionBool(input.options, "includePositions", false);
}

/**
 * Removes `position` keys while JSON serializing IR data.
 *
 * @param key - Current JSON key being serialized.
 * @param value - Current JSON value being serialized.
 * @returns The value to keep in output, or `undefined` to omit it.
 */
function removePositionReplacer(key: string, value: unknown): unknown {
  return key === "position" ? undefined : value;
}

/**
 * Serializes IR as formatted JSON, optionally stripping all `position` keys.
 *
 * @param ir - Resolved VDL intermediate representation.
 * @param includePositions - Whether source positions should be preserved.
 * @returns Human-readable JSON content with a trailing newline.
 */
function serializeIr(ir: IrSchema, includePositions: boolean): string {
  const json = includePositions
    ? JSON.stringify(ir, null, 2)
    : JSON.stringify(ir, removePositionReplacer, 2);

  return `${json}\n`;
}

/**
 * Generates a JSON representation of the VDL IR for downstream tooling.
 *
 * Supported plugin options:
 * - `outFile`: output filename (default: `vdl-meta.json`)
 * - `includePositions`: include IR source locations (default: `false`)
 *
 * @param input - Plugin invocation payload provided by VDL.
 * @returns One generated metadata file.
 */
export const generate = definePlugin((input) => {
  const outFile = resolveOutFile(input);
  const includePositions = resolveIncludePositions(input);
  const content = serializeIr(input.ir, includePositions);

  return {
    files: [
      {
        path: outFile,
        content,
      },
    ],
  };
});
