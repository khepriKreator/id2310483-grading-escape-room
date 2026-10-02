export const TOKEN_KEY_NAME = 'escape-room-token';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(TOKEN_KEY_NAME) ?? '';

export const setToken = (token: Token) => localStorage.setItem(TOKEN_KEY_NAME, token);

export const dropToken = () => localStorage.removeItem(TOKEN_KEY_NAME);
