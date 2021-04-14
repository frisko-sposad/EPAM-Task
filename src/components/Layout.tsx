import Head from 'next/head';
import React from 'react';
import GlobalStyle from './App.styled';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
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
