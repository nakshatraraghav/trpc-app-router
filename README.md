# Next.js 14 Application with tRPC and App Router

## Overview

Welcome to the Next.js 14 application leveraging the power of tRPC and the App Router. This application demonstrates the integration of tRPC on the App Router, utilizing React Query for enhanced data fetching.

## tRPC Integration

This application demonstrates the implementation of tRPC on the App Router using React Query. The combination allows for efficient and declarative data fetching.

## React Query Version

Note that this project intentionally uses React Query v4 because tRPC currently does not support the newer v5.

### Technologies Used

- Next.js 14
- tRPC (v10)
- React Query (v4)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the Repository:

```bash
git clone https://github.com/your-username/trpc-app-router.git
cd trpc-app-router
```

2. Install Dependencies:

```bash
# npm
npm install

#yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

3. Start a local postgres database (optionally using the docker-compose provided)

```bash
sudo systemctl start docker.service
cd docker && sudo docker-compose up -d
```

4. Migrate the database

```bash
# run migrations on the database
pnpm prisma db push && prisma generate
```

5. Run the application

```bash
pnpm run dev
```

## Project Structure

```bash
├── docker
│   └── docker-compose.yml
├── next.config.js
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prisma
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── src
│   ├── app
│   │   ├── api
│   │   │   └── trpc
│   │   │       └── [trpc]
│   │   │           └── route.ts
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── (root)
│   │       └── page.tsx
│   ├── components
│   │   ├── providers
│   │   │   └── trpc-provider.tsx
│   │   └── todos
│   │       └── todo-list.tsx
│   ├── lib
│   │   └── trpc
│   │       └── trpc-client.ts
│   ├── server
│   │   ├── db
│   │   │   └── prisma.ts
│   │   └── trpc
│   │       ├── router.ts
│   │       ├── routes
│   │       │   └── todo.ts
│   │       └── trpc.ts
│   └── styles
│       └── globals.css
├── tailwind.config.ts
└── tsconfig.json
```

## Usage

Feel free to adapt and extend this project for your own needs. Leverage the tRPC integration, React Query setup, and App Router for building robust and efficient Next.js applications.

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow. Your contributions are greatly appreciated!

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.
