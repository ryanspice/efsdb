var Rs = Object.defineProperty;
var wo = (e) => {
  throw TypeError(e);
};
var Ps = (e, t, n) => t in e ? Rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => Ps(e, typeof t != "symbol" ? t + "" : t, n), Jr = (e, t, n) => t.has(e) || wo("Cannot " + n);
var h = (e, t, n) => (Jr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => t.has(e) ? wo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), R = (e, t, n, r) => (Jr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), W = (e, t, n) => (Jr(e, t, "access private method"), n);
var Oo;
typeof window < "u" && ((Oo = window.__svelte ?? (window.__svelte = {})).v ?? (Oo.v = /* @__PURE__ */ new Set())).add("5");
const Es = 1, $s = 2, No = 4, Ts = 8, As = 16, Cs = 1, Ls = 4, Os = 8, Ds = 16, Is = 1, Ns = 2, Wo = "[", yi = "[!", mo = "[?", _i = "]", kn = {}, ie = Symbol(), Vo = "http://www.w3.org/1999/xhtml", Ws = !1;
var Fo = Array.isArray, Vs = Array.prototype.indexOf, Mn = Array.prototype.includes, Tr = Array.from, Mr = Object.keys, jr = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Hs = Object.prototype, Bs = Array.prototype, Ho = Object.getPrototypeOf, po = Object.isExtensible;
const Bo = () => {
};
function Us(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Uo() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const te = 2, jn = 4, Ar = 8, Yo = 1 << 24, Tt = 16, Ze = 32, Pt = 64, ri = 128, De = 512, K = 1024, ue = 2048, it = 4096, $e = 8192, Ie = 16384, At = 32768, ii = 1 << 25, tn = 65536, go = 1 << 17, Ys = 1 << 18, an = 1 << 19, Zs = 1 << 20, rt = 1 << 25, nn = 65536, oi = 1 << 21, xi = 1 << 22, qt = 1 << 23, Hn = Symbol("$state"), Zo = Symbol("legacy props"), Gs = Symbol(""), ut = new class extends Error {
  constructor() {
    super(...arguments);
    V(this, "name", "StaleReactionError");
    V(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Do;
const Xs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Do = globalThis.document) != null && Do.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Cr = 3, tr = 8;
function Ks(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Js() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Qs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function el(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function nl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function rl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function il() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ol(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function al() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function sl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ll() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Lr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ul() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let D = !1;
function pt(e) {
  D = e;
}
let C;
function ye(e) {
  if (e === null)
    throw Lr(), kn;
  return C = e;
}
function nr() {
  return ye(/* @__PURE__ */ at(C));
}
function G(e) {
  if (D) {
    if (/* @__PURE__ */ at(C) !== null)
      throw Lr(), kn;
    C = e;
  }
}
function hl(e = 1) {
  if (D) {
    for (var t = e, n = C; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ at(n);
    C = n;
  }
}
function Sr(e = !0) {
  for (var t = 0, n = C; ; ) {
    if (n.nodeType === tr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === _i) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Wo || r === yi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(n)
    );
    e && n.remove(), n = i;
  }
}
function Go(e) {
  if (!e || e.nodeType !== tr)
    throw Lr(), kn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Xo(e) {
  return e === this.v;
}
function cl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ko(e) {
  return !cl(e, this.v);
}
let fl = !1, _e = null;
function Sn(e) {
  _e = e;
}
function Or(e, t = !1, n) {
  _e = {
    p: _e,
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
function Dr(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ja(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, _e = t.p, e ?? /** @type {T} */
  {};
}
function Jo() {
  return !0;
}
let Ht = [];
function Qo() {
  var e = Ht;
  Ht = [], Us(e);
}
function zt(e) {
  if (Ht.length === 0 && !Bn) {
    var t = Ht;
    queueMicrotask(() => {
      t === Ht && Qo();
    });
  }
  Ht.push(e);
}
function wl() {
  for (; Ht.length > 0; )
    Qo();
}
function ea(e) {
  var t = L;
  if (t === null)
    return T.f |= qt, e;
  if ((t.f & At) === 0 && (t.f & jn) === 0)
    throw e;
  St(e, t);
}
function St(e, t) {
  for (; t !== null; ) {
    if ((t.f & ri) !== 0) {
      if ((t.f & At) === 0)
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
const ml = -7169;
function Z(e, t) {
  e.f = e.f & ml | t;
}
function ki(e) {
  (e.f & De) !== 0 || e.deps === null ? Z(e, K) : Z(e, it);
}
function ta(e) {
  if (e !== null)
    for (const t of e)
      (t.f & te) === 0 || (t.f & nn) === 0 || (t.f ^= nn, ta(
        /** @type {Derived} */
        t.deps
      ));
}
function na(e, t, n) {
  (e.f & ue) !== 0 ? t.add(e) : (e.f & it) !== 0 && n.add(e), ta(e.deps), Z(e, K);
}
let mr = !1;
function pl(e) {
  var t = mr;
  try {
    return mr = !1, [e(), mr];
  } finally {
    mr = t;
  }
}
const Ft = /* @__PURE__ */ new Set();
let A = null, oe = null, ai = null, Bn = !1, Qr = !1, wn = null, gr = null;
var vo = 0;
let gl = 1;
var pn, gn, vn, bn, Zn, ze, Zt, ht, ct, yn, he, si, li, di, ui, ra;
const zr = class zr {
  constructor() {
    $(this, he);
    // for debugging. TODO remove once async is stable
    V(this, "id", gl++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    V(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    V(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, pn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, gn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, vn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    $(this, bn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, Zn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    $(this, ze, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, Zt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, ht, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, ct, /* @__PURE__ */ new Map());
    V(this, "is_fork", !1);
    $(this, yn, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    h(this, ct).has(t) || h(this, ct).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = h(this, ct).get(t);
    if (n) {
      h(this, ct).delete(t);
      for (var r of n.d)
        Z(r, ue), this.schedule(r);
      for (r of n.m)
        Z(r, it), this.schedule(r);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, n) {
    n !== ie && !this.previous.has(t) && this.previous.set(t, n), (t.f & qt) === 0 && (this.current.set(t, t.v), oe == null || oe.set(t, t.v));
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, oe = null;
  }
  flush() {
    try {
      Qr = !0, A = this, W(this, he, li).call(this);
    } finally {
      vo = 0, ai = null, wn = null, gr = null, Qr = !1, A = null, oe = null, Rt.clear();
    }
  }
  discard() {
    for (const t of h(this, gn)) t(this);
    h(this, gn).clear(), Ft.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    R(this, vn, h(this, vn) + 1), t && R(this, bn, h(this, bn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n) {
    R(this, vn, h(this, vn) - 1), t && R(this, bn, h(this, bn) - 1), !(h(this, yn) || n) && (R(this, yn, !0), zt(() => {
      R(this, yn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      h(this, Zt).add(r);
    for (const r of n)
      h(this, ht).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    h(this, pn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    h(this, gn).add(t);
  }
  settled() {
    return (h(this, Zn) ?? R(this, Zn, Uo())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new zr();
      Qr || (Ft.add(A), Bn || zt(() => {
        A === t && t.flush();
      }));
    }
    return A;
  }
  apply() {
    {
      oe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (ai = t, (i = t.b) != null && i.is_pending && (t.f & (jn | Ar | Yo)) !== 0 && (t.f & At) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (wn !== null && n === L && (T === null || (T.f & te) === 0))
        return;
      if ((r & (Pt | Ze)) !== 0) {
        if ((r & K) === 0)
          return;
        n.f ^= K;
      }
    }
    h(this, ze).push(n);
  }
};
pn = new WeakMap(), gn = new WeakMap(), vn = new WeakMap(), bn = new WeakMap(), Zn = new WeakMap(), ze = new WeakMap(), Zt = new WeakMap(), ht = new WeakMap(), ct = new WeakMap(), yn = new WeakMap(), he = new WeakSet(), si = function() {
  return this.is_fork || h(this, bn) > 0;
}, li = function() {
  var s, d;
  if (vo++ > 1e3 && (Ft.delete(this), vl()), !W(this, he, si).call(this)) {
    for (const u of h(this, Zt))
      h(this, ht).delete(u), Z(u, ue), this.schedule(u);
    for (const u of h(this, ht))
      Z(u, it), this.schedule(u);
  }
  const t = h(this, ze);
  R(this, ze, []), this.apply();
  var n = wn = [], r = [], i = gr = [];
  for (const u of t)
    try {
      W(this, he, di).call(this, u, n, r);
    } catch (c) {
      throw sa(u), c;
    }
  if (A = null, i.length > 0) {
    var o = zr.ensure();
    for (const u of i)
      o.schedule(u);
  }
  if (wn = null, gr = null, W(this, he, si).call(this)) {
    W(this, he, ui).call(this, r), W(this, he, ui).call(this, n);
    for (const [u, c] of h(this, ct))
      aa(u, c);
  } else {
    h(this, vn) === 0 && Ft.delete(this), h(this, Zt).clear(), h(this, ht).clear();
    for (const u of h(this, pn)) u(this);
    h(this, pn).clear(), bo(r), bo(n), (s = h(this, Zn)) == null || s.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    A
  );
  if (h(this, ze).length > 0) {
    const u = a ?? (a = this);
    h(u, ze).push(...h(this, ze).filter((c) => !h(u, ze).includes(c)));
  }
  a !== null && (Ft.add(a), W(d = a, he, li).call(d)), Ft.has(this) || W(this, he, ra).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
di = function(t, n, r) {
  t.f ^= K;
  for (var i = t.first; i !== null; ) {
    var o = i.f, a = (o & (Ze | Pt)) !== 0, s = a && (o & K) !== 0, d = s || (o & $e) !== 0 || h(this, ct).has(i);
    if (!d && i.fn !== null) {
      a ? i.f ^= K : (o & jn) !== 0 ? n.push(i) : rr(i) && ((o & Tt) !== 0 && h(this, ht).add(i), zn(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
ui = function(t) {
  for (var n = 0; n < t.length; n += 1)
    na(t[n], h(this, Zt), h(this, ht));
}, ra = function() {
  var d;
  for (const u of Ft) {
    var t = u.id < this.id, n = [];
    for (const [c, v] of this.current) {
      if (u.current.has(c))
        if (t && v !== u.current.get(c))
          u.current.set(c, v);
        else
          continue;
      n.push(c);
    }
    var r = [...u.current.keys()].filter((c) => !this.current.has(c));
    if (r.length === 0)
      t && u.discard();
    else if (n.length > 0) {
      u.activate();
      var i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var a of n)
        ia(a, r, i, o);
      if (h(u, ze).length > 0) {
        u.apply();
        for (var s of h(u, ze))
          W(d = u, he, di).call(d, s, [], []);
        R(u, ze, []);
      }
      u.deactivate();
    }
  }
};
let Et = zr;
function j(e) {
  var t = Bn;
  Bn = !0;
  try {
    for (var n; ; ) {
      if (wl(), A === null)
        return (
          /** @type {T} */
          n
        );
      A.flush();
    }
  } finally {
    Bn = t;
  }
}
function vl() {
  try {
    rl();
  } catch (e) {
    St(e, ai);
  }
}
let He = null;
function bo(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ie | $e)) === 0 && rr(r) && (He = /* @__PURE__ */ new Set(), zn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && qa(r), (He == null ? void 0 : He.size) > 0)) {
        Rt.clear();
        for (const i of He) {
          if ((i.f & (Ie | $e)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            He.has(a) && (He.delete(a), o.push(a)), a = a.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const d = o[s];
            (d.f & (Ie | $e)) === 0 && zn(d);
          }
        }
        He.clear();
      }
    }
    He = null;
  }
}
function ia(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & te) !== 0 ? ia(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (o & (xi | Tt)) !== 0 && (o & ue) === 0 && oa(i, t, r) && (Z(i, ue), Mi(
        /** @type {Effect} */
        i
      ));
    }
}
function oa(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Mn.call(t, i))
        return !0;
      if ((i.f & te) !== 0 && oa(
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
function Mi(e) {
  A.schedule(e);
}
function aa(e, t) {
  if (!((e.f & Ze) !== 0 && (e.f & K) !== 0)) {
    (e.f & ue) !== 0 ? t.d.push(e) : (e.f & it) !== 0 && t.m.push(e), Z(e, K);
    for (var n = e.first; n !== null; )
      aa(n, t), n = n.next;
  }
}
function sa(e) {
  Z(e, K);
  for (var t = e.first; t !== null; )
    sa(t), t = t.next;
}
function bl(e) {
  let t = 0, n = rn(0), r;
  return () => {
    Ri() && (f(n), Ei(() => (t === 0 && (r = ir(() => e(() => Un(n)))), t += 1, () => {
      zt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Un(n));
      });
    })));
  };
}
var yl = tn | an;
function _l(e, t, n, r) {
  new xl(e, t, n, r);
}
var Re, Gn, et, Gt, ve, tt, Pe, Be, ft, Xt, Mt, _n, Xn, Kn, wt, Rr, U, la, da, ua, hi, vr, br, ci;
class xl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    $(this, U);
    /** @type {Boundary | null} */
    V(this, "parent");
    V(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    V(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, Re);
    /** @type {TemplateNode | null} */
    $(this, Gn, D ? C : null);
    /** @type {BoundaryProps} */
    $(this, et);
    /** @type {((anchor: Node) => void)} */
    $(this, Gt);
    /** @type {Effect} */
    $(this, ve);
    /** @type {Effect | null} */
    $(this, tt, null);
    /** @type {Effect | null} */
    $(this, Pe, null);
    /** @type {Effect | null} */
    $(this, Be, null);
    /** @type {DocumentFragment | null} */
    $(this, ft, null);
    $(this, Xt, 0);
    $(this, Mt, 0);
    $(this, _n, !1);
    /** @type {Set<Effect>} */
    $(this, Xn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, Kn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, wt, null);
    $(this, Rr, bl(() => (R(this, wt, rn(h(this, Xt))), () => {
      R(this, wt, null);
    })));
    var o;
    R(this, Re, t), R(this, et, n), R(this, Gt, (a) => {
      var s = (
        /** @type {Effect} */
        L
      );
      s.b = this, s.f |= ri, r(a);
    }), this.parent = /** @type {Effect} */
    L.b, this.transform_error = i ?? ((o = this.parent) == null ? void 0 : o.transform_error) ?? ((a) => a), R(this, ve, Nr(() => {
      if (D) {
        const a = (
          /** @type {Comment} */
          h(this, Gn)
        );
        nr();
        const s = a.data === yi;
        if (a.data.startsWith(mo)) {
          const u = JSON.parse(a.data.slice(mo.length));
          W(this, U, da).call(this, u);
        } else s ? W(this, U, ua).call(this) : W(this, U, la).call(this);
      } else
        W(this, U, hi).call(this);
    }, yl)), D && R(this, Re, C);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    na(t, h(this, Xn), h(this, Kn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!h(this, et).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    W(this, U, ci).call(this, t, n), R(this, Xt, h(this, Xt) + t), !(!h(this, wt) || h(this, _n)) && (R(this, _n, !0), zt(() => {
      R(this, _n, !1), h(this, wt) && qn(h(this, wt), h(this, Xt));
    }));
  }
  get_effect_pending() {
    return h(this, Rr).call(this), f(
      /** @type {Source<number>} */
      h(this, wt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = h(this, et).onerror;
    let r = h(this, et).failed;
    if (!n && !r)
      throw t;
    h(this, tt) && (we(h(this, tt)), R(this, tt, null)), h(this, Pe) && (we(h(this, Pe)), R(this, Pe, null)), h(this, Be) && (we(h(this, Be)), R(this, Be, null)), D && (ye(
      /** @type {TemplateNode} */
      h(this, Gn)
    ), hl(), ye(Sr()));
    var i = !1, o = !1;
    const a = () => {
      if (i) {
        ul();
        return;
      }
      i = !0, o && dl(), h(this, Be) !== null && Qt(h(this, Be), () => {
        R(this, Be, null);
      }), W(this, U, br).call(this, () => {
        W(this, U, hi).call(this);
      });
    }, s = (d) => {
      try {
        o = !0, n == null || n(d, a), o = !1;
      } catch (u) {
        St(u, h(this, ve) && h(this, ve).parent);
      }
      r && R(this, Be, W(this, U, br).call(this, () => {
        try {
          return Oe(() => {
            var u = (
              /** @type {Effect} */
              L
            );
            u.b = this, u.f |= ri, r(
              h(this, Re),
              () => d,
              () => a
            );
          });
        } catch (u) {
          return St(
            u,
            /** @type {Effect} */
            h(this, ve).parent
          ), null;
        }
      }));
    };
    zt(() => {
      var d;
      try {
        d = this.transform_error(t);
      } catch (u) {
        St(u, h(this, ve) && h(this, ve).parent);
        return;
      }
      d !== null && typeof d == "object" && typeof /** @type {any} */
      d.then == "function" ? d.then(
        s,
        /** @param {unknown} e */
        (u) => St(u, h(this, ve) && h(this, ve).parent)
      ) : s(d);
    });
  }
}
Re = new WeakMap(), Gn = new WeakMap(), et = new WeakMap(), Gt = new WeakMap(), ve = new WeakMap(), tt = new WeakMap(), Pe = new WeakMap(), Be = new WeakMap(), ft = new WeakMap(), Xt = new WeakMap(), Mt = new WeakMap(), _n = new WeakMap(), Xn = new WeakMap(), Kn = new WeakMap(), wt = new WeakMap(), Rr = new WeakMap(), U = new WeakSet(), la = function() {
  try {
    R(this, tt, Oe(() => h(this, Gt).call(this, h(this, Re))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
da = function(t) {
  const n = h(this, et).failed;
  n && R(this, Be, Oe(() => {
    n(
      h(this, Re),
      () => t,
      () => () => {
      }
    );
  }));
}, ua = function() {
  const t = h(this, et).pending;
  t && (this.is_pending = !0, R(this, Pe, Oe(() => t(h(this, Re)))), zt(() => {
    var n = R(this, ft, document.createDocumentFragment()), r = Ne();
    n.append(r), R(this, tt, W(this, U, br).call(this, () => Oe(() => h(this, Gt).call(this, r)))), h(this, Mt) === 0 && (h(this, Re).before(n), R(this, ft, null), Qt(
      /** @type {Effect} */
      h(this, Pe),
      () => {
        R(this, Pe, null);
      }
    ), W(this, U, vr).call(
      this,
      /** @type {Batch} */
      A
    ));
  }));
}, hi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), R(this, Mt, 0), R(this, Xt, 0), R(this, tt, Oe(() => {
      h(this, Gt).call(this, h(this, Re));
    })), h(this, Mt) > 0) {
      var t = R(this, ft, document.createDocumentFragment());
      Ai(h(this, tt), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        h(this, et).pending
      );
      R(this, Pe, Oe(() => n(h(this, Re))));
    } else
      W(this, U, vr).call(
        this,
        /** @type {Batch} */
        A
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
vr = function(t) {
  this.is_pending = !1, t.transfer_effects(h(this, Xn), h(this, Kn));
}, /**
 * @template T
 * @param {() => T} fn
 */
br = function(t) {
  var n = L, r = T, i = _e;
  ot(h(this, ve)), Ve(h(this, ve)), Sn(h(this, ve).ctx);
  try {
    return Et.ensure(), t();
  } catch (o) {
    return ea(o), null;
  } finally {
    ot(n), Ve(r), Sn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ci = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && W(r = this.parent, U, ci).call(r, t, n);
    return;
  }
  R(this, Mt, h(this, Mt) + t), h(this, Mt) === 0 && (W(this, U, vr).call(this, n), h(this, Pe) && Qt(h(this, Pe), () => {
    R(this, Pe, null);
  }), h(this, ft) && (h(this, Re).before(h(this, ft)), R(this, ft, null)));
};
function kl(e, t, n, r) {
  const i = Ir;
  var o = e.filter((m) => !m.settled);
  if (n.length === 0 && o.length === 0) {
    r(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    L
  ), s = Ml(), d = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((m) => m.promise)) : null;
  function u(m) {
    s();
    try {
      r(m);
    } catch (b) {
      (a.f & Ie) === 0 && St(b, a);
    }
    qr();
  }
  if (n.length === 0) {
    d.then(() => u(t.map(i)));
    return;
  }
  var c = ha();
  function v() {
    Promise.all(n.map((m) => /* @__PURE__ */ jl(m))).then((m) => u([...t.map(i), ...m])).catch((m) => St(m, a)).finally(() => c());
  }
  d ? d.then(() => {
    s(), v(), qr();
  }) : v();
}
function Ml() {
  var e = (
    /** @type {Effect} */
    L
  ), t = T, n = _e, r = (
    /** @type {Batch} */
    A
  );
  return function(o = !0) {
    ot(e), Ve(t), Sn(n), o && (e.f & Ie) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function qr(e = !0) {
  ot(null), Ve(null), Sn(null), e && (A == null || A.deactivate());
}
function ha() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    L.b
  ), t = (
    /** @type {Batch} */
    A
  ), n = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  var t = te | ue, n = T !== null && (T.f & te) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return L !== null && (L.f |= an), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: Xo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ie
    ),
    wv: 0,
    parent: n ?? L,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function jl(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    L
  );
  r === null && Js();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = rn(
    /** @type {V} */
    ie
  ), a = !T, s = /* @__PURE__ */ new Map();
  return Al(() => {
    var b;
    var d = (
      /** @type {Effect} */
      L
    ), u = Uo();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(qr);
    } catch (p) {
      u.reject(p), qr();
    }
    var c = (
      /** @type {Batch} */
      A
    );
    if (a) {
      if ((d.f & At) !== 0)
        var v = ha();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (b = s.get(c)) == null || b.reject(ut), s.delete(c);
      else {
        for (const p of s.values())
          p.reject(ut);
        s.clear();
      }
      s.set(c, u);
    }
    const m = (p, P = void 0) => {
      if (v) {
        var g = P === ut;
        v(g);
      }
      if (!(P === ut || (d.f & Ie) !== 0)) {
        if (c.activate(), P)
          o.f |= qt, qn(o, P);
        else {
          (o.f & qt) !== 0 && (o.f ^= qt), qn(o, p);
          for (const [M, I] of s) {
            if (s.delete(M), M === c) break;
            I.reject(ut);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(m, (p) => m(null, p || "unknown"));
  }), ka(() => {
    for (const d of s.values())
      d.reject(ut);
  }), new Promise((d) => {
    function u(c) {
      function v() {
        c === i ? d(o) : u(i);
      }
      c.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function O(e) {
  const t = /* @__PURE__ */ Ir(e);
  return Pa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ca(e) {
  const t = /* @__PURE__ */ Ir(e);
  return t.equals = Ko, t;
}
function Sl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      we(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ql(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & te) === 0)
      return (t.f & Ie) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ji(e) {
  var t, n = L;
  ot(ql(e));
  try {
    e.f &= ~nn, Sl(e), t = Aa(e);
  } finally {
    ot(n);
  }
  return t;
}
function fa(e) {
  var t = e.v, n = ji(e);
  if (!e.equals(n) && (e.wv = $a(), (!(A != null && A.is_fork) || e.deps === null) && (e.v = n, A == null || A.capture(e, t), e.deps === null))) {
    Z(e, K);
    return;
  }
  $t || (oe !== null ? (Ri() || A != null && A.is_fork) && oe.set(e, n) : ki(e));
}
function zl(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(ut), r.teardown = Bo, r.ac = null, Yn(r, 0), $i(r));
}
function wa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && zn(t);
}
let fi = /* @__PURE__ */ new Set();
const Rt = /* @__PURE__ */ new Map();
let ma = !1;
function rn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const n = rn(e);
  return Pa(n), n;
}
// @__NO_SIDE_EFFECTS__
function pa(e, t = !1, n = !0) {
  const r = rn(e);
  return t || (r.equals = Ko), r;
}
function z(e, t, n = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ye || (T.f & go) !== 0) && Jo() && (T.f & (te | Tt | xi | go)) !== 0 && (We === null || !Mn.call(We, e)) && ll();
  let r = n ? Bt(t) : t;
  return qn(e, r, gr);
}
function qn(e, t, n = null) {
  if (!e.equals(t)) {
    var r = e.v;
    $t ? Rt.set(e, t) : Rt.set(e, r), e.v = t;
    var i = Et.ensure();
    if (i.capture(e, r), (e.f & te) !== 0) {
      const o = (
        /** @type {Derived} */
        e
      );
      (e.f & ue) !== 0 && ji(o), oe === null && ki(o);
    }
    e.wv = $a(), ga(e, ue, n), L !== null && (L.f & K) !== 0 && (L.f & (Ze | Pt)) === 0 && (Ce === null ? Ol([e]) : Ce.push(e)), !i.is_fork && fi.size > 0 && !ma && Rl();
  }
  return t;
}
function Rl() {
  ma = !1;
  for (const e of fi)
    (e.f & K) !== 0 && Z(e, it), rr(e) && zn(e);
  fi.clear();
}
function Un(e) {
  z(e, e.v + 1);
}
function ga(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var a = r[o], s = a.f, d = (s & ue) === 0;
      if (d && Z(a, t), (s & te) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        oe == null || oe.delete(u), (s & nn) === 0 && (s & De && (a.f |= nn), ga(u, it, n));
      } else if (d) {
        var c = (
          /** @type {Effect} */
          a
        );
        (s & Tt) !== 0 && He !== null && He.add(c), n !== null ? n.push(c) : Mi(c);
      }
    }
}
function Bt(e) {
  if (typeof e != "object" || e === null || Hn in e)
    return e;
  const t = Ho(e);
  if (t !== Hs && t !== Bs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Fo(e), i = /* @__PURE__ */ F(0), o = en, a = (s) => {
    if (en === o)
      return s();
    var d = T, u = en;
    Ve(null), xo(o);
    var c = s();
    return Ve(d), xo(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, d, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && al();
        var c = n.get(d);
        return c === void 0 ? a(() => {
          var v = /* @__PURE__ */ F(u.value);
          return n.set(d, v), v;
        }) : z(c, u.value, !0), !0;
      },
      deleteProperty(s, d) {
        var u = n.get(d);
        if (u === void 0) {
          if (d in s) {
            const c = a(() => /* @__PURE__ */ F(ie));
            n.set(d, c), Un(i);
          }
        } else
          z(u, ie), Un(i);
        return !0;
      },
      get(s, d, u) {
        var b;
        if (d === Hn)
          return e;
        var c = n.get(d), v = d in s;
        if (c === void 0 && (!v || (b = Jt(s, d)) != null && b.writable) && (c = a(() => {
          var p = Bt(v ? s[d] : ie), P = /* @__PURE__ */ F(p);
          return P;
        }), n.set(d, c)), c !== void 0) {
          var m = f(c);
          return m === ie ? void 0 : m;
        }
        return Reflect.get(s, d, u);
      },
      getOwnPropertyDescriptor(s, d) {
        var u = Reflect.getOwnPropertyDescriptor(s, d);
        if (u && "value" in u) {
          var c = n.get(d);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var v = n.get(d), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return u;
      },
      has(s, d) {
        var m;
        if (d === Hn)
          return !0;
        var u = n.get(d), c = u !== void 0 && u.v !== ie || Reflect.has(s, d);
        if (u !== void 0 || L !== null && (!c || (m = Jt(s, d)) != null && m.writable)) {
          u === void 0 && (u = a(() => {
            var b = c ? Bt(s[d]) : ie, p = /* @__PURE__ */ F(b);
            return p;
          }), n.set(d, u));
          var v = f(u);
          if (v === ie)
            return !1;
        }
        return c;
      },
      set(s, d, u, c) {
        var E;
        var v = n.get(d), m = d in s;
        if (r && d === "length")
          for (var b = u; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var p = n.get(b + "");
            p !== void 0 ? z(p, ie) : b in s && (p = a(() => /* @__PURE__ */ F(ie)), n.set(b + "", p));
          }
        if (v === void 0)
          (!m || (E = Jt(s, d)) != null && E.writable) && (v = a(() => /* @__PURE__ */ F(void 0)), z(v, Bt(u)), n.set(d, v));
        else {
          m = v.v !== ie;
          var P = a(() => Bt(u));
          z(v, P);
        }
        var g = Reflect.getOwnPropertyDescriptor(s, d);
        if (g != null && g.set && g.set.call(c, u), !m) {
          if (r && typeof d == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), I = Number(d);
            Number.isInteger(I) && I >= M.v && z(M, I + 1);
          }
          Un(i);
        }
        return !0;
      },
      ownKeys(s) {
        f(i);
        var d = Reflect.ownKeys(s).filter((v) => {
          var m = n.get(v);
          return m === void 0 || m.v !== ie;
        });
        for (var [u, c] of n)
          c.v !== ie && !(u in s) && d.push(u);
        return d;
      },
      setPrototypeOf() {
        sl();
      }
    }
  );
}
var yo, va, ba, ya;
function wi() {
  if (yo === void 0) {
    yo = window, va = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ba = Jt(t, "firstChild").get, ya = Jt(t, "nextSibling").get, po(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), po(n) && (n.__t = void 0);
  }
}
function Ne(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return (
    /** @type {TemplateNode | null} */
    ba.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return (
    /** @type {TemplateNode | null} */
    ya.call(e)
  );
}
function Q(e, t) {
  if (!D)
    return /* @__PURE__ */ on(e);
  var n = /* @__PURE__ */ on(C);
  if (n === null)
    n = C.appendChild(Ne());
  else if (t && n.nodeType !== Cr) {
    var r = Ne();
    return n == null || n.before(r), ye(r), r;
  }
  return t && qi(
    /** @type {Text} */
    n
  ), ye(n), n;
}
function Vn(e, t = !1) {
  if (!D) {
    var n = /* @__PURE__ */ on(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ at(n) : n;
  }
  if (t) {
    if ((C == null ? void 0 : C.nodeType) !== Cr) {
      var r = Ne();
      return C == null || C.before(r), ye(r), r;
    }
    qi(
      /** @type {Text} */
      C
    );
  }
  return C;
}
function Ae(e, t = 1, n = !1) {
  let r = D ? C : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ at(r);
  if (!D)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Cr) {
      var o = Ne();
      return r === null ? i == null || i.after(o) : r.before(o), ye(o), o;
    }
    qi(
      /** @type {Text} */
      r
    );
  }
  return ye(r), r;
}
function _a(e) {
  e.textContent = "";
}
function xa() {
  return !1;
}
function Si(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Vo, e, void 0)
  );
}
function qi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Cr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function zi(e) {
  var t = T, n = L;
  Ve(null), ot(null);
  try {
    return e();
  } finally {
    Ve(t), ot(n);
  }
}
function Pl(e) {
  L === null && (T === null && nl(), tl()), $t && el();
}
function El(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function st(e, t) {
  var n = L;
  n !== null && (n.f & $e) !== 0 && (e |= $e);
  var r = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | ue | De,
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
  if ((e & jn) !== 0)
    wn !== null ? wn.push(r) : Et.ensure().schedule(r);
  else if (t !== null) {
    try {
      zn(r);
    } catch (a) {
      throw we(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & an) === 0 && (i = i.first, (e & Tt) !== 0 && (e & tn) !== 0 && i !== null && (i.f |= tn));
  }
  if (i !== null && (i.parent = n, n !== null && El(i, n), T !== null && (T.f & te) !== 0 && (e & Pt) === 0)) {
    var o = (
      /** @type {Derived} */
      T
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return r;
}
function Ri() {
  return T !== null && !Ye;
}
function ka(e) {
  const t = st(Ar, null);
  return Z(t, K), t.teardown = e, t;
}
function Ma(e) {
  Pl();
  var t = (
    /** @type {Effect} */
    L.f
  ), n = !T && (t & Ze) !== 0 && (t & At) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      _e
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ja(e);
}
function ja(e) {
  return st(jn | Zs, e);
}
function $l(e) {
  Et.ensure();
  const t = st(Pt | an, e);
  return () => {
    we(t);
  };
}
function Tl(e) {
  Et.ensure();
  const t = st(Pt | an, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Qt(t, () => {
      we(t), r(void 0);
    }) : (we(t), r(void 0));
  });
}
function Pi(e) {
  return st(jn, e);
}
function Al(e) {
  return st(xi | an, e);
}
function Ei(e, t = 0) {
  return st(Ar | t, e);
}
function Ke(e, t = [], n = [], r = []) {
  kl(r, t, n, (i) => {
    st(Ar, () => e(...i.map(f)));
  });
}
function Nr(e, t = 0) {
  var n = st(Tt | t, e);
  return n;
}
function Oe(e) {
  return st(Ze | an, e);
}
function Sa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $t, r = T;
    _o(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      _o(n), Ve(r);
    }
  }
}
function $i(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && zi(() => {
      i.abort(ut);
    });
    var r = n.next;
    (n.f & Pt) !== 0 ? n.parent = null : we(n, t), n = r;
  }
}
function Cl(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ze) === 0 && we(t), t = n;
  }
}
function we(e, t = !0) {
  var n = !1;
  (t || (e.f & Ys) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ll(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Z(e, ii), $i(e, t && !n), Yn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const o of r)
      o.stop();
  Sa(e), e.f ^= ii, e.f |= Ie;
  var i = e.parent;
  i !== null && i.first !== null && qa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Ll(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ at(e);
    e.remove(), e = n;
  }
}
function qa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Qt(e, t, n = !0) {
  var r = [];
  za(e, r, !0);
  var i = () => {
    n && we(e), t && t();
  }, o = r.length;
  if (o > 0) {
    var a = () => --o || i();
    for (var s of r)
      s.out(a);
  } else
    i();
}
function za(e, t, n) {
  if ((e.f & $e) === 0) {
    e.f ^= $e;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const s of r)
        (s.is_global || n) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var o = i.next, a = (i.f & tn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Ze) !== 0 && (e.f & Tt) !== 0;
      za(i, t, a ? n : !1), i = o;
    }
  }
}
function Ti(e) {
  Ra(e, !0);
}
function Ra(e, t) {
  if ((e.f & $e) !== 0) {
    e.f ^= $e, (e.f & K) === 0 && (Z(e, ue), Et.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & tn) !== 0 || (n.f & Ze) !== 0;
      Ra(n, i ? t : !1), n = r;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const a of o)
        (a.is_global || t) && a.in();
  }
}
function Ai(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ at(n);
      t.append(n), n = i;
    }
}
let yr = !1, $t = !1;
function _o(e) {
  $t = e;
}
let T = null, Ye = !1;
function Ve(e) {
  T = e;
}
let L = null;
function ot(e) {
  L = e;
}
let We = null;
function Pa(e) {
  T !== null && (We === null ? We = [e] : We.push(e));
}
let be = null, qe = 0, Ce = null;
function Ol(e) {
  Ce = e;
}
let Ea = 1, Ut = 0, en = Ut;
function xo(e) {
  en = e;
}
function $a() {
  return ++Ea;
}
function rr(e) {
  var t = e.f;
  if ((t & ue) !== 0)
    return !0;
  if (t & te && (e.f &= ~nn), (t & it) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var o = n[i];
      if (rr(
        /** @type {Derived} */
        o
      ) && fa(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & De) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    oe === null && Z(e, K);
  }
  return !1;
}
function Ta(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(We !== null && Mn.call(We, e)))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & te) !== 0 ? Ta(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (n ? Z(o, ue) : (o.f & K) !== 0 && Z(o, it), Mi(
        /** @type {Effect} */
        o
      ));
    }
}
function Aa(e) {
  var P;
  var t = be, n = qe, r = Ce, i = T, o = We, a = _e, s = Ye, d = en, u = e.f;
  be = /** @type {null | Value[]} */
  null, qe = 0, Ce = null, T = (u & (Ze | Pt)) === 0 ? e : null, We = null, Sn(e.ctx), Ye = !1, en = ++Ut, e.ac !== null && (zi(() => {
    e.ac.abort(ut);
  }), e.ac = null);
  try {
    e.f |= oi;
    var c = (
      /** @type {Function} */
      e.fn
    ), v = c();
    e.f |= At;
    var m = e.deps, b = A == null ? void 0 : A.is_fork;
    if (be !== null) {
      var p;
      if (b || Yn(e, qe), m !== null && qe > 0)
        for (m.length = qe + be.length, p = 0; p < be.length; p++)
          m[qe + p] = be[p];
      else
        e.deps = m = be;
      if (Ri() && (e.f & De) !== 0)
        for (p = qe; p < m.length; p++)
          ((P = m[p]).reactions ?? (P.reactions = [])).push(e);
    } else !b && m !== null && qe < m.length && (Yn(e, qe), m.length = qe);
    if (Jo() && Ce !== null && !Ye && m !== null && (e.f & (te | it | ue)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Ce.length; p++)
        Ta(
          Ce[p],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ut++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = Ut;
      if (t !== null)
        for (const g of t)
          g.rv = Ut;
      Ce !== null && (r === null ? r = Ce : r.push(.../** @type {Source[]} */
      Ce));
    }
    return (e.f & qt) !== 0 && (e.f ^= qt), v;
  } catch (g) {
    return ea(g);
  } finally {
    e.f ^= oi, be = t, qe = n, Ce = r, T = i, We = o, Sn(a), Ye = s, en = d;
  }
}
function Dl(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Vs.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (be === null || !Mn.call(be, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & De) !== 0 && (o.f ^= De, o.f &= ~nn), ki(o), zl(o), Yn(o, 0);
  }
}
function Yn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Dl(e, n[r]);
}
function zn(e) {
  var t = e.f;
  if ((t & Ie) === 0) {
    Z(e, K);
    var n = L, r = yr;
    L = e, yr = !0;
    try {
      (t & (Tt | Yo)) !== 0 ? Cl(e) : $i(e), Sa(e);
      var i = Aa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ea;
      var o;
      Ws && fl && (e.f & ue) !== 0 && e.deps;
    } finally {
      yr = r, L = n;
    }
  }
}
function f(e) {
  var t = e.f, n = (t & te) !== 0;
  if (T !== null && !Ye) {
    var r = L !== null && (L.f & Ie) !== 0;
    if (!r && (We === null || !Mn.call(We, e))) {
      var i = T.deps;
      if ((T.f & oi) !== 0)
        e.rv < Ut && (e.rv = Ut, be === null && i !== null && i[qe] === e ? qe++ : be === null ? be = [e] : be.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [T] : Mn.call(o, T) || o.push(T);
      }
    }
  }
  if ($t && Rt.has(e))
    return Rt.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if ($t) {
      var s = a.v;
      return ((a.f & K) === 0 && a.reactions !== null || La(a)) && (s = ji(a)), Rt.set(a, s), s;
    }
    var d = (a.f & De) === 0 && !Ye && T !== null && (yr || (T.f & De) !== 0), u = (a.f & At) === 0;
    rr(a) && (d && (a.f |= De), fa(a)), d && !u && (wa(a), Ca(a));
  }
  if (oe != null && oe.has(e))
    return oe.get(e);
  if ((e.f & qt) !== 0)
    throw e.v;
  return e.v;
}
function Ca(e) {
  if (e.f |= De, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & te) !== 0 && (t.f & De) === 0 && (wa(
        /** @type {Derived} */
        t
      ), Ca(
        /** @type {Derived} */
        t
      ));
}
function La(e) {
  if (e.v === ie) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rt.has(t) || (t.f & te) !== 0 && La(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ir(e) {
  var t = Ye;
  try {
    return Ye = !0, e();
  } finally {
    Ye = t;
  }
}
const Yt = Symbol("events"), Oa = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set();
function Il(e, t, n, r = {}) {
  function i(o) {
    if (r.capture || pi.call(t, o), !o.cancelBubble)
      return zi(() => n == null ? void 0 : n.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? zt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Nl(e, t, n, r, i) {
  var o = { capture: r, passive: i }, a = Il(e, t, n, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ka(() => {
    t.removeEventListener(e, a, o);
  });
}
function ge(e, t, n) {
  (t[Yt] ?? (t[Yt] = {}))[e] = n;
}
function Wl(e) {
  for (var t = 0; t < e.length; t++)
    Oa.add(e[t]);
  for (var n of mi)
    n(e);
}
let ko = null;
function pi(e) {
  var g, M;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ko = e;
  var a = 0, s = ko === e && e[Yt];
  if (s) {
    var d = i.indexOf(s);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Yt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    d <= u && (a = d);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    jr(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var c = T, v = L;
    Ve(null), ot(null);
    try {
      for (var m, b = []; o !== null; ) {
        var p = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var P = (M = o[Yt]) == null ? void 0 : M[r];
          P != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && P.call(o, e);
        } catch (I) {
          m ? b.push(I) : m = I;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        o = p;
      }
      if (m) {
        for (let I of b)
          queueMicrotask(() => {
            throw I;
          });
        throw m;
      }
    } finally {
      e[Yt] = t, delete e.currentTarget, Ve(c), ot(v);
    }
  }
}
var Io;
const ei = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Io = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Io.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Vl(e) {
  return (
    /** @type {string} */
    (ei == null ? void 0 : ei.createHTML(e)) ?? e
  );
}
function Fl(e) {
  var t = Si("template");
  return t.innerHTML = Vl(e.replaceAll("<!>", "<!---->")), t.content;
}
function mn(e, t) {
  var n = (
    /** @type {Effect} */
    L
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  var n = (t & Is) !== 0, r = (t & Ns) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (D)
      return mn(C, null), C;
    i === void 0 && (i = Fl(o ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ on(i)));
    var a = (
      /** @type {TemplateNode} */
      r || va ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ on(a)
      ), d = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      mn(s, d);
    } else
      mn(a, a);
    return a;
  };
}
function Da() {
  if (D)
    return mn(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ne();
  return e.append(t, n), mn(t, n), e;
}
function ee(e, t) {
  if (D) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      L
    );
    ((n.f & At) === 0 || n.nodes.end === null) && (n.nodes.end = C), nr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Hl = ["touchstart", "touchmove"];
function Bl(e) {
  return Hl.includes(e);
}
function Ul(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ia(e, t) {
  return Na(e, t);
}
function Yl(e, t) {
  wi(), t.intro = t.intro ?? !1;
  const n = t.target, r = D, i = C;
  try {
    for (var o = /* @__PURE__ */ on(n); o && (o.nodeType !== tr || /** @type {Comment} */
    o.data !== Wo); )
      o = /* @__PURE__ */ at(o);
    if (!o)
      throw kn;
    pt(!0), ye(
      /** @type {Comment} */
      o
    );
    const a = Na(e, { ...t, anchor: o });
    return pt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== kn && console.warn("Failed to hydrate: ", a), t.recover === !1 && il(), wi(), _a(n), pt(!1), Ia(e, t);
  } finally {
    pt(r), ye(i);
  }
}
const pr = /* @__PURE__ */ new Map();
function Na(e, { target: t, anchor: n, props: r = {}, events: i, context: o, intro: a = !0, transformError: s }) {
  wi();
  var d = void 0, u = Tl(() => {
    var c = n ?? t.appendChild(Ne());
    _l(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (b) => {
        Or({});
        var p = (
          /** @type {ComponentContext} */
          _e
        );
        if (o && (p.c = o), i && (r.$$events = i), D && mn(
          /** @type {TemplateNode} */
          b,
          null
        ), d = e(b, r) || {}, D && (L.nodes.end = C, C === null || C.nodeType !== tr || /** @type {Comment} */
        C.data !== _i))
          throw Lr(), kn;
        Dr();
      },
      s
    );
    var v = /* @__PURE__ */ new Set(), m = (b) => {
      for (var p = 0; p < b.length; p++) {
        var P = b[p];
        if (!v.has(P)) {
          v.add(P);
          var g = Bl(P);
          for (const E of [t, document]) {
            var M = pr.get(E);
            M === void 0 && (M = /* @__PURE__ */ new Map(), pr.set(E, M));
            var I = M.get(P);
            I === void 0 ? (E.addEventListener(P, pi, { passive: g }), M.set(P, 1)) : M.set(P, I + 1);
          }
        }
      }
    };
    return m(Tr(Oa)), mi.add(m), () => {
      var g;
      for (var b of v)
        for (const M of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            pr.get(M)
          ), P = (
            /** @type {number} */
            p.get(b)
          );
          --P == 0 ? (M.removeEventListener(b, pi), p.delete(b), p.size === 0 && pr.delete(M)) : p.set(b, P);
        }
      mi.delete(m), c !== n && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return gi.set(d, u), d;
}
let gi = /* @__PURE__ */ new WeakMap();
function Zl(e, t) {
  const n = gi.get(e);
  return n ? (gi.delete(e), n(t)) : Promise.resolve();
}
var Ue, nt, Ee, Kt, Jn, Qn, Pr;
class Wa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    V(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, Ue, /* @__PURE__ */ new Map());
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
    $(this, nt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, Kt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, Jn, !0);
    /**
     * @param {Batch} batch
     */
    $(this, Qn, (t) => {
      if (h(this, Ue).has(t)) {
        var n = (
          /** @type {Key} */
          h(this, Ue).get(t)
        ), r = h(this, nt).get(n);
        if (r)
          Ti(r), h(this, Kt).delete(n);
        else {
          var i = h(this, Ee).get(n);
          i && (h(this, nt).set(n, i.effect), h(this, Ee).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [o, a] of h(this, Ue)) {
          if (h(this, Ue).delete(o), o === t)
            break;
          const s = h(this, Ee).get(a);
          s && (we(s.effect), h(this, Ee).delete(a));
        }
        for (const [o, a] of h(this, nt)) {
          if (o === n || h(this, Kt).has(o)) continue;
          const s = () => {
            if (Array.from(h(this, Ue).values()).includes(o)) {
              var u = document.createDocumentFragment();
              Ai(a, u), u.append(Ne()), h(this, Ee).set(o, { effect: a, fragment: u });
            } else
              we(a);
            h(this, Kt).delete(o), h(this, nt).delete(o);
          };
          h(this, Jn) || !r ? (h(this, Kt).add(o), Qt(a, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, Pr, (t) => {
      h(this, Ue).delete(t);
      const n = Array.from(h(this, Ue).values());
      for (const [r, i] of h(this, Ee))
        n.includes(r) || (we(i.effect), h(this, Ee).delete(r));
    });
    this.anchor = t, R(this, Jn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      A
    ), i = xa();
    if (n && !h(this, nt).has(t) && !h(this, Ee).has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = Ne();
        o.append(a), h(this, Ee).set(t, {
          effect: Oe(() => n(a)),
          fragment: o
        });
      } else
        h(this, nt).set(
          t,
          Oe(() => n(this.anchor))
        );
    if (h(this, Ue).set(r, t), i) {
      for (const [s, d] of h(this, nt))
        s === t ? r.unskip_effect(d) : r.skip_effect(d);
      for (const [s, d] of h(this, Ee))
        s === t ? r.unskip_effect(d.effect) : r.skip_effect(d.effect);
      r.oncommit(h(this, Qn)), r.ondiscard(h(this, Pr));
    } else
      D && (this.anchor = C), h(this, Qn).call(this, r);
  }
}
Ue = new WeakMap(), nt = new WeakMap(), Ee = new WeakMap(), Kt = new WeakMap(), Jn = new WeakMap(), Qn = new WeakMap(), Pr = new WeakMap();
function Gl(e, t, ...n) {
  var r = new Wa(e);
  Nr(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((o) => i(o, ...n)));
  }, tn);
}
function Xl(e) {
  _e === null && Ks(), Ma(() => {
    const t = ir(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Je(e, t, n = !1) {
  var r;
  D && (r = C, nr());
  var i = new Wa(e), o = n ? tn : 0;
  function a(s, d) {
    if (D) {
      var u = Go(
        /** @type {TemplateNode} */
        r
      );
      if (s !== parseInt(u.substring(1))) {
        var c = Sr();
        ye(c), i.anchor = c, pt(!1), i.ensure(s, d), pt(!0);
        return;
      }
    }
    i.ensure(s, d);
  }
  Nr(() => {
    var s = !1;
    t((d, u = 0) => {
      s = !0, a(u, d);
    }), s || a(-1, null);
  }, o);
}
function Kl(e, t, n) {
  for (var r = [], i = t.length, o, a = t.length, s = 0; s < i; s++) {
    let v = t[s];
    Qt(
      v,
      () => {
        if (o) {
          if (o.pending.delete(v), o.done.add(v), o.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vi(e, Tr(o.done)), m.delete(o), m.size === 0 && (e.outrogroups = null);
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
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      _a(c), c.append(u), e.items.clear();
    }
    vi(e, t, !d);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function vi(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const s of a)
        r.add(
          /** @type {EachItem} */
          e.items.get(s).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    if (r != null && r.has(o)) {
      o.f |= rt;
      const a = document.createDocumentFragment();
      Ai(o, a);
    } else
      we(t[i], n);
  }
}
var Mo;
function jo(e, t, n, r, i, o = null) {
  var a = e, s = /* @__PURE__ */ new Map(), d = (t & No) !== 0;
  if (d) {
    var u = (
      /** @type {Element} */
      e
    );
    a = D ? ye(/* @__PURE__ */ on(u)) : u.appendChild(Ne());
  }
  D && nr();
  var c = null, v = /* @__PURE__ */ ca(() => {
    var E = n();
    return Fo(E) ? E : E == null ? [] : Tr(E);
  }), m, b = /* @__PURE__ */ new Map(), p = !0;
  function P(E) {
    (I.effect.f & Ie) === 0 && (I.pending.delete(E), I.fallback = c, Jl(I, m, a, t, r), c !== null && (m.length === 0 ? (c.f & rt) === 0 ? Ti(c) : (c.f ^= rt, Fn(c, null, a)) : Qt(c, () => {
      c = null;
    })));
  }
  function g(E) {
    I.pending.delete(E);
  }
  var M = Nr(() => {
    m = /** @type {V[]} */
    f(v);
    var E = m.length;
    let k = !1;
    if (D) {
      var ce = Go(a) === yi;
      ce !== (E === 0) && (a = Sr(), ye(a), pt(!1), k = !0);
    }
    for (var se = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      A
    ), N = xa(), le = 0; le < E; le += 1) {
      D && C.nodeType === tr && /** @type {Comment} */
      C.data === _i && (a = /** @type {Comment} */
      C, k = !0, pt(!1));
      var ne = m[le], xe = r(ne, le), de = p ? null : s.get(xe);
      de ? (de.v && qn(de.v, ne), de.i && qn(de.i, le), N && H.unskip_effect(de.e)) : (de = Ql(
        s,
        p ? a : Mo ?? (Mo = Ne()),
        ne,
        xe,
        le,
        i,
        t,
        n
      ), p || (de.e.f |= rt), s.set(xe, de)), se.add(xe);
    }
    if (E === 0 && o && !c && (p ? c = Oe(() => o(a)) : (c = Oe(() => o(Mo ?? (Mo = Ne()))), c.f |= rt)), E > se.size && Qs(), D && E > 0 && ye(Sr()), !p)
      if (b.set(H, se), N) {
        for (const [gt, sn] of s)
          se.has(gt) || H.skip_effect(sn.e);
        H.oncommit(P), H.ondiscard(g);
      } else
        P(H);
    k && pt(!0), f(v);
  }), I = { effect: M, items: s, pending: b, outrogroups: null, fallback: c };
  p = !1, D && (a = C);
}
function Wn(e) {
  for (; e !== null && (e.f & Ze) === 0; )
    e = e.next;
  return e;
}
function Jl(e, t, n, r, i) {
  var ne, xe, de, gt, sn, or, ar, vt, Ct;
  var o = (r & Ts) !== 0, a = t.length, s = e.items, d = Wn(e.effect.first), u, c = null, v, m = [], b = [], p, P, g, M;
  if (o)
    for (M = 0; M < a; M += 1)
      p = t[M], P = i(p, M), g = /** @type {EachItem} */
      s.get(P).e, (g.f & rt) === 0 && ((xe = (ne = g.nodes) == null ? void 0 : ne.a) == null || xe.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(g));
  for (M = 0; M < a; M += 1) {
    if (p = t[M], P = i(p, M), g = /** @type {EachItem} */
    s.get(P).e, e.outrogroups !== null)
      for (const ke of e.outrogroups)
        ke.pending.delete(g), ke.done.delete(g);
    if ((g.f & $e) !== 0 && (Ti(g), o && ((gt = (de = g.nodes) == null ? void 0 : de.a) == null || gt.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(g))), (g.f & rt) !== 0)
      if (g.f ^= rt, g === d)
        Fn(g, null, n);
      else {
        var I = c ? c.next : d;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), kt(e, c, g), kt(e, g, I), Fn(g, I, n), c = g, m = [], b = [], d = Wn(c.next);
        continue;
      }
    if (g !== d) {
      if (u !== void 0 && u.has(g)) {
        if (m.length < b.length) {
          var E = b[0], k;
          c = E.prev;
          var ce = m[0], se = m[m.length - 1];
          for (k = 0; k < m.length; k += 1)
            Fn(m[k], E, n);
          for (k = 0; k < b.length; k += 1)
            u.delete(b[k]);
          kt(e, ce.prev, se.next), kt(e, c, ce), kt(e, se, E), d = E, c = se, M -= 1, m = [], b = [];
        } else
          u.delete(g), Fn(g, d, n), kt(e, g.prev, g.next), kt(e, g, c === null ? e.effect.first : c.next), kt(e, c, g), c = g;
        continue;
      }
      for (m = [], b = []; d !== null && d !== g; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(d), b.push(d), d = Wn(d.next);
      if (d === null)
        continue;
    }
    (g.f & rt) === 0 && m.push(g), c = g, d = Wn(g.next);
  }
  if (e.outrogroups !== null) {
    for (const ke of e.outrogroups)
      ke.pending.size === 0 && (vi(e, Tr(ke.done)), (sn = e.outrogroups) == null || sn.delete(ke));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || u !== void 0) {
    var H = [];
    if (u !== void 0)
      for (g of u)
        (g.f & $e) === 0 && H.push(g);
    for (; d !== null; )
      (d.f & $e) === 0 && d !== e.fallback && H.push(d), d = Wn(d.next);
    var N = H.length;
    if (N > 0) {
      var le = (r & No) !== 0 && a === 0 ? n : null;
      if (o) {
        for (M = 0; M < N; M += 1)
          (ar = (or = H[M].nodes) == null ? void 0 : or.a) == null || ar.measure();
        for (M = 0; M < N; M += 1)
          (Ct = (vt = H[M].nodes) == null ? void 0 : vt.a) == null || Ct.fix();
      }
      Kl(e, H, le);
    }
  }
  o && zt(() => {
    var ke, sr;
    if (v !== void 0)
      for (g of v)
        (sr = (ke = g.nodes) == null ? void 0 : ke.a) == null || sr.apply();
  });
}
function Ql(e, t, n, r, i, o, a, s) {
  var d = (a & Es) !== 0 ? (a & As) === 0 ? /* @__PURE__ */ pa(n, !1, !1) : rn(n) : null, u = (a & $s) !== 0 ? rn(i) : null;
  return {
    v: d,
    i: u,
    e: Oe(() => (o(t, d ?? n, u ?? i, s), () => {
      e.delete(r);
    }))
  };
}
function Fn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, o = t && (t.f & rt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(r)
      );
      if (o.before(r), r === i)
        return;
      r = a;
    }
}
function kt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ed(e, t, n, r, i) {
  var s;
  D && nr();
  var o = (s = t.$$slots) == null ? void 0 : s[n], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => r : r);
}
function Ci(e, t) {
  Pi(() => {
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
      const i = Si("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function Va(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Va(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function td() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Va(e)) && (r && (r += " "), r += t);
  return r;
}
function nd(e) {
  return typeof e == "object" ? td(e) : e ?? "";
}
const So = [...` 	
\r\f \v\uFEFF`];
function rd(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var o = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var s = a + o;
          (a === 0 || So.includes(r[a - 1])) && (s === r.length || So.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function qo(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i of Object.keys(e)) {
    var o = e[i];
    o != null && o !== "" && (r += " " + i + ": " + o + n);
  }
  return r;
}
function id(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += qo(r)), i && (n += qo(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function dt(e, t, n, r, i, o) {
  var a = e.__className;
  if (D || a !== n || a === void 0) {
    var s = rd(n, r, o);
    (!D || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = n;
  } else if (o && i !== o)
    for (var d in o) {
      var u = !!o[d];
      (i == null || u !== !!i[d]) && e.classList.toggle(d, u);
    }
  return o;
}
function ti(e, t = {}, n, r) {
  for (var i in n) {
    var o = n[i];
    t[i] !== o && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, r));
  }
}
function _r(e, t, n, r) {
  var i = e.__style;
  if (D || i !== t) {
    var o = id(t, r);
    (!D || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e.__style = t;
  } else r && (Array.isArray(r) ? (ti(e, n == null ? void 0 : n[0], r[0]), ti(e, n == null ? void 0 : n[1], r[1], "important")) : ti(e, n, r));
  return r;
}
const od = Symbol("is custom element"), ad = Symbol("is html"), sd = Xs ? "link" : "LINK";
function X(e, t, n, r) {
  var i = ld(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === sd) || i[t] !== (i[t] = n) && (t === "loading" && (e[Gs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && dd(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ld(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [od]: e.nodeName.includes("-"),
      [ad]: e.namespaceURI === Vo
    })
  );
}
var zo = /* @__PURE__ */ new Map();
function dd(e) {
  var t = e.getAttribute("is") || e.nodeName, n = zo.get(t);
  if (n) return n;
  zo.set(t, n = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Fs(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ho(i);
  }
  return n;
}
var jt, xn, er, Er, Fa;
const $r = class $r {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    $(this, Er);
    /** */
    $(this, jt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    $(this, xn);
    /** @type {ResizeObserverOptions} */
    $(this, er);
    R(this, er, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = h(this, jt).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), h(this, jt).set(t, r), W(this, Er, Fa).call(this).observe(t, h(this, er)), () => {
      var i = h(this, jt).get(t);
      i.delete(n), i.size === 0 && (h(this, jt).delete(t), h(this, xn).unobserve(t));
    };
  }
};
jt = new WeakMap(), xn = new WeakMap(), er = new WeakMap(), Er = new WeakSet(), Fa = function() {
  return h(this, xn) ?? R(this, xn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        $r.entries.set(n.target, n);
        for (var r of h(this, jt).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
V($r, "entries", /* @__PURE__ */ new WeakMap());
let bi = $r;
var ud = /* @__PURE__ */ new bi({
  box: "border-box"
});
function Ro(e, t, n) {
  var r = ud.observe(e, () => n(e[t]));
  Pi(() => (ir(() => n(e[t])), r));
}
function Po(e, t) {
  return e === t || (e == null ? void 0 : e[Hn]) === t;
}
function Eo(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    _e.r
  ), o = (
    /** @type {Effect} */
    L
  );
  return Pi(() => {
    var a, s;
    return Ei(() => {
      a = s, s = [], ir(() => {
        e !== n(...s) && (t(e, ...s), a && Po(n(...a), e) && t(null, ...a));
      });
    }), () => {
      let d = o;
      for (; d !== i && d.parent !== null && d.parent.f & ii; )
        d = d.parent;
      const u = () => {
        s && Po(n(...s), e) && t(null, ...s);
      }, c = d.teardown;
      d.teardown = () => {
        u(), c == null || c();
      };
    };
  }), e;
}
function S(e, t, n, r) {
  var I;
  var i = (n & Os) !== 0, o = (n & Ds) !== 0, a = (
    /** @type {V} */
    r
  ), s = !0, d = () => (s && (s = !1, a = o ? ir(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a);
  let u;
  if (i) {
    var c = Hn in e || Zo in e;
    u = ((I = Jt(e, t)) == null ? void 0 : I.set) ?? (c && t in e ? (E) => e[t] = E : void 0);
  }
  var v, m = !1;
  i ? [v, m] = pl(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = d(), u && (ol(), u(v)));
  var b;
  if (b = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? d() : (s = !0, E);
  }, (n & Ls) === 0)
    return b;
  if (u) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, k) {
        return arguments.length > 0 ? ((!k || p || m) && u(k ? b() : E), E) : b();
      })
    );
  }
  var P = !1, g = ((n & Cs) !== 0 ? Ir : ca)(() => (P = !1, b()));
  i && f(g);
  var M = (
    /** @type {Effect} */
    L
  );
  return (
    /** @type {() => V} */
    (function(E, k) {
      if (arguments.length > 0) {
        const ce = k ? f(g) : i ? Bt(E) : E;
        return z(g, ce), P = !0, a !== void 0 && (a = ce), E;
      }
      return $t && P || (M.f & Ie) !== 0 ? g.v : f(g);
    })
  );
}
function hd(e) {
  return new cd(e);
}
var mt, Le;
class cd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $(this, mt);
    /** @type {Record<string, any>} */
    $(this, Le);
    var o;
    var n = /* @__PURE__ */ new Map(), r = (a, s) => {
      var d = /* @__PURE__ */ pa(s, !1, !1);
      return n.set(a, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(n.get(s) ?? r(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Zo ? !0 : (f(n.get(s) ?? r(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, d) {
          return z(n.get(s) ?? r(s, d), d), Reflect.set(a, s, d);
        }
      }
    );
    R(this, Le, (t.hydrate ? Yl : Ia)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && j(), R(this, mt, i.$$events);
    for (const a of Object.keys(h(this, Le)))
      a === "$set" || a === "$destroy" || a === "$on" || jr(this, a, {
        get() {
          return h(this, Le)[a];
        },
        /** @param {any} value */
        set(s) {
          h(this, Le)[a] = s;
        },
        enumerable: !0
      });
    h(this, Le).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, h(this, Le).$destroy = () => {
      Zl(h(this, Le));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    h(this, Le).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    h(this, mt)[t] = h(this, mt)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return h(this, mt)[t].push(r), () => {
      h(this, mt)[t] = h(this, mt)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    h(this, Le).$destroy();
  }
}
mt = new WeakMap(), Le = new WeakMap();
let Ha;
typeof HTMLElement == "function" && (Ha = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    V(this, "$$ctor");
    /** Slots */
    V(this, "$$s");
    /** @type {any} The Svelte component instance */
    V(this, "$$c");
    /** Whether or not the custom element is connected */
    V(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    V(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    V(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    V(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    V(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    V(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    V(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    V(this, "$$shadowRoot", null);
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
          const s = Si("slot");
          o !== "default" && (s.name = o), ee(a, s);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = fd(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = n(o), r.default = !0) : r[o] = n(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = xr(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = hd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = $l(() => {
        Ei(() => {
          var o;
          this.$$r = !0;
          for (const a of Mr(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = xr(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const s = this.$$c.$on(o, a);
          this.$$l_u.set(a, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = xr(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Mr(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function xr(e, t, n, r) {
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
function fd(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Li(e, t, n, r, i, o) {
  let a = class extends Ha {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Mr(t).forEach((s) => {
    jr(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(d) {
        var v;
        d = xr(s, d, t), this.$$d[s] = d;
        var u = this.$$c;
        if (u) {
          var c = (v = Jt(u, s)) == null ? void 0 : v.get;
          c ? u[s] = d : u.$set({ [s]: d });
        }
      }
    });
  }), r.forEach((s) => {
    jr(a.prototype, s, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const _ = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, x = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, $o = (e) => `<g fill="#000">${e}</g>`, wd = {
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
        svg: _(
          x(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: _(
          x(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: _(
          `${$o('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${x(
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
        svg: _(
          x(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          `${x('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${$o(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: _(
          x('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: _(
          x(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: _(
          x('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: _(
          x(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: _(x('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: _(
          x(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: _(
          x('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: _(x('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: _(
          x(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: _(x('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: _(
          x(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: _(
          x(
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
        svg: _(
          x(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: _(
          x('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: _(
          x('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: _(
          x('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: _(x('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: _(x('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: _(x('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: _(x('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: _(x('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: _(x('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: _(x('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: _(
          x('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: _(
          x('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: _(
          x('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: _(x('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: _(x('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function md(e, t) {
  const n = wd[e], r = n.variants;
  return (r[t ?? n.defaultVariant] ?? r[n.defaultVariant]).svg;
}
const To = /* @__PURE__ */ new Map();
function pd(e, t) {
  const n = `${e}:${t ?? "default"}`, r = To.get(n);
  if (r)
    return r;
  const i = md(e, t), o = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return To.set(n, o), o;
}
var gd = /* @__PURE__ */ me("<span></span>");
const vd = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function Qe(e, t) {
  Or(t, !0), Ci(e, vd);
  let n = S(t, "name", 7), r = S(t, "variant", 7), i = S(t, "decorative", 7, !0), o = S(t, "label", 7), a = S(t, "title", 7), s = S(t, "size", 7, "1rem"), d = S(t, "className", 7, ""), u = /* @__PURE__ */ O(() => pd(n(), r())), c = /* @__PURE__ */ O(() => o() ?? a() ?? n());
  var v = {
    get name() {
      return n();
    },
    set name(p) {
      n(p), j();
    },
    get variant() {
      return r();
    },
    set variant(p) {
      r(p), j();
    },
    get decorative() {
      return i();
    },
    set decorative(p = !0) {
      i(p), j();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), j();
    },
    get title() {
      return a();
    },
    set title(p) {
      a(p), j();
    },
    get size() {
      return s();
    },
    set size(p = "1rem") {
      s(p), j();
    },
    get className() {
      return d();
    },
    set className(p = "") {
      d(p), j();
    }
  }, m = gd();
  let b;
  return Ke(
    (p) => {
      dt(m, 1, p, "svelte-1a09gvd"), X(m, "aria-hidden", i()), X(m, "aria-label", i() ? void 0 : f(c)), X(m, "role", i() ? void 0 : "img"), X(m, "title", a()), b = _r(m, "", b, { "--icon-mask": f(u), width: s(), height: s() });
    },
    [() => nd(`app-icon ${d()}`.trim())]
  ), ee(e, m), Dr(v);
}
Li(
  Qe,
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
const bd = "efsdb:window-settings", Ao = {
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
}, Co = {
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
}, ae = {
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
}, Lo = /* @__PURE__ */ new Set();
let Ba = Rd();
function yd(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function _d(e) {
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
      return ae.buttonLayout;
  }
}
function xd(e) {
  return e === "left" ? "left" : ae.systemButtonPlacement;
}
function kd(e) {
  return e === "mirrored" ? "mirrored" : ae.sideResizeMode;
}
function Md(e) {
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
      return ae.themePreset;
  }
}
function jd(e) {
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
      return ae.fontPreset;
  }
}
function Sd(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return ae.shiftDragAction;
  }
}
function ni(e, t, n, r) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(n, Math.min(r, Math.round(i))) : t;
}
function qd(e) {
  return {
    buttonLayout: _d(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: xd(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: kd(e == null ? void 0 : e.sideResizeMode),
    borderWidth: ni(
      e == null ? void 0 : e.borderWidth,
      ae.borderWidth,
      0,
      12
    ),
    borderRadius: ni(
      e == null ? void 0 : e.borderRadius,
      ae.borderRadius,
      0,
      32
    ),
    chromePadding: ni(
      e == null ? void 0 : e.chromePadding,
      ae.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : ae.chromeStyle,
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : ae.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : ae.snapRestoreOnRelease,
    shiftDragAction: Sd(e == null ? void 0 : e.shiftDragAction),
    themePreset: Md(e == null ? void 0 : e.themePreset),
    fontPreset: jd(e == null ? void 0 : e.fontPreset)
  };
}
function zd(e) {
  return (Ao[e] ?? Ao.inherit).shadow;
}
function Rd() {
  const e = yd(bd);
  if (!e)
    return kr(ae), { ...ae };
  try {
    const t = JSON.parse(e), n = qd(t);
    return kr(n), n;
  } catch {
    return kr(ae), { ...ae };
  }
}
function kr(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement.style, n = Co[e.fontPreset] ?? Co.system, r = zd(e.themePreset);
  t.setProperty("--efs-font-sans", n.stack), t.setProperty("--efs-window-font-family", n.stack), t.setProperty("--efs-window-border-width", `${e.borderWidth}px`), t.setProperty("--efs-window-radius", `${e.borderRadius}px`), t.setProperty("--efs-window-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-window-system-button-placement", e.systemButtonPlacement), t.setProperty("--efs-window-side-resize-mode", e.sideResizeMode), t.setProperty("--efs-window-shell-shadow", r), t.setProperty("--efs-widget-border-width", `${e.borderWidth}px`), t.setProperty("--efs-widget-radius", `${e.borderRadius}px`), t.setProperty("--efs-widget-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-widget-shadow", r), t.removeProperty("--efs-window-theme-panel"), t.removeProperty("--efs-window-theme-surface"), t.removeProperty("--efs-window-theme-border"), t.removeProperty("--efs-window-theme-shadow"), t.removeProperty("--efs-window-theme-hover");
}
function Pd(e) {
  return Lo.add(e), e(Ba), () => {
    Lo.delete(e);
  };
}
typeof window < "u" && window.addEventListener("efsdb-themechange", () => {
  kr(Ba);
});
var Ed = /* @__PURE__ */ me('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), $d = /* @__PURE__ */ me("<div><span></span></div>"), Td = /* @__PURE__ */ me('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Ad = /* @__PURE__ */ me('<button type="button"><!></button>'), Cd = /* @__PURE__ */ me('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), Ld = /* @__PURE__ */ me('<!> <button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button>', 1), Od = /* @__PURE__ */ me('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), Dd = /* @__PURE__ */ me('<button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button> <!>', 1), Id = /* @__PURE__ */ me('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" class="window-button svelte-1k3ojqh" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-1k3ojqh"><!></div></div>'), Nd = /* @__PURE__ */ me('<div class="window-content svelte-1k3ojqh"><!></div>'), Wd = /* @__PURE__ */ me('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Vd = /* @__PURE__ */ me("<!> <!> <div><!> <!> <!></div>", 1);
const Fd = {
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
function Ua(e, t) {
  Or(t, !0), Ci(e, Fd);
  let n = S(t, "title", 7), r = S(t, "state", 15, "normal"), i = S(t, "x", 15, 100), o = S(t, "y", 15, 100), a = S(t, "width", 15, 600), s = S(t, "height", 15, 400), d = S(t, "locked", 7, !1), u = S(t, "chromeless", 7, !1), c = S(t, "buttonLayout", 7), v = S(t, "systemButtonPlacement", 7), m = S(t, "sideResizeMode", 7), b = S(t, "borderWidth", 7), p = S(t, "borderRadius", 7), P = S(t, "chromePadding", 7), g = S(t, "chromeStyle", 7), M = S(t, "alignment", 7), I = S(t, "themePreset", 7), E = S(t, "fontPreset", 7), k = S(t, "snapRestoreOnRelease", 7), ce = S(t, "shiftDragAction", 7), se = S(t, "zIndex", 7, 100), H = S(t, "pinned", 7, !1), N = S(t, "dragSeed", 7, null), le = S(t, "onClose", 7), ne = S(t, "onPinToggle", 7), xe = S(t, "onConsumeDragSeed", 7), de = S(t, "onStateChange", 7), gt = S(t, "children", 7);
  const sn = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], or = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), ar = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], vt = 360, Ct = 240, ke = 44, sr = 1400;
  let Me = /* @__PURE__ */ F(Bt({ ...ae })), Oi = /* @__PURE__ */ F(!1), Rn = /* @__PURE__ */ F(!1), Ge = /* @__PURE__ */ F(null), Xe = /* @__PURE__ */ F(null), ln = /* @__PURE__ */ F(null), lr = /* @__PURE__ */ F(null), dr = /* @__PURE__ */ F(0), ur = /* @__PURE__ */ F(0), Di = "", Ii = 0, Ni = 0, hr = 0, Wr = 0, Lt = 0, Pn = 0, bt = "se", dn = null, En = !1, Ot = !1, Wi = 0.5, Vi = 18, un = !1, $n = /* @__PURE__ */ F(null), Dt = 0, It = /* @__PURE__ */ F(null), Fi = /* @__PURE__ */ F(0), Hi = /* @__PURE__ */ F(0);
  Xl(() => {
    const l = requestAnimationFrame(() => {
      z(Oi, !0);
    }), w = Pd((y) => {
      z(Me, { ...y }, !0);
    });
    return () => {
      cancelAnimationFrame(l), w(), On(), Dt && typeof window < "u" && window.clearTimeout(Dt);
    };
  });
  let Te = /* @__PURE__ */ O(() => c() ?? f(Me).buttonLayout), Ya = /* @__PURE__ */ O(() => v() ?? f(Me).systemButtonPlacement), Bi = /* @__PURE__ */ O(() => m() ?? f(Me).sideResizeMode), Vr = /* @__PURE__ */ O(() => b() ?? f(Me).borderWidth), Za = /* @__PURE__ */ O(() => p() ?? f(Me).borderRadius), Ga = /* @__PURE__ */ O(() => P() ?? f(Me).chromePadding), Ui = /* @__PURE__ */ O(() => g() ?? f(Me).chromeStyle), Xa = /* @__PURE__ */ O(() => M() ?? f(Me).alignment), Ka = /* @__PURE__ */ O(() => I() ?? f(Me).themePreset), Ja = /* @__PURE__ */ O(() => E() ?? f(Me).fontPreset), Qa = /* @__PURE__ */ O(() => k() ?? f(Me).snapRestoreOnRelease), es = /* @__PURE__ */ O(() => ce() ?? f(Me).shiftDragAction), ts = /* @__PURE__ */ O(() => a() < 560 ? "left" : f(Xa)), Yi = /* @__PURE__ */ O(() => a() < 520), ns = /* @__PURE__ */ O(() => Math.max(f(Fi), f(Hi)) + (f(Yi) ? 12 : 18));
  function Fr(l) {
    return or.has(l);
  }
  function Zi(l) {
    switch (l) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function Gi(l, w = !1) {
    if (w)
      return l === "mac" || l === "ubuntu" || l === "xubuntu" ? void 0 : "stack";
    switch (l) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function Xi(l, w = !1) {
    if (w)
      return "stack";
    switch (l) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let yt = /* @__PURE__ */ F(!1), Tn = 0, An = 0, cr = 0, fr = 0, rs = /* @__PURE__ */ O(() => f(yt) && !u() && !d() && f(Te) !== "mac" && typeof window < "u" && f(ur) <= 84 && Math.abs(f(dr) - window.innerWidth / 2) <= 232), Cn = /* @__PURE__ */ O(() => f(Ge) ? Qi(f(Ge)) : null);
  function _t(l) {
    var w;
    r() !== l && (r(l), (w = de()) == null || w(r()));
  }
  function Ln() {
    return { x: i(), y: o(), width: a(), height: s() };
  }
  function Hr(l, w = a()) {
    return typeof window > "u" ? Math.max(0, l) : Math.max(0, Math.min(window.innerWidth - w, l));
  }
  function Br(l, w = s()) {
    return typeof window > "u" ? Math.max(0, l) : Math.max(0, Math.min(window.innerHeight - Math.min(w, ke), l));
  }
  function Nt(l) {
    const w = Math.max(vt, Math.round(l.width)), y = Math.max(Ct, Math.round(l.height));
    return {
      x: Hr(Math.round(l.x), w),
      y: Br(Math.round(l.y), y),
      width: w,
      height: y
    };
  }
  function Ur() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : Nt({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function Ki(l) {
    const w = Nt(l);
    i(w.x), o(w.y), a(w.width), s(w.height), z(Xe, null), _t("normal");
  }
  function Ji() {
    Ki(f(ln) ?? Ur());
  }
  function Qi(l) {
    if (typeof window > "u") return null;
    const w = window.innerWidth, y = window.innerHeight, q = Math.round(w / 2), B = Math.round(y / 2);
    switch (l) {
      case "maximize":
        return { x: 0, y: 0, width: w, height: y };
      case "left-half":
        return { x: 0, y: 0, width: q, height: y };
      case "right-half":
        return {
          x: w - q,
          y: 0,
          width: q,
          height: y
        };
      case "top-left":
        return { x: 0, y: 0, width: q, height: B };
      case "top-right":
        return {
          x: w - q,
          y: 0,
          width: q,
          height: B
        };
      case "bottom-left":
        return {
          x: 0,
          y: y - B,
          width: q,
          height: B
        };
      case "bottom-right":
        return {
          x: w - q,
          y: y - B,
          width: q,
          height: B
        };
    }
  }
  function Yr(l, w = Ln()) {
    if (z(ln, Nt(w), !0), l === "maximize") {
      typeof window < "u" && (i(0), o(0), a(window.innerWidth), s(window.innerHeight)), z(Xe, "maximize"), _t("maximized");
      return;
    }
    const y = Qi(l);
    y && (z(Xe, l, !0), _t("normal"), i(y.x), o(y.y), a(y.width), s(y.height));
  }
  function is() {
    typeof window > "u" || ((r() === "maximized" || f(Xe)) && Ji(), i(Hr(Math.round((window.innerWidth - a()) / 2), a())), o(Br(Math.round((window.innerHeight - s()) / 2), s())));
  }
  function wr() {
    if (r() === "maximized") {
      Ji();
      return;
    }
    Yr("maximize");
  }
  function os() {
    _t(r() === "rolled-up" ? "normal" : "rolled-up");
  }
  function eo() {
    _t("minimized");
  }
  function as() {
    z($n, null), Dt && typeof window < "u" && window.clearTimeout(Dt), Dt = 0;
  }
  function to(l) {
    if (typeof window > "u") {
      z($n, l, !0);
      return;
    }
    as(), z($n, l, !0), Dt = window.setTimeout(
      () => {
        z($n, null), Dt = 0;
      },
      sr
    );
  }
  function ss() {
    var B, Y;
    if (typeof window > "u" || !f(It))
      return !1;
    const l = 24, w = Math.ceil(Math.max(f(It).scrollWidth, ((B = f(It).firstElementChild) == null ? void 0 : B.scrollWidth) ?? 0)), y = Math.ceil(Math.max(f(It).scrollHeight, ((Y = f(It).firstElementChild) == null ? void 0 : Y.scrollHeight) ?? 0)), q = Nt({
      x: Math.round((window.innerWidth - w) / 2),
      y: Math.round((window.innerHeight - y - ke) / 2),
      width: Math.min(window.innerWidth - l * 2, Math.max(vt, w + f(Vr) * 2)),
      height: Math.min(window.innerHeight - l * 2, Math.max(Ct, y + ke + f(Vr) * 2))
    });
    return z(ln, Ln(), !0), Ki(q), !0;
  }
  function ls(l) {
    if (d() || u() || no(l.target))
      return;
    if (f($n) === "fit-content") {
      to("maximize"), wr();
      return;
    }
    const w = ss();
    to(w ? "fit-content" : "maximize"), w || wr();
  }
  function no(l) {
    return !!(l != null && l.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function ds(l, w) {
    if (!f(lr)) return null;
    for (const y of f(lr).querySelectorAll("[data-snap-target]")) {
      const q = y.getBoundingClientRect();
      if (l >= q.left && l <= q.right && w >= q.top && w <= q.bottom)
        return y.dataset.snapTarget;
    }
    return null;
  }
  function us(l, w) {
    if (typeof window > "u") return null;
    const y = 18, q = Math.max(72, Math.round(window.innerHeight * 0.14));
    return w <= y ? l <= window.innerWidth * 0.33 ? "top-left" : l >= window.innerWidth * 0.67 ? "top-right" : "maximize" : l <= y ? w <= q ? "top-left" : w >= window.innerHeight - q ? "bottom-left" : "left-half" : l >= window.innerWidth - y ? w <= q ? "top-right" : w >= window.innerHeight - q ? "bottom-right" : "right-half" : null;
  }
  function hs(l, w) {
    if (z(dr, l, !0), z(ur, w, !0), !f(yt) || d() || u() || f(Te) === "mac") {
      z(Ge, null);
      return;
    }
    z(Ge, ds(l, w) ?? us(l, w), !0);
  }
  function cs(l, w) {
    if (!Ot) return;
    const y = f(ln) ?? Ur(), q = Nt({
      ...y,
      x: l - y.width * Wi,
      y: w - Vi
    });
    i(q.x), o(q.y), a(q.width), s(q.height), _t("normal"), z(Xe, null), Ot = !1, En = !0, Tn = l, An = w, cr = i(), fr = o();
  }
  function ro(l) {
    !l.shiftKey || un || f(es) !== "pin" || !ne() || H() || (ne()(), un = !0);
  }
  function fs(l) {
    if (d() || u() || r() === "minimized" || no(l.target)) return;
    z(yt, !0), un = !1, z(Ge, null), z(dr, l.clientX, !0), z(ur, l.clientY, !0), Tn = l.clientX, An = l.clientY, cr = i(), fr = o(), En = !1, Ot = !1;
    const w = Ln();
    Wi = w.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (l.clientX - w.x) / w.width)), Vi = Math.max(12, Math.min(28, Math.round(l.clientY - w.y || 18))), r() === "maximized" || f(Xe) ? (dn = r() === "maximized" ? "maximize" : f(Xe), z(ln, f(ln) ?? Ur(), !0), Ot = !0) : dn = null, ro(l), l.currentTarget.setPointerCapture(l.pointerId);
  }
  function Zr(l) {
    f(yt) && (ro(l), Ot && (Math.abs(l.clientX - Tn) > 2 || Math.abs(l.clientY - An) > 2) && cs(l.clientX, l.clientY), i(Hr(cr + (l.clientX - Tn), a())), o(Br(fr + (l.clientY - An), s())), hs(l.clientX, l.clientY));
  }
  function hn(l) {
    if (!f(yt)) return;
    const w = f(Ge);
    z(Ge, null), z(yt, !1), Ot = !1, w ? Yr(w, Ln()) : En && dn && f(Qa) && !l.shiftKey && !un ? Yr(dn, Ln()) : z(Xe, null), dn = null, En = !1, un = !1;
    const y = l.currentTarget;
    "hasPointerCapture" in y && y.hasPointerCapture(l.pointerId) && y.releasePointerCapture(l.pointerId), window.removeEventListener("pointermove", Zr), window.removeEventListener("pointerup", hn), window.removeEventListener("pointercancel", hn);
  }
  function ws(l, w) {
    d() || u() || r() === "maximized" || r() === "minimized" || (f(Xe) && z(Xe, null), w.stopPropagation(), w.preventDefault(), z(Rn, !0), bt = l, Ii = w.clientX, Ni = w.clientY, hr = i(), Wr = o(), Lt = a(), Pn = s(), z(Ge, null), window.addEventListener("pointermove", io), window.addEventListener("pointerup", On), window.addEventListener("pointercancel", On));
  }
  function io(l) {
    if (!f(Rn)) return;
    const w = l.clientX - Ii, y = l.clientY - Ni;
    let q = hr, B = Wr, Y = Lt, pe = Pn;
    if (f(Bi) === "mirrored" && (bt === "e" || bt === "w")) {
      const Wt = bt === "e" ? w : -w;
      Y = Math.max(vt, Lt + Wt * 2), q = hr - (Y - Lt) / 2;
    } else bt.includes("e") && (Y = Math.max(vt, Lt + w));
    bt.includes("s") && (pe = Math.max(Ct, Pn + y)), f(Bi) !== "mirrored" && bt.includes("w") && (Y = Math.max(vt, Lt - w), q = hr + (Lt - Y)), bt.includes("n") && (pe = Math.max(Ct, Pn - y), B = Wr + (Pn - pe));
    const xt = Nt({ x: q, y: B, width: Y, height: pe });
    i(xt.x), o(xt.y), a(xt.width), s(xt.height);
  }
  function On() {
    f(Rn) && (z(Rn, !1), window.removeEventListener("pointermove", io), window.removeEventListener("pointerup", On), window.removeEventListener("pointercancel", On));
  }
  function ms(l) {
    var y;
    if (typeof window > "u") return;
    const w = Nt({
      x: l.clientX - Math.round(a() * 0.38),
      y: l.clientY - 18,
      width: a(),
      height: s()
    });
    i(w.x), o(w.y), cr = i(), fr = o(), Tn = l.clientX, An = l.clientY, z(dr, l.clientX, !0), z(ur, l.clientY, !0), z(Ge, null), dn = null, En = !1, Ot = !1, un = !0, z(yt, !0), window.addEventListener("pointermove", Zr), window.addEventListener("pointerup", hn), window.addEventListener("pointercancel", hn), (y = xe()) == null || y();
  }
  Ma(() => {
    const l = N() ? `${N().pointerId}:${N().clientX}:${N().clientY}` : "";
    !N() || l === Di || (Di = l, ms(N()));
  });
  var ps = {
    get title() {
      return n();
    },
    set title(l) {
      n(l), j();
    },
    get state() {
      return r();
    },
    set state(l = "normal") {
      r(l), j();
    },
    get x() {
      return i();
    },
    set x(l = 100) {
      i(l), j();
    },
    get y() {
      return o();
    },
    set y(l = 100) {
      o(l), j();
    },
    get width() {
      return a();
    },
    set width(l = 600) {
      a(l), j();
    },
    get height() {
      return s();
    },
    set height(l = 400) {
      s(l), j();
    },
    get locked() {
      return d();
    },
    set locked(l = !1) {
      d(l), j();
    },
    get chromeless() {
      return u();
    },
    set chromeless(l = !1) {
      u(l), j();
    },
    get buttonLayout() {
      return c();
    },
    set buttonLayout(l) {
      c(l), j();
    },
    get systemButtonPlacement() {
      return v();
    },
    set systemButtonPlacement(l) {
      v(l), j();
    },
    get sideResizeMode() {
      return m();
    },
    set sideResizeMode(l) {
      m(l), j();
    },
    get borderWidth() {
      return b();
    },
    set borderWidth(l) {
      b(l), j();
    },
    get borderRadius() {
      return p();
    },
    set borderRadius(l) {
      p(l), j();
    },
    get chromePadding() {
      return P();
    },
    set chromePadding(l) {
      P(l), j();
    },
    get chromeStyle() {
      return g();
    },
    set chromeStyle(l) {
      g(l), j();
    },
    get alignment() {
      return M();
    },
    set alignment(l) {
      M(l), j();
    },
    get themePreset() {
      return I();
    },
    set themePreset(l) {
      I(l), j();
    },
    get fontPreset() {
      return E();
    },
    set fontPreset(l) {
      E(l), j();
    },
    get snapRestoreOnRelease() {
      return k();
    },
    set snapRestoreOnRelease(l) {
      k(l), j();
    },
    get shiftDragAction() {
      return ce();
    },
    set shiftDragAction(l) {
      ce(l), j();
    },
    get zIndex() {
      return se();
    },
    set zIndex(l = 100) {
      se(l), j();
    },
    get pinned() {
      return H();
    },
    set pinned(l = !1) {
      H(l), j();
    },
    get dragSeed() {
      return N();
    },
    set dragSeed(l = null) {
      N(l), j();
    },
    get onClose() {
      return le();
    },
    set onClose(l) {
      le(l), j();
    },
    get onPinToggle() {
      return ne();
    },
    set onPinToggle(l) {
      ne(l), j();
    },
    get onConsumeDragSeed() {
      return xe();
    },
    set onConsumeDragSeed(l) {
      xe(l), j();
    },
    get onStateChange() {
      return de();
    },
    set onStateChange(l) {
      de(l), j();
    },
    get children() {
      return gt();
    },
    set children(l) {
      gt(l), j();
    }
  }, oo = Vd(), ao = Vn(oo);
  {
    var gs = (l) => {
      var w = Ed();
      let y;
      Ke(() => y = _r(w, "", y, {
        left: `${f(Cn).x}px`,
        top: `${f(Cn).y}px`,
        width: `${f(Cn).width}px`,
        height: `${f(Cn).height}px`,
        "z-index": se() + 2
      })), ee(l, w);
    };
    Je(ao, (l) => {
      f(Cn) && !u() && l(gs);
    });
  }
  var so = Ae(ao, 2);
  {
    var vs = (l) => {
      var w = Td();
      let y;
      jo(w, 21, () => sn, (q) => q.id, (q, B) => {
        var Y = $d();
        let pe;
        var xt = Q(Y);
        G(Y), Ke(() => {
          pe = dt(Y, 1, "snap-cell svelte-1k3ojqh", null, pe, { "is-active": f(Ge) === f(B).id }), X(Y, "data-snap-target", f(B).id), dt(xt, 1, `snap-shape shape-${f(B).preview}`, "svelte-1k3ojqh");
        }), ee(q, Y);
      }), G(w), Eo(w, (q) => z(lr, q), () => f(lr)), Ke(() => y = _r(w, "", y, { "z-index": se() + 3 })), ee(l, w);
    };
    Je(so, (l) => {
      f(rs) && !u() && l(vs);
    });
  }
  var lt = Ae(so, 2);
  let lo, uo;
  var ho = Q(lt);
  {
    var bs = (l) => {
      var w = Id();
      let y;
      var q = Q(w), B = Q(q);
      {
        var Y = (J) => {
          var je = Ad();
          let Fe;
          var In = Q(je);
          Qe(In, { name: "pin" }), G(je), Ke(() => {
            Fe = dt(je, 1, "window-button svelte-1k3ojqh", null, Fe, { "is-active": H() }), X(je, "aria-label", H() ? "Unpin window" : "Pin window"), X(je, "aria-pressed", H());
          }), ge("click", je, function(...Se) {
            var cn;
            (cn = ne()) == null || cn.apply(this, Se);
          }), ee(J, je);
        };
        Je(B, (J) => {
          ne() && J(Y);
        });
      }
      var pe = Ae(B, 2), xt = Q(pe);
      Qe(xt, { name: "center" }), G(pe);
      var Wt = Ae(pe, 2);
      let fo;
      var ks = Q(Wt);
      {
        let J = /* @__PURE__ */ O(() => r() === "rolled-up" ? "roll-up" : "roll-down");
        Qe(ks, {
          get name() {
            return f(J);
          }
        });
      }
      G(Wt), G(q);
      var Dn = Ae(q, 2), Ms = Q(Dn, !0);
      G(Dn);
      var Gr = Ae(Dn, 2), js = Q(Gr);
      {
        var Ss = (J) => {
          var je = Ld(), Fe = Vn(je);
          {
            var In = (fe) => {
              var re = Cd(), Kr = Q(re);
              {
                let Vt = /* @__PURE__ */ O(() => Zi(f(Te)));
                Qe(Kr, {
                  name: "close",
                  get variant() {
                    return f(Vt);
                  }
                });
              }
              G(re), ge("click", re, function(...Vt) {
                var Nn;
                (Nn = le()) == null || Nn.apply(this, Vt);
              }), ee(fe, re);
            };
            Je(Fe, (fe) => {
              le() && fe(In);
            });
          }
          var Se = Ae(Fe, 2), cn = Q(Se);
          {
            let fe = /* @__PURE__ */ O(() => r() === "minimized" ? "restore" : "minimize"), re = /* @__PURE__ */ O(() => Gi(f(Te), r() === "minimized"));
            Qe(cn, {
              get name() {
                return f(fe);
              },
              get variant() {
                return f(re);
              }
            });
          }
          G(Se);
          var fn = Ae(Se, 2), Xr = Q(fn);
          {
            let fe = /* @__PURE__ */ O(() => r() === "maximized" ? "restore" : "maximize"), re = /* @__PURE__ */ O(() => Xi(f(Te), r() === "maximized"));
            Qe(Xr, {
              get name() {
                return f(fe);
              },
              get variant() {
                return f(re);
              }
            });
          }
          G(fn), Ke(() => {
            X(Se, "aria-label", r() === "minimized" ? "Restore window" : "Minimize window"), X(fn, "aria-label", r() === "maximized" ? "Restore window" : "Maximize window");
          }), ge("click", Se, () => r() === "minimized" ? _t("normal") : eo()), ge("click", fn, wr), ee(J, je);
        }, qs = /* @__PURE__ */ O(() => Fr(f(Te))), zs = (J) => {
          var je = Dd(), Fe = Vn(je), In = Q(Fe);
          {
            let fe = /* @__PURE__ */ O(() => r() === "minimized" ? "restore" : "minimize"), re = /* @__PURE__ */ O(() => Gi(f(Te), r() === "minimized"));
            Qe(In, {
              get name() {
                return f(fe);
              },
              get variant() {
                return f(re);
              }
            });
          }
          G(Fe);
          var Se = Ae(Fe, 2), cn = Q(Se);
          {
            let fe = /* @__PURE__ */ O(() => r() === "maximized" ? "restore" : "maximize"), re = /* @__PURE__ */ O(() => Xi(f(Te), r() === "maximized"));
            Qe(cn, {
              get name() {
                return f(fe);
              },
              get variant() {
                return f(re);
              }
            });
          }
          G(Se);
          var fn = Ae(Se, 2);
          {
            var Xr = (fe) => {
              var re = Od(), Kr = Q(re);
              {
                let Vt = /* @__PURE__ */ O(() => Zi(f(Te)));
                Qe(Kr, {
                  name: "close",
                  get variant() {
                    return f(Vt);
                  }
                });
              }
              G(re), ge("click", re, function(...Vt) {
                var Nn;
                (Nn = le()) == null || Nn.apply(this, Vt);
              }), ee(fe, re);
            };
            Je(fn, (fe) => {
              le() && fe(Xr);
            });
          }
          Ke(() => {
            X(Fe, "aria-label", r() === "minimized" ? "Restore window" : "Minimize window"), X(Se, "aria-label", r() === "maximized" ? "Restore window" : "Maximize window");
          }), ge("click", Fe, () => r() === "minimized" ? _t("normal") : eo()), ge("click", Se, wr), ee(J, je);
        };
        Je(js, (J) => {
          f(qs) ? J(Ss) : J(zs, -1);
        });
      }
      G(Gr), G(w), Ke(
        (J) => {
          y = dt(w, 1, `window-chrome chrome-${f(Ui) ?? ""}`, "svelte-1k3ojqh", y, J), X(w, "aria-label", `${n()} window controls`), fo = dt(Wt, 1, "window-button svelte-1k3ojqh", null, fo, { "is-active": r() === "rolled-up" }), X(Wt, "aria-label", r() === "rolled-up" ? "Restore height" : "Roll up"), dt(Dn, 1, `window-title align-${f(ts) ?? ""}`, "svelte-1k3ojqh"), X(Dn, "title", n()), Ul(Ms, n());
        },
        [
          () => ({
            "layout-mac": Fr(f(Te)),
            "layout-windows": !Fr(f(Te))
          })
        ]
      ), ge("pointerdown", w, fs), ge("pointermove", w, Zr), ge("pointerup", w, hn), Nl("pointercancel", w, hn), ge("dblclick", w, ls), ge("click", pe, is), ge("click", Wt, os), Ro(q, "clientWidth", (J) => z(Fi, J)), Ro(Gr, "clientWidth", (J) => z(Hi, J)), ee(l, w);
    };
    Je(ho, (l) => {
      u() || l(bs);
    });
  }
  var co = Ae(ho, 2);
  {
    var ys = (l) => {
      var w = Nd(), y = Q(w);
      Gl(y, () => gt() ?? Bo), G(w), Eo(w, (q) => z(It, q), () => f(It)), ee(l, w);
    };
    Je(co, (l) => {
      r() !== "rolled-up" && r() !== "minimized" && l(ys);
    });
  }
  var _s = Ae(co, 2);
  {
    var xs = (l) => {
      var w = Da(), y = Vn(w);
      jo(y, 16, () => ar, (q) => q, (q, B) => {
        var Y = Wd();
        Ke(() => dt(Y, 1, `resize-handle dir-${B}`, "svelte-1k3ojqh")), ge("pointerdown", Y, (pe) => ws(B, pe)), ee(q, Y);
      }), ee(l, w);
    };
    Je(_s, (l) => {
      !u() && r() !== "maximized" && r() !== "minimized" && l(xs);
    });
  }
  return G(lt), Ke(() => {
    lo = dt(lt, 1, "window-shell svelte-1k3ojqh", null, lo, {
      "is-ready": f(Oi),
      "is-dragging": f(yt),
      "is-resizing": f(Rn),
      "compact-controls": f(Yi),
      maximized: r() === "maximized",
      minimized: r() === "minimized",
      "rolled-up": r() === "rolled-up",
      chromeless: u()
    }), X(lt, "data-layout", f(Te)), X(lt, "data-system-placement", f(Ya)), X(lt, "data-style", f(Ui)), X(lt, "data-theme", f(Ka)), X(lt, "data-font", f(Ja)), uo = _r(lt, "", uo, {
      "--window-border-width": `${f(Vr)}px`,
      "--window-radius": `${f(Za)}px`,
      "--window-chrome-padding": `${f(Ga)}px`,
      "--window-title-guard": `${f(ns)}px`,
      transform: r() === "normal" || r() === "rolled-up" ? `translate(${i()}px, ${o()}px)` : void 0,
      width: r() === "normal" || r() === "rolled-up" ? `${a()}px` : void 0,
      height: r() === "normal" ? `${s()}px` : void 0,
      "z-index": se()
    });
  }), ee(e, oo), Dr(ps);
}
Wl([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Li(
  Ua,
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
var Hd = /* @__PURE__ */ me('<div class="window-content svelte-495ihg"><!></div>'), Bd = /* @__PURE__ */ me('<div class="window-layer svelte-495ihg"><!></div>');
const Ud = {
  hash: "svelte-495ihg",
  code: ":host {display:contents;}:host([hidden]) {display:none;}.window-layer.svelte-495ihg {position:fixed;inset:0;z-index:12040;pointer-events:none;isolation:isolate;}.window-layer.svelte-495ihg .window-shell {pointer-events:auto;--window-panel: var(--shell-panel-solid, var(--shell-panel-bg, #ffffff));--window-surface: var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc));--window-border: var(--shell-border, #e2e8f0);}.window-content.svelte-495ihg {width:100%;height:100%;min-width:0;min-height:0;box-sizing:border-box;padding:0;background:transparent;}"
};
function Yd(e, t) {
  Or(t, !0), Ci(e, Ud);
  let n = S(t, "open", 7, !1), r = S(t, "title", 7, "Window"), i = S(t, "x", 15, 120), o = S(t, "y", 15, 96), a = S(t, "width", 15, 640), s = S(t, "height", 15, 520), d = S(t, "zIndex", 7, 12040), u = S(t, "pinned", 7, !1), c = S(t, "buttonLayout", 7, "windows-11"), v = S(t, "chromeStyle", 7, "solid"), m = S(t, "alignment", 7, "left"), b = S(t, "themePreset", 7, "inherit"), p = S(t, "onClose", 7, null), P = /* @__PURE__ */ F("normal");
  var g = {
    get open() {
      return n();
    },
    set open(k = !1) {
      n(k), j();
    },
    get title() {
      return r();
    },
    set title(k = "Window") {
      r(k), j();
    },
    get x() {
      return i();
    },
    set x(k = 120) {
      i(k), j();
    },
    get y() {
      return o();
    },
    set y(k = 96) {
      o(k), j();
    },
    get width() {
      return a();
    },
    set width(k = 640) {
      a(k), j();
    },
    get height() {
      return s();
    },
    set height(k = 520) {
      s(k), j();
    },
    get zIndex() {
      return d();
    },
    set zIndex(k = 12040) {
      d(k), j();
    },
    get pinned() {
      return u();
    },
    set pinned(k = !1) {
      u(k), j();
    },
    get buttonLayout() {
      return c();
    },
    set buttonLayout(k = "windows-11") {
      c(k), j();
    },
    get chromeStyle() {
      return v();
    },
    set chromeStyle(k = "solid") {
      v(k), j();
    },
    get alignment() {
      return m();
    },
    set alignment(k = "left") {
      m(k), j();
    },
    get themePreset() {
      return b();
    },
    set themePreset(k = "inherit") {
      b(k), j();
    },
    get onClose() {
      return p();
    },
    set onClose(k = null) {
      p(k), j();
    }
  }, M = Da(), I = Vn(M);
  {
    var E = (k) => {
      var ce = Bd(), se = Q(ce);
      {
        let H = /* @__PURE__ */ O(() => p() ?? void 0);
        Ua(se, {
          get title() {
            return r();
          },
          get pinned() {
            return u();
          },
          get zIndex() {
            return d();
          },
          get buttonLayout() {
            return c();
          },
          get chromeStyle() {
            return v();
          },
          get alignment() {
            return m();
          },
          get themePreset() {
            return b();
          },
          get onClose() {
            return f(H);
          },
          get state() {
            return f(P);
          },
          set state(N) {
            z(P, N, !0);
          },
          get x() {
            return i();
          },
          set x(N) {
            i(N);
          },
          get y() {
            return o();
          },
          set y(N) {
            o(N);
          },
          get width() {
            return a();
          },
          set width(N) {
            a(N);
          },
          get height() {
            return s();
          },
          set height(N) {
            s(N);
          },
          children: (N, le) => {
            var ne = Hd(), xe = Q(ne);
            ed(xe, t, "default", {}), G(ne), ee(N, ne);
          },
          $$slots: { default: !0 }
        });
      }
      G(ce), ee(k, ce);
    };
    Je(I, (k) => {
      n() && k(E);
    });
  }
  return ee(e, M), Dr(g);
}
customElements.define("efsdb-window-shell", Li(
  Yd,
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
