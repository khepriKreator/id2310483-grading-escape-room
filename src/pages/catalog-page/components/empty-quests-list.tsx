import styles from './styles.module.css';

const EmptyQuestsList = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Нет квестов для выбранной тематики</h1>
  </div>
);

export default EmptyQuestsList;
