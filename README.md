# Next.js GraphQL Contact Form Project

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It includes a dynamic contact form with validation and submission via GraphQL API.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Dynamic Contact Form**: Automatically generates form fields based on the GraphQL API response.
- **Validation**: Uses zod for schema-based validation.
