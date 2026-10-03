import { Paths } from '../../api/const';
import type { QuestPreview, UserBooking } from '../../api/models';
import {Link} from 'react-router-dom';
import { useAppDispatch } from '../../api/store/hooks';
import { removeBooking } from '../../api/store/slices/user-bookings-slice/user-booking-slice';

type QuestPreviewComponentProps = {
  data: {
    quest: QuestPreview;
    type: 'quest';
  } | {
    booking: UserBooking;
    type: 'booking';
  };
};

const Dates = {
  today: 'сегодня',
  tomorrow: 'завтра',
};

const QuestPreviewComponent = ({data}: QuestPreviewComponentProps) => {
  const dispatch = useAppDispatch();
  const bookingInfo = data.type === 'booking' ? data.booking : null;
  const {
    id,
    previewImg,
    previewImgWebp,
    title,
    peopleMinMax,
    level,
  } = data.type === 'booking' ? data.booking.quest : data.quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            width="1366"
            height="768"
            alt="превью квеста"
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${Paths.QUESTS}/${id}`}>{title}</Link>
          {
            bookingInfo
              &&
              <span
                className="quest-card__info"
              >
                [{bookingInfo.date === 'today' ? Dates.today : Dates.tomorrow},&nbsp;{bookingInfo.time}. {bookingInfo.location.address}]
              </span>
          }
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {
              bookingInfo
                ?
                bookingInfo.peopleCount
                :
                `${peopleMinMax[0]}–${peopleMinMax[1]}`
            }&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {level}
          </li>
        </ul>
        {
          bookingInfo
          &&
          <button
            className="btn btn--accent btn--secondary quest-card__btn"
            type="button"
            onClick={() => dispatch(removeBooking(bookingInfo.id))}
          >
            Отменить
          </button>
        }
      </div>
    </div>
  );
};

export default QuestPreviewComponent;
