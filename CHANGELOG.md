# Changelog

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
