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
//   get: publicProcedure
//     .input(z.object({ listingId: z.string() }))
//     .query(({ ctx, input }) => {
//       return ctx.prisma.task.findUnique({
//         where: {
//           id: input.listingId,
//         },
//       });
//     }),
  getTasksByUserId: protectedProcedure.query(async ({ input, ctx }) => {
    const userId = ctx.auth.userId;
    const list = await ctx.prisma.task.findMany({
      where: {
        userId,
      },
    });
    return list;
  }),
//   sendMessage: protectedProcedure
//     .input(z.object({ message: z.string(), listingId: z.string() }))
//     .mutation(async ({ input, ctx }) => {
//       const fromUser = await clerkClient.users.getUser(ctx.auth.userId);

//       const message = await ctx.prisma.message.create({
//         data: {
//           fromUser: ctx.auth.userId,
//           fromUserName: fromUser.username ?? "unknown",
//           listingId: input.listingId,
//           message: input.message,
//         },
//       });
//       return message;
//     }),
  
});