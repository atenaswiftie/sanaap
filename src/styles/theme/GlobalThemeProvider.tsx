import { CssBaseline, ThemeProvider } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { useAppStore } from "../../hooks";
import { CacheProvider } from "./CacheProvider";
import { createTheme } from "./theme";

type Props = {
  children: PropsWithChildren<Record<never, never>>;
};

type GlobalThemeProviderProps = PropsWithChildren<Props>;

export const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  const { theme } = useAppStore();

  const createdTheme = useMemo(() => {
    return createTheme(theme);
  }, [theme]);

  return (
    <CacheProvider>
      <ThemeProvider theme={createdTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
