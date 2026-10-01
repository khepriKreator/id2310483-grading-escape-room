import { Location } from './models';

export enum AuthStatus {
  Auth = 'Auth',
  No_Auth = 'No_Auth',
  Unknown = 'Unknown',
}

export const Paths = {
  MAIN: '/',
  LOGIN: 'login',
  CONTACTS: 'contacts',
  MY_BOOKINGS: 'my-bookings',
  QUESTS: 'quests',
  BOOKING: 'booking',
};

export const Contacts = {
  city: 'Санкт-Петербург',
  address: 'Набережная реки Карповка, д 5П',
  tel: '8 (812) 123-45-67',
  email: 'info@escape-room.ru',
  schedule: ['10:00', '22:00'],
};

export const ContactsLocation: Location = {
  address: `${Contacts.city}, ${Contacts.address}`,
  coords: [59.968322, 30.317359],
};
