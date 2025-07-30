import type { ThemeOptions } from "@mui/material";
import { commonPaletteColors } from "./palette-common";

export const darkPalette: ThemeOptions["palette"] = {
  mode: "dark",
  background: {
    default: "#121212",
    paper: "#1E1E1E",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#E0E0E0",
    tertiary: "#B3B3B3",
    disabled: "#666666",
  },
  line: {
    primary: "#444444",
    secondary: "#333333",
    tertiary: "#555555",
  },
  primary: {
    lighter: "#C5D0F3", // Lighter by two shades from #3F51B5
    light: "#7986CB",
    main: "#1C64F2",
    dark: "#283593",
    darker: "#100330",
    overlay: "#1E429F",
    tertiary: "#0D47A1",
  },
  secondary: {
    lighter: "#E6735A", // Lighter by two shades from #D84315
    light: "#FF5722",
    main: "#F89543",
    dark: "#BF360C",
    darker: "#1A0A02",
    overlay: "#8D6E63",
  },
  success: {
    lighter: "#77D3A0", // Lighter by two shades from #388E3C
    light: "#66BB6A",
    main: "#31C48D",
    dark: "#2E7D32",
    darker: "#014737",
    overlay: "#4CAF50",
    contrastText: "#FFFFFF",
  },
  error: {
    lighter: "#E57373", // Lighter by two shades from #D32F2F
    light: "#E57373",
    main: "#F05252",
    dark: "#C62828",
    darker: "#771D1D",
    overlay: "#9B1C1C",
  },
  warning: {
    lighter: "#FFCA28", // Lighter by two shades from #FFA000
    light: "#FFB74D",
    main: "#FACA15",
    dark: "#F57C00",
    darker: "#633112",
    overlay: "#FF8F00",
  },
  info: {
    lighter: "#2C3E5A", // Lighter by two shades from #15263F
    light: "#4377C0",
    main: "#599EFF",
    dark: "#1E88E5",
    darker: "#0D47A1",
    overlay: "#09101A",
  },
  common: commonPaletteColors,
  grey: {
    50: "#212121",
    100: "#424242",
    200: "#616161",
    300: "#757575",
    400: "#9E9E9E",
    500: "#BDBDBD",
    600: "#E0E0E0",
    700: "#EEEEEE",
    800: "#F5F5F5",
    900: "#FAFAFA",
  },
};
