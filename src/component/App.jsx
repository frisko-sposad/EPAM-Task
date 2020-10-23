import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import movieBase from './MovieBase';

const App = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);
  
  function openSearch() {
    setIsSearchShown(true);
  }

  function closeSearch() {
    setIsSearchShown(false);
  }

  return (
    <>
      <Header isSearchShown={isSearchShown} openSearch={openSearch} closeSearch={closeSearch} />
      <Main movieBase={movieBase} />
      <Footer />
    </>
  );
};
export default App;
