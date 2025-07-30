import { Stack } from "@mui/material";
import {
  Body2,
  IconButton,
  TextFieldController
} from "@wallpay/components";

import { LoadingButton } from "@mui/lab";
import SvgXmarkCircle from "@wallpay/icons/react/outline/XmarkCircle";
import { useFormContext } from "react-hook-form";
import { convertToEnglishNumbers, phoneNumberLength } from "../../utils";

export const MobileInsideForm = ({ isPending }: { isPending: boolean }) => {
  const { watch, setValue, formState, register } = useFormContext();

  const phone = watch("phone");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const enPhone = convertToEnglishNumbers(value);

    setValue("phone", enPhone.slice(0, 11), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <Stack gap={1}>
      <Body2>تلفن همراه </Body2>
      <TextFieldController
        {...register("phone", {
          onChange: handlePhoneChange,
        })}
        name="phone"
        size="large"
        type="tel"
        placeholder="۰۹*********"
        slotProps={{ input: { sx: { fontSize: 16, height: 48 } } }}
        startIcon={
          phone && !isPending ? (
            <IconButton size="small" onClick={() => setValue("phone", "")}>
              <SvgXmarkCircle
                color={
                  !formState.errors["phone"] || !formState.submitCount
                    ? undefined
                    : "error"
                }
              />
            </IconButton>
          ) : undefined
        }
      />
      <Stack gap={1.25}>
        <LoadingButton
          type="submit"
          variant="contained"
          fullWidth
          loading={isPending}
          disabled={phone?.length !== phoneNumberLength}
        >
          ادامه
        </LoadingButton>
      </Stack>
    </Stack>
  );
};
