import { useAppSelector } from '../../shared/api/store/hooks';
import { getUserBookings } from '../../shared/api/store/slices/user-bookings-slice/selectors';
import QuestPreviewComponent from '../../shared/components/quest-preview';
import EmptyBooking from './components/empty-bookings';

const MyBookingsPage = () => {
  const bookings = useAppSelector(getUserBookings);

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width="1366"
            height="1959"
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        {
          bookings.length !== 0
            ?
            <div className="cards-grid">
              {bookings.map((booking) => (
                <QuestPreviewComponent
                  key={booking.id}
                  data={{ booking, type: 'booking' }}
                />
              ))}
            </div>
            :
            <EmptyBooking/>
        }
      </div>
    </main>
  );
};

export default MyBookingsPage;
