import {
  v as Z,
  a as ee,
  c as te,
  b as re,
} from "./runtime-dom.esm-bundler.111d248e.js";
import {
  q as S,
  s as V,
  r as A,
  u as w,
  v as N,
  o as F,
  x as G,
  h as I,
  y as $,
  g as p,
  c as m,
  z as se,
  n as f,
  t as E,
  d as O,
  a as g,
  A as b,
  w as J,
  F as Q,
  e as z,
  b as ie,
  B as T,
  S as ae,
} from "./runtime-core.esm-bundler.51d06d5f.js";
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */ function X(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var q = X(function (e) {
    const t = Object.prototype.toString,
      r = Object.prototype.propertyIsEnumerable,
      s = Object.getOwnPropertySymbols;
    e.exports = (o, ...a) => {
      if (!i(o))
        throw new TypeError("expected the first argument to be an object");
      if (
        a.length === 0 ||
        typeof Symbol != "function" ||
        typeof s != "function"
      )
        return o;
      for (let n of a) {
        let l = s(n);
        for (let d of l) r.call(n, d) && (o[d] = n[d]);
      }
      return o;
    };
    function i(o) {
      return (
        typeof o == "function" ||
        t.call(o) === "[object Object]" ||
        Array.isArray(o)
      );
    }
  }),
  j = Object.freeze({ __proto__: null, default: q, __moduleExports: q }),
  oe = (j && q) || j,
  M = X(function (e) {
    const t = Object.prototype.toString,
      r = (a) => a !== "__proto__" && a !== "constructor" && a !== "prototype",
      s = (e.exports = (a, ...n) => {
        let l = 0;
        for (o(a) && (a = n[l++]), a || (a = {}); l < n.length; l++)
          if (i(n[l])) {
            for (const d of Object.keys(n[l]))
              r(d) &&
                (i(a[d]) && i(n[l][d]) ? s(a[d], n[l][d]) : (a[d] = n[l][d]));
            oe(a, n[l]);
          }
        return a;
      });
    function i(a) {
      return typeof a == "function" || t.call(a) === "[object Object]";
    }
    function o(a) {
      return typeof a == "object" ? a === null : typeof a != "function";
    }
  });
const v = typeof window < "u" && window !== null,
  U = ne();
function ne() {
  return v &&
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ? ("isIntersecting" in window.IntersectionObserverEntry.prototype ||
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          "isIntersecting",
          {
            get: function () {
              return this.intersectionRatio > 0;
            },
          }
        ),
      !0)
    : !1;
}
const y = { event: "event", observer: "observer" };
function x(e, t) {
  if (!e.length) return;
  const r = e.indexOf(t);
  if (r > -1) return e.splice(r, 1);
}
function D(e, t) {
  if (e.tagName !== "IMG" || !e.getAttribute("data-srcset")) return "";
  let r = e.getAttribute("data-srcset").trim().split(",");
  const s = [],
    o = e.parentNode.offsetWidth * t;
  let a, n, l;
  r.forEach((u) => {
    (u = u.trim()),
      (a = u.lastIndexOf(" ")),
      a === -1
        ? ((n = u), (l = 99999))
        : ((n = u.substr(0, a)),
          (l = parseInt(u.substr(a + 1, u.length - a - 2), 10))),
      s.push([l, n]);
  }),
    s.sort((u, c) => {
      if (u[0] < c[0]) return 1;
      if (u[0] > c[0]) return -1;
      if (u[0] === c[0]) {
        if (c[1].indexOf(".webp", c[1].length - 5) !== -1) return 1;
        if (u[1].indexOf(".webp", u[1].length - 5) !== -1) return -1;
      }
      return 0;
    });
  let d = "",
    h;
  for (let u = 0; u < s.length; u++) {
    (h = s[u]), (d = h[1]);
    const c = s[u + 1];
    if (c && c[0] < o) {
      d = h[1];
      break;
    } else if (!c) {
      d = h[1];
      break;
    }
  }
  return d;
}
const le = (e = 1) => (v && window.devicePixelRatio) || e;
function de() {
  if (!v) return !1;
  let e = !0;
  function t(r, s) {
    const i = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha:
          "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation:
          "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      },
      o = new Image();
    (o.onload = function () {
      const a = o.width > 0 && o.height > 0;
      s(a);
    }),
      (o.onerror = function () {
        s(!1);
      }),
      (o.src = "data:image/webp;base64," + i[r]);
  }
  return (
    t("lossy", (r) => {
      e = r;
    }),
    t("lossless", (r) => {
      e = r;
    }),
    t("alpha", (r) => {
      e = r;
    }),
    t("animation", (r) => {
      e = r;
    }),
    e
  );
}
function ue(e, t) {
  let r = null,
    s = 0;
  return function () {
    if (r) return;
    const i = Date.now() - s,
      o = this,
      a = arguments,
      n = function () {
        (s = Date.now()), (r = !1), e.apply(o, a);
      };
    i >= t ? n() : (r = setTimeout(n, t));
  };
}
function ce() {
  if (!v) return !1;
  let e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function () {
        e = !0;
      },
    });
    window.addEventListener("test", R, t);
  } catch {}
  return e;
}
const he = ce(),
  pe = {
    on(e, t, r, s = !1) {
      he
        ? e.addEventListener(t, r, { capture: s, passive: !0 })
        : e.addEventListener(t, r, s);
    },
    off(e, t, r, s = !1) {
      e.removeEventListener(t, r, s);
    },
  },
  B = (e, t, r) => {
    let s = new Image();
    if (!e || !e.src) {
      const i = new Error("image src is required");
      return r(i);
    }
    e.cors && (s.crossOrigin = e.cors),
      (s.src = e.src),
      (s.onload = function () {
        t({
          naturalHeight: s.naturalHeight,
          naturalWidth: s.naturalWidth,
          src: s.src,
        }),
          (s = null);
      }),
      (s.onerror = function (i) {
        r(i);
      });
  },
  k = (e, t) =>
    typeof getComputedStyle < "u"
      ? getComputedStyle(e, null).getPropertyValue(t)
      : e.style[t],
  fe = (e) => k(e, "overflow") + k(e, "overflowY") + k(e, "overflowX"),
  me = (e) => {
    if (!v) return;
    if (!(e instanceof Element)) return window;
    let t = e;
    for (
      ;
      t &&
      !(t === document.body || t === document.documentElement || !t.parentNode);

    ) {
      if (/(scroll|auto)/.test(fe(t))) return t;
      t = t.parentNode;
    }
    return window;
  };
