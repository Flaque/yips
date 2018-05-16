#!/usr/bin/env node
'use strict';

import meow from 'meow';
import Mail, { clients } from './lib/mail';

meow(`
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
