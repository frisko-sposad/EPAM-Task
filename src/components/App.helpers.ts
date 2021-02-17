import { useLocation } from 'react-router-dom';
import { RawMovie, ConvertedMovie } from './App.types';

export const convertMovieToCamelCase = ({
  id,
  title,
  tagline,
  vote_average,
  release_date,
  genres,
  poster_path,
  overview,
  runtime,
}: RawMovie): ConvertedMovie => ({
  id,
  title,
  tagline,
  voteAverage: vote_average,
  releaseDate: release_date,
  genres,
  posterPath: poster_path,
  overview,
  runtime,
});

export const useGetParametersForSerch = (serchParams: string[]): Record<string, string> => {
  const params = new URLSearchParams(useLocation().search);
  return serchParams.reduce(
    (newSerchParams, serchParam) => ({ ...newSerchParams, [serchParam]: params.get(serchParam) }),
    {},
  );
};