function ge(e) {
  return e !== null && typeof e == "object";
}
function R() {}
class Ae {
  constructor(t) {
    (this.max = t || 100), (this._caches = []);
  }
  has(t) {
    return this._caches.indexOf(t) > -1;
  }
  add(t) {
    this.has(t) ||
      (this._caches.push(t), this._caches.length > this.max && this.free());
  }
  free() {
    this._caches.shift();
  }
}
class be {
  constructor(t, r, s, i, o, a, n, l, d, h) {
    (this.el = t),
      (this.src = r),
      (this.error = s),
      (this.loading = i),
      (this.bindType = o),
      (this.attempt = 0),
      (this.cors = l),
      (this.naturalHeight = 0),
      (this.naturalWidth = 0),
      (this.options = n),
      (this.rect = {}),
      (this.$parent = a),
      (this.elRenderer = d),
      (this._imageCache = h),
      (this.performanceData = { init: Date.now(), loadStart: 0, loadEnd: 0 }),
      this.filter(),
      this.initState(),
      this.render("loading", !1);
  }
  initState() {
    "dataset" in this.el
      ? (this.el.dataset.src = this.src)
      : this.el.setAttribute("data-src", this.src),
      (this.state = { loading: !1, error: !1, loaded: !1, rendered: !1 });
  }
  record(t) {
    this.performanceData[t] = Date.now();
  }
  update(t) {
    const r = this.src;
    (this.src = t.src),
      (this.loading = t.loading),
      (this.error = t.error),
      this.filter(),
      r !== this.src && ((this.attempt = 0), this.initState());
  }
  getRect() {
    this.rect = this.el.getBoundingClientRect();
  }
  checkInView() {
    return (
      this.getRect(),
      this.rect.top < window.innerHeight * this.options.preLoad &&
        this.rect.bottom > this.options.preLoadTop &&
        this.rect.left < window.innerWidth * this.options.preLoad &&
        this.rect.right > 0
    );
  }
  filter() {
    for (const t in this.options.filter)
      this.options.filter[t](this, this.options);
  }
  renderLoading(t) {
    (this.state.loading = !0),
      B(
        { src: this.loading, cors: this.cors },
        () => {
          this.render("loading", !1), (this.state.loading = !1), t();
        },
        () => {
          t(),
            (this.state.loading = !1),
            this.options.silent ||
              console.warn(
                `VueLazyload log: load failed with loading image(${this.loading})`
              );
        }
      );
  }
  load(t = R) {
    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      this.options.silent ||
        console.log(
          `VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`
        ),
        t();
      return;
    }
    if (!(this.state.rendered && this.state.loaded)) {
      if (this._imageCache.has(this.src))
        return (
          (this.state.loaded = !0),
          this.render("loaded", !0),
          (this.state.rendered = !0),
          t()
        );
      this.renderLoading(() => {
        this.attempt++,
          this.options.adapter.beforeLoad &&
            this.options.adapter.beforeLoad(this, this.options),
          this.record("loadStart"),
          B(
            { src: this.src, cors: this.cors },
            (r) => {
              (this.naturalHeight = r.naturalHeight),
                (this.naturalWidth = r.naturalWidth),
                (this.state.loaded = !0),
                (this.state.error = !1),
                this.record("loadEnd"),
                this.render("loaded", !1),
                (this.state.rendered = !0),
                this._imageCache.add(this.src),
                t();
            },
            (r) => {
              !this.options.silent && console.error(r),
                (this.state.error = !0),
                (this.state.loaded = !1),
                this.render("error", !1);
            }
          );
      });
    }
  }
  render(t, r) {
    this.elRenderer(this, t, r);
  }
  performance() {
    let t = "loading",
      r = 0;
    return (
      this.state.loaded &&
        ((t = "loaded"),
        (r =
          (this.performanceData.loadEnd - this.performanceData.loadStart) /
          1e3)),
      this.state.error && (t = "error"),
      { src: this.src, state: t, time: r }
    );
  }
  $destroy() {
    (this.el = null),
      (this.src = ""),
      (this.error = null),
      (this.loading = ""),
      (this.bindType = null),
      (this.attempt = 0);
  }
}
const P =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  ve = [
    "scroll",
    "wheel",
    "mousewheel",
    "resize",
    "animationend",
    "transitionend",
    "touchmove",
  ],
  ye = { rootMargin: "0px", threshold: 0 };
