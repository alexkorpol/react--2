import Pagination from '@mui/material/Pagination';
import { Heading, MoviesList, SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../service/movie-service';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;

    const getMovies = async () => {
      try {
        const response = await searchMovies(searchQuery, page);
        setMovies(response.results);
        setResults(response.total_results);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [searchQuery, page]);

  const handleFormSubmit = query => {
    setSearchParams({ query, page });
  };

  return (
    <>
      <Heading>Search Movies</Heading>

      <SearchForm onSubmit={handleFormSubmit} />

      <MoviesList movies={movies} />

      <Pagination
        count={results}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
        onChange={(event, value) => {
          setPage(value);
          setSearchParams({ query: searchQuery, page: value });
        }}
      />
    </>
  );
};
