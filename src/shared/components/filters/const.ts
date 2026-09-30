import { filtersIcons } from './components/icons/index';

export enum ThemeFilters {
  AllQuests = 'ALL_QUESTS',
  Adventures = 'ADVENTURES',
  Horrors = 'HORRORS',
  Mystic = 'MYSTIC',
  Detective = 'DETECTIVE',
  SciFi = 'SCI_FI',
}

export enum LevelFilters {
  Any = 'ANY',
  Easy = 'EASY',
  Medium = 'MEDIUM',
  Hard = 'HARD',
}

export type FiltersOption = {
  value: ThemeFilters | LevelFilters;
  label: string;
  icon?: JSX.Element;
}

export const ThemeFiltersOptions: FiltersOption[] = [
  {
    value: ThemeFilters.AllQuests,
    label: 'Все квесты',
    icon: filtersIcons.AllQuestsIcon()
  },
  {
    value: ThemeFilters.Adventures,
    label: 'Приключения',
    icon: filtersIcons.AdventuresIcon()
  },
  {
    value: ThemeFilters.Horrors,
    label: 'Ужасы',
    icon: filtersIcons.HorrorsIcon()
  },
  {
    value: ThemeFilters.Mystic,
    label: 'Мистика',
    icon: filtersIcons.MysticIcon()
  },
  {
    value: ThemeFilters.Detective,
    label: 'Детектив',
    icon: filtersIcons.DetectiveIcon()
  },
  {
    value: ThemeFilters.SciFi,
    label: 'Sci-fi',
    icon:  filtersIcons.SciFiIcon()
  },
];

export const LevelFiltersOptions: FiltersOption[] = [
  {
    value: LevelFilters.Any,
    label: 'Любой'
  },
  {
    value: LevelFilters.Easy,
    label: 'Легкий'
  },
  {
    value: LevelFilters.Medium,
    label: 'Средний'
  },
  {
    value: LevelFilters.Hard,
    label: 'Сложный'
  }
];

