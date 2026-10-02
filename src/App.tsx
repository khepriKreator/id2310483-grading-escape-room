import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/catalog-page';
import Layout from './shared/components/layout';
import { AuthStatus, Paths } from './shared/api/const';
import ContactsPage from './pages/contacts-page';
import { LoginPage } from './pages/login-page';
import PrivateRoute from './shared/components/private-route';
import MyBookingsPage from './pages/my-bookings-page';
import QuestPage from './pages/quest-page';
import BookingPage from './pages/booking-page';
import NotFoundPage from './pages/not-found-page';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './shared/api/store/hooks';
import { checkAuth, fetchQuests, fetchUserBookings } from './shared/api/store/api-actions';
import { getAuthStatus } from './shared/api/store/slices/user-slice/selectors';

export const App = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(
    () => {
      dispatch(checkAuth());
      dispatch(fetchQuests());
    },
    [dispatch]
  );

  useEffect(
    () => {
      if (authStatus === AuthStatus.Auth) {
        dispatch(fetchUserBookings());
      }
    },
    [dispatch, authStatus]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MAIN} element={<Layout authStatus={authStatus}/>}>
          <Route index element={<CatalogPage />} />
          <Route path={Paths.LOGIN} element={<LoginPage />} />
          <Route
            path={Paths.MY_BOOKINGS}
            element={
              <PrivateRoute authStatus={authStatus}>
                <MyBookingsPage />
              </PrivateRoute>
            }
          />
          <Route path={Paths.CONTACTS} element={<ContactsPage />} />
          <Route path={`${Paths.QUESTS}/:id`} element={<QuestPage />} />
          <Route
            path={`${Paths.QUESTS}/:id/${Paths.BOOKING}`}
            element={
              <PrivateRoute authStatus={authStatus}>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
