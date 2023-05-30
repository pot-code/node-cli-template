import { Command } from 'commander'

const cmd = new Command()

cmd
  .name('hello-world')
  .description('demo command')
  .action(() => {
    console.log('hello world')
  })

export default cmd
