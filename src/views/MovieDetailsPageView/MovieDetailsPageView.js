import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import styles from './MovieDetailsPageView.module.scss';

const MovieDetailsPageView = () => {
  const { movieId } = useParams();

  return (
    <h2>Movie {movieId}</h2>
    // <nav>
    //   <NavLink
    //     to="https://www.themoviedb.org/"
    //     className={styles.MovieDetailsPageView__Link}
    //     activeClassName={styles.MovieDetailsPageView__Link_Active}>
    //       TMDb
    //   </NavLink>
    //   <NavLink
    //     to="/" exact
    //     className={styles.MovieDetailsPageView__Link}
    //     activeClassName={styles.MovieDetailsPageView__Link_Active}>
    //       Home
    //   </NavLink>
    //   <NavLink
    //     to="/MovieDetailsPageView"
    //     className={styles.MovieDetailsPageView__Link}
    //     activeClassName={styles.MovieDetailsPageView__Link_Active}>
    //       MovieDetailsPageView
    //   </NavLink>
    // </nav>
  );
};

MovieDetailsPageView.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.node,
};

MovieDetailsPageView.defaultProps = {
  // title: 'Where is your title?',
  // children: <></>,
};

export default MovieDetailsPageView;
