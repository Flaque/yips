#!/usr/bin/env node
'use strict';

const { h, render } = require('ink');
const meow = require('meow');
const Ui = require('./ui');

const cli = meow(`
	Usage
	  $ yips [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ yips
	  I love Ink
	  $ yips --name=ponies
	  I love ponies
`);

const mail = require('./lib/mail');

const content = {
  from: 'blah@zagmail.gonzaga.edu',
  to: 'blah@zagmail.gonzaga.edu',
  subject: 'Hello secondtime',
  html: '<p>Hello there!</p>'
};

const user = 'foo@example.com';
const pass = 'passworrrdd';

mail.send(mail.outlook(user, pass), content);

render(h(Ui, cli.flags));
