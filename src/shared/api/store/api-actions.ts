import { AxiosInstance } from 'axios';
import { ApiPaths } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken, setToken } from '../services/token';
import { AuthData, QuestPreview, UserBooking, UserResponseData } from '../models';
import { AppDispatch } from './store-types';
import { State } from './store-types';

export const fetchQuests = createAsyncThunk<
  QuestPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('quest/fetchQuests', async (_, { extra: api }) => {
  const response = await api.get<QuestPreview[]>(ApiPaths.QUEST);
  return response.data;
});

export const fetchUserBookings = createAsyncThunk<
  UserBooking[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('quests/fetchMyBookings', async (_, {extra: api}) => {
  const response = await api.get<UserBooking[]>(ApiPaths.MY_BOOKINGS);
  return response.data;
});

export const checkAuth = createAsyncThunk<
  string,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/check', async (_, {extra: api}) => {
  const response = await api.get<UserResponseData>(ApiPaths.LOGIN);

  return response.data.email;
});

export const login = createAsyncThunk<
  string,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (data, {extra: api}) => {
  const response = await api.post<UserResponseData>(ApiPaths.LOGIN, data);
  const token = response.data.token;

  setToken(token);

  return response.data.email;
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_, {extra: api}) => {
  await api.delete(ApiPaths.LOGOUT);
  dropToken();
});
