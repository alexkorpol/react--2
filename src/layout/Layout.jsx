import * as React from 'react';

import Container from '@mui/material/Container';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Container maxWidth="xl">
          <h1>Layout</h1>

          {/*{children}*/}
        </Container>
      </main>
    </div>
  );
};
