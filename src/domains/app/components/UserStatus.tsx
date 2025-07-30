import { Box, CircularProgress, Stack } from "@mui/material";
import { Body1, BottomSheet, Button, Show } from "@wallpay/components";
import { Loading } from "@wallpay/icons";
import { useGetAppUserStatusSanaapAPI } from "@wallpay/apis";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const UserStatus = () => {
  const { data, isLoading } = useGetAppUserStatusSanaapAPI();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const registrationStatus = data?.response?.registration_status;
  const onClick = () => {
    navigate({ to: "/signup" });
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Show when={isLoading}>
        <CircularProgress />
      </Show>
      <Show when={registrationStatus === "waiting_for_confirmation"}>
        <BottomSheet showCloseButton={false} open={open} onClose={onClose}>
          <Stack alignItems="center" justifyContent="center" gap={2}>
            <Box>
              <Loading />
            </Box>
            <Body1>نماینده محترم؛</Body1>
            <Body1>
              درخواست ثبت نام شما در حال بررسی است، در صورت تأیید اطلاعات،
              اپلیکیشن مورد نظر فعال خواهد شد.
            </Body1>
            <Button fullWidth variant="contained" onClick={onClick}>ورود با حساب کاربری دیگر</Button>
          </Stack>
        </BottomSheet>
      </Show>
    </Stack>
  );
};
