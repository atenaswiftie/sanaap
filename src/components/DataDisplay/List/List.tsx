import type { FunctionComponent, ReactNode } from "react";
import type { ListProps } from "./types";

import { List as MuiList } from "@mui/material";
import { Fragment, memo, useMemo } from "react";

const ListComponent: FunctionComponent<ListProps> = (props) => {
  const {
    children,
    divider = true,
    lastItemDivider = false,
    ...restProps
  } = props;

  const render = useMemo<ReactNode>(() => {
    if (!Array.isArray(children)) {
      return children;
    }

    const filteredChildren = children.filter((child) => {
      return !!child;
    });

    return filteredChildren.map((item, index) => {
      const key = item.key ?? index.toString();

      return <Fragment key={key}>{item}</Fragment>;
    });
  }, [children, divider, lastItemDivider]);

  return <MuiList {...restProps}>{render}</MuiList>;
};

export const List = memo(ListComponent);
