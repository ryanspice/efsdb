var dl = Object.defineProperty;
var Hi = (e) => {
  throw TypeError(e);
};
var hl = (e, t, n) => t in e ? dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => hl(e, typeof t != "symbol" ? t + "" : t, n), vo = (e, t, n) => t.has(e) || Hi("Cannot " + n);
var w = (e, t, n) => (vo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => t.has(e) ? Hi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n, r) => (vo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), K = (e, t, n) => (vo(e, t, "access private method"), n);
var ha;
typeof window < "u" && ((ha = window.__svelte ?? (window.__svelte = {})).v ?? (ha.v = /* @__PURE__ */ new Set())).add("5");
const cl = 1, wl = 2, ua = 4, ul = 8, fl = 16, ml = 1, gl = 4, pl = 8, vl = 16, bl = 1, yl = 2, fa = "[", No = "[!", Fi = "[?", Ho = "]", Cn = {}, ve = Symbol(), ma = "http://www.w3.org/1999/xhtml", kl = !1;
var ga = Array.isArray, xl = Array.prototype.indexOf, An = Array.prototype.includes, Yr = Array.from, Wr = Object.keys, Lr = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, jl = Object.getOwnPropertyDescriptors, _l = Object.prototype, ql = Array.prototype, pa = Object.getPrototypeOf, Vi = Object.isExtensible;
const va = () => {
};
function Ml(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ba() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const ge = 2, In = 4, Zr = 8, ya = 1 << 24, Ut = 16, wt = 32, Ft = 64, jo = 128, Qe = 512, ce = 1024, je = 2048, vt = 4096, Ge = 8192, et = 16384, Yt = 32768, _o = 1 << 25, un = 65536, Gi = 1 << 17, Sl = 1 << 18, pn = 1 << 19, zl = 1 << 20, pt = 1 << 25, fn = 65536, qo = 1 << 21, Fo = 1 << 22, Dt = 1 << 23, nr = Symbol("$state"), ka = Symbol("legacy props"), Tl = Symbol(""), _t = new class extends Error {
  constructor() {
    super(...arguments);
    Q(this, "name", "StaleReactionError");
    Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var ca;
const Pl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((ca = globalThis.document) != null && ca.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Xr = 3, fr = 8;
function El(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Rl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $l(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Cl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Al() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Il(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ll(e) {
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
function Hl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Kr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let D = !1;
function Et(e) {
  D = e;
}
let W;
function Ae(e) {
  if (e === null)
    throw Kr(), Cn;
  return W = e;
}
function mr() {
  return Ae(/* @__PURE__ */ yt(W));
}
function N(e) {
  if (D) {
    if (/* @__PURE__ */ yt(W) !== null)
      throw Kr(), Cn;
    W = e;
  }
}
function Vl(e = 1) {
  if (D) {
    for (var t = e, n = W; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ yt(n);
    W = n;
  }
}
function Or(e = !0) {
  for (var t = 0, n = W; ; ) {
    if (n.nodeType === fr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ho) {
        if (t === 0) return n;
        t -= 1;
      } else (r === fa || r === No || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yt(n)
    );
    e && n.remove(), n = i;
  }
}
function xa(e) {
  if (!e || e.nodeType !== fr)
    throw Kr(), Cn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ja(e) {
  return e === this.v;
}
function Gl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _a(e) {
  return !Gl(e, this.v);
}
let Ul = !1, Ie = null;
function Bn(e) {
  Ie = e;
}
function Jr(e, t = !1, n) {
  Ie = {
    p: Ie,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      L
    ),
    l: null
  };
}
function Qr(e) {
  var t = (
    /** @type {ComponentContext} */
    Ie
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ka(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ie = t.p, e ?? /** @type {T} */
  {};
}
function qa() {
  return !0;
}
let tn = [];
function Ma() {
  var e = tn;
  tn = [], Ml(e);
}
function Nt(e) {
  if (tn.length === 0 && !rr) {
    var t = tn;
    queueMicrotask(() => {
      t === tn && Ma();
    });
  }
  tn.push(e);
}
function Yl() {
  for (; tn.length > 0; )
    Ma();
}
function Sa(e) {
  var t = L;
  if (t === null)
    return A.f |= Dt, e;
  if ((t.f & Yt) === 0 && (t.f & In) === 0)
    throw e;
  Ot(e, t);
}
function Ot(e, t) {
  for (; t !== null; ) {
    if ((t.f & jo) !== 0) {
      if ((t.f & Yt) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Zl = -7169;
function de(e, t) {
  e.f = e.f & Zl | t;
}
function Vo(e) {
  (e.f & Qe) !== 0 || e.deps === null ? de(e, ce) : de(e, vt);
}
function za(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & fn) === 0 || (t.f ^= fn, za(
        /** @type {Derived} */
        t.deps
      ));
}
function Ta(e, t, n) {
  (e.f & je) !== 0 ? t.add(e) : (e.f & vt) !== 0 && n.add(e), za(e.deps), de(e, ce);
}
let Pr = !1;
function Xl(e) {
  var t = Pr;
  try {
    return Pr = !1, [e(), Pr];
  } finally {
    Pr = t;
  }
}
const en = /* @__PURE__ */ new Set();
let B = null, be = null, Mo = null, rr = !1, bo = !1, qn = null, Rr = null;
var Ui = 0;
let Kl = 1;
var Sn, zn, Tn, Pn, sr, Ne, an, qt, Mt, En, _e, So, zo, To, Po, Pa;
const Hr = class Hr {
  constructor() {
    $(this, _e);
    // for debugging. TODO remove once async is stable
    Q(this, "id", Kl++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Q(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Q(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, Sn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, zn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, Tn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    $(this, Pn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, sr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    $(this, Ne, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, an, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, qt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, Mt, /* @__PURE__ */ new Map());
    Q(this, "is_fork", !1);
    $(this, En, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    w(this, Mt).has(t) || w(this, Mt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = w(this, Mt).get(t);
    if (n) {
      w(this, Mt).delete(t);
      for (var r of n.d)
        de(r, je), this.schedule(r);
      for (r of n.m)
        de(r, vt), this.schedule(r);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, n) {
    n !== ve && !this.previous.has(t) && this.previous.set(t, n), (t.f & Dt) === 0 && (this.current.set(t, t.v), be == null || be.set(t, t.v));
  }
  activate() {
    B = this;
  }
  deactivate() {
    B = null, be = null;
  }
  flush() {
    try {
      bo = !0, B = this, K(this, _e, zo).call(this);
    } finally {
      Ui = 0, Mo = null, qn = null, Rr = null, bo = !1, B = null, be = null, Ht.clear();
    }
  }
  discard() {
    for (const t of w(this, zn)) t(this);
    w(this, zn).clear(), en.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    E(this, Tn, w(this, Tn) + 1), t && E(this, Pn, w(this, Pn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n) {
    E(this, Tn, w(this, Tn) - 1), t && E(this, Pn, w(this, Pn) - 1), !(w(this, En) || n) && (E(this, En, !0), Nt(() => {
      E(this, En, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      w(this, an).add(r);
    for (const r of n)
      w(this, qt).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    w(this, Sn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    w(this, zn).add(t);
  }
  settled() {
    return (w(this, sr) ?? E(this, sr, ba())).promise;
  }
  static ensure() {
    if (B === null) {
      const t = B = new Hr();
      bo || (en.add(B), rr || Nt(() => {
        B === t && t.flush();
      }));
    }
    return B;
  }
  apply() {
    {
      be = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Mo = t, (i = t.b) != null && i.is_pending && (t.f & (In | Zr | ya)) !== 0 && (t.f & Yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (qn !== null && n === L && (A === null || (A.f & ge) === 0))
        return;
      if ((r & (Ft | wt)) !== 0) {
        if ((r & ce) === 0)
          return;
        n.f ^= ce;
      }
    }
    w(this, Ne).push(n);
  }
};
Sn = new WeakMap(), zn = new WeakMap(), Tn = new WeakMap(), Pn = new WeakMap(), sr = new WeakMap(), Ne = new WeakMap(), an = new WeakMap(), qt = new WeakMap(), Mt = new WeakMap(), En = new WeakMap(), _e = new WeakSet(), So = function() {
  return this.is_fork || w(this, Pn) > 0;
}, zo = function() {
  var l, d;
  if (Ui++ > 1e3 && (en.delete(this), Jl()), !K(this, _e, So).call(this)) {
    for (const c of w(this, an))
      w(this, qt).delete(c), de(c, je), this.schedule(c);
    for (const c of w(this, qt))
      de(c, vt), this.schedule(c);
  }
  const t = w(this, Ne);
  E(this, Ne, []), this.apply();
  var n = qn = [], r = [], i = Rr = [];
  for (const c of t)
    try {
      K(this, _e, To).call(this, c, n, r);
    } catch (u) {
      throw Ca(c), u;
    }
  if (B = null, i.length > 0) {
    var o = Hr.ensure();
    for (const c of i)
      o.schedule(c);
  }
  if (qn = null, Rr = null, K(this, _e, So).call(this)) {
    K(this, _e, Po).call(this, r), K(this, _e, Po).call(this, n);
    for (const [c, u] of w(this, Mt))
      $a(c, u);
  } else {
    w(this, Tn) === 0 && en.delete(this), w(this, an).clear(), w(this, qt).clear();
    for (const c of w(this, Sn)) c(this);
    w(this, Sn).clear(), Yi(r), Yi(n), (l = w(this, sr)) == null || l.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    B
  );
  if (w(this, Ne).length > 0) {
    const c = a ?? (a = this);
    w(c, Ne).push(...w(this, Ne).filter((u) => !w(c, Ne).includes(u)));
  }
  a !== null && (en.add(a), K(d = a, _e, zo).call(d)), en.has(this) || K(this, _e, Pa).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
To = function(t, n, r) {
  t.f ^= ce;
  for (var i = t.first; i !== null; ) {
    var o = i.f, a = (o & (wt | Ft)) !== 0, l = a && (o & ce) !== 0, d = l || (o & Ge) !== 0 || w(this, Mt).has(i);
    if (!d && i.fn !== null) {
      a ? i.f ^= ce : (o & In) !== 0 ? n.push(i) : gr(i) && ((o & Ut) !== 0 && w(this, qt).add(i), Ln(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var u = i.next;
      if (u !== null) {
        i = u;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Po = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ta(t[n], w(this, an), w(this, qt));
}, Pa = function() {
  var d;
  for (const c of en) {
    var t = c.id < this.id, n = [];
    for (const [u, g] of this.current) {
      if (c.current.has(u))
        if (t && g !== c.current.get(u))
          c.current.set(u, g);
        else
          continue;
      n.push(u);
    }
    var r = [...c.current.keys()].filter((u) => !this.current.has(u));
    if (r.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      c.activate();
      var i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var a of n)
        Ea(a, r, i, o);
      if (w(c, Ne).length > 0) {
        c.apply();
        for (var l of w(c, Ne))
          K(d = c, _e, To).call(d, l, [], []);
        E(c, Ne, []);
      }
      c.deactivate();
    }
  }
};
let Vt = Hr;
function q(e) {
  var t = rr;
  rr = !0;
  try {
    for (var n; ; ) {
      if (Yl(), B === null)
        return (
          /** @type {T} */
          n
        );
      B.flush();
    }
  } finally {
    rr = t;
  }
}
function Jl() {
  try {
    Bl();
  } catch (e) {
    Ot(e, Mo);
  }
}
let lt = null;
function Yi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (et | Ge)) === 0 && gr(r) && (lt = /* @__PURE__ */ new Set(), Ln(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qa(r), (lt == null ? void 0 : lt.size) > 0)) {
        Ht.clear();
        for (const i of lt) {
          if ((i.f & (et | Ge)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            lt.has(a) && (lt.delete(a), o.push(a)), a = a.parent;
          for (let l = o.length - 1; l >= 0; l--) {
            const d = o[l];
            (d.f & (et | Ge)) === 0 && Ln(d);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
function Ea(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & ge) !== 0 ? Ea(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (o & (Fo | Ut)) !== 0 && (o & je) === 0 && Ra(i, t, r) && (de(i, je), Go(
        /** @type {Effect} */
        i
      ));
    }
}
function Ra(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (An.call(t, i))
        return !0;
      if ((i.f & ge) !== 0 && Ra(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Go(e) {
  B.schedule(e);
}
function $a(e, t) {
  if (!((e.f & wt) !== 0 && (e.f & ce) !== 0)) {
    (e.f & je) !== 0 ? t.d.push(e) : (e.f & vt) !== 0 && t.m.push(e), de(e, ce);
    for (var n = e.first; n !== null; )
      $a(n, t), n = n.next;
  }
}
function Ca(e) {
  de(e, ce);
  for (var t = e.first; t !== null; )
    Ca(t), t = t.next;
}
function Ql(e) {
  let t = 0, n = mn(0), r;
  return () => {
    Ko() && (s(n), Qo(() => (t === 0 && (r = pr(() => e(() => or(n)))), t += 1, () => {
      Nt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, or(n));
      });
    })));
  };
}
var ed = un | pn;
function td(e, t, n, r) {
  new nd(e, t, n, r);
}
var He, lr, ft, sn, $e, mt, Fe, dt, St, ln, Wt, Rn, dr, hr, zt, Fr, ee, Aa, Ia, Ba, Eo, $r, Cr, Ro;
class nd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    $(this, ee);
    /** @type {Boundary | null} */
    Q(this, "parent");
    Q(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Q(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, He);
    /** @type {TemplateNode | null} */
    $(this, lr, D ? W : null);
    /** @type {BoundaryProps} */
    $(this, ft);
    /** @type {((anchor: Node) => void)} */
    $(this, sn);
    /** @type {Effect} */
    $(this, $e);
    /** @type {Effect | null} */
    $(this, mt, null);
    /** @type {Effect | null} */
    $(this, Fe, null);
    /** @type {Effect | null} */
    $(this, dt, null);
    /** @type {DocumentFragment | null} */
    $(this, St, null);
    $(this, ln, 0);
    $(this, Wt, 0);
    $(this, Rn, !1);
    /** @type {Set<Effect>} */
    $(this, dr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, hr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, zt, null);
    $(this, Fr, Ql(() => (E(this, zt, mn(w(this, ln))), () => {
      E(this, zt, null);
    })));
    var o;
    E(this, He, t), E(this, ft, n), E(this, sn, (a) => {
      var l = (
        /** @type {Effect} */
        L
      );
      l.b = this, l.f |= jo, r(a);
    }), this.parent = /** @type {Effect} */
    L.b, this.transform_error = i ?? ((o = this.parent) == null ? void 0 : o.transform_error) ?? ((a) => a), E(this, $e, to(() => {
      if (D) {
        const a = (
          /** @type {Comment} */
          w(this, lr)
        );
        mr();
        const l = a.data === No;
        if (a.data.startsWith(Fi)) {
          const c = JSON.parse(a.data.slice(Fi.length));
          K(this, ee, Ia).call(this, c);
        } else l ? K(this, ee, Ba).call(this) : K(this, ee, Aa).call(this);
      } else
        K(this, ee, Eo).call(this);
    }, ed)), D && E(this, He, W);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ta(t, w(this, dr), w(this, hr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!w(this, ft).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    K(this, ee, Ro).call(this, t, n), E(this, ln, w(this, ln) + t), !(!w(this, zt) || w(this, Rn)) && (E(this, Rn, !0), Nt(() => {
      E(this, Rn, !1), w(this, zt) && Wn(w(this, zt), w(this, ln));
    }));
  }
  get_effect_pending() {
    return w(this, Fr).call(this), s(
      /** @type {Source<number>} */
      w(this, zt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = w(this, ft).onerror;
    let r = w(this, ft).failed;
    if (!n && !r)
      throw t;
    w(this, mt) && (Pe(w(this, mt)), E(this, mt, null)), w(this, Fe) && (Pe(w(this, Fe)), E(this, Fe, null)), w(this, dt) && (Pe(w(this, dt)), E(this, dt, null)), D && (Ae(
      /** @type {TemplateNode} */
      w(this, lr)
    ), Vl(), Ae(Or()));
    var i = !1, o = !1;
    const a = () => {
      if (i) {
        Fl();
        return;
      }
      i = !0, o && Hl(), w(this, dt) !== null && cn(w(this, dt), () => {
        E(this, dt, null);
      }), K(this, ee, Cr).call(this, () => {
        K(this, ee, Eo).call(this);
      });
    }, l = (d) => {
      try {
        o = !0, n == null || n(d, a), o = !1;
      } catch (c) {
        Ot(c, w(this, $e) && w(this, $e).parent);
      }
      r && E(this, dt, K(this, ee, Cr).call(this, () => {
        try {
          return Je(() => {
            var c = (
              /** @type {Effect} */
              L
            );
            c.b = this, c.f |= jo, r(
              w(this, He),
              () => d,
              () => a
            );
          });
        } catch (c) {
          return Ot(
            c,
            /** @type {Effect} */
            w(this, $e).parent
          ), null;
        }
      }));
    };
    Nt(() => {
      var d;
      try {
        d = this.transform_error(t);
      } catch (c) {
        Ot(c, w(this, $e) && w(this, $e).parent);
        return;
      }
      d !== null && typeof d == "object" && typeof /** @type {any} */
      d.then == "function" ? d.then(
        l,
        /** @param {unknown} e */
        (c) => Ot(c, w(this, $e) && w(this, $e).parent)
      ) : l(d);
    });
  }
}
He = new WeakMap(), lr = new WeakMap(), ft = new WeakMap(), sn = new WeakMap(), $e = new WeakMap(), mt = new WeakMap(), Fe = new WeakMap(), dt = new WeakMap(), St = new WeakMap(), ln = new WeakMap(), Wt = new WeakMap(), Rn = new WeakMap(), dr = new WeakMap(), hr = new WeakMap(), zt = new WeakMap(), Fr = new WeakMap(), ee = new WeakSet(), Aa = function() {
  try {
    E(this, mt, Je(() => w(this, sn).call(this, w(this, He))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ia = function(t) {
  const n = w(this, ft).failed;
  n && E(this, dt, Je(() => {
    n(
      w(this, He),
      () => t,
      () => () => {
      }
    );
  }));
}, Ba = function() {
  const t = w(this, ft).pending;
  t && (this.is_pending = !0, E(this, Fe, Je(() => t(w(this, He)))), Nt(() => {
    var n = E(this, St, document.createDocumentFragment()), r = tt();
    n.append(r), E(this, mt, K(this, ee, Cr).call(this, () => Je(() => w(this, sn).call(this, r)))), w(this, Wt) === 0 && (w(this, He).before(n), E(this, St, null), cn(
      /** @type {Effect} */
      w(this, Fe),
      () => {
        E(this, Fe, null);
      }
    ), K(this, ee, $r).call(
      this,
      /** @type {Batch} */
      B
    ));
  }));
}, Eo = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Wt, 0), E(this, ln, 0), E(this, mt, Je(() => {
      w(this, sn).call(this, w(this, He));
    })), w(this, Wt) > 0) {
      var t = E(this, St, document.createDocumentFragment());
      ni(w(this, mt), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        w(this, ft).pending
      );
      E(this, Fe, Je(() => n(w(this, He))));
    } else
      K(this, ee, $r).call(
        this,
        /** @type {Batch} */
        B
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
$r = function(t) {
  this.is_pending = !1, t.transfer_effects(w(this, dr), w(this, hr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Cr = function(t) {
  var n = L, r = A, i = Ie;
  bt(w(this, $e)), rt(w(this, $e)), Bn(w(this, $e).ctx);
  try {
    return Vt.ensure(), t();
  } catch (o) {
    return Sa(o), null;
  } finally {
    bt(n), rt(r), Bn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ro = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && K(r = this.parent, ee, Ro).call(r, t, n);
    return;
  }
  E(this, Wt, w(this, Wt) + t), w(this, Wt) === 0 && (K(this, ee, $r).call(this, n), w(this, Fe) && cn(w(this, Fe), () => {
    E(this, Fe, null);
  }), w(this, St) && (w(this, He).before(w(this, St)), E(this, St, null)));
};
function rd(e, t, n, r) {
  const i = eo;
  var o = e.filter((f) => !f.settled);
  if (n.length === 0 && o.length === 0) {
    r(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    L
  ), l = od(), d = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((f) => f.promise)) : null;
  function c(f) {
    l();
    try {
      r(f);
    } catch (b) {
      (a.f & et) === 0 && Ot(b, a);
    }
    Dr();
  }
  if (n.length === 0) {
    d.then(() => c(t.map(i)));
    return;
  }
  var u = Wa();
  function g() {
    Promise.all(n.map((f) => /* @__PURE__ */ id(f))).then((f) => c([...t.map(i), ...f])).catch((f) => Ot(f, a)).finally(() => u());
  }
  d ? d.then(() => {
    l(), g(), Dr();
  }) : g();
}
function od() {
  var e = (
    /** @type {Effect} */
    L
  ), t = A, n = Ie, r = (
    /** @type {Batch} */
    B
  );
  return function(o = !0) {
    bt(e), rt(t), Bn(n), o && (e.f & et) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Dr(e = !0) {
  bt(null), rt(null), Bn(null), e && (B == null || B.deactivate());
}
function Wa() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    L.b
  ), t = (
    /** @type {Batch} */
    B
  ), n = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  var t = ge | je, n = A !== null && (A.f & ge) !== 0 ? (
    /** @type {Derived} */
    A
  ) : null;
  return L !== null && (L.f |= pn), {
    ctx: Ie,
    deps: null,
    effects: null,
    equals: ja,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ve
    ),
    wv: 0,
    parent: n ?? L,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function id(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    L
  );
  r === null && Rl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = mn(
    /** @type {V} */
    ve
  ), a = !A, l = /* @__PURE__ */ new Map();
  return fd(() => {
    var b;
    var d = (
      /** @type {Effect} */
      L
    ), c = ba();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(Dr);
    } catch (p) {
      c.reject(p), Dr();
    }
    var u = (
      /** @type {Batch} */
      B
    );
    if (a) {
      if ((d.f & Yt) !== 0)
        var g = Wa();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (b = l.get(u)) == null || b.reject(_t), l.delete(u);
      else {
        for (const p of l.values())
          p.reject(_t);
        l.clear();
      }
      l.set(u, c);
    }
    const f = (p, S = void 0) => {
      if (g) {
        var v = S === _t;
        g(v);
      }
      if (!(S === _t || (d.f & et) !== 0)) {
        if (u.activate(), S)
          o.f |= Dt, Wn(o, S);
        else {
          (o.f & Dt) !== 0 && (o.f ^= Dt), Wn(o, p);
          for (const [_, O] of l) {
            if (l.delete(_), _ === u) break;
            O.reject(_t);
          }
        }
        u.deactivate();
      }
    };
    c.promise.then(f, (p) => f(null, p || "unknown"));
  }), Xa(() => {
    for (const d of l.values())
      d.reject(_t);
  }), new Promise((d) => {
    function c(u) {
      function g() {
        u === i ? d(o) : c(i);
      }
      u.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function R(e) {
  const t = /* @__PURE__ */ eo(e);
  return ns(t), t;
}
// @__NO_SIDE_EFFECTS__
function La(e) {
  const t = /* @__PURE__ */ eo(e);
  return t.equals = _a, t;
}
function ad(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Pe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function sd(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & et) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Uo(e) {
  var t, n = L;
  bt(sd(e));
  try {
    e.f &= ~fn, ad(e), t = as(e);
  } finally {
    bt(n);
  }
  return t;
}
function Oa(e) {
  var t = e.v, n = Uo(e);
  if (!e.equals(n) && (e.wv = os(), (!(B != null && B.is_fork) || e.deps === null) && (e.v = n, B == null || B.capture(e, t), e.deps === null))) {
    de(e, ce);
    return;
  }
  Gt || (be !== null ? (Ko() || B != null && B.is_fork) && be.set(e, n) : Vo(e));
}
function ld(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(_t), r.teardown = va, r.ac = null, ar(r, 0), ei(r));
}
function Da(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ln(t);
}
let $o = /* @__PURE__ */ new Set();
const Ht = /* @__PURE__ */ new Map();
let Na = !1;
function mn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ja,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  const n = mn(e);
  return ns(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t = !1, n = !0) {
  const r = mn(e);
  return t || (r.equals = _a), r;
}
function I(e, t, n = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ct || (A.f & Gi) !== 0) && qa() && (A.f & (ge | Ut | Fo | Gi)) !== 0 && (nt === null || !An.call(nt, e)) && Nl();
  let r = n ? nn(t) : t;
  return Wn(e, r, Rr);
}
function Wn(e, t, n = null) {
  if (!e.equals(t)) {
    var r = e.v;
    Gt ? Ht.set(e, t) : Ht.set(e, r), e.v = t;
    var i = Vt.ensure();
    if (i.capture(e, r), (e.f & ge) !== 0) {
      const o = (
        /** @type {Derived} */
        e
      );
      (e.f & je) !== 0 && Uo(o), be === null && Vo(o);
    }
    e.wv = os(), Fa(e, je, n), L !== null && (L.f & ce) !== 0 && (L.f & (wt | Ft)) === 0 && (Xe === null ? pd([e]) : Xe.push(e)), !i.is_fork && $o.size > 0 && !Na && dd();
  }
  return t;
}
function dd() {
  Na = !1;
  for (const e of $o)
    (e.f & ce) !== 0 && de(e, vt), gr(e) && Ln(e);
  $o.clear();
}
function or(e) {
  I(e, e.v + 1);
}
function Fa(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var a = r[o], l = a.f, d = (l & je) === 0;
      if (d && de(a, t), (l & ge) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        be == null || be.delete(c), (l & fn) === 0 && (l & Qe && (a.f |= fn), Fa(c, vt, n));
      } else if (d) {
        var u = (
          /** @type {Effect} */
          a
        );
        (l & Ut) !== 0 && lt !== null && lt.add(u), n !== null ? n.push(u) : Go(u);
      }
    }
}
function nn(e) {
  if (typeof e != "object" || e === null || nr in e)
    return e;
  const t = pa(e);
  if (t !== _l && t !== ql)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ga(e), i = /* @__PURE__ */ ie(0), o = wn, a = (l) => {
    if (wn === o)
      return l();
    var d = A, c = wn;
    rt(null), Ki(o);
    var u = l();
    return rt(d), Ki(c), u;
  };
  return r && n.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, d, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ol();
        var u = n.get(d);
        return u === void 0 ? a(() => {
          var g = /* @__PURE__ */ ie(c.value);
          return n.set(d, g), g;
        }) : I(u, c.value, !0), !0;
      },
      deleteProperty(l, d) {
        var c = n.get(d);
        if (c === void 0) {
          if (d in l) {
            const u = a(() => /* @__PURE__ */ ie(ve));
            n.set(d, u), or(i);
          }
        } else
          I(c, ve), or(i);
        return !0;
      },
      get(l, d, c) {
        var b;
        if (d === nr)
          return e;
        var u = n.get(d), g = d in l;
        if (u === void 0 && (!g || (b = hn(l, d)) != null && b.writable) && (u = a(() => {
          var p = nn(g ? l[d] : ve), S = /* @__PURE__ */ ie(p);
          return S;
        }), n.set(d, u)), u !== void 0) {
          var f = s(u);
          return f === ve ? void 0 : f;
        }
        return Reflect.get(l, d, c);
      },
      getOwnPropertyDescriptor(l, d) {
        var c = Reflect.getOwnPropertyDescriptor(l, d);
        if (c && "value" in c) {
          var u = n.get(d);
          u && (c.value = s(u));
        } else if (c === void 0) {
          var g = n.get(d), f = g == null ? void 0 : g.v;
          if (g !== void 0 && f !== ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(l, d) {
        var f;
        if (d === nr)
          return !0;
        var c = n.get(d), u = c !== void 0 && c.v !== ve || Reflect.has(l, d);
        if (c !== void 0 || L !== null && (!u || (f = hn(l, d)) != null && f.writable)) {
          c === void 0 && (c = a(() => {
            var b = u ? nn(l[d]) : ve, p = /* @__PURE__ */ ie(b);
            return p;
          }), n.set(d, c));
          var g = s(c);
          if (g === ve)
            return !1;
        }
        return u;
      },
      set(l, d, c, u) {
        var z;
        var g = n.get(d), f = d in l;
        if (r && d === "length")
          for (var b = c; b < /** @type {Source<number>} */
          g.v; b += 1) {
            var p = n.get(b + "");
            p !== void 0 ? I(p, ve) : b in l && (p = a(() => /* @__PURE__ */ ie(ve)), n.set(b + "", p));
          }
        if (g === void 0)
          (!f || (z = hn(l, d)) != null && z.writable) && (g = a(() => /* @__PURE__ */ ie(void 0)), I(g, nn(c)), n.set(d, g));
        else {
          f = g.v !== ve;
          var S = a(() => nn(c));
          I(g, S);
        }
        var v = Reflect.getOwnPropertyDescriptor(l, d);
        if (v != null && v.set && v.set.call(u, c), !f) {
          if (r && typeof d == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(d);
            Number.isInteger(O) && O >= _.v && I(_, O + 1);
          }
          or(i);
        }
        return !0;
      },
      ownKeys(l) {
        s(i);
        var d = Reflect.ownKeys(l).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== ve;
        });
        for (var [c, u] of n)
          u.v !== ve && !(c in l) && d.push(c);
        return d;
      },
      setPrototypeOf() {
        Dl();
      }
    }
  );
}
var Zi, Va, Ga, Ua;
function Co() {
  if (Zi === void 0) {
    Zi = window, Va = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ga = hn(t, "firstChild").get, Ua = hn(t, "nextSibling").get, Vi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Vi(n) && (n.__t = void 0);
  }
}
function tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ga.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ua.call(e)
  );
}
function F(e, t) {
  if (!D)
    return /* @__PURE__ */ gn(e);
  var n = /* @__PURE__ */ gn(W);
  if (n === null)
    n = W.appendChild(tt());
  else if (t && n.nodeType !== Xr) {
    var r = tt();
    return n == null || n.before(r), Ae(r), r;
  }
  return t && Zo(
    /** @type {Text} */
    n
  ), Ae(n), n;
}
function er(e, t = !1) {
  if (!D) {
    var n = /* @__PURE__ */ gn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yt(n) : n;
  }
  if (t) {
    if ((W == null ? void 0 : W.nodeType) !== Xr) {
      var r = tt();
      return W == null || W.before(r), Ae(r), r;
    }
    Zo(
      /** @type {Text} */
      W
    );
  }
  return W;
}
function fe(e, t = 1, n = !1) {
  let r = D ? W : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ yt(r);
  if (!D)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Xr) {
      var o = tt();
      return r === null ? i == null || i.after(o) : r.before(o), Ae(o), o;
    }
    Zo(
      /** @type {Text} */
      r
    );
  }
  return Ae(r), r;
}
function Ya(e) {
  e.textContent = "";
}
function Za() {
  return !1;
}
function Yo(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ma, e, void 0)
  );
}
function Zo(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Xr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Xo(e) {
  var t = A, n = L;
  rt(null), bt(null);
  try {
    return e();
  } finally {
    rt(t), bt(n);
  }
}
function hd(e) {
  L === null && (A === null && Il(), Al()), Gt && Cl();
}
function cd(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function kt(e, t) {
  var n = L;
  n !== null && (n.f & Ge) !== 0 && (e |= Ge);
  var r = {
    ctx: Ie,
    deps: null,
    nodes: null,
    f: e | je | Qe,
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
  }, i = r;
  if ((e & In) !== 0)
    qn !== null ? qn.push(r) : Vt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Ln(r);
    } catch (a) {
      throw Pe(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & pn) === 0 && (i = i.first, (e & Ut) !== 0 && (e & un) !== 0 && i !== null && (i.f |= un));
  }
  if (i !== null && (i.parent = n, n !== null && cd(i, n), A !== null && (A.f & ge) !== 0 && (e & Ft) === 0)) {
    var o = (
      /** @type {Derived} */
      A
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return r;
}
function Ko() {
  return A !== null && !ct;
}
function Xa(e) {
  const t = kt(Zr, null);
  return de(t, ce), t.teardown = e, t;
}
function Ao(e) {
  hd();
  var t = (
    /** @type {Effect} */
    L.f
  ), n = !A && (t & wt) !== 0 && (t & Yt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ie
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ka(e);
}
function Ka(e) {
  return kt(In | zl, e);
}
function wd(e) {
  Vt.ensure();
  const t = kt(Ft | pn, e);
  return () => {
    Pe(t);
  };
}
function ud(e) {
  Vt.ensure();
  const t = kt(Ft | pn, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? cn(t, () => {
      Pe(t), r(void 0);
    }) : (Pe(t), r(void 0));
  });
}
function Jo(e) {
  return kt(In, e);
}
function fd(e) {
  return kt(Fo | pn, e);
}
function Qo(e, t = 0) {
  return kt(Zr | t, e);
}
function Se(e, t = [], n = [], r = []) {
  rd(r, t, n, (i) => {
    kt(Zr, () => e(...i.map(s)));
  });
}
function to(e, t = 0) {
  var n = kt(Ut | t, e);
  return n;
}
function Je(e) {
  return kt(wt | pn, e);
}
function Ja(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Gt, r = A;
    Xi(!0), rt(null);
    try {
      t.call(null);
    } finally {
      Xi(n), rt(r);
    }
  }
}
function ei(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Xo(() => {
      i.abort(_t);
    });
    var r = n.next;
    (n.f & Ft) !== 0 ? n.parent = null : Pe(n, t), n = r;
  }
}
function md(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & wt) === 0 && Pe(t), t = n;
  }
}
function Pe(e, t = !0) {
  var n = !1;
  (t || (e.f & Sl) !== 0) && e.nodes !== null && e.nodes.end !== null && (gd(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), de(e, _o), ei(e, t && !n), ar(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const o of r)
      o.stop();
  Ja(e), e.f ^= _o, e.f |= et;
  var i = e.parent;
  i !== null && i.first !== null && Qa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function gd(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ yt(e);
    e.remove(), e = n;
  }
}
function Qa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function cn(e, t, n = !0) {
  var r = [];
  es(e, r, !0);
  var i = () => {
    n && Pe(e), t && t();
  }, o = r.length;
  if (o > 0) {
    var a = () => --o || i();
    for (var l of r)
      l.out(a);
  } else
    i();
}
function es(e, t, n) {
  if ((e.f & Ge) === 0) {
    e.f ^= Ge;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var o = i.next, a = (i.f & un) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & wt) !== 0 && (e.f & Ut) !== 0;
      es(i, t, a ? n : !1), i = o;
    }
  }
}
function ti(e) {
  ts(e, !0);
}
function ts(e, t) {
  if ((e.f & Ge) !== 0) {
    e.f ^= Ge, (e.f & ce) === 0 && (de(e, je), Vt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & un) !== 0 || (n.f & wt) !== 0;
      ts(n, i ? t : !1), n = r;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const a of o)
        (a.is_global || t) && a.in();
  }
}
function ni(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ yt(n);
      t.append(n), n = i;
    }
}
let Ar = !1, Gt = !1;
function Xi(e) {
  Gt = e;
}
let A = null, ct = !1;
function rt(e) {
  A = e;
}
let L = null;
function bt(e) {
  L = e;
}
let nt = null;
function ns(e) {
  A !== null && (nt === null ? nt = [e] : nt.push(e));
}
let Ce = null, De = 0, Xe = null;
function pd(e) {
  Xe = e;
}
let rs = 1, rn = 0, wn = rn;
function Ki(e) {
  wn = e;
}
function os() {
  return ++rs;
}
function gr(e) {
  var t = e.f;
  if ((t & je) !== 0)
    return !0;
  if (t & ge && (e.f &= ~fn), (t & vt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var o = n[i];
      if (gr(
        /** @type {Derived} */
        o
      ) && Oa(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & Qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && de(e, ce);
  }
  return !1;
}
function is(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(nt !== null && An.call(nt, e)))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & ge) !== 0 ? is(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (n ? de(o, je) : (o.f & ce) !== 0 && de(o, vt), Go(
        /** @type {Effect} */
        o
      ));
    }
}
function as(e) {
  var S;
  var t = Ce, n = De, r = Xe, i = A, o = nt, a = Ie, l = ct, d = wn, c = e.f;
  Ce = /** @type {null | Value[]} */
  null, De = 0, Xe = null, A = (c & (wt | Ft)) === 0 ? e : null, nt = null, Bn(e.ctx), ct = !1, wn = ++rn, e.ac !== null && (Xo(() => {
    e.ac.abort(_t);
  }), e.ac = null);
  try {
    e.f |= qo;
    var u = (
      /** @type {Function} */
      e.fn
    ), g = u();
    e.f |= Yt;
    var f = e.deps, b = B == null ? void 0 : B.is_fork;
    if (Ce !== null) {
      var p;
      if (b || ar(e, De), f !== null && De > 0)
        for (f.length = De + Ce.length, p = 0; p < Ce.length; p++)
          f[De + p] = Ce[p];
      else
        e.deps = f = Ce;
      if (Ko() && (e.f & Qe) !== 0)
        for (p = De; p < f.length; p++)
          ((S = f[p]).reactions ?? (S.reactions = [])).push(e);
    } else !b && f !== null && De < f.length && (ar(e, De), f.length = De);
    if (qa() && Xe !== null && !ct && f !== null && (e.f & (ge | vt | je)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Xe.length; p++)
        is(
          Xe[p],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rn++, i.deps !== null)
        for (let v = 0; v < n; v += 1)
          i.deps[v].rv = rn;
      if (t !== null)
        for (const v of t)
          v.rv = rn;
      Xe !== null && (r === null ? r = Xe : r.push(.../** @type {Source[]} */
      Xe));
    }
    return (e.f & Dt) !== 0 && (e.f ^= Dt), g;
  } catch (v) {
    return Sa(v);
  } finally {
    e.f ^= qo, Ce = t, De = n, Xe = r, A = i, nt = o, Bn(a), ct = l, wn = d;
  }
}
function vd(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = xl.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !An.call(Ce, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & Qe) !== 0 && (o.f ^= Qe, o.f &= ~fn), Vo(o), ld(o), ar(o, 0);
  }
}
function ar(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      vd(e, n[r]);
}
function Ln(e) {
  var t = e.f;
  if ((t & et) === 0) {
    de(e, ce);
    var n = L, r = Ar;
    L = e, Ar = !0;
    try {
      (t & (Ut | ya)) !== 0 ? md(e) : ei(e), Ja(e);
      var i = as(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = rs;
      var o;
      kl && Ul && (e.f & je) !== 0 && e.deps;
    } finally {
      Ar = r, L = n;
    }
  }
}
function s(e) {
  var t = e.f, n = (t & ge) !== 0;
  if (A !== null && !ct) {
    var r = L !== null && (L.f & et) !== 0;
    if (!r && (nt === null || !An.call(nt, e))) {
      var i = A.deps;
      if ((A.f & qo) !== 0)
        e.rv < rn && (e.rv = rn, Ce === null && i !== null && i[De] === e ? De++ : Ce === null ? Ce = [e] : Ce.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [A] : An.call(o, A) || o.push(A);
      }
    }
  }
  if (Gt && Ht.has(e))
    return Ht.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Gt) {
      var l = a.v;
      return ((a.f & ce) === 0 && a.reactions !== null || ls(a)) && (l = Uo(a)), Ht.set(a, l), l;
    }
    var d = (a.f & Qe) === 0 && !ct && A !== null && (Ar || (A.f & Qe) !== 0), c = (a.f & Yt) === 0;
    gr(a) && (d && (a.f |= Qe), Oa(a)), d && !c && (Da(a), ss(a));
  }
  if (be != null && be.has(e))
    return be.get(e);
  if ((e.f & Dt) !== 0)
    throw e.v;
  return e.v;
}
function ss(e) {
  if (e.f |= Qe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & Qe) === 0 && (Da(
        /** @type {Derived} */
        t
      ), ss(
        /** @type {Derived} */
        t
      ));
}
function ls(e) {
  if (e.v === ve) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ht.has(t) || (t.f & ge) !== 0 && ls(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pr(e) {
  var t = ct;
  try {
    return ct = !0, e();
  } finally {
    ct = t;
  }
}
const on = Symbol("events"), ds = /* @__PURE__ */ new Set(), Io = /* @__PURE__ */ new Set();
function bd(e, t, n, r = {}) {
  function i(o) {
    if (r.capture || Bo.call(t, o), !o.cancelBubble)
      return Xo(() => n == null ? void 0 : n.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Nt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function yd(e, t, n, r, i) {
  var o = { capture: r, passive: i }, a = bd(e, t, n, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Xa(() => {
    t.removeEventListener(e, a, o);
  });
}
function Re(e, t, n) {
  (t[on] ?? (t[on] = {}))[e] = n;
}
function kd(e) {
  for (var t = 0; t < e.length; t++)
    ds.add(e[t]);
  for (var n of Io)
    n(e);
}
let Ji = null;
function Bo(e) {
  var v, _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ji = e;
  var a = 0, l = Ji === e && e[on];
  if (l) {
    var d = i.indexOf(l);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[on] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    d <= c && (a = d);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    Lr(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var u = A, g = L;
    rt(null), bt(null);
    try {
      for (var f, b = []; o !== null; ) {
        var p = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var S = (_ = o[on]) == null ? void 0 : _[r];
          S != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && S.call(o, e);
        } catch (O) {
          f ? b.push(O) : f = O;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        o = p;
      }
      if (f) {
        for (let O of b)
          queueMicrotask(() => {
            throw O;
          });
        throw f;
      }
    } finally {
      e[on] = t, delete e.currentTarget, rt(u), bt(g);
    }
  }
}
var wa;
const yo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((wa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : wa.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function xd(e) {
  return (
    /** @type {string} */
    (yo == null ? void 0 : yo.createHTML(e)) ?? e
  );
}
function jd(e) {
  var t = Yo("template");
  return t.innerHTML = xd(e.replaceAll("<!>", "<!---->")), t.content;
}
function Mn(e, t) {
  var n = (
    /** @type {Effect} */
    L
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  var n = (t & bl) !== 0, r = (t & yl) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (D)
      return Mn(W, null), W;
    i === void 0 && (i = jd(o ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ gn(i)));
    var a = (
      /** @type {TemplateNode} */
      r || Va ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gn(a)
      ), d = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Mn(l, d);
    } else
      Mn(a, a);
    return a;
  };
}
function hs() {
  if (D)
    return Mn(W, null), W;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = tt();
  return e.append(t, n), Mn(t, n), e;
}
function le(e, t) {
  if (D) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      L
    );
    ((n.f & Yt) === 0 || n.nodes.end === null) && (n.nodes.end = W), mr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const _d = ["touchstart", "touchmove"];
function qd(e) {
  return _d.includes(e);
}
function Jn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function cs(e, t) {
  return ws(e, t);
}
function Md(e, t) {
  Co(), t.intro = t.intro ?? !1;
  const n = t.target, r = D, i = W;
  try {
    for (var o = /* @__PURE__ */ gn(n); o && (o.nodeType !== fr || /** @type {Comment} */
    o.data !== fa); )
      o = /* @__PURE__ */ yt(o);
    if (!o)
      throw Cn;
    Et(!0), Ae(
      /** @type {Comment} */
      o
    );
    const a = ws(e, { ...t, anchor: o });
    return Et(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Cn && console.warn("Failed to hydrate: ", a), t.recover === !1 && Wl(), Co(), Ya(n), Et(!1), cs(e, t);
  } finally {
    Et(r), Ae(i);
  }
}
const Er = /* @__PURE__ */ new Map();
function ws(e, { target: t, anchor: n, props: r = {}, events: i, context: o, intro: a = !0, transformError: l }) {
  Co();
  var d = void 0, c = ud(() => {
    var u = n ?? t.appendChild(tt());
    td(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (b) => {
        Jr({});
        var p = (
          /** @type {ComponentContext} */
          Ie
        );
        if (o && (p.c = o), i && (r.$$events = i), D && Mn(
          /** @type {TemplateNode} */
          b,
          null
        ), d = e(b, r) || {}, D && (L.nodes.end = W, W === null || W.nodeType !== fr || /** @type {Comment} */
        W.data !== Ho))
          throw Kr(), Cn;
        Qr();
      },
      l
    );
    var g = /* @__PURE__ */ new Set(), f = (b) => {
      for (var p = 0; p < b.length; p++) {
        var S = b[p];
        if (!g.has(S)) {
          g.add(S);
          var v = qd(S);
          for (const z of [t, document]) {
            var _ = Er.get(z);
            _ === void 0 && (_ = /* @__PURE__ */ new Map(), Er.set(z, _));
            var O = _.get(S);
            O === void 0 ? (z.addEventListener(S, Bo, { passive: v }), _.set(S, 1)) : _.set(S, O + 1);
          }
        }
      }
    };
    return f(Yr(ds)), Io.add(f), () => {
      var v;
      for (var b of g)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Er.get(_)
          ), S = (
            /** @type {number} */
            p.get(b)
          );
          --S == 0 ? (_.removeEventListener(b, Bo), p.delete(b), p.size === 0 && Er.delete(_)) : p.set(b, S);
        }
      Io.delete(f), u !== n && ((v = u.parentNode) == null || v.removeChild(u));
    };
  });
  return Wo.set(d, c), d;
}
let Wo = /* @__PURE__ */ new WeakMap();
function Sd(e, t) {
  const n = Wo.get(e);
  return n ? (Wo.delete(e), n(t)) : Promise.resolve();
}
var ht, gt, Ve, dn, cr, wr, Vr;
class us {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Q(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, ht, /* @__PURE__ */ new Map());
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
    $(this, gt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, dn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, cr, !0);
    /**
     * @param {Batch} batch
     */
    $(this, wr, (t) => {
      if (w(this, ht).has(t)) {
        var n = (
          /** @type {Key} */
          w(this, ht).get(t)
        ), r = w(this, gt).get(n);
        if (r)
          ti(r), w(this, dn).delete(n);
        else {
          var i = w(this, Ve).get(n);
          i && (w(this, gt).set(n, i.effect), w(this, Ve).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [o, a] of w(this, ht)) {
          if (w(this, ht).delete(o), o === t)
            break;
          const l = w(this, Ve).get(a);
          l && (Pe(l.effect), w(this, Ve).delete(a));
        }
        for (const [o, a] of w(this, gt)) {
          if (o === n || w(this, dn).has(o)) continue;
          const l = () => {
            if (Array.from(w(this, ht).values()).includes(o)) {
              var c = document.createDocumentFragment();
              ni(a, c), c.append(tt()), w(this, Ve).set(o, { effect: a, fragment: c });
            } else
              Pe(a);
            w(this, dn).delete(o), w(this, gt).delete(o);
          };
          w(this, cr) || !r ? (w(this, dn).add(o), cn(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, Vr, (t) => {
      w(this, ht).delete(t);
      const n = Array.from(w(this, ht).values());
      for (const [r, i] of w(this, Ve))
        n.includes(r) || (Pe(i.effect), w(this, Ve).delete(r));
    });
    this.anchor = t, E(this, cr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      B
    ), i = Za();
    if (n && !w(this, gt).has(t) && !w(this, Ve).has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = tt();
        o.append(a), w(this, Ve).set(t, {
          effect: Je(() => n(a)),
          fragment: o
        });
      } else
        w(this, gt).set(
          t,
          Je(() => n(this.anchor))
        );
    if (w(this, ht).set(r, t), i) {
      for (const [l, d] of w(this, gt))
        l === t ? r.unskip_effect(d) : r.skip_effect(d);
      for (const [l, d] of w(this, Ve))
        l === t ? r.unskip_effect(d.effect) : r.skip_effect(d.effect);
      r.oncommit(w(this, wr)), r.ondiscard(w(this, Vr));
    } else
      D && (this.anchor = W), w(this, wr).call(this, r);
  }
}
ht = new WeakMap(), gt = new WeakMap(), Ve = new WeakMap(), dn = new WeakMap(), cr = new WeakMap(), wr = new WeakMap(), Vr = new WeakMap();
function zd(e, t, ...n) {
  var r = new us(e);
  to(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((o) => i(o, ...n)));
  }, un);
}
function Td(e) {
  Ie === null && El(), Ao(() => {
    const t = pr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function me(e, t, n = !1) {
  var r;
  D && (r = W, mr());
  var i = new us(e), o = n ? un : 0;
  function a(l, d) {
    if (D) {
      var c = xa(
        /** @type {TemplateNode} */
        r
      );
      if (l !== parseInt(c.substring(1))) {
        var u = Or();
        Ae(u), i.anchor = u, Et(!1), i.ensure(l, d), Et(!0);
        return;
      }
    }
    i.ensure(l, d);
  }
  to(() => {
    var l = !1;
    t((d, c = 0) => {
      l = !0, a(c, d);
    }), l || a(-1, null);
  }, o);
}
function Pd(e, t, n) {
  for (var r = [], i = t.length, o, a = t.length, l = 0; l < i; l++) {
    let g = t[l];
    cn(
      g,
      () => {
        if (o) {
          if (o.pending.delete(g), o.done.add(g), o.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Lo(e, Yr(o.done)), f.delete(o), f.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var d = r.length === 0 && n !== null;
    if (d) {
      var c = (
        /** @type {Element} */
        n
      ), u = (
        /** @type {Element} */
        c.parentNode
      );
      Ya(u), u.append(c), e.items.clear();
    }
    Lo(e, t, !d);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Lo(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const l of a)
        r.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    if (r != null && r.has(o)) {
      o.f |= pt;
      const a = document.createDocumentFragment();
      ni(o, a);
    } else
      Pe(t[i], n);
  }
}
var Qi;
function ea(e, t, n, r, i, o = null) {
  var a = e, l = /* @__PURE__ */ new Map(), d = (t & ua) !== 0;
  if (d) {
    var c = (
      /** @type {Element} */
      e
    );
    a = D ? Ae(/* @__PURE__ */ gn(c)) : c.appendChild(tt());
  }
  D && mr();
  var u = null, g = /* @__PURE__ */ La(() => {
    var z = n();
    return ga(z) ? z : z == null ? [] : Yr(z);
  }), f, b = /* @__PURE__ */ new Map(), p = !0;
  function S(z) {
    (O.effect.f & et) === 0 && (O.pending.delete(z), O.fallback = u, Ed(O, f, a, t, r), u !== null && (f.length === 0 ? (u.f & pt) === 0 ? ti(u) : (u.f ^= pt, tr(u, null, a)) : cn(u, () => {
      u = null;
    })));
  }
  function v(z) {
    O.pending.delete(z);
  }
  var _ = to(() => {
    f = /** @type {V[]} */
    s(g);
    var z = f.length;
    let j = !1;
    if (D) {
      var we = xa(a) === No;
      we !== (z === 0) && (a = Or(), Ae(a), Et(!1), j = !0);
    }
    for (var ke = /* @__PURE__ */ new Set(), te = (
      /** @type {Batch} */
      B
    ), Y = Za(), pe = 0; pe < z; pe += 1) {
      D && W.nodeType === fr && /** @type {Comment} */
      W.data === Ho && (a = /** @type {Comment} */
      W, j = !0, Et(!1));
      var he = f[pe], ue = r(he, pe), H = p ? null : l.get(ue);
      H ? (H.v && Wn(H.v, he), H.i && Wn(H.i, pe), Y && te.unskip_effect(H.e)) : (H = Rd(
        l,
        p ? a : Qi ?? (Qi = tt()),
        he,
        ue,
        pe,
        i,
        t,
        n
      ), p || (H.e.f |= pt), l.set(ue, H)), ke.add(ue);
    }
    if (z === 0 && o && !u && (p ? u = Je(() => o(a)) : (u = Je(() => o(Qi ?? (Qi = tt()))), u.f |= pt)), z > ke.size && $l(), D && z > 0 && Ae(Or()), !p)
      if (b.set(te, ke), Y) {
        for (const [ot, it] of l)
          ke.has(ot) || te.skip_effect(it.e);
        te.oncommit(S), te.ondiscard(v);
      } else
        S(te);
    j && Et(!0), s(g);
  }), O = { effect: _, items: l, pending: b, outrogroups: null, fallback: u };
  p = !1, D && (a = W);
}
function Qn(e) {
  for (; e !== null && (e.f & wt) === 0; )
    e = e.next;
  return e;
}
function Ed(e, t, n, r, i) {
  var he, ue, H, ot, it, vn, bn, yn, vr;
  var o = (r & ul) !== 0, a = t.length, l = e.items, d = Qn(e.effect.first), c, u = null, g, f = [], b = [], p, S, v, _;
  if (o)
    for (_ = 0; _ < a; _ += 1)
      p = t[_], S = i(p, _), v = /** @type {EachItem} */
      l.get(S).e, (v.f & pt) === 0 && ((ue = (he = v.nodes) == null ? void 0 : he.a) == null || ue.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(v));
  for (_ = 0; _ < a; _ += 1) {
    if (p = t[_], S = i(p, _), v = /** @type {EachItem} */
    l.get(S).e, e.outrogroups !== null)
      for (const at of e.outrogroups)
        at.pending.delete(v), at.done.delete(v);
    if ((v.f & Ge) !== 0 && (ti(v), o && ((ot = (H = v.nodes) == null ? void 0 : H.a) == null || ot.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(v))), (v.f & pt) !== 0)
      if (v.f ^= pt, v === d)
        tr(v, null, n);
      else {
        var O = u ? u.next : d;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), Bt(e, u, v), Bt(e, v, O), tr(v, O, n), u = v, f = [], b = [], d = Qn(u.next);
        continue;
      }
    if (v !== d) {
      if (c !== void 0 && c.has(v)) {
        if (f.length < b.length) {
          var z = b[0], j;
          u = z.prev;
          var we = f[0], ke = f[f.length - 1];
          for (j = 0; j < f.length; j += 1)
            tr(f[j], z, n);
          for (j = 0; j < b.length; j += 1)
            c.delete(b[j]);
          Bt(e, we.prev, ke.next), Bt(e, u, we), Bt(e, ke, z), d = z, u = ke, _ -= 1, f = [], b = [];
        } else
          c.delete(v), tr(v, d, n), Bt(e, v.prev, v.next), Bt(e, v, u === null ? e.effect.first : u.next), Bt(e, u, v), u = v;
        continue;
      }
      for (f = [], b = []; d !== null && d !== v; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(d), b.push(d), d = Qn(d.next);
      if (d === null)
        continue;
    }
    (v.f & pt) === 0 && f.push(v), u = v, d = Qn(v.next);
  }
  if (e.outrogroups !== null) {
    for (const at of e.outrogroups)
      at.pending.size === 0 && (Lo(e, Yr(at.done)), (it = e.outrogroups) == null || it.delete(at));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || c !== void 0) {
    var te = [];
    if (c !== void 0)
      for (v of c)
        (v.f & Ge) === 0 && te.push(v);
    for (; d !== null; )
      (d.f & Ge) === 0 && d !== e.fallback && te.push(d), d = Qn(d.next);
    var Y = te.length;
    if (Y > 0) {
      var pe = (r & ua) !== 0 && a === 0 ? n : null;
      if (o) {
        for (_ = 0; _ < Y; _ += 1)
          (bn = (vn = te[_].nodes) == null ? void 0 : vn.a) == null || bn.measure();
        for (_ = 0; _ < Y; _ += 1)
          (vr = (yn = te[_].nodes) == null ? void 0 : yn.a) == null || vr.fix();
      }
      Pd(e, te, pe);
    }
  }
  o && Nt(() => {
    var at, br;
    if (g !== void 0)
      for (v of g)
        (br = (at = v.nodes) == null ? void 0 : at.a) == null || br.apply();
  });
}
function Rd(e, t, n, r, i, o, a, l) {
  var d = (a & cl) !== 0 ? (a & fl) === 0 ? /* @__PURE__ */ Ha(n, !1, !1) : mn(n) : null, c = (a & wl) !== 0 ? mn(i) : null;
  return {
    v: d,
    i: c,
    e: Je(() => (o(t, d ?? n, c ?? i, l), () => {
      e.delete(r);
    }))
  };
}
function tr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, o = t && (t.f & pt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(r)
      );
      if (o.before(r), r === i)
        return;
      r = a;
    }
}
function Bt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function $d(e, t, n, r, i) {
  var l;
  D && mr();
  var o = (l = t.$$slots) == null ? void 0 : l[n], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => r : r);
}
function ri(e, t) {
  Jo(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const i = Yo("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function fs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = fs(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cd() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = fs(e)) && (r && (r += " "), r += t);
  return r;
}
function ze(e) {
  return typeof e == "object" ? Cd(e) : e ?? "";
}
const ta = [...` 	
\r\f \v\uFEFF`];
function Ad(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var o = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var l = a + o;
          (a === 0 || ta.includes(r[a - 1])) && (l === r.length || ta.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
        }
  }
  return r === "" ? null : r;
}
function na(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i of Object.keys(e)) {
    var o = e[i];
    o != null && o !== "" && (r += " " + i + ": " + o + n);
  }
  return r;
}
function Id(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += na(r)), i && (n += na(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function se(e, t, n, r, i, o) {
  var a = e.__className;
  if (D || a !== n || a === void 0) {
    var l = Ad(n, r, o);
    (!D || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = n;
  } else if (o && i !== o)
    for (var d in o) {
      var c = !!o[d];
      (i == null || c !== !!i[d]) && e.classList.toggle(d, c);
    }
  return o;
}
function ko(e, t = {}, n, r) {
  for (var i in n) {
    var o = n[i];
    t[i] !== o && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, r));
  }
}
function Ir(e, t, n, r) {
  var i = e.__style;
  if (D || i !== t) {
    var o = Id(t, r);
    (!D || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e.__style = t;
  } else r && (Array.isArray(r) ? (ko(e, n == null ? void 0 : n[0], r[0]), ko(e, n == null ? void 0 : n[1], r[1], "important")) : ko(e, n, r));
  return r;
}
const Bd = Symbol("is custom element"), Wd = Symbol("is html"), Ld = Pl ? "link" : "LINK";
function V(e, t, n, r) {
  var i = Od(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ld) || i[t] !== (i[t] = n) && (t === "loading" && (e[Tl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Dd(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Od(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Bd]: e.nodeName.includes("-"),
      [Wd]: e.namespaceURI === ma
    })
  );
}
var ra = /* @__PURE__ */ new Map();
function Dd(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ra.get(t);
  if (n) return n;
  ra.set(t, n = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = jl(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = pa(i);
  }
  return n;
}
var Lt, $n, ur, Gr, ms;
const Ur = class Ur {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    $(this, Gr);
    /** */
    $(this, Lt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    $(this, $n);
    /** @type {ResizeObserverOptions} */
    $(this, ur);
    E(this, ur, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = w(this, Lt).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), w(this, Lt).set(t, r), K(this, Gr, ms).call(this).observe(t, w(this, ur)), () => {
      var i = w(this, Lt).get(t);
      i.delete(n), i.size === 0 && (w(this, Lt).delete(t), w(this, $n).unobserve(t));
    };
  }
};
Lt = new WeakMap(), $n = new WeakMap(), ur = new WeakMap(), Gr = new WeakSet(), ms = function() {
  return w(this, $n) ?? E(this, $n, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ur.entries.set(n.target, n);
        for (var r of w(this, Lt).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
Q(Ur, "entries", /* @__PURE__ */ new WeakMap());
let Oo = Ur;
var Nd = /* @__PURE__ */ new Oo({
  box: "border-box"
});
function oa(e, t, n) {
  var r = Nd.observe(e, () => n(e[t]));
  Jo(() => (pr(() => n(e[t])), r));
}
function ia(e, t) {
  return e === t || (e == null ? void 0 : e[nr]) === t;
}
function aa(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Ie.r
  ), o = (
    /** @type {Effect} */
    L
  );
  return Jo(() => {
    var a, l;
    return Qo(() => {
      a = l, l = [], pr(() => {
        e !== n(...l) && (t(e, ...l), a && ia(n(...a), e) && t(null, ...a));
      });
    }), () => {
      let d = o;
      for (; d !== i && d.parent !== null && d.parent.f & _o; )
        d = d.parent;
      const c = () => {
        l && ia(n(...l), e) && t(null, ...l);
      }, u = d.teardown;
      d.teardown = () => {
        c(), u == null || u();
      };
    };
  }), e;
}
function M(e, t, n, r) {
  var O;
  var i = (n & pl) !== 0, o = (n & vl) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, d = () => (l && (l = !1, a = o ? pr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a);
  let c;
  if (i) {
    var u = nr in e || ka in e;
    c = ((O = hn(e, t)) == null ? void 0 : O.set) ?? (u && t in e ? (z) => e[t] = z : void 0);
  }
  var g, f = !1;
  i ? [g, f] = Xl(() => (
    /** @type {V} */
    e[t]
  )) : g = /** @type {V} */
  e[t], g === void 0 && r !== void 0 && (g = d(), c && (Ll(), c(g)));
  var b;
  if (b = () => {
    var z = (
      /** @type {V} */
      e[t]
    );
    return z === void 0 ? d() : (l = !0, z);
  }, (n & gl) === 0)
    return b;
  if (c) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(z, j) {
        return arguments.length > 0 ? ((!j || p || f) && c(j ? b() : z), z) : b();
      })
    );
  }
  var S = !1, v = ((n & ml) !== 0 ? eo : La)(() => (S = !1, b()));
  i && s(v);
  var _ = (
    /** @type {Effect} */
    L
  );
  return (
    /** @type {() => V} */
    (function(z, j) {
      if (arguments.length > 0) {
        const we = j ? s(v) : i ? nn(z) : z;
        return I(v, we), S = !0, a !== void 0 && (a = we), z;
      }
      return Gt && S || (_.f & et) !== 0 ? v.v : s(v);
    })
  );
}
function Hd(e) {
  return new Fd(e);
}
var Tt, Ke;
class Fd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $(this, Tt);
    /** @type {Record<string, any>} */
    $(this, Ke);
    var o;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var d = /* @__PURE__ */ Ha(l, !1, !1);
      return n.set(a, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return s(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === ka ? !0 : (s(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, d) {
          return I(n.get(l) ?? r(l, d), d), Reflect.set(a, l, d);
        }
      }
    );
    E(this, Ke, (t.hydrate ? Md : cs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && q(), E(this, Tt, i.$$events);
    for (const a of Object.keys(w(this, Ke)))
      a === "$set" || a === "$destroy" || a === "$on" || Lr(this, a, {
        get() {
          return w(this, Ke)[a];
        },
        /** @param {any} value */
        set(l) {
          w(this, Ke)[a] = l;
        },
        enumerable: !0
      });
    w(this, Ke).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, w(this, Ke).$destroy = () => {
      Sd(w(this, Ke));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    w(this, Ke).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    w(this, Tt)[t] = w(this, Tt)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return w(this, Tt)[t].push(r), () => {
      w(this, Tt)[t] = w(this, Tt)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    w(this, Ke).$destroy();
  }
}
Tt = new WeakMap(), Ke = new WeakMap();
let gs;
typeof HTMLElement == "function" && (gs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    Q(this, "$$ctor");
    /** Slots */
    Q(this, "$$s");
    /** @type {any} The Svelte component instance */
    Q(this, "$$c");
    /** Whether or not the custom element is connected */
    Q(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Q(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Q(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Q(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Q(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Q(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Q(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    Q(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(o) {
        return (a) => {
          const l = Yo("slot");
          o !== "default" && (l.name = o), le(a, l);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Vd(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = n(o), r.default = !0) : r[o] = n(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = Br(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Hd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wd(() => {
        Qo(() => {
          var o;
          this.$$r = !0;
          for (const a of Wr(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = Br(
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
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const l = this.$$c.$on(o, a);
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Br(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Wr(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Br(e, t, n, r) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
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
function Vd(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function oi(e, t, n, r, i, o) {
  let a = class extends gs {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Wr(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Wr(t).forEach((l) => {
    Lr(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(d) {
        var g;
        d = Br(l, d, t), this.$$d[l] = d;
        var c = this.$$c;
        if (c) {
          var u = (g = hn(c, l)) == null ? void 0 : g.get;
          u ? c[l] = d : c.$set({ [l]: d });
        }
      }
    });
  }), r.forEach((l) => {
    Lr(a.prototype, l, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const y = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, k = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, sa = (e) => `<g fill="#000">${e}</g>`, Gd = {
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
        svg: y(
          k(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: y(
          k(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: y(
          `${sa('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${k(
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
        svg: y(
          k(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          `${k('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${sa(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: y(
          k('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: y(
          k(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: y(
          k('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: y(
          k(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: y(k('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: y(
          k(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: y(
          k('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: y(k('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: y(
          k(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: y(k('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: y(
          k(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: y(
          k(
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
        svg: y(
          k(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: y(
          k('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: y(
          k('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: y(
          k('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: y(k('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: y(k('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: y(k('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: y(k('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: y(k('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: y(k('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: y(k('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: y(
          k('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: y(
          k('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: y(
          k('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: y(k('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: y(k('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Ud(e, t) {
  const n = Gd[e], r = n.variants;
  return (r[t ?? n.defaultVariant] ?? r[n.defaultVariant]).svg;
}
const la = /* @__PURE__ */ new Map();
function Yd(e, t) {
  const n = `${e}:${t ?? "default"}`, r = la.get(n);
  if (r)
    return r;
  const i = Ud(e, t), o = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return la.set(n, o), o;
}
var Zd = /* @__PURE__ */ ye("<span></span>");
const Xd = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function Ze(e, t) {
  Jr(t, !0), ri(e, Xd);
  let n = M(t, "name", 7), r = M(t, "variant", 7), i = M(t, "decorative", 7, !0), o = M(t, "label", 7), a = M(t, "title", 7), l = M(t, "size", 7, "1rem"), d = M(t, "className", 7, ""), c = /* @__PURE__ */ R(() => Yd(n(), r())), u = /* @__PURE__ */ R(() => o() ?? a() ?? n());
  var g = {
    get name() {
      return n();
    },
    set name(p) {
      n(p), q();
    },
    get variant() {
      return r();
    },
    set variant(p) {
      r(p), q();
    },
    get decorative() {
      return i();
    },
    set decorative(p = !0) {
      i(p), q();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), q();
    },
    get title() {
      return a();
    },
    set title(p) {
      a(p), q();
    },
    get size() {
      return l();
    },
    set size(p = "1rem") {
      l(p), q();
    },
    get className() {
      return d();
    },
    set className(p = "") {
      d(p), q();
    }
  }, f = Zd();
  let b;
  return Se(
    (p) => {
      se(f, 1, p, "svelte-1a09gvd"), V(f, "aria-hidden", i()), V(f, "aria-label", i() ? void 0 : s(u)), V(f, "role", i() ? void 0 : "img"), V(f, "title", a()), b = Ir(f, "", b, { "--icon-mask": s(c), width: l(), height: l() });
    },
    [() => ze(`app-icon ${d()}`.trim())]
  ), le(e, f), Qr(g);
}
oi(
  Ze,
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
const ii = "efsdb:window-settings", Do = {
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
      titleBarHeight: 44,
      windowScale: 100,
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
    label: "Windows 7",
    shadow: "0 16px 34px rgba(0, 0, 0, 0.2), 0 28px 58px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "windows-7",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 9,
      titleBarHeight: 36,
      windowScale: 94,
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
  "windows-basic": {
    id: "windows-basic",
    label: "Windows 7 Basic",
    shadow: "0 14px 30px rgba(0, 0, 0, 0.18), 0 24px 46px rgba(0, 0, 0, 0.2)",
    settings: {
      buttonLayout: "windows-7",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 7,
      chromePadding: 7,
      titleBarHeight: 34,
      windowScale: 94,
      chromeStyle: "solid",
      chromeTexture: !1,
      chromeBeamStyle: "none",
      chromeBeamIntensity: 0,
      chromeGlossStyle: "none",
      chromeGlossIntensity: 8,
      chromeGlossSpacing: 18,
      chromeColorize: !1,
      chromeColorSource: "accent",
      chromeColorIntensity: 46,
      alignment: "left",
      titleTone: "dark",
      titleEffect: "plain",
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
      titleBarHeight: 39,
      windowScale: 98,
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
      titleBarHeight: 42,
      windowScale: 100,
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
      titleBarHeight: 34,
      windowScale: 96,
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
      titleBarHeight: 44,
      windowScale: 100,
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
      titleBarHeight: 46,
      windowScale: 100,
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
      titleBarHeight: 28,
      windowScale: 92,
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
      titleBarHeight: 36,
      windowScale: 96,
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
      titleBarHeight: 44,
      windowScale: 102,
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
      titleBarHeight: 34,
      windowScale: 96,
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
      titleBarHeight: 34,
      windowScale: 96,
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
      titleBarHeight: 34,
      windowScale: 94,
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
      titleBarHeight: 38,
      windowScale: 98,
      chromeStyle: "solid",
      alignment: "center",
      titleTone: "light",
      titleEffect: "plain",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "linux-system"
    }
  }
}, Kd = /* @__PURE__ */ new Set(["aero"]);
function Jd(e) {
  return Kd.has(e);
}
function no(e) {
  if (!Jd(e.themePreset))
    return e;
  const t = Do[e.themePreset];
  return t ? {
    ...e,
    ...t.settings,
    themePreset: e.themePreset
  } : e;
}
const da = {
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
}, C = {
  buttonLayout: "windows-11",
  systemButtonPlacement: "right",
  sideResizeMode: "anchored",
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
  titleBarHeight: 44,
  windowScale: 100,
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
}, Nr = /* @__PURE__ */ new Set();
let Pt = vs();
function Qd(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function eh(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function th(e) {
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
      return C.buttonLayout;
  }
}
function nh(e) {
  return e === "left" ? "left" : C.systemButtonPlacement;
}
function rh(e) {
  return e === "mirrored" ? "mirrored" : C.sideResizeMode;
}
function oh(e) {
  switch (e) {
    case "inherit":
    case "aero":
    case "windows-basic":
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
      return C.themePreset;
  }
}
function ih(e) {
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
      return C.fontPreset;
  }
}
function ah(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return C.shiftDragAction;
  }
}
function sh(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return C.chromeColorSource;
  }
}
function lh(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return C.chromeGlossStyle;
  }
}
function dh(e) {
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
      return C.chromeBeamStyle;
  }
}
function hh(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return C.titleTone;
  }
}
function ch(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return C.titleEffect;
  }
}
function wh(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return C.dockLabelMode;
  }
}
function uh(e) {
  return e === "expanded" ? "expanded" : C.pageThemeSpread;
}
function Te(e, t, n, r) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(n, Math.min(r, Math.round(i))) : t;
}
function ps(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : dh(e == null ? void 0 : e.chromeBeamStyle), n = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : lh(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: th(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: nh(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: rh(e == null ? void 0 : e.sideResizeMode),
    borderWidth: Te(
      e == null ? void 0 : e.borderWidth,
      C.borderWidth,
      0,
      12
    ),
    borderRadius: Te(
      e == null ? void 0 : e.borderRadius,
      C.borderRadius,
      0,
      32
    ),
    chromePadding: Te(
      e == null ? void 0 : e.chromePadding,
      C.chromePadding,
      0,
      20
    ),
    titleBarHeight: Te(
      e == null ? void 0 : e.titleBarHeight,
      C.titleBarHeight,
      28,
      72
    ),
    windowScale: Te(
      e == null ? void 0 : e.windowScale,
      C.windowScale,
      75,
      140
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : C.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : C.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: Te(
      e == null ? void 0 : e.chromeBeamIntensity,
      C.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: n,
    chromeGlossIntensity: Te(
      e == null ? void 0 : e.chromeGlossIntensity,
      C.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Te(
      e == null ? void 0 : e.chromeGlossSpacing,
      C.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : C.chromeColorize,
    chromeColorSource: sh(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: Te(
      e == null ? void 0 : e.chromeColorIntensity,
      C.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : C.alignment,
    titleTone: hh(e == null ? void 0 : e.titleTone),
    titleEffect: ch(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : C.snapRestoreOnRelease,
    shiftDragAction: ah(e == null ? void 0 : e.shiftDragAction),
    themePreset: oh(e == null ? void 0 : e.themePreset),
    fontPreset: ih(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : C.globalEdgeDock,
    dockButtonSize: Te(
      e == null ? void 0 : e.dockButtonSize,
      C.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Te(
      e == null ? void 0 : e.dockButtonWidth,
      C.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Te(
      e == null ? void 0 : e.dockIconScale,
      C.dockIconScale,
      70,
      160
    ),
    dockGap: Te(e == null ? void 0 : e.dockGap, C.dockGap, 4, 24),
    dockOffset: Te(e == null ? void 0 : e.dockOffset, C.dockOffset, 8, 36),
    dockLabelMode: wh(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: uh(e == null ? void 0 : e.pageThemeSpread)
  };
}
function fh(e) {
  if (e.titleTone !== "auto")
    return e.titleTone;
  switch (e.themePreset) {
    case "aero":
    case "windows-basic":
    case "windows-vista":
    case "paper":
    case "mac-os-x":
      return "dark";
    default:
      return "light";
  }
}
function mh(e) {
  if (e.titleEffect !== "auto")
    return e.titleEffect;
  switch (e.themePreset) {
    case "aero":
    case "windows-vista":
      return "glow";
    case "windows-basic":
      return "plain";
    case "windows-9x":
      return "emboss";
    case "inherit":
    case "windows-10-flat":
    case "android":
    case "ubuntu-yaru":
    case "gnome":
      return "plain";
    default:
      return "shadow";
  }
}
function gh(e) {
  return (Do[e] ?? Do.inherit).shadow;
}
function ph(e) {
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
function vh(e) {
  const t = no(e), n = t.chromeTexture ? Math.max(0, Math.min(1, t.chromeBeamIntensity / 100)) : 0, r = t.chromeTexture ? t.chromeBeamStyle : "none", o = `${(r === "vista" ? 0.98 : r === "windows-7" ? 0.94 : r === "xp-luna" ? 0.82 : r === "windows-9x" ? 0.72 : r === "kde" ? 0.7 : r === "mica" ? 0.62 : 0) * n}`, a = Math.max(0, Math.min(1, t.chromeGlossIntensity / 100)), l = t.chromeColorize ? `${Math.max(0, Math.min(0.88, t.chromeColorIntensity / 100))}` : "0", d = ph(t.chromeColorSource), c = Te(t.chromeColorIntensity, 48, 0, 100), u = t.chromeColorize ? Math.round(34 + c / 100 * 42) : 0, g = t.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - u}%, ${d} ${u}%)` : "#4580c4", f = {
    "--efs-window-chrome-texture-opacity": o,
    "--efs-window-chrome-beam-intensity": `${n}`,
    "--efs-window-chrome-gloss-intensity": `${a}`,
    "--efs-window-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": l,
    "--efs-window-chrome-tint": d,
    "--efs-window-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-window-shell-scale": `${t.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": o,
    "--efs-widget-chrome-beam-intensity": `${n}`,
    "--efs-widget-chrome-gloss-intensity": `${a}`,
    "--efs-widget-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": l,
    "--efs-widget-theme-tint": d,
    "--efs-widget-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${t.windowScale / 100}`,
    "--efs-win7-window-bg": g
  };
  if (!t.chromeColorize)
    return f;
  const b = c, p = Math.round(b / 100 * 34), S = Math.round(b / 100 * 26), v = Math.round(10 + b / 100 * 46), _ = Math.round(6 + b / 100 * 32), O = Math.round(b / 100 * 28), z = Math.round(b / 100 * 22), j = Math.round(12 + b / 100 * 46), we = Math.round(10 + b / 100 * 34), ke = Math.round(90 - b / 100 * 16), te = Math.round(92 - b / 100 * 18);
  return f["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - p}%, ${d} ${p}%)`, f["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - S}%, ${d} ${S}%)`, f["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - v}%, ${d} ${v}%)`, f["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - _}%, ${d} ${_}%)`, f["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${d}, transparent ${ke}%), var(--efs-window-shell-shadow)`, f["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - O}%, ${d} ${O}%)`, f["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - z}%, ${d} ${z}%)`, f["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - j}%, ${d} ${j}%)`, f["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - we}%, ${d} ${we}%)`, f["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${d}, transparent ${te}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, f;
}
function vs() {
  const e = Qd(ii);
  if (!e)
    return ir(C), { ...C };
  try {
    const t = JSON.parse(e), n = no(ps(t));
    return ir(n), n;
  } catch {
    return ir(C), { ...C };
  }
}
function bh(e) {
  if (!e)
    return [];
  const t = [e], n = /* @__PURE__ */ new Set();
  for (; t.length > 0; ) {
    const r = t.shift();
    if (!(!r || n.has(r))) {
      n.add(r);
      try {
        const i = r.parent;
        i && i !== r && !n.has(i) && t.push(i);
      } catch {
      }
      try {
        for (let i = 0; i < r.frames.length; i += 1) {
          const o = r.frames[i];
          o && !n.has(o) && t.push(o);
        }
      } catch {
      }
    }
  }
  return [...n];
}
function xo(e, t) {
  const n = no(t), r = e.documentElement.style, i = e.documentElement, o = n.chromeGlossStyle, a = n.chromeTexture ? n.chromeBeamStyle : "none", l = Math.max(n.dockButtonSize, n.dockButtonWidth), d = da[n.fontPreset] ?? da.system, c = gh(n.themePreset), u = vh(n), g = [
    "--efs-window-chrome-texture-opacity",
    "--efs-window-chrome-beam-intensity",
    "--efs-window-chrome-gloss-intensity",
    "--efs-window-chrome-gloss-spacing",
    "--efs-window-chrome-colorize-opacity",
    "--efs-window-chrome-tint",
    "--efs-window-titlebar-height",
    "--efs-window-shell-scale",
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
    "--efs-widget-titlebar-height",
    "--efs-widget-shell-scale",
    "--efs-widget-theme-panel",
    "--efs-widget-theme-surface",
    "--efs-widget-theme-border",
    "--efs-widget-theme-shadow",
    "--efs-widget-theme-hover"
  ];
  r.setProperty("--efs-font-sans", d.stack), r.setProperty("--shell-font-sans", d.stack), r.setProperty("--efs-window-font-family", d.stack), r.setProperty("--efs-window-border-width", `${n.borderWidth}px`), r.setProperty("--efs-window-radius", `${n.borderRadius}px`), r.setProperty("--efs-window-chrome-padding", `${n.chromePadding}px`), r.setProperty("--efs-window-titlebar-height", `${n.titleBarHeight}px`), r.setProperty("--efs-window-shell-scale", `${n.windowScale / 100}`), r.setProperty("--efs-window-system-button-placement", n.systemButtonPlacement), r.setProperty("--efs-window-side-resize-mode", n.sideResizeMode), r.setProperty("--efs-window-shell-shadow", c), r.setProperty("--efs-widget-border-width", `${n.borderWidth}px`), r.setProperty("--efs-widget-radius", `${n.borderRadius}px`), r.setProperty("--efs-widget-chrome-padding", `${n.chromePadding}px`), r.setProperty("--efs-widget-titlebar-height", `${n.titleBarHeight}px`), r.setProperty("--efs-widget-shell-scale", `${n.windowScale / 100}`), r.setProperty("--efs-widget-shadow", c), r.setProperty("--efs-dock-button-size", `${n.dockButtonSize}px`), r.setProperty("--efs-dock-button-width", `${l}px`), r.setProperty("--efs-dock-gap", `${n.dockGap}px`), r.setProperty("--efs-dock-offset", `${n.dockOffset}px`), r.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(n.dockButtonSize * 0.39))}px`
  ), r.setProperty("--efs-dock-icon-scale", `${n.dockIconScale / 100}`), r.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(l + n.dockButtonSize * 1.8))}px`
  ), r.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(n.dockButtonSize * 0.31))}px`
  ), r.setProperty("--efs-dock-label-mode", n.dockLabelMode), r.setProperty("--efs-dock-global-enabled", n.globalEdgeDock ? "1" : "0"), r.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), r.setProperty("--efs-page-theme-spread", n.pageThemeSpread), i.setAttribute("data-efs-page-theme", n.pageThemeSpread), i.setAttribute("data-efs-window-gloss", o), i.setAttribute("data-efs-window-beam", a), g.forEach((f) => r.removeProperty(f)), Object.entries(u).forEach(([f, b]) => r.setProperty(f, b));
}
function ir(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    xo(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const n = bh(t);
  if (n.length === 0) {
    xo(document, e);
    return;
  }
  n.forEach((r) => {
    try {
      xo(r.document, e);
    } catch {
    }
  });
}
function yh(e) {
  Pt = no(
    ps({
      ...Pt,
      ...e
    })
  ), ir(Pt), eh(ii, JSON.stringify(Pt)), Nr.forEach((t) => t(Pt));
}
function kh(e) {
  return Nr.add(e), e(Pt), () => {
    Nr.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  ir(Pt);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || yh(t);
}), window.addEventListener("storage", (e) => {
  e.key === ii && (Pt = vs(), Nr.forEach((t) => t(Pt)));
}));
var xh = /* @__PURE__ */ ye('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), jh = /* @__PURE__ */ ye("<div><span></span></div>"), _h = /* @__PURE__ */ ye('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), qh = /* @__PURE__ */ ye('<button type="button"><!></button>'), Mh = /* @__PURE__ */ ye('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Sh = /* @__PURE__ */ ye('<button type="button"><!></button>'), zh = /* @__PURE__ */ ye('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), Th = /* @__PURE__ */ ye('<button type="button"><!></button>'), Ph = /* @__PURE__ */ ye('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), Eh = /* @__PURE__ */ ye('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Rh = /* @__PURE__ */ ye('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), $h = /* @__PURE__ */ ye("<div><!></div>"), Ch = /* @__PURE__ */ ye('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Ah = /* @__PURE__ */ ye("<!> <!> <div><!> <!> <!></div>", 1);
const Ih = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--efs-window-theme-panel, var(--shell-panel, rgba(15, 23, 42, 0.94)));--window-surface: var(--efs-window-theme-surface, var(--shell-surface, rgba(15, 23, 42, 0.98)));--window-border: var(--efs-window-theme-border, var(--shell-border, rgba(148, 163, 184, 0.24)));--window-hover: var(--efs-window-theme-hover, var(--shell-row-hover, rgba(125, 211, 252, 0.12)));--window-shadow: var(--efs-window-theme-shadow, var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42))));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-chrome-tint: var(--efs-window-chrome-tint, var(--window-primary));--window-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--window-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--window-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--window-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--window-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--window-titlebar-height: 44px;--window-shell-scale: 1;--window-control-size-base: calc(2.15rem * var(--window-shell-scale));--window-control-size:
      min(
        var(--window-control-size-base),
        max(1.7rem, calc(var(--window-titlebar-height) - max(0.46rem, calc(var(--window-chrome-padding) * 0.9))))
      );--window-aux-width: calc(2.35rem * var(--window-shell-scale));--window-system-width: calc(2.75rem * var(--window-shell-scale));--window-system-height: var(--window-control-size);--window-control-gap: calc(0.14rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(10px * var(--window-shell-scale)));--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: calc(0.9rem * var(--window-shell-scale));--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space:
      max(0.18rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.52));--window-chrome-bottom-space:
      max(0.12rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.48));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;isolation:isolate;min-width:min(100vw - 1rem, 18rem);min-height:0;opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell.svelte-1k3ojqh:not(.win7-theme) {border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='mica'].svelte-1k3ojqh {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),
      color-mix(in srgb, var(--window-surface), transparent 10%);backdrop-filter:blur(22px) saturate(1.08);-webkit-backdrop-filter:blur(22px) saturate(1.08);}.window-shell[data-style='frost'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 18%);backdrop-filter:blur(24px) saturate(1.14);-webkit-backdrop-filter:blur(24px) saturate(1.14);}.window-shell[data-style='pane'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 8%);backdrop-filter:blur(16px) saturate(1.04);-webkit-backdrop-filter:blur(16px) saturate(1.04);}.window-shell[data-style='transparent'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-1k3ojqh {--window-control-size-base: calc(1.92rem * var(--window-shell-scale));--window-aux-width: calc(2.05rem * var(--window-shell-scale));--window-system-width: calc(2.28rem * var(--window-shell-scale));--window-control-gap: calc(0.08rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(8px * var(--window-shell-scale)));}.window-shell.is-ready.svelte-1k3ojqh {opacity:1;}.window-shell.is-dragging.svelte-1k3ojqh,
  .window-shell.is-resizing.svelte-1k3ojqh {transition:none;}.window-shell.maximized.svelte-1k3ojqh {inset:0 !important;width:100vw !important;height:100vh !important;transform:none !important;border-radius:0;}.window-shell.minimized.svelte-1k3ojqh {opacity:0;pointer-events:none;transform:translate(0, calc(100vh + 2rem)) scale(0.98) !important;}.window-shell.rolled-up.svelte-1k3ojqh {height:auto !important;min-height:0;}.window-shell.chromeless.svelte-1k3ojqh {border:none;box-shadow:none;background:transparent;}.window-chrome.svelte-1k3ojqh {position:relative;isolation:isolate;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:0.65rem;min-height:calc(
      var(--window-system-height) + var(--window-chrome-top-space) + var(--window-chrome-bottom-space)
    );padding-top:var(--window-chrome-top-space);padding-bottom:var(--window-chrome-bottom-space);padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;overflow:hidden;background:transparent;}.window-shell[data-style='transparent'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:transparent;}.window-shell[data-style='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--window-panel), transparent 12%);}.window-shell[data-style='frost'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 18%);}.window-shell[data-style='pane'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-chrome.svelte-1k3ojqh::before,
  .window-chrome.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.window-chrome.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 88%), transparent 74%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 42%);opacity:var(--window-chrome-colorize-opacity);}.window-chrome.svelte-1k3ojqh::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34),
        rgba(255, 255, 255, 0.14) 18%,
        rgba(255, 255, 255, 0.04) 52%,
        transparent 82%
      ),
      radial-gradient(132% 118% at 12% -18%, rgba(255, 255, 255, 0.28), transparent 44%),
      radial-gradient(116% 94% at 100% 0%, rgba(255, 255, 255, 0.16), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.12) 38%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 80%
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.78);}.window-tools.svelte-1k3ojqh,
  .window-system-cluster.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.window-system-cluster.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-system-cluster:where(.svelte-1k3ojqh),
  .window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);font-weight:600;letter-spacing:0.01em;color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-shell[data-title-tone='light'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(255, 255, 255, 0.96);}.window-shell[data-title-tone='dark'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(12, 18, 28, 0.88);}.window-shell[data-title-effect='plain'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:none;}.window-shell[data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(0, 0, 0, 0.16),
      0 2px 12px rgba(0, 0, 0, 0.18);}.window-shell[data-title-tone='dark'][data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.42),
      0 8px 18px rgba(255, 255, 255, 0.32);}.window-shell[data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 1px 0 rgba(255, 255, 255, 0.58);}.window-shell[data-title-tone='light'][data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 12px rgba(12, 18, 28, 0.44),
      0 1px 0 rgba(0, 0, 0, 0.38);}.window-shell[data-title-effect='emboss'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.28),
      0 -1px 0 rgba(0, 0, 0, 0.38);}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-system-cluster.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:max(0.28rem, calc(var(--window-control-gap) * 0.75));min-width:0;}.window-help.svelte-1k3ojqh {position:relative;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;}.window-help-tooltip.svelte-1k3ojqh {position:absolute;top:calc(100% + 0.65rem);z-index:8;display:flex;flex-direction:column;gap:0.4rem;width:min(18rem, calc(100vw - 2rem));padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-radius:16px;background:radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 90%), transparent 34%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--window-panel), transparent 2%);color:var(--window-text);box-shadow:var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,
      transform 140ms ease;}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {right:0;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {left:0;}.window-help-tooltip.svelte-1k3ojqh::before {content:'';position:absolute;top:-0.42rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-left:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);background:color-mix(in srgb, var(--window-panel), transparent 2%);transform:rotate(45deg);}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {right:0.9rem;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {left:0.9rem;}.window-help-tooltip.svelte-1k3ojqh strong:where(.svelte-1k3ojqh) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.window-help-tooltip.svelte-1k3ojqh span:where(.svelte-1k3ojqh) {color:color-mix(in srgb, var(--window-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.window-help.svelte-1k3ojqh:hover .window-help-tooltip:where(.svelte-1k3ojqh),
  .window-help.svelte-1k3ojqh:focus-within .window-help-tooltip:where(.svelte-1k3ojqh) {opacity:1;transform:translateY(0);}.window-button.svelte-1k3ojqh {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid
      color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);overflow:hidden;transition:background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;}.window-button.svelte-1k3ojqh::before,
  .window-button.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.window-button.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 56%);opacity:calc(var(--window-chrome-colorize-opacity) * 0.72);}.window-button.svelte-1k3ojqh::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.28),
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.02) 76%,
        transparent 100%
      ),
      radial-gradient(130% 118% at 18% -24%, rgba(255, 255, 255, 0.18), transparent 46%),
      linear-gradient(
        118deg,
        transparent 16%,
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.03) 64%,
        transparent 86%
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.44);}.window-button.svelte-1k3ojqh .app-icon {position:relative;z-index:1;width:var(--window-icon-size);height:var(--window-icon-size);}.help-button.svelte-1k3ojqh .app-icon {width:min(var(--window-icon-size), 0.92rem);height:min(var(--window-icon-size), 0.92rem);}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 68%);background:color-mix(in srgb, var(--window-hover), var(--window-chrome-tint) 16%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 56%);background:color-mix(in srgb, var(--window-chrome-tint), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;border-color:color-mix(in srgb, var(--window-border), transparent 24%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 12%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh,
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-1k3ojqh {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-w7-title-bg:
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),
      #4580c4;--window-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;--window-w7-control-bg:
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);--window-w7-control-border: #0000004d;border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82),
      inset 0 0 0 2px rgba(255, 255, 255, 0.08);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),
      var(--window-w7-title-bg);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.52),
        rgba(255, 255, 255, 0.24) 18%,
        rgba(255, 255, 255, 0.08) 52%,
        transparent 86%
      ),
      radial-gradient(140% 126% at 10% -18%, rgba(255, 255, 255, 0.42), transparent 42%),
      radial-gradient(94% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.22);border:1px solid var(--window-w7-control-border);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.8),
      1px 0 0 rgba(255, 255, 255, 0.66),
      -1px 0 0 rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid var(--window-w7-control-border);border-radius:0;background:var(--window-w7-control-bg);color:rgba(0, 0, 0, 0.76);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(224, 161, 151, 0.9),
        rgba(207, 121, 106, 0.95) 25% 50%,
        rgba(213, 79, 54, 0.96) 50%
      );color:rgba(255, 255, 255, 0.94);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-vista-title-bg:
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),
      #6c8fbe;--window-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;--window-vista-control-bg:
      linear-gradient(
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.34) 45%,
        rgba(0, 0, 0, 0.12) 50%,
        rgba(0, 0, 0, 0.14) 76%,
        rgba(255, 255, 255, 0.54)
      );border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.88),
      inset 0 0 0 2px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),
      var(--window-vista-title-bg);backdrop-filter:blur(9px) saturate(1.02);-webkit-backdrop-filter:blur(9px) saturate(1.02);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 1px 0 0 rgba(255, 255, 255, 0.62),
      inset -1px 0 0 rgba(255, 255, 255, 0.62);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.3) 18%,
        rgba(255, 255, 255, 0.1) 58%,
        transparent 90%
      ),
      radial-gradient(142% 128% at 8% -22%, rgba(255, 255, 255, 0.48), transparent 44%),
      radial-gradient(106% 118% at 100% 0%, rgba(255, 255, 255, 0.26), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.68);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.26);border:1px solid rgba(0, 0, 0, 0.35);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.84),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid rgba(0, 0, 0, 0.35);border-radius:0;background:var(--window-vista-control-bg);color:rgba(0, 0, 0, 0.82);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.72),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(233, 176, 166, 0.94),
        rgba(211, 110, 95, 0.96) 25% 50%,
        rgba(201, 52, 37, 0.98) 50%
      );color:rgba(255, 255, 255, 0.96);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--window-panel), transparent 10%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),
      radial-gradient(
        124% 134% at 100% 0%,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 38%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, 0.1),
        transparent 28%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 84%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh {--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:color-mix(in srgb, var(--window-border), transparent 10%);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-system-height: 1.75rem;--window-system-icon-size: 0.76rem;--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));box-shadow:var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.45rem;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-system-height: 0.96rem;--window-system-icon-size: 0.48rem;--window-control-radius: 999px;--window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.55rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh):hover .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .minimize-button:where(.svelte-1k3ojqh) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .maximize-button:where(.svelte-1k3ojqh) {background:#28c840;}.window-shell[data-theme='ios'].svelte-1k3ojqh {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-1k3ojqh {--window-control-radius: 999px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));--window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));}.window-shell[data-theme='android'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh {--window-aux-width: 2.05rem;--window-control-size: 2rem;--window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh {--window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-1k3ojqh {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-shell[data-beam='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-w7-glass-stripes, none),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.14)) 16%,
        rgba(255, 255, 255, calc(0.06 + var(--window-beam-intensity) * 0.05)) 46%,
        transparent 72%
      ),
      radial-gradient(
        156% 132% at 52% -36%,
        rgba(255, 255, 255, calc(0.56 + var(--window-beam-intensity) * 0.24)),
        transparent 38%
      ),
      radial-gradient(
        118% 118% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--window-beam-intensity) * 0.18)) 20%,
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.44 + var(--window-beam-intensity) * 0.98),
      1
    );}.window-shell[data-beam='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-vista-glass-stripes, var(--window-w7-glass-stripes, none)),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--window-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        124% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--window-beam-intensity) * 0.16)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 78%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 1),
      1
    );}.window-shell[data-beam='xp-luna'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--window-chrome-tint) 12%),
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        148% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--window-chrome-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.1)) 22%,
        transparent 48%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 76%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.62 + var(--window-beam-intensity) * 0.88),
      1
    );}.window-shell[data-beam='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.16)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--window-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 72%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.78),
      1
    );}.window-shell[data-beam='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--window-beam-intensity) * 0.12)),
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.06)) 30%,
        transparent 78%
      ),
      radial-gradient(
        144% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 86%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 80%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.52 + var(--window-beam-intensity) * 0.82),
      1
    );}.window-shell[data-beam='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:radial-gradient(
        146% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.06)),
        transparent 76%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 90%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.74),
      1
    );}.window-shell[data-gloss='none'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='none'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {opacity:0;}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.3 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)) 58%,
        transparent 88%
      ),
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.22)), transparent 46%),
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.12)) calc(28% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(54% + var(--window-gloss-spacing) * 0.1),
        transparent 82%
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.02);}.window-shell[data-gloss='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.38 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.16 + var(--window-gloss-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.06)) 62%,
        transparent 90%
      ),
      radial-gradient(138% 128% at 8% -22%, rgba(255, 255, 255, calc(0.26 + var(--window-gloss-intensity) * 0.24)), transparent 46%),
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.14)) calc(30% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.05)) calc(56% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.06);}.window-shell[data-gloss='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.08)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.03)) 60%,
        transparent 86%
      ),
      radial-gradient(132% 116% at 14% -16%, rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.08)) calc(26% + var(--window-gloss-spacing) * 0.2),
        rgba(255, 255, 255, calc(0.015 + var(--window-gloss-intensity) * 0.03)) calc(58% + var(--window-gloss-spacing) * 0.12),
        transparent 86%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.94);}.window-shell[data-gloss='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(146% 120% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      radial-gradient(126% 136% at 100% 0%, color-mix(in srgb, var(--window-chrome-tint), transparent calc(92% - var(--window-gloss-intensity) * 10%)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.1 + var(--window-gloss-intensity) * 0.1)), rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.02)) 52%, transparent 82%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--window-gloss-intensity) * 0.02)) calc(58% + var(--window-gloss-spacing) * 0.1),
        transparent 86%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.96);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.08)) 72%,
        transparent 100%
      ),
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.06)) 44%,
        transparent 100%
      ),
      radial-gradient(128% 118% at 18% -24%, rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.08)), transparent 46%),
      linear-gradient(
        130deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(40% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar:where(.svelte-1k3ojqh) {padding-top:0;padding-inline:6px;gap:0.55rem;border-bottom:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-text:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-text:where(.svelte-1k3ojqh) {line-height:15px;padding-top:6px;letter-spacing:0;font-weight:600;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) {gap:0;align-self:start;overflow:hidden;background:rgba(255, 255, 255, 0.18);border:1px solid rgba(0, 0, 0, 0.3);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.82),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {position:relative;min-width:29px;min-height:19px;width:auto;height:auto;padding:0;border:0;border-right:1px solid rgba(0, 0, 0, 0.3);border-radius:0;box-shadow:none;box-sizing:border-box;background:none;color:rgba(12, 18, 28, 0.84);overflow:visible;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {inset:0;border-radius:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before {box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {opacity:0;transition:opacity 120ms linear;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover {transform:none;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after {border-bottom-right-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after {border-bottom-left-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.72rem;height:0.72rem;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-w7-control-bg, var(--window-vista-control-bg));}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-vista-control-bg);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after {opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(93, 196, 240, 0.82),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82);background:radial-gradient(circle at bottom, rgba(42, 206, 218, 0.9), transparent 65%),
      linear-gradient(#b6d9ee 50%, #1a6ca1 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(104, 196, 244, 0.86),
      inset 0 0 0 1px rgba(255, 255, 255, 0.86);background:radial-gradient(circle at bottom, rgba(118, 220, 255, 0.94), transparent 65%),
      linear-gradient(#d3e9f8 48%, #4f88b7 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after {background:radial-gradient(circle at bottom, rgba(11, 253, 250, 0.88), transparent 65%),
      linear-gradient(#86a7bc 50%, #092747 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:48px;color:rgba(255, 255, 255, 0.96);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(#efb0a6, #d36e5f 25% 50%, #c93425 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after {box-shadow:0 0 7px 3px rgba(230, 142, 117, 0.9),
      inset 0 0 0 1px rgba(255, 255, 255, 0.78);background:radial-gradient(circle at 50% 170%, rgba(244, 230, 118, 0.9) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after {background:radial-gradient(circle at 50% 170%, rgba(220, 192, 63, 0.92) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%);}.window-shell.win7-theme.svelte-1k3ojqh {overflow:visible;color:var(--w7-el-c);font-family:var(--w7-font);}.window-shell.win7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:0 var(--w7-w-space) var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:0 0 0 1px #fff9;color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}.window-shell.basic7-theme.svelte-1k3ojqh {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;color:var(--w7-el-c);font-family:var(--w7-font);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;}.window-shell.basic7-theme.svelte-1k3ojqh::after {content:none;display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome.title-bar:where(.svelte-1k3ojqh) {min-height:0;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.35rem;padding-top:calc(var(--w7-w-space) - 1px);}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::before,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::after {inset:0;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):hover,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):active,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button.is-active:where(.svelte-1k3ojqh) {color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):focus-visible {outline-offset:-4px;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) .app-icon {width:0.78rem;height:0.78rem;}.window-shell.basic7-theme.svelte-1k3ojqh .window-title.title-bar-text:where(.svelte-1k3ojqh) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);}.window-shell.basic7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:var(--w7-w-space);margin-top:0;border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}:host(:not([theme='light'])) .window-shell.basic7-theme.svelte-1k3ojqh {--efs-win7-surface: #1c2229;--efs-win7-text: #e7edf8;--efs-win7-text-muted: #8591a2;--efs-win7-window-border: rgba(8, 12, 18, 0.82);--efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);--efs-win7-scrollbar: #5f7ea2;}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.window-shell.win7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.window-shell.basic7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size-base: calc(1.86rem * var(--window-shell-scale));--window-aux-width: calc(1.96rem * var(--window-shell-scale));--window-system-width: calc(2.16rem * var(--window-shell-scale));--window-control-gap: calc(0.06rem * var(--window-shell-scale));}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}
  }`
};
function bs(e, t) {
  Jr(t, !0), ri(e, Ih);
  let n = M(t, "title", 7), r = M(t, "helpText", 7, ""), i = M(t, "helpPlacement", 7, "auto"), o = M(t, "state", 15, "normal"), a = M(t, "x", 15, 100), l = M(t, "y", 15, 100), d = M(t, "width", 15, 600), c = M(t, "height", 15, 400), u = M(t, "locked", 7, !1), g = M(t, "chromeless", 7, !1), f = M(t, "buttonLayout", 7), b = M(t, "systemButtonPlacement", 7), p = M(t, "sideResizeMode", 7), S = M(t, "borderWidth", 7), v = M(t, "borderRadius", 7), _ = M(t, "chromePadding", 7), O = M(t, "chromeStyle", 7), z = M(t, "alignment", 7), j = M(t, "themePreset", 7), we = M(t, "fontPreset", 7), ke = M(t, "snapRestoreOnRelease", 7), te = M(t, "shiftDragAction", 7), Y = M(t, "zIndex", 7, 100), pe = M(t, "pinned", 7, !1), he = M(t, "dragSeed", 7, null), ue = M(t, "restoreFrame", 15, null), H = M(t, "snapTarget", 15, null), ot = M(t, "onClose", 7), it = M(t, "onPinToggle", 7), vn = M(t, "onConsumeDragSeed", 7), bn = M(t, "onStateChange", 7), yn = M(t, "children", 7);
  const vr = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], at = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), br = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], On = 360, yr = 240, ys = 1400;
  let ae = /* @__PURE__ */ ie(nn({ ...C })), ai = /* @__PURE__ */ ie(!1), Dn = /* @__PURE__ */ ie(!1), ut = /* @__PURE__ */ ie(null), kr = /* @__PURE__ */ ie(null), xr = /* @__PURE__ */ ie(0), jr = /* @__PURE__ */ ie(0), si = "", li = 0, di = 0, _r = 0, ro = 0, Zt = 0, Nn = 0, Rt = "se", kn = null, Hn = !1, Xt = !1, hi = 0.5, ci = 18, xn = !1, Fn = /* @__PURE__ */ ie(null), Kt = 0, Jt = /* @__PURE__ */ ie(null), wi = /* @__PURE__ */ ie(0), ui = /* @__PURE__ */ ie(0);
  Td(() => {
    const h = requestAnimationFrame(() => {
      I(ai, !0);
    }), m = kh((x) => {
      I(ae, { ...x }, !0);
    });
    return () => {
      cancelAnimationFrame(h), m(), Zn(), Kt && typeof window < "u" && window.clearTimeout(Kt);
    };
  });
  let Ue = /* @__PURE__ */ R(() => f() ?? s(ae).buttonLayout), fi = /* @__PURE__ */ R(() => b() ?? s(ae).systemButtonPlacement), mi = /* @__PURE__ */ R(() => p() ?? s(ae).sideResizeMode), oo = /* @__PURE__ */ R(() => S() ?? s(ae).borderWidth), ks = /* @__PURE__ */ R(() => v() ?? s(ae).borderRadius), xs = /* @__PURE__ */ R(() => _() ?? s(ae).chromePadding), qr = /* @__PURE__ */ R(() => Math.max(28, s(ae).titleBarHeight ?? C.titleBarHeight)), js = /* @__PURE__ */ R(() => Math.max(0.75, (s(ae).windowScale ?? C.windowScale) / 100)), gi = /* @__PURE__ */ R(() => O() ?? s(ae).chromeStyle), _s = /* @__PURE__ */ R(() => s(ae).chromeTexture ? s(ae).chromeBeamStyle : "none"), qs = /* @__PURE__ */ R(() => s(ae).chromeGlossStyle), Ms = /* @__PURE__ */ R(() => z() ?? s(ae).alignment), jn = /* @__PURE__ */ R(() => j() ?? s(ae).themePreset), Ss = /* @__PURE__ */ R(() => we() ?? s(ae).fontPreset), zs = /* @__PURE__ */ R(() => ke() ?? s(ae).snapRestoreOnRelease), Ts = /* @__PURE__ */ R(() => te() ?? s(ae).shiftDragAction), Ps = /* @__PURE__ */ R(() => d() < 560 ? "left" : s(Ms)), pi = /* @__PURE__ */ R(() => d() < 520), Es = /* @__PURE__ */ R(() => fh({
    themePreset: s(jn),
    titleTone: s(ae).titleTone
  })), Rs = /* @__PURE__ */ R(() => mh({
    themePreset: s(jn),
    titleEffect: s(ae).titleEffect
  })), vi = /* @__PURE__ */ R(() => r().trim().length > 0), bi = /* @__PURE__ */ R(() => i() === "auto" ? s(fi) === "left" ? "after" : "before" : i()), P = /* @__PURE__ */ R(() => s(jn) === "aero"), yi = /* @__PURE__ */ R(() => s(jn) === "windows-basic"), Z = /* @__PURE__ */ R(() => s(P) || s(yi)), qe = /* @__PURE__ */ R(() => s(Z) || s(jn) === "windows-vista"), $s = /* @__PURE__ */ R(() => Math.max(s(wi), s(ui)) + (s(pi) ? 12 : 18));
  function io(h) {
    return at.has(h);
  }
  function ki(h) {
    switch (h) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function xi(h, m = !1) {
    if (m)
      return h === "mac" || h === "ubuntu" || h === "xubuntu" ? void 0 : "stack";
    switch (h) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function ji(h, m = !1) {
    if (m)
      return "stack";
    switch (h) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let $t = /* @__PURE__ */ ie(!1), Vn = 0, Gn = 0, Mr = 0, Sr = 0, Cs = /* @__PURE__ */ R(() => s($t) && !g() && !u() && s(Ue) !== "mac" && typeof window < "u" && s(jr) <= 84 && Math.abs(s(xr) - window.innerWidth / 2) <= 232), Un = /* @__PURE__ */ R(() => s(ut) ? Mi(s(ut)) : null);
  function Ct(h) {
    var m;
    o() !== h && (o(h), (m = bn()) == null || m(o()));
  }
  function Yn() {
    return { x: a(), y: l(), width: d(), height: c() };
  }
  function ao(h, m = d()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerWidth - m, h));
  }
  function so(h, m = c()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerHeight - Math.min(m, s(qr)), h));
  }
  function Qt(h) {
    const m = Math.max(On, Math.round(h.width)), x = Math.max(yr, Math.round(h.height));
    return {
      x: ao(Math.round(h.x), m),
      y: so(Math.round(h.y), x),
      width: m,
      height: x
    };
  }
  function lo() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : Qt({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function _i(h) {
    const m = Qt(h);
    a(m.x), l(m.y), d(m.width), c(m.height), H(null), Ct("normal");
  }
  function qi() {
    _i(ue() ?? lo());
  }
  function Mi(h) {
    if (typeof window > "u") return null;
    const m = window.innerWidth, x = window.innerHeight, T = Math.round(m / 2), X = Math.round(x / 2);
    switch (h) {
      case "maximize":
        return { x: 0, y: 0, width: m, height: x };
      case "left-half":
        return { x: 0, y: 0, width: T, height: x };
      case "right-half":
        return {
          x: m - T,
          y: 0,
          width: T,
          height: x
        };
      case "top-left":
        return { x: 0, y: 0, width: T, height: X };
      case "top-right":
        return {
          x: m - T,
          y: 0,
          width: T,
          height: X
        };
      case "bottom-left":
        return {
          x: 0,
          y: x - X,
          width: T,
          height: X
        };
      case "bottom-right":
        return {
          x: m - T,
          y: x - X,
          width: T,
          height: X
        };
    }
  }
  function ho(h, m = Yn()) {
    if (ue(Qt(m)), h === "maximize") {
      typeof window < "u" && (a(0), l(0), d(window.innerWidth), c(window.innerHeight)), H("maximize"), Ct("maximized");
      return;
    }
    const x = Mi(h);
    x && (H(h), Ct("normal"), a(x.x), l(x.y), d(x.width), c(x.height));
  }
  function As() {
    typeof window > "u" || ((o() === "maximized" || H()) && qi(), a(ao(Math.round((window.innerWidth - d()) / 2), d())), l(so(Math.round((window.innerHeight - c()) / 2), c())));
  }
  function zr() {
    if (o() === "maximized") {
      qi();
      return;
    }
    ho("maximize");
  }
  function Is() {
    Ct(o() === "rolled-up" ? "normal" : "rolled-up");
  }
  function Si() {
    Ct("minimized");
  }
  function Bs() {
    I(Fn, null), Kt && typeof window < "u" && window.clearTimeout(Kt), Kt = 0;
  }
  function zi(h) {
    if (typeof window > "u") {
      I(Fn, h, !0);
      return;
    }
    Bs(), I(Fn, h, !0), Kt = window.setTimeout(
      () => {
        I(Fn, null), Kt = 0;
      },
      ys
    );
  }
  function Ws() {
    var X, ne;
    if (typeof window > "u" || !s(Jt))
      return !1;
    const h = 24, m = Math.ceil(Math.max(s(Jt).scrollWidth, ((X = s(Jt).firstElementChild) == null ? void 0 : X.scrollWidth) ?? 0)), x = Math.ceil(Math.max(s(Jt).scrollHeight, ((ne = s(Jt).firstElementChild) == null ? void 0 : ne.scrollHeight) ?? 0)), T = Qt({
      x: Math.round((window.innerWidth - m) / 2),
      y: Math.round((window.innerHeight - x - s(qr)) / 2),
      width: Math.min(window.innerWidth - h * 2, Math.max(On, m + s(oo) * 2)),
      height: Math.min(window.innerHeight - h * 2, Math.max(yr, x + s(qr) + s(oo) * 2))
    });
    return ue(Yn()), _i(T), !0;
  }
  function Ls(h) {
    if (u() || g() || Ti(h.target))
      return;
    if (s(Fn) === "fit-content") {
      zi("maximize"), zr();
      return;
    }
    const m = Ws();
    zi(m ? "fit-content" : "maximize"), m || zr();
  }
  function Ti(h) {
    return !!(h != null && h.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Os(h, m) {
    if (!s(kr)) return null;
    for (const x of s(kr).querySelectorAll("[data-snap-target]")) {
      const T = x.getBoundingClientRect();
      if (h >= T.left && h <= T.right && m >= T.top && m <= T.bottom)
        return x.dataset.snapTarget;
    }
    return null;
  }
  function Ds(h, m) {
    if (typeof window > "u") return null;
    const x = 18, T = Math.max(72, Math.round(window.innerHeight * 0.14));
    return m <= x ? h <= window.innerWidth * 0.33 ? "top-left" : h >= window.innerWidth * 0.67 ? "top-right" : "maximize" : h <= x ? m <= T ? "top-left" : m >= window.innerHeight - T ? "bottom-left" : "left-half" : h >= window.innerWidth - x ? m <= T ? "top-right" : m >= window.innerHeight - T ? "bottom-right" : "right-half" : null;
  }
  function Ns(h, m) {
    if (I(xr, h, !0), I(jr, m, !0), !s($t) || u() || g() || s(Ue) === "mac") {
      I(ut, null);
      return;
    }
    I(ut, Os(h, m) ?? Ds(h, m), !0);
  }
  function Hs(h, m) {
    if (!Xt) return;
    const x = ue() ?? lo(), T = Qt({
      ...x,
      x: h - x.width * hi,
      y: m - ci
    });
    a(T.x), l(T.y), d(T.width), c(T.height), Ct("normal"), H(null), Xt = !1, Hn = !0, Vn = h, Gn = m, Mr = a(), Sr = l();
  }
  function Pi(h) {
    !h.shiftKey || xn || s(Ts) !== "pin" || !it() || pe() || (it()(), xn = !0);
  }
  function Fs(h) {
    if (u() || g() || o() === "minimized" || Ti(h.target)) return;
    I($t, !0), xn = !1, I(ut, null), I(xr, h.clientX, !0), I(jr, h.clientY, !0), Vn = h.clientX, Gn = h.clientY, Mr = a(), Sr = l(), Hn = !1, Xt = !1;
    const m = Yn();
    hi = m.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (h.clientX - m.x) / m.width)), ci = Math.max(12, Math.min(28, Math.round(h.clientY - m.y || 18))), o() === "maximized" || H() ? (kn = o() === "maximized" ? "maximize" : H(), ue(ue() ?? lo()), Xt = !0) : kn = null, Pi(h), h.currentTarget.setPointerCapture(h.pointerId);
  }
  function co(h) {
    s($t) && (Pi(h), Xt && (Math.abs(h.clientX - Vn) > 2 || Math.abs(h.clientY - Gn) > 2) && Hs(h.clientX, h.clientY), a(ao(Mr + (h.clientX - Vn), d())), l(so(Sr + (h.clientY - Gn), c())), Ns(h.clientX, h.clientY));
  }
  function _n(h) {
    if (!s($t)) return;
    const m = s(ut);
    I(ut, null), I($t, !1), Xt = !1, m ? ho(m, Yn()) : Hn && kn && s(zs) && !h.shiftKey && !xn ? ho(kn, Yn()) : H(null), kn = null, Hn = !1, xn = !1;
    const x = h.currentTarget;
    "hasPointerCapture" in x && x.hasPointerCapture(h.pointerId) && x.releasePointerCapture(h.pointerId), window.removeEventListener("pointermove", co), window.removeEventListener("pointerup", _n), window.removeEventListener("pointercancel", _n);
  }
  function Vs(h, m) {
    u() || g() || o() === "maximized" || o() === "minimized" || (H() && H(null), m.stopPropagation(), m.preventDefault(), I(Dn, !0), Rt = h, li = m.clientX, di = m.clientY, _r = a(), ro = l(), Zt = d(), Nn = c(), I(ut, null), window.addEventListener("pointermove", Ei), window.addEventListener("pointerup", Zn), window.addEventListener("pointercancel", Zn));
  }
  function Ei(h) {
    if (!s(Dn)) return;
    const m = h.clientX - li, x = h.clientY - di;
    let T = _r, X = ro, ne = Zt, Me = Nn;
    if (s(mi) === "mirrored" && (Rt === "e" || Rt === "w")) {
      const wo = Rt === "e" ? m : -m;
      ne = Math.max(On, Zt + wo * 2), T = _r - (ne - Zt) / 2;
    } else Rt.includes("e") && (ne = Math.max(On, Zt + m));
    Rt.includes("s") && (Me = Math.max(yr, Nn + x)), s(mi) !== "mirrored" && Rt.includes("w") && (ne = Math.max(On, Zt - m), T = _r + (Zt - ne)), Rt.includes("n") && (Me = Math.max(yr, Nn - x), X = ro + (Nn - Me));
    const xt = Qt({ x: T, y: X, width: ne, height: Me });
    a(xt.x), l(xt.y), d(xt.width), c(xt.height);
  }
  function Zn() {
    s(Dn) && (I(Dn, !1), window.removeEventListener("pointermove", Ei), window.removeEventListener("pointerup", Zn), window.removeEventListener("pointercancel", Zn));
  }
  function Gs(h) {
    var x;
    if (typeof window > "u") return;
    const m = Qt({
      x: h.clientX - Math.round(d() * 0.38),
      y: h.clientY - 18,
      width: d(),
      height: c()
    });
    a(m.x), l(m.y), Mr = a(), Sr = l(), Vn = h.clientX, Gn = h.clientY, I(xr, h.clientX, !0), I(jr, h.clientY, !0), I(ut, null), kn = null, Hn = !1, Xt = !1, xn = !0, I($t, !0), window.addEventListener("pointermove", co), window.addEventListener("pointerup", _n), window.addEventListener("pointercancel", _n), (x = vn()) == null || x();
  }
  Ao(() => {
    const h = he() ? `${he().pointerId}:${he().clientX}:${he().clientY}` : "";
    !he() || h === si || (si = h, Gs(he()));
  }), Ao(() => {
    o() === "maximized" && H() !== "maximize" && H("maximize"), o() === "normal" && H() === "maximize" && H(null);
  });
  var Us = {
    get title() {
      return n();
    },
    set title(h) {
      n(h), q();
    },
    get helpText() {
      return r();
    },
    set helpText(h = "") {
      r(h), q();
    },
    get helpPlacement() {
      return i();
    },
    set helpPlacement(h = "auto") {
      i(h), q();
    },
    get state() {
      return o();
    },
    set state(h = "normal") {
      o(h), q();
    },
    get x() {
      return a();
    },
    set x(h = 100) {
      a(h), q();
    },
    get y() {
      return l();
    },
    set y(h = 100) {
      l(h), q();
    },
    get width() {
      return d();
    },
    set width(h = 600) {
      d(h), q();
    },
    get height() {
      return c();
    },
    set height(h = 400) {
      c(h), q();
    },
    get locked() {
      return u();
    },
    set locked(h = !1) {
      u(h), q();
    },
    get chromeless() {
      return g();
    },
    set chromeless(h = !1) {
      g(h), q();
    },
    get buttonLayout() {
      return f();
    },
    set buttonLayout(h) {
      f(h), q();
    },
    get systemButtonPlacement() {
      return b();
    },
    set systemButtonPlacement(h) {
      b(h), q();
    },
    get sideResizeMode() {
      return p();
    },
    set sideResizeMode(h) {
      p(h), q();
    },
    get borderWidth() {
      return S();
    },
    set borderWidth(h) {
      S(h), q();
    },
    get borderRadius() {
      return v();
    },
    set borderRadius(h) {
      v(h), q();
    },
    get chromePadding() {
      return _();
    },
    set chromePadding(h) {
      _(h), q();
    },
    get chromeStyle() {
      return O();
    },
    set chromeStyle(h) {
      O(h), q();
    },
    get alignment() {
      return z();
    },
    set alignment(h) {
      z(h), q();
    },
    get themePreset() {
      return j();
    },
    set themePreset(h) {
      j(h), q();
    },
    get fontPreset() {
      return we();
    },
    set fontPreset(h) {
      we(h), q();
    },
    get snapRestoreOnRelease() {
      return ke();
    },
    set snapRestoreOnRelease(h) {
      ke(h), q();
    },
    get shiftDragAction() {
      return te();
    },
    set shiftDragAction(h) {
      te(h), q();
    },
    get zIndex() {
      return Y();
    },
    set zIndex(h = 100) {
      Y(h), q();
    },
    get pinned() {
      return pe();
    },
    set pinned(h = !1) {
      pe(h), q();
    },
    get dragSeed() {
      return he();
    },
    set dragSeed(h = null) {
      he(h), q();
    },
    get restoreFrame() {
      return ue();
    },
    set restoreFrame(h = null) {
      ue(h), q();
    },
    get snapTarget() {
      return H();
    },
    set snapTarget(h = null) {
      H(h), q();
    },
    get onClose() {
      return ot();
    },
    set onClose(h) {
      ot(h), q();
    },
    get onPinToggle() {
      return it();
    },
    set onPinToggle(h) {
      it(h), q();
    },
    get onConsumeDragSeed() {
      return vn();
    },
    set onConsumeDragSeed(h) {
      vn(h), q();
    },
    get onStateChange() {
      return bn();
    },
    set onStateChange(h) {
      bn(h), q();
    },
    get children() {
      return yn();
    },
    set children(h) {
      yn(h), q();
    }
  }, Ri = Ah(), $i = er(Ri);
  {
    var Ys = (h) => {
      var m = xh();
      let x;
      Se(() => x = Ir(m, "", x, {
        left: `${s(Un).x}px`,
        top: `${s(Un).y}px`,
        width: `${s(Un).width}px`,
        height: `${s(Un).height}px`,
        "z-index": Y() + 2
      })), le(h, m);
    };
    me($i, (h) => {
      s(Un) && !g() && h(Ys);
    });
  }
  var Ci = fe($i, 2);
  {
    var Zs = (h) => {
      var m = _h();
      let x;
      ea(m, 21, () => vr, (T) => T.id, (T, X) => {
        var ne = jh();
        let Me;
        var xt = F(ne);
        N(ne), Se(() => {
          Me = se(ne, 1, "snap-cell svelte-1k3ojqh", null, Me, { "is-active": s(ut) === s(X).id }), V(ne, "data-snap-target", s(X).id), se(xt, 1, `snap-shape shape-${s(X).preview}`, "svelte-1k3ojqh");
        }), le(T, ne);
      }), N(m), aa(m, (T) => I(kr, T), () => s(kr)), Se(() => x = Ir(m, "", x, { "z-index": Y() + 3 })), le(h, m);
    };
    me(Ci, (h) => {
      s(Cs) && !g() && h(Zs);
    });
  }
  var Be = fe(Ci, 2);
  let Ai, Ii;
  var Bi = F(Be);
  {
    var Xs = (h) => {
      var m = Rh();
      let x;
      var T = F(m), X = F(T);
      {
        var ne = (G) => {
          var re = qh();
          let U;
          var Ye = F(re);
          Ze(Ye, { name: "pin" }), N(re), Se(() => {
            U = se(re, 1, ze(s(P) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", U, {
              "efs-win7-tool-button": !s(P) && s(Z),
              "is-active": pe(),
              active: pe()
            }), V(re, "aria-label", pe() ? "Unpin window" : "Pin window"), V(re, "aria-pressed", pe());
          }), Re("click", re, function(...Ee) {
            var We;
            (We = it()) == null || We.apply(this, Ee);
          }), le(G, re);
        };
        me(X, (G) => {
          it() && G(ne);
        });
      }
      var Me = fe(X, 2);
      let xt;
      var wo = F(Me);
      Ze(wo, { name: "center" }), N(Me);
      var Xn = fe(Me, 2);
      let Li;
      var el = F(Xn);
      {
        let G = /* @__PURE__ */ R(() => o() === "rolled-up" ? "roll-up" : "roll-down");
        Ze(el, {
          get name() {
            return s(G);
          }
        });
      }
      N(Xn), N(T);
      var Kn = fe(T, 2);
      let Oi;
      var tl = F(Kn, !0);
      N(Kn);
      var uo = fe(Kn, 2), Di = F(uo);
      {
        var nl = (G) => {
          var re = Mh(), U = F(re);
          let Ye;
          var Ee = F(U);
          Ze(Ee, { name: "help" }), N(U);
          var We = fe(U, 2), xe = F(We), At = F(xe, !0);
          N(xe);
          var Le = fe(xe, 2), It = F(Le, !0);
          N(Le), N(We), N(re), Se(() => {
            Ye = se(
              U,
              1,
              ze(s(P) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              Ye,
              {
                "efs-win7-tool-button": !s(P) && s(Z),
                "is-help": !s(P) && s(Z)
              }
            ), V(U, "aria-label", s(qe) ? "Help" : `About ${n()}`), V(U, "title", `About ${n()}`), Jn(At, n()), Jn(It, r());
          }), le(G, re);
        };
        me(Di, (G) => {
          s(vi) && s(bi) === "before" && G(nl);
        });
      }
      var Tr = fe(Di, 2);
      let Ni;
      var rl = F(Tr);
      {
        var ol = (G) => {
          var re = zh(), U = er(re);
          {
            var Ye = (J) => {
              var oe = Sh();
              let Oe;
              var go = F(oe);
              {
                var po = (st) => {
                  {
                    let jt = /* @__PURE__ */ R(() => ki(s(Ue)));
                    Ze(st, {
                      name: "close",
                      get variant() {
                        return s(jt);
                      }
                    });
                  }
                };
                me(go, (st) => {
                  s(Z) || st(po);
                });
              }
              N(oe), Se(() => {
                Oe = se(
                  oe,
                  1,
                  ze(s(P) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  Oe,
                  {
                    "is-close": !s(P) && s(qe)
                  }
                ), V(oe, "aria-label", s(Z) ? "Close" : "Close window");
              }), Re("click", oe, function(...st) {
                var jt;
                (jt = ot()) == null || jt.apply(this, st);
              }), le(J, oe);
            };
            me(U, (J) => {
              ot() && J(Ye);
            });
          }
          var Ee = fe(U, 2);
          let We;
          var xe = F(Ee);
          {
            var At = (J) => {
              {
                let oe = /* @__PURE__ */ R(() => o() === "minimized" ? "restore" : "minimize"), Oe = /* @__PURE__ */ R(() => xi(s(Ue), o() === "minimized"));
                Ze(J, {
                  get name() {
                    return s(oe);
                  },
                  get variant() {
                    return s(Oe);
                  }
                });
              }
            };
            me(xe, (J) => {
              s(Z) || J(At);
            });
          }
          N(Ee);
          var Le = fe(Ee, 2);
          let It;
          var fo = F(Le);
          {
            var mo = (J) => {
              {
                let oe = /* @__PURE__ */ R(() => o() === "maximized" ? "restore" : "maximize"), Oe = /* @__PURE__ */ R(() => ji(s(Ue), o() === "maximized"));
                Ze(J, {
                  get name() {
                    return s(oe);
                  },
                  get variant() {
                    return s(Oe);
                  }
                });
              }
            };
            me(fo, (J) => {
              s(Z) || J(mo);
            });
          }
          N(Le), Se(() => {
            We = se(
              Ee,
              1,
              ze(s(P) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              We,
              {
                "is-minimize": !s(P) && s(qe) && o() !== "minimized",
                "is-restore": !s(P) && s(qe) && o() === "minimized"
              }
            ), V(Ee, "aria-label", s(Z) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), It = se(
              Le,
              1,
              ze(s(P) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              It,
              {
                "is-maximize": !s(P) && s(qe) && o() !== "maximized",
                "is-restore": !s(P) && s(qe) && o() === "maximized"
              }
            ), V(Le, "aria-label", s(Z) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), Re("click", Ee, () => o() === "minimized" ? Ct("normal") : Si()), Re("click", Le, zr), le(G, re);
        }, il = /* @__PURE__ */ R(() => io(s(Ue))), al = (G) => {
          var re = Ph(), U = er(re);
          let Ye;
          var Ee = F(U);
          {
            var We = (J) => {
              {
                let oe = /* @__PURE__ */ R(() => o() === "minimized" ? "restore" : "minimize"), Oe = /* @__PURE__ */ R(() => xi(s(Ue), o() === "minimized"));
                Ze(J, {
                  get name() {
                    return s(oe);
                  },
                  get variant() {
                    return s(Oe);
                  }
                });
              }
            };
            me(Ee, (J) => {
              s(Z) || J(We);
            });
          }
          N(U);
          var xe = fe(U, 2);
          let At;
          var Le = F(xe);
          {
            var It = (J) => {
              {
                let oe = /* @__PURE__ */ R(() => o() === "maximized" ? "restore" : "maximize"), Oe = /* @__PURE__ */ R(() => ji(s(Ue), o() === "maximized"));
                Ze(J, {
                  get name() {
                    return s(oe);
                  },
                  get variant() {
                    return s(Oe);
                  }
                });
              }
            };
            me(Le, (J) => {
              s(Z) || J(It);
            });
          }
          N(xe);
          var fo = fe(xe, 2);
          {
            var mo = (J) => {
              var oe = Th();
              let Oe;
              var go = F(oe);
              {
                var po = (st) => {
                  {
                    let jt = /* @__PURE__ */ R(() => ki(s(Ue)));
                    Ze(st, {
                      name: "close",
                      get variant() {
                        return s(jt);
                      }
                    });
                  }
                };
                me(go, (st) => {
                  s(Z) || st(po);
                });
              }
              N(oe), Se(() => {
                Oe = se(
                  oe,
                  1,
                  ze(s(P) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  Oe,
                  {
                    "is-close": !s(P) && s(qe)
                  }
                ), V(oe, "aria-label", s(Z) ? "Close" : "Close window");
              }), Re("click", oe, function(...st) {
                var jt;
                (jt = ot()) == null || jt.apply(this, st);
              }), le(J, oe);
            };
            me(fo, (J) => {
              ot() && J(mo);
            });
          }
          Se(() => {
            Ye = se(
              U,
              1,
              ze(s(P) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              Ye,
              {
                "is-minimize": !s(P) && s(qe) && o() !== "minimized",
                "is-restore": !s(P) && s(qe) && o() === "minimized"
              }
            ), V(U, "aria-label", s(Z) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), At = se(
              xe,
              1,
              ze(s(P) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              At,
              {
                "is-maximize": !s(P) && s(qe) && o() !== "maximized",
                "is-restore": !s(P) && s(qe) && o() === "maximized"
              }
            ), V(xe, "aria-label", s(Z) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), Re("click", U, () => o() === "minimized" ? Ct("normal") : Si()), Re("click", xe, zr), le(G, re);
        };
        me(rl, (G) => {
          s(il) ? G(ol) : G(al, -1);
        });
      }
      N(Tr);
      var sl = fe(Tr, 2);
      {
        var ll = (G) => {
          var re = Eh(), U = F(re);
          let Ye;
          var Ee = F(U);
          Ze(Ee, { name: "help" }), N(U);
          var We = fe(U, 2), xe = F(We), At = F(xe, !0);
          N(xe);
          var Le = fe(xe, 2), It = F(Le, !0);
          N(Le), N(We), N(re), Se(() => {
            Ye = se(
              U,
              1,
              ze(s(P) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              Ye,
              {
                "efs-win7-tool-button": !s(P) && s(Z),
                "is-help": !s(P) && s(Z)
              }
            ), V(U, "aria-label", s(qe) ? "Help" : `About ${n()}`), V(U, "title", `About ${n()}`), Jn(At, n()), Jn(It, r());
          }), le(G, re);
        };
        me(sl, (G) => {
          s(vi) && s(bi) === "after" && G(ll);
        });
      }
      N(uo), N(m), Se(
        (G) => {
          x = se(
            m,
            1,
            ze(s(P) ? "title-bar" : `window-chrome chrome-${s(gi)}`),
            "svelte-1k3ojqh",
            x,
            G
          ), V(m, "aria-label", `${n()} window controls`), xt = se(Me, 1, ze(s(P) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", xt, {
            "efs-win7-tool-button": !s(P) && s(Z)
          }), Li = se(Xn, 1, ze(s(P) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Li, {
            "efs-win7-tool-button": !s(P) && s(Z),
            "is-active": o() === "rolled-up",
            active: o() === "rolled-up"
          }), V(Xn, "aria-label", o() === "rolled-up" ? "Restore height" : "Roll up"), Oi = se(
            Kn,
            1,
            ze(s(P) ? "title-bar-text" : `window-title align-${s(Ps)}`),
            "svelte-1k3ojqh",
            Oi,
            {
              "title-bar-text": !s(P) && s(qe)
            }
          ), V(Kn, "title", n()), Jn(tl, n()), Ni = se(
            Tr,
            1,
            ze(s(P) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            Ni,
            {
              "title-bar-controls": !s(P) && s(qe)
            }
          );
        },
        [
          () => ({
            "layout-mac": !s(P) && io(s(Ue)),
            "layout-windows": !s(P) && !io(s(Ue)),
            "title-bar": !s(P) && s(qe)
          })
        ]
      ), Re("pointerdown", m, Fs), Re("pointermove", m, co), Re("pointerup", m, _n), yd("pointercancel", m, _n), Re("dblclick", m, Ls), Re("click", Me, As), Re("click", Xn, Is), oa(T, "clientWidth", (G) => I(wi, G)), oa(uo, "clientWidth", (G) => I(ui, G)), le(h, m);
    };
    me(Bi, (h) => {
      g() || h(Xs);
    });
  }
  var Wi = fe(Bi, 2);
  {
    var Ks = (h) => {
      var m = $h();
      let x;
      var T = F(m);
      zd(T, () => yn() ?? va), N(m), aa(m, (X) => I(Jt, X), () => s(Jt)), Se(() => x = se(m, 1, "window-content svelte-1k3ojqh", null, x, { "window-body": s(Z) })), le(h, m);
    };
    me(Wi, (h) => {
      o() !== "rolled-up" && o() !== "minimized" && h(Ks);
    });
  }
  var Js = fe(Wi, 2);
  {
    var Qs = (h) => {
      var m = hs(), x = er(m);
      ea(x, 16, () => br, (T) => T, (T, X) => {
        var ne = Ch();
        Se(() => se(ne, 1, `resize-handle dir-${X}`, "svelte-1k3ojqh")), Re("pointerdown", ne, (Me) => Vs(X, Me)), le(T, ne);
      }), le(h, m);
    };
    me(Js, (h) => {
      !g() && o() !== "maximized" && o() !== "minimized" && h(Qs);
    });
  }
  return N(Be), Se(() => {
    Ai = se(Be, 1, "window-shell svelte-1k3ojqh", null, Ai, {
      win7: s(Z),
      "win7-theme": s(P),
      "basic7-theme": s(yi),
      window: s(Z),
      active: s(Z),
      glass: s(P),
      "is-ready": s(ai),
      "is-dragging": s($t),
      "is-resizing": s(Dn),
      "compact-controls": s(pi),
      maximized: o() === "maximized",
      minimized: o() === "minimized",
      "rolled-up": o() === "rolled-up",
      chromeless: g()
    }), V(Be, "data-layout", s(P) ? void 0 : s(Ue)), V(Be, "data-system-placement", s(fi)), V(Be, "data-style", s(P) ? void 0 : s(gi)), V(Be, "data-theme", s(jn)), V(Be, "data-font", s(Ss)), V(Be, "data-beam", s(P) ? void 0 : s(_s)), V(Be, "data-gloss", s(P) ? void 0 : s(qs)), V(Be, "data-title-tone", s(P) ? void 0 : s(Es)), V(Be, "data-title-effect", s(P) ? void 0 : s(Rs)), Ii = Ir(Be, "", Ii, {
      "--window-border-width": `${s(oo)}px`,
      "--window-radius": `${s(ks)}px`,
      "--window-chrome-padding": `${s(xs)}px`,
      "--window-titlebar-height": `${s(qr)}px`,
      "--window-shell-scale": `${s(js)}`,
      "--window-title-guard": `${s($s)}px`,
      transform: o() === "normal" || o() === "rolled-up" ? `translate(${a()}px, ${l()}px)` : void 0,
      width: o() === "normal" || o() === "rolled-up" ? `${d()}px` : void 0,
      height: o() === "normal" ? `${c()}px` : void 0,
      "z-index": Y()
    });
  }), le(e, Ri), Qr(Us);
}
kd([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
oi(
  bs,
  {
    title: {},
    helpText: {},
    helpPlacement: {},
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
    restoreFrame: {},
    snapTarget: {},
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
var Bh = /* @__PURE__ */ ye('<div class="window-content svelte-495ihg"><!></div>'), Wh = /* @__PURE__ */ ye('<div class="window-layer svelte-495ihg"><!></div>');
const Lh = {
  hash: "svelte-495ihg",
  code: `
  @import '../../../styles/win7.css';
  @import '../../../styles/win7-overrides.css';:host {display:contents;}:host([hidden]) {display:none;}.window-layer.svelte-495ihg {position:fixed;inset:0;z-index:12040;pointer-events:none;isolation:isolate;}.window-layer.svelte-495ihg .window-shell {pointer-events:auto;--window-panel: var(--efs-window-theme-panel, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)));--window-surface: var(--efs-window-theme-surface, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)));--window-border: var(--efs-window-theme-border, var(--shell-border, #e2e8f0));}.window-content.svelte-495ihg {width:100%;height:100%;min-width:0;min-height:0;box-sizing:border-box;padding:0;background:transparent;}`
};
function Oh(e, t) {
  Jr(t, !0), ri(e, Lh);
  let n = M(t, "open", 7, !1), r = M(t, "title", 7, "Window"), i = M(t, "x", 15, 120), o = M(t, "y", 15, 96), a = M(t, "width", 15, 640), l = M(t, "height", 15, 520), d = M(t, "zIndex", 7, 12040), c = M(t, "pinned", 7, !1), u = M(t, "buttonLayout", 7, "windows-11"), g = M(t, "chromeStyle", 7, "solid"), f = M(t, "alignment", 7, "left"), b = M(t, "themePreset", 7, "inherit"), p = M(t, "onClose", 7, null), S = /* @__PURE__ */ ie("normal");
  var v = {
    get open() {
      return n();
    },
    set open(j = !1) {
      n(j), q();
    },
    get title() {
      return r();
    },
    set title(j = "Window") {
      r(j), q();
    },
    get x() {
      return i();
    },
    set x(j = 120) {
      i(j), q();
    },
    get y() {
      return o();
    },
    set y(j = 96) {
      o(j), q();
    },
    get width() {
      return a();
    },
    set width(j = 640) {
      a(j), q();
    },
    get height() {
      return l();
    },
    set height(j = 520) {
      l(j), q();
    },
    get zIndex() {
      return d();
    },
    set zIndex(j = 12040) {
      d(j), q();
    },
    get pinned() {
      return c();
    },
    set pinned(j = !1) {
      c(j), q();
    },
    get buttonLayout() {
      return u();
    },
    set buttonLayout(j = "windows-11") {
      u(j), q();
    },
    get chromeStyle() {
      return g();
    },
    set chromeStyle(j = "solid") {
      g(j), q();
    },
    get alignment() {
      return f();
    },
    set alignment(j = "left") {
      f(j), q();
    },
    get themePreset() {
      return b();
    },
    set themePreset(j = "inherit") {
      b(j), q();
    },
    get onClose() {
      return p();
    },
    set onClose(j = null) {
      p(j), q();
    }
  }, _ = hs(), O = er(_);
  {
    var z = (j) => {
      var we = Wh(), ke = F(we);
      {
        let te = /* @__PURE__ */ R(() => p() ?? void 0);
        bs(ke, {
          get title() {
            return r();
          },
          get pinned() {
            return c();
          },
          get zIndex() {
            return d();
          },
          get buttonLayout() {
            return u();
          },
          get chromeStyle() {
            return g();
          },
          get alignment() {
            return f();
          },
          get themePreset() {
            return b();
          },
          get onClose() {
            return s(te);
          },
          get state() {
            return s(S);
          },
          set state(Y) {
            I(S, Y, !0);
          },
          get x() {
            return i();
          },
          set x(Y) {
            i(Y);
          },
          get y() {
            return o();
          },
          set y(Y) {
            o(Y);
          },
          get width() {
            return a();
          },
          set width(Y) {
            a(Y);
          },
          get height() {
            return l();
          },
          set height(Y) {
            l(Y);
          },
          children: (Y, pe) => {
            var he = Bh(), ue = F(he);
            $d(ue, t, "default", {}), N(he), le(Y, he);
          },
          $$slots: { default: !0 }
        });
      }
      N(we), le(j, we);
    };
    me(O, (j) => {
      n() && j(z);
    });
  }
  return le(e, _), Qr(v);
}
customElements.define("efsdb-window-shell", oi(
  Oh,
  {
    open: {},
    title: {},
    x: {},
    y: {},
    width: {},
    height: {},
    zIndex: {},
    pinned: {},
    buttonLayout: {},
    chromeStyle: {},
    alignment: {},
    themePreset: {},
    onClose: {}
  },
  ["default"],
  [],
  { mode: "open" }
));
