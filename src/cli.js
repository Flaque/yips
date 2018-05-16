#!/usr/bin/env node
'use strict';

import meow from 'meow';
import Mail, { clients } from './lib/mail';

const cli = meow(`
	Usage
	  $ yips email password

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ yips
	  I love Ink
	  $ yips --name=ponies
	  I love ponies
`);

if (cli.input.length !== 2) {
  console.log('Current usage is: yarn dev [email] [password]');
  process.exit(1);
}

const mail = new Mail(clients.outlook, cli.input[0], cli.input[1]);

console.log('...Connecting to email client');
console.log('-----------------------------\n');
mail
  .get()
  .then(m => m[0].txt)
  .then(console.log)
  .catch(console.error);
