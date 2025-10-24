import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

const YogoCalendar: React.FC = () => {
  // Use the hook to render the 'calendar' widget into the '.yogo-calendar' div
  useYogoWidget('.yogo-calendar', 'calendar');

  // This div is the target where the Yogo script will render the calendar.
  return <div className="yogo-calendar" style={{ minHeight: '800px' }} />;
};

export default YogoCalendar;