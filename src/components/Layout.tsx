import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import GlobalStyle from './App.styled';
import Footer from './Footer/Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NetflixRoulette</title>
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
