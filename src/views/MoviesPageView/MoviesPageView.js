import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Searchbar from '../../components/Searchbar';
import noImage from '../../images/no-image.svg';
import styles from './MoviesPageView.module.scss';
import * as moviesAPI from '../../utils/movies-api';

const MoviesPageView = () => {
  const history = useHistory();
  const location = useLocation();
  const imagesUrl = 'https://image.tmdb.org/t/p/w500';
  const [findedMovies, setFindedMovies] = useState([]);
  const [query, setQuery] = useState(
    // Извлекаем запрос поиска из командной строки
    new URLSearchParams(location.search).get('query') ?? '',
  );

  const whenSubmit = searchQuery => {
    setQuery(searchQuery);
  };

  useEffect(() => {
    if (query === '') return;

    // Запоминаем запрос поиска в командной строке
    history.push({ ...location, search: `query=${query}` });

    moviesAPI.fetchSearchedMovies(query).then(data => {
      setFindedMovies(data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Searchbar whenSubmit={whenSubmit} />

      <ul className={styles.MoviesPageView}>
        {findedMovies.length !== 0 &&
          findedMovies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { prevUrl: location },
                }}
                className={styles.MoviesPageView__Item}
              >
                <img
                  src={
                    movie.poster_path ? imagesUrl + movie.poster_path : noImage
                  }
                  // src={imagesUrl + movie.poster_path}
                  className={styles.MoviesPageView__Image}
                  alt={movie.title}
                />
                <h2 className={styles.MoviesPageView__MovieTitle}>
                  {movie.title}
                </h2>
                <p className={styles.MoviesPageView__MovieInfo}>
                  Rate: {movie.vote_average}
                </p>
                <p className={styles.MoviesPageView__MovieInfo}>
                  Views: {Math.round(movie.popularity)}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesPageView;
