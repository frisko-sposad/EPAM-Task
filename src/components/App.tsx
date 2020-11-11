import React, { useState, useCallback, FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import movieBase from './MovieBase';

const App: FC = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f6e8b07... MovieItemProps - remove key
=======
<<<<<<< HEAD
=======
>>>>>>> 28def4c... ts linter
>>>>>>> f3d4461... ts linter
=======
>>>>>>> f18e8e4... linted file
  const openSearch = useCallback(() => {
    setIsSearchShown(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsSearchShown(false);
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f3d4461... ts linter
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
=======
const openSearch = useCallback(() => {setIsSearchShown(true)},[])
const closeSearch = useCallback(() => {setIsSearchShown(false)},[])
>>>>>>> 31bd3fc... lint jsx -> tsx,
=======
  const openSearch = useCallback(() => { setIsSearchShown(true) }, [])
  const closeSearch = useCallback(() => { setIsSearchShown(false) }, [])
>>>>>>> d7067df... MovieItemProps - remove key
<<<<<<< HEAD
>>>>>>> f6e8b07... MovieItemProps - remove key
=======
=======
>>>>>>> 28def4c... ts linter
>>>>>>> f3d4461... ts linter
=======
>>>>>>> f18e8e4... linted file

  return (
    <>
      <Header isSearchShown={isSearchShown} openSearch={openSearch} closeSearch={closeSearch} />
      <Main movieBase={movieBase} />
      <Footer />
    </>
  );
};
export default App;
