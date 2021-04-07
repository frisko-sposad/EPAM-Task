import Head from 'next/head';
import React from 'react';
import GlobalStyle from './App.styled';
import Footer from './Footer/Footer';

export default function Layout({ children }): JSX.Element {
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
}
