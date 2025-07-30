import { Divider, List, ListItemButton, Stack, SxProps } from "@mui/material";
import { Body2, H6, Show } from "@wallpay/components";
import { NumberFormat } from "@wallpay/components/Inputs/InputNumber/NumberFormat";
import { Toman } from "@wallpay/icons";
import { rialToToman } from "@wallpay/utils/currency";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

type Items = {
  right?: ReactNode;
  left?: ReactNode;
  component?: ReactNode;
  label?: string;
  price?: number | string;
  Icon?: ReactNode;
  onClick?: () => void;
  border?: boolean;
  deviderSx?: SxProps;
};
export function WallPayList<T>({
  data,
  listItem,
  items,
  allowHover,
  labelSx,
  deviderSx,
  listItemSx,
}: {
  data?: T[];
  listItem?: (item: T) => ReactNode;
  items?: Items[];
  allowHover?: boolean;
  labelSx?: SxProps;
  deviderSx?: SxProps;
  listItemSx?: SxProps;
}) {
  const listItems = data || items;

  const InnerListItem = (item: any) => {
    return listItem ? (
      listItem(item)
    ) : (
      <>
        {item.right || (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
          >
            {item.Icon}
            <Body2 sx={{...labelSx}}>{item.label}</Body2>
          </Stack>
        )}
        {item.left || (
          <Show when={item.price}>
            <Stack direction="row" gap={0.5}>
              <H6>
                <NumberFormat
                  value={rialToToman(item.price)}
                  displayType="text"
                  thousandSeparator
                />
              </H6>
              <Toman />
            </Stack>
          </Show>
        )}
      </>
    );
  };

  return (
    <List disablePadding sx={{ maxHeight: "100%", overflowY: "auto" }}>
      {listItems?.map((item, index) => (
        <Fragment key={`list-item_${index}`}>
          {(item && typeof item === "object" && "border" in item
            ? item.border
            : Boolean(index)) && (
            <Divider sx={{ my: 1,...deviderSx }} style={{ borderStyle: "dashed" }} />
          )}
          <ListItemButton
            key={`detail-item_${index}`}
            sx={{
              minHeight: "auto",
              width: "100%",
              mt: 0,
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 4,
              p: 0.5,
              "&:hover": {
                backgroundColor: allowHover
                  ? "action.hover"
                  : "transparent !important",
              },
              ...listItemSx,
            }}
            onClick={
              "onClick" in (item as object)
                ? (item as Items).onClick
                : undefined
            }
          >
            {typeof item === 'object' && item !== null && "component" in item 
              ? (item as Items).component 
              : InnerListItem(item)}
          </ListItemButton>
        </Fragment>
      ))}
    </List>
  );
}
