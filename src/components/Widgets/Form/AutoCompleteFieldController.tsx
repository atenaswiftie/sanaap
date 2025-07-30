import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  Checkbox,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@wallpay/icons";
import { forwardRef } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

type AutocompleteControllerProps<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
  label: string;
  required?: boolean;
} & Omit<
  AutocompleteProps<Option, true | false, false, false>,
  "renderInput" | "options"
>;

export const AutoCompleteFieldController = forwardRef<
  HTMLDivElement,
  AutocompleteControllerProps<FieldValues>
>(({ name, options = [], label, required, ...rest }, ref) => {
  const { control } = useFormContext<FieldValues>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={rest.multiple ? [] : null}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={(_, data) => field.onChange(data)}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField
              {...params}
              label={label}
              inputRef={ref}
              size="small"
              required={required}
            />
          )}
          renderOption={(props, option) => {
            const isSelected = !rest.multiple
              ? option?.value === field?.value?.value
              : field?.value?.find((f: any) => f.value === option?.value);

            return (
              <Stack
                width={1}
                alignItems="center"
                direction="row"
                component={"span"}
                {...props}
                bgcolor={
                  !rest.multiple && isSelected ? "grey.100" : "transparent"
                }
              >
                {rest.multiple && <Checkbox checked={isSelected} />}
                <Typography variant="caption" component="li">
                  {option.label}
                </Typography>
              </Stack>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option.label}
                size="small"
                sx={{
                  height: 24,
                  fontSize: 12,
                }}
              />
            ))
          }
          popupIcon={
            rest.loading ? (
              <CircularProgress size={14} color="inherit" />
            ) : (
              <ArrowDropDown />
            )
          }
          {...rest}
          sx={{
            ...rest.sx,
            "& .MuiAutocomplete-popupIndicator": {
              backgroundColor: "transparent",
            },
            "& .MuiAutocomplete-clearIndicator": {
              backgroundColor: "transparent",
              marginRight: 0.5,
              "& svg": {
                fontSize: 20,
              },
            },
          }}
        />
      )}
    />
  );
});

AutoCompleteFieldController.displayName = "AutoCompleteFieldController";
