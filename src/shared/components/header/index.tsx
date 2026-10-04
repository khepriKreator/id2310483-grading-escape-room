import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthStatus, Paths } from '../../api/const';
import { useLogout } from '../../api/hooks/use-logout';

type HeaderProps = {
  authStatus: AuthStatus;
};

const Header = ({ authStatus }: HeaderProps) => {
  const location = useLocation();
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    if (location.pathname.includes(Paths.MY_BOOKINGS) || location.pathname.includes(Paths.BOOKING)) {
      navigate(Paths.MAIN);
    }
  };

  return (
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
                className={
                  ({ isActive }) =>
                    isActive ? 'link active' : 'link'
                }
                to={Paths.MAIN}
              >
                Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                className={
                  ({ isActive }) =>
                    isActive ? 'link active' : 'link'
                }
                to={Paths.CONTACTS}
              >
                Контакты
              </NavLink>
            </li>
            {authStatus === AuthStatus.Auth && (
              <li className="main-nav__item">
                <NavLink
                  className={
                    ({ isActive }) =>
                      isActive ? 'link active' : 'link'
                  }
                  to={Paths.MY_BOOKINGS}
                >
                  Мои бронирования
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {authStatus === AuthStatus.Auth ? (
            <a
              onClick={handleLogout}
              className="btn btn--accent header__side-item"
              href="#"
            >
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
};

export default Header;
