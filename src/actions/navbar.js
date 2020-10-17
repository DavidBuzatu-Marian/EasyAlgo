import { SET_NAV_STATE } from './types';

export const setNavState = (state) => async (dispatch) => {
  dispatch({
    type: SET_NAV_STATE,
    payload: state,
  });
};
