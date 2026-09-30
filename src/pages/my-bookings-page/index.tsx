import type { QuestPreview } from '../../shared/api/models';
import QuestPreviewComponent from '../../shared/components/quest-preview';
import { generateQuestPreview } from '../../utils/mocks';

const questsCount = 5;

const MyBookingsPage = () => {
  const quests: QuestPreview[] = Array.from(
    { length: questsCount },
    generateQuestPreview,
  );

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width="1366"
            height="1959"
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        <div className="cards-grid">
          {quests.map((quest) => (
            <QuestPreviewComponent key={quest.id} quest={quest} pageType="MY_BOOKINGS"/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyBookingsPage;
