import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./router";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "tullelink",
    }),
  ],
});

const user = await trpc.daysUntilChristmas.query()

const createdUser = await trpc.getaboutinfo.query()
