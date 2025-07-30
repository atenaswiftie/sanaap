import { Box, Container } from "@mui/material";
import type { FunctionComponent, PropsWithChildren } from "react";

export const MobileContainer: FunctionComponent<PropsWithChildren> = (
  props
) => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
      }}
    >
      <Container
        disableGutters={true}
        maxWidth="xs"
        sx={{
          minHeight: "100dvh",
          position: "relative",
          p: 0,
        }}
      >
        {props.children}
      </Container>
    </Box>
  );
};
