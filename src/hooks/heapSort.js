import store from '../store';
import { setAnimationState } from '../actions/animation';
import { getHeapSortAnimations } from '../algorithms/HeapSort';
import { animateBars } from './animateBars';

export const animateHeapSort = (
  canvasState,
  setCanvasState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getHeapSortAnimations(auxiliaryArray);
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
