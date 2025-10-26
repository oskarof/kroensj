import { useEffect } from 'react';

declare global {
  interface Window {
    YOGO_APP_SERVER: string;
    YOGO_CLIENT_ID: string;
    YOGO_WIDGETS_LOADED?: boolean;
  }
}

let areCssAndConfigLoaded = false;
const YOGO_WIDGET_SCRIPT_ID = 'yogo-widget-main-script';
const YOGO_CACHE_BUSTER_SCRIPT_ID = 'yogo-cache-buster-script';

const loadPrerequisites = (onComplete: () => void) => {
  if (areCssAndConfigLoaded) {
    console.log('[YOGO] Prerequisites already loaded.');
    onComplete();
    return;
  }

  console.log('[YOGO] Loading prerequisites (CSS and Config).');
  window.YOGO_APP_SERVER = 'kroensj.yogo.no';
  window.YOGO_CLIENT_ID = '1413';

  const baseUrl = `https://${window.YOGO_APP_SERVER}/widgets/`;
  const xhr = new XMLHttpRequest();

  xhr.onloadend = function () {
    if (xhr.status !== 200) {
      console.error(`[YOGO] Failed to load filelist.json. Status: ${xhr.status}`);
      return;
    }
    try {
      const filelist = JSON.parse(xhr.responseText);
      const head = document.getElementsByTagName('head')[0];

      filelist.css.forEach(function (file: string) {
        const cssUrl = baseUrl + file;
        if (!document.querySelector(`link[href="${cssUrl}"]`)) {
          console.log(`[YOGO] Creating <link> for CSS: ${cssUrl}`);
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = cssUrl;
          head.appendChild(link);
        }
      });
      
      areCssAndConfigLoaded = true;
      console.log('[YOGO] Prerequisites loaded successfully.');
      onComplete();
    } catch (e) {
      console.error('[YOGO] Error parsing filelist.json', e);
    }
  };

  const url = `${baseUrl}filelist.json?cachebuster=${Date.now()}`;
  xhr.open('GET', url);
  xhr.send();
};

const forceRunWidgetScript = () => {
  // TRICK: Delete the flag that the script uses to check if it has run before.
  if (window.YOGO_WIDGETS_LOADED) {
    console.log('[YOGO] Deleting YOGO_WIDGETS_LOADED flag to allow re-execution.');
    delete window.YOGO_WIDGETS_LOADED;
  }

  // Remove the old scripts to ensure they re-execute
  document.getElementById(YOGO_CACHE_BUSTER_SCRIPT_ID)?.remove();
  document.getElementById(YOGO_WIDGET_SCRIPT_ID)?.remove();
  console.log('[YOGO] Removed old widget scripts.');

  // Re-add the scripts in order. The browser will use cache but re-execute them.
  const baseUrl = `https://${window.YOGO_APP_SERVER}/widgets/`;
  const head = document.head;

  // 1. Add cache-buster-activated.js
  const cacheBusterScript = document.createElement('script');
  cacheBusterScript.id = YOGO_CACHE_BUSTER_SCRIPT_ID;
  cacheBusterScript.src = `${baseUrl}js/cache-buster-activated.js`;
  
  // 2. Add yogo-widgets.js, which runs after the first script
  const widgetScript = document.createElement('script');
  widgetScript.id = YOGO_WIDGET_SCRIPT_ID;
  widgetScript.src = `${baseUrl}js/yogo-widgets.js`;

  cacheBusterScript.onload = () => {
    console.log('[YOGO] Cache buster script re-executed.');
    head.appendChild(widgetScript);
  };
  
  widgetScript.onload = () => {
    console.log('[YOGO] Main widget script has been re-executed.');
  };

  head.appendChild(cacheBusterScript);
};

export const useYogoWidget = (selector: string) => {
  useEffect(() => {
    console.log(`[YOGO Hook] Activating for selector: '${selector}'`);
    
    loadPrerequisites(() => {
      // Once CSS/Config is ready, force the JS scripts to run.
      forceRunWidgetScript();
    });

    return () => {
      console.log(`[YOGO Hook] Cleaning up widget for selector: '${selector}'`);
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = '';
      }
    };
  }, [selector]);
};