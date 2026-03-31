var ei = Object.defineProperty;
var wn = (e) => {
  throw TypeError(e);
};
var ti = (e, t, r) => t in e ? ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var M = (e, t, r) => ti(e, typeof t != "symbol" ? t + "" : t, r), Ar = (e, t, r) => t.has(e) || wn("Cannot " + r);
var u = (e, t, r) => (Ar(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, n) => (Ar(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (Ar(e, t, "access private method"), r);
var Ln;
typeof window < "u" && ((Ln = window.__svelte ?? (window.__svelte = {})).v ?? (Ln.v = /* @__PURE__ */ new Set())).add("5");
const ri = 1, ni = 2, si = 16, ii = 2, Fn = "[", Qr = "[!", $n = "[?", en = "]", Rt = {}, j = Symbol(), jn = "http://www.w3.org/1999/xhtml", ai = !1;
var Bn = Array.isArray, li = Array.prototype.indexOf, Nt = Array.prototype.includes, gr = Array.from, ur = Object.keys, cr = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, oi = Object.getOwnPropertyDescriptors, fi = Object.prototype, ui = Array.prototype, Hn = Object.getPrototypeOf, En = Object.isExtensible;
const ci = () => {
};
function di(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Un() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const F = 2, Ct = 4, mr = 8, Vn = 1 << 24, Ze = 16, we = 32, Je = 64, Dr = 128, fe = 512, I = 1024, U = 2048, Se = 4096, se = 8192, ye = 16384, Qe = 32768, Lr = 1 << 25, Mt = 65536, xn = 1 << 17, vi = 1 << 18, _t = 1 << 19, hi = 1 << 20, Pe = 1 << 25, vt = 65536, Ir = 1 << 21, tn = 1 << 22, We = 1 << 23, sr = Symbol("$state"), pi = Symbol("legacy props"), _i = Symbol(""), Ce = new class extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "StaleReactionError");
    M(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var In;
const gi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((In = globalThis.document) != null && In.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), rn = 3, Qt = 8;
function mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function bi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function $i() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ei(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ki() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ti() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Si() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ai() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function br(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let A = !1;
function Fe(e) {
  A = e;
}
let N;
function ie(e) {
  if (e === null)
    throw br(), Rt;
  return N = e;
}
function yr() {
  return ie(/* @__PURE__ */ je(N));
}
function S(e) {
  if (A) {
    if (/* @__PURE__ */ je(N) !== null)
      throw br(), Rt;
    N = e;
  }
}
function Yn(e = 1) {
  if (A) {
    for (var t = e, r = N; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ je(r);
    N = r;
  }
}
function dr(e = !0) {
  for (var t = 0, r = N; ; ) {
    if (r.nodeType === Qt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === en) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Fn || n === Qr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(r)
    );
    e && r.remove(), r = s;
  }
}
function zn(e) {
  if (!e || e.nodeType !== Qt)
    throw br(), Rt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Wn(e) {
  return e === this.v;
}
function Ni(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kn(e) {
  return !Ni(e, this.v);
}
let Ci = !1, J = null;
function Ot(e) {
  J = e;
}
function Gn(e, t = !1, r) {
  J = {
    p: J,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function Jn(e) {
  var t = (
    /** @type {ComponentContext} */
    J
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ks(n);
  }
  return t.i = !0, J = t.p, /** @type {T} */
  {};
}
function Xn() {
  return !0;
}
let st = [];
function Zn() {
  var e = st;
  st = [], di(e);
}
function Ke(e) {
  if (st.length === 0 && !Ut) {
    var t = st;
    queueMicrotask(() => {
      t === st && Zn();
    });
  }
  st.push(e);
}
function Mi() {
  for (; st.length > 0; )
    Zn();
}
function Qn(e) {
  var t = x;
  if (t === null)
    return $.f |= We, e;
  if ((t.f & Qe) === 0 && (t.f & Ct) === 0)
    throw e;
  ze(e, t);
}
function ze(e, t) {
  for (; t !== null; ) {
    if ((t.f & Dr) !== 0) {
      if ((t.f & Qe) === 0)
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
const Oi = -7169;
function L(e, t) {
  e.f = e.f & Oi | t;
}
function nn(e) {
  (e.f & fe) !== 0 || e.deps === null ? L(e, I) : L(e, Se);
}
function es(e) {
  if (e !== null)
    for (const t of e)
      (t.f & F) === 0 || (t.f & vt) === 0 || (t.f ^= vt, es(
        /** @type {Derived} */
        t.deps
      ));
}
function ts(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Se) !== 0 && r.add(e), es(e.deps), L(e, I);
}
const nt = /* @__PURE__ */ new Set();
let m = null, B = null, Pr = null, Ut = !1, Rr = !1, wt = null, ir = null;
var kn = 0;
let Di = 1;
var xt, kt, qt, Tt, Wt, ee, lt, Me, Oe, St, V, Fr, jr, Br, Hr, rs;
const hr = class hr {
  constructor() {
    w(this, V);
    // for debugging. TODO remove once async is stable
    M(this, "id", Di++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    M(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    M(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, xt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, kt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    w(this, qt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    w(this, Tt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, Wt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, ee, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, lt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Me, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, Oe, /* @__PURE__ */ new Map());
    M(this, "is_fork", !1);
    w(this, St, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, Oe).has(t) || u(this, Oe).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = u(this, Oe).get(t);
    if (r) {
      u(this, Oe).delete(t);
      for (var n of r.d)
        L(n, U), this.schedule(n);
      for (n of r.m)
        L(n, Se), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== j && !this.previous.has(t) && this.previous.set(t, r), (t.f & We) === 0 && (this.current.set(t, t.v), B == null || B.set(t, t.v));
  }
  activate() {
    m = this;
  }
  deactivate() {
    m = null, B = null;
  }
  flush() {
    try {
      Rr = !0, m = this, C(this, V, jr).call(this);
    } finally {
      kn = 0, Pr = null, wt = null, ir = null, Rr = !1, m = null, B = null, Ge.clear();
    }
  }
  discard() {
    for (const t of u(this, kt)) t(this);
    u(this, kt).clear(), nt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    g(this, qt, u(this, qt) + 1), t && g(this, Tt, u(this, Tt) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    g(this, qt, u(this, qt) - 1), t && g(this, Tt, u(this, Tt) - 1), !(u(this, St) || r) && (g(this, St, !0), Ke(() => {
      g(this, St, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      u(this, lt).add(n);
    for (const n of r)
      u(this, Me).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    u(this, xt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, kt).add(t);
  }
  settled() {
    return (u(this, Wt) ?? g(this, Wt, Un())).promise;
  }
  static ensure() {
    if (m === null) {
      const t = m = new hr();
      Rr || (nt.add(m), Ut || Ke(() => {
        m === t && t.flush();
      }));
    }
    return m;
  }
  apply() {
    {
      B = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (Pr = t, (s = t.b) != null && s.is_pending && (t.f & (Ct | mr | Vn)) !== 0 && (t.f & Qe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (wt !== null && r === x && ($ === null || ($.f & F) === 0))
        return;
      if ((n & (Je | we)) !== 0) {
        if ((n & I) === 0)
          return;
        r.f ^= I;
      }
    }
    u(this, ee).push(r);
  }
};
xt = new WeakMap(), kt = new WeakMap(), qt = new WeakMap(), Tt = new WeakMap(), Wt = new WeakMap(), ee = new WeakMap(), lt = new WeakMap(), Me = new WeakMap(), Oe = new WeakMap(), St = new WeakMap(), V = new WeakSet(), Fr = function() {
  return this.is_fork || u(this, Tt) > 0;
}, jr = function() {
  var a, f;
  if (kn++ > 1e3 && (nt.delete(this), Li()), !C(this, V, Fr).call(this)) {
    for (const o of u(this, lt))
      u(this, Me).delete(o), L(o, U), this.schedule(o);
    for (const o of u(this, Me))
      L(o, Se), this.schedule(o);
  }
  const t = u(this, ee);
  g(this, ee, []), this.apply();
  var r = wt = [], n = [], s = ir = [];
  for (const o of t)
    try {
      C(this, V, Br).call(this, o, r, n);
    } catch (c) {
      throw ls(o), c;
    }
  if (m = null, s.length > 0) {
    var i = hr.ensure();
    for (const o of s)
      i.schedule(o);
  }
  if (wt = null, ir = null, C(this, V, Fr).call(this)) {
    C(this, V, Hr).call(this, n), C(this, V, Hr).call(this, r);
    for (const [o, c] of u(this, Oe))
      as(o, c);
  } else {
    u(this, qt) === 0 && nt.delete(this), u(this, lt).clear(), u(this, Me).clear();
    for (const o of u(this, xt)) o(this);
    u(this, xt).clear(), qn(n), qn(r), (a = u(this, Wt)) == null || a.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    m
  );
  if (u(this, ee).length > 0) {
    const o = l ?? (l = this);
    u(o, ee).push(...u(this, ee).filter((c) => !u(o, ee).includes(c)));
  }
  l !== null && (nt.add(l), C(f = l, V, jr).call(f)), nt.has(this) || C(this, V, rs).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Br = function(t, r, n) {
  t.f ^= I;
  for (var s = t.first; s !== null; ) {
    var i = s.f, l = (i & (we | Je)) !== 0, a = l && (i & I) !== 0, f = a || (i & se) !== 0 || u(this, Oe).has(s);
    if (!f && s.fn !== null) {
      l ? s.f ^= I : (i & Ct) !== 0 ? r.push(s) : er(s) && ((i & Ze) !== 0 && u(this, Me).add(s), Lt(s));
      var o = s.first;
      if (o !== null) {
        s = o;
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
Hr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ts(t[r], u(this, lt), u(this, Me));
}, rs = function() {
  var f;
  for (const o of nt) {
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
      var s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
      for (var l of r)
        ss(l, n, s, i);
      if (u(o, ee).length > 0) {
        o.apply();
        for (var a of u(o, ee))
          C(f = o, V, Br).call(f, a, [], []);
        g(o, ee, []);
      }
      o.deactivate();
    }
  }
};
let Xe = hr;
function ns(e) {
  var t = Ut;
  Ut = !0;
  try {
    for (var r; ; ) {
      if (Mi(), m === null)
        return (
          /** @type {T} */
          r
        );
      m.flush();
    }
  } finally {
    Ut = t;
  }
}
function Li() {
  try {
    xi();
  } catch (e) {
    ze(e, Pr);
  }
}
let _e = null;
function qn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ye | se)) === 0 && er(n) && (_e = /* @__PURE__ */ new Set(), Lt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ss(n), (_e == null ? void 0 : _e.size) > 0)) {
        Ge.clear();
        for (const s of _e) {
          if ((s.f & (ye | se)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            _e.has(l) && (_e.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const f = i[a];
            (f.f & (ye | se)) === 0 && Lt(f);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function ss(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & F) !== 0 ? ss(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (tn | Ze)) !== 0 && (i & U) === 0 && is(s, t, n) && (L(s, U), sn(
        /** @type {Effect} */
        s
      ));
    }
}
function is(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Nt.call(t, s))
        return !0;
      if ((s.f & F) !== 0 && is(
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
function sn(e) {
  m.schedule(e);
}
function as(e, t) {
  if (!((e.f & we) !== 0 && (e.f & I) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Se) !== 0 && t.m.push(e), L(e, I);
    for (var r = e.first; r !== null; )
      as(r, t), r = r.next;
  }
}
function ls(e) {
  L(e, I);
  for (var t = e.first; t !== null; )
    ls(t), t = t.next;
}
function Ii(e) {
  let t = 0, r = ht(0), n;
  return () => {
    fn() && (b(r), $r(() => (t === 0 && (n = Er(() => e(() => Vt(r)))), t += 1, () => {
      Ke(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Vt(r));
      });
    })));
  };
}
var Pi = Mt | _t;
function Fi(e, t, r, n) {
  new ji(e, t, r, n);
}
var te, Kt, xe, ot, W, ke, re, ge, De, ft, Ye, At, Gt, Jt, Le, pr, O, os, fs, us, Ur, ar, lr, Vr;
class ji {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    w(this, O);
    /** @type {Boundary | null} */
    M(this, "parent");
    M(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    M(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, te);
    /** @type {TemplateNode | null} */
    w(this, Kt, A ? N : null);
    /** @type {BoundaryProps} */
    w(this, xe);
    /** @type {((anchor: Node) => void)} */
    w(this, ot);
    /** @type {Effect} */
    w(this, W);
    /** @type {Effect | null} */
    w(this, ke, null);
    /** @type {Effect | null} */
    w(this, re, null);
    /** @type {Effect | null} */
    w(this, ge, null);
    /** @type {DocumentFragment | null} */
    w(this, De, null);
    w(this, ft, 0);
    w(this, Ye, 0);
    w(this, At, !1);
    /** @type {Set<Effect>} */
    w(this, Gt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, Jt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, Le, null);
    w(this, pr, Ii(() => (g(this, Le, ht(u(this, ft))), () => {
      g(this, Le, null);
    })));
    var i;
    g(this, te, t), g(this, xe, r), g(this, ot, (l) => {
      var a = (
        /** @type {Effect} */
        x
      );
      a.b = this, a.f |= Dr, n(l);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((l) => l), g(this, W, un(() => {
      if (A) {
        const l = (
          /** @type {Comment} */
          u(this, Kt)
        );
        yr();
        const a = l.data === Qr;
        if (l.data.startsWith($n)) {
          const o = JSON.parse(l.data.slice($n.length));
          C(this, O, fs).call(this, o);
        } else a ? C(this, O, us).call(this) : C(this, O, os).call(this);
      } else
        C(this, O, Ur).call(this);
    }, Pi)), A && g(this, te, N);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ts(t, u(this, Gt), u(this, Jt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, xe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    C(this, O, Vr).call(this, t, r), g(this, ft, u(this, ft) + t), !(!u(this, Le) || u(this, At)) && (g(this, At, !0), Ke(() => {
      g(this, At, !1), u(this, Le) && Dt(u(this, Le), u(this, ft));
    }));
  }
  get_effect_pending() {
    return u(this, pr).call(this), b(
      /** @type {Source<number>} */
      u(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, xe).onerror;
    let n = u(this, xe).failed;
    if (!r && !n)
      throw t;
    u(this, ke) && (z(u(this, ke)), g(this, ke, null)), u(this, re) && (z(u(this, re)), g(this, re, null)), u(this, ge) && (z(u(this, ge)), g(this, ge, null)), A && (ie(
      /** @type {TemplateNode} */
      u(this, Kt)
    ), Yn(), ie(dr()));
    var s = !1, i = !1;
    const l = () => {
      if (s) {
        Ri();
        return;
      }
      s = !0, i && Ai(), u(this, ge) !== null && ct(u(this, ge), () => {
        g(this, ge, null);
      }), C(this, O, lr).call(this, () => {
        C(this, O, Ur).call(this);
      });
    }, a = (f) => {
      try {
        i = !0, r == null || r(f, l), i = !1;
      } catch (o) {
        ze(o, u(this, W) && u(this, W).parent);
      }
      n && g(this, ge, C(this, O, lr).call(this, () => {
        try {
          return oe(() => {
            var o = (
              /** @type {Effect} */
              x
            );
            o.b = this, o.f |= Dr, n(
              u(this, te),
              () => f,
              () => l
            );
          });
        } catch (o) {
          return ze(
            o,
            /** @type {Effect} */
            u(this, W).parent
          ), null;
        }
      }));
    };
    Ke(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (o) {
        ze(o, u(this, W) && u(this, W).parent);
        return;
      }
      f !== null && typeof f == "object" && typeof /** @type {any} */
      f.then == "function" ? f.then(
        a,
        /** @param {unknown} e */
        (o) => ze(o, u(this, W) && u(this, W).parent)
      ) : a(f);
    });
  }
}
te = new WeakMap(), Kt = new WeakMap(), xe = new WeakMap(), ot = new WeakMap(), W = new WeakMap(), ke = new WeakMap(), re = new WeakMap(), ge = new WeakMap(), De = new WeakMap(), ft = new WeakMap(), Ye = new WeakMap(), At = new WeakMap(), Gt = new WeakMap(), Jt = new WeakMap(), Le = new WeakMap(), pr = new WeakMap(), O = new WeakSet(), os = function() {
  try {
    g(this, ke, oe(() => u(this, ot).call(this, u(this, te))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
fs = function(t) {
  const r = u(this, xe).failed;
  r && g(this, ge, oe(() => {
    r(
      u(this, te),
      () => t,
      () => () => {
      }
    );
  }));
}, us = function() {
  const t = u(this, xe).pending;
  t && (this.is_pending = !0, g(this, re, oe(() => t(u(this, te)))), Ke(() => {
    var r = g(this, De, document.createDocumentFragment()), n = Te();
    r.append(n), g(this, ke, C(this, O, lr).call(this, () => oe(() => u(this, ot).call(this, n)))), u(this, Ye) === 0 && (u(this, te).before(r), g(this, De, null), ct(
      /** @type {Effect} */
      u(this, re),
      () => {
        g(this, re, null);
      }
    ), C(this, O, ar).call(
      this,
      /** @type {Batch} */
      m
    ));
  }));
}, Ur = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), g(this, Ye, 0), g(this, ft, 0), g(this, ke, oe(() => {
      u(this, ot).call(this, u(this, te));
    })), u(this, Ye) > 0) {
      var t = g(this, De, document.createDocumentFragment());
      vn(u(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        u(this, xe).pending
      );
      g(this, re, oe(() => r(u(this, te))));
    } else
      C(this, O, ar).call(
        this,
        /** @type {Batch} */
        m
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
ar = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, Gt), u(this, Jt));
}, /**
 * @template T
 * @param {() => T} fn
 */
lr = function(t) {
  var r = x, n = $, s = J;
  Ae(u(this, W)), ce(u(this, W)), Ot(u(this, W).ctx);
  try {
    return Xe.ensure(), t();
  } catch (i) {
    return Qn(i), null;
  } finally {
    Ae(r), ce(n), Ot(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Vr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, O, Vr).call(n, t, r);
    return;
  }
  g(this, Ye, u(this, Ye) + t), u(this, Ye) === 0 && (C(this, O, ar).call(this, r), u(this, re) && ct(u(this, re), () => {
    g(this, re, null);
  }), u(this, De) && (u(this, te).before(u(this, De)), g(this, De, null)));
};
function Bi(e, t, r, n) {
  const s = an;
  var i = e.filter((h) => !h.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var l = (
    /** @type {Effect} */
    x
  ), a = Hi(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function o(h) {
    a();
    try {
      n(h);
    } catch (p) {
      (l.f & ye) === 0 && ze(p, l);
    }
    vr();
  }
  if (r.length === 0) {
    f.then(() => o(t.map(s)));
    return;
  }
  var c = cs();
  function v() {
    Promise.all(r.map((h) => /* @__PURE__ */ Ui(h))).then((h) => o([...t.map(s), ...h])).catch((h) => ze(h, l)).finally(() => c());
  }
  f ? f.then(() => {
    a(), v(), vr();
  }) : v();
}
function Hi() {
  var e = (
    /** @type {Effect} */
    x
  ), t = $, r = J, n = (
    /** @type {Batch} */
    m
  );
  return function(i = !0) {
    Ae(e), ce(t), Ot(r), i && (e.f & ye) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function vr(e = !0) {
  Ae(null), ce(null), Ot(null), e && (m == null || m.deactivate());
}
function cs() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    x.b
  ), t = (
    /** @type {Batch} */
    m
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  var t = F | U, r = $ !== null && ($.f & F) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return x !== null && (x.f |= _t), {
    ctx: J,
    deps: null,
    effects: null,
    equals: Wn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      j
    ),
    wv: 0,
    parent: r ?? x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    x
  );
  n === null && bi();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ht(
    /** @type {V} */
    j
  ), l = !$, a = /* @__PURE__ */ new Map();
  return ra(() => {
    var p;
    var f = (
      /** @type {Effect} */
      x
    ), o = Un();
    s = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(vr);
    } catch (d) {
      o.reject(d), vr();
    }
    var c = (
      /** @type {Batch} */
      m
    );
    if (l) {
      if ((f.f & Qe) !== 0)
        var v = cs();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (p = a.get(c)) == null || p.reject(Ce), a.delete(c);
      else {
        for (const d of a.values())
          d.reject(Ce);
        a.clear();
      }
      a.set(c, o);
    }
    const h = (d, E = void 0) => {
      if (v) {
        var q = E === Ce;
        v(q);
      }
      if (!(E === Ce || (f.f & ye) !== 0)) {
        if (c.activate(), E)
          i.f |= We, Dt(i, E);
        else {
          (i.f & We) !== 0 && (i.f ^= We), Dt(i, d);
          for (const [k, y] of a) {
            if (a.delete(k), k === c) break;
            y.reject(Ce);
          }
        }
        c.deactivate();
      }
    };
    o.promise.then(h, (d) => h(null, d || "unknown"));
  }), xs(() => {
    for (const f of a.values())
      f.reject(Ce);
  }), new Promise((f) => {
    function o(c) {
      function v() {
        c === s ? f(i) : o(s);
      }
      c.then(v, v);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  const t = /* @__PURE__ */ an(e);
  return Ns(t), t;
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  const t = /* @__PURE__ */ an(e);
  return t.equals = Kn, t;
}
function zi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      z(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Wi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & F) === 0)
      return (t.f & ye) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ln(e) {
  var t, r = x;
  Ae(Wi(e));
  try {
    e.f &= ~vt, zi(e), t = Ds(e);
  } finally {
    Ae(r);
  }
  return t;
}
function ds(e) {
  var t = e.v, r = ln(e);
  if (!e.equals(r) && (e.wv = Ms(), (!(m != null && m.is_fork) || e.deps === null) && (e.v = r, m == null || m.capture(e, t), e.deps === null))) {
    L(e, I);
    return;
  }
  pt || (B !== null ? (fn() || m != null && m.is_fork) && B.set(e, r) : nn(e));
}
function Ki(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Ce), n.teardown = ci, n.ac = null, zt(n, 0), cn(n));
}
function vs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Lt(t);
}
let Yr = /* @__PURE__ */ new Set();
const Ge = /* @__PURE__ */ new Map();
let hs = !1;
function ht(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = ht(e);
  return Ns(r), r;
}
// @__NO_SIDE_EFFECTS__
function ps(e, t = !1, r = !0) {
  const n = ht(e);
  return t || (n.equals = Kn), n;
}
function T(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || ($.f & xn) !== 0) && Xn() && ($.f & (F | Ze | tn | xn)) !== 0 && (ue === null || !Nt.call(ue, e)) && Si();
  let n = r ? $t(t) : t;
  return Dt(e, n, ir);
}
function Dt(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    pt ? Ge.set(e, t) : Ge.set(e, n), e.v = t;
    var s = Xe.ensure();
    if (s.capture(e, n), (e.f & F) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && ln(i), B === null && nn(i);
    }
    e.wv = Ms(), _s(e, U, r), x !== null && (x.f & I) !== 0 && (x.f & (we | Je)) === 0 && (ae === null ? ia([e]) : ae.push(e)), !s.is_fork && Yr.size > 0 && !hs && Gi();
  }
  return t;
}
function Gi() {
  hs = !1;
  for (const e of Yr)
    (e.f & I) !== 0 && L(e, Se), er(e) && Lt(e);
  Yr.clear();
}
function Vt(e) {
  T(e, e.v + 1);
}
function _s(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var l = n[i], a = l.f, f = (a & U) === 0;
      if (f && L(l, t), (a & F) !== 0) {
        var o = (
          /** @type {Derived} */
          l
        );
        B == null || B.delete(o), (a & vt) === 0 && (a & fe && (l.f |= vt), _s(o, Se, r));
      } else if (f) {
        var c = (
          /** @type {Effect} */
          l
        );
        (a & Ze) !== 0 && _e !== null && _e.add(c), r !== null ? r.push(c) : sn(c);
      }
    }
}
function $t(e) {
  if (typeof e != "object" || e === null || sr in e)
    return e;
  const t = Hn(e);
  if (t !== fi && t !== ui)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Bn(e), s = /* @__PURE__ */ K(0), i = dt, l = (a) => {
    if (dt === i)
      return a();
    var f = $, o = dt;
    ce(null), Rn(i);
    var c = a();
    return ce(f), Rn(o), c;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && qi();
        var c = r.get(f);
        return c === void 0 ? l(() => {
          var v = /* @__PURE__ */ K(o.value);
          return r.set(f, v), v;
        }) : T(c, o.value, !0), !0;
      },
      deleteProperty(a, f) {
        var o = r.get(f);
        if (o === void 0) {
          if (f in a) {
            const c = l(() => /* @__PURE__ */ K(j));
            r.set(f, c), Vt(s);
          }
        } else
          T(o, j), Vt(s);
        return !0;
      },
      get(a, f, o) {
        var p;
        if (f === sr)
          return e;
        var c = r.get(f), v = f in a;
        if (c === void 0 && (!v || (p = Et(a, f)) != null && p.writable) && (c = l(() => {
          var d = $t(v ? a[f] : j), E = /* @__PURE__ */ K(d);
          return E;
        }), r.set(f, c)), c !== void 0) {
          var h = b(c);
          return h === j ? void 0 : h;
        }
        return Reflect.get(a, f, o);
      },
      getOwnPropertyDescriptor(a, f) {
        var o = Reflect.getOwnPropertyDescriptor(a, f);
        if (o && "value" in o) {
          var c = r.get(f);
          c && (o.value = b(c));
        } else if (o === void 0) {
          var v = r.get(f), h = v == null ? void 0 : v.v;
          if (v !== void 0 && h !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(a, f) {
        var h;
        if (f === sr)
          return !0;
        var o = r.get(f), c = o !== void 0 && o.v !== j || Reflect.has(a, f);
        if (o !== void 0 || x !== null && (!c || (h = Et(a, f)) != null && h.writable)) {
          o === void 0 && (o = l(() => {
            var p = c ? $t(a[f]) : j, d = /* @__PURE__ */ K(p);
            return d;
          }), r.set(f, o));
          var v = b(o);
          if (v === j)
            return !1;
        }
        return c;
      },
      set(a, f, o, c) {
        var Y;
        var v = r.get(f), h = f in a;
        if (n && f === "length")
          for (var p = o; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var d = r.get(p + "");
            d !== void 0 ? T(d, j) : p in a && (d = l(() => /* @__PURE__ */ K(j)), r.set(p + "", d));
          }
        if (v === void 0)
          (!h || (Y = Et(a, f)) != null && Y.writable) && (v = l(() => /* @__PURE__ */ K(void 0)), T(v, $t(o)), r.set(f, v));
        else {
          h = v.v !== j;
          var E = l(() => $t(o));
          T(v, E);
        }
        var q = Reflect.getOwnPropertyDescriptor(a, f);
        if (q != null && q.set && q.set.call(c, o), !h) {
          if (n && typeof f == "string") {
            var k = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(f);
            Number.isInteger(y) && y >= k.v && T(k, y + 1);
          }
          Vt(s);
        }
        return !0;
      },
      ownKeys(a) {
        b(s);
        var f = Reflect.ownKeys(a).filter((v) => {
          var h = r.get(v);
          return h === void 0 || h.v !== j;
        });
        for (var [o, c] of r)
          c.v !== j && !(o in a) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        Ti();
      }
    }
  );
}
var Tn, gs, ms, bs;
function zr() {
  if (Tn === void 0) {
    Tn = window, gs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ms = Et(t, "firstChild").get, bs = Et(t, "nextSibling").get, En(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), En(r) && (r.__t = void 0);
  }
}
function Te(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    ms.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return (
    /** @type {TemplateNode | null} */
    bs.call(e)
  );
}
function R(e, t) {
  if (!A)
    return /* @__PURE__ */ Yt(e);
  var r = /* @__PURE__ */ Yt(N);
  if (r === null)
    r = N.appendChild(Te());
  else if (t && r.nodeType !== rn) {
    var n = Te();
    return r == null || r.before(n), ie(n), n;
  }
  return t && $s(
    /** @type {Text} */
    r
  ), ie(r), r;
}
function D(e, t = 1, r = !1) {
  let n = A ? N : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ je(n);
  if (!A)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== rn) {
      var i = Te();
      return n === null ? s == null || s.after(i) : n.before(i), ie(i), i;
    }
    $s(
      /** @type {Text} */
      n
    );
  }
  return ie(n), n;
}
function ys(e) {
  e.textContent = "";
}
function ws() {
  return !1;
}
function on(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(jn, e, void 0)
  );
}
function $s(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === rn; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let Sn = !1;
function Es() {
  Sn || (Sn = !0, document.addEventListener(
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
function wr(e) {
  var t = $, r = x;
  ce(null), Ae(null);
  try {
    return e();
  } finally {
    ce(t), Ae(r);
  }
}
function Ji(e, t, r, n = r) {
  e.addEventListener(t, () => wr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Es();
}
function Xi(e) {
  x === null && ($ === null && Ei(), $i()), pt && wi();
}
function Zi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Re(e, t) {
  var r = x;
  r !== null && (r.f & se) !== 0 && (e |= se);
  var n = {
    ctx: J,
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
  }, s = n;
  if ((e & Ct) !== 0)
    wt !== null ? wt.push(n) : Xe.ensure().schedule(n);
  else if (t !== null) {
    try {
      Lt(n);
    } catch (l) {
      throw z(n), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & _t) === 0 && (s = s.first, (e & Ze) !== 0 && (e & Mt) !== 0 && s !== null && (s.f |= Mt));
  }
  if (s !== null && (s.parent = r, r !== null && Zi(s, r), $ !== null && ($.f & F) !== 0 && (e & Je) === 0)) {
    var i = (
      /** @type {Derived} */
      $
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function fn() {
  return $ !== null && !be;
}
function xs(e) {
  const t = Re(mr, null);
  return L(t, I), t.teardown = e, t;
}
function Qi(e) {
  Xi();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !$ && (t & we) !== 0 && (t & Qe) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      J
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ks(e);
}
function ks(e) {
  return Re(Ct | hi, e);
}
function ea(e) {
  Xe.ensure();
  const t = Re(Je | _t, e);
  return () => {
    z(t);
  };
}
function ta(e) {
  Xe.ensure();
  const t = Re(Je | _t, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ct(t, () => {
      z(t), n(void 0);
    }) : (z(t), n(void 0));
  });
}
function qs(e) {
  return Re(Ct, e);
}
function ra(e) {
  return Re(tn | _t, e);
}
function $r(e, t = 0) {
  return Re(mr | t, e);
}
function yt(e, t = [], r = [], n = []) {
  Bi(n, t, r, (s) => {
    Re(mr, () => e(...s.map(b)));
  });
}
function un(e, t = 0) {
  var r = Re(Ze | t, e);
  return r;
}
function oe(e) {
  return Re(we | _t, e);
}
function Ts(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = pt, n = $;
    An(!0), ce(null);
    try {
      t.call(null);
    } finally {
      An(r), ce(n);
    }
  }
}
function cn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && wr(() => {
      s.abort(Ce);
    });
    var n = r.next;
    (r.f & Je) !== 0 ? r.parent = null : z(r, t), r = n;
  }
}
function na(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & we) === 0 && z(t), t = r;
  }
}
function z(e, t = !0) {
  var r = !1;
  (t || (e.f & vi) !== 0) && e.nodes !== null && e.nodes.end !== null && (sa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), L(e, Lr), cn(e, t && !r), zt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Ts(e), e.f ^= Lr, e.f |= ye;
  var s = e.parent;
  s !== null && s.first !== null && Ss(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function sa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ je(e);
    e.remove(), e = r;
  }
}
function Ss(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ct(e, t, r = !0) {
  var n = [];
  As(e, n, !0);
  var s = () => {
    r && z(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function As(e, t, r) {
  if ((e.f & se) === 0) {
    e.f ^= se;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next, l = (s.f & Mt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & we) !== 0 && (e.f & Ze) !== 0;
      As(s, t, l ? r : !1), s = i;
    }
  }
}
function dn(e) {
  Rs(e, !0);
}
function Rs(e, t) {
  if ((e.f & se) !== 0) {
    e.f ^= se, (e.f & I) === 0 && (L(e, U), Xe.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Mt) !== 0 || (r.f & we) !== 0;
      Rs(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function vn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ je(r);
      t.append(r), r = s;
    }
}
let or = !1, pt = !1;
function An(e) {
  pt = e;
}
let $ = null, be = !1;
function ce(e) {
  $ = e;
}
let x = null;
function Ae(e) {
  x = e;
}
let ue = null;
function Ns(e) {
  $ !== null && (ue === null ? ue = [e] : ue.push(e));
}
let G = null, Q = 0, ae = null;
function ia(e) {
  ae = e;
}
let Cs = 1, it = 0, dt = it;
function Rn(e) {
  dt = e;
}
function Ms() {
  return ++Cs;
}
function er(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & F && (e.f &= ~vt), (t & Se) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (er(
        /** @type {Derived} */
        i
      ) && ds(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    B === null && L(e, I);
  }
  return !1;
}
function Os(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ue !== null && Nt.call(ue, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & F) !== 0 ? Os(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? L(i, U) : (i.f & I) !== 0 && L(i, Se), sn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ds(e) {
  var E;
  var t = G, r = Q, n = ae, s = $, i = ue, l = J, a = be, f = dt, o = e.f;
  G = /** @type {null | Value[]} */
  null, Q = 0, ae = null, $ = (o & (we | Je)) === 0 ? e : null, ue = null, Ot(e.ctx), be = !1, dt = ++it, e.ac !== null && (wr(() => {
    e.ac.abort(Ce);
  }), e.ac = null);
  try {
    e.f |= Ir;
    var c = (
      /** @type {Function} */
      e.fn
    ), v = c();
    e.f |= Qe;
    var h = e.deps, p = m == null ? void 0 : m.is_fork;
    if (G !== null) {
      var d;
      if (p || zt(e, Q), h !== null && Q > 0)
        for (h.length = Q + G.length, d = 0; d < G.length; d++)
          h[Q + d] = G[d];
      else
        e.deps = h = G;
      if (fn() && (e.f & fe) !== 0)
        for (d = Q; d < h.length; d++)
          ((E = h[d]).reactions ?? (E.reactions = [])).push(e);
    } else !p && h !== null && Q < h.length && (zt(e, Q), h.length = Q);
    if (Xn() && ae !== null && !be && h !== null && (e.f & (F | Se | U)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      ae.length; d++)
        Os(
          ae[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (it++, s.deps !== null)
        for (let q = 0; q < r; q += 1)
          s.deps[q].rv = it;
      if (t !== null)
        for (const q of t)
          q.rv = it;
      ae !== null && (n === null ? n = ae : n.push(.../** @type {Source[]} */
      ae));
    }
    return (e.f & We) !== 0 && (e.f ^= We), v;
  } catch (q) {
    return Qn(q);
  } finally {
    e.f ^= Ir, G = t, Q = r, ae = n, $ = s, ue = i, Ot(l), be = a, dt = f;
  }
}
function aa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = li.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & F) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !Nt.call(G, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & fe) !== 0 && (i.f ^= fe, i.f &= ~vt), nn(i), Ki(i), zt(i, 0);
  }
}
function zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      aa(e, r[n]);
}
function Lt(e) {
  var t = e.f;
  if ((t & ye) === 0) {
    L(e, I);
    var r = x, n = or;
    x = e, or = !0;
    try {
      (t & (Ze | Vn)) !== 0 ? na(e) : cn(e), Ts(e);
      var s = Ds(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Cs;
      var i;
      ai && Ci && (e.f & U) !== 0 && e.deps;
    } finally {
      or = n, x = r;
    }
  }
}
async function la() {
  await Promise.resolve(), ns();
}
function b(e) {
  var t = e.f, r = (t & F) !== 0;
  if ($ !== null && !be) {
    var n = x !== null && (x.f & ye) !== 0;
    if (!n && (ue === null || !Nt.call(ue, e))) {
      var s = $.deps;
      if (($.f & Ir) !== 0)
        e.rv < it && (e.rv = it, G === null && s !== null && s[Q] === e ? Q++ : G === null ? G = [e] : G.push(e));
      else {
        ($.deps ?? ($.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : Nt.call(i, $) || i.push($);
      }
    }
  }
  if (pt && Ge.has(e))
    return Ge.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (pt) {
      var a = l.v;
      return ((l.f & I) === 0 && l.reactions !== null || Is(l)) && (a = ln(l)), Ge.set(l, a), a;
    }
    var f = (l.f & fe) === 0 && !be && $ !== null && (or || ($.f & fe) !== 0), o = (l.f & Qe) === 0;
    er(l) && (f && (l.f |= fe), ds(l)), f && !o && (vs(l), Ls(l));
  }
  if (B != null && B.has(e))
    return B.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function Ls(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & F) !== 0 && (t.f & fe) === 0 && (vs(
        /** @type {Derived} */
        t
      ), Ls(
        /** @type {Derived} */
        t
      ));
}
function Is(e) {
  if (e.v === j) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ge.has(t) || (t.f & F) !== 0 && Is(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Er(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const at = Symbol("events"), Ps = /* @__PURE__ */ new Set(), Wr = /* @__PURE__ */ new Set();
function oa(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || Kr.call(t, i), !i.cancelBubble)
      return wr(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ke(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function fa(e, t, r, n, s) {
  var i = { capture: n, passive: s }, l = oa(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && xs(() => {
    t.removeEventListener(e, l, i);
  });
}
function ua(e, t, r) {
  (t[at] ?? (t[at] = {}))[e] = r;
}
function ca(e) {
  for (var t = 0; t < e.length; t++)
    Ps.add(e[t]);
  for (var r of Wr)
    r(e);
}
let Nn = null;
function Kr(e) {
  var q, k;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((q = e.composedPath) == null ? void 0 : q.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Nn = e;
  var l = 0, a = Nn === e && e[at];
  if (a) {
    var f = s.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[at] = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    f <= o && (l = f);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    cr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var c = $, v = x;
    ce(null), Ae(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var E = (k = i[at]) == null ? void 0 : k[n];
          E != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && E.call(i, e);
        } catch (y) {
          h ? p.push(y) : h = y;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      e[at] = t, delete e.currentTarget, ce(c), Ae(v);
    }
  }
}
var Pn;
const Nr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Pn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Pn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function da(e) {
  return (
    /** @type {string} */
    (Nr == null ? void 0 : Nr.createHTML(e)) ?? e
  );
}
function va(e) {
  var t = on("template");
  return t.innerHTML = da(e.replaceAll("<!>", "<!---->")), t.content;
}
function Gr(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  var r = (t & ii) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (A)
      return Gr(N, null), N;
    n === void 0 && (n = va(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(n));
    var i = (
      /** @type {TemplateNode} */
      r || gs ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Gr(i, i), i;
  };
}
function Ee(e, t) {
  if (A) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      x
    );
    ((r.f & Qe) === 0 || r.nodes.end === null) && (r.nodes.end = N), yr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ha = ["touchstart", "touchmove"];
function pa(e) {
  return ha.includes(e);
}
function pe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Fs(e, t) {
  return js(e, t);
}
function _a(e, t) {
  zr(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, s = N;
  try {
    for (var i = /* @__PURE__ */ Yt(r); i && (i.nodeType !== Qt || /** @type {Comment} */
    i.data !== Fn); )
      i = /* @__PURE__ */ je(i);
    if (!i)
      throw Rt;
    Fe(!0), ie(
      /** @type {Comment} */
      i
    );
    const l = js(e, { ...t, anchor: i });
    return Fe(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== Rt && console.warn("Failed to hydrate: ", l), t.recover === !1 && ki(), zr(), ys(r), Fe(!1), Fs(e, t);
  } finally {
    Fe(n), ie(s);
  }
}
const rr = /* @__PURE__ */ new Map();
function js(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  zr();
  var f = void 0, o = ta(() => {
    var c = r ?? t.appendChild(Te());
    Fi(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Gn({});
        var d = (
          /** @type {ComponentContext} */
          J
        );
        if (i && (d.c = i), s && (n.$$events = s), A && Gr(
          /** @type {TemplateNode} */
          p,
          null
        ), f = e(p, n) || {}, A && (x.nodes.end = N, N === null || N.nodeType !== Qt || /** @type {Comment} */
        N.data !== en))
          throw br(), Rt;
        Jn();
      },
      a
    );
    var v = /* @__PURE__ */ new Set(), h = (p) => {
      for (var d = 0; d < p.length; d++) {
        var E = p[d];
        if (!v.has(E)) {
          v.add(E);
          var q = pa(E);
          for (const Y of [t, document]) {
            var k = rr.get(Y);
            k === void 0 && (k = /* @__PURE__ */ new Map(), rr.set(Y, k));
            var y = k.get(E);
            y === void 0 ? (Y.addEventListener(E, Kr, { passive: q }), k.set(E, 1)) : k.set(E, y + 1);
          }
        }
      }
    };
    return h(gr(Ps)), Wr.add(h), () => {
      var q;
      for (var p of v)
        for (const k of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            rr.get(k)
          ), E = (
            /** @type {number} */
            d.get(p)
          );
          --E == 0 ? (k.removeEventListener(p, Kr), d.delete(p), d.size === 0 && rr.delete(k)) : d.set(p, E);
        }
      Wr.delete(h), c !== r && ((q = c.parentNode) == null || q.removeChild(c));
    };
  });
  return Jr.set(f, o), f;
}
let Jr = /* @__PURE__ */ new WeakMap();
function ga(e, t) {
  const r = Jr.get(e);
  return r ? (Jr.delete(e), r(t)) : Promise.resolve();
}
var me, qe, ne, ut, Xt, Zt, _r;
class ma {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    M(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, me, /* @__PURE__ */ new Map());
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
    w(this, qe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, Xt, !0);
    /**
     * @param {Batch} batch
     */
    w(this, Zt, (t) => {
      if (u(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, me).get(t)
        ), n = u(this, qe).get(r);
        if (n)
          dn(n), u(this, ut).delete(r);
        else {
          var s = u(this, ne).get(r);
          s && (u(this, qe).set(r, s.effect), u(this, ne).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, l] of u(this, me)) {
          if (u(this, me).delete(i), i === t)
            break;
          const a = u(this, ne).get(l);
          a && (z(a.effect), u(this, ne).delete(l));
        }
        for (const [i, l] of u(this, qe)) {
          if (i === r || u(this, ut).has(i)) continue;
          const a = () => {
            if (Array.from(u(this, me).values()).includes(i)) {
              var o = document.createDocumentFragment();
              vn(l, o), o.append(Te()), u(this, ne).set(i, { effect: l, fragment: o });
            } else
              z(l);
            u(this, ut).delete(i), u(this, qe).delete(i);
          };
          u(this, Xt) || !n ? (u(this, ut).add(i), ct(l, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, _r, (t) => {
      u(this, me).delete(t);
      const r = Array.from(u(this, me).values());
      for (const [n, s] of u(this, ne))
        r.includes(n) || (z(s.effect), u(this, ne).delete(n));
    });
    this.anchor = t, g(this, Xt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      m
    ), s = ws();
    if (r && !u(this, qe).has(t) && !u(this, ne).has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = Te();
        i.append(l), u(this, ne).set(t, {
          effect: oe(() => r(l)),
          fragment: i
        });
      } else
        u(this, qe).set(
          t,
          oe(() => r(this.anchor))
        );
    if (u(this, me).set(n, t), s) {
      for (const [a, f] of u(this, qe))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of u(this, ne))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(u(this, Zt)), n.ondiscard(u(this, _r));
    } else
      A && (this.anchor = N), u(this, Zt).call(this, n);
  }
}
me = new WeakMap(), qe = new WeakMap(), ne = new WeakMap(), ut = new WeakMap(), Xt = new WeakMap(), Zt = new WeakMap(), _r = new WeakMap();
function ba(e) {
  J === null && mi(), Qi(() => {
    const t = Er(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nr(e, t, r = !1) {
  var n;
  A && (n = N, yr());
  var s = new ma(e), i = r ? Mt : 0;
  function l(a, f) {
    if (A) {
      var o = zn(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(o.substring(1))) {
        var c = dr();
        ie(c), s.anchor = c, Fe(!1), s.ensure(a, f), Fe(!0);
        return;
      }
    }
    s.ensure(a, f);
  }
  un(() => {
    var a = !1;
    t((f, o = 0) => {
      a = !0, l(o, f);
    }), a || l(-1, null);
  }, i);
}
function ya(e, t, r) {
  for (var n = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let v = t[a];
    ct(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Xr(e, gr(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var o = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        o.parentNode
      );
      ys(c), c.append(o), e.items.clear();
    }
    Xr(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Xr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const a of l)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n != null && n.has(i)) {
      i.f |= Pe;
      const l = document.createDocumentFragment();
      vn(i, l);
    } else
      z(t[s], r);
  }
}
var Cn;
function Mn(e, t, r, n, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    l = A ? ie(/* @__PURE__ */ Yt(f)) : f.appendChild(Te());
  }
  A && yr();
  var o = null, c = /* @__PURE__ */ Yi(() => {
    var y = r();
    return Bn(y) ? y : y == null ? [] : gr(y);
  }), v, h = /* @__PURE__ */ new Map(), p = !0;
  function d(y) {
    (k.effect.f & ye) === 0 && (k.pending.delete(y), k.fallback = o, wa(k, v, l, t, n), o !== null && (v.length === 0 ? (o.f & Pe) === 0 ? dn(o) : (o.f ^= Pe, Ht(o, null, l)) : ct(o, () => {
      o = null;
    })));
  }
  function E(y) {
    k.pending.delete(y);
  }
  var q = un(() => {
    v = /** @type {V[]} */
    b(c);
    var y = v.length;
    let Y = !1;
    if (A) {
      var Ne = zn(l) === Qr;
      Ne !== (y === 0) && (l = dr(), ie(l), Fe(!1), Y = !0);
    }
    for (var de = /* @__PURE__ */ new Set(), $e = (
      /** @type {Batch} */
      m
    ), gt = ws(), ve = 0; ve < y; ve += 1) {
      A && N.nodeType === Qt && /** @type {Comment} */
      N.data === en && (l = /** @type {Comment} */
      N, Y = !0, Fe(!1));
      var X = v[ve], et = n(X, ve), _ = p ? null : a.get(et);
      _ ? (_.v && Dt(_.v, X), _.i && Dt(_.i, ve), gt && $e.unskip_effect(_.e)) : (_ = $a(
        a,
        p ? l : Cn ?? (Cn = Te()),
        X,
        et,
        ve,
        s,
        t,
        r
      ), p || (_.e.f |= Pe), a.set(et, _)), de.add(et);
    }
    if (y === 0 && i && !o && (p ? o = oe(() => i(l)) : (o = oe(() => i(Cn ?? (Cn = Te()))), o.f |= Pe)), y > de.size && yi(), A && y > 0 && ie(dr()), !p)
      if (h.set($e, de), gt) {
        for (const [P, H] of a)
          de.has(P) || $e.skip_effect(H.e);
        $e.oncommit(d), $e.ondiscard(E);
      } else
        d($e);
    Y && Fe(!0), b(c);
  }), k = { effect: q, items: a, pending: h, outrogroups: null, fallback: o };
  p = !1, A && (l = N);
}
function Bt(e) {
  for (; e !== null && (e.f & we) === 0; )
    e = e.next;
  return e;
}
function wa(e, t, r, n, s) {
  var ve;
  var i = t.length, l = e.items, a = Bt(e.effect.first), f, o = null, c = [], v = [], h, p, d, E;
  for (E = 0; E < i; E += 1) {
    if (h = t[E], p = s(h, E), d = /** @type {EachItem} */
    l.get(p).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(d), X.done.delete(d);
    if ((d.f & se) !== 0 && dn(d), (d.f & Pe) !== 0)
      if (d.f ^= Pe, d === a)
        Ht(d, null, r);
      else {
        var q = o ? o.next : a;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Ve(e, o, d), Ve(e, d, q), Ht(d, q, r), o = d, c = [], v = [], a = Bt(o.next);
        continue;
      }
    if (d !== a) {
      if (f !== void 0 && f.has(d)) {
        if (c.length < v.length) {
          var k = v[0], y;
          o = k.prev;
          var Y = c[0], Ne = c[c.length - 1];
          for (y = 0; y < c.length; y += 1)
            Ht(c[y], k, r);
          for (y = 0; y < v.length; y += 1)
            f.delete(v[y]);
          Ve(e, Y.prev, Ne.next), Ve(e, o, Y), Ve(e, Ne, k), a = k, o = Ne, E -= 1, c = [], v = [];
        } else
          f.delete(d), Ht(d, a, r), Ve(e, d.prev, d.next), Ve(e, d, o === null ? e.effect.first : o.next), Ve(e, o, d), o = d;
        continue;
      }
      for (c = [], v = []; a !== null && a !== d; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), v.push(a), a = Bt(a.next);
      if (a === null)
        continue;
    }
    (d.f & Pe) === 0 && c.push(d), o = d, a = Bt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (Xr(e, gr(X.done)), (ve = e.outrogroups) == null || ve.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var de = [];
    if (f !== void 0)
      for (d of f)
        (d.f & se) === 0 && de.push(d);
    for (; a !== null; )
      (a.f & se) === 0 && a !== e.fallback && de.push(a), a = Bt(a.next);
    var $e = de.length;
    if ($e > 0) {
      var gt = i === 0 ? r : null;
      ya(e, de, gt);
    }
  }
}
function $a(e, t, r, n, s, i, l, a) {
  var f = (l & ri) !== 0 ? (l & si) === 0 ? /* @__PURE__ */ ps(r, !1, !1) : ht(r) : null, o = (l & ni) !== 0 ? ht(s) : null;
  return {
    v: f,
    i: o,
    e: oe(() => (i(t, f ?? r, o ?? s, a), () => {
      e.delete(n);
    }))
  };
}
function Ht(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Pe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ je(n)
      );
      if (i.before(n), n === s)
        return;
      n = l;
    }
}
function Ve(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ea(e, t) {
  qs(() => {
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
      const s = on("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const xa = Symbol("is custom element"), ka = Symbol("is html"), qa = gi ? "link" : "LINK";
function Ta(e) {
  if (A) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Zr(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          Zr(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, Ke(r), Es();
  }
}
function Zr(e, t, r, n) {
  var s = Sa(e);
  A && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === qa) || s[t] !== (s[t] = r) && (t === "loading" && (e[_i] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Aa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Sa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [xa]: e.nodeName.includes("-"),
      [ka]: e.namespaceURI === jn
    })
  );
}
var On = /* @__PURE__ */ new Map();
function Aa(e) {
  var t = e.getAttribute("is") || e.nodeName, r = On.get(t);
  if (r) return r;
  On.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = oi(s);
    for (var l in n)
      n[l].set && r.push(l);
    s = Hn(s);
  }
  return r;
}
function Ra(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ji(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Cr(e) ? Mr(i) : i, r(i), m !== null && n.add(m), await la(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var o = e.value.length;
        l === a && a === f && o > f ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = l, e.selectionEnd = Math.min(a, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Er(t) == null && e.value) && (r(Cr(e) ? Mr(e.value) : e.value), m !== null && n.add(m)), $r(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        m
      );
      if (n.has(i))
        return;
    }
    Cr(e) && s === Mr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Cr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Mr(e) {
  return e === "" ? null : +e;
}
function Dn(e, t) {
  return e === t || (e == null ? void 0 : e[sr]) === t;
}
function Na(e = {}, t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    J.r
  ), i = (
    /** @type {Effect} */
    x
  );
  return qs(() => {
    var l, a;
    return $r(() => {
      l = a, a = [], Er(() => {
        e !== r(...a) && (t(e, ...a), l && Dn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = i;
      for (; f !== s && f.parent !== null && f.parent.f & Lr; )
        f = f.parent;
      const o = () => {
        a && Dn(r(...a), e) && t(null, ...a);
      }, c = f.teardown;
      f.teardown = () => {
        o(), c == null || c();
      };
    };
  }), e;
}
function Ca(e) {
  return new Ma(e);
}
var Ie, le;
class Ma {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    w(this, Ie);
    /** @type {Record<string, any>} */
    w(this, le);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (l, a) => {
      var f = /* @__PURE__ */ ps(a, !1, !1);
      return r.set(l, f), f;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, a) {
          return b(r.get(a) ?? n(a, Reflect.get(l, a)));
        },
        has(l, a) {
          return a === pi ? !0 : (b(r.get(a) ?? n(a, Reflect.get(l, a))), Reflect.has(l, a));
        },
        set(l, a, f) {
          return T(r.get(a) ?? n(a, f), f), Reflect.set(l, a, f);
        }
      }
    );
    g(this, le, (t.hydrate ? _a : Fs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && ns(), g(this, Ie, s.$$events);
    for (const l of Object.keys(u(this, le)))
      l === "$set" || l === "$destroy" || l === "$on" || cr(this, l, {
        get() {
          return u(this, le)[l];
        },
        /** @param {any} value */
        set(a) {
          u(this, le)[l] = a;
        },
        enumerable: !0
      });
    u(this, le).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, u(this, le).$destroy = () => {
      ga(u(this, le));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    u(this, le).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    u(this, Ie)[t] = u(this, Ie)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return u(this, Ie)[t].push(n), () => {
      u(this, Ie)[t] = u(this, Ie)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    u(this, le).$destroy();
  }
}
Ie = new WeakMap(), le = new WeakMap();
let Bs;
typeof HTMLElement == "function" && (Bs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    M(this, "$$ctor");
    /** Slots */
    M(this, "$$s");
    /** @type {any} The Svelte component instance */
    M(this, "$$c");
    /** Whether or not the custom element is connected */
    M(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    M(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    M(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    M(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    M(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    M(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    M(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    M(this, "$$shadowRoot", null);
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
        return (l) => {
          const a = on("slot");
          i !== "default" && (a.name = i), Ee(l, a);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Oa(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = fr(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ca({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = ea(() => {
        $r(() => {
          var i;
          this.$$r = !0;
          for (const l of ur(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = fr(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const a = this.$$c.$on(i, l);
          this.$$l_u.set(l, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = fr(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return ur(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function fr(e, t, r, n) {
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
function Oa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Da(e, t, r, n, s, i) {
  let l = class extends Bs {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ur(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ur(t).forEach((a) => {
    cr(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var v;
        f = fr(a, f, t), this.$$d[a] = f;
        var o = this.$$c;
        if (o) {
          var c = (v = Et(o, a)) == null ? void 0 : v.get;
          c ? o[a] = f : o.$set({ [a]: f });
        }
      }
    });
  }), n.forEach((a) => {
    cr(l.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function La() {
  return window;
}
function Ia(e) {
  var t, r;
  (r = (t = La()).setAccessToken) == null || r.call(t, e);
}
async function Hs(e) {
  return (e.headers.get("content-type") || "").includes("application/json") ? await e.json() : {};
}
async function Pa(e, t) {
  const r = await fetch(`${e.replace(/\/$/, "")}/login`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: t })
  }), n = await Hs(r);
  return {
    ok: r.ok,
    status: r.status,
    data: n ?? null
  };
}
async function Fa(e) {
  const t = await fetch(`${e.replace(/\/$/, "")}/refresh`, {
    method: "POST",
    credentials: "same-origin"
  }), r = await Hs(t);
  return {
    ok: t.ok,
    status: t.status,
    data: r ?? null
  };
}
async function ja(e) {
  return fetch(`${e.replace(/\/$/, "")}/logout`, {
    method: "POST",
    credentials: "same-origin"
  });
}
const Or = "efsdb-bootstrap";
function Ba() {
  var n;
  const e = document.getElementById(Or);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${Or}`);
  const t = ((n = e.textContent) == null ? void 0 : n.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${Or}`);
  const r = JSON.parse(t);
  if (!r || typeof r != "object")
    throw new Error("Invalid bootstrap payload");
  return r;
}
function Ha(e) {
  const t = Ba();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function Ua() {
  return window;
}
function Va() {
  var t, r;
  const e = (r = (t = Ua()).getEfsdbTheme) == null ? void 0 : r.call(t);
  return e === "light" || e === "green" ? e : "dark";
}
function Ya(e) {
  const t = (r) => {
    const n = r.detail, s = n == null ? void 0 : n.theme;
    e(s === "light" || s === "green" ? s : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
var za = /* @__PURE__ */ Be('<div class="spinner svelte-1qud9af"><div class="bounce1 svelte-1qud9af"></div> <div class="bounce2 svelte-1qud9af"></div> <div class="bounce3 svelte-1qud9af"></div></div>'), Wa = /* @__PURE__ */ Be('<span class="tag svelte-1qud9af"> </span>'), Ka = /* @__PURE__ */ Be('<span class="tag accent svelte-1qud9af"> </span>'), Ga = /* @__PURE__ */ Be('<div class="detail-item full-width svelte-1qud9af"><div class="detail-label svelte-1qud9af">Available Display Modes</div> <div class="tags svelte-1qud9af"></div></div>'), Ja = /* @__PURE__ */ Be('<a class="btn btn-primary svelte-1qud9af">Open Admin</a>'), Xa = /* @__PURE__ */ Be('<div class="profile-card svelte-1qud9af"><div class="profile-header svelte-1qud9af"><div class="avatar svelte-1qud9af"> </div> <div class="user-info svelte-1qud9af"><h2 class="svelte-1qud9af"> </h2> <span class="badge svelte-1qud9af"> </span></div></div> <div class="details-grid svelte-1qud9af"><div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Account</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Actual Role</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Display Mode</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">UID / GID</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item full-width svelte-1qud9af"><div class="detail-label svelte-1qud9af">Entitlements</div> <div class="tags svelte-1qud9af"></div></div> <!></div> <div class="actions svelte-1qud9af"><button class="btn btn-outline svelte-1qud9af" type="button">Logout</button> <!></div></div>'), Za = /* @__PURE__ */ Be('<div class="alert error svelte-1qud9af"> </div>'), Qa = /* @__PURE__ */ Be('<div class="login-card svelte-1qud9af"><div class="eyebrow svelte-1qud9af">EFSDB Access</div> <h2 class="svelte-1qud9af">Sign in with a provisioned login key.</h2> <p class="subtitle svelte-1qud9af">Use a tenant-admin or member login key created through bootstrap or the operator CLI. Public magic keys are disabled.</p> <!> <form class="svelte-1qud9af"><div class="form-group svelte-1qud9af"><label for="key" class="svelte-1qud9af">Login Key</label> <input type="password" id="key" placeholder="Paste tenant login key" required="" class="svelte-1qud9af"/></div> <button type="submit" class="btn btn-primary full-width svelte-1qud9af"> </button></form> <div class="hint svelte-1qud9af">Development may emit the initial tenant-admin key once in the server console. Production requires injected bootstrap material.</div></div>'), el = /* @__PURE__ */ Be('<div class="login-shell svelte-1qud9af"><!></div>');
const tl = {
  hash: "svelte-1qud9af",
  code: `:host {
    /*
     * Host-local token bridge.
     * Theme ownership still lives outside this component; only the stable web-side aliases
     * are consumed here. Local surface values stay in place to preserve the current card UI.
     */display:block;font-family:var(--efs-font-sans);color:var(--efs-text-default);--primary: var(--efs-accent-primary);--primary-hover: var(--efs-accent-primary-hover);--primary-text: var(--efs-text-inverse);--primary-ink: var(--primary);--danger: var(--efs-state-danger);--success: var(--efs-state-success);--bg-card: var(--efs-bg-surface-1);--bg-input: var(--efs-bg-surface-0);--border: var(--efs-border-field);--border-strong: var(--efs-border-focus);--muted: var(--efs-text-subtle);--shadow: var(--efs-shadow-dialog);}:host([theme='light']) {color:#0f172a;--primary: var(--efs-accent-surface-light, color-mix(in srgb, var(--accent, #0f172a) 60%, #0f172a 40%));--primary-hover: var(--efs-accent-surface-light-hover, color-mix(in srgb, var(--accent, #0f172a) 52%, #0f172a 48%));--primary-text: var(--efs-text-inverse, #f5f7fb);--primary-ink: var(--efs-accent-ink-light, color-mix(in srgb, var(--accent, #0f172a) 22%, #0f172a 78%));--danger: #dc2626;--success: #16a34a;--bg-card: rgba(255, 255, 255, 0.92);--bg-input: #f8fafc;--border: #e2e8f0;--border-strong: #94a3b8;--muted: #64748b;--shadow: 0 18px 40px rgba(15, 23, 42, 0.08);}:host([theme='green']) {color:#e7eddc;--primary: var(--accent, #c6ff00);--primary-hover: color-mix(in srgb, var(--accent, #c6ff00) 80%, black);--primary-text: var(--shell-pill-text, #050804);--danger: #ef4444;--success: #22c55e;--bg-card: rgba(12, 20, 10, 0.8);--bg-input: rgba(6, 10, 6, 0.4);--border: rgba(198, 255, 0, 0.12);--border-strong: rgba(198, 255, 0, 0.2);--muted: #a2b392;--shadow: 0 18px 40px rgba(0, 0, 0, 0.3);}.login-shell.svelte-1qud9af {display:flex;justify-content:center;align-items:center;min-height:320px;width:100%;padding:1rem;}.login-card.svelte-1qud9af,
  .profile-card.svelte-1qud9af {background:var(--bg-card);border:1px solid var(--border);border-radius:24px;padding:1.6rem;width:min(100%, 500px);box-shadow:var(--shadow);backdrop-filter:blur(16px);}.eyebrow.svelte-1qud9af {color:var(--primary-ink);font:var(--efs-font-label);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:0.8rem;}h2.svelte-1qud9af {margin:0;font:var(--efs-font-title-lg);line-height:1.12;font-weight:800;letter-spacing:-0.02em;}.subtitle.svelte-1qud9af {color:var(--muted);font:var(--efs-font-body-md);margin:0.9rem 0 1.3rem 0;line-height:1.55;}.form-group.svelte-1qud9af {margin-bottom:1.2rem;}label.svelte-1qud9af {display:block;font:var(--efs-font-label);margin-bottom:0.55rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}input.svelte-1qud9af {width:100%;background:var(--bg-input);border:1px solid var(--border);border-radius:16px;padding:0.88rem 1rem;color:inherit;font:var(--efs-font-body-lg);box-sizing:border-box;transition:border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;}input.svelte-1qud9af:focus {outline:none;border-color:var(--border-strong);box-shadow:0 0 0 4px color-mix(in srgb, var(--primary), transparent 88%);transform:translateY(-1px);}.btn.svelte-1qud9af {display:inline-flex;justify-content:center;align-items:center;padding:0.82rem 1.1rem;border-radius:16px;font:var(--efs-font-body-sm);font-weight:700;cursor:pointer;transition:transform 0.2s,
      background 0.2s,
      border-color 0.2s;border:1px solid transparent;text-decoration:none;}.btn.svelte-1qud9af:hover:not(:disabled) {transform:translateY(-1px);}.btn-primary.svelte-1qud9af {background:var(--primary);color:var(--primary-text);}.btn-primary.svelte-1qud9af:hover:not(:disabled) {background:var(--primary-hover);}.btn-primary.svelte-1qud9af:disabled {opacity:0.65;cursor:not-allowed;}.btn-outline.svelte-1qud9af {background:transparent;border-color:var(--border);color:var(--muted);}.btn-outline.svelte-1qud9af:hover {border-color:var(--border-strong);color:var(--text, #eef4df);}.full-width.svelte-1qud9af {width:100%;}.alert.svelte-1qud9af {padding:0.85rem 1rem;border-radius:16px;font:var(--efs-font-body-sm);margin-bottom:1rem;}.error.svelte-1qud9af {background:rgba(255, 123, 139, 0.12);border:1px solid rgba(255, 123, 139, 0.3);color:var(--danger);}.profile-header.svelte-1qud9af {display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem;padding-bottom:1.2rem;border-bottom:1px solid var(--border);}.avatar.svelte-1qud9af {width:3.25rem;height:3.25rem;background:linear-gradient(135deg, var(--primary), var(--primary-hover));color:var(--primary-text);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font:var(--efs-font-title-md);}.user-info.svelte-1qud9af {min-width:0;}.user-info.svelte-1qud9af h2:where(.svelte-1qud9af) {font:var(--efs-font-title-md);margin-bottom:0.4rem;word-break:break-word;}.badge.svelte-1qud9af {display:inline-block;padding:0.3rem 0.7rem;border-radius:999px;font:var(--efs-font-micro);text-transform:uppercase;letter-spacing:0.08em;background:color-mix(in srgb, var(--primary-ink), transparent 84%);color:var(--primary-ink);}.details-grid.svelte-1qud9af {display:grid;grid-template-columns:1fr 1fr;gap:0.85rem;margin-bottom:1.2rem;}.detail-item.svelte-1qud9af {display:flex;flex-direction:column;gap:0.35rem;}.detail-item.full-width.svelte-1qud9af {grid-column:1 / -1;}.detail-item.svelte-1qud9af .detail-label:where(.svelte-1qud9af) {margin:0;font:var(--efs-font-label);color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}.detail-item.svelte-1qud9af span:where(.svelte-1qud9af) {font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;font:var(--efs-font-body-sm);font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;word-break:break-word;}.tags.svelte-1qud9af {display:flex;flex-wrap:wrap;gap:0.5rem;}.tag.svelte-1qud9af {background:var(--bg-input);border:1px solid var(--border);padding:0.3rem 0.55rem;border-radius:999px;font:var(--efs-font-body-xs);font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;}.tag.accent.svelte-1qud9af {border-color:color-mix(in srgb, var(--primary-ink), transparent 44%);color:var(--primary-ink);}.actions.svelte-1qud9af {display:flex;justify-content:space-between;gap:1rem;margin-top:1rem;}.hint.svelte-1qud9af {margin-top:1.35rem;color:var(--muted);font:var(--efs-font-body-sm);line-height:1.55;}.spinner.svelte-1qud9af {margin:20px auto 0;width:70px;text-align:center;}.spinner.svelte-1qud9af > div:where(.svelte-1qud9af) {width:12px;height:12px;background-color:var(--muted);border-radius:100%;display:inline-block;
    animation: svelte-1qud9af-sk-bouncedelay 1.4s infinite ease-in-out both;}.spinner.svelte-1qud9af .bounce1:where(.svelte-1qud9af) {animation-delay:-0.32s;}.spinner.svelte-1qud9af .bounce2:where(.svelte-1qud9af) {animation-delay:-0.16s;}

  @keyframes svelte-1qud9af-sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }

  @media (max-width: 47.99rem) {.login-card.svelte-1qud9af,
    .profile-card.svelte-1qud9af {padding:1.2rem;border-radius:20px;}.details-grid.svelte-1qud9af {grid-template-columns:1fr;}.detail-item.full-width.svelte-1qud9af {grid-column:auto;}.actions.svelte-1qud9af {flex-direction:column;}
  }`
};
function rl(e, t) {
  var X, et;
  Gn(t, !0), Ea(e, tl);
  const r = Ha("login"), n = (r.authBase ?? r.apiBase ?? "/_efsdb/api/auth").replace(/\/$/, ""), s = ((X = r.urls) == null ? void 0 : X.redirect) ?? "/_efsdb/admin", i = ((et = r.urls) == null ? void 0 : et.home) ?? "/_efsdb/control", l = t.$$host;
  let a = /* @__PURE__ */ K($t(r.user ?? null)), f = /* @__PURE__ */ K(!0), o = /* @__PURE__ */ K(""), c = /* @__PURE__ */ K(""), v = /* @__PURE__ */ K(null), h = /* @__PURE__ */ K(null);
  function p(_) {
    T(v, _, !0), Ia(_);
  }
  function d(_) {
    l.dispatchEvent(new CustomEvent("authchange", {
      detail: { state: _, accessToken: b(v), user: b(a) },
      bubbles: !0,
      composed: !0
    }));
  }
  function E(_) {
    l.setAttribute("theme", _);
  }
  async function q() {
    const _ = await Fa(n);
    return !_.ok || !_.data ? (p(null), T(a, null), d("logged_out"), !1) : (T(a, _.data.user ?? null, !0), p(typeof _.data.accessToken == "string" ? _.data.accessToken : null), b(a) && b(v) ? (d("authenticated"), !0) : (d("logged_out"), !1));
  }
  async function k() {
    T(f, !0), T(o, "");
    try {
      await q();
    } catch (_) {
      console.error(_), p(null), T(a, null), d("logged_out");
    } finally {
      T(f, !1), b(a) || requestAnimationFrame(() => {
        var _;
        return (_ = b(h)) == null ? void 0 : _.focus();
      });
    }
  }
  async function y() {
    var _;
    T(f, !0), T(o, "");
    try {
      const P = await Pa(n, b(c)), H = P.data;
      if (!P.ok || !H || typeof H.accessToken != "string" || !H.user) {
        T(o, ((_ = H == null ? void 0 : H.error) == null ? void 0 : _.message) || "Login failed", !0), T(f, !1);
        return;
      }
      const He = H;
      if (T(a, He.user, !0), p(He.accessToken), d("authenticated"), s.trim() !== "") {
        window.location.assign(s);
        return;
      }
    } catch (P) {
      console.error(P), T(o, "Network error");
    }
    T(f, !1);
  }
  async function Y() {
    T(f, !0), T(o, "");
    try {
      await ja(n);
    } catch (_) {
      console.error(_);
    } finally {
      p(null), T(a, null), T(c, ""), d("logged_out"), T(f, !1), requestAnimationFrame(() => {
        var _;
        return (_ = b(h)) == null ? void 0 : _.focus();
      }), i.trim() !== "" && window.location.assign(i);
    }
  }
  ba(() => {
    E(Va());
    const _ = Ya((P) => {
      E(P);
    });
    return k(), () => {
      _();
    };
  });
  var Ne = el(), de = R(Ne);
  {
    var $e = (_) => {
      var P = za();
      Ee(_, P);
    }, gt = (_) => {
      var P = Xa(), H = R(P), He = R(H), It = R(He, !0);
      S(He);
      var mt = D(He, 2), tt = R(mt), Pt = R(tt, !0);
      S(tt);
      var tr = D(tt, 2), he = R(tr, !0);
      S(tr), S(mt), S(H);
      var rt = D(H, 2), Ft = R(rt), hn = D(R(Ft), 2), Us = R(hn, !0);
      S(hn), S(Ft);
      var xr = D(Ft, 2), pn = D(R(xr), 2), Vs = R(pn, !0);
      S(pn), S(xr);
      var kr = D(xr, 2), _n = D(R(kr), 2), Ys = R(_n, !0);
      S(_n), S(kr);
      var qr = D(kr, 2), gn = D(R(qr), 2), zs = R(gn);
      S(gn), S(qr);
      var Tr = D(qr, 2), mn = D(R(Tr), 2);
      Mn(mn, 20, () => b(a).entitlements || [], (Z) => Z, (Z, Ue) => {
        var bt = Wa(), jt = R(bt, !0);
        S(bt), yt(() => pe(jt, Ue)), Ee(Z, bt);
      }), S(mn), S(Tr);
      var Ws = D(Tr, 2);
      {
        var Ks = (Z) => {
          var Ue = Ga(), bt = D(R(Ue), 2);
          Mn(bt, 20, () => b(a).availableDisplayModes || [], (jt) => jt, (jt, Zs) => {
            var Sr = Ka(), Qs = R(Sr, !0);
            S(Sr), yt(() => pe(Qs, Zs)), Ee(jt, Sr);
          }), S(bt), S(Ue), Ee(Z, Ue);
        };
        nr(Ws, (Z) => {
          (b(a).availableDisplayModes || []).length > 1 && Z(Ks);
        });
      }
      S(rt);
      var bn = D(rt, 2), yn = R(bn), Gs = D(yn, 2);
      {
        var Js = (Z) => {
          var Ue = Ja();
          yt(() => Zr(Ue, "href", s)), Ee(Z, Ue);
        }, Xs = /* @__PURE__ */ Vi(() => s.trim() !== "");
        nr(Gs, (Z) => {
          b(Xs) && Z(Js);
        });
      }
      S(bn), S(P), yt(
        (Z) => {
          pe(It, Z), pe(Pt, b(a).username), pe(he, b(a).role), pe(Us, b(a).id), pe(Vs, b(a).actualRole), pe(Ys, b(a).displayMode || b(a).role), pe(zs, `${b(a).uid ?? "n/a" ?? ""} / ${b(a).gid ?? "n/a" ?? ""}`);
        },
        [() => b(a).username.charAt(0).toUpperCase()]
      ), ua("click", yn, Y), Ee(_, P);
    }, ve = (_) => {
      var P = Qa(), H = D(R(P), 6);
      {
        var He = (he) => {
          var rt = Za(), Ft = R(rt, !0);
          S(rt), yt(() => pe(Ft, b(o))), Ee(he, rt);
        };
        nr(H, (he) => {
          b(o) && he(He);
        });
      }
      var It = D(H, 2), mt = R(It), tt = D(R(mt), 2);
      Ta(tt), Na(tt, (he) => T(h, he), () => b(h)), S(mt);
      var Pt = D(mt, 2), tr = R(Pt, !0);
      S(Pt), S(It), Yn(2), S(P), yt(() => {
        Pt.disabled = b(f), pe(tr, b(f) ? "Authenticating..." : "Login");
      }), fa("submit", It, (he) => {
        he.preventDefault(), y();
      }), Ra(tt, () => b(c), (he) => T(c, he)), Ee(_, P);
    };
    nr(de, (_) => {
      b(f) ? _($e) : b(a) ? _(gt, 1) : _(ve, -1);
    });
  }
  S(Ne), Ee(e, Ne), Jn();
}
ca(["click"]);
customElements.define("efsdb-login", Da(rl, {}, [], [], { mode: "open" }));
