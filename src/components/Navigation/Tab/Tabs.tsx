import {
  Box,
  Tab as MuiTab,
  Tabs as MuiTabs,
  TabsOwnProps,
} from "@mui/material";
import { useState } from "react";

export const Tabs = ({
  tabs,
  ...rest
}: {
  tabs: { value: string; label: string }[];
} & TabsOwnProps) => {
  const [value, setValue] = useState(tabs[0]?.value);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor={"Background"}>
      <MuiTabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {tabs.map(({ value, label }) => (
          <MuiTab
            key={`tab-label_${label}_${value}`}
            value={value}
            label={label}
            sx={(theme) => ({
              fontSize: 14,
              fontWeight: 700,
              color: "primary.light",
              "&.Mui-selected": {
                color: theme.palette.primary,
              },
            })}
          />
        ))}
      </MuiTabs>
    </Box>
  );
};
