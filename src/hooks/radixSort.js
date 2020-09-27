import store from '../store';
import { setBitsState } from '../actions/bitsAnimation';
import { getRadixSortAnimations } from '../algorithms/RadixSort';
import { BIT_COLOR, PRIMARY_COLOR } from './colors';
export const animateRadixSort = (
  tableState,
  setTableState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getRadixSortAnimations(auxiliaryArray);
  store.dispatch(
    setBitsState({
      animations,
      isAnimated: true,
      isSorted: false,
    })
  );
  const animationsLength = animations.length;
  let nrTimeout = 0;
  for (let i = 0; i < animationsLength; i++) {
    const [NumberIdx, nameOrIndex, isComparisson, nameOrIndexJ] = animations[i];

    if (isComparisson === 1) {
      setTableState({
        ...tableState,
        timeoutArr: [
          ...timeoutArr,
          setTimeout(() => {
            const arrayIndividualBitsI = document.getElementsByName(
              nameOrIndex
            )[0];
            const BitStyleI = arrayIndividualBitsI.style;

            const arrayIndividualBitsJ = document.getElementsByName(
              nameOrIndexJ
            )[0];
            const BitStyleJ = arrayIndividualBitsJ.style;

            const colorBitsI = i % 2 === 0 ? BIT_COLOR : PRIMARY_COLOR;
            const colorBitsJ = i % 2 === 0 ? BIT_COLOR : PRIMARY_COLOR;
            nrTimeout++;
            BitStyleI.backgroundColor = colorBitsI;
            BitStyleJ.backgroundColor = colorBitsJ;
          }, i * animationSpeed),
        ],
      });
    } else {
      setTableState({
        ...tableState,
        timeoutArr: [
          ...timeoutArr,
          setTimeout(() => {
            nrTimeout++;
            const arrayBits = document.getElementsByClassName('array-binary');
            const Number2Div = document.getElementsByName(nameOrIndex)[0];
            const Number1Div = arrayBits[NumberIdx];
            const Number2DivName = Number2Div.getAttribute('name');
            Number2Div.setAttribute('name', Number1Div.getAttribute('name'));
            Number1Div.setAttribute('name', Number2DivName);
            /* swap innet HTML */
            const innerHTML = Number1Div.innerHTML;
            Number1Div.innerHTML = Number2Div.innerHTML;
            Number2Div.innerHTML = innerHTML;
            if (nrTimeout === animationsLength) {
              store.dispatch(
                setBitsState({
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
