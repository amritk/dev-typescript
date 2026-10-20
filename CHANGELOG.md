# Changelog

## [0.5.2](https://github.com/amritk/dev-typescript/compare/v0.5.1...v0.5.2) (2026-10-20)


### Chores

* **api:** regenerate SDK ([5307a7d](https://github.com/amritk/dev-typescript/commit/5307a7ddf7e92dc56e322e3ef81b6e8c78f0810f))
* **api:** update generated SDK content ([652bef4](https://github.com/amritk/dev-typescript/commit/652bef4cf22c5563bf40a83c86f6daf226e34db9))

## [0.5.1](https://github.com/amritk/dev-typescript/compare/v0.5.0...v0.5.1) (2026-10-19)


### Bug Fixes

* record QA run for the release race (scalar/scalar-org[#7134](https://github.com/amritk/dev-typescript/issues/7134)) ([ec09f1a](https://github.com/amritk/dev-typescript/commit/ec09f1a68707973030846595093643b5decbb06b))

## [0.5.0](https://github.com/amritk/dev-typescript/compare/v0.3.1...v0.5.0) (2026-10-19)


### ⚠ BREAKING CHANGES

* **api:** 6 breaking changes to the SDK surface.
    - Renamed SDK from `TestIt` to `ScalarGalaxy`.
    - Removed operation `planets.pizzas.list` (`GET /planets`).
    - Removed operation `planets.pizzas.create` (`POST /planets`).
    - Removed operation `planets.pizzas.retrieve` (`GET /planets/{planetId}`).
    - Removed operation `planets.pizzas.delete` (`DELETE /planets/{planetId}`).
    - Removed operation `planets.pizzas.uploadImage` (`POST /planets/{planetId}/image`).

### Features

* **api:** update SDK name (+11 more changes) ([3b41878](https://github.com/amritk/dev-typescript/commit/3b41878a516d96acffa2c5a461522ea7a6ecc4d2))


### Chores

* **api:** regenerate SDK ([db7f6e4](https://github.com/amritk/dev-typescript/commit/db7f6e42786aa8d11cd4cbdc4b2a86bc22acf8b7))
* **api:** update generated SDK content ([0ca90a1](https://github.com/amritk/dev-typescript/commit/0ca90a13b6375858b81efbf49e5bc74771a82bdd))
* release 0.4.4 ([179664b](https://github.com/amritk/dev-typescript/commit/179664b59dfdb54f0bbb927df574ce3e252597ef))
* release 0.4.5 ([4d079cd](https://github.com/amritk/dev-typescript/commit/4d079cded83935edbc68c58f4cef9d9605c33456))
* release 0.4.5 ([c66e54b](https://github.com/amritk/dev-typescript/commit/c66e54b4f0f9f735ed19446d216b5d612205b622))
* release 0.5.0 ([4aefebb](https://github.com/amritk/dev-typescript/commit/4aefebb2157e305b209f27dcc38c649226cb49e0))
* release 0.5.0 ([3bc5ea7](https://github.com/amritk/dev-typescript/commit/3bc5ea73ba3dec28eb2a3b4545b558fd5886e8b4))

## [0.3.1](https://github.com/amritk/dev-typescript/compare/v0.3.0...v0.3.1) (2026-09-18)


### Chores

* **api:** update generated SDK content ([3eeadf6](https://github.com/amritk/dev-typescript/commit/3eeadf68f6c42c221e9f14c4a24036d176158cbb))

## [0.3.0](https://github.com/amritk/dev-typescript/compare/v0.2.1...v0.3.0) (2026-09-18)


### ⚠ BREAKING CHANGES

* **api:** 7 breaking changes to the SDK surface.
    - Renamed SDK from `DemoApiScalarGoolaxy` to `TestIt`.
    - Removed operation `planets.list` (`GET /planets`).
    - Removed operation `planets.create` (`POST /planets`).
    - Removed operation `planets.retrieve` (`GET /planets/{planetId}`).
    - Removed operation `planets.update` (`PUT /planets/{planetId}`).
    - Removed operation `planets.delete` (`DELETE /planets/{planetId}`).
    - Removed operation `planets.uploadImage` (`POST /planets/{planetId}/image`).
* **api:** Renamed SDK from `ScalarGalaxy` to `DemoApiScalarGoolaxy`.

### Features

* **api:** update SDK name (+1 more change) ([8b890f4](https://github.com/amritk/dev-typescript/commit/8b890f4c604f7befd974b575f0fda91270186a91))
* **api:** update SDK name (+12 more changes) ([6fda27d](https://github.com/amritk/dev-typescript/commit/6fda27d2dc57f3fe97002b0752355db6f6534872))


### Chores

* **api:** update generated SDK content ([cbd5635](https://github.com/amritk/dev-typescript/commit/cbd56352749a69c917f8b7a9905de4cdb3e451cd))

## [0.2.1](https://github.com/amritk/dev-typescript/compare/v0.2.0...v0.2.1) (2026-09-11)


### Chores

* **api:** update generated SDK content ([b069477](https://github.com/amritk/dev-typescript/commit/b0694771f6e247a738f2ea0709a590c28d4a11a4))

## [0.2.0](https://github.com/amritk/dev-typescript/compare/v0.1.0...v0.2.0) (2026-09-11)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `DemoApiScalarGalaxy` to `ScalarGalaxy`.
* **api:** 3 breaking changes to the SDK surface.
    - Property `planet.habitabilityIndex` type changed from `number<float>` to `number<float>`.
    - Property `planet.physicalProperties` type changed from `object` to `object`.
    - Property `planet.atmosphere` type changed from `Array<object>` to `Array<object>`.

### Features

* **api:** initial SDK generation ([7ee7a18](https://github.com/amritk/dev-typescript/commit/7ee7a1857f01da3d4f7f5a4e58825d7020f53b1e))
* **api:** update property planet.habitabilityIndex (+3 more changes) ([38154e5](https://github.com/amritk/dev-typescript/commit/38154e58c82c155d27163212ade11049f9e4b45d))
* **api:** update SDK name (+1 more change) ([7cd8d55](https://github.com/amritk/dev-typescript/commit/7cd8d55075295fabb2e01cc37760392cf9648a07))


### Chores

* **api:** update generated SDK content ([8e181d7](https://github.com/amritk/dev-typescript/commit/8e181d7007ad0b793e0da5aeb4d918dcdd887013))
