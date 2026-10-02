import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthStatus, Paths } from '../../shared/api/const';
import { getAuthStatus } from '../../shared/api/store/slices/user-slice/selectors';
import { useAppSelector } from '../../shared/api/store/hooks';
import { useGetQuest } from './hooks/useGetQuest';
import Spinner from '../../shared/components/spinner';

const QuestPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);
  const { quest, isNotFound, isFetching } = useGetQuest(id);

  if (isFetching) {
    return <Spinner/>;
  }

  if (isNotFound) {
    navigate(Paths.NOT_FOUND);
  }

  if (!id || !quest) {
    return;
  }

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={quest.coverImgWebp}
          />
          <img
            src={quest.coverImg}
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
            to={authStatus === AuthStatus.Auth ? `${Paths.QUESTS}/${id}/${Paths.BOOKING}` : Paths.LOGIN}
          >
            Забронировать
          </Link>
        </div>
      </div>
    </main>
  );
};

export default QuestPage;
