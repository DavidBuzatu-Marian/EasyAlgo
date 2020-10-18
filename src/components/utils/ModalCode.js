import React, { Fragment } from 'react';
import Gist from 'super-react-gist';

const ModalCode = ({ code }) => {
  return (
    <Fragment>
      <p className='extra'>
        *Code is from various sources, such as: AlgoExpert, Wikipedia,
        GeeksForGeeks
      </p>
      <Gist url={code} />
    </Fragment>
  );
};

export default ModalCode;
