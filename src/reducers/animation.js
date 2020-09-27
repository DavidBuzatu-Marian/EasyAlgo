import { SET_ANIMATION_STATE } from '../actions/types';

const initialState = {
  animations: [],
  elements: [],
  animationSpeed: 10,
  isAnimating: false,
  isSorted: false,
  elementsSize: 0,
  sortType: 1,
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
