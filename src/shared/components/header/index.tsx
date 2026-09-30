import { Link, NavLink } from 'react-router-dom';
import { AuthStatus, Paths } from '../../api/const';

type HeaderProps = {
  authStatus: AuthStatus;
};

const Header = ({ authStatus }: HeaderProps) => (
  <header className="header">
    <div className="container container--size-l">
      <Link to={Paths.MAIN} className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </Link>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to={Paths.MAIN}
            >
              Квесты
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to={Paths.CONTACTS}
            >
              Контакты
            </NavLink>
          </li>
          {
            authStatus === AuthStatus.Auth
            &&
            (
              <li className="main-nav__item">
                <NavLink
                  className={({ isActive }) => isActive ? 'link active' : 'link'}
                  to={Paths.MY_BOOKINGS}
                >
                  Мои бронирования
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
      <div className="header__side-nav">
        {authStatus === AuthStatus.Auth ? (
          <a className="btn btn--accent header__side-item" href="#">
            Выйти
          </a>
        ) : (
          <Link
            className="btn header__side-item header__login-btn"
            to={Paths.LOGIN}
          >
            Вход
          </Link>
        )}
        <a
          className="link header__side-item header__phone-link"
          href="tel:88003335599"
        >
          8 (000) 111-11-11
        </a>
      </div>
    </div>
  </header>
);

export default Header;
