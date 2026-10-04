import { useEffect, useState } from 'react';
import { QuestBooking } from '../../../shared/api/models';
import { ApiPaths } from '../../../shared/api/const';
import { api } from '../../../shared/api/services/api-service';

export const useGetBookingInfo = (id?: string) => {
  const [bookingInfo, setBookingInfo] = useState<QuestBooking[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    let shouldUpdate = true;

    const fetchBookingInfo = async () => {
      if (!id) {
        return;
      }

      if (!shouldUpdate) {
        return;
      }

      setIsFetching(true);

      const response = await api.get<QuestBooking[]>(
        `${ApiPaths.QUEST}/${id}/booking`,
      );

      if (response.status === 200) {
        setBookingInfo(response.data);
      }

      setIsFetching(false);
    };

    fetchBookingInfo();

    return () => {
      shouldUpdate = false;
    };
  }, [id]);

  return {
    bookingInfo,
    isFetching,
  };
};
