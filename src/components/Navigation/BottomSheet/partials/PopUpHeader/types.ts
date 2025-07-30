import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

export type PopUpHeaderProps = {
  widget?: ReactNode;
  title?: ReactNode;
  onClose: (event: React.SyntheticEvent<{}, Event>) => void;
  showCloseButton?: boolean;
  headerSx?: SxProps;
};
