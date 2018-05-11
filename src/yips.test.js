const test = require('ava');
const { h, renderToString } = require('ink');
const UI = require('./ui');

test('Check it at least renders... something', t => {
  const actual = renderToString(h(UI));

  t.true(actual.length >= 1);
});
