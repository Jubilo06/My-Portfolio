import React from 'react';
import { Stack, Typography } from '@mui/material';

function ErrorPage() {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ height: '100vh' }}>
      <Typography variant="h3" color="error">
        404 Not Found
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Oops! The page you are looking for does not exist.
      </Typography>
    </Stack>
  );
}

export default ErrorPage;
