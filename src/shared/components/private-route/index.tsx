import { PropsWithChildren } from 'react';
import { AuthStatus } from '../../api/const';

type PrivateRouteProps = PropsWithChildren<{
  authStatus: AuthStatus;
}>;

const PrivateRoute = ({ children, authStatus }: PrivateRouteProps) => (
  authStatus === AuthStatus.Auth
    ?
    children
    :
    null
);

export default PrivateRoute;
