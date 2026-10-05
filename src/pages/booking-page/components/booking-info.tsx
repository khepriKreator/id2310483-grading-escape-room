import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BookingFormData } from '../booking-page';
import FormInputError from '../../../shared/components/form-input-error/form-input-error';

type BookingInfoProps = {
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  peopleMinMax: [number, number];
};

const ContactPersonValidation = {
  Pattern: /^(?=.*[А-Яа-яЁёA-Za-z])[А-Яа-яЁёA-Za-z ]+$/,
  MinMaxLength: [1, 15],
} as const;

const PhoneValidation = {
  Pattern: /^(?:\+7|8)[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
} as const;

const BookingInfo = ({ register, errors, peopleMinMax }: BookingInfoProps) => (
  <fieldset className="booking-form__section">
    <legend className="visually-hidden">Контактная информация</legend>
    <div className="custom-input booking-form__input">
      <label className="custom-input__label" htmlFor="contactPerson">
        Ваше имя
      </label>
      <input
        type="text"
        id="contactPerson"
        {...register('contactPerson', {
          required: 'Поле обязательно для заполнения',
          pattern: {
            value: ContactPersonValidation.Pattern,
            message: 'Поле должно содержать только буквы и пробелы',
          },
          minLength: {
            value: ContactPersonValidation.MinMaxLength[0],
            message: `Поле должно содержать не менее ${ContactPersonValidation.MinMaxLength[0]} символов`,
          },
          maxLength: {
            value: ContactPersonValidation.MinMaxLength[1],
            message: `Поле должно содержать не более ${ContactPersonValidation.MinMaxLength[1]} символов`,
          },
        })}
        placeholder="Имя"
      />
      <FormInputError errors={errors} name="contactPerson" />
    </div>
    <div className="custom-input booking-form__input">
      <label className="custom-input__label" htmlFor="phone">
        Контактный телефон
      </label>
      <input
        type="tel"
        id="phone"
        {...register('phone', {
          required: 'Поле обязательно для заполнения',
          pattern: {
            value: PhoneValidation.Pattern,
            message: 'Допустимые форматы: +7(8) XXX XXX XX XX, +7(8) XXX XXX-XX-XX, +7(8)XXXXXXXXX',
          },
        })}
        placeholder="Телефон"
      />
      <FormInputError errors={errors} name="phone" />
    </div>
    <div className="custom-input booking-form__input">
      <label className="custom-input__label" htmlFor="peopleCount">
        Количество участников
      </label>
      <input
        type="number"
        id="peopleCount"
        {...register('peopleCount', {
          required: 'Поле обязательно для заполнения',
          min: {
            value: peopleMinMax[0],
            message: `Минимальное количество участников: ${peopleMinMax[0]}`,
          },
          max: {
            value: peopleMinMax[1],
            message: `Максимальное количество участников: ${peopleMinMax[1]}`,
          },
        })}
        placeholder="Количество участников"
      />
      <FormInputError errors={errors} name="peopleCount" />
    </div>
    <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
      <input type="checkbox" id="withChildren" {...register('withChildren')} />
      <span className="custom-checkbox__icon">
        <svg width="20" height="17" aria-hidden="true">
          <use xlinkHref="#icon-tick"></use>
        </svg>
      </span>
      <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
    </label>
  </fieldset>
);

export default BookingInfo;
