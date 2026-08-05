# React App Shell

An opinionated React app framework using Vite, React Router, and `react-fetch-utils`.

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
public/
  runtime-config.js              # Dev runtime config (default)
  runtime-config.staging.js      # Staging runtime config prototype
  runtime-config.production.js   # Production runtime config prototype
src/
  main.jsx                       # App entry point (BrowserRouter, StrictMode)
  App.jsx                        # Route definitions
  api/
    fetchClient.js               # Configured fetch client (baseUrl, auth token)
  components/
    Component/
      Component.jsx              # Example component with data fetching
      getItems.js                # API call for /items
      index.js                   # Re-export
  pages/
    Page.jsx                     # Example page
```

## Runtime Configuration

Runtime config is loaded from `public/runtime-config.js` at startup via `window.runConfig`. Swap the file at deploy time for environment-specific values. The config shape is:

```js
window["runConfig"] = {
    apiUrl: "https://dev.example.com",  // Base URL for the backend API fetch client
    timeoutMs: 30000,                   // Optional; defaults to 30000
};
```

Three environment files are provided out of the box: `runtime-config.js` (dev by default), `runtime-config.staging.js` (example/template for a staging environment), and `runtime-config.production.js` (example/template for production).

## API / Fetch Client

`src/api/fetchClient.js` wraps [`react-fetch-utils`](https://www.npmjs.com/package/react-fetch-utils) and is pre-configured with `baseUrl` and `timeoutMs` from `window.runConfig`. It also wires up a `getAuthToken` hook that reads from `localStorage` (replace with your preferred method of token storage):

```js
// Customize token retrieval in src/api/fetchClient.js
getAuthToken: async () => localStorage.getItem("authToken"),
```

API functions return a `FetchResponseConfig` object:

```ts
{
  status: number,
  headers: Headers,
  data: any,
  response: Response,
}
```

## Adding a New Page

1. Create a component in `src/pages/`.
2. Add a `<Route>` in `src/App.jsx`:

```jsx
<Route path="/about" element={<AboutPage />} />
```

## Adding a New Component

Follow the pattern in `src/components/Component/`:

```
MyFeature/
  MyFeature.jsx   # Component
  getMyData.js    # API call(s)
  index.js        # Re-export default for cleaner import paths
```
