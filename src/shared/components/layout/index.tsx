import { Outlet } from 'react-router-dom';
import { AuthStatus } from '../../api/const';
import Header from '../header';
import Footer from '../footer';

export type LayoutProps = {
  authStatus: AuthStatus;
};

const LayoutName = ({authStatus}: LayoutProps) => (
  <>
    <Header authStatus={authStatus} />
    <Outlet />
    <Footer />
  </>
);

export default LayoutName;
