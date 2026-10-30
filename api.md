# Dedalus CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Usage`](#usage)
  - [Get usage summary](#get-usage-summary)
  - [List machine compute usage breakdown](#list-machine-compute-usage-breakdown)
  - [List machine storage usage breakdown](#list-machine-storage-usage-breakdown)
- [`Machines`](#machines)
  - [List machines](#list-machines)
  - [Create machine](#create-machine)
  - [Get machine](#get-machine)
  - [Update machine](#update-machine)
  - [Destroy machine](#destroy-machine)
  - [Watch machine lifecycle status](#watch-machine-lifecycle-status)
  - [Sleep a running machine](#sleep-a-running-machine)
  - [Wake a sleeping machine](#wake-a-sleeping-machine)
  - [`Machines Artifacts`](#machines-artifacts)
    - [List artifacts](#list-artifacts)
    - [Get artifact](#get-artifact)
    - [Delete artifact](#delete-artifact)
  - [`Machines Previews`](#machines-previews)
    - [List previews](#list-previews)
    - [Create preview](#create-preview)
    - [Get preview](#get-preview)
    - [Delete preview](#delete-preview)
  - [`Machines Ssh`](#machines-ssh)
    - [List SSH sessions](#list-ssh-sessions)
    - [Create SSH session](#create-ssh-session)
    - [Get SSH session](#get-ssh-session)
    - [Delete SSH session](#delete-ssh-session)
  - [`Machines Executions`](#machines-executions)
    - [List executions](#list-executions)
    - [Create execution](#create-execution)
    - [Get execution](#get-execution)
    - [Delete execution](#delete-execution)
    - [Get execution output](#get-execution-output)
    - [List execution events](#list-execution-events)
  - [`Machines Terminals`](#machines-terminals)
    - [List terminals](#list-terminals)
    - [Create terminal](#create-terminal)
    - [Get terminal](#get-terminal)
    - [Delete terminal](#delete-terminal)
    - [Connect to terminal WebSocket stream](#connect-to-terminal-websocket-stream)

## `Usage`

### Get usage summary

```sh
pr1889cli usage retrieve --api-key "$DEDALUS_API_KEY"
```

### List machine compute usage breakdown

```sh
pr1889cli usage machine-compute --api-key "$DEDALUS_API_KEY"
```

### List machine storage usage breakdown

```sh
pr1889cli usage machine-storage --api-key "$DEDALUS_API_KEY"
```

## `Machines`

### List machines

```sh
pr1889cli machines list --api-key "$DEDALUS_API_KEY" --max-items 10
```

### Create machine

```sh
pr1889cli machines create \
  --api-key "$DEDALUS_API_KEY" \
  --memory-mib '0' \
  --storage-gib '0' \
  --vcpu '0'
```

### Get machine

```sh
pr1889cli machines retrieve --api-key "$DEDALUS_API_KEY" --machine-id 'machine_id'
```

### Update machine

```sh
pr1889cli machines update --api-key "$DEDALUS_API_KEY" --machine-id 'machine_id'
```

### Destroy machine

```sh
pr1889cli machines delete --api-key "$DEDALUS_API_KEY" --machine-id 'machine_id'
```

### Watch machine lifecycle status

Streams machine lifecycle updates over Server-Sent Events. Each `status` event contains a full `LifecycleResponse` payload. The stream closes after the machine reaches its current desired state.

```sh
pr1889cli machines watch \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

### Sleep a running machine

```sh
pr1889cli machines sleep --api-key "$DEDALUS_API_KEY" --machine-id 'machine_id'
```

### Wake a sleeping machine

```sh
pr1889cli machines wake --api-key "$DEDALUS_API_KEY" --machine-id 'machine_id'
```

### `Machines Artifacts`

#### List artifacts

```sh
pr1889cli machines:artifacts list \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

#### Get artifact

```sh
pr1889cli machines:artifacts retrieve \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --artifact-id 'artifact_id'
```

#### Delete artifact

```sh
pr1889cli machines:artifacts delete \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --artifact-id 'artifact_id'
```

### `Machines Previews`

#### List previews

```sh
pr1889cli machines:previews list \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

#### Create preview

```sh
pr1889cli machines:previews create \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --port '0'
```

#### Get preview

```sh
pr1889cli machines:previews retrieve \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --preview-id 'preview_id'
```

#### Delete preview

```sh
pr1889cli machines:previews delete \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --preview-id 'preview_id'
```

### `Machines Ssh`

#### List SSH sessions

```sh
pr1889cli machines:ssh list \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

#### Create SSH session

```sh
pr1889cli machines:ssh create \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --public-key ''
```

#### Get SSH session

```sh
pr1889cli machines:ssh retrieve \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --session-id 'session_id'
```

#### Delete SSH session

```sh
pr1889cli machines:ssh delete \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --session-id 'session_id'
```

### `Machines Executions`

#### List executions

```sh
pr1889cli machines:executions list \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

#### Create execution

```sh
pr1889cli machines:executions create \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --command '[""]'
```

#### Get execution

```sh
pr1889cli machines:executions retrieve \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --execution-id 'execution_id'
```

#### Delete execution

```sh
pr1889cli machines:executions delete \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --execution-id 'execution_id'
```

#### Get execution output

```sh
pr1889cli machines:executions output \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --execution-id 'execution_id'
```

#### List execution events

```sh
pr1889cli machines:executions events \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --execution-id 'execution_id' \
  --max-items 10
```

### `Machines Terminals`

#### List terminals

```sh
pr1889cli machines:terminals list \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --max-items 10
```

#### Create terminal

```sh
pr1889cli machines:terminals create \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --height '0' \
  --width '0'
```

#### Get terminal

```sh
pr1889cli machines:terminals retrieve \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --terminal-id 'terminal_id'
```

#### Delete terminal

```sh
pr1889cli machines:terminals delete \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --terminal-id 'terminal_id'
```

#### Connect to terminal WebSocket stream

Upgrades to a WebSocket connection for interactive terminal I/O. Clients send JSON `TerminalClientEvent` messages and receive JSON `TerminalServerEvent` messages. Terminal byte streams are base64-encoded inside `input` and `output` events; `resize` events use integer `width` and `height` fields.

```sh
pr1889cli machines:terminals connect \
  --api-key "$DEDALUS_API_KEY" \
  --machine-id 'machine_id' \
  --terminal-id 'terminal_id' \
  --send '{"data":"","type":"input"}' \
  --max-items 10
```
