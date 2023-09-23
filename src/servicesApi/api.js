import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '6ebba777bee2640605c6722b839407cc';
const options = {
  method: 'GET',
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
  },
};
// request all trend movies
export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `trending/all/day?api_key=${API_KEY}`,
    options
  );
  const results = await data.results;

  const upMovies = results.map(
    ({ poster_path, backdrop_path, id, name, title }) => ({
      poster_path,
      backdrop_path,
      id,
      name,
      title,
    })
  );
  return upMovies;
};
// request Card Movies ById
export const getMoviesById = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`, options);
  return data;
};
// request actors
export const getCastById = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}`,
    options
  );
  return data.cast;
};
// request for reviews
export const getReviewById = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}`,
    options
  );
  return data.results;
};
// request for query
export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}}`,
    options
  );

  return data.results;
};
