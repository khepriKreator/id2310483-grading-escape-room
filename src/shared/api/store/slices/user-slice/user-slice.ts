import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, SlicesNames } from '../../../const';
import { checkAuth, login, logout } from '../../api-actions';

type UserState = {
  authStatus: AuthStatus;
  email: string | null;
}

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  email: '',
};

export const userSlice = createSlice({
  name: SlicesNames.User,
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(checkAuth.fulfilled, (state, {payload}) => {
      state.email = payload;
      state.authStatus = AuthStatus.Auth;
    })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthStatus.No_Auth;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.email = payload;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthStatus.No_Auth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.email = null;
        state.authStatus = AuthStatus.No_Auth;
      });
  }
});
