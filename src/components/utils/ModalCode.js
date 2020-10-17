import React from 'react';
import Gist from 'super-react-gist';

const ModalCode = ({ code }) => {
  return <Gist url={code} />;
};

export default ModalCode;
