import { router } from "./trpc";
import { favoritesRouter } from "./routers/favorites";

export const appRouter = router({
  favorites: favoritesRouter,
});

export type AppRouter = typeof appRouter;
