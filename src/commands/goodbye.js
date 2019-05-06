const {Command} = require('@oclif/command')

class GoodbyeCommand extends Command {
  async run() {
    this.log('goodbye, world!')
  }
}

GoodbyeCommand.description = `Say Goodbye
Simply say's goodbye, world!
`

module.exports = GoodbyeCommand
