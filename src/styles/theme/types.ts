declare module "@mui/material/styles" {
  interface Theme {
    elevations: Elevations
    constants: ThemeConstants
  }
  interface ThemeOptions {
    elevations?: Elevations
    constants?: ThemeConstants
  }
}

export type ThemeConstants = {
  bottomNavigationHeight: number
  buttonStartIconWidth: number
  buttonStartIconWidthLarge: number
  headerZIndex: number
  headerPrimaryHeight: number
  headerPrimaryHeightMobile: number
  headerSecondaryHeight: number
  headerSecondaryHeightMobile: number
  sidebarClosedWidth: number
  sidebarOpenedWidth: number
  sidebarZIndex: number
  categoryDrawerWidth: number
  dialogTitleHeight: number
}

export type Elevations = {
  level1: string
  level2: string
  level3: string
  level4: string
}

export type NeutralColor = {
  n1: string
  n2: string
  n3: string
  n4: string
  n5: string
  n6: string
  n7: string
  n8: string
  n9: string
  n10: string
  w: string
  b10: string
  b25: string
  b50: string
  b75: string
  b100: string
}

export type PaletteColors<T> = {
  red: T
  orange: T
  yellow: T
  green: T
  teal: T
  blue: T
  purple: T
  neutral: NeutralColor
}
