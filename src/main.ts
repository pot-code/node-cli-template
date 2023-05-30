import { Command } from 'commander'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import generate from './cmd/hello-world/index.js'
import logger from './lib/log/index.js'
import { getDirname } from './utils/runtime.js'

const pkg = JSON.parse(readFileSync(resolve(getDirname(import.meta.url), '../package.json'), 'utf-8'))

const program = new Command()

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version, '-v, --version', 'print version')
  .showHelpAfterError()
  .option('-vv, --verbose', 'verbose output')
  .hook('preAction', (thisCommand) => {
    if (thisCommand.opts().verbose) {
      logger.level = 'debug'
    }
  })

program.addCommand(generate)

program.parse()
