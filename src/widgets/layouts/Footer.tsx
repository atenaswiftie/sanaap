import { Box, Slide } from "@mui/material";
import { Show } from "@wallpay/components";
import { BottomMenu } from "./BottomMenu";
import { FooterProps } from "./types";

export const Footer = (props: FooterProps) => {
  const { animation = false, float = true, bottomMenu = [] } = props;

  const Footer = (
    <Box
      p={float ? 2 : 0}
      boxShadow="0px 1px 8px 0px rgba(0, 0, 0, 0.04), 0px 3px 16px 0px rgba(0, 0, 0, 0.06)"
    >
      <BottomMenu float={float} menu={bottomMenu} />
    </Box>
  );

  return (
    <Show when={animation} fallback={Footer}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        {Footer}
      </Slide>
    </Show>
  );
};
