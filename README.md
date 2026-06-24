# MyApp

An [Expo](https://expo.dev) app (SDK 56) with file-based routing, native tabs, and Apollo Client v4 GraphQL integration.

## Branches

| Branch | Description |
|---|---|
| `main` | Base Expo template with tabs, theming, and animations |
| `graphql` | Adds Apollo Client v4, GraphQL demo hook, and typed queries |

## Project Structure

```
src/
├── app/                    # Expo Router file-based routes
│   ├── _layout.tsx         # Root layout (tabs navigator)
│   ├── index.tsx           # Home tab
│   └── explore.tsx         # Explore tab
├── components/             # Reusable UI components
│   ├── ui/
│   │   └── collapsible.tsx # Animated accordion
│   ├── animated-icon.tsx / .web.tsx
│   ├── app-tabs.tsx / .web.tsx
│   ├── external-link.tsx
│   ├── hint-row.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── web-badge.tsx
├── constants/
│   └── theme.ts            # Colors, fonts, spacing
├── hooks/
│   ├── use-color-scheme.ts / .web.tsx
│   └── use-theme.ts
├── lib/                    # (empty on main)
├── services/               # (empty on main)
├── store/                  # (empty on main)
├── types/                  # (empty on main)
└── global.css              # Web CSS custom properties
```

## Get Started

```bash
npm install
npm run android   # or: npm run ios, npm run web
```

## GraphQL (graphql branch)

Configure your endpoint in `src/lib/apollo_client.ts`:

```ts
const httpLink = new HttpLink({
  uri: "https://your-api.com/graphql",
});
```

Write typed queries using hooks:

```ts
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

interface Data { ... }

const QUERY: TypedDocumentNode<Data> = gql`query { ... }`;

function Component() {
  const { loading, error, data } = useQuery(QUERY);
}
```

A working demo is on the **Explore** tab (via `src/hooks/use-demo-query.ts`).

## Scripts

| Script | Description |
|---|---|
| `npm start` | Start Expo dev server |
| `npm run android` | Start + launch on Android emulator |
| `npm run ios` | Start + launch on iOS simulator |
| `npm run web` | Start + open in browser |
| `npm run lint` | Run ESLint |
| `npm run reset-project` | Reset to blank project |

## Platform Support

- **Android** — native tabs via `expo-router/unstable-native-tabs`
- **iOS** — native tabs via `expo-router/unstable-native-tabs`
- **Web** — custom tab UI via `expo-router/ui`
