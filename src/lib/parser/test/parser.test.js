const test = require('ava');
const MimeBuilder = require('emailjs-mime-builder').default;
const parse = require('..');

const html = '<h1>Hello world</h1>';
const to = 'to@gmail.com';
const from = 'from@gmail.com';
const cc = 'cc@gmail.com';
const subject = 'hi there';

function stdEmail() {
  const mail = new MimeBuilder('text/html');
  mail.setContent(html);
  mail.addHeader({
    from,
    to,
    cc,
    subject
  });
  return mail.build();
}

test('parse can get the html content', t => {
  t.deepEqual(parse(stdEmail()).html, html);
});

test('parse can get the "to" header', t => {
  t.deepEqual(parse(stdEmail()).to[0].address, to);
});

test('parse can get the "from" header', t => {
  t.deepEqual(parse(stdEmail()).from[0].address, from);
});

test('parse can get the "subject" header', t => {
  t.deepEqual(parse(stdEmail()).subject, subject);
});
