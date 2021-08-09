import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './ReviewsSubview.module.scss';
import * as moviesAPI from '../../services/movies-api';

const ReviewsSubview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchReviews(movieId).then(data => {
      setReviews(data.results);
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
