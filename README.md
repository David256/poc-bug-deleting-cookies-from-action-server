# POC - Bug deleting cookies from a Server Action

Next.js version: 15.2.3

## Steps

1. Click the button Set cookie
2. Click the link Go to private page
3. Check if you are redirected to the success page

First, run the development server:

## Run

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

## References:

1. https://github.com/vercel/next.js/issues/68206#issuecomment-2732110321
2. The undocumented solution: https://github.com/vercel/next.js/issues/68206#issuecomment-2254121373
