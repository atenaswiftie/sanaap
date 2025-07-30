import type { TypographyProps } from "./types";
import type { FunctionComponent } from "react";
import { Typography } from "./Typography";

const variantCreator = (
  variant: TypographyProps["variant"]
): FunctionComponent<Omit<TypographyProps, "variant">> => {
  const Variant: FunctionComponent<Omit<TypographyProps, "variant">> = (
    props
  ) => {
    const { children, ...rest } = props;

    return (
      <Typography variant={variant} {...rest}>
        {children}
      </Typography>
    );
  };

  Variant.displayName = `Typography${variant}`;

  return Variant;
};

export const [
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Body1,
  Body2,
  TypographyButton1,
  TypographyButton2,
  Caption,
  Overline,
] = [
  variantCreator("h1"),
  variantCreator("h2"),
  variantCreator("h3"),
  variantCreator("h4"),
  variantCreator("h5"),
  variantCreator("h6"),
  variantCreator("subtitle1"),
  variantCreator("subtitle2"),
  variantCreator("subtitle3"),
  variantCreator("body1"),
  variantCreator("body2"),
  variantCreator("button1"),
  variantCreator("button2"),
  variantCreator("caption"),
  variantCreator("overline"),
];
