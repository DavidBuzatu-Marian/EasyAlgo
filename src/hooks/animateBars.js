import { PIVOT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from './colors';
import store from '../store';
import { setAnimationState } from '../actions/animation';

export const animateBars = (
  canvasState,
  setCanvasState,
  animationObj,
  i,
  nrTimeout,
  timeoutArr,
  isPivottedSort = false,
  primary_color = PRIMARY_COLOR,
  secondary_color = SECONDARY_COLOR,
  pivot_color = PIVOT_COLOR
) => {
  let {
    animations,
    auxiliaryArray,
    animationSpeed,
    animationsLength,
  } = animationObj;
  const elementsBars = document.getElementsByClassName('elements-bar');
  const [barOneIdx, indexOrHeight, isComparisson] = animations[i];
  if (isComparisson === 1) {
    const barOneStyle = elementsBars[barOneIdx].style;
    const barTwoStyle = elementsBars[indexOrHeight].style;
    const color = i % 2 === 0 ? secondary_color : primary_color;
    const pivotColor = i % 2 === 0 ? pivot_color : primary_color;
    setCanvasState({
      ...canvasState,
      timeoutArr: [
        ...timeoutArr,
        setTimeout(() => {
          nrTimeout++;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = isPivottedSort ? pivotColor : color;
          if (nrTimeout === animationsLength) {
            store.dispatch(
              setAnimationState({
                isAnimated: false,
                elements: auxiliaryArray,
                isSorted: true,
              })
            );
          }
        }, i * animationSpeed),
      ],
    });
  } else {
    setCanvasState({
      ...canvasState,
      timeoutArr: [
        ...timeoutArr,
        setTimeout(() => {
          nrTimeout++;
          const barOneStyle = elementsBars[barOneIdx].style;
          barOneStyle.height = `${indexOrHeight}px`;
          const barPivot = document.getElementsByName(`${indexOrHeight}`)[0];
          barPivot.setAttribute(
            'name',
            elementsBars[barOneIdx].getAttribute('name')
          );
          elementsBars[barOneIdx].setAttribute('name', `${indexOrHeight}`);
          if (nrTimeout === animationsLength) {
            store.dispatch(
              setAnimationState({
                isAnimated: false,
                elements: auxiliaryArray,
                isSorted: true,
              })
            );
          }
        }, i * animationSpeed),
      ],
    });
  }
};
