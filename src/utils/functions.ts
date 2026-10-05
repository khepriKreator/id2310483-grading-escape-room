import { BookingFormData } from '../pages/booking-page/booking-page';
import { SlicesNames } from '../shared/api/const';
import { BookingRequestInfo, QuestPreview } from '../shared/api/models';
import { State } from '../shared/api/store/store-types';
import { LevelFilters, ThemeFilters } from '../shared/components/filters/const';

export const filterQuests = (
  state: Pick<State, SlicesNames.Quests>,
): QuestPreview[] => {
  const { quests, theme, level } = state[SlicesNames.Quests];
  let result: QuestPreview[] = [...quests];

  if (theme !== ThemeFilters.AllQuests) {
    result = result.filter((quest) => quest.type === theme);
  }

  if (level !== LevelFilters.Any) {
    result = result.filter((quest) => quest.level === level);
  }

  return result;
};

export const getLevelTranslation = (level: string): string => {
  switch (level) {
    case 'easy':
      return 'Легкий';
    case 'medium':
      return 'Средний';
    case 'hard':
      return 'Сложный';
    default:
      return '';
  }
};

export const getDateTranslation = (date: string): string => {
  switch (date) {
    case 'today':
      return 'Сегодня';
    case 'tomorrow':
      return 'Завтра';
    default:
      return '';
  }
};

export const getThemeTranslation = (theme: string): string => {
  switch (theme) {
    case 'adventures':
      return 'приключения';
    case 'horror':
      return 'ужасы';
    case 'detective':
      return 'детектив';
    case 'sci-fi':
      return 'sci-fi';
    case 'mystic':
      return 'мистика';
    default:
      return '';
  }
};

export const createBookingRequestInfo = (
  data: BookingFormData,
  placeId: string,
): BookingRequestInfo => {
  const extractedDate = data.date.split('-');
  const normalizedPhone = data.phone.replace(/\D/g, '');

  return {
    date: extractedDate[0],
    time: extractedDate[1],
    contactPerson: data.contactPerson,
    phone: normalizedPhone,
    withChildren: data.withChildren,
    peopleCount: Number.parseInt(data.peopleCount, 10),
    placeId: placeId,
  };
};
