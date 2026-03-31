var ll = Object.defineProperty;
var ra = (e) => {
  throw TypeError(e);
};
var dl = (e, t, r) => t in e ? ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => dl(e, typeof t != "symbol" ? t + "" : t, r), ts = (e, t, r) => t.has(e) || ra("Cannot " + r);
var h = (e, t, r) => (ts(e, t, "read from private field"), r ? r.call(e) : t.get(e)), C = (e, t, r) => t.has(e) ? ra("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (ts(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), J = (e, t, r) => (ts(e, t, "access private method"), r);
var ja;
typeof window < "u" && ((ja = window.__svelte ?? (window.__svelte = {})).v ?? (ja.v = /* @__PURE__ */ new Set())).add("5");
const cl = 1, ul = 2, Ea = 4, hl = 8, fl = 16, pl = 1, ml = 4, vl = 8, wl = 16, gl = 1, bl = 2, Pa = "[", Rs = "[!", na = "[?", Es = "]", xn = {}, xe = Symbol(), Ta = "http://www.w3.org/1999/xhtml", yl = !1;
var Aa = Array.isArray, xl = Array.prototype.indexOf, _n = Array.prototype.includes, Ii = Array.from, $i = Object.keys, ji = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, _l = Object.getOwnPropertyDescriptors, kl = Object.prototype, ql = Array.prototype, Ca = Object.getPrototypeOf, ia = Object.isExtensible;
const hn = () => {
};
function Ml(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function La() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const ge = 2, kn = 4, Oi = 8, Ia = 1 << 24, wr = 16, xt = 32, pr = 64, hs = 128, nt = 512, pe = 1024, Se = 2048, Rt = 4096, Ze = 8192, it = 16384, gr = 32768, fs = 1 << 25, Br = 65536, sa = 1 << 17, Sl = 1 << 18, Zr = 1 << 19, $l = 1 << 20, zt = 1 << 25, Ur = 65536, ps = 1 << 21, Ps = 1 << 22, hr = 1 << 23, Xn = Symbol("$state"), Oa = Symbol("legacy props"), jl = Symbol(""), Ht = new class extends Error {
  constructor() {
    super(...arguments);
    ee(this, "name", "StaleReactionError");
    ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var za;
const Da = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((za = globalThis.document) != null && za.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Di = 3, li = 8;
function zl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Rl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function El(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Pl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Al(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ll() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Il(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Dl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Nl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ni(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Vl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function Zt(e) {
  F = e;
}
let N;
function Ie(e) {
  if (e === null)
    throw Ni(), xn;
  return N = e;
}
function Wi() {
  return Ie(/* @__PURE__ */ Pt(N));
}
function x(e) {
  if (F) {
    if (/* @__PURE__ */ Pt(N) !== null)
      throw Ni(), xn;
    N = e;
  }
}
function Tr(e = 1) {
  if (F) {
    for (var t = e, r = N; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(r);
    N = r;
  }
}
function zi(e = !0) {
  for (var t = 0, r = N; ; ) {
    if (r.nodeType === li) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Es) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Pa || n === Rs || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(r)
    );
    e && r.remove(), r = i;
  }
}
function Na(e) {
  if (!e || e.nodeType !== li)
    throw Ni(), xn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Wa(e) {
  return e === this.v;
}
function Va(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ha(e) {
  return !Va(e, this.v);
}
let Hl = !1, Oe = null;
function qn(e) {
  Oe = e;
}
function Vi(e, t = !1, r) {
  Oe = {
    p: Oe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      W
    ),
    l: null
  };
}
function Hi(e) {
  var t = (
    /** @type {ComponentContext} */
    Oe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      bo(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Oe = t.p, e ?? /** @type {T} */
  {};
}
function Fa() {
  return !0;
}
let Ar = [];
function Ba() {
  var e = Ar;
  Ar = [], Ml(e);
}
function Xt(e) {
  if (Ar.length === 0 && !Kn) {
    var t = Ar;
    queueMicrotask(() => {
      t === Ar && Ba();
    });
  }
  Ar.push(e);
}
function Fl() {
  for (; Ar.length > 0; )
    Ba();
}
function Ua(e) {
  var t = W;
  if (t === null)
    return O.f |= hr, e;
  if ((t.f & gr) === 0 && (t.f & kn) === 0)
    throw e;
  ur(e, t);
}
function ur(e, t) {
  for (; t !== null; ) {
    if ((t.f & hs) !== 0) {
      if ((t.f & gr) === 0)
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
const Bl = -7169;
function ce(e, t) {
  e.f = e.f & Bl | t;
}
function Ts(e) {
  (e.f & nt) !== 0 || e.deps === null ? ce(e, pe) : ce(e, Rt);
}
function Ya(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Ur) === 0 || (t.f ^= Ur, Ya(
        /** @type {Derived} */
        t.deps
      ));
}
function Ga(e, t, r) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & Rt) !== 0 && r.add(e), Ya(e.deps), ce(e, pe);
}
function Ul(e, t, r) {
  if (e == null)
    return t(void 0), hn;
  const n = Xr(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const on = [];
function Yl(e, t = hn) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(o) {
    if (Va(e, o) && (e = o, r)) {
      const l = !on.length;
      for (const c of n)
        c[1](), on.push(c, e);
      if (l) {
        for (let c = 0; c < on.length; c += 2)
          on[c][0](on[c + 1]);
        on.length = 0;
      }
    }
  }
  function s(o) {
    i(o(
      /** @type {T} */
      e
    ));
  }
  function a(o, l = hn) {
    const c = [o, l];
    return n.add(c), n.size === 1 && (r = t(i, s) || hn), o(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: a };
}
function Gl(e) {
  let t;
  return Ul(e, (r) => t = r)(), t;
}
let gi = !1;
function Zl(e) {
  var t = gi;
  try {
    return gi = !1, [e(), gi];
  } finally {
    gi = t;
  }
}
const Er = /* @__PURE__ */ new Set();
let L = null, _e = null, ms = null, Kn = !1, rs = !1, cn = null, xi = null;
var aa = 0;
let Xl = 1;
var pn, mn, vn, wn, ti, He, Or, Ft, Bt, gn, $e, vs, ws, gs, bs, Za;
const Pi = class Pi {
  constructor() {
    C(this, $e);
    // for debugging. TODO remove once async is stable
    ee(this, "id", Xl++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, pn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, mn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    C(this, vn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    C(this, wn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    C(this, ti, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    C(this, He, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    C(this, Or, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    C(this, Ft, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    C(this, Bt, /* @__PURE__ */ new Map());
    ee(this, "is_fork", !1);
    C(this, gn, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    h(this, Bt).has(t) || h(this, Bt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = h(this, Bt).get(t);
    if (r) {
      h(this, Bt).delete(t);
      for (var n of r.d)
        ce(n, Se), this.schedule(n);
      for (n of r.m)
        ce(n, Rt), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== xe && !this.previous.has(t) && this.previous.set(t, r), (t.f & hr) === 0 && (this.current.set(t, t.v), _e == null || _e.set(t, t.v));
  }
  activate() {
    L = this;
  }
  deactivate() {
    L = null, _e = null;
  }
  flush() {
    try {
      rs = !0, L = this, J(this, $e, ws).call(this);
    } finally {
      aa = 0, ms = null, cn = null, xi = null, rs = !1, L = null, _e = null, fr.clear();
    }
  }
  discard() {
    for (const t of h(this, mn)) t(this);
    h(this, mn).clear(), Er.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    T(this, vn, h(this, vn) + 1), t && T(this, wn, h(this, wn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    T(this, vn, h(this, vn) - 1), t && T(this, wn, h(this, wn) - 1), !(h(this, gn) || r) && (T(this, gn, !0), Xt(() => {
      T(this, gn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      h(this, Or).add(n);
    for (const n of r)
      h(this, Ft).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    h(this, pn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    h(this, mn).add(t);
  }
  settled() {
    return (h(this, ti) ?? T(this, ti, La())).promise;
  }
  static ensure() {
    if (L === null) {
      const t = L = new Pi();
      rs || (Er.add(L), Kn || Xt(() => {
        L === t && t.flush();
      }));
    }
    return L;
  }
  apply() {
    {
      _e = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (ms = t, (i = t.b) != null && i.is_pending && (t.f & (kn | Oi | Ia)) !== 0 && (t.f & gr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (cn !== null && r === W && (O === null || (O.f & ge) === 0))
        return;
      if ((n & (pr | xt)) !== 0) {
        if ((n & pe) === 0)
          return;
        r.f ^= pe;
      }
    }
    h(this, He).push(r);
  }
};
pn = new WeakMap(), mn = new WeakMap(), vn = new WeakMap(), wn = new WeakMap(), ti = new WeakMap(), He = new WeakMap(), Or = new WeakMap(), Ft = new WeakMap(), Bt = new WeakMap(), gn = new WeakMap(), $e = new WeakSet(), vs = function() {
  return this.is_fork || h(this, wn) > 0;
}, ws = function() {
  var o, l;
  if (aa++ > 1e3 && (Er.delete(this), Kl()), !J(this, $e, vs).call(this)) {
    for (const c of h(this, Or))
      h(this, Ft).delete(c), ce(c, Se), this.schedule(c);
    for (const c of h(this, Ft))
      ce(c, Rt), this.schedule(c);
  }
  const t = h(this, He);
  T(this, He, []), this.apply();
  var r = cn = [], n = [], i = xi = [];
  for (const c of t)
    try {
      J(this, $e, gs).call(this, c, r, n);
    } catch (f) {
      throw Qa(c), f;
    }
  if (L = null, i.length > 0) {
    var s = Pi.ensure();
    for (const c of i)
      s.schedule(c);
  }
  if (cn = null, xi = null, J(this, $e, vs).call(this)) {
    J(this, $e, bs).call(this, n), J(this, $e, bs).call(this, r);
    for (const [c, f] of h(this, Bt))
      Ja(c, f);
  } else {
    h(this, vn) === 0 && Er.delete(this), h(this, Or).clear(), h(this, Ft).clear();
    for (const c of h(this, pn)) c(this);
    h(this, pn).clear(), oa(n), oa(r), (o = h(this, ti)) == null || o.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    L
  );
  if (h(this, He).length > 0) {
    const c = a ?? (a = this);
    h(c, He).push(...h(this, He).filter((f) => !h(c, He).includes(f)));
  }
  a !== null && (Er.add(a), J(l = a, $e, ws).call(l)), Er.has(this) || J(this, $e, Za).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
gs = function(t, r, n) {
  t.f ^= pe;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (xt | pr)) !== 0, o = a && (s & pe) !== 0, l = o || (s & Ze) !== 0 || h(this, Bt).has(i);
    if (!l && i.fn !== null) {
      a ? i.f ^= pe : (s & kn) !== 0 ? r.push(i) : di(i) && ((s & wr) !== 0 && h(this, Ft).add(i), Sn(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var f = i.next;
      if (f !== null) {
        i = f;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
bs = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ga(t[r], h(this, Or), h(this, Ft));
}, Za = function() {
  var l;
  for (const c of Er) {
    var t = c.id < this.id, r = [];
    for (const [f, m] of this.current) {
      if (c.current.has(f))
        if (t && m !== c.current.get(f))
          c.current.set(f, m);
        else
          continue;
      r.push(f);
    }
    var n = [...c.current.keys()].filter((f) => !this.current.has(f));
    if (n.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      c.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var a of r)
        Xa(a, n, i, s);
      if (h(c, He).length > 0) {
        c.apply();
        for (var o of h(c, He))
          J(l = c, $e, gs).call(l, o, [], []);
        T(c, He, []);
      }
      c.deactivate();
    }
  }
};
let mr = Pi;
function D(e) {
  var t = Kn;
  Kn = !0;
  try {
    for (var r; ; ) {
      if (Fl(), L === null)
        return (
          /** @type {T} */
          r
        );
      L.flush();
    }
  } finally {
    Kn = t;
  }
}
function Kl() {
  try {
    Cl();
  } catch (e) {
    ur(e, ms);
  }
}
let wt = null;
function oa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (it | Ze)) === 0 && di(n) && (wt = /* @__PURE__ */ new Set(), Sn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && xo(n), (wt == null ? void 0 : wt.size) > 0)) {
        fr.clear();
        for (const i of wt) {
          if ((i.f & (it | Ze)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            wt.has(a) && (wt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (it | Ze)) === 0 && Sn(l);
          }
        }
        wt.clear();
      }
    }
    wt = null;
  }
}
function Xa(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ge) !== 0 ? Xa(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Ps | wr)) !== 0 && (s & Se) === 0 && Ka(i, t, n) && (ce(i, Se), As(
        /** @type {Effect} */
        i
      ));
    }
}
function Ka(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (_n.call(t, i))
        return !0;
      if ((i.f & ge) !== 0 && Ka(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function As(e) {
  L.schedule(e);
}
function Ja(e, t) {
  if (!((e.f & xt) !== 0 && (e.f & pe) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & Rt) !== 0 && t.m.push(e), ce(e, pe);
    for (var r = e.first; r !== null; )
      Ja(r, t), r = r.next;
  }
}
function Qa(e) {
  ce(e, pe);
  for (var t = e.first; t !== null; )
    Qa(t), t = t.next;
}
function Jl(e) {
  let t = 0, r = Yr(0), n;
  return () => {
    Os() && (d(r), Ui(() => (t === 0 && (n = Xr(() => e(() => Jn(r)))), t += 1, () => {
      Xt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Jn(r));
      });
    })));
  };
}
var Ql = Br | Zr;
function ed(e, t, r, n) {
  new td(e, t, r, n);
}
var Fe, ri, St, Dr, Ce, $t, Be, gt, Ut, Nr, dr, bn, ni, ii, Yt, Ti, ie, eo, to, ro, ys, _i, ki, xs;
class td {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    C(this, ie);
    /** @type {Boundary | null} */
    ee(this, "parent");
    ee(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ee(this, "transform_error");
    /** @type {TemplateNode} */
    C(this, Fe);
    /** @type {TemplateNode | null} */
    C(this, ri, F ? N : null);
    /** @type {BoundaryProps} */
    C(this, St);
    /** @type {((anchor: Node) => void)} */
    C(this, Dr);
    /** @type {Effect} */
    C(this, Ce);
    /** @type {Effect | null} */
    C(this, $t, null);
    /** @type {Effect | null} */
    C(this, Be, null);
    /** @type {Effect | null} */
    C(this, gt, null);
    /** @type {DocumentFragment | null} */
    C(this, Ut, null);
    C(this, Nr, 0);
    C(this, dr, 0);
    C(this, bn, !1);
    /** @type {Set<Effect>} */
    C(this, ni, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    C(this, ii, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    C(this, Yt, null);
    C(this, Ti, Jl(() => (T(this, Yt, Yr(h(this, Nr))), () => {
      T(this, Yt, null);
    })));
    var s;
    T(this, Fe, t), T(this, St, r), T(this, Dr, (a) => {
      var o = (
        /** @type {Effect} */
        W
      );
      o.b = this, o.f |= hs, n(a);
    }), this.parent = /** @type {Effect} */
    W.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), T(this, Ce, Yi(() => {
      if (F) {
        const a = (
          /** @type {Comment} */
          h(this, ri)
        );
        Wi();
        const o = a.data === Rs;
        if (a.data.startsWith(na)) {
          const c = JSON.parse(a.data.slice(na.length));
          J(this, ie, to).call(this, c);
        } else o ? J(this, ie, ro).call(this) : J(this, ie, eo).call(this);
      } else
        J(this, ie, ys).call(this);
    }, Ql)), F && T(this, Fe, N);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ga(t, h(this, ni), h(this, ii));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!h(this, St).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    J(this, ie, xs).call(this, t, r), T(this, Nr, h(this, Nr) + t), !(!h(this, Yt) || h(this, bn)) && (T(this, bn, !0), Xt(() => {
      T(this, bn, !1), h(this, Yt) && Mn(h(this, Yt), h(this, Nr));
    }));
  }
  get_effect_pending() {
    return h(this, Ti).call(this), d(
      /** @type {Source<number>} */
      h(this, Yt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = h(this, St).onerror;
    let n = h(this, St).failed;
    if (!r && !n)
      throw t;
    h(this, $t) && (Pe(h(this, $t)), T(this, $t, null)), h(this, Be) && (Pe(h(this, Be)), T(this, Be, null)), h(this, gt) && (Pe(h(this, gt)), T(this, gt, null)), F && (Ie(
      /** @type {TemplateNode} */
      h(this, ri)
    ), Tr(), Ie(zi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Vl();
        return;
      }
      i = !0, s && Wl(), h(this, gt) !== null && Hr(h(this, gt), () => {
        T(this, gt, null);
      }), J(this, ie, ki).call(this, () => {
        J(this, ie, ys).call(this);
      });
    }, o = (l) => {
      try {
        s = !0, r == null || r(l, a), s = !1;
      } catch (c) {
        ur(c, h(this, Ce) && h(this, Ce).parent);
      }
      n && T(this, gt, J(this, ie, ki).call(this, () => {
        try {
          return rt(() => {
            var c = (
              /** @type {Effect} */
              W
            );
            c.b = this, c.f |= hs, n(
              h(this, Fe),
              () => l,
              () => a
            );
          });
        } catch (c) {
          return ur(
            c,
            /** @type {Effect} */
            h(this, Ce).parent
          ), null;
        }
      }));
    };
    Xt(() => {
      var l;
      try {
        l = this.transform_error(t);
      } catch (c) {
        ur(c, h(this, Ce) && h(this, Ce).parent);
        return;
      }
      l !== null && typeof l == "object" && typeof /** @type {any} */
      l.then == "function" ? l.then(
        o,
        /** @param {unknown} e */
        (c) => ur(c, h(this, Ce) && h(this, Ce).parent)
      ) : o(l);
    });
  }
}
Fe = new WeakMap(), ri = new WeakMap(), St = new WeakMap(), Dr = new WeakMap(), Ce = new WeakMap(), $t = new WeakMap(), Be = new WeakMap(), gt = new WeakMap(), Ut = new WeakMap(), Nr = new WeakMap(), dr = new WeakMap(), bn = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), Yt = new WeakMap(), Ti = new WeakMap(), ie = new WeakSet(), eo = function() {
  try {
    T(this, $t, rt(() => h(this, Dr).call(this, h(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
to = function(t) {
  const r = h(this, St).failed;
  r && T(this, gt, rt(() => {
    r(
      h(this, Fe),
      () => t,
      () => () => {
      }
    );
  }));
}, ro = function() {
  const t = h(this, St).pending;
  t && (this.is_pending = !0, T(this, Be, rt(() => t(h(this, Fe)))), Xt(() => {
    var r = T(this, Ut, document.createDocumentFragment()), n = st();
    r.append(n), T(this, $t, J(this, ie, ki).call(this, () => rt(() => h(this, Dr).call(this, n)))), h(this, dr) === 0 && (h(this, Fe).before(r), T(this, Ut, null), Hr(
      /** @type {Effect} */
      h(this, Be),
      () => {
        T(this, Be, null);
      }
    ), J(this, ie, _i).call(
      this,
      /** @type {Batch} */
      L
    ));
  }));
}, ys = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, dr, 0), T(this, Nr, 0), T(this, $t, rt(() => {
      h(this, Dr).call(this, h(this, Fe));
    })), h(this, dr) > 0) {
      var t = T(this, Ut, document.createDocumentFragment());
      Vs(h(this, $t), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        h(this, St).pending
      );
      T(this, Be, rt(() => r(h(this, Fe))));
    } else
      J(this, ie, _i).call(
        this,
        /** @type {Batch} */
        L
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
_i = function(t) {
  this.is_pending = !1, t.transfer_effects(h(this, ni), h(this, ii));
}, /**
 * @template T
 * @param {() => T} fn
 */
ki = function(t) {
  var r = W, n = O, i = Oe;
  Et(h(this, Ce)), ot(h(this, Ce)), qn(h(this, Ce).ctx);
  try {
    return mr.ensure(), t();
  } catch (s) {
    return Ua(s), null;
  } finally {
    Et(r), ot(n), qn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
xs = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && J(n = this.parent, ie, xs).call(n, t, r);
    return;
  }
  T(this, dr, h(this, dr) + t), h(this, dr) === 0 && (J(this, ie, _i).call(this, r), h(this, Be) && Hr(h(this, Be), () => {
    T(this, Be, null);
  }), h(this, Ut) && (h(this, Fe).before(h(this, Ut)), T(this, Ut, null)));
};
function rd(e, t, r, n) {
  const i = Fi;
  var s = e.filter((p) => !p.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    W
  ), o = nd(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function c(p) {
    o();
    try {
      n(p);
    } catch (y) {
      (a.f & it) === 0 && ur(y, a);
    }
    Ri();
  }
  if (r.length === 0) {
    l.then(() => c(t.map(i)));
    return;
  }
  var f = no();
  function m() {
    Promise.all(r.map((p) => /* @__PURE__ */ id(p))).then((p) => c([...t.map(i), ...p])).catch((p) => ur(p, a)).finally(() => f());
  }
  l ? l.then(() => {
    o(), m(), Ri();
  }) : m();
}
function nd() {
  var e = (
    /** @type {Effect} */
    W
  ), t = O, r = Oe, n = (
    /** @type {Batch} */
    L
  );
  return function(s = !0) {
    Et(e), ot(t), qn(r), s && (e.f & it) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Ri(e = !0) {
  Et(null), ot(null), qn(null), e && (L == null || L.deactivate());
}
function no() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    W.b
  ), t = (
    /** @type {Batch} */
    L
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  var t = ge | Se, r = O !== null && (O.f & ge) !== 0 ? (
    /** @type {Derived} */
    O
  ) : null;
  return W !== null && (W.f |= Zr), {
    ctx: Oe,
    deps: null,
    effects: null,
    equals: Wa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: r ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function id(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    W
  );
  n === null && Rl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Yr(
    /** @type {V} */
    xe
  ), a = !O, o = /* @__PURE__ */ new Map();
  return pd(() => {
    var y;
    var l = (
      /** @type {Effect} */
      W
    ), c = La();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(Ri);
    } catch (g) {
      c.reject(g), Ri();
    }
    var f = (
      /** @type {Batch} */
      L
    );
    if (a) {
      if ((l.f & gr) !== 0)
        var m = no();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (y = o.get(f)) == null || y.reject(Ht), o.delete(f);
      else {
        for (const g of o.values())
          g.reject(Ht);
        o.clear();
      }
      o.set(f, c);
    }
    const p = (g, R = void 0) => {
      if (m) {
        var b = R === Ht;
        m(b);
      }
      if (!(R === Ht || (l.f & it) !== 0)) {
        if (f.activate(), R)
          s.f |= hr, Mn(s, R);
        else {
          (s.f & hr) !== 0 && (s.f ^= hr), Mn(s, g);
          for (const [q, A] of o) {
            if (o.delete(q), q === f) break;
            A.reject(Ht);
          }
        }
        f.deactivate();
      }
    };
    c.promise.then(p, (g) => p(null, g || "unknown"));
  }), wo(() => {
    for (const l of o.values())
      l.reject(Ht);
  }), new Promise((l) => {
    function c(f) {
      function m() {
        f === i ? l(s) : c(i);
      }
      f.then(m, m);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = /* @__PURE__ */ Fi(e);
  return qo(t), t;
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  const t = /* @__PURE__ */ Fi(e);
  return t.equals = Ha, t;
}
function sd(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ad(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & it) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Cs(e) {
  var t, r = W;
  Et(ad(e));
  try {
    e.f &= ~Ur, sd(e), t = jo(e);
  } finally {
    Et(r);
  }
  return t;
}
function so(e) {
  var t = e.v, r = Cs(e);
  if (!e.equals(r) && (e.wv = So(), (!(L != null && L.is_fork) || e.deps === null) && (e.v = r, L == null || L.capture(e, t), e.deps === null))) {
    ce(e, pe);
    return;
  }
  vr || (_e !== null ? (Os() || L != null && L.is_fork) && _e.set(e, r) : Ts(e));
}
function od(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Ht), n.teardown = hn, n.ac = null, ei(n, 0), Ns(n));
}
function ao(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Sn(t);
}
let _s = /* @__PURE__ */ new Set();
const fr = /* @__PURE__ */ new Map();
let oo = !1;
function Yr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wa,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = Yr(e);
  return qo(r), r;
}
// @__NO_SIDE_EFFECTS__
function lo(e, t = !1, r = !0) {
  const n = Yr(e);
  return t || (n.equals = Ha), n;
}
function w(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || (O.f & sa) !== 0) && Fa() && (O.f & (ge | wr | Ps | sa)) !== 0 && (at === null || !_n.call(at, e)) && Nl();
  let n = r ? Cr(t) : t;
  return Mn(e, n, xi);
}
function Mn(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    vr ? fr.set(e, t) : fr.set(e, n), e.v = t;
    var i = mr.ensure();
    if (i.capture(e, n), (e.f & ge) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && Cs(s), _e === null && Ts(s);
    }
    e.wv = So(), co(e, Se, r), W !== null && (W.f & pe) !== 0 && (W.f & (xt | pr)) === 0 && (Qe === null ? wd([e]) : Qe.push(e)), !i.is_fork && _s.size > 0 && !oo && ld();
  }
  return t;
}
function ld() {
  oo = !1;
  for (const e of _s)
    (e.f & pe) !== 0 && ce(e, Rt), di(e) && Sn(e);
  _s.clear();
}
function Jn(e) {
  w(e, e.v + 1);
}
function co(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, l = (o & Se) === 0;
      if (l && ce(a, t), (o & ge) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        _e == null || _e.delete(c), (o & Ur) === 0 && (o & nt && (a.f |= Ur), co(c, Rt, r));
      } else if (l) {
        var f = (
          /** @type {Effect} */
          a
        );
        (o & wr) !== 0 && wt !== null && wt.add(f), r !== null ? r.push(f) : As(f);
      }
    }
}
function Cr(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = Ca(e);
  if (t !== kl && t !== ql)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Aa(e), i = /* @__PURE__ */ I(0), s = Fr, a = (o) => {
    if (Fr === s)
      return o();
    var l = O, c = Fr;
    ot(null), ua(s);
    var f = o();
    return ot(l), ua(c), f;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ol();
        var f = r.get(l);
        return f === void 0 ? a(() => {
          var m = /* @__PURE__ */ I(c.value);
          return r.set(l, m), m;
        }) : w(f, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ I(xe));
            r.set(l, f), Jn(i);
          }
        } else
          w(c, xe), Jn(i);
        return !0;
      },
      get(o, l, c) {
        var y;
        if (l === Xn)
          return e;
        var f = r.get(l), m = l in o;
        if (f === void 0 && (!m || (y = Vr(o, l)) != null && y.writable) && (f = a(() => {
          var g = Cr(m ? o[l] : xe), R = /* @__PURE__ */ I(g);
          return R;
        }), r.set(l, f)), f !== void 0) {
          var p = d(f);
          return p === xe ? void 0 : p;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var f = r.get(l);
          f && (c.value = d(f));
        } else if (c === void 0) {
          var m = r.get(l), p = m == null ? void 0 : m.v;
          if (m !== void 0 && p !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var p;
        if (l === Xn)
          return !0;
        var c = r.get(l), f = c !== void 0 && c.v !== xe || Reflect.has(o, l);
        if (c !== void 0 || W !== null && (!f || (p = Vr(o, l)) != null && p.writable)) {
          c === void 0 && (c = a(() => {
            var y = f ? Cr(o[l]) : xe, g = /* @__PURE__ */ I(y);
            return g;
          }), r.set(l, c));
          var m = d(c);
          if (m === xe)
            return !1;
        }
        return f;
      },
      set(o, l, c, f) {
        var k;
        var m = r.get(l), p = l in o;
        if (n && l === "length")
          for (var y = c; y < /** @type {Source<number>} */
          m.v; y += 1) {
            var g = r.get(y + "");
            g !== void 0 ? w(g, xe) : y in o && (g = a(() => /* @__PURE__ */ I(xe)), r.set(y + "", g));
          }
        if (m === void 0)
          (!p || (k = Vr(o, l)) != null && k.writable) && (m = a(() => /* @__PURE__ */ I(void 0)), w(m, Cr(c)), r.set(l, m));
        else {
          p = m.v !== xe;
          var R = a(() => Cr(c));
          w(m, R);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(f, c), !p) {
          if (n && typeof l == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= q.v && w(q, A + 1);
          }
          Jn(i);
        }
        return !0;
      },
      ownKeys(o) {
        d(i);
        var l = Reflect.ownKeys(o).filter((m) => {
          var p = r.get(m);
          return p === void 0 || p.v !== xe;
        });
        for (var [c, f] of r)
          f.v !== xe && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Dl();
      }
    }
  );
}
var la, uo, ho, fo;
function ks() {
  if (la === void 0) {
    la = window, uo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ho = Vr(t, "firstChild").get, fo = Vr(t, "nextSibling").get, ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ia(r) && (r.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return (
    /** @type {TemplateNode | null} */
    ho.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return (
    /** @type {TemplateNode | null} */
    fo.call(e)
  );
}
function _(e, t) {
  if (!F)
    return /* @__PURE__ */ Gr(e);
  var r = /* @__PURE__ */ Gr(N);
  if (r === null)
    r = N.appendChild(st());
  else if (t && r.nodeType !== Di) {
    var n = st();
    return r == null || r.before(n), Ie(n), n;
  }
  return t && Is(
    /** @type {Text} */
    r
  ), Ie(r), r;
}
function un(e, t = !1) {
  if (!F) {
    var r = /* @__PURE__ */ Gr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Pt(r) : r;
  }
  if (t) {
    if ((N == null ? void 0 : N.nodeType) !== Di) {
      var n = st();
      return N == null || N.before(n), Ie(n), n;
    }
    Is(
      /** @type {Text} */
      N
    );
  }
  return N;
}
function E(e, t = 1, r = !1) {
  let n = F ? N : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(n);
  if (!F)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Di) {
      var s = st();
      return n === null ? i == null || i.after(s) : n.before(s), Ie(s), s;
    }
    Is(
      /** @type {Text} */
      n
    );
  }
  return Ie(n), n;
}
function po(e) {
  e.textContent = "";
}
function mo() {
  return !1;
}
function Ls(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ta, e, void 0)
  );
}
function Is(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Di; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let da = !1;
function vo() {
  da || (da = !0, document.addEventListener(
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
function Bi(e) {
  var t = O, r = W;
  ot(null), Et(null);
  try {
    return e();
  } finally {
    ot(t), Et(r);
  }
}
function dd(e, t, r, n = r) {
  e.addEventListener(t, () => Bi(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), vo();
}
function cd(e) {
  W === null && (O === null && Al(), Tl()), vr && Pl();
}
function ud(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Tt(e, t) {
  var r = W;
  r !== null && (r.f & Ze) !== 0 && (e |= Ze);
  var n = {
    ctx: Oe,
    deps: null,
    nodes: null,
    f: e | Se | nt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  }, i = n;
  if ((e & kn) !== 0)
    cn !== null ? cn.push(n) : mr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Sn(n);
    } catch (a) {
      throw Pe(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Zr) === 0 && (i = i.first, (e & wr) !== 0 && (e & Br) !== 0 && i !== null && (i.f |= Br));
  }
  if (i !== null && (i.parent = r, r !== null && ud(i, r), O !== null && (O.f & ge) !== 0 && (e & pr) === 0)) {
    var s = (
      /** @type {Derived} */
      O
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Os() {
  return O !== null && !yt;
}
function wo(e) {
  const t = Tt(Oi, null);
  return ce(t, pe), t.teardown = e, t;
}
function go(e) {
  cd();
  var t = (
    /** @type {Effect} */
    W.f
  ), r = !O && (t & xt) !== 0 && (t & gr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Oe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return bo(e);
}
function bo(e) {
  return Tt(kn | $l, e);
}
function hd(e) {
  mr.ensure();
  const t = Tt(pr | Zr, e);
  return () => {
    Pe(t);
  };
}
function fd(e) {
  mr.ensure();
  const t = Tt(pr | Zr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Hr(t, () => {
      Pe(t), n(void 0);
    }) : (Pe(t), n(void 0));
  });
}
function Ds(e) {
  return Tt(kn, e);
}
function pd(e) {
  return Tt(Ps | Zr, e);
}
function Ui(e, t = 0) {
  return Tt(Oi | t, e);
}
function Ee(e, t = [], r = [], n = []) {
  rd(n, t, r, (i) => {
    Tt(Oi, () => e(...i.map(d)));
  });
}
function Yi(e, t = 0) {
  var r = Tt(wr | t, e);
  return r;
}
function rt(e) {
  return Tt(xt | Zr, e);
}
function yo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = vr, n = O;
    ca(!0), ot(null);
    try {
      t.call(null);
    } finally {
      ca(r), ot(n);
    }
  }
}
function Ns(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Bi(() => {
      i.abort(Ht);
    });
    var n = r.next;
    (r.f & pr) !== 0 ? r.parent = null : Pe(r, t), r = n;
  }
}
function md(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & xt) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  (t || (e.f & Sl) !== 0) && e.nodes !== null && e.nodes.end !== null && (vd(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ce(e, fs), Ns(e, t && !r), ei(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  yo(e), e.f ^= fs, e.f |= it;
  var i = e.parent;
  i !== null && i.first !== null && xo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function vd(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Pt(e);
    e.remove(), e = r;
  }
}
function xo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Hr(e, t, r = !0) {
  var n = [];
  _o(e, n, !0);
  var i = () => {
    r && Pe(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function _o(e, t, r) {
  if ((e.f & Ze) === 0) {
    e.f ^= Ze;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & Br) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xt) !== 0 && (e.f & wr) !== 0;
      _o(i, t, a ? r : !1), i = s;
    }
  }
}
function Ws(e) {
  ko(e, !0);
}
function ko(e, t) {
  if ((e.f & Ze) !== 0) {
    e.f ^= Ze, (e.f & pe) === 0 && (ce(e, Se), mr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Br) !== 0 || (r.f & xt) !== 0;
      ko(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Vs(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Pt(r);
      t.append(r), r = i;
    }
}
let qi = !1, vr = !1;
function ca(e) {
  vr = e;
}
let O = null, yt = !1;
function ot(e) {
  O = e;
}
let W = null;
function Et(e) {
  W = e;
}
let at = null;
function qo(e) {
  O !== null && (at === null ? at = [e] : at.push(e));
}
let Le = null, Ve = 0, Qe = null;
function wd(e) {
  Qe = e;
}
let Mo = 1, Lr = 0, Fr = Lr;
function ua(e) {
  Fr = e;
}
function So() {
  return ++Mo;
}
function di(e) {
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Ur), (t & Rt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (di(
        /** @type {Derived} */
        s
      ) && so(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & nt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    _e === null && ce(e, pe);
  }
  return !1;
}
function $o(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(at !== null && _n.call(at, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ge) !== 0 ? $o(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? ce(s, Se) : (s.f & pe) !== 0 && ce(s, Rt), As(
        /** @type {Effect} */
        s
      ));
    }
}
function jo(e) {
  var R;
  var t = Le, r = Ve, n = Qe, i = O, s = at, a = Oe, o = yt, l = Fr, c = e.f;
  Le = /** @type {null | Value[]} */
  null, Ve = 0, Qe = null, O = (c & (xt | pr)) === 0 ? e : null, at = null, qn(e.ctx), yt = !1, Fr = ++Lr, e.ac !== null && (Bi(() => {
    e.ac.abort(Ht);
  }), e.ac = null);
  try {
    e.f |= ps;
    var f = (
      /** @type {Function} */
      e.fn
    ), m = f();
    e.f |= gr;
    var p = e.deps, y = L == null ? void 0 : L.is_fork;
    if (Le !== null) {
      var g;
      if (y || ei(e, Ve), p !== null && Ve > 0)
        for (p.length = Ve + Le.length, g = 0; g < Le.length; g++)
          p[Ve + g] = Le[g];
      else
        e.deps = p = Le;
      if (Os() && (e.f & nt) !== 0)
        for (g = Ve; g < p.length; g++)
          ((R = p[g]).reactions ?? (R.reactions = [])).push(e);
    } else !y && p !== null && Ve < p.length && (ei(e, Ve), p.length = Ve);
    if (Fa() && Qe !== null && !yt && p !== null && (e.f & (ge | Rt | Se)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Qe.length; g++)
        $o(
          Qe[g],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Lr++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = Lr;
      if (t !== null)
        for (const b of t)
          b.rv = Lr;
      Qe !== null && (n === null ? n = Qe : n.push(.../** @type {Source[]} */
      Qe));
    }
    return (e.f & hr) !== 0 && (e.f ^= hr), m;
  } catch (b) {
    return Ua(b);
  } finally {
    e.f ^= ps, Le = t, Ve = r, Qe = n, O = i, at = s, qn(a), yt = o, Fr = l;
  }
}
function gd(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = xl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Le === null || !_n.call(Le, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & nt) !== 0 && (s.f ^= nt, s.f &= ~Ur), Ts(s), od(s), ei(s, 0);
  }
}
function ei(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      gd(e, r[n]);
}
function Sn(e) {
  var t = e.f;
  if ((t & it) === 0) {
    ce(e, pe);
    var r = W, n = qi;
    W = e, qi = !0;
    try {
      (t & (wr | Ia)) !== 0 ? md(e) : Ns(e), yo(e);
      var i = jo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Mo;
      var s;
      yl && Hl && (e.f & Se) !== 0 && e.deps;
    } finally {
      qi = n, W = r;
    }
  }
}
async function bd() {
  await Promise.resolve(), D();
}
function d(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (O !== null && !yt) {
    var n = W !== null && (W.f & it) !== 0;
    if (!n && (at === null || !_n.call(at, e))) {
      var i = O.deps;
      if ((O.f & ps) !== 0)
        e.rv < Lr && (e.rv = Lr, Le === null && i !== null && i[Ve] === e ? Ve++ : Le === null ? Le = [e] : Le.push(e));
      else {
        (O.deps ?? (O.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [O] : _n.call(s, O) || s.push(O);
      }
    }
  }
  if (vr && fr.has(e))
    return fr.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (vr) {
      var o = a.v;
      return ((a.f & pe) === 0 && a.reactions !== null || Ro(a)) && (o = Cs(a)), fr.set(a, o), o;
    }
    var l = (a.f & nt) === 0 && !yt && O !== null && (qi || (O.f & nt) !== 0), c = (a.f & gr) === 0;
    di(a) && (l && (a.f |= nt), so(a)), l && !c && (ao(a), zo(a));
  }
  if (_e != null && _e.has(e))
    return _e.get(e);
  if ((e.f & hr) !== 0)
    throw e.v;
  return e.v;
}
function zo(e) {
  if (e.f |= nt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & nt) === 0 && (ao(
        /** @type {Derived} */
        t
      ), zo(
        /** @type {Derived} */
        t
      ));
}
function Ro(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (fr.has(t) || (t.f & ge) !== 0 && Ro(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xr(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const Ir = Symbol("events"), Eo = /* @__PURE__ */ new Set(), qs = /* @__PURE__ */ new Set();
function yd(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || Ms.call(t, s), !s.cancelBubble)
      return Bi(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function xd(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = yd(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && wo(() => {
    t.removeEventListener(e, a, s);
  });
}
function ne(e, t, r) {
  (t[Ir] ?? (t[Ir] = {}))[e] = r;
}
function Po(e) {
  for (var t = 0; t < e.length; t++)
    Eo.add(e[t]);
  for (var r of qs)
    r(e);
}
let ha = null;
function Ms(e) {
  var b, q;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ha = e;
  var a = 0, o = ha === e && e[Ir];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ir] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    ji(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var f = O, m = W;
    ot(null), Et(null);
    try {
      for (var p, y = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var R = (q = s[Ir]) == null ? void 0 : q[n];
          R != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && R.call(s, e);
        } catch (A) {
          p ? y.push(A) : p = A;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (p) {
        for (let A of y)
          queueMicrotask(() => {
            throw A;
          });
        throw p;
      }
    } finally {
      e[Ir] = t, delete e.currentTarget, ot(f), Et(m);
    }
  }
}
var Ra;
const ns = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ra = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ra.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function _d(e) {
  return (
    /** @type {string} */
    (ns == null ? void 0 : ns.createHTML(e)) ?? e
  );
}
function kd(e) {
  var t = Ls("template");
  return t.innerHTML = _d(e.replaceAll("<!>", "<!---->")), t.content;
}
function fn(e, t) {
  var r = (
    /** @type {Effect} */
    W
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  var r = (t & gl) !== 0, n = (t & bl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (F)
      return fn(N, null), N;
    i === void 0 && (i = kd(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gr(i)));
    var a = (
      /** @type {TemplateNode} */
      n || uo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gr(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      fn(o, l);
    } else
      fn(a, a);
    return a;
  };
}
function To() {
  if (F)
    return fn(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = st();
  return e.append(t, r), fn(t, r), e;
}
function Q(e, t) {
  if (F) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      W
    );
    ((r.f & gr) === 0 || r.nodes.end === null) && (r.nodes.end = N), Wi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const qd = ["touchstart", "touchmove"];
function Md(e) {
  return qd.includes(e);
}
function Ae(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ao(e, t) {
  return Co(e, t);
}
function Sd(e, t) {
  ks(), t.intro = t.intro ?? !1;
  const r = t.target, n = F, i = N;
  try {
    for (var s = /* @__PURE__ */ Gr(r); s && (s.nodeType !== li || /** @type {Comment} */
    s.data !== Pa); )
      s = /* @__PURE__ */ Pt(s);
    if (!s)
      throw xn;
    Zt(!0), Ie(
      /** @type {Comment} */
      s
    );
    const a = Co(e, { ...t, anchor: s });
    return Zt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== xn && console.warn("Failed to hydrate: ", a), t.recover === !1 && Ll(), ks(), po(r), Zt(!1), Ao(e, t);
  } finally {
    Zt(n), Ie(i);
  }
}
const bi = /* @__PURE__ */ new Map();
function Co(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  ks();
  var l = void 0, c = fd(() => {
    var f = r ?? t.appendChild(st());
    ed(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (y) => {
        Vi({});
        var g = (
          /** @type {ComponentContext} */
          Oe
        );
        if (s && (g.c = s), i && (n.$$events = i), F && fn(
          /** @type {TemplateNode} */
          y,
          null
        ), l = e(y, n) || {}, F && (W.nodes.end = N, N === null || N.nodeType !== li || /** @type {Comment} */
        N.data !== Es))
          throw Ni(), xn;
        Hi();
      },
      o
    );
    var m = /* @__PURE__ */ new Set(), p = (y) => {
      for (var g = 0; g < y.length; g++) {
        var R = y[g];
        if (!m.has(R)) {
          m.add(R);
          var b = Md(R);
          for (const k of [t, document]) {
            var q = bi.get(k);
            q === void 0 && (q = /* @__PURE__ */ new Map(), bi.set(k, q));
            var A = q.get(R);
            A === void 0 ? (k.addEventListener(R, Ms, { passive: b }), q.set(R, 1)) : q.set(R, A + 1);
          }
        }
      }
    };
    return p(Ii(Eo)), qs.add(p), () => {
      var b;
      for (var y of m)
        for (const q of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            bi.get(q)
          ), R = (
            /** @type {number} */
            g.get(y)
          );
          --R == 0 ? (q.removeEventListener(y, Ms), g.delete(y), g.size === 0 && bi.delete(q)) : g.set(y, R);
        }
      qs.delete(p), f !== r && ((b = f.parentNode) == null || b.removeChild(f));
    };
  });
  return Ss.set(l, c), l;
}
let Ss = /* @__PURE__ */ new WeakMap();
function $d(e, t) {
  const r = Ss.get(e);
  return r ? (Ss.delete(e), r(t)) : Promise.resolve();
}
var bt, jt, Ue, Wr, si, ai, Ai;
class Lo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    C(this, bt, /* @__PURE__ */ new Map());
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
    C(this, jt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    C(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    C(this, Wr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    C(this, si, !0);
    /**
     * @param {Batch} batch
     */
    C(this, ai, (t) => {
      if (h(this, bt).has(t)) {
        var r = (
          /** @type {Key} */
          h(this, bt).get(t)
        ), n = h(this, jt).get(r);
        if (n)
          Ws(n), h(this, Wr).delete(r);
        else {
          var i = h(this, Ue).get(r);
          i && (h(this, jt).set(r, i.effect), h(this, Ue).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of h(this, bt)) {
          if (h(this, bt).delete(s), s === t)
            break;
          const o = h(this, Ue).get(a);
          o && (Pe(o.effect), h(this, Ue).delete(a));
        }
        for (const [s, a] of h(this, jt)) {
          if (s === r || h(this, Wr).has(s)) continue;
          const o = () => {
            if (Array.from(h(this, bt).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Vs(a, c), c.append(st()), h(this, Ue).set(s, { effect: a, fragment: c });
            } else
              Pe(a);
            h(this, Wr).delete(s), h(this, jt).delete(s);
          };
          h(this, si) || !n ? (h(this, Wr).add(s), Hr(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    C(this, Ai, (t) => {
      h(this, bt).delete(t);
      const r = Array.from(h(this, bt).values());
      for (const [n, i] of h(this, Ue))
        r.includes(n) || (Pe(i.effect), h(this, Ue).delete(n));
    });
    this.anchor = t, T(this, si, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      L
    ), i = mo();
    if (r && !h(this, jt).has(t) && !h(this, Ue).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = st();
        s.append(a), h(this, Ue).set(t, {
          effect: rt(() => r(a)),
          fragment: s
        });
      } else
        h(this, jt).set(
          t,
          rt(() => r(this.anchor))
        );
    if (h(this, bt).set(n, t), i) {
      for (const [o, l] of h(this, jt))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of h(this, Ue))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(h(this, ai)), n.ondiscard(h(this, Ai));
    } else
      F && (this.anchor = N), h(this, ai).call(this, n);
  }
}
bt = new WeakMap(), jt = new WeakMap(), Ue = new WeakMap(), Wr = new WeakMap(), si = new WeakMap(), ai = new WeakMap(), Ai = new WeakMap();
function jd(e, t, ...r) {
  var n = new Lo(e);
  Yi(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, Br);
}
function Io(e) {
  Oe === null && zl(), go(() => {
    const t = Xr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ye(e, t, r = !1) {
  var n;
  F && (n = N, Wi());
  var i = new Lo(e), s = r ? Br : 0;
  function a(o, l) {
    if (F) {
      var c = Na(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(c.substring(1))) {
        var f = zi();
        Ie(f), i.anchor = f, Zt(!1), i.ensure(o, l), Zt(!0);
        return;
      }
    }
    i.ensure(o, l);
  }
  Yi(() => {
    var o = !1;
    t((l, c = 0) => {
      o = !0, a(c, l);
    }), o || a(-1, null);
  }, s);
}
function zd(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let m = t[o];
    Hr(
      m,
      () => {
        if (s) {
          if (s.pending.delete(m), s.done.add(m), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            $s(e, Ii(s.done)), p.delete(s), p.size === 0 && (e.outrogroups = null);
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
      var c = (
        /** @type {Element} */
        r
      ), f = (
        /** @type {Element} */
        c.parentNode
      );
      po(f), f.append(c), e.items.clear();
    }
    $s(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function $s(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const o of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n != null && n.has(s)) {
      s.f |= zt;
      const a = document.createDocumentFragment();
      Vs(s, a);
    } else
      Pe(t[i], r);
  }
}
var fa;
function Qn(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Ea) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = F ? Ie(/* @__PURE__ */ Gr(c)) : c.appendChild(st());
  }
  F && Wi();
  var f = null, m = /* @__PURE__ */ io(() => {
    var k = r();
    return Aa(k) ? k : k == null ? [] : Ii(k);
  }), p, y = /* @__PURE__ */ new Map(), g = !0;
  function R(k) {
    (A.effect.f & it) === 0 && (A.pending.delete(k), A.fallback = f, Rd(A, p, a, t, n), f !== null && (p.length === 0 ? (f.f & zt) === 0 ? Ws(f) : (f.f ^= zt, Yn(f, null, a)) : Hr(f, () => {
      f = null;
    })));
  }
  function b(k) {
    A.pending.delete(k);
  }
  var q = Yi(() => {
    p = /** @type {V[]} */
    d(m);
    var k = p.length;
    let B = !1;
    if (F) {
      var K = Na(a) === Rs;
      K !== (k === 0) && (a = zi(), Ie(a), Zt(!1), B = !0);
    }
    for (var se = /* @__PURE__ */ new Set(), Y = (
      /** @type {Batch} */
      L
    ), ue = mo(), z = 0; z < k; z += 1) {
      F && N.nodeType === li && /** @type {Comment} */
      N.data === Es && (a = /** @type {Comment} */
      N, B = !0, Zt(!1));
      var me = p[z], ve = n(me, z), de = g ? null : o.get(ve);
      de ? (de.v && Mn(de.v, me), de.i && Mn(de.i, z), ue && Y.unskip_effect(de.e)) : (de = Ed(
        o,
        g ? a : fa ?? (fa = st()),
        me,
        ve,
        z,
        i,
        t,
        r
      ), g || (de.e.f |= zt), o.set(ve, de)), se.add(ve);
    }
    if (k === 0 && s && !f && (g ? f = rt(() => s(a)) : (f = rt(() => s(fa ?? (fa = st()))), f.f |= zt)), k > se.size && El(), F && k > 0 && Ie(zi()), !g)
      if (y.set(Y, se), ue) {
        for (const [De, _t] of o)
          se.has(De) || Y.skip_effect(_t.e);
        Y.oncommit(R), Y.ondiscard(b);
      } else
        R(Y);
    B && Zt(!0), d(m);
  }), A = { effect: q, items: o, pending: y, outrogroups: null, fallback: f };
  g = !1, F && (a = N);
}
function Fn(e) {
  for (; e !== null && (e.f & xt) === 0; )
    e = e.next;
  return e;
}
function Rd(e, t, r, n, i) {
  var me, ve, de, De, _t, Kr, br, kt, At;
  var s = (n & hl) !== 0, a = t.length, o = e.items, l = Fn(e.effect.first), c, f = null, m, p = [], y = [], g, R, b, q;
  if (s)
    for (q = 0; q < a; q += 1)
      g = t[q], R = i(g, q), b = /** @type {EachItem} */
      o.get(R).e, (b.f & zt) === 0 && ((ve = (me = b.nodes) == null ? void 0 : me.a) == null || ve.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(b));
  for (q = 0; q < a; q += 1) {
    if (g = t[q], R = i(g, q), b = /** @type {EachItem} */
    o.get(R).e, e.outrogroups !== null)
      for (const je of e.outrogroups)
        je.pending.delete(b), je.done.delete(b);
    if ((b.f & Ze) !== 0 && (Ws(b), s && ((De = (de = b.nodes) == null ? void 0 : de.a) == null || De.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(b))), (b.f & zt) !== 0)
      if (b.f ^= zt, b === l)
        Yn(b, null, r);
      else {
        var A = f ? f.next : l;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), or(e, f, b), or(e, b, A), Yn(b, A, r), f = b, p = [], y = [], l = Fn(f.next);
        continue;
      }
    if (b !== l) {
      if (c !== void 0 && c.has(b)) {
        if (p.length < y.length) {
          var k = y[0], B;
          f = k.prev;
          var K = p[0], se = p[p.length - 1];
          for (B = 0; B < p.length; B += 1)
            Yn(p[B], k, r);
          for (B = 0; B < y.length; B += 1)
            c.delete(y[B]);
          or(e, K.prev, se.next), or(e, f, K), or(e, se, k), l = k, f = se, q -= 1, p = [], y = [];
        } else
          c.delete(b), Yn(b, l, r), or(e, b.prev, b.next), or(e, b, f === null ? e.effect.first : f.next), or(e, f, b), f = b;
        continue;
      }
      for (p = [], y = []; l !== null && l !== b; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), y.push(l), l = Fn(l.next);
      if (l === null)
        continue;
    }
    (b.f & zt) === 0 && p.push(b), f = b, l = Fn(b.next);
  }
  if (e.outrogroups !== null) {
    for (const je of e.outrogroups)
      je.pending.size === 0 && ($s(e, Ii(je.done)), (_t = e.outrogroups) == null || _t.delete(je));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var Y = [];
    if (c !== void 0)
      for (b of c)
        (b.f & Ze) === 0 && Y.push(b);
    for (; l !== null; )
      (l.f & Ze) === 0 && l !== e.fallback && Y.push(l), l = Fn(l.next);
    var ue = Y.length;
    if (ue > 0) {
      var z = (n & Ea) !== 0 && a === 0 ? r : null;
      if (s) {
        for (q = 0; q < ue; q += 1)
          (br = (Kr = Y[q].nodes) == null ? void 0 : Kr.a) == null || br.measure();
        for (q = 0; q < ue; q += 1)
          (At = (kt = Y[q].nodes) == null ? void 0 : kt.a) == null || At.fix();
      }
      zd(e, Y, z);
    }
  }
  s && Xt(() => {
    var je, Jr;
    if (m !== void 0)
      for (b of m)
        (Jr = (je = b.nodes) == null ? void 0 : je.a) == null || Jr.apply();
  });
}
function Ed(e, t, r, n, i, s, a, o) {
  var l = (a & cl) !== 0 ? (a & fl) === 0 ? /* @__PURE__ */ lo(r, !1, !1) : Yr(r) : null, c = (a & ul) !== 0 ? Yr(i) : null;
  return {
    v: l,
    i: c,
    e: rt(() => (s(t, l ?? r, c ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Yn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & zt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function or(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Hs(e, t) {
  Ds(() => {
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
      const i = Ls("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Oo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Oo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Pd() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Oo(e)) && (n && (n += " "), n += t);
  return n;
}
function Td(e) {
  return typeof e == "object" ? Pd(e) : e ?? "";
}
const pa = [...` 	
\r\f \v\uFEFF`];
function Ad(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || pa.includes(n[a - 1])) && (o === n.length || pa.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function ma(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function is(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Cd(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, a = 0, o = !1, l = [];
      n && l.push(...Object.keys(n).map(is)), i && l.push(...Object.keys(i).map(is));
      var c = 0, f = -1;
      const R = e.length;
      for (var m = 0; m < R; m++) {
        var p = e[m];
        if (o ? p === "/" && e[m - 1] === "*" && (o = !1) : s ? s === p && (s = !1) : p === "/" && e[m + 1] === "*" ? o = !0 : p === '"' || p === "'" ? s = p : p === "(" ? a++ : p === ")" && a--, !o && s === !1 && a === 0) {
          if (p === ":" && f === -1)
            f = m;
          else if (p === ";" || m === R - 1) {
            if (f !== -1) {
              var y = is(e.substring(c, f).trim());
              if (!l.includes(y)) {
                p !== ";" && m++;
                var g = e.substring(c, m).trim();
                r += " " + g + ";";
              }
            }
            c = m + 1, f = -1;
          }
        }
      }
    }
    return n && (r += ma(n)), i && (r += ma(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function tt(e, t, r, n, i, s) {
  var a = e.__className;
  if (F || a !== r || a === void 0) {
    var o = Ad(r, n, s);
    (!F || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return s;
}
function ss(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function Ge(e, t, r, n) {
  var i = e.__style;
  if (F || i !== t) {
    var s = Cd(t, n);
    (!F || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else n && (Array.isArray(n) ? (ss(e, r == null ? void 0 : r[0], n[0]), ss(e, r == null ? void 0 : r[1], n[1], "important")) : ss(e, r, n));
  return n;
}
const Ld = Symbol("is custom element"), Id = Symbol("is html"), Od = Da ? "link" : "LINK", Dd = Da ? "progress" : "PROGRESS";
function yi(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          re(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          re(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Xt(r), vo();
  }
}
function Nd(e, t) {
  var r = Do(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Dd) || (e.value = t ?? "");
}
function re(e, t, r, n) {
  var i = Do(e);
  F && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Od) || i[t] !== (i[t] = r) && (t === "loading" && (e[jl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Wd(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Do(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ld]: e.nodeName.includes("-"),
      [Id]: e.namespaceURI === Ta
    })
  );
}
var va = /* @__PURE__ */ new Map();
function Wd(e) {
  var t = e.getAttribute("is") || e.nodeName, r = va.get(t);
  if (r) return r;
  va.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = _l(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Ca(i);
  }
  return r;
}
function as(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  dd(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = os(e) ? ls(s) : s, r(s), L !== null && n.add(L), await bd(), s !== (s = t())) {
      var a = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var c = e.value.length;
        a === o && o === l && c > l ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = a, e.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (F && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xr(t) == null && e.value) && (r(os(e) ? ls(e.value) : e.value), L !== null && n.add(L)), Ui(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        L
      );
      if (n.has(s))
        return;
    }
    os(e) && i === ls(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function os(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ls(e) {
  return e === "" ? null : +e;
}
var cr, yn, oi, Ci, No;
const Li = class Li {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    C(this, Ci);
    /** */
    C(this, cr, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    C(this, yn);
    /** @type {ResizeObserverOptions} */
    C(this, oi);
    T(this, oi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = h(this, cr).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), h(this, cr).set(t, n), J(this, Ci, No).call(this).observe(t, h(this, oi)), () => {
      var i = h(this, cr).get(t);
      i.delete(r), i.size === 0 && (h(this, cr).delete(t), h(this, yn).unobserve(t));
    };
  }
};
cr = new WeakMap(), yn = new WeakMap(), oi = new WeakMap(), Ci = new WeakSet(), No = function() {
  return h(this, yn) ?? T(this, yn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        Li.entries.set(r.target, r);
        for (var n of h(this, cr).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
ee(Li, "entries", /* @__PURE__ */ new WeakMap());
let js = Li;
var Vd = /* @__PURE__ */ new js({
  box: "border-box"
});
function wa(e, t, r) {
  var n = Vd.observe(e, () => r(e[t]));
  Ds(() => (Xr(() => r(e[t])), n));
}
function ga(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function zs(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Oe.r
  ), s = (
    /** @type {Effect} */
    W
  );
  return Ds(() => {
    var a, o;
    return Ui(() => {
      a = o, o = [], Xr(() => {
        e !== r(...o) && (t(e, ...o), a && ga(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let l = s;
      for (; l !== i && l.parent !== null && l.parent.f & fs; )
        l = l.parent;
      const c = () => {
        o && ga(r(...o), e) && t(null, ...o);
      }, f = l.teardown;
      l.teardown = () => {
        c(), f == null || f();
      };
    };
  }), e;
}
function V(e, t, r, n) {
  var A;
  var i = (r & vl) !== 0, s = (r & wl) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, l = () => (o && (o = !1, a = s ? Xr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let c;
  if (i) {
    var f = Xn in e || Oa in e;
    c = ((A = Vr(e, t)) == null ? void 0 : A.set) ?? (f && t in e ? (k) => e[t] = k : void 0);
  }
  var m, p = !1;
  i ? [m, p] = Zl(() => (
    /** @type {V} */
    e[t]
  )) : m = /** @type {V} */
  e[t], m === void 0 && n !== void 0 && (m = l(), c && (Il(), c(m)));
  var y;
  if (y = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k === void 0 ? l() : (o = !0, k);
  }, (r & ml) === 0)
    return y;
  if (c) {
    var g = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, B) {
        return arguments.length > 0 ? ((!B || g || p) && c(B ? y() : k), k) : y();
      })
    );
  }
  var R = !1, b = ((r & pl) !== 0 ? Fi : io)(() => (R = !1, y()));
  i && d(b);
  var q = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    (function(k, B) {
      if (arguments.length > 0) {
        const K = B ? d(b) : i ? Cr(k) : k;
        return w(b, K), R = !0, a !== void 0 && (a = K), k;
      }
      return vr && R || (q.f & it) !== 0 ? b.v : d(b);
    })
  );
}
function Hd(e) {
  return new Fd(e);
}
var Gt, et;
class Fd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    C(this, Gt);
    /** @type {Record<string, any>} */
    C(this, et);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var l = /* @__PURE__ */ lo(o, !1, !1);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return d(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Oa ? !0 : (d(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return w(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    T(this, et, (t.hydrate ? Sd : Ao)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && D(), T(this, Gt, i.$$events);
    for (const a of Object.keys(h(this, et)))
      a === "$set" || a === "$destroy" || a === "$on" || ji(this, a, {
        get() {
          return h(this, et)[a];
        },
        /** @param {any} value */
        set(o) {
          h(this, et)[a] = o;
        },
        enumerable: !0
      });
    h(this, et).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, h(this, et).$destroy = () => {
      $d(h(this, et));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    h(this, et).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    h(this, Gt)[t] = h(this, Gt)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return h(this, Gt)[t].push(n), () => {
      h(this, Gt)[t] = h(this, Gt)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    h(this, et).$destroy();
  }
}
Gt = new WeakMap(), et = new WeakMap();
let Wo;
typeof HTMLElement == "function" && (Wo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ee(this, "$$ctor");
    /** Slots */
    ee(this, "$$s");
    /** @type {any} The Svelte component instance */
    ee(this, "$$c");
    /** Whether or not the custom element is connected */
    ee(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ee(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ee(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ee(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ee(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ee(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = r, n && (this.$$shadowRoot = this.attachShadow(n));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
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
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const a = Ls("slot");
          i !== "default" && (a.name = i), Q(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Bd(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Mi(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Hd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = hd(() => {
        Ui(() => {
          var i;
          this.$$r = !0;
          for (const s of $i(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = Mi(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
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
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Mi(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return $i(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Mi(e, t, r, n) {
  var s;
  const i = (s = r[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Bd(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Fs(e, t, r, n, i, s) {
  let a = class extends Wo {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return $i(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return $i(t).forEach((o) => {
    ji(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var m;
        l = Mi(o, l, t), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var f = (m = Vr(c, o)) == null ? void 0 : m.get;
          f ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), n.forEach((o) => {
    ji(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const S = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, $ = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, ba = (e) => `<g fill="#000">${e}</g>`, Ud = {
  "create-user": {
    id: "create-user",
    label: "Create user",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Studio add user",
        tone: "signature",
        svg: S(
          $(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: S(
          $(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: S(
          `${ba('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${$(
            '<path d="M15.25 4.75v4.5"/><path d="M13 7h4.5"/>',
            "1.35"
          )}`
        )
      }
    }
  },
  "user-directory": {
    id: "user-directory",
    label: "User directory",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Dual profile",
        tone: "signature",
        svg: S(
          $(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: S(
          $(
            '<path d="M6.25 5.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"/><path d="M13.75 5.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"/><path d="M4.5 14.5a2.5 2.5 0 0 1 3.5-2.3 2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 3.5 2.3"/>',
            "1.45"
          )
        )
      }
    }
  },
  "create-role": {
    id: "create-role",
    label: "Create role",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Role composer",
        tone: "signature",
        svg: S(
          $(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: S(
          $(
            '<path d="M6 5.5h7.5"/><path d="M6 9.5h5.5"/><path d="M6 13.5h7.5"/><path d="M13.75 8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"/><path d="M13.75 3.75v3.5"/><path d="M12 5.5h3.5"/>',
            "1.45"
          )
        )
      }
    }
  },
  "role-directory": {
    id: "role-directory",
    label: "Role directory",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Role catalog",
        tone: "signature",
        svg: S(
          $(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: S(
          $(
            '<path d="M5 4.75h10v10.5H5z"/><path d="M7 4.75v10.5"/><path d="M8.75 7.5h4.5"/><path d="M8.75 10.5h4.5"/><path d="M8.75 13.5h3"/>',
            "1.4"
          )
        )
      }
    }
  },
  "display-mode": {
    id: "display-mode",
    label: "Display mode",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Viewport switch",
        tone: "signature",
        svg: S(
          $(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: S(
          $(
            '<path d="M4.5 5.5h11v8.5h-11z"/><path d="M10 5.5v8.5"/><path d="M7 16h6"/>',
            "1.45"
          )
        )
      }
    }
  },
  "window-preferences": {
    id: "window-preferences",
    label: "Window preferences",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Window manager",
        tone: "signature",
        svg: S(
          $(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: S(
          $(
            '<path d="M4.75 5h10.5v10H4.75z"/><path d="M7 8.25h6"/><path d="M9 8.25V6.5"/><path d="M7 11.5h6"/><path d="M12 11.5V9.75"/><path d="M7 14.75h6"/><path d="M8.25 14.75V13"/>',
            "1.35"
          )
        )
      }
    }
  },
  "settings-payload": {
    id: "settings-payload",
    label: "Settings payload",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Payload card",
        tone: "signature",
        svg: S(
          $(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: S(
          $(
            '<path d="M7.25 5.25H6.5a1.25 1.25 0 0 0-1.25 1.25v1a1.5 1.5 0 0 1-1 1.41 1.5 1.5 0 0 1 1 1.41v1a1.25 1.25 0 0 0 1.25 1.25h.75"/><path d="M12.75 5.25h.75a1.25 1.25 0 0 1 1.25 1.25v1a1.5 1.5 0 0 0 1 1.41 1.5 1.5 0 0 0-1 1.41v1a1.25 1.25 0 0 1-1.25 1.25h-.75"/><path d="M8.5 7.5h3"/><path d="M8.5 10h3"/><path d="M8.5 12.5h2"/>',
            "1.3"
          )
        )
      }
    }
  },
  "catalog-search": {
    id: "catalog-search",
    label: "Catalog search",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Search ring",
        tone: "signature",
        svg: S(
          $('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: S(
          $(
            '<path d="M8.75 5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"/><path d="M11.75 11.75 15 15"/><path d="M7 8.75h3.5"/>',
            "1.45"
          )
        )
      }
    }
  },
  "catalog-results": {
    id: "catalog-results",
    label: "Catalog results",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Result rows",
        tone: "signature",
        svg: S(
          `${$('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${ba(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: S(
          $(
            '<path d="M8 6h7"/><path d="M8 10h7"/><path d="M8 14h5"/><path d="m4.5 5.75 1 1L7 5.25"/><path d="m4.5 9.75 1 1L7 9.25"/><path d="m4.5 13.75 1 1L7 13.25"/>',
            "1.45"
          )
        )
      }
    }
  },
  "catalog-facets": {
    id: "catalog-facets",
    label: "Catalog facets",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Facet filter",
        tone: "signature",
        svg: S(
          $(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: S(
          $('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
        )
      }
    }
  },
  "layout-lock": {
    id: "layout-lock",
    label: "Layout lock",
    category: "toolbar",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Locked layout",
        tone: "signature",
        svg: S(
          $(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: S(
          $(
            '<path d="M10 3.75 14.75 5v4.25c0 3.25-1.9 5.45-4.75 7-2.85-1.55-4.75-3.75-4.75-7V5L10 3.75Z"/><path d="M8.1 9.25V8.5a1.9 1.9 0 0 1 3.8 0v.75"/><path d="M7.5 9.25h5v3.75h-5z"/>',
            "1.35"
          )
        )
      }
    }
  },
  "layout-unlock": {
    id: "layout-unlock",
    label: "Layout unlock",
    category: "toolbar",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Unlocked layout",
        tone: "signature",
        svg: S(
          $(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: S(
          $(
            '<path d="M12.75 4.5a2.5 2.5 0 0 0-2.8 3.2l-4.7 4.7a1.3 1.3 0 1 0 1.85 1.85l4.7-4.7a2.5 2.5 0 0 0 3.2-2.8l-1.65 1.15-1.7-.4-.4-1.7 1.5-1.3Z"/>',
            "1.3"
          )
        )
      }
    }
  },
  "layout-reset": {
    id: "layout-reset",
    label: "Layout reset",
    category: "toolbar",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Loop reset",
        tone: "signature",
        svg: S(
          $(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: S(
          $('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
        )
      }
    }
  },
  "buttons-manager": {
    id: "buttons-manager",
    label: "Buttons manager",
    category: "toolbar",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Button stack",
        tone: "signature",
        svg: S(
          $(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: S($('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
      }
    }
  },
  popout: {
    id: "popout",
    label: "Pop out",
    category: "action",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Launch diagonal",
        tone: "signature",
        svg: S(
          $(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: S(
          $(
            '<path d="M4.75 5.75h7.5v7.5h-7.5z"/><path d="M10.25 4.75h5v5"/><path d="M9.75 10.25 15 5"/>',
            "1.45"
          )
        )
      }
    }
  },
  pin: {
    id: "pin",
    label: "Pin",
    category: "action",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Studio pin",
        tone: "signature",
        svg: S(
          $(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: S(
          $('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: S($('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
      }
    }
  },
  help: {
    id: "help",
    label: "Help",
    category: "action",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Orb help",
        tone: "signature",
        svg: S(
          $(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: S($('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
      }
    }
  },
  edge: {
    id: "edge",
    label: "Edge pin",
    category: "action",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Dock edge",
        tone: "signature",
        svg: S(
          $(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: S(
          $(
            '<path d="M4.75 7h10.5v6H4.75z"/><path d="M15.75 4.75v10.5"/><path d="M7 10h6"/>',
            "1.45"
          )
        )
      }
    }
  },
  open: {
    id: "open",
    label: "Open",
    category: "action",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Open view",
        tone: "signature",
        svg: S(
          $(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: S(
          $('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
        )
      }
    }
  },
  center: {
    id: "center",
    label: "Center",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Center frame",
        tone: "signature",
        svg: S(
          $('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: S(
          $('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
        )
      }
    }
  },
  "roll-up": {
    id: "roll-up",
    label: "Roll up",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Chevron up",
        tone: "signature",
        svg: S($('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: S($('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
      }
    }
  },
  "roll-down": {
    id: "roll-down",
    label: "Roll down",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Chevron down",
        tone: "signature",
        svg: S($('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: S($('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
      }
    }
  },
  minimize: {
    id: "minimize",
    label: "Minimize",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Flat minimize",
        tone: "signature",
        svg: S($('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: S($('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
      }
    }
  },
  maximize: {
    id: "maximize",
    label: "Maximize",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Square maximize",
        tone: "signature",
        svg: S($('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: S(
          $('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
        )
      }
    }
  },
  restore: {
    id: "restore",
    label: "Restore",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Window restore",
        tone: "signature",
        svg: S(
          $('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: S(
          $('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
        )
      }
    }
  },
  close: {
    id: "close",
    label: "Close",
    category: "window",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Cross close",
        tone: "signature",
        svg: S($('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: S($('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Yd(e, t) {
  const r = Ud[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const ya = /* @__PURE__ */ new Map();
function Gd(e, t) {
  const r = `${e}:${t ?? "default"}`, n = ya.get(r);
  if (n)
    return n;
  const i = Yd(e, t), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return ya.set(r, s), s;
}
var Zd = /* @__PURE__ */ le("<span></span>");
const Xd = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function Mt(e, t) {
  Vi(t, !0), Hs(e, Xd);
  let r = V(t, "name", 7), n = V(t, "variant", 7), i = V(t, "decorative", 7, !0), s = V(t, "label", 7), a = V(t, "title", 7), o = V(t, "size", 7, "1rem"), l = V(t, "className", 7, ""), c = /* @__PURE__ */ U(() => Gd(r(), n())), f = /* @__PURE__ */ U(() => s() ?? a() ?? r());
  var m = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), D();
    },
    get variant() {
      return n();
    },
    set variant(g) {
      n(g), D();
    },
    get decorative() {
      return i();
    },
    set decorative(g = !0) {
      i(g), D();
    },
    get label() {
      return s();
    },
    set label(g) {
      s(g), D();
    },
    get title() {
      return a();
    },
    set title(g) {
      a(g), D();
    },
    get size() {
      return o();
    },
    set size(g = "1rem") {
      o(g), D();
    },
    get className() {
      return l();
    },
    set className(g = "") {
      l(g), D();
    }
  }, p = Zd();
  let y;
  return Ee(
    (g) => {
      tt(p, 1, g, "svelte-1a09gvd"), re(p, "aria-hidden", i()), re(p, "aria-label", i() ? void 0 : d(f)), re(p, "role", i() ? void 0 : "img"), re(p, "title", a()), y = Ge(p, "", y, { "--icon-mask": d(c), width: o(), height: o() });
    },
    [() => Td(`app-icon ${l()}`.trim())]
  ), Q(e, p), Hi(m);
}
Fs(
  Mt,
  {
    name: {},
    variant: {},
    decorative: {},
    label: {},
    title: {},
    size: {},
    className: {}
  },
  [],
  [],
  { mode: "open" }
);
const Kd = "efsdb:window-settings", xa = {
  inherit: {
    id: "inherit",
    label: "Studio shell",
    shadow: "0 26px 60px rgba(0, 0, 0, 0.34)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 18,
      chromePadding: 10,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "system"
    }
  },
  aero: {
    id: "aero",
    label: "Windows 7 glass",
    shadow: "0 16px 34px rgba(0, 0, 0, 0.2), 0 28px 58px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "windows-7",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 9,
      chromeStyle: "pane",
      alignment: "center",
      snapRestoreOnRelease: !0,
      shiftDragAction: "pin",
      fontPreset: "segoe-ui"
    }
  },
  "windows-vista": {
    id: "windows-vista",
    label: "Windows Vista pane",
    shadow: "0 18px 38px rgba(0, 0, 0, 0.24), 0 34px 62px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "windows-7",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 2,
      borderRadius: 10,
      chromePadding: 11,
      chromeStyle: "pane",
      alignment: "center",
      snapRestoreOnRelease: !0,
      shiftDragAction: "pin",
      fontPreset: "segoe-ui"
    }
  },
  "windows-11-mica": {
    id: "windows-11-mica",
    label: "Windows 11 mica",
    shadow: "0 26px 64px rgba(0, 0, 0, 0.28)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 16,
      chromePadding: 8,
      chromeStyle: "mica",
      alignment: "center",
      snapRestoreOnRelease: !0,
      shiftDragAction: "pin",
      fontPreset: "segoe-ui"
    }
  },
  "windows-10-flat": {
    id: "windows-10-flat",
    label: "Windows 10 flat",
    shadow: "0 20px 44px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "windows-10",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 4,
      chromePadding: 2,
      chromeStyle: "solid",
      alignment: "left",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "segoe-ui"
    }
  },
  slate: {
    id: "slate",
    label: "Slate studio",
    shadow: "0 24px 54px rgba(0, 0, 0, 0.3)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 18,
      chromePadding: 10,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "system"
    }
  },
  paper: {
    id: "paper",
    label: "Paper shell",
    shadow: "0 22px 48px rgba(0, 0, 0, 0.22)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 20,
      chromePadding: 12,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "serif"
    }
  },
  "windows-9x": {
    id: "windows-9x",
    label: "Windows 9x",
    shadow: "0 14px 28px rgba(0, 0, 0, 0.24), inset 1px 1px 0 rgba(255, 255, 255, 0.26), inset -1px -1px 0 rgba(0, 0, 0, 0.28)",
    settings: {
      buttonLayout: "windows-8",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 2,
      borderRadius: 0,
      chromePadding: 2,
      chromeStyle: "solid",
      alignment: "left",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "system"
    }
  },
  "mac-os-x": {
    id: "mac-os-x",
    label: "Mac glass",
    shadow: "0 18px 42px rgba(0, 0, 0, 0.24), 0 32px 62px rgba(0, 0, 0, 0.2)",
    settings: {
      buttonLayout: "mac",
      systemButtonPlacement: "left",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 14,
      chromePadding: 10,
      chromeStyle: "glass",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "mac-system"
    }
  },
  ios: {
    id: "ios",
    label: "iOS frost",
    shadow: "0 26px 64px rgba(0, 0, 0, 0.18)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "mirrored",
      borderWidth: 1,
      borderRadius: 22,
      chromePadding: 10,
      chromeStyle: "frost",
      alignment: "center",
      snapRestoreOnRelease: !0,
      shiftDragAction: "pin",
      fontPreset: "ios-system"
    }
  },
  android: {
    id: "android",
    label: "Android material",
    shadow: "0 16px 26px rgba(0, 0, 0, 0.16), 0 26px 48px rgba(0, 0, 0, 0.18)",
    settings: {
      buttonLayout: "windows-10",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 12,
      chromePadding: 4,
      chromeStyle: "solid",
      alignment: "left",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "android-system"
    }
  },
  "ubuntu-yaru": {
    id: "ubuntu-yaru",
    label: "Ubuntu Yaru",
    shadow: "0 18px 36px rgba(0, 0, 0, 0.24), 0 28px 54px rgba(0, 0, 0, 0.18)",
    settings: {
      buttonLayout: "ubuntu",
      systemButtonPlacement: "left",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 14,
      chromePadding: 8,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "linux-system"
    }
  },
  xubuntu: {
    id: "xubuntu",
    label: "Xubuntu glass",
    shadow: "0 18px 38px rgba(0, 0, 0, 0.22), 0 28px 54px rgba(0, 0, 0, 0.18)",
    settings: {
      buttonLayout: "xubuntu",
      systemButtonPlacement: "left",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 7,
      chromeStyle: "glass",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "linux-system"
    }
  },
  gnome: {
    id: "gnome",
    label: "GNOME Adwaita",
    shadow: "0 18px 40px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "gnome",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 16,
      chromePadding: 8,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "linux-system"
    }
  }
}, _a = {
  system: {
    id: "system",
    label: "System UI",
    stack: '"Segoe UI Variable", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, system-ui, sans-serif'
  },
  "segoe-ui": {
    id: "segoe-ui",
    label: "Segoe UI",
    stack: '"Segoe UI Variable", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  "mac-system": {
    id: "mac-system",
    label: "macOS system",
    stack: '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
  },
  "ios-system": {
    id: "ios-system",
    label: "iOS system",
    stack: '"SF Pro Rounded", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
  },
  "android-system": {
    id: "android-system",
    label: "Android system",
    stack: 'Roboto, "Noto Sans", "Droid Sans", "Segoe UI", sans-serif'
  },
  "linux-system": {
    id: "linux-system",
    label: "Linux desktop",
    stack: 'Ubuntu, Cantarell, "Liberation Sans", "DejaVu Sans", sans-serif'
  },
  humanist: {
    id: "humanist",
    label: "Humanist",
    stack: '"Trebuchet MS", "Segoe UI Variable", "Segoe UI", sans-serif'
  },
  serif: {
    id: "serif",
    label: "Serif UI",
    stack: 'Georgia, "Times New Roman", serif'
  },
  mono: {
    id: "mono",
    label: "Mono display",
    stack: '"IBM Plex Mono", "Cascadia Code", Consolas, monospace'
  }
}, ke = {
  buttonLayout: "windows-11",
  systemButtonPlacement: "right",
  sideResizeMode: "anchored",
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
  chromeStyle: "solid",
  alignment: "center",
  snapRestoreOnRelease: !1,
  shiftDragAction: "pin",
  themePreset: "inherit",
  fontPreset: "system"
}, ka = /* @__PURE__ */ new Set();
let Vo = oc();
function Jd(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Qd(e) {
  switch (e) {
    case "mac":
    case "windows-7":
    case "windows-8":
    case "windows-10":
    case "windows-11":
    case "ubuntu":
    case "xubuntu":
    case "gnome":
      return e;
    case "windows":
    default:
      return ke.buttonLayout;
  }
}
function ec(e) {
  return e === "left" ? "left" : ke.systemButtonPlacement;
}
function tc(e) {
  return e === "mirrored" ? "mirrored" : ke.sideResizeMode;
}
function rc(e) {
  switch (e) {
    case "inherit":
    case "aero":
    case "windows-vista":
    case "windows-11-mica":
    case "windows-10-flat":
    case "slate":
    case "paper":
    case "windows-9x":
    case "mac-os-x":
    case "ios":
    case "android":
    case "ubuntu-yaru":
    case "xubuntu":
    case "gnome":
      return e;
    default:
      return ke.themePreset;
  }
}
function nc(e) {
  switch (e) {
    case "system":
    case "segoe-ui":
    case "mac-system":
    case "ios-system":
    case "android-system":
    case "linux-system":
    case "humanist":
    case "serif":
    case "mono":
      return e;
    default:
      return ke.fontPreset;
  }
}
function ic(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return ke.shiftDragAction;
  }
}
function ds(e, t, r, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(r, Math.min(n, Math.round(i))) : t;
}
function sc(e) {
  return {
    buttonLayout: Qd(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: ec(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: tc(e == null ? void 0 : e.sideResizeMode),
    borderWidth: ds(
      e == null ? void 0 : e.borderWidth,
      ke.borderWidth,
      0,
      12
    ),
    borderRadius: ds(
      e == null ? void 0 : e.borderRadius,
      ke.borderRadius,
      0,
      32
    ),
    chromePadding: ds(
      e == null ? void 0 : e.chromePadding,
      ke.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : ke.chromeStyle,
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : ke.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : ke.snapRestoreOnRelease,
    shiftDragAction: ic(e == null ? void 0 : e.shiftDragAction),
    themePreset: rc(e == null ? void 0 : e.themePreset),
    fontPreset: nc(e == null ? void 0 : e.fontPreset)
  };
}
function ac(e) {
  return (xa[e] ?? xa.inherit).shadow;
}
function oc() {
  const e = Jd(Kd);
  if (!e)
    return Si(ke), { ...ke };
  try {
    const t = JSON.parse(e), r = sc(t);
    return Si(r), r;
  } catch {
    return Si(ke), { ...ke };
  }
}
function Si(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement.style, r = _a[e.fontPreset] ?? _a.system, n = ac(e.themePreset);
  t.setProperty("--efs-font-sans", r.stack), t.setProperty("--efs-window-font-family", r.stack), t.setProperty("--efs-window-border-width", `${e.borderWidth}px`), t.setProperty("--efs-window-radius", `${e.borderRadius}px`), t.setProperty("--efs-window-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-window-system-button-placement", e.systemButtonPlacement), t.setProperty("--efs-window-side-resize-mode", e.sideResizeMode), t.setProperty("--efs-window-shell-shadow", n), t.setProperty("--efs-widget-border-width", `${e.borderWidth}px`), t.setProperty("--efs-widget-radius", `${e.borderRadius}px`), t.setProperty("--efs-widget-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-widget-shadow", n), t.removeProperty("--efs-window-theme-panel"), t.removeProperty("--efs-window-theme-surface"), t.removeProperty("--efs-window-theme-border"), t.removeProperty("--efs-window-theme-shadow"), t.removeProperty("--efs-window-theme-hover");
}
function lc(e) {
  return ka.add(e), e(Vo), () => {
    ka.delete(e);
  };
}
typeof window < "u" && window.addEventListener("efsdb-themechange", () => {
  Si(Vo);
});
var dc = /* @__PURE__ */ le('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), cc = /* @__PURE__ */ le("<div><span></span></div>"), uc = /* @__PURE__ */ le('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), hc = /* @__PURE__ */ le('<button type="button"><!></button>'), fc = /* @__PURE__ */ le('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), pc = /* @__PURE__ */ le('<!> <button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button>', 1), mc = /* @__PURE__ */ le('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), vc = /* @__PURE__ */ le('<button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button> <!>', 1), wc = /* @__PURE__ */ le('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" class="window-button svelte-1k3ojqh" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-1k3ojqh"><!></div></div>'), gc = /* @__PURE__ */ le('<div class="window-content svelte-1k3ojqh"><!></div>'), bc = /* @__PURE__ */ le('<button type="button" tabindex="-1" aria-hidden="true"></button>'), yc = /* @__PURE__ */ le("<!> <!> <div><!> <!> <!></div>", 1);
const xc = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--shell-panel, rgba(15, 23, 42, 0.94));--window-surface: var(--shell-surface, rgba(15, 23, 42, 0.98));--window-border: var(--shell-border, rgba(148, 163, 184, 0.24));--window-hover: var(--shell-row-hover, rgba(125, 211, 252, 0.12));--window-shadow: var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42)));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-control-size: 2.15rem;--window-aux-width: 2.35rem;--window-system-width: 2.75rem;--window-system-height: var(--window-control-size);--window-control-gap: 0.14rem;--window-control-radius: 10px;--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: 0.9rem;--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.58 + 0.04rem));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.32));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;min-width:min(100vw - 1rem, 18rem);min-height:0;border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow), inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='mica'].svelte-1k3ojqh {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),
      color-mix(in srgb, var(--window-surface), transparent 10%);backdrop-filter:blur(22px) saturate(1.08);-webkit-backdrop-filter:blur(22px) saturate(1.08);}.window-shell[data-style='frost'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 18%);backdrop-filter:blur(24px) saturate(1.14);-webkit-backdrop-filter:blur(24px) saturate(1.14);}.window-shell[data-style='pane'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 8%);backdrop-filter:blur(16px) saturate(1.04);-webkit-backdrop-filter:blur(16px) saturate(1.04);}.window-shell[data-style='transparent'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-1k3ojqh {--window-control-size: 1.92rem;--window-aux-width: 2.05rem;--window-system-width: 2.28rem;--window-control-gap: 0.08rem;--window-control-radius: 8px;}.window-shell.is-ready.svelte-1k3ojqh {opacity:1;}.window-shell.is-dragging.svelte-1k3ojqh,
  .window-shell.is-resizing.svelte-1k3ojqh {transition:none;}.window-shell.maximized.svelte-1k3ojqh {inset:0 !important;width:100vw !important;height:100vh !important;transform:none !important;border-radius:0;}.window-shell.minimized.svelte-1k3ojqh {opacity:0;pointer-events:none;transform:translate(0, calc(100vh + 2rem)) scale(0.98) !important;}.window-shell.rolled-up.svelte-1k3ojqh {height:auto !important;min-height:0;}.window-shell.chromeless.svelte-1k3ojqh {border:none;box-shadow:none;background:transparent;}.window-chrome.svelte-1k3ojqh {position:relative;isolation:isolate;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:0.65rem;min-height:calc(
      var(--window-system-height) + var(--window-chrome-top-space) + var(--window-chrome-bottom-space)
    );padding-top:var(--window-chrome-top-space);padding-bottom:var(--window-chrome-bottom-space);padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;background:transparent;}.window-shell[data-style='transparent'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:transparent;}.window-shell[data-style='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--window-panel), transparent 12%);}.window-shell[data-style='frost'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 18%);}.window-shell[data-style='pane'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-tools.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:0;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-button.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid
      color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);transition:background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;}.window-button.svelte-1k3ojqh .app-icon {width:var(--window-icon-size);height:var(--window-icon-size);}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-primary), transparent 68%);background:color-mix(in srgb, var(--window-hover), transparent 12%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 56%);background:color-mix(in srgb, var(--window-primary), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh,
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-1k3ojqh {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='aero'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 70%),
      transparent;}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh {--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:color-mix(in srgb, var(--window-border), transparent 10%);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-system-height: 1.75rem;--window-system-icon-size: 0.76rem;--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));box-shadow:var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.45rem;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-system-height: 0.96rem;--window-system-icon-size: 0.48rem;--window-control-radius: 999px;--window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.55rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh):hover .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .minimize-button:where(.svelte-1k3ojqh) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .maximize-button:where(.svelte-1k3ojqh) {background:#28c840;}.window-shell[data-theme='ios'].svelte-1k3ojqh {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-1k3ojqh {--window-control-radius: 999px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));--window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));}.window-shell[data-theme='android'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh {--window-aux-width: 2.05rem;--window-control-size: 2rem;--window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh {--window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-1k3ojqh {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size: 1.86rem;--window-aux-width: 1.96rem;--window-system-width: 2.16rem;--window-control-gap: 0.06rem;}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}
  }`
};
function Ho(e, t) {
  Vi(t, !0), Hs(e, xc);
  let r = V(t, "title", 7), n = V(t, "state", 15, "normal"), i = V(t, "x", 15, 100), s = V(t, "y", 15, 100), a = V(t, "width", 15, 600), o = V(t, "height", 15, 400), l = V(t, "locked", 7, !1), c = V(t, "chromeless", 7, !1), f = V(t, "buttonLayout", 7), m = V(t, "systemButtonPlacement", 7), p = V(t, "sideResizeMode", 7), y = V(t, "borderWidth", 7), g = V(t, "borderRadius", 7), R = V(t, "chromePadding", 7), b = V(t, "chromeStyle", 7), q = V(t, "alignment", 7), A = V(t, "themePreset", 7), k = V(t, "fontPreset", 7), B = V(t, "snapRestoreOnRelease", 7), K = V(t, "shiftDragAction", 7), se = V(t, "zIndex", 7, 100), Y = V(t, "pinned", 7, !1), ue = V(t, "dragSeed", 7, null), z = V(t, "onClose", 7), me = V(t, "onPinToggle", 7), ve = V(t, "onConsumeDragSeed", 7), de = V(t, "onStateChange", 7), De = V(t, "children", 7);
  const _t = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], Kr = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), br = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], kt = 360, At = 240, je = 44, Jr = 1400;
  let ze = /* @__PURE__ */ I(Cr({ ...ke })), $n = /* @__PURE__ */ I(!1), yr = /* @__PURE__ */ I(!1), Xe = /* @__PURE__ */ I(null), j = /* @__PURE__ */ I(null), H = /* @__PURE__ */ I(null), ae = /* @__PURE__ */ I(null), Z = /* @__PURE__ */ I(0), Ct = /* @__PURE__ */ I(0), xr = "", Qr = 0, en = 0, Kt = 0, jn = 0, qt = 0, _r = 0, Ke = "se", Jt = null, Lt = !1, lt = !1, zn = 0.5, ci = 18, It = !1, kr = /* @__PURE__ */ I(null), Ot = 0, Dt = /* @__PURE__ */ I(null), Rn = /* @__PURE__ */ I(0), En = /* @__PURE__ */ I(0);
  Io(() => {
    const u = requestAnimationFrame(() => {
      w($n, !0);
    }), v = lc((M) => {
      w(ze, { ...M }, !0);
    });
    return () => {
      cancelAnimationFrame(u), v(), Nn(), Ot && typeof window < "u" && window.clearTimeout(Ot);
    };
  });
  let be = /* @__PURE__ */ U(() => f() ?? d(ze).buttonLayout), Gi = /* @__PURE__ */ U(() => m() ?? d(ze).systemButtonPlacement), ui = /* @__PURE__ */ U(() => p() ?? d(ze).sideResizeMode), he = /* @__PURE__ */ U(() => y() ?? d(ze).borderWidth), qe = /* @__PURE__ */ U(() => g() ?? d(ze).borderRadius), fe = /* @__PURE__ */ U(() => R() ?? d(ze).chromePadding), G = /* @__PURE__ */ U(() => b() ?? d(ze).chromeStyle), Me = /* @__PURE__ */ U(() => q() ?? d(ze).alignment), dt = /* @__PURE__ */ U(() => A() ?? d(ze).themePreset), ct = /* @__PURE__ */ U(() => k() ?? d(ze).fontPreset), Je = /* @__PURE__ */ U(() => B() ?? d(ze).snapRestoreOnRelease), Qt = /* @__PURE__ */ U(() => K() ?? d(ze).shiftDragAction), ut = /* @__PURE__ */ U(() => a() < 560 ? "left" : d(Me)), ht = /* @__PURE__ */ U(() => a() < 520), tn = /* @__PURE__ */ U(() => Math.max(d(Rn), d(En)) + (d(ht) ? 12 : 18));
  function Nt(u) {
    return Kr.has(u);
  }
  function er(u) {
    switch (u) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function tr(u, v = !1) {
    if (v)
      return u === "mac" || u === "ubuntu" || u === "xubuntu" ? void 0 : "stack";
    switch (u) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function rr(u, v = !1) {
    if (v)
      return "stack";
    switch (u) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let ft = /* @__PURE__ */ I(!1), qr = 0, nr = 0, Mr = 0, ir = 0, hi = /* @__PURE__ */ U(() => d(ft) && !c() && !l() && d(be) !== "mac" && typeof window < "u" && d(Ct) <= 84 && Math.abs(d(Z) - window.innerWidth / 2) <= 232), Sr = /* @__PURE__ */ U(() => d(Xe) ? An(d(Xe)) : null);
  function pt(u) {
    var v;
    n() !== u && (n(u), (v = de()) == null || v(n()));
  }
  function sr() {
    return { x: i(), y: s(), width: a(), height: o() };
  }
  function $r(u, v = a()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerWidth - v, u));
  }
  function Pn(u, v = o()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerHeight - Math.min(v, je), u));
  }
  function mt(u) {
    const v = Math.max(kt, Math.round(u.width)), M = Math.max(At, Math.round(u.height));
    return {
      x: $r(Math.round(u.x), v),
      y: Pn(Math.round(u.y), M),
      width: v,
      height: M
    };
  }
  function Tn() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : mt({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function rn(u) {
    const v = mt(u);
    i(v.x), s(v.y), a(v.width), o(v.height), w(j, null), pt("normal");
  }
  function fi() {
    rn(d(H) ?? Tn());
  }
  function An(u) {
    if (typeof window > "u") return null;
    const v = window.innerWidth, M = window.innerHeight, P = Math.round(v / 2), te = Math.round(M / 2);
    switch (u) {
      case "maximize":
        return { x: 0, y: 0, width: v, height: M };
      case "left-half":
        return { x: 0, y: 0, width: P, height: M };
      case "right-half":
        return {
          x: v - P,
          y: 0,
          width: P,
          height: M
        };
      case "top-left":
        return { x: 0, y: 0, width: P, height: te };
      case "top-right":
        return {
          x: v - P,
          y: 0,
          width: P,
          height: te
        };
      case "bottom-left":
        return {
          x: 0,
          y: M - te,
          width: P,
          height: te
        };
      case "bottom-right":
        return {
          x: v - P,
          y: M - te,
          width: P,
          height: te
        };
    }
  }
  function Cn(u, v = sr()) {
    if (w(H, mt(v), !0), u === "maximize") {
      typeof window < "u" && (i(0), s(0), a(window.innerWidth), o(window.innerHeight)), w(j, "maximize"), pt("maximized");
      return;
    }
    const M = An(u);
    M && (w(j, u, !0), pt("normal"), i(M.x), s(M.y), a(M.width), o(M.height));
  }
  function pi() {
    typeof window > "u" || ((n() === "maximized" || d(j)) && fi(), i($r(Math.round((window.innerWidth - a()) / 2), a())), s(Pn(Math.round((window.innerHeight - o()) / 2), o())));
  }
  function jr() {
    if (n() === "maximized") {
      fi();
      return;
    }
    Cn("maximize");
  }
  function mi() {
    pt(n() === "rolled-up" ? "normal" : "rolled-up");
  }
  function Ln() {
    pt("minimized");
  }
  function In() {
    w(kr, null), Ot && typeof window < "u" && window.clearTimeout(Ot), Ot = 0;
  }
  function On(u) {
    if (typeof window > "u") {
      w(kr, u, !0);
      return;
    }
    In(), w(kr, u, !0), Ot = window.setTimeout(
      () => {
        w(kr, null), Ot = 0;
      },
      Jr
    );
  }
  function Zi() {
    var te, oe;
    if (typeof window > "u" || !d(Dt))
      return !1;
    const u = 24, v = Math.ceil(Math.max(d(Dt).scrollWidth, ((te = d(Dt).firstElementChild) == null ? void 0 : te.scrollWidth) ?? 0)), M = Math.ceil(Math.max(d(Dt).scrollHeight, ((oe = d(Dt).firstElementChild) == null ? void 0 : oe.scrollHeight) ?? 0)), P = mt({
      x: Math.round((window.innerWidth - v) / 2),
      y: Math.round((window.innerHeight - M - je) / 2),
      width: Math.min(window.innerWidth - u * 2, Math.max(kt, v + d(he) * 2)),
      height: Math.min(window.innerHeight - u * 2, Math.max(At, M + je + d(he) * 2))
    });
    return w(H, sr(), !0), rn(P), !0;
  }
  function vi(u) {
    if (l() || c() || Dn(u.target))
      return;
    if (d(kr) === "fit-content") {
      On("maximize"), jr();
      return;
    }
    const v = Zi();
    On(v ? "fit-content" : "maximize"), v || jr();
  }
  function Dn(u) {
    return !!(u != null && u.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Xi(u, v) {
    if (!d(ae)) return null;
    for (const M of d(ae).querySelectorAll("[data-snap-target]")) {
      const P = M.getBoundingClientRect();
      if (u >= P.left && u <= P.right && v >= P.top && v <= P.bottom)
        return M.dataset.snapTarget;
    }
    return null;
  }
  function Wt(u, v) {
    if (typeof window > "u") return null;
    const M = 18, P = Math.max(72, Math.round(window.innerHeight * 0.14));
    return v <= M ? u <= window.innerWidth * 0.33 ? "top-left" : u >= window.innerWidth * 0.67 ? "top-right" : "maximize" : u <= M ? v <= P ? "top-left" : v >= window.innerHeight - P ? "bottom-left" : "left-half" : u >= window.innerWidth - M ? v <= P ? "top-right" : v >= window.innerHeight - P ? "bottom-right" : "right-half" : null;
  }
  function wi(u, v) {
    if (w(Z, u, !0), w(Ct, v, !0), !d(ft) || l() || c() || d(be) === "mac") {
      w(Xe, null);
      return;
    }
    w(Xe, Xi(u, v) ?? Wt(u, v), !0);
  }
  function Bo(u, v) {
    if (!lt) return;
    const M = d(H) ?? Tn(), P = mt({
      ...M,
      x: u - M.width * zn,
      y: v - ci
    });
    i(P.x), s(P.y), a(P.width), o(P.height), pt("normal"), w(j, null), lt = !1, Lt = !0, qr = u, nr = v, Mr = i(), ir = s();
  }
  function Us(u) {
    !u.shiftKey || It || d(Qt) !== "pin" || !me() || Y() || (me()(), It = !0);
  }
  function Uo(u) {
    if (l() || c() || n() === "minimized" || Dn(u.target)) return;
    w(ft, !0), It = !1, w(Xe, null), w(Z, u.clientX, !0), w(Ct, u.clientY, !0), qr = u.clientX, nr = u.clientY, Mr = i(), ir = s(), Lt = !1, lt = !1;
    const v = sr();
    zn = v.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (u.clientX - v.x) / v.width)), ci = Math.max(12, Math.min(28, Math.round(u.clientY - v.y || 18))), n() === "maximized" || d(j) ? (Jt = n() === "maximized" ? "maximize" : d(j), w(H, d(H) ?? Tn(), !0), lt = !0) : Jt = null, Us(u), u.currentTarget.setPointerCapture(u.pointerId);
  }
  function Ki(u) {
    d(ft) && (Us(u), lt && (Math.abs(u.clientX - qr) > 2 || Math.abs(u.clientY - nr) > 2) && Bo(u.clientX, u.clientY), i($r(Mr + (u.clientX - qr), a())), s(Pn(ir + (u.clientY - nr), o())), wi(u.clientX, u.clientY));
  }
  function nn(u) {
    if (!d(ft)) return;
    const v = d(Xe);
    w(Xe, null), w(ft, !1), lt = !1, v ? Cn(v, sr()) : Lt && Jt && d(Je) && !u.shiftKey && !It ? Cn(Jt, sr()) : w(j, null), Jt = null, Lt = !1, It = !1;
    const M = u.currentTarget;
    "hasPointerCapture" in M && M.hasPointerCapture(u.pointerId) && M.releasePointerCapture(u.pointerId), window.removeEventListener("pointermove", Ki), window.removeEventListener("pointerup", nn), window.removeEventListener("pointercancel", nn);
  }
  function Yo(u, v) {
    l() || c() || n() === "maximized" || n() === "minimized" || (d(j) && w(j, null), v.stopPropagation(), v.preventDefault(), w(yr, !0), Ke = u, Qr = v.clientX, en = v.clientY, Kt = i(), jn = s(), qt = a(), _r = o(), w(Xe, null), window.addEventListener("pointermove", Ys), window.addEventListener("pointerup", Nn), window.addEventListener("pointercancel", Nn));
  }
  function Ys(u) {
    if (!d(yr)) return;
    const v = u.clientX - Qr, M = u.clientY - en;
    let P = Kt, te = jn, oe = qt, Te = _r;
    if (d(ui) === "mirrored" && (Ke === "e" || Ke === "w")) {
      const zr = Ke === "e" ? v : -v;
      oe = Math.max(kt, qt + zr * 2), P = Kt - (oe - qt) / 2;
    } else Ke.includes("e") && (oe = Math.max(kt, qt + v));
    Ke.includes("s") && (Te = Math.max(At, _r + M)), d(ui) !== "mirrored" && Ke.includes("w") && (oe = Math.max(kt, qt - v), P = Kt + (qt - oe)), Ke.includes("n") && (Te = Math.max(At, _r - M), te = jn + (_r - Te));
    const ar = mt({ x: P, y: te, width: oe, height: Te });
    i(ar.x), s(ar.y), a(ar.width), o(ar.height);
  }
  function Nn() {
    d(yr) && (w(yr, !1), window.removeEventListener("pointermove", Ys), window.removeEventListener("pointerup", Nn), window.removeEventListener("pointercancel", Nn));
  }
  function Go(u) {
    var M;
    if (typeof window > "u") return;
    const v = mt({
      x: u.clientX - Math.round(a() * 0.38),
      y: u.clientY - 18,
      width: a(),
      height: o()
    });
    i(v.x), s(v.y), Mr = i(), ir = s(), qr = u.clientX, nr = u.clientY, w(Z, u.clientX, !0), w(Ct, u.clientY, !0), w(Xe, null), Jt = null, Lt = !1, lt = !1, It = !0, w(ft, !0), window.addEventListener("pointermove", Ki), window.addEventListener("pointerup", nn), window.addEventListener("pointercancel", nn), (M = ve()) == null || M();
  }
  go(() => {
    const u = ue() ? `${ue().pointerId}:${ue().clientX}:${ue().clientY}` : "";
    !ue() || u === xr || (xr = u, Go(ue()));
  });
  var Zo = {
    get title() {
      return r();
    },
    set title(u) {
      r(u), D();
    },
    get state() {
      return n();
    },
    set state(u = "normal") {
      n(u), D();
    },
    get x() {
      return i();
    },
    set x(u = 100) {
      i(u), D();
    },
    get y() {
      return s();
    },
    set y(u = 100) {
      s(u), D();
    },
    get width() {
      return a();
    },
    set width(u = 600) {
      a(u), D();
    },
    get height() {
      return o();
    },
    set height(u = 400) {
      o(u), D();
    },
    get locked() {
      return l();
    },
    set locked(u = !1) {
      l(u), D();
    },
    get chromeless() {
      return c();
    },
    set chromeless(u = !1) {
      c(u), D();
    },
    get buttonLayout() {
      return f();
    },
    set buttonLayout(u) {
      f(u), D();
    },
    get systemButtonPlacement() {
      return m();
    },
    set systemButtonPlacement(u) {
      m(u), D();
    },
    get sideResizeMode() {
      return p();
    },
    set sideResizeMode(u) {
      p(u), D();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(u) {
      y(u), D();
    },
    get borderRadius() {
      return g();
    },
    set borderRadius(u) {
      g(u), D();
    },
    get chromePadding() {
      return R();
    },
    set chromePadding(u) {
      R(u), D();
    },
    get chromeStyle() {
      return b();
    },
    set chromeStyle(u) {
      b(u), D();
    },
    get alignment() {
      return q();
    },
    set alignment(u) {
      q(u), D();
    },
    get themePreset() {
      return A();
    },
    set themePreset(u) {
      A(u), D();
    },
    get fontPreset() {
      return k();
    },
    set fontPreset(u) {
      k(u), D();
    },
    get snapRestoreOnRelease() {
      return B();
    },
    set snapRestoreOnRelease(u) {
      B(u), D();
    },
    get shiftDragAction() {
      return K();
    },
    set shiftDragAction(u) {
      K(u), D();
    },
    get zIndex() {
      return se();
    },
    set zIndex(u = 100) {
      se(u), D();
    },
    get pinned() {
      return Y();
    },
    set pinned(u = !1) {
      Y(u), D();
    },
    get dragSeed() {
      return ue();
    },
    set dragSeed(u = null) {
      ue(u), D();
    },
    get onClose() {
      return z();
    },
    set onClose(u) {
      z(u), D();
    },
    get onPinToggle() {
      return me();
    },
    set onPinToggle(u) {
      me(u), D();
    },
    get onConsumeDragSeed() {
      return ve();
    },
    set onConsumeDragSeed(u) {
      ve(u), D();
    },
    get onStateChange() {
      return de();
    },
    set onStateChange(u) {
      de(u), D();
    },
    get children() {
      return De();
    },
    set children(u) {
      De(u), D();
    }
  }, Gs = yc(), Zs = un(Gs);
  {
    var Xo = (u) => {
      var v = dc();
      let M;
      Ee(() => M = Ge(v, "", M, {
        left: `${d(Sr).x}px`,
        top: `${d(Sr).y}px`,
        width: `${d(Sr).width}px`,
        height: `${d(Sr).height}px`,
        "z-index": se() + 2
      })), Q(u, v);
    };
    Ye(Zs, (u) => {
      d(Sr) && !c() && u(Xo);
    });
  }
  var Xs = E(Zs, 2);
  {
    var Ko = (u) => {
      var v = uc();
      let M;
      Qn(v, 21, () => _t, (P) => P.id, (P, te) => {
        var oe = cc();
        let Te;
        var ar = _(oe);
        x(oe), Ee(() => {
          Te = tt(oe, 1, "snap-cell svelte-1k3ojqh", null, Te, { "is-active": d(Xe) === d(te).id }), re(oe, "data-snap-target", d(te).id), tt(ar, 1, `snap-shape shape-${d(te).preview}`, "svelte-1k3ojqh");
        }), Q(P, oe);
      }), x(v), zs(v, (P) => w(ae, P), () => d(ae)), Ee(() => M = Ge(v, "", M, { "z-index": se() + 3 })), Q(u, v);
    };
    Ye(Xs, (u) => {
      d(hi) && !c() && u(Ko);
    });
  }
  var Vt = E(Xs, 2);
  let Ks, Js;
  var Qs = _(Vt);
  {
    var Jo = (u) => {
      var v = wc();
      let M;
      var P = _(v), te = _(P);
      {
        var oe = (we) => {
          var Ne = hc();
          let vt;
          var Vn = _(Ne);
          Mt(Vn, { name: "pin" }), x(Ne), Ee(() => {
            vt = tt(Ne, 1, "window-button svelte-1k3ojqh", null, vt, { "is-active": Y() }), re(Ne, "aria-label", Y() ? "Unpin window" : "Pin window"), re(Ne, "aria-pressed", Y());
          }), ne("click", Ne, function(...We) {
            var sn;
            (sn = me()) == null || sn.apply(this, We);
          }), Q(we, Ne);
        };
        Ye(te, (we) => {
          me() && we(oe);
        });
      }
      var Te = E(te, 2), ar = _(Te);
      Mt(ar, { name: "center" }), x(Te);
      var zr = E(Te, 2);
      let ta;
      var rl = _(zr);
      {
        let we = /* @__PURE__ */ U(() => n() === "rolled-up" ? "roll-up" : "roll-down");
        Mt(rl, {
          get name() {
            return d(we);
          }
        });
      }
      x(zr), x(P);
      var Wn = E(P, 2), nl = _(Wn, !0);
      x(Wn);
      var Ji = E(Wn, 2), il = _(Ji);
      {
        var sl = (we) => {
          var Ne = pc(), vt = un(Ne);
          {
            var Vn = (Re) => {
              var ye = fc(), es = _(ye);
              {
                let Rr = /* @__PURE__ */ U(() => er(d(be)));
                Mt(es, {
                  name: "close",
                  get variant() {
                    return d(Rr);
                  }
                });
              }
              x(ye), ne("click", ye, function(...Rr) {
                var Hn;
                (Hn = z()) == null || Hn.apply(this, Rr);
              }), Q(Re, ye);
            };
            Ye(vt, (Re) => {
              z() && Re(Vn);
            });
          }
          var We = E(vt, 2), sn = _(We);
          {
            let Re = /* @__PURE__ */ U(() => n() === "minimized" ? "restore" : "minimize"), ye = /* @__PURE__ */ U(() => tr(d(be), n() === "minimized"));
            Mt(sn, {
              get name() {
                return d(Re);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(We);
          var an = E(We, 2), Qi = _(an);
          {
            let Re = /* @__PURE__ */ U(() => n() === "maximized" ? "restore" : "maximize"), ye = /* @__PURE__ */ U(() => rr(d(be), n() === "maximized"));
            Mt(Qi, {
              get name() {
                return d(Re);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(an), Ee(() => {
            re(We, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), re(an, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), ne("click", We, () => n() === "minimized" ? pt("normal") : Ln()), ne("click", an, jr), Q(we, Ne);
        }, al = /* @__PURE__ */ U(() => Nt(d(be))), ol = (we) => {
          var Ne = vc(), vt = un(Ne), Vn = _(vt);
          {
            let Re = /* @__PURE__ */ U(() => n() === "minimized" ? "restore" : "minimize"), ye = /* @__PURE__ */ U(() => tr(d(be), n() === "minimized"));
            Mt(Vn, {
              get name() {
                return d(Re);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(vt);
          var We = E(vt, 2), sn = _(We);
          {
            let Re = /* @__PURE__ */ U(() => n() === "maximized" ? "restore" : "maximize"), ye = /* @__PURE__ */ U(() => rr(d(be), n() === "maximized"));
            Mt(sn, {
              get name() {
                return d(Re);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(We);
          var an = E(We, 2);
          {
            var Qi = (Re) => {
              var ye = mc(), es = _(ye);
              {
                let Rr = /* @__PURE__ */ U(() => er(d(be)));
                Mt(es, {
                  name: "close",
                  get variant() {
                    return d(Rr);
                  }
                });
              }
              x(ye), ne("click", ye, function(...Rr) {
                var Hn;
                (Hn = z()) == null || Hn.apply(this, Rr);
              }), Q(Re, ye);
            };
            Ye(an, (Re) => {
              z() && Re(Qi);
            });
          }
          Ee(() => {
            re(vt, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), re(We, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), ne("click", vt, () => n() === "minimized" ? pt("normal") : Ln()), ne("click", We, jr), Q(we, Ne);
        };
        Ye(il, (we) => {
          d(al) ? we(sl) : we(ol, -1);
        });
      }
      x(Ji), x(v), Ee(
        (we) => {
          M = tt(v, 1, `window-chrome chrome-${d(G) ?? ""}`, "svelte-1k3ojqh", M, we), re(v, "aria-label", `${r()} window controls`), ta = tt(zr, 1, "window-button svelte-1k3ojqh", null, ta, { "is-active": n() === "rolled-up" }), re(zr, "aria-label", n() === "rolled-up" ? "Restore height" : "Roll up"), tt(Wn, 1, `window-title align-${d(ut) ?? ""}`, "svelte-1k3ojqh"), re(Wn, "title", r()), Ae(nl, r());
        },
        [
          () => ({
            "layout-mac": Nt(d(be)),
            "layout-windows": !Nt(d(be))
          })
        ]
      ), ne("pointerdown", v, Uo), ne("pointermove", v, Ki), ne("pointerup", v, nn), xd("pointercancel", v, nn), ne("dblclick", v, vi), ne("click", Te, pi), ne("click", zr, mi), wa(P, "clientWidth", (we) => w(Rn, we)), wa(Ji, "clientWidth", (we) => w(En, we)), Q(u, v);
    };
    Ye(Qs, (u) => {
      c() || u(Jo);
    });
  }
  var ea = E(Qs, 2);
  {
    var Qo = (u) => {
      var v = gc(), M = _(v);
      jd(M, () => De() ?? hn), x(v), zs(v, (P) => w(Dt, P), () => d(Dt)), Q(u, v);
    };
    Ye(ea, (u) => {
      n() !== "rolled-up" && n() !== "minimized" && u(Qo);
    });
  }
  var el = E(ea, 2);
  {
    var tl = (u) => {
      var v = To(), M = un(v);
      Qn(M, 16, () => br, (P) => P, (P, te) => {
        var oe = bc();
        Ee(() => tt(oe, 1, `resize-handle dir-${te}`, "svelte-1k3ojqh")), ne("pointerdown", oe, (Te) => Yo(te, Te)), Q(P, oe);
      }), Q(u, v);
    };
    Ye(el, (u) => {
      !c() && n() !== "maximized" && n() !== "minimized" && u(tl);
    });
  }
  return x(Vt), Ee(() => {
    Ks = tt(Vt, 1, "window-shell svelte-1k3ojqh", null, Ks, {
      "is-ready": d($n),
      "is-dragging": d(ft),
      "is-resizing": d(yr),
      "compact-controls": d(ht),
      maximized: n() === "maximized",
      minimized: n() === "minimized",
      "rolled-up": n() === "rolled-up",
      chromeless: c()
    }), re(Vt, "data-layout", d(be)), re(Vt, "data-system-placement", d(Gi)), re(Vt, "data-style", d(G)), re(Vt, "data-theme", d(dt)), re(Vt, "data-font", d(ct)), Js = Ge(Vt, "", Js, {
      "--window-border-width": `${d(he)}px`,
      "--window-radius": `${d(qe)}px`,
      "--window-chrome-padding": `${d(fe)}px`,
      "--window-title-guard": `${d(tn)}px`,
      transform: n() === "normal" || n() === "rolled-up" ? `translate(${i()}px, ${s()}px)` : void 0,
      width: n() === "normal" || n() === "rolled-up" ? `${a()}px` : void 0,
      height: n() === "normal" ? `${o()}px` : void 0,
      "z-index": se()
    });
  }), Q(e, Gs), Hi(Zo);
}
Po([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Fs(
  Ho,
  {
    title: {},
    state: {},
    x: {},
    y: {},
    width: {},
    height: {},
    locked: {},
    chromeless: {},
    buttonLayout: {},
    systemButtonPlacement: {},
    sideResizeMode: {},
    borderWidth: {},
    borderRadius: {},
    chromePadding: {},
    chromeStyle: {},
    alignment: {},
    themePreset: {},
    fontPreset: {},
    snapRestoreOnRelease: {},
    shiftDragAction: {},
    zIndex: {},
    pinned: {},
    dragSeed: {},
    onClose: {},
    onPinToggle: {},
    onConsumeDragSeed: {},
    onStateChange: {},
    children: {}
  },
  [],
  [],
  { mode: "open" }
);
const cs = "efsdb:theme-studio", Gn = "#5b8cff", Zn = "light", ln = 66, dn = 56, _c = [
  { id: "azure", label: "Azure Glass", seed: "#4f7cff", mode: "light", vividness: 68, contrast: 58 },
  { id: "violet", label: "Violet Signal", seed: "#7c5cff", mode: "dark", vividness: 72, contrast: 63 },
  { id: "mint", label: "Mint Grid", seed: "#14b8a6", mode: "light", vividness: 62, contrast: 54 },
  { id: "ember", label: "Ember Ops", seed: "#f97316", mode: "dark", vividness: 74, contrast: 67 },
  { id: "rose", label: "Rose Runtime", seed: "#e11d48", mode: "light", vividness: 69, contrast: 55 },
  { id: "gold", label: "Golden Build", seed: "#d4a017", mode: "dark", vividness: 58, contrast: 62 }
];
function X(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Bs(e) {
  const t = (e ?? "").trim().replace("#", "");
  return /^[0-9a-fA-F]{3}$/.test(t) ? `#${t.split("").map((r) => `${r}${r}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(t) ? `#${t.toLowerCase()}` : Gn;
}
function Ei(e) {
  const t = Bs(e).slice(1), r = Number.parseInt(t, 16);
  return {
    r: r >> 16 & 255,
    g: r >> 8 & 255,
    b: r & 255
  };
}
function Fo(e, t, r) {
  return `#${(X(Math.round(e), 0, 255) << 16 | X(Math.round(t), 0, 255) << 8 | X(Math.round(r), 0, 255)).toString(16).padStart(6, "0")}`;
}
function kc(e, t, r) {
  const n = e / 255, i = t / 255, s = r / 255, a = Math.max(n, i, s), o = Math.min(n, i, s), l = a - o;
  let c = 0;
  const f = (a + o) / 2, m = l === 0 ? 0 : l / (1 - Math.abs(2 * f - 1));
  if (l !== 0) {
    switch (a) {
      case n:
        c = (i - s) / l % 6;
        break;
      case i:
        c = (s - n) / l + 2;
        break;
      default:
        c = (n - i) / l + 4;
        break;
    }
    c *= 60, c < 0 && (c += 360);
  }
  return {
    h: c,
    s: m * 100,
    l: f * 100
  };
}
function qc(e, t, r) {
  const n = (e % 360 + 360) % 360, i = X(t, 0, 100) / 100, s = X(r, 0, 100) / 100, a = (1 - Math.abs(2 * s - 1)) * i, o = a * (1 - Math.abs(n / 60 % 2 - 1)), l = s - a / 2;
  let c = 0, f = 0, m = 0;
  return n < 60 ? (c = a, f = o) : n < 120 ? (c = o, f = a) : n < 180 ? (f = a, m = o) : n < 240 ? (f = o, m = a) : n < 300 ? (c = o, m = a) : (c = a, m = o), {
    r: (c + l) * 255,
    g: (f + l) * 255,
    b: (m + l) * 255
  };
}
function Bn(e, t, r) {
  const { r: n, g: i, b: s } = qc(e, t, r);
  return Fo(n, i, s);
}
function Pr(e, t, r) {
  const n = Ei(e), i = Ei(t), s = X(r, 0, 1);
  return Fo(
    n.r + (i.r - n.r) * s,
    n.g + (i.g - n.g) * s,
    n.b + (i.b - n.b) * s
  );
}
function qa(e) {
  const { r: t, g: r, b: n } = Ei(e), i = [t, r, n].map((s) => {
    const a = s / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function Ma(e, t) {
  const r = qa(e), n = qa(t), i = Math.max(r, n), s = Math.min(r, n);
  return (i + 0.05) / (s + 0.05);
}
function Sa(e, t = "#f8fbff", r = "#08111f") {
  return Ma(e, t) >= Ma(e, r) ? t : r;
}
function $a(e, t, r, n, i) {
  const s = (e - t) / (r - t);
  return n + s * (i - n);
}
function Un(e, t = Zn, r = ln, n = dn) {
  const i = Bs(e), { h: s, s: a, l: o } = kc(...Object.values(Ei(i))), l = t === "dark", c = $a(r, 0, 100, -16, 18), f = $a(n, 0, 100, -12, 14), m = i, p = Bn(
    s,
    X(a + 6 + c * 0.5, 18, 98),
    X(o + (l ? 10 : -12) - f * 0.2, 16, 78)
  ), y = Pr(
    m,
    l ? "#0b1220" : "#ffffff",
    l ? 0.74 : 0.82
  ), g = Bn(
    s + 30,
    X(a * 0.84 + c * 0.45, 18, 90),
    X(o + (l ? 4 : -3), 18, 72)
  ), R = Pr(
    g,
    l ? "#0b1220" : "#ffffff",
    l ? 0.76 : 0.84
  ), b = Bn(
    s + 2,
    X(8 + a * 0.08, 6, 18),
    l ? X(10 + f * 0.34, 7, 18) : X(98 - f * 0.24, 93, 99)
  ), q = Bn(
    s + 8,
    X(10 + a * 0.1, 7, 20),
    l ? X(14 + f * 0.38, 10, 23) : X(95 - f * 0.18, 90, 97)
  ), A = Bn(
    s,
    X(8 + a * 0.06, 5, 16),
    l ? X(8 + f * 0.24, 5, 14) : X(92 - f * 0.18, 88, 95)
  ), k = Pr(q, m, l ? 0.18 : 0.1), B = Pr(k, p, 0.32), K = l ? "#e6eefc" : "#0f172a", se = l ? Pr(K, b, 0.45) : Pr(K, b, 0.58), Y = Pr(m, l ? "#ffffff" : "#0f172a", l ? 0.18 : 0.1), ue = l ? "#3ddc97" : "#138a5b", z = l ? "#f6b73c" : "#b66a00", me = l ? "#ff6b81" : "#c92a4b", ve = Sa(m), de = Sa(g), De = l ? "0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)" : "0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)";
  return {
    seed: i,
    mode: t,
    vividness: X(Math.round(r), 0, 100),
    contrast: X(Math.round(n), 0, 100),
    accent: m,
    accentStrong: p,
    accentSoft: y,
    accentSecondary: g,
    accentSecondarySoft: R,
    surface: b,
    surfaceAlt: q,
    surfaceInset: A,
    border: k,
    borderStrong: B,
    text: K,
    textMuted: se,
    onAccent: ve,
    onSecondary: de,
    focus: Y,
    success: ue,
    warning: z,
    danger: me,
    shadow: De
  };
}
function Mc(e) {
  return [
    ":root {",
    `  --accent: ${e.accent};`,
    `  --accent-strong: ${e.accentStrong};`,
    `  --accent-soft: ${e.accentSoft};`,
    `  --accent-secondary: ${e.accentSecondary};`,
    `  --accent-secondary-soft: ${e.accentSecondarySoft};`,
    `  --surface: ${e.surface};`,
    `  --surface-alt: ${e.surfaceAlt};`,
    `  --surface-inset: ${e.surfaceInset};`,
    `  --border: ${e.border};`,
    `  --border-strong: ${e.borderStrong};`,
    `  --text: ${e.text};`,
    `  --text-muted: ${e.textMuted};`,
    `  --on-accent: ${e.onAccent};`,
    `  --on-secondary: ${e.onSecondary};`,
    `  --focus: ${e.focus};`,
    `  --success: ${e.success};`,
    `  --warning: ${e.warning};`,
    `  --danger: ${e.danger};`,
    `  --theme-shadow: ${e.shadow};`,
    "}"
  ].join(`
`);
}
function us(e, t = document.documentElement) {
  const r = {
    "--accent": e.accent,
    "--accent-strong": e.accentStrong,
    "--accent-soft": e.accentSoft,
    "--accent-secondary": e.accentSecondary,
    "--accent-secondary-soft": e.accentSecondarySoft,
    "--surface": e.surface,
    "--surface-alt": e.surfaceAlt,
    "--surface-inset": e.surfaceInset,
    "--border": e.border,
    "--border-strong": e.borderStrong,
    "--text": e.text,
    "--text-muted": e.textMuted,
    "--on-accent": e.onAccent,
    "--on-secondary": e.onSecondary,
    "--focus": e.focus,
    "--success": e.success,
    "--warning": e.warning,
    "--danger": e.danger,
    "--theme-shadow": e.shadow,
    "--shell-panel-solid": e.surface,
    "--shell-panel-solid-subtle": e.surfaceAlt,
    "--shell-panel-solid-muted": e.surfaceInset,
    "--shell-border": e.border,
    "--shell-text": e.text,
    "--shell-text-strong": e.text,
    "--shell-muted": e.textMuted
  };
  Object.entries(r).forEach(([n, i]) => t.style.setProperty(n, i)), t.dataset.themeMode = e.mode;
}
function Sc() {
  const e = Un(Gn, Zn, ln, dn), { subscribe: t, set: r, update: n } = Yl({
    seed: Gn,
    mode: Zn,
    vividness: ln,
    contrast: dn,
    palette: e,
    lastAppliedAt: null
  });
  return {
    subscribe: t,
    hydrate() {
      if (typeof window > "u") return;
      const i = window.localStorage.getItem(cs);
      if (i)
        try {
          const s = JSON.parse(i), a = Bs(s.seed), o = s.mode === "dark" ? "dark" : "light", l = X(Number(s.vividness ?? ln), 0, 100), c = X(Number(s.contrast ?? dn), 0, 100), f = Un(a, o, l, c);
          r({
            seed: a,
            mode: o,
            vividness: l,
            contrast: c,
            palette: f,
            lastAppliedAt: typeof s.lastAppliedAt == "number" ? s.lastAppliedAt : null
          });
        } catch {
        }
    },
    reset() {
      const i = Un(Gn, Zn, ln, dn), s = {
        seed: Gn,
        mode: Zn,
        vividness: ln,
        contrast: dn,
        palette: i,
        lastAppliedAt: null
      };
      typeof window < "u" && window.localStorage.setItem(cs, JSON.stringify(s)), r(s);
    },
    preview(i, s, a, o) {
      return Un(i, s, a, o);
    },
    apply(i, s, a, o) {
      const l = Un(i, s, a, o);
      return n(() => {
        const c = {
          seed: l.seed,
          mode: s,
          vividness: X(a, 0, 100),
          contrast: X(o, 0, 100),
          palette: l,
          lastAppliedAt: Date.now()
        };
        return typeof window < "u" && window.localStorage.setItem(cs, JSON.stringify(c)), c;
      }), l;
    }
  };
}
const lr = Sc();
var $c = /* @__PURE__ */ le('<button type="button"> </button>'), jc = /* @__PURE__ */ le(
  `<section class="hero-card svelte-1m44pqp"><div class="hero-glow svelte-1m44pqp"></div> <div class="hero-top svelte-1m44pqp"><div class="orb-wrap svelte-1m44pqp"><div class="theme-orb svelte-1m44pqp"></div></div> <div class="hero-copy svelte-1m44pqp"><h3 class="svelte-1m44pqp">Seed color</h3> <p class="svelte-1m44pqp">Pick one color and let the panel derive secondary accent, surfaces, borders, and
                    readable text automatically.</p></div></div> <div class="color-input-row svelte-1m44pqp"><label class="color-chip svelte-1m44pqp"><input type="color" aria-label="Choose seed color" class="svelte-1m44pqp"/> <span class="svelte-1m44pqp"></span></label> <label class="hex-field svelte-1m44pqp"><span class="svelte-1m44pqp">Hex</span> <input type="text" maxlength="7" spellcheck="false" class="svelte-1m44pqp"/></label> <div class="mode-toggle svelte-1m44pqp" role="tablist" aria-label="Theme mode"><button type="button">Light</button> <button type="button">Dark</button></div></div> <div class="slider-grid svelte-1m44pqp"><label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Vividness</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label> <label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Contrast</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label></div> <div class="swatch-row svelte-1m44pqp"><button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Accent</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Hover</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Secondary</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Surface</small></button></div></section> <section class="preview-shell svelte-1m44pqp"><div class="preview-topbar svelte-1m44pqp"><div class="preview-dots svelte-1m44pqp"><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span></div> <div class="preview-search svelte-1m44pqp">Search routes, layouts, content…</div> <button type="button" class="preview-ghost svelte-1m44pqp">Manage</button></div> <div class="preview-body svelte-1m44pqp"><aside class="preview-sidebar svelte-1m44pqp"><button type="button" class="sidebar-item active svelte-1m44pqp">Explorer</button> <button type="button" class="sidebar-item svelte-1m44pqp">Content</button> <button type="button" class="sidebar-item svelte-1m44pqp">Layouts</button> <button type="button" class="sidebar-item svelte-1m44pqp">Deployments</button></aside> <div class="preview-content svelte-1m44pqp"><div class="metric-row svelte-1m44pqp"><article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Primary Accent</small> <strong class="svelte-1m44pqp"> </strong></article> <article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Secondary Accent</small> <strong class="svelte-1m44pqp"> </strong></article></div> <article class="callout-card svelte-1m44pqp"><div><small class="svelte-1m44pqp">Live Preview</small> <h4 class="svelte-1m44pqp">Shell-friendly theme tokens</h4> <p class="svelte-1m44pqp">This palette stays readable across surfaces while keeping the accent system
                        expressive enough for a real SaaS product.</p></div> <div class="callout-actions svelte-1m44pqp"><button type="button" class="primary-btn svelte-1m44pqp">Primary action</button> <button type="button" class="secondary-btn svelte-1m44pqp">Secondary</button></div></article></div></div></section>`,
  1
), zc = /* @__PURE__ */ le('<button type="button" class="preset-card svelte-1m44pqp"><div class="preset-band svelte-1m44pqp"><span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span></div> <div class="preset-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></button>'), Rc = /* @__PURE__ */ le('<section class="preset-grid svelte-1m44pqp"></section>'), Ec = /* @__PURE__ */ le('<div class="token-row svelte-1m44pqp"><div class="token-swatch svelte-1m44pqp"></div> <div class="token-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></div>'), Pc = /* @__PURE__ */ le('<section class="token-list svelte-1m44pqp"></section>'), Tc = /* @__PURE__ */ le('<div class="theme-panel svelte-1m44pqp" role="dialog" aria-label="Theme Studio"><header class="panel-status-row svelte-1m44pqp"><div class="panel-status-copy svelte-1m44pqp"><span class="panel-eyebrow svelte-1m44pqp"> </span> <h2 class="panel-title svelte-1m44pqp">Adaptive theme engine</h2> <p class="panel-summary svelte-1m44pqp"> </p></div> <span class="mode-pill svelte-1m44pqp"> </span></header> <div class="studio-tabs svelte-1m44pqp"></div> <div class="studio-scroll svelte-1m44pqp"><!> <!> <!></div> <footer class="panel-actions svelte-1m44pqp"><button type="button" class="ghost-btn svelte-1m44pqp">Reset</button> <button type="button" class="ghost-btn svelte-1m44pqp"> </button> <button type="button" class="primary-btn svelte-1m44pqp">Apply Theme</button></footer></div>'), Ac = /* @__PURE__ */ le('<div class="theme-studio-window svelte-1m44pqp"><!></div>');
const Cc = {
  hash: "svelte-1m44pqp",
  code: `:host {position:relative;z-index:12060;isolation:isolate;}.theme-studio-window.svelte-1m44pqp {position:fixed;inset:0;z-index:12060;pointer-events:none;isolation:isolate;}.theme-studio-window.svelte-1m44pqp .window-shell {pointer-events:auto;--window-panel: var(--shell-panel-solid, #ffffff);--window-surface: var(--shell-panel-solid-subtle, #f8fafc);--window-border: var(--shell-border, #dbe4f0);--window-control-size: 1.85rem;--window-aux-width: 1.92rem;--window-system-width: 2rem;--window-control-gap: 0.08rem;--window-control-radius: 9px;}.theme-studio-window.svelte-1m44pqp .window-chrome {min-height:2.25rem;padding-block:0.22rem;padding-inline:0.45rem 0.4rem;gap:0.45rem;}.theme-studio-window.svelte-1m44pqp .window-tools {gap:0.1rem;}.theme-studio-window.svelte-1m44pqp .window-tools .window-button:not(:first-child) {display:none;}.theme-studio-window.svelte-1m44pqp .system-controls .window-button:not(.close-button) {display:none;}.theme-studio-window.svelte-1m44pqp .window-title {font:var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.04em;}.theme-panel.svelte-1m44pqp {display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);font-family:"Segoe UI Variable", "Segoe UI", system-ui, sans-serif;}.panel-status-row.svelte-1m44pqp {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:1rem 1rem 0.9rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 85%), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 78%),
      var(--preview-surface-alt, #f7faff);}.panel-status-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;min-width:0;}.panel-eyebrow.svelte-1m44pqp {color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.4 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.12em;text-transform:uppercase;}.panel-title.svelte-1m44pqp {margin:0;font:var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--preview-text, #0f172a);}.panel-summary.svelte-1m44pqp {margin:0;color:var(--preview-text, #0f172a);font:var(--efs-font-body-sm, 13px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.mode-pill.svelte-1m44pqp {display:inline-flex;align-items:center;min-height:2rem;padding:0 0.75rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 4%);border-radius:999px;background:color-mix(in srgb, var(--preview-surface, #fff), var(--preview-accent, #5b8cff) 6%);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;color:var(--preview-text, #0f172a);}.studio-tabs.svelte-1m44pqp {display:flex;background:var(--preview-surface-inset, #eef3f8);border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);padding:0 0.75rem;gap:0.25rem;flex-shrink:0;}.studio-tab.svelte-1m44pqp {padding:0.75rem 1rem;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 0.18s ease;}.studio-tab.svelte-1m44pqp:hover,
  .studio-tab.active.svelte-1m44pqp {color:var(--preview-text, #0f172a);}.studio-tab.active.svelte-1m44pqp {border-bottom-color:var(--preview-accent, #5b8cff);}.studio-scroll.svelte-1m44pqp {flex:1;overflow-y:auto;background:var(--preview-surface-alt, #f8fafc);padding:1rem;display:flex;flex-direction:column;gap:1rem;}.hero-card.svelte-1m44pqp,
  .preview-shell.svelte-1m44pqp,
  .preset-card.svelte-1m44pqp,
  .token-row.svelte-1m44pqp {border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);border-radius:18px;box-shadow:var(--preview-shadow, 0 18px 60px rgba(15, 23, 42, 0.12));}.hero-card.svelte-1m44pqp {position:relative;overflow:hidden;padding:1rem;background:radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 80%), transparent 34%),
      radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--preview-secondary, #8b5cf6), transparent 86%), transparent 28%),
      var(--preview-surface, #ffffff);}.hero-glow.svelte-1m44pqp {position:absolute;inset:-10% 10% auto auto;width:10rem;height:10rem;border-radius:999px;background:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 76%);filter:blur(50px);opacity:0.9;pointer-events:none;}.hero-top.svelte-1m44pqp {position:relative;display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:center;margin-bottom:1rem;}.orb-wrap.svelte-1m44pqp {width:4.5rem;height:4.5rem;display:grid;place-items:center;border-radius:1.25rem;background:color-mix(in srgb, var(--preview-accent-soft, #e8efff), transparent 10%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 25%);}.theme-orb.svelte-1m44pqp {width:3.1rem;height:3.1rem;border-radius:999px;background:radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.88), transparent 22%),
      linear-gradient(145deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.45),
      0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 64%);}.hero-copy.svelte-1m44pqp h3:where(.svelte-1m44pqp) {margin:0 0 0.2rem;font-size:1rem;line-height:1.2;}.hero-copy.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.82rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.color-input-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;margin-bottom:0.9rem;align-items:center;}.color-chip.svelte-1m44pqp {width:3rem;height:3rem;border-radius:1rem;padding:0.2rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface-alt, #f8fafc);cursor:pointer;display:block;}.color-chip.svelte-1m44pqp input:where(.svelte-1m44pqp) {position:absolute;opacity:0;pointer-events:none;}.color-chip.svelte-1m44pqp span:where(.svelte-1m44pqp) {display:block;width:100%;height:100%;border-radius:0.8rem;background:linear-gradient(135deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));}.hex-field.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;}.hex-field.svelte-1m44pqp span:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp),
  .preview-search.svelte-1m44pqp {min-height:2.7rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);border-radius:0.95rem;padding:0 0.9rem;font:inherit;outline:none;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp):focus {border-color:var(--preview-accent, #5b8cff);box-shadow:0 0 0 3px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 82%);}.mode-toggle.svelte-1m44pqp {display:inline-flex;padding:0.2rem;border-radius:999px;background:var(--preview-surface-inset, #eef3f8);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);gap:0.2rem;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp),
  .ghost-btn.svelte-1m44pqp,
  .primary-btn.svelte-1m44pqp,
  .secondary-btn.svelte-1m44pqp,
  .preview-ghost.svelte-1m44pqp,
  .sidebar-item.svelte-1m44pqp,
  .swatch-card.svelte-1m44pqp,
  .preset-card.svelte-1m44pqp {font:inherit;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp) {min-width:4.35rem;min-height:2.35rem;padding:0 0.85rem;border-radius:999px;border:none;background:transparent;color:var(--preview-text-muted, #64748b);cursor:pointer;}.mode-toggle.svelte-1m44pqp button.active:where(.svelte-1m44pqp) {background:var(--preview-accent, #5b8cff);color:var(--preview-on-accent, #ffffff);}.slider-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;margin-bottom:0.9rem;}.slider-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.55rem;padding:0.8rem 0.9rem;border-radius:1rem;background:color-mix(in srgb, var(--preview-surface-alt, #f8fafc), var(--preview-accent, #5b8cff) 4%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);}.slider-label-row.svelte-1m44pqp {display:flex;justify-content:space-between;gap:0.75rem;font-size:0.82rem;}input[type='range'].svelte-1m44pqp {width:100%;accent-color:var(--preview-accent, #5b8cff);}.swatch-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:0.6rem;}.swatch-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.4rem;padding:0.65rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);color:var(--preview-text, #0f172a);cursor:default;}.swatch.svelte-1m44pqp {height:2.35rem;border-radius:0.8rem;border:1px solid rgba(255, 255, 255, 0.28);}.swatch-card.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.74rem;}.preview-shell.svelte-1m44pqp {overflow:hidden;background:var(--preview-surface, #fff);}.preview-topbar.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;align-items:center;padding:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface-alt, #f8fafc);}.preview-dots.svelte-1m44pqp {display:flex;gap:0.35rem;}.preview-dots.svelte-1m44pqp span:where(.svelte-1m44pqp) {width:0.62rem;height:0.62rem;border-radius:999px;background:var(--preview-border-strong, #c7d4e6);}.preview-search.svelte-1m44pqp {display:flex;align-items:center;color:var(--preview-text-muted, #64748b);font-size:0.82rem;}.preview-ghost.svelte-1m44pqp,
  .ghost-btn.svelte-1m44pqp,
  .secondary-btn.svelte-1m44pqp {min-height:2.5rem;padding:0 0.9rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #fff);color:var(--preview-text, #0f172a);cursor:pointer;}.preview-body.svelte-1m44pqp {display:grid;grid-template-columns:11rem minmax(0, 1fr);min-height:18rem;}.preview-sidebar.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.45rem;padding:0.9rem;background:var(--preview-surface-inset, #eef3f8);border-right:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.sidebar-item.svelte-1m44pqp {min-height:2.45rem;border-radius:0.9rem;border:1px solid transparent;background:transparent;color:var(--preview-text-muted, #64748b);text-align:left;padding:0 0.85rem;cursor:pointer;}.sidebar-item.active.svelte-1m44pqp {background:var(--preview-accent-soft, #e8efff);border-color:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 75%);color:var(--preview-text, #0f172a);}.preview-content.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.85rem;padding:0.95rem;background:var(--preview-surface, #fff);}.metric-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;}.metric-card.svelte-1m44pqp,
  .callout-card.svelte-1m44pqp {border-radius:1rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);}.metric-card.svelte-1m44pqp {padding:0.85rem 0.95rem;}.metric-card.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .callout-card.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .token-copy.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .preset-copy.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);}.metric-card.svelte-1m44pqp strong:where(.svelte-1m44pqp) {display:block;margin-top:0.25rem;}.callout-card.svelte-1m44pqp {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:1rem;align-items:center;padding:1rem;}.callout-card.svelte-1m44pqp h4:where(.svelte-1m44pqp) {margin:0.15rem 0 0.35rem;font-size:1rem;}.callout-card.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.83rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.callout-actions.svelte-1m44pqp {display:flex;gap:0.6rem;align-items:center;}.primary-btn.svelte-1m44pqp {min-height:2.6rem;padding:0 1rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-accent-strong, #3b62db), transparent 18%);background:linear-gradient(
      180deg,
      color-mix(in srgb, var(--preview-accent, #5b8cff), white 8%),
      var(--preview-accent, #5b8cff)
    );color:var(--preview-on-accent, #ffffff);cursor:pointer;box-shadow:0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 72%);}.secondary-btn.svelte-1m44pqp {background:color-mix(in srgb, var(--preview-secondary-soft, #ede9fe), var(--preview-surface, #fff) 8%);}.preset-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.9rem;}.preset-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;padding:0.8rem;background:var(--preview-surface, #fff);cursor:pointer;text-align:left;}.preset-band.svelte-1m44pqp {display:grid;grid-template-columns:repeat(3, 1fr);gap:0.45rem;}.preset-band.svelte-1m44pqp span:where(.svelte-1m44pqp) {height:3rem;border-radius:0.9rem;}.preset-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.18rem;}.token-list.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;}.token-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.8rem;align-items:center;padding:0.8rem;background:var(--preview-surface, #fff);}.token-swatch.svelte-1m44pqp {width:2.7rem;height:2.7rem;border-radius:0.95rem;border:1px solid rgba(255, 255, 255, 0.28);}.token-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.12rem;}.panel-actions.svelte-1m44pqp {display:flex;justify-content:flex-end;gap:0.65rem;padding:0.9rem 1rem 1rem;border-top:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface, #fff);}

  @media (max-width: 47.99rem) {.panel-status-row.svelte-1m44pqp,
    .hero-top.svelte-1m44pqp,
    .color-input-row.svelte-1m44pqp,
    .preview-body.svelte-1m44pqp,
    .callout-card.svelte-1m44pqp {grid-template-columns:1fr;display:flex;flex-direction:column;}.slider-grid.svelte-1m44pqp,
    .metric-row.svelte-1m44pqp,
    .preset-grid.svelte-1m44pqp,
    .swatch-row.svelte-1m44pqp {grid-template-columns:1fr;}.preview-sidebar.svelte-1m44pqp {border-right:0;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.mode-pill.svelte-1m44pqp {align-self:flex-start;}.panel-actions.svelte-1m44pqp {flex-wrap:wrap;}
  }`
};
function Lc(e, t) {
  Vi(t, !0), Hs(e, Cc);
  const r = 468, n = 696, i = 16, s = 12, a = 12060;
  let o = /* @__PURE__ */ I(!1), l = /* @__PURE__ */ I(!1), c = /* @__PURE__ */ I("normal"), f = /* @__PURE__ */ I("theme"), m = /* @__PURE__ */ I("toolbar"), p = /* @__PURE__ */ I(null), y = /* @__PURE__ */ I(null), g = /* @__PURE__ */ I(s), R = /* @__PURE__ */ I(s), b = /* @__PURE__ */ I(r), q = /* @__PURE__ */ I(n), A = /* @__PURE__ */ I("#5b8cff"), k = /* @__PURE__ */ I("light"), B = /* @__PURE__ */ I(66), K = /* @__PURE__ */ I(56), se = /* @__PURE__ */ I("Copy CSS"), Y = /* @__PURE__ */ I("One seed color drives the whole palette.");
  const ue = [
    { id: "theme", label: "Theme" },
    { id: "presets", label: "Presets" },
    { id: "tokens", label: "Tokens" }
  ], z = /* @__PURE__ */ U(() => lr.preview(d(A), d(k), d(B), d(K)));
  function me(j = d(m)) {
    const H = j === "toolbar" ? ["toolbar-theme-trigger", "fab-theme-trigger"] : ["fab-theme-trigger", "toolbar-theme-trigger"];
    for (const ae of H) {
      const Z = document.getElementById(ae);
      if (Z instanceof HTMLElement) {
        w(p, Z, !0), w(m, ae === "fab-theme-trigger" ? "fab" : "toolbar", !0);
        return;
      }
    }
    w(p, null);
  }
  function ve() {
    if (!d(p) || typeof window > "u") return;
    const j = d(p).getBoundingClientRect(), H = Math.min(r, Math.max(360, window.innerWidth - s * 2)), ae = Math.min(n, Math.max(420, window.innerHeight - s * 2));
    let Z = j.right - H, Ct = d(m) === "toolbar" ? j.bottom + i : j.top - ae - i;
    Z = Math.min(Math.max(s, Z), Math.max(s, window.innerWidth - H - s)), Ct = Math.min(Math.max(s, Ct), Math.max(s, window.innerHeight - ae - s)), w(b, Math.round(H), !0), w(q, Math.round(ae), !0), w(g, Math.round(Z), !0), w(R, Math.round(Ct), !0);
  }
  function de(j) {
    var ae;
    const H = (ae = j == null ? void 0 : j.detail) == null ? void 0 : ae.source;
    return H === "toolbar" || H === "fab" ? H : null;
  }
  function De(j) {
    const H = de(j) ?? d(m), ae = d(m);
    if (w(m, H, !0), d(c) === "minimized" && w(c, "normal"), d(l)) {
      w(o, !0);
      return;
    }
    if (d(o) && ae === H) {
      _t();
      return;
    }
    me(H), ve(), w(o, !0);
  }
  function _t() {
    w(o, !1);
  }
  function Kr() {
    w(l, !d(l));
  }
  function br(j) {
    if (!d(o) || d(l)) return;
    const H = j.composedPath();
    d(y) && H.includes(d(y)) || d(p) && H.includes(d(p)) || _t();
  }
  function kt(j) {
    const H = j.trim().replace("#", "");
    return /^[0-9a-fA-F]{6}$/.test(H) ? `#${H.toLowerCase()}` : /^[0-9a-fA-F]{3}$/.test(H) ? `#${H.split("").map((ae) => `${ae}${ae}`).join("").toLowerCase()}` : d(A);
  }
  async function At() {
    if (!(navigator != null && navigator.clipboard)) {
      w(se, "Copy CSS");
      return;
    }
    await navigator.clipboard.writeText(Mc(d(z))), w(se, "Copied"), w(Y, "CSS variables copied to clipboard."), setTimeout(
      () => {
        w(se, "Copy CSS");
      },
      1600
    );
  }
  function je() {
    const j = lr.apply(d(A), d(k), d(B), d(K));
    us(j), document.dispatchEvent(new CustomEvent("efsdb:theme-studio:applied", { detail: { palette: j } })), w(Y, `Applied ${j.seed} in ${j.mode} mode.`);
  }
  function Jr() {
    lr.reset();
    const j = lr.preview("#5b8cff", "light", 66, 56);
    w(A, j.seed, !0), w(k, j.mode, !0), w(B, j.vividness, !0), w(K, j.contrast, !0), us(j), w(Y, "Theme reset to the default shell palette.");
  }
  function ze(j) {
    w(A, j.seed, !0), w(k, j.mode, !0), w(B, j.vividness, !0), w(K, j.contrast, !0), w(f, "theme"), w(Y, `${j.label} loaded.`);
  }
  Io(() => {
    document.addEventListener("efsdb:theme-studio:toggle", De), document.addEventListener("pointerdown", br, !0), window.addEventListener("resize", ve), lr.hydrate();
    const j = Gl(lr);
    return w(A, j.seed, !0), w(k, j.mode, !0), w(B, j.vividness, !0), w(K, j.contrast, !0), us(j.palette), me(d(m)), ve(), () => {
      document.removeEventListener("efsdb:theme-studio:toggle", De), document.removeEventListener("pointerdown", br, !0), window.removeEventListener("resize", ve);
    };
  });
  var $n = To(), yr = un($n);
  {
    var Xe = (j) => {
      var H = Ac(), ae = _(H);
      Ho(ae, {
        title: "Theme Studio",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 18,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return d(l);
        },
        zIndex: a,
        onClose: _t,
        onPinToggle: Kr,
        get state() {
          return d(c);
        },
        set state(Z) {
          w(c, Z, !0);
        },
        get x() {
          return d(g);
        },
        set x(Z) {
          w(g, Z, !0);
        },
        get y() {
          return d(R);
        },
        set y(Z) {
          w(R, Z, !0);
        },
        get width() {
          return d(b);
        },
        set width(Z) {
          w(b, Z, !0);
        },
        get height() {
          return d(q);
        },
        set height(Z) {
          w(q, Z, !0);
        },
        children: (Z, Ct) => {
          var xr = Tc(), Qr = _(xr), en = _(Qr), Kt = _(en), jn = _(Kt, !0);
          x(Kt);
          var qt = E(Kt, 4), _r = _(qt, !0);
          x(qt), x(en);
          var Ke = E(en, 2), Jt = _(Ke, !0);
          x(Ke), x(Qr);
          var Lt = E(Qr, 2);
          Qn(Lt, 21, () => ue, (he) => he.id, (he, qe) => {
            var fe = $c();
            let G;
            var Me = _(fe, !0);
            x(fe), Ee(() => {
              G = tt(fe, 1, "studio-tab svelte-1m44pqp", null, G, { active: d(f) === d(qe).id }), Ae(Me, d(qe).label);
            }), ne("click", fe, () => w(f, d(qe).id, !0)), Q(he, fe);
          }), x(Lt);
          var lt = E(Lt, 2), zn = _(lt);
          {
            var ci = (he) => {
              var qe = jc(), fe = un(qe), G = E(_(fe), 4), Me = _(G), dt = _(Me);
              yi(dt), Tr(2), x(Me);
              var ct = E(Me, 2), Je = E(_(ct), 2);
              yi(Je), x(ct);
              var Qt = E(ct, 2), ut = _(Qt);
              let ht;
              var tn = E(ut, 2);
              let Nt;
              x(Qt), x(G);
              var er = E(G, 2), tr = _(er), rr = _(tr), ft = E(_(rr), 2), qr = _(ft, !0);
              x(ft), x(rr);
              var nr = E(rr, 2);
              yi(nr), x(tr);
              var Mr = E(tr, 2), ir = _(Mr), hi = E(_(ir), 2), Sr = _(hi, !0);
              x(hi), x(ir);
              var pt = E(ir, 2);
              yi(pt), x(Mr), x(er);
              var sr = E(er, 2), $r = _(sr), Pn = _($r);
              Tr(2), x($r);
              var mt = E($r, 2), Tn = _(mt);
              Tr(2), x(mt);
              var rn = E(mt, 2), fi = _(rn);
              Tr(2), x(rn);
              var An = E(rn, 2), Cn = _(An);
              Tr(2), x(An), x(sr), x(fe);
              var pi = E(fe, 2), jr = E(_(pi), 2), mi = E(_(jr), 2), Ln = _(mi), In = _(Ln), On = E(_(In), 2), Zi = _(On, !0);
              x(On), x(In);
              var vi = E(In, 2), Dn = E(_(vi), 2), Xi = _(Dn, !0);
              x(Dn), x(vi), x(Ln), Tr(2), x(mi), x(jr), x(pi), Ee(() => {
                Nd(Je, d(A)), ht = tt(ut, 1, "svelte-1m44pqp", null, ht, { active: d(k) === "light" }), Nt = tt(tn, 1, "svelte-1m44pqp", null, Nt, { active: d(k) === "dark" }), Ae(qr, d(B)), Ae(Sr, d(K)), Ge(Pn, `background:${d(z).accent}`), Ge(Tn, `background:${d(z).accentStrong}`), Ge(fi, `background:${d(z).accentSecondary}`), Ge(Cn, `background:${d(z).surfaceAlt}`), Ae(Zi, d(z).accent), Ae(Xi, d(z).accentSecondary);
              }), as(dt, () => d(A), (Wt) => w(A, Wt)), ne("input", Je, (Wt) => {
                const wi = Wt.currentTarget;
                w(A, kt(wi.value), !0), wi.value = d(A);
              }), ne("click", ut, () => w(k, "light")), ne("click", tn, () => w(k, "dark")), as(nr, () => d(B), (Wt) => w(B, Wt)), as(pt, () => d(K), (Wt) => w(K, Wt)), Q(he, qe);
            };
            Ye(zn, (he) => {
              d(f) === "theme" && he(ci);
            });
          }
          var It = E(zn, 2);
          {
            var kr = (he) => {
              var qe = Rc();
              Qn(qe, 21, () => _c, (fe) => fe.id, (fe, G) => {
                var Me = zc(), dt = _(Me), ct = _(dt), Je = E(ct, 2), Qt = E(Je, 2);
                x(dt);
                var ut = E(dt, 2), ht = _(ut), tn = _(ht, !0);
                x(ht);
                var Nt = E(ht, 2), er = _(Nt);
                x(Nt), x(ut), x(Me), Ee(
                  (tr, rr) => {
                    Ge(ct, `background:${d(G).seed}`), Ge(Je, tr), Ge(Qt, rr), Ae(tn, d(G).label), Ae(er, `${d(G).seed ?? ""} · ${d(G).mode ?? ""}`);
                  },
                  [
                    () => `background:${lr.preview(d(G).seed, d(G).mode, d(G).vividness, d(G).contrast).accentSecondary}`,
                    () => `background:${lr.preview(d(G).seed, d(G).mode, d(G).vividness, d(G).contrast).surfaceAlt}`
                  ]
                ), ne("click", Me, () => ze(d(G))), Q(fe, Me);
              }), x(qe), Q(he, qe);
            };
            Ye(It, (he) => {
              d(f) === "presets" && he(kr);
            });
          }
          var Ot = E(It, 2);
          {
            var Dt = (he) => {
              var qe = Pc();
              Qn(
                qe,
                21,
                () => [
                  ["--accent", d(z).accent],
                  ["--accent-strong", d(z).accentStrong],
                  ["--accent-soft", d(z).accentSoft],
                  ["--accent-secondary", d(z).accentSecondary],
                  [
                    "--accent-secondary-soft",
                    d(z).accentSecondarySoft
                  ],
                  ["--surface", d(z).surface],
                  ["--surface-alt", d(z).surfaceAlt],
                  ["--surface-inset", d(z).surfaceInset],
                  ["--border", d(z).border],
                  ["--border-strong", d(z).borderStrong],
                  ["--text", d(z).text],
                  ["--text-muted", d(z).textMuted]
                ],
                (fe) => fe[0],
                (fe, G) => {
                  var Me = Ec(), dt = _(Me), ct = E(dt, 2), Je = _(ct), Qt = _(Je, !0);
                  x(Je);
                  var ut = E(Je, 2), ht = _(ut, !0);
                  x(ut), x(ct), x(Me), Ee(() => {
                    Ge(dt, `background:${d(G)[1]}`), Ae(Qt, d(G)[0]), Ae(ht, d(G)[1]);
                  }), Q(fe, Me);
                }
              ), x(qe), Q(he, qe);
            };
            Ye(Ot, (he) => {
              d(f) === "tokens" && he(Dt);
            });
          }
          x(lt);
          var Rn = E(lt, 2), En = _(Rn), be = E(En, 2), Gi = _(be, !0);
          x(be);
          var ui = E(be, 2);
          x(Rn), x(xr), Ee(() => {
            Ge(xr, `--preview-accent:${d(z).accent};
                --preview-accent-strong:${d(z).accentStrong};
                --preview-accent-soft:${d(z).accentSoft};
                --preview-secondary:${d(z).accentSecondary};
                --preview-secondary-soft:${d(z).accentSecondarySoft};
                --preview-surface:${d(z).surface};
                --preview-surface-alt:${d(z).surfaceAlt};
                --preview-surface-inset:${d(z).surfaceInset};
                --preview-border:${d(z).border};
                --preview-border-strong:${d(z).borderStrong};
                --preview-text:${d(z).text};
                --preview-text-muted:${d(z).textMuted};
                --preview-on-accent:${d(z).onAccent};
                --preview-shadow:${d(z).shadow};`), Ae(jn, d(m) === "toolbar" ? "Toolbar launch" : "Fab launch"), Ae(_r, d(Y)), re(Ke, "data-mode", d(k)), Ae(Jt, d(k) === "dark" ? "Dark mode" : "Light mode"), Ae(Gi, d(se));
          }), ne("click", En, Jr), ne("click", be, At), ne("click", ui, je), Q(Z, xr);
        },
        $$slots: { default: !0 }
      }), x(H), zs(H, (Z) => w(y, Z), () => d(y)), Q(j, H);
    };
    Ye(yr, (j) => {
      d(o) && j(Xe);
    });
  }
  Q(e, $n), Hi();
}
Po(["click", "input"]);
customElements.define("efsdb-theme-studio", Fs(Lc, {}, [], [], { mode: "open" }));
export {
  Lc as ThemeStudio
};
