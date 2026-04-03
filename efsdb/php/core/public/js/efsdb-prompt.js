var ss = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var ls = (e, t, r) => t in e ? ss(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => ls(e, typeof t != "symbol" ? t + "" : t, r), kr = (e, t, r) => t.has(e) || gn("Cannot " + r);
var f = (e, t, r) => (kr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, n) => (kr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (kr(e, t, "access private method"), r);
var Ln;
typeof window < "u" && ((Ln = window.__svelte ?? (window.__svelte = {})).v ?? (Ln.v = /* @__PURE__ */ new Set())).add("5");
const os = 1, as = 4, fs = 8, us = 16, Fn = 1, cs = 2, zn = "[", Yn = "[!", mn = "[?", Bn = "]", kt = {}, H = Symbol(), Hn = "http://www.w3.org/1999/xhtml", ds = !1;
var hs = Array.isArray, vs = Array.prototype.indexOf, Tt = Array.prototype.includes, _s = Array.from, ar = Object.keys, fr = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, ps = Object.getOwnPropertyDescriptors, gs = Object.prototype, ms = Array.prototype, Wn = Object.getPrototypeOf, bn = Object.isExtensible;
const Vn = () => {
};
function bs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Un() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const z = 2, St = 4, _r = 8, qn = 1 << 24, Ke = 16, Ee = 32, Ue = 64, Rr = 128, le = 512, D = 1024, V = 2048, ke = 4096, xe = 8192, pe = 16384, Ge = 32768, wn = 1 << 25, ft = 65536, yn = 1 << 17, ws = 1 << 18, ct = 1 << 19, ys = 1 << 20, ut = 65536, jr = 1 << 21, Ur = 1 << 22, He = 1 << 23, tr = Symbol("$state"), Xn = Symbol("legacy props"), $s = Symbol(""), Ne = new class extends Error {
  constructor() {
    super(...arguments);
    j(this, "name", "StaleReactionError");
    j(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Dn;
const xs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Dn = globalThis.document) != null && Dn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), pr = 3, gr = 8;
function Es(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ks() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ss() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function As(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ns() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Rs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function js() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ms() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Os() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ls() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let N = !1;
function pt(e) {
  N = e;
}
let A;
function ge(e) {
  if (e === null)
    throw mr(), kt;
  return A = e;
}
function qr() {
  return ge(/* @__PURE__ */ Fe(A));
}
function I(e) {
  if (N) {
    if (/* @__PURE__ */ Fe(A) !== null)
      throw mr(), kt;
    A = e;
  }
}
function Mr(e = 1) {
  if (N) {
    for (var t = e, r = A; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Fe(r);
    A = r;
  }
}
function Kn(e = !0) {
  for (var t = 0, r = A; ; ) {
    if (r.nodeType === gr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Bn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === zn || n === Yn || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Fe(r)
    );
    e && r.remove(), r = i;
  }
}
function Ds(e) {
  if (!e || e.nodeType !== gr)
    throw mr(), kt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Gn(e) {
  return e === this.v;
}
function Is(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Jn(e) {
  return !Is(e, this.v);
}
let Fs = !1, ne = null;
function At(e) {
  ne = e;
}
function Xr(e, t = !1, r) {
  ne = {
    p: ne,
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
function Kr(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      wi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ne = t.p, e ?? /** @type {T} */
  {};
}
function Zn() {
  return !0;
}
let et = [];
function Qn() {
  var e = et;
  et = [], bs(e);
}
function We(e) {
  if (et.length === 0 && !Mt) {
    var t = et;
    queueMicrotask(() => {
      t === et && Qn();
    });
  }
  et.push(e);
}
function zs() {
  for (; et.length > 0; )
    Qn();
}
function ei(e) {
  var t = S;
  if (t === null)
    return $.f |= He, e;
  if ((t.f & Ge) === 0 && (t.f & St) === 0)
    throw e;
  Be(e, t);
}
function Be(e, t) {
  for (; t !== null; ) {
    if ((t.f & Rr) !== 0) {
      if ((t.f & Ge) === 0)
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
const Ys = -7169;
function L(e, t) {
  e.f = e.f & Ys | t;
}
function Gr(e) {
  (e.f & le) !== 0 || e.deps === null ? L(e, D) : L(e, ke);
}
function ti(e) {
  if (e !== null)
    for (const t of e)
      (t.f & z) === 0 || (t.f & ut) === 0 || (t.f ^= ut, ti(
        /** @type {Derived} */
        t.deps
      ));
}
function ri(e, t, r) {
  (e.f & V) !== 0 ? t.add(e) : (e.f & ke) !== 0 && r.add(e), ti(e.deps), L(e, D);
}
let Zt = !1;
function Bs(e) {
  var t = Zt;
  try {
    return Zt = !1, [e(), Zt];
  } finally {
    Zt = t;
  }
}
const Qe = /* @__PURE__ */ new Set();
let b = null, W = null, Or = null, Mt = !1, Tr = !1, gt = null, rr = null;
var $n = 0;
let Hs = 1;
var bt, wt, yt, $t, It, Q, nt, je, Me, xt, U, Pr, Lr, Dr, Ir, ni;
const dr = class dr {
  constructor() {
    y(this, U);
    // for debugging. TODO remove once async is stable
    j(this, "id", Hs++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    j(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    j(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, wt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    y(this, yt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    y(this, $t, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    y(this, It, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    y(this, Q, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    y(this, nt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    y(this, je, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    y(this, Me, /* @__PURE__ */ new Map());
    j(this, "is_fork", !1);
    y(this, xt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Me).has(t) || f(this, Me).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, Me).get(t);
    if (r) {
      f(this, Me).delete(t);
      for (var n of r.d)
        L(n, V), this.schedule(n);
      for (n of r.m)
        L(n, ke), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== H && !this.previous.has(t) && this.previous.set(t, r), (t.f & He) === 0 && (this.current.set(t, t.v), W == null || W.set(t, t.v));
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, W = null;
  }
  flush() {
    try {
      Tr = !0, b = this, R(this, U, Lr).call(this);
    } finally {
      $n = 0, Or = null, gt = null, rr = null, Tr = !1, b = null, W = null, Ve.clear();
    }
  }
  discard() {
    for (const t of f(this, wt)) t(this);
    f(this, wt).clear(), Qe.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    m(this, yt, f(this, yt) + 1), t && m(this, $t, f(this, $t) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    m(this, yt, f(this, yt) - 1), t && m(this, $t, f(this, $t) - 1), !(f(this, xt) || r) && (m(this, xt, !0), We(() => {
      m(this, xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, nt).add(n);
    for (const n of r)
      f(this, je).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, wt).add(t);
  }
  settled() {
    return (f(this, It) ?? m(this, It, Un())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new dr();
      Tr || (Qe.add(b), Mt || We(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      W = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Or = t, (i = t.b) != null && i.is_pending && (t.f & (St | _r | qn)) !== 0 && (t.f & Ge) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (gt !== null && r === S && ($ === null || ($.f & z) === 0))
        return;
      if ((n & (Ue | Ee)) !== 0) {
        if ((n & D) === 0)
          return;
        r.f ^= D;
      }
    }
    f(this, Q).push(r);
  }
};
bt = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), $t = new WeakMap(), It = new WeakMap(), Q = new WeakMap(), nt = new WeakMap(), je = new WeakMap(), Me = new WeakMap(), xt = new WeakMap(), U = new WeakSet(), Pr = function() {
  return this.is_fork || f(this, $t) > 0;
}, Lr = function() {
  var o, u;
  if ($n++ > 1e3 && (Qe.delete(this), Ws()), !R(this, U, Pr).call(this)) {
    for (const a of f(this, nt))
      f(this, je).delete(a), L(a, V), this.schedule(a);
    for (const a of f(this, je))
      L(a, ke), this.schedule(a);
  }
  const t = f(this, Q);
  m(this, Q, []), this.apply();
  var r = gt = [], n = [], i = rr = [];
  for (const a of t)
    try {
      R(this, U, Dr).call(this, a, r, n);
    } catch (c) {
      throw oi(a), c;
    }
  if (b = null, i.length > 0) {
    var s = dr.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (gt = null, rr = null, R(this, U, Pr).call(this)) {
    R(this, U, Ir).call(this, n), R(this, U, Ir).call(this, r);
    for (const [a, c] of f(this, Me))
      li(a, c);
  } else {
    f(this, yt) === 0 && Qe.delete(this), f(this, nt).clear(), f(this, je).clear();
    for (const a of f(this, bt)) a(this);
    f(this, bt).clear(), xn(n), xn(r), (o = f(this, It)) == null || o.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (f(this, Q).length > 0) {
    const a = l ?? (l = this);
    f(a, Q).push(...f(this, Q).filter((c) => !f(a, Q).includes(c)));
  }
  l !== null && (Qe.add(l), R(u = l, U, Lr).call(u)), Qe.has(this) || R(this, U, ni).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Dr = function(t, r, n) {
  t.f ^= D;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (Ee | Ue)) !== 0, o = l && (s & D) !== 0, u = o || (s & xe) !== 0 || f(this, Me).has(i);
    if (!u && i.fn !== null) {
      l ? i.f ^= D : (s & St) !== 0 ? r.push(i) : Vt(i) && ((s & Ke) !== 0 && f(this, je).add(i), Ct(i));
      var a = i.first;
      if (a !== null) {
        i = a;
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
Ir = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ri(t[r], f(this, nt), f(this, je));
}, ni = function() {
  var u;
  for (const a of Qe) {
    var t = a.id < this.id, r = [];
    for (const [c, h] of this.current) {
      if (a.current.has(c))
        if (t && h !== a.current.get(c))
          a.current.set(c, h);
        else
          continue;
      r.push(c);
    }
    var n = [...a.current.keys()].filter((c) => !this.current.has(c));
    if (n.length === 0)
      t && a.discard();
    else if (r.length > 0) {
      a.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var l of r)
        ii(l, n, i, s);
      if (f(a, Q).length > 0) {
        a.apply();
        for (var o of f(a, Q))
          R(u = a, U, Dr).call(u, o, [], []);
        m(a, Q, []);
      }
      a.deactivate();
    }
  }
};
let qe = dr;
function J(e) {
  var t = Mt;
  Mt = !0;
  try {
    for (var r; ; ) {
      if (zs(), b === null)
        return (
          /** @type {T} */
          r
        );
      b.flush();
    }
  } finally {
    Mt = t;
  }
}
function Ws() {
  try {
    Cs();
  } catch (e) {
    Be(e, Or);
  }
}
let ue = null;
function xn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (pe | xe)) === 0 && Vt(n) && (ue = /* @__PURE__ */ new Set(), Ct(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && $i(n), (ue == null ? void 0 : ue.size) > 0)) {
        Ve.clear();
        for (const i of ue) {
          if ((i.f & (pe | xe)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            ue.has(l) && (ue.delete(l), s.push(l)), l = l.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const u = s[o];
            (u.f & (pe | xe)) === 0 && Ct(u);
          }
        }
        ue.clear();
      }
    }
    ue = null;
  }
}
function ii(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & z) !== 0 ? ii(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Ur | Ke)) !== 0 && (s & V) === 0 && si(i, t, n) && (L(i, V), Jr(
        /** @type {Effect} */
        i
      ));
    }
}
function si(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Tt.call(t, i))
        return !0;
      if ((i.f & z) !== 0 && si(
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
function Jr(e) {
  b.schedule(e);
}
function li(e, t) {
  if (!((e.f & Ee) !== 0 && (e.f & D) !== 0)) {
    (e.f & V) !== 0 ? t.d.push(e) : (e.f & ke) !== 0 && t.m.push(e), L(e, D);
    for (var r = e.first; r !== null; )
      li(r, t), r = r.next;
  }
}
function oi(e) {
  L(e, D);
  for (var t = e.first; t !== null; )
    oi(t), t = t.next;
}
function Vs(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    nn() && (g(r), sn(() => (t === 0 && (n = br(() => e(() => Ot(r)))), t += 1, () => {
      We(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Ot(r));
      });
    })));
  };
}
var Us = ft | ct;
function qs(e, t, r, n) {
  new Xs(e, t, r, n);
}
var ee, Ft, we, it, q, ye, te, de, Oe, st, Ye, Et, zt, Yt, Pe, hr, O, ai, fi, ui, Fr, nr, ir, zr;
class Xs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    y(this, O);
    /** @type {Boundary | null} */
    j(this, "parent");
    j(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    j(this, "transform_error");
    /** @type {TemplateNode} */
    y(this, ee);
    /** @type {TemplateNode | null} */
    y(this, Ft, N ? A : null);
    /** @type {BoundaryProps} */
    y(this, we);
    /** @type {((anchor: Node) => void)} */
    y(this, it);
    /** @type {Effect} */
    y(this, q);
    /** @type {Effect | null} */
    y(this, ye, null);
    /** @type {Effect | null} */
    y(this, te, null);
    /** @type {Effect | null} */
    y(this, de, null);
    /** @type {DocumentFragment | null} */
    y(this, Oe, null);
    y(this, st, 0);
    y(this, Ye, 0);
    y(this, Et, !1);
    /** @type {Set<Effect>} */
    y(this, zt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    y(this, Yt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    y(this, Pe, null);
    y(this, hr, Vs(() => (m(this, Pe, Wt(f(this, st))), () => {
      m(this, Pe, null);
    })));
    var s;
    m(this, ee, t), m(this, we, r), m(this, it, (l) => {
      var o = (
        /** @type {Effect} */
        S
      );
      o.b = this, o.f |= Rr, n(l);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((l) => l), m(this, q, ln(() => {
      if (N) {
        const l = (
          /** @type {Comment} */
          f(this, Ft)
        );
        qr();
        const o = l.data === Yn;
        if (l.data.startsWith(mn)) {
          const a = JSON.parse(l.data.slice(mn.length));
          R(this, O, fi).call(this, a);
        } else o ? R(this, O, ui).call(this) : R(this, O, ai).call(this);
      } else
        R(this, O, Fr).call(this);
    }, Us)), N && m(this, ee, A);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ri(t, f(this, zt), f(this, Yt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, we).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, O, zr).call(this, t, r), m(this, st, f(this, st) + t), !(!f(this, Pe) || f(this, Et)) && (m(this, Et, !0), We(() => {
      m(this, Et, !1), f(this, Pe) && cr(f(this, Pe), f(this, st));
    }));
  }
  get_effect_pending() {
    return f(this, hr).call(this), g(
      /** @type {Source<number>} */
      f(this, Pe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, we).onerror;
    let n = f(this, we).failed;
    if (!r && !n)
      throw t;
    f(this, ye) && (G(f(this, ye)), m(this, ye, null)), f(this, te) && (G(f(this, te)), m(this, te, null)), f(this, de) && (G(f(this, de)), m(this, de, null)), N && (ge(
      /** @type {TemplateNode} */
      f(this, Ft)
    ), Mr(), ge(Kn()));
    var i = !1, s = !1;
    const l = () => {
      if (i) {
        Ls();
        return;
      }
      i = !0, s && Ps(), f(this, de) !== null && Lt(f(this, de), () => {
        m(this, de, null);
      }), R(this, O, ir).call(this, () => {
        R(this, O, Fr).call(this);
      });
    }, o = (u) => {
      try {
        s = !0, r == null || r(u, l), s = !1;
      } catch (a) {
        Be(a, f(this, q) && f(this, q).parent);
      }
      n && m(this, de, R(this, O, ir).call(this, () => {
        try {
          return Ce(() => {
            var a = (
              /** @type {Effect} */
              S
            );
            a.b = this, a.f |= Rr, n(
              f(this, ee),
              () => u,
              () => l
            );
          });
        } catch (a) {
          return Be(
            a,
            /** @type {Effect} */
            f(this, q).parent
          ), null;
        }
      }));
    };
    We(() => {
      var u;
      try {
        u = this.transform_error(t);
      } catch (a) {
        Be(a, f(this, q) && f(this, q).parent);
        return;
      }
      u !== null && typeof u == "object" && typeof /** @type {any} */
      u.then == "function" ? u.then(
        o,
        /** @param {unknown} e */
        (a) => Be(a, f(this, q) && f(this, q).parent)
      ) : o(u);
    });
  }
}
ee = new WeakMap(), Ft = new WeakMap(), we = new WeakMap(), it = new WeakMap(), q = new WeakMap(), ye = new WeakMap(), te = new WeakMap(), de = new WeakMap(), Oe = new WeakMap(), st = new WeakMap(), Ye = new WeakMap(), Et = new WeakMap(), zt = new WeakMap(), Yt = new WeakMap(), Pe = new WeakMap(), hr = new WeakMap(), O = new WeakSet(), ai = function() {
  try {
    m(this, ye, Ce(() => f(this, it).call(this, f(this, ee))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
fi = function(t) {
  const r = f(this, we).failed;
  r && m(this, de, Ce(() => {
    r(
      f(this, ee),
      () => t,
      () => () => {
      }
    );
  }));
}, ui = function() {
  const t = f(this, we).pending;
  t && (this.is_pending = !0, m(this, te, Ce(() => t(f(this, ee)))), We(() => {
    var r = m(this, Oe, document.createDocumentFragment()), n = Ie();
    r.append(n), m(this, ye, R(this, O, ir).call(this, () => Ce(() => f(this, it).call(this, n)))), f(this, Ye) === 0 && (f(this, ee).before(r), m(this, Oe, null), Lt(
      /** @type {Effect} */
      f(this, te),
      () => {
        m(this, te, null);
      }
    ), R(this, O, nr).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Fr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, Ye, 0), m(this, st, 0), m(this, ye, Ce(() => {
      f(this, it).call(this, f(this, ee));
    })), f(this, Ye) > 0) {
      var t = m(this, Oe, document.createDocumentFragment());
      ki(f(this, ye), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, we).pending
      );
      m(this, te, Ce(() => r(f(this, ee))));
    } else
      R(this, O, nr).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
nr = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, zt), f(this, Yt));
}, /**
 * @template T
 * @param {() => T} fn
 */
ir = function(t) {
  var r = S, n = $, i = ne;
  Te(f(this, q)), ae(f(this, q)), At(f(this, q).ctx);
  try {
    return qe.ensure(), t();
  } catch (s) {
    return ei(s), null;
  } finally {
    Te(r), ae(n), At(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
zr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, O, zr).call(n, t, r);
    return;
  }
  m(this, Ye, f(this, Ye) + t), f(this, Ye) === 0 && (R(this, O, nr).call(this, r), f(this, te) && Lt(f(this, te), () => {
    m(this, te, null);
  }), f(this, Oe) && (f(this, ee).before(f(this, Oe)), m(this, Oe, null)));
};
function Ks(e, t, r, n) {
  const i = Zr;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var l = (
    /** @type {Effect} */
    S
  ), o = Gs(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function a(v) {
    o();
    try {
      n(v);
    } catch (p) {
      (l.f & pe) === 0 && Be(p, l);
    }
    ur();
  }
  if (r.length === 0) {
    u.then(() => a(t.map(i)));
    return;
  }
  var c = ci();
  function h() {
    Promise.all(r.map((v) => /* @__PURE__ */ Js(v))).then((v) => a([...t.map(i), ...v])).catch((v) => Be(v, l)).finally(() => c());
  }
  u ? u.then(() => {
    o(), h(), ur();
  }) : h();
}
function Gs() {
  var e = (
    /** @type {Effect} */
    S
  ), t = $, r = ne, n = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Te(e), ae(t), At(r), s && (e.f & pe) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function ur(e = !0) {
  Te(null), ae(null), At(null), e && (b == null || b.deactivate());
}
function ci() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    S.b
  ), t = (
    /** @type {Batch} */
    b
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  var t = z | V, r = $ !== null && ($.f & z) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return S !== null && (S.f |= ct), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Gn,
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
function Js(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && ks();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Wt(
    /** @type {V} */
    H
  ), l = !$, o = /* @__PURE__ */ new Map();
  return vl(() => {
    var p;
    var u = (
      /** @type {Effect} */
      S
    ), a = Un();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).finally(ur);
    } catch (d) {
      a.reject(d), ur();
    }
    var c = (
      /** @type {Batch} */
      b
    );
    if (l) {
      if ((u.f & Ge) !== 0)
        var h = ci();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (p = o.get(c)) == null || p.reject(Ne), o.delete(c);
      else {
        for (const d of o.values())
          d.reject(Ne);
        o.clear();
      }
      o.set(c, a);
    }
    const v = (d, w = void 0) => {
      if (h) {
        var k = w === Ne;
        h(k);
      }
      if (!(w === Ne || (u.f & pe) !== 0)) {
        if (c.activate(), w)
          s.f |= He, cr(s, w);
        else {
          (s.f & He) !== 0 && (s.f ^= He), cr(s, d);
          for (const [T, P] of o) {
            if (o.delete(T), T === c) break;
            P.reject(Ne);
          }
        }
        c.deactivate();
      }
    };
    a.promise.then(v, (d) => v(null, d || "unknown"));
  }), ul(() => {
    for (const u of o.values())
      u.reject(Ne);
  }), new Promise((u) => {
    function a(c) {
      function h() {
        c === i ? u(s) : a(i);
      }
      c.then(h, h);
    }
    a(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  const t = /* @__PURE__ */ Zr(e);
  return t.equals = Jn, t;
}
function Qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      G(
        /** @type {Effect} */
        t[r]
      );
  }
}
function el(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & z) === 0)
      return (t.f & pe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Qr(e) {
  var t, r = S;
  Te(el(e));
  try {
    e.f &= ~ut, Qs(e), t = Ci(e);
  } finally {
    Te(r);
  }
  return t;
}
function di(e) {
  var t = e.v, r = Qr(e);
  if (!e.equals(r) && (e.wv = Si(), (!(b != null && b.is_fork) || e.deps === null) && (e.v = r, b == null || b.capture(e, t), e.deps === null))) {
    L(e, D);
    return;
  }
  Xe || (W !== null ? (nn() || b != null && b.is_fork) && W.set(e, r) : Gr(e));
}
function tl(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Ne), n.teardown = Vn, n.ac = null, Dt(n, 0), on(n));
}
function hi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ct(t);
}
let Yr = /* @__PURE__ */ new Set();
const Ve = /* @__PURE__ */ new Map();
let vi = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const r = Wt(e);
  return ml(r), r;
}
// @__NO_SIDE_EFFECTS__
function rl(e, t = !1, r = !0) {
  const n = Wt(e);
  return t || (n.equals = Jn), n;
}
function E(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_e || ($.f & yn) !== 0) && Zn() && ($.f & (z | Ke | Ur | yn)) !== 0 && (oe === null || !Tt.call(oe, e)) && Os();
  let n = r ? mt(t) : t;
  return cr(e, n, rr);
}
function cr(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    Xe ? Ve.set(e, t) : Ve.set(e, n), e.v = t;
    var i = qe.ensure();
    if (i.capture(e, n), (e.f & z) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & V) !== 0 && Qr(s), W === null && Gr(s);
    }
    e.wv = Si(), _i(e, V, r), S !== null && (S.f & D) !== 0 && (S.f & (Ee | Ue)) === 0 && (ie === null ? bl([e]) : ie.push(e)), !i.is_fork && Yr.size > 0 && !vi && nl();
  }
  return t;
}
function nl() {
  vi = !1;
  for (const e of Yr)
    (e.f & D) !== 0 && L(e, ke), Vt(e) && Ct(e);
  Yr.clear();
}
function Ot(e) {
  E(e, e.v + 1);
}
function _i(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var l = n[s], o = l.f, u = (o & V) === 0;
      if (u && L(l, t), (o & z) !== 0) {
        var a = (
          /** @type {Derived} */
          l
        );
        W == null || W.delete(a), (o & ut) === 0 && (o & le && (l.f |= ut), _i(a, ke, r));
      } else if (u) {
        var c = (
          /** @type {Effect} */
          l
        );
        (o & Ke) !== 0 && ue !== null && ue.add(c), r !== null ? r.push(c) : Jr(c);
      }
    }
}
function mt(e) {
  if (typeof e != "object" || e === null || tr in e)
    return e;
  const t = Wn(e);
  if (t !== gs && t !== ms)
    return e;
  var r = /* @__PURE__ */ new Map(), n = hs(e), i = /* @__PURE__ */ M(0), s = at, l = (o) => {
    if (at === s)
      return o();
    var u = $, a = at;
    ae(null), An(s);
    var c = o();
    return ae(u), An(a), c;
  };
  return n && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && js();
        var c = r.get(u);
        return c === void 0 ? l(() => {
          var h = /* @__PURE__ */ M(a.value);
          return r.set(u, h), h;
        }) : E(c, a.value, !0), !0;
      },
      deleteProperty(o, u) {
        var a = r.get(u);
        if (a === void 0) {
          if (u in o) {
            const c = l(() => /* @__PURE__ */ M(H));
            r.set(u, c), Ot(i);
          }
        } else
          E(a, H), Ot(i);
        return !0;
      },
      get(o, u, a) {
        var p;
        if (u === tr)
          return e;
        var c = r.get(u), h = u in o;
        if (c === void 0 && (!h || (p = ot(o, u)) != null && p.writable) && (c = l(() => {
          var d = mt(h ? o[u] : H), w = /* @__PURE__ */ M(d);
          return w;
        }), r.set(u, c)), c !== void 0) {
          var v = g(c);
          return v === H ? void 0 : v;
        }
        return Reflect.get(o, u, a);
      },
      getOwnPropertyDescriptor(o, u) {
        var a = Reflect.getOwnPropertyDescriptor(o, u);
        if (a && "value" in a) {
          var c = r.get(u);
          c && (a.value = g(c));
        } else if (a === void 0) {
          var h = r.get(u), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== H)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return a;
      },
      has(o, u) {
        var v;
        if (u === tr)
          return !0;
        var a = r.get(u), c = a !== void 0 && a.v !== H || Reflect.has(o, u);
        if (a !== void 0 || S !== null && (!c || (v = ot(o, u)) != null && v.writable)) {
          a === void 0 && (a = l(() => {
            var p = c ? mt(o[u]) : H, d = /* @__PURE__ */ M(p);
            return d;
          }), r.set(u, a));
          var h = g(a);
          if (h === H)
            return !1;
        }
        return c;
      },
      set(o, u, a, c) {
        var x;
        var h = r.get(u), v = u in o;
        if (n && u === "length")
          for (var p = a; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var d = r.get(p + "");
            d !== void 0 ? E(d, H) : p in o && (d = l(() => /* @__PURE__ */ M(H)), r.set(p + "", d));
          }
        if (h === void 0)
          (!v || (x = ot(o, u)) != null && x.writable) && (h = l(() => /* @__PURE__ */ M(void 0)), E(h, mt(a)), r.set(u, h));
        else {
          v = h.v !== H;
          var w = l(() => mt(a));
          E(h, w);
        }
        var k = Reflect.getOwnPropertyDescriptor(o, u);
        if (k != null && k.set && k.set.call(c, a), !v) {
          if (n && typeof u == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(u);
            Number.isInteger(P) && P >= T.v && E(T, P + 1);
          }
          Ot(i);
        }
        return !0;
      },
      ownKeys(o) {
        g(i);
        var u = Reflect.ownKeys(o).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== H;
        });
        for (var [a, c] of r)
          c.v !== H && !(a in o) && u.push(a);
        return u;
      },
      setPrototypeOf() {
        Ms();
      }
    }
  );
}
var En, pi, gi, mi;
function Br() {
  if (En === void 0) {
    En = window, pi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    gi = ot(t, "firstChild").get, mi = ot(t, "nextSibling").get, bn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), bn(r) && (r.__t = void 0);
  }
}
function Ie(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return (
    /** @type {TemplateNode | null} */
    gi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return (
    /** @type {TemplateNode | null} */
    mi.call(e)
  );
}
function F(e, t) {
  if (!N)
    return /* @__PURE__ */ ve(e);
  var r = /* @__PURE__ */ ve(A);
  if (r === null)
    r = A.appendChild(Ie());
  else if (t && r.nodeType !== pr) {
    var n = Ie();
    return r == null || r.before(n), ge(n), n;
  }
  return t && tn(
    /** @type {Text} */
    r
  ), ge(r), r;
}
function kn(e, t = !1) {
  if (!N) {
    var r = /* @__PURE__ */ ve(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Fe(r) : r;
  }
  if (t) {
    if ((A == null ? void 0 : A.nodeType) !== pr) {
      var n = Ie();
      return A == null || A.before(n), ge(n), n;
    }
    tn(
      /** @type {Text} */
      A
    );
  }
  return A;
}
function Re(e, t = 1, r = !1) {
  let n = N ? A : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(n);
  if (!N)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== pr) {
      var s = Ie();
      return n === null ? i == null || i.after(s) : n.before(s), ge(s), s;
    }
    tn(
      /** @type {Text} */
      n
    );
  }
  return ge(n), n;
}
function il(e) {
  e.textContent = "";
}
function sl() {
  return !1;
}
function en(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Hn, e, void 0)
  );
}
function tn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === pr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function ll(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, We(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Tn = !1;
function bi() {
  Tn || (Tn = !0, document.addEventListener(
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
function rn(e) {
  var t = $, r = S;
  ae(null), Te(null);
  try {
    return e();
  } finally {
    ae(t), Te(r);
  }
}
function ol(e, t, r, n = r) {
  e.addEventListener(t, () => rn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), bi();
}
function al(e) {
  S === null && ($ === null && As(), Ss()), Xe && Ts();
}
function fl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Se(e, t) {
  var r = S;
  r !== null && (r.f & xe) !== 0 && (e |= xe);
  var n = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | V | le,
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
  if ((e & St) !== 0)
    gt !== null ? gt.push(n) : qe.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ct(n);
    } catch (l) {
      throw G(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ct) === 0 && (i = i.first, (e & Ke) !== 0 && (e & ft) !== 0 && i !== null && (i.f |= ft));
  }
  if (i !== null && (i.parent = r, r !== null && fl(i, r), $ !== null && ($.f & z) !== 0 && (e & Ue) === 0)) {
    var s = (
      /** @type {Derived} */
      $
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function nn() {
  return $ !== null && !_e;
}
function ul(e) {
  const t = Se(_r, null);
  return L(t, D), t.teardown = e, t;
}
function Hr(e) {
  al();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !$ && (t & Ee) !== 0 && (t & Ge) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ne
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return wi(e);
}
function wi(e) {
  return Se(St | ys, e);
}
function cl(e) {
  qe.ensure();
  const t = Se(Ue | ct, e);
  return () => {
    G(t);
  };
}
function dl(e) {
  qe.ensure();
  const t = Se(Ue | ct, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Lt(t, () => {
      G(t), n(void 0);
    }) : (G(t), n(void 0));
  });
}
function hl(e) {
  return Se(St, e);
}
function vl(e) {
  return Se(Ur | ct, e);
}
function sn(e, t = 0) {
  return Se(_r | t, e);
}
function Pt(e, t = [], r = [], n = []) {
  Ks(n, t, r, (i) => {
    Se(_r, () => e(...i.map(g)));
  });
}
function ln(e, t = 0) {
  var r = Se(Ke | t, e);
  return r;
}
function Ce(e) {
  return Se(Ee | ct, e);
}
function yi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Xe, n = $;
    Sn(!0), ae(null);
    try {
      t.call(null);
    } finally {
      Sn(r), ae(n);
    }
  }
}
function on(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && rn(() => {
      i.abort(Ne);
    });
    var n = r.next;
    (r.f & Ue) !== 0 ? r.parent = null : G(r, t), r = n;
  }
}
function _l(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ee) === 0 && G(t), t = r;
  }
}
function G(e, t = !0) {
  var r = !1;
  (t || (e.f & ws) !== 0) && e.nodes !== null && e.nodes.end !== null && (pl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), L(e, wn), on(e, t && !r), Dt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  yi(e), e.f ^= wn, e.f |= pe;
  var i = e.parent;
  i !== null && i.first !== null && $i(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function pl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Fe(e);
    e.remove(), e = r;
  }
}
function $i(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Lt(e, t, r = !0) {
  var n = [];
  xi(e, n, !0);
  var i = () => {
    r && G(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var o of n)
      o.out(l);
  } else
    i();
}
function xi(e, t, r) {
  if ((e.f & xe) === 0) {
    e.f ^= xe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, l = (i.f & ft) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Ee) !== 0 && (e.f & Ke) !== 0;
      xi(i, t, l ? r : !1), i = s;
    }
  }
}
function gl(e) {
  Ei(e, !0);
}
function Ei(e, t) {
  if ((e.f & xe) !== 0) {
    e.f ^= xe, (e.f & D) === 0 && (L(e, V), qe.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & ft) !== 0 || (r.f & Ee) !== 0;
      Ei(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function ki(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Fe(r);
      t.append(r), r = i;
    }
}
let sr = !1, Xe = !1;
function Sn(e) {
  Xe = e;
}
let $ = null, _e = !1;
function ae(e) {
  $ = e;
}
let S = null;
function Te(e) {
  S = e;
}
let oe = null;
function ml(e) {
  $ !== null && (oe === null ? oe = [e] : oe.push(e));
}
let K = null, Z = 0, ie = null;
function bl(e) {
  ie = e;
}
let Ti = 1, tt = 0, at = tt;
function An(e) {
  at = e;
}
function Si() {
  return ++Ti;
}
function Vt(e) {
  var t = e.f;
  if ((t & V) !== 0)
    return !0;
  if (t & z && (e.f &= ~ut), (t & ke) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Vt(
        /** @type {Derived} */
        s
      ) && di(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    W === null && L(e, D);
  }
  return !1;
}
function Ai(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(oe !== null && Tt.call(oe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & z) !== 0 ? Ai(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? L(s, V) : (s.f & D) !== 0 && L(s, ke), Jr(
        /** @type {Effect} */
        s
      ));
    }
}
function Ci(e) {
  var w;
  var t = K, r = Z, n = ie, i = $, s = oe, l = ne, o = _e, u = at, a = e.f;
  K = /** @type {null | Value[]} */
  null, Z = 0, ie = null, $ = (a & (Ee | Ue)) === 0 ? e : null, oe = null, At(e.ctx), _e = !1, at = ++tt, e.ac !== null && (rn(() => {
    e.ac.abort(Ne);
  }), e.ac = null);
  try {
    e.f |= jr;
    var c = (
      /** @type {Function} */
      e.fn
    ), h = c();
    e.f |= Ge;
    var v = e.deps, p = b == null ? void 0 : b.is_fork;
    if (K !== null) {
      var d;
      if (p || Dt(e, Z), v !== null && Z > 0)
        for (v.length = Z + K.length, d = 0; d < K.length; d++)
          v[Z + d] = K[d];
      else
        e.deps = v = K;
      if (nn() && (e.f & le) !== 0)
        for (d = Z; d < v.length; d++)
          ((w = v[d]).reactions ?? (w.reactions = [])).push(e);
    } else !p && v !== null && Z < v.length && (Dt(e, Z), v.length = Z);
    if (Zn() && ie !== null && !_e && v !== null && (e.f & (z | ke | V)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      ie.length; d++)
        Ai(
          ie[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (tt++, i.deps !== null)
        for (let k = 0; k < r; k += 1)
          i.deps[k].rv = tt;
      if (t !== null)
        for (const k of t)
          k.rv = tt;
      ie !== null && (n === null ? n = ie : n.push(.../** @type {Source[]} */
      ie));
    }
    return (e.f & He) !== 0 && (e.f ^= He), h;
  } catch (k) {
    return ei(k);
  } finally {
    e.f ^= jr, K = t, Z = r, ie = n, $ = i, oe = s, At(l), _e = o, at = u;
  }
}
function wl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = vs.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !Tt.call(K, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & le) !== 0 && (s.f ^= le, s.f &= ~ut), Gr(s), tl(s), Dt(s, 0);
  }
}
function Dt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      wl(e, r[n]);
}
function Ct(e) {
  var t = e.f;
  if ((t & pe) === 0) {
    L(e, D);
    var r = S, n = sr;
    S = e, sr = !0;
    try {
      (t & (Ke | qn)) !== 0 ? _l(e) : on(e), yi(e);
      var i = Ci(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ti;
      var s;
      ds && Fs && (e.f & V) !== 0 && e.deps;
    } finally {
      sr = n, S = r;
    }
  }
}
async function yl() {
  await Promise.resolve(), J();
}
function g(e) {
  var t = e.f, r = (t & z) !== 0;
  if ($ !== null && !_e) {
    var n = S !== null && (S.f & pe) !== 0;
    if (!n && (oe === null || !Tt.call(oe, e))) {
      var i = $.deps;
      if (($.f & jr) !== 0)
        e.rv < tt && (e.rv = tt, K === null && i !== null && i[Z] === e ? Z++ : K === null ? K = [e] : K.push(e));
      else {
        ($.deps ?? ($.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [$] : Tt.call(s, $) || s.push($);
      }
    }
  }
  if (Xe && Ve.has(e))
    return Ve.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Xe) {
      var o = l.v;
      return ((l.f & D) === 0 && l.reactions !== null || Ri(l)) && (o = Qr(l)), Ve.set(l, o), o;
    }
    var u = (l.f & le) === 0 && !_e && $ !== null && (sr || ($.f & le) !== 0), a = (l.f & Ge) === 0;
    Vt(l) && (u && (l.f |= le), di(l)), u && !a && (hi(l), Ni(l));
  }
  if (W != null && W.has(e))
    return W.get(e);
  if ((e.f & He) !== 0)
    throw e.v;
  return e.v;
}
function Ni(e) {
  if (e.f |= le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & z) !== 0 && (t.f & le) === 0 && (hi(
        /** @type {Derived} */
        t
      ), Ni(
        /** @type {Derived} */
        t
      ));
}
function Ri(e) {
  if (e.v === H) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ve.has(t) || (t.f & z) !== 0 && Ri(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function br(e) {
  var t = _e;
  try {
    return _e = !0, e();
  } finally {
    _e = t;
  }
}
const rt = Symbol("events"), ji = /* @__PURE__ */ new Set(), Wr = /* @__PURE__ */ new Set();
function be(e, t, r) {
  (t[rt] ?? (t[rt] = {}))[e] = r;
}
function Mi(e) {
  for (var t = 0; t < e.length; t++)
    ji.add(e[t]);
  for (var r of Wr)
    r(e);
}
let Cn = null;
function Nn(e) {
  var k, T;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((k = e.composedPath) == null ? void 0 : k.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Cn = e;
  var l = 0, o = Cn === e && e[rt];
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[rt] = t;
      return;
    }
    var a = i.indexOf(t);
    if (a === -1)
      return;
    u <= a && (l = u);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    fr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = $, h = S;
    ae(null), Te(null);
    try {
      for (var v, p = []; s !== null; ) {
        var d = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = (T = s[rt]) == null ? void 0 : T[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (P) {
          v ? p.push(P) : v = P;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        s = d;
      }
      if (v) {
        for (let P of p)
          queueMicrotask(() => {
            throw P;
          });
        throw v;
      }
    } finally {
      e[rt] = t, delete e.currentTarget, ae(c), Te(h);
    }
  }
}
var In;
const Sr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((In = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : In.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function $l(e) {
  return (
    /** @type {string} */
    (Sr == null ? void 0 : Sr.createHTML(e)) ?? e
  );
}
function Oi(e) {
  var t = en("template");
  return t.innerHTML = $l(e.replaceAll("<!>", "<!---->")), t.content;
}
function De(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t) {
  var r = (t & Fn) !== 0, n = (t & cs) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (N)
      return De(A, null), A;
    i === void 0 && (i = Oi(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ve(i)));
    var l = (
      /** @type {TemplateNode} */
      n || pi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      De(o, u);
    } else
      De(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function xl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & Fn) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (N)
      return De(A, null), A;
    if (!l) {
      var o = (
        /** @type {DocumentFragment} */
        Oi(s)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ ve(o)
      );
      if (i)
        for (l = document.createDocumentFragment(); /* @__PURE__ */ ve(u); )
          l.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ve(u)
          );
      else
        l = /** @type {Element} */
        /* @__PURE__ */ ve(u);
    }
    var a = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    if (i) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(a)
      ), h = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      De(c, h);
    } else
      De(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return /* @__PURE__ */ xl(e, t, "svg");
}
function El() {
  if (N)
    return De(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ie();
  return e.append(t, r), De(t, r), e;
}
function X(e, t) {
  if (N) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      S
    );
    ((r.f & Ge) === 0 || r.nodes.end === null) && (r.nodes.end = A), qr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const kl = ["touchstart", "touchmove"];
function Tl(e) {
  return kl.includes(e);
}
function lr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Pi(e, t) {
  return Li(e, t);
}
function Sl(e, t) {
  Br(), t.intro = t.intro ?? !1;
  const r = t.target, n = N, i = A;
  try {
    for (var s = /* @__PURE__ */ ve(r); s && (s.nodeType !== gr || /** @type {Comment} */
    s.data !== zn); )
      s = /* @__PURE__ */ Fe(s);
    if (!s)
      throw kt;
    pt(!0), ge(
      /** @type {Comment} */
      s
    );
    const l = Li(e, { ...t, anchor: s });
    return pt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== kt && console.warn("Failed to hydrate: ", l), t.recover === !1 && Ns(), Br(), il(r), pt(!1), Pi(e, t);
  } finally {
    pt(n), ge(i);
  }
}
const Qt = /* @__PURE__ */ new Map();
function Li(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: o }) {
  Br();
  var u = void 0, a = dl(() => {
    var c = r ?? t.appendChild(Ie());
    qs(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Xr({});
        var d = (
          /** @type {ComponentContext} */
          ne
        );
        if (s && (d.c = s), i && (n.$$events = i), N && De(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, n) || {}, N && (S.nodes.end = A, A === null || A.nodeType !== gr || /** @type {Comment} */
        A.data !== Bn))
          throw mr(), kt;
        Kr();
      },
      o
    );
    var h = /* @__PURE__ */ new Set(), v = (p) => {
      for (var d = 0; d < p.length; d++) {
        var w = p[d];
        if (!h.has(w)) {
          h.add(w);
          var k = Tl(w);
          for (const x of [t, document]) {
            var T = Qt.get(x);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Qt.set(x, T));
            var P = T.get(w);
            P === void 0 ? (x.addEventListener(w, Nn, { passive: k }), T.set(w, 1)) : T.set(w, P + 1);
          }
        }
      }
    };
    return v(_s(ji)), Wr.add(v), () => {
      var k;
      for (var p of h)
        for (const T of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Qt.get(T)
          ), w = (
            /** @type {number} */
            d.get(p)
          );
          --w == 0 ? (T.removeEventListener(p, Nn), d.delete(p), d.size === 0 && Qt.delete(T)) : d.set(p, w);
        }
      Wr.delete(v), c !== r && ((k = c.parentNode) == null || k.removeChild(c));
    };
  });
  return Vr.set(u, a), u;
}
let Vr = /* @__PURE__ */ new WeakMap();
function Al(e, t) {
  const r = Vr.get(e);
  return r ? (Vr.delete(e), r(t)) : Promise.resolve();
}
var he, $e, re, lt, Bt, Ht, vr;
class Di {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    j(this, "anchor");
    /** @type {Map<Batch, Key>} */
    y(this, he, /* @__PURE__ */ new Map());
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
    y(this, $e, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    y(this, re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    y(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    y(this, Bt, !0);
    /**
     * @param {Batch} batch
     */
    y(this, Ht, (t) => {
      if (f(this, he).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, he).get(t)
        ), n = f(this, $e).get(r);
        if (n)
          gl(n), f(this, lt).delete(r);
        else {
          var i = f(this, re).get(r);
          i && (f(this, $e).set(r, i.effect), f(this, re).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, l] of f(this, he)) {
          if (f(this, he).delete(s), s === t)
            break;
          const o = f(this, re).get(l);
          o && (G(o.effect), f(this, re).delete(l));
        }
        for (const [s, l] of f(this, $e)) {
          if (s === r || f(this, lt).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, he).values()).includes(s)) {
              var a = document.createDocumentFragment();
              ki(l, a), a.append(Ie()), f(this, re).set(s, { effect: l, fragment: a });
            } else
              G(l);
            f(this, lt).delete(s), f(this, $e).delete(s);
          };
          f(this, Bt) || !n ? (f(this, lt).add(s), Lt(l, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    y(this, vr, (t) => {
      f(this, he).delete(t);
      const r = Array.from(f(this, he).values());
      for (const [n, i] of f(this, re))
        r.includes(n) || (G(i.effect), f(this, re).delete(n));
    });
    this.anchor = t, m(this, Bt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), i = sl();
    if (r && !f(this, $e).has(t) && !f(this, re).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = Ie();
        s.append(l), f(this, re).set(t, {
          effect: Ce(() => r(l)),
          fragment: s
        });
      } else
        f(this, $e).set(
          t,
          Ce(() => r(this.anchor))
        );
    if (f(this, he).set(n, t), i) {
      for (const [o, u] of f(this, $e))
        o === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [o, u] of f(this, re))
        o === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(f(this, Ht)), n.ondiscard(f(this, vr));
    } else
      N && (this.anchor = A), f(this, Ht).call(this, n);
  }
}
he = new WeakMap(), $e = new WeakMap(), re = new WeakMap(), lt = new WeakMap(), Bt = new WeakMap(), Ht = new WeakMap(), vr = new WeakMap();
function Rn(e, t, ...r) {
  var n = new Di(e);
  ln(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, ft);
}
function Cl(e) {
  ne === null && Es(), Hr(() => {
    const t = br(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ze(e, t, r = !1) {
  var n;
  N && (n = A, qr());
  var i = new Di(e), s = r ? ft : 0;
  function l(o, u) {
    if (N) {
      var a = Ds(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(a.substring(1))) {
        var c = Kn();
        ge(c), i.anchor = c, pt(!1), i.ensure(o, u), pt(!0);
        return;
      }
    }
    i.ensure(o, u);
  }
  ln(() => {
    var o = !1;
    t((u, a = 0) => {
      o = !0, l(a, u);
    }), o || l(-1, null);
  }, s);
}
function Ii(e, t) {
  hl(() => {
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
      const i = en("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const jn = [...` 	
\r\f \v\uFEFF`];
function Nl(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0; ) {
          var o = l + s;
          (l === 0 || jn.includes(n[l - 1])) && (o === n.length || jn.includes(n[o])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(o + 1) : l = o;
        }
  }
  return n === "" ? null : n;
}
function Mn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function Rl(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += Mn(n)), i && (r += Mn(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function er(e, t, r, n, i, s) {
  var l = e.__className;
  if (N || l !== r || l === void 0) {
    var o = Nl(r, n, s);
    (!N || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (s && i !== s)
    for (var u in s) {
      var a = !!s[u];
      (i == null || a !== !!i[u]) && e.classList.toggle(u, a);
    }
  return s;
}
function Ar(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function On(e, t, r, n) {
  var i = e.__style;
  if (N || i !== t) {
    var s = Rl(t, n);
    (!N || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else n && (Array.isArray(n) ? (Ar(e, r == null ? void 0 : r[0], n[0]), Ar(e, r == null ? void 0 : r[1], n[1], "important")) : Ar(e, r, n));
  return n;
}
const jl = Symbol("is custom element"), Ml = Symbol("is html"), Ol = xs ? "link" : "LINK";
function Pl(e) {
  if (N) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ce(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ce(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, We(r), bi();
  }
}
function ce(e, t, r, n) {
  var i = Ll(e);
  N && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ol) || i[t] !== (i[t] = r) && (t === "loading" && (e[$s] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Dl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ll(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [jl]: e.nodeName.includes("-"),
      [Ml]: e.namespaceURI === Hn
    })
  );
}
var Pn = /* @__PURE__ */ new Map();
function Dl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Pn.get(t);
  if (r) return r;
  Pn.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = ps(i);
    for (var l in n)
      n[l].set && r.push(l);
    i = Wn(i);
  }
  return r;
}
function Il(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ol(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Cr(e) ? Nr(s) : s, r(s), b !== null && n.add(b), await yl(), s !== (s = t())) {
      var l = e.selectionStart, o = e.selectionEnd, u = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var a = e.value.length;
        l === o && o === u && a > u ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = l, e.selectionEnd = Math.min(o, a));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (N && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  br(t) == null && e.value) && (r(Cr(e) ? Nr(e.value) : e.value), b !== null && n.add(b)), sn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (n.has(s))
        return;
    }
    Cr(e) && i === Nr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Cr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Nr(e) {
  return e === "" ? null : +e;
}
function fe(e, t, r, n) {
  var P;
  var i = (r & fs) !== 0, s = (r & us) !== 0, l = (
    /** @type {V} */
    n
  ), o = !0, u = () => (o && (o = !1, l = s ? br(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let a;
  if (i) {
    var c = tr in e || Xn in e;
    a = ((P = ot(e, t)) == null ? void 0 : P.set) ?? (c && t in e ? (x) => e[t] = x : void 0);
  }
  var h, v = !1;
  i ? [h, v] = Bs(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = u(), a && (Rs(), a(h)));
  var p;
  if (p = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (o = !0, x);
  }, (r & as) === 0)
    return p;
  if (a) {
    var d = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(x, me) {
        return arguments.length > 0 ? ((!me || d || v) && a(me ? p() : x), x) : p();
      })
    );
  }
  var w = !1, k = ((r & os) !== 0 ? Zr : Zs)(() => (w = !1, p()));
  i && g(k);
  var T = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(x, me) {
      if (arguments.length > 0) {
        const Je = me ? g(k) : i ? mt(x) : x;
        return E(k, Je), w = !0, l !== void 0 && (l = Je), x;
      }
      return Xe && w || (T.f & pe) !== 0 ? k.v : g(k);
    })
  );
}
function Fl(e) {
  return new zl(e);
}
var Le, se;
class zl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    y(this, Le);
    /** @type {Record<string, any>} */
    y(this, se);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var u = /* @__PURE__ */ rl(o, !1, !1);
      return r.set(l, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return g(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === Xn ? !0 : (g(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, u) {
          return E(r.get(o) ?? n(o, u), u), Reflect.set(l, o, u);
        }
      }
    );
    m(this, se, (t.hydrate ? Sl : Pi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && J(), m(this, Le, i.$$events);
    for (const l of Object.keys(f(this, se)))
      l === "$set" || l === "$destroy" || l === "$on" || fr(this, l, {
        get() {
          return f(this, se)[l];
        },
        /** @param {any} value */
        set(o) {
          f(this, se)[l] = o;
        },
        enumerable: !0
      });
    f(this, se).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, f(this, se).$destroy = () => {
      Al(f(this, se));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, se).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, Le)[t] = f(this, Le)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return f(this, Le)[t].push(n), () => {
      f(this, Le)[t] = f(this, Le)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    f(this, se).$destroy();
  }
}
Le = new WeakMap(), se = new WeakMap();
let Fi;
typeof HTMLElement == "function" && (Fi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    j(this, "$$ctor");
    /** Slots */
    j(this, "$$s");
    /** @type {any} The Svelte component instance */
    j(this, "$$c");
    /** Whether or not the custom element is connected */
    j(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    j(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    j(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    j(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    j(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    j(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    j(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    j(this, "$$shadowRoot", null);
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
          const l = en("slot");
          i !== "default" && (l.name = i), X(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Yl(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = or(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Fl({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = cl(() => {
        sn(() => {
          var i;
          this.$$r = !0;
          for (const s of ar(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = or(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const l = this.$$c.$on(i, s);
          this.$$l_u.set(s, l);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = or(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return ar(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function or(e, t, r, n) {
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
function Yl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function zi(e, t, r, n, i, s) {
  let l = class extends Fi {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ar(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return ar(t).forEach((o) => {
    fr(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var h;
        u = or(o, u, t), this.$$d[o] = u;
        var a = this.$$c;
        if (a) {
          var c = (h = ot(a, o)) == null ? void 0 : h.get;
          c ? a[o] = u : a.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    fr(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var Bl = /* @__PURE__ */ Rt('<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" opacity="0.3"></path><rect x="7" y="7" width="10" height="10" fill="currentColor"></rect>', 1), Hl = /* @__PURE__ */ Rt('<rect x="7" y="7" width="10" height="10" fill="none"></rect>'), Wl = /* @__PURE__ */ Rt('<rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), Vl = /* @__PURE__ */ Rt('<rect x="1" y="7" width="8" height="2" fill="currentColor"></rect>'), Ul = /* @__PURE__ */ Rt('<rect x="2" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect><rect x="0" y="2" width="8" height="8" fill="var(--shell-panel-bg, #ffffff)" stroke="currentColor" stroke-width="1.5"></rect>', 1), ql = /* @__PURE__ */ Rt('<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), Xl = /* @__PURE__ */ Nt('<div class="dialog-footer svelte-ygb1nh"><!></div>'), Kl = /* @__PURE__ */ Nt("<div><!></div> <!>", 1), Gl = /* @__PURE__ */ Nt('<div tabindex="-1" role="dialog"><div><div class="dialog-titlebar svelte-ygb1nh" role="heading" aria-level="2"><span class="dialog-title svelte-ygb1nh"> </span> <div class="dialog-controls svelte-ygb1nh"><button type="button"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn minimize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn maximize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn close svelte-ygb1nh" title="Close" aria-label="Close dialog"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5"></line><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5"></line></svg></button></div></div> <!></div></div>');
const Jl = {
  hash: "svelte-ygb1nh",
  code: `.dialog-wrapper.svelte-ygb1nh {position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:flex-start;padding:0;}.dialog-wrapper.is-modal.svelte-ygb1nh {background:color-mix(in srgb, var(--shell-text-strong, #020617), transparent 72%);}.dialog-wrapper.minimized.svelte-ygb1nh {align-items:flex-end;justify-content:flex-start;}.dialog.svelte-ygb1nh {position:absolute;display:flex;flex-direction:column;background:var(--shell-panel, var(--shell-panel-bg, #ffffff));border:1px solid var(--shell-border, #e2e8f0);border-radius:12px;box-shadow:var(--shell-shadow, 0 16px 48px rgba(0, 0, 0, 0.15));overflow:hidden;min-width:min(20rem, calc(100vw - 24px));min-height:200px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);font-family:var(--font-ui, system-ui, sans-serif);color:var(--shell-text, #0f172a);}.dialog-titlebar.svelte-ygb1nh {display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));border-bottom:1px solid var(--shell-border, #e2e8f0);cursor:grab;user-select:none;flex-shrink:0;}.dialog-titlebar.svelte-ygb1nh:active {cursor:grabbing;}.dialog-title.svelte-ygb1nh {font:var(--efs-font-title-sm, 600 15px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text-strong, #020617);letter-spacing:0.01em;}.dialog-controls.svelte-ygb1nh {display:flex;gap:6px;align-items:center;}.ctrl-btn.svelte-ygb1nh {width:20px;height:20px;border:none;border-radius:4px;background:transparent;color:var(--shell-muted, #64748b);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background 0.15s, color 0.15s;}.ctrl-btn.svelte-ygb1nh:hover {background:var(--shell-hover-bg, #e2e8f0);color:var(--shell-text-strong, #020617);}.ctrl-btn.close.svelte-ygb1nh:hover {background:var(--efs-state-danger, #dc2626);color:var(--shell-pill-text, #fff);}.dialog-body.svelte-ygb1nh {flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;}.dialog-body.flush.svelte-ygb1nh {padding:0;gap:0;}.dialog-footer.svelte-ygb1nh {display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid var(--shell-border, #e2e8f0);background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));flex-shrink:0;}

  @media (max-width: 47.99rem) {.dialog.svelte-ygb1nh {min-width:0;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);border-radius:10px;}.dialog-titlebar.svelte-ygb1nh {padding:12px;}.dialog-body.svelte-ygb1nh {padding:14px;gap:12px;}.dialog-footer.svelte-ygb1nh {flex-wrap:wrap;padding:12px 14px;}
  }`
};
function Yi(e, t) {
  Xr(t, !0), Ii(e, Jl);
  let r = fe(t, "title", 7), n = fe(t, "open", 15, !1), i = fe(t, "modal", 15, !0), s = fe(t, "defaultWidth", 7, 480), l = fe(t, "defaultHeight", 7, 380), o = fe(t, "defaultX", 7, 120), u = fe(t, "defaultY", 7, 80), a = fe(t, "flushBody", 7, !1), c = fe(t, "onClose", 7), h = fe(t, "children", 7), v = fe(t, "footer", 7), p = /* @__PURE__ */ M(!1), d = /* @__PURE__ */ M(!1), w = /* @__PURE__ */ M(0), k = /* @__PURE__ */ M(0), T = !1;
  function P() {
    if (typeof window > "u")
      return { x: o(), y: u() };
    const _ = window.innerWidth <= 768 ? 8 : 12, Y = Math.max(_, window.innerWidth - s() - _), Xt = Math.max(_, window.innerHeight - l() - _);
    return {
      x: Math.min(Math.max(_, o()), Y),
      y: Math.min(Math.max(_, u()), Xt)
    };
  }
  Hr(() => {
    if (!T) {
      const { x: _, y: Y } = P();
      E(w, _, !0), E(k, Y, !0), T = !0;
    }
  });
  let x = /* @__PURE__ */ M(!1), me = 0, Je = 0;
  Hr(() => {
    n() && (E(p, !1), E(d, !1));
  });
  function Ut(_) {
    g(d) || _.target.closest(".dialog-controls") || (E(x, !0), me = _.clientX - g(w), Je = _.clientY - g(k), window.addEventListener("pointermove", qt), window.addEventListener("pointerup", jt));
  }
  function qt(_) {
    g(x) && (E(w, _.clientX - me), E(k, _.clientY - Je));
  }
  function jt() {
    E(x, !1), window.removeEventListener("pointermove", qt), window.removeEventListener("pointerup", jt);
  }
  function dt(_) {
    _.key === "Escape" && (g(d) ? E(d, !1) : g(p) ? E(p, !1) : c()());
  }
  var wr = {
    get title() {
      return r();
    },
    set title(_) {
      r(_), J();
    },
    get open() {
      return n();
    },
    set open(_ = !1) {
      n(_), J();
    },
    get modal() {
      return i();
    },
    set modal(_ = !0) {
      i(_), J();
    },
    get defaultWidth() {
      return s();
    },
    set defaultWidth(_ = 480) {
      s(_), J();
    },
    get defaultHeight() {
      return l();
    },
    set defaultHeight(_ = 380) {
      l(_), J();
    },
    get defaultX() {
      return o();
    },
    set defaultX(_ = 120) {
      o(_), J();
    },
    get defaultY() {
      return u();
    },
    set defaultY(_ = 80) {
      u(_), J();
    },
    get flushBody() {
      return a();
    },
    set flushBody(_ = !1) {
      a(_), J();
    },
    get onClose() {
      return c();
    },
    set onClose(_) {
      c(_), J();
    },
    get children() {
      return h();
    },
    set children(_) {
      h(_), J();
    },
    get footer() {
      return v();
    },
    set footer(_) {
      v(_), J();
    }
  }, ht = El(), yr = kn(ht);
  {
    var Ae = (_) => {
      var Y = Gl();
      let Xt, an;
      var Kt = F(Y);
      let fn, un;
      var Gt = F(Kt), $r = F(Gt), Bi = F($r, !0);
      I($r);
      var cn = Re($r, 2), Ze = F(cn);
      let dn;
      var hn = F(Ze), Hi = F(hn);
      {
        var Wi = (C) => {
          var B = Bl();
          Mr(), X(C, B);
        }, Vi = (C) => {
          var B = Hl();
          X(C, B);
        };
        ze(Hi, (C) => {
          i() ? C(Wi) : C(Vi, -1);
        });
      }
      I(hn), I(Ze);
      var vt = Re(Ze, 2), vn = F(vt), Ui = F(vn);
      {
        var qi = (C) => {
          var B = Wl();
          X(C, B);
        }, Xi = (C) => {
          var B = Vl();
          X(C, B);
        };
        ze(Ui, (C) => {
          g(p) ? C(qi) : C(Xi, -1);
        });
      }
      I(vn), I(vt);
      var _t = Re(vt, 2), _n = F(_t), Ki = F(_n);
      {
        var Gi = (C) => {
          var B = Ul();
          Mr(), X(C, B);
        }, Ji = (C) => {
          var B = ql();
          X(C, B);
        };
        ze(Ki, (C) => {
          g(d) ? C(Gi) : C(Ji, -1);
        });
      }
      I(_n), I(_t);
      var Zi = Re(_t, 2);
      I(cn), I(Gt);
      var Qi = Re(Gt, 2);
      {
        var es = (C) => {
          var B = Kl(), Jt = kn(B);
          let pn;
          var ts = F(Jt);
          Rn(ts, () => h() ?? Vn), I(Jt);
          var rs = Re(Jt, 2);
          {
            var ns = (xr) => {
              var Er = Xl(), is = F(Er);
              Rn(is, v), I(Er), X(xr, Er);
            };
            ze(rs, (xr) => {
              v() && xr(ns);
            });
          }
          Pt(() => pn = er(Jt, 1, "dialog-body svelte-ygb1nh", null, pn, { flush: a() })), X(C, B);
        };
        ze(Qi, (C) => {
          g(p) || C(es);
        });
      }
      I(Kt), I(Y), Pt(() => {
        Xt = er(Y, 1, "dialog-wrapper svelte-ygb1nh", null, Xt, { "is-modal": i(), minimized: g(p) }), ce(Y, "aria-modal", i() ? "true" : "false"), ce(Y, "aria-label", r()), an = On(Y, "", an, { "pointer-events": i() ? "auto" : "none" }), fn = er(Kt, 1, "dialog svelte-ygb1nh", null, fn, { maximized: g(d) }), un = On(Kt, "", un, {
          left: g(d) ? "0" : g(w) + "px",
          top: g(d) ? "0" : g(k) + "px",
          width: g(d) ? "100%" : s() + "px",
          height: g(d) ? "100%" : l() + "px",
          "pointer-events": "auto"
        }), lr(Bi, r()), dn = er(Ze, 1, "ctrl-btn unprioritize svelte-ygb1nh", null, dn, { active: !i() }), ce(Ze, "title", i() ? "Unprioritize (drop backdrop)" : "Prioritize (show backdrop)"), ce(Ze, "aria-label", i() ? "Unprioritize" : "Prioritize"), ce(vt, "title", g(p) ? "Restore" : "Minimize"), ce(vt, "aria-label", g(p) ? "Restore dialog" : "Minimize dialog"), ce(_t, "title", g(d) ? "Restore" : "Maximize"), ce(_t, "aria-label", g(d) ? "Restore dialog" : "Maximize dialog");
      }), be("click", Y, (C) => {
        i() && C.target === C.currentTarget && c()();
      }), be("keydown", Y, dt), be("pointerdown", Gt, Ut), be("click", Ze, () => {
        i(!i());
      }), be("click", vt, () => {
        E(p, !g(p)), E(d, !1);
      }), be("click", _t, () => {
        E(d, !g(d)), E(p, !1);
      }), be("click", Zi, function(...C) {
        var B;
        (B = c()) == null || B.apply(this, C);
      }), X(_, Y);
    };
    ze(yr, (_) => {
      n() && _(Ae);
    });
  }
  return X(e, ht), Kr(wr);
}
Mi(["click", "keydown", "pointerdown"]);
zi(
  Yi,
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
var Zl = /* @__PURE__ */ Nt('<p class="message svelte-jbjdy7"> </p>'), Ql = /* @__PURE__ */ Nt('<input type="text" class="input-field svelte-jbjdy7"/>'), eo = /* @__PURE__ */ Nt('<div class="prompt-content svelte-jbjdy7"><!> <!> <div class="actions svelte-jbjdy7"><button type="button" class="ghost-button svelte-jbjdy7"> </button> <button type="button" class="pill-button svelte-jbjdy7"> </button></div></div>');
const to = {
  hash: "svelte-jbjdy7",
  code: ".prompt-content.svelte-jbjdy7 {padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem;color:var(--shell-text, #0f172a);}.message.svelte-jbjdy7 {margin:0;font-size:0.875rem;line-height:1.5;color:var(--shell-muted, #64748b);}.input-field.svelte-jbjdy7 {padding:0.5rem 0.75rem;background:var(--shell-input-bg, #ffffff);border:1px solid var(--shell-border, #e2e8f0);border-radius:0.375rem;color:var(--shell-text, #0f172a);font-family:inherit;font-size:0.875rem;transition:border-color 0.15s, box-shadow 0.15s;width:100%;box-sizing:border-box;}.input-field.svelte-jbjdy7:focus {outline:none;border-color:var(--shell-border-strong, #cbd5e1);box-shadow:0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);}.actions.svelte-jbjdy7 {display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;margin-top:0.5rem;}.ghost-button.svelte-jbjdy7 {background:transparent;border:none;color:var(--shell-text, #0f172a);padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.ghost-button.svelte-jbjdy7:hover {background:var(--shell-hover-bg, rgba(0,0,0,0.05));}.pill-button.svelte-jbjdy7 {background:var(--shell-primary, #0f172a);color:var(--shell-primary-text, #ffffff);border:none;padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:opacity 0.15s, transform 0.15s;}.pill-button.svelte-jbjdy7:hover {opacity:0.9;transform:translateY(-1px);}"
};
function ro(e, t) {
  Xr(t, !0), Ii(e, to);
  let r = /* @__PURE__ */ M(!1), n = /* @__PURE__ */ M(""), i = /* @__PURE__ */ M(""), s = /* @__PURE__ */ M("confirm"), l = /* @__PURE__ */ M(""), o = /* @__PURE__ */ M(""), u = /* @__PURE__ */ M("Confirm"), a = /* @__PURE__ */ M("Cancel"), c = /* @__PURE__ */ M(null);
  const h = 400, v = typeof window < "u" ? Math.max(16, window.innerWidth / 2 - h / 2) : 120, p = typeof window < "u" ? Math.max(16, window.innerHeight * 0.3) : 100;
  Cl(() => {
    const T = (P) => {
      const x = P.detail;
      x && (E(n, x.title || "Confirm", !0), E(i, x.message || "", !0), E(s, x.type === "input" ? "input" : "confirm", !0), E(l, x.defaultValue || "", !0), E(o, x.placeholder || "", !0), E(u, x.confirmLabel || "Confirm", !0), E(a, x.cancelLabel || "Cancel", !0), E(c, x.resolve || null, !0), E(r, !0));
    };
    return window.addEventListener("efsdb:prompt", T), () => {
      window.removeEventListener("efsdb:prompt", T);
    };
  });
  function d() {
    g(c) && g(c)(g(s) === "input" ? g(l) : !0), E(r, !1);
  }
  function w() {
    g(c) && g(c)(g(s) === "input" ? null : !1), E(r, !1);
  }
  function k(T) {
    T.key === "Enter" ? (T.preventDefault(), d()) : T.key === "Escape" && w();
  }
  Yi(e, {
    get title() {
      return g(n);
    },
    modal: !0,
    defaultWidth: h,
    defaultHeight: 200,
    get defaultX() {
      return v;
    },
    get defaultY() {
      return p;
    },
    onClose: w,
    get open() {
      return g(r);
    },
    set open(T) {
      E(r, T, !0);
    },
    children: (T, P) => {
      var x = eo(), me = F(x);
      {
        var Je = (Ae) => {
          var _ = Zl(), Y = F(_, !0);
          I(_), Pt(() => lr(Y, g(i))), X(Ae, _);
        };
        ze(me, (Ae) => {
          g(i) && Ae(Je);
        });
      }
      var Ut = Re(me, 2);
      {
        var qt = (Ae) => {
          var _ = Ql();
          Pl(_), ll(_), Pt(() => ce(_, "placeholder", g(o))), be("keydown", _, k), Il(_, () => g(l), (Y) => E(l, Y)), X(Ae, _);
        };
        ze(Ut, (Ae) => {
          g(s) === "input" && Ae(qt);
        });
      }
      var jt = Re(Ut, 2), dt = F(jt), wr = F(dt, !0);
      I(dt);
      var ht = Re(dt, 2), yr = F(ht, !0);
      I(ht), I(jt), I(x), Pt(() => {
        lr(wr, g(a)), lr(yr, g(u));
      }), be("click", dt, w), be("click", ht, d), X(T, x);
    },
    $$slots: { default: !0 }
  }), Kr();
}
Mi(["keydown", "click"]);
customElements.define("efsdb-prompt", zi(ro, {}, [], [], { mode: "open" }));
export {
  ro as default
};
