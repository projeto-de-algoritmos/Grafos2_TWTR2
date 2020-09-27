import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { UsersProvider } from './hooks/users';

import Layout from './components/Layout';

const App: React.FC = () => (
  <>
    <UsersProvider>
      <Layout />
    </UsersProvider>

    <GlobalStyles />
  </>
);

export default App;
