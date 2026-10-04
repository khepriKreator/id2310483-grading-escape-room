import { UserBooking } from '../../../api/models';

type BookingInfoProps = {
  info: Pick<UserBooking, 'date' | 'time' | 'location'>;
};

const Dates = {
  today: 'сегодня',
  tomorrow: 'завтра',
};

const BookingInfo = ({info}: BookingInfoProps) => {
  const date = info.date === Dates.today ? 'сегодня' : 'завтра';
  const address = info.location.address.split('м.');

  return (
    <span className="quest-card__info">
      [{date}, {info.time}. {address[0]}<br/>м. {address[1]}]
    </span>
  );
};

export default BookingInfo;
