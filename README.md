# Dedalus

This library provides convenient access to the Dedalus REST API from the command line.

The REST API documentation can be found on [docs.dedaluslabs.ai](https://docs.dedaluslabs.ai). The full API of this library can be found in [api.md](./api.md).

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Signing In](#signing-in)
- [File Arguments](#file-arguments)
- [Shell Completion](#shell-completion)
- [Upgrading](#upgrading)
- [Manual Pages](#manual-pages)
- [Streaming](#streaming)
- [WebSockets](#websockets)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Pagination](#pagination)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
# Install script — standalone binary for macOS and Linux, no Node.js required
curl -fsSL https://github.com/amritk/dev-typescript/releases/latest/download/install.sh | bash
# Installs into ~/.local/bin; set PR1889CLI_INSTALL_DIR to choose another directory

# Homebrew — standalone binary, no Node.js required
brew install amritk/pr1889/pr1889cli

# Direct download — standalone binary, no Node.js required
curl -fsSL "https://github.com/amritk/dev-typescript/releases/latest/download/pr1889cli-$(uname -s | tr '[:upper:]' '[:lower:]')-$(uname -m | sed 's/x86_64/x64/;s/aarch64/arm64/').tar.gz" | tar xz pr1889cli
sudo mv pr1889cli /usr/local/bin/

# Windows — download and extract pr1889cli-windows-x64.zip, then add it to PATH
# https://github.com/amritk/dev-typescript/releases/latest/download/pr1889cli-windows-x64.zip
```

<br />

## Usage

```sh
pr1889cli [resource] [command] [flags]

pr1889cli machines create \
  --api-key "$DEDALUS_API_KEY" \
  --memory-mib '2048' \
  --storage-gib '10' \
  --vcpu '1'
```

Every command accepts the global flags below, so the examples that follow show only what is specific to them.

See the [API reference](./api.md) for every available operation.

<br />

## Signing In

`pr1889cli login` signs you in and saves the credential for later commands, so it does not have to be passed every time. It goes into your operating system's credential store — the Keychain on macOS, the system keyring on Linux, Credential Manager on Windows — and falls back to a file in your state directory, readable only by you, when no such store is available. Either way it is filed under the base URL it was captured for, so a credential saved for one host is never sent to another. `pr1889cli logout` forgets it. A credential passed with a flag, or set in the environment, still takes precedence over a saved one. Sign-in methods: api-key, x-api-key. Pass `--flow <name>` to pick one without being asked.

```sh
pr1889cli login
pr1889cli login --flow api-key
pr1889cli logout
pr1889cli logout --all
```

<br />

## File Arguments

Any command flag or credential reads its value from a file when the value begins with `@`, so a body field holding a whole document does not have to survive shell quoting. `@file://` always sends the file as text and `@data://` always sends it base64-encoded; a bare `@` lets the file decide. A flag that uploads a file takes its path with or without the `@`. Escape a literal value that begins with `@` as `\@`. The global options (`--base-url`, `--timeout`, `--format` and the rest) are read exactly as written.

```sh
pr1889cli COMMAND --FLAG @./body.json
pr1889cli COMMAND --FLAG @file://./notes.txt
pr1889cli COMMAND --FLAG @data://./logo.png
pr1889cli COMMAND --FLAG '\@not-a-file'
```

<br />

## Shell Completion

`pr1889cli completion <shell>` prints a completion script for bash, zsh, and fish. Add the matching line to your shell startup file to complete commands, subcommands, and flags with Tab.

```sh
# bash (~/.bashrc)
eval "$(pr1889cli completion bash)"

# zsh (~/.zshrc)
eval "$(pr1889cli completion zsh)"

# fish (~/.config/fish/config.fish)
pr1889cli completion fish | source
```

<br />

## Upgrading

`pr1889cli upgrade` installs the latest release. When pr1889cli was installed through a package manager — Homebrew — it runs that manager's own upgrade instead of replacing files the manager owns. An install made by the install script is replaced in place, with no `sudo`; running the script again does the same. `pr1889cli upgrade --check` reports the latest version without installing it, and `pr1889cli uninstall` says how to remove this installation. pr1889cli also checks for a newer release at most once a day, and mentions it on stderr when one exists. The check is skipped entirely when output is redirected, when `CI` is set, and under `sudo`; set `PR1889CLI_NO_UPDATE_NOTIFIER` or `NO_UPDATE_NOTIFIER` to turn it off everywhere.

```sh
pr1889cli upgrade --check
pr1889cli upgrade

# Never contact GitHub to check for a newer release
export PR1889CLI_NO_UPDATE_NOTIFIER=1
```

<br />

## Manual Pages

Installing the package globally also installs man pages. `man pr1889cli` lists every command, and each command has its own page named after the command with spaces and `:` replaced by `-`.

```sh
man pr1889cli
man pr1889cli-<resource>-<command>
```

<br />

## Streaming

Streaming commands emit one result per line as the server sends it. Use `--max-items <count>` to stop after N items.

<br />

## WebSockets

WebSocket commands stay connected and stream messages. Use `--send <json>` to send a message (or pipe JSON/YAML on stdin) and `--max-items <count>` to bound output.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `--api-key` | `<value>` | - | Dedalus API key in Authorization: Bearer \<key>. Defaults to DEDALUS_API_KEY. |
| `--x-api-key` | `<value>` | - | Dedalus API key. Alternative to Bearer token. Defaults to DEDALUS_X_API_KEY. |

Declared schemes:

- `ApiKeyAuth` API key in header `x-api-key`
- `BearerAuth` bearer token

<br />

## Errors

Failed requests print a structured error to standard error and exit with a status that identifies the failure class. The error body carries the API's own `message` plus a stable `code`, the HTTP `status`, the `requestId`, and — where one applies — an actionable `hint`. Usage errors (exit `2`) are reported as a plain message instead, since no request was made. Exit statuses: `0` success, `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`.

Documented error statuses: `400`, `401`, `403`, `409`, `429`, `500`, `502`, `503`, `default`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `--base-url` | `<url>` | - | Override the base URL for API requests. |
| `--timeout` | `<ms>` | - | Request timeout in milliseconds. |
| `--max-retries` | `<count>` | - | Number of retries for retryable failures. |
| `--debug` | `flag` | - | Enable SDK debug logging. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Pagination

Paginated commands fetch subsequent pages for you. Use `--max-items <count>` to cap the total number of items returned.

<br />

## Helpers

- `--format <format>` — output format: `auto`, `json`, `jsonl`, `pretty`, `raw`, `toon`, or `yaml`.
- `--format-error <format>` — error output format: `auto`, `json`, `jsonl`, `pretty`, `raw`, `toon`, or `yaml`.
- `--format toon` — token-efficient structured output for AI agents; uniform lists collapse into one header plus a row per item, with a definitive item count.
- `--transform <path>` and `--transform-error <path>` — dot-path transform for data/error output.
- `--raw-output`, `-r` — print transformed string values without JSON quotes.
- `--max-items <count>` — bound iterator, streaming, and WebSocket command output.
- Errors carry a stable `code` and an actionable `hint` beside the API's own message, and each failure class exits with its own status: `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`.

<br />

## Logging

- Pass `--debug` to any command to enable SDK debug logging on stderr.

<br />

## Requirements

- None — the standalone binaries bundle their own runtime.

Powered by Scalar.
