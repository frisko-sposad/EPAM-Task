import React, { FC } from 'react';
import Head from 'next/head';
import { HeaderContainer } from '../../components/Header/Header.styled';
import GlobalStyle from '../../components/App.styled';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

const MovieInfoPage: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NetflixRoulette</title>
      </Head>
      <HeaderContainer>
        <Header isSearchPage={false} />
      </HeaderContainer>
      <Main />
      <Footer />
    </>
  );
};

export default MovieInfoPage;
