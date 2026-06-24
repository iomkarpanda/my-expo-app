# MyApp

Expo app with **NativeWind** (Tailwind CSS for React Native), **Apollo Client v4** GraphQL, and authentication screens.

## Quick Start

```bash
npm install
npx expo start
```

## Project Structure

```
src/
├── app/                    # Expo Router screens
│   ├── _layout.tsx         # Root layout (ApolloProvider + auth toggle)
│   ├── login.tsx           # Login screen
│   └── signup.tsx          # Signup screen
├── components/
│   └── ui/                 # Reusable UI components (Button, Input, Card)
├── hooks/
│   └── use-auth.ts         # GraphQL auth hooks (useLogin, useSignup)
├── lib/
│   ├── apollo_client.ts    # Apollo Client setup
│   └── auth.ts             # Auth GraphQL queries + types
└── global.css              # Tailwind directives
```

## GraphQL Setup

Configure your endpoint in `src/lib/apollo_client.ts`:

```ts
const httpLink = new HttpLink({
  uri: "https://your-api.com/graphql",
});
```

The app expects `login` and `signup` mutations returning `{ token, user }`.

## Auth Screens

- **Login** — email/password form with validation, calls `useLogin` mutation
- **Signup** — name/email/password form with validation, calls `useSignup` mutation
- Navigation between screens via inline toggle in `_layout.tsx`

## Reusable Components

Located in `src/components/ui/` — import as needed:

```ts
import { Button, Input, Card } from '@/components/ui';
```

## Branches

| Branch | Description |
|---|---|
| `main` | Auth screens + NativeWind + Apollo Client |
| `graphql` | Original GraphQL demo (Explore tab) |

## Scripts

| Script | Description |
|---|---|
| `npm start` | Start Expo dev server |
| `npm run android` | Launch on Android emulator |
| `npm run ios` | Launch on iOS simulator |
| `npm run web` | Launch in browser |
