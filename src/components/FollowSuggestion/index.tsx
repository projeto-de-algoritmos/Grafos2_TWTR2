import React, { useCallback } from 'react';

import { useUsers } from '../../hooks/users';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  const { setUsers, loggedUser } = useUsers();

  const handleFollow = useCallback(() => {
    setUsers((state) => {
      const newState = state.map((user) => {
        if (user.username === loggedUser?.username) {
          const newUserAttributes = {
            ...loggedUser,
            following: [...loggedUser.following, { username: nickname }],
          };
          return newUserAttributes;
        }

        return user;
      });

      return newState;
    });
  }, [loggedUser, nickname, setUsers]);

  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined onClick={() => handleFollow()}>
        Seguir
      </FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
