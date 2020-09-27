import store from '../store';
import { setAnimationState } from '../actions/animation';
import { getInsertionSortAnimations } from '../algorithms/InsertionSort';
import { animateBars } from './animateBars';

export const animateInsertionSort = (
  canvasState,
  setCanvasState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getInsertionSortAnimations(auxiliaryArray);
  store.dispatch(
    setAnimationState({
      animations,
      isAnimated: true,
      isSorted: false,
    })
  );
  const animationsLength = animations.length;
  let nrTimeout = 0;
  for (let i = 0; i < animationsLength; i++) {
    animateBars(
      canvasState,
      setCanvasState,
      { animations, auxiliaryArray, animationSpeed, animationsLength },
      i,
      nrTimeout++,
      timeoutArr
    );
  }
};
