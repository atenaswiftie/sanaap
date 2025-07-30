/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ListItemContentProps } from "./types";

import { ListItemIcon, ListItemText } from "@mui/material";
import { type FunctionComponent } from "react";

import { Body2 } from "../Typography";

export const ListItemContent: FunctionComponent<ListItemContentProps> = (
  props
) => {
  const primary = props.reverse ? props.description : props.title;
  const secondary = props.reverse ? props.title : props.description;

  return (
    <>
      {!!props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}

      <ListItemText
        primaryTypographyProps={{ component: "span", variant: "body2" }}
        secondaryTypographyProps={{ component: "span", variant: "caption" }}
        // @ts-ignore
        reverse={props.reverse}
        primary={primary}
        secondary={secondary}
      />

      {!!props.widget && (
        <Body2
          component="span"
          sx={{
            justifyContent: "center",
            gap: 0.5,
            marginLeft: 0.5,
            textAlign: "right",
          }}
          {...props.widgetProps}
        >
          {props.widget}
        </Body2>
      )}
    </>
  );
};
