"use strict";

var _ink = require("ink");

var _importJsx = _interopRequireDefault(require("import-jsx"));

var _ava = _interopRequireDefault(require("ava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Ui = (0, _importJsx.default)('./ui');
(0, _ava.default)('output', t => {
  const actual = (0, _ink.renderToString)((0, _ink.h)(Ui, null));
  const expected = (0, _ink.renderToString)((0, _ink.h)(_ink.Text, {
    green: true
  }, "I love Ink"));
  t.is(actual, expected);
});