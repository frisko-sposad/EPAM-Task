import React, { FC } from 'react';
import SearchSection from '../components/Header/SearchSection/SearchSection';
import Layout from '../components/Layout';

const App: FC = () => {
  return (
    <Layout isSearchPage>
      <SearchSection />
    </Layout>
  );
};

export default App;
