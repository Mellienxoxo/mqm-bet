function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-Dgo8r8kr.js",
      "assets/danmu-IyvpIHuy.js",
      "assets/danmu-06isByLH.css",
      "assets/index-gANFZV_C.css",
      "assets/index-D2eEMrok.js",
      "assets/index-BA1N3xYd.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ei(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const ae = {},
  St = [],
  Re = () => {},
  Ao = () => !1,
  _n = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  _i = (e) => e.startsWith("onUpdate:"),
  me = Object.assign,
  Ti = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ro = Object.prototype.hasOwnProperty,
  Q = (e, t) => Ro.call(e, t),
  U = Array.isArray,
  bt = (e) => Tn(e) === "[object Map]",
  lr = (e) => Tn(e) === "[object Set]",
  K = (e) => typeof e == "function",
  de = (e) => typeof e == "string",
  Rt = (e) => typeof e == "symbol",
  ce = (e) => e !== null && typeof e == "object",
  ar = (e) => (ce(e) || K(e)) && K(e.then) && K(e.catch),
  cr = Object.prototype.toString,
  Tn = (e) => cr.call(e),
  Lo = (e) => Tn(e).slice(8, -1),
  ur = (e) => Tn(e) === "[object Object]",
  Pi = (e) =>
    de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Dt = Ei(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Pn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  zo = /-(\w)/g,
  We = Pn((e) => e.replace(zo, (t, n) => (n ? n.toUpperCase() : ""))),
  Bo = /\B([A-Z])/g,
  Lt = Pn((e) => e.replace(Bo, "-$1").toLowerCase()),
  Cn = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Hn = Pn((e) => (e ? `on${Cn(e)}` : "")),
  ot = (e, t) => !Object.is(e, t),
  Gn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  mn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  No = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ts;
const fr = () =>
  ts ||
  (ts =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Mn(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = de(i) ? $o(i) : Mn(i);
      if (s) for (const r in s) t[r] = s[r];
    }
    return t;
  } else if (de(e) || ce(e)) return e;
}
const Vo = /;(?![^(]*\))/g,
  Fo = /:([^]+)/,
  Do = /\/\*[^]*?\*\//g;
function $o(e) {
  const t = {};
  return (
    e
      .replace(Do, "")
      .split(Vo)
      .forEach((n) => {
        if (n) {
          const i = n.split(Fo);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }),
    t
  );
}
function Ci(e) {
  let t = "";
  if (de(e)) t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ci(e[n]);
      i && (t += i + " ");
    }
  else if (ce(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ho =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Go = Ei(Ho);
function dr(e) {
  return !!e || e === "";
}
const Gf = (e) =>
    de(e)
      ? e
      : e == null
      ? ""
      : U(e) || (ce(e) && (e.toString === cr || !K(e.toString)))
      ? JSON.stringify(e, pr, 2)
      : String(e),
  pr = (e, t) =>
    t && t.__v_isRef
      ? pr(e, t.value)
      : bt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [i, s], r) => ((n[jn(i, r) + " =>"] = s), n),
            {}
          ),
        }
      : lr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => jn(n)) }
      : Rt(t)
      ? jn(t)
      : ce(t) && !U(t) && !ur(t)
      ? String(t)
      : t,
  jn = (e, t = "") => {
    var n;
    return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Be;
class jo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Be),
      !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Be;
      try {
        return (Be = this), t();
      } finally {
        Be = n;
      }
    }
  }
  on() {
    Be = this;
  }
  off() {
    Be = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ko(e, t = Be) {
  t && t.active && t.effects.push(e);
}
function Wo() {
  return Be;
}
let ut;
class Mi {
  constructor(t, n, i, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = i),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      ko(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), pt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Uo(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ht();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = st,
      n = ut;
    try {
      return (st = !0), (ut = this), this._runnings++, ns(this), this.fn();
    } finally {
      is(this), this._runnings--, (ut = n), (st = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (ns(this),
      is(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function Uo(e) {
  return e.value;
}
function ns(e) {
  e._trackId++, (e._depsLength = 0);
}
function is(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) hr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function hr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let st = !0,
  ri = 0;
const mr = [];
function pt() {
  mr.push(st), (st = !1);
}
function ht() {
  const e = mr.pop();
  st = e === void 0 ? !0 : e;
}
function Oi() {
  ri++;
}
function Ii() {
  for (ri--; !ri && oi.length; ) oi.shift()();
}
function gr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && hr(i, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const oi = [];
function vr(e, t, n) {
  Oi();
  for (const i of e.keys()) {
    let s;
    i._dirtyLevel < t &&
      (s ?? (s = e.get(i) === i._trackId)) &&
      (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0),
      (i._dirtyLevel = t)),
      i._shouldSchedule &&
        (s ?? (s = e.get(i) === i._trackId)) &&
        (i.trigger(),
        (!i._runnings || i.allowRecurse) &&
          i._dirtyLevel !== 2 &&
          ((i._shouldSchedule = !1), i.scheduler && oi.push(i.scheduler)));
  }
  Ii();
}
const wr = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  gn = new WeakMap(),
  ft = Symbol(""),
  li = Symbol("");
function _e(e, t, n) {
  if (st && ut) {
    let i = gn.get(e);
    i || gn.set(e, (i = new Map()));
    let s = i.get(n);
    s || i.set(n, (s = wr(() => i.delete(n)))), gr(ut, s);
  }
}
function Ye(e, t, n, i, s, r) {
  const l = gn.get(e);
  if (!l) return;
  let a = [];
  if (t === "clear") a = [...l.values()];
  else if (n === "length" && U(e)) {
    const o = Number(i);
    l.forEach((u, c) => {
      (c === "length" || (!Rt(c) && c >= o)) && a.push(u);
    });
  } else
    switch ((n !== void 0 && a.push(l.get(n)), t)) {
      case "add":
        U(e)
          ? Pi(n) && a.push(l.get("length"))
          : (a.push(l.get(ft)), bt(e) && a.push(l.get(li)));
        break;
      case "delete":
        U(e) || (a.push(l.get(ft)), bt(e) && a.push(l.get(li)));
        break;
      case "set":
        bt(e) && a.push(l.get(ft));
        break;
    }
  Oi();
  for (const o of a) o && vr(o, 4);
  Ii();
}
function qo(e, t) {
  var n;
  return (n = gn.get(e)) == null ? void 0 : n.get(t);
}
const Ko = Ei("__proto__,__v_isRef,__isVue"),
  yr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Rt)
  ),
  ss = Yo();
function Yo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const i = J(this);
        for (let r = 0, l = this.length; r < l; r++) _e(i, "get", r + "");
        const s = i[t](...n);
        return s === -1 || s === !1 ? i[t](...n.map(J)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        pt(), Oi();
        const i = J(this)[t].apply(this, n);
        return Ii(), ht(), i;
      };
    }),
    e
  );
}
function Xo(e) {
  const t = J(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Sr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, i) {
    const s = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return i === (s ? (r ? cl : _r) : r ? Er : xr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(i)
        ? t
        : void 0;
    const l = U(t);
    if (!s) {
      if (l && Q(ss, n)) return Reflect.get(ss, n, i);
      if (n === "hasOwnProperty") return Xo;
    }
    const a = Reflect.get(t, n, i);
    return (Rt(n) ? yr.has(n) : Ko(n)) || (s || _e(t, "get", n), r)
      ? a
      : be(a)
      ? l && Pi(n)
        ? a
        : a.value
      : ce(a)
      ? s
        ? Pr(a)
        : In(a)
      : a;
  }
}
class br extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const o = Ct(r);
      if (
        (!vn(i) && !Ct(i) && ((r = J(r)), (i = J(i))), !U(t) && be(r) && !be(i))
      )
        return o ? !1 : ((r.value = i), !0);
    }
    const l = U(t) && Pi(n) ? Number(n) < t.length : Q(t, n),
      a = Reflect.set(t, n, i, s);
    return (
      t === J(s) && (l ? ot(i, r) && Ye(t, "set", n, i) : Ye(t, "add", n, i)), a
    );
  }
  deleteProperty(t, n) {
    const i = Q(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && Ye(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Rt(n) || !yr.has(n)) && _e(t, "has", n), i;
  }
  ownKeys(t) {
    return _e(t, "iterate", U(t) ? "length" : ft), Reflect.ownKeys(t);
  }
}
class Qo extends Sr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Jo = new br(),
  Zo = new Qo(),
  el = new br(!0),
  Ai = (e) => e,
  On = (e) => Reflect.getPrototypeOf(e);
