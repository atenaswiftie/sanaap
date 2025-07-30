/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { SimpleItemType } from "./types";
import type { BoxProps, Theme } from "@mui/material";
import type { FunctionComponent } from "react";

import { Box, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";

import { MenuItem } from "../Menu";

const borderBottomStyles: BoxProps["sx"] = {
  "&:after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 16,
    borderBottom: (theme) => {
      return `1px solid ${theme.palette.line.primary}`;
    },
  },
};

export const SimpleItem: FunctionComponent<SimpleItemType> = (props) => {
  const {
    icon,
    widget,
    title,
    subtitle,
    primaryTypographyProps,
    // @ts-ignore
    component = "li",
    sx,
    menuItemProps,
    disableSelection,
    ...restProps
  } = props;

  const { sx: menuItemSx, ...menuItemRestProps } = menuItemProps || {};

  const isMobile = useMediaQuery<Theme>((theme) => {
    return theme.breakpoints.down("md");
  });

  return (
    <Box
      sx={
        {
          pointerEvents: disableSelection ? "none" : "unset",
          minHeight: "auto",
          listStyleType: "none",
          px: {
            md: 1,
          },
          my: {
            md: 1,
          },
          position: "relative",
          ...(isMobile && borderBottomStyles),
          ...sx,
          listStyle: "none",
        } as BoxProps["sx"]
      }
      component={component}
      {...restProps}
    >
      <MenuItem
        component="button"
        sx={{
          width: 1,
          p: {
            xs: 2,
            md: 1,
          },
          textAlign: "left",
          borderRadius: isMobile ? 0 : 2,
          ...menuItemSx,
        }}
        {...menuItemRestProps}
      >
        {icon && <ListItemIcon sx={{ mx: 0 }}>{icon}</ListItemIcon>}

        <ListItemText
          primaryTypographyProps={{
            component: "span",
            variant: "body2",
            color: props.disabled ? "text.disabled" : "text.primary",
            ...primaryTypographyProps,
          }}
          secondary={subtitle}
        >
          {title}
        </ListItemText>

        {widget}
      </MenuItem>
    </Box>
  );
};
