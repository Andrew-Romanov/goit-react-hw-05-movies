import { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import styles from './ReviewsSubview.module.scss';
import * as moviesAPI from '../../utils/movies-api';

const ReviewsSubview = () => {
  const imagesUrl = 'https://image.tmdb.org/t/p/w500';

  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchReviews(movieId).then(data => {
      setReviews(data.results);
      console.log(data.results);
    });
  }, [movieId]);

  return (
    reviews &&
    (reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3 className={styles.ReviewsSubview__Author}>{review.author}</h3>
            <p className={styles.ReviewsSubview__Content}>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.ReviewsSubview__MovieInfo}>
        No reviews for this movie
      </p>
    ))
  );
};

export default ReviewsSubview;
