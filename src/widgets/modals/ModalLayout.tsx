import { Button, Stack } from "@mui/material";

import { Box } from "@mui/material";
import { BottomSheet, Show } from "@wallpay/components";

export type ModalLayoutProps = {
  headerTitle?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  hasBottomButton?: boolean;
};

export const ModalLayout = (props: ModalLayoutProps) => {
  const {
    headerTitle = "عمومی",
    children,
    isOpen,
    setOpen,
    hasBottomButton = true,
  } = props;
  return (
    <BottomSheet
      headerTitle={headerTitle}
      showGrip
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDialogContent-root": {
          padding: 0,
        },
      }}
    >
      <Stack mt={1.5} p={2} pt={0} borderRadius={4}>
        <Box
          sx={{
            bgcolor: "background.paper",
            padding: 3,
            pt: 0,
            borderRadius: 4,
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </Box>
      </Stack>
      <Show when={hasBottomButton}>
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "background.paper",
            width: "100%",
            padding: 2,
            pb: 5,
          }}
        >
          <Button
            fullWidth
            onClick={() => setOpen(false)}
            size="large"
            variant="contained"
            color="primary"
          >
            متوجه شدم
          </Button>
        </Box>
      </Show>
    </BottomSheet>
  );
};
