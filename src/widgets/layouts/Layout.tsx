import { Stack } from "@mui/material";


import { LayoutProps } from "./types";

export const Layout = (props: LayoutProps) => {
  const { sx, children } = props;

  return (
    <Stack
      height="100dvh"
      overflow="hidden"
      bgcolor="primary.overlay"
    >

      <Stack flex={1} sx={{ overflow: "hidden", ...sx }}>
        {children}
      </Stack>
    </Stack>
  );
};
