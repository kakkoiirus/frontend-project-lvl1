#!/usr/bin/env node

import cli from '../src/cli.js';
import evenGame from '../src/even-game.js';

const userName = cli();
evenGame(userName);
