"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCDATA = exports.stripCDATA = void 0;
function stripCDATA(str) {
  return str
    .replace("<![CDATA[", "")
    .replace("]]>", "")
    .trim();
}
exports.stripCDATA = stripCDATA;
function hasCDATA(str) {
  return str && str.indexOf("<![CDATA[") !== -1;
}
exports.hasCDATA = hasCDATA;
//# sourceMappingURL=string.js.map
