const parse = require('emailjs-mime-parser').default;
const { TextDecoder } = require('text-encoding');
const fromHtml = require('./from-html');
const { outlook } = require('./clients/imap');

function body(message) {
  const b = message['body[]'];

  const nodes = parse(b).childNodes;

  const html = new TextDecoder('utf-8').decode(nodes[1].content);

  return fromHtml(html);
}

async function start() {
  const client = outlook('dogs@something.com', 'puppies');

  await client.connect();
  const messages = await client.listMessages('INBOX', '1:10', ['body[]']);

  messages.forEach(m => {
    body(m);
  });

  await client.logout();
}

start().catch(console.error);
