import { Location } from './models';

export enum AuthStatus {
  Auth = 'Auth',
  No_Auth = 'No_Auth',
  Unknown = 'Unknown',
}

export enum SlicesNames {
  Quests = 'QUESTS',
  User = 'USER',
  UserBookings = 'USER_BOOKINGS',
}

export const Paths = {
  MAIN: '/',
  LOGIN: 'login',
  CONTACTS: 'contacts',
  MY_BOOKINGS: 'my-bookings',
  QUESTS: 'quests',
  BOOKING: 'booking',
  NOT_FOUND: '*',
} as const;

export const ApiPaths = {
  QUEST: 'quest',
  MY_BOOKINGS: 'reservation',
  LOGIN: 'login',
  LOGOUT: 'logout',
} as const;

export const Contacts = {
  city: 'Санкт-Петербург',
  address: 'Набережная реки Карповка, д 5П',
  tel: '8 (812) 123-45-67',
  email: 'info@escape-room.ru',
  schedule: ['10:00', '22:00'],
} as const;

export const ContactsLocation: Location = {
  address: `${Contacts.city}, ${Contacts.address}`,
  coords: [59.968322, 30.317359],
} as const;
