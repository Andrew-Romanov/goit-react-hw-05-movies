import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import styles from './MoviesPageView.module.scss';

const MoviesPageView = () => {
  return (
    <h2>MoviesPageView</h2>
    // <nav>
    //   <NavLink
    //     to="https://www.themoviedb.org/"
    //     className={styles.MoviesPageView__Link}
    //     activeClassName={styles.MoviesPageView__Link_Active}>
    //       TMDb
    //   </NavLink>
    //   <NavLink
    //     to="/" exact
    //     className={styles.MoviesPageView__Link}
    //     activeClassName={styles.MoviesPageView__Link_Active}>
    //       Home
    //   </NavLink>
    //   <NavLink
    //     to="/MoviesPageView"
    //     className={styles.MoviesPageView__Link}
    //     activeClassName={styles.MoviesPageView__Link_Active}>
    //       MoviesPageView
    //   </NavLink>
    // </nav>
  );
};

MoviesPageView.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.node,
};

MoviesPageView.defaultProps = {
  // title: 'Where is your title?',
  // children: <></>,
};

export default MoviesPageView;
