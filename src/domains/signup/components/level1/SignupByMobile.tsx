import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Stack } from "@mui/material";
import { useCreateOtpSanaapAPI } from "@wallpay/apis";
import { Caption, Form, H5, hideSnackbar } from "@wallpay/components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { phoneNumberRegex } from "../../utils";
import { MobileInsideForm } from "./MobileForm";
import { useLoginStore } from "../../store/useLoginStore";
import { useEffect } from "react";
import { ModelError } from "@wallpay/apis/resources/sanaap/types/modelError";

const schema = yup.object({
  phone: yup
    .string()
    .required("شماره موبایل الزامی است.")
    .matches(phoneNumberRegex, "شماره موبایل معتبر نیست"),
});
type FormValues = yup.InferType<typeof schema>;

export const SignupByMobile = ({
  isPending,
  onComplete,
}: {
  isPending?: boolean;
  onComplete: (mobile: string) => void;
}) => {


  const { mutate: sendSanaapOtp, isPending: sanaapIsPending } = useCreateOtpSanaapAPI();
  const { phone_number } = useLoginStore();

  useEffect(() => {
    if (phone_number) {
      form.setValue("phone", phone_number);
    }
  }, []);
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      phone: phone_number,
    },
  });


  const onSubmit = ({
    phone,

  }: {
      phone: string;
  }) => {

      handleSendOtp(phone);
      return;
  };


  const handleSendOtp = (phone: string) => {
    sendSanaapOtp(
      { 
        data: { 
          phone_number: phone 
        } 
      },
      {
        onSuccess: () => {
          onComplete(phone);
        },
        onError: (error: ModelError) => {
          if(error.response.data.error_details.code === "otp_code_expire_time"){
            onComplete(phone);
          }
          handleError(
            "phone",
            error?.response?.data?.error_details?.fa_details
          );
        },
      }
    );
  };

  const handleError = (name: "phone", message: string) => {
    hideSnackbar();
    form.setError(name, { message });
  };

  return (
    <Paper sx={{ p: 3 }} variant="outlined">
      <Stack gap={3}>
      <Stack gap={2} alignItems={"center"}>
        <H5>شماره موبایل خود را وارد نمایید.</H5>
       <Caption>کد تایید برای شما ارسال خواهد شد.</Caption>
      </Stack>

      <Form onSubmit={onSubmit} form={form}>
        <MobileInsideForm
          isPending={(isPending || sanaapIsPending) ?? false}
        />
      </Form>
      </Stack>
    </Paper>
  );
};
