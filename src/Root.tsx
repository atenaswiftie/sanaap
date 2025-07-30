import { StrictMode } from "react";

import { APIProvider } from "@wallpay/apis/apiProvider.tsx";
import { Application } from "@wallpay/Application";
import { GlobalThemeProvider as ThemeProvider } from "@wallpay/styles";

export const Root = () => (
  <StrictMode>
    <APIProvider>
      <ThemeProvider>
        <Application />
      </ThemeProvider>
    </APIProvider>
  </StrictMode>
);
