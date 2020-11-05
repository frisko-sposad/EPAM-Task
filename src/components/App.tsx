import React, { useState, useCallback } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import movieBase from './MovieBase';

const App = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

<<<<<<< HEAD
  const openSearch = useCallback(() => {
    setIsSearchShown(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsSearchShown(false);
  }, []);
=======
const openSearch = useCallback(() => {setIsSearchShown(true)},[true])
const closeSearch = useCallback(() => {setIsSearchShown(false)},[false])

  // function openSearch() {
  //   setIsSearchShown(true);
  // }

  // function closeSearch() {
  //   setIsSearchShown(false);
  // }
>>>>>>> 7b7863b... fixed bugs,

  return (
    <>
      <Header isSearchShown={isSearchShown} openSearch={openSearch} closeSearch={closeSearch} />
      <Main movieBase={movieBase} />
      <Footer />
    </>
  );
};
export default App;
