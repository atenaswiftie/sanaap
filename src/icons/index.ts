import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import { ComponentProps, ReactNode } from "react";

export * from "./react";
export type DynamicIcon = (props: ComponentProps<typeof SvgIcon>) => ReactNode;
