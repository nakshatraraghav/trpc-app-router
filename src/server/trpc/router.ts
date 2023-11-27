import { router, publicProcedure } from "@/server/trpc/trpc";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "OK";
  }),
});

export type AppRouter = typeof appRouter;
