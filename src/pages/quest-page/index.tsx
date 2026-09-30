import { Link, useParams } from 'react-router-dom';
import { generateQuest } from '../../utils/mocks';
import { Paths } from '../../shared/api/const';

const QuestPage = () => {
  const {id} = useParams();
  const quest = generateQuest();

  if (id) {
    quest.id = id;
  }

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest.coverImg} 1x, ${quest.coverImgWebp} 2x`}
          />
          <img
            src={quest.coverImg}
            srcSet={`${quest.coverImg} 2x`}
            width="1366"
            height="768"
            alt="превью квеста"
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {quest.title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{quest.type}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {quest.level}
            </li>
          </ul>
          <p className="quest-page__description">
            {quest.description}
          </p>
          <Link
            className="btn btn--accent btn--cta quest-page__btn"
            to={`${Paths.QUESTS}/${quest.id}/booking`}
          >
            Забронировать
          </Link>
        </div>
      </div>
    </main>
  );
};

export default QuestPage;
