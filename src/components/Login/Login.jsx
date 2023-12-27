import React from "react";
import { FlexBox, MainBox } from "../Assets/MainBox";
import { LoginForm } from ".";
import { Typography, Box } from "@mui/material";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <MainBox padding="3% 6%">
      <FlexBox
        width="60%"
        height="60vh"
        padding="2% 1%"
        bgcolor="whitesmoke"
        borderRadius="5px"
        flexDirection="row"
      >
      {/* SIDE PROFILE FOR LOGIN FOR IS HERE */}    
        <Box>
          
        </Box>


        {/* LOIGN FORM IS HERE */}
        <FlexBox
          bgcolor="#eeefff"
          height="100%"
          padding="2%"
          borderRadius="5px"
          flexDirection='column'
        >
        <Box>
        <Typography variant="h5" fontWeight='bold'>Login</Typography>
        </Box>
        <Box>
        <LoginForm />
        </Box>
        <FlexBox flexDirection='row'>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row' gap='0.5rem'>
        <Typography variant="body2">Don't have an account ? Register <Link to='/register' style={{ textDecoration: 'none' }}>Here</Link></Typography>
        </Box>
        </FlexBox>
        </FlexBox>
      </FlexBox>
    </MainBox>
  );
};

export default Login;
