

import React, { useEffect } from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

// Utility function to hide all elements with a given class name inside a container
function useHideElementsByClass(ref: React.RefObject<HTMLElement | null>, className: string) {
  useEffect(() => {
    if (!ref.current) return;
    const hideElements = () => {
      if (!ref.current) return;
      const elements = ref.current.querySelectorAll(`.${className}`);
      elements.forEach((el) => {
        (el as HTMLElement).setAttribute('style', 'display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; overflow: hidden !important;');
      });
    };
    hideElements();
    const observer = new MutationObserver(hideElements);
    observer.observe(ref.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ref, className]);
}

const YogoCalendar: React.FC = () => {
  const calendarRef = useYogoWidget('.yogo-calendar');
  useHideElementsByClass(calendarRef, 'header__logo--client');
  return <div ref={calendarRef} style={{ minHeight: '800px' }} />;
};

export default YogoCalendar;