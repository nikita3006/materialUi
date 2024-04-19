import React from "react";
import { Box, Button } from '@mui/material';

const LayoutPage = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Box sx={{ '& > *': { color: 'red', margin:'20px' } }}>
        <Button>
          Hello
        </Button>
        <Button component='span'>
          asasd
        </Button>
      </Box>
      <Box>
        <Button sx={{ color: 'red' }}>
          Hello
        </Button>
        <Button component='span'>
          asasd
        </Button>
      </Box>
    </div>
  );
};

export default LayoutPage;