class _e {
  constructor({
    preLoad: t,
    error: r,
    throttleWait: s,
    preLoadTop: i,
    dispatchEvent: o,
    loading: a,
    attempt: n,
    silent: l = !0,
    scale: d,
    listenEvents: h,
    filter: u,
    adapter: c,
    observer: C,
    observerOptions: L,
  }) {
    (this.version = '"3.0.0"'),
      (this.lazyContainerMananger = null),
      (this.mode = y.event),
      (this.ListenerQueue = []),
      (this.TargetIndex = 0),
      (this.TargetQueue = []),
      (this.options = {
        silent: l,
        dispatchEvent: !!o,
        throttleWait: s || 200,
        preLoad: t || 1.3,
        preLoadTop: i || 0,
        error: r || P,
        loading: a || P,
        attempt: n || 3,
        scale: d || le(d),
        listenEvents: h || ve,
        supportWebp: de(),
        filter: u || {},
        adapter: c || {},
        observer: !!C,
        observerOptions: L || ye,
      }),
      this._initEvent(),
      (this._imageCache = new Ae(200)),
      (this.lazyLoadHandler = ue(
        this._lazyLoadHandler.bind(this),
        this.options.throttleWait
      )),
      this.setMode(this.options.observer ? y.observer : y.event);
  }
  performance() {
    const t = [];
    return this.ListenerQueue.map((r) => t.push(r.performance())), t;
  }
  addLazyBox(t) {
    this.ListenerQueue.push(t),
      v &&
        (this._addListenerTarget(window),
        this._observer && this._observer.observe(t.el),
        t.$el && t.$el.parentNode && this._addListenerTarget(t.$el.parentNode));
  }
  add(t, r, s) {
    if (this.ListenerQueue.some((l) => l.el === t))
      return this.update(t, r), S(this.lazyLoadHandler);
    let {
      src: i,
      loading: o,
      error: a,
      cors: n,
    } = this._valueFormatter(r.value);
    S(() => {
      (i = D(t, this.options.scale) || i),
        this._observer && this._observer.observe(t);
      const l = Object.keys(r.modifiers)[0];
      let d;
      l &&
        ((d = r.instance.$refs[l]),
        (d = d ? d.el || d : document.getElementById(l))),
        d || (d = me(t));
      const h = new be(
        t,
        i,
        a,
        o,
        r.arg,
        d,
        this.options,
        n,
        this._elRenderer.bind(this),
        this._imageCache
      );
      this.ListenerQueue.push(h),
        v && (this._addListenerTarget(window), this._addListenerTarget(d)),
        S(this.lazyLoadHandler);
    });
  }
  update(t, r, s) {
    let { src: i, loading: o, error: a } = this._valueFormatter(r.value);
    i = D(t, this.options.scale) || i;
    const n = this.ListenerQueue.find((l) => l.el === t);
    n
      ? n.update({ src: i, loading: o, error: a })
      : (t.getAttribute("lazy") !== "loaded" || t.dataset.src !== i) &&
        this.add(t, r, s),
      this._observer &&
        (this._observer.unobserve(t), this._observer.observe(t)),
      S(this.lazyLoadHandler);
  }
  remove(t) {
    if (!t) return;
    this._observer && this._observer.unobserve(t);
    const r = this.ListenerQueue.find((s) => s.el === t);
    r &&
      (this._removeListenerTarget(r.$parent),
      this._removeListenerTarget(window),
      x(this.ListenerQueue, r),
      r.$destroy && r.$destroy());
  }
  removeComponent(t) {
    t &&
      (x(this.ListenerQueue, t),
      this._observer && this._observer.unobserve(t.el),
      t.$parent &&
        t.$el.parentNode &&
        this._removeListenerTarget(t.$el.parentNode),
      this._removeListenerTarget(window));
  }
  setMode(t) {
    !U && t === y.observer && (t = y.event),
      (this.mode = t),
      t === y.event
        ? (this._observer &&
            (this.ListenerQueue.forEach((r) => {
              this._observer.unobserve(r.el);
            }),
            (this._observer = null)),
          this.TargetQueue.forEach((r) => {
            this._initListen(r.el, !0);
          }))
        : (this.TargetQueue.forEach((r) => {
            this._initListen(r.el, !1);
          }),
          this._initIntersectionObserver());
  }
  _addListenerTarget(t) {
    if (!t) return;
    let r = this.TargetQueue.find((s) => s.el === t);
    return (
      r
        ? r.childrenCount++
        : ((r = {
            el: t,
            id: ++this.TargetIndex,
            childrenCount: 1,
            listened: !0,
          }),
          this.mode === y.event && this._initListen(r.el, !0),
          this.TargetQueue.push(r)),
      this.TargetIndex
    );
  }
  _removeListenerTarget(t) {
    this.TargetQueue.forEach((r, s) => {
      r.el === t &&
        (r.childrenCount--,
        r.childrenCount ||
          (this._initListen(r.el, !1),
          this.TargetQueue.splice(s, 1),
          (r = null)));
    });
  }
  _initListen(t, r) {
    this.options.listenEvents.forEach((s) =>
      pe[r ? "on" : "off"](t, s, this.lazyLoadHandler)
    );
  }
  _initEvent() {
    (this.Event = { listeners: { loading: [], loaded: [], error: [] } }),
      (this.$on = (t, r) => {
        this.Event.listeners[t] || (this.Event.listeners[t] = []),
          this.Event.listeners[t].push(r);
      }),
      (this.$once = (t, r) => {
        const s = this;
        function i() {
          s.$off(t, i), r.apply(s, arguments);
        }
        this.$on(t, i);
      }),
      (this.$off = (t, r) => {
        if (!r) {
          if (!this.Event.listeners[t]) return;
          this.Event.listeners[t].length = 0;
          return;
        }
        x(this.Event.listeners[t], r);
      }),
      (this.$emit = (t, r, s) => {
        this.Event.listeners[t] &&
          this.Event.listeners[t].forEach((i) => i(r, s));
      });
  }
  _lazyLoadHandler() {
    const t = [];
    this.ListenerQueue.forEach((r, s) => {
      (!r.el || !r.el.parentNode || r.state.loaded) && t.push(r),
        r.checkInView() && (r.state.loaded || r.load());
    }),
      t.forEach((r) => {
        x(this.ListenerQueue, r), r.$destroy && r.$destroy();
      });
  }
  _initIntersectionObserver() {
    U &&
      ((this._observer = new IntersectionObserver(
        this._observerHandler.bind(this),
        this.options.observerOptions
      )),
      this.ListenerQueue.length &&
        this.ListenerQueue.forEach((t) => {
          this._observer.observe(t.el);
        }));
  }
  _observerHandler(t) {
    t.forEach((r) => {
      r.isIntersecting &&
        this.ListenerQueue.forEach((s) => {
          if (s.el === r.target) {
            if (s.state.loaded) return this._observer.unobserve(s.el);
            s.load();
          }
        });
    });
  }
  _elRenderer(t, r, s) {
    if (!t.el) return;
    const { el: i, bindType: o } = t;
    let a;
    switch (r) {
      case "loading":
        a = t.loading;
        break;
      case "error":
        a = t.error;
        break;
      default:
        a = t.src;
        break;
    }
    if (
      (o
        ? (i.style[o] = 'url("' + a + '")')
        : i.getAttribute("src") !== a && i.setAttribute("src", a),
      i.setAttribute("lazy", r),
      this.$emit(r, t, s),
      this.options.adapter[r] && this.options.adapter[r](t, this.options),
      this.options.dispatchEvent)
    ) {
      const n = new CustomEvent(r, { detail: t });
      i.dispatchEvent(n);
    }
  }
  _valueFormatter(t) {
    return ge(t)
      ? (!t.src &&
          !this.options.silent &&
          console.error("Vue Lazyload warning: miss src with " + t),
        {
          src: t.src,
          loading: t.loading || this.options.loading,
          error: t.error || this.options.error,
          cors: this.options.cors,
        })
      : {
          src: t,
          loading: this.options.loading,
          error: this.options.error,
          cors: this.options.cors,
        };
  }
}
const Y = (e, t) => {
  let r = w({});
  const s = () => {
    r = e.value.getBoundingClientRect();
  };
  return {
    rect: r,
    checkInView: () => (
      s(),
      v &&
        r.top < window.innerHeight * t &&
        r.bottom > 0 &&
        r.left < window.innerWidth * t &&
        r.right > 0
    ),
  };
};
var Ce = (e) =>
  V({
    props: { tag: { type: String, default: "div" } },
    emits: ["show"],
    setup(t, { emit: r, slots: s }) {
      const i = A(),
        o = w({ loaded: !1, error: !1, attempt: 0 }),
        a = A(!1),
        { rect: n, checkInView: l } = Y(i, e.options.preLoad),
        d = () => {
          (a.value = !0), (o.loaded = !0), r("show", a.value);
        },
        h = N(() => ({
          el: i.value,
          rect: n,
          checkInView: l,
          load: d,
          state: o,
        }));
      return (
        F(() => {
          e.addLazyBox(h.value), e.lazyLoadHandler();
        }),
        G(() => {
          e.removeComponent(h.value);
        }),
        () => {
          var u;
          return I(t.tag, { ref: i }, [
            a.value &&
              ((u = s.default) === null || u === void 0 ? void 0 : u.call(s)),
          ]);
        }
      );
    },
  });
