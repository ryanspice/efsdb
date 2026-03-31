var Fi = Object.defineProperty;
var ln = (e) => {
  throw TypeError(e);
};
var Di = (e, t, r) => t in e ? Fi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var N = (e, t, r) => Di(e, typeof t != "symbol" ? t + "" : t, r), xr = (e, t, r) => t.has(e) || ln("Cannot " + r);
var u = (e, t, r) => (xr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), x = (e, t, r) => t.has(e) ? ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (xr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (xr(e, t, "access private method"), r);
var kn;
typeof window < "u" && ((kn = window.__svelte ?? (window.__svelte = {})).v ?? (kn.v = /* @__PURE__ */ new Set())).add("5");
const Li = 1, Bi = 2, ji = 16, zi = 1, Hi = 4, Vi = 8, Ui = 16, Yi = 1, qi = 2, An = "[", Hr = "[!", an = "[?", Vr = "]", kt = {}, H = Symbol(), Cn = "http://www.w3.org/1999/xhtml", Wi = !1;
var Nn = Array.isArray, Gi = Array.prototype.indexOf, St = Array.prototype.includes, vr = Array.from, lr = Object.keys, ar = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, Ki = Object.getOwnPropertyDescriptors, Ji = Object.prototype, Xi = Array.prototype, Rn = Object.getPrototypeOf, on = Object.isExtensible;
const Zi = () => {
};
function Qi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Mn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const j = 2, Tt = 4, pr = 8, Pn = 1 << 24, Xe = 16, xe = 32, Ge = 64, Ar = 128, fe = 512, L = 1024, U = 2048, Ae = 4096, ne = 8192, ue = 16384, Ze = 32768, fn = 1 << 25, At = 65536, un = 1 << 17, es = 1 << 18, vt = 1 << 19, ts = 1 << 20, Be = 1 << 25, dt = 65536, Cr = 1 << 21, Ur = 1 << 22, qe = 1 << 23, er = Symbol("$state"), On = Symbol("legacy props"), rs = Symbol(""), Pe = new class extends Error {
  constructor() {
    super(...arguments);
    N(this, "name", "StaleReactionError");
    N(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Sn;
const ns = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Sn = globalThis.document) != null && Sn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), _r = 3, Wt = 8;
function is() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ss(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ls(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function us() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function cs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function _s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let A = !1;
function je(e) {
  A = e;
}
let k;
function J(e) {
  if (e === null)
    throw gr(), kt;
  return k = e;
}
function mr() {
  return J(/* @__PURE__ */ Ne(k));
}
function se(e) {
  if (A) {
    if (/* @__PURE__ */ Ne(k) !== null)
      throw gr(), kt;
    k = e;
  }
}
function gs(e = 1) {
  if (A) {
    for (var t = e, r = k; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r);
    k = r;
  }
}
function or(e = !0) {
  for (var t = 0, r = k; ; ) {
    if (r.nodeType === Wt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Vr) {
        if (t === 0) return r;
        t -= 1;
      } else (n === An || n === Hr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    );
    e && r.remove(), r = i;
  }
}
function In(e) {
  if (!e || e.nodeType !== Wt)
    throw gr(), kt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Fn(e) {
  return e === this.v;
}
function ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Dn(e) {
  return !ms(e, this.v);
}
let ws = !1, de = null;
function Ct(e) {
  de = e;
}
function Ln(e, t = !1, r) {
  de = {
    p: de,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      S
    ),
    l: null
  };
}
function Bn(e) {
  var t = (
    /** @type {ComponentContext} */
    de
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      di(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, de = t.p, e ?? /** @type {T} */
  {};
}
function jn() {
  return !0;
}
let tt = [];
function zn() {
  var e = tt;
  tt = [], Qi(e);
}
function ft(e) {
  if (tt.length === 0 && !Lt) {
    var t = tt;
    queueMicrotask(() => {
      t === tt && zn();
    });
  }
  tt.push(e);
}
function bs() {
  for (; tt.length > 0; )
    zn();
}
function Hn(e) {
  var t = S;
  if (t === null)
    return E.f |= qe, e;
  if ((t.f & Ze) === 0 && (t.f & Tt) === 0)
    throw e;
  Ye(e, t);
}
function Ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ar) !== 0) {
      if ((t.f & Ze) === 0)
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
const ys = -7169;
function M(e, t) {
  e.f = e.f & ys | t;
}
function Yr(e) {
  (e.f & fe) !== 0 || e.deps === null ? M(e, L) : M(e, Ae);
}
function Vn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & dt) === 0 || (t.f ^= dt, Vn(
        /** @type {Derived} */
        t.deps
      ));
}
function Un(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && r.add(e), Vn(e.deps), M(e, L);
}
let Kt = !1;
function $s(e) {
  var t = Kt;
  try {
    return Kt = !1, [e(), Kt];
  } finally {
    Kt = t;
  }
}
const Qe = /* @__PURE__ */ new Set();
let y = null, V = null, Nr = null, Lt = !1, Er = !1, _t = null, tr = null;
var cn = 0;
let xs = 1;
var wt, bt, yt, $t, zt, Q, it, Oe, Ie, xt, Y, Rr, Mr, Pr, Or, Yn;
const cr = class cr {
  constructor() {
    x(this, Y);
    // for debugging. TODO remove once async is stable
    N(this, "id", xs++);
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
    x(this, wt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, bt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    x(this, yt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    x(this, $t, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, zt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    x(this, Q, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    x(this, it, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    x(this, Oe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    x(this, Ie, /* @__PURE__ */ new Map());
    N(this, "is_fork", !1);
    x(this, xt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, Ie).has(t) || u(this, Ie).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = u(this, Ie).get(t);
    if (r) {
      u(this, Ie).delete(t);
      for (var n of r.d)
        M(n, U), this.schedule(n);
      for (n of r.m)
        M(n, Ae), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== H && !this.previous.has(t) && this.previous.set(t, r), (t.f & qe) === 0 && (this.current.set(t, t.v), V == null || V.set(t, t.v));
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, V = null;
  }
  flush() {
    try {
      Er = !0, y = this, C(this, Y, Mr).call(this);
    } finally {
      cn = 0, Nr = null, _t = null, tr = null, Er = !1, y = null, V = null, We.clear();
    }
  }
  discard() {
    for (const t of u(this, bt)) t(this);
    u(this, bt).clear(), Qe.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    w(this, yt, u(this, yt) + 1), t && w(this, $t, u(this, $t) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    w(this, yt, u(this, yt) - 1), t && w(this, $t, u(this, $t) - 1), !(u(this, xt) || r) && (w(this, xt, !0), ft(() => {
      w(this, xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      u(this, it).add(n);
    for (const n of r)
      u(this, Oe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    u(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, bt).add(t);
  }
  settled() {
    return (u(this, zt) ?? w(this, zt, Mn())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new cr();
      Er || (Qe.add(y), Lt || ft(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      V = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Nr = t, (i = t.b) != null && i.is_pending && (t.f & (Tt | pr | Pn)) !== 0 && (t.f & Ze) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (_t !== null && r === S && (E === null || (E.f & j) === 0))
        return;
      if ((n & (Ge | xe)) !== 0) {
        if ((n & L) === 0)
          return;
        r.f ^= L;
      }
    }
    u(this, Q).push(r);
  }
};
wt = new WeakMap(), bt = new WeakMap(), yt = new WeakMap(), $t = new WeakMap(), zt = new WeakMap(), Q = new WeakMap(), it = new WeakMap(), Oe = new WeakMap(), Ie = new WeakMap(), xt = new WeakMap(), Y = new WeakSet(), Rr = function() {
  return this.is_fork || u(this, $t) > 0;
}, Mr = function() {
  var l, f;
  if (cn++ > 1e3 && (Qe.delete(this), Es()), !C(this, Y, Rr).call(this)) {
    for (const o of u(this, it))
      u(this, Oe).delete(o), M(o, U), this.schedule(o);
    for (const o of u(this, Oe))
      M(o, Ae), this.schedule(o);
  }
  const t = u(this, Q);
  w(this, Q, []), this.apply();
  var r = _t = [], n = [], i = tr = [];
  for (const o of t)
    try {
      C(this, Y, Pr).call(this, o, r, n);
    } catch (c) {
      throw Kn(o), c;
    }
  if (y = null, i.length > 0) {
    var s = cr.ensure();
    for (const o of i)
      s.schedule(o);
  }
  if (_t = null, tr = null, C(this, Y, Rr).call(this)) {
    C(this, Y, Or).call(this, n), C(this, Y, Or).call(this, r);
    for (const [o, c] of u(this, Ie))
      Gn(o, c);
  } else {
    u(this, yt) === 0 && Qe.delete(this), u(this, it).clear(), u(this, Oe).clear();
    for (const o of u(this, wt)) o(this);
    u(this, wt).clear(), dn(n), dn(r), (l = u(this, zt)) == null || l.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (u(this, Q).length > 0) {
    const o = a ?? (a = this);
    u(o, Q).push(...u(this, Q).filter((c) => !u(o, Q).includes(c)));
  }
  a !== null && (Qe.add(a), C(f = a, Y, Mr).call(f)), Qe.has(this) || C(this, Y, Yn).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Pr = function(t, r, n) {
  t.f ^= L;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (xe | Ge)) !== 0, l = a && (s & L) !== 0, f = l || (s & ne) !== 0 || u(this, Ie).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= L : (s & Tt) !== 0 ? r.push(i) : Gt(i) && ((s & Xe) !== 0 && u(this, Oe).add(i), Rt(i));
      var o = i.first;
      if (o !== null) {
        i = o;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Or = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Un(t[r], u(this, it), u(this, Oe));
}, Yn = function() {
  var f;
  for (const o of Qe) {
    var t = o.id < this.id, r = [];
    for (const [c, h] of this.current) {
      if (o.current.has(c))
        if (t && h !== o.current.get(c))
          o.current.set(c, h);
        else
          continue;
      r.push(c);
    }
    var n = [...o.current.keys()].filter((c) => !this.current.has(c));
    if (n.length === 0)
      t && o.discard();
    else if (r.length > 0) {
      o.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var a of r)
        qn(a, n, i, s);
      if (u(o, Q).length > 0) {
        o.apply();
        for (var l of u(o, Q))
          C(f = o, Y, Pr).call(f, l, [], []);
        w(o, Q, []);
      }
      o.deactivate();
    }
  }
};
let Ke = cr;
function et(e) {
  var t = Lt;
  Lt = !0;
  try {
    for (var r; ; ) {
      if (bs(), y === null)
        return (
          /** @type {T} */
          r
        );
      y.flush();
    }
  } finally {
    Lt = t;
  }
}
function Es() {
  try {
    fs();
  } catch (e) {
    Ye(e, Nr);
  }
}
let me = null;
function dn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ue | ne)) === 0 && Gt(n) && (me = /* @__PURE__ */ new Set(), Rt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && vi(n), (me == null ? void 0 : me.size) > 0)) {
        We.clear();
        for (const i of me) {
          if ((i.f & (ue | ne)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            me.has(a) && (me.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & (ue | ne)) === 0 && Rt(f);
          }
        }
        me.clear();
      }
    }
    me = null;
  }
}
function qn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & j) !== 0 ? qn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Ur | Xe)) !== 0 && (s & U) === 0 && Wn(i, t, n) && (M(i, U), qr(
        /** @type {Effect} */
        i
      ));
    }
}
function Wn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (St.call(t, i))
        return !0;
      if ((i.f & j) !== 0 && Wn(
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
function qr(e) {
  y.schedule(e);
}
function Gn(e, t) {
  if (!((e.f & xe) !== 0 && (e.f & L) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), M(e, L);
    for (var r = e.first; r !== null; )
      Gn(r, t), r = r.next;
  }
}
function Kn(e) {
  M(e, L);
  for (var t = e.first; t !== null; )
    Kn(t), t = t.next;
}
function ks(e) {
  let t = 0, r = ht(0), n;
  return () => {
    Xr() && (b(r), Zr(() => (t === 0 && (n = nn(() => e(() => Bt(r)))), t += 1, () => {
      ft(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Bt(r));
      });
    })));
  };
}
var Ss = At | vt;
function Ts(e, t, r, n) {
  new As(e, t, r, n);
}
var ee, Ht, ke, st, G, Se, te, we, Fe, lt, Ue, Et, Vt, Ut, De, dr, R, Jn, Xn, Zn, Ir, rr, nr, Fr;
class As {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    x(this, R);
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
    x(this, ee);
    /** @type {TemplateNode | null} */
    x(this, Ht, A ? k : null);
    /** @type {BoundaryProps} */
    x(this, ke);
    /** @type {((anchor: Node) => void)} */
    x(this, st);
    /** @type {Effect} */
    x(this, G);
    /** @type {Effect | null} */
    x(this, Se, null);
    /** @type {Effect | null} */
    x(this, te, null);
    /** @type {Effect | null} */
    x(this, we, null);
    /** @type {DocumentFragment | null} */
    x(this, Fe, null);
    x(this, lt, 0);
    x(this, Ue, 0);
    x(this, Et, !1);
    /** @type {Set<Effect>} */
    x(this, Vt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    x(this, Ut, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, De, null);
    x(this, dr, ks(() => (w(this, De, ht(u(this, lt))), () => {
      w(this, De, null);
    })));
    var s;
    w(this, ee, t), w(this, ke, r), w(this, st, (a) => {
      var l = (
        /** @type {Effect} */
        S
      );
      l.b = this, l.f |= Ar, n(a);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), w(this, G, Qr(() => {
      if (A) {
        const a = (
          /** @type {Comment} */
          u(this, Ht)
        );
        mr();
        const l = a.data === Hr;
        if (a.data.startsWith(an)) {
          const o = JSON.parse(a.data.slice(an.length));
          C(this, R, Xn).call(this, o);
        } else l ? C(this, R, Zn).call(this) : C(this, R, Jn).call(this);
      } else
        C(this, R, Ir).call(this);
    }, Ss)), A && w(this, ee, k);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Un(t, u(this, Vt), u(this, Ut));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, ke).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    C(this, R, Fr).call(this, t, r), w(this, lt, u(this, lt) + t), !(!u(this, De) || u(this, Et)) && (w(this, Et, !0), ft(() => {
      w(this, Et, !1), u(this, De) && Nt(u(this, De), u(this, lt));
    }));
  }
  get_effect_pending() {
    return u(this, dr).call(this), b(
      /** @type {Source<number>} */
      u(this, De)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, ke).onerror;
    let n = u(this, ke).failed;
    if (!r && !n)
      throw t;
    u(this, Se) && (W(u(this, Se)), w(this, Se, null)), u(this, te) && (W(u(this, te)), w(this, te, null)), u(this, we) && (W(u(this, we)), w(this, we, null)), A && (J(
      /** @type {TemplateNode} */
      u(this, Ht)
    ), gs(), J(or()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        _s();
        return;
      }
      i = !0, s && ps(), u(this, we) !== null && ut(u(this, we), () => {
        w(this, we, null);
      }), C(this, R, nr).call(this, () => {
        C(this, R, Ir).call(this);
      });
    }, l = (f) => {
      try {
        s = !0, r == null || r(f, a), s = !1;
      } catch (o) {
        Ye(o, u(this, G) && u(this, G).parent);
      }
      n && w(this, we, C(this, R, nr).call(this, () => {
        try {
          return oe(() => {
            var o = (
              /** @type {Effect} */
              S
            );
            o.b = this, o.f |= Ar, n(
              u(this, ee),
              () => f,
              () => a
            );
          });
        } catch (o) {
          return Ye(
            o,
            /** @type {Effect} */
            u(this, G).parent
          ), null;
        }
      }));
    };
    ft(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (o) {
        Ye(o, u(this, G) && u(this, G).parent);
        return;
      }
      f !== null && typeof f == "object" && typeof /** @type {any} */
      f.then == "function" ? f.then(
        l,
        /** @param {unknown} e */
        (o) => Ye(o, u(this, G) && u(this, G).parent)
      ) : l(f);
    });
  }
}
ee = new WeakMap(), Ht = new WeakMap(), ke = new WeakMap(), st = new WeakMap(), G = new WeakMap(), Se = new WeakMap(), te = new WeakMap(), we = new WeakMap(), Fe = new WeakMap(), lt = new WeakMap(), Ue = new WeakMap(), Et = new WeakMap(), Vt = new WeakMap(), Ut = new WeakMap(), De = new WeakMap(), dr = new WeakMap(), R = new WeakSet(), Jn = function() {
  try {
    w(this, Se, oe(() => u(this, st).call(this, u(this, ee))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xn = function(t) {
  const r = u(this, ke).failed;
  r && w(this, we, oe(() => {
    r(
      u(this, ee),
      () => t,
      () => () => {
      }
    );
  }));
}, Zn = function() {
  const t = u(this, ke).pending;
  t && (this.is_pending = !0, w(this, te, oe(() => t(u(this, ee)))), ft(() => {
    var r = w(this, Fe, document.createDocumentFragment()), n = $e();
    r.append(n), w(this, Se, C(this, R, nr).call(this, () => oe(() => u(this, st).call(this, n)))), u(this, Ue) === 0 && (u(this, ee).before(r), w(this, Fe, null), ut(
      /** @type {Effect} */
      u(this, te),
      () => {
        w(this, te, null);
      }
    ), C(this, R, rr).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Ir = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ue, 0), w(this, lt, 0), w(this, Se, oe(() => {
      u(this, st).call(this, u(this, ee));
    })), u(this, Ue) > 0) {
      var t = w(this, Fe, document.createDocumentFragment());
      rn(u(this, Se), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        u(this, ke).pending
      );
      w(this, te, oe(() => r(u(this, ee))));
    } else
      C(this, R, rr).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
rr = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, Vt), u(this, Ut));
}, /**
 * @template T
 * @param {() => T} fn
 */
nr = function(t) {
  var r = S, n = E, i = de;
  Ce(u(this, G)), he(u(this, G)), Ct(u(this, G).ctx);
  try {
    return Ke.ensure(), t();
  } catch (s) {
    return Hn(s), null;
  } finally {
    Ce(r), he(n), Ct(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Fr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, R, Fr).call(n, t, r);
    return;
  }
  w(this, Ue, u(this, Ue) + t), u(this, Ue) === 0 && (C(this, R, rr).call(this, r), u(this, te) && ut(u(this, te), () => {
    w(this, te, null);
  }), u(this, Fe) && (u(this, ee).before(u(this, Fe)), w(this, Fe, null)));
};
function Cs(e, t, r, n) {
  const i = wr;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    S
  ), l = Ns(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function o(v) {
    l();
    try {
      n(v);
    } catch (_) {
      (a.f & ue) === 0 && Ye(_, a);
    }
    fr();
  }
  if (r.length === 0) {
    f.then(() => o(t.map(i)));
    return;
  }
  var c = Qn();
  function h() {
    Promise.all(r.map((v) => /* @__PURE__ */ Rs(v))).then((v) => o([...t.map(i), ...v])).catch((v) => Ye(v, a)).finally(() => c());
  }
  f ? f.then(() => {
    l(), h(), fr();
  }) : h();
}
function Ns() {
  var e = (
    /** @type {Effect} */
    S
  ), t = E, r = de, n = (
    /** @type {Batch} */
    y
  );
  return function(s = !0) {
    Ce(e), he(t), Ct(r), s && (e.f & ue) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function fr(e = !0) {
  Ce(null), he(null), Ct(null), e && (y == null || y.deactivate());
}
function Qn() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    S.b
  ), t = (
    /** @type {Batch} */
    y
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  var t = j | U, r = E !== null && (E.f & j) !== 0 ? (
    /** @type {Derived} */
    E
  ) : null;
  return S !== null && (S.f |= vt), {
    ctx: de,
    deps: null,
    effects: null,
    equals: Fn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      H
    ),
    wv: 0,
    parent: r ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Rs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && is();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = ht(
    /** @type {V} */
    H
  ), a = !E, l = /* @__PURE__ */ new Map();
  return Us(() => {
    var _;
    var f = (
      /** @type {Effect} */
      S
    ), o = Mn();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(fr);
    } catch (d) {
      o.reject(d), fr();
    }
    var c = (
      /** @type {Batch} */
      y
    );
    if (a) {
      if ((f.f & Ze) !== 0)
        var h = Qn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (_ = l.get(c)) == null || _.reject(Pe), l.delete(c);
      else {
        for (const d of l.values())
          d.reject(Pe);
        l.clear();
      }
      l.set(c, o);
    }
    const v = (d, $ = void 0) => {
      if (h) {
        var p = $ === Pe;
        h(p);
      }
      if (!($ === Pe || (f.f & ue) !== 0)) {
        if (c.activate(), $)
          s.f |= qe, Nt(s, $);
        else {
          (s.f & qe) !== 0 && (s.f ^= qe), Nt(s, d);
          for (const [g, m] of l) {
            if (l.delete(g), g === c) break;
            m.reject(Pe);
          }
        }
        c.deactivate();
      }
    };
    o.promise.then(v, (d) => v(null, d || "unknown"));
  }), Bs(() => {
    for (const f of l.values())
      f.reject(Pe);
  }), new Promise((f) => {
    function o(c) {
      function h() {
        c === i ? f(s) : o(i);
      }
      c.then(h, h);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  const t = /* @__PURE__ */ wr(e);
  return gi(t), t;
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ wr(e);
  return t.equals = Dn, t;
}
function Ms(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      W(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ps(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & j) === 0)
      return (t.f & ue) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Wr(e) {
  var t, r = S;
  Ce(Ps(e));
  try {
    e.f &= ~dt, Ms(e), t = yi(e);
  } finally {
    Ce(r);
  }
  return t;
}
function ti(e) {
  var t = e.v, r = Wr(e);
  if (!e.equals(r) && (e.wv = wi(), (!(y != null && y.is_fork) || e.deps === null) && (e.v = r, y == null || y.capture(e, t), e.deps === null))) {
    M(e, L);
    return;
  }
  Je || (V !== null ? (Xr() || y != null && y.is_fork) && V.set(e, r) : Yr(e));
}
function Os(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Pe), n.teardown = Zi, n.ac = null, jt(n, 0), en(n));
}
function ri(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Rt(t);
}
let Dr = /* @__PURE__ */ new Set();
const We = /* @__PURE__ */ new Map();
let ni = !1;
function ht(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const r = ht(e);
  return gi(r), r;
}
// @__NO_SIDE_EFFECTS__
function ii(e, t = !1, r = !0) {
  const n = ht(e);
  return t || (n.equals = Dn), n;
}
function D(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ye || (E.f & un) !== 0) && jn() && (E.f & (j | Xe | Ur | un)) !== 0 && (ce === null || !St.call(ce, e)) && vs();
  let n = r ? gt(t) : t;
  return Nt(e, n, tr);
}
function Nt(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    Je ? We.set(e, t) : We.set(e, n), e.v = t;
    var i = Ke.ensure();
    if (i.capture(e, n), (e.f & j) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && Wr(s), V === null && Yr(s);
    }
    e.wv = wi(), si(e, U, r), S !== null && (S.f & L) !== 0 && (S.f & (xe | Ge)) === 0 && (le === null ? Ws([e]) : le.push(e)), !i.is_fork && Dr.size > 0 && !ni && Is();
  }
  return t;
}
function Is() {
  ni = !1;
  for (const e of Dr)
    (e.f & L) !== 0 && M(e, Ae), Gt(e) && Rt(e);
  Dr.clear();
}
function Bt(e) {
  D(e, e.v + 1);
}
function si(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], l = a.f, f = (l & U) === 0;
      if (f && M(a, t), (l & j) !== 0) {
        var o = (
          /** @type {Derived} */
          a
        );
        V == null || V.delete(o), (l & dt) === 0 && (l & fe && (a.f |= dt), si(o, Ae, r));
      } else if (f) {
        var c = (
          /** @type {Effect} */
          a
        );
        (l & Xe) !== 0 && me !== null && me.add(c), r !== null ? r.push(c) : qr(c);
      }
    }
}
function gt(e) {
  if (typeof e != "object" || e === null || er in e)
    return e;
  const t = Rn(e);
  if (t !== Ji && t !== Xi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Nn(e), i = /* @__PURE__ */ Ee(0), s = ct, a = (l) => {
    if (ct === s)
      return l();
    var f = E, o = ct;
    he(null), mn(s);
    var c = l();
    return he(f), mn(o), c;
  };
  return n && r.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && ds();
        var c = r.get(f);
        return c === void 0 ? a(() => {
          var h = /* @__PURE__ */ Ee(o.value);
          return r.set(f, h), h;
        }) : D(c, o.value, !0), !0;
      },
      deleteProperty(l, f) {
        var o = r.get(f);
        if (o === void 0) {
          if (f in l) {
            const c = a(() => /* @__PURE__ */ Ee(H));
            r.set(f, c), Bt(i);
          }
        } else
          D(o, H), Bt(i);
        return !0;
      },
      get(l, f, o) {
        var _;
        if (f === er)
          return e;
        var c = r.get(f), h = f in l;
        if (c === void 0 && (!h || (_ = ot(l, f)) != null && _.writable) && (c = a(() => {
          var d = gt(h ? l[f] : H), $ = /* @__PURE__ */ Ee(d);
          return $;
        }), r.set(f, c)), c !== void 0) {
          var v = b(c);
          return v === H ? void 0 : v;
        }
        return Reflect.get(l, f, o);
      },
      getOwnPropertyDescriptor(l, f) {
        var o = Reflect.getOwnPropertyDescriptor(l, f);
        if (o && "value" in o) {
          var c = r.get(f);
          c && (o.value = b(c));
        } else if (o === void 0) {
          var h = r.get(f), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== H)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return o;
      },
      has(l, f) {
        var v;
        if (f === er)
          return !0;
        var o = r.get(f), c = o !== void 0 && o.v !== H || Reflect.has(l, f);
        if (o !== void 0 || S !== null && (!c || (v = ot(l, f)) != null && v.writable)) {
          o === void 0 && (o = a(() => {
            var _ = c ? gt(l[f]) : H, d = /* @__PURE__ */ Ee(_);
            return d;
          }), r.set(f, o));
          var h = b(o);
          if (h === H)
            return !1;
        }
        return c;
      },
      set(l, f, o, c) {
        var T;
        var h = r.get(f), v = f in l;
        if (n && f === "length")
          for (var _ = o; _ < /** @type {Source<number>} */
          h.v; _ += 1) {
            var d = r.get(_ + "");
            d !== void 0 ? D(d, H) : _ in l && (d = a(() => /* @__PURE__ */ Ee(H)), r.set(_ + "", d));
          }
        if (h === void 0)
          (!v || (T = ot(l, f)) != null && T.writable) && (h = a(() => /* @__PURE__ */ Ee(void 0)), D(h, gt(o)), r.set(f, h));
        else {
          v = h.v !== H;
          var $ = a(() => gt(o));
          D(h, $);
        }
        var p = Reflect.getOwnPropertyDescriptor(l, f);
        if (p != null && p.set && p.set.call(c, o), !v) {
          if (n && typeof f == "string") {
            var g = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m >= g.v && D(g, m + 1);
          }
          Bt(i);
        }
        return !0;
      },
      ownKeys(l) {
        b(i);
        var f = Reflect.ownKeys(l).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== H;
        });
        for (var [o, c] of r)
          c.v !== H && !(o in l) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        hs();
      }
    }
  );
}
var vn, li, ai, oi;
function Lr() {
  if (vn === void 0) {
    vn = window, li = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ai = ot(t, "firstChild").get, oi = ot(t, "nextSibling").get, on(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), on(r) && (r.__t = void 0);
  }
}
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return (
    /** @type {TemplateNode | null} */
    ai.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return (
    /** @type {TemplateNode | null} */
    oi.call(e)
  );
}
function _e(e, t) {
  if (!A)
    return /* @__PURE__ */ ze(e);
  var r = /* @__PURE__ */ ze(k);
  if (r === null)
    r = k.appendChild($e());
  else if (t && r.nodeType !== _r) {
    var n = $e();
    return r == null || r.before(n), J(n), n;
  }
  return t && Kr(
    /** @type {Text} */
    r
  ), J(r), r;
}
function pn(e, t = !1) {
  if (!A) {
    var r = /* @__PURE__ */ ze(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ne(r) : r;
  }
  if (t) {
    if ((k == null ? void 0 : k.nodeType) !== _r) {
      var n = $e();
      return k == null || k.before(n), J(n), n;
    }
    Kr(
      /** @type {Text} */
      k
    );
  }
  return k;
}
function He(e, t = 1, r = !1) {
  let n = A ? k : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(n);
  if (!A)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== _r) {
      var s = $e();
      return n === null ? i == null || i.after(s) : n.before(s), J(s), s;
    }
    Kr(
      /** @type {Text} */
      n
    );
  }
  return J(n), n;
}
function fi(e) {
  e.textContent = "";
}
function ui() {
  return !1;
}
function Gr(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Cn, e, void 0)
  );
}
function Kr(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === _r; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let _n = !1;
function ci() {
  _n || (_n = !0, document.addEventListener(
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
function Jr(e) {
  var t = E, r = S;
  he(null), Ce(null);
  try {
    return e();
  } finally {
    he(t), Ce(r);
  }
}
function Fs(e, t, r, n = r) {
  e.addEventListener(t, () => Jr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ci();
}
function Ds(e) {
  S === null && (E === null && os(), as()), Je && ls();
}
function Ls(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Re(e, t) {
  var r = S;
  r !== null && (r.f & ne) !== 0 && (e |= ne);
  var n = {
    ctx: de,
    deps: null,
    nodes: null,
    f: e | U | fe,
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
  if ((e & Tt) !== 0)
    _t !== null ? _t.push(n) : Ke.ensure().schedule(n);
  else if (t !== null) {
    try {
      Rt(n);
    } catch (a) {
      throw W(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & vt) === 0 && (i = i.first, (e & Xe) !== 0 && (e & At) !== 0 && i !== null && (i.f |= At));
  }
  if (i !== null && (i.parent = r, r !== null && Ls(i, r), E !== null && (E.f & j) !== 0 && (e & Ge) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Xr() {
  return E !== null && !ye;
}
function Bs(e) {
  const t = Re(pr, null);
  return M(t, L), t.teardown = e, t;
}
function js(e) {
  Ds();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !E && (t & xe) !== 0 && (t & Ze) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      de
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return di(e);
}
function di(e) {
  return Re(Tt | ts, e);
}
function zs(e) {
  Ke.ensure();
  const t = Re(Ge | vt, e);
  return () => {
    W(t);
  };
}
function Hs(e) {
  Ke.ensure();
  const t = Re(Ge | vt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ut(t, () => {
      W(t), n(void 0);
    }) : (W(t), n(void 0));
  });
}
function Vs(e) {
  return Re(Tt, e);
}
function Us(e) {
  return Re(Ur | vt, e);
}
function Zr(e, t = 0) {
  return Re(pr | t, e);
}
function Jt(e, t = [], r = [], n = []) {
  Cs(n, t, r, (i) => {
    Re(pr, () => e(...i.map(b)));
  });
}
function Qr(e, t = 0) {
  var r = Re(Xe | t, e);
  return r;
}
function oe(e) {
  return Re(xe | vt, e);
}
function hi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Je, n = E;
    gn(!0), he(null);
    try {
      t.call(null);
    } finally {
      gn(r), he(n);
    }
  }
}
function en(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Jr(() => {
      i.abort(Pe);
    });
    var n = r.next;
    (r.f & Ge) !== 0 ? r.parent = null : W(r, t), r = n;
  }
}
function Ys(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & xe) === 0 && W(t), t = r;
  }
}
function W(e, t = !0) {
  var r = !1;
  (t || (e.f & es) !== 0) && e.nodes !== null && e.nodes.end !== null && (qs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), M(e, fn), en(e, t && !r), jt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  hi(e), e.f ^= fn, e.f |= ue;
  var i = e.parent;
  i !== null && i.first !== null && vi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function qs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ne(e);
    e.remove(), e = r;
  }
}
function vi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ut(e, t, r = !0) {
  var n = [];
  pi(e, n, !0);
  var i = () => {
    r && W(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of n)
      l.out(a);
  } else
    i();
}
function pi(e, t, r) {
  if ((e.f & ne) === 0) {
    e.f ^= ne;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & At) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xe) !== 0 && (e.f & Xe) !== 0;
      pi(i, t, a ? r : !1), i = s;
    }
  }
}
function tn(e) {
  _i(e, !0);
}
function _i(e, t) {
  if ((e.f & ne) !== 0) {
    e.f ^= ne, (e.f & L) === 0 && (M(e, U), Ke.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & At) !== 0 || (r.f & xe) !== 0;
      _i(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function rn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ne(r);
      t.append(r), r = i;
    }
}
let ir = !1, Je = !1;
function gn(e) {
  Je = e;
}
let E = null, ye = !1;
function he(e) {
  E = e;
}
let S = null;
function Ce(e) {
  S = e;
}
let ce = null;
function gi(e) {
  E !== null && (ce === null ? ce = [e] : ce.push(e));
}
let K = null, Z = 0, le = null;
function Ws(e) {
  le = e;
}
let mi = 1, rt = 0, ct = rt;
function mn(e) {
  ct = e;
}
function wi() {
  return ++mi;
}
function Gt(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & j && (e.f &= ~dt), (t & Ae) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Gt(
        /** @type {Derived} */
        s
      ) && ti(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    V === null && M(e, L);
  }
  return !1;
}
function bi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ce !== null && St.call(ce, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & j) !== 0 ? bi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? M(s, U) : (s.f & L) !== 0 && M(s, Ae), qr(
        /** @type {Effect} */
        s
      ));
    }
}
function yi(e) {
  var $;
  var t = K, r = Z, n = le, i = E, s = ce, a = de, l = ye, f = ct, o = e.f;
  K = /** @type {null | Value[]} */
  null, Z = 0, le = null, E = (o & (xe | Ge)) === 0 ? e : null, ce = null, Ct(e.ctx), ye = !1, ct = ++rt, e.ac !== null && (Jr(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= Cr;
    var c = (
      /** @type {Function} */
      e.fn
    ), h = c();
    e.f |= Ze;
    var v = e.deps, _ = y == null ? void 0 : y.is_fork;
    if (K !== null) {
      var d;
      if (_ || jt(e, Z), v !== null && Z > 0)
        for (v.length = Z + K.length, d = 0; d < K.length; d++)
          v[Z + d] = K[d];
      else
        e.deps = v = K;
      if (Xr() && (e.f & fe) !== 0)
        for (d = Z; d < v.length; d++)
          (($ = v[d]).reactions ?? ($.reactions = [])).push(e);
    } else !_ && v !== null && Z < v.length && (jt(e, Z), v.length = Z);
    if (jn() && le !== null && !ye && v !== null && (e.f & (j | Ae | U)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      le.length; d++)
        bi(
          le[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rt++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = rt;
      if (t !== null)
        for (const p of t)
          p.rv = rt;
      le !== null && (n === null ? n = le : n.push(.../** @type {Source[]} */
      le));
    }
    return (e.f & qe) !== 0 && (e.f ^= qe), h;
  } catch (p) {
    return Hn(p);
  } finally {
    e.f ^= Cr, K = t, Z = r, le = n, E = i, ce = s, Ct(a), ye = l, ct = f;
  }
}
function Gs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Gi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !St.call(K, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & fe) !== 0 && (s.f ^= fe, s.f &= ~dt), Yr(s), Os(s), jt(s, 0);
  }
}
function jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Gs(e, r[n]);
}
function Rt(e) {
  var t = e.f;
  if ((t & ue) === 0) {
    M(e, L);
    var r = S, n = ir;
    S = e, ir = !0;
    try {
      (t & (Xe | Pn)) !== 0 ? Ys(e) : en(e), hi(e);
      var i = yi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = mi;
      var s;
      Wi && ws && (e.f & U) !== 0 && e.deps;
    } finally {
      ir = n, S = r;
    }
  }
}
async function Ks() {
  await Promise.resolve(), et();
}
function b(e) {
  var t = e.f, r = (t & j) !== 0;
  if (E !== null && !ye) {
    var n = S !== null && (S.f & ue) !== 0;
    if (!n && (ce === null || !St.call(ce, e))) {
      var i = E.deps;
      if ((E.f & Cr) !== 0)
        e.rv < rt && (e.rv = rt, K === null && i !== null && i[Z] === e ? Z++ : K === null ? K = [e] : K.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : St.call(s, E) || s.push(E);
      }
    }
  }
  if (Je && We.has(e))
    return We.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Je) {
      var l = a.v;
      return ((a.f & L) === 0 && a.reactions !== null || xi(a)) && (l = Wr(a)), We.set(a, l), l;
    }
    var f = (a.f & fe) === 0 && !ye && E !== null && (ir || (E.f & fe) !== 0), o = (a.f & Ze) === 0;
    Gt(a) && (f && (a.f |= fe), ti(a)), f && !o && (ri(a), $i(a));
  }
  if (V != null && V.has(e))
    return V.get(e);
  if ((e.f & qe) !== 0)
    throw e.v;
  return e.v;
}
function $i(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & fe) === 0 && (ri(
        /** @type {Derived} */
        t
      ), $i(
        /** @type {Derived} */
        t
      ));
}
function xi(e) {
  if (e.v === H) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (We.has(t) || (t.f & j) !== 0 && xi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function nn(e) {
  var t = ye;
  try {
    return ye = !0, e();
  } finally {
    ye = t;
  }
}
const nt = Symbol("events"), Ei = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set();
function Xt(e, t, r) {
  (t[nt] ?? (t[nt] = {}))[e] = r;
}
function Js(e) {
  for (var t = 0; t < e.length; t++)
    Ei.add(e[t]);
  for (var r of Br)
    r(e);
}
let wn = null;
function bn(e) {
  var p, g;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  wn = e;
  var a = 0, l = wn === e && e[nt];
  if (l) {
    var f = i.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    f <= o && (a = f);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    ar(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = E, h = S;
    he(null), Ce(null);
    try {
      for (var v, _ = []; s !== null; ) {
        var d = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var $ = (g = s[nt]) == null ? void 0 : g[n];
          $ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && $.call(s, e);
        } catch (m) {
          v ? _.push(m) : v = m;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        s = d;
      }
      if (v) {
        for (let m of _)
          queueMicrotask(() => {
            throw m;
          });
        throw v;
      }
    } finally {
      e[nt] = t, delete e.currentTarget, he(c), Ce(h);
    }
  }
}
var Tn;
const kr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Tn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Tn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Xs(e) {
  return (
    /** @type {string} */
    (kr == null ? void 0 : kr.createHTML(e)) ?? e
  );
}
function ki(e) {
  var t = Gr("template");
  return t.innerHTML = Xs(e.replaceAll("<!>", "<!---->")), t.content;
}
function mt(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  var r = (t & Yi) !== 0, n = (t & qi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (A)
      return mt(k, null), k;
    i === void 0 && (i = ki(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(i)));
    var a = (
      /** @type {TemplateNode} */
      n || li ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      mt(l, f);
    } else
      mt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Zs(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (A)
      return mt(k, null), k;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ki(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ze(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ ze(l);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return mt(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return /* @__PURE__ */ Zs(e, t, "svg");
}
function ge(e, t) {
  if (A) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      S
    );
    ((r.f & Ze) === 0 || r.nodes.end === null) && (r.nodes.end = k), mr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Qs = ["touchstart", "touchmove"];
function el(e) {
  return Qs.includes(e);
}
function Zt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Si(e, t) {
  return Ti(e, t);
}
function tl(e, t) {
  Lr(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, i = k;
  try {
    for (var s = /* @__PURE__ */ ze(r); s && (s.nodeType !== Wt || /** @type {Comment} */
    s.data !== An); )
      s = /* @__PURE__ */ Ne(s);
    if (!s)
      throw kt;
    je(!0), J(
      /** @type {Comment} */
      s
    );
    const a = Ti(e, { ...t, anchor: s });
    return je(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== kt && console.warn("Failed to hydrate: ", a), t.recover === !1 && us(), Lr(), fi(r), je(!1), Si(e, t);
  } finally {
    je(n), J(i);
  }
}
const Qt = /* @__PURE__ */ new Map();
function Ti(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  Lr();
  var f = void 0, o = Hs(() => {
    var c = r ?? t.appendChild($e());
    Ts(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (_) => {
        Ln({});
        var d = (
          /** @type {ComponentContext} */
          de
        );
        if (s && (d.c = s), i && (n.$$events = i), A && mt(
          /** @type {TemplateNode} */
          _,
          null
        ), f = e(_, n) || {}, A && (S.nodes.end = k, k === null || k.nodeType !== Wt || /** @type {Comment} */
        k.data !== Vr))
          throw gr(), kt;
        Bn();
      },
      l
    );
    var h = /* @__PURE__ */ new Set(), v = (_) => {
      for (var d = 0; d < _.length; d++) {
        var $ = _[d];
        if (!h.has($)) {
          h.add($);
          var p = el($);
          for (const T of [t, document]) {
            var g = Qt.get(T);
            g === void 0 && (g = /* @__PURE__ */ new Map(), Qt.set(T, g));
            var m = g.get($);
            m === void 0 ? (T.addEventListener($, bn, { passive: p }), g.set($, 1)) : g.set($, m + 1);
          }
        }
      }
    };
    return v(vr(Ei)), Br.add(v), () => {
      var p;
      for (var _ of h)
        for (const g of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Qt.get(g)
          ), $ = (
            /** @type {number} */
            d.get(_)
          );
          --$ == 0 ? (g.removeEventListener(_, bn), d.delete(_), d.size === 0 && Qt.delete(g)) : d.set(_, $);
        }
      Br.delete(v), c !== r && ((p = c.parentNode) == null || p.removeChild(c));
    };
  });
  return jr.set(f, o), f;
}
let jr = /* @__PURE__ */ new WeakMap();
function rl(e, t) {
  const r = jr.get(e);
  return r ? (jr.delete(e), r(t)) : Promise.resolve();
}
var be, Te, re, at, Yt, qt, hr;
class nl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    N(this, "anchor");
    /** @type {Map<Batch, Key>} */
    x(this, be, /* @__PURE__ */ new Map());
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
    x(this, re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, at, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, Yt, !0);
    /**
     * @param {Batch} batch
     */
    x(this, qt, (t) => {
      if (u(this, be).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, be).get(t)
        ), n = u(this, Te).get(r);
        if (n)
          tn(n), u(this, at).delete(r);
        else {
          var i = u(this, re).get(r);
          i && (u(this, Te).set(r, i.effect), u(this, re).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of u(this, be)) {
          if (u(this, be).delete(s), s === t)
            break;
          const l = u(this, re).get(a);
          l && (W(l.effect), u(this, re).delete(a));
        }
        for (const [s, a] of u(this, Te)) {
          if (s === r || u(this, at).has(s)) continue;
          const l = () => {
            if (Array.from(u(this, be).values()).includes(s)) {
              var o = document.createDocumentFragment();
              rn(a, o), o.append($e()), u(this, re).set(s, { effect: a, fragment: o });
            } else
              W(a);
            u(this, at).delete(s), u(this, Te).delete(s);
          };
          u(this, Yt) || !n ? (u(this, at).add(s), ut(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, hr, (t) => {
      u(this, be).delete(t);
      const r = Array.from(u(this, be).values());
      for (const [n, i] of u(this, re))
        r.includes(n) || (W(i.effect), u(this, re).delete(n));
    });
    this.anchor = t, w(this, Yt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      y
    ), i = ui();
    if (r && !u(this, Te).has(t) && !u(this, re).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = $e();
        s.append(a), u(this, re).set(t, {
          effect: oe(() => r(a)),
          fragment: s
        });
      } else
        u(this, Te).set(
          t,
          oe(() => r(this.anchor))
        );
    if (u(this, be).set(n, t), i) {
      for (const [l, f] of u(this, Te))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of u(this, re))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(u(this, qt)), n.ondiscard(u(this, hr));
    } else
      A && (this.anchor = k), u(this, qt).call(this, n);
  }
}
be = new WeakMap(), Te = new WeakMap(), re = new WeakMap(), at = new WeakMap(), Yt = new WeakMap(), qt = new WeakMap(), hr = new WeakMap();
function yn(e, t, r = !1) {
  var n;
  A && (n = k, mr());
  var i = new nl(e), s = r ? At : 0;
  function a(l, f) {
    if (A) {
      var o = In(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(o.substring(1))) {
        var c = or();
        J(c), i.anchor = c, je(!1), i.ensure(l, f), je(!0);
        return;
      }
    }
    i.ensure(l, f);
  }
  Qr(() => {
    var l = !1;
    t((f, o = 0) => {
      l = !0, a(o, f);
    }), l || a(-1, null);
  }, s);
}
function il(e, t) {
  return t;
}
function sl(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let h = t[l];
    ut(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            zr(e, vr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var o = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        o.parentNode
      );
      fi(c), c.append(o), e.items.clear();
    }
    zr(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function zr(e, t, r = !0) {
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
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n != null && n.has(s)) {
      s.f |= Be;
      const a = document.createDocumentFragment();
      rn(s, a);
    } else
      W(t[i], r);
  }
}
var $n;
function ll(e, t, r, n, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    a = A ? J(/* @__PURE__ */ ze(f)) : f.appendChild($e());
  }
  A && mr();
  var o = null, c = /* @__PURE__ */ ei(() => {
    var m = r();
    return Nn(m) ? m : m == null ? [] : vr(m);
  }), h, v = /* @__PURE__ */ new Map(), _ = !0;
  function d(m) {
    (g.effect.f & ue) === 0 && (g.pending.delete(m), g.fallback = o, al(g, h, a, t, n), o !== null && (h.length === 0 ? (o.f & Be) === 0 ? tn(o) : (o.f ^= Be, Dt(o, null, a)) : ut(o, () => {
      o = null;
    })));
  }
  function $(m) {
    g.pending.delete(m);
  }
  var p = Qr(() => {
    h = /** @type {V[]} */
    b(c);
    var m = h.length;
    let T = !1;
    if (A) {
      var P = In(a) === Hr;
      P !== (m === 0) && (a = or(), J(a), je(!1), T = !0);
    }
    for (var z = /* @__PURE__ */ new Set(), O = (
      /** @type {Batch} */
      y
    ), ie = ui(), q = 0; q < m; q += 1) {
      A && k.nodeType === Wt && /** @type {Comment} */
      k.data === Vr && (a = /** @type {Comment} */
      k, T = !0, je(!1));
      var X = h[q], pt = n(X, q), ve = _ ? null : l.get(pt);
      ve ? (ve.v && Nt(ve.v, X), ve.i && Nt(ve.i, q), ie && O.unskip_effect(ve.e)) : (ve = ol(
        l,
        _ ? a : $n ?? ($n = $e()),
        X,
        pt,
        q,
        i,
        t,
        r
      ), _ || (ve.e.f |= Be), l.set(pt, ve)), z.add(pt);
    }
    if (m === 0 && s && !o && (_ ? o = oe(() => s(a)) : (o = oe(() => s($n ?? ($n = $e()))), o.f |= Be)), m > z.size && ss(), A && m > 0 && J(or()), !_)
      if (v.set(O, z), ie) {
        for (const [yr, I] of l)
          z.has(yr) || O.skip_effect(I.e);
        O.oncommit(d), O.ondiscard($);
      } else
        d(O);
    T && je(!0), b(c);
  }), g = { effect: p, items: l, pending: v, outrogroups: null, fallback: o };
  _ = !1, A && (a = k);
}
function It(e) {
  for (; e !== null && (e.f & xe) === 0; )
    e = e.next;
  return e;
}
function al(e, t, r, n, i) {
  var q;
  var s = t.length, a = e.items, l = It(e.effect.first), f, o = null, c = [], h = [], v, _, d, $;
  for ($ = 0; $ < s; $ += 1) {
    if (v = t[$], _ = i(v, $), d = /** @type {EachItem} */
    a.get(_).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(d), X.done.delete(d);
    if ((d.f & ne) !== 0 && tn(d), (d.f & Be) !== 0)
      if (d.f ^= Be, d === l)
        Dt(d, null, r);
      else {
        var p = o ? o.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Ve(e, o, d), Ve(e, d, p), Dt(d, p, r), o = d, c = [], h = [], l = It(o.next);
        continue;
      }
    if (d !== l) {
      if (f !== void 0 && f.has(d)) {
        if (c.length < h.length) {
          var g = h[0], m;
          o = g.prev;
          var T = c[0], P = c[c.length - 1];
          for (m = 0; m < c.length; m += 1)
            Dt(c[m], g, r);
          for (m = 0; m < h.length; m += 1)
            f.delete(h[m]);
          Ve(e, T.prev, P.next), Ve(e, o, T), Ve(e, P, g), l = g, o = P, $ -= 1, c = [], h = [];
        } else
          f.delete(d), Dt(d, l, r), Ve(e, d.prev, d.next), Ve(e, d, o === null ? e.effect.first : o.next), Ve(e, o, d), o = d;
        continue;
      }
      for (c = [], h = []; l !== null && l !== d; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), h.push(l), l = It(l.next);
      if (l === null)
        continue;
    }
    (d.f & Be) === 0 && c.push(d), o = d, l = It(d.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (zr(e, vr(X.done)), (q = e.outrogroups) == null || q.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var z = [];
    if (f !== void 0)
      for (d of f)
        (d.f & ne) === 0 && z.push(d);
    for (; l !== null; )
      (l.f & ne) === 0 && l !== e.fallback && z.push(l), l = It(l.next);
    var O = z.length;
    if (O > 0) {
      var ie = s === 0 ? r : null;
      sl(e, z, ie);
    }
  }
}
function ol(e, t, r, n, i, s, a, l) {
  var f = (a & Li) !== 0 ? (a & ji) === 0 ? /* @__PURE__ */ ii(r, !1, !1) : ht(r) : null, o = (a & Bi) !== 0 ? ht(i) : null;
  return {
    v: f,
    i: o,
    e: oe(() => (s(t, f ?? r, o ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function Dt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Be) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function Ve(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function fl(e, t) {
  Vs(() => {
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
      const i = Gr("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const xn = [...` 	
\r\f \v\uFEFF`];
function ul(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || xn.includes(n[a - 1])) && (l === n.length || xn.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
        }
  }
  return n === "" ? null : n;
}
function cl(e, t, r, n, i, s) {
  var a = e.__className;
  if (A || a !== r || a === void 0) {
    var l = ul(r, n, s);
    (!A || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = r;
  } else if (s && i !== s)
    for (var f in s) {
      var o = !!s[f];
      (i == null || o !== !!i[f]) && e.classList.toggle(f, o);
    }
  return s;
}
const dl = Symbol("is custom element"), hl = Symbol("is html"), vl = ns ? "link" : "LINK";
function pl(e) {
  if (A) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ur(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ur(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, ft(r), ci();
  }
}
function ur(e, t, r, n) {
  var i = _l(e);
  A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === vl) || i[t] !== (i[t] = r) && (t === "loading" && (e[rs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && gl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function _l(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [dl]: e.nodeName.includes("-"),
      [hl]: e.namespaceURI === Cn
    })
  );
}
var En = /* @__PURE__ */ new Map();
function gl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = En.get(t);
  if (r) return r;
  En.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = Ki(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Rn(i);
  }
  return r;
}
function ml(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Fs(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Sr(e) ? Tr(s) : s, r(s), y !== null && n.add(y), await Ks(), s !== (s = t())) {
      var a = e.selectionStart, l = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var o = e.value.length;
        a === l && l === f && o > f ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = a, e.selectionEnd = Math.min(l, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  nn(t) == null && e.value) && (r(Sr(e) ? Tr(e.value) : e.value), y !== null && n.add(y)), Zr(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        y
      );
      if (n.has(s))
        return;
    }
    Sr(e) && i === Tr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Sr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Tr(e) {
  return e === "" ? null : +e;
}
function Ft(e, t, r, n) {
  var m;
  var i = (r & Vi) !== 0, s = (r & Ui) !== 0, a = (
    /** @type {V} */
    n
  ), l = !0, f = () => (l && (l = !1, a = s ? nn(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let o;
  if (i) {
    var c = er in e || On in e;
    o = ((m = ot(e, t)) == null ? void 0 : m.set) ?? (c && t in e ? (T) => e[t] = T : void 0);
  }
  var h, v = !1;
  i ? [h, v] = $s(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = f(), o && (cs(), o(h)));
  var _;
  if (_ = () => {
    var T = (
      /** @type {V} */
      e[t]
    );
    return T === void 0 ? f() : (l = !0, T);
  }, (r & Hi) === 0)
    return _;
  if (o) {
    var d = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(T, P) {
        return arguments.length > 0 ? ((!P || d || v) && o(P ? _() : T), T) : _();
      })
    );
  }
  var $ = !1, p = ((r & zi) !== 0 ? wr : ei)(() => ($ = !1, _()));
  i && b(p);
  var g = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(T, P) {
      if (arguments.length > 0) {
        const z = P ? b(p) : i ? gt(T) : T;
        return D(p, z), $ = !0, a !== void 0 && (a = z), T;
      }
      return Je && $ || (g.f & ue) !== 0 ? p.v : b(p);
    })
  );
}
function wl(e) {
  return new bl(e);
}
var Le, ae;
class bl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    x(this, Le);
    /** @type {Record<string, any>} */
    x(this, ae);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, l) => {
      var f = /* @__PURE__ */ ii(l, !1, !1);
      return r.set(a, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return b(r.get(l) ?? n(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === On ? !0 : (b(r.get(l) ?? n(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, f) {
          return D(r.get(l) ?? n(l, f), f), Reflect.set(a, l, f);
        }
      }
    );
    w(this, ae, (t.hydrate ? tl : Si)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && et(), w(this, Le, i.$$events);
    for (const a of Object.keys(u(this, ae)))
      a === "$set" || a === "$destroy" || a === "$on" || ar(this, a, {
        get() {
          return u(this, ae)[a];
        },
        /** @param {any} value */
        set(l) {
          u(this, ae)[a] = l;
        },
        enumerable: !0
      });
    u(this, ae).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, u(this, ae).$destroy = () => {
      rl(u(this, ae));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    u(this, ae).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    u(this, Le)[t] = u(this, Le)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return u(this, Le)[t].push(n), () => {
      u(this, Le)[t] = u(this, Le)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    u(this, ae).$destroy();
  }
}
Le = new WeakMap(), ae = new WeakMap();
let Ai;
typeof HTMLElement == "function" && (Ai = class extends HTMLElement {
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
      let r = function(s) {
        return (a) => {
          const l = Gr("slot");
          s !== "default" && (l.name = s), ge(a, l);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = yl(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = sr(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = wl({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = zs(() => {
        Zr(() => {
          var s;
          this.$$r = !0;
          for (const a of lr(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = sr(
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
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const l = this.$$c.$on(s, a);
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
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = sr(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return lr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function sr(e, t, r, n) {
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
function yl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function $l(e, t, r, n, i, s) {
  let a = class extends Ai {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return lr(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return lr(t).forEach((l) => {
    ar(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(f) {
        var h;
        f = sr(l, f, t), this.$$d[l] = f;
        var o = this.$$c;
        if (o) {
          var c = (h = ot(o, l)) == null ? void 0 : h.get;
          c ? o[l] = f : o.$set({ [l]: f });
        }
      }
    });
  }), n.forEach((l) => {
    ar(a.prototype, l, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var xl = /* @__PURE__ */ br('<button type="button" class="btn-cancel svelte-kew1mv">Cancel</button> <button type="button" class="btn-create svelte-kew1mv"> </button>', 1), El = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>'), kl = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg>'), Sl = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'), Tl = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>'), Al = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'), Cl = /* @__PURE__ */ Mt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'), Nl = /* @__PURE__ */ br('<button type="button"><span class="area-icon svelte-kew1mv"><!></span> <span class="area-name svelte-kew1mv"> </span></button>'), Rl = /* @__PURE__ */ br('<div class="form-section svelte-kew1mv"><div class="field-label svelte-kew1mv">Template Preview</div> <pre class="template-preview svelte-kew1mv"><code> </code></pre></div>'), Ml = /* @__PURE__ */ br('<div class="form-section svelte-kew1mv"><label class="field-label svelte-kew1mv" for="file-area">File Type</label> <div class="area-grid svelte-kew1mv"></div></div> <div class="form-section svelte-kew1mv"><label class="field-label svelte-kew1mv" for="file-name">Filename</label> <div class="filename-row svelte-kew1mv"><input id="file-name" type="text" class="filename-input svelte-kew1mv" autocomplete="off" spellcheck="false"/> <span class="file-ext svelte-kew1mv"> </span></div></div> <!>', 1);
const Pl = {
  hash: "svelte-kew1mv",
  code: ":host {display:contents;--text: var(--shell-text, #f8fafc);--muted: var(--shell-muted, #94a3b8);--border: var(--shell-border, rgba(255,255,255,0.1));--hover: var(--shell-hover-bg, rgba(255,255,255,0.06));--primary: var(--shell-primary, #0f172a);--primary-text: var(--shell-pill-text, #ffffff);--card-bg: rgba(255,255,255,0.02);--card-hover: rgba(255,255,255,0.04);--card-selected-bg: rgba(255,255,255,0.1);--input-bg: rgba(0,0,0,0.2);--ext-bg: rgba(0,0,0,0.4);--preview-bg: rgba(0,0,0,0.2);}:host([theme='light']) {--text: #0f172a;--muted: #64748b;--border: #e2e8f0;--hover: rgba(15, 23, 42, 0.04);--primary: #0f172a;--primary-text: #ffffff;--card-bg: #f8fafc;--card-hover: #f1f5f9;--card-selected-bg: #e2e8f0;--input-bg: #ffffff;--ext-bg: #f1f5f9;--preview-bg: #f8fafc;}:host([theme='green']) {--text: #e7eddc;--muted: #a2b392;--border: rgba(198, 255, 0, 0.12);--hover: rgba(198, 255, 0, 0.04);--primary: #c6ff00;--primary-text: #050804;--card-bg: rgba(28, 39, 26, 0.6);--card-hover: rgba(28, 39, 26, 0.8);--card-selected-bg: rgba(198, 255, 0, 0.1);--input-bg: rgba(6, 10, 6, 0.4);--ext-bg: rgba(6, 10, 6, 0.6);--preview-bg: rgba(0, 0, 0, 0.25);}.form-section.svelte-kew1mv {display:flex;flex-direction:column;gap:6px;}.field-label.svelte-kew1mv {font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);}.area-grid.svelte-kew1mv {display:grid;grid-template-columns:repeat(3, 1fr);gap:6px;}.area-card.svelte-kew1mv {display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;border:1px solid var(--border);border-radius:6px;background:var(--card-bg);color:var(--muted);cursor:pointer;transition:border-color 0.15s, background 0.15s, color 0.15s;font-size:11px;font-family:inherit;}.area-card.svelte-kew1mv:hover {border-color:var(--border);background:var(--card-hover);color:var(--text);}.area-card.selected.svelte-kew1mv {border-color:var(--primary);background:var(--card-selected-bg);color:var(--primary);}.area-icon.svelte-kew1mv {display:flex;align-items:center;justify-content:center;opacity:0.8;}.area-name.svelte-kew1mv {font-weight:500;letter-spacing:0.02em;}.filename-row.svelte-kew1mv {display:flex;align-items:center;gap:0;border:1px solid var(--border);border-radius:5px;overflow:hidden;background:var(--input-bg);}.filename-input.svelte-kew1mv {flex:1;padding:7px 10px;border:none;background:transparent;color:var(--text);font-size:13px;font-family:inherit;outline:none;min-width:0;}.filename-input.svelte-kew1mv::placeholder {color:var(--muted);}.file-ext.svelte-kew1mv {padding:7px 10px;font-size:13px;color:var(--muted);border-left:1px solid var(--border);background:var(--ext-bg);font-family:monospace;white-space:nowrap;}.template-preview.svelte-kew1mv {padding:8px 10px;background:var(--preview-bg);border:1px solid var(--border);border-radius:5px;font-size:11px;font-family:var(--font-mono, 'Fira Code', monospace);color:var(--muted);overflow-x:auto;max-height:100px;margin:0;white-space:pre;line-height:1.5;}.btn-cancel.svelte-kew1mv {padding:7px 16px;border:1px solid var(--border);border-radius:5px;background:transparent;color:var(--muted);font-size:13px;font-family:inherit;cursor:pointer;transition:background 0.15s, color 0.15s;}.btn-cancel.svelte-kew1mv:hover {background:var(--hover);color:var(--text);}.btn-create.svelte-kew1mv {padding:7px 20px;border:none;border-radius:5px;background:var(--primary);color:var(--primary-text);font-size:13px;font-family:inherit;font-weight:500;cursor:pointer;transition:background 0.15s, opacity 0.15s;}.btn-create.svelte-kew1mv:hover:not(:disabled) {background:var(--primary);opacity:0.9;}.btn-create.svelte-kew1mv:disabled {opacity:0.4;cursor:not-allowed;}"
};
function Ol(e, t) {
  Ln(t, !0), fl(e, Pl);
  let r = Ft(t, "open", 15, !1), n = Ft(t, "defaultArea", 7, "Routes"), i = Ft(t, "defaultFilename", 7, ""), s = Ft(t, "onConfirm", 7), a = Ft(t, "onClose", 7);
  const l = [
    {
      id: "Routes",
      label: "Route",
      ext: ".php",
      hint: "Natural page route"
    },
    {
      id: "Layouts",
      label: "Layout",
      ext: ".php",
      hint: "Site layout wrapper"
    },
    {
      id: "Components",
      label: "Component",
      ext: ".svelte",
      hint: "Reusable UI component"
    },
    {
      id: "Content",
      label: "Content",
      ext: ".json",
      hint: "Structured content document"
    },
    {
      id: "Meta",
      label: "Meta",
      ext: ".json",
      hint: "Site metadata document"
    },
    {
      id: "Assets",
      label: "Asset",
      ext: ".bin",
      hint: "Binary asset file"
    }
  ], f = {
    Routes: `<?php
// Page route template
/** @var PublicSiteRuntimeContext $efsdbSite */
$content = $efsdbSite->content('en');
$title = $content['hero']['title'] ?? 'New Page';
$description = 'A page describing our awesome content.';
?>

<div class="shell-panel p-5 sm:p-7">
  <div class="max-w-4xl">
    <div class="section-label">Page Route</div>
    <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
      <?= htmlspecialchars($title) ?>
    </h1>
    <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
      <?= htmlspecialchars($content['hero']['subtitle'] ?? 'Start building your page layout here.') ?>
    </p>
  </div>
</div>
`,
    Layouts: `<?php
// Site layout wrapper
/** @var PublicSiteRuntimeContext $efsdbSite */
$siteName = $efsdbSite->meta('siteName', 'My Site');
$pageTitle = isset($title) ? sprintf($efsdbSite->meta('titleTemplate', '%s | ' . $siteName), $title) : $siteName;
$description = $description ?? $efsdbSite->meta('defaultDescription', '');
$ogImage = $efsdbSite->meta('social')['ogImage'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($pageTitle) ?></title>
  <?php if ($description): ?>
  <meta name="description" content="<?= htmlspecialchars($description) ?>">
  <?php endif; ?>
  <meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <?php if ($ogImage): ?>
  <meta property="og:image" content="<?= htmlspecialchars($efsdbSite->assetUrl($ogImage)) ?>">
  <?php endif; ?>
</head>
<body>
  <header><?= htmlspecialchars($siteName) ?></header>
  <main>
    <?= $slot ?? '' ?>
  </main>
</body>
</html>
`,
    Components: `<script lang="ts">
  let {
    title = 'Component',
    copy = 'This is a reusable Svelte 5 component.'
  } = $props<{
    title?: string;
    copy?: string;
  }>();
<\/script>

<div class="component-wrapper">
  <h2>{title}</h2>
  <p>{copy}</p>
</div>

<style>
  .component-wrapper {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--shell-border);
    background: var(--shell-panel-bg);
  }

  h2 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
</style>
`,
    Content: `{
  "lang": "en",
  "hero": {
    "title": "Welcome to your site",
    "subtitle": "Structured content foundation"
  },
  "sections": []
}
`,
    Meta: `{
  "siteName": "My Site",
  "titleTemplate": "%s | My Site",
  "defaultDescription": "A fast, flexible site built with EFSDB.",
  "themeColor": "#ffffff",
  "social": {
    "twitter": "@example",
    "ogImage": "/assets/og-image.png"
  }
}
`,
    Assets: ""
  };
  let o = /* @__PURE__ */ Ee("Routes"), c = /* @__PURE__ */ Ee("");
  function h() {
    const p = l.find((g) => g.id === b(o));
    p && (!b(c) || b(c).startsWith("new")) && (p.id === "Content" ? D(c, "en.json") : p.id === "Meta" ? D(c, "seo.json") : D(c, `new${p.ext === ".svelte" ? "Page" : "File"}${p.ext}`));
  }
  js(() => {
    if (r())
      if (D(o, n()), i())
        D(c, i());
      else {
        const p = l.find((g) => g.id === b(o));
        (p == null ? void 0 : p.id) === "Content" ? D(c, "en") : (p == null ? void 0 : p.id) === "Meta" ? D(c, "seo") : D(c, `new${(p == null ? void 0 : p.ext) === ".svelte" ? "Page" : "File"}`);
      }
  });
  function v() {
    const p = l.find((T) => T.id === b(o)), g = b(c).trim();
    if (!g || !p) return;
    const m = g.endsWith(p.ext) ? g : g + p.ext;
    s()(b(o), m, f[b(o)] ?? ""), a()();
  }
  const _ = /* @__PURE__ */ hn(() => f[b(o)] ?? ""), d = /* @__PURE__ */ hn(() => b(c).trim().length > 0);
  var $ = {
    get open() {
      return r();
    },
    set open(p = !1) {
      r(p), et();
    },
    get defaultArea() {
      return n();
    },
    set defaultArea(p = "Routes") {
      n(p), et();
    },
    get defaultFilename() {
      return i();
    },
    set defaultFilename(p = "") {
      i(p), et();
    },
    get onConfirm() {
      return s();
    },
    set onConfirm(p) {
      s(p), et();
    },
    get onClose() {
      return a();
    },
    set onClose(p) {
      a(p), et();
    }
  };
  {
    const p = (g) => {
      var m = xl(), T = pn(m), P = He(T, 2), z = _e(P);
      se(P), Jt(
        (O) => {
          P.disabled = !b(d), Zt(z, `Create ${O ?? ""}`);
        },
        [
          () => {
            var O;
            return ((O = l.find((ie) => ie.id === b(o))) == null ? void 0 : O.label) ?? "File";
          }
        ]
      ), Xt("click", T, function(...O) {
        var ie;
        (ie = a()) == null || ie.apply(this, O);
      }), Xt("click", P, v), ge(g, m);
    };
    ToolWindow(e, {
      title: "Create New File",
      get onClose() {
        return a();
      },
      get open() {
        return r();
      },
      set open(g) {
        r(g);
      },
      footer: p,
      children: (g, m) => {
        var T = Ml(), P = pn(T), z = He(_e(P), 2);
        ll(z, 21, () => l, il, (I, F) => {
          var Me = Nl();
          let Pt;
          var Ot = _e(Me), $r = _e(Ot);
          {
            var Ci = (B) => {
              var pe = El();
              ge(B, pe);
            }, Ni = (B) => {
              var pe = kl();
              ge(B, pe);
            }, Ri = (B) => {
              var pe = Sl();
              ge(B, pe);
            }, Mi = (B) => {
              var pe = Tl();
              ge(B, pe);
            }, Pi = (B) => {
              var pe = Al();
              ge(B, pe);
            }, Oi = (B) => {
              var pe = Cl();
              ge(B, pe);
            };
            yn($r, (B) => {
              b(F).id === "Routes" ? B(Ci) : b(F).id === "Layouts" ? B(Ni, 1) : b(F).id === "Components" ? B(Ri, 2) : b(F).id === "Content" ? B(Mi, 3) : b(F).id === "Meta" ? B(Pi, 4) : B(Oi, -1);
            });
          }
          se(Ot);
          var sn = He(Ot, 2), Ii = _e(sn, !0);
          se(sn), se(Me), Jt(() => {
            Pt = cl(Me, 1, "area-card svelte-kew1mv", null, Pt, { selected: b(o) === b(F).id }), ur(Me, "title", b(F).hint), Zt(Ii, b(F).label);
          }), Xt("click", Me, () => {
            D(o, b(F).id, !0), h();
          }), ge(I, Me);
        }), se(z), se(P);
        var O = He(P, 2), ie = He(_e(O), 2), q = _e(ie);
        pl(q);
        var X = He(q, 2), pt = _e(X, !0);
        se(X), se(ie), se(O);
        var ve = He(O, 2);
        {
          var yr = (I) => {
            var F = Rl(), Me = He(_e(F), 2), Pt = _e(Me), Ot = _e(Pt);
            se(Pt), se(Me), se(F), Jt(($r) => Zt(Ot, `${$r ?? ""}${b(_).length > 300 ? `
…` : ""}`), [() => b(_).slice(0, 300)]), ge(I, F);
          };
          yn(ve, (I) => {
            b(_) && I(yr);
          });
        }
        Jt(
          (I, F) => {
            ur(q, "placeholder", I), Zt(pt, F);
          },
          [
            () => {
              var I;
              return `e.g. newPage${((I = l.find((F) => F.id === b(o))) == null ? void 0 : I.ext) ?? ".html"}`;
            },
            () => {
              var I;
              return ((I = l.find((F) => F.id === b(o))) == null ? void 0 : I.ext) ?? "";
            }
          ]
        ), Xt("keydown", q, (I) => {
          I.key === "Enter" && b(d) && v();
        }), ml(q, () => b(c), (I) => D(c, I)), ge(g, T);
      },
      $$slots: { footer: !0, default: !0 }
    });
  }
  return Bn($);
}
Js(["click", "keydown"]);
customElements.define("efsdb-popover", $l(
  Ol,
  {
    open: {},
    defaultArea: {},
    defaultFilename: {},
    onConfirm: {},
    onClose: {}
  },
  [],
  [],
  { mode: "open" }
));
