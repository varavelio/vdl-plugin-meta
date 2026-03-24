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

// node_modules/@varavel/vdl-plugin-sdk/dist/index.js
function definePlugin(handler) {
  return handler;
}
__name(definePlugin, "definePlugin");

// node_modules/@varavel/vdl-plugin-sdk/dist/chunk-YKewjYmz.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJSMin = /* @__PURE__ */ __name((cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports), "__commonJSMin");
var __exportAll = /* @__PURE__ */ __name((all, no_symbols) => {
  let target = {};
  for (var name in all) __defProp2(target, name, {
    get: all[name],
    enumerable: true
  });
  if (!no_symbols) __defProp2(target, Symbol.toStringTag, { value: "Module" });
  return target;
}, "__exportAll");
var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames2(from), i = 0, n = keys.length, key; i < n; i++) {
    key = keys[i];
    if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
      get: ((k) => from[k]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
    });
  }
  return to;
}, "__copyProps");
var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod)), "__toESM");
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: /* @__PURE__ */ __name((a, b) => (typeof require !== "undefined" ? require : a)[b], "get") }) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});

// node_modules/@varavel/vdl-plugin-sdk/dist/utils/index.js
function partial$1(func, ...partialArgs) {
  return partialImpl(func, placeholderSymbol$1, ...partialArgs);
}
__name(partial$1, "partial$1");
function partialImpl(func, placeholder, ...partialArgs) {
  const partialed = /* @__PURE__ */ __name(function(...providedArgs) {
    let providedArgsIndex = 0;
    const substitutedArgs = partialArgs.slice().map((arg) => arg === placeholder ? providedArgs[providedArgsIndex++] : arg);
    const remainingArgs = providedArgs.slice(providedArgsIndex);
    return func.apply(this, substitutedArgs.concat(remainingArgs));
  }, "partialed");
  if (func.prototype) partialed.prototype = Object.create(func.prototype);
  return partialed;
}
__name(partialImpl, "partialImpl");
var placeholderSymbol$1 = /* @__PURE__ */ Symbol("partial.placeholder");
partial$1.placeholder = placeholderSymbol$1;
function partialRight$1(func, ...partialArgs) {
  return partialRightImpl(func, placeholderSymbol, ...partialArgs);
}
__name(partialRight$1, "partialRight$1");
function partialRightImpl(func, placeholder, ...partialArgs) {
  const partialedRight = /* @__PURE__ */ __name(function(...providedArgs) {
    const placeholderLength = partialArgs.filter((arg) => arg === placeholder).length;
    const rangeLength = Math.max(providedArgs.length - placeholderLength, 0);
    const remainingArgs = providedArgs.slice(0, rangeLength);
    let providedArgsIndex = rangeLength;
    const substitutedArgs = partialArgs.slice().map((arg) => arg === placeholder ? providedArgs[providedArgsIndex++] : arg);
    return func.apply(this, remainingArgs.concat(substitutedArgs));
  }, "partialedRight");
  if (func.prototype) partialedRight.prototype = Object.create(func.prototype);
  return partialedRight;
}
__name(partialRightImpl, "partialRightImpl");
var placeholderSymbol = /* @__PURE__ */ Symbol("partialRight.placeholder");
partialRight$1.placeholder = placeholderSymbol;
function getOptionArray(options, key, defaultValue = [], separator = ",") {
  const value = options === null || options === void 0 ? void 0 : options[key];
  if (value === void 0) return defaultValue;
  const trimmedValue = value.trim();
  if (trimmedValue === "") return [];
  return trimmedValue.split(separator).map((item) => item.trim()).filter((item) => item.length > 0);
}
__name(getOptionArray, "getOptionArray");
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
function getOptionEnum(options, key, allowedValues, defaultValue) {
  const value = options === null || options === void 0 ? void 0 : options[key];
  if (value === void 0) return defaultValue;
  const trimmedValue = value.trim();
  if (trimmedValue === "") return defaultValue;
  return allowedValues.includes(trimmedValue) ? trimmedValue : defaultValue;
}
__name(getOptionEnum, "getOptionEnum");
function getOptionNumber(options, key, defaultValue) {
  const value = options === null || options === void 0 ? void 0 : options[key];
  if (value === void 0) return defaultValue;
  const trimmedValue = value.trim();
  if (trimmedValue === "") return defaultValue;
  const parsedValue = Number(trimmedValue);
  return Number.isFinite(parsedValue) ? parsedValue : defaultValue;
}
__name(getOptionNumber, "getOptionNumber");
function getOptionString(options, key, defaultValue) {
  const value = options === null || options === void 0 ? void 0 : options[key];
  return value === void 0 ? defaultValue : value;
}
__name(getOptionString, "getOptionString");
var options_exports = /* @__PURE__ */ __exportAll({
  getOptionArray: /* @__PURE__ */ __name(() => getOptionArray, "getOptionArray"),
  getOptionBool: /* @__PURE__ */ __name(() => getOptionBool, "getOptionBool"),
  getOptionEnum: /* @__PURE__ */ __name(() => getOptionEnum, "getOptionEnum"),
  getOptionNumber: /* @__PURE__ */ __name(() => getOptionNumber, "getOptionNumber"),
  getOptionString: /* @__PURE__ */ __name(() => getOptionString, "getOptionString")
});
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
__name(ownKeys, "ownKeys");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
__name(_objectSpread, "_objectSpread");
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) Object.defineProperty(obj, key, {
    value,
    enumerable: true,
    configurable: true,
    writable: true
  });
  else obj[key] = value;
  return obj;
}
__name(_defineProperty, "_defineProperty");
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
__name(_toPropertyKey, "_toPropertyKey");
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
__name(_toPrimitive, "_toPrimitive");
var dedent$1 = createDedent({});
function createDedent(options) {
  dedent.withOptions = (newOptions) => createDedent(_objectSpread(_objectSpread({}, options), newOptions));
  return dedent;
  function dedent(strings, ...values) {
    const raw = typeof strings === "string" ? [strings] : strings.raw;
    const { alignValues = false, escapeSpecialCharacters = Array.isArray(strings), trimWhitespace = true } = options;
    let result = "";
    for (let i = 0; i < raw.length; i++) {
      let next = raw[i];
      if (escapeSpecialCharacters) next = next.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{");
      result += next;
      if (i < values.length) {
        const value = alignValues ? alignValue(values[i], result) : values[i];
        result += value;
      }
    }
    const lines = result.split("\n");
    let mindent = null;
    for (const l of lines) {
      const m = l.match(/^(\s+)\S+/);
      if (m) {
        const indent = m[1].length;
        if (!mindent) mindent = indent;
        else mindent = Math.min(mindent, indent);
      }
    }
    if (mindent !== null) {
      const m = mindent;
      result = lines.map((l) => l[0] === " " || l[0] === "	" ? l.slice(m) : l).join("\n");
    }
    if (trimWhitespace) result = result.trim();
    if (escapeSpecialCharacters) result = result.replace(/\\n/g, "\n").replace(/\\t/g, "	").replace(/\\r/g, "\r").replace(/\\v/g, "\v").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\0/g, "\0").replace(/\\x([\da-fA-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\u\{([\da-fA-F]{1,6})\}/g, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/\\u([\da-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
    if (typeof Bun !== "undefined") result = result.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (_, braced, unbraced) => {
      var _ref;
      const hex = (_ref = braced !== null && braced !== void 0 ? braced : unbraced) !== null && _ref !== void 0 ? _ref : "";
      return String.fromCodePoint(parseInt(hex, 16));
    });
    return result;
  }
  __name(dedent, "dedent");
}
__name(createDedent, "createDedent");
function alignValue(value, precedingText) {
  if (typeof value !== "string" || !value.includes("\n")) return value;
  const indentMatch = precedingText.slice(precedingText.lastIndexOf("\n") + 1).match(/^(\s+)/);
  if (indentMatch) {
    const indent = indentMatch[1];
    return value.replace(/\n/g, `
${indent}`);
  }
  return value;
}
__name(alignValue, "alignValue");
var import_pluralize = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module2) => {
  (function(root, pluralize) {
    if (typeof __require === "function" && typeof exports === "object" && typeof module2 === "object") module2.exports = pluralize();
    else if (typeof define === "function" && define.amd) define(function() {
      return pluralize();
    });
    else root.pluralize = pluralize();
  })(exports, function() {
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    function sanitizeRule(rule) {
      if (typeof rule === "string") return new RegExp("^" + rule + "$", "i");
      return rule;
    }
    __name(sanitizeRule, "sanitizeRule");
    function restoreCase(word, token) {
      if (word === token) return token;
      if (word === word.toLowerCase()) return token.toLowerCase();
      if (word === word.toUpperCase()) return token.toUpperCase();
      if (word[0] === word[0].toUpperCase()) return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
      return token.toLowerCase();
    }
    __name(restoreCase, "restoreCase");
    function interpolate(str, args) {
      return str.replace(/\$(\d{1,2})/g, function(match, index) {
        return args[index] || "";
      });
    }
    __name(interpolate, "interpolate");
    function replace(word, rule) {
      return word.replace(rule[0], function(match, index) {
        var result = interpolate(rule[1], arguments);
        if (match === "") return restoreCase(word[index - 1], result);
        return restoreCase(match, result);
      });
    }
    __name(replace, "replace");
    function sanitizeWord(token, word, rules) {
      if (!token.length || uncountables.hasOwnProperty(token)) return word;
      var len = rules.length;
      while (len--) {
        var rule = rules[len];
        if (rule[0].test(word)) return replace(word, rule);
      }
      return word;
    }
    __name(sanitizeWord, "sanitizeWord");
    function replaceWord(replaceMap, keepMap, rules) {
      return function(word) {
        var token = word.toLowerCase();
        if (keepMap.hasOwnProperty(token)) return restoreCase(word, token);
        if (replaceMap.hasOwnProperty(token)) return restoreCase(word, replaceMap[token]);
        return sanitizeWord(token, word, rules);
      };
    }
    __name(replaceWord, "replaceWord");
    function checkWord(replaceMap, keepMap, rules, bool) {
      return function(word) {
        var token = word.toLowerCase();
        if (keepMap.hasOwnProperty(token)) return true;
        if (replaceMap.hasOwnProperty(token)) return false;
        return sanitizeWord(token, token, rules) === token;
      };
    }
    __name(checkWord, "checkWord");
    function pluralize(word, count, inclusive) {
      var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
      return (inclusive ? count + " " : "") + pluralized;
    }
    __name(pluralize, "pluralize");
    pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
    pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
    pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
    pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
    pluralize.addPluralRule = function(rule, replacement) {
      pluralRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize.addSingularRule = function(rule, replacement) {
      singularRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize.addUncountableRule = function(word) {
      if (typeof word === "string") {
        uncountables[word.toLowerCase()] = true;
        return;
      }
      pluralize.addPluralRule(word, "$0");
      pluralize.addSingularRule(word, "$0");
    };
    pluralize.addIrregularRule = function(single, plural) {
      plural = plural.toLowerCase();
      single = single.toLowerCase();
      irregularSingles[single] = plural;
      irregularPlurals[plural] = single;
    };
    [
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      ["genus", "genera"],
      ["viscus", "viscera"],
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(rule) {
      return pluralize.addIrregularRule(rule[0], rule[1]);
    });
    [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(rule) {
      return pluralize.addPluralRule(rule[0], rule[1]);
    });
    [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(rule) {
      return pluralize.addSingularRule(rule[0], rule[1]);
    });
    [
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      /[^aeiou]ese$/i,
      /deer$/i,
      /fish$/i,
      /measles$/i,
      /o[iu]s$/i,
      /pox$/i,
      /sheep$/i
    ].forEach(pluralize.addUncountableRule);
    return pluralize;
  });
})))(), 1);

// src/index.ts
var DEFAULT_OUTPUT_FILE = "vdl-meta.json";
function resolveOutFile(input) {
  const outFile = options_exports.getOptionString(
    input.options,
    "outFile",
    DEFAULT_OUTPUT_FILE
  );
  const trimmedOutFile = outFile.trim();
  return trimmedOutFile.length > 0 ? trimmedOutFile : DEFAULT_OUTPUT_FILE;
}
__name(resolveOutFile, "resolveOutFile");
function resolveIncludePositions(input) {
  return options_exports.getOptionBool(input.options, "includePositions", false);
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
