import { useGetTrendingMovies } from 'hooks/useGetTrendingMovies';

import Typography from '@mui/material/Typography';
import { Heading, MoviesList } from 'components';

export const Home = () => {
  const { movies, isError, isLoading } = useGetTrendingMovies();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      <Heading>Trending Movies</Heading>

      <MoviesList movies={movies} />
    </>
  );
};
