import store from '../store';
import { setAnimationState } from '../actions/animation';
import { getMergeSortAnimations } from '../algorithms/MergeSort';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './colors';
export const animateMergeSort = (
  canvasState,
  setCanvasState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getMergeSortAnimations(auxiliaryArray);
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
    const elementsBar = document.getElementsByClassName('elements-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = elementsBar[barOneIdx].style;
      const barTwoStyle = elementsBar[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setCanvasState({
        ...canvasState,
        timeoutArr: [
          ...timeoutArr,
          setTimeout(() => {
            nrTimeout++;
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
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
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = elementsBar[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            const barPivot = document.getElementsByName(`${newHeight}`)[0];
            barPivot.setAttribute(
              'name',
              elementsBar[barOneIdx].getAttribute('name')
            );
            elementsBar[barOneIdx].setAttribute('name', `${newHeight}`);
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
  }
};
