import { z } from "zod";
import { PrismaClient } from "@prisma/client";

import { procedure, router } from "../trpc";

const prisma = new PrismaClient();

export const favoritesRouter = router({
  getFavorites: procedure.query(() => prisma.favorite.findMany()),
  toggleFavorite: procedure
    .input(z.object({ graphId: z.string() }))
    .mutation(async (opts) => {
      const graphId = opts.input.graphId;
      const existingFavorite = await prisma.favorite.findUnique({
        where: { graphId },
      });
      if (existingFavorite) {
        return await prisma.favorite.delete({
          where: { graphId },
        });
      } else {
        return await prisma.favorite.create({
          data: { graphId },
        });
      }
    }),
});
