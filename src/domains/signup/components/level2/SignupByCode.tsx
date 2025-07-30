import { Paper, Stack } from "@mui/material";
import {
  H5,
  IconButton,
  Show,
  Subtitle2,
  hideSnackbar
} from "@wallpay/components";

import { ConfirmationCodeInput } from "@wallpay/components/Inputs/confirmation-code-input/ConfirmationCodeInput";
import { EditFill } from "@wallpay/icons";
import { useState } from "react";

import { LoadingButton } from "@mui/lab";

import {
  ModelValidateOtpResponse,
  useValidateOtpSanaapAPI
} from "@wallpay/apis";
import { useCountDownTimer } from "@wallpay/hooks/useTimer";
import { useLoginStore } from "../../store/useLoginStore";
import { OTPCodeLength } from "../../utils";
import { ResendOTP } from "../ResendOTP";
import { ResendTimer } from "../ResendTImer";

export const SignupByCode = ({
  onBack,
  onSuccess,
}: {
  onBack: () => void;
  onSuccess: (data: ModelValidateOtpResponse) => void;
}) => {
  const [again, setAgain] = useState(false);
  const [code, setCode] = useState("");

  const { resetTimer,formattedTime } = useCountDownTimer(80, () => setAgain(true));
  const { mutate, isPending,error: errorMessage } = useValidateOtpSanaapAPI();
  const { phone_number } = useLoginStore();

  const onCodeComplete = (code: string) => {
    onSubmit(code);
  };

  const onSubmit = (code: string) => {
    mutate(
      {
        data: {
          phone_number: phone_number,
          code: code,
        },
      },
      {
        onSuccess: (data: ModelValidateOtpResponse) => {
          onSuccess(data as any);
        },
        onError: () => {
        },
      }
    );
  };

  const onResendSuccessfully = () => {
    resetTimer();
    setAgain(false);
  };

  const onResendError = () => {
    hideSnackbar();
    onBack();
  };

  return (
    <Paper sx={{ p: 3 }} variant="outlined">
      <Stack gap={2} alignItems={"center"}>
        <H5>کد تایید را وارد نمایید.</H5>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Subtitle2>{phone_number} </Subtitle2>

          <IconButton sx={{ p: 0 }} size="small" onClick={onBack}>
            <EditFill />
          </IconButton>
        </Stack>
      </Stack>

      <Stack>
        <ConfirmationCodeInput
          onComplete={onCodeComplete}
          onChangeCode={setCode}
          error={
            !!errorMessage
          }
        />

        <Show when={again} fallback={<ResendTimer timer={formattedTime} />}>
          <ResendOTP
            mobile={phone_number}
            onSuccess={onResendSuccessfully}
            onError={onResendError}
          />
        </Show>
      </Stack>

      <LoadingButton
        variant="contained"
        fullWidth
        loading={isPending}
        disabled={code.length < OTPCodeLength || Boolean(errorMessage)}
        sx={{ mt: 4 }}
      >
        تایید و ادامه
      </LoadingButton>
    </Paper>
  );
};
