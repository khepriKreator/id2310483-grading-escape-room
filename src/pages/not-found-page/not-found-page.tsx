import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Paths } from '../../shared/api/const';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>404</h1>
    <p className={styles.description}>
      Вы перешли на несуществующую страницу
    </p>
    <Link to={Paths.Main} className={styles.linkButton}>
      На главную
    </Link>
  </div>
);

export default NotFoundPage;
