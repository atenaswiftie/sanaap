import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
import { useSignupSanaapAPI } from "@wallpay/apis";
import { Form } from "@wallpay/components";
import { useAppStore } from "@wallpay/hooks/useAppStore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLoginStore } from "../../store/useLoginStore";
import { UserDataForm } from "./UserDataForm";
import { IUserDataFormData } from "./types";


const schema = yup.object({
  agent_code: yup.string().required("کد نمایندگی الزامی است"),
  city_code: yup.string().required("کد شهر الزامی است").matches(/^\d+$/, "کد شهر باید فقط شامل اعداد باشد"),
  county: yup.string().required("شهر الزامی است"),
  insurance_branch: yup
    .object({
      id: yup.string().required(),
      name: yup.string().required("شعبه بیمه الزامی است"),
    })
    .nullable(),
  phone: yup.string().required("تلفن ثابت الزامی است").matches(/^\d+$/, "تلفن ثابت باید فقط شامل اعداد باشد").max(10, "تلفن ثابت نباید بیشتر از 10 رقم باشد"),
  province: yup
    .number()
    .min(1, "استان الزامی است")
    .required("استان الزامی است"),
  name: yup.string().when("agency_type", {
    is: "legal",
    then: (schema) => schema.required("نام نمایندگی الزامی است"),
    otherwise: (schema) => schema.optional(),
  }),
  address: yup.string().required("آدرس الزامی است"),
  agency_type: yup
    .string()
    .oneOf(["real", "legal"], "نوع نمایندگی الزامی است")
    .required("نوع نمایندگی الزامی است"),
});

export const UserData = ({ onComplete }: { onComplete: () => void }) => {
  const { mutate, isPending } = useSignupSanaapAPI();
  const { name, lastName, phone_number, formData } =
    useLoginStore();
  const { login } = useAppStore();

  const form = useForm<IUserDataFormData>({
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      agent_code: formData.agent_code || "",
      city_code: formData.city_code || "",
      county: formData.county || "",
      insurance_branch: formData.insurance_branch || { id: "", name: "" },
      phone: formData.phone || "",
      province: formData.province || 0,
      name: formData.name || "",
      address: formData.address || "",
      agency_type: formData.agency_type || "real",
    },
  });

  const onSubmit = async (data: IUserDataFormData) => {
    // Prepare the data to send
    const submitData = {
      ...data,
      insurance_branch: data.insurance_branch?.id || "",
      first_name: name,
      last_name: lastName,
      phone_number,
      Name: data.name,
    };
    // Only include name if agency type is legal
    if (data.agency_type === "legal") {
      submitData.name = data.name;
    } else {
      // Remove name field for real agency type
      delete submitData.name;
    }

    mutate(submitData, {
      onSuccess: (data) => {
        const { access, refresh } = data.response;
        login({
          accessToken: access,
          refreshToken: refresh,
        });
        onComplete();
      },
      onError: (error) => {
        console.error("Error submitting form:", error);
      },
    });
  };

  return (
    <Stack padding={2} component={Paper}>
      <Form onSubmit={onSubmit} form={form}>
        <UserDataForm isLoading={isPending}/>
      </Form>
    </Stack>
  );
};
