import { TextField, TextFieldProps } from "@wallpay/components/Inputs";
import { useFormContext, Controller } from "react-hook-form";

export type TextFieldControllerProps = {
  name: string;
  disableMargin?: boolean;
} & TextFieldProps;

export const TextFieldController = ({
  name,
  disableMargin,
  ...props
}: TextFieldControllerProps) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          color={props.valid ? "success" : props.color}
          helperText={error?.message?.toString() || props.helperText}
          InputLabelProps={{
            shrink: false,
          }}
          sx={{
            ...props.sx,
            mt: disableMargin ? 0 : 2,
          }}
        />
      )}
    />
  );
};
