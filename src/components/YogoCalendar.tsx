import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

const YogoCalendar: React.FC = () => {
  const calendarRef = useYogoWidget('.yogo-calendar');

  // This div is the placeholder that will temporarily host the live widget.
  return <div ref={calendarRef} style={{ minHeight: '800px' }} />;
};

export default YogoCalendar;