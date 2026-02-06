# node-ts-express-prisma-template

**About**
This repository is a template for quickly bootstrapping a Node.js + TypeScript + Express + Prisma project.

**Tech Stack**

- Node.js (>=20)
- TypeScript
- Express
- Prisma + PostgreSQL (via Prisma Client)
- Jest + Supertest
- ESLint + Prettier
- Joi (validation)
- Winston (logging)

**Scripts**

- `lint`: Run ESLint
- `lint:fix`: Run ESLint with auto-fix
- `test`: Run Jest
- `test:coverage`: Run tests with coverage
- `test:watch`: Run tests in watch mode
- `prisma:generate`: Generate Prisma Client
- `migration:create`: Create a migration from schema changes without applying it
- `migrate`: Apply pending migrations
- `db:seed`: Run the database seed script
