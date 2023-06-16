import axios from 'axios';

const API_KEY = '13dc2daf8b95b491b59faa4413ffe9ea';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  adult: false,
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');

  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);

  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);

  return data;
};
