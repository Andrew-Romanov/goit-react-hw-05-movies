import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import logo from '../../images/themoviedb-short-logo.svg';

const Navigation = () => {
  return (
    <nav>
      <a href="https://www.themoviedb.org/" target="_blanc">
        <img src={logo} alt="Logo" className={styles.Navigation__Logo} />
      </a>
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

export default Navigation;
