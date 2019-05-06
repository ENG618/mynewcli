const {Command} = require('@oclif/command')

class GoodbyeCommand extends Command {
  async run() {
    this.log('goodbye, world!')
  }
}

GoodbyeCommand.description = `Say Goodbye
This is a more detailed description of the command
`

module.exports = GoodbyeCommand
