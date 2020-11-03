import React, { useState, useCallback } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import movieBase from './MovieBase';

const App = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

  const openSearch = useCallback(() => {
    setIsSearchShown(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsSearchShown(false);
  }, []);

  return (
    <>
      <Header isSearchShown={isSearchShown} openSearch={openSearch} />
      <Main movieBase={movieBase} />
      <Footer />
    </>
  );
};
export default App;
