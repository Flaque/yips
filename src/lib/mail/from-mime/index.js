import toTree from 'emailjs-mime-parser';
import { TextDecoder } from 'text-encoding';
import ow from 'ow';
import fromHtml from '../from-html';

function isHtmlNode(node) {
  return node.contentType.value === 'text/html';
}

function hasChildren(node) {
  return node.childNodes && node.childNodes.length !== 0;
}

function charsetOrUtf8(node) {
  return node.contentType.params.charset || 'utf-8';
}

function asText(node) {
  return new TextDecoder(charsetOrUtf8(node)).decode(node.content);
}

function firstValue(obj) {
  ow(obj, ow.array);
  return obj[0].value;
}

function optional(val, middleware) {
  if (!val) {
    return undefined;
  }
  return middleware ? middleware(val) : val;
}

function required(val, middleware) {
  if (!val) throw new Error('Required variable not found!');
  return middleware ? middleware(val) : val;
}

function html(node) {
  if (!isHtmlNode(node)) {
    if (hasChildren(node)) {
      return node.childNodes.map(html).join('\n');
    }

    return '';
  }

  return asText(node);
}

function parse(email) {
  ow(email, ow.string);
  const tree = toTree(email);

  const { to, from, cc, subject } = tree.headers;

  return {
    txt: required(html(tree), fromHtml),
    to: required(to, firstValue),
    from: required(from, firstValue),
    subject: required(subject, firstValue),
    cc: optional(cc, firstValue) // CC isn't always there, that's ok
  };
}

export default parse;
