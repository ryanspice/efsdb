var wi = Object.defineProperty;
var Hn = (e) => {
  throw TypeError(e);
};
var $i = (e, t, r) => t in e ? wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var C = (e, t, r) => $i(e, typeof t != "symbol" ? t + "" : t, r), Kr = (e, t, r) => t.has(e) || Hn("Cannot " + r);
var o = (e, t, r) => (Kr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? Hn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r, n) => (Kr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), y = (e, t, r) => (Kr(e, t, "access private method"), r);
var ts;
typeof window < "u" && ((ts = window.__svelte ?? (window.__svelte = {})).v ?? (ts.v = /* @__PURE__ */ new Set())).add("5");
const Ei = 1, ki = 2, xi = 16, qi = 2, ss = "[", $n = "[!", Yn = "[?", En = "]", rt = {}, P = Symbol("uninitialized"), Ti = "http://www.w3.org/1999/xhtml", is = !1;
var as = Array.isArray, Si = Array.prototype.indexOf, ar = Array.prototype.includes, Pr = Array.from, Tr = Object.keys, lr = Object.defineProperty, At = Object.getOwnPropertyDescriptor, Ai = Object.getOwnPropertyDescriptors, Mi = Object.prototype, Oi = Array.prototype, ls = Object.getPrototypeOf, Un = Object.isExtensible;
const Ri = () => {
};
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function os() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const W = 2, It = 4, Ir = 8, fs = 1 << 24, Ee = 16, qe = 32, ze = 64, sn = 128, kn = 256, xe = 512, I = 1024, L = 2048, he = 4096, J = 8192, V = 16384, bt = 32768, or = 1 << 25, Ft = 65536, Sr = 1 << 17, Ni = 1 << 18, yt = 1 << 19, Li = 1 << 20, Ye = 1 << 25, Ar = 1 << 21, Mt = 1 << 22, et = 1 << 23, $r = Symbol("$state"), us = Symbol("component"), Di = Symbol("legacy props"), Pi = Symbol(""), Er = Symbol("attributes"), Ii = Symbol("class"), Fi = Symbol("style"), Jt = Symbol("text"), rr = Symbol("form reset"), _r = new class extends Error {
  constructor() {
    super(...arguments);
    C(this, "name", "StaleReactionError");
    C(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var rs;
const ji = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((rs = globalThis.document) != null && rs.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), xn = 3, gr = 8;
function Bi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Fr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Hi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let M = !1;
function Ue(e) {
  M = e;
}
let R;
function oe(e) {
  if (e === null)
    throw Fr(), rt;
  return R = e;
}
function jr() {
  return oe(/* @__PURE__ */ We(R));
}
function j(e) {
  if (M) {
    if (/* @__PURE__ */ We(R) !== null)
      throw Fr(), rt;
    R = e;
  }
}
function cs(e = 1) {
  if (M) {
    for (var t = e, r = R; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ We(r);
    R = r;
  }
}
function Mr(e = !0) {
  for (var t = 0, r = R; ; ) {
    if (r.nodeType === gr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === En) {
        if (t === 0) return r;
        t -= 1;
      } else (n === ss || n === $n || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(r)
    );
    e && r.remove(), r = s;
  }
}
function qn(e) {
  if (!e || e.nodeType !== gr)
    throw Fr(), rt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ds(e) {
  return e === this.v;
}
function Yi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hs(e) {
  return !Yi(e, this.v);
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Vi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Wi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ki() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ji() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ea() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ta() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ra = !1, z = null;
function jt(e) {
  z = e;
}
function vs(e, t = !1, r) {
  z = {
    p: z,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
    ),
    l: null
  };
}
function ps(e) {
  var t = (
    /** @type {ComponentContext} */
    z
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Fs(n);
  }
  return t.i = !0, z = t.p, Tn(e);
}
function Tn(e = {}) {
  return lr(e, us, { value: !0 }), e;
}
function _s() {
  return !0;
}
let ot = [];
function gs() {
  var e = ot;
  ot = [], Ci(e);
}
function Ve(e) {
  if (ot.length === 0 && !nr) {
    var t = ot;
    queueMicrotask(() => {
      t === ot && gs();
    });
  }
  ot.push(e);
}
function na() {
  for (; ot.length > 0; )
    gs();
}
const sa = -7169;
function N(e, t) {
  e.f = e.f & sa | t;
}
function Sn(e) {
  (e.f & xe) !== 0 || e.deps === null ? N(e, I) : N(e, he);
}
function ms(e, t, r) {
  (e.f & L) !== 0 ? t.add(e) : (e.f & he) !== 0 && r.add(e), N(e, I);
}
let Vn = !1;
function bs() {
  Vn || (Vn = !0, document.addEventListener(
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
            (t = r[rr]) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ut(e) {
  var t = x, r = T;
  ve(null), De(null);
  try {
    return e();
  } finally {
    ve(t), De(r);
  }
}
function ia(e, t, r, n = r) {
  e.addEventListener(t, () => Ut(r));
  const s = (
    /** @type {any} */
    e[rr]
  );
  s ? e[rr] = () => {
    s(), n(!0);
  } : e[rr] = () => n(!0), bs();
}
function aa(e, t, r, n) {
  const s = An;
  var i = e.filter((v) => !v.settled), l = t.map(s);
  if (r.length === 0 && i.length === 0) {
    n(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    T
  ), f = la(), u = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function d(v) {
    if ((a.f & V) === 0) {
      f();
      try {
        n([...l, ...v]);
      } catch (c) {
        Re(c, a);
      }
      Or();
    }
  }
  var h = ys();
  if (r.length === 0) {
    u.then(() => d([])).finally(h);
    return;
  }
  function p() {
    Promise.all(r.map((v) => /* @__PURE__ */ oa(v))).then(d).catch((v) => Re(v, a)).finally(h);
  }
  u ? u.then(() => {
    if ((a.f & V) !== 0) {
      h();
      return;
    }
    f(), p(), Or();
  }) : p();
}
function la() {
  var e = (
    /** @type {Effect} */
    T
  ), t = x, r = z, n = (
    /** @type {Batch} */
    g
  );
  return function(i = !0) {
    De(e), ve(t), jt(r), i && (e.f & V) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Or(e = !0) {
  De(null), ve(null), jt(null), e && (g == null || g.deactivate());
}
function ys() {
  var e = (
    /** @type {Effect} */
    T
  ), t = e.b, r = (
    /** @type {Batch} */
    g
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  var t = W | L;
  return T !== null && (T.f |= yt), {
    ctx: z,
    deps: null,
    effects: null,
    equals: ds,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      P
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
const Xt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function oa(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && Vi();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = mt(
    /** @type {V} */
    P
  ), l = !x, a = /* @__PURE__ */ new Set();
  return Ea(() => {
    var v, c;
    var f = (
      /** @type {Effect} */
      T
    ), u = os();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (_) => {
        _ !== _r && u.reject(_);
      }).finally(Or);
    } catch (_) {
      u.reject(_), Or();
    }
    var d = (
      /** @type {Batch} */
      g
    );
    if (l) {
      if ((f.f & bt) !== 0)
        var h = ys();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (v = n.b) != null && v.is_rendered()
      )
        (c = d.async_deriveds.get(f)) == null || c.reject(Xt);
      else
        for (const _ of a.values())
          _.reject(Xt);
      a.add(u), d.async_deriveds.set(f, u);
    }
    const p = (_, E = void 0) => {
      h == null || h(), a.delete(u), E !== Xt && (d.activate(), E ? (i.f |= et, Bt(i, E)) : ((i.f & et) !== 0 && (i.f ^= et), Bt(i, _)), d.deactivate());
    };
    u.promise.then(p, (_) => p(null, _ || "unknown"));
  }), Is(() => {
    for (const f of a)
      f.reject(Xt);
  }), new Promise((f) => {
    function u(d) {
      function h() {
        d === s ? f(i) : u(s);
      }
      d.then(h, h);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  const t = /* @__PURE__ */ An(e);
  return Vs(t), t;
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  const t = /* @__PURE__ */ An(e);
  return t.equals = hs, t;
}
function ca(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      X(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Mn(e) {
  var t, r = T, n = e.parent;
  if (!st && n !== null && e.v !== P && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (V | J)) !== 0)
    return Bi(), e.v;
  De(n);
  try {
    ca(e), t = Gs(e);
  } finally {
    De(r);
  }
  return t;
}
function ws(e) {
  var t = Mn(e);
  if (!e.equals(t) && (e.wv = Ws(), (!(g != null && g.is_fork) || e.deps === null) && (g !== null ? (g.capture(e, t, !0), tt == null || tt.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    N(e, I);
    return;
  }
  st || (B !== null ? (Nn() || g != null && g.is_fork) && B.set(e, t) : Sn(e));
}
function da(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && Ut(() => {
        r.ac.abort(_r), r.ac = null;
      }), r.fn !== null && (r.teardown = Ri), fr(r, 0), Dn(r));
}
function $s(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Yt(t);
}
let Gr = null, xt = null, g = null, tt = null, B = null, an = null, nr = !1, Jr = !1, sr = null, kr = null;
var zn = 0;
let ha = 1;
var Ot, Ze, ct, Rt, Ct, Nt, Fe, Lt, re, ur, je, we, Ae, Dt, dt, S, ln, on, Zt, fn, Es, ks, Tt, va, Qt;
const Nr = class Nr {
  constructor() {
    w(this, S);
    C(this, "id", ha++);
    /** True as soon as `#process` was called */
    w(this, Ot, !1);
    C(this, "linked", !0);
    /** @type {Batch | null} */
    w(this, Ze, null);
    /** @type {Batch | null} */
    w(this, ct, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    C(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    C(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    C(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, Rt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, Ct, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    w(this, Nt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, Fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, Lt, null);
    /**
     * Effects that were scheduled in this batch but not yet 'resolved' into the
     * root effects that need to be flushed. Resolving — the upwards traversal that
     * marks the path to each effect on the shared effect tree (see #resolve) — is
     * deferred until the batch is processed, so that the markers are created and
     * consumed within a single traversal. Scheduling into other batches (which can
     * happen concurrently, e.g. while a batch is committed) can therefore never
     * observe (and be confused by) this batch's markers.
     * May contain duplicates — deduplication happens during resolving
     * @type {Effect[]}
     */
    w(this, re, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, ur, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, we, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, Dt, /* @__PURE__ */ new Set());
    C(this, "is_fork", !1);
    w(this, dt, !1);
    xt === null ? Gr = xt = this : (b(xt, ct, this), b(this, Ze, xt)), xt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, Ae).has(t) || o(this, Ae).set(t, { d: [], m: [] }), o(this, Dt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, Ae).get(t);
    if (n) {
      o(this, Ae).delete(t);
      for (var s of n.d)
        N(s, L), r(s);
      for (s of n.m)
        N(s, he), r(s);
    }
    o(this, Dt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== P && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & et) === 0 && (this.current.set(t, [r, n]), B == null || B.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, B = null;
  }
  flush() {
    try {
      Jr = !0, g = this, y(this, S, Zt).call(this);
    } finally {
      zn = 0, an = null, sr = null, kr = null, Jr = !1, g = null, B = null, Ce.clear();
    }
  }
  discard() {
    var t;
    for (const r of o(this, Ct)) r(this);
    o(this, Ct).clear();
    for (const r of this.async_deriveds.values())
      r.reject(Xt);
    y(this, S, Qt).call(this), (t = o(this, Lt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, ur).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (b(this, Nt, o(this, Nt) + 1), t) {
      let n = o(this, Fe).get(r) ?? 0;
      o(this, Fe).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (b(this, Nt, o(this, Nt) - 1), t) {
      let n = o(this, Fe).get(r) ?? 0;
      n === 1 ? o(this, Fe).delete(r) : o(this, Fe).set(r, n - 1);
    }
    o(this, dt) || (b(this, dt, !0), Ve(() => {
      b(this, dt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, je).add(n);
    for (const n of r)
      o(this, we).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Rt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Ct).add(t);
  }
  settled() {
    return (o(this, Lt) ?? b(this, Lt, os())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Nr();
      !Jr && !nr && Ve(() => {
        o(t, Ot) || t.flush();
      });
    }
    return g;
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
    var r;
    if (an = t, (r = t.b) != null && r.is_pending && (t.f & (It | Ir | fs)) !== 0 && (t.f & bt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    o(this, re).push(t);
  }
};
Ot = new WeakMap(), Ze = new WeakMap(), ct = new WeakMap(), Rt = new WeakMap(), Ct = new WeakMap(), Nt = new WeakMap(), Fe = new WeakMap(), Lt = new WeakMap(), re = new WeakMap(), ur = new WeakMap(), je = new WeakMap(), we = new WeakMap(), Ae = new WeakMap(), Dt = new WeakMap(), dt = new WeakMap(), S = new WeakSet(), ln = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, Fe).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (o(this, Ae).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, /**
 * Convert the effects that were scheduled in this batch into the root effects
 * that need to be traversed, marking the path to each effect (by clearing the
 * `CLEAN` flag on ancestor branches) so that the traversal can find them.
 * This happens right before traversal rather than at scheduling time, so that
 * the markers left on the (shared) effect tree are created and consumed within
 * a single traversal — scheduling into other batches can never observe them
 * @returns {Effect[]}
 */
on = function() {
  var t = [];
  for (const i of o(this, re))
    if (!((i.f & V) !== 0 || (i.f & (L | he)) === 0)) {
      for (var r = i, n = !1; r.parent !== null; ) {
        r = r.parent;
        var s = r.f;
        if ((s & (ze | qe)) !== 0) {
          if ((s & I) === 0) {
            n = !0;
            break;
          }
          r.f ^= I;
        }
      }
      n || t.push(r);
    }
  return b(this, re, []), t;
}, Zt = function() {
  var a, f, u, d;
  b(this, Ot, !0);
  for (const h of o(this, je))
    o(this, we).delete(h), N(h, L), this.schedule(h);
  for (const h of o(this, we))
    N(h, he), this.schedule(h);
  this.apply();
  for (var t = sr = [], r = [], n = kr = []; o(this, re).length > 0; ) {
    zn++ > 1e3 && (y(this, S, Qt).call(this), pa());
    for (const h of y(this, S, on).call(this))
      try {
        y(this, S, fn).call(this, h, t, r);
      } catch (p) {
        throw Ss(h), y(this, S, ln).call(this) || this.discard(), p;
      }
  }
  if (g = null, n.length > 0) {
    var s = Nr.ensure();
    for (const h of n)
      s.schedule(h);
  }
  if (sr = null, kr = null, y(this, S, ln).call(this)) {
    y(this, S, Tt).call(this, r), y(this, S, Tt).call(this, t);
    for (const [h, p] of o(this, Ae))
      Ts(h, p);
    n.length > 0 && /** @type {unknown} */
    y(a = g, S, Zt).call(a);
    return;
  }
  const i = y(this, S, Es).call(this);
  if (i) {
    y(this, S, Tt).call(this, r), y(this, S, Tt).call(this, t), y(f = i, S, ks).call(f, this);
    return;
  }
  o(this, je).clear(), o(this, we).clear();
  for (const h of o(this, Rt)) h(this);
  o(this, Rt).clear(), tt = this, Wn(r), Wn(t), tt = null, (u = o(this, Lt)) == null || u.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (o(this, Nt) === 0 && (o(this, re).length === 0 || l !== null) && y(this, S, Qt).call(this), o(this, re).length > 0)
    if (l !== null) {
      for (const h of o(this, re))
        o(l, re).push(h);
      b(this, re, []);
    } else
      l = this;
  l !== null && (Ce.clear(), y(d = l, S, Zt).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
fn = function(t, r, n) {
  t.f ^= I;
  for (var s = t.first; s !== null; ) {
    var i = s.f, l = (i & (qe | ze)) !== 0, a = l && (i & I) !== 0, f = a || (i & J) !== 0 || o(this, Ae).has(s);
    if (!f && s.fn !== null) {
      l ? s.f ^= I : (i & It) !== 0 ? r.push(s) : mr(s) && ((i & Ee) !== 0 && o(this, we).add(s), Yt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var d = s.next;
      if (d !== null) {
        s = d;
        break;
      }
      s = s.parent;
    }
  }
}, Es = function() {
  for (var t = o(this, Ze); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, Ze);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ks = function(t) {
  var n;
  for (const [s, i] of t.current)
    !this.previous.has(s) && t.previous.has(s) && this.previous.set(s, t.previous.get(s)), this.current.set(s, i);
  for (const [s, i] of t.async_deriveds) {
    const l = this.async_deriveds.get(s);
    l && i.promise.then(l.resolve).catch(l.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(o(t, je), o(t, we));
  const r = (s) => {
    var i = s.reactions;
    if (i !== null && !((s.f & W) !== 0 && (s.f & (L | he)) === 0))
      for (const f of i) {
        var l = f.f;
        if ((l & W) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var a = (
            /** @type {Effect} */
            f
          );
          l & (Mt | Ee) && !this.async_deriveds.has(a) && (o(this, we).delete(a), N(a, L), this.schedule(a));
        }
      }
  };
  for (const s of this.current.keys())
    r(s);
  this.oncommit(() => t.discard()), y(n = t, S, Qt).call(n), g = this, y(this, S, Zt).call(this);
}, /**
 * @param {Effect[]} effects
 */
Tt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ms(t[r], o(this, je), o(this, we));
}, va = function() {
  var h, p;
  for (let v = Gr; v !== null; v = o(v, ct)) {
    var t = v.id < this.id, r = [];
    for (const [c, [_, E]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && _ !== n)
          v.current.set(c, [_, E]);
        else
          continue;
      }
      r.push(c);
    }
    if (t)
      for (const [c, _] of this.async_deriveds) {
        const E = v.async_deriveds.get(c);
        E && _.promise.then(E.resolve).catch(E.reject);
      }
    var s = [...v.current.keys()].filter(
      (c) => !/** @type {[any, boolean]} */
      v.current.get(c)[1]
    );
    if (!(!o(v, Ot) || s.length === 0)) {
      var i = s.filter((c) => !this.current.has(c));
      if (i.length === 0)
        t && v.discard();
      else if (r.length > 0) {
        if (t)
          for (const c of o(this, Dt))
            v.unskip_effect(c, (_) => {
              var E;
              (_.f & (Ee | Mt)) !== 0 ? v.schedule(_) : y(E = v, S, Tt).call(E, [_]);
            });
        v.activate();
        var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var f of r)
          qs(f, i, l, a);
        a = /* @__PURE__ */ new Map();
        var u = [...v.current].filter(([c, _]) => {
          const E = this.current.get(c);
          return E ? E[0] !== _[0] || E[1] !== _[1] : !0;
        }).map(([c]) => c);
        if (u.length > 0)
          for (const c of o(this, ur))
            (c.f & (V | J | Sr)) === 0 && On(c, u, a) && ((c.f & (Mt | Ee)) !== 0 ? (N(c, L), v.schedule(c)) : o(v, je).add(c));
        if (o(v, re).length > 0 && !o(v, dt)) {
          v.apply();
          for (var d of y(h = v, S, on).call(h))
            y(p = v, S, fn).call(p, d, [], []);
        }
        v.deactivate();
      }
    }
  }
}, Qt = function() {
  if (this.linked) {
    var t = o(this, Ze), r = o(this, ct);
    t === null ? Gr = r : b(t, ct, r), r === null ? xt = t : b(r, Ze, t), this.linked = !1;
  }
};
let nt = Nr;
function xs(e) {
  var t = nr, r = tt;
  tt = null, nr = !0;
  try {
    for (var n; ; ) {
      if (na(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    nr = t, tt = r;
  }
}
function pa() {
  try {
    Ji();
  } catch (e) {
    Re(e, an);
  }
}
let ye = null;
function Wn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (V | J)) === 0 && mr(n) && (ye = /* @__PURE__ */ new Set(), Yt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Hs(n), (ye == null ? void 0 : ye.size) > 0)) {
        Ce.clear();
        for (const s of ye) {
          if ((s.f & (V | J)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            ye.has(l) && (ye.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const f = i[a];
            (f.f & (V | J)) === 0 && Yt(f);
          }
        }
        ye.clear();
      }
    }
    ye = null;
  }
}
function qs(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & W) !== 0 ? qs(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Mt | Ee)) !== 0 && (i & L) === 0 && On(s, t, n) && (N(s, L), Rn(
        /** @type {Effect} */
        s
      ));
    }
}
function On(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (ar.call(t, s))
        return !0;
      if ((s.f & W) !== 0 && On(
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
function Rn(e) {
  g.schedule(e);
}
function Ts(e, t) {
  if (!((e.f & qe) !== 0 && (e.f & I) !== 0)) {
    (e.f & L) !== 0 ? t.d.push(e) : (e.f & he) !== 0 && t.m.push(e), N(e, I);
    for (var r = e.first; r !== null; )
      Ts(r, t), r = r.next;
  }
}
function Ss(e) {
  N(e, I);
  for (var t = e.first; t !== null; )
    Ss(t), t = t.next;
}
let Rr = /* @__PURE__ */ new Set();
const Ce = /* @__PURE__ */ new Map();
let As = !1;
function mt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ds,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  const r = mt(e);
  return Vs(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ms(e, t = !1, r = !0) {
  const n = mt(e);
  return t || (n.equals = hs), n;
}
function A(e, t, r = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ke || (x.f & Sr) !== 0) && _s() && (x.f & (W | Ee | Mt | Sr)) !== 0 && (Le === null || !Le.has(e)) && ea();
  let n = r ? St(t) : t;
  return Bt(e, n, kr);
}
var lt = null, un = 0;
function Bt(e, t, r = null) {
  if (!e.equals(t)) {
    st ? Ce.set(e, t) : Ce.has(e) || Ce.set(e, e.v);
    var n = nt.ensure();
    if (n.capture(e, t), (e.f & W) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & L) !== 0 && Mn(s), B === null && Sn(s);
    }
    e.wv = Ws(), lt = null, un = 0, Os(e, L, r), lt = null, T !== null && (T.f & I) !== 0 && (T.f & (qe | ze)) === 0 && (fe === null ? qa([e]) : fe.push(e)), !n.is_fork && Rr.size > 0 && !As && _a();
  }
  return t;
}
function _a() {
  As = !1;
  for (const e of Rr) {
    (e.f & I) !== 0 && N(e, he);
    let t;
    try {
      t = mr(e);
    } catch {
      t = !0;
    }
    t && Yt(e);
  }
  Rr.clear();
}
function ir(e) {
  A(e, e.v + 1);
}
function Os(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var s = n.length;
    if (un += s, un > 1e5 && lt === null && (lt = /* @__PURE__ */ new Set()), lt !== null) {
      if (lt.has(e)) return;
      lt.add(e);
    }
    for (var i = 0; i < s; i++) {
      var l = n[i], a = l.f, f = (a & L) === 0;
      if (f && N(l, t), (a & Sr) !== 0)
        Rr.add(
          /** @type {Effect} */
          l
        );
      else if ((a & W) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        B == null || B.delete(u), Os(u, he, r);
      } else if (f) {
        var d = (
          /** @type {Effect} */
          l
        );
        (a & Ee) !== 0 && ye !== null && ye.add(d), r !== null ? r.push(d) : Rn(d);
      }
    }
  }
}
function St(e) {
  if (typeof e != "object" || e === null || $r in e || us in e)
    return e;
  const t = ls(e);
  if (t !== Mi && t !== Oi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = as(e), s = /* @__PURE__ */ Z(0), i = gt, l = (a) => {
    if (gt === i)
      return a();
    var f = x, u = gt;
    ve(null), Jn(i);
    var d = a();
    return ve(f), Jn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ Z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Zi();
        var d = r.get(f);
        return d === void 0 ? l(() => {
          var h = /* @__PURE__ */ Z(u.value);
          return r.set(f, h), h;
        }) : A(d, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in a) {
            const d = l(() => /* @__PURE__ */ Z(P));
            r.set(f, d), ir(s);
          }
        } else
          A(u, P), ir(s);
        return !0;
      },
      get(a, f, u) {
        var v;
        if (f === $r)
          return e;
        var d = r.get(f), h = f in a;
        if (d === void 0 && (!h || (v = At(a, f)) != null && v.writable) && (d = l(() => {
          var c = St(h ? a[f] : P), _ = /* @__PURE__ */ Z(c);
          return _;
        }), r.set(f, d)), d !== void 0) {
          var p = $(d);
          return p === P ? void 0 : p;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var p;
        (p = this.has) == null || p.call(this, a, f);
        var u = Reflect.getOwnPropertyDescriptor(a, f), d = r.get(f);
        if (d !== void 0) {
          var h = $(d);
          if (h === P)
            return;
          if (u && "value" in u)
            u.value = h;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        var p;
        if (f === $r)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== P || Reflect.has(a, f);
        if (u !== void 0 || T !== null && (!d || (p = At(a, f)) != null && p.writable)) {
          u === void 0 && (u = l(() => {
            var v = d ? St(a[f]) : P, c = /* @__PURE__ */ Z(v);
            return c;
          }), r.set(f, u));
          var h = $(u);
          if (h === P)
            return !1;
        }
        return d;
      },
      set(a, f, u, d) {
        var K;
        var h = r.get(f), p = f in a;
        if (n && f === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? A(c, P) : v in a && (c = l(() => /* @__PURE__ */ Z(P)), r.set(v + "", c));
          }
        if (h === void 0)
          (!p || (K = At(a, f)) != null && K.writable) && (h = l(() => /* @__PURE__ */ Z(void 0)), A(h, St(u)), r.set(f, h));
        else {
          p = h.v !== P;
          var _ = l(() => St(u));
          A(h, _);
        }
        var E = Reflect.getOwnPropertyDescriptor(a, f);
        if (E != null && E.set && E.set.call(d, u), !p) {
          if (n && typeof f == "string") {
            var k = (
              /** @type {Source<number>} */
              r.get("length")
            ), O = Number(f);
            Number.isInteger(O) && O >= k.v && A(k, O + 1);
          }
          ir(s);
        }
        return !0;
      },
      ownKeys(a) {
        $(s);
        var f = Reflect.ownKeys(a).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== P;
        });
        for (var [u, d] of r)
          d.v !== P && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Qi();
      }
    }
  );
}
var Kn, Rs, Cs, Ns;
function cn() {
  if (Kn === void 0) {
    Kn = window, Rs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Cs = At(t, "firstChild").get, Ns = At(t, "nextSibling").get, Un(e) && (e[Ii] = void 0, e[Er] = null, e[Fi] = void 0, e.__e = void 0), Un(r) && (r[Jt] = void 0);
  }
}
function Ne(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return (
    /** @type {TemplateNode | null} */
    Cs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return (
    /** @type {TemplateNode | null} */
    Ns.call(e)
  );
}
function Y(e, t) {
  if (!M)
    return /* @__PURE__ */ Ht(e);
  var r = /* @__PURE__ */ Ht(R);
  if (r === null)
    r = R.appendChild(Ne());
  else if (t && r.nodeType !== xn) {
    var n = Ne();
    return r == null || r.before(n), oe(n), n;
  }
  return t && Ps(
    /** @type {Text} */
    r
  ), oe(r), r;
}
function me(e, t = !1) {
  if (!M)
    return /* @__PURE__ */ Ht(e);
  var r = Y(e, t);
  return j(e), r;
}
function D(e, t = 1, r = !1) {
  let n = M ? R : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ We(n);
  if (!M)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== xn) {
      var i = Ne();
      return n === null ? s == null || s.after(i) : n.before(i), oe(i), i;
    }
    Ps(
      /** @type {Text} */
      n
    );
  }
  return oe(n), n;
}
function Ls(e) {
  e.textContent = "";
}
function Ds() {
  return !1;
}
function Cn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function Ps(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === xn; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function ga(e) {
  var t = T;
  if (t === null)
    return x.f |= et, e;
  if ((t.f & bt) === 0 && (t.f & It) === 0)
    throw e;
  Re(e, t);
}
function Re(e, t) {
  if (e === rt)
    throw e;
  if (!(t !== null && (t.f & V) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & sn) !== 0 && (t.f & (V | or)) === 0) {
        if ((t.f & bt) === 0)
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
}
function ma(e) {
  T === null && (x === null && Gi(), Ki()), st && Wi();
}
function ba(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Pe(e, t) {
  var r = T;
  r !== null && (r.f & J) !== 0 && (e |= J);
  var n = {
    ctx: z,
    deps: null,
    nodes: null,
    f: e | L | xe,
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
  };
  g == null || g.register_created_effect(n);
  var s = n;
  if ((e & It) !== 0)
    sr !== null ? sr.push(n) : nt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Yt(n);
    } catch (l) {
      throw X(n), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & yt) === 0 && (s = s.first, (e & Ee) !== 0 && (e & Ft) !== 0 && s !== null && (s.f |= Ft));
  }
  if (s !== null && (s.parent = r, r !== null && ba(s, r), x !== null && (x.f & W) !== 0 && (e & ze) === 0)) {
    var i = (
      /** @type {Derived} */
      x
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Nn() {
  return x !== null && !ke;
}
function Is(e) {
  const t = Pe(Ir, null);
  return N(t, I), t.teardown = e, t;
}
function ya(e) {
  ma();
  var t = (
    /** @type {Effect} */
    T.f
  ), r = !x && (t & qe) !== 0 && z !== null && !z.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      z
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Fs(e);
}
function Fs(e) {
  return Pe(It | Li, e);
}
function wa(e) {
  nt.ensure();
  const t = Pe(ze | yt, e);
  return () => {
    X(t);
  };
}
function $a(e) {
  nt.ensure();
  const t = Pe(ze | yt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? _t(t, () => {
      X(t), n(void 0);
    }) : (X(t), n(void 0));
  });
}
function js(e) {
  return Pe(It, e);
}
function Ea(e) {
  return Pe(Mt | yt, e);
}
function Br(e, t = 0) {
  return Pe(Ir | t, e);
}
function qt(e, t = [], r = [], n = []) {
  aa(n, t, r, (s) => {
    Pe(Ir, () => {
      e(...s.map($));
    });
  });
}
function Ln(e, t = 0) {
  var r = Pe(Ee | t, e);
  return r;
}
function de(e) {
  return Pe(qe | yt, e);
}
function Bs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = st, n = x;
    Gn(!0), ve(null);
    try {
      t.call(null);
    } catch (s) {
      Re(s, e.parent);
    } finally {
      Gn(r), ve(n);
    }
  }
}
function Dn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Ut(() => {
      s.abort(_r);
    });
    var n = r.next;
    (r.f & ze) !== 0 ? r.parent = null : X(r, t), r = n;
  }
}
function ka(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & qe) === 0 && X(t), t = r;
  }
}
function X(e, t = !0) {
  var r = !1;
  (t || (e.f & Ni) !== 0) && e.nodes !== null && e.nodes.end !== null && (xa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= or, Dn(e, t && !r), fr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Bs(e), e.f ^= or, e.f |= V;
  var s = e.parent;
  s !== null && s.first !== null && Hs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ We(e);
    e.remove(), e = r;
  }
}
function Hs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function _t(e, t, r = !0) {
  var n = [];
  e.f |= kn, Ys(e, n, !0);
  var s = () => {
    r && X(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function Ys(e, t, r) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & ze) === 0) {
        var l = (s.f & Ft) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (e.f & Ee) !== 0;
        Ys(s, t, l ? r : !1);
      }
      s = i;
    }
  }
}
function Cr(e) {
  e.f &= ~kn, Us(e, !0);
}
function Us(e, t) {
  if ((e.f & kn) === 0 && (e.f & J) !== 0) {
    e.f ^= J, (e.f & I) === 0 && (N(e, L), nt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Ft) !== 0 || (r.f & qe) !== 0;
      Us(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function Pn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ We(r);
      t.append(r), r = s;
    }
}
let st = !1;
function Gn(e) {
  st = e;
}
let x = null, ke = !1;
function ve(e) {
  x = e;
}
let T = null;
function De(e) {
  T = e;
}
let Le = null;
function Vs(e) {
  x !== null && ((x.f & Ar) !== 0 || (x.f & W) !== 0) && (Le ?? (Le = /* @__PURE__ */ new Set())).add(e);
}
let Q = null, le = 0, fe = null;
function qa(e) {
  fe = e;
}
let zs = 1, ft = 0, gt = ft;
function Jn(e) {
  gt = e;
}
function Ws() {
  return ++zs;
}
function mr(e) {
  var t = e.f;
  if ((t & L) !== 0)
    return !0;
  if ((t & he) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (mr(
        /** @type {Derived} */
        i
      ) && ws(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & xe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    B === null && N(e, I);
  }
  return !1;
}
function Ks(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Le !== null && Le.has(e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & W) !== 0 ? Ks(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? N(i, L) : (i.f & I) !== 0 && N(i, he), Rn(
        /** @type {Effect} */
        i
      ));
    }
}
function Gs(e) {
  var t = Q, r = le, n = fe, s = x, i = Le, l = z, a = ke, f = gt, u = e.f;
  Q = /** @type {null | Value[]} */
  null, le = 0, fe = null, x = (u & (qe | ze)) === 0 ? e : null, Le = null, jt(e.ctx), ke = !1, gt = ++ft, e.ac !== null && (Ut(() => {
    e.ac.abort(_r);
  }), e.ac = null);
  try {
    e.f |= Ar;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d();
    e.f |= bt;
    var p = Xn(e);
    if (_s() && fe !== null && !ke && p !== null && (e.f & (W | he | L)) === 0)
      for (var v = 0; v < /** @type {Source[]} */
      fe.length; v++)
        Ks(
          fe[v],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (ft++, s.deps !== null)
        for (let c = 0; c < r; c += 1)
          s.deps[c].rv = ft;
      if (t !== null)
        for (const c of t)
          c.rv = ft;
      fe !== null && (n === null ? n = fe : n.push(.../** @type {Source[]} */
      fe));
    }
    return (e.f & et) !== 0 && (e.f ^= et), h;
  } catch (c) {
    return Xn(e), ga(c);
  } finally {
    e.f ^= Ar, Q = t, le = r, fe = n, x = s, Le = i, jt(l), ke = a, gt = f;
  }
}
function Xn(e) {
  var s;
  var t = e.deps, r = g == null ? void 0 : g.is_fork;
  if (Q !== null) {
    var n;
    if (r || fr(e, le), t !== null && le > 0)
      for (t.length = le + Q.length, n = 0; n < Q.length; n++)
        t[le + n] = Q[n];
    else
      e.deps = t = Q;
    if (Nn() && (e.f & xe) !== 0)
      for (n = le; n < t.length; n++)
        ((s = t[n]).reactions ?? (s.reactions = [])).push(e);
  } else !r && t !== null && le < t.length && (fr(e, le), t.length = le);
  return t;
}
function Ta(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Si.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & W) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !ar.call(Q, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & xe) !== 0 && (i.f ^= xe), i.v !== P && Sn(i), i.ac !== null && Ut(() => {
      i.ac.abort(_r), i.ac = null, N(i, L);
    }), da(i), fr(i, 0);
  }
}
function fr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ta(e, r[n]);
}
function Yt(e) {
  var t = e.f;
  if ((t & V) === 0) {
    N(e, I);
    var r = T;
    T = e;
    try {
      (t & (Ee | fs)) !== 0 ? ka(e) : Dn(e), Bs(e);
      var n = Gs(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = zs;
      var s;
      is && ra && (e.f & L) !== 0 && e.deps;
    } finally {
      T = r;
    }
  }
}
async function Sa() {
  await Promise.resolve(), xs();
}
function $(e) {
  var t = e.f, r = (t & W) !== 0;
  if (x !== null && !ke) {
    var n = T !== null && (T.f & V) !== 0;
    if (!n && (Le === null || !Le.has(e))) {
      var s = x.deps;
      if ((x.f & Ar) !== 0)
        e.rv < ft && (e.rv = ft, Q === null && s !== null && s[le] === e ? le++ : Q === null ? Q = [e] : Q.push(e));
      else {
        x.deps ?? (x.deps = []), ar.call(x.deps, e) || x.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [x] : ar.call(i, x) || i.push(x);
      }
    }
  }
  if (st && Ce.has(e))
    return Ce.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (st) {
      var a = l.v;
      return ((l.f & I) === 0 && l.reactions !== null || Xs(l)) && (a = Mn(l)), Ce.set(l, a), a;
    }
    var f = (l.f & xe) === 0 && !ke && x !== null && (x.f & xe) !== 0, u = (l.f & bt) === 0;
    mr(l) && (f && (l.f |= xe), ws(l)), f && !u && ($s(l), Js(l));
  }
  if (B != null && B.has(e))
    return B.get(e);
  if ((e.f & et) !== 0)
    throw e.v;
  return e.v;
}
function Js(e) {
  if (e.f |= xe, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : ar.call(t, e) || t.push(e), (r.f & W) !== 0 && (r.f & xe) === 0 && ($s(
        /** @type {Derived} */
        r
      ), Js(
        /** @type {Derived} */
        r
      ));
    }
}
function Xs(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ce.has(t) || (t.f & W) !== 0 && Xs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Hr(e) {
  var t = ke;
  try {
    return ke = !0, e();
  } finally {
    ke = t;
  }
}
const ut = Symbol("events"), Zs = /* @__PURE__ */ new Set(), dn = /* @__PURE__ */ new Set();
function Aa(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || hn.call(t, i), !i.cancelBubble)
      return Ut(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (s.__removed = !1, Ve(() => {
    s.__removed || t.addEventListener(e, s, n);
  })) : t.addEventListener(e, s, n), s;
}
function Ma(e, t, r, n, s) {
  var i = { capture: n, passive: s }, l = Aa(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Is(() => {
    l.__removed = !0, t.removeEventListener(e, l, i);
  });
}
function Oa(e, t, r) {
  (t[ut] ?? (t[ut] = {}))[e] = r;
}
function Ra(e) {
  for (var t = 0; t < e.length; t++)
    Zs.add(e[t]);
  for (var r of dn)
    r(e);
}
let Xr = null, Zr = !1;
function hn(e) {
  var _, E;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Xr = e, Zr || (Zr = !0, setTimeout(() => {
    Zr = !1, Xr = null;
  }));
  var l = 0, a = Xr === e && e[ut];
  if (a) {
    var f = s.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ut] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    f <= u && (l = f);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    lr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = x, h = T;
    ve(null), De(null);
    try {
      for (var p, v = []; i !== null && i !== t; ) {
        try {
          var c = (E = i[ut]) == null ? void 0 : E[n];
          c != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && c.call(i, e);
        } catch (k) {
          p ? v.push(k) : p = k;
        }
        if (e.cancelBubble) break;
        l++, i = l < s.length ? (
          /** @type {Element} */
          s[l]
        ) : null;
      }
      if (p) {
        for (let k of v)
          queueMicrotask(() => {
            throw k;
          });
        throw p;
      }
    } finally {
      e[ut] = t, delete e.currentTarget, ve(d), De(h);
    }
  }
}
var ns;
const Qr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((ns = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ns.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ca(e) {
  return (
    /** @type {string} */
    (Qr == null ? void 0 : Qr.createHTML(e)) ?? e
  );
}
function Na(e) {
  var t = Cn("template");
  return t.innerHTML = Ca(e.replaceAll("<!>", "<!---->")), t.content;
}
function vn(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Ke(e, t) {
  var r = (t & qi) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (M)
      return vn(R, null), R;
    n === void 0 && (n = Na(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(n));
    var i = (
      /** @type {TemplateNode} */
      r || Rs ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return vn(i, i), i;
  };
}
function Se(e, t) {
  if (M) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      T
    );
    ((r.f & bt) === 0 || r.nodes.end === null) && (r.nodes.end = R), jr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const La = ["touchstart", "touchmove"];
function Da(e) {
  return La.includes(e);
}
function Pa(e) {
  let t = 0, r = mt(0), n;
  return () => {
    Nn() && ($(r), Br(() => (t === 0 && (n = Hr(() => e(() => ir(r)))), t += 1, () => {
      Ve(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, ir(r));
      });
    })));
  };
}
var Ia = Ft | yt;
function Fa(e, t, r, n) {
  new ja(e, t, r, n);
}
var ne, cr, ue, ht, U, se, G, ie, Me, vt, Qe, Pt, dr, hr, Be, Lr, q, Qs, ei, pn, Xe, ti, _n, er, xr, gn, mn;
class ja {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    w(this, q);
    /** @type {Boundary | null} */
    C(this, "parent");
    C(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    C(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, ne);
    /** @type {TemplateNode | null} */
    w(this, cr, M ? R : null);
    /** @type {BoundaryProps} */
    w(this, ue);
    /** @type {((anchor: Node) => void)} */
    w(this, ht);
    /** @type {Effect} */
    w(this, U);
    /** @type {Effect | null} */
    w(this, se, null);
    /** @type {Effect | null} */
    w(this, G, null);
    /** @type {Effect | null} */
    w(this, ie, null);
    /** @type {DocumentFragment | null} */
    w(this, Me, null);
    w(this, vt, 0);
    w(this, Qe, 0);
    w(this, Pt, !1);
    /** @type {Set<Effect>} */
    w(this, dr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, hr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, Be, null);
    w(this, Lr, Pa(() => (b(this, Be, mt(o(this, vt))), () => {
      b(this, Be, null);
    })));
    var i;
    b(this, ne, t), b(this, ue, r), b(this, ht, (l) => {
      var a = (
        /** @type {Effect} */
        T
      );
      a.b = this, a.f |= sn, n(l);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((l) => l), b(this, U, Ln(() => {
      if (M) {
        const l = qn(
          /** @type {TemplateNode} */
          o(this, cr)
        );
        jr();
        const a = l === $n;
        if (l.startsWith(Yn)) {
          const u = JSON.parse(l.slice(Yn.length));
          y(this, q, ei).call(this, u);
        } else a ? y(this, q, ti).call(this) : y(this, q, Qs).call(this);
      } else
        y(this, q, _n).call(this);
    }, Ia)), M && b(this, ne, R);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ms(t, o(this, dr), o(this, hr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    y(this, q, gn).call(this, t, r), b(this, vt, o(this, vt) + t), !(!o(this, Be) || o(this, Pt)) && (b(this, Pt, !0), Ve(() => {
      b(this, Pt, !1), o(this, Be) && Bt(o(this, Be), o(this, vt));
    }));
  }
  get_effect_pending() {
    return o(this, Lr).call(this), $(
      /** @type {Source<number>} */
      o(this, Be)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === rt || !o(this, ue).onerror && !o(this, ue).failed)
      throw t;
    g != null && g.is_fork ? (o(this, se) && g.skip_effect(o(this, se)), o(this, G) && g.skip_effect(o(this, G)), o(this, ie) && g.skip_effect(o(this, ie)), g.oncommit(() => {
      y(this, q, Xe).call(this) || y(this, q, mn).call(this, t);
    })) : y(this, q, mn).call(this, t);
  }
}
ne = new WeakMap(), cr = new WeakMap(), ue = new WeakMap(), ht = new WeakMap(), U = new WeakMap(), se = new WeakMap(), G = new WeakMap(), ie = new WeakMap(), Me = new WeakMap(), vt = new WeakMap(), Qe = new WeakMap(), Pt = new WeakMap(), dr = new WeakMap(), hr = new WeakMap(), Be = new WeakMap(), Lr = new WeakMap(), q = new WeakSet(), Qs = function() {
  try {
    b(this, se, de(() => o(this, ht).call(this, o(this, ne))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ei = function(t) {
  const r = o(this, ue).failed, { reset: n, invoke_onerror: s } = y(this, q, pn).call(this, t);
  Ve(s), r && b(this, ie, de(() => {
    r(
      o(this, ne),
      () => t,
      () => n
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
pn = function(t) {
  var r = !1, n = !1;
  const s = () => {
    if (!y(this, q, Xe).call(this)) {
      if (r) {
        Hi();
        return;
      }
      r = !0, n && ta(), o(this, ie) !== null && _t(o(this, ie), () => {
        b(this, ie, null);
      }), y(this, q, xr).call(this, () => {
        y(this, q, _n).call(this);
      });
    }
  };
  return { reset: s, invoke_onerror: () => {
    var l, a;
    if (!y(this, q, Xe).call(this))
      try {
        n = !0, (a = (l = o(this, ue)).onerror) == null || a.call(l, t, s), n = !1;
      } catch (f) {
        Re(f, o(this, U) && o(this, U).parent);
      }
  } };
}, Xe = function() {
  return (o(this, U).f & (V | or)) !== 0;
}, ti = function() {
  const t = o(this, ue).pending;
  t && (this.is_pending = !0, b(this, G, de(() => t(o(this, ne)))), Ve(() => {
    if (!y(this, q, Xe).call(this)) {
      var r = b(this, Me, document.createDocumentFragment()), n = Ne(), s = !1;
      if (r.append(n), b(this, se, y(this, q, xr).call(this, () => {
        try {
          return de(() => o(this, ht).call(this, n));
        } catch (i) {
          try {
            this.error(i), s = !0;
          } catch (l) {
            Re(l, o(this, U).parent);
          }
          return null;
        }
      })), o(this, se) === null) {
        b(this, Me, null), s && y(this, q, er).call(
          this,
          /** @type {Batch} */
          g
        );
        return;
      }
      o(this, Qe) === 0 && (o(this, ne).before(r), b(this, Me, null), _t(
        /** @type {Effect} */
        o(this, G),
        () => {
          b(this, G, null);
        }
      ), y(this, q, er).call(
        this,
        /** @type {Batch} */
        g
      ));
    }
  }));
}, _n = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Qe, 0), b(this, vt, 0), b(this, se, de(() => {
      o(this, ht).call(this, o(this, ne));
    })), o(this, Qe) > 0) {
      var t = b(this, Me, document.createDocumentFragment());
      Pn(o(this, se), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, ue).pending
      );
      b(this, G, de(() => r(o(this, ne))));
    } else
      y(this, q, er).call(
        this,
        /** @type {Batch} */
        g
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
er = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, dr), o(this, hr));
}, /**
 * @template T
 * @param {() => T} fn
 */
xr = function(t) {
  var r = T, n = x, s = z;
  De(o(this, U)), ve(o(this, U)), jt(o(this, U).ctx);
  try {
    return nt.ensure(), t();
  } finally {
    De(r), ve(n), jt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
gn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && y(n = this.parent, q, gn).call(n, t, r);
    return;
  }
  b(this, Qe, o(this, Qe) + t), o(this, Qe) === 0 && (y(this, q, er).call(this, r), o(this, G) && _t(o(this, G), () => {
    b(this, G, null);
  }), o(this, Me) && (o(this, ne).before(o(this, Me)), b(this, Me, null)));
}, /**
 * @param {unknown} error
 */
mn = function(t) {
  o(this, se) && (X(o(this, se)), b(this, se, null)), o(this, G) && (X(o(this, G)), b(this, G, null)), o(this, ie) && (X(o(this, ie)), b(this, ie, null)), M && (oe(
    /** @type {TemplateNode} */
    o(this, cr)
  ), cs(), oe(Mr()));
  let r = o(this, ue).failed;
  const n = (s) => {
    if (y(this, q, Xe).call(this)) return;
    const { reset: i, invoke_onerror: l } = y(this, q, pn).call(this, s);
    l(), r && !y(this, q, Xe).call(this) && b(this, ie, y(this, q, xr).call(this, () => {
      try {
        return de(() => {
          var a = (
            /** @type {Effect} */
            T
          );
          a.b = this, a.f |= sn, r(
            o(this, ne),
            () => s,
            () => i
          );
        });
      } catch (a) {
        return Re(
          a,
          /** @type {Effect} */
          o(this, U).parent
        ), null;
      }
    }));
  };
  Ve(() => {
    if (!y(this, q, Xe).call(this)) {
      var s;
      try {
        s = this.transform_error(t);
      } catch (i) {
        Re(i, o(this, U) && o(this, U).parent);
        return;
      }
      s !== null && typeof s == "object" && typeof /** @type {any} */
      s.then == "function" ? s.then(
        n,
        /** @param {unknown} e */
        (i) => Re(i, o(this, U) && o(this, U).parent)
      ) : n(s);
    }
  });
};
function be(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Jt] ?? (e[Jt] = e.nodeValue)) && (e[Jt] = r, e.nodeValue = `${r}`);
}
function ri(e, t) {
  return ni(e, t);
}
function Ba(e, t) {
  cn(), t.intro = t.intro ?? !1;
  const r = t.target, n = M, s = R;
  try {
    for (var i = /* @__PURE__ */ Ht(r); i && (i.nodeType !== gr || /** @type {Comment} */
    i.data !== ss); )
      i = /* @__PURE__ */ We(i);
    if (!i)
      throw rt;
    Ue(!0), oe(
      /** @type {Comment} */
      i
    );
    const l = ni(e, { ...t, anchor: i });
    return Ue(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== rt && console.warn("Failed to hydrate: ", l), t.recover === !1 && Xi(), cn(), Ls(r), Ue(!1), ri(e, t);
  } finally {
    Ue(n), oe(s);
  }
}
const yr = /* @__PURE__ */ new Map();
function ni(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  cn();
  var f = void 0, u = $a(() => {
    var d = r ?? t.appendChild(Ne());
    Fa(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        vs({});
        var c = (
          /** @type {ComponentContext} */
          z
        );
        if (i && (c.c = i), s && (n.$$events = s), M && vn(
          /** @type {TemplateNode} */
          v,
          null
        ), f = e(v, n) || Tn(), M && (T.nodes.end = R, R === null || R.nodeType !== gr || /** @type {Comment} */
        R.data !== En))
          throw Fr(), rt;
        ps();
      },
      a
    );
    var h = /* @__PURE__ */ new Set(), p = (v) => {
      for (var c = 0; c < v.length; c++) {
        var _ = v[c];
        if (!h.has(_)) {
          h.add(_);
          var E = Da(_);
          for (const K of [t, document]) {
            var k = yr.get(K);
            k === void 0 && (k = /* @__PURE__ */ new Map(), yr.set(K, k));
            var O = k.get(_);
            O === void 0 ? (K.addEventListener(_, hn, { passive: E }), k.set(_, 1)) : k.set(_, O + 1);
          }
        }
      }
    };
    return p(Pr(Zs)), dn.add(p), () => {
      var E;
      for (var v of h)
        for (const k of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            yr.get(k)
          ), _ = (
            /** @type {number} */
            c.get(v)
          );
          --_ == 0 ? (k.removeEventListener(v, hn), c.delete(v), c.size === 0 && yr.delete(k)) : c.set(v, _);
        }
      dn.delete(p), d !== r && ((E = d.parentNode) == null || E.removeChild(d));
    };
  });
  return bn.set(f, u), f;
}
let bn = /* @__PURE__ */ new WeakMap();
function Ha(e, t) {
  const r = bn.get(e);
  return r ? (bn.delete(e), r(t)) : Promise.resolve();
}
var $e, Oe, ae, pt, vr, pr, Dr;
class Ya {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    C(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, $e, /* @__PURE__ */ new Map());
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
    w(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, ae, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, pt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, vr, !0);
    /**
     * @param {Batch} batch
     */
    w(this, pr, (t) => {
      if (o(this, $e).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, $e).get(t)
        ), n = o(this, Oe).get(r);
        if (n)
          Cr(n), o(this, pt).delete(r);
        else {
          var s = o(this, ae).get(r);
          s && (Cr(s.effect), o(this, Oe).set(r, s.effect), o(this, ae).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, l] of o(this, $e)) {
          if (o(this, $e).delete(i), i === t)
            break;
          const a = o(this, ae).get(l);
          a && (X(a.effect), o(this, ae).delete(l));
        }
        for (const [i, l] of o(this, Oe)) {
          if (i === r || o(this, pt).has(i)) continue;
          const a = () => {
            if (Array.from(o(this, $e).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Pn(l, u), u.append(Ne()), o(this, ae).set(i, { effect: l, fragment: u });
            } else
              X(l);
            o(this, pt).delete(i), o(this, Oe).delete(i);
          };
          o(this, vr) || !n ? (o(this, pt).add(i), _t(l, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, Dr, (t) => {
      o(this, $e).delete(t);
      const r = Array.from(o(this, $e).values());
      for (const [n, s] of o(this, ae))
        r.includes(n) || (X(s.effect), o(this, ae).delete(n));
    });
    this.anchor = t, b(this, vr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      g
    ), s = Ds();
    if (r && !o(this, Oe).has(t) && !o(this, ae).has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = Ne();
        i.append(l), o(this, ae).set(t, {
          effect: de(() => r(l)),
          fragment: i
        });
      } else
        o(this, Oe).set(
          t,
          de(() => r(this.anchor))
        );
    if (o(this, $e).set(n, t), s) {
      for (const [a, f] of o(this, Oe))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of o(this, ae))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, pr)), n.ondiscard(o(this, Dr));
    } else
      M && (this.anchor = R), o(this, pr).call(this, n);
  }
}
$e = new WeakMap(), Oe = new WeakMap(), ae = new WeakMap(), pt = new WeakMap(), vr = new WeakMap(), pr = new WeakMap(), Dr = new WeakMap();
function Ua(e) {
  z === null && Ui(), ya(() => {
    const t = Hr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function wr(e, t, r = !1) {
  var n;
  M && (n = R, jr());
  var s = new Ya(e), i = r ? Ft : 0;
  function l(a, f) {
    if (M) {
      var u = qn(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(u.substring(1))) {
        var d = Mr();
        oe(d), s.anchor = d, Ue(!1), s.ensure(a, f), Ue(!0);
        return;
      }
    }
    s.ensure(a, f);
  }
  Ln(() => {
    var a = !1;
    t((f, u = 0) => {
      a = !0, l(u, f);
    }), a || l(-1, null);
  }, i);
}
function Va(e, t, r) {
  for (var n = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let h = t[a];
    _t(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            yn(e, Pr(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = n.length === 0 && r !== null && e.pending.size === 0;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Ls(d), d.append(u), e.items.clear();
    }
    yn(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function yn(e, t, r = !0) {
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
      i.f |= Ye;
      const l = document.createDocumentFragment();
      Pn(i, l);
    } else
      X(t[s], r);
  }
}
var Zn;
function Qn(e, t, r, n, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    l = M ? oe(/* @__PURE__ */ Ht(f)) : f.appendChild(Ne());
  }
  M && jr();
  var u = null, d = /* @__PURE__ */ ua(() => {
    var k = r();
    return (
      /** @type {V[]} */
      as(k) ? k : k == null ? [] : Pr(k)
    );
  }), h = /* @__PURE__ */ new Map(), p = !0;
  function v(k) {
    if ((E.effect.f & V) === 0) {
      E.pending.delete(k);
      var O = $(d);
      E.fallback = u, za(E, O, l, t, n), u !== null && (O.length === 0 ? (u.f & Ye) === 0 ? Cr(u) : (u.f ^= Ye, tr(u, null, l)) : _t(u, () => {
        u = null;
      }));
    }
  }
  function c(k) {
    E.pending.delete(k);
  }
  var _ = Ln(() => {
    var k = (
      /** @type {V[]} */
      $(d)
    ), O = k.length;
    let K = !1;
    if (M) {
      var Ie = qn(l) === $n;
      Ie !== (O === 0) && (l = Mr(), oe(l), Ue(!1), K = !0);
    }
    for (var pe = /* @__PURE__ */ new Set(), Te = (
      /** @type {Batch} */
      g
    ), wt = Ds(), _e = 0; _e < O; _e += 1) {
      M && R.nodeType === gr && /** @type {Comment} */
      R.data === En && (l = /** @type {Comment} */
      R, K = !0, Ue(!1));
      var ee = k[_e], it = n(ee, _e), m = p ? null : a.get(it);
      m ? (m.v && Bt(m.v, ee), m.i && Bt(m.i, _e), wt && Te.unskip_effect(m.e)) : (m = Wa(
        a,
        p ? l : Zn ?? (Zn = Ne()),
        ee,
        it,
        _e,
        s,
        t,
        r
      ), p || (m.e.f |= Ye), a.set(it, m)), pe.add(it);
    }
    if (O === 0 && i && !u && (p ? u = de(() => i(l)) : (u = de(() => i(Zn ?? (Zn = Ne()))), u.f |= Ye)), O > pe.size && zi(), M && O > 0 && oe(Mr()), !p)
      if (h.set(Te, pe), wt) {
        for (const [F, H] of a)
          pe.has(F) || Te.skip_effect(H.e);
        Te.oncommit(v), Te.ondiscard(c);
      } else
        v(Te);
    K && Ue(!0), $(d);
  }), E = { effect: _, items: a, pending: h, outrogroups: null, fallback: u };
  p = !1, M && (l = R);
}
function Gt(e) {
  for (; e !== null && (e.f & qe) === 0; )
    e = e.next;
  return e;
}
function za(e, t, r, n, s) {
  var _e;
  var i = t.length, l = e.items, a = Gt(e.effect.first), f, u = null, d = [], h = [], p, v, c, _;
  for (_ = 0; _ < i; _ += 1) {
    if (p = t[_], v = s(p, _), c = /** @type {EachItem} */
    l.get(v).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(c), ee.done.delete(c);
    if ((c.f & J) !== 0 && Cr(c), (c.f & Ye) !== 0)
      if (c.f ^= Ye, c === a)
        tr(c, null, r);
      else {
        var E = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Je(e, u, c), Je(e, c, E), tr(c, E, r), u = c, d = [], h = [], a = Gt(u.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (d.length < h.length) {
          var k = h[0], O;
          u = k.prev;
          var K = d[0], Ie = d[d.length - 1];
          for (O = 0; O < d.length; O += 1)
            tr(d[O], k, r);
          for (O = 0; O < h.length; O += 1)
            f.delete(h[O]);
          Je(e, K.prev, Ie.next), Je(e, u, K), Je(e, Ie, k), a = k, u = Ie, _ -= 1, d = [], h = [];
        } else
          f.delete(c), tr(c, a, r), Je(e, c.prev, c.next), Je(e, c, u === null ? e.effect.first : u.next), Je(e, u, c), u = c;
        continue;
      }
      for (d = [], h = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), h.push(a), a = Gt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ye) === 0 && d.push(c), u = c, a = Gt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (yn(e, Pr(ee.done)), (_e = e.outrogroups) == null || _e.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var pe = [];
    if (f !== void 0)
      for (c of f)
        (c.f & J) === 0 && pe.push(c);
    for (; a !== null; )
      (a.f & J) === 0 && a !== e.fallback && pe.push(a), a = Gt(a.next);
    var Te = pe.length;
    if (Te > 0) {
      var wt = i === 0 ? r : null;
      Va(e, pe, wt);
    }
  }
}
function Wa(e, t, r, n, s, i, l, a) {
  var f = (l & Ei) !== 0 ? (l & xi) === 0 ? /* @__PURE__ */ Ms(r, !1, !1) : mt(r) : null, u = (l & ki) !== 0 ? mt(s) : null;
  return {
    v: f,
    i: u,
    e: de(() => (i(t, f ?? r, u ?? s, a), () => {
      e.delete(n);
    }))
  };
}
function tr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(n)
      );
      if (i.before(n), n === s)
        return;
      n = l;
    }
}
function Je(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ka(e, t) {
  js(() => {
    var s, i;
    e = ((i = (s = T == null ? void 0 : T.parent) == null ? void 0 : s.nodes) == null ? void 0 : i.start) ?? e;
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
      const l = Cn("style");
      l.id = t.hash, l.textContent = t.code, n.appendChild(l);
    }
  });
}
const Ga = Symbol("is custom element"), Ja = Symbol("is html"), Xa = ji ? "link" : "LINK";
function Za(e) {
  if (M) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          wn(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          wn(e, "checked", null), e.checked = s;
        }
      }
    };
    e[rr] = r, Ve(r), bs();
  }
}
function wn(e, t, r, n) {
  var s = Qa(e);
  M && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Xa) || s[t] !== (s[t] = r) && (t === "loading" && (e[Pi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && el(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Qa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Er] ?? (e[Er] = {
      [Ga]: e.nodeName.includes("-"),
      [Ja]: e.namespaceURI === Ti
    })
  );
}
var es = /* @__PURE__ */ new Map();
function el(e) {
  var t = e.getAttribute("is") || e.nodeName, r = es.get(t);
  if (r) return r;
  es.set(t, r = /* @__PURE__ */ new Set());
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Ai(s);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    s = ls(s);
  }
  return r;
}
function tl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ia(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = en(e) ? tn(i) : i, r(i), g !== null && n.add(g), await Sa(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        l === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (M && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Hr(t) == null && e.value) && (r(en(e) ? tn(e.value) : e.value), g !== null && n.add(g)), Br(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        g
      );
      if (n.has(i))
        return;
    }
    en(e) && s === tn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function en(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function tn(e) {
  return e === "" ? null : +e;
}
function rn(e, t) {
  return e === t || (e == null ? void 0 : e[$r]) === t;
}
function rl(e = Tn(), t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    z.r
  ), i = (
    /** @type {Effect} */
    T
  );
  return js(() => {
    var l, a;
    return Br(() => {
      l = a, a = [], Hr(() => {
        rn(r(...a), e) || (t(e, ...a), l && rn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = i;
      for (; f !== s && f.parent !== null && f.parent.f & or; )
        f = f.parent;
      const u = () => {
        a && rn(r(...a), e) && t(null, ...a);
      }, d = f.teardown;
      f.teardown = () => {
        u(), d == null || d();
      };
    };
  }), e;
}
function nl(e) {
  return new sl(e);
}
var He, ce;
class sl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    w(this, He);
    /** @type {Record<string, any>} */
    w(this, ce);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (l, a) => {
      var f = /* @__PURE__ */ Ms(a, !1, !1);
      return r.set(l, f), f;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, a) {
          return $(r.get(a) ?? n(a, Reflect.get(l, a)));
        },
        has(l, a) {
          return a === Di ? !0 : ($(r.get(a) ?? n(a, Reflect.get(l, a))), Reflect.has(l, a));
        },
        set(l, a, f) {
          return A(r.get(a) ?? n(a, f), f), Reflect.set(l, a, f);
        }
      }
    );
    b(this, ce, (t.hydrate ? Ba : ri)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && xs(), b(this, He, s.$$events);
    for (const l of Object.keys(o(this, ce)))
      l === "$set" || l === "$destroy" || l === "$on" || lr(this, l, {
        get() {
          return o(this, ce)[l];
        },
        /** @param {any} value */
        set(a) {
          o(this, ce)[l] = a;
        },
        enumerable: !0
      });
    o(this, ce).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, o(this, ce).$destroy = () => {
      Ha(o(this, ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    o(this, ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    o(this, He)[t] = o(this, He)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return o(this, He)[t].push(n), () => {
      o(this, He)[t] = o(this, He)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    o(this, ce).$destroy();
  }
}
He = new WeakMap(), ce = new WeakMap();
let si;
typeof HTMLElement == "function" && (si = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    C(this, "$$ctor");
    /** Slots */
    C(this, "$$s");
    /** @type {any} The Svelte component instance */
    C(this, "$$c");
    /** Whether or not the custom element is connected */
    C(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    C(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    C(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    C(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    C(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    C(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    C(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    C(this, "$$shadowRoot", null);
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
          const a = Cn("slot");
          i !== "default" && (a.name = i), Se(l, a);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = il(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = qr(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = nl({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = wa(() => {
        Br(() => {
          var i;
          this.$$r = !0;
          for (const l of Tr(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = qr(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qr(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return Tr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function qr(e, t, r, n) {
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
function il(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function al(e, t, r, n, s, i) {
  let l = class extends si {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Tr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Tr(t).forEach((a) => {
    lr(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var h;
        f = qr(a, f, t), this.$$d[a] = f;
        var u = this.$$c;
        if (u) {
          var d = (h = At(u, a)) == null ? void 0 : h.get;
          d ? u[a] = f : u.$set({ [a]: f });
        }
      }
    });
  }), n.forEach((a) => {
    lr(l.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function ll() {
  return window;
}
function ol(e) {
  var t, r;
  (r = (t = ll()).setAccessToken) == null || r.call(t, e);
}
async function ii(e) {
  return (e.headers.get("content-type") || "").includes("application/json") ? await e.json() : {};
}
async function fl(e, t) {
  const r = await fetch(`${e.replace(/\/$/, "")}/login`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: t })
  }), n = await ii(r);
  return {
    ok: r.ok,
    status: r.status,
    data: n ?? null
  };
}
async function ul(e) {
  const t = await fetch(`${e.replace(/\/$/, "")}/refresh`, {
    method: "POST",
    credentials: "same-origin"
  }), r = await ii(t);
  return {
    ok: t.ok,
    status: t.status,
    data: r ?? null
  };
}
async function cl(e) {
  return fetch(`${e.replace(/\/$/, "")}/logout`, {
    method: "POST",
    credentials: "same-origin"
  });
}
const nn = "efsdb-bootstrap";
function dl() {
  var n;
  const e = document.getElementById(nn);
  if (!(e instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${nn}`);
  const t = ((n = e.textContent) == null ? void 0 : n.trim()) ?? "";
  if (t === "")
    throw new Error(`Empty bootstrap script: #${nn}`);
  const r = JSON.parse(t);
  if (!r || typeof r != "object")
    throw new Error("Invalid bootstrap payload");
  return r;
}
function hl(e) {
  const t = dl();
  if (t.app !== e)
    throw new Error(`Bootstrap app mismatch. Expected ${e}, received ${t.app}`);
  return t;
}
function vl() {
  return window;
}
function pl() {
  var t, r;
  const e = (r = (t = vl()).getEfsdbTheme) == null ? void 0 : r.call(t);
  return e === "light" || e === "green" ? e : "dark";
}
function _l(e) {
  const t = (r) => {
    const n = r.detail, s = n == null ? void 0 : n.theme;
    e(s === "light" || s === "green" ? s : "dark");
  };
  return window.addEventListener("efsdb-themechange", t), () => window.removeEventListener("efsdb-themechange", t);
}
var gl = /* @__PURE__ */ Ke('<div class="spinner svelte-1qud9af"><div class="bounce1 svelte-1qud9af"></div> <div class="bounce2 svelte-1qud9af"></div> <div class="bounce3 svelte-1qud9af"></div></div>'), ml = /* @__PURE__ */ Ke('<span class="tag svelte-1qud9af"> </span>'), bl = /* @__PURE__ */ Ke('<span class="tag accent svelte-1qud9af"> </span>'), yl = /* @__PURE__ */ Ke('<div class="detail-item full-width svelte-1qud9af"><div class="detail-label svelte-1qud9af">Available Display Modes</div> <div class="tags svelte-1qud9af"></div></div>'), wl = /* @__PURE__ */ Ke('<a class="btn btn-primary svelte-1qud9af">Open Admin</a>'), $l = /* @__PURE__ */ Ke('<div class="profile-card svelte-1qud9af"><div class="profile-header svelte-1qud9af"><div class="avatar svelte-1qud9af"> </div> <div class="user-info svelte-1qud9af"><h2 class="svelte-1qud9af"> </h2> <span class="badge svelte-1qud9af"> </span></div></div> <div class="details-grid svelte-1qud9af"><div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Account</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Actual Role</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">Display Mode</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item svelte-1qud9af"><div class="detail-label svelte-1qud9af">UID / GID</div> <span class="svelte-1qud9af"> </span></div> <div class="detail-item full-width svelte-1qud9af"><div class="detail-label svelte-1qud9af">Entitlements</div> <div class="tags svelte-1qud9af"></div></div> <!></div> <div class="actions svelte-1qud9af"><button class="btn btn-outline svelte-1qud9af" type="button">Logout</button> <!></div></div>'), El = /* @__PURE__ */ Ke('<div class="alert error svelte-1qud9af"> </div>'), kl = /* @__PURE__ */ Ke('<div class="login-card svelte-1qud9af"><div class="eyebrow svelte-1qud9af">EFSDB Access</div> <h2 class="svelte-1qud9af">Sign in with a provisioned login key.</h2> <p class="subtitle svelte-1qud9af">Use a tenant-admin or member login key created through bootstrap or the operator CLI. Public magic keys are disabled.</p> <!> <form class="svelte-1qud9af"><div class="form-group svelte-1qud9af"><label for="key" class="svelte-1qud9af">Login Key</label> <input type="password" id="key" placeholder="Paste tenant login key" required="" class="svelte-1qud9af"/></div> <button type="submit" class="btn btn-primary full-width svelte-1qud9af"> </button></form> <div class="hint svelte-1qud9af">Development may emit the initial tenant-admin key once in the server console. Production requires injected bootstrap material.</div></div>'), xl = /* @__PURE__ */ Ke('<div class="login-shell svelte-1qud9af"><!></div>');
const ql = {
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
function Tl(e, t) {
  var ee, it;
  vs(t, !0), Ka(e, ql);
  const r = hl("login"), n = (r.authBase ?? r.apiBase ?? "/_efsdb/api/auth").replace(/\/$/, ""), s = ((ee = r.urls) == null ? void 0 : ee.redirect) ?? "/_efsdb/admin", i = ((it = r.urls) == null ? void 0 : it.home) ?? "/_efsdb/control", l = t.$$host;
  let a = /* @__PURE__ */ Z(St(r.user ?? null)), f = /* @__PURE__ */ Z(!0), u = /* @__PURE__ */ Z(""), d = /* @__PURE__ */ Z(""), h = /* @__PURE__ */ Z(null), p = /* @__PURE__ */ Z(null);
  function v(m) {
    A(h, m, !0), ol(m);
  }
  function c(m) {
    l.dispatchEvent(new CustomEvent("authchange", {
      detail: { state: m, accessToken: $(h), user: $(a) },
      bubbles: !0,
      composed: !0
    }));
  }
  function _(m) {
    l.setAttribute("theme", m);
  }
  async function E() {
    const m = await ul(n);
    return !m.ok || !m.data ? (v(null), A(a, null), c("logged_out"), !1) : (A(a, m.data.user ?? null, !0), v(typeof m.data.accessToken == "string" ? m.data.accessToken : null), $(a) && $(h) ? (c("authenticated"), !0) : (c("logged_out"), !1));
  }
  async function k() {
    A(f, !0), A(u, "");
    try {
      await E();
    } catch (m) {
      console.error(m), v(null), A(a, null), c("logged_out");
    } finally {
      A(f, !1), $(a) || requestAnimationFrame(() => {
        var m;
        return (m = $(p)) == null ? void 0 : m.focus();
      });
    }
  }
  async function O() {
    var m;
    A(f, !0), A(u, "");
    try {
      const F = await fl(n, $(d)), H = F.data;
      if (!F.ok || !H || typeof H.accessToken != "string" || !H.user) {
        A(u, ((m = H == null ? void 0 : H.error) == null ? void 0 : m.message) || "Login failed", !0), A(f, !1);
        return;
      }
      const at = H;
      if (A(a, at.user, !0), v(at.accessToken), c("authenticated"), s.trim() !== "") {
        window.location.assign(s);
        return;
      }
    } catch (F) {
      console.error(F), A(u, "Network error");
    }
    A(f, !1);
  }
  async function K() {
    A(f, !0), A(u, "");
    try {
      await cl(n);
    } catch (m) {
      console.error(m);
    } finally {
      v(null), A(a, null), A(d, ""), c("logged_out"), A(f, !1), requestAnimationFrame(() => {
        var m;
        return (m = $(p)) == null ? void 0 : m.focus();
      }), i.trim() !== "" && window.location.assign(i);
    }
  }
  Ua(() => {
    _(pl());
    const m = _l((F) => {
      _(F);
    });
    return k(), () => {
      m();
    };
  });
  var Ie = xl(), pe = Y(Ie);
  {
    var Te = (m) => {
      var F = gl();
      Se(m, F);
    }, wt = (m) => {
      var F = $l(), H = Y(F), at = Y(H), Vt = me(at, !0), $t = D(at, 2), Et = Y($t), br = me(Et, !0), Yr = D(Et, 2), ge = me(Yr, !0);
      j($t), j(H);
      var kt = D(H, 2), zt = Y(kt), ai = D(Y(zt), 2), li = me(ai, !0);
      j(zt);
      var Ur = D(zt, 2), oi = D(Y(Ur), 2), fi = me(oi, !0);
      j(Ur);
      var Vr = D(Ur, 2), ui = D(Y(Vr), 2), ci = me(ui, !0);
      j(Vr);
      var zr = D(Vr, 2), di = D(Y(zr), 2), hi = me(di);
      j(zr);
      var Wr = D(zr, 2), In = D(Y(Wr), 2);
      Qn(In, 20, () => $(a).entitlements || [], (te) => te, (te, Ge) => {
        var Wt = ml(), Kt = me(Wt, !0);
        qt(() => be(Kt, Ge)), Se(te, Wt);
      }), j(In), j(Wr);
      var vi = D(Wr, 2);
      {
        var pi = (te) => {
          var Ge = yl(), Wt = D(Y(Ge), 2);
          Qn(Wt, 20, () => $(a).availableDisplayModes || [], (Kt) => Kt, (Kt, bi) => {
            var Bn = bl(), yi = me(Bn, !0);
            qt(() => be(yi, bi)), Se(Kt, Bn);
          }), j(Wt), j(Ge), Se(te, Ge);
        };
        wr(vi, (te) => {
          ($(a).availableDisplayModes || []).length > 1 && te(pi);
        });
      }
      j(kt);
      var Fn = D(kt, 2), jn = Y(Fn), _i = D(jn, 2);
      {
        var gi = (te) => {
          var Ge = wl();
          qt(() => wn(Ge, "href", s)), Se(te, Ge);
        }, mi = /* @__PURE__ */ fa(() => s.trim() !== "");
        wr(_i, (te) => {
          $(mi) && te(gi);
        });
      }
      j(Fn), j(F), qt(
        (te) => {
          be(Vt, te), be(br, $(a).username), be(ge, $(a).role), be(li, $(a).id), be(fi, $(a).actualRole), be(ci, $(a).displayMode || $(a).role), be(hi, `${$(a).uid ?? "n/a" ?? ""} / ${$(a).gid ?? "n/a" ?? ""}`);
        },
        [() => $(a).username.charAt(0).toUpperCase()]
      ), Oa("click", jn, K), Se(m, F);
    }, _e = (m) => {
      var F = kl(), H = D(Y(F), 6);
      {
        var at = (ge) => {
          var kt = El(), zt = me(kt, !0);
          qt(() => be(zt, $(u))), Se(ge, kt);
        };
        wr(H, (ge) => {
          $(u) && ge(at);
        });
      }
      var Vt = D(H, 2), $t = Y(Vt), Et = D(Y($t), 2);
      Za(Et), rl(Et, (ge) => A(p, ge), () => $(p)), j($t);
      var br = D($t, 2), Yr = me(br, !0);
      j(Vt), cs(2), j(F), qt(() => {
        br.disabled = $(f), be(Yr, $(f) ? "Authenticating..." : "Login");
      }), Ma("submit", Vt, (ge) => {
        ge.preventDefault(), O();
      }), tl(Et, () => $(d), (ge) => A(d, ge)), Se(m, F);
    };
    wr(pe, (m) => {
      $(f) ? m(Te) : $(a) ? m(wt, 1) : m(_e, -1);
    });
  }
  j(Ie), Se(e, Ie), ps();
}
Ra(["click"]);
customElements.define("efsdb-login", al(Tl, {}, [], [], { mode: "open" }));
