import { SET_ANIMATION_STATE } from '../actions/types';
import { MERGE_SORT } from '../components/utils/Constants';

const initialState = {
  animations: [],
  elements: [],
  animationSpeed: 1,
  isAnimated: false,
  isSorted: false,
  elementsSize: 0,
  sortType: 1,
  sortMethod: MERGE_SORT,
  start: false,
  barWidth: 15,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ANIMATION_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
