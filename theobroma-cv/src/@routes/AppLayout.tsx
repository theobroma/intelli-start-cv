import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';

// TODO:fix children type
const AppLayout = (children: any) => {
  return (
    <div className="HolyGrail">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
