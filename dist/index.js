"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  generate: () => generate
});
module.exports = __toCommonJS(index_exports);

// node_modules/@varavel/vdl-plugin-sdk/dist/core/define-plugin.js
function definePlugin(handler) {
  return handler;
}
__name(definePlugin, "definePlugin");

// node_modules/@varavel/vdl-plugin-sdk/dist/utils/options/get-option-bool.js
function getOptionBool(options, key, defaultValue) {
  const value = options === null || options === void 0 ? void 0 : options[key];
  if (value === void 0) return defaultValue;
  switch (value.trim().toLowerCase()) {
    case "true":
    case "1":
    case "yes":
    case "on":
    case "enable":
    case "enabled":
    case "y":
      return true;
    case "false":
    case "0":
    case "no":
    case "off":
    case "disable":
    case "disabled":
    case "n":
      return false;
    default:
      return defaultValue;
  }
}
__name(getOptionBool, "getOptionBool");

// node_modules/@varavel/vdl-plugin-sdk/dist/utils/options/get-option-string.js
function getOptionString(options, key, defaultValue) {
  const value = options === null || options === void 0 ? void 0 : options[key];
  return value === void 0 ? defaultValue : value;
}
__name(getOptionString, "getOptionString");

// src/index.ts
var DEFAULT_OUTPUT_FILE = "vdl-meta.json";
function resolveOutFile(input) {
  const outFile = getOptionString(
    input.options,
    "outFile",
    DEFAULT_OUTPUT_FILE
  );
  const trimmedOutFile = outFile.trim();
  return trimmedOutFile.length > 0 ? trimmedOutFile : DEFAULT_OUTPUT_FILE;
}
__name(resolveOutFile, "resolveOutFile");
function resolveIncludePositions(input) {
  return getOptionBool(input.options, "includePositions", false);
}
__name(resolveIncludePositions, "resolveIncludePositions");
function removePositionReplacer(key, value) {
  return key === "position" ? void 0 : value;
}
__name(removePositionReplacer, "removePositionReplacer");
function serializeIr(ir, includePositions) {
  const json = includePositions ? JSON.stringify(ir, null, 2) : JSON.stringify(ir, removePositionReplacer, 2);
  return `${json}
`;
}
__name(serializeIr, "serializeIr");
var generate = definePlugin((input) => {
  const outFile = resolveOutFile(input);
  const includePositions = resolveIncludePositions(input);
  const content = serializeIr(input.ir, includePositions);
  return {
    files: [
      {
        path: outFile,
        content
      }
    ]
  };
});
