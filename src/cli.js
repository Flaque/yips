#!/usr/bin/env node
'use strict';

import { h, render } from 'ink';
import meow from 'meow';
import Ui from './ui';
import Mail, { clients } from './lib/mail';

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

const mail = new Mail(clients.outlook, 'replace@me.com', 'passsword');

console.log('...Connecting to email client');
mail
  .get()
  .then(console.log)
  .catch(console.error);

// render(h(Ui, cli.flags));
