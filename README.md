# Valtech React Component Library

- This is a private Github library that can only be used by the Valtech-SD Github Organization for projects that are using React.js and/or Next.js and styled-components
- Template for building front end micro services
- Equipped with [SemVer](https://semver.org) for version control

## Technologies used

- [React](https://react.dev)
- [Styled Components](https://styled-components.com)
- [Storybook](https://storybook.js.org)
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io/docs/tutorial-react)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Rollup](https://rollupjs.org)

## Intallation

- This project uses NPM. Please do not use any other package managers.

`$ npm install`

## Run storybook locally

`$ npm run storybook`

## Update Package

- Update the version in package.json file according to SemVer
- `$ npm run rollup`
- `$ npm publish`

## Usage

`$ npm install @valtech-sd/react-blocks@latest`

## Testing

`$ npm run test`

## ToDo
- [ ] update version through CLI
- [ ] make sure SSR is enabled for styled components
  - https://styled-components.com/docs/tooling#usage
- [ ] write a create component template
- [ ] figure out how to export themes properly without having to go into /dist
- [ ] link storybook to another client for development
- [ ] incorporate ci/cd for storybook
- [ ] ship with a default theme

