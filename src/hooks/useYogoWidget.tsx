import { useEffect, useRef } from 'react';
import { onYogoReady } from '../services/yogoService';

// Maps the widget selector (e.g., '.yogo-calendar') to its permanent home's ID
const widgetHomeMap: { [key: string]: string } = {
  '.yogo-calendar': 'yogo-calendar-home',
  '.yogo-events': 'yogo-events-home',
};

export const useYogoWidget = (selector: string) => {
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const placeholder = placeholderRef.current; // Capture ref value for cleanup

    const moveWidgetToPlaceholder = () => {
      const widgetHomeId = widgetHomeMap[selector];
      if (!widgetHomeId) {
        console.error(`[YOGO Hook] No home found for selector: ${selector}`);
        return;
      }

      const widgetHome = document.getElementById(widgetHomeId);

      if (widgetHome && placeholder) {
        console.log(`[YOGO Hook] Moving widget from ${widgetHomeId} to placeholder.`);
        // Move the live widget from its home to the placeholder
        while (widgetHome.firstChild) {
          placeholder.appendChild(widgetHome.firstChild);
        }

        // FIX: Manually trigger a resize event to force the widget to redraw.
        // Use a small timeout to ensure the DOM has updated before the event fires.
        setTimeout(() => {
          console.log('[YOGO Hook] Dispatching resize event to correct widget layout.');
          window.dispatchEvent(new Event('resize'));
        }, 0);
      }
    };

    // Wait for the Yogo environment to be ready before trying to move the widget
    onYogoReady(moveWidgetToPlaceholder);

    return () => {
      // On cleanup, move the widget back to its permanent home
      const widgetHomeId = widgetHomeMap[selector];
      const widgetHome = document.getElementById(widgetHomeId);

      if (widgetHome && placeholder) {
        console.log(`[YOGO Hook] Moving widget from placeholder back to ${widgetHomeId}.`);
        while (placeholder.firstChild) {
          widgetHome.appendChild(placeholder.firstChild);
        }
      }
    };
  }, [selector]);

  // The ref is attached to the div that will temporarily host the widget
  return placeholderRef;
};
