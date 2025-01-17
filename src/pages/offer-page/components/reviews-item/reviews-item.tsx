import Rating from '../../../../components/blocks/rating/rating';
import { ReviewType } from '../../../../types/alltypes';
import { convertDate } from './utils';

type ReviewsItemProps = {
  review: ReviewType;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const {
    comment,
    date,
    rating,
    user: { name, avatarUrl },
  } = review;
  const dateReview = new Date(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} isReview />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={convertDate(dateReview)}>
          {dateReview.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
