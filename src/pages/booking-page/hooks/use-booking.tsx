import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../shared/api/store/hooks';
import { api } from '../../../shared/api/services/api-service';
import { useState } from 'react';
import { BookingRequestInfo, UserBooking } from '../../../shared/api/models';
import { ApiPaths, Paths } from '../../../shared/api/const';
import { addBooking } from '../../../shared/api/store/slices/user-bookings-slice/user-booking-slice';

export const useBooking = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const handleBooking = async (id: string, data: BookingRequestInfo) => {
    try {
      setIsUpdating(true);
      const response = await api.post<UserBooking>(
        `${ApiPaths.Quest}/${id}/booking`,
        data,
      );

      if (response.status === 200) {
        dispatch(addBooking(response.data));
        navigate(Paths.UserBooking);
      }
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    handleBooking,
    isUpdating,
  };
};
