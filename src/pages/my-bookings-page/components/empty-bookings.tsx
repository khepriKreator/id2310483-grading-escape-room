import { Link } from 'react-router-dom';
import { Paths } from '../../../shared/api/const';
import styles from './styles.module.css';

const EmptyBooking = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      У вас еще нет бронирований
    </h1>
    <Link className={styles.linkButton} to={Paths.MAIN}>
      Забронировать квест
    </Link>
  </div>
);

export default EmptyBooking;
