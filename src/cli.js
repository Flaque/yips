#!/usr/bin/env node
'use strict';

import { h, render } from 'ink';
import meow from 'meow';
import Ui from './ui';

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

render(h(Ui, cli.flags));
