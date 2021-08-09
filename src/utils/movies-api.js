// import axios from "axios";

const API_KEY = 'ba6e61e19ea4776a79aef50e626f69da';
// const API_KEY = 'bdd7600a7ae863581dc1485cc54230c3';
const BASE_URL = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/search/movie

// export async function axiosFetchWithErrorHandling(url = '', config = {}) {
//   const response = await axios
//     .get(url, config)
//     .catch(console.log);
//   return response;
// }

export async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

export function fetchSearchedMovies(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
  );
}
