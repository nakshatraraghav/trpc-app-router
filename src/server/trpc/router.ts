import { router, publicProcedure } from "@/server/trpc/trpc";

import { todoRouter } from "./routes/todo";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "OK";
  }),
  todos: todoRouter,
});

export type AppRouter = typeof appRouter;
