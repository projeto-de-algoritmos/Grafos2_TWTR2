import { User } from './users';

export const data = (): User[] => {
  return [
    {
      username: 'lucassiqz',
      completeName: 'Lucas Siqueira',
      description: 'Software Engineer',
      place: 'Brasilia-DF',
      birth: '14 de julho de 1997',
      following: [{ username: 'guilherme-aguiar' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Matematica', 'Literatura', 'Videogames']

    },
    {
      username: 'guilherme-aguiar',
      completeName: 'Guilherme Aguiar',
      description: 'Software Engineer',
      place: 'Brasilia-DF',
      following: [{ username: 'caiooliv' },{ username: 'carlinhos' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Literatura', 'Videogames']
    },
    {
      username: 'caiooliv',
      completeName: 'Caio Oliveira',
      description: 'Software Engineer',
      place: 'Brasilia-DF',
      birth: '18 de janeiro de 1997',
      following: [{ username: 'lucassiqz' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Nasa', 'Videogames']
    },
    {
      username: 'carlinhos',
      description: 'Software Engineer',
      place: 'Rio de Janeiro-RJ',
      completeName: 'Carlos Eduardo',
      following: [{ username: 'matheus-rn' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Politica', 'Feminismo', 'Coronavirus', 'Economia']
    },
    {
      username: 'matheus-rn',
      completeName: 'Matheus Rabelo Nonato',
      description: 'Software Engineer',
      place: 'Brasilia-DF',
      following: [{ username: 'thiagoo' }, { username: 'we11' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Politica', 'Coronavirus', 'Economia']
    },
    {
      username: 'thiagoo',
      completeName: 'Thiago Assis',
      description: 'Software Engineer',
      place: 'São Paulo-SP',
      following: [{ username: 'carlinhos' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Politica', 'Economia']
    },
    {
      username: 'we11',
      completeName: 'Wellington Santiago',
      following: [{ username: 'an@_maria' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Filmes', 'Tarantino', 'Series']
    },
    {
      username: 'an@_maria',
      description: 'Software Engineer',
      place: 'Curitiba-PR',
      completeName: 'Ana Maria da Silva',
      following: [{ username: 'mario' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Famosos']
      
    },
    {
      username: 'mario',
      description: 'Software Engineer',
      place: 'Curitiba-PR',
      completeName: 'Mario Ferreira',
      following: [{ username: 'we11' }],
      visited: false,
      pre: 0,
      post: 0,
      interests: ['Filmes', 'Tarantino']
    }
  ];
};
