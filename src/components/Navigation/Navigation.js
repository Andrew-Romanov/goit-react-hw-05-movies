import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="https://www.themoviedb.org/"
        className={styles.Navigation__Link}
        activeClassName={styles.Navigation__Link_Active}
      >
        TMDb
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.Navigation__Link}
        activeClassName={styles.Navigation__Link_Active}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        className={styles.Navigation__Link}
        activeClassName={styles.Navigation__Link_Active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

Navigation.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.node,
};

Navigation.defaultProps = {
  // title: 'Where is your title?',
  // children: <></>,
};

export default Navigation;
