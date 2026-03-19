var ci = Object.defineProperty;
var Cn = (e) => {
  throw TypeError(e);
};
var di = (e, t, r) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var G = (e, t, r) => di(e, typeof t != "symbol" ? t + "" : t, r), Yr = (e, t, r) => t.has(e) || Cn("Cannot " + r);
var f = (e, t, r) => (Yr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), O = (e, t, r) => t.has(e) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (Yr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), J = (e, t, r) => (Yr(e, t, "access private method"), r);
var Gn;
typeof window < "u" && ((Gn = window.__svelte ?? (window.__svelte = {})).v ?? (Gn.v = /* @__PURE__ */ new Set())).add("5");
const hi = 1, vi = 2, Qn = 4, _i = 8, pi = 16, mi = 1, gi = 4, yi = 8, bi = 16, wi = 1, $i = 2, es = "[", _n = "[!", On = "[?", pn = "]", Zt = {}, ue = Symbol(), ts = "http://www.w3.org/1999/xhtml", Ei = !1;
var mn = Array.isArray, xi = Array.prototype.indexOf, Qt = Array.prototype.includes, Pr = Array.from, Tr = Object.keys, Rr = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Si = Object.prototype, ki = Array.prototype, Ti = Object.getPrototypeOf, In = Object.isExtensible;
const rs = () => {
};
function Ri(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ns() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
function Ai(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ae = 2, er = 4, Mr = 8, ss = 1 << 24, wt = 16, je = 32, gt = 64, Zr = 128, Ce = 512, se = 1024, he = 2048, Je = 4096, Se = 8192, Oe = 16384, $t = 32768, Pn = 1 << 25, Dt = 65536, Mn = 1 << 17, Ni = 1 << 18, jt = 1 << 19, Ci = 1 << 20, Ye = 1 << 25, Lt = 65536, Qr = 1 << 21, gn = 1 << 22, _t = 1 << 23, Ht = Symbol("$state"), is = Symbol("legacy props"), Oi = Symbol(""), et = new class extends Error {
  constructor() {
    super(...arguments);
    G(this, "name", "StaleReactionError");
    G(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Xn;
const Ii = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Xn = globalThis.document) != null && Xn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Dr = 3, mr = 8;
function Pi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Mi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Di(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Li(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ji() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ui() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Lr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Yi() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ki() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function at(e) {
  j = e;
}
let L;
function ye(e) {
  if (e === null)
    throw Lr(), Zt;
  return L = e;
}
function Fr() {
  return ye(/* @__PURE__ */ Ge(L));
}
function y(e) {
  if (j) {
    if (/* @__PURE__ */ Ge(L) !== null)
      throw Lr(), Zt;
    L = e;
  }
}
function as(e = 1) {
  if (j) {
    for (var t = e, r = L; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(r);
    L = r;
  }
}
function Ar(e = !0) {
  for (var t = 0, r = L; ; ) {
    if (r.nodeType === mr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === pn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === es || n === _n || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(r)
    );
    e && r.remove(), r = s;
  }
}
function ls(e) {
  if (!e || e.nodeType !== mr)
    throw Lr(), Zt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function os(e) {
  return e === this.v;
}
function Ji(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function us(e) {
  return !Ji(e, this.v);
}
let Wi = !1, ke = null;
function tr(e) {
  ke = e;
}
function Et(e, t = !1, r) {
  ke = {
    p: ke,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      F
    ),
    l: null
  };
}
function xt(e) {
  var t = (
    /** @type {ComponentContext} */
    ke
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      qs(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ke = t.p, e ?? /** @type {T} */
  {};
}
function fs() {
  return !0;
}
let kt = [];
function cs() {
  var e = kt;
  kt = [], Ri(e);
}
function pt(e) {
  if (kt.length === 0 && !ar) {
    var t = kt;
    queueMicrotask(() => {
      t === kt && cs();
    });
  }
  kt.push(e);
}
function Gi() {
  for (; kt.length > 0; )
    cs();
}
function ds(e) {
  var t = F;
  if (t === null)
    return I.f |= _t, e;
  if ((t.f & $t) === 0 && (t.f & er) === 0)
    throw e;
  ct(e, t);
}
function ct(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zr) !== 0) {
      if ((t.f & $t) === 0)
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
const Xi = -7169;
function re(e, t) {
  e.f = e.f & Xi | t;
}
function yn(e) {
  (e.f & Ce) !== 0 || e.deps === null ? re(e, se) : re(e, Je);
}
function hs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & Lt) === 0 || (t.f ^= Lt, hs(
        /** @type {Derived} */
        t.deps
      ));
}
function vs(e, t, r) {
  (e.f & he) !== 0 ? t.add(e) : (e.f & Je) !== 0 && r.add(e), hs(e.deps), re(e, se);
}
let br = !1;
function Zi(e) {
  var t = br;
  try {
    return br = !1, [e(), br];
  } finally {
    br = t;
  }
}
const St = /* @__PURE__ */ new Set();
let R = null, fe = null, en = null, ar = !1, Kr = !1, zt = null, $r = null;
var Dn = 0;
let Qi = 1;
var Yt, Kt, Jt, Wt, cr, we, At, tt, rt, Gt, ve, tn, rn, nn, sn, _s;
const Cr = class Cr {
  constructor() {
    O(this, ve);
    // for debugging. TODO remove once async is stable
    G(this, "id", Qi++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    G(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    G(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, Yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, Kt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    O(this, Jt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    O(this, Wt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    O(this, cr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    O(this, we, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    O(this, At, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    O(this, tt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    O(this, rt, /* @__PURE__ */ new Map());
    G(this, "is_fork", !1);
    O(this, Gt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, rt).has(t) || f(this, rt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, rt).get(t);
    if (r) {
      f(this, rt).delete(t);
      for (var n of r.d)
        re(n, he), this.schedule(n);
      for (n of r.m)
        re(n, Je), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== ue && !this.previous.has(t) && this.previous.set(t, r), (t.f & _t) === 0 && (this.current.set(t, t.v), fe == null || fe.set(t, t.v));
  }
  activate() {
    R = this;
  }
  deactivate() {
    R = null, fe = null;
  }
  flush() {
    try {
      Kr = !0, R = this, J(this, ve, rn).call(this);
    } finally {
      Dn = 0, en = null, zt = null, $r = null, Kr = !1, R = null, fe = null, mt.clear();
    }
  }
  discard() {
    for (const t of f(this, Kt)) t(this);
    f(this, Kt).clear(), St.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    A(this, Jt, f(this, Jt) + 1), t && A(this, Wt, f(this, Wt) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    A(this, Jt, f(this, Jt) - 1), t && A(this, Wt, f(this, Wt) - 1), !(f(this, Gt) || r) && (A(this, Gt, !0), pt(() => {
      A(this, Gt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, At).add(n);
    for (const n of r)
      f(this, tt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Kt).add(t);
  }
  settled() {
    return (f(this, cr) ?? A(this, cr, ns())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new Cr();
      Kr || (St.add(R), ar || pt(() => {
        R === t && t.flush();
      }));
    }
    return R;
  }
  apply() {
    {
      fe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (en = t, (s = t.b) != null && s.is_pending && (t.f & (er | Mr | ss)) !== 0 && (t.f & $t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (zt !== null && r === F && (I === null || (I.f & ae) === 0))
        return;
      if ((n & (gt | je)) !== 0) {
        if ((n & se) === 0)
          return;
        r.f ^= se;
      }
    }
    f(this, we).push(r);
  }
};
Yt = new WeakMap(), Kt = new WeakMap(), Jt = new WeakMap(), Wt = new WeakMap(), cr = new WeakMap(), we = new WeakMap(), At = new WeakMap(), tt = new WeakMap(), rt = new WeakMap(), Gt = new WeakMap(), ve = new WeakSet(), tn = function() {
  return this.is_fork || f(this, Wt) > 0;
}, rn = function() {
  var l, o;
  if (Dn++ > 1e3 && (St.delete(this), ea()), !J(this, ve, tn).call(this)) {
    for (const u of f(this, At))
      f(this, tt).delete(u), re(u, he), this.schedule(u);
    for (const u of f(this, tt))
      re(u, Je), this.schedule(u);
  }
  const t = f(this, we);
  A(this, we, []), this.apply();
  var r = zt = [], n = [], s = $r = [];
  for (const u of t)
    try {
      J(this, ve, nn).call(this, u, r, n);
    } catch (c) {
      throw ys(u), c;
    }
  if (R = null, s.length > 0) {
    var i = Cr.ensure();
    for (const u of s)
      i.schedule(u);
  }
  if (zt = null, $r = null, J(this, ve, tn).call(this)) {
    J(this, ve, sn).call(this, n), J(this, ve, sn).call(this, r);
    for (const [u, c] of f(this, rt))
      gs(u, c);
  } else {
    f(this, Jt) === 0 && St.delete(this), f(this, At).clear(), f(this, tt).clear();
    for (const u of f(this, Yt)) u(this);
    f(this, Yt).clear(), Ln(n), Ln(r), (l = f(this, cr)) == null || l.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    R
  );
  if (f(this, we).length > 0) {
    const u = a ?? (a = this);
    f(u, we).push(...f(this, we).filter((c) => !f(u, we).includes(c)));
  }
  a !== null && (St.add(a), J(o = a, ve, rn).call(o)), St.has(this) || J(this, ve, _s).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
nn = function(t, r, n) {
  t.f ^= se;
  for (var s = t.first; s !== null; ) {
    var i = s.f, a = (i & (je | gt)) !== 0, l = a && (i & se) !== 0, o = l || (i & Se) !== 0 || f(this, rt).has(s);
    if (!o && s.fn !== null) {
      a ? s.f ^= se : (i & er) !== 0 ? r.push(s) : gr(s) && ((i & wt) !== 0 && f(this, tt).add(s), nr(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
sn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    vs(t[r], f(this, At), f(this, tt));
}, _s = function() {
  var o;
  for (const u of St) {
    var t = u.id < this.id, r = [];
    for (const [c, _] of this.current) {
      if (u.current.has(c))
        if (t && _ !== u.current.get(c))
          u.current.set(c, _);
        else
          continue;
      r.push(c);
    }
    var n = [...u.current.keys()].filter((c) => !this.current.has(c));
    if (n.length === 0)
      t && u.discard();
    else if (r.length > 0) {
      u.activate();
      var s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
      for (var a of r)
        ps(a, n, s, i);
      if (f(u, we).length > 0) {
        u.apply();
        for (var l of f(u, we))
          J(o = u, ve, nn).call(o, l, [], []);
        A(u, we, []);
      }
      u.deactivate();
    }
  }
};
let yt = Cr;
function z(e) {
  var t = ar;
  ar = !0;
  try {
    for (var r; ; ) {
      if (Gi(), R === null)
        return (
          /** @type {T} */
          r
        );
      R.flush();
    }
  } finally {
    ar = t;
  }
}
function ea() {
  try {
    ji();
  } catch (e) {
    ct(e, en);
  }
}
let De = null;
function Ln(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Oe | Se)) === 0 && gr(n) && (De = /* @__PURE__ */ new Set(), nr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bs(n), (De == null ? void 0 : De.size) > 0)) {
        mt.clear();
        for (const s of De) {
          if ((s.f & (Oe | Se)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            De.has(a) && (De.delete(a), i.push(a)), a = a.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (Oe | Se)) === 0 && nr(o);
          }
        }
        De.clear();
      }
    }
    De = null;
  }
}
function ps(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & ae) !== 0 ? ps(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (gn | wt)) !== 0 && (i & he) === 0 && ms(s, t, n) && (re(s, he), bn(
        /** @type {Effect} */
        s
      ));
    }
}
function ms(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Qt.call(t, s))
        return !0;
      if ((s.f & ae) !== 0 && ms(
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
function bn(e) {
  R.schedule(e);
}
function gs(e, t) {
  if (!((e.f & je) !== 0 && (e.f & se) !== 0)) {
    (e.f & he) !== 0 ? t.d.push(e) : (e.f & Je) !== 0 && t.m.push(e), re(e, se);
    for (var r = e.first; r !== null; )
      gs(r, t), r = r.next;
  }
}
function ys(e) {
  re(e, se);
  for (var t = e.first; t !== null; )
    ys(t), t = t.next;
}
function ta(e) {
  let t = 0, r = Ft(0), n;
  return () => {
    Sn() && (m(r), kn(() => (t === 0 && (n = Ur(() => e(() => lr(r)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, lr(r));
      });
    })));
  };
}
var ra = Dt | jt;
function na(e, t, r, n) {
  new sa(e, t, r, n);
}
var $e, dr, ze, Nt, pe, He, Ee, Le, nt, Ct, ft, Xt, hr, vr, st, Or, Z, bs, ws, $s, an, Er, xr, ln;
class sa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    O(this, Z);
    /** @type {Boundary | null} */
    G(this, "parent");
    G(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    G(this, "transform_error");
    /** @type {TemplateNode} */
    O(this, $e);
    /** @type {TemplateNode | null} */
    O(this, dr, j ? L : null);
    /** @type {BoundaryProps} */
    O(this, ze);
    /** @type {((anchor: Node) => void)} */
    O(this, Nt);
    /** @type {Effect} */
    O(this, pe);
    /** @type {Effect | null} */
    O(this, He, null);
    /** @type {Effect | null} */
    O(this, Ee, null);
    /** @type {Effect | null} */
    O(this, Le, null);
    /** @type {DocumentFragment | null} */
    O(this, nt, null);
    O(this, Ct, 0);
    O(this, ft, 0);
    O(this, Xt, !1);
    /** @type {Set<Effect>} */
    O(this, hr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    O(this, vr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    O(this, st, null);
    O(this, Or, ta(() => (A(this, st, Ft(f(this, Ct))), () => {
      A(this, st, null);
    })));
    var i;
    A(this, $e, t), A(this, ze, r), A(this, Nt, (a) => {
      var l = (
        /** @type {Effect} */
        F
      );
      l.b = this, l.f |= Zr, n(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((a) => a), A(this, pe, jr(() => {
      if (j) {
        const a = (
          /** @type {Comment} */
          f(this, dr)
        );
        Fr();
        const l = a.data === _n;
        if (a.data.startsWith(On)) {
          const u = JSON.parse(a.data.slice(On.length));
          J(this, Z, ws).call(this, u);
        } else l ? J(this, Z, $s).call(this) : J(this, Z, bs).call(this);
      } else
        J(this, Z, an).call(this);
    }, ra)), j && A(this, $e, L);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    vs(t, f(this, hr), f(this, vr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    J(this, Z, ln).call(this, t, r), A(this, Ct, f(this, Ct) + t), !(!f(this, st) || f(this, Xt)) && (A(this, Xt, !0), pt(() => {
      A(this, Xt, !1), f(this, st) && rr(f(this, st), f(this, Ct));
    }));
  }
  get_effect_pending() {
    return f(this, Or).call(this), m(
      /** @type {Source<number>} */
      f(this, st)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, ze).onerror;
    let n = f(this, ze).failed;
    if (!r && !n)
      throw t;
    f(this, He) && (_e(f(this, He)), A(this, He, null)), f(this, Ee) && (_e(f(this, Ee)), A(this, Ee, null)), f(this, Le) && (_e(f(this, Le)), A(this, Le, null)), j && (ye(
      /** @type {TemplateNode} */
      f(this, dr)
    ), as(), ye(Ar()));
    var s = !1, i = !1;
    const a = () => {
      if (s) {
        Ki();
        return;
      }
      s = !0, i && Vi(), f(this, Le) !== null && Pt(f(this, Le), () => {
        A(this, Le, null);
      }), J(this, Z, xr).call(this, () => {
        J(this, Z, an).call(this);
      });
    }, l = (o) => {
      try {
        i = !0, r == null || r(o, a), i = !1;
      } catch (u) {
        ct(u, f(this, pe) && f(this, pe).parent);
      }
      n && A(this, Le, J(this, Z, xr).call(this, () => {
        try {
          return Ne(() => {
            var u = (
              /** @type {Effect} */
              F
            );
            u.b = this, u.f |= Zr, n(
              f(this, $e),
              () => o,
              () => a
            );
          });
        } catch (u) {
          return ct(
            u,
            /** @type {Effect} */
            f(this, pe).parent
          ), null;
        }
      }));
    };
    pt(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (u) {
        ct(u, f(this, pe) && f(this, pe).parent);
        return;
      }
      o !== null && typeof o == "object" && typeof /** @type {any} */
      o.then == "function" ? o.then(
        l,
        /** @param {unknown} e */
        (u) => ct(u, f(this, pe) && f(this, pe).parent)
      ) : l(o);
    });
  }
}
$e = new WeakMap(), dr = new WeakMap(), ze = new WeakMap(), Nt = new WeakMap(), pe = new WeakMap(), He = new WeakMap(), Ee = new WeakMap(), Le = new WeakMap(), nt = new WeakMap(), Ct = new WeakMap(), ft = new WeakMap(), Xt = new WeakMap(), hr = new WeakMap(), vr = new WeakMap(), st = new WeakMap(), Or = new WeakMap(), Z = new WeakSet(), bs = function() {
  try {
    A(this, He, Ne(() => f(this, Nt).call(this, f(this, $e))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ws = function(t) {
  const r = f(this, ze).failed;
  r && A(this, Le, Ne(() => {
    r(
      f(this, $e),
      () => t,
      () => () => {
      }
    );
  }));
}, $s = function() {
  const t = f(this, ze).pending;
  t && (this.is_pending = !0, A(this, Ee, Ne(() => t(f(this, $e)))), pt(() => {
    var r = A(this, nt, document.createDocumentFragment()), n = Ie();
    r.append(n), A(this, He, J(this, Z, xr).call(this, () => Ne(() => f(this, Nt).call(this, n)))), f(this, ft) === 0 && (f(this, $e).before(r), A(this, nt, null), Pt(
      /** @type {Effect} */
      f(this, Ee),
      () => {
        A(this, Ee, null);
      }
    ), J(this, Z, Er).call(
      this,
      /** @type {Batch} */
      R
    ));
  }));
}, an = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, ft, 0), A(this, Ct, 0), A(this, He, Ne(() => {
      f(this, Nt).call(this, f(this, $e));
    })), f(this, ft) > 0) {
      var t = A(this, nt, document.createDocumentFragment());
      An(f(this, He), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, ze).pending
      );
      A(this, Ee, Ne(() => r(f(this, $e))));
    } else
      J(this, Z, Er).call(
        this,
        /** @type {Batch} */
        R
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Er = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, hr), f(this, vr));
}, /**
 * @template T
 * @param {() => T} fn
 */
xr = function(t) {
  var r = F, n = I, s = ke;
  We(f(this, pe)), Me(f(this, pe)), tr(f(this, pe).ctx);
  try {
    return yt.ensure(), t();
  } catch (i) {
    return ds(i), null;
  } finally {
    We(r), Me(n), tr(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ln = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && J(n = this.parent, Z, ln).call(n, t, r);
    return;
  }
  A(this, ft, f(this, ft) + t), f(this, ft) === 0 && (J(this, Z, Er).call(this, r), f(this, Ee) && Pt(f(this, Ee), () => {
    A(this, Ee, null);
  }), f(this, nt) && (f(this, $e).before(f(this, nt)), A(this, nt, null)));
};
function ia(e, t, r, n) {
  const s = qr;
  var i = e.filter((d) => !d.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    F
  ), l = aa(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function u(d) {
    l();
    try {
      n(d);
    } catch (g) {
      (a.f & Oe) === 0 && ct(g, a);
    }
    Nr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(s)));
    return;
  }
  var c = Es();
  function _() {
    Promise.all(r.map((d) => /* @__PURE__ */ la(d))).then((d) => u([...t.map(s), ...d])).catch((d) => ct(d, a)).finally(() => c());
  }
  o ? o.then(() => {
    l(), _(), Nr();
  }) : _();
}
function aa() {
  var e = (
    /** @type {Effect} */
    F
  ), t = I, r = ke, n = (
    /** @type {Batch} */
    R
  );
  return function(i = !0) {
    We(e), Me(t), tr(r), i && (e.f & Oe) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Nr(e = !0) {
  We(null), Me(null), tr(null), e && (R == null || R.deactivate());
}
function Es() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    F.b
  ), t = (
    /** @type {Batch} */
    R
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = ae | he, r = I !== null && (I.f & ae) !== 0 ? (
    /** @type {Derived} */
    I
  ) : null;
  return F !== null && (F.f |= jt), {
    ctx: ke,
    deps: null,
    effects: null,
    equals: os,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: r ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function la(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && Mi();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ft(
    /** @type {V} */
    ue
  ), a = !I, l = /* @__PURE__ */ new Map();
  return ga(() => {
    var g;
    var o = (
      /** @type {Effect} */
      F
    ), u = ns();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Nr);
    } catch (p) {
      u.reject(p), Nr();
    }
    var c = (
      /** @type {Batch} */
      R
    );
    if (a) {
      if ((o.f & $t) !== 0)
        var _ = Es();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (g = l.get(c)) == null || g.reject(et), l.delete(c);
      else {
        for (const p of l.values())
          p.reject(et);
        l.clear();
      }
      l.set(c, u);
    }
    const d = (p, x = void 0) => {
      if (_) {
        var v = x === et;
        _(v);
      }
      if (!(x === et || (o.f & Oe) !== 0)) {
        if (c.activate(), x)
          i.f |= _t, rr(i, x);
        else {
          (i.f & _t) !== 0 && (i.f ^= _t), rr(i, p);
          for (const [$, C] of l) {
            if (l.delete($), $ === c) break;
            C.reject(et);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(d, (p) => d(null, p || "unknown"));
  }), Fs(() => {
    for (const o of l.values())
      o.reject(et);
  }), new Promise((o) => {
    function u(c) {
      function _() {
        c === s ? o(i) : u(s);
      }
      c.then(_, _);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  const t = /* @__PURE__ */ qr(e);
  return Vs(t), t;
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = us, t;
}
function oa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      _e(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ua(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ae) === 0)
      return (t.f & Oe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function wn(e) {
  var t, r = F;
  We(ua(e));
  try {
    e.f &= ~Lt, oa(e), t = Ws(e);
  } finally {
    We(r);
  }
  return t;
}
function Ss(e) {
  var t = e.v, r = wn(e);
  if (!e.equals(r) && (e.wv = Ks(), (!(R != null && R.is_fork) || e.deps === null) && (e.v = r, R == null || R.capture(e, t), e.deps === null))) {
    re(e, se);
    return;
  }
  bt || (fe !== null ? (Sn() || R != null && R.is_fork) && fe.set(e, r) : yn(e));
}
function fa(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(et), n.teardown = rs, n.ac = null, ur(n, 0), Tn(n));
}
function ks(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && nr(t);
}
let un = /* @__PURE__ */ new Set();
const mt = /* @__PURE__ */ new Map();
let Ts = !1;
function Ft(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: os,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  const r = Ft(e);
  return Vs(r), r;
}
// @__NO_SIDE_EFFECTS__
function Rs(e, t = !1, r = !0) {
  const n = Ft(e);
  return t || (n.equals = us), n;
}
function N(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!qe || (I.f & Mn) !== 0) && fs() && (I.f & (ae | wt | gn | Mn)) !== 0 && (Pe === null || !Qt.call(Pe, e)) && Hi();
  let n = r ? me(t) : t;
  return rr(e, n, $r);
}
function rr(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    bt ? mt.set(e, t) : mt.set(e, n), e.v = t;
    var s = yt.ensure();
    if (s.capture(e, n), (e.f & ae) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & he) !== 0 && wn(i), fe === null && yn(i);
    }
    e.wv = Ks(), As(e, he, r), F !== null && (F.f & se) !== 0 && (F.f & (je | gt)) === 0 && (Re === null ? wa([e]) : Re.push(e)), !s.is_fork && un.size > 0 && !Ts && ca();
  }
  return t;
}
function ca() {
  Ts = !1;
  for (const e of un)
    (e.f & se) !== 0 && re(e, Je), gr(e) && nr(e);
  un.clear();
}
function lr(e) {
  N(e, e.v + 1);
}
function As(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var a = n[i], l = a.f, o = (l & he) === 0;
      if (o && re(a, t), (l & ae) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        fe == null || fe.delete(u), (l & Lt) === 0 && (l & Ce && (a.f |= Lt), As(u, Je, r));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          a
        );
        (l & wt) !== 0 && De !== null && De.add(c), r !== null ? r.push(c) : bn(c);
      }
    }
}
function me(e) {
  if (typeof e != "object" || e === null || Ht in e)
    return e;
  const t = Ti(e);
  if (t !== Si && t !== ki)
    return e;
  var r = /* @__PURE__ */ new Map(), n = mn(e), s = /* @__PURE__ */ Y(0), i = Mt, a = (l) => {
    if (Mt === i)
      return l();
    var o = I, u = Mt;
    Me(null), Bn(i);
    var c = l();
    return Me(o), Bn(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Bi();
        var c = r.get(o);
        return c === void 0 ? a(() => {
          var _ = /* @__PURE__ */ Y(u.value);
          return r.set(o, _), _;
        }) : N(c, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const c = a(() => /* @__PURE__ */ Y(ue));
            r.set(o, c), lr(s);
          }
        } else
          N(u, ue), lr(s);
        return !0;
      },
      get(l, o, u) {
        var g;
        if (o === Ht)
          return e;
        var c = r.get(o), _ = o in l;
        if (c === void 0 && (!_ || (g = It(l, o)) != null && g.writable) && (c = a(() => {
          var p = me(_ ? l[o] : ue), x = /* @__PURE__ */ Y(p);
          return x;
        }), r.set(o, c)), c !== void 0) {
          var d = m(c);
          return d === ue ? void 0 : d;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var c = r.get(o);
          c && (u.value = m(c));
        } else if (u === void 0) {
          var _ = r.get(o), d = _ == null ? void 0 : _.v;
          if (_ !== void 0 && d !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        var d;
        if (o === Ht)
          return !0;
        var u = r.get(o), c = u !== void 0 && u.v !== ue || Reflect.has(l, o);
        if (u !== void 0 || F !== null && (!c || (d = It(l, o)) != null && d.writable)) {
          u === void 0 && (u = a(() => {
            var g = c ? me(l[o]) : ue, p = /* @__PURE__ */ Y(g);
            return p;
          }), r.set(o, u));
          var _ = m(u);
          if (_ === ue)
            return !1;
        }
        return c;
      },
      set(l, o, u, c) {
        var w;
        var _ = r.get(o), d = o in l;
        if (n && o === "length")
          for (var g = u; g < /** @type {Source<number>} */
          _.v; g += 1) {
            var p = r.get(g + "");
            p !== void 0 ? N(p, ue) : g in l && (p = a(() => /* @__PURE__ */ Y(ue)), r.set(g + "", p));
          }
        if (_ === void 0)
          (!d || (w = It(l, o)) != null && w.writable) && (_ = a(() => /* @__PURE__ */ Y(void 0)), N(_, me(u)), r.set(o, _));
        else {
          d = _.v !== ue;
          var x = a(() => me(u));
          N(_, x);
        }
        var v = Reflect.getOwnPropertyDescriptor(l, o);
        if (v != null && v.set && v.set.call(c, u), !d) {
          if (n && typeof o == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(o);
            Number.isInteger(C) && C >= $.v && N($, C + 1);
          }
          lr(s);
        }
        return !0;
      },
      ownKeys(l) {
        m(s);
        var o = Reflect.ownKeys(l).filter((_) => {
          var d = r.get(_);
          return d === void 0 || d.v !== ue;
        });
        for (var [u, c] of r)
          c.v !== ue && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        zi();
      }
    }
  );
}
function Fn(e) {
  try {
    if (e !== null && typeof e == "object" && Ht in e)
      return e[Ht];
  } catch {
  }
  return e;
}
function da(e, t) {
  return Object.is(Fn(e), Fn(t));
}
var qn, Ns, Cs, Os;
function fn() {
  if (qn === void 0) {
    qn = window, Ns = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Cs = It(t, "firstChild").get, Os = It(t, "nextSibling").get, In(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), In(r) && (r.__t = void 0);
  }
}
function Ie(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return (
    /** @type {TemplateNode | null} */
    Cs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return (
    /** @type {TemplateNode | null} */
    Os.call(e)
  );
}
function b(e, t) {
  if (!j)
    return /* @__PURE__ */ qt(e);
  var r = /* @__PURE__ */ qt(L);
  if (r === null)
    r = L.appendChild(Ie());
  else if (t && r.nodeType !== Dr) {
    var n = Ie();
    return r == null || r.before(n), ye(n), n;
  }
  return t && En(
    /** @type {Text} */
    r
  ), ye(r), r;
}
function Is(e, t = !1) {
  if (!j) {
    var r = /* @__PURE__ */ qt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ge(r) : r;
  }
  if (t) {
    if ((L == null ? void 0 : L.nodeType) !== Dr) {
      var n = Ie();
      return L == null || L.before(n), ye(n), n;
    }
    En(
      /** @type {Text} */
      L
    );
  }
  return L;
}
function E(e, t = 1, r = !1) {
  let n = j ? L : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(n);
  if (!j)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Dr) {
      var i = Ie();
      return n === null ? s == null || s.after(i) : n.before(i), ye(i), i;
    }
    En(
      /** @type {Text} */
      n
    );
  }
  return ye(n), n;
}
function Ps(e) {
  e.textContent = "";
}
function Ms() {
  return !1;
}
function $n(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ts, e, void 0)
  );
}
function En(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Dr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let jn = !1;
function Ds() {
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
function xn(e) {
  var t = I, r = F;
  Me(null), We(null);
  try {
    return e();
  } finally {
    Me(t), We(r);
  }
}
function Ls(e, t, r, n = r) {
  e.addEventListener(t, () => xn(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Ds();
}
function ha(e) {
  F === null && (I === null && qi(), Fi()), bt && Li();
}
function va(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Xe(e, t) {
  var r = F;
  r !== null && (r.f & Se) !== 0 && (e |= Se);
  var n = {
    ctx: ke,
    deps: null,
    nodes: null,
    f: e | he | Ce,
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
  }, s = n;
  if ((e & er) !== 0)
    zt !== null ? zt.push(n) : yt.ensure().schedule(n);
  else if (t !== null) {
    try {
      nr(n);
    } catch (a) {
      throw _e(n), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & jt) === 0 && (s = s.first, (e & wt) !== 0 && (e & Dt) !== 0 && s !== null && (s.f |= Dt));
  }
  if (s !== null && (s.parent = r, r !== null && va(s, r), I !== null && (I.f & ae) !== 0 && (e & gt) === 0)) {
    var i = (
      /** @type {Derived} */
      I
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Sn() {
  return I !== null && !qe;
}
function Fs(e) {
  const t = Xe(Mr, null);
  return re(t, se), t.teardown = e, t;
}
function _a(e) {
  ha();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !I && (t & je) !== 0 && (t & $t) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ke
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return qs(e);
}
function qs(e) {
  return Xe(er | Ci, e);
}
function pa(e) {
  yt.ensure();
  const t = Xe(gt | jt, e);
  return () => {
    _e(t);
  };
}
function ma(e) {
  yt.ensure();
  const t = Xe(gt | jt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Pt(t, () => {
      _e(t), n(void 0);
    }) : (_e(t), n(void 0));
  });
}
function js(e) {
  return Xe(er, e);
}
function ga(e) {
  return Xe(gn | jt, e);
}
function kn(e, t = 0) {
  return Xe(Mr | t, e);
}
function de(e, t = [], r = [], n = []) {
  ia(n, t, r, (s) => {
    Xe(Mr, () => e(...s.map(m)));
  });
}
function jr(e, t = 0) {
  var r = Xe(wt | t, e);
  return r;
}
function Ne(e) {
  return Xe(je | jt, e);
}
function Us(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = bt, n = I;
    Un(!0), Me(null);
    try {
      t.call(null);
    } finally {
      Un(r), Me(n);
    }
  }
}
function Tn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && xn(() => {
      s.abort(et);
    });
    var n = r.next;
    (r.f & gt) !== 0 ? r.parent = null : _e(r, t), r = n;
  }
}
function ya(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & je) === 0 && _e(t), t = r;
  }
}
function _e(e, t = !0) {
  var r = !1;
  (t || (e.f & Ni) !== 0) && e.nodes !== null && e.nodes.end !== null && (ba(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), re(e, Pn), Tn(e, t && !r), ur(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Us(e), e.f ^= Pn, e.f |= Oe;
  var s = e.parent;
  s !== null && s.first !== null && Bs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function ba(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ge(e);
    e.remove(), e = r;
  }
}
function Bs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Pt(e, t, r = !0) {
  var n = [];
  zs(e, n, !0);
  var s = () => {
    r && _e(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var l of n)
      l.out(a);
  } else
    s();
}
function zs(e, t, r) {
  if ((e.f & Se) === 0) {
    e.f ^= Se;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next, a = (s.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & je) !== 0 && (e.f & wt) !== 0;
      zs(s, t, a ? r : !1), s = i;
    }
  }
}
function Rn(e) {
  Hs(e, !0);
}
function Hs(e, t) {
  if ((e.f & Se) !== 0) {
    e.f ^= Se, (e.f & se) === 0 && (re(e, he), yt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Dt) !== 0 || (r.f & je) !== 0;
      Hs(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function An(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Ge(r);
      t.append(r), r = s;
    }
}
let Sr = !1, bt = !1;
function Un(e) {
  bt = e;
}
let I = null, qe = !1;
function Me(e) {
  I = e;
}
let F = null;
function We(e) {
  F = e;
}
let Pe = null;
function Vs(e) {
  I !== null && (Pe === null ? Pe = [e] : Pe.push(e));
}
let ge = null, be = 0, Re = null;
function wa(e) {
  Re = e;
}
let Ys = 1, Tt = 0, Mt = Tt;
function Bn(e) {
  Mt = e;
}
function Ks() {
  return ++Ys;
}
function gr(e) {
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if (t & ae && (e.f &= ~Lt), (t & Je) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (gr(
        /** @type {Derived} */
        i
      ) && Ss(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    fe === null && re(e, se);
  }
  return !1;
}
function Js(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Pe !== null && Qt.call(Pe, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & ae) !== 0 ? Js(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? re(i, he) : (i.f & se) !== 0 && re(i, Je), bn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ws(e) {
  var x;
  var t = ge, r = be, n = Re, s = I, i = Pe, a = ke, l = qe, o = Mt, u = e.f;
  ge = /** @type {null | Value[]} */
  null, be = 0, Re = null, I = (u & (je | gt)) === 0 ? e : null, Pe = null, tr(e.ctx), qe = !1, Mt = ++Tt, e.ac !== null && (xn(() => {
    e.ac.abort(et);
  }), e.ac = null);
  try {
    e.f |= Qr;
    var c = (
      /** @type {Function} */
      e.fn
    ), _ = c();
    e.f |= $t;
    var d = e.deps, g = R == null ? void 0 : R.is_fork;
    if (ge !== null) {
      var p;
      if (g || ur(e, be), d !== null && be > 0)
        for (d.length = be + ge.length, p = 0; p < ge.length; p++)
          d[be + p] = ge[p];
      else
        e.deps = d = ge;
      if (Sn() && (e.f & Ce) !== 0)
        for (p = be; p < d.length; p++)
          ((x = d[p]).reactions ?? (x.reactions = [])).push(e);
    } else !g && d !== null && be < d.length && (ur(e, be), d.length = be);
    if (fs() && Re !== null && !qe && d !== null && (e.f & (ae | Je | he)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Re.length; p++)
        Js(
          Re[p],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Tt++, s.deps !== null)
        for (let v = 0; v < r; v += 1)
          s.deps[v].rv = Tt;
      if (t !== null)
        for (const v of t)
          v.rv = Tt;
      Re !== null && (n === null ? n = Re : n.push(.../** @type {Source[]} */
      Re));
    }
    return (e.f & _t) !== 0 && (e.f ^= _t), _;
  } catch (v) {
    return ds(v);
  } finally {
    e.f ^= Qr, ge = t, be = r, Re = n, I = s, Pe = i, tr(a), qe = l, Mt = o;
  }
}
function $a(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = xi.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ge === null || !Qt.call(ge, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ce) !== 0 && (i.f ^= Ce, i.f &= ~Lt), yn(i), fa(i), ur(i, 0);
  }
}
function ur(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      $a(e, r[n]);
}
function nr(e) {
  var t = e.f;
  if ((t & Oe) === 0) {
    re(e, se);
    var r = F, n = Sr;
    F = e, Sr = !0;
    try {
      (t & (wt | ss)) !== 0 ? ya(e) : Tn(e), Us(e);
      var s = Ws(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ys;
      var i;
      Ei && Wi && (e.f & he) !== 0 && e.deps;
    } finally {
      Sr = n, F = r;
    }
  }
}
async function Ea() {
  await Promise.resolve(), z();
}
function m(e) {
  var t = e.f, r = (t & ae) !== 0;
  if (I !== null && !qe) {
    var n = F !== null && (F.f & Oe) !== 0;
    if (!n && (Pe === null || !Qt.call(Pe, e))) {
      var s = I.deps;
      if ((I.f & Qr) !== 0)
        e.rv < Tt && (e.rv = Tt, ge === null && s !== null && s[be] === e ? be++ : ge === null ? ge = [e] : ge.push(e));
      else {
        (I.deps ?? (I.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : Qt.call(i, I) || i.push(I);
      }
    }
  }
  if (bt && mt.has(e))
    return mt.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (bt) {
      var l = a.v;
      return ((a.f & se) === 0 && a.reactions !== null || Xs(a)) && (l = wn(a)), mt.set(a, l), l;
    }
    var o = (a.f & Ce) === 0 && !qe && I !== null && (Sr || (I.f & Ce) !== 0), u = (a.f & $t) === 0;
    gr(a) && (o && (a.f |= Ce), Ss(a)), o && !u && (ks(a), Gs(a));
  }
  if (fe != null && fe.has(e))
    return fe.get(e);
  if ((e.f & _t) !== 0)
    throw e.v;
  return e.v;
}
function Gs(e) {
  if (e.f |= Ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & Ce) === 0 && (ks(
        /** @type {Derived} */
        t
      ), Gs(
        /** @type {Derived} */
        t
      ));
}
function Xs(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (mt.has(t) || (t.f & ae) !== 0 && Xs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ur(e) {
  var t = qe;
  try {
    return qe = !0, e();
  } finally {
    qe = t;
  }
}
const Rt = Symbol("events"), Zs = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function fr(e, t, r) {
  (t[Rt] ?? (t[Rt] = {}))[e] = r;
}
function Br(e) {
  for (var t = 0; t < e.length; t++)
    Zs.add(e[t]);
  for (var r of cn)
    r(e);
}
let zn = null;
function Hn(e) {
  var v, $;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  zn = e;
  var a = 0, l = zn === e && e[Rt];
  if (l) {
    var o = s.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Rt] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (i = /** @type {Element} */
  s[a] || e.target, i !== t) {
    Rr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var c = I, _ = F;
    Me(null), We(null);
    try {
      for (var d, g = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = ($ = i[Rt]) == null ? void 0 : $[n];
          x != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && x.call(i, e);
        } catch (C) {
          d ? g.push(C) : d = C;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (d) {
        for (let C of g)
          queueMicrotask(() => {
            throw C;
          });
        throw d;
      }
    } finally {
      e[Rt] = t, delete e.currentTarget, Me(c), We(_);
    }
  }
}
var Zn;
const Jr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Zn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Zn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function xa(e) {
  return (
    /** @type {string} */
    (Jr == null ? void 0 : Jr.createHTML(e)) ?? e
  );
}
function Sa(e) {
  var t = $n("template");
  return t.innerHTML = xa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Vt(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  var r = (t & wi) !== 0, n = (t & $i) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (j)
      return Vt(L, null), L;
    s === void 0 && (s = Sa(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(s)));
    var a = (
      /** @type {TemplateNode} */
      n || Ns ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qt(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Vt(l, o);
    } else
      Vt(a, a);
    return a;
  };
}
function ka() {
  if (j)
    return Vt(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ie();
  return e.append(t, r), Vt(t, r), e;
}
function q(e, t) {
  if (j) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      F
    );
    ((r.f & $t) === 0 || r.nodes.end === null) && (r.nodes.end = L), Fr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ta = ["touchstart", "touchmove"];
function Ra(e) {
  return Ta.includes(e);
}
function X(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Qs(e, t) {
  return ei(e, t);
}
function Aa(e, t) {
  fn(), t.intro = t.intro ?? !1;
  const r = t.target, n = j, s = L;
  try {
    for (var i = /* @__PURE__ */ qt(r); i && (i.nodeType !== mr || /** @type {Comment} */
    i.data !== es); )
      i = /* @__PURE__ */ Ge(i);
    if (!i)
      throw Zt;
    at(!0), ye(
      /** @type {Comment} */
      i
    );
    const a = ei(e, { ...t, anchor: i });
    return at(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Zt && console.warn("Failed to hydrate: ", a), t.recover === !1 && Ui(), fn(), Ps(r), at(!1), Qs(e, t);
  } finally {
    at(n), ye(s);
  }
}
const wr = /* @__PURE__ */ new Map();
function ei(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: a = !0, transformError: l }) {
  fn();
  var o = void 0, u = ma(() => {
    var c = r ?? t.appendChild(Ie());
    na(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (g) => {
        Et({});
        var p = (
          /** @type {ComponentContext} */
          ke
        );
        if (i && (p.c = i), s && (n.$$events = s), j && Vt(
          /** @type {TemplateNode} */
          g,
          null
        ), o = e(g, n) || {}, j && (F.nodes.end = L, L === null || L.nodeType !== mr || /** @type {Comment} */
        L.data !== pn))
          throw Lr(), Zt;
        xt();
      },
      l
    );
    var _ = /* @__PURE__ */ new Set(), d = (g) => {
      for (var p = 0; p < g.length; p++) {
        var x = g[p];
        if (!_.has(x)) {
          _.add(x);
          var v = Ra(x);
          for (const w of [t, document]) {
            var $ = wr.get(w);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), wr.set(w, $));
            var C = $.get(x);
            C === void 0 ? (w.addEventListener(x, Hn, { passive: v }), $.set(x, 1)) : $.set(x, C + 1);
          }
        }
      }
    };
    return d(Pr(Zs)), cn.add(d), () => {
      var v;
      for (var g of _)
        for (const $ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            wr.get($)
          ), x = (
            /** @type {number} */
            p.get(g)
          );
          --x == 0 ? ($.removeEventListener(g, Hn), p.delete(g), p.size === 0 && wr.delete($)) : p.set(g, x);
        }
      cn.delete(d), c !== r && ((v = c.parentNode) == null || v.removeChild(c));
    };
  });
  return dn.set(o, u), o;
}
let dn = /* @__PURE__ */ new WeakMap();
function Na(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
var Fe, Ve, xe, Ot, _r, pr, Ir;
class ti {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    G(this, "anchor");
    /** @type {Map<Batch, Key>} */
    O(this, Fe, /* @__PURE__ */ new Map());
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
    O(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    O(this, xe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    O(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    O(this, _r, !0);
    /**
     * @param {Batch} batch
     */
    O(this, pr, (t) => {
      if (f(this, Fe).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, Fe).get(t)
        ), n = f(this, Ve).get(r);
        if (n)
          Rn(n), f(this, Ot).delete(r);
        else {
          var s = f(this, xe).get(r);
          s && (f(this, Ve).set(r, s.effect), f(this, xe).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, a] of f(this, Fe)) {
          if (f(this, Fe).delete(i), i === t)
            break;
          const l = f(this, xe).get(a);
          l && (_e(l.effect), f(this, xe).delete(a));
        }
        for (const [i, a] of f(this, Ve)) {
          if (i === r || f(this, Ot).has(i)) continue;
          const l = () => {
            if (Array.from(f(this, Fe).values()).includes(i)) {
              var u = document.createDocumentFragment();
              An(a, u), u.append(Ie()), f(this, xe).set(i, { effect: a, fragment: u });
            } else
              _e(a);
            f(this, Ot).delete(i), f(this, Ve).delete(i);
          };
          f(this, _r) || !n ? (f(this, Ot).add(i), Pt(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    O(this, Ir, (t) => {
      f(this, Fe).delete(t);
      const r = Array.from(f(this, Fe).values());
      for (const [n, s] of f(this, xe))
        r.includes(n) || (_e(s.effect), f(this, xe).delete(n));
    });
    this.anchor = t, A(this, _r, r);
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
    ), s = Ms();
    if (r && !f(this, Ve).has(t) && !f(this, xe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), a = Ie();
        i.append(a), f(this, xe).set(t, {
          effect: Ne(() => r(a)),
          fragment: i
        });
      } else
        f(this, Ve).set(
          t,
          Ne(() => r(this.anchor))
        );
    if (f(this, Fe).set(n, t), s) {
      for (const [l, o] of f(this, Ve))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of f(this, xe))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(f(this, pr)), n.ondiscard(f(this, Ir));
    } else
      j && (this.anchor = L), f(this, pr).call(this, n);
  }
}
Fe = new WeakMap(), Ve = new WeakMap(), xe = new WeakMap(), Ot = new WeakMap(), _r = new WeakMap(), pr = new WeakMap(), Ir = new WeakMap();
function Ca(e, t, ...r) {
  var n = new ti(e);
  jr(() => {
    const s = t() ?? null;
    n.ensure(s, s && ((i) => s(i, ...r)));
  }, Dt);
}
function Oa(e) {
  ke === null && Pi(), _a(() => {
    const t = Ur(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ke(e, t, r = !1) {
  var n;
  j && (n = L, Fr());
  var s = new ti(e), i = r ? Dt : 0;
  function a(l, o) {
    if (j) {
      var u = ls(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(u.substring(1))) {
        var c = Ar();
        ye(c), s.anchor = c, at(!1), s.ensure(l, o), at(!0);
        return;
      }
    }
    s.ensure(l, o);
  }
  jr(() => {
    var l = !1;
    t((o, u = 0) => {
      l = !0, a(u, o);
    }), l || a(-1, null);
  }, i);
}
function Ia(e, t, r) {
  for (var n = [], s = t.length, i, a = t.length, l = 0; l < s; l++) {
    let _ = t[l];
    Pt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            hn(e, Pr(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Ps(c), c.append(u), e.items.clear();
    }
    hn(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function hn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const l of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n != null && n.has(i)) {
      i.f |= Ye;
      const a = document.createDocumentFragment();
      An(i, a);
    } else
      _e(t[s], r);
  }
}
var Vn;
function dt(e, t, r, n, s, i = null) {
  var a = e, l = /* @__PURE__ */ new Map(), o = (t & Qn) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      e
    );
    a = j ? ye(/* @__PURE__ */ qt(u)) : u.appendChild(Ie());
  }
  j && Fr();
  var c = null, _ = /* @__PURE__ */ xs(() => {
    var w = r();
    return mn(w) ? w : w == null ? [] : Pr(w);
  }), d, g = /* @__PURE__ */ new Map(), p = !0;
  function x(w) {
    (C.effect.f & Oe) === 0 && (C.pending.delete(w), C.fallback = c, Pa(C, d, a, t, n), c !== null && (d.length === 0 ? (c.f & Ye) === 0 ? Rn(c) : (c.f ^= Ye, ir(c, null, a)) : Pt(c, () => {
      c = null;
    })));
  }
  function v(w) {
    C.pending.delete(w);
  }
  var $ = jr(() => {
    d = /** @type {V[]} */
    m(_);
    var w = d.length;
    let P = !1;
    if (j) {
      var Q = ls(a) === _n;
      Q !== (w === 0) && (a = Ar(), ye(a), at(!1), P = !0);
    }
    for (var W = /* @__PURE__ */ new Set(), V = (
      /** @type {Batch} */
      R
    ), le = Ms(), ie = 0; ie < w; ie += 1) {
      j && L.nodeType === mr && /** @type {Comment} */
      L.data === pn && (a = /** @type {Comment} */
      L, P = !0, at(!1));
      var oe = d[ie], ce = n(oe, ie), S = p ? null : l.get(ce);
      S ? (S.v && rr(S.v, oe), S.i && rr(S.i, ie), le && V.unskip_effect(S.e)) : (S = Ma(
        l,
        p ? a : Vn ?? (Vn = Ie()),
        oe,
        ce,
        ie,
        s,
        t,
        r
      ), p || (S.e.f |= Ye), l.set(ce, S)), W.add(ce);
    }
    if (w === 0 && i && !c && (p ? c = Ne(() => i(a)) : (c = Ne(() => i(Vn ?? (Vn = Ie()))), c.f |= Ye)), w > W.size && Di(), j && w > 0 && ye(Ar()), !p)
      if (g.set(V, W), le) {
        for (const [H, k] of l)
          W.has(H) || V.skip_effect(k.e);
        V.oncommit(x), V.ondiscard(v);
      } else
        x(V);
    P && at(!0), m(_);
  }), C = { effect: $, items: l, pending: g, outrogroups: null, fallback: c };
  p = !1, j && (a = L);
}
function sr(e) {
  for (; e !== null && (e.f & je) === 0; )
    e = e.next;
  return e;
}
function Pa(e, t, r, n, s) {
  var oe, ce, S, H, k, h, T, M, U;
  var i = (n & _i) !== 0, a = t.length, l = e.items, o = sr(e.effect.first), u, c = null, _, d = [], g = [], p, x, v, $;
  if (i)
    for ($ = 0; $ < a; $ += 1)
      p = t[$], x = s(p, $), v = /** @type {EachItem} */
      l.get(x).e, (v.f & Ye) === 0 && ((ce = (oe = v.nodes) == null ? void 0 : oe.a) == null || ce.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(v));
  for ($ = 0; $ < a; $ += 1) {
    if (p = t[$], x = s(p, $), v = /** @type {EachItem} */
    l.get(x).e, e.outrogroups !== null)
      for (const D of e.outrogroups)
        D.pending.delete(v), D.done.delete(v);
    if ((v.f & Se) !== 0 && (Rn(v), i && ((H = (S = v.nodes) == null ? void 0 : S.a) == null || H.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(v))), (v.f & Ye) !== 0)
      if (v.f ^= Ye, v === o)
        ir(v, null, r);
      else {
        var C = c ? c.next : o;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), ut(e, c, v), ut(e, v, C), ir(v, C, r), c = v, d = [], g = [], o = sr(c.next);
        continue;
      }
    if (v !== o) {
      if (u !== void 0 && u.has(v)) {
        if (d.length < g.length) {
          var w = g[0], P;
          c = w.prev;
          var Q = d[0], W = d[d.length - 1];
          for (P = 0; P < d.length; P += 1)
            ir(d[P], w, r);
          for (P = 0; P < g.length; P += 1)
            u.delete(g[P]);
          ut(e, Q.prev, W.next), ut(e, c, Q), ut(e, W, w), o = w, c = W, $ -= 1, d = [], g = [];
        } else
          u.delete(v), ir(v, o, r), ut(e, v.prev, v.next), ut(e, v, c === null ? e.effect.first : c.next), ut(e, c, v), c = v;
        continue;
      }
      for (d = [], g = []; o !== null && o !== v; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(o), g.push(o), o = sr(o.next);
      if (o === null)
        continue;
    }
    (v.f & Ye) === 0 && d.push(v), c = v, o = sr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const D of e.outrogroups)
      D.pending.size === 0 && (hn(e, Pr(D.done)), (k = e.outrogroups) == null || k.delete(D));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var V = [];
    if (u !== void 0)
      for (v of u)
        (v.f & Se) === 0 && V.push(v);
    for (; o !== null; )
      (o.f & Se) === 0 && o !== e.fallback && V.push(o), o = sr(o.next);
    var le = V.length;
    if (le > 0) {
      var ie = (n & Qn) !== 0 && a === 0 ? r : null;
      if (i) {
        for ($ = 0; $ < le; $ += 1)
          (T = (h = V[$].nodes) == null ? void 0 : h.a) == null || T.measure();
        for ($ = 0; $ < le; $ += 1)
          (U = (M = V[$].nodes) == null ? void 0 : M.a) == null || U.fix();
      }
      Ia(e, V, ie);
    }
  }
  i && pt(() => {
    var D, ne;
    if (_ !== void 0)
      for (v of _)
        (ne = (D = v.nodes) == null ? void 0 : D.a) == null || ne.apply();
  });
}
function Ma(e, t, r, n, s, i, a, l) {
  var o = (a & hi) !== 0 ? (a & pi) === 0 ? /* @__PURE__ */ Rs(r, !1, !1) : Ft(r) : null, u = (a & vi) !== 0 ? Ft(s) : null;
  return {
    v: o,
    i: u,
    e: Ne(() => (i(t, o ?? r, u ?? s, l), () => {
      e.delete(n);
    }))
  };
}
function ir(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(n)
      );
      if (i.before(n), n === s)
        return;
      n = a;
    }
}
function ut(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Da(e, t) {
  js(() => {
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
function ri(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ri(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function La() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ri(e)) && (n && (n += " "), n += t);
  return n;
}
function zr(e) {
  return typeof e == "object" ? La(e) : e ?? "";
}
function Fa(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Hr(e, t, r, n, s, i) {
  var a = e.__className;
  if (j || a !== r || a === void 0) {
    var l = Fa(r);
    (!j || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = r;
  }
  return i;
}
function ni(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!mn(t))
      return Yi();
    for (var n of e.options)
      n.selected = t.includes(or(n));
    return;
  }
  for (n of e.options) {
    var s = or(n);
    if (da(s, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function qa(e) {
  var t = new MutationObserver(() => {
    ni(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Fs(() => {
    t.disconnect();
  });
}
function ja(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), s = !0;
  Ls(e, "change", (i) => {
    var a = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(a), or);
    else {
      var o = e.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && or(o);
    }
    r(l), e.__value = l, R !== null && n.add(R);
  }), js(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        R
      );
      if (n.has(a))
        return;
    }
    if (ni(e, i, s), s && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = or(l), r(i));
    }
    e.__value = i, s = !1;
  }), qa(e);
}
function or(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ua = Symbol("is custom element"), Ba = Symbol("is html"), za = Ii ? "link" : "LINK";
function ht(e) {
  if (j) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Yn(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          Yn(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, pt(r), Ds();
  }
}
function Yn(e, t, r, n) {
  var s = Ha(e);
  j && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === za) || s[t] !== (s[t] = r) && (t === "loading" && (e[Oi] = r), e.removeAttribute(t));
}
function Ha(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ua]: e.nodeName.includes("-"),
      [Ba]: e.namespaceURI === ts
    })
  );
}
function vt(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ls(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Wr(e) ? Gr(i) : i, r(i), R !== null && n.add(R), await Ea(), i !== (i = t())) {
      var a = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var u = e.value.length;
        a === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (j && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ur(t) == null && e.value) && (r(Wr(e) ? Gr(e.value) : e.value), R !== null && n.add(R)), kn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        R
      );
      if (n.has(i))
        return;
    }
    Wr(e) && s === Gr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Wr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Gr(e) {
  return e === "" ? null : +e;
}
function K(e, t, r, n) {
  var C;
  var s = (r & yi) !== 0, i = (r & bi) !== 0, a = (
    /** @type {V} */
    n
  ), l = !0, o = () => (l && (l = !1, a = i ? Ur(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let u;
  if (s) {
    var c = Ht in e || is in e;
    u = ((C = It(e, t)) == null ? void 0 : C.set) ?? (c && t in e ? (w) => e[t] = w : void 0);
  }
  var _, d = !1;
  s ? [_, d] = Zi(() => (
    /** @type {V} */
    e[t]
  )) : _ = /** @type {V} */
  e[t];
  var g;
  if (g = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? o() : (l = !0, w);
  }, (r & gi) === 0)
    return g;
  if (u) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, P) {
        return arguments.length > 0 ? ((!P || p || d) && u(P ? g() : w), w) : g();
      })
    );
  }
  var x = !1, v = ((r & mi) !== 0 ? qr : xs)(() => (x = !1, g()));
  s && m(v);
  var $ = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(w, P) {
      if (arguments.length > 0) {
        const Q = P ? m(v) : s ? me(w) : w;
        return N(v, Q), x = !0, a !== void 0 && (a = Q), w;
      }
      return bt && x || ($.f & Oe) !== 0 ? v.v : m(v);
    })
  );
}
function Va(e) {
  return new Ya(e);
}
var it, Ae;
class Ya {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    O(this, it);
    /** @type {Record<string, any>} */
    O(this, Ae);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (a, l) => {
      var o = /* @__PURE__ */ Rs(l, !1, !1);
      return r.set(a, o), o;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return m(r.get(l) ?? n(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === is ? !0 : (m(r.get(l) ?? n(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return N(r.get(l) ?? n(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    A(this, Ae, (t.hydrate ? Aa : Qs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && z(), A(this, it, s.$$events);
    for (const a of Object.keys(f(this, Ae)))
      a === "$set" || a === "$destroy" || a === "$on" || Rr(this, a, {
        get() {
          return f(this, Ae)[a];
        },
        /** @param {any} value */
        set(l) {
          f(this, Ae)[a] = l;
        },
        enumerable: !0
      });
    f(this, Ae).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, f(this, Ae).$destroy = () => {
      Na(f(this, Ae));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, Ae).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, it)[t] = f(this, it)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return f(this, it)[t].push(n), () => {
      f(this, it)[t] = f(this, it)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    f(this, Ae).$destroy();
  }
}
it = new WeakMap(), Ae = new WeakMap();
let si;
typeof HTMLElement == "function" && (si = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    G(this, "$$ctor");
    /** Slots */
    G(this, "$$s");
    /** @type {any} The Svelte component instance */
    G(this, "$$c");
    /** Whether or not the custom element is connected */
    G(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    G(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    G(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    G(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    G(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    G(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    G(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    G(this, "$$shadowRoot", null);
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
          const l = $n("slot");
          i !== "default" && (l.name = i), q(a, l);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Ka(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = kr(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Va({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = pa(() => {
        kn(() => {
          var i;
          this.$$r = !0;
          for (const a of Tr(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = kr(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const l = this.$$c.$on(i, a);
          this.$$l_u.set(a, l);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = kr(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return Tr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function kr(e, t, r, n) {
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
function Ka(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ut(e, t, r, n, s, i) {
  let a = class extends si {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Tr(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Tr(t).forEach((l) => {
    Rr(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var _;
        o = kr(l, o, t), this.$$d[l] = o;
        var u = this.$$c;
        if (u) {
          var c = (_ = It(u, l)) == null ? void 0 : _.get;
          c ? u[l] = o : u.$set({ [l]: o });
        }
      }
    });
  }), n.forEach((l) => {
    Rr(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const Xr = "efsdb-bootstrap";
function Ja() {
  var n;
  const e = document.getElementById(Xr);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${Xr}`);
  const t = ((n = e.textContent) == null ? void 0 : n.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${Xr}`);
  const r = JSON.parse(t);
  if (!r || typeof r != "object")
    throw new Error("Invalid bootstrap payload");
  return r;
}
function Wa(e) {
  const t = Ja();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function Ga() {
  return window;
}
function Xa() {
  var e, t;
  return ((t = (e = Ga()).getEfsdbTheme) == null ? void 0 : t.call(e)) ?? "dark";
}
function Za(e) {
  const t = (r) => {
    const n = r.detail;
    e((n == null ? void 0 : n.theme) === "light" ? "light" : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
function vn() {
  return window;
}
function Qa() {
  var e, t;
  return ((t = (e = vn()).getAccessToken) == null ? void 0 : t.call(e)) ?? null;
}
async function el() {
  return typeof vn().refreshAccessToken != "function" ? !1 : vn().refreshAccessToken();
}
async function Ze(e, t = {}) {
  const r = new Headers(t.headers ?? {}), n = Qa();
  return n && r.set("Authorization", `Bearer ${n}`), fetch(e, {
    credentials: "same-origin",
    ...t,
    headers: r
  });
}
async function Qe(e) {
  const t = e.headers.get("content-type") || "";
  if (!t.includes("application/json"))
    throw new Error(`Expected JSON, got: ${t || "unknown"}`);
  return await e.json();
}
async function lt(e) {
  var r;
  if ((e.headers.get("content-type") || "").includes("application/json")) {
    const n = await e.json().catch(() => null), s = (r = n == null ? void 0 : n.error) == null ? void 0 : r.message;
    if (typeof s == "string" && s.trim() !== "")
      return s;
  }
  return `HTTP ${e.status}`;
}
function Nn(e) {
  const t = new URLSearchParams();
  for (const [n, s] of Object.entries(e))
    if (!(s == null || s === "")) {
      if (Array.isArray(s)) {
        for (const i of s)
          i !== "" && t.append(n, i);
        continue;
      }
      t.set(n, String(s));
    }
  const r = t.toString();
  return r === "" ? "" : `?${r}`;
}
async function tl() {
  return el();
}
async function rl(e) {
  const t = await Ze(`${e.replace(/\/$/, "")}/whoami`);
  return t.ok ? Qe(t) : null;
}
async function nl(e, t) {
  const r = await Ze(`${e.replace(/\/$/, "")}/display-mode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ roleId: t })
  });
  if (!r.ok)
    throw new Error(await lt(r));
  return Qe(r);
}
async function sl(e) {
  const t = await Ze(`${e.replace(/\/$/, "")}/users`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
async function il(e, t) {
  const r = await Ze(`${e.replace(/\/$/, "")}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  });
  if (!r.ok)
    throw new Error(await lt(r));
  return Qe(r);
}
async function al(e) {
  const t = await Ze(`${e.replace(/\/$/, "")}/roles`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
async function ll(e, t) {
  const r = await Ze(`${e.replace(/\/$/, "")}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  });
  if (!r.ok)
    throw new Error(await lt(r));
  return Qe(r);
}
async function ol(e) {
  const t = await Ze(`${e.replace(/\/$/, "")}/settings`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
async function Kn(e = {}) {
  const t = await Ze(`/api/products${Nn(e)}`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
async function Jn(e) {
  const t = await Ze(`/api/search${Nn({
    entity: e.entity,
    q: e.q,
    limit: e.limit,
    cursor: e.cursor,
    sort: e.sort
  })}`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
async function Wn(e) {
  const t = await Ze(`/api/facets${Nn({
    entity: e.entity,
    field: e.field,
    q: e.q
  })}`);
  if (!t.ok)
    throw new Error(await lt(t));
  return Qe(t);
}
var ul = /* @__PURE__ */ B('<div class="notice">Loading admin control-plane data…</div>'), fl = /* @__PURE__ */ B('<div data-testid="admin-notice"> </div>'), cl = /* @__PURE__ */ B('<section class="space-y-6"><div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div class="max-w-3xl"><div class="section-label">Tenant Admin</div> <h1 class="mt-4 page-title max-w-[14ch]">Users, roles, and display modes</h1></div> <p class="shell-copy max-w-3xl text-sm leading-7">Tenant admins can provision new identities, define custom roles, switch their effective display mode, and inspect catalog/search contracts without changing the live seam.</p></div> <!> <!> <!></section>');
function ii(e, t) {
  Et(t, !0);
  let r = K(t, "notice", 7), n = K(t, "loading", 7), s = K(t, "children", 7);
  var i = {
    get notice() {
      return r();
    },
    set notice(d) {
      r(d), z();
    },
    get loading() {
      return n();
    },
    set loading(d) {
      n(d), z();
    },
    get children() {
      return s();
    },
    set children(d) {
      s(d), z();
    }
  }, a = cl(), l = E(b(a), 2);
  {
    var o = (d) => {
      var g = ul();
      q(d, g);
    };
    Ke(l, (d) => {
      n() && d(o);
    });
  }
  var u = E(l, 2);
  {
    var c = (d) => {
      var g = fl(), p = b(g, !0);
      y(g), de(() => {
        Hr(g, 1, zr(r().error ? "flash-error" : "notice")), X(p, r().message);
      }), q(d, g);
    };
    Ke(u, (d) => {
      r() && d(c);
    });
  }
  var _ = E(u, 2);
  return Ca(_, () => s() ?? rs), y(a), q(e, a), xt(i);
}
Ut(ii, { notice: {}, loading: {}, children: {} }, [], [], { mode: "open" });
var dl = /* @__PURE__ */ B("<option> </option>"), hl = /* @__PURE__ */ B("<div> </div>"), vl = /* @__PURE__ */ B('<p class="shell-copy">No users provisioned yet.</p>'), _l = /* @__PURE__ */ B('<tr><td><strong> </strong><br/><span class="shell-copy"> </span></td><td> </td><td> </td></tr>'), pl = /* @__PURE__ */ B("<table><thead><tr><th>User</th><th>Role</th><th>Status</th></tr></thead><tbody></tbody></table>"), ml = /* @__PURE__ */ B('<article class="form-card" data-testid="admin-users-panel"><div class="section-label">Create User</div> <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Provision a new login key</h2> <div class="mt-6 grid gap-4 sm:grid-cols-2"><div class="field-stack"><label for="admin-user-username">Username</label> <input id="admin-user-username" type="text" placeholder="member-jane"/></div> <div class="field-stack"><label for="admin-user-name">Display name</label> <input id="admin-user-name" type="text" placeholder="Jane Doe"/></div></div> <div class="mt-4 grid gap-4 sm:grid-cols-2"><div class="field-stack"><label for="admin-user-role">Role</label> <select id="admin-user-role"></select></div> <div class="field-stack"><label for="admin-user-key">Custom login key (optional)</label> <input id="admin-user-key" type="text" placeholder="leave blank to generate"/></div></div> <div class="mt-5 flex flex-wrap items-center gap-3"><button class="pill-button" type="button">Create user</button> <span class="tag"> </span></div> <!> <div class="mt-6" data-testid="admin-users-table"><!></div></article>');
function ai(e, t) {
  Et(t, !0);
  let r = K(t, "roles", 7), n = K(t, "users", 7), s = K(t, "form", 7), i = K(t, "result", 7), a = K(t, "actualRole", 7), l = K(t, "busy", 7), o = K(t, "onSubmit", 7);
  var u = {
    get roles() {
      return r();
    },
    set roles(h) {
      r(h), z();
    },
    get users() {
      return n();
    },
    set users(h) {
      n(h), z();
    },
    get form() {
      return s();
    },
    set form(h) {
      s(h), z();
    },
    get result() {
      return i();
    },
    set result(h) {
      i(h), z();
    },
    get actualRole() {
      return a();
    },
    set actualRole(h) {
      a(h), z();
    },
    get busy() {
      return l();
    },
    set busy(h) {
      l(h), z();
    },
    get onSubmit() {
      return o();
    },
    set onSubmit(h) {
      o(h), z();
    }
  }, c = ml(), _ = E(b(c), 4), d = b(_), g = E(b(d), 2);
  ht(g), y(d);
  var p = E(d, 2), x = E(b(p), 2);
  ht(x), y(p), y(_);
  var v = E(_, 2), $ = b(v), C = E(b($), 2);
  dt(C, 21, () => r().filter((h) => !h.operatorOnly), (h) => h.id, (h, T) => {
    var M = dl(), U = b(M, !0);
    y(M);
    var D = {};
    de(() => {
      X(U, m(T).name), D !== (D = m(T).id) && (M.value = (M.__value = m(T).id) ?? "");
    }), q(h, M);
  }), y(C), y($);
  var w = E($, 2), P = E(b(w), 2);
  ht(P), y(w), y(v);
  var Q = E(v, 2), W = b(Q), V = E(W, 2), le = b(V);
  y(V), y(Q);
  var ie = E(Q, 2);
  {
    var oe = (h) => {
      var T = hl(), M = b(T, !0);
      y(T), de(() => {
        Hr(T, 1, zr(i().error ? "flash-error mt-5" : "notice mt-5")), X(M, i().message);
      }), q(h, T);
    };
    Ke(ie, (h) => {
      i() && h(oe);
    });
  }
  var ce = E(ie, 2), S = b(ce);
  {
    var H = (h) => {
      var T = vl();
      q(h, T);
    }, k = (h) => {
      var T = pl(), M = E(b(T));
      dt(M, 21, n, (U) => U.id, (U, D) => {
        var ne = _l(), ee = b(ne), te = b(ee), Te = b(te, !0);
        y(te);
        var ot = E(te, 2), Ue = b(ot, !0);
        y(ot), y(ee);
        var Be = E(ee), yr = b(Be, !0);
        y(Be);
        var Bt = E(Be), Vr = b(Bt, !0);
        y(Bt), y(ne), de(() => {
          X(Te, m(D).username), X(Ue, m(D).name), X(yr, m(D).roleId), X(Vr, m(D).status);
        }), q(U, ne);
      }), y(M), y(T), q(h, T);
    };
    Ke(S, (h) => {
      n().length === 0 ? h(H) : h(k, -1);
    });
  }
  return y(ce), y(c), de(() => {
    W.disabled = l(), X(le, `Actual role: ${a() ?? ""}`);
  }), vt(g, () => s().username, (h) => s().username = h), vt(x, () => s().name, (h) => s().name = h), ja(C, () => s().roleId, (h) => s().roleId = h), vt(P, () => s().loginKey, (h) => s().loginKey = h), fr("click", W, function(...h) {
    var T;
    (T = o()) == null || T.apply(this, h);
  }), q(e, c), xt(u);
}
Br(["click"]);
Ut(
  ai,
  {
    roles: {},
    users: {},
    form: {},
    result: {},
    actualRole: {},
    busy: {},
    onSubmit: {}
  },
  [],
  [],
  { mode: "open" }
);
var gl = /* @__PURE__ */ B("<div> </div>"), yl = /* @__PURE__ */ B('<p class="shell-copy">No roles found.</p>'), bl = /* @__PURE__ */ B('<tr><td><strong> </strong><br/><span class="shell-copy"> </span></td><td> </td></tr>'), wl = /* @__PURE__ */ B("<table><thead><tr><th>Role</th><th>Entitlements</th></tr></thead><tbody></tbody></table>"), $l = /* @__PURE__ */ B('<article class="form-card" data-testid="admin-roles-panel"><div class="section-label">Create Role</div> <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Add a custom tenant role</h2> <div class="mt-6 grid gap-4 sm:grid-cols-2"><div class="field-stack"><label for="admin-role-id">Role id</label> <input id="admin-role-id" type="text" placeholder="member_auditor"/></div> <div class="field-stack"><label for="admin-role-name">Role name</label> <input id="admin-role-name" type="text" placeholder="Member Auditor"/></div></div> <div class="mt-4 field-stack"><label for="admin-role-description">Description</label> <input id="admin-role-description" type="text" placeholder="Can inspect decoded content and reports"/></div> <div class="mt-4 field-stack"><label for="admin-role-entitlements">Entitlements (comma-separated)</label> <input id="admin-role-entitlements" type="text"/></div> <div class="mt-5 flex flex-wrap gap-3"><button class="pill-button" type="button">Create role</button> <button class="ghost-button" type="button">Refresh tables</button></div> <!> <div class="mt-6" data-testid="admin-roles-table"><!></div></article>');
function li(e, t) {
  Et(t, !0);
  let r = K(t, "roles", 7), n = K(t, "form", 7), s = K(t, "result", 7), i = K(t, "busy", 7), a = K(t, "onSubmit", 7), l = K(t, "onRefresh", 7);
  var o = {
    get roles() {
      return r();
    },
    set roles(S) {
      r(S), z();
    },
    get form() {
      return n();
    },
    set form(S) {
      n(S), z();
    },
    get result() {
      return s();
    },
    set result(S) {
      s(S), z();
    },
    get busy() {
      return i();
    },
    set busy(S) {
      i(S), z();
    },
    get onSubmit() {
      return a();
    },
    set onSubmit(S) {
      a(S), z();
    },
    get onRefresh() {
      return l();
    },
    set onRefresh(S) {
      l(S), z();
    }
  }, u = $l(), c = E(b(u), 4), _ = b(c), d = E(b(_), 2);
  ht(d), y(_);
  var g = E(_, 2), p = E(b(g), 2);
  ht(p), y(g), y(c);
  var x = E(c, 2), v = E(b(x), 2);
  ht(v), y(x);
  var $ = E(x, 2), C = E(b($), 2);
  ht(C), y($);
  var w = E($, 2), P = b(w), Q = E(P, 2);
  y(w);
  var W = E(w, 2);
  {
    var V = (S) => {
      var H = gl(), k = b(H, !0);
      y(H), de(() => {
        Hr(H, 1, zr(s().error ? "flash-error mt-5" : "notice mt-5")), X(k, s().message);
      }), q(S, H);
    };
    Ke(W, (S) => {
      s() && S(V);
    });
  }
  var le = E(W, 2), ie = b(le);
  {
    var oe = (S) => {
      var H = yl();
      q(S, H);
    }, ce = (S) => {
      var H = wl(), k = E(b(H));
      dt(k, 21, r, (h) => h.id, (h, T) => {
        var M = bl(), U = b(M), D = b(U), ne = b(D, !0);
        y(D);
        var ee = E(D, 2), te = b(ee, !0);
        y(ee), y(U);
        var Te = E(U), ot = b(Te, !0);
        y(Te), y(M), de(
          (Ue) => {
            X(ne, m(T).name), X(te, m(T).id), X(ot, Ue);
          },
          [() => m(T).entitlements.join(", ")]
        ), q(h, M);
      }), y(k), y(H), q(S, H);
    };
    Ke(ie, (S) => {
      r().length === 0 ? S(oe) : S(ce, -1);
    });
  }
  return y(le), y(u), de(() => P.disabled = i()), vt(d, () => n().id, (S) => n().id = S), vt(p, () => n().name, (S) => n().name = S), vt(v, () => n().description, (S) => n().description = S), vt(C, () => n().entitlements, (S) => n().entitlements = S), fr("click", P, function(...S) {
    var H;
    (H = a()) == null || H.apply(this, S);
  }), fr("click", Q, function(...S) {
    var H;
    (H = l()) == null || H.apply(this, S);
  }), q(e, u), xt(o);
}
Br(["click"]);
Ut(
  li,
  {
    roles: {},
    form: {},
    result: {},
    busy: {},
    onSubmit: {},
    onRefresh: {}
  },
  [],
  [],
  { mode: "open" }
);
var El = /* @__PURE__ */ B('<button type="button"> </button>'), xl = /* @__PURE__ */ B('<div class="mt-5 shell-copy">Actual role remains <strong> </strong>. Effective mode is <strong> </strong>.</div>'), Sl = /* @__PURE__ */ B('<article class="table-card" data-testid="admin-display-mode-panel"><div class="section-label">Display Mode</div> <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Impersonation-safe role switch</h2> <div class="mt-5 flex flex-wrap gap-3"></div> <!></article>');
function oi(e, t) {
  Et(t, !0);
  let r = K(t, "user", 7), n = K(t, "busy", 7), s = K(t, "onChange", 7);
  var i = {
    get user() {
      return r();
    },
    set user(c) {
      r(c), z();
    },
    get busy() {
      return n();
    },
    set busy(c) {
      n(c), z();
    },
    get onChange() {
      return s();
    },
    set onChange(c) {
      s(c), z();
    }
  }, a = Sl(), l = E(b(a), 4);
  dt(l, 20, () => {
    var c;
    return ((c = r()) == null ? void 0 : c.availableDisplayModes) ?? [];
  }, (c) => c, (c, _) => {
    var d = El(), g = b(d, !0);
    y(d), de(() => {
      var p;
      Hr(d, 1, zr(_ === ((p = r()) == null ? void 0 : p.role) ? "pill-button" : "ghost-button")), d.disabled = n(), X(g, _);
    }), fr("click", d, () => s()(_)), q(c, d);
  }), y(l);
  var o = E(l, 2);
  {
    var u = (c) => {
      var _ = xl(), d = E(b(_)), g = b(d, !0);
      y(d);
      var p = E(d, 2), x = b(p, !0);
      y(p), as(), y(_), de(() => {
        X(g, r().actualRole), X(x, r().role);
      }), q(c, _);
    };
    Ke(o, (c) => {
      r() && c(u);
    });
  }
  return y(a), q(e, a), xt(i);
}
Br(["click"]);
Ut(oi, { user: {}, busy: {}, onChange: {} }, [], [], { mode: "open" });
var kl = /* @__PURE__ */ B('<article class="table-card" data-testid="admin-settings-panel"><div class="section-label">Tenant Settings</div> <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">UI and explorer policy</h2> <div class="mt-5"><pre> </pre></div></article>');
function ui(e, t) {
  Et(t, !0);
  let r = K(t, "settings", 7);
  var n = {
    get settings() {
      return r();
    },
    set settings(o) {
      r(o), z();
    }
  }, s = kl(), i = E(b(s), 4), a = b(i), l = b(a, !0);
  return y(a), y(i), y(s), de((o) => X(l, o), [() => JSON.stringify(r() ?? {}, null, 2)]), q(e, s), xt(n);
}
Ut(ui, { settings: {} }, [], [], { mode: "open" });
var Tl = /* @__PURE__ */ B('<p class="shell-copy">No products indexed yet.</p>'), Rl = /* @__PURE__ */ B('<li><strong> </strong> <div class="shell-copy text-sm"> </div></li>'), Al = /* @__PURE__ */ B('<ul class="space-y-3"></ul>'), Nl = /* @__PURE__ */ B('<p class="shell-copy">No matching product results.</p>'), Cl = /* @__PURE__ */ B('<li><strong> </strong> <div class="shell-copy text-sm"> </div></li>'), Ol = /* @__PURE__ */ B('<ul class="space-y-3"></ul>'), Il = /* @__PURE__ */ B('<p class="shell-copy">No product facets available.</p>'), Pl = /* @__PURE__ */ B('<li class="shell-copy text-sm"> </li>'), Ml = /* @__PURE__ */ B('<div class="mb-4"><div class="text-xs font-bold uppercase tracking-[0.12em] text-[var(--shell-muted)]"> </div> <ul class="mt-2 space-y-2"></ul></div>'), Dl = /* @__PURE__ */ B('<article class="table-card" data-testid="admin-catalog-panel"><div class="section-label">Catalog</div> <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Products, search, and facets</h2> <div class="mt-5 flex flex-wrap gap-3"><input class="min-w-[16rem] rounded-[16px] border border-[var(--shell-border)] bg-[var(--shell-surface)] px-4 py-3" type="search" placeholder="Search products"/> <button class="pill-button" type="button">Run search</button></div> <div class="mt-6 grid gap-6 xl:grid-cols-3"><section><div class="section-label">Products</div> <div class="mt-3" data-testid="admin-products-list"><!></div></section> <section><div class="section-label">Search</div> <div class="mt-3" data-testid="admin-search-results"><!></div></section> <section><div class="section-label">Facets</div> <div class="mt-3" data-testid="admin-facets"><!></div></section></div></article>');
function fi(e, t) {
  Et(t, !0);
  let r = K(t, "query", 15), n = K(t, "loading", 7), s = K(t, "products", 7), i = K(t, "searchResults", 7), a = K(t, "facets", 7), l = K(t, "onSearch", 7);
  var o = {
    get query() {
      return r();
    },
    set query(k) {
      r(k), z();
    },
    get loading() {
      return n();
    },
    set loading(k) {
      n(k), z();
    },
    get products() {
      return s();
    },
    set products(k) {
      s(k), z();
    },
    get searchResults() {
      return i();
    },
    set searchResults(k) {
      i(k), z();
    },
    get facets() {
      return a();
    },
    set facets(k) {
      a(k), z();
    },
    get onSearch() {
      return l();
    },
    set onSearch(k) {
      l(k), z();
    }
  }, u = Dl(), c = E(b(u), 4), _ = b(c);
  ht(_);
  var d = E(_, 2);
  y(c);
  var g = E(c, 2), p = b(g), x = E(b(p), 2), v = b(x);
  {
    var $ = (k) => {
      var h = Tl();
      q(k, h);
    }, C = (k) => {
      var h = Al();
      dt(h, 21, s, (T) => T.id, (T, M) => {
        var U = Rl(), D = b(U), ne = b(D, !0);
        y(D);
        var ee = E(D, 2), te = b(ee);
        y(ee), y(U), de(() => {
          X(ne, m(M).name), X(te, `${m(M).sku ?? ""} · ${m(M).category ?? "uncategorized" ?? ""}`);
        }), q(T, U);
      }), y(h), q(k, h);
    };
    Ke(v, (k) => {
      s().length === 0 ? k($) : k(C, -1);
    });
  }
  y(x), y(p);
  var w = E(p, 2), P = E(b(w), 2), Q = b(P);
  {
    var W = (k) => {
      var h = Nl();
      q(k, h);
    }, V = (k) => {
      var h = Ol();
      dt(h, 21, i, (T) => T.id, (T, M) => {
        var U = Cl(), D = b(U), ne = b(D, !0);
        y(D);
        var ee = E(D, 2), te = b(ee, !0);
        y(ee), y(U), de(() => {
          X(ne, m(M).summary.name ?? m(M).id), X(te, m(M).summary.sku ?? m(M).id);
        }), q(T, U);
      }), y(h), q(k, h);
    };
    Ke(Q, (k) => {
      i().length === 0 ? k(W) : k(V, -1);
    });
  }
  y(P), y(w);
  var le = E(w, 2), ie = E(b(le), 2), oe = b(ie);
  {
    var ce = (k) => {
      var h = Il();
      q(k, h);
    }, S = /* @__PURE__ */ on(() => Object.keys(a()).length === 0), H = (k) => {
      var h = ka(), T = Is(h);
      dt(T, 17, () => Object.entries(a()), ([M, U]) => M, (M, U) => {
        var D = /* @__PURE__ */ on(() => Ai(m(U), 2));
        let ne = () => m(D)[0], ee = () => m(D)[1];
        var te = Ml(), Te = b(te), ot = b(Te, !0);
        y(Te);
        var Ue = E(Te, 2);
        dt(Ue, 21, ee, (Be) => `${ne()}:${Be.value}`, (Be, yr) => {
          var Bt = Pl(), Vr = b(Bt);
          y(Bt), de(() => X(Vr, `${m(yr).label ?? ""} (${m(yr).count ?? ""})`)), q(Be, Bt);
        }), y(Ue), y(te), de(() => X(ot, ne())), q(M, te);
      }), q(k, h);
    };
    Ke(oe, (k) => {
      m(S) ? k(ce) : k(H, -1);
    });
  }
  return y(ie), y(le), y(g), y(u), de(() => d.disabled = n()), vt(_, r), fr("click", d, function(...k) {
    var h;
    (h = l()) == null || h.apply(this, k);
  }), q(e, u), xt(o);
}
Br(["click"]);
Ut(
  fi,
  {
    query: {},
    loading: {},
    products: {},
    searchResults: {},
    facets: {},
    onSearch: {}
  },
  [],
  [],
  { mode: "open" }
);
var Ll = /* @__PURE__ */ B('<div class="grid gap-6 xl:grid-cols-2"><!> <!></div> <div class="grid gap-6 xl:grid-cols-2"><!> <!></div> <!>', 1);
const Fl = {
  hash: "svelte-vg7d0z",
  code: `:host {display:block;font-family:'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;color:var(--text, #eef4df);--shell-panel: rgba(18, 28, 15, 0.92);--shell-surface: rgba(12, 19, 10, 0.84);--shell-border: rgba(198, 255, 0, 0.16);--shell-text: #eef4df;--shell-muted: #a2b392;--shell-primary: #c6ff00;--shell-primary-text: #11210c;}:host([theme='light']) {color:#24311b;--shell-panel: rgba(255, 255, 255, 0.92);--shell-surface: rgba(245, 248, 238, 0.96);--shell-border: rgba(116, 145, 45, 0.18);--shell-text: #24311b;--shell-muted: #5f7050;--shell-primary: #c6ff00;--shell-primary-text: #13210f;}:host {--text: var(--shell-text);}:host .form-card,
  :host .table-card {background:var(--shell-panel);border:1px solid var(--shell-border);border-radius:24px;padding:1.5rem;}:host .section-label {color:var(--shell-primary);font-size:0.78rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;}:host .page-title {font-size:clamp(1.6rem, 2.8vw, 2.5rem);font-weight:900;line-height:1;letter-spacing:-0.04em;}:host .shell-copy {color:var(--shell-muted);}:host .field-stack {display:flex;flex-direction:column;gap:0.45rem;}:host label {font-size:0.8rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--shell-muted);}:host input,
  :host select {width:100%;border:1px solid var(--shell-border);border-radius:16px;background:var(--shell-surface);color:var(--shell-text);padding:0.85rem 1rem;box-sizing:border-box;}:host pre {background:var(--shell-surface);border:1px solid var(--shell-border);border-radius:16px;padding:1rem;overflow:auto;}:host table {width:100%;border-collapse:collapse;}:host th,
  :host td {padding:0.75rem;border-top:1px solid var(--shell-border);text-align:left;vertical-align:top;}:host .pill-button,
  :host .ghost-button {border-radius:999px;padding:0.8rem 1.1rem;border:1px solid var(--shell-border);cursor:pointer;font-weight:700;}:host .pill-button {background:var(--shell-primary);color:var(--shell-primary-text);}:host .ghost-button {background:transparent;color:var(--shell-muted);}:host .notice,
  :host .flash-error {border-radius:16px;padding:0.9rem 1rem;}:host .notice {background:rgba(198, 255, 0, 0.1);border:1px solid var(--shell-border);}:host .flash-error {background:rgba(255, 123, 139, 0.12);border:1px solid rgba(255, 123, 139, 0.28);}:host .tag {display:inline-flex;align-items:center;padding:0.28rem 0.7rem;border-radius:999px;border:1px solid var(--shell-border);background:var(--shell-surface);font-size:0.8rem;}`
};
function ql(e, t) {
  Et(t, !0), Da(e, Fl);
  const r = Wa("admin"), n = r.apiBase ?? "/api/admin", s = r.authBase ?? "/api/auth", i = t.$$host;
  let a = /* @__PURE__ */ Y(me(r.user ?? null)), l = /* @__PURE__ */ Y(me([])), o = /* @__PURE__ */ Y(me([])), u = /* @__PURE__ */ Y(null), c = /* @__PURE__ */ Y(me([])), _ = /* @__PURE__ */ Y(me([])), d = /* @__PURE__ */ Y(me({})), g = /* @__PURE__ */ Y(null), p = /* @__PURE__ */ Y(!0), x = /* @__PURE__ */ Y(!1), v = /* @__PURE__ */ Y(!1), $ = /* @__PURE__ */ Y(!1), C = /* @__PURE__ */ Y(!1), w = /* @__PURE__ */ Y(me({ username: "", name: "", roleId: "", loginKey: "" })), P = /* @__PURE__ */ Y(me({
    id: "",
    name: "",
    description: "",
    entitlements: "NATURAL_VIEW"
  })), Q = /* @__PURE__ */ Y(null), W = /* @__PURE__ */ Y(null), V = /* @__PURE__ */ Y("");
  function le(h) {
    i.setAttribute("theme", h);
  }
  async function ie() {
    const [
      h,
      T,
      M,
      U,
      D,
      ne,
      ee
    ] = await Promise.all([
      rl(s),
      sl(n),
      al(n),
      ol(n),
      Kn({ limit: 10 }),
      Jn({ entity: "products", q: m(V), limit: 10 }),
      Wn({
        entity: "products",
        field: ["category", "brand", "status"],
        q: m(V)
      })
    ]);
    if (N(a, h, !0), N(l, T.results, !0), N(o, M.results, !0), N(u, U.result, !0), N(c, D.results, !0), N(_, ne.results, !0), N(d, ee.results, !0), !m(w).roleId) {
      const te = m(o).find((Te) => !Te.operatorOnly);
      m(w).roleId = (te == null ? void 0 : te.id) ?? "";
    }
  }
  async function oe() {
    N(p, !0), N(g, null);
    try {
      if (!await tl()) {
        N(
          g,
          {
            message: "Sign in is required before the admin control plane can load.",
            error: !0
          },
          !0
        );
        return;
      }
      await ie();
    } catch (h) {
      N(
        g,
        {
          message: h instanceof Error ? h.message : "Failed to load admin control-plane data.",
          error: !0
        },
        !0
      );
    } finally {
      N(p, !1);
    }
  }
  async function ce() {
    N(x, !0), N(Q, null);
    try {
      const h = await il(n, {
        username: m(w).username,
        name: m(w).name,
        roleId: m(w).roleId,
        ...m(w).loginKey.trim() !== "" ? { loginKey: m(w).loginKey.trim() } : {}
      });
      N(
        Q,
        {
          message: `Created ${h.user.username}. Login key: ${h.loginKey}`,
          error: !1
        },
        !0
      ), m(w).username = "", m(w).name = "", m(w).loginKey = "", await oe();
    } catch (h) {
      N(
        Q,
        {
          message: h instanceof Error ? h.message : "Unable to create user",
          error: !0
        },
        !0
      );
    } finally {
      N(x, !1);
    }
  }
  async function S() {
    N(v, !0), N(W, null);
    try {
      const h = await ll(n, {
        id: m(P).id,
        name: m(P).name,
        description: m(P).description,
        entitlements: m(P).entitlements.split(",").map((T) => T.trim()).filter(Boolean)
      });
      N(W, { message: `Created role ${h.result.id}`, error: !1 }, !0), m(P).id = "", m(P).name = "", m(P).description = "", m(P).entitlements = "NATURAL_VIEW", await oe();
    } catch (h) {
      N(
        W,
        {
          message: h instanceof Error ? h.message : "Unable to create role",
          error: !0
        },
        !0
      );
    } finally {
      N(v, !1);
    }
  }
  async function H(h) {
    N($, !0), N(g, null);
    try {
      await nl(s, h), window.location.reload();
    } catch (T) {
      N(
        g,
        {
          message: T instanceof Error ? T.message : "Unable to switch display mode",
          error: !0
        },
        !0
      );
    } finally {
      N($, !1);
    }
  }
  async function k() {
    N(C, !0);
    try {
      const [h, T, M] = await Promise.all([
        Kn({ limit: 10 }),
        Jn({ entity: "products", q: m(V), limit: 10 }),
        Wn({
          entity: "products",
          field: ["category", "brand", "status"],
          q: m(V)
        })
      ]);
      N(c, h.results, !0), N(_, T.results, !0), N(d, M.results, !0);
    } catch (h) {
      N(
        g,
        {
          message: h instanceof Error ? h.message : "Unable to load catalog/search data",
          error: !0
        },
        !0
      );
    } finally {
      N(C, !1);
    }
  }
  Oa(() => {
    le(Xa());
    const h = Za((T) => {
      le(T);
    });
    return oe(), () => {
      h();
    };
  }), ii(e, {
    get notice() {
      return m(g);
    },
    get loading() {
      return m(p);
    },
    children: (h, T) => {
      var M = Ll(), U = Is(M), D = b(U);
      {
        let Ue = /* @__PURE__ */ on(() => {
          var Be;
          return ((Be = m(a)) == null ? void 0 : Be.actualRole) ?? "unknown";
        });
        ai(D, {
          get roles() {
            return m(o);
          },
          get users() {
            return m(l);
          },
          get form() {
            return m(w);
          },
          get result() {
            return m(Q);
          },
          get actualRole() {
            return m(Ue);
          },
          get busy() {
            return m(x);
          },
          onSubmit: () => void ce()
        });
      }
      var ne = E(D, 2);
      li(ne, {
        get roles() {
          return m(o);
        },
        get form() {
          return m(P);
        },
        get result() {
          return m(W);
        },
        get busy() {
          return m(v);
        },
        onSubmit: () => void S(),
        onRefresh: () => void oe()
      }), y(U);
      var ee = E(U, 2), te = b(ee);
      oi(te, {
        get user() {
          return m(a);
        },
        get busy() {
          return m($);
        },
        onChange: (Ue) => void H(Ue)
      });
      var Te = E(te, 2);
      ui(Te, {
        get settings() {
          return m(u);
        }
      }), y(ee);
      var ot = E(ee, 2);
      fi(ot, {
        query: m(V),
        get loading() {
          return m(C);
        },
        get products() {
          return m(c);
        },
        get searchResults() {
          return m(_);
        },
        get facets() {
          return m(d);
        },
        onSearch: () => void k()
      }), q(h, M);
    },
    $$slots: { default: !0 }
  }), xt();
}
customElements.define("efsdb-admin", Ut(ql, {}, [], [], { mode: "open" }));
