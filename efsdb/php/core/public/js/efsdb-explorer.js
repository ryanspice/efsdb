var ps = Object.defineProperty;
var Ln = (e) => {
  throw TypeError(e);
};
var gs = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var X = (e, t, r) => gs(e, typeof t != "symbol" ? t + "" : t, r), Jr = (e, t, r) => t.has(e) || Ln("Cannot " + r);
var f = (e, t, r) => (Jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? Ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, n) => (Jr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), re = (e, t, r) => (Jr(e, t, "access private method"), r);
var Zn;
typeof window < "u" && ((Zn = window.__svelte ?? (window.__svelte = {})).v ?? (Zn.v = /* @__PURE__ */ new Set())).add("5");
const ms = 1, _s = 2, ti = 4, bs = 8, ws = 16, xs = 1, ys = 2, bn = "[", Ur = "[!", Dn = "[?", wn = "]", Qt = {}, de = Symbol(), ri = "http://www.w3.org/1999/xhtml", en = !1;
var ni = Array.isArray, ks = Array.prototype.indexOf, er = Array.prototype.includes, jr = Array.from, Pr = Object.keys, Lr = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, ii = Object.getOwnPropertyDescriptors, Es = Object.prototype, $s = Array.prototype, xn = Object.getPrototypeOf, Bn = Object.isExtensible;
const Ts = () => {
};
function qs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function si() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const he = 2, yr = 4, Wr = 8, ai = 1 << 24, mt = 16, Qe = 32, $t = 64, tn = 128, He = 512, fe = 1024, pe = 2048, Ze = 4096, Oe = 8192, ht = 16384, kt = 32768, tr = 65536, Fn = 1 << 17, oi = 1 << 18, Ht = 1 << 19, Ss = 1 << 20, dt = 1 << 25, Lt = 65536, rn = 1 << 21, yn = 1 << 22, xt = 1 << 23, vr = Symbol("$state"), As = Symbol("legacy props"), Cs = Symbol(""), Tt = new class extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "StaleReactionError");
    X(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Qn;
const li = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Qn = globalThis.document) != null && Qn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Yr = 3, kr = 8;
function zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ms() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Is(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ps() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ls() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Vr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Us() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let D = !1;
function vt(e) {
  D = e;
}
let N;
function Se(e) {
  if (e === null)
    throw Vr(), Qt;
  return N = e;
}
function Gr() {
  return Se(/* @__PURE__ */ st(N));
}
function T(e) {
  if (D) {
    if (/* @__PURE__ */ st(N) !== null)
      throw Vr(), Qt;
    N = e;
  }
}
function js(e = 1) {
  if (D) {
    for (var t = e, r = N; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ st(r);
    N = r;
  }
}
function Dr(e = !0) {
  for (var t = 0, r = N; ; ) {
    if (r.nodeType === kr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === wn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === bn || n === Ur || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(r)
    );
    e && r.remove(), r = s;
  }
}
function ui(e) {
  if (!e || e.nodeType !== kr)
    throw Vr(), Qt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function fi(e) {
  return e === this.v;
}
function ci(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function di(e) {
  return !ci(e, this.v);
}
let Ws = !1, Pe = null;
function rr(e) {
  Pe = e;
}
function ar(e, t = !1, r) {
  Pe = {
    p: Pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function or(e) {
  var t = (
    /** @type {ComponentContext} */
    Pe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Li(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Pe = t.p, e ?? /** @type {T} */
  {};
}
function vi() {
  return !0;
}
let qt = [];
function hi() {
  var e = qt;
  qt = [], qs(e);
}
function pt(e) {
  if (qt.length === 0 && !hr) {
    var t = qt;
    queueMicrotask(() => {
      t === qt && hi();
    });
  }
  qt.push(e);
}
function Ys() {
  for (; qt.length > 0; )
    hi();
}
function pi(e) {
  var t = O;
  if (t === null)
    return I.f |= xt, e;
  if ((t.f & kt) === 0 && (t.f & yr) === 0)
    throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if ((t.f & tn) !== 0) {
      if ((t.f & kt) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Vs = -7169;
function ne(e, t) {
  e.f = e.f & Vs | t;
}
function kn(e) {
  (e.f & He) !== 0 || e.deps === null ? ne(e, fe) : ne(e, Ze);
}
function gi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & he) === 0 || (t.f & Lt) === 0 || (t.f ^= Lt, gi(
        /** @type {Derived} */
        t.deps
      ));
}
function mi(e, t, r) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & Ze) !== 0 && r.add(e), gi(e.deps), ne(e, fe);
}
const Cr = /* @__PURE__ */ new Set();
let R = null, ve = null, Te = [], Xr = null, nn = !1, hr = !1;
var Yt, Vt, zt, Gt, mr, _r, Mt, lt, Xt, Le, sn, an, on, _i;
const Rn = class Rn {
  constructor() {
    M(this, Le);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    X(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    X(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    M(this, Yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, Vt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    M(this, zt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    M(this, Gt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, mr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, _r, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, Mt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    M(this, lt, /* @__PURE__ */ new Map());
    X(this, "is_fork", !1);
    M(this, Xt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, lt).has(t) || f(this, lt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, lt).get(t);
    if (r) {
      f(this, lt).delete(t);
      for (var n of r.d)
        ne(n, pe), Ke(n);
      for (n of r.m)
        ne(n, Ze), Ke(n);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var s;
    Te = [], this.apply();
    var r = [], n = [];
    for (const i of t)
      re(this, Le, an).call(this, i, r, n);
    if (re(this, Le, sn).call(this)) {
      re(this, Le, on).call(this, n), re(this, Le, on).call(this, r);
      for (const [i, a] of f(this, lt))
        yi(i, a);
    } else {
      for (const i of f(this, Yt)) i();
      f(this, Yt).clear(), f(this, zt) === 0 && re(this, Le, _i).call(this), R = null, Hn(n), Hn(r), (s = f(this, mr)) == null || s.resolve();
    }
    ve = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    r !== de && !this.previous.has(t) && this.previous.set(t, r), (t.f & xt) === 0 && (this.current.set(t, t.v), ve == null || ve.set(t, t.v));
  }
  activate() {
    R = this, this.apply();
  }
  deactivate() {
    R === this && (R = null, ve = null);
  }
  flush() {
    if (this.activate(), Te.length > 0) {
      if (bi(), R !== null && R !== this)
        return;
    } else f(this, zt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of f(this, Vt)) t(this);
    f(this, Vt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    S(this, zt, f(this, zt) + 1), t && S(this, Gt, f(this, Gt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    S(this, zt, f(this, zt) - 1), t && S(this, Gt, f(this, Gt) - 1), !f(this, Xt) && (S(this, Xt, !0), pt(() => {
      S(this, Xt, !1), re(this, Le, sn).call(this) ? Te.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of f(this, _r))
      f(this, Mt).delete(t), ne(t, pe), Ke(t);
    for (const t of f(this, Mt))
      ne(t, Ze), Ke(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    f(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Vt).add(t);
  }
  settled() {
    return (f(this, mr) ?? S(this, mr, si())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new Rn();
      Cr.add(R), hr || pt(() => {
        R === t && t.flush();
      });
    }
    return R;
  }
  apply() {
  }
};
Yt = new WeakMap(), Vt = new WeakMap(), zt = new WeakMap(), Gt = new WeakMap(), mr = new WeakMap(), _r = new WeakMap(), Mt = new WeakMap(), lt = new WeakMap(), Xt = new WeakMap(), Le = new WeakSet(), sn = function() {
  return this.is_fork || f(this, Gt) > 0;
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
an = function(t, r, n) {
  t.f ^= fe;
  for (var s = t.first; s !== null; ) {
    var i = s.f, a = (i & (Qe | $t)) !== 0, o = a && (i & fe) !== 0, l = o || (i & Oe) !== 0 || f(this, lt).has(s);
    if (!l && s.fn !== null) {
      a ? s.f ^= fe : (i & yr) !== 0 ? r.push(s) : $r(s) && ((i & mt) !== 0 && f(this, Mt).add(s), ir(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var d = s.next;
      if (d !== null) {
        s = d;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
on = function(t) {
  for (var r = 0; r < t.length; r += 1)
    mi(t[r], f(this, _r), f(this, Mt));
}, _i = function() {
  var s;
  if (Cr.size > 1) {
    this.previous.clear();
    var t = ve, r = !0;
    for (const i of Cr) {
      if (i === this) {
        r = !1;
        continue;
      }
      const a = [];
      for (const [l, u] of this.current) {
        if (i.current.has(l))
          if (r && u !== i.current.get(l))
            i.current.set(l, u);
          else
            continue;
        a.push(l);
      }
      if (a.length === 0)
        continue;
      const o = [...i.current.keys()].filter((l) => !this.current.has(l));
      if (o.length > 0) {
        var n = Te;
        Te = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const d of a)
          wi(d, o, l, u);
        if (Te.length > 0) {
          R = i, i.apply();
          for (const d of Te)
            re(s = i, Le, an).call(s, d, [], []);
          i.deactivate();
        }
        Te = n;
      }
    }
    R = null, ve = t;
  }
  Cr.delete(this);
};
let gt = Rn;
function j(e) {
  var t = hr;
  hr = !0;
  try {
    for (var r; ; ) {
      if (Ys(), Te.length === 0 && (R == null || R.flush(), Te.length === 0))
        return Xr = null, /** @type {T} */
        r;
      bi();
    }
  } finally {
    hr = t;
  }
}
function bi() {
  nn = !0;
  var e = null;
  try {
    for (var t = 0; Te.length > 0; ) {
      var r = gt.ensure();
      if (t++ > 1e3) {
        var n, s;
        Gs();
      }
      r.process(Te), yt.clear();
    }
  } finally {
    Te = [], nn = !1, Xr = null;
  }
}
function Gs() {
  try {
    Ps();
  } catch (e) {
    wt(e, Xr);
  }
}
let Ve = null;
function Hn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ht | Oe)) === 0 && $r(n) && (Ve = /* @__PURE__ */ new Set(), ir(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Fi(n), (Ve == null ? void 0 : Ve.size) > 0)) {
        yt.clear();
        for (const s of Ve) {
          if ((s.f & (ht | Oe)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            Ve.has(a) && (Ve.delete(a), i.push(a)), a = a.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const l = i[o];
            (l.f & (ht | Oe)) === 0 && ir(l);
          }
        }
        Ve.clear();
      }
    }
    Ve = null;
  }
}
function wi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & he) !== 0 ? wi(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (yn | mt)) !== 0 && (i & pe) === 0 && xi(s, t, n) && (ne(s, pe), Ke(
        /** @type {Effect} */
        s
      ));
    }
}
function xi(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (er.call(t, s))
        return !0;
      if ((s.f & he) !== 0 && xi(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Ke(e) {
  var t = Xr = e, r = t.b;
  if (r != null && r.is_pending && (e.f & (yr | Wr | ai)) !== 0 && (e.f & kt) === 0) {
    r.defer_effect(e);
    return;
  }
  for (; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (nn && t === O && (n & mt) !== 0 && (n & oi) === 0 && (n & kt) !== 0)
      return;
    if ((n & ($t | Qe)) !== 0) {
      if ((n & fe) === 0)
        return;
      t.f ^= fe;
    }
  }
  Te.push(t);
}
function yi(e, t) {
  if (!((e.f & Qe) !== 0 && (e.f & fe) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & Ze) !== 0 && t.m.push(e), ne(e, fe);
    for (var r = e.first; r !== null; )
      yi(r, t), r = r.next;
  }
}
function Xs(e) {
  let t = 0, r = Dt(0), n;
  return () => {
    Sn() && (c(r), An(() => (t === 0 && (n = In(() => e(() => pr(r)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, pr(r));
      });
    })));
  };
}
var Ks = tr | Ht;
function Js(e, t, r, n) {
  new Zs(e, t, r, n);
}
var Me, br, et, It, $e, tt, Ie, Ge, ut, Nt, bt, Kt, Jt, Zt, ft, Fr, te, ki, Ei, $i, ln, Ir, Nr, un;
class Zs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    M(this, te);
    /** @type {Boundary | null} */
    X(this, "parent");
    X(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    X(this, "transform_error");
    /** @type {TemplateNode} */
    M(this, Me);
    /** @type {TemplateNode | null} */
    M(this, br, D ? N : null);
    /** @type {BoundaryProps} */
    M(this, et);
    /** @type {((anchor: Node) => void)} */
    M(this, It);
    /** @type {Effect} */
    M(this, $e);
    /** @type {Effect | null} */
    M(this, tt, null);
    /** @type {Effect | null} */
    M(this, Ie, null);
    /** @type {Effect | null} */
    M(this, Ge, null);
    /** @type {DocumentFragment | null} */
    M(this, ut, null);
    M(this, Nt, 0);
    M(this, bt, 0);
    M(this, Kt, !1);
    /** @type {Set<Effect>} */
    M(this, Jt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    M(this, Zt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, ft, null);
    M(this, Fr, Xs(() => (S(this, ft, Dt(f(this, Nt))), () => {
      S(this, ft, null);
    })));
    var i;
    S(this, Me, t), S(this, et, r), S(this, It, (a) => {
      var o = (
        /** @type {Effect} */
        O
      );
      o.b = this, o.f |= tn, n(a);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((a) => a), S(this, $e, Cn(() => {
      if (D) {
        const a = (
          /** @type {Comment} */
          f(this, br)
        );
        Gr();
        const o = a.data === Ur;
        if (a.data.startsWith(Dn)) {
          const u = JSON.parse(a.data.slice(Dn.length));
          re(this, te, Ei).call(this, u);
        } else o ? re(this, te, $i).call(this) : re(this, te, ki).call(this);
      } else
        re(this, te, ln).call(this);
    }, Ks)), D && S(this, Me, N);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    mi(t, f(this, Jt), f(this, Zt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, et).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    re(this, te, un).call(this, t), S(this, Nt, f(this, Nt) + t), !(!f(this, ft) || f(this, Kt)) && (S(this, Kt, !0), pt(() => {
      S(this, Kt, !1), f(this, ft) && nr(f(this, ft), f(this, Nt));
    }));
  }
  get_effect_pending() {
    return f(this, Fr).call(this), c(
      /** @type {Source<number>} */
      f(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, et).onerror;
    let n = f(this, et).failed;
    if (!r && !n)
      throw t;
    f(this, tt) && (xe(f(this, tt)), S(this, tt, null)), f(this, Ie) && (xe(f(this, Ie)), S(this, Ie, null)), f(this, Ge) && (xe(f(this, Ge)), S(this, Ge, null)), D && (Se(
      /** @type {TemplateNode} */
      f(this, br)
    ), js(), Se(Dr()));
    var s = !1, i = !1;
    const a = () => {
      if (s) {
        Us();
        return;
      }
      s = !0, i && Hs(), f(this, Ge) !== null && Ot(f(this, Ge), () => {
        S(this, Ge, null);
      }), re(this, te, Nr).call(this, () => {
        gt.ensure(), re(this, te, ln).call(this);
      });
    }, o = (l) => {
      try {
        i = !0, r == null || r(l, a), i = !1;
      } catch (u) {
        wt(u, f(this, $e) && f(this, $e).parent);
      }
      n && S(this, Ge, re(this, te, Nr).call(this, () => {
        gt.ensure();
        try {
          return Fe(() => {
            var u = (
              /** @type {Effect} */
              O
            );
            u.b = this, u.f |= tn, n(
              f(this, Me),
              () => l,
              () => a
            );
          });
        } catch (u) {
          return wt(
            u,
            /** @type {Effect} */
            f(this, $e).parent
          ), null;
        }
      }));
    };
    pt(() => {
      var l;
      try {
        l = this.transform_error(t);
      } catch (u) {
        wt(u, f(this, $e) && f(this, $e).parent);
        return;
      }
      l !== null && typeof l == "object" && typeof /** @type {any} */
      l.then == "function" ? l.then(
        o,
        /** @param {unknown} e */
        (u) => wt(u, f(this, $e) && f(this, $e).parent)
      ) : o(l);
    });
  }
}
Me = new WeakMap(), br = new WeakMap(), et = new WeakMap(), It = new WeakMap(), $e = new WeakMap(), tt = new WeakMap(), Ie = new WeakMap(), Ge = new WeakMap(), ut = new WeakMap(), Nt = new WeakMap(), bt = new WeakMap(), Kt = new WeakMap(), Jt = new WeakMap(), Zt = new WeakMap(), ft = new WeakMap(), Fr = new WeakMap(), te = new WeakSet(), ki = function() {
  try {
    S(this, tt, Fe(() => f(this, It).call(this, f(this, Me))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ei = function(t) {
  const r = f(this, et).failed;
  r && S(this, Ge, Fe(() => {
    r(
      f(this, Me),
      () => t,
      () => () => {
      }
    );
  }));
}, $i = function() {
  const t = f(this, et).pending;
  t && (this.is_pending = !0, S(this, Ie, Fe(() => t(f(this, Me)))), pt(() => {
    var r = S(this, ut, document.createDocumentFragment()), n = Ue();
    r.append(n), S(this, tt, re(this, te, Nr).call(this, () => (gt.ensure(), Fe(() => f(this, It).call(this, n))))), f(this, bt) === 0 && (f(this, Me).before(r), S(this, ut, null), Ot(
      /** @type {Effect} */
      f(this, Ie),
      () => {
        S(this, Ie, null);
      }
    ), re(this, te, Ir).call(this));
  }));
}, ln = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), S(this, bt, 0), S(this, Nt, 0), S(this, tt, Fe(() => {
      f(this, It).call(this, f(this, Me));
    })), f(this, bt) > 0) {
      var t = S(this, ut, document.createDocumentFragment());
      ji(f(this, tt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, et).pending
      );
      S(this, Ie, Fe(() => r(f(this, Me))));
    } else
      re(this, te, Ir).call(this);
  } catch (r) {
    this.error(r);
  }
}, Ir = function() {
  this.is_pending = !1;
  for (const t of f(this, Jt))
    ne(t, pe), Ke(t);
  for (const t of f(this, Zt))
    ne(t, Ze), Ke(t);
  f(this, Jt).clear(), f(this, Zt).clear();
}, /**
 * @template T
 * @param {() => T} fn
 */
Nr = function(t) {
  var r = O, n = I, s = Pe;
  it(f(this, $e)), We(f(this, $e)), rr(f(this, $e).ctx);
  try {
    return t();
  } catch (i) {
    return pi(i), null;
  } finally {
    it(r), We(n), rr(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
un = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && re(r = this.parent, te, un).call(r, t);
    return;
  }
  S(this, bt, f(this, bt) + t), f(this, bt) === 0 && (re(this, te, Ir).call(this), f(this, Ie) && Ot(f(this, Ie), () => {
    S(this, Ie, null);
  }), f(this, ut) && (f(this, Me).before(f(this, ut)), S(this, ut, null)));
};
function Qs(e, t, r, n) {
  const s = Kr;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    O
  ), o = ea(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (p) {
      (a.f & ht) === 0 && wt(p, a);
    }
    fn();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  function d() {
    o(), Promise.all(r.map((v) => /* @__PURE__ */ ra(v))).then((v) => u([...t.map(s), ...v])).catch((v) => wt(v, a));
  }
  l ? l.then(d) : d();
}
function ea() {
  var e = O, t = I, r = Pe, n = R;
  return function(i = !0) {
    it(e), We(t), rr(r), i && (n == null || n.activate());
  };
}
function fn(e = !0) {
  it(null), We(null), rr(null), e && (R == null || R.deactivate());
}
function ta() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    O.b
  ), t = (
    /** @type {Batch} */
    R
  ), r = e.is_rendered();
  return e.update_pending_count(1), t.increment(r), () => {
    e.update_pending_count(-1), t.decrement(r);
  };
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  var t = he | pe, r = I !== null && (I.f & he) !== 0 ? (
    /** @type {Derived} */
    I
  ) : null;
  return O !== null && (O.f |= Ht), {
    ctx: Pe,
    deps: null,
    effects: null,
    equals: fi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      de
    ),
    wv: 0,
    parent: r ?? O,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ra(e, t, r) {
  /** @type {Effect | null} */
  O === null && Ms();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Dt(
    /** @type {V} */
    de
  ), a = !I, o = /* @__PURE__ */ new Map();
  return va(() => {
    var p;
    var l = si();
    s = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(fn);
    } catch (b) {
      l.reject(b), fn();
    }
    var u = (
      /** @type {Batch} */
      R
    );
    if (a) {
      var d = ta();
      (p = o.get(u)) == null || p.reject(Tt), o.delete(u), o.set(u, l);
    }
    const v = (b, _ = void 0) => {
      if (u.activate(), _)
        _ !== Tt && (i.f |= xt, nr(i, _));
      else {
        (i.f & xt) !== 0 && (i.f ^= xt), nr(i, b);
        for (const [$, g] of o) {
          if (o.delete($), $ === u) break;
          g.reject(Tt);
        }
      }
      d && d();
    };
    l.promise.then(v, (b) => v(null, b || "unknown"));
  }), Oi(() => {
    for (const l of o.values())
      l.reject(Tt);
  }), new Promise((l) => {
    function u(d) {
      function v() {
        d === s ? l(i) : u(s);
      }
      d.then(v, v);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  const t = /* @__PURE__ */ Kr(e);
  return Wi(t), t;
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  const t = /* @__PURE__ */ Kr(e);
  return t.equals = di, t;
}
function ia(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      xe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function sa(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & he) === 0)
      return (t.f & ht) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function En(e) {
  var t, r = O;
  it(sa(e));
  try {
    e.f &= ~Lt, ia(e), t = Xi(e);
  } finally {
    it(r);
  }
  return t;
}
function Ti(e) {
  var t = En(e);
  if (!e.equals(t) && (e.wv = Vi(), (!(R != null && R.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    ne(e, fe);
    return;
  }
  Et || (ve !== null ? (Sn() || R != null && R.is_fork) && ve.set(e, t) : kn(e));
}
function aa(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Tt), n.teardown = Ts, n.ac = null, gr(n, 0), zn(n));
}
function qi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && ir(t);
}
let cn = /* @__PURE__ */ new Set();
const yt = /* @__PURE__ */ new Map();
let Si = !1;
function Dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: fi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const r = Dt(e);
  return Wi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = di), n;
}
function E(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Je || (I.f & Fn) !== 0) && vi() && (I.f & (he | mt | yn | Fn)) !== 0 && (je === null || !er.call(je, e)) && Fs();
  let n = r ? St(t) : t;
  return nr(e, n);
}
function nr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Et ? yt.set(e, t) : yt.set(e, r), e.v = t;
    var n = gt.ensure();
    if (n.capture(e, r), (e.f & he) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && En(s), kn(s);
    }
    e.wv = Vi(), Ci(e, pe), O !== null && (O.f & fe) !== 0 && (O.f & (Qe | $t)) === 0 && (De === null ? ga([e]) : De.push(e)), !n.is_fork && cn.size > 0 && !Si && oa();
  }
  return t;
}
function oa() {
  Si = !1;
  for (const e of cn)
    (e.f & fe) !== 0 && ne(e, Ze), $r(e) && ir(e);
  cn.clear();
}
function pr(e) {
  E(e, e.v + 1);
}
function Ci(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s], a = i.f, o = (a & pe) === 0;
      if (o && ne(i, t), (a & he) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        ve == null || ve.delete(l), (a & Lt) === 0 && (a & He && (i.f |= Lt), Ci(l, Ze));
      } else o && ((a & mt) !== 0 && Ve !== null && Ve.add(
        /** @type {Effect} */
        i
      ), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
function St(e) {
  if (typeof e != "object" || e === null || vr in e)
    return e;
  const t = xn(e);
  if (t !== Es && t !== $s)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ni(e), s = /* @__PURE__ */ ee(0), i = Pt, a = (o) => {
    if (Pt === i)
      return o();
    var l = I, u = Pt;
    We(null), Yn(i);
    var d = o();
    return We(l), Yn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ds();
        var d = r.get(l);
        return d === void 0 ? a(() => {
          var v = /* @__PURE__ */ ee(u.value);
          return r.set(l, v), v;
        }) : E(d, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ ee(de));
            r.set(l, d), pr(s);
          }
        } else
          E(u, de), pr(s);
        return !0;
      },
      get(o, l, u) {
        var b;
        if (l === vr)
          return e;
        var d = r.get(l), v = l in o;
        if (d === void 0 && (!v || (b = jt(o, l)) != null && b.writable) && (d = a(() => {
          var _ = St(v ? o[l] : de), $ = /* @__PURE__ */ ee(_);
          return $;
        }), r.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === de ? void 0 : p;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var v = r.get(l), p = v == null ? void 0 : v.v;
          if (v !== void 0 && p !== de)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var p;
        if (l === vr)
          return !0;
        var u = r.get(l), d = u !== void 0 && u.v !== de || Reflect.has(o, l);
        if (u !== void 0 || O !== null && (!d || (p = jt(o, l)) != null && p.writable)) {
          u === void 0 && (u = a(() => {
            var b = d ? St(o[l]) : de, _ = /* @__PURE__ */ ee(b);
            return _;
          }), r.set(l, u));
          var v = c(u);
          if (v === de)
            return !1;
        }
        return d;
      },
      set(o, l, u, d) {
        var B;
        var v = r.get(l), p = l in o;
        if (n && l === "length")
          for (var b = u; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var _ = r.get(b + "");
            _ !== void 0 ? E(_, de) : b in o && (_ = a(() => /* @__PURE__ */ ee(de)), r.set(b + "", _));
          }
        if (v === void 0)
          (!p || (B = jt(o, l)) != null && B.writable) && (v = a(() => /* @__PURE__ */ ee(void 0)), E(v, St(u)), r.set(l, v));
        else {
          p = v.v !== de;
          var $ = a(() => St(u));
          E(v, $);
        }
        var g = Reflect.getOwnPropertyDescriptor(o, l);
        if (g != null && g.set && g.set.call(d, u), !p) {
          if (n && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= w.v && E(w, A + 1);
          }
          pr(s);
        }
        return !0;
      },
      ownKeys(o) {
        c(s);
        var l = Reflect.ownKeys(o).filter((v) => {
          var p = r.get(v);
          return p === void 0 || p.v !== de;
        });
        for (var [u, d] of r)
          d.v !== de && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Bs();
      }
    }
  );
}
var Un, zi, Mi, Ii;
function dn() {
  if (Un === void 0) {
    Un = window, zi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Mi = jt(t, "firstChild").get, Ii = jt(t, "nextSibling").get, Bn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Bn(r) && (r.__t = void 0);
  }
}
function Ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return (
    /** @type {TemplateNode | null} */
    Mi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return (
    /** @type {TemplateNode | null} */
    Ii.call(e)
  );
}
function q(e, t) {
  if (!D)
    return /* @__PURE__ */ Bt(e);
  var r = /* @__PURE__ */ Bt(N);
  if (r === null)
    r = N.appendChild(Ue());
  else if (t && r.nodeType !== Yr) {
    var n = Ue();
    return r == null || r.before(n), Se(n), n;
  }
  return t && Tn(
    /** @type {Text} */
    r
  ), Se(r), r;
}
function Er(e, t = !1) {
  if (!D) {
    var r = /* @__PURE__ */ Bt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ st(r) : r;
  }
  if (t) {
    if ((N == null ? void 0 : N.nodeType) !== Yr) {
      var n = Ue();
      return N == null || N.before(n), Se(n), n;
    }
    Tn(
      /** @type {Text} */
      N
    );
  }
  return N;
}
function V(e, t = 1, r = !1) {
  let n = D ? N : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ st(n);
  if (!D)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Yr) {
      var i = Ue();
      return n === null ? s == null || s.after(i) : n.before(i), Se(i), i;
    }
    Tn(
      /** @type {Text} */
      n
    );
  }
  return Se(n), n;
}
function Ni(e) {
  e.textContent = "";
}
function Ri() {
  return !1;
}
function $n(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ri, e, void 0)
  );
}
function Tn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Yr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let jn = !1;
function la() {
  jn || (jn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function qn(e) {
  var t = I, r = O;
  We(null), it(null);
  try {
    return e();
  } finally {
    We(t), it(r);
  }
}
function ua(e) {
  O === null && (I === null && Os(), Rs()), Et && Ns();
}
function fa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function at(e, t, r) {
  var n = O;
  n !== null && (n.f & Oe) !== 0 && (e |= Oe);
  var s = {
    ctx: Pe,
    deps: null,
    nodes: null,
    f: e | pe | He,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      ir(s);
    } catch (o) {
      throw xe(s), o;
    }
  else t !== null && Ke(s);
  var i = s;
  if (r && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Ht) === 0 && (i = i.first, (e & mt) !== 0 && (e & tr) !== 0 && i !== null && (i.f |= tr)), i !== null && (i.parent = n, n !== null && fa(i, n), I !== null && (I.f & he) !== 0 && (e & $t) === 0)) {
    var a = (
      /** @type {Derived} */
      I
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return s;
}
function Sn() {
  return I !== null && !Je;
}
function Oi(e) {
  const t = at(Wr, null, !1);
  return ne(t, fe), t.teardown = e, t;
}
function Pi(e) {
  ua();
  var t = (
    /** @type {Effect} */
    O.f
  ), r = !I && (t & Qe) !== 0 && (t & kt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Pe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Li(e);
}
function Li(e) {
  return at(yr | Ss, e, !1);
}
function ca(e) {
  gt.ensure();
  const t = at($t | Ht, e, !0);
  return () => {
    xe(t);
  };
}
function da(e) {
  gt.ensure();
  const t = at($t | Ht, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ot(t, () => {
      xe(t), n(void 0);
    }) : (xe(t), n(void 0));
  });
}
function Di(e) {
  return at(yr, e, !1);
}
function va(e) {
  return at(yn | Ht, e, !0);
}
function An(e, t = 0) {
  return at(Wr | t, e, !0);
}
function we(e, t = [], r = [], n = []) {
  Qs(n, t, r, (s) => {
    at(Wr, () => e(...s.map(c)), !0);
  });
}
function Cn(e, t = 0) {
  var r = at(mt | t, e, !0);
  return r;
}
function Fe(e) {
  return at(Qe | Ht, e, !0);
}
function Bi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Et, n = I;
    Wn(!0), We(null);
    try {
      t.call(null);
    } finally {
      Wn(r), We(n);
    }
  }
}
function zn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && qn(() => {
      s.abort(Tt);
    });
    var n = r.next;
    (r.f & $t) !== 0 ? r.parent = null : xe(r, t), r = n;
  }
}
function ha(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Qe) === 0 && xe(t), t = r;
  }
}
function xe(e, t = !0) {
  var r = !1;
  (t || (e.f & oi) !== 0) && e.nodes !== null && e.nodes.end !== null && (pa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), zn(e, t && !r), gr(e, 0), ne(e, ht);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Bi(e);
  var s = e.parent;
  s !== null && s.first !== null && Fi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function pa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ st(e);
    e.remove(), e = r;
  }
}
function Fi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ot(e, t, r = !0) {
  var n = [];
  Hi(e, n, !0);
  var s = () => {
    r && xe(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var o of n)
      o.out(a);
  } else
    s();
}
function Hi(e, t, r) {
  if ((e.f & Oe) === 0) {
    e.f ^= Oe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var i = s.next, a = (s.f & tr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Qe) !== 0 && (e.f & mt) !== 0;
      Hi(s, t, a ? r : !1), s = i;
    }
  }
}
function Mn(e) {
  Ui(e, !0);
}
function Ui(e, t) {
  if ((e.f & Oe) !== 0) {
    e.f ^= Oe, (e.f & fe) === 0 && (ne(e, pe), Ke(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & tr) !== 0 || (r.f & Qe) !== 0;
      Ui(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function ji(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ st(r);
      t.append(r), r = s;
    }
}
let Rr = !1, Et = !1;
function Wn(e) {
  Et = e;
}
let I = null, Je = !1;
function We(e) {
  I = e;
}
let O = null;
function it(e) {
  O = e;
}
let je = null;
function Wi(e) {
  I !== null && (je === null ? je = [e] : je.push(e));
}
let qe = null, ze = 0, De = null;
function ga(e) {
  De = e;
}
let Yi = 1, At = 0, Pt = At;
function Yn(e) {
  Pt = e;
}
function Vi() {
  return ++Yi;
}
function $r(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & he && (e.f &= ~Lt), (t & Ze) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if ($r(
        /** @type {Derived} */
        i
      ) && Ti(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ve === null && ne(e, fe);
  }
  return !1;
}
function Gi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(je !== null && er.call(je, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & he) !== 0 ? Gi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ne(i, pe) : (i.f & fe) !== 0 && ne(i, Ze), Ke(
        /** @type {Effect} */
        i
      ));
    }
}
function Xi(e) {
  var $;
  var t = qe, r = ze, n = De, s = I, i = je, a = Pe, o = Je, l = Pt, u = e.f;
  qe = /** @type {null | Value[]} */
  null, ze = 0, De = null, I = (u & (Qe | $t)) === 0 ? e : null, je = null, rr(e.ctx), Je = !1, Pt = ++At, e.ac !== null && (qn(() => {
    e.ac.abort(Tt);
  }), e.ac = null);
  try {
    e.f |= rn;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d();
    e.f |= kt;
    var p = e.deps, b = R == null ? void 0 : R.is_fork;
    if (qe !== null) {
      var _;
      if (b || gr(e, ze), p !== null && ze > 0)
        for (p.length = ze + qe.length, _ = 0; _ < qe.length; _++)
          p[ze + _] = qe[_];
      else
        e.deps = p = qe;
      if (Sn() && (e.f & He) !== 0)
        for (_ = ze; _ < p.length; _++)
          (($ = p[_]).reactions ?? ($.reactions = [])).push(e);
    } else !b && p !== null && ze < p.length && (gr(e, ze), p.length = ze);
    if (vi() && De !== null && !Je && p !== null && (e.f & (he | Ze | pe)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      De.length; _++)
        Gi(
          De[_],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (At++, s.deps !== null)
        for (let g = 0; g < r; g += 1)
          s.deps[g].rv = At;
      if (t !== null)
        for (const g of t)
          g.rv = At;
      De !== null && (n === null ? n = De : n.push(.../** @type {Source[]} */
      De));
    }
    return (e.f & xt) !== 0 && (e.f ^= xt), v;
  } catch (g) {
    return pi(g);
  } finally {
    e.f ^= rn, qe = t, ze = r, De = n, I = s, je = i, rr(a), Je = o, Pt = l;
  }
}
function ma(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ks.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & he) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !er.call(qe, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & He) !== 0 && (i.f ^= He, i.f &= ~Lt), kn(i), aa(i), gr(i, 0);
  }
}
function gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ma(e, r[n]);
}
function ir(e) {
  var t = e.f;
  if ((t & ht) === 0) {
    ne(e, fe);
    var r = O, n = Rr;
    O = e, Rr = !0;
    try {
      (t & (mt | ai)) !== 0 ? ha(e) : zn(e), Bi(e);
      var s = Xi(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Yi;
      var i;
      en && Ws && (e.f & pe) !== 0 && e.deps;
    } finally {
      Rr = n, O = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & he) !== 0;
  if (I !== null && !Je) {
    var n = O !== null && (O.f & ht) !== 0;
    if (!n && (je === null || !er.call(je, e))) {
      var s = I.deps;
      if ((I.f & rn) !== 0)
        e.rv < At && (e.rv = At, qe === null && s !== null && s[ze] === e ? ze++ : qe === null ? qe = [e] : qe.push(e));
      else {
        (I.deps ?? (I.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : er.call(i, I) || i.push(I);
      }
    }
  }
  if (Et && yt.has(e))
    return yt.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Et) {
      var o = a.v;
      return ((a.f & fe) === 0 && a.reactions !== null || Ji(a)) && (o = En(a)), yt.set(a, o), o;
    }
    var l = (a.f & He) === 0 && !Je && I !== null && (Rr || (I.f & He) !== 0), u = (a.f & kt) === 0;
    $r(a) && (l && (a.f |= He), Ti(a)), l && !u && (qi(a), Ki(a));
  }
  if (ve != null && ve.has(e))
    return ve.get(e);
  if ((e.f & xt) !== 0)
    throw e.v;
  return e.v;
}
function Ki(e) {
  if (e.f |= He, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & he) !== 0 && (t.f & He) === 0 && (qi(
        /** @type {Derived} */
        t
      ), Ki(
        /** @type {Derived} */
        t
      ));
}
function Ji(e) {
  if (e.v === de) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (yt.has(t) || (t.f & he) !== 0 && Ji(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function In(e) {
  var t = Je;
  try {
    return Je = !0, e();
  } finally {
    Je = t;
  }
}
function _a(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (vr in e)
      vn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && vr in r && vn(r);
      }
  }
}
function vn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        vn(e[n], t);
      } catch {
      }
    const r = xn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = ii(r);
      for (let s in n) {
        const i = n[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const Ct = Symbol("events"), Zi = /* @__PURE__ */ new Set(), hn = /* @__PURE__ */ new Set();
function ba(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || pn.call(t, i), !i.cancelBubble)
      return qn(() => r == null ? void 0 : r.call(this, i));
  }
  return pt(() => {
    t.addEventListener(e, s, n);
  }), s;
}
function wa(e, t, r, n, s) {
  var i = { capture: n, passive: s }, a = ba(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Oi(() => {
    t.removeEventListener(e, a, i);
  });
}
function Re(e, t, r) {
  (t[Ct] ?? (t[Ct] = {}))[e] = r;
}
function Tr(e) {
  for (var t = 0; t < e.length; t++)
    Zi.add(e[t]);
  for (var r of hn)
    r(e);
}
let Vn = null;
function pn(e) {
  var g, w;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Vn = e;
  var a = 0, o = Vn === e && e[Ct];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ct] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (i = /** @type {Element} */
  s[a] || e.target, i !== t) {
    Lr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = I, v = O;
    We(null), it(null);
    try {
      for (var p, b = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = (w = i[Ct]) == null ? void 0 : w[n];
          $ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && $.call(i, e);
        } catch (A) {
          p ? b.push(A) : p = A;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (p) {
        for (let A of b)
          queueMicrotask(() => {
            throw A;
          });
        throw p;
      }
    } finally {
      e[Ct] = t, delete e.currentTarget, We(d), it(v);
    }
  }
}
var ei;
const Zr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((ei = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ei.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function xa(e) {
  return (
    /** @type {string} */
    (Zr == null ? void 0 : Zr.createHTML(e)) ?? e
  );
}
function ya(e) {
  var t = $n("template");
  return t.innerHTML = xa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Wt(e, t) {
  var r = (
    /** @type {Effect} */
    O
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function G(e, t) {
  var r = (t & xs) !== 0, n = (t & ys) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (D)
      return Wt(N, null), N;
    s === void 0 && (s = ya(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(s)));
    var a = (
      /** @type {TemplateNode} */
      n || zi ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Wt(o, l);
    } else
      Wt(a, a);
    return a;
  };
}
function Qi() {
  if (D)
    return Wt(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ue();
  return e.append(t, r), Wt(t, r), e;
}
function U(e, t) {
  if (D) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      O
    );
    ((r.f & kt) === 0 || r.nodes.end === null) && (r.nodes.end = N), Gr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ka = ["touchstart", "touchmove"];
function Ea(e) {
  return ka.includes(e);
}
function _e(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function es(e, t) {
  return ts(e, t);
}
function $a(e, t) {
  dn(), t.intro = t.intro ?? !1;
  const r = t.target, n = D, s = N;
  try {
    for (var i = /* @__PURE__ */ Bt(r); i && (i.nodeType !== kr || /** @type {Comment} */
    i.data !== bn); )
      i = /* @__PURE__ */ st(i);
    if (!i)
      throw Qt;
    vt(!0), Se(
      /** @type {Comment} */
      i
    );
    const a = ts(e, { ...t, anchor: i });
    return vt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Qt && console.warn("Failed to hydrate: ", a), t.recover === !1 && Ls(), dn(), Ni(r), vt(!1), es(e, t);
  } finally {
    vt(n), Se(s);
  }
}
const zr = /* @__PURE__ */ new Map();
function ts(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: a = !0, transformError: o }) {
  dn();
  var l = void 0, u = da(() => {
    var d = r ?? t.appendChild(Ue());
    Js(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (b) => {
        ar({});
        var _ = (
          /** @type {ComponentContext} */
          Pe
        );
        if (i && (_.c = i), s && (n.$$events = s), D && Wt(
          /** @type {TemplateNode} */
          b,
          null
        ), l = e(b, n) || {}, D && (O.nodes.end = N, N === null || N.nodeType !== kr || /** @type {Comment} */
        N.data !== wn))
          throw Vr(), Qt;
        or();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), p = (b) => {
      for (var _ = 0; _ < b.length; _++) {
        var $ = b[_];
        if (!v.has($)) {
          v.add($);
          var g = Ea($);
          for (const B of [t, document]) {
            var w = zr.get(B);
            w === void 0 && (w = /* @__PURE__ */ new Map(), zr.set(B, w));
            var A = w.get($);
            A === void 0 ? (B.addEventListener($, pn, { passive: g }), w.set($, 1)) : w.set($, A + 1);
          }
        }
      }
    };
    return p(jr(Zi)), hn.add(p), () => {
      var g;
      for (var b of v)
        for (const w of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            zr.get(w)
          ), $ = (
            /** @type {number} */
            _.get(b)
          );
          --$ == 0 ? (w.removeEventListener(b, pn), _.delete(b), _.size === 0 && zr.delete(w)) : _.set(b, $);
        }
      hn.delete(p), d !== r && ((g = d.parentNode) == null || g.removeChild(d));
    };
  });
  return gn.set(l, u), l;
}
let gn = /* @__PURE__ */ new WeakMap();
function Ta(e, t) {
  const r = gn.get(e);
  return r ? (gn.delete(e), r(t)) : Promise.resolve();
}
var Xe, rt, Ne, Rt, wr, xr, Hr;
class qa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    X(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, Xe, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    M(this, rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, Rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, wr, !0);
    M(this, xr, () => {
      var t = (
        /** @type {Batch} */
        R
      );
      if (f(this, Xe).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, Xe).get(t)
        ), n = f(this, rt).get(r);
        if (n)
          Mn(n), f(this, Rt).delete(r);
        else {
          var s = f(this, Ne).get(r);
          s && (f(this, rt).set(r, s.effect), f(this, Ne).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, a] of f(this, Xe)) {
          if (f(this, Xe).delete(i), i === t)
            break;
          const o = f(this, Ne).get(a);
          o && (xe(o.effect), f(this, Ne).delete(a));
        }
        for (const [i, a] of f(this, rt)) {
          if (i === r || f(this, Rt).has(i)) continue;
          const o = () => {
            if (Array.from(f(this, Xe).values()).includes(i)) {
              var u = document.createDocumentFragment();
              ji(a, u), u.append(Ue()), f(this, Ne).set(i, { effect: a, fragment: u });
            } else
              xe(a);
            f(this, Rt).delete(i), f(this, rt).delete(i);
          };
          f(this, wr) || !n ? (f(this, Rt).add(i), Ot(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Hr, (t) => {
      f(this, Xe).delete(t);
      const r = Array.from(f(this, Xe).values());
      for (const [n, s] of f(this, Ne))
        r.includes(n) || (xe(s.effect), f(this, Ne).delete(n));
    });
    this.anchor = t, S(this, wr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      R
    ), s = Ri();
    if (r && !f(this, rt).has(t) && !f(this, Ne).has(t))
      if (s) {
        var i = document.createDocumentFragment(), a = Ue();
        i.append(a), f(this, Ne).set(t, {
          effect: Fe(() => r(a)),
          fragment: i
        });
      } else
        f(this, rt).set(
          t,
          Fe(() => r(this.anchor))
        );
    if (f(this, Xe).set(n, t), s) {
      for (const [o, l] of f(this, rt))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of f(this, Ne))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(f(this, xr)), n.ondiscard(f(this, Hr));
    } else
      D && (this.anchor = N), f(this, xr).call(this);
  }
}
Xe = new WeakMap(), rt = new WeakMap(), Ne = new WeakMap(), Rt = new WeakMap(), wr = new WeakMap(), xr = new WeakMap(), Hr = new WeakMap();
function Sa(e) {
  Pe === null && zs(), Pi(() => {
    const t = In(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nt(e, t, r = !1) {
  D && Gr();
  var n = new qa(e), s = r ? tr : 0;
  function i(a, o) {
    if (D) {
      const d = ui(e);
      var l;
      if (d === bn ? l = 0 : d === Ur ? l = !1 : l = parseInt(d.substring(1)), a !== l) {
        var u = Dr();
        Se(u), n.anchor = u, vt(!1), n.ensure(a, o), vt(!0);
        return;
      }
    }
    n.ensure(a, o);
  }
  Cn(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, i(l, o);
    }), a || i(!1, null);
  }, s);
}
function Aa(e, t, r) {
  for (var n = [], s = t.length, i, a = t.length, o = 0; o < s; o++) {
    let v = t[o];
    Ot(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            mn(jr(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Ni(d), d.append(u), e.items.clear();
    }
    mn(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function mn(e, t = !0) {
  for (var r = 0; r < e.length; r++)
    xe(e[r], t);
}
var Gn;
function Br(e, t, r, n, s, i = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & ti) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = D ? Se(/* @__PURE__ */ Bt(u)) : u.appendChild(Ue());
  }
  D && Gr();
  var d = null, v = /* @__PURE__ */ na(() => {
    var w = r();
    return ni(w) ? w : w == null ? [] : jr(w);
  }), p, b = !0;
  function _() {
    g.fallback = d, Ca(g, p, a, t, n), d !== null && (p.length === 0 ? (d.f & dt) === 0 ? Mn(d) : (d.f ^= dt, dr(d, null, a)) : Ot(d, () => {
      d = null;
    }));
  }
  var $ = Cn(() => {
    p = /** @type {V[]} */
    c(v);
    var w = p.length;
    let A = !1;
    if (D) {
      var B = ui(a) === Ur;
      B !== (w === 0) && (a = Dr(), Se(a), vt(!1), A = !0);
    }
    for (var W = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      R
    ), le = Ri(), P = 0; P < w; P += 1) {
      D && N.nodeType === kr && /** @type {Comment} */
      N.data === wn && (a = /** @type {Comment} */
      N, A = !0, vt(!1));
      var K = p[P], J = n(K, P), m = b ? null : o.get(J);
      m ? (m.v && nr(m.v, K), m.i && nr(m.i, P), le && ie.unskip_effect(m.e)) : (m = za(
        o,
        b ? a : Gn ?? (Gn = Ue()),
        K,
        J,
        P,
        s,
        t,
        r
      ), b || (m.e.f |= dt), o.set(J, m)), W.add(J);
    }
    if (w === 0 && i && !d && (b ? d = Fe(() => i(a)) : (d = Fe(() => i(Gn ?? (Gn = Ue()))), d.f |= dt)), w > W.size && Is(), D && w > 0 && Se(Dr()), !b)
      if (le) {
        for (const [k, Q] of o)
          W.has(k) || ie.skip_effect(Q.e);
        ie.oncommit(_), ie.ondiscard(() => {
        });
      } else
        _();
    A && vt(!0), c(v);
  }), g = { effect: $, items: o, outrogroups: null, fallback: d };
  b = !1, D && (a = N);
}
function fr(e) {
  for (; e !== null && (e.f & Qe) === 0; )
    e = e.next;
  return e;
}
function Ca(e, t, r, n, s) {
  var m, k, Q, ye, be, x, F, H, L;
  var i = (n & bs) !== 0, a = t.length, o = e.items, l = fr(e.effect.first), u, d = null, v, p = [], b = [], _, $, g, w;
  if (i)
    for (w = 0; w < a; w += 1)
      _ = t[w], $ = s(_, w), g = /** @type {EachItem} */
      o.get($).e, (g.f & dt) === 0 && ((k = (m = g.nodes) == null ? void 0 : m.a) == null || k.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(g));
  for (w = 0; w < a; w += 1) {
    if (_ = t[w], $ = s(_, w), g = /** @type {EachItem} */
    o.get($).e, e.outrogroups !== null)
      for (const z of e.outrogroups)
        z.pending.delete(g), z.done.delete(g);
    if ((g.f & dt) !== 0)
      if (g.f ^= dt, g === l)
        dr(g, null, r);
      else {
        var A = d ? d.next : l;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), _t(e, d, g), _t(e, g, A), dr(g, A, r), d = g, p = [], b = [], l = fr(d.next);
        continue;
      }
    if ((g.f & Oe) !== 0 && (Mn(g), i && ((ye = (Q = g.nodes) == null ? void 0 : Q.a) == null || ye.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(g))), g !== l) {
      if (u !== void 0 && u.has(g)) {
        if (p.length < b.length) {
          var B = b[0], W;
          d = B.prev;
          var ie = p[0], le = p[p.length - 1];
          for (W = 0; W < p.length; W += 1)
            dr(p[W], B, r);
          for (W = 0; W < b.length; W += 1)
            u.delete(b[W]);
          _t(e, ie.prev, le.next), _t(e, d, ie), _t(e, le, B), l = B, d = le, w -= 1, p = [], b = [];
        } else
          u.delete(g), dr(g, l, r), _t(e, g.prev, g.next), _t(e, g, d === null ? e.effect.first : d.next), _t(e, d, g), d = g;
        continue;
      }
      for (p = [], b = []; l !== null && l !== g; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), b.push(l), l = fr(l.next);
      if (l === null)
        continue;
    }
    (g.f & dt) === 0 && p.push(g), d = g, l = fr(g.next);
  }
  if (e.outrogroups !== null) {
    for (const z of e.outrogroups)
      z.pending.size === 0 && (mn(jr(z.done)), (be = e.outrogroups) == null || be.delete(z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var P = [];
    if (u !== void 0)
      for (g of u)
        (g.f & Oe) === 0 && P.push(g);
    for (; l !== null; )
      (l.f & Oe) === 0 && l !== e.fallback && P.push(l), l = fr(l.next);
    var K = P.length;
    if (K > 0) {
      var J = (n & ti) !== 0 && a === 0 ? r : null;
      if (i) {
        for (w = 0; w < K; w += 1)
          (F = (x = P[w].nodes) == null ? void 0 : x.a) == null || F.measure();
        for (w = 0; w < K; w += 1)
          (L = (H = P[w].nodes) == null ? void 0 : H.a) == null || L.fix();
      }
      Aa(e, P, J);
    }
  }
  i && pt(() => {
    var z, Z;
    if (v !== void 0)
      for (g of v)
        (Z = (z = g.nodes) == null ? void 0 : z.a) == null || Z.apply();
  });
}
function za(e, t, r, n, s, i, a, o) {
  var l = (a & ms) !== 0 ? (a & ws) === 0 ? /* @__PURE__ */ Ai(r, !1, !1) : Dt(r) : null, u = (a & _s) !== 0 ? Dt(s) : null;
  return {
    v: l,
    i: u,
    e: Fe(() => (i(t, l ?? r, u ?? s, o), () => {
      e.delete(n);
    }))
  };
}
function dr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & dt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(n)
      );
      if (i.before(n), n === s)
        return;
      n = a;
    }
}
function _t(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function qr(e, t) {
  Di(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const s = $n("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function _n(e, t, r) {
  Di(() => {
    var n = In(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var s = !1, i = (
        /** @type {any} */
        {}
      );
      An(() => {
        var a = r();
        _a(a), s && ci(i, a) && (i = a, n.update(a));
      }), s = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function rs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = rs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ma() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = rs(e)) && (n && (n += " "), n += t);
  return n;
}
function Ia(e) {
  return typeof e == "object" ? Ma(e) : e ?? "";
}
const Xn = [...` 	
\r\f \v\uFEFF`];
function Na(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, a = 0; (a = n.indexOf(s, a)) >= 0; ) {
          var o = a + i;
          (a === 0 || Xn.includes(n[a - 1])) && (o === n.length || Xn.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function Ra(e, t) {
  return e == null ? null : String(e);
}
function sr(e, t, r, n, s, i) {
  var a = e.__className;
  if (D || a !== r || a === void 0) {
    var o = Na(r, n, i);
    (!D || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (i && s !== i)
    for (var l in i) {
      var u = !!i[l];
      (s == null || u !== !!s[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Nn(e, t, r, n) {
  var s = e.__style;
  if (D || s !== t) {
    var i = Ra(t);
    (!D || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  }
  return n;
}
const Oa = Symbol("is custom element"), Pa = Symbol("is html"), La = li ? "link" : "LINK", Da = li ? "progress" : "PROGRESS";
function Ba(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Ft(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          Ft(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, pt(r), la();
  }
}
function Fa(e, t) {
  var r = ns(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Da) || (e.value = t ?? "");
}
function Ft(e, t, r, n) {
  var s = ns(e);
  D && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === La) || s[t] !== (s[t] = r) && (t === "loading" && (e[Cs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ha(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ns(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Oa]: e.nodeName.includes("-"),
      [Pa]: e.namespaceURI === ri
    })
  );
}
var Kn = /* @__PURE__ */ new Map();
function Ha(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Kn.get(t);
  if (r) return r;
  Kn.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = ii(s);
    for (var a in n)
      n[a].set && r.push(a);
    s = xn(s);
  }
  return r;
}
function Y(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, a = () => (i && (i = !1, s = /** @type {V} */
  n), s), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = a());
  var l;
  l = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p === void 0 ? a() : (i = !0, p);
  };
  var u = !1, d = /* @__PURE__ */ Kr(() => (u = !1, l())), v = (
    /** @type {Effect} */
    O
  );
  return (
    /** @type {() => V} */
    (function(p, b) {
      if (arguments.length > 0) {
        const _ = b ? c(d) : p;
        return E(d, _), u = !0, s !== void 0 && (s = _), p;
      }
      return Et && u || (v.f & ht) !== 0 ? d.v : c(d);
    })
  );
}
function Ua(e) {
  return new ja(e);
}
var ct, Be;
class ja {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    M(this, ct);
    /** @type {Record<string, any>} */
    M(this, Be);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var l = /* @__PURE__ */ Ai(o, !1, !1);
      return r.set(a, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return c(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === As ? !0 : (c(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return E(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    S(this, Be, (t.hydrate ? $a : es)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && j(), S(this, ct, s.$$events);
    for (const a of Object.keys(f(this, Be)))
      a === "$set" || a === "$destroy" || a === "$on" || Lr(this, a, {
        get() {
          return f(this, Be)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, Be)[a] = o;
        },
        enumerable: !0
      });
    f(this, Be).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, f(this, Be).$destroy = () => {
      Ta(f(this, Be));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, Be).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, ct)[t] = f(this, ct)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return f(this, ct)[t].push(n), () => {
      f(this, ct)[t] = f(this, ct)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    f(this, Be).$destroy();
  }
}
ct = new WeakMap(), Be = new WeakMap();
let is;
typeof HTMLElement == "function" && (is = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    X(this, "$$ctor");
    /** Slots */
    X(this, "$$s");
    /** @type {any} The Svelte component instance */
    X(this, "$$c");
    /** Whether or not the custom element is connected */
    X(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    X(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    X(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    X(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    X(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    X(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    X(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    X(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = r, n && (this.$$shadowRoot = this.attachShadow(n));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const s = this.$$c.$on(t, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let r = function(i) {
        return (a) => {
          const o = $n("slot");
          i !== "default" && (o.name = i), U(a, o);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Wa(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Or(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ua({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = ca(() => {
        An(() => {
          var i;
          this.$$r = !0;
          for (const a of Pr(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Or(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const o = this.$$c.$on(i, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Or(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Pr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Or(e, t, r, n) {
  var i;
  const s = (i = r[e]) == null ? void 0 : i.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Wa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Sr(e, t, r, n, s, i) {
  let a = class extends is {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Pr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Pr(t).forEach((o) => {
    Lr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var v;
        l = Or(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var d = (v = jt(u, o)) == null ? void 0 : v.get;
          d ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), n.forEach((o) => {
    Lr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
async function cr(e) {
  const t = e.headers.get("content-type") || "";
  if (!t.includes("application/json"))
    throw new Error(`Expected JSON, got: ${t || "unknown"}`);
  return await e.json();
}
async function Mr(e) {
  var r;
  if ((e.headers.get("content-type") || "").includes("application/json")) {
    const n = await e.json().catch(() => null), s = (r = n == null ? void 0 : n.error) == null ? void 0 : r.message;
    if (typeof s == "string" && s.trim() !== "")
      return `HTTP ${e.status}: ${s}`;
  }
  return `HTTP ${e.status}`;
}
class Ya {
  constructor(t = "/api/explorer") {
    X(this, "listCache", /* @__PURE__ */ new Map());
    X(this, "detailsCache", /* @__PURE__ */ new Map());
    X(this, "accessToken", null);
    X(this, "refreshPromise", null);
    X(this, "authBase", "/api/auth");
    this.apiBase = t;
  }
  setApiBase(t) {
    this.apiBase = t.replace(/\/$/, ""), this.listCache.clear(), this.detailsCache.clear();
  }
  setAuthBase(t) {
    this.authBase = t.replace(/\/$/, "");
  }
  getAccessToken() {
    return this.accessToken;
  }
  syncGlobalAccessToken() {
    const t = window.getAccessToken;
    typeof t == "function" && (this.accessToken = t() ?? null);
  }
  async refreshAccessToken() {
    if (this.syncGlobalAccessToken(), this.accessToken)
      return !0;
    if (this.refreshPromise)
      return this.refreshPromise;
    this.refreshPromise = (async () => {
      const t = window;
      if (typeof t.refreshAccessToken == "function") {
        const s = await t.refreshAccessToken();
        return this.accessToken = typeof t.getAccessToken == "function" ? t.getAccessToken() ?? null : this.accessToken, s && this.accessToken !== null;
      }
      const r = await fetch(`${this.authBase}/refresh`, {
        method: "POST",
        credentials: "same-origin"
      });
      if (!r.ok)
        return this.accessToken = null, !1;
      const n = await cr(r);
      return this.accessToken = typeof n.accessToken == "string" ? n.accessToken : null, this.accessToken !== null;
    })();
    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }
  async whoAmI() {
    const t = await this.authorizedFetch(`${this.authBase}/whoami`);
    return t.ok ? cr(t) : null;
  }
  async list(t, r, n) {
    const s = `${r}:${t}`, i = this.listCache.get(s);
    if (i)
      return i;
    const a = `${this.apiBase}/list?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = this.authorizedFetch(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Mr(l));
      return cr(l);
    });
    this.listCache.set(s, o);
    try {
      return await o;
    } catch (l) {
      throw this.listCache.delete(s), l;
    }
  }
  async details(t, r, n) {
    const s = `${r}:${t}`, i = this.detailsCache.get(s);
    if (i)
      return i;
    const a = `${this.apiBase}/details?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = this.authorizedFetch(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Mr(l));
      return cr(l);
    });
    this.detailsCache.set(s, o);
    try {
      return await o;
    } catch (l) {
      throw this.detailsCache.delete(s), l;
    }
  }
  async getDownloadTicket(t, r) {
    const n = `${this.apiBase}/ticket?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, s = await this.authorizedFetch(n);
    if (!s.ok)
      throw new Error(await Mr(s));
    return cr(s);
  }
  async getDownloadUrl(t, r) {
    return (await this.getDownloadTicket(t, r)).url;
  }
  async downloadBlob(t, r) {
    const n = await this.getDownloadUrl(t, r), s = await fetch(n, { credentials: "same-origin" });
    if (!s.ok)
      throw new Error(await Mr(s));
    return s.blob();
  }
  async downloadText(t, r) {
    return (await this.downloadBlob(t, r)).text();
  }
  async authorizedFetch(t, r = {}, n = !0) {
    this.syncGlobalAccessToken();
    const s = new Headers(r.headers ?? {});
    this.accessToken && s.set("Authorization", `Bearer ${this.accessToken}`);
    const i = await fetch(t, {
      credentials: "same-origin",
      ...r,
      headers: s
    });
    if (i.status !== 401 || !n || !await this.refreshAccessToken() || !this.accessToken)
      return i;
    const o = new Headers(r.headers ?? {});
    return o.set("Authorization", `Bearer ${this.accessToken}`), fetch(t, {
      credentials: "same-origin",
      ...r,
      headers: o
    });
  }
}
const ss = "efsdb_explorer_layout";
function Va() {
  try {
    const e = localStorage.getItem(ss);
    if (!e) throw new Error("nope");
    const t = JSON.parse(e);
    return {
      coverHeight: Qr(t.coverHeight ?? 320, 150, 600),
      previewWidth: Qr(t.previewWidth ?? 350, 200, 560),
      scale: Qr(t.scale ?? 1, 0.6, 1.6)
    };
  } catch {
    return { coverHeight: 320, previewWidth: 350, scale: 1 };
  }
}
function Jn(e) {
  localStorage.setItem(ss, JSON.stringify(e));
}
function Qr(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ut(e, t) {
  let r = !1, n = 0;
  function s(o) {
    if (!r) return;
    const l = t.axis === "y" ? o.clientY : o.clientX;
    t.onDelta(l - n), n = l, o.preventDefault();
  }
  function i() {
    var o;
    r && (r = !1, window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", i), (o = t.onDone) == null || o.call(t));
  }
  function a(o) {
    r = !0, n = t.axis === "y" ? o.clientY : o.clientX, window.addEventListener("mousemove", s), window.addEventListener("mouseup", i), o.preventDefault();
  }
  return e.addEventListener("mousedown", a), {
    destroy() {
      e.removeEventListener("mousedown", a), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", i);
    }
  };
}
var Ga = /* @__PURE__ */ G('<span class="sep svelte-1b5lykn">/</span>'), Xa = /* @__PURE__ */ G('<!> <button class="crumb svelte-1b5lykn" type="button"> </button>', 1), Ka = /* @__PURE__ */ G('<div class="toolbar svelte-1b5lykn"><div class="left svelte-1b5lykn"><button class="btn svelte-1b5lykn" type="button" title="Home">Home</button> <button class="btn svelte-1b5lykn" type="button" title="Open">Open</button> <div class="seg svelte-1b5lykn" role="group" aria-label="View mode"><button type="button">Natural</button> <button type="button">Raw</button></div></div> <div class="crumbs svelte-1b5lykn" aria-label="Breadcrumbs"></div> <div class="right svelte-1b5lykn"><label class="scale svelte-1b5lykn"><span>Scale</span> <input type="range" min="0.6" max="1.6" step="0.05" class="svelte-1b5lykn"/></label></div></div>');
const Ja = {
  hash: "svelte-1b5lykn",
  code: ".toolbar.svelte-1b5lykn {display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border);background:var(--panel);}.left.svelte-1b5lykn {display:inline-flex;gap:8px;align-items:center;}.btn.svelte-1b5lykn {padding:6px 10px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.btn.svelte-1b5lykn:disabled {opacity:0.5;cursor:not-allowed;}.seg.svelte-1b5lykn {display:inline-flex;border:1px solid var(--border);border-radius:12px;overflow:hidden;}.segbtn.svelte-1b5lykn {padding:6px 10px;border:0;background:transparent;color:var(--muted);cursor:pointer;}.segbtn.svelte-1b5lykn:disabled {cursor:not-allowed;opacity:0.45;}.segbtn.active.svelte-1b5lykn {background:var(--primary);color:var(--primaryText);}.crumbs.svelte-1b5lykn {overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--muted);}.crumb.svelte-1b5lykn {border:0;background:transparent;color:var(--muted);cursor:pointer;padding:2px 4px;border-radius:8px;}.crumb.svelte-1b5lykn:hover {color:var(--text);background:var(--hover);}.sep.svelte-1b5lykn {padding:0 2px;color:var(--muted);opacity:0.7;}.right.svelte-1b5lykn {display:inline-flex;align-items:center;}.scale.svelte-1b5lykn {display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:12px;}input[type='range'].svelte-1b5lykn {width:140px;}"
};
function as(e, t) {
  ar(t, !0), qr(e, Ja);
  let r = Y(t, "mode"), n = Y(t, "rawEnabled"), s = Y(t, "breadcrumbs"), i = Y(t, "scale"), a = Y(t, "canOpen"), o = Y(t, "onHome"), l = Y(t, "onOpen"), u = Y(t, "onSetMode"), d = Y(t, "onScale"), v = Y(t, "onCrumb");
  var p = {
    get mode() {
      return r();
    },
    set mode(m) {
      r(m), j();
    },
    get rawEnabled() {
      return n();
    },
    set rawEnabled(m) {
      n(m), j();
    },
    get breadcrumbs() {
      return s();
    },
    set breadcrumbs(m) {
      s(m), j();
    },
    get scale() {
      return i();
    },
    set scale(m) {
      i(m), j();
    },
    get canOpen() {
      return a();
    },
    set canOpen(m) {
      a(m), j();
    },
    get onHome() {
      return o();
    },
    set onHome(m) {
      o(m), j();
    },
    get onOpen() {
      return l();
    },
    set onOpen(m) {
      l(m), j();
    },
    get onSetMode() {
      return u();
    },
    set onSetMode(m) {
      u(m), j();
    },
    get onScale() {
      return d();
    },
    set onScale(m) {
      d(m), j();
    },
    get onCrumb() {
      return v();
    },
    set onCrumb(m) {
      v(m), j();
    }
  }, b = Ka(), _ = q(b), $ = q(_), g = V($, 2), w = V(g, 2), A = q(w);
  let B;
  var W = V(A, 2);
  let ie;
  T(w), T(_);
  var le = V(_, 2);
  Br(le, 23, s, (m) => m.path, (m, k, Q) => {
    var ye = Xa(), be = Er(ye);
    {
      var x = (L) => {
        var z = Ga();
        U(L, z);
      };
      nt(be, (L) => {
        c(Q) > 0 && L(x);
      });
    }
    var F = V(be, 2), H = q(F, !0);
    T(F), we(() => _e(H, c(k).label)), Re("click", F, () => v()(c(k).path)), U(m, ye);
  }), T(le);
  var P = V(le, 2), K = q(P), J = V(q(K), 2);
  return Ba(J), T(K), T(P), T(b), we(() => {
    g.disabled = !a(), B = sr(A, 1, "segbtn svelte-1b5lykn", null, B, { active: r() === "natural" }), ie = sr(W, 1, "segbtn svelte-1b5lykn", null, ie, { active: r() === "raw" }), W.disabled = !n(), Fa(J, i());
  }), Re("click", $, function(...m) {
    var k;
    (k = o()) == null || k.apply(this, m);
  }), Re("click", g, function(...m) {
    var k;
    (k = l()) == null || k.apply(this, m);
  }), Re("click", A, () => u()("natural")), Re("click", W, () => u()("raw")), Re("input", J, (m) => d()(parseFloat(m.target.value))), U(e, b), or(p);
}
Tr(["click", "input"]);
Sr(
  as,
  {
    mode: {},
    rawEnabled: {},
    breadcrumbs: {},
    scale: {},
    canOpen: {},
    onHome: {},
    onOpen: {},
    onSetMode: {},
    onScale: {},
    onCrumb: {}
  },
  [],
  [],
  { mode: "open" }
);
var Za = /* @__PURE__ */ G('<div class="loading svelte-1f5ee7g"><div class="spinner svelte-1f5ee7g" aria-hidden="true"></div> <div class="loadingText svelte-1f5ee7g">Loading…</div></div>'), Qa = /* @__PURE__ */ G('<div class="empty svelte-1f5ee7g"> </div>'), eo = /* @__PURE__ */ G('<span class="arrow svelte-1f5ee7g" aria-hidden="true">›</span>'), to = /* @__PURE__ */ G('<button type="button"><span class="left svelte-1f5ee7g"><span class="ico svelte-1f5ee7g" aria-hidden="true"> </span> <span> </span></span> <!></button>'), ro = /* @__PURE__ */ G('<div class="list svelte-1f5ee7g" role="list"><!></div>'), no = /* @__PURE__ */ G('<section class="col svelte-1f5ee7g"><header class="colHeader svelte-1f5ee7g"> </header> <!></section>'), io = /* @__PURE__ */ G('<div class="cols svelte-1f5ee7g" role="region" aria-label="Miller columns"></div>');
const so = {
  hash: "svelte-1f5ee7g",
  code: `.cols.svelte-1f5ee7g {display:flex;gap:10px;overflow:auto;padding:10px;background:var(--bg);height:100%;align-items:stretch;}.col.svelte-1f5ee7g {width:260px;min-width:260px;border:1px solid var(--border);border-radius:14px;background:var(--panel);overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;}.colHeader.svelte-1f5ee7g {padding:10px 12px;border-bottom:1px solid var(--border);font-weight:700;font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}.list.svelte-1f5ee7g {padding:8px;display:flex;flex-direction:column;gap:6px;min-height:0;flex:1 1 auto;overflow:auto;}.row.svelte-1f5ee7g {display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border-radius:12px;border:1px solid transparent;background:transparent;color:var(--text);cursor:pointer;text-align:left;}.row.svelte-1f5ee7g:hover {background:var(--hover);}.row.active.svelte-1f5ee7g {background:var(--primary);color:var(--primaryText);border-color:color-mix(in oklab, var(--primary), black 15%);}.row.dim.svelte-1f5ee7g:not(.active) {opacity:0.55;}.left.svelte-1f5ee7g {min-width:0;display:inline-flex;align-items:center;gap:8px;}.ico.svelte-1f5ee7g {width:18px;opacity:0.85;}.label.svelte-1f5ee7g {min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-size:13px;}.label.muted.svelte-1f5ee7g {color:var(--muted);}.row.active.svelte-1f5ee7g .label:where(.svelte-1f5ee7g) {color:var(--primaryText);}.label.warn.svelte-1f5ee7g {color:var(--warn);}.label.info.svelte-1f5ee7g {color:var(--info);}.arrow.svelte-1f5ee7g {color:inherit;opacity:0.7;font-size:16px;}.loading.svelte-1f5ee7g {display:grid;place-items:center;padding:24px;gap:10px;color:var(--muted);}.spinner.svelte-1f5ee7g {width:22px;height:22px;border-radius:999px;border:3px solid color-mix(in oklab, var(--muted), transparent 65%);border-top-color:var(--primary);
    animation: svelte-1f5ee7g-spin 0.8s linear infinite;}
  @keyframes svelte-1f5ee7g-spin {
    to {
      transform: rotate(360deg);
    }
  }.loadingText.svelte-1f5ee7g {font-size:12px;}.empty.svelte-1f5ee7g {min-height:180px;display:grid;place-items:center;padding:18px;text-align:center;color:var(--muted);font-size:12px;line-height:1.6;border:1px dashed color-mix(in oklab, var(--border), transparent 30%);border-radius:12px;background:color-mix(in oklab, var(--panel), transparent 8%);}`
};
function os(e, t) {
  ar(t, !0), qr(e, so);
  let r = Y(t, "mode"), n = Y(t, "columns"), s = Y(t, "onItemClick");
  function i(u) {
    return u.type === "dir" ? "📁" : u.kind === "manifest" ? "📜" : u.kind === "chunk" ? "🧩" : "📄";
  }
  function a(u) {
    return r() !== "raw" ? "label muted" : u.kind === "manifest" ? "label warn" : u.kind === "chunk" ? "label info" : "label muted";
  }
  var o = {
    get mode() {
      return r();
    },
    set mode(u) {
      r(u), j();
    },
    get columns() {
      return n();
    },
    set columns(u) {
      n(u), j();
    },
    get onItemClick() {
      return s();
    },
    set onItemClick(u) {
      s(u), j();
    }
  }, l = io();
  return Br(l, 23, n, (u) => u.path, (u, d, v) => {
    var p = no(), b = q(p), _ = q(b, !0);
    T(b);
    var $ = V(b, 2);
    {
      var g = (A) => {
        var B = Za();
        U(A, B);
      }, w = (A) => {
        var B = ro(), W = q(B);
        {
          var ie = (P) => {
            var K = Qa(), J = q(K, !0);
            T(K), we(() => _e(J, r() === "raw" ? "No explorer-visible items in this location yet." : "No decoded content is available in this location yet.")), U(P, K);
          }, le = (P) => {
            var K = Qi(), J = Er(K);
            Br(J, 17, () => c(d).items, (m) => m.rawPath ?? m.name, (m, k) => {
              var Q = to();
              let ye;
              var be = q(Q), x = q(be), F = q(x, !0);
              T(x);
              var H = V(x, 2), L = q(H, !0);
              T(H), T(be);
              var z = V(be, 2);
              {
                var Z = (se) => {
                  var ke = eo();
                  U(se, ke);
                };
                nt(z, (se) => {
                  c(k).type === "dir" && se(Z);
                });
              }
              T(Q), we(
                (se, ke) => {
                  ye = sr(Q, 1, "row svelte-1f5ee7g", null, ye, {
                    active: c(d).selectedItem === c(k).name,
                    dim: r() === "raw" && c(k).type === "dir"
                  }), _e(F, se), sr(H, 1, ke, "svelte-1f5ee7g"), Ft(H, "title", c(k).name), _e(L, c(k).name);
                },
                [
                  () => i(c(k)),
                  () => Ia(a(c(k)))
                ]
              ), Re("click", Q, () => s()(c(v), c(k))), U(m, Q);
            }), U(P, K);
          };
          nt(W, (P) => {
            c(d).items.length === 0 ? P(ie) : P(le, !1);
          });
        }
        T(B), U(A, B);
      };
      nt($, (A) => {
        c(d).loading ? A(g) : A(w, !1);
      });
    }
    T(p), we(
      (A) => {
        Ft(p, "aria-label", `Column ${c(v) + 1}`), _e(_, A);
      },
      [
        () => c(v) === 0 ? "ROOT" : c(d).path.split("/").filter(Boolean).pop()
      ]
    ), U(u, p);
  }), T(l), U(e, l), or(o);
}
Tr(["click"]);
Sr(os, { mode: {}, columns: {}, onItemClick: {} }, [], [], { mode: "open" });
var ao = /* @__PURE__ */ G('<div class="empty svelte-1nqzsqz"><div class="sym svelte-1nqzsqz">∅</div> <div class="lbl svelte-1nqzsqz">Empty</div></div>'), oo = /* @__PURE__ */ G('<button type="button"><div class="ico svelte-1nqzsqz"> </div> <div class="name svelte-1nqzsqz"> </div> <div class="size svelte-1nqzsqz"> </div></button>'), lo = /* @__PURE__ */ G('<div class="coverPane svelte-1nqzsqz"><div class="coverHeader svelte-1nqzsqz"><button class="navBtn svelte-1nqzsqz" type="button" aria-label="Previous">‹</button> <div class="title svelte-1nqzsqz">Coverflow</div> <button class="navBtn svelte-1nqzsqz" type="button" aria-label="Next">›</button></div> <div class="stage svelte-1nqzsqz" role="group" aria-label="Coverflow stage"><!></div></div>');
const uo = {
  hash: "svelte-1nqzsqz",
  code: ".coverPane.svelte-1nqzsqz {border-bottom:1px solid var(--border);background:var(--bg);}.coverHeader.svelte-1nqzsqz {display:grid;grid-template-columns:34px 1fr 34px;align-items:center;padding:8px 10px;color:var(--muted);font-size:12px;}.navBtn.svelte-1nqzsqz {width:34px;height:30px;border-radius:10px;border:1px solid var(--border);background:var(--panel);color:var(--text);cursor:pointer;}.title.svelte-1nqzsqz {text-align:center;text-transform:uppercase;letter-spacing:0.08em;font-weight:800;opacity:0.8;}.stage.svelte-1nqzsqz {height:100%;min-height:220px;perspective:1100px;display:grid;place-items:center;overflow:hidden;user-select:none;position:relative;padding:10px;touch-action:pan-y;}.card.svelte-1nqzsqz {position:absolute;width:220px;height:170px;border-radius:18px;border:1px solid var(--border);background:var(--panel);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-style:preserve-3d;cursor:pointer;transition:transform 120ms ease, opacity 120ms ease;}.card.active.svelte-1nqzsqz {border-color:color-mix(in oklab, var(--primary), black 20%);box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);}.ico.svelte-1nqzsqz {font-size:40px;opacity:0.9;}.name.svelte-1nqzsqz {width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--muted);font-weight:700;}.size.svelte-1nqzsqz {font-size:11px;color:var(--muted);opacity:0.8;}.empty.svelte-1nqzsqz {text-align:center;color:var(--muted);opacity:0.6;}.sym.svelte-1nqzsqz {font-size:56px;margin-bottom:4px;}.lbl.svelte-1nqzsqz {font-size:11px;letter-spacing:0.12em;text-transform:uppercase;}"
};
function ls(e, t) {
  ar(t, !0), qr(e, uo);
  let r = Y(t, "items"), n = Y(t, "selectedName"), s = Y(t, "mode"), i = Y(t, "scale"), a = Y(t, "onNavToIndex"), o = 320, l = 250, u = /* @__PURE__ */ ee(null), d = /* @__PURE__ */ ee(!1), v = /* @__PURE__ */ ee(0), p = /* @__PURE__ */ ee(0);
  function b(x) {
    return x.type === "dir" ? s() === "raw" ? "🗂️" : "📁" : x.kind === "image" ? "🖼️" : x.kind === "video" ? "🎬" : "📄";
  }
  function _() {
    const x = r().findIndex((F) => F.name === n());
    return x < 0 ? 0 : x;
  }
  function $(x) {
    if (!r().length) return;
    const F = _(), H = Math.max(0, Math.min(r().length - 1, F + x));
    a()(H);
  }
  function g(x) {
    x.preventDefault(), !c(u) && (E(u, window.setTimeout(() => E(u, null), 30), !0), $(x.deltaY > 0 ? 1 : -1));
  }
  function w(x) {
    r().length && (E(d, !0), E(v, x.clientX, !0), E(p, _(), !0), x.preventDefault());
  }
  function A(x) {
    if (!c(d)) return;
    const F = x.clientX - c(v), H = -Math.round(F / 50), L = Math.max(0, Math.min(r().length - 1, c(p) + H));
    a()(L);
  }
  function B() {
    E(d, !1);
  }
  function W(x) {
    const F = (Z) => w(Z), H = (Z) => A(Z), L = () => B(), z = () => B();
    return x.addEventListener("mousedown", F), x.addEventListener("mousemove", H), x.addEventListener("mouseup", L), x.addEventListener("mouseleave", z), {
      destroy() {
        x.removeEventListener("mousedown", F), x.removeEventListener("mousemove", H), x.removeEventListener("mouseup", L), x.removeEventListener("mouseleave", z);
      }
    };
  }
  const ie = /* @__PURE__ */ ot(() => {
    const x = _();
    return r().map((F, H) => {
      const L = H - x, z = Math.abs(L), Z = i(), se = o * Z, ke = l * Z;
      if (z > 6)
        return { item: F, i: H, hidden: !0, style: "" };
      let Ae = L * se, Ye = -z * ke, ce = 0;
      const h = Math.max(0.72, 1 - z * 0.08) * Z;
      L === -1 && (Ae -= se * 0.4), L === 1 && (Ae += se * 0.4), L < 0 ? (Ae += se * 0.6, ce = 45) : L > 0 ? (Ae -= se * 0.6, ce = -45) : Ye += 100 * Z;
      const y = Math.max(0.3, 1 - z * 0.15), C = 100 - z, ge = `below 2px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,${Math.max(0, 0.2 - z * 0.05)}) 100%)`, oe = `transform: translateX(${Ae}px) translateZ(${Ye}px) rotateY(${ce}deg) scale(${h});opacity:${y}; z-index:${C};-webkit-box-reflect:${ge};`;
      return { item: F, i: H, hidden: !1, style: oe };
    });
  });
  var le = {
    get items() {
      return r();
    },
    set items(x) {
      r(x), j();
    },
    get selectedName() {
      return n();
    },
    set selectedName(x) {
      n(x), j();
    },
    get mode() {
      return s();
    },
    set mode(x) {
      s(x), j();
    },
    get scale() {
      return i();
    },
    set scale(x) {
      i(x), j();
    },
    get onNavToIndex() {
      return a();
    },
    set onNavToIndex(x) {
      a(x), j();
    }
  }, P = lo(), K = q(P), J = q(K), m = V(J, 4);
  T(K);
  var k = V(K, 2), Q = q(k);
  {
    var ye = (x) => {
      var F = ao();
      U(x, F);
    }, be = (x) => {
      var F = Qi(), H = Er(F);
      Br(H, 17, () => c(ie), (L) => L.item.rawPath ?? L.item.name, (L, z) => {
        var Z = oo();
        let se;
        var ke = q(Z), Ae = q(ke, !0);
        T(ke);
        var Ye = V(ke, 2), ce = q(Ye, !0);
        T(Ye);
        var h = V(Ye, 2), y = q(h, !0);
        T(h), T(Z), we(
          (C) => {
            se = sr(Z, 1, "card svelte-1nqzsqz", null, se, { active: c(z).item.name === n() }), Nn(Z, c(z).hidden ? "display:none;" : c(z).style), _e(Ae, C), Ft(Ye, "title", c(z).item.name), _e(ce, c(z).item.name), _e(y, typeof c(z).item.size == "number" ? c(z).item.size : "");
          },
          [() => b(c(z).item)]
        ), Re("click", Z, () => a()(c(z).i)), U(L, Z);
      }), U(x, F);
    };
    nt(Q, (x) => {
      r().length ? x(be, !1) : x(ye);
    });
  }
  return T(k), _n(k, (x) => W == null ? void 0 : W(x)), T(P), wa("wheel", P, g), Re("click", J, () => $(-1)), Re("click", m, () => $(1)), U(e, P), or(le);
}
Tr(["click"]);
Sr(
  ls,
  {
    items: {},
    selectedName: {},
    mode: {},
    scale: {},
    onNavToIndex: {}
  },
  [],
  [],
  { mode: "open" }
);
var fo = /* @__PURE__ */ G('<div class="empty svelte-xr50ae">No Selection</div>'), co = /* @__PURE__ */ G('<div class="empty svelte-xr50ae">Loading details…</div>'), vo = /* @__PURE__ */ G('<div class="err svelte-xr50ae"> </div>'), ho = /* @__PURE__ */ G('<div class="imgWrap svelte-xr50ae"><img class="svelte-xr50ae"/></div>'), po = /* @__PURE__ */ G('<pre class="code svelte-xr50ae"> </pre>'), go = /* @__PURE__ */ G('<div class="fileBadge svelte-xr50ae"> </div>'), mo = /* @__PURE__ */ G('<!> <div class="meta svelte-xr50ae"><div class="name svelte-xr50ae"> </div> <div class="sub svelte-xr50ae"> </div></div> <div class="paths svelte-xr50ae"><div class="pathsHdr svelte-xr50ae">Path</div> <button class="pathBox svelte-xr50ae" type="button" title="Copy"> </button></div>', 1), _o = /* @__PURE__ */ G('<aside class="pane svelte-xr50ae"><header class="hdr svelte-xr50ae"><div class="ttl svelte-xr50ae">Preview</div> <button class="btn svelte-xr50ae" type="button" title="Toggle preview">⟷</button></header> <div class="body svelte-xr50ae"><!></div></aside>');
const bo = {
  hash: "svelte-xr50ae",
  code: ".pane.svelte-xr50ae {border-left:1px solid var(--border);background:var(--panel);height:100%;display:flex;flex-direction:column;overflow:hidden;}.hdr.svelte-xr50ae {display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--border);}.ttl.svelte-xr50ae {font-weight:800;letter-spacing:0.08em;text-transform:uppercase;font-size:12px;color:var(--muted);}.btn.svelte-xr50ae {width:34px;height:30px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.body.svelte-xr50ae {padding:12px;overflow:auto;height:100%;}.empty.svelte-xr50ae {height:100%;display:grid;place-items:center;color:var(--muted);opacity:0.7;font-style:italic;}.err.svelte-xr50ae {padding:10px;border-radius:12px;border:1px solid color-mix(in oklab, var(--danger), transparent 55%);background:color-mix(in oklab, var(--danger), transparent 85%);color:var(--text);}.imgWrap.svelte-xr50ae {background:color-mix(in oklab, black, transparent 65%);border:1px solid var(--border);border-radius:14px;padding:10px;display:grid;place-items:center;margin-bottom:12px;}img.svelte-xr50ae {max-height:220px;max-width:100%;object-fit:contain;border-radius:10px;}.code.svelte-xr50ae {background:var(--codeBg);border:1px solid var(--border);border-radius:14px;padding:10px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:12px;white-space:pre-wrap;max-height:260px;overflow:auto;margin-bottom:12px;}.fileBadge.svelte-xr50ae {border:1px solid var(--border);background:var(--card);border-radius:14px;padding:26px 12px;display:grid;place-items:center;font-weight:900;color:var(--muted);margin-bottom:12px;}.meta.svelte-xr50ae {margin-bottom:10px;}.name.svelte-xr50ae {font-weight:900;color:var(--text);word-break:break-word;}.sub.svelte-xr50ae {color:var(--muted);font-size:12px;margin-top:2px;}.paths.svelte-xr50ae {border-top:1px solid var(--border);padding-top:10px;}.pathsHdr.svelte-xr50ae {font-size:11px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-bottom:8px;}.pathBox.svelte-xr50ae {width:100%;text-align:left;border-radius:12px;border:1px solid var(--border);background:color-mix(in oklab, black, transparent 75%);color:var(--muted);padding:10px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:12px;word-break:break-all;cursor:pointer;}.pathBox.svelte-xr50ae:hover {color:var(--text);}"
};
function us(e, t) {
  ar(t, !0), qr(e, bo);
  let r = Y(t, "client"), n = Y(t, "mode"), s = Y(t, "activeItem"), i = Y(t, "widthPx"), a = Y(t, "onToggle"), o = /* @__PURE__ */ ee(null), l = /* @__PURE__ */ ee("idle"), u = /* @__PURE__ */ ee(""), d = /* @__PURE__ */ ee(null), v = null;
  function p(m) {
    return (m.ext || "").toLowerCase();
  }
  function b(m) {
    const k = p(m);
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(k);
  }
  async function _() {
    if (c(d) && (URL.revokeObjectURL(c(d)), E(d, null)), E(o, null), !s()) {
      E(l, "idle");
      return;
    }
    E(l, "loading"), E(u, ""), v == null || v.abort(), v = new AbortController();
    const m = s().rawPath || s().name;
    try {
      const k = await r().details(m, n(), v.signal);
      if (E(o, k, !0), b(k)) {
        const Q = await r().downloadBlob(k.rawPath, n());
        E(d, URL.createObjectURL(Q), !0);
      }
      E(l, "idle");
    } catch (k) {
      if ((k == null ? void 0 : k.name) === "AbortError")
        return;
      E(l, "error"), E(u, (k == null ? void 0 : k.message) || "Failed to load", !0);
    }
  }
  Pi(() => (_(), () => {
    v == null || v.abort(), c(d) && (URL.revokeObjectURL(c(d)), E(d, null));
  }));
  async function $() {
    if (c(o))
      try {
        await navigator.clipboard.writeText(c(o).rawPath);
      } catch {
      }
  }
  var g = {
    get client() {
      return r();
    },
    set client(m) {
      r(m), j();
    },
    get mode() {
      return n();
    },
    set mode(m) {
      n(m), j();
    },
    get activeItem() {
      return s();
    },
    set activeItem(m) {
      s(m), j();
    },
    get widthPx() {
      return i();
    },
    set widthPx(m) {
      i(m), j();
    },
    get onToggle() {
      return a();
    },
    set onToggle(m) {
      a(m), j();
    }
  }, w = _o(), A = q(w), B = V(q(A), 2);
  T(A);
  var W = V(A, 2), ie = q(W);
  {
    var le = (m) => {
      var k = fo();
      U(m, k);
    }, P = (m) => {
      var k = co();
      U(m, k);
    }, K = (m) => {
      var k = vo(), Q = q(k);
      T(k), we(() => _e(Q, `Error: ${c(u) ?? ""}`)), U(m, k);
    }, J = (m) => {
      var k = mo(), Q = Er(k);
      {
        var ye = (ce) => {
          var h = ho(), y = q(h);
          T(h), we(() => {
            Ft(y, "src", c(d)), Ft(y, "alt", c(o).name);
          }), U(ce, h);
        }, be = /* @__PURE__ */ ot(() => b(c(o)) && c(d)), x = (ce) => {
          var h = po(), y = q(h, !0);
          T(h), we(() => _e(y, c(o).preview)), U(ce, h);
        }, F = (ce) => {
          var h = go(), y = q(h, !0);
          T(h), we(() => _e(y, c(o).ext || "FILE")), U(ce, h);
        };
        nt(Q, (ce) => {
          c(be) ? ce(ye) : c(o).preview ? ce(x, 1) : ce(F, !1);
        });
      }
      var H = V(Q, 2), L = q(H), z = q(L, !0);
      T(L);
      var Z = V(L, 2), se = q(Z, !0);
      T(Z), T(H);
      var ke = V(H, 2), Ae = V(q(ke), 2), Ye = q(Ae, !0);
      T(Ae), T(ke), we(() => {
        _e(z, c(o).name), _e(se, c(o).mime || ""), _e(Ye, c(o).rawPath);
      }), Re("click", Ae, $), U(m, k);
    };
    nt(ie, (m) => {
      s() ? c(l) === "loading" ? m(P, 1) : c(l) === "error" ? m(K, 2) : c(o) && m(J, 3) : m(le);
    });
  }
  return T(W), T(w), we(() => Nn(w, `width:${i()}px`)), Re("click", B, function(...m) {
    var k;
    (k = a()) == null || k.apply(this, m);
  }), U(e, w), or(g);
}
Tr(["click"]);
Sr(
  us,
  {
    client: {},
    mode: {},
    activeItem: {},
    widthPx: {},
    onToggle: {}
  },
  [],
  [],
  { mode: "open" }
);
var wo = /* @__PURE__ */ G('<div class="statusCard svelte-qxuqle"><div class="statusTitle svelte-qxuqle">Connecting to EFSDB…</div> <div class="statusCopy svelte-qxuqle">Refreshing your session and loading the decoded filesystem view.</div></div>'), xo = /* @__PURE__ */ G('<div class="statusCard error svelte-qxuqle"><div class="statusTitle svelte-qxuqle">Sign in required</div> <div class="statusCopy svelte-qxuqle"> </div></div>'), yo = /* @__PURE__ */ G("<div> </div>"), ko = /* @__PURE__ */ G('<div class="previewCollapsed svelte-qxuqle"><button class="btn svelte-qxuqle" type="button">Show Preview</button></div>'), Eo = /* @__PURE__ */ G('<!> <div class="top svelte-qxuqle"><!> <div class="cover svelte-qxuqle"><!></div> <div class="splitY svelte-qxuqle" title="Resize coverflow" aria-hidden="true"></div></div> <div class="main svelte-qxuqle"><div class="colsPane svelte-qxuqle"><!></div> <div class="splitX svelte-qxuqle" title="Resize preview" aria-hidden="true"></div> <!></div>', 1), $o = /* @__PURE__ */ G('<div class="root svelte-qxuqle"><!></div>');
const To = {
  hash: "svelte-qxuqle",
  code: `:host {display:block;--bg: #0b0f14;--panel: #0f1520;--card: #121b28;--hover: rgba(255, 255, 255, 0.06);--border: rgba(255, 255, 255, 0.1);--text: rgba(255, 255, 255, 0.92);--muted: rgba(255, 255, 255, 0.6);--primary: #c6ff00;--primaryText: #10200d;--warn: #f59e0b;--info: #22c55e;--danger: #ef4444;--codeBg: rgba(0, 0, 0, 0.35);}:host([theme='light']) {--bg: #f7faef;--panel: #ffffff;--card: #f1f5e7;--hover: rgba(116, 145, 45, 0.1);--border: rgba(116, 145, 45, 0.18);--text: #1a2313;--muted: #5f7050;--primary: #c6ff00;--primaryText: #13210f;--warn: #b7791f;--info: #2f855a;--danger: #c05666;--codeBg: rgba(116, 145, 45, 0.08);}.root.svelte-qxuqle {background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:18px;overflow:hidden;font-family:'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;}.banner.svelte-qxuqle,
  .statusCard.svelte-qxuqle {padding:14px 16px;border-bottom:1px solid var(--border);background:color-mix(in oklab, var(--panel), transparent 10%);}.errorBanner.svelte-qxuqle,
  .statusCard.error.svelte-qxuqle {background:color-mix(in oklab, var(--danger), transparent 88%);border-bottom-color:color-mix(in oklab, var(--danger), transparent 70%);}.statusCard.svelte-qxuqle {min-height:220px;display:grid;place-items:center;text-align:center;gap:10px;}.statusTitle.svelte-qxuqle {font-size:1.2rem;font-weight:800;}.statusCopy.svelte-qxuqle {color:var(--muted);max-width:34rem;line-height:1.5;}.top.svelte-qxuqle {display:flex;flex-direction:column;}.cover.svelte-qxuqle {border-bottom:1px solid var(--border);overflow:hidden;}.main.svelte-qxuqle {display:grid;grid-template-columns:minmax(0, 1fr) 8px auto;min-height:420px;height:min(72vh, 780px);}.colsPane.svelte-qxuqle {min-width:0;overflow:auto;}.splitY.svelte-qxuqle {height:8px;cursor:ns-resize;background:color-mix(in oklab, var(--border), transparent 40%);}.splitX.svelte-qxuqle {width:8px;cursor:ew-resize;background:color-mix(in oklab, var(--border), transparent 40%);}.previewCollapsed.svelte-qxuqle {width:40px;display:grid;place-items:center;border-left:1px solid var(--border);background:var(--panel);}.btn.svelte-qxuqle {padding:8px 10px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;writing-mode:vertical-rl;transform:rotate(180deg);}`
};
function qo(e, t) {
  ar(t, !0), qr(e, To);
  let r = Y(t, "apiBase", 7, "/api/explorer"), n = Y(t, "authBase", 7, "/api/auth"), s = Y(t, "path", 7, ""), i = Y(t, "mode", 7, "natural");
  const a = new Ya();
  let o = /* @__PURE__ */ ee(St([])), l = /* @__PURE__ */ ee(null), u = /* @__PURE__ */ ee(St(Va())), d = /* @__PURE__ */ ee(!1), v = /* @__PURE__ */ ee("loading"), p = /* @__PURE__ */ ee(""), b = /* @__PURE__ */ ee(null), _ = null;
  const $ = /* @__PURE__ */ ot(() => {
    for (let h = c(o).length - 1; h >= 0; h--)
      if (c(o)[h].selectedItem)
        return h;
    return 0;
  }), g = /* @__PURE__ */ ot(() => c(o)[c($)] ?? null), w = /* @__PURE__ */ ot(() => {
    var h;
    return ((h = c(g)) == null ? void 0 : h.items) ?? [];
  }), A = /* @__PURE__ */ ot(() => {
    var h;
    return ((h = c(g)) == null ? void 0 : h.selectedItem) ?? null;
  }), B = /* @__PURE__ */ ot(() => {
    var y, C;
    return (Array.isArray((y = c(b)) == null ? void 0 : y.entitlements) ? (C = c(b)) == null ? void 0 : C.entitlements : []).includes("RAW_VIEW");
  }), W = /* @__PURE__ */ ot(() => {
    const h = c(o)[c(o).length - 1], y = (h == null ? void 0 : h.path) ?? "", C = y ? y.split("/").filter(Boolean) : [], ae = [{ label: "ROOT", path: "" }];
    let ue = "";
    for (const ge of C)
      ue += (ue ? "/" : "") + ge, ae.push({ label: ge, path: ue });
    return ae;
  });
  function ie(h, y) {
    var ue;
    const ae = (((ue = h.split("?")[0]) == null ? void 0 : ue.split("#")[0]) ?? "").split("/").filter(Boolean).join("/");
    return y === "natural" && ae.startsWith("system_") ? "" : ae;
  }
  function le() {
    const h = c(w).findIndex((y) => y.name === c(A));
    return h < 0 ? 0 : h;
  }
  function P() {
    c(v) !== "auth_required" && E(p, "");
  }
  async function K() {
    return await a.refreshAccessToken() ? (E(b, await a.whoAmI(), !0), !0) : (E(v, "auth_required"), E(p, "Sign in is required before the explorer can load."), !1);
  }
  async function J(h) {
    P();
    try {
      h = ie(h, i());
      const y = h ? h.split("/").filter(Boolean) : [], C = [], ae = await a.list("", i());
      C.push({ path: "", items: ae.items, selectedItem: y[0] ?? null });
      let ue = "";
      for (let oe = 0; oe < y.length; oe++) {
        ue += (ue ? "/" : "") + y[oe];
        try {
          const Ce = await a.list(ue, i()), lr = C[C.length - 1].items.find((ur) => ur.name === y[oe]);
          lr && lr.type === "dir" && C.push({
            path: ue,
            items: Ce.items,
            selectedItem: y[oe + 1] ?? null
          });
        } catch {
        }
      }
      E(o, C, !0);
      const ge = C[C.length - 1];
      if (ge != null && ge.selectedItem) {
        const oe = ge.items.find((Ce) => Ce.name === ge.selectedItem);
        E(l, oe ?? null, !0);
      } else
        E(l, null);
      E(v, "ready");
    } catch (y) {
      const C = (y == null ? void 0 : y.message) || "Failed to load explorer";
      if (C.startsWith("HTTP 401")) {
        E(v, "auth_required"), E(p, "Your session is no longer valid. Sign in again to continue.");
        return;
      }
      if (C.startsWith("HTTP 403") && i() === "raw") {
        i("natural"), E(p, "Raw inspection is not available for the current role. Showing decoded view instead."), await J(h);
        return;
      }
      E(v, "error"), E(p, C, !0);
    }
  }
  function m(h) {
    if (i() === h)
      return;
    if (h === "raw" && !c(B)) {
      E(p, "Raw inspection requires RAW_VIEW entitlement.");
      return;
    }
    i(h);
    const y = c(o)[c(o).length - 1];
    J(ie((y == null ? void 0 : y.path) ?? "", h));
  }
  async function k() {
    if (!(!c(l) || c(l).type === "dir"))
      try {
        const h = c(l).rawPath || c(l).name, y = await a.getDownloadUrl(h, i());
        window.open(y, "_blank", "noopener,noreferrer");
      } catch (h) {
        E(p, (h == null ? void 0 : h.message) || "Unable to open the selected item.", !0);
      }
  }
  function Q(h) {
    c(u).scale = h, Jn(c(u));
  }
  function ye(h) {
    c(u).coverHeight = Math.max(150, Math.min(600, c(u).coverHeight + h));
  }
  function be(h) {
    c(u).previewWidth = Math.max(200, Math.min(560, c(u).previewWidth - h));
  }
  function x() {
    Jn(c(u));
  }
  async function F(h, y) {
    E(l, y, !0), _ && (window.clearTimeout(_), _ = null);
    const C = c(o).slice(0, h + 1);
    if (C[h] = { ...C[h], selectedItem: y.name }, y.type === "dir") {
      const ae = y.rawPath || y.name;
      C.push({ path: ae, items: [], selectedItem: null, loading: !0 }), E(o, C, !0), _ = window.setTimeout(
        async () => {
          var ue, ge;
          try {
            const oe = await a.list(ae, i()), Ce = h + 1;
            ((ue = c(o)[Ce]) == null ? void 0 : ue.path) === ae && (c(o)[Ce] = {
              ...c(o)[Ce],
              items: oe.items,
              loading: !1
            }, E(o, [...c(o)], !0));
          } catch (oe) {
            const Ce = h + 1;
            ((ge = c(o)[Ce]) == null ? void 0 : ge.path) === ae && (c(o)[Ce] = { ...c(o)[Ce], loading: !1 }, E(o, [...c(o)], !0)), E(p, (oe == null ? void 0 : oe.message) || "Unable to load the selected folder.", !0);
          }
        },
        150
      );
    } else
      E(o, C, !0);
  }
  function H(h) {
    const y = c(g);
    if (!y)
      return;
    const C = y.items[h];
    C && F(c($), C);
  }
  function L() {
    E(d, !c(d));
  }
  function z(h) {
    var ae;
    const y = h.target, C = (ae = y == null ? void 0 : y.tagName) == null ? void 0 : ae.toUpperCase();
    C === "INPUT" || C === "TEXTAREA" || (h.key === "ArrowRight" && H(Math.min(c(w).length - 1, le() + 1)), h.key === "ArrowLeft" && H(Math.max(0, le() - 1)));
  }
  Sa(() => {
    a.setApiBase(r()), a.setAuthBase(n());
    let h = s();
    return h || (h = new URL(window.location.href).searchParams.get("path") || ""), (async () => {
      if (!await K()) {
        E(v, "auth_required");
        return;
      }
      i() === "raw" && !c(B) && i("natural"), await J(ie(h, i()));
    })(), window.addEventListener("keydown", z), () => {
      _ && window.clearTimeout(_), window.removeEventListener("keydown", z);
    };
  });
  var Z = {
    get apiBase() {
      return r();
    },
    set apiBase(h = "/api/explorer") {
      r(h), j();
    },
    get authBase() {
      return n();
    },
    set authBase(h = "/api/auth") {
      n(h), j();
    },
    get path() {
      return s();
    },
    set path(h = "") {
      s(h), j();
    },
    get mode() {
      return i();
    },
    set mode(h = "natural") {
      i(h), j();
    }
  }, se = $o(), ke = q(se);
  {
    var Ae = (h) => {
      var y = wo();
      U(h, y);
    }, Ye = (h) => {
      var y = xo(), C = V(q(y), 2), ae = q(C, !0);
      T(C), T(y), we(() => _e(ae, c(p))), U(h, y);
    }, ce = (h) => {
      var y = Eo(), C = Er(y);
      {
        var ae = (me) => {
          var Ee = yo();
          let Ar;
          var hs = q(Ee, !0);
          T(Ee), we(() => {
            Ar = sr(Ee, 1, "svelte-qxuqle", null, Ar, { banner: !0, errorBanner: c(v) === "error" }), _e(hs, c(p));
          }), U(me, Ee);
        };
        nt(C, (me) => {
          c(p) && me(ae);
        });
      }
      var ue = V(C, 2), ge = q(ue);
      {
        let me = /* @__PURE__ */ ot(() => !!c(l) && c(l).type !== "dir");
        as(ge, {
          get mode() {
            return i();
          },
          get rawEnabled() {
            return c(B);
          },
          get breadcrumbs() {
            return c(W);
          },
          get scale() {
            return c(u).scale;
          },
          get canOpen() {
            return c(me);
          },
          onHome: () => {
            J("");
          },
          onOpen: () => {
            k();
          },
          onSetMode: m,
          onScale: Q,
          onCrumb: (Ee) => {
            J(Ee);
          }
        });
      }
      var oe = V(ge, 2), Ce = q(oe);
      ls(Ce, {
        get items() {
          return c(w);
        },
        get selectedName() {
          return c(A);
        },
        get mode() {
          return i();
        },
        get scale() {
          return c(u).scale;
        },
        onNavToIndex: H
      }), T(oe);
      var On = V(oe, 2);
      _n(On, (me, Ee) => Ut == null ? void 0 : Ut(me, Ee), () => ({ axis: "y", onDelta: ye, onDone: x })), T(ue);
      var lr = V(ue, 2), ur = q(lr), fs = q(ur);
      os(fs, {
        get mode() {
          return i();
        },
        get columns() {
          return c(o);
        },
        onItemClick: F
      }), T(ur);
      var Pn = V(ur, 2);
      _n(Pn, (me, Ee) => Ut == null ? void 0 : Ut(me, Ee), () => ({ axis: "x", onDelta: be, onDone: x }));
      var cs = V(Pn, 2);
      {
        var ds = (me) => {
          us(me, {
            get client() {
              return a;
            },
            get mode() {
              return i();
            },
            get activeItem() {
              return c(l);
            },
            get widthPx() {
              return c(u).previewWidth;
            },
            onToggle: L
          });
        }, vs = (me) => {
          var Ee = ko(), Ar = q(Ee);
          T(Ee), Re("click", Ar, L), U(me, Ee);
        };
        nt(cs, (me) => {
          c(d) ? me(vs, !1) : me(ds);
        });
      }
      T(lr), we(() => Nn(oe, `height:${c(u).coverHeight}px`)), U(h, y);
    };
    nt(ke, (h) => {
      c(v) === "loading" ? h(Ae) : c(v) === "auth_required" ? h(Ye, 1) : h(ce, !1);
    });
  }
  return T(se), U(e, se), or(Z);
}
Tr(["click"]);
customElements.define("efsdb-explorer", Sr(
  qo,
  {
    apiBase: { attribute: "api-base", type: "String" },
    authBase: { attribute: "auth-base", type: "String" },
    path: { attribute: "path", type: "String" },
    mode: { attribute: "mode", type: "String" }
  },
  [],
  [],
  { mode: "open" }
));
