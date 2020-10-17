import { SET_NAV_STATE } from '../actions/types';
import { MERGE_SORT, NUMBER_TYPE } from '../components/utils/Constants';

const initialState = {
  activeCategory: NUMBER_TYPE,
  activeMethod: MERGE_SORT,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAV_STATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
