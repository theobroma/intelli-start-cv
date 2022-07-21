import { Box } from '@material-ui/core';
import React from 'react';
// import SimpleAppBar from '../@components/AppBar';
import PersistentDrawerLeft from '../@components/AppBar/PersistentDrawerLeft';
import Footer from '../@components/Footer';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="HolyGrail">
      {/* <SimpleAppBar /> */}
      <PersistentDrawerLeft>
        <Box mt={2} mb={2}>
          {children}
        </Box>
      </PersistentDrawerLeft>
      <Footer />
    </div>
  );
};
