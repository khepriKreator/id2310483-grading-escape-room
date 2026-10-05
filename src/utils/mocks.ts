import {
  Location,
  Quest,
  QuestBooking,
  QuestPreview,
  Slot,
} from '../shared/api/models.ts';
import { ContactsLocation } from '../shared/api/const.ts';
import { faker } from '@faker-js/faker';

export const QuestsLevels = {
  Easy: 'Легкий',
  Medium: 'Средний',
  Hard: 'Сложный',
} as const;

export const QuestsThemes = {
  Adventures: 'Приключение',
  Horrors: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-Fi',
} as const;

export const getRandomLevel = (): typeof QuestsLevels[keyof typeof QuestsLevels] => Object.values(QuestsLevels)[
  faker.number.int({ min: 0, max: Object.values(QuestsLevels).length - 1 })];

export const getRandomTheme = (): typeof QuestsThemes[keyof typeof QuestsThemes] => Object.values(QuestsThemes)[
  faker.number.int({ min: 0, max: Object.values(QuestsThemes).length - 1 })];

export const generateLocation = (): Location => ({
  address: faker.location.streetAddress(),
  coords: faker.location.nearbyGPSCoordinate({
    origin: [ContactsLocation.coords[0], ContactsLocation.coords[1]],
    radius: 1,
  }),
});

export const generateSlots = (count: number): Slot[] =>
  Array.from({ length: count }, () => ({
    time: faker.lorem.word(5),
    isAvailable: faker.datatype.boolean(),
  }));

export const generateQuest = (): Quest => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({
    min: 1,
    max: 3,
  }),
  previewImg: faker.image.url(),
  previewImgWebp: faker.image.url(),
  level: getRandomLevel(),
  type: getRandomTheme(),
  peopleMinMax: [
    faker.number.int({ min: 1, max: 10 }),
    faker.number.int({ min: 1, max: 10 }),
  ],
  description: faker.lorem.paragraphs({ min: 1, max: 3 }),
  coverImg: faker.image.url(),
  coverImgWebp: faker.image.url(),
});

export const generateQuestPreview = (): QuestPreview => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({
    min: 1,
    max: 3,
  }),
  previewImg: faker.image.url(),
  previewImgWebp: faker.image.url(),
  level: getRandomLevel(),
  type: getRandomTheme(),
  peopleMinMax: [
    faker.number.int({ min: 1, max: 10 }),
    faker.number.int({ min: 1, max: 10 }),
  ],
});

export const generateQuestBookings = (count: number): QuestBooking[] =>
  Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    location: generateLocation(),
    slots: {
      today: generateSlots(5),
      tommorow: generateSlots(7),
    },
  }));
