import { SlicesNames } from '../shared/api/const';
import { QuestPreview } from '../shared/api/models';
import { State } from '../shared/api/store/store-types';
import { LevelFilters, ThemeFilters } from '../shared/components/filters/const';

export const filterQuests = (state: Pick<State, SlicesNames.Quests>): QuestPreview[] => {
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
