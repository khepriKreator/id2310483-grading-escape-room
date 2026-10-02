import { AxiosResponse } from 'axios';
import { ErrorDetailsMessage } from './api-service';
import { toast } from 'react-toastify';

export const errorHandler = (response: AxiosResponse<ErrorDetailsMessage>): void => {
  const status = response?.status;

  if (status === 400) {
    toast.warn(response?.data.details[0].messages[0]);
  }
};
