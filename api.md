# Test it TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Planets`](#planets)
  - [`Planets Pizzas`](#planets-pizzas)
    - [Get all planets](#get-all-planets)
    - [Create a planet](#create-a-planet)
    - [Get a planet](#get-a-planet)
    - [Delete a planet](#delete-a-planet)
    - [Upload an image to a planet](#upload-an-image-to-a-planet)
- [`CelestialBodies`](#celestialbodies)
  - [Create a celestial body](#create-a-celestial-body)
- [`Authentication`](#authentication)
  - [Create a user](#create-a-user)
  - [Get a token](#get-a-token)
  - [Get authenticated user](#get-authenticated-user)

## Setup

```ts
import ApiTest from '@scalar-69t4l/demo-api-scalar-galaxy';

const client = new ApiTest({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
  environment: 'production',
});
```

## `Planets`

### `Planets Pizzas`

Everything about planets

#### Get all planets

It's easy to say you know them all, but do you really? Retrieve all the planets and check whether you missed one.

| Direction | Type |
| --- | --- |
| Request | [`PizzaListParams`](./src/resources/planets/pizzas.ts) |
| Response | [`PizzaListResponse`](./src/resources/planets/pizzas.ts) |

```ts
const pizza = await client.planets.pizzas.list({
  limit: 10,
  offset: 0,
});
```

#### Create a planet

Time to play god and create a new planet. What do you think? Ah, don't think too much. What could go wrong anyway?

| Direction | Type |
| --- | --- |
| Request | [`PizzaCreateParams`](./src/resources/planets/pizzas.ts) |
| Response | [`Planet`](./src/resources/planets/pizzas.ts) |

```ts
const planet = await client.planets.pizzas.create({
  name: 'Mars',
  type: 'terrestrial',
});
```

#### Get a planet

You'll better learn a little bit more about the planets. It might come in handy once space travel is available for everyone.

| Direction | Type |
| --- | --- |
| Response | [`Planet`](./src/resources/planets/pizzas.ts) |

```ts
const planet = await client.planets.pizzas.retrieve(1);
```

#### Delete a planet

This endpoint was used to delete planets. Unfortunately, that caused a lot of trouble for planets with life. So, this endpoint is now deprecated and should not be used anymore.

```ts
await client.planets.pizzas.delete(1);
```

#### Upload an image to a planet

Got a crazy good photo of a planet? Share it with the world!

| Direction | Type |
| --- | --- |
| Request | [`PizzaUploadImageParams`](./src/resources/planets/pizzas.ts) |
| Response | [`PizzaUploadImageResponse`](./src/resources/planets/pizzas.ts) |

```ts
const pizza = await client.planets.pizzas.uploadImage(1);
```

## `CelestialBodies`

Celestial bodies are the planets and satellites in the Scalar Galaxy.

### Create a celestial body

| Direction | Type |
| --- | --- |
| Request | [`CelestialBodyCreateParams`](./src/resources/celestial-bodies.ts) |
| Response | [`CelestialBody`](./src/resources/celestial-bodies.ts) |

```ts
const celestialBody = await client.celestialBodies.create({
  name: 'Mars',
  type: 'terrestrial',
});
```

## `Authentication`

Some endpoints are public, but some require authentication. We provide all the required endpoints to create an account and authorize yourself.

### Create a user

Time to create a user account, eh?

| Direction | Type |
| --- | --- |
| Request | [`AuthenticationCreateUserParams`](./src/resources/authentication.ts) |
| Response | [`User`](./src/resources/authentication.ts) |

```ts
const user = await client.authentication.createUser({
  name: 'Marc',
  email: 'marc@scalar.com',
  password: 'i-love-scalar',
});
```

### Get a token

Yeah, this is the boring security stuff. Just get your super secret token and move on.

| Direction | Type |
| --- | --- |
| Request | [`AuthenticationCreateTokenParams`](./src/resources/authentication.ts) |
| Response | [`Token`](./src/resources/authentication.ts) |

```ts
const token = await client.authentication.createToken({
  email: 'marc@scalar.com',
  password: 'i-love-scalar',
});
```

### Get authenticated user

Find yourself they say. That's what you can do here.

| Direction | Type |
| --- | --- |
| Response | [`User`](./src/resources/authentication.ts) |

```ts
const user = await client.authentication.listMe();
```
