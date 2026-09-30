import { Location, Quest, QuestPreview } from '../shared/api/models.ts';
import { faker } from '@faker-js/faker';

export const generateQuest = (): Quest => (
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence({
      min: 1,
      max: 3
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
  }
);

export const generateQuestPreview = ({id, title, previewImg, previewImgWebp, level, type, peopleMinMax}: Quest): QuestPreview => (
  {
    id,
    title,
    previewImg,
    previewImgWebp,
    level,
    type,
    peopleMinMax
  }
);

export const generateLocation = (): Location => ({
  address: faker.location.streetAddress(),
  coords: [faker.location.latitude(), faker.location.longitude()]
});
