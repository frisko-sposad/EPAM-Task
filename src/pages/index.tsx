import React, { FC } from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';

const App: FC = () => {
  return (
    <Layout>
      <Header isSearchPage />
      <Main />
    </Layout>
  );
};

export default App;
