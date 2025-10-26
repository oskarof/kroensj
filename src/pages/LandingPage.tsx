import React from 'react';
import { Hero } from "../components/Hero"
// import { useYogoWidget } from '../hooks/useYogoWidget';

const LandingPage: React.FC = () => {
  // const calendarRef = useYogoWidget('.yogo-calendar');
  // const eventsRef = useYogoWidget('.yogo-events');

  return (
    <>
      < Hero />
      {/* <h2>Calendar</h2>
      <div ref={calendarRef}></div>
      <h2>Events</h2>
      <div ref={eventsRef}></div> */}
    </>
  );
};

export default LandingPage;
