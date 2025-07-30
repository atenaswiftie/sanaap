declare module "@mui/material" {
  interface CustomPalette {
    line: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }

  interface Palette extends CustomPalette {}

  interface PaletteOptions extends CustomPalette {}

  interface PaletteColor {
    lighter: string;
    darker: string;
    overlay: string;
    tertiary?: string;
    darkCyn?: string;
    deep?: string;
    miner?: string;
    lightCyn?: string;
  }

  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
    overlay: string;
    tertiary?: string;
    darkCyn?: string;
    deep?: string;
    miner?: string;
    lightCyn?: string;
  }

  interface TypeText {
    tertiary: string;
  }
}

export {};
