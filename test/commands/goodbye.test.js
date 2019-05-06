const {expect, test} = require('@oclif/test')

describe('goodbye', () => {
  test
  .stdout()
  .command(['goodbye'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('goodbye, world!')
  })
})
