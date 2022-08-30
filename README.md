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


## Folder Structure
A short explanation of what each folder is meant for:

- **src**
    - **components**: all service-specific components that are used multiple times across the service. Theses components are generic and reusable. They do not relate to a ceartain feature. Imagine a custom input with validation component that are used in various features like in different forms.
    - **configuration**: Service configuration like login, token handling, language settings or general setup files like the redux store
    - **data**: all relevant files for data definition to be used for the service; i.e. table configuration; initial service data or configurations, date formatter, currencies, etc.
    - **features**: the folder for all feature-relevant things. Each feature is meant to be in a dedicated subfolder that colocates feature-relevant files. Examples are header, sidebars, maps, trees, user lists, tables, forms, etc. Features are rather isolated and don't interact with other features. This way, they are easy to replace, remove, or change. Features are combined on pages.
    - **hooks**: all custom hooks used accross the project
    - **layout**: the folder for the overarching layouts as defined in App.tsx
    - **pages**: the folder for all navigatable service pages. Pages are composed of features and components. For the Frontend template, these are the "intro" and "more" pages. It actually represents, what is defined in the header as routes. But this could also be sub pages in some cases.
    - **routes**: all route-related files like route definitions, route updater, route hooks etc.
    - **services**: all service API connections, redux-toolkit-query APIs or thunks, io-ts converter, model types etc.
    - **utils**: common utility files and functions
- **tests**
    - **integration**: all cypress integration tests
    - **utils**: utility functions that are used in integration tests

Note, there is no dedicated root folder for all the type files on purpose, as we believe that the typings should be colocated to the files where they originate from. Means, component types belong to the respective component folder, model types belong to the respective api in the service folder etc.