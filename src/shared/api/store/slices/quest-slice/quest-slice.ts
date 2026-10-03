import { createSlice } from '@reduxjs/toolkit';
import { SlicesNames } from '../../../const';
import { fetchQuest } from '../../api-actions';
import { Quest } from '../../../models';

type QuestState = {
  quest: Quest | null;
  isFetching: boolean;
}

const initialState: QuestState = {
  quest: null,
  isFetching: false,
};

export const questSlice = createSlice({
  name: SlicesNames.Quest,
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchQuest.pending, (state) => {
      state.isFetching = true;
    })
      .addCase(fetchQuest.fulfilled, (state, {payload}) => {
        state.isFetching = false;
        state.quest = payload;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.isFetching = false;
      });
  }
});
