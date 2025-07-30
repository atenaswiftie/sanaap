/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Grid2,
  TextField,
  TextFieldProps
} from "@mui/material";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import { NumberFormat } from "../InputNumber/NumberFormat";
import { useStyles } from "./ConfirmationCodeInput.styles";

type ConfirmationCodeInputProps = TextFieldProps & {
  inputCount?: number;
  onComplete: (code: string) => void;
  onChangeCode: (code: string) => void;
  error?: boolean;
};

export function ConfirmationCodeInput({
  inputCount = 5,
  onComplete,
  onChangeCode,
  error,
  ...inputProps
}: ConfirmationCodeInputProps) {
  const { classes } = useStyles();
  const refs = useRef<HTMLInputElement[]>([]);
  const [values, setValues] = useState([...Array<string>(inputCount)].fill(""));

  const inputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, i: number) => {
      const { value } = e.target;

      setValues((prevState) => {
        let newState = [];

        if (value.length > 1) {
          newState = prevState.map((item, index) =>
            index < i || index >= i + value.length ? item : value[index - i]
          );
        } else {
          prevState[i] = value;
          newState = [...prevState];
        }

        if (newState.join("").length === inputCount) {
          refs.current[i].blur();
          onComplete(newState.join(""));
        } else if (value !== "" && refs.current[i + value.length]) {
          refs.current[i + value.length].focus();
        }

        onChangeCode(newState.join(""));
        return newState;
      });
    },
    [inputCount, onComplete]
  );

  const inputKeyDown = (e: KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === "Backspace" && !values[i]) {
      setValues((prevState) => {
        prevState[i - 1] = "";
        return [...prevState];
      });

      if (refs.current[i - 1]) {
        refs.current[i - 1].focus();
      }
    }
  };

  return (
    <>
      <Grid2 className={classes.root} container spacing={1}>
        {values.map((_, i) => (
          <Grid2 key={i} size={2}>
            <NumberFormat
              // @ts-ignore
              customInput={TextField}
              autoFocus={i === 0}
              // @ts-ignore
              size="large"
              type="tel"
              error={Boolean(error)}
              value={values[i]}
              format={(value: string) => value?.replace(/,/g, "")}
              onChange={(e: ChangeEvent<HTMLInputElement>) => inputChange(e, i)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                inputKeyDown(e, i)
              }
              onFocus={() => {
                refs.current[i].select();
              }}
              inputRef={(ref: HTMLInputElement) => (refs.current[i] = ref)}
              InputProps={{
                sx: { textAlign: "center", height: 48 },
                ...inputProps,
              }}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
