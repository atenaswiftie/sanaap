/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TextField, TextFieldProps } from "@wallpay/components/Inputs";
import { NumberFormat } from "@wallpay/components/Inputs/InputNumber/NumberFormat";
import { NumberFormatProps } from "@wallpay/components/Inputs/InputNumber/types";
import { Controller, useFormContext } from "react-hook-form";

export type NumberFieldControllerProps = {
  name: string;
  label?: string;
} & NumberFormatProps &
  TextFieldProps;

export const NumberFieldController = ({
  name,
  ...props
}: NumberFieldControllerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ field, fieldState: { error } }) => (
        <NumberFormat
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
          // @ts-ignore
          customInput={TextField}
        />
      )}
      name={name}
    />
  );
};
