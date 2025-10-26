declare global {
  interface Window {
    YOGO_APP_SERVER: string;
    YOGO_CLIENT_ID: string;
  }
}

let isInitialized = false;
let isInitializing = false;
const postInitCallbacks: (() => void)[] = [];

/**
 * Loads all Yogo scripts and CSS exactly once.
 */
export const initializeYogo = () => {
  if (isInitialized || isInitializing) {
    return;
  }

  console.log('[YOGO Service] Initializing Yogo Environment...');
  isInitializing = true;
  
  window.YOGO_APP_SERVER = 'kroensj.yogo.no';
  window.YOGO_CLIENT_ID = '1413';

  const baseUrl = `https://${window.YOGO_APP_SERVER}/widgets/`;
  const xhr = new XMLHttpRequest();

  xhr.onloadend = function () {
    isInitializing = false;
    if (xhr.status !== 200) {
      console.error(`[YOGO Service] Failed to load filelist.json. Status: ${xhr.status}`);
      return;
    }
    try {
      const filelist = JSON.parse(xhr.responseText);
      const head = document.getElementsByTagName('head')[0];

      filelist.css.forEach((file: string) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = baseUrl + file;
        head.appendChild(link);
      });

      const loadScript = (index: number) => {
        if (index >= filelist.js.length) {
          console.log('[YOGO Service] All scripts loaded successfully.');
          isInitialized = true;
          // Run any functions that were waiting for initialization
          postInitCallbacks.forEach(cb => cb());
          postInitCallbacks.length = 0;
          return;
        }
        const script = document.createElement('script');
        script.src = baseUrl + filelist.js[index];
        script.onload = () => loadScript(index + 1);
        head.appendChild(script);
      };
      loadScript(0);

    } catch (e) {
      console.error('[YOGO Service] Error parsing filelist.json', e);
    }
  };

  xhr.open('GET', `${baseUrl}filelist.json?cachebuster=${Date.now()}`);
  xhr.send();
};

/**
 * Executes a callback function once the Yogo environment is ready.
 * If already ready, it runs immediately. If not, it waits.
 */
export const onYogoReady = (callback: () => void) => {
  if (isInitialized) {
    callback();
  } else {
    postInitCallbacks.push(callback);
  }
};