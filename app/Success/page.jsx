"use client";
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography } from '@mui/material';

const RegistrationSuccess = () => {
  return (
    <>

    <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="100vh"
    >
        <CheckCircleIcon style={{ fontSize: 100, color: 'green' }} />
        <Typography variant="h4" style={{ marginTop: 20 }}>
            Registration Successful
        </Typography>
    </Box>
    </>
  )
}

export default RegistrationSuccess
