import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesNames } from '../../../const';
import { UserBooking } from '../../../models';
import { fetchUserBookings } from '../../api-actions';

type UserBookingsState = {
  bookings: UserBooking[];
  isFetching: boolean;
};

const initialState: UserBookingsState = {
  bookings: [],
  isFetching: false,
};

export const userBookingsSlice = createSlice({
  name: SlicesNames.UserBookings,
  initialState,
  reducers: {
    addBooking: (state, { payload }: PayloadAction<UserBooking>) => {
      state.bookings = [...state.bookings, payload];
    },
    removeBooking: (state, { payload }: PayloadAction<string>) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== payload,
      );
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchUserBookings.pending, (state) => {
      state.isFetching = true;
    })
      .addCase(fetchUserBookings.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.bookings = payload;
      })
      .addCase(fetchUserBookings.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { addBooking, removeBooking, clearBookings } =
  userBookingsSlice.actions;
