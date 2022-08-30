# vite-rio-template

##Summary
This is the RIO TypeScript template for building new RIO services based on Vite as build tooling.


## How to create a new project
Create a new service app with this template via [degit](https://www.npmjs.com/package/degit):

```
npx degit rio-cloud/vite-rio-template my-rio-service-web
```

Or clone the project manually.

## Tech Stack
The RIO template is opinionated and comes already with some pre-defined libraries to give you a head start and to streamline the varios projects so devs feel familiar when working with multiple projects. If you still want to use something else, feel free to remove or adapt the sample implementations.

- *Build Tooling*:
    - [Vite](https://vitejs.dev/) - that uses [esbuild](https://esbuild.github.io/) and [Rollup](https://rollupjs.org) under the hood
- *Frontend Library*:
    - [React](https://reactjs.org/)
- *Routing*:
    - [React Router](https://github.com/remix-run/react-router)
- *State Management*:
    - [Redux Toolkit](https://redux-toolkit.js.org/)
- *Data Fetching*:
    - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) since it is within the same ecosystem as Redux
- *UI component library*:
    - [RIO UIKIT](https://uikit.developers.rio.cloud)
- *Testing*
    - [Jest](https://jestjs.io/) as test runner and testing framework for unit tests
    - [Testing Library](https://testing-library.com/) as testing utility
    - [Cypress](https://www.cypress.io/) as integration, end-to-end, monitoring test suite
- *API Mocking*:
    - [MSW](https://mswjs.io/) mock API calls by intercepting requests on the network level. This can be used for development and testing alike.
- *Localisation*:
    - [react-intl](https://formatjs.io/docs/react-intl/) as I18n library
    - [Phrase](https://phrase.com/cli/) managing translations. To fetch translations, the Phrase CLI is used
- *Service Monitoring and Issue Tracking*:
    - [Sentry](https://sentry.io/)
- *Static code analysis and formatting*:
    - [ESLint](https://eslint.org/)
    - [Prettier](https://prettier.io/) for autoformatting source code