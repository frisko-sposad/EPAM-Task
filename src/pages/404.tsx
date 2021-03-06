import React, { FC } from 'react';
import SearchSection from '../components/Header/SearchSection/SearchSection';
import Layout from '../components/Layout';

const ErrorPage: FC = () => (
  <Layout isPageNotFound>
    <SearchSection />
  </Layout>
);

export default ErrorPage;
