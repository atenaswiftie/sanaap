import { Body2 } from "@wallpay/components";

import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { DynamicIcon } from "@wallpay/icons";

export const WallpayMenuItem = ({
  label,
  Icon,
  sx,
  ...props
}: {
  label: string;
  Icon?: DynamicIcon;
} & MenuItemProps) => {
  return (
    <MenuItem sx={{ gap: 1, m: 0, p: 1, minHeight: 28, ...sx }} {...props}>
      {Icon && (
        <Icon
          fontSize="small"
          sx={(theme) => ({ color: theme.palette.primary.light })}
        />
      )}
      <Body2>{label}</Body2>
    </MenuItem>
  );
};
