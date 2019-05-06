mynewcli
========

test cli to learn oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Codecov](https://codecov.io/gh/eng618/mynewcli/branch/master/graph/badge.svg)](https://codecov.io/gh/eng618/mynewcli)
[![Coverage Status](https://coveralls.io/repos/github/ENG618/mynewcli/badge.svg?branch=master)](https://coveralls.io/github/ENG618/mynewcli?branch=master)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/eng618/mynewcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mynewcli
$ mynewcli COMMAND
running command...
$ mynewcli (-v|--version|version)
mynewcli/0.0.1 darwin-x64 node-v10.15.3
$ mynewcli --help [COMMAND]
USAGE
  $ mynewcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mynewcli goodbye`](#mynewcli-goodbye)
* [`mynewcli hello`](#mynewcli-hello)
* [`mynewcli help [COMMAND]`](#mynewcli-help-command)

## `mynewcli goodbye`

Say Goodbye

```
USAGE
  $ mynewcli goodbye

DESCRIPTION
  This is a more detailed description of the command
```

_See code: [src/commands/goodbye.js](https://github.com/eng618/mynewcli/blob/v0.0.1/src/commands/goodbye.js)_

## `mynewcli hello`

Describe the command here

```
USAGE
  $ mynewcli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/eng618/mynewcli/blob/v0.0.1/src/commands/hello.js)_

## `mynewcli help [COMMAND]`

display help for mynewcli

```
USAGE
  $ mynewcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
