import { PropsWithChildren } from "react";
import { Theme, useMediaQuery } from "@mui/material";

interface IProps {
  for: "desktop" | "mobile" | undefined;
}

export type HiddenProps = PropsWithChildren<IProps>;

export const Hidden = ({ for: forProp, children }: HiddenProps): JSX.Element => {
  if (forProp === "mobile") {
    return <HiddenInMobile>{children}</HiddenInMobile>;
  }
  if (forProp === "desktop") {
    return <HiddenInDesktop>{children}</HiddenInDesktop>;
  }
  return <>{children}</>;
};

export const HiddenInMobile = ({ children }: any) => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  return isDesktop ? children : null;
};

export const HiddenInDesktop = ({ children }: any) => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return isMobile ? children : null;
};
