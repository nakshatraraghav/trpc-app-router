import { router, publicProcedure } from "@/server/trpc/trpc";

import prisma from "@/server/db/prisma";
import { z } from "zod";

const createTodoSchema = z.object({
  content: z.string(),
});

const setDoneSchema = z.object({
  id: z.string(),
  done: z.boolean(),
});

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await prisma.todo.findMany();
  }),
  createTodo: publicProcedure
    .input(createTodoSchema)
    .mutation(async ({ input }) => {
      return await prisma.todo.create({
        data: {
          content: input.content,
        },
      });
    }),
  setDone: publicProcedure.input(setDoneSchema).mutation(async ({ input }) => {
    return await prisma.todo.update({
      where: {
        id: input.id,
      },
      data: {
        done: input.done,
      },
    });
  }),
});
