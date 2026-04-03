var vl = Object.defineProperty;
var En = (e) => {
  throw TypeError(e);
};
var _l = (e, t, r) => t in e ? vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var F = (e, t, r) => _l(e, typeof t != "symbol" ? t + "" : t, r), Lr = (e, t, r) => t.has(e) || En("Cannot " + r);
var f = (e, t, r) => (Lr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? En("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, n) => (Lr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), L = (e, t, r) => (Lr(e, t, "access private method"), r);
var Un;
typeof window < "u" && ((Un = window.__svelte ?? (window.__svelte = {})).v ?? (Un.v = /* @__PURE__ */ new Set())).add("5");
const pl = 1, gl = 4, bl = 8, ml = 16, Xn = 1, wl = 2, Gn = "[", Kn = "[!", kn = "[?", Jn = "]", Lt = {}, V = Symbol(), Zn = "http://www.w3.org/1999/xhtml", yl = !1;
var Qn = Array.isArray, $l = Array.prototype.indexOf, Dt = Array.prototype.includes, xl = Array.from, mr = Object.keys, wr = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, El = Object.getOwnPropertyDescriptors, kl = Object.prototype, Tl = Array.prototype, ei = Object.getPrototypeOf, Tn = Object.isExtensible;
const ti = () => {
};
function Sl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ri() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const U = 2, It = 4, Tr = 8, ni = 1 << 24, rt = 16, Re = 32, Qe = 64, Yr = 128, ve = 512, B = 1024, J = 2048, Ne = 4096, Ae = 8192, xe = 16384, nt = 32768, Sn = 1 << 25, wt = 65536, zn = 1 << 17, zl = 1 << 18, $t = 1 << 19, Cl = 1 << 20, yt = 65536, Br = 1 << 21, sn = 1 << 22, Ke = 1 << 23, Ct = Symbol("$state"), ii = Symbol("legacy props"), Al = Symbol(""), Le = new class extends Error {
  constructor() {
    super(...arguments);
    F(this, "name", "StaleReactionError");
    F(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Wn;
const Rl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Wn = globalThis.document) != null && Wn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Sr = 3, zr = 8;
function Nl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ml() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ll(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Il() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Yl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Cr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ql() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ul() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let A = !1;
function Tt(e) {
  A = e;
}
let T;
function Ee(e) {
  if (e === null)
    throw Cr(), Lt;
  return T = e;
}
function an() {
  return Ee(/* @__PURE__ */ qe(T));
}
function M(e) {
  if (A) {
    if (/* @__PURE__ */ qe(T) !== null)
      throw Cr(), Lt;
    T = e;
  }
}
function qr(e = 1) {
  if (A) {
    for (var t = e, r = T; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ qe(r);
    T = r;
  }
}
function li(e = !0) {
  for (var t = 0, r = T; ; ) {
    if (r.nodeType === zr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Jn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Gn || n === Kn || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(r)
    );
    e && r.remove(), r = i;
  }
}
function Wl(e) {
  if (!e || e.nodeType !== zr)
    throw Cr(), Lt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function si(e) {
  return e === this.v;
}
function Vl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ai(e) {
  return !Vl(e, this.v);
}
let Xl = !1, ue = null;
function Ft(e) {
  ue = e;
}
function on(e, t = !1, r) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      k
    ),
    l: null
  };
}
function fn(e) {
  var t = (
    /** @type {ComponentContext} */
    ue
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ri(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ue = t.p, e ?? /** @type {T} */
  {};
}
function oi() {
  return !0;
}
let ut = [];
function fi() {
  var e = ut;
  ut = [], Sl(e);
}
function Je(e) {
  if (ut.length === 0 && !Xt) {
    var t = ut;
    queueMicrotask(() => {
      t === ut && fi();
    });
  }
  ut.push(e);
}
function Gl() {
  for (; ut.length > 0; )
    fi();
}
function ui(e) {
  var t = k;
  if (t === null)
    return $.f |= Ke, e;
  if ((t.f & nt) === 0 && (t.f & It) === 0)
    throw e;
  Ge(e, t);
}
function Ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & Yr) !== 0) {
      if ((t.f & nt) === 0)
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
const Kl = -7169;
function Y(e, t) {
  e.f = e.f & Kl | t;
}
function un(e) {
  (e.f & ve) !== 0 || e.deps === null ? Y(e, B) : Y(e, Ne);
}
function ci(e) {
  if (e !== null)
    for (const t of e)
      (t.f & U) === 0 || (t.f & yt) === 0 || (t.f ^= yt, ci(
        /** @type {Derived} */
        t.deps
      ));
}
function di(e, t, r) {
  (e.f & J) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && r.add(e), ci(e.deps), Y(e, B);
}
let dr = !1;
function Jl(e) {
  var t = dr;
  try {
    return dr = !1, [e(), dr];
  } finally {
    dr = t;
  }
}
const ot = /* @__PURE__ */ new Set();
let w = null, X = null, Ur = null, Xt = !1, Dr = !1, St = null, vr = null;
var Cn = 0;
let Zl = 1;
var At, Rt, Nt, Mt, Qt, se, vt, De, Ie, Ot, Z, Wr, Vr, Xr, Gr, hi;
const xr = class xr {
  constructor() {
    y(this, Z);
    // for debugging. TODO remove once async is stable
    F(this, "id", Zl++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    F(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    F(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, At, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, Rt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    y(this, Nt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    y(this, Mt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    y(this, Qt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    y(this, se, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    y(this, vt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    y(this, De, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    y(this, Ie, /* @__PURE__ */ new Map());
    F(this, "is_fork", !1);
    y(this, Ot, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Ie).has(t) || f(this, Ie).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, Ie).get(t);
    if (r) {
      f(this, Ie).delete(t);
      for (var n of r.d)
        Y(n, J), this.schedule(n);
      for (n of r.m)
        Y(n, Ne), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== V && !this.previous.has(t) && this.previous.set(t, r), (t.f & Ke) === 0 && (this.current.set(t, t.v), X == null || X.set(t, t.v));
  }
  activate() {
    w = this;
  }
  deactivate() {
    w = null, X = null;
  }
  flush() {
    try {
      Dr = !0, w = this, L(this, Z, Vr).call(this);
    } finally {
      Cn = 0, Ur = null, St = null, vr = null, Dr = !1, w = null, X = null, Ze.clear();
    }
  }
  discard() {
    for (const t of f(this, Rt)) t(this);
    f(this, Rt).clear(), ot.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    m(this, Nt, f(this, Nt) + 1), t && m(this, Mt, f(this, Mt) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    m(this, Nt, f(this, Nt) - 1), t && m(this, Mt, f(this, Mt) - 1), !(f(this, Ot) || r) && (m(this, Ot, !0), Je(() => {
      m(this, Ot, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, vt).add(n);
    for (const n of r)
      f(this, De).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Rt).add(t);
  }
  settled() {
    return (f(this, Qt) ?? m(this, Qt, ri())).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new xr();
      Dr || (ot.add(w), Xt || Je(() => {
        w === t && t.flush();
      }));
    }
    return w;
  }
  apply() {
    {
      X = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Ur = t, (i = t.b) != null && i.is_pending && (t.f & (It | Tr | ni)) !== 0 && (t.f & nt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (St !== null && r === k && ($ === null || ($.f & U) === 0))
        return;
      if ((n & (Qe | Re)) !== 0) {
        if ((n & B) === 0)
          return;
        r.f ^= B;
      }
    }
    f(this, se).push(r);
  }
};
At = new WeakMap(), Rt = new WeakMap(), Nt = new WeakMap(), Mt = new WeakMap(), Qt = new WeakMap(), se = new WeakMap(), vt = new WeakMap(), De = new WeakMap(), Ie = new WeakMap(), Ot = new WeakMap(), Z = new WeakSet(), Wr = function() {
  return this.is_fork || f(this, Mt) > 0;
}, Vr = function() {
  var a, u;
  if (Cn++ > 1e3 && (ot.delete(this), Ql()), !L(this, Z, Wr).call(this)) {
    for (const o of f(this, vt))
      f(this, De).delete(o), Y(o, J), this.schedule(o);
    for (const o of f(this, De))
      Y(o, Ne), this.schedule(o);
  }
  const t = f(this, se);
  m(this, se, []), this.apply();
  var r = St = [], n = [], i = vr = [];
  for (const o of t)
    try {
      L(this, Z, Xr).call(this, o, r, n);
    } catch (c) {
      throw gi(o), c;
    }
  if (w = null, i.length > 0) {
    var l = xr.ensure();
    for (const o of i)
      l.schedule(o);
  }
  if (St = null, vr = null, L(this, Z, Wr).call(this)) {
    L(this, Z, Gr).call(this, n), L(this, Z, Gr).call(this, r);
    for (const [o, c] of f(this, Ie))
      pi(o, c);
  } else {
    f(this, Nt) === 0 && ot.delete(this), f(this, vt).clear(), f(this, De).clear();
    for (const o of f(this, At)) o(this);
    f(this, At).clear(), An(n), An(r), (a = f(this, Qt)) == null || a.resolve();
  }
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    w
  );
  if (f(this, se).length > 0) {
    const o = s ?? (s = this);
    f(o, se).push(...f(this, se).filter((c) => !f(o, se).includes(c)));
  }
  s !== null && (ot.add(s), L(u = s, Z, Vr).call(u)), ot.has(this) || L(this, Z, hi).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Xr = function(t, r, n) {
  t.f ^= B;
  for (var i = t.first; i !== null; ) {
    var l = i.f, s = (l & (Re | Qe)) !== 0, a = s && (l & B) !== 0, u = a || (l & Ae) !== 0 || f(this, Ie).has(i);
    if (!u && i.fn !== null) {
      s ? i.f ^= B : (l & It) !== 0 ? r.push(i) : sr(i) && ((l & rt) !== 0 && f(this, De).add(i), jt(i));
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
Gr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    di(t[r], f(this, vt), f(this, De));
}, hi = function() {
  var u;
  for (const o of ot) {
    var t = o.id < this.id, r = [];
    for (const [c, v] of this.current) {
      if (o.current.has(c))
        if (t && v !== o.current.get(c))
          o.current.set(c, v);
        else
          continue;
      r.push(c);
    }
    var n = [...o.current.keys()].filter((c) => !this.current.has(c));
    if (n.length === 0)
      t && o.discard();
    else if (r.length > 0) {
      o.activate();
      var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var s of r)
        vi(s, n, i, l);
      if (f(o, se).length > 0) {
        o.apply();
        for (var a of f(o, se))
          L(u = o, Z, Xr).call(u, a, [], []);
        m(o, se, []);
      }
      o.deactivate();
    }
  }
};
let et = xr;
function ie(e) {
  var t = Xt;
  Xt = !0;
  try {
    for (var r; ; ) {
      if (Gl(), w === null)
        return (
          /** @type {T} */
          r
        );
      w.flush();
    }
  } finally {
    Xt = t;
  }
}
function Ql() {
  try {
    Dl();
  } catch (e) {
    Ge(e, Ur);
  }
}
let be = null;
function An(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (xe | Ae)) === 0 && sr(n) && (be = /* @__PURE__ */ new Set(), jt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Oi(n), (be == null ? void 0 : be.size) > 0)) {
        Ze.clear();
        for (const i of be) {
          if ((i.f & (xe | Ae)) !== 0) continue;
          const l = [i];
          let s = i.parent;
          for (; s !== null; )
            be.has(s) && (be.delete(s), l.push(s)), s = s.parent;
          for (let a = l.length - 1; a >= 0; a--) {
            const u = l[a];
            (u.f & (xe | Ae)) === 0 && jt(u);
          }
        }
        be.clear();
      }
    }
    be = null;
  }
}
function vi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & U) !== 0 ? vi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (l & (sn | rt)) !== 0 && (l & J) === 0 && _i(i, t, n) && (Y(i, J), cn(
        /** @type {Effect} */
        i
      ));
    }
}
function _i(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Dt.call(t, i))
        return !0;
      if ((i.f & U) !== 0 && _i(
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
function cn(e) {
  w.schedule(e);
}
function pi(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & B) !== 0)) {
    (e.f & J) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), Y(e, B);
    for (var r = e.first; r !== null; )
      pi(r, t), r = r.next;
  }
}
function gi(e) {
  Y(e, B);
  for (var t = e.first; t !== null; )
    gi(t), t = t.next;
}
function es(e) {
  let t = 0, r = lr(0), n;
  return () => {
    pn() && (d(r), bn(() => (t === 0 && (n = Rr(() => e(() => Gt(r)))), t += 1, () => {
      Je(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Gt(r));
      });
    })));
  };
}
var ts = wt | $t;
function rs(e, t, r, n) {
  new ns(e, t, r, n);
}
var ae, er, Te, _t, ee, Se, oe, me, Fe, pt, Xe, Pt, tr, rr, je, Er, j, bi, mi, wi, Kr, _r, pr, Jr;
class ns {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    y(this, j);
    /** @type {Boundary | null} */
    F(this, "parent");
    F(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    F(this, "transform_error");
    /** @type {TemplateNode} */
    y(this, ae);
    /** @type {TemplateNode | null} */
    y(this, er, A ? T : null);
    /** @type {BoundaryProps} */
    y(this, Te);
    /** @type {((anchor: Node) => void)} */
    y(this, _t);
    /** @type {Effect} */
    y(this, ee);
    /** @type {Effect | null} */
    y(this, Se, null);
    /** @type {Effect | null} */
    y(this, oe, null);
    /** @type {Effect | null} */
    y(this, me, null);
    /** @type {DocumentFragment | null} */
    y(this, Fe, null);
    y(this, pt, 0);
    y(this, Xe, 0);
    y(this, Pt, !1);
    /** @type {Set<Effect>} */
    y(this, tr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    y(this, rr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    y(this, je, null);
    y(this, Er, es(() => (m(this, je, lr(f(this, pt))), () => {
      m(this, je, null);
    })));
    var l;
    m(this, ae, t), m(this, Te, r), m(this, _t, (s) => {
      var a = (
        /** @type {Effect} */
        k
      );
      a.b = this, a.f |= Yr, n(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? ((l = this.parent) == null ? void 0 : l.transform_error) ?? ((s) => s), m(this, ee, mn(() => {
      if (A) {
        const s = (
          /** @type {Comment} */
          f(this, er)
        );
        an();
        const a = s.data === Kn;
        if (s.data.startsWith(kn)) {
          const o = JSON.parse(s.data.slice(kn.length));
          L(this, j, mi).call(this, o);
        } else a ? L(this, j, wi).call(this) : L(this, j, bi).call(this);
      } else
        L(this, j, Kr).call(this);
    }, ts)), A && m(this, ae, T);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    di(t, f(this, tr), f(this, rr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, Te).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    L(this, j, Jr).call(this, t, r), m(this, pt, f(this, pt) + t), !(!f(this, je) || f(this, Pt)) && (m(this, Pt, !0), Je(() => {
      m(this, Pt, !1), f(this, je) && $r(f(this, je), f(this, pt));
    }));
  }
  get_effect_pending() {
    return f(this, Er).call(this), d(
      /** @type {Source<number>} */
      f(this, je)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, Te).onerror;
    let n = f(this, Te).failed;
    if (!r && !n)
      throw t;
    f(this, Se) && (re(f(this, Se)), m(this, Se, null)), f(this, oe) && (re(f(this, oe)), m(this, oe, null)), f(this, me) && (re(f(this, me)), m(this, me, null)), A && (Ee(
      /** @type {TemplateNode} */
      f(this, er)
    ), qr(), Ee(li()));
    var i = !1, l = !1;
    const s = () => {
      if (i) {
        Ul();
        return;
      }
      i = !0, l && Bl(), f(this, me) !== null && Kt(f(this, me), () => {
        m(this, me, null);
      }), L(this, j, pr).call(this, () => {
        L(this, j, Kr).call(this);
      });
    }, a = (u) => {
      try {
        l = !0, r == null || r(u, s), l = !1;
      } catch (o) {
        Ge(o, f(this, ee) && f(this, ee).parent);
      }
      n && m(this, me, L(this, j, pr).call(this, () => {
        try {
          return Pe(() => {
            var o = (
              /** @type {Effect} */
              k
            );
            o.b = this, o.f |= Yr, n(
              f(this, ae),
              () => u,
              () => s
            );
          });
        } catch (o) {
          return Ge(
            o,
            /** @type {Effect} */
            f(this, ee).parent
          ), null;
        }
      }));
    };
    Je(() => {
      var u;
      try {
        u = this.transform_error(t);
      } catch (o) {
        Ge(o, f(this, ee) && f(this, ee).parent);
        return;
      }
      u !== null && typeof u == "object" && typeof /** @type {any} */
      u.then == "function" ? u.then(
        a,
        /** @param {unknown} e */
        (o) => Ge(o, f(this, ee) && f(this, ee).parent)
      ) : a(u);
    });
  }
}
ae = new WeakMap(), er = new WeakMap(), Te = new WeakMap(), _t = new WeakMap(), ee = new WeakMap(), Se = new WeakMap(), oe = new WeakMap(), me = new WeakMap(), Fe = new WeakMap(), pt = new WeakMap(), Xe = new WeakMap(), Pt = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), je = new WeakMap(), Er = new WeakMap(), j = new WeakSet(), bi = function() {
  try {
    m(this, Se, Pe(() => f(this, _t).call(this, f(this, ae))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
mi = function(t) {
  const r = f(this, Te).failed;
  r && m(this, me, Pe(() => {
    r(
      f(this, ae),
      () => t,
      () => () => {
      }
    );
  }));
}, wi = function() {
  const t = f(this, Te).pending;
  t && (this.is_pending = !0, m(this, oe, Pe(() => t(f(this, ae)))), Je(() => {
    var r = m(this, Fe, document.createDocumentFragment()), n = Be();
    r.append(n), m(this, Se, L(this, j, pr).call(this, () => Pe(() => f(this, _t).call(this, n)))), f(this, Xe) === 0 && (f(this, ae).before(r), m(this, Fe, null), Kt(
      /** @type {Effect} */
      f(this, oe),
      () => {
        m(this, oe, null);
      }
    ), L(this, j, _r).call(
      this,
      /** @type {Batch} */
      w
    ));
  }));
}, Kr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, Xe, 0), m(this, pt, 0), m(this, Se, Pe(() => {
      f(this, _t).call(this, f(this, ae));
    })), f(this, Xe) > 0) {
      var t = m(this, Fe, document.createDocumentFragment());
      Di(f(this, Se), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, Te).pending
      );
      m(this, oe, Pe(() => r(f(this, ae))));
    } else
      L(this, j, _r).call(
        this,
        /** @type {Batch} */
        w
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
_r = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, tr), f(this, rr));
}, /**
 * @template T
 * @param {() => T} fn
 */
pr = function(t) {
  var r = k, n = $, i = ue;
  Me(f(this, ee)), pe(f(this, ee)), Ft(f(this, ee).ctx);
  try {
    return et.ensure(), t();
  } catch (l) {
    return ui(l), null;
  } finally {
    Me(r), pe(n), Ft(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Jr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && L(n = this.parent, j, Jr).call(n, t, r);
    return;
  }
  m(this, Xe, f(this, Xe) + t), f(this, Xe) === 0 && (L(this, j, _r).call(this, r), f(this, oe) && Kt(f(this, oe), () => {
    m(this, oe, null);
  }), f(this, Fe) && (f(this, ae).before(f(this, Fe)), m(this, Fe, null)));
};
function is(e, t, r, n) {
  const i = dn;
  var l = e.filter((_) => !_.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(i));
    return;
  }
  var s = (
    /** @type {Effect} */
    k
  ), a = ls(), u = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function o(_) {
    a();
    try {
      n(_);
    } catch (p) {
      (s.f & xe) === 0 && Ge(p, s);
    }
    yr();
  }
  if (r.length === 0) {
    u.then(() => o(t.map(i)));
    return;
  }
  var c = yi();
  function v() {
    Promise.all(r.map((_) => /* @__PURE__ */ ss(_))).then((_) => o([...t.map(i), ..._])).catch((_) => Ge(_, s)).finally(() => c());
  }
  u ? u.then(() => {
    a(), v(), yr();
  }) : v();
}
function ls() {
  var e = (
    /** @type {Effect} */
    k
  ), t = $, r = ue, n = (
    /** @type {Batch} */
    w
  );
  return function(l = !0) {
    Me(e), pe(t), Ft(r), l && (e.f & xe) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function yr(e = !0) {
  Me(null), pe(null), Ft(null), e && (w == null || w.deactivate());
}
function yi() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    k.b
  ), t = (
    /** @type {Batch} */
    w
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  var t = U | J, r = $ !== null && ($.f & U) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return k !== null && (k.f |= $t), {
    ctx: ue,
    deps: null,
    effects: null,
    equals: si,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      V
    ),
    wv: 0,
    parent: r ?? k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ss(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    k
  );
  n === null && Ml();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = lr(
    /** @type {V} */
    V
  ), s = !$, a = /* @__PURE__ */ new Map();
  return ws(() => {
    var p;
    var u = (
      /** @type {Effect} */
      k
    ), o = ri();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(yr);
    } catch (h) {
      o.reject(h), yr();
    }
    var c = (
      /** @type {Batch} */
      w
    );
    if (s) {
      if ((u.f & nt) !== 0)
        var v = yi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (p = a.get(c)) == null || p.reject(Le), a.delete(c);
      else {
        for (const h of a.values())
          h.reject(Le);
        a.clear();
      }
      a.set(c, o);
    }
    const _ = (h, x = void 0) => {
      if (v) {
        var E = x === Le;
        v(E);
      }
      if (!(x === Le || (u.f & xe) !== 0)) {
        if (c.activate(), x)
          l.f |= Ke, $r(l, x);
        else {
          (l.f & Ke) !== 0 && (l.f ^= Ke), $r(l, h);
          for (const [N, z] of a) {
            if (a.delete(N), N === c) break;
            z.reject(Le);
          }
        }
        c.deactivate();
      }
    };
    o.promise.then(_, (h) => _(null, h || "unknown"));
  }), gn(() => {
    for (const u of a.values())
      u.reject(Le);
  }), new Promise((u) => {
    function o(c) {
      function v() {
        c === i ? u(l) : o(i);
      }
      c.then(v, v);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ dn(e);
  return t.equals = ai, t;
}
function os(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function fs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & U) === 0)
      return (t.f & xe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function hn(e) {
  var t, r = k;
  Me(fs(e));
  try {
    e.f &= ~yt, os(e), t = Hi(e);
  } finally {
    Me(r);
  }
  return t;
}
function $i(e) {
  var t = e.v, r = hn(e);
  if (!e.equals(r) && (e.wv = Fi(), (!(w != null && w.is_fork) || e.deps === null) && (e.v = r, w == null || w.capture(e, t), e.deps === null))) {
    Y(e, B);
    return;
  }
  tt || (X !== null ? (pn() || w != null && w.is_fork) && X.set(e, r) : un(e));
}
function us(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Le), n.teardown = ti, n.ac = null, Zt(n, 0), wn(n));
}
function xi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && jt(t);
}
let Zr = /* @__PURE__ */ new Set();
const Ze = /* @__PURE__ */ new Map();
let Ei = !1;
function lr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: si,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = lr(e);
  return Es(r), r;
}
// @__NO_SIDE_EFFECTS__
function cs(e, t = !1, r = !0) {
  const n = lr(e);
  return t || (n.equals = ai), n;
}
function g(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || ($.f & zn) !== 0) && oi() && ($.f & (U | rt | sn | zn)) !== 0 && (_e === null || !Dt.call(_e, e)) && Yl();
  let n = r ? zt(t) : t;
  return $r(e, n, vr);
}
function $r(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    tt ? Ze.set(e, t) : Ze.set(e, n), e.v = t;
    var i = et.ensure();
    if (i.capture(e, n), (e.f & U) !== 0) {
      const l = (
        /** @type {Derived} */
        e
      );
      (e.f & J) !== 0 && hn(l), X === null && un(l);
    }
    e.wv = Fi(), ki(e, J, r), k !== null && (k.f & B) !== 0 && (k.f & (Re | Qe)) === 0 && (ce === null ? ks([e]) : ce.push(e)), !i.is_fork && Zr.size > 0 && !Ei && ds();
  }
  return t;
}
function ds() {
  Ei = !1;
  for (const e of Zr)
    (e.f & B) !== 0 && Y(e, Ne), sr(e) && jt(e);
  Zr.clear();
}
function Gt(e) {
  g(e, e.v + 1);
}
function ki(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, l = 0; l < i; l++) {
      var s = n[l], a = s.f, u = (a & J) === 0;
      if (u && Y(s, t), (a & U) !== 0) {
        var o = (
          /** @type {Derived} */
          s
        );
        X == null || X.delete(o), (a & yt) === 0 && (a & ve && (s.f |= yt), ki(o, Ne, r));
      } else if (u) {
        var c = (
          /** @type {Effect} */
          s
        );
        (a & rt) !== 0 && be !== null && be.add(c), r !== null ? r.push(c) : cn(c);
      }
    }
}
function zt(e) {
  if (typeof e != "object" || e === null || Ct in e)
    return e;
  const t = ei(e);
  if (t !== kl && t !== Tl)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Qn(e), i = /* @__PURE__ */ I(0), l = mt, s = (a) => {
    if (mt === l)
      return a();
    var u = $, o = mt;
    pe(null), Ln(l);
    var c = a();
    return pe(u), Ln(o), c;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && jl();
        var c = r.get(u);
        return c === void 0 ? s(() => {
          var v = /* @__PURE__ */ I(o.value);
          return r.set(u, v), v;
        }) : g(c, o.value, !0), !0;
      },
      deleteProperty(a, u) {
        var o = r.get(u);
        if (o === void 0) {
          if (u in a) {
            const c = s(() => /* @__PURE__ */ I(V));
            r.set(u, c), Gt(i);
          }
        } else
          g(o, V), Gt(i);
        return !0;
      },
      get(a, u, o) {
        var p;
        if (u === Ct)
          return e;
        var c = r.get(u), v = u in a;
        if (c === void 0 && (!v || (p = bt(a, u)) != null && p.writable) && (c = s(() => {
          var h = zt(v ? a[u] : V), x = /* @__PURE__ */ I(h);
          return x;
        }), r.set(u, c)), c !== void 0) {
          var _ = d(c);
          return _ === V ? void 0 : _;
        }
        return Reflect.get(a, u, o);
      },
      getOwnPropertyDescriptor(a, u) {
        var o = Reflect.getOwnPropertyDescriptor(a, u);
        if (o && "value" in o) {
          var c = r.get(u);
          c && (o.value = d(c));
        } else if (o === void 0) {
          var v = r.get(u), _ = v == null ? void 0 : v.v;
          if (v !== void 0 && _ !== V)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return o;
      },
      has(a, u) {
        var _;
        if (u === Ct)
          return !0;
        var o = r.get(u), c = o !== void 0 && o.v !== V || Reflect.has(a, u);
        if (o !== void 0 || k !== null && (!c || (_ = bt(a, u)) != null && _.writable)) {
          o === void 0 && (o = s(() => {
            var p = c ? zt(a[u]) : V, h = /* @__PURE__ */ I(p);
            return h;
          }), r.set(u, o));
          var v = d(o);
          if (v === V)
            return !1;
        }
        return c;
      },
      set(a, u, o, c) {
        var S;
        var v = r.get(u), _ = u in a;
        if (n && u === "length")
          for (var p = o; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? g(h, V) : p in a && (h = s(() => /* @__PURE__ */ I(V)), r.set(p + "", h));
          }
        if (v === void 0)
          (!_ || (S = bt(a, u)) != null && S.writable) && (v = s(() => /* @__PURE__ */ I(void 0)), g(v, zt(o)), r.set(u, v));
        else {
          _ = v.v !== V;
          var x = s(() => zt(o));
          g(v, x);
        }
        var E = Reflect.getOwnPropertyDescriptor(a, u);
        if (E != null && E.set && E.set.call(c, o), !_) {
          if (n && typeof u == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(u);
            Number.isInteger(z) && z >= N.v && g(N, z + 1);
          }
          Gt(i);
        }
        return !0;
      },
      ownKeys(a) {
        d(i);
        var u = Reflect.ownKeys(a).filter((v) => {
          var _ = r.get(v);
          return _ === void 0 || _.v !== V;
        });
        for (var [o, c] of r)
          c.v !== V && !(o in a) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        Hl();
      }
    }
  );
}
function Rn(e) {
  try {
    if (e !== null && typeof e == "object" && Ct in e)
      return e[Ct];
  } catch {
  }
  return e;
}
function hs(e, t) {
  return Object.is(Rn(e), Rn(t));
}
var Nn, Ti, Si, zi;
function Qr() {
  if (Nn === void 0) {
    Nn = window, Ti = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Si = bt(t, "firstChild").get, zi = bt(t, "nextSibling").get, Tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Tn(r) && (r.__t = void 0);
  }
}
function Be(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return (
    /** @type {TemplateNode | null} */
    Si.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    zi.call(e)
  );
}
function O(e, t) {
  if (!A)
    return /* @__PURE__ */ ye(e);
  var r = /* @__PURE__ */ ye(T);
  if (r === null)
    r = T.appendChild(Be());
  else if (t && r.nodeType !== Sr) {
    var n = Be();
    return r == null || r.before(n), Ee(n), n;
  }
  return t && _n(
    /** @type {Text} */
    r
  ), Ee(r), r;
}
function Mn(e, t = !1) {
  if (!A) {
    var r = /* @__PURE__ */ ye(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ qe(r) : r;
  }
  if (t) {
    if ((T == null ? void 0 : T.nodeType) !== Sr) {
      var n = Be();
      return T == null || T.before(n), Ee(n), n;
    }
    _n(
      /** @type {Text} */
      T
    );
  }
  return T;
}
function D(e, t = 1, r = !1) {
  let n = A ? T : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(n);
  if (!A)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Sr) {
      var l = Be();
      return n === null ? i == null || i.after(l) : n.before(l), Ee(l), l;
    }
    _n(
      /** @type {Text} */
      n
    );
  }
  return Ee(n), n;
}
function vs(e) {
  e.textContent = "";
}
function _s() {
  return !1;
}
function vn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Zn, e, void 0)
  );
}
function _n(e) {
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
let On = !1;
function Ci() {
  On || (On = !0, document.addEventListener(
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
function Ar(e) {
  var t = $, r = k;
  pe(null), Me(null);
  try {
    return e();
  } finally {
    pe(t), Me(r);
  }
}
function Ai(e, t, r, n = r) {
  e.addEventListener(t, () => Ar(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), Ci();
}
function ps(e) {
  k === null && ($ === null && Ll(), Pl()), tt && Ol();
}
function gs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Oe(e, t) {
  var r = k;
  r !== null && (r.f & Ae) !== 0 && (e |= Ae);
  var n = {
    ctx: ue,
    deps: null,
    nodes: null,
    f: e | J | ve,
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
  if ((e & It) !== 0)
    St !== null ? St.push(n) : et.ensure().schedule(n);
  else if (t !== null) {
    try {
      jt(n);
    } catch (s) {
      throw re(n), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & $t) === 0 && (i = i.first, (e & rt) !== 0 && (e & wt) !== 0 && i !== null && (i.f |= wt));
  }
  if (i !== null && (i.parent = r, r !== null && gs(i, r), $ !== null && ($.f & U) !== 0 && (e & Qe) === 0)) {
    var l = (
      /** @type {Derived} */
      $
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return n;
}
function pn() {
  return $ !== null && !$e;
}
function gn(e) {
  const t = Oe(Tr, null);
  return Y(t, B), t.teardown = e, t;
}
function en(e) {
  ps();
  var t = (
    /** @type {Effect} */
    k.f
  ), r = !$ && (t & Re) !== 0 && (t & nt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ue
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ri(e);
}
function Ri(e) {
  return Oe(It | Cl, e);
}
function bs(e) {
  et.ensure();
  const t = Oe(Qe | $t, e);
  return () => {
    re(t);
  };
}
function ms(e) {
  et.ensure();
  const t = Oe(Qe | $t, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Kt(t, () => {
      re(t), n(void 0);
    }) : (re(t), n(void 0));
  });
}
function Ni(e) {
  return Oe(It, e);
}
function ws(e) {
  return Oe(sn | $t, e);
}
function bn(e, t = 0) {
  return Oe(Tr | t, e);
}
function ft(e, t = [], r = [], n = []) {
  is(n, t, r, (i) => {
    Oe(Tr, () => e(...i.map(d)));
  });
}
function mn(e, t = 0) {
  var r = Oe(rt | t, e);
  return r;
}
function Pe(e) {
  return Oe(Re | $t, e);
}
function Mi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = tt, n = $;
    Pn(!0), pe(null);
    try {
      t.call(null);
    } finally {
      Pn(r), pe(n);
    }
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Ar(() => {
      i.abort(Le);
    });
    var n = r.next;
    (r.f & Qe) !== 0 ? r.parent = null : re(r, t), r = n;
  }
}
function ys(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && re(t), t = r;
  }
}
function re(e, t = !0) {
  var r = !1;
  (t || (e.f & zl) !== 0) && e.nodes !== null && e.nodes.end !== null && ($s(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), Y(e, Sn), wn(e, t && !r), Zt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  Mi(e), e.f ^= Sn, e.f |= xe;
  var i = e.parent;
  i !== null && i.first !== null && Oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function $s(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ qe(e);
    e.remove(), e = r;
  }
}
function Oi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Kt(e, t, r = !0) {
  var n = [];
  Pi(e, n, !0);
  var i = () => {
    r && re(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var s = () => --l || i();
    for (var a of n)
      a.out(s);
  } else
    i();
}
function Pi(e, t, r) {
  if ((e.f & Ae) === 0) {
    e.f ^= Ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var l = i.next, s = (i.f & wt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Re) !== 0 && (e.f & rt) !== 0;
      Pi(i, t, s ? r : !1), i = l;
    }
  }
}
function xs(e) {
  Li(e, !0);
}
function Li(e, t) {
  if ((e.f & Ae) !== 0) {
    e.f ^= Ae, (e.f & B) === 0 && (Y(e, J), et.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & wt) !== 0 || (r.f & Re) !== 0;
      Li(r, i ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const s of l)
        (s.is_global || t) && s.in();
  }
}
function Di(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ qe(r);
      t.append(r), r = i;
    }
}
let gr = !1, tt = !1;
function Pn(e) {
  tt = e;
}
let $ = null, $e = !1;
function pe(e) {
  $ = e;
}
let k = null;
function Me(e) {
  k = e;
}
let _e = null;
function Es(e) {
  $ !== null && (_e === null ? _e = [e] : _e.push(e));
}
let te = null, le = 0, ce = null;
function ks(e) {
  ce = e;
}
let Ii = 1, ct = 0, mt = ct;
function Ln(e) {
  mt = e;
}
function Fi() {
  return ++Ii;
}
function sr(e) {
  var t = e.f;
  if ((t & J) !== 0)
    return !0;
  if (t & U && (e.f &= ~yt), (t & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var l = r[i];
      if (sr(
        /** @type {Derived} */
        l
      ) && $i(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    X === null && Y(e, B);
  }
  return !1;
}
function ji(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(_e !== null && Dt.call(_e, e)))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & U) !== 0 ? ji(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Y(l, J) : (l.f & B) !== 0 && Y(l, Ne), cn(
        /** @type {Effect} */
        l
      ));
    }
}
function Hi(e) {
  var x;
  var t = te, r = le, n = ce, i = $, l = _e, s = ue, a = $e, u = mt, o = e.f;
  te = /** @type {null | Value[]} */
  null, le = 0, ce = null, $ = (o & (Re | Qe)) === 0 ? e : null, _e = null, Ft(e.ctx), $e = !1, mt = ++ct, e.ac !== null && (Ar(() => {
    e.ac.abort(Le);
  }), e.ac = null);
  try {
    e.f |= Br;
    var c = (
      /** @type {Function} */
      e.fn
    ), v = c();
    e.f |= nt;
    var _ = e.deps, p = w == null ? void 0 : w.is_fork;
    if (te !== null) {
      var h;
      if (p || Zt(e, le), _ !== null && le > 0)
        for (_.length = le + te.length, h = 0; h < te.length; h++)
          _[le + h] = te[h];
      else
        e.deps = _ = te;
      if (pn() && (e.f & ve) !== 0)
        for (h = le; h < _.length; h++)
          ((x = _[h]).reactions ?? (x.reactions = [])).push(e);
    } else !p && _ !== null && le < _.length && (Zt(e, le), _.length = le);
    if (oi() && ce !== null && !$e && _ !== null && (e.f & (U | Ne | J)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      ce.length; h++)
        ji(
          ce[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ct++, i.deps !== null)
        for (let E = 0; E < r; E += 1)
          i.deps[E].rv = ct;
      if (t !== null)
        for (const E of t)
          E.rv = ct;
      ce !== null && (n === null ? n = ce : n.push(.../** @type {Source[]} */
      ce));
    }
    return (e.f & Ke) !== 0 && (e.f ^= Ke), v;
  } catch (E) {
    return ui(E);
  } finally {
    e.f ^= Br, te = t, le = r, ce = n, $ = i, _e = l, Ft(s), $e = a, mt = u;
  }
}
function Ts(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = $l.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & U) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !Dt.call(te, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & ve) !== 0 && (l.f ^= ve, l.f &= ~yt), un(l), us(l), Zt(l, 0);
  }
}
function Zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ts(e, r[n]);
}
function jt(e) {
  var t = e.f;
  if ((t & xe) === 0) {
    Y(e, B);
    var r = k, n = gr;
    k = e, gr = !0;
    try {
      (t & (rt | ni)) !== 0 ? ys(e) : wn(e), Mi(e);
      var i = Hi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ii;
      var l;
      yl && Xl && (e.f & J) !== 0 && e.deps;
    } finally {
      gr = n, k = r;
    }
  }
}
async function Ss() {
  await Promise.resolve(), ie();
}
function d(e) {
  var t = e.f, r = (t & U) !== 0;
  if ($ !== null && !$e) {
    var n = k !== null && (k.f & xe) !== 0;
    if (!n && (_e === null || !Dt.call(_e, e))) {
      var i = $.deps;
      if (($.f & Br) !== 0)
        e.rv < ct && (e.rv = ct, te === null && i !== null && i[le] === e ? le++ : te === null ? te = [e] : te.push(e));
      else {
        ($.deps ?? ($.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [$] : Dt.call(l, $) || l.push($);
      }
    }
  }
  if (tt && Ze.has(e))
    return Ze.get(e);
  if (r) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (tt) {
      var a = s.v;
      return ((s.f & B) === 0 && s.reactions !== null || Bi(s)) && (a = hn(s)), Ze.set(s, a), a;
    }
    var u = (s.f & ve) === 0 && !$e && $ !== null && (gr || ($.f & ve) !== 0), o = (s.f & nt) === 0;
    sr(s) && (u && (s.f |= ve), $i(s)), u && !o && (xi(s), Yi(s));
  }
  if (X != null && X.has(e))
    return X.get(e);
  if ((e.f & Ke) !== 0)
    throw e.v;
  return e.v;
}
function Yi(e) {
  if (e.f |= ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & U) !== 0 && (t.f & ve) === 0 && (xi(
        /** @type {Derived} */
        t
      ), Yi(
        /** @type {Derived} */
        t
      ));
}
function Bi(e) {
  if (e.v === V) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ze.has(t) || (t.f & U) !== 0 && Bi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Rr(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const dt = Symbol("events"), qi = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Set();
function zs(e, t, r, n = {}) {
  function i(l) {
    if (n.capture || rn.call(t, l), !l.cancelBubble)
      return Ar(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Je(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Cs(e, t, r, n, i) {
  var l = { capture: n, passive: i }, s = zs(e, t, r, l);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && gn(() => {
    t.removeEventListener(e, s, l);
  });
}
function he(e, t, r) {
  (t[dt] ?? (t[dt] = {}))[e] = r;
}
function Ui(e) {
  for (var t = 0; t < e.length; t++)
    qi.add(e[t]);
  for (var r of tn)
    r(e);
}
let Dn = null;
function rn(e) {
  var E, N;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Dn = e;
  var s = 0, a = Dn === e && e[dt];
  if (a) {
    var u = i.indexOf(a);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[dt] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    u <= o && (s = u);
  }
  if (l = /** @type {Element} */
  i[s] || e.target, l !== t) {
    wr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var c = $, v = k;
    pe(null), Me(null);
    try {
      for (var _, p = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var x = (N = l[dt]) == null ? void 0 : N[n];
          x != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && x.call(l, e);
        } catch (z) {
          _ ? p.push(z) : _ = z;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (_) {
        for (let z of p)
          queueMicrotask(() => {
            throw z;
          });
        throw _;
      }
    } finally {
      e[dt] = t, delete e.currentTarget, pe(c), Me(v);
    }
  }
}
var Vn;
const Ir = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Vn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Vn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function As(e) {
  return (
    /** @type {string} */
    (Ir == null ? void 0 : Ir.createHTML(e)) ?? e
  );
}
function Wi(e) {
  var t = vn("template");
  return t.innerHTML = As(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ye(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  var r = (t & Xn) !== 0, n = (t & wl) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    if (A)
      return Ye(T, null), T;
    i === void 0 && (i = Wi(l ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(i)));
    var s = (
      /** @type {TemplateNode} */
      n || Ti ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ye(a, u);
    } else
      Ye(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Rs(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & Xn) !== 0, l = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (A)
      return Ye(T, null), T;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Wi(l)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ ye(a)
      );
      if (i)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ye(u); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ye(u)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ye(u);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (i) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(o)
      ), v = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ye(c, v);
    } else
      Ye(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ht(e, t) {
  return /* @__PURE__ */ Rs(e, t, "svg");
}
function Ns() {
  if (A)
    return Ye(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Be();
  return e.append(t, r), Ye(t, r), e;
}
function K(e, t) {
  if (A) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      k
    );
    ((r.f & nt) === 0 || r.nodes.end === null) && (r.nodes.end = T), an();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ms = ["touchstart", "touchmove"];
function Os(e) {
  return Ms.includes(e);
}
function nn(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Vi(e, t) {
  return Xi(e, t);
}
function Ps(e, t) {
  Qr(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, i = T;
  try {
    for (var l = /* @__PURE__ */ ye(r); l && (l.nodeType !== zr || /** @type {Comment} */
    l.data !== Gn); )
      l = /* @__PURE__ */ qe(l);
    if (!l)
      throw Lt;
    Tt(!0), Ee(
      /** @type {Comment} */
      l
    );
    const s = Xi(e, { ...t, anchor: l });
    return Tt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Lt && console.warn("Failed to hydrate: ", s), t.recover === !1 && Il(), Qr(), vs(r), Tt(!1), Vi(e, t);
  } finally {
    Tt(n), Ee(i);
  }
}
const hr = /* @__PURE__ */ new Map();
function Xi(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: s = !0, transformError: a }) {
  Qr();
  var u = void 0, o = ms(() => {
    var c = r ?? t.appendChild(Be());
    rs(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        on({});
        var h = (
          /** @type {ComponentContext} */
          ue
        );
        if (l && (h.c = l), i && (n.$$events = i), A && Ye(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, n) || {}, A && (k.nodes.end = T, T === null || T.nodeType !== zr || /** @type {Comment} */
        T.data !== Jn))
          throw Cr(), Lt;
        fn();
      },
      a
    );
    var v = /* @__PURE__ */ new Set(), _ = (p) => {
      for (var h = 0; h < p.length; h++) {
        var x = p[h];
        if (!v.has(x)) {
          v.add(x);
          var E = Os(x);
          for (const S of [t, document]) {
            var N = hr.get(S);
            N === void 0 && (N = /* @__PURE__ */ new Map(), hr.set(S, N));
            var z = N.get(x);
            z === void 0 ? (S.addEventListener(x, rn, { passive: E }), N.set(x, 1)) : N.set(x, z + 1);
          }
        }
      }
    };
    return _(xl(qi)), tn.add(_), () => {
      var E;
      for (var p of v)
        for (const N of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            hr.get(N)
          ), x = (
            /** @type {number} */
            h.get(p)
          );
          --x == 0 ? (N.removeEventListener(p, rn), h.delete(p), h.size === 0 && hr.delete(N)) : h.set(p, x);
        }
      tn.delete(_), c !== r && ((E = c.parentNode) == null || E.removeChild(c));
    };
  });
  return ln.set(u, o), u;
}
let ln = /* @__PURE__ */ new WeakMap();
function Ls(e, t) {
  const r = ln.get(e);
  return r ? (ln.delete(e), r(t)) : Promise.resolve();
}
var we, ze, fe, gt, nr, ir, kr;
class Gi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    F(this, "anchor");
    /** @type {Map<Batch, Key>} */
    y(this, we, /* @__PURE__ */ new Map());
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
    y(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    y(this, fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    y(this, gt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    y(this, nr, !0);
    /**
     * @param {Batch} batch
     */
    y(this, ir, (t) => {
      if (f(this, we).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, we).get(t)
        ), n = f(this, ze).get(r);
        if (n)
          xs(n), f(this, gt).delete(r);
        else {
          var i = f(this, fe).get(r);
          i && (f(this, ze).set(r, i.effect), f(this, fe).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [l, s] of f(this, we)) {
          if (f(this, we).delete(l), l === t)
            break;
          const a = f(this, fe).get(s);
          a && (re(a.effect), f(this, fe).delete(s));
        }
        for (const [l, s] of f(this, ze)) {
          if (l === r || f(this, gt).has(l)) continue;
          const a = () => {
            if (Array.from(f(this, we).values()).includes(l)) {
              var o = document.createDocumentFragment();
              Di(s, o), o.append(Be()), f(this, fe).set(l, { effect: s, fragment: o });
            } else
              re(s);
            f(this, gt).delete(l), f(this, ze).delete(l);
          };
          f(this, nr) || !n ? (f(this, gt).add(l), Kt(s, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    y(this, kr, (t) => {
      f(this, we).delete(t);
      const r = Array.from(f(this, we).values());
      for (const [n, i] of f(this, fe))
        r.includes(n) || (re(i.effect), f(this, fe).delete(n));
    });
    this.anchor = t, m(this, nr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      w
    ), i = _s();
    if (r && !f(this, ze).has(t) && !f(this, fe).has(t))
      if (i) {
        var l = document.createDocumentFragment(), s = Be();
        l.append(s), f(this, fe).set(t, {
          effect: Pe(() => r(s)),
          fragment: l
        });
      } else
        f(this, ze).set(
          t,
          Pe(() => r(this.anchor))
        );
    if (f(this, we).set(n, t), i) {
      for (const [a, u] of f(this, ze))
        a === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [a, u] of f(this, fe))
        a === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(f(this, ir)), n.ondiscard(f(this, kr));
    } else
      A && (this.anchor = T), f(this, ir).call(this, n);
  }
}
we = new WeakMap(), ze = new WeakMap(), fe = new WeakMap(), gt = new WeakMap(), nr = new WeakMap(), ir = new WeakMap(), kr = new WeakMap();
function In(e, t, ...r) {
  var n = new Gi(e);
  mn(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((l) => i(l, ...r)));
  }, wt);
}
function Ds(e) {
  ue === null && Nl(), en(() => {
    const t = Rr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ce(e, t, r = !1) {
  var n;
  A && (n = T, an());
  var i = new Gi(e), l = r ? wt : 0;
  function s(a, u) {
    if (A) {
      var o = Wl(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(o.substring(1))) {
        var c = li();
        Ee(c), i.anchor = c, Tt(!1), i.ensure(a, u), Tt(!0);
        return;
      }
    }
    i.ensure(a, u);
  }
  mn(() => {
    var a = !1;
    t((u, o = 0) => {
      a = !0, s(o, u);
    }), a || s(-1, null);
  }, l);
}
function Ki(e, t) {
  Ni(() => {
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
      const i = vn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const Fn = [...` 	
\r\f \v\uFEFF`];
function Is(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var l = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var a = s + l;
          (s === 0 || Fn.includes(n[s - 1])) && (a === n.length || Fn.includes(n[a])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(a + 1) : s = a;
        }
  }
  return n === "" ? null : n;
}
function jn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var l = e[i];
    l != null && l !== "" && (n += " " + i + ": " + l + r);
  }
  return n;
}
function Fs(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += jn(n)), i && (r += jn(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function ht(e, t, r, n, i, l) {
  var s = e.__className;
  if (A || s !== r || s === void 0) {
    var a = Is(r, n, l);
    (!A || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = r;
  } else if (l && i !== l)
    for (var u in l) {
      var o = !!l[u];
      (i == null || o !== !!i[u]) && e.classList.toggle(u, o);
    }
  return l;
}
function Fr(e, t = {}, r, n) {
  for (var i in r) {
    var l = r[i];
    t[i] !== l && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, l, n));
  }
}
function Hn(e, t, r, n) {
  var i = e.__style;
  if (A || i !== t) {
    var l = Fs(t, n);
    (!A || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  } else n && (Array.isArray(n) ? (Fr(e, r == null ? void 0 : r[0], n[0]), Fr(e, r == null ? void 0 : r[1], n[1], "important")) : Fr(e, r, n));
  return n;
}
function Ji(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Qn(t))
      return ql();
    for (var n of e.options)
      n.selected = t.includes(Jt(n));
    return;
  }
  for (n of e.options) {
    var i = Jt(n);
    if (hs(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function js(e) {
  var t = new MutationObserver(() => {
    Ji(e, e.__value);
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
  }), gn(() => {
    t.disconnect();
  });
}
function Hs(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Ai(e, "change", (l) => {
    var s = l ? "[selected]" : ":checked", a;
    if (e.multiple)
      a = [].map.call(e.querySelectorAll(s), Jt);
    else {
      var u = e.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      a = u && Jt(u);
    }
    r(a), e.__value = a, w !== null && n.add(w);
  }), Ni(() => {
    var l = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        w
      );
      if (n.has(s))
        return;
    }
    if (Ji(e, l, i), i && l === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (l = Jt(a), r(l));
    }
    e.__value = l, i = !1;
  }), js(e);
}
function Jt(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ys = Symbol("is custom element"), Bs = Symbol("is html"), qs = Rl ? "link" : "LINK";
function Yn(e) {
  if (A) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ke(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ke(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Je(r), Ci();
  }
}
function ke(e, t, r, n) {
  var i = Us(e);
  A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === qs) || i[t] !== (i[t] = r) && (t === "loading" && (e[Al] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ws(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Us(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ys]: e.nodeName.includes("-"),
      [Bs]: e.namespaceURI === Zn
    })
  );
}
var Bn = /* @__PURE__ */ new Map();
function Ws(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Bn.get(t);
  if (r) return r;
  Bn.set(t, r = []);
  for (var n, i = e, l = Element.prototype; l !== i; ) {
    n = El(i);
    for (var s in n)
      n[s].set && r.push(s);
    i = ei(i);
  }
  return r;
}
function qn(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ai(e, "input", async (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = jr(e) ? Hr(l) : l, r(l), w !== null && n.add(w), await Ss(), l !== (l = t())) {
      var s = e.selectionStart, a = e.selectionEnd, u = e.value.length;
      if (e.value = l ?? "", a !== null) {
        var o = e.value.length;
        s === a && a === u && o > u ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = s, e.selectionEnd = Math.min(a, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Rr(t) == null && e.value) && (r(jr(e) ? Hr(e.value) : e.value), w !== null && n.add(w)), bn(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        w
      );
      if (n.has(l))
        return;
    }
    jr(e) && i === Hr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function jr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Hr(e) {
  return e === "" ? null : +e;
}
function ge(e, t, r, n) {
  var z;
  var i = (r & bl) !== 0, l = (r & ml) !== 0, s = (
    /** @type {V} */
    n
  ), a = !0, u = () => (a && (a = !1, s = l ? Rr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let o;
  if (i) {
    var c = Ct in e || ii in e;
    o = ((z = bt(e, t)) == null ? void 0 : z.set) ?? (c && t in e ? (S) => e[t] = S : void 0);
  }
  var v, _ = !1;
  i ? [v, _] = Jl(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = u(), o && (Fl(), o(v)));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? u() : (a = !0, S);
  }, (r & gl) === 0)
    return p;
  if (o) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, R) {
        return arguments.length > 0 ? ((!R || h || _) && o(R ? p() : S), S) : p();
      })
    );
  }
  var x = !1, E = ((r & pl) !== 0 ? dn : as)(() => (x = !1, p()));
  i && d(E);
  var N = (
    /** @type {Effect} */
    k
  );
  return (
    /** @type {() => V} */
    (function(S, R) {
      if (arguments.length > 0) {
        const q = R ? d(E) : i ? zt(S) : S;
        return g(E, q), x = !0, s !== void 0 && (s = q), S;
      }
      return tt && x || (N.f & xe) !== 0 ? E.v : d(E);
    })
  );
}
function Vs(e) {
  return new Xs(e);
}
var He, de;
class Xs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    y(this, He);
    /** @type {Record<string, any>} */
    y(this, de);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (s, a) => {
      var u = /* @__PURE__ */ cs(a, !1, !1);
      return r.set(s, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return d(r.get(a) ?? n(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === ii ? !0 : (d(r.get(a) ?? n(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, u) {
          return g(r.get(a) ?? n(a, u), u), Reflect.set(s, a, u);
        }
      }
    );
    m(this, de, (t.hydrate ? Ps : Vi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && ie(), m(this, He, i.$$events);
    for (const s of Object.keys(f(this, de)))
      s === "$set" || s === "$destroy" || s === "$on" || wr(this, s, {
        get() {
          return f(this, de)[s];
        },
        /** @param {any} value */
        set(a) {
          f(this, de)[s] = a;
        },
        enumerable: !0
      });
    f(this, de).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, f(this, de).$destroy = () => {
      Ls(f(this, de));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, de).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, He)[t] = f(this, He)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return f(this, He)[t].push(n), () => {
      f(this, He)[t] = f(this, He)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    f(this, de).$destroy();
  }
}
He = new WeakMap(), de = new WeakMap();
let Zi;
typeof HTMLElement == "function" && (Zi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    F(this, "$$ctor");
    /** Slots */
    F(this, "$$s");
    /** @type {any} The Svelte component instance */
    F(this, "$$c");
    /** Whether or not the custom element is connected */
    F(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    F(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    F(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    F(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    F(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    F(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    F(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    F(this, "$$shadowRoot", null);
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
        return (l) => {
          const s = vn("slot");
          i !== "default" && (s.name = i), K(l, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Gs(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = br(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Vs({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = bs(() => {
        bn(() => {
          var i;
          this.$$r = !0;
          for (const l of mr(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const s = br(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const s = this.$$c.$on(i, l);
          this.$$l_u.set(l, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = br(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return mr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function br(e, t, r, n) {
  var l;
  const i = (l = r[e]) == null ? void 0 : l.type;
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
function Gs(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Qi(e, t, r, n, i, l) {
  let s = class extends Zi {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return mr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return mr(t).forEach((a) => {
    wr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        var v;
        u = br(a, u, t), this.$$d[a] = u;
        var o = this.$$c;
        if (o) {
          var c = (v = bt(o, a)) == null ? void 0 : v.get;
          c ? o[a] = u : o.$set({ [a]: u });
        }
      }
    });
  }), n.forEach((a) => {
    wr(s.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Ks = /* @__PURE__ */ Ht('<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" opacity="0.3"></path><rect x="7" y="7" width="10" height="10" fill="currentColor"></rect>', 1), Js = /* @__PURE__ */ Ht('<rect x="7" y="7" width="10" height="10" fill="none"></rect>'), Zs = /* @__PURE__ */ Ht('<rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), Qs = /* @__PURE__ */ Ht('<rect x="1" y="7" width="8" height="2" fill="currentColor"></rect>'), ea = /* @__PURE__ */ Ht('<rect x="2" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect><rect x="0" y="2" width="8" height="8" fill="var(--shell-panel-bg, #ffffff)" stroke="currentColor" stroke-width="1.5"></rect>', 1), ta = /* @__PURE__ */ Ht('<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), ra = /* @__PURE__ */ it('<div class="dialog-footer svelte-ygb1nh"><!></div>'), na = /* @__PURE__ */ it("<div><!></div> <!>", 1), ia = /* @__PURE__ */ it('<div tabindex="-1" role="dialog"><div><div class="dialog-titlebar svelte-ygb1nh" role="heading" aria-level="2"><span class="dialog-title svelte-ygb1nh"> </span> <div class="dialog-controls svelte-ygb1nh"><button type="button"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn minimize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn maximize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn close svelte-ygb1nh" title="Close" aria-label="Close dialog"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5"></line><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5"></line></svg></button></div></div> <!></div></div>');
const la = {
  hash: "svelte-ygb1nh",
  code: `.dialog-wrapper.svelte-ygb1nh {position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:flex-start;padding:0;}.dialog-wrapper.is-modal.svelte-ygb1nh {background:color-mix(in srgb, var(--shell-text-strong, #020617), transparent 72%);}.dialog-wrapper.minimized.svelte-ygb1nh {align-items:flex-end;justify-content:flex-start;}.dialog.svelte-ygb1nh {position:absolute;display:flex;flex-direction:column;background:var(--shell-panel, var(--shell-panel-bg, #ffffff));border:1px solid var(--shell-border, #e2e8f0);border-radius:12px;box-shadow:var(--shell-shadow, 0 16px 48px rgba(0, 0, 0, 0.15));overflow:hidden;min-width:min(20rem, calc(100vw - 24px));min-height:200px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);font-family:var(--font-ui, system-ui, sans-serif);color:var(--shell-text, #0f172a);}.dialog-titlebar.svelte-ygb1nh {display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));border-bottom:1px solid var(--shell-border, #e2e8f0);cursor:grab;user-select:none;flex-shrink:0;}.dialog-titlebar.svelte-ygb1nh:active {cursor:grabbing;}.dialog-title.svelte-ygb1nh {font:var(--efs-font-title-sm, 600 15px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text-strong, #020617);letter-spacing:0.01em;}.dialog-controls.svelte-ygb1nh {display:flex;gap:6px;align-items:center;}.ctrl-btn.svelte-ygb1nh {width:20px;height:20px;border:none;border-radius:4px;background:transparent;color:var(--shell-muted, #64748b);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background 0.15s, color 0.15s;}.ctrl-btn.svelte-ygb1nh:hover {background:var(--shell-hover-bg, #e2e8f0);color:var(--shell-text-strong, #020617);}.ctrl-btn.close.svelte-ygb1nh:hover {background:var(--efs-state-danger, #dc2626);color:var(--shell-pill-text, #fff);}.dialog-body.svelte-ygb1nh {flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;}.dialog-body.flush.svelte-ygb1nh {padding:0;gap:0;}.dialog-footer.svelte-ygb1nh {display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid var(--shell-border, #e2e8f0);background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));flex-shrink:0;}

  @media (max-width: 47.99rem) {.dialog.svelte-ygb1nh {min-width:0;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);border-radius:10px;}.dialog-titlebar.svelte-ygb1nh {padding:12px;}.dialog-body.svelte-ygb1nh {padding:14px;gap:12px;}.dialog-footer.svelte-ygb1nh {flex-wrap:wrap;padding:12px 14px;}
  }`
};
function el(e, t) {
  on(t, !0), Ki(e, la);
  let r = ge(t, "title", 7), n = ge(t, "open", 15, !1), i = ge(t, "modal", 15, !0), l = ge(t, "defaultWidth", 7, 480), s = ge(t, "defaultHeight", 7, 380), a = ge(t, "defaultX", 7, 120), u = ge(t, "defaultY", 7, 80), o = ge(t, "flushBody", 7, !1), c = ge(t, "onClose", 7), v = ge(t, "children", 7), _ = ge(t, "footer", 7), p = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(!1), x = /* @__PURE__ */ I(0), E = /* @__PURE__ */ I(0), N = !1;
  function z() {
    if (typeof window > "u")
      return { x: a(), y: u() };
    const b = window.innerWidth <= 768 ? 8 : 12, Q = Math.max(b, window.innerWidth - l() - b), lt = Math.max(b, window.innerHeight - s() - b);
    return {
      x: Math.min(Math.max(b, a()), Q),
      y: Math.min(Math.max(b, u()), lt)
    };
  }
  en(() => {
    if (!N) {
      const { x: b, y: Q } = z();
      g(x, b, !0), g(E, Q, !0), N = !0;
    }
  });
  let S = /* @__PURE__ */ I(!1), R = 0, q = 0;
  en(() => {
    n() && (g(p, !1), g(h, !1));
  });
  function ne(b) {
    d(h) || b.target.closest(".dialog-controls") || (g(S, !0), R = b.clientX - d(x), q = b.clientY - d(E), window.addEventListener("pointermove", xt), window.addEventListener("pointerup", Yt));
  }
  function xt(b) {
    d(S) && (g(x, b.clientX - R), g(E, b.clientY - q));
  }
  function Yt() {
    g(S, !1), window.removeEventListener("pointermove", xt), window.removeEventListener("pointerup", Yt);
  }
  function ar(b) {
    b.key === "Escape" && (d(h) ? g(h, !1) : d(p) ? g(p, !1) : c()());
  }
  var Nr = {
    get title() {
      return r();
    },
    set title(b) {
      r(b), ie();
    },
    get open() {
      return n();
    },
    set open(b = !1) {
      n(b), ie();
    },
    get modal() {
      return i();
    },
    set modal(b = !0) {
      i(b), ie();
    },
    get defaultWidth() {
      return l();
    },
    set defaultWidth(b = 480) {
      l(b), ie();
    },
    get defaultHeight() {
      return s();
    },
    set defaultHeight(b = 380) {
      s(b), ie();
    },
    get defaultX() {
      return a();
    },
    set defaultX(b = 120) {
      a(b), ie();
    },
    get defaultY() {
      return u();
    },
    set defaultY(b = 80) {
      u(b), ie();
    },
    get flushBody() {
      return o();
    },
    set flushBody(b = !1) {
      o(b), ie();
    },
    get onClose() {
      return c();
    },
    set onClose(b) {
      c(b), ie();
    },
    get children() {
      return v();
    },
    set children(b) {
      v(b), ie();
    },
    get footer() {
      return _();
    },
    set footer(b) {
      _(b), ie();
    }
  }, Et = Ns(), Bt = Mn(Et);
  {
    var qt = (b) => {
      var Q = ia();
      let lt, or;
      var st = O(Q);
      let fr, Ut;
      var Ue = O(st), at = O(Ue), Mr = O(at, !0);
      M(at);
      var H = D(at, 2), P = O(H);
      let G;
      var We = O(P), Wt = O(We);
      {
        var Vt = (C) => {
          var W = Ks();
          qr(), K(C, W);
        }, ur = (C) => {
          var W = Js();
          K(C, W);
        };
        Ce(Wt, (C) => {
          i() ? C(Vt) : C(ur, -1);
        });
      }
      M(We), M(P);
      var Ve = D(P, 2), yn = O(Ve), tl = O(yn);
      {
        var rl = (C) => {
          var W = Zs();
          K(C, W);
        }, nl = (C) => {
          var W = Qs();
          K(C, W);
        };
        Ce(tl, (C) => {
          d(p) ? C(rl) : C(nl, -1);
        });
      }
      M(yn), M(Ve);
      var kt = D(Ve, 2), $n = O(kt), il = O($n);
      {
        var ll = (C) => {
          var W = ea();
          qr(), K(C, W);
        }, sl = (C) => {
          var W = ta();
          K(C, W);
        };
        Ce(il, (C) => {
          d(h) ? C(ll) : C(sl, -1);
        });
      }
      M($n), M(kt);
      var al = D(kt, 2);
      M(H), M(Ue);
      var ol = D(Ue, 2);
      {
        var fl = (C) => {
          var W = na(), cr = Mn(W);
          let xn;
          var ul = O(cr);
          In(ul, () => v() ?? ti), M(cr);
          var cl = D(cr, 2);
          {
            var dl = (Or) => {
              var Pr = ra(), hl = O(Pr);
              In(hl, _), M(Pr), K(Or, Pr);
            };
            Ce(cl, (Or) => {
              _() && Or(dl);
            });
          }
          ft(() => xn = ht(cr, 1, "dialog-body svelte-ygb1nh", null, xn, { flush: o() })), K(C, W);
        };
        Ce(ol, (C) => {
          d(p) || C(fl);
        });
      }
      M(st), M(Q), ft(() => {
        lt = ht(Q, 1, "dialog-wrapper svelte-ygb1nh", null, lt, { "is-modal": i(), minimized: d(p) }), ke(Q, "aria-modal", i() ? "true" : "false"), ke(Q, "aria-label", r()), or = Hn(Q, "", or, { "pointer-events": i() ? "auto" : "none" }), fr = ht(st, 1, "dialog svelte-ygb1nh", null, fr, { maximized: d(h) }), Ut = Hn(st, "", Ut, {
          left: d(h) ? "0" : d(x) + "px",
          top: d(h) ? "0" : d(E) + "px",
          width: d(h) ? "100%" : l() + "px",
          height: d(h) ? "100%" : s() + "px",
          "pointer-events": "auto"
        }), nn(Mr, r()), G = ht(P, 1, "ctrl-btn unprioritize svelte-ygb1nh", null, G, { active: !i() }), ke(P, "title", i() ? "Unprioritize (drop backdrop)" : "Prioritize (show backdrop)"), ke(P, "aria-label", i() ? "Unprioritize" : "Prioritize"), ke(Ve, "title", d(p) ? "Restore" : "Minimize"), ke(Ve, "aria-label", d(p) ? "Restore dialog" : "Minimize dialog"), ke(kt, "title", d(h) ? "Restore" : "Maximize"), ke(kt, "aria-label", d(h) ? "Restore dialog" : "Maximize dialog");
      }), he("click", Q, (C) => {
        i() && C.target === C.currentTarget && c()();
      }), he("keydown", Q, ar), he("pointerdown", Ue, ne), he("click", P, () => {
        i(!i());
      }), he("click", Ve, () => {
        g(p, !d(p)), g(h, !1);
      }), he("click", kt, () => {
        g(h, !d(h)), g(p, !1);
      }), he("click", al, function(...C) {
        var W;
        (W = c()) == null || W.apply(this, C);
      }), K(b, Q);
    };
    Ce(Bt, (b) => {
      n() && b(qt);
    });
  }
  return K(e, Et), fn(Nr);
}
Ui(["click", "keydown", "pointerdown"]);
Qi(
  el,
  {
    title: {},
    open: {},
    modal: {},
    defaultWidth: {},
    defaultHeight: {},
    defaultX: {},
    defaultY: {},
    flushBody: {},
    onClose: {},
    children: {},
    footer: {}
  },
  [],
  [],
  { mode: "open" }
);
var sa = /* @__PURE__ */ it('<div class="error-msg svelte-6llngz"> </div>'), aa = /* @__PURE__ */ it('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Framework</span> <select name="framework" class="input-field svelte-6llngz"><option>Svelte</option><option>SvelteKit</option><option>React</option><option>Angular</option></select></label>'), oa = /* @__PURE__ */ it('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">GitHub Repository URL</span> <input name="githubUrl" type="url" autocomplete="off" spellcheck="false" placeholder="https://github.com/user/repo" required="" class="input-field svelte-6llngz"/></label>'), fa = /* @__PURE__ */ it('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Archive File (.zip, .tar.gz)</span> <input type="file" accept=".zip,.tar,.tar.gz,.tgz" required="" class="input-field file-input svelte-6llngz"/></label>'), ua = /* @__PURE__ */ it('<div class="creator-content svelte-6llngz"><div class="header svelte-6llngz"><div class="eyebrow svelte-6llngz">Component Creator</div> <h3 class="title svelte-6llngz">New Component</h3> <p class="copy svelte-6llngz">Create a new component to use in your routes, or import an existing one.</p></div> <div class="mode-tabs svelte-6llngz"><button type="button">Template</button> <button type="button">GitHub</button> <button type="button">Upload</button></div> <!> <form class="form-grid svelte-6llngz"><label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Component Name</span> <input name="name" type="text" autocomplete="off" spellcheck="false" placeholder="my-component" required="" class="input-field svelte-6llngz"/></label> <!> <!> <!> <div class="actions svelte-6llngz"><button type="button" class="ghost-button svelte-6llngz">Cancel</button> <button type="submit" class="pill-button svelte-6llngz"> </button></div></form></div>');
const ca = {
  hash: "svelte-6llngz",
  code: ".creator-content.svelte-6llngz {padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem;color:var(--shell-text, #0f172a);}.header.svelte-6llngz {display:flex;flex-direction:column;gap:0.25rem;}.eyebrow.svelte-6llngz {font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--shell-muted, #64748b);}.title.svelte-6llngz {margin:0;font-size:1.125rem;font-weight:600;}.copy.svelte-6llngz {margin:0;font-size:0.875rem;line-height:1.5;color:var(--shell-muted, #64748b);}.form-grid.svelte-6llngz {display:flex;flex-direction:column;gap:1rem;}.field-label.svelte-6llngz {display:flex;flex-direction:column;gap:0.35rem;}.label-text.svelte-6llngz {font-size:0.875rem;font-weight:600;color:var(--shell-muted, #64748b);}.input-field.svelte-6llngz {padding:0.5rem 0.75rem;background:var(--shell-input-bg, #ffffff);border:1px solid var(--shell-border, #e2e8f0);border-radius:0.375rem;color:var(--shell-text, #0f172a);font-family:inherit;font-size:0.875rem;transition:border-color 0.15s, box-shadow 0.15s;}.input-field.svelte-6llngz:focus {outline:none;border-color:var(--shell-border-strong, #cbd5e1);box-shadow:0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);}.input-field.svelte-6llngz:disabled {opacity:0.6;cursor:not-allowed;}.actions.svelte-6llngz {display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;margin-top:0.5rem;}.ghost-button.svelte-6llngz {background:transparent;border:none;color:var(--shell-text, #0f172a);padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.ghost-button.svelte-6llngz:hover:not(:disabled) {background:var(--shell-hover-bg, rgba(0,0,0,0.05));}.ghost-button.svelte-6llngz:disabled {opacity:0.5;cursor:not-allowed;}.pill-button.svelte-6llngz {background:var(--shell-primary, #0f172a);color:var(--shell-primary-text, #ffffff);border:none;padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:opacity 0.15s, transform 0.15s;}.pill-button.svelte-6llngz:hover:not(:disabled) {opacity:0.9;transform:translateY(-1px);}.pill-button.svelte-6llngz:disabled {opacity:0.5;cursor:not-allowed;}.mode-tabs.svelte-6llngz {display:flex;gap:0.5rem;padding:0.25rem;background:var(--shell-inset-bg, rgba(0,0,0,0.05));border-radius:0.5rem;margin-bottom:0.5rem;}.tab.svelte-6llngz {flex:1;background:transparent;border:none;padding:0.5rem;border-radius:0.375rem;font-size:0.875rem;font-weight:500;color:var(--shell-muted, #64748b);cursor:pointer;transition:all 0.2s;}.tab.svelte-6llngz:hover {color:var(--shell-text, #0f172a);}.tab.active.svelte-6llngz {background:var(--shell-surface, #ffffff);color:var(--shell-text, #0f172a);box-shadow:0 1px 3px rgba(0,0,0,0.1);}.file-input.svelte-6llngz {padding:0.4rem;}.error-msg.svelte-6llngz {padding:0.5rem 0.75rem;background:rgba(239, 68, 68, 0.1);border:1px solid rgba(239, 68, 68, 0.2);border-radius:0.375rem;color:#ef4444;font-size:0.875rem;}"
};
function da(e, t) {
  on(t, !0), Ki(e, ca);
  let r = /* @__PURE__ */ I(!1), n = /* @__PURE__ */ I(""), i = /* @__PURE__ */ I("sveltekit"), l = /* @__PURE__ */ I(!1), s = /* @__PURE__ */ I(""), a = /* @__PURE__ */ I(""), u = /* @__PURE__ */ I("staging"), o = /* @__PURE__ */ I(
    "create"
    // 'create', 'github', 'upload'
  ), c = /* @__PURE__ */ I(""), v = /* @__PURE__ */ I(null);
  const _ = typeof window < "u" ? 520 : 450, p = typeof window < "u" ? Math.max(16, window.innerWidth / 2 - _ / 2) : 120, h = typeof window < "u" ? Math.max(16, window.innerHeight * 0.2) : 100;
  Ds(() => {
    const z = (S) => {
      const R = S.detail;
      if (R && R.path && g(a, R.path, !0), R && R.env)
        g(u, R.env, !0);
      else {
        const q = new URLSearchParams(window.location.search);
        g(u, q.get("env") || "staging", !0);
      }
      g(r, !0), g(n, ""), g(s, ""), g(i, "sveltekit");
    };
    return window.addEventListener("efsdb:create-component", z), () => {
      window.removeEventListener("efsdb:create-component", z);
    };
  });
  async function x(z) {
    var S;
    if (z.preventDefault(), !d(n).trim()) {
      g(s, "Component name is required.");
      return;
    }
    if (d(o) === "github" && !d(c).trim()) {
      g(s, "GitHub repository URL is required.");
      return;
    }
    if (d(o) === "upload" && !d(v)) {
      g(s, "Please select a ZIP or TAR archive to upload.");
      return;
    }
    g(l, !0), g(s, "");
    try {
      let R;
      if (d(o) === "create")
        R = await fetch("/_efsdb/api/explorer/create-component", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: d(n).trim(),
            framework: d(i),
            env: d(u)
          })
        });
      else {
        const ne = new FormData();
        ne.append("name", d(n).trim()), ne.append("env", d(u)), ne.append("source", d(o)), d(o) === "github" ? ne.append("githubUrl", d(c).trim()) : d(o) === "upload" && d(v) && ne.append("archive", d(v)), R = await fetch("/_efsdb/api/explorer/import-component", { method: "POST", body: ne });
      }
      let q;
      try {
        q = await R.json();
      } catch {
        q = { error: { message: "Invalid response from server" } };
      }
      if (!R.ok || q.error)
        throw new Error(((S = q == null ? void 0 : q.error) == null ? void 0 : S.message) || `HTTP ${R.status}`);
      g(r, !1), window.location.reload();
    } catch (R) {
      g(s, R instanceof Error ? R.message : "An unknown error occurred.", !0);
    } finally {
      g(l, !1);
    }
  }
  function E() {
    g(r, !1);
  }
  function N(z) {
    const S = z.target;
    S.files && S.files.length > 0 ? g(v, S.files[0], !0) : g(v, null);
  }
  el(e, {
    title: "Component Creator",
    modal: !1,
    get defaultWidth() {
      return _;
    },
    defaultHeight: 380,
    get defaultX() {
      return p;
    },
    get defaultY() {
      return h;
    },
    onClose: () => g(r, !1),
    get open() {
      return d(r);
    },
    set open(z) {
      g(r, z, !0);
    },
    children: (z, S) => {
      var R = ua(), q = D(O(R), 2), ne = O(q), xt = D(ne, 2), Yt = D(xt, 2);
      M(q);
      var ar = D(q, 2);
      {
        var Nr = (H) => {
          var P = sa(), G = O(P, !0);
          M(P), ft(() => nn(G, d(s))), K(H, P);
        };
        Ce(ar, (H) => {
          d(s) && H(Nr);
        });
      }
      var Et = D(ar, 2), Bt = O(Et), qt = D(O(Bt), 2);
      Yn(qt), M(Bt);
      var b = D(Bt, 2);
      {
        var Q = (H) => {
          var P = aa(), G = D(O(P), 2), We = O(G);
          We.value = We.__value = "svelte";
          var Wt = D(We);
          Wt.value = Wt.__value = "sveltekit";
          var Vt = D(Wt);
          Vt.value = Vt.__value = "react";
          var ur = D(Vt);
          ur.value = ur.__value = "angular", M(G), M(P), ft(() => G.disabled = d(l)), Hs(G, () => d(i), (Ve) => g(i, Ve)), K(H, P);
        };
        Ce(b, (H) => {
          d(o) === "create" && H(Q);
        });
      }
      var lt = D(b, 2);
      {
        var or = (H) => {
          var P = oa(), G = D(O(P), 2);
          Yn(G), M(P), ft(() => G.disabled = d(l)), qn(G, () => d(c), (We) => g(c, We)), K(H, P);
        };
        Ce(lt, (H) => {
          d(o) === "github" && H(or);
        });
      }
      var st = D(lt, 2);
      {
        var fr = (H) => {
          var P = fa(), G = D(O(P), 2);
          M(P), ft(() => G.disabled = d(l)), he("change", G, N), K(H, P);
        };
        Ce(st, (H) => {
          d(o) === "upload" && H(fr);
        });
      }
      var Ut = D(st, 2), Ue = O(Ut), at = D(Ue, 2), Mr = O(at, !0);
      M(at), M(Ut), M(Et), M(R), ft(() => {
        ht(ne, 1, `tab ${d(o) === "create" ? "active" : ""}`, "svelte-6llngz"), ht(xt, 1, `tab ${d(o) === "github" ? "active" : ""}`, "svelte-6llngz"), ht(Yt, 1, `tab ${d(o) === "upload" ? "active" : ""}`, "svelte-6llngz"), qt.disabled = d(l), Ue.disabled = d(l), at.disabled = d(l), nn(Mr, d(l) ? "Creating..." : "Create Component");
      }), he("click", ne, () => g(o, "create")), he("click", xt, () => g(o, "github")), he("click", Yt, () => g(o, "upload")), Cs("submit", Et, x), qn(qt, () => d(n), (H) => g(n, H)), he("click", Ue, E), K(z, R);
    },
    $$slots: { default: !0 }
  }), fn();
}
Ui(["click", "change"]);
customElements.define("efsdb-create", Qi(da, {}, [], [], { mode: "open" }));
export {
  da as Create
};
