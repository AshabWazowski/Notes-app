import React from "react";
import { MainBox } from "../Assets/MainBox";
import { Button, Checkbox, TextField, Typography } from "@mui/material";

export const LoginForm = () => {
  return (
    <MainBox flexDirection="column" gap="1.5rem" width="100%">
      <MainBox width="100%" gap="1.5rem" flexDirection="column">
        <TextField fullWidth variant="outlined" label="Email" />
        <TextField fullWidth variant="outlined" label="Password" />
      </MainBox>
      <MainBox width="100%" gap="1rem" flexDirection="column">
        <Button fullWidth type="submit" variant="contained">
          Submit
        </Button>
        <MainBox gap="0.5rem">
          <Checkbox /> <Typography>I agree to the Terms & Condition</Typography>
        </MainBox>
      </MainBox>
    </MainBox>
  );
};
