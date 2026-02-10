# node-ts-express-prisma-template

**About**
This repository is a template for quickly bootstrapping a Node.js + TypeScript + Express + Prisma project.

**Tech Stack**

- Node.js (>=20)
- TypeScript
- Express
- Prisma + PostgreSQL (via Prisma Client)
- Prisma Adapter (MariaDB)
- Jest + Supertest
- ESLint + Prettier
- dotenv-cli + tsc-watch (local dev)
- npm-run-all (script orchestration)
- Joi (validation)
- module-alias (runtime path aliases)
- Winston (logging)
- cors (CORS support)
- cookie-parser (cookie parsing)
- compression (response compression)

**Scripts**

- `start`: Run the compiled app from `dist`
- `build:ts`: Compile TypeScript with source maps
- `build`: Generate Prisma client, compile TypeScript, and copy Prisma assets
- `dev`: Watch TypeScript and restart on successful builds
- `dev:start`: Start app after copying Prisma assets
- `lint`: Run ESLint
- `lint:fix`: Run ESLint with auto-fix
- `test`: Run Jest
- `test:coverage`: Run tests with coverage
- `test:watch`: Run tests in watch mode
- `verify`: Run lint + tests + coverage
- `prisma:generate`: Generate Prisma Client
- `copy:prisma-generated`: Copy Prisma generated files for runtime
- `migration:create`: Create a migration from schema changes without applying it
- `migrate`: Apply pending migrations
- `db:seed`: Run the database seed script
