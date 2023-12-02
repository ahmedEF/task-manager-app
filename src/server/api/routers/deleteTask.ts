import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../../server/api/trpc";

export const deleteTaskRouter = createTRPCRouter({
    delete: protectedProcedure
    .input(
      z.object({ id: z.number()})
    )
    .mutation( ({ input, ctx }) => {
      return ctx.prisma.task.delete({
          where: {
            id:input.id,
          }
      });
      
    }),
});