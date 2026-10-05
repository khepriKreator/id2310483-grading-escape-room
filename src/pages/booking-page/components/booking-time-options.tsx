import { UseFormRegister } from 'react-hook-form';
import { Slot } from '../../../shared/api/models';
import { BookingFormData } from '../booking-page';
import { getDateTranslation } from '../../../utils/functions';

type BookingTimeOptionsProps = {
  slots: Slot[];
  title: string;
  register: UseFormRegister<BookingFormData>;
};

const BookingTimeOptions = ({
  slots,
  title,
  register,
}: BookingTimeOptionsProps) => (
  <fieldset className="booking-form__date-section">
    <legend className="booking-form__date-title">{getDateTranslation(title)}</legend>
    <div className="booking-form__date-inner-wrapper">
      {slots.map((slot) => (
        <label key={slot.time} className="custom-radio booking-form__date">
          <input
            type="radio"
            id={`${title}-${slot.time}`}
            {...register(
              'date',
              {
                required: 'Выберите время',
              }
            )}
            value={`${title}-${slot.time}`}
            disabled={!slot.isAvailable}
          />
          <span className="custom-radio__label">{slot.time}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default BookingTimeOptions;
