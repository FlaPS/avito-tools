oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g avito-cli
$ avito COMMAND
running command...
$ avito (--version)
avito-cli/0.0.0 linux-x64 node-v16.14.2
$ avito --help [COMMAND]
USAGE
  $ avito COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avito [FILE]`](#avito-file)
* [`avito build INPUT [OUTPUT]`](#avito-build-input-output)
* [`avito hello PERSON`](#avito-hello-person)
* [`avito hello world`](#avito-hello-world)
* [`avito help [COMMAND]`](#avito-help-command)
* [`avito plugins`](#avito-plugins)
* [`avito plugins:install PLUGIN...`](#avito-pluginsinstall-plugin)
* [`avito plugins:inspect PLUGIN...`](#avito-pluginsinspect-plugin)
* [`avito plugins:install PLUGIN...`](#avito-pluginsinstall-plugin-1)
* [`avito plugins:link PLUGIN`](#avito-pluginslink-plugin)
* [`avito plugins:uninstall PLUGIN...`](#avito-pluginsuninstall-plugin)
* [`avito plugins:uninstall PLUGIN...`](#avito-pluginsuninstall-plugin-1)
* [`avito plugins:uninstall PLUGIN...`](#avito-pluginsuninstall-plugin-2)
* [`avito plugins update`](#avito-plugins-update)

## `avito [FILE]`

describe the command here

```
USAGE
  $ avito  [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ avito
```

_See code: [dist/commands/index.ts](https://github.com/shammasov/avito/blob/v0.0.0/dist/commands/index.ts)_

## `avito build INPUT [OUTPUT]`

describe the command here

```
USAGE
  $ avito build [INPUT] [OUTPUT]

ARGUMENTS
  INPUT   Исх данные
  OUTPUT  Рабочая папка для записи результата

DESCRIPTION
  describe the command here

EXAMPLES
  $ avito build ./avito-catalog ./avito-generated
```

_See code: [dist/commands/build.ts](https://github.com/shammasov/avito/blob/v0.0.0/dist/commands/build.ts)_

## `avito hello PERSON`

Say hello

```
USAGE
  $ avito hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/shammasov/avito/blob/v0.0.0/dist/commands/hello/index.ts)_

## `avito hello world`

Say hello world

```
USAGE
  $ avito hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `avito help [COMMAND]`

Display help for avito.

```
USAGE
  $ avito help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for avito.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `avito plugins`

List installed plugins.

```
USAGE
  $ avito plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ avito plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `avito plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ avito plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ avito plugins add

EXAMPLES
  $ avito plugins:install myplugin 

  $ avito plugins:install https://github.com/someuser/someplugin

  $ avito plugins:install someuser/someplugin
```

## `avito plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ avito plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ avito plugins:inspect myplugin
```

## `avito plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ avito plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ avito plugins add

EXAMPLES
  $ avito plugins:install myplugin 

  $ avito plugins:install https://github.com/someuser/someplugin

  $ avito plugins:install someuser/someplugin
```

## `avito plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ avito plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ avito plugins:link myplugin
```

## `avito plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avito plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avito plugins unlink
  $ avito plugins remove
```

## `avito plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avito plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avito plugins unlink
  $ avito plugins remove
```

## `avito plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avito plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avito plugins unlink
  $ avito plugins remove
```

## `avito plugins update`

Update installed plugins.

```
USAGE
  $ avito plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
