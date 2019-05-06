const {Command} = require('@oclif/command')

class GoodbyeCommand extends Command {
  async run() {
    this.log('goodbye, world!')
  }
}

GoodbyeCommand.description = `Basic description
This is a more detailed description of the command
`

module.exports = GoodbyeCommand
