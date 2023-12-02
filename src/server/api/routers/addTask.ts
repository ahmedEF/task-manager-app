import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../../server/api/trpc";

export const addTaskRouter = createTRPCRouter({
    create: protectedProcedure
    .input(
      z.object({ title: z.string(), description: z.string(), status: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      const task = await ctx.prisma.task.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });
      return task;
    }),
});