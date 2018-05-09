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

render(h(Ui, cli.flags));
