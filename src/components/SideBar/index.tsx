import React, { useState, useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { useUsers, User } from '../../hooks/users';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  const { users, bfs, loggedUser } = useUsers();
  const [graph, setGraph] = useState<number[][]>([]);

  useEffect(() => {
    setGraph(bfs(loggedUser as User));
  }, [bfs, loggedUser]);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          {/* Aplicar grafo aqui */}
          <List
            title="Talvez você curta"
            elements={graph.map((userIndex: number[]) => {
              return (
                <FollowSuggestion
                  name={users[userIndex[0]].completeName}
                  nickname={users[userIndex[0]].username}
                />
              );
            })}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
