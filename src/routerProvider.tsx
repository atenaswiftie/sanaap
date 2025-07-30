import {
  RouterProvider as TanstackRouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { queryClient } from "@wallpay/apis/queryClient";
import { useAppStore } from "@wallpay/hooks";
import { routeTree } from "./routeTree.gen.ts";


const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined,
    mobile: undefined,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const { auth } = useAppStore();

  return (
    <TanstackRouterProvider
      router={router}
      context={{ auth }}
      basepath={"/"}
    />
  );
};
