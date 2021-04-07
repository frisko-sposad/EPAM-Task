import React, { FC } from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';
import { Container } from '../components/Main/Main.styled';

const PageNotFound: FC = () => (
  <Layout>
    <Header isSearchPage />
    <Container>
      <p>404 Page Not Found</p>
    </Container>
  </Layout>
);

export default PageNotFound;
