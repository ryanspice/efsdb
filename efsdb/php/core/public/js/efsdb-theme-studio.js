var ll = Object.defineProperty;
var ra = (e) => {
  throw TypeError(e);
};
var dl = (e, t, r) => t in e ? ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => dl(e, typeof t != "symbol" ? t + "" : t, r), ts = (e, t, r) => t.has(e) || ra("Cannot " + r);
var f = (e, t, r) => (ts(e, t, "read from private field"), r ? r.call(e) : t.get(e)), I = (e, t, r) => t.has(e) ? ra("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, n) => (ts(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), K = (e, t, r) => (ts(e, t, "access private method"), r);
var Ra;
typeof window < "u" && ((Ra = window.__svelte ?? (window.__svelte = {})).v ?? (Ra.v = /* @__PURE__ */ new Set())).add("5");
const cl = 1, ul = 2, Ta = 4, fl = 8, hl = 16, wl = 1, vl = 4, pl = 8, ml = 16, gl = 1, bl = 2, Aa = "[", Ps = "[!", na = "[?", Ts = "]", xn = {}, xe = Symbol(), Ca = "http://www.w3.org/1999/xhtml", yl = !1;
var La = Array.isArray, xl = Array.prototype.indexOf, _n = Array.prototype.includes, Di = Array.from, zi = Object.keys, Ri = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, _l = Object.getOwnPropertyDescriptors, kl = Object.prototype, Ml = Array.prototype, Ia = Object.getPrototypeOf, ia = Object.isExtensible;
const fn = () => {
};
function Sl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Oa() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const ge = 2, kn = 4, Ni = 8, Da = 1 << 24, mr = 16, _t = 32, wr = 64, fs = 128, it = 512, we = 1024, $e = 2048, Pt = 4096, qe = 8192, st = 16384, gr = 32768, hs = 1 << 25, jr = 65536, sa = 1 << 17, $l = 1 << 18, qr = 1 << 19, zl = 1 << 20, Et = 1 << 25, Yr = 65536, ws = 1 << 21, As = 1 << 22, fr = 1 << 23, Xn = Symbol("$state"), Na = Symbol("legacy props"), Rl = Symbol(""), Bt = new class extends Error {
  constructor() {
    super(...arguments);
    ee(this, "name", "StaleReactionError");
    ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ea;
const Wa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ea = globalThis.document) != null && Ea.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Wi = 3, li = 8;
function El(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Tl(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Al(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ll(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Il() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ol() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Vi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function qt(e) {
  j = e;
}
let V;
function De(e) {
  if (e === null)
    throw Vi(), xn;
  return V = e;
}
function Hi() {
  return De(/* @__PURE__ */ At(V));
}
function x(e) {
  if (j) {
    if (/* @__PURE__ */ At(V) !== null)
      throw Vi(), xn;
    V = e;
  }
}
function Cr(e = 1) {
  if (j) {
    for (var t = e, r = V; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ At(r);
    V = r;
  }
}
function Ei(e = !0) {
  for (var t = 0, r = V; ; ) {
    if (r.nodeType === li) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Ts) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Aa || n === Ps || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ At(r)
    );
    e && r.remove(), r = i;
  }
}
function Va(e) {
  if (!e || e.nodeType !== li)
    throw Vi(), xn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ha(e) {
  return e === this.v;
}
function Fa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ba(e) {
  return !Fa(e, this.v);
}
let Bl = !1, Ne = null;
function Mn(e) {
  Ne = e;
}
function Fi(e, t = !1, r) {
  Ne = {
    p: Ne,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      H
    ),
    l: null
  };
}
function Bi(e) {
  var t = (
    /** @type {ComponentContext} */
    Ne
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      bo(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ne = t.p, e ?? /** @type {T} */
  {};
}
function Ua() {
  return !0;
}
let Lr = [];
function ja() {
  var e = Lr;
  Lr = [], Sl(e);
}
function Xt(e) {
  if (Lr.length === 0 && !Kn) {
    var t = Lr;
    queueMicrotask(() => {
      t === Lr && ja();
    });
  }
  Lr.push(e);
}
function Ul() {
  for (; Lr.length > 0; )
    ja();
}
function Ya(e) {
  var t = H;
  if (t === null)
    return N.f |= fr, e;
  if ((t.f & gr) === 0 && (t.f & kn) === 0)
    throw e;
  ur(e, t);
}
function ur(e, t) {
  for (; t !== null; ) {
    if ((t.f & fs) !== 0) {
      if ((t.f & gr) === 0)
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
const jl = -7169;
function ce(e, t) {
  e.f = e.f & jl | t;
}
function Cs(e) {
  (e.f & it) !== 0 || e.deps === null ? ce(e, we) : ce(e, Pt);
}
function Ga(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Yr) === 0 || (t.f ^= Yr, Ga(
        /** @type {Derived} */
        t.deps
      ));
}
function Za(e, t, r) {
  (e.f & $e) !== 0 ? t.add(e) : (e.f & Pt) !== 0 && r.add(e), Ga(e.deps), ce(e, we);
}
function Yl(e, t, r) {
  if (e == null)
    return t(void 0), fn;
  const n = Xr(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const on = [];
function Gl(e, t = fn) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(o) {
    if (Fa(e, o) && (e = o, r)) {
      const c = !on.length;
      for (const l of n)
        l[1](), on.push(l, e);
      if (c) {
        for (let l = 0; l < on.length; l += 2)
          on[l][0](on[l + 1]);
        on.length = 0;
      }
    }
  }
  function s(o) {
    i(o(
      /** @type {T} */
      e
    ));
  }
  function a(o, c = fn) {
    const l = [o, c];
    return n.add(l), n.size === 1 && (r = t(i, s) || fn), o(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: a };
}
function Zl(e) {
  let t;
  return Yl(e, (r) => t = r)(), t;
}
let gi = !1;
function ql(e) {
  var t = gi;
  try {
    return gi = !1, [e(), gi];
  } finally {
    gi = t;
  }
}
const Tr = /* @__PURE__ */ new Set();
let O = null, _e = null, vs = null, Kn = !1, rs = !1, cn = null, xi = null;
var aa = 0;
let Xl = 1;
var wn, vn, pn, mn, ti, Be, Nr, Ut, jt, gn, ze, ps, ms, gs, bs, qa;
const Ai = class Ai {
  constructor() {
    I(this, ze);
    // for debugging. TODO remove once async is stable
    ee(this, "id", Xl++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, wn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, vn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, pn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, mn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, ti, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    I(this, Be, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, Nr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, Ut, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    I(this, jt, /* @__PURE__ */ new Map());
    ee(this, "is_fork", !1);
    I(this, gn, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, jt).has(t) || f(this, jt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = f(this, jt).get(t);
    if (r) {
      f(this, jt).delete(t);
      for (var n of r.d)
        ce(n, $e), this.schedule(n);
      for (n of r.m)
        ce(n, Pt), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== xe && !this.previous.has(t) && this.previous.set(t, r), (t.f & fr) === 0 && (this.current.set(t, t.v), _e == null || _e.set(t, t.v));
  }
  activate() {
    O = this;
  }
  deactivate() {
    O = null, _e = null;
  }
  flush() {
    try {
      rs = !0, O = this, K(this, ze, ms).call(this);
    } finally {
      aa = 0, vs = null, cn = null, xi = null, rs = !1, O = null, _e = null, hr.clear();
    }
  }
  discard() {
    for (const t of f(this, vn)) t(this);
    f(this, vn).clear(), Tr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    C(this, pn, f(this, pn) + 1), t && C(this, mn, f(this, mn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    C(this, pn, f(this, pn) - 1), t && C(this, mn, f(this, mn) - 1), !(f(this, gn) || r) && (C(this, gn, !0), Xt(() => {
      C(this, gn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, Nr).add(n);
    for (const n of r)
      f(this, Ut).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, wn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, vn).add(t);
  }
  settled() {
    return (f(this, ti) ?? C(this, ti, Oa())).promise;
  }
  static ensure() {
    if (O === null) {
      const t = O = new Ai();
      rs || (Tr.add(O), Kn || Xt(() => {
        O === t && t.flush();
      }));
    }
    return O;
  }
  apply() {
    {
      _e = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (vs = t, (i = t.b) != null && i.is_pending && (t.f & (kn | Ni | Da)) !== 0 && (t.f & gr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (cn !== null && r === H && (N === null || (N.f & ge) === 0))
        return;
      if ((n & (wr | _t)) !== 0) {
        if ((n & we) === 0)
          return;
        r.f ^= we;
      }
    }
    f(this, Be).push(r);
  }
};
wn = new WeakMap(), vn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), ti = new WeakMap(), Be = new WeakMap(), Nr = new WeakMap(), Ut = new WeakMap(), jt = new WeakMap(), gn = new WeakMap(), ze = new WeakSet(), ps = function() {
  return this.is_fork || f(this, mn) > 0;
}, ms = function() {
  var o, c;
  if (aa++ > 1e3 && (Tr.delete(this), Kl()), !K(this, ze, ps).call(this)) {
    for (const l of f(this, Nr))
      f(this, Ut).delete(l), ce(l, $e), this.schedule(l);
    for (const l of f(this, Ut))
      ce(l, Pt), this.schedule(l);
  }
  const t = f(this, Be);
  C(this, Be, []), this.apply();
  var r = cn = [], n = [], i = xi = [];
  for (const l of t)
    try {
      K(this, ze, gs).call(this, l, r, n);
    } catch (h) {
      throw Qa(l), h;
    }
  if (O = null, i.length > 0) {
    var s = Ai.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (cn = null, xi = null, K(this, ze, ps).call(this)) {
    K(this, ze, bs).call(this, n), K(this, ze, bs).call(this, r);
    for (const [l, h] of f(this, jt))
      Ja(l, h);
  } else {
    f(this, pn) === 0 && Tr.delete(this), f(this, Nr).clear(), f(this, Ut).clear();
    for (const l of f(this, wn)) l(this);
    f(this, wn).clear(), oa(n), oa(r), (o = f(this, ti)) == null || o.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    O
  );
  if (f(this, Be).length > 0) {
    const l = a ?? (a = this);
    f(l, Be).push(...f(this, Be).filter((h) => !f(l, Be).includes(h)));
  }
  a !== null && (Tr.add(a), K(c = a, ze, ms).call(c)), Tr.has(this) || K(this, ze, qa).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
gs = function(t, r, n) {
  t.f ^= we;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (_t | wr)) !== 0, o = a && (s & we) !== 0, c = o || (s & qe) !== 0 || f(this, jt).has(i);
    if (!c && i.fn !== null) {
      a ? i.f ^= we : (s & kn) !== 0 ? r.push(i) : di(i) && ((s & mr) !== 0 && f(this, Ut).add(i), $n(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
bs = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Za(t[r], f(this, Nr), f(this, Ut));
}, qa = function() {
  var c;
  for (const l of Tr) {
    var t = l.id < this.id, r = [];
    for (const [h, v] of this.current) {
      if (l.current.has(h))
        if (t && v !== l.current.get(h))
          l.current.set(h, v);
        else
          continue;
      r.push(h);
    }
    var n = [...l.current.keys()].filter((h) => !this.current.has(h));
    if (n.length === 0)
      t && l.discard();
    else if (r.length > 0) {
      l.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var a of r)
        Xa(a, n, i, s);
      if (f(l, Be).length > 0) {
        l.apply();
        for (var o of f(l, Be))
          K(c = l, ze, gs).call(c, o, [], []);
        C(l, Be, []);
      }
      l.deactivate();
    }
  }
};
let vr = Ai;
function W(e) {
  var t = Kn;
  Kn = !0;
  try {
    for (var r; ; ) {
      if (Ul(), O === null)
        return (
          /** @type {T} */
          r
        );
      O.flush();
    }
  } finally {
    Kn = t;
  }
}
function Kl() {
  try {
    Il();
  } catch (e) {
    ur(e, vs);
  }
}
let gt = null;
function oa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (st | qe)) === 0 && di(n) && (gt = /* @__PURE__ */ new Set(), $n(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && xo(n), (gt == null ? void 0 : gt.size) > 0)) {
        hr.clear();
        for (const i of gt) {
          if ((i.f & (st | qe)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            gt.has(a) && (gt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const c = s[o];
            (c.f & (st | qe)) === 0 && $n(c);
          }
        }
        gt.clear();
      }
    }
    gt = null;
  }
}
function Xa(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ge) !== 0 ? Xa(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (As | mr)) !== 0 && (s & $e) === 0 && Ka(i, t, n) && (ce(i, $e), Ls(
        /** @type {Effect} */
        i
      ));
    }
}
function Ka(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (_n.call(t, i))
        return !0;
      if ((i.f & ge) !== 0 && Ka(
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
function Ls(e) {
  O.schedule(e);
}
function Ja(e, t) {
  if (!((e.f & _t) !== 0 && (e.f & we) !== 0)) {
    (e.f & $e) !== 0 ? t.d.push(e) : (e.f & Pt) !== 0 && t.m.push(e), ce(e, we);
    for (var r = e.first; r !== null; )
      Ja(r, t), r = r.next;
  }
}
function Qa(e) {
  ce(e, we);
  for (var t = e.first; t !== null; )
    Qa(t), t = t.next;
}
function Jl(e) {
  let t = 0, r = Gr(0), n;
  return () => {
    Ns() && (d(r), Yi(() => (t === 0 && (n = Xr(() => e(() => Jn(r)))), t += 1, () => {
      Xt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Jn(r));
      });
    })));
  };
}
var Ql = jr | qr;
function ed(e, t, r, n) {
  new td(e, t, r, n);
}
var Ue, ri, $t, Wr, Ie, zt, je, bt, Yt, Vr, dr, bn, ni, ii, Gt, Ci, se, eo, to, ro, ys, _i, ki, xs;
class td {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    I(this, se);
    /** @type {Boundary | null} */
    ee(this, "parent");
    ee(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ee(this, "transform_error");
    /** @type {TemplateNode} */
    I(this, Ue);
    /** @type {TemplateNode | null} */
    I(this, ri, j ? V : null);
    /** @type {BoundaryProps} */
    I(this, $t);
    /** @type {((anchor: Node) => void)} */
    I(this, Wr);
    /** @type {Effect} */
    I(this, Ie);
    /** @type {Effect | null} */
    I(this, zt, null);
    /** @type {Effect | null} */
    I(this, je, null);
    /** @type {Effect | null} */
    I(this, bt, null);
    /** @type {DocumentFragment | null} */
    I(this, Yt, null);
    I(this, Vr, 0);
    I(this, dr, 0);
    I(this, bn, !1);
    /** @type {Set<Effect>} */
    I(this, ni, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    I(this, ii, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, Gt, null);
    I(this, Ci, Jl(() => (C(this, Gt, Gr(f(this, Vr))), () => {
      C(this, Gt, null);
    })));
    var s;
    C(this, Ue, t), C(this, $t, r), C(this, Wr, (a) => {
      var o = (
        /** @type {Effect} */
        H
      );
      o.b = this, o.f |= fs, n(a);
    }), this.parent = /** @type {Effect} */
    H.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), C(this, Ie, Gi(() => {
      if (j) {
        const a = (
          /** @type {Comment} */
          f(this, ri)
        );
        Hi();
        const o = a.data === Ps;
        if (a.data.startsWith(na)) {
          const l = JSON.parse(a.data.slice(na.length));
          K(this, se, to).call(this, l);
        } else o ? K(this, se, ro).call(this) : K(this, se, eo).call(this);
      } else
        K(this, se, ys).call(this);
    }, Ql)), j && C(this, Ue, V);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Za(t, f(this, ni), f(this, ii));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, $t).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    K(this, se, xs).call(this, t, r), C(this, Vr, f(this, Vr) + t), !(!f(this, Gt) || f(this, bn)) && (C(this, bn, !0), Xt(() => {
      C(this, bn, !1), f(this, Gt) && Sn(f(this, Gt), f(this, Vr));
    }));
  }
  get_effect_pending() {
    return f(this, Ci).call(this), d(
      /** @type {Source<number>} */
      f(this, Gt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = f(this, $t).onerror;
    let n = f(this, $t).failed;
    if (!r && !n)
      throw t;
    f(this, zt) && (Ae(f(this, zt)), C(this, zt, null)), f(this, je) && (Ae(f(this, je)), C(this, je, null)), f(this, bt) && (Ae(f(this, bt)), C(this, bt, null)), j && (De(
      /** @type {TemplateNode} */
      f(this, ri)
    ), Cr(), De(Ei()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Fl();
        return;
      }
      i = !0, s && Hl(), f(this, bt) !== null && Br(f(this, bt), () => {
        C(this, bt, null);
      }), K(this, se, ki).call(this, () => {
        K(this, se, ys).call(this);
      });
    }, o = (c) => {
      try {
        s = !0, r == null || r(c, a), s = !1;
      } catch (l) {
        ur(l, f(this, Ie) && f(this, Ie).parent);
      }
      n && C(this, bt, K(this, se, ki).call(this, () => {
        try {
          return nt(() => {
            var l = (
              /** @type {Effect} */
              H
            );
            l.b = this, l.f |= fs, n(
              f(this, Ue),
              () => c,
              () => a
            );
          });
        } catch (l) {
          return ur(
            l,
            /** @type {Effect} */
            f(this, Ie).parent
          ), null;
        }
      }));
    };
    Xt(() => {
      var c;
      try {
        c = this.transform_error(t);
      } catch (l) {
        ur(l, f(this, Ie) && f(this, Ie).parent);
        return;
      }
      c !== null && typeof c == "object" && typeof /** @type {any} */
      c.then == "function" ? c.then(
        o,
        /** @param {unknown} e */
        (l) => ur(l, f(this, Ie) && f(this, Ie).parent)
      ) : o(c);
    });
  }
}
Ue = new WeakMap(), ri = new WeakMap(), $t = new WeakMap(), Wr = new WeakMap(), Ie = new WeakMap(), zt = new WeakMap(), je = new WeakMap(), bt = new WeakMap(), Yt = new WeakMap(), Vr = new WeakMap(), dr = new WeakMap(), bn = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), Gt = new WeakMap(), Ci = new WeakMap(), se = new WeakSet(), eo = function() {
  try {
    C(this, zt, nt(() => f(this, Wr).call(this, f(this, Ue))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
to = function(t) {
  const r = f(this, $t).failed;
  r && C(this, bt, nt(() => {
    r(
      f(this, Ue),
      () => t,
      () => () => {
      }
    );
  }));
}, ro = function() {
  const t = f(this, $t).pending;
  t && (this.is_pending = !0, C(this, je, nt(() => t(f(this, Ue)))), Xt(() => {
    var r = C(this, Yt, document.createDocumentFragment()), n = at();
    r.append(n), C(this, zt, K(this, se, ki).call(this, () => nt(() => f(this, Wr).call(this, n)))), f(this, dr) === 0 && (f(this, Ue).before(r), C(this, Yt, null), Br(
      /** @type {Effect} */
      f(this, je),
      () => {
        C(this, je, null);
      }
    ), K(this, se, _i).call(
      this,
      /** @type {Batch} */
      O
    ));
  }));
}, ys = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, dr, 0), C(this, Vr, 0), C(this, zt, nt(() => {
      f(this, Wr).call(this, f(this, Ue));
    })), f(this, dr) > 0) {
      var t = C(this, Yt, document.createDocumentFragment());
      Fs(f(this, zt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, $t).pending
      );
      C(this, je, nt(() => r(f(this, Ue))));
    } else
      K(this, se, _i).call(
        this,
        /** @type {Batch} */
        O
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
_i = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, ni), f(this, ii));
}, /**
 * @template T
 * @param {() => T} fn
 */
ki = function(t) {
  var r = H, n = N, i = Ne;
  Tt(f(this, Ie)), lt(f(this, Ie)), Mn(f(this, Ie).ctx);
  try {
    return vr.ensure(), t();
  } catch (s) {
    return Ya(s), null;
  } finally {
    Tt(r), lt(n), Mn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
xs = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && K(n = this.parent, se, xs).call(n, t, r);
    return;
  }
  C(this, dr, f(this, dr) + t), f(this, dr) === 0 && (K(this, se, _i).call(this, r), f(this, je) && Br(f(this, je), () => {
    C(this, je, null);
  }), f(this, Yt) && (f(this, Ue).before(f(this, Yt)), C(this, Yt, null)));
};
function rd(e, t, r, n) {
  const i = Ui;
  var s = e.filter((w) => !w.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    H
  ), o = nd(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((w) => w.promise)) : null;
  function l(w) {
    o();
    try {
      n(w);
    } catch (y) {
      (a.f & st) === 0 && ur(y, a);
    }
    Pi();
  }
  if (r.length === 0) {
    c.then(() => l(t.map(i)));
    return;
  }
  var h = no();
  function v() {
    Promise.all(r.map((w) => /* @__PURE__ */ id(w))).then((w) => l([...t.map(i), ...w])).catch((w) => ur(w, a)).finally(() => h());
  }
  c ? c.then(() => {
    o(), v(), Pi();
  }) : v();
}
function nd() {
  var e = (
    /** @type {Effect} */
    H
  ), t = N, r = Ne, n = (
    /** @type {Batch} */
    O
  );
  return function(s = !0) {
    Tt(e), lt(t), Mn(r), s && (e.f & st) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Pi(e = !0) {
  Tt(null), lt(null), Mn(null), e && (O == null || O.deactivate());
}
function no() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    H.b
  ), t = (
    /** @type {Batch} */
    O
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  var t = ge | $e, r = N !== null && (N.f & ge) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return H !== null && (H.f |= qr), {
    ctx: Ne,
    deps: null,
    effects: null,
    equals: Ha,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: r ?? H,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function id(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    H
  );
  n === null && Pl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Gr(
    /** @type {V} */
    xe
  ), a = !N, o = /* @__PURE__ */ new Map();
  return wd(() => {
    var y;
    var c = (
      /** @type {Effect} */
      H
    ), l = Oa();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(Pi);
    } catch (g) {
      l.reject(g), Pi();
    }
    var h = (
      /** @type {Batch} */
      O
    );
    if (a) {
      if ((c.f & gr) !== 0)
        var v = no();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (y = o.get(h)) == null || y.reject(Bt), o.delete(h);
      else {
        for (const g of o.values())
          g.reject(Bt);
        o.clear();
      }
      o.set(h, l);
    }
    const w = (g, E = void 0) => {
      if (v) {
        var b = E === Bt;
        v(b);
      }
      if (!(E === Bt || (c.f & st) !== 0)) {
        if (h.activate(), E)
          s.f |= fr, Sn(s, E);
        else {
          (s.f & fr) !== 0 && (s.f ^= fr), Sn(s, g);
          for (const [M, L] of o) {
            if (o.delete(M), M === h) break;
            L.reject(Bt);
          }
        }
        h.deactivate();
      }
    };
    l.promise.then(w, (g) => w(null, g || "unknown"));
  }), mo(() => {
    for (const c of o.values())
      c.reject(Bt);
  }), new Promise((c) => {
    function l(h) {
      function v() {
        h === i ? c(s) : l(i);
      }
      h.then(v, v);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = /* @__PURE__ */ Ui(e);
  return Mo(t), t;
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  const t = /* @__PURE__ */ Ui(e);
  return t.equals = Ba, t;
}
function sd(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ae(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ad(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ge) === 0)
      return (t.f & st) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Is(e) {
  var t, r = H;
  Tt(ad(e));
  try {
    e.f &= ~Yr, sd(e), t = Ro(e);
  } finally {
    Tt(r);
  }
  return t;
}
function so(e) {
  var t = e.v, r = Is(e);
  if (!e.equals(r) && (e.wv = $o(), (!(O != null && O.is_fork) || e.deps === null) && (e.v = r, O == null || O.capture(e, t), e.deps === null))) {
    ce(e, we);
    return;
  }
  pr || (_e !== null ? (Ns() || O != null && O.is_fork) && _e.set(e, r) : Cs(e));
}
function od(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Bt), n.teardown = fn, n.ac = null, ei(n, 0), Vs(n));
}
function ao(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && $n(t);
}
let _s = /* @__PURE__ */ new Set();
const hr = /* @__PURE__ */ new Map();
let oo = !1;
function Gr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ha,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const r = Gr(e);
  return Mo(r), r;
}
// @__NO_SIDE_EFFECTS__
function lo(e, t = !1, r = !0) {
  const n = Gr(e);
  return t || (n.equals = Ba), n;
}
function m(e, t, r = !1) {
  N !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xt || (N.f & sa) !== 0) && Ua() && (N.f & (ge | mr | As | sa)) !== 0 && (ot === null || !_n.call(ot, e)) && Vl();
  let n = r ? Ir(t) : t;
  return Sn(e, n, xi);
}
function Sn(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    pr ? hr.set(e, t) : hr.set(e, n), e.v = t;
    var i = vr.ensure();
    if (i.capture(e, n), (e.f & ge) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & $e) !== 0 && Is(s), _e === null && Cs(s);
    }
    e.wv = $o(), co(e, $e, r), H !== null && (H.f & we) !== 0 && (H.f & (_t | wr)) === 0 && (et === null ? md([e]) : et.push(e)), !i.is_fork && _s.size > 0 && !oo && ld();
  }
  return t;
}
function ld() {
  oo = !1;
  for (const e of _s)
    (e.f & we) !== 0 && ce(e, Pt), di(e) && $n(e);
  _s.clear();
}
function Jn(e) {
  m(e, e.v + 1);
}
function co(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, c = (o & $e) === 0;
      if (c && ce(a, t), (o & ge) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        _e == null || _e.delete(l), (o & Yr) === 0 && (o & it && (a.f |= Yr), co(l, Pt, r));
      } else if (c) {
        var h = (
          /** @type {Effect} */
          a
        );
        (o & mr) !== 0 && gt !== null && gt.add(h), r !== null ? r.push(h) : Ls(h);
      }
    }
}
function Ir(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = Ia(e);
  if (t !== kl && t !== Ml)
    return e;
  var r = /* @__PURE__ */ new Map(), n = La(e), i = /* @__PURE__ */ D(0), s = Ur, a = (o) => {
    if (Ur === s)
      return o();
    var c = N, l = Ur;
    lt(null), ua(s);
    var h = o();
    return lt(c), ua(l), h;
  };
  return n && r.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, c, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Nl();
        var h = r.get(c);
        return h === void 0 ? a(() => {
          var v = /* @__PURE__ */ D(l.value);
          return r.set(c, v), v;
        }) : m(h, l.value, !0), !0;
      },
      deleteProperty(o, c) {
        var l = r.get(c);
        if (l === void 0) {
          if (c in o) {
            const h = a(() => /* @__PURE__ */ D(xe));
            r.set(c, h), Jn(i);
          }
        } else
          m(l, xe), Jn(i);
        return !0;
      },
      get(o, c, l) {
        var y;
        if (c === Xn)
          return e;
        var h = r.get(c), v = c in o;
        if (h === void 0 && (!v || (y = Fr(o, c)) != null && y.writable) && (h = a(() => {
          var g = Ir(v ? o[c] : xe), E = /* @__PURE__ */ D(g);
          return E;
        }), r.set(c, h)), h !== void 0) {
          var w = d(h);
          return w === xe ? void 0 : w;
        }
        return Reflect.get(o, c, l);
      },
      getOwnPropertyDescriptor(o, c) {
        var l = Reflect.getOwnPropertyDescriptor(o, c);
        if (l && "value" in l) {
          var h = r.get(c);
          h && (l.value = d(h));
        } else if (l === void 0) {
          var v = r.get(c), w = v == null ? void 0 : v.v;
          if (v !== void 0 && w !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: w,
              writable: !0
            };
        }
        return l;
      },
      has(o, c) {
        var w;
        if (c === Xn)
          return !0;
        var l = r.get(c), h = l !== void 0 && l.v !== xe || Reflect.has(o, c);
        if (l !== void 0 || H !== null && (!h || (w = Fr(o, c)) != null && w.writable)) {
          l === void 0 && (l = a(() => {
            var y = h ? Ir(o[c]) : xe, g = /* @__PURE__ */ D(y);
            return g;
          }), r.set(c, l));
          var v = d(l);
          if (v === xe)
            return !1;
        }
        return h;
      },
      set(o, c, l, h) {
        var k;
        var v = r.get(c), w = c in o;
        if (n && c === "length")
          for (var y = l; y < /** @type {Source<number>} */
          v.v; y += 1) {
            var g = r.get(y + "");
            g !== void 0 ? m(g, xe) : y in o && (g = a(() => /* @__PURE__ */ D(xe)), r.set(y + "", g));
          }
        if (v === void 0)
          (!w || (k = Fr(o, c)) != null && k.writable) && (v = a(() => /* @__PURE__ */ D(void 0)), m(v, Ir(l)), r.set(c, v));
        else {
          w = v.v !== xe;
          var E = a(() => Ir(l));
          m(v, E);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, c);
        if (b != null && b.set && b.set.call(h, l), !w) {
          if (n && typeof c == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), L = Number(c);
            Number.isInteger(L) && L >= M.v && m(M, L + 1);
          }
          Jn(i);
        }
        return !0;
      },
      ownKeys(o) {
        d(i);
        var c = Reflect.ownKeys(o).filter((v) => {
          var w = r.get(v);
          return w === void 0 || w.v !== xe;
        });
        for (var [l, h] of r)
          h.v !== xe && !(l in o) && c.push(l);
        return c;
      },
      setPrototypeOf() {
        Wl();
      }
    }
  );
}
var la, uo, fo, ho;
function ks() {
  if (la === void 0) {
    la = window, uo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    fo = Fr(t, "firstChild").get, ho = Fr(t, "nextSibling").get, ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ia(r) && (r.__t = void 0);
  }
}
function at(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return (
    /** @type {TemplateNode | null} */
    fo.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return (
    /** @type {TemplateNode | null} */
    ho.call(e)
  );
}
function _(e, t) {
  if (!j)
    return /* @__PURE__ */ Zr(e);
  var r = /* @__PURE__ */ Zr(V);
  if (r === null)
    r = V.appendChild(at());
  else if (t && r.nodeType !== Wi) {
    var n = at();
    return r == null || r.before(n), De(n), n;
  }
  return t && Ds(
    /** @type {Text} */
    r
  ), De(r), r;
}
function un(e, t = !1) {
  if (!j) {
    var r = /* @__PURE__ */ Zr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ At(r) : r;
  }
  if (t) {
    if ((V == null ? void 0 : V.nodeType) !== Wi) {
      var n = at();
      return V == null || V.before(n), De(n), n;
    }
    Ds(
      /** @type {Text} */
      V
    );
  }
  return V;
}
function T(e, t = 1, r = !1) {
  let n = j ? V : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ At(n);
  if (!j)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Wi) {
      var s = at();
      return n === null ? i == null || i.after(s) : n.before(s), De(s), s;
    }
    Ds(
      /** @type {Text} */
      n
    );
  }
  return De(n), n;
}
function wo(e) {
  e.textContent = "";
}
function vo() {
  return !1;
}
function Os(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ca, e, void 0)
  );
}
function Ds(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Wi; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let da = !1;
function po() {
  da || (da = !0, document.addEventListener(
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
function ji(e) {
  var t = N, r = H;
  lt(null), Tt(null);
  try {
    return e();
  } finally {
    lt(t), Tt(r);
  }
}
function dd(e, t, r, n = r) {
  e.addEventListener(t, () => ji(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), po();
}
function cd(e) {
  H === null && (N === null && Ll(), Cl()), pr && Al();
}
function ud(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ct(e, t) {
  var r = H;
  r !== null && (r.f & qe) !== 0 && (e |= qe);
  var n = {
    ctx: Ne,
    deps: null,
    nodes: null,
    f: e | $e | it,
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
  if ((e & kn) !== 0)
    cn !== null ? cn.push(n) : vr.ensure().schedule(n);
  else if (t !== null) {
    try {
      $n(n);
    } catch (a) {
      throw Ae(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & qr) === 0 && (i = i.first, (e & mr) !== 0 && (e & jr) !== 0 && i !== null && (i.f |= jr));
  }
  if (i !== null && (i.parent = r, r !== null && ud(i, r), N !== null && (N.f & ge) !== 0 && (e & wr) === 0)) {
    var s = (
      /** @type {Derived} */
      N
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Ns() {
  return N !== null && !xt;
}
function mo(e) {
  const t = Ct(Ni, null);
  return ce(t, we), t.teardown = e, t;
}
function go(e) {
  cd();
  var t = (
    /** @type {Effect} */
    H.f
  ), r = !N && (t & _t) !== 0 && (t & gr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ne
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return bo(e);
}
function bo(e) {
  return Ct(kn | zl, e);
}
function fd(e) {
  vr.ensure();
  const t = Ct(wr | qr, e);
  return () => {
    Ae(t);
  };
}
function hd(e) {
  vr.ensure();
  const t = Ct(wr | qr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Br(t, () => {
      Ae(t), n(void 0);
    }) : (Ae(t), n(void 0));
  });
}
function Ws(e) {
  return Ct(kn, e);
}
function wd(e) {
  return Ct(As | qr, e);
}
function Yi(e, t = 0) {
  return Ct(Ni | t, e);
}
function Te(e, t = [], r = [], n = []) {
  rd(n, t, r, (i) => {
    Ct(Ni, () => e(...i.map(d)));
  });
}
function Gi(e, t = 0) {
  var r = Ct(mr | t, e);
  return r;
}
function nt(e) {
  return Ct(_t | qr, e);
}
function yo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = pr, n = N;
    ca(!0), lt(null);
    try {
      t.call(null);
    } finally {
      ca(r), lt(n);
    }
  }
}
function Vs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ji(() => {
      i.abort(Bt);
    });
    var n = r.next;
    (r.f & wr) !== 0 ? r.parent = null : Ae(r, t), r = n;
  }
}
function vd(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & _t) === 0 && Ae(t), t = r;
  }
}
function Ae(e, t = !0) {
  var r = !1;
  (t || (e.f & $l) !== 0) && e.nodes !== null && e.nodes.end !== null && (pd(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ce(e, hs), Vs(e, t && !r), ei(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  yo(e), e.f ^= hs, e.f |= st;
  var i = e.parent;
  i !== null && i.first !== null && xo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function pd(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ At(e);
    e.remove(), e = r;
  }
}
function xo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Br(e, t, r = !0) {
  var n = [];
  _o(e, n, !0);
  var i = () => {
    r && Ae(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function _o(e, t, r) {
  if ((e.f & qe) === 0) {
    e.f ^= qe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & jr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & _t) !== 0 && (e.f & mr) !== 0;
      _o(i, t, a ? r : !1), i = s;
    }
  }
}
function Hs(e) {
  ko(e, !0);
}
function ko(e, t) {
  if ((e.f & qe) !== 0) {
    e.f ^= qe, (e.f & we) === 0 && (ce(e, $e), vr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & jr) !== 0 || (r.f & _t) !== 0;
      ko(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Fs(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ At(r);
      t.append(r), r = i;
    }
}
let Mi = !1, pr = !1;
function ca(e) {
  pr = e;
}
let N = null, xt = !1;
function lt(e) {
  N = e;
}
let H = null;
function Tt(e) {
  H = e;
}
let ot = null;
function Mo(e) {
  N !== null && (ot === null ? ot = [e] : ot.push(e));
}
let Oe = null, Fe = 0, et = null;
function md(e) {
  et = e;
}
let So = 1, Or = 0, Ur = Or;
function ua(e) {
  Ur = e;
}
function $o() {
  return ++So;
}
function di(e) {
  var t = e.f;
  if ((t & $e) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Yr), (t & Pt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (di(
        /** @type {Derived} */
        s
      ) && so(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & it) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    _e === null && ce(e, we);
  }
  return !1;
}
function zo(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ot !== null && _n.call(ot, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ge) !== 0 ? zo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? ce(s, $e) : (s.f & we) !== 0 && ce(s, Pt), Ls(
        /** @type {Effect} */
        s
      ));
    }
}
function Ro(e) {
  var E;
  var t = Oe, r = Fe, n = et, i = N, s = ot, a = Ne, o = xt, c = Ur, l = e.f;
  Oe = /** @type {null | Value[]} */
  null, Fe = 0, et = null, N = (l & (_t | wr)) === 0 ? e : null, ot = null, Mn(e.ctx), xt = !1, Ur = ++Or, e.ac !== null && (ji(() => {
    e.ac.abort(Bt);
  }), e.ac = null);
  try {
    e.f |= ws;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h();
    e.f |= gr;
    var w = e.deps, y = O == null ? void 0 : O.is_fork;
    if (Oe !== null) {
      var g;
      if (y || ei(e, Fe), w !== null && Fe > 0)
        for (w.length = Fe + Oe.length, g = 0; g < Oe.length; g++)
          w[Fe + g] = Oe[g];
      else
        e.deps = w = Oe;
      if (Ns() && (e.f & it) !== 0)
        for (g = Fe; g < w.length; g++)
          ((E = w[g]).reactions ?? (E.reactions = [])).push(e);
    } else !y && w !== null && Fe < w.length && (ei(e, Fe), w.length = Fe);
    if (Ua() && et !== null && !xt && w !== null && (e.f & (ge | Pt | $e)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      et.length; g++)
        zo(
          et[g],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Or++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = Or;
      if (t !== null)
        for (const b of t)
          b.rv = Or;
      et !== null && (n === null ? n = et : n.push(.../** @type {Source[]} */
      et));
    }
    return (e.f & fr) !== 0 && (e.f ^= fr), v;
  } catch (b) {
    return Ya(b);
  } finally {
    e.f ^= ws, Oe = t, Fe = r, et = n, N = i, ot = s, Mn(a), xt = o, Ur = c;
  }
}
function gd(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = xl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Oe === null || !_n.call(Oe, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & it) !== 0 && (s.f ^= it, s.f &= ~Yr), Cs(s), od(s), ei(s, 0);
  }
}
function ei(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      gd(e, r[n]);
}
function $n(e) {
  var t = e.f;
  if ((t & st) === 0) {
    ce(e, we);
    var r = H, n = Mi;
    H = e, Mi = !0;
    try {
      (t & (mr | Da)) !== 0 ? vd(e) : Vs(e), yo(e);
      var i = Ro(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = So;
      var s;
      yl && Bl && (e.f & $e) !== 0 && e.deps;
    } finally {
      Mi = n, H = r;
    }
  }
}
async function bd() {
  await Promise.resolve(), W();
}
function d(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (N !== null && !xt) {
    var n = H !== null && (H.f & st) !== 0;
    if (!n && (ot === null || !_n.call(ot, e))) {
      var i = N.deps;
      if ((N.f & ws) !== 0)
        e.rv < Or && (e.rv = Or, Oe === null && i !== null && i[Fe] === e ? Fe++ : Oe === null ? Oe = [e] : Oe.push(e));
      else {
        (N.deps ?? (N.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [N] : _n.call(s, N) || s.push(N);
      }
    }
  }
  if (pr && hr.has(e))
    return hr.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (pr) {
      var o = a.v;
      return ((a.f & we) === 0 && a.reactions !== null || Po(a)) && (o = Is(a)), hr.set(a, o), o;
    }
    var c = (a.f & it) === 0 && !xt && N !== null && (Mi || (N.f & it) !== 0), l = (a.f & gr) === 0;
    di(a) && (c && (a.f |= it), so(a)), c && !l && (ao(a), Eo(a));
  }
  if (_e != null && _e.has(e))
    return _e.get(e);
  if ((e.f & fr) !== 0)
    throw e.v;
  return e.v;
}
function Eo(e) {
  if (e.f |= it, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & it) === 0 && (ao(
        /** @type {Derived} */
        t
      ), Eo(
        /** @type {Derived} */
        t
      ));
}
function Po(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (hr.has(t) || (t.f & ge) !== 0 && Po(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xr(e) {
  var t = xt;
  try {
    return xt = !0, e();
  } finally {
    xt = t;
  }
}
const Dr = Symbol("events"), To = /* @__PURE__ */ new Set(), Ms = /* @__PURE__ */ new Set();
function yd(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || Ss.call(t, s), !s.cancelBubble)
      return ji(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function xd(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = yd(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && mo(() => {
    t.removeEventListener(e, a, s);
  });
}
function ie(e, t, r) {
  (t[Dr] ?? (t[Dr] = {}))[e] = r;
}
function Ao(e) {
  for (var t = 0; t < e.length; t++)
    To.add(e[t]);
  for (var r of Ms)
    r(e);
}
let fa = null;
function Ss(e) {
  var b, M;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  fa = e;
  var a = 0, o = fa === e && e[Dr];
  if (o) {
    var c = i.indexOf(o);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Dr] = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1)
      return;
    c <= l && (a = c);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    Ri(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = N, v = H;
    lt(null), Tt(null);
    try {
      for (var w, y = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var E = (M = s[Dr]) == null ? void 0 : M[n];
          E != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && E.call(s, e);
        } catch (L) {
          w ? y.push(L) : w = L;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (w) {
        for (let L of y)
          queueMicrotask(() => {
            throw L;
          });
        throw w;
      }
    } finally {
      e[Dr] = t, delete e.currentTarget, lt(h), Tt(v);
    }
  }
}
var Pa;
const ns = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Pa = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Pa.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function _d(e) {
  return (
    /** @type {string} */
    (ns == null ? void 0 : ns.createHTML(e)) ?? e
  );
}
function kd(e) {
  var t = Os("template");
  return t.innerHTML = _d(e.replaceAll("<!>", "<!---->")), t.content;
}
function hn(e, t) {
  var r = (
    /** @type {Effect} */
    H
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  var r = (t & gl) !== 0, n = (t & bl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (j)
      return hn(V, null), V;
    i === void 0 && (i = kd(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Zr(i)));
    var a = (
      /** @type {TemplateNode} */
      n || uo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Zr(a)
      ), c = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      hn(o, c);
    } else
      hn(a, a);
    return a;
  };
}
function Co() {
  if (j)
    return hn(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = at();
  return e.append(t, r), hn(t, r), e;
}
function J(e, t) {
  if (j) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      H
    );
    ((r.f & gr) === 0 || r.nodes.end === null) && (r.nodes.end = V), Hi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Md = ["touchstart", "touchmove"];
function Sd(e) {
  return Md.includes(e);
}
function Le(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Lo(e, t) {
  return Io(e, t);
}
function $d(e, t) {
  ks(), t.intro = t.intro ?? !1;
  const r = t.target, n = j, i = V;
  try {
    for (var s = /* @__PURE__ */ Zr(r); s && (s.nodeType !== li || /** @type {Comment} */
    s.data !== Aa); )
      s = /* @__PURE__ */ At(s);
    if (!s)
      throw xn;
    qt(!0), De(
      /** @type {Comment} */
      s
    );
    const a = Io(e, { ...t, anchor: s });
    return qt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== xn && console.warn("Failed to hydrate: ", a), t.recover === !1 && Ol(), ks(), wo(r), qt(!1), Lo(e, t);
  } finally {
    qt(n), De(i);
  }
}
const bi = /* @__PURE__ */ new Map();
function Io(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  ks();
  var c = void 0, l = hd(() => {
    var h = r ?? t.appendChild(at());
    ed(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (y) => {
        Fi({});
        var g = (
          /** @type {ComponentContext} */
          Ne
        );
        if (s && (g.c = s), i && (n.$$events = i), j && hn(
          /** @type {TemplateNode} */
          y,
          null
        ), c = e(y, n) || {}, j && (H.nodes.end = V, V === null || V.nodeType !== li || /** @type {Comment} */
        V.data !== Ts))
          throw Vi(), xn;
        Bi();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), w = (y) => {
      for (var g = 0; g < y.length; g++) {
        var E = y[g];
        if (!v.has(E)) {
          v.add(E);
          var b = Sd(E);
          for (const k of [t, document]) {
            var M = bi.get(k);
            M === void 0 && (M = /* @__PURE__ */ new Map(), bi.set(k, M));
            var L = M.get(E);
            L === void 0 ? (k.addEventListener(E, Ss, { passive: b }), M.set(E, 1)) : M.set(E, L + 1);
          }
        }
      }
    };
    return w(Di(To)), Ms.add(w), () => {
      var b;
      for (var y of v)
        for (const M of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            bi.get(M)
          ), E = (
            /** @type {number} */
            g.get(y)
          );
          --E == 0 ? (M.removeEventListener(y, Ss), g.delete(y), g.size === 0 && bi.delete(M)) : g.set(y, E);
        }
      Ms.delete(w), h !== r && ((b = h.parentNode) == null || b.removeChild(h));
    };
  });
  return $s.set(c, l), c;
}
let $s = /* @__PURE__ */ new WeakMap();
function zd(e, t) {
  const r = $s.get(e);
  return r ? ($s.delete(e), r(t)) : Promise.resolve();
}
var yt, Rt, Ye, Hr, si, ai, Li;
class Oo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, yt, /* @__PURE__ */ new Map());
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
    I(this, Rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Hr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, si, !0);
    /**
     * @param {Batch} batch
     */
    I(this, ai, (t) => {
      if (f(this, yt).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, yt).get(t)
        ), n = f(this, Rt).get(r);
        if (n)
          Hs(n), f(this, Hr).delete(r);
        else {
          var i = f(this, Ye).get(r);
          i && (f(this, Rt).set(r, i.effect), f(this, Ye).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of f(this, yt)) {
          if (f(this, yt).delete(s), s === t)
            break;
          const o = f(this, Ye).get(a);
          o && (Ae(o.effect), f(this, Ye).delete(a));
        }
        for (const [s, a] of f(this, Rt)) {
          if (s === r || f(this, Hr).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, yt).values()).includes(s)) {
              var l = document.createDocumentFragment();
              Fs(a, l), l.append(at()), f(this, Ye).set(s, { effect: a, fragment: l });
            } else
              Ae(a);
            f(this, Hr).delete(s), f(this, Rt).delete(s);
          };
          f(this, si) || !n ? (f(this, Hr).add(s), Br(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Li, (t) => {
      f(this, yt).delete(t);
      const r = Array.from(f(this, yt).values());
      for (const [n, i] of f(this, Ye))
        r.includes(n) || (Ae(i.effect), f(this, Ye).delete(n));
    });
    this.anchor = t, C(this, si, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      O
    ), i = vo();
    if (r && !f(this, Rt).has(t) && !f(this, Ye).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = at();
        s.append(a), f(this, Ye).set(t, {
          effect: nt(() => r(a)),
          fragment: s
        });
      } else
        f(this, Rt).set(
          t,
          nt(() => r(this.anchor))
        );
    if (f(this, yt).set(n, t), i) {
      for (const [o, c] of f(this, Rt))
        o === t ? n.unskip_effect(c) : n.skip_effect(c);
      for (const [o, c] of f(this, Ye))
        o === t ? n.unskip_effect(c.effect) : n.skip_effect(c.effect);
      n.oncommit(f(this, ai)), n.ondiscard(f(this, Li));
    } else
      j && (this.anchor = V), f(this, ai).call(this, n);
  }
}
yt = new WeakMap(), Rt = new WeakMap(), Ye = new WeakMap(), Hr = new WeakMap(), si = new WeakMap(), ai = new WeakMap(), Li = new WeakMap();
function Rd(e, t, ...r) {
  var n = new Oo(e);
  Gi(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, jr);
}
function Do(e) {
  Ne === null && El(), go(() => {
    const t = Xr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ge(e, t, r = !1) {
  var n;
  j && (n = V, Hi());
  var i = new Oo(e), s = r ? jr : 0;
  function a(o, c) {
    if (j) {
      var l = Va(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(l.substring(1))) {
        var h = Ei();
        De(h), i.anchor = h, qt(!1), i.ensure(o, c), qt(!0);
        return;
      }
    }
    i.ensure(o, c);
  }
  Gi(() => {
    var o = !1;
    t((c, l = 0) => {
      o = !0, a(l, c);
    }), o || a(-1, null);
  }, s);
}
function Ed(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let v = t[o];
    Br(
      v,
      () => {
        if (s) {
          if (s.pending.delete(v), s.done.add(v), s.pending.size === 0) {
            var w = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            zs(e, Di(s.done)), w.delete(s), w.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var c = n.length === 0 && r !== null;
    if (c) {
      var l = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        l.parentNode
      );
      wo(h), h.append(l), e.items.clear();
    }
    zs(e, t, !c);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function zs(e, t, r = !0) {
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
      s.f |= Et;
      const a = document.createDocumentFragment();
      Fs(s, a);
    } else
      Ae(t[i], r);
  }
}
var ha;
function Qn(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), c = (t & Ta) !== 0;
  if (c) {
    var l = (
      /** @type {Element} */
      e
    );
    a = j ? De(/* @__PURE__ */ Zr(l)) : l.appendChild(at());
  }
  j && Hi();
  var h = null, v = /* @__PURE__ */ io(() => {
    var k = r();
    return La(k) ? k : k == null ? [] : Di(k);
  }), w, y = /* @__PURE__ */ new Map(), g = !0;
  function E(k) {
    (L.effect.f & st) === 0 && (L.pending.delete(k), L.fallback = h, Pd(L, w, a, t, n), h !== null && (w.length === 0 ? (h.f & Et) === 0 ? Hs(h) : (h.f ^= Et, Gn(h, null, a)) : Br(h, () => {
      h = null;
    })));
  }
  function b(k) {
    L.pending.delete(k);
  }
  var M = Gi(() => {
    w = /** @type {V[]} */
    d(v);
    var k = w.length;
    let B = !1;
    if (j) {
      var te = Va(a) === Ps;
      te !== (k === 0) && (a = Ei(), De(a), qt(!1), B = !0);
    }
    for (var Q = /* @__PURE__ */ new Set(), G = (
      /** @type {Batch} */
      O
    ), ue = vo(), P = 0; P < k; P += 1) {
      j && V.nodeType === li && /** @type {Comment} */
      V.data === Ts && (a = /** @type {Comment} */
      V, B = !0, qt(!1));
      var ve = w[P], pe = n(ve, P), de = g ? null : o.get(pe);
      de ? (de.v && Sn(de.v, ve), de.i && Sn(de.i, P), ue && G.unskip_effect(de.e)) : (de = Td(
        o,
        g ? a : ha ?? (ha = at()),
        ve,
        pe,
        P,
        i,
        t,
        r
      ), g || (de.e.f |= Et), o.set(pe, de)), Q.add(pe);
    }
    if (k === 0 && s && !h && (g ? h = nt(() => s(a)) : (h = nt(() => s(ha ?? (ha = at()))), h.f |= Et)), k > Q.size && Tl(), j && k > 0 && De(Ei()), !g)
      if (y.set(G, Q), ue) {
        for (const [We, Xe] of o)
          Q.has(We) || G.skip_effect(Xe.e);
        G.oncommit(E), G.ondiscard(b);
      } else
        E(G);
    B && qt(!0), d(v);
  }), L = { effect: M, items: o, pending: y, outrogroups: null, fallback: h };
  g = !1, j && (a = V);
}
function Un(e) {
  for (; e !== null && (e.f & _t) === 0; )
    e = e.next;
  return e;
}
function Pd(e, t, r, n, i) {
  var ve, pe, de, We, Xe, Kr, br, kt, Lt;
  var s = (n & fl) !== 0, a = t.length, o = e.items, c = Un(e.effect.first), l, h = null, v, w = [], y = [], g, E, b, M;
  if (s)
    for (M = 0; M < a; M += 1)
      g = t[M], E = i(g, M), b = /** @type {EachItem} */
      o.get(E).e, (b.f & Et) === 0 && ((pe = (ve = b.nodes) == null ? void 0 : ve.a) == null || pe.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(b));
  for (M = 0; M < a; M += 1) {
    if (g = t[M], E = i(g, M), b = /** @type {EachItem} */
    o.get(E).e, e.outrogroups !== null)
      for (const Re of e.outrogroups)
        Re.pending.delete(b), Re.done.delete(b);
    if ((b.f & qe) !== 0 && (Hs(b), s && ((We = (de = b.nodes) == null ? void 0 : de.a) == null || We.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(b))), (b.f & Et) !== 0)
      if (b.f ^= Et, b === c)
        Gn(b, null, r);
      else {
        var L = h ? h.next : c;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), or(e, h, b), or(e, b, L), Gn(b, L, r), h = b, w = [], y = [], c = Un(h.next);
        continue;
      }
    if (b !== c) {
      if (l !== void 0 && l.has(b)) {
        if (w.length < y.length) {
          var k = y[0], B;
          h = k.prev;
          var te = w[0], Q = w[w.length - 1];
          for (B = 0; B < w.length; B += 1)
            Gn(w[B], k, r);
          for (B = 0; B < y.length; B += 1)
            l.delete(y[B]);
          or(e, te.prev, Q.next), or(e, h, te), or(e, Q, k), c = k, h = Q, M -= 1, w = [], y = [];
        } else
          l.delete(b), Gn(b, c, r), or(e, b.prev, b.next), or(e, b, h === null ? e.effect.first : h.next), or(e, h, b), h = b;
        continue;
      }
      for (w = [], y = []; c !== null && c !== b; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(c), y.push(c), c = Un(c.next);
      if (c === null)
        continue;
    }
    (b.f & Et) === 0 && w.push(b), h = b, c = Un(b.next);
  }
  if (e.outrogroups !== null) {
    for (const Re of e.outrogroups)
      Re.pending.size === 0 && (zs(e, Di(Re.done)), (Xe = e.outrogroups) == null || Xe.delete(Re));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || l !== void 0) {
    var G = [];
    if (l !== void 0)
      for (b of l)
        (b.f & qe) === 0 && G.push(b);
    for (; c !== null; )
      (c.f & qe) === 0 && c !== e.fallback && G.push(c), c = Un(c.next);
    var ue = G.length;
    if (ue > 0) {
      var P = (n & Ta) !== 0 && a === 0 ? r : null;
      if (s) {
        for (M = 0; M < ue; M += 1)
          (br = (Kr = G[M].nodes) == null ? void 0 : Kr.a) == null || br.measure();
        for (M = 0; M < ue; M += 1)
          (Lt = (kt = G[M].nodes) == null ? void 0 : kt.a) == null || Lt.fix();
      }
      Ed(e, G, P);
    }
  }
  s && Xt(() => {
    var Re, Jr;
    if (v !== void 0)
      for (b of v)
        (Jr = (Re = b.nodes) == null ? void 0 : Re.a) == null || Jr.apply();
  });
}
function Td(e, t, r, n, i, s, a, o) {
  var c = (a & cl) !== 0 ? (a & hl) === 0 ? /* @__PURE__ */ lo(r, !1, !1) : Gr(r) : null, l = (a & ul) !== 0 ? Gr(i) : null;
  return {
    v: c,
    i: l,
    e: nt(() => (s(t, c ?? r, l ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Gn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Et) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ At(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function or(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Bs(e, t) {
  Ws(() => {
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
      const i = Os("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function No(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = No(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ad() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = No(e)) && (n && (n += " "), n += t);
  return n;
}
function Cd(e) {
  return typeof e == "object" ? Ad(e) : e ?? "";
}
const wa = [...` 	
\r\f \v\uFEFF`];
function Ld(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || wa.includes(n[a - 1])) && (o === n.length || wa.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function va(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function is(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Id(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, a = 0, o = !1, c = [];
      n && c.push(...Object.keys(n).map(is)), i && c.push(...Object.keys(i).map(is));
      var l = 0, h = -1;
      const E = e.length;
      for (var v = 0; v < E; v++) {
        var w = e[v];
        if (o ? w === "/" && e[v - 1] === "*" && (o = !1) : s ? s === w && (s = !1) : w === "/" && e[v + 1] === "*" ? o = !0 : w === '"' || w === "'" ? s = w : w === "(" ? a++ : w === ")" && a--, !o && s === !1 && a === 0) {
          if (w === ":" && h === -1)
            h = v;
          else if (w === ";" || v === E - 1) {
            if (h !== -1) {
              var y = is(e.substring(l, h).trim());
              if (!c.includes(y)) {
                w !== ";" && v++;
                var g = e.substring(l, v).trim();
                r += " " + g + ";";
              }
            }
            l = v + 1, h = -1;
          }
        }
      }
    }
    return n && (r += va(n)), i && (r += va(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function rt(e, t, r, n, i, s) {
  var a = e.__className;
  if (j || a !== r || a === void 0) {
    var o = Ld(r, n, s);
    (!j || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  } else if (s && i !== s)
    for (var c in s) {
      var l = !!s[c];
      (i == null || l !== !!i[c]) && e.classList.toggle(c, l);
    }
  return s;
}
function ss(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function Ze(e, t, r, n) {
  var i = e.__style;
  if (j || i !== t) {
    var s = Id(t, n);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else n && (Array.isArray(n) ? (ss(e, r == null ? void 0 : r[0], n[0]), ss(e, r == null ? void 0 : r[1], n[1], "important")) : ss(e, r, n));
  return n;
}
const Od = Symbol("is custom element"), Dd = Symbol("is html"), Nd = Wa ? "link" : "LINK", Wd = Wa ? "progress" : "PROGRESS";
function yi(e) {
  if (j) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ne(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ne(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Xt(r), po();
  }
}
function Vd(e, t) {
  var r = Wo(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Wd) || (e.value = t ?? "");
}
function ne(e, t, r, n) {
  var i = Wo(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Nd) || i[t] !== (i[t] = r) && (t === "loading" && (e[Rl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Hd(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Wo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Od]: e.nodeName.includes("-"),
      [Dd]: e.namespaceURI === Ca
    })
  );
}
var pa = /* @__PURE__ */ new Map();
function Hd(e) {
  var t = e.getAttribute("is") || e.nodeName, r = pa.get(t);
  if (r) return r;
  pa.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = _l(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Ia(i);
  }
  return r;
}
function as(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  dd(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = os(e) ? ls(s) : s, r(s), O !== null && n.add(O), await bd(), s !== (s = t())) {
      var a = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var l = e.value.length;
        a === o && o === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = a, e.selectionEnd = Math.min(o, l));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (j && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xr(t) == null && e.value) && (r(os(e) ? ls(e.value) : e.value), O !== null && n.add(O)), Yi(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        O
      );
      if (n.has(s))
        return;
    }
    os(e) && i === ls(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function os(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ls(e) {
  return e === "" ? null : +e;
}
var cr, yn, oi, Ii, Vo;
const Oi = class Oi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    I(this, Ii);
    /** */
    I(this, cr, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    I(this, yn);
    /** @type {ResizeObserverOptions} */
    I(this, oi);
    C(this, oi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = f(this, cr).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), f(this, cr).set(t, n), K(this, Ii, Vo).call(this).observe(t, f(this, oi)), () => {
      var i = f(this, cr).get(t);
      i.delete(r), i.size === 0 && (f(this, cr).delete(t), f(this, yn).unobserve(t));
    };
  }
};
cr = new WeakMap(), yn = new WeakMap(), oi = new WeakMap(), Ii = new WeakSet(), Vo = function() {
  return f(this, yn) ?? C(this, yn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        Oi.entries.set(r.target, r);
        for (var n of f(this, cr).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
ee(Oi, "entries", /* @__PURE__ */ new WeakMap());
let Rs = Oi;
var Fd = /* @__PURE__ */ new Rs({
  box: "border-box"
});
function ma(e, t, r) {
  var n = Fd.observe(e, () => r(e[t]));
  Ws(() => (Xr(() => r(e[t])), n));
}
function ga(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function Es(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Ne.r
  ), s = (
    /** @type {Effect} */
    H
  );
  return Ws(() => {
    var a, o;
    return Yi(() => {
      a = o, o = [], Xr(() => {
        e !== r(...o) && (t(e, ...o), a && ga(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let c = s;
      for (; c !== i && c.parent !== null && c.parent.f & hs; )
        c = c.parent;
      const l = () => {
        o && ga(r(...o), e) && t(null, ...o);
      }, h = c.teardown;
      c.teardown = () => {
        l(), h == null || h();
      };
    };
  }), e;
}
function F(e, t, r, n) {
  var L;
  var i = (r & pl) !== 0, s = (r & ml) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, c = () => (o && (o = !1, a = s ? Xr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let l;
  if (i) {
    var h = Xn in e || Na in e;
    l = ((L = Fr(e, t)) == null ? void 0 : L.set) ?? (h && t in e ? (k) => e[t] = k : void 0);
  }
  var v, w = !1;
  i ? [v, w] = ql(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = c(), l && (Dl(), l(v)));
  var y;
  if (y = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k === void 0 ? c() : (o = !0, k);
  }, (r & vl) === 0)
    return y;
  if (l) {
    var g = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, B) {
        return arguments.length > 0 ? ((!B || g || w) && l(B ? y() : k), k) : y();
      })
    );
  }
  var E = !1, b = ((r & wl) !== 0 ? Ui : io)(() => (E = !1, y()));
  i && d(b);
  var M = (
    /** @type {Effect} */
    H
  );
  return (
    /** @type {() => V} */
    (function(k, B) {
      if (arguments.length > 0) {
        const te = B ? d(b) : i ? Ir(k) : k;
        return m(b, te), E = !0, a !== void 0 && (a = te), k;
      }
      return pr && E || (M.f & st) !== 0 ? b.v : d(b);
    })
  );
}
function Bd(e) {
  return new Ud(e);
}
var Zt, tt;
class Ud {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    I(this, Zt);
    /** @type {Record<string, any>} */
    I(this, tt);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var c = /* @__PURE__ */ lo(o, !1, !1);
      return r.set(a, c), c;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return d(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Na ? !0 : (d(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, c) {
          return m(r.get(o) ?? n(o, c), c), Reflect.set(a, o, c);
        }
      }
    );
    C(this, tt, (t.hydrate ? $d : Lo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && W(), C(this, Zt, i.$$events);
    for (const a of Object.keys(f(this, tt)))
      a === "$set" || a === "$destroy" || a === "$on" || Ri(this, a, {
        get() {
          return f(this, tt)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, tt)[a] = o;
        },
        enumerable: !0
      });
    f(this, tt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, f(this, tt).$destroy = () => {
      zd(f(this, tt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, tt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    f(this, Zt)[t] = f(this, Zt)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return f(this, Zt)[t].push(n), () => {
      f(this, Zt)[t] = f(this, Zt)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    f(this, tt).$destroy();
  }
}
Zt = new WeakMap(), tt = new WeakMap();
let Ho;
typeof HTMLElement == "function" && (Ho = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ee(this, "$$ctor");
    /** Slots */
    ee(this, "$$s");
    /** @type {any} The Svelte component instance */
    ee(this, "$$c");
    /** Whether or not the custom element is connected */
    ee(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ee(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ee(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ee(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ee(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ee(this, "$$shadowRoot", null);
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
          const a = Os("slot");
          i !== "default" && (a.name = i), J(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = jd(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Si(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Bd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = fd(() => {
        Yi(() => {
          var i;
          this.$$r = !0;
          for (const s of zi(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = Si(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Si(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return zi(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Si(e, t, r, n) {
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
function jd(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Us(e, t, r, n, i, s) {
  let a = class extends Ho {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return zi(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return zi(t).forEach((o) => {
    Ri(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(c) {
        var v;
        c = Si(o, c, t), this.$$d[o] = c;
        var l = this.$$c;
        if (l) {
          var h = (v = Fr(l, o)) == null ? void 0 : v.get;
          h ? l[o] = c : l.$set({ [o]: c });
        }
      }
    });
  }), n.forEach((o) => {
    Ri(a.prototype, o, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const $ = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, z = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, ba = (e) => `<g fill="#000">${e}</g>`, Yd = {
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
        svg: $(
          z(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: $(
          z(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: $(
          `${ba('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${z(
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
        svg: $(
          z(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          `${z('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${ba(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: $(
          z('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: $(
          z(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: $(
          z('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: $(
          z(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: $(z('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: $(
          z(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: $(
          z('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: $(z('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: $(
          z(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: $(z('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: $(
          z(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: $(
          z(
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
        svg: $(
          z(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: $(
          z('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: $(
          z('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: $(
          z('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: $(z('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: $(z('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: $(z('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: $(z('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: $(z('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: $(z('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: $(z('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: $(
          z('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: $(
          z('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: $(
          z('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: $(z('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: $(z('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Gd(e, t) {
  const r = Yd[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const ya = /* @__PURE__ */ new Map();
function Zd(e, t) {
  const r = `${e}:${t ?? "default"}`, n = ya.get(r);
  if (n)
    return n;
  const i = Gd(e, t), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return ya.set(r, s), s;
}
var qd = /* @__PURE__ */ le("<span></span>");
const Xd = {
  hash: "svelte-t0r6d9",
  code: ".app-icon.svelte-t0r6d9 {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function St(e, t) {
  Fi(t, !0), Bs(e, Xd);
  let r = F(t, "name", 7), n = F(t, "variant", 7), i = F(t, "decorative", 7, !0), s = F(t, "label", 7), a = F(t, "title", 7), o = F(t, "size", 7, "1rem"), c = F(t, "className", 7, ""), l = /* @__PURE__ */ Y(() => Zd(r(), n())), h = /* @__PURE__ */ Y(() => s() ?? a() ?? r());
  var v = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), W();
    },
    get variant() {
      return n();
    },
    set variant(g) {
      n(g), W();
    },
    get decorative() {
      return i();
    },
    set decorative(g = !0) {
      i(g), W();
    },
    get label() {
      return s();
    },
    set label(g) {
      s(g), W();
    },
    get title() {
      return a();
    },
    set title(g) {
      a(g), W();
    },
    get size() {
      return o();
    },
    set size(g = "1rem") {
      o(g), W();
    },
    get className() {
      return c();
    },
    set className(g = "") {
      c(g), W();
    }
  }, w = qd();
  let y;
  return Te(
    (g) => {
      rt(w, 1, g, "svelte-t0r6d9"), ne(w, "aria-hidden", i()), ne(w, "aria-label", i() ? void 0 : d(h)), ne(w, "role", i() ? void 0 : "img"), ne(w, "title", a()), y = Ze(w, "", y, { "--icon-mask": d(l), width: o(), height: o() });
    },
    [() => Cd(`app-icon ${c()}`.trim())]
  ), J(e, w), Bi(v);
}
Us(
  St,
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
const Kd = "efsdb:window-settings", xa = {
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
}, _a = {
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
}, ke = {
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
}, ka = /* @__PURE__ */ new Set();
let Fo = oc();
function Jd(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Qd(e) {
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
      return ke.buttonLayout;
  }
}
function ec(e) {
  return e === "left" ? "left" : ke.systemButtonPlacement;
}
function tc(e) {
  return e === "mirrored" ? "mirrored" : ke.sideResizeMode;
}
function rc(e) {
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
      return ke.themePreset;
  }
}
function nc(e) {
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
      return ke.fontPreset;
  }
}
function ic(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return ke.shiftDragAction;
  }
}
function ds(e, t, r, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(r, Math.min(n, Math.round(i))) : t;
}
function sc(e) {
  return {
    buttonLayout: Qd(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: ec(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: tc(e == null ? void 0 : e.sideResizeMode),
    borderWidth: ds(
      e == null ? void 0 : e.borderWidth,
      ke.borderWidth,
      0,
      12
    ),
    borderRadius: ds(
      e == null ? void 0 : e.borderRadius,
      ke.borderRadius,
      0,
      32
    ),
    chromePadding: ds(
      e == null ? void 0 : e.chromePadding,
      ke.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : ke.chromeStyle,
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : ke.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : ke.snapRestoreOnRelease,
    shiftDragAction: ic(e == null ? void 0 : e.shiftDragAction),
    themePreset: rc(e == null ? void 0 : e.themePreset),
    fontPreset: nc(e == null ? void 0 : e.fontPreset)
  };
}
function ac(e) {
  return (xa[e] ?? xa.inherit).shadow;
}
function oc() {
  const e = Jd(Kd);
  if (!e)
    return $i(ke), { ...ke };
  try {
    const t = JSON.parse(e), r = sc(t);
    return $i(r), r;
  } catch {
    return $i(ke), { ...ke };
  }
}
function $i(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement.style, r = _a[e.fontPreset] ?? _a.system, n = ac(e.themePreset);
  t.setProperty("--efs-font-sans", r.stack), t.setProperty("--efs-window-font-family", r.stack), t.setProperty("--efs-window-border-width", `${e.borderWidth}px`), t.setProperty("--efs-window-radius", `${e.borderRadius}px`), t.setProperty("--efs-window-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-window-system-button-placement", e.systemButtonPlacement), t.setProperty("--efs-window-side-resize-mode", e.sideResizeMode), t.setProperty("--efs-window-shell-shadow", n), t.setProperty("--efs-widget-border-width", `${e.borderWidth}px`), t.setProperty("--efs-widget-radius", `${e.borderRadius}px`), t.setProperty("--efs-widget-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-widget-shadow", n), t.removeProperty("--efs-window-theme-panel"), t.removeProperty("--efs-window-theme-surface"), t.removeProperty("--efs-window-theme-border"), t.removeProperty("--efs-window-theme-shadow"), t.removeProperty("--efs-window-theme-hover");
}
function lc(e) {
  return ka.add(e), e(Fo), () => {
    ka.delete(e);
  };
}
typeof window < "u" && window.addEventListener("efsdb-themechange", () => {
  $i(Fo);
});
var dc = /* @__PURE__ */ le('<div class="snap-preview svelte-3yf7b1" aria-hidden="true"></div>'), cc = /* @__PURE__ */ le("<div><span></span></div>"), uc = /* @__PURE__ */ le('<div class="snap-picker svelte-3yf7b1" aria-hidden="true"></div>'), fc = /* @__PURE__ */ le('<button type="button"><!></button>'), hc = /* @__PURE__ */ le('<button type="button" class="window-button system close close-button svelte-3yf7b1" aria-label="Close window"><!></button>'), wc = /* @__PURE__ */ le('<!> <button type="button" class="window-button system minimize-button svelte-3yf7b1"><!></button> <button type="button" class="window-button system maximize-button svelte-3yf7b1"><!></button>', 1), vc = /* @__PURE__ */ le('<button type="button" class="window-button system close close-button svelte-3yf7b1" aria-label="Close window"><!></button>'), pc = /* @__PURE__ */ le('<button type="button" class="window-button system minimize-button svelte-3yf7b1"><!></button> <button type="button" class="window-button system maximize-button svelte-3yf7b1"><!></button> <!>', 1), mc = /* @__PURE__ */ le('<div role="group"><div class="window-controls window-tools svelte-3yf7b1"><!> <button type="button" class="window-button svelte-3yf7b1" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-3yf7b1"><!></div></div>'), gc = /* @__PURE__ */ le('<div class="window-content svelte-3yf7b1"><!></div>'), bc = /* @__PURE__ */ le('<button type="button" tabindex="-1" aria-hidden="true"></button>'), yc = /* @__PURE__ */ le("<!> <!> <div><!> <!> <!></div>", 1);
const xc = {
  hash: "svelte-3yf7b1",
  code: `.window-shell.svelte-3yf7b1 {--window-panel: var(--shell-panel, rgba(15, 23, 42, 0.94));--window-surface: var(--shell-surface, rgba(15, 23, 42, 0.98));--window-border: var(--shell-border, rgba(148, 163, 184, 0.24));--window-hover: var(--shell-row-hover, rgba(125, 211, 252, 0.12));--window-shadow: var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42)));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-control-size: 2.15rem;--window-aux-width: 2.35rem;--window-system-width: 2.75rem;--window-system-height: var(--window-control-size);--window-control-gap: 0.14rem;--window-control-radius: 10px;--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: 0.9rem;--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.58 + 0.04rem));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.32));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;min-width:min(100vw - 1rem, 18rem);min-height:0;border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow), inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell[data-style='solid'].svelte-3yf7b1 {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-3yf7b1 {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='mica'].svelte-3yf7b1 {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),
      color-mix(in srgb, var(--window-surface), transparent 10%);backdrop-filter:blur(22px) saturate(1.08);-webkit-backdrop-filter:blur(22px) saturate(1.08);}.window-shell[data-style='frost'].svelte-3yf7b1 {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 18%);backdrop-filter:blur(24px) saturate(1.14);-webkit-backdrop-filter:blur(24px) saturate(1.14);}.window-shell[data-style='pane'].svelte-3yf7b1 {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 8%);backdrop-filter:blur(16px) saturate(1.04);-webkit-backdrop-filter:blur(16px) saturate(1.04);}.window-shell[data-style='transparent'].svelte-3yf7b1 {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-3yf7b1 {--window-control-size: 1.92rem;--window-aux-width: 2.05rem;--window-system-width: 2.28rem;--window-control-gap: 0.08rem;--window-control-radius: 8px;}.window-shell.is-ready.svelte-3yf7b1 {opacity:1;}.window-shell.is-dragging.svelte-3yf7b1,
  .window-shell.is-resizing.svelte-3yf7b1 {transition:none;}.window-shell.maximized.svelte-3yf7b1 {inset:0 !important;width:100vw !important;height:100vh !important;transform:none !important;border-radius:0;}.window-shell.minimized.svelte-3yf7b1 {opacity:0;pointer-events:none;transform:translate(0, calc(100vh + 2rem)) scale(0.98) !important;}.window-shell.rolled-up.svelte-3yf7b1 {height:auto !important;min-height:0;}.window-shell.chromeless.svelte-3yf7b1 {border:none;box-shadow:none;background:transparent;}.window-chrome.svelte-3yf7b1 {position:relative;isolation:isolate;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:0.65rem;min-height:calc(
      var(--window-system-height) + var(--window-chrome-top-space) + var(--window-chrome-bottom-space)
    );padding-top:var(--window-chrome-top-space);padding-bottom:var(--window-chrome-bottom-space);padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;background:transparent;}.window-shell[data-style='transparent'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {border-bottom-color:transparent;}.window-shell[data-style='mica'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--window-panel), transparent 12%);}.window-shell[data-style='frost'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 18%);}.window-shell[data-style='pane'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-tools.svelte-3yf7b1,
  .system-controls.svelte-3yf7b1 {position:relative;z-index:1;min-width:0;}.window-tools.svelte-3yf7b1 {justify-self:start;}.system-controls.svelte-3yf7b1 {justify-self:end;}.window-shell[data-system-placement='left'].svelte-3yf7b1 .window-tools:where(.svelte-3yf7b1) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) {justify-self:start;}.window-title.svelte-3yf7b1 {position:absolute;top:50%;left:50%;z-index:0;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-3yf7b1 {text-align:left;}.window-title.align-center.svelte-3yf7b1 {text-align:center;}.window-title.align-right.svelte-3yf7b1 {text-align:right;}.window-controls.svelte-3yf7b1 {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-button.svelte-3yf7b1 {display:inline-flex;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid
      color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);transition:background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;}.window-button.svelte-3yf7b1 .app-icon {width:var(--window-icon-size);height:var(--window-icon-size);}.window-button.svelte-3yf7b1:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-primary), transparent 68%);background:color-mix(in srgb, var(--window-hover), transparent 12%);color:var(--window-text);}.window-button.is-active.svelte-3yf7b1 {border-color:color-mix(in srgb, var(--window-primary), transparent 56%);background:color-mix(in srgb, var(--window-primary), transparent 82%);color:var(--window-text);}.window-button.close.svelte-3yf7b1:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-3yf7b1 .window-button.system:where(.svelte-3yf7b1) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-3yf7b1 .window-button.system:where(.svelte-3yf7b1) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-3yf7b1 {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:0 0 11px 11px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);}.window-shell[data-layout='windows-8'].svelte-3yf7b1,
  .window-shell[data-layout='windows-10'].svelte-3yf7b1 {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1),
  .window-shell[data-layout='windows-10'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1),
  .window-shell[data-layout='windows-10'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-3yf7b1 {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-3yf7b1,
  .window-shell[data-layout='xubuntu'].svelte-3yf7b1 {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1),
  .window-shell[data-layout='xubuntu'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1),
  .window-shell[data-layout='xubuntu'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-3yf7b1 {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-3yf7b1 {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='aero'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 70%),
      transparent;}.window-shell[data-theme='windows-vista'].svelte-3yf7b1 {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='windows-vista'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-theme='windows-11-mica'].svelte-3yf7b1 {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-10-flat'].svelte-3yf7b1 {--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));}.window-shell[data-theme='windows-10-flat'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {border-bottom-color:color-mix(in srgb, var(--window-border), transparent 10%);}.window-shell[data-theme='windows-10-flat'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {border-radius:0;}.window-shell[data-theme='windows-9x'].svelte-3yf7b1 {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-system-height: 1.75rem;--window-system-icon-size: 0.76rem;--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));box-shadow:var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {gap:0.45rem;}.window-shell[data-theme='windows-9x'].svelte-3yf7b1 .window-button:where(.svelte-3yf7b1) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-system-height: 0.96rem;--window-system-icon-size: 0.48rem;--window-control-radius: 999px;--window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {gap:0.55rem;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .window-tools:where(.svelte-3yf7b1) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .window-tools:where(.svelte-3yf7b1) .window-button:where(.svelte-3yf7b1) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1):hover .window-button.system:where(.svelte-3yf7b1) .app-icon,
  .window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .close-button:where(.svelte-3yf7b1) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .minimize-button:where(.svelte-3yf7b1) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .maximize-button:where(.svelte-3yf7b1) {background:#28c840;}.window-shell[data-theme='ios'].svelte-3yf7b1 {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-3yf7b1 {--window-control-radius: 999px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));--window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));}.window-shell[data-theme='android'].svelte-3yf7b1 {--window-control-radius: 8px;--window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));}.window-shell[data-theme='ubuntu-yaru'].svelte-3yf7b1 {--window-aux-width: 2.05rem;--window-control-size: 2rem;--window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='ubuntu-yaru'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);}.window-shell[data-theme='xubuntu'].svelte-3yf7b1 {--window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='xubuntu'].svelte-3yf7b1 .window-chrome:where(.svelte-3yf7b1) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-3yf7b1 {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-3yf7b1 .system-controls:where(.svelte-3yf7b1) .window-button.system:where(.svelte-3yf7b1) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-content.svelte-3yf7b1 {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-3yf7b1::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-3yf7b1::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-3yf7b1::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-3yf7b1 {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-3yf7b1, .resize-handle.dir-s.svelte-3yf7b1 {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-3yf7b1 {top:-0.35rem;}.resize-handle.dir-s.svelte-3yf7b1 {bottom:-0.35rem;}.resize-handle.dir-e.svelte-3yf7b1, .resize-handle.dir-w.svelte-3yf7b1 {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-3yf7b1 {right:-0.35rem;}.resize-handle.dir-w.svelte-3yf7b1 {left:-0.35rem;}.resize-handle.dir-ne.svelte-3yf7b1, .resize-handle.dir-nw.svelte-3yf7b1, .resize-handle.dir-se.svelte-3yf7b1, .resize-handle.dir-sw.svelte-3yf7b1 {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-3yf7b1 {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-3yf7b1 {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-3yf7b1 {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-3yf7b1 {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.snap-preview.svelte-3yf7b1 {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-3yf7b1 {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-3yf7b1 {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-3yf7b1 {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-3yf7b1 {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-3yf7b1 {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-3yf7b1 {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-3yf7b1 {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-3yf7b1 {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-3yf7b1 {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-3yf7b1 {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-3yf7b1 {--window-control-size: 1.86rem;--window-aux-width: 1.96rem;--window-system-width: 2.16rem;--window-control-gap: 0.06rem;}.window-chrome.svelte-3yf7b1 {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );}.window-title.svelte-3yf7b1 {font-size:0.82rem;}.window-button.svelte-3yf7b1 .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-3yf7b1 .window-button.system:where(.svelte-3yf7b1) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-3yf7b1 {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-3yf7b1 {width:auto;}
  }`
};
function Bo(e, t) {
  Fi(t, !0), Bs(e, xc);
  let r = F(t, "title", 7), n = F(t, "state", 15, "normal"), i = F(t, "x", 15, 100), s = F(t, "y", 15, 100), a = F(t, "width", 15, 600), o = F(t, "height", 15, 400), c = F(t, "locked", 7, !1), l = F(t, "chromeless", 7, !1), h = F(t, "buttonLayout", 7), v = F(t, "systemButtonPlacement", 7), w = F(t, "sideResizeMode", 7), y = F(t, "borderWidth", 7), g = F(t, "borderRadius", 7), E = F(t, "chromePadding", 7), b = F(t, "chromeStyle", 7), M = F(t, "alignment", 7), L = F(t, "themePreset", 7), k = F(t, "fontPreset", 7), B = F(t, "snapRestoreOnRelease", 7), te = F(t, "shiftDragAction", 7), Q = F(t, "zIndex", 7, 100), G = F(t, "pinned", 7, !1), ue = F(t, "dragSeed", 7, null), P = F(t, "onClose", 7), ve = F(t, "onPinToggle", 7), pe = F(t, "onConsumeDragSeed", 7), de = F(t, "onStateChange", 7), We = F(t, "children", 7);
  const Xe = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], Kr = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), br = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], kt = 360, Lt = 240, Re = 44, Jr = 1400;
  let Ee = /* @__PURE__ */ D(Ir({ ...ke })), zn = /* @__PURE__ */ D(!1), yr = /* @__PURE__ */ D(!1), Ke = /* @__PURE__ */ D(null), R = /* @__PURE__ */ D(null), U = /* @__PURE__ */ D(null), ae = /* @__PURE__ */ D(null), q = /* @__PURE__ */ D(0), It = /* @__PURE__ */ D(0), xr = "", Qr = 0, en = 0, Kt = 0, Rn = 0, Mt = 0, _r = 0, Je = "se", Jt = null, Ot = !1, dt = !1, En = 0.5, ci = 18, Dt = !1, kr = /* @__PURE__ */ D(null), Nt = 0, Wt = /* @__PURE__ */ D(null), Pn = /* @__PURE__ */ D(0), Tn = /* @__PURE__ */ D(0);
  Do(() => {
    const u = requestAnimationFrame(() => {
      m(zn, !0);
    }), p = lc((S) => {
      m(Ee, { ...S }, !0);
    });
    return () => {
      cancelAnimationFrame(u), p(), Vn(), Nt && typeof window < "u" && window.clearTimeout(Nt);
    };
  });
  let be = /* @__PURE__ */ Y(() => h() ?? d(Ee).buttonLayout), Zi = /* @__PURE__ */ Y(() => v() ?? d(Ee).systemButtonPlacement), ui = /* @__PURE__ */ Y(() => w() ?? d(Ee).sideResizeMode), fe = /* @__PURE__ */ Y(() => y() ?? d(Ee).borderWidth), Me = /* @__PURE__ */ Y(() => g() ?? d(Ee).borderRadius), he = /* @__PURE__ */ Y(() => E() ?? d(Ee).chromePadding), Z = /* @__PURE__ */ Y(() => b() ?? d(Ee).chromeStyle), Se = /* @__PURE__ */ Y(() => M() ?? d(Ee).alignment), ct = /* @__PURE__ */ Y(() => L() ?? d(Ee).themePreset), ut = /* @__PURE__ */ Y(() => k() ?? d(Ee).fontPreset), Qe = /* @__PURE__ */ Y(() => B() ?? d(Ee).snapRestoreOnRelease), Qt = /* @__PURE__ */ Y(() => te() ?? d(Ee).shiftDragAction), ft = /* @__PURE__ */ Y(() => a() < 560 ? "left" : d(Se)), ht = /* @__PURE__ */ Y(() => a() < 520), tn = /* @__PURE__ */ Y(() => Math.max(d(Pn), d(Tn)) + (d(ht) ? 12 : 18));
  function Vt(u) {
    return Kr.has(u);
  }
  function er(u) {
    switch (u) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function tr(u, p = !1) {
    if (p)
      return u === "mac" || u === "ubuntu" || u === "xubuntu" ? void 0 : "stack";
    switch (u) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function rr(u, p = !1) {
    if (p)
      return "stack";
    switch (u) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let wt = /* @__PURE__ */ D(!1), Mr = 0, nr = 0, Sr = 0, ir = 0, fi = /* @__PURE__ */ Y(() => d(wt) && !l() && !c() && d(be) !== "mac" && typeof window < "u" && d(It) <= 84 && Math.abs(d(q) - window.innerWidth / 2) <= 232), $r = /* @__PURE__ */ Y(() => d(Ke) ? Ln(d(Ke)) : null);
  function vt(u) {
    var p;
    n() !== u && (n(u), (p = de()) == null || p(n()));
  }
  function sr() {
    return { x: i(), y: s(), width: a(), height: o() };
  }
  function zr(u, p = a()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerWidth - p, u));
  }
  function An(u, p = o()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerHeight - Math.min(p, Re), u));
  }
  function pt(u) {
    const p = Math.max(kt, Math.round(u.width)), S = Math.max(Lt, Math.round(u.height));
    return {
      x: zr(Math.round(u.x), p),
      y: An(Math.round(u.y), S),
      width: p,
      height: S
    };
  }
  function Cn() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : pt({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function rn(u) {
    const p = pt(u);
    i(p.x), s(p.y), a(p.width), o(p.height), m(R, null), vt("normal");
  }
  function hi() {
    rn(d(U) ?? Cn());
  }
  function Ln(u) {
    if (typeof window > "u") return null;
    const p = window.innerWidth, S = window.innerHeight, A = Math.round(p / 2), re = Math.round(S / 2);
    switch (u) {
      case "maximize":
        return { x: 0, y: 0, width: p, height: S };
      case "left-half":
        return { x: 0, y: 0, width: A, height: S };
      case "right-half":
        return {
          x: p - A,
          y: 0,
          width: A,
          height: S
        };
      case "top-left":
        return { x: 0, y: 0, width: A, height: re };
      case "top-right":
        return {
          x: p - A,
          y: 0,
          width: A,
          height: re
        };
      case "bottom-left":
        return {
          x: 0,
          y: S - re,
          width: A,
          height: re
        };
      case "bottom-right":
        return {
          x: p - A,
          y: S - re,
          width: A,
          height: re
        };
    }
  }
  function In(u, p = sr()) {
    if (m(U, pt(p), !0), u === "maximize") {
      typeof window < "u" && (i(0), s(0), a(window.innerWidth), o(window.innerHeight)), m(R, "maximize"), vt("maximized");
      return;
    }
    const S = Ln(u);
    S && (m(R, u, !0), vt("normal"), i(S.x), s(S.y), a(S.width), o(S.height));
  }
  function wi() {
    typeof window > "u" || ((n() === "maximized" || d(R)) && hi(), i(zr(Math.round((window.innerWidth - a()) / 2), a())), s(An(Math.round((window.innerHeight - o()) / 2), o())));
  }
  function Rr() {
    if (n() === "maximized") {
      hi();
      return;
    }
    In("maximize");
  }
  function vi() {
    vt(n() === "rolled-up" ? "normal" : "rolled-up");
  }
  function On() {
    vt("minimized");
  }
  function Dn() {
    m(kr, null), Nt && typeof window < "u" && window.clearTimeout(Nt), Nt = 0;
  }
  function Nn(u) {
    if (typeof window > "u") {
      m(kr, u, !0);
      return;
    }
    Dn(), m(kr, u, !0), Nt = window.setTimeout(
      () => {
        m(kr, null), Nt = 0;
      },
      Jr
    );
  }
  function qi() {
    var re, oe;
    if (typeof window > "u" || !d(Wt))
      return !1;
    const u = 24, p = Math.ceil(Math.max(d(Wt).scrollWidth, ((re = d(Wt).firstElementChild) == null ? void 0 : re.scrollWidth) ?? 0)), S = Math.ceil(Math.max(d(Wt).scrollHeight, ((oe = d(Wt).firstElementChild) == null ? void 0 : oe.scrollHeight) ?? 0)), A = pt({
      x: Math.round((window.innerWidth - p) / 2),
      y: Math.round((window.innerHeight - S - Re) / 2),
      width: Math.min(window.innerWidth - u * 2, Math.max(kt, p + d(fe) * 2)),
      height: Math.min(window.innerHeight - u * 2, Math.max(Lt, S + Re + d(fe) * 2))
    });
    return m(U, sr(), !0), rn(A), !0;
  }
  function pi(u) {
    if (c() || l() || Wn(u.target))
      return;
    if (d(kr) === "fit-content") {
      Nn("maximize"), Rr();
      return;
    }
    const p = qi();
    Nn(p ? "fit-content" : "maximize"), p || Rr();
  }
  function Wn(u) {
    return !!(u != null && u.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Xi(u, p) {
    if (!d(ae)) return null;
    for (const S of d(ae).querySelectorAll("[data-snap-target]")) {
      const A = S.getBoundingClientRect();
      if (u >= A.left && u <= A.right && p >= A.top && p <= A.bottom)
        return S.dataset.snapTarget;
    }
    return null;
  }
  function Ht(u, p) {
    if (typeof window > "u") return null;
    const S = 18, A = Math.max(72, Math.round(window.innerHeight * 0.14));
    return p <= S ? u <= window.innerWidth * 0.33 ? "top-left" : u >= window.innerWidth * 0.67 ? "top-right" : "maximize" : u <= S ? p <= A ? "top-left" : p >= window.innerHeight - A ? "bottom-left" : "left-half" : u >= window.innerWidth - S ? p <= A ? "top-right" : p >= window.innerHeight - A ? "bottom-right" : "right-half" : null;
  }
  function mi(u, p) {
    if (m(q, u, !0), m(It, p, !0), !d(wt) || c() || l() || d(be) === "mac") {
      m(Ke, null);
      return;
    }
    m(Ke, Xi(u, p) ?? Ht(u, p), !0);
  }
  function jo(u, p) {
    if (!dt) return;
    const S = d(U) ?? Cn(), A = pt({
      ...S,
      x: u - S.width * En,
      y: p - ci
    });
    i(A.x), s(A.y), a(A.width), o(A.height), vt("normal"), m(R, null), dt = !1, Ot = !0, Mr = u, nr = p, Sr = i(), ir = s();
  }
  function Ys(u) {
    !u.shiftKey || Dt || d(Qt) !== "pin" || !ve() || G() || (ve()(), Dt = !0);
  }
  function Yo(u) {
    if (c() || l() || n() === "minimized" || Wn(u.target)) return;
    m(wt, !0), Dt = !1, m(Ke, null), m(q, u.clientX, !0), m(It, u.clientY, !0), Mr = u.clientX, nr = u.clientY, Sr = i(), ir = s(), Ot = !1, dt = !1;
    const p = sr();
    En = p.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (u.clientX - p.x) / p.width)), ci = Math.max(12, Math.min(28, Math.round(u.clientY - p.y || 18))), n() === "maximized" || d(R) ? (Jt = n() === "maximized" ? "maximize" : d(R), m(U, d(U) ?? Cn(), !0), dt = !0) : Jt = null, Ys(u), u.currentTarget.setPointerCapture(u.pointerId);
  }
  function Ki(u) {
    d(wt) && (Ys(u), dt && (Math.abs(u.clientX - Mr) > 2 || Math.abs(u.clientY - nr) > 2) && jo(u.clientX, u.clientY), i(zr(Sr + (u.clientX - Mr), a())), s(An(ir + (u.clientY - nr), o())), mi(u.clientX, u.clientY));
  }
  function nn(u) {
    if (!d(wt)) return;
    const p = d(Ke);
    m(Ke, null), m(wt, !1), dt = !1, p ? In(p, sr()) : Ot && Jt && d(Qe) && !u.shiftKey && !Dt ? In(Jt, sr()) : m(R, null), Jt = null, Ot = !1, Dt = !1;
    const S = u.currentTarget;
    "hasPointerCapture" in S && S.hasPointerCapture(u.pointerId) && S.releasePointerCapture(u.pointerId), window.removeEventListener("pointermove", Ki), window.removeEventListener("pointerup", nn), window.removeEventListener("pointercancel", nn);
  }
  function Go(u, p) {
    c() || l() || n() === "maximized" || n() === "minimized" || (d(R) && m(R, null), p.stopPropagation(), p.preventDefault(), m(yr, !0), Je = u, Qr = p.clientX, en = p.clientY, Kt = i(), Rn = s(), Mt = a(), _r = o(), m(Ke, null), window.addEventListener("pointermove", Gs), window.addEventListener("pointerup", Vn), window.addEventListener("pointercancel", Vn));
  }
  function Gs(u) {
    if (!d(yr)) return;
    const p = u.clientX - Qr, S = u.clientY - en;
    let A = Kt, re = Rn, oe = Mt, Ce = _r;
    if (d(ui) === "mirrored" && (Je === "e" || Je === "w")) {
      const Er = Je === "e" ? p : -p;
      oe = Math.max(kt, Mt + Er * 2), A = Kt - (oe - Mt) / 2;
    } else Je.includes("e") && (oe = Math.max(kt, Mt + p));
    Je.includes("s") && (Ce = Math.max(Lt, _r + S)), d(ui) !== "mirrored" && Je.includes("w") && (oe = Math.max(kt, Mt - p), A = Kt + (Mt - oe)), Je.includes("n") && (Ce = Math.max(Lt, _r - S), re = Rn + (_r - Ce));
    const ar = pt({ x: A, y: re, width: oe, height: Ce });
    i(ar.x), s(ar.y), a(ar.width), o(ar.height);
  }
  function Vn() {
    d(yr) && (m(yr, !1), window.removeEventListener("pointermove", Gs), window.removeEventListener("pointerup", Vn), window.removeEventListener("pointercancel", Vn));
  }
  function Zo(u) {
    var S;
    if (typeof window > "u") return;
    const p = pt({
      x: u.clientX - Math.round(a() * 0.38),
      y: u.clientY - 18,
      width: a(),
      height: o()
    });
    i(p.x), s(p.y), Sr = i(), ir = s(), Mr = u.clientX, nr = u.clientY, m(q, u.clientX, !0), m(It, u.clientY, !0), m(Ke, null), Jt = null, Ot = !1, dt = !1, Dt = !0, m(wt, !0), window.addEventListener("pointermove", Ki), window.addEventListener("pointerup", nn), window.addEventListener("pointercancel", nn), (S = pe()) == null || S();
  }
  go(() => {
    const u = ue() ? `${ue().pointerId}:${ue().clientX}:${ue().clientY}` : "";
    !ue() || u === xr || (xr = u, Zo(ue()));
  });
  var qo = {
    get title() {
      return r();
    },
    set title(u) {
      r(u), W();
    },
    get state() {
      return n();
    },
    set state(u = "normal") {
      n(u), W();
    },
    get x() {
      return i();
    },
    set x(u = 100) {
      i(u), W();
    },
    get y() {
      return s();
    },
    set y(u = 100) {
      s(u), W();
    },
    get width() {
      return a();
    },
    set width(u = 600) {
      a(u), W();
    },
    get height() {
      return o();
    },
    set height(u = 400) {
      o(u), W();
    },
    get locked() {
      return c();
    },
    set locked(u = !1) {
      c(u), W();
    },
    get chromeless() {
      return l();
    },
    set chromeless(u = !1) {
      l(u), W();
    },
    get buttonLayout() {
      return h();
    },
    set buttonLayout(u) {
      h(u), W();
    },
    get systemButtonPlacement() {
      return v();
    },
    set systemButtonPlacement(u) {
      v(u), W();
    },
    get sideResizeMode() {
      return w();
    },
    set sideResizeMode(u) {
      w(u), W();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(u) {
      y(u), W();
    },
    get borderRadius() {
      return g();
    },
    set borderRadius(u) {
      g(u), W();
    },
    get chromePadding() {
      return E();
    },
    set chromePadding(u) {
      E(u), W();
    },
    get chromeStyle() {
      return b();
    },
    set chromeStyle(u) {
      b(u), W();
    },
    get alignment() {
      return M();
    },
    set alignment(u) {
      M(u), W();
    },
    get themePreset() {
      return L();
    },
    set themePreset(u) {
      L(u), W();
    },
    get fontPreset() {
      return k();
    },
    set fontPreset(u) {
      k(u), W();
    },
    get snapRestoreOnRelease() {
      return B();
    },
    set snapRestoreOnRelease(u) {
      B(u), W();
    },
    get shiftDragAction() {
      return te();
    },
    set shiftDragAction(u) {
      te(u), W();
    },
    get zIndex() {
      return Q();
    },
    set zIndex(u = 100) {
      Q(u), W();
    },
    get pinned() {
      return G();
    },
    set pinned(u = !1) {
      G(u), W();
    },
    get dragSeed() {
      return ue();
    },
    set dragSeed(u = null) {
      ue(u), W();
    },
    get onClose() {
      return P();
    },
    set onClose(u) {
      P(u), W();
    },
    get onPinToggle() {
      return ve();
    },
    set onPinToggle(u) {
      ve(u), W();
    },
    get onConsumeDragSeed() {
      return pe();
    },
    set onConsumeDragSeed(u) {
      pe(u), W();
    },
    get onStateChange() {
      return de();
    },
    set onStateChange(u) {
      de(u), W();
    },
    get children() {
      return We();
    },
    set children(u) {
      We(u), W();
    }
  }, Zs = yc(), qs = un(Zs);
  {
    var Xo = (u) => {
      var p = dc();
      let S;
      Te(() => S = Ze(p, "", S, {
        left: `${d($r).x}px`,
        top: `${d($r).y}px`,
        width: `${d($r).width}px`,
        height: `${d($r).height}px`,
        "z-index": Q() + 2
      })), J(u, p);
    };
    Ge(qs, (u) => {
      d($r) && !l() && u(Xo);
    });
  }
  var Xs = T(qs, 2);
  {
    var Ko = (u) => {
      var p = uc();
      let S;
      Qn(p, 21, () => Xe, (A) => A.id, (A, re) => {
        var oe = cc();
        let Ce;
        var ar = _(oe);
        x(oe), Te(() => {
          Ce = rt(oe, 1, "snap-cell svelte-3yf7b1", null, Ce, { "is-active": d(Ke) === d(re).id }), ne(oe, "data-snap-target", d(re).id), rt(ar, 1, `snap-shape shape-${d(re).preview}`, "svelte-3yf7b1");
        }), J(A, oe);
      }), x(p), Es(p, (A) => m(ae, A), () => d(ae)), Te(() => S = Ze(p, "", S, { "z-index": Q() + 3 })), J(u, p);
    };
    Ge(Xs, (u) => {
      d(fi) && !l() && u(Ko);
    });
  }
  var Ft = T(Xs, 2);
  let Ks, Js;
  var Qs = _(Ft);
  {
    var Jo = (u) => {
      var p = mc();
      let S;
      var A = _(p), re = _(A);
      {
        var oe = (me) => {
          var Ve = fc();
          let mt;
          var Fn = _(Ve);
          St(Fn, { name: "pin" }), x(Ve), Te(() => {
            mt = rt(Ve, 1, "window-button svelte-3yf7b1", null, mt, { "is-active": G() }), ne(Ve, "aria-label", G() ? "Unpin window" : "Pin window"), ne(Ve, "aria-pressed", G());
          }), ie("click", Ve, function(...He) {
            var sn;
            (sn = ve()) == null || sn.apply(this, He);
          }), J(me, Ve);
        };
        Ge(re, (me) => {
          ve() && me(oe);
        });
      }
      var Ce = T(re, 2), ar = _(Ce);
      St(ar, { name: "center" }), x(Ce);
      var Er = T(Ce, 2);
      let ta;
      var rl = _(Er);
      {
        let me = /* @__PURE__ */ Y(() => n() === "rolled-up" ? "roll-up" : "roll-down");
        St(rl, {
          get name() {
            return d(me);
          }
        });
      }
      x(Er), x(A);
      var Hn = T(A, 2), nl = _(Hn, !0);
      x(Hn);
      var Ji = T(Hn, 2), il = _(Ji);
      {
        var sl = (me) => {
          var Ve = wc(), mt = un(Ve);
          {
            var Fn = (Pe) => {
              var ye = hc(), es = _(ye);
              {
                let Pr = /* @__PURE__ */ Y(() => er(d(be)));
                St(es, {
                  name: "close",
                  get variant() {
                    return d(Pr);
                  }
                });
              }
              x(ye), ie("click", ye, function(...Pr) {
                var Bn;
                (Bn = P()) == null || Bn.apply(this, Pr);
              }), J(Pe, ye);
            };
            Ge(mt, (Pe) => {
              P() && Pe(Fn);
            });
          }
          var He = T(mt, 2), sn = _(He);
          {
            let Pe = /* @__PURE__ */ Y(() => n() === "minimized" ? "restore" : "minimize"), ye = /* @__PURE__ */ Y(() => tr(d(be), n() === "minimized"));
            St(sn, {
              get name() {
                return d(Pe);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(He);
          var an = T(He, 2), Qi = _(an);
          {
            let Pe = /* @__PURE__ */ Y(() => n() === "maximized" ? "restore" : "maximize"), ye = /* @__PURE__ */ Y(() => rr(d(be), n() === "maximized"));
            St(Qi, {
              get name() {
                return d(Pe);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(an), Te(() => {
            ne(He, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), ne(an, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), ie("click", He, () => n() === "minimized" ? vt("normal") : On()), ie("click", an, Rr), J(me, Ve);
        }, al = /* @__PURE__ */ Y(() => Vt(d(be))), ol = (me) => {
          var Ve = pc(), mt = un(Ve), Fn = _(mt);
          {
            let Pe = /* @__PURE__ */ Y(() => n() === "minimized" ? "restore" : "minimize"), ye = /* @__PURE__ */ Y(() => tr(d(be), n() === "minimized"));
            St(Fn, {
              get name() {
                return d(Pe);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(mt);
          var He = T(mt, 2), sn = _(He);
          {
            let Pe = /* @__PURE__ */ Y(() => n() === "maximized" ? "restore" : "maximize"), ye = /* @__PURE__ */ Y(() => rr(d(be), n() === "maximized"));
            St(sn, {
              get name() {
                return d(Pe);
              },
              get variant() {
                return d(ye);
              }
            });
          }
          x(He);
          var an = T(He, 2);
          {
            var Qi = (Pe) => {
              var ye = vc(), es = _(ye);
              {
                let Pr = /* @__PURE__ */ Y(() => er(d(be)));
                St(es, {
                  name: "close",
                  get variant() {
                    return d(Pr);
                  }
                });
              }
              x(ye), ie("click", ye, function(...Pr) {
                var Bn;
                (Bn = P()) == null || Bn.apply(this, Pr);
              }), J(Pe, ye);
            };
            Ge(an, (Pe) => {
              P() && Pe(Qi);
            });
          }
          Te(() => {
            ne(mt, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), ne(He, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), ie("click", mt, () => n() === "minimized" ? vt("normal") : On()), ie("click", He, Rr), J(me, Ve);
        };
        Ge(il, (me) => {
          d(al) ? me(sl) : me(ol, -1);
        });
      }
      x(Ji), x(p), Te(
        (me) => {
          S = rt(p, 1, `window-chrome chrome-${d(Z) ?? ""}`, "svelte-3yf7b1", S, me), ne(p, "aria-label", `${r()} window controls`), ta = rt(Er, 1, "window-button svelte-3yf7b1", null, ta, { "is-active": n() === "rolled-up" }), ne(Er, "aria-label", n() === "rolled-up" ? "Restore height" : "Roll up"), rt(Hn, 1, `window-title align-${d(ft) ?? ""}`, "svelte-3yf7b1"), ne(Hn, "title", r()), Le(nl, r());
        },
        [
          () => ({
            "layout-mac": Vt(d(be)),
            "layout-windows": !Vt(d(be))
          })
        ]
      ), ie("pointerdown", p, Yo), ie("pointermove", p, Ki), ie("pointerup", p, nn), xd("pointercancel", p, nn), ie("dblclick", p, pi), ie("click", Ce, wi), ie("click", Er, vi), ma(A, "clientWidth", (me) => m(Pn, me)), ma(Ji, "clientWidth", (me) => m(Tn, me)), J(u, p);
    };
    Ge(Qs, (u) => {
      l() || u(Jo);
    });
  }
  var ea = T(Qs, 2);
  {
    var Qo = (u) => {
      var p = gc(), S = _(p);
      Rd(S, () => We() ?? fn), x(p), Es(p, (A) => m(Wt, A), () => d(Wt)), J(u, p);
    };
    Ge(ea, (u) => {
      n() !== "rolled-up" && n() !== "minimized" && u(Qo);
    });
  }
  var el = T(ea, 2);
  {
    var tl = (u) => {
      var p = Co(), S = un(p);
      Qn(S, 16, () => br, (A) => A, (A, re) => {
        var oe = bc();
        Te(() => rt(oe, 1, `resize-handle dir-${re}`, "svelte-3yf7b1")), ie("pointerdown", oe, (Ce) => Go(re, Ce)), J(A, oe);
      }), J(u, p);
    };
    Ge(el, (u) => {
      !l() && n() !== "maximized" && n() !== "minimized" && u(tl);
    });
  }
  return x(Ft), Te(() => {
    Ks = rt(Ft, 1, "window-shell svelte-3yf7b1", null, Ks, {
      "is-ready": d(zn),
      "is-dragging": d(wt),
      "is-resizing": d(yr),
      "compact-controls": d(ht),
      maximized: n() === "maximized",
      minimized: n() === "minimized",
      "rolled-up": n() === "rolled-up",
      chromeless: l()
    }), ne(Ft, "data-layout", d(be)), ne(Ft, "data-system-placement", d(Zi)), ne(Ft, "data-style", d(Z)), ne(Ft, "data-theme", d(ct)), ne(Ft, "data-font", d(ut)), Js = Ze(Ft, "", Js, {
      "--window-border-width": `${d(fe)}px`,
      "--window-radius": `${d(Me)}px`,
      "--window-chrome-padding": `${d(he)}px`,
      "--window-title-guard": `${d(tn)}px`,
      transform: n() === "normal" || n() === "rolled-up" ? `translate(${i()}px, ${s()}px)` : void 0,
      width: n() === "normal" || n() === "rolled-up" ? `${a()}px` : void 0,
      height: n() === "normal" ? `${o()}px` : void 0,
      "z-index": Q()
    });
  }), J(e, Zs), Bi(qo);
}
Ao([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Us(
  Bo,
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
const cs = "efsdb:theme-studio", Zn = "#5b8cff", qn = "light", ln = 66, dn = 56, _c = [
  { id: "azure", label: "Azure Glass", seed: "#4f7cff", mode: "light", vividness: 68, contrast: 58 },
  { id: "violet", label: "Violet Signal", seed: "#7c5cff", mode: "dark", vividness: 72, contrast: 63 },
  { id: "mint", label: "Mint Grid", seed: "#14b8a6", mode: "light", vividness: 62, contrast: 54 },
  { id: "ember", label: "Ember Ops", seed: "#f97316", mode: "dark", vividness: 74, contrast: 67 },
  { id: "rose", label: "Rose Runtime", seed: "#e11d48", mode: "light", vividness: 69, contrast: 55 },
  { id: "gold", label: "Golden Build", seed: "#d4a017", mode: "dark", vividness: 58, contrast: 62 }
];
function X(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function js(e) {
  const t = (e ?? "").trim().replace("#", "");
  return /^[0-9a-fA-F]{3}$/.test(t) ? `#${t.split("").map((r) => `${r}${r}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(t) ? `#${t.toLowerCase()}` : Zn;
}
function Ti(e) {
  const t = js(e).slice(1), r = Number.parseInt(t, 16);
  return {
    r: r >> 16 & 255,
    g: r >> 8 & 255,
    b: r & 255
  };
}
function Uo(e, t, r) {
  return `#${(X(Math.round(e), 0, 255) << 16 | X(Math.round(t), 0, 255) << 8 | X(Math.round(r), 0, 255)).toString(16).padStart(6, "0")}`;
}
function kc(e, t, r) {
  const n = e / 255, i = t / 255, s = r / 255, a = Math.max(n, i, s), o = Math.min(n, i, s), c = a - o;
  let l = 0;
  const h = (a + o) / 2, v = c === 0 ? 0 : c / (1 - Math.abs(2 * h - 1));
  if (c !== 0) {
    switch (a) {
      case n:
        l = (i - s) / c % 6;
        break;
      case i:
        l = (s - n) / c + 2;
        break;
      default:
        l = (n - i) / c + 4;
        break;
    }
    l *= 60, l < 0 && (l += 360);
  }
  return {
    h: l,
    s: v * 100,
    l: h * 100
  };
}
function Mc(e, t, r) {
  const n = (e % 360 + 360) % 360, i = X(t, 0, 100) / 100, s = X(r, 0, 100) / 100, a = (1 - Math.abs(2 * s - 1)) * i, o = a * (1 - Math.abs(n / 60 % 2 - 1)), c = s - a / 2;
  let l = 0, h = 0, v = 0;
  return n < 60 ? (l = a, h = o) : n < 120 ? (l = o, h = a) : n < 180 ? (h = a, v = o) : n < 240 ? (h = o, v = a) : n < 300 ? (l = o, v = a) : (l = a, v = o), {
    r: (l + c) * 255,
    g: (h + c) * 255,
    b: (v + c) * 255
  };
}
function jn(e, t, r) {
  const { r: n, g: i, b: s } = Mc(e, t, r);
  return Uo(n, i, s);
}
function Ar(e, t, r) {
  const n = Ti(e), i = Ti(t), s = X(r, 0, 1);
  return Uo(
    n.r + (i.r - n.r) * s,
    n.g + (i.g - n.g) * s,
    n.b + (i.b - n.b) * s
  );
}
function Ma(e) {
  const { r: t, g: r, b: n } = Ti(e), i = [t, r, n].map((s) => {
    const a = s / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function Sa(e, t) {
  const r = Ma(e), n = Ma(t), i = Math.max(r, n), s = Math.min(r, n);
  return (i + 0.05) / (s + 0.05);
}
function $a(e, t = "#f8fbff", r = "#08111f") {
  return Sa(e, t) >= Sa(e, r) ? t : r;
}
function za(e, t, r, n, i) {
  const s = (e - t) / (r - t);
  return n + s * (i - n);
}
function Yn(e, t = qn, r = ln, n = dn) {
  const i = js(e), s = Ti(i), { h: a, s: o, l: c } = kc(s.r, s.g, s.b), l = t === "dark", h = za(r, 0, 100, -16, 18), v = za(n, 0, 100, -12, 14), w = i, y = jn(
    a,
    X(o + 6 + h * 0.5, 18, 98),
    X(c + (l ? 10 : -12) - v * 0.2, 16, 78)
  ), g = Ar(
    w,
    l ? "#0b1220" : "#ffffff",
    l ? 0.74 : 0.82
  ), E = jn(
    a + 30,
    X(o * 0.84 + h * 0.45, 18, 90),
    X(c + (l ? 4 : -3), 18, 72)
  ), b = Ar(
    E,
    l ? "#0b1220" : "#ffffff",
    l ? 0.76 : 0.84
  ), M = jn(
    a + 2,
    X(8 + o * 0.08, 6, 18),
    l ? X(10 + v * 0.34, 7, 18) : X(98 - v * 0.24, 93, 99)
  ), L = jn(
    a + 8,
    X(10 + o * 0.1, 7, 20),
    l ? X(14 + v * 0.38, 10, 23) : X(95 - v * 0.18, 90, 97)
  ), k = jn(
    a,
    X(8 + o * 0.06, 5, 16),
    l ? X(8 + v * 0.24, 5, 14) : X(92 - v * 0.18, 88, 95)
  ), B = Ar(L, w, l ? 0.18 : 0.1), te = Ar(B, y, 0.32), Q = l ? "#e6eefc" : "#0f172a", G = l ? Ar(Q, M, 0.45) : Ar(Q, M, 0.58), ue = Ar(w, l ? "#ffffff" : "#0f172a", l ? 0.18 : 0.1), P = l ? "#3ddc97" : "#138a5b", ve = l ? "#f6b73c" : "#b66a00", pe = l ? "#ff6b81" : "#c92a4b", de = $a(w), We = $a(E), Xe = l ? "0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)" : "0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)";
  return {
    seed: i,
    mode: t,
    vividness: X(Math.round(r), 0, 100),
    contrast: X(Math.round(n), 0, 100),
    accent: w,
    accentStrong: y,
    accentSoft: g,
    accentSecondary: E,
    accentSecondarySoft: b,
    surface: M,
    surfaceAlt: L,
    surfaceInset: k,
    border: B,
    borderStrong: te,
    text: Q,
    textMuted: G,
    onAccent: de,
    onSecondary: We,
    focus: ue,
    success: P,
    warning: ve,
    danger: pe,
    shadow: Xe
  };
}
function Sc(e) {
  return [
    ":root {",
    `  --accent: ${e.accent};`,
    `  --accent-strong: ${e.accentStrong};`,
    `  --accent-soft: ${e.accentSoft};`,
    `  --accent-secondary: ${e.accentSecondary};`,
    `  --accent-secondary-soft: ${e.accentSecondarySoft};`,
    `  --surface: ${e.surface};`,
    `  --surface-alt: ${e.surfaceAlt};`,
    `  --surface-inset: ${e.surfaceInset};`,
    `  --border: ${e.border};`,
    `  --border-strong: ${e.borderStrong};`,
    `  --text: ${e.text};`,
    `  --text-muted: ${e.textMuted};`,
    `  --on-accent: ${e.onAccent};`,
    `  --on-secondary: ${e.onSecondary};`,
    `  --focus: ${e.focus};`,
    `  --success: ${e.success};`,
    `  --warning: ${e.warning};`,
    `  --danger: ${e.danger};`,
    `  --theme-shadow: ${e.shadow};`,
    "}"
  ].join(`
`);
}
function us(e, t = document.documentElement) {
  const r = {
    "--accent": e.accent,
    "--accent-strong": e.accentStrong,
    "--accent-soft": e.accentSoft,
    "--accent-secondary": e.accentSecondary,
    "--accent-secondary-soft": e.accentSecondarySoft,
    "--surface": e.surface,
    "--surface-alt": e.surfaceAlt,
    "--surface-inset": e.surfaceInset,
    "--border": e.border,
    "--border-strong": e.borderStrong,
    "--text": e.text,
    "--text-muted": e.textMuted,
    "--on-accent": e.onAccent,
    "--on-secondary": e.onSecondary,
    "--focus": e.focus,
    "--success": e.success,
    "--warning": e.warning,
    "--danger": e.danger,
    "--theme-shadow": e.shadow,
    "--shell-panel-solid": e.surface,
    "--shell-panel-solid-subtle": e.surfaceAlt,
    "--shell-panel-solid-muted": e.surfaceInset,
    "--shell-border": e.border,
    "--shell-text": e.text,
    "--shell-text-strong": e.text,
    "--shell-muted": e.textMuted
  };
  Object.entries(r).forEach(([n, i]) => t.style.setProperty(n, i)), t.dataset.themeMode = e.mode;
}
function $c() {
  const e = Yn(Zn, qn, ln, dn), { subscribe: t, set: r, update: n } = Gl({
    seed: Zn,
    mode: qn,
    vividness: ln,
    contrast: dn,
    palette: e,
    lastAppliedAt: null
  });
  return {
    subscribe: t,
    hydrate() {
      if (typeof window > "u") return;
      const i = window.localStorage.getItem(cs);
      if (i)
        try {
          const s = JSON.parse(i), a = js(s.seed), o = s.mode === "dark" ? "dark" : "light", c = X(Number(s.vividness ?? ln), 0, 100), l = X(Number(s.contrast ?? dn), 0, 100), h = Yn(a, o, c, l);
          r({
            seed: a,
            mode: o,
            vividness: c,
            contrast: l,
            palette: h,
            lastAppliedAt: typeof s.lastAppliedAt == "number" ? s.lastAppliedAt : null
          });
        } catch {
        }
    },
    reset() {
      const i = Yn(Zn, qn, ln, dn), s = {
        seed: Zn,
        mode: qn,
        vividness: ln,
        contrast: dn,
        palette: i,
        lastAppliedAt: null
      };
      typeof window < "u" && window.localStorage.setItem(cs, JSON.stringify(s)), r(s);
    },
    preview(i, s, a, o) {
      return Yn(i, s, a, o);
    },
    apply(i, s, a, o) {
      const c = Yn(i, s, a, o);
      return n(() => {
        const l = {
          seed: c.seed,
          mode: s,
          vividness: X(a, 0, 100),
          contrast: X(o, 0, 100),
          palette: c,
          lastAppliedAt: Date.now()
        };
        return typeof window < "u" && window.localStorage.setItem(cs, JSON.stringify(l)), l;
      }), c;
    }
  };
}
const lr = $c();
var zc = /* @__PURE__ */ le('<button type="button"> </button>'), Rc = /* @__PURE__ */ le(
  `<section class="hero-card svelte-1crcw9k"><div class="hero-glow svelte-1crcw9k"></div> <div class="hero-top svelte-1crcw9k"><div class="orb-wrap svelte-1crcw9k"><div class="theme-orb svelte-1crcw9k"></div></div> <div class="hero-copy svelte-1crcw9k"><h3 class="svelte-1crcw9k">Seed color</h3> <p class="svelte-1crcw9k">Pick one color and let the panel derive secondary accent, surfaces, borders, and
                    readable text automatically.</p></div></div> <div class="color-input-row svelte-1crcw9k"><label class="color-chip svelte-1crcw9k"><input type="color" aria-label="Choose seed color" class="svelte-1crcw9k"/> <span class="svelte-1crcw9k"></span></label> <label class="hex-field svelte-1crcw9k"><span class="svelte-1crcw9k">Hex</span> <input type="text" maxlength="7" spellcheck="false" class="svelte-1crcw9k"/></label> <div class="mode-toggle svelte-1crcw9k" role="tablist" aria-label="Theme mode"><button type="button">Light</button> <button type="button">Dark</button></div></div> <div class="slider-grid svelte-1crcw9k"><label class="slider-card svelte-1crcw9k"><div class="slider-label-row svelte-1crcw9k"><span>Vividness</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1crcw9k"/></label> <label class="slider-card svelte-1crcw9k"><div class="slider-label-row svelte-1crcw9k"><span>Contrast</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1crcw9k"/></label></div> <div class="swatch-row svelte-1crcw9k"><button type="button" class="swatch-card svelte-1crcw9k"><span class="swatch svelte-1crcw9k"></span> <small class="svelte-1crcw9k">Accent</small></button> <button type="button" class="swatch-card svelte-1crcw9k"><span class="swatch svelte-1crcw9k"></span> <small class="svelte-1crcw9k">Hover</small></button> <button type="button" class="swatch-card svelte-1crcw9k"><span class="swatch svelte-1crcw9k"></span> <small class="svelte-1crcw9k">Secondary</small></button> <button type="button" class="swatch-card svelte-1crcw9k"><span class="swatch svelte-1crcw9k"></span> <small class="svelte-1crcw9k">Surface</small></button></div></section> <section class="preview-shell svelte-1crcw9k"><div class="preview-topbar svelte-1crcw9k"><div class="preview-dots svelte-1crcw9k"><span class="svelte-1crcw9k"></span><span class="svelte-1crcw9k"></span><span class="svelte-1crcw9k"></span></div> <div class="preview-search svelte-1crcw9k">Search routes, layouts, content…</div> <button type="button" class="preview-ghost svelte-1crcw9k">Manage</button></div> <div class="preview-body svelte-1crcw9k"><aside class="preview-sidebar svelte-1crcw9k"><button type="button" class="sidebar-item active svelte-1crcw9k">Explorer</button> <button type="button" class="sidebar-item svelte-1crcw9k">Content</button> <button type="button" class="sidebar-item svelte-1crcw9k">Layouts</button> <button type="button" class="sidebar-item svelte-1crcw9k">Deployments</button></aside> <div class="preview-content svelte-1crcw9k"><div class="metric-row svelte-1crcw9k"><article class="metric-card svelte-1crcw9k"><small class="svelte-1crcw9k">Primary Accent</small> <strong class="svelte-1crcw9k"> </strong></article> <article class="metric-card svelte-1crcw9k"><small class="svelte-1crcw9k">Secondary Accent</small> <strong class="svelte-1crcw9k"> </strong></article></div> <article class="callout-card svelte-1crcw9k"><div><small class="svelte-1crcw9k">Live Preview</small> <h4 class="svelte-1crcw9k">Shell-friendly theme tokens</h4> <p class="svelte-1crcw9k">This palette stays readable across surfaces while keeping the accent system
                        expressive enough for a real SaaS product.</p></div> <div class="callout-actions svelte-1crcw9k"><button type="button" class="primary-btn svelte-1crcw9k">Primary action</button> <button type="button" class="secondary-btn svelte-1crcw9k">Secondary</button></div></article></div></div></section>`,
  1
), Ec = /* @__PURE__ */ le('<button type="button" class="preset-card svelte-1crcw9k"><div class="preset-band svelte-1crcw9k"><span class="svelte-1crcw9k"></span> <span class="svelte-1crcw9k"></span> <span class="svelte-1crcw9k"></span></div> <div class="preset-copy svelte-1crcw9k"><strong> </strong> <small class="svelte-1crcw9k"> </small></div></button>'), Pc = /* @__PURE__ */ le('<section class="preset-grid svelte-1crcw9k"></section>'), Tc = /* @__PURE__ */ le('<div class="token-row svelte-1crcw9k"><div class="token-swatch svelte-1crcw9k"></div> <div class="token-copy svelte-1crcw9k"><strong> </strong> <small class="svelte-1crcw9k"> </small></div></div>'), Ac = /* @__PURE__ */ le('<section class="token-list svelte-1crcw9k"></section>'), Cc = /* @__PURE__ */ le('<div class="theme-panel svelte-1crcw9k" role="dialog" aria-label="Theme Studio"><header class="panel-status-row svelte-1crcw9k"><div class="panel-status-copy svelte-1crcw9k"><span class="panel-eyebrow svelte-1crcw9k"> </span> <h2 class="panel-title svelte-1crcw9k">Adaptive theme engine</h2> <p class="panel-summary svelte-1crcw9k"> </p></div> <span class="mode-pill svelte-1crcw9k"> </span></header> <div class="studio-tabs svelte-1crcw9k"></div> <div class="studio-scroll svelte-1crcw9k"><!> <!> <!></div> <footer class="panel-actions svelte-1crcw9k"><button type="button" class="ghost-btn svelte-1crcw9k">Reset</button> <button type="button" class="ghost-btn svelte-1crcw9k"> </button> <button type="button" class="primary-btn svelte-1crcw9k">Apply Theme</button></footer></div>'), Lc = /* @__PURE__ */ le('<div class="theme-studio-window svelte-1crcw9k"><!></div>');
const Ic = {
  hash: "svelte-1crcw9k",
  code: `:host {position:relative;z-index:12060;isolation:isolate;}.theme-studio-window.svelte-1crcw9k {position:fixed;inset:0;z-index:12060;pointer-events:none;isolation:isolate;}.theme-studio-window.svelte-1crcw9k .window-shell {pointer-events:auto;--window-panel: var(--shell-panel-solid, #ffffff);--window-surface: var(--shell-panel-solid-subtle, #f8fafc);--window-border: var(--shell-border, #dbe4f0);--window-control-size: 1.85rem;--window-aux-width: 1.92rem;--window-system-width: 2rem;--window-control-gap: 0.08rem;--window-control-radius: 9px;}.theme-studio-window.svelte-1crcw9k .window-chrome {min-height:2.25rem;padding-block:0.22rem;padding-inline:0.45rem 0.4rem;gap:0.45rem;}.theme-studio-window.svelte-1crcw9k .window-tools {gap:0.1rem;}.theme-studio-window.svelte-1crcw9k .window-tools .window-button:not(:first-child) {display:none;}.theme-studio-window.svelte-1crcw9k .system-controls .window-button:not(.close-button) {display:none;}.theme-studio-window.svelte-1crcw9k .window-title {font:var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.04em;}.theme-panel.svelte-1crcw9k {display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);font-family:"Segoe UI Variable", "Segoe UI", system-ui, sans-serif;}.panel-status-row.svelte-1crcw9k {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:1rem 1rem 0.9rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 85%), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 78%),
      var(--preview-surface-alt, #f7faff);}.panel-status-copy.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.3rem;min-width:0;}.panel-eyebrow.svelte-1crcw9k {color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.4 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.12em;text-transform:uppercase;}.panel-title.svelte-1crcw9k {margin:0;font:var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--preview-text, #0f172a);}.panel-summary.svelte-1crcw9k {margin:0;color:var(--preview-text, #0f172a);font:var(--efs-font-body-sm, 13px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.mode-pill.svelte-1crcw9k {display:inline-flex;align-items:center;min-height:2rem;padding:0 0.75rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 4%);border-radius:999px;background:color-mix(in srgb, var(--preview-surface, #fff), var(--preview-accent, #5b8cff) 6%);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;color:var(--preview-text, #0f172a);}.studio-tabs.svelte-1crcw9k {display:flex;background:var(--preview-surface-inset, #eef3f8);border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);padding:0 0.75rem;gap:0.25rem;flex-shrink:0;}.studio-tab.svelte-1crcw9k {padding:0.75rem 1rem;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 0.18s ease;}.studio-tab.svelte-1crcw9k:hover,
  .studio-tab.active.svelte-1crcw9k {color:var(--preview-text, #0f172a);}.studio-tab.active.svelte-1crcw9k {border-bottom-color:var(--preview-accent, #5b8cff);}.studio-scroll.svelte-1crcw9k {flex:1;overflow-y:auto;background:var(--preview-surface-alt, #f8fafc);padding:1rem;display:flex;flex-direction:column;gap:1rem;}.hero-card.svelte-1crcw9k,
  .preview-shell.svelte-1crcw9k,
  .preset-card.svelte-1crcw9k,
  .token-row.svelte-1crcw9k {border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);border-radius:18px;box-shadow:var(--preview-shadow, 0 18px 60px rgba(15, 23, 42, 0.12));}.hero-card.svelte-1crcw9k {position:relative;overflow:hidden;padding:1rem;background:radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 80%), transparent 34%),
      radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--preview-secondary, #8b5cf6), transparent 86%), transparent 28%),
      var(--preview-surface, #ffffff);}.hero-glow.svelte-1crcw9k {position:absolute;inset:-10% 10% auto auto;width:10rem;height:10rem;border-radius:999px;background:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 76%);filter:blur(50px);opacity:0.9;pointer-events:none;}.hero-top.svelte-1crcw9k {position:relative;display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:center;margin-bottom:1rem;}.orb-wrap.svelte-1crcw9k {width:4.5rem;height:4.5rem;display:grid;place-items:center;border-radius:1.25rem;background:color-mix(in srgb, var(--preview-accent-soft, #e8efff), transparent 10%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 25%);}.theme-orb.svelte-1crcw9k {width:3.1rem;height:3.1rem;border-radius:999px;background:radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.88), transparent 22%),
      linear-gradient(145deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.45),
      0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 64%);}.hero-copy.svelte-1crcw9k h3:where(.svelte-1crcw9k) {margin:0 0 0.2rem;font-size:1rem;line-height:1.2;}.hero-copy.svelte-1crcw9k p:where(.svelte-1crcw9k) {margin:0;font-size:0.82rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.color-input-row.svelte-1crcw9k {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;margin-bottom:0.9rem;align-items:center;}.color-chip.svelte-1crcw9k {width:3rem;height:3rem;border-radius:1rem;padding:0.2rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface-alt, #f8fafc);cursor:pointer;display:block;}.color-chip.svelte-1crcw9k input:where(.svelte-1crcw9k) {position:absolute;opacity:0;pointer-events:none;}.color-chip.svelte-1crcw9k span:where(.svelte-1crcw9k) {display:block;width:100%;height:100%;border-radius:0.8rem;background:linear-gradient(135deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));}.hex-field.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.3rem;}.hex-field.svelte-1crcw9k span:where(.svelte-1crcw9k) {color:var(--preview-text-muted, #64748b);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;}.hex-field.svelte-1crcw9k input:where(.svelte-1crcw9k),
  .preview-search.svelte-1crcw9k {min-height:2.7rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);border-radius:0.95rem;padding:0 0.9rem;font:inherit;outline:none;}.hex-field.svelte-1crcw9k input:where(.svelte-1crcw9k):focus {border-color:var(--preview-accent, #5b8cff);box-shadow:0 0 0 3px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 82%);}.mode-toggle.svelte-1crcw9k {display:inline-flex;padding:0.2rem;border-radius:999px;background:var(--preview-surface-inset, #eef3f8);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);gap:0.2rem;}.mode-toggle.svelte-1crcw9k button:where(.svelte-1crcw9k),
  .ghost-btn.svelte-1crcw9k,
  .primary-btn.svelte-1crcw9k,
  .secondary-btn.svelte-1crcw9k,
  .preview-ghost.svelte-1crcw9k,
  .sidebar-item.svelte-1crcw9k,
  .swatch-card.svelte-1crcw9k,
  .preset-card.svelte-1crcw9k {font:inherit;}.mode-toggle.svelte-1crcw9k button:where(.svelte-1crcw9k) {min-width:4.35rem;min-height:2.35rem;padding:0 0.85rem;border-radius:999px;border:none;background:transparent;color:var(--preview-text-muted, #64748b);cursor:pointer;}.mode-toggle.svelte-1crcw9k button.active:where(.svelte-1crcw9k) {background:var(--preview-accent, #5b8cff);color:var(--preview-on-accent, #ffffff);}.slider-grid.svelte-1crcw9k {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;margin-bottom:0.9rem;}.slider-card.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.55rem;padding:0.8rem 0.9rem;border-radius:1rem;background:color-mix(in srgb, var(--preview-surface-alt, #f8fafc), var(--preview-accent, #5b8cff) 4%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);}.slider-label-row.svelte-1crcw9k {display:flex;justify-content:space-between;gap:0.75rem;font-size:0.82rem;}input[type='range'].svelte-1crcw9k {width:100%;accent-color:var(--preview-accent, #5b8cff);}.swatch-row.svelte-1crcw9k {display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:0.6rem;}.swatch-card.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.4rem;padding:0.65rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);color:var(--preview-text, #0f172a);cursor:default;}.swatch.svelte-1crcw9k {height:2.35rem;border-radius:0.8rem;border:1px solid rgba(255, 255, 255, 0.28);}.swatch-card.svelte-1crcw9k small:where(.svelte-1crcw9k) {color:var(--preview-text-muted, #64748b);font-size:0.74rem;}.preview-shell.svelte-1crcw9k {overflow:hidden;background:var(--preview-surface, #fff);}.preview-topbar.svelte-1crcw9k {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;align-items:center;padding:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface-alt, #f8fafc);}.preview-dots.svelte-1crcw9k {display:flex;gap:0.35rem;}.preview-dots.svelte-1crcw9k span:where(.svelte-1crcw9k) {width:0.62rem;height:0.62rem;border-radius:999px;background:var(--preview-border-strong, #c7d4e6);}.preview-search.svelte-1crcw9k {display:flex;align-items:center;color:var(--preview-text-muted, #64748b);font-size:0.82rem;}.preview-ghost.svelte-1crcw9k,
  .ghost-btn.svelte-1crcw9k,
  .secondary-btn.svelte-1crcw9k {min-height:2.5rem;padding:0 0.9rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #fff);color:var(--preview-text, #0f172a);cursor:pointer;}.preview-body.svelte-1crcw9k {display:grid;grid-template-columns:11rem minmax(0, 1fr);min-height:18rem;}.preview-sidebar.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.45rem;padding:0.9rem;background:var(--preview-surface-inset, #eef3f8);border-right:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.sidebar-item.svelte-1crcw9k {min-height:2.45rem;border-radius:0.9rem;border:1px solid transparent;background:transparent;color:var(--preview-text-muted, #64748b);text-align:left;padding:0 0.85rem;cursor:pointer;}.sidebar-item.active.svelte-1crcw9k {background:var(--preview-accent-soft, #e8efff);border-color:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 75%);color:var(--preview-text, #0f172a);}.preview-content.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.85rem;padding:0.95rem;background:var(--preview-surface, #fff);}.metric-row.svelte-1crcw9k {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;}.metric-card.svelte-1crcw9k,
  .callout-card.svelte-1crcw9k {border-radius:1rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);}.metric-card.svelte-1crcw9k {padding:0.85rem 0.95rem;}.metric-card.svelte-1crcw9k small:where(.svelte-1crcw9k),
  .callout-card.svelte-1crcw9k small:where(.svelte-1crcw9k),
  .token-copy.svelte-1crcw9k small:where(.svelte-1crcw9k),
  .preset-copy.svelte-1crcw9k small:where(.svelte-1crcw9k) {color:var(--preview-text-muted, #64748b);}.metric-card.svelte-1crcw9k strong:where(.svelte-1crcw9k) {display:block;margin-top:0.25rem;}.callout-card.svelte-1crcw9k {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:1rem;align-items:center;padding:1rem;}.callout-card.svelte-1crcw9k h4:where(.svelte-1crcw9k) {margin:0.15rem 0 0.35rem;font-size:1rem;}.callout-card.svelte-1crcw9k p:where(.svelte-1crcw9k) {margin:0;font-size:0.83rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.callout-actions.svelte-1crcw9k {display:flex;gap:0.6rem;align-items:center;}.primary-btn.svelte-1crcw9k {min-height:2.6rem;padding:0 1rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-accent-strong, #3b62db), transparent 18%);background:linear-gradient(
      180deg,
      color-mix(in srgb, var(--preview-accent, #5b8cff), white 8%),
      var(--preview-accent, #5b8cff)
    );color:var(--preview-on-accent, #ffffff);cursor:pointer;box-shadow:0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 72%);}.secondary-btn.svelte-1crcw9k {background:color-mix(in srgb, var(--preview-secondary-soft, #ede9fe), var(--preview-surface, #fff) 8%);}.preset-grid.svelte-1crcw9k {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.9rem;}.preset-card.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.75rem;padding:0.8rem;background:var(--preview-surface, #fff);cursor:pointer;text-align:left;}.preset-band.svelte-1crcw9k {display:grid;grid-template-columns:repeat(3, 1fr);gap:0.45rem;}.preset-band.svelte-1crcw9k span:where(.svelte-1crcw9k) {height:3rem;border-radius:0.9rem;}.preset-copy.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.18rem;}.token-list.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.75rem;}.token-row.svelte-1crcw9k {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.8rem;align-items:center;padding:0.8rem;background:var(--preview-surface, #fff);}.token-swatch.svelte-1crcw9k {width:2.7rem;height:2.7rem;border-radius:0.95rem;border:1px solid rgba(255, 255, 255, 0.28);}.token-copy.svelte-1crcw9k {display:flex;flex-direction:column;gap:0.12rem;}.panel-actions.svelte-1crcw9k {display:flex;justify-content:flex-end;gap:0.65rem;padding:0.9rem 1rem 1rem;border-top:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface, #fff);}

  @media (max-width: 47.99rem) {.panel-status-row.svelte-1crcw9k,
    .hero-top.svelte-1crcw9k,
    .color-input-row.svelte-1crcw9k,
    .preview-body.svelte-1crcw9k,
    .callout-card.svelte-1crcw9k {grid-template-columns:1fr;display:flex;flex-direction:column;}.slider-grid.svelte-1crcw9k,
    .metric-row.svelte-1crcw9k,
    .preset-grid.svelte-1crcw9k,
    .swatch-row.svelte-1crcw9k {grid-template-columns:1fr;}.preview-sidebar.svelte-1crcw9k {border-right:0;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.mode-pill.svelte-1crcw9k {align-self:flex-start;}.panel-actions.svelte-1crcw9k {flex-wrap:wrap;}
  }`
};
function Oc(e, t) {
  Fi(t, !0), Bs(e, Ic);
  const r = 468, n = 696, i = 16, s = 12, a = 12060;
  let o = /* @__PURE__ */ D(!1), c = /* @__PURE__ */ D(!1), l = /* @__PURE__ */ D("normal"), h = /* @__PURE__ */ D("theme"), v = /* @__PURE__ */ D("toolbar"), w = /* @__PURE__ */ D(null), y = /* @__PURE__ */ D(null), g = /* @__PURE__ */ D(s), E = /* @__PURE__ */ D(s), b = /* @__PURE__ */ D(r), M = /* @__PURE__ */ D(n), L = /* @__PURE__ */ D("#5b8cff"), k = /* @__PURE__ */ D("light"), B = /* @__PURE__ */ D(66), te = /* @__PURE__ */ D(56), Q = /* @__PURE__ */ D("Copy CSS"), G = /* @__PURE__ */ D("One seed color drives the whole palette.");
  const ue = [
    { id: "theme", label: "Theme" },
    { id: "presets", label: "Presets" },
    { id: "tokens", label: "Tokens" }
  ], P = /* @__PURE__ */ Y(() => lr.preview(d(L), d(k), d(B), d(te)));
  function ve(R = d(v)) {
    const U = R === "toolbar" ? ["toolbar-theme-trigger", "fab-theme-trigger"] : ["fab-theme-trigger", "toolbar-theme-trigger"];
    for (const ae of U) {
      const q = document.getElementById(ae);
      if (q instanceof HTMLElement) {
        m(w, q, !0), m(v, ae === "fab-theme-trigger" ? "fab" : "toolbar", !0);
        return;
      }
    }
    m(w, null);
  }
  function pe() {
    if (!d(w) || typeof window > "u") return;
    const R = d(w).getBoundingClientRect(), U = Math.min(r, Math.max(360, window.innerWidth - s * 2)), ae = Math.min(n, Math.max(420, window.innerHeight - s * 2));
    let q = R.right - U, It = d(v) === "toolbar" ? R.bottom + i : R.top - ae - i;
    q = Math.min(Math.max(s, q), Math.max(s, window.innerWidth - U - s)), It = Math.min(Math.max(s, It), Math.max(s, window.innerHeight - ae - s)), m(b, Math.round(U), !0), m(M, Math.round(ae), !0), m(g, Math.round(q), !0), m(E, Math.round(It), !0);
  }
  function de(R) {
    var ae;
    const U = (ae = R == null ? void 0 : R.detail) == null ? void 0 : ae.source;
    return U === "toolbar" || U === "fab" ? U : null;
  }
  function We(R) {
    const U = de(R) ?? d(v), ae = d(v);
    if (m(v, U, !0), d(l) === "minimized" && m(l, "normal"), d(c)) {
      m(o, !0);
      return;
    }
    if (d(o) && ae === U) {
      Xe();
      return;
    }
    ve(U), pe(), m(o, !0);
  }
  function Xe() {
    m(o, !1);
  }
  function Kr() {
    m(c, !d(c));
  }
  function br(R) {
    if (!d(o) || d(c)) return;
    const U = R.composedPath();
    d(y) && U.includes(d(y)) || d(w) && U.includes(d(w)) || Xe();
  }
  function kt(R) {
    const U = R.trim().replace("#", "");
    return /^[0-9a-fA-F]{6}$/.test(U) ? `#${U.toLowerCase()}` : /^[0-9a-fA-F]{3}$/.test(U) ? `#${U.split("").map((ae) => `${ae}${ae}`).join("").toLowerCase()}` : d(L);
  }
  async function Lt() {
    if (!(navigator != null && navigator.clipboard)) {
      m(Q, "Copy CSS");
      return;
    }
    await navigator.clipboard.writeText(Sc(d(P))), m(Q, "Copied"), m(G, "CSS variables copied to clipboard."), setTimeout(
      () => {
        m(Q, "Copy CSS");
      },
      1600
    );
  }
  function Re() {
    const R = lr.apply(d(L), d(k), d(B), d(te));
    us(R), document.dispatchEvent(new CustomEvent("efsdb:theme-studio:applied", { detail: { palette: R } })), m(G, `Applied ${R.seed} in ${R.mode} mode.`);
  }
  function Jr() {
    lr.reset();
    const R = lr.preview("#5b8cff", "light", 66, 56);
    m(L, R.seed, !0), m(k, R.mode, !0), m(B, R.vividness, !0), m(te, R.contrast, !0), us(R), m(G, "Theme reset to the default shell palette.");
  }
  function Ee(R) {
    m(L, R.seed, !0), m(k, R.mode, !0), m(B, R.vividness, !0), m(te, R.contrast, !0), m(h, "theme"), m(G, `${R.label} loaded.`);
  }
  Do(() => {
    document.addEventListener("efsdb:theme-studio:toggle", We), document.addEventListener("pointerdown", br, !0), window.addEventListener("resize", pe), lr.hydrate();
    const R = Zl(lr);
    return m(L, R.seed, !0), m(k, R.mode, !0), m(B, R.vividness, !0), m(te, R.contrast, !0), us(R.palette), ve(d(v)), pe(), () => {
      document.removeEventListener("efsdb:theme-studio:toggle", We), document.removeEventListener("pointerdown", br, !0), window.removeEventListener("resize", pe);
    };
  });
  var zn = Co(), yr = un(zn);
  {
    var Ke = (R) => {
      var U = Lc(), ae = _(U);
      Bo(ae, {
        title: "Theme Studio",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 18,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return d(c);
        },
        zIndex: a,
        onClose: Xe,
        onPinToggle: Kr,
        get state() {
          return d(l);
        },
        set state(q) {
          m(l, q, !0);
        },
        get x() {
          return d(g);
        },
        set x(q) {
          m(g, q, !0);
        },
        get y() {
          return d(E);
        },
        set y(q) {
          m(E, q, !0);
        },
        get width() {
          return d(b);
        },
        set width(q) {
          m(b, q, !0);
        },
        get height() {
          return d(M);
        },
        set height(q) {
          m(M, q, !0);
        },
        children: (q, It) => {
          var xr = Cc(), Qr = _(xr), en = _(Qr), Kt = _(en), Rn = _(Kt, !0);
          x(Kt);
          var Mt = T(Kt, 4), _r = _(Mt, !0);
          x(Mt), x(en);
          var Je = T(en, 2), Jt = _(Je, !0);
          x(Je), x(Qr);
          var Ot = T(Qr, 2);
          Qn(Ot, 21, () => ue, (fe) => fe.id, (fe, Me) => {
            var he = zc();
            let Z;
            var Se = _(he, !0);
            x(he), Te(() => {
              Z = rt(he, 1, "studio-tab svelte-1crcw9k", null, Z, { active: d(h) === d(Me).id }), Le(Se, d(Me).label);
            }), ie("click", he, () => m(h, d(Me).id, !0)), J(fe, he);
          }), x(Ot);
          var dt = T(Ot, 2), En = _(dt);
          {
            var ci = (fe) => {
              var Me = Rc(), he = un(Me), Z = T(_(he), 4), Se = _(Z), ct = _(Se);
              yi(ct), Cr(2), x(Se);
              var ut = T(Se, 2), Qe = T(_(ut), 2);
              yi(Qe), x(ut);
              var Qt = T(ut, 2), ft = _(Qt);
              let ht;
              var tn = T(ft, 2);
              let Vt;
              x(Qt), x(Z);
              var er = T(Z, 2), tr = _(er), rr = _(tr), wt = T(_(rr), 2), Mr = _(wt, !0);
              x(wt), x(rr);
              var nr = T(rr, 2);
              yi(nr), x(tr);
              var Sr = T(tr, 2), ir = _(Sr), fi = T(_(ir), 2), $r = _(fi, !0);
              x(fi), x(ir);
              var vt = T(ir, 2);
              yi(vt), x(Sr), x(er);
              var sr = T(er, 2), zr = _(sr), An = _(zr);
              Cr(2), x(zr);
              var pt = T(zr, 2), Cn = _(pt);
              Cr(2), x(pt);
              var rn = T(pt, 2), hi = _(rn);
              Cr(2), x(rn);
              var Ln = T(rn, 2), In = _(Ln);
              Cr(2), x(Ln), x(sr), x(he);
              var wi = T(he, 2), Rr = T(_(wi), 2), vi = T(_(Rr), 2), On = _(vi), Dn = _(On), Nn = T(_(Dn), 2), qi = _(Nn, !0);
              x(Nn), x(Dn);
              var pi = T(Dn, 2), Wn = T(_(pi), 2), Xi = _(Wn, !0);
              x(Wn), x(pi), x(On), Cr(2), x(vi), x(Rr), x(wi), Te(() => {
                Vd(Qe, d(L)), ht = rt(ft, 1, "svelte-1crcw9k", null, ht, { active: d(k) === "light" }), Vt = rt(tn, 1, "svelte-1crcw9k", null, Vt, { active: d(k) === "dark" }), Le(Mr, d(B)), Le($r, d(te)), Ze(An, `background:${d(P).accent}`), Ze(Cn, `background:${d(P).accentStrong}`), Ze(hi, `background:${d(P).accentSecondary}`), Ze(In, `background:${d(P).surfaceAlt}`), Le(qi, d(P).accent), Le(Xi, d(P).accentSecondary);
              }), as(ct, () => d(L), (Ht) => m(L, Ht)), ie("input", Qe, (Ht) => {
                const mi = Ht.currentTarget;
                m(L, kt(mi.value), !0), mi.value = d(L);
              }), ie("click", ft, () => m(k, "light")), ie("click", tn, () => m(k, "dark")), as(nr, () => d(B), (Ht) => m(B, Ht)), as(vt, () => d(te), (Ht) => m(te, Ht)), J(fe, Me);
            };
            Ge(En, (fe) => {
              d(h) === "theme" && fe(ci);
            });
          }
          var Dt = T(En, 2);
          {
            var kr = (fe) => {
              var Me = Pc();
              Qn(Me, 21, () => _c, (he) => he.id, (he, Z) => {
                var Se = Ec(), ct = _(Se), ut = _(ct), Qe = T(ut, 2), Qt = T(Qe, 2);
                x(ct);
                var ft = T(ct, 2), ht = _(ft), tn = _(ht, !0);
                x(ht);
                var Vt = T(ht, 2), er = _(Vt);
                x(Vt), x(ft), x(Se), Te(
                  (tr, rr) => {
                    Ze(ut, `background:${d(Z).seed}`), Ze(Qe, tr), Ze(Qt, rr), Le(tn, d(Z).label), Le(er, `${d(Z).seed ?? ""} · ${d(Z).mode ?? ""}`);
                  },
                  [
                    () => `background:${lr.preview(d(Z).seed, d(Z).mode, d(Z).vividness, d(Z).contrast).accentSecondary}`,
                    () => `background:${lr.preview(d(Z).seed, d(Z).mode, d(Z).vividness, d(Z).contrast).surfaceAlt}`
                  ]
                ), ie("click", Se, () => Ee(d(Z))), J(he, Se);
              }), x(Me), J(fe, Me);
            };
            Ge(Dt, (fe) => {
              d(h) === "presets" && fe(kr);
            });
          }
          var Nt = T(Dt, 2);
          {
            var Wt = (fe) => {
              var Me = Ac();
              Qn(
                Me,
                21,
                () => [
                  ["--accent", d(P).accent],
                  ["--accent-strong", d(P).accentStrong],
                  ["--accent-soft", d(P).accentSoft],
                  ["--accent-secondary", d(P).accentSecondary],
                  [
                    "--accent-secondary-soft",
                    d(P).accentSecondarySoft
                  ],
                  ["--surface", d(P).surface],
                  ["--surface-alt", d(P).surfaceAlt],
                  ["--surface-inset", d(P).surfaceInset],
                  ["--border", d(P).border],
                  ["--border-strong", d(P).borderStrong],
                  ["--text", d(P).text],
                  ["--text-muted", d(P).textMuted]
                ],
                (he) => he[0],
                (he, Z) => {
                  var Se = Tc(), ct = _(Se), ut = T(ct, 2), Qe = _(ut), Qt = _(Qe, !0);
                  x(Qe);
                  var ft = T(Qe, 2), ht = _(ft, !0);
                  x(ft), x(ut), x(Se), Te(() => {
                    Ze(ct, `background:${d(Z)[1]}`), Le(Qt, d(Z)[0]), Le(ht, d(Z)[1]);
                  }), J(he, Se);
                }
              ), x(Me), J(fe, Me);
            };
            Ge(Nt, (fe) => {
              d(h) === "tokens" && fe(Wt);
            });
          }
          x(dt);
          var Pn = T(dt, 2), Tn = _(Pn), be = T(Tn, 2), Zi = _(be, !0);
          x(be);
          var ui = T(be, 2);
          x(Pn), x(xr), Te(() => {
            Ze(xr, `--preview-accent:${d(P).accent};
                --preview-accent-strong:${d(P).accentStrong};
                --preview-accent-soft:${d(P).accentSoft};
                --preview-secondary:${d(P).accentSecondary};
                --preview-secondary-soft:${d(P).accentSecondarySoft};
                --preview-surface:${d(P).surface};
                --preview-surface-alt:${d(P).surfaceAlt};
                --preview-surface-inset:${d(P).surfaceInset};
                --preview-border:${d(P).border};
                --preview-border-strong:${d(P).borderStrong};
                --preview-text:${d(P).text};
                --preview-text-muted:${d(P).textMuted};
                --preview-on-accent:${d(P).onAccent};
                --preview-shadow:${d(P).shadow};`), Le(Rn, d(v) === "toolbar" ? "Toolbar launch" : "Fab launch"), Le(_r, d(G)), ne(Je, "data-mode", d(k)), Le(Jt, d(k) === "dark" ? "Dark mode" : "Light mode"), Le(Zi, d(Q));
          }), ie("click", Tn, Jr), ie("click", be, Lt), ie("click", ui, Re), J(q, xr);
        },
        $$slots: { default: !0 }
      }), x(U), Es(U, (q) => m(y, q), () => d(y)), J(R, U);
    };
    Ge(yr, (R) => {
      d(o) && R(Ke);
    });
  }
  J(e, zn), Bi();
}
Ao(["click", "input"]);
customElements.define("efsdb-theme-studio", Us(Oc, {}, [], [], { mode: "open" }));
export {
  Oc as ThemeStudio
};
