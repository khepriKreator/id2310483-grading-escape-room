import { AxiosResponse } from 'axios';
import { ErrorDetailsMessage } from './api-service';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (response: AxiosResponse<ErrorDetailsMessage>): void => {
  const status = response?.status;

  if (status === StatusCodes.BAD_REQUEST) {
    toast.warn(response?.data.details[0].messages[0]);
    return;
  } else if (status === StatusCodes.UNAUTHORIZED) {
    return;
  }

  toast.warn(response?.data.message);
};
