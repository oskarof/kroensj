import React from 'react';
import { useYogoWidget } from '../hooks/useYogoWidget';

// Import the hook from YogoCalendar (or move to a shared utils file if reused more)
function useHideElementsByClass(ref: React.RefObject<HTMLElement | null>, className: string) {
  React.useEffect(() => {
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

const YogoEvents: React.FC = () => {
  const eventsRef = useYogoWidget('.yogo-events');
  useHideElementsByClass(eventsRef, 'header__logo--client');
  return <div ref={eventsRef} style={{ minHeight: '800px' }} />;
};

export default YogoEvents;