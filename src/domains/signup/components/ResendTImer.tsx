import { Stack } from "@mui/material";
import { Body2, Caption } from "@wallpay/components";

export const ResendTimer = ({ timer }: { timer: string }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={0.5}
    >
      <Caption>{timer}</Caption>
      <Caption color="text.secondary">{" تا ارسال مجدد کد"}</Caption>
    </Stack>
  );
};
