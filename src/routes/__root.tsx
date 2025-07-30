import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet
} from "@tanstack/react-router";
import { InternalError, NotFound } from "@wallpay/components/Feedback/errors";

import { Auth } from "@wallpay/hooks/useAppStore";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth?: Auth;
  mobile?: string;
}>()({
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: InternalError,
});

function RootComponent() {
  return <Outlet />;
}
