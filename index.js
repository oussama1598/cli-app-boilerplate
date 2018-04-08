#!/usr/bin/env node

/* eslint-disable */
// removeIf(production)
require('@babel/register');
require('@babel/polyfill');
// endRemoveIf(production)
/* eslint-enable */

require('app-module-path').addPath(require('path').join(__dirname, 'src'));
require('app');
