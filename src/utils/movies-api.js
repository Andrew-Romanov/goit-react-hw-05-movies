const API_KEY = 'ba6e61e19ea4776a79aef50e626f69da';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// https://api.themoviedb.org/3/movie/550?api_key=ba6e61e19ea4776a79aef50e626f69da
// https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
  );
}

export function fetchBooks() {
  return fetchWithErrorHandling(`${BASE_URL}/books`);
}

export function fetchBookById(bookId) {
  return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
}
