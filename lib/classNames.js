"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;
function getClass(className, localCss) {
  return localCss && localCss[className] ? localCss[className] : className;
}