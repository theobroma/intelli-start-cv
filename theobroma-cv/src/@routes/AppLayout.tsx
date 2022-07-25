import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';

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
