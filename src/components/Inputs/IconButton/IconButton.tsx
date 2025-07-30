import type { ForwardedRef, ForwardRefRenderFunction } from "react";
import type { IconButtonProps } from "./types";

import { IconButton as MuiIconButton } from "@mui/material";
import { forwardRef } from "react";

import { ConditionalWrapper } from "../../ConditionalWrapper";
import { Badge } from "../../DataDisplay/Badge";

import { useStyles } from "./styles";

const IconButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = (props, ref) => {
  const {
    children,
    variant = "circle",
    className,
    badge,
    style,
    ...rest
  } = props;
  const { classes, cx } = useStyles({ color: props.color || "primary" });

  return (
    <MuiIconButton
      ref={ref as unknown as ForwardedRef<HTMLButtonElement>}
      className={cx(className, {
        [classes.circle]: variant === "circle",
        [classes.border]: style === "border",
        [classes.plain]: style === "plain",
        [classes.fill]: style === "fill",
        [classes.text]: style === "text",
      })}
      {...rest}
    >
      <ConditionalWrapper
        wrapper={badge ? <Badge {...(badge as any)} /> : null}
        condition={!!badge}
      >
        {children}
      </ConditionalWrapper>
    </MuiIconButton>
  );
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  IconButtonComponent
);

IconButton.defaultProps = {
  variant: "circle",
};
