import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/catalog-page';
import Layout from './shared/components/layout';
import { AuthStatus, Paths } from './shared/api/const';
import ContactsPage from './pages/contacts-page';
import { LoginPage } from './pages/login-page';
import PrivateRoute from './shared/components/private-route';
import MyBookingsPage from './pages/my-bookings-page';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={Paths.MAIN}
        element={<Layout/>}
      >
        <Route
          index
          element={<CatalogPage/>}
        />
        <Route
          path={Paths.LOGIN}
          element={<LoginPage/>}
        />
        <Route
          path={Paths.MY_BOOKINGS}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <MyBookingsPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.CONTACTS}
          element={<ContactsPage/>}
        />
        <Route
          path={`${Paths.QUESTS}/:id`}
        />
        <Route
          path={`${Paths.QUESTS}/:id/booking`}
        />
        <Route
          path='*'
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
