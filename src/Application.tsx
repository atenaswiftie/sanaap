import { useEffect } from "react";

import {
  MobileContainer,
  SnackbarProvider,
  ErrorBoundary,
} from "./components";

import { RouterProvider } from "./routerProvider";
import "./styles/font.css";
import "./styles/globals.css";

export const Application = () => {
  useEffect(() => {
    const handlePreloadError = () => window.location.reload();
    window.addEventListener("vite:preloadError", handlePreloadError);
    return () =>
      window.removeEventListener("vite:preloadError", handlePreloadError);
  }, []);

  return (
    <ErrorBoundary>
      <SnackbarProvider />

      <MobileContainer>
        <RouterProvider />
      </MobileContainer>
    </ErrorBoundary>
  );
};
