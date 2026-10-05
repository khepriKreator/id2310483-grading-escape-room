import { Location } from './models';

export enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum SlicesNames {
  Quests = 'QUESTS',
  Quest = 'QUEST',
  User = 'USER',
  UserBookings = 'USER_BOOKINGS',
}

export const Paths = {
  Main: '/',
  Login: '/login',
  Contacts: '/contacts',
  UserBooking: '/my-bookings',
  Quests: '/quests',
  Booking: 'booking',
  NotFound: '/*',
} as const;

export const ApiPaths = {
  Quest: 'quest',
  UserBooking: 'reservation',
  Login: 'login',
  Logout: 'logout',
} as const;

export const ContactsLocation: Location = {
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  coords: [59.968322, 30.317359],
} as const;
