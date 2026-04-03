var hs = Object.defineProperty;
var Tn = (e) => {
  throw TypeError(e);
};
var ps = (e, t, r) => t in e ? hs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var N = (e, t, r) => ps(e, typeof t != "symbol" ? t + "" : t, r), Ir = (e, t, r) => t.has(e) || Tn("Cannot " + r);
var c = (e, t, r) => (Ir(e, t, "read from private field"), r ? r.call(e) : t.get(e)), x = (e, t, r) => t.has(e) ? Tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (Ir(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), D = (e, t, r) => (Ir(e, t, "access private method"), r);
var Zn;
typeof window < "u" && ((Zn = window.__svelte ?? (window.__svelte = {})).v ?? (Zn.v = /* @__PURE__ */ new Set())).add("5");
const gs = 1, ms = 2, vs = 16, ws = 1, bs = 4, ys = 8, _s = 16, ks = 2, Qn = "[", sn = "[!", Rn = "[?", an = "]", At = {}, F = Symbol(), eo = "http://www.w3.org/1999/xhtml", Ms = !1;
var to = Array.isArray, Ss = Array.prototype.indexOf, It = Array.prototype.includes, kr = Array.from, pr = Object.keys, gr = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, $s = Object.getOwnPropertyDescriptors, xs = Object.prototype, Es = Array.prototype, ro = Object.getPrototypeOf, Pn = Object.isExtensible;
const Ts = () => {
};
function Rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function no() {
  var e, t, r = new Promise((n, o) => {
    e = n, t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
const G = 2, Ot = 4, Mr = 8, oo = 1 << 24, et = 16, Se = 32, Ke = 64, Fr = 128, ue = 512, V = 1024, j = 2048, Pe = 4096, ie = 8192, he = 16384, tt = 32768, An = 1 << 25, zt = 65536, In = 1 << 17, Ps = 1 << 18, vt = 1 << 19, As = 1 << 20, Ve = 1 << 25, gt = 65536, Hr = 1 << 21, ln = 1 << 22, qe = 1 << 23, lr = Symbol("$state"), so = Symbol("legacy props"), Is = Symbol(""), Ce = new class extends Error {
  constructor() {
    super(...arguments);
    N(this, "name", "StaleReactionError");
    N(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Kn;
const Os = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Kn = globalThis.document) != null && Kn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Sr = 3, rr = 8;
function zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Cs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ds(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ns() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ws() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Us() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ys() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function $r(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function js() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let O = !1;
function Ge(e) {
  O = e;
}
let P;
function Q(e) {
  if (e === null)
    throw $r(), At;
  return P = e;
}
function xr() {
  return Q(/* @__PURE__ */ Ie(P));
}
function Vt(e) {
  if (O) {
    if (/* @__PURE__ */ Ie(P) !== null)
      throw $r(), At;
    P = e;
  }
}
function Xs(e = 1) {
  if (O) {
    for (var t = e, r = P; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r);
    P = r;
  }
}
function mr(e = !0) {
  for (var t = 0, r = P; ; ) {
    if (r.nodeType === rr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === an) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Qn || n === sn || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    );
    e && r.remove(), r = o;
  }
}
function io(e) {
  if (!e || e.nodeType !== rr)
    throw $r(), At;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ao(e) {
  return e === this.v;
}
function qs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function lo(e) {
  return !qs(e, this.v);
}
let Zs = !1, ae = null;
function Ct(e) {
  ae = e;
}
function dn(e, t = !1, r) {
  ae = {
    p: ae,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      I
    ),
    l: null
  };
}
function cn(e) {
  var t = (
    /** @type {ComponentContext} */
    ae
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Do(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ae = t.p, e ?? /** @type {T} */
  {};
}
function co() {
  return !0;
}
let ot = [];
function fo() {
  var e = ot;
  ot = [], Rs(e);
}
function ut(e) {
  if (ot.length === 0 && !Ht) {
    var t = ot;
    queueMicrotask(() => {
      t === ot && fo();
    });
  }
  ot.push(e);
}
function Ks() {
  for (; ot.length > 0; )
    fo();
}
function uo(e) {
  var t = I;
  if (t === null)
    return E.f |= qe, e;
  if ((t.f & tt) === 0 && (t.f & Ot) === 0)
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fr) !== 0) {
      if ((t.f & tt) === 0)
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
const Js = -7169;
function W(e, t) {
  e.f = e.f & Js | t;
}
function fn(e) {
  (e.f & ue) !== 0 || e.deps === null ? W(e, V) : W(e, Pe);
}
function ho(e) {
  if (e !== null)
    for (const t of e)
      (t.f & G) === 0 || (t.f & gt) === 0 || (t.f ^= gt, ho(
        /** @type {Derived} */
        t.deps
      ));
}
function po(e, t, r) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & Pe) !== 0 && r.add(e), ho(e.deps), W(e, V);
}
let sr = !1;
function Qs(e) {
  var t = sr;
  try {
    return sr = !1, [e(), sr];
  } finally {
    sr = t;
  }
}
const rt = /* @__PURE__ */ new Set();
let R = null, H = null, Ur = null, Ht = !1, Or = !1, Mt = null, dr = null;
var On = 0;
let ei = 1;
var $t, xt, Et, Tt, Zt, re, at, Le, De, Rt, X, Yr, jr, Xr, qr, go;
const br = class br {
  constructor() {
    x(this, X);
    // for debugging. TODO remove once async is stable
    N(this, "id", ei++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    N(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    N(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, $t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    x(this, Et, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    x(this, Tt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, Zt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    x(this, re, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    x(this, at, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    x(this, Le, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    x(this, De, /* @__PURE__ */ new Map());
    N(this, "is_fork", !1);
    x(this, Rt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    c(this, De).has(t) || c(this, De).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = c(this, De).get(t);
    if (r) {
      c(this, De).delete(t);
      for (var n of r.d)
        W(n, j), this.schedule(n);
      for (n of r.m)
        W(n, Pe), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== F && !this.previous.has(t) && this.previous.set(t, r), (t.f & qe) === 0 && (this.current.set(t, t.v), H == null || H.set(t, t.v));
  }
  activate() {
    R = this;
  }
  deactivate() {
    R = null, H = null;
  }
  flush() {
    try {
      Or = !0, R = this, D(this, X, jr).call(this);
    } finally {
      On = 0, Ur = null, Mt = null, dr = null, Or = !1, R = null, H = null, Ze.clear();
    }
  }
  discard() {
    for (const t of c(this, xt)) t(this);
    c(this, xt).clear(), rt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    M(this, Et, c(this, Et) + 1), t && M(this, Tt, c(this, Tt) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    M(this, Et, c(this, Et) - 1), t && M(this, Tt, c(this, Tt) - 1), !(c(this, Rt) || r) && (M(this, Rt, !0), ut(() => {
      M(this, Rt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      c(this, at).add(n);
    for (const n of r)
      c(this, Le).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    c(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    c(this, xt).add(t);
  }
  settled() {
    return (c(this, Zt) ?? M(this, Zt, no())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new br();
      Or || (rt.add(R), Ht || ut(() => {
        R === t && t.flush();
      }));
    }
    return R;
  }
  apply() {
    {
      H = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var o;
    if (Ur = t, (o = t.b) != null && o.is_pending && (t.f & (Ot | Mr | oo)) !== 0 && (t.f & tt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Mt !== null && r === I && (E === null || (E.f & G) === 0))
        return;
      if ((n & (Ke | Se)) !== 0) {
        if ((n & V) === 0)
          return;
        r.f ^= V;
      }
    }
    c(this, re).push(r);
  }
};
$t = new WeakMap(), xt = new WeakMap(), Et = new WeakMap(), Tt = new WeakMap(), Zt = new WeakMap(), re = new WeakMap(), at = new WeakMap(), Le = new WeakMap(), De = new WeakMap(), Rt = new WeakMap(), X = new WeakSet(), Yr = function() {
  return this.is_fork || c(this, Tt) > 0;
}, jr = function() {
  var i, d;
  if (On++ > 1e3 && (rt.delete(this), ti()), !D(this, X, Yr).call(this)) {
    for (const l of c(this, at))
      c(this, Le).delete(l), W(l, j), this.schedule(l);
    for (const l of c(this, Le))
      W(l, Pe), this.schedule(l);
  }
  const t = c(this, re);
  M(this, re, []), this.apply();
  var r = Mt = [], n = [], o = dr = [];
  for (const l of t)
    try {
      D(this, X, Xr).call(this, l, r, n);
    } catch (f) {
      throw bo(l), f;
    }
  if (R = null, o.length > 0) {
    var s = br.ensure();
    for (const l of o)
      s.schedule(l);
  }
  if (Mt = null, dr = null, D(this, X, Yr).call(this)) {
    D(this, X, qr).call(this, n), D(this, X, qr).call(this, r);
    for (const [l, f] of c(this, De))
      wo(l, f);
  } else {
    c(this, Et) === 0 && rt.delete(this), c(this, at).clear(), c(this, Le).clear();
    for (const l of c(this, $t)) l(this);
    c(this, $t).clear(), zn(n), zn(r), (i = c(this, Zt)) == null || i.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    R
  );
  if (c(this, re).length > 0) {
    const l = a ?? (a = this);
    c(l, re).push(...c(this, re).filter((f) => !c(l, re).includes(f)));
  }
  a !== null && (rt.add(a), D(d = a, X, jr).call(d)), rt.has(this) || D(this, X, go).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Xr = function(t, r, n) {
  t.f ^= V;
  for (var o = t.first; o !== null; ) {
    var s = o.f, a = (s & (Se | Ke)) !== 0, i = a && (s & V) !== 0, d = i || (s & ie) !== 0 || c(this, De).has(o);
    if (!d && o.fn !== null) {
      a ? o.f ^= V : (s & Ot) !== 0 ? r.push(o) : nr(o) && ((s & et) !== 0 && c(this, Le).add(o), Nt(o));
      var l = o.first;
      if (l !== null) {
        o = l;
        continue;
      }
    }
    for (; o !== null; ) {
      var f = o.next;
      if (f !== null) {
        o = f;
        break;
      }
      o = o.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
qr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    po(t[r], c(this, at), c(this, Le));
}, go = function() {
  var d;
  for (const l of rt) {
    var t = l.id < this.id, r = [];
    for (const [f, p] of this.current) {
      if (l.current.has(f))
        if (t && p !== l.current.get(f))
          l.current.set(f, p);
        else
          continue;
      r.push(f);
    }
    var n = [...l.current.keys()].filter((f) => !this.current.has(f));
    if (n.length === 0)
      t && l.discard();
    else if (r.length > 0) {
      l.activate();
      var o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var a of r)
        mo(a, n, o, s);
      if (c(l, re).length > 0) {
        l.apply();
        for (var i of c(l, re))
          D(d = l, X, Xr).call(d, i, [], []);
        M(l, re, []);
      }
      l.deactivate();
    }
  }
};
let Je = br;
function nt(e) {
  var t = Ht;
  Ht = !0;
  try {
    for (var r; ; ) {
      if (Ks(), R === null)
        return (
          /** @type {T} */
          r
        );
      R.flush();
    }
  } finally {
    Ht = t;
  }
}
function ti() {
  try {
    Ws();
  } catch (e) {
    Xe(e, Ur);
  }
}
let ye = null;
function zn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (he | ie)) === 0 && nr(n) && (ye = /* @__PURE__ */ new Set(), Nt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Wo(n), (ye == null ? void 0 : ye.size) > 0)) {
        Ze.clear();
        for (const o of ye) {
          if ((o.f & (he | ie)) !== 0) continue;
          const s = [o];
          let a = o.parent;
          for (; a !== null; )
            ye.has(a) && (ye.delete(a), s.push(a)), a = a.parent;
          for (let i = s.length - 1; i >= 0; i--) {
            const d = s[i];
            (d.f & (he | ie)) === 0 && Nt(d);
          }
        }
        ye.clear();
      }
    }
    ye = null;
  }
}
function mo(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const s = o.f;
      (s & G) !== 0 ? mo(
        /** @type {Derived} */
        o,
        t,
        r,
        n
      ) : (s & (ln | et)) !== 0 && (s & j) === 0 && vo(o, t, n) && (W(o, j), un(
        /** @type {Effect} */
        o
      ));
    }
}
function vo(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (It.call(t, o))
        return !0;
      if ((o.f & G) !== 0 && vo(
        /** @type {Derived} */
        o,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function un(e) {
  R.schedule(e);
}
function wo(e, t) {
  if (!((e.f & Se) !== 0 && (e.f & V) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & Pe) !== 0 && t.m.push(e), W(e, V);
    for (var r = e.first; r !== null; )
      wo(r, t), r = r.next;
  }
}
function bo(e) {
  W(e, V);
  for (var t = e.first; t !== null; )
    bo(t), t = t.next;
}
function ri(e) {
  let t = 0, r = mt(0), n;
  return () => {
    vn() && (g(r), No(() => (t === 0 && (n = kn(() => e(() => Ut(r)))), t += 1, () => {
      ut(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Ut(r));
      });
    })));
  };
}
var ni = zt | vt;
function oi(e, t, r, n) {
  new si(e, t, r, n);
}
var ne, Kt, xe, lt, K, Ee, oe, _e, Ne, dt, je, Pt, Jt, Qt, Be, yr, B, yo, _o, ko, Zr, cr, fr, Kr;
class si {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, o) {
    x(this, B);
    /** @type {Boundary | null} */
    N(this, "parent");
    N(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    N(this, "transform_error");
    /** @type {TemplateNode} */
    x(this, ne);
    /** @type {TemplateNode | null} */
    x(this, Kt, O ? P : null);
    /** @type {BoundaryProps} */
    x(this, xe);
    /** @type {((anchor: Node) => void)} */
    x(this, lt);
    /** @type {Effect} */
    x(this, K);
    /** @type {Effect | null} */
    x(this, Ee, null);
    /** @type {Effect | null} */
    x(this, oe, null);
    /** @type {Effect | null} */
    x(this, _e, null);
    /** @type {DocumentFragment | null} */
    x(this, Ne, null);
    x(this, dt, 0);
    x(this, je, 0);
    x(this, Pt, !1);
    /** @type {Set<Effect>} */
    x(this, Jt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    x(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, Be, null);
    x(this, yr, ri(() => (M(this, Be, mt(c(this, dt))), () => {
      M(this, Be, null);
    })));
    var s;
    M(this, ne, t), M(this, xe, r), M(this, lt, (a) => {
      var i = (
        /** @type {Effect} */
        I
      );
      i.b = this, i.f |= Fr, n(a);
    }), this.parent = /** @type {Effect} */
    I.b, this.transform_error = o ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), M(this, K, wn(() => {
      if (O) {
        const a = (
          /** @type {Comment} */
          c(this, Kt)
        );
        xr();
        const i = a.data === sn;
        if (a.data.startsWith(Rn)) {
          const l = JSON.parse(a.data.slice(Rn.length));
          D(this, B, _o).call(this, l);
        } else i ? D(this, B, ko).call(this) : D(this, B, yo).call(this);
      } else
        D(this, B, Zr).call(this);
    }, ni)), O && M(this, ne, P);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    po(t, c(this, Jt), c(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!c(this, xe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    D(this, B, Kr).call(this, t, r), M(this, dt, c(this, dt) + t), !(!c(this, Be) || c(this, Pt)) && (M(this, Pt, !0), ut(() => {
      M(this, Pt, !1), c(this, Be) && Lt(c(this, Be), c(this, dt));
    }));
  }
  get_effect_pending() {
    return c(this, yr).call(this), g(
      /** @type {Source<number>} */
      c(this, Be)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = c(this, xe).onerror;
    let n = c(this, xe).failed;
    if (!r && !n)
      throw t;
    c(this, Ee) && (Z(c(this, Ee)), M(this, Ee, null)), c(this, oe) && (Z(c(this, oe)), M(this, oe, null)), c(this, _e) && (Z(c(this, _e)), M(this, _e, null)), O && (Q(
      /** @type {TemplateNode} */
      c(this, Kt)
    ), Xs(), Q(mr()));
    var o = !1, s = !1;
    const a = () => {
      if (o) {
        js();
        return;
      }
      o = !0, s && Ys(), c(this, _e) !== null && ht(c(this, _e), () => {
        M(this, _e, null);
      }), D(this, B, fr).call(this, () => {
        D(this, B, Zr).call(this);
      });
    }, i = (d) => {
      try {
        s = !0, r == null || r(d, a), s = !1;
      } catch (l) {
        Xe(l, c(this, K) && c(this, K).parent);
      }
      n && M(this, _e, D(this, B, fr).call(this, () => {
        try {
          return fe(() => {
            var l = (
              /** @type {Effect} */
              I
            );
            l.b = this, l.f |= Fr, n(
              c(this, ne),
              () => d,
              () => a
            );
          });
        } catch (l) {
          return Xe(
            l,
            /** @type {Effect} */
            c(this, K).parent
          ), null;
        }
      }));
    };
    ut(() => {
      var d;
      try {
        d = this.transform_error(t);
      } catch (l) {
        Xe(l, c(this, K) && c(this, K).parent);
        return;
      }
      d !== null && typeof d == "object" && typeof /** @type {any} */
      d.then == "function" ? d.then(
        i,
        /** @param {unknown} e */
        (l) => Xe(l, c(this, K) && c(this, K).parent)
      ) : i(d);
    });
  }
}
ne = new WeakMap(), Kt = new WeakMap(), xe = new WeakMap(), lt = new WeakMap(), K = new WeakMap(), Ee = new WeakMap(), oe = new WeakMap(), _e = new WeakMap(), Ne = new WeakMap(), dt = new WeakMap(), je = new WeakMap(), Pt = new WeakMap(), Jt = new WeakMap(), Qt = new WeakMap(), Be = new WeakMap(), yr = new WeakMap(), B = new WeakSet(), yo = function() {
  try {
    M(this, Ee, fe(() => c(this, lt).call(this, c(this, ne))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
_o = function(t) {
  const r = c(this, xe).failed;
  r && M(this, _e, fe(() => {
    r(
      c(this, ne),
      () => t,
      () => () => {
      }
    );
  }));
}, ko = function() {
  const t = c(this, xe).pending;
  t && (this.is_pending = !0, M(this, oe, fe(() => t(c(this, ne)))), ut(() => {
    var r = M(this, Ne, document.createDocumentFragment()), n = pe();
    r.append(n), M(this, Ee, D(this, B, fr).call(this, () => fe(() => c(this, lt).call(this, n)))), c(this, je) === 0 && (c(this, ne).before(r), M(this, Ne, null), ht(
      /** @type {Effect} */
      c(this, oe),
      () => {
        M(this, oe, null);
      }
    ), D(this, B, cr).call(
      this,
      /** @type {Batch} */
      R
    ));
  }));
}, Zr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, je, 0), M(this, dt, 0), M(this, Ee, fe(() => {
      c(this, lt).call(this, c(this, ne));
    })), c(this, je) > 0) {
      var t = M(this, Ne, document.createDocumentFragment());
      _n(c(this, Ee), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        c(this, xe).pending
      );
      M(this, oe, fe(() => r(c(this, ne))));
    } else
      D(this, B, cr).call(
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
cr = function(t) {
  this.is_pending = !1, t.transfer_effects(c(this, Jt), c(this, Qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
fr = function(t) {
  var r = I, n = E, o = ae;
  Ae(c(this, K)), me(c(this, K)), Ct(c(this, K).ctx);
  try {
    return Je.ensure(), t();
  } catch (s) {
    return uo(s), null;
  } finally {
    Ae(r), me(n), Ct(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Kr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && D(n = this.parent, B, Kr).call(n, t, r);
    return;
  }
  M(this, je, c(this, je) + t), c(this, je) === 0 && (D(this, B, cr).call(this, r), c(this, oe) && ht(c(this, oe), () => {
    M(this, oe, null);
  }), c(this, Ne) && (c(this, ne).before(c(this, Ne)), M(this, Ne, null)));
};
function ii(e, t, r, n) {
  const o = Er;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(o));
    return;
  }
  var a = (
    /** @type {Effect} */
    I
  ), i = ai(), d = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function l(h) {
    i();
    try {
      n(h);
    } catch (v) {
      (a.f & he) === 0 && Xe(v, a);
    }
    vr();
  }
  if (r.length === 0) {
    d.then(() => l(t.map(o)));
    return;
  }
  var f = Mo();
  function p() {
    Promise.all(r.map((h) => /* @__PURE__ */ li(h))).then((h) => l([...t.map(o), ...h])).catch((h) => Xe(h, a)).finally(() => f());
  }
  d ? d.then(() => {
    i(), p(), vr();
  }) : p();
}
function ai() {
  var e = (
    /** @type {Effect} */
    I
  ), t = E, r = ae, n = (
    /** @type {Batch} */
    R
  );
  return function(s = !0) {
    Ae(e), me(t), Ct(r), s && (e.f & he) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function vr(e = !0) {
  Ae(null), me(null), Ct(null), e && (R == null || R.deactivate());
}
function Mo() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    I.b
  ), t = (
    /** @type {Batch} */
    R
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  var t = G | j, r = E !== null && (E.f & G) !== 0 ? (
    /** @type {Derived} */
    E
  ) : null;
  return I !== null && (I.f |= vt), {
    ctx: ae,
    deps: null,
    effects: null,
    equals: ao,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: r ?? I,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function li(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    I
  );
  n === null && Cs();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = mt(
    /** @type {V} */
    F
  ), a = !E, i = /* @__PURE__ */ new Map();
  return bi(() => {
    var v;
    var d = (
      /** @type {Effect} */
      I
    ), l = no();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(vr);
    } catch (u) {
      l.reject(u), vr();
    }
    var f = (
      /** @type {Batch} */
      R
    );
    if (a) {
      if ((d.f & tt) !== 0)
        var p = Mo();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (v = i.get(f)) == null || v.reject(Ce), i.delete(f);
      else {
        for (const u of i.values())
          u.reject(Ce);
        i.clear();
      }
      i.set(f, l);
    }
    const h = (u, _ = void 0) => {
      if (p) {
        var S = _ === Ce;
        p(S);
      }
      if (!(_ === Ce || (d.f & he) !== 0)) {
        if (f.activate(), _)
          s.f |= qe, Lt(s, _);
        else {
          (s.f & qe) !== 0 && (s.f ^= qe), Lt(s, u);
          for (const [$, m] of i) {
            if (i.delete($), $ === f) break;
            m.reject(Ce);
          }
        }
        f.deactivate();
      }
    };
    l.promise.then(h, (u) => h(null, u || "unknown"));
  }), Lo(() => {
    for (const d of i.values())
      d.reject(Ce);
  }), new Promise((d) => {
    function l(f) {
      function p() {
        f === o ? d(s) : l(o);
      }
      f.then(p, p);
    }
    l(o);
  });
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Er(e);
  return Fo(t), t;
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  const t = /* @__PURE__ */ Er(e);
  return t.equals = lo, t;
}
function di(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Z(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ci(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & G) === 0)
      return (t.f & he) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function hn(e) {
  var t, r = I;
  Ae(ci(e));
  try {
    e.f &= ~gt, di(e), t = jo(e);
  } finally {
    Ae(r);
  }
  return t;
}
function $o(e) {
  var t = e.v, r = hn(e);
  if (!e.equals(r) && (e.wv = Uo(), (!(R != null && R.is_fork) || e.deps === null) && (e.v = r, R == null || R.capture(e, t), e.deps === null))) {
    W(e, V);
    return;
  }
  Qe || (H !== null ? (vn() || R != null && R.is_fork) && H.set(e, r) : fn(e));
}
function fi(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Ce), n.teardown = Ts, n.ac = null, Xt(n, 0), bn(n));
}
function xo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Nt(t);
}
let Jr = /* @__PURE__ */ new Set();
const Ze = /* @__PURE__ */ new Map();
let Eo = !1;
function mt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ao,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  const r = mt(e);
  return Fo(r), r;
}
// @__NO_SIDE_EFFECTS__
function To(e, t = !1, r = !0) {
  const n = mt(e);
  return t || (n.equals = lo), n;
}
function C(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Me || (E.f & In) !== 0) && co() && (E.f & (G | et | ln | In)) !== 0 && (ge === null || !It.call(ge, e)) && Us();
  let n = r ? Fe(t) : t;
  return Lt(e, n, dr);
}
function Lt(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    Qe ? Ze.set(e, t) : Ze.set(e, n), e.v = t;
    var o = Je.ensure();
    if (o.capture(e, n), (e.f & G) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && hn(s), H === null && fn(s);
    }
    e.wv = Uo(), Ro(e, j, r), I !== null && (I.f & V) !== 0 && (I.f & (Se | Ke)) === 0 && (de === null ? ki([e]) : de.push(e)), !o.is_fork && Jr.size > 0 && !Eo && ui();
  }
  return t;
}
function ui() {
  Eo = !1;
  for (const e of Jr)
    (e.f & V) !== 0 && W(e, Pe), nr(e) && Nt(e);
  Jr.clear();
}
function Ut(e) {
  C(e, e.v + 1);
}
function Ro(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, s = 0; s < o; s++) {
      var a = n[s], i = a.f, d = (i & j) === 0;
      if (d && W(a, t), (i & G) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        H == null || H.delete(l), (i & gt) === 0 && (i & ue && (a.f |= gt), Ro(l, Pe, r));
      } else if (d) {
        var f = (
          /** @type {Effect} */
          a
        );
        (i & et) !== 0 && ye !== null && ye.add(f), r !== null ? r.push(f) : un(f);
      }
    }
}
function Fe(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = ro(e);
  if (t !== xs && t !== Es)
    return e;
  var r = /* @__PURE__ */ new Map(), n = to(e), o = /* @__PURE__ */ Y(0), s = pt, a = (i) => {
    if (pt === s)
      return i();
    var d = E, l = pt;
    me(null), Ln(s);
    var f = i();
    return me(d), Ln(l), f;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(i, d, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Fs();
        var f = r.get(d);
        return f === void 0 ? a(() => {
          var p = /* @__PURE__ */ Y(l.value);
          return r.set(d, p), p;
        }) : C(f, l.value, !0), !0;
      },
      deleteProperty(i, d) {
        var l = r.get(d);
        if (l === void 0) {
          if (d in i) {
            const f = a(() => /* @__PURE__ */ Y(F));
            r.set(d, f), Ut(o);
          }
        } else
          C(l, F), Ut(o);
        return !0;
      },
      get(i, d, l) {
        var v;
        if (d === lr)
          return e;
        var f = r.get(d), p = d in i;
        if (f === void 0 && (!p || (v = ft(i, d)) != null && v.writable) && (f = a(() => {
          var u = Fe(p ? i[d] : F), _ = /* @__PURE__ */ Y(u);
          return _;
        }), r.set(d, f)), f !== void 0) {
          var h = g(f);
          return h === F ? void 0 : h;
        }
        return Reflect.get(i, d, l);
      },
      getOwnPropertyDescriptor(i, d) {
        var l = Reflect.getOwnPropertyDescriptor(i, d);
        if (l && "value" in l) {
          var f = r.get(d);
          f && (l.value = g(f));
        } else if (l === void 0) {
          var p = r.get(d), h = p == null ? void 0 : p.v;
          if (p !== void 0 && h !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return l;
      },
      has(i, d) {
        var h;
        if (d === lr)
          return !0;
        var l = r.get(d), f = l !== void 0 && l.v !== F || Reflect.has(i, d);
        if (l !== void 0 || I !== null && (!f || (h = ft(i, d)) != null && h.writable)) {
          l === void 0 && (l = a(() => {
            var v = f ? Fe(i[d]) : F, u = /* @__PURE__ */ Y(v);
            return u;
          }), r.set(d, l));
          var p = g(l);
          if (p === F)
            return !1;
        }
        return f;
      },
      set(i, d, l, f) {
        var w;
        var p = r.get(d), h = d in i;
        if (n && d === "length")
          for (var v = l; v < /** @type {Source<number>} */
          p.v; v += 1) {
            var u = r.get(v + "");
            u !== void 0 ? C(u, F) : v in i && (u = a(() => /* @__PURE__ */ Y(F)), r.set(v + "", u));
          }
        if (p === void 0)
          (!h || (w = ft(i, d)) != null && w.writable) && (p = a(() => /* @__PURE__ */ Y(void 0)), C(p, Fe(l)), r.set(d, p));
        else {
          h = p.v !== F;
          var _ = a(() => Fe(l));
          C(p, _);
        }
        var S = Reflect.getOwnPropertyDescriptor(i, d);
        if (S != null && S.set && S.set.call(f, l), !h) {
          if (n && typeof d == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(d);
            Number.isInteger(m) && m >= $.v && C($, m + 1);
          }
          Ut(o);
        }
        return !0;
      },
      ownKeys(i) {
        g(o);
        var d = Reflect.ownKeys(i).filter((p) => {
          var h = r.get(p);
          return h === void 0 || h.v !== F;
        });
        for (var [l, f] of r)
          f.v !== F && !(l in i) && d.push(l);
        return d;
      },
      setPrototypeOf() {
        Hs();
      }
    }
  );
}
var Yt, Po, Ao, Io;
function Qr() {
  if (Yt === void 0) {
    Yt = window, Po = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ao = ft(t, "firstChild").get, Io = ft(t, "nextSibling").get, Pn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Pn(r) && (r.__t = void 0);
  }
}
function pe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return (
    /** @type {TemplateNode | null} */
    Io.call(e)
  );
}
function ir(e, t) {
  if (!O)
    return /* @__PURE__ */ Dt(e);
  var r = /* @__PURE__ */ Dt(P);
  if (r === null)
    r = P.appendChild(pe());
  else if (t && r.nodeType !== Sr) {
    var n = pe();
    return r == null || r.before(n), Q(n), n;
  }
  return t && gn(
    /** @type {Text} */
    r
  ), Q(r), r;
}
function Oo(e, t = !1) {
  if (!O) {
    var r = /* @__PURE__ */ Dt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ie(r) : r;
  }
  if (t) {
    if ((P == null ? void 0 : P.nodeType) !== Sr) {
      var n = pe();
      return P == null || P.before(n), Q(n), n;
    }
    gn(
      /** @type {Text} */
      P
    );
  }
  return P;
}
function zr(e, t = 1, r = !1) {
  let n = O ? P : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(n);
  if (!O)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Sr) {
      var s = pe();
      return n === null ? o == null || o.after(s) : n.before(s), Q(s), s;
    }
    gn(
      /** @type {Text} */
      n
    );
  }
  return Q(n), n;
}
function zo(e) {
  e.textContent = "";
}
function Co() {
  return !1;
}
function pn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(eo, e, void 0)
  );
}
function gn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Sr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function mn(e) {
  var t = E, r = I;
  me(null), Ae(null);
  try {
    return e();
  } finally {
    me(t), Ae(r);
  }
}
function hi(e) {
  I === null && (E === null && Bs(), Ns()), Qe && Ds();
}
function pi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Oe(e, t) {
  var r = I;
  r !== null && (r.f & ie) !== 0 && (e |= ie);
  var n = {
    ctx: ae,
    deps: null,
    nodes: null,
    f: e | j | ue,
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
  }, o = n;
  if ((e & Ot) !== 0)
    Mt !== null ? Mt.push(n) : Je.ensure().schedule(n);
  else if (t !== null) {
    try {
      Nt(n);
    } catch (a) {
      throw Z(n), a;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & vt) === 0 && (o = o.first, (e & et) !== 0 && (e & zt) !== 0 && o !== null && (o.f |= zt));
  }
  if (o !== null && (o.parent = r, r !== null && pi(o, r), E !== null && (E.f & G) !== 0 && (e & Ke) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return n;
}
function vn() {
  return E !== null && !Me;
}
function Lo(e) {
  const t = Oe(Mr, null);
  return W(t, V), t.teardown = e, t;
}
function gi(e) {
  hi();
  var t = (
    /** @type {Effect} */
    I.f
  ), r = !E && (t & Se) !== 0 && (t & tt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ae
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Do(e);
}
function Do(e) {
  return Oe(Ot | As, e);
}
function mi(e) {
  Je.ensure();
  const t = Oe(Ke | vt, e);
  return () => {
    Z(t);
  };
}
function vi(e) {
  Je.ensure();
  const t = Oe(Ke | vt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ht(t, () => {
      Z(t), n(void 0);
    }) : (Z(t), n(void 0));
  });
}
function wi(e) {
  return Oe(Ot, e);
}
function bi(e) {
  return Oe(ln | vt, e);
}
function No(e, t = 0) {
  return Oe(Mr | t, e);
}
function Cr(e, t = [], r = [], n = []) {
  ii(n, t, r, (o) => {
    Oe(Mr, () => e(...o.map(g)));
  });
}
function wn(e, t = 0) {
  var r = Oe(et | t, e);
  return r;
}
function fe(e) {
  return Oe(Se | vt, e);
}
function Bo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qe, n = E;
    Cn(!0), me(null);
    try {
      t.call(null);
    } finally {
      Cn(r), me(n);
    }
  }
}
function bn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const o = r.ac;
    o !== null && mn(() => {
      o.abort(Ce);
    });
    var n = r.next;
    (r.f & Ke) !== 0 ? r.parent = null : Z(r, t), r = n;
  }
}
function yi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Se) === 0 && Z(t), t = r;
  }
}
function Z(e, t = !0) {
  var r = !1;
  (t || (e.f & Ps) !== 0) && e.nodes !== null && e.nodes.end !== null && (_i(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), W(e, An), bn(e, t && !r), Xt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Bo(e), e.f ^= An, e.f |= he;
  var o = e.parent;
  o !== null && o.first !== null && Wo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function _i(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ie(e);
    e.remove(), e = r;
  }
}
function Wo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ht(e, t, r = !0) {
  var n = [];
  Vo(e, n, !0);
  var o = () => {
    r && Z(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || o();
    for (var i of n)
      i.out(a);
  } else
    o();
}
function Vo(e, t, r) {
  if ((e.f & ie) === 0) {
    e.f ^= ie;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const i of n)
        (i.is_global || r) && t.push(i);
    for (var o = e.first; o !== null; ) {
      var s = o.next, a = (o.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Se) !== 0 && (e.f & et) !== 0;
      Vo(o, t, a ? r : !1), o = s;
    }
  }
}
function yn(e) {
  Go(e, !0);
}
function Go(e, t) {
  if ((e.f & ie) !== 0) {
    e.f ^= ie, (e.f & V) === 0 && (W(e, j), Je.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & zt) !== 0 || (r.f & Se) !== 0;
      Go(r, o ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function _n(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var o = r === n ? null : /* @__PURE__ */ Ie(r);
      t.append(r), r = o;
    }
}
let ur = !1, Qe = !1;
function Cn(e) {
  Qe = e;
}
let E = null, Me = !1;
function me(e) {
  E = e;
}
let I = null;
function Ae(e) {
  I = e;
}
let ge = null;
function Fo(e) {
  E !== null && (ge === null ? ge = [e] : ge.push(e));
}
let J = null, te = 0, de = null;
function ki(e) {
  de = e;
}
let Ho = 1, st = 0, pt = st;
function Ln(e) {
  pt = e;
}
function Uo() {
  return ++Ho;
}
function nr(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if (t & G && (e.f &= ~gt), (t & Pe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, o = 0; o < n; o++) {
      var s = r[o];
      if (nr(
        /** @type {Derived} */
        s
      ) && $o(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    H === null && W(e, V);
  }
  return !1;
}
function Yo(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ge !== null && It.call(ge, e)))
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      (s.f & G) !== 0 ? Yo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? W(s, j) : (s.f & V) !== 0 && W(s, Pe), un(
        /** @type {Effect} */
        s
      ));
    }
}
function jo(e) {
  var _;
  var t = J, r = te, n = de, o = E, s = ge, a = ae, i = Me, d = pt, l = e.f;
  J = /** @type {null | Value[]} */
  null, te = 0, de = null, E = (l & (Se | Ke)) === 0 ? e : null, ge = null, Ct(e.ctx), Me = !1, pt = ++st, e.ac !== null && (mn(() => {
    e.ac.abort(Ce);
  }), e.ac = null);
  try {
    e.f |= Hr;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f();
    e.f |= tt;
    var h = e.deps, v = R == null ? void 0 : R.is_fork;
    if (J !== null) {
      var u;
      if (v || Xt(e, te), h !== null && te > 0)
        for (h.length = te + J.length, u = 0; u < J.length; u++)
          h[te + u] = J[u];
      else
        e.deps = h = J;
      if (vn() && (e.f & ue) !== 0)
        for (u = te; u < h.length; u++)
          ((_ = h[u]).reactions ?? (_.reactions = [])).push(e);
    } else !v && h !== null && te < h.length && (Xt(e, te), h.length = te);
    if (co() && de !== null && !Me && h !== null && (e.f & (G | Pe | j)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      de.length; u++)
        Yo(
          de[u],
          /** @type {Effect} */
          e
        );
    if (o !== null && o !== e) {
      if (st++, o.deps !== null)
        for (let S = 0; S < r; S += 1)
          o.deps[S].rv = st;
      if (t !== null)
        for (const S of t)
          S.rv = st;
      de !== null && (n === null ? n = de : n.push(.../** @type {Source[]} */
      de));
    }
    return (e.f & qe) !== 0 && (e.f ^= qe), p;
  } catch (S) {
    return uo(S);
  } finally {
    e.f ^= Hr, J = t, te = r, de = n, E = o, ge = s, Ct(a), Me = i, pt = d;
  }
}
function Mi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ss.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  if (r === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !It.call(J, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~gt), fn(s), fi(s), Xt(s, 0);
  }
}
function Xt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Mi(e, r[n]);
}
function Nt(e) {
  var t = e.f;
  if ((t & he) === 0) {
    W(e, V);
    var r = I, n = ur;
    I = e, ur = !0;
    try {
      (t & (et | oo)) !== 0 ? yi(e) : bn(e), Bo(e);
      var o = jo(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ho;
      var s;
      Ms && Zs && (e.f & j) !== 0 && e.deps;
    } finally {
      ur = n, I = r;
    }
  }
}
function g(e) {
  var t = e.f, r = (t & G) !== 0;
  if (E !== null && !Me) {
    var n = I !== null && (I.f & he) !== 0;
    if (!n && (ge === null || !It.call(ge, e))) {
      var o = E.deps;
      if ((E.f & Hr) !== 0)
        e.rv < st && (e.rv = st, J === null && o !== null && o[te] === e ? te++ : J === null ? J = [e] : J.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : It.call(s, E) || s.push(E);
      }
    }
  }
  if (Qe && Ze.has(e))
    return Ze.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var i = a.v;
      return ((a.f & V) === 0 && a.reactions !== null || qo(a)) && (i = hn(a)), Ze.set(a, i), i;
    }
    var d = (a.f & ue) === 0 && !Me && E !== null && (ur || (E.f & ue) !== 0), l = (a.f & tt) === 0;
    nr(a) && (d && (a.f |= ue), $o(a)), d && !l && (xo(a), Xo(a));
  }
  if (H != null && H.has(e))
    return H.get(e);
  if ((e.f & qe) !== 0)
    throw e.v;
  return e.v;
}
function Xo(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & G) !== 0 && (t.f & ue) === 0 && (xo(
        /** @type {Derived} */
        t
      ), Xo(
        /** @type {Derived} */
        t
      ));
}
function qo(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ze.has(t) || (t.f & G) !== 0 && qo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function kn(e) {
  var t = Me;
  try {
    return Me = !0, e();
  } finally {
    Me = t;
  }
}
const it = Symbol("events"), Zo = /* @__PURE__ */ new Set(), en = /* @__PURE__ */ new Set();
function Si(e, t, r, n = {}) {
  function o(s) {
    if (n.capture || tn.call(t, s), !s.cancelBubble)
      return mn(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function Lr(e, t, r, n, o) {
  var s = { capture: n, passive: o }, a = Si(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Lo(() => {
    t.removeEventListener(e, a, s);
  });
}
function Dr(e, t, r) {
  (t[it] ?? (t[it] = {}))[e] = r;
}
function $i(e) {
  for (var t = 0; t < e.length; t++)
    Zo.add(e[t]);
  for (var r of en)
    r(e);
}
let Dn = null;
function tn(e) {
  var S, $;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((S = e.composedPath) == null ? void 0 : S.call(e)) || [], s = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Dn = e;
  var a = 0, i = Dn === e && e[it];
  if (i) {
    var d = o.indexOf(i);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[it] = t;
      return;
    }
    var l = o.indexOf(t);
    if (l === -1)
      return;
    d <= l && (a = d);
  }
  if (s = /** @type {Element} */
  o[a] || e.target, s !== t) {
    gr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var f = E, p = I;
    me(null), Ae(null);
    try {
      for (var h, v = []; s !== null; ) {
        var u = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var _ = ($ = s[it]) == null ? void 0 : $[n];
          _ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && _.call(s, e);
        } catch (m) {
          h ? v.push(m) : h = m;
        }
        if (e.cancelBubble || u === t || u === null)
          break;
        s = u;
      }
      if (h) {
        for (let m of v)
          queueMicrotask(() => {
            throw m;
          });
        throw h;
      }
    } finally {
      e[it] = t, delete e.currentTarget, me(f), Ae(p);
    }
  }
}
var Jn;
const Nr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Jn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Jn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function xi(e) {
  return (
    /** @type {string} */
    (Nr == null ? void 0 : Nr.createHTML(e)) ?? e
  );
}
function Ei(e) {
  var t = pn("template");
  return t.innerHTML = xi(e.replaceAll("<!>", "<!---->")), t.content;
}
function qt(e, t) {
  var r = (
    /** @type {Effect} */
    I
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Mn(e, t) {
  var r = (t & ks) !== 0, n, o = !e.startsWith("<!>");
  return () => {
    if (O)
      return qt(P, null), P;
    n === void 0 && (n = Ei(o ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(n));
    var s = (
      /** @type {TemplateNode} */
      r || Po ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return qt(s, s), s;
  };
}
function Ko() {
  if (O)
    return qt(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = pe();
  return e.append(t, r), qt(t, r), e;
}
function St(e, t) {
  if (O) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      I
    );
    ((r.f & tt) === 0 || r.nodes.end === null) && (r.nodes.end = P), xr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ti = ["touchstart", "touchmove"];
function Ri(e) {
  return Ti.includes(e);
}
function Nn(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Jo(e, t) {
  return Qo(e, t);
}
function Pi(e, t) {
  Qr(), t.intro = t.intro ?? !1;
  const r = t.target, n = O, o = P;
  try {
    for (var s = /* @__PURE__ */ Dt(r); s && (s.nodeType !== rr || /** @type {Comment} */
    s.data !== Qn); )
      s = /* @__PURE__ */ Ie(s);
    if (!s)
      throw At;
    Ge(!0), Q(
      /** @type {Comment} */
      s
    );
    const a = Qo(e, { ...t, anchor: s });
    return Ge(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== At && console.warn("Failed to hydrate: ", a), t.recover === !1 && Vs(), Qr(), zo(r), Ge(!1), Jo(e, t);
  } finally {
    Ge(n), Q(o);
  }
}
const ar = /* @__PURE__ */ new Map();
function Qo(e, { target: t, anchor: r, props: n = {}, events: o, context: s, intro: a = !0, transformError: i }) {
  Qr();
  var d = void 0, l = vi(() => {
    var f = r ?? t.appendChild(pe());
    oi(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (v) => {
        dn({});
        var u = (
          /** @type {ComponentContext} */
          ae
        );
        if (s && (u.c = s), o && (n.$$events = o), O && qt(
          /** @type {TemplateNode} */
          v,
          null
        ), d = e(v, n) || {}, O && (I.nodes.end = P, P === null || P.nodeType !== rr || /** @type {Comment} */
        P.data !== an))
          throw $r(), At;
        cn();
      },
      i
    );
    var p = /* @__PURE__ */ new Set(), h = (v) => {
      for (var u = 0; u < v.length; u++) {
        var _ = v[u];
        if (!p.has(_)) {
          p.add(_);
          var S = Ri(_);
          for (const w of [t, document]) {
            var $ = ar.get(w);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), ar.set(w, $));
            var m = $.get(_);
            m === void 0 ? (w.addEventListener(_, tn, { passive: S }), $.set(_, 1)) : $.set(_, m + 1);
          }
        }
      }
    };
    return h(kr(Zo)), en.add(h), () => {
      var S;
      for (var v of p)
        for (const $ of [t, document]) {
          var u = (
            /** @type {Map<string, number>} */
            ar.get($)
          ), _ = (
            /** @type {number} */
            u.get(v)
          );
          --_ == 0 ? ($.removeEventListener(v, tn), u.delete(v), u.size === 0 && ar.delete($)) : u.set(v, _);
        }
      en.delete(h), f !== r && ((S = f.parentNode) == null || S.removeChild(f));
    };
  });
  return rn.set(d, l), d;
}
let rn = /* @__PURE__ */ new WeakMap();
function Ai(e, t) {
  const r = rn.get(e);
  return r ? (rn.delete(e), r(t)) : Promise.resolve();
}
var ke, Te, se, ct, er, tr, _r;
class Ii {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    N(this, "anchor");
    /** @type {Map<Batch, Key>} */
    x(this, ke, /* @__PURE__ */ new Map());
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
    x(this, Te, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    x(this, se, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, er, !0);
    /**
     * @param {Batch} batch
     */
    x(this, tr, (t) => {
      if (c(this, ke).has(t)) {
        var r = (
          /** @type {Key} */
          c(this, ke).get(t)
        ), n = c(this, Te).get(r);
        if (n)
          yn(n), c(this, ct).delete(r);
        else {
          var o = c(this, se).get(r);
          o && (c(this, Te).set(r, o.effect), c(this, se).delete(r), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), n = o.effect);
        }
        for (const [s, a] of c(this, ke)) {
          if (c(this, ke).delete(s), s === t)
            break;
          const i = c(this, se).get(a);
          i && (Z(i.effect), c(this, se).delete(a));
        }
        for (const [s, a] of c(this, Te)) {
          if (s === r || c(this, ct).has(s)) continue;
          const i = () => {
            if (Array.from(c(this, ke).values()).includes(s)) {
              var l = document.createDocumentFragment();
              _n(a, l), l.append(pe()), c(this, se).set(s, { effect: a, fragment: l });
            } else
              Z(a);
            c(this, ct).delete(s), c(this, Te).delete(s);
          };
          c(this, er) || !n ? (c(this, ct).add(s), ht(a, i, !1)) : i();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, _r, (t) => {
      c(this, ke).delete(t);
      const r = Array.from(c(this, ke).values());
      for (const [n, o] of c(this, se))
        r.includes(n) || (Z(o.effect), c(this, se).delete(n));
    });
    this.anchor = t, M(this, er, r);
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
    ), o = Co();
    if (r && !c(this, Te).has(t) && !c(this, se).has(t))
      if (o) {
        var s = document.createDocumentFragment(), a = pe();
        s.append(a), c(this, se).set(t, {
          effect: fe(() => r(a)),
          fragment: s
        });
      } else
        c(this, Te).set(
          t,
          fe(() => r(this.anchor))
        );
    if (c(this, ke).set(n, t), o) {
      for (const [i, d] of c(this, Te))
        i === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [i, d] of c(this, se))
        i === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(c(this, tr)), n.ondiscard(c(this, _r));
    } else
      O && (this.anchor = P), c(this, tr).call(this, n);
  }
}
ke = new WeakMap(), Te = new WeakMap(), se = new WeakMap(), ct = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), _r = new WeakMap();
function Oi(e) {
  ae === null && zs(), gi(() => {
    const t = kn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nn(e, t, r = !1) {
  var n;
  O && (n = P, xr());
  var o = new Ii(e), s = r ? zt : 0;
  function a(i, d) {
    if (O) {
      var l = io(
        /** @type {TemplateNode} */
        n
      );
      if (i !== parseInt(l.substring(1))) {
        var f = mr();
        Q(f), o.anchor = f, Ge(!1), o.ensure(i, d), Ge(!0);
        return;
      }
    }
    o.ensure(i, d);
  }
  wn(() => {
    var i = !1;
    t((d, l = 0) => {
      i = !0, a(l, d);
    }), i || a(-1, null);
  }, s);
}
function zi(e, t, r) {
  for (var n = [], o = t.length, s, a = t.length, i = 0; i < o; i++) {
    let p = t[i];
    ht(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            on(e, kr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var d = n.length === 0 && r !== null;
    if (d) {
      var l = (
        /** @type {Element} */
        r
      ), f = (
        /** @type {Element} */
        l.parentNode
      );
      zo(f), f.append(l), e.items.clear();
    }
    on(e, t, !d);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function on(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const i of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(i).e
        );
  }
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    if (n != null && n.has(s)) {
      s.f |= Ve;
      const a = document.createDocumentFragment();
      _n(s, a);
    } else
      Z(t[o], r);
  }
}
var Bn;
function Ci(e, t, r, n, o, s = null) {
  var a = e, i = /* @__PURE__ */ new Map();
  {
    var d = (
      /** @type {Element} */
      e
    );
    a = O ? Q(/* @__PURE__ */ Dt(d)) : d.appendChild(pe());
  }
  O && xr();
  var l = null, f = /* @__PURE__ */ So(() => {
    var m = r();
    return to(m) ? m : m == null ? [] : kr(m);
  }), p, h = /* @__PURE__ */ new Map(), v = !0;
  function u(m) {
    ($.effect.f & he) === 0 && ($.pending.delete(m), $.fallback = l, Li($, p, a, t, n), l !== null && (p.length === 0 ? (l.f & Ve) === 0 ? yn(l) : (l.f ^= Ve, Ft(l, null, a)) : ht(l, () => {
      l = null;
    })));
  }
  function _(m) {
    $.pending.delete(m);
  }
  var S = wn(() => {
    p = /** @type {V[]} */
    g(f);
    var m = p.length;
    let w = !1;
    if (O) {
      var z = io(a) === sn;
      z !== (m === 0) && (a = mr(), Q(a), Ge(!1), w = !0);
    }
    for (var k = /* @__PURE__ */ new Set(), q = (
      /** @type {Batch} */
      R
    ), wt = Co(), ve = 0; ve < m; ve += 1) {
      O && P.nodeType === rr && /** @type {Comment} */
      P.data === an && (a = /** @type {Comment} */
      P, w = !0, Ge(!1));
      var le = p[ve], bt = n(le, ve), we = v ? null : i.get(bt);
      we ? (we.v && Lt(we.v, le), we.i && Lt(we.i, ve), wt && q.unskip_effect(we.e)) : (we = Di(
        i,
        v ? a : Bn ?? (Bn = pe()),
        le,
        bt,
        ve,
        o,
        t,
        r
      ), v || (we.e.f |= Ve), i.set(bt, we)), k.add(bt);
    }
    if (m === 0 && s && !l && (v ? l = fe(() => s(a)) : (l = fe(() => s(Bn ?? (Bn = pe()))), l.f |= Ve)), m > k.size && Ls(), O && m > 0 && Q(mr()), !v)
      if (h.set(q, k), wt) {
        for (const [Tr, Rr] of i)
          k.has(Tr) || q.skip_effect(Rr.e);
        q.oncommit(u), q.ondiscard(_);
      } else
        u(q);
    w && Ge(!0), g(f);
  }), $ = { effect: S, items: i, pending: h, outrogroups: null, fallback: l };
  v = !1, O && (a = P);
}
function Gt(e) {
  for (; e !== null && (e.f & Se) === 0; )
    e = e.next;
  return e;
}
function Li(e, t, r, n, o) {
  var ve;
  var s = t.length, a = e.items, i = Gt(e.effect.first), d, l = null, f = [], p = [], h, v, u, _;
  for (_ = 0; _ < s; _ += 1) {
    if (h = t[_], v = o(h, _), u = /** @type {EachItem} */
    a.get(v).e, e.outrogroups !== null)
      for (const le of e.outrogroups)
        le.pending.delete(u), le.done.delete(u);
    if ((u.f & ie) !== 0 && yn(u), (u.f & Ve) !== 0)
      if (u.f ^= Ve, u === i)
        Ft(u, null, r);
      else {
        var S = l ? l.next : i;
        u === e.effect.last && (e.effect.last = u.prev), u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), Ye(e, l, u), Ye(e, u, S), Ft(u, S, r), l = u, f = [], p = [], i = Gt(l.next);
        continue;
      }
    if (u !== i) {
      if (d !== void 0 && d.has(u)) {
        if (f.length < p.length) {
          var $ = p[0], m;
          l = $.prev;
          var w = f[0], z = f[f.length - 1];
          for (m = 0; m < f.length; m += 1)
            Ft(f[m], $, r);
          for (m = 0; m < p.length; m += 1)
            d.delete(p[m]);
          Ye(e, w.prev, z.next), Ye(e, l, w), Ye(e, z, $), i = $, l = z, _ -= 1, f = [], p = [];
        } else
          d.delete(u), Ft(u, i, r), Ye(e, u.prev, u.next), Ye(e, u, l === null ? e.effect.first : l.next), Ye(e, l, u), l = u;
        continue;
      }
      for (f = [], p = []; i !== null && i !== u; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(i), p.push(i), i = Gt(i.next);
      if (i === null)
        continue;
    }
    (u.f & Ve) === 0 && f.push(u), l = u, i = Gt(u.next);
  }
  if (e.outrogroups !== null) {
    for (const le of e.outrogroups)
      le.pending.size === 0 && (on(e, kr(le.done)), (ve = e.outrogroups) == null || ve.delete(le));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (i !== null || d !== void 0) {
    var k = [];
    if (d !== void 0)
      for (u of d)
        (u.f & ie) === 0 && k.push(u);
    for (; i !== null; )
      (i.f & ie) === 0 && i !== e.fallback && k.push(i), i = Gt(i.next);
    var q = k.length;
    if (q > 0) {
      var wt = s === 0 ? r : null;
      zi(e, k, wt);
    }
  }
}
function Di(e, t, r, n, o, s, a, i) {
  var d = (a & gs) !== 0 ? (a & vs) === 0 ? /* @__PURE__ */ To(r, !1, !1) : mt(r) : null, l = (a & ms) !== 0 ? mt(o) : null;
  return {
    v: d,
    i: l,
    e: fe(() => (s(t, d ?? r, l ?? o, i), () => {
      e.delete(n);
    }))
  };
}
function Ft(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, o = e.nodes.end, s = t && (t.f & Ve) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(n)
      );
      if (s.before(n), n === o)
        return;
      n = a;
    }
}
function Ye(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ni(e, t) {
  wi(() => {
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
      const o = pn("style");
      o.id = t.hash, o.textContent = t.code, n.appendChild(o);
    }
  });
}
const Wn = [...` 	
\r\f \v\uFEFF`];
function Bi(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var o of Object.keys(r))
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var s = o.length, a = 0; (a = n.indexOf(o, a)) >= 0; ) {
          var i = a + s;
          (a === 0 || Wn.includes(n[a - 1])) && (i === n.length || Wn.includes(n[i])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(i + 1) : a = i;
        }
  }
  return n === "" ? null : n;
}
function Vn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var o of Object.keys(e)) {
    var s = e[o];
    s != null && s !== "" && (n += " " + o + ": " + s + r);
  }
  return n;
}
function Wi(e, t) {
  if (t) {
    var r = "", n, o;
    return Array.isArray(t) ? (n = t[0], o = t[1]) : n = t, n && (r += Vn(n)), o && (r += Vn(o, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function Gn(e, t, r, n, o, s) {
  var a = e.__className;
  if (O || a !== r || a === void 0) {
    var i = Bi(r, n, s);
    (!O || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  } else if (s && o !== s)
    for (var d in s) {
      var l = !!s[d];
      (o == null || l !== !!o[d]) && e.classList.toggle(d, l);
    }
  return s;
}
function Br(e, t = {}, r, n) {
  for (var o in r) {
    var s = r[o];
    t[o] !== s && (r[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, s, n));
  }
}
function Fn(e, t, r, n) {
  var o = e.__style;
  if (O || o !== t) {
    var s = Wi(t, n);
    (!O || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else n && (Array.isArray(n) ? (Br(e, r == null ? void 0 : r[0], n[0]), Br(e, r == null ? void 0 : r[1], n[1], "important")) : Br(e, r, n));
  return n;
}
const Vi = Symbol("is custom element"), Gi = Symbol("is html"), Fi = Os ? "link" : "LINK";
function _t(e, t, r, n) {
  var o = Hi(e);
  O && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Fi) || o[t] !== (o[t] = r) && (t === "loading" && (e[Is] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ui(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vi]: e.nodeName.includes("-"),
      [Gi]: e.namespaceURI === eo
    })
  );
}
var Hn = /* @__PURE__ */ new Map();
function Ui(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Hn.get(t);
  if (r) return r;
  Hn.set(t, r = []);
  for (var n, o = e, s = Element.prototype; s !== o; ) {
    n = $s(o);
    for (var a in n)
      n[a].set && r.push(a);
    o = ro(o);
  }
  return r;
}
function kt(e, t, r, n) {
  var m;
  var o = (r & ys) !== 0, s = (r & _s) !== 0, a = (
    /** @type {V} */
    n
  ), i = !0, d = () => (i && (i = !1, a = s ? kn(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let l;
  if (o) {
    var f = lr in e || so in e;
    l = ((m = ft(e, t)) == null ? void 0 : m.set) ?? (f && t in e ? (w) => e[t] = w : void 0);
  }
  var p, h = !1;
  o ? [p, h] = Qs(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = d(), l && (Gs(), l(p)));
  var v;
  if (v = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? d() : (i = !0, w);
  }, (r & bs) === 0)
    return v;
  if (l) {
    var u = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, z) {
        return arguments.length > 0 ? ((!z || u || h) && l(z ? v() : w), w) : v();
      })
    );
  }
  var _ = !1, S = ((r & ws) !== 0 ? Er : So)(() => (_ = !1, v()));
  o && g(S);
  var $ = (
    /** @type {Effect} */
    I
  );
  return (
    /** @type {() => V} */
    (function(w, z) {
      if (arguments.length > 0) {
        const k = z ? g(S) : o ? Fe(w) : w;
        return C(S, k), _ = !0, a !== void 0 && (a = k), w;
      }
      return Qe && _ || ($.f & he) !== 0 ? S.v : g(S);
    })
  );
}
function Yi(e) {
  return new ji(e);
}
var We, ce;
class ji {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    x(this, We);
    /** @type {Record<string, any>} */
    x(this, ce);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, i) => {
      var d = /* @__PURE__ */ To(i, !1, !1);
      return r.set(a, d), d;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, i) {
          return g(r.get(i) ?? n(i, Reflect.get(a, i)));
        },
        has(a, i) {
          return i === so ? !0 : (g(r.get(i) ?? n(i, Reflect.get(a, i))), Reflect.has(a, i));
        },
        set(a, i, d) {
          return C(r.get(i) ?? n(i, d), d), Reflect.set(a, i, d);
        }
      }
    );
    M(this, ce, (t.hydrate ? Pi : Jo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && nt(), M(this, We, o.$$events);
    for (const a of Object.keys(c(this, ce)))
      a === "$set" || a === "$destroy" || a === "$on" || gr(this, a, {
        get() {
          return c(this, ce)[a];
        },
        /** @param {any} value */
        set(i) {
          c(this, ce)[a] = i;
        },
        enumerable: !0
      });
    c(this, ce).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(o, a);
    }, c(this, ce).$destroy = () => {
      Ai(c(this, ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    c(this, ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    c(this, We)[t] = c(this, We)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return c(this, We)[t].push(n), () => {
      c(this, We)[t] = c(this, We)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    c(this, ce).$destroy();
  }
}
We = new WeakMap(), ce = new WeakMap();
let es;
typeof HTMLElement == "function" && (es = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    N(this, "$$ctor");
    /** Slots */
    N(this, "$$s");
    /** @type {any} The Svelte component instance */
    N(this, "$$c");
    /** Whether or not the custom element is connected */
    N(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    N(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    N(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    N(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    N(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    N(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    N(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    N(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = r, n && (this.$$shadowRoot = this.attachShadow(n));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
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
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let r = function(s) {
        return (a) => {
          const i = pn("slot");
          s !== "default" && (i.name = s), St(a, i);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = Xi(this);
      for (const s of this.$$s)
        s in o && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = hr(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Yi({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = mi(() => {
        No(() => {
          var s;
          this.$$r = !0;
          for (const a of pr(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const i = hr(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const i = this.$$c.$on(s, a);
          this.$$l_u.set(a, i);
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
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = hr(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return pr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function hr(e, t, r, n) {
  var s;
  const o = (s = r[e]) == null ? void 0 : s.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Xi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ts(e, t, r, n, o, s) {
  let a = class extends es {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return pr(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return pr(t).forEach((i) => {
    gr(a.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(d) {
        var p;
        d = hr(i, d, t), this.$$d[i] = d;
        var l = this.$$c;
        if (l) {
          var f = (p = ft(l, i)) == null ? void 0 : p.get;
          f ? l[i] = d : l.$set({ [i]: d });
        }
      }
    });
  }), n.forEach((i) => {
    gr(a.prototype, i, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[i];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var qi = /* @__PURE__ */ Mn('<button class="tool-dock-remove svelte-5ypgve" type="button">×</button>'), Zi = /* @__PURE__ */ Mn('<div class="tool-dock-item svelte-5ypgve"><span class="tool-dock-popout svelte-5ypgve" aria-hidden="true"> </span> <button type="button"><span class="tool-dock-tooltip svelte-5ypgve"> </span> <span class="tool-dock-icon svelte-5ypgve"></span></button> <!></div>'), Ki = /* @__PURE__ */ Mn('<div role="toolbar" aria-label="Pinned actions"></div>');
const Ji = {
  hash: "svelte-5ypgve",
  code: `.tool-dock.svelte-5ypgve {position:fixed;z-index:520;display:inline-flex;gap:var(--efs-dock-gap, 0.6rem);align-items:flex-end;pointer-events:none;}.tool-dock-item.svelte-5ypgve {position:relative;display:inline-flex;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve,
  .tool-dock[data-edge='right'].svelte-5ypgve {flex-direction:column-reverse;}.tool-dock[data-edge='top'].svelte-5ypgve,
  .tool-dock[data-edge='bottom'].svelte-5ypgve {flex-direction:row;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve {align-items:flex-start;}.tool-dock.is-dragging.svelte-5ypgve {transition:none;}.tool-dock-button.svelte-5ypgve {position:relative;z-index:1;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem));height:var(--efs-dock-button-size, 3.1rem);border:1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);border-radius:min(999px, calc(var(--efs-dock-button-size, 3.1rem) * 0.52));background:radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 54%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.92)), transparent 2%);color:var(--shell-text, #f8fafc);box-shadow:0 18px 44px rgba(0, 0, 0, 0.32),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%);cursor:grab;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease;}.tool-dock.is-dragging.svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve),
  .tool-dock-button.svelte-5ypgve:active {cursor:grabbing;}.tool-dock-button.svelte-5ypgve:hover {transform:translateY(-2px) scale(1.02);border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 36%);box-shadow:0 22px 54px rgba(0, 0, 0, 0.38),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 78%);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover,
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover {transform:translateY(0) translateX(1px) scale(1.02);}.tool-dock-button.is-active.svelte-5ypgve {border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 38%);background:radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 82%),
        transparent 56%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);}.tool-dock-icon.svelte-5ypgve {display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-icon-size, 1.2rem);height:var(--efs-dock-icon-size, 1.2rem);background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;transform:scale(var(--efs-dock-icon-scale, 1));transform-origin:center;}.tool-dock-remove.svelte-5ypgve {position:absolute;right:-0.1rem;bottom:-0.08rem;z-index:2;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-remove-size, 1rem);height:var(--efs-dock-remove-size, 1rem);border:1px solid color-mix(in srgb, var(--shell-text, #f8fafc), transparent 18%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), var(--shell-text, #f8fafc) 12%);color:var(--shell-text-strong, var(--shell-text, #f8fafc));font:700 calc(var(--efs-dock-remove-size, 1rem) * 0.72) / 1
      var(--efs-font-sans, sans-serif);box-shadow:0 6px 14px rgba(0, 0, 0, 0.28);cursor:pointer;transition:transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;}.tool-dock-remove.svelte-5ypgve:hover {transform:scale(1.06);background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, #dc2626, var(--shell-panel, rgba(10, 16, 30, 0.96)) 18%);box-shadow:0 8px 18px rgba(0, 0, 0, 0.34);}.tool-dock-tooltip.svelte-5ypgve {position:absolute;z-index:2;opacity:0;pointer-events:none;white-space:nowrap;padding:0.55rem 0.75rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 52%);border-radius:12px;background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%);color:var(--shell-text, #f8fafc);font:var(--efs-font-body-sm, 600 0.875rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.42),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 18%);transition:opacity 140ms ease,
      transform 140ms ease;}.tool-dock-popout.svelte-5ypgve {position:absolute;z-index:0;opacity:0;pointer-events:none;display:none;align-items:center;max-width:var(--efs-dock-popout-width, 10rem);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0.5rem 0.85rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 56%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--shell-inset-bg, rgba(2, 6, 23, 0.92)), transparent 0%),
        color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%)
      );color:var(--shell-text, #f8fafc);font:var(--efs-font-body-xs, 600 0.75rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.34),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 20%);transition:opacity 180ms ease,
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {right:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(0.35rem);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {left:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(-0.35rem);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {top:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(-0.35rem);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {bottom:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(0.35rem);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;right:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:right center;padding-right:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;left:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:left center;padding-left:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {left:50%;min-width:max-content;padding-inline:0.85rem;transform-origin:center center;}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {bottom:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock-button.svelte-5ypgve:hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock-button.svelte-5ypgve:focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='always'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='hidden'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {display:inline-flex;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateY(-50%) scaleX(1);}.tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateX(-50%) scaleX(1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-label-mode='always'][data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='always'][data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}.tool-dock[data-label-mode='always'][data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='always'][data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}

  @media (max-width: 47.99rem) {.tool-dock-tooltip.svelte-5ypgve {display:none;}.tool-dock-popout.svelte-5ypgve {display:none !important;}
  }`
};
function rs(e, t) {
  dn(t, !0), Ni(e, Ji);
  const r = 6, n = 0.08, o = 0.92;
  let s = kt(t, "items", 23, () => []), a = kt(t, "position", 23, () => ({ edge: "right", ratio: 0.84 })), i = kt(t, "labelMode", 7, "hover"), d = kt(t, "onActivate", 7), l = kt(t, "onRemove", 7), f = kt(t, "onPositionChange", 7), p = /* @__PURE__ */ Y(null), h = /* @__PURE__ */ Y(null), v = /* @__PURE__ */ Y(null);
  function u(T) {
    return Math.max(n, Math.min(o, T));
  }
  function _(T, L) {
    return { edge: T, ratio: u(L) };
  }
  function S(T, L) {
    var yt;
    if (typeof window > "u")
      return g(p) ?? _(a().edge, a().ratio);
    const be = Math.max(window.innerWidth, 1), He = Math.max(window.innerHeight, 1), $e = {
      left: T,
      right: be - T,
      top: L,
      bottom: He - L
    }, U = ((yt = Object.entries($e).sort((Bt, Pr) => Bt[1] - Pr[1])[0]) == null ? void 0 : yt[0]) ?? (g(p) ?? _(a().edge, a().ratio)).edge;
    return U === "left" || U === "right" ? _(U, L / He) : _(U, T / be);
  }
  function $(T, L) {
    L.button === 0 && C(
      h,
      {
        itemId: T,
        pointerId: L.pointerId,
        startX: L.clientX,
        startY: L.clientY,
        dragging: !1
      },
      !0
    );
  }
  function m(T) {
    var He;
    if (!g(h) || T.pointerId !== g(h).pointerId)
      return;
    const L = Math.hypot(T.clientX - g(h).startX, T.clientY - g(h).startY) >= r;
    if (!g(h).dragging && !L)
      return;
    g(h).dragging || (C(h, { ...g(h), dragging: !0 }, !0), C(v, g(h).itemId, !0));
    const be = S(T.clientX, T.clientY);
    C(p, be, !0), (He = f()) == null || He(be);
  }
  function w(T) {
    var be;
    if (!g(h) || T.pointerId !== g(h).pointerId)
      return;
    const L = g(h).itemId;
    g(h).dragging ? ((be = f()) == null || be(g(k)), typeof window < "u" && window.requestAnimationFrame(() => {
      g(v) === L && C(v, null), C(p, null);
    })) : C(p, null), C(h, null);
  }
  function z(T) {
    var L;
    if (g(v) === T) {
      C(v, null);
      return;
    }
    (L = d()) == null || L(T);
  }
  let k = /* @__PURE__ */ ze(() => g(p) ?? _(a().edge, a().ratio)), q = /* @__PURE__ */ ze(() => g(k).edge === "left" || g(k).edge === "right" ? `${(g(k).ratio * 100).toFixed(3)}%` : void 0), wt = /* @__PURE__ */ ze(() => g(k).edge === "top" || g(k).edge === "bottom" ? `${(g(k).ratio * 100).toFixed(3)}%` : void 0), ve = /* @__PURE__ */ ze(() => g(k).edge === "top" ? "var(--efs-dock-offset, 1rem)" : void 0), le = /* @__PURE__ */ ze(() => g(k).edge === "right" ? "var(--efs-dock-offset, 1rem)" : void 0), bt = /* @__PURE__ */ ze(() => g(k).edge === "bottom" ? "var(--efs-dock-offset, 1rem)" : void 0), we = /* @__PURE__ */ ze(() => g(k).edge === "left" ? "var(--efs-dock-offset, 1rem)" : void 0), Tr = /* @__PURE__ */ ze(() => g(k).edge === "left" || g(k).edge === "right" ? "translateY(-100%)" : "translateX(-50%)");
  var Rr = {
    get items() {
      return s();
    },
    set items(T = []) {
      s(T), nt();
    },
    get position() {
      return a();
    },
    set position(T = { edge: "right", ratio: 0.84 }) {
      a(T), nt();
    },
    get labelMode() {
      return i();
    },
    set labelMode(T = "hover") {
      i(T), nt();
    },
    get onActivate() {
      return d();
    },
    set onActivate(T) {
      d(T), nt();
    },
    get onRemove() {
      return l();
    },
    set onRemove(T) {
      l(T), nt();
    },
    get onPositionChange() {
      return f();
    },
    set onPositionChange(T) {
      f(T), nt();
    }
  }, $n = Ko();
  Lr("pointermove", Yt, m), Lr("pointerup", Yt, w), Lr("pointercancel", Yt, w);
  var is = Oo($n);
  {
    var as = (T) => {
      var L = Ki();
      let be, He;
      Ci(L, 21, s, ($e) => $e.id, ($e, U) => {
        var yt = Zi(), Bt = ir(yt), Pr = ir(Bt, !0);
        Vt(Bt);
        var Ue = zr(Bt, 2);
        let xn;
        var Ar = ir(Ue), ls = ir(Ar, !0);
        Vt(Ar);
        var ds = zr(Ar, 2);
        let En;
        Vt(Ue);
        var cs = zr(Ue, 2);
        {
          var fs = (Wt) => {
            var or = qi();
            Cr(() => {
              _t(or, "aria-label", `Remove ${g(U).label}`), _t(or, "title", `Remove ${g(U).label}`);
            }), Dr("click", or, (us) => {
              us.stopPropagation(), l()(g(U).id);
            }), St(Wt, or);
          };
          nn(cs, (Wt) => {
            l() && Wt(fs);
          });
        }
        Vt(yt), Cr(() => {
          Nn(Pr, g(U).label), xn = Gn(Ue, 1, "tool-dock-button svelte-5ypgve", null, xn, { "is-active": g(U).active }), _t(Ue, "aria-label", g(U).label), _t(Ue, "title", g(U).label), Nn(ls, g(U).label), En = Fn(ds, "", En, { "--icon-mask": g(U).iconMask });
        }), Dr("pointerdown", Ue, (Wt) => $(g(U).id, Wt)), Dr("click", Ue, () => z(g(U).id)), St($e, yt);
      }), Vt(L), Cr(
        ($e) => {
          be = Gn(L, 1, "tool-dock svelte-5ypgve", null, be, $e), _t(L, "data-edge", g(k).edge), _t(L, "data-label-mode", i()), He = Fn(L, "", He, {
            top: g(q) ?? g(ve),
            left: g(wt) ?? g(we),
            right: g(le),
            bottom: g(bt),
            transform: g(Tr)
          });
        },
        [
          () => {
            var $e;
            return { "is-dragging": !!(($e = g(h)) != null && $e.dragging) };
          }
        ]
      ), St(T, L);
    };
    nn(is, (T) => {
      s().length > 0 && T(as);
    });
  }
  return St(e, $n), cn(Rr);
}
$i(["pointerdown", "click"]);
ts(
  rs,
  {
    items: {},
    position: {},
    labelMode: {},
    onActivate: {},
    onRemove: {},
    onPositionChange: {}
  },
  [],
  [],
  { mode: "open" }
);
const Sn = "efsdb:window-settings", Un = {
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
      chromeTexture: !1,
      chromeBeamStyle: "none",
      chromeBeamIntensity: 0,
      chromeGlossStyle: "none",
      chromeGlossIntensity: 64,
      chromeGlossSpacing: 18,
      chromeColorize: !1,
      chromeColorSource: "accent",
      chromeColorIntensity: 48,
      alignment: "center",
      titleTone: "auto",
      titleEffect: "auto",
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
      chromeTexture: !0,
      chromeBeamStyle: "windows-7",
      chromeBeamIntensity: 90,
      chromeGlossStyle: "windows-7",
      chromeGlossIntensity: 54,
      chromeGlossSpacing: 18,
      chromeColorize: !1,
      chromeColorSource: "accent",
      chromeColorIntensity: 42,
      alignment: "center",
      titleTone: "dark",
      titleEffect: "glow",
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
      chromeTexture: !0,
      chromeBeamStyle: "vista",
      chromeBeamIntensity: 96,
      chromeGlossStyle: "vista",
      chromeGlossIntensity: 60,
      chromeGlossSpacing: 20,
      chromeColorize: !0,
      chromeColorSource: "accent",
      chromeColorIntensity: 68,
      alignment: "center",
      titleTone: "dark",
      titleEffect: "glow",
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
      chromeTexture: !0,
      chromeBeamStyle: "mica",
      chromeBeamIntensity: 74,
      chromeGlossStyle: "mica",
      chromeGlossIntensity: 58,
      chromeGlossSpacing: 26,
      alignment: "center",
      titleTone: "light",
      titleEffect: "shadow",
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
      titleTone: "light",
      titleEffect: "plain",
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
      titleTone: "light",
      titleEffect: "shadow",
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
      titleTone: "dark",
      titleEffect: "shadow",
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
      chromeTexture: !0,
      chromeBeamStyle: "windows-9x",
      chromeBeamIntensity: 86,
      chromeGlossStyle: "none",
      chromeGlossIntensity: 0,
      alignment: "left",
      titleTone: "light",
      titleEffect: "emboss",
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
      titleTone: "dark",
      titleEffect: "shadow",
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
      titleTone: "light",
      titleEffect: "shadow",
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
      titleTone: "light",
      titleEffect: "plain",
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
      titleTone: "light",
      titleEffect: "plain",
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
      titleTone: "light",
      titleEffect: "shadow",
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
      titleTone: "light",
      titleEffect: "plain",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "linux-system"
    }
  }
}, Yn = {
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
}, A = {
  buttonLayout: "windows-11",
  systemButtonPlacement: "right",
  sideResizeMode: "anchored",
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
  chromeStyle: "solid",
  chromeTexture: !1,
  chromeBeamStyle: "none",
  chromeBeamIntensity: 0,
  chromeGlossStyle: "none",
  chromeGlossIntensity: 68,
  chromeGlossSpacing: 18,
  chromeColorize: !1,
  chromeColorSource: "accent",
  chromeColorIntensity: 48,
  alignment: "center",
  titleTone: "auto",
  titleEffect: "auto",
  snapRestoreOnRelease: !1,
  shiftDragAction: "pin",
  themePreset: "inherit",
  fontPreset: "system",
  globalEdgeDock: !0,
  dockButtonSize: 50,
  dockButtonWidth: 50,
  dockIconScale: 100,
  dockGap: 10,
  dockOffset: 16,
  dockLabelMode: "hover",
  pageThemeSpread: "contained"
}, wr = /* @__PURE__ */ new Set();
let Re = os();
function Qi(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function ea(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function ta(e) {
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
      return A.buttonLayout;
  }
}
function ra(e) {
  return e === "left" ? "left" : A.systemButtonPlacement;
}
function na(e) {
  return e === "mirrored" ? "mirrored" : A.sideResizeMode;
}
function oa(e) {
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
      return A.themePreset;
  }
}
function sa(e) {
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
      return A.fontPreset;
  }
}
function ia(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return A.shiftDragAction;
  }
}
function aa(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return A.chromeColorSource;
  }
}
function la(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return A.chromeGlossStyle;
  }
}
function da(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "xp-luna":
    case "windows-9x":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return A.chromeBeamStyle;
  }
}
function ca(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return A.titleTone;
  }
}
function fa(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return A.titleEffect;
  }
}
function ua(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return A.dockLabelMode;
  }
}
function ha(e) {
  return e === "expanded" ? "expanded" : A.pageThemeSpread;
}
function ee(e, t, r, n) {
  const o = Number(e);
  return Number.isFinite(o) ? Math.max(r, Math.min(n, Math.round(o))) : t;
}
function ns(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : da(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : la(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: ta(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: ra(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: na(e == null ? void 0 : e.sideResizeMode),
    borderWidth: ee(
      e == null ? void 0 : e.borderWidth,
      A.borderWidth,
      0,
      12
    ),
    borderRadius: ee(
      e == null ? void 0 : e.borderRadius,
      A.borderRadius,
      0,
      32
    ),
    chromePadding: ee(
      e == null ? void 0 : e.chromePadding,
      A.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : A.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : A.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: ee(
      e == null ? void 0 : e.chromeBeamIntensity,
      A.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: ee(
      e == null ? void 0 : e.chromeGlossIntensity,
      A.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: ee(
      e == null ? void 0 : e.chromeGlossSpacing,
      A.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : A.chromeColorize,
    chromeColorSource: aa(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: ee(
      e == null ? void 0 : e.chromeColorIntensity,
      A.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : A.alignment,
    titleTone: ca(e == null ? void 0 : e.titleTone),
    titleEffect: fa(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : A.snapRestoreOnRelease,
    shiftDragAction: ia(e == null ? void 0 : e.shiftDragAction),
    themePreset: oa(e == null ? void 0 : e.themePreset),
    fontPreset: sa(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : A.globalEdgeDock,
    dockButtonSize: ee(
      e == null ? void 0 : e.dockButtonSize,
      A.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: ee(
      e == null ? void 0 : e.dockButtonWidth,
      A.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: ee(
      e == null ? void 0 : e.dockIconScale,
      A.dockIconScale,
      70,
      160
    ),
    dockGap: ee(e == null ? void 0 : e.dockGap, A.dockGap, 4, 24),
    dockOffset: ee(e == null ? void 0 : e.dockOffset, A.dockOffset, 8, 36),
    dockLabelMode: ua(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: ha(e == null ? void 0 : e.pageThemeSpread)
  };
}
function pa(e) {
  return (Un[e] ?? Un.inherit).shadow;
}
function ga(e) {
  switch (e) {
    case "accent-strong":
      return "var(--accent-strong, color-mix(in srgb, var(--accent, #5b8cff), black 16%))";
    case "accent-soft":
      return "var(--accent-soft, color-mix(in srgb, var(--accent, #5b8cff), white 78%))";
    case "accent-secondary":
      return "var(--accent-secondary, color-mix(in srgb, var(--accent, #5b8cff), #8b5cf6 34%))";
    case "accent-secondary-soft":
      return "var(--accent-secondary-soft, color-mix(in srgb, var(--accent-secondary, color-mix(in srgb, var(--accent, #5b8cff), #8b5cf6 34%)), white 78%))";
    case "accent":
    default:
      return "var(--accent, var(--shell-primary, #5b8cff))";
  }
}
function ma(e) {
  const t = e.chromeTexture ? Math.max(0, Math.min(1, e.chromeBeamIntensity / 100)) : 0, r = e.chromeTexture ? e.chromeBeamStyle : "none", o = `${(r === "vista" ? 0.98 : r === "windows-7" ? 0.94 : r === "xp-luna" ? 0.82 : r === "windows-9x" ? 0.72 : r === "kde" ? 0.7 : r === "mica" ? 0.62 : 0) * t}`, s = Math.max(0, Math.min(1, e.chromeGlossIntensity / 100)), a = e.chromeColorize ? `${Math.max(0, Math.min(0.88, e.chromeColorIntensity / 100))}` : "0", i = ga(e.chromeColorSource), d = {
    "--efs-window-chrome-texture-opacity": o,
    "--efs-window-chrome-beam-intensity": `${t}`,
    "--efs-window-chrome-gloss-intensity": `${s}`,
    "--efs-window-chrome-gloss-spacing": `${e.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": a,
    "--efs-window-chrome-tint": i,
    "--efs-widget-chrome-texture-opacity": o,
    "--efs-widget-chrome-beam-intensity": `${t}`,
    "--efs-widget-chrome-gloss-intensity": `${s}`,
    "--efs-widget-chrome-gloss-spacing": `${e.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": a,
    "--efs-widget-theme-tint": i
  };
  if (!e.chromeColorize)
    return d;
  const l = ee(e.chromeColorIntensity, 48, 0, 100), f = Math.round(l / 100 * 34), p = Math.round(l / 100 * 26), h = Math.round(10 + l / 100 * 46), v = Math.round(6 + l / 100 * 32), u = Math.round(l / 100 * 28), _ = Math.round(l / 100 * 22), S = Math.round(12 + l / 100 * 46), $ = Math.round(10 + l / 100 * 34), m = Math.round(90 - l / 100 * 16), w = Math.round(92 - l / 100 * 18);
  return d["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - f}%, ${i} ${f}%)`, d["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - p}%, ${i} ${p}%)`, d["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - h}%, ${i} ${h}%)`, d["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - v}%, ${i} ${v}%)`, d["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${i}, transparent ${m}%), var(--efs-window-shell-shadow)`, d["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - u}%, ${i} ${u}%)`, d["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - _}%, ${i} ${_}%)`, d["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - S}%, ${i} ${S}%)`, d["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - $}%, ${i} ${$}%)`, d["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${i}, transparent ${w}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, d;
}
function os() {
  const e = Qi(Sn);
  if (!e)
    return jt(A), { ...A };
  try {
    const t = JSON.parse(e), r = ns(t);
    return jt(r), r;
  } catch {
    return jt(A), { ...A };
  }
}
function va(e) {
  if (!e)
    return [];
  const t = [e], r = /* @__PURE__ */ new Set();
  for (; t.length > 0; ) {
    const n = t.shift();
    if (!(!n || r.has(n))) {
      r.add(n);
      try {
        const o = n.parent;
        o && o !== n && !r.has(o) && t.push(o);
      } catch {
      }
      try {
        for (let o = 0; o < n.frames.length; o += 1) {
          const s = n.frames[o];
          s && !r.has(s) && t.push(s);
        }
      } catch {
      }
    }
  }
  return [...r];
}
function Wr(e, t) {
  const r = e.documentElement.style, n = e.documentElement, o = t.chromeGlossStyle, s = t.chromeTexture ? t.chromeBeamStyle : "none", a = Math.max(t.dockButtonSize, t.dockButtonWidth), i = Yn[t.fontPreset] ?? Yn.system, d = pa(t.themePreset), l = ma(t), f = [
    "--efs-window-chrome-texture-opacity",
    "--efs-window-chrome-beam-intensity",
    "--efs-window-chrome-gloss-intensity",
    "--efs-window-chrome-gloss-spacing",
    "--efs-window-chrome-colorize-opacity",
    "--efs-window-chrome-tint",
    "--efs-window-theme-panel",
    "--efs-window-theme-surface",
    "--efs-window-theme-border",
    "--efs-window-theme-shadow",
    "--efs-window-theme-hover",
    "--efs-widget-chrome-texture-opacity",
    "--efs-widget-chrome-beam-intensity",
    "--efs-widget-chrome-gloss-intensity",
    "--efs-widget-chrome-gloss-spacing",
    "--efs-widget-chrome-colorize-opacity",
    "--efs-widget-theme-tint",
    "--efs-widget-theme-panel",
    "--efs-widget-theme-surface",
    "--efs-widget-theme-border",
    "--efs-widget-theme-shadow",
    "--efs-widget-theme-hover"
  ];
  r.setProperty("--efs-font-sans", i.stack), r.setProperty("--shell-font-sans", i.stack), r.setProperty("--efs-window-font-family", i.stack), r.setProperty("--efs-window-border-width", `${t.borderWidth}px`), r.setProperty("--efs-window-radius", `${t.borderRadius}px`), r.setProperty("--efs-window-chrome-padding", `${t.chromePadding}px`), r.setProperty("--efs-window-system-button-placement", t.systemButtonPlacement), r.setProperty("--efs-window-side-resize-mode", t.sideResizeMode), r.setProperty("--efs-window-shell-shadow", d), r.setProperty("--efs-widget-border-width", `${t.borderWidth}px`), r.setProperty("--efs-widget-radius", `${t.borderRadius}px`), r.setProperty("--efs-widget-chrome-padding", `${t.chromePadding}px`), r.setProperty("--efs-widget-shadow", d), r.setProperty("--efs-dock-button-size", `${t.dockButtonSize}px`), r.setProperty("--efs-dock-button-width", `${a}px`), r.setProperty("--efs-dock-gap", `${t.dockGap}px`), r.setProperty("--efs-dock-offset", `${t.dockOffset}px`), r.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(t.dockButtonSize * 0.39))}px`
  ), r.setProperty("--efs-dock-icon-scale", `${t.dockIconScale / 100}`), r.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(a + t.dockButtonSize * 1.8))}px`
  ), r.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(t.dockButtonSize * 0.31))}px`
  ), r.setProperty("--efs-dock-label-mode", t.dockLabelMode), r.setProperty("--efs-dock-global-enabled", t.globalEdgeDock ? "1" : "0"), r.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), r.setProperty("--efs-page-theme-spread", t.pageThemeSpread), n.setAttribute("data-efs-page-theme", t.pageThemeSpread), n.setAttribute("data-efs-window-gloss", o), n.setAttribute("data-efs-window-beam", s), f.forEach((p) => r.removeProperty(p)), Object.entries(l).forEach(([p, h]) => r.setProperty(p, h));
}
function jt(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    Wr(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = va(t);
  if (r.length === 0) {
    Wr(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      Wr(n.document, e);
    } catch {
    }
  });
}
function wa() {
  return Re;
}
function ba(e) {
  Re = ns({
    ...Re,
    ...e
  }), jt(Re), ea(Sn, JSON.stringify(Re)), wr.forEach((t) => t(Re));
}
function ya(e) {
  return wr.add(e), e(Re), () => {
    wr.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  jt(Re);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || ba(t);
}), window.addEventListener("storage", (e) => {
  e.key === Sn && (Re = os(), wr.forEach((t) => t(Re)));
}));
const jn = "/_efsdb/admin", Vr = "efsdb:admin:global:edge-dock-widgets", Gr = "efsdb:admin:global:edge-dock-state", _a = "efsdb:admin:global:edge-dock-open-request";
function ka(e, t = !0) {
  return {
    widgetId: e,
    pinned: t,
    issuedAt: Date.now(),
    source: "global-dock"
  };
}
const b = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, y = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, Xn = (e) => `<g fill="#000">${e}</g>`, Ma = {
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
        svg: b(
          y(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: b(
          y(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: b(
          `${Xn('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${y(
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
        svg: b(
          y(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          `${y('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${Xn(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: b(
          y('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: b(
          y(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: b(
          y('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: b(
          y(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: b(y('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: b(
          y(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: b(
          y('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: b(y('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: b(
          y(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: b(y('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: b(
          y(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: b(
          y(
            '<path d="M4.75 7h10.5v6H4.75z"/><path d="M15.75 4.75v10.5"/><path d="M7 10h6"/>',
            "1.45"
          )
        )
      }
    }
  },
  dock: {
    id: "dock",
    label: "Dock",
    category: "widget",
    defaultVariant: "signature",
    variants: {
      signature: {
        id: "signature",
        label: "Pinned dock",
        tone: "signature",
        svg: b(
          y(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: b(
          y(
            '<path d="M4.75 6.75h10.5v6.5H4.75z"/><path d="M6.5 9.5h1.5"/><path d="M9.25 9.5h1.5"/><path d="M12 9.5h1.5"/><path d="M4.75 13.25h10.5"/>',
            "1.35"
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
        svg: b(
          y(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: b(
          y('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: b(
          y('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: b(
          y('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: b(y('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: b(y('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: b(y('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: b(y('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: b(y('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: b(y('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: b(y('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: b(
          y('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: b(
          y('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: b(
          y('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: b(y('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: b(y('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Sa(e, t) {
  const r = Ma[e], n = r.variants;
  return (n[r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const qn = /* @__PURE__ */ new Map();
function $a(e, t) {
  const r = `${e}:default`, n = qn.get(r);
  if (n)
    return n;
  const o = Sa(e), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return qn.set(r, s), s;
}
const ss = [
  "create-user",
  "user-directory",
  "create-role",
  "role-directory",
  "display-mode",
  "window-preferences",
  "dock-preferences",
  "settings-payload",
  "catalog-search",
  "catalog-results",
  "catalog-facets"
], xa = {
  "create-user": "create-user",
  "user-directory": "user-directory",
  "create-role": "create-role",
  "role-directory": "role-directory",
  "display-mode": "display-mode",
  "window-preferences": "window-preferences",
  "dock-preferences": "dock",
  "settings-payload": "settings-payload",
  "catalog-search": "catalog-search",
  "catalog-results": "catalog-results",
  "catalog-facets": "catalog-facets"
}, Ea = ss.reduce(
  (e, t) => (e[t] = $a(xa[t]), e),
  {}
), Ta = {
  "create-user": {
    label: "Create user",
    barLabel: "Create",
    presentation: "icon",
    group: "Provisioning",
    summary: "Open the account creator and focus the provisioning form immediately."
  },
  "user-directory": {
    label: "Users",
    barLabel: "Users",
    presentation: "label",
    group: "Records",
    summary: "Open the user directory, restore it if minimized, and keep active accounts in view."
  },
  "create-role": {
    label: "Create role",
    barLabel: "Role",
    presentation: "icon",
    group: "Provisioning",
    summary: "Open the role composer so custom tenant permissions can be assembled quickly."
  },
  "role-directory": {
    label: "Role catalog",
    barLabel: "Roles",
    presentation: "label",
    group: "Records",
    summary: "Open the role catalog and review presets, operator locks, and entitlement coverage."
  },
  "display-mode": {
    label: "Display mode",
    barLabel: "Modes",
    presentation: "icon",
    group: "Context",
    summary: "Open display mode switching to move between available operating contexts."
  },
  "window-preferences": {
    label: "Window manager",
    barLabel: "Windows",
    presentation: "label",
    group: "Windowing",
    summary: "Open the staged window manager preview and apply chrome changes only when ready."
  },
  "dock-preferences": {
    label: "Pinned dock",
    barLabel: "Dock",
    presentation: "icon",
    group: "Windowing",
    summary: "Adjust pinned tool behavior, label reveal, button size, and cross-page dock presence."
  },
  "settings-payload": {
    label: "Settings payload",
    barLabel: "Payload",
    presentation: "icon",
    group: "System",
    summary: "Inspect the live settings payload and verify the control-plane contract in raw form."
  },
  "catalog-search": {
    label: "Discovery",
    barLabel: "Search",
    presentation: "label",
    group: "Search",
    summary: "Open the discovery launcher to search workspace resources and system records."
  },
  "catalog-results": {
    label: "Search results",
    barLabel: "Results",
    presentation: "icon",
    group: "Search",
    summary: "Open the search results surface and review the active discovery response set."
  },
  "catalog-facets": {
    label: "Facet distribution",
    barLabel: "Facets",
    presentation: "icon",
    group: "Search",
    summary: "Open facet distribution to scan counts and narrow large result sets quickly."
  }
};
function Ra(e, t) {
  dn(t, !0);
  const r = t.$$host;
  let n = /* @__PURE__ */ Y(Fe([])), o = /* @__PURE__ */ Y(Fe({ edge: "right", ratio: 0.84 })), s = /* @__PURE__ */ Y(Fe(wa())), a = /* @__PURE__ */ Y(!1), i = /* @__PURE__ */ Y(!1), d = /* @__PURE__ */ ze(() => g(a) && !g(i) && g(s).globalEdgeDock && g(n).length > 0);
  function l(m) {
    return typeof m == "string" && ss.includes(m);
  }
  function f() {
    if (typeof localStorage > "u")
      return [];
    try {
      const m = localStorage.getItem(Vr);
      if (!m)
        return [];
      const w = JSON.parse(m);
      if (!Array.isArray(w))
        return [];
      const z = /* @__PURE__ */ new Set();
      return w.flatMap((k) => !l(k) || z.has(k) ? [] : (z.add(k), [
        {
          id: k,
          label: Ta[k].label,
          iconMask: Ea[k],
          active: !1
        }
      ]));
    } catch {
      return [];
    }
  }
  function p() {
    if (typeof localStorage > "u")
      return { edge: "right", ratio: 0.84 };
    try {
      const m = localStorage.getItem(Gr);
      if (!m)
        return { edge: "right", ratio: 0.84 };
      const w = JSON.parse(m), z = w.edge === "left" || w.edge === "right" || w.edge === "top" || w.edge === "bottom" ? w.edge : "right", k = Number(w.ratio);
      return {
        edge: z,
        ratio: Number.isFinite(k) ? Math.max(0.08, Math.min(0.92, k)) : 0.84
      };
    } catch {
      return { edge: "right", ratio: 0.84 };
    }
  }
  function h() {
    C(n, f(), !0), C(o, p(), !0);
  }
  function v(m) {
    var k;
    typeof localStorage < "u" && localStorage.setItem(_a, JSON.stringify(ka(m, !0)));
    const w = new URL(jn, window.location.origin), z = window.open(w.toString(), "efsdb-admin-global");
    (k = z == null ? void 0 : z.focus) == null || k.call(z);
  }
  function u(m) {
    if (typeof localStorage > "u")
      return;
    const w = g(n).filter((z) => z.id !== m).map((z) => z.id);
    localStorage.setItem(Vr, JSON.stringify(w)), C(n, f(), !0);
  }
  Oi(() => {
    try {
      C(a, window.top === window);
    } catch {
      C(a, !1);
    }
    C(i, window.location.pathname.startsWith(jn), !0), r.setAttribute("theme", document.documentElement.dataset.theme ?? "light"), h();
    const m = ya((k) => {
      C(s, k, !0);
    }), w = (k) => {
      (k.key === Vr || k.key === Gr) && h();
    }, z = (k) => {
      const q = k.detail;
      q != null && q.theme && r.setAttribute("theme", q.theme);
    };
    return window.addEventListener("storage", w), window.addEventListener("efsdb-themechange", z), () => {
      window.removeEventListener("storage", w), window.removeEventListener("efsdb-themechange", z), m();
    };
  });
  var _ = Ko(), S = Oo(_);
  {
    var $ = (m) => {
      rs(m, {
        get items() {
          return g(n);
        },
        get position() {
          return g(o);
        },
        get labelMode() {
          return g(s).dockLabelMode;
        },
        onActivate: (w) => {
          l(w) && v(w);
        },
        onRemove: (w) => {
          l(w) && u(w);
        },
        onPositionChange: (w) => {
          C(o, w, !0), typeof localStorage < "u" && localStorage.setItem(Gr, JSON.stringify(w));
        }
      });
    };
    nn(S, (m) => {
      g(d) && m($);
    });
  }
  St(e, _), cn();
}
customElements.define("efsdb-admin-dock", ts(Ra, {}, [], [], { mode: "open" }));
