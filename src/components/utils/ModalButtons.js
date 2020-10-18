import React from 'react';

const ModalButtons = ({ extras }) => {
  return (
    <div className='modal-container-buttons'>
      {extras.map((ext, id) => (
        <a key={id} href={ext} target='_blank' rel='noopener noreferrer'>
          <button className='btn btn-modal'>External link {id + 1}</button>
        </a>
      ))}
    </div>
  );
};

export default ModalButtons;
