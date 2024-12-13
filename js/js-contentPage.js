var o = Object.defineProperty,
  __publicField = (e, t, n) => ((e, t, n) => t in e ? o(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n)(e, `\u0073\u0079\u006d\u0062\u006f\u006c` != typeof t ? t + `` : t, n);
import { _ as e } from "./js-_plugin-vue_export-helper.js";
import { d as t, a as n, r as i, E as a, o as s, c as r, b as u, t as l, u as c, e as g, f as h, F as d, g as S, h as p } from "./js-.pnpm.js";
console.log = (...o) => {}, console.error = (...o) => {}, console.info = (...o) => {};
const m = t(`\u0063\u006f\u0075\u006e\u0074\u0065\u0072`, {
    state: () => ({
      activatePage: `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0053\u0065\u0074\u0074\u0069\u006e\u0067`,
      XiaoHongShu_Setting: `\u007b\u007d`,
      XiaoHongShu_viewCount: 0,
      XiaoHongShu_CommentCount: 0,
      XiaoHongShu_likeCount: 0,
      XiaoHongShu_followCount: 0,
      XiaoHongShu_collectCount: 0,
      XiaoHongShu_workStatus: `\u0072\u0075\u006e`,
      loadend: !1,
      loadFromStorage_load: !1,
      isDebugMode: !1,
      operationTime: 0,
      xiaoHongShuAccountErrorTip: ``,
      clientVisitorId: ``,
      executeOperationStartTime: ``
    }),
    actions: {
      setActivatePage(o) {
        this.activatePage = o, chrome.storage.local.set({
          activatePage: this.activatePage
        });
      },
      checkLoadend() {
        let o = 0;
        return new Promise(e => {
          const t = setInterval(() => {
            (this.loadend || o > 60) && (o > 60 && console.error(`\u0063\u0068\u0065\u0063\u006b\u004c\u006f\u0061\u0064\u0065\u006e\u0064\u0020\u52a0\u8f7d\u8d85\u65f6`), clearInterval(t), e()), o++;
          }, 30);
        });
      },
      loadFromStorage() {
        this.loadFromStorage_load || (this.loadFromStorage_load = !0, chrome.storage.local.get([`\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0050\u0061\u0067\u0065`, `\u006f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0054\u0069\u006d\u0065`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0053\u0065\u0074\u0074\u0069\u006e\u0067`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0076\u0069\u0065\u0077\u0043\u006f\u0075\u006e\u0074`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0043\u006f\u0075\u006e\u0074`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u006c\u0069\u006b\u0065\u0043\u006f\u0075\u006e\u0074`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0066\u006f\u006c\u006c\u006f\u0077\u0043\u006f\u0075\u006e\u0074`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0063\u006f\u006c\u006c\u0065\u0063\u0074\u0043\u006f\u0075\u006e\u0074`, `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0077\u006f\u0072\u006b\u0053\u0074\u0061\u0074\u0075\u0073`, `\u0078\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0045\u0072\u0072\u006f\u0072\u0054\u0069\u0070`, `\u0063\u006c\u0069\u0065\u006e\u0074\u0056\u0069\u0073\u0069\u0074\u006f\u0072\u0049\u0064`, `\u0065\u0078\u0065\u0063\u0075\u0074\u0065\u004f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0053\u0074\u0061\u0072\u0074\u0054\u0069\u006d\u0065`], o => {
          console.log(`\u0072\u0065\u0073\u0075\u006c\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0050\u0061\u0067\u0065`, o), void 0 !== o.activatePage && (this.activatePage = o.activatePage), void 0 !== o.operationTime && (this.operationTime = o.operationTime), void 0 !== o.XiaoHongShu_Setting && (this.XiaoHongShu_Setting = o.XiaoHongShu_Setting), void 0 !== o.XiaoHongShu_viewCount && (this.XiaoHongShu_viewCount = o.XiaoHongShu_viewCount), void 0 !== o.XiaoHongShu_CommentCount && (this.XiaoHongShu_CommentCount = o.XiaoHongShu_CommentCount), void 0 !== o.XiaoHongShu_likeCount && (this.XiaoHongShu_likeCount = o.XiaoHongShu_likeCount), void 0 !== o.XiaoHongShu_followCount && (this.XiaoHongShu_followCount = o.XiaoHongShu_followCount), void 0 !== o.XiaoHongShu_collectCount && (this.XiaoHongShu_collectCount = o.XiaoHongShu_collectCount), void 0 !== o.XiaoHongShu_workStatus && (this.XiaoHongShu_workStatus = o.XiaoHongShu_workStatus), void 0 !== o.xiaoHongShuAccountErrorTip && (this.xiaoHongShuAccountErrorTip = o.xiaoHongShuAccountErrorTip), void 0 !== o.clientVisitorId && (this.clientVisitorId = o.clientVisitorId), void 0 !== o.executeOperationStartTime && (this.executeOperationStartTime = o.executeOperationStartTime), this.loadend = !0;
        }), chrome.storage.onChanged.addListener((o, e) => {
          for (let [t, {
            oldValue: n,
            newValue: i
          }] of Object.entries(o)) switch (console.log(`\u0053\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u006b\u0065\u0079\u0020\u0022${t}\u0022\u0020\u0069\u006e\u0020\u006e\u0061\u006d\u0065\u0073\u0070\u0061\u0063\u0065\u0020\u0022${e}\u0022\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0064\u002e`, `\u004f\u006c\u0064\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0077\u0061\u0073\u0020\u0022${n}\u0022\u002c\u0020\u006e\u0065\u0077\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0069\u0073\u0020\u0022${i}\u0022\u002e`), t) {
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0043\u006f\u0075\u006e\u0074`:
              this.XiaoHongShu_CommentCount = i;
              break;
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u006c\u0069\u006b\u0065\u0043\u006f\u0075\u006e\u0074`:
              this.XiaoHongShu_likeCount = i;
              break;
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0066\u006f\u006c\u006c\u006f\u0077\u0043\u006f\u0075\u006e\u0074`:
              this.XiaoHongShu_followCount = i;
              break;
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0063\u006f\u006c\u006c\u0065\u0063\u0074\u0043\u006f\u0075\u006e\u0074`:
              this.XiaoHongShu_collectCount = i;
              break;
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0076\u0069\u0065\u0077\u0043\u006f\u0075\u006e\u0074`:
              this.XiaoHongShu_viewCount = i;
              break;
            case `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0077\u006f\u0072\u006b\u0053\u0074\u0061\u0074\u0075\u0073`:
              this.XiaoHongShu_workStatus = i;
              break;
            case `\u0063\u006c\u0069\u0065\u006e\u0074\u0056\u0069\u0073\u0069\u0074\u006f\u0072\u0049\u0064`:
              this.clientVisitorId = i;
              break;
            case `\u0065\u0078\u0065\u0063\u0075\u0074\u0065\u004f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0053\u0074\u0061\u0072\u0074\u0054\u0069\u006d\u0065`:
              this.executeOperationStartTime = i;
          }
        }));
      }
    }
  }),
  _ = {
    style: {
      padding: `\u0032\u0030\u0070\u0078\u0020\u0033\u0030\u0070\u0078`,
      top: `\u0033\u0032\u0025`,
      left: `\u0034\u0035\u0025`,
      position: `\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065`,
      "border-radius": `\u0034\u0070\u0078`,
      background: `\u0023\u0066\u0066\u0066`
    }
  },
  H = {
    style: {
      "font-size": `\u0031\u0036\u0070\u0078`,
      "font-weight": `\u0036\u0030\u0030`
    }
  },
  v = {
    key: 0,
    style: {
      "font-size": `\u0031\u0036\u0070\u0078`,
      "font-weight": `\u0036\u0030\u0030`
    }
  },
  X = {
    key: 1,
    style: {
      "font-size": `\u0031\u0036\u0070\u0078`,
      "font-weight": `\u0036\u0030\u0030`
    }
  },
  C = {
    style: {
      "font-size": `\u0031\u0036\u0070\u0078`,
      "font-weight": `\u0036\u0030\u0030`
    }
  },
  f = {
    key: 2,
    style: {
      "font-size": `\u0031\u0036\u0070\u0078`,
      "font-weight": `\u0036\u0030\u0030`
    }
  },
  w = {
    style: {
      "padding-top": `\u0032\u0030\u0070\u0078`,
      display: `\u0066\u006c\u0065\u0078`,
      "justify-content": `\u0063\u0065\u006e\u0074\u0065\u0072`,
      "align-items": `\u0063\u0065\u006e\u0074\u0065\u0072`,
      "flex-direction": `\u0063\u006f\u006c\u0075\u006d\u006e`
    }
  },
  T = {
    style: {
      "font-size": `\u0031\u0034\u0070\u0078`
    }
  },
  k = n({
    __name: `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0072\u0075\u006e`,
    setup(o) {
      const e = m();
      e.loadFromStorage();
      let t = JSON.parse(e.XiaoHongShu_Setting);
      const stop = async () => {
        e.setActivatePage(`\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0053\u0065\u0074\u0074\u0069\u006e\u0067`);
      };
      chrome.runtime.onMessage.addListener(async (o, e, t) => {
        if (`\u0071\u0075\u0065\u0072\u0079\u004c\u0061\u0073\u0074\u0054\u0069\u006d\u0065` == (null == o ? void 0 : o.action)) return console.log(`\u0071\u0075\u0065\u0072\u0079\u004c\u0061\u0073\u0074\u0054\u0069\u006d\u0065\u3002`, e, o), sendLog(`\u5269\u4f59\u65f6\u95f4\uff1a` + d), t(d), !1;
      });
      const n = i(`\u0036\u0030\u003a\u0030\u0030`);
      let h,
        d = 0;
      class CountdownTimer {
        constructor(o) {
          __publicField(this, `\u0074\u006f\u0074\u0061\u006c\u0053\u0065\u0063\u006f\u006e\u0064\u0073`), __publicField(this, `\u0069\u006e\u0074\u0065\u0072\u0076\u0061\u006c\u0049\u0064`), this.totalSeconds = 60 * o;
        }
        start() {
          this.intervalId = window.setInterval(() => {
            this.totalSeconds <= 0 ? (console.log(`\u0043\u006f\u0075\u006e\u0074\u0064\u006f\u0077\u006e\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0064\u0021`), this.stopFun()) : (this.totalSeconds--, this.displayTime());
          }, 1e3);
        }
        stopFun() {
          void 0 !== this.intervalId && (clearInterval(this.intervalId), stop());
        }
        displayTime() {
          const o = Math.floor(this.totalSeconds / 60),
            e = this.totalSeconds % 60;
          d = o + 1, n.value = `${this.padZero(o)}\u003a${this.padZero(e)}`;
        }
        padZero(o) {
          return o < 10 ? `\u0030${o}` : `${o}`;
        }
      }
      function sendLog(o) {
        chrome.runtime.sendMessage({
          action: `\u006c\u006f\u0067\u0073`,
          message: o
        }).then(() => {}).catch(o => {
          console.error(o);
        });
      }
      return setTimeout(async () => {
        if (await e.checkLoadend(), t && 0 != Object.keys(t).length || (t = JSON.parse(e.XiaoHongShu_Setting)), 0 !== e.operationTime) console.log(`\u006f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0054\u0069\u006d\u0065\u0020\u0032`, e.operationTime), h = new CountdownTimer(e.operationTime), h.start();else if (console.log(`\u0063\u0068\u0065\u0063\u006b\u004c\u006f\u0061\u0064\u0065\u006e\u0064`, e.XiaoHongShu_Setting, t), t.operationTime) {
          let o = parseInt(t.operationTime);
          console.log(`\u006f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0054\u0069\u006d\u0065`, o), h = new CountdownTimer(o), h.start();
        }
        sendLog(`\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u0050\u0061\u0067\u0065\u0020\u0073\u0065\u0074\u0054\u0069\u006d\u0065\u006f\u0075\u0074\u0020\u0065\u006e\u0064`), e.xiaoHongShuAccountErrorTip ? a.alert(e.xiaoHongShuAccountErrorTip, `\u63d0\u793a`, {
          showCancelButton: !1,
          confirmButtonText: `\u004f\u004b`,
          callback: () => {
            stop();
          }
        }) : function closeTabListener() {
          chrome.storage.onChanged.addListener((o, e) => {
            for (let [t, {
              oldValue: n,
              newValue: i
            }] of Object.entries(o)) console.log(`\u0053\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u006b\u0065\u0079\u0020\u0022${t}\u0022\u0020\u0069\u006e\u0020\u006e\u0061\u006d\u0065\u0073\u0070\u0061\u0063\u0065\u0020\u0022${e}\u0022\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0064\u002e`, `\u004f\u006c\u0064\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0077\u0061\u0073\u0020\u0022${n}\u0022\u002c\u0020\u006e\u0065\u0077\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0069\u0073\u0020\u0022${i}\u0022\u002e`), sendLog(`\u0053\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u006b\u0065\u0079\u0020\u0022${t}\u0022\u0020\u0069\u006e\u0020\u006e\u0061\u006d\u0065\u0073\u0070\u0061\u0063\u0065\u0020\u0022${e}\u0022\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0064\u002e\u004f\u006c\u0064\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0077\u0061\u0073\u0020\u0022${n}\u0022\u002c\u0020\u006e\u0065\u0077\u0020\u0076\u0061\u006c\u0075\u0065\u0020\u0069\u0073\u0020\u0022${i}\u0022\u002e`), `\u0078\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0045\u0072\u0072\u006f\u0072\u0054\u0069\u0070` === t && i && a.alert(i, `\u9519\u8bef`, {
              showCancelButton: !1,
              confirmButtonText: `\u004f\u004b`,
              callback: () => {
                stop();
              }
            });
          });
        }();
      }, 1), (o, i) => {
        var a;
        return s(), r(`\u0064\u0069\u0076`, _, [i[0] || (i[0] = u(`\u0068\u0031`, {
          style: {
            "text-align": `\u0063\u0065\u006e\u0074\u0065\u0072`
          }
        }, `\u5c0f\u85af\u6761\u52aa\u529b\u5de5\u4f5c\u4e2d`, -1)), i[1] || (i[1] = u(`\u0064\u0069\u0076`, {
          style: {
            color: `\u0072\u0065\u0064`,
            "font-size": `\u0031\u0034\u0070\u0078`,
            "padding-top": `\u0031\u0030\u0070\u0078`,
            "padding-bottom": `\u0032\u0030\u0070\u0078`
          }
        }, `\u8fd0\u884c\u4e2d\u8bf7\u4e0d\u8981\u5173\u95ed\u6216\u6700\u5c0f\u5316\u6d4f\u89c8\u5668`, -1)), u(`\u0064\u0069\u0076`, null, [u(`\u0064\u0069\u0076`, H, `\u6d4f\u89c8\uff1a` + l(c(e).XiaoHongShu_viewCount), 1), c(t).like ? (s(), r(`\u0064\u0069\u0076`, v, `\u70b9\u8d5e\uff1a` + l(c(e).XiaoHongShu_likeCount), 1)) : g(``, !0), c(t).collect ? (s(), r(`\u0064\u0069\u0076`, X, `\u6536\u85cf\uff1a` + l(c(e).XiaoHongShu_collectCount), 1)) : g(``, !0), u(`\u0064\u0069\u0076`, C, `\u8bc4\u8bba\uff1a` + l(c(e).XiaoHongShu_CommentCount), 1), c(t).follow ? (s(), r(`\u0064\u0069\u0076`, f, `\u5173\u6ce8\uff1a` + l(c(e).XiaoHongShu_followCount), 1)) : g(``, !0)]), u(`\u0064\u0069\u0076`, w, [u(`\u0064\u0069\u0076`, T, `\u64cd\u4f5c\u65f6\u957f\uff1a` + l(null == (a = c(t)) ? void 0 : a.operationTime), 1), u(`\u0062\u0075\u0074\u0074\u006f\u006e`, {
          style: {
            "border-radius": `\u0034\u0070\u0078`,
            width: `\u0031\u0038\u0030\u0070\u0078`,
            height: `\u0033\u0030\u0070\u0078`,
            "background-color": `\u0023\u0066\u0034\u0034\u0033\u0033\u0036`,
            color: `\u0023\u0066\u0066\u0066`,
            "font-size": `\u0031\u0036\u0070\u0078`,
            "font-weight": `\u0036\u0030\u0030`,
            "margin-top": `\u0035\u0070\u0078`,
            cursor: `\u0070\u006f\u0069\u006e\u0074\u0065\u0072`
          },
          onClick: stop
        }, `\u505c\u6b62\u8fd0\u884c\uff08` + l(n.value) + `\uff09`, 1)])]);
      };
    }
  }),
  x = e({}, [[`\u0072\u0065\u006e\u0064\u0065\u0072`, function _sfc_render(o, e) {
    return null;
  }]]),
  y = n({
    __name: `\u0041\u0070\u0070`,
    setup: o => (o, e) => (s(), r(d, null, [h(x), h(k)], 64))
  }),
  b = S();
p(y).use(b).mount(`\u0023\u0061\u0070\u0070`);