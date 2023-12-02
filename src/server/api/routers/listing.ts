import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../../server/api/trpc";

export const listingsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany();
  }),
  getTasksByUserId: protectedProcedure.query(async ({ input, ctx }) => {
    const userId = ctx.auth.userId;
    const list = await ctx.prisma.task.findMany({
      where: {
        userId,
      },
    });
    return list;
  }),
  getTasksById: protectedProcedure.input(
    z.object({id:z.number()})
  ).query(async ({ input, ctx }) => {
    const list = await ctx.prisma.task.findUnique({
      where: {
        id: input.id,
      },
    });
    return list;
  }),
});
