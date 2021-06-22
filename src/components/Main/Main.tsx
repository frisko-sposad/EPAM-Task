import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieItem from './MovieItem/MovieItem';
import NoFilmsFound from './NoFilmsFound/NoFilmsFound';
import PageNotFound from './PageNotFound/PageNotFound';
import { MainContainer } from './Main.styled';
import convertMovieToCamelCase from '../App.helpers';
import { ConvertedMovie } from '../App.types';

interface MainProps {
  genres?: string[];
  isPageNotFound?: boolean;
  isSearchPage: boolean;
  setMoviesCount: Dispatch<SetStateAction<number>>;
}

const Main: FC<MainProps> = ({ isPageNotFound, genres, isSearchPage, setMoviesCount }) => {
  const router = useRouter();
  const { sortBy, search, searchBy } = (isSearchPage && router?.query) || {
    sortBy: 'release_date',
    search: genres ? genres[0] : '',
    searchBy: 'genres',
  };

  const fetcher = async (url: string) => {
    const { data, total } = await fetch(url).then((res) => res.json());
    const convertedMovies = data.map(convertMovieToCamelCase);
    setMoviesCount(total);
    return convertedMovies;
  };

  const { data, error } = useSWR(
    `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy ?? 'release_date'}&sortOrder=desc&search=${
      search ?? ''
    }&searchBy=${searchBy ?? 'title'}`,
    fetcher,
  );

  if (error) return <MainContainer>failed to load</MainContainer>;
  if (!data) return <MainContainer>loading...</MainContainer>;
  if (isPageNotFound) {
    return <PageNotFound />;
  }
  return data.length === 0 ? (
    <NoFilmsFound />
  ) : (
    <div>
      <MainContainer>
        {data.map((movie: ConvertedMovie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </MainContainer>
    </div>
  );
};

export default memo(Main);
