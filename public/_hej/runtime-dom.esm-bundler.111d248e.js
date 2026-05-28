import {
  C as K,
  D as g,
  E as h,
  G as q,
  H as W,
  I as A,
  J as $,
  K as H,
  q as y,
  L as M,
  M as z,
  N as j,
  O as F,
  P as X,
  Q as V,
  R as J,
  T as Q,
  U as Y,
  V as D,
  W as Z,
} from "./runtime-core.esm-bundler.51d06d5f.js";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const k = "http://www.w3.org/2000/svg",
  tt = "http://www.w3.org/1998/Math/MathML",
  l = typeof document < "u" ? document : null,
  w = l && l.createElement("template"),
  et = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, i) => {
      const s =
        e === "svg"
          ? l.createElementNS(k, t)
          : e === "mathml"
          ? l.createElementNS(tt, t)
          : l.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          i &&
          i.multiple != null &&
          s.setAttribute("multiple", i.multiple),
        s
      );
    },
    createText: (t) => l.createTextNode(t),
    createComment: (t) => l.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => l.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, i, s, r) {
      const o = n ? n.previousSibling : e.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        w.innerHTML =
          i === "svg"
            ? `<svg>${t}</svg>`
            : i === "mathml"
            ? `<math>${t}</math>`
            : t;
        const c = w.content;
        if (i === "svg" || i === "mathml") {
          const a = c.firstChild;
          for (; a.firstChild; ) c.appendChild(a.firstChild);
          c.removeChild(a);
        }
        e.insertBefore(c, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  nt = Symbol("_vtc");
function it(t, e, n) {
  const i = t[nt];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const st = Symbol("_vod"),
  ot = Symbol("");
function rt(t, e, n) {
  const i = t.style,
    s = i.display,
    r = g(n);
  if (n && !r) {
    if (e && !g(e)) for (const o in e) n[o] == null && E(i, o, "");
    for (const o in n) E(i, o, n[o]);
  } else if (r) {
    if (e !== n) {
      const o = i[ot];
      o && (n += ";" + o), (i.cssText = n);
    }
  } else e && t.removeAttribute("style");
  st in t && (i.display = s);
}
const T = /\s*!important$/;
function E(t, e, n) {
  if (A(n)) n.forEach((i) => E(t, e, i));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const i = ct(t, e);
    T.test(n) ? t.setProperty(V(i), n.replace(T, ""), "important") : (t[i] = n);
  }
}
const _ = ["Webkit", "Moz", "ms"],
  v = {};
function ct(t, e) {
  const n = v[e];
  if (n) return n;
  let i = J(e);
  if (i !== "filter" && i in t) return (v[e] = i);
  i = Q(i);
  for (let s = 0; s < _.length; s++) {
    const r = _[s] + i;
    if (r in t) return (v[e] = r);
  }
  return e;
}
const N = "http://www.w3.org/1999/xlink";
function at(t, e, n, i, s) {
  if (i && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(N, e.slice(6, e.length))
      : t.setAttributeNS(N, e, n);
  else {
    const r = Y(e);
    n == null || (r && !D(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? "" : n);
  }
}
function ft(t, e, n, i, s, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    i && o(i, s, r), (t[e] = n ?? "");
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && !c.includes("-")) {
    t._value = n;
    const f = c === "OPTION" ? t.getAttribute("value") : t.value,
      d = n ?? "";
    f !== d && (t.value = d), n == null && t.removeAttribute(e);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean"
      ? (n = D(n))
      : n == null && f === "string"
      ? ((n = ""), (a = !0))
      : f === "number" && ((n = 0), (a = !0));
  }
  try {
    t[e] = n;
  } catch {}
  a && t.removeAttribute(e);
}
function u(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function lt(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const x = Symbol("_vei");
function ut(t, e, n, i, s = null) {
  const r = t[x] || (t[x] = {}),
    o = r[e];
  if (i && o) o.value = i;
  else {
    const [c, a] = pt(e);
    if (i) {
      const f = (r[e] = gt(i, s));
      u(t, c, f, a);
    } else o && (lt(t, c, o, a), (r[e] = void 0));
  }
}
const I = /(?:Once|Passive|Capture)$/;
function pt(t) {
  let e;
  if (I.test(t)) {
    e = {};
    let i;
    for (; (i = t.match(I)); )
      (t = t.slice(0, t.length - i[0].length)), (e[i[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : V(t.slice(2)), e];
}
let C = 0;
const dt = Promise.resolve(),
  mt = () => C || (dt.then(() => (C = 0)), (C = Date.now()));
function gt(t, e) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    Z(ht(i, n.value), e, 5, [i]);
  };
  return (n.value = t), (n.attached = mt()), n;
}
function ht(t, e) {
  if (A(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return e;
}
const P = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  St = (t, e, n, i, s, r, o, c, a) => {
    const f = s === "svg";
    e === "class"
      ? it(t, i, f)
      : e === "style"
      ? rt(t, n, i)
      : F(e)
      ? X(e) || ut(t, e, n, i, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : bt(t, e, i, f)
        )
      ? ft(t, e, i, r, o, c, a)
      : (e === "true-value"
          ? (t._trueValue = i)
          : e === "false-value" && (t._falseValue = i),
        at(t, e, i, f));
  };
function bt(t, e, n, i) {
  if (i)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && P(e) && K(n))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return P(e) && g(n) ? !1 : e in t;
}
const S = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return A(e) ? (n) => $(e, n) : e;
};
function At(t) {
  t.target.composing = !0;
}
function L(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const p = Symbol("_assign"),
  Tt = {
    created(t, { modifiers: { lazy: e, trim: n, number: i } }, s) {
      t[p] = S(s);
      const r = i || (s.props && s.props.type === "number");
      u(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let c = t.value;
        n && (c = c.trim()), r && (c = h(c)), t[p](c);
      }),
        n &&
          u(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (u(t, "compositionstart", At),
          u(t, "compositionend", L),
          u(t, "change", L));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: i, number: s } },
      r
    ) {
      if (((t[p] = S(r)), t.composing)) return;
      const o = s || t.type === "number" ? h(t.value) : t.value,
        c = e ?? "";
      o !== c &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          (n || (i && t.value.trim() === c))) ||
          (t.value = c));
    },
  },
  _t = {
    deep: !0,
    created(t, { value: e, modifiers: { number: n } }, i) {
      const s = H(e);
      u(t, "change", () => {
        const r = Array.prototype.filter
          .call(t.options, (o) => o.selected)
          .map((o) => (n ? h(b(o)) : b(o)));
        t[p](t.multiple ? (s ? new Set(r) : r) : r[0]),
          (t._assigning = !0),
          y(() => {
            t._assigning = !1;
          });
      }),
        (t[p] = S(i));
    },
    mounted(t, { value: e, oldValue: n, modifiers: { number: i } }) {
      R(t, e, n, i);
    },
    beforeUpdate(t, e, n) {
      t[p] = S(n);
    },
    updated(t, { value: e, oldValue: n, modifiers: { number: i } }) {
      t._assigning || R(t, e, n, i);
    },
  };
function R(t, e, n, i) {
  const s = t.multiple,
    r = A(e);
  if (!(s && !r && !H(e)) && !(r && M(e, n))) {
    for (let o = 0, c = t.options.length; o < c; o++) {
      const a = t.options[o],
        f = b(a);
      if (s)
        if (r) {
          const d = typeof f;
          d === "string" || d === "number"
            ? (a.selected = e.includes(i ? h(f) : f))
            : (a.selected = z(e, f) > -1);
        } else a.selected = e.has(f);
      else if (M(b(a), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !s && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function b(t) {
  return "_value" in t ? t._value : t.value;
}
const vt = ["ctrl", "shift", "alt", "meta"],
  Ct = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => vt.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  Nt = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      i = e.join(".");
    return (
      n[i] ||
      (n[i] = (s, ...r) => {
        for (let o = 0; o < e.length; o++) {
          const c = Ct[e[o]];
          if (c && c(s, e)) return;
        }
        return t(s, ...r);
      })
    );
  },
  B = j({ patchProp: St }, et);
let m,
  O = !1;
function Et() {
  return m || (m = q(B));
}
function Mt() {
  return (m = O ? m : W(B)), (O = !0), m;
}
const xt = (...t) => {
    const e = Et().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (i) => {
        const s = U(i);
        if (!s) return;
        const r = e._component;
        !K(r) && !r.render && !r.template && (r.template = s.innerHTML),
          (s.innerHTML = "");
        const o = n(s, !1, G(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          o
        );
      }),
      e
    );
  },
  It = (...t) => {
    const e = Mt().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (i) => {
        const s = U(i);
        if (s) return n(s, !0, G(s));
      }),
      e
    );
  };
function G(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function U(t) {
  return g(t) ? document.querySelector(t) : t;
}
export { _t as a, It as b, xt as c, Tt as v, Nt as w };
