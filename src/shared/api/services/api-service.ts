import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { errorHandler } from './error-handler';

export type ErrorDetailsMessage = {
  errorType: string;
  message: string;
  details: [
    {
      property: string;
      value: string;
      messages: string[];
    }
  ];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.CONFLICT]: true
};

const shouldShowError = (responce: AxiosResponse): boolean => !!StatusCodeMapping[responce.status];

export const BASE_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/' as const;

export const REQUEST_TIMEOUT = 5000 as const;

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorDetailsMessage>) => {
      if (error.response && shouldShowError(error.response)) {
        errorHandler(error.response);
      }

      throw error;
    }
  );

  return api;
};

export const api = createApi();
