import React from 'react';
import Canvas from './Canvas';
import ContainerHeader from './ContainerHeader';
import Illustration from '../../images/undraw_visual_data_b1wx.svg';
const NumbersVisualizer = () => {
  return (
    <div className='container'>
      <ContainerHeader Illustration={Illustration}></ContainerHeader>
      <div className='container-numbers'>
        <Canvas></Canvas>
      </div>
    </div>
  );
};

export default NumbersVisualizer;
