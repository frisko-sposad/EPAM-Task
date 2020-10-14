import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import style from './App.css';
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
    <div className={style.app}>
      <Header
        showSearch={isSearchShown}
        openSearch={openSearch}
        closeSearch={closeSearch}
      />
      <Main movieBase={movieBase} />
      <Footer />
    </div>
  );
};

export default App;
