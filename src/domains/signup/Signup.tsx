import { Box, Stack } from "@mui/material";
import { Show } from "@wallpay/components";

import { ChevronRight, Logo } from "@wallpay/icons";
import { useState } from "react";

import { Layout } from "@wallpay/widgets";
import { useNavigate } from "@tanstack/react-router";
import { SignupByMobile } from "./components/level1/SignupByMobile";
import { SignupByCode } from "./components/level2/SignupByCode";
import { UserName } from "./components/level3/UserName";
import { UserData } from "./components/level4/UserData";
import { useLoginStore } from "./store/useLoginStore";

type LoginStates = "Level1" | "Level2" | "Level3" | "Level4";

const loginStates: LoginStates[] = ["Level1", "Level3", "Level4"];

export const Signup = () => {
  const [loginState, setLoginState] = useState<LoginStates>("Level1");
  const { setPhoneNumber } = useLoginStore();
  const navigate = useNavigate();
  const handleBack = () => {
    const currentIndex = loginStates.indexOf(loginState);
    if (currentIndex > 0) {
      setLoginState(loginStates[currentIndex - 1]);
    }
  };

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
        <Show when={loginState !== "Level1" && loginState !== "Level2"}>
          <Stack position={"absolute"} top={0} left={0} zIndex={2} p={2}>
            <ChevronRight
              sx={{ width: 24, height: 24, color: "white" }}
              onClick={handleBack}
            />
          </Stack>
        </Show>
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
        <Show when={loginState === "Level1"}>
          <SignupByMobile
            onComplete={(phone_number) => {
              setPhoneNumber(phone_number);
              setLoginState("Level2");
            }}
          />
        </Show>

        <Show when={loginState === "Level2"}>
          <SignupByCode
            onBack={() => {
              setLoginState("Level1");
            }}
            onSuccess={() => {
              setLoginState("Level3");
            }}
          />
        </Show>

        <Show when={loginState === "Level3"}>
          <UserName
            onComplete={() => {
              setLoginState("Level4");
            }}
          />
        </Show>
        <Show when={loginState === "Level4"}>
          <UserData
            onComplete={() => {
              navigate({ to: "/" });
            }}
          />
        </Show>
      </Stack>
    </Layout>
  );
};
