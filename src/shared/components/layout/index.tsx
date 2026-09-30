import { Outlet } from 'react-router-dom';
import { AuthStatus } from '../../api/const';
import Header from '../header';
import Footer from '../footer';

const LayoutName = () => (
  <>
    <Header authStatus={AuthStatus.Auth} />
    <Outlet />
    <Footer />
  </>
);

export default LayoutName;
