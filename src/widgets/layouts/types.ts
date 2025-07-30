import { BottomNavigationActionProps, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

export type HeaderProps = {
  hasBackButton?: boolean;
  hasSupport?: boolean;
  endAction?: ReactNode;
  startAction?: ReactNode;
  logoType?: "small" | "large";
  title?: string;
  onBack?: () => void;
};

export type FooterProps = {
  float?: boolean;
  animation?: boolean;
  bottomMenu?: ({
    isLoading?: boolean;
  } & BottomNavigationActionProps)[];
};

export type LayoutProps = HeaderProps &
  FooterProps &
  PropsWithChildren<{
    sx?: SxProps<Theme>;
    hasHeader?: boolean;
  }>;

export type BottomMenuProps = {
  float: boolean;
  menu: ({ isLoading?: boolean } & BottomNavigationActionProps)[];
};
