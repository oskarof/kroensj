import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

const YogoEvents: React.FC = () => {
  // Use the hook to render the 'events' widget into the '.yogo-events' div
  useYogoWidget('.yogo-events', 'events');

  // This div is the target for the events widget.
  return <div className="yogo-events" style={{ minHeight: '800px' }} />;
};

export default YogoEvents;