class Le {
  constructor(t) {
    (this.lazy = t), (t.lazyContainerMananger = this), (this._queue = []);
  }
  bind(t, r, s) {
    const i = new we(t, r, s, this.lazy);
    this._queue.push(i);
  }
  update(t, r, s) {
    const i = this._queue.find((o) => o.el === t);
    i && i.update(t, r);
  }
  unbind(t, r, s) {
    const i = this._queue.find((o) => o.el === t);
    i && (i.clear(), x(this._queue, i));
  }
}
const xe = { selector: "img", error: "", loading: "" };
class we {
  constructor(t, r, s, i) {
    (this.el = t),
      (this.vnode = s),
      (this.binding = r),
      (this.options = {}),
      (this.lazy = i),
      (this._queue = []),
      this.update(t, r);
  }
  update(t, r) {
    (this.el = t),
      (this.options = M({}, xe, r.value)),
      this.getImgs().forEach((i) => {
        this.lazy.add(
          i,
          M({}, this.binding, {
            value: {
              src: i.getAttribute("data-src") || i.dataset.src,
              error:
                i.getAttribute("data-error") ||
                i.dataset.error ||
                this.options.error,
              loading:
                i.getAttribute("data-loading") ||
                i.dataset.loading ||
                this.options.loading,
            },
          }),
          this.vnode
        );
      });
  }
  getImgs() {
    return Array.from(this.el.querySelectorAll(this.options.selector));
  }
  clear() {
    this.getImgs().forEach((r) => this.lazy.remove(r)),
      (this.vnode = null),
      (this.binding = null),
      (this.lazy = null);
  }
}
var Se = (e) =>
    V({
      setup(t, { slots: r }) {
        const s = A(),
          i = w({
            src: "",
            error: "",
            loading: "",
            attempt: e.options.attempt,
          }),
          o = w({ loaded: !1, error: !1, attempt: 0 }),
          { rect: a, checkInView: n } = Y(s, e.options.preLoad),
          l = A(""),
          d = (c = R) => {
            if (o.attempt > i.attempt - 1 && o.error)
              return (
                e.options.silent ||
                  console.log(
                    `VueLazyload log: ${i.src} tried too more than ${i.attempt} times`
                  ),
                c()
              );
            const C = i.src;
            B(
              { src: C },
              ({ src: L }) => {
                (l.value = L), (o.loaded = !0);
              },
              () => {
                o.attempt++, (l.value = i.error), (o.error = !0);
              }
            );
          },
          h = N(() => ({
            el: s.value,
            rect: a,
            checkInView: n,
            load: d,
            state: o,
          }));
        F(() => {
          e.addLazyBox(h.value), e.lazyLoadHandler();
        }),
          G(() => {
            e.removeComponent(h.value);
          });
        const u = () => {
          const { src: c, loading: C, error: L } = e._valueFormatter(t.src);
          (o.loaded = !1),
            (i.src = c),
            (i.error = L),
            (i.loading = C),
            (l.value = i.loading);
        };
        return (
          $(
            () => t.src,
            () => {
              u(), e.addLazyBox(h.value), e.lazyLoadHandler();
            },
            { immediate: !0 }
          ),
          () => {
            var c;
            return I(t.tag || "img", { src: l.value, ref: s }, [
              (c = r.default) === null || c === void 0 ? void 0 : c.call(r),
            ]);
          }
        );
      },
    }),
  Te = {
    install(e, t = {}) {
      const r = new _e(t),
        s = new Le(r);
      if (Number(e.version.split(".")[0]) < 3)
        return new Error("Vue version at least 3.0");
      (e.config.globalProperties.$Lazyload = r),
        e.provide("Lazyload", r),
        t.lazyComponent && e.component("lazy-component", Ce(r)),
        t.lazyImage && e.component("lazy-image", Se(r)),
        e.directive("lazy", {
          beforeMount: r.add.bind(r),
          beforeUpdate: r.update.bind(r),
          updated: r.lazyLoadHandler.bind(r),
          unmounted: r.remove.bind(r),
        }),
        e.directive("lazy-container", {
          beforeMount: s.bind.bind(s),
          updated: s.update.bind(s),
          unmounted: s.unbind.bind(s),
        });
    },
  };
