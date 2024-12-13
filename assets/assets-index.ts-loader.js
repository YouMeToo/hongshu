(function () {
  'use strict';

  const injectTime = performance.now();
  (async () => {
    const {
      onExecute
    } = await import(/* @vite-ignore */
    chrome.runtime.getURL(`\u006a\u0073\u002f\u006a\u0073\u002d\u0069\u006e\u0064\u0065\u0078\u002e\u0074\u0073\u002e\u006a\u0073`));
    onExecute?.({
      perf: {
        injectTime,
        loadTime: performance.now() - injectTime
      }
    });
  })().catch(console.error);
})();