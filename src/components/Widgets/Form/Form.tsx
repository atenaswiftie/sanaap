import type { SxProps, Theme } from "@mui/material";
import { styled } from "@mui/material";
import type { ReactElement } from "react";
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

export const StyledFrom = styled("form")({});

type functionalChildren = () => JSX.Element;
type children = ReactElement<UseFormReturn> | functionalChildren;
export type FormProps<T extends FieldValues> = {
  children?: children[] | children;
  sx?: SxProps<Theme>;
  onSubmit: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
  yupResolver?: yup.ObjectSchema<any>;
  defaultValues?: Partial<T>;
  form?: UseFormReturn<T>;
} & UseFormProps<T>;

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  onInvalid,
  sx,
  yupResolver,
  defaultValues,
  form: externalForm,
  mode = "onBlur",
  ...useFormProps
}: FormProps<T>) => {
  const _form = useForm<T>({
    mode,
    ...useFormProps,
  });

  const form = externalForm ?? _form;

  const getChild = <T,>(item: T) => {
    if (typeof item === "function") {
      return item(form);
    }
    return item;
  };
  const newChild = () => {
    if (children && Array.isArray(children)) {
      return children.map((item) => getChild<children>(item));
    } else if (children) {
      return getChild(children);
    }
    return null;
  };

  return (
    <FormProvider {...form}>
      <StyledFrom onSubmit={form.handleSubmit(onSubmit, onInvalid)} sx={sx}>
        {newChild()}
      </StyledFrom>
    </FormProvider>
  );
};
