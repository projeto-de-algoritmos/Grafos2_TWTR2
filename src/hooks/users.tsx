import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { data } from './data';

interface UsersContextData {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  loggedUser: User | null;
  setLoggedUser: React.Dispatch<React.SetStateAction<User | null>>;
  bfs(startingNode: User): number[][];
  algoritmo(): void;
  recommendedInterests: string[];
}

interface FollowingType {
  username: string;
}

export interface User {
  username: string;
  completeName: string;
  place?: string;
  description?: string;
  birth?: string;
  following: FollowingType[];
  visited: boolean;
  pre: number;
  post: number;
  interests: string[];
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

const UsersProvider: React.FC = ({ children }) => {
  // lista de adjacencia: === users
  // [
  // lucassiqz = users[0].following = [gui,caio],
  // gui = users[1].following = [amigoGui],
  // caio = users[2].following = [amigoCaio],
  // ]

  const [users, setUsers] = useState<User[]>(data());
  const [recommendedInterests, setRecommendedInterests] = useState<string[]>(
    [],
  );
  const [loggedUser, setLoggedUser] = useState<User | null>(users[0]);
  let transposedUsers = [] as any;
  const connectedInterests = [] as any;
  let dfsIndex = 0;

  useEffect(() => {
    const newLoggedUser = users.find(
      (user) => user.username === loggedUser?.username,
    );

    setLoggedUser(newLoggedUser as User);

    // eslint-disable-next-line
  }, [users]);

  const cleanFollowersData = useCallback(
    (BFSResult: number[][]): number[][] => {
      return BFSResult.filter((node) => node[1] === 2);
    },
    [],
  );

  let n = 0;

  const dfs = useCallback(
    (currentNode: any): void => {
      connectedInterests[dfsIndex].push({
        username: currentNode.username,
        interests: currentNode.interests,
      });
      for (let i = 0; i < currentNode.following.length; i++) {
        const user = transposedUsers.find(
          (usr: User) => usr.username === currentNode.following[i].username,
        );
        if (user && user.visited === false) {
          currentNode.visited = true;
          user.visited = true;
          dfs(user);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transposedUsers],
  );

  const dfsNumbering = useCallback(
    (currentNode: any): void => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      n += 1;
      currentNode.pre = n;
      for (let i = 0; i < currentNode.following.length; i++) {
        const user = users.find(
          (usr) => usr.username === currentNode.following[i].username,
        );
        if (user && user.visited === false) {
          currentNode.visited = true;
          user.visited = true;
          dfsNumbering(user);
        }
      }
      n += 1;
      currentNode.post = n;
    },
    [users],
  );

  const transposeGraph = useCallback((): User[] => {
    const transposedUsersCopy = data();

    transposedUsersCopy.forEach((user, idx) => {
      transposedUsersCopy[idx].following = user.following.filter((follow) => {
        const indexFollow = transposedUsersCopy.findIndex(
          (usr) => usr.username === follow.username,
        );
        if (
          !users[indexFollow].following.some(
            (following) => following.username === user.username,
          )
        ) {
          transposedUsersCopy[indexFollow].following.push({
            username: user.username,
          });
          return false;
        }
        return true;
      });
    });

    return transposedUsersCopy;
  }, [users]);

  const algoritmo = (): void => {
    dfsNumbering(loggedUser);
    const tGraph = transposeGraph();
    transposedUsers = tGraph.map((node, idx) => {
      return { ...node, pre: users[idx].pre, post: users[idx].post };
    });

    while (transposedUsers.some((usr: User) => usr.visited === false)) {
      connectedInterests[dfsIndex] = [];
      const posts = transposedUsers.map((user: User) => {
        if (!user.visited) return user.post;
        return null;
      });
      const maxPost = Math.max(...posts);

      const nextUser = transposedUsers.find(
        (usr: User) => usr.post === maxPost,
      );
      dfs(nextUser);
      dfsIndex += 1;
    }

    if (loggedUser) {
      const connectedInterestIndex = connectedInterests.findIndex(
        (value: any) =>
          value.some((v: any) => v.username === loggedUser.username),
      );

      const newInterests = new Set();
      connectedInterests[connectedInterestIndex].forEach((user: any) => {
        user.interests.forEach((inte: any) => {
          if (!loggedUser.interests.some((value) => value === inte)) {
            newInterests.add(inte);
          }
        });
      });

      newInterests.forEach((newInte) => {
        setRecommendedInterests((state) => [...state, newInte as string]);
      });
    }
  };

  useEffect(() => {
    setRecommendedInterests([]);
    if (loggedUser) {
      algoritmo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser]);

  const bfs = useCallback(
    (startingNode: User): number[][] => {
      const graph = [] as number[][];

      const visited = [] as boolean[];

      for (let i = 0; i < users.length; i++) {
        visited[i] = false;
      }

      const queue = [] as number[][];

      const startingNodeIndex = users.findIndex(
        (user) => user.username === startingNode.username,
      );

      visited[startingNodeIndex] = true;

      queue[0] = [startingNodeIndex, 0];

      while (queue.length > 0) {
        const getQueueElement = queue.shift() as number[];
        graph.push(getQueueElement);

        const getList = users[getQueueElement[0]].following;

        getList.forEach((user) => {
          const neighIndex = users.findIndex(
            (usr) => usr.username === user.username,
          );
          if (!visited[neighIndex]) {
            visited[neighIndex] = true;
            const next = [neighIndex, getQueueElement[1] + 1];
            queue[queue.length] = next;
          }
        });
      }
      const cleanGraph = cleanFollowersData(graph.slice(1));

      return cleanGraph;
    },
    [users, cleanFollowersData],
  );

  return (
    <UsersContext.Provider
      value={{
        users,
        bfs,
        algoritmo,
        setUsers,
        loggedUser,
        setLoggedUser,
        recommendedInterests,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }

  return context;
}

export { UsersProvider, useUsers };
