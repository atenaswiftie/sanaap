import type { Components, Theme } from "@mui/material"
import mediaQuery from "css-mediaquery"

export const createUseMediaQuery = (theme: Theme, device?: string): Components["MuiUseMediaQuery"] => {
  return {
    defaultProps: {
      ssrMatchMedia: (query) => {
        const isServer = typeof window === "undefined"
        return {
          matches:
            isServer && !device
              ? false
              : mediaQuery.match(query, {
                  width: !isServer
                    ? window.innerWidth
                    : device === "mobile"
                      ? theme.breakpoints.values.sm
                      : theme.breakpoints.values.lg,
                }),
        }
      },
    },
  }
}
