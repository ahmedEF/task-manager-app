import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../../server/api/trpc";

export const updateTaskRouter = createTRPCRouter({
    update: protectedProcedure
    .input(
      z.object({id:z.number(), title: z.string(), description: z.string(), status: z.string()})
    )
    .mutation(async ({ input, ctx }) => {
      const task = await ctx.prisma.task.update({
        data: {
            ...input,
            userId: ctx.auth.userId,
          },  
        where: {
            id:input.id,
          }
      });
      return task;
    }),
});