# [simple-discord-clone-nextjs-ts-mysql](https://simple-discord-clone-nextjs-ts-mysql.vercel.app)

## Hosted on [Vercel](https://vercel.com)

## Build using

- [NextJs](https://nextjs.org) and [React](https://react.dev)
- [Clerk](https://clerk.com) for authentication and user management.
- [Tailwindcss](https://tailwindcss.com) and [Shadcn-ui](https://ui.shadcn.com) for Style
- [Prisma](https://www.prisma.io) and [Planetscale](https://planetscale.com) for [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) and Database.
- [Socket.io](https://socket.io) for Real-time messaging.
- [@tanstack/query](https://tanstack.com/query/latest) for Infinite loading for messages.
- [ImageKit](https://imagekit.io) for Upload Images and Attachments.
- [Livekit](https://livekit.io) for Audio and Video Calling and chat room.
- [react-hook-form](https://www.npmjs.com/package/react-hook-form) and [Zod](https://zod.dev/) for Client Side Form Validation.

### Prerequisites

Node version 18.x.x

### Setup Prisma

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
