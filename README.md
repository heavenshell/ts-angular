# ts-angular

[![Build Status](https://github.com/heavenshell/ts-angular/workflows/build/badge.svg)](https://github.com/heavenshell/ts-angular/actions)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

My angular suburi(practice).

| Library  | Description           |
| :------- | :-------------------- |
| Angular  | Framework             |
| Jest     | Testing framework     |
| TestCafe | E2E Testing framework |

## TODO

- [x] Jest
- [x] Storybook
- [ ] Eslint
- [x] Prettier
- [x] Markdownlint
- [x] TestCafe

## Generate api client

```console
yarn codegen
```

## Development server

```console
yarn start
```

## Build

```console
yarn build --prod
```

## Running unit tests

Run jest

```console
yarn test
```

Run jasmine with karma

```console
yarn test:karma
```

## Running end-to-end tests

Run TestCafe with start ng serve automatically

```console
yarn e2e
```

Run TestCafe with static build

```console
yarn build
yarn e2e:http-server
```

Run Storybook

```console
yarn storybook
```

## License

MIT
