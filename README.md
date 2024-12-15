This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Configuring environment variables

Create a .env.local file and add the following items:

```
DATABASE_URL={get the value from your database like Neon}
AUTH_SECRET={run "npx auth secret" to generate this}
```

Now that your database is configured, migrate the Prisma schema to your database:

```
npx prisma migrate dev
```

#### Configuring OAuth 2.0 Providers

You will need to configure an OAuth 2.0 application for the following services (see NextAuth guides):

- GitHub (`AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`)
- Google (`AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`)

### Starting the Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
