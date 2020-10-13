import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import style from './App.css';
import movieBase from './MovieBase';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  function openSearch() {
    setShowSearch(true);
  }
  function closeSearch() {
    setShowSearch(false);
  }

  const [movieArr, setMovieArr] = useState(movieBase);

  return (
    <div className={style.app}>
      <Header
        showSearch={showSearch}
        openSearch={openSearch}
        closeSearch={closeSearch}
      />
      <Main movieArr={movieArr} />
      <Footer />
    </div>
  );
};

export default App;
