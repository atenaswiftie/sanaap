import type {
  BottomNavigationTypeMap,
  BottomNavigationProps as MuiBottomNavigationProps,
} from "@mui/material";
import type { BottomNavigationActionProps } from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import type { ReactNode } from "react";

export interface BottomNavBarItem
  extends Omit<BottomNavigationActionProps, "value"> {
  selectedIcon?: ReactNode;
  value: string;
}

export type BottomNavBarProps<
  Item extends BottomNavBarItem = BottomNavBarItem,
> = {
  selectedKey?: Item["value"];
  variant?: "standard" | "fixed";
  items: Item[];
} & Omit<
  MuiBottomNavigationProps<BottomNavigationTypeMap["defaultComponent"], {}>,
  "showLabels"
>;
