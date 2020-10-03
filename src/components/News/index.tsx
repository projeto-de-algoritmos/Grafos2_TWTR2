import React from 'react';

import { Container } from './styles';

interface NewsProps {
  item: string;
}

const News: React.FC<NewsProps> = ({ item }) => {
  return (
    <Container>
      <span>Seus amigos tem interrese: </span>
      <strong>{item}</strong>
    </Container>
  );
};

export default News;
