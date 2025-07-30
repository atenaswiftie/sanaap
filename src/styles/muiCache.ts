import createCache from "@emotion/cache"
import rtlPlugin from "stylis-plugin-rtl"

export function createEmotionCache(locale: string) {
  return createCache({
    key: locale === "fa" ? "muirtl" : "mui",
    stylisPlugins: locale === "fa" ? [rtlPlugin] : [],
  })
}
