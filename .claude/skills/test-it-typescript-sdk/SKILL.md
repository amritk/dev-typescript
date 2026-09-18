---
name: test-it-typescript-sdk
description: "TypeScript SDK for Test it API. Use when writing TypeScript code that calls Test it API with the @scalar-69t4l/demo-api-scalar-galaxy package: installing it, constructing and authenticating the client, and calling API operations."
---

# Test it TypeScript SDK

Generated TypeScript client for Test it API, published as `@scalar-69t4l/demo-api-scalar-galaxy`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @scalar-69t4l/demo-api-scalar-galaxy
```

## Client setup and authentication

```ts
import ApiTest from '@scalar-69t4l/demo-api-scalar-galaxy';

const client = new ApiTest({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
  environment: 'production',
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `bearerAuth` (env: `BEARER_AUTH`) — JWT Bearer token authentication
- `basicAuthUsername` (env: `BASIC_AUTH_USERNAME`) — Basic HTTP authentication
- `basicAuthPassword` (env: `BASIC_AUTH_PASSWORD`) — Basic HTTP authentication
- `apiKeyHeader` (env: `API_KEY_HEADER`) — API key request header
- `apiKeyCookie` (env: `API_KEY_COOKIE`) — API key browser cookie
- `oAuth2` (env: `O_AUTH2`) — OAuth 2.0 authentication
- `openIDConnect` (env: `OPEN_ID_CONNECT`) — OpenID Connect Authentication
- `apiKeyQuery` (env: `SCALAR_69_T4_L_API_KEY_QUERY`) — API key query parameter

## Calling operations

```ts
import ApiTest from '@scalar-69t4l/demo-api-scalar-galaxy';

const client = new ApiTest({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
  environment: 'production',
});

const pizza = await client.planets.pizzas.list({
  limit: 10,
  offset: 0,
});

console.log(pizza);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@scalar-69t4l/demo-api-scalar-galaxy';

try {
  const pizza = await client.planets.pizzas.list({
    limit: 10,
    offset: 0,
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
