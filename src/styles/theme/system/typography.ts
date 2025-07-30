import type { TypographyOptions } from "@mui/material/styles/createTypography";
import type { CSSProperties } from "react";
import { pxToRem } from "../helper";

declare module "@mui/material/styles" {
  export interface TypographyVariants {
    button: CSSProperties;
    button1: CSSProperties;
    button2: CSSProperties;
    body3: CSSProperties;
    subtitle3: CSSProperties;
    label1: CSSProperties;
    label2: CSSProperties;
    label3: CSSProperties;
    label4: CSSProperties;
  }

  export interface TypographyVariantsOptions {
    button?: CSSProperties;
    button1?: CSSProperties;
    button2?: CSSProperties;
    body3?: CSSProperties;
    subtitle3?: CSSProperties;
    label1?: CSSProperties;
    label2?: CSSProperties;
    label3?: CSSProperties;
    label4?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button: true;
    button1: true;
    button2: true;
    body3: true;
    subtitle3: true;
    label1: true;
    label2: true;
    label3: true;
    label4: true;
  }
}

const fontFamily = "PeydaWebFaNum";

export const htmlFontSize = 16;
const typographyOption: TypographyOptions = {
  fontFamily,
  htmlFontSize,
  h1: {
    fontSize: pxToRem(48),
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(40),
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(32),
    fontWeight: 700,
  },
  h4: {
    fontSize: pxToRem(24),
    fontWeight: 700,
  },
  h5: {
    fontSize: pxToRem(20),
    fontWeight: 700,
  },
  h6: {
    fontSize: pxToRem(16),
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    fontWeight: 500,
  },
  subtitle3: {
    fontSize: pxToRem(12),
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 400,
  },
  body3: {
    fontSize: pxToRem(12),
    fontWeight: 400,
  },
  button: {
    fontSize: pxToRem(16),
    fontWeight: 500,
  },
  button1: {
    fontFamily,
    fontSize: pxToRem(16),
    fontWeight: 700,
  },
  button2: {
    fontFamily,
    fontSize: pxToRem(14),
    fontWeight: 700,
  },
  caption: {
    fontSize: pxToRem(12),
    fontWeight: 400,
  },
  overline: {
    fontSize: pxToRem(10),
    fontWeight: 400,
  },
  label1: {
    fontSize: pxToRem(22),
    fontWeight: 700,
  },
  label2: {
    fontSize: pxToRem(18),
    fontWeight: 700,
  },
  label3: {
    fontSize: pxToRem(16),
    fontWeight: 700,
  },
  label4: {
    fontSize: pxToRem(14),
    fontWeight: 700,
  },
};

export const typography = typographyOption;
