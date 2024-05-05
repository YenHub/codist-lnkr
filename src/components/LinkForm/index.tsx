'use client';

import { Box, Button, SxProps, TextField } from '@mui/material';
import React from 'react';

const styling: Record<string, SxProps> = {
  container: { display: 'flex', columnGap: '1em' },
  button: { width: '100px' },
  input: { width: '500px' },
};

export const LinkForm: React.FC = () => {
  const { container, button, input } = styling;

  return (
    <Box component="form" autoComplete="off" sx={container}>
      <TextField
        sx={input}
        size="small"
        color="info"
        name="url-value"
        onChange={({ target: { value } }) => console.log(value)}
      />

      <Button sx={button} variant="outlined" color="info">
        CREATE
      </Button>
    </Box>
  );
};
