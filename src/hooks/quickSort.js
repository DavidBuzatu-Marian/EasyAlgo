import store from '../store';
import { setAnimationState } from '../actions/animation';
import { getQuickSortAnimations } from '../algorithms/QuickSort';
import { animateBars } from './animateBars';
export const animateQuickSort = (
  canvasState,
  setCanvasState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getQuickSortAnimations(auxiliaryArray);
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
      timeoutArr,
      true
    );
  }
};
