import { SET_BITS_STATE } from './types';

export const setBitsState = (state) => async (dispatch) => {
  dispatch({
    type: SET_BITS_STATE,
    payload: state,
  });
};
