import type { ForwardRefRenderFunction } from "react";
import type { NumberFormatPropsBase } from "react-number-format";
import type { NumberFormatProps } from "./types";

import { forwardRef } from "react";
import NumberFormatInput from "react-number-format";

const persianNumbers: NumberFormatPropsBase<string>["customNumerals"] = [
  "۰",
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
];

const NumberFormatComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  NumberFormatProps
> = (props, ref) => {
  return (
    <NumberFormatInput
      allowLeadingZeros={true}
      thousandSeparator={true}
      allowNegative={false}
      decimalScale={0}
      customNumerals={persianNumbers}
      getInputRef={ref}
      inputMode="decimal"
      autoComplete="one-time-code"
      {...props}
    />
  );
};

export const NumberFormat = forwardRef(NumberFormatComponent);
