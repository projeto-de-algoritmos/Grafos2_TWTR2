import React from 'react';

import { useUsers } from '../../hooks/users';

import {
  Container,
  Retweeted,
  RetweetOnTopIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  const { loggedUser } = useUsers();

  return (
    <Container>
      <Retweeted>
        <RetweetOnTopIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>{loggedUser?.completeName}</strong>
            <span>{`@${loggedUser?.username}`}</span>
            <Dot />
            <time>19 de julho</time>
          </Header>

          <Description>Parece dificil mas não é fácil</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
