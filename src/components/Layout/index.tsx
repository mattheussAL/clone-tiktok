import React, { ReactNode } from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';

import {
  HeaderContainer,
  SidebarContainer,
  ContentContainer,
} from './styles';


interface LayoutProps { children: ReactNode }

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <HeaderContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </HeaderContainer>
    </>
  );
}

export default Layout;
