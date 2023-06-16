import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Box as="section" sx={{ py: 5 }}>
          <Container maxWidth="xl">{<Outlet />}</Container>
        </Box>
      </main>
    </div>
  );
};
