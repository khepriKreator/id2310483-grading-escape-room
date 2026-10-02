import { AuthStatus, SlicesNames } from '../../../const';
import { State } from '../../store-types';

export const getAuthStatus = (state: Pick<State, SlicesNames.User>): AuthStatus => state[SlicesNames.User].authStatus;

export const getEmail = (state: Pick<State, SlicesNames.User>): string | null => state[SlicesNames.User].email;
