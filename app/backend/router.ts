import z from "zod";
import { Aboutservice } from "./Aboutservice";
import { publicProcedure, router } from "./tRPC";

const appRouter = router({
  getaboutinfo: publicProcedure.query(async () => {
    const users = await Aboutservice.getaboutinfo();

    return users;
  }),

  daysUntilChristmas: publicProcedure.query(() => {
    const days = Aboutservice.daysUntilChristmas();

    return days;
  }),

  spaaKone: publicProcedure //
    .input(z.string())
    .query((opts) => {
      return Aboutservice.spaaKone(opts.input);
    }),
});

export type AppRouter = typeof appRouter;
