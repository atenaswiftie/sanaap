import { Drawer, styled } from "@mui/material";
import { type ReactNode } from "react";

interface FullWidthDrawerProps {
  open: boolean;
  onClose: () => void;
  containerRef?: HTMLElement;
  children: ReactNode;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
    maxWidth: "444px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "444px",
    },
  },
}));

export const FullWidthDrawer = ({
  open,
  onClose,
  containerRef,
  children,
}: FullWidthDrawerProps) => {
  return (
    <StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      disablePortal
      ModalProps={{
        container: containerRef,
        keepMounted: false,
        style: { position: "absolute", overflow: "hidden" },
      }}
      transitionDuration={1000}
    >
      {children}
    </StyledDrawer>
  );
};
