"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inject;

function Inject() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (target) {
    target.$inject = args;
  };
}

module.exports = exports["default"];