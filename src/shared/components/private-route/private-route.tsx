import { PropsWithChildren } from 'react';
import { AuthStatus, Paths } from '../../api/const';
import { useNavigate } from 'react-router-dom';

type PrivateRouteProps = PropsWithChildren<{
  authStatus: AuthStatus;
  isLoginPage?: boolean;
}>;

const PrivateRoute = ({ children, authStatus, isLoginPage = false }: PrivateRouteProps) => {
  const navigate = useNavigate();

  if (isLoginPage && authStatus === AuthStatus.Auth) {
    navigate(Paths.Main);
    return;
  } else if (!isLoginPage && authStatus === AuthStatus.NoAuth) {
    navigate(Paths.Login);
    return;
  }

  return children;
};

export default PrivateRoute;
