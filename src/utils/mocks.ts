import {
  Location,
  Quest,
  QuestBooking,
  QuestPreview,
  Slot,
} from '../shared/api/models.ts';
import { ContactsLocation } from '../shared/api/const.ts';
import { faker } from '@faker-js/faker';

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
  level: faker.lorem.word(),
  type: faker.lorem.word(),
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
  level: faker.lorem.word(),
  type: faker.lorem.word(),
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
