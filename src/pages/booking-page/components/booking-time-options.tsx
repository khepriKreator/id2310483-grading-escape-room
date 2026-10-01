import { Slot } from '../../../shared/api/models';

type BookingTimeOptionsProps = {
  slots: Slot[];
  title: string;
  onChange: () => void;
};

const BookingTimeOptions = ({
  slots,
  title,
  onChange,
}: BookingTimeOptionsProps) => (
  <fieldset className="booking-form__date-section">
    <legend className="booking-form__date-title">{title}</legend>
    <div className="booking-form__date-inner-wrapper">
      {slots.map((slot) => (
        <label key={slot.time} className="custom-radio booking-form__date">
          <input
            type="radio"
            id={`${title}-${slot.time}`}
            name={title}
            required
            value={`${title}-${slot.time}`}
            onChange={() => onChange()}
            disabled={slot.isAvailable}
          />
          <span className="custom-radio__label">{slot.time}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default BookingTimeOptions;
