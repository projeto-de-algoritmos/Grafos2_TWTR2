import React from 'react';

import { useUsers } from '../../hooks/users';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  ProfileIcon,
  EmailIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const { setLoggedUser, loggedUser } = useUsers();

  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>{loggedUser?.completeName}</strong>
          <strong>{`@${loggedUser?.username}`}</strong>
        </ProfileData>

        <ExitIcon
          onClick={() => {
            setLoggedUser(null);
          }}
        />
      </Botside>
    </Container>
  );
};

export default MenuBar;
