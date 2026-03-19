var Oi = Object.defineProperty;
var os = (e) => {
  throw TypeError(e);
};
var Bi = (e, t, r) => t in e ? Oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => Bi(e, typeof t != "symbol" ? t + "" : t, r), xn = (e, t, r) => t.has(e) || os("Cannot " + r);
var d = (e, t, r) => (xn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => (xn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ce = (e, t, r) => (xn(e, t, "access private method"), r);
var ks;
typeof window < "u" && ((ks = window.__svelte ?? (window.__svelte = {})).v ?? (ks.v = /* @__PURE__ */ new Set())).add("5");
const zi = 1, qi = 2, Ts = 4, Fi = 8, Hi = 16, Ui = 1, Yi = 2, Cs = "[", Un = "[!", ls = "[?", Yn = "]", pr = {}, xe = Symbol(), js = "http://www.w3.org/1999/xhtml", Wi = !1;
var Ss = Array.isArray, Vi = Array.prototype.indexOf, hr = Array.prototype.includes, fn = Array.from, nn = Object.keys, sn = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, As = Object.getOwnPropertyDescriptors, Xi = Object.prototype, Gi = Array.prototype, Wn = Object.getPrototypeOf, cs = Object.isExtensible;
const Ki = () => {
};
function Ji(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Is() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const be = 2, mr = 4, vn = 8, Ms = 1 << 24, Dt = 16, lt = 32, Rt = 64, Cn = 128, Ke = 512, _e = 1024, Ce = 2048, pt = 4096, Ue = 8192, Je = 16384, Ot = 32768, us = 1 << 25, gr = 65536, ds = 1 << 17, Zi = 1 << 18, Qt = 1 << 19, Qi = 1 << 20, vt = 1 << 25, Kt = 65536, jn = 1 << 21, Vn = 1 << 22, Mt = 1 << 23, Ir = Symbol("$state"), ea = Symbol("legacy props"), ta = Symbol(""), wt = new class extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "StaleReactionError");
    ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Es;
const Ls = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Es = globalThis.document) != null && Es.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), pn = 3, Hr = 8;
function ra(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function na() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function sa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ia(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function aa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function oa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function la() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ca() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function da() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function va() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function hn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function pa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let X = !1;
function Tt(e) {
  X = e;
}
let z;
function Pe(e) {
  if (e === null)
    throw hn(), pr;
  return z = e;
}
function mn() {
  return Pe(/* @__PURE__ */ mt(z));
}
function x(e) {
  if (X) {
    if (/* @__PURE__ */ mt(z) !== null)
      throw hn(), pr;
    z = e;
  }
}
function ha(e = 1) {
  if (X) {
    for (var t = e, r = z; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ mt(r);
    z = r;
  }
}
function an(e = !0) {
  for (var t = 0, r = z; ; ) {
    if (r.nodeType === Hr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Yn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Cs || n === Un || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mt(r)
    );
    e && r.remove(), r = s;
  }
}
function Rs(e) {
  if (!e || e.nodeType !== Hr)
    throw hn(), pr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ns(e) {
  return e === this.v;
}
function Ps(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ds(e) {
  return !Ps(e, this.v);
}
let ma = !1, Ye = null;
function _r(e) {
  Ye = e;
}
function er(e, t = !1, r) {
  Ye = {
    p: Ye,
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
function tr(e) {
  var t = (
    /** @type {ComponentContext} */
    Ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ui(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ye = t.p, e ?? /** @type {T} */
  {};
}
function Os() {
  return !0;
}
let qt = [];
function Bs() {
  var e = qt;
  qt = [], Ji(e);
}
function Ct(e) {
  if (qt.length === 0 && !Mr) {
    var t = qt;
    queueMicrotask(() => {
      t === qt && Bs();
    });
  }
  qt.push(e);
}
function ga() {
  for (; qt.length > 0; )
    Bs();
}
function zs(e) {
  var t = F;
  if (t === null)
    return D.f |= Mt, e;
  if ((t.f & Ot) === 0 && (t.f & mr) === 0)
    throw e;
  At(e, t);
}
function At(e, t) {
  for (; t !== null; ) {
    if ((t.f & Cn) !== 0) {
      if ((t.f & Ot) === 0)
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
const _a = -7169;
function he(e, t) {
  e.f = e.f & _a | t;
}
function Xn(e) {
  (e.f & Ke) !== 0 || e.deps === null ? he(e, _e) : he(e, pt);
}
function qs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & be) === 0 || (t.f & Kt) === 0 || (t.f ^= Kt, qs(
        /** @type {Derived} */
        t.deps
      ));
}
function Fs(e, t, r) {
  (e.f & Ce) !== 0 ? t.add(e) : (e.f & pt) !== 0 && r.add(e), qs(e.deps), he(e, _e);
}
const zt = /* @__PURE__ */ new Set();
let B = null, ye = null, Sn = null, Mr = !1, yn = !1, ir = null, Zr = null;
var fs = 0;
let ba = 1;
var lr, cr, ur, dr, Dr, Be, Ut, xt, yt, fr, je, An, In, Mn, Ln, Hs;
const cn = class cn {
  constructor() {
    P(this, je);
    // for debugging. TODO remove once async is stable
    ie(this, "id", ba++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    P(this, lr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    P(this, cr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    P(this, ur, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    P(this, dr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    P(this, Dr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    P(this, Be, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    P(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    P(this, xt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    P(this, yt, /* @__PURE__ */ new Map());
    ie(this, "is_fork", !1);
    P(this, fr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    d(this, yt).has(t) || d(this, yt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = d(this, yt).get(t);
    if (r) {
      d(this, yt).delete(t);
      for (var n of r.d)
        he(n, Ce), this.schedule(n);
      for (n of r.m)
        he(n, pt), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== xe && !this.previous.has(t) && this.previous.set(t, r), (t.f & Mt) === 0 && (this.current.set(t, t.v), ye == null || ye.set(t, t.v));
  }
  activate() {
    B = this;
  }
  deactivate() {
    B = null, ye = null;
  }
  flush() {
    try {
      yn = !0, B = this, ce(this, je, In).call(this);
    } finally {
      fs = 0, Sn = null, ir = null, Zr = null, yn = !1, B = null, ye = null, Lt.clear();
    }
  }
  discard() {
    for (const t of d(this, cr)) t(this);
    d(this, cr).clear(), zt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    L(this, ur, d(this, ur) + 1), t && L(this, dr, d(this, dr) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    L(this, ur, d(this, ur) - 1), t && L(this, dr, d(this, dr) - 1), !(d(this, fr) || r) && (L(this, fr, !0), Ct(() => {
      L(this, fr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      d(this, Ut).add(n);
    for (const n of r)
      d(this, xt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    d(this, lr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    d(this, cr).add(t);
  }
  settled() {
    return (d(this, Dr) ?? L(this, Dr, Is())).promise;
  }
  static ensure() {
    if (B === null) {
      const t = B = new cn();
      yn || (zt.add(B), Mr || Ct(() => {
        B === t && t.flush();
      }));
    }
    return B;
  }
  apply() {
    {
      ye = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (Sn = t, (s = t.b) != null && s.is_pending && (t.f & (mr | vn | Ms)) !== 0 && (t.f & Ot) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (ir !== null && r === F && (D === null || (D.f & be) === 0))
        return;
      if ((n & (Rt | lt)) !== 0) {
        if ((n & _e) === 0)
          return;
        r.f ^= _e;
      }
    }
    d(this, Be).push(r);
  }
};
lr = new WeakMap(), cr = new WeakMap(), ur = new WeakMap(), dr = new WeakMap(), Dr = new WeakMap(), Be = new WeakMap(), Ut = new WeakMap(), xt = new WeakMap(), yt = new WeakMap(), fr = new WeakMap(), je = new WeakSet(), An = function() {
  return this.is_fork || d(this, dr) > 0;
}, In = function() {
  var o, l;
  if (fs++ > 1e3 && (zt.delete(this), wa()), !ce(this, je, An).call(this)) {
    for (const c of d(this, Ut))
      d(this, xt).delete(c), he(c, Ce), this.schedule(c);
    for (const c of d(this, xt))
      he(c, pt), this.schedule(c);
  }
  const t = d(this, Be);
  L(this, Be, []), this.apply();
  var r = ir = [], n = [], s = Zr = [];
  for (const c of t)
    try {
      ce(this, je, Mn).call(this, c, r, n);
    } catch (f) {
      throw Vs(c), f;
    }
  if (B = null, s.length > 0) {
    var i = cn.ensure();
    for (const c of s)
      i.schedule(c);
  }
  if (ir = null, Zr = null, ce(this, je, An).call(this)) {
    ce(this, je, Ln).call(this, n), ce(this, je, Ln).call(this, r);
    for (const [c, f] of d(this, yt))
      Ws(c, f);
  } else {
    d(this, ur) === 0 && zt.delete(this), d(this, Ut).clear(), d(this, xt).clear();
    for (const c of d(this, lr)) c(this);
    d(this, lr).clear(), vs(n), vs(r), (o = d(this, Dr)) == null || o.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    B
  );
  if (d(this, Be).length > 0) {
    const c = a ?? (a = this);
    d(c, Be).push(...d(this, Be).filter((f) => !d(c, Be).includes(f)));
  }
  a !== null && (zt.add(a), ce(l = a, je, In).call(l)), zt.has(this) || ce(this, je, Hs).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Mn = function(t, r, n) {
  t.f ^= _e;
  for (var s = t.first; s !== null; ) {
    var i = s.f, a = (i & (lt | Rt)) !== 0, o = a && (i & _e) !== 0, l = o || (i & Ue) !== 0 || d(this, yt).has(s);
    if (!l && s.fn !== null) {
      a ? s.f ^= _e : (i & mr) !== 0 ? r.push(s) : Yr(s) && ((i & Dt) !== 0 && d(this, xt).add(s), wr(s));
      var c = s.first;
      if (c !== null) {
        s = c;
        continue;
      }
    }
    for (; s !== null; ) {
      var f = s.next;
      if (f !== null) {
        s = f;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Ln = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fs(t[r], d(this, Ut), d(this, xt));
}, Hs = function() {
  var l;
  for (const c of zt) {
    var t = c.id < this.id, r = [];
    for (const [f, h] of this.current) {
      if (c.current.has(f))
        if (t && h !== c.current.get(f))
          c.current.set(f, h);
        else
          continue;
      r.push(f);
    }
    var n = [...c.current.keys()].filter((f) => !this.current.has(f));
    if (n.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      c.activate();
      var s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
      for (var a of r)
        Us(a, n, s, i);
      if (d(c, Be).length > 0) {
        c.apply();
        for (var o of d(c, Be))
          ce(l = c, je, Mn).call(l, o, [], []);
        L(c, Be, []);
      }
      c.deactivate();
    }
  }
};
let Nt = cn;
function U(e) {
  var t = Mr;
  Mr = !0;
  try {
    for (var r; ; ) {
      if (ga(), B === null)
        return (
          /** @type {T} */
          r
        );
      B.flush();
    }
  } finally {
    Mr = t;
  }
}
function wa() {
  try {
    la();
  } catch (e) {
    At(e, Sn);
  }
}
let st = null;
function vs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Je | Ue)) === 0 && Yr(n) && (st = /* @__PURE__ */ new Set(), wr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && vi(n), (st == null ? void 0 : st.size) > 0)) {
        Lt.clear();
        for (const s of st) {
          if ((s.f & (Je | Ue)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            st.has(a) && (st.delete(a), i.push(a)), a = a.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const l = i[o];
            (l.f & (Je | Ue)) === 0 && wr(l);
          }
        }
        st.clear();
      }
    }
    st = null;
  }
}
function Us(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & be) !== 0 ? Us(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Vn | Dt)) !== 0 && (i & Ce) === 0 && Ys(s, t, n) && (he(s, Ce), Gn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ys(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (hr.call(t, s))
        return !0;
      if ((s.f & be) !== 0 && Ys(
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
function Gn(e) {
  B.schedule(e);
}
function Ws(e, t) {
  if (!((e.f & lt) !== 0 && (e.f & _e) !== 0)) {
    (e.f & Ce) !== 0 ? t.d.push(e) : (e.f & pt) !== 0 && t.m.push(e), he(e, _e);
    for (var r = e.first; r !== null; )
      Ws(r, t), r = r.next;
  }
}
function Vs(e) {
  he(e, _e);
  for (var t = e.first; t !== null; )
    Vs(t), t = t.next;
}
function xa(e) {
  let t = 0, r = Jt(0), n;
  return () => {
    es() && (u(r), ts(() => (t === 0 && (n = as(() => e(() => Lr(r)))), t += 1, () => {
      Ct(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Lr(r));
      });
    })));
  };
}
var ya = gr | Qt;
function ka(e, t, r, n) {
  new Ea(e, t, r, n);
}
var ze, Or, ct, Yt, Re, ut, qe, it, kt, Wt, St, vr, Br, zr, Et, un, de, Xs, Gs, Ks, Rn, Qr, en, Nn;
class Ea {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    P(this, de);
    /** @type {Boundary | null} */
    ie(this, "parent");
    ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ie(this, "transform_error");
    /** @type {TemplateNode} */
    P(this, ze);
    /** @type {TemplateNode | null} */
    P(this, Or, X ? z : null);
    /** @type {BoundaryProps} */
    P(this, ct);
    /** @type {((anchor: Node) => void)} */
    P(this, Yt);
    /** @type {Effect} */
    P(this, Re);
    /** @type {Effect | null} */
    P(this, ut, null);
    /** @type {Effect | null} */
    P(this, qe, null);
    /** @type {Effect | null} */
    P(this, it, null);
    /** @type {DocumentFragment | null} */
    P(this, kt, null);
    P(this, Wt, 0);
    P(this, St, 0);
    P(this, vr, !1);
    /** @type {Set<Effect>} */
    P(this, Br, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    P(this, zr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    P(this, Et, null);
    P(this, un, xa(() => (L(this, Et, Jt(d(this, Wt))), () => {
      L(this, Et, null);
    })));
    var i;
    L(this, ze, t), L(this, ct, r), L(this, Yt, (a) => {
      var o = (
        /** @type {Effect} */
        F
      );
      o.b = this, o.f |= Cn, n(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((a) => a), L(this, Re, rs(() => {
      if (X) {
        const a = (
          /** @type {Comment} */
          d(this, Or)
        );
        mn();
        const o = a.data === Un;
        if (a.data.startsWith(ls)) {
          const c = JSON.parse(a.data.slice(ls.length));
          ce(this, de, Gs).call(this, c);
        } else o ? ce(this, de, Ks).call(this) : ce(this, de, Xs).call(this);
      } else
        ce(this, de, Rn).call(this);
    }, ya)), X && L(this, ze, z);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fs(t, d(this, Br), d(this, zr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!d(this, ct).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    ce(this, de, Nn).call(this, t, r), L(this, Wt, d(this, Wt) + t), !(!d(this, Et) || d(this, vr)) && (L(this, vr, !0), Ct(() => {
      L(this, vr, !1), d(this, Et) && br(d(this, Et), d(this, Wt));
    }));
  }
  get_effect_pending() {
    return d(this, un).call(this), u(
      /** @type {Source<number>} */
      d(this, Et)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = d(this, ct).onerror;
    let n = d(this, ct).failed;
    if (!r && !n)
      throw t;
    d(this, ut) && (Me(d(this, ut)), L(this, ut, null)), d(this, qe) && (Me(d(this, qe)), L(this, qe, null)), d(this, it) && (Me(d(this, it)), L(this, it, null)), X && (Pe(
      /** @type {TemplateNode} */
      d(this, Or)
    ), ha(), Pe(an()));
    var s = !1, i = !1;
    const a = () => {
      if (s) {
        pa();
        return;
      }
      s = !0, i && va(), d(this, it) !== null && Xt(d(this, it), () => {
        L(this, it, null);
      }), ce(this, de, en).call(this, () => {
        ce(this, de, Rn).call(this);
      });
    }, o = (l) => {
      try {
        i = !0, r == null || r(l, a), i = !1;
      } catch (c) {
        At(c, d(this, Re) && d(this, Re).parent);
      }
      n && L(this, it, ce(this, de, en).call(this, () => {
        try {
          return Ge(() => {
            var c = (
              /** @type {Effect} */
              F
            );
            c.b = this, c.f |= Cn, n(
              d(this, ze),
              () => l,
              () => a
            );
          });
        } catch (c) {
          return At(
            c,
            /** @type {Effect} */
            d(this, Re).parent
          ), null;
        }
      }));
    };
    Ct(() => {
      var l;
      try {
        l = this.transform_error(t);
      } catch (c) {
        At(c, d(this, Re) && d(this, Re).parent);
        return;
      }
      l !== null && typeof l == "object" && typeof /** @type {any} */
      l.then == "function" ? l.then(
        o,
        /** @param {unknown} e */
        (c) => At(c, d(this, Re) && d(this, Re).parent)
      ) : o(l);
    });
  }
}
ze = new WeakMap(), Or = new WeakMap(), ct = new WeakMap(), Yt = new WeakMap(), Re = new WeakMap(), ut = new WeakMap(), qe = new WeakMap(), it = new WeakMap(), kt = new WeakMap(), Wt = new WeakMap(), St = new WeakMap(), vr = new WeakMap(), Br = new WeakMap(), zr = new WeakMap(), Et = new WeakMap(), un = new WeakMap(), de = new WeakSet(), Xs = function() {
  try {
    L(this, ut, Ge(() => d(this, Yt).call(this, d(this, ze))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Gs = function(t) {
  const r = d(this, ct).failed;
  r && L(this, it, Ge(() => {
    r(
      d(this, ze),
      () => t,
      () => () => {
      }
    );
  }));
}, Ks = function() {
  const t = d(this, ct).pending;
  t && (this.is_pending = !0, L(this, qe, Ge(() => t(d(this, ze)))), Ct(() => {
    var r = L(this, kt, document.createDocumentFragment()), n = Ze();
    r.append(n), L(this, ut, ce(this, de, en).call(this, () => Ge(() => d(this, Yt).call(this, n)))), d(this, St) === 0 && (d(this, ze).before(r), L(this, kt, null), Xt(
      /** @type {Effect} */
      d(this, qe),
      () => {
        L(this, qe, null);
      }
    ), ce(this, de, Qr).call(
      this,
      /** @type {Batch} */
      B
    ));
  }));
}, Rn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), L(this, St, 0), L(this, Wt, 0), L(this, ut, Ge(() => {
      d(this, Yt).call(this, d(this, ze));
    })), d(this, St) > 0) {
      var t = L(this, kt, document.createDocumentFragment());
      is(d(this, ut), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        d(this, ct).pending
      );
      L(this, qe, Ge(() => r(d(this, ze))));
    } else
      ce(this, de, Qr).call(
        this,
        /** @type {Batch} */
        B
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Qr = function(t) {
  this.is_pending = !1, t.transfer_effects(d(this, Br), d(this, zr));
}, /**
 * @template T
 * @param {() => T} fn
 */
en = function(t) {
  var r = F, n = D, s = Ye;
  ht(d(this, Re)), et(d(this, Re)), _r(d(this, Re).ctx);
  try {
    return Nt.ensure(), t();
  } catch (i) {
    return zs(i), null;
  } finally {
    ht(r), et(n), _r(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Nn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ce(n = this.parent, de, Nn).call(n, t, r);
    return;
  }
  L(this, St, d(this, St) + t), d(this, St) === 0 && (ce(this, de, Qr).call(this, r), d(this, qe) && Xt(d(this, qe), () => {
    L(this, qe, null);
  }), d(this, kt) && (d(this, ze).before(d(this, kt)), L(this, kt, null)));
};
function $a(e, t, r, n) {
  const s = gn;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    F
  ), o = Ta(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function c(v) {
    o();
    try {
      n(v);
    } catch (g) {
      (a.f & Je) === 0 && At(g, a);
    }
    on();
  }
  if (r.length === 0) {
    l.then(() => c(t.map(s)));
    return;
  }
  var f = Js();
  function h() {
    Promise.all(r.map((v) => /* @__PURE__ */ Ca(v))).then((v) => c([...t.map(s), ...v])).catch((v) => At(v, a)).finally(() => f());
  }
  l ? l.then(() => {
    o(), h(), on();
  }) : h();
}
function Ta() {
  var e = (
    /** @type {Effect} */
    F
  ), t = D, r = Ye, n = (
    /** @type {Batch} */
    B
  );
  return function(i = !0) {
    ht(e), et(t), _r(r), i && (e.f & Je) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function on(e = !0) {
  ht(null), et(null), _r(null), e && (B == null || B.deactivate());
}
function Js() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    F.b
  ), t = (
    /** @type {Batch} */
    B
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  var t = be | Ce, r = D !== null && (D.f & be) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return F !== null && (F.f |= Qt), {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: Ns,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: r ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && na();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Jt(
    /** @type {V} */
    xe
  ), a = !D, o = /* @__PURE__ */ new Map();
  return Oa(() => {
    var g;
    var l = (
      /** @type {Effect} */
      F
    ), c = Is();
    s = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(on);
    } catch (_) {
      c.reject(_), on();
    }
    var f = (
      /** @type {Batch} */
      B
    );
    if (a) {
      if ((l.f & Ot) !== 0)
        var h = Js();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (g = o.get(f)) == null || g.reject(wt), o.delete(f);
      else {
        for (const _ of o.values())
          _.reject(wt);
        o.clear();
      }
      o.set(f, c);
    }
    const v = (_, C = void 0) => {
      if (h) {
        var p = C === wt;
        h(p);
      }
      if (!(C === wt || (l.f & Je) !== 0)) {
        if (f.activate(), C)
          i.f |= Mt, br(i, C);
        else {
          (i.f & Mt) !== 0 && (i.f ^= Mt), br(i, _);
          for (const [$, E] of o) {
            if (o.delete($), $ === f) break;
            E.reject(wt);
          }
        }
        f.deactivate();
      }
    };
    c.promise.then(v, (_) => v(null, _ || "unknown"));
  }), li(() => {
    for (const l of o.values())
      l.reject(wt);
  }), new Promise((l) => {
    function c(f) {
      function h() {
        f === s ? l(i) : c(s);
      }
      f.then(h, h);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ gn(e);
  return mi(t), t;
}
// @__NO_SIDE_EFFECTS__
function ja(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = Ds, t;
}
function Sa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Me(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Aa(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (t.f & Je) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Kn(e) {
  var t, r = F;
  ht(Aa(e));
  try {
    e.f &= ~Kt, Sa(e), t = wi(e);
  } finally {
    ht(r);
  }
  return t;
}
function Zs(e) {
  var t = e.v, r = Kn(e);
  if (!e.equals(r) && (e.wv = _i(), (!(B != null && B.is_fork) || e.deps === null) && (e.v = r, B == null || B.capture(e, t), e.deps === null))) {
    he(e, _e);
    return;
  }
  Pt || (ye !== null ? (es() || B != null && B.is_fork) && ye.set(e, r) : Xn(e));
}
function Ia(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(wt), n.teardown = Ki, n.ac = null, Rr(n, 0), ns(n));
}
function Qs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && wr(t);
}
let Pn = /* @__PURE__ */ new Set();
const Lt = /* @__PURE__ */ new Map();
let ei = !1;
function Jt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ns,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  const r = Jt(e);
  return mi(r), r;
}
// @__NO_SIDE_EFFECTS__
function ti(e, t = !1, r = !0) {
  const n = Jt(e);
  return t || (n.equals = Ds), n;
}
function j(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ot || (D.f & ds) !== 0) && Os() && (D.f & (be | Dt | Vn | ds)) !== 0 && (Qe === null || !hr.call(Qe, e)) && fa();
  let n = r ? It(t) : t;
  return br(e, n, Zr);
}
function br(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    Pt ? Lt.set(e, t) : Lt.set(e, n), e.v = t;
    var s = Nt.ensure();
    if (s.capture(e, n), (e.f & be) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Ce) !== 0 && Kn(i), ye === null && Xn(i);
    }
    e.wv = _i(), ri(e, Ce, r), F !== null && (F.f & _e) !== 0 && (F.f & (lt | Rt)) === 0 && (Ve === null ? qa([e]) : Ve.push(e)), !s.is_fork && Pn.size > 0 && !ei && Ma();
  }
  return t;
}
function Ma() {
  ei = !1;
  for (const e of Pn)
    (e.f & _e) !== 0 && he(e, pt), Yr(e) && wr(e);
  Pn.clear();
}
function Lr(e) {
  j(e, e.v + 1);
}
function ri(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var a = n[i], o = a.f, l = (o & Ce) === 0;
      if (l && he(a, t), (o & be) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        ye == null || ye.delete(c), (o & Kt) === 0 && (o & Ke && (a.f |= Kt), ri(c, pt, r));
      } else if (l) {
        var f = (
          /** @type {Effect} */
          a
        );
        (o & Dt) !== 0 && st !== null && st.add(f), r !== null ? r.push(f) : Gn(f);
      }
    }
}
function It(e) {
  if (typeof e != "object" || e === null || Ir in e)
    return e;
  const t = Wn(e);
  if (t !== Xi && t !== Gi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ss(e), s = /* @__PURE__ */ re(0), i = Gt, a = (o) => {
    if (Gt === i)
      return o();
    var l = D, c = Gt;
    et(null), gs(i);
    var f = o();
    return et(l), gs(c), f;
  };
  return n && r.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ua();
        var f = r.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ re(c.value);
          return r.set(l, h), h;
        }) : j(f, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ re(xe));
            r.set(l, f), Lr(s);
          }
        } else
          j(c, xe), Lr(s);
        return !0;
      },
      get(o, l, c) {
        var g;
        if (l === Ir)
          return e;
        var f = r.get(l), h = l in o;
        if (f === void 0 && (!h || (g = ar(o, l)) != null && g.writable) && (f = a(() => {
          var _ = It(h ? o[l] : xe), C = /* @__PURE__ */ re(_);
          return C;
        }), r.set(l, f)), f !== void 0) {
          var v = u(f);
          return v === xe ? void 0 : v;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var f = r.get(l);
          f && (c.value = u(f));
        } else if (c === void 0) {
          var h = r.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var v;
        if (l === Ir)
          return !0;
        var c = r.get(l), f = c !== void 0 && c.v !== xe || Reflect.has(o, l);
        if (c !== void 0 || F !== null && (!f || (v = ar(o, l)) != null && v.writable)) {
          c === void 0 && (c = a(() => {
            var g = f ? It(o[l]) : xe, _ = /* @__PURE__ */ re(g);
            return _;
          }), r.set(l, c));
          var h = u(c);
          if (h === xe)
            return !1;
        }
        return f;
      },
      set(o, l, c, f) {
        var I;
        var h = r.get(l), v = l in o;
        if (n && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var _ = r.get(g + "");
            _ !== void 0 ? j(_, xe) : g in o && (_ = a(() => /* @__PURE__ */ re(xe)), r.set(g + "", _));
          }
        if (h === void 0)
          (!v || (I = ar(o, l)) != null && I.writable) && (h = a(() => /* @__PURE__ */ re(void 0)), j(h, It(c)), r.set(l, h));
        else {
          v = h.v !== xe;
          var C = a(() => It(c));
          j(h, C);
        }
        var p = Reflect.getOwnPropertyDescriptor(o, l);
        if (p != null && p.set && p.set.call(f, c), !v) {
          if (n && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= $.v && j($, E + 1);
          }
          Lr(s);
        }
        return !0;
      },
      ownKeys(o) {
        u(s);
        var l = Reflect.ownKeys(o).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== xe;
        });
        for (var [c, f] of r)
          f.v !== xe && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        da();
      }
    }
  );
}
var ps, ni, si, ii;
function Dn() {
  if (ps === void 0) {
    ps = window, ni = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    si = ar(t, "firstChild").get, ii = ar(t, "nextSibling").get, cs(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), cs(r) && (r.__t = void 0);
  }
}
function Ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return (
    /** @type {TemplateNode | null} */
    si.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return (
    /** @type {TemplateNode | null} */
    ii.call(e)
  );
}
function y(e, t) {
  if (!X)
    return /* @__PURE__ */ Zt(e);
  var r = /* @__PURE__ */ Zt(z);
  if (r === null)
    r = z.appendChild(Ze());
  else if (t && r.nodeType !== pn) {
    var n = Ze();
    return r == null || r.before(n), Pe(n), n;
  }
  return t && Zn(
    /** @type {Text} */
    r
  ), Pe(r), r;
}
function Ur(e, t = !1) {
  if (!X) {
    var r = /* @__PURE__ */ Zt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ mt(r) : r;
  }
  if (t) {
    if ((z == null ? void 0 : z.nodeType) !== pn) {
      var n = Ze();
      return z == null || z.before(n), Pe(n), n;
    }
    Zn(
      /** @type {Text} */
      z
    );
  }
  return z;
}
function A(e, t = 1, r = !1) {
  let n = X ? z : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ mt(n);
  if (!X)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== pn) {
      var i = Ze();
      return n === null ? s == null || s.after(i) : n.before(i), Pe(i), i;
    }
    Zn(
      /** @type {Text} */
      n
    );
  }
  return Pe(n), n;
}
function ai(e) {
  e.textContent = "";
}
function oi() {
  return !1;
}
function Jn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(js, e, void 0)
  );
}
function Zn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === pn; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let hs = !1;
function La() {
  hs || (hs = !0, document.addEventListener(
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
function Qn(e) {
  var t = D, r = F;
  et(null), ht(null);
  try {
    return e();
  } finally {
    et(t), ht(r);
  }
}
function Ra(e) {
  F === null && (D === null && oa(), aa()), Pt && ia();
}
function Na(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function gt(e, t) {
  var r = F;
  r !== null && (r.f & Ue) !== 0 && (e |= Ue);
  var n = {
    ctx: Ye,
    deps: null,
    nodes: null,
    f: e | Ce | Ke,
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
  if ((e & mr) !== 0)
    ir !== null ? ir.push(n) : Nt.ensure().schedule(n);
  else if (t !== null) {
    try {
      wr(n);
    } catch (a) {
      throw Me(n), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Qt) === 0 && (s = s.first, (e & Dt) !== 0 && (e & gr) !== 0 && s !== null && (s.f |= gr));
  }
  if (s !== null && (s.parent = r, r !== null && Na(s, r), D !== null && (D.f & be) !== 0 && (e & Rt) === 0)) {
    var i = (
      /** @type {Derived} */
      D
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function es() {
  return D !== null && !ot;
}
function li(e) {
  const t = gt(vn, null);
  return he(t, _e), t.teardown = e, t;
}
function ci(e) {
  Ra();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !D && (t & lt) !== 0 && (t & Ot) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ui(e);
}
function ui(e) {
  return gt(mr | Qi, e);
}
function Pa(e) {
  Nt.ensure();
  const t = gt(Rt | Qt, e);
  return () => {
    Me(t);
  };
}
function Da(e) {
  Nt.ensure();
  const t = gt(Rt | Qt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Xt(t, () => {
      Me(t), n(void 0);
    }) : (Me(t), n(void 0));
  });
}
function di(e) {
  return gt(mr, e);
}
function Oa(e) {
  return gt(Vn | Qt, e);
}
function ts(e, t = 0) {
  return gt(vn | t, e);
}
function ae(e, t = [], r = [], n = []) {
  $a(n, t, r, (s) => {
    gt(vn, () => e(...s.map(u)));
  });
}
function rs(e, t = 0) {
  var r = gt(Dt | t, e);
  return r;
}
function Ge(e) {
  return gt(lt | Qt, e);
}
function fi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Pt, n = D;
    ms(!0), et(null);
    try {
      t.call(null);
    } finally {
      ms(r), et(n);
    }
  }
}
function ns(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Qn(() => {
      s.abort(wt);
    });
    var n = r.next;
    (r.f & Rt) !== 0 ? r.parent = null : Me(r, t), r = n;
  }
}
function Ba(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & lt) === 0 && Me(t), t = r;
  }
}
function Me(e, t = !0) {
  var r = !1;
  (t || (e.f & Zi) !== 0) && e.nodes !== null && e.nodes.end !== null && (za(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), he(e, us), ns(e, t && !r), Rr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  fi(e), e.f ^= us, e.f |= Je;
  var s = e.parent;
  s !== null && s.first !== null && vi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function za(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ mt(e);
    e.remove(), e = r;
  }
}
function vi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Xt(e, t, r = !0) {
  var n = [];
  pi(e, n, !0);
  var s = () => {
    r && Me(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var o of n)
      o.out(a);
  } else
    s();
}
function pi(e, t, r) {
  if ((e.f & Ue) === 0) {
    e.f ^= Ue;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var i = s.next, a = (s.f & gr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & lt) !== 0 && (e.f & Dt) !== 0;
      pi(s, t, a ? r : !1), s = i;
    }
  }
}
function ss(e) {
  hi(e, !0);
}
function hi(e, t) {
  if ((e.f & Ue) !== 0) {
    e.f ^= Ue, (e.f & _e) === 0 && (he(e, Ce), Nt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & gr) !== 0 || (r.f & lt) !== 0;
      hi(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function is(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ mt(r);
      t.append(r), r = s;
    }
}
let tn = !1, Pt = !1;
function ms(e) {
  Pt = e;
}
let D = null, ot = !1;
function et(e) {
  D = e;
}
let F = null;
function ht(e) {
  F = e;
}
let Qe = null;
function mi(e) {
  D !== null && (Qe === null ? Qe = [e] : Qe.push(e));
}
let Ne = null, Oe = 0, Ve = null;
function qa(e) {
  Ve = e;
}
let gi = 1, Ft = 0, Gt = Ft;
function gs(e) {
  Gt = e;
}
function _i() {
  return ++gi;
}
function Yr(e) {
  var t = e.f;
  if ((t & Ce) !== 0)
    return !0;
  if (t & be && (e.f &= ~Kt), (t & pt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Yr(
        /** @type {Derived} */
        i
      ) && Zs(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && he(e, _e);
  }
  return !1;
}
function bi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Qe !== null && hr.call(Qe, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & be) !== 0 ? bi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? he(i, Ce) : (i.f & _e) !== 0 && he(i, pt), Gn(
        /** @type {Effect} */
        i
      ));
    }
}
function wi(e) {
  var C;
  var t = Ne, r = Oe, n = Ve, s = D, i = Qe, a = Ye, o = ot, l = Gt, c = e.f;
  Ne = /** @type {null | Value[]} */
  null, Oe = 0, Ve = null, D = (c & (lt | Rt)) === 0 ? e : null, Qe = null, _r(e.ctx), ot = !1, Gt = ++Ft, e.ac !== null && (Qn(() => {
    e.ac.abort(wt);
  }), e.ac = null);
  try {
    e.f |= jn;
    var f = (
      /** @type {Function} */
      e.fn
    ), h = f();
    e.f |= Ot;
    var v = e.deps, g = B == null ? void 0 : B.is_fork;
    if (Ne !== null) {
      var _;
      if (g || Rr(e, Oe), v !== null && Oe > 0)
        for (v.length = Oe + Ne.length, _ = 0; _ < Ne.length; _++)
          v[Oe + _] = Ne[_];
      else
        e.deps = v = Ne;
      if (es() && (e.f & Ke) !== 0)
        for (_ = Oe; _ < v.length; _++)
          ((C = v[_]).reactions ?? (C.reactions = [])).push(e);
    } else !g && v !== null && Oe < v.length && (Rr(e, Oe), v.length = Oe);
    if (Os() && Ve !== null && !ot && v !== null && (e.f & (be | pt | Ce)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      Ve.length; _++)
        bi(
          Ve[_],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ft++, s.deps !== null)
        for (let p = 0; p < r; p += 1)
          s.deps[p].rv = Ft;
      if (t !== null)
        for (const p of t)
          p.rv = Ft;
      Ve !== null && (n === null ? n = Ve : n.push(.../** @type {Source[]} */
      Ve));
    }
    return (e.f & Mt) !== 0 && (e.f ^= Mt), h;
  } catch (p) {
    return zs(p);
  } finally {
    e.f ^= jn, Ne = t, Oe = r, Ve = n, D = s, Qe = i, _r(a), ot = o, Gt = l;
  }
}
function Fa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Vi.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !hr.call(Ne, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ke) !== 0 && (i.f ^= Ke, i.f &= ~Kt), Xn(i), Ia(i), Rr(i, 0);
  }
}
function Rr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Fa(e, r[n]);
}
function wr(e) {
  var t = e.f;
  if ((t & Je) === 0) {
    he(e, _e);
    var r = F, n = tn;
    F = e, tn = !0;
    try {
      (t & (Dt | Ms)) !== 0 ? Ba(e) : ns(e), fi(e);
      var s = wi(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = gi;
      var i;
      Wi && ma && (e.f & Ce) !== 0 && e.deps;
    } finally {
      tn = n, F = r;
    }
  }
}
function u(e) {
  var t = e.f, r = (t & be) !== 0;
  if (D !== null && !ot) {
    var n = F !== null && (F.f & Je) !== 0;
    if (!n && (Qe === null || !hr.call(Qe, e))) {
      var s = D.deps;
      if ((D.f & jn) !== 0)
        e.rv < Ft && (e.rv = Ft, Ne === null && s !== null && s[Oe] === e ? Oe++ : Ne === null ? Ne = [e] : Ne.push(e));
      else {
        (D.deps ?? (D.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [D] : hr.call(i, D) || i.push(D);
      }
    }
  }
  if (Pt && Lt.has(e))
    return Lt.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Pt) {
      var o = a.v;
      return ((a.f & _e) === 0 && a.reactions !== null || yi(a)) && (o = Kn(a)), Lt.set(a, o), o;
    }
    var l = (a.f & Ke) === 0 && !ot && D !== null && (tn || (D.f & Ke) !== 0), c = (a.f & Ot) === 0;
    Yr(a) && (l && (a.f |= Ke), Zs(a)), l && !c && (Qs(a), xi(a));
  }
  if (ye != null && ye.has(e))
    return ye.get(e);
  if ((e.f & Mt) !== 0)
    throw e.v;
  return e.v;
}
function xi(e) {
  if (e.f |= Ke, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & be) !== 0 && (t.f & Ke) === 0 && (Qs(
        /** @type {Derived} */
        t
      ), xi(
        /** @type {Derived} */
        t
      ));
}
function yi(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Lt.has(t) || (t.f & be) !== 0 && yi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function as(e) {
  var t = ot;
  try {
    return ot = !0, e();
  } finally {
    ot = t;
  }
}
function Ha(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ir in e)
      On(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ir in r && On(r);
      }
  }
}
function On(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        On(e[n], t);
      } catch {
      }
    const r = Wn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = As(r);
      for (let s in n) {
        const i = n[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const Ht = Symbol("events"), ki = /* @__PURE__ */ new Set(), Bn = /* @__PURE__ */ new Set();
function Ua(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || zn.call(t, i), !i.cancelBubble)
      return Qn(() => r == null ? void 0 : r.call(this, i));
  }
  return Ct(() => {
    t.addEventListener(e, s, n);
  }), s;
}
function Ei(e, t, r, n, s) {
  var i = { capture: n, passive: s }, a = Ua(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && li(() => {
    t.removeEventListener(e, a, i);
  });
}
function ke(e, t, r) {
  (t[Ht] ?? (t[Ht] = {}))[e] = r;
}
function yr(e) {
  for (var t = 0; t < e.length; t++)
    ki.add(e[t]);
  for (var r of Bn)
    r(e);
}
let _s = null;
function zn(e) {
  var p, $;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  _s = e;
  var a = 0, o = _s === e && e[Ht];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ht] = t;
      return;
    }
    var c = s.indexOf(t);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (i = /** @type {Element} */
  s[a] || e.target, i !== t) {
    sn(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var f = D, h = F;
    et(null), ht(null);
    try {
      for (var v, g = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = ($ = i[Ht]) == null ? void 0 : $[n];
          C != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && C.call(i, e);
        } catch (E) {
          v ? g.push(E) : v = E;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (v) {
        for (let E of g)
          queueMicrotask(() => {
            throw E;
          });
        throw v;
      }
    } finally {
      e[Ht] = t, delete e.currentTarget, et(f), ht(h);
    }
  }
}
var $s;
const kn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  (($s = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : $s.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ya(e) {
  return (
    /** @type {string} */
    (kn == null ? void 0 : kn.createHTML(e)) ?? e
  );
}
function Wa(e) {
  var t = Jn("template");
  return t.innerHTML = Ya(e.replaceAll("<!>", "<!---->")), t.content;
}
function or(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var r = (t & Ui) !== 0, n = (t & Yi) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (X)
      return or(z, null), z;
    s === void 0 && (s = Wa(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Zt(s)));
    var a = (
      /** @type {TemplateNode} */
      n || ni ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Zt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      or(o, l);
    } else
      or(a, a);
    return a;
  };
}
function $i() {
  if (X)
    return or(z, null), z;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ze();
  return e.append(t, r), or(t, r), e;
}
function R(e, t) {
  if (X) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      F
    );
    ((r.f & Ot) === 0 || r.nodes.end === null) && (r.nodes.end = z), mn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Va = ["touchstart", "touchmove"];
function Xa(e) {
  return Va.includes(e);
}
function K(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ti(e, t) {
  return Ci(e, t);
}
function Ga(e, t) {
  Dn(), t.intro = t.intro ?? !1;
  const r = t.target, n = X, s = z;
  try {
    for (var i = /* @__PURE__ */ Zt(r); i && (i.nodeType !== Hr || /** @type {Comment} */
    i.data !== Cs); )
      i = /* @__PURE__ */ mt(i);
    if (!i)
      throw pr;
    Tt(!0), Pe(
      /** @type {Comment} */
      i
    );
    const a = Ci(e, { ...t, anchor: i });
    return Tt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== pr && console.warn("Failed to hydrate: ", a), t.recover === !1 && ca(), Dn(), ai(r), Tt(!1), Ti(e, t);
  } finally {
    Tt(n), Pe(s);
  }
}
const Xr = /* @__PURE__ */ new Map();
function Ci(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: a = !0, transformError: o }) {
  Dn();
  var l = void 0, c = Da(() => {
    var f = r ?? t.appendChild(Ze());
    ka(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (g) => {
        er({});
        var _ = (
          /** @type {ComponentContext} */
          Ye
        );
        if (i && (_.c = i), s && (n.$$events = s), X && or(
          /** @type {TemplateNode} */
          g,
          null
        ), l = e(g, n) || {}, X && (F.nodes.end = z, z === null || z.nodeType !== Hr || /** @type {Comment} */
        z.data !== Yn))
          throw hn(), pr;
        tr();
      },
      o
    );
    var h = /* @__PURE__ */ new Set(), v = (g) => {
      for (var _ = 0; _ < g.length; _++) {
        var C = g[_];
        if (!h.has(C)) {
          h.add(C);
          var p = Xa(C);
          for (const I of [t, document]) {
            var $ = Xr.get(I);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), Xr.set(I, $));
            var E = $.get(C);
            E === void 0 ? (I.addEventListener(C, zn, { passive: p }), $.set(C, 1)) : $.set(C, E + 1);
          }
        }
      }
    };
    return v(fn(ki)), Bn.add(v), () => {
      var p;
      for (var g of h)
        for (const $ of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Xr.get($)
          ), C = (
            /** @type {number} */
            _.get(g)
          );
          --C == 0 ? ($.removeEventListener(g, zn), _.delete(g), _.size === 0 && Xr.delete($)) : _.set(g, C);
        }
      Bn.delete(v), f !== r && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return qn.set(l, c), l;
}
let qn = /* @__PURE__ */ new WeakMap();
function Ka(e, t) {
  const r = qn.get(e);
  return r ? (qn.delete(e), r(t)) : Promise.resolve();
}
var at, dt, Fe, Vt, qr, Fr, dn;
class Ja {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    P(this, at, /* @__PURE__ */ new Map());
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
    P(this, dt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    P(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    P(this, Vt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    P(this, qr, !0);
    /**
     * @param {Batch} batch
     */
    P(this, Fr, (t) => {
      if (d(this, at).has(t)) {
        var r = (
          /** @type {Key} */
          d(this, at).get(t)
        ), n = d(this, dt).get(r);
        if (n)
          ss(n), d(this, Vt).delete(r);
        else {
          var s = d(this, Fe).get(r);
          s && (d(this, dt).set(r, s.effect), d(this, Fe).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, a] of d(this, at)) {
          if (d(this, at).delete(i), i === t)
            break;
          const o = d(this, Fe).get(a);
          o && (Me(o.effect), d(this, Fe).delete(a));
        }
        for (const [i, a] of d(this, dt)) {
          if (i === r || d(this, Vt).has(i)) continue;
          const o = () => {
            if (Array.from(d(this, at).values()).includes(i)) {
              var c = document.createDocumentFragment();
              is(a, c), c.append(Ze()), d(this, Fe).set(i, { effect: a, fragment: c });
            } else
              Me(a);
            d(this, Vt).delete(i), d(this, dt).delete(i);
          };
          d(this, qr) || !n ? (d(this, Vt).add(i), Xt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    P(this, dn, (t) => {
      d(this, at).delete(t);
      const r = Array.from(d(this, at).values());
      for (const [n, s] of d(this, Fe))
        r.includes(n) || (Me(s.effect), d(this, Fe).delete(n));
    });
    this.anchor = t, L(this, qr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      B
    ), s = oi();
    if (r && !d(this, dt).has(t) && !d(this, Fe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), a = Ze();
        i.append(a), d(this, Fe).set(t, {
          effect: Ge(() => r(a)),
          fragment: i
        });
      } else
        d(this, dt).set(
          t,
          Ge(() => r(this.anchor))
        );
    if (d(this, at).set(n, t), s) {
      for (const [o, l] of d(this, dt))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of d(this, Fe))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(d(this, Fr)), n.ondiscard(d(this, dn));
    } else
      X && (this.anchor = z), d(this, Fr).call(this, n);
  }
}
at = new WeakMap(), dt = new WeakMap(), Fe = new WeakMap(), Vt = new WeakMap(), qr = new WeakMap(), Fr = new WeakMap(), dn = new WeakMap();
function Za(e) {
  Ye === null && ra(), ci(() => {
    const t = as(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ie(e, t, r = !1) {
  var n;
  X && (n = z, mn());
  var s = new Ja(e), i = r ? gr : 0;
  function a(o, l) {
    if (X) {
      var c = Rs(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(c.substring(1))) {
        var f = an();
        Pe(f), s.anchor = f, Tt(!1), s.ensure(o, l), Tt(!0);
        return;
      }
    }
    s.ensure(o, l);
  }
  rs(() => {
    var o = !1;
    t((l, c = 0) => {
      o = !0, a(c, l);
    }), o || a(-1, null);
  }, i);
}
function Qa(e, t, r) {
  for (var n = [], s = t.length, i, a = t.length, o = 0; o < s; o++) {
    let h = t[o];
    Xt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Fn(e, fn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
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
      ai(f), f.append(c), e.items.clear();
    }
    Fn(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Fn(e, t, r = !0) {
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
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n != null && n.has(i)) {
      i.f |= vt;
      const a = document.createDocumentFragment();
      is(i, a);
    } else
      Me(t[s], r);
  }
}
var bs;
function Nr(e, t, r, n, s, i = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Ts) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = X ? Pe(/* @__PURE__ */ Zt(c)) : c.appendChild(Ze());
  }
  X && mn();
  var f = null, h = /* @__PURE__ */ ja(() => {
    var I = r();
    return Ss(I) ? I : I == null ? [] : fn(I);
  }), v, g = /* @__PURE__ */ new Map(), _ = !0;
  function C(I) {
    (E.effect.f & Je) === 0 && (E.pending.delete(I), E.fallback = f, eo(E, v, a, t, n), f !== null && (v.length === 0 ? (f.f & vt) === 0 ? ss(f) : (f.f ^= vt, Ar(f, null, a)) : Xt(f, () => {
      f = null;
    })));
  }
  function p(I) {
    E.pending.delete(I);
  }
  var $ = rs(() => {
    v = /** @type {V[]} */
    u(h);
    var I = v.length;
    let Q = !1;
    if (X) {
      var J = Rs(a) === Un;
      J !== (I === 0) && (a = an(), Pe(a), Tt(!1), Q = !0);
    }
    for (var Y = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      B
    ), oe = oi(), ne = 0; ne < I; ne += 1) {
      X && z.nodeType === Hr && /** @type {Comment} */
      z.data === Yn && (a = /** @type {Comment} */
      z, Q = !0, Tt(!1));
      var m = v[ne], w = n(m, ne), S = _ ? null : o.get(w);
      S ? (S.v && br(S.v, m), S.i && br(S.i, ne), oe && Z.unskip_effect(S.e)) : (S = to(
        o,
        _ ? a : bs ?? (bs = Ze()),
        m,
        w,
        ne,
        s,
        t,
        r
      ), _ || (S.e.f |= vt), o.set(w, S)), Y.add(w);
    }
    if (I === 0 && i && !f && (_ ? f = Ge(() => i(a)) : (f = Ge(() => i(bs ?? (bs = Ze()))), f.f |= vt)), I > Y.size && sa(), X && I > 0 && Pe(an()), !_)
      if (g.set(Z, Y), oe) {
        for (const [ee, te] of o)
          Y.has(ee) || Z.skip_effect(te.e);
        Z.oncommit(C), Z.ondiscard(p);
      } else
        C(Z);
    Q && Tt(!0), u(h);
  }), E = { effect: $, items: o, pending: g, outrogroups: null, fallback: f };
  _ = !1, X && (a = z);
}
function Sr(e) {
  for (; e !== null && (e.f & lt) === 0; )
    e = e.next;
  return e;
}
function eo(e, t, r, n, s) {
  var m, w, S, ee, te, fe, k, H, W;
  var i = (n & Fi) !== 0, a = t.length, o = e.items, l = Sr(e.effect.first), c, f = null, h, v = [], g = [], _, C, p, $;
  if (i)
    for ($ = 0; $ < a; $ += 1)
      _ = t[$], C = s(_, $), p = /** @type {EachItem} */
      o.get(C).e, (p.f & vt) === 0 && ((w = (m = p.nodes) == null ? void 0 : m.a) == null || w.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(p));
  for ($ = 0; $ < a; $ += 1) {
    if (_ = t[$], C = s(_, $), p = /** @type {EachItem} */
    o.get(C).e, e.outrogroups !== null)
      for (const N of e.outrogroups)
        N.pending.delete(p), N.done.delete(p);
    if ((p.f & Ue) !== 0 && (ss(p), i && ((ee = (S = p.nodes) == null ? void 0 : S.a) == null || ee.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(p))), (p.f & vt) !== 0)
      if (p.f ^= vt, p === l)
        Ar(p, null, r);
      else {
        var E = f ? f.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), jt(e, f, p), jt(e, p, E), Ar(p, E, r), f = p, v = [], g = [], l = Sr(f.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (v.length < g.length) {
          var I = g[0], Q;
          f = I.prev;
          var J = v[0], Y = v[v.length - 1];
          for (Q = 0; Q < v.length; Q += 1)
            Ar(v[Q], I, r);
          for (Q = 0; Q < g.length; Q += 1)
            c.delete(g[Q]);
          jt(e, J.prev, Y.next), jt(e, f, J), jt(e, Y, I), l = I, f = Y, $ -= 1, v = [], g = [];
        } else
          c.delete(p), Ar(p, l, r), jt(e, p.prev, p.next), jt(e, p, f === null ? e.effect.first : f.next), jt(e, f, p), f = p;
        continue;
      }
      for (v = [], g = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), g.push(l), l = Sr(l.next);
      if (l === null)
        continue;
    }
    (p.f & vt) === 0 && v.push(p), f = p, l = Sr(p.next);
  }
  if (e.outrogroups !== null) {
    for (const N of e.outrogroups)
      N.pending.size === 0 && (Fn(e, fn(N.done)), (te = e.outrogroups) == null || te.delete(N));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var Z = [];
    if (c !== void 0)
      for (p of c)
        (p.f & Ue) === 0 && Z.push(p);
    for (; l !== null; )
      (l.f & Ue) === 0 && l !== e.fallback && Z.push(l), l = Sr(l.next);
    var oe = Z.length;
    if (oe > 0) {
      var ne = (n & Ts) !== 0 && a === 0 ? r : null;
      if (i) {
        for ($ = 0; $ < oe; $ += 1)
          (k = (fe = Z[$].nodes) == null ? void 0 : fe.a) == null || k.measure();
        for ($ = 0; $ < oe; $ += 1)
          (W = (H = Z[$].nodes) == null ? void 0 : H.a) == null || W.fix();
      }
      Qa(e, Z, ne);
    }
  }
  i && Ct(() => {
    var N, O;
    if (h !== void 0)
      for (p of h)
        (O = (N = p.nodes) == null ? void 0 : N.a) == null || O.apply();
  });
}
function to(e, t, r, n, s, i, a, o) {
  var l = (a & zi) !== 0 ? (a & Hi) === 0 ? /* @__PURE__ */ ti(r, !1, !1) : Jt(r) : null, c = (a & qi) !== 0 ? Jt(s) : null;
  return {
    v: l,
    i: c,
    e: Ge(() => (i(t, l ?? r, c ?? s, o), () => {
      e.delete(n);
    }))
  };
}
function Ar(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & vt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(n)
      );
      if (i.before(n), n === s)
        return;
      n = a;
    }
}
function jt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function kr(e, t) {
  di(() => {
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
      const s = Jn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function ln(e, t, r) {
  di(() => {
    var n = as(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var s = !1, i = (
        /** @type {any} */
        {}
      );
      ts(() => {
        var a = r();
        Ha(a), s && Ps(i, a) && (i = a, n.update(a));
      }), s = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function ji(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ji(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ro() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ji(e)) && (n && (n += " "), n += t);
  return n;
}
function no(e) {
  return typeof e == "object" ? ro(e) : e ?? "";
}
const ws = [...` 	
\r\f \v\uFEFF`];
function so(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, a = 0; (a = n.indexOf(s, a)) >= 0; ) {
          var o = a + i;
          (a === 0 || ws.includes(n[a - 1])) && (o === n.length || ws.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function io(e, t) {
  return e == null ? null : String(e);
}
function xr(e, t, r, n, s, i) {
  var a = e.__className;
  if (X || a !== r || a === void 0) {
    var o = so(r, n, i);
    (!X || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (i && s !== i)
    for (var l in i) {
      var c = !!i[l];
      (s == null || c !== !!s[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Pr(e, t, r, n) {
  var s = e.__style;
  if (X || s !== t) {
    var i = io(t);
    (!X || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  }
  return n;
}
const ao = Symbol("is custom element"), oo = Symbol("is html"), lo = Ls ? "link" : "LINK", co = Ls ? "progress" : "PROGRESS";
function uo(e) {
  if (X) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ft(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          ft(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, Ct(r), La();
  }
}
function fo(e, t) {
  var r = Si(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== co) || (e.value = t ?? "");
}
function ft(e, t, r, n) {
  var s = Si(e);
  X && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === lo) || s[t] !== (s[t] = r) && (t === "loading" && (e[ta] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && vo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Si(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ao]: e.nodeName.includes("-"),
      [oo]: e.namespaceURI === js
    })
  );
}
var xs = /* @__PURE__ */ new Map();
function vo(e) {
  var t = e.getAttribute("is") || e.nodeName, r = xs.get(t);
  if (r) return r;
  xs.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = As(s);
    for (var a in n)
      n[a].set && r.push(a);
    s = Wn(s);
  }
  return r;
}
function V(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, a = () => (i && (i = !1, s = /** @type {V} */
  n), s);
  e[t];
  var o;
  o = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? a() : (i = !0, h);
  };
  var l = !1, c = /* @__PURE__ */ gn(() => (l = !1, o())), f = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(h, v) {
      if (arguments.length > 0) {
        const g = v ? u(c) : h;
        return j(c, g), l = !0, s !== void 0 && (s = g), h;
      }
      return Pt && l || (f.f & Je) !== 0 ? c.v : u(c);
    })
  );
}
function po(e) {
  return new ho(e);
}
var $t, Xe;
class ho {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    P(this, $t);
    /** @type {Record<string, any>} */
    P(this, Xe);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var l = /* @__PURE__ */ ti(o, !1, !1);
      return r.set(a, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return u(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === ea ? !0 : (u(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return j(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    L(this, Xe, (t.hydrate ? Ga : Ti)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && U(), L(this, $t, s.$$events);
    for (const a of Object.keys(d(this, Xe)))
      a === "$set" || a === "$destroy" || a === "$on" || sn(this, a, {
        get() {
          return d(this, Xe)[a];
        },
        /** @param {any} value */
        set(o) {
          d(this, Xe)[a] = o;
        },
        enumerable: !0
      });
    d(this, Xe).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, d(this, Xe).$destroy = () => {
      Ka(d(this, Xe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    d(this, Xe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    d(this, $t)[t] = d(this, $t)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return d(this, $t)[t].push(n), () => {
      d(this, $t)[t] = d(this, $t)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    d(this, Xe).$destroy();
  }
}
$t = new WeakMap(), Xe = new WeakMap();
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
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ie(this, "$$shadowRoot", null);
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
          const o = Jn("slot");
          i !== "default" && (o.name = i), R(a, o);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = mo(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = rn(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = po({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Pa(() => {
        ts(() => {
          var i;
          this.$$r = !0;
          for (const a of nn(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = rn(
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
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const o = this.$$c.$on(i, a);
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
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = rn(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return nn(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function rn(e, t, r, n) {
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
function mo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Er(e, t, r, n, s, i) {
  let a = class extends Ai {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return nn(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return nn(t).forEach((o) => {
    sn(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = rn(o, l, t), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var f = (h = ar(c, o)) == null ? void 0 : h.get;
          f ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), n.forEach((o) => {
    sn(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const En = "efsdb-bootstrap";
function go() {
  var n;
  const e = document.getElementById(En);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${En}`);
  const t = ((n = e.textContent) == null ? void 0 : n.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${En}`);
  const r = JSON.parse(t);
  if (!r || typeof r != "object")
    throw new Error("Invalid bootstrap payload");
  return r;
}
function _o(e) {
  const t = go();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function bo() {
  return window;
}
function wo() {
  var e, t;
  return ((t = (e = bo()).getEfsdbTheme) == null ? void 0 : t.call(e)) ?? "dark";
}
function xo(e) {
  const t = (r) => {
    const n = r.detail;
    e((n == null ? void 0 : n.theme) === "light" ? "light" : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
function Hn() {
  return window;
}
function yo() {
  var e, t;
  return ((t = (e = Hn()).getAccessToken) == null ? void 0 : t.call(e)) ?? null;
}
async function ko() {
  return typeof Hn().refreshAccessToken != "function" ? !1 : Hn().refreshAccessToken();
}
async function Gr(e, t = {}) {
  const r = new Headers(t.headers ?? {}), n = yo();
  return n && r.set("Authorization", `Bearer ${n}`), fetch(e, {
    credentials: "same-origin",
    ...t,
    headers: r
  });
}
async function Kr(e) {
  const t = e.headers.get("content-type") || "";
  if (!t.includes("application/json"))
    throw new Error(`Expected JSON, got: ${t || "unknown"}`);
  return await e.json();
}
async function Jr(e) {
  var r;
  if ((e.headers.get("content-type") || "").includes("application/json")) {
    const n = await e.json().catch(() => null), s = (r = n == null ? void 0 : n.error) == null ? void 0 : r.message;
    if (typeof s == "string" && s.trim() !== "")
      return `HTTP ${e.status}: ${s}`;
  }
  return `HTTP ${e.status}`;
}
class Eo {
  constructor(t = "/api/explorer") {
    ie(this, "listCache", /* @__PURE__ */ new Map());
    ie(this, "detailsCache", /* @__PURE__ */ new Map());
    ie(this, "authBase", "/api/auth");
    this.apiBase = t;
  }
  setApiBase(t) {
    this.apiBase = t.replace(/\/$/, ""), this.listCache.clear(), this.detailsCache.clear();
  }
  setAuthBase(t) {
    this.authBase = t.replace(/\/$/, "");
  }
  async refreshAccessToken() {
    return ko();
  }
  async whoAmI() {
    const t = await Gr(`${this.authBase}/whoami`);
    return t.ok ? Kr(t) : null;
  }
  async list(t, r, n) {
    const s = `${r}:${t}`, i = this.listCache.get(s);
    if (i)
      return i;
    const a = `${this.apiBase}/list?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = Gr(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Jr(l));
      return Kr(l);
    });
    this.listCache.set(s, o);
    try {
      return await o;
    } catch (l) {
      throw this.listCache.delete(s), l;
    }
  }
  async details(t, r, n) {
    const s = `${r}:${t}`, i = this.detailsCache.get(s);
    if (i)
      return i;
    const a = `${this.apiBase}/details?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, o = Gr(a, { signal: n }).then(async (l) => {
      if (!l.ok)
        throw new Error(await Jr(l));
      return Kr(l);
    });
    this.detailsCache.set(s, o);
    try {
      return await o;
    } catch (l) {
      throw this.detailsCache.delete(s), l;
    }
  }
  async getDownloadTicket(t, r) {
    const n = `${this.apiBase}/ticket?path=${encodeURIComponent(t)}&mode=${encodeURIComponent(r)}`, s = await Gr(n);
    if (!s.ok)
      throw new Error(await Jr(s));
    return Kr(s);
  }
  async getDownloadUrl(t, r) {
    return (await this.getDownloadTicket(t, r)).url;
  }
  async downloadBlob(t, r) {
    const n = await this.getDownloadUrl(t, r), s = await fetch(n, { credentials: "same-origin" });
    if (!s.ok)
      throw new Error(await Jr(s));
    return s.blob();
  }
  async downloadText(t, r) {
    return (await this.downloadBlob(t, r)).text();
  }
}
const Ii = "efsdb_explorer_layout";
function $o() {
  try {
    const e = localStorage.getItem(Ii);
    if (!e) throw new Error("nope");
    const t = JSON.parse(e);
    return {
      coverHeight: $n(t.coverHeight ?? 320, 150, 600),
      previewWidth: $n(t.previewWidth ?? 350, 200, 560),
      scale: $n(t.scale ?? 1, 0.6, 1.6)
    };
  } catch {
    return { coverHeight: 320, previewWidth: 350, scale: 1 };
  }
}
function ys(e) {
  localStorage.setItem(Ii, JSON.stringify(e));
}
function $n(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function sr(e, t) {
  let r = !1, n = 0;
  function s(o) {
    if (!r) return;
    const l = t.axis === "y" ? o.clientY : o.clientX;
    t.onDelta(l - n), n = l, o.preventDefault();
  }
  function i() {
    var o;
    r && (r = !1, window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", i), (o = t.onDone) == null || o.call(t));
  }
  function a(o) {
    r = !0, n = t.axis === "y" ? o.clientY : o.clientX, window.addEventListener("mousemove", s), window.addEventListener("mouseup", i), o.preventDefault();
  }
  return e.addEventListener("mousedown", a), {
    destroy() {
      e.removeEventListener("mousedown", a), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", i);
    }
  };
}
var To = /* @__PURE__ */ q('<span class="sep svelte-qmkv6s">/</span>'), Co = /* @__PURE__ */ q('<!> <button class="crumb svelte-qmkv6s" type="button"> </button>', 1), jo = /* @__PURE__ */ q('<div class="toolbar svelte-qmkv6s"><div class="left svelte-qmkv6s"><button class="btn svelte-qmkv6s" type="button" title="Home">Home</button> <button class="btn svelte-qmkv6s" type="button" title="Open">Open</button> <div class="seg svelte-qmkv6s" role="group" aria-label="View mode"><button type="button">Natural</button> <button type="button">Raw</button></div></div> <div class="crumbs svelte-qmkv6s" aria-label="Breadcrumbs"></div> <div class="right svelte-qmkv6s"><label class="scale svelte-qmkv6s"><span>Scale</span> <input data-testid="explorer-scale-input" type="range" min="0.6" max="1.6" step="0.05" class="svelte-qmkv6s"/></label></div></div>');
const So = {
  hash: "svelte-qmkv6s",
  code: ".toolbar.svelte-qmkv6s {display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border);background:var(--panel);}.left.svelte-qmkv6s {display:inline-flex;gap:8px;align-items:center;}.btn.svelte-qmkv6s {padding:6px 10px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.btn.svelte-qmkv6s:disabled {opacity:0.5;cursor:not-allowed;}.seg.svelte-qmkv6s {display:inline-flex;border:1px solid var(--border);border-radius:12px;overflow:hidden;}.segbtn.svelte-qmkv6s {padding:6px 10px;border:0;background:transparent;color:var(--muted);cursor:pointer;}.segbtn.svelte-qmkv6s:disabled {cursor:not-allowed;opacity:0.45;}.segbtn.active.svelte-qmkv6s {background:var(--primary);color:var(--primaryText);}.crumbs.svelte-qmkv6s {overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--muted);}.crumb.svelte-qmkv6s {border:0;background:transparent;color:var(--muted);cursor:pointer;padding:2px 4px;border-radius:8px;}.crumb.svelte-qmkv6s:hover {color:var(--text);background:var(--hover);}.sep.svelte-qmkv6s {padding:0 2px;color:var(--muted);opacity:0.7;}.right.svelte-qmkv6s {display:inline-flex;align-items:center;}.scale.svelte-qmkv6s {display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:12px;}input[type='range'].svelte-qmkv6s {width:140px;}"
};
function Mi(e, t) {
  er(t, !0), kr(e, So);
  let r = V(t, "mode"), n = V(t, "rawEnabled"), s = V(t, "breadcrumbs"), i = V(t, "scale"), a = V(t, "canOpen"), o = V(t, "onHome"), l = V(t, "onOpen"), c = V(t, "onSetMode"), f = V(t, "onScale"), h = V(t, "onCrumb");
  var v = {
    get mode() {
      return r();
    },
    set mode(m) {
      r(m), U();
    },
    get rawEnabled() {
      return n();
    },
    set rawEnabled(m) {
      n(m), U();
    },
    get breadcrumbs() {
      return s();
    },
    set breadcrumbs(m) {
      s(m), U();
    },
    get scale() {
      return i();
    },
    set scale(m) {
      i(m), U();
    },
    get canOpen() {
      return a();
    },
    set canOpen(m) {
      a(m), U();
    },
    get onHome() {
      return o();
    },
    set onHome(m) {
      o(m), U();
    },
    get onOpen() {
      return l();
    },
    set onOpen(m) {
      l(m), U();
    },
    get onSetMode() {
      return c();
    },
    set onSetMode(m) {
      c(m), U();
    },
    get onScale() {
      return f();
    },
    set onScale(m) {
      f(m), U();
    },
    get onCrumb() {
      return h();
    },
    set onCrumb(m) {
      h(m), U();
    }
  }, g = jo(), _ = y(g), C = y(_), p = A(C, 2), $ = A(p, 2), E = y($);
  let I;
  var Q = A(E, 2);
  let J;
  x($), x(_);
  var Y = A(_, 2);
  Nr(Y, 23, s, (m) => m.path, (m, w, S) => {
    var ee = Co(), te = Ur(ee);
    {
      var fe = (W) => {
        var N = To();
        R(W, N);
      };
      Ie(te, (W) => {
        u(S) > 0 && W(fe);
      });
    }
    var k = A(te, 2), H = y(k, !0);
    x(k), ae(() => K(H, u(w).label)), ke("click", k, () => h()(u(w).path)), R(m, ee);
  }), x(Y);
  var Z = A(Y, 2), oe = y(Z), ne = A(y(oe), 2);
  return uo(ne), x(oe), x(Z), x(g), ae(() => {
    p.disabled = !a(), I = xr(E, 1, "segbtn svelte-qmkv6s", null, I, { active: r() === "natural" }), J = xr(Q, 1, "segbtn svelte-qmkv6s", null, J, { active: r() === "raw" }), Q.disabled = !n(), fo(ne, i());
  }), ke("click", C, function(...m) {
    var w;
    (w = o()) == null || w.apply(this, m);
  }), ke("click", p, function(...m) {
    var w;
    (w = l()) == null || w.apply(this, m);
  }), ke("click", E, () => c()("natural")), ke("click", Q, () => c()("raw")), ke("input", ne, (m) => f()(parseFloat(m.target.value))), R(e, g), tr(v);
}
yr(["click", "input"]);
Er(
  Mi,
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
function Tn(e, t = {}) {
  const r = t.axis ?? "y", n = t.threshold ?? 6;
  let s = null, i = 0, a = 0, o = !1, l = 0;
  function c(E) {
    return r === "y" ? E.clientY : E.clientX;
  }
  function f() {
    return r === "y" ? e.scrollTop : e.scrollLeft;
  }
  function h(E) {
    if (r === "y") {
      e.scrollTop = E;
      return;
    }
    e.scrollLeft = E;
  }
  function v() {
    o && (l = Date.now() + 120), window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", p), o = !1, s = null, e.classList.remove("drag-scrolling");
  }
  function g(E) {
    E.button === 0 && (E.target instanceof Element && E.target.closest("input, textarea, select, [data-no-drag-scroll]") || (s = E.pointerId, i = c(E), a = f(), o = !1, window.addEventListener("pointermove", _, { passive: !1 }), window.addEventListener("pointerup", C), window.addEventListener("pointercancel", p)));
  }
  function _(E) {
    if (s !== E.pointerId)
      return;
    const I = c(E) - i;
    !o && Math.abs(I) >= n && (o = !0, e.classList.add("drag-scrolling")), o && (h(a - I), E.preventDefault());
  }
  function C(E) {
    s === E.pointerId && v();
  }
  function p(E) {
    s === E.pointerId && v();
  }
  function $(E) {
    Date.now() <= l && (E.preventDefault(), E.stopPropagation());
  }
  return e.addEventListener("pointerdown", g), e.addEventListener("click", $, !0), {
    destroy() {
      v(), e.removeEventListener("pointerdown", g), e.removeEventListener("click", $, !0);
    }
  };
}
var Ao = /* @__PURE__ */ q('<div class="loading svelte-13uljdf"><div class="spinner svelte-13uljdf" aria-hidden="true"></div> <div class="loadingText svelte-13uljdf">Loading…</div></div>'), Io = /* @__PURE__ */ q('<div class="empty svelte-13uljdf"> </div>'), Mo = /* @__PURE__ */ q('<span class="arrow svelte-13uljdf" aria-hidden="true">›</span>'), Lo = /* @__PURE__ */ q('<button type="button"><span class="left svelte-13uljdf"><span class="ico svelte-13uljdf" aria-hidden="true"> </span> <span> </span></span> <!></button>'), Ro = /* @__PURE__ */ q('<div class="list svelte-13uljdf" role="list"><!></div>'), No = /* @__PURE__ */ q('<section class="col svelte-13uljdf"><header class="colHeader svelte-13uljdf"> </header> <!></section>'), Po = /* @__PURE__ */ q('<div class="cols svelte-13uljdf" role="region" aria-label="Miller columns"></div>');
const Do = {
  hash: "svelte-13uljdf",
  code: `.cols.svelte-13uljdf {display:flex;gap:10px;overflow:auto;padding:10px;background:var(--bg);height:100%;align-items:stretch;}.col.svelte-13uljdf {width:calc(260px * var(--column-scale));min-width:calc(260px * var(--column-scale));border:1px solid var(--border);border-radius:14px;background:var(--panel);overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;}.colHeader.svelte-13uljdf {padding:calc(10px * var(--column-scale)) calc(12px * var(--column-scale));border-bottom:1px solid var(--border);font-weight:700;font-size:calc(12px * var(--column-scale));color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}.list.svelte-13uljdf {padding:calc(8px * var(--column-scale));display:flex;flex-direction:column;gap:calc(6px * var(--column-scale));min-height:0;flex:1 1 auto;overflow:auto;cursor:grab;scrollbar-gutter:stable;}.list.drag-scrolling.svelte-13uljdf {cursor:grabbing;}.row.svelte-13uljdf {display:flex;align-items:center;justify-content:space-between;gap:calc(8px * var(--column-scale));padding:calc(8px * var(--column-scale)) calc(10px * var(--column-scale));border-radius:12px;border:1px solid transparent;background:transparent;color:var(--text);cursor:pointer;text-align:left;}.row.svelte-13uljdf:hover {background:var(--hover);}.row.active.svelte-13uljdf {background:var(--primary);color:var(--primaryText);border-color:color-mix(in oklab, var(--primary), black 15%);}.row.dim.svelte-13uljdf:not(.active) {opacity:0.55;}.left.svelte-13uljdf {min-width:0;display:inline-flex;align-items:center;gap:calc(8px * var(--column-scale));}.ico.svelte-13uljdf {width:calc(18px * var(--column-scale));opacity:0.85;}.label.svelte-13uljdf {min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-size:calc(13px * var(--column-scale));}.label.muted.svelte-13uljdf {color:var(--muted);}.row.active.svelte-13uljdf .label:where(.svelte-13uljdf) {color:var(--primaryText);}.label.warn.svelte-13uljdf {color:var(--warn);}.label.info.svelte-13uljdf {color:var(--info);}.arrow.svelte-13uljdf {color:inherit;opacity:0.7;font-size:calc(16px * var(--column-scale));}.loading.svelte-13uljdf {display:grid;place-items:center;padding:calc(24px * var(--column-scale));gap:calc(10px * var(--column-scale));color:var(--muted);}.spinner.svelte-13uljdf {width:calc(22px * var(--column-scale));height:calc(22px * var(--column-scale));border-radius:999px;border:3px solid color-mix(in oklab, var(--muted), transparent 65%);border-top-color:var(--primary);
    animation: svelte-13uljdf-spin 0.8s linear infinite;}
  @keyframes svelte-13uljdf-spin {
    to {
      transform: rotate(360deg);
    }
  }.loadingText.svelte-13uljdf {font-size:calc(12px * var(--column-scale));}.empty.svelte-13uljdf {min-height:180px;display:grid;place-items:center;padding:calc(18px * var(--column-scale));text-align:center;color:var(--muted);font-size:calc(12px * var(--column-scale));line-height:1.6;border:1px dashed color-mix(in oklab, var(--border), transparent 30%);border-radius:12px;background:color-mix(in oklab, var(--panel), transparent 8%);}`
};
function Li(e, t) {
  er(t, !0), kr(e, Do);
  let r = V(t, "mode"), n = V(t, "scale"), s = V(t, "columns"), i = V(t, "onItemClick"), a = V(t, "onItemDoubleClick");
  function o(v) {
    return v.type === "dir" ? "📁" : v.kind === "manifest" ? "📜" : v.kind === "chunk" ? "🧩" : "📄";
  }
  function l(v) {
    return r() !== "raw" ? "label muted" : v.kind === "manifest" ? "label warn" : v.kind === "chunk" ? "label info" : "label muted";
  }
  function c(v) {
    const g = v.currentTarget;
    g.scrollHeight <= g.clientHeight || (g.scrollTop += v.deltaY, v.preventDefault());
  }
  var f = {
    get mode() {
      return r();
    },
    set mode(v) {
      r(v), U();
    },
    get scale() {
      return n();
    },
    set scale(v) {
      n(v), U();
    },
    get columns() {
      return s();
    },
    set columns(v) {
      s(v), U();
    },
    get onItemClick() {
      return i();
    },
    set onItemClick(v) {
      i(v), U();
    },
    get onItemDoubleClick() {
      return a();
    },
    set onItemDoubleClick(v) {
      a(v), U();
    }
  }, h = Po();
  return Nr(h, 23, s, (v) => v.path, (v, g, _) => {
    var C = No(), p = y(C), $ = y(p, !0);
    x(p);
    var E = A(p, 2);
    {
      var I = (J) => {
        var Y = Ao();
        R(J, Y);
      }, Q = (J) => {
        var Y = Ro(), Z = y(Y);
        {
          var oe = (m) => {
            var w = Io(), S = y(w, !0);
            x(w), ae(() => K(S, r() === "raw" ? "No explorer-visible items in this location yet." : "No decoded content is available in this location yet.")), R(m, w);
          }, ne = (m) => {
            var w = $i(), S = Ur(w);
            Nr(S, 17, () => u(g).items, (ee) => ee.rawPath ?? ee.name, (ee, te) => {
              var fe = Lo();
              let k;
              var H = y(fe), W = y(H), N = y(W, !0);
              x(W);
              var O = A(W, 2), se = y(O, !0);
              x(O), x(H);
              var Ee = A(H, 2);
              {
                var $e = (le) => {
                  var me = Mo();
                  R(le, me);
                };
                Ie(Ee, (le) => {
                  u(te).type === "dir" && le($e);
                });
              }
              x(fe), ae(
                (le, me) => {
                  k = xr(fe, 1, "row svelte-13uljdf", null, k, {
                    active: u(g).selectedItem === u(te).name,
                    dim: r() === "raw" && u(te).type === "dir"
                  }), ft(fe, "data-testid", `explorer-row-${u(_)}`), K(N, le), xr(O, 1, me, "svelte-13uljdf"), ft(O, "title", u(te).name), K(se, u(te).name);
                },
                [
                  () => o(u(te)),
                  () => no(l(u(te)))
                ]
              ), ke("click", fe, () => i()(u(_), u(te))), ke("dblclick", fe, () => a()(u(_), u(te))), R(ee, fe);
            }), R(m, w);
          };
          Ie(Z, (m) => {
            u(g).items.length === 0 ? m(oe) : m(ne, -1);
          });
        }
        x(Y), ln(Y, (m, w) => Tn == null ? void 0 : Tn(m, w), () => ({ axis: "y" })), ae(() => ft(Y, "data-testid", `explorer-column-list-${u(_)}`)), Ei("wheel", Y, c), R(J, Y);
      };
      Ie(E, (J) => {
        u(g).loading ? J(I) : J(Q, -1);
      });
    }
    x(C), ae(
      (J) => {
        ft(C, "aria-label", `Column ${u(_) + 1}`), ft(C, "data-testid", `explorer-column-${u(_)}`), K($, J);
      },
      [
        () => u(_) === 0 ? "ROOT" : u(g).path.split("/").filter(Boolean).pop()
      ]
    ), R(v, C);
  }), x(h), ae(() => Pr(h, `--column-scale:${n()};`)), R(e, h), tr(f);
}
yr(["click", "dblclick"]);
Er(
  Li,
  {
    mode: {},
    scale: {},
    columns: {},
    onItemClick: {},
    onItemDoubleClick: {}
  },
  [],
  [],
  { mode: "open" }
);
var Oo = /* @__PURE__ */ q('<div class="empty svelte-1d4imag"><div class="sym svelte-1d4imag">∅</div> <div class="lbl svelte-1d4imag">Empty</div></div>'), Bo = /* @__PURE__ */ q('<button type="button"><div class="ico svelte-1d4imag"> </div> <div class="name svelte-1d4imag"> </div> <div class="size svelte-1d4imag"> </div></button>'), zo = /* @__PURE__ */ q('<div class="coverPane svelte-1d4imag" data-testid="explorer-coverflow"><div class="coverHeader svelte-1d4imag"><button class="navBtn svelte-1d4imag" type="button" aria-label="Previous">‹</button> <div class="title svelte-1d4imag">Coverflow</div> <button class="navBtn svelte-1d4imag" type="button" aria-label="Next">›</button></div> <div class="stage svelte-1d4imag" role="group" aria-label="Coverflow stage" data-testid="explorer-coverflow-stage"><!></div></div>');
const qo = {
  hash: "svelte-1d4imag",
  code: ".coverPane.svelte-1d4imag {border-bottom:1px solid var(--border);background:var(--bg);}.coverHeader.svelte-1d4imag {display:grid;grid-template-columns:34px 1fr 34px;align-items:center;padding:8px 10px;color:var(--muted);font-size:12px;}.navBtn.svelte-1d4imag {width:34px;height:30px;border-radius:10px;border:1px solid var(--border);background:var(--panel);color:var(--text);cursor:pointer;}.title.svelte-1d4imag {text-align:center;text-transform:uppercase;letter-spacing:0.08em;font-weight:800;opacity:0.8;}.stage.svelte-1d4imag {height:100%;min-height:220px;perspective:1100px;display:grid;place-items:center;overflow:hidden;user-select:none;position:relative;padding:10px;touch-action:pan-y;}.card.svelte-1d4imag {position:absolute;width:220px;height:170px;border-radius:18px;border:1px solid var(--border);background:var(--panel);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-style:preserve-3d;cursor:pointer;transition:transform 120ms ease, opacity 120ms ease;}.card.active.svelte-1d4imag {border-color:color-mix(in oklab, var(--primary), black 20%);box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);}.ico.svelte-1d4imag {font-size:40px;opacity:0.9;}.name.svelte-1d4imag {width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--muted);font-weight:700;}.size.svelte-1d4imag {font-size:11px;color:var(--muted);opacity:0.8;}.empty.svelte-1d4imag {text-align:center;color:var(--muted);opacity:0.6;}.sym.svelte-1d4imag {font-size:56px;margin-bottom:4px;}.lbl.svelte-1d4imag {font-size:11px;letter-spacing:0.12em;text-transform:uppercase;}"
};
function Ri(e, t) {
  er(t, !0), kr(e, qo);
  let r = V(t, "items"), n = V(t, "selectedName"), s = V(t, "mode"), i = V(t, "scale"), a = V(t, "onNavToIndex"), o = V(t, "onActivateIndex"), l = 320, c = 250, f = /* @__PURE__ */ re(null), h = /* @__PURE__ */ re(!1), v = /* @__PURE__ */ re(0), g = /* @__PURE__ */ re(0);
  function _(k) {
    return k.type === "dir" ? s() === "raw" ? "🗂️" : "📁" : k.kind === "image" ? "🖼️" : k.kind === "video" ? "🎬" : "📄";
  }
  function C() {
    const k = r().findIndex((H) => H.name === n());
    return k < 0 ? 0 : k;
  }
  function p(k) {
    if (!r().length) return;
    const H = C(), W = Math.max(0, Math.min(r().length - 1, H + k));
    a()(W);
  }
  function $(k) {
    k.preventDefault(), !u(f) && (j(f, window.setTimeout(() => j(f, null), 30), !0), p(k.deltaY > 0 ? 1 : -1));
  }
  function E(k) {
    r().length && (j(h, !0), j(v, k.clientX, !0), j(g, C(), !0), k.preventDefault());
  }
  function I(k) {
    if (!u(h)) return;
    const H = k.clientX - u(v), W = -Math.round(H / 50), N = Math.max(0, Math.min(r().length - 1, u(g) + W));
    a()(N);
  }
  function Q() {
    j(h, !1);
  }
  function J(k) {
    const H = (se) => E(se), W = (se) => I(se), N = () => Q(), O = () => Q();
    return k.addEventListener("mousedown", H), k.addEventListener("mousemove", W), k.addEventListener("mouseup", N), k.addEventListener("mouseleave", O), {
      destroy() {
        k.removeEventListener("mousedown", H), k.removeEventListener("mousemove", W), k.removeEventListener("mouseup", N), k.removeEventListener("mouseleave", O);
      }
    };
  }
  const Y = /* @__PURE__ */ He(() => {
    const k = C();
    return r().map((H, W) => {
      const N = W - k, O = Math.abs(N), se = i(), Ee = l * se, $e = c * se;
      if (O > 6)
        return { item: H, i: W, hidden: !0, style: "" };
      let le = N * Ee, me = -O * $e, ve = 0;
      const ue = Math.max(0.72, 1 - O * 0.08) * se;
      N === -1 && (le -= Ee * 0.4), N === 1 && (le += Ee * 0.4), N < 0 ? (le += Ee * 0.6, ve = 45) : N > 0 ? (le -= Ee * 0.6, ve = -45) : me += 100 * se;
      const Se = Math.max(0.3, 1 - O * 0.15), _t = 100 - O, rr = `below 2px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,${Math.max(0, 0.2 - O * 0.05)}) 100%)`, Tr = `transform: translateX(${le}px) translateZ(${me}px) rotateY(${ve}deg) scale(${ue});opacity:${Se}; z-index:${_t};-webkit-box-reflect:${rr};`;
      return { item: H, i: W, hidden: !1, style: Tr };
    });
  });
  var Z = {
    get items() {
      return r();
    },
    set items(k) {
      r(k), U();
    },
    get selectedName() {
      return n();
    },
    set selectedName(k) {
      n(k), U();
    },
    get mode() {
      return s();
    },
    set mode(k) {
      s(k), U();
    },
    get scale() {
      return i();
    },
    set scale(k) {
      i(k), U();
    },
    get onNavToIndex() {
      return a();
    },
    set onNavToIndex(k) {
      a(k), U();
    },
    get onActivateIndex() {
      return o();
    },
    set onActivateIndex(k) {
      o(k), U();
    }
  }, oe = zo(), ne = y(oe), m = y(ne), w = A(m, 4);
  x(ne);
  var S = A(ne, 2), ee = y(S);
  {
    var te = (k) => {
      var H = Oo();
      R(k, H);
    }, fe = (k) => {
      var H = $i(), W = Ur(H);
      Nr(W, 17, () => u(Y), (N) => N.item.rawPath ?? N.item.name, (N, O) => {
        var se = Bo();
        let Ee;
        var $e = y(se), le = y($e, !0);
        x($e);
        var me = A($e, 2), ve = y(me, !0);
        x(me);
        var ue = A(me, 2), Se = y(ue, !0);
        x(ue), x(se), ae(
          (_t) => {
            Ee = xr(se, 1, "card svelte-1d4imag", null, Ee, { active: u(O).item.name === n() }), Pr(se, u(O).hidden ? "display:none;" : u(O).style), K(le, _t), ft(me, "title", u(O).item.name), K(ve, u(O).item.name), K(Se, typeof u(O).item.size == "number" ? u(O).item.size : "");
          },
          [() => _(u(O).item)]
        ), ke("click", se, () => a()(u(O).i)), ke("dblclick", se, () => o()(u(O).i)), R(N, se);
      }), R(k, H);
    };
    Ie(ee, (k) => {
      r().length ? k(fe, -1) : k(te);
    });
  }
  return x(S), ln(S, (k) => J == null ? void 0 : J(k)), x(oe), Ei("wheel", oe, $), ke("click", m, () => p(-1)), ke("click", w, () => p(1)), R(e, oe), tr(Z);
}
yr(["click", "dblclick"]);
Er(
  Ri,
  {
    items: {},
    selectedName: {},
    mode: {},
    scale: {},
    onNavToIndex: {},
    onActivateIndex: {}
  },
  [],
  [],
  { mode: "open" }
);
var Fo = /* @__PURE__ */ q('<div class="empty svelte-1rs50gd">No Selection</div>'), Ho = /* @__PURE__ */ q('<div class="empty svelte-1rs50gd">Loading details…</div>'), Uo = /* @__PURE__ */ q('<div class="err svelte-1rs50gd"> </div>'), Yo = /* @__PURE__ */ q('<div class="imgWrap svelte-1rs50gd"><img class="svelte-1rs50gd"/></div>'), Wo = /* @__PURE__ */ q('<pre class="code svelte-1rs50gd"> </pre>'), Vo = /* @__PURE__ */ q('<div class="fileBadge svelte-1rs50gd"> </div>'), Xo = /* @__PURE__ */ q('<!> <div class="meta svelte-1rs50gd"><div class="name svelte-1rs50gd"> </div> <div class="sub svelte-1rs50gd"> </div></div> <div class="paths svelte-1rs50gd"><div class="pathsHdr svelte-1rs50gd">Path</div> <button class="pathBox svelte-1rs50gd" type="button" title="Copy"> </button></div>', 1), Go = /* @__PURE__ */ q('<aside class="pane svelte-1rs50gd" data-testid="explorer-preview-panel"><header class="hdr svelte-1rs50gd"><div class="ttl svelte-1rs50gd">Preview</div> <button class="btn svelte-1rs50gd" type="button" title="Toggle preview">⟷</button></header> <div class="body svelte-1rs50gd"><!></div></aside>');
const Ko = {
  hash: "svelte-1rs50gd",
  code: ".pane.svelte-1rs50gd {border-left:1px solid var(--border);background:var(--panel);height:100%;display:flex;flex-direction:column;overflow:hidden;}.hdr.svelte-1rs50gd {display:flex;align-items:center;justify-content:space-between;padding:calc(10px * var(--preview-scale)) calc(12px * var(--preview-scale));border-bottom:1px solid var(--border);}.ttl.svelte-1rs50gd {font-weight:800;letter-spacing:0.08em;text-transform:uppercase;font-size:calc(12px * var(--preview-scale));color:var(--muted);}.btn.svelte-1rs50gd {width:calc(34px * var(--preview-scale));height:calc(30px * var(--preview-scale));border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.body.svelte-1rs50gd {padding:calc(12px * var(--preview-scale));overflow:auto;height:100%;font-size:calc(14px * var(--preview-scale));}.empty.svelte-1rs50gd {height:100%;display:grid;place-items:center;color:var(--muted);opacity:0.7;font-style:italic;}.err.svelte-1rs50gd {padding:calc(10px * var(--preview-scale));border-radius:12px;border:1px solid color-mix(in oklab, var(--danger), transparent 55%);background:color-mix(in oklab, var(--danger), transparent 85%);color:var(--text);}.imgWrap.svelte-1rs50gd {background:color-mix(in oklab, black, transparent 65%);border:1px solid var(--border);border-radius:14px;padding:calc(10px * var(--preview-scale));display:grid;place-items:center;margin-bottom:12px;}img.svelte-1rs50gd {max-height:calc(220px * var(--preview-scale));max-width:100%;object-fit:contain;border-radius:10px;}.code.svelte-1rs50gd {background:var(--codeBg);border:1px solid var(--border);border-radius:14px;padding:calc(10px * var(--preview-scale));font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:calc(12px * var(--preview-scale));white-space:pre-wrap;max-height:260px;overflow:auto;margin-bottom:12px;}.fileBadge.svelte-1rs50gd {border:1px solid var(--border);background:var(--card);border-radius:14px;padding:calc(26px * var(--preview-scale)) calc(12px * var(--preview-scale));display:grid;place-items:center;font-weight:900;color:var(--muted);margin-bottom:12px;}.meta.svelte-1rs50gd {margin-bottom:10px;}.name.svelte-1rs50gd {font-weight:900;color:var(--text);word-break:break-word;}.sub.svelte-1rs50gd {color:var(--muted);font-size:calc(12px * var(--preview-scale));margin-top:2px;}.paths.svelte-1rs50gd {border-top:1px solid var(--border);padding-top:calc(10px * var(--preview-scale));}.pathsHdr.svelte-1rs50gd {font-size:calc(11px * var(--preview-scale));font-weight:900;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-bottom:calc(8px * var(--preview-scale));}.pathBox.svelte-1rs50gd {width:100%;text-align:left;border-radius:12px;border:1px solid var(--border);background:color-mix(in oklab, black, transparent 75%);color:var(--muted);padding:calc(10px * var(--preview-scale));font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;font-size:calc(12px * var(--preview-scale));word-break:break-all;cursor:pointer;}.pathBox.svelte-1rs50gd:hover {color:var(--text);}"
};
function Ni(e, t) {
  er(t, !0), kr(e, Ko);
  let r = V(t, "client"), n = V(t, "mode"), s = V(t, "scale"), i = V(t, "activeItem"), a = V(t, "widthPx"), o = V(t, "onToggle"), l = /* @__PURE__ */ re(null), c = /* @__PURE__ */ re("idle"), f = /* @__PURE__ */ re(""), h = /* @__PURE__ */ re(null), v = null;
  function g(w) {
    return (w.ext || "").toLowerCase();
  }
  function _(w) {
    const S = g(w);
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(S);
  }
  async function C() {
    if (u(h) && (URL.revokeObjectURL(u(h)), j(h, null)), j(l, null), !i()) {
      j(c, "idle");
      return;
    }
    j(c, "loading"), j(f, ""), v == null || v.abort(), v = new AbortController();
    const w = i().rawPath || i().name;
    try {
      const S = await r().details(w, n(), v.signal);
      if (j(l, S, !0), _(S)) {
        const ee = await r().downloadBlob(S.rawPath, n());
        j(h, URL.createObjectURL(ee), !0);
      }
      j(c, "idle");
    } catch (S) {
      if ((S == null ? void 0 : S.name) === "AbortError")
        return;
      j(c, "error"), j(f, (S == null ? void 0 : S.message) || "Failed to load", !0);
    }
  }
  ci(() => (C(), () => {
    v == null || v.abort(), u(h) && (URL.revokeObjectURL(u(h)), j(h, null));
  }));
  async function p() {
    if (u(l))
      try {
        await navigator.clipboard.writeText(u(l).rawPath);
      } catch {
      }
  }
  var $ = {
    get client() {
      return r();
    },
    set client(w) {
      r(w), U();
    },
    get mode() {
      return n();
    },
    set mode(w) {
      n(w), U();
    },
    get scale() {
      return s();
    },
    set scale(w) {
      s(w), U();
    },
    get activeItem() {
      return i();
    },
    set activeItem(w) {
      i(w), U();
    },
    get widthPx() {
      return a();
    },
    set widthPx(w) {
      a(w), U();
    },
    get onToggle() {
      return o();
    },
    set onToggle(w) {
      o(w), U();
    }
  }, E = Go(), I = y(E), Q = A(y(I), 2);
  x(I);
  var J = A(I, 2), Y = y(J);
  {
    var Z = (w) => {
      var S = Fo();
      R(w, S);
    }, oe = (w) => {
      var S = Ho();
      R(w, S);
    }, ne = (w) => {
      var S = Uo(), ee = y(S);
      x(S), ae(() => K(ee, `Error: ${u(f) ?? ""}`)), R(w, S);
    }, m = (w) => {
      var S = Xo(), ee = Ur(S);
      {
        var te = (ve) => {
          var ue = Yo(), Se = y(ue);
          x(ue), ae(() => {
            ft(Se, "src", u(h)), ft(Se, "alt", u(l).name);
          }), R(ve, ue);
        }, fe = /* @__PURE__ */ He(() => _(u(l)) && u(h)), k = (ve) => {
          var ue = Wo(), Se = y(ue, !0);
          x(ue), ae(() => K(Se, u(l).preview)), R(ve, ue);
        }, H = (ve) => {
          var ue = Vo(), Se = y(ue, !0);
          x(ue), ae(() => K(Se, u(l).ext || "FILE")), R(ve, ue);
        };
        Ie(ee, (ve) => {
          u(fe) ? ve(te) : u(l).preview ? ve(k, 1) : ve(H, -1);
        });
      }
      var W = A(ee, 2), N = y(W), O = y(N, !0);
      x(N);
      var se = A(N, 2), Ee = y(se, !0);
      x(se), x(W);
      var $e = A(W, 2), le = A(y($e), 2), me = y(le, !0);
      x(le), x($e), ae(() => {
        K(O, u(l).name), K(Ee, u(l).mime || ""), K(me, u(l).rawPath);
      }), ke("click", le, p), R(w, S);
    };
    Ie(Y, (w) => {
      i() ? u(c) === "loading" ? w(oe, 1) : u(c) === "error" ? w(ne, 2) : u(l) && w(m, 3) : w(Z);
    });
  }
  return x(J), x(E), ae(() => Pr(E, `width:${a()}px; --preview-scale:${s()};`)), ke("click", Q, function(...w) {
    var S;
    (S = o()) == null || S.apply(this, w);
  }), R(e, E), tr($);
}
yr(["click"]);
Er(
  Ni,
  {
    client: {},
    mode: {},
    scale: {},
    activeItem: {},
    widthPx: {},
    onToggle: {}
  },
  [],
  [],
  { mode: "open" }
);
var Jo = /* @__PURE__ */ q('<div class="state svelte-1pf5soj">Loading details…</div>'), Zo = /* @__PURE__ */ q('<div class="state error svelte-1pf5soj"> </div>'), Qo = /* @__PURE__ */ q('<div><dt class="svelte-1pf5soj">Logical path</dt> <dd class="mono svelte-1pf5soj"> </dd></div>'), el = /* @__PURE__ */ q('<div class="chunk mono svelte-1pf5soj"> </div>'), tl = /* @__PURE__ */ q('<div class="chunkList svelte-1pf5soj"><div class="chunkTitle svelte-1pf5soj">Chunk hashes</div> <!></div>'), rl = /* @__PURE__ */ q('<section class="panel svelte-1pf5soj" data-testid="explorer-details-relationships"><div class="panelTitle svelte-1pf5soj">Connected file relationships</div> <dl class="metaList compact svelte-1pf5soj"><div><dt class="svelte-1pf5soj">Manifest entity</dt> <dd class="svelte-1pf5soj"> </dd></div> <div><dt class="svelte-1pf5soj">Manifest logical path</dt> <dd class="mono svelte-1pf5soj"> </dd></div> <div><dt class="svelte-1pf5soj">Chunk count</dt> <dd class="svelte-1pf5soj"> </dd></div></dl> <!></section>'), nl = /* @__PURE__ */ q('<section class="panel svelte-1pf5soj"><div class="panelTitle svelte-1pf5soj">Preview</div> <pre class="preview svelte-1pf5soj"> </pre></section>'), sl = /* @__PURE__ */ q('<div class="grid svelte-1pf5soj"><section class="panel svelte-1pf5soj"><div class="panelTitle svelte-1pf5soj">Summary</div> <dl class="metaList svelte-1pf5soj"><div><dt class="svelte-1pf5soj">Entity</dt> <dd class="svelte-1pf5soj"> </dd></div> <div><dt class="svelte-1pf5soj">Mime</dt> <dd class="svelte-1pf5soj"> </dd></div> <div><dt class="svelte-1pf5soj">Size</dt> <dd class="svelte-1pf5soj"> </dd></div> <div><dt class="svelte-1pf5soj">Raw path</dt> <dd class="mono svelte-1pf5soj"> </dd></div> <!> <div><dt class="svelte-1pf5soj">Manifest ID</dt> <dd class="mono svelte-1pf5soj"> </dd></div></dl></section> <!></div>'), il = /* @__PURE__ */ q('<div class="backdrop svelte-1pf5soj" role="presentation"><div class="dialog svelte-1pf5soj" role="dialog" aria-modal="true" aria-label="Explorer details" data-testid="explorer-details-popup"><header class="dialogHeader svelte-1pf5soj"><div><div class="eyebrow svelte-1pf5soj"> </div> <h2 class="title svelte-1pf5soj"> </h2></div> <button class="closeBtn svelte-1pf5soj" type="button" aria-label="Close details dialog">Close</button></header> <!></div></div>');
const al = {
  hash: "svelte-1pf5soj",
  code: `.backdrop.svelte-1pf5soj {position:fixed;inset:0;background:rgba(0, 0, 0, 0.45);display:grid;place-items:center;padding:24px;z-index:50;}.dialog.svelte-1pf5soj {width:min(860px, 100%);max-height:min(80vh, 760px);overflow:auto;border-radius:20px;border:1px solid var(--border);background:color-mix(in oklab, var(--panel), black 8%);color:var(--text);box-shadow:0 28px 90px rgba(0, 0, 0, 0.35);}.dialogHeader.svelte-1pf5soj {display:flex;justify-content:space-between;gap:16px;align-items:start;padding:18px 20px 14px;border-bottom:1px solid var(--border);}.eyebrow.svelte-1pf5soj {font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);}.title.svelte-1pf5soj {margin:6px 0 0;font-size:1.35rem;line-height:1.2;}.closeBtn.svelte-1pf5soj {padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;}.state.svelte-1pf5soj {padding:24px 20px;color:var(--muted);}.state.error.svelte-1pf5soj {color:var(--danger);}.grid.svelte-1pf5soj {display:grid;gap:14px;padding:16px 20px 20px;}.panel.svelte-1pf5soj {border:1px solid var(--border);border-radius:16px;background:color-mix(in oklab, var(--card), transparent 6%);padding:16px;}.panelTitle.svelte-1pf5soj,
  .chunkTitle.svelte-1pf5soj {font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;}.metaList.svelte-1pf5soj {display:grid;gap:10px;}.metaList.compact.svelte-1pf5soj {gap:8px;}dt.svelte-1pf5soj {font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);}dd.svelte-1pf5soj {margin:4px 0 0;word-break:break-word;}.mono.svelte-1pf5soj,
  .preview.svelte-1pf5soj,
  .chunk.svelte-1pf5soj {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;}.preview.svelte-1pf5soj {margin:0;white-space:pre-wrap;background:var(--codeBg);border-radius:12px;padding:12px;overflow:auto;}.chunkList.svelte-1pf5soj {margin-top:14px;}.chunk.svelte-1pf5soj {padding:8px 10px;border-radius:10px;border:1px solid var(--border);background:var(--codeBg);margin-top:8px;font-size:12px;}`
};
function Pi(e, t) {
  er(t, !0), kr(e, al);
  let r = V(t, "details"), n = V(t, "mode"), s = V(t, "loading"), i = V(t, "error"), a = V(t, "onClose");
  function o(m) {
    var w;
    return !((w = r()) != null && w.storage) || typeof r().storage != "object" ? null : r().storage[m] ?? null;
  }
  const l = /* @__PURE__ */ He(() => {
    const m = o("chunkCount");
    return typeof m == "number" ? m : null;
  }), c = /* @__PURE__ */ He(() => {
    const m = o("chunkHashes");
    return Array.isArray(m) ? m.map((w) => String(w)) : [];
  }), f = /* @__PURE__ */ He(() => {
    const m = o("manifest");
    return m && typeof m == "object" ? m : null;
  });
  function h(m) {
    m.target === m.currentTarget && a()();
  }
  var v = {
    get details() {
      return r();
    },
    set details(m) {
      r(m), U();
    },
    get mode() {
      return n();
    },
    set mode(m) {
      n(m), U();
    },
    get loading() {
      return s();
    },
    set loading(m) {
      s(m), U();
    },
    get error() {
      return i();
    },
    set error(m) {
      i(m), U();
    },
    get onClose() {
      return a();
    },
    set onClose(m) {
      a(m), U();
    }
  }, g = il(), _ = y(g), C = y(_), p = y(C), $ = y(p), E = y($, !0);
  x($);
  var I = A($, 2), Q = y(I, !0);
  x(I), x(p);
  var J = A(p, 2);
  x(C);
  var Y = A(C, 2);
  {
    var Z = (m) => {
      var w = Jo();
      R(m, w);
    }, oe = (m) => {
      var w = Zo(), S = y(w, !0);
      x(w), ae(() => K(S, i())), R(m, w);
    }, ne = (m) => {
      var w = sl(), S = y(w), ee = A(y(S), 2), te = y(ee), fe = A(y(te), 2), k = y(fe, !0);
      x(fe), x(te);
      var H = A(te, 2), W = A(y(H), 2), N = y(W, !0);
      x(W), x(H);
      var O = A(H, 2), se = A(y(O), 2), Ee = y(se, !0);
      x(se), x(O);
      var $e = A(O, 2), le = A(y($e), 2), me = y(le, !0);
      x(le), x($e);
      var ve = A($e, 2);
      {
        var ue = (We) => {
          var De = Qo(), tt = A(y(De), 2), bt = y(tt, !0);
          x(tt), x(De), ae(() => K(bt, r().logicalPath)), R(We, De);
        };
        Ie(ve, (We) => {
          r().logicalPath && We(ue);
        });
      }
      var Se = A(ve, 2), _t = A(y(Se), 2), $r = y(_t, !0);
      x(_t), x(Se), x(ee), x(S);
      var Bt = A(S, 2);
      {
        var rr = (We) => {
          var De = rl(), tt = A(y(De), 2), bt = y(tt), Cr = A(y(bt), 2), b = y(Cr, !0);
          x(Cr), x(bt);
          var T = A(bt, 2), M = A(y(T), 2), G = y(M, !0);
          x(M), x(T);
          var pe = A(T, 2), we = A(y(pe), 2), ge = y(we, !0);
          x(we), x(pe), x(tt);
          var Ae = A(tt, 2);
          {
            var Wr = (rt) => {
              var nt = tl(), _n = A(y(nt), 2);
              Nr(_n, 16, () => u(c), (nr) => nr, (nr, bn) => {
                var jr = el(), wn = y(jr, !0);
                x(jr), ae(() => K(wn, bn)), R(nr, jr);
              }), x(nt), R(rt, nt);
            };
            Ie(Ae, (rt) => {
              u(c).length > 0 && rt(Wr);
            });
          }
          x(De), ae(
            (rt, nt) => {
              K(b, rt), K(G, nt), K(ge, u(l) ?? 0);
            },
            [
              () => String(u(f).entity ?? ""),
              () => String(u(f).logicalPath ?? "")
            ]
          ), R(We, De);
        }, Tr = (We) => {
          var De = nl(), tt = A(y(De), 2), bt = y(tt, !0);
          x(tt), x(De), ae(() => K(bt, r().preview)), R(We, De);
        };
        Ie(Bt, (We) => {
          n() === "raw" && u(f) ? We(rr) : r().preview && We(Tr, 1);
        });
      }
      x(w), ae(() => {
        K(k, r().entity), K(N, r().mime), K(Ee, r().size), K(me, r().rawPath), K($r, r().manifestId);
      }), R(m, w);
    };
    Ie(Y, (m) => {
      s() ? m(Z) : i() !== "" ? m(oe, 1) : r() && m(ne, 2);
    });
  }
  return x(_), x(g), ae(() => {
    var m;
    K(E, n() === "raw" ? "Raw details" : "Item details"), K(Q, ((m = r()) == null ? void 0 : m.name) ?? "Loading details");
  }), ke("click", g, h), ke("click", J, function(...m) {
    var w;
    (w = a()) == null || w.apply(this, m);
  }), R(e, g), tr(v);
}
yr(["click"]);
Er(Pi, { details: {}, mode: {}, loading: {}, error: {}, onClose: {} }, [], [], { mode: "open" });
var ol = /* @__PURE__ */ q('<div class="statusCard svelte-64brx5"><div class="statusTitle svelte-64brx5">Connecting to EFSDB…</div> <div class="statusCopy svelte-64brx5">Refreshing your session and loading the decoded filesystem view.</div></div>'), ll = /* @__PURE__ */ q('<div class="statusCard error svelte-64brx5"><div class="statusTitle svelte-64brx5">Sign in required</div> <div class="statusCopy svelte-64brx5"> </div></div>'), cl = /* @__PURE__ */ q("<div> </div>"), ul = /* @__PURE__ */ q('<div class="previewCollapsed svelte-64brx5"><button class="btn svelte-64brx5" type="button">Show Preview</button></div>'), dl = /* @__PURE__ */ q('<!> <div class="top svelte-64brx5"><!> <div class="cover svelte-64brx5" data-testid="explorer-cover"><!></div> <div class="splitY svelte-64brx5" title="Resize coverflow" aria-hidden="true"></div></div> <div class="main svelte-64brx5"><div class="colsPane svelte-64brx5"><!></div> <div class="splitX svelte-64brx5" title="Resize preview" aria-hidden="true"></div> <!></div>', 1), fl = /* @__PURE__ */ q('<div class="root svelte-64brx5"><!> <!></div>');
const vl = {
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
function pl(e, t) {
  var Cr;
  er(t, !0), kr(e, vl);
  const r = _o("explorer"), n = r.apiBase ?? "/api/explorer", s = r.authBase ?? "/api/auth", i = t.$$host, a = new Eo();
  let o = /* @__PURE__ */ re(It(((Cr = r.initial) == null ? void 0 : Cr.mode) ?? "natural")), l = /* @__PURE__ */ re(It([])), c = /* @__PURE__ */ re(null), f = /* @__PURE__ */ re(It($o())), h = /* @__PURE__ */ re(!1), v = /* @__PURE__ */ re("loading"), g = /* @__PURE__ */ re(""), _ = /* @__PURE__ */ re(null), C = /* @__PURE__ */ re(null), p = /* @__PURE__ */ re(!1), $ = /* @__PURE__ */ re(""), E = null, I = 0;
  const Q = /* @__PURE__ */ He(() => Math.round(u(f).coverHeight * u(f).scale)), J = /* @__PURE__ */ He(() => {
    for (let b = u(l).length - 1; b >= 0; b--)
      if (u(l)[b].selectedItem)
        return b;
    return 0;
  }), Y = /* @__PURE__ */ He(() => u(l)[u(J)] ?? null), Z = /* @__PURE__ */ He(() => {
    var b;
    return ((b = u(Y)) == null ? void 0 : b.items) ?? [];
  }), oe = /* @__PURE__ */ He(() => {
    var b;
    return ((b = u(Y)) == null ? void 0 : b.selectedItem) ?? null;
  }), ne = /* @__PURE__ */ He(() => {
    var T, M;
    return (Array.isArray((T = u(_)) == null ? void 0 : T.entitlements) ? (M = u(_)) == null ? void 0 : M.entitlements : []).includes("RAW_VIEW");
  }), m = /* @__PURE__ */ He(() => {
    const b = u(l)[u(l).length - 1], T = (b == null ? void 0 : b.path) ?? "", M = T ? T.split("/").filter(Boolean) : [], G = [{ label: "ROOT", path: "" }];
    let pe = "";
    for (const we of M)
      pe += (pe ? "/" : "") + we, G.push({ label: we, path: pe });
    return G;
  });
  function w(b) {
    i.setAttribute("theme", b);
  }
  function S(b, T) {
    var pe;
    const G = (((pe = b.split("?")[0]) == null ? void 0 : pe.split("#")[0]) ?? "").split("/").filter(Boolean).join("/");
    return T === "natural" && G.startsWith("system_") ? "" : G;
  }
  function ee() {
    const b = u(Z).findIndex((T) => T.name === u(oe));
    return b < 0 ? 0 : b;
  }
  function te() {
    u(v) !== "auth_required" && j(g, "");
  }
  async function fe() {
    return await a.refreshAccessToken() ? (j(_, await a.whoAmI(), !0), !0) : (j(v, "auth_required"), j(g, "Sign in is required before the explorer can load."), !1);
  }
  async function k(b) {
    te();
    try {
      b = S(b, u(o));
      const T = b ? b.split("/").filter(Boolean) : [], M = [], G = await a.list("", u(o));
      M.push({ path: "", items: G.items, selectedItem: T[0] ?? null });
      let pe = "";
      for (let ge = 0; ge < T.length; ge++) {
        pe += (pe ? "/" : "") + T[ge];
        try {
          const Ae = await a.list(pe, u(o)), rt = M[M.length - 1].items.find((nt) => nt.name === T[ge]);
          rt && rt.type === "dir" && M.push({
            path: pe,
            items: Ae.items,
            selectedItem: T[ge + 1] ?? null
          });
        } catch {
        }
      }
      j(l, M, !0);
      const we = M[M.length - 1];
      if (we != null && we.selectedItem) {
        const ge = we.items.find((Ae) => Ae.name === we.selectedItem);
        j(c, ge ?? null, !0);
      } else
        j(c, null);
      j(v, "ready");
    } catch (T) {
      const M = T instanceof Error ? T.message : "Failed to load explorer";
      if (M.startsWith("HTTP 401")) {
        j(v, "auth_required"), j(g, "Your session is no longer valid. Sign in again to continue.");
        return;
      }
      if (M.startsWith("HTTP 403") && u(o) === "raw") {
        j(o, "natural"), j(g, "Raw inspection is not available for the current role. Showing decoded view instead."), await k(b);
        return;
      }
      j(v, "error"), j(g, M, !0);
    }
  }
  function H(b) {
    if (u(o) === b)
      return;
    if (b === "raw" && !u(ne)) {
      j(g, "Raw inspection requires RAW_VIEW entitlement.");
      return;
    }
    j(o, b, !0);
    const T = u(l)[u(l).length - 1];
    k(S((T == null ? void 0 : T.path) ?? "", b));
  }
  async function W() {
    if (!(!u(c) || u(c).type === "dir"))
      try {
        const b = u(c).rawPath || u(c).name, T = await a.getDownloadUrl(b, u(o));
        window.open(T, "_blank", "noopener,noreferrer");
      } catch (b) {
        j(g, b instanceof Error ? b.message : "Unable to open the selected item.", !0);
      }
  }
  async function N(b) {
    const T = b.rawPath || b.name, M = ++I;
    j(p, !0), j(C, null), j($, "");
    try {
      const G = await a.details(T, u(o));
      if (M !== I)
        return;
      j(C, G, !0);
    } catch (G) {
      if (M !== I)
        return;
      j(
        $,
        G instanceof Error ? G.message : "Unable to load the selected details.",
        !0
      );
    } finally {
      M === I && j(p, !1);
    }
  }
  function O() {
    I += 1, j(p, !1), j(C, null), j($, "");
  }
  function se(b) {
    u(f).scale = b, ys(u(f));
  }
  function Ee(b) {
    u(f).coverHeight = Math.max(150, Math.min(600, u(f).coverHeight + b));
  }
  function $e(b) {
    u(f).previewWidth = Math.max(200, Math.min(560, u(f).previewWidth - b));
  }
  function le() {
    ys(u(f));
  }
  async function me(b, T) {
    j(c, T, !0), E && (window.clearTimeout(E), E = null);
    const M = u(l).slice(0, b + 1);
    if (M[b] = { ...M[b], selectedItem: T.name }, T.type === "dir") {
      const G = T.rawPath || T.name;
      M.push({ path: G, items: [], selectedItem: null, loading: !0 }), j(l, M, !0), E = window.setTimeout(
        async () => {
          var pe, we;
          try {
            const ge = await a.list(G, u(o)), Ae = b + 1;
            ((pe = u(l)[Ae]) == null ? void 0 : pe.path) === G && (u(l)[Ae] = {
              ...u(l)[Ae],
              items: ge.items,
              loading: !1
            }, j(l, [...u(l)], !0));
          } catch (ge) {
            const Ae = b + 1;
            ((we = u(l)[Ae]) == null ? void 0 : we.path) === G && (u(l)[Ae] = { ...u(l)[Ae], loading: !1 }, j(l, [...u(l)], !0)), j(g, ge instanceof Error ? ge.message : "Unable to load the selected folder.", !0);
          }
        },
        150
      );
    } else
      j(l, M, !0);
  }
  async function ve(b, T) {
    await me(b, T), T.type !== "dir" && await N(T);
  }
  function ue(b) {
    const T = u(Y);
    if (!T)
      return;
    const M = T.items[b];
    M && me(u(J), M);
  }
  function Se(b) {
    const T = u(Y);
    if (!T)
      return;
    const M = T.items[b];
    M && ve(u(J), M);
  }
  function _t() {
    j(h, !u(h));
  }
  function $r(b) {
    var G;
    if (b.key === "Escape" && (u(C) !== null || u(p) || u($) !== "")) {
      O();
      return;
    }
    const T = b.target, M = (G = T == null ? void 0 : T.tagName) == null ? void 0 : G.toUpperCase();
    M === "INPUT" || M === "TEXTAREA" || (b.key === "ArrowRight" && ue(Math.min(u(Z).length - 1, ee() + 1)), b.key === "ArrowLeft" && ue(Math.max(0, ee() - 1)));
  }
  Za(() => {
    var M;
    w(wo());
    const b = xo((G) => {
      w(G);
    });
    a.setApiBase(n), a.setAuthBase(s);
    let T = ((M = r.initial) == null ? void 0 : M.path) ?? "";
    return T || (T = new URL(window.location.href).searchParams.get("path") || ""), (async () => {
      if (!await fe()) {
        j(v, "auth_required");
        return;
      }
      u(o) === "raw" && !u(ne) && j(o, "natural"), await k(S(T, u(o)));
    })(), window.addEventListener("keydown", $r), () => {
      E && window.clearTimeout(E), b(), window.removeEventListener("keydown", $r);
    };
  });
  var Bt = fl(), rr = y(Bt);
  {
    var Tr = (b) => {
      var T = ol();
      R(b, T);
    }, We = (b) => {
      var T = ll(), M = A(y(T), 2), G = y(M, !0);
      x(M), x(T), ae(() => K(G, u(g))), R(b, T);
    }, De = (b) => {
      var T = dl(), M = Ur(T);
      {
        var G = (Te) => {
          var Le = cl();
          let Vr;
          var Di = y(Le, !0);
          x(Le), ae(() => {
            Vr = xr(Le, 1, "svelte-64brx5", null, Vr, { banner: !0, errorBanner: u(v) === "error" }), K(Di, u(g));
          }), R(Te, Le);
        };
        Ie(M, (Te) => {
          u(g) && Te(G);
        });
      }
      var pe = A(M, 2), we = y(pe);
      {
        let Te = /* @__PURE__ */ He(() => !!u(c) && u(c).type !== "dir");
        Mi(we, {
          get mode() {
            return u(o);
          },
          get rawEnabled() {
            return u(ne);
          },
          get breadcrumbs() {
            return u(m);
          },
          get scale() {
            return u(f).scale;
          },
          get canOpen() {
            return u(Te);
          },
          onHome: () => {
            k("");
          },
          onOpen: () => {
            W();
          },
          onSetMode: H,
          onScale: se,
          onCrumb: (Le) => {
            k(Le);
          }
        });
      }
      var ge = A(we, 2), Ae = y(ge);
      Ri(Ae, {
        get items() {
          return u(Z);
        },
        get selectedName() {
          return u(oe);
        },
        get mode() {
          return u(o);
        },
        get scale() {
          return u(f).scale;
        },
        onNavToIndex: ue,
        onActivateIndex: Se
      }), x(ge);
      var Wr = A(ge, 2);
      ln(Wr, (Te, Le) => sr == null ? void 0 : sr(Te, Le), () => ({ axis: "y", onDelta: Ee, onDone: le })), x(pe);
      var rt = A(pe, 2), nt = y(rt), _n = y(nt);
      Li(_n, {
        get mode() {
          return u(o);
        },
        get scale() {
          return u(f).scale;
        },
        get columns() {
          return u(l);
        },
        onItemClick: me,
        onItemDoubleClick: ve
      }), x(nt);
      var nr = A(nt, 2);
      ln(nr, (Te, Le) => sr == null ? void 0 : sr(Te, Le), () => ({ axis: "x", onDelta: $e, onDone: le }));
      var bn = A(nr, 2);
      {
        var jr = (Te) => {
          Ni(Te, {
            get client() {
              return a;
            },
            get mode() {
              return u(o);
            },
            get scale() {
              return u(f).scale;
            },
            get activeItem() {
              return u(c);
            },
            get widthPx() {
              return u(f).previewWidth;
            },
            onToggle: _t
          });
        }, wn = (Te) => {
          var Le = ul(), Vr = y(Le);
          x(Le), ke("click", Vr, _t), R(Te, Le);
        };
        Ie(bn, (Te) => {
          u(h) ? Te(wn, -1) : Te(jr);
        });
      }
      x(rt), ae(() => Pr(ge, `height:${u(Q)}px`)), R(b, T);
    };
    Ie(rr, (b) => {
      u(v) === "loading" ? b(Tr) : u(v) === "auth_required" ? b(We, 1) : b(De, -1);
    });
  }
  var tt = A(rr, 2);
  {
    var bt = (b) => {
      Pi(b, {
        get details() {
          return u(C);
        },
        get mode() {
          return u(o);
        },
        get loading() {
          return u(p);
        },
        get error() {
          return u($);
        },
        onClose: O
      });
    };
    Ie(tt, (b) => {
      (u(p) || u(C) !== null || u($) !== "") && b(bt);
    });
  }
  x(Bt), ae(() => Pr(Bt, `--explorer-scale:${u(f).scale};`)), R(e, Bt), tr();
}
yr(["click"]);
customElements.define("efsdb-explorer", Er(pl, {}, [], [], { mode: "open" }));
