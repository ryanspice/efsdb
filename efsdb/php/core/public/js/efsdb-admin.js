var yd = Object.defineProperty;
var gi = (e) => {
  throw TypeError(e);
};
var xd = (e, t, n) => t in e ? yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _t = (e, t, n) => xd(e, typeof t != "symbol" ? t + "" : t, n), ns = (e, t, n) => t.has(e) || gi("Cannot " + n);
var T = (e, t, n) => (ns(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Oe = (e, t, n) => t.has(e) ? gi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Re = (e, t, n, o) => (ns(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), yt = (e, t, n) => (ns(e, t, "access private method"), n);
var Ai;
typeof window < "u" && ((Ai = window.__svelte ?? (window.__svelte = {})).v ?? (Ai.v = /* @__PURE__ */ new Set())).add("5");
const kd = 1, _d = 2, $i = 4, Sd = 8, Pd = 16, Td = 1, qd = 4, Md = 8, jd = 16, zd = 1, Wd = 2, Ei = "[", Fs = "[!", pi = "[?", Bs = "]", Jo = {}, tr = Symbol(), Li = "http://www.w3.org/1999/xhtml", Rd = !1;
var Hs = Array.isArray, Ad = Array.prototype.indexOf, Ko = Array.prototype.includes, Va = Array.from, Ea = Object.keys, La = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Cd = Object.getOwnPropertyDescriptors, Od = Object.prototype, $d = Array.prototype, Di = Object.getPrototypeOf, hi = Object.isExtensible;
const Ao = () => {
};
function Ed(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ii() {
  var e, t, n = new Promise((o, a) => {
    e = o, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ld(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const o of e)
    if (n.push(o), n.length === t) break;
  return n;
}
const Jt = 2, Zo = 4, Ua = 8, Ni = 1 << 24, eo = 16, Kr = 32, Kn = 64, us = 128, Ar = 512, Ht = 1024, ir = 2048, ln = 4096, qr = 8192, Cr = 16384, to = 32768, vs = 1 << 25, Mo = 65536, mi = 1 << 17, Dd = 1 << 18, Co = 1 << 19, Id = 1 << 20, sn = 1 << 25, jo = 65536, gs = 1 << 21, Ys = 1 << 22, Un = 1 << 23, So = Symbol("$state"), Fi = Symbol("legacy props"), Nd = Symbol(""), _n = new class extends Error {
  constructor() {
    super(...arguments);
    _t(this, "name", "StaleReactionError");
    _t(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ci;
const Bi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ci = globalThis.document) != null && Ci.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), _a = 3, oa = 8;
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Fd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bd(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Hd(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vd(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ud() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gd(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ec() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function tc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ze = !1;
function jn(e) {
  Ze = e;
}
let Le;
function cr(e) {
  if (e === null)
    throw Xa(), Jo;
  return Le = e;
}
function Sa() {
  return cr(/* @__PURE__ */ cn(Le));
}
function v(e) {
  if (Ze) {
    if (/* @__PURE__ */ cn(Le) !== null)
      throw Xa(), Jo;
    Le = e;
  }
}
function Rr(e = 1) {
  if (Ze) {
    for (var t = e, n = Le; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n);
    Le = n;
  }
}
function Da(e = !0) {
  for (var t = 0, n = Le; ; ) {
    if (n.nodeType === oa) {
      var o = (
        /** @type {Comment} */
        n.data
      );
      if (o === Bs) {
        if (t === 0) return n;
        t -= 1;
      } else (o === Ei || o === Fs || // "[1", "[2", etc. for if blocks
      o[0] === "[" && !isNaN(Number(o.slice(1)))) && (t += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n)
    );
    e && n.remove(), n = a;
  }
}
function Yi(e) {
  if (!e || e.nodeType !== oa)
    throw Xa(), Jo;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Vi(e) {
  return e === this.v;
}
function rc(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ui(e) {
  return !rc(e, this.v);
}
let nc = !1, vr = null;
function Qo(e) {
  vr = e;
}
function St(e, t = !1, n) {
  vr = {
    p: vr,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      Xe
    ),
    l: null
  };
}
function Pt(e) {
  var t = (
    /** @type {ComponentContext} */
    vr
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var o of n)
      xl(o);
  }
  return e !== void 0 && (t.x = e), t.i = !0, vr = t.p, e ?? /** @type {T} */
  {};
}
function Xi() {
  return !0;
}
let mo = [];
function Gi() {
  var e = mo;
  mo = [], Ed(e);
}
function zn(e) {
  if (mo.length === 0 && !da) {
    var t = mo;
    queueMicrotask(() => {
      t === mo && Gi();
    });
  }
  mo.push(e);
}
function oc() {
  for (; mo.length > 0; )
    Gi();
}
function Ji(e) {
  var t = Xe;
  if (t === null)
    return Ye.f |= Un, e;
  if ((t.f & to) === 0 && (t.f & Zo) === 0)
    throw e;
  Vn(e, t);
}
function Vn(e, t) {
  for (; t !== null; ) {
    if ((t.f & us) !== 0) {
      if ((t.f & to) === 0)
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
const ac = -7169;
function Lt(e, t) {
  e.f = e.f & ac | t;
}
function Vs(e) {
  (e.f & Ar) !== 0 || e.deps === null ? Lt(e, Ht) : Lt(e, ln);
}
function Ki(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Jt) === 0 || (t.f & jo) === 0 || (t.f ^= jo, Ki(
        /** @type {Derived} */
        t.deps
      ));
}
function Zi(e, t, n) {
  (e.f & ir) !== 0 ? t.add(e) : (e.f & ln) !== 0 && n.add(e), Ki(e.deps), Lt(e, Ht);
}
let ja = !1;
function sc(e) {
  var t = ja;
  try {
    return ja = !1, [e(), ja];
  } finally {
    ja = t;
  }
}
const ho = /* @__PURE__ */ new Set();
let Ce = null, rr = null, ps = null, da = !1, os = !1, No = null, Ra = null;
var fi = 0;
let ic = 1;
var Bo, Ho, Yo, Vo, ma, _r, bo, Sn, Pn, Uo, lr, hs, ms, fs, ws, Qi;
const Na = class Na {
  constructor() {
    Oe(this, lr);
    // for debugging. TODO remove once async is stable
    _t(this, "id", ic++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    _t(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    _t(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Oe(this, Bo, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Oe(this, Ho, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Oe(this, Yo, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    Oe(this, Vo, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Oe(this, ma, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    Oe(this, _r, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Oe(this, bo, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Oe(this, Sn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Oe(this, Pn, /* @__PURE__ */ new Map());
    _t(this, "is_fork", !1);
    Oe(this, Uo, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    T(this, Pn).has(t) || T(this, Pn).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = T(this, Pn).get(t);
    if (n) {
      T(this, Pn).delete(t);
      for (var o of n.d)
        Lt(o, ir), this.schedule(o);
      for (o of n.m)
        Lt(o, ln), this.schedule(o);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, n) {
    n !== tr && !this.previous.has(t) && this.previous.set(t, n), (t.f & Un) === 0 && (this.current.set(t, t.v), rr == null || rr.set(t, t.v));
  }
  activate() {
    Ce = this;
  }
  deactivate() {
    Ce = null, rr = null;
  }
  flush() {
    try {
      os = !0, Ce = this, yt(this, lr, ms).call(this);
    } finally {
      fi = 0, ps = null, No = null, Ra = null, os = !1, Ce = null, rr = null, Xn.clear();
    }
  }
  discard() {
    for (const t of T(this, Ho)) t(this);
    T(this, Ho).clear(), ho.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    Re(this, Yo, T(this, Yo) + 1), t && Re(this, Vo, T(this, Vo) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n) {
    Re(this, Yo, T(this, Yo) - 1), t && Re(this, Vo, T(this, Vo) - 1), !(T(this, Uo) || n) && (Re(this, Uo, !0), zn(() => {
      Re(this, Uo, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const o of t)
      T(this, bo).add(o);
    for (const o of n)
      T(this, Sn).add(o);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    T(this, Bo).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    T(this, Ho).add(t);
  }
  settled() {
    return (T(this, ma) ?? Re(this, ma, Ii())).promise;
  }
  static ensure() {
    if (Ce === null) {
      const t = Ce = new Na();
      os || (ho.add(Ce), da || zn(() => {
        Ce === t && t.flush();
      }));
    }
    return Ce;
  }
  apply() {
    {
      rr = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var a;
    if (ps = t, (a = t.b) != null && a.is_pending && (t.f & (Zo | Ua | Ni)) !== 0 && (t.f & to) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var o = n.f;
      if (No !== null && n === Xe && (Ye === null || (Ye.f & Jt) === 0))
        return;
      if ((o & (Kn | Kr)) !== 0) {
        if ((o & Ht) === 0)
          return;
        n.f ^= Ht;
      }
    }
    T(this, _r).push(n);
  }
};
Bo = new WeakMap(), Ho = new WeakMap(), Yo = new WeakMap(), Vo = new WeakMap(), ma = new WeakMap(), _r = new WeakMap(), bo = new WeakMap(), Sn = new WeakMap(), Pn = new WeakMap(), Uo = new WeakMap(), lr = new WeakSet(), hs = function() {
  return this.is_fork || T(this, Vo) > 0;
}, ms = function() {
  var d, c;
  if (fi++ > 1e3 && (ho.delete(this), lc()), !yt(this, lr, hs).call(this)) {
    for (const u of T(this, bo))
      T(this, Sn).delete(u), Lt(u, ir), this.schedule(u);
    for (const u of T(this, Sn))
      Lt(u, ln), this.schedule(u);
  }
  const t = T(this, _r);
  Re(this, _r, []), this.apply();
  var n = No = [], o = [], a = Ra = [];
  for (const u of t)
    try {
      yt(this, lr, fs).call(this, u, n, o);
    } catch (y) {
      throw nl(u), y;
    }
  if (Ce = null, a.length > 0) {
    var s = Na.ensure();
    for (const u of a)
      s.schedule(u);
  }
  if (No = null, Ra = null, yt(this, lr, hs).call(this)) {
    yt(this, lr, ws).call(this, o), yt(this, lr, ws).call(this, n);
    for (const [u, y] of T(this, Pn))
      rl(u, y);
  } else {
    T(this, Yo) === 0 && ho.delete(this), T(this, bo).clear(), T(this, Sn).clear();
    for (const u of T(this, Bo)) u(this);
    T(this, Bo).clear(), wi(o), wi(n), (d = T(this, ma)) == null || d.resolve();
  }
  var i = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Ce
  );
  if (T(this, _r).length > 0) {
    const u = i ?? (i = this);
    T(u, _r).push(...T(this, _r).filter((y) => !T(u, _r).includes(y)));
  }
  i !== null && (ho.add(i), yt(c = i, lr, ms).call(c)), ho.has(this) || yt(this, lr, Qi).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
fs = function(t, n, o) {
  t.f ^= Ht;
  for (var a = t.first; a !== null; ) {
    var s = a.f, i = (s & (Kr | Kn)) !== 0, d = i && (s & Ht) !== 0, c = d || (s & qr) !== 0 || T(this, Pn).has(a);
    if (!c && a.fn !== null) {
      i ? a.f ^= Ht : (s & Zo) !== 0 ? n.push(a) : Ta(a) && ((s & eo) !== 0 && T(this, Sn).add(a), ta(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var y = a.next;
      if (y !== null) {
        a = y;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ws = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Zi(t[n], T(this, bo), T(this, Sn));
}, Qi = function() {
  var c;
  for (const u of ho) {
    var t = u.id < this.id, n = [];
    for (const [y, P] of this.current) {
      if (u.current.has(y))
        if (t && P !== u.current.get(y))
          u.current.set(y, P);
        else
          continue;
      n.push(y);
    }
    var o = [...u.current.keys()].filter((y) => !this.current.has(y));
    if (o.length === 0)
      t && u.discard();
    else if (n.length > 0) {
      u.activate();
      var a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var i of n)
        el(i, o, a, s);
      if (T(u, _r).length > 0) {
        u.apply();
        for (var d of T(u, _r))
          yt(c = u, lr, fs).call(c, d, [], []);
        Re(u, _r, []);
      }
      u.deactivate();
    }
  }
};
let Zn = Na;
function h(e) {
  var t = da;
  da = !0;
  try {
    for (var n; ; ) {
      if (oc(), Ce === null)
        return (
          /** @type {T} */
          n
        );
      Ce.flush();
    }
  } finally {
    da = t;
  }
}
function lc() {
  try {
    Ud();
  } catch (e) {
    Vn(e, ps);
  }
}
let Yr = null;
function wi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var o = e[n++];
      if ((o.f & (Cr | qr)) === 0 && Ta(o) && (Yr = /* @__PURE__ */ new Set(), ta(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && _l(o), (Yr == null ? void 0 : Yr.size) > 0)) {
        Xn.clear();
        for (const a of Yr) {
          if ((a.f & (Cr | qr)) !== 0) continue;
          const s = [a];
          let i = a.parent;
          for (; i !== null; )
            Yr.has(i) && (Yr.delete(i), s.push(i)), i = i.parent;
          for (let d = s.length - 1; d >= 0; d--) {
            const c = s[d];
            (c.f & (Cr | qr)) === 0 && ta(c);
          }
        }
        Yr.clear();
      }
    }
    Yr = null;
  }
}
function el(e, t, n, o) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & Jt) !== 0 ? el(
        /** @type {Derived} */
        a,
        t,
        n,
        o
      ) : (s & (Ys | eo)) !== 0 && (s & ir) === 0 && tl(a, t, o) && (Lt(a, ir), Us(
        /** @type {Effect} */
        a
      ));
    }
}
function tl(e, t, n) {
  const o = n.get(e);
  if (o !== void 0) return o;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Ko.call(t, a))
        return !0;
      if ((a.f & Jt) !== 0 && tl(
        /** @type {Derived} */
        a,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Us(e) {
  Ce.schedule(e);
}
function rl(e, t) {
  if (!((e.f & Kr) !== 0 && (e.f & Ht) !== 0)) {
    (e.f & ir) !== 0 ? t.d.push(e) : (e.f & ln) !== 0 && t.m.push(e), Lt(e, Ht);
    for (var n = e.first; n !== null; )
      rl(n, t), n = n.next;
  }
}
function nl(e) {
  Lt(e, Ht);
  for (var t = e.first; t !== null; )
    nl(t), t = t.next;
}
function dc(e) {
  let t = 0, n = zo(0), o;
  return () => {
    Js() && (r(n), Za(() => (t === 0 && (o = ro(() => e(() => ca(n)))), t += 1, () => {
      zn(() => {
        t -= 1, t === 0 && (o == null || o(), o = void 0, ca(n));
      });
    })));
  };
}
var cc = Mo | Co;
function uc(e, t, n, o) {
  new vc(e, t, n, o);
}
var Sr, fa, rn, yo, pr, nn, Pr, Ur, Tn, xo, Hn, Xo, wa, ba, qn, Fa, jt, ol, al, sl, bs, Aa, Ca, ys;
class vc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, o, a) {
    Oe(this, jt);
    /** @type {Boundary | null} */
    _t(this, "parent");
    _t(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    _t(this, "transform_error");
    /** @type {TemplateNode} */
    Oe(this, Sr);
    /** @type {TemplateNode | null} */
    Oe(this, fa, Ze ? Le : null);
    /** @type {BoundaryProps} */
    Oe(this, rn);
    /** @type {((anchor: Node) => void)} */
    Oe(this, yo);
    /** @type {Effect} */
    Oe(this, pr);
    /** @type {Effect | null} */
    Oe(this, nn, null);
    /** @type {Effect | null} */
    Oe(this, Pr, null);
    /** @type {Effect | null} */
    Oe(this, Ur, null);
    /** @type {DocumentFragment | null} */
    Oe(this, Tn, null);
    Oe(this, xo, 0);
    Oe(this, Hn, 0);
    Oe(this, Xo, !1);
    /** @type {Set<Effect>} */
    Oe(this, wa, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Oe(this, ba, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Oe(this, qn, null);
    Oe(this, Fa, dc(() => (Re(this, qn, zo(T(this, xo))), () => {
      Re(this, qn, null);
    })));
    var s;
    Re(this, Sr, t), Re(this, rn, n), Re(this, yo, (i) => {
      var d = (
        /** @type {Effect} */
        Xe
      );
      d.b = this, d.f |= us, o(i);
    }), this.parent = /** @type {Effect} */
    Xe.b, this.transform_error = a ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((i) => i), Re(this, pr, Qa(() => {
      if (Ze) {
        const i = (
          /** @type {Comment} */
          T(this, fa)
        );
        Sa();
        const d = i.data === Fs;
        if (i.data.startsWith(pi)) {
          const u = JSON.parse(i.data.slice(pi.length));
          yt(this, jt, al).call(this, u);
        } else d ? yt(this, jt, sl).call(this) : yt(this, jt, ol).call(this);
      } else
        yt(this, jt, bs).call(this);
    }, cc)), Ze && Re(this, Sr, Le);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Zi(t, T(this, wa), T(this, ba));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!T(this, rn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    yt(this, jt, ys).call(this, t, n), Re(this, xo, T(this, xo) + t), !(!T(this, qn) || T(this, Xo)) && (Re(this, Xo, !0), zn(() => {
      Re(this, Xo, !1), T(this, qn) && ea(T(this, qn), T(this, xo));
    }));
  }
  get_effect_pending() {
    return T(this, Fa).call(this), r(
      /** @type {Source<number>} */
      T(this, qn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = T(this, rn).onerror;
    let o = T(this, rn).failed;
    if (!n && !o)
      throw t;
    T(this, nn) && (ur(T(this, nn)), Re(this, nn, null)), T(this, Pr) && (ur(T(this, Pr)), Re(this, Pr, null)), T(this, Ur) && (ur(T(this, Ur)), Re(this, Ur, null)), Ze && (cr(
      /** @type {TemplateNode} */
      T(this, fa)
    ), Rr(), cr(Da()));
    var a = !1, s = !1;
    const i = () => {
      if (a) {
        tc();
        return;
      }
      a = !0, s && Qd(), T(this, Ur) !== null && Po(T(this, Ur), () => {
        Re(this, Ur, null);
      }), yt(this, jt, Ca).call(this, () => {
        yt(this, jt, bs).call(this);
      });
    }, d = (c) => {
      try {
        s = !0, n == null || n(c, i), s = !1;
      } catch (u) {
        Vn(u, T(this, pr) && T(this, pr).parent);
      }
      o && Re(this, Ur, yt(this, jt, Ca).call(this, () => {
        try {
          return Wr(() => {
            var u = (
              /** @type {Effect} */
              Xe
            );
            u.b = this, u.f |= us, o(
              T(this, Sr),
              () => c,
              () => i
            );
          });
        } catch (u) {
          return Vn(
            u,
            /** @type {Effect} */
            T(this, pr).parent
          ), null;
        }
      }));
    };
    zn(() => {
      var c;
      try {
        c = this.transform_error(t);
      } catch (u) {
        Vn(u, T(this, pr) && T(this, pr).parent);
        return;
      }
      c !== null && typeof c == "object" && typeof /** @type {any} */
      c.then == "function" ? c.then(
        d,
        /** @param {unknown} e */
        (u) => Vn(u, T(this, pr) && T(this, pr).parent)
      ) : d(c);
    });
  }
}
Sr = new WeakMap(), fa = new WeakMap(), rn = new WeakMap(), yo = new WeakMap(), pr = new WeakMap(), nn = new WeakMap(), Pr = new WeakMap(), Ur = new WeakMap(), Tn = new WeakMap(), xo = new WeakMap(), Hn = new WeakMap(), Xo = new WeakMap(), wa = new WeakMap(), ba = new WeakMap(), qn = new WeakMap(), Fa = new WeakMap(), jt = new WeakSet(), ol = function() {
  try {
    Re(this, nn, Wr(() => T(this, yo).call(this, T(this, Sr))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
al = function(t) {
  const n = T(this, rn).failed;
  n && Re(this, Ur, Wr(() => {
    n(
      T(this, Sr),
      () => t,
      () => () => {
      }
    );
  }));
}, sl = function() {
  const t = T(this, rn).pending;
  t && (this.is_pending = !0, Re(this, Pr, Wr(() => t(T(this, Sr)))), zn(() => {
    var n = Re(this, Tn, document.createDocumentFragment()), o = mr();
    n.append(o), Re(this, nn, yt(this, jt, Ca).call(this, () => Wr(() => T(this, yo).call(this, o)))), T(this, Hn) === 0 && (T(this, Sr).before(n), Re(this, Tn, null), Po(
      /** @type {Effect} */
      T(this, Pr),
      () => {
        Re(this, Pr, null);
      }
    ), yt(this, jt, Aa).call(
      this,
      /** @type {Batch} */
      Ce
    ));
  }));
}, bs = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Re(this, Hn, 0), Re(this, xo, 0), Re(this, nn, Wr(() => {
      T(this, yo).call(this, T(this, Sr));
    })), T(this, Hn) > 0) {
      var t = Re(this, Tn, document.createDocumentFragment());
      ei(T(this, nn), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        T(this, rn).pending
      );
      Re(this, Pr, Wr(() => n(T(this, Sr))));
    } else
      yt(this, jt, Aa).call(
        this,
        /** @type {Batch} */
        Ce
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Aa = function(t) {
  this.is_pending = !1, t.transfer_effects(T(this, wa), T(this, ba));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ca = function(t) {
  var n = Xe, o = Ye, a = vr;
  dn(T(this, pr)), $r(T(this, pr)), Qo(T(this, pr).ctx);
  try {
    return Zn.ensure(), t();
  } catch (s) {
    return Ji(s), null;
  } finally {
    dn(n), $r(o), Qo(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ys = function(t, n) {
  var o;
  if (!this.has_pending_snippet()) {
    this.parent && yt(o = this.parent, jt, ys).call(o, t, n);
    return;
  }
  Re(this, Hn, T(this, Hn) + t), T(this, Hn) === 0 && (yt(this, jt, Aa).call(this, n), T(this, Pr) && Po(T(this, Pr), () => {
    Re(this, Pr, null);
  }), T(this, Tn) && (T(this, Sr).before(T(this, Tn)), Re(this, Tn, null)));
};
function gc(e, t, n, o) {
  const a = Ga;
  var s = e.filter((b) => !b.settled);
  if (n.length === 0 && s.length === 0) {
    o(t.map(a));
    return;
  }
  var i = (
    /** @type {Effect} */
    Xe
  ), d = pc(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((b) => b.promise)) : null;
  function u(b) {
    d();
    try {
      o(b);
    } catch (z) {
      (i.f & Cr) === 0 && Vn(z, i);
    }
    Ia();
  }
  if (n.length === 0) {
    c.then(() => u(t.map(a)));
    return;
  }
  var y = il();
  function P() {
    Promise.all(n.map((b) => /* @__PURE__ */ hc(b))).then((b) => u([...t.map(a), ...b])).catch((b) => Vn(b, i)).finally(() => y());
  }
  c ? c.then(() => {
    d(), P(), Ia();
  }) : P();
}
function pc() {
  var e = (
    /** @type {Effect} */
    Xe
  ), t = Ye, n = vr, o = (
    /** @type {Batch} */
    Ce
  );
  return function(s = !0) {
    dn(e), $r(t), Qo(n), s && (e.f & Cr) === 0 && (o == null || o.activate(), o == null || o.apply());
  };
}
function Ia(e = !0) {
  dn(null), $r(null), Qo(null), e && (Ce == null || Ce.deactivate());
}
function il() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    Xe.b
  ), t = (
    /** @type {Batch} */
    Ce
  ), n = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(n), (o = !1) => {
    e.update_pending_count(-1, t), t.decrement(n, o);
  };
}
// @__NO_SIDE_EFFECTS__
function Ga(e) {
  var t = Jt | ir, n = Ye !== null && (Ye.f & Jt) !== 0 ? (
    /** @type {Derived} */
    Ye
  ) : null;
  return Xe !== null && (Xe.f |= Co), {
    ctx: vr,
    deps: null,
    effects: null,
    equals: Vi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      tr
    ),
    wv: 0,
    parent: n ?? Xe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hc(e, t, n) {
  let o = (
    /** @type {Effect | null} */
    Xe
  );
  o === null && Fd();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = zo(
    /** @type {V} */
    tr
  ), i = !Ye, d = /* @__PURE__ */ new Map();
  return Pc(() => {
    var z;
    var c = (
      /** @type {Effect} */
      Xe
    ), u = Ii();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Ia);
    } catch (j) {
      u.reject(j), Ia();
    }
    var y = (
      /** @type {Batch} */
      Ce
    );
    if (i) {
      if ((c.f & to) !== 0)
        var P = il();
      if (
        /** @type {Boundary} */
        o.b.is_rendered()
      )
        (z = d.get(y)) == null || z.reject(_n), d.delete(y);
      else {
        for (const j of d.values())
          j.reject(_n);
        d.clear();
      }
      d.set(y, u);
    }
    const b = (j, R = void 0) => {
      if (P) {
        var x = R === _n;
        P(x);
      }
      if (!(R === _n || (c.f & Cr) !== 0)) {
        if (y.activate(), R)
          s.f |= Un, ea(s, R);
        else {
          (s.f & Un) !== 0 && (s.f ^= Un), ea(s, j);
          for (const [k, S] of d) {
            if (d.delete(k), k === y) break;
            S.reject(_n);
          }
        }
        y.deactivate();
      }
    };
    u.promise.then(b, (j) => b(null, j || "unknown"));
  }), Ks(() => {
    for (const c of d.values())
      c.reject(_n);
  }), new Promise((c) => {
    function u(y) {
      function P() {
        y === a ? c(s) : u(a);
      }
      y.then(P, P);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = /* @__PURE__ */ Ga(e);
  return Tl(t), t;
}
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const t = /* @__PURE__ */ Ga(e);
  return t.equals = Ui, t;
}
function mc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ur(
        /** @type {Effect} */
        t[n]
      );
  }
}
function fc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Jt) === 0)
      return (t.f & Cr) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Xs(e) {
  var t, n = Xe;
  dn(fc(e));
  try {
    e.f &= ~jo, mc(e), t = zl(e);
  } finally {
    dn(n);
  }
  return t;
}
function dl(e) {
  var t = e.v, n = Xs(e);
  if (!e.equals(n) && (e.wv = Ml(), (!(Ce != null && Ce.is_fork) || e.deps === null) && (e.v = n, Ce == null || Ce.capture(e, t), e.deps === null))) {
    Lt(e, Ht);
    return;
  }
  Qn || (rr !== null ? (Js() || Ce != null && Ce.is_fork) && rr.set(e, n) : Vs(e));
}
function wc(e) {
  var t, n;
  if (e.effects !== null)
    for (const o of e.effects)
      (o.teardown || o.ac) && ((t = o.teardown) == null || t.call(o), (n = o.ac) == null || n.abort(_n), o.teardown = Ao, o.ac = null, ha(o, 0), Zs(o));
}
function cl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && ta(t);
}
let xs = /* @__PURE__ */ new Set();
const Xn = /* @__PURE__ */ new Map();
let ul = !1;
function zo(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Vi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  const n = zo(e);
  return Tl(n), n;
}
// @__NO_SIDE_EFFECTS__
function vl(e, t = !1, n = !0) {
  const o = zo(e);
  return t || (o.equals = Ui), o;
}
function q(e, t, n = !1) {
  Ye !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Gr || (Ye.f & mi) !== 0) && Xi() && (Ye.f & (Jt | eo | Ys | mi)) !== 0 && (Or === null || !Ko.call(Or, e)) && Zd();
  let o = n ? dt(t) : t;
  return ea(e, o, Ra);
}
function ea(e, t, n = null) {
  if (!e.equals(t)) {
    var o = e.v;
    Qn ? Xn.set(e, t) : Xn.set(e, o), e.v = t;
    var a = Zn.ensure();
    if (a.capture(e, o), (e.f & Jt) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ir) !== 0 && Xs(s), rr === null && Vs(s);
    }
    e.wv = Ml(), gl(e, ir, n), Xe !== null && (Xe.f & Ht) !== 0 && (Xe.f & (Kr | Kn)) === 0 && (jr === null ? Mc([e]) : jr.push(e)), !a.is_fork && xs.size > 0 && !ul && bc();
  }
  return t;
}
function bc() {
  ul = !1;
  for (const e of xs)
    (e.f & Ht) !== 0 && Lt(e, ln), Ta(e) && ta(e);
  xs.clear();
}
function ca(e) {
  q(e, e.v + 1);
}
function gl(e, t, n) {
  var o = e.reactions;
  if (o !== null)
    for (var a = o.length, s = 0; s < a; s++) {
      var i = o[s], d = i.f, c = (d & ir) === 0;
      if (c && Lt(i, t), (d & Jt) !== 0) {
        var u = (
          /** @type {Derived} */
          i
        );
        rr == null || rr.delete(u), (d & jo) === 0 && (d & Ar && (i.f |= jo), gl(u, ln, n));
      } else if (c) {
        var y = (
          /** @type {Effect} */
          i
        );
        (d & eo) !== 0 && Yr !== null && Yr.add(y), n !== null ? n.push(y) : Us(y);
      }
    }
}
function dt(e) {
  if (typeof e != "object" || e === null || So in e)
    return e;
  const t = Di(e);
  if (t !== Od && t !== $d)
    return e;
  var n = /* @__PURE__ */ new Map(), o = Hs(e), a = /* @__PURE__ */ ne(0), s = To, i = (d) => {
    if (To === s)
      return d();
    var c = Ye, u = To;
    $r(null), ki(s);
    var y = d();
    return $r(c), ki(u), y;
  };
  return o && n.set("length", /* @__PURE__ */ ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Jd();
        var y = n.get(c);
        return y === void 0 ? i(() => {
          var P = /* @__PURE__ */ ne(u.value);
          return n.set(c, P), P;
        }) : q(y, u.value, !0), !0;
      },
      deleteProperty(d, c) {
        var u = n.get(c);
        if (u === void 0) {
          if (c in d) {
            const y = i(() => /* @__PURE__ */ ne(tr));
            n.set(c, y), ca(a);
          }
        } else
          q(u, tr), ca(a);
        return !0;
      },
      get(d, c, u) {
        var z;
        if (c === So)
          return e;
        var y = n.get(c), P = c in d;
        if (y === void 0 && (!P || (z = _o(d, c)) != null && z.writable) && (y = i(() => {
          var j = dt(P ? d[c] : tr), R = /* @__PURE__ */ ne(j);
          return R;
        }), n.set(c, y)), y !== void 0) {
          var b = r(y);
          return b === tr ? void 0 : b;
        }
        return Reflect.get(d, c, u);
      },
      getOwnPropertyDescriptor(d, c) {
        var u = Reflect.getOwnPropertyDescriptor(d, c);
        if (u && "value" in u) {
          var y = n.get(c);
          y && (u.value = r(y));
        } else if (u === void 0) {
          var P = n.get(c), b = P == null ? void 0 : P.v;
          if (P !== void 0 && b !== tr)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return u;
      },
      has(d, c) {
        var b;
        if (c === So)
          return !0;
        var u = n.get(c), y = u !== void 0 && u.v !== tr || Reflect.has(d, c);
        if (u !== void 0 || Xe !== null && (!y || (b = _o(d, c)) != null && b.writable)) {
          u === void 0 && (u = i(() => {
            var z = y ? dt(d[c]) : tr, j = /* @__PURE__ */ ne(z);
            return j;
          }), n.set(c, u));
          var P = r(u);
          if (P === tr)
            return !1;
        }
        return y;
      },
      set(d, c, u, y) {
        var g;
        var P = n.get(c), b = c in d;
        if (o && c === "length")
          for (var z = u; z < /** @type {Source<number>} */
          P.v; z += 1) {
            var j = n.get(z + "");
            j !== void 0 ? q(j, tr) : z in d && (j = i(() => /* @__PURE__ */ ne(tr)), n.set(z + "", j));
          }
        if (P === void 0)
          (!b || (g = _o(d, c)) != null && g.writable) && (P = i(() => /* @__PURE__ */ ne(void 0)), q(P, dt(u)), n.set(c, P));
        else {
          b = P.v !== tr;
          var R = i(() => dt(u));
          q(P, R);
        }
        var x = Reflect.getOwnPropertyDescriptor(d, c);
        if (x != null && x.set && x.set.call(y, u), !b) {
          if (o && typeof c == "string") {
            var k = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(c);
            Number.isInteger(S) && S >= k.v && q(k, S + 1);
          }
          ca(a);
        }
        return !0;
      },
      ownKeys(d) {
        r(a);
        var c = Reflect.ownKeys(d).filter((P) => {
          var b = n.get(P);
          return b === void 0 || b.v !== tr;
        });
        for (var [u, y] of n)
          y.v !== tr && !(u in d) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        Kd();
      }
    }
  );
}
function bi(e) {
  try {
    if (e !== null && typeof e == "object" && So in e)
      return e[So];
  } catch {
  }
  return e;
}
function yc(e, t) {
  return Object.is(bi(e), bi(t));
}
var ua, pl, hl, ml;
function ks() {
  if (ua === void 0) {
    ua = window, pl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    hl = _o(t, "firstChild").get, ml = _o(t, "nextSibling").get, hi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), hi(n) && (n.__t = void 0);
  }
}
function mr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Wo(e) {
  return (
    /** @type {TemplateNode | null} */
    hl.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return (
    /** @type {TemplateNode | null} */
    ml.call(e)
  );
}
function p(e, t) {
  if (!Ze)
    return /* @__PURE__ */ Wo(e);
  var n = /* @__PURE__ */ Wo(Le);
  if (n === null)
    n = Le.appendChild(mr());
  else if (t && n.nodeType !== _a) {
    var o = mr();
    return n == null || n.before(o), cr(o), o;
  }
  return t && Ja(
    /** @type {Text} */
    n
  ), cr(n), n;
}
function Mt(e, t = !1) {
  if (!Ze) {
    var n = /* @__PURE__ */ Wo(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ cn(n) : n;
  }
  if (t) {
    if ((Le == null ? void 0 : Le.nodeType) !== _a) {
      var o = mr();
      return Le == null || Le.before(o), cr(o), o;
    }
    Ja(
      /** @type {Text} */
      Le
    );
  }
  return Le;
}
function w(e, t = 1, n = !1) {
  let o = Ze ? Le : e;
  for (var a; t--; )
    a = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(o);
  if (!Ze)
    return o;
  if (n) {
    if ((o == null ? void 0 : o.nodeType) !== _a) {
      var s = mr();
      return o === null ? a == null || a.after(s) : o.before(s), cr(s), s;
    }
    Ja(
      /** @type {Text} */
      o
    );
  }
  return cr(o), o;
}
function fl(e) {
  e.textContent = "";
}
function wl() {
  return !1;
}
function Gs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Li, e, void 0)
  );
}
function Ja(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === _a; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let yi = !1;
function bl() {
  yi || (yi = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ka(e) {
  var t = Ye, n = Xe;
  $r(null), dn(null);
  try {
    return e();
  } finally {
    $r(t), dn(n);
  }
}
function yl(e, t, n, o = n) {
  e.addEventListener(t, () => Ka(n));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), o(!0);
  } : e.__on_r = () => o(!0), bl();
}
function xc(e) {
  Xe === null && (Ye === null && Vd(), Yd()), Qn && Hd();
}
function kc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function un(e, t) {
  var n = Xe;
  n !== null && (n.f & qr) !== 0 && (e |= qr);
  var o = {
    ctx: vr,
    deps: null,
    nodes: null,
    f: e | ir | Ar,
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
  }, a = o;
  if ((e & Zo) !== 0)
    No !== null ? No.push(o) : Zn.ensure().schedule(o);
  else if (t !== null) {
    try {
      ta(o);
    } catch (i) {
      throw ur(o), i;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Co) === 0 && (a = a.first, (e & eo) !== 0 && (e & Mo) !== 0 && a !== null && (a.f |= Mo));
  }
  if (a !== null && (a.parent = n, n !== null && kc(a, n), Ye !== null && (Ye.f & Jt) !== 0 && (e & Kn) === 0)) {
    var s = (
      /** @type {Derived} */
      Ye
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return o;
}
function Js() {
  return Ye !== null && !Gr;
}
function Ks(e) {
  const t = un(Ua, null);
  return Lt(t, Ht), t.teardown = e, t;
}
function an(e) {
  xc();
  var t = (
    /** @type {Effect} */
    Xe.f
  ), n = !Ye && (t & Kr) !== 0 && (t & to) === 0;
  if (n) {
    var o = (
      /** @type {ComponentContext} */
      vr
    );
    (o.e ?? (o.e = [])).push(e);
  } else
    return xl(e);
}
function xl(e) {
  return un(Zo | Id, e);
}
function _c(e) {
  Zn.ensure();
  const t = un(Kn | Co, e);
  return () => {
    ur(t);
  };
}
function Sc(e) {
  Zn.ensure();
  const t = un(Kn | Co, e);
  return (n = {}) => new Promise((o) => {
    n.outro ? Po(t, () => {
      ur(t), o(void 0);
    }) : (ur(t), o(void 0));
  });
}
function Pa(e) {
  return un(Zo, e);
}
function Pc(e) {
  return un(Ys | Co, e);
}
function Za(e, t = 0) {
  return un(Ua | t, e);
}
function ve(e, t = [], n = [], o = []) {
  gc(o, t, n, (a) => {
    un(Ua, () => e(...a.map(r)));
  });
}
function Qa(e, t = 0) {
  var n = un(eo | t, e);
  return n;
}
function Wr(e) {
  return un(Kr | Co, e);
}
function kl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Qn, o = Ye;
    xi(!0), $r(null);
    try {
      t.call(null);
    } finally {
      xi(n), $r(o);
    }
  }
}
function Zs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && Ka(() => {
      a.abort(_n);
    });
    var o = n.next;
    (n.f & Kn) !== 0 ? n.parent = null : ur(n, t), n = o;
  }
}
function Tc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Kr) === 0 && ur(t), t = n;
  }
}
function ur(e, t = !0) {
  var n = !1;
  (t || (e.f & Dd) !== 0) && e.nodes !== null && e.nodes.end !== null && (qc(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Lt(e, vs), Zs(e, t && !n), ha(e, 0);
  var o = e.nodes && e.nodes.t;
  if (o !== null)
    for (const s of o)
      s.stop();
  kl(e), e.f ^= vs, e.f |= Cr;
  var a = e.parent;
  a !== null && a.first !== null && _l(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function qc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ cn(e);
    e.remove(), e = n;
  }
}
function _l(e) {
  var t = e.parent, n = e.prev, o = e.next;
  n !== null && (n.next = o), o !== null && (o.prev = n), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = n));
}
function Po(e, t, n = !0) {
  var o = [];
  Sl(e, o, !0);
  var a = () => {
    n && ur(e), t && t();
  }, s = o.length;
  if (s > 0) {
    var i = () => --s || a();
    for (var d of o)
      d.out(i);
  } else
    a();
}
function Sl(e, t, n) {
  if ((e.f & qr) === 0) {
    e.f ^= qr;
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const d of o)
        (d.is_global || n) && t.push(d);
    for (var a = e.first; a !== null; ) {
      var s = a.next, i = (a.f & Mo) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (a.f & Kr) !== 0 && (e.f & eo) !== 0;
      Sl(a, t, i ? n : !1), a = s;
    }
  }
}
function Qs(e) {
  Pl(e, !0);
}
function Pl(e, t) {
  if ((e.f & qr) !== 0) {
    e.f ^= qr, (e.f & Ht) === 0 && (Lt(e, ir), Zn.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var o = n.next, a = (n.f & Mo) !== 0 || (n.f & Kr) !== 0;
      Pl(n, a ? t : !1), n = o;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const i of s)
        (i.is_global || t) && i.in();
  }
}
function ei(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, o = e.nodes.end; n !== null; ) {
      var a = n === o ? null : /* @__PURE__ */ cn(n);
      t.append(n), n = a;
    }
}
let Oa = !1, Qn = !1;
function xi(e) {
  Qn = e;
}
let Ye = null, Gr = !1;
function $r(e) {
  Ye = e;
}
let Xe = null;
function dn(e) {
  Xe = e;
}
let Or = null;
function Tl(e) {
  Ye !== null && (Or === null ? Or = [e] : Or.push(e));
}
let hr = null, kr = 0, jr = null;
function Mc(e) {
  jr = e;
}
let ql = 1, fo = 0, To = fo;
function ki(e) {
  To = e;
}
function Ml() {
  return ++ql;
}
function Ta(e) {
  var t = e.f;
  if ((t & ir) !== 0)
    return !0;
  if (t & Jt && (e.f &= ~jo), (t & ln) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), o = n.length, a = 0; a < o; a++) {
      var s = n[a];
      if (Ta(
        /** @type {Derived} */
        s
      ) && dl(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ar) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    rr === null && Lt(e, Ht);
  }
  return !1;
}
function jl(e, t, n = !0) {
  var o = e.reactions;
  if (o !== null && !(Or !== null && Ko.call(Or, e)))
    for (var a = 0; a < o.length; a++) {
      var s = o[a];
      (s.f & Jt) !== 0 ? jl(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? Lt(s, ir) : (s.f & Ht) !== 0 && Lt(s, ln), Us(
        /** @type {Effect} */
        s
      ));
    }
}
function zl(e) {
  var R;
  var t = hr, n = kr, o = jr, a = Ye, s = Or, i = vr, d = Gr, c = To, u = e.f;
  hr = /** @type {null | Value[]} */
  null, kr = 0, jr = null, Ye = (u & (Kr | Kn)) === 0 ? e : null, Or = null, Qo(e.ctx), Gr = !1, To = ++fo, e.ac !== null && (Ka(() => {
    e.ac.abort(_n);
  }), e.ac = null);
  try {
    e.f |= gs;
    var y = (
      /** @type {Function} */
      e.fn
    ), P = y();
    e.f |= to;
    var b = e.deps, z = Ce == null ? void 0 : Ce.is_fork;
    if (hr !== null) {
      var j;
      if (z || ha(e, kr), b !== null && kr > 0)
        for (b.length = kr + hr.length, j = 0; j < hr.length; j++)
          b[kr + j] = hr[j];
      else
        e.deps = b = hr;
      if (Js() && (e.f & Ar) !== 0)
        for (j = kr; j < b.length; j++)
          ((R = b[j]).reactions ?? (R.reactions = [])).push(e);
    } else !z && b !== null && kr < b.length && (ha(e, kr), b.length = kr);
    if (Xi() && jr !== null && !Gr && b !== null && (e.f & (Jt | ln | ir)) === 0)
      for (j = 0; j < /** @type {Source[]} */
      jr.length; j++)
        jl(
          jr[j],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (fo++, a.deps !== null)
        for (let x = 0; x < n; x += 1)
          a.deps[x].rv = fo;
      if (t !== null)
        for (const x of t)
          x.rv = fo;
      jr !== null && (o === null ? o = jr : o.push(.../** @type {Source[]} */
      jr));
    }
    return (e.f & Un) !== 0 && (e.f ^= Un), P;
  } catch (x) {
    return Ji(x);
  } finally {
    e.f ^= gs, hr = t, kr = n, jr = o, Ye = a, Or = s, Qo(i), Gr = d, To = c;
  }
}
function jc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var o = Ad.call(n, e);
    if (o !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[o] = n[a], n.pop());
    }
  }
  if (n === null && (t.f & Jt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (hr === null || !Ko.call(hr, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ar) !== 0 && (s.f ^= Ar, s.f &= ~jo), Vs(s), wc(s), ha(s, 0);
  }
}
function ha(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var o = t; o < n.length; o++)
      jc(e, n[o]);
}
function ta(e) {
  var t = e.f;
  if ((t & Cr) === 0) {
    Lt(e, Ht);
    var n = Xe, o = Oa;
    Xe = e, Oa = !0;
    try {
      (t & (eo | Ni)) !== 0 ? Tc(e) : Zs(e), kl(e);
      var a = zl(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ql;
      var s;
      Rd && nc && (e.f & ir) !== 0 && e.deps;
    } finally {
      Oa = o, Xe = n;
    }
  }
}
async function Wl() {
  await Promise.resolve(), h();
}
function r(e) {
  var t = e.f, n = (t & Jt) !== 0;
  if (Ye !== null && !Gr) {
    var o = Xe !== null && (Xe.f & Cr) !== 0;
    if (!o && (Or === null || !Ko.call(Or, e))) {
      var a = Ye.deps;
      if ((Ye.f & gs) !== 0)
        e.rv < fo && (e.rv = fo, hr === null && a !== null && a[kr] === e ? kr++ : hr === null ? hr = [e] : hr.push(e));
      else {
        (Ye.deps ?? (Ye.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [Ye] : Ko.call(s, Ye) || s.push(Ye);
      }
    }
  }
  if (Qn && Xn.has(e))
    return Xn.get(e);
  if (n) {
    var i = (
      /** @type {Derived} */
      e
    );
    if (Qn) {
      var d = i.v;
      return ((i.f & Ht) === 0 && i.reactions !== null || Al(i)) && (d = Xs(i)), Xn.set(i, d), d;
    }
    var c = (i.f & Ar) === 0 && !Gr && Ye !== null && (Oa || (Ye.f & Ar) !== 0), u = (i.f & to) === 0;
    Ta(i) && (c && (i.f |= Ar), dl(i)), c && !u && (cl(i), Rl(i));
  }
  if (rr != null && rr.has(e))
    return rr.get(e);
  if ((e.f & Un) !== 0)
    throw e.v;
  return e.v;
}
function Rl(e) {
  if (e.f |= Ar, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Jt) !== 0 && (t.f & Ar) === 0 && (cl(
        /** @type {Derived} */
        t
      ), Rl(
        /** @type {Derived} */
        t
      ));
}
function Al(e) {
  if (e.v === tr) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xn.has(t) || (t.f & Jt) !== 0 && Al(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ro(e) {
  var t = Gr;
  try {
    return Gr = !0, e();
  } finally {
    Gr = t;
  }
}
const wo = Symbol("events"), Cl = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set();
function zc(e, t, n, o = {}) {
  function a(s) {
    if (o.capture || Ss.call(t, s), !s.cancelBubble)
      return Ka(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? zn(() => {
    t.addEventListener(e, a, o);
  }) : t.addEventListener(e, a, o), a;
}
function qo(e, t, n, o, a) {
  var s = { capture: o, passive: a }, i = zc(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ks(() => {
    t.removeEventListener(e, i, s);
  });
}
function he(e, t, n) {
  (t[wo] ?? (t[wo] = {}))[e] = n;
}
function Er(e) {
  for (var t = 0; t < e.length; t++)
    Cl.add(e[t]);
  for (var n of _s)
    n(e);
}
let _i = null;
function Ss(e) {
  var x, k;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, a = ((x = e.composedPath) == null ? void 0 : x.call(e)) || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  _i = e;
  var i = 0, d = _i === e && e[wo];
  if (d) {
    var c = a.indexOf(d);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[wo] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    c <= u && (i = c);
  }
  if (s = /** @type {Element} */
  a[i] || e.target, s !== t) {
    La(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var y = Ye, P = Xe;
    $r(null), dn(null);
    try {
      for (var b, z = []; s !== null; ) {
        var j = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var R = (k = s[wo]) == null ? void 0 : k[o];
          R != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && R.call(s, e);
        } catch (S) {
          b ? z.push(S) : b = S;
        }
        if (e.cancelBubble || j === t || j === null)
          break;
        s = j;
      }
      if (b) {
        for (let S of z)
          queueMicrotask(() => {
            throw S;
          });
        throw b;
      }
    } finally {
      e[wo] = t, delete e.currentTarget, $r(y), dn(P);
    }
  }
}
var Oi;
const as = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Oi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Oi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Wc(e) {
  return (
    /** @type {string} */
    (as == null ? void 0 : as.createHTML(e)) ?? e
  );
}
function Rc(e) {
  var t = Gs("template");
  return t.innerHTML = Wc(e.replaceAll("<!>", "<!---->")), t.content;
}
function Gn(e, t) {
  var n = (
    /** @type {Effect} */
    Xe
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & zd) !== 0, o = (t & Wd) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    if (Ze)
      return Gn(Le, null), Le;
    a === void 0 && (a = Rc(s ? e : "<!>" + e), n || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Wo(a)));
    var i = (
      /** @type {TemplateNode} */
      o || pl ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wo(i)
      ), c = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Gn(d, c);
    } else
      Gn(i, i);
    return i;
  };
}
function ra(e = "") {
  if (!Ze) {
    var t = mr(e + "");
    return Gn(t, t), t;
  }
  var n = Le;
  return n.nodeType !== _a ? (n.before(n = mr()), cr(n)) : Ja(
    /** @type {Text} */
    n
  ), Gn(n, n), n;
}
function Wn() {
  if (Ze)
    return Gn(Le, null), Le;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mr();
  return e.append(t, n), Gn(t, n), e;
}
function B(e, t) {
  if (Ze) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      Xe
    );
    ((n.f & to) === 0 || n.nodes.end === null) && (n.nodes.end = Le), Sa();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function es() {
  var e, t;
  if (Ze && Le && Le.nodeType === oa && ((e = Le.textContent) != null && e.startsWith("$"))) {
    const n = Le.textContent.substring(1);
    return Sa(), n;
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`;
}
const Ac = ["touchstart", "touchmove"];
function Cc(e) {
  return Ac.includes(e);
}
function de(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ol(e, t) {
  return $l(e, t);
}
function Oc(e, t) {
  ks(), t.intro = t.intro ?? !1;
  const n = t.target, o = Ze, a = Le;
  try {
    for (var s = /* @__PURE__ */ Wo(n); s && (s.nodeType !== oa || /** @type {Comment} */
    s.data !== Ei); )
      s = /* @__PURE__ */ cn(s);
    if (!s)
      throw Jo;
    jn(!0), cr(
      /** @type {Comment} */
      s
    );
    const i = $l(e, { ...t, anchor: s });
    return jn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i instanceof Error && i.message.split(`
`).some((d) => d.startsWith("https://svelte.dev/e/")))
      throw i;
    return i !== Jo && console.warn("Failed to hydrate: ", i), t.recover === !1 && Xd(), ks(), fl(n), jn(!1), Ol(e, t);
  } finally {
    jn(o), cr(a);
  }
}
const za = /* @__PURE__ */ new Map();
function $l(e, { target: t, anchor: n, props: o = {}, events: a, context: s, intro: i = !0, transformError: d }) {
  ks();
  var c = void 0, u = Sc(() => {
    var y = n ?? t.appendChild(mr());
    uc(
      /** @type {TemplateNode} */
      y,
      {
        pending: () => {
        }
      },
      (z) => {
        St({});
        var j = (
          /** @type {ComponentContext} */
          vr
        );
        if (s && (j.c = s), a && (o.$$events = a), Ze && Gn(
          /** @type {TemplateNode} */
          z,
          null
        ), c = e(z, o) || {}, Ze && (Xe.nodes.end = Le, Le === null || Le.nodeType !== oa || /** @type {Comment} */
        Le.data !== Bs))
          throw Xa(), Jo;
        Pt();
      },
      d
    );
    var P = /* @__PURE__ */ new Set(), b = (z) => {
      for (var j = 0; j < z.length; j++) {
        var R = z[j];
        if (!P.has(R)) {
          P.add(R);
          var x = Cc(R);
          for (const g of [t, document]) {
            var k = za.get(g);
            k === void 0 && (k = /* @__PURE__ */ new Map(), za.set(g, k));
            var S = k.get(R);
            S === void 0 ? (g.addEventListener(R, Ss, { passive: x }), k.set(R, 1)) : k.set(R, S + 1);
          }
        }
      }
    };
    return b(Va(Cl)), _s.add(b), () => {
      var x;
      for (var z of P)
        for (const k of [t, document]) {
          var j = (
            /** @type {Map<string, number>} */
            za.get(k)
          ), R = (
            /** @type {number} */
            j.get(z)
          );
          --R == 0 ? (k.removeEventListener(z, Ss), j.delete(z), j.size === 0 && za.delete(k)) : j.set(z, R);
        }
      _s.delete(b), y !== n && ((x = y.parentNode) == null || x.removeChild(y));
    };
  });
  return Ps.set(c, u), c;
}
let Ps = /* @__PURE__ */ new WeakMap();
function $c(e, t) {
  const n = Ps.get(e);
  return n ? (Ps.delete(e), n(t)) : Promise.resolve();
}
var Xr, on, Tr, ko, ya, xa, Ba;
class El {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    _t(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Oe(this, Xr, /* @__PURE__ */ new Map());
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
    Oe(this, on, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Oe(this, Tr, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Oe(this, ko, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Oe(this, ya, !0);
    /**
     * @param {Batch} batch
     */
    Oe(this, xa, (t) => {
      if (T(this, Xr).has(t)) {
        var n = (
          /** @type {Key} */
          T(this, Xr).get(t)
        ), o = T(this, on).get(n);
        if (o)
          Qs(o), T(this, ko).delete(n);
        else {
          var a = T(this, Tr).get(n);
          a && (T(this, on).set(n, a.effect), T(this, Tr).delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), o = a.effect);
        }
        for (const [s, i] of T(this, Xr)) {
          if (T(this, Xr).delete(s), s === t)
            break;
          const d = T(this, Tr).get(i);
          d && (ur(d.effect), T(this, Tr).delete(i));
        }
        for (const [s, i] of T(this, on)) {
          if (s === n || T(this, ko).has(s)) continue;
          const d = () => {
            if (Array.from(T(this, Xr).values()).includes(s)) {
              var u = document.createDocumentFragment();
              ei(i, u), u.append(mr()), T(this, Tr).set(s, { effect: i, fragment: u });
            } else
              ur(i);
            T(this, ko).delete(s), T(this, on).delete(s);
          };
          T(this, ya) || !o ? (T(this, ko).add(s), Po(i, d, !1)) : d();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Oe(this, Ba, (t) => {
      T(this, Xr).delete(t);
      const n = Array.from(T(this, Xr).values());
      for (const [o, a] of T(this, Tr))
        n.includes(o) || (ur(a.effect), T(this, Tr).delete(o));
    });
    this.anchor = t, Re(this, ya, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var o = (
      /** @type {Batch} */
      Ce
    ), a = wl();
    if (n && !T(this, on).has(t) && !T(this, Tr).has(t))
      if (a) {
        var s = document.createDocumentFragment(), i = mr();
        s.append(i), T(this, Tr).set(t, {
          effect: Wr(() => n(i)),
          fragment: s
        });
      } else
        T(this, on).set(
          t,
          Wr(() => n(this.anchor))
        );
    if (T(this, Xr).set(o, t), a) {
      for (const [d, c] of T(this, on))
        d === t ? o.unskip_effect(c) : o.skip_effect(c);
      for (const [d, c] of T(this, Tr))
        d === t ? o.unskip_effect(c.effect) : o.skip_effect(c.effect);
      o.oncommit(T(this, xa)), o.ondiscard(T(this, Ba));
    } else
      Ze && (this.anchor = Le), T(this, xa).call(this, o);
  }
}
Xr = new WeakMap(), on = new WeakMap(), Tr = new WeakMap(), ko = new WeakMap(), ya = new WeakMap(), xa = new WeakMap(), Ba = new WeakMap();
function Jn(e, t, ...n) {
  var o = new El(e);
  Qa(() => {
    const a = t() ?? null;
    o.ensure(a, a && ((s) => a(s, ...n)));
  }, Mo);
}
function qa(e) {
  vr === null && Hi(), an(() => {
    const t = ro(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ec(e) {
  vr === null && Hi(), qa(() => () => ro(e));
}
function ye(e, t, n = !1) {
  var o;
  Ze && (o = Le, Sa());
  var a = new El(e), s = n ? Mo : 0;
  function i(d, c) {
    if (Ze) {
      var u = Yi(
        /** @type {TemplateNode} */
        o
      );
      if (d !== parseInt(u.substring(1))) {
        var y = Da();
        cr(y), a.anchor = y, jn(!1), a.ensure(d, c), jn(!0);
        return;
      }
    }
    a.ensure(d, c);
  }
  Qa(() => {
    var d = !1;
    t((c, u = 0) => {
      d = !0, i(u, c);
    }), d || i(-1, null);
  }, s);
}
function Lc(e, t, n) {
  for (var o = [], a = t.length, s, i = t.length, d = 0; d < a; d++) {
    let P = t[d];
    Po(
      P,
      () => {
        if (s) {
          if (s.pending.delete(P), s.done.add(P), s.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ts(e, Va(s.done)), b.delete(s), b.size === 0 && (e.outrogroups = null);
          }
        } else
          i -= 1;
      },
      !1
    );
  }
  if (i === 0) {
    var c = o.length === 0 && n !== null;
    if (c) {
      var u = (
        /** @type {Element} */
        n
      ), y = (
        /** @type {Element} */
        u.parentNode
      );
      fl(y), y.append(u), e.items.clear();
    }
    Ts(e, t, !c);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Ts(e, t, n = !0) {
  var o;
  if (e.pending.size > 0) {
    o = /* @__PURE__ */ new Set();
    for (const i of e.pending.values())
      for (const d of i)
        o.add(
          /** @type {EachItem} */
          e.items.get(d).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var s = t[a];
    if (o != null && o.has(s)) {
      s.f |= sn;
      const i = document.createDocumentFragment();
      ei(s, i);
    } else
      ur(t[a], n);
  }
}
var Si;
function xt(e, t, n, o, a, s = null) {
  var i = e, d = /* @__PURE__ */ new Map(), c = (t & $i) !== 0;
  if (c) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Ze ? cr(/* @__PURE__ */ Wo(u)) : u.appendChild(mr());
  }
  Ze && Sa();
  var y = null, P = /* @__PURE__ */ ll(() => {
    var g = n();
    return Hs(g) ? g : g == null ? [] : Va(g);
  }), b, z = /* @__PURE__ */ new Map(), j = !0;
  function R(g) {
    (S.effect.f & Cr) === 0 && (S.pending.delete(g), S.fallback = y, Dc(S, b, i, t, o), y !== null && (b.length === 0 ? (y.f & sn) === 0 ? Qs(y) : (y.f ^= sn, la(y, null, i)) : Po(y, () => {
      y = null;
    })));
  }
  function x(g) {
    S.pending.delete(g);
  }
  var k = Qa(() => {
    b = /** @type {V[]} */
    r(P);
    var g = b.length;
    let W = !1;
    if (Ze) {
      var D = Yi(i) === Fs;
      D !== (g === 0) && (i = Da(), cr(i), jn(!1), W = !0);
    }
    for (var I = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      Ce
    ), A = wl(), K = 0; K < g; K += 1) {
      Ze && Le.nodeType === oa && /** @type {Comment} */
      Le.data === Bs && (i = /** @type {Comment} */
      Le, W = !0, jn(!1));
      var ue = b[K], H = o(ue, K), oe = j ? null : d.get(H);
      oe ? (oe.v && ea(oe.v, ue), oe.i && ea(oe.i, K), A && X.unskip_effect(oe.e)) : (oe = Ic(
        d,
        j ? i : Si ?? (Si = mr()),
        ue,
        H,
        K,
        a,
        t,
        n
      ), j || (oe.e.f |= sn), d.set(H, oe)), I.add(H);
    }
    if (g === 0 && s && !y && (j ? y = Wr(() => s(i)) : (y = Wr(() => s(Si ?? (Si = mr()))), y.f |= sn)), g > I.size && Bd(), Ze && g > 0 && cr(Da()), !j)
      if (z.set(X, I), A) {
        for (const [ae, $] of d)
          I.has(ae) || X.skip_effect($.e);
        X.oncommit(R), X.ondiscard(x);
      } else
        R(X);
    W && jn(!0), r(P);
  }), S = { effect: k, items: d, pending: z, outrogroups: null, fallback: y };
  j = !1, Ze && (i = Le);
}
function ia(e) {
  for (; e !== null && (e.f & Kr) === 0; )
    e = e.next;
  return e;
}
function Dc(e, t, n, o, a) {
  var ue, H, oe, ae, $, fe, G, ee, ge;
  var s = (o & Sd) !== 0, i = t.length, d = e.items, c = ia(e.effect.first), u, y = null, P, b = [], z = [], j, R, x, k;
  if (s)
    for (k = 0; k < i; k += 1)
      j = t[k], R = a(j, k), x = /** @type {EachItem} */
      d.get(R).e, (x.f & sn) === 0 && ((H = (ue = x.nodes) == null ? void 0 : ue.a) == null || H.measure(), (P ?? (P = /* @__PURE__ */ new Set())).add(x));
  for (k = 0; k < i; k += 1) {
    if (j = t[k], R = a(j, k), x = /** @type {EachItem} */
    d.get(R).e, e.outrogroups !== null)
      for (const me of e.outrogroups)
        me.pending.delete(x), me.done.delete(x);
    if ((x.f & qr) !== 0 && (Qs(x), s && ((ae = (oe = x.nodes) == null ? void 0 : oe.a) == null || ae.unfix(), (P ?? (P = /* @__PURE__ */ new Set())).delete(x))), (x.f & sn) !== 0)
      if (x.f ^= sn, x === c)
        la(x, null, n);
      else {
        var S = y ? y.next : c;
        x === e.effect.last && (e.effect.last = x.prev), x.prev && (x.prev.next = x.next), x.next && (x.next.prev = x.prev), Fn(e, y, x), Fn(e, x, S), la(x, S, n), y = x, b = [], z = [], c = ia(y.next);
        continue;
      }
    if (x !== c) {
      if (u !== void 0 && u.has(x)) {
        if (b.length < z.length) {
          var g = z[0], W;
          y = g.prev;
          var D = b[0], I = b[b.length - 1];
          for (W = 0; W < b.length; W += 1)
            la(b[W], g, n);
          for (W = 0; W < z.length; W += 1)
            u.delete(z[W]);
          Fn(e, D.prev, I.next), Fn(e, y, D), Fn(e, I, g), c = g, y = I, k -= 1, b = [], z = [];
        } else
          u.delete(x), la(x, c, n), Fn(e, x.prev, x.next), Fn(e, x, y === null ? e.effect.first : y.next), Fn(e, y, x), y = x;
        continue;
      }
      for (b = [], z = []; c !== null && c !== x; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(c), z.push(c), c = ia(c.next);
      if (c === null)
        continue;
    }
    (x.f & sn) === 0 && b.push(x), y = x, c = ia(x.next);
  }
  if (e.outrogroups !== null) {
    for (const me of e.outrogroups)
      me.pending.size === 0 && (Ts(e, Va(me.done)), ($ = e.outrogroups) == null || $.delete(me));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var X = [];
    if (u !== void 0)
      for (x of u)
        (x.f & qr) === 0 && X.push(x);
    for (; c !== null; )
      (c.f & qr) === 0 && c !== e.fallback && X.push(c), c = ia(c.next);
    var A = X.length;
    if (A > 0) {
      var K = (o & $i) !== 0 && i === 0 ? n : null;
      if (s) {
        for (k = 0; k < A; k += 1)
          (G = (fe = X[k].nodes) == null ? void 0 : fe.a) == null || G.measure();
        for (k = 0; k < A; k += 1)
          (ge = (ee = X[k].nodes) == null ? void 0 : ee.a) == null || ge.fix();
      }
      Lc(e, X, K);
    }
  }
  s && zn(() => {
    var me, we;
    if (P !== void 0)
      for (x of P)
        (we = (me = x.nodes) == null ? void 0 : me.a) == null || we.apply();
  });
}
function Ic(e, t, n, o, a, s, i, d) {
  var c = (i & kd) !== 0 ? (i & Pd) === 0 ? /* @__PURE__ */ vl(n, !1, !1) : zo(n) : null, u = (i & _d) !== 0 ? zo(a) : null;
  return {
    v: c,
    i: u,
    e: Wr(() => (s(t, c ?? n, u ?? a, d), () => {
      e.delete(o);
    }))
  };
}
function la(e, t, n) {
  if (e.nodes)
    for (var o = e.nodes.start, a = e.nodes.end, s = t && (t.f & sn) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; o !== null; ) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cn(o)
      );
      if (s.before(o), o === a)
        return;
      o = i;
    }
}
function Fn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function zt(e, t) {
  Pa(() => {
    var n = e.getRootNode(), o = (
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
    if (!o.querySelector("#" + t.hash)) {
      const a = Gs("style");
      a.id = t.hash, a.textContent = t.code, o.appendChild(a);
    }
  });
}
function Nc(e, t, n) {
  Pa(() => {
    var o = ro(() => t(e, n == null ? void 0 : n()) || {});
    if (o != null && o.destroy)
      return () => (
        /** @type {Function} */
        o.destroy()
      );
  });
}
function Ll(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Ll(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Fc() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Ll(e)) && (o && (o += " "), o += t);
  return o;
}
function ts(e) {
  return typeof e == "object" ? Fc(e) : e ?? "";
}
const Pi = [...` 	
\r\f \v\uFEFF`];
function Bc(e, t, n) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), n) {
    for (var a of Object.keys(n))
      if (n[a])
        o = o ? o + " " + a : a;
      else if (o.length)
        for (var s = a.length, i = 0; (i = o.indexOf(a, i)) >= 0; ) {
          var d = i + s;
          (i === 0 || Pi.includes(o[i - 1])) && (d === o.length || Pi.includes(o[d])) ? o = (i === 0 ? "" : o.substring(0, i)) + o.substring(d + 1) : i = d;
        }
  }
  return o === "" ? null : o;
}
function Ti(e, t = !1) {
  var n = t ? " !important;" : ";", o = "";
  for (var a of Object.keys(e)) {
    var s = e[a];
    s != null && s !== "" && (o += " " + a + ": " + s + n);
  }
  return o;
}
function Hc(e, t) {
  if (t) {
    var n = "", o, a;
    return Array.isArray(t) ? (o = t[0], a = t[1]) : o = t, o && (n += Ti(o)), a && (n += Ti(a, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function Ie(e, t, n, o, a, s) {
  var i = e.__className;
  if (Ze || i !== n || i === void 0) {
    var d = Bc(n, o, s);
    (!Ze || d !== e.getAttribute("class")) && (d == null ? e.removeAttribute("class") : e.className = d), e.__className = n;
  } else if (s && a !== s)
    for (var c in s) {
      var u = !!s[c];
      (a == null || u !== !!a[c]) && e.classList.toggle(c, u);
    }
  return s;
}
function ss(e, t = {}, n, o) {
  for (var a in n) {
    var s = n[a];
    t[a] !== s && (n[a] == null ? e.style.removeProperty(a) : e.style.setProperty(a, s, o));
  }
}
function fr(e, t, n, o) {
  var a = e.__style;
  if (Ze || a !== t) {
    var s = Hc(t, o);
    (!Ze || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else o && (Array.isArray(o) ? (ss(e, n == null ? void 0 : n[0], o[0]), ss(e, n == null ? void 0 : n[1], o[1], "important")) : ss(e, n, o));
  return o;
}
function Vr(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Hs(t))
      return ec();
    for (var o of e.options)
      o.selected = t.includes(va(o));
    return;
  }
  for (o of e.options) {
    var a = va(o);
    if (yc(a, t)) {
      o.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function tn(e) {
  var t = new MutationObserver(() => {
    Vr(e, e.__value);
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
  }), Ks(() => {
    t.disconnect();
  });
}
function Dl(e, t, n = t) {
  var o = /* @__PURE__ */ new WeakSet(), a = !0;
  yl(e, "change", (s) => {
    var i = s ? "[selected]" : ":checked", d;
    if (e.multiple)
      d = [].map.call(e.querySelectorAll(i), va);
    else {
      var c = e.querySelector(i) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      d = c && va(c);
    }
    n(d), e.__value = d, Ce !== null && o.add(Ce);
  }), Pa(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Ce
      );
      if (o.has(i))
        return;
    }
    if (Vr(e, s, a), a && s === void 0) {
      var d = e.querySelector(":checked");
      d !== null && (s = va(d), n(s));
    }
    e.__value = s, a = !1;
  }), tn(e);
}
function va(e) {
  return "__value" in e ? e.__value : e.value;
}
const Yc = Symbol("is custom element"), Vc = Symbol("is html"), Uc = Bi ? "link" : "LINK", Xc = Bi ? "progress" : "PROGRESS";
function sr(e) {
  if (Ze) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var o = e.value;
          F(e, "value", null), e.value = o;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          F(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = n, zn(n), bl();
  }
}
function Wa(e, t) {
  var n = ti(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Xc) || (e.value = t ?? "");
}
function Gc(e, t) {
  var n = ti(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function F(e, t, n, o) {
  var a = ti(e);
  Ze && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Uc) || a[t] !== (a[t] = n) && (t === "loading" && (e[Nd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Jc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ti(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Yc]: e.nodeName.includes("-"),
      [Vc]: e.namespaceURI === Li
    })
  );
}
var qi = /* @__PURE__ */ new Map();
function Jc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = qi.get(t);
  if (n) return n;
  qi.set(t, n = []);
  for (var o, a = e, s = Element.prototype; s !== a; ) {
    o = Cd(a);
    for (var i in o)
      o[i].set && n.push(i);
    a = Di(a);
  }
  return n;
}
function Jr(e, t, n = t) {
  var o = /* @__PURE__ */ new WeakSet();
  yl(e, "input", async (a) => {
    var s = a ? e.defaultValue : e.value;
    if (s = is(e) ? ls(s) : s, n(s), Ce !== null && o.add(Ce), await Wl(), s !== (s = t())) {
      var i = e.selectionStart, d = e.selectionEnd, c = e.value.length;
      if (e.value = s ?? "", d !== null) {
        var u = e.value.length;
        i === d && d === c && u > c ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = i, e.selectionEnd = Math.min(d, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ze && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ro(t) == null && e.value) && (n(is(e) ? ls(e.value) : e.value), Ce !== null && o.add(Ce)), Za(() => {
    var a = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Ce
      );
      if (o.has(s))
        return;
    }
    is(e) && a === ls(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function is(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ls(e) {
  return e === "" ? null : +e;
}
var Yn, Go, ka, Ha, Il;
const Ya = class Ya {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Oe(this, Ha);
    /** */
    Oe(this, Yn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Oe(this, Go);
    /** @type {ResizeObserverOptions} */
    Oe(this, ka);
    Re(this, ka, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var o = T(this, Yn).get(t) || /* @__PURE__ */ new Set();
    return o.add(n), T(this, Yn).set(t, o), yt(this, Ha, Il).call(this).observe(t, T(this, ka)), () => {
      var a = T(this, Yn).get(t);
      a.delete(n), a.size === 0 && (T(this, Yn).delete(t), T(this, Go).unobserve(t));
    };
  }
};
Yn = new WeakMap(), Go = new WeakMap(), ka = new WeakMap(), Ha = new WeakSet(), Il = function() {
  return T(this, Go) ?? Re(this, Go, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ya.entries.set(n.target, n);
        for (var o of T(this, Yn).get(n.target) || [])
          o(n);
      }
    }
  ));
}, /** @static */
_t(Ya, "entries", /* @__PURE__ */ new WeakMap());
let qs = Ya;
var Kc = /* @__PURE__ */ new qs({
  box: "border-box"
});
function Mi(e, t, n) {
  var o = Kc.observe(e, () => n(e[t]));
  Pa(() => (ro(() => n(e[t])), o));
}
function ji(e, t) {
  return e === t || (e == null ? void 0 : e[So]) === t;
}
function na(e = {}, t, n, o) {
  var a = (
    /** @type {ComponentContext} */
    vr.r
  ), s = (
    /** @type {Effect} */
    Xe
  );
  return Pa(() => {
    var i, d;
    return Za(() => {
      i = d, d = [], ro(() => {
        e !== n(...d) && (t(e, ...d), i && ji(n(...i), e) && t(null, ...i));
      });
    }), () => {
      let c = s;
      for (; c !== a && c.parent !== null && c.parent.f & vs; )
        c = c.parent;
      const u = () => {
        d && ji(n(...d), e) && t(null, ...d);
      }, y = c.teardown;
      c.teardown = () => {
        u(), y == null || y();
      };
    };
  }), e;
}
function m(e, t, n, o) {
  var S;
  var a = (n & Md) !== 0, s = (n & jd) !== 0, i = (
    /** @type {V} */
    o
  ), d = !0, c = () => (d && (d = !1, i = s ? ro(
    /** @type {() => V} */
    o
  ) : (
    /** @type {V} */
    o
  )), i);
  let u;
  if (a) {
    var y = So in e || Fi in e;
    u = ((S = _o(e, t)) == null ? void 0 : S.set) ?? (y && t in e ? (g) => e[t] = g : void 0);
  }
  var P, b = !1;
  a ? [P, b] = sc(() => (
    /** @type {V} */
    e[t]
  )) : P = /** @type {V} */
  e[t], P === void 0 && o !== void 0 && (P = c(), u && (Gd(), u(P)));
  var z;
  if (z = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? c() : (d = !0, g);
  }, (n & qd) === 0)
    return z;
  if (u) {
    var j = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(g, W) {
        return arguments.length > 0 ? ((!W || j || b) && u(W ? z() : g), g) : z();
      })
    );
  }
  var R = !1, x = ((n & Td) !== 0 ? Ga : ll)(() => (R = !1, z()));
  a && r(x);
  var k = (
    /** @type {Effect} */
    Xe
  );
  return (
    /** @type {() => V} */
    (function(g, W) {
      if (arguments.length > 0) {
        const D = W ? r(x) : a ? dt(g) : g;
        return q(x, D), R = !0, i !== void 0 && (i = D), g;
      }
      return Qn && R || (k.f & Cr) !== 0 ? x.v : r(x);
    })
  );
}
function Zc(e) {
  return new Qc(e);
}
var Mn, zr;
class Qc {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Oe(this, Mn);
    /** @type {Record<string, any>} */
    Oe(this, zr);
    var s;
    var n = /* @__PURE__ */ new Map(), o = (i, d) => {
      var c = /* @__PURE__ */ vl(d, !1, !1);
      return n.set(i, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, d) {
          return r(n.get(d) ?? o(d, Reflect.get(i, d)));
        },
        has(i, d) {
          return d === Fi ? !0 : (r(n.get(d) ?? o(d, Reflect.get(i, d))), Reflect.has(i, d));
        },
        set(i, d, c) {
          return q(n.get(d) ?? o(d, c), c), Reflect.set(i, d, c);
        }
      }
    );
    Re(this, zr, (t.hydrate ? Oc : Ol)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && h(), Re(this, Mn, a.$$events);
    for (const i of Object.keys(T(this, zr)))
      i === "$set" || i === "$destroy" || i === "$on" || La(this, i, {
        get() {
          return T(this, zr)[i];
        },
        /** @param {any} value */
        set(d) {
          T(this, zr)[i] = d;
        },
        enumerable: !0
      });
    T(this, zr).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, T(this, zr).$destroy = () => {
      $c(T(this, zr));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    T(this, zr).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    T(this, Mn)[t] = T(this, Mn)[t] || [];
    const o = (...a) => n.call(this, ...a);
    return T(this, Mn)[t].push(o), () => {
      T(this, Mn)[t] = T(this, Mn)[t].filter(
        /** @param {any} fn */
        (a) => a !== o
      );
    };
  }
  $destroy() {
    T(this, zr).$destroy();
  }
}
Mn = new WeakMap(), zr = new WeakMap();
let Nl;
typeof HTMLElement == "function" && (Nl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, o) {
    super();
    /** The Svelte component constructor */
    _t(this, "$$ctor");
    /** Slots */
    _t(this, "$$s");
    /** @type {any} The Svelte component instance */
    _t(this, "$$c");
    /** Whether or not the custom element is connected */
    _t(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _t(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _t(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _t(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _t(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _t(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _t(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    _t(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = n, o && (this.$$shadowRoot = this.attachShadow(o));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const a = this.$$c.$on(t, n);
      this.$$l_u.set(n, a);
    }
    super.addEventListener(t, n, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, o) {
    if (super.removeEventListener(t, n, o), this.$$c) {
      const a = this.$$l_u.get(n);
      a && (a(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (i) => {
          const d = Gs("slot");
          s !== "default" && (d.name = s), B(i, d);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, a = eu(this);
      for (const s of this.$$s)
        s in a && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), o.default = !0) : o[s] = n(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = $a(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Zc({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = _c(() => {
        Za(() => {
          var s;
          this.$$r = !0;
          for (const i of Ea(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const d = $a(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            d == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, d);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const d = this.$$c.$on(s, i);
          this.$$l_u.set(i, d);
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
  attributeChangedCallback(t, n, o) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = $a(t, o, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return Ea(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function $a(e, t, n, o) {
  var s;
  const a = (s = n[e]) == null ? void 0 : s.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e])
    return t;
  if (o === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function eu(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Wt(e, t, n, o, a, s) {
  let i = class extends Nl {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ea(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return Ea(t).forEach((d) => {
    La(i.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(c) {
        var P;
        c = $a(d, c, t), this.$$d[d] = c;
        var u = this.$$c;
        if (u) {
          var y = (P = _o(u, d)) == null ? void 0 : P.get;
          y ? u[d] = c : u.$set({ [d]: c });
        }
      }
    });
  }), o.forEach((d) => {
    La(i.prototype, d, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[d];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
const ds = "efsdb-bootstrap";
function tu() {
  var o;
  const e = document.getElementById(ds);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${ds}`);
  const t = ((o = e.textContent) == null ? void 0 : o.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${ds}`);
  const n = JSON.parse(t);
  if (!n || typeof n != "object")
    throw new Error("Invalid bootstrap payload");
  return n;
}
function ru(e) {
  const t = tu();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function nu() {
  return window;
}
function ou() {
  var t, n;
  const e = (n = (t = nu()).getEfsdbTheme) == null ? void 0 : n.call(t);
  return e === "light" || e === "green" ? e : "dark";
}
function au(e) {
  const t = (n) => {
    const o = n.detail, a = o == null ? void 0 : o.theme;
    e(a === "light" || a === "green" ? a : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
function Ms() {
  return window;
}
function su() {
  var e, t;
  return ((t = (e = Ms()).getAccessToken) == null ? void 0 : t.call(e)) ?? null;
}
async function iu() {
  return typeof Ms().refreshAccessToken != "function" ? null : Ms().refreshAccessToken();
}
async function Rn(e, t = {}) {
  const n = new Headers(t.headers ?? {}), o = su();
  return o && n.set("Authorization", `Bearer ${o}`), fetch(e, {
    credentials: "same-origin",
    ...t,
    headers: n
  });
}
async function An(e) {
  const t = e.headers.get("content-type") || "";
  if (!t.includes("application/json"))
    throw new Error(`Expected JSON, got: ${t || "unknown"}`);
  return await e.json();
}
async function no(e) {
  var n;
  if ((e.headers.get("content-type") || "").includes("application/json")) {
    const o = await e.json().catch(() => null), a = (n = o == null ? void 0 : o.error) == null ? void 0 : n.message;
    if (typeof a == "string" && a.trim() !== "")
      return a;
  }
  return `HTTP ${e.status}`;
}
function Fl(e) {
  const t = new URLSearchParams();
  for (const [o, a] of Object.entries(e))
    if (!(a == null || a === "")) {
      if (Array.isArray(a)) {
        for (const s of a)
          s !== "" && t.append(o, s);
        continue;
      }
      t.set(o, String(a));
    }
  const n = t.toString();
  return n === "" ? "" : `?${n}`;
}
async function lu(e) {
  const t = await Rn(`/_efsdb/api/facets${Fl({
    entity: e.entity,
    field: e.field,
    q: e.q
  })}`);
  if (!t.ok)
    throw new Error(await no(t));
  return An(t);
}
async function du(e) {
  const t = await Rn(`/_efsdb/api/search${Fl({
    entity: e.entity,
    q: e.q,
    limit: e.limit,
    cursor: e.cursor,
    sort: e.sort
  })}`);
  if (!t.ok)
    throw new Error(await no(t));
  return An(t);
}
async function cu(e = {}, t) {
  var u, y;
  const n = e.entity ?? "public_workspace_files", o = ((u = e.q) == null ? void 0 : u.trim()) || void 0, a = ((y = e.field) == null ? void 0 : y.filter((P) => P.trim() !== "")) ?? [], s = du({
    entity: n,
    q: o,
    limit: e.limit ?? 10
  }), i = a.length > 0 ? lu({
    entity: n,
    q: o,
    field: a
  }) : Promise.resolve({ results: {} }), [d, c] = await Promise.allSettled([s, i]);
  if (d.status === "rejected")
    throw d.reason instanceof Error ? d.reason : new Error("Unable to load workspace search results");
  return {
    results: d.value.results,
    facets: c.status === "fulfilled" ? c.value.results : {}
  };
}
async function uu(e) {
  const t = await Rn(`${e.replace(/\/$/, "")}/users`);
  if (!t.ok)
    throw new Error(await no(t));
  return An(t);
}
async function vu(e, t) {
  const n = await Rn(`${e.replace(/\/$/, "")}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  });
  if (!n.ok)
    throw new Error(await no(n));
  return An(n);
}
async function gu(e) {
  const t = await Rn(`${e.replace(/\/$/, "")}/roles`);
  if (!t.ok)
    throw new Error(await no(t));
  return An(t);
}
async function pu(e, t) {
  const n = await Rn(`${e.replace(/\/$/, "")}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  });
  if (!n.ok)
    throw new Error(await no(n));
  return An(n);
}
async function hu(e) {
  const t = await Rn(`${e.replace(/\/$/, "")}/settings`);
  if (!t.ok)
    throw new Error(await no(t));
  return An(t);
}
async function mu() {
  return iu();
}
async function fu(e) {
  const t = await Rn(`${e.replace(/\/$/, "")}/whoami`);
  return t.ok ? An(t) : null;
}
async function wu(e, t) {
  const n = await Rn(`${e.replace(/\/$/, "")}/display-mode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ roleId: t })
  });
  if (!n.ok)
    throw new Error(await no(n));
  return An(n);
}
var bu = /* @__PURE__ */ J('<span class="overview-pill svelte-171qv50"> </span>'), yu = /* @__PURE__ */ J('<article class="overview-metric svelte-171qv50"><span class="overview-metric-label svelte-171qv50"> </span> <strong class="overview-metric-value svelte-171qv50"> </strong> <span class="overview-metric-detail svelte-171qv50"> </span></article>'), xu = /* @__PURE__ */ J('<div class="notice svelte-171qv50">Loading admin control-plane data…</div>'), ku = /* @__PURE__ */ J('<div data-testid="admin-notice"> </div>'), _u = /* @__PURE__ */ J('<section class="admin-shell svelte-171qv50"><header class="workspace-overview svelte-171qv50"><div class="overview-copy svelte-171qv50"><span class="overview-eyebrow svelte-171qv50">Admin workspace</span> <h1 class="overview-title svelte-171qv50">Users, roles, modes, and search</h1> <div class="overview-pill-row svelte-171qv50" aria-label="Workspace focus areas"></div> <p class="overview-subtitle svelte-171qv50">Compact control surface for provisioning, policy, and discovery.</p></div> <div class="overview-metrics svelte-171qv50" aria-label="Admin summary metrics"></div></header> <!> <!> <div class="shell-body svelte-171qv50"><!></div></section>');
const Su = {
  hash: "svelte-171qv50",
  code: `.admin-shell.svelte-171qv50 {display:flex;flex-direction:column;gap:1rem;}.workspace-overview.svelte-171qv50 {display:grid;gap:0.85rem;grid-template-columns:minmax(0, 1.35fr) minmax(0, 1fr);align-items:stretch;padding:1rem 1.15rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:28px;background:radial-gradient(circle at top right, color-mix(in srgb, var(--shell-primary), transparent 92%), transparent 34%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 42%),
      var(--shell-panel);box-shadow:var(--shell-card-shadow);}.overview-copy.svelte-171qv50 {display:flex;flex-direction:column;gap:0.55rem;min-width:0;}.overview-eyebrow.svelte-171qv50 {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.16em;text-transform:uppercase;}.overview-title.svelte-171qv50 {margin:0;max-width:18ch;color:var(--shell-text);font:var(--efs-font-title-lg);line-height:1.04;letter-spacing:-0.04em;}.overview-pill-row.svelte-171qv50 {display:flex;flex-wrap:wrap;gap:0.45rem;}.overview-pill.svelte-171qv50 {display:inline-flex;align-items:center;min-height:1.9rem;padding:0 0.7rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-text);font:var(--efs-font-micro);letter-spacing:0.1em;text-transform:uppercase;}.overview-subtitle.svelte-171qv50 {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.overview-metrics.svelte-171qv50 {display:grid;gap:0.7rem;grid-template-columns:repeat(2, minmax(0, 1fr));}.overview-metric.svelte-171qv50 {display:flex;flex-direction:column;gap:0.2rem;min-width:0;min-height:0;padding:0.8rem 0.9rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);}.overview-metric-label.svelte-171qv50 {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.12em;text-transform:uppercase;}.overview-metric-value.svelte-171qv50 {color:var(--shell-text);font:var(--efs-font-title-md);line-height:1;}.overview-metric-detail.svelte-171qv50 {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.45;overflow-wrap:anywhere;}.shell-body.svelte-171qv50 {display:flex;flex-direction:column;gap:1rem;}.notice.svelte-171qv50,
  .flash-error.svelte-171qv50 {border-radius:22px;padding:1rem 1.1rem;line-height:1.6;}.notice.svelte-171qv50 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);background:color-mix(in srgb, var(--shell-row-hover), transparent 4%);color:var(--shell-text);}.flash-error.svelte-171qv50 {border:1px solid rgba(255, 123, 139, 0.28);background:rgba(255, 123, 139, 0.14);color:var(--shell-text);}

  @media (max-width: 63.99rem) {.workspace-overview.svelte-171qv50 {grid-template-columns:1fr;}
  }

  @media (max-width: 47.99rem) {.overview-metrics.svelte-171qv50 {grid-template-columns:1fr;}
  }`
};
function Bl(e, t) {
  St(t, !0), zt(e, Su);
  const n = ["Users", "Roles", "Modes", "Search"];
  let o = m(t, "notice", 7), a = m(t, "loading", 7), s = m(t, "metrics", 7), i = m(t, "children", 7);
  var d = {
    get notice() {
      return o();
    },
    set notice(g) {
      o(g), h();
    },
    get loading() {
      return a();
    },
    set loading(g) {
      a(g), h();
    },
    get metrics() {
      return s();
    },
    set metrics(g) {
      s(g), h();
    },
    get children() {
      return i();
    },
    set children(g) {
      i(g), h();
    }
  }, c = _u(), u = p(c), y = p(u), P = w(p(y), 4);
  xt(P, 20, () => n, (g) => g, (g, W) => {
    var D = bu(), I = p(D, !0);
    v(D), ve(() => de(I, W)), B(g, D);
  }), v(P), Rr(2), v(y);
  var b = w(y, 2);
  xt(b, 21, s, (g) => g.label, (g, W) => {
    var D = yu(), I = p(D), X = p(I, !0);
    v(I);
    var A = w(I, 2), K = p(A, !0);
    v(A);
    var ue = w(A, 2), H = p(ue, !0);
    v(ue), v(D), ve(() => {
      de(X, r(W).label), de(K, r(W).value), de(H, r(W).detail);
    }), B(g, D);
  }), v(b), v(u);
  var z = w(u, 2);
  {
    var j = (g) => {
      var W = xu();
      B(g, W);
    };
    ye(z, (g) => {
      a() && g(j);
    });
  }
  var R = w(z, 2);
  {
    var x = (g) => {
      var W = ku(), D = p(W, !0);
      v(W), ve(() => {
        Ie(W, 1, ts(o().error ? "flash-error" : "notice"), "svelte-171qv50"), de(D, o().message);
      }), B(g, W);
    };
    ye(R, (g) => {
      o() && g(x);
    });
  }
  var k = w(R, 2), S = p(k);
  return Jn(S, () => i() ?? Ao), v(k), v(c), B(e, c), Pt(d);
}
Wt(Bl, { notice: {}, loading: {}, metrics: {}, children: {} }, [], [], { mode: "open" });
var Pu = /* @__PURE__ */ J('<div class="tool-popover svelte-qjuage" role="presentation"><!></div>');
const Tu = {
  hash: "svelte-qjuage",
  code: `.tool-popover.svelte-qjuage {position:fixed;max-height:min(42rem, calc(100vh - 1.5rem));overflow:visible;pointer-events:auto;}

  @media (max-width: 47.99rem) {.tool-popover.svelte-qjuage {width:min(100vw - 1rem, 28rem);}
  }`
};
function Hl(e, t) {
  St(t, !0), zt(e, Tu);
  let n = m(t, "open", 7, !1), o = m(t, "anchor", 7, null), a = m(t, "placement", 7, "bottom-end"), s = m(t, "offset", 7, 12), i = m(t, "width", 7, "min(28rem, calc(100vw - 1.5rem))"), d = m(t, "zIndex", 7, 460), c = m(t, "onClose", 7), u = m(t, "children", 7), y = /* @__PURE__ */ ne(null), P = /* @__PURE__ */ ne(0), b = /* @__PURE__ */ ne(0);
  function z() {
    if (!n() || !o() || !r(y) || typeof window > "u")
      return;
    const S = o().getBoundingClientRect(), g = r(y).getBoundingClientRect(), W = 12;
    let D = a().startsWith("bottom") ? S.bottom + s() : S.top - g.height - s(), I = a().endsWith("end") ? S.right - g.width : S.left;
    D = Math.min(Math.max(W, D), Math.max(W, window.innerHeight - g.height - W)), I = Math.min(Math.max(W, I), Math.max(W, window.innerWidth - g.width - W)), q(P, D, !0), q(b, I, !0);
  }
  an(() => {
    if (!n() || !o() || typeof window > "u" || typeof document > "u")
      return;
    const S = requestAnimationFrame(() => {
      z();
    }), g = () => {
      z();
    }, W = (D) => {
      var X;
      const I = D.composedPath();
      r(y) && I.includes(r(y)) || o() && I.includes(o()) || (X = c()) == null || X();
    };
    return window.addEventListener("resize", g), window.addEventListener("scroll", g, !0), document.addEventListener("pointerdown", W, !0), () => {
      cancelAnimationFrame(S), window.removeEventListener("resize", g), window.removeEventListener("scroll", g, !0), document.removeEventListener("pointerdown", W, !0);
    };
  });
  var j = {
    get open() {
      return n();
    },
    set open(S = !1) {
      n(S), h();
    },
    get anchor() {
      return o();
    },
    set anchor(S = null) {
      o(S), h();
    },
    get placement() {
      return a();
    },
    set placement(S = "bottom-end") {
      a(S), h();
    },
    get offset() {
      return s();
    },
    set offset(S = 12) {
      s(S), h();
    },
    get width() {
      return i();
    },
    set width(S = "min(28rem, calc(100vw - 1.5rem))") {
      i(S), h();
    },
    get zIndex() {
      return d();
    },
    set zIndex(S = 460) {
      d(S), h();
    },
    get onClose() {
      return c();
    },
    set onClose(S) {
      c(S), h();
    },
    get children() {
      return u();
    },
    set children(S) {
      u(S), h();
    }
  }, R = Wn(), x = Mt(R);
  {
    var k = (S) => {
      var g = Pu();
      let W;
      var D = p(g);
      Jn(D, () => u() ?? Ao), v(g), na(g, (I) => q(y, I), () => r(y)), ve(() => W = fr(g, "", W, {
        top: `${r(P)}px`,
        left: `${r(b)}px`,
        width: i(),
        "z-index": d()
      })), B(S, g);
    };
    ye(x, (S) => {
      n() && S(k);
    });
  }
  return B(e, R), Pt(j);
}
Wt(
  Hl,
  {
    open: {},
    anchor: {},
    placement: {},
    offset: {},
    width: {},
    zIndex: {},
    onClose: {},
    children: {}
  },
  [],
  [],
  { mode: "open" }
);
const Se = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, Pe = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, zi = (e) => `<g fill="#000">${e}</g>`, qu = {
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
        svg: Se(
          Pe(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: Se(
          Pe(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: Se(
          `${zi('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${Pe(
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
        svg: Se(
          Pe(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          `${Pe('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${zi(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: Se(
          Pe('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: Se(
          Pe(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: Se(
          Pe('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: Se(
          Pe(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: Se(Pe('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: Se(
          Pe(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: Se(
          Pe('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: Se(Pe('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: Se(
          Pe(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: Se(Pe('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: Se(
          Pe(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: Se(
          Pe(
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
        svg: Se(
          Pe(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: Se(
          Pe('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: Se(
          Pe('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: Se(
          Pe('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: Se(Pe('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: Se(Pe('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: Se(Pe('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: Se(Pe('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: Se(Pe('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: Se(Pe('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: Se(Pe('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: Se(
          Pe('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: Se(
          Pe('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: Se(
          Pe('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: Se(Pe('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: Se(Pe('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Mu(e, t) {
  const n = qu[e], o = n.variants;
  return (o[t ?? n.defaultVariant] ?? o[n.defaultVariant]).svg;
}
const Wi = /* @__PURE__ */ new Map();
function js(e, t) {
  const n = `${e}:${t ?? "default"}`, o = Wi.get(n);
  if (o)
    return o;
  const a = Mu(e, t), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(a)}")`;
  return Wi.set(n, s), s;
}
var ju = /* @__PURE__ */ J("<span></span>");
const zu = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function rt(e, t) {
  St(t, !0), zt(e, zu);
  let n = m(t, "name", 7), o = m(t, "variant", 7), a = m(t, "decorative", 7, !0), s = m(t, "label", 7), i = m(t, "title", 7), d = m(t, "size", 7, "1rem"), c = m(t, "className", 7, ""), u = /* @__PURE__ */ M(() => js(n(), o())), y = /* @__PURE__ */ M(() => s() ?? i() ?? n());
  var P = {
    get name() {
      return n();
    },
    set name(j) {
      n(j), h();
    },
    get variant() {
      return o();
    },
    set variant(j) {
      o(j), h();
    },
    get decorative() {
      return a();
    },
    set decorative(j = !0) {
      a(j), h();
    },
    get label() {
      return s();
    },
    set label(j) {
      s(j), h();
    },
    get title() {
      return i();
    },
    set title(j) {
      i(j), h();
    },
    get size() {
      return d();
    },
    set size(j = "1rem") {
      d(j), h();
    },
    get className() {
      return c();
    },
    set className(j = "") {
      c(j), h();
    }
  }, b = ju();
  let z;
  return ve(
    (j) => {
      Ie(b, 1, j, "svelte-1a09gvd"), F(b, "aria-hidden", a()), F(b, "aria-label", a() ? void 0 : r(y)), F(b, "role", a() ? void 0 : "img"), F(b, "title", i()), z = fr(b, "", z, { "--icon-mask": r(u), width: d(), height: d() });
    },
    [() => ts(`app-icon ${c()}`.trim())]
  ), B(e, b), Pt(P);
}
Wt(
  rt,
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
var Wu = /* @__PURE__ */ J('<span class="widget-state svelte-dsom6b"> </span>'), Ru = /* @__PURE__ */ J('<button class="widget-icon-button svelte-dsom6b" type="button"><!></button>'), Au = /* @__PURE__ */ J('<button type="button"><!></button>'), Cu = /* @__PURE__ */ J('<div class="widget-extra-actions svelte-dsom6b"><!></div>'), Ou = /* @__PURE__ */ J('<footer class="widget-footer svelte-dsom6b"><!></footer>'), $u = /* @__PURE__ */ J('<article><header class="widget-header svelte-dsom6b"><div class="widget-heading svelte-dsom6b"><span class="widget-eyebrow svelte-dsom6b"> </span> <div class="widget-title-row svelte-dsom6b"><h2 class="widget-title svelte-dsom6b"> </h2> <!></div></div> <div class="widget-toolbar svelte-dsom6b"><!> <!> <div class="widget-help svelte-dsom6b"><button class="widget-icon-button widget-help-button svelte-dsom6b" type="button"><!></button> <div class="widget-help-tooltip svelte-dsom6b" role="tooltip"><strong class="svelte-dsom6b"> </strong> <span class="svelte-dsom6b"> </span></div></div> <!></div></header> <div class="widget-body svelte-dsom6b"><!></div> <!></article>');
const Eu = {
  hash: "svelte-dsom6b",
  code: `.widget-frame.svelte-dsom6b {display:flex;flex-direction:column;height:100%;min-width:0;min-height:100%;border:var(--efs-widget-border-width, 1px) solid
      color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:var(--efs-widget-radius, 26px);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 32%),
      linear-gradient(135deg, color-mix(in srgb, var(--shell-panel), white 6%), transparent 38%),
      var(--shell-panel);box-shadow:var(--efs-widget-shadow, var(--shell-card-shadow));overflow:clip;}.widget-frame.window-mode.svelte-dsom6b {min-height:auto;border-radius:max(0px, calc(var(--efs-widget-radius, 22px) - 4px));box-shadow:none;}.widget-header.svelte-dsom6b,
  .widget-body.svelte-dsom6b,
  .widget-footer.svelte-dsom6b {padding-inline:max(0.9rem, calc(var(--efs-widget-chrome-padding, 12px) + 0.28rem));}.widget-header.svelte-dsom6b {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding-top:max(0.8rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.65 + 0.32rem));padding-bottom:max(0.72rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.5 + 0.22rem));border-bottom:1px solid color-mix(in srgb, var(--shell-border), transparent 18%);}.widget-heading.svelte-dsom6b {display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.widget-eyebrow.svelte-dsom6b {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.widget-title-row.svelte-dsom6b {display:flex;flex-wrap:wrap;align-items:center;gap:0.6rem;}.widget-title.svelte-dsom6b {margin:0;font:var(--efs-font-title-md);line-height:1.15;color:var(--shell-text);}.widget-help.svelte-dsom6b {position:relative;display:inline-flex;align-items:center;}.widget-help-button.svelte-dsom6b .app-icon {width:0.95rem;height:0.95rem;}.widget-help-button.svelte-dsom6b:focus-visible {outline:none;box-shadow:var(--shell-focus-ring);}.widget-help-tooltip.svelte-dsom6b {position:absolute;right:0;top:calc(100% + 0.7rem);z-index:6;display:flex;flex-direction:column;gap:0.45rem;width:min(18rem, 70vw);padding:0.9rem 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:16px;background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 88%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:var(--shell-card-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,
      transform 140ms ease;}.widget-help-tooltip.svelte-dsom6b::before {content:'';position:absolute;top:-0.42rem;right:0.95rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-left:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-panel), transparent 2%);transform:rotate(45deg);}.widget-help-tooltip.svelte-dsom6b strong:where(.svelte-dsom6b) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.widget-help-tooltip.svelte-dsom6b span:where(.svelte-dsom6b) {color:color-mix(in srgb, var(--shell-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.widget-help.svelte-dsom6b:hover .widget-help-tooltip:where(.svelte-dsom6b),
  .widget-help.svelte-dsom6b:focus-within .widget-help-tooltip:where(.svelte-dsom6b) {opacity:1;transform:translateY(0);}.widget-state.svelte-dsom6b {display:inline-flex;align-items:center;justify-content:center;min-height:1.55rem;padding:0 0.65rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);background:color-mix(in srgb, var(--shell-row-hover), transparent 12%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.widget-state[data-state='pinned'].svelte-dsom6b {border-color:color-mix(in srgb, var(--shell-primary), transparent 64%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);color:var(--shell-text);}.widget-toolbar.svelte-dsom6b {display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:0.45rem;}.widget-extra-actions.svelte-dsom6b {display:inline-flex;flex-wrap:wrap;gap:0.55rem;}.widget-icon-button.svelte-dsom6b {display:inline-flex;align-items:center;justify-content:center;width:clamp(2rem, calc(1.7rem + (var(--efs-widget-chrome-padding, 12px) * 0.06)), 2.35rem);height:clamp(2rem, calc(1.7rem + (var(--efs-widget-chrome-padding, 12px) * 0.06)), 2.35rem);border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:max(10px, calc(var(--efs-widget-radius, 26px) * 0.5));background:color-mix(in srgb, var(--shell-surface), transparent 6%);color:var(--shell-muted);cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      box-shadow 160ms ease;}.widget-icon-button.svelte-dsom6b .app-icon {width:1rem;height:1rem;}.widget-icon-button.svelte-dsom6b:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);background:color-mix(in srgb, var(--shell-row-hover), transparent 4%);color:var(--shell-text);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.04);}.widget-icon-button.is-active.svelte-dsom6b {border-color:color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.widget-body.svelte-dsom6b {display:flex;flex:1;flex-direction:column;gap:1rem;min-height:0;overflow:auto;overflow-x:hidden;padding-top:1rem;padding-bottom:1.15rem;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--shell-primary), transparent 42%) transparent;}.widget-body.svelte-dsom6b * {min-width:0;}.widget-body.svelte-dsom6b input,
  .widget-body.svelte-dsom6b select,
  .widget-body.svelte-dsom6b textarea,
  .widget-body.svelte-dsom6b button,
  .widget-body.svelte-dsom6b table {max-width:100%;}.widget-body.svelte-dsom6b table {width:100%;table-layout:fixed;}.widget-body.svelte-dsom6b td,
  .widget-body.svelte-dsom6b th,
  .widget-body.svelte-dsom6b p,
  .widget-body.svelte-dsom6b code,
  .widget-body.svelte-dsom6b span {overflow-wrap:anywhere;}.widget-body.svelte-dsom6b::-webkit-scrollbar {width:0.8rem;height:0.8rem;}.widget-body.svelte-dsom6b::-webkit-scrollbar-track {background:transparent;}.widget-body.svelte-dsom6b::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 46%);background-clip:padding-box;}.widget-footer.svelte-dsom6b {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding-top:1rem;padding-bottom:1.1rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 18%);}

  @media (max-width: 47.99rem) {.widget-header.svelte-dsom6b {flex-direction:column;}.widget-toolbar.svelte-dsom6b {justify-content:flex-start;}
  }`
};
function Lr(e, t) {
  St(t, !0), zt(e, Eu);
  let n = m(t, "eyebrow", 7), o = m(t, "title", 7), a = m(t, "description", 7), s = m(t, "mode", 7, "card"), i = m(t, "dataTestid", 7), d = m(t, "open", 7, !1), c = m(t, "pinned", 7, !1), u = m(t, "allowPopout", 7, !0), y = m(t, "onOpen", 7), P = m(t, "onTogglePin", 7), b = m(t, "actions", 7), z = m(t, "children", 7), j = m(t, "footer", 7);
  var R = {
    get eyebrow() {
      return n();
    },
    set eyebrow(ce) {
      n(ce), h();
    },
    get title() {
      return o();
    },
    set title(ce) {
      o(ce), h();
    },
    get description() {
      return a();
    },
    set description(ce) {
      a(ce), h();
    },
    get mode() {
      return s();
    },
    set mode(ce = "card") {
      s(ce), h();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(ce) {
      i(ce), h();
    },
    get open() {
      return d();
    },
    set open(ce = !1) {
      d(ce), h();
    },
    get pinned() {
      return c();
    },
    set pinned(ce = !1) {
      c(ce), h();
    },
    get allowPopout() {
      return u();
    },
    set allowPopout(ce = !0) {
      u(ce), h();
    },
    get onOpen() {
      return y();
    },
    set onOpen(ce) {
      y(ce), h();
    },
    get onTogglePin() {
      return P();
    },
    set onTogglePin(ce) {
      P(ce), h();
    },
    get actions() {
      return b();
    },
    set actions(ce) {
      b(ce), h();
    },
    get children() {
      return z();
    },
    set children(ce) {
      z(ce), h();
    },
    get footer() {
      return j();
    },
    set footer(ce) {
      j(ce), h();
    }
  }, x = $u();
  let k;
  var S = p(x), g = p(S), W = p(g), D = p(W, !0);
  v(W);
  var I = w(W, 2), X = p(I), A = p(X, !0);
  v(X);
  var K = w(X, 2);
  {
    var ue = (ce) => {
      var xe = Wu(), $e = p(xe, !0);
      v(xe), ve(() => {
        F(xe, "data-state", c() ? "pinned" : "open"), de($e, c() ? "Pinned" : "Open");
      }), B(ce, xe);
    };
    ye(K, (ce) => {
      d() && ce(ue);
    });
  }
  v(I), v(g);
  var H = w(g, 2), oe = p(H);
  {
    var ae = (ce) => {
      var xe = Ru(), $e = p(xe);
      rt($e, { name: "popout" }), v(xe), ve(() => {
        F(xe, "aria-label", d() ? "Focus widget window" : "Pop out widget"), F(xe, "title", d() ? "Focus widget window" : "Pop out widget");
      }), he("click", xe, function(...nt) {
        var pt;
        (pt = y()) == null || pt.apply(this, nt);
      }), B(ce, xe);
    };
    ye(oe, (ce) => {
      u() && s() === "card" && y() && ce(ae);
    });
  }
  var $ = w(oe, 2);
  {
    var fe = (ce) => {
      var xe = Au();
      let $e;
      var nt = p(xe);
      rt(nt, { name: "pin" }), v(xe), ve(() => {
        $e = Ie(xe, 1, "widget-icon-button svelte-dsom6b", null, $e, { "is-active": c() }), F(xe, "aria-label", c() ? "Unpin widget" : "Pin widget"), F(xe, "aria-pressed", c()), F(xe, "title", c() ? "Unpin widget" : "Pin widget");
      }), he("click", xe, function(...pt) {
        var Ge;
        (Ge = P()) == null || Ge.apply(this, pt);
      }), B(ce, xe);
    };
    ye($, (ce) => {
      P() && ce(fe);
    });
  }
  var G = w($, 2), ee = p(G), ge = p(ee);
  rt(ge, { name: "help" }), v(ee);
  var me = w(ee, 2), we = p(me), ie = p(we, !0);
  v(we);
  var se = w(we, 2), le = p(se, !0);
  v(se), v(me), v(G);
  var qe = w(G, 2);
  {
    var ze = (ce) => {
      var xe = Cu(), $e = p(xe);
      Jn($e, b), v(xe), B(ce, xe);
    };
    ye(qe, (ce) => {
      b() && ce(ze);
    });
  }
  v(H), v(S);
  var Me = w(S, 2), Ne = p(Me);
  Jn(Ne, () => z() ?? Ao), v(Me);
  var Qe = w(Me, 2);
  {
    var lt = (ce) => {
      var xe = Ou(), $e = p(xe);
      Jn($e, j), v(xe), B(ce, xe);
    };
    ye(Qe, (ce) => {
      j() && ce(lt);
    });
  }
  return v(x), ve(() => {
    k = Ie(x, 1, "widget-frame svelte-dsom6b", null, k, { "window-mode": s() === "window" }), F(x, "data-testid", i()), de(D, n()), de(A, o()), F(ee, "aria-label", `About ${o()}`), F(ee, "title", `About ${o()}`), de(ie, o()), de(le, a());
  }), B(e, x), Pt(R);
}
Er(["click"]);
Wt(
  Lr,
  {
    eyebrow: {},
    title: {},
    description: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    allowPopout: {},
    onOpen: {},
    onTogglePin: {},
    actions: {},
    children: {},
    footer: {}
  },
  [],
  [],
  { mode: "open" }
);
var Lu = /* @__PURE__ */ J('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon svelte-wqeobd"></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button type="button"><!></button> <button type="button"><!></button> <button type="button" title="Open widget"><!></button></div></article>'), Du = /* @__PURE__ */ J('<div class="empty-state svelte-wqeobd">No custom buttons yet. Build one below and it will show up here.</div>'), Iu = /* @__PURE__ */ J('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon button-row-icon-app svelte-wqeobd"><!></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd">Macro</span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button class="row-action svelte-wqeobd" type="button" title="Run now"><!></button> <button class="row-action destructive svelte-wqeobd" type="button" title="Delete custom button"><!></button></div></article>'), Nu = /* @__PURE__ */ J("<option> </option>"), Fu = /* @__PURE__ */ J('<div><button type="button"><span class="step-icon svelte-wqeobd"></span> <span class="svelte-wqeobd"> </span></button> <button type="button" title="Pin when opened"><!></button></div>'), Bu = /* @__PURE__ */ J('<div class="manager-summary svelte-wqeobd"><span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span></div> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Workspace widgets</strong> <span class="svelte-wqeobd">Accent rows are loaded. Matte rows stay available until you add them.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Workspace widgets"></div></section> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Custom buttons</strong> <span class="svelte-wqeobd">Chain widgets together for repeat admin flows and keep the button on the toolbar if you use it often.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Custom toolbar actions"><!> <!></div> <form class="builder svelte-wqeobd"><div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Button label</span> <input type="text" maxlength="28" placeholder="Search stack" class="svelte-wqeobd"/></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Toolbar text</span> <input type="text" maxlength="18" placeholder="Stack" class="svelte-wqeobd"/></label></div> <div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Icon</span> <select class="svelte-wqeobd"></select></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Summary</span> <input type="text" maxlength="96" placeholder="Open a focused set of admin widgets together." class="svelte-wqeobd"/></label></div> <div class="field svelte-wqeobd"><span class="svelte-wqeobd">Steps</span> <div class="step-list svelte-wqeobd" role="group" aria-label="Custom button steps"></div></div> <div class="builder-actions svelte-wqeobd"><button class="create-button svelte-wqeobd" type="submit"><!> Add custom button</button></div></form></section>', 1);
const Hu = {
  hash: "svelte-wqeobd",
  code: `.manager-summary.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.manager-summary.svelte-wqeobd span:where(.svelte-wqeobd),
  .row-chip.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;min-height:1.8rem;padding:0 0.72rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.manager-section.svelte-wqeobd {display:flex;flex-direction:column;gap:0.8rem;}.section-heading.svelte-wqeobd {display:flex;flex-direction:column;gap:0.22rem;}.section-heading.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.section-heading.svelte-wqeobd span:where(.svelte-wqeobd),
  .empty-state.svelte-wqeobd {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.button-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.6rem;}.button-row.svelte-wqeobd {display:grid;gap:0.55rem;padding:0.72rem 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);transition:border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;}.button-row.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 88%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 78%);}.button-row.is-muted.svelte-wqeobd {opacity:0.82;}.button-row-main.svelte-wqeobd {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.72rem;width:100%;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;text-align:left;}.button-row-icon.svelte-wqeobd {display:inline-flex;width:2.15rem;height:2.15rem;align-items:center;justify-content:center;border-radius:14px;background:color-mix(in srgb, var(--shell-panel), transparent 4%);color:var(--shell-text);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 18%);flex:none;}.button-row-icon.svelte-wqeobd::before {content:'';width:1rem;height:1rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}.button-row-icon-app.svelte-wqeobd::before {content:none;}.button-row-icon.svelte-wqeobd .app-icon {width:1rem;height:1rem;}.button-row-copy.svelte-wqeobd {display:flex;flex-direction:column;gap:0.16rem;min-width:0;}.button-row-copy.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.button-row-copy.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;overflow-wrap:anywhere;}.button-row-meta.svelte-wqeobd,
  .button-row-actions.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.row-action.svelte-wqeobd,
  .pin-toggle.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;width:2.1rem;height:2.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;}.row-action.svelte-wqeobd:hover,
  .pin-toggle.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 46%);color:var(--shell-text);}.row-action.is-active.svelte-wqeobd,
  .pin-toggle.is-active.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.row-action.destructive.svelte-wqeobd:hover {border-color:color-mix(in srgb, #ef4444, transparent 28%);background:color-mix(in srgb, #ef4444, transparent 90%);color:#fca5a5;}.row-action.svelte-wqeobd .app-icon,
  .pin-toggle.svelte-wqeobd .app-icon {width:0.92rem;height:0.92rem;}.builder.svelte-wqeobd {display:flex;flex-direction:column;gap:0.75rem;padding-top:0.4rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 18%);}.builder-grid.svelte-wqeobd {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.65rem;}.field.svelte-wqeobd {display:flex;flex-direction:column;gap:0.38rem;min-width:0;}.field.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.field.svelte-wqeobd input:where(.svelte-wqeobd),
  .field.svelte-wqeobd select:where(.svelte-wqeobd) {width:100%;min-width:0;padding:0.72rem 0.82rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:14px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-text);font:var(--efs-font-body-sm);}.step-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.45rem;}.step-row.svelte-wqeobd {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.5rem;align-items:center;}.step-toggle.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.6rem;min-height:2.4rem;padding:0 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:16px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-muted);cursor:pointer;transition:border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;}.step-toggle.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);color:var(--shell-text);}.step-icon.svelte-wqeobd {display:inline-flex;width:0.95rem;height:0.95rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;flex:none;}.builder-actions.svelte-wqeobd {display:flex;justify-content:flex-end;}.create-button.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.55rem;min-height:2.55rem;padding:0 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);cursor:pointer;font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      opacity 160ms ease;}.create-button.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 38%);}.create-button.svelte-wqeobd:disabled,
  .pin-toggle.svelte-wqeobd:disabled {opacity:0.42;cursor:not-allowed;}.create-button.svelte-wqeobd .app-icon {width:0.95rem;height:0.95rem;}

  @media (max-width: 47.99rem) {.builder-grid.svelte-wqeobd {grid-template-columns:1fr;}
  }`
};
function Yl(e, t) {
  St(t, !0), zt(e, Hu);
  let n = m(t, "items", 7), o = m(t, "actionIconOptions", 7), a = m(t, "mode", 7, "card"), s = m(t, "onToggleToolbar", 7), i = m(t, "onToggleWorkspace", 7), d = m(t, "onToggleEdgePin", 7), c = m(t, "onOpenWidget", 7), u = m(t, "onToggleToolbarAction", 7), y = m(t, "onRunAction", 7), P = m(t, "onDeleteAction", 7), b = m(t, "onCreateAction", 7), z = /* @__PURE__ */ M(() => n().filter((A) => A.kind === "widget")), j = /* @__PURE__ */ M(() => n().filter((A) => A.kind === "action")), R = /* @__PURE__ */ M(() => n().filter((A) => A.inToolbar).length), x = /* @__PURE__ */ M(() => r(z).filter((A) => A.inWorkspace).length), k = /* @__PURE__ */ M(() => {
    var A;
    return ((A = o()[0]) == null ? void 0 : A.value) ?? "buttons-manager";
  }), S = /* @__PURE__ */ ne(dt({
    label: "",
    barLabel: "",
    summary: "",
    iconName: "buttons-manager",
    steps: []
  }));
  function g(A) {
    return r(S).steps.some((K) => K.widgetId === A);
  }
  function W(A) {
    if (g(A)) {
      r(S).steps = r(S).steps.filter((K) => K.widgetId !== A);
      return;
    }
    r(S).steps = [...r(S).steps, { widgetId: A, pinned: !1 }];
  }
  function D(A) {
    r(S).steps = r(S).steps.map((K) => K.widgetId === A ? { ...K, pinned: !K.pinned } : K);
  }
  function I() {
    const A = r(S).label.trim();
    !A || r(S).steps.length === 0 || (b()({
      label: A,
      barLabel: r(S).barLabel.trim(),
      summary: r(S).summary.trim(),
      iconName: r(S).iconName,
      steps: r(S).steps
    }), q(
      S,
      {
        label: "",
        barLabel: "",
        summary: "",
        iconName: r(k),
        steps: []
      },
      !0
    ));
  }
  an(() => {
    o().some((A) => A.value === r(S).iconName) || (r(S).iconName = r(k));
  });
  var X = {
    get items() {
      return n();
    },
    set items(A) {
      n(A), h();
    },
    get actionIconOptions() {
      return o();
    },
    set actionIconOptions(A) {
      o(A), h();
    },
    get mode() {
      return a();
    },
    set mode(A = "card") {
      a(A), h();
    },
    get onToggleToolbar() {
      return s();
    },
    set onToggleToolbar(A) {
      s(A), h();
    },
    get onToggleWorkspace() {
      return i();
    },
    set onToggleWorkspace(A) {
      i(A), h();
    },
    get onToggleEdgePin() {
      return d();
    },
    set onToggleEdgePin(A) {
      d(A), h();
    },
    get onOpenWidget() {
      return c();
    },
    set onOpenWidget(A) {
      c(A), h();
    },
    get onToggleToolbarAction() {
      return u();
    },
    set onToggleToolbarAction(A) {
      u(A), h();
    },
    get onRunAction() {
      return y();
    },
    set onRunAction(A) {
      y(A), h();
    },
    get onDeleteAction() {
      return P();
    },
    set onDeleteAction(A) {
      P(A), h();
    },
    get onCreateAction() {
      return b();
    },
    set onCreateAction(A) {
      b(A), h();
    }
  };
  return Lr(e, {
    eyebrow: "Workspace tools",
    title: "Buttons & widgets",
    description: "Add or remove toolbar buttons, hide widgets from the canvas, pin shortcuts to the browser edge, and build custom button chains.",
    get mode() {
      return a();
    },
    allowPopout: !1,
    children: (A, K) => {
      var ue = Bu(), H = Mt(ue), oe = p(H), ae = p(oe);
      v(oe);
      var $ = w(oe, 2), fe = p($);
      v($);
      var G = w($, 2), ee = p(G);
      v(G), v(H);
      var ge = w(H, 2), me = w(p(ge), 2);
      xt(me, 21, () => r(z), (N) => N.id, (N, L) => {
        var ke = Lu();
        let C;
        var te = p(ke), Ae = p(te);
        let Fe;
        var Be = w(Ae, 2), Te = p(Be), E = p(Te, !0);
        v(Te);
        var Je = w(Te, 2), He = p(Je, !0);
        v(Je), v(Be), v(te);
        var V = w(te, 2), ut = p(V), gt = p(ut, !0);
        v(ut);
        var ot = w(ut, 2), tt = p(ot, !0);
        v(ot);
        var ht = w(ot, 2), Ct = p(ht, !0);
        v(ht), v(V);
        var Yt = w(V, 2), wt = p(Yt);
        let vt;
        var gr = p(wt);
        rt(gr, { name: "restore" }), v(wt);
        var st = w(wt, 2);
        let Dt;
        var wr = p(st);
        rt(wr, { name: "edge" }), v(st);
        var Vt = w(st, 2);
        let Ot;
        var bt = p(Vt);
        rt(bt, { name: "open" }), v(Vt), v(Yt), v(ke), ve(() => {
          C = Ie(ke, 1, "button-row svelte-wqeobd", null, C, {
            "is-selected": r(L).inToolbar,
            "is-muted": !r(L).inToolbar && !r(L).inWorkspace && !r(L).edgePinned
          }), F(te, "aria-pressed", r(L).inToolbar), F(te, "aria-label", r(L).inToolbar ? `Remove ${r(L).label} from the toolbar` : `Add ${r(L).label} to the toolbar`), Fe = fr(Ae, "", Fe, { "--icon-mask": r(L).iconMask }), de(E, r(L).label), de(He, r(L).summary), de(gt, r(L).group), de(tt, r(L).presentation === "label" ? r(L).barLabel : "Icon button"), de(Ct, r(L).inWorkspace ? "Canvas" : "Hidden"), vt = Ie(wt, 1, "row-action svelte-wqeobd", null, vt, { "is-active": r(L).inWorkspace }), F(wt, "aria-pressed", r(L).inWorkspace), F(wt, "aria-label", r(L).inWorkspace ? `Remove ${r(L).label} from the workspace canvas` : `Add ${r(L).label} back to the workspace canvas`), F(wt, "title", r(L).inWorkspace ? "Remove from canvas" : "Add to canvas"), Dt = Ie(st, 1, "row-action svelte-wqeobd", null, Dt, { "is-active": r(L).edgePinned }), F(st, "aria-pressed", r(L).edgePinned), F(st, "aria-label", r(L).edgePinned ? `Remove ${r(L).label} from the browser edge` : `Pin ${r(L).label} to the browser edge`), F(st, "title", r(L).edgePinned ? "Unpin edge shortcut" : "Pin to edge"), Ot = Ie(Vt, 1, "row-action svelte-wqeobd", null, Ot, { "is-active": r(L).open }), F(Vt, "aria-label", `Open ${r(L).label}`);
        }), he("click", te, () => s()(r(L).id)), he("click", wt, () => i()(r(L).id)), he("click", st, () => d()(r(L).id)), he("click", Vt, () => c()(r(L).id)), B(N, ke);
      }), v(me), v(ge);
      var we = w(ge, 2), ie = w(p(we), 2), se = p(ie);
      {
        var le = (N) => {
          var L = Du();
          B(N, L);
        };
        ye(se, (N) => {
          r(j).length === 0 && N(le);
        });
      }
      var qe = w(se, 2);
      xt(qe, 17, () => r(j), (N) => N.id, (N, L) => {
        var ke = Iu();
        let C;
        var te = p(ke), Ae = p(te), Fe = p(Ae);
        rt(Fe, {
          get name() {
            return r(L).iconName;
          }
        }), v(Ae);
        var Be = w(Ae, 2), Te = p(Be), E = p(Te, !0);
        v(Te);
        var Je = w(Te, 2), He = p(Je, !0);
        v(Je), v(Be), v(te);
        var V = w(te, 2), ut = w(p(V), 2), gt = p(ut);
        v(ut);
        var ot = w(ut, 2), tt = p(ot, !0);
        v(ot), v(V);
        var ht = w(V, 2), Ct = p(ht), Yt = p(Ct);
        rt(Yt, { name: "open" }), v(Ct);
        var wt = w(Ct, 2), vt = p(wt);
        rt(vt, { name: "close" }), v(wt), v(ht), v(ke), ve(() => {
          C = Ie(ke, 1, "button-row svelte-wqeobd", null, C, { "is-selected": r(L).inToolbar }), F(te, "aria-pressed", r(L).inToolbar), F(te, "aria-label", r(L).inToolbar ? `Remove ${r(L).label} from the toolbar` : `Add ${r(L).label} to the toolbar`), de(E, r(L).label), de(He, r(L).summary), de(gt, `${r(L).stepCount ?? ""} step${r(L).stepCount === 1 ? "" : "s"}`), de(tt, r(L).barLabel), F(Ct, "aria-label", `Run ${r(L).label}`), F(wt, "aria-label", `Delete ${r(L).label}`);
        }), he("click", te, () => u()(r(L).id)), he("click", Ct, () => y()(r(L).id)), he("click", wt, () => P()(r(L).id)), B(N, ke);
      }), v(ie);
      var ze = w(ie, 2), Me = p(ze), Ne = p(Me), Qe = w(p(Ne), 2);
      sr(Qe), v(Ne);
      var lt = w(Ne, 2), ce = w(p(lt), 2);
      sr(ce), v(lt), v(Me);
      var xe = w(Me, 2), $e = p(xe), nt = w(p($e), 2);
      xt(nt, 21, o, (N) => N.value, (N, L) => {
        var ke = Nu(), C = p(ke, !0);
        v(ke);
        var te = {};
        ve(() => {
          de(C, r(L).label), te !== (te = r(L).value) && (ke.value = (ke.__value = r(L).value) ?? "");
        }), B(N, ke);
      }), v(nt), v($e);
      var pt = w($e, 2), Ge = w(p(pt), 2);
      sr(Ge), v(pt), v(xe);
      var mt = w(xe, 2), et = w(p(mt), 2);
      xt(et, 21, () => r(z), (N) => N.id, (N, L) => {
        var ke = Fu();
        let C;
        var te = p(ke);
        let Ae;
        var Fe = p(te);
        let Be;
        var Te = w(Fe, 2), E = p(Te, !0);
        v(Te), v(te);
        var Je = w(te, 2);
        let He;
        var V = p(Je);
        rt(V, { name: "pin" }), v(Je), v(ke), ve(
          (ut, gt, ot, tt, ht) => {
            C = Ie(ke, 1, "step-row svelte-wqeobd", null, C, ut), Ae = Ie(te, 1, "step-toggle svelte-wqeobd", null, Ae, gt), F(te, "aria-pressed", ot), Be = fr(Fe, "", Be, { "--icon-mask": r(L).iconMask }), de(E, r(L).label), He = Ie(Je, 1, "pin-toggle svelte-wqeobd", null, He, tt), Je.disabled = ht, F(Je, "aria-label", `Pin ${r(L).label} when this custom button runs`);
          },
          [
            () => ({ "is-selected": g(r(L).id) }),
            () => ({ "is-selected": g(r(L).id) }),
            () => g(r(L).id),
            () => {
              var ut;
              return {
                "is-active": g(r(L).id) && ((ut = r(S).steps.find((gt) => gt.widgetId === r(L).id)) == null ? void 0 : ut.pinned)
              };
            },
            () => !g(r(L).id)
          ]
        ), he("click", te, () => W(r(L).id)), he("click", Je, () => D(r(L).id)), B(N, ke);
      }), v(et), v(mt);
      var kt = w(mt, 2), ct = p(kt), ft = p(ct);
      rt(ft, { name: "buttons-manager" }), Rr(), v(ct), v(kt), v(ze), v(we), ve(
        (N) => {
          de(ae, `${r(R) ?? ""} on toolbar`), de(fe, `${r(x) ?? ""} on canvas`), de(ee, `${r(j).length ?? ""} custom`), ct.disabled = N;
        },
        [
          () => r(S).label.trim().length === 0 || r(S).steps.length === 0
        ]
      ), qo("submit", ze, (N) => {
        N.preventDefault(), I();
      }), Jr(Qe, () => r(S).label, (N) => r(S).label = N), Jr(ce, () => r(S).barLabel, (N) => r(S).barLabel = N), Dl(nt, () => r(S).iconName, (N) => r(S).iconName = N), Jr(Ge, () => r(S).summary, (N) => r(S).summary = N), B(A, ue);
    },
    $$slots: { default: !0 }
  }), Pt(X);
}
Er(["click"]);
Wt(
  Yl,
  {
    items: {},
    actionIconOptions: {},
    mode: {},
    onToggleToolbar: {},
    onToggleWorkspace: {},
    onToggleEdgePin: {},
    onOpenWidget: {},
    onToggleToolbarAction: {},
    onRunAction: {},
    onDeleteAction: {},
    onCreateAction: {}
  },
  [],
  [],
  { mode: "open" }
);
var Yu = /* @__PURE__ */ J('<button type="button"><span class="svelte-1gyj5vm"> </span> <!></button>'), Vu = /* @__PURE__ */ J('<span class="activity-label svelte-1gyj5vm"> </span>'), Uu = /* @__PURE__ */ J('<button type="button"><span class="activity-icon svelte-1gyj5vm"></span> <!></button>'), Xu = /* @__PURE__ */ J('<section class="workspace-toolbar-shell svelte-1gyj5vm"><div class="workspace-toolbar-main svelte-1gyj5vm" role="toolbar" aria-label="Admin workspace toolbar"><div class="workspace-toolbar-start svelte-1gyj5vm"><button type="button"><!> <span class="svelte-1gyj5vm">Buttons + widgets</span></button> <div class="workspace-strip svelte-1gyj5vm" aria-label="Workspace slots"><!> <button class="save-button svelte-1gyj5vm" type="button" aria-label="Save workspace" title="Save workspace"><!> <span class="svelte-1gyj5vm">Save</span></button> <span class="workspace-saved svelte-1gyj5vm"> </span></div></div> <div class="activity-bar svelte-1gyj5vm"></div> <div class="workspace-toolbar-end svelte-1gyj5vm"><div><button class="control-button reset-button svelte-1gyj5vm" type="button" aria-label="Reset workspace" title="Reset workspace"><!> <span class="svelte-1gyj5vm">Reset</span></button> <button class="reset-question svelte-1gyj5vm" type="button" tabindex="-1" aria-hidden="true" title="Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.">❓</button> <div class="reset-tooltip svelte-1gyj5vm" role="tooltip">Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.</div></div> <button type="button"><!> <span class="svelte-1gyj5vm"> </span></button></div></div> <!></section>');
const Gu = {
  hash: "svelte-1gyj5vm",
  code: `.workspace-toolbar-shell.svelte-1gyj5vm {position:relative;}.workspace-toolbar-main.svelte-1gyj5vm {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.85rem;align-items:center;padding:0.7rem 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:24px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 72%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);box-shadow:var(--shell-card-shadow);}.workspace-toolbar-start.svelte-1gyj5vm,
  .workspace-toolbar-end.svelte-1gyj5vm,
  .workspace-strip.svelte-1gyj5vm,
  .activity-bar.svelte-1gyj5vm {display:inline-flex;align-items:center;gap:0.5rem;min-width:0;}.workspace-toolbar-start.svelte-1gyj5vm {flex-wrap:wrap;}.manager-button.svelte-1gyj5vm,
  .workspace-pill.svelte-1gyj5vm,
  .save-button.svelte-1gyj5vm,
  .control-button.svelte-1gyj5vm,
  .activity-button.svelte-1gyj5vm {display:inline-flex;align-items:center;justify-content:center;gap:0.55rem;min-height:2.55rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);color:var(--shell-muted);cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease,
      box-shadow 160ms ease;}.manager-button.svelte-1gyj5vm:hover:not(:disabled),
  .workspace-pill.svelte-1gyj5vm:hover:not(:disabled),
  .save-button.svelte-1gyj5vm:hover,
  .control-button.svelte-1gyj5vm:hover:not(:disabled),
  .activity-button.svelte-1gyj5vm:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);color:var(--shell-text);}.manager-button.svelte-1gyj5vm {padding:0 1rem;border-radius:18px;border-color:color-mix(in srgb, var(--shell-primary), transparent 54%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 86%);color:var(--shell-text);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 80%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.manager-button.is-active.svelte-1gyj5vm {border-color:color-mix(in srgb, var(--shell-primary), transparent 36%);background:color-mix(in srgb, var(--shell-primary), transparent 78%);}.manager-button.svelte-1gyj5vm .app-icon,
  .workspace-pill.svelte-1gyj5vm .app-icon,
  .save-button.svelte-1gyj5vm .app-icon,
  .control-button.svelte-1gyj5vm .app-icon,
  .activity-button.svelte-1gyj5vm .app-icon {width:1rem;height:1rem;}.workspace-strip.svelte-1gyj5vm {flex-wrap:wrap;}.workspace-pill.svelte-1gyj5vm,
  .save-button.svelte-1gyj5vm,
  .control-button.svelte-1gyj5vm {padding:0 0.9rem;border-radius:16px;background:color-mix(in srgb, var(--shell-surface), transparent 6%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.workspace-pill.is-active.svelte-1gyj5vm {border-color:color-mix(in srgb, var(--shell-primary), transparent 60%);background:color-mix(in srgb, var(--shell-row-hover), transparent 2%);color:var(--shell-text);}.workspace-pill.is-locked.svelte-1gyj5vm {opacity:0.54;cursor:not-allowed;}.workspace-saved.svelte-1gyj5vm {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.activity-bar.svelte-1gyj5vm {min-width:0;flex-wrap:wrap;justify-content:center;}.activity-button.svelte-1gyj5vm {padding:0 0.8rem;border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 6%);}.activity-button.svelte-1gyj5vm:not(.is-label) {width:2.7rem;padding-inline:0;}.activity-button.is-active.svelte-1gyj5vm {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.activity-icon.svelte-1gyj5vm {display:inline-flex;width:1rem;height:1rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}.activity-label.svelte-1gyj5vm {min-width:0;max-width:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.workspace-toolbar-end.svelte-1gyj5vm {justify-content:flex-end;}.control-button.is-active.svelte-1gyj5vm {border-color:color-mix(in srgb, var(--shell-primary), transparent 56%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);color:var(--shell-text);}.control-button.svelte-1gyj5vm:disabled {opacity:0.42;cursor:not-allowed;}.reset-shell.svelte-1gyj5vm {position:relative;display:inline-flex;align-items:center;}.reset-button.svelte-1gyj5vm {position:relative;z-index:2;border-color:color-mix(in srgb, #ef4444, transparent 52%);background:color-mix(in srgb, #ef4444, transparent 92%);color:#fca5a5;}.reset-button.svelte-1gyj5vm:hover:not(:disabled) {border-color:color-mix(in srgb, #ef4444, transparent 18%);background:color-mix(in srgb, #ef4444, transparent 88%);color:#fee2e2;}.reset-question.svelte-1gyj5vm {position:absolute;right:0.18rem;z-index:1;width:1.35rem;height:1.35rem;border:1px solid color-mix(in srgb, #f8fafc, transparent 8%);border-radius:999px;background:rgba(15, 23, 42, 0.94);color:#f8fafc;cursor:help;opacity:0;pointer-events:none;transform:translate(0.2rem, 0.1rem) scale(0.8);transition:opacity 160ms ease,
      transform 160ms ease;}.reset-shell.is-armed.svelte-1gyj5vm .reset-question:where(.svelte-1gyj5vm),
  .reset-shell.svelte-1gyj5vm:hover .reset-question:where(.svelte-1gyj5vm),
  .reset-shell.svelte-1gyj5vm:focus-within .reset-question:where(.svelte-1gyj5vm) {opacity:1;transform:translate(1.15rem, 0.35rem) scale(1);pointer-events:auto;}.reset-tooltip.svelte-1gyj5vm {position:absolute;right:0;top:calc(100% + 0.68rem);z-index:4;width:min(20rem, 70vw);padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, #ef4444, transparent 58%);border-radius:16px;background:radial-gradient(circle at top left, rgba(239, 68, 68, 0.12), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 82%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:var(--shell-card-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 24%);font:var(--efs-font-body-sm);line-height:1.5;opacity:0;pointer-events:none;transform:translateY(-0.2rem);transition:opacity 140ms ease,
      transform 140ms ease;}.reset-shell.svelte-1gyj5vm:hover .reset-tooltip:where(.svelte-1gyj5vm),
  .reset-shell.svelte-1gyj5vm:focus-within .reset-tooltip:where(.svelte-1gyj5vm) {opacity:1;transform:translateY(0);}

  @media (max-width: 71.99rem) {.workspace-toolbar-main.svelte-1gyj5vm {grid-template-columns:1fr;}.activity-bar.svelte-1gyj5vm {justify-content:flex-start;}.workspace-toolbar-end.svelte-1gyj5vm {justify-content:flex-start;}
  }

  @media (max-width: 47.99rem) {.workspace-saved.svelte-1gyj5vm,
    .workspace-pill.svelte-1gyj5vm span:where(.svelte-1gyj5vm):not(:first-child),
    .manager-button.svelte-1gyj5vm span:where(.svelte-1gyj5vm),
    .save-button.svelte-1gyj5vm span:where(.svelte-1gyj5vm),
    .control-button.svelte-1gyj5vm span:where(.svelte-1gyj5vm) {display:none;}.manager-button.svelte-1gyj5vm,
    .save-button.svelte-1gyj5vm,
    .control-button.svelte-1gyj5vm {width:2.7rem;padding-inline:0;}.workspace-pill.svelte-1gyj5vm {padding-inline:0.75rem;}
  }`
};
function Vl(e, t) {
  St(t, !0), zt(e, Gu);
  let n = m(t, "items", 7), o = m(t, "profiles", 7), a = m(t, "editing", 7), s = m(t, "compact", 7), i = m(t, "layoutDirty", 7), d = m(t, "managerOpen", 7), c = m(t, "actionIconOptions", 7), u = m(t, "onToggleEditing", 7), y = m(t, "onResetLayout", 7), P = m(t, "onSaveWorkspace", 7), b = m(t, "onToggleManager", 7), z = m(t, "onActivateWidget", 7), j = m(t, "onToggleToolbar", 7), R = m(t, "onToggleWorkspace", 7), x = m(t, "onToggleEdgePin", 7), k = m(t, "onActivateAction", 7), S = m(t, "onToggleToolbarAction", 7), g = m(t, "onDeleteAction", 7), W = m(t, "onCreateAction", 7), D = /* @__PURE__ */ ne(null), I = /* @__PURE__ */ ne(!1), X = null, A = /* @__PURE__ */ M(() => n().filter((N) => N.inToolbar)), K = /* @__PURE__ */ M(() => o()[0] ?? null), ue = /* @__PURE__ */ M(() => {
    var N;
    return (N = r(K)) != null && N.savedAt ? `Saved ${new Intl.DateTimeFormat(void 0, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date(r(K).savedAt))}` : "Unsaved";
  });
  function H(N) {
    return N.kind === "widget";
  }
  function oe(N) {
    return !H(N) || N.presentation === "label";
  }
  function ae() {
    X && (clearTimeout(X), X = null), q(I, !1);
  }
  function $() {
    ae(), q(I, !0), X = setTimeout(
      () => {
        q(I, !1), X = null;
      },
      2400
    );
  }
  function fe() {
    if (!(s() || !i())) {
      if (r(I)) {
        ae(), y()();
        return;
      }
      $();
    }
  }
  Ec(() => {
    ae();
  });
  var G = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), h();
    },
    get profiles() {
      return o();
    },
    set profiles(N) {
      o(N), h();
    },
    get editing() {
      return a();
    },
    set editing(N) {
      a(N), h();
    },
    get compact() {
      return s();
    },
    set compact(N) {
      s(N), h();
    },
    get layoutDirty() {
      return i();
    },
    set layoutDirty(N) {
      i(N), h();
    },
    get managerOpen() {
      return d();
    },
    set managerOpen(N) {
      d(N), h();
    },
    get actionIconOptions() {
      return c();
    },
    set actionIconOptions(N) {
      c(N), h();
    },
    get onToggleEditing() {
      return u();
    },
    set onToggleEditing(N) {
      u(N), h();
    },
    get onResetLayout() {
      return y();
    },
    set onResetLayout(N) {
      y(N), h();
    },
    get onSaveWorkspace() {
      return P();
    },
    set onSaveWorkspace(N) {
      P(N), h();
    },
    get onToggleManager() {
      return b();
    },
    set onToggleManager(N) {
      b(N), h();
    },
    get onActivateWidget() {
      return z();
    },
    set onActivateWidget(N) {
      z(N), h();
    },
    get onToggleToolbar() {
      return j();
    },
    set onToggleToolbar(N) {
      j(N), h();
    },
    get onToggleWorkspace() {
      return R();
    },
    set onToggleWorkspace(N) {
      R(N), h();
    },
    get onToggleEdgePin() {
      return x();
    },
    set onToggleEdgePin(N) {
      x(N), h();
    },
    get onActivateAction() {
      return k();
    },
    set onActivateAction(N) {
      k(N), h();
    },
    get onToggleToolbarAction() {
      return S();
    },
    set onToggleToolbarAction(N) {
      S(N), h();
    },
    get onDeleteAction() {
      return g();
    },
    set onDeleteAction(N) {
      g(N), h();
    },
    get onCreateAction() {
      return W();
    },
    set onCreateAction(N) {
      W(N), h();
    }
  }, ee = Xu(), ge = p(ee), me = p(ge), we = p(me);
  let ie;
  var se = p(we);
  rt(se, { name: "buttons-manager" }), Rr(2), v(we), na(we, (N) => q(D, N), () => r(D));
  var le = w(we, 2), qe = p(le);
  xt(qe, 17, o, (N) => N.id, (N, L) => {
    var ke = Yu();
    let C;
    var te = p(ke), Ae = p(te, !0);
    v(te);
    var Fe = w(te, 2);
    {
      var Be = (Te) => {
        rt(Te, { name: "layout-lock" });
      };
      ye(Fe, (Te) => {
        r(L).locked && Te(Be);
      });
    }
    v(ke), ve(() => {
      C = Ie(ke, 1, "workspace-pill svelte-1gyj5vm", null, C, {
        "is-active": !r(L).locked,
        "is-locked": r(L).locked
      }), ke.disabled = r(L).locked, F(ke, "aria-label", r(L).locked ? `${r(L).label} is locked` : `${r(L).label} is active`), F(ke, "title", r(L).locked ? `${r(L).label} is locked` : `${r(L).label} is active`), de(Ae, r(L).label);
    }), B(N, ke);
  });
  var ze = w(qe, 2), Me = p(ze);
  rt(Me, { name: "restore" }), Rr(2), v(ze);
  var Ne = w(ze, 2), Qe = p(Ne, !0);
  v(Ne), v(le), v(me);
  var lt = w(me, 2);
  xt(lt, 21, () => r(A), (N) => N.id, (N, L) => {
    var ke = Uu();
    let C;
    var te = p(ke);
    let Ae;
    var Fe = w(te, 2);
    {
      var Be = (E) => {
        var Je = Vu(), He = p(Je, !0);
        v(Je), ve(() => de(He, r(L).barLabel)), B(E, Je);
      }, Te = /* @__PURE__ */ M(() => oe(r(L)));
      ye(Fe, (E) => {
        r(Te) && E(Be);
      });
    }
    v(ke), ve(
      (E, Je) => {
        C = Ie(ke, 1, "activity-button svelte-1gyj5vm", null, C, E), F(ke, "aria-label", Je), F(ke, "title", r(L).label), Ae = fr(te, "", Ae, { "--icon-mask": r(L).iconMask });
      },
      [
        () => ({
          "is-active": H(r(L)) && r(L).open,
          "is-label": oe(r(L))
        }),
        () => H(r(L)) ? `Open ${r(L).label}` : `Run ${r(L).label}`
      ]
    ), he("click", ke, () => H(r(L)) ? z()(r(L).id) : k()(r(L).id)), B(N, ke);
  }), v(lt);
  var ce = w(lt, 2), xe = p(ce);
  let $e;
  var nt = p(xe), pt = p(nt);
  rt(pt, { name: "layout-reset" }), Rr(2), v(nt), Rr(4), v(xe);
  var Ge = w(xe, 2);
  let mt;
  var et = p(Ge);
  {
    let N = /* @__PURE__ */ M(() => a() ? "layout-unlock" : "layout-lock");
    rt(et, {
      get name() {
        return r(N);
      }
    });
  }
  var kt = w(et, 2), ct = p(kt, !0);
  v(kt), v(Ge), v(ce), v(ge);
  var ft = w(ge, 2);
  return Hl(ft, {
    get open() {
      return d();
    },
    get anchor() {
      return r(D);
    },
    placement: "bottom-start",
    width: "min(24rem, calc(100vw - 1rem))",
    zIndex: 520,
    get onClose() {
      return b();
    },
    children: (N, L) => {
      Yl(N, {
        get items() {
          return n();
        },
        get actionIconOptions() {
          return c();
        },
        get onToggleToolbar() {
          return j();
        },
        get onToggleWorkspace() {
          return R();
        },
        get onToggleEdgePin() {
          return x();
        },
        get onOpenWidget() {
          return z();
        },
        get onToggleToolbarAction() {
          return S();
        },
        get onRunAction() {
          return k();
        },
        get onDeleteAction() {
          return g();
        },
        get onCreateAction() {
          return W();
        }
      });
    },
    $$slots: { default: !0 }
  }), v(ee), ve(() => {
    ie = Ie(we, 1, "manager-button svelte-1gyj5vm", null, ie, { "is-active": d() }), F(we, "aria-label", d() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), F(we, "aria-pressed", d()), F(we, "title", d() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), de(Qe, r(ue)), $e = Ie(xe, 1, "reset-shell svelte-1gyj5vm", null, $e, { "is-armed": r(I) }), nt.disabled = !i() || s(), mt = Ie(Ge, 1, "control-button svelte-1gyj5vm", null, mt, { "is-active": a() }), F(Ge, "aria-label", a() ? "Lock layout editing" : "Unlock layout editing"), F(Ge, "aria-pressed", a()), Ge.disabled = s(), F(Ge, "title", s() ? "Layout editing is disabled on compact screens" : a() ? "Lock layout editing" : "Unlock layout editing"), de(ct, a() ? "Layout unlocked" : "Layout locked");
  }), he("click", we, function(...N) {
    var L;
    (L = b()) == null || L.apply(this, N);
  }), he("click", ze, function(...N) {
    var L;
    (L = P()) == null || L.apply(this, N);
  }), he("click", nt, fe), he("click", Ge, function(...N) {
    var L;
    (L = u()) == null || L.apply(this, N);
  }), B(e, ee), Pt(G);
}
Er(["click"]);
Wt(
  Vl,
  {
    items: {},
    profiles: {},
    editing: {},
    compact: {},
    layoutDirty: {},
    managerOpen: {},
    actionIconOptions: {},
    onToggleEditing: {},
    onResetLayout: {},
    onSaveWorkspace: {},
    onToggleManager: {},
    onActivateWidget: {},
    onToggleToolbar: {},
    onToggleWorkspace: {},
    onToggleEdgePin: {},
    onActivateAction: {},
    onToggleToolbarAction: {},
    onDeleteAction: {},
    onCreateAction: {}
  },
  [],
  [],
  { mode: "open" }
);
const Ul = "efsdb:window-settings", Xl = "efsdb:window-settings:profiles", Ro = {
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
}, ga = {
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
}, Et = {
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
}, zs = /* @__PURE__ */ new Set();
let Bn = nv();
function Gl(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Jl(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function Ju(e) {
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
      return Et.buttonLayout;
  }
}
function Ku(e) {
  return e === "left" ? "left" : Et.systemButtonPlacement;
}
function Zu(e) {
  return e === "mirrored" ? "mirrored" : Et.sideResizeMode;
}
function Qu(e) {
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
      return Et.themePreset;
  }
}
function ev(e) {
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
      return Et.fontPreset;
  }
}
function tv(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return Et.shiftDragAction;
  }
}
function cs(e, t, n, o) {
  const a = Number(e);
  return Number.isFinite(a) ? Math.max(n, Math.min(o, Math.round(a))) : t;
}
function Ma(e) {
  return {
    buttonLayout: Ju(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: Ku(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: Zu(e == null ? void 0 : e.sideResizeMode),
    borderWidth: cs(
      e == null ? void 0 : e.borderWidth,
      Et.borderWidth,
      0,
      12
    ),
    borderRadius: cs(
      e == null ? void 0 : e.borderRadius,
      Et.borderRadius,
      0,
      32
    ),
    chromePadding: cs(
      e == null ? void 0 : e.chromePadding,
      Et.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : Et.chromeStyle,
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : Et.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : Et.snapRestoreOnRelease,
    shiftDragAction: tv(e == null ? void 0 : e.shiftDragAction),
    themePreset: Qu(e == null ? void 0 : e.themePreset),
    fontPreset: ev(e == null ? void 0 : e.fontPreset)
  };
}
function Ws(e, t) {
  return e.buttonLayout === t.buttonLayout && e.systemButtonPlacement === t.systemButtonPlacement && e.sideResizeMode === t.sideResizeMode && e.borderWidth === t.borderWidth && e.borderRadius === t.borderRadius && e.chromePadding === t.chromePadding && e.chromeStyle === t.chromeStyle && e.alignment === t.alignment && e.snapRestoreOnRelease === t.snapRestoreOnRelease && e.shiftDragAction === t.shiftDragAction && e.themePreset === t.themePreset && e.fontPreset === t.fontPreset;
}
function Fo(e) {
  const t = Ro[e] ?? Ro.inherit;
  return Ma({
    ...Et,
    ...t.settings,
    themePreset: t.id
  });
}
function rv(e) {
  for (const t of Object.keys(Ro))
    if (Ws(e, Fo(t)))
      return t;
  return null;
}
function Kl(e) {
  return (Ro[e] ?? Ro.inherit).shadow;
}
function nv() {
  const e = Gl(Ul);
  if (!e)
    return pa(Et), { ...Et };
  try {
    const t = JSON.parse(e), n = Ma(t);
    return pa(n), n;
  } catch {
    return pa(Et), { ...Et };
  }
}
function ov() {
  return [
    {
      id: "profile-balanced",
      label: "Balanced",
      settings: Fo("inherit")
    },
    {
      id: "profile-aero",
      label: "Windows 7 glass",
      settings: Fo("aero")
    },
    {
      id: "profile-flat",
      label: "Flat edge",
      settings: Fo("windows-10-flat")
    },
    {
      id: "profile-paper",
      label: "Paper",
      settings: Fo("paper")
    }
  ];
}
function Zl() {
  const e = Gl(Xl);
  if (!e)
    return [];
  try {
    return JSON.parse(e).filter(
      (n) => typeof (n == null ? void 0 : n.id) == "string" && typeof (n == null ? void 0 : n.label) == "string"
    ).map((n) => ({
      id: n.id,
      label: n.label,
      settings: Ma(n.settings),
      custom: !0
    }));
  } catch {
    return [];
  }
}
function av(e) {
  Jl(Xl, JSON.stringify(e));
}
function sv(e) {
  return e.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 36);
}
function pa(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement.style, n = ga[e.fontPreset] ?? ga.system, o = Kl(e.themePreset);
  t.setProperty("--efs-font-sans", n.stack), t.setProperty("--efs-window-font-family", n.stack), t.setProperty("--efs-window-border-width", `${e.borderWidth}px`), t.setProperty("--efs-window-radius", `${e.borderRadius}px`), t.setProperty("--efs-window-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-window-system-button-placement", e.systemButtonPlacement), t.setProperty("--efs-window-side-resize-mode", e.sideResizeMode), t.setProperty("--efs-window-shell-shadow", o), t.setProperty("--efs-widget-border-width", `${e.borderWidth}px`), t.setProperty("--efs-widget-radius", `${e.borderRadius}px`), t.setProperty("--efs-widget-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-widget-shadow", o), t.removeProperty("--efs-window-theme-panel"), t.removeProperty("--efs-window-theme-surface"), t.removeProperty("--efs-window-theme-border"), t.removeProperty("--efs-window-theme-shadow"), t.removeProperty("--efs-window-theme-hover");
}
function iv() {
  return Bn;
}
function Ri() {
  return [...ov(), ...Zl()];
}
function lv(e, t) {
  const n = e.trim();
  if (!n)
    return Ri();
  const o = Zl(), a = sv(n) || `profile-${Date.now()}`, i = {
    id: o.findIndex((d) => d.id === a) === -1 ? a : `${a}-${Date.now()}`,
    label: n,
    settings: Ma(t),
    custom: !0
  };
  return av([...o, i]), Ri();
}
function dv(e) {
  Bn = Ma({
    ...Bn,
    ...e
  }), pa(Bn), Jl(Ul, JSON.stringify(Bn)), zs.forEach((t) => t(Bn));
}
function Ql(e) {
  return zs.add(e), e(Bn), () => {
    zs.delete(e);
  };
}
typeof window < "u" && window.addEventListener("efsdb-themechange", () => {
  pa(Bn);
});
var cv = /* @__PURE__ */ J('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), uv = /* @__PURE__ */ J("<div><span></span></div>"), vv = /* @__PURE__ */ J('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), gv = /* @__PURE__ */ J('<button type="button"><!></button>'), pv = /* @__PURE__ */ J('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), hv = /* @__PURE__ */ J('<!> <button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button>', 1), mv = /* @__PURE__ */ J('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), fv = /* @__PURE__ */ J('<button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button> <!>', 1), wv = /* @__PURE__ */ J('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" class="window-button svelte-1k3ojqh" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-1k3ojqh"><!></div></div>'), bv = /* @__PURE__ */ J('<div class="window-content svelte-1k3ojqh"><!></div>'), yv = /* @__PURE__ */ J('<button type="button" tabindex="-1" aria-hidden="true"></button>'), xv = /* @__PURE__ */ J("<!> <!> <div><!> <!> <!></div>", 1);
const kv = {
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
function ed(e, t) {
  St(t, !0), zt(e, kv);
  let n = m(t, "title", 7), o = m(t, "state", 15, "normal"), a = m(t, "x", 15, 100), s = m(t, "y", 15, 100), i = m(t, "width", 15, 600), d = m(t, "height", 15, 400), c = m(t, "locked", 7, !1), u = m(t, "chromeless", 7, !1), y = m(t, "buttonLayout", 7), P = m(t, "systemButtonPlacement", 7), b = m(t, "sideResizeMode", 7), z = m(t, "borderWidth", 7), j = m(t, "borderRadius", 7), R = m(t, "chromePadding", 7), x = m(t, "chromeStyle", 7), k = m(t, "alignment", 7), S = m(t, "themePreset", 7), g = m(t, "fontPreset", 7), W = m(t, "snapRestoreOnRelease", 7), D = m(t, "shiftDragAction", 7), I = m(t, "zIndex", 7, 100), X = m(t, "pinned", 7, !1), A = m(t, "dragSeed", 7, null), K = m(t, "onClose", 7), ue = m(t, "onPinToggle", 7), H = m(t, "onConsumeDragSeed", 7), oe = m(t, "onStateChange", 7), ae = m(t, "children", 7);
  const $ = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], fe = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), G = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], ee = 360, ge = 240, me = 44, we = 1400;
  let ie = /* @__PURE__ */ ne(dt({ ...Et })), se = /* @__PURE__ */ ne(!1), le = /* @__PURE__ */ ne(!1), qe = /* @__PURE__ */ ne(null), ze = /* @__PURE__ */ ne(null), Me = /* @__PURE__ */ ne(null), Ne = /* @__PURE__ */ ne(null), Qe = /* @__PURE__ */ ne(0), lt = /* @__PURE__ */ ne(0), ce = "", xe = 0, $e = 0, nt = 0, pt = 0, Ge = 0, mt = 0, et = "se", kt = null, ct = !1, ft = !1, N = 0.5, L = 18, ke = !1, C = /* @__PURE__ */ ne(null), te = 0, Ae = /* @__PURE__ */ ne(null), Fe = /* @__PURE__ */ ne(0), Be = /* @__PURE__ */ ne(0);
  qa(() => {
    const f = requestAnimationFrame(() => {
      q(se, !0);
    }), O = Ql((pe) => {
      q(ie, { ...pe }, !0);
    });
    return () => {
      cancelAnimationFrame(f), O(), yn(), te && typeof window < "u" && window.clearTimeout(te);
    };
  });
  let Te = /* @__PURE__ */ M(() => y() ?? r(ie).buttonLayout), E = /* @__PURE__ */ M(() => P() ?? r(ie).systemButtonPlacement), Je = /* @__PURE__ */ M(() => b() ?? r(ie).sideResizeMode), He = /* @__PURE__ */ M(() => z() ?? r(ie).borderWidth), V = /* @__PURE__ */ M(() => j() ?? r(ie).borderRadius), ut = /* @__PURE__ */ M(() => R() ?? r(ie).chromePadding), gt = /* @__PURE__ */ M(() => x() ?? r(ie).chromeStyle), ot = /* @__PURE__ */ M(() => k() ?? r(ie).alignment), tt = /* @__PURE__ */ M(() => S() ?? r(ie).themePreset), ht = /* @__PURE__ */ M(() => g() ?? r(ie).fontPreset), Ct = /* @__PURE__ */ M(() => W() ?? r(ie).snapRestoreOnRelease), Yt = /* @__PURE__ */ M(() => D() ?? r(ie).shiftDragAction), wt = /* @__PURE__ */ M(() => i() < 560 ? "left" : r(ot)), vt = /* @__PURE__ */ M(() => i() < 520), gr = /* @__PURE__ */ M(() => Math.max(r(Fe), r(Be)) + (r(vt) ? 12 : 18));
  function st(f) {
    return fe.has(f);
  }
  function Dt(f) {
    switch (f) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function wr(f, O = !1) {
    if (O)
      return f === "mac" || f === "ubuntu" || f === "xubuntu" ? void 0 : "stack";
    switch (f) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function Vt(f, O = !1) {
    if (O)
      return "stack";
    switch (f) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let Ot = /* @__PURE__ */ ne(!1), bt = 0, Dr = 0, vn = 0, gn = 0, Kt = /* @__PURE__ */ M(() => r(Ot) && !u() && !c() && r(Te) !== "mac" && typeof window < "u" && r(lt) <= 84 && Math.abs(r(Qe) - window.innerWidth / 2) <= 232), It = /* @__PURE__ */ M(() => r(qe) ? Cn(r(qe)) : null);
  function Nt(f) {
    var O;
    o() !== f && (o(f), (O = oe()) == null || O(o()));
  }
  function Ir() {
    return { x: a(), y: s(), width: i(), height: d() };
  }
  function pn(f, O = i()) {
    return typeof window > "u" ? Math.max(0, f) : Math.max(0, Math.min(window.innerWidth - O, f));
  }
  function hn(f, O = d()) {
    return typeof window > "u" ? Math.max(0, f) : Math.max(0, Math.min(window.innerHeight - Math.min(O, me), f));
  }
  function br(f) {
    const O = Math.max(ee, Math.round(f.width)), pe = Math.max(ge, Math.round(f.height));
    return {
      x: pn(Math.round(f.x), O),
      y: hn(Math.round(f.y), pe),
      width: O,
      height: pe
    };
  }
  function mn() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : br({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function oo(f) {
    const O = br(f);
    a(O.x), s(O.y), i(O.width), d(O.height), q(ze, null), Nt("normal");
  }
  function ao() {
    oo(r(Me) ?? mn());
  }
  function Cn(f) {
    if (typeof window > "u") return null;
    const O = window.innerWidth, pe = window.innerHeight, be = Math.round(O / 2), l = Math.round(pe / 2);
    switch (f) {
      case "maximize":
        return { x: 0, y: 0, width: O, height: pe };
      case "left-half":
        return { x: 0, y: 0, width: be, height: pe };
      case "right-half":
        return {
          x: O - be,
          y: 0,
          width: be,
          height: pe
        };
      case "top-left":
        return { x: 0, y: 0, width: be, height: l };
      case "top-right":
        return {
          x: O - be,
          y: 0,
          width: be,
          height: l
        };
      case "bottom-left":
        return {
          x: 0,
          y: pe - l,
          width: be,
          height: l
        };
      case "bottom-right":
        return {
          x: O - be,
          y: pe - l,
          width: be,
          height: l
        };
    }
  }
  function fn(f, O = Ir()) {
    if (q(Me, br(O), !0), f === "maximize") {
      typeof window < "u" && (a(0), s(0), i(window.innerWidth), d(window.innerHeight)), q(ze, "maximize"), Nt("maximized");
      return;
    }
    const pe = Cn(f);
    pe && (q(ze, f, !0), Nt("normal"), a(pe.x), s(pe.y), i(pe.width), d(pe.height));
  }
  function Mr() {
    typeof window > "u" || ((o() === "maximized" || r(ze)) && ao(), a(pn(Math.round((window.innerWidth - i()) / 2), i())), s(hn(Math.round((window.innerHeight - d()) / 2), d())));
  }
  function Tt() {
    if (o() === "maximized") {
      ao();
      return;
    }
    fn("maximize");
  }
  function Ut() {
    Nt(o() === "rolled-up" ? "normal" : "rolled-up");
  }
  function so() {
    Nt("minimized");
  }
  function wn() {
    q(C, null), te && typeof window < "u" && window.clearTimeout(te), te = 0;
  }
  function On(f) {
    if (typeof window > "u") {
      q(C, f, !0);
      return;
    }
    wn(), q(C, f, !0), te = window.setTimeout(
      () => {
        q(C, null), te = 0;
      },
      we
    );
  }
  function Zr() {
    var l, _;
    if (typeof window > "u" || !r(Ae))
      return !1;
    const f = 24, O = Math.ceil(Math.max(r(Ae).scrollWidth, ((l = r(Ae).firstElementChild) == null ? void 0 : l.scrollWidth) ?? 0)), pe = Math.ceil(Math.max(r(Ae).scrollHeight, ((_ = r(Ae).firstElementChild) == null ? void 0 : _.scrollHeight) ?? 0)), be = br({
      x: Math.round((window.innerWidth - O) / 2),
      y: Math.round((window.innerHeight - pe - me) / 2),
      width: Math.min(window.innerWidth - f * 2, Math.max(ee, O + r(He) * 2)),
      height: Math.min(window.innerHeight - f * 2, Math.max(ge, pe + me + r(He) * 2))
    });
    return q(Me, Ir(), !0), oo(be), !0;
  }
  function Rt(f) {
    if (c() || u() || $n(f.target))
      return;
    if (r(C) === "fit-content") {
      On("maximize"), Tt();
      return;
    }
    const O = Zr();
    On(O ? "fit-content" : "maximize"), O || Tt();
  }
  function $n(f) {
    return !!(f != null && f.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Oo(f, O) {
    if (!r(Ne)) return null;
    for (const pe of r(Ne).querySelectorAll("[data-snap-target]")) {
      const be = pe.getBoundingClientRect();
      if (f >= be.left && f <= be.right && O >= be.top && O <= be.bottom)
        return pe.dataset.snapTarget;
    }
    return null;
  }
  function $o(f, O) {
    if (typeof window > "u") return null;
    const pe = 18, be = Math.max(72, Math.round(window.innerHeight * 0.14));
    return O <= pe ? f <= window.innerWidth * 0.33 ? "top-left" : f >= window.innerWidth * 0.67 ? "top-right" : "maximize" : f <= pe ? O <= be ? "top-left" : O >= window.innerHeight - be ? "bottom-left" : "left-half" : f >= window.innerWidth - pe ? O <= be ? "top-right" : O >= window.innerHeight - be ? "bottom-right" : "right-half" : null;
  }
  function io(f, O) {
    if (q(Qe, f, !0), q(lt, O, !0), !r(Ot) || c() || u() || r(Te) === "mac") {
      q(qe, null);
      return;
    }
    q(qe, Oo(f, O) ?? $o(f, O), !0);
  }
  function Eo(f, O) {
    if (!ft) return;
    const pe = r(Me) ?? mn(), be = br({
      ...pe,
      x: f - pe.width * N,
      y: O - L
    });
    a(be.x), s(be.y), i(be.width), d(be.height), Nt("normal"), q(ze, null), ft = !1, ct = !0, bt = f, Dr = O, vn = a(), gn = s();
  }
  function yr(f) {
    !f.shiftKey || ke || r(Yt) !== "pin" || !ue() || X() || (ue()(), ke = !0);
  }
  function lo(f) {
    if (c() || u() || o() === "minimized" || $n(f.target)) return;
    q(Ot, !0), ke = !1, q(qe, null), q(Qe, f.clientX, !0), q(lt, f.clientY, !0), bt = f.clientX, Dr = f.clientY, vn = a(), gn = s(), ct = !1, ft = !1;
    const O = Ir();
    N = O.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (f.clientX - O.x) / O.width)), L = Math.max(12, Math.min(28, Math.round(f.clientY - O.y || 18))), o() === "maximized" || r(ze) ? (kt = o() === "maximized" ? "maximize" : r(ze), q(Me, r(Me) ?? mn(), !0), ft = !0) : kt = null, yr(f), f.currentTarget.setPointerCapture(f.pointerId);
  }
  function En(f) {
    r(Ot) && (yr(f), ft && (Math.abs(f.clientX - bt) > 2 || Math.abs(f.clientY - Dr) > 2) && Eo(f.clientX, f.clientY), a(pn(vn + (f.clientX - bt), i())), s(hn(gn + (f.clientY - Dr), d())), io(f.clientX, f.clientY));
  }
  function Nr(f) {
    if (!r(Ot)) return;
    const O = r(qe);
    q(qe, null), q(Ot, !1), ft = !1, O ? fn(O, Ir()) : ct && kt && r(Ct) && !f.shiftKey && !ke ? fn(kt, Ir()) : q(ze, null), kt = null, ct = !1, ke = !1;
    const pe = f.currentTarget;
    "hasPointerCapture" in pe && pe.hasPointerCapture(f.pointerId) && pe.releasePointerCapture(f.pointerId), window.removeEventListener("pointermove", En), window.removeEventListener("pointerup", Nr), window.removeEventListener("pointercancel", Nr);
  }
  function co(f, O) {
    c() || u() || o() === "maximized" || o() === "minimized" || (r(ze) && q(ze, null), O.stopPropagation(), O.preventDefault(), q(le, !0), et = f, xe = O.clientX, $e = O.clientY, nt = a(), pt = s(), Ge = i(), mt = d(), q(qe, null), window.addEventListener("pointermove", bn), window.addEventListener("pointerup", yn), window.addEventListener("pointercancel", yn));
  }
  function bn(f) {
    if (!r(le)) return;
    const O = f.clientX - xe, pe = f.clientY - $e;
    let be = nt, l = pt, _ = Ge, Y = mt;
    if (r(Je) === "mirrored" && (et === "e" || et === "w")) {
      const Z = et === "e" ? O : -O;
      _ = Math.max(ee, Ge + Z * 2), be = nt - (_ - Ge) / 2;
    } else et.includes("e") && (_ = Math.max(ee, Ge + O));
    et.includes("s") && (Y = Math.max(ge, mt + pe)), r(Je) !== "mirrored" && et.includes("w") && (_ = Math.max(ee, Ge - O), be = nt + (Ge - _)), et.includes("n") && (Y = Math.max(ge, mt - pe), l = pt + (mt - Y));
    const Q = br({ x: be, y: l, width: _, height: Y });
    a(Q.x), s(Q.y), i(Q.width), d(Q.height);
  }
  function yn() {
    r(le) && (q(le, !1), window.removeEventListener("pointermove", bn), window.removeEventListener("pointerup", yn), window.removeEventListener("pointercancel", yn));
  }
  function at(f) {
    var pe;
    if (typeof window > "u") return;
    const O = br({
      x: f.clientX - Math.round(i() * 0.38),
      y: f.clientY - 18,
      width: i(),
      height: d()
    });
    a(O.x), s(O.y), vn = a(), gn = s(), bt = f.clientX, Dr = f.clientY, q(Qe, f.clientX, !0), q(lt, f.clientY, !0), q(qe, null), kt = null, ct = !1, ft = !1, ke = !0, q(Ot, !0), window.addEventListener("pointermove", En), window.addEventListener("pointerup", Nr), window.addEventListener("pointercancel", Nr), (pe = H()) == null || pe();
  }
  an(() => {
    const f = A() ? `${A().pointerId}:${A().clientX}:${A().clientY}` : "";
    !A() || f === ce || (ce = f, at(A()));
  });
  var Ue = {
    get title() {
      return n();
    },
    set title(f) {
      n(f), h();
    },
    get state() {
      return o();
    },
    set state(f = "normal") {
      o(f), h();
    },
    get x() {
      return a();
    },
    set x(f = 100) {
      a(f), h();
    },
    get y() {
      return s();
    },
    set y(f = 100) {
      s(f), h();
    },
    get width() {
      return i();
    },
    set width(f = 600) {
      i(f), h();
    },
    get height() {
      return d();
    },
    set height(f = 400) {
      d(f), h();
    },
    get locked() {
      return c();
    },
    set locked(f = !1) {
      c(f), h();
    },
    get chromeless() {
      return u();
    },
    set chromeless(f = !1) {
      u(f), h();
    },
    get buttonLayout() {
      return y();
    },
    set buttonLayout(f) {
      y(f), h();
    },
    get systemButtonPlacement() {
      return P();
    },
    set systemButtonPlacement(f) {
      P(f), h();
    },
    get sideResizeMode() {
      return b();
    },
    set sideResizeMode(f) {
      b(f), h();
    },
    get borderWidth() {
      return z();
    },
    set borderWidth(f) {
      z(f), h();
    },
    get borderRadius() {
      return j();
    },
    set borderRadius(f) {
      j(f), h();
    },
    get chromePadding() {
      return R();
    },
    set chromePadding(f) {
      R(f), h();
    },
    get chromeStyle() {
      return x();
    },
    set chromeStyle(f) {
      x(f), h();
    },
    get alignment() {
      return k();
    },
    set alignment(f) {
      k(f), h();
    },
    get themePreset() {
      return S();
    },
    set themePreset(f) {
      S(f), h();
    },
    get fontPreset() {
      return g();
    },
    set fontPreset(f) {
      g(f), h();
    },
    get snapRestoreOnRelease() {
      return W();
    },
    set snapRestoreOnRelease(f) {
      W(f), h();
    },
    get shiftDragAction() {
      return D();
    },
    set shiftDragAction(f) {
      D(f), h();
    },
    get zIndex() {
      return I();
    },
    set zIndex(f = 100) {
      I(f), h();
    },
    get pinned() {
      return X();
    },
    set pinned(f = !1) {
      X(f), h();
    },
    get dragSeed() {
      return A();
    },
    set dragSeed(f = null) {
      A(f), h();
    },
    get onClose() {
      return K();
    },
    set onClose(f) {
      K(f), h();
    },
    get onPinToggle() {
      return ue();
    },
    set onPinToggle(f) {
      ue(f), h();
    },
    get onConsumeDragSeed() {
      return H();
    },
    set onConsumeDragSeed(f) {
      H(f), h();
    },
    get onStateChange() {
      return oe();
    },
    set onStateChange(f) {
      oe(f), h();
    },
    get children() {
      return ae();
    },
    set children(f) {
      ae(f), h();
    }
  }, Ft = xv(), dr = Mt(Ft);
  {
    var Zt = (f) => {
      var O = cv();
      let pe;
      ve(() => pe = fr(O, "", pe, {
        left: `${r(It).x}px`,
        top: `${r(It).y}px`,
        width: `${r(It).width}px`,
        height: `${r(It).height}px`,
        "z-index": I() + 2
      })), B(f, O);
    };
    ye(dr, (f) => {
      r(It) && !u() && f(Zt);
    });
  }
  var Qt = w(dr, 2);
  {
    var Ln = (f) => {
      var O = vv();
      let pe;
      xt(O, 21, () => $, (be) => be.id, (be, l) => {
        var _ = uv();
        let Y;
        var Q = p(_);
        v(_), ve(() => {
          Y = Ie(_, 1, "snap-cell svelte-1k3ojqh", null, Y, { "is-active": r(qe) === r(l).id }), F(_, "data-snap-target", r(l).id), Ie(Q, 1, `snap-shape shape-${r(l).preview}`, "svelte-1k3ojqh");
        }), B(be, _);
      }), v(O), na(O, (be) => q(Ne, be), () => r(Ne)), ve(() => pe = fr(O, "", pe, { "z-index": I() + 3 })), B(f, O);
    };
    ye(Qt, (f) => {
      r(Kt) && !u() && f(Ln);
    });
  }
  var qt = w(Qt, 2);
  let Xt, nr;
  var Qr = p(qt);
  {
    var Lo = (f) => {
      var O = wv();
      let pe;
      var be = p(O), l = p(be);
      {
        var _ = ($t) => {
          var or = gv();
          let xr;
          var go = p(or);
          rt(go, { name: "pin" }), v(or), ve(() => {
            xr = Ie(or, 1, "window-button svelte-1k3ojqh", null, xr, { "is-active": X() }), F(or, "aria-label", X() ? "Unpin window" : "Pin window"), F(or, "aria-pressed", X());
          }), he("click", or, function(...ar) {
            var In;
            (In = ue()) == null || In.apply(this, ar);
          }), B($t, or);
        };
        ye(l, ($t) => {
          ue() && $t(_);
        });
      }
      var Y = w(l, 2), Q = p(Y);
      rt(Q, { name: "center" }), v(Y);
      var Z = w(Y, 2);
      let We;
      var Ve = p(Z);
      {
        let $t = /* @__PURE__ */ M(() => o() === "rolled-up" ? "roll-up" : "roll-down");
        rt(Ve, {
          get name() {
            return r($t);
          }
        });
      }
      v(Z), v(be);
      var Ee = w(be, 2), Ke = p(Ee, !0);
      v(Ee);
      var Gt = w(Ee, 2), aa = p(Gt);
      {
        var vo = ($t) => {
          var or = hv(), xr = Mt(or);
          {
            var go = (er) => {
              var Bt = pv(), Io = p(Bt);
              {
                let kn = /* @__PURE__ */ M(() => Dt(r(Te)));
                rt(Io, {
                  name: "close",
                  get variant() {
                    return r(kn);
                  }
                });
              }
              v(Bt), he("click", Bt, function(...kn) {
                var po;
                (po = K()) == null || po.apply(this, kn);
              }), B(er, Bt);
            };
            ye(xr, (er) => {
              K() && er(go);
            });
          }
          var ar = w(xr, 2), In = p(ar);
          {
            let er = /* @__PURE__ */ M(() => o() === "minimized" ? "restore" : "minimize"), Bt = /* @__PURE__ */ M(() => wr(r(Te), o() === "minimized"));
            rt(In, {
              get name() {
                return r(er);
              },
              get variant() {
                return r(Bt);
              }
            });
          }
          v(ar);
          var Nn = w(ar, 2), Do = p(Nn);
          {
            let er = /* @__PURE__ */ M(() => o() === "maximized" ? "restore" : "maximize"), Bt = /* @__PURE__ */ M(() => Vt(r(Te), o() === "maximized"));
            rt(Do, {
              get name() {
                return r(er);
              },
              get variant() {
                return r(Bt);
              }
            });
          }
          v(Nn), ve(() => {
            F(ar, "aria-label", o() === "minimized" ? "Restore window" : "Minimize window"), F(Nn, "aria-label", o() === "maximized" ? "Restore window" : "Maximize window");
          }), he("click", ar, () => o() === "minimized" ? Nt("normal") : so()), he("click", Nn, Tt), B($t, or);
        }, Dn = /* @__PURE__ */ M(() => st(r(Te))), rs = ($t) => {
          var or = fv(), xr = Mt(or), go = p(xr);
          {
            let er = /* @__PURE__ */ M(() => o() === "minimized" ? "restore" : "minimize"), Bt = /* @__PURE__ */ M(() => wr(r(Te), o() === "minimized"));
            rt(go, {
              get name() {
                return r(er);
              },
              get variant() {
                return r(Bt);
              }
            });
          }
          v(xr);
          var ar = w(xr, 2), In = p(ar);
          {
            let er = /* @__PURE__ */ M(() => o() === "maximized" ? "restore" : "maximize"), Bt = /* @__PURE__ */ M(() => Vt(r(Te), o() === "maximized"));
            rt(In, {
              get name() {
                return r(er);
              },
              get variant() {
                return r(Bt);
              }
            });
          }
          v(ar);
          var Nn = w(ar, 2);
          {
            var Do = (er) => {
              var Bt = mv(), Io = p(Bt);
              {
                let kn = /* @__PURE__ */ M(() => Dt(r(Te)));
                rt(Io, {
                  name: "close",
                  get variant() {
                    return r(kn);
                  }
                });
              }
              v(Bt), he("click", Bt, function(...kn) {
                var po;
                (po = K()) == null || po.apply(this, kn);
              }), B(er, Bt);
            };
            ye(Nn, (er) => {
              K() && er(Do);
            });
          }
          ve(() => {
            F(xr, "aria-label", o() === "minimized" ? "Restore window" : "Minimize window"), F(ar, "aria-label", o() === "maximized" ? "Restore window" : "Maximize window");
          }), he("click", xr, () => o() === "minimized" ? Nt("normal") : so()), he("click", ar, Tt), B($t, or);
        };
        ye(aa, ($t) => {
          r(Dn) ? $t(vo) : $t(rs, -1);
        });
      }
      v(Gt), v(O), ve(
        ($t) => {
          pe = Ie(O, 1, `window-chrome chrome-${r(gt) ?? ""}`, "svelte-1k3ojqh", pe, $t), F(O, "aria-label", `${n()} window controls`), We = Ie(Z, 1, "window-button svelte-1k3ojqh", null, We, { "is-active": o() === "rolled-up" }), F(Z, "aria-label", o() === "rolled-up" ? "Restore height" : "Roll up"), Ie(Ee, 1, `window-title align-${r(wt) ?? ""}`, "svelte-1k3ojqh"), F(Ee, "title", n()), de(Ke, n());
        },
        [
          () => ({
            "layout-mac": st(r(Te)),
            "layout-windows": !st(r(Te))
          })
        ]
      ), he("pointerdown", O, lo), he("pointermove", O, En), he("pointerup", O, Nr), qo("pointercancel", O, Nr), he("dblclick", O, Rt), he("click", Y, Mr), he("click", Z, Ut), Mi(be, "clientWidth", ($t) => q(Fe, $t)), Mi(Gt, "clientWidth", ($t) => q(Be, $t)), B(f, O);
    };
    ye(Qr, (f) => {
      u() || f(Lo);
    });
  }
  var xn = w(Qr, 2);
  {
    var en = (f) => {
      var O = bv(), pe = p(O);
      Jn(pe, () => ae() ?? Ao), v(O), na(O, (be) => q(Ae, be), () => r(Ae)), B(f, O);
    };
    ye(xn, (f) => {
      o() !== "rolled-up" && o() !== "minimized" && f(en);
    });
  }
  var uo = w(xn, 2);
  {
    var _e = (f) => {
      var O = Wn(), pe = Mt(O);
      xt(pe, 16, () => G, (be) => be, (be, l) => {
        var _ = yv();
        ve(() => Ie(_, 1, `resize-handle dir-${l}`, "svelte-1k3ojqh")), he("pointerdown", _, (Y) => co(l, Y)), B(be, _);
      }), B(f, O);
    };
    ye(uo, (f) => {
      !u() && o() !== "maximized" && o() !== "minimized" && f(_e);
    });
  }
  return v(qt), ve(() => {
    Xt = Ie(qt, 1, "window-shell svelte-1k3ojqh", null, Xt, {
      "is-ready": r(se),
      "is-dragging": r(Ot),
      "is-resizing": r(le),
      "compact-controls": r(vt),
      maximized: o() === "maximized",
      minimized: o() === "minimized",
      "rolled-up": o() === "rolled-up",
      chromeless: u()
    }), F(qt, "data-layout", r(Te)), F(qt, "data-system-placement", r(E)), F(qt, "data-style", r(gt)), F(qt, "data-theme", r(tt)), F(qt, "data-font", r(ht)), nr = fr(qt, "", nr, {
      "--window-border-width": `${r(He)}px`,
      "--window-radius": `${r(V)}px`,
      "--window-chrome-padding": `${r(ut)}px`,
      "--window-title-guard": `${r(gr)}px`,
      transform: o() === "normal" || o() === "rolled-up" ? `translate(${a()}px, ${s()}px)` : void 0,
      width: o() === "normal" || o() === "rolled-up" ? `${i()}px` : void 0,
      height: o() === "normal" ? `${d()}px` : void 0,
      "z-index": I()
    });
  }), B(e, Ft), Pt(Ue);
}
Er([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Wt(
  ed,
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
var _v = /* @__PURE__ */ J('<button type="button"></button>'), Sv = /* @__PURE__ */ J('<div class="widget-window-content svelte-k2j6ru"><!></div>'), Pv = /* @__PURE__ */ J('<!> <div role="presentation"><!></div>', 1);
const Tv = {
  hash: "svelte-k2j6ru",
  code: `.widget-window-backdrop.svelte-k2j6ru {position:fixed;inset:0;border:0;padding:0;background:radial-gradient(
        circle at top,
        color-mix(in srgb, var(--shell-primary, #ffffff), transparent 88%),
        transparent 28%
      ),
      color-mix(in srgb, var(--shell-panel, rgba(2, 6, 23, 0.6)), rgba(2, 6, 23, 0.56) 52%);backdrop-filter:blur(10px);cursor:default;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-backdrop.ready.svelte-k2j6ru {opacity:1;}.widget-window-layer.svelte-k2j6ru {position:relative;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-layer.ready.svelte-k2j6ru {opacity:1;}.widget-window-content.svelte-k2j6ru {width:100%;min-width:0;min-height:0;box-sizing:border-box;padding:1rem;background:transparent;}

  @media (max-width: 47.99rem) {.widget-window-content.svelte-k2j6ru {padding:0.75rem;}
  }`
};
function Br(e, t) {
  St(t, !0), zt(e, Tv);
  function n($, fe, G, ee) {
    return { x: $, y: fe, width: G, height: ee };
  }
  let o = m(t, "title", 7), a = m(t, "pinned", 7), s = m(t, "windowState", 15, "normal"), i = m(t, "dragSeed", 7, null), d = m(t, "defaultWidth", 7), c = m(t, "defaultHeight", 7), u = m(t, "defaultX", 7), y = m(t, "defaultY", 7), P = m(t, "zIndex", 7), b = m(t, "onClose", 7), z = m(t, "onFocus", 7), j = m(t, "onPinToggle", 7), R = m(t, "onConsumeDragSeed", 7), x = m(t, "children", 7), S = /* @__PURE__ */ ne(dt(n(u(), y(), d(), c()))), g = /* @__PURE__ */ ne(null), W = /* @__PURE__ */ ne(!1), D = /* @__PURE__ */ ne(!1);
  async function I() {
    var ie, se;
    if (r(W) || typeof window > "u" || (await Wl(), !r(g)))
      return;
    const $ = 40, fe = Math.max(420, window.innerWidth - $ * 2), G = Math.max(300, window.innerHeight - $ * 2), ee = Math.ceil(Math.max(r(g).scrollWidth, ((ie = r(g).firstElementChild) == null ? void 0 : ie.scrollWidth) ?? 0) + 6), ge = Math.ceil(Math.max(r(g).scrollHeight, ((se = r(g).firstElementChild) == null ? void 0 : se.scrollHeight) ?? 0) + 42), me = Math.min(fe, Math.max(420, ee)), we = Math.min(G, Math.max(300, ge));
    q(
      S,
      {
        width: me,
        height: we,
        x: Math.max($ / 2, Math.round((window.innerWidth - me) / 2)),
        y: Math.max($ / 2, Math.round((window.innerHeight - we) / 2))
      },
      !0
    ), q(W, !0);
  }
  qa(() => {
    const $ = requestAnimationFrame(() => {
      i() ? q(W, !0) : I(), q(D, !0);
    });
    return () => {
      cancelAnimationFrame($);
    };
  });
  var X = {
    get title() {
      return o();
    },
    set title($) {
      o($), h();
    },
    get pinned() {
      return a();
    },
    set pinned($) {
      a($), h();
    },
    get windowState() {
      return s();
    },
    set windowState($ = "normal") {
      s($), h();
    },
    get dragSeed() {
      return i();
    },
    set dragSeed($ = null) {
      i($), h();
    },
    get defaultWidth() {
      return d();
    },
    set defaultWidth($) {
      d($), h();
    },
    get defaultHeight() {
      return c();
    },
    set defaultHeight($) {
      c($), h();
    },
    get defaultX() {
      return u();
    },
    set defaultX($) {
      u($), h();
    },
    get defaultY() {
      return y();
    },
    set defaultY($) {
      y($), h();
    },
    get zIndex() {
      return P();
    },
    set zIndex($) {
      P($), h();
    },
    get onClose() {
      return b();
    },
    set onClose($) {
      b($), h();
    },
    get onFocus() {
      return z();
    },
    set onFocus($) {
      z($), h();
    },
    get onPinToggle() {
      return j();
    },
    set onPinToggle($) {
      j($), h();
    },
    get onConsumeDragSeed() {
      return R();
    },
    set onConsumeDragSeed($) {
      R($), h();
    },
    get children() {
      return x();
    },
    set children($) {
      x($), h();
    }
  }, A = Pv(), K = Mt(A);
  {
    var ue = ($) => {
      var fe = _v();
      let G, ee;
      ve(() => {
        G = Ie(fe, 1, "widget-window-backdrop svelte-k2j6ru", null, G, { ready: r(D) }), F(fe, "aria-label", `Close ${o()}`), ee = fr(fe, "", ee, { "z-index": P() - 1 });
      }), he("click", fe, function(...ge) {
        var me;
        (me = b()) == null || me.apply(this, ge);
      }), B($, fe);
    };
    ye(K, ($) => {
      !a() && s() !== "minimized" && $(ue);
    });
  }
  var H = w(K, 2);
  let oe;
  var ae = p(H);
  return ed(ae, {
    get title() {
      return o();
    },
    get pinned() {
      return a();
    },
    get zIndex() {
      return P();
    },
    get dragSeed() {
      return i();
    },
    get onClose() {
      return b();
    },
    get onConsumeDragSeed() {
      return R();
    },
    get onPinToggle() {
      return j();
    },
    get state() {
      return s();
    },
    set state($) {
      s($);
    },
    get x() {
      return r(S).x;
    },
    set x($) {
      r(S).x = $;
    },
    get y() {
      return r(S).y;
    },
    set y($) {
      r(S).y = $;
    },
    get width() {
      return r(S).width;
    },
    set width($) {
      r(S).width = $;
    },
    get height() {
      return r(S).height;
    },
    set height($) {
      r(S).height = $;
    },
    children: ($, fe) => {
      var G = Sv(), ee = p(G);
      Jn(ee, () => x() ?? Ao), v(G), na(G, (ge) => q(g, ge), () => r(g)), B($, G);
    },
    $$slots: { default: !0 }
  }), v(H), ve(() => oe = Ie(H, 1, "widget-window-layer svelte-k2j6ru", null, oe, { ready: r(D) })), he("pointerdown", H, function(...$) {
    var fe;
    (fe = z()) == null || fe.apply(this, $);
  }), B(e, A), Pt(X);
}
Er(["click", "pointerdown"]);
Wt(
  Br,
  {
    title: {},
    pinned: {},
    windowState: {},
    dragSeed: {},
    defaultWidth: {},
    defaultHeight: {},
    defaultX: {},
    defaultY: {},
    zIndex: {},
    onClose: {},
    onFocus: {},
    onPinToggle: {},
    onConsumeDragSeed: {},
    children: {}
  },
  [],
  [],
  { mode: "open" }
);
var qv = /* @__PURE__ */ J('<div class="workspace-placeholder-slot svelte-xhbaig" role="presentation" aria-hidden="true"><div class="workspace-placeholder svelte-xhbaig"><span class="workspace-placeholder-label svelte-xhbaig"> </span></div></div>'), Mv = /* @__PURE__ */ J('<div role="presentation" aria-hidden="true"></div>'), jv = /* @__PURE__ */ J('<!> <div role="presentation"><div class="workspace-surface svelte-xhbaig" role="presentation"><!> <!></div></div>', 1);
const zv = {
  hash: "svelte-xhbaig",
  code: `.workspace-placeholder-slot.svelte-xhbaig,
  .workspace-item.svelte-xhbaig {grid-column:var(--widget-col) / span var(--widget-width);grid-row:var(--widget-row) / span var(--widget-height);min-width:0;min-height:0;}.workspace-placeholder-slot.svelte-xhbaig {pointer-events:none;}.workspace-placeholder.svelte-xhbaig {position:relative;width:100%;height:100%;border:1px dashed color-mix(in srgb, var(--shell-primary), transparent 30%);border-radius:28px;background:linear-gradient(135deg, color-mix(in srgb, var(--shell-primary), transparent 92%), transparent 64%),
      color-mix(in srgb, var(--shell-row-hover), transparent 22%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 76%);}.workspace-placeholder-label.svelte-xhbaig {position:absolute;top:1rem;left:1rem;color:color-mix(in srgb, var(--shell-text), transparent 24%);font:var(--efs-font-micro);letter-spacing:0.12em;text-transform:uppercase;}.workspace-item.svelte-xhbaig {transition:box-shadow var(--efs-motion-normal) var(--efs-ease-standard),
      filter var(--efs-motion-fast) var(--efs-ease-standard),
      opacity var(--efs-motion-fast) var(--efs-ease-standard);}.workspace-item.compact.svelte-xhbaig {grid-column:1 / -1;grid-row:auto;}.workspace-item.floating.svelte-xhbaig {position:fixed;top:0;left:0;width:var(--floating-width);height:var(--floating-height);transform:translate(var(--floating-x), var(--floating-y));pointer-events:auto;}.workspace-item.dragging.svelte-xhbaig,
  .workspace-item.resizing.svelte-xhbaig {filter:saturate(1.03);transition:none;}.workspace-item.dragging.svelte-xhbaig .widget-frame,
  .workspace-item.resizing.svelte-xhbaig .widget-frame {box-shadow:0 20px 48px rgba(0, 0, 0, 0.3),
      0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 72%);}.workspace-surface.svelte-xhbaig {position:relative;width:100%;height:100%;min-width:0;min-height:0;}.workspace-item.editable.svelte-xhbaig .widget-header {cursor:grab;user-select:none;}.workspace-item.dragging.svelte-xhbaig .widget-header {cursor:grabbing;}.resize-handle.svelte-xhbaig {position:absolute;z-index:2;touch-action:none;}.resize-n.svelte-xhbaig,
  .resize-s.svelte-xhbaig {left:1rem;right:1rem;height:0.75rem;cursor:ns-resize;}.resize-n.svelte-xhbaig {top:-0.35rem;}.resize-s.svelte-xhbaig {bottom:-0.35rem;}.resize-e.svelte-xhbaig,
  .resize-w.svelte-xhbaig {top:1rem;bottom:1rem;width:0.75rem;cursor:ew-resize;}.resize-e.svelte-xhbaig {right:-0.35rem;}.resize-w.svelte-xhbaig {left:-0.35rem;}.resize-ne.svelte-xhbaig,
  .resize-nw.svelte-xhbaig,
  .resize-se.svelte-xhbaig,
  .resize-sw.svelte-xhbaig {width:1rem;height:1rem;}.resize-ne.svelte-xhbaig {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-nw.svelte-xhbaig {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-se.svelte-xhbaig {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-sw.svelte-xhbaig {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}

  @media (max-width: 63.99rem) {.resize-handle.svelte-xhbaig {display:none;}
  }`
};
function Hr(e, t) {
  St(t, !0), zt(e, zv);
  const n = 12, o = 24, a = 3, s = 8;
  let i = m(t, "title", 7), d = m(t, "layout", 7), c = m(t, "canvasWidth", 7), u = m(t, "compact", 7, !1), y = m(t, "editable", 7, !1), P = m(t, "zIndex", 7, 1), b = m(t, "onChange", 7), z = m(t, "onPreviewChange", 7), j = m(t, "onShiftPopoutStart", 7), R = m(t, "onFocus", 7), x = m(t, "children", 7), k = /* @__PURE__ */ ne(null), S = /* @__PURE__ */ ne(!1), g = /* @__PURE__ */ ne(!1), W = /* @__PURE__ */ ne(null), D = /* @__PURE__ */ ne(dt({ x: 0, y: 0, width: 0, height: 0 })), I = 0, X = 0, A = 0, K = 0, ue = {
    col: 1,
    row: 1,
    width: a,
    height: s
  }, H = {
    col: 1,
    row: 1,
    width: a,
    height: s
  }, oe = { x: 0, y: 0, width: 0, height: 0 }, ae = { x: 0, y: 0, width: 0, height: 0 }, $ = "se", fe = /* @__PURE__ */ M(() => r(S) || r(g)), G = /* @__PURE__ */ M(() => r(W) ?? d());
  function ee(C) {
    return c() <= 0 ? 0 : Math.round(C / (c() / n));
  }
  function ge(C) {
    return Math.round(C / o);
  }
  function me(C, te) {
    return Math.max(1, Math.min(n - te + 1, C));
  }
  function we() {
    var te;
    const C = (te = r(k)) == null ? void 0 : te.getBoundingClientRect();
    return C ? {
      x: C.left,
      y: C.top,
      width: C.width,
      height: C.height
    } : { x: 0, y: 0, width: 0, height: 0 };
  }
  function ie() {
    return c() <= 0 ? 240 : Math.max(240, c() / n * a);
  }
  function se() {
    return o * s;
  }
  function le(C) {
    return !!(C != null && C.closest('button, a, input, select, textarea, label, [role="button"], [contenteditable="true"]'));
  }
  function qe(C) {
    return !!(C != null && C.closest(".widget-header"));
  }
  function ze(C) {
    var te;
    q(W, C, !0), (te = z()) == null || te(C);
  }
  function Me() {
    var C;
    q(W, null), (C = z()) == null || C(null);
  }
  function Ne(C) {
    var Ae, Fe, Be;
    if (!u() && C.shiftKey && C.button === 0 && !le(C.target) && qe(C.target)) {
      (Ae = R()) == null || Ae(), (Fe = j()) == null || Fe({
        pointerId: C.pointerId,
        clientX: C.clientX,
        clientY: C.clientY
      }), C.preventDefault(), C.stopPropagation();
      return;
    }
    if (u() || !y() || C.button !== 0 || le(C.target) || !qe(C.target))
      return;
    q(S, !0), I = C.clientX, X = C.clientY, ue = { ...d() }, oe = we(), q(D, { ...oe }, !0), ze({ ...d() }), C.currentTarget.setPointerCapture(C.pointerId), (Be = R()) == null || Be(), C.preventDefault(), C.stopPropagation();
  }
  function Qe(C) {
    if (!r(S)) return;
    const te = ue.width, Ae = {
      ...ue,
      col: me(ue.col + ee(C.clientX - I), te),
      row: Math.max(1, ue.row + ge(C.clientY - X))
    };
    q(
      D,
      {
        ...oe,
        x: oe.x + (C.clientX - I),
        y: oe.y + (C.clientY - X)
      },
      !0
    ), ze(Ae);
  }
  function lt(C) {
    if (!r(S)) return;
    q(S, !1), C.currentTarget.releasePointerCapture(C.pointerId), r(W) && b()(r(W)), Me();
  }
  function ce(C, te) {
    var Fe;
    if (u() || !y() || te.button !== 0) return;
    q(g, !0), $ = C, A = te.clientX, K = te.clientY, H = { ...d() }, ae = we(), q(D, { ...ae }, !0), ze({ ...d() }), te.currentTarget.setPointerCapture(te.pointerId), (Fe = R()) == null || Fe(), te.preventDefault(), te.stopPropagation();
  }
  function xe(C) {
    if (!r(g)) return;
    const te = ee(C.clientX - A), Ae = ge(C.clientY - K);
    let Fe = H.col, Be = H.row, Te = H.width, E = H.height;
    $.includes("e") && (Te = Math.max(a, Math.min(n - H.col + 1, H.width + te))), $.includes("s") && (E = Math.max(s, H.height + Ae)), $.includes("w") && (Fe = Math.max(1, Math.min(H.col + te, H.col + H.width - a)), Te = H.width + (H.col - Fe)), $.includes("n") && (Be = Math.max(1, Math.min(H.row + Ae, H.row + H.height - s)), E = H.height + (H.row - Be));
    const Je = {
      col: me(Fe, Te),
      row: Math.max(1, Be),
      width: Te,
      height: E
    }, He = C.clientX - A, V = C.clientY - K, ut = ie(), gt = se();
    let ot = { ...ae };
    $.includes("e") && (ot.width = Math.max(ut, ae.width + He)), $.includes("s") && (ot.height = Math.max(gt, ae.height + V)), $.includes("w") && (ot.width = Math.max(ut, ae.width - He), ot.x = ae.x + (ae.width - ot.width)), $.includes("n") && (ot.height = Math.max(gt, ae.height - V), ot.y = ae.y + (ae.height - ot.height)), q(D, ot, !0), ze(Je);
  }
  function $e(C) {
    if (!r(g)) return;
    q(g, !1), C.currentTarget.releasePointerCapture(C.pointerId), r(W) && b()(r(W)), Me();
  }
  var nt = {
    get title() {
      return i();
    },
    set title(C) {
      i(C), h();
    },
    get layout() {
      return d();
    },
    set layout(C) {
      d(C), h();
    },
    get canvasWidth() {
      return c();
    },
    set canvasWidth(C) {
      c(C), h();
    },
    get compact() {
      return u();
    },
    set compact(C = !1) {
      u(C), h();
    },
    get editable() {
      return y();
    },
    set editable(C = !1) {
      y(C), h();
    },
    get zIndex() {
      return P();
    },
    set zIndex(C = 1) {
      P(C), h();
    },
    get onChange() {
      return b();
    },
    set onChange(C) {
      b(C), h();
    },
    get onPreviewChange() {
      return z();
    },
    set onPreviewChange(C) {
      z(C), h();
    },
    get onShiftPopoutStart() {
      return j();
    },
    set onShiftPopoutStart(C) {
      j(C), h();
    },
    get onFocus() {
      return R();
    },
    set onFocus(C) {
      R(C), h();
    },
    get children() {
      return x();
    },
    set children(C) {
      x(C), h();
    }
  }, pt = jv(), Ge = Mt(pt);
  {
    var mt = (C) => {
      var te = qv();
      let Ae;
      var Fe = p(te), Be = p(Fe), Te = p(Be, !0);
      v(Be), v(Fe), v(te), ve(() => {
        Ae = fr(te, "", Ae, {
          "--widget-col": r(G).col,
          "--widget-row": r(G).row,
          "--widget-width": r(G).width,
          "--widget-height": r(G).height
        }), de(Te, i());
      }), B(C, te);
    };
    ye(Ge, (C) => {
      r(fe) && C(mt);
    });
  }
  var et = w(Ge, 2);
  let kt, ct;
  var ft = p(et), N = p(ft);
  {
    var L = (C) => {
      var te = Wn(), Ae = Mt(te);
      xt(Ae, 16, () => ["n", "s", "e", "w", "ne", "nw", "se", "sw"], (Fe) => Fe, (Fe, Be) => {
        var Te = Mv();
        ve(() => Ie(Te, 1, `resize-handle resize-${Be}`, "svelte-xhbaig")), he("pointerdown", Te, (E) => ce(Be, E)), he("pointermove", Te, xe), he("pointerup", Te, $e), qo("pointercancel", Te, $e), B(Fe, Te);
      }), B(C, te);
    };
    ye(N, (C) => {
      !u() && y() && C(L);
    });
  }
  var ke = w(N, 2);
  return Jn(ke, () => x() ?? Ao), v(ft), v(et), na(et, (C) => q(k, C), () => r(k)), ve(() => {
    kt = Ie(et, 1, "workspace-item svelte-xhbaig", null, kt, {
      compact: u(),
      editable: y() && !u(),
      dragging: r(S),
      resizing: r(g),
      floating: r(fe)
    }), ct = fr(et, "", ct, {
      "--widget-col": d().col,
      "--widget-row": d().row,
      "--widget-width": d().width,
      "--widget-height": d().height,
      "--floating-x": `${r(D).x}px`,
      "--floating-y": `${r(D).y}px`,
      "--floating-width": `${r(D).width}px`,
      "--floating-height": `${r(D).height}px`,
      "z-index": r(fe) ? P() + 240 : P()
    });
  }), he("pointerdown", et, () => {
    var C;
    return (C = R()) == null ? void 0 : C();
  }), he("pointerdown", ft, Ne), he("pointermove", ft, Qe), he("pointerup", ft, lt), qo("pointercancel", ft, lt), B(e, pt), Pt(nt);
}
Er(["pointerdown", "pointermove", "pointerup"]);
Wt(
  Hr,
  {
    title: {},
    layout: {},
    canvasWidth: {},
    compact: {},
    editable: {},
    zIndex: {},
    onChange: {},
    onPreviewChange: {},
    onShiftPopoutStart: {},
    onFocus: {},
    children: {}
  },
  [],
  [],
  { mode: "open" }
);
var Wv = /* @__PURE__ */ J("<span> </span>");
const Rv = {
  hash: "svelte-bx51m",
  code: ".pill.svelte-bx51m {display:inline-flex;align-items:center;min-height:24px;padding:0 0.65rem;border:1px solid var(--efs-border-subtle);border-radius:999px;background:color-mix(in oklab, var(--efs-bg-surface-2), transparent 5%);color:var(--efs-text-secondary);font:var(--efs-font-label);letter-spacing:0.02em;white-space:nowrap;}.pill.mono.svelte-bx51m {font-family:var(--efs-font-mono);}.pill[data-tone='accent'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-accent-primary), transparent 68%);background:color-mix(in oklab, var(--efs-accent-soft), transparent 12%);color:var(--efs-accent-strong);}.pill[data-tone='success'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-success), transparent 68%);background:color-mix(in oklab, var(--efs-state-success), transparent 88%);color:var(--efs-state-success);}.pill[data-tone='warning'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-warning), transparent 68%);background:color-mix(in oklab, var(--efs-state-warning), transparent 88%);color:var(--efs-state-warning);}.pill[data-tone='danger'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-danger), transparent 68%);background:color-mix(in oklab, var(--efs-state-danger), transparent 88%);color:var(--efs-state-danger);}.pill[data-tone='info'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-info), transparent 68%);background:color-mix(in oklab, var(--efs-state-info), transparent 88%);color:var(--efs-state-info);}.pill[data-tone='natural'].svelte-bx51m {border-color:var(--efs-mode-natural-border);background:var(--efs-mode-natural-bg);color:var(--efs-accent-strong);}.pill[data-tone='raw'].svelte-bx51m {border-color:var(--efs-mode-raw-border);background:var(--efs-mode-raw-bg);color:color-mix(in oklab, var(--efs-state-info), white 14%);}"
};
function At(e, t) {
  St(t, !0), zt(e, Rv);
  let n = m(t, "label", 7), o = m(t, "tone", 7, "neutral"), a = m(t, "monospaced", 7, !1);
  var s = {
    get label() {
      return n();
    },
    set label(u) {
      n(u), h();
    },
    get tone() {
      return o();
    },
    set tone(u = "neutral") {
      o(u), h();
    },
    get monospaced() {
      return a();
    },
    set monospaced(u = !1) {
      a(u), h();
    }
  }, i = Wv();
  let d;
  var c = p(i, !0);
  return v(i), ve(() => {
    d = Ie(i, 1, "pill svelte-bx51m", null, d, { mono: a() }), F(i, "data-tone", o()), de(c, n());
  }), B(e, i), Pt(s);
}
Wt(At, { label: {}, tone: {}, monospaced: {} }, [], [], { mode: "open" });
var Av = /* @__PURE__ */ J('<div class="footer-row svelte-173e4c2"><!></div>'), Cv = /* @__PURE__ */ J('<div class="empty-state svelte-173e4c2">Facet counts will appear here after a search runs.</div>'), Ov = /* @__PURE__ */ J('<div class="empty-state svelte-173e4c2">No facets are available for the active domain.</div>'), $v = /* @__PURE__ */ J('<div class="facet-bucket svelte-173e4c2"><span class="facet-label svelte-173e4c2"> </span> <span class="facet-count svelte-173e4c2"> </span></div>'), Ev = /* @__PURE__ */ J('<section class="facet-group svelte-173e4c2"><header class="facet-group-head svelte-173e4c2"><span class="facet-name svelte-173e4c2"> </span></header> <div class="facet-buckets svelte-173e4c2"></div></section>'), Lv = /* @__PURE__ */ J('<div class="facet-groups svelte-173e4c2"></div>');
const Dv = {
  hash: "svelte-173e4c2",
  code: `.facet-groups.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.8rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.facet-group.svelte-173e4c2,
  .empty-state.svelte-173e4c2 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.facet-group.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.75rem;}.facet-group-head.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;}.facet-name.svelte-173e4c2 {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.1em;text-transform:uppercase;}.facet-buckets.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.45rem;}.facet-bucket.svelte-173e4c2 {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.75rem;align-items:center;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.facet-label.svelte-173e4c2 {min-width:0;word-break:break-word;}.facet-count.svelte-173e4c2 {display:inline-flex;align-items:center;justify-content:center;min-width:2rem;min-height:1.9rem;padding:0 0.65rem;border-radius:999px;background:color-mix(in srgb, var(--shell-row-hover), transparent 2%);color:var(--shell-text);font-weight:700;}.empty-state.svelte-173e4c2 {min-height:8rem;display:flex;align-items:center;justify-content:center;color:var(--shell-muted);line-height:1.6;text-align:center;}.footer-row.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function Rs(e, t) {
  St(t, !0), zt(e, Dv);
  let n = m(t, "loaded", 7), o = m(t, "facets", 7), a = m(t, "mode", 7, "card"), s = m(t, "dataTestid", 7), i = m(t, "open", 7, !1), d = m(t, "pinned", 7, !1), c = m(t, "onOpen", 7), u = m(t, "onTogglePin", 7), y = /* @__PURE__ */ M(() => Object.entries(o())), P = /* @__PURE__ */ M(() => a() === "card" ? r(y).slice(0, 3) : r(y));
  var b = {
    get loaded() {
      return n();
    },
    set loaded(z) {
      n(z), h();
    },
    get facets() {
      return o();
    },
    set facets(z) {
      o(z), h();
    },
    get mode() {
      return a();
    },
    set mode(z = "card") {
      a(z), h();
    },
    get dataTestid() {
      return s();
    },
    set dataTestid(z) {
      s(z), h();
    },
    get open() {
      return i();
    },
    set open(z = !1) {
      i(z), h();
    },
    get pinned() {
      return d();
    },
    set pinned(z = !1) {
      d(z), h();
    },
    get onOpen() {
      return c();
    },
    set onOpen(z) {
      c(z), h();
    },
    get onTogglePin() {
      return u();
    },
    set onTogglePin(z) {
      u(z), h();
    }
  };
  return Lr(e, {
    eyebrow: "Facets",
    title: "Distribution map",
    description: "See how the current result set breaks down by indexed dimensions and high-signal categories.",
    get mode() {
      return a();
    },
    get dataTestid() {
      return s();
    },
    get open() {
      return i();
    },
    get pinned() {
      return d();
    },
    get onOpen() {
      return c();
    },
    get onTogglePin() {
      return u();
    },
    footer: (j) => {
      var R = Av(), x = p(R);
      {
        let k = /* @__PURE__ */ M(() => `${r(y).length} facet group${r(y).length === 1 ? "" : "s"}`);
        At(x, {
          get label() {
            return r(k);
          },
          tone: "accent"
        });
      }
      v(R), B(j, R);
    },
    children: (j, R) => {
      var x = Wn(), k = Mt(x);
      {
        var S = (D) => {
          var I = Cv();
          B(D, I);
        }, g = (D) => {
          var I = Ov();
          B(D, I);
        }, W = (D) => {
          var I = Lv();
          xt(I, 21, () => r(P), ([X, A]) => X, (X, A) => {
            var K = /* @__PURE__ */ M(() => Ld(r(A), 2));
            let ue = () => r(K)[0], H = () => r(K)[1];
            var oe = Ev(), ae = p(oe), $ = p(ae), fe = p($, !0);
            v($), v(ae);
            var G = w(ae, 2);
            xt(G, 21, H, (ee) => `${ue()}:${ee.value}`, (ee, ge) => {
              var me = $v(), we = p(me), ie = p(we, !0);
              v(we);
              var se = w(we, 2), le = p(se, !0);
              v(se), v(me), ve(() => {
                de(ie, r(ge).label), de(le, r(ge).count);
              }), B(ee, me);
            }), v(G), v(oe), ve(() => de(fe, ue())), B(X, oe);
          }), v(I), B(D, I);
        };
        ye(k, (D) => {
          n() ? r(y).length === 0 ? D(g, 1) : D(W, -1) : D(S);
        });
      }
      B(j, x);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(b);
}
Wt(
  Rs,
  {
    loaded: {},
    facets: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var Iv = /* @__PURE__ */ J('<div class="footer-row svelte-11gg2b4"><span class="footer-copy svelte-11gg2b4"><!></span></div>'), Nv = /* @__PURE__ */ J('<div class="empty-state svelte-11gg2b4">Loading workspace discovery data…</div>'), Fv = /* @__PURE__ */ J('<div class="empty-state svelte-11gg2b4">Search results will appear here.</div>'), Bv = /* @__PURE__ */ J('<div class="empty-state svelte-11gg2b4">No results found for the current filters.</div>'), Hv = /* @__PURE__ */ J('<article class="result-row svelte-11gg2b4"><div class="result-header svelte-11gg2b4"><strong class="result-title svelte-11gg2b4"> </strong> <!></div> <div class="result-meta svelte-11gg2b4"> </div></article>'), Yv = /* @__PURE__ */ J('<div class="result-list svelte-11gg2b4"></div>');
const Vv = {
  hash: "svelte-11gg2b4",
  code: `.result-list.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.result-row.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.result-row.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.5rem;padding:0.95rem 1rem;}.result-header.svelte-11gg2b4 {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;}.result-title.svelte-11gg2b4 {color:var(--shell-text);line-height:1.45;word-break:break-word;}.result-meta.svelte-11gg2b4,
  .footer-copy.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.empty-state.svelte-11gg2b4 {min-height:8rem;display:flex;align-items:center;justify-content:center;text-align:center;}.footer-row.svelte-11gg2b4 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function As(e, t) {
  St(t, !0), zt(e, Vv);
  let n = m(t, "loaded", 7), o = m(t, "loading", 7), a = m(t, "searchResults", 7), s = m(t, "mode", 7, "card"), i = m(t, "dataTestid", 7), d = m(t, "open", 7, !1), c = m(t, "pinned", 7, !1), u = m(t, "onOpen", 7), y = m(t, "onTogglePin", 7), P = /* @__PURE__ */ M(() => s() === "card" ? a().slice(0, 7) : a());
  function b(R) {
    return String(R.summary.logicalPath ?? R.summary.username ?? R.summary.name ?? R.id);
  }
  function z(R) {
    return String(R.summary.mime ?? R.summary.roleId ?? R.id);
  }
  var j = {
    get loaded() {
      return n();
    },
    set loaded(R) {
      n(R), h();
    },
    get loading() {
      return o();
    },
    set loading(R) {
      o(R), h();
    },
    get searchResults() {
      return a();
    },
    set searchResults(R) {
      a(R), h();
    },
    get mode() {
      return s();
    },
    set mode(R = "card") {
      s(R), h();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(R) {
      i(R), h();
    },
    get open() {
      return d();
    },
    set open(R = !1) {
      d(R), h();
    },
    get pinned() {
      return c();
    },
    set pinned(R = !1) {
      c(R), h();
    },
    get onOpen() {
      return u();
    },
    set onOpen(R) {
      u(R), h();
    },
    get onTogglePin() {
      return y();
    },
    set onTogglePin(R) {
      y(R), h();
    }
  };
  return Lr(e, {
    eyebrow: "Results",
    title: "Matched records",
    description: "Browse the strongest hits from the current search and inspect their routing or identity metadata.",
    get mode() {
      return s();
    },
    get dataTestid() {
      return i();
    },
    get open() {
      return d();
    },
    get pinned() {
      return c();
    },
    get onOpen() {
      return u();
    },
    get onTogglePin() {
      return y();
    },
    footer: (x) => {
      var k = Iv(), S = p(k), g = p(S);
      {
        var W = (I) => {
          var X = ra();
          ve(() => de(X, `Showing ${r(P).length ?? ""} of ${a().length ?? ""} matches.`)), B(I, X);
        }, D = (I) => {
          var X = ra();
          ve(() => de(X, `${a().length ?? ""} total result${a().length === 1 ? "" : "s"}.`)), B(I, X);
        };
        ye(g, (I) => {
          a().length > r(P).length ? I(W) : I(D, -1);
        });
      }
      v(S), v(k), B(x, k);
    },
    children: (x, k) => {
      var S = Wn(), g = Mt(S);
      {
        var W = (A) => {
          var K = Nv();
          B(A, K);
        }, D = (A) => {
          var K = Fv();
          B(A, K);
        }, I = (A) => {
          var K = Bv();
          B(A, K);
        }, X = (A) => {
          var K = Yv();
          xt(K, 21, () => r(P), (ue) => ue.id, (ue, H) => {
            var oe = Hv(), ae = p(oe), $ = p(ae), fe = p($, !0);
            v($);
            var G = w($, 2);
            {
              var ee = (we) => {
                {
                  let ie = /* @__PURE__ */ M(() => String(r(H).summary.workspaceArea));
                  At(we, {
                    get label() {
                      return r(ie);
                    },
                    tone: "natural"
                  });
                }
              };
              ye(G, (we) => {
                r(H).summary.workspaceArea && we(ee);
              });
            }
            v(ae);
            var ge = w(ae, 2), me = p(ge, !0);
            v(ge), v(oe), ve(
              (we, ie) => {
                de(fe, we), de(me, ie);
              },
              [
                () => b(r(H)),
                () => z(r(H))
              ]
            ), B(ue, oe);
          }), v(K), B(A, K);
        };
        ye(g, (A) => {
          o() && !n() ? A(W) : n() ? a().length === 0 ? A(I, 2) : A(X, -1) : A(D, 1);
        });
      }
      B(x, S);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(j);
}
Wt(
  As,
  {
    loaded: {},
    loading: {},
    searchResults: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var Uv = /* @__PURE__ */ J('<div class="footer-row svelte-sveo96"><!> <span class="footer-copy svelte-sveo96">Press Enter inside the search field to run the query.</span></div>'), Xv = /* @__PURE__ */ J('<div class="search-layout svelte-sveo96"><div class="field-stack svelte-sveo96"><label class="svelte-sveo96">Domain</label> <select class="svelte-sveo96"><option>Workspace resources</option><option>System users</option><option>System roles</option></select></div> <div class="field-stack field-grow svelte-sveo96"><label class="svelte-sveo96">Search query</label> <input type="search" placeholder="routes, components, users, roles..." class="svelte-sveo96"/></div> <button class="primary-action svelte-sveo96" type="button"> </button></div>');
const Gv = {
  hash: "svelte-sveo96",
  code: `.search-layout.svelte-sveo96 {display:grid;gap:0.9rem;grid-template-columns:repeat(1, minmax(0, 1fr));align-items:end;}.field-grow.svelte-sveo96 {min-width:0;}.field-stack.svelte-sveo96 {display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.field-stack.svelte-sveo96 label:where(.svelte-sveo96) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-sveo96 input:where(.svelte-sveo96),
  .field-stack.svelte-sveo96 select:where(.svelte-sveo96) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;}.field-stack.svelte-sveo96 input:where(.svelte-sveo96)::placeholder {color:var(--shell-muted);}.field-stack.svelte-sveo96 input:where(.svelte-sveo96):focus,
  .field-stack.svelte-sveo96 select:where(.svelte-sveo96):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.primary-action.svelte-sveo96 {display:inline-flex;align-items:center;justify-content:center;min-height:3rem;border:0;border-radius:999px;background:var(--shell-primary);color:var(--shell-primary-text);padding:0.8rem 1.15rem;font:var(--efs-font-body-sm);font-weight:700;cursor:pointer;transition:transform 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;}.primary-action.svelte-sveo96:hover:not(:disabled) {transform:translateY(-1px);box-shadow:var(--shell-card-shadow);}.primary-action.svelte-sveo96:disabled {opacity:0.68;cursor:wait;}.footer-row.svelte-sveo96 {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-copy.svelte-sveo96 {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}

  @media (min-width: 64rem) {.search-layout.svelte-sveo96 {grid-template-columns:minmax(11rem, 14rem) minmax(0, 1fr) auto;}
  }`
};
function Cs(e, t) {
  const n = es();
  St(t, !0), zt(e, Gv);
  let o = m(t, "query", 15), a = m(t, "entity", 7), s = m(t, "loading", 7), i = m(t, "mode", 7, "card"), d = m(t, "dataTestid", 7), c = m(t, "open", 7, !1), u = m(t, "pinned", 7, !1), y = m(t, "onOpen", 7), P = m(t, "onTogglePin", 7), b = m(t, "onSearch", 7), z = m(t, "onEntityChange", 7);
  function j(x) {
    switch (x) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  var R = {
    get query() {
      return o();
    },
    set query(x) {
      o(x), h();
    },
    get entity() {
      return a();
    },
    set entity(x) {
      a(x), h();
    },
    get loading() {
      return s();
    },
    set loading(x) {
      s(x), h();
    },
    get mode() {
      return i();
    },
    set mode(x = "card") {
      i(x), h();
    },
    get dataTestid() {
      return d();
    },
    set dataTestid(x) {
      d(x), h();
    },
    get open() {
      return c();
    },
    set open(x = !1) {
      c(x), h();
    },
    get pinned() {
      return u();
    },
    set pinned(x = !1) {
      u(x), h();
    },
    get onOpen() {
      return y();
    },
    set onOpen(x) {
      y(x), h();
    },
    get onTogglePin() {
      return P();
    },
    set onTogglePin(x) {
      P(x), h();
    },
    get onSearch() {
      return b();
    },
    set onSearch(x) {
      b(x), h();
    },
    get onEntityChange() {
      return z();
    },
    set onEntityChange(x) {
      z(x), h();
    }
  };
  return Lr(e, {
    eyebrow: "Discovery",
    title: "Search the control plane",
    description: "Query workspace resources and system records from a single launcher widget.",
    get mode() {
      return i();
    },
    get dataTestid() {
      return d();
    },
    get open() {
      return c();
    },
    get pinned() {
      return u();
    },
    get onOpen() {
      return y();
    },
    get onTogglePin() {
      return P();
    },
    footer: (k) => {
      var S = Uv(), g = p(S);
      {
        let W = /* @__PURE__ */ M(() => j(a()));
        At(g, {
          get label() {
            return r(W);
          },
          tone: "accent"
        });
      }
      Rr(2), v(S), B(k, S);
    },
    children: (k, S) => {
      var g = Xv(), W = p(g), D = p(W), I = w(D, 2), X = p(I);
      X.value = X.__value = "public_workspace_files";
      var A = w(X);
      A.value = A.__value = "system_users";
      var K = w(A);
      K.value = K.__value = "system_roles", v(I);
      var ue;
      tn(I), v(W);
      var H = w(W, 2), oe = p(H), ae = w(oe, 2);
      sr(ae), v(H);
      var $ = w(H, 2), fe = p($, !0);
      v($), v(g), ve(() => {
        F(D, "for", `${n}-entity`), F(I, "id", `${n}-entity`), ue !== (ue = a()) && (I.value = (I.__value = a()) ?? "", Vr(I, a())), F(oe, "for", `${n}-query`), F(ae, "id", `${n}-query`), $.disabled = s(), de(fe, s() ? "Searching…" : "Search");
      }), he("change", I, (G) => z()(G.currentTarget.value)), he("keydown", ae, (G) => G.key === "Enter" && b()()), Jr(ae, o), he("click", $, function(...G) {
        var ee;
        (ee = b()) == null || ee.apply(this, G);
      }), B(k, g);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(R);
}
Er(["change", "keydown", "click"]);
Wt(
  Cs,
  {
    query: {},
    entity: {},
    loading: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {},
    onSearch: {},
    onEntityChange: {}
  },
  [],
  [],
  { mode: "open" }
);
var Jv = /* @__PURE__ */ J('<div class="widget-footer-row svelte-1angecb"><span class="widget-hint svelte-1angecb"> </span> <!></div>'), Kv = /* @__PURE__ */ J("<div> </div>"), Zv = /* @__PURE__ */ J('<div><div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role id</label> <input type="text" placeholder="member_auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role name</label> <input type="text" placeholder="Member Auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Description</label> <input type="text" placeholder="Can inspect decoded content and reports" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Entitlements</label> <input type="text" placeholder="NATURAL_VIEW, RAW_VIEW" autocomplete="off" class="svelte-1angecb"/></div></div> <div class="action-row svelte-1angecb"><button class="primary-action svelte-1angecb" type="button"> </button> <span class="meta-copy svelte-1angecb">Operator-only roles remain excluded from assignment.</span></div> <!>', 1);
const Qv = {
  hash: "svelte-1angecb",
  code: `.form-grid.svelte-1angecb {display:grid;gap:0.9rem;grid-template-columns:repeat(1, minmax(0, 1fr));}.form-grid-window.svelte-1angecb {grid-template-columns:repeat(2, minmax(0, 1fr));}.field-stack.svelte-1angecb {display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.field-span-full.svelte-1angecb {grid-column:1 / -1;}.field-stack.svelte-1angecb label:where(.svelte-1angecb) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1angecb input:where(.svelte-1angecb) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;}.field-stack.svelte-1angecb input:where(.svelte-1angecb)::placeholder {color:var(--shell-muted);}.field-stack.svelte-1angecb input:where(.svelte-1angecb):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.action-row.svelte-1angecb,
  .widget-footer-row.svelte-1angecb {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;}.primary-action.svelte-1angecb {display:inline-flex;align-items:center;justify-content:center;min-height:2.85rem;padding:0.8rem 1.15rem;border:0;border-radius:999px;background:var(--shell-primary);color:var(--shell-primary-text);font:var(--efs-font-body-sm);font-weight:700;cursor:pointer;transition:transform 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;}.primary-action.svelte-1angecb:hover:not(:disabled) {transform:translateY(-1px);box-shadow:var(--shell-card-shadow);}.primary-action.svelte-1angecb:disabled {opacity:0.68;cursor:wait;}.meta-copy.svelte-1angecb,
  .widget-hint.svelte-1angecb {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}

  @media (max-width: 63.99rem) {.form-grid-window.svelte-1angecb {grid-template-columns:1fr;}
  }`
};
function Os(e, t) {
  const n = es();
  St(t, !0), zt(e, Qv);
  let o = m(t, "roles", 7), a = m(t, "form", 15), s = m(t, "result", 7), i = m(t, "busy", 7), d = m(t, "mode", 7, "card"), c = m(t, "dataTestid", 7), u = m(t, "open", 7, !1), y = m(t, "pinned", 7, !1), P = m(t, "onOpen", 7), b = m(t, "onTogglePin", 7), z = m(t, "onSubmit", 7), j = /* @__PURE__ */ M(() => o().filter((x) => !x.system).length);
  var R = {
    get roles() {
      return o();
    },
    set roles(x) {
      o(x), h();
    },
    get form() {
      return a();
    },
    set form(x) {
      a(x), h();
    },
    get result() {
      return s();
    },
    set result(x) {
      s(x), h();
    },
    get busy() {
      return i();
    },
    set busy(x) {
      i(x), h();
    },
    get mode() {
      return d();
    },
    set mode(x = "card") {
      d(x), h();
    },
    get dataTestid() {
      return c();
    },
    set dataTestid(x) {
      c(x), h();
    },
    get open() {
      return u();
    },
    set open(x = !1) {
      u(x), h();
    },
    get pinned() {
      return y();
    },
    set pinned(x = !1) {
      y(x), h();
    },
    get onOpen() {
      return P();
    },
    set onOpen(x) {
      P(x), h();
    },
    get onTogglePin() {
      return b();
    },
    set onTogglePin(x) {
      b(x), h();
    },
    get onSubmit() {
      return z();
    },
    set onSubmit(x) {
      z(x), h();
    }
  };
  return Lr(e, {
    eyebrow: "Create role",
    title: "Add a custom tenant role",
    description: "Compose entitlements into reusable role presets and keep provisioning fast.",
    get mode() {
      return d();
    },
    get dataTestid() {
      return c();
    },
    get open() {
      return u();
    },
    get pinned() {
      return y();
    },
    get onOpen() {
      return P();
    },
    get onTogglePin() {
      return b();
    },
    footer: (k) => {
      var S = Jv(), g = p(S), W = p(g);
      v(g);
      var D = w(g, 2);
      At(D, { label: "comma-separated entitlements", tone: "info" }), v(S), ve(() => de(W, `${r(j) ?? ""} custom roles configured.`)), B(k, S);
    },
    children: (k, S) => {
      var g = Zv(), W = Mt(g);
      let D;
      var I = p(W), X = p(I), A = w(X, 2);
      sr(A), v(I);
      var K = w(I, 2), ue = p(K), H = w(ue, 2);
      sr(H), v(K);
      var oe = w(K, 2), ae = p(oe), $ = w(ae, 2);
      sr($), v(oe);
      var fe = w(oe, 2), G = p(fe), ee = w(G, 2);
      sr(ee), v(fe), v(W);
      var ge = w(W, 2), me = p(ge), we = p(me, !0);
      v(me), Rr(2), v(ge);
      var ie = w(ge, 2);
      {
        var se = (le) => {
          var qe = Kv(), ze = p(qe, !0);
          v(qe), ve(() => {
            Ie(qe, 1, ts(s().error ? "flash-error" : "notice")), de(ze, s().message);
          }), B(le, qe);
        };
        ye(ie, (le) => {
          s() && le(se);
        });
      }
      ve(() => {
        D = Ie(W, 1, "form-grid svelte-1angecb", null, D, { "form-grid-window": d() === "window" }), F(X, "for", `${n}-role-id`), F(A, "id", `${n}-role-id`), F(ue, "for", `${n}-role-name`), F(H, "id", `${n}-role-name`), F(ae, "for", `${n}-role-description`), F($, "id", `${n}-role-description`), F(G, "for", `${n}-role-entitlements`), F(ee, "id", `${n}-role-entitlements`), me.disabled = i(), de(we, i() ? "Creating…" : "Create role");
      }), Jr(A, () => a().id, (le) => a(a().id = le, !0)), Jr(H, () => a().name, (le) => a(a().name = le, !0)), Jr($, () => a().description, (le) => a(a().description = le, !0)), Jr(ee, () => a().entitlements, (le) => a(a().entitlements = le, !0)), he("click", me, function(...le) {
        var qe;
        (qe = z()) == null || qe.apply(this, le);
      }), B(k, g);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(R);
}
Er(["click"]);
Wt(
  Os,
  {
    roles: {},
    form: {},
    result: {},
    busy: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {},
    onSubmit: {}
  },
  [],
  [],
  { mode: "open" }
);
var eg = /* @__PURE__ */ J('<div class="widget-footer-row svelte-yr1mcc"><span class="widget-hint svelte-yr1mcc">Leave the login key blank to generate one automatically.</span> <!></div>'), tg = /* @__PURE__ */ J("<option> </option>"), rg = /* @__PURE__ */ J("<div> </div>"), ng = /* @__PURE__ */ J('<div><div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Username</label> <input type="text" placeholder="member-jane" autocomplete="username" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Display name</label> <input type="text" placeholder="Jane Doe" autocomplete="name" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Tenant role</label> <select class="svelte-yr1mcc"></select></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Custom login key</label> <input type="text" placeholder="leave blank to generate" autocomplete="off" class="svelte-yr1mcc"/></div></div> <div class="action-row svelte-yr1mcc"><button class="primary-action svelte-yr1mcc" type="button"> </button> <span class="meta-copy svelte-yr1mcc"> </span></div> <!>', 1);
const og = {
  hash: "svelte-yr1mcc",
  code: `.form-grid.svelte-yr1mcc {display:grid;gap:0.9rem;grid-template-columns:repeat(1, minmax(0, 1fr));}.form-grid-window.svelte-yr1mcc {grid-template-columns:repeat(2, minmax(0, 1fr));}.field-stack.svelte-yr1mcc {display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.field-stack.svelte-yr1mcc label:where(.svelte-yr1mcc) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-yr1mcc input:where(.svelte-yr1mcc),
  .field-stack.svelte-yr1mcc select:where(.svelte-yr1mcc) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;}.field-stack.svelte-yr1mcc input:where(.svelte-yr1mcc)::placeholder {color:var(--shell-muted);}.field-stack.svelte-yr1mcc input:where(.svelte-yr1mcc):focus,
  .field-stack.svelte-yr1mcc select:where(.svelte-yr1mcc):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.action-row.svelte-yr1mcc,
  .widget-footer-row.svelte-yr1mcc {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;}.primary-action.svelte-yr1mcc {display:inline-flex;align-items:center;justify-content:center;min-height:2.85rem;padding:0.8rem 1.15rem;border:0;border-radius:999px;background:var(--shell-primary);color:var(--shell-primary-text);font:var(--efs-font-body-sm);font-weight:700;cursor:pointer;transition:transform 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;}.primary-action.svelte-yr1mcc:hover:not(:disabled) {transform:translateY(-1px);box-shadow:var(--shell-card-shadow);}.primary-action.svelte-yr1mcc:disabled {opacity:0.68;cursor:wait;}.meta-copy.svelte-yr1mcc,
  .widget-hint.svelte-yr1mcc {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}

  @media (max-width: 63.99rem) {.form-grid-window.svelte-yr1mcc {grid-template-columns:1fr;}
  }`
};
function $s(e, t) {
  const n = es();
  St(t, !0), zt(e, og);
  let o = m(t, "roles", 7), a = m(t, "form", 15), s = m(t, "result", 7), i = m(t, "actualRole", 7), d = m(t, "busy", 7), c = m(t, "mode", 7, "card"), u = m(t, "dataTestid", 7), y = m(t, "open", 7, !1), P = m(t, "pinned", 7, !1), b = m(t, "onOpen", 7), z = m(t, "onTogglePin", 7), j = m(t, "onSubmit", 7), R = /* @__PURE__ */ M(() => o().filter((k) => !k.operatorOnly));
  var x = {
    get roles() {
      return o();
    },
    set roles(k) {
      o(k), h();
    },
    get form() {
      return a();
    },
    set form(k) {
      a(k), h();
    },
    get result() {
      return s();
    },
    set result(k) {
      s(k), h();
    },
    get actualRole() {
      return i();
    },
    set actualRole(k) {
      i(k), h();
    },
    get busy() {
      return d();
    },
    set busy(k) {
      d(k), h();
    },
    get mode() {
      return c();
    },
    set mode(k = "card") {
      c(k), h();
    },
    get dataTestid() {
      return u();
    },
    set dataTestid(k) {
      u(k), h();
    },
    get open() {
      return y();
    },
    set open(k = !1) {
      y(k), h();
    },
    get pinned() {
      return P();
    },
    set pinned(k = !1) {
      P(k), h();
    },
    get onOpen() {
      return b();
    },
    set onOpen(k) {
      b(k), h();
    },
    get onTogglePin() {
      return z();
    },
    set onTogglePin(k) {
      z(k), h();
    },
    get onSubmit() {
      return j();
    },
    set onSubmit(k) {
      j(k), h();
    }
  };
  return Lr(e, {
    eyebrow: "Create user",
    title: "Provision a new login key",
    description: "Create a tenant account, assign a role, and issue a credential without leaving the dashboard.",
    get mode() {
      return c();
    },
    get dataTestid() {
      return u();
    },
    get open() {
      return y();
    },
    get pinned() {
      return P();
    },
    get onOpen() {
      return b();
    },
    get onTogglePin() {
      return z();
    },
    footer: (S) => {
      var g = eg(), W = w(p(g), 2);
      {
        let D = /* @__PURE__ */ M(() => `actual ${i()}`);
        At(W, {
          get label() {
            return r(D);
          },
          tone: "accent",
          monospaced: !0
        });
      }
      v(g), B(S, g);
    },
    children: (S, g) => {
      var W = ng(), D = Mt(W);
      let I;
      var X = p(D), A = p(X), K = w(A, 2);
      sr(K), v(X);
      var ue = w(X, 2), H = p(ue), oe = w(H, 2);
      sr(oe), v(ue);
      var ae = w(ue, 2), $ = p(ae), fe = w($, 2);
      xt(fe, 21, () => r(R), (Me) => Me.id, (Me, Ne) => {
        var Qe = tg(), lt = p(Qe, !0);
        v(Qe);
        var ce = {};
        ve(() => {
          de(lt, r(Ne).name), ce !== (ce = r(Ne).id) && (Qe.value = (Qe.__value = r(Ne).id) ?? "");
        }), B(Me, Qe);
      }), v(fe), v(ae);
      var G = w(ae, 2), ee = p(G), ge = w(ee, 2);
      sr(ge), v(G), v(D);
      var me = w(D, 2), we = p(me), ie = p(we, !0);
      v(we);
      var se = w(we, 2), le = p(se);
      v(se), v(me);
      var qe = w(me, 2);
      {
        var ze = (Me) => {
          var Ne = rg(), Qe = p(Ne, !0);
          v(Ne), ve(() => {
            Ie(Ne, 1, ts(s().error ? "flash-error" : "notice")), de(Qe, s().message);
          }), B(Me, Ne);
        };
        ye(qe, (Me) => {
          s() && Me(ze);
        });
      }
      ve(() => {
        I = Ie(D, 1, "form-grid svelte-yr1mcc", null, I, { "form-grid-window": c() === "window" }), F(A, "for", `${n}-username`), F(K, "id", `${n}-username`), F(H, "for", `${n}-name`), F(oe, "id", `${n}-name`), F($, "for", `${n}-role`), F(fe, "id", `${n}-role`), F(ee, "for", `${n}-key`), F(ge, "id", `${n}-key`), we.disabled = d(), de(ie, d() ? "Creating…" : "Create user"), de(le, `${r(R).length ?? ""} assignable roles`);
      }), Jr(K, () => a().username, (Me) => a(a().username = Me, !0)), Jr(oe, () => a().name, (Me) => a(a().name = Me, !0)), Dl(fe, () => a().roleId, (Me) => a(a().roleId = Me, !0)), Jr(ge, () => a().loginKey, (Me) => a(a().loginKey = Me, !0)), he("click", we, function(...Me) {
        var Ne;
        (Ne = j()) == null || Ne.apply(this, Me);
      }), B(S, W);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(x);
}
Er(["click"]);
Wt(
  $s,
  {
    roles: {},
    form: {},
    result: {},
    actualRole: {},
    busy: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {},
    onSubmit: {}
  },
  [],
  [],
  { mode: "open" }
);
var ag = /* @__PURE__ */ J('<div class="footer-row svelte-13dkq1y"><div class="context-strip svelte-13dkq1y"><!> <!></div></div>'), sg = /* @__PURE__ */ J('<div class="empty-state svelte-13dkq1y">No alternate display modes are available for this session.</div>'), ig = /* @__PURE__ */ J('<button class="mode-button svelte-13dkq1y" type="button"><span class="mode-label svelte-13dkq1y"> </span> <span class="mode-copy svelte-13dkq1y"> </span></button>'), lg = /* @__PURE__ */ J('<div class="mode-grid svelte-13dkq1y"></div>'), dg = /* @__PURE__ */ J('<span class="detail-chip svelte-13dkq1y"> </span>'), cg = /* @__PURE__ */ J('<span class="detail-chip svelte-13dkq1y"> </span>'), ug = /* @__PURE__ */ J('<div class="detail-grid svelte-13dkq1y"><section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Effective entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section> <section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Actual entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section></div>'), vg = /* @__PURE__ */ J("<!> <!>", 1);
const gg = {
  hash: "svelte-13dkq1y",
  code: `.mode-grid.svelte-13dkq1y {display:grid;gap:0.8rem;grid-template-columns:repeat(auto-fit, minmax(11rem, 1fr));}.mode-button.svelte-13dkq1y {display:flex;flex-direction:column;gap:0.45rem;align-items:flex-start;min-height:6.6rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:22px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-text);padding:1rem;text-align:left;cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      opacity 160ms ease;}.mode-button.svelte-13dkq1y:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);}.mode-button[data-active='true'].svelte-13dkq1y {border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);}.mode-button.svelte-13dkq1y:disabled {opacity:0.68;cursor:wait;}.mode-label.svelte-13dkq1y {font-family:var(--efs-font-mono);font:var(--efs-font-body-md);font-family:var(--efs-font-mono);font-weight:700;}.mode-copy.svelte-13dkq1y {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.footer-row.svelte-13dkq1y,
  .context-strip.svelte-13dkq1y {display:flex;flex-wrap:wrap;align-items:center;gap:0.6rem;width:100%;}.detail-grid.svelte-13dkq1y {display:grid;gap:0.8rem;grid-template-columns:repeat(2, minmax(0, 1fr));}.detail-card.svelte-13dkq1y,
  .empty-state.svelte-13dkq1y {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:1rem;}.empty-state.svelte-13dkq1y {min-height:8rem;display:flex;align-items:center;justify-content:center;color:var(--shell-muted);line-height:1.6;text-align:center;}.detail-title.svelte-13dkq1y {margin:0 0 0.75rem;color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.06em;text-transform:uppercase;}.chip-wrap.svelte-13dkq1y {display:flex;flex-wrap:wrap;gap:0.45rem;}.detail-chip.svelte-13dkq1y {display:inline-flex;align-items:center;min-height:1.9rem;padding:0 0.75rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);background:color-mix(in srgb, var(--shell-row-hover), transparent 10%);color:var(--shell-text);font-family:var(--efs-font-mono);font:var(--efs-font-label);font-family:var(--efs-font-mono);}

  @media (max-width: 63.99rem) {.detail-grid.svelte-13dkq1y {grid-template-columns:1fr;}
  }`
};
function Es(e, t) {
  St(t, !0), zt(e, gg);
  let n = m(t, "user", 7), o = m(t, "busy", 7), a = m(t, "mode", 7, "card"), s = m(t, "dataTestid", 7), i = m(t, "open", 7, !1), d = m(t, "pinned", 7, !1), c = m(t, "onOpen", 7), u = m(t, "onTogglePin", 7), y = m(t, "onChange", 7);
  var P = {
    get user() {
      return n();
    },
    set user(b) {
      n(b), h();
    },
    get busy() {
      return o();
    },
    set busy(b) {
      o(b), h();
    },
    get mode() {
      return a();
    },
    set mode(b = "card") {
      a(b), h();
    },
    get dataTestid() {
      return s();
    },
    set dataTestid(b) {
      s(b), h();
    },
    get open() {
      return i();
    },
    set open(b = !1) {
      i(b), h();
    },
    get pinned() {
      return d();
    },
    set pinned(b = !1) {
      d(b), h();
    },
    get onOpen() {
      return c();
    },
    set onOpen(b) {
      c(b), h();
    },
    get onTogglePin() {
      return u();
    },
    set onTogglePin(b) {
      u(b), h();
    },
    get onChange() {
      return y();
    },
    set onChange(b) {
      y(b), h();
    }
  };
  return Lr(e, {
    eyebrow: "Display mode",
    title: "Effective role switching",
    description: "Jump between safe operating contexts without losing the tenant-admin identity behind the session.",
    get mode() {
      return a();
    },
    get dataTestid() {
      return s();
    },
    get open() {
      return i();
    },
    get pinned() {
      return d();
    },
    get onOpen() {
      return c();
    },
    get onTogglePin() {
      return u();
    },
    footer: (z) => {
      var j = Wn(), R = Mt(j);
      {
        var x = (k) => {
          var S = ag(), g = p(S), W = p(g);
          {
            let I = /* @__PURE__ */ M(() => `actual ${n().actualRole}`);
            At(W, {
              get label() {
                return r(I);
              },
              tone: "accent",
              monospaced: !0
            });
          }
          var D = w(W, 2);
          {
            let I = /* @__PURE__ */ M(() => `effective ${n().role}`);
            At(D, {
              get label() {
                return r(I);
              },
              tone: "info",
              monospaced: !0
            });
          }
          v(g), v(S), B(k, S);
        };
        ye(R, (k) => {
          n() && k(x);
        });
      }
      B(z, j);
    },
    children: (z, j) => {
      var R = vg(), x = Mt(R);
      {
        var k = (D) => {
          var I = sg();
          B(D, I);
        }, S = (D) => {
          var I = lg();
          xt(I, 20, () => {
            var X;
            return ((X = n()) == null ? void 0 : X.availableDisplayModes) ?? [];
          }, (X) => X, (X, A) => {
            var K = ig(), ue = p(K), H = p(ue, !0);
            v(ue);
            var oe = w(ue, 2), ae = p(oe, !0);
            v(oe), v(K), ve(() => {
              var $, fe, G;
              F(K, "data-active", A === (($ = n()) == null ? void 0 : $.role)), K.disabled = o(), de(H, A), de(ae, A === ((fe = n()) == null ? void 0 : fe.actualRole) ? "admin baseline" : A === ((G = n()) == null ? void 0 : G.role) ? "active context" : "switch context");
            }), he("click", K, () => y()(A)), B(X, K);
          }), v(I), B(D, I);
        };
        ye(x, (D) => {
          var I;
          (((I = n()) == null ? void 0 : I.availableDisplayModes) ?? []).length === 0 ? D(k) : D(S, -1);
        });
      }
      var g = w(x, 2);
      {
        var W = (D) => {
          var I = ug(), X = p(I), A = w(p(X), 2);
          xt(A, 20, () => n().entitlements ?? [], (H) => H, (H, oe) => {
            var ae = dg(), $ = p(ae, !0);
            v(ae), ve(() => de($, oe)), B(H, ae);
          }), v(A), v(X);
          var K = w(X, 2), ue = w(p(K), 2);
          xt(ue, 20, () => n().actualEntitlements ?? [], (H) => H, (H, oe) => {
            var ae = cg(), $ = p(ae, !0);
            v(ae), ve(() => de($, oe)), B(H, ae);
          }), v(ue), v(K), v(I), B(D, I);
        };
        ye(g, (D) => {
          a() === "window" && n() && D(W);
        });
      }
      B(z, R);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(P);
}
Er(["click"]);
Wt(
  Es,
  {
    user: {},
    busy: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {},
    onChange: {}
  },
  [],
  [],
  { mode: "open" }
);
var pg = /* @__PURE__ */ J('<div class="footer-row svelte-zhcicw"><span class="footer-copy svelte-zhcicw"><!></span></div>'), hg = /* @__PURE__ */ J('<div class="empty-state svelte-zhcicw">No roles found.</div>'), mg = /* @__PURE__ */ J('<p class="role-description svelte-zhcicw"> </p>'), fg = /* @__PURE__ */ J('<span class="entitlement-chip svelte-zhcicw"> </span>'), wg = /* @__PURE__ */ J('<article class="role-row svelte-zhcicw"><div class="role-row-header svelte-zhcicw"><div class="role-identity svelte-zhcicw"><strong class="role-name svelte-zhcicw"> </strong> <span class="role-id svelte-zhcicw"> </span></div> <div class="role-badges svelte-zhcicw"><!> <!></div></div> <!> <div class="entitlement-wrap svelte-zhcicw"></div></article>'), bg = /* @__PURE__ */ J('<div class="list-shell svelte-zhcicw"></div>');
const yg = {
  hash: "svelte-zhcicw",
  code: `.list-shell.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.role-row.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.role-row-header.svelte-zhcicw {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.75rem;}.role-identity.svelte-zhcicw,
  .role-badges.svelte-zhcicw {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.role-badges.svelte-zhcicw {align-items:flex-end;}.role-name.svelte-zhcicw {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.role-id.svelte-zhcicw,
  .role-description.svelte-zhcicw,
  .footer-copy.svelte-zhcicw,
  .empty-state.svelte-zhcicw {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.role-id.svelte-zhcicw {font-family:var(--efs-font-mono);}.role-description.svelte-zhcicw {margin:0;}.entitlement-wrap.svelte-zhcicw {display:flex;flex-wrap:wrap;gap:0.45rem;}.entitlement-chip.svelte-zhcicw {display:inline-flex;align-items:center;min-height:1.9rem;padding:0 0.75rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);background:color-mix(in srgb, var(--shell-row-hover), transparent 10%);color:var(--shell-text);font-family:var(--efs-font-mono);font:var(--efs-font-label);font-family:var(--efs-font-mono);}.empty-state.svelte-zhcicw {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-zhcicw {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.role-badges.svelte-zhcicw {align-items:flex-start;}
  }`
};
function Ls(e, t) {
  St(t, !0), zt(e, yg);
  let n = m(t, "roles", 7), o = m(t, "mode", 7, "card"), a = m(t, "dataTestid", 7), s = m(t, "open", 7, !1), i = m(t, "pinned", 7, !1), d = m(t, "onOpen", 7), c = m(t, "onTogglePin", 7), u = /* @__PURE__ */ M(() => o() === "card" ? n().slice(0, 6) : n());
  var y = {
    get roles() {
      return n();
    },
    set roles(P) {
      n(P), h();
    },
    get mode() {
      return o();
    },
    set mode(P = "card") {
      o(P), h();
    },
    get dataTestid() {
      return a();
    },
    set dataTestid(P) {
      a(P), h();
    },
    get open() {
      return s();
    },
    set open(P = !1) {
      s(P), h();
    },
    get pinned() {
      return i();
    },
    set pinned(P = !1) {
      i(P), h();
    },
    get onOpen() {
      return d();
    },
    set onOpen(P) {
      d(P), h();
    },
    get onTogglePin() {
      return c();
    },
    set onTogglePin(P) {
      c(P), h();
    }
  };
  return Lr(e, {
    eyebrow: "Roles",
    title: "Tenant role catalog",
    description: "Inspect role ids, entitlement bundles, and which presets are reserved for operator workflows.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return a();
    },
    get open() {
      return s();
    },
    get pinned() {
      return i();
    },
    get onOpen() {
      return d();
    },
    get onTogglePin() {
      return c();
    },
    footer: (b) => {
      var z = pg(), j = p(z), R = p(j);
      {
        var x = (S) => {
          var g = ra();
          ve(() => de(g, `Showing ${r(u).length ?? ""} of ${n().length ?? ""} roles.`)), B(S, g);
        }, k = (S) => {
          var g = ra();
          ve(() => de(g, `${n().length ?? ""} total role${n().length === 1 ? "" : "s"}.`)), B(S, g);
        };
        ye(R, (S) => {
          n().length > r(u).length ? S(x) : S(k, -1);
        });
      }
      v(j), v(z), B(b, z);
    },
    children: (b, z) => {
      var j = Wn(), R = Mt(j);
      {
        var x = (S) => {
          var g = hg();
          B(S, g);
        }, k = (S) => {
          var g = bg();
          xt(g, 21, () => r(u), (W) => W.id, (W, D) => {
            var I = wg(), X = p(I), A = p(X), K = p(A), ue = p(K, !0);
            v(K);
            var H = w(K, 2), oe = p(H, !0);
            v(H), v(A);
            var ae = w(A, 2), $ = p(ae);
            {
              var fe = (ie) => {
                At(ie, { label: "system", tone: "warning" });
              };
              ye($, (ie) => {
                r(D).system && ie(fe);
              });
            }
            var G = w($, 2);
            {
              var ee = (ie) => {
                At(ie, { label: "operator only", tone: "danger" });
              };
              ye(G, (ie) => {
                r(D).operatorOnly && ie(ee);
              });
            }
            v(ae), v(X);
            var ge = w(X, 2);
            {
              var me = (ie) => {
                var se = mg(), le = p(se, !0);
                v(se), ve(() => de(le, r(D).description)), B(ie, se);
              };
              ye(ge, (ie) => {
                r(D).description && ie(me);
              });
            }
            var we = w(ge, 2);
            xt(we, 21, () => r(D).entitlements, (ie) => `${r(D).id}:${ie}`, (ie, se) => {
              var le = fg(), qe = p(le, !0);
              v(le), ve(() => de(qe, r(se))), B(ie, le);
            }), v(we), v(I), ve(() => {
              de(ue, r(D).name), de(oe, r(D).id);
            }), B(W, I);
          }), v(g), B(S, g);
        };
        ye(R, (S) => {
          n().length === 0 ? S(x) : S(k, -1);
        });
      }
      B(b, j);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(y);
}
Wt(
  Ls,
  {
    roles: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var xg = /* @__PURE__ */ J('<div class="footer-row svelte-1wpzpgs"><!> <span class="footer-copy svelte-1wpzpgs">Read-only payload mirror from the current tenant.</span></div>'), kg = /* @__PURE__ */ J('<div class="code-shell svelte-1wpzpgs"><pre class="svelte-1wpzpgs"> </pre></div>');
const _g = {
  hash: "svelte-1wpzpgs",
  code: `.code-shell.svelte-1wpzpgs {min-height:0;}pre.svelte-1wpzpgs {margin:0;min-height:14rem;max-height:min(32rem, 62vh);overflow:auto;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 24%),
      color-mix(in srgb, var(--shell-surface), black 8%);color:var(--shell-text);padding:1rem 1.1rem;font-family:var(--efs-font-mono);font:var(--efs-font-body-xs);font-family:var(--efs-font-mono);line-height:1.8;white-space:pre-wrap;word-break:break-word;}.footer-row.svelte-1wpzpgs {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-copy.svelte-1wpzpgs {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}`
};
function Ds(e, t) {
  St(t, !0), zt(e, _g);
  let n = m(t, "settings", 7), o = m(t, "mode", 7, "card"), a = m(t, "dataTestid", 7), s = m(t, "open", 7, !1), i = m(t, "pinned", 7, !1), d = m(t, "onOpen", 7), c = m(t, "onTogglePin", 7), u = /* @__PURE__ */ M(() => n() ? Object.keys(n()).length : 0), y = /* @__PURE__ */ M(() => JSON.stringify(n() ?? {}, null, 2));
  var P = {
    get settings() {
      return n();
    },
    set settings(b) {
      n(b), h();
    },
    get mode() {
      return o();
    },
    set mode(b = "card") {
      o(b), h();
    },
    get dataTestid() {
      return a();
    },
    set dataTestid(b) {
      a(b), h();
    },
    get open() {
      return s();
    },
    set open(b = !1) {
      s(b), h();
    },
    get pinned() {
      return i();
    },
    set pinned(b = !1) {
      i(b), h();
    },
    get onOpen() {
      return d();
    },
    set onOpen(b) {
      d(b), h();
    },
    get onTogglePin() {
      return c();
    },
    set onTogglePin(b) {
      c(b), h();
    }
  };
  return Lr(e, {
    eyebrow: "Settings",
    title: "Raw tenant configuration",
    description: "Inspect the live settings payload that shapes explorer policy, display defaults, and shell behavior.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return a();
    },
    get open() {
      return s();
    },
    get pinned() {
      return i();
    },
    get onOpen() {
      return d();
    },
    get onTogglePin() {
      return c();
    },
    footer: (z) => {
      var j = xg(), R = p(j);
      {
        let x = /* @__PURE__ */ M(() => `${r(u)} top-level keys`);
        At(R, {
          get label() {
            return r(x);
          },
          tone: "accent"
        });
      }
      Rr(2), v(j), B(z, j);
    },
    children: (z, j) => {
      var R = kg(), x = p(R), k = p(x, !0);
      v(x), v(R), ve(() => de(k, r(y))), B(z, R);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(P);
}
Wt(
  Ds,
  {
    settings: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var Sg = /* @__PURE__ */ J('<div class="footer-row svelte-1vpo77r"><span class="footer-copy svelte-1vpo77r"><!></span></div>'), Pg = /* @__PURE__ */ J('<div class="empty-state svelte-1vpo77r">No users provisioned yet.</div>'), Tg = /* @__PURE__ */ J('<article class="user-row svelte-1vpo77r"><div class="user-row-main svelte-1vpo77r"><div class="user-identity svelte-1vpo77r"><strong class="user-name svelte-1vpo77r"> </strong> <span class="user-display svelte-1vpo77r"> </span></div> <div class="user-meta svelte-1vpo77r"><!> <span class="user-role svelte-1vpo77r"> </span></div></div></article>'), qg = /* @__PURE__ */ J('<div class="list-shell svelte-1vpo77r"></div>');
const Mg = {
  hash: "svelte-1vpo77r",
  code: `.list-shell.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.user-row.svelte-1vpo77r {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.user-row-main.svelte-1vpo77r {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.9rem;padding:0.95rem 1rem;}.user-identity.svelte-1vpo77r,
  .user-meta.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.user-meta.svelte-1vpo77r {align-items:flex-end;}.user-name.svelte-1vpo77r {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.user-display.svelte-1vpo77r,
  .user-role.svelte-1vpo77r,
  .footer-copy.svelte-1vpo77r,
  .empty-state.svelte-1vpo77r {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.user-role.svelte-1vpo77r {font-family:var(--efs-font-mono);}.empty-state.svelte-1vpo77r {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-1vpo77r {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.user-meta.svelte-1vpo77r {align-items:flex-start;}
  }`
};
function Is(e, t) {
  St(t, !0), zt(e, Mg);
  let n = m(t, "users", 7), o = m(t, "mode", 7, "card"), a = m(t, "dataTestid", 7), s = m(t, "open", 7, !1), i = m(t, "pinned", 7, !1), d = m(t, "onOpen", 7), c = m(t, "onTogglePin", 7), u = /* @__PURE__ */ M(() => o() === "card" ? n().slice(0, 6) : n());
  function y(b) {
    switch (b.toLowerCase()) {
      case "active":
        return "success";
      case "pending":
        return "warning";
      case "disabled":
        return "danger";
      default:
        return "neutral";
    }
  }
  var P = {
    get users() {
      return n();
    },
    set users(b) {
      n(b), h();
    },
    get mode() {
      return o();
    },
    set mode(b = "card") {
      o(b), h();
    },
    get dataTestid() {
      return a();
    },
    set dataTestid(b) {
      a(b), h();
    },
    get open() {
      return s();
    },
    set open(b = !1) {
      s(b), h();
    },
    get pinned() {
      return i();
    },
    set pinned(b = !1) {
      i(b), h();
    },
    get onOpen() {
      return d();
    },
    set onOpen(b) {
      d(b), h();
    },
    get onTogglePin() {
      return c();
    },
    set onTogglePin(b) {
      c(b), h();
    }
  };
  return Lr(e, {
    eyebrow: "Users",
    title: "Provisioned accounts",
    description: "Review active logins, role assignments, and account state without switching context.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return a();
    },
    get open() {
      return s();
    },
    get pinned() {
      return i();
    },
    get onOpen() {
      return d();
    },
    get onTogglePin() {
      return c();
    },
    footer: (z) => {
      var j = Sg(), R = p(j), x = p(R);
      {
        var k = (g) => {
          var W = ra();
          ve(() => de(W, `Showing ${r(u).length ?? ""} of ${n().length ?? ""} users.`)), B(g, W);
        }, S = (g) => {
          var W = ra();
          ve(() => de(W, `${n().length ?? ""} total user${n().length === 1 ? "" : "s"}.`)), B(g, W);
        };
        ye(x, (g) => {
          n().length > r(u).length ? g(k) : g(S, -1);
        });
      }
      v(R), v(j), B(z, j);
    },
    children: (z, j) => {
      var R = Wn(), x = Mt(R);
      {
        var k = (g) => {
          var W = Pg();
          B(g, W);
        }, S = (g) => {
          var W = qg();
          xt(W, 21, () => r(u), (D) => D.id, (D, I) => {
            var X = Tg(), A = p(X), K = p(A), ue = p(K), H = p(ue, !0);
            v(ue);
            var oe = w(ue, 2), ae = p(oe, !0);
            v(oe), v(K);
            var $ = w(K, 2), fe = p($);
            {
              let ge = /* @__PURE__ */ M(() => y(r(I).status));
              At(fe, {
                get label() {
                  return r(I).status;
                },
                get tone() {
                  return r(ge);
                }
              });
            }
            var G = w(fe, 2), ee = p(G, !0);
            v(G), v($), v(A), v(X), ve(() => {
              de(H, r(I).username), de(ae, r(I).name || "No display name"), de(ee, r(I).roleId);
            }), B(D, X);
          }), v(W), B(g, W);
        };
        ye(x, (g) => {
          n().length === 0 ? g(k) : g(S, -1);
        });
      }
      B(z, R);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(P);
}
Wt(
  Is,
  {
    users: {},
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var jg = /* @__PURE__ */ J('<div class="footer-row svelte-1u1chkd"><div class="footer-pills svelte-1u1chkd"><!> <!> <!> <!> <!> <!></div> <div class="footer-actions svelte-1u1chkd"><button class="prefs-button svelte-1u1chkd" type="button">Revert</button> <button class="prefs-button svelte-1u1chkd" type="button">Defaults</button> <button class="prefs-button is-primary svelte-1u1chkd" type="button">Apply</button></div></div>'), zg = /* @__PURE__ */ J('<span class="preview-control system close svelte-1u1chkd"><!></span> <span class="preview-control system svelte-1u1chkd"><!></span> <span class="preview-control system svelte-1u1chkd"><!></span>', 1), Wg = /* @__PURE__ */ J('<span class="preview-control system svelte-1u1chkd"><!></span> <span class="preview-control system svelte-1u1chkd"><!></span> <span class="preview-control system close svelte-1u1chkd"><!></span>', 1), Rg = /* @__PURE__ */ J("<option> </option>"), Ag = /* @__PURE__ */ J("<option> </option>"), Cg = /* @__PURE__ */ J("<option> </option>"), Og = /* @__PURE__ */ J(`<div class="prefs-layout svelte-1u1chkd"><div class="prefs-copy svelte-1u1chkd"><p class="svelte-1u1chkd">Stage shell chrome, button placement, resize behavior, and site font changes here first.
        The preset picker stamps the full chrome package now, including layout, inset, radius,
        border feel, and material treatment. Nothing leaves preview mode until you press Apply.</p> <div class="prefs-copy-pills svelte-1u1chkd"><!> <!> <!></div></div> <section class="preview-stage svelte-1u1chkd" aria-label="Window manager preview"><span class="preview-kicker svelte-1u1chkd">Preview only</span> <div class="preview-window svelte-1u1chkd"><div class="preview-window-shadow svelte-1u1chkd"></div> <div class="preview-chrome svelte-1u1chkd"><div>Window manager preview</div> <div aria-hidden="true"><!></div></div> <div class="preview-body svelte-1u1chkd"><div class="preview-body-grid svelte-1u1chkd"><article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Pinned widget</span> <strong class="svelte-1u1chkd">Workspace buttons</strong> <p class="svelte-1u1chkd">List the activity-bar buttons, edge-pinned actions, and quick launch macros.</p></article> <article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Content density</span> <strong class="svelte-1u1chkd">Responsive shell</strong> <p class="svelte-1u1chkd">Preview how the header chrome, border width, and glass treatment sit over content.</p></article></div></div></div></section> <section class="theme-group svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Chrome Preset</span> <p class="theme-note svelte-1u1chkd">Choosing a preset stamps the shell package: layout family, system button side, inset,
        radius, shadow feel, resize mode, and default font. It does not recolor the site. If you
        tweak any control after that, the draft becomes a custom variant of the selected preset.</p> <div class="prefs-grid svelte-1u1chkd"><div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Preset</label> <select class="svelte-1u1chkd"><!><!></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Site font</label> <select class="svelte-1u1chkd"></select></div></div></section> <hr class="prefs-divider svelte-1u1chkd"/> <div class="prefs-grid svelte-1u1chkd"><div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Button layout</label> <select class="svelte-1u1chkd"><option>Windows 11</option><option>Windows 10</option><option>Windows 8</option><option>Windows 7</option><option>macOS</option><option>Ubuntu</option><option>Xubuntu</option><option>GNOME</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">System button side</label> <select class="svelte-1u1chkd"><option>Right edge</option><option>Left edge</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Chrome style</label> <select class="svelte-1u1chkd"><option>Solid</option><option>Glass</option><option>Mica</option><option>Frost</option><option>Pane</option><option>Transparent</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Title alignment</label> <select class="svelte-1u1chkd"><option>Left</option><option>Center</option><option>Right</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Shift drag action</label> <select class="svelte-1u1chkd"><option>Pin window</option><option>No extra action</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Side resize mode</label> <select class="svelte-1u1chkd"><option>Anchored sides</option><option>Mirror both sides</option></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="12" step="1" class="svelte-1u1chkd"/></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="32" step="1" class="svelte-1u1chkd"/></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="20" step="1" class="svelte-1u1chkd"/></div> <label class="field-toggle svelte-1u1chkd"><input type="checkbox" class="svelte-1u1chkd"/> <span>Restore the previous snap if you drag free and release without shift.</span></label></div> <section class="profiles-panel svelte-1u1chkd"><div class="profiles-header svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Custom presets</span> <p class="svelte-1u1chkd">Save the current draft as a reusable shell profile. Saved presets stay in local storage.</p></div> <div class="profiles-save svelte-1u1chkd"><input type="text" placeholder="Profile name" class="svelte-1u1chkd"/> <button class="prefs-button svelte-1u1chkd" type="button">Save preset</button></div></section></div>`);
const $g = {
  hash: "svelte-1u1chkd",
  code: `.prefs-layout.svelte-1u1chkd {display:flex;flex-direction:column;gap:1rem;}.prefs-copy.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.85rem;}.prefs-copy.svelte-1u1chkd p:where(.svelte-1u1chkd) {margin:0;max-width:38rem;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.prefs-copy-pills.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.55rem;}.preview-stage.svelte-1u1chkd {position:relative;overflow:hidden;padding:1.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:24px;background:linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 6 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 88%) calc(100% / 6 - 1px),
        transparent calc(100% / 6)
      ),
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 30%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 4%);}.preview-kicker.svelte-1u1chkd {display:inline-flex;margin-bottom:0.9rem;color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.preview-window.svelte-1u1chkd {--preview-radius: 18px;--preview-system-width: 2.55rem;--preview-system-height: 2rem;--preview-system-radius: 10px;--preview-system-icon-size: 0.88rem;--preview-control-border-width: clamp(0px, calc(var(--preview-border-width) * 0.9), 3px);--preview-control-radius: 10px;--preview-top-space: max(0.2rem, calc(var(--preview-chrome-padding) * 0.58 + 0.04rem));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.32));--preview-panel: var(--shell-panel);--preview-surface: var(--shell-surface);--preview-border: var(--shell-border);--preview-shadow: 0 24px 56px rgba(0, 0, 0, 0.32);position:relative;margin-inline:auto;width:min(100%, 34rem);border:var(--preview-border-width) solid color-mix(in srgb, var(--preview-border), transparent 12%);border-radius:var(--preview-radius);overflow:hidden;font-family:var(--preview-font-family);background:radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--shell-primary), transparent 92%),
        transparent 28%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 42%),
      color-mix(in srgb, var(--preview-surface), transparent 2%);}.preview-window-shadow.svelte-1u1chkd {position:absolute;inset:0;pointer-events:none;box-shadow:var(--preview-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 26%);}.preview-window[data-layout='windows-7'].svelte-1u1chkd {--preview-system-width: 3rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.8rem;--preview-system-radius: 0 0 8px 8px;}.preview-window[data-layout='windows-8'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-10'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 2rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-11'].svelte-1u1chkd {--preview-system-height: 2rem;--preview-system-icon-size: 0.88rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd {--preview-system-width: 2rem;--preview-system-height: 1.75rem;--preview-system-icon-size: 0.76rem;--preview-system-radius: 0;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd {--preview-system-width: 0.9rem;--preview-system-height: 0.9rem;--preview-system-icon-size: 0.48rem;--preview-system-radius: 999px;}.preview-window[data-layout='ubuntu'].svelte-1u1chkd,
  .preview-window[data-layout='xubuntu'].svelte-1u1chkd {--preview-system-width: 1rem;--preview-system-height: 1rem;--preview-system-icon-size: 0.5rem;--preview-system-radius: 999px;--preview-control-radius: 999px;}.preview-window[data-layout='gnome'].svelte-1u1chkd {--preview-system-width: 2.6rem;--preview-system-height: 1.82rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 999px;--preview-control-radius: 12px;}.preview-window[data-style='transparent'].svelte-1u1chkd {background:color-mix(in srgb, var(--preview-surface), transparent 12%);}.preview-window[data-style='mica'].svelte-1u1chkd {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 38%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 30%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 48%),
      color-mix(in srgb, var(--preview-surface), transparent 10%);}.preview-window[data-style='frost'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 16%);}.preview-window[data-style='pane'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 8%);}.preview-window[data-style='glass'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}.preview-window[data-style='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);backdrop-filter:blur(14px) saturate(1.06);-webkit-backdrop-filter:blur(14px) saturate(1.06);}.preview-window[data-style='frost'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.05) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 18%);backdrop-filter:blur(16px) saturate(1.12);-webkit-backdrop-filter:blur(16px) saturate(1.12);}.preview-window[data-style='pane'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.preview-chrome.svelte-1u1chkd {position:relative;z-index:1;display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;min-height:calc(
      var(--preview-system-height) + var(--preview-top-space) + var(--preview-bottom-space)
    );padding-top:var(--preview-top-space);padding-bottom:var(--preview-bottom-space);padding-inline:var(--preview-chrome-padding);border-bottom:1px solid color-mix(in srgb, var(--preview-border), transparent 20%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),
      color-mix(in srgb, var(--preview-panel), transparent 2%);}.preview-window[data-style='transparent'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:transparent;border-bottom-color:transparent;}.preview-window[data-system-placement='left'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {justify-content:flex-start;}.preview-title.svelte-1u1chkd {position:absolute;top:50%;left:50%;min-width:0;width:max(0px, calc(100% - 8rem));max-width:max(0px, calc(100% - 8rem));color:var(--shell-text);font:var(--efs-font-title-sm);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;transform:translate(-50%, -50%);}.preview-title.align-left.svelte-1u1chkd {text-align:left;}.preview-title.align-center.svelte-1u1chkd {text-align:center;}.preview-title.align-right.svelte-1u1chkd {text-align:right;}.preview-controls.svelte-1u1chkd {display:inline-flex;align-items:center;gap:0.25rem;flex:none;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.18rem, calc(var(--preview-chrome-padding) * 0.38));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-controls.windows.svelte-1u1chkd {gap:0.12rem;}.preview-control.svelte-1u1chkd {display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border:var(--preview-control-border-width) solid
      color-mix(in srgb, var(--shell-border), transparent 16%);border-radius:var(--preview-control-radius);background:color-mix(in srgb, var(--shell-panel), transparent 8%);color:var(--shell-muted);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);}.preview-control.svelte-1u1chkd .app-icon {width:var(--preview-system-icon-size);height:var(--preview-system-icon-size);}.preview-controls.windows.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {width:var(--preview-system-width);height:var(--preview-system-height);border-radius:var(--preview-system-radius);border-color:transparent;background:transparent;}.preview-controls.windows.variant-windows-7.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);border-color:color-mix(in srgb, var(--shell-border), transparent 30%);}.preview-controls.windows.variant-ubuntu.svelte-1u1chkd,
  .preview-controls.windows.variant-xubuntu.svelte-1u1chkd {gap:0.32rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-color:color-mix(in srgb, var(--shell-border), transparent 6%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.34),
      inset -1px -1px 0 rgba(0, 0, 0, 0.24);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) {gap:0.35rem;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {color:rgba(0, 0, 0, 0.46);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(1) {background:#ff6059;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(2) {background:#f5c042;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(3) {background:#2dcf5f;}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.22rem, calc(var(--preview-chrome-padding) * 0.62));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.24));background:linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 10%);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:11px;}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.1));}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:0;}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.14rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 68%);}.preview-window[data-theme='xubuntu'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--preview-panel), transparent 14%);}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.16rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:color-mix(in srgb, var(--shell-panel), transparent 2%);box-shadow:none;}.preview-controls.windows.svelte-1u1chkd .preview-control.close:where(.svelte-1u1chkd) {color:color-mix(in srgb, var(--shell-text), transparent 12%);}.preview-body.svelte-1u1chkd {position:relative;z-index:1;padding:1rem;}.preview-body-grid.svelte-1u1chkd {display:grid;gap:0.9rem;grid-template-columns:repeat(auto-fit, minmax(12rem, 1fr));}.preview-card.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.35rem;min-width:0;padding:0.95rem 1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 16%);border-radius:18px;background:color-mix(in srgb, var(--shell-panel), transparent 6%);}.preview-card-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.preview-card.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.preview-card.svelte-1u1chkd p:where(.svelte-1u1chkd) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.prefs-grid.svelte-1u1chkd {display:grid;gap:0.9rem;grid-template-columns:repeat(auto-fit, minmax(13rem, 1fr));}.theme-group.svelte-1u1chkd,
  .profiles-panel.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.9rem;}.theme-note.svelte-1u1chkd {margin:0;max-width:42rem;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.group-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.prefs-divider.svelte-1u1chkd {width:100%;height:1px;border:0;margin:0;background:color-mix(in srgb, var(--shell-border), transparent 22%);}.field-stack.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.field-stack.svelte-1u1chkd label:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd),
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;}.field-stack.svelte-1u1chkd input[type='range']:where(.svelte-1u1chkd) {padding-inline:0.75rem;accent-color:var(--shell-primary);}.field-toggle.svelte-1u1chkd {display:flex;gap:0.75rem;align-items:flex-start;min-height:3rem;padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);font:var(--efs-font-body-sm);line-height:1.55;}.field-toggle.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:1rem;height:1rem;margin:0.15rem 0 0;accent-color:var(--shell-primary);}.profiles-header.svelte-1u1chkd p:where(.svelte-1u1chkd) {margin:0.2rem 0 0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.profiles-save.svelte-1u1chkd {display:grid;gap:0.75rem;grid-template-columns:minmax(0, 1fr) auto;}.profiles-save.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd):focus,
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.footer-row.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-pills.svelte-1u1chkd,
  .footer-actions.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.6rem;}.prefs-button.svelte-1u1chkd {display:inline-flex;align-items:center;justify-content:center;min-height:2.4rem;padding:0 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease,
      box-shadow 160ms ease;}.prefs-button.svelte-1u1chkd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);background:color-mix(in srgb, var(--shell-row-hover), transparent 4%);color:var(--shell-text);}.prefs-button.is-primary.svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 56%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.prefs-button.svelte-1u1chkd:disabled {opacity:0.45;cursor:not-allowed;transform:none;}

  @media (max-width: 47.99rem) {.profiles-save.svelte-1u1chkd {grid-template-columns:1fr;}.preview-stage.svelte-1u1chkd,
    .preview-body.svelte-1u1chkd {padding-inline:0.85rem;}.preview-window.svelte-1u1chkd {--preview-system-width: 2.3rem;--preview-system-height: 1.75rem;}.preview-chrome.svelte-1u1chkd {gap:0.35rem;min-height:calc(
        var(--preview-system-height) +
          max(0.3rem, calc(var(--preview-top-space) * 0.92)) +
          max(0.12rem, calc(var(--preview-bottom-space) * 0.9))
      );padding-inline:max(0.55rem, calc(var(--preview-chrome-padding) * 0.82));}.preview-title.svelte-1u1chkd {font-size:0.82rem;width:max(0px, calc(100% - 6.6rem));max-width:max(0px, calc(100% - 6.6rem));}.preview-control.svelte-1u1chkd .app-icon {width:min(0.72rem, var(--preview-system-icon-size));height:min(0.72rem, var(--preview-system-icon-size));}
  }`
};
function Ns(e, t) {
  const n = es();
  St(t, !0), zt(e, $g);
  const o = {
    mac: "macOS",
    "windows-7": "Windows 7",
    "windows-8": "Windows 8",
    "windows-10": "Windows 10",
    "windows-11": "Windows 11",
    ubuntu: "Ubuntu",
    xubuntu: "Xubuntu",
    gnome: "GNOME"
  }, a = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), s = { left: "Left edge", right: "Right edge" }, i = { anchored: "Anchored sides", mirrored: "Mirror both sides" }, d = Object.fromEntries(Object.entries(Ro).map(([se, le]) => [se, le.label])), c = Object.fromEntries(Object.entries(ga).map(([se, le]) => [se, le.label])), u = Object.values(Ro), y = Object.values(ga);
  let P = m(t, "mode", 7, "card"), b = m(t, "dataTestid", 7), z = m(t, "open", 7, !1), j = m(t, "pinned", 7, !1), R = m(t, "onOpen", 7), x = m(t, "onTogglePin", 7);
  function k(se = iv()) {
    return { ...Et, ...se };
  }
  let S = /* @__PURE__ */ ne(dt(k())), g = /* @__PURE__ */ ne(dt(k())), W = /* @__PURE__ */ ne(""), D = /* @__PURE__ */ M(() => !Ws(r(g), r(S))), I = /* @__PURE__ */ M(() => r(D) ? "warning" : "accent"), X = /* @__PURE__ */ M(() => rv(r(g))), A = /* @__PURE__ */ M(() => r(X) ?? "__custom__"), K = /* @__PURE__ */ M(() => r(X) ? d[r(X)] : `Custom ${d[r(g).themePreset]}`), ue = /* @__PURE__ */ M(() => Kl(r(g).themePreset));
  qa(() => {
    const se = Ql((le) => {
      const qe = k(le), ze = !Ws(r(g), r(S));
      q(S, qe, !0), ze || q(g, qe, !0);
    });
    return () => {
      se();
    };
  });
  function H(se) {
    q(g, { ...r(g), ...se }, !0);
  }
  function oe(se) {
    return a.has(se);
  }
  function ae(se) {
    switch (se) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function $(se, le = !1) {
    if (le)
      return se === "mac" || se === "ubuntu" || se === "xubuntu" ? void 0 : "stack";
    switch (se) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function fe(se, le = !1) {
    if (le)
      return "stack";
    switch (se) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  function G(se) {
    q(g, k(Fo(se)), !0);
  }
  function ee() {
    dv(r(g));
  }
  function ge() {
    q(g, k(r(S)), !0);
  }
  function me() {
    q(g, k(Et), !0);
  }
  function we() {
    lv(r(W), r(g)), q(W, "");
  }
  var ie = {
    get mode() {
      return P();
    },
    set mode(se = "card") {
      P(se), h();
    },
    get dataTestid() {
      return b();
    },
    set dataTestid(se) {
      b(se), h();
    },
    get open() {
      return z();
    },
    set open(se = !1) {
      z(se), h();
    },
    get pinned() {
      return j();
    },
    set pinned(se = !1) {
      j(se), h();
    },
    get onOpen() {
      return R();
    },
    set onOpen(se) {
      R(se), h();
    },
    get onTogglePin() {
      return x();
    },
    set onTogglePin(se) {
      x(se), h();
    }
  };
  return Lr(e, {
    eyebrow: "Window manager",
    title: "Floating panel preferences",
    description: "Preview button layouts, inset spacing, and shell materials here first. Popout windows only change after you press Apply.",
    get mode() {
      return P();
    },
    get dataTestid() {
      return b();
    },
    get open() {
      return z();
    },
    get pinned() {
      return j();
    },
    get onOpen() {
      return R();
    },
    get onTogglePin() {
      return x();
    },
    footer: (le) => {
      var qe = jg(), ze = p(qe), Me = p(ze);
      {
        let mt = /* @__PURE__ */ M(() => r(D) ? "Preview pending" : "Applied");
        At(Me, {
          get label() {
            return r(mt);
          },
          get tone() {
            return r(I);
          }
        });
      }
      var Ne = w(Me, 2);
      {
        let mt = /* @__PURE__ */ M(() => `${o[r(g).buttonLayout]} chrome`);
        At(Ne, {
          get label() {
            return r(mt);
          },
          tone: "accent"
        });
      }
      var Qe = w(Ne, 2);
      At(Qe, {
        get label() {
          return s[r(g).systemButtonPlacement];
        },
        tone: "neutral"
      });
      var lt = w(Qe, 2);
      At(lt, {
        get label() {
          return i[r(g).sideResizeMode];
        },
        tone: "neutral"
      });
      var ce = w(lt, 2);
      At(ce, {
        get label() {
          return r(K);
        },
        tone: "info"
      });
      var xe = w(ce, 2);
      At(xe, {
        get label() {
          return c[r(g).fontPreset];
        },
        tone: "neutral"
      }), v(ze);
      var $e = w(ze, 2), nt = p($e), pt = w(nt, 2), Ge = w(pt, 2);
      v($e), v(qe), ve(() => {
        nt.disabled = !r(D), Ge.disabled = !r(D);
      }), he("click", nt, ge), he("click", pt, me), he("click", Ge, ee), B(le, qe);
    },
    children: (le, qe) => {
      var ze = Og(), Me = p(ze), Ne = w(p(Me), 2), Qe = p(Ne);
      {
        let _e = /* @__PURE__ */ M(() => `Live: ${o[r(S).buttonLayout]}`);
        At(Qe, {
          get label() {
            return r(_e);
          },
          tone: "neutral"
        });
      }
      var lt = w(Qe, 2);
      {
        let _e = /* @__PURE__ */ M(() => `Preview: ${o[r(g).buttonLayout]}`);
        At(lt, {
          get label() {
            return r(_e);
          },
          get tone() {
            return r(I);
          }
        });
      }
      var ce = w(lt, 2);
      At(ce, {
        get label() {
          return r(K);
        },
        tone: "info"
      }), v(Ne), v(Me);
      var xe = w(Me, 2), $e = w(p(xe), 2);
      let nt;
      var pt = w(p($e), 2), Ge = p(pt), mt = w(Ge, 2), et = p(mt);
      {
        var kt = (_e) => {
          var f = zg(), O = Mt(f), pe = p(O);
          {
            let Q = /* @__PURE__ */ M(() => ae(r(g).buttonLayout));
            rt(pe, {
              name: "close",
              get variant() {
                return r(Q);
              }
            });
          }
          v(O);
          var be = w(O, 2), l = p(be);
          {
            let Q = /* @__PURE__ */ M(() => $(r(g).buttonLayout));
            rt(l, {
              name: "minimize",
              get variant() {
                return r(Q);
              }
            });
          }
          v(be);
          var _ = w(be, 2), Y = p(_);
          {
            let Q = /* @__PURE__ */ M(() => fe(r(g).buttonLayout));
            rt(Y, {
              name: "maximize",
              get variant() {
                return r(Q);
              }
            });
          }
          v(_), B(_e, f);
        }, ct = /* @__PURE__ */ M(() => oe(r(g).buttonLayout)), ft = (_e) => {
          var f = Wg(), O = Mt(f), pe = p(O);
          {
            let Q = /* @__PURE__ */ M(() => $(r(g).buttonLayout));
            rt(pe, {
              name: "minimize",
              get variant() {
                return r(Q);
              }
            });
          }
          v(O);
          var be = w(O, 2), l = p(be);
          {
            let Q = /* @__PURE__ */ M(() => fe(r(g).buttonLayout));
            rt(l, {
              name: "maximize",
              get variant() {
                return r(Q);
              }
            });
          }
          v(be);
          var _ = w(be, 2), Y = p(_);
          {
            let Q = /* @__PURE__ */ M(() => ae(r(g).buttonLayout));
            rt(Y, {
              name: "close",
              get variant() {
                return r(Q);
              }
            });
          }
          v(_), B(_e, f);
        };
        ye(et, (_e) => {
          r(ct) ? _e(kt) : _e(ft, -1);
        });
      }
      v(mt), v(pt), Rr(2), v($e), v(xe);
      var N = w(xe, 2), L = w(p(N), 4), ke = p(L), C = p(ke), te = w(C, 2), Ae = p(te);
      {
        var Fe = (_e) => {
          var f = Rg(), O = p(f);
          v(f), f.value = f.__value = "__custom__", ve(() => de(O, `Custom (${d[r(g).themePreset] ?? ""})`)), B(_e, f);
        };
        ye(Ae, (_e) => {
          r(X) || _e(Fe);
        });
      }
      var Be = w(Ae);
      xt(Be, 17, () => u, (_e) => _e.id, (_e, f) => {
        var O = Ag(), pe = p(O, !0);
        v(O);
        var be = {};
        ve(() => {
          de(pe, r(f).label), be !== (be = r(f).id) && (O.value = (O.__value = r(f).id) ?? "");
        }), B(_e, O);
      }), v(te);
      var Te;
      tn(te), v(ke);
      var E = w(ke, 2), Je = p(E), He = w(Je, 2);
      xt(He, 21, () => y, (_e) => _e.id, (_e, f) => {
        var O = Cg(), pe = p(O, !0);
        v(O);
        var be = {};
        ve(() => {
          de(pe, r(f).label), be !== (be = r(f).id) && (O.value = (O.__value = r(f).id) ?? "");
        }), B(_e, O);
      }), v(He);
      var V;
      tn(He), v(E), v(L), v(N);
      var ut = w(N, 4), gt = p(ut), ot = p(gt), tt = w(ot, 2), ht = p(tt);
      ht.value = ht.__value = "windows-11";
      var Ct = w(ht);
      Ct.value = Ct.__value = "windows-10";
      var Yt = w(Ct);
      Yt.value = Yt.__value = "windows-8";
      var wt = w(Yt);
      wt.value = wt.__value = "windows-7";
      var vt = w(wt);
      vt.value = vt.__value = "mac";
      var gr = w(vt);
      gr.value = gr.__value = "ubuntu";
      var st = w(gr);
      st.value = st.__value = "xubuntu";
      var Dt = w(st);
      Dt.value = Dt.__value = "gnome", v(tt);
      var wr;
      tn(tt), v(gt);
      var Vt = w(gt, 2), Ot = p(Vt), bt = w(Ot, 2), Dr = p(bt);
      Dr.value = Dr.__value = "right";
      var vn = w(Dr);
      vn.value = vn.__value = "left", v(bt);
      var gn;
      tn(bt), v(Vt);
      var Kt = w(Vt, 2), It = p(Kt), Nt = w(It, 2), Ir = p(Nt);
      Ir.value = Ir.__value = "solid";
      var pn = w(Ir);
      pn.value = pn.__value = "glass";
      var hn = w(pn);
      hn.value = hn.__value = "mica";
      var br = w(hn);
      br.value = br.__value = "frost";
      var mn = w(br);
      mn.value = mn.__value = "pane";
      var oo = w(mn);
      oo.value = oo.__value = "transparent", v(Nt);
      var ao;
      tn(Nt), v(Kt);
      var Cn = w(Kt, 2), fn = p(Cn), Mr = w(fn, 2), Tt = p(Mr);
      Tt.value = Tt.__value = "left";
      var Ut = w(Tt);
      Ut.value = Ut.__value = "center";
      var so = w(Ut);
      so.value = so.__value = "right", v(Mr);
      var wn;
      tn(Mr), v(Cn);
      var On = w(Cn, 2), Zr = p(On), Rt = w(Zr, 2), $n = p(Rt);
      $n.value = $n.__value = "pin";
      var Oo = w($n);
      Oo.value = Oo.__value = "none", v(Rt);
      var $o;
      tn(Rt), v(On);
      var io = w(On, 2), Eo = p(io), yr = w(Eo, 2), lo = p(yr);
      lo.value = lo.__value = "anchored";
      var En = w(lo);
      En.value = En.__value = "mirrored", v(yr);
      var Nr;
      tn(yr), v(io);
      var co = w(io, 2), bn = p(co), yn = p(bn);
      v(bn);
      var at = w(bn, 2);
      sr(at), v(co);
      var Ue = w(co, 2), Ft = p(Ue), dr = p(Ft);
      v(Ft);
      var Zt = w(Ft, 2);
      sr(Zt), v(Ue);
      var Qt = w(Ue, 2), Ln = p(Qt), qt = p(Ln);
      v(Ln);
      var Xt = w(Ln, 2);
      sr(Xt), v(Qt);
      var nr = w(Qt, 2), Qr = p(nr);
      sr(Qr), Rr(2), v(nr), v(ut);
      var Lo = w(ut, 2), xn = w(p(Lo), 2), en = p(xn);
      sr(en);
      var uo = w(en, 2);
      v(xn), v(Lo), v(ze), ve(
        (_e) => {
          F(xe, "data-layout", r(g).buttonLayout), F(xe, "data-style", r(g).chromeStyle), F($e, "data-layout", r(g).buttonLayout), F($e, "data-theme", r(g).themePreset), F($e, "data-system-placement", r(g).systemButtonPlacement), F($e, "data-style", r(g).chromeStyle), nt = fr($e, "", nt, {
            "--preview-border-width": `${r(g).borderWidth}px`,
            "--preview-radius": `${r(g).borderRadius}px`,
            "--preview-chrome-padding": `${r(g).chromePadding}px`,
            "--preview-font-family": ga[r(g).fontPreset].stack,
            "--preview-shadow": r(ue)
          }), Ie(Ge, 1, `preview-title align-${r(g).alignment}`, "svelte-1u1chkd"), Ie(mt, 1, `preview-controls windows variant-${r(g).buttonLayout}`, "svelte-1u1chkd"), F(C, "for", `${n}-theme`), F(te, "id", `${n}-theme`), Te !== (Te = r(A)) && (te.value = (te.__value = r(A)) ?? "", Vr(te, r(A))), F(Je, "for", `${n}-font`), F(He, "id", `${n}-font`), V !== (V = r(g).fontPreset) && (He.value = (He.__value = r(g).fontPreset) ?? "", Vr(He, r(g).fontPreset)), F(ot, "for", `${n}-layout`), F(tt, "id", `${n}-layout`), wr !== (wr = r(g).buttonLayout) && (tt.value = (tt.__value = r(g).buttonLayout) ?? "", Vr(tt, r(g).buttonLayout)), F(Ot, "for", `${n}-system-placement`), F(bt, "id", `${n}-system-placement`), gn !== (gn = r(g).systemButtonPlacement) && (bt.value = (bt.__value = r(g).systemButtonPlacement) ?? "", Vr(bt, r(g).systemButtonPlacement)), F(It, "for", `${n}-chrome`), F(Nt, "id", `${n}-chrome`), ao !== (ao = r(g).chromeStyle) && (Nt.value = (Nt.__value = r(g).chromeStyle) ?? "", Vr(Nt, r(g).chromeStyle)), F(fn, "for", `${n}-alignment`), F(Mr, "id", `${n}-alignment`), wn !== (wn = r(g).alignment) && (Mr.value = (Mr.__value = r(g).alignment) ?? "", Vr(Mr, r(g).alignment)), F(Zr, "for", `${n}-shift-action`), F(Rt, "id", `${n}-shift-action`), $o !== ($o = r(g).shiftDragAction) && (Rt.value = (Rt.__value = r(g).shiftDragAction) ?? "", Vr(Rt, r(g).shiftDragAction)), F(Eo, "for", `${n}-side-resize`), F(yr, "id", `${n}-side-resize`), Nr !== (Nr = r(g).sideResizeMode) && (yr.value = (yr.__value = r(g).sideResizeMode) ?? "", Vr(yr, r(g).sideResizeMode)), F(bn, "for", `${n}-border`), de(yn, `Border width (${r(g).borderWidth ?? ""}px)`), F(at, "id", `${n}-border`), Wa(at, r(g).borderWidth), F(Ft, "for", `${n}-radius`), de(dr, `Border radius (${r(g).borderRadius ?? ""}px)`), F(Zt, "id", `${n}-radius`), Wa(Zt, r(g).borderRadius), F(Ln, "for", `${n}-padding`), de(qt, `Chrome inset (${r(g).chromePadding ?? ""}px)`), F(Xt, "id", `${n}-padding`), Wa(Xt, r(g).chromePadding), Gc(Qr, r(g).snapRestoreOnRelease), F(en, "id", `${n}-profile-name`), Wa(en, r(W)), uo.disabled = _e;
        },
        [() => !r(W).trim()]
      ), he("change", te, (_e) => {
        const f = _e.currentTarget.value;
        f !== "__custom__" && G(f);
      }), he("change", He, (_e) => H({ fontPreset: _e.currentTarget.value })), he("change", tt, (_e) => H({ buttonLayout: _e.currentTarget.value })), he("change", bt, (_e) => H({ systemButtonPlacement: _e.currentTarget.value })), he("change", Nt, (_e) => H({ chromeStyle: _e.currentTarget.value })), he("change", Mr, (_e) => H({ alignment: _e.currentTarget.value })), he("change", Rt, (_e) => H({ shiftDragAction: _e.currentTarget.value })), he("change", yr, (_e) => H({ sideResizeMode: _e.currentTarget.value })), he("input", at, (_e) => H({ borderWidth: Number.parseInt(_e.currentTarget.value, 10) })), he("input", Zt, (_e) => H({ borderRadius: Number.parseInt(_e.currentTarget.value, 10) })), he("input", Xt, (_e) => H({
        chromePadding: Number.parseInt(_e.currentTarget.value, 10)
      })), he("change", Qr, (_e) => H({ snapRestoreOnRelease: _e.currentTarget.checked })), he("input", en, (_e) => {
        q(W, _e.currentTarget.value, !0);
      }), he("click", uo, we), B(le, ze);
    },
    $$slots: { footer: !0, default: !0 }
  }), Pt(ie);
}
Er(["click", "change", "input"]);
Wt(
  Ns,
  {
    mode: {},
    dataTestid: {},
    open: {},
    pinned: {},
    onOpen: {},
    onTogglePin: {}
  },
  [],
  [],
  { mode: "open" }
);
var Eg = /* @__PURE__ */ J('<button class="tool-dock-remove svelte-5ypgve" type="button">×</button>'), Lg = /* @__PURE__ */ J('<div class="tool-dock-item svelte-5ypgve"><button type="button"><span class="tool-dock-tooltip svelte-5ypgve"> </span> <span class="tool-dock-icon svelte-5ypgve"></span></button> <!></div>'), Dg = /* @__PURE__ */ J('<div role="toolbar" aria-label="Pinned actions"></div>');
const Ig = {
  hash: "svelte-5ypgve",
  code: `.tool-dock.svelte-5ypgve {position:fixed;z-index:520;display:inline-flex;gap:0.6rem;align-items:flex-end;pointer-events:none;}.tool-dock-item.svelte-5ypgve {position:relative;display:inline-flex;}.tool-dock[data-edge='left'].svelte-5ypgve,
  .tool-dock[data-edge='right'].svelte-5ypgve {flex-direction:column-reverse;}.tool-dock[data-edge='top'].svelte-5ypgve,
  .tool-dock[data-edge='bottom'].svelte-5ypgve {flex-direction:row;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve {align-items:flex-start;}.tool-dock.is-dragging.svelte-5ypgve {transition:none;}.tool-dock-button.svelte-5ypgve {position:relative;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:3.1rem;height:3.1rem;border:1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);border-radius:999px;background:radial-gradient(
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
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover {transform:translateY(0) translateX(1px) scale(1.02);}.tool-dock-button.is-active.svelte-5ypgve {border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 38%);background:radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.18), transparent 56%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);}.tool-dock-icon.svelte-5ypgve {display:inline-flex;align-items:center;justify-content:center;width:1.2rem;height:1.2rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}.tool-dock-remove.svelte-5ypgve {position:absolute;right:-0.1rem;bottom:-0.08rem;z-index:2;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border:1px solid rgba(255, 255, 255, 0.92);border-radius:999px;background:rgba(15, 23, 42, 0.96);color:white;font:700 0.72rem/1 var(--efs-font-sans, sans-serif);box-shadow:0 6px 14px rgba(0, 0, 0, 0.28);cursor:pointer;transition:transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;}.tool-dock-remove.svelte-5ypgve:hover {transform:scale(1.06);background:rgba(220, 38, 38, 0.96);box-shadow:0 8px 18px rgba(0, 0, 0, 0.34);}.tool-dock-tooltip.svelte-5ypgve {position:absolute;opacity:0;pointer-events:none;white-space:nowrap;padding:0.55rem 0.75rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 52%);border-radius:12px;background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%);color:var(--shell-text, #f8fafc);font:var(--efs-font-body-sm, 600 0.875rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.42),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 18%);transition:opacity 140ms ease,
      transform 140ms ease;}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {right:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(0.35rem);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {left:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(-0.35rem);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {top:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(-0.35rem);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {bottom:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(0.35rem);}.tool-dock-button.svelte-5ypgve:hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock-button.svelte-5ypgve:focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}

  @media (max-width: 47.99rem) {.tool-dock-button.svelte-5ypgve {width:2.8rem;height:2.8rem;}.tool-dock-remove.svelte-5ypgve {width:0.9rem;height:0.9rem;font-size:0.68rem;}.tool-dock-tooltip.svelte-5ypgve {display:none;}
  }`
};
function td(e, t) {
  St(t, !0), zt(e, Ig);
  const n = 6, o = 0.08, a = 0.92;
  let s = m(t, "items", 23, () => []), i = m(t, "position", 23, () => ({ edge: "right", ratio: 0.84 })), d = m(t, "onActivate", 7), c = m(t, "onRemove", 7), u = m(t, "onPositionChange", 7), y = /* @__PURE__ */ ne(null), P = /* @__PURE__ */ ne(null), b = /* @__PURE__ */ ne(null);
  function z(G) {
    return Math.max(o, Math.min(a, G));
  }
  function j(G, ee) {
    return { edge: G, ratio: z(ee) };
  }
  function R(G, ee) {
    var se;
    if (typeof window > "u")
      return r(y) ?? j(i().edge, i().ratio);
    const ge = Math.max(window.innerWidth, 1), me = Math.max(window.innerHeight, 1), we = {
      left: G,
      right: ge - G,
      top: ee,
      bottom: me - ee
    }, ie = ((se = Object.entries(we).sort((le, qe) => le[1] - qe[1])[0]) == null ? void 0 : se[0]) ?? (r(y) ?? j(i().edge, i().ratio)).edge;
    return ie === "left" || ie === "right" ? j(ie, ee / me) : j(ie, G / ge);
  }
  function x(G, ee) {
    ee.button === 0 && q(
      P,
      {
        itemId: G,
        pointerId: ee.pointerId,
        startX: ee.clientX,
        startY: ee.clientY,
        dragging: !1
      },
      !0
    );
  }
  function k(G) {
    var me;
    if (!r(P) || G.pointerId !== r(P).pointerId)
      return;
    const ee = Math.hypot(G.clientX - r(P).startX, G.clientY - r(P).startY) >= n;
    if (!r(P).dragging && !ee)
      return;
    r(P).dragging || (q(P, { ...r(P), dragging: !0 }, !0), q(b, r(P).itemId, !0));
    const ge = R(G.clientX, G.clientY);
    q(y, ge, !0), (me = u()) == null || me(ge);
  }
  function S(G) {
    var ge;
    if (!r(P) || G.pointerId !== r(P).pointerId)
      return;
    const ee = r(P).itemId;
    r(P).dragging ? ((ge = u()) == null || ge(r(W)), typeof window < "u" && window.requestAnimationFrame(() => {
      r(b) === ee && q(b, null), q(y, null);
    })) : q(y, null), q(P, null);
  }
  function g(G) {
    var ee;
    if (r(b) === G) {
      q(b, null);
      return;
    }
    (ee = d()) == null || ee(G);
  }
  let W = /* @__PURE__ */ M(() => r(y) ?? j(i().edge, i().ratio)), D = /* @__PURE__ */ M(() => r(W).edge === "left" || r(W).edge === "right" ? `${(r(W).ratio * 100).toFixed(3)}%` : void 0), I = /* @__PURE__ */ M(() => r(W).edge === "top" || r(W).edge === "bottom" ? `${(r(W).ratio * 100).toFixed(3)}%` : void 0), X = /* @__PURE__ */ M(() => r(W).edge === "top" ? "1rem" : void 0), A = /* @__PURE__ */ M(() => r(W).edge === "right" ? "1rem" : void 0), K = /* @__PURE__ */ M(() => r(W).edge === "bottom" ? "1rem" : void 0), ue = /* @__PURE__ */ M(() => r(W).edge === "left" ? "1rem" : void 0), H = /* @__PURE__ */ M(() => r(W).edge === "left" || r(W).edge === "right" ? "translateY(-100%)" : "translateX(-50%)");
  var oe = {
    get items() {
      return s();
    },
    set items(G = []) {
      s(G), h();
    },
    get position() {
      return i();
    },
    set position(G = { edge: "right", ratio: 0.84 }) {
      i(G), h();
    },
    get onActivate() {
      return d();
    },
    set onActivate(G) {
      d(G), h();
    },
    get onRemove() {
      return c();
    },
    set onRemove(G) {
      c(G), h();
    },
    get onPositionChange() {
      return u();
    },
    set onPositionChange(G) {
      u(G), h();
    }
  }, ae = Wn();
  qo("pointermove", ua, k), qo("pointerup", ua, S), qo("pointercancel", ua, S);
  var $ = Mt(ae);
  {
    var fe = (G) => {
      var ee = Dg();
      let ge, me;
      xt(ee, 21, s, (we) => we.id, (we, ie) => {
        var se = Lg(), le = p(se);
        let qe;
        var ze = p(le), Me = p(ze, !0);
        v(ze);
        var Ne = w(ze, 2);
        let Qe;
        v(le);
        var lt = w(le, 2);
        {
          var ce = (xe) => {
            var $e = Eg();
            ve(() => {
              F($e, "aria-label", `Remove ${r(ie).label}`), F($e, "title", `Remove ${r(ie).label}`);
            }), he("click", $e, (nt) => {
              nt.stopPropagation(), c()(r(ie).id);
            }), B(xe, $e);
          };
          ye(lt, (xe) => {
            c() && xe(ce);
          });
        }
        v(se), ve(() => {
          qe = Ie(le, 1, "tool-dock-button svelte-5ypgve", null, qe, { "is-active": r(ie).active }), F(le, "aria-label", r(ie).label), F(le, "title", r(ie).label), de(Me, r(ie).label), Qe = fr(Ne, "", Qe, { "--icon-mask": r(ie).iconMask });
        }), he("pointerdown", le, (xe) => x(r(ie).id, xe)), he("click", le, () => g(r(ie).id)), B(we, se);
      }), v(ee), ve(
        (we) => {
          ge = Ie(ee, 1, "tool-dock svelte-5ypgve", null, ge, we), F(ee, "data-edge", r(W).edge), me = fr(ee, "", me, {
            top: r(D) ?? r(X),
            left: r(I) ?? r(ue),
            right: r(A),
            bottom: r(K),
            transform: r(H)
          });
        },
        [
          () => {
            var we;
            return { "is-dragging": !!((we = r(P)) != null && we.dragging) };
          }
        ]
      ), B(G, ee);
    };
    ye($, (G) => {
      s().length > 0 && G(fe);
    });
  }
  return B(e, ae), Pt(oe);
}
Er(["pointerdown", "click"]);
Wt(
  td,
  {
    items: {},
    position: {},
    onActivate: {},
    onRemove: {},
    onPositionChange: {}
  },
  [],
  [],
  { mode: "open" }
);
var Ng = /* @__PURE__ */ J("<!> <div><!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>", 1), Fg = /* @__PURE__ */ J("<!> <!>", 1);
const Bg = {
  hash: "svelte-vg7d0z",
  code: `:host {display:block;padding:clamp(1rem, 1rem + 0.8vw, 1.75rem);font-family:var(--efs-font-sans);color-scheme:dark;color:var(--efs-text-primary, #e6eefb);background:radial-gradient(
        circle at top,
        color-mix(in srgb, var(--efs-accent-primary, #8bc6ff), transparent 90%),
        transparent 28%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #c4b5fd), transparent 92%),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 36%);--shell-panel-base: color-mix(
      in srgb,
      var(--efs-bg-surface-1, rgba(7, 15, 32, 0.88)),
      transparent 6%
    );--shell-surface-base: color-mix(
      in srgb,
      var(--efs-bg-surface-0, rgba(5, 11, 25, 0.94)),
      transparent 2%
    );--shell-border-base: color-mix(
      in srgb,
      var(--efs-border-default, rgba(132, 146, 166, 0.18)),
      transparent 4%
    );--shell-text: var(--efs-text-primary, #e6eefb);--shell-muted: var(--efs-text-secondary, #94a8c7);--shell-primary: var(--efs-accent-primary, #8bc6ff);--shell-primary-text: var(--efs-text-inverse, #07101f);--shell-card-shadow-base: var(--efs-shadow-shell, 0 28px 60px rgba(0, 0, 0, 0.34));--shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #8bc6ff)),
        transparent 76%
      );--shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #8bc6ff),
      transparent 92%
    );--shell-panel: var(--shell-panel-base);--shell-surface: var(--shell-surface-base);--shell-border: var(--shell-border-base);--shell-card-shadow: var(--shell-card-shadow-base);--shell-row-hover: var(--shell-row-hover-base);}:host([theme='light']) {color-scheme:light;color:var(--efs-text-primary, #0f172a);background:radial-gradient(
        circle at top,
        color-mix(in srgb, var(--efs-accent-primary, #0f172a), transparent 92%),
        transparent 24%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #2563eb), transparent 92%),
        transparent 26%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), white 4%),
        color-mix(in srgb, var(--efs-bg-app, #f8fafc), transparent 8%)
      );--shell-panel-base: color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), transparent 2%);--shell-surface-base: color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), white 2%);--shell-border-base: var(--efs-border-default, #e2e8f0);--shell-text: var(--efs-text-primary, #0f172a);--shell-muted: var(--efs-text-muted, #64748b);--shell-primary: var(--efs-accent-primary, #0f172a);--shell-primary-text: #ffffff;--shell-card-shadow-base: 0 18px 40px rgba(15, 23, 42, 0.08);--shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #0f172a)),
        transparent 84%
      );--shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #0f172a),
      transparent 94%
    );}:host([theme='dark']) {color-scheme:dark;color:var(--efs-text-primary, #e6eefb);background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--efs-accent-primary, #7dd3fc), transparent 88%),
        transparent 26%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #34d399), transparent 94%),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 34%);--shell-panel-base: color-mix(
      in srgb,
      var(--efs-bg-surface-1, rgba(9, 18, 38, 0.9)),
      transparent 4%
    );--shell-surface-base: color-mix(
      in srgb,
      var(--efs-bg-surface-0, rgba(4, 11, 24, 0.96)),
      transparent 2%
    );--shell-border-base: color-mix(
      in srgb,
      var(--efs-border-default, rgba(122, 143, 171, 0.2)),
      transparent 6%
    );--shell-text: var(--efs-text-primary, #e6eefb);--shell-muted: var(--efs-text-secondary, #96a9c6);--shell-primary: var(--efs-accent-primary, #7dd3fc);--shell-primary-text: #04111f;--shell-card-shadow-base: 0 32px 68px rgba(0, 0, 0, 0.42);--shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #7dd3fc)),
        transparent 78%
      );--shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #7dd3fc),
      transparent 92%
    );}:host([theme='green']) {color-scheme:dark;--shell-primary: var(--efs-accent-primary, #c6ff00);--shell-primary-text: #050804;--shell-panel-base: rgba(12, 20, 10, 0.8);--shell-surface-base: rgba(28, 39, 26, 0.62);--shell-border-base: rgba(198, 255, 0, 0.12);--shell-text: #e7eddc;--shell-muted: #a2b392;--shell-card-shadow-base: 0 20px 44px rgba(0, 0, 0, 0.32);--shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #c6ff00)),
        transparent 80%
      );--shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #c6ff00),
      transparent 94%
    );}.workspace-canvas.svelte-vg7d0z {position:relative;isolation:isolate;display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));grid-auto-rows:24px;grid-auto-flow:dense;gap:1rem;min-height:90rem;padding:0.35rem;align-items:stretch;}.workspace-canvas.svelte-vg7d0z::before {content:'';position:absolute;inset:0.35rem;z-index:0;border-radius:32px;background:linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 12 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 82%) calc(100% / 12 - 1px),
        transparent calc(100% / 12)
      ),
      linear-gradient(
        180deg,
        transparent 0,
        transparent 23px,
        color-mix(in srgb, var(--shell-border), transparent 88%) 23px,
        transparent 24px
      );opacity:0.5;pointer-events:none;}.compact-workspace.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.compact-workspace.svelte-vg7d0z::before {display:none;}

  @media (max-width: 63.99rem) {:host {padding:1rem;}.workspace-canvas.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.workspace-canvas.svelte-vg7d0z::before {display:none;}
  }`
};
function Hg(e, t) {
  St(t, !0), zt(e, Bg);
  const n = [
    "create-user",
    "user-directory",
    "create-role",
    "role-directory",
    "display-mode",
    "window-preferences",
    "settings-payload",
    "catalog-search",
    "catalog-results",
    "catalog-facets"
  ], o = "widget-windows", a = "workspace-layouts", s = "workspace-ui", i = "workspace-profile-meta", d = "workspace-profile-snapshot", c = "edge-dock-widgets", u = "edge-dock-state", y = 12, P = 3, b = 8, z = [
    "create-user",
    "user-directory",
    "create-role",
    "role-directory",
    "catalog-search",
    "window-preferences"
  ], j = ["workspace-discovery"], R = {
    "create-user": "create-user",
    "user-directory": "user-directory",
    "create-role": "create-role",
    "role-directory": "role-directory",
    "display-mode": "display-mode",
    "window-preferences": "window-preferences",
    "settings-payload": "settings-payload",
    "catalog-search": "catalog-search",
    "catalog-results": "catalog-results",
    "catalog-facets": "catalog-facets"
  }, x = n.reduce(
    (l, _) => (l[_] = js(R[_]), l),
    {}
  ), k = {
    "create-user": { title: "Create user", width: 620, height: 540, x: 96, y: 76 },
    "user-directory": {
      title: "User directory",
      width: 660,
      height: 620,
      x: 152,
      y: 104
    },
    "create-role": { title: "Create role", width: 640, height: 560, x: 208, y: 92 },
    "role-directory": {
      title: "Role catalog",
      width: 720,
      height: 620,
      x: 264,
      y: 118
    },
    "display-mode": {
      title: "Display mode",
      width: 640,
      height: 560,
      x: 320,
      y: 86
    },
    "window-preferences": {
      title: "Window preferences",
      width: 720,
      height: 680,
      x: 148,
      y: 188
    },
    "settings-payload": {
      title: "Settings payload",
      width: 840,
      height: 640,
      x: 218,
      y: 142
    },
    "catalog-search": {
      title: "Search control",
      width: 700,
      height: 420,
      x: 252,
      y: 72
    },
    "catalog-results": {
      title: "Search results",
      width: 760,
      height: 620,
      x: 286,
      y: 136
    },
    "catalog-facets": {
      title: "Facet distribution",
      width: 620,
      height: 560,
      x: 342,
      y: 174
    }
  }, S = {
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
  }, g = [
    { value: "buttons-manager", label: "Workspace tools" },
    { value: "catalog-search", label: "Discovery" },
    { value: "window-preferences", label: "Window manager" },
    { value: "display-mode", label: "Display mode" },
    { value: "create-user", label: "Create user" },
    { value: "create-role", label: "Create role" },
    { value: "edge", label: "Edge shortcut" },
    { value: "restore", label: "Restore" }
  ], W = ["workspace-primary", "workspace-pro-2", "workspace-pro-3"];
  function D() {
    return [
      {
        id: "workspace-discovery",
        label: "Discovery stack",
        barLabel: "Discover",
        iconName: "catalog-search",
        summary: "Open search, results, and facets together for one-pass workspace discovery.",
        steps: [
          { type: "open-widget", widgetId: "catalog-search" },
          { type: "open-widget", widgetId: "catalog-results" },
          { type: "open-widget", widgetId: "catalog-facets" }
        ]
      },
      {
        id: "workspace-roles",
        label: "Role toolkit",
        barLabel: "Roles+",
        iconName: "create-role",
        summary: "Open role creation and the role catalog together for faster policy work.",
        steps: [
          { type: "open-widget", widgetId: "create-role" },
          { type: "open-widget", widgetId: "role-directory" }
        ]
      }
    ];
  }
  function I() {
    return [
      {
        id: W[0],
        label: "Workspace 1",
        savedAt: null
      },
      {
        id: W[1],
        label: "Workspace 2",
        locked: !0,
        savedAt: null
      },
      {
        id: W[2],
        label: "Workspace 3",
        locked: !0,
        savedAt: null
      }
    ];
  }
  const X = ru("admin"), A = X.apiBase ?? "/_efsdb/api/admin", K = X.authBase ?? "/_efsdb/api/auth", ue = t.$$host;
  function H(l) {
    return typeof window > "u" ? `efsdb:admin:${l}` : `efsdb:admin:${window.location.pathname}:${l}`;
  }
  function oe(l) {
    return `efsdb:admin:global:${l}`;
  }
  function ae() {
    return {
      "create-user": { open: !1, pinned: !1, windowState: "normal" },
      "user-directory": { open: !1, pinned: !1, windowState: "normal" },
      "create-role": { open: !1, pinned: !1, windowState: "normal" },
      "role-directory": { open: !1, pinned: !1, windowState: "normal" },
      "display-mode": { open: !1, pinned: !1, windowState: "normal" },
      "window-preferences": { open: !1, pinned: !1, windowState: "normal" },
      "settings-payload": { open: !1, pinned: !1, windowState: "normal" },
      "catalog-search": { open: !1, pinned: !1, windowState: "normal" },
      "catalog-results": { open: !1, pinned: !1, windowState: "normal" },
      "catalog-facets": { open: !1, pinned: !1, windowState: "normal" }
    };
  }
  function $() {
    return {
      "create-user": { col: 1, row: 1, width: 4, height: 18 },
      "create-role": { col: 5, row: 1, width: 4, height: 18 },
      "display-mode": { col: 9, row: 1, width: 4, height: 16 },
      "user-directory": { col: 1, row: 19, width: 6, height: 18 },
      "role-directory": { col: 7, row: 19, width: 6, height: 18 },
      "catalog-search": { col: 1, row: 37, width: 4, height: 14 },
      "catalog-results": { col: 5, row: 37, width: 5, height: 18 },
      "catalog-facets": { col: 10, row: 37, width: 3, height: 18 },
      "window-preferences": { col: 1, row: 51, width: 4, height: 22 },
      "settings-payload": { col: 5, row: 73, width: 8, height: 14 }
    };
  }
  function fe() {
    return {
      editing: !1,
      toolbarWidgets: [...z],
      edgePinnedWidgets: [],
      hiddenWidgets: [],
      customActions: D(),
      toolbarCustomActions: [...j]
    };
  }
  function G() {
    return { edge: "right", ratio: 0.84 };
  }
  function ee(l) {
    return typeof l == "string" && n.includes(l);
  }
  function ge(l, _) {
    if (!Array.isArray(l))
      return [..._];
    const Y = [], Q = /* @__PURE__ */ new Set();
    for (const Z of l)
      !ee(Z) || Q.has(Z) || (Q.add(Z), Y.push(Z));
    return Y;
  }
  function me(l, _, Y) {
    if (!Array.isArray(l))
      return [...Y];
    const Q = new Set(_), Z = [], We = /* @__PURE__ */ new Set();
    for (const Ve of l)
      typeof Ve != "string" || We.has(Ve) || !Q.has(Ve) || (We.add(Ve), Z.push(Ve));
    return Z;
  }
  function we(l) {
    return typeof l == "string" && g.some((_) => _.value === l);
  }
  function ie(l) {
    const _ = D();
    if (!Array.isArray(l))
      return _;
    const Y = [], Q = /* @__PURE__ */ new Set();
    for (const Z of l) {
      if (!Z || typeof Z != "object")
        continue;
      const We = Z, Ve = typeof We.id == "string" ? We.id.trim() : "";
      if (!Ve || Q.has(Ve))
        continue;
      const Ee = Array.isArray(We.steps) ? We.steps.flatMap((Ke) => !Ke || typeof Ke != "object" || Ke.type !== "open-widget" || !ee(Ke.widgetId) ? [] : [
        {
          type: "open-widget",
          widgetId: Ke.widgetId,
          pinned: !!Ke.pinned
        }
      ]) : [];
      Ee.length !== 0 && (Q.add(Ve), Y.push({
        id: Ve,
        label: typeof We.label == "string" && We.label.trim() ? We.label.trim() : Ve,
        barLabel: typeof We.barLabel == "string" && We.barLabel.trim() ? We.barLabel.trim() : typeof We.label == "string" && We.label.trim() ? We.label.trim() : Ve,
        iconName: we(We.iconName) ? We.iconName : "buttons-manager",
        summary: typeof We.summary == "string" && We.summary.trim() ? We.summary.trim() : `Open ${Ee.length} workspace widget${Ee.length === 1 ? "" : "s"}.`,
        steps: Ee
      }));
    }
    return Y.length > 0 ? Y : _;
  }
  function se(l) {
    const _ = I();
    if (!Array.isArray(l))
      return _;
    const Y = /* @__PURE__ */ new Map();
    for (const Q of l) {
      if (!Q || typeof Q != "object")
        continue;
      const Z = Q;
      typeof Z.id == "string" && Y.set(Z.id, {
        id: Z.id,
        label: typeof Z.label == "string" && Z.label.trim() ? Z.label.trim() : Z.id,
        locked: !!Z.locked,
        savedAt: typeof Z.savedAt == "string" && Z.savedAt.trim() ? Z.savedAt : null
      });
    }
    return _.map((Q) => {
      const Z = Y.get(Q.id);
      return Z ? {
        ...Q,
        savedAt: Z.savedAt ?? Q.savedAt ?? null
      } : Q;
    });
  }
  function le(l) {
    const _ = Math.max(P, Math.min(y, Math.round(l.width)));
    return {
      col: Math.max(1, Math.min(y - _ + 1, Math.round(l.col))),
      row: Math.max(1, Math.round(l.row)),
      width: _,
      height: Math.max(b, Math.round(l.height))
    };
  }
  function qe(l, _) {
    return l.col < _.col + _.width && l.col + l.width > _.col && l.row < _.row + _.height && l.row + l.height > _.row;
  }
  function ze(l, _) {
    const Y = le(l), Q = Math.max(1, Y.row + Y.height + 96, ...Object.values(_).map((Z) => Z ? Z.row + Z.height + 4 : 1));
    for (let Z = 1; Z <= Q; Z += 1)
      for (let We = 1; We <= y - Y.width + 1; We += 1) {
        const Ve = { ...Y, col: We, row: Z };
        if (!Object.values(_).some((Ke) => Ke && qe(Ve, Ke)))
          return Ve;
      }
    return Y;
  }
  function Me(l) {
    return [...n].sort((_, Y) => {
      const Q = l[_], Z = l[Y];
      return Q.row - Z.row || Q.col - Z.col;
    });
  }
  function Ne(l, _, Y) {
    const Q = n.reduce(
      (Ee, Ke) => (Ee[Ke] = { ...l[Ke] }, Ee),
      {}
    );
    Q[_] = le(Y);
    const Z = { [_]: Q[_] }, We = Me(Q).filter((Ee) => Ee !== _);
    for (const Ee of We)
      Z[Ee] = ze(Q[Ee], Z);
    const Ve = Z;
    for (const Ee of We) {
      let Ke = Ve[Ee];
      for (; Ke.row > 1; ) {
        const Gt = { ...Ke, row: Ke.row - 1 };
        if (Object.entries(Ve).some(([vo, Dn]) => vo !== Ee && qe(Gt, Dn)))
          break;
        Ke = Gt;
      }
      Ve[Ee] = Ke;
    }
    return Ve;
  }
  function Qe(l) {
    return l === "normal" || l === "maximized" || l === "minimized" || l === "rolled-up";
  }
  function lt(l) {
    const _ = ae();
    if (!l || typeof l != "object")
      return _;
    const Y = l;
    for (const Q of n) {
      const Z = Y[Q];
      Z && (_[Q] = {
        open: !!Z.open,
        pinned: !!Z.pinned,
        windowState: Qe(Z.windowState) ? Z.windowState : "normal"
      });
    }
    return _;
  }
  function ce(l) {
    const _ = $();
    if (!l || typeof l != "object")
      return _;
    const Y = l;
    for (const Q of n) {
      const Z = Y[Q];
      Z && (_[Q] = le({
        col: Z.col ?? _[Q].col,
        row: Z.row ?? _[Q].row,
        width: Z.width ?? _[Q].width,
        height: Z.height ?? _[Q].height
      }));
    }
    return _;
  }
  function xe(l) {
    const _ = fe();
    if (!l || typeof l != "object")
      return _;
    const Y = l, Q = ie(Y.customActions);
    return {
      editing: !!Y.editing,
      toolbarWidgets: ge(Y.toolbarWidgets ?? Y.favoriteWidgets, _.toolbarWidgets),
      edgePinnedWidgets: ge(Y.edgePinnedWidgets, _.edgePinnedWidgets),
      hiddenWidgets: ge(Y.hiddenWidgets, _.hiddenWidgets),
      customActions: Q,
      toolbarCustomActions: me(Y.toolbarCustomActions, Q.map((Z) => Z.id), _.toolbarCustomActions)
    };
  }
  function $e(l) {
    const _ = G();
    if (!l || typeof l != "object")
      return _;
    const Y = l, Q = Y.edge === "left" || Y.edge === "right" || Y.edge === "top" || Y.edge === "bottom" ? Y.edge : _.edge, Z = Number.isFinite(Y.ratio) ? Math.max(0.08, Math.min(0.92, Number(Y.ratio))) : _.ratio;
    return { edge: Q, ratio: Z };
  }
  function nt(l, _) {
    return n.every((Y) => {
      const Q = l[Y], Z = _[Y];
      return Q.col === Z.col && Q.row === Z.row && Q.width === Z.width && Q.height === Z.height;
    });
  }
  function pt(l, _) {
    const Y = new Set(_), Q = n.reduce(
      (Ee, Ke) => (Ee[Ke] = { ...l[Ke] }, Ee),
      {}
    ), Z = Me(l).filter((Ee) => !Y.has(Ee)), We = {};
    for (const Ee of Z)
      We[Ee] = ze(Q[Ee], We);
    const Ve = We;
    for (const Ee of Z) {
      let Ke = Ve[Ee];
      for (; Ke.row > 1; ) {
        const Gt = { ...Ke, row: Ke.row - 1 };
        if (Object.entries(Ve).some(([vo, Dn]) => vo !== Ee && qe(Gt, Dn)))
          break;
        Ke = Gt;
      }
      Ve[Ee] = Ke, Q[Ee] = Ke;
    }
    return Q;
  }
  function Ge(l, _) {
    return l.length === _.length && l.every((Y, Q) => Y === _[Q]);
  }
  function mt(l) {
    switch (l) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  let et = /* @__PURE__ */ ne(dt(X.user ?? null)), kt = /* @__PURE__ */ ne(dt([])), ct = /* @__PURE__ */ ne(dt([])), ft = /* @__PURE__ */ ne(null), N = /* @__PURE__ */ ne(dt([])), L = /* @__PURE__ */ ne(dt({})), ke = /* @__PURE__ */ ne(null), C = /* @__PURE__ */ ne(!0), te = /* @__PURE__ */ ne(!1), Ae = /* @__PURE__ */ ne(!1), Fe = /* @__PURE__ */ ne(!1), Be = /* @__PURE__ */ ne(!1), Te = /* @__PURE__ */ ne(!1), E = /* @__PURE__ */ ne(dt(ae())), Je = /* @__PURE__ */ ne(dt([])), He = /* @__PURE__ */ ne(dt($())), V = /* @__PURE__ */ ne(dt(fe())), ut = /* @__PURE__ */ ne(dt(I())), gt = /* @__PURE__ */ ne(null), ot = /* @__PURE__ */ ne(dt([...n])), tt = /* @__PURE__ */ ne(!1), ht = /* @__PURE__ */ ne(0), Ct = /* @__PURE__ */ ne(!1), Yt = /* @__PURE__ */ ne(!1), wt = /* @__PURE__ */ ne(dt(G())), vt = /* @__PURE__ */ ne(dt({})), gr = /* @__PURE__ */ ne(dt({})), st = /* @__PURE__ */ ne(dt({ username: "", name: "", roleId: "", loginKey: "" })), Dt = /* @__PURE__ */ ne(dt({
    id: "",
    name: "",
    description: "",
    entitlements: "NATURAL_VIEW"
  })), wr = /* @__PURE__ */ ne(null), Vt = /* @__PURE__ */ ne(null), Ot = /* @__PURE__ */ ne(""), bt = /* @__PURE__ */ ne("public_workspace_files"), Dr = /* @__PURE__ */ M(() => r(kt).filter((l) => l.status.toLowerCase() === "active").length), vn = /* @__PURE__ */ M(() => r(ct).filter((l) => !l.operatorOnly).length), gn = /* @__PURE__ */ M(() => {
    var l, _;
    return ((_ = (l = r(et)) == null ? void 0 : l.availableDisplayModes) == null ? void 0 : _.length) ?? 0;
  }), Kt = /* @__PURE__ */ M(() => r(V).editing && !r(tt)), It = /* @__PURE__ */ M(() => r(gt) ? Ne(r(He), r(gt).widgetId, r(gt).layout) : r(He)), Nt = /* @__PURE__ */ M(() => !nt(r(He), $()) || !Ge(r(V).hiddenWidgets, fe().hiddenWidgets) || !Ge(r(V).toolbarWidgets, fe().toolbarWidgets) || !Ge(r(V).toolbarCustomActions, fe().toolbarCustomActions)), Ir = /* @__PURE__ */ M(() => [
    ...r(V).toolbarWidgets,
    ...n.filter((l) => !r(V).toolbarWidgets.includes(l))
  ]), pn = /* @__PURE__ */ M(() => [
    ...r(V).toolbarCustomActions,
    ...r(V).customActions.map((l) => l.id).filter((l) => !r(V).toolbarCustomActions.includes(l))
  ]), hn = /* @__PURE__ */ M(() => r(V).edgePinnedWidgets), br = /* @__PURE__ */ M(() => r(Ir).map((l) => ({
    kind: "widget",
    id: l,
    label: S[l].label,
    barLabel: S[l].barLabel,
    iconMask: x[l],
    open: r(E)[l].open && r(E)[l].windowState !== "minimized",
    inToolbar: r(V).toolbarWidgets.includes(l),
    edgePinned: r(V).edgePinnedWidgets.includes(l),
    inWorkspace: !r(V).hiddenWidgets.includes(l),
    presentation: S[l].presentation,
    group: S[l].group,
    summary: S[l].summary
  }))), mn = /* @__PURE__ */ M(() => r(pn).map((l) => r(V).customActions.find((_) => _.id === l)).filter((l) => !!l).map((l) => ({
    kind: "action",
    id: l.id,
    label: l.label,
    barLabel: l.barLabel,
    iconMask: js(l.iconName),
    iconName: l.iconName,
    inToolbar: r(V).toolbarCustomActions.includes(l.id),
    group: "Macros",
    summary: l.summary,
    stepCount: l.steps.length
  }))), oo = /* @__PURE__ */ M(() => [
    ...r(br),
    ...r(mn)
  ]), ao = /* @__PURE__ */ M(() => r(hn).map((l) => ({
    id: l,
    label: S[l].label,
    iconMask: x[l],
    active: r(E)[l].open && r(E)[l].windowState !== "minimized"
  }))), Cn = /* @__PURE__ */ M(() => [
    {
      label: "Users",
      value: String(r(kt).length),
      detail: `${r(Dr)} active provisioned accounts`
    },
    {
      label: "Roles",
      value: String(r(ct).length),
      detail: `${r(vn)} assignable presets`
    },
    {
      label: "Modes",
      value: String(r(gn)),
      detail: r(et) ? `actual ${r(et).actualRole}` : "awaiting session"
    },
    {
      label: "Search",
      value: r(Be) ? String(r(N).length) : "0",
      detail: r(Be) ? mt(r(bt)) : "run a search to inspect"
    }
  ]);
  function fn(l) {
    ue.setAttribute("theme", l);
  }
  function Mr() {
    q(Je, n.filter((l) => r(E)[l].open), !0);
  }
  function Tt(l) {
    q(
      Je,
      [
        ...r(Je).filter((_) => _ !== l),
        l
      ],
      !0
    );
  }
  function Ut(l) {
    q(
      ot,
      [
        ...r(ot).filter((_) => _ !== l),
        l
      ],
      !0
    );
  }
  function so(l, _) {
    q(vt, { ...r(vt), [l]: _ }, !0);
  }
  function wn(l) {
    if (!(l in r(vt)))
      return;
    const _ = { ...r(vt) };
    delete _[l], q(vt, _, !0);
  }
  function On(l, _) {
    q(gr, { ...r(gr), [l]: _ }, !0);
  }
  function Zr(l) {
    if (!(l in r(gr)))
      return;
    const _ = { ...r(gr) };
    delete _[l], q(gr, _, !0);
  }
  function Rt(l) {
    wn(l);
  }
  function $n() {
    r(tt) || (r(V).editing = !r(V).editing);
  }
  function Oo() {
    q(Ct, !r(Ct));
  }
  function $o() {
    const l = (/* @__PURE__ */ new Date()).toISOString();
    q(ut, r(ut).map((_, Y) => Y === 0 ? { ..._, savedAt: l } : _), !0), !(typeof localStorage > "u") && localStorage.setItem(H(d), JSON.stringify({
      layouts: n.reduce(
        (_, Y) => (_[Y] = r(He)[Y], _),
        {}
      ),
      ui: {
        hiddenWidgets: r(V).hiddenWidgets,
        toolbarWidgets: r(V).toolbarWidgets,
        toolbarCustomActions: r(V).toolbarCustomActions,
        customActions: r(V).customActions
      }
    }));
  }
  function io(l) {
    if (r(V).toolbarWidgets.includes(l)) {
      r(V).toolbarWidgets = r(V).toolbarWidgets.filter((_) => _ !== l);
      return;
    }
    r(V).toolbarWidgets = [...r(V).toolbarWidgets, l];
  }
  function Eo(l) {
    const _ = r(V).hiddenWidgets.includes(l) ? r(V).hiddenWidgets.filter((Y) => Y !== l) : [...r(V).hiddenWidgets, l];
    r(V).hiddenWidgets = _, q(He, pt(r(He), _), !0), q(ot, n.filter((Y) => !_.includes(Y)), !0);
  }
  function yr(l) {
    if (r(V).toolbarCustomActions.includes(l)) {
      r(V).toolbarCustomActions = r(V).toolbarCustomActions.filter((_) => _ !== l);
      return;
    }
    r(V).toolbarCustomActions = [...r(V).toolbarCustomActions, l];
  }
  function lo(l) {
    const _ = r(V).customActions.find((Y) => Y.id === l);
    if (_) {
      q(Ct, !1);
      for (const Y of _.steps)
        at(Y.widgetId, { pinned: !!Y.pinned });
    }
  }
  function En(l) {
    r(V).customActions = r(V).customActions.filter((_) => _.id !== l), r(V).toolbarCustomActions = r(V).toolbarCustomActions.filter((_) => _ !== l);
  }
  function Nr(l) {
    const _ = l.label.trim();
    if (!_)
      return;
    const Y = l.steps.filter((Ve) => ee(Ve.widgetId)).map((Ve) => ({
      type: "open-widget",
      widgetId: Ve.widgetId,
      pinned: !!Ve.pinned
    }));
    if (Y.length === 0)
      return;
    const Q = `workspace-action-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, Z = l.barLabel.trim() || _, We = l.summary.trim() || `Open ${Y.length} workspace widget${Y.length === 1 ? "" : "s"}.`;
    r(V).customActions = [
      ...r(V).customActions,
      {
        id: Q,
        label: _,
        barLabel: Z,
        iconName: l.iconName,
        summary: We,
        steps: Y
      }
    ], r(V).toolbarCustomActions = [...r(V).toolbarCustomActions, Q];
  }
  function co(l) {
    if (r(V).edgePinnedWidgets.includes(l)) {
      r(V).edgePinnedWidgets = r(V).edgePinnedWidgets.filter((_) => _ !== l), r(E)[l].pinned = !1, Zr(l);
      return;
    }
    r(V).edgePinnedWidgets = [...r(V).edgePinnedWidgets, l], r(E)[l].open && (r(E)[l].pinned = !0);
  }
  function bn(l) {
    if (ee(l)) {
      if (r(E)[l].open && r(E)[l].windowState !== "minimized") {
        On(l, r(E)[l].windowState), r(E)[l].windowState = "minimized";
        return;
      }
      if (r(E)[l].open && r(E)[l].windowState === "minimized") {
        r(E)[l].windowState = r(gr)[l] ?? "normal", Tt(l);
        return;
      }
      at(l, { pinned: !0 });
    }
  }
  function yn(l) {
    ee(l) && (r(E)[l].pinned = !1, r(E)[l].open = !1, r(E)[l].windowState = "normal", r(V).edgePinnedWidgets = r(V).edgePinnedWidgets.filter((_) => _ !== l), Zr(l), wn(l), q(Je, r(Je).filter((_) => _ !== l), !0));
  }
  function at(l, _ = {}) {
    r(E)[l].open = !0, r(E)[l].windowState = "normal", _.pinned && (r(E)[l].pinned = !0, r(V).edgePinnedWidgets.includes(l) || (r(V).edgePinnedWidgets = [...r(V).edgePinnedWidgets, l])), _.dragSeed ? so(l, _.dragSeed) : wn(l), Zr(l), q(Ct, !1), Tt(l);
  }
  function Ue(l) {
    r(E)[l].open = !0, r(E)[l].windowState = "normal", r(E)[l].pinned = !r(E)[l].pinned, r(E)[l].pinned && !r(V).edgePinnedWidgets.includes(l) ? r(V).edgePinnedWidgets = [...r(V).edgePinnedWidgets, l] : r(E)[l].pinned || (r(V).edgePinnedWidgets = r(V).edgePinnedWidgets.filter((_) => _ !== l), Zr(l)), Tt(l);
  }
  function Ft(l) {
    return r(E)[l].open && r(E)[l].windowState !== "minimized";
  }
  function dr(l) {
    return !r(V).hiddenWidgets.includes(l) && !Ft(l);
  }
  function Zt(l, _) {
    q(gt, null), q(He, Ne(r(He), l, _), !0), Ut(l);
  }
  function Qt(l, _) {
    var Y;
    if (!_) {
      ((Y = r(gt)) == null ? void 0 : Y.widgetId) === l && q(gt, null);
      return;
    }
    q(gt, { widgetId: l, layout: le(_) }, !0), Ut(l);
  }
  function Ln() {
    const l = fe();
    q(gt, null), q(He, $(), !0), q(ot, [...n], !0), r(V).editing = !1, r(V).hiddenWidgets = [...l.hiddenWidgets], r(V).toolbarWidgets = [...l.toolbarWidgets], r(V).toolbarCustomActions = me(l.toolbarCustomActions, r(V).customActions.map((_) => _.id), []), q(Ct, !1);
  }
  function qt(l) {
    r(E)[l].open = !1, r(E)[l].pinned = !1, r(E)[l].windowState = "normal", r(V).edgePinnedWidgets = r(V).edgePinnedWidgets.filter((_) => _ !== l), Zr(l), wn(l), q(Je, r(Je).filter((_) => _ !== l), !0);
  }
  function Xt(l) {
    const _ = r(Je).indexOf(l);
    return 240 + (_ === -1 ? 0 : _ * 4);
  }
  function nr(l) {
    const _ = r(ot).indexOf(l);
    return 10 + (_ === -1 ? 0 : _);
  }
  function Qr(l) {
    const _ = () => {
      q(ht, l.clientWidth, !0);
    };
    _();
    const Y = new ResizeObserver(() => {
      _();
    });
    return Y.observe(l), {
      destroy() {
        Y.disconnect();
      }
    };
  }
  async function Lo() {
    const [l, _, Y, Q] = await Promise.all([
      fu(K),
      uu(A),
      gu(A),
      hu(A)
    ]);
    if (q(et, l, !0), q(kt, _.results, !0), q(ct, Y.results, !0), q(ft, Q.result, !0), !r(st).roleId) {
      const Z = r(ct).find((We) => !We.operatorOnly);
      r(st).roleId = (Z == null ? void 0 : Z.id) ?? "";
    }
    await f();
  }
  async function xn() {
    q(C, !0), q(ke, null);
    try {
      if (!await mu()) {
        q(
          ke,
          {
            message: "Sign in is required before the admin control plane can load.",
            error: !0
          },
          !0
        );
        return;
      }
      await Lo();
    } catch (l) {
      q(
        ke,
        {
          message: l instanceof Error ? l.message : "Failed to load admin control-plane data.",
          error: !0
        },
        !0
      );
    } finally {
      q(C, !1);
    }
  }
  async function en() {
    q(te, !0), q(wr, null);
    try {
      const l = await vu(A, {
        username: r(st).username,
        name: r(st).name,
        roleId: r(st).roleId,
        ...r(st).loginKey.trim() !== "" ? { loginKey: r(st).loginKey.trim() } : {}
      });
      q(
        wr,
        {
          message: `Created ${l.user.username}. Login key: ${l.loginKey}`,
          error: !1
        },
        !0
      ), r(st).username = "", r(st).name = "", r(st).loginKey = "", await xn();
    } catch (l) {
      q(
        wr,
        {
          message: l instanceof Error ? l.message : "Unable to create user",
          error: !0
        },
        !0
      );
    } finally {
      q(te, !1);
    }
  }
  async function uo() {
    q(Ae, !0), q(Vt, null);
    try {
      const l = await pu(A, {
        id: r(Dt).id,
        name: r(Dt).name,
        description: r(Dt).description,
        entitlements: r(Dt).entitlements.split(",").map((_) => _.trim()).filter(Boolean)
      });
      q(Vt, { message: `Created role ${l.result.id}`, error: !1 }, !0), r(Dt).id = "", r(Dt).name = "", r(Dt).description = "", r(Dt).entitlements = "NATURAL_VIEW", await xn();
    } catch (l) {
      q(
        Vt,
        {
          message: l instanceof Error ? l.message : "Unable to create role",
          error: !0
        },
        !0
      );
    } finally {
      q(Ae, !1);
    }
  }
  async function _e(l) {
    q(Fe, !0), q(ke, null);
    try {
      await wu(K, l), window.location.reload();
    } catch (_) {
      q(
        ke,
        {
          message: _ instanceof Error ? _.message : "Unable to switch display mode",
          error: !0
        },
        !0
      );
    } finally {
      q(Fe, !1);
    }
  }
  async function f() {
    q(Te, !0);
    try {
      const l = await cu({
        entity: r(bt),
        q: r(Ot),
        limit: 12,
        field: r(bt) === "public_workspace_files" ? ["workspaceArea", "resourceKind"] : []
      });
      q(N, l.results, !0), q(L, l.facets, !0), q(Be, !0);
    } catch (l) {
      q(
        ke,
        {
          message: l instanceof Error ? l.message : "Unable to load workspace discovery data",
          error: !0
        },
        !0
      );
    } finally {
      q(Te, !1);
    }
  }
  an(() => {
    if (!r(Yt) || typeof localStorage > "u")
      return;
    const l = n.reduce(
      (_, Y) => (_[Y] = {
        open: r(E)[Y].open,
        pinned: r(E)[Y].pinned,
        windowState: r(E)[Y].windowState
      }, _),
      {}
    );
    localStorage.setItem(H(o), JSON.stringify(l));
  }), an(() => {
    !r(Yt) || typeof localStorage > "u" || localStorage.setItem(H(a), JSON.stringify(n.reduce(
      (l, _) => (l[_] = r(He)[_], l),
      {}
    )));
  }), an(() => {
    !r(Yt) || typeof localStorage > "u" || localStorage.setItem(oe(c), JSON.stringify(r(V).edgePinnedWidgets));
  }), an(() => {
    !r(Yt) || typeof localStorage > "u" || localStorage.setItem(oe(u), JSON.stringify(r(wt)));
  }), an(() => {
    !r(Yt) || typeof localStorage > "u" || localStorage.setItem(H(s), JSON.stringify({
      editing: r(V).editing,
      toolbarWidgets: r(V).toolbarWidgets,
      edgePinnedWidgets: r(V).edgePinnedWidgets,
      hiddenWidgets: r(V).hiddenWidgets,
      customActions: r(V).customActions,
      toolbarCustomActions: r(V).toolbarCustomActions
    }));
  }), an(() => {
    !r(Yt) || typeof localStorage > "u" || localStorage.setItem(H(i), JSON.stringify(r(ut)));
  }), qa(() => {
    fn(ou());
    const l = au((Q) => {
      fn(Q);
    });
    try {
      const Q = localStorage.getItem(H(o));
      Q && (q(E, lt(JSON.parse(Q)), !0), Mr());
      const Z = localStorage.getItem(H(a));
      Z && q(He, ce(JSON.parse(Z)), !0);
      const We = localStorage.getItem(H(s));
      We && q(V, xe(JSON.parse(We)), !0);
      const Ve = localStorage.getItem(H(i));
      Ve && q(ut, se(JSON.parse(Ve)), !0);
      const Ee = localStorage.getItem(oe(c));
      Ee && (r(V).edgePinnedWidgets = ge(JSON.parse(Ee), r(V).edgePinnedWidgets)), r(V).toolbarCustomActions = me(r(V).toolbarCustomActions, r(V).customActions.map((Gt) => Gt.id), fe().toolbarCustomActions), r(V).edgePinnedWidgets = ge(
        [
          ...r(V).edgePinnedWidgets,
          ...n.filter((Gt) => r(E)[Gt].pinned)
        ],
        r(V).edgePinnedWidgets
      ), q(He, pt(r(He), r(V).hiddenWidgets), !0), q(ot, n.filter((Gt) => !r(V).hiddenWidgets.includes(Gt)), !0);
      const Ke = localStorage.getItem(oe(u));
      Ke && q(wt, $e(JSON.parse(Ke)), !0);
    } catch {
    }
    const _ = window.matchMedia("(max-width: 63.99rem)"), Y = () => {
      q(tt, _.matches, !0);
    };
    return Y(), _.addEventListener("change", Y), q(Yt, !0), xn(), () => {
      _.removeEventListener("change", Y), l();
    };
  });
  var O = Fg(), pe = Mt(O);
  Bl(pe, {
    get notice() {
      return r(ke);
    },
    get loading() {
      return r(C);
    },
    get metrics() {
      return r(Cn);
    },
    children: (l, _) => {
      var Y = Ng(), Q = Mt(Y);
      Vl(Q, {
        get items() {
          return r(oo);
        },
        get profiles() {
          return r(ut);
        },
        get editing() {
          return r(Kt);
        },
        get compact() {
          return r(tt);
        },
        get layoutDirty() {
          return r(Nt);
        },
        get managerOpen() {
          return r(Ct);
        },
        get customActionIconOptions() {
          return g;
        },
        onToggleEditing: $n,
        onResetLayout: Ln,
        onSaveWorkspace: $o,
        onToggleManager: Oo,
        onActivateWidget: at,
        onToggleToolbar: io,
        onToggleWorkspace: Eo,
        onToggleEdgePin: co,
        onActivateAction: lo,
        onToggleToolbarAction: yr,
        onDeleteAction: En,
        onCreateAction: Nr
      });
      var Z = w(Q, 2);
      let We;
      var Ve = p(Z);
      {
        var Ee = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("create-user"));
            Hr(re, {
              title: "Create user",
              get layout() {
                return r(It)["create-user"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("create-user", U),
              onPreviewChange: (U) => Qt("create-user", U),
              onShiftPopoutStart: (U) => at("create-user", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("create-user"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => {
                    var sa;
                    return ((sa = r(et)) == null ? void 0 : sa.actualRole) ?? "unknown";
                  }), Fr = /* @__PURE__ */ M(() => Ft("create-user"));
                  $s(U, {
                    get roles() {
                      return r(ct);
                    },
                    get form() {
                      return r(st);
                    },
                    get result() {
                      return r(wr);
                    },
                    get actualRole() {
                      return r(it);
                    },
                    get busy() {
                      return r(te);
                    },
                    dataTestid: "admin-users-panel",
                    get open() {
                      return r(Fr);
                    },
                    get pinned() {
                      return r(E)["create-user"].pinned;
                    },
                    onOpen: () => at("create-user"),
                    onTogglePin: () => Ue("create-user"),
                    onSubmit: () => void en()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Ke = /* @__PURE__ */ M(() => dr("create-user"));
        ye(Ve, (re) => {
          r(Ke) && re(Ee);
        });
      }
      var Gt = w(Ve, 2);
      {
        var aa = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("create-role"));
            Hr(re, {
              title: "Create role",
              get layout() {
                return r(It)["create-role"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("create-role", U),
              onPreviewChange: (U) => Qt("create-role", U),
              onShiftPopoutStart: (U) => at("create-role", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("create-role"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("create-role"));
                  Os(U, {
                    get roles() {
                      return r(ct);
                    },
                    get form() {
                      return r(Dt);
                    },
                    get result() {
                      return r(Vt);
                    },
                    get busy() {
                      return r(Ae);
                    },
                    dataTestid: "admin-roles-panel",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["create-role"].pinned;
                    },
                    onOpen: () => at("create-role"),
                    onTogglePin: () => Ue("create-role"),
                    onSubmit: () => void uo()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, vo = /* @__PURE__ */ M(() => dr("create-role"));
        ye(Gt, (re) => {
          r(vo) && re(aa);
        });
      }
      var Dn = w(Gt, 2);
      {
        var rs = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("display-mode"));
            Hr(re, {
              title: "Display mode",
              get layout() {
                return r(It)["display-mode"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("display-mode", U),
              onPreviewChange: (U) => Qt("display-mode", U),
              onShiftPopoutStart: (U) => at("display-mode", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("display-mode"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("display-mode"));
                  Es(U, {
                    get user() {
                      return r(et);
                    },
                    get busy() {
                      return r(Fe);
                    },
                    dataTestid: "admin-display-mode-panel",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["display-mode"].pinned;
                    },
                    onOpen: () => at("display-mode"),
                    onTogglePin: () => Ue("display-mode"),
                    onChange: (Fr) => void _e(Fr)
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, $t = /* @__PURE__ */ M(() => dr("display-mode"));
        ye(Dn, (re) => {
          r($t) && re(rs);
        });
      }
      var or = w(Dn, 2);
      {
        var xr = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("user-directory"));
            Hr(re, {
              title: "Users",
              get layout() {
                return r(It)["user-directory"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("user-directory", U),
              onPreviewChange: (U) => Qt("user-directory", U),
              onShiftPopoutStart: (U) => at("user-directory", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("user-directory"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("user-directory"));
                  Is(U, {
                    get users() {
                      return r(kt);
                    },
                    dataTestid: "admin-users-table",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["user-directory"].pinned;
                    },
                    onOpen: () => at("user-directory"),
                    onTogglePin: () => Ue("user-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, go = /* @__PURE__ */ M(() => dr("user-directory"));
        ye(or, (re) => {
          r(go) && re(xr);
        });
      }
      var ar = w(or, 2);
      {
        var In = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("role-directory"));
            Hr(re, {
              title: "Role catalog",
              get layout() {
                return r(It)["role-directory"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("role-directory", U),
              onPreviewChange: (U) => Qt("role-directory", U),
              onShiftPopoutStart: (U) => at("role-directory", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("role-directory"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("role-directory"));
                  Ls(U, {
                    get roles() {
                      return r(ct);
                    },
                    dataTestid: "admin-roles-table",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["role-directory"].pinned;
                    },
                    onOpen: () => at("role-directory"),
                    onTogglePin: () => Ue("role-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Nn = /* @__PURE__ */ M(() => dr("role-directory"));
        ye(ar, (re) => {
          r(Nn) && re(In);
        });
      }
      var Do = w(ar, 2);
      {
        var er = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("catalog-search"));
            Hr(re, {
              title: "Discovery",
              get layout() {
                return r(It)["catalog-search"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("catalog-search", U),
              onPreviewChange: (U) => Qt("catalog-search", U),
              onShiftPopoutStart: (U) => at("catalog-search", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("catalog-search"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("catalog-search"));
                  Cs(U, {
                    get query() {
                      return r(Ot);
                    },
                    get entity() {
                      return r(bt);
                    },
                    get loading() {
                      return r(Te);
                    },
                    dataTestid: "admin-catalog-panel",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["catalog-search"].pinned;
                    },
                    onOpen: () => at("catalog-search"),
                    onTogglePin: () => Ue("catalog-search"),
                    onSearch: () => void f(),
                    onEntityChange: (Fr) => {
                      q(bt, Fr, !0), q(Ot, ""), f();
                    }
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Bt = /* @__PURE__ */ M(() => dr("catalog-search"));
        ye(Do, (re) => {
          r(Bt) && re(er);
        });
      }
      var Io = w(Do, 2);
      {
        var kn = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("catalog-results"));
            Hr(re, {
              title: "Search results",
              get layout() {
                return r(It)["catalog-results"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("catalog-results", U),
              onPreviewChange: (U) => Qt("catalog-results", U),
              onShiftPopoutStart: (U) => at("catalog-results", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("catalog-results"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("catalog-results"));
                  As(U, {
                    get loaded() {
                      return r(Be);
                    },
                    get loading() {
                      return r(Te);
                    },
                    get searchResults() {
                      return r(N);
                    },
                    dataTestid: "admin-search-results",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["catalog-results"].pinned;
                    },
                    onOpen: () => at("catalog-results"),
                    onTogglePin: () => Ue("catalog-results")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, po = /* @__PURE__ */ M(() => dr("catalog-results"));
        ye(Io, (re) => {
          r(po) && re(kn);
        });
      }
      var ri = w(Io, 2);
      {
        var rd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("catalog-facets"));
            Hr(re, {
              title: "Facet distribution",
              get layout() {
                return r(It)["catalog-facets"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("catalog-facets", U),
              onPreviewChange: (U) => Qt("catalog-facets", U),
              onShiftPopoutStart: (U) => at("catalog-facets", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("catalog-facets"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("catalog-facets"));
                  Rs(U, {
                    get loaded() {
                      return r(Be);
                    },
                    get facets() {
                      return r(L);
                    },
                    dataTestid: "admin-facets",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["catalog-facets"].pinned;
                    },
                    onOpen: () => at("catalog-facets"),
                    onTogglePin: () => Ue("catalog-facets")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, nd = /* @__PURE__ */ M(() => dr("catalog-facets"));
        ye(ri, (re) => {
          r(nd) && re(rd);
        });
      }
      var ni = w(ri, 2);
      {
        var od = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("window-preferences"));
            Hr(re, {
              title: "Window preferences",
              get layout() {
                return r(It)["window-preferences"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("window-preferences", U),
              onPreviewChange: (U) => Qt("window-preferences", U),
              onShiftPopoutStart: (U) => at("window-preferences", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("window-preferences"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("window-preferences"));
                  Ns(U, {
                    dataTestid: "admin-settings-panel",
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["window-preferences"].pinned;
                    },
                    onOpen: () => at("window-preferences"),
                    onTogglePin: () => Ue("window-preferences")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ad = /* @__PURE__ */ M(() => dr("window-preferences"));
        ye(ni, (re) => {
          r(ad) && re(od);
        });
      }
      var sd = w(ni, 2);
      {
        var id = (re) => {
          {
            let De = /* @__PURE__ */ M(() => nr("settings-payload"));
            Hr(re, {
              title: "Settings payload",
              get layout() {
                return r(It)["settings-payload"];
              },
              get canvasWidth() {
                return r(ht);
              },
              get compact() {
                return r(tt);
              },
              get editable() {
                return r(Kt);
              },
              get zIndex() {
                return r(De);
              },
              onChange: (U) => Zt("settings-payload", U),
              onPreviewChange: (U) => Qt("settings-payload", U),
              onShiftPopoutStart: (U) => at("settings-payload", { pinned: !0, dragSeed: U }),
              onFocus: () => Ut("settings-payload"),
              children: (U, je) => {
                {
                  let it = /* @__PURE__ */ M(() => Ft("settings-payload"));
                  Ds(U, {
                    get settings() {
                      return r(ft);
                    },
                    get open() {
                      return r(it);
                    },
                    get pinned() {
                      return r(E)["settings-payload"].pinned;
                    },
                    onOpen: () => at("settings-payload"),
                    onTogglePin: () => Ue("settings-payload")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ld = /* @__PURE__ */ M(() => dr("settings-payload"));
        ye(sd, (re) => {
          r(ld) && re(id);
        });
      }
      v(Z), Nc(Z, (re) => Qr == null ? void 0 : Qr(re));
      var oi = w(Z, 2);
      {
        var dd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("create-user")), U = /* @__PURE__ */ M(() => r(vt)["create-user"] ?? null);
            Br(re, {
              get title() {
                return k["create-user"].title;
              },
              get pinned() {
                return r(E)["create-user"].pinned;
              },
              get defaultWidth() {
                return k["create-user"].width;
              },
              get defaultHeight() {
                return k["create-user"].height;
              },
              get defaultX() {
                return k["create-user"].x;
              },
              get defaultY() {
                return k["create-user"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("create-user"),
              onFocus: () => Tt("create-user"),
              onPinToggle: () => Ue("create-user"),
              onConsumeDragSeed: () => Rt("create-user"),
              get windowState() {
                return r(E)["create-user"].windowState;
              },
              set windowState(je) {
                r(E)["create-user"].windowState = je;
              },
              children: (je, it) => {
                {
                  let Fr = /* @__PURE__ */ M(() => {
                    var sa;
                    return ((sa = r(et)) == null ? void 0 : sa.actualRole) ?? "unknown";
                  });
                  $s(je, {
                    mode: "window",
                    get roles() {
                      return r(ct);
                    },
                    get form() {
                      return r(st);
                    },
                    get result() {
                      return r(wr);
                    },
                    get actualRole() {
                      return r(Fr);
                    },
                    get busy() {
                      return r(te);
                    },
                    get pinned() {
                      return r(E)["create-user"].pinned;
                    },
                    onTogglePin: () => Ue("create-user"),
                    onSubmit: () => void en()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(oi, (re) => {
          r(E)["create-user"].open && re(dd);
        });
      }
      var ai = w(oi, 2);
      {
        var cd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("user-directory")), U = /* @__PURE__ */ M(() => r(vt)["user-directory"] ?? null);
            Br(re, {
              get title() {
                return k["user-directory"].title;
              },
              get pinned() {
                return r(E)["user-directory"].pinned;
              },
              get defaultWidth() {
                return k["user-directory"].width;
              },
              get defaultHeight() {
                return k["user-directory"].height;
              },
              get defaultX() {
                return k["user-directory"].x;
              },
              get defaultY() {
                return k["user-directory"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("user-directory"),
              onFocus: () => Tt("user-directory"),
              onPinToggle: () => Ue("user-directory"),
              onConsumeDragSeed: () => Rt("user-directory"),
              get windowState() {
                return r(E)["user-directory"].windowState;
              },
              set windowState(je) {
                r(E)["user-directory"].windowState = je;
              },
              children: (je, it) => {
                Is(je, {
                  mode: "window",
                  get users() {
                    return r(kt);
                  },
                  get pinned() {
                    return r(E)["user-directory"].pinned;
                  },
                  onTogglePin: () => Ue("user-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(ai, (re) => {
          r(E)["user-directory"].open && re(cd);
        });
      }
      var si = w(ai, 2);
      {
        var ud = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("create-role")), U = /* @__PURE__ */ M(() => r(vt)["create-role"] ?? null);
            Br(re, {
              get title() {
                return k["create-role"].title;
              },
              get pinned() {
                return r(E)["create-role"].pinned;
              },
              get defaultWidth() {
                return k["create-role"].width;
              },
              get defaultHeight() {
                return k["create-role"].height;
              },
              get defaultX() {
                return k["create-role"].x;
              },
              get defaultY() {
                return k["create-role"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("create-role"),
              onFocus: () => Tt("create-role"),
              onPinToggle: () => Ue("create-role"),
              onConsumeDragSeed: () => Rt("create-role"),
              get windowState() {
                return r(E)["create-role"].windowState;
              },
              set windowState(je) {
                r(E)["create-role"].windowState = je;
              },
              children: (je, it) => {
                Os(je, {
                  mode: "window",
                  get roles() {
                    return r(ct);
                  },
                  get form() {
                    return r(Dt);
                  },
                  get result() {
                    return r(Vt);
                  },
                  get busy() {
                    return r(Ae);
                  },
                  get pinned() {
                    return r(E)["create-role"].pinned;
                  },
                  onTogglePin: () => Ue("create-role"),
                  onSubmit: () => void uo()
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(si, (re) => {
          r(E)["create-role"].open && re(ud);
        });
      }
      var ii = w(si, 2);
      {
        var vd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("role-directory")), U = /* @__PURE__ */ M(() => r(vt)["role-directory"] ?? null);
            Br(re, {
              get title() {
                return k["role-directory"].title;
              },
              get pinned() {
                return r(E)["role-directory"].pinned;
              },
              get defaultWidth() {
                return k["role-directory"].width;
              },
              get defaultHeight() {
                return k["role-directory"].height;
              },
              get defaultX() {
                return k["role-directory"].x;
              },
              get defaultY() {
                return k["role-directory"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("role-directory"),
              onFocus: () => Tt("role-directory"),
              onPinToggle: () => Ue("role-directory"),
              onConsumeDragSeed: () => Rt("role-directory"),
              get windowState() {
                return r(E)["role-directory"].windowState;
              },
              set windowState(je) {
                r(E)["role-directory"].windowState = je;
              },
              children: (je, it) => {
                Ls(je, {
                  mode: "window",
                  get roles() {
                    return r(ct);
                  },
                  get pinned() {
                    return r(E)["role-directory"].pinned;
                  },
                  onTogglePin: () => Ue("role-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(ii, (re) => {
          r(E)["role-directory"].open && re(vd);
        });
      }
      var li = w(ii, 2);
      {
        var gd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("display-mode")), U = /* @__PURE__ */ M(() => r(vt)["display-mode"] ?? null);
            Br(re, {
              get title() {
                return k["display-mode"].title;
              },
              get pinned() {
                return r(E)["display-mode"].pinned;
              },
              get defaultWidth() {
                return k["display-mode"].width;
              },
              get defaultHeight() {
                return k["display-mode"].height;
              },
              get defaultX() {
                return k["display-mode"].x;
              },
              get defaultY() {
                return k["display-mode"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("display-mode"),
              onFocus: () => Tt("display-mode"),
              onPinToggle: () => Ue("display-mode"),
              onConsumeDragSeed: () => Rt("display-mode"),
              get windowState() {
                return r(E)["display-mode"].windowState;
              },
              set windowState(je) {
                r(E)["display-mode"].windowState = je;
              },
              children: (je, it) => {
                Es(je, {
                  mode: "window",
                  get user() {
                    return r(et);
                  },
                  get busy() {
                    return r(Fe);
                  },
                  get pinned() {
                    return r(E)["display-mode"].pinned;
                  },
                  onTogglePin: () => Ue("display-mode"),
                  onChange: (Fr) => void _e(Fr)
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(li, (re) => {
          r(E)["display-mode"].open && re(gd);
        });
      }
      var di = w(li, 2);
      {
        var pd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("window-preferences")), U = /* @__PURE__ */ M(() => r(vt)["window-preferences"] ?? null);
            Br(re, {
              get title() {
                return k["window-preferences"].title;
              },
              get pinned() {
                return r(E)["window-preferences"].pinned;
              },
              get defaultWidth() {
                return k["window-preferences"].width;
              },
              get defaultHeight() {
                return k["window-preferences"].height;
              },
              get defaultX() {
                return k["window-preferences"].x;
              },
              get defaultY() {
                return k["window-preferences"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("window-preferences"),
              onFocus: () => Tt("window-preferences"),
              onPinToggle: () => Ue("window-preferences"),
              onConsumeDragSeed: () => Rt("window-preferences"),
              get windowState() {
                return r(E)["window-preferences"].windowState;
              },
              set windowState(je) {
                r(E)["window-preferences"].windowState = je;
              },
              children: (je, it) => {
                Ns(je, {
                  mode: "window",
                  get pinned() {
                    return r(E)["window-preferences"].pinned;
                  },
                  onTogglePin: () => Ue("window-preferences")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(di, (re) => {
          r(E)["window-preferences"].open && re(pd);
        });
      }
      var ci = w(di, 2);
      {
        var hd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("settings-payload")), U = /* @__PURE__ */ M(() => r(vt)["settings-payload"] ?? null);
            Br(re, {
              get title() {
                return k["settings-payload"].title;
              },
              get pinned() {
                return r(E)["settings-payload"].pinned;
              },
              get defaultWidth() {
                return k["settings-payload"].width;
              },
              get defaultHeight() {
                return k["settings-payload"].height;
              },
              get defaultX() {
                return k["settings-payload"].x;
              },
              get defaultY() {
                return k["settings-payload"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("settings-payload"),
              onFocus: () => Tt("settings-payload"),
              onPinToggle: () => Ue("settings-payload"),
              onConsumeDragSeed: () => Rt("settings-payload"),
              get windowState() {
                return r(E)["settings-payload"].windowState;
              },
              set windowState(je) {
                r(E)["settings-payload"].windowState = je;
              },
              children: (je, it) => {
                Ds(je, {
                  mode: "window",
                  get settings() {
                    return r(ft);
                  },
                  get pinned() {
                    return r(E)["settings-payload"].pinned;
                  },
                  onTogglePin: () => Ue("settings-payload")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(ci, (re) => {
          r(E)["settings-payload"].open && re(hd);
        });
      }
      var ui = w(ci, 2);
      {
        var md = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("catalog-search")), U = /* @__PURE__ */ M(() => r(vt)["catalog-search"] ?? null);
            Br(re, {
              get title() {
                return k["catalog-search"].title;
              },
              get pinned() {
                return r(E)["catalog-search"].pinned;
              },
              get defaultWidth() {
                return k["catalog-search"].width;
              },
              get defaultHeight() {
                return k["catalog-search"].height;
              },
              get defaultX() {
                return k["catalog-search"].x;
              },
              get defaultY() {
                return k["catalog-search"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("catalog-search"),
              onFocus: () => Tt("catalog-search"),
              onPinToggle: () => Ue("catalog-search"),
              onConsumeDragSeed: () => Rt("catalog-search"),
              get windowState() {
                return r(E)["catalog-search"].windowState;
              },
              set windowState(je) {
                r(E)["catalog-search"].windowState = je;
              },
              children: (je, it) => {
                Cs(je, {
                  mode: "window",
                  get query() {
                    return r(Ot);
                  },
                  get entity() {
                    return r(bt);
                  },
                  get loading() {
                    return r(Te);
                  },
                  get pinned() {
                    return r(E)["catalog-search"].pinned;
                  },
                  onTogglePin: () => Ue("catalog-search"),
                  onSearch: () => void f(),
                  onEntityChange: (Fr) => {
                    q(bt, Fr, !0), q(Ot, ""), f();
                  }
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(ui, (re) => {
          r(E)["catalog-search"].open && re(md);
        });
      }
      var vi = w(ui, 2);
      {
        var fd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("catalog-results")), U = /* @__PURE__ */ M(() => r(vt)["catalog-results"] ?? null);
            Br(re, {
              get title() {
                return k["catalog-results"].title;
              },
              get pinned() {
                return r(E)["catalog-results"].pinned;
              },
              get defaultWidth() {
                return k["catalog-results"].width;
              },
              get defaultHeight() {
                return k["catalog-results"].height;
              },
              get defaultX() {
                return k["catalog-results"].x;
              },
              get defaultY() {
                return k["catalog-results"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("catalog-results"),
              onFocus: () => Tt("catalog-results"),
              onPinToggle: () => Ue("catalog-results"),
              onConsumeDragSeed: () => Rt("catalog-results"),
              get windowState() {
                return r(E)["catalog-results"].windowState;
              },
              set windowState(je) {
                r(E)["catalog-results"].windowState = je;
              },
              children: (je, it) => {
                As(je, {
                  mode: "window",
                  get loaded() {
                    return r(Be);
                  },
                  get loading() {
                    return r(Te);
                  },
                  get searchResults() {
                    return r(N);
                  },
                  get pinned() {
                    return r(E)["catalog-results"].pinned;
                  },
                  onTogglePin: () => Ue("catalog-results")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(vi, (re) => {
          r(E)["catalog-results"].open && re(fd);
        });
      }
      var wd = w(vi, 2);
      {
        var bd = (re) => {
          {
            let De = /* @__PURE__ */ M(() => Xt("catalog-facets")), U = /* @__PURE__ */ M(() => r(vt)["catalog-facets"] ?? null);
            Br(re, {
              get title() {
                return k["catalog-facets"].title;
              },
              get pinned() {
                return r(E)["catalog-facets"].pinned;
              },
              get defaultWidth() {
                return k["catalog-facets"].width;
              },
              get defaultHeight() {
                return k["catalog-facets"].height;
              },
              get defaultX() {
                return k["catalog-facets"].x;
              },
              get defaultY() {
                return k["catalog-facets"].y;
              },
              get zIndex() {
                return r(De);
              },
              get dragSeed() {
                return r(U);
              },
              onClose: () => qt("catalog-facets"),
              onFocus: () => Tt("catalog-facets"),
              onPinToggle: () => Ue("catalog-facets"),
              onConsumeDragSeed: () => Rt("catalog-facets"),
              get windowState() {
                return r(E)["catalog-facets"].windowState;
              },
              set windowState(je) {
                r(E)["catalog-facets"].windowState = je;
              },
              children: (je, it) => {
                Rs(je, {
                  mode: "window",
                  get loaded() {
                    return r(Be);
                  },
                  get facets() {
                    return r(L);
                  },
                  get pinned() {
                    return r(E)["catalog-facets"].pinned;
                  },
                  onTogglePin: () => Ue("catalog-facets")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ye(wd, (re) => {
          r(E)["catalog-facets"].open && re(bd);
        });
      }
      ve(() => We = Ie(Z, 1, "workspace-canvas svelte-vg7d0z", null, We, { "compact-workspace": r(tt) })), B(l, Y);
    },
    $$slots: { default: !0 }
  });
  var be = w(pe, 2);
  td(be, {
    get items() {
      return r(ao);
    },
    get position() {
      return r(wt);
    },
    onActivate: bn,
    onRemove: yn,
    onPositionChange: (l) => {
      q(wt, l, !0);
    }
  }), B(e, O), Pt();
}
customElements.define("efsdb-admin", Wt(Hg, {}, [], [], { mode: "open" }));
