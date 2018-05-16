import test from 'ava';
import sinon from 'sinon';
import Mail from '.';

const asyncNoop = async () => {};
const optionsOrNoop = (options, key) => {
  return options && options[key] ? options[key] : asyncNoop;
};

const getDummyClient = options => () => {
  return {
    connect: optionsOrNoop(options, 'connect'),
    listMessages: optionsOrNoop(options, 'listMessages')
  };
};

test('Mail creates a new instance without issue', t => {
  const mail = new Mail(getDummyClient(), 'foo@moo.com', 'blue');
  t.truthy(mail);
});

test('mail.get will list messages', async t => {
  const fakeListMessages = sinon.fake();

  const mail = new Mail(
    getDummyClient({ listMessages: fakeListMessages }),
    'foo@moo.com',
    'blue'
  );

  await mail.get();

  t.true(fakeListMessages.called);
});
