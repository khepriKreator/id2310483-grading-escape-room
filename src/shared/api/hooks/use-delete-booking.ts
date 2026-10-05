import { ApiPaths } from '../const';
import { api } from '../services/api-service';
import { useAppDispatch } from '../store/hooks';
import { removeBooking } from '../store/slices/user-bookings-slice/user-booking-slice';

export const useDeleteBooking = () => {
  const dispatch = useAppDispatch();

  const deleteBooking = async (id: string) => {
    const response = await api.delete(`${ApiPaths.UserBooking}/${id}`);

    if (response.status === 204) {
      dispatch(removeBooking(id));
    }
  };

  return deleteBooking;
};
