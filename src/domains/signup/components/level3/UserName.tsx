import * as yup from "yup";

import { UserNameForm } from "./UserNameForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginStore } from "../../store/useLoginStore";
import { useForm } from "react-hook-form";
import { Form } from "@wallpay/components";
import { Paper, Stack } from "@mui/material";

const schema = yup.object({
  name: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
});

type FormValues = yup.InferType<typeof schema>;

export const UserName = ({ onComplete }: { onComplete: () => void }) => {
  const { name, lastName, setName, setLastName } = useLoginStore();
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name,
      lastName,
    },
  });

  const onSubmit = (data: FormValues) => {
    setName(data.name);
    setLastName(data.lastName);
    onComplete();
  };

  return (
    <Stack padding={2} component={Paper}>
      <Form onSubmit={onSubmit} form={form}>
        <UserNameForm />
      </Form>
    </Stack>
  );
};
