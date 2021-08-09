import { lazy, Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

// import ReviewsSubview from '../ReviewsSubview';
// import CastSubview from '../CastSubview';

import noImage from '../../images/no-image.svg';
import styles from './MovieDetailsPageView.module.scss';
import * as moviesAPI from '../../utils/movies-api';

const ReviewsSubview = lazy(() =>
  import(
    '../ReviewsSubview'
    /* webpackChunkName: "ReviewsSubview" */
  ),
);
const CastSubview = lazy(() =>
  import(
    '../CastSubview'
    /* webpackChunkName: "CastSubview" */
  ),
);

const MovieDetailsPageView = () => {
  const imagesUrl = 'https://image.tmdb.org/t/p/w500';

  const location = useLocation();
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.prevUrl ?? '/');
  };

  return (
    movieDetails && (
      <div>
        <h2>{movieDetails.title}</h2>
        <img
          src={
            movieDetails.poster_path
              ? imagesUrl + movieDetails.poster_path
              : noImage
          }
          className={styles.MovieDetailsPageView__Image}
          alt={movieDetails.title}
        />
        <p className={styles.MovieDetailsPageView__MovieInfo}>
          Genres:{' '}
          {movieDetails.genres
            .map(genre => genre.name)
            .join(', ')
            .toLowerCase()}
        </p>
        <p className={styles.MovieDetailsPageView__MovieInfo}>
          Rate: {movieDetails.vote_average}
        </p>
        <p className={styles.MovieDetailsPageView__MovieInfo}>
          Views: {Math.round(movieDetails.popularity)}
        </p>
        <p className={styles.MovieDetailsPageView__MovieInfo}>
          Overview: {movieDetails.overview}
        </p>

        <button
          className={styles.MovieDetailsPageView__Button}
          type="button"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <NavLink
          className={styles.MovieDetailsPageView__Button}
          to={`${url}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          className={styles.MovieDetailsPageView__Button}
          to={`${url}/reviews`}
        >
          Reviews
        </NavLink>

        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route path={`${path}/cast`}>
              <CastSubview />
            </Route>

            <Route path={`${path}/reviews`}>
              <ReviewsSubview />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
  );
};

export default MovieDetailsPageView;
