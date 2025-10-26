import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

const YogoEvents: React.FC = () => {
  const eventsRef = useYogoWidget('.yogo-events');

  // This div is the placeholder that will temporarily host the live widget.
  return <div ref={eventsRef} style={{ minHeight: '800px' }} />;
};

export default YogoEvents;