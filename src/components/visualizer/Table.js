import React, { useEffect, useState } from 'react';
import { createBitDivs, initBits, pad } from '../../hooks/initBits';
import { RADIX_SORT, RADIX_STRAIGHT } from '../utils/Constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR, SORTED_COLOR } from '../../hooks/colors';
import { setBitsState } from '../../actions/bitsAnimation';
import { animateRadixSort } from '../../hooks/radixSort';
import { animateRadixStraightSort } from '../../hooks/radixStraight';

const Table = ({ bitsAnimation, setBitsState }) => {
  let { elements, sortMethod, isSorted, start, elementsSize } = bitsAnimation;

  const [tableState, setTableState] = useState({
    timeoutArr: [],
  });

  const { timeoutArr } = tableState;

  useEffect(() => {
    if (start && elementsSize > 0) {
      switch (sortMethod) {
        // case RADIX_SORT:
        //   animateRadixSort(
        //     tableState,
        //     setTableState,
        //     timeoutArr,
        //     bitsAnimation
        //   );
        //   break;
        case RADIX_STRAIGHT:
          animateRadixStraightSort(
            tableState,
            setTableState,
            timeoutArr,
            bitsAnimation
          );
          break;
        default:
          break;
      }
    } else {
      clearAllTimeouts();
      let elements = initBits(10);
      setBitsState({
        elements,
        isSorted: false,
        isAnimated: false,
        elementsSize: 10,
      });
    }
    // eslint-disable-next-line
  }, [elementsSize, start]);

  const clearAllTimeouts = () => {
    while (timeoutArr.length > 0) {
      clearTimeout(timeoutArr.pop());
    }
    setTableState({ timeoutArr: [] });
  };

  return (
    <div className='container-bits'>
      {/* {sortMethod === RADIX_SORT ? (
        elements.map((value, idx) => (
          <div
            className='array-binary col-12'
            key={idx}
            name={value}
            style={{
              backgroundColor: isSorted ? SORTED_COLOR : PRIMARY_COLOR,
            }}
          >
            {createBitDivs(pad(value.toString(2), 6), isSorted)}
          </div>
        ))
      ) : ( */}
      <div className='container'>
        <div className='row'>
          <div className='table'>
            {elements.map((value, idx) => (
              <p
                className={`array-binary text-center ` + value}
                key={idx}
                name={value}
                style={{
                  backgroundColor: isSorted ? SORTED_COLOR : PRIMARY_COLOR,
                }}
              >
                {pad(value.toString(2), 6)}
              </p>
            ))}
          </div>
          <div className='table'>
            <table className='table table-bordered table-dark'>
              <thead>
                <tr>
                  <th scope='col'>Mask</th>
                  <th scope='col'>Numbers</th>
                  <th scope='col'>Round</th>
                </tr>
              </thead>
              <tbody>
                <tr id='row_0'>
                  <th scope='row'>00</th>
                  <td id='col_0' className='col_0 table_row'></td>
                </tr>
                <tr id='row_1'>
                  <th scope='row'>01</th>
                  <td id='col_1' className='col_1 table_row'></td>
                </tr>
                <tr id='row_2'>
                  <th scope='row'>10</th>
                  <td id='col_2' className='col_2 table_row'></td>
                </tr>
                <tr id='row_3'>
                  <th scope='row'>11</th>
                  <td id='col_3' className='col_3 table_row'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  bitsAnimation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bitsAnimation: state.bitsAnimation,
});

export default connect(mapStateToProps, { setBitsState })(Table);
