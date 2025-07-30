import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { MuiAppBar, MuiToolbar } from "./components/appBar";
import {
  MuiBottomNavigation,
  MuiBottomNavigationAction,
} from "./components/bottomNavigation";
import { MuiButton, MuiIconButton } from "./components/button";
import { MuiCheckbox } from "./components/checkbox";
import { MuiCircularProgress } from "./components/circularProgress";
import { MuiBackdrop, MuiDialog, MuiDialogTitle } from "./components/dialog";
import { MuiDivider } from "./components/divider";
import { MuiFormControlLabel } from "./components/formControlLabel";
import { MuiLinearProgress } from "./components/linearProgress";
import {
  MuiList,
  MuiListItem,
  MuiListItemIcon,
  MuiListItemText,
} from "./components/list";
import { MuiMenu, MuiMenuItem } from "./components/menu";
import { MuiModal } from "./components/modal";
import { MuiPaper } from "./components/paper";
import { MuiRadio } from "./components/radio";
import { MuiSelect } from "./components/select";
import { MuiSkeleton } from "./components/skeleton";
import { MuiSlider } from "./components/slider";
import { MuiSnackbar, MuiSnackbarContent } from "./components/snackbar";
import { MuiSvgIcon } from "./components/svgIcon";
import { MuiSwitch } from "./components/switch";
import { MuiTab } from "./components/tab";
import {
  MuiPaginationItem,
  MuiTableBody,
  MuiTableCell,
  MuiTablePagination,
  MuiTableRow,
  MuiTableSortLabel,
} from "./components/table";
import {
  MuiFormHelperText,
  MuiFormLabel,
  MuiInputAdornment,
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiTextField,
} from "./components/textField";
import { MuiTooltip } from "./components/tooltip";
import { createUseMediaQuery } from "./components/useMediaQuery";
import { FA_FONT } from "./constants";
import { MuiCssBaseline } from "./system/baseline";
import { breakpoints } from "./system/breakpoints";
import { darkElevations, lightElevations } from "./system/elevations";
import { darkPalette } from "./system/palette-dark";
import { lightPalette } from "./system/palette-light";
import { spacing } from "./system/spacing";
import { typography } from "./system/typography";

// Create a theme instance.
export const createTheme = (mode?: string, locale = "fa") => {
  typography.fontFamily = FA_FONT;
  const initialTheme = createMuiTheme({
    direction: locale === "fa" ? "rtl" : "ltr",
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography,
    breakpoints,
    spacing,
    elevations: mode === "dark" ? darkElevations : lightElevations,
    constants: {
      bottomNavigationHeight: 55,
      buttonStartIconWidth: 40,
      buttonStartIconWidthLarge: 56,
      headerZIndex: 3,
      headerPrimaryHeight: 72,
      headerPrimaryHeightMobile: 56,
      headerSecondaryHeight: 48,
      headerSecondaryHeightMobile: 44,
      sidebarClosedWidth: 96,
      sidebarOpenedWidth: 360,
      sidebarZIndex: 2,
      categoryDrawerWidth: 305,
      dialogTitleHeight: 56,
    },
  });
  return responsiveFontSizes(
    createMuiTheme(initialTheme, {
      components: {
        MuiCssBaseline: MuiCssBaseline(initialTheme),
        MuiButton: MuiButton(initialTheme),
        MuiIconButton: MuiIconButton(initialTheme),
        MuiAppBar: MuiAppBar(initialTheme),
        MuiToolbar: MuiToolbar(initialTheme),
        MuiSnackbar,
        MuiSnackbarContent: MuiSnackbarContent(initialTheme),
        MuiSvgIcon: MuiSvgIcon(initialTheme),
        MuiTextField: MuiTextField(initialTheme),
        MuiInputLabel: MuiInputLabel(initialTheme),
        MuiFormLabel,
        MuiOutlinedInput: MuiOutlinedInput(initialTheme),
        MuiInputAdornment: MuiInputAdornment(initialTheme),
        MuiFormHelperText: MuiFormHelperText(initialTheme),
        MuiModal,
        MuiSelect: MuiSelect(initialTheme),
        MuiMenu: MuiMenu(initialTheme),
        MuiMenuItem: MuiMenuItem(initialTheme),
        // MuiAlert: MuiAlert(initialTheme),
        // MuiAlertTitle: MuiAlertTitle(initialTheme),
        MuiPaper: MuiPaper(initialTheme),
        MuiCheckbox: MuiCheckbox(initialTheme),
        MuiFormControlLabel: MuiFormControlLabel(initialTheme),
        MuiLinearProgress: MuiLinearProgress(initialTheme),
        MuiBottomNavigation: MuiBottomNavigation(initialTheme),
        MuiBottomNavigationAction: MuiBottomNavigationAction(initialTheme),
        MuiTableCell: MuiTableCell(initialTheme),
        MuiTableRow,
        MuiTableSortLabel: MuiTableSortLabel(initialTheme),
        MuiTablePagination: MuiTablePagination(initialTheme),
        MuiPaginationItem: MuiPaginationItem(initialTheme),
        MuiTableBody: MuiTableBody(initialTheme),
        MuiDialog: MuiDialog(initialTheme),
        MuiDialogTitle: MuiDialogTitle(initialTheme),
        MuiBackdrop: MuiBackdrop(initialTheme),
        MuiList,
        MuiListItem,
        MuiListItemIcon: MuiListItemIcon(initialTheme),
        MuiListItemText: MuiListItemText(initialTheme),
        MuiDivider: MuiDivider(initialTheme),
        MuiSlider: MuiSlider(initialTheme),
        MuiUseMediaQuery: createUseMediaQuery(initialTheme),
        MuiInputBase: MuiInputBase(initialTheme),
        MuiSwitch,
        MuiTab: MuiTab(initialTheme),
        MuiTooltip: MuiTooltip(initialTheme),
        MuiRadio,
        MuiCircularProgress,
        MuiSkeleton,
      },
    })
  );
};

export const theme = createTheme();
