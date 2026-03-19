var Es = Object.defineProperty;
var Wn = (e) => {
  throw TypeError(e);
};
var $s = (e, t, r) => t in e ? Es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var J = (e, t, r) => $s(e, typeof t != "symbol" ? t + "" : t, r), tn = (e, t, r) => t.has(e) || Wn("Cannot " + r);
var f = (e, t, r) => (tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), N = (e, t, r) => t.has(e) ? Wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (tn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), te = (e, t, r) => (tn(e, t, "access private method"), r);
var oi;
typeof window < "u" && ((oi = window.__svelte ?? (window.__svelte = {})).v ?? (oi.v = /* @__PURE__ */ new Set())).add("5");
const Ts = 1, Ss = 2, fi = 4, Cs = 8, As = 16, Is = 1, Ms = 2, ci = "[", $n = "[!", Yn = "[?", Tn = "]", tr = {}, he = Symbol(), di = "http://www.w3.org/1999/xhtml", Rs = !1;
var vi = Array.isArray, Ns = Array.prototype.indexOf, rr = Array.prototype.includes, Gr = Array.from, Fr = Object.keys, zr = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, hi = Object.getOwnPropertyDescriptors, Os = Object.prototype, Ls = Array.prototype, Sn = Object.getPrototypeOf, Vn = Object.isExtensible;
const Ps = () => {
};
function js(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pi() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const fe = 2, nr = 4, Kr = 8, mi = 1 << 24, Ct = 16, et = 32, $t = 64, on = 128, Ue = 512, le = 1024, we = 2048, at = 4096, Be = 8192, We = 16384, At = 32768, Xn = 1 << 25, ir = 65536, Gn = 1 << 17, Ds = 1 << 18, Ut = 1 << 19, Bs = 1 << 20, it = 1 << 25, qt = 65536, ln = 1 << 21, Cn = 1 << 22, kt = 1 << 23, pr = Symbol("$state"), qs = Symbol("legacy props"), Fs = Symbol(""), ct = new class extends Error {
  constructor() {
    super(...arguments);
    J(this, "name", "StaleReactionError");
    J(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var li;
const gi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((li = globalThis.document) != null && li.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Jr = 3, $r = 8;
function zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Hs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Us(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ws(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ys() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Js() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Zr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ea() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let q = !1;
function gt(e) {
  q = e;
}
let P;
function Ae(e) {
  if (e === null)
    throw Zr(), tr;
  return P = e;
}
function Qr() {
  return Ae(/* @__PURE__ */ lt(P));
}
function S(e) {
  if (q) {
    if (/* @__PURE__ */ lt(P) !== null)
      throw Zr(), tr;
    P = e;
  }
}
function ta(e = 1) {
  if (q) {
    for (var t = e, r = P; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ lt(r);
    P = r;
  }
}
function Hr(e = !0) {
  for (var t = 0, r = P; ; ) {
    if (r.nodeType === $r) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Tn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === ci || n === $n || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(r)
    );
    e && r.remove(), r = i;
  }
}
function _i(e) {
  if (!e || e.nodeType !== $r)
    throw Zr(), tr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function bi(e) {
  return e === this.v;
}
function wi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xi(e) {
  return !wi(e, this.v);
}
let ra = !1, qe = null;
function sr(e) {
  qe = e;
}
function ur(e, t = !1, r) {
  qe = {
    p: qe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      j
    ),
    l: null
  };
}
function fr(e) {
  var t = (
    /** @type {ComponentContext} */
    qe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Xi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, qe = t.p, e ?? /** @type {T} */
  {};
}
function yi() {
  return !0;
}
let Mt = [];
function ki() {
  var e = Mt;
  Mt = [], js(e);
}
function _t(e) {
  if (Mt.length === 0 && !mr) {
    var t = Mt;
    queueMicrotask(() => {
      t === Mt && ki();
    });
  }
  Mt.push(e);
}
function na() {
  for (; Mt.length > 0; )
    ki();
}
function Ei(e) {
  var t = j;
  if (t === null)
    return O.f |= kt, e;
  if ((t.f & At) === 0 && (t.f & nr) === 0)
    throw e;
  xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if ((t.f & on) !== 0) {
      if ((t.f & At) === 0)
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
const ia = -7169;
function ae(e, t) {
  e.f = e.f & ia | t;
}
function An(e) {
  (e.f & Ue) !== 0 || e.deps === null ? ae(e, le) : ae(e, at);
}
function $i(e) {
  if (e !== null)
    for (const t of e)
      (t.f & fe) === 0 || (t.f & qt) === 0 || (t.f ^= qt, $i(
        /** @type {Derived} */
        t.deps
      ));
}
function Ti(e, t, r) {
  (e.f & we) !== 0 ? t.add(e) : (e.f & at) !== 0 && r.add(e), $i(e.deps), ae(e, le);
}
const It = /* @__PURE__ */ new Set();
let L = null, pe = null, un = null, mr = !1, rn = !1, Yt = null, Pr = null;
var Kn = 0;
let sa = 1;
var Gt, Kt, Jt, Zt, br, Oe, Ot, dt, vt, Qt, xe, fn, cn, dn, vn, Si;
const Yr = class Yr {
  constructor() {
    N(this, xe);
    // for debugging. TODO remove once async is stable
    J(this, "id", sa++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    J(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    J(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Kt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    N(this, Jt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    N(this, Zt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, br, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, Oe, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, dt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, vt, /* @__PURE__ */ new Map());
    J(this, "is_fork", !1);
    N(this, Qt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, vt).has(t) || f(this, vt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, vt).get(t);
    if (r) {
      f(this, vt).delete(t);
      for (var n of r.d)
        ae(n, we), this.schedule(n);
      for (n of r.m)
        ae(n, at), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== he && !this.previous.has(t) && this.previous.set(t, r), (t.f & kt) === 0 && (this.current.set(t, t.v), pe == null || pe.set(t, t.v));
  }
  activate() {
    L = this;
  }
  deactivate() {
    L = null, pe = null;
  }
  flush() {
    try {
      rn = !0, L = this, te(this, xe, cn).call(this);
    } finally {
      Kn = 0, un = null, Yt = null, Pr = null, rn = !1, L = null, pe = null, Et.clear();
    }
  }
  discard() {
    for (const t of f(this, Kt)) t(this);
    f(this, Kt).clear(), It.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    A(this, Jt, f(this, Jt) + 1), t && A(this, Zt, f(this, Zt) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    A(this, Jt, f(this, Jt) - 1), t && A(this, Zt, f(this, Zt) - 1), !(f(this, Qt) || r) && (A(this, Qt, !0), _t(() => {
      A(this, Qt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, Ot).add(n);
    for (const n of r)
      f(this, dt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, Gt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Kt).add(t);
  }
  settled() {
    return (f(this, br) ?? A(this, br, pi())).promise;
  }
  static ensure() {
    if (L === null) {
      const t = L = new Yr();
      rn || (It.add(L), mr || _t(() => {
        L === t && t.flush();
      }));
    }
    return L;
  }
  apply() {
    {
      pe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (un = t, (i = t.b) != null && i.is_pending && (t.f & (nr | Kr | mi)) !== 0 && (t.f & At) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Yt !== null && r === j && (O === null || (O.f & fe) === 0))
        return;
      if ((n & ($t | et)) !== 0) {
        if ((n & le) === 0)
          return;
        r.f ^= le;
      }
    }
    f(this, Oe).push(r);
  }
};
Gt = new WeakMap(), Kt = new WeakMap(), Jt = new WeakMap(), Zt = new WeakMap(), br = new WeakMap(), Oe = new WeakMap(), Ot = new WeakMap(), dt = new WeakMap(), vt = new WeakMap(), Qt = new WeakMap(), xe = new WeakSet(), fn = function() {
  return this.is_fork || f(this, Zt) > 0;
}, cn = function() {
  var o, l;
  if (Kn++ > 1e3 && (It.delete(this), aa()), !te(this, xe, fn).call(this)) {
    for (const u of f(this, Ot))
      f(this, dt).delete(u), ae(u, we), this.schedule(u);
    for (const u of f(this, dt))
      ae(u, at), this.schedule(u);
  }
  const t = f(this, Oe);
  A(this, Oe, []), this.apply();
  var r = Yt = [], n = [], i = Pr = [];
  for (const u of t)
    try {
      te(this, xe, dn).call(this, u, r, n);
    } catch (d) {
      throw Mi(u), d;
    }
  if (L = null, i.length > 0) {
    var s = Yr.ensure();
    for (const u of i)
      s.schedule(u);
  }
  if (Yt = null, Pr = null, te(this, xe, fn).call(this)) {
    te(this, xe, vn).call(this, n), te(this, xe, vn).call(this, r);
    for (const [u, d] of f(this, vt))
      Ii(u, d);
  } else {
    f(this, Jt) === 0 && It.delete(this), f(this, Ot).clear(), f(this, dt).clear();
    for (const u of f(this, Gt)) u(this);
    f(this, Gt).clear(), Jn(n), Jn(r), (o = f(this, br)) == null || o.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    L
  );
  if (f(this, Oe).length > 0) {
    const u = a ?? (a = this);
    f(u, Oe).push(...f(this, Oe).filter((d) => !f(u, Oe).includes(d)));
  }
  a !== null && (It.add(a), te(l = a, xe, cn).call(l)), It.has(this) || te(this, xe, Si).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
dn = function(t, r, n) {
  t.f ^= le;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (et | $t)) !== 0, o = a && (s & le) !== 0, l = o || (s & Be) !== 0 || f(this, vt).has(i);
    if (!l && i.fn !== null) {
      a ? i.f ^= le : (s & nr) !== 0 ? r.push(i) : Sr(i) && ((s & Ct) !== 0 && f(this, dt).add(i), or(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
vn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ti(t[r], f(this, Ot), f(this, dt));
}, Si = function() {
  var l;
  for (const u of It) {
    var t = u.id < this.id, r = [];
    for (const [d, h] of this.current) {
      if (u.current.has(d))
        if (t && h !== u.current.get(d))
          u.current.set(d, h);
        else
          continue;
      r.push(d);
    }
    var n = [...u.current.keys()].filter((d) => !this.current.has(d));
    if (n.length === 0)
      t && u.discard();
    else if (r.length > 0) {
      u.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var a of r)
        Ci(a, n, i, s);
      if (f(u, Oe).length > 0) {
        u.apply();
        for (var o of f(u, Oe))
          te(l = u, xe, dn).call(l, o, [], []);
        A(u, Oe, []);
      }
      u.deactivate();
    }
  }
};
let Tt = Yr;
function Z(e) {
  var t = mr;
  mr = !0;
  try {
    for (var r; ; ) {
      if (na(), L === null)
        return (
          /** @type {T} */
          r
        );
      L.flush();
    }
  } finally {
    mr = t;
  }
}
function aa() {
  try {
    Xs();
  } catch (e) {
    xt(e, un);
  }
}
let Ke = null;
function Jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (We | Be)) === 0 && Sr(n) && (Ke = /* @__PURE__ */ new Set(), or(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ji(n), (Ke == null ? void 0 : Ke.size) > 0)) {
        Et.clear();
        for (const i of Ke) {
          if ((i.f & (We | Be)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Ke.has(a) && (Ke.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (We | Be)) === 0 && or(l);
          }
        }
        Ke.clear();
      }
    }
    Ke = null;
  }
}
function Ci(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & fe) !== 0 ? Ci(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Cn | Ct)) !== 0 && (s & we) === 0 && Ai(i, t, n) && (ae(i, we), In(
        /** @type {Effect} */
        i
      ));
    }
}
function Ai(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (rr.call(t, i))
        return !0;
      if ((i.f & fe) !== 0 && Ai(
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
function In(e) {
  L.schedule(e);
}
function Ii(e, t) {
  if (!((e.f & et) !== 0 && (e.f & le) !== 0)) {
    (e.f & we) !== 0 ? t.d.push(e) : (e.f & at) !== 0 && t.m.push(e), ae(e, le);
    for (var r = e.first; r !== null; )
      Ii(r, t), r = r.next;
  }
}
function Mi(e) {
  ae(e, le);
  for (var t = e.first; t !== null; )
    Mi(t), t = t.next;
}
function oa(e) {
  let t = 0, r = Ft(0), n;
  return () => {
    Ln() && (c(r), Pn(() => (t === 0 && (n = Fn(() => e(() => gr(r)))), t += 1, () => {
      _t(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, gr(r));
      });
    })));
  };
}
var la = ir | Ut;
function ua(e, t, r, n) {
  new fa(e, t, r, n);
}
var Le, wr, tt, Lt, Se, rt, Pe, Je, ht, Pt, wt, er, xr, yr, pt, Vr, ne, Ri, Ni, Oi, hn, jr, Dr, pn;
class fa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    N(this, ne);
    /** @type {Boundary | null} */
    J(this, "parent");
    J(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    J(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, Le);
    /** @type {TemplateNode | null} */
    N(this, wr, q ? P : null);
    /** @type {BoundaryProps} */
    N(this, tt);
    /** @type {((anchor: Node) => void)} */
    N(this, Lt);
    /** @type {Effect} */
    N(this, Se);
    /** @type {Effect | null} */
    N(this, rt, null);
    /** @type {Effect | null} */
    N(this, Pe, null);
    /** @type {Effect | null} */
    N(this, Je, null);
    /** @type {DocumentFragment | null} */
    N(this, ht, null);
    N(this, Pt, 0);
    N(this, wt, 0);
    N(this, er, !1);
    /** @type {Set<Effect>} */
    N(this, xr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, yr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, pt, null);
    N(this, Vr, oa(() => (A(this, pt, Ft(f(this, Pt))), () => {
      A(this, pt, null);
    })));
    var s;
    A(this, Le, t), A(this, tt, r), A(this, Lt, (a) => {
      var o = (
        /** @type {Effect} */
        j
      );
      o.b = this, o.f |= on, n(a);
    }), this.parent = /** @type {Effect} */
    j.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), A(this, Se, jn(() => {
      if (q) {
        const a = (
          /** @type {Comment} */
          f(this, wr)
        );
        Qr();
        const o = a.data === $n;
        if (a.data.startsWith(Yn)) {
          const u = JSON.parse(a.data.slice(Yn.length));
          te(this, ne, Ni).call(this, u);
        } else o ? te(this, ne, Oi).call(this) : te(this, ne, Ri).call(this);
      } else
        te(this, ne, hn).call(this);
    }, la)), q && A(this, Le, P);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ti(t, f(this, xr), f(this, yr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, tt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    te(this, ne, pn).call(this, t, r), A(this, Pt, f(this, Pt) + t), !(!f(this, pt) || f(this, er)) && (A(this, er, !0), _t(() => {
      A(this, er, !1), f(this, pt) && ar(f(this, pt), f(this, Pt));
    }));
  }
  get_effect_pending() {
    return f(this, Vr).call(this), c(
      /** @type {Source<number>} */
      f(this, pt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, tt).onerror;
    let n = f(this, tt).failed;
    if (!r && !n)
      throw t;
    f(this, rt) && (Ee(f(this, rt)), A(this, rt, null)), f(this, Pe) && (Ee(f(this, Pe)), A(this, Pe, null)), f(this, Je) && (Ee(f(this, Je)), A(this, Je, null)), q && (Ae(
      /** @type {TemplateNode} */
      f(this, wr)
    ), ta(), Ae(Hr()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        ea();
        return;
      }
      i = !0, s && Qs(), f(this, Je) !== null && Dt(f(this, Je), () => {
        A(this, Je, null);
      }), te(this, ne, Dr).call(this, () => {
        te(this, ne, hn).call(this);
      });
    }, o = (l) => {
      try {
        s = !0, r == null || r(l, a), s = !1;
      } catch (u) {
        xt(u, f(this, Se) && f(this, Se).parent);
      }
      n && A(this, Je, te(this, ne, Dr).call(this, () => {
        try {
          return He(() => {
            var u = (
              /** @type {Effect} */
              j
            );
            u.b = this, u.f |= on, n(
              f(this, Le),
              () => l,
              () => a
            );
          });
        } catch (u) {
          return xt(
            u,
            /** @type {Effect} */
            f(this, Se).parent
          ), null;
        }
      }));
    };
    _t(() => {
      var l;
      try {
        l = this.transform_error(t);
      } catch (u) {
        xt(u, f(this, Se) && f(this, Se).parent);
        return;
      }
      l !== null && typeof l == "object" && typeof /** @type {any} */
      l.then == "function" ? l.then(
        o,
        /** @param {unknown} e */
        (u) => xt(u, f(this, Se) && f(this, Se).parent)
      ) : o(l);
    });
  }
}
Le = new WeakMap(), wr = new WeakMap(), tt = new WeakMap(), Lt = new WeakMap(), Se = new WeakMap(), rt = new WeakMap(), Pe = new WeakMap(), Je = new WeakMap(), ht = new WeakMap(), Pt = new WeakMap(), wt = new WeakMap(), er = new WeakMap(), xr = new WeakMap(), yr = new WeakMap(), pt = new WeakMap(), Vr = new WeakMap(), ne = new WeakSet(), Ri = function() {
  try {
    A(this, rt, He(() => f(this, Lt).call(this, f(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ni = function(t) {
  const r = f(this, tt).failed;
  r && A(this, Je, He(() => {
    r(
      f(this, Le),
      () => t,
      () => () => {
      }
    );
  }));
}, Oi = function() {
  const t = f(this, tt).pending;
  t && (this.is_pending = !0, A(this, Pe, He(() => t(f(this, Le)))), _t(() => {
    var r = A(this, ht, document.createDocumentFragment()), n = Ye();
    r.append(n), A(this, rt, te(this, ne, Dr).call(this, () => He(() => f(this, Lt).call(this, n)))), f(this, wt) === 0 && (f(this, Le).before(r), A(this, ht, null), Dt(
      /** @type {Effect} */
      f(this, Pe),
      () => {
        A(this, Pe, null);
      }
    ), te(this, ne, jr).call(
      this,
      /** @type {Batch} */
      L
    ));
  }));
}, hn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, wt, 0), A(this, Pt, 0), A(this, rt, He(() => {
      f(this, Lt).call(this, f(this, Le));
    })), f(this, wt) > 0) {
      var t = A(this, ht, document.createDocumentFragment());
      qn(f(this, rt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, tt).pending
      );
      A(this, Pe, He(() => r(f(this, Le))));
    } else
      te(this, ne, jr).call(
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
jr = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, xr), f(this, yr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Dr = function(t) {
  var r = j, n = O, i = qe;
  ot(f(this, Se)), Xe(f(this, Se)), sr(f(this, Se).ctx);
  try {
    return Tt.ensure(), t();
  } catch (s) {
    return Ei(s), null;
  } finally {
    ot(r), Xe(n), sr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
pn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && te(n = this.parent, ne, pn).call(n, t, r);
    return;
  }
  A(this, wt, f(this, wt) + t), f(this, wt) === 0 && (te(this, ne, jr).call(this, r), f(this, Pe) && Dt(f(this, Pe), () => {
    A(this, Pe, null);
  }), f(this, ht) && (f(this, Le).before(f(this, ht)), A(this, ht, null)));
};
function ca(e, t, r, n) {
  const i = en;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    j
  ), o = da(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (b) {
      (a.f & We) === 0 && xt(b, a);
    }
    Ur();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(i)));
    return;
  }
  var d = Li();
  function h() {
    Promise.all(r.map((v) => /* @__PURE__ */ va(v))).then((v) => u([...t.map(i), ...v])).catch((v) => xt(v, a)).finally(() => d());
  }
  l ? l.then(() => {
    o(), h(), Ur();
  }) : h();
}
function da() {
  var e = (
    /** @type {Effect} */
    j
  ), t = O, r = qe, n = (
    /** @type {Batch} */
    L
  );
  return function(s = !0) {
    ot(e), Xe(t), sr(r), s && (e.f & We) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Ur(e = !0) {
  ot(null), Xe(null), sr(null), e && (L == null || L.deactivate());
}
function Li() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    j.b
  ), t = (
    /** @type {Batch} */
    L
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  var t = fe | we, r = O !== null && (O.f & fe) !== 0 ? (
    /** @type {Derived} */
    O
  ) : null;
  return j !== null && (j.f |= Ut), {
    ctx: qe,
    deps: null,
    effects: null,
    equals: bi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: r ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function va(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    j
  );
  n === null && Hs();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ft(
    /** @type {V} */
    he
  ), a = !O, o = /* @__PURE__ */ new Map();
  return Ea(() => {
    var b;
    var l = (
      /** @type {Effect} */
      j
    ), u = pi();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Ur);
    } catch (g) {
      u.reject(g), Ur();
    }
    var d = (
      /** @type {Batch} */
      L
    );
    if (a) {
      if ((l.f & At) !== 0)
        var h = Li();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (b = o.get(d)) == null || b.reject(ct), o.delete(d);
      else {
        for (const g of o.values())
          g.reject(ct);
        o.clear();
      }
      o.set(d, u);
    }
    const v = (g, E = void 0) => {
      if (h) {
        var p = E === ct;
        h(p);
      }
      if (!(E === ct || (l.f & We) !== 0)) {
        if (d.activate(), E)
          s.f |= kt, ar(s, E);
        else {
          (s.f & kt) !== 0 && (s.f ^= kt), ar(s, g);
          for (const [y, T] of o) {
            if (o.delete(y), y === d) break;
            T.reject(ct);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (g) => v(null, g || "unknown"));
  }), Yi(() => {
    for (const l of o.values())
      l.reject(ct);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(s) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = /* @__PURE__ */ en(e);
  return es(t), t;
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  const t = /* @__PURE__ */ en(e);
  return t.equals = xi, t;
}
function pa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ee(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ma(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & fe) === 0)
      return (t.f & We) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Mn(e) {
  var t, r = j;
  ot(ma(e));
  try {
    e.f &= ~qt, pa(e), t = is(e);
  } finally {
    ot(r);
  }
  return t;
}
function Pi(e) {
  var t = e.v, r = Mn(e);
  if (!e.equals(r) && (e.wv = rs(), (!(L != null && L.is_fork) || e.deps === null) && (e.v = r, L == null || L.capture(e, t), e.deps === null))) {
    ae(e, le);
    return;
  }
  St || (pe !== null ? (Ln() || L != null && L.is_fork) && pe.set(e, r) : An(e));
}
function ga(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(ct), n.teardown = Ps, n.ac = null, _r(n, 0), Dn(n));
}
function ji(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && or(t);
}
let mn = /* @__PURE__ */ new Set();
const Et = /* @__PURE__ */ new Map();
let Di = !1;
function Ft(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  const r = Ft(e);
  return es(r), r;
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t = !1, r = !0) {
  const n = Ft(e);
  return t || (n.equals = xi), n;
}
function k(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Qe || (O.f & Gn) !== 0) && yi() && (O.f & (fe | Ct | Cn | Gn)) !== 0 && (Ve === null || !rr.call(Ve, e)) && Zs();
  let n = r ? yt(t) : t;
  return ar(e, n, Pr);
}
function ar(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    St ? Et.set(e, t) : Et.set(e, n), e.v = t;
    var i = Tt.ensure();
    if (i.capture(e, n), (e.f & fe) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & we) !== 0 && Mn(s), pe === null && An(s);
    }
    e.wv = rs(), qi(e, we, r), j !== null && (j.f & le) !== 0 && (j.f & (et | $t)) === 0 && (Fe === null ? Sa([e]) : Fe.push(e)), !i.is_fork && mn.size > 0 && !Di && _a();
  }
  return t;
}
function _a() {
  Di = !1;
  for (const e of mn)
    (e.f & le) !== 0 && ae(e, at), Sr(e) && or(e);
  mn.clear();
}
function gr(e) {
  k(e, e.v + 1);
}
function qi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, l = (o & we) === 0;
      if (l && ae(a, t), (o & fe) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        pe == null || pe.delete(u), (o & qt) === 0 && (o & Ue && (a.f |= qt), qi(u, at, r));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          a
        );
        (o & Ct) !== 0 && Ke !== null && Ke.add(d), r !== null ? r.push(d) : In(d);
      }
    }
}
function yt(e) {
  if (typeof e != "object" || e === null || pr in e)
    return e;
  const t = Sn(e);
  if (t !== Os && t !== Ls)
    return e;
  var r = /* @__PURE__ */ new Map(), n = vi(e), i = /* @__PURE__ */ Q(0), s = Bt, a = (o) => {
    if (Bt === s)
      return o();
    var l = O, u = Bt;
    Xe(null), ti(s);
    var d = o();
    return Xe(l), ti(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ks();
        var d = r.get(l);
        return d === void 0 ? a(() => {
          var h = /* @__PURE__ */ Q(u.value);
          return r.set(l, h), h;
        }) : k(d, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ Q(he));
            r.set(l, d), gr(i);
          }
        } else
          k(u, he), gr(i);
        return !0;
      },
      get(o, l, u) {
        var b;
        if (l === pr)
          return e;
        var d = r.get(l), h = l in o;
        if (d === void 0 && (!h || (b = Vt(o, l)) != null && b.writable) && (d = a(() => {
          var g = yt(h ? o[l] : he), E = /* @__PURE__ */ Q(g);
          return E;
        }), r.set(l, d)), d !== void 0) {
          var v = c(d);
          return v === he ? void 0 : v;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = r.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var v;
        if (l === pr)
          return !0;
        var u = r.get(l), d = u !== void 0 && u.v !== he || Reflect.has(o, l);
        if (u !== void 0 || j !== null && (!d || (v = Vt(o, l)) != null && v.writable)) {
          u === void 0 && (u = a(() => {
            var b = d ? yt(o[l]) : he, g = /* @__PURE__ */ Q(b);
            return g;
          }), r.set(l, u));
          var h = c(u);
          if (h === he)
            return !1;
        }
        return d;
      },
      set(o, l, u, d) {
        var C;
        var h = r.get(l), v = l in o;
        if (n && l === "length")
          for (var b = u; b < /** @type {Source<number>} */
          h.v; b += 1) {
            var g = r.get(b + "");
            g !== void 0 ? k(g, he) : b in o && (g = a(() => /* @__PURE__ */ Q(he)), r.set(b + "", g));
          }
        if (h === void 0)
          (!v || (C = Vt(o, l)) != null && C.writable) && (h = a(() => /* @__PURE__ */ Q(void 0)), k(h, yt(u)), r.set(l, h));
        else {
          v = h.v !== he;
          var E = a(() => yt(u));
          k(h, E);
        }
        var p = Reflect.getOwnPropertyDescriptor(o, l);
        if (p != null && p.set && p.set.call(d, u), !v) {
          if (n && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= y.v && k(y, T + 1);
          }
          gr(i);
        }
        return !0;
      },
      ownKeys(o) {
        c(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== he;
        });
        for (var [u, d] of r)
          d.v !== he && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Js();
      }
    }
  );
}
var Zn, Fi, zi, Hi;
function gn() {
  if (Zn === void 0) {
    Zn = window, Fi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    zi = Vt(t, "firstChild").get, Hi = Vt(t, "nextSibling").get, Vn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Vn(r) && (r.__t = void 0);
  }
}
function Ye(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return (
    /** @type {TemplateNode | null} */
    zi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return (
    /** @type {TemplateNode | null} */
    Hi.call(e)
  );
}
function I(e, t) {
  if (!q)
    return /* @__PURE__ */ zt(e);
  var r = /* @__PURE__ */ zt(P);
  if (r === null)
    r = P.appendChild(Ye());
  else if (t && r.nodeType !== Jr) {
    var n = Ye();
    return r == null || r.before(n), Ae(n), n;
  }
  return t && Nn(
    /** @type {Text} */
    r
  ), Ae(r), r;
}
function Tr(e, t = !1) {
  if (!q) {
    var r = /* @__PURE__ */ zt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ lt(r) : r;
  }
  if (t) {
    if ((P == null ? void 0 : P.nodeType) !== Jr) {
      var n = Ye();
      return P == null || P.before(n), Ae(n), n;
    }
    Nn(
      /** @type {Text} */
      P
    );
  }
  return P;
}
function Y(e, t = 1, r = !1) {
  let n = q ? P : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ lt(n);
  if (!q)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Jr) {
      var s = Ye();
      return n === null ? i == null || i.after(s) : n.before(s), Ae(s), s;
    }
    Nn(
      /** @type {Text} */
      n
    );
  }
  return Ae(n), n;
}
function Ui(e) {
  e.textContent = "";
}
function Wi() {
  return !1;
}
function Rn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(di, e, void 0)
  );
}
function Nn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Jr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let Qn = !1;
function ba() {
  Qn || (Qn = !0, document.addEventListener(
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
function On(e) {
  var t = O, r = j;
  Xe(null), ot(null);
  try {
    return e();
  } finally {
    Xe(t), ot(r);
  }
}
function wa(e) {
  j === null && (O === null && Vs(), Ys()), St && Ws();
}
function xa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ut(e, t) {
  var r = j;
  r !== null && (r.f & Be) !== 0 && (e |= Be);
  var n = {
    ctx: qe,
    deps: null,
    nodes: null,
    f: e | we | Ue,
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
  if ((e & nr) !== 0)
    Yt !== null ? Yt.push(n) : Tt.ensure().schedule(n);
  else if (t !== null) {
    try {
      or(n);
    } catch (a) {
      throw Ee(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ut) === 0 && (i = i.first, (e & Ct) !== 0 && (e & ir) !== 0 && i !== null && (i.f |= ir));
  }
  if (i !== null && (i.parent = r, r !== null && xa(i, r), O !== null && (O.f & fe) !== 0 && (e & $t) === 0)) {
    var s = (
      /** @type {Derived} */
      O
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Ln() {
  return O !== null && !Qe;
}
function Yi(e) {
  const t = ut(Kr, null);
  return ae(t, le), t.teardown = e, t;
}
function Vi(e) {
  wa();
  var t = (
    /** @type {Effect} */
    j.f
  ), r = !O && (t & et) !== 0 && (t & At) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      qe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Xi(e);
}
function Xi(e) {
  return ut(nr | Bs, e);
}
function ya(e) {
  Tt.ensure();
  const t = ut($t | Ut, e);
  return () => {
    Ee(t);
  };
}
function ka(e) {
  Tt.ensure();
  const t = ut($t | Ut, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Dt(t, () => {
      Ee(t), n(void 0);
    }) : (Ee(t), n(void 0));
  });
}
function Gi(e) {
  return ut(nr, e);
}
function Ea(e) {
  return ut(Cn | Ut, e);
}
function Pn(e, t = 0) {
  return ut(Kr | t, e);
}
function ke(e, t = [], r = [], n = []) {
  ca(n, t, r, (i) => {
    ut(Kr, () => e(...i.map(c)));
  });
}
function jn(e, t = 0) {
  var r = ut(Ct | t, e);
  return r;
}
function He(e) {
  return ut(et | Ut, e);
}
function Ki(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = St, n = O;
    ei(!0), Xe(null);
    try {
      t.call(null);
    } finally {
      ei(r), Xe(n);
    }
  }
}
function Dn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && On(() => {
      i.abort(ct);
    });
    var n = r.next;
    (r.f & $t) !== 0 ? r.parent = null : Ee(r, t), r = n;
  }
}
function $a(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & et) === 0 && Ee(t), t = r;
  }
}
function Ee(e, t = !0) {
  var r = !1;
  (t || (e.f & Ds) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ta(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ae(e, Xn), Dn(e, t && !r), _r(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Ki(e), e.f ^= Xn, e.f |= We;
  var i = e.parent;
  i !== null && i.first !== null && Ji(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Ta(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ lt(e);
    e.remove(), e = r;
  }
}
function Ji(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Dt(e, t, r = !0) {
  var n = [];
  Zi(e, n, !0);
  var i = () => {
    r && Ee(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function Zi(e, t, r) {
  if ((e.f & Be) === 0) {
    e.f ^= Be;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & ir) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & et) !== 0 && (e.f & Ct) !== 0;
      Zi(i, t, a ? r : !1), i = s;
    }
  }
}
function Bn(e) {
  Qi(e, !0);
}
function Qi(e, t) {
  if ((e.f & Be) !== 0) {
    e.f ^= Be, (e.f & le) === 0 && (ae(e, we), Tt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & ir) !== 0 || (r.f & et) !== 0;
      Qi(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function qn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ lt(r);
      t.append(r), r = i;
    }
}
let Br = !1, St = !1;
function ei(e) {
  St = e;
}
let O = null, Qe = !1;
function Xe(e) {
  O = e;
}
let j = null;
function ot(e) {
  j = e;
}
let Ve = null;
function es(e) {
  O !== null && (Ve === null ? Ve = [e] : Ve.push(e));
}
let Ce = null, Ne = 0, Fe = null;
function Sa(e) {
  Fe = e;
}
let ts = 1, Rt = 0, Bt = Rt;
function ti(e) {
  Bt = e;
}
function rs() {
  return ++ts;
}
function Sr(e) {
  var t = e.f;
  if ((t & we) !== 0)
    return !0;
  if (t & fe && (e.f &= ~qt), (t & at) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Sr(
        /** @type {Derived} */
        s
      ) && Pi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    pe === null && ae(e, le);
  }
  return !1;
}
function ns(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ve !== null && rr.call(Ve, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & fe) !== 0 ? ns(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? ae(s, we) : (s.f & le) !== 0 && ae(s, at), In(
        /** @type {Effect} */
        s
      ));
    }
}
function is(e) {
  var E;
  var t = Ce, r = Ne, n = Fe, i = O, s = Ve, a = qe, o = Qe, l = Bt, u = e.f;
  Ce = /** @type {null | Value[]} */
  null, Ne = 0, Fe = null, O = (u & (et | $t)) === 0 ? e : null, Ve = null, sr(e.ctx), Qe = !1, Bt = ++Rt, e.ac !== null && (On(() => {
    e.ac.abort(ct);
  }), e.ac = null);
  try {
    e.f |= ln;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d();
    e.f |= At;
    var v = e.deps, b = L == null ? void 0 : L.is_fork;
    if (Ce !== null) {
      var g;
      if (b || _r(e, Ne), v !== null && Ne > 0)
        for (v.length = Ne + Ce.length, g = 0; g < Ce.length; g++)
          v[Ne + g] = Ce[g];
      else
        e.deps = v = Ce;
      if (Ln() && (e.f & Ue) !== 0)
        for (g = Ne; g < v.length; g++)
          ((E = v[g]).reactions ?? (E.reactions = [])).push(e);
    } else !b && v !== null && Ne < v.length && (_r(e, Ne), v.length = Ne);
    if (yi() && Fe !== null && !Qe && v !== null && (e.f & (fe | at | we)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Fe.length; g++)
        ns(
          Fe[g],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Rt++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = Rt;
      if (t !== null)
        for (const p of t)
          p.rv = Rt;
      Fe !== null && (n === null ? n = Fe : n.push(.../** @type {Source[]} */
      Fe));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), h;
  } catch (p) {
    return Ei(p);
  } finally {
    e.f ^= ln, Ce = t, Ne = r, Fe = n, O = i, Ve = s, sr(a), Qe = o, Bt = l;
  }
}
function Ca(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ns.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !rr.call(Ce, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ue) !== 0 && (s.f ^= Ue, s.f &= ~qt), An(s), ga(s), _r(s, 0);
  }
}
function _r(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ca(e, r[n]);
}
function or(e) {
  var t = e.f;
  if ((t & We) === 0) {
    ae(e, le);
    var r = j, n = Br;
    j = e, Br = !0;
    try {
      (t & (Ct | mi)) !== 0 ? $a(e) : Dn(e), Ki(e);
      var i = is(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ts;
      var s;
      Rs && ra && (e.f & we) !== 0 && e.deps;
    } finally {
      Br = n, j = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & fe) !== 0;
  if (O !== null && !Qe) {
    var n = j !== null && (j.f & We) !== 0;
    if (!n && (Ve === null || !rr.call(Ve, e))) {
      var i = O.deps;
      if ((O.f & ln) !== 0)
        e.rv < Rt && (e.rv = Rt, Ce === null && i !== null && i[Ne] === e ? Ne++ : Ce === null ? Ce = [e] : Ce.push(e));
      else {
        (O.deps ?? (O.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [O] : rr.call(s, O) || s.push(O);
      }
    }
  }
  if (St && Et.has(e))
    return Et.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (St) {
      var o = a.v;
      return ((a.f & le) === 0 && a.reactions !== null || as(a)) && (o = Mn(a)), Et.set(a, o), o;
    }
    var l = (a.f & Ue) === 0 && !Qe && O !== null && (Br || (O.f & Ue) !== 0), u = (a.f & At) === 0;
    Sr(a) && (l && (a.f |= Ue), Pi(a)), l && !u && (ji(a), ss(a));
  }
  if (pe != null && pe.has(e))
    return pe.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
function ss(e) {
  if (e.f |= Ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & fe) !== 0 && (t.f & Ue) === 0 && (ji(
        /** @type {Derived} */
        t
      ), ss(
        /** @type {Derived} */
        t
      ));
}
function as(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Et.has(t) || (t.f & fe) !== 0 && as(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Fn(e) {
  var t = Qe;
  try {
    return Qe = !0, e();
  } finally {
    Qe = t;
  }
}
function Aa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (pr in e)
      _n(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && pr in r && _n(r);
      }
  }
}
function _n(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        _n(e[n], t);
      } catch {
      }
    const r = Sn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = hi(r);
      for (let i in n) {
        const s = n[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
const Nt = Symbol("events"), os = /* @__PURE__ */ new Set(), bn = /* @__PURE__ */ new Set();
function Ia(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || wn.call(t, s), !s.cancelBubble)
      return On(() => r == null ? void 0 : r.call(this, s));
  }
  return _t(() => {
    t.addEventListener(e, i, n);
  }), i;
}
function Ma(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = Ia(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Yi(() => {
    t.removeEventListener(e, a, s);
  });
}
function De(e, t, r) {
  (t[Nt] ?? (t[Nt] = {}))[e] = r;
}
function Cr(e) {
  for (var t = 0; t < e.length; t++)
    os.add(e[t]);
  for (var r of bn)
    r(e);
}
let ri = null;
function wn(e) {
  var p, y;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ri = e;
  var a = 0, o = ri === e && e[Nt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Nt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    zr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = O, h = j;
    Xe(null), ot(null);
    try {
      for (var v, b = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var E = (y = s[Nt]) == null ? void 0 : y[n];
          E != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && E.call(s, e);
        } catch (T) {
          v ? b.push(T) : v = T;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (v) {
        for (let T of b)
          queueMicrotask(() => {
            throw T;
          });
        throw v;
      }
    } finally {
      e[Nt] = t, delete e.currentTarget, Xe(d), ot(h);
    }
  }
}
var ui;
const nn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((ui = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ui.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ra(e) {
  return (
    /** @type {string} */
    (nn == null ? void 0 : nn.createHTML(e)) ?? e
  );
}
function Na(e) {
  var t = Rn("template");
  return t.innerHTML = Ra(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xt(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Is) !== 0, n = (t & Ms) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (q)
      return Xt(P, null), P;
    i === void 0 && (i = Na(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ zt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Fi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Xt(o, l);
    } else
      Xt(a, a);
    return a;
  };
}
function ls() {
  if (q)
    return Xt(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ye();
  return e.append(t, r), Xt(t, r), e;
}
function z(e, t) {
  if (q) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((r.f & At) === 0 || r.nodes.end === null) && (r.nodes.end = P), Qr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Oa = ["touchstart", "touchmove"];
function La(e) {
  return Oa.includes(e);
}
function be(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function us(e, t) {
  return fs(e, t);
}
function Pa(e, t) {
  gn(), t.intro = t.intro ?? !1;
  const r = t.target, n = q, i = P;
  try {
    for (var s = /* @__PURE__ */ zt(r); s && (s.nodeType !== $r || /** @type {Comment} */
    s.data !== ci); )
      s = /* @__PURE__ */ lt(s);
    if (!s)
      throw tr;
    gt(!0), Ae(
      /** @type {Comment} */
      s
    );
    const a = fs(e, { ...t, anchor: s });
    return gt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== tr && console.warn("Failed to hydrate: ", a), t.recover === !1 && Gs(), gn(), Ui(r), gt(!1), us(e, t);
  } finally {
    gt(n), Ae(i);
  }
}
const Rr = /* @__PURE__ */ new Map();
function fs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  gn();
  var l = void 0, u = ka(() => {
    var d = r ?? t.appendChild(Ye());
    ua(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (b) => {
        ur({});
        var g = (
          /** @type {ComponentContext} */
          qe
        );
        if (s && (g.c = s), i && (n.$$events = i), q && Xt(
          /** @type {TemplateNode} */
          b,
          null
        ), l = e(b, n) || {}, q && (j.nodes.end = P, P === null || P.nodeType !== $r || /** @type {Comment} */
        P.data !== Tn))
          throw Zr(), tr;
        fr();
      },
      o
    );
    var h = /* @__PURE__ */ new Set(), v = (b) => {
      for (var g = 0; g < b.length; g++) {
        var E = b[g];
        if (!h.has(E)) {
          h.add(E);
          var p = La(E);
          for (const C of [t, document]) {
            var y = Rr.get(C);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Rr.set(C, y));
            var T = y.get(E);
            T === void 0 ? (C.addEventListener(E, wn, { passive: p }), y.set(E, 1)) : y.set(E, T + 1);
          }
        }
      }
    };
    return v(Gr(os)), bn.add(v), () => {
      var p;
      for (var b of h)
        for (const y of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Rr.get(y)
          ), E = (
            /** @type {number} */
            g.get(b)
          );
          --E == 0 ? (y.removeEventListener(b, wn), g.delete(b), g.size === 0 && Rr.delete(y)) : g.set(b, E);
        }
      bn.delete(v), d !== r && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return xn.set(l, u), l;
}
let xn = /* @__PURE__ */ new WeakMap();
function ja(e, t) {
  const r = xn.get(e);
  return r ? (xn.delete(e), r(t)) : Promise.resolve();
}
var Ze, nt, je, jt, kr, Er, Xr;
class Da {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    J(this, "anchor");
    /** @type {Map<Batch, Key>} */
    N(this, Ze, /* @__PURE__ */ new Map());
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
    N(this, nt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    N(this, je, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    N(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    N(this, kr, !0);
    /**
     * @param {Batch} batch
     */
    N(this, Er, (t) => {
      if (f(this, Ze).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, Ze).get(t)
        ), n = f(this, nt).get(r);
        if (n)
          Bn(n), f(this, jt).delete(r);
        else {
          var i = f(this, je).get(r);
          i && (f(this, nt).set(r, i.effect), f(this, je).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of f(this, Ze)) {
          if (f(this, Ze).delete(s), s === t)
            break;
          const o = f(this, je).get(a);
          o && (Ee(o.effect), f(this, je).delete(a));
        }
        for (const [s, a] of f(this, nt)) {
          if (s === r || f(this, jt).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, Ze).values()).includes(s)) {
              var u = document.createDocumentFragment();
              qn(a, u), u.append(Ye()), f(this, je).set(s, { effect: a, fragment: u });
            } else
              Ee(a);
            f(this, jt).delete(s), f(this, nt).delete(s);
          };
          f(this, kr) || !n ? (f(this, jt).add(s), Dt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    N(this, Xr, (t) => {
      f(this, Ze).delete(t);
      const r = Array.from(f(this, Ze).values());
      for (const [n, i] of f(this, je))
        r.includes(n) || (Ee(i.effect), f(this, je).delete(n));
    });
    this.anchor = t, A(this, kr, r);
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
    ), i = Wi();
    if (r && !f(this, nt).has(t) && !f(this, je).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = Ye();
        s.append(a), f(this, je).set(t, {
          effect: He(() => r(a)),
          fragment: s
        });
      } else
        f(this, nt).set(
          t,
          He(() => r(this.anchor))
        );
    if (f(this, Ze).set(n, t), i) {
      for (const [o, l] of f(this, nt))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of f(this, je))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(f(this, Er)), n.ondiscard(f(this, Xr));
    } else
      q && (this.anchor = P), f(this, Er).call(this, n);
  }
}
Ze = new WeakMap(), nt = new WeakMap(), je = new WeakMap(), jt = new WeakMap(), kr = new WeakMap(), Er = new WeakMap(), Xr = new WeakMap();
function Ba(e) {
  qe === null && zs(), Vi(() => {
    const t = Fn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function st(e, t, r = !1) {
  var n;
  q && (n = P, Qr());
  var i = new Da(e), s = r ? ir : 0;
  function a(o, l) {
    if (q) {
      var u = _i(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(u.substring(1))) {
        var d = Hr();
        Ae(d), i.anchor = d, gt(!1), i.ensure(o, l), gt(!0);
        return;
      }
    }
    i.ensure(o, l);
  }
  jn(() => {
    var o = !1;
    t((l, u = 0) => {
      o = !0, a(u, l);
    }), o || a(-1, null);
  }, s);
}
function qa(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let h = t[o];
    Dt(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            yn(e, Gr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
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
      Ui(d), d.append(u), e.items.clear();
    }
    yn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function yn(e, t, r = !0) {
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
      s.f |= it;
      const a = document.createDocumentFragment();
      qn(s, a);
    } else
      Ee(t[i], r);
  }
}
var ni;
function Wr(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & fi) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = q ? Ae(/* @__PURE__ */ zt(u)) : u.appendChild(Ye());
  }
  q && Qr();
  var d = null, h = /* @__PURE__ */ ha(() => {
    var C = r();
    return vi(C) ? C : C == null ? [] : Gr(C);
  }), v, b = /* @__PURE__ */ new Map(), g = !0;
  function E(C) {
    (T.effect.f & We) === 0 && (T.pending.delete(C), T.fallback = d, Fa(T, v, a, t, n), d !== null && (v.length === 0 ? (d.f & it) === 0 ? Bn(d) : (d.f ^= it, hr(d, null, a)) : Dt(d, () => {
      d = null;
    })));
  }
  function p(C) {
    T.pending.delete(C);
  }
  var y = jn(() => {
    v = /** @type {V[]} */
    c(h);
    var C = v.length;
    let H = !1;
    if (q) {
      var ye = _i(a) === $n;
      ye !== (C === 0) && (a = Hr(), Ae(a), gt(!1), H = !0);
    }
    for (var ie = /* @__PURE__ */ new Set(), D = (
      /** @type {Batch} */
      L
    ), G = Wi(), ee = 0; ee < C; ee += 1) {
      q && P.nodeType === $r && /** @type {Comment} */
      P.data === Tn && (a = /** @type {Comment} */
      P, H = !0, gt(!1));
      var m = v[ee], w = n(m, ee), F = g ? null : o.get(w);
      F ? (F.v && ar(F.v, m), F.i && ar(F.i, ee), G && D.unskip_effect(F.e)) : (F = za(
        o,
        g ? a : ni ?? (ni = Ye()),
        m,
        w,
        ee,
        i,
        t,
        r
      ), g || (F.e.f |= it), o.set(w, F)), ie.add(w);
    }
    if (C === 0 && s && !d && (g ? d = He(() => s(a)) : (d = He(() => s(ni ?? (ni = Ye()))), d.f |= it)), C > ie.size && Us(), q && C > 0 && Ae(Hr()), !g)
      if (b.set(D, ie), G) {
        for (const [me, ce] of o)
          ie.has(me) || D.skip_effect(ce.e);
        D.oncommit(E), D.ondiscard(p);
      } else
        E(D);
    H && gt(!0), c(h);
  }), T = { effect: y, items: o, pending: b, outrogroups: null, fallback: d };
  g = !1, q && (a = P);
}
function vr(e) {
  for (; e !== null && (e.f & et) === 0; )
    e = e.next;
  return e;
}
function Fa(e, t, r, n, i) {
  var m, w, F, me, ce, x, U, W, B;
  var s = (n & Cs) !== 0, a = t.length, o = e.items, l = vr(e.effect.first), u, d = null, h, v = [], b = [], g, E, p, y;
  if (s)
    for (y = 0; y < a; y += 1)
      g = t[y], E = i(g, y), p = /** @type {EachItem} */
      o.get(E).e, (p.f & it) === 0 && ((w = (m = p.nodes) == null ? void 0 : m.a) == null || w.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(p));
  for (y = 0; y < a; y += 1) {
    if (g = t[y], E = i(g, y), p = /** @type {EachItem} */
    o.get(E).e, e.outrogroups !== null)
      for (const M of e.outrogroups)
        M.pending.delete(p), M.done.delete(p);
    if ((p.f & Be) !== 0 && (Bn(p), s && ((me = (F = p.nodes) == null ? void 0 : F.a) == null || me.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(p))), (p.f & it) !== 0)
      if (p.f ^= it, p === l)
        hr(p, null, r);
      else {
        var T = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), bt(e, d, p), bt(e, p, T), hr(p, T, r), d = p, v = [], b = [], l = vr(d.next);
        continue;
      }
    if (p !== l) {
      if (u !== void 0 && u.has(p)) {
        if (v.length < b.length) {
          var C = b[0], H;
          d = C.prev;
          var ye = v[0], ie = v[v.length - 1];
          for (H = 0; H < v.length; H += 1)
            hr(v[H], C, r);
          for (H = 0; H < b.length; H += 1)
            u.delete(b[H]);
          bt(e, ye.prev, ie.next), bt(e, d, ye), bt(e, ie, C), l = C, d = ie, y -= 1, v = [], b = [];
        } else
          u.delete(p), hr(p, l, r), bt(e, p.prev, p.next), bt(e, p, d === null ? e.effect.first : d.next), bt(e, d, p), d = p;
        continue;
      }
      for (v = [], b = []; l !== null && l !== p; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), b.push(l), l = vr(l.next);
      if (l === null)
        continue;
    }
    (p.f & it) === 0 && v.push(p), d = p, l = vr(p.next);
  }
  if (e.outrogroups !== null) {
    for (const M of e.outrogroups)
      M.pending.size === 0 && (yn(e, Gr(M.done)), (ce = e.outrogroups) == null || ce.delete(M));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var D = [];
    if (u !== void 0)
      for (p of u)
        (p.f & Be) === 0 && D.push(p);
    for (; l !== null; )
      (l.f & Be) === 0 && l !== e.fallback && D.push(l), l = vr(l.next);
    var G = D.length;
    if (G > 0) {
      var ee = (n & fi) !== 0 && a === 0 ? r : null;
      if (s) {
        for (y = 0; y < G; y += 1)
          (U = (x = D[y].nodes) == null ? void 0 : x.a) == null || U.measure();
        for (y = 0; y < G; y += 1)
          (B = (W = D[y].nodes) == null ? void 0 : W.a) == null || B.fix();
      }
      qa(e, D, ee);
    }
  }
  s && _t(() => {
    var M, X;
    if (h !== void 0)
      for (p of h)
        (X = (M = p.nodes) == null ? void 0 : M.a) == null || X.apply();
  });
}
function za(e, t, r, n, i, s, a, o) {
  var l = (a & Ts) !== 0 ? (a & As) === 0 ? /* @__PURE__ */ Bi(r, !1, !1) : Ft(r) : null, u = (a & Ss) !== 0 ? Ft(i) : null;
  return {
    v: l,
    i: u,
    e: He(() => (s(t, l ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function hr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & it) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function bt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ar(e, t) {
  Gi(() => {
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
      const i = Rn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function kn(e, t, r) {
  Gi(() => {
    var n = Fn(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      Pn(() => {
        var a = r();
        Aa(a), i && wi(s, a) && (s = a, n.update(a));
      }), i = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function cs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = cs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ha() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = cs(e)) && (n && (n += " "), n += t);
  return n;
}
function Ua(e) {
  return typeof e == "object" ? Ha(e) : e ?? "";
}
const ii = [...` 	
\r\f \v\uFEFF`];
function Wa(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ii.includes(n[a - 1])) && (o === n.length || ii.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function Ya(e, t) {
  return e == null ? null : String(e);
}
function lr(e, t, r, n, i, s) {
  var a = e.__className;
  if (q || a !== r || a === void 0) {
    var o = Wa(r, n, s);
    (!q || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function zn(e, t, r, n) {
  var i = e.__style;
  if (q || i !== t) {
    var s = Ya(t);
    (!q || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  }
  return n;
}
const Va = Symbol("is custom element"), Xa = Symbol("is html"), Ga = gi ? "link" : "LINK", Ka = gi ? "progress" : "PROGRESS";
function Ja(e) {
  if (q) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Ht(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Ht(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, _t(r), ba();
  }
}
function Za(e, t) {
  var r = ds(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ka) || (e.value = t ?? "");
}
function Ht(e, t, r, n) {
  var i = ds(e);
  q && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ga) || i[t] !== (i[t] = r) && (t === "loading" && (e[Fs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Qa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ds(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Va]: e.nodeName.includes("-"),
      [Xa]: e.namespaceURI === di
    })
  );
}
var si = /* @__PURE__ */ new Map();
function Qa(e) {
  var t = e.getAttribute("is") || e.nodeName, r = si.get(t);
  if (r) return r;
  si.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = hi(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Sn(i);
  }
  return r;
}
function re(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i);
  e[t];
  var o;
  o = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? a() : (s = !0, h);
  };
  var l = !1, u = /* @__PURE__ */ en(() => (l = !1, o())), d = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(h, v) {
      if (arguments.length > 0) {
        const b = v ? c(u) : h;
        return k(u, b), l = !0, i !== void 0 && (i = b), h;
      }
      return St && l || (d.f & We) !== 0 ? u.v : c(u);
    })
  );
}
function eo(e) {
  return new to(e);
}
var mt, ze;
class to {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    N(this, mt);
    /** @type {Record<string, any>} */
    N(this, ze);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var l = /* @__PURE__ */ Bi(o, !1, !1);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return c(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === qs ? !0 : (c(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return k(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    A(this, ze, (t.hydrate ? Pa : us)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && Z(), A(this, mt, i.$$events);
    for (const a of Object.keys(f(this, ze)))
      a === "$set" || a === "$destroy" || a === "$on" || zr(this, a, {
        get() {
          return f(this, ze)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, ze)[a] = o;
        },
        enumerable: !0
      });
    f(this, ze).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, f(this, ze).$destroy = () => {
      ja(f(this, ze));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, ze).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, mt)[t] = f(this, mt)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return f(this, mt)[t].push(n), () => {
      f(this, mt)[t] = f(this, mt)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    f(this, ze).$destroy();
  }
}
mt = new WeakMap(), ze = new WeakMap();
let vs;
typeof HTMLElement == "function" && (vs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    J(this, "$$ctor");
    /** Slots */
    J(this, "$$s");
    /** @type {any} The Svelte component instance */
    J(this, "$$c");
    /** Whether or not the custom element is connected */
    J(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    J(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    J(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    J(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    J(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    J(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    J(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    J(this, "$$shadowRoot", null);
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
          const o = Rn("slot");
          s !== "default" && (o.name = s), z(a, o);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = ro(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = qr(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = eo({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = ya(() => {
        Pn(() => {
          var s;
          this.$$r = !0;
          for (const a of Fr(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = qr(
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
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const o = this.$$c.$on(s, a);
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
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qr(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Fr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function qr(e, t, r, n) {
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
function ro(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ir(e, t, r, n, i, s) {
  let a = class extends vs {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Fr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Fr(t).forEach((o) => {
    zr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = qr(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var d = (h = Vt(u, o)) == null ? void 0 : h.get;
          d ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), n.forEach((o) => {
    zr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const sn = "efsdb-bootstrap";
function no() {
  var n;
  const e = document.getElementById(sn);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${sn}`);
  const t = ((n = e.textContent) == null ? void 0 : n.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${sn}`);
  const r = JSON.parse(t);
  if (!r || typeof r != "object")
    throw new Error("Invalid bootstrap payload");
  return r;
}
function io(e) {
  const t = no();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function so() {
  return window;
}
function ao() {
  var e, t;
  return ((t = (e = so()).getEfsdbTheme) == null ? void 0 : t.call(e)) ?? "dark";
}
function oo(e) {
  const t = (r) => {
    const n = r.detail;
    e((n == null ? void 0 : n.theme) === "light" ? "light" : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
function En() {
  return window;
}
function lo() {
  var e, t;
  return ((t = (e = En()).getAccessToken) == null ? void 0 : t.call(e)) ?? null;
}
async function uo() {
  return typeof En().refreshAccessToken != "function" ? !1 : En().refreshAccessToken();
}
async function Nr(e, t = {}) {
  const r = new Headers(t.headers ?? {}), n = lo();
  return n && r.set("Authorization", `Bearer ${n}`), fetch(e, {
    credentials: "same-origin",
    ...t,
    headers: r
  });
}
async function Or(e) {
  const t = e.headers.get("content-type") || "";
  if (!t.includes("application/json"))
    throw new Error(`Expected JSON, got: ${t || "unknown"}`);
  return await e.json();
}
async function Lr(e) {
  var r;
  if ((e.headers.get("content-type") || "").includes("application/json")) {
    const n = await e.json().catch(() => null), i = (r = n == null ? void 0 : n.error) == null ? void 0 : r.message;
    if (typeof i == "string" && i.trim() !== "")
      return `HTTP ${e.status}: ${i}`;
  }
  return `HTTP ${e.status}`;
}
class fo {
  constructor(t = "/api/explorer") {
    J(this, "listCache", /* @__PURE__ */ new Map());
    J(this, "detailsCache", /* @__PURE__ */ new Map());
    J(this, "authBase", "/api/auth");
    this.apiBase = t;
  }
  setApiBase(t) {
    this.apiBase = t.replace(/\/$/, ""), this.listCache.clear(), this.detailsCache.clear();
  }
  setAuthBase(t) {
    this.authBase = t.replace(/\/$/, "");
  }
  async refreshAccessToken() {
    return uo();
  }
  async whoAmI() {
    const t = await Nr(`${this.authBase}/whoami`);
    return t.ok ? Or(t) : null;
  }
  async list(t, r, n) {
    const i = `${r}:${t}`, s = this.listCache.get(i);
    if (s)
      return s;
    const a = `${this.apiBase}/list?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = Nr(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Lr(l));
      return Or(l);
    });
    this.listCache.set(i, o);
    try {
      return await o;
    } catch (l) {
      throw this.listCache.delete(i), l;
    }
  }
  async details(t, r, n) {
    const i = `${r}:${t}`, s = this.detailsCache.get(i);
    if (s)
      return s;
    const a = `${this.apiBase}/details?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = Nr(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Lr(l));
      return Or(l);
    });
    this.detailsCache.set(i, o);
    try {
      return await o;
    } catch (l) {
      throw this.detailsCache.delete(i), l;
    }
  }
  async getDownloadTicket(t, r) {
    const n = `${this.apiBase}/ticket?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, i = await Nr(n);
    if (!i.ok)
      throw new Error(await Lr(i));
    return Or(i);
  }
  async getDownloadUrl(t, r) {
    return (await this.getDownloadTicket(t, r)).url;
  }
  async downloadBlob(t, r) {
    const n = await this.getDownloadUrl(t, r), i = await fetch(n, { credentials: "same-origin" });
    if (!i.ok)
      throw new Error(await Lr(i));
    return i.blob();
  }
  async downloadText(t, r) {
    return (await this.downloadBlob(t, r)).text();
  }
}
const hs = "efsdb_explorer_layout";
function co() {
  try {
    const e = localStorage.getItem(hs);
    if (!e) throw new Error("nope");
    const t = JSON.parse(e);
    return {
      coverHeight: an(t.coverHeight ?? 320, 150, 600),
      previewWidth: an(t.previewWidth ?? 350, 200, 560),
      scale: an(t.scale ?? 1, 0.6, 1.6)
    };
  } catch {
    return { coverHeight: 320, previewWidth: 350, scale: 1 };
  }
}
function ai(e) {
  localStorage.setItem(hs, JSON.stringify(e));
}
function an(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Wt(e, t) {
  let r = !1, n = 0;
  function i(o) {
    if (!r) return;
    const l = t.axis === "y" ? o.clientY : o.clientX;
    t.onDelta(l - n), n = l, o.preventDefault();
  }
  function s() {
    var o;
    r && (r = !1, window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", s), (o = t.onDone) == null || o.call(t));
  }
  function a(o) {
    r = !0, n = t.axis === "y" ? o.clientY : o.clientX, window.addEventListener("mousemove", i), window.addEventListener("mouseup", s), o.preventDefault();
  }
  return e.addEventListener("mousedown", a), {
    destroy() {
      e.removeEventListener("mousedown", a), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", s);
    }
  };
}
var vo = /* @__PURE__ */ V('<span class="sep svelte-qmkv6s">/</span>'), ho = /* @__PURE__ */ V('<!> <button class="crumb svelte-qmkv6s" type="button"> </button>', 1), po = /* @__PURE__ */ V('<div class="toolbar svelte-qmkv6s"><div class="left svelte-qmkv6s"><button class="btn svelte-qmkv6s" type="button" title="Home">Home</button> <button class="btn svelte-qmkv6s" type="button" title="Open">Open</button> <div class="seg svelte-qmkv6s" role="group" aria-label="View mode"><button type="button">Natural</button> <button type="button">Raw</button></div></div> <div class="crumbs svelte-qmkv6s" aria-label="Breadcrumbs"></div> <div class="right svelte-qmkv6s"><label class="scale svelte-qmkv6s"><span>Scale</span> <input type="range" min="0.6" max="1.6" step="0.05" class="svelte-qmkv6s"/></label></div></div>');
const mo = {
  hash: "svelte-qmkv6s",
  code: ".toolbar.svelte-qmkv6s {display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border);background:var(--panel);}.left.svelte-qmkv6s {display:inline-flex;gap:8px;align-items:center;}.btn.svelte-qmkv6s {padding:6px 10px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.btn.svelte-qmkv6s:disabled {opacity:0.5;cursor:not-allowed;}.seg.svelte-qmkv6s {display:inline-flex;border:1px solid var(--border);border-radius:12px;overflow:hidden;}.segbtn.svelte-qmkv6s {padding:6px 10px;border:0;background:transparent;color:var(--muted);cursor:pointer;}.segbtn.svelte-qmkv6s:disabled {cursor:not-allowed;opacity:0.45;}.segbtn.active.svelte-qmkv6s {background:var(--primary);color:var(--primaryText);}.crumbs.svelte-qmkv6s {overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--muted);}.crumb.svelte-qmkv6s {border:0;background:transparent;color:var(--muted);cursor:pointer;padding:2px 4px;border-radius:8px;}.crumb.svelte-qmkv6s:hover {color:var(--text);background:var(--hover);}.sep.svelte-qmkv6s {padding:0 2px;color:var(--muted);opacity:0.7;}.right.svelte-qmkv6s {display:inline-flex;align-items:center;}.scale.svelte-qmkv6s {display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:12px;}input[type='range'].svelte-qmkv6s {width:140px;}"
};
function ps(e, t) {
  ur(t, !0), Ar(e, mo);
  let r = re(t, "mode"), n = re(t, "rawEnabled"), i = re(t, "breadcrumbs"), s = re(t, "scale"), a = re(t, "canOpen"), o = re(t, "onHome"), l = re(t, "onOpen"), u = re(t, "onSetMode"), d = re(t, "onScale"), h = re(t, "onCrumb");
  var v = {
    get mode() {
      return r();
    },
    set mode(m) {
      r(m), Z();
    },
    get rawEnabled() {
      return n();
    },
    set rawEnabled(m) {
      n(m), Z();
    },
    get breadcrumbs() {
      return i();
    },
    set breadcrumbs(m) {
      i(m), Z();
    },
    get scale() {
      return s();
    },
    set scale(m) {
      s(m), Z();
    },
    get canOpen() {
      return a();
    },
    set canOpen(m) {
      a(m), Z();
    },
    get onHome() {
      return o();
    },
    set onHome(m) {
      o(m), Z();
    },
    get onOpen() {
      return l();
    },
    set onOpen(m) {
      l(m), Z();
    },
    get onSetMode() {
      return u();
    },
    set onSetMode(m) {
      u(m), Z();
    },
    get onScale() {
      return d();
    },
    set onScale(m) {
      d(m), Z();
    },
    get onCrumb() {
      return h();
    },
    set onCrumb(m) {
      h(m), Z();
    }
  }, b = po(), g = I(b), E = I(g), p = Y(E, 2), y = Y(p, 2), T = I(y);
  let C;
  var H = Y(T, 2);
  let ye;
  S(y), S(g);
  var ie = Y(g, 2);
  Wr(ie, 23, i, (m) => m.path, (m, w, F) => {
    var me = ho(), ce = Tr(me);
    {
      var x = (B) => {
        var M = vo();
        z(B, M);
      };
      st(ce, (B) => {
        c(F) > 0 && B(x);
      });
    }
    var U = Y(ce, 2), W = I(U, !0);
    S(U), ke(() => be(W, c(w).label)), De("click", U, () => h()(c(w).path)), z(m, me);
  }), S(ie);
  var D = Y(ie, 2), G = I(D), ee = Y(I(G), 2);
  return Ja(ee), S(G), S(D), S(b), ke(() => {
    p.disabled = !a(), C = lr(T, 1, "segbtn svelte-qmkv6s", null, C, { active: r() === "natural" }), ye = lr(H, 1, "segbtn svelte-qmkv6s", null, ye, { active: r() === "raw" }), H.disabled = !n(), Za(ee, s());
  }), De("click", E, function(...m) {
    var w;
    (w = o()) == null || w.apply(this, m);
  }), De("click", p, function(...m) {
    var w;
    (w = l()) == null || w.apply(this, m);
  }), De("click", T, () => u()("natural")), De("click", H, () => u()("raw")), De("input", ee, (m) => d()(parseFloat(m.target.value))), z(e, b), fr(v);
}
Cr(["click", "input"]);
Ir(
  ps,
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
var go = /* @__PURE__ */ V('<div class="loading svelte-13uljdf"><div class="spinner svelte-13uljdf" aria-hidden="true"></div> <div class="loadingText svelte-13uljdf">Loading…</div></div>'), _o = /* @__PURE__ */ V('<div class="empty svelte-13uljdf"> </div>'), bo = /* @__PURE__ */ V('<span class="arrow svelte-13uljdf" aria-hidden="true">›</span>'), wo = /* @__PURE__ */ V('<button type="button"><span class="left svelte-13uljdf"><span class="ico svelte-13uljdf" aria-hidden="true"> </span> <span> </span></span> <!></button>'), xo = /* @__PURE__ */ V('<div class="list svelte-13uljdf" role="list"><!></div>'), yo = /* @__PURE__ */ V('<section class="col svelte-13uljdf"><header class="colHeader svelte-13uljdf"> </header> <!></section>'), ko = /* @__PURE__ */ V('<div class="cols svelte-13uljdf" role="region" aria-label="Miller columns"></div>');
const Eo = {
  hash: "svelte-13uljdf",
  code: `.cols.svelte-13uljdf {display:flex;gap:10px;overflow:auto;padding:10px;background:var(--bg);height:100%;align-items:stretch;}.col.svelte-13uljdf {width:260px;min-width:260px;border:1px solid var(--border);border-radius:14px;background:var(--panel);overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;}.colHeader.svelte-13uljdf {padding:10px 12px;border-bottom:1px solid var(--border);font-weight:700;font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}.list.svelte-13uljdf {padding:8px;display:flex;flex-direction:column;gap:6px;min-height:0;flex:1 1 auto;overflow:auto;}.row.svelte-13uljdf {display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border-radius:12px;border:1px solid transparent;background:transparent;color:var(--text);cursor:pointer;text-align:left;}.row.svelte-13uljdf:hover {background:var(--hover);}.row.active.svelte-13uljdf {background:var(--primary);color:var(--primaryText);border-color:color-mix(in oklab, var(--primary), black 15%);}.row.dim.svelte-13uljdf:not(.active) {opacity:0.55;}.left.svelte-13uljdf {min-width:0;display:inline-flex;align-items:center;gap:8px;}.ico.svelte-13uljdf {width:18px;opacity:0.85;}.label.svelte-13uljdf {min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-size:13px;}.label.muted.svelte-13uljdf {color:var(--muted);}.row.active.svelte-13uljdf .label:where(.svelte-13uljdf) {color:var(--primaryText);}.label.warn.svelte-13uljdf {color:var(--warn);}.label.info.svelte-13uljdf {color:var(--info);}.arrow.svelte-13uljdf {color:inherit;opacity:0.7;font-size:16px;}.loading.svelte-13uljdf {display:grid;place-items:center;padding:24px;gap:10px;color:var(--muted);}.spinner.svelte-13uljdf {width:22px;height:22px;border-radius:999px;border:3px solid color-mix(in oklab, var(--muted), transparent 65%);border-top-color:var(--primary);
    animation: svelte-13uljdf-spin 0.8s linear infinite;}
  @keyframes svelte-13uljdf-spin {
    to {
      transform: rotate(360deg);
    }
  }.loadingText.svelte-13uljdf {font-size:12px;}.empty.svelte-13uljdf {min-height:180px;display:grid;place-items:center;padding:18px;text-align:center;color:var(--muted);font-size:12px;line-height:1.6;border:1px dashed color-mix(in oklab, var(--border), transparent 30%);border-radius:12px;background:color-mix(in oklab, var(--panel), transparent 8%);}`
};
function ms(e, t) {
  ur(t, !0), Ar(e, Eo);
  let r = re(t, "mode"), n = re(t, "columns"), i = re(t, "onItemClick");
  function s(u) {
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
      r(u), Z();
    },
    get columns() {
      return n();
    },
    set columns(u) {
      n(u), Z();
    },
    get onItemClick() {
      return i();
    },
    set onItemClick(u) {
      i(u), Z();
    }
  }, l = ko();
  return Wr(l, 23, n, (u) => u.path, (u, d, h) => {
    var v = yo(), b = I(v), g = I(b, !0);
    S(b);
    var E = Y(b, 2);
    {
      var p = (T) => {
        var C = go();
        z(T, C);
      }, y = (T) => {
        var C = xo(), H = I(C);
        {
          var ye = (D) => {
            var G = _o(), ee = I(G, !0);
            S(G), ke(() => be(ee, r() === "raw" ? "No explorer-visible items in this location yet." : "No decoded content is available in this location yet.")), z(D, G);
          }, ie = (D) => {
            var G = ls(), ee = Tr(G);
            Wr(ee, 17, () => c(d).items, (m) => m.rawPath ?? m.name, (m, w) => {
              var F = wo();
              let me;
              var ce = I(F), x = I(ce), U = I(x, !0);
              S(x);
              var W = Y(x, 2), B = I(W, !0);
              S(W), S(ce);
              var M = Y(ce, 2);
              {
                var X = (oe) => {
                  var ge = bo();
                  z(oe, ge);
                };
                st(M, (oe) => {
                  c(w).type === "dir" && oe(X);
                });
              }
              S(F), ke(
                (oe, ge) => {
                  me = lr(F, 1, "row svelte-13uljdf", null, me, {
                    active: c(d).selectedItem === c(w).name,
                    dim: r() === "raw" && c(w).type === "dir"
                  }), be(U, oe), lr(W, 1, ge, "svelte-13uljdf"), Ht(W, "title", c(w).name), be(B, c(w).name);
                },
                [
                  () => s(c(w)),
                  () => Ua(a(c(w)))
                ]
              ), De("click", F, () => i()(c(h), c(w))), z(m, F);
            }), z(D, G);
          };
          st(H, (D) => {
            c(d).items.length === 0 ? D(ye) : D(ie, -1);
          });
        }
        S(C), z(T, C);
      };
      st(E, (T) => {
        c(d).loading ? T(p) : T(y, -1);
      });
    }
    S(v), ke(
      (T) => {
        Ht(v, "aria-label", `Column ${c(h) + 1}`), be(g, T);
      },
      [
        () => c(h) === 0 ? "ROOT" : c(d).path.split("/").filter(Boolean).pop()
      ]
    ), z(u, v);
  }), S(l), z(e, l), fr(o);
}
Cr(["click"]);
Ir(ms, { mode: {}, columns: {}, onItemClick: {} }, [], [], { mode: "open" });
var $o = /* @__PURE__ */ V('<div class="empty svelte-1d4imag"><div class="sym svelte-1d4imag">∅</div> <div class="lbl svelte-1d4imag">Empty</div></div>'), To = /* @__PURE__ */ V('<button type="button"><div class="ico svelte-1d4imag"> </div> <div class="name svelte-1d4imag"> </div> <div class="size svelte-1d4imag"> </div></button>'), So = /* @__PURE__ */ V('<div class="coverPane svelte-1d4imag"><div class="coverHeader svelte-1d4imag"><button class="navBtn svelte-1d4imag" type="button" aria-label="Previous">‹</button> <div class="title svelte-1d4imag">Coverflow</div> <button class="navBtn svelte-1d4imag" type="button" aria-label="Next">›</button></div> <div class="stage svelte-1d4imag" role="group" aria-label="Coverflow stage"><!></div></div>');
const Co = {
  hash: "svelte-1d4imag",
  code: ".coverPane.svelte-1d4imag {border-bottom:1px solid var(--border);background:var(--bg);}.coverHeader.svelte-1d4imag {display:grid;grid-template-columns:34px 1fr 34px;align-items:center;padding:8px 10px;color:var(--muted);font-size:12px;}.navBtn.svelte-1d4imag {width:34px;height:30px;border-radius:10px;border:1px solid var(--border);background:var(--panel);color:var(--text);cursor:pointer;}.title.svelte-1d4imag {text-align:center;text-transform:uppercase;letter-spacing:0.08em;font-weight:800;opacity:0.8;}.stage.svelte-1d4imag {height:100%;min-height:220px;perspective:1100px;display:grid;place-items:center;overflow:hidden;user-select:none;position:relative;padding:10px;touch-action:pan-y;}.card.svelte-1d4imag {position:absolute;width:220px;height:170px;border-radius:18px;border:1px solid var(--border);background:var(--panel);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-style:preserve-3d;cursor:pointer;transition:transform 120ms ease, opacity 120ms ease;}.card.active.svelte-1d4imag {border-color:color-mix(in oklab, var(--primary), black 20%);box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);}.ico.svelte-1d4imag {font-size:40px;opacity:0.9;}.name.svelte-1d4imag {width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--muted);font-weight:700;}.size.svelte-1d4imag {font-size:11px;color:var(--muted);opacity:0.8;}.empty.svelte-1d4imag {text-align:center;color:var(--muted);opacity:0.6;}.sym.svelte-1d4imag {font-size:56px;margin-bottom:4px;}.lbl.svelte-1d4imag {font-size:11px;letter-spacing:0.12em;text-transform:uppercase;}"
};
function gs(e, t) {
  ur(t, !0), Ar(e, Co);
  let r = re(t, "items"), n = re(t, "selectedName"), i = re(t, "mode"), s = re(t, "scale"), a = re(t, "onNavToIndex"), o = 320, l = 250, u = /* @__PURE__ */ Q(null), d = /* @__PURE__ */ Q(!1), h = /* @__PURE__ */ Q(0), v = /* @__PURE__ */ Q(0);
  function b(x) {
    return x.type === "dir" ? i() === "raw" ? "🗂️" : "📁" : x.kind === "image" ? "🖼️" : x.kind === "video" ? "🎬" : "📄";
  }
  function g() {
    const x = r().findIndex((U) => U.name === n());
    return x < 0 ? 0 : x;
  }
  function E(x) {
    if (!r().length) return;
    const U = g(), W = Math.max(0, Math.min(r().length - 1, U + x));
    a()(W);
  }
  function p(x) {
    x.preventDefault(), !c(u) && (k(u, window.setTimeout(() => k(u, null), 30), !0), E(x.deltaY > 0 ? 1 : -1));
  }
  function y(x) {
    r().length && (k(d, !0), k(h, x.clientX, !0), k(v, g(), !0), x.preventDefault());
  }
  function T(x) {
    if (!c(d)) return;
    const U = x.clientX - c(h), W = -Math.round(U / 50), B = Math.max(0, Math.min(r().length - 1, c(v) + W));
    a()(B);
  }
  function C() {
    k(d, !1);
  }
  function H(x) {
    const U = (X) => y(X), W = (X) => T(X), B = () => C(), M = () => C();
    return x.addEventListener("mousedown", U), x.addEventListener("mousemove", W), x.addEventListener("mouseup", B), x.addEventListener("mouseleave", M), {
      destroy() {
        x.removeEventListener("mousedown", U), x.removeEventListener("mousemove", W), x.removeEventListener("mouseup", B), x.removeEventListener("mouseleave", M);
      }
    };
  }
  const ye = /* @__PURE__ */ ft(() => {
    const x = g();
    return r().map((U, W) => {
      const B = W - x, M = Math.abs(B), X = s(), oe = o * X, ge = l * X;
      if (M > 6)
        return { item: U, i: W, hidden: !0, style: "" };
      let Ie = B * oe, Ge = -M * ge, de = 0;
      const ue = Math.max(0.72, 1 - M * 0.08) * X;
      B === -1 && (Ie -= oe * 0.4), B === 1 && (Ie += oe * 0.4), B < 0 ? (Ie += oe * 0.6, de = 45) : B > 0 ? (Ie -= oe * 0.6, de = -45) : Ge += 100 * X;
      const Me = Math.max(0.3, 1 - M * 0.15), _ = 100 - M, K = `below 2px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,${Math.max(0, 0.2 - M * 0.05)}) 100%)`, se = `transform: translateX(${Ie}px) translateZ(${Ge}px) rotateY(${de}deg) scale(${ue});opacity:${Me}; z-index:${_};-webkit-box-reflect:${K};`;
      return { item: U, i: W, hidden: !1, style: se };
    });
  });
  var ie = {
    get items() {
      return r();
    },
    set items(x) {
      r(x), Z();
    },
    get selectedName() {
      return n();
    },
    set selectedName(x) {
      n(x), Z();
    },
    get mode() {
      return i();
    },
    set mode(x) {
      i(x), Z();
    },
    get scale() {
      return s();
    },
    set scale(x) {
      s(x), Z();
    },
    get onNavToIndex() {
      return a();
    },
    set onNavToIndex(x) {
      a(x), Z();
    }
  }, D = So(), G = I(D), ee = I(G), m = Y(ee, 4);
  S(G);
  var w = Y(G, 2), F = I(w);
  {
    var me = (x) => {
      var U = $o();
      z(x, U);
    }, ce = (x) => {
      var U = ls(), W = Tr(U);
      Wr(W, 17, () => c(ye), (B) => B.item.rawPath ?? B.item.name, (B, M) => {
        var X = To();
        let oe;
        var ge = I(X), Ie = I(ge, !0);
        S(ge);
        var Ge = Y(ge, 2), de = I(Ge, !0);
        S(Ge);
        var ue = Y(Ge, 2), Me = I(ue, !0);
        S(ue), S(X), ke(
          (_) => {
            oe = lr(X, 1, "card svelte-1d4imag", null, oe, { active: c(M).item.name === n() }), zn(X, c(M).hidden ? "display:none;" : c(M).style), be(Ie, _), Ht(Ge, "title", c(M).item.name), be(de, c(M).item.name), be(Me, typeof c(M).item.size == "number" ? c(M).item.size : "");
          },
          [() => b(c(M).item)]
        ), De("click", X, () => a()(c(M).i)), z(B, X);
      }), z(x, U);
    };
    st(F, (x) => {
      r().length ? x(ce, -1) : x(me);
    });
  }
  return S(w), kn(w, (x) => H == null ? void 0 : H(x)), S(D), Ma("wheel", D, p), De("click", ee, () => E(-1)), De("click", m, () => E(1)), z(e, D), fr(ie);
}
Cr(["click"]);
Ir(
  gs,
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
var Ao = /* @__PURE__ */ V('<div class="empty svelte-1rs50gd">No Selection</div>'), Io = /* @__PURE__ */ V('<div class="empty svelte-1rs50gd">Loading details…</div>'), Mo = /* @__PURE__ */ V('<div class="err svelte-1rs50gd"> </div>'), Ro = /* @__PURE__ */ V('<div class="imgWrap svelte-1rs50gd"><img class="svelte-1rs50gd"/></div>'), No = /* @__PURE__ */ V('<pre class="code svelte-1rs50gd"> </pre>'), Oo = /* @__PURE__ */ V('<div class="fileBadge svelte-1rs50gd"> </div>'), Lo = /* @__PURE__ */ V('<!> <div class="meta svelte-1rs50gd"><div class="name svelte-1rs50gd"> </div> <div class="sub svelte-1rs50gd"> </div></div> <div class="paths svelte-1rs50gd"><div class="pathsHdr svelte-1rs50gd">Path</div> <button class="pathBox svelte-1rs50gd" type="button" title="Copy"> </button></div>', 1), Po = /* @__PURE__ */ V('<aside class="pane svelte-1rs50gd"><header class="hdr svelte-1rs50gd"><div class="ttl svelte-1rs50gd">Preview</div> <button class="btn svelte-1rs50gd" type="button" title="Toggle preview">⟷</button></header> <div class="body svelte-1rs50gd"><!></div></aside>');
const jo = {
  hash: "svelte-1rs50gd",
  code: ".pane.svelte-1rs50gd {border-left:1px solid var(--border);background:var(--panel);height:100%;display:flex;flex-direction:column;overflow:hidden;}.hdr.svelte-1rs50gd {display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--border);}.ttl.svelte-1rs50gd {font-weight:800;letter-spacing:0.08em;text-transform:uppercase;font-size:12px;color:var(--muted);}.btn.svelte-1rs50gd {width:34px;height:30px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.body.svelte-1rs50gd {padding:12px;overflow:auto;height:100%;}.empty.svelte-1rs50gd {height:100%;display:grid;place-items:center;color:var(--muted);opacity:0.7;font-style:italic;}.err.svelte-1rs50gd {padding:10px;border-radius:12px;border:1px solid color-mix(in oklab, var(--danger), transparent 55%);background:color-mix(in oklab, var(--danger), transparent 85%);color:var(--text);}.imgWrap.svelte-1rs50gd {background:color-mix(in oklab, black, transparent 65%);border:1px solid var(--border);border-radius:14px;padding:10px;display:grid;place-items:center;margin-bottom:12px;}img.svelte-1rs50gd {max-height:220px;max-width:100%;object-fit:contain;border-radius:10px;}.code.svelte-1rs50gd {background:var(--codeBg);border:1px solid var(--border);border-radius:14px;padding:10px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:12px;white-space:pre-wrap;max-height:260px;overflow:auto;margin-bottom:12px;}.fileBadge.svelte-1rs50gd {border:1px solid var(--border);background:var(--card);border-radius:14px;padding:26px 12px;display:grid;place-items:center;font-weight:900;color:var(--muted);margin-bottom:12px;}.meta.svelte-1rs50gd {margin-bottom:10px;}.name.svelte-1rs50gd {font-weight:900;color:var(--text);word-break:break-word;}.sub.svelte-1rs50gd {color:var(--muted);font-size:12px;margin-top:2px;}.paths.svelte-1rs50gd {border-top:1px solid var(--border);padding-top:10px;}.pathsHdr.svelte-1rs50gd {font-size:11px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-bottom:8px;}.pathBox.svelte-1rs50gd {width:100%;text-align:left;border-radius:12px;border:1px solid var(--border);background:color-mix(in oklab, black, transparent 75%);color:var(--muted);padding:10px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:12px;word-break:break-all;cursor:pointer;}.pathBox.svelte-1rs50gd:hover {color:var(--text);}"
};
function _s(e, t) {
  ur(t, !0), Ar(e, jo);
  let r = re(t, "client"), n = re(t, "mode"), i = re(t, "activeItem"), s = re(t, "widthPx"), a = re(t, "onToggle"), o = /* @__PURE__ */ Q(null), l = /* @__PURE__ */ Q("idle"), u = /* @__PURE__ */ Q(""), d = /* @__PURE__ */ Q(null), h = null;
  function v(m) {
    return (m.ext || "").toLowerCase();
  }
  function b(m) {
    const w = v(m);
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(w);
  }
  async function g() {
    if (c(d) && (URL.revokeObjectURL(c(d)), k(d, null)), k(o, null), !i()) {
      k(l, "idle");
      return;
    }
    k(l, "loading"), k(u, ""), h == null || h.abort(), h = new AbortController();
    const m = i().rawPath || i().name;
    try {
      const w = await r().details(m, n(), h.signal);
      if (k(o, w, !0), b(w)) {
        const F = await r().downloadBlob(w.rawPath, n());
        k(d, URL.createObjectURL(F), !0);
      }
      k(l, "idle");
    } catch (w) {
      if ((w == null ? void 0 : w.name) === "AbortError")
        return;
      k(l, "error"), k(u, (w == null ? void 0 : w.message) || "Failed to load", !0);
    }
  }
  Vi(() => (g(), () => {
    h == null || h.abort(), c(d) && (URL.revokeObjectURL(c(d)), k(d, null));
  }));
  async function E() {
    if (c(o))
      try {
        await navigator.clipboard.writeText(c(o).rawPath);
      } catch {
      }
  }
  var p = {
    get client() {
      return r();
    },
    set client(m) {
      r(m), Z();
    },
    get mode() {
      return n();
    },
    set mode(m) {
      n(m), Z();
    },
    get activeItem() {
      return i();
    },
    set activeItem(m) {
      i(m), Z();
    },
    get widthPx() {
      return s();
    },
    set widthPx(m) {
      s(m), Z();
    },
    get onToggle() {
      return a();
    },
    set onToggle(m) {
      a(m), Z();
    }
  }, y = Po(), T = I(y), C = Y(I(T), 2);
  S(T);
  var H = Y(T, 2), ye = I(H);
  {
    var ie = (m) => {
      var w = Ao();
      z(m, w);
    }, D = (m) => {
      var w = Io();
      z(m, w);
    }, G = (m) => {
      var w = Mo(), F = I(w);
      S(w), ke(() => be(F, `Error: ${c(u) ?? ""}`)), z(m, w);
    }, ee = (m) => {
      var w = Lo(), F = Tr(w);
      {
        var me = (de) => {
          var ue = Ro(), Me = I(ue);
          S(ue), ke(() => {
            Ht(Me, "src", c(d)), Ht(Me, "alt", c(o).name);
          }), z(de, ue);
        }, ce = /* @__PURE__ */ ft(() => b(c(o)) && c(d)), x = (de) => {
          var ue = No(), Me = I(ue, !0);
          S(ue), ke(() => be(Me, c(o).preview)), z(de, ue);
        }, U = (de) => {
          var ue = Oo(), Me = I(ue, !0);
          S(ue), ke(() => be(Me, c(o).ext || "FILE")), z(de, ue);
        };
        st(F, (de) => {
          c(ce) ? de(me) : c(o).preview ? de(x, 1) : de(U, -1);
        });
      }
      var W = Y(F, 2), B = I(W), M = I(B, !0);
      S(B);
      var X = Y(B, 2), oe = I(X, !0);
      S(X), S(W);
      var ge = Y(W, 2), Ie = Y(I(ge), 2), Ge = I(Ie, !0);
      S(Ie), S(ge), ke(() => {
        be(M, c(o).name), be(oe, c(o).mime || ""), be(Ge, c(o).rawPath);
      }), De("click", Ie, E), z(m, w);
    };
    st(ye, (m) => {
      i() ? c(l) === "loading" ? m(D, 1) : c(l) === "error" ? m(G, 2) : c(o) && m(ee, 3) : m(ie);
    });
  }
  return S(H), S(y), ke(() => zn(y, `width:${s()}px`)), De("click", C, function(...m) {
    var w;
    (w = a()) == null || w.apply(this, m);
  }), z(e, y), fr(p);
}
Cr(["click"]);
Ir(
  _s,
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
var Do = /* @__PURE__ */ V('<div class="statusCard svelte-64brx5"><div class="statusTitle svelte-64brx5">Connecting to EFSDB…</div> <div class="statusCopy svelte-64brx5">Refreshing your session and loading the decoded filesystem view.</div></div>'), Bo = /* @__PURE__ */ V('<div class="statusCard error svelte-64brx5"><div class="statusTitle svelte-64brx5">Sign in required</div> <div class="statusCopy svelte-64brx5"> </div></div>'), qo = /* @__PURE__ */ V("<div> </div>"), Fo = /* @__PURE__ */ V('<div class="previewCollapsed svelte-64brx5"><button class="btn svelte-64brx5" type="button">Show Preview</button></div>'), zo = /* @__PURE__ */ V('<!> <div class="top svelte-64brx5"><!> <div class="cover svelte-64brx5"><!></div> <div class="splitY svelte-64brx5" title="Resize coverflow" aria-hidden="true"></div></div> <div class="main svelte-64brx5"><div class="colsPane svelte-64brx5"><!></div> <div class="splitX svelte-64brx5" title="Resize preview" aria-hidden="true"></div> <!></div>', 1), Ho = /* @__PURE__ */ V('<div class="root svelte-64brx5"><!></div>');
const Uo = {
  hash: "svelte-64brx5",
  code: `:host {display:block;--bg: #0b0f14;--panel: #0f1520;--card: #121b28;--hover: rgba(255, 255, 255, 0.06);--border: rgba(255, 255, 255, 0.1);--text: rgba(255, 255, 255, 0.92);--muted: rgba(255, 255, 255, 0.6);--primary: #c6ff00;--primaryText: #10200d;--warn: #f59e0b;--info: #22c55e;--danger: #ef4444;--codeBg: rgba(0, 0, 0, 0.35);}:host([theme='light']) {--bg: #f7faef;--panel: #ffffff;--card: #f1f5e7;--hover: rgba(116, 145, 45, 0.1);--border: rgba(116, 145, 45, 0.18);--text: #1a2313;--muted: #5f7050;--primary: #c6ff00;--primaryText: #13210f;--warn: #b7791f;--info: #2f855a;--danger: #c05666;--codeBg: rgba(116, 145, 45, 0.08);}.root.svelte-64brx5 {background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:18px;overflow:hidden;font-family:'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;}.banner.svelte-64brx5,
  .statusCard.svelte-64brx5 {padding:14px 16px;border-bottom:1px solid var(--border);background:color-mix(in oklab, var(--panel), transparent 10%);}.errorBanner.svelte-64brx5,
  .statusCard.error.svelte-64brx5 {background:color-mix(in oklab, var(--danger), transparent 88%);border-bottom-color:color-mix(in oklab, var(--danger), transparent 70%);}.statusCard.svelte-64brx5 {min-height:220px;display:grid;place-items:center;text-align:center;gap:10px;}.statusTitle.svelte-64brx5 {font-size:1.2rem;font-weight:800;}.statusCopy.svelte-64brx5 {color:var(--muted);max-width:34rem;line-height:1.5;}.top.svelte-64brx5 {display:flex;flex-direction:column;}.cover.svelte-64brx5 {border-bottom:1px solid var(--border);overflow:hidden;}.main.svelte-64brx5 {display:grid;grid-template-columns:minmax(0, 1fr) 8px auto;min-height:420px;height:min(72vh, 780px);}.colsPane.svelte-64brx5 {min-width:0;overflow:auto;}.splitY.svelte-64brx5 {height:8px;cursor:ns-resize;background:color-mix(in oklab, var(--border), transparent 40%);}.splitX.svelte-64brx5 {width:8px;cursor:ew-resize;background:color-mix(in oklab, var(--border), transparent 40%);}.previewCollapsed.svelte-64brx5 {width:40px;display:grid;place-items:center;border-left:1px solid var(--border);background:var(--panel);}.btn.svelte-64brx5 {padding:8px 10px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;writing-mode:vertical-rl;transform:rotate(180deg);}`
};
function Wo(e, t) {
  var Me;
  ur(t, !0), Ar(e, Uo);
  const r = io("explorer"), n = r.apiBase ?? "/api/explorer", i = r.authBase ?? "/api/auth", s = t.$$host, a = new fo();
  let o = /* @__PURE__ */ Q(yt(((Me = r.initial) == null ? void 0 : Me.mode) ?? "natural")), l = /* @__PURE__ */ Q(yt([])), u = /* @__PURE__ */ Q(null), d = /* @__PURE__ */ Q(yt(co())), h = /* @__PURE__ */ Q(!1), v = /* @__PURE__ */ Q("loading"), b = /* @__PURE__ */ Q(""), g = /* @__PURE__ */ Q(null), E = null;
  const p = /* @__PURE__ */ ft(() => {
    for (let _ = c(l).length - 1; _ >= 0; _--)
      if (c(l)[_].selectedItem)
        return _;
    return 0;
  }), y = /* @__PURE__ */ ft(() => c(l)[c(p)] ?? null), T = /* @__PURE__ */ ft(() => {
    var _;
    return ((_ = c(y)) == null ? void 0 : _.items) ?? [];
  }), C = /* @__PURE__ */ ft(() => {
    var _;
    return ((_ = c(y)) == null ? void 0 : _.selectedItem) ?? null;
  }), H = /* @__PURE__ */ ft(() => {
    var $, R;
    return (Array.isArray(($ = c(g)) == null ? void 0 : $.entitlements) ? (R = c(g)) == null ? void 0 : R.entitlements : []).includes("RAW_VIEW");
  }), ye = /* @__PURE__ */ ft(() => {
    const _ = c(l)[c(l).length - 1], $ = (_ == null ? void 0 : _.path) ?? "", R = $ ? $.split("/").filter(Boolean) : [], K = [{ label: "ROOT", path: "" }];
    let se = "";
    for (const $e of R)
      se += (se ? "/" : "") + $e, K.push({ label: $e, path: se });
    return K;
  });
  function ie(_) {
    s.setAttribute("theme", _);
  }
  function D(_, $) {
    var se;
    const K = (((se = _.split("?")[0]) == null ? void 0 : se.split("#")[0]) ?? "").split("/").filter(Boolean).join("/");
    return $ === "natural" && K.startsWith("system_") ? "" : K;
  }
  function G() {
    const _ = c(T).findIndex(($) => $.name === c(C));
    return _ < 0 ? 0 : _;
  }
  function ee() {
    c(v) !== "auth_required" && k(b, "");
  }
  async function m() {
    return await a.refreshAccessToken() ? (k(g, await a.whoAmI(), !0), !0) : (k(v, "auth_required"), k(b, "Sign in is required before the explorer can load."), !1);
  }
  async function w(_) {
    ee();
    try {
      _ = D(_, c(o));
      const $ = _ ? _.split("/").filter(Boolean) : [], R = [], K = await a.list("", c(o));
      R.push({ path: "", items: K.items, selectedItem: $[0] ?? null });
      let se = "";
      for (let ve = 0; ve < $.length; ve++) {
        se += (se ? "/" : "") + $[ve];
        try {
          const Re = await a.list(se, c(o)), cr = R[R.length - 1].items.find((dr) => dr.name === $[ve]);
          cr && cr.type === "dir" && R.push({
            path: se,
            items: Re.items,
            selectedItem: $[ve + 1] ?? null
          });
        } catch {
        }
      }
      k(l, R, !0);
      const $e = R[R.length - 1];
      if ($e != null && $e.selectedItem) {
        const ve = $e.items.find((Re) => Re.name === $e.selectedItem);
        k(u, ve ?? null, !0);
      } else
        k(u, null);
      k(v, "ready");
    } catch ($) {
      const R = $ instanceof Error ? $.message : "Failed to load explorer";
      if (R.startsWith("HTTP 401")) {
        k(v, "auth_required"), k(b, "Your session is no longer valid. Sign in again to continue.");
        return;
      }
      if (R.startsWith("HTTP 403") && c(o) === "raw") {
        k(o, "natural"), k(b, "Raw inspection is not available for the current role. Showing decoded view instead."), await w(_);
        return;
      }
      k(v, "error"), k(b, R, !0);
    }
  }
  function F(_) {
    if (c(o) === _)
      return;
    if (_ === "raw" && !c(H)) {
      k(b, "Raw inspection requires RAW_VIEW entitlement.");
      return;
    }
    k(o, _, !0);
    const $ = c(l)[c(l).length - 1];
    w(D(($ == null ? void 0 : $.path) ?? "", _));
  }
  async function me() {
    if (!(!c(u) || c(u).type === "dir"))
      try {
        const _ = c(u).rawPath || c(u).name, $ = await a.getDownloadUrl(_, c(o));
        window.open($, "_blank", "noopener,noreferrer");
      } catch (_) {
        k(b, _ instanceof Error ? _.message : "Unable to open the selected item.", !0);
      }
  }
  function ce(_) {
    c(d).scale = _, ai(c(d));
  }
  function x(_) {
    c(d).coverHeight = Math.max(150, Math.min(600, c(d).coverHeight + _));
  }
  function U(_) {
    c(d).previewWidth = Math.max(200, Math.min(560, c(d).previewWidth - _));
  }
  function W() {
    ai(c(d));
  }
  async function B(_, $) {
    k(u, $, !0), E && (window.clearTimeout(E), E = null);
    const R = c(l).slice(0, _ + 1);
    if (R[_] = { ...R[_], selectedItem: $.name }, $.type === "dir") {
      const K = $.rawPath || $.name;
      R.push({ path: K, items: [], selectedItem: null, loading: !0 }), k(l, R, !0), E = window.setTimeout(
        async () => {
          var se, $e;
          try {
            const ve = await a.list(K, c(o)), Re = _ + 1;
            ((se = c(l)[Re]) == null ? void 0 : se.path) === K && (c(l)[Re] = {
              ...c(l)[Re],
              items: ve.items,
              loading: !1
            }, k(l, [...c(l)], !0));
          } catch (ve) {
            const Re = _ + 1;
            (($e = c(l)[Re]) == null ? void 0 : $e.path) === K && (c(l)[Re] = { ...c(l)[Re], loading: !1 }, k(l, [...c(l)], !0)), k(b, ve instanceof Error ? ve.message : "Unable to load the selected folder.", !0);
          }
        },
        150
      );
    } else
      k(l, R, !0);
  }
  function M(_) {
    const $ = c(y);
    if (!$)
      return;
    const R = $.items[_];
    R && B(c(p), R);
  }
  function X() {
    k(h, !c(h));
  }
  function oe(_) {
    var K;
    const $ = _.target, R = (K = $ == null ? void 0 : $.tagName) == null ? void 0 : K.toUpperCase();
    R === "INPUT" || R === "TEXTAREA" || (_.key === "ArrowRight" && M(Math.min(c(T).length - 1, G() + 1)), _.key === "ArrowLeft" && M(Math.max(0, G() - 1)));
  }
  Ba(() => {
    var R;
    ie(ao());
    const _ = oo((K) => {
      ie(K);
    });
    a.setApiBase(n), a.setAuthBase(i);
    let $ = ((R = r.initial) == null ? void 0 : R.path) ?? "";
    return $ || ($ = new URL(window.location.href).searchParams.get("path") || ""), (async () => {
      if (!await m()) {
        k(v, "auth_required");
        return;
      }
      c(o) === "raw" && !c(H) && k(o, "natural"), await w(D($, c(o)));
    })(), window.addEventListener("keydown", oe), () => {
      E && window.clearTimeout(E), _(), window.removeEventListener("keydown", oe);
    };
  });
  var ge = Ho(), Ie = I(ge);
  {
    var Ge = (_) => {
      var $ = Do();
      z(_, $);
    }, de = (_) => {
      var $ = Bo(), R = Y(I($), 2), K = I(R, !0);
      S(R), S($), ke(() => be(K, c(b))), z(_, $);
    }, ue = (_) => {
      var $ = zo(), R = Tr($);
      {
        var K = (_e) => {
          var Te = qo();
          let Mr;
          var ks = I(Te, !0);
          S(Te), ke(() => {
            Mr = lr(Te, 1, "svelte-64brx5", null, Mr, { banner: !0, errorBanner: c(v) === "error" }), be(ks, c(b));
          }), z(_e, Te);
        };
        st(R, (_e) => {
          c(b) && _e(K);
        });
      }
      var se = Y(R, 2), $e = I(se);
      {
        let _e = /* @__PURE__ */ ft(() => !!c(u) && c(u).type !== "dir");
        ps($e, {
          get mode() {
            return c(o);
          },
          get rawEnabled() {
            return c(H);
          },
          get breadcrumbs() {
            return c(ye);
          },
          get scale() {
            return c(d).scale;
          },
          get canOpen() {
            return c(_e);
          },
          onHome: () => {
            w("");
          },
          onOpen: () => {
            me();
          },
          onSetMode: F,
          onScale: ce,
          onCrumb: (Te) => {
            w(Te);
          }
        });
      }
      var ve = Y($e, 2), Re = I(ve);
      gs(Re, {
        get items() {
          return c(T);
        },
        get selectedName() {
          return c(C);
        },
        get mode() {
          return c(o);
        },
        get scale() {
          return c(d).scale;
        },
        onNavToIndex: M
      }), S(ve);
      var Hn = Y(ve, 2);
      kn(Hn, (_e, Te) => Wt == null ? void 0 : Wt(_e, Te), () => ({ axis: "y", onDelta: x, onDone: W })), S(se);
      var cr = Y(se, 2), dr = I(cr), bs = I(dr);
      ms(bs, {
        get mode() {
          return c(o);
        },
        get columns() {
          return c(l);
        },
        onItemClick: B
      }), S(dr);
      var Un = Y(dr, 2);
      kn(Un, (_e, Te) => Wt == null ? void 0 : Wt(_e, Te), () => ({ axis: "x", onDelta: U, onDone: W }));
      var ws = Y(Un, 2);
      {
        var xs = (_e) => {
          _s(_e, {
            get client() {
              return a;
            },
            get mode() {
              return c(o);
            },
            get activeItem() {
              return c(u);
            },
            get widthPx() {
              return c(d).previewWidth;
            },
            onToggle: X
          });
        }, ys = (_e) => {
          var Te = Fo(), Mr = I(Te);
          S(Te), De("click", Mr, X), z(_e, Te);
        };
        st(ws, (_e) => {
          c(h) ? _e(ys, -1) : _e(xs);
        });
      }
      S(cr), ke(() => zn(ve, `height:${c(d).coverHeight}px`)), z(_, $);
    };
    st(Ie, (_) => {
      c(v) === "loading" ? _(Ge) : c(v) === "auth_required" ? _(de, 1) : _(ue, -1);
    });
  }
  S(ge), z(e, ge), fr();
}
Cr(["click"]);
customElements.define("efsdb-explorer", Ir(Wo, {}, [], [], { mode: "open" }));