const Ee = {
    __name: "TFormGroup",
    props: { formClass: String, modifierClass: { type: String, default: "" } },
    setup(e) {
      return (t, r) => (
        p(),
        m(
          "div",
          { class: f([e.formClass, e.modifierClass]) },
          [se(t.$slots, "default")],
          2
        )
      );
    },
  },
  Ie = ["for"],
  H = {
    __name: "TLabel",
    props: {
      textLabel: { type: String, default: "" },
      forId: String,
      labelClass: String,
      modifierClass: { type: String, default: "" },
    },
    setup(e) {
      return (t, r) =>
        e.textLabel
          ? (p(),
            m(
              "label",
              {
                key: 0,
                for: e.forId,
                class: f([e.labelClass, e.modifierClass]),
              },
              E(e.textLabel),
              11,
              Ie
            ))
          : O("", !0);
    },
  },
  ke = [
    "type",
    "value",
    "id",
    "maxlength",
    "placeholder",
    "required",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  qe = {
    __name: "TInputField",
    props: {
      type: { type: String, default: "text" },
      modelValue: String,
      id: String,
      inputClass: String,
      modifierClass: { type: String, default: "" },
      error: { type: Boolean, default: !1 },
      maxlength: { type: Number, default: null },
      placeholder: { type: String, default: null },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    setup(e, { emit: t }) {
      const r = e,
        s = A(r.modelValue),
        i = t,
        o = (a) => {
          (s.value = a.target.value), i("update:modelValue", s.value);
        };
      return (
        $(
          () => r.modelValue,
          (a) => {
            s.value = a;
          }
        ),
        (a, n) => (
          p(),
          m(
            "div",
            {
              class: f([
                e.inputClass,
                e.modifierClass,
                { [`${e.inputClass}--error`]: e.error },
              ]),
            },
            [
              g(
                "input",
                b(
                  {
                    type: e.type,
                    value: s.value,
                    id: e.id,
                    class: [`${e.inputClass}__item`],
                    onInput: o,
                    maxlength: e.maxlength,
                    placeholder: e.placeholder,
                    required: e.required,
                    "aria-required": e.required,
                    "aria-invalid": e.error,
                    disabled: e.disabled,
                  },
                  e.extraAttrs
                ),
                null,
                16,
                ke
              ),
            ],
            2
          )
        )
      );
    },
  },
  Be = [
    "id",
    "accept",
    "multiple",
    "required",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  Ve = {
    __name: "TUploadFile",
    props: {
      id: String,
      uploadClass: String,
      modifierClass: { type: String, default: "" },
      modelValue: { type: Object, default: null },
      multiple: { type: Boolean, default: !1 },
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      accept: { type: String, default: "" },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    setup(e, { emit: t }) {
      const r = t,
        s = (i) => {
          const o = i.target.files,
            a = i.target.multiple ? o : o[0];
          r("update:modelValue", a);
        };
      return (i, o) => (
        p(),
        m(
          "div",
          {
            class: f([
              e.uploadClass,
              e.modifierClass,
              { [`${e.uploadClass}--error`]: e.error },
            ]),
          },
          [
            g(
              "input",
              b(
                {
                  type: "file",
                  id: e.id,
                  class: [`${e.uploadClass}__item`],
                  accept: e.accept,
                  onInput: s,
                  multiple: e.multiple,
                  required: e.required,
                  "aria-required": e.required,
                  "aria-invalid": e.error,
                  disabled: e.disabled,
                },
                e.extraAttrs
              ),
              null,
              16,
              Be
            ),
          ],
          2
        )
      );
    },
  },
  $e = [
    "id",
    "required",
    "checked",
    "value",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  K = {
    __name: "TCheckbox",
    props: {
      id: String,
      checkboxClass: String,
      modifierClass: { type: String, default: "" },
      modelValue: Boolean,
      textLabel: { type: String, default: "" },
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue"],
    setup(e) {
      return (t, r) => (
        p(),
        m(
          "div",
          {
            class: f([
              e.checkboxClass,
              e.modifierClass,
              { [`${e.checkboxClass}--error`]: e.error },
            ]),
          },
          [
            g(
              "input",
              b(
                {
                  id: e.id,
                  type: "checkbox",
                  class: [`${e.checkboxClass}__item`],
                  required: e.required,
                  checked: e.modelValue,
                  value: e.modelValue,
                  onChange:
                    r[0] ||
                    (r[0] = (s) => t.$emit("update:modelValue", !e.modelValue)),
                  "aria-required": e.required,
                  "aria-invalid": e.error,
                  disabled: e.disabled,
                },
                e.extraAttrs
              ),
              null,
              16,
              $e
            ),
            I(
              H,
              {
                forId: e.id,
                labelClass: `${e.checkboxClass}__title`,
                textLabel: e.textLabel,
              },
              null,
              8,
              ["forId", "labelClass", "textLabel"]
            ),
          ],
          2
        )
      );
    },
  },
  Oe = ["innerHTML"],
  Qe = {
    __name: "TError",
    props: {
      errorMessage: { type: String, default: null },
      errorClass: String,
      modifierClass: { type: String, default: "" },
    },
    setup(e) {
      return (t, r) =>
        e.errorMessage
          ? (p(),
            m(
              "div",
              {
                key: 0,
                class: f([e.errorClass, e.modifierClass]),
                innerHTML: e.errorMessage,
              },
              null,
              10,
              Oe
            ))
          : O("", !0);
    },
  },
  ze = ["innerHTML"],
  Re = {
    __name: "THint",
    props: {
      hintMessage: { type: String, default: null },
      hintClass: String,
      modifierClass: { type: String, default: "" },
    },
    setup(e) {
      return (t, r) =>
        e.hintMessage
          ? (p(),
            m(
              "div",
              {
                key: 0,
                class: f([e.hintClass, e.modifierClass]),
                innerHTML: e.hintMessage,
              },
              null,
              10,
              ze
            ))
          : O("", !0);
    },
  },
  He = [
    "id",
    "placeholder",
    "rows",
    "required",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  je = {
    __name: "TTextArea",
    props: {
      modelValue: String,
      id: String,
      textAreaClass: String,
      modifierClass: { type: String, default: "" },
      rows: { type: String, default: "3" },
      placeholder: { type: String, default: null },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      error: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    setup(e, { emit: t }) {
      const r = A(e.modelValue),
        s = t,
        i = (o) => {
          (r.value = o.target.value), s("update:modelValue", r.value);
        };
      return (o, a) => (
        p(),
        m(
          "div",
          {
            class: f([
              e.textAreaClass,
              e.modifierClass,
              { [`${e.textAreaClass}--error`]: e.error },
            ]),
          },
          [
            J(
              g(
                "textarea",
                b(
                  {
                    "onUpdate:modelValue":
                      a[0] || (a[0] = (n) => (r.value = n)),
                    id: e.id,
                    class: [`${e.textAreaClass}__item`],
                    placeholder: e.placeholder,
                    rows: e.rows,
                    onInput: i,
                    required: e.required,
                    "aria-required": e.required,
                    "aria-invalid": e.error,
                    disabled: e.disabled,
                  },
                  e.extraAttrs
                ),
                null,
                16,
                He
              ),
              [[Z, r.value]]
            ),
          ],
          2
        )
      );
    },
  },
  Me = ["id", "required", "aria-required", "aria-invalid"],
  Ue = ["value", "disabled", "selected"],
  De = {
    __name: "TSelect",
    props: {
      id: String,
      selectClass: String,
      modifierClass: { type: String, default: "" },
      options: Array,
      modelValue: String,
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
      optionsAttrs: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const r = A(e.modelValue),
        s = t,
        i = (o) => {
          (r.value = o.target.value), s("update:modelValue", r.value);
        };
      return (o, a) => (
        p(),
        m(
          "div",
          {
            class: f([
              e.selectClass,
              e.modifierClass,
              { [`${e.selectClass}--error`]: e.error },
            ]),
          },
          [
            J(
              g(
                "select",
                b(
                  {
                    id: e.id,
                    required: e.required,
                    class: [`${e.selectClass}__item`],
                    "onUpdate:modelValue":
                      a[0] || (a[0] = (n) => (r.value = n)),
                    onInput: i,
                    "aria-required": e.required,
                    "aria-invalid": e.error,
                  },
                  e.extraAttrs
                ),
                [
                  (p(!0),
                  m(
                    Q,
                    null,
                    z(
                      e.options,
                      (n) => (
                        p(),
                        m(
                          "option",
                          b(
                            {
                              key: n.id,
                              value: n.id,
                              disabled: n.disabled,
                              selected: n.selected,
                            },
                            e.optionsAttrs
                          ),
                          E(n.label),
                          17,
                          Ue
                        )
                      )
                    ),
                    128
                  )),
                ],
                16,
                Me
              ),
              [[ee, r.value]]
            ),
          ],
          2
        )
      );
    },
  },
  Pe = {
    __name: "TGroupCheckbox",
    props: {
      options: Array,
      modelValue: Array,
      checkboxClass: String,
      modifierClass: { type: String, default: "" },
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const r = e,
        s = w(
          r.options.map((o) => {
            var a;
            return {
              ...o,
              checked:
                A((a = r.modelValue) == null ? void 0 : a.includes(o.id)) || !1,
            };
          })
        ),
        i = t;
      return (
        $(s, () => {
          i(
            "update:modelValue",
            s.filter((o) => o.checked).map((o) => o.id)
          );
        }),
        (o, a) => (
          p(!0),
          m(
            Q,
            null,
            z(
              e.options,
              (n, l) => (
                p(),
                ie(
                  K,
                  {
                    key: l,
                    modelValue: s[l].checked,
                    "onUpdate:modelValue": (d) => (s[l].checked = d),
                    id: n.id,
                    checkboxClass: e.checkboxClass,
                    modifierClass: e.modifierClass,
                    error: e.error,
                    required: e.required,
                    textLabel: n.label,
                    disabled: e.disabled,
                    extraAttrs: e.extraAttrs,
                  },
                  null,
                  8,
                  [
                    "modelValue",
                    "onUpdate:modelValue",
                    "id",
                    "checkboxClass",
                    "modifierClass",
                    "error",
                    "required",
                    "textLabel",
                    "disabled",
                    "extraAttrs",
                  ]
                )
              )
            ),
            128
          )
        )
      );
    },
  },
  We = [
    "id",
    "required",
    "checked",
    "onChange",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  Ne = {
    __name: "TGroupRadio",
    props: {
      options: Array,
      modelValue: String,
      radioClass: String,
      modifierClass: { type: String, default: "" },
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    setup(e, { emit: t }) {
      const r = A(e.modelValue),
        s = t,
        i = (o) => {
          (r.value = o), s("update:modelValue", r.value);
        };
      return (o, a) => (
        p(!0),
        m(
          Q,
          null,
          z(
            e.options,
            (n, l) => (
              p(),
              m(
                "div",
                {
                  key: l,
                  class: f([
                    e.radioClass,
                    e.modifierClass,
                    { [`${e.radioClass}--error`]: e.error },
                  ]),
                },
                [
                  g(
                    "input",
                    b(
                      {
                        id: n.id,
                        type: "radio",
                        class: [`${e.radioClass}__item`],
                        required: e.required,
                        checked: n.id === r.value,
                        onChange: (d) => i(n.id),
                        "aria-required": e.required,
                        "aria-invalid": e.error,
                        disabled: e.disabled,
                      },
                      e.extraAttrs
                    ),
                    null,
                    16,
                    We
                  ),
                  I(
                    H,
                    {
                      forId: n.id,
                      labelClass: `${e.radioClass}__title`,
                      textLabel: n.label,
                    },
                    null,
                    8,
                    ["forId", "labelClass", "textLabel"]
                  ),
                ],
                2
              )
            )
          ),
          128
        )
      );
    },
  },
  Fe = [
    "id",
    "required",
    "checked",
    "value",
    "aria-required",
    "aria-invalid",
    "disabled",
  ],
  Ge = ["for"],
  Je = {
    __name: "TToggle",
    props: {
      id: String,
      toggleClass: String,
      modifierClass: { type: String, default: "" },
      modelValue: Boolean,
      textLabelPrimary: { type: String, default: "" },
      textLabelSecondary: { type: String, default: "" },
      error: { type: Boolean, default: !1 },
      required: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      extraAttrs: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue"],
    setup(e) {
      return (t, r) => (
        p(),
        m(
          "div",
          {
            class: f([
              e.toggleClass,
              e.modifierClass,
              { [`${e.toggleClass}--error`]: e.error },
            ]),
          },
          [
            g(
              "input",
              b(
                {
                  id: e.id,
                  type: "checkbox",
                  class: [`${e.toggleClass}__item`],
                  required: e.required,
                  checked: e.modelValue,
                  value: e.modelValue,
                  onChange:
                    r[0] ||
                    (r[0] = (s) => t.$emit("update:modelValue", !e.modelValue)),
                  "aria-required": e.required,
                  "aria-invalid": e.error,
                  disabled: e.disabled,
                },
                e.extraAttrs
              ),
              null,
              16,
              Fe
            ),
            g(
              "label",
              { for: e.id, class: f([`${e.toggleClass}__content`]) },
              [
                g(
                  "span",
                  { class: f([`${e.toggleClass}__item-primary`]) },
                  E(e.textLabelPrimary),
                  3
                ),
                g(
                  "span",
                  { class: f([`${e.toggleClass}__item-secondary`]) },
                  E(e.textLabelSecondary),
                  3
                ),
              ],
              10,
              Ge
            ),
            g(
              "span",
              { class: f([`${e.toggleClass}__artwork`]), role: "presentation" },
              null,
              2
            ),
          ],
          2
        )
      );
    },
  },
  _ = {
    install: (e, t) => {
      e.component("TFormGroup", Ee),
        e.component("TLabel", H),
        e.component("TInputField", qe),
        e.component("TUploadFile", Ve),
        e.component("TCheckbox", K),
        e.component("TError", Qe),
        e.component("THint", Re),
        e.component("TTextarea", je),
        e.component("TSelect", De),
        e.component("TGroupCheckbox", Pe),
        e.component("TGroupRadio", Ne),
        e.component("TToggle", Je);
    },
  },
  W = (e) => {
    e.use(Te),
      e.use(_),
      e.use(_),
      e.use(_),
      e.use(_),
      e.use(_),
      e.use(_),
      e.use(_);
  },
  Xe = V({
    props: {
      value: String,
      name: String,
      hydrate: { type: Boolean, default: !0 },
    },
    setup({ name: e, value: t, hydrate: r }) {
      if (!t) return () => null;
      let s = r ? "astro-slot" : "astro-static-slot";
      return () => T(s, { name: e, innerHTML: t });
    },
  }),
  et =
    (e) =>
    async (t, r, s, { client: i }) => {
      if ((delete r.class, !e.hasAttribute("ssr"))) return;
      const o = t.name ? `${t.name} Host` : void 0,
        a = {};
      for (const [l, d] of Object.entries(s))
        a[l] = () => T(Xe, { value: d, name: l === "default" ? void 0 : l });
      let n = T(t, r, a);
      if ((Ye(t.setup) && (n = T(ae, null, n)), i === "only")) {
        const l = te({ name: o, render: () => n });
        await W(l), l.mount(e, !1);
      } else {
        const l = re({ name: o, render: () => n });
        await W(l), l.mount(e, !0);
      }
    };
function Ye(e) {
  const t = e?.constructor;
  return t && t.name === "AsyncFunction";
}
export { et as default };
