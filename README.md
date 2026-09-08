# oig.wax.io

Source of the [WAX Office of Inspector General](https://oig.wax.io/) website:
a Vue 3 single-page application that reads OIG, guild and election data
directly from the WAX blockchain and lets WAX account holders nominate
candidates and vote in OIG elections.

## Stack

- [Vue 3](https://vuejs.org/) with `<script setup>`,
  [Vue Router 5](https://router.vuejs.org/) (hash history) and
  [Vuex 4](https://vuex.vuejs.org/)
- [Vite 8](https://vite.dev/) and [Tailwind CSS 4](https://tailwindcss.com/)
  (CSS-first configuration lives in `src/assets/main.css`)
- [WharfKit](https://wharfkit.com/) for chain reads and wallet sessions
  (Anchor, WAX Cloud Wallet, Wombat)
- [Headless UI](https://headlessui.com/), [Heroicons](https://heroicons.com/),
  [Vuelidate](https://vuelidate-next.netlify.app/) and [Day.js](https://day.js.org/)

## Requirements

- Node.js 24 (LTS). Any release matching the `engines` field in
  `package.json` works; `.nvmrc` pins 24 for `nvm use` / `fnm use`.
- npm 10 or newer (bundled with Node).

## Getting started

```sh
npm ci
npm run dev
```

The dev server listens on <http://localhost:5173>.

### Scripts

| Script                 | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start Vite's dev server with hot reload        |
| `npm run build`        | Production build into `dist/`                  |
| `npm run preview`      | Serve the production build locally             |
| `npm run lint`         | ESLint (flat config in `eslint.config.js`)     |
| `npm run lint:fix`     | ESLint with auto-fix                           |
| `npm run format`       | Format the repository with Prettier            |
| `npm run format:check` | Verify formatting without writing (used in CI) |

## Configuration

Runtime settings are read from `.env` (Vite `VITE_*` variables) at build time:

| Variable              | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `VITE_CHAIN_API_URL`  | WAX API endpoint used for table reads and transactions |
| `VITE_CHAIN_ID`       | WAX mainnet chain id                                   |
| `VITE_WALLET_URL`     | Network URL handed to WharfKit                         |
| `VITE_OIG_ACCOUNT`    | OIG election contract account (`oig`)                  |
| `VITE_DECIDE_ACCOUNT` | Decide voting contract account (`decide`)              |

## Continuous integration and deployment

- `.github/workflows/ci.yml` runs on every pull request and push to `main`:
  lint, formatting check, `npm audit` (moderate and above fail the build)
  and a production build.
- `.github/workflows/deploy.yml` runs on every push to `main`, builds the
  site and publishes `dist/` to GitHub Pages. The custom domain comes from
  `CNAME`. GitHub Pages must be enabled for the repository with
  **Source: GitHub Actions** for the deploy job to succeed.
- Dependabot (`.github/dependabot.yml`) opens weekly update PRs for npm
  packages and GitHub Actions.

## Recommended IDE setup

[VS Code](https://code.visualstudio.com/) with the
[Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
extension.
