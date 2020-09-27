import React, { useState, useCallback } from 'react';

import { useUsers, User } from '../../hooks/users';

import Button from '../Button';

import { Container, Card, Content, UsernameInput, Logo } from './styles';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const { users, setLoggedUser } = useUsers();

  const handleLogin = useCallback(() => {
    if (!users.some((user) => user.username === username))
      return setError(true);

    const userLogged = users.find((user) => user.username === username);
    return setLoggedUser(userLogged as User);
  }, [username, setLoggedUser, users]);

  return (
    <Container>
      <Card>
        <Content>
          <Logo />

          <UsernameInput
            placeholder="Digite seu username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyPress={(event) =>
              // eslint-disable-next-line
              event.key === 'Enter' ? handleLogin() : null}
          />
          <Button type="submit" onClick={() => handleLogin()}>
            <span>Logar</span>
          </Button>
          {error ? (
            <p style={{ color: 'red', marginTop: '5px' }}>
              Usuario não encontrado
            </p>
          ) : null}
        </Content>
      </Card>
    </Container>
  );
};

export default LoginPage;
