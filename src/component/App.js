import React, { Component } from 'react';
import style from './App.css'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

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
