import React, { FC } from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';
import { Container, MainContainer } from '../components/Main/Main.styled';
import NoFilmsFound from '../components/NoFilmsFound/NoFilmsFound';

const App: FC = () => {
  return (
    <Layout>
      <Header isSearchPage />
      <MainContainer>
        <Container>
          <NoFilmsFound />
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default App;
