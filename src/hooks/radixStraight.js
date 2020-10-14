import store from '../store';
import { setBitsState } from '../actions/bitsAnimation';
import { getRadixStraightAnimations } from '../algorithms/RadixStraight';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './colors';
import { pad } from '../hooks/initBits';

export const animateRadixStraightSort = (
  tableState,
  setTableState,
  timeoutArr,
  animation
) => {
  const animationSpeed = animation.animationSpeed;
  const auxiliaryArray = animation.elements.slice();
  const animations = getRadixStraightAnimations(auxiliaryArray);
  store.dispatch(
    setBitsState({
      animations,
      isAnimated: true,
      isSorted: false,
    })
  );
  const animationsLength = animations.length;
  let nrTimeout = 0;
  let reset = 1;
  var counter = 0;
  for (let i = 0; i < animationsLength; i++) {
    const [key, value, isTableMutation] = animations[i];
    const paragraphElements = document.getElementsByClassName('array-binary');
    if (isTableMutation) {
      setTableState({
        ...tableState,
        timeoutArr: [
          ...timeoutArr,
          setTimeout(() => {
            nrTimeout++;
            if (reset) {
              resetTable();
              reset = 0;
              counter = 0;
            }
            if (i % 2 === 0) {
              let tdOfNumber = document.getElementById('col_' + key);
              let tdInnerHTML = tdOfNumber.innerHTML;
              tdOfNumber.innerHTML =
                tdInnerHTML + pad(value.toString(2), 6) + ', ';
            }
            let trOfKey = document.getElementById('row_' + key);
            let divOfNumber = document.getElementsByName(value)[0];
            const color = i % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;

            trOfKey.style.backgroundColor = color;
            divOfNumber.style.backgroundColor = color;
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
            if (i % 2 === 0) {
              const tdOfNumber = document.getElementById('col_' + key);
              const tdInnerHTML = tdOfNumber.innerHTML;
              const tdInnerHTMLText = tdInnerHTML.substr(8);
              tdOfNumber.innerHTML = tdInnerHTMLText;

              const pOfNumber = paragraphElements[counter++];
              pOfNumber.setAttribute('name', value);
              const stringInnerHTML = pad(value.toString(2), 6);
              pOfNumber.innerHTML = stringInnerHTML;
            }
            if (nrTimeout === animationsLength) {
              store.dispatch(
                setBitsState({
                  isAnimated: false,
                  elements: auxiliaryArray,
                  isSorted: true,
                })
              );
            }
            reset = 1;
          }, i * animationSpeed),
        ],
      });
    }
  }
};

const resetTable = () => {
  let tdOfNumbers = document.getElementsByClassName('table_row');
  let i;
  for (i = 0; i < tdOfNumbers.length; i++) {
    tdOfNumbers[i].innerHTML = '';
  }
};
