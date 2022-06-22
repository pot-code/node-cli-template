#!/usr/bin/env node
import { Command } from 'commander';
import winston from 'winston';

const app = new Command();

app
  .name('hello world')
  .version('0.0.1')
  .option('-d, --debug', '输出诊断信息')
  .hook('preAction', (thisCommand) => {
    let level = 'info';
    if (thisCommand.opts().debug) {
      level = 'debug';
    }
    winston.configure({
      level,
      format: winston.format.combine(
        winston.format.colorize(), //
        winston.format.simple(), //
      ),
      transports: [new winston.transports.Console()],
    });
  })
  .showHelpAfterError();

app
  .command('hello')
  .description('hello world')
  .action(() => {
    console.log('hello world');
  });

app.parse();
