import type {BottomSheetProps} from '../../Navigation/BottomSheet/types';
import type {PopoverProps as MuiPopoverProps} from '@mui/material/Popover/Popover';

type InCompatibleProps = {open: boolean};

type SharedProps = InCompatibleProps &
  Omit<
    {
      [key in keyof MuiPopoverProps & keyof BottomSheetProps]?: MuiPopoverProps[key] | BottomSheetProps[key];
    },
    'title'
  > & {
    title?: string;
  };

export type PopoverProps = {
  PopoverProps?: Omit<MuiPopoverProps, keyof InCompatibleProps>;
  BottomSheetProps?: Omit<BottomSheetProps, keyof InCompatibleProps>;
} & SharedProps;

export type CastingBottomSheetProps = Pick<BottomSheetProps, keyof SharedProps>;
