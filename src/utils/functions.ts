import { SlicesNames } from '../shared/api/const';
import { QuestPreview } from '../shared/api/models';
import { State } from '../shared/api/store/store-types';
import { LevelFilters, ThemeFilters } from '../shared/components/filters/const';

export const getFilteredQuests = (state: Pick<State, SlicesNames.Quests>): QuestPreview[] => {
  const { quests, theme, level } = state[SlicesNames.Quests];
  let filteredQuests: QuestPreview[] = [];

  if (theme !== ThemeFilters.AllQuests) {
    filteredQuests = quests.filter((quest) => quest.type === theme);
  }

  if (level !== LevelFilters.Any) {
    filteredQuests = quests.filter((quest) => quest.level === level);
  }

  return filteredQuests;
};
