import { _ as xr } from "./preload-helper.cf010ec4.js";
import { g as Fr } from "./_commonjsHelpers.de833af9.js";
const qr = typeof navigator > "u" ? !1 : navigator.product === "ReactNative",
  Ft = { timeout: qr ? 6e4 : 12e4 },
  Mr = function (e) {
    const t = { ...Ft, ...(typeof e == "string" ? { url: e } : e) },
      { searchParams: n } = new URL(t.url, "http://localhost");
    if (((t.timeout = qt(t.timeout)), t.query)) {
      for (const [a, o] of Object.entries(t.query))
        if (o !== void 0)
          if (Array.isArray(o)) for (const u of o) n.append(a, u);
          else n.append(a, o);
    }
    const [s] = t.url.split("?"),
      i = n.toString();
    return (
      i && (t.url = "".concat(s, "?").concat(i)),
      (t.method =
        t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
      t
    );
  };
function qt(r) {
  if (r === !1 || r === 0) return !1;
  if (r.connect || r.socket) return r;
  const e = Number(r);
  return isNaN(e) ? qt(Ft.timeout) : { connect: e, socket: e };
}
const Ir = /^https?:\/\//i,
  $r = function (e) {
    if (!Ir.test(e.url))
      throw new Error('"'.concat(e.url, '" is not a valid URL'));
  };
var Ke = function (r) {
    return r.replace(/^\s+|\s+$/g, "");
  },
  kr = function (r) {
    return Object.prototype.toString.call(r) === "[object Array]";
  },
  Dr = function (r) {
    if (!r) return {};
    for (
      var e = {},
        t = Ke(r).split(`
`),
        n = 0;
      n < t.length;
      n++
    ) {
      var s = t[n],
        i = s.indexOf(":"),
        a = Ke(s.slice(0, i)).toLowerCase(),
        o = Ke(s.slice(i + 1));
      typeof e[a] > "u"
        ? (e[a] = o)
        : kr(e[a])
        ? e[a].push(o)
        : (e[a] = [e[a], o]);
    }
    return e;
  };
const jr = Fr(Dr),
  Ur = (r) =>
    function (t, n) {
      const s = t === "onError";
      let i = n;
      for (
        var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2;
        u < a;
        u++
      )
        o[u - 2] = arguments[u];
      for (let f = 0; f < r[t].length; f++) {
        const c = r[t][f];
        if (((i = c(i, ...o)), s && !i)) break;
      }
      return i;
    };
function Wr() {
  const r = Object.create(null);
  let e = 0;
  function t(s) {
    const i = e++;
    return (
      (r[i] = s),
      function () {
        delete r[i];
      }
    );
  }
  function n(s) {
    for (const i in r) r[i](s);
  }
  return { publish: n, subscribe: t };
}
const Lr = ["request", "response", "progress", "error", "abort"],
  yt = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function Mt(r, e) {
  const t = [],
    n = yt.reduce((i, a) => ((i[a] = i[a] || []), i), {
      processOptions: [Mr],
      validateOptions: [$r],
    });
  function s(i) {
    const a = (w, h, p) => {
        let m = w,
          b = h;
        if (!m)
          try {
            b = u("onResponse", h, p);
          } catch (F) {
            (b = null), (m = F);
          }
        (m = m && u("onError", m, p)),
          m ? o.error.publish(m) : b && o.response.publish(b);
      },
      o = Lr.reduce((w, h) => ((w[h] = Wr()), w), {}),
      u = Ur(n),
      f = u("processOptions", i);
    u("validateOptions", f);
    const c = { options: f, channels: o, applyMiddleware: u };
    let l;
    const d = o.request.subscribe((w) => {
      l = e(w, (h, p) => a(h, p, w));
    });
    o.abort.subscribe(() => {
      d(), l && l.abort();
    });
    const v = u("onReturn", o, c);
    return v === o && o.request.publish(c), v;
  }
  return (
    (s.use = function (a) {
      if (!a)
        throw new Error(
          "Tried to add middleware that resolved to falsey value"
        );
      if (typeof a == "function")
        throw new Error(
          "Tried to add middleware that was a function. It probably expects you to pass options to it."
        );
      if (a.onReturn && n.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
        );
      return (
        yt.forEach((o) => {
          a[o] && n[o].push(a[o]);
        }),
        t.push(a),
        s
      );
    }),
    (s.clone = () => Mt(t, e)),
    r.forEach(s.use),
    s
  );
}
var Nr = Object.defineProperty,
  Hr = (r, e, t) =>
    e in r
      ? Nr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  R = (r, e, t) => (Hr(r, typeof e != "symbol" ? e + "" : e, t), t),
  It = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  A = (r, e, t) => (
    It(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  U = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  I = (r, e, t, n) => (
    It(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  we,
  be,
  Y,
  Ce,
  $,
  _e,
  Ee;
class $t {
  constructor() {
    R(this, "onabort"),
      R(this, "onerror"),
      R(this, "onreadystatechange"),
      R(this, "ontimeout"),
      R(this, "readyState", 0),
      R(this, "response"),
      R(this, "responseText"),
      R(this, "responseType", ""),
      R(this, "status"),
      R(this, "statusText"),
      R(this, "withCredentials"),
      U(this, we, void 0),
      U(this, be, void 0),
      U(this, Y, void 0),
      U(this, Ce, {}),
      U(this, $, void 0),
      U(this, _e, {}),
      U(this, Ee, void 0);
  }
  open(e, t, n) {
    I(this, we, e),
      I(this, be, t),
      I(this, Y, ""),
      (this.readyState = 1),
      this.onreadystatechange(),
      I(this, $, void 0);
  }
  abort() {
    A(this, $) && A(this, $).abort();
  }
  getAllResponseHeaders() {
    return A(this, Y);
  }
  setRequestHeader(e, t) {
    A(this, Ce)[e] = t;
  }
  setInit(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    I(this, _e, e), I(this, Ee, t);
  }
  send(e) {
    const t = this.responseType !== "arraybuffer",
      n = {
        ...A(this, _e),
        method: A(this, we),
        headers: A(this, Ce),
        body: e,
      };
    typeof AbortController == "function" &&
      A(this, Ee) &&
      (I(this, $, new AbortController()),
      typeof EventTarget < "u" &&
        A(this, $).signal instanceof EventTarget &&
        (n.signal = A(this, $).signal)),
      typeof document < "u" &&
        (n.credentials = this.withCredentials ? "include" : "omit"),
      fetch(A(this, be), n)
        .then(
          (s) => (
            s.headers.forEach((i, a) => {
              I(
                this,
                Y,
                A(this, Y) +
                  "".concat(a, ": ").concat(
                    i,
                    `\r
`
                  )
              );
            }),
            (this.status = s.status),
            (this.statusText = s.statusText),
            (this.readyState = 3),
            t ? s.text() : s.arrayBuffer()
          )
        )
        .then((s) => {
          typeof s == "string" ? (this.responseText = s) : (this.response = s),
            (this.readyState = 4),
            this.onreadystatechange();
        })
        .catch((s) => {
          var i;
          if (s.name === "AbortError") {
            this.onabort();
            return;
          }
          (i = this.onerror) == null || i.call(this, s);
        });
  }
}
we = new WeakMap();
be = new WeakMap();
Y = new WeakMap();
Ce = new WeakMap();
$ = new WeakMap();
_e = new WeakMap();
Ee = new WeakMap();
const nt = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
  zr = nt === "xhr" ? XMLHttpRequest : $t,
  Br = (r, e) => {
    var t;
    const n = r.options,
      s = r.applyMiddleware("finalizeOptions", n),
      i = {},
      a = r.applyMiddleware("interceptRequest", void 0, {
        adapter: nt,
        context: r,
      });
    if (a) {
      const y = setTimeout(e, 0, null, a);
      return { abort: () => clearTimeout(y) };
    }
    let o = new zr();
    o instanceof $t &&
      typeof s.fetch == "object" &&
      o.setInit(s.fetch, (t = s.useAbortSignal) != null ? t : !0);
    const u = s.headers,
      f = s.timeout;
    let c = !1,
      l = !1,
      d = !1;
    if (
      ((o.onerror = (y) => {
        m(
          new Error(
            "Request error while attempting to reach "
              .concat(s.url)
              .concat(
                y.lengthComputable
                  ? "("
                      .concat(y.loaded, " of ")
                      .concat(y.total, " bytes transferred)")
                  : ""
              )
          )
        );
      }),
      (o.ontimeout = (y) => {
        m(
          new Error(
            "Request timeout while attempting to reach "
              .concat(s.url)
              .concat(
                y.lengthComputable
                  ? "("
                      .concat(y.loaded, " of ")
                      .concat(y.total, " bytes transferred)")
                  : ""
              )
          )
        );
      }),
      (o.onabort = () => {
        p(!0), (c = !0);
      }),
      (o.onreadystatechange = () => {
        h(), !(c || o.readyState !== 4) && o.status !== 0 && F();
      }),
      o.open(s.method, s.url, !0),
      (o.withCredentials = !!s.withCredentials),
      u && o.setRequestHeader)
    )
      for (const y in u) u.hasOwnProperty(y) && o.setRequestHeader(y, u[y]);
    return (
      s.rawBody && (o.responseType = "arraybuffer"),
      r.applyMiddleware("onRequest", {
        options: s,
        adapter: nt,
        request: o,
        context: r,
      }),
      o.send(s.body || null),
      f && (i.connect = setTimeout(() => w("ETIMEDOUT"), f.connect)),
      { abort: v }
    );
    function v() {
      (c = !0), o && o.abort();
    }
    function w(y) {
      (d = !0), o.abort();
      const O = new Error(
        y === "ESOCKETTIMEDOUT"
          ? "Socket timed out on request to ".concat(s.url)
          : "Connection timed out on request to ".concat(s.url)
      );
      (O.code = y), r.channels.error.publish(O);
    }
    function h() {
      f && (p(), (i.socket = setTimeout(() => w("ESOCKETTIMEDOUT"), f.socket)));
    }
    function p(y) {
      (y || c || (o.readyState >= 2 && i.connect)) && clearTimeout(i.connect),
        i.socket && clearTimeout(i.socket);
    }
    function m(y) {
      if (l) return;
      p(!0), (l = !0), (o = null);
      const O =
        y ||
        new Error("Network error while attempting to reach ".concat(s.url));
      (O.isNetworkError = !0), (O.request = s), e(O);
    }
    function b() {
      return {
        body:
          o.response ||
          (o.responseType === "" || o.responseType === "text"
            ? o.responseText
            : ""),
        url: s.url,
        method: s.method,
        headers: jr(o.getAllResponseHeaders()),
        statusCode: o.status,
        statusMessage: o.statusText,
      };
    }
    function F() {
      if (!(c || l || d)) {
        if (o.status === 0) {
          m(new Error("Unknown XHR error"));
          return;
        }
        p(), (l = !0), e(null, b());
      }
    }
  },
  Gr = function () {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Br;
    return Mt(r, e);
  };
var mt = { exports: {} },
  Ze,
  vt;
function Vr() {
  if (vt) return Ze;
  vt = 1;
  var r = 1e3,
    e = r * 60,
    t = e * 60,
    n = t * 24,
    s = n * 7,
    i = n * 365.25;
  Ze = function (c, l) {
    l = l || {};
    var d = typeof c;
    if (d === "string" && c.length > 0) return a(c);
    if (d === "number" && isFinite(c)) return l.long ? u(c) : o(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(c)
    );
  };
  function a(c) {
    if (((c = String(c)), !(c.length > 100))) {
      var l =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          c
        );
      if (l) {
        var d = parseFloat(l[1]),
          v = (l[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * i;
          case "weeks":
          case "week":
          case "w":
            return d * s;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function o(c) {
    var l = Math.abs(c);
    return l >= n
      ? Math.round(c / n) + "d"
      : l >= t
      ? Math.round(c / t) + "h"
      : l >= e
      ? Math.round(c / e) + "m"
      : l >= r
      ? Math.round(c / r) + "s"
      : c + "ms";
  }
  function u(c) {
    var l = Math.abs(c);
    return l >= n
      ? f(c, l, n, "day")
      : l >= t
      ? f(c, l, t, "hour")
      : l >= e
      ? f(c, l, e, "minute")
      : l >= r
      ? f(c, l, r, "second")
      : c + " ms";
  }
  function f(c, l, d, v) {
    var w = l >= d * 1.5;
    return Math.round(c / d) + " " + v + (w ? "s" : "");
  }
  return Ze;
}
function Jr(r) {
  (t.debug = t),
    (t.default = t),
    (t.coerce = u),
    (t.disable = i),
    (t.enable = s),
    (t.enabled = a),
    (t.humanize = Vr()),
    (t.destroy = f),
    Object.keys(r).forEach((c) => {
      t[c] = r[c];
    }),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
  function e(c) {
    let l = 0;
    for (let d = 0; d < c.length; d++)
      (l = (l << 5) - l + c.charCodeAt(d)), (l |= 0);
    return t.colors[Math.abs(l) % t.colors.length];
  }
  t.selectColor = e;
  function t(c) {
    let l,
      d = null,
      v,
      w;
    function h(...p) {
      if (!h.enabled) return;
      const m = h,
        b = Number(new Date()),
        F = b - (l || b);
      (m.diff = F),
        (m.prev = l),
        (m.curr = b),
        (l = b),
        (p[0] = t.coerce(p[0])),
        typeof p[0] != "string" && p.unshift("%O");
      let y = 0;
      (p[0] = p[0].replace(/%([a-zA-Z%])/g, (Q, re) => {
        if (Q === "%%") return "%";
        y++;
        const ye = t.formatters[re];
        if (typeof ye == "function") {
          const me = p[y];
          (Q = ye.call(m, me)), p.splice(y, 1), y--;
        }
        return Q;
      })),
        t.formatArgs.call(m, p),
        (m.log || t.log).apply(m, p);
    }
    return (
      (h.namespace = c),
      (h.useColors = t.useColors()),
      (h.color = t.selectColor(c)),
      (h.extend = n),
      (h.destroy = t.destroy),
      Object.defineProperty(h, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          d !== null
            ? d
            : (v !== t.namespaces && ((v = t.namespaces), (w = t.enabled(c))),
              w),
        set: (p) => {
          d = p;
        },
      }),
      typeof t.init == "function" && t.init(h),
      h
    );
  }
  function n(c, l) {
    const d = t(this.namespace + (typeof l > "u" ? ":" : l) + c);
    return (d.log = this.log), d;
  }
  function s(c) {
    t.save(c), (t.namespaces = c), (t.names = []), (t.skips = []);
    let l;
    const d = (typeof c == "string" ? c : "").split(/[\s,]+/),
      v = d.length;
    for (l = 0; l < v; l++)
      d[l] &&
        ((c = d[l].replace(/\*/g, ".*?")),
        c[0] === "-"
          ? t.skips.push(new RegExp("^" + c.slice(1) + "$"))
          : t.names.push(new RegExp("^" + c + "$")));
  }
  function i() {
    const c = [...t.names.map(o), ...t.skips.map(o).map((l) => "-" + l)].join(
      ","
    );
    return t.enable(""), c;
  }
  function a(c) {
    if (c[c.length - 1] === "*") return !0;
    let l, d;
    for (l = 0, d = t.skips.length; l < d; l++)
      if (t.skips[l].test(c)) return !1;
    for (l = 0, d = t.names.length; l < d; l++)
      if (t.names[l].test(c)) return !0;
    return !1;
  }
  function o(c) {
    return c
      .toString()
      .substring(2, c.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function u(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
  function f() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return t.enable(t.load()), t;
}
var Qr = Jr;
(function (r, e) {
  (e.formatArgs = n),
    (e.save = s),
    (e.load = i),
    (e.useColors = t),
    (e.storage = a()),
    (e.destroy = (() => {
      let u = !1;
      return () => {
        u ||
          ((u = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function t() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function n(u) {
    if (
      ((u[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        u[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        r.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const f = "color: " + this.color;
    u.splice(1, 0, f, "color: inherit");
    let c = 0,
      l = 0;
    u[0].replace(/%[a-zA-Z%]/g, (d) => {
      d !== "%%" && (c++, d === "%c" && (l = c));
    }),
      u.splice(l, 0, f);
  }
  e.log = console.debug || console.log || (() => {});
  function s(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {}
  }
  function i() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {}
    return !u && typeof process < "u" && "env" in process && (u = {}.DEBUG), u;
  }
  function a() {
    try {
      return localStorage;
    } catch {}
  }
  r.exports = Qr(e);
  const { formatters: o } = r.exports;
  o.j = function (u) {
    try {
      return JSON.stringify(u);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(mt, mt.exports);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function wt(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Yr(r) {
  var e, t;
  return wt(r) === !1
    ? !1
    : ((e = r.constructor),
      e === void 0
        ? !0
        : ((t = e.prototype),
          !(wt(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
const Xr = typeof Buffer > "u" ? () => !1 : (r) => Buffer.isBuffer(r),
  Kr = ["boolean", "string", "number"];
function Zr() {
  return {
    processOptions: (r) => {
      const e = r.body;
      return !e ||
        !(
          !(typeof e.pipe == "function") &&
          !Xr(e) &&
          (Kr.indexOf(typeof e) !== -1 || Array.isArray(e) || Yr(e))
        )
        ? r
        : Object.assign({}, r, {
            body: JSON.stringify(r.body),
            headers: Object.assign({}, r.headers, {
              "Content-Type": "application/json",
            }),
          });
    },
  };
}
function en(r) {
  return {
    onResponse: (t) => {
      const n = t.headers["content-type"] || "",
        s = (r && r.force) || n.indexOf("application/json") !== -1;
      return !t.body || !n || !s
        ? t
        : Object.assign({}, t, { body: e(t.body) });
    },
    processOptions: (t) =>
      Object.assign({}, t, {
        headers: Object.assign({ Accept: "application/json" }, t.headers),
      }),
  };
  function e(t) {
    try {
      return JSON.parse(t);
    } catch (n) {
      throw (
        ((n.message = "Failed to parsed response body as JSON: ".concat(
          n.message
        )),
        n)
      );
    }
  }
}
let ne = {};
typeof globalThis < "u"
  ? (ne = globalThis)
  : typeof window < "u"
  ? (ne = window)
  : typeof global < "u"
  ? (ne = global)
  : typeof self < "u" && (ne = self);
var tn = ne;
function rn() {
  const e =
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {})
      .implementation || tn.Observable;
  if (!e)
    throw new Error(
      "`Observable` is not available in global scope, and no implementation was passed"
    );
  return {
    onReturn: (t, n) =>
      new e(
        (s) => (
          t.error.subscribe((i) => s.error(i)),
          t.progress.subscribe((i) =>
            s.next(Object.assign({ type: "progress" }, i))
          ),
          t.response.subscribe((i) => {
            s.next(Object.assign({ type: "response" }, i)), s.complete();
          }),
          t.request.publish(n),
          () => t.abort.publish()
        )
      ),
  };
}
function nn() {
  return {
    onRequest: (r) => {
      if (r.adapter !== "xhr") return;
      const e = r.request,
        t = r.context;
      "upload" in e &&
        "onprogress" in e.upload &&
        (e.upload.onprogress = n("upload")),
        "onprogress" in e && (e.onprogress = n("download"));
      function n(s) {
        return (i) => {
          const a = i.lengthComputable ? (i.loaded / i.total) * 100 : -1;
          t.channels.progress.publish({
            stage: s,
            percent: a,
            total: i.total,
            loaded: i.loaded,
            lengthComputable: i.lengthComputable,
          });
        };
      }
    },
  };
}
var sn = Object.defineProperty,
  on = (r, e, t) =>
    e in r
      ? sn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  de = (r, e, t) => (on(r, typeof e != "symbol" ? e + "" : e, t), t);
class an {
  constructor(e) {
    de(this, "__CANCEL__", !0), de(this, "message"), (this.message = e);
  }
  toString() {
    return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
  }
}
const bt = class {
  constructor(e) {
    if ((de(this, "promise"), de(this, "reason"), typeof e != "function"))
      throw new TypeError("executor must be a function.");
    let t = null;
    (this.promise = new Promise((n) => {
      t = n;
    })),
      e((n) => {
        this.reason || ((this.reason = new an(n)), t(this.reason));
      });
  }
};
de(bt, "source", () => {
  let r;
  return {
    token: new bt((t) => {
      r = t;
    }),
    cancel: r,
  };
});
var kt = (r, e, t) =>
  t.method !== "GET" && t.method !== "HEAD" ? !1 : r.isNetworkError || !1;
const cn = (r) =>
  r !== null && typeof r == "object" && typeof r.pipe == "function";
var un = (r) => {
  const e = r.maxRetries || 5,
    t = r.retryDelay || ln,
    n = r.shouldRetry;
  return {
    onError: (s, i) => {
      const a = i.options,
        o = a.maxRetries || e,
        u = a.shouldRetry || n,
        f = a.attemptNumber || 0;
      if (cn(a.body) || !u(s, f, a) || f >= o) return s;
      const c = Object.assign({}, i, {
        options: Object.assign({}, a, { attemptNumber: f + 1 }),
      });
      return setTimeout(() => i.channels.request.publish(c), t(f)), null;
    },
  };
};
function ln(r) {
  return 100 * Math.pow(2, r) + Math.random() * 100;
}
const ut = function () {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return un({ shouldRetry: kt, ...r });
};
ut.shouldRetry = kt;
var st = function (r, e) {
  return (
    (st =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, n) {
          t.__proto__ = n;
        }) ||
      function (t, n) {
        for (var s in n)
          Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
      }),
    st(r, e)
  );
};
function lt(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  st(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function Ct(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function qe(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r),
    s,
    i = [],
    a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; ) i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (t = n.return) && t.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Me(r, e, t) {
  if (t || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) &&
        (i || (i = Array.prototype.slice.call(e, 0, n)), (i[n] = e[n]));
  return r.concat(i || Array.prototype.slice.call(e));
}
function q(r) {
  return typeof r == "function";
}
function Dt(r) {
  var e = function (n) {
      Error.call(n), (n.stack = new Error().stack);
    },
    t = r(e);
  return (
    (t.prototype = Object.create(Error.prototype)),
    (t.prototype.constructor = t),
    t
  );
}
var et = Dt(function (r) {
  return function (t) {
    r(this),
      (this.message = t
        ? t.length +
          ` errors occurred during unsubscription:
` +
          t.map(function (n, s) {
            return s + 1 + ") " + n.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = t);
  };
});
function _t(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var dt = (function () {
  function r(e) {
    (this.initialTeardown = e),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  return (
    (r.prototype.unsubscribe = function () {
      var e, t, n, s, i;
      if (!this.closed) {
        this.closed = !0;
        var a = this._parentage;
        if (a)
          if (((this._parentage = null), Array.isArray(a)))
            try {
              for (var o = Ct(a), u = o.next(); !u.done; u = o.next()) {
                var f = u.value;
                f.remove(this);
              }
            } catch (h) {
              e = { error: h };
            } finally {
              try {
                u && !u.done && (t = o.return) && t.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
          else a.remove(this);
        var c = this.initialTeardown;
        if (q(c))
          try {
            c();
          } catch (h) {
            i = h instanceof et ? h.errors : [h];
          }
        var l = this._finalizers;
        if (l) {
          this._finalizers = null;
          try {
            for (var d = Ct(l), v = d.next(); !v.done; v = d.next()) {
              var w = v.value;
              try {
                Et(w);
              } catch (h) {
                (i = i ?? []),
                  h instanceof et
                    ? (i = Me(Me([], qe(i)), qe(h.errors)))
                    : i.push(h);
              }
            }
          } catch (h) {
            n = { error: h };
          } finally {
            try {
              v && !v.done && (s = d.return) && s.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        if (i) throw new et(i);
      }
    }),
    (r.prototype.add = function (e) {
      var t;
      if (e && e !== this)
        if (this.closed) Et(e);
        else {
          if (e instanceof r) {
            if (e.closed || e._hasParent(this)) return;
            e._addParent(this);
          }
          (this._finalizers =
            (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
        }
    }),
    (r.prototype._hasParent = function (e) {
      var t = this._parentage;
      return t === e || (Array.isArray(t) && t.includes(e));
    }),
    (r.prototype._addParent = function (e) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
    }),
    (r.prototype._removeParent = function (e) {
      var t = this._parentage;
      t === e ? (this._parentage = null) : Array.isArray(t) && _t(t, e);
    }),
    (r.prototype.remove = function (e) {
      var t = this._finalizers;
      t && _t(t, e), e instanceof r && e._removeParent(this);
    }),
    (r.EMPTY = (function () {
      var e = new r();
      return (e.closed = !0), e;
    })()),
    r
  );
})();
dt.EMPTY;
function jt(r) {
  return (
    r instanceof dt ||
    (r && "closed" in r && q(r.remove) && q(r.add) && q(r.unsubscribe))
  );
}
function Et(r) {
  q(r) ? r() : r.unsubscribe();
}
var Ut = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  it = {
    setTimeout: function (r, e) {
      for (var t = [], n = 2; n < arguments.length; n++)
        t[n - 2] = arguments[n];
      var s = it.delegate;
      return s?.setTimeout
        ? s.setTimeout.apply(s, Me([r, e], qe(t)))
        : setTimeout.apply(void 0, Me([r, e], qe(t)));
    },
    clearTimeout: function (r) {
      var e = it.delegate;
      return (e?.clearTimeout || clearTimeout)(r);
    },
    delegate: void 0,
  };
function dn(r) {
  it.setTimeout(function () {
    throw r;
  });
}
function St() {}
function fn(r) {
  r();
}
var ft = (function (r) {
    lt(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return (
        (n.isStopped = !1),
        t ? ((n.destination = t), jt(t) && t.add(n)) : (n.destination = yn),
        n
      );
    }
    return (
      (e.create = function (t, n, s) {
        return new ot(t, n, s);
      }),
      (e.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          r.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(dt),
  hn = Function.prototype.bind;
function tt(r, e) {
  return hn.call(r, e);
}
var pn = (function () {
    function r(e) {
      this.partialObserver = e;
    }
    return (
      (r.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(e);
          } catch (n) {
            ve(n);
          }
      }),
      (r.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(e);
          } catch (n) {
            ve(n);
          }
        else ve(e);
      }),
      (r.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (t) {
            ve(t);
          }
      }),
      r
    );
  })(),
  ot = (function (r) {
    lt(e, r);
    function e(t, n, s) {
      var i = r.call(this) || this,
        a;
      if (q(t) || !t)
        a = { next: t ?? void 0, error: n ?? void 0, complete: s ?? void 0 };
      else {
        var o;
        i && Ut.useDeprecatedNextContext
          ? ((o = Object.create(t)),
            (o.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (a = {
              next: t.next && tt(t.next, o),
              error: t.error && tt(t.error, o),
              complete: t.complete && tt(t.complete, o),
            }))
          : (a = t);
      }
      return (i.destination = new pn(a)), i;
    }
    return e;
  })(ft);
function ve(r) {
  dn(r);
}
function gn(r) {
  throw r;
}
var yn = { closed: !0, next: St, error: gn, complete: St },
  mn = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function vn(r) {
  return r;
}
function wn(r) {
  return r.length === 0
    ? vn
    : r.length === 1
    ? r[0]
    : function (t) {
        return r.reduce(function (n, s) {
          return s(n);
        }, t);
      };
}
var fe = (function () {
  function r(e) {
    e && (this._subscribe = e);
  }
  return (
    (r.prototype.lift = function (e) {
      var t = new r();
      return (t.source = this), (t.operator = e), t;
    }),
    (r.prototype.subscribe = function (e, t, n) {
      var s = this,
        i = Cn(e) ? e : new ot(e, t, n);
      return (
        fn(function () {
          var a = s,
            o = a.operator,
            u = a.source;
          i.add(o ? o.call(i, u) : u ? s._subscribe(i) : s._trySubscribe(i));
        }),
        i
      );
    }),
    (r.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }),
    (r.prototype.forEach = function (e, t) {
      var n = this;
      return (
        (t = Ot(t)),
        new t(function (s, i) {
          var a = new ot({
            next: function (o) {
              try {
                e(o);
              } catch (u) {
                i(u), a.unsubscribe();
              }
            },
            error: i,
            complete: s,
          });
          n.subscribe(a);
        })
      );
    }),
    (r.prototype._subscribe = function (e) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(e);
    }),
    (r.prototype[mn] = function () {
      return this;
    }),
    (r.prototype.pipe = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return wn(e)(this);
    }),
    (r.prototype.toPromise = function (e) {
      var t = this;
      return (
        (e = Ot(e)),
        new e(function (n, s) {
          var i;
          t.subscribe(
            function (a) {
              return (i = a);
            },
            function (a) {
              return s(a);
            },
            function () {
              return n(i);
            }
          );
        })
      );
    }),
    (r.create = function (e) {
      return new r(e);
    }),
    r
  );
})();
function Ot(r) {
  var e;
  return (e = r ?? Ut.Promise) !== null && e !== void 0 ? e : Promise;
}
function bn(r) {
  return r && q(r.next) && q(r.error) && q(r.complete);
}
function Cn(r) {
  return (r && r instanceof ft) || (bn(r) && jt(r));
}
function _n(r) {
  return q(r?.lift);
}
function Wt(r) {
  return function (e) {
    if (_n(e))
      return e.lift(function (t) {
        try {
          return r(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Lt(r, e, t, n, s) {
  return new En(r, e, t, n, s);
}
var En = (function (r) {
    lt(e, r);
    function e(t, n, s, i, a, o) {
      var u = r.call(this, t) || this;
      return (
        (u.onFinalize = a),
        (u.shouldUnsubscribe = o),
        (u._next = n
          ? function (f) {
              try {
                n(f);
              } catch (c) {
                t.error(c);
              }
            }
          : r.prototype._next),
        (u._error = i
          ? function (f) {
              try {
                i(f);
              } catch (c) {
                t.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : r.prototype._error),
        (u._complete = s
          ? function () {
              try {
                s();
              } catch (f) {
                t.error(f);
              } finally {
                this.unsubscribe();
              }
            }
          : r.prototype._complete),
        u
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          r.prototype.unsubscribe.call(this),
            !n &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      e
    );
  })(ft),
  Sn = Dt(function (r) {
    return function () {
      r(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    };
  });
function E(r, e) {
  var t = typeof e == "object";
  return new Promise(function (n, s) {
    var i = !1,
      a;
    r.subscribe({
      next: function (o) {
        (a = o), (i = !0);
      },
      error: s,
      complete: function () {
        i ? n(a) : t ? n(e.defaultValue) : s(new Sn());
      },
    });
  });
}
function J(r, e) {
  return Wt(function (t, n) {
    var s = 0;
    t.subscribe(
      Lt(n, function (i) {
        n.next(r.call(e, i, s++));
      })
    );
  });
}
function he(r, e) {
  return Wt(function (t, n) {
    var s = 0;
    t.subscribe(
      Lt(n, function (i) {
        return r.call(e, i, s++) && n.next(i);
      })
    );
  });
}
var Nt = [],
  On = Object.defineProperty,
  Tn = (r, e, t) =>
    e in r
      ? On(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  k = (r, e, t) => (Tn(r, typeof e != "symbol" ? e + "" : e, t), t);
const rt = 5;
class An extends Error {
  constructor(e) {
    const t = Ht(e);
    super(t.message),
      k(this, "response"),
      k(this, "statusCode", 400),
      k(this, "responseBody"),
      k(this, "details"),
      Object.assign(this, t);
  }
}
class Rn extends Error {
  constructor(e) {
    const t = Ht(e);
    super(t.message),
      k(this, "response"),
      k(this, "statusCode", 500),
      k(this, "responseBody"),
      k(this, "details"),
      Object.assign(this, t);
  }
}
function Ht(r) {
  const e = r.body,
    t = {
      response: r,
      statusCode: r.statusCode,
      responseBody: Fn(e, r),
      message: "",
      details: void 0,
    };
  if (e.error && e.message)
    return (t.message = "".concat(e.error, " - ").concat(e.message)), t;
  if (Pn(e)) {
    const n = e.error.items || [],
      s = n
        .slice(0, rt)
        .map((a) => {
          var o;
          return (o = a.error) == null ? void 0 : o.description;
        })
        .filter(Boolean);
    let i = s.length
      ? `:
- `.concat(
          s.join(`
- `)
        )
      : "";
    return (
      n.length > rt &&
        (i += `
...and `.concat(n.length - rt, " more")),
      (t.message = "".concat(e.error.description).concat(i)),
      (t.details = e.error),
      t
    );
  }
  return e.error && e.error.description
    ? ((t.message = e.error.description), (t.details = e.error), t)
    : ((t.message = e.error || e.message || xn(r)), t);
}
function Pn(r) {
  return (
    Tt(r) &&
    Tt(r.error) &&
    r.error.type === "mutationError" &&
    typeof r.error.description == "string"
  );
}
function Tt(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
function xn(r) {
  const e = r.statusMessage ? " ".concat(r.statusMessage) : "";
  return ""
    .concat(r.method, "-request to ")
    .concat(r.url, " resulted in HTTP ")
    .concat(r.statusCode)
    .concat(e);
}
function Fn(r, e) {
  return (e.headers["content-type"] || "")
    .toLowerCase()
    .indexOf("application/json") !== -1
    ? JSON.stringify(r, null, 2)
    : r;
}
const qn = {
    onResponse: (r) => {
      if (r.statusCode >= 500) throw new Rn(r);
      if (r.statusCode >= 400) throw new An(r);
      return r;
    },
  },
  Mn = {
    onResponse: (r) => {
      const e = r.headers["x-sanity-warning"];
      return (
        (Array.isArray(e) ? e : [e])
          .filter(Boolean)
          .forEach((n) => console.warn(n)),
        r
      );
    },
  };
function zt(r, e) {
  let { maxRetries: t = 5, retryDelay: n } = e;
  const s = Gr([
    t > 0 ? ut({ retryDelay: n, maxRetries: t, shouldRetry: In }) : {},
    ...r,
    Mn,
    Zr(),
    en(),
    nn(),
    qn,
    rn({ implementation: fe }),
  ]);
  function i(a) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s)(
      { maxRedirects: 0, ...a }
    );
  }
  return (i.defaultRequester = s), i;
}
function In(r, e, t) {
  const n = t.method === "GET" || t.method === "HEAD",
    i = (t.uri || t.url).startsWith("/data/query"),
    a =
      r.response &&
      (r.response.statusCode === 429 ||
        r.response.statusCode === 502 ||
        r.response.statusCode === 503);
  return (n || i) && a ? !0 : ut.shouldRetry(r, e, t);
}
const $n = "https://www.sanity.io/help/";
function ht(r) {
  return $n + r;
}
const At = ["image", "file"],
  Rt = ["before", "after", "replace"],
  Bt = (r) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(r))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
      );
  },
  kn = (r) => {
    if (!/^[-a-z0-9]+$/i.test(r))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  Dn = (r) => {
    if (At.indexOf(r) === -1)
      throw new Error(
        "Invalid asset type: "
          .concat(r, ". Must be one of ")
          .concat(At.join(", "))
      );
  },
  ce = (r, e) => {
    if (e === null || typeof e != "object" || Array.isArray(e))
      throw new Error("".concat(r, "() takes an object of properties"));
  },
  Gt = (r, e) => {
    if (
      typeof e != "string" ||
      !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) ||
      e.includes("..")
    )
      throw new Error(
        "".concat(r, '(): "').concat(e, '" is not a valid document ID')
      );
  },
  Ie = (r, e) => {
    if (!e._id)
      throw new Error(
        "".concat(
          r,
          '() requires that the document contains an ID ("_id" property)'
        )
      );
    Gt(r, e._id);
  },
  jn = (r, e, t) => {
    const n = "insert(at, selector, items)";
    if (Rt.indexOf(r) === -1) {
      const s = Rt.map((i) => '"'.concat(i, '"')).join(", ");
      throw new Error(
        "".concat(n, ' takes an "at"-argument which is one of: ').concat(s)
      );
    }
    if (typeof e != "string")
      throw new Error(
        "".concat(n, ' takes a "selector"-argument which must be a string')
      );
    if (!Array.isArray(t))
      throw new Error(
        "".concat(n, ' takes an "items"-argument which must be an array')
      );
  },
  Vt = (r) => {
    if (!r.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return r.dataset || "";
  },
  Jt = (r) => {
    if (typeof r != "string" || !/^[a-z0-9._-]{1,75}$/i.test(r))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
      );
    return r;
  };
function Un(r) {
  let e = !1,
    t;
  return function () {
    return e || ((t = r(...arguments)), (e = !0)), t;
  };
}
const Je = (r) =>
    Un(function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return console.warn(r.join(" "), ...t);
    }),
  Wn = Je([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
  ]),
  Ln = Je([
    "The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
  ]),
  Nn = Je([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    "See ".concat(
      ht("js-client-browser-token"),
      " for more information and how to hide this warning."
    ),
  ]),
  Hn = Je([
    "Using the Sanity client without specifying an API version is deprecated.",
    "See ".concat(ht("js-client-api-version")),
  ]),
  zn = "apicdn.sanity.io",
  $e = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
  },
  Bn = ["localhost", "127.0.0.1", "0.0.0.0"],
  Gn = (r) => Bn.indexOf(r) !== -1,
  Vn = function (e) {
    if (e === "1" || e === "X") return;
    const t = new Date(e);
    if (
      !(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0)
    )
      throw new Error(
        "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
      );
  },
  Qt = function (e) {
    switch (e) {
      case "previewDrafts":
      case "published":
      case "raw":
        return;
      default:
        throw new TypeError(
          "Invalid API perspective string, expected `published`, `previewDrafts` or `raw`"
        );
    }
  },
  Yt = (r, e) => {
    const t = Object.assign({}, e, r);
    t.apiVersion || Hn();
    const n = Object.assign({}, $e, t),
      s = n.useProjectHostname;
    if (typeof Promise > "u") {
      const l = ht("js-client-promise-polyfill");
      throw new Error(
        "No native Promise-implementation found, polyfill needed - see ".concat(
          l
        )
      );
    }
    if (s && !n.projectId)
      throw new Error("Configuration must contain `projectId`");
    if (
      (typeof n.perspective == "string" && Qt(n.perspective),
      "encodeSourceMapAtPath" in n ||
        "encodeSourceMap" in n ||
        "studioUrl" in n ||
        "logger" in n)
    )
      throw new Error(
        "It looks like you're using options meant for '@sanity/preview-kit/client', such as 'encodeSourceMapAtPath', 'encodeSourceMap', 'studioUrl' and 'logger'. Make sure you're using the right import."
      );
    const i =
        typeof window < "u" && window.location && window.location.hostname,
      a = i && Gn(window.location.hostname);
    i && a && n.token && n.ignoreBrowserTokenWarning !== !0
      ? Nn()
      : typeof n.useCdn > "u" && Wn(),
      s && kn(n.projectId),
      n.dataset && Bt(n.dataset),
      "requestTagPrefix" in n &&
        (n.requestTagPrefix = n.requestTagPrefix
          ? Jt(n.requestTagPrefix).replace(/\.+$/, "")
          : void 0),
      (n.apiVersion = "".concat(n.apiVersion).replace(/^v/, "")),
      (n.isDefaultApi = n.apiHost === $e.apiHost),
      (n.useCdn = n.useCdn !== !1 && !n.withCredentials),
      Vn(n.apiVersion);
    const o = n.apiHost.split("://", 2),
      u = o[0],
      f = o[1],
      c = n.isDefaultApi ? zn : f;
    return (
      n.useProjectHostname
        ? ((n.url = ""
            .concat(u, "://")
            .concat(n.projectId, ".")
            .concat(f, "/v")
            .concat(n.apiVersion)),
          (n.cdnUrl = ""
            .concat(u, "://")
            .concat(n.projectId, ".")
            .concat(c, "/v")
            .concat(n.apiVersion)))
        : ((n.url = "".concat(n.apiHost, "/v").concat(n.apiVersion)),
          (n.cdnUrl = n.url)),
      n
    );
  },
  Jn = "X-Sanity-Project-ID";
function Qn(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const t = {},
    n = e.token || r.token;
  n && (t.Authorization = "Bearer ".concat(n)),
    !e.useGlobalApi &&
      !r.useProjectHostname &&
      r.projectId &&
      (t[Jn] = r.projectId);
  const s = !!(typeof e.withCredentials > "u"
      ? r.token || r.withCredentials
      : e.withCredentials),
    i = typeof e.timeout > "u" ? r.timeout : e.timeout;
  return Object.assign({}, e, {
    headers: Object.assign({}, t, e.headers || {}),
    timeout: typeof i > "u" ? 5 * 60 * 1e3 : i,
    proxy: e.proxy || r.proxy,
    json: !0,
    withCredentials: s,
    fetch:
      typeof e.fetch == "object" && typeof r.fetch == "object"
        ? { ...r.fetch, ...e.fetch }
        : e.fetch || r.fetch,
  });
}
function Xt(r) {
  if (typeof r == "string" || Array.isArray(r)) return { id: r };
  if (
    typeof r == "object" &&
    r !== null &&
    "query" in r &&
    typeof r.query == "string"
  )
    return "params" in r && typeof r.params == "object" && r.params !== null
      ? { query: r.query, params: r.params }
      : { query: r.query };
  const e = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`",
  ].join(`
`);
  throw new Error(
    `Unknown selection - must be one of:

`.concat(e)
  );
}
const Kt = (r) => {
  let { query: e, params: t = {}, options: n = {} } = r;
  const s = new URLSearchParams(),
    { tag: i, ...a } = n;
  i && s.append("tag", i), s.append("query", e);
  for (const [o, u] of Object.entries(t))
    s.append("$".concat(o), JSON.stringify(u));
  for (const [o, u] of Object.entries(a)) u && s.append(o, "".concat(u));
  return "?".concat(s);
};
var Yn = Object.defineProperty,
  Xn = (r, e, t) =>
    e in r
      ? Yn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Pt = (r, e, t) => (Xn(r, typeof e != "symbol" ? e + "" : e, t), t),
  Zt = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  Z = (r, e, t) => (
    Zt(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  er = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  tr = (r, e, t, n) => (
    Zt(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  X,
  K;
class rr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Pt(this, "selection"),
      Pt(this, "operations"),
      (this.selection = e),
      (this.operations = t);
  }
  set(e) {
    return this._assign("set", e);
  }
  setIfMissing(e) {
    return this._assign("setIfMissing", e);
  }
  diffMatchPatch(e) {
    return ce("diffMatchPatch", e), this._assign("diffMatchPatch", e);
  }
  unset(e) {
    if (!Array.isArray(e))
      throw new Error(
        "unset(attrs) takes an array of attributes to unset, non-array given"
      );
    return (
      (this.operations = Object.assign({}, this.operations, { unset: e })), this
    );
  }
  inc(e) {
    return this._assign("inc", e);
  }
  dec(e) {
    return this._assign("dec", e);
  }
  insert(e, t, n) {
    return jn(e, t, n), this._assign("insert", { [e]: t, items: n });
  }
  append(e, t) {
    return this.insert("after", "".concat(e, "[-1]"), t);
  }
  prepend(e, t) {
    return this.insert("before", "".concat(e, "[0]"), t);
  }
  splice(e, t, n, s) {
    const i = typeof n > "u" || n === -1,
      a = t < 0 ? t - 1 : t,
      o = i ? -1 : Math.max(0, t + n),
      u = a < 0 && o >= 0 ? "" : o,
      f = "".concat(e, "[").concat(a, ":").concat(u, "]");
    return this.insert("replace", f, s || []);
  }
  ifRevisionId(e) {
    return (this.operations.ifRevisionID = e), this;
  }
  serialize() {
    return { ...Xt(this.selection), ...this.operations };
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = {}), this;
  }
  _assign(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return (
      ce(e, t),
      (this.operations = Object.assign({}, this.operations, {
        [e]: Object.assign({}, (n && this.operations[e]) || {}, t),
      })),
      this
    );
  }
  _set(e, t) {
    return this._assign(e, t, !1);
  }
}
const Kn = class nr extends rr {
  constructor(e, t, n) {
    super(e, t), er(this, X, void 0), tr(this, X, n);
  }
  clone() {
    return new nr(this.selection, { ...this.operations }, Z(this, X));
  }
  commit(e) {
    if (!Z(this, X))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const t = typeof this.selection == "string",
      n = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
    return Z(this, X).mutate({ patch: this.serialize() }, n);
  }
};
X = new WeakMap();
let ue = Kn;
const Zn = class sr extends rr {
  constructor(e, t, n) {
    super(e, t), er(this, K, void 0), tr(this, K, n);
  }
  clone() {
    return new sr(this.selection, { ...this.operations }, Z(this, K));
  }
  commit(e) {
    if (!Z(this, K))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const t = typeof this.selection == "string",
      n = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
    return Z(this, K).mutate({ patch: this.serialize() }, n);
  }
};
K = new WeakMap();
let le = Zn;
var es = Object.defineProperty,
  ts = (r, e, t) =>
    e in r
      ? es(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  xt = (r, e, t) => (ts(r, typeof e != "symbol" ? e + "" : e, t), t),
  ir = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  D = (r, e, t) => (
    ir(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  or = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  ar = (r, e, t, n) => (
    ir(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  W,
  L;
const cr = { returnDocuments: !1 };
class ur {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : void 0;
    xt(this, "operations"),
      xt(this, "trxId"),
      (this.operations = e),
      (this.trxId = t);
  }
  create(e) {
    return ce("create", e), this._add({ create: e });
  }
  createIfNotExists(e) {
    const t = "createIfNotExists";
    return ce(t, e), Ie(t, e), this._add({ [t]: e });
  }
  createOrReplace(e) {
    const t = "createOrReplace";
    return ce(t, e), Ie(t, e), this._add({ [t]: e });
  }
  delete(e) {
    return Gt("delete", e), this._add({ delete: { id: e } });
  }
  transactionId(e) {
    return e ? ((this.trxId = e), this) : this.trxId;
  }
  serialize() {
    return [...this.operations];
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = []), this;
  }
  _add(e) {
    return this.operations.push(e), this;
  }
}
const rs = class lr extends ur {
  constructor(e, t, n) {
    super(e, n), or(this, W, void 0), ar(this, W, t);
  }
  clone() {
    return new lr([...this.operations], D(this, W), this.trxId);
  }
  commit(e) {
    if (!D(this, W))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return D(this, W).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, cr, e || {})
    );
  }
  patch(e, t) {
    const n = typeof t == "function";
    if (typeof e != "string" && e instanceof le)
      return this._add({ patch: e.serialize() });
    if (n) {
      const i = t(new le(e, {}, D(this, W)));
      if (!(i instanceof le))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: i.serialize() });
    }
    return this._add({ patch: { id: e, ...t } });
  }
};
W = new WeakMap();
let dr = rs;
const ns = class fr extends ur {
  constructor(e, t, n) {
    super(e, n), or(this, L, void 0), ar(this, L, t);
  }
  clone() {
    return new fr([...this.operations], D(this, L), this.trxId);
  }
  commit(e) {
    if (!D(this, L))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return D(this, L).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, cr, e || {})
    );
  }
  patch(e, t) {
    const n = typeof t == "function";
    if (typeof e != "string" && e instanceof ue)
      return this._add({ patch: e.serialize() });
    if (n) {
      const i = t(new ue(e, {}, D(this, L)));
      if (!(i instanceof ue))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: i.serialize() });
    }
    return this._add({ patch: { id: e, ...t } });
  }
};
L = new WeakMap();
let hr = ns;
const ss = (r, e) => (r === !1 ? void 0 : typeof r > "u" ? e : r),
  is = function () {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
      dryRun: r.dryRun,
      returnIds: !0,
      returnDocuments: ss(r.returnDocuments, !0),
      visibility: r.visibility || "sync",
      autoGenerateArrayKeys: r.autoGenerateArrayKeys,
      skipCrossDatasetReferenceValidation:
        r.skipCrossDatasetReferenceValidation,
    };
  },
  pt = (r) => r.type === "response",
  os = (r) => r.body,
  as = (r, e) => r.reduce((t, n) => ((t[e(n)] = n), t), Object.create(null)),
  cs = 11264;
function pr(r, e, t, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const i = s.filterResponse === !1 ? (c) => c : (c) => c.result,
    {
      cache: a,
      next: o,
      ...u
    } = { useAbortSignal: typeof s.signal < "u", ...s },
    f =
      typeof a < "u" || typeof o < "u"
        ? { ...u, fetch: { cache: a, next: o } }
        : u;
  return pe(r, e, "query", { query: t, params: n }, f).pipe(J(i));
}
function gr(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const s = { uri: te(r, "doc", t), json: !0, tag: n.tag };
  return ge(r, e, s).pipe(
    he(pt),
    J((i) => i.body.documents && i.body.documents[0])
  );
}
function yr(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const s = { uri: te(r, "doc", t.join(",")), json: !0, tag: n.tag };
  return ge(r, e, s).pipe(
    he(pt),
    J((i) => {
      const a = as(i.body.documents || [], (o) => o._id);
      return t.map((o) => a[o] || null);
    })
  );
}
function mr(r, e, t, n) {
  return Ie("createIfNotExists", t), Qe(r, e, t, "createIfNotExists", n);
}
function vr(r, e, t, n) {
  return Ie("createOrReplace", t), Qe(r, e, t, "createOrReplace", n);
}
function wr(r, e, t, n) {
  return pe(r, e, "mutate", { mutations: [{ delete: Xt(t) }] }, n);
}
function br(r, e, t, n) {
  let s;
  t instanceof le || t instanceof ue
    ? (s = { patch: t.serialize() })
    : t instanceof dr || t instanceof hr
    ? (s = t.serialize())
    : (s = t);
  const i = Array.isArray(s) ? s : [s],
    a = (n && n.transactionId) || void 0;
  return pe(r, e, "mutate", { mutations: i, transactionId: a }, n);
}
function pe(r, e, t, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const i = t === "mutate",
    a = t === "query",
    o = i ? "" : Kt(n),
    u = !i && o.length < cs,
    f = u ? o : "",
    c = s.returnFirst,
    { timeout: l, token: d, tag: v, headers: w } = s,
    h = te(r, t, f),
    p = {
      method: u ? "GET" : "POST",
      uri: h,
      json: !0,
      body: u ? void 0 : n,
      query: i && is(s),
      timeout: l,
      headers: w,
      token: d,
      tag: v,
      perspective: s.perspective,
      resultSourceMap: s.resultSourceMap,
      canUseCdn: a,
      signal: s.signal,
      fetch: s.fetch,
      useAbortSignal: s.useAbortSignal,
    };
  return ge(r, e, p).pipe(
    he(pt),
    J(os),
    J((m) => {
      if (!i) return m;
      const b = m.results || [];
      if (s.returnDocuments)
        return c ? b[0] && b[0].document : b.map((O) => O.document);
      const F = c ? "documentId" : "documentIds",
        y = c ? b[0] && b[0].id : b.map((O) => O.id);
      return { transactionId: m.transactionId, results: b, [F]: y };
    })
  );
}
function Qe(r, e, t, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const i = { [n]: t },
    a = Object.assign({ returnFirst: !0, returnDocuments: !0 }, s);
  return pe(r, e, "mutate", { mutations: [i] }, a);
}
function ge(r, e, t) {
  var n;
  const s = t.url || t.uri,
    i = r.config(),
    a =
      typeof t.canUseCdn > "u"
        ? ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 &&
          s.indexOf("/data/") === 0
        : t.canUseCdn;
  let o = i.useCdn && a;
  const u =
    t.tag && i.requestTagPrefix
      ? [i.requestTagPrefix, t.tag].join(".")
      : t.tag || i.requestTagPrefix;
  if (
    (u && (t.query = { tag: Jt(u), ...t.query }),
    ["GET", "HEAD", "POST"].indexOf(t.method || "GET") >= 0 &&
      s.indexOf("/data/query/") === 0)
  ) {
    ((n = t.resultSourceMap) != null ? n : i.resultSourceMap) &&
      (t.query = { resultSourceMap: !0, ...t.query });
    const l = t.perspective || i.perspective;
    typeof l == "string" &&
      l !== "raw" &&
      (Qt(l),
      (t.query = { perspective: l, ...t.query }),
      l === "previewDrafts" && o && ((o = !1), Ln()));
  }
  const f = Qn(i, Object.assign({}, t, { url: gt(r, s, o) })),
    c = new fe((l) => e(f, i.requester).subscribe(l));
  return t.signal ? c.pipe(us(t.signal)) : c;
}
function x(r, e, t) {
  return ge(r, e, t).pipe(
    he((s) => s.type === "response"),
    J((s) => s.body)
  );
}
function te(r, e, t) {
  const n = r.config(),
    s = Vt(n),
    i = "/".concat(e, "/").concat(s),
    a = t ? "".concat(i, "/").concat(t) : i;
  return "/data".concat(a).replace(/\/($|\?)/, "$1");
}
function gt(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const { url: n, cdnUrl: s } = r.config(),
    i = t ? s : n;
  return "".concat(i, "/").concat(e.replace(/^\//, ""));
}
function us(r) {
  return (e) =>
    new fe((t) => {
      const n = () => t.error(ds(r));
      if (r && r.aborted) {
        n();
        return;
      }
      const s = e.subscribe(t);
      return (
        r.addEventListener("abort", n),
        () => {
          r.removeEventListener("abort", n), s.unsubscribe();
        }
      );
    });
}
const ls = !!globalThis.DOMException;
function ds(r) {
  var e, t;
  if (ls)
    return new DOMException(
      (e = r?.reason) != null ? e : "The operation was aborted.",
      "AbortError"
    );
  const n = new Error(
    (t = r?.reason) != null ? t : "The operation was aborted."
  );
  return (n.name = "AbortError"), n;
}
var Cr = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  ke = (r, e, t) => (
    Cr(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  De = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  je = (r, e, t, n) => (
    Cr(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  Se,
  Oe,
  Te,
  Ae;
class fs {
  constructor(e, t) {
    De(this, Se, void 0),
      De(this, Oe, void 0),
      je(this, Se, e),
      je(this, Oe, t);
  }
  upload(e, t, n) {
    return _r(ke(this, Se), ke(this, Oe), e, t, n);
  }
}
Se = new WeakMap();
Oe = new WeakMap();
class hs {
  constructor(e, t) {
    De(this, Te, void 0),
      De(this, Ae, void 0),
      je(this, Te, e),
      je(this, Ae, t);
  }
  upload(e, t, n) {
    const s = _r(ke(this, Te), ke(this, Ae), e, t, n);
    return E(
      s.pipe(
        he((i) => i.type === "response"),
        J((i) => i.body.document)
      )
    );
  }
}
Te = new WeakMap();
Ae = new WeakMap();
function _r(r, e, t, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  Dn(t);
  let i = s.extract || void 0;
  i && !i.length && (i = ["none"]);
  const a = Vt(r.config()),
    o = t === "image" ? "images" : "files",
    u = ps(s, n),
    {
      tag: f,
      label: c,
      title: l,
      description: d,
      creditLine: v,
      filename: w,
      source: h,
    } = u,
    p = {
      label: c,
      title: l,
      description: d,
      filename: w,
      meta: i,
      creditLine: v,
    };
  return (
    h && ((p.sourceId = h.id), (p.sourceName = h.name), (p.sourceUrl = h.url)),
    ge(r, e, {
      tag: f,
      method: "POST",
      timeout: u.timeout || 0,
      uri: "/assets/".concat(o, "/").concat(a),
      headers: u.contentType ? { "Content-Type": u.contentType } : {},
      query: p,
      body: n,
    })
  );
}
function ps(r, e) {
  return typeof File > "u" || !(e instanceof File)
    ? r
    : Object.assign(
        {
          filename: r.preserveFilename === !1 ? void 0 : e.name,
          contentType: e.type,
        },
        r
      );
}
var gs = (r, e) =>
  Object.keys(e)
    .concat(Object.keys(r))
    .reduce((t, n) => ((t[n] = typeof r[n] > "u" ? e[n] : r[n]), t), {});
const ys = (r, e) =>
    e.reduce((t, n) => (typeof r[n] > "u" || (t[n] = r[n]), t), {}),
  ms = 16e3 - 1200,
  vs = [
    "includePreviousRevision",
    "includeResult",
    "visibility",
    "effectFormat",
    "tag",
  ],
  ws = { includeResult: !0 };
function Er(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
      url: n,
      token: s,
      withCredentials: i,
      requestTagPrefix: a,
    } = this.config(),
    o = t.tag && a ? [a, t.tag].join(".") : t.tag,
    u = { ...gs(t, ws), tag: o },
    f = ys(u, vs),
    c = Kt({ query: r, params: e, options: { tag: o, ...f } }),
    l = "".concat(n).concat(te(this, "listen", c));
  if (l.length > ms)
    return new fe((h) => h.error(new Error("Query too large for listener")));
  const d = u.events ? u.events : ["mutation"],
    v = d.indexOf("reconnect") !== -1,
    w = {};
  return (
    (s || i) && (w.withCredentials = !0),
    s && (w.headers = { Authorization: "Bearer ".concat(s) }),
    new fe((h) => {
      let p;
      me()
        .then((T) => {
          p = T;
        })
        .catch((T) => {
          h.error(T), Ye();
        });
      let m,
        b = !1;
      function F() {
        b ||
          (ye(),
          !b &&
            p.readyState === p.CLOSED &&
            (re(), clearTimeout(m), (m = setTimeout(Pr, 100))));
      }
      function y(T) {
        h.error(bs(T));
      }
      function O(T) {
        const M = Sr(T);
        return M instanceof Error ? h.error(M) : h.next(M);
      }
      function Q() {
        (b = !0), re(), h.complete();
      }
      function re() {
        p &&
          (p.removeEventListener("error", F),
          p.removeEventListener("channelError", y),
          p.removeEventListener("disconnect", Q),
          d.forEach((T) => p.removeEventListener(T, O)),
          p.close());
      }
      function ye() {
        v && h.next({ type: "reconnect" });
      }
      async function me() {
        const { default: T } = await xr(
            () => import("./browser.a61b2781.js").then((Xe) => Xe.b),
            [
              "_hej/browser.a61b2781.js",
              "_hej/_commonjsHelpers.de833af9.js",
            ]
          ),
          M = new T(l, w);
        return (
          M.addEventListener("error", F),
          M.addEventListener("channelError", y),
          M.addEventListener("disconnect", Q),
          d.forEach((Xe) => M.addEventListener(Xe, O)),
          M
        );
      }
      function Pr() {
        me()
          .then((T) => {
            p = T;
          })
          .catch((T) => {
            h.error(T), Ye();
          });
      }
      function Ye() {
        (b = !0), re();
      }
      return Ye;
    })
  );
}
function Sr(r) {
  try {
    const e = (r.data && JSON.parse(r.data)) || {};
    return Object.assign({ type: r.type }, e);
  } catch (e) {
    return e;
  }
}
function bs(r) {
  if (r instanceof Error) return r;
  const e = Sr(r);
  return e instanceof Error ? e : new Error(Cs(e));
}
function Cs(r) {
  return r.error
    ? r.error.description
      ? r.error.description
      : typeof r.error == "string"
      ? r.error
      : JSON.stringify(r.error, null, 2)
    : r.message || "Unknown listener error";
}
var Or = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  S = (r, e, t) => (
    Or(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  Ue = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  We = (r, e, t, n) => (
    Or(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  N,
  H,
  z,
  B;
class _s {
  constructor(e, t) {
    Ue(this, N, void 0), Ue(this, H, void 0), We(this, N, e), We(this, H, t);
  }
  create(e, t) {
    return ee(S(this, N), S(this, H), "PUT", e, t);
  }
  edit(e, t) {
    return ee(S(this, N), S(this, H), "PATCH", e, t);
  }
  delete(e) {
    return ee(S(this, N), S(this, H), "DELETE", e);
  }
  list() {
    return x(S(this, N), S(this, H), { uri: "/datasets" });
  }
}
N = new WeakMap();
H = new WeakMap();
class Es {
  constructor(e, t) {
    Ue(this, z, void 0), Ue(this, B, void 0), We(this, z, e), We(this, B, t);
  }
  create(e, t) {
    return E(ee(S(this, z), S(this, B), "PUT", e, t));
  }
  edit(e, t) {
    return E(ee(S(this, z), S(this, B), "PATCH", e, t));
  }
  delete(e) {
    return E(ee(S(this, z), S(this, B), "DELETE", e));
  }
  list() {
    return E(x(S(this, z), S(this, B), { uri: "/datasets" }));
  }
}
z = new WeakMap();
B = new WeakMap();
function ee(r, e, t, n, s) {
  return Bt(n), x(r, e, { method: t, uri: "/datasets/".concat(n), body: s });
}
var Tr = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  j = (r, e, t) => (
    Tr(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  Le = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  Ne = (r, e, t, n) => (
    Tr(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  se,
  ie,
  oe,
  ae;
class Ss {
  constructor(e, t) {
    Le(this, se, void 0),
      Le(this, ie, void 0),
      Ne(this, se, e),
      Ne(this, ie, t);
  }
  list(e) {
    const t =
      e?.includeMembers === !1 ? "/projects?includeMembers=false" : "/projects";
    return x(j(this, se), j(this, ie), { uri: t });
  }
  getById(e) {
    return x(j(this, se), j(this, ie), { uri: "/projects/".concat(e) });
  }
}
se = new WeakMap();
ie = new WeakMap();
class Os {
  constructor(e, t) {
    Le(this, oe, void 0),
      Le(this, ae, void 0),
      Ne(this, oe, e),
      Ne(this, ae, t);
  }
  list(e) {
    const t =
      e?.includeMembers === !1 ? "/projects?includeMembers=false" : "/projects";
    return E(x(j(this, oe), j(this, ae), { uri: t }));
  }
  getById(e) {
    return E(x(j(this, oe), j(this, ae), { uri: "/projects/".concat(e) }));
  }
}
oe = new WeakMap();
ae = new WeakMap();
var Ar = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  He = (r, e, t) => (
    Ar(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  ze = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  Be = (r, e, t, n) => (
    Ar(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  Re,
  Pe,
  xe,
  Fe;
class Ts {
  constructor(e, t) {
    ze(this, Re, void 0),
      ze(this, Pe, void 0),
      Be(this, Re, e),
      Be(this, Pe, t);
  }
  getById(e) {
    return x(He(this, Re), He(this, Pe), { uri: "/users/".concat(e) });
  }
}
Re = new WeakMap();
Pe = new WeakMap();
class As {
  constructor(e, t) {
    ze(this, xe, void 0),
      ze(this, Fe, void 0),
      Be(this, xe, e),
      Be(this, Fe, t);
  }
  getById(e) {
    return E(x(He(this, xe), He(this, Fe), { uri: "/users/".concat(e) }));
  }
}
xe = new WeakMap();
Fe = new WeakMap();
var Rs = Object.defineProperty,
  Ps = (r, e, t) =>
    e in r
      ? Rs(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  P = (r, e, t) => (Ps(r, typeof e != "symbol" ? e + "" : e, t), t),
  Rr = (r, e, t) => {
    if (!e.has(r)) throw TypeError("Cannot " + t);
  },
  g = (r, e, t) => (
    Rr(r, e, "read from private field"), t ? t.call(r) : e.get(r)
  ),
  Ge = (r, e, t) => {
    if (e.has(r))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(r) : e.set(r, t);
  },
  Ve = (r, e, t, n) => (
    Rr(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
  ),
  G,
  _,
  V,
  C;
const xs = class at {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e;
    P(this, "assets"),
      P(this, "datasets"),
      P(this, "projects"),
      P(this, "users"),
      Ge(this, G, void 0),
      Ge(this, _, void 0),
      P(this, "listen", Er),
      this.config(t),
      Ve(this, _, e),
      (this.assets = new fs(this, g(this, _))),
      (this.datasets = new _s(this, g(this, _))),
      (this.projects = new Ss(this, g(this, _))),
      (this.users = new Ts(this, g(this, _)));
  }
  clone() {
    return new at(g(this, _), this.config());
  }
  config(e) {
    if (e === void 0) return { ...g(this, G) };
    if (g(this, G) && g(this, G).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return Ve(this, G, Yt(e, g(this, G) || {})), this;
  }
  withConfig(e) {
    return new at(g(this, _), { ...this.config(), ...e });
  }
  fetch(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return pr(this, g(this, _), e, t, n);
  }
  getDocument(e, t) {
    return gr(this, g(this, _), e, t);
  }
  getDocuments(e, t) {
    return yr(this, g(this, _), e, t);
  }
  create(e, t) {
    return Qe(this, g(this, _), e, "create", t);
  }
  createIfNotExists(e, t) {
    return mr(this, g(this, _), e, t);
  }
  createOrReplace(e, t) {
    return vr(this, g(this, _), e, t);
  }
  delete(e, t) {
    return wr(this, g(this, _), e, t);
  }
  mutate(e, t) {
    return br(this, g(this, _), e, t);
  }
  patch(e, t) {
    return new ue(e, t, this);
  }
  transaction(e) {
    return new hr(e, this);
  }
  request(e) {
    return x(this, g(this, _), e);
  }
  getUrl(e, t) {
    return gt(this, e, t);
  }
  getDataUrl(e, t) {
    return te(this, e, t);
  }
};
G = new WeakMap();
_ = new WeakMap();
let Fs = xs;
const qs = class ct {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e;
    P(this, "assets"),
      P(this, "datasets"),
      P(this, "projects"),
      P(this, "users"),
      P(this, "observable"),
      Ge(this, V, void 0),
      Ge(this, C, void 0),
      P(this, "listen", Er),
      this.config(t),
      Ve(this, C, e),
      (this.assets = new hs(this, g(this, C))),
      (this.datasets = new Es(this, g(this, C))),
      (this.projects = new Os(this, g(this, C))),
      (this.users = new As(this, g(this, C))),
      (this.observable = new Fs(e, t));
  }
  clone() {
    return new ct(g(this, C), this.config());
  }
  config(e) {
    if (e === void 0) return { ...g(this, V) };
    if (g(this, V) && g(this, V).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return (
      this.observable && this.observable.config(e),
      Ve(this, V, Yt(e, g(this, V) || {})),
      this
    );
  }
  withConfig(e) {
    return new ct(g(this, C), { ...this.config(), ...e });
  }
  fetch(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return E(pr(this, g(this, C), e, t, n));
  }
  getDocument(e, t) {
    return E(gr(this, g(this, C), e, t));
  }
  getDocuments(e, t) {
    return E(yr(this, g(this, C), e, t));
  }
  create(e, t) {
    return E(Qe(this, g(this, C), e, "create", t));
  }
  createIfNotExists(e, t) {
    return E(mr(this, g(this, C), e, t));
  }
  createOrReplace(e, t) {
    return E(vr(this, g(this, C), e, t));
  }
  delete(e, t) {
    return E(wr(this, g(this, C), e, t));
  }
  mutate(e, t) {
    return E(br(this, g(this, C), e, t));
  }
  patch(e, t) {
    return new le(e, t, this);
  }
  transaction(e) {
    return new dr(e, this);
  }
  request(e) {
    return E(x(this, g(this, C), e));
  }
  dataRequest(e, t, n) {
    return E(pe(this, g(this, C), e, t, n));
  }
  getUrl(e, t) {
    return gt(this, e, t);
  }
  getDataUrl(e, t) {
    return te(this, e, t);
  }
};
V = new WeakMap();
C = new WeakMap();
let Ms = qs;
const Is = zt(Nt, {});
Is.defaultRequester;
const $s = (r) =>
    new Ms(zt(Nt, { maxRetries: r.maxRetries, retryDelay: r.retryDelay }), r),
  Ws = $s({
    projectId: "amgj1p99",
    dataset: "production",
    apiVersion: "2023-06-16",
  });
function Ls() {
  return `{
        'url' : asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        "alt" : asset->altText,
        "alt_content": attribution,
        "file_name": asset->originalFilename,
    }`;
}
function Ns() {
  return `{
                author_slug,
                ideas_slug,
                industry_slug,
                location_slug,
                career_slug,
                work_slug,
                service_slug
    }`;
}
const ks = ({ hash: r } = {}) =>
    location.pathname + location.search + (r ? location.hash : ""),
  Hs = (r, e = {}) => {
    r = r || ks({ hash: !0 });
    const t = { url: r, random: Math.random(), source: "swup", ...e };
    history.pushState(t, "", r);
  };
export { Ns as a, Hs as b, Ws as c, Ls as g };
