import React from 'react';
import YogoEvents from '@/components/YogoEvents';
import Title from '../components/Title'

const Events: React.FC = () => {
  return (
    <>
      <Title title={'Events'}></Title>;
      < YogoEvents />
    </>
  )
};

export default Events;
