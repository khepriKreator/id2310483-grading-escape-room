import { useEffect, useState } from 'react';
import { ApiPaths } from '../../../shared/api/const';
import { api } from '../../../shared/api/services/api-service';
import { Quest } from '../../../shared/api/models';
import { StatusCodes } from 'http-status-codes';

export const useGetQuest = (id: string | undefined | null) => {
  const [quest, setQuest] = useState<Quest | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isNotFound, setIsNotFount] = useState<boolean>(false);

  useEffect(() => {
    let shouldUpdate = true;

    if (!id) {
      setIsNotFount(true);
      return;
    }

    const fetchQuest = async () => {
      if (!shouldUpdate) {
        return;
      }

      setIsFetching(true);

      const response = await api.get<Quest>(`${ApiPaths.QUEST}/${id}`);

      if (response.status === StatusCodes.OK) {
        setQuest(response.data);
      }

      setIsFetching(false);
    };

    fetchQuest();

    return () => {
      shouldUpdate = false;
    };
  }, [id]);

  return {
    quest,
    isFetching,
    isNotFound,
  };
};
