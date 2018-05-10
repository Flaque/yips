const mailer = require('emailjs-imap-client');
const parse = require('emailjs-mime-parser').default;
const { TextDecoder } = require('text-encoding');
const fromHtml = require('../from-html');

const ImapClient = mailer.default;

const client = new ImapClient('outlook.office365.com', 993, {
  auth: {
    user: 'example@foo.com',
    pass: 'pass'
  },
  useSecureTransport: true,
  requireTLS: true,
  logLevel: mailer.LOG_LEVEL_NONE
});

async function start() {
  await client.connect();
  const messages = await client.listMessages('INBOX', '1:2', ['body[]']);

  const body = messages[0]['body[]'];

  const html = new TextDecoder('utf-8').decode(
    parse(body).childNodes[1].content
  );

  console.log(fromHtml(html));
}

start().catch(console.error);
