import React, { useEffect, useCallback } from 'react';

import { useUsers } from '../../hooks/users';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  const { users, bfs, loggedUser } = useUsers();

  const getNumberOfFollowers = useCallback((): number => {
    let numberOfFollowers = 0;
    users.forEach((user) => {
      if (
        user.following?.some(
          (follow) => follow.username === loggedUser?.username,
        )
      ) {
        numberOfFollowers += 1;
      }
    });

    return numberOfFollowers;
  }, [loggedUser, users]);

  // Debug bfs
  useEffect(() => {
    bfs(users[1]);
  }, [bfs, users]);

  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>{loggedUser?.completeName}</h1>
        <h2>{`@${loggedUser?.username}`}</h2>

        <p>{loggedUser?.description}</p>

        <ul>
          <li>
            <LocationIcon />
            {loggedUser?.place}
          </li>
          <li>
            <CakeIcon />
            {loggedUser?.birth}
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>{loggedUser?.following?.length}</strong>
          </span>
          <span>
            <strong>{getNumberOfFollowers()} </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
