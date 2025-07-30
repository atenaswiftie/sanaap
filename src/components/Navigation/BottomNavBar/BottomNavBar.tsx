import type { BottomNavBarProps } from "./types";
import type { ForwardRefRenderFunction } from "react";

import {
  BottomNavigationAction,
  Container,
  BottomNavigation as MuiBottomNavigation,
} from "@mui/material";
import { forwardRef, memo, useMemo } from "react";

import { ConditionalWrapper } from "../../ConditionalWrapper";

const BottomNavigationComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BottomNavBarProps
> = (props, ref) => {
  const { items, value, variant, ...restProps } = props;

  const menu = useMemo(() => {
    return items.map((item) => {
      const { selectedIcon, icon, ...itemProps } = item;
      const isSelected = value === item.value;

      return (
        <BottomNavigationAction
          {...itemProps}
          key={item.value}
          value={item.value}
          icon={isSelected && selectedIcon ? selectedIcon : icon}
        />
      );
    });
  }, [items, value]);

  return (
    <ConditionalWrapper
      wrapper={
        <Container
          maxWidth="xs"
          disableGutters
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999 }}
        />
      }
      condition={variant === "fixed"}
    >
      <MuiBottomNavigation
        component="nav"
        ref={ref}
        value={value}
        {...restProps}
        sx={{
          pb: 3,
          height: 57,
        }}
      >
        {menu}
      </MuiBottomNavigation>
    </ConditionalWrapper>
  );
};

export const BottomNavBar = memo(forwardRef(BottomNavigationComponent));
