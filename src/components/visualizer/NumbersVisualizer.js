import React from 'react';
import Canvas from './Canvas';
import ContainerHeader from './ContainerHeader';

const NumbersVisualizer = () => {
  return (
    <div className='container'>
      <ContainerHeader></ContainerHeader>
      <div className='container-numbers'>
        <Canvas></Canvas>
      </div>
    </div>
  );
};

export default NumbersVisualizer;
