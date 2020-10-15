import React from 'react';

const ModalButtons = ({ externals }) => {
  return (
    <div className='modal-container-buttons'>
      {externals.map((ext, id) => {
        <a key={id} href={ext}>
          <button className='btn btn-modal'>External link {id}</button>
        </a>;
      })}
    </div>
  );
};

export default ModalButtons;
