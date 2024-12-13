!function polyfill() {
  const e = document.createElement(`\u006c\u0069\u006e\u006b`).relList;
  if (!(e && e.supports && e.supports(`\u006d\u006f\u0064\u0075\u006c\u0065\u0070\u0072\u0065\u006c\u006f\u0061\u0064`))) {
    for (const e of document.querySelectorAll(`\u006c\u0069\u006e\u006b\u005b\u0072\u0065\u006c\u003d\u0022\u006d\u006f\u0064\u0075\u006c\u0065\u0070\u0072\u0065\u006c\u006f\u0061\u0064\u0022\u005d`)) processPreload(e);
    new MutationObserver(e => {
      for (const r of e) if (`\u0063\u0068\u0069\u006c\u0064\u004c\u0069\u0073\u0074` === r.type) for (const e of r.addedNodes) `\u004c\u0049\u004e\u004b` === e.tagName && `\u006d\u006f\u0064\u0075\u006c\u0065\u0070\u0072\u0065\u006c\u006f\u0061\u0064` === e.rel && processPreload(e);
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
  }
  function processPreload(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = function getFetchOpts(e) {
      const r = {};
      return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), `\u0075\u0073\u0065\u002d\u0063\u0072\u0065\u0064\u0065\u006e\u0074\u0069\u0061\u006c\u0073` === e.crossOrigin ? r.credentials = `\u0069\u006e\u0063\u006c\u0075\u0064\u0065` : `\u0061\u006e\u006f\u006e\u0079\u006d\u006f\u0075\u0073` === e.crossOrigin ? r.credentials = `\u006f\u006d\u0069\u0074` : r.credentials = `\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e`, r;
    }(e);
    fetch(e.href, r);
  }
}();
const _export_sfc = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [t, s] of r) o[t] = s;
  return o;
};
export { _export_sfc as _ };