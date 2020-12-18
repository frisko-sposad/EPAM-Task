import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import movieBase from './MovieBase';

interface AppState {
  isSearchShown: boolean;
}
type AppProps = Record<string, unknown>;

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isSearchShown: true,
    };
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  openSearch(): void {
    this.setState({
      isSearchShown: true,
    });
  }

  closeSearch(): void {
    this.setState({
      isSearchShown: false,
    });
  }

  render(): JSX.Element {
    const { isSearchShown } = this.state;

    return (
      <>
        <Header isSearchShown={isSearchShown} openSearch={this.openSearch} closeSearch={this.closeSearch} />
        <Main movieBase={movieBase} />
        <Footer />
      </>
    );
  }
}
