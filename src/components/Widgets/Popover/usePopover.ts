import type {MouseEvent} from 'react';

import {useState} from 'react';

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => {
    if (!anchorEl) {
      return;
    }

    setAnchorEl(null);
  };

  const handleOpen = (event: MouseEvent<HTMLElement, MouseEvent | globalThis.MouseEvent>) => {
    if (anchorEl) {
      return;
    }

    setAnchorEl(event.currentTarget);
  };

  return {
    anchorEl,
    handleClose,
    handleOpen,
  };
}
