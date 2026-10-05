import { Outlet } from 'react-router-dom';
import { AuthStatus } from '../../api/const';
import Header from '../header/header';
import Footer from '../footer/footer';

export type LayoutProps = {
  authStatus: AuthStatus;
};

const LayoutName = ({authStatus}: LayoutProps) => (
  <div className="wrapper">
    <Header authStatus={authStatus} />
    <Outlet />
    <Footer />
  </div>
);

export default LayoutName;
