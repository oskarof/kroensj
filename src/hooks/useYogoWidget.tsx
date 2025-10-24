import { useEffect } from 'react';

// Define types for the global window properties
declare global {
  interface Window {
    YOGO_APP_SERVER: string;
    YOGO_CLIENT_ID: string;
    YOGO_WIDGETS_LOADED?: boolean; // Flag to check if scripts are loaded
    renderYogoWidget: (selector: string, widget: string) => void;
  }
}

// The main loader function, separated for clarity
const loadYogoScripts = (callback: () => void) => {
  // 1. Set the required global configuration variables
  window.YOGO_APP_SERVER = 'kroensj.yogo.no';
  window.YOGO_CLIENT_ID = '1413';

  // 2. Replicate the dynamic loading logic
  const baseUrl = `https://${window.YOGO_APP_SERVER}/widgets/`;
  const xhr = new XMLHttpRequest();

  xhr.onloadend = function () {
    if (xhr.status !== 200) {
      console.error('Failed to load Yogo filelist.json');
      return;
    }
    try {
      const filelist = JSON.parse(xhr.responseText);
      const head = document.getElementsByTagName('head')[0];

      // Load CSS files
      filelist.css.forEach(function (file: string) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = baseUrl + file;
        head.appendChild(link);
      });

      // Load JS files sequentially
      const loadScript = (index: number) => {
        if (index >= filelist.js.length) {
          // All scripts are loaded
          window.YOGO_WIDGETS_LOADED = true;
          callback();
          return;
        }

        const script = document.createElement('script');
        script.src = baseUrl + filelist.js[index];
        script.onload = () => loadScript(index + 1);
        script.onerror = () => console.error(`Failed to load script: ${filelist.js[index]}`);
        head.appendChild(script);
      };

      loadScript(0); // Start loading the first script
    } catch (e) {
      console.error('Error parsing Yogo filelist.json', e);
    }
  };

  xhr.open('GET', `${baseUrl}filelist.json?cachebuster=${Date.now()}`);
  xhr.send();
};

// The custom hook
export const useYogoWidget = (selector: string, widget: string) => {
  useEffect(() => {
    const renderWidget = () => {
      if (window.renderYogoWidget) {
        window.renderYogoWidget(selector, widget);
      } else {
        // This might happen if the component mounts before scripts are fully ready
        setTimeout(() => renderWidget(), 100);
      }
    };

    if (window.YOGO_WIDGETS_LOADED) {
      // If scripts are already loaded, just render the widget
      renderWidget();
    } else {
      // Otherwise, load the scripts and then render
      loadYogoScripts(renderWidget);
    }
  }, [selector, widget]);
};