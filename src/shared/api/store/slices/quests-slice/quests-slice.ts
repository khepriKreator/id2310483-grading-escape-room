import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LevelFilters, ThemeFilters } from '../../../../components/filters/const';
import { SlicesNames } from '../../../const';
import { fetchQuests } from '../../api-actions';
import { QuestPreview } from '../../../models';

type QuestsState = {
  theme: ThemeFilters;
  level: LevelFilters;
  quests: QuestPreview[];
  isFetching: boolean;
}

const initialState: QuestsState = {
  theme: ThemeFilters.AllQuests,
  level: LevelFilters.Any,
  quests: [],
  isFetching: false,
};

export const questsSlice = createSlice({
  name: SlicesNames.Quests,
  initialState,
  reducers: {
    setThemeFilter(state, {payload}: PayloadAction<ThemeFilters>) {
      state.theme = payload;
    },
    setLevelFilter(state, {payload}: PayloadAction<LevelFilters>) {
      state.level = payload;
    },
  },
  extraReducers: ({addCase}) => {
    addCase(fetchQuests.pending, (state) => {
      state.isFetching = true;
    })
      .addCase(fetchQuests.fulfilled, (state, {payload}) => {
        state.isFetching = false;
        state.quests = payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.isFetching = false;
      });
  }
});

export const {setThemeFilter, setLevelFilter} = questsSlice.actions;
