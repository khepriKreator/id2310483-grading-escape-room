import { logout } from '../store/api-actions';
import { useAppDispatch } from '../store/hooks';
import { clearBookings } from '../store/slices/user-bookings-slice/user-booking-slice';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(logout());
    dispatch(clearBookings());
  };
};
