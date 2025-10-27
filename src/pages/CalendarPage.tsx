import React from 'react';
import YogoCalendar from '@/components/YogoCalendar';
import Title from '../components/Title'

const Timeplan: React.FC = () => {
  return (
    <>
      <Title title={'Timeplan'}></Title>
      < YogoCalendar />
    </>
  )
};

export default Timeplan;
