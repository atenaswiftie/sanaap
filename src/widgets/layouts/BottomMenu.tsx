import {
  BottomNavigation,
  BottomNavigationAction,
  CircularProgress,
  Divider,
  Stack,
} from "@mui/material";
import { BottomMenuProps } from "./types";

export const BottomMenu = ({ menu, float }: BottomMenuProps) => {
  return (
    <BottomNavigation
      component="nav"
      sx={
        float
          ? { border: 0, borderRadius: 4, p: 2, height: 80 }
          : { border: 0, height: 80, p: 1.5}
      }
    >
      {menu?.map(({ isLoading, ...action }, index) => {
        return [
          Boolean(index) && float && (
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{ borderStyle: "dashed" }}
            />
          ),
          isLoading ? (
            <Stack flex={1} alignItems="center" justifyContent="center">
              <CircularProgress color="secondary" size={24} />
            </Stack>
          ) : (
            <BottomNavigationAction
              {...action}
              sx={{
                gap: 0.5,
                justifyContent: "space-between",
                "& .MuiBottomNavigationAction-label": {
                  fontWeight: action.className ? 700 : 400,
                },
                "& .MuiSvgIcon-fontSizeMedium": {
                  width: 28,
                  height: 28,
                },
              }}
            />
          ),
        ];
      })}
    </BottomNavigation>
  );
};
