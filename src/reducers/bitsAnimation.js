import { SET_BITS_STATE } from '../actions/types';
import { RADIX_SORT } from '../components/utils/Constants';

const initialState = {
  animations: [],
  elements: [],
  animationSpeed: 100,
  isAnimated: false,
  isSorted: false,
  elementsSize: 0,
  sortMethod: RADIX_SORT,
  start: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_BITS_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
