import { Box, Divider, Stack } from "@mui/material";
import { StepperCheckboxFill } from "@wallpay/icons";
import React, { useCallback } from "react";
import { Show } from "..";
import { theme } from "@wallpay/styles";

type steps = {
  id: number;
  component: React.ReactNode;
};
type StepperProps = {
  steps: steps[];
  currentStep: number;
};

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  const isLastStep = useCallback(
    (index: number) => {
      return index === steps.length - 1;
    },
    [steps.length]
  );

  const isActiveStep = useCallback(
    (index: number) => {
      return index <= currentStep;
    },
    [currentStep]
  );

  return (
    <>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Stack
            direction={"row"}
            gap={2}
            width={"100%"}
            height={80}
          >
            <Stack
              justifyContent={"start"}
              alignItems={"center"}
              flexGrow={1}
              sx={{ transform: "translateY(16px)" }}
            >
              {isActiveStep(index) ? (
                <StepperCheckboxFill width={16} height={16} color="secondary" />
              ) : (
                <StepperCheckboxFill
                  width={16}
                  height={16}
                  sx={{ "*": { stroke: theme.palette.primary.miner } }}
                />
              )}

              <Show when={!isLastStep(index)}>
                <Show
                  when={isActiveStep(index)}
                  fallback={
                    <Box
                      sx={{
                        width: "2px",
                        height: "100%",
                        bgcolor: "primary.miner",
                      }}
                    ></Box>
                  }
                >
                  <Box
                    sx={{
                      width: "2px",
                      height: "100%",
                      background: "linear-gradient(#03817A, #E6F2F2)",
                    }}
                  ></Box>
                </Show>
              </Show>
            </Stack>
            <Stack width={"100%"} flexGrow={1} mb={2}>
              <Divider flexItem sx={{ bgcolor: "primary.light", mb: 2 }} />
              {step.component}
            </Stack>
          </Stack>
        </React.Fragment>
      ))}
    </>
  );
};
