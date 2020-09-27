import React from 'react';

import { useUsers } from '../../hooks/users';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
import LoginPage from '../LoginPage';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  const { loggedUser } = useUsers();

  return (
    <Container>
      {loggedUser ? (
        <Wrapper>
          <MenuBar />
          <Main />
          <SideBar />
        </Wrapper>
      ) : (
        <LoginPage />
      )}
    </Container>
  );
};

export default Layout;
