import { useRef } from 'react';

type BookingInfoProps = {
  onChange: () => void;
};

const BookingInfo = ({onChange}: BookingInfoProps) => {
  const infoRef = useRef({
    name: '',
    tel: '',
    guestCount: 0,
    children: false
  });

  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Контактная информация</legend>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="name">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          required
          pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
        />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="tel">
          Контактный телефон
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="Телефон"
          required
          pattern="[0-9]{10,}"
        />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="person">
          Количество участников
        </label>
        <input
          type="number"
          id="person"
          name="person"
          placeholder="Количество участников"
          required
        />
      </div>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
        <input type="checkbox" id="children" name="children" />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
      </label>
    </fieldset>
  );
};

export default BookingInfo;
