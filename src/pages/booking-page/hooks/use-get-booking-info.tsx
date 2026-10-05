import { useEffect, useState } from 'react';
import { QuestBooking } from '../../../shared/api/models';
import { ApiPaths } from '../../../shared/api/const';
import { api } from '../../../shared/api/services/api-service';

export const useGetBookingInfoList = (id?: string) => {
  const [bookingInfoList, setBookingInfoList] = useState<QuestBooking[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    let shouldUpdate = true;

    const fetchBookingInfoList = async () => {
      if (!id) {
        return;
      }

      if (!shouldUpdate) {
        return;
      }

      setIsFetching(true);

      const response = await api.get<QuestBooking[]>(
        `${ApiPaths.Quest}/${id}/booking`,
      );

      if (response.status === 200) {
        setBookingInfoList(response.data);
      }

      setIsFetching(false);
    };

    fetchBookingInfoList();

    return () => {
      shouldUpdate = false;
    };
  }, [id]);

  return {
    bookingInfoList,
    isFetching,
  };
};
