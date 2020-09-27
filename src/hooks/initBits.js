import React from 'react';
import { SORTED_COLOR } from './colors';
import { randomIntegerFromInterval } from './initArr';
/* SPECIAL THANKS TO POINTY FROM  STACK OVERFLOW
  https://stackoverflow.com/a/10073788/11023871
  */
export const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

export const createBitDivs = (bits, isSorted) => {
  let ps = [];
  var keys = 0;
  for (let bit of bits) {
    ps.push(
      <p
        key={keys++}
        name={bits + pad(bit, keys)}
        className='col-2 bits'
        style={{
          backgroundColor: isSorted && SORTED_COLOR,
        }}
      >{`${bit}`}</p>
    );
  }
  return ps;
};

export const initBits = (elementsSize) => {
  const elements = [];
  for (let i = 0; i < elementsSize; i++) {
    let value = randomIntegerFromInterval(1, 63);
    !elements.includes(value) ? elements.push(value) : i--;
  }

  return elements;
};
