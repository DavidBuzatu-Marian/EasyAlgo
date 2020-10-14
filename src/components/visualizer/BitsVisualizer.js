import React from 'react';
import ContainerHeader from './ContainerHeader';
import Table from './Table';
import Illustration from '../../images/undraw_sorting_thoughts_6d48.svg';

const BitsVisualizer = () => {
  return (
    <div className='container'>
      <ContainerHeader Illustration={Illustration}></ContainerHeader>
      <Table></Table>
    </div>
  );
};

export default BitsVisualizer;