function tn(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = J(e),
    r = J(t);
  n || (ot(t, r) && _e(s, "get", t), _e(s, "get", r));
  const { has: l } = On(s),
    a = i ? Ai : n ? zi : qt;
  if (l.call(s, t)) return a(e.get(t));
  if (l.call(s, r)) return a(e.get(r));
  e !== s && e.get(t);
}
function nn(e, t = !1) {
  const n = this.__v_raw,
    i = J(n),
    s = J(e);
  return (
    t || (ot(e, s) && _e(i, "has", e), _e(i, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function sn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && _e(J(e), "iterate", ft), Reflect.get(e, "size", e)
  );
}
function rs(e) {
  e = J(e);
  const t = J(this);
  return On(t).has.call(t, e) || (t.add(e), Ye(t, "add", e, e)), this;
}
function os(e, t) {
  t = J(t);
  const n = J(this),
    { has: i, get: s } = On(n);
  let r = i.call(n, e);
  r || ((e = J(e)), (r = i.call(n, e)));
  const l = s.call(n, e);
  return (
    n.set(e, t), r ? ot(t, l) && Ye(n, "set", e, t) : Ye(n, "add", e, t), this
  );
}
function ls(e) {
  const t = J(this),
    { has: n, get: i } = On(t);
  let s = n.call(t, e);
  s || ((e = J(e)), (s = n.call(t, e))), i && i.call(t, e);
  const r = t.delete(e);
  return s && Ye(t, "delete", e, void 0), r;
}
function as() {
  const e = J(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ye(e, "clear", void 0, void 0), n;
}
function rn(e, t) {
  return function (i, s) {
    const r = this,
      l = r.__v_raw,
      a = J(l),
      o = t ? Ai : e ? zi : qt;
    return (
      !e && _e(a, "iterate", ft), l.forEach((u, c) => i.call(s, o(u), o(c), r))
    );
  };
}
function on(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      r = J(s),
      l = bt(r),
      a = e === "entries" || (e === Symbol.iterator && l),
      o = e === "keys" && l,
      u = s[e](...i),
      c = n ? Ai : t ? zi : qt;
    return (
      !t && _e(r, "iterate", o ? li : ft),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Qe(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function tl() {
  const e = {
      get(r) {
        return tn(this, r);
      },
      get size() {
        return sn(this);
      },
      has: nn,
      add: rs,
      set: os,
      delete: ls,
      clear: as,
      forEach: rn(!1, !1),
    },
    t = {
      get(r) {
        return tn(this, r, !1, !0);
      },
      get size() {
        return sn(this);
      },
      has: nn,
      add: rs,
      set: os,
      delete: ls,
      clear: as,
      forEach: rn(!1, !0),
    },
    n = {
      get(r) {
        return tn(this, r, !0);
      },
      get size() {
        return sn(this, !0);
      },
      has(r) {
        return nn.call(this, r, !0);
      },
      add: Qe("add"),
      set: Qe("set"),
      delete: Qe("delete"),
      clear: Qe("clear"),
      forEach: rn(!0, !1),
    },
    i = {
      get(r) {
        return tn(this, r, !0, !0);
      },
      get size() {
        return sn(this, !0);
      },
      has(r) {
        return nn.call(this, r, !0);
      },
      add: Qe("add"),
      set: Qe("set"),
      delete: Qe("delete"),
      clear: Qe("clear"),
      forEach: rn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = on(r, !1, !1)),
        (n[r] = on(r, !0, !1)),
        (t[r] = on(r, !1, !0)),
        (i[r] = on(r, !0, !0));
    }),
    [e, n, t, i]
  );
}
const [nl, il, sl, rl] = tl();
function Ri(e, t) {
  const n = t ? (e ? rl : sl) : e ? il : nl;
  return (i, s, r) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? i
      : Reflect.get(Q(n, s) && s in i ? n : i, s, r);
}
const ol = { get: Ri(!1, !1) },
  ll = { get: Ri(!1, !0) },
  al = { get: Ri(!0, !1) },
  xr = new WeakMap(),
  Er = new WeakMap(),
  _r = new WeakMap(),
  cl = new WeakMap();
function ul(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function fl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ul(Lo(e));
}
function In(e) {
  return Ct(e) ? e : Li(e, !1, Jo, ol, xr);
}
function Tr(e) {
  return Li(e, !1, el, ll, Er);
}
function Pr(e) {
  return Li(e, !0, Zo, al, _r);
}
function Li(e, t, n, i, s) {
  if (!ce(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = s.get(e);
  if (r) return r;
  const l = fl(e);
  if (l === 0) return e;
  const a = new Proxy(e, l === 2 ? i : n);
  return s.set(e, a), a;
}
function xt(e) {
  return Ct(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ct(e) {
  return !!(e && e.__v_isReadonly);
}
function vn(e) {
  return !!(e && e.__v_isShallow);
}
function Cr(e) {
  return xt(e) || Ct(e);
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function Mr(e) {
  return Object.isExtensible(e) && mn(e, "__v_skip", !0), e;
}
const qt = (e) => (ce(e) ? In(e) : e),
  zi = (e) => (ce(e) ? Pr(e) : e);
class Or {
  constructor(t, n, i, s) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Mi(
        () => t(this._value),
        () => un(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = i);
  }
  get value() {
    const t = J(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        ot(t._value, (t._value = t.effect.run())) &&
        un(t, 4),
      Ir(t),
      t.effect._dirtyLevel >= 2 && un(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function dl(e, t, n = !1) {
  let i, s;
  const r = K(e);
  return (
    r ? ((i = e), (s = Re)) : ((i = e.get), (s = e.set)),
    new Or(i, s, r || !s, n)
  );
}
function Ir(e) {
  var t;
  st &&
    ut &&
    ((e = J(e)),
    gr(
      ut,
      (t = e.dep) != null
        ? t
        : (e.dep = wr(() => (e.dep = void 0), e instanceof Or ? e : void 0))
    ));
}
function un(e, t = 4, n) {
  e = J(e);
  const i = e.dep;
  i && vr(i, t);
}
function be(e) {
  return !!(e && e.__v_isRef === !0);
}
function pe(e) {
  return Ar(e, !1);
}
function pl(e) {
  return Ar(e, !0);
}
function Ar(e, t) {
  return be(e) ? e : new hl(e, t);
}
class hl {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : qt(t));
  }
  get value() {
    return Ir(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || vn(t) || Ct(t);
    (t = n ? t : J(t)),
      ot(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : qt(t)), un(this, 4));
  }
}
function Et(e) {
  return be(e) ? e.value : e;
}
const ml = {
  get: (e, t, n) => Et(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return be(s) && !be(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i);
  },
};
function Rr(e) {
  return xt(e) ? e : new Proxy(e, ml);
}
function jf(e) {
  const t = U(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = vl(e, n);
  return t;
}
class gl {
  constructor(t, n, i) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = i),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return qo(J(this._object), this._key);
  }
}
function vl(e, t, n) {
  const i = e[t];
  return be(i) ? i : new gl(e, t, n);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function rt(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    An(s, t, n);
  }
}
function Fe(e, t, n, i) {
  if (K(e)) {
    const r = rt(e, t, n, i);
    return (
      r &&
        ar(r) &&
        r.catch((l) => {
          An(l, t, n);
        }),
      r
    );
  }
  const s = [];
  for (let r = 0; r < e.length; r++) s.push(Fe(e[r], t, n, i));
  return s;
}
function An(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, l, a) === !1) return;
      }
      r = r.parent;
    }
    const o = t.appContext.config.errorHandler;
    if (o) {
      rt(o, null, 10, [e, l, a]);
      return;
    }
  }
  wl(e, n, s, i);
}
function wl(e, t, n, i = !0) {
  console.error(e);
}
let Kt = !1,
  ai = !1;
const we = [];
let je = 0;
const _t = [];
let Ze = null,
  ct = 0;
const Lr = Promise.resolve();
let Bi = null;
function Ni(e) {
  const t = Bi || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yl(e) {
  let t = je + 1,
    n = we.length;
  for (; t < n; ) {
    const i = (t + n) >>> 1,
      s = we[i],
      r = Yt(s);
    r < e || (r === e && s.pre) ? (t = i + 1) : (n = i);
  }
  return t;
}
function Vi(e) {
  (!we.length || !we.includes(e, Kt && e.allowRecurse ? je + 1 : je)) &&
    (e.id == null ? we.push(e) : we.splice(yl(e.id), 0, e), zr());
}
function zr() {
  !Kt && !ai && ((ai = !0), (Bi = Lr.then(Nr)));
}
function Sl(e) {
  const t = we.indexOf(e);
  t > je && we.splice(t, 1);
}
function bl(e) {
  U(e)
    ? _t.push(...e)
    : (!Ze || !Ze.includes(e, e.allowRecurse ? ct + 1 : ct)) && _t.push(e),
    zr();
}
function cs(e, t, n = Kt ? je + 1 : 0) {
  for (; n < we.length; n++) {
    const i = we[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid) continue;
      we.splice(n, 1), n--, i();
    }
  }
}
function Br(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort((n, i) => Yt(n) - Yt(i));
    if (((_t.length = 0), Ze)) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, ct = 0; ct < Ze.length; ct++) Ze[ct]();
    (Ze = null), (ct = 0);
  }
}
const Yt = (e) => (e.id == null ? 1 / 0 : e.id),
  xl = (e, t) => {
    const n = Yt(e) - Yt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Nr(e) {
  (ai = !1), (Kt = !0), we.sort(xl);
  try {
    for (je = 0; je < we.length; je++) {
      const t = we[je];
      t && t.active !== !1 && rt(t, null, 14);
    }
  } finally {
    (je = 0),
      (we.length = 0),
      Br(),
      (Kt = !1),
      (Bi = null),
      (we.length || _t.length) && Nr();
  }
}
function El(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ae;
  let s = n;
  const r = t.startsWith("update:"),
    l = r && t.slice(7);
  if (l && l in i) {
    const c = `${l === "modelValue" ? "model" : l}Modifiers`,
      { number: f, trim: d } = i[c] || ae;
    d && (s = n.map((h) => (de(h) ? h.trim() : h))), f && (s = n.map(No));
  }
  let a,
    o = i[(a = Hn(t))] || i[(a = Hn(We(t)))];
  !o && r && (o = i[(a = Hn(Lt(t)))]), o && Fe(o, e, 6, s);
  const u = i[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Fe(u, e, 6, s);
  }
}
function Vr(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let l = {},
    a = !1;
  if (!K(e)) {
    const o = (u) => {
      const c = Vr(u, t, !0);
      c && ((a = !0), me(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  return !r && !a
    ? (ce(e) && i.set(e, null), null)
    : (U(r) ? r.forEach((o) => (l[o] = null)) : me(l, r),
      ce(e) && i.set(e, l),
      l);
}
function Rn(e, t) {
  return !e || !_n(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Lt(t)) || Q(e, t));
}
let ye = null,
  Ln = null;
function wn(e) {
  const t = ye;
  return (ye = e), (Ln = (e && e.type.__scopeId) || null), t;
}
function kf(e) {
  Ln = e;
}
function Wf() {
  Ln = null;
}
function _l(e, t = ye, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && Ss(-1);
    const r = wn(t);
    let l;
    try {
      l = e(...s);
    } finally {
      wn(r), i._d && Ss(1);
    }
    return l;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function kn(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [l],
    slots: a,
    attrs: o,
    emit: u,
    render: c,
    renderCache: f,
    data: d,
    setupState: h,
    ctx: g,
    inheritAttrs: y,
  } = e;
  let P, w;
  const _ = wn(e);
  try {
    if (n.shapeFlag & 4) {
      const M = s || i,
        B = M;
      (P = Ge(c.call(B, M, f, r, h, d, g))), (w = o);
    } else {
      const M = t;
      (P = Ge(
        M.length > 1 ? M(r, { attrs: o, slots: a, emit: u }) : M(r, null)
      )),
        (w = t.props ? o : Tl(o));
    }
  } catch (M) {
    (kt.length = 0), An(M, e, 1), (P = Ee(Mt));
  }
  let b = P;
  if (w && y !== !1) {
    const M = Object.keys(w),
      { shapeFlag: B } = b;
    M.length && B & 7 && (l && M.some(_i) && (w = Pl(w, l)), (b = Ot(b, w)));
  }
  return (
    n.dirs && ((b = Ot(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (P = b),
    wn(_),
    P
  );
}
const Tl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || _n(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Pl = (e, t) => {
    const n = {};
    for (const i in e) (!_i(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
function Cl(e, t, n) {
  const { props: i, children: s, component: r } = e,
    { props: l, children: a, patchFlag: o } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && o >= 0) {
    if (o & 1024) return !0;
    if (o & 16) return i ? us(i, l, u) : !!l;
    if (o & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (l[d] !== i[d] && !Rn(u, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : i === l
      ? !1
      : i
      ? l
        ? us(i, l, u)
        : !0
      : !!l;
  return !1;
}
function us(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Rn(n, r)) return !0;
  }
  return !1;
}
function Ml({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if ((i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Fr = "components";
function Ol(e, t) {
  return Al(Fr, e, !0, t) || e;
}
const Il = Symbol.for("v-ndc");
function Al(e, t, n = !0, i = !1) {
  const s = ye || he;
  if (s) {
    const r = s.type;
    if (e === Fr) {
      const a = Ea(r, !1);
      if (a && (a === t || a === We(t) || a === Cn(We(t)))) return r;
    }
    const l = fs(s[e] || r[e], t) || fs(s.appContext[e], t);
    return !l && i ? r : l;
  }
}
function fs(e, t) {
  return e && (e[t] || e[We(t)] || e[Cn(We(t))]);
}
const Rl = (e) => e.__isSuspense;
function Ll(e, t) {
  t && t.pendingBranch
    ? U(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : bl(e);
}
const zl = Symbol.for("v-scx"),
  Bl = () => ke(zl),
  ln = {};
function $t(e, t, n) {
  return Dr(e, t, n);
}
function Dr(
  e,
  t,
  { immediate: n, deep: i, flush: s, once: r, onTrack: l, onTrigger: a } = ae
) {
  if (t && r) {
    const R = t;
    t = (...Z) => {
      R(...Z), B();
    };
  }
  const o = he,
    u = (R) => (i === !0 ? R : yt(R, i === !1 ? 1 : void 0));
  let c,
    f = !1,
    d = !1;
  if (
    (be(e)
      ? ((c = () => e.value), (f = vn(e)))
      : xt(e)
      ? ((c = () => u(e)), (f = !0))
      : U(e)
      ? ((d = !0),
        (f = e.some((R) => xt(R) || vn(R))),
        (c = () =>
          e.map((R) => {
            if (be(R)) return R.value;
            if (xt(R)) return u(R);
            if (K(R)) return rt(R, o, 2);
          })))
      : K(e)
      ? t
        ? (c = () => rt(e, o, 2))
        : (c = () => (h && h(), Fe(e, o, 3, [g])))
      : (c = Re),
    t && i)
  ) {
    const R = c;
    c = () => yt(R());
  }
  let h,
    g = (R) => {
      h = b.onStop = () => {
        rt(R, o, 4), (h = b.onStop = void 0);
      };
    },
    y;
  if (Dn)
    if (
      ((g = Re),
      t ? n && Fe(t, o, 3, [c(), d ? [] : void 0, g]) : c(),
      s === "sync")
    ) {
      const R = Bl();
      y = R.__watcherHandles || (R.__watcherHandles = []);
    } else return Re;
  let P = d ? new Array(e.length).fill(ln) : ln;
  const w = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const R = b.run();
        (i || f || (d ? R.some((Z, j) => ot(Z, P[j])) : ot(R, P))) &&
          (h && h(),
          Fe(t, o, 3, [R, P === ln ? void 0 : d && P[0] === ln ? [] : P, g]),
          (P = R));
      } else b.run();
  };
  w.allowRecurse = !!t;
  let _;
  s === "sync"
    ? (_ = w)
    : s === "post"
    ? (_ = () => xe(w, o && o.suspense))
    : ((w.pre = !0), o && (w.id = o.uid), (_ = () => Vi(w)));
  const b = new Mi(c, Re, _),
    M = Wo(),
    B = () => {
      b.stop(), M && Ti(M.effects, b);
    };
  return (
    t
      ? n
        ? w()
        : (P = b.run())
      : s === "post"
      ? xe(b.run.bind(b), o && o.suspense)
      : b.run(),
    y && y.push(B),
    B
  );
}
function Nl(e, t, n) {
  const i = this.proxy,
    s = de(e) ? (e.includes(".") ? $r(i, e) : () => i[e]) : e.bind(i, i);
  let r;
  K(t) ? (r = t) : ((r = t.handler), (n = t));
  const l = Zt(this),
    a = Dr(s, r.bind(i), n);
  return l(), a;
}
function $r(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i;
  };
}
function yt(e, t, n = 0, i) {
  if (!ce(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((i = i || new Set()), i.has(e))) return e;
  if ((i.add(e), be(e))) yt(e.value, t, n, i);
  else if (U(e)) for (let s = 0; s < e.length; s++) yt(e[s], t, n, i);
  else if (lr(e) || bt(e))
    e.forEach((s) => {
      yt(s, t, n, i);
    });
  else if (ur(e)) for (const s in e) yt(e[s], t, n, i);
  return e;
}
function lt(e, t, n, i) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const a = s[l];
    r && (a.oldValue = r[l].value);
    let o = a.dir[i];
    o && (pt(), Fe(o, n, 8, [e.el, a, e, t]), ht());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function zn(e, t) {
  return K(e) ? me({ name: e.name }, t, { setup: e }) : e;
}
const Ht = (e) => !!e.type.__asyncLoader,
  Hr = (e) => e.type.__isKeepAlive;
function Vl(e, t) {
  Gr(e, "a", t);
}
function Fl(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = he) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Bn(t, i, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Hr(s.parent.vnode) && Dl(i, t, n, s), (s = s.parent);
  }
}
function Dl(e, t, n, i) {
  const s = Bn(t, e, i, !0);
  $i(() => {
    Ti(i[t], s);
  }, n);
}
function Bn(e, t, n = he, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...l) => {
          if (n.isUnmounted) return;
          pt();
          const a = Zt(n),
            o = Fe(t, n, e, l);
          return a(), ht(), o;
        });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Xe =
    (e) =>
    (t, n = he) =>
      (!Dn || e === "sp") && Bn(e, (...i) => t(...i), n),
  $l = Xe("bm"),
  Nn = Xe("m"),
  jr = Xe("bu"),
  Fi = Xe("u"),
  Di = Xe("bum"),
  $i = Xe("um"),
  Hl = Xe("sp"),
  Gl = Xe("rtg"),
  jl = Xe("rtc");
function kl(e, t = he) {
  Bn("ec", e, t);
}
function Uf(e, t, n = {}, i, s) {
  if (ye.isCE || (ye.parent && Ht(ye.parent) && ye.parent.isCE))
    return t !== "default" && (n.name = t), Ee("slot", n, i && i());
  let r = e[t];
  r && r._c && (r._d = !1), ji();
  const l = r && kr(r(n)),
    a = to(
      Ne,
      { key: n.key || (l && l.key) || `_${t}` },
      l || (i ? i() : []),
      l && e._ === 1 ? 64 : -2
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  );
}
function kr(e) {
  return e.some((t) =>
    Sn(t) ? !(t.type === Mt || (t.type === Ne && !kr(t.children))) : !0
  )
    ? e
    : null;
}
const ci = (e) => (e ? (io(e) ? Ui(e) || e.proxy : ci(e.parent)) : null),
  Gt = me(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ci(e.parent),
    $root: (e) => ci(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Hi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Vi(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ni.bind(e.proxy)),
    $watch: (e) => Nl.bind(e),
  }),
  Wn = (e, t) => e !== ae && !e.__isScriptSetup && Q(e, t),
  Wl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: r,
        accessCache: l,
        type: a,
        appContext: o,
      } = e;
      let u;
      if (t[0] !== "$") {
        const h = l[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return i[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Wn(i, t)) return (l[t] = 1), i[t];
          if (s !== ae && Q(s, t)) return (l[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && Q(u, t)) return (l[t] = 3), r[t];
          if (n !== ae && Q(n, t)) return (l[t] = 4), n[t];
          ui && (l[t] = 0);
        }
      }
      const c = Gt[t];
      let f, d;
      if (c) return t === "$attrs" && _e(e, "get", t), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && Q(n, t)) return (l[t] = 4), n[t];
      if (((d = o.config.globalProperties), Q(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: r } = e;
      return Wn(s, t)
        ? ((s[t] = n), !0)
        : i !== ae && Q(i, t)
        ? ((i[t] = n), !0)
        : Q(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: s,
          propsOptions: r,
        },
      },
      l
    ) {
      let a;
      return (
        !!n[l] ||
        (e !== ae && Q(e, l)) ||
        Wn(t, l) ||
        ((a = r[0]) && Q(a, l)) ||
        Q(i, l) ||
        Q(Gt, l) ||
        Q(s.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function qf() {
  return Ul().slots;
}
function Ul() {
  const e = ya();
  return e.setupContext || (e.setupContext = ro(e));
}
function ds(e) {
  return U(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ui = !0;
function ql(e) {
  const t = Hi(e),
    n = e.proxy,
    i = e.ctx;
  (ui = !1), t.beforeCreate && ps(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: l,
    watch: a,
    provide: o,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: g,
    activated: y,
    deactivated: P,
    beforeDestroy: w,
    beforeUnmount: _,
    destroyed: b,
    unmounted: M,
    render: B,
    renderTracked: R,
    renderTriggered: Z,
    errorCaptured: j,
    serverPrefetch: N,
    expose: I,
    inheritAttrs: $,
    components: q,
    directives: H,
    filters: re,
  } = t;
  if ((u && Kl(u, i, null), l))
    for (const ee in l) {
      const X = l[ee];
      K(X) && (i[ee] = X.bind(n));
    }
  if (s) {
    const ee = s.call(n, n);
    ce(ee) && (e.data = In(ee));
  }
  if (((ui = !0), r))
    for (const ee in r) {
      const X = r[ee],
        Oe = K(X) ? X.bind(n, n) : K(X.get) ? X.get.bind(n, n) : Re,
        Le = !K(X) && K(X.set) ? X.set.bind(n) : Re,
        Ie = Ae({ get: Oe, set: Le });
      Object.defineProperty(i, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (ge) => (Ie.value = ge),
      });
    }
  if (a) for (const ee in a) Wr(a[ee], i, n, ee);
  if (o) {
    const ee = K(o) ? o.call(n) : o;
    Reflect.ownKeys(ee).forEach((X) => {
      Tt(X, ee[X]);
    });
  }
  c && ps(c, e, "c");
  function se(ee, X) {
    U(X) ? X.forEach((Oe) => ee(Oe.bind(n))) : X && ee(X.bind(n));
  }
  if (
    (se($l, f),
    se(Nn, d),
    se(jr, h),
    se(Fi, g),
    se(Vl, y),
    se(Fl, P),
    se(kl, j),
    se(jl, R),
    se(Gl, Z),
    se(Di, _),
    se($i, M),
    se(Hl, N),
    U(I))
  )
    if (I.length) {
      const ee = e.exposed || (e.exposed = {});
      I.forEach((X) => {
        Object.defineProperty(ee, X, {
          get: () => n[X],
          set: (Oe) => (n[X] = Oe),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Re && (e.render = B),
    $ != null && (e.inheritAttrs = $),
    q && (e.components = q),
    H && (e.directives = H);
}
function Kl(e, t, n = Re) {
  U(e) && (e = fi(e));
  for (const i in e) {
    const s = e[i];
    let r;
    ce(s)
      ? "default" in s
        ? (r = ke(s.from || i, s.default, !0))
        : (r = ke(s.from || i))
      : (r = ke(s)),
      be(r)
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[i] = r);
  }
}
function ps(e, t, n) {
  Fe(U(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, i) {
  const s = i.includes(".") ? $r(n, i) : () => n[i];
  if (de(e)) {
    const r = t[e];
    K(r) && $t(s, r);
  } else if (K(e)) $t(s, e.bind(n));
  else if (ce(e))
    if (U(e)) e.forEach((r) => Wr(r, t, n, i));
    else {
      const r = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(r) && $t(s, r, e);
    }
}
function Hi(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    a = r.get(t);
  let o;
  return (
    a
      ? (o = a)
      : !s.length && !n && !i
      ? (o = t)
      : ((o = {}), s.length && s.forEach((u) => yn(o, u, l, !0)), yn(o, t, l)),
    ce(t) && r.set(t, o),
    o
  );
}
function yn(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && yn(e, r, n, !0), s && s.forEach((l) => yn(e, l, n, !0));
  for (const l in t)
    if (!(i && l === "expose")) {
      const a = Yl[l] || (n && n[l]);
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Yl = {
  data: hs,
  props: ms,
  emits: ms,
  methods: Ft,
  computed: Ft,
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  components: Ft,
  directives: Ft,
  watch: Ql,
  provide: hs,
  inject: Xl,
};
function hs(e, t) {
  return t
    ? e
      ? function () {
          return me(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Xl(e, t) {
  return Ft(fi(e), fi(t));
}
function fi(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? me(Object.create(null), e, t) : t;
}
function ms(e, t) {
  return e
    ? U(e) && U(t)
      ? [...new Set([...e, ...t])]
      : me(Object.create(null), ds(e), ds(t ?? {}))
    : t;
}
function Ql(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = me(Object.create(null), e);
  for (const i in t) n[i] = Se(e[i], t[i]);
  return n;
}
function Ur() {
  return {
    app: null,
    config: {
      isNativeTag: Ao,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Jl = 0;
function Zl(e, t) {
  return function (i, s = null) {
    K(i) || (i = me({}, i)), s != null && !ce(s) && (s = null);
    const r = Ur(),
      l = new WeakSet();
    let a = !1;
    const o = (r.app = {
      _uid: Jl++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ta,
      get config() {
        return r.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          l.has(u) ||
            (u && K(u.install)
              ? (l.add(u), u.install(o, ...c))
              : K(u) && (l.add(u), u(o, ...c))),
          o
        );
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), o;
      },
      component(u, c) {
        return c ? ((r.components[u] = c), o) : r.components[u];
      },
      directive(u, c) {
        return c ? ((r.directives[u] = c), o) : r.directives[u];
      },
      mount(u, c, f) {
        if (!a) {
          const d = Ee(i, s);
          return (
            (d.appContext = r),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            c && t ? t(d, u) : e(d, u, f),
            (a = !0),
            (o._container = u),
            (u.__vue_app__ = o),
            Ui(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, o._container), delete o._container.__vue_app__);
      },
      provide(u, c) {
        return (r.provides[u] = c), o;
      },
      runWithContext(u) {
        const c = jt;
        jt = o;
        try {
          return u();
        } finally {
          jt = c;
        }
      },
    });
    return o;
  };
}
let jt = null;
function Tt(e, t) {
  if (he) {
    let n = he.provides;
    const i = he.parent && he.parent.provides;
    i === n && (n = he.provides = Object.create(i)), (n[e] = t);
  }
}
function ke(e, t, n = !1) {
  const i = he || ye;
  if (i || jt) {
    const s = i
      ? i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides
      : jt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && K(t) ? t.call(i && i.proxy) : t;
  }
}
function ea(e, t, n, i = !1) {
  const s = {},
    r = {};
  mn(r, Fn, 1), (e.propsDefaults = Object.create(null)), qr(e, t, s, r);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? (e.props = i ? s : Tr(s)) : e.type.props ? (e.props = s) : (e.props = r),
    (e.attrs = r);
}
function ta(e, t, n, i) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: l },
    } = e,
    a = J(s),
    [o] = e.propsOptions;
  let u = !1;
  if ((i || l > 0) && !(l & 16)) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (Rn(e.emitsOptions, d)) continue;
        const h = t[d];
        if (o)
          if (Q(r, d)) h !== r[d] && ((r[d] = h), (u = !0));
          else {
            const g = We(d);
            s[g] = di(o, a, g, h, e, !1);
          }
        else h !== r[d] && ((r[d] = h), (u = !0));
      }
    }
  } else {
    qr(e, t, s, r) && (u = !0);
    let c;
    for (const f in a)
      (!t || (!Q(t, f) && ((c = Lt(f)) === f || !Q(t, c)))) &&
        (o
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (s[f] = di(o, a, f, void 0, e, !0))
          : delete s[f]);
    if (r !== a) for (const f in r) (!t || !Q(t, f)) && (delete r[f], (u = !0));
  }
  u && Ye(e, "set", "$attrs");
}
function qr(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let l = !1,
    a;
  if (t)
    for (let o in t) {
      if (Dt(o)) continue;
      const u = t[o];
      let c;
      s && Q(s, (c = We(o)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Rn(e.emitsOptions, o) ||
          ((!(o in i) || u !== i[o]) && ((i[o] = u), (l = !0)));
    }
  if (r) {
    const o = J(n),
      u = a || ae;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = di(s, o, f, u[f], e, !Q(u, f));
    }
  }
  return l;
}
function di(e, t, n, i, s, r) {
  const l = e[n];
  if (l != null) {
    const a = Q(l, "default");
    if (a && i === void 0) {
      const o = l.default;
      if (l.type !== Function && !l.skipFactory && K(o)) {
        const { propsDefaults: u } = s;
        if (n in u) i = u[n];
        else {
          const c = Zt(s);
          (i = u[n] = o.call(null, t)), c();
        }
      } else i = o;
    }
    l[0] &&
      (r && !a ? (i = !1) : l[1] && (i === "" || i === Lt(n)) && (i = !0));
  }
  return i;
}
function Kr(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const r = e.props,
    l = {},
    a = [];
  let o = !1;
  if (!K(e)) {
    const c = (f) => {
      o = !0;
      const [d, h] = Kr(f, t, !0);
      me(l, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!r && !o) return ce(e) && i.set(e, St), St;
  if (U(r))
    for (let c = 0; c < r.length; c++) {
      const f = We(r[c]);
      gs(f) && (l[f] = ae);
    }
  else if (r)
    for (const c in r) {
      const f = We(c);
      if (gs(f)) {
        const d = r[c],
          h = (l[f] = U(d) || K(d) ? { type: d } : me({}, d));
        if (h) {
          const g = ys(Boolean, h.type),
            y = ys(String, h.type);
          (h[0] = g > -1),
            (h[1] = y < 0 || g < y),
            (g > -1 || Q(h, "default")) && a.push(f);
        }
      }
    }
  const u = [l, a];
  return ce(e) && i.set(e, u), u;
}
function gs(e) {
  return e[0] !== "$" && !Dt(e);
}
function vs(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function ws(e, t) {
  return vs(e) === vs(t);
}
function ys(e, t) {
  return U(t) ? t.findIndex((n) => ws(n, e)) : K(t) && ws(t, e) ? 0 : -1;
}
const Yr = (e) => e[0] === "_" || e === "$stable",
  Gi = (e) => (U(e) ? e.map(Ge) : [Ge(e)]),
  na = (e, t, n) => {
    if (t._n) return t;
    const i = _l((...s) => Gi(t(...s)), n);
    return (i._c = !1), i;
  },
  Xr = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (Yr(s)) continue;
      const r = e[s];
      if (K(r)) t[s] = na(s, r, i);
      else if (r != null) {
        const l = Gi(r);
        t[s] = () => l;
      }
    }
  },
  Qr = (e, t) => {
    const n = Gi(t);
    e.slots.default = () => n;
  },
  ia = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = J(t)), mn(t, "_", n)) : Xr(t, (e.slots = {}));
    } else (e.slots = {}), t && Qr(e, t);
    mn(e.slots, Fn, 1);
  },
  sa = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let r = !0,
      l = ae;
    if (i.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (r = !1)
          : (me(s, t), !n && a === 1 && delete s._)
        : ((r = !t.$stable), Xr(t, s)),
        (l = t);
    } else t && (Qr(e, t), (l = { default: 1 }));
    if (r) for (const a in s) !Yr(a) && l[a] == null && delete s[a];
  };
function pi(e, t, n, i, s = !1) {
  if (U(e)) {
    e.forEach((d, h) => pi(d, t && (U(t) ? t[h] : t), n, i, s));
    return;
  }
  if (Ht(i) && !s) return;
  const r = i.shapeFlag & 4 ? Ui(i.component) || i.component.proxy : i.el,
    l = s ? null : r,
    { i: a, r: o } = e,
    u = t && t.r,
    c = a.refs === ae ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (u != null &&
      u !== o &&
      (de(u)
        ? ((c[u] = null), Q(f, u) && (f[u] = null))
        : be(u) && (u.value = null)),
    K(o))
  )
    rt(o, a, 12, [l, c]);
  else {
    const d = de(o),
      h = be(o);
    if (d || h) {
      const g = () => {
        if (e.f) {
          const y = d ? (Q(f, o) ? f[o] : c[o]) : o.value;
          s
            ? U(y) && Ti(y, r)
            : U(y)
            ? y.includes(r) || y.push(r)
            : d
            ? ((c[o] = [r]), Q(f, o) && (f[o] = c[o]))
            : ((o.value = [r]), e.k && (c[e.k] = o.value));
        } else
          d
            ? ((c[o] = l), Q(f, o) && (f[o] = l))
            : h && ((o.value = l), e.k && (c[e.k] = l));
      };
      l ? ((g.id = -1), xe(g, n)) : g();
    }
  }
}
const xe = Ll;
function ra(e) {
  return oa(e);
}
function oa(e, t) {
  const n = fr();
  n.__VUE__ = !0;
  const {
      insert: i,
      remove: s,
      patchProp: r,
      createElement: l,
      createText: a,
      createComment: o,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = Re,
      insertStaticContent: g,
    } = e,
    y = (
      p,
      m,
      v,
      E = null,
      S = null,
      O = null,
      z = void 0,
      C = null,
      A = !!m.dynamicChildren
    ) => {
      if (p === m) return;
      p && !Nt(p, m) && ((E = x(p)), ge(p, S, O, !0), (p = null)),
        m.patchFlag === -2 && ((A = !1), (m.dynamicChildren = null));
      const { type: T, ref: F, shapeFlag: k } = m;
      switch (T) {
        case Vn:
          P(p, m, v, E);
          break;
        case Mt:
          w(p, m, v, E);
          break;
        case fn:
          p == null && _(m, v, E, z);
          break;
        case Ne:
          q(p, m, v, E, S, O, z, C, A);
          break;
        default:
          k & 1
            ? B(p, m, v, E, S, O, z, C, A)
            : k & 6
            ? H(p, m, v, E, S, O, z, C, A)
            : (k & 64 || k & 128) && T.process(p, m, v, E, S, O, z, C, A, D);
      }
      F != null && S && pi(F, p && p.ref, O, m || p, !m);
    },
    P = (p, m, v, E) => {
      if (p == null) i((m.el = a(m.children)), v, E);
      else {
        const S = (m.el = p.el);
        m.children !== p.children && u(S, m.children);
      }
    },
    w = (p, m, v, E) => {
      p == null ? i((m.el = o(m.children || "")), v, E) : (m.el = p.el);
    },
    _ = (p, m, v, E) => {
      [p.el, p.anchor] = g(p.children, m, v, E, p.el, p.anchor);
    },
    b = ({ el: p, anchor: m }, v, E) => {
      let S;
      for (; p && p !== m; ) (S = d(p)), i(p, v, E), (p = S);
      i(m, v, E);
    },
    M = ({ el: p, anchor: m }) => {
      let v;
      for (; p && p !== m; ) (v = d(p)), s(p), (p = v);
      s(m);
    },
    B = (p, m, v, E, S, O, z, C, A) => {
      m.type === "svg" ? (z = "svg") : m.type === "math" && (z = "mathml"),
        p == null ? R(m, v, E, S, O, z, C, A) : N(p, m, S, O, z, C, A);
    },
    R = (p, m, v, E, S, O, z, C) => {
      let A, T;
      const { props: F, shapeFlag: k, transition: G, dirs: W } = p;
      if (
        ((A = p.el = l(p.type, O, F && F.is, F)),
        k & 8
          ? c(A, p.children)
          : k & 16 && j(p.children, A, null, E, S, Un(p, O), z, C),
        W && lt(p, null, E, "created"),
        Z(A, p, p.scopeId, z, E),
        F)
      ) {
        for (const ie in F)
          ie !== "value" &&
            !Dt(ie) &&
            r(A, ie, null, F[ie], O, p.children, E, S, ve);
        "value" in F && r(A, "value", null, F.value, O),
          (T = F.onVnodeBeforeMount) && He(T, E, p);
      }
      W && lt(p, null, E, "beforeMount");
      const Y = la(S, G);
      Y && G.beforeEnter(A),
        i(A, m, v),
        ((T = F && F.onVnodeMounted) || Y || W) &&
          xe(() => {
            T && He(T, E, p), Y && G.enter(A), W && lt(p, null, E, "mounted");
          }, S);
    },
    Z = (p, m, v, E, S) => {
      if ((v && h(p, v), E)) for (let O = 0; O < E.length; O++) h(p, E[O]);
      if (S) {
        let O = S.subTree;
        if (m === O) {
          const z = S.vnode;
          Z(p, z, z.scopeId, z.slotScopeIds, S.parent);
        }
      }
    },
    j = (p, m, v, E, S, O, z, C, A = 0) => {
      for (let T = A; T < p.length; T++) {
        const F = (p[T] = C ? et(p[T]) : Ge(p[T]));
        y(null, F, m, v, E, S, O, z, C);
      }
    },
    N = (p, m, v, E, S, O, z) => {
      const C = (m.el = p.el);
      let { patchFlag: A, dynamicChildren: T, dirs: F } = m;
      A |= p.patchFlag & 16;
      const k = p.props || ae,
        G = m.props || ae;
      let W;
      if (
        (v && at(v, !1),
        (W = G.onVnodeBeforeUpdate) && He(W, v, m, p),
        F && lt(m, p, v, "beforeUpdate"),
        v && at(v, !0),
        T
          ? I(p.dynamicChildren, T, C, v, E, Un(m, S), O)
          : z || X(p, m, C, null, v, E, Un(m, S), O, !1),
        A > 0)
      ) {
        if (A & 16) $(C, m, k, G, v, E, S);
        else if (
          (A & 2 && k.class !== G.class && r(C, "class", null, G.class, S),
          A & 4 && r(C, "style", k.style, G.style, S),
          A & 8)
        ) {
          const Y = m.dynamicProps;
          for (let ie = 0; ie < Y.length; ie++) {
            const le = Y[ie],
              fe = k[le],
              ze = G[le];
            (ze !== fe || le === "value") &&
              r(C, le, fe, ze, S, p.children, v, E, ve);
          }
        }
        A & 1 && p.children !== m.children && c(C, m.children);
      } else !z && T == null && $(C, m, k, G, v, E, S);
      ((W = G.onVnodeUpdated) || F) &&
        xe(() => {
          W && He(W, v, m, p), F && lt(m, p, v, "updated");
        }, E);
    },
    I = (p, m, v, E, S, O, z) => {
      for (let C = 0; C < m.length; C++) {
        const A = p[C],
          T = m[C],
          F =
            A.el && (A.type === Ne || !Nt(A, T) || A.shapeFlag & 70)
              ? f(A.el)
              : v;
        y(A, T, F, null, E, S, O, z, !0);
      }
    },
    $ = (p, m, v, E, S, O, z) => {
      if (v !== E) {
        if (v !== ae)
          for (const C in v)
            !Dt(C) && !(C in E) && r(p, C, v[C], null, z, m.children, S, O, ve);
        for (const C in E) {
          if (Dt(C)) continue;
          const A = E[C],
            T = v[C];
          A !== T && C !== "value" && r(p, C, T, A, z, m.children, S, O, ve);
        }
        "value" in E && r(p, "value", v.value, E.value, z);
      }
    },
    q = (p, m, v, E, S, O, z, C, A) => {
      const T = (m.el = p ? p.el : a("")),
        F = (m.anchor = p ? p.anchor : a(""));
      let { patchFlag: k, dynamicChildren: G, slotScopeIds: W } = m;
      W && (C = C ? C.concat(W) : W),
        p == null
          ? (i(T, v, E), i(F, v, E), j(m.children || [], v, F, S, O, z, C, A))
          : k > 0 && k & 64 && G && p.dynamicChildren
          ? (I(p.dynamicChildren, G, v, S, O, z, C),
            (m.key != null || (S && m === S.subTree)) && Jr(p, m, !0))
          : X(p, m, v, F, S, O, z, C, A);
    },
    H = (p, m, v, E, S, O, z, C, A) => {
      (m.slotScopeIds = C),
        p == null
          ? m.shapeFlag & 512
            ? S.ctx.activate(m, v, E, z, A)
            : re(m, v, E, S, O, z, A)
          : ue(p, m, A);
    },
    re = (p, m, v, E, S, O, z) => {
      const C = (p.component = wa(p, E, S));
      if ((Hr(p) && (C.ctx.renderer = D), Sa(C), C.asyncDep)) {
        if ((S && S.registerDep(C, se), !p.el)) {
          const A = (C.subTree = Ee(Mt));
          w(null, A, m, v);
        }
      } else se(C, p, m, v, S, O, z);
    },
    ue = (p, m, v) => {
      const E = (m.component = p.component);
      if (Cl(p, m, v))
        if (E.asyncDep && !E.asyncResolved) {
          ee(E, m, v);
          return;
        } else (E.next = m), Sl(E.update), (E.effect.dirty = !0), E.update();
      else (m.el = p.el), (E.vnode = m);
    },
    se = (p, m, v, E, S, O, z) => {
      const C = () => {
          if (p.isMounted) {
            let { next: F, bu: k, u: G, parent: W, vnode: Y } = p;
            {
              const vt = Zr(p);
              if (vt) {
                F && ((F.el = Y.el), ee(p, F, z)),
                  vt.asyncDep.then(() => {
                    p.isUnmounted || C();
                  });
                return;
              }
            }
            let ie = F,
              le;
            at(p, !1),
              F ? ((F.el = Y.el), ee(p, F, z)) : (F = Y),
              k && Gn(k),
              (le = F.props && F.props.onVnodeBeforeUpdate) && He(le, W, F, Y),
              at(p, !0);
            const fe = kn(p),
              ze = p.subTree;
            (p.subTree = fe),
              y(ze, fe, f(ze.el), x(ze), p, S, O),
              (F.el = fe.el),
              ie === null && Ml(p, fe.el),
              G && xe(G, S),
              (le = F.props && F.props.onVnodeUpdated) &&
                xe(() => He(le, W, F, Y), S);
          } else {
            let F;
            const { el: k, props: G } = m,
              { bm: W, m: Y, parent: ie } = p,
              le = Ht(m);
            if (
              (at(p, !1),
              W && Gn(W),
              !le && (F = G && G.onVnodeBeforeMount) && He(F, ie, m),
              at(p, !0),
              k && oe)
            ) {
              const fe = () => {
                (p.subTree = kn(p)), oe(k, p.subTree, p, S, null);
              };
              le
                ? m.type.__asyncLoader().then(() => !p.isUnmounted && fe())
                : fe();
            } else {
              const fe = (p.subTree = kn(p));
              y(null, fe, v, E, p, S, O), (m.el = fe.el);
            }
            if ((Y && xe(Y, S), !le && (F = G && G.onVnodeMounted))) {
              const fe = m;
              xe(() => He(F, ie, fe), S);
            }
            (m.shapeFlag & 256 ||
              (ie && Ht(ie.vnode) && ie.vnode.shapeFlag & 256)) &&
              p.a &&
              xe(p.a, S),
              (p.isMounted = !0),
              (m = v = E = null);
          }
        },
        A = (p.effect = new Mi(C, Re, () => Vi(T), p.scope)),
        T = (p.update = () => {
          A.dirty && A.run();
        });
      (T.id = p.uid), at(p, !0), T();
    },
    ee = (p, m, v) => {
      m.component = p;
      const E = p.vnode.props;
      (p.vnode = m),
        (p.next = null),
        ta(p, m.props, E, v),
        sa(p, m.children, v),
        pt(),
        cs(p),
        ht();
    },
    X = (p, m, v, E, S, O, z, C, A = !1) => {
      const T = p && p.children,
        F = p ? p.shapeFlag : 0,
        k = m.children,
        { patchFlag: G, shapeFlag: W } = m;
      if (G > 0) {
        if (G & 128) {
          Le(T, k, v, E, S, O, z, C, A);
          return;
        } else if (G & 256) {
          Oe(T, k, v, E, S, O, z, C, A);
          return;
        }
      }
      W & 8
        ? (F & 16 && ve(T, S, O), k !== T && c(v, k))
        : F & 16
        ? W & 16
          ? Le(T, k, v, E, S, O, z, C, A)
          : ve(T, S, O, !0)
        : (F & 8 && c(v, ""), W & 16 && j(k, v, E, S, O, z, C, A));
    },
    Oe = (p, m, v, E, S, O, z, C, A) => {
      (p = p || St), (m = m || St);
      const T = p.length,
        F = m.length,
        k = Math.min(T, F);
      let G;
      for (G = 0; G < k; G++) {
        const W = (m[G] = A ? et(m[G]) : Ge(m[G]));
        y(p[G], W, v, null, S, O, z, C, A);
      }
      T > F ? ve(p, S, O, !0, !1, k) : j(m, v, E, S, O, z, C, A, k);
    },
    Le = (p, m, v, E, S, O, z, C, A) => {
      let T = 0;
      const F = m.length;
      let k = p.length - 1,
        G = F - 1;
      for (; T <= k && T <= G; ) {
        const W = p[T],
          Y = (m[T] = A ? et(m[T]) : Ge(m[T]));
        if (Nt(W, Y)) y(W, Y, v, null, S, O, z, C, A);
        else break;
        T++;
      }
      for (; T <= k && T <= G; ) {
        const W = p[k],
          Y = (m[G] = A ? et(m[G]) : Ge(m[G]));
        if (Nt(W, Y)) y(W, Y, v, null, S, O, z, C, A);
        else break;
        k--, G--;
      }
      if (T > k) {
        if (T <= G) {
          const W = G + 1,
            Y = W < F ? m[W].el : E;
          for (; T <= G; )
            y(null, (m[T] = A ? et(m[T]) : Ge(m[T])), v, Y, S, O, z, C, A), T++;
        }
      } else if (T > G) for (; T <= k; ) ge(p[T], S, O, !0), T++;
      else {
        const W = T,
          Y = T,
          ie = new Map();
        for (T = Y; T <= G; T++) {
          const Te = (m[T] = A ? et(m[T]) : Ge(m[T]));
          Te.key != null && ie.set(Te.key, T);
        }
        let le,
          fe = 0;
        const ze = G - Y + 1;
        let vt = !1,
          Ji = 0;
        const Bt = new Array(ze);
        for (T = 0; T < ze; T++) Bt[T] = 0;
        for (T = W; T <= k; T++) {
          const Te = p[T];
          if (fe >= ze) {
            ge(Te, S, O, !0);
            continue;
          }
          let $e;
          if (Te.key != null) $e = ie.get(Te.key);
          else
            for (le = Y; le <= G; le++)
              if (Bt[le - Y] === 0 && Nt(Te, m[le])) {
                $e = le;
                break;
              }
          $e === void 0
            ? ge(Te, S, O, !0)
            : ((Bt[$e - Y] = T + 1),
              $e >= Ji ? (Ji = $e) : (vt = !0),
              y(Te, m[$e], v, null, S, O, z, C, A),
              fe++);
        }
        const Zi = vt ? aa(Bt) : St;
        for (le = Zi.length - 1, T = ze - 1; T >= 0; T--) {
          const Te = Y + T,
            $e = m[Te],
            es = Te + 1 < F ? m[Te + 1].el : E;
          Bt[T] === 0
            ? y(null, $e, v, es, S, O, z, C, A)
            : vt && (le < 0 || T !== Zi[le] ? Ie($e, v, es, 2) : le--);
        }
      }
    },
    Ie = (p, m, v, E, S = null) => {
      const { el: O, type: z, transition: C, children: A, shapeFlag: T } = p;
      if (T & 6) {
        Ie(p.component.subTree, m, v, E);
        return;
      }
      if (T & 128) {
        p.suspense.move(m, v, E);
        return;
      }
      if (T & 64) {
        z.move(p, m, v, D);
        return;
      }
      if (z === Ne) {
        i(O, m, v);
        for (let k = 0; k < A.length; k++) Ie(A[k], m, v, E);
        i(p.anchor, m, v);
        return;
      }
      if (z === fn) {
        b(p, m, v);
        return;
      }
      if (E !== 2 && T & 1 && C)
        if (E === 0) C.beforeEnter(O), i(O, m, v), xe(() => C.enter(O), S);
        else {
          const { leave: k, delayLeave: G, afterLeave: W } = C,
            Y = () => i(O, m, v),
            ie = () => {
              k(O, () => {
                Y(), W && W();
              });
            };
          G ? G(O, Y, ie) : ie();
        }
      else i(O, m, v);
    },
    ge = (p, m, v, E = !1, S = !1) => {
      const {
        type: O,
        props: z,
        ref: C,
        children: A,
        dynamicChildren: T,
        shapeFlag: F,
        patchFlag: k,
        dirs: G,
      } = p;
      if ((C != null && pi(C, null, v, p, !0), F & 256)) {
        m.ctx.deactivate(p);
        return;
      }
      const W = F & 1 && G,
        Y = !Ht(p);
      let ie;
      if ((Y && (ie = z && z.onVnodeBeforeUnmount) && He(ie, m, p), F & 6))
        en(p.component, v, E);
      else {
        if (F & 128) {
          p.suspense.unmount(v, E);
          return;
        }
        W && lt(p, null, m, "beforeUnmount"),
          F & 64
            ? p.type.remove(p, m, v, S, D, E)
            : T && (O !== Ne || (k > 0 && k & 64))
            ? ve(T, m, v, !1, !0)
            : ((O === Ne && k & 384) || (!S && F & 16)) && ve(A, m, v),
          E && mt(p);
      }
      ((Y && (ie = z && z.onVnodeUnmounted)) || W) &&
        xe(() => {
          ie && He(ie, m, p), W && lt(p, null, m, "unmounted");
        }, v);
    },
    mt = (p) => {
      const { type: m, el: v, anchor: E, transition: S } = p;
      if (m === Ne) {
        gt(v, E);
        return;
      }
      if (m === fn) {
        M(p);
        return;
      }
      const O = () => {
        s(v), S && !S.persisted && S.afterLeave && S.afterLeave();
      };
      if (p.shapeFlag & 1 && S && !S.persisted) {
        const { leave: z, delayLeave: C } = S,
          A = () => z(v, O);
        C ? C(p.el, O, A) : A();
      } else O();
    },
    gt = (p, m) => {
      let v;
      for (; p !== m; ) (v = d(p)), s(p), (p = v);
      s(m);
    },
    en = (p, m, v) => {
      const { bum: E, scope: S, update: O, subTree: z, um: C } = p;
      E && Gn(E),
        S.stop(),
        O && ((O.active = !1), ge(z, p, m, v)),
        C && xe(C, m),
        xe(() => {
          p.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    ve = (p, m, v, E = !1, S = !1, O = 0) => {
      for (let z = O; z < p.length; z++) ge(p[z], m, v, E, S);
    },
    x = (p) =>
      p.shapeFlag & 6
        ? x(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : d(p.anchor || p.el);
  let V = !1;
  const L = (p, m, v) => {
      p == null
        ? m._vnode && ge(m._vnode, null, null, !0)
        : y(m._vnode || null, p, m, null, null, null, v),
        V || ((V = !0), cs(), Br(), (V = !1)),
        (m._vnode = p);
    },
    D = {
      p: y,
      um: ge,
      m: Ie,
      r: mt,
      mt: re,
      mc: j,
      pc: X,
      pbc: I,
      n: x,
      o: e,
    };
  let te, oe;
  return (
    t && ([te, oe] = t(D)), { render: L, hydrate: te, createApp: Zl(L, te) }
  );
}
function Un({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function la(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Jr(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if (U(i) && U(s))
    for (let r = 0; r < i.length; r++) {
      const l = i[r];
      let a = s[r];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[r] = et(s[r])), (a.el = l.el)),
        n || Jr(l, a)),
        a.type === Vn && (a.el = l.el);
    }
}
function aa(e) {
  const t = e.slice(),
    n = [0];
  let i, s, r, l, a;
  const o = e.length;
  for (i = 0; i < o; i++) {
    const u = e[i];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[i] = s), n.push(i);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        (a = (r + l) >> 1), e[n[a]] < u ? (r = a + 1) : (l = a);
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i));
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) (n[r] = l), (l = t[l]);
  return n;
}
function Zr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Zr(t);
}
const ca = (e) => e.__isTeleport,
  Ne = Symbol.for("v-fgt"),
  Vn = Symbol.for("v-txt"),
  Mt = Symbol.for("v-cmt"),
  fn = Symbol.for("v-stc"),
  kt = [];
let Ve = null;
function ji(e = !1) {
  kt.push((Ve = e ? null : []));
}
function ua() {
  kt.pop(), (Ve = kt[kt.length - 1] || null);
}
let Xt = 1;
function Ss(e) {
  Xt += e;
}
function eo(e) {
  return (
    (e.dynamicChildren = Xt > 0 ? Ve || St : null),
    ua(),
    Xt > 0 && Ve && Ve.push(e),
    e
  );
}
function fa(e, t, n, i, s, r) {
  return eo(ki(e, t, n, i, s, r, !0));
}
function to(e, t, n, i, s) {
  return eo(Ee(e, t, n, i, s, !0));
}
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fn = "__vInternal",
  no = ({ key: e }) => e ?? null,
  dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? de(e) || be(e) || K(e)
        ? { i: ye, r: e, k: t, f: !!n }
        : e
      : null
  );
function ki(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  r = e === Ne ? 0 : 1,
  l = !1,
  a = !1
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && no(t),
    ref: t && dn(t),
    scopeId: Ln,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ye,
  };
  return (
    a
      ? (Wi(o, n), r & 128 && e.normalize(o))
      : n && (o.shapeFlag |= de(n) ? 8 : 16),
    Xt > 0 &&
      !l &&
      Ve &&
      (o.patchFlag > 0 || r & 6) &&
      o.patchFlag !== 32 &&
      Ve.push(o),
    o
  );
}
const Ee = da;
function da(e, t = null, n = null, i = 0, s = null, r = !1) {
  if (((!e || e === Il) && (e = Mt), Sn(e))) {
    const a = Ot(e, t, !0);
    return (
      n && Wi(a, n),
      Xt > 0 &&
        !r &&
        Ve &&
        (a.shapeFlag & 6 ? (Ve[Ve.indexOf(e)] = a) : Ve.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((_a(e) && (e = e.__vccOpts), t)) {
    t = pa(t);
    let { class: a, style: o } = t;
    a && !de(a) && (t.class = Ci(a)),
      ce(o) && (Cr(o) && !U(o) && (o = me({}, o)), (t.style = Mn(o)));
  }
  const l = de(e) ? 1 : Rl(e) ? 128 : ca(e) ? 64 : ce(e) ? 4 : K(e) ? 2 : 0;
  return ki(e, t, n, i, s, l, r, !0);
}
function pa(e) {
  return e ? (Cr(e) || Fn in e ? me({}, e) : e) : null;
}
function Ot(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: r, children: l } = e,
    a = t ? ma(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && no(a),
    ref:
      t && t.ref ? (n && s ? (U(s) ? s.concat(dn(t)) : [s, dn(t)]) : dn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ne ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ha(e = " ", t = 0) {
  return Ee(Vn, null, e, t);
}
function Kf(e, t) {
  const n = Ee(fn, null, e);
  return (n.staticCount = t), n;
}
function Ge(e) {
  return e == null || typeof e == "boolean"
    ? Ee(Mt)
    : U(e)
    ? Ee(Ne, null, e.slice())
    : typeof e == "object"
    ? et(e)
    : Ee(Vn, null, String(e));
}
function et(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ot(e);
}
function Wi(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (U(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Wi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Fn in t)
        ? (t._ctx = ye)
        : s === 3 &&
          ye &&
          (ye.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: ye }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [ha(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ma(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Ci([t.class, i.class]));
      else if (s === "style") t.style = Mn([t.style, i.style]);
      else if (_n(s)) {
        const r = t[s],
          l = i[s];
        l &&
          r !== l &&
          !(U(r) && r.includes(l)) &&
          (t[s] = r ? [].concat(r, l) : l);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function He(e, t, n, i = null) {
  Fe(e, t, 7, [n, i]);
}
const ga = Ur();
let va = 0;
function wa(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || ga,
    r = {
      uid: va++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new jo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Kr(i, s),
      emitsOptions: Vr(i, s),
      emit: null,
      emitted: null,
      propsDefaults: ae,
      inheritAttrs: i.inheritAttrs,
      ctx: ae,
      data: ae,
      props: ae,
      attrs: ae,
      slots: ae,
      refs: ae,
      setupState: ae,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = El.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let he = null;
const ya = () => he || ye;
let bn, hi;
{
  const e = fr(),
    t = (n, i) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(i),
        (r) => {
          s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
        }
      );
    };
  (bn = t("__VUE_INSTANCE_SETTERS__", (n) => (he = n))),
    (hi = t("__VUE_SSR_SETTERS__", (n) => (Dn = n)));
}
const Zt = (e) => {
    const t = he;
    return (
      bn(e),
      e.scope.on(),
      () => {
        e.scope.off(), bn(t);
      }
    );
  },
  bs = () => {
    he && he.scope.off(), bn(null);
  };
function io(e) {
  return e.vnode.shapeFlag & 4;
}
let Dn = !1;
function Sa(e, t = !1) {
  t && hi(t);
  const { props: n, children: i } = e.vnode,
    s = io(e);
  ea(e, n, s, t), ia(e, i);
  const r = s ? ba(e, t) : void 0;
  return t && hi(!1), r;
}
function ba(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Mr(new Proxy(e.ctx, Wl)));
  const { setup: i } = n;
  if (i) {
    const s = (e.setupContext = i.length > 1 ? ro(e) : null),
      r = Zt(e);
    pt();
    const l = rt(i, e, 0, [e.props, s]);
    if ((ht(), r(), ar(l))) {
      if ((l.then(bs, bs), t))
        return l
          .then((a) => {
            xs(e, a, t);
          })
          .catch((a) => {
            An(a, e, 0);
          });
      e.asyncDep = l;
    } else xs(e, l, t);
  } else so(e, t);
}
function xs(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ce(t) && (e.setupState = Rr(t)),
    so(e, n);
}
let Es;
function so(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Es && !i.render) {
      const s = i.template || Hi(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: l } = e.appContext.config,
          { delimiters: a, compilerOptions: o } = i,
          u = me(me({ isCustomElement: r, delimiters: a }, l), o);
        i.render = Es(s, u);
      }
    }
    e.render = i.render || Re;
  }
  {
    const s = Zt(e);
    pt();
    try {
      ql(e);
    } finally {
      ht(), s();
    }
  }
}
function xa(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return _e(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function ro(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return xa(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ui(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Rr(Mr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Gt) return Gt[n](e);
        },
        has(t, n) {
          return n in t || n in Gt;
        },
      }))
    );
}
function Ea(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function _a(e) {
  return K(e) && "__vccOpts" in e;
}
const Ae = (e, t) => dl(e, t, Dn);
function Ce(e, t, n) {
  const i = arguments.length;
  return i === 2
    ? ce(t) && !U(t)
      ? Sn(t)
        ? Ee(e, null, [t])
        : Ee(e, t)
      : Ee(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && Sn(n) && (n = [n]),
      Ee(e, t, n));
}
const Ta = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Pa = "http://www.w3.org/2000/svg",
  Ca = "http://www.w3.org/1998/Math/MathML",
  tt = typeof document < "u" ? document : null,
  _s = tt && tt.createElement("template"),
  Ma = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s =
        t === "svg"
          ? tt.createElementNS(Pa, e)
          : t === "mathml"
          ? tt.createElementNS(Ca, e)
          : tt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          i &&
          i.multiple != null &&
          s.setAttribute("multiple", i.multiple),
        s
      );
    },
    createText: (e) => tt.createTextNode(e),
    createComment: (e) => tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => tt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, s, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        _s.innerHTML =
          i === "svg"
            ? `<svg>${e}</svg>`
            : i === "mathml"
            ? `<math>${e}</math>`
            : e;
        const a = _s.content;
        if (i === "svg" || i === "mathml") {
          const o = a.firstChild;
          for (; o.firstChild; ) a.appendChild(o.firstChild);
          a.removeChild(o);
        }
        t.insertBefore(a, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Oa = Symbol("_vtc");
function Ia(e, t, n) {
  const i = e[Oa];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Ts = Symbol("_vod"),
  Aa = Symbol("_vsh"),
  Ra = Symbol(""),
  La = /(^|;)\s*display\s*:/;
function za(e, t, n) {
  const i = e.style,
    s = de(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (de(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          n[a] == null && pn(i, a, "");
        }
      else for (const l in t) n[l] == null && pn(i, l, "");
    for (const l in n) l === "display" && (r = !0), pn(i, l, n[l]);
  } else if (s) {
    if (t !== n) {
      const l = i[Ra];
      l && (n += ";" + l), (i.cssText = n), (r = La.test(n));
    }
  } else t && e.removeAttribute("style");
  Ts in e && ((e[Ts] = r ? i.display : ""), e[Aa] && (i.display = "none"));
}
const Ps = /\s*!important$/;
function pn(e, t, n) {
  if (U(n)) n.forEach((i) => pn(e, t, i));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const i = Ba(e, t);
    Ps.test(n)
      ? e.setProperty(Lt(i), n.replace(Ps, ""), "important")
      : (e[i] = n);
  }
}
const Cs = ["Webkit", "Moz", "ms"],
  qn = {};
function Ba(e, t) {
  const n = qn[t];
  if (n) return n;
  let i = We(t);
  if (i !== "filter" && i in e) return (qn[t] = i);
  i = Cn(i);
  for (let s = 0; s < Cs.length; s++) {
    const r = Cs[s] + i;
    if (r in e) return (qn[t] = r);
  }
  return t;
}
const Ms = "http://www.w3.org/1999/xlink";
function Na(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Ms, t.slice(6, t.length))
      : e.setAttributeNS(Ms, t, n);
  else {
    const r = Go(t);
    n == null || (r && !dr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function Va(e, t, n, i, s, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    i && l(i, s, r), (e[t] = n ?? "");
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n ?? "";
    (u !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean"
      ? (n = dr(n))
      : n == null && u === "string"
      ? ((n = ""), (o = !0))
      : u === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(t);
}
function Fa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Da(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Os = Symbol("_vei");
function $a(e, t, n, i, s = null) {
  const r = e[Os] || (e[Os] = {}),
    l = r[t];
  if (i && l) l.value = i;
  else {
    const [a, o] = Ha(t);
    if (i) {
      const u = (r[t] = ka(i, s));
      Fa(e, a, u, o);
    } else l && (Da(e, a, l, o), (r[t] = void 0));
  }
}
const Is = /(?:Once|Passive|Capture)$/;
function Ha(e) {
  let t;
  if (Is.test(e)) {
    t = {};
    let i;
    for (; (i = e.match(Is)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Lt(e.slice(2)), t];
}
let Kn = 0;
const Ga = Promise.resolve(),
  ja = () => Kn || (Ga.then(() => (Kn = 0)), (Kn = Date.now()));
function ka(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    Fe(Wa(i, n.value), t, 5, [i]);
  };
  return (n.value = e), (n.attached = ja()), n;
}
function Wa(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return t;
}
const As = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ua = (e, t, n, i, s, r, l, a, o) => {
    const u = s === "svg";
    t === "class"
      ? Ia(e, i, u)
      : t === "style"
      ? za(e, n, i)
      : _n(t)
      ? _i(t) || $a(e, t, n, i, l)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : qa(e, t, i, u)
        )
      ? Va(e, t, i, r, l, a, o)
      : (t === "true-value"
          ? (e._trueValue = i)
          : t === "false-value" && (e._falseValue = i),
        Na(e, t, i, u));
  };
function qa(e, t, n, i) {
  if (i)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && As(t) && K(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return As(t) && de(n) ? !1 : t in e;
}
const Ka = me({ patchProp: Ua }, Ma);
let Rs;
function oo() {
  return Rs || (Rs = ra(Ka));
}
const Yf = (...e) => {
    oo().render(...e);
  },
  Ya = (...e) => {
    const t = oo().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (i) => {
        const s = Qa(i);
        if (!s) return;
        const r = t._component;
        !K(r) && !r.render && !r.template && (r.template = s.innerHTML),
          (s.innerHTML = "");
        const l = n(s, !1, Xa(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          l
        );
      }),
      t
    );
  };
function Xa(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qa(e) {
  return de(e) ? document.querySelector(e) : e;
}
function Ja() {
  const e = pe(),
    t = pe(0),
    n = { width: "1", height: "1" },
    i = 1080,
    s = () => {
      const o = window.innerWidth;
      e.value &&
        ((n.width = (o / i).toFixed(5)),
        (n.height = "1"),
        (e.value.style.transform = `scale(${n.width})`));
    },
    r = () => {
      clearTimeout(t.value),
        (t.value = window.setTimeout(() => {
          s();
        }, 200));
    };
  return {
    screenRef: e,
    calcRate: s,
    windowDraw: () => {
      window.addEventListener("resize", r);
    },
    unWindowDraw: () => {
      window.removeEventListener("resize", r);
    },
  };
}
const Za = zn({
    __name: "App",
    setup(e) {
      const { calcRate: t, windowDraw: n, unWindowDraw: i } = Ja();
      return (
        Nn(() => {
          n(), t();
        }),
        $i(() => {
          i();
        }),
        (s, r) => {
          const l = Ol("router-view");
          return ji(), to(l);
        }
      );
    },
  }),
  ec = !/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/i.test(
    navigator.userAgent
  );
let Ls = 1080;
function lo() {
  const e = document.documentElement.clientWidth;
  let t = e / (Ls * 10),
    n = 1.5;
  ec && ((n = 1), (t = e / 1920)),
    (document.documentElement.style.fontSize = Ls * Math.min(t, n) + "px");
}
lo();
window.onresize = function () {
  lo();
};
(function (t, n) {
  var i = n.documentElement,
    s = t.devicePixelRatio || 1;
  function r() {
    n.body
      ? (n.body.style.fontSize = 12 * s + "px")
      : n.addEventListener("DOMContentLoaded", r);
  }
  r();
  function l() {
    var u = i.clientWidth / 10;
    i.style.fontSize = u + "px";
  }
  if (
    (l(),
    t.addEventListener("resize", l),
    t.addEventListener("pageshow", function (u) {
      u.persisted && l();
    }),
    s >= 2)
  ) {
    var a = n.createElement("body"),
      o = n.createElement("div");
    (o.style.border = ".5px solid transparent"),
      a.appendChild(o),
      i.appendChild(a),
      o.offsetHeight === 1 && i.classList.add("hairlines"),
      i.removeChild(a);
  }
})(window, document);
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const wt = typeof document < "u";
function tc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ne = Object.assign;
function Yn(e, t) {
  const n = {};
  for (const i in t) {
    const s = t[i];
    n[i] = De(s) ? s.map(e) : e(s);
  }
  return n;
}
const Wt = () => {},
  De = Array.isArray,
  ao = /#/g,
  nc = /&/g,
  ic = /\//g,
  sc = /=/g,
  rc = /\?/g,
  co = /\+/g,
  oc = /%5B/g,
  lc = /%5D/g,
  uo = /%5E/g,
  ac = /%60/g,
  fo = /%7B/g,
  cc = /%7C/g,
  po = /%7D/g,
  uc = /%20/g;
function qi(e) {
  return encodeURI("" + e)
    .replace(cc, "|")
    .replace(oc, "[")
    .replace(lc, "]");
}
function fc(e) {
  return qi(e).replace(fo, "{").replace(po, "}").replace(uo, "^");
}
function mi(e) {
  return qi(e)
    .replace(co, "%2B")
    .replace(uc, "+")
    .replace(ao, "%23")
    .replace(nc, "%26")
    .replace(ac, "`")
    .replace(fo, "{")
    .replace(po, "}")
    .replace(uo, "^");
}
function dc(e) {
  return mi(e).replace(sc, "%3D");
}
function pc(e) {
  return qi(e).replace(ao, "%23").replace(rc, "%3F");
}
function hc(e) {
  return e == null ? "" : pc(e).replace(ic, "%2F");
}
function Qt(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const mc = /\/$/,
  gc = (e) => e.replace(mc, "");
function Xn(e, t, n = "/") {
  let i,
    s = {},
    r = "",
    l = "";
  const a = t.indexOf("#");
  let o = t.indexOf("?");
  return (
    a < o && a >= 0 && (o = -1),
    o > -1 &&
      ((i = t.slice(0, o)),
      (r = t.slice(o + 1, a > -1 ? a : t.length)),
      (s = e(r))),
    a > -1 && ((i = i || t.slice(0, a)), (l = t.slice(a, t.length))),
    (i = Sc(i ?? t, n)),
    { fullPath: i + (r && "?") + r + l, path: i, query: s, hash: Qt(l) }
  );
}
function vc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function zs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function wc(e, t, n) {
  const i = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    i > -1 &&
    i === s &&
    It(t.matched[i], n.matched[s]) &&
    ho(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function It(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ho(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!yc(e[n], t[n])) return !1;
  return !0;
}
function yc(e, t) {
  return De(e) ? Bs(e, t) : De(t) ? Bs(t, e) : e === t;
}
function Bs(e, t) {
  return De(t)
    ? e.length === t.length && e.every((n, i) => n === t[i])
    : e.length === 1 && e[0] === t;
}
function Sc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    i = e.split("/"),
    s = i[i.length - 1];
  (s === ".." || s === ".") && i.push("");
  let r = n.length - 1,
    l,
    a;
  for (l = 0; l < i.length; l++)
    if (((a = i[l]), a !== "."))
      if (a === "..") r > 1 && r--;
      else break;
  return n.slice(0, r).join("/") + "/" + i.slice(l).join("/");
}
var Jt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Jt || (Jt = {}));
var Ut;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ut || (Ut = {}));
function bc(e) {
  if (!e)
    if (wt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gc(e);
}
const xc = /^[^#]+#/;
function Ec(e, t) {
  return e.replace(xc, "#") + t;
}
function _c(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    i = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: i.left - n.left - (t.left || 0),
    top: i.top - n.top - (t.top || 0),
  };
}
const $n = () => ({ left: window.scrollX, top: window.scrollY });
function Tc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      i = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? i
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = _c(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Ns(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const gi = new Map();
function Pc(e, t) {
  gi.set(e, t);
}
function Cc(e) {
  const t = gi.get(e);
  return gi.delete(e), t;
}
let Mc = () => location.protocol + "//" + location.host;
function mo(e, t) {
  const { pathname: n, search: i, hash: s } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let a = s.includes(e.slice(r)) ? e.slice(r).length : 1,
      o = s.slice(a);
    return o[0] !== "/" && (o = "/" + o), zs(o, "");
  }
  return zs(n, e) + i + s;
}
function Oc(e, t, n, i) {
  let s = [],
    r = [],
    l = null;
  const a = ({ state: d }) => {
    const h = mo(e, location),
      g = n.value,
      y = t.value;
    let P = 0;
    if (d) {
      if (((n.value = h), (t.value = d), l && l === g)) {
        l = null;
        return;
      }
      P = y ? d.position - y.position : 0;
    } else i(h);
    s.forEach((w) => {
      w(n.value, g, {
        delta: P,
        type: Jt.pop,
        direction: P ? (P > 0 ? Ut.forward : Ut.back) : Ut.unknown,
      });
    });
  };
  function o() {
    l = n.value;
  }
  function u(d) {
    s.push(d);
    const h = () => {
      const g = s.indexOf(d);
      g > -1 && s.splice(g, 1);
    };
    return r.push(h), h;
  }
  function c() {
    const { history: d } = window;
    d.state && d.replaceState(ne({}, d.state, { scroll: $n() }), "");
  }
  function f() {
    for (const d of r) d();
    (r = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: o, listen: u, destroy: f }
  );
}
function Vs(e, t, n, i = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: s ? $n() : null,
  };
}
function Ic(e) {
  const { history: t, location: n } = window,
    i = { value: mo(e, n) },
    s = { value: t.state };
  s.value ||
    r(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(o, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + o
          : Mc() + e + o;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (s.value = u);
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d);
    }
  }
  function l(o, u) {
    const c = ne({}, t.state, Vs(s.value.back, o, s.value.forward, !0), u, {
      position: s.value.position,
    });
    r(o, c, !0), (i.value = o);
  }
  function a(o, u) {
    const c = ne({}, s.value, t.state, { forward: o, scroll: $n() });
    r(c.current, c, !0);
    const f = ne({}, Vs(i.value, o, null), { position: c.position + 1 }, u);
    r(o, f, !1), (i.value = o);
  }
  return { location: i, state: s, push: a, replace: l };
}
function Ac(e) {
  e = bc(e);
  const t = Ic(e),
    n = Oc(e, t.state, t.location, t.replace);
  function i(r, l = !0) {
    l || n.pauseListeners(), history.go(r);
  }
  const s = ne(
    { location: "", base: e, go: i, createHref: Ec.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Rc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function go(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Je = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  vo = Symbol("");
var Fs;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Fs || (Fs = {}));
function At(e, t) {
  return ne(new Error(), { type: e, [vo]: !0 }, t);
}
function Ue(e, t) {
  return e instanceof Error && vo in e && (t == null || !!(e.type & t));
}
const Ds = "[^/]+?",
  Lc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  zc = /[.+*?^${}()[\]/\\]/g;
function Bc(e, t) {
  const n = ne({}, Lc, t),
    i = [];
  let s = n.start ? "^" : "";
  const r = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (s += "/"), (s += d.value.replace(zc, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: y, optional: P, regexp: w } = d;
        r.push({ name: g, repeatable: y, optional: P });
        const _ = w || Ds;
        if (_ !== Ds) {
          h += 10;
          try {
            new RegExp(`(${_})`);
          } catch (M) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${_}): ` + M.message
            );
          }
        }
        let b = y ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        f || (b = P && u.length < 2 ? `(?:/${b})` : "/" + b),
          P && (b += "?"),
          (s += b),
          (h += 20),
          P && (h += -8),
          y && (h += -20),
          _ === ".*" && (h += -50);
      }
      c.push(h);
    }
    i.push(c);
  }
  if (n.strict && n.end) {
    const u = i.length - 1;
    i[u][i[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const l = new RegExp(s, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(l),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "",
        g = r[d - 1];
      f[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function o(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const h of d)
        if (h.type === 0) c += h.value;
        else if (h.type === 1) {
          const { value: g, repeatable: y, optional: P } = h,
            w = g in u ? u[g] : "";
          if (De(w) && !y)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const _ = De(w) ? w.join("/") : w;
          if (!_)
            if (P)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          c += _;
        }
    }
    return c || "/";
  }
  return { re: l, score: i, keys: r, parse: a, stringify: o };
}
function Nc(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const i = t[n] - e[n];
    if (i) return i;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Vc(e, t) {
  let n = 0;
  const i = e.score,
    s = t.score;
  for (; n < i.length && n < s.length; ) {
    const r = Nc(i[n], s[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(s.length - i.length) === 1) {
    if ($s(i)) return 1;
    if ($s(s)) return -1;
  }
  return s.length - i.length;
}
function $s(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Fc = { type: 0, value: "" },
  Dc = /[a-zA-Z0-9_]/;
function $c(e) {
  if (!e) return [[]];
  if (e === "/") return [[Fc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
  }
  let n = 0,
    i = n;
  const s = [];
  let r;
  function l() {
    r && s.push(r), (r = []);
  }
  let a = 0,
    o,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? r.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (o === "*" || o === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: o === "*" || o === "+",
            optional: o === "*" || o === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += o;
  }
  for (; a < e.length; ) {
    if (((o = e[a++]), o === "\\" && n !== 2)) {
      (i = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        o === "/" ? (u && f(), l()) : o === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = i);
        break;
      case 1:
        o === "("
          ? (n = 2)
          : Dc.test(o)
          ? d()
          : (f(), (n = 0), o !== "*" && o !== "?" && o !== "+" && a--);
        break;
      case 2:
        o === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + o)
            : (n = 3)
          : (c += o);
        break;
      case 3:
        f(), (n = 0), o !== "*" && o !== "?" && o !== "+" && a--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), l(), s;
}
function Hc(e, t, n) {
  const i = Bc($c(e.path), n),
    s = ne(i, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Gc(e, t) {
  const n = [],
    i = new Map();
  t = js({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return i.get(c);
  }
  function r(c, f, d) {
    const h = !d,
      g = jc(c);
    g.aliasOf = d && d.record;
    const y = js(t, c),
      P = [g];
    if ("alias" in c) {
      const b = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const M of b)
        P.push(
          ne({}, g, {
            components: d ? d.record.components : g.components,
            path: M,
            aliasOf: d ? d.record : g,
          })
        );
    }
    let w, _;
    for (const b of P) {
      const { path: M } = b;
      if (f && M[0] !== "/") {
        const B = f.record.path,
          R = B[B.length - 1] === "/" ? "" : "/";
        b.path = f.record.path + (M && R + M);
      }
      if (
        ((w = Hc(b, f, y)),
        d
          ? d.alias.push(w)
          : ((_ = _ || w),
            _ !== w && _.alias.push(w),
            h && c.name && !Gs(w) && l(c.name)),
        g.children)
      ) {
        const B = g.children;
        for (let R = 0; R < B.length; R++) r(B[R], w, d && d.children[R]);
      }
      (d = d || w),
        ((w.record.components && Object.keys(w.record.components).length) ||
          w.record.name ||
          w.record.redirect) &&
          o(w);
    }
    return _
      ? () => {
          l(_);
        }
      : Wt;
  }
  function l(c) {
    if (go(c)) {
      const f = i.get(c);
      f &&
        (i.delete(c),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(l),
        f.alias.forEach(l));
    } else {
      const f = n.indexOf(c);
      f > -1 &&
        (n.splice(f, 1),
        c.record.name && i.delete(c.record.name),
        c.children.forEach(l),
        c.alias.forEach(l));
    }
  }
  function a() {
    return n;
  }
  function o(c) {
    let f = 0;
    for (
      ;
      f < n.length &&
      Vc(c, n[f]) >= 0 &&
      (c.record.path !== n[f].record.path || !wo(c, n[f]));

    )
      f++;
    n.splice(f, 0, c), c.record.name && !Gs(c) && i.set(c.record.name, c);
  }
  function u(c, f) {
    let d,
      h = {},
      g,
      y;
    if ("name" in c && c.name) {
      if (((d = i.get(c.name)), !d)) throw At(1, { location: c });
      (y = d.record.name),
        (h = ne(
          Hs(
            f.params,
            d.keys
              .filter((_) => !_.optional)
              .concat(d.parent ? d.parent.keys.filter((_) => _.optional) : [])
              .map((_) => _.name)
          ),
          c.params &&
            Hs(
              c.params,
              d.keys.map((_) => _.name)
            )
        )),
        (g = d.stringify(h));
    } else if (c.path != null)
      (g = c.path),
        (d = n.find((_) => _.re.test(g))),
        d && ((h = d.parse(g)), (y = d.record.name));
    else {
      if (((d = f.name ? i.get(f.name) : n.find((_) => _.re.test(f.path))), !d))
        throw At(1, { location: c, currentLocation: f });
      (y = d.record.name),
        (h = ne({}, f.params, c.params)),
        (g = d.stringify(h));
    }
    const P = [];
    let w = d;
    for (; w; ) P.unshift(w.record), (w = w.parent);
    return { name: y, path: g, params: h, matched: P, meta: Wc(P) };
  }
  return (
    e.forEach((c) => r(c)),
    {
      addRoute: r,
      resolve: u,
      removeRoute: l,
      getRoutes: a,
      getRecordMatcher: s,
    }
  );
}
function Hs(e, t) {
  const n = {};
  for (const i of t) i in e && (n[i] = e[i]);
  return n;
}
function jc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: kc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function kc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const i in e.components) t[i] = typeof n == "object" ? n[i] : n;
  return t;
}
function Gs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Wc(e) {
  return e.reduce((t, n) => ne(t, n.meta), {});
}
function js(e, t) {
  const n = {};
  for (const i in e) n[i] = i in t ? t[i] : e[i];
  return n;
}
function wo(e, t) {
  return t.children.some((n) => n === e || wo(e, n));
}
function Uc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const i = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < i.length; ++s) {
    const r = i[s].replace(co, " "),
      l = r.indexOf("="),
      a = Qt(l < 0 ? r : r.slice(0, l)),
      o = l < 0 ? null : Qt(r.slice(l + 1));
    if (a in t) {
      let u = t[a];
      De(u) || (u = t[a] = [u]), u.push(o);
    } else t[a] = o;
  }
  return t;
}
function ks(e) {
  let t = "";
  for (let n in e) {
    const i = e[n];
    if (((n = dc(n)), i == null)) {
      i !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (De(i) ? i.map((r) => r && mi(r)) : [i && mi(i)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function qc(e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    i !== void 0 &&
      (t[n] = De(i)
        ? i.map((s) => (s == null ? null : "" + s))
        : i == null
        ? i
        : "" + i);
  }
  return t;
}
const Kc = Symbol(""),
  Ws = Symbol(""),
  Ki = Symbol(""),
  Yi = Symbol(""),
  vi = Symbol("");
function Vt() {
  let e = [];
  function t(i) {
    return (
      e.push(i),
      () => {
        const s = e.indexOf(i);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function nt(e, t, n, i, s, r = (l) => l()) {
  const l = i && (i.enterCallbacks[s] = i.enterCallbacks[s] || []);
  return () =>
    new Promise((a, o) => {
      const u = (d) => {
          d === !1
            ? o(At(4, { from: n, to: t }))
            : d instanceof Error
            ? o(d)
            : Rc(d)
            ? o(At(2, { from: t, to: d }))
            : (l &&
                i.enterCallbacks[s] === l &&
                typeof d == "function" &&
                l.push(d),
              a());
        },
        c = r(() => e.call(i && i.instances[s], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => o(d));
    });
}
function Qn(e, t, n, i, s = (r) => r()) {
  const r = [];
  for (const l of e)
    for (const a in l.components) {
      let o = l.components[a];
      if (!(t !== "beforeRouteEnter" && !l.instances[a]))
        if (Yc(o)) {
          const c = (o.__vccOpts || o)[t];
          c && r.push(nt(c, n, i, l, a, s));
        } else {
          let u = o();
          r.push(() =>
            u.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${a}" at "${l.path}"`)
                );
              const f = tc(c) ? c.default : c;
              l.components[a] = f;
              const h = (f.__vccOpts || f)[t];
              return h && nt(h, n, i, l, a, s)();
            })
          );
        }
    }
  return r;
}
function Yc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Us(e) {
  const t = ke(Ki),
    n = ke(Yi),
    i = Ae(() => t.resolve(Et(e.to))),
    s = Ae(() => {
      const { matched: o } = i.value,
        { length: u } = o,
        c = o[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(It.bind(null, c));
      if (d > -1) return d;
      const h = qs(o[u - 2]);
      return u > 1 && qs(c) === h && f[f.length - 1].path !== h
        ? f.findIndex(It.bind(null, o[u - 2]))
        : d;
    }),
    r = Ae(() => s.value > -1 && Zc(n.params, i.value.params)),
    l = Ae(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        ho(n.params, i.value.params)
    );
  function a(o = {}) {
    return Jc(o)
      ? t[Et(e.replace) ? "replace" : "push"](Et(e.to)).catch(Wt)
      : Promise.resolve();
  }
  return {
    route: i,
    href: Ae(() => i.value.href),
    isActive: r,
    isExactActive: l,
    navigate: a,
  };
}
const Xc = zn({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Us,
    setup(e, { slots: t }) {
      const n = In(Us(e)),
        { options: i } = ke(Ki),
        s = Ae(() => ({
          [Ks(e.activeClass, i.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Ks(
            e.exactActiveClass,
            i.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Ce(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              r
            );
      };
    },
  }),
  Qc = Xc;
function Jc(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Zc(e, t) {
  for (const n in t) {
    const i = t[n],
      s = e[n];
    if (typeof i == "string") {
      if (i !== s) return !1;
    } else if (!De(s) || s.length !== i.length || i.some((r, l) => r !== s[l]))
      return !1;
  }
  return !0;
}
function qs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Ks = (e, t, n) => e ?? t ?? n,
  eu = zn({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const i = ke(vi),
        s = Ae(() => e.route || i.value),
        r = ke(Ws, 0),
        l = Ae(() => {
          let u = Et(r);
          const { matched: c } = s.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        a = Ae(() => s.value.matched[l.value]);
      Tt(
        Ws,
        Ae(() => l.value + 1)
      ),
        Tt(Kc, a),
        Tt(vi, s);
      const o = pe();
      return (
        $t(
          () => [o.value, a.value, e.name],
          ([u, c, f], [d, h, g]) => {
            c &&
              ((c.instances[f] = u),
              h &&
                h !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
              u &&
                c &&
                (!h || !It(c, h) || !d) &&
                (c.enterCallbacks[f] || []).forEach((y) => y(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = s.value,
            c = e.name,
            f = a.value,
            d = f && f.components[c];
          if (!d) return Ys(n.default, { Component: d, route: u });
          const h = f.props[c],
            g = h
              ? h === !0
                ? u.params
                : typeof h == "function"
                ? h(u)
                : h
              : null,
            P = Ce(
              d,
              ne({}, g, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (f.instances[c] = null);
                },
                ref: o,
              })
            );
          return Ys(n.default, { Component: P, route: u }) || P;
        }
      );
    },
  });
function Ys(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const tu = eu;
function nu(e) {
  const t = Gc(e.routes, e),
    n = e.parseQuery || Uc,
    i = e.stringifyQuery || ks,
    s = e.history,
    r = Vt(),
    l = Vt(),
    a = Vt(),
    o = pl(Je);
  let u = Je;
  wt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Yn.bind(null, (x) => "" + x),
    f = Yn.bind(null, hc),
    d = Yn.bind(null, Qt);
  function h(x, V) {
    let L, D;
    return (
      go(x) ? ((L = t.getRecordMatcher(x)), (D = V)) : (D = x), t.addRoute(D, L)
    );
  }
  function g(x) {
    const V = t.getRecordMatcher(x);
    V && t.removeRoute(V);
  }
  function y() {
    return t.getRoutes().map((x) => x.record);
  }
  function P(x) {
    return !!t.getRecordMatcher(x);
  }
  function w(x, V) {
    if (((V = ne({}, V || o.value)), typeof x == "string")) {
      const m = Xn(n, x, V.path),
        v = t.resolve({ path: m.path }, V),
        E = s.createHref(m.fullPath);
      return ne(m, v, {
        params: d(v.params),
        hash: Qt(m.hash),
        redirectedFrom: void 0,
        href: E,
      });
    }
    let L;
    if (x.path != null) L = ne({}, x, { path: Xn(n, x.path, V.path).path });
    else {
      const m = ne({}, x.params);
      for (const v in m) m[v] == null && delete m[v];
      (L = ne({}, x, { params: f(m) })), (V.params = f(V.params));
    }
    const D = t.resolve(L, V),
      te = x.hash || "";
    D.params = c(d(D.params));
    const oe = vc(i, ne({}, x, { hash: fc(te), path: D.path })),
      p = s.createHref(oe);
    return ne(
      { fullPath: oe, hash: te, query: i === ks ? qc(x.query) : x.query || {} },
      D,
      { redirectedFrom: void 0, href: p }
    );
  }
  function _(x) {
    return typeof x == "string" ? Xn(n, x, o.value.path) : ne({}, x);
  }
  function b(x, V) {
    if (u !== x) return At(8, { from: V, to: x });
  }
  function M(x) {
    return Z(x);
  }
  function B(x) {
    return M(ne(_(x), { replace: !0 }));
  }
  function R(x) {
    const V = x.matched[x.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: L } = V;
      let D = typeof L == "function" ? L(x) : L;
      return (
        typeof D == "string" &&
          ((D = D.includes("?") || D.includes("#") ? (D = _(D)) : { path: D }),
          (D.params = {})),
        ne(
          {
            query: x.query,
            hash: x.hash,
            params: D.path != null ? {} : x.params,
          },
          D
        )
      );
    }
  }
  function Z(x, V) {
    const L = (u = w(x)),
      D = o.value,
      te = x.state,
      oe = x.force,
      p = x.replace === !0,
      m = R(L);
    if (m)
      return Z(
        ne(_(m), {
          state: typeof m == "object" ? ne({}, te, m.state) : te,
          force: oe,
          replace: p,
        }),
        V || L
      );
    const v = L;
    v.redirectedFrom = V;
    let E;
    return (
      !oe &&
        wc(i, D, L) &&
        ((E = At(16, { to: v, from: D })), Ie(D, D, !0, !1)),
      (E ? Promise.resolve(E) : I(v, D))
        .catch((S) => (Ue(S) ? (Ue(S, 2) ? S : Le(S)) : X(S, v, D)))
        .then((S) => {
          if (S) {
            if (Ue(S, 2))
              return Z(
                ne({ replace: p }, _(S.to), {
                  state: typeof S.to == "object" ? ne({}, te, S.to.state) : te,
                  force: oe,
                }),
                V || v
              );
          } else S = q(v, D, !0, p, te);
          return $(v, D, S), S;
        })
    );
  }
  function j(x, V) {
    const L = b(x, V);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function N(x) {
    const V = gt.values().next().value;
    return V && typeof V.runWithContext == "function"
      ? V.runWithContext(x)
      : x();
  }
  function I(x, V) {
    let L;
    const [D, te, oe] = iu(x, V);
    L = Qn(D.reverse(), "beforeRouteLeave", x, V);
    for (const m of D)
      m.leaveGuards.forEach((v) => {
        L.push(nt(v, x, V));
      });
    const p = j.bind(null, x, V);
    return (
      L.push(p),
      ve(L)
        .then(() => {
          L = [];
          for (const m of r.list()) L.push(nt(m, x, V));
          return L.push(p), ve(L);
        })
        .then(() => {
          L = Qn(te, "beforeRouteUpdate", x, V);
          for (const m of te)
            m.updateGuards.forEach((v) => {
              L.push(nt(v, x, V));
            });
          return L.push(p), ve(L);
        })
        .then(() => {
          L = [];
          for (const m of oe)
            if (m.beforeEnter)
              if (De(m.beforeEnter))
                for (const v of m.beforeEnter) L.push(nt(v, x, V));
              else L.push(nt(m.beforeEnter, x, V));
          return L.push(p), ve(L);
        })
        .then(
          () => (
            x.matched.forEach((m) => (m.enterCallbacks = {})),
            (L = Qn(oe, "beforeRouteEnter", x, V, N)),
            L.push(p),
            ve(L)
          )
        )
        .then(() => {
          L = [];
          for (const m of l.list()) L.push(nt(m, x, V));
          return L.push(p), ve(L);
        })
        .catch((m) => (Ue(m, 8) ? m : Promise.reject(m)))
    );
  }
  function $(x, V, L) {
    a.list().forEach((D) => N(() => D(x, V, L)));
  }
  function q(x, V, L, D, te) {
    const oe = b(x, V);
    if (oe) return oe;
    const p = V === Je,
      m = wt ? history.state : {};
    L &&
      (D || p
        ? s.replace(x.fullPath, ne({ scroll: p && m && m.scroll }, te))
        : s.push(x.fullPath, te)),
      (o.value = x),
      Ie(x, V, L, p),
      Le();
  }
  let H;
  function re() {
    H ||
      (H = s.listen((x, V, L) => {
        if (!en.listening) return;
        const D = w(x),
          te = R(D);
        if (te) {
          Z(ne(te, { replace: !0 }), D).catch(Wt);
          return;
        }
        u = D;
        const oe = o.value;
        wt && Pc(Ns(oe.fullPath, L.delta), $n()),
          I(D, oe)
            .catch((p) =>
              Ue(p, 12)
                ? p
                : Ue(p, 2)
                ? (Z(p.to, D)
                    .then((m) => {
                      Ue(m, 20) &&
                        !L.delta &&
                        L.type === Jt.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Wt),
                  Promise.reject())
                : (L.delta && s.go(-L.delta, !1), X(p, D, oe))
            )
            .then((p) => {
              (p = p || q(D, oe, !1)),
                p &&
                  (L.delta && !Ue(p, 8)
                    ? s.go(-L.delta, !1)
                    : L.type === Jt.pop && Ue(p, 20) && s.go(-1, !1)),
                $(D, oe, p);
            })
            .catch(Wt);
      }));
  }
  let ue = Vt(),
    se = Vt(),
    ee;
  function X(x, V, L) {
    Le(x);
    const D = se.list();
    return (
      D.length ? D.forEach((te) => te(x, V, L)) : console.error(x),
      Promise.reject(x)
    );
  }
  function Oe() {
    return ee && o.value !== Je
      ? Promise.resolve()
      : new Promise((x, V) => {
          ue.add([x, V]);
        });
  }
  function Le(x) {
    return (
      ee ||
        ((ee = !x),
        re(),
        ue.list().forEach(([V, L]) => (x ? L(x) : V())),
        ue.reset()),
      x
    );
  }
  function Ie(x, V, L, D) {
    const { scrollBehavior: te } = e;
    if (!wt || !te) return Promise.resolve();
    const oe =
      (!L && Cc(Ns(x.fullPath, 0))) ||
      ((D || !L) && history.state && history.state.scroll) ||
      null;
    return Ni()
      .then(() => te(x, V, oe))
      .then((p) => p && Tc(p))
      .catch((p) => X(p, x, V));
  }
  const ge = (x) => s.go(x);
  let mt;
  const gt = new Set(),
    en = {
      currentRoute: o,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      hasRoute: P,
      getRoutes: y,
      resolve: w,
      options: e,
      push: M,
      replace: B,
      go: ge,
      back: () => ge(-1),
      forward: () => ge(1),
      beforeEach: r.add,
      beforeResolve: l.add,
      afterEach: a.add,
      onError: se.add,
      isReady: Oe,
      install(x) {
        const V = this;
        x.component("RouterLink", Qc),
          x.component("RouterView", tu),
          (x.config.globalProperties.$router = V),
          Object.defineProperty(x.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Et(o),
          }),
          wt &&
            !mt &&
            o.value === Je &&
            ((mt = !0), M(s.location).catch((te) => {}));
        const L = {};
        for (const te in Je)
          Object.defineProperty(L, te, {
            get: () => o.value[te],
            enumerable: !0,
          });
        x.provide(Ki, V), x.provide(Yi, Tr(L)), x.provide(vi, o);
        const D = x.unmount;
        gt.add(x),
          (x.unmount = function () {
            gt.delete(x),
              gt.size < 1 &&
                ((u = Je),
                H && H(),
                (H = null),
                (o.value = Je),
                (mt = !1),
                (ee = !1)),
              D();
          });
      },
    };
  function ve(x) {
    return x.reduce((V, L) => V.then(() => N(L)), Promise.resolve());
  }
  return en;
}
function iu(e, t) {
  const n = [],
    i = [],
    s = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < r; l++) {
    const a = t.matched[l];
    a && (e.matched.find((u) => It(u, a)) ? i.push(a) : n.push(a));
    const o = e.matched[l];
    o && (t.matched.find((u) => It(u, o)) || s.push(o));
  }
  return [n, i, s];
}
function Xf() {
  return ke(Yi);
}
const wi = nu({ history: Ac(), routes: [] });
if (typeof window < "u") {
  let e = function () {
    var t = document.body,
      n = document.getElementById("__svg__icons__dom__");
    n ||
      ((n = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
      (n.style.position = "absolute"),
      (n.style.width = "0"),
      (n.style.height = "0"),
      (n.id = "__svg__icons__dom__"),
      n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
      n.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")),
      (n.innerHTML =
        '<symbol viewBox="0 0 64 64"  id="icon-facebook_2504903"><g fill-rule="evenodd"><path d="M32 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-6a5 5 0 0 0-10 0z" fill="#3764b9" /><path d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" fill="#507dd2" /><path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#1e4ba0" /><path d="M52 18a2 2 0 0 1-2 2h-6a2 2 0 0 0-2 2v8h7.56a2 2 0 0 1 1.961 2.392l-1.2 6A2 2 0 0 1 48.36 40H42v24H32V40h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6v-8a12 12 0 0 1 12-12h6a2 2 0 0 1 2 2z" fill="#fff" /></g></symbol><symbol fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 134 134"  id="icon-headset_8213336"><radialGradient id="icon-headset_8213336_a" cx="0" cy="0" gradientTransform="rotate(44.541 -10.282 40.463) scale(125.556)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#729eff" /><stop offset="1" stop-color="#5400f4" /></radialGradient><radialGradient id="icon-headset_8213336_b" cx="0" cy="0" gradientTransform="matrix(65.108 85.295 -101.013 54.977 25.531 23.604)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#98b8ff" /><stop offset="1" stop-color="#5c06ff" /></radialGradient><circle cx="66.667" cy="66.667" fill="url(#icon-headset_8213336_a)" r="54.167" /><path d="M20.692 38.028c1.253 6.871 4.602 19.582 12.576 31.818 4.804-.351 9.499-.889 14.001-1.632 10.105-1.667 20.871-7.028 31.634-10.275 12.137-3.662 24.235-4.721 35.551 2.743a57.438 57.438 0 0 1 6.369 4.898 54.396 54.396 0 0 1-.859 10.797c-3.049-3.263-6.329-6.253-10.098-8.739-9.079-5.988-18.818-4.659-28.556-1.721-11.11 3.352-22.253 8.799-32.684 10.519-3.081.509-6.248.926-9.477 1.256 4.905 5.696 11.026 10.953 18.654 15.055 12.585 6.768 29.243 10.326 51.216 7.675a54.558 54.558 0 0 1-9.255 9.114c-19.124.794-34.134-3.118-45.908-9.449-10.648-5.726-18.667-13.47-24.687-21.65-5.059.244-10.202.299-15.343.184a53.966 53.966 0 0 1-1.208-8.36c3.757.109 7.518.122 11.247.034-4.122-7.164-6.904-14.266-8.751-20.285a53.869 53.869 0 0 1 5.578-11.982zm70.293-19.767a54.141 54.141 0 0 1 8.001 4.946c-12.661 8.118-28.461 10.365-44.082 10.106-9.312-.154-16.431-4.004-21.827-9.13a54.27 54.27 0 0 1 7.149-4.793c3.831 3.188 8.673 5.489 14.816 5.591 12.536.208 25.305-1.159 35.943-6.72z" fill="url(#icon-headset_8213336_b)" /><g fill="#ced0fe"><path d="M46.309 66.667V56.483A20.353 20.353 0 0 1 66.662 36.13h.005c11.243 0 20.357 9.115 20.357 20.358v10.179a2.546 2.546 0 0 0 5.09 0V56.488c0-14.054-11.393-25.447-25.447-25.447h-.005A25.442 25.442 0 0 0 41.22 56.483v10.184a2.545 2.545 0 0 0 5.089 0zM87.024 87.024v5.902a4.277 4.277 0 0 1-4.277 4.277h-16.08a2.546 2.546 0 0 0 0 5.089h16.08c5.173 0 9.367-4.193 9.367-9.366v-5.902a2.546 2.546 0 0 0-5.09 0z" /><path d="M97.203 71.756a7.634 7.634 0 0 0-7.634-7.634H84.48a2.544 2.544 0 0 0-2.545 2.545v15.268c.745 7.271 7.33 10.822 13.766 3.639 1.451-1.618 1.502-5.166 1.502-8.729z" /></g><path d="M81.935 81.935a2.545 2.545 0 0 0 2.545 2.545h5.089a7.634 7.634 0 0 0 7.634-7.635v5.09a7.634 7.634 0 0 1-7.634 7.634H84.48a2.544 2.544 0 0 1-2.545-2.545z" fill="#9ca0fd" /><path d="M51.399 66.667a2.545 2.545 0 0 0-2.545-2.545h-5.09a7.634 7.634 0 0 0-7.634 7.634v5.089c0 1.768.603 3.803.603 5.358 0 4.216-.151 6.027 10.782 6.027 3.77 0 3.884-6.295 3.884-6.295z" fill="#ced0fe" /><path d="M51.399 81.935v5.089a2.545 2.545 0 0 1-2.545 2.545h-5.09a7.634 7.634 0 0 1-7.634-7.634v-5.09a7.634 7.634 0 0 0 7.634 7.635h5.09a2.546 2.546 0 0 0 2.545-2.545z" fill="#9ca0fd" /></symbol><symbol viewBox="0 0 64 64"  id="icon-instagram_2504918"><g fill-rule="evenodd"><path d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16" fill="#ff3a55" /><path d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" fill="#ff796c" /><path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#e00047" /></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5" /><path d="M32 24a8 8 0 1 1-8 8 8.004 8.004 0 0 1 8-8zm0-4a12 12 0 1 1-12 12 12.006 12.006 0 0 1 12-12z" fill="#fff" fill-rule="evenodd" /><path d="M52 22a10 10 0 0 0-10-10H22a10 10 0 0 0-10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0A14 14 0 0 0 42 8H22A14 14 0 0 0 8 22v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fill-rule="evenodd" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-laba"><path d="M812.344 375.616V107.319c0-11.925-10.434-22.358-22.359-22.358s-22.358 10.433-22.358 22.358v693.1c0 11.925 10.434 22.358 22.358 22.358s22.359-10.433 22.359-22.358V533.613c43.225 0 78.998-35.773 78.998-78.999s-35.773-78.998-78.998-78.998zM326.428 308.54h-55.15v286.184h55.15s22.358-4.472 59.621-2.981c92.414 1.49 268.297 32.792 369.654 228.052V83.47C612.611 356.24 326.428 308.541 326.428 308.541z" fill="#030000" /><path d="M389.03 608.14c-35.772 0-59.621 2.98-59.621 2.98h-55.15v-2.98c-2.981 2.98-5.962 4.471-5.962 4.471h5.962s59.622 256.373 98.376 260.845c38.754 5.962 55.15-19.377 43.225-53.66-8.943-25.339-22.358-152.035-26.83-211.656zM120.735 451.633c0 78.999 64.093 143.092 143.091 143.092h1.49l-1.49-284.693c-78.998-1.49-143.091 62.603-143.091 141.601z" fill="#030000" /></symbol><symbol viewBox="0 0 64 64"  id="icon-telegram_2504941"><g fill-rule="evenodd"><path d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16" fill="#199bdf" /><path d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" fill="#32b4ff" /><path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#0082be" /><path d="M45.08 17.032a3 3 0 0 1 4.11 3.229L44.754 49.1a3 3 0 0 1-4.745 1.959L26.927 41.42a2 2 0 0 1-.186-3.064l12.207-11.529a.5.5 0 0 0-.617-.782L22.193 36.57a6 6 0 0 1-4.733.795l-7.572-1.893a2 2 0 0 1-.279-3.789L45.08 17.032z" fill="#fff" /></g></symbol><symbol viewBox="0 0 64 64"  id="icon-whatsapp_2504957"><g fill-rule="evenodd"><path d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16" fill="#00d264" /><path d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" fill="#00eb78" /><path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#00b950" /><g fill="#fff"><path d="M21.673 47.093a2.003 2.003 0 0 1 1.593.218 18.981 18.981 0 1 0-6.581-6.574 1.994 1.994 0 0 1 .216 1.588C16.344 44.296 15 49 15 49l6.673-1.907zm-8.454-4.359a23.002 23.002 0 1 1 8.047 8.047s-6.377 1.822-9.535 2.725a1.001 1.001 0 0 1-1.237-1.237l2.725-9.535z" /><path d="M21.981 24.786a18.703 18.703 0 0 0 17.224 17.352h.002a4.964 4.964 0 0 0 3.894-1.44l.698-.698a1.76 1.76 0 0 0 .515-1.243v-1.482a1.001 1.001 0 0 0-.553-.895l-4.459-2.229a1 1 0 0 0-1.155.187l-1.94 1.94a1.001 1.001 0 0 1-.903.274l-.009-.002a10 10 0 0 1-7.845-7.845l-.002-.009a1.001 1.001 0 0 1 .274-.903l1.94-1.94a1 1 0 0 0 .187-1.155l-2.229-4.459a1.001 1.001 0 0 0-.895-.553h-1.26a2.138 2.138 0 0 0-1.587.706l-.664.738a4.86 4.86 0 0 0-1.238 3.589l.005.067z" /></g></g></symbol><symbol viewBox="0 0 64 64"  id="icon-youtube_2504965"><g fill-rule="evenodd"><path d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16" fill="red" /><path d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" fill="#ff5a51" /><path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#d5002c" /><path d="M25.048 17.876A2 2 0 0 0 22 19.579v24.842a2 2 0 0 0 3.048 1.703l20.184-12.421a2 2 0 0 0 0-3.406L25.048 17.876z" fill="#fff" /></g></symbol>'),
      t.insertBefore(n, t.lastChild);
  };
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", e)
    : e();
}
function Xs(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Xi(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Xs(t[n]) &&
          Xs(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Xi(e[n], t[n]);
    });
}
const yo = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function zt() {
  const e = typeof document < "u" ? document : {};
  return Xi(e, yo), e;
}
const su = {
  document: yo,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Me() {
  const e = typeof window < "u" ? window : {};
  return Xi(e, su), e;
}
function ru(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function ou(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function yi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function xn() {
  return Date.now();
}
function lu(e) {
  const t = Me();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function au(e, t) {
  t === void 0 && (t = "x");
  const n = Me();
  let i, s, r;
  const l = lu(e);
  return (
    n.WebKitCSSMatrix
      ? ((s = l.transform || l.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = r.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (s = r.m41)
        : i.length === 16
        ? (s = parseFloat(i[12]))
        : (s = parseFloat(i[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (s = r.m42)
        : i.length === 16
        ? (s = parseFloat(i[13]))
        : (s = parseFloat(i[5]))),
    s || 0
  );
}
function an(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function cu(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Pe() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !cu(i)) {
      const s = Object.keys(Object(i)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, l = s.length; r < l; r += 1) {
        const a = s[r],
          o = Object.getOwnPropertyDescriptor(i, a);
        o !== void 0 &&
          o.enumerable &&
          (an(e[a]) && an(i[a])
            ? i[a].__swiper__
              ? (e[a] = i[a])
              : Pe(e[a], i[a])
            : !an(e[a]) && an(i[a])
            ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : Pe(e[a], i[a]))
            : (e[a] = i[a]));
      }
    }
  }
  return e;
}
function cn(e, t, n) {
  e.style.setProperty(t, n);
}
function So(e) {
  let { swiper: t, targetPosition: n, side: i } = e;
  const s = Me(),
    r = -t.translate;
  let l = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > r ? "next" : "prev",
    c = (d, h) => (u === "next" && d >= h) || (u === "prev" && d <= h),
    f = () => {
      (a = new Date().getTime()), l === null && (l = a);
      const d = Math.max(Math.min((a - l) / o, 1), 0),
        h = 0.5 - Math.cos(d * Math.PI) / 2;
      let g = r + h * (n - r);
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [i]: g }), c(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: g });
          }),
          s.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = s.requestAnimationFrame(f);
    };
  f();
}
function Ke(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function En(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Si(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : ru(t))), n;
}
function uu(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
  }
  return n;
}
function fu(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
  }
  return n;
}
function it(e, t) {
  return Me().getComputedStyle(e, null).getPropertyValue(t);
}
function Qs(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function du(e, t) {
  const n = [];
  let i = e.parentElement;
  for (; i; ) t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement);
  return n;
}
function Js(e, t, n) {
  const i = Me();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          i
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          i
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
function Qf(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Jn;
function pu() {
  const e = Me(),
    t = zt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function bo() {
  return Jn || (Jn = pu()), Jn;
}
let Zn;
function hu(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = bo(),
    i = Me(),
    s = i.navigator.platform,
    r = t || i.navigator.userAgent,
    l = { ios: !1, android: !1 },
    a = i.screen.width,
    o = i.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = s === "Win32";
  let g = s === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      g &&
      n.touch &&
      y.indexOf(`${a}x${o}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !h && ((l.os = "android"), (l.android = !0)),
    (c || d || f) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function xo(e) {
  return e === void 0 && (e = {}), Zn || (Zn = hu(e)), Zn;
}
let ei;
function mu() {
  const e = Me(),
    t = xo();
  let n = !1;
  function i() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (i()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, u] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = o < 16 || (o === 16 && u < 2);
    }
  }
  const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    r = i(),
    l = r || (s && t.ios);
  return {
    isSafari: n || r,
    needPerspectiveFix: n,
    need3dFix: l,
    isWebView: s,
  };
}
function gu() {
  return ei || (ei = mu()), ei;
}
function vu(e) {
  let { swiper: t, on: n, emit: i } = e;
  const s = Me();
  let r = null,
    l = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((f) => {
          l = s.requestAnimationFrame(() => {
            const { width: d, height: h } = t;
            let g = d,
              y = h;
            f.forEach((P) => {
              let { contentBoxSize: w, contentRect: _, target: b } = P;
              (b && b !== t.el) ||
                ((g = _ ? _.width : (w[0] || w).inlineSize),
                (y = _ ? _.height : (w[0] || w).blockSize));
            }),
              (g !== d || y !== h) && a();
          });
        })),
        r.observe(t.el));
    },
    u = () => {
      l && s.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      o();
      return;
    }
    s.addEventListener("resize", a), s.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        s.removeEventListener("resize", a),
        s.removeEventListener("orientationchange", c);
    });
}
function wu(e) {
  let { swiper: t, extendParams: n, on: i, emit: s } = e;
  const r = [],
    l = Me(),
    a = function (c, f) {
      f === void 0 && (f = {});
      const d = l.MutationObserver || l.WebkitMutationObserver,
        h = new d((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            s("observerUpdate", g[0]);
            return;
          }
          const y = function () {
            s("observerUpdate", g[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      h.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        r.push(h);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = du(t.hostEl);
          for (let f = 0; f < c.length; f += 1) a(c[f]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", o),
    i("destroy", u);
}
var yu = {
  on(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []),
          i.eventsListeners[r][s](t);
      }),
      i
    );
  },
  once(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++)
        l[a] = arguments[a];
      t.apply(i, l);
    }
    return (s.__emitterProxy = t), i.on(e, s, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((i) => {
          typeof t > "u"
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((s, r) => {
                (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[i].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, i;
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
      r[l] = arguments[l];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
        : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
      n.unshift(i),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(i, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((u) => {
              u.apply(i, n);
            });
      }),
      e
    );
  },
};
function Su() {
  const e = this;
  let t, n;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = i.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = i.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(it(i, "padding-left") || 0, 10) -
        parseInt(it(i, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(it(i, "padding-top") || 0, 10) -
        parseInt(it(i, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function bu() {
  const e = this;
  function t(I, $) {
    return parseFloat(I.getPropertyValue(e.getDirectionLabel($)) || 0);
  }
  const n = e.params,
    { wrapperEl: i, slidesEl: s, size: r, rtlTranslate: l, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    c = Ke(s, `.${e.params.slideClass}, swiper-slide`),
    f = o ? e.virtual.slides.length : c.length;
  let d = [];
  const h = [],
    g = [];
  let y = n.slidesOffsetBefore;
  typeof y == "function" && (y = n.slidesOffsetBefore.call(e));
  let P = n.slidesOffsetAfter;
  typeof P == "function" && (P = n.slidesOffsetAfter.call(e));
  const w = e.snapGrid.length,
    _ = e.slidesGrid.length;
  let b = n.spaceBetween,
    M = -y,
    B = 0,
    R = 0;
  if (typeof r > "u") return;
  typeof b == "string" && b.indexOf("%") >= 0
    ? (b = (parseFloat(b.replace("%", "")) / 100) * r)
    : typeof b == "string" && (b = parseFloat(b)),
    (e.virtualSize = -b),
    c.forEach((I) => {
      l ? (I.style.marginLeft = "") : (I.style.marginRight = ""),
        (I.style.marginBottom = ""),
        (I.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (cn(i, "--swiper-centered-offset-before", ""),
      cn(i, "--swiper-centered-offset-after", ""));
  const Z = n.grid && n.grid.rows > 1 && e.grid;
  Z ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let j;
  const N =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (I) => typeof n.breakpoints[I].slidesPerView < "u"
    ).length > 0;
  for (let I = 0; I < f; I += 1) {
    j = 0;
    let $;
    if (
      (c[I] && ($ = c[I]),
      Z && e.grid.updateSlide(I, $, c),
      !(c[I] && it($, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        N && (c[I].style[e.getDirectionLabel("width")] = "");
        const q = getComputedStyle($),
          H = $.style.transform,
          re = $.style.webkitTransform;
        if (
          (H && ($.style.transform = "none"),
          re && ($.style.webkitTransform = "none"),
          n.roundLengths)
        )
          j = e.isHorizontal() ? Js($, "width", !0) : Js($, "height", !0);
        else {
          const ue = t(q, "width"),
            se = t(q, "padding-left"),
            ee = t(q, "padding-right"),
            X = t(q, "margin-left"),
            Oe = t(q, "margin-right"),
            Le = q.getPropertyValue("box-sizing");
          if (Le && Le === "border-box") j = ue + X + Oe;
          else {
            const { clientWidth: Ie, offsetWidth: ge } = $;
            j = ue + se + ee + X + Oe + (ge - Ie);
          }
        }
        H && ($.style.transform = H),
          re && ($.style.webkitTransform = re),
          n.roundLengths && (j = Math.floor(j));
      } else
        (j = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (j = Math.floor(j)),
          c[I] && (c[I].style[e.getDirectionLabel("width")] = `${j}px`);
      c[I] && (c[I].swiperSlideSize = j),
        g.push(j),
        n.centeredSlides
          ? ((M = M + j / 2 + B / 2 + b),
            B === 0 && I !== 0 && (M = M - r / 2 - b),
            I === 0 && (M = M - r / 2 - b),
            Math.abs(M) < 1 / 1e3 && (M = 0),
            n.roundLengths && (M = Math.floor(M)),
            R % n.slidesPerGroup === 0 && d.push(M),
            h.push(M))
          : (n.roundLengths && (M = Math.floor(M)),
            (R - Math.min(e.params.slidesPerGroupSkip, R)) %
              e.params.slidesPerGroup ===
              0 && d.push(M),
            h.push(M),
            (M = M + j + b)),
        (e.virtualSize += j + b),
        (B = j),
        (R += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + P),
    l &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + b}px`),
    n.setWrapperSize &&
      (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
    Z && e.grid.updateWrapperSize(j, d),
    !n.centeredSlides)
  ) {
    const I = [];
    for (let $ = 0; $ < d.length; $ += 1) {
      let q = d[$];
      n.roundLengths && (q = Math.floor(q)),
        d[$] <= e.virtualSize - r && I.push(q);
    }
    (d = I),
      Math.floor(e.virtualSize - r) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(e.virtualSize - r);
  }
  if (o && n.loop) {
    const I = g[0] + b;
    if (n.slidesPerGroup > 1) {
      const $ = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        q = I * n.slidesPerGroup;
      for (let H = 0; H < $; H += 1) d.push(d[d.length - 1] + q);
    }
    for (let $ = 0; $ < e.virtual.slidesBefore + e.virtual.slidesAfter; $ += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + I),
        h.push(h[h.length - 1] + I),
        (e.virtualSize += I);
  }
  if ((d.length === 0 && (d = [0]), b !== 0)) {
    const I =
      e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter(($, q) =>
      !n.cssMode || n.loop ? !0 : q !== c.length - 1
    ).forEach(($) => {
      $.style[I] = `${b}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let I = 0;
    g.forEach((q) => {
      I += q + (b || 0);
    }),
      (I -= b);
    const $ = I - r;
    d = d.map((q) => (q <= 0 ? -y : q > $ ? $ + P : q));
  }
  if (n.centerInsufficientSlides) {
    let I = 0;
    if (
      (g.forEach(($) => {
        I += $ + (b || 0);
      }),
      (I -= b),
      I < r)
    ) {
      const $ = (r - I) / 2;
      d.forEach((q, H) => {
        d[H] = q - $;
      }),
        h.forEach((q, H) => {
          h[H] = q + $;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: d,
      slidesGrid: h,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    cn(i, "--swiper-centered-offset-before", `${-d[0]}px`),
      cn(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`
      );
    const I = -e.snapGrid[0],
      $ = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((q) => q + I)),
      (e.slidesGrid = e.slidesGrid.map((q) => q + $));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    d.length !== w &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== _ && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const I = `${n.containerModifierClass}backface-hidden`,
      $ = e.el.classList.contains(I);
    f <= n.maxBackfaceHiddenSlides
      ? $ || e.el.classList.add(I)
      : $ && e.el.classList.remove(I);
  }
}
function xu(e) {
  const t = this,
    n = [],
    i = t.virtual && t.params.virtual.enabled;
  let s = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (a) => (i ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const a = t.activeIndex + r;
        if (a > t.slides.length && !i) break;
        n.push(l(a));
      }
  else n.push(l(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const a = n[r].offsetHeight;
      s = a > s ? a : s;
    }
  (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
}
function Eu() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset =
      (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function _u(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: i, rtlTranslate: s, snapGrid: r } = t;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  s && (l = e),
    i.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < i.length; o += 1) {
    const u = i[o];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
    const f =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      d =
        (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      h = -(l - c),
      g = h + t.slidesSizesGrid[o],
      y = h >= 0 && h <= t.size - t.slidesSizesGrid[o];
    ((h >= 0 && h < t.size - 1) ||
      (g > 1 && g <= t.size) ||
      (h <= 0 && g >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(o),
      i[o].classList.add(n.slideVisibleClass)),
      y && i[o].classList.add(n.slideFullyVisibleClass),
      (u.progress = s ? -f : f),
      (u.originalProgress = s ? -d : d);
  }
}
function Tu(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    i = t.maxTranslate() - t.minTranslate();
  let { progress: s, isBeginning: r, isEnd: l, progressLoop: a } = t;
  const o = r,
    u = l;
  if (i === 0) (s = 0), (r = !0), (l = !0);
  else {
    s = (e - t.minTranslate()) / i;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (r = c || s <= 0), (l = f || s >= 1), c && (s = 0), f && (s = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[c],
      h = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= d ? (a = (y - d) / g) : (a = (y + g - h) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: s, progressLoop: a, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !o && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((o && !r) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", s);
}
function Pu() {
  const e = this,
    { slides: t, params: n, slidesEl: i, activeIndex: s } = e,
    r = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    a = (f) => Ke(i, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  t.forEach((f) => {
    f.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o, u, c;
  if (r)
    if (n.loop) {
      let f = s - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${f}"]`));
    } else o = a(`[data-swiper-slide-index="${s}"]`);
  else
    l
      ? ((o = t.filter((f) => f.column === s)[0]),
        (c = t.filter((f) => f.column === s + 1)[0]),
        (u = t.filter((f) => f.column === s - 1)[0]))
      : (o = t[s]);
  o &&
    (o.classList.add(n.slideActiveClass),
    l
      ? (c && c.classList.add(n.slideNextClass),
        u && u.classList.add(n.slidePrevClass))
      : ((c = fu(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (u = uu(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses();
}
const hn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      i = t.closest(n());
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      !s &&
        e.isElement &&
        (i.shadowRoot
          ? (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((s = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                s && s.remove());
            })),
        s && s.remove();
    }
  },
  ti = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  bi = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const i =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = s,
        a = [l - t];
      a.push(...Array.from({ length: t }).map((o, u) => l + i + u)),
        e.slides.forEach((o, u) => {
          a.includes(o.column) && ti(e, u);
        });
      return;
    }
    const r = s + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = s - t; l <= r + t; l += 1) {
        const a = ((l % n) + n) % n;
        (a < s || a > r) && ti(e, a);
      }
    else
      for (let l = Math.max(s - t, 0); l <= Math.min(r + t, n - 1); l += 1)
        l !== s && (l > r || l < s) && ti(e, l);
  };
function Cu(e) {
  const { slidesGrid: t, params: n } = e,
    i = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (s = r)
        : i >= t[r] && i < t[r + 1] && (s = r + 1)
      : i >= t[r] && (s = r);
  return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function Mu(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: i, params: s, activeIndex: r, realIndex: l, snapIndex: a } = t;
  let o = e,
    u;
  const c = (h) => {
    let g = h - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof o > "u" && (o = Cu(t)), i.indexOf(n) >= 0)) u = i.indexOf(n);
  else {
    const h = Math.min(s.slidesPerGroupSkip, o);
    u = h + Math.floor((o - h) / s.slidesPerGroup);
  }
  if ((u >= i.length && (u = i.length - 1), o === r && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (o === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(o);
    return;
  }
  const f = t.grid && s.grid && s.grid.rows > 1;
  let d;
  if (t.virtual && s.virtual.enabled && s.loop) d = c(o);
  else if (f) {
    const h = t.slides.filter((y) => y.column === o)[0];
    let g = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(h), 0)),
      (d = Math.floor(g / s.grid.rows));
  } else if (t.slides[o]) {
    const h = t.slides[o].getAttribute("data-swiper-slide-index");
    h ? (d = parseInt(h, 10)) : (d = o);
  } else d = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: l,
    realIndex: d,
    previousIndex: r,
    activeIndex: o,
  }),
    t.initialized && bi(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== d && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Ou(e, t) {
  const n = this,
    i = n.params;
  let s = e.closest(`.${i.slideClass}, swiper-slide`);
  !s &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !s && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (s = a);
    });
  let r = !1,
    l;
  if (s) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === s) {
        (r = !0), (l = a);
        break;
      }
  }
  if (s && r)
    (n.clickedSlide = s),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Iu = {
  updateSize: Su,
  updateSlides: bu,
  updateAutoHeight: xu,
  updateSlidesOffset: Eu,
  updateSlidesProgress: _u,
  updateProgress: Tu,
  updateSlidesClasses: Pu,
  updateActiveIndex: Mu,
  updateClickedSlide: Ou,
};
function Au(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: i, translate: s, wrapperEl: r } = t;
  if (n.virtualTranslate) return i ? -s : s;
  if (n.cssMode) return s;
  let l = au(r, e);
  return (l += t.cssOverflowAdjustment()), i && (l = -l), l || 0;
}
function Ru(e, t) {
  const n = this,
    { rtlTranslate: i, params: s, wrapperEl: r, progress: l } = n;
  let a = 0,
    o = 0;
  const u = 0;
  n.isHorizontal() ? (a = i ? -e : e) : (o = e),
    s.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    s.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : s.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${a}px, ${o}px, ${u}px)`));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Lu() {
  return -this.snapGrid[0];
}
function zu() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Bu(e, t, n, i, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0);
  const r = this,
    { params: l, wrapperEl: a } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const o = r.minTranslate(),
    u = r.maxTranslate();
  let c;
  if (
    (i && e > o ? (c = o) : i && e < u ? (c = u) : (c = e),
    r.updateProgress(c),
    l.cssMode)
  ) {
    const f = r.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return (
          So({ swiper: r, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (d) {
              !r ||
                r.destroyed ||
                (d.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Nu = {
  getTranslate: Au,
  setTranslate: Ru,
  minTranslate: Lu,
  maxTranslate: zu,
  translateTo: Bu,
};
function Vu(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Eo(e) {
  let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
  const { activeIndex: r, previousIndex: l } = t;
  let a = i;
  if (
    (a || (r > l ? (a = "next") : r < l ? (a = "prev") : (a = "reset")),
    t.emit(`transition${s}`),
    n && r !== l)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${s}`);
      return;
    }
    t.emit(`slideChangeTransition${s}`),
      a === "next"
        ? t.emit(`slideNextTransition${s}`)
        : t.emit(`slidePrevTransition${s}`);
  }
}
function Fu(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: i } = n;
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    Eo({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Du(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: i } = n;
  (n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      Eo({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var $u = { setTransition: Vu, transitionStart: Fu, transitionEnd: Du };
function Hu(e, t, n, i, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: h,
    enabled: g,
  } = r;
  if (
    (r.animating && a.preventInteractionOnTransition) ||
    (!g && !i && !s) ||
    r.destroyed
  )
    return !1;
  const y = Math.min(r.params.slidesPerGroupSkip, l);
  let P = y + Math.floor((l - y) / r.params.slidesPerGroup);
  P >= o.length && (P = o.length - 1);
  const w = -o[P];
  if (a.normalizeSlideIndex)
    for (let b = 0; b < u.length; b += 1) {
      const M = -Math.floor(w * 100),
        B = Math.floor(u[b] * 100),
        R = Math.floor(u[b + 1] * 100);
      typeof u[b + 1] < "u"
        ? M >= B && M < R - (R - B) / 2
          ? (l = b)
          : M >= B && M < R && (l = b + 1)
        : M >= B && (l = b);
    }
  if (
    r.initialized &&
    l !== f &&
    ((!r.allowSlideNext &&
      (d
        ? w > r.translate && w > r.minTranslate()
        : w < r.translate && w < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        w > r.translate &&
        w > r.maxTranslate() &&
        (f || 0) !== l))
  )
    return !1;
  l !== (c || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
  let _;
  if (
    (l > f ? (_ = "next") : l < f ? (_ = "prev") : (_ = "reset"),
    (d && -w === r.translate) || (!d && w === r.translate))
  )
    return (
      r.updateActiveIndex(l),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== "slide" && r.setTranslate(w),
      _ !== "reset" && (r.transitionStart(n, _), r.transitionEnd(n, _)),
      !1
    );
  if (a.cssMode) {
    const b = r.isHorizontal(),
      M = d ? w : -w;
    if (t === 0) {
      const B = r.virtual && r.params.virtual.enabled;
      B &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        B && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[b ? "scrollLeft" : "scrollTop"] = M;
            }))
          : (h[b ? "scrollLeft" : "scrollTop"] = M),
        B &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          So({ swiper: r, targetPosition: M, side: b ? "left" : "top" }), !0
        );
      h.scrollTo({ [b ? "left" : "top"]: M, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(w),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, i),
    r.transitionStart(n, _),
    t === 0
      ? r.transitionEnd(n, _)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (M) {
            !r ||
              r.destroyed ||
              (M.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, _)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Gu(e, t, n, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  if (s.destroyed) return;
  const r = s.grid && s.params.grid && s.params.grid.rows > 1;
  let l = e;
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled) l = l + s.virtual.slidesBefore;
    else {
      let a;
      if (r) {
        const d = l * s.params.grid.rows;
        a = s.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === d
        )[0].column;
      } else a = s.getSlideIndexByData(l);
      const o = r
          ? Math.ceil(s.slides.length / s.params.grid.rows)
          : s.slides.length,
        { centeredSlides: u } = s.params;
      let c = s.params.slidesPerView;
      c === "auto"
        ? (c = s.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let f = o - a < c;
      if ((u && (f = f || a < Math.ceil(c / 2)), f)) {
        const d = u
          ? a < s.activeIndex
            ? "prev"
            : "next"
          : a - s.activeIndex - 1 < s.params.slidesPerView
          ? "next"
          : "prev";
        s.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === "next" ? a + 1 : a - o + 1,
          slideRealIndex: d === "next" ? s.realIndex : void 0,
        });
      }
      if (r) {
        const d = l * s.params.grid.rows;
        l = s.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === d
        )[0].column;
      } else l = s.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      s.slideTo(l, t, n, i);
    }),
    s
  );
}
function ju(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    { enabled: s, params: r, animating: l } = i;
  if (!s || i.destroyed) return i;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    u = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !u && r.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return r.rewind && i.isEnd
    ? i.slideTo(0, e, t, n)
    : i.slideTo(i.activeIndex + o, e, t, n);
}
function ku(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      params: s,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: a,
      enabled: o,
      animating: u,
    } = i;
  if (!o || i.destroyed) return i;
  const c = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (u && !c && s.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const f = a ? i.translate : -i.translate;
  function d(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const h = d(f),
    g = r.map((w) => d(w));
  let y = r[g.indexOf(h) - 1];
  if (typeof y > "u" && s.cssMode) {
    let w;
    r.forEach((_, b) => {
      h >= _ && (w = b);
    }),
      typeof w < "u" && (y = r[w > 0 ? w - 1 : w]);
  }
  let P = 0;
  if (
    (typeof y < "u" &&
      ((P = l.indexOf(y)),
      P < 0 && (P = i.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((P = P - i.slidesPerViewDynamic("previous", !0) + 1),
        (P = Math.max(P, 0)))),
    s.rewind && i.isBeginning)
  ) {
    const w =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(w, e, t, n);
  } else if (s.loop && i.activeIndex === 0 && s.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(P, e, t, n);
      }),
      !0
    );
  return i.slideTo(P, e, t, n);
}
function Wu(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this;
  if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, n);
}
function Uu(e, t, n, i) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = 0.5);
  const s = this;
  if (s.destroyed) return;
  let r = s.activeIndex;
  const l = Math.min(s.params.slidesPerGroupSkip, r),
    a = l + Math.floor((r - l) / s.params.slidesPerGroup),
    o = s.rtlTranslate ? s.translate : -s.translate;
  if (o >= s.snapGrid[a]) {
    const u = s.snapGrid[a],
      c = s.snapGrid[a + 1];
    o - u > (c - u) * i && (r += s.params.slidesPerGroup);
  } else {
    const u = s.snapGrid[a - 1],
      c = s.snapGrid[a];
    o - u <= (c - u) * i && (r -= s.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, s.slidesGrid.length - 1)),
    s.slideTo(r, e, t, n)
  );
}
function qu() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex,
    r;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - i / 2 ||
          s > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              Ke(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
            )),
            yi(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s)
        : s > e.slides.length - i
        ? (e.loopFix(),
          (s = e.getSlideIndex(
            Ke(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
          )),
          yi(() => {
            e.slideTo(s);
          }))
        : e.slideTo(s);
  } else e.slideTo(s);
}
var Ku = {
  slideTo: Hu,
  slideToLoop: Gu,
  slideNext: ju,
  slidePrev: ku,
  slideReset: Wu,
  slideToClosest: Uu,
  slideToClickedSlide: qu,
};
function Yu(e) {
  const t = this,
    { params: n, slidesEl: i } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const s = () => {
      Ke(i, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
        f.setAttribute("data-swiper-slide-index", d);
      });
    },
    r = t.grid && n.grid && n.grid.rows > 1,
    l = n.slidesPerGroup * (r ? n.grid.rows : 1),
    a = t.slides.length % l !== 0,
    o = r && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let f = 0; f < c; f += 1) {
        const d = t.isElement
          ? Si("swiper-slide", [n.slideBlankClass])
          : Si("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(d);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = l - (t.slides.length % l);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      En(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    s();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      En(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    s();
  } else s();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Xu(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: f,
      slidesEl: d,
      params: h,
    } = o,
    { centeredSlides: g } = h;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && h.virtual.enabled)
  ) {
    n &&
      (!h.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && o.snapIndex < h.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = c),
      (o.allowSlideNext = f),
      o.emit("loopFix");
    return;
  }
  let y = h.slidesPerView;
  y === "auto"
    ? (y = o.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(h.slidesPerView, 10))),
      g && y % 2 === 0 && (y = y + 1));
  const P = h.slidesPerGroupAuto ? y : h.slidesPerGroup;
  let w = P;
  w % P !== 0 && (w += P - (w % P)),
    (w += h.loopAdditionalSlides),
    (o.loopedSlides = w);
  const _ = o.grid && h.grid && h.grid.rows > 1;
  u.length < y + w
    ? En(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : _ &&
      h.grid.fill === "row" &&
      En(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const b = [],
    M = [];
  let B = o.activeIndex;
  typeof r > "u"
    ? (r = o.getSlideIndex(
        u.filter((H) => H.classList.contains(h.slideActiveClass))[0]
      ))
    : (B = r);
  const R = i === "next" || !i,
    Z = i === "prev" || !i;
  let j = 0,
    N = 0;
  const I = _ ? Math.ceil(u.length / h.grid.rows) : u.length,
    q = (_ ? u[r].column : r) + (g && typeof s > "u" ? -y / 2 + 0.5 : 0);
  if (q < w) {
    j = Math.max(w - q, P);
    for (let H = 0; H < w - q; H += 1) {
      const re = H - Math.floor(H / I) * I;
      if (_) {
        const ue = I - re - 1;
        for (let se = u.length - 1; se >= 0; se -= 1)
          u[se].column === ue && b.push(se);
      } else b.push(I - re - 1);
    }
  } else if (q + y > I - w) {
    N = Math.max(q - (I - w * 2), P);
    for (let H = 0; H < N; H += 1) {
      const re = H - Math.floor(H / I) * I;
      _
        ? u.forEach((ue, se) => {
            ue.column === re && M.push(se);
          })
        : M.push(re);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    Z &&
      b.forEach((H) => {
        (u[H].swiperLoopMoveDOM = !0),
          d.prepend(u[H]),
          (u[H].swiperLoopMoveDOM = !1);
      }),
    R &&
      M.forEach((H) => {
        (u[H].swiperLoopMoveDOM = !0),
          d.append(u[H]),
          (u[H].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    h.slidesPerView === "auto"
      ? o.updateSlides()
      : _ &&
        ((b.length > 0 && Z) || (M.length > 0 && R)) &&
        o.slides.forEach((H, re) => {
          o.grid.updateSlide(re, H, o.slides);
        }),
    h.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (b.length > 0 && Z) {
      if (typeof t > "u") {
        const H = o.slidesGrid[B],
          ue = o.slidesGrid[B + j] - H;
        a
          ? o.setTranslate(o.translate - ue)
          : (o.slideTo(B + Math.ceil(j), 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - ue),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - ue)));
      } else if (s) {
        const H = _ ? b.length / h.grid.rows : b.length;
        o.slideTo(o.activeIndex + H, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (M.length > 0 && R)
      if (typeof t > "u") {
        const H = o.slidesGrid[B],
          ue = o.slidesGrid[B - N] - H;
        a
          ? o.setTranslate(o.translate - ue)
          : (o.slideTo(B - N, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - ue),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - ue)));
      } else {
        const H = _ ? M.length / h.grid.rows : M.length;
        o.slideTo(o.activeIndex - H, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = c),
    (o.allowSlideNext = f),
    o.controller && o.controller.control && !l)
  ) {
    const H = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((re) => {
          !re.destroyed &&
            re.params.loop &&
            re.loopFix({
              ...H,
              slideTo: re.params.slidesPerView === h.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...H,
          slideTo:
            o.controller.control.params.slidesPerView === h.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function Qu() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((s) => {
    const r =
      typeof s.swiperSlideIndex > "u"
        ? s.getAttribute("data-swiper-slide-index") * 1
        : s.swiperSlideIndex;
    i[r] = s;
  }),
    e.slides.forEach((s) => {
      s.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((s) => {
      n.append(s);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Ju = { loopCreate: Yu, loopFix: Xu, loopDestroy: Qu };
function Zu(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function ef() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var tf = { setGrabCursor: Zu, unsetGrabCursor: ef };
function nf(e, t) {
  t === void 0 && (t = this);
  function n(i) {
    if (!i || i === zt() || i === Me()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host);
  }
  return n(t);
}
function Zs(e, t, n) {
  const i = Me(),
    { params: s } = e,
    r = s.edgeSwipeDetection,
    l = s.edgeSwipeThreshold;
  return r && (n <= l || n >= i.innerWidth - l)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function sf(e) {
  const t = this,
    n = zt();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const s = t.touchEventsData;
  if (i.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== i.pointerId) return;
    s.pointerId = i.pointerId;
  } else
    i.type === "touchstart" &&
      i.targetTouches.length === 1 &&
      (s.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    Zs(t, i, i.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: l, enabled: a } = t;
  if (
    !a ||
    (!r.simulateTouch && i.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let o = i.target;
  if (
    (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    c = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && c && (o = c[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    d = !!(i.target && i.target.shadowRoot);
  if (r.noSwiping && (d ? nf(f, o) : o.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
  (l.currentX = i.pageX), (l.currentY = i.pageY);
  const h = l.currentX,
    g = l.currentY;
  if (!Zs(t, i, h)) return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = h),
    (l.startY = g),
    (s.touchStartTime = xn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (s.allowThresholdMove = !1);
  let y = !0;
  o.matches(s.focusableElements) &&
    ((y = !1), o.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur();
  const P = y && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || P) &&
    !o.isContentEditable &&
    i.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", i);
}
function rf(e) {
  const t = zt(),
    n = this,
    i = n.touchEventsData,
    { params: s, touches: r, rtlTranslate: l, enabled: a } = n;
  if (!a || (!s.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (i.touchId !== null || o.pointerId !== i.pointerId))
  )
    return;
  let u;
  if (o.type === "touchmove") {
    if (
      ((u = [...o.changedTouches].filter((R) => R.identifier === i.touchId)[0]),
      !u || u.identifier !== i.touchId)
    )
      return;
  } else u = o;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const c = u.pageX,
    f = u.pageY;
  if (o.preventedByNestedSwiper) {
    (r.startX = c), (r.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(r, { startX: c, startY: f, currentX: c, currentY: f }),
        (i.touchStartTime = xn()));
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (
        (f < r.startY && n.translate <= n.maxTranslate()) ||
        (f > r.startY && n.translate >= n.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (c < r.startX && n.translate <= n.maxTranslate()) ||
      (c > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (n.allowClick = !1);
    return;
  }
  i.allowTouchCallbacks && n.emit("touchMove", o),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = c),
    (r.currentY = f);
  const d = r.currentX - r.startX,
    h = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(d ** 2 + h ** 2) < n.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let R;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : d * d + h * h >= 25 &&
        ((R = (Math.atan2(Math.abs(h), Math.abs(d)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? R > s.touchAngle
          : 90 - R > s.touchAngle));
  }
  if (
    (i.isScrolling && n.emit("touchMoveOpposite", o),
    typeof i.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (i.startMoving = !0),
    i.isScrolling)
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (n.allowClick = !1),
    !s.cssMode && o.cancelable && o.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
  let g = n.isHorizontal() ? d : h,
    y = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  s.oneWayMovement &&
    ((g = Math.abs(g) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
    (r.diff = g),
    (g *= s.touchRatio),
    l && ((g = -g), (y = -y));
  const P = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = y > 0 ? "prev" : "next");
  const w = n.params.loop && !s.cssMode,
    _ =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (w && _ && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const R = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(R);
    }
    (i.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let b;
  if (
    (new Date().getTime(),
    i.isMoved &&
      i.allowThresholdMove &&
      P !== n.touchesDirection &&
      w &&
      _ &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(r, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (i.isMoved = !0),
    (i.currentTranslate = g + i.startTranslate);
  let M = !0,
    B = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (B = 0),
    g > 0
      ? (w &&
          _ &&
          !b &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (s.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > n.minTranslate() &&
          ((M = !1),
          s.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + g) ** B)))
      : g < 0 &&
        (w &&
          _ &&
          !b &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (s.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (s.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(s.slidesPerView, 10))),
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((M = !1),
          s.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - g) ** B))),
    M && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(g) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
      s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate));
}
function of(e) {
  const t = this,
    n = t.touchEventsData;
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  let s;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (
      ((s = [...i.changedTouches].filter((B) => B.identifier === n.touchId)[0]),
      !s || s.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || i.pointerId !== n.pointerId) return;
    s = i;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      i.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(i.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: l,
    touches: a,
    rtlTranslate: o,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!l.simulateTouch && i.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", i),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  l.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = xn(),
    d = f - n.touchStartTime;
  if (t.allowClick) {
    const B = i.path || (i.composedPath && i.composedPath());
    t.updateClickedSlide((B && B[0]) || i.target, B),
      t.emit("tap click", i),
      d < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", i);
  }
  if (
    ((n.lastClickTime = xn()),
    yi(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (l.followFinger
      ? (h = o ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    l.cssMode)
  )
    return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  const g = h >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    P = t.slidesSizesGrid[0];
  for (
    let B = 0;
    B < u.length;
    B += B < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const R = B < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof u[B + R] < "u"
      ? (g || (h >= u[B] && h < u[B + R])) && ((y = B), (P = u[B + R] - u[B]))
      : (g || h >= u[B]) && ((y = B), (P = u[u.length - 1] - u[u.length - 2]));
  }
  let w = null,
    _ = null;
  l.rewind &&
    (t.isBeginning
      ? (_ =
          l.virtual && l.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0));
  const b = (h - u[y]) / P,
    M = y < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (d > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (b >= l.longSwipesRatio
        ? t.slideTo(l.rewind && t.isEnd ? w : y + M)
        : t.slideTo(y)),
      t.swipeDirection === "prev" &&
        (b > 1 - l.longSwipesRatio
          ? t.slideTo(y + M)
          : _ !== null && b < 0 && Math.abs(b) > l.longSwipesRatio
          ? t.slideTo(_)
          : t.slideTo(y));
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
      ? i.target === t.navigation.nextEl
        ? t.slideTo(y + M)
        : t.slideTo(y)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : y + M),
        t.swipeDirection === "prev" && t.slideTo(_ !== null ? _ : y));
  }
}
function er() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function lf(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function af() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
  if (!i) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let s;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / r),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function cf(e) {
  const t = this;
  hn(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function uf() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const _o = (e, t) => {
  const n = zt(),
    { params: i, el: s, wrapperEl: r, device: l } = e,
    a = !!i.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    s[o]("touchstart", e.onTouchStart, { passive: !1 }),
    s[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      s[o]("click", e.onClick, !0),
    i.cssMode && r[o]("scroll", e.onScroll),
    i.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          er,
          !0
        )
      : e[u]("observerUpdate", er, !0),
    s[o]("load", e.onLoad, { capture: !0 });
};
function ff() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = sf.bind(e)),
    (e.onTouchMove = rf.bind(e)),
    (e.onTouchEnd = of.bind(e)),
    (e.onDocumentTouchStart = uf.bind(e)),
    t.cssMode && (e.onScroll = af.bind(e)),
    (e.onClick = lf.bind(e)),
    (e.onLoad = cf.bind(e)),
    _o(e, "on");
}
function df() {
  _o(this, "off");
}
var pf = { attachEvents: ff, detachEvents: df };
const tr = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function hf() {
  const e = this,
    { realIndex: t, initialized: n, params: i, el: s } = e,
    r = i.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const o = (l in r ? r[l] : void 0) || e.originalParams,
    u = tr(e, i),
    c = tr(e, o),
    f = i.enabled;
  u && !c
    ? (s.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (s.classList.add(`${i.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && i.grid.fill === "column")) &&
        s.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      if (typeof o[w] > "u") return;
      const _ = i[w] && i[w].enabled,
        b = o[w] && o[w].enabled;
      _ && !b && e[w].disable(), !_ && b && e[w].enable();
    });
  const d = o.direction && o.direction !== i.direction,
    h = i.loop && (o.slidesPerView !== i.slidesPerView || d),
    g = i.loop;
  d && n && e.changeDirection(), Pe(e.params, o);
  const y = e.params.enabled,
    P = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !y ? e.disable() : !f && y && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", o),
    n &&
      (h
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !g && P
        ? (e.loopCreate(t), e.updateSlides())
        : g && !P && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function mf(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let i = !1;
  const s = Me(),
    r = t === "window" ? s.innerHeight : n.clientHeight,
    l = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: r * o, point: a };
      }
      return { value: a, point: a };
    });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const { point: o, value: u } = l[a];
    t === "window"
      ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = o)
      : u <= n.clientWidth && (i = o);
  }
  return i || "max";
}
var gf = { setBreakpoint: hf, getBreakpoint: mf };
function vf(e, t) {
  const n = [];
  return (
    e.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((s) => {
            i[s] && n.push(t + s);
          })
        : typeof i == "string" && n.push(t + i);
    }),
    n
  );
}
function wf() {
  const e = this,
    { classNames: t, params: n, rtl: i, el: s, device: r } = e,
    l = vf(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), s.classList.add(...t), e.emitContainerClasses();
}
function yf() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var Sf = { addClasses: wf, removeClasses: yf };
function bf() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: i } = n;
  if (i) {
    const s = e.slides.length - 1,
      r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var xf = { checkOverflow: bf },
  xi = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ef(e, t) {
  return function (i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0],
      r = i[s];
    if (typeof r != "object" || r === null) {
      Pe(t, i);
      return;
    }
    if (
      (e[s] === !0 && (e[s] = { enabled: !0 }),
      s === "navigation" &&
        e[s] &&
        e[s].enabled &&
        !e[s].prevEl &&
        !e[s].nextEl &&
        (e[s].auto = !0),
      ["pagination", "scrollbar"].indexOf(s) >= 0 &&
        e[s] &&
        e[s].enabled &&
        !e[s].el &&
        (e[s].auto = !0),
      !(s in e && "enabled" in r))
    ) {
      Pe(t, i);
      return;
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      Pe(t, i);
  };
}
const ni = {
    eventsEmitter: yu,
    update: Iu,
    translate: Nu,
    transition: $u,
    slide: Ku,
    loop: Ju,
    grabCursor: tf,
    events: pf,
    breakpoints: gf,
    checkOverflow: xf,
    classes: Sf,
  },
  ii = {};
let Qi = class qe {
  constructor() {
    let t, n;
    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
      s[r] = arguments[r];
    s.length === 1 &&
    s[0].constructor &&
    Object.prototype.toString.call(s[0]).slice(8, -1) === "Object"
      ? (n = s[0])
      : ([t, n] = s),
      n || (n = {}),
      (n = Pe({}, n)),
      t && !n.el && (n.el = t);
    const l = zt();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        l.querySelectorAll(n.el).forEach((f) => {
          const d = Pe({}, n, { el: f });
          c.push(new qe(d));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = bo()),
      (a.device = xo({ userAgent: n.userAgent })),
      (a.browser = gu()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: Ef(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Pe({}, xi, o);
    return (
      (a.params = Pe({}, u, ii, n)),
      (a.originalParams = Pe({}, a.params)),
      (a.passedParams = Pe({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: i } = this,
      s = Ke(n, `.${i.slideClass}, swiper-slide`),
      r = Qs(s[0]);
    return Qs(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: i } = t;
    t.slides = Ke(n, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = i.minTranslate(),
      l = (i.maxTranslate() - s) * t + s;
    i.translateTo(l, typeof n > "u" ? 0 : n),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((i) => {
      const s = t.getSlideClasses(i);
      n.push({ slideEl: i, classNames: s }), t.emit("_slideClass", i, s);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const i = this,
      {
        params: s,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u,
      } = i;
    let c = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let f = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0,
        d;
      for (let h = u + 1; h < r.length; h += 1)
        r[h] &&
          !d &&
          ((f += Math.ceil(r[h].swiperSlideSize)), (c += 1), f > o && (d = !0));
      for (let h = u - 1; h >= 0; h -= 1)
        r[h] &&
          !d &&
          ((f += r[h].swiperSlideSize), (c += 1), f > o && (d = !0));
    } else if (t === "current")
      for (let f = u + 1; f < r.length; f += 1)
        (n ? l[f] + a[f] - l[u] < o : l[f] - l[u] < o) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) l[u] - l[f] < o && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: i } = t;
    i.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && hn(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function s() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      s(), i.autoHeight && t.updateAutoHeight();
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        t.isEnd &&
        !i.centeredSlides
      ) {
        const l = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(l.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || s();
    }
    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const i = this,
      s = i.params.direction;
    return (
      t || (t = s === "horizontal" ? "vertical" : "horizontal"),
      t === s ||
        (t !== "horizontal" && t !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${t}`),
        i.emitContainerClasses(),
        (i.params.direction = t),
        i.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        i.emit("changeDirection"),
        n && i.update()),
      i
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let i = t || n.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = n),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const s = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(s())
        : Ke(i, s())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = Si("div", n.params.wrapperClass)),
        i.append(l),
        Ke(i, `.${n.params.slideClass}`).forEach((a) => {
          l.append(a);
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: l,
        slidesEl:
          n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || it(i, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || it(i, "direction") === "rtl"),
        wrongRTL: it(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const s = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach((r) => {
        r.complete
          ? hn(n, r)
          : r.addEventListener("load", (l) => {
              hn(n, l.target);
            });
      }),
      bi(n),
      (n.initialized = !0),
      bi(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const i = this,
      { params: s, el: r, wrapperEl: l, slides: a } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          r.removeAttribute("style"),
          l.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                s.slideVisibleClass,
                s.slideFullyVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((o) => {
          i.off(o);
        }),
        t !== !1 && ((i.el.swiper = null), ou(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Pe(ii, t);
  }
  static get extendedDefaults() {
    return ii;
  }
  static get defaults() {
    return xi;
  }
  static installModule(t) {
    qe.prototype.__modules__ || (qe.prototype.__modules__ = []);
    const n = qe.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => qe.installModule(n)), qe)
      : (qe.installModule(t), qe);
  }
};
Object.keys(ni).forEach((e) => {
  Object.keys(ni[e]).forEach((t) => {
    Qi.prototype[t] = ni[e][t];
  });
});
Qi.use([vu, wu]);
const To = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function dt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Pt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof e[i] > "u"
        ? (e[i] = t[i])
        : dt(t[i]) && dt(e[i]) && Object.keys(t[i]).length > 0
        ? t[i].__swiper__
          ? (e[i] = t[i])
          : Pt(e[i], t[i])
        : (e[i] = t[i]);
    });
}
function Po(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Co(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Mo(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Oo(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    n = [];
  return (
    t.forEach((i) => {
      n.indexOf(i) < 0 && n.push(i);
    }),
    n.join(" ")
  );
}
function _f(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Tf(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: i,
    changedParams: s,
    nextEl: r,
    prevEl: l,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const u = s.filter(
      (N) => N !== "children" && N !== "direction" && N !== "wrapperClass"
    ),
    {
      params: c,
      pagination: f,
      navigation: d,
      scrollbar: h,
      virtual: g,
      thumbs: y,
    } = t;
  let P, w, _, b, M, B, R, Z;
  s.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (P = !0),
    s.includes("controller") &&
      i.controller &&
      i.controller.control &&
      c.controller &&
      !c.controller.control &&
      (w = !0),
    s.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || o) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (_ = !0),
    s.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      h &&
      !h.el &&
      (b = !0),
    s.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || l) &&
      (i.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (M = !0);
  const j = (N) => {
    t[N] &&
      (t[N].destroy(),
      N === "navigation"
        ? (t.isElement && (t[N].prevEl.remove(), t[N].nextEl.remove()),
          (c[N].prevEl = void 0),
          (c[N].nextEl = void 0),
          (t[N].prevEl = void 0),
          (t[N].nextEl = void 0))
        : (t.isElement && t[N].el.remove(),
          (c[N].el = void 0),
          (t[N].el = void 0)));
  };
  s.includes("loop") &&
    t.isElement &&
    (c.loop && !i.loop ? (B = !0) : !c.loop && i.loop ? (R = !0) : (Z = !0)),
    u.forEach((N) => {
      if (dt(c[N]) && dt(i[N]))
        Object.assign(c[N], i[N]),
          (N === "navigation" || N === "pagination" || N === "scrollbar") &&
            "enabled" in i[N] &&
            !i[N].enabled &&
            j(N);
      else {
        const I = i[N];
        (I === !0 || I === !1) &&
        (N === "navigation" || N === "pagination" || N === "scrollbar")
          ? I === !1 && j(N)
          : (c[N] = i[N]);
      }
    }),
    u.includes("controller") &&
      !w &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    s.includes("children") && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : s.includes("virtual") &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    s.includes("children") && n && c.loop && (Z = !0),
    P && y.init() && y.update(!0),
    w && (t.controller.control = c.controller.control),
    _ &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (c.pagination.el = o),
      f.init(),
      f.render(),
      f.update()),
    b &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    M &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      r && (c.navigation.nextEl = r),
      l && (c.navigation.prevEl = l),
      d.init(),
      d.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev),
    s.includes("direction") && t.changeDirection(i.direction, !1),
    (B || Z) && t.loopDestroy(),
    (R || Z) && t.loopCreate(),
    t.update();
}
function nr(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    i = {},
    s = {};
  Pt(n, xi), (n._emitClasses = !0), (n.init = !1);
  const r = {},
    l = To.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (l.indexOf(o) >= 0
          ? dt(e[o])
            ? ((n[o] = {}), (s[o] = {}), Pt(n[o], e[o]), Pt(s[o], e[o]))
            : ((n[o] = e[o]), (s[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (r[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: s, rest: r, events: i }
  );
}
function Pf(e, t) {
  let {
    el: n,
    nextEl: i,
    prevEl: s,
    paginationEl: r,
    scrollbarEl: l,
    swiper: a,
  } = e;
  Po(t) &&
    i &&
    s &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = s),
    (a.originalParams.navigation.prevEl = s)),
    Co(t) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    Mo(t) &&
      l &&
      ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
    a.init(n);
}
function Cf(e, t, n, i, s) {
  const r = [];
  if (!t) return r;
  const l = (o) => {
    r.indexOf(o) < 0 && r.push(o);
  };
  if (n && i) {
    const o = i.map(s),
      u = n.map(s);
    o.join("") !== u.join("") && l("children"),
      i.length !== n.length && l("children");
  }
  return (
    To.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (dt(e[o]) && dt(t[o])) {
            const u = Object.keys(e[o]),
              c = Object.keys(t[o]);
            u.length !== c.length
              ? l(o)
              : (u.forEach((f) => {
                  e[o][f] !== t[o][f] && l(o);
                }),
                c.forEach((f) => {
                  e[o][f] !== t[o][f] && l(o);
                }));
          } else e[o] !== t[o] && l(o);
      }),
    r
  );
}
const Mf = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function si(e, t, n) {
  e === void 0 && (e = {});
  const i = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, a) => {
      Array.isArray(l) &&
        l.forEach((o) => {
          const u = typeof o.type == "symbol";
          a === "default" && (a = "container-end"),
            u && o.children
              ? r(o.children, a)
              : o.type &&
                (o.type.name === "SwiperSlide" ||
                  o.type.name === "AsyncComponentWrapper")
              ? i.push(o)
              : s[a] && s[a].push(o);
        });
    };
  return (
    Object.keys(e).forEach((l) => {
      if (typeof e[l] != "function") return;
      const a = e[l]();
      r(a, l);
    }),
    (n.value = t.value),
    (t.value = i),
    { slides: i, slots: s }
  );
}
function Of(e, t, n) {
  if (!n) return null;
  const i = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
      );
    },
    s = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    a = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < o; c += 1) c >= r && c <= l && u.push(t[i(c)]);
  return u.map(
    (c) => (
      c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = s),
      Ce(c.type, { ...c.props }, c.children)
    )
  );
}
const ir = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: i } = t;
      const { tag: s, wrapperTag: r } = e,
        l = pe("swiper"),
        a = pe(null),
        o = pe(!1),
        u = pe(!1),
        c = pe(null),
        f = pe(null),
        d = pe(null),
        h = { value: [] },
        g = { value: [] },
        y = pe(null),
        P = pe(null),
        w = pe(null),
        _ = pe(null),
        { params: b, passedParams: M } = nr(e, !1);
      si(n, h, g), (d.value = M), (g.value = h.value);
      const B = () => {
        si(n, h, g), (o.value = !0);
      };
      (b.onAny = function (j) {
        for (
          var N = arguments.length, I = new Array(N > 1 ? N - 1 : 0), $ = 1;
          $ < N;
          $++
        )
          I[$ - 1] = arguments[$];
        i(j, ...I);
      }),
        Object.assign(b.on, {
          _beforeBreakpoint: B,
          _containerClasses(j, N) {
            l.value = N;
          },
        });
      const R = { ...b };
      if (
        (delete R.wrapperClass,
        (f.value = new Qi(R)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = h.value;
        const j = {
          cache: !1,
          slides: h.value,
          renderExternal: (N) => {
            a.value = N;
          },
          renderExternalUpdate: !1,
        };
        Pt(f.value.params.virtual, j), Pt(f.value.originalParams.virtual, j);
      }
      Fi(() => {
        !u.value && f.value && (f.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: j } = nr(e, !1),
          N = Cf(j, d.value, h.value, g.value, (I) => I.props && I.props.key);
        (d.value = j),
          (N.length || o.value) &&
            f.value &&
            !f.value.destroyed &&
            Tf({
              swiper: f.value,
              slides: h.value,
              passedParams: j,
              changedParams: N,
              nextEl: y.value,
              prevEl: P.value,
              scrollbarEl: _.value,
              paginationEl: w.value,
            }),
          (o.value = !1);
      }),
        Tt("swiper", f),
        $t(a, () => {
          Ni(() => {
            Mf(f.value);
          });
        }),
        Nn(() => {
          c.value &&
            (Pf(
              {
                el: c.value,
                nextEl: y.value,
                prevEl: P.value,
                paginationEl: w.value,
                scrollbarEl: _.value,
                swiper: f.value,
              },
              b
            ),
            i("swiper", f.value));
        }),
        Di(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1);
        });
      function Z(j) {
        return b.virtual
          ? Of(f, j, a.value)
          : (j.forEach((N, I) => {
              N.props || (N.props = {}),
                (N.props.swiperRef = f),
                (N.props.swiperSlideIndex = I);
            }),
            j);
      }
      return () => {
        const { slides: j, slots: N } = si(n, h, g);
        return Ce(s, { ref: c, class: Oo(l.value) }, [
          N["container-start"],
          Ce(r, { class: _f(b.wrapperClass) }, [
            N["wrapper-start"],
            Z(j),
            N["wrapper-end"],
          ]),
          Po(e) && [
            Ce("div", { ref: P, class: "swiper-button-prev" }),
            Ce("div", { ref: y, class: "swiper-button-next" }),
          ],
          Mo(e) && Ce("div", { ref: _, class: "swiper-scrollbar" }),
          Co(e) && Ce("div", { ref: w, class: "swiper-pagination" }),
          N["container-end"],
        ]);
      };
    },
  },
  sr = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        i = !1;
      const { swiperRef: s } = e,
        r = pe(null),
        l = pe("swiper-slide"),
        a = pe(!1);
      function o(f, d, h) {
        d === r.value && (l.value = h);
      }
      Nn(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (i = !0));
      }),
        jr(() => {
          i || !s || !s.value || (s.value.on("_slideClass", o), (i = !0));
        }),
        Fi(() => {
          !r.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        Di(() => {
          !s || !s.value || s.value.off("_slideClass", o);
        });
      const u = Ae(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }));
      Tt("swiperSlide", u);
      const c = () => {
        a.value = !0;
      };
      return () =>
        Ce(
          e.tag,
          {
            class: Oo(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Ce(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !a.value &&
                    Ce("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !a.value &&
                  Ce("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  },
  If = {
    Swiper: ir,
    SwiperSlide: sr,
    install(e) {
      e.component("Swiper", ir), e.component("SwiperSlide", sr);
    },
  },
  Af = ["xlink:href", "fill"],
  Rf = zn({
    __name: "index",
    props: {
      prefix: { type: String, default: "#icon-" },
      name: String,
      color: { type: String, default: "" },
      width: { type: String, default: "50px" },
      height: { type: String, default: "50px" },
    },
    setup(e) {
      return (t, n) => (
        ji(),
        fa(
          "svg",
          { class: "svgicon", style: Mn({ width: e.width, height: e.height }) },
          [
            ki(
              "use",
              { "xlink:href": e.prefix + e.name, fill: e.color },
              null,
              8,
              Af
            ),
          ],
          4
        )
      );
    },
  }),
  Lf = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  },
  zf = Lf(Rf, [["__scopeId", "data-v-159c5938"]]),
  rr = { SvgIcon: zf },
  Bf = {
    install(e) {
      Object.keys(rr).forEach((t) => {
        e.component(t, rr[t]);
      });
    },
  },
  Nf = "modulepreload",
  Vf = function (e) {
    return "/" + e;
  },
  or = {},
  Io = function (t, n, i) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const r = document.getElementsByTagName("link");
      s = Promise.all(
        n.map((l) => {
          if (((l = Vf(l)), l in or)) return;
          or[l] = !0;
          const a = l.endsWith(".css"),
            o = a ? '[rel="stylesheet"]' : "";
          if (!!i)
            for (let f = r.length - 1; f >= 0; f--) {
              const d = r[f];
              if (d.href === l && (!a || d.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${o}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = a ? "stylesheet" : Nf),
            a || ((c.as = "script"), (c.crossOrigin = "")),
            (c.href = l),
            document.head.appendChild(c),
            a)
          )
            return new Promise((f, d) => {
              c.addEventListener("load", f),
                c.addEventListener("error", () =>
                  d(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return s
      .then(() => t())
      .catch((r) => {
        const l = new Event("vite:preloadError", { cancelable: !0 });
        if (((l.payload = r), window.dispatchEvent(l), !l.defaultPrevented))
          throw r;
      });
  },
  Ff = [
    {
      path: "/",
      component: () =>
        Io(() => import("./index-Dgo8r8kr.js"), __vite__mapDeps([0, 1, 2, 3])),
      hidden: !0,
    },
  ],
  Df = [
    {
      path: "/",
      component: () =>
        Io(() => import("./index-D2eEMrok.js"), __vite__mapDeps([4, 1, 2, 5])),
      hidden: !0,
    },
  ],
  $f = () => {
    let e = window.innerWidth,
      t = window.innerHeight;
    e < t
      ? (console.log("高大于宽"),
        Ff.forEach((n) => {
          wi.addRoute(n);
        }))
      : (console.log("大于"),
        Df.forEach((n) => {
          wi.addRoute(n);
        }));
  };
$f();
const Hf = Ya(Za);
Hf.use(wi).use(If).use(Bf).mount("");
export {
  to as A,
  ha as B,
  Gf as C,
  kf as D,
  Wf as E,
  ir as S,
  Lf as _,
  ki as a,
  Ee as b,
  fa as c,
  zn as d,
  Et as e,
  Kf as f,
  Ol as g,
  Ke as h,
  Si as i,
  qf as j,
  Ae as k,
  Nn as l,
  Qf as m,
  Di as n,
  ji as o,
  Uf as p,
  Ci as q,
  pe as r,
  zf as s,
  jf as t,
  Xf as u,
  Ni as v,
  _l as w,
  Yf as x,
  Ce as y,
  $i as z,
};
