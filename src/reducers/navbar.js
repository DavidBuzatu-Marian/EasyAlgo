import { SET_NAV_STATE } from '../actions/types';
import {
  MERGE_SORT,
  MERGE_SORT_CODE,
  MERGE_SORT_DESCRIPTION,
  merge_sort_extras,
  NUMBER_TYPE,
} from '../components/utils/Constants';

const initialState = {
  activeCategory: NUMBER_TYPE,
  activeMethod: MERGE_SORT,
  activeDescription: MERGE_SORT_DESCRIPTION,
  activeCode: MERGE_SORT_CODE,
  activeExtras: merge_sort_extras,
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
