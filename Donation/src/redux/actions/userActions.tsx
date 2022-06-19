export const SET_DATA = 'USER_SET_USER_DATA';
export const RESET_DATA = 'USER_RESET_USER_DATA';

export const setUserData = (data: any) => ({
  type: SET_DATA,
  data: data,
});

export const reset = () => ({
  type: RESET_DATA,
});
