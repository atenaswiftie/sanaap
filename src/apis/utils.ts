import { AxiosError } from "axios";
import { isPlainObject } from "node_modules/@tanstack/react-router/dist/esm/utils";

export const generateErrorMessage = (error: AxiosError<any>): string => {
  if(error?.response?.data?.error_details?.fa_details){
    return error?.response?.data?.error_details?.fa_details;
  }

  if (typeof error === "string") {
    return error;
  }

  const errorData = error?.response?.data;

  const errors = errorData?.data?.errors;
  if (isPlainObject(errors)) {
    const messages = Object.keys(errors).reduce((acc, curr) => {
      acc.push(`${curr}: ${errors[curr]}`);
      return acc;
    }, [] as string[]);
    return messages.join("\n");
  }

  if (errorData?.data?.message) {
    return errorData?.data?.message;
  }

  if (errorData?.message) {
    return errorData?.message;
  }

  if (error?.message) {
    return "خطا در ارتباط با سرور";
  }

  return "خطا در ارتباط با سرور";
};
