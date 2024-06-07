# Next.js GraphQL Contact Form Project

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It includes a dynamic contact form with validation and submission via GraphQL API.

## Live Demo

You can see the live demo by visiting [https://nextjs-wpgraphql-contact-form.vercel.app/](https://nextjs-wpgraphql-contact-form.vercel.app/).

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm, yarn, pnpm, or bun package manager

### Installation

First, clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

Then, Duplicate .env.example file and rename it to .env file.
Then, change API_URL value

```bash
API_URL = "YOUR_API_URL"
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run your application

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Dynamic Contact Form**: Automatically generates form fields based on the GraphQL API response.
- **Validation**: Uses zod for schema-based validation.
