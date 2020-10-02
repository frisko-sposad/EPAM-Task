import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import style from './App.css';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
