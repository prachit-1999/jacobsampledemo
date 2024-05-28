import React from 'react';
import './App.css';
import SAMPLE from './Components/SAMPLE';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        minWidth: '100vw',
      }}
    >
      <SAMPLE />
    </Box>
  );
}

export default App;
