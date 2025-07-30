import type { ComponentsPropsList } from "@mui/material";
import type { Components, Theme } from "@mui/material/styles";
import type { ComponentNameToClassKey } from "@mui/material/styles/overrides";
import type { CSSInterpolation } from "@mui/system";

declare module "@mui/material/Switch" {
  export interface SwitchPropsSizeOverrides {
    tiny: true;
    large: true;
  }
}

// TODO: Remove after update material
type CustomComponent<componentName extends keyof Components> = Omit<
  Components[componentName],
  "styleOverrides"
> & {
  styleOverrides: {
    [k in ComponentNameToClassKey[componentName extends keyof ComponentNameToClassKey
      ? componentName
      : never]]?:
      | Partial<CSSInterpolation>
      | ((props: {
          ownerState: ComponentsPropsList[componentName];
          theme: Theme;
        }) => Partial<CSSInterpolation>);
  };
};

const sizes = {
  large: {
    width: 40,
    height: 24,
    thumb: 22,
    transform: 14,
  },
  medium: {
    width: 32,
    height: 20,
    thumb: 18,
    transform: 11.5,
  },
  small: {
    width: 24,
    height: 16,
    thumb: 14,
    transform: 7.5,
  },
  tiny: {
    width: 19,
    height: 13,
    thumb: 11,
    transform: 5.5,
  },
};

export const MuiSwitch: CustomComponent<"MuiSwitch"> = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const style = sizes[ownerState.size ?? "medium"];
      return {
        width: style.width,
        height: style.height,
        padding: 0,
        display: "flex",
        "& .MuiSwitch-switchBase": {
          padding: "1px 1.25px",
          "&.Mui-checked": {
            transform: `translateX(${style.transform}px)`,
            color: theme.palette.background.paper,
            "& + .MuiSwitch-track": {
              opacity: 1,
              backgroundColor: theme.palette.primary.light,
            },
            "& .MuiSwitch-thumb": {
              background: theme.palette.primary.main,
            },
          },
        },
        "& .MuiSwitch-thumb": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: style.thumb,
          height: style.thumb,
          borderRadius: "50%",
          boxShadow: "none",
          background: theme.palette.grey[500],
          transition: theme.transitions.create(["width"], {
            duration: 200,
          }),
        },
        "& .MuiSwitch-track": {
          borderRadius: Number(theme.shape.borderRadius) * 4,
          opacity: 1,
          backgroundColor: theme.palette.grey[400],
          boxSizing: "border-box",
        },
        "& .MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track": {
          opacity: 1,
          background: theme.palette.grey[300],
        },
        "& .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-thumb": {
          background: theme.palette.common.black,
        },
      };
    },
  },
};
