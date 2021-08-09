import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './HomePageView.module.scss';
import * as moviesAPI from '../../utils/movies-api';

const HomePageView = () => {
  const location = useLocation();
  const imagesUrl = 'https://image.tmdb.org/t/p/w500';

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchTrendingMovies()
      .then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <ul className={styles.HomePageView}>
      {trendingMovies.length !== 0 &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { prevUrl: location },
              }}
              className={styles.HomePageView__Item}
            >
              <img
                src={imagesUrl + movie.poster_path}
                className={styles.HomePageView__Image}
                alt={movie.title}
              />
              <h2 className={styles.HomePageView__MovieTitle}>{movie.title}</h2>
              <p className={styles.HomePageView__MovieInfo}>
                Rate: {movie.vote_average}
              </p>
              <p className={styles.HomePageView__MovieInfo}>
                Views: {Math.round(movie.popularity)}
              </p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HomePageView;
