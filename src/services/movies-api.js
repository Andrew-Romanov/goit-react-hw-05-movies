import * as constants from './constants';

// import axios from "axios";

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
    `${constants.BASE_URL}trending/movie/week?api_key=${constants.API_KEY}`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${constants.BASE_URL}movie/${movieId}?api_key=${constants.API_KEY}`,
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${constants.BASE_URL}movie/${movieId}/reviews?api_key=${constants.API_KEY}`,
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${constants.BASE_URL}movie/${movieId}/credits?api_key=${constants.API_KEY}`,
  );
}

export function fetchSearchedMovies(query) {
  return fetchWithErrorHandling(
    `${constants.BASE_URL}search/movie?api_key=${constants.API_KEY}&query=${query}`,
  );
}
