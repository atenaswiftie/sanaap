import { FormHelperText, FormHelperTextProps, SvgIcon } from "@mui/material";
import { CheckmarkCircleFill, InfomarkCircleFill } from "@wallpay/icons";
import SvgInfomarkCircle from "@wallpay/icons/react/outline/InfomarkCircle";
import { ElementType, PropsWithChildren } from "react";

interface IHelperTextContent {
  type?: "simple" | "info" | "success" | "error";
  icon?: ElementType;
  iconColor?: string;
}

export type HelperTextContentProps = PropsWithChildren<IHelperTextContent>;

const defaultIcons: {
  [key in Exclude<IHelperTextContent["type"], undefined>]: ElementType | null;
} = {
  simple: null,
  info: InfomarkCircleFill,
  error: SvgInfomarkCircle,
  success: CheckmarkCircleFill,
};

export const HelperTextContent = ({
  children,
  icon,
  iconColor,
  type = "info",
}: HelperTextContentProps) => {
  const iconComponent = icon || defaultIcons[type];
  const defaultColor = type === "success" ? "success.main" : undefined;
  const color = iconColor ? iconColor : defaultColor;
  return (
    <>
      {!!iconComponent && children !== " " && type !== "info" && (
        <SvgIcon
          fontSize="small"
          component={iconComponent}
          sx={{
            color,
            verticalAlign: "middle",
            marginRight: 1,
          }}
        />
      )}
      {children === " " ? <>&#8203;</> : children}
    </>
  );
};

export type HelperTextProps = FormHelperTextProps & HelperTextContentProps;

export const HelperText = ({
  children,
  type,
  icon,
  iconColor,
  ...restProps
}: HelperTextProps) => {
  return (
    <FormHelperText error={type === "error"} {...restProps}>
      <HelperTextContent type={type} icon={icon} iconColor={iconColor}>
        {children}
      </HelperTextContent>
    </FormHelperText>
  );
};
