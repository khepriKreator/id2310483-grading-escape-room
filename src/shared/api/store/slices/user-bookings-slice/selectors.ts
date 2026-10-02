import { SlicesNames } from '../../../const';
import { UserBooking } from '../../../models';
import { State } from '../../store-types';

export const getUserBookings = (state: Pick<State, SlicesNames.UserBookings>): UserBooking[] => state[SlicesNames.UserBookings].bookings;

export const getIsBookingsFetching = (state: Pick<State, SlicesNames.UserBookings>): boolean => state[SlicesNames.UserBookings].isFetching;
