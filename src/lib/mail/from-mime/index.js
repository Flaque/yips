import toTree from 'emailjs-mime-parser';
import { TextDecoder } from 'text-encoding';

function isHtmlNode(node) {
  return node.contentType.value === 'text/html';
}

function html(node) {
  if (!isHtmlNode(node)) {
    return undefined;
  }
  const charset = node.contentType.params.charset || 'utf-8';

  return new TextDecoder(charset).decode(node.content);
}

function firstValue(obj) {
  return obj[0].value;
}

function parse(email) {
  const tree = toTree(email);

  const { to, from, cc, subject } = tree.headers;

  return {
    html: html(tree),
    to: firstValue(to),
    from: firstValue(from),
    cc: firstValue(cc),
    subject: firstValue(subject)
  };
}

export default parse;
