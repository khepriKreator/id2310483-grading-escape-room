import { FieldErrors, FieldValues } from 'react-hook-form';
import styles from './styles.module.css';

type FormInputErrorProps<T extends FieldValues> = {
  errors: FieldErrors<T> | undefined | null;
  name: string;
}

const FormInputError = <T extends FieldValues>({errors, name}: FormInputErrorProps<T>) => (
  <div className={styles.errorContainer}>
    {errors?.[name] && (
      <p className={styles.errorText}>{String(errors?.[name]?.message) || 'Ошибка!'}</p>
    )}
  </div>
);

export default FormInputError;
