import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultActor from '../../images/default-actor.svg';

import styles from './CastSubview.module.scss';
import * as moviesAPI from '../../services/movies-api';
import * as constants from '../../services/constants';

const CastSubview = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.fetchCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul className={styles.CastSubview}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.CastSubview__Item}>
            <img
              src={
                actor.profile_path
                  ? constants.IMAGES_URL + actor.profile_path
                  : defaultActor
              }
              className={styles.CastSubview__Image}
              alt={actor.name}
            />
            <p className={styles.CastSubview__ActorInfo}>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    )
  );
};

export default CastSubview;
