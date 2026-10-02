import { combineReducers } from '@reduxjs/toolkit';
import { userBookingsSlice } from './slices/user-bookings-slice/user-booking-slice';
import { SlicesNames } from '../const';
import { questsSlice } from './slices/quests-slice/quests-slice';
import { userSlice } from './slices/user-slice/user-slice';

export const rootReducer = combineReducers({
  [SlicesNames.Quests]: questsSlice.reducer,
  [SlicesNames.UserBookings]: userBookingsSlice.reducer,
  [SlicesNames.User]: userSlice.reducer,
});
