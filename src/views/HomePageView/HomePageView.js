import { useEffect, useState } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import styles from './HomePageView.module.scss';
import * as moviesAPI from '../../utils/movies-api';

const HomePageView = () => {
  // const match = useRouteMatch();
  const location = useLocation();
  const imagesUrl = 'https://image.tmdb.org/t/p/w500';

  const [trendingMovies, setTrendingMovies] = useState([]);

  // console.log('match', match);
  // console.log('location', location);

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
              {/* {movie.title} */}
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
    // <nav>
    //   <NavLink
    //     to="https://www.themoviedb.org/"
    //     className={styles.HomePageView__Link}
    //     activeClassName={styles.HomePageView__Link_Active}>
    //       TMDb
    //   </NavLink>
    //   <NavLink
    //     to="/" exact
    //     className={styles.HomePageView__Link}
    //     activeClassName={styles.HomePageView__Link_Active}>
    //       Home
    //   </NavLink>
    //   <NavLink
    //     to="/search"
    //     className={styles.HomePageView__Link}
    //     activeClassName={styles.HomePageView__Link_Active}>
    //       Search
    //   </NavLink>
    // </nav>
  );
};

HomePageView.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.node,
};

HomePageView.defaultProps = {
  // title: 'Where is your title?',
  // children: <></>,
};

export default HomePageView;
