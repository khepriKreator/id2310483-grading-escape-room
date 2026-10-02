import { useAppSelector } from '../../shared/api/store/hooks';
import { getFilteredQuests } from '../../shared/api/store/slices/quests-slice/selectors';
import FiltersList from '../../shared/components/filters';
import QuestPreviewComponent from '../../shared/components/quest-preview';

const CatalogPage = () => {
  const quests = useAppSelector(getFilteredQuests);

  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">
            Выберите тематику
          </h2>
        </div>
        <div className="page-content__item">
          <FiltersList />
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <div className="cards-grid">
          {quests.map((quest) => (
            <QuestPreviewComponent key={quest.id} quest={quest} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
