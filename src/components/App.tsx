import React, { FC, useCallback, useEffect, useState } from 'react';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import { searchMovies } from './App.actions';

const App: FC = ({ movies, searchMovies, total }) => {
  const [isSearchShown, setIsSearchShown] = useState(true);

  const openSearch = useCallback(() => {
    setIsSearchShown(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsSearchShown(false);
  }, []);

  useEffect(() => {
    searchMovies('');
  }, [searchMovies]);

  return (
    <>
      <Header isSearchShown={isSearchShown} openSearch={openSearch} closeSearch={closeSearch} total={total} />
      <Main movies={movies} />
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      searchMovies,
    },
    dispatch,
  );

const mapStateToProps = ({ movies, total }) => ({
  movies,
  total,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// interface AppState {
//   isSearchShown: boolean;
// }
// type AppProps = Record<string, unknown>;

// export default class App extends Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = {
//       isSearchShown: true,
//     };
//     this.openSearch = this.openSearch.bind(this);
//     this.closeSearch = this.closeSearch.bind(this);
//   }

//   openSearch(): void {
//     this.setState({
//       isSearchShown: true,
//     });
//   }

//   closeSearch(): void {
//     this.setState({
//       isSearchShown: false,
//     });
//   }

//   render(): JSX.Element {
//     const { isSearchShown } = this.state;

//     return (
//       <>
//         <Header isSearchShown={isSearchShown} openSearch={this.openSearch} closeSearch={this.closeSearch} />
//         <Main movieBase={movieBase} />
//         <Footer />
//       </>
//     );
//   }
// }
