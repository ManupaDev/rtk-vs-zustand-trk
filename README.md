# Technical Exercise Monorepo

A minimal Turbo/Next.js monorepo showcasing a shared UI package and two frontend implementations of a Kanban board (Redux Toolkit and Zustand), backed by a simple API with in-memory data.

## Contents

```
apps/
  api/          # Next.js API routes serving board data (in-memory)
  web-rtk/      # Next.js app using Redux Toolkit (+ RTK Query)
  web-zustand/  # Next.js app using Zustand + TanStack Query
packages/
  ui/           # Shared shadcn/ui-based component library
  types/        # Shared TypeScript types
  eslint-config/# Shared ESLint configs
  typescript-config/ # Shared TS configs
```

## Requirements

- Node.js >= 20
- npm >= 10 (this repo uses npm workspaces)

## Getting Started

Install dependencies at the repo root:

```bash
npm install
```

Start all apps in dev mode in parallel (Turbo):

```bash
npm run dev
```

Individual apps are available at:

- web-rtk: `http://localhost:3000`
- web-zustand: `http://localhost:3001`
- api: `http://localhost:3002`

Alternatively, run one workspace at a time:

```bash
# API only
npm run -w api dev

# RTK UI only
npm run -w web-rtk dev

# Zustand UI only
npm run -w web-zustand dev
```

## Scripts

From the repo root:

- `npm run dev` — run all apps in dev (no caching)
- `npm run build` — build all workspaces
- `npm run lint` — run ESLint across workspaces
- `npm run format` — format `ts/tsx/md` via Prettier

Per workspace (examples):

```bash
npm run -w api build|start|lint|typecheck
npm run -w web-rtk build|start|lint|typecheck
npm run -w web-zustand build|start|lint|typecheck
```

## API

The API is a Next.js app exposing REST endpoints backed by an in-memory data store (no database). Data lives in `apps/api/src/app/server/infrastructure/data.ts` and is accessed via helpers in `.../db.ts`.

Base URL in dev: `http://localhost:3002`

Endpoints:

- `GET /api/boards` — list boards
- `POST /api/boards` — create a board (body must match `TBoard`)
- `GET /api/boards/:id` — get a board
- `PUT /api/boards/:id` — replace a board (body must match `TBoard`)
- `DELETE /api/boards/:id` — delete a board
- `POST /api/boards/:id/columns/:columnId/cards` — create a task

Example: create a task in a column

```bash
curl -X POST \
  http://localhost:3002/api/boards/1/columns/todo/cards \
  -H "Content-Type: application/json" \
  -d '{"title":"My first task","priority":"HIGH"}'
```

Notes:

- The API uses in-memory arrays; data resets on server restart.
- The board ID used by the UIs is `1` by default.

## Frontend Apps

Both UIs are Next.js apps that render the same Kanban board UI using the shared component library.

- web-rtk (`apps/web-rtk`)
  - State/Data: Redux Toolkit + RTK Query
  - Entry: `src/app/page.tsx`
  - Store setup: `src/lib/redux`

- web-zustand (`apps/web-zustand`)
  - State: Zustand
  - Data fetching/SSR hydration: TanStack Query
  - Entry: `src/app/page.tsx`

Both apps assume the API is reachable at `http://localhost:3002` in dev.

## Shared Packages

### UI (`@workspace/ui`)

Shared, themed components built on shadcn/ui.

Usage:

```tsx
import { Button } from "@workspace/ui/components/button";
```

Components live under `packages/ui/src/components`. Tailwind and theme setup is preconfigured in each app to consume the UI package.

Adding new shadcn components (optional):

```bash
# Run from the ui package directory
cd packages/ui
npx shadcn@latest add button
```

### Types (`@workspace/types`)

Contains cross-app TypeScript types such as `TBoard` and `TCardItem`.

```ts
import type { TBoard } from "@workspace/types";
```

## Build & Production

Build all workspaces:

```bash
npm run build
```

Start an app (after build):

```bash
npm run -w api start
npm run -w web-rtk start
npm run -w web-zustand start
```

## Troubleshooting

- Ports already in use: close the process using 3000/3001/3002 or change the port in the app script.
- Node version errors: ensure Node >= 20 (`node -v`).
- Clean installs: remove `node_modules` folders and run `npm install` again.
- Turbo cache oddities: run `turbo run dev --force` or delete `.turbo` if present.

## License

For the purposes of this technical exercise; no explicit license provided.
