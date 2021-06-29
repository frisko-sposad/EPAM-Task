export interface RawMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  release_date: string;
  genres: string[];
  poster_path: string;
  overview: string;
  runtime: number | null;
}

export interface ConvertedMovie {
  id: number;
  title: string;
  tagline?: string;
  voteAverage?: number;
  releaseDate: string;
  genres: string[];
  posterPath: string;
  overview: string;
  runtime: number | null;
}
