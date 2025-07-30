import { Box, Stack } from "@mui/material";
import { Logo } from "@wallpay/icons";
import { Layout } from "@wallpay/widgets";
import { UserStatus } from "./components/UserStatus";

export const App = () => {
  return (
    <Layout hasHeader={false} float={false} sx={{ backgroundColor: "#f6f5f8" }}>
      <Box
        width={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"primary.main"}
        height={207}
        borderRadius={"0 0 15px 15px"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"start"}
          pt={4}
          height={"100%"}
        >
          <Logo />
        </Stack>
      </Box>
      <Stack
        p={4}
        mt={10}
        justifyContent="start"
        height="100%"
        zIndex={2}
        overflow={"auto"}
      >
        <UserStatus />
      </Stack>
    </Layout>
  );
};
