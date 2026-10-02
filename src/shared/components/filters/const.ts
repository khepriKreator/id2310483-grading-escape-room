import { filtersIcons } from './components/icons/index';

export enum ThemeFilters {
  AllQuests = 'all_quests',
  Adventures = 'adventures',
  Horrors = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum LevelFilters {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
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
] as const;

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
] as const;

