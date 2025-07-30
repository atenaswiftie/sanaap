import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useCreateOtpSanaapAPI } from "@wallpay/apis";
import { RedooFill } from "@wallpay/icons";
import { Caption } from "@wallpay/components";

export const ResendOTP = ({
  mobile,
  onSuccess,
  onError,
}: {
  mobile: string;
  onSuccess: () => void;
  onError: () => void;
  recoverPassword?: boolean;
}) => {
  const { mutate: sendSanaapOtp, isPending: sanaapIsPending } = useCreateOtpSanaapAPI();

  const onResend = () => {
    sendSanaapOtp({ data: { phone_number: mobile } }, { onSuccess, onError });
  };


  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      height={32}
    >

      <LoadingButton
        variant="text"
        color="secondary"
        size="small"
        loading={sanaapIsPending}
        onClick={onResend}
        endIcon={<RedooFill sx={{ width: 16, height: 16 }}/>}
      >
        <Caption color="text.secondary">
          {"ارسال مجدد کد"}
        </Caption>
      </LoadingButton>
    </Stack>
  );
};
