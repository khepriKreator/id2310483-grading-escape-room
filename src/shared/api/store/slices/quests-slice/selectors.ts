import { filterQuests } from '../../../../../utils/functions';
import {
  LevelFilters,
  ThemeFilters,
} from '../../../../components/filters/const';
import { SlicesNames } from '../../../const';
import { QuestPreview } from '../../../models';
import { State } from '../../store-types';

export const getQuests = (
  state: Pick<State, SlicesNames.Quests>,
): QuestPreview[] => state[SlicesNames.Quests].quests;

export const getFilteredQuests = (
  state: Pick<State, SlicesNames.Quests>,
): QuestPreview[] => filterQuests(state);

export const getLevelFilter = (
  state: Pick<State, SlicesNames.Quests>,
): LevelFilters => state[SlicesNames.Quests].level;

export const getThemeFilter = (
  state: Pick<State, SlicesNames.Quests>,
): ThemeFilters => state[SlicesNames.Quests].theme;

export const getIsQuestsFetching = (
  state: Pick<State, SlicesNames.Quests>,
): boolean => state[SlicesNames.Quests].isFetching;
