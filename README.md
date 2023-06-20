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

## Team Rules

<!-- - All commits must be made to a branch and then merged into master via a pull request -->
<!-- - All pull requests must be reviewed by at least one other team member -->
<!-- - All pull requests must pass the CI/CD pipeline before being merged into master -->
- Must use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages
- Must use [SemVer](https://semver.org) for version control
- Must use [Gitmoji](https://gitmoji.dev) for commit messages
- Must use NPM for package management
- Do not use .css|.scss|.sass files. Use styled-components instead
- Do not use .js|.jsx files. Use .ts|.tsx files instead
- Test all components fully with Jest and React Testing Library
- All components must be documented fully with Storybook
- All components must be exported in index.tsx
- All components should have a default Theme

## ToDo
- [ ] update version through CLI
- [ ] make sure SSR is enabled for styled components
  - https://styled-components.com/docs/tooling#usage
- [x] write a create component template
- [ ] figure out how to export themes properly without having to go into /dist
- [ ] link storybook to another client for development
- [ ] incorporate ci/cd for storybook
- [ ] ship with a default theme

