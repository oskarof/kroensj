import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

const LandingPage: React.FC = () => {
  const calendarRef = useYogoWidget('.yogo-calendar');
  const eventsRef = useYogoWidget('.yogo-events');

  return (
    <div>
      <h1>Landing page</h1>
      <h2>Calendar</h2>
      <div ref={calendarRef}></div>
      <h2>Events</h2>
      <div ref={eventsRef}></div>
    </div>
  );
};

export default LandingPage;
