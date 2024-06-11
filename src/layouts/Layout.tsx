import Navbar from '@/components/common/Navbar';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
  }
  
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
