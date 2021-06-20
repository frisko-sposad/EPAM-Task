import React, { Dispatch, FC, memo, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieItem from './MovieItem/MovieItem';
import { ConvertedMovie } from '../App.types';
import NoFilmsFound from './NoFilmsFound/NoFilmsFound';
import PageNotFound from './PageNotFound/PageNotFound';
import { MainContainer } from './Main.styled';
import convertMovieToCamelCase from '../App.helpers';

interface MainProps {
  genres?: string[];
  isPageNotFound?: boolean;
  isSearchPage: boolean;
  setMoviesCount: Dispatch<SetStateAction<number>>;
}

type MoviesParams = string | string[] | undefined;

const Main: FC<MainProps> = ({ isPageNotFound, genres, isSearchPage, setMoviesCount }) => {
  const [foundMovies, setFoundMovies] = useState<ConvertedMovie[]>([]);
  const router = useRouter();
  const { sortBy, search, searchBy } = (isSearchPage && router?.query) || {
    sortBy: 'release_date',
    search: genres ? genres[0] : '',
    searchBy: 'genres',
  };

  const getMovies = useCallback(
    async (sortByParam: MoviesParams, searchParam: MoviesParams, searchByParam: MoviesParams) => {
      const { data, total } = await fetch(
        `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByParam ?? 'release_date'}&sortOrder=desc&search=${
          searchParam ?? ''
        }&searchBy=${searchByParam ?? 'title'}`,
      ).then((res) => res.json());
      const convertedMovies = data.map(convertMovieToCamelCase);
      setFoundMovies(convertedMovies);
      setMoviesCount(total);
    },
    [setMoviesCount],
  );

  useEffect(() => {
    getMovies(sortBy, search, searchBy);
  }, [getMovies, search, searchBy, sortBy]);

  if (isPageNotFound) {
    return <PageNotFound />;
  }
  return !foundMovies || foundMovies.length === 0 ? (
    <NoFilmsFound />
  ) : (
    <MainContainer>
      {foundMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </MainContainer>
  );
};

export default memo(Main);
