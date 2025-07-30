import createCache from "@emotion/cache";
import { CacheProvider as MuiCacheProvider } from "@emotion/react";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import stylisRTLPlugin from "stylis-plugin-rtl";

function getLocaleDirection(locale: string) {
  return locale === "fa" ? "rtl" : "ltr";
}

export const CacheProvider: FC<PropsWithChildren> = ({ children }) => {
  const direction = useMemo(() => getLocaleDirection("fa"), []);
  const cache = useMemo(
    () =>
      createCache({
        key: "muirtl",
        stylisPlugins: direction === "rtl" ? [stylisRTLPlugin] : [],
      }),
    [direction]
  );
  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return <MuiCacheProvider value={cache}>{children}</MuiCacheProvider>;
};
