import { addTaskRouter } from "./routers/addTask";
import { deleteTaskRouter } from "./routers/deleteTask";
import { listingsRouter } from "./routers/listing";
import { updateTaskRouter } from "./routers/updateTask";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  listings: listingsRouter,
  addTask:  addTaskRouter,
  deleteTask:deleteTaskRouter,
  updateTask:updateTaskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;