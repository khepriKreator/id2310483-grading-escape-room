import { Location } from './models';

export enum AuthStatus {
  Auth = 'Auth',
  No_Auth = 'No_Auth',
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

export const Contacts = {
  City: 'Санкт-Петербург',
  Address: 'Набережная реки Карповка, д 5П',
} as const;

export const ContactsLocation: Location = {
  address: `${Contacts.City}, ${Contacts.Address}`,
  coords: [59.968322, 30.317359],
} as const;
