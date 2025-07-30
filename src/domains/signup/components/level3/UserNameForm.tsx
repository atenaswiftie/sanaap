import { Stack } from "@mui/system";
import { Button, TextFieldController } from "@wallpay/components";


export const UserNameForm = () => {



  return ( 
    <Stack gap={3} alignItems={"center"}>
      <TextFieldController disableMargin margin="none" size="large" label="نام" name="name" />
      <TextFieldController disableMargin margin="none" size="large" label="نام خانوادگی" name="lastName" />
      <Button type="submit" fullWidth size="large" variant="contained">
      تأیید و ادامه 
      </Button>
    </Stack>
  )
};