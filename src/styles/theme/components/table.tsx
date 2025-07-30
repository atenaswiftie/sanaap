import type { Components, Theme, TableSortLabelProps } from "@mui/material";
import {
  buttonBaseClasses,
  SvgIcon,
  tableCellClasses as muiTableCellClasses,
  tableRowClasses,
  tableSortLabelClasses,
} from "@mui/material";
import { ArrowDownCircle } from "@wallpay/icons";

declare module "@mui/material/Table" {
  interface TablePropsSizeOverrides {
    tiny: true;
    large: true;
  }
}

const tableCellClasses = {
  ...muiTableCellClasses,
  sizeTiny: "MuiTableCell-sizeTiny",
  sizeLarge: "MuiTableCell-sizeLarge",
};

const IconComponent: TableSortLabelProps["IconComponent"] = (props) => (
  <SvgIcon component={ArrowDownCircle} {...props} />
);

export const MuiTableCell = (theme: Theme): Components["MuiTableCell"] => ({
  styleOverrides: {
    root: {
      height: 56,
      padding: 0,
      paddingLeft: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.line.primary}`,
      "&:last-child": {
        paddingRight: theme.spacing(2),
        textAlign: "right",
      },
      ...theme.typography.body2,
      [`&.${tableCellClasses.sizeTiny}`]: {
        paddingLeft: theme.spacing(1),
        height: 24,
        ...theme.typography.overline,
        "&:last-child": {
          paddingRight: theme.spacing(1),
        },
      },
      [`&.${tableCellClasses.sizeSmall}`]: {
        paddingLeft: theme.spacing(1),
        height: 32,
        ...theme.typography.caption,
        "&:last-child": {
          paddingRight: theme.spacing(1),
        },
      },
      [`&.${tableCellClasses.sizeLarge}`]: {
        paddingLeft: theme.spacing(2),
        height: 72,
        "&:last-child": {
          paddingRight: theme.spacing(2),
        },
      },
      [`&.${tableCellClasses.head}`]: {
        color: theme.palette.text.secondary,
        [`&.${tableCellClasses.sizeLarge}`]: {
          height: 56,
          ...theme.typography.subtitle2,
        },
      },
    },
    stickyHeader: {
      backgroundColor: theme.palette.background.paper,
    },
  },
});

export const MuiTableRow = (): Components["MuiTableRow"] => ({
  defaultProps: {
    hover: true,
  },
  styleOverrides: {
    root: {
      [`&.${tableRowClasses.hover}`]: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export const MuiTableBody = (theme: Theme): Components["MuiTableBody"] => ({
  styleOverrides: {
    root: {
      [`&:last-child .${tableRowClasses.root}:last-child .${tableCellClasses.root}`]:
        {
          borderBottom: "0 none",
        },
      [`.${tableRowClasses.hover}:hover`]: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
});

export const MuiTableSortLabel = (
  theme: Theme
): Components["MuiTableSortLabel"] => ({
  defaultProps: {
    IconComponent,
  },
  styleOverrides: {
    root: {
      [`&.${tableSortLabelClasses.active}`]: {
        color: "inherit",
      },
    },
    icon: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: theme.typography.pxToRem(16),
      [`.${tableCellClasses.sizeTiny} &`]: {
        fontSize: theme.typography.pxToRem(12),
      },
      [`.${tableCellClasses.sizeSmall} &`]: {
        fontSize: theme.typography.pxToRem(16),
      },
      [`.${tableCellClasses.sizeLarge} &`]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
  },
});

export const MuiPaginationItem = (
  theme: Theme
): Components["MuiPaginationItem"] => ({
  styleOverrides: {
    rounded: {
      borderRadius: +theme.shape.borderRadius * 2,
    },
  },
});

export const MuiTablePagination = (
  theme: Theme
): Components["MuiTablePagination"] => ({
  defaultProps: {
    labelRowsPerPage: "تعداد سطر در صفحه:",
    labelDisplayedRows: ({ from, to, count }) => {
      return `${from} تا ${to} از ${count !== -1 ? count : `بیشتر از ${to}`}`;
    },
  },
  styleOverrides: {
    select: {
      border: `1px solid ${theme.palette.line.primary}`,
      borderRadius: +theme.shape.borderRadius * 2,
    },
    actions: {
      [`.${buttonBaseClasses.root}`]: {
        backgroundColor: "transparent",
      },
    },
  },
});
