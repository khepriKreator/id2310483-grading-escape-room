import { useEffect, useState } from 'react';
import Map from '../../shared/components/map';
import BookingInfo from './components/booking-info';
import BookingTimeOptions from './components/booking-time-options';
import { QuestBooking } from '../../shared/api/models';
import { useParams } from 'react-router-dom';
import { useGetBookingInfo } from './hooks/use-get-booking-info';
import Spinner from '../../shared/components/spinner';
import { useAppDispatch, useAppSelector } from '../../shared/api/store/hooks';
import { useForm } from 'react-hook-form';
import { getQuest } from '../../shared/api/store/slices/quest-slice/selectors';
import styles from './styles.module.css';
import { createBookingRequestInfo } from '../../utils/functions';
import { useBooking } from './hooks/use-booking';
import { fetchQuest } from '../../shared/api/store/api-actions';

export type BookingFormData = {
  date: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: string;
  userAgreement: boolean;
};

const BookingPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { bookingInfo, isFetching } = useGetBookingInfo(id);
  const { handleBooking } = useBooking();
  const quest = useAppSelector(getQuest);
  const [selectedPlace, setSelectedPlace] = useState<QuestBooking | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<BookingFormData>({
    mode: 'onBlur',
  });

  useEffect(
    () => {
      if (!id) {
        return;
      }

      if (!quest) {
        dispatch(fetchQuest(id));
      }

      if (bookingInfo) {
        setSelectedPlace(bookingInfo[0]);
      }
    },
    [dispatch, quest, id, bookingInfo]
  );

  if (isFetching) {
    return <Spinner />;
  }

  if (!bookingInfo || !quest) {
    return;
  }

  const onPlaceChange = (placeId: string) => {
    const place = bookingInfo.find((item) => item.id === placeId);

    if (place) {
      setSelectedPlace(place);
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (!selectedPlace) {
      return;
    }

    const requestData = createBookingRequestInfo(data, selectedPlace.id);

    handleBooking(quest.id, requestData);
    reset();
  });

  return (
    <main className="page-content decorated-page">
      <div className={`${styles.backgroundPictureBlur} decorated-page__decor`} aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest.previewImgWebp}, ${quest.coverImgWebp} 2x`}
          />
          <img
            src={quest.coverImg}
            srcSet={`${quest.coverImg} 2x`}
            width="1366"
            height="768"
            alt="превью квеста"
          />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">
            {quest?.title}
          </p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">
                <Map
                  center={bookingInfo[0].location}
                  bookingInfo={bookingInfo}
                  onPlaceChange={onPlaceChange}
                />
              </div>
            </div>
            <p className="booking-map__address">
              Вы&nbsp;выбрали: {selectedPlace?.location.address}
            </p>
          </div>
        </div>
        <form
          className="booking-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            void onSubmit();
          }}
        >
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            {selectedPlace &&
              Object.keys(selectedPlace.slots).map((date) => (
                <BookingTimeOptions
                  key={date}
                  slots={selectedPlace.slots[date]}
                  title={date}
                  register={register}
                />
              ))}
          </fieldset>
          <BookingInfo
            register={register}
            errors={errors}
            peopleMinMax={quest.peopleMinMax}
          />
          <button
            className="btn btn--accent btn--cta booking-form__submit"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Забронировать
          </button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input
              type="checkbox"
              id="userAgreement"
              {...register(
                'userAgreement',
                {
                  required: true,
                }
              )}
            />
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">
              Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">
                правилами обработки персональных данных
              </a>
              &nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
};

export default BookingPage;
