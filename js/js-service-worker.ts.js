const e = {
  isDebugMode: !0
};
if (e.isDebugMode = !1, !e.isDebugMode) {
  const o = console.log;
  console.log = (...t) => {
    e.isDebugMode && o(...t);
  };
}
if (!e.isDebugMode) {
  const o = console.error;
  console.error = (...t) => {
    e.isDebugMode && o(...t);
  };
}
if (!e.isDebugMode) {
  const o = console.info;
  console.info = (...t) => {
    e.isDebugMode && o(...t);
  };
}
function requestKeepAwake() {
  chrome.power.requestKeepAwake(`\u0064\u0069\u0073\u0070\u006c\u0061\u0079`);
}
console.log(`\u0074\u0068\u0069\u0073\u0020\u0069\u0073\u0020\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u0020\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u002d\u0077\u006f\u0072\u006b\u0065\u0072\u002e\u0074\u0073\u0020\u0066\u0069\u006c\u0065`);
const o = chrome.runtime.getManifest();
console.log(`\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u005f\u0073\u0063\u0072\u0069\u0070\u0074\u0073`, o && o.content_scripts);
const t = {};
!function compareStrings2(e) {
  switch (e) {
    case `\u0068\u0065\u006c\u006c\u006f`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u0068\u0065\u006c\u006c\u006f\u0022`);
      break;
    case `\u3053\u3093\u306b\u3061\u306f`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u3053\u3093\u306b\u3061\u306f\u0022`);
      break;
    case `\u4f60\u597d`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u4f60\u597d\u0022\u0020\u0075\u0073\u0069\u006e\u0067\u0020\u0055\u006e\u0069\u0063\u006f\u0064\u0065`);
      break;
    case `\ud83d\ude00`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0067\u0072\u0069\u006e\u006e\u0069\u006e\u0067\u0020\u0066\u0061\u0063\u0065\u0020\u0065\u006d\u006f\u006a\u0069`);
      break;
    default:
      console.log(`\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0020\u0066\u006f\u0075\u006e\u0064`);
  }
}(`\u4f60\u597d`), function compareStrings(e) {
  switch (e) {
    case `\u0068\u0065\u006c\u006c\u006f`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u0068\u0065\u006c\u006c\u006f\u0022`);
      break;
    case `\u3053\u3093\u306b\u3061\u306f`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u3053\u3093\u306b\u3061\u306f\u0022`);
      break;
    case `\u4f60\u597d`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u0020\u0022\u4f60\u597d\u0022`);
      break;
    case `\ud83d\ude00`:
      console.log(`\u004d\u0061\u0074\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0067\u0072\u0069\u006e\u006e\u0069\u006e\u0067\u0020\u0066\u0061\u0063\u0065\u0020\u0065\u006d\u006f\u006a\u0069`);
      break;
    default:
      console.log(`\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0020\u0066\u006f\u0075\u006e\u0064`);
  }
}(`\u4f60\u597d`), chrome.runtime.onMessage.addListener((e, n, s) => {
  var a, r, i, l, c, d, u;
  if (console.log(`\u0072\u0065\u0071\u0075\u0065\u0073\u0074`, null == (a = n.tab) ? void 0 : a.id, e), `\u0065\u0078\u0065\u0063\u0075\u0074\u0065\u0054\u0061\u0073\u006b` === e.action) return chrome.system.display.getInfo(n => {
    const a = n.find(e => e.isPrimary);
    if (!a) return void s();
    const r = a.bounds.width,
      i = a.bounds.height,
      l = Math.floor(.8 * r),
      c = Math.floor(.8 * i),
      d = Math.floor((r - l) / 2),
      u = Math.floor((i - c) / 2);
    let h = e.url;
    chrome.windows.create({
      url: h,
      type: `\u0070\u006f\u0070\u0075\u0070`,
      width: l,
      height: c,
      left: d,
      top: u
    }, n => {
      var a, r;
      if (requestKeepAwake(), console.log(`\u0063\u0072\u0065\u0061\u0074\u0065`, n), n && n.tabs && void 0 !== n.tabs[0].id && void 0 !== n.id) {
        const i = n.tabs[0].id;
        t[i] = {
          windowId: n.id,
          onCompleted: !1,
          noCloseRun: !1,
          tabData: {
            taskName: e.taskName
          }
        }, (null == o ? void 0 : o.content_scripts) && (null == (a = null == o ? void 0 : o.content_scripts[0]) ? void 0 : a.js) && chrome.scripting.executeScript({
          target: {
            tabId: i
          },
          files: null == (r = null == o ? void 0 : o.content_scripts[0]) ? void 0 : r.js
        }, () => {
          console.log(`\u0065\u0078\u0065\u0063\u0075\u0074\u0065\u0053\u0063\u0072\u0069\u0070\u0074\u0020\u0066\u0069\u006c\u0065\u0020\u0063\u0061\u006c\u006c\u0062\u0061\u0063\u006b`), chrome.runtime.lastError && console.error(`\u0065\u0072\u0072\u006f\u0072`, JSON.stringify(e), chrome.runtime.lastError.message);
        }), s({
          windowId: n.id,
          tabId: i
        });
      } else s();
    });
  }), !0;
  if (`\u0069\u006e\u0070\u0075\u0074\u004b\u0065\u0079` === e.action) {
    const o = {
      tabId: null == (r = n.tab) ? void 0 : r.id
    };
    return chrome.debugger.attach(o, `\u0031\u002e\u0030`, function () {
      var t;
      let s = {
        type: `\u0069\u006e\u0073\u0065\u0072\u0074\u0054\u0065\u0078\u0074`,
        text: e.text
      };
      chrome.debugger.sendCommand({
        tabId: null == (t = n.tab) ? void 0 : t.id
      }, `\u0049\u006e\u0070\u0075\u0074\u002e\u0069\u006e\u0073\u0065\u0072\u0074\u0054\u0065\u0078\u0074`, s).then(e => {
        console.log(`\u0072\u0065\u0073`, e), setTimeout(() => {
          chrome.debugger.detach(o).then(e => {
            console.log(`\u0072\u0065\u0073`, e);
          });
        }, 1e3);
      });
    }), s(), !1;
  }
  if (`\u0063\u0074\u0072\u0069\u006c\u005f\u0076` === e.action) {
    const e = {
      tabId: null == (i = n.tab) ? void 0 : i.id
    };
    return chrome.debugger.sendCommand(e, `\u0049\u006e\u0070\u0075\u0074\u002e\u0064\u0069\u0073\u0070\u0061\u0074\u0063\u0068\u004b\u0065\u0079\u0045\u0076\u0065\u006e\u0074`, {
      type: `\u006b\u0065\u0079\u0044\u006f\u0077\u006e`,
      windowsVirtualKeyCode: 86,
      modifiers: 2
    }).then(e => {
      console.log(`\u0072\u0065\u0073\u0020\u006b\u0065\u0079\u0044\u006f\u0077\u006e`, e);
    }), chrome.debugger.sendCommand(e, `\u0049\u006e\u0070\u0075\u0074\u002e\u0064\u0069\u0073\u0070\u0061\u0074\u0063\u0068\u004b\u0065\u0079\u0045\u0076\u0065\u006e\u0074`, {
      type: `\u006b\u0065\u0079\u0055\u0070`,
      windowsVirtualKeyCode: 86,
      modifiers: 2
    }).then(e => {
      console.log(`\u0072\u0065\u0073\u0020\u006b\u0065\u0079\u0055\u0070`, e);
    }), s(), !1;
  }
  if (`\u006f\u0070\u0065\u006e\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e\u0055\u0072\u006c` === e.action) return chrome.system.display.getInfo(o => {
    const n = o.find(e => e.isPrimary);
    if (!n) return void s();
    const a = n.bounds.width,
      r = n.bounds.height,
      i = Math.floor(.8 * a),
      l = Math.floor(.8 * r),
      c = Math.floor((a - i) / 2),
      d = Math.floor((r - l) / 2);
    let u = e.authorization_url;
    chrome.windows.create({
      url: u,
      type: `\u0070\u006f\u0070\u0075\u0070`,
      width: i,
      height: l,
      left: c,
      top: d
    }, o => {
      if (requestKeepAwake(), console.log(`\u0063\u0072\u0065\u0061\u0074\u0065`, o), o && o.tabs && void 0 !== o.tabs[0].id && void 0 !== o.id) {
        const n = o.tabs[0].id;
        t[n] = {
          windowId: o.id,
          onCompleted: !1,
          noCloseRun: !1,
          tabData: {
            taskName: e.taskName
          }
        }, s();
      } else s();
    });
  }), !0;
  if (`\u006e\u006f\u0043\u006c\u006f\u0073\u0065\u0052\u0075\u006e` === e.action && void 0 !== (null == (l = n.tab) ? void 0 : l.id)) return t[null == (c = n.tab) ? void 0 : c.id].noCloseRun = !0, s(), !1;
  if (`\u0063\u006c\u006f\u0073\u0065\u0054\u0061\u0062` === e.action) return void 0 !== (null == (d = n.tab) ? void 0 : d.id) ? chrome.tabs.remove(n.tab.id, () => {
    var e;
    console.log(`\u0054\u0061\u0062\u0020${null == (e = n.tab) ? void 0 : e.id}\u0020\u5df2\u6210\u529f\u5173\u95ed\u3002`);
  }) : console.warn(`\u65e0\u6cd5\u5173\u95ed\u6807\u7b7e\u9875\uff1a\u0073\u0065\u006e\u0064\u0065\u0072\u002e\u0074\u0061\u0062\u002e\u0069\u0064\u0020\u672a\u5b9a\u4e49\u3002`), s(), !1;
  if (`\u0067\u0065\u0074\u0054\u0061\u0062\u0054\u0061\u0073\u006b\u0044\u0061\u0074\u0061` === e.action) {
    if (n.tab && n.tab.id) {
      let e = {};
      t[n.tab.id] && (e = null == (u = t[n.tab.id]) ? void 0 : u.tabData), s({
        tabId: n.tab.id,
        tabData: e
      });
    } else s({
      tabId: null
    });
    return !1;
  }
  return `\u0071\u0075\u0065\u0072\u0079\u0054\u0061\u0062\u0073` === e.message ? (chrome.tabs.query({
    active: !0,
    currentWindow: !0
  }, e => {
    e.length > 0 ? s({
      tabId: e[0].id,
      url: e[0].url
    }) : s({
      tabId: null,
      url: null
    });
  }), !0) : `\u0063\u0068\u0065\u0063\u006b\u0049\u0066\u0054\u0061\u0062\u0045\u0078\u0069\u0073\u0074\u0073` === e.action ? (chrome.tabs.query({}, function (o) {
    let t = o.some(o => o.id === e.tabId);
    s({
      tabExists: t
    });
  }), !0) : void 0;
}), chrome.tabs.onRemoved.addListener(e => {
  console.log(`\u0054\u0061\u0062\u0020${e}\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e`), t[e] && (t[e].noCloseRun || chrome.storage.local.set({
    activatePage: `\u0058\u0069\u0061\u006f\u0048\u006f\u006e\u0067\u0053\u0068\u0075\u005f\u0053\u0065\u0074\u0074\u0069\u006e\u0067`
  }, () => {
    console.log(`\u0044\u0061\u0074\u0061\u0020\u0068\u0061\u0073\u0020\u0062\u0065\u0065\u006e\u0020\u0073\u0074\u006f\u0072\u0065\u0064\u0020\u006c\u006f\u0063\u0061\u006c\u006c\u0079\u002e`), function releaseKeepAwake() {
      chrome.power.releaseKeepAwake();
    }();
  }), chrome.storage.local.set({
    DoneNoteId: e
  }, () => {}), delete t[e]);
}), chrome.tabs.onActivated.addListener(e => {
  var o;
  console.log(`\u006f\u006e\u0041\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0064`, e), t[e.tabId] && (null == (o = t[e.tabId]) ? void 0 : o.onCompleted) && (console.log(`\u6fc0\u6d3b\u72b6\u6001`, e.tabId), chrome.tabs.sendMessage(e.tabId, {
    messageType: `\u0074\u0061\u0062\u0043\u0068\u0061\u006e\u0067\u0065`,
    status: !0,
    tabId: e.tabId
  }, {}, o => {
    console.log(`\u6fc0\u6d3b\u72b6\u6001\u0020\u0072\u0065\u0073`, e.tabId, o);
  })), Object.keys(t).length > 0 && Object.keys(t).forEach(o => {
    var n;
    const s = Number(o);
    if (!isNaN(s) && s != e.tabId && t[s] && (null == (n = t[s]) ? void 0 : n.windowId) == e.windowId) {
      console.log(`\u5931\u53bb\u6fc0\u6d3b\u72b6\u6001`, s), chrome.tabs.sendMessage(s, {
        messageType: `\u0074\u0061\u0062\u0043\u0068\u0061\u006e\u0067\u0065`,
        status: !1,
        tabId: s
      }, {}, e => {
        console.log(`\u5931\u53bb\u6fc0\u6d3b\u72b6\u6001\u0020\u0072\u0065\u0073`, s, e);
      });
      const e = setInterval(() => {
        chrome.tabs.update(s, {
          active: !0
        }).then(o => {
          console.log(`\u0075\u0070\u0064\u0061\u0074\u0065\u0020\u0072\u0065\u0073`, o), clearInterval(e);
        }).catch(e => {
          console.log(`\u0075\u0070\u0064\u0061\u0074\u0065\u0020\u0065\u0072\u0072`, e);
        });
      }, 200);
    }
  });
}), chrome.tabs.onDetached.addListener((e, o) => {
  console.log(`\u0054\u0061\u0062\u0020${e}\u0020\u0077\u0061\u0073\u0020\u0064\u0065\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0066\u0072\u006f\u006d\u0020\u0077\u0069\u006e\u0064\u006f\u0077\u0020${o.oldWindowId}\u002e`);
}), chrome.tabs.onAttached.addListener((e, o) => {
  console.log(`\u0054\u0061\u0062\u0020${e}\u0020\u0077\u0061\u0073\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0074\u006f\u0020\u0077\u0069\u006e\u0064\u006f\u0077\u0020${o.newWindowId}\u002e`), t[e] && (t[e].windowId = o.newWindowId);
}), chrome.webNavigation.onCompleted.addListener(e => {
  if (0 === e.frameId) {
    const n = e.tabId;
    t[n] && chrome.tabs.sendMessage(n, {
      messageType: `\u0063\u0068\u0065\u0063\u006b\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004a\u0073`,
      status: !1,
      tabId: n
    }, {}, t => {
      var s, a;
      chrome.runtime.lastError ? (console.log(`\u0065\u0072\u0072\u006f\u0072`, chrome.runtime.lastError.message), `\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0065\u0073\u0074\u0061\u0062\u006c\u0069\u0073\u0068\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u002e\u0020\u0052\u0065\u0063\u0065\u0069\u0076\u0069\u006e\u0067\u0020\u0065\u006e\u0064\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0065\u0078\u0069\u0073\u0074\u002e` == chrome.runtime.lastError.message && (null == o ? void 0 : o.content_scripts) && (null == (s = null == o ? void 0 : o.content_scripts[0]) ? void 0 : s.js) && chrome.scripting.executeScript({
        target: {
          tabId: n
        },
        files: null == (a = null == o ? void 0 : o.content_scripts[0]) ? void 0 : a.js
      }, () => {
        console.log(`\u0065\u0078\u0065\u0063\u0075\u0074\u0065\u0053\u0063\u0072\u0069\u0070\u0074\u0020\u0066\u0069\u006c\u0065\u0020\u0063\u0061\u006c\u006c\u0062\u0061\u0063\u006b`), chrome.runtime.lastError && console.log(`\u0065\u0072\u0072\u006f\u0072`, chrome.runtime.lastError.message);
      })) : console.log(`\u0063\u0068\u0065\u0063\u006b\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004a\u0073\u0020\u0072\u0065\u0073`, e.tabId, t);
    });
  }
}, {
  url: [{
    urlMatches: `\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0078\u0069\u0061\u006f\u0068\u006f\u006e\u0067\u0073\u0068\u0075\u002e\u0063\u006f\u006d\u002f\u002a`
  }, {
    urlMatches: `\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0078\u0069\u0061\u006f\u0068\u006f\u006e\u0067\u0073\u0068\u0075\u002e\u0063\u006f\u006d\u002f\u002a`
  }]
});