# React app shell

This project is a starter React app shell built with Vite, React Router, and react-fetch-utils. It provides a simple structure for building a frontend app with example routing, API fetching, and runtime configuration.

## Get started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
public/
  runtime-config.js              # Default development runtime config
  runtime-config.staging.js      # Example staging runtime config
  runtime-config.production.js   # Example production runtime config
src/
  main.jsx                       # App entry point with BrowserRouter and StrictMode
  App.jsx                        # Route definitions
  api/
    fetchClient.js               # Configured fetch client with baseUrl and auth token handling
  components/
    Component/
      Component.jsx              # Example component with data fetching
      getItems.js                # Example API call for /items
      index.js                   # Re-export
  pages/
    Page.jsx                     # Example page
```

## Runtime configuration

The app loads runtime settings from `public/runtime-config.js` at startup through `window.runConfig`. Replace this file when you deploy to a different environment. The config shape is:

```js
window.runConfig = {
  apiUrl: "https://dev.example.com", // Base URL for the backend API fetch client
  timeoutMs: 30000,                  // Optional; defaults to 30000
};
```

The project includes three example environment files:

- `runtime-config.js` for development
- `runtime-config.staging.js` for staging
- `runtime-config.production.js` for production

## API and fetch client

The fetch client in `src/api/fetchClient.js` wraps `react-fetch-utils` and uses `baseUrl` and `timeoutMs` from `window.runConfig`. It also provides a `getAuthToken` hook that reads from `localStorage`. Replace this with your preferred token storage method.

```js
// Customize token retrieval in src/api/fetchClient.js
getAuthToken: async () => localStorage.getItem("authToken"),
```

API functions return a `FetchResponseConfig` object with these properties:

```ts
{
  status: number,
  headers: Headers,
  data: any,
  response: Response,
}
```

## Add a page

1. Create a component in `src/pages/`.
2. Add a `<Route>` in `src/App.jsx`:

```jsx
<Route path="/about" element={<AboutPage />} />
```

## Add a component

Follow the pattern in `src/components/Component/`:

```text
MyFeature/
  MyFeature.jsx   # Component
  getMyData.js    # API call(s)
  index.js        # Re-export default for cleaner import paths
```
