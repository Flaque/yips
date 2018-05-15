import test from 'ava';
import { h, renderToString } from 'ink';
import UI from './ui';

test('Check it at least renders... something', t => {
  const actual = renderToString(h(UI));

  t.true(actual.length >= 1);
});
