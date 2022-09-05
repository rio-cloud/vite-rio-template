# vite-rio-template

## Summary
This is the RIO TypeScript template for building new RIO services based on Vite as build tooling.


## How to create a new project
Create a new service app with this template via [degit](https://www.npmjs.com/package/degit):

```
npx degit rio-cloud/vite-rio-template my-rio-service-web
```

Or clone the project manually.

## Tech Stack
The RIO template is opinionated and comes already with some pre-defined libraries to give you a head start and streamline the various projects so devs feel familiar when working with multiple projects. If you still want to use something else, feel free to remove or adapt the sample implementations.

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
    - [Testing Library](https://testing-library.com/) as the testing utility
    - [Cypress](https://www.cypress.io/) as integration, end-to-end, monitoring test suite
- *API Mocking*:
    - [MSW](https://mswjs.io/) mock API calls by intercepting requests on the network level. This can be used for development and testing alike.
- *Localization*:
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
    - **components**: All service-specific components that are used multiple times across the service. These components are generic and reusable. They do not relate to a certain feature. Imagine a custom input component with validation that is used in various features for example in different forms.
    - **configuration**: Service configuration like login, token handling, language settings, or general setup files like the redux store
    - **data**: All relevant files for data definition to be used for the service; i.e. table configuration; initial service data or configurations, date formatter, currencies, etc.
    - **features**: The folder for all feature-relevant things. Each feature is meant to be in a dedicated subfolder that colocates feature-relevant files. Examples are header, sidebars, maps, trees, user lists, tables, forms, etc. Features are rather isolated and don't interact with other features. This way, they are easy to replace, remove, or change. Features are combined on pages.
    - **hooks**: All custom hooks used across the project
    - **layout**: The folder for the overarching layouts as defined in App.tsx
    - **pages**: The folder for all navigatable service pages. Pages are composed of features and components. For the Frontend template, these are the "intro" and "more" pages. It actually represents, what is defined in the header as routes. But this could also be sub pages in some cases.
    - **routes**: All route-related files like route definitions, route updater, route hooks etc.
    - **services**: All service API connections, redux-toolkit-query APIs or thunks, io-ts converter, model types, etc.
    - **utils**: Common utility files and functions
- **tests**
    - **integration**: all cypress integration tests
    - **utils**: utility functions that are used in integration tests

Note, there is no dedicated root folder for all the type files on purpose, as we believe that the typings should be colocated to the files where they originate from. This means, that component types belong to the respective component folder, model types belong to the respective API in the service folder, etc.


## Migrate existing projects to Vite
- Add vite dependencies to jour project
    ````
    npm i -D vite @vitejs/plugin-react babel-plugin-transform-vite-meta-env rollup-plugin-visualizer
    ````
- Remove old dependencies
    ````
    npm uninstall react-scripts react-app-rewired source-map-explorer style-loader css-loader
    ````
- Copy `vite.config.ts` to your project
- Update package.json scripts
    - Remove script `eject` as this is no longer needed
    - Update scripts `start`, `build` and `test` accordingly to use vite
    ````
    "start": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest src",
    ````
- Move the `index.html` out of the public folder into the root. 
    - Adapt the entry point for your index.tsx file to: `<script type="module" src="/src/index.tsx"></script>`
    - Remove the public folder
    - Adapt the CICD scripts accoringly
- Remove `analyze` script for not using "source-map-explorer" but rather "rollup-plugin-visualizer". Later is already configured in `vite.config.ts`
- Replace node environment variables with vite imports
    - `process.env.REACT_APP_*` to `import.meta.env.VITE_*`
    - `process.env.NODE_ENV !== 'production'` with `import.meta.env.DEV`
- Rename REACT_APP_* config variables to VITE_*
    - Update .env.production and .env.development file as well as src/config.ts plus all occurences in your code
- Create an empty .env file as vite checks for that. Use .env.local for your local config though
- Add files to your .gitignore
    ````
    .local
    .env
    stats.html
    ````
- Remove your old `webpack.config.js` and all related files and dependencies like:
    `````
    npm uninstall webpack webpack-bundle-analyzer webpack-cli webpack-dev-server @webpack-cli/init html-webpack-plugin compression-webpack-plugin babel-loader css-loader less-loader file-loader html-loader raw-loader script-loader style-loader url-loader ts-loader less mini-css-extract-plugin
    `````

- Rename .js or .ts files to .jsx or .tsx in case they are React components and contain JSX syntax
- Optionaly, change default port to your old project settings by editing the `vite.config.ts`and add the server.port
    ````
    export default defineConfig({
        // ....
        server: {
            port: 8090,
        },
    });
    ````
- Recommended: Adapt the project folder structure to the template folder structure. This will ensure that developers feel right at home when working with your project and other projects.
