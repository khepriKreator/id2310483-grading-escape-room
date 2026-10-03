import { SlicesNames } from '../../../const';
import { Quest } from '../../../models';
import { State } from '../../store-types';

export const getQuest = (state: Pick<State, SlicesNames.Quest>): Quest | null => state[SlicesNames.Quest].quest;

export const getIsQuestFetching = (state: Pick<State, SlicesNames.Quest>): boolean => state[SlicesNames.Quest].isFetching;
