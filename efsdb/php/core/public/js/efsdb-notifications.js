var td = Object.defineProperty;
var Na = (e) => {
  throw TypeError(e);
};
var rd = (e, t, r) => t in e ? td(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => rd(e, typeof t != "symbol" ? t + "" : t, r), go = (e, t, r) => t.has(e) || Na("Cannot " + r);
var h = (e, t, r) => (go(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (go(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), z = (e, t, r) => (go(e, t, "access private method"), r);
var ws;
typeof window < "u" && ((ws = window.__svelte ?? (window.__svelte = {})).v ?? (ws.v = /* @__PURE__ */ new Set())).add("5");
const nd = 1, id = 2, ms = 4, od = 8, ad = 16, sd = 1, ld = 4, dd = 8, cd = 16, hd = 1, wd = 2, gs = "[", Xo = "[!", Ha = "[?", Ko = "]", jr = {}, _e = Symbol("uninitialized"), ud = "http://www.w3.org/1999/xhtml", ps = !1;
var vs = Array.isArray, fd = Array.prototype.indexOf, Un = Array.prototype.includes, Di = Array.from, _i = Object.keys, vn = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, md = Object.getOwnPropertyDescriptors, gd = Object.prototype, pd = Array.prototype, bs = Object.getPrototypeOf, Fa = Object.isExtensible;
const kr = () => {
};
function vd(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ys() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const Le = 2, bn = 4, Ni = 8, ks = 1 << 24, St = 16, Tt = 32, nr = 64, zo = 128, Jo = 256, zt = 512, Se = 1024, ve = 2048, gt = 4096, Ve = 8192, Re = 16384, Xr = 32768, Yn = 1 << 25, Yr = 65536, Si = 1 << 17, bd = 1 << 18, Kr = 1 << 19, yd = 1 << 20, At = 1 << 25, Mi = 1 << 21, ln = 1 << 22, xr = 1 << 23, Nn = Symbol("$state"), xs = Symbol("component"), qs = Symbol("legacy props"), kd = Symbol(""), yi = Symbol("attributes"), To = Symbol("class"), $o = Symbol("style"), In = Symbol("text"), ii = new class extends Error {
  constructor() {
    super(...arguments);
    ae(this, "name", "StaleReactionError");
    ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var us;
const xd = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((us = globalThis.document) != null && us.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Hi = 3, oi = 8;
function qd() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Fi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function jd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let G = !1;
function er(e) {
  G = e;
}
let N;
function Ke(e) {
  if (e === null)
    throw Fi(), jr;
  return N = e;
}
function Vi() {
  return Ke(/* @__PURE__ */ Wt(N));
}
function D(e) {
  if (G) {
    if (/* @__PURE__ */ Wt(N) !== null)
      throw Fi(), jr;
    N = e;
  }
}
function _d(e = 1) {
  if (G) {
    for (var t = e, r = N; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(r);
    N = r;
  }
}
function zi(e = !0) {
  for (var t = 0, r = N; ; ) {
    if (r.nodeType === oi) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Ko) {
        if (t === 0) return r;
        t -= 1;
      } else (n === gs || n === Xo || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(r)
    );
    e && r.remove(), r = i;
  }
}
function Qo(e) {
  if (!e || e.nodeType !== oi)
    throw Fi(), jr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function js(e) {
  return e === this.v;
}
function _s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ss(e) {
  return !_s(e, this.v);
}
function Sd(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Md() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zd(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Td(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function $d() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ed(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Cd(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Id() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ad() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ld() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Od = !1, Ae = null;
function yn(e) {
  Ae = e;
}
function Gi(e, t = !1, r) {
  Ae = {
    p: Ae,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      B
    ),
    l: null
  };
}
function Ui(e) {
  var t = (
    /** @type {ComponentContext} */
    Ae
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Gs(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ae = t.p, ea(e);
}
function ea(e = {}) {
  return vn(e, xs, { value: !0 }), e;
}
function Ms() {
  return !0;
}
let Ir = [];
function zs() {
  var e = Ir;
  Ir = [], vd(e);
}
function tr(e) {
  if (Ir.length === 0 && !Hn) {
    var t = Ir;
    queueMicrotask(() => {
      t === Ir && zs();
    });
  }
  Ir.push(e);
}
function Wd() {
  for (; Ir.length > 0; )
    zs();
}
const Dd = -7169;
function me(e, t) {
  e.f = e.f & Dd | t;
}
function ta(e) {
  (e.f & zt) !== 0 || e.deps === null ? me(e, Se) : me(e, gt);
}
function Ts(e, t, r) {
  (e.f & ve) !== 0 ? t.add(e) : (e.f & gt) !== 0 && r.add(e), me(e, Se);
}
function ai(e) {
  var t = O, r = B;
  bt(null), Ot(null);
  try {
    return e();
  } finally {
    bt(t), Ot(r);
  }
}
function Nd(e, t, r, n) {
  const i = Zn;
  var o = e.filter((f) => !f.settled), s = t.map(i);
  if (r.length === 0 && o.length === 0) {
    n(s);
    return;
  }
  var l = (
    /** @type {Effect} */
    B
  ), d = Hd(), w = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((f) => f.promise)) : null;
  function u(f) {
    if ((l.f & Re) === 0) {
      d();
      try {
        n([...s, ...f]);
      } catch (g) {
        It(g, l);
      }
      Ti();
    }
  }
  var m = $s();
  if (r.length === 0) {
    w.then(() => u([])).finally(m);
    return;
  }
  function b() {
    Promise.all(r.map((f) => /* @__PURE__ */ Fd(f))).then(u).catch((f) => It(f, l)).finally(m);
  }
  w ? w.then(() => {
    if ((l.f & Re) !== 0) {
      m();
      return;
    }
    d(), b(), Ti();
  }) : b();
}
function Hd() {
  var e = (
    /** @type {Effect} */
    B
  ), t = O, r = Ae, n = (
    /** @type {Batch} */
    P
  );
  return function(o = !0) {
    Ot(e), bt(t), yn(r), o && (e.f & Re) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Ti(e = !0) {
  Ot(null), bt(null), yn(null), e && (P == null || P.deactivate());
}
function $s() {
  var e = (
    /** @type {Effect} */
    B
  ), t = e.b, r = (
    /** @type {Batch} */
    P
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  var t = Le | ve;
  return B !== null && (B.f |= Kr), {
    ctx: Ae,
    deps: null,
    effects: null,
    equals: js,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      _e
    ),
    wv: 0,
    parent: B,
    ac: null
  };
}
const An = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Fd(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    B
  );
  n === null && Md();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Zr(
    /** @type {V} */
    _e
  ), s = !O, l = /* @__PURE__ */ new Set();
  return rc(() => {
    var f, g;
    var d = (
      /** @type {Effect} */
      B
    ), w = ys();
    i = w.promise;
    try {
      Promise.resolve(e()).then(w.resolve, (y) => {
        y !== ii && w.reject(y);
      }).finally(Ti);
    } catch (y) {
      w.reject(y), Ti();
    }
    var u = (
      /** @type {Batch} */
      P
    );
    if (s) {
      if ((d.f & Xr) !== 0)
        var m = $s();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (f = n.b) != null && f.is_rendered()
      )
        (g = u.async_deriveds.get(d)) == null || g.reject(An);
      else
        for (const y of l.values())
          y.reject(An);
      l.add(w), u.async_deriveds.set(d, w);
    }
    const b = (y, v = void 0) => {
      m == null || m(), l.delete(w), v !== An && (u.activate(), v ? (o.f |= xr, kn(o, v)) : ((o.f & xr) !== 0 && (o.f ^= xr), kn(o, y)), u.deactivate());
    };
    w.promise.then(b, (y) => b(null, y || "unknown"));
  }), da(() => {
    for (const d of l)
      d.reject(An);
  }), new Promise((d) => {
    function w(u) {
      function m() {
        u === i ? d(o) : w(i);
      }
      u.then(m, m);
    }
    w(i);
  });
}
// @__NO_SIDE_EFFECTS__
function E(e) {
  const t = /* @__PURE__ */ Zn(e);
  return Ks(t), t;
}
// @__NO_SIDE_EFFECTS__
function Es(e) {
  const t = /* @__PURE__ */ Zn(e);
  return t.equals = Ss, t;
}
function Vd(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ge(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ra(e) {
  var t, r = B, n = e.parent;
  if (!ir && n !== null && e.v !== _e && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Re | Ve)) !== 0)
    return qd(), e.v;
  Ot(n);
  try {
    Vd(e), t = tl(e);
  } finally {
    Ot(r);
  }
  return t;
}
function Ps(e) {
  var t = ra(e);
  if (!e.equals(t) && (e.wv = Qs(), (!(P != null && P.is_fork) || e.deps === null) && (P !== null ? (P.capture(e, t, !0), qr == null || qr.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    me(e, Se);
    return;
  }
  ir || (Pe !== null ? (la() || P != null && P.is_fork) && Pe.set(e, t) : ta(e));
}
function Gd(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && ai(() => {
        r.ac.abort(ii), r.ac = null;
      }), r.fn !== null && (r.teardown = kr), Xn(r, 0), wa(r));
}
function Rs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && xn(t);
}
let po = null, on = null, P = null, qr = null, Pe = null, Eo = null, Hn = !1, vo = !1, Fn = null, ki = null;
var Va = 0;
let Ud = 1;
var cn, vr, Or, hn, wn, un, Zt, fn, nt, Kn, Xt, jt, Pt, mn, Wr, U, Po, Ro, Ln, Co, Cs, Is, sn, Yd, Bn;
const Ai = class Ai {
  constructor() {
    $(this, U);
    ae(this, "id", Ud++);
    /** True as soon as `#process` was called */
    $(this, cn, !1);
    ae(this, "linked", !0);
    /** @type {Batch | null} */
    $(this, vr, null);
    /** @type {Batch | null} */
    $(this, Or, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ae(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ae(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ae(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, hn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, wn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, un, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    $(this, Zt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, fn, null);
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
    $(this, nt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    $(this, Kn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, Xt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, jt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, Pt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    $(this, mn, /* @__PURE__ */ new Set());
    ae(this, "is_fork", !1);
    $(this, Wr, !1);
    on === null ? po = on = this : (M(on, Or, this), M(this, vr, on)), on = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    h(this, Pt).has(t) || h(this, Pt).set(t, { d: [], m: [] }), h(this, mn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = h(this, Pt).get(t);
    if (n) {
      h(this, Pt).delete(t);
      for (var i of n.d)
        me(i, ve), r(i);
      for (i of n.m)
        me(i, gt), r(i);
    }
    h(this, mn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== _e && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & xr) === 0 && (this.current.set(t, [r, n]), Pe == null || Pe.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    P = this;
  }
  deactivate() {
    P = null, Pe = null;
  }
  flush() {
    try {
      vo = !0, P = this, z(this, U, Ln).call(this);
    } finally {
      Va = 0, Eo = null, Fn = null, ki = null, vo = !1, P = null, Pe = null, Lt.clear();
    }
  }
  discard() {
    var t;
    for (const r of h(this, wn)) r(this);
    h(this, wn).clear();
    for (const r of this.async_deriveds.values())
      r.reject(An);
    z(this, U, Bn).call(this), (t = h(this, fn)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    h(this, Kn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (M(this, un, h(this, un) + 1), t) {
      let n = h(this, Zt).get(r) ?? 0;
      h(this, Zt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (M(this, un, h(this, un) - 1), t) {
      let n = h(this, Zt).get(r) ?? 0;
      n === 1 ? h(this, Zt).delete(r) : h(this, Zt).set(r, n - 1);
    }
    h(this, Wr) || (M(this, Wr, !0), tr(() => {
      M(this, Wr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      h(this, Xt).add(n);
    for (const n of r)
      h(this, jt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    h(this, hn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    h(this, wn).add(t);
  }
  settled() {
    return (h(this, fn) ?? M(this, fn, ys())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new Ai();
      !vo && !Hn && tr(() => {
        h(t, cn) || t.flush();
      });
    }
    return P;
  }
  apply() {
    {
      Pe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (Eo = t, (r = t.b) != null && r.is_pending && (t.f & (bn | Ni | ks)) !== 0 && (t.f & Xr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    h(this, nt).push(t);
  }
};
cn = new WeakMap(), vr = new WeakMap(), Or = new WeakMap(), hn = new WeakMap(), wn = new WeakMap(), un = new WeakMap(), Zt = new WeakMap(), fn = new WeakMap(), nt = new WeakMap(), Kn = new WeakMap(), Xt = new WeakMap(), jt = new WeakMap(), Pt = new WeakMap(), mn = new WeakMap(), Wr = new WeakMap(), U = new WeakSet(), Po = function() {
  if (this.is_fork) return !0;
  for (const n of h(this, Zt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (h(this, Pt).has(t)) {
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
Ro = function() {
  var t = [];
  for (const o of h(this, nt))
    if (!((o.f & Re) !== 0 || (o.f & (ve | gt)) === 0)) {
      for (var r = o, n = !1; r.parent !== null; ) {
        r = r.parent;
        var i = r.f;
        if ((i & (nr | Tt)) !== 0) {
          if ((i & Se) === 0) {
            n = !0;
            break;
          }
          r.f ^= Se;
        }
      }
      n || t.push(r);
    }
  return M(this, nt, []), t;
}, Ln = function() {
  var l, d, w, u;
  M(this, cn, !0);
  for (const m of h(this, Xt))
    h(this, jt).delete(m), me(m, ve), this.schedule(m);
  for (const m of h(this, jt))
    me(m, gt), this.schedule(m);
  this.apply();
  for (var t = Fn = [], r = [], n = ki = []; h(this, nt).length > 0; ) {
    Va++ > 1e3 && (z(this, U, Bn).call(this), Zd());
    for (const m of z(this, U, Ro).call(this))
      try {
        z(this, U, Co).call(this, m, t, r);
      } catch (b) {
        throw Bs(m), z(this, U, Po).call(this) || this.discard(), b;
      }
  }
  if (P = null, n.length > 0) {
    var i = Ai.ensure();
    for (const m of n)
      i.schedule(m);
  }
  if (Fn = null, ki = null, z(this, U, Po).call(this)) {
    z(this, U, sn).call(this, r), z(this, U, sn).call(this, t);
    for (const [m, b] of h(this, Pt))
      Ls(m, b);
    n.length > 0 && /** @type {unknown} */
    z(l = P, U, Ln).call(l);
    return;
  }
  const o = z(this, U, Cs).call(this);
  if (o) {
    z(this, U, sn).call(this, r), z(this, U, sn).call(this, t), z(d = o, U, Is).call(d, this);
    return;
  }
  h(this, Xt).clear(), h(this, jt).clear();
  for (const m of h(this, hn)) m(this);
  h(this, hn).clear(), qr = this, Ga(r), Ga(t), qr = null, (w = h(this, fn)) == null || w.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    P
  );
  if (h(this, un) === 0 && (h(this, nt).length === 0 || s !== null) && z(this, U, Bn).call(this), h(this, nt).length > 0)
    if (s !== null) {
      for (const m of h(this, nt))
        h(s, nt).push(m);
      M(this, nt, []);
    } else
      s = this;
  s !== null && (Lt.clear(), z(u = s, U, Ln).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Co = function(t, r, n) {
  t.f ^= Se;
  for (var i = t.first; i !== null; ) {
    var o = i.f, s = (o & (Tt | nr)) !== 0, l = s && (o & Se) !== 0, d = l || (o & Ve) !== 0 || h(this, Pt).has(i);
    if (!d && i.fn !== null) {
      s ? i.f ^= Se : (o & bn) !== 0 ? r.push(i) : si(i) && ((o & St) !== 0 && h(this, jt).add(i), xn(i));
      var w = i.first;
      if (w !== null) {
        i = w;
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
}, Cs = function() {
  for (var t = h(this, vr); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = h(t, vr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Is = function(t) {
  var n;
  for (const [i, o] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, o);
  for (const [i, o] of t.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && o.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(h(t, Xt), h(t, jt));
  const r = (i) => {
    var o = i.reactions;
    if (o !== null && !((i.f & Le) !== 0 && (i.f & (ve | gt)) === 0))
      for (const d of o) {
        var s = d.f;
        if ((s & Le) !== 0)
          r(
            /** @type {Derived} */
            d
          );
        else {
          var l = (
            /** @type {Effect} */
            d
          );
          s & (ln | St) && !this.async_deriveds.has(l) && (h(this, jt).delete(l), me(l, ve), this.schedule(l));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), z(n = t, U, Bn).call(n), P = this, z(this, U, Ln).call(this);
}, /**
 * @param {Effect[]} effects
 */
sn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ts(t[r], h(this, Xt), h(this, jt));
}, Yd = function() {
  var m, b;
  for (let f = po; f !== null; f = h(f, Or)) {
    var t = f.id < this.id, r = [];
    for (const [g, [y, v]] of this.current) {
      if (f.current.has(g)) {
        var n = (
          /** @type {[any, boolean]} */
          f.current.get(g)[0]
        );
        if (t && y !== n)
          f.current.set(g, [y, v]);
        else
          continue;
      }
      r.push(g);
    }
    if (t)
      for (const [g, y] of this.async_deriveds) {
        const v = f.async_deriveds.get(g);
        v && y.promise.then(v.resolve).catch(v.reject);
      }
    var i = [...f.current.keys()].filter(
      (g) => !/** @type {[any, boolean]} */
      f.current.get(g)[1]
    );
    if (!(!h(f, cn) || i.length === 0)) {
      var o = i.filter((g) => !this.current.has(g));
      if (o.length === 0)
        t && f.discard();
      else if (r.length > 0) {
        if (t)
          for (const g of h(this, mn))
            f.unskip_effect(g, (y) => {
              var v;
              (y.f & (St | ln)) !== 0 ? f.schedule(y) : z(v = f, U, sn).call(v, [y]);
            });
        f.activate();
        var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var d of r)
          As(d, o, s, l);
        l = /* @__PURE__ */ new Map();
        var w = [...f.current].filter(([g, y]) => {
          const v = this.current.get(g);
          return v ? v[0] !== y[0] || v[1] !== y[1] : !0;
        }).map(([g]) => g);
        if (w.length > 0)
          for (const g of h(this, Kn))
            (g.f & (Re | Ve | Si)) === 0 && na(g, w, l) && ((g.f & (ln | St)) !== 0 ? (me(g, ve), f.schedule(g)) : h(f, Xt).add(g));
        if (h(f, nt).length > 0 && !h(f, Wr)) {
          f.apply();
          for (var u of z(m = f, U, Ro).call(m))
            z(b = f, U, Co).call(b, u, [], []);
        }
        f.deactivate();
      }
    }
  }
}, Bn = function() {
  if (this.linked) {
    var t = h(this, vr), r = h(this, Or);
    t === null ? po = r : M(t, Or, r), r === null ? on = t : M(r, vr, t), this.linked = !1;
  }
};
let _r = Ai;
function C(e) {
  var t = Hn, r = qr;
  qr = null, Hn = !0;
  try {
    for (var n; ; ) {
      if (Wd(), P === null)
        return (
          /** @type {T} */
          n
        );
      P.flush();
    }
  } finally {
    Hn = t, qr = r;
  }
}
function Zd() {
  try {
    Pd();
  } catch (e) {
    It(e, Eo);
  }
}
let qt = null;
function Ga(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Re | Ve)) === 0 && si(n) && (qt = /* @__PURE__ */ new Set(), xn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ys(n), (qt == null ? void 0 : qt.size) > 0)) {
        Lt.clear();
        for (const i of qt) {
          if ((i.f & (Re | Ve)) !== 0) continue;
          const o = [i];
          let s = i.parent;
          for (; s !== null; )
            qt.has(s) && (qt.delete(s), o.push(s)), s = s.parent;
          for (let l = o.length - 1; l >= 0; l--) {
            const d = o[l];
            (d.f & (Re | Ve)) === 0 && xn(d);
          }
        }
        qt.clear();
      }
    }
    qt = null;
  }
}
function As(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & Le) !== 0 ? As(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (ln | St)) !== 0 && (o & ve) === 0 && na(i, t, n) && (me(i, ve), ia(
        /** @type {Effect} */
        i
      ));
    }
}
function na(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Un.call(t, i))
        return !0;
      if ((i.f & Le) !== 0 && na(
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
function ia(e) {
  P.schedule(e);
}
function Ls(e, t) {
  if (!((e.f & Tt) !== 0 && (e.f & Se) !== 0)) {
    (e.f & ve) !== 0 ? t.d.push(e) : (e.f & gt) !== 0 && t.m.push(e), me(e, Se);
    for (var r = e.first; r !== null; )
      Ls(r, t), r = r.next;
  }
}
function Bs(e) {
  me(e, Se);
  for (var t = e.first; t !== null; )
    Bs(t), t = t.next;
}
let $i = /* @__PURE__ */ new Set();
const Lt = /* @__PURE__ */ new Map();
let Os = !1;
function Zr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: js,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  const r = Zr(e);
  return Ks(r), r;
}
// @__NO_SIDE_EFFECTS__
function oa(e, t = !1, r = !0) {
  const n = Zr(e);
  return t || (n.equals = Ss), n;
}
function q(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mt || (O.f & Si) !== 0) && Ms() && (O.f & (Le | St | ln | Si)) !== 0 && (Bt === null || !Bt.has(e)) && Ld();
  let n = r ? Ar(t) : t;
  return kn(e, n, ki);
}
var Cr = null, Io = 0;
function kn(e, t, r = null) {
  if (!e.equals(t)) {
    ir ? Lt.set(e, t) : Lt.has(e) || Lt.set(e, e.v);
    var n = _r.ensure();
    if (n.capture(e, t), (e.f & Le) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ve) !== 0 && ra(i), Pe === null && ta(i);
    }
    e.wv = Qs(), Cr = null, Io = 0, Ws(e, ve, r), Cr = null, B !== null && (B.f & Se) !== 0 && (B.f & (Tt | nr)) === 0 && (wt === null ? oc([e]) : wt.push(e)), !n.is_fork && $i.size > 0 && !Os && Xd();
  }
  return t;
}
function Xd() {
  Os = !1;
  for (const e of $i) {
    (e.f & Se) !== 0 && me(e, gt);
    let t;
    try {
      t = si(e);
    } catch {
      t = !0;
    }
    t && xn(e);
  }
  $i.clear();
}
function Vn(e) {
  q(e, e.v + 1);
}
function Ws(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (Io += i, Io > 1e5 && Cr === null && (Cr = /* @__PURE__ */ new Set()), Cr !== null) {
      if (Cr.has(e)) return;
      Cr.add(e);
    }
    for (var o = 0; o < i; o++) {
      var s = n[o], l = s.f, d = (l & ve) === 0;
      if (d && me(s, t), (l & Si) !== 0)
        $i.add(
          /** @type {Effect} */
          s
        );
      else if ((l & Le) !== 0) {
        var w = (
          /** @type {Derived} */
          s
        );
        Pe == null || Pe.delete(w), Ws(w, gt, r);
      } else if (d) {
        var u = (
          /** @type {Effect} */
          s
        );
        (l & St) !== 0 && qt !== null && qt.add(u), r !== null ? r.push(u) : ia(u);
      }
    }
  }
}
function Ar(e) {
  if (typeof e != "object" || e === null || Nn in e || xs in e)
    return e;
  const t = bs(e);
  if (t !== gd && t !== pd)
    return e;
  var r = /* @__PURE__ */ new Map(), n = vs(e), i = /* @__PURE__ */ Z(0), o = Gr, s = (l) => {
    if (Gr === o)
      return l();
    var d = O, w = Gr;
    bt(null), Za(o);
    var u = l();
    return bt(d), Za(w), u;
  };
  return n && r.set("length", /* @__PURE__ */ Z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, d, w) {
        (!("value" in w) || w.configurable === !1 || w.enumerable === !1 || w.writable === !1) && Id();
        var u = r.get(d);
        return u === void 0 ? s(() => {
          var m = /* @__PURE__ */ Z(w.value);
          return r.set(d, m), m;
        }) : q(u, w.value, !0), !0;
      },
      deleteProperty(l, d) {
        var w = r.get(d);
        if (w === void 0) {
          if (d in l) {
            const u = s(() => /* @__PURE__ */ Z(_e));
            r.set(d, u), Vn(i);
          }
        } else
          q(w, _e), Vn(i);
        return !0;
      },
      get(l, d, w) {
        var f;
        if (d === Nn)
          return e;
        var u = r.get(d), m = d in l;
        if (u === void 0 && (!m || (f = Fr(l, d)) != null && f.writable) && (u = s(() => {
          var g = Ar(m ? l[d] : _e), y = /* @__PURE__ */ Z(g);
          return y;
        }), r.set(d, u)), u !== void 0) {
          var b = a(u);
          return b === _e ? void 0 : b;
        }
        return Reflect.get(l, d, w);
      },
      getOwnPropertyDescriptor(l, d) {
        var b;
        (b = this.has) == null || b.call(this, l, d);
        var w = Reflect.getOwnPropertyDescriptor(l, d), u = r.get(d);
        if (u !== void 0) {
          var m = a(u);
          if (m === _e)
            return;
          if (w && "value" in w)
            w.value = m;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return w;
      },
      has(l, d) {
        var b;
        if (d === Nn)
          return !0;
        var w = r.get(d), u = w !== void 0 && w.v !== _e || Reflect.has(l, d);
        if (w !== void 0 || B !== null && (!u || (b = Fr(l, d)) != null && b.writable)) {
          w === void 0 && (w = s(() => {
            var f = u ? Ar(l[d]) : _e, g = /* @__PURE__ */ Z(f);
            return g;
          }), r.set(d, w));
          var m = a(w);
          if (m === _e)
            return !1;
        }
        return u;
      },
      set(l, d, w, u) {
        var H;
        var m = r.get(d), b = d in l;
        if (n && d === "length")
          for (var f = w; f < /** @type {Source<number>} */
          m.v; f += 1) {
            var g = r.get(f + "");
            g !== void 0 ? q(g, _e) : f in l && (g = s(() => /* @__PURE__ */ Z(_e)), r.set(f + "", g));
          }
        if (m === void 0)
          (!b || (H = Fr(l, d)) != null && H.writable) && (m = s(() => /* @__PURE__ */ Z(void 0)), q(m, Ar(w)), r.set(d, m));
        else {
          b = m.v !== _e;
          var y = s(() => Ar(w));
          q(m, y);
        }
        var v = Reflect.getOwnPropertyDescriptor(l, d);
        if (v != null && v.set && v.set.call(u, w), !b) {
          if (n && typeof d == "string") {
            var x = (
              /** @type {Source<number>} */
              r.get("length")
            ), L = Number(d);
            Number.isInteger(L) && L >= x.v && q(x, L + 1);
          }
          Vn(i);
        }
        return !0;
      },
      ownKeys(l) {
        a(i);
        var d = Reflect.ownKeys(l).filter((m) => {
          var b = r.get(m);
          return b === void 0 || b.v !== _e;
        });
        for (var [w, u] of r)
          u.v !== _e && !(w in l) && d.push(w);
        return d;
      },
      setPrototypeOf() {
        Ad();
      }
    }
  );
}
var Ua, Ds, Ns, Hs;
function Ao() {
  if (Ua === void 0) {
    Ua = window, Ds = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ns = Fr(t, "firstChild").get, Hs = Fr(t, "nextSibling").get, Fa(e) && (e[To] = void 0, e[yi] = null, e[$o] = void 0, e.__e = void 0), Fa(r) && (r[In] = void 0);
  }
}
function vt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ns.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Hs.call(e)
  );
}
function F(e, t) {
  if (!G)
    return /* @__PURE__ */ Sr(e);
  var r = /* @__PURE__ */ Sr(N);
  if (r === null)
    r = N.appendChild(vt());
  else if (t && r.nodeType !== Hi) {
    var n = vt();
    return r == null || r.before(n), Ke(n), n;
  }
  return t && sa(
    /** @type {Text} */
    r
  ), Ke(r), r;
}
function On(e, t = !1) {
  if (!G) {
    var r = /* @__PURE__ */ Sr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Wt(r) : r;
  }
  if (t) {
    if ((N == null ? void 0 : N.nodeType) !== Hi) {
      var n = vt();
      return N == null || N.before(n), Ke(n), n;
    }
    sa(
      /** @type {Text} */
      N
    );
  }
  return N;
}
function Ie(e, t = !1) {
  if (!G)
    return /* @__PURE__ */ Sr(e);
  var r = F(e, t);
  return D(e), r;
}
function J(e, t = 1, r = !1) {
  let n = G ? N : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(n);
  if (!G)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Hi) {
      var o = vt();
      return n === null ? i == null || i.after(o) : n.before(o), Ke(o), o;
    }
    sa(
      /** @type {Text} */
      n
    );
  }
  return Ke(n), n;
}
function Fs(e) {
  e.textContent = "";
}
function Vs() {
  return !1;
}
function aa(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function sa(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Hi; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Kd(e) {
  var t = B;
  if (t === null)
    return O.f |= xr, e;
  if ((t.f & Xr) === 0 && (t.f & bn) === 0)
    throw e;
  It(e, t);
}
function It(e, t) {
  if (e === jr)
    throw e;
  if (!(t !== null && (t.f & Re) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & zo) !== 0 && (t.f & (Re | Yn)) === 0) {
        if ((t.f & Xr) === 0)
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
function Jd(e) {
  B === null && (O === null && Ed(), $d()), ir && Td();
}
function Qd(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Dt(e, t) {
  var r = B;
  r !== null && (r.f & Ve) !== 0 && (e |= Ve);
  var n = {
    ctx: Ae,
    deps: null,
    nodes: null,
    f: e | ve | zt,
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
  P == null || P.register_created_effect(n);
  var i = n;
  if ((e & bn) !== 0)
    Fn !== null ? Fn.push(n) : _r.ensure().schedule(n);
  else if (t !== null) {
    try {
      xn(n);
    } catch (s) {
      throw Ge(n), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Kr) === 0 && (i = i.first, (e & St) !== 0 && (e & Yr) !== 0 && i !== null && (i.f |= Yr));
  }
  if (i !== null && (i.parent = r, r !== null && Qd(i, r), O !== null && (O.f & Le) !== 0 && (e & nr) === 0)) {
    var o = (
      /** @type {Derived} */
      O
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return n;
}
function la() {
  return O !== null && !Mt;
}
function da(e) {
  const t = Dt(Ni, null);
  return me(t, Se), t.teardown = e, t;
}
function Ei(e) {
  Jd();
  var t = (
    /** @type {Effect} */
    B.f
  ), r = !O && (t & Tt) !== 0 && Ae !== null && !Ae.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ae
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Gs(e);
}
function Gs(e) {
  return Dt(bn | yd, e);
}
function ec(e) {
  _r.ensure();
  const t = Dt(nr | Kr, e);
  return () => {
    Ge(t);
  };
}
function tc(e) {
  _r.ensure();
  const t = Dt(nr | Kr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Vr(t, () => {
      Ge(t), n(void 0);
    }) : (Ge(t), n(void 0));
  });
}
function ca(e) {
  return Dt(bn, e);
}
function rc(e) {
  return Dt(ln | Kr, e);
}
function ha(e, t = 0) {
  return Dt(Ni | t, e);
}
function fe(e, t = [], r = [], n = []) {
  Nd(n, t, r, (i) => {
    Dt(Ni, () => {
      e(...i.map(a));
    });
  });
}
function Yi(e, t = 0) {
  var r = Dt(St | t, e);
  return r;
}
function mt(e) {
  return Dt(Tt | Kr, e);
}
function Us(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ir, n = O;
    Ya(!0), bt(null);
    try {
      t.call(null);
    } catch (i) {
      It(i, e.parent);
    } finally {
      Ya(r), bt(n);
    }
  }
}
function wa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ai(() => {
      i.abort(ii);
    });
    var n = r.next;
    (r.f & nr) !== 0 ? r.parent = null : Ge(r, t), r = n;
  }
}
function nc(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Tt) === 0 && Ge(t), t = r;
  }
}
function Ge(e, t = !0) {
  var r = !1;
  (t || (e.f & bd) !== 0) && e.nodes !== null && e.nodes.end !== null && (ic(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Yn, wa(e, t && !r), Xn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  Us(e), e.f ^= Yn, e.f |= Re;
  var i = e.parent;
  i !== null && i.first !== null && Ys(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ic(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Wt(e);
    e.remove(), e = r;
  }
}
function Ys(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Vr(e, t, r = !0) {
  var n = [];
  e.f |= Jo, Zs(e, n, !0);
  var i = () => {
    r && Ge(e), t && t();
  }, o = n.length;
  if (o > 0) {
    var s = () => --o || i();
    for (var l of n)
      l.out(s);
  } else
    i();
}
function Zs(e, t, r) {
  if ((e.f & Ve) === 0) {
    e.f ^= Ve;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var o = i.next;
      if ((i.f & nr) === 0) {
        var s = (i.f & Yr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Tt) !== 0 && (e.f & St) !== 0;
        Zs(i, t, s ? r : !1);
      }
      i = o;
    }
  }
}
function Pi(e) {
  e.f &= ~Jo, Xs(e, !0);
}
function Xs(e, t) {
  if ((e.f & Jo) === 0 && (e.f & Ve) !== 0) {
    e.f ^= Ve, (e.f & Se) === 0 && (me(e, ve), _r.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Yr) !== 0 || (r.f & Tt) !== 0;
      Xs(r, i ? t : !1), r = n;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const s of o)
        (s.is_global || t) && s.in();
  }
}
function ua(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Wt(r);
      t.append(r), r = i;
    }
}
let ir = !1;
function Ya(e) {
  ir = e;
}
let O = null, Mt = !1;
function bt(e) {
  O = e;
}
let B = null;
function Ot(e) {
  B = e;
}
let Bt = null;
function Ks(e) {
  O !== null && ((O.f & Mi) !== 0 || (O.f & Le) !== 0) && (Bt ?? (Bt = /* @__PURE__ */ new Set())).add(e);
}
let Xe = null, lt = 0, wt = null;
function oc(e) {
  wt = e;
}
let Js = 1, Lr = 0, Gr = Lr;
function Za(e) {
  Gr = e;
}
function Qs() {
  return ++Js;
}
function si(e) {
  var t = e.f;
  if ((t & ve) !== 0)
    return !0;
  if ((t & gt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var o = r[i];
      if (si(
        /** @type {Derived} */
        o
      ) && Ps(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & zt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Pe === null && me(e, Se);
  }
  return !1;
}
function el(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Bt !== null && Bt.has(e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & Le) !== 0 ? el(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? me(o, ve) : (o.f & Se) !== 0 && me(o, gt), ia(
        /** @type {Effect} */
        o
      ));
    }
}
function tl(e) {
  var t = Xe, r = lt, n = wt, i = O, o = Bt, s = Ae, l = Mt, d = Gr, w = e.f;
  Xe = /** @type {null | Value[]} */
  null, lt = 0, wt = null, O = (w & (Tt | nr)) === 0 ? e : null, Bt = null, yn(e.ctx), Mt = !1, Gr = ++Lr, e.ac !== null && (ai(() => {
    e.ac.abort(ii);
  }), e.ac = null);
  try {
    e.f |= Mi;
    var u = (
      /** @type {Function} */
      e.fn
    ), m = u();
    e.f |= Xr;
    var b = Xa(e);
    if (Ms() && wt !== null && !Mt && b !== null && (e.f & (Le | gt | ve)) === 0)
      for (var f = 0; f < /** @type {Source[]} */
      wt.length; f++)
        el(
          wt[f],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Lr++, i.deps !== null)
        for (let g = 0; g < r; g += 1)
          i.deps[g].rv = Lr;
      if (t !== null)
        for (const g of t)
          g.rv = Lr;
      wt !== null && (n === null ? n = wt : n.push(.../** @type {Source[]} */
      wt));
    }
    return (e.f & xr) !== 0 && (e.f ^= xr), m;
  } catch (g) {
    return Xa(e), Kd(g);
  } finally {
    e.f ^= Mi, Xe = t, lt = r, wt = n, O = i, Bt = o, yn(s), Mt = l, Gr = d;
  }
}
function Xa(e) {
  var i;
  var t = e.deps, r = P == null ? void 0 : P.is_fork;
  if (Xe !== null) {
    var n;
    if (r || Xn(e, lt), t !== null && lt > 0)
      for (t.length = lt + Xe.length, n = 0; n < Xe.length; n++)
        t[lt + n] = Xe[n];
    else
      e.deps = t = Xe;
    if (la() && (e.f & zt) !== 0)
      for (n = lt; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && lt < t.length && (Xn(e, lt), t.length = lt);
  return t;
}
function ac(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = fd.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & Le) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xe === null || !Un.call(Xe, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & zt) !== 0 && (o.f ^= zt), o.v !== _e && ta(o), o.ac !== null && ai(() => {
      o.ac.abort(ii), o.ac = null, me(o, ve);
    }), Gd(o), Xn(o, 0);
  }
}
function Xn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ac(e, r[n]);
}
function xn(e) {
  var t = e.f;
  if ((t & Re) === 0) {
    me(e, Se);
    var r = B;
    B = e;
    try {
      (t & (St | ks)) !== 0 ? nc(e) : wa(e), Us(e);
      var n = tl(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Js;
      var i;
      ps && Od && (e.f & ve) !== 0 && e.deps;
    } finally {
      B = r;
    }
  }
}
function a(e) {
  var t = e.f, r = (t & Le) !== 0;
  if (O !== null && !Mt) {
    var n = B !== null && (B.f & Re) !== 0;
    if (!n && (Bt === null || !Bt.has(e))) {
      var i = O.deps;
      if ((O.f & Mi) !== 0)
        e.rv < Lr && (e.rv = Lr, Xe === null && i !== null && i[lt] === e ? lt++ : Xe === null ? Xe = [e] : Xe.push(e));
      else {
        O.deps ?? (O.deps = []), Un.call(O.deps, e) || O.deps.push(e);
        var o = e.reactions;
        o === null ? e.reactions = [O] : Un.call(o, O) || o.push(O);
      }
    }
  }
  if (ir && Lt.has(e))
    return Lt.get(e);
  if (r) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (ir) {
      var l = s.v;
      return ((s.f & Se) === 0 && s.reactions !== null || nl(s)) && (l = ra(s)), Lt.set(s, l), l;
    }
    var d = (s.f & zt) === 0 && !Mt && O !== null && (O.f & zt) !== 0, w = (s.f & Xr) === 0;
    si(s) && (d && (s.f |= zt), Ps(s)), d && !w && (Rs(s), rl(s));
  }
  if (Pe != null && Pe.has(e))
    return Pe.get(e);
  if ((e.f & xr) !== 0)
    throw e.v;
  return e.v;
}
function rl(e) {
  if (e.f |= zt, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : Un.call(t, e) || t.push(e), (r.f & Le) !== 0 && (r.f & zt) === 0 && (Rs(
        /** @type {Derived} */
        r
      ), rl(
        /** @type {Derived} */
        r
      ));
    }
}
function nl(e) {
  if (e.v === _e) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Lt.has(t) || (t.f & Le) !== 0 && nl(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qn(e) {
  var t = Mt;
  try {
    return Mt = !0, e();
  } finally {
    Mt = t;
  }
}
const Br = Symbol("events"), il = /* @__PURE__ */ new Set(), Lo = /* @__PURE__ */ new Set();
function sc(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || Bo.call(t, o), !o.cancelBubble)
      return ai(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, tr(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function lc(e, t, r, n, i) {
  var o = { capture: n, passive: i }, s = sc(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && da(() => {
    s.__removed = !0, t.removeEventListener(e, s, o);
  });
}
function De(e, t, r) {
  (t[Br] ?? (t[Br] = {}))[e] = r;
}
function ol(e) {
  for (var t = 0; t < e.length; t++)
    il.add(e[t]);
  for (var r of Lo)
    r(e);
}
let bo = null, yo = !1;
function Bo(e) {
  var y, v;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  bo = e, yo || (yo = !0, setTimeout(() => {
    yo = !1, bo = null;
  }));
  var s = 0, l = bo === e && e[Br];
  if (l) {
    var d = i.indexOf(l);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Br] = t;
      return;
    }
    var w = i.indexOf(t);
    if (w === -1)
      return;
    d <= w && (s = d);
  }
  if (o = /** @type {Element} */
  i[s] || e.target, o !== t) {
    vn(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var u = O, m = B;
    bt(null), Ot(null);
    try {
      for (var b, f = []; o !== null && o !== t; ) {
        try {
          var g = (v = o[Br]) == null ? void 0 : v[n];
          g != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && g.call(o, e);
        } catch (x) {
          b ? f.push(x) : b = x;
        }
        if (e.cancelBubble) break;
        s++, o = s < i.length ? (
          /** @type {Element} */
          i[s]
        ) : null;
      }
      if (b) {
        for (let x of f)
          queueMicrotask(() => {
            throw x;
          });
        throw b;
      }
    } finally {
      e[Br] = t, delete e.currentTarget, bt(u), Ot(m);
    }
  }
}
var fs;
const ko = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((fs = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : fs.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function dc(e) {
  return (
    /** @type {string} */
    (ko == null ? void 0 : ko.createHTML(e)) ?? e
  );
}
function cc(e) {
  var t = aa("template");
  return t.innerHTML = dc(e.replaceAll("<!>", "<!---->")), t.content;
}
function dn(e, t) {
  var r = (
    /** @type {Effect} */
    B
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  var r = (t & hd) !== 0, n = (t & wd) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (G)
      return dn(N, null), N;
    i === void 0 && (i = cc(o ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Sr(i)));
    var s = (
      /** @type {TemplateNode} */
      n || Ds ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Sr(s)
      ), d = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      dn(l, d);
    } else
      dn(s, s);
    return s;
  };
}
function al() {
  if (G)
    return dn(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vt();
  return e.append(t, r), dn(t, r), e;
}
function ee(e, t) {
  if (G) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      B
    );
    ((r.f & Xr) === 0 || r.nodes.end === null) && (r.nodes.end = N), Vi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const hc = ["touchstart", "touchmove"];
function wc(e) {
  return hc.includes(e);
}
function uc(e) {
  let t = 0, r = Zr(0), n;
  return () => {
    la() && (a(r), ha(() => (t === 0 && (n = qn(() => e(() => Vn(r)))), t += 1, () => {
      tr(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Vn(r));
      });
    })));
  };
}
var fc = Yr | Kr;
function mc(e, t, r, n) {
  new gc(e, t, r, n);
}
var it, Jn, ut, Dr, Ce, ot, Fe, at, Rt, Nr, br, gn, Qn, ei, Kt, Li, W, sl, ll, Oo, pr, dl, Wo, Wn, xi, Do, No;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    $(this, W);
    /** @type {Boundary | null} */
    ae(this, "parent");
    ae(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ae(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, it);
    /** @type {TemplateNode | null} */
    $(this, Jn, G ? N : null);
    /** @type {BoundaryProps} */
    $(this, ut);
    /** @type {((anchor: Node) => void)} */
    $(this, Dr);
    /** @type {Effect} */
    $(this, Ce);
    /** @type {Effect | null} */
    $(this, ot, null);
    /** @type {Effect | null} */
    $(this, Fe, null);
    /** @type {Effect | null} */
    $(this, at, null);
    /** @type {DocumentFragment | null} */
    $(this, Rt, null);
    $(this, Nr, 0);
    $(this, br, 0);
    $(this, gn, !1);
    /** @type {Set<Effect>} */
    $(this, Qn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, ei, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, Kt, null);
    $(this, Li, uc(() => (M(this, Kt, Zr(h(this, Nr))), () => {
      M(this, Kt, null);
    })));
    var o;
    M(this, it, t), M(this, ut, r), M(this, Dr, (s) => {
      var l = (
        /** @type {Effect} */
        B
      );
      l.b = this, l.f |= zo, n(s);
    }), this.parent = /** @type {Effect} */
    B.b, this.transform_error = i ?? ((o = this.parent) == null ? void 0 : o.transform_error) ?? ((s) => s), M(this, Ce, Yi(() => {
      if (G) {
        const s = Qo(
          /** @type {TemplateNode} */
          h(this, Jn)
        );
        Vi();
        const l = s === Xo;
        if (s.startsWith(Ha)) {
          const w = JSON.parse(s.slice(Ha.length));
          z(this, W, ll).call(this, w);
        } else l ? z(this, W, dl).call(this) : z(this, W, sl).call(this);
      } else
        z(this, W, Wo).call(this);
    }, fc)), G && M(this, it, N);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ts(t, h(this, Qn), h(this, ei));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!h(this, ut).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    z(this, W, Do).call(this, t, r), M(this, Nr, h(this, Nr) + t), !(!h(this, Kt) || h(this, gn)) && (M(this, gn, !0), tr(() => {
      M(this, gn, !1), h(this, Kt) && kn(h(this, Kt), h(this, Nr));
    }));
  }
  get_effect_pending() {
    return h(this, Li).call(this), a(
      /** @type {Source<number>} */
      h(this, Kt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === jr || !h(this, ut).onerror && !h(this, ut).failed)
      throw t;
    P != null && P.is_fork ? (h(this, ot) && P.skip_effect(h(this, ot)), h(this, Fe) && P.skip_effect(h(this, Fe)), h(this, at) && P.skip_effect(h(this, at)), P.oncommit(() => {
      z(this, W, pr).call(this) || z(this, W, No).call(this, t);
    })) : z(this, W, No).call(this, t);
  }
}
it = new WeakMap(), Jn = new WeakMap(), ut = new WeakMap(), Dr = new WeakMap(), Ce = new WeakMap(), ot = new WeakMap(), Fe = new WeakMap(), at = new WeakMap(), Rt = new WeakMap(), Nr = new WeakMap(), br = new WeakMap(), gn = new WeakMap(), Qn = new WeakMap(), ei = new WeakMap(), Kt = new WeakMap(), Li = new WeakMap(), W = new WeakSet(), sl = function() {
  try {
    M(this, ot, mt(() => h(this, Dr).call(this, h(this, it))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ll = function(t) {
  const r = h(this, ut).failed, { reset: n, invoke_onerror: i } = z(this, W, Oo).call(this, t);
  tr(i), r && M(this, at, mt(() => {
    r(
      h(this, it),
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
Oo = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (!z(this, W, pr).call(this)) {
      if (r) {
        jd();
        return;
      }
      r = !0, n && Bd(), h(this, at) !== null && Vr(h(this, at), () => {
        M(this, at, null);
      }), z(this, W, xi).call(this, () => {
        z(this, W, Wo).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var s, l;
    if (!z(this, W, pr).call(this))
      try {
        n = !0, (l = (s = h(this, ut)).onerror) == null || l.call(s, t, i), n = !1;
      } catch (d) {
        It(d, h(this, Ce) && h(this, Ce).parent);
      }
  } };
}, pr = function() {
  return (h(this, Ce).f & (Re | Yn)) !== 0;
}, dl = function() {
  const t = h(this, ut).pending;
  t && (this.is_pending = !0, M(this, Fe, mt(() => t(h(this, it)))), tr(() => {
    if (!z(this, W, pr).call(this)) {
      var r = M(this, Rt, document.createDocumentFragment()), n = vt(), i = !1;
      if (r.append(n), M(this, ot, z(this, W, xi).call(this, () => {
        try {
          return mt(() => h(this, Dr).call(this, n));
        } catch (o) {
          try {
            this.error(o), i = !0;
          } catch (s) {
            It(s, h(this, Ce).parent);
          }
          return null;
        }
      })), h(this, ot) === null) {
        M(this, Rt, null), i && z(this, W, Wn).call(
          this,
          /** @type {Batch} */
          P
        );
        return;
      }
      h(this, br) === 0 && (h(this, it).before(r), M(this, Rt, null), Vr(
        /** @type {Effect} */
        h(this, Fe),
        () => {
          M(this, Fe, null);
        }
      ), z(this, W, Wn).call(
        this,
        /** @type {Batch} */
        P
      ));
    }
  }));
}, Wo = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, br, 0), M(this, Nr, 0), M(this, ot, mt(() => {
      h(this, Dr).call(this, h(this, it));
    })), h(this, br) > 0) {
      var t = M(this, Rt, document.createDocumentFragment());
      ua(h(this, ot), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        h(this, ut).pending
      );
      M(this, Fe, mt(() => r(h(this, it))));
    } else
      z(this, W, Wn).call(
        this,
        /** @type {Batch} */
        P
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Wn = function(t) {
  this.is_pending = !1, t.transfer_effects(h(this, Qn), h(this, ei));
}, /**
 * @template T
 * @param {() => T} fn
 */
xi = function(t) {
  var r = B, n = O, i = Ae;
  Ot(h(this, Ce)), bt(h(this, Ce)), yn(h(this, Ce).ctx);
  try {
    return _r.ensure(), t();
  } finally {
    Ot(r), bt(n), yn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Do = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && z(n = this.parent, W, Do).call(n, t, r);
    return;
  }
  M(this, br, h(this, br) + t), h(this, br) === 0 && (z(this, W, Wn).call(this, r), h(this, Fe) && Vr(h(this, Fe), () => {
    M(this, Fe, null);
  }), h(this, Rt) && (h(this, it).before(h(this, Rt)), M(this, Rt, null)));
}, /**
 * @param {unknown} error
 */
No = function(t) {
  h(this, ot) && (Ge(h(this, ot)), M(this, ot, null)), h(this, Fe) && (Ge(h(this, Fe)), M(this, Fe, null)), h(this, at) && (Ge(h(this, at)), M(this, at, null)), G && (Ke(
    /** @type {TemplateNode} */
    h(this, Jn)
  ), _d(), Ke(zi()));
  let r = h(this, ut).failed;
  const n = (i) => {
    if (z(this, W, pr).call(this)) return;
    const { reset: o, invoke_onerror: s } = z(this, W, Oo).call(this, i);
    s(), r && !z(this, W, pr).call(this) && M(this, at, z(this, W, xi).call(this, () => {
      try {
        return mt(() => {
          var l = (
            /** @type {Effect} */
            B
          );
          l.b = this, l.f |= zo, r(
            h(this, it),
            () => i,
            () => o
          );
        });
      } catch (l) {
        return It(
          l,
          /** @type {Effect} */
          h(this, Ce).parent
        ), null;
      }
    }));
  };
  tr(() => {
    if (!z(this, W, pr).call(this)) {
      var i;
      try {
        i = this.transform_error(t);
      } catch (o) {
        It(o, h(this, Ce) && h(this, Ce).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        n,
        /** @param {unknown} e */
        (o) => It(o, h(this, Ce) && h(this, Ce).parent)
      ) : n(i);
    }
  });
};
function Ee(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[In] ?? (e[In] = e.nodeValue)) && (e[In] = r, e.nodeValue = `${r}`);
}
function cl(e, t) {
  return hl(e, t);
}
function pc(e, t) {
  Ao(), t.intro = t.intro ?? !1;
  const r = t.target, n = G, i = N;
  try {
    for (var o = /* @__PURE__ */ Sr(r); o && (o.nodeType !== oi || /** @type {Comment} */
    o.data !== gs); )
      o = /* @__PURE__ */ Wt(o);
    if (!o)
      throw jr;
    er(!0), Ke(
      /** @type {Comment} */
      o
    );
    const s = hl(e, { ...t, anchor: o });
    return er(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== jr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Rd(), Ao(), Fs(r), er(!1), cl(e, t);
  } finally {
    er(n), Ke(i);
  }
}
const vi = /* @__PURE__ */ new Map();
function hl(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: s = !0, transformError: l }) {
  Ao();
  var d = void 0, w = tc(() => {
    var u = r ?? t.appendChild(vt());
    mc(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (f) => {
        Gi({});
        var g = (
          /** @type {ComponentContext} */
          Ae
        );
        if (o && (g.c = o), i && (n.$$events = i), G && dn(
          /** @type {TemplateNode} */
          f,
          null
        ), d = e(f, n) || ea(), G && (B.nodes.end = N, N === null || N.nodeType !== oi || /** @type {Comment} */
        N.data !== Ko))
          throw Fi(), jr;
        Ui();
      },
      l
    );
    var m = /* @__PURE__ */ new Set(), b = (f) => {
      for (var g = 0; g < f.length; g++) {
        var y = f[g];
        if (!m.has(y)) {
          m.add(y);
          var v = wc(y);
          for (const H of [t, document]) {
            var x = vi.get(H);
            x === void 0 && (x = /* @__PURE__ */ new Map(), vi.set(H, x));
            var L = x.get(y);
            L === void 0 ? (H.addEventListener(y, Bo, { passive: v }), x.set(y, 1)) : x.set(y, L + 1);
          }
        }
      }
    };
    return b(Di(il)), Lo.add(b), () => {
      var v;
      for (var f of m)
        for (const x of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            vi.get(x)
          ), y = (
            /** @type {number} */
            g.get(f)
          );
          --y == 0 ? (x.removeEventListener(f, Bo), g.delete(f), g.size === 0 && vi.delete(x)) : g.set(f, y);
        }
      Lo.delete(b), u !== r && ((v = u.parentNode) == null || v.removeChild(u));
    };
  });
  return Ho.set(d, w), d;
}
let Ho = /* @__PURE__ */ new WeakMap();
function vc(e, t) {
  const r = Ho.get(e);
  return r ? (Ho.delete(e), r(t)) : Promise.resolve();
}
var _t, Ct, st, Hr, ti, ri, Bi;
class wl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ae(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, _t, /* @__PURE__ */ new Map());
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
    $(this, Ct, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, st, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, Hr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, ti, !0);
    /**
     * @param {Batch} batch
     */
    $(this, ri, (t) => {
      if (h(this, _t).has(t)) {
        var r = (
          /** @type {Key} */
          h(this, _t).get(t)
        ), n = h(this, Ct).get(r);
        if (n)
          Pi(n), h(this, Hr).delete(r);
        else {
          var i = h(this, st).get(r);
          i && (Pi(i.effect), h(this, Ct).set(r, i.effect), h(this, st).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, s] of h(this, _t)) {
          if (h(this, _t).delete(o), o === t)
            break;
          const l = h(this, st).get(s);
          l && (Ge(l.effect), h(this, st).delete(s));
        }
        for (const [o, s] of h(this, Ct)) {
          if (o === r || h(this, Hr).has(o)) continue;
          const l = () => {
            if (Array.from(h(this, _t).values()).includes(o)) {
              var w = document.createDocumentFragment();
              ua(s, w), w.append(vt()), h(this, st).set(o, { effect: s, fragment: w });
            } else
              Ge(s);
            h(this, Hr).delete(o), h(this, Ct).delete(o);
          };
          h(this, ti) || !n ? (h(this, Hr).add(o), Vr(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, Bi, (t) => {
      h(this, _t).delete(t);
      const r = Array.from(h(this, _t).values());
      for (const [n, i] of h(this, st))
        r.includes(n) || (Ge(i.effect), h(this, st).delete(n));
    });
    this.anchor = t, M(this, ti, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      P
    ), i = Vs();
    if (r && !h(this, Ct).has(t) && !h(this, st).has(t))
      if (i) {
        var o = document.createDocumentFragment(), s = vt();
        o.append(s), h(this, st).set(t, {
          effect: mt(() => r(s)),
          fragment: o
        });
      } else
        h(this, Ct).set(
          t,
          mt(() => r(this.anchor))
        );
    if (h(this, _t).set(n, t), i) {
      for (const [l, d] of h(this, Ct))
        l === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [l, d] of h(this, st))
        l === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(h(this, ri)), n.ondiscard(h(this, Bi));
    } else
      G && (this.anchor = N), h(this, ri).call(this, n);
  }
}
_t = new WeakMap(), Ct = new WeakMap(), st = new WeakMap(), Hr = new WeakMap(), ti = new WeakMap(), ri = new WeakMap(), Bi = new WeakMap();
function bc(e, t, ...r) {
  var n = new wl(e);
  Yi(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((o) => i(o, ...r)));
  }, Yr);
}
function ul(e) {
  Ae === null && Sd(), Ei(() => {
    const t = qn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ue(e, t, r = !1) {
  var n;
  G && (n = N, Vi());
  var i = new wl(e), o = r ? Yr : 0;
  function s(l, d) {
    if (G) {
      var w = Qo(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(w.substring(1))) {
        var u = zi();
        Ke(u), i.anchor = u, er(!1), i.ensure(l, d), er(!0);
        return;
      }
    }
    i.ensure(l, d);
  }
  Yi(() => {
    var l = !1;
    t((d, w = 0) => {
      l = !0, s(w, d);
    }), l || s(-1, null);
  }, o);
}
function yc(e, t, r) {
  for (var n = [], i = t.length, o, s = t.length, l = 0; l < i; l++) {
    let m = t[l];
    Vr(
      m,
      () => {
        if (o) {
          if (o.pending.delete(m), o.done.add(m), o.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Fo(e, Di(o.done)), b.delete(o), b.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var d = n.length === 0 && r !== null && e.pending.size === 0;
    if (d) {
      var w = (
        /** @type {Element} */
        r
      ), u = (
        /** @type {Element} */
        w.parentNode
      );
      Fs(u), u.append(w), e.items.clear();
    }
    Fo(e, t, !d);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Fo(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const s of e.pending.values())
      for (const l of s)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    if (n != null && n.has(o)) {
      o.f |= At;
      const s = document.createDocumentFragment();
      ua(o, s);
    } else
      Ge(t[i], r);
  }
}
var Ka;
function Ri(e, t, r, n, i, o = null) {
  var s = e, l = /* @__PURE__ */ new Map(), d = (t & ms) !== 0;
  if (d) {
    var w = (
      /** @type {Element} */
      e
    );
    s = G ? Ke(/* @__PURE__ */ Sr(w)) : w.appendChild(vt());
  }
  G && Vi();
  var u = null, m = /* @__PURE__ */ Es(() => {
    var L = r();
    return (
      /** @type {V[]} */
      vs(L) ? L : L == null ? [] : Di(L)
    );
  }), b = /* @__PURE__ */ new Map(), f = !0;
  function g(L) {
    if ((x.effect.f & Re) === 0) {
      x.pending.delete(L);
      var H = a(m);
      x.fallback = u, kc(x, H, s, t, n), u !== null && (H.length === 0 ? (u.f & At) === 0 ? Pi(u) : (u.f ^= At, Dn(u, null, s)) : Vr(u, () => {
        u = null;
      }));
    }
  }
  function y(L) {
    x.pending.delete(L);
  }
  var v = Yi(() => {
    var L = (
      /** @type {V[]} */
      a(m)
    ), H = L.length;
    let te = !1;
    if (G) {
      var Q = Qo(s) === Xo;
      Q !== (H === 0) && (s = zi(), Ke(s), er(!1), te = !0);
    }
    for (var we = /* @__PURE__ */ new Set(), oe = (
      /** @type {Batch} */
      P
    ), be = Vs(), Me = 0; Me < H; Me += 1) {
      G && N.nodeType === oi && /** @type {Comment} */
      N.data === Ko && (s = /** @type {Comment} */
      N, te = !0, er(!1));
      var ke = L[Me], xe = n(ke, Me), V = f ? null : l.get(xe);
      V ? (V.v && kn(V.v, ke), V.i && kn(V.i, Me), be && oe.unskip_effect(V.e)) : (V = xc(
        l,
        f ? s : Ka ?? (Ka = vt()),
        ke,
        xe,
        Me,
        i,
        t,
        r
      ), f || (V.e.f |= At), l.set(xe, V)), we.add(xe);
    }
    if (H === 0 && o && !u && (f ? u = mt(() => o(s)) : (u = mt(() => o(Ka ?? (Ka = vt()))), u.f |= At)), H > we.size && zd(), G && H > 0 && Ke(zi()), !f)
      if (b.set(oe, we), be) {
        for (const [Je, Ue] of l)
          we.has(Je) || oe.skip_effect(Ue.e);
        oe.oncommit(g), oe.ondiscard(y);
      } else
        g(oe);
    te && er(!0), a(m);
  }), x = { effect: v, items: l, pending: b, outrogroups: null, fallback: u };
  f = !1, G && (s = N);
}
function Cn(e) {
  for (; e !== null && (e.f & Tt) === 0; )
    e = e.next;
  return e;
}
function kc(e, t, r, n, i) {
  var ke, xe, V, Je, Ue, Nt, $t, or, Mr;
  var o = (n & od) !== 0, s = t.length, l = e.items, d = Cn(e.effect.first), w, u = null, m, b = [], f = [], g, y, v, x;
  if (o)
    for (x = 0; x < s; x += 1)
      g = t[x], y = i(g, x), v = /** @type {EachItem} */
      l.get(y).e, (v.f & At) === 0 && ((xe = (ke = v.nodes) == null ? void 0 : ke.a) == null || xe.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(v));
  for (x = 0; x < s; x += 1) {
    if (g = t[x], y = i(g, x), v = /** @type {EachItem} */
    l.get(y).e, e.outrogroups !== null)
      for (const Be of e.outrogroups)
        Be.pending.delete(v), Be.done.delete(v);
    if ((v.f & Ve) !== 0 && (Pi(v), o && ((Je = (V = v.nodes) == null ? void 0 : V.a) == null || Je.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(v))), (v.f & At) !== 0)
      if (v.f ^= At, v === d)
        Dn(v, null, r);
      else {
        var L = u ? u.next : d;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), gr(e, u, v), gr(e, v, L), Dn(v, L, r), u = v, b = [], f = [], d = Cn(u.next);
        continue;
      }
    if (v !== d) {
      if (w !== void 0 && w.has(v)) {
        if (b.length < f.length) {
          var H = f[0], te;
          u = H.prev;
          var Q = b[0], we = b[b.length - 1];
          for (te = 0; te < b.length; te += 1)
            Dn(b[te], H, r);
          for (te = 0; te < f.length; te += 1)
            w.delete(f[te]);
          gr(e, Q.prev, we.next), gr(e, u, Q), gr(e, we, H), d = H, u = we, x -= 1, b = [], f = [];
        } else
          w.delete(v), Dn(v, d, r), gr(e, v.prev, v.next), gr(e, v, u === null ? e.effect.first : u.next), gr(e, u, v), u = v;
        continue;
      }
      for (b = [], f = []; d !== null && d !== v; )
        (w ?? (w = /* @__PURE__ */ new Set())).add(d), f.push(d), d = Cn(d.next);
      if (d === null)
        continue;
    }
    (v.f & At) === 0 && b.push(v), u = v, d = Cn(v.next);
  }
  if (e.outrogroups !== null) {
    for (const Be of e.outrogroups)
      Be.pending.size === 0 && (Fo(e, Di(Be.done)), (Ue = e.outrogroups) == null || Ue.delete(Be));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || w !== void 0) {
    var oe = [];
    if (w !== void 0)
      for (v of w)
        (v.f & Ve) === 0 && oe.push(v);
    for (; d !== null; )
      (d.f & Ve) === 0 && d !== e.fallback && oe.push(d), d = Cn(d.next);
    var be = oe.length;
    if (be > 0) {
      var Me = (n & ms) !== 0 && s === 0 ? r : null;
      if (o) {
        for (x = 0; x < be; x += 1)
          ($t = (Nt = oe[x].nodes) == null ? void 0 : Nt.a) == null || $t.measure();
        for (x = 0; x < be; x += 1)
          (Mr = (or = oe[x].nodes) == null ? void 0 : or.a) == null || Mr.fix();
      }
      yc(e, oe, Me);
    }
  }
  o && tr(() => {
    var Be, ar;
    if (m !== void 0)
      for (v of m)
        (ar = (Be = v.nodes) == null ? void 0 : Be.a) == null || ar.apply();
  });
}
function xc(e, t, r, n, i, o, s, l) {
  var d = (s & nd) !== 0 ? (s & ad) === 0 ? /* @__PURE__ */ oa(r, !1, !1) : Zr(r) : null, w = (s & id) !== 0 ? Zr(i) : null;
  return {
    v: d,
    i: w,
    e: mt(() => (o(t, d ?? r, w ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function Dn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & At) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(n)
      );
      if (o.before(n), n === i)
        return;
      n = s;
    }
}
function gr(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function fa(e, t) {
  ca(() => {
    var i, o;
    e = ((o = (i = B == null ? void 0 : B.parent) == null ? void 0 : i.nodes) == null ? void 0 : o.start) ?? e;
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
      const s = aa("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function fl(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = fl(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function qc() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = fl(e)) && (n && (n += " "), n += t);
  return n;
}
function Ne(e) {
  return typeof e == "object" ? qc(e) : e ?? "";
}
const Ja = [...` 	
\r\f \v\uFEFF`];
function jc(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var o = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var l = s + o;
          (s === 0 || Ja.includes(n[s - 1])) && (l === n.length || Ja.includes(n[l])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1) : s = l;
        }
  }
  return n === "" ? null : n;
}
function Qa(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function _c(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += Qa(n)), i && (r += Qa(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function he(e, t, r, n, i, o) {
  var s = (
    /** @type {any} */
    e[To]
  );
  if (G || s !== r || s === void 0) {
    var l = jc(r, n, o);
    (!G || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e[To] = r;
  } else if (o && i !== o)
    for (var d in o) {
      var w = !!o[d];
      (i == null || w !== !!i[d]) && e.classList.toggle(d, w);
    }
  return o;
}
function xo(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function qi(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[$o]
  );
  if (G || i !== t) {
    var o = _c(t, n);
    (!G || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e[$o] = t;
  } else n && (Array.isArray(n) ? (xo(e, r == null ? void 0 : r[0], n[0]), xo(e, r == null ? void 0 : r[1], n[1], "important")) : xo(e, r, n));
  return n;
}
const Sc = Symbol("is custom element"), Mc = Symbol("is html"), zc = xd ? "link" : "LINK";
function X(e, t, r, n) {
  var i = Tc(e);
  G && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === zc) || i[t] !== (i[t] = r) && (t === "loading" && (e[kd] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && $c(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Tc(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[yi] ?? (e[yi] = {
      [Sc]: e.nodeName.includes("-"),
      [Mc]: e.namespaceURI === ud
    })
  );
}
var es = /* @__PURE__ */ new Map();
function $c(e) {
  var t = e.getAttribute("is") || e.nodeName, r = es.get(t);
  if (r) return r;
  es.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = md(i);
    for (var s in n)
      n[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && r.add(s);
    i = bs(i);
  }
  return r;
}
var yr, pn, ni, Oi, ml;
const Wi = class Wi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    $(this, Oi);
    /** */
    $(this, yr, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    $(this, pn);
    /** @type {ResizeObserverOptions} */
    $(this, ni);
    M(this, ni, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = h(this, yr).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), h(this, yr).set(t, n), z(this, Oi, ml).call(this).observe(t, h(this, ni)), () => {
      var i = h(this, yr).get(t);
      i.delete(r), i.size === 0 && (h(this, yr).delete(t), h(this, pn).unobserve(t));
    };
  }
};
yr = new WeakMap(), pn = new WeakMap(), ni = new WeakMap(), Oi = new WeakSet(), ml = function() {
  return h(this, pn) ?? M(this, pn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        Wi.entries.set(r.target, r);
        for (var n of h(this, yr).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
ae(Wi, "entries", /* @__PURE__ */ new WeakMap());
let Vo = Wi;
var Ec = /* @__PURE__ */ new Vo({
  box: "border-box"
});
function ts(e, t, r) {
  var n = Ec.observe(e, () => r(e[t]));
  ca(() => (qn(() => r(e[t])), n));
}
function qo(e, t) {
  return e === t || (e == null ? void 0 : e[Nn]) === t;
}
function Go(e = ea(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Ae.r
  ), o = (
    /** @type {Effect} */
    B
  );
  return ca(() => {
    var s, l;
    return ha(() => {
      s = l, l = [], qn(() => {
        qo(r(...l), e) || (t(e, ...l), s && qo(r(...s), e) && t(null, ...s));
      });
    }), () => {
      let d = o;
      for (; d !== i && d.parent !== null && d.parent.f & Yn; )
        d = d.parent;
      const w = () => {
        l && qo(r(...l), e) && t(null, ...l);
      }, u = d.teardown;
      d.teardown = () => {
        w(), u == null || u();
      };
    };
  }), e;
}
function gl(e, t, r) {
  if (e == null)
    return t(void 0), kr;
  const n = qn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const an = [];
function pl(e, t = kr) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (_s(e, l) && (e = l, r)) {
      const d = !an.length;
      for (const w of n)
        w[1](), an.push(w, e);
      if (d) {
        for (let w = 0; w < an.length; w += 2)
          an[w][0](an[w + 1]);
        an.length = 0;
      }
    }
  }
  function o(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, d = kr) {
    const w = [l, d];
    return n.add(w), n.size === 1 && (r = t(i, o) || kr), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(w), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function Pc(e) {
  let t;
  return gl(e, (r) => t = r)(), t;
}
let bi = !1, Uo = Symbol("unmounted");
function rs(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ oa(void 0),
    unsubscribe: kr
  });
  if (n.store !== e && !(Uo in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = kr;
    else {
      var i = !0;
      n.unsubscribe = gl(e, (o) => {
        i ? n.source.v = o : q(n.source, o);
      }), i = !1;
    }
  return e && Uo in r ? Pc(e) : a(n.source);
}
function Rc() {
  const e = {};
  function t() {
    da(() => {
      for (var r in e)
        e[r].unsubscribe();
      vn(e, Uo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Cc(e) {
  var t = bi;
  try {
    return bi = !1, [e(), bi];
  } finally {
    bi = t;
  }
}
function A(e, t, r, n) {
  var te;
  var i = !0, o = (r & dd) !== 0, s = (r & cd) !== 0, l = (
    /** @type {V} */
    n
  ), d = !0, w = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), u = () => s && i ? (w ?? (w = /* @__PURE__ */ Zn(
    /** @type {() => V} */
    n
  )), a(w)) : (d && (d = !1, l = s ? qn(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let m;
  if (o) {
    var b = Nn in e || qs in e;
    m = ((te = Fr(e, t)) == null ? void 0 : te.set) ?? (b && t in e ? (Q) => e[t] = Q : void 0);
  }
  var f, g = !1;
  o ? [f, g] = Cc(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && n !== void 0 && (f = u(), m && (Cd(), m(f)));
  var y;
  if (y = () => {
    var Q = (
      /** @type {V} */
      e[t]
    );
    return Q === void 0 ? u() : (d = !0, Q);
  }, (r & ld) === 0)
    return y;
  if (m) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(Q, we) {
        return arguments.length > 0 ? ((!we || v || g) && m(we ? y() : Q), Q) : y();
      })
    );
  }
  var x = !1, L = ((r & sd) !== 0 ? Zn : Es)(() => (x = !1, y()));
  o && a(L);
  var H = (
    /** @type {Effect} */
    B
  );
  return (
    /** @type {() => V} */
    (function(Q, we) {
      if (arguments.length > 0) {
        const oe = we ? a(L) : o ? Ar(Q) : Q;
        return q(L, oe), x = !0, l !== void 0 && (l = oe), Q;
      }
      return ir && x || (H.f & Re) !== 0 ? L.v : a(L);
    })
  );
}
function Ic(e) {
  return new Ac(e);
}
var Jt, ft;
class Ac {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $(this, Jt);
    /** @type {Record<string, any>} */
    $(this, ft);
    var o;
    var r = /* @__PURE__ */ new Map(), n = (s, l) => {
      var d = /* @__PURE__ */ oa(l, !1, !1);
      return r.set(s, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return a(r.get(l) ?? n(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === qs ? !0 : (a(r.get(l) ?? n(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, d) {
          return q(r.get(l) ?? n(l, d), d), Reflect.set(s, l, d);
        }
      }
    );
    M(this, ft, (t.hydrate ? pc : cl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && C(), M(this, Jt, i.$$events);
    for (const s of Object.keys(h(this, ft)))
      s === "$set" || s === "$destroy" || s === "$on" || vn(this, s, {
        get() {
          return h(this, ft)[s];
        },
        /** @param {any} value */
        set(l) {
          h(this, ft)[s] = l;
        },
        enumerable: !0
      });
    h(this, ft).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, h(this, ft).$destroy = () => {
      vc(h(this, ft));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    h(this, ft).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    h(this, Jt)[t] = h(this, Jt)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return h(this, Jt)[t].push(n), () => {
      h(this, Jt)[t] = h(this, Jt)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    h(this, ft).$destroy();
  }
}
Jt = new WeakMap(), ft = new WeakMap();
let vl;
typeof HTMLElement == "function" && (vl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ae(this, "$$ctor");
    /** Slots */
    ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    ae(this, "$$c");
    /** Whether or not the custom element is connected */
    ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ae(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ae(this, "$$shadowRoot", null);
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
        return (o) => {
          const s = aa("slot");
          i !== "default" && (s.name = i), ee(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Lc(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = ji(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ic({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ec(() => {
        ha(() => {
          var i;
          this.$$r = !0;
          for (const o of _i(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const s = ji(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const s = this.$$c.$on(i, o);
          this.$$l_u.set(o, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ji(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return _i(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ji(e, t, r, n) {
  var o;
  const i = (o = r[e]) == null ? void 0 : o.type;
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
function Lc(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ma(e, t, r, n, i, o) {
  let s = class extends vl {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return _i(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return _i(t).forEach((l) => {
    vn(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(d) {
        var m;
        d = ji(l, d, t), this.$$d[l] = d;
        var w = this.$$c;
        if (w) {
          var u = (m = Fr(w, l)) == null ? void 0 : m.get;
          u ? w[l] = d : w.$set({ [l]: d });
        }
      }
    });
  }), n.forEach((l) => {
    vn(s.prototype, l, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[l];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const j = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, _ = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, ns = (e) => `<g fill="#000">${e}</g>`, Bc = {
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
        svg: j(
          _(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: j(
          _(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: j(
          `${ns('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${_(
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
        svg: j(
          _(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          `${_('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${ns(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: j(
          _('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: j(
          _(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: j(
          _('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: j(
          _(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: j(_('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: j(
          _(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: j(
          _('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: j(_('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: j(
          _(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: j(_('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: j(
          _(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: j(
          _(
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
        svg: j(
          _(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: j(
          _('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: j(
          _('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: j(
          _('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: j(_('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: j(_('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: j(_('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: j(_('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: j(_('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: j(_('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: j(_('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: j(
          _('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: j(
          _('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: j(
          _('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: j(_('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: j(_('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Oc(e, t) {
  const r = Bc[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const is = /* @__PURE__ */ new Map();
function Wc(e, t) {
  const r = `${e}:${t ?? "default"}`, n = is.get(r);
  if (n)
    return n;
  const i = Oc(e, t), o = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return is.set(r, o), o;
}
var Dc = /* @__PURE__ */ ge("<span></span>");
const Nc = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function ht(e, t) {
  Gi(t, !0), fa(e, Nc);
  let r = A(t, "name", 7), n = A(t, "variant", 7), i = A(t, "decorative", 7, !0), o = A(t, "label", 7), s = A(t, "title", 7), l = A(t, "size", 7, "1rem"), d = A(t, "className", 7, ""), w = /* @__PURE__ */ E(() => Wc(r(), n())), u = /* @__PURE__ */ E(() => o() ?? s() ?? r());
  var m = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), C();
    },
    get variant() {
      return n();
    },
    set variant(g) {
      n(g), C();
    },
    get decorative() {
      return i();
    },
    set decorative(g = !0) {
      i(g), C();
    },
    get label() {
      return o();
    },
    set label(g) {
      o(g), C();
    },
    get title() {
      return s();
    },
    set title(g) {
      s(g), C();
    },
    get size() {
      return l();
    },
    set size(g = "1rem") {
      l(g), C();
    },
    get className() {
      return d();
    },
    set className(g = "") {
      d(g), C();
    }
  }, b = Dc();
  let f;
  return fe(
    (g) => {
      he(b, 1, g, "svelte-1a09gvd"), X(b, "aria-hidden", i()), X(b, "aria-label", i() ? void 0 : a(u)), X(b, "role", i() ? void 0 : "img"), X(b, "title", s()), f = qi(b, "", f, { "--icon-mask": a(w), width: l(), height: l() });
    },
    [() => Ne(`app-icon ${d()}`.trim())]
  ), ee(e, b), Ui(m);
}
ma(
  ht,
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
const ga = "efsdb:window-settings", Yo = {
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
}, Hc = /* @__PURE__ */ new Set(["aero"]);
function Fc(e) {
  return Hc.has(e);
}
function Zi(e) {
  if (!Fc(e.themePreset))
    return e;
  const t = Yo[e.themePreset];
  return t ? {
    ...e,
    ...t.settings,
    themePreset: e.themePreset
  } : e;
}
const os = {
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
}, I = {
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
}, Ci = /* @__PURE__ */ new Set();
let Qt = yl();
function Vc(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Gc(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function Uc(e) {
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
      return I.buttonLayout;
  }
}
function Yc(e) {
  return e === "left" ? "left" : I.systemButtonPlacement;
}
function Zc(e) {
  return e === "mirrored" ? "mirrored" : I.sideResizeMode;
}
function Xc(e) {
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
      return I.themePreset;
  }
}
function Kc(e) {
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
      return I.fontPreset;
  }
}
function Jc(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return I.shiftDragAction;
  }
}
function Qc(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return I.chromeColorSource;
  }
}
function eh(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return I.chromeGlossStyle;
  }
}
function th(e) {
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
      return I.chromeBeamStyle;
  }
}
function rh(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return I.titleTone;
  }
}
function nh(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return I.titleEffect;
  }
}
function ih(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return I.dockLabelMode;
  }
}
function oh(e) {
  return e === "expanded" ? "expanded" : I.pageThemeSpread;
}
function He(e, t, r, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(r, Math.min(n, Math.round(i))) : t;
}
function bl(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : th(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : eh(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: Uc(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: Yc(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: Zc(e == null ? void 0 : e.sideResizeMode),
    borderWidth: He(
      e == null ? void 0 : e.borderWidth,
      I.borderWidth,
      0,
      12
    ),
    borderRadius: He(
      e == null ? void 0 : e.borderRadius,
      I.borderRadius,
      0,
      32
    ),
    chromePadding: He(
      e == null ? void 0 : e.chromePadding,
      I.chromePadding,
      0,
      20
    ),
    titleBarHeight: He(
      e == null ? void 0 : e.titleBarHeight,
      I.titleBarHeight,
      28,
      72
    ),
    windowScale: He(
      e == null ? void 0 : e.windowScale,
      I.windowScale,
      75,
      140
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : I.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : I.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: He(
      e == null ? void 0 : e.chromeBeamIntensity,
      I.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: He(
      e == null ? void 0 : e.chromeGlossIntensity,
      I.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: He(
      e == null ? void 0 : e.chromeGlossSpacing,
      I.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : I.chromeColorize,
    chromeColorSource: Qc(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: He(
      e == null ? void 0 : e.chromeColorIntensity,
      I.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : I.alignment,
    titleTone: rh(e == null ? void 0 : e.titleTone),
    titleEffect: nh(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : I.snapRestoreOnRelease,
    shiftDragAction: Jc(e == null ? void 0 : e.shiftDragAction),
    themePreset: Xc(e == null ? void 0 : e.themePreset),
    fontPreset: Kc(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : I.globalEdgeDock,
    dockButtonSize: He(
      e == null ? void 0 : e.dockButtonSize,
      I.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: He(
      e == null ? void 0 : e.dockButtonWidth,
      I.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: He(
      e == null ? void 0 : e.dockIconScale,
      I.dockIconScale,
      70,
      160
    ),
    dockGap: He(e == null ? void 0 : e.dockGap, I.dockGap, 4, 24),
    dockOffset: He(e == null ? void 0 : e.dockOffset, I.dockOffset, 8, 36),
    dockLabelMode: ih(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: oh(e == null ? void 0 : e.pageThemeSpread)
  };
}
function ah(e) {
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
function sh(e) {
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
function lh(e) {
  return (Yo[e] ?? Yo.inherit).shadow;
}
function dh(e) {
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
function ch(e) {
  const t = Zi(e), r = t.chromeTexture ? Math.max(0, Math.min(1, t.chromeBeamIntensity / 100)) : 0, n = t.chromeTexture ? t.chromeBeamStyle : "none", o = `${(n === "vista" ? 0.98 : n === "windows-7" ? 0.94 : n === "xp-luna" ? 0.82 : n === "windows-9x" ? 0.72 : n === "kde" ? 0.7 : n === "mica" ? 0.62 : 0) * r}`, s = Math.max(0, Math.min(1, t.chromeGlossIntensity / 100)), l = t.chromeColorize ? `${Math.max(0, Math.min(0.88, t.chromeColorIntensity / 100))}` : "0", d = dh(t.chromeColorSource), w = He(t.chromeColorIntensity, 48, 0, 100), u = t.chromeColorize ? Math.round(34 + w / 100 * 42) : 0, m = t.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - u}%, ${d} ${u}%)` : "#4580c4", b = {
    "--efs-window-chrome-texture-opacity": o,
    "--efs-window-chrome-beam-intensity": `${r}`,
    "--efs-window-chrome-gloss-intensity": `${s}`,
    "--efs-window-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": l,
    "--efs-window-chrome-tint": d,
    "--efs-window-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-window-shell-scale": `${t.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": o,
    "--efs-widget-chrome-beam-intensity": `${r}`,
    "--efs-widget-chrome-gloss-intensity": `${s}`,
    "--efs-widget-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": l,
    "--efs-widget-theme-tint": d,
    "--efs-widget-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${t.windowScale / 100}`,
    "--efs-win7-window-bg": m
  };
  if (!t.chromeColorize)
    return b;
  const f = w, g = Math.round(f / 100 * 34), y = Math.round(f / 100 * 26), v = Math.round(10 + f / 100 * 46), x = Math.round(6 + f / 100 * 32), L = Math.round(f / 100 * 28), H = Math.round(f / 100 * 22), te = Math.round(12 + f / 100 * 46), Q = Math.round(10 + f / 100 * 34), we = Math.round(90 - f / 100 * 16), oe = Math.round(92 - f / 100 * 18);
  return b["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - g}%, ${d} ${g}%)`, b["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - y}%, ${d} ${y}%)`, b["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - v}%, ${d} ${v}%)`, b["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - x}%, ${d} ${x}%)`, b["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${d}, transparent ${we}%), var(--efs-window-shell-shadow)`, b["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - L}%, ${d} ${L}%)`, b["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - H}%, ${d} ${H}%)`, b["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - te}%, ${d} ${te}%)`, b["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - Q}%, ${d} ${Q}%)`, b["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${d}, transparent ${oe}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, b;
}
function yl() {
  const e = Vc(ga);
  if (!e)
    return Gn(I), { ...I };
  try {
    const t = JSON.parse(e), r = Zi(bl(t));
    return Gn(r), r;
  } catch {
    return Gn(I), { ...I };
  }
}
function hh(e) {
  if (!e)
    return [];
  const t = [e], r = /* @__PURE__ */ new Set();
  for (; t.length > 0; ) {
    const n = t.shift();
    if (!(!n || r.has(n))) {
      r.add(n);
      try {
        const i = n.parent;
        i && i !== n && !r.has(i) && t.push(i);
      } catch {
      }
      try {
        for (let i = 0; i < n.frames.length; i += 1) {
          const o = n.frames[i];
          o && !r.has(o) && t.push(o);
        }
      } catch {
      }
    }
  }
  return [...r];
}
function jo(e, t) {
  const r = Zi(t), n = e.documentElement.style, i = e.documentElement, o = r.chromeGlossStyle, s = r.chromeTexture ? r.chromeBeamStyle : "none", l = Math.max(r.dockButtonSize, r.dockButtonWidth), d = os[r.fontPreset] ?? os.system, w = lh(r.themePreset), u = ch(r), m = [
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
  n.setProperty("--efs-font-sans", d.stack), n.setProperty("--shell-font-sans", d.stack), n.setProperty("--efs-window-font-family", d.stack), n.setProperty("--efs-window-border-width", `${r.borderWidth}px`), n.setProperty("--efs-window-radius", `${r.borderRadius}px`), n.setProperty("--efs-window-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-window-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-window-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-window-system-button-placement", r.systemButtonPlacement), n.setProperty("--efs-window-side-resize-mode", r.sideResizeMode), n.setProperty("--efs-window-shell-shadow", w), n.setProperty("--efs-widget-border-width", `${r.borderWidth}px`), n.setProperty("--efs-widget-radius", `${r.borderRadius}px`), n.setProperty("--efs-widget-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-widget-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-widget-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-widget-shadow", w), n.setProperty("--efs-dock-button-size", `${r.dockButtonSize}px`), n.setProperty("--efs-dock-button-width", `${l}px`), n.setProperty("--efs-dock-gap", `${r.dockGap}px`), n.setProperty("--efs-dock-offset", `${r.dockOffset}px`), n.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(r.dockButtonSize * 0.39))}px`
  ), n.setProperty("--efs-dock-icon-scale", `${r.dockIconScale / 100}`), n.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(l + r.dockButtonSize * 1.8))}px`
  ), n.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(r.dockButtonSize * 0.31))}px`
  ), n.setProperty("--efs-dock-label-mode", r.dockLabelMode), n.setProperty("--efs-dock-global-enabled", r.globalEdgeDock ? "1" : "0"), n.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), n.setProperty("--efs-page-theme-spread", r.pageThemeSpread), i.setAttribute("data-efs-page-theme", r.pageThemeSpread), i.setAttribute("data-efs-window-gloss", o), i.setAttribute("data-efs-window-beam", s), m.forEach((b) => n.removeProperty(b)), Object.entries(u).forEach(([b, f]) => n.setProperty(b, f));
}
function Gn(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    jo(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = hh(t);
  if (r.length === 0) {
    jo(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      jo(n.document, e);
    } catch {
    }
  });
}
function wh(e) {
  Qt = Zi(
    bl({
      ...Qt,
      ...e
    })
  ), Gn(Qt), Gc(ga, JSON.stringify(Qt)), Ci.forEach((t) => t(Qt));
}
function uh(e) {
  return Ci.add(e), e(Qt), () => {
    Ci.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  Gn(Qt);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || wh(t);
}), window.addEventListener("storage", (e) => {
  e.key === ga && (Qt = yl(), Ci.forEach((t) => t(Qt)));
}));
var fh = /* @__PURE__ */ ge('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), mh = /* @__PURE__ */ ge("<div><span></span></div>"), gh = /* @__PURE__ */ ge('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), _o = /* @__PURE__ */ ge('<button type="button"><!></button>'), ph = /* @__PURE__ */ ge('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), vh = /* @__PURE__ */ ge('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), bh = /* @__PURE__ */ ge('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), yh = /* @__PURE__ */ ge('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), kh = /* @__PURE__ */ ge('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), xh = /* @__PURE__ */ ge("<div><!></div>"), qh = /* @__PURE__ */ ge('<button type="button" tabindex="-1" aria-hidden="true"></button>'), jh = /* @__PURE__ */ ge("<!> <!> <div><!> <!> <!></div>", 1);
const _h = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--efs-window-theme-panel, var(--shell-panel, rgba(15, 23, 42, 0.94)));--window-surface: var(--efs-window-theme-surface, var(--shell-surface, rgba(15, 23, 42, 0.98)));--window-border: var(--efs-window-theme-border, var(--shell-border, rgba(148, 163, 184, 0.24)));--window-hover: var(--efs-window-theme-hover, var(--shell-row-hover, rgba(125, 211, 252, 0.12)));--window-shadow: var(--efs-window-theme-shadow, var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42))));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-chrome-tint: var(--efs-window-chrome-tint, var(--window-primary));--window-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--window-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--window-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--window-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--window-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--window-titlebar-height: 44px;--window-shell-scale: 1;--window-control-size-base: calc(2.15rem * var(--window-shell-scale));--window-control-size:\r
      min(\r
        var(--window-control-size-base),\r
        max(1.7rem, calc(var(--window-titlebar-height) - max(0.46rem, calc(var(--window-chrome-padding) * 0.9))))\r
      );--window-aux-width: calc(2.35rem * var(--window-shell-scale));--window-system-width: calc(2.75rem * var(--window-shell-scale));--window-system-height: var(--window-control-size);--window-control-gap: calc(0.14rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(10px * var(--window-shell-scale)));--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: calc(0.9rem * var(--window-shell-scale));--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space:\r
      max(0.18rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.52));--window-chrome-bottom-space:\r
      max(0.12rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.48));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;isolation:isolate;min-width:min(100vw - 1rem, 18rem);min-height:0;opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell.svelte-1k3ojqh:not(.win7-theme) {border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow),\r
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),\r
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),\r
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='mica'].svelte-1k3ojqh {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),\r
      color-mix(in srgb, var(--window-surface), transparent 10%);backdrop-filter:blur(22px) saturate(1.08);-webkit-backdrop-filter:blur(22px) saturate(1.08);}.window-shell[data-style='frost'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),\r
      color-mix(in srgb, var(--window-surface), transparent 18%);backdrop-filter:blur(24px) saturate(1.14);-webkit-backdrop-filter:blur(24px) saturate(1.14);}.window-shell[data-style='pane'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),\r
      color-mix(in srgb, var(--window-surface), transparent 8%);backdrop-filter:blur(16px) saturate(1.04);-webkit-backdrop-filter:blur(16px) saturate(1.04);}.window-shell[data-style='transparent'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),\r
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-1k3ojqh {--window-control-size-base: calc(1.92rem * var(--window-shell-scale));--window-aux-width: calc(2.05rem * var(--window-shell-scale));--window-system-width: calc(2.28rem * var(--window-shell-scale));--window-control-gap: calc(0.08rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(8px * var(--window-shell-scale)));}.window-shell.is-ready.svelte-1k3ojqh {opacity:1;}.window-shell.is-dragging.svelte-1k3ojqh,\r
  .window-shell.is-resizing.svelte-1k3ojqh {transition:none;}.window-shell.maximized.svelte-1k3ojqh {inset:0 !important;width:100vw !important;height:100vh !important;transform:none !important;border-radius:0;}.window-shell.minimized.svelte-1k3ojqh {opacity:0;pointer-events:none;transform:translate(0, calc(100vh + 2rem)) scale(0.98) !important;}.window-shell.rolled-up.svelte-1k3ojqh {height:auto !important;min-height:0;}.window-shell.chromeless.svelte-1k3ojqh {border:none;box-shadow:none;background:transparent;}.window-chrome.svelte-1k3ojqh {position:relative;isolation:isolate;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:0.65rem;min-height:calc(\r
      var(--window-system-height) + var(--window-chrome-top-space) + var(--window-chrome-bottom-space)\r
    );padding-top:var(--window-chrome-top-space);padding-bottom:var(--window-chrome-bottom-space);padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;overflow:hidden;background:transparent;}.window-shell[data-style='transparent'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:transparent;}.window-shell[data-style='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),\r
      color-mix(in srgb, var(--window-panel), transparent 12%);}.window-shell[data-style='frost'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),\r
      color-mix(in srgb, var(--window-panel), transparent 18%);}.window-shell[data-style='pane'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),\r
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-chrome.svelte-1k3ojqh::before,\r
  .window-chrome.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.window-chrome.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 88%), transparent 74%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 42%);opacity:var(--window-chrome-colorize-opacity);}.window-chrome.svelte-1k3ojqh::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.34),\r
        rgba(255, 255, 255, 0.14) 18%,\r
        rgba(255, 255, 255, 0.04) 52%,\r
        transparent 82%\r
      ),\r
      radial-gradient(132% 118% at 12% -18%, rgba(255, 255, 255, 0.28), transparent 44%),\r
      radial-gradient(116% 94% at 100% 0%, rgba(255, 255, 255, 0.16), transparent 42%),\r
      linear-gradient(\r
        116deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, 0.12) 38%,\r
        rgba(255, 255, 255, 0.04) 58%,\r
        transparent 80%\r
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.78);}.window-tools.svelte-1k3ojqh,\r
  .window-system-cluster.svelte-1k3ojqh,\r
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.window-system-cluster.svelte-1k3ojqh,\r
  .system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-system-cluster:where(.svelte-1k3ojqh),\r
  .window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);font-weight:600;letter-spacing:0.01em;color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-shell[data-title-tone='light'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(255, 255, 255, 0.96);}.window-shell[data-title-tone='dark'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(12, 18, 28, 0.88);}.window-shell[data-title-effect='plain'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:none;}.window-shell[data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(0, 0, 0, 0.16),\r
      0 2px 12px rgba(0, 0, 0, 0.18);}.window-shell[data-title-tone='dark'][data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.42),\r
      0 8px 18px rgba(255, 255, 255, 0.32);}.window-shell[data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 10px rgba(255, 255, 255, 0.82),\r
      0 0 10px rgba(255, 255, 255, 0.82),\r
      0 0 10px rgba(255, 255, 255, 0.82),\r
      0 1px 0 rgba(255, 255, 255, 0.58);}.window-shell[data-title-tone='light'][data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 12px rgba(12, 18, 28, 0.44),\r
      0 1px 0 rgba(0, 0, 0, 0.38);}.window-shell[data-title-effect='emboss'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.28),\r
      0 -1px 0 rgba(0, 0, 0, 0.38);}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-system-cluster.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:max(0.28rem, calc(var(--window-control-gap) * 0.75));min-width:0;}.window-help.svelte-1k3ojqh {position:relative;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;}.window-help-tooltip.svelte-1k3ojqh {position:absolute;top:calc(100% + 0.65rem);z-index:8;display:flex;flex-direction:column;gap:0.4rem;width:min(18rem, calc(100vw - 2rem));padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-radius:16px;background:radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 90%), transparent 34%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),\r
      color-mix(in srgb, var(--window-panel), transparent 2%);color:var(--window-text);box-shadow:var(--window-shadow),\r
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,\r
      transform 140ms ease;}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {right:0;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {left:0;}.window-help-tooltip.svelte-1k3ojqh::before {content:'';position:absolute;top:-0.42rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-left:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);background:color-mix(in srgb, var(--window-panel), transparent 2%);transform:rotate(45deg);}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {right:0.9rem;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {left:0.9rem;}.window-help-tooltip.svelte-1k3ojqh strong:where(.svelte-1k3ojqh) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.window-help-tooltip.svelte-1k3ojqh span:where(.svelte-1k3ojqh) {color:color-mix(in srgb, var(--window-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.window-help.svelte-1k3ojqh:hover .window-help-tooltip:where(.svelte-1k3ojqh),\r
  .window-help.svelte-1k3ojqh:focus-within .window-help-tooltip:where(.svelte-1k3ojqh) {opacity:1;transform:translateY(0);}.window-button.svelte-1k3ojqh {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid\r
      color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);overflow:hidden;transition:background-color 140ms ease,\r
      border-color 140ms ease,\r
      color 140ms ease,\r
      box-shadow 140ms ease,\r
      transform 140ms ease;}.window-button.svelte-1k3ojqh::before,\r
  .window-button.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.window-button.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 86%), transparent 74%),\r
      radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 56%);opacity:calc(var(--window-chrome-colorize-opacity) * 0.72);}.window-button.svelte-1k3ojqh::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.28),\r
        rgba(255, 255, 255, 0.1) 42%,\r
        rgba(255, 255, 255, 0.02) 76%,\r
        transparent 100%\r
      ),\r
      radial-gradient(130% 118% at 18% -24%, rgba(255, 255, 255, 0.18), transparent 46%),\r
      linear-gradient(\r
        118deg,\r
        transparent 16%,\r
        rgba(255, 255, 255, 0.1) 42%,\r
        rgba(255, 255, 255, 0.03) 64%,\r
        transparent 86%\r
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.44);}.window-button.svelte-1k3ojqh .app-icon {position:relative;z-index:1;width:var(--window-icon-size);height:var(--window-icon-size);}.help-button.svelte-1k3ojqh .app-icon {width:min(var(--window-icon-size), 0.92rem);height:min(var(--window-icon-size), 0.92rem);}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 68%);background:color-mix(in srgb, var(--window-hover), var(--window-chrome-tint) 16%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 56%);background:color-mix(in srgb, var(--window-chrome-tint), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;border-color:color-mix(in srgb, var(--window-border), transparent 24%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),\r
      color-mix(in srgb, var(--window-panel), transparent 12%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,\r
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),\r
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh,\r
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh),\r
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-1k3ojqh {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-w7-title-bg:\r
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),\r
      #4580c4;--window-w7-glass-stripes:\r
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),\r
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),\r
      linear-gradient(\r
          54deg,\r
          rgba(0, 0, 0, 0.12) 0 4%,\r
          rgba(102, 102, 102, 0.08) 6% 6%,\r
          rgba(0, 0, 0, 0.12) 8% 10%,\r
          rgba(0, 0, 0, 0.12) 15% 16%,\r
          rgba(170, 170, 170, 0.08) 17% 18%,\r
          rgba(0, 0, 0, 0.12) 23% 24%,\r
          rgba(187, 187, 187, 0.12) 25% 26%,\r
          rgba(0, 0, 0, 0.12) 31% 33%,\r
          rgba(0, 0, 0, 0.12) 34% 34.5%,\r
          rgba(187, 187, 187, 0.12) 36% 40%,\r
          rgba(0, 0, 0, 0.12) 41% 41.5%,\r
          rgba(187, 187, 187, 0.12) 44% 45%,\r
          rgba(187, 187, 187, 0.12) 46% 47%,\r
          rgba(0, 0, 0, 0.12) 48% 49%,\r
          rgba(0, 0, 0, 0.12) 50% 50.5%,\r
          rgba(0, 0, 0, 0.12) 56% 56.5%,\r
          rgba(187, 187, 187, 0.12) 57% 63%,\r
          rgba(0, 0, 0, 0.12) 67% 69%,\r
          rgba(187, 187, 187, 0.12) 69.5% 70%,\r
          rgba(0, 0, 0, 0.12) 73.5% 74%,\r
          rgba(187, 187, 187, 0.12) 74.5% 79%,\r
          rgba(0, 0, 0, 0.12) 80% 84%,\r
          rgba(170, 170, 170, 0.12) 85% 86%,\r
          rgba(0, 0, 0, 0.12) 87%,\r
          rgba(187, 187, 187, 0.08) 90%\r
        )\r
        left center / 100vw 100vh no-repeat;--window-w7-control-bg:\r
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);--window-w7-control-border: #0000004d;border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),\r
      inset 0 0 0 1px rgba(255, 255, 255, 0.82),\r
      inset 0 0 0 2px rgba(255, 255, 255, 0.08);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),\r
      var(--window-w7-title-bg);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.54),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.54);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.52),\r
        rgba(255, 255, 255, 0.24) 18%,\r
        rgba(255, 255, 255, 0.08) 52%,\r
        transparent 86%\r
      ),\r
      radial-gradient(140% 126% at 10% -18%, rgba(255, 255, 255, 0.42), transparent 42%),\r
      radial-gradient(94% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.22);border:1px solid var(--window-w7-control-border);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.8),\r
      1px 0 0 rgba(255, 255, 255, 0.66),\r
      -1px 0 0 rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid var(--window-w7-control-border);border-radius:0;background:var(--window-w7-control-bg);color:rgba(0, 0, 0, 0.76);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      linear-gradient(\r
        rgba(224, 161, 151, 0.9),\r
        rgba(207, 121, 106, 0.95) 25% 50%,\r
        rgba(213, 79, 54, 0.96) 50%\r
      );color:rgba(255, 255, 255, 0.94);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-vista-title-bg:\r
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),\r
      #6c8fbe;--window-vista-glass-stripes:\r
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),\r
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),\r
      linear-gradient(\r
          54deg,\r
          rgba(0, 0, 0, 0.08) 0 4%,\r
          rgba(168, 206, 235, 0.14) 6% 6%,\r
          rgba(0, 0, 0, 0.1) 8% 10%,\r
          rgba(0, 0, 0, 0.08) 15% 16%,\r
          rgba(184, 224, 248, 0.16) 17% 18%,\r
          rgba(0, 0, 0, 0.1) 23% 24%,\r
          rgba(210, 235, 252, 0.18) 25% 26%,\r
          rgba(0, 0, 0, 0.1) 31% 33%,\r
          rgba(0, 0, 0, 0.08) 34% 34.5%,\r
          rgba(218, 239, 255, 0.18) 36% 40%,\r
          rgba(0, 0, 0, 0.08) 41% 41.5%,\r
          rgba(224, 244, 255, 0.18) 44% 45%,\r
          rgba(224, 244, 255, 0.18) 46% 47%,\r
          rgba(0, 0, 0, 0.08) 48% 49%,\r
          rgba(0, 0, 0, 0.08) 50% 50.5%,\r
          rgba(0, 0, 0, 0.08) 56% 56.5%,\r
          rgba(224, 244, 255, 0.18) 57% 63%,\r
          rgba(0, 0, 0, 0.08) 67% 69%,\r
          rgba(224, 244, 255, 0.18) 69.5% 70%,\r
          rgba(0, 0, 0, 0.08) 73.5% 74%,\r
          rgba(224, 244, 255, 0.18) 74.5% 79%,\r
          rgba(0, 0, 0, 0.08) 80% 84%,\r
          rgba(172, 214, 239, 0.16) 85% 86%,\r
          rgba(0, 0, 0, 0.08) 87%,\r
          rgba(224, 244, 255, 0.12) 90%\r
        )\r
        left center / 100vw 100vh no-repeat;--window-vista-control-bg:\r
      linear-gradient(\r
        rgba(255, 255, 255, 0.62),\r
        rgba(255, 255, 255, 0.34) 45%,\r
        rgba(0, 0, 0, 0.12) 50%,\r
        rgba(0, 0, 0, 0.14) 76%,\r
        rgba(255, 255, 255, 0.54)\r
      );border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),\r
      inset 0 0 0 1px rgba(255, 255, 255, 0.88),\r
      inset 0 0 0 2px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),\r
      var(--window-vista-title-bg);backdrop-filter:blur(9px) saturate(1.02);-webkit-backdrop-filter:blur(9px) saturate(1.02);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.62),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.62);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.62),\r
        rgba(255, 255, 255, 0.3) 18%,\r
        rgba(255, 255, 255, 0.1) 58%,\r
        transparent 90%\r
      ),\r
      radial-gradient(142% 128% at 8% -22%, rgba(255, 255, 255, 0.48), transparent 44%),\r
      radial-gradient(106% 118% at 100% 0%, rgba(255, 255, 255, 0.26), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.68);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.26);border:1px solid rgba(0, 0, 0, 0.35);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.84),\r
      1px 0 0 rgba(255, 255, 255, 0.72),\r
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid rgba(0, 0, 0, 0.35);border-radius:0;background:var(--window-vista-control-bg);color:rgba(0, 0, 0, 0.82);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.72),\r
      inset 0 1px 0 rgba(255, 255, 255, 0.38);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      linear-gradient(\r
        rgba(233, 176, 166, 0.94),\r
        rgba(211, 110, 95, 0.96) 25% 50%,\r
        rgba(201, 52, 37, 0.98) 50%\r
      );color:rgba(255, 255, 255, 0.96);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),\r
      color-mix(in srgb, var(--window-panel), transparent 10%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),\r
      radial-gradient(\r
        124% 134% at 100% 0%,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),\r
        transparent 38%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),\r
      linear-gradient(\r
        138deg,\r
        rgba(255, 255, 255, 0.1),\r
        transparent 28%,\r
        rgba(255, 255, 255, 0.04) 58%,\r
        transparent 84%\r
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),\r
      color-mix(in srgb, var(--window-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh {--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:color-mix(in srgb, var(--window-border), transparent 10%);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-system-height: 1.75rem;--window-system-icon-size: 0.76rem;--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));box-shadow:var(--window-shadow),\r
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),\r
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.45rem;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),\r
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-system-height: 0.96rem;--window-system-icon-size: 0.48rem;--window-control-radius: 999px;--window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.55rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh):hover .window-button.system:where(.svelte-1k3ojqh) .app-icon,\r
  .window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .minimize-button:where(.svelte-1k3ojqh) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .maximize-button:where(.svelte-1k3ojqh) {background:#28c840;}.window-shell[data-theme='ios'].svelte-1k3ojqh {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-1k3ojqh {--window-control-radius: 999px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));--window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));}.window-shell[data-theme='android'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh {--window-aux-width: 2.05rem;--window-control-size: 2rem;--window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),\r
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh {--window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),\r
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-1k3ojqh {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-shell[data-beam='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-w7-glass-stripes, none),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.6 + var(--window-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.14)) 16%,\r
        rgba(255, 255, 255, calc(0.06 + var(--window-beam-intensity) * 0.05)) 46%,\r
        transparent 72%\r
      ),\r
      radial-gradient(\r
        156% 132% at 52% -36%,\r
        rgba(255, 255, 255, calc(0.56 + var(--window-beam-intensity) * 0.24)),\r
        transparent 38%\r
      ),\r
      radial-gradient(\r
        118% 118% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        104deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.26 + var(--window-beam-intensity) * 0.18)) 20%,\r
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.08)) 40%,\r
        transparent 60%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),\r
        transparent 42%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.44 + var(--window-beam-intensity) * 0.98),\r
      1\r
    );}.window-shell[data-beam='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-vista-glass-stripes, var(--window-w7-glass-stripes, none)),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.68 + var(--window-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.05)) 52%,\r
        transparent 76%\r
      ),\r
      radial-gradient(\r
        164% 136% at 50% -42%,\r
        rgba(255, 255, 255, calc(0.62 + var(--window-beam-intensity) * 0.24)),\r
        transparent 40%\r
      ),\r
      radial-gradient(\r
        124% 122% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.14)),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        106deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.32 + var(--window-beam-intensity) * 0.16)) 18%,\r
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.08)) 40%,\r
        transparent 62%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 78%),\r
        transparent 42%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 1),\r
      1\r
    );}.window-shell[data-beam='xp-luna'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 88%, var(--window-chrome-tint) 12%),\r
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.08)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        148% 120% at 16% -6%,\r
        color-mix(in srgb, white 84%, var(--window-chrome-tint) 16%),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        96deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.1)) 22%,\r
        transparent 48%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 76%),\r
        transparent 42%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.62 + var(--window-beam-intensity) * 0.88),\r
      1\r
    );}.window-shell[data-beam='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.16)) 0 2px,\r
        rgba(255, 255, 255, calc(0.12 + var(--window-beam-intensity) * 0.06)) 2px 5px,\r
        transparent 5px\r
      ),\r
      linear-gradient(\r
        90deg,\r
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)) 0 1px,\r
        transparent 1px 100%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),\r
        transparent 72%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.78),\r
      1\r
    );}.window-shell[data-beam='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.24 + var(--window-beam-intensity) * 0.12)),\r
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.06)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        144% 118% at 18% -8%,\r
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.1)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 86%),\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 80%),\r
        transparent 42%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.52 + var(--window-beam-intensity) * 0.82),\r
      1\r
    );}.window-shell[data-beam='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:radial-gradient(\r
        146% 124% at 18% -18%,\r
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.08)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.06)),\r
        transparent 76%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 90%),\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),\r
        transparent 42%\r
      );opacity:clamp(\r
      0,\r
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.74),\r
      1\r
    );}.window-shell[data-gloss='none'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-gloss='none'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {opacity:0;}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.3 + var(--window-gloss-intensity) * 0.24)),\r
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.12)) 18%,\r
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)) 58%,\r
        transparent 88%\r
      ),\r
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.22)), transparent 46%),\r
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.12)), transparent 42%),\r
      linear-gradient(\r
        114deg,\r
        transparent 12%,\r
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.12)) calc(28% + var(--window-gloss-spacing) * 0.22),\r
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(54% + var(--window-gloss-spacing) * 0.1),\r
        transparent 82%\r
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.02);}.window-shell[data-gloss='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.38 + var(--window-gloss-intensity) * 0.24)),\r
        rgba(255, 255, 255, calc(0.16 + var(--window-gloss-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.06)) 62%,\r
        transparent 90%\r
      ),\r
      radial-gradient(138% 128% at 8% -22%, rgba(255, 255, 255, calc(0.26 + var(--window-gloss-intensity) * 0.24)), transparent 46%),\r
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 42%),\r
      linear-gradient(\r
        116deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.14)) calc(30% + var(--window-gloss-spacing) * 0.22),\r
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.05)) calc(56% + var(--window-gloss-spacing) * 0.12),\r
        transparent 84%\r
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.06);}.window-shell[data-gloss='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.18)),\r
        rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.08)) 24%,\r
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.03)) 60%,\r
        transparent 86%\r
      ),\r
      radial-gradient(132% 116% at 14% -16%, rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.14)), transparent 44%),\r
      linear-gradient(\r
        124deg,\r
        transparent 10%,\r
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.08)) calc(26% + var(--window-gloss-spacing) * 0.2),\r
        rgba(255, 255, 255, calc(0.015 + var(--window-gloss-intensity) * 0.03)) calc(58% + var(--window-gloss-spacing) * 0.12),\r
        transparent 86%\r
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.94);}.window-shell[data-gloss='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(146% 120% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 44%),\r
      radial-gradient(126% 136% at 100% 0%, color-mix(in srgb, var(--window-chrome-tint), transparent calc(92% - var(--window-gloss-intensity) * 10%)), transparent 40%),\r
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.1 + var(--window-gloss-intensity) * 0.1)), rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.02)) 52%, transparent 82%),\r
      linear-gradient(\r
        138deg,\r
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)),\r
        transparent 28%,\r
        rgba(255, 255, 255, calc(0.01 + var(--window-gloss-intensity) * 0.02)) calc(58% + var(--window-gloss-spacing) * 0.1),\r
        transparent 86%\r
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.96);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.08)) 72%,\r
        transparent 100%\r
      ),\r
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.18)),\r
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.06)) 44%,\r
        transparent 100%\r
      ),\r
      radial-gradient(128% 118% at 18% -24%, rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.08)), transparent 46%),\r
      linear-gradient(\r
        130deg,\r
        transparent 12%,\r
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(40% + var(--window-gloss-spacing) * 0.12),\r
        transparent 84%\r
      );}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar:where(.svelte-1k3ojqh) {padding-top:0;padding-inline:6px;gap:0.55rem;border-bottom:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-text:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-text:where(.svelte-1k3ojqh) {line-height:15px;padding-top:6px;letter-spacing:0;font-weight:600;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) {gap:0;align-self:start;overflow:hidden;background:rgba(255, 255, 255, 0.18);border:1px solid rgba(0, 0, 0, 0.3);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.82),\r
      1px 0 0 rgba(255, 255, 255, 0.72),\r
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {position:relative;min-width:29px;min-height:19px;width:auto;height:auto;padding:0;border:0;border-right:1px solid rgba(0, 0, 0, 0.3);border-radius:0;box-shadow:none;box-sizing:border-box;background:none;color:rgba(12, 18, 28, 0.84);overflow:visible;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,\r
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {inset:0;border-radius:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before {box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {opacity:0;transition:opacity 120ms linear;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover {transform:none;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,\r
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after {border-bottom-right-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,\r
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after {border-bottom-left-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.72rem;height:0.72rem;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-w7-control-bg, var(--window-vista-control-bg));}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-vista-control-bg);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,\r
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after {opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(93, 196, 240, 0.82),\r
      inset 0 0 0 1px rgba(255, 255, 255, 0.82);background:radial-gradient(circle at bottom, rgba(42, 206, 218, 0.9), transparent 65%),\r
      linear-gradient(#b6d9ee 50%, #1a6ca1 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(104, 196, 244, 0.86),\r
      inset 0 0 0 1px rgba(255, 255, 255, 0.86);background:radial-gradient(circle at bottom, rgba(118, 220, 255, 0.94), transparent 65%),\r
      linear-gradient(#d3e9f8 48%, #4f88b7 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after {background:radial-gradient(circle at bottom, rgba(11, 253, 250, 0.88), transparent 65%),\r
      linear-gradient(#86a7bc 50%, #092747 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh),\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:48px;color:rgba(255, 255, 255, 0.96);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      linear-gradient(#efb0a6, #d36e5f 25% 50%, #c93425 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after {box-shadow:0 0 7px 3px rgba(230, 142, 117, 0.9),\r
      inset 0 0 0 1px rgba(255, 255, 255, 0.78);background:radial-gradient(circle at 50% 170%, rgba(244, 230, 118, 0.9) 10% 20%, transparent 60%),\r
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),\r
      linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after,\r
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after {background:radial-gradient(circle at 50% 170%, rgba(220, 192, 63, 0.92) 10% 20%, transparent 60%),\r
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),\r
      linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%);}.window-shell.win7-theme.svelte-1k3ojqh {overflow:visible;color:var(--w7-el-c);font-family:var(--w7-font);}.window-shell.win7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:0 var(--w7-w-space) var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:0 0 0 1px #fff9;color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}.window-shell.basic7-theme.svelte-1k3ojqh {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,\r
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,\r
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%\r
      );border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;color:var(--w7-el-c);font-family:var(--w7-font);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),\r
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;}.window-shell.basic7-theme.svelte-1k3ojqh::after {content:none;display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome.title-bar:where(.svelte-1k3ojqh) {min-height:0;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),\r
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.54),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before,\r
  .window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.35rem;padding-top:calc(var(--w7-w-space) - 1px);}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::before,\r
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::after {inset:0;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):hover,\r
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):active,\r
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button.is-active:where(.svelte-1k3ojqh) {color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):focus-visible {outline-offset:-4px;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) .app-icon {width:0.78rem;height:0.78rem;}.window-shell.basic7-theme.svelte-1k3ojqh .window-title.title-bar-text:where(.svelte-1k3ojqh) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);}.window-shell.basic7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:var(--w7-w-space);margin-top:0;border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}:host(:not([theme='light'])) .window-shell.basic7-theme.svelte-1k3ojqh {--efs-win7-surface: #1c2229;--efs-win7-text: #e7edf8;--efs-win7-text-muted: #8591a2;--efs-win7-window-border: rgba(8, 12, 18, 0.82);--efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);--efs-win7-scrollbar: #5f7ea2;}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.window-shell.win7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.window-shell.basic7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}\r
\r
  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size-base: calc(1.86rem * var(--window-shell-scale));--window-aux-width: calc(1.96rem * var(--window-shell-scale));--window-system-width: calc(2.16rem * var(--window-shell-scale));--window-control-gap: calc(0.06rem * var(--window-shell-scale));}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(\r
        var(--window-system-height) +\r
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +\r
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))\r
      );}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}\r
  }`
};
function kl(e, t) {
  Gi(t, !0), fa(e, _h);
  let r = A(t, "title", 7), n = A(t, "helpText", 7, ""), i = A(t, "helpPlacement", 7, "auto"), o = A(t, "state", 15, "normal"), s = A(t, "x", 15, 100), l = A(t, "y", 15, 100), d = A(t, "width", 15, 600), w = A(t, "height", 15, 400), u = A(t, "locked", 7, !1), m = A(t, "chromeless", 7, !1), b = A(t, "buttonLayout", 7), f = A(t, "systemButtonPlacement", 7), g = A(t, "sideResizeMode", 7), y = A(t, "borderWidth", 7), v = A(t, "borderRadius", 7), x = A(t, "chromePadding", 7), L = A(t, "chromeStyle", 7), H = A(t, "alignment", 7), te = A(t, "themePreset", 7), Q = A(t, "fontPreset", 7), we = A(t, "snapRestoreOnRelease", 7), oe = A(t, "shiftDragAction", 7), be = A(t, "zIndex", 7, 100), Me = A(t, "pinned", 7, !1), ke = A(t, "dragSeed", 7, null), xe = A(t, "restoreFrame", 15, null), V = A(t, "snapTarget", 15, null), Je = A(t, "onClose", 7), Ue = A(t, "onPinToggle", 7), Nt = A(t, "onConsumeDragSeed", 7), $t = A(t, "onStateChange", 7), or = A(t, "children", 7);
  const Mr = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], Be = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), ar = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], sr = 360, Jr = 240, Xi = 1400;
  let k = /* @__PURE__ */ Z(Ar({ ...I })), K = /* @__PURE__ */ Z(!1), qe = /* @__PURE__ */ Z(!1), Y = /* @__PURE__ */ Z(null), Ht = /* @__PURE__ */ Z(null), lr = /* @__PURE__ */ Z(0), dr = /* @__PURE__ */ Z(0), Qr = "", jn = 0, li = 0, en = 0, _n = 0, Et = 0, zr = 0, dt = "se", Ft = null, Tr = !1, Vt = !1, di = 0.5, Qe = 18, ze = !1, Te = /* @__PURE__ */ Z(null), re = 0, $e = /* @__PURE__ */ Z(null), $r = /* @__PURE__ */ Z(0), cr = /* @__PURE__ */ Z(0);
  ul(() => {
    const c = requestAnimationFrame(() => {
      q(K, !0);
    }), p = uh((S) => {
      q(k, { ...S }, !0);
    });
    return () => {
      cancelAnimationFrame(c), p(), Pn(), re && typeof window < "u" && window.clearTimeout(re);
    };
  });
  let je = /* @__PURE__ */ E(() => b() ?? a(k).buttonLayout), Gt = /* @__PURE__ */ E(() => f() ?? a(k).systemButtonPlacement), Er = /* @__PURE__ */ E(() => g() ?? a(k).sideResizeMode), Sn = /* @__PURE__ */ E(() => y() ?? a(k).borderWidth), Ki = /* @__PURE__ */ E(() => v() ?? a(k).borderRadius), Ji = /* @__PURE__ */ E(() => x() ?? a(k).chromePadding), tn = /* @__PURE__ */ E(() => Math.max(28, a(k).titleBarHeight ?? I.titleBarHeight)), ci = /* @__PURE__ */ E(() => Math.max(0.75, (a(k).windowScale ?? I.windowScale) / 100)), Mn = /* @__PURE__ */ E(() => L() ?? a(k).chromeStyle), Qi = /* @__PURE__ */ E(() => a(k).chromeTexture ? a(k).chromeBeamStyle : "none"), hi = /* @__PURE__ */ E(() => a(k).chromeGlossStyle), wi = /* @__PURE__ */ E(() => H() ?? a(k).alignment), hr = /* @__PURE__ */ E(() => te() ?? a(k).themePreset), eo = /* @__PURE__ */ E(() => Q() ?? a(k).fontPreset), to = /* @__PURE__ */ E(() => we() ?? a(k).snapRestoreOnRelease), yt = /* @__PURE__ */ E(() => oe() ?? a(k).shiftDragAction), Pr = /* @__PURE__ */ E(() => d() < 560 ? "left" : a(wi)), rn = /* @__PURE__ */ E(() => d() < 520), ro = /* @__PURE__ */ E(() => ah({
    themePreset: a(hr),
    titleTone: a(k).titleTone
  })), jl = /* @__PURE__ */ E(() => sh({
    themePreset: a(hr),
    titleEffect: a(k).titleEffect
  })), pa = /* @__PURE__ */ E(() => n().trim().length > 0), va = /* @__PURE__ */ E(() => i() === "auto" ? a(Gt) === "left" ? "after" : "before" : i()), R = /* @__PURE__ */ E(() => a(hr) === "aero"), ba = /* @__PURE__ */ E(() => a(hr) === "windows-basic"), se = /* @__PURE__ */ E(() => a(R) || a(ba)), Oe = /* @__PURE__ */ E(() => a(se) || a(hr) === "windows-vista"), _l = /* @__PURE__ */ E(() => Math.max(a($r), a(cr)) + (a(rn) ? 12 : 18));
  function no(c) {
    return Be.has(c);
  }
  function ya(c) {
    switch (c) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function ka(c, p = !1) {
    if (p)
      return c === "mac" || c === "ubuntu" || c === "xubuntu" ? void 0 : "stack";
    switch (c) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function xa(c, p = !1) {
    if (p)
      return "stack";
    switch (c) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let wr = /* @__PURE__ */ Z(!1), zn = 0, Tn = 0, ui = 0, fi = 0, Sl = /* @__PURE__ */ E(() => a(wr) && !m() && !u() && a(je) !== "mac" && typeof window < "u" && a(dr) <= 84 && Math.abs(a(lr) - window.innerWidth / 2) <= 232), $n = /* @__PURE__ */ E(() => a(Y) ? _a(a(Y)) : null);
  function ur(c) {
    var p;
    o() !== c && (o(c), (p = $t()) == null || p(o()));
  }
  function En() {
    return { x: s(), y: l(), width: d(), height: w() };
  }
  function io(c, p = d()) {
    return typeof window > "u" ? Math.max(0, c) : Math.max(0, Math.min(window.innerWidth - p, c));
  }
  function oo(c, p = w()) {
    return typeof window > "u" ? Math.max(0, c) : Math.max(0, Math.min(window.innerHeight - Math.min(p, a(tn)), c));
  }
  function Rr(c) {
    const p = Math.max(sr, Math.round(c.width)), S = Math.max(Jr, Math.round(c.height));
    return {
      x: io(Math.round(c.x), p),
      y: oo(Math.round(c.y), S),
      width: p,
      height: S
    };
  }
  function ao() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : Rr({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function qa(c) {
    const p = Rr(c);
    s(p.x), l(p.y), d(p.width), w(p.height), V(null), ur("normal");
  }
  function ja() {
    qa(xe() ?? ao());
  }
  function _a(c) {
    if (typeof window > "u") return null;
    const p = window.innerWidth, S = window.innerHeight, T = Math.round(p / 2), le = Math.round(S / 2);
    switch (c) {
      case "maximize":
        return { x: 0, y: 0, width: p, height: S };
      case "left-half":
        return { x: 0, y: 0, width: T, height: S };
      case "right-half":
        return {
          x: p - T,
          y: 0,
          width: T,
          height: S
        };
      case "top-left":
        return { x: 0, y: 0, width: T, height: le };
      case "top-right":
        return {
          x: p - T,
          y: 0,
          width: T,
          height: le
        };
      case "bottom-left":
        return {
          x: 0,
          y: S - le,
          width: T,
          height: le
        };
      case "bottom-right":
        return {
          x: p - T,
          y: S - le,
          width: T,
          height: le
        };
    }
  }
  function so(c, p = En()) {
    if (xe(Rr(p)), c === "maximize") {
      typeof window < "u" && (s(0), l(0), d(window.innerWidth), w(window.innerHeight)), V("maximize"), ur("maximized");
      return;
    }
    const S = _a(c);
    S && (V(c), ur("normal"), s(S.x), l(S.y), d(S.width), w(S.height));
  }
  function Ml() {
    typeof window > "u" || ((o() === "maximized" || V()) && ja(), s(io(Math.round((window.innerWidth - d()) / 2), d())), l(oo(Math.round((window.innerHeight - w()) / 2), w())));
  }
  function mi() {
    if (o() === "maximized") {
      ja();
      return;
    }
    so("maximize");
  }
  function zl() {
    ur(o() === "rolled-up" ? "normal" : "rolled-up");
  }
  function Sa() {
    ur("minimized");
  }
  function Tl() {
    q(Te, null), re && typeof window < "u" && window.clearTimeout(re), re = 0;
  }
  function Ma(c) {
    if (typeof window > "u") {
      q(Te, c, !0);
      return;
    }
    Tl(), q(Te, c, !0), re = window.setTimeout(
      () => {
        q(Te, null), re = 0;
      },
      Xi
    );
  }
  function $l() {
    var le, ye;
    if (typeof window > "u" || !a($e))
      return !1;
    const c = 24, p = Math.ceil(Math.max(a($e).scrollWidth, ((le = a($e).firstElementChild) == null ? void 0 : le.scrollWidth) ?? 0)), S = Math.ceil(Math.max(a($e).scrollHeight, ((ye = a($e).firstElementChild) == null ? void 0 : ye.scrollHeight) ?? 0)), T = Rr({
      x: Math.round((window.innerWidth - p) / 2),
      y: Math.round((window.innerHeight - S - a(tn)) / 2),
      width: Math.min(window.innerWidth - c * 2, Math.max(sr, p + a(Sn) * 2)),
      height: Math.min(window.innerHeight - c * 2, Math.max(Jr, S + a(tn) + a(Sn) * 2))
    });
    return xe(En()), qa(T), !0;
  }
  function El(c) {
    if (u() || m() || za(c.target))
      return;
    if (a(Te) === "fit-content") {
      Ma("maximize"), mi();
      return;
    }
    const p = $l();
    Ma(p ? "fit-content" : "maximize"), p || mi();
  }
  function za(c) {
    return !!(c != null && c.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Pl(c, p) {
    if (!a(Ht)) return null;
    for (const S of a(Ht).querySelectorAll("[data-snap-target]")) {
      const T = S.getBoundingClientRect();
      if (c >= T.left && c <= T.right && p >= T.top && p <= T.bottom)
        return S.dataset.snapTarget;
    }
    return null;
  }
  function Rl(c, p) {
    if (typeof window > "u") return null;
    const S = 18, T = Math.max(72, Math.round(window.innerHeight * 0.14));
    return p <= S ? c <= window.innerWidth * 0.33 ? "top-left" : c >= window.innerWidth * 0.67 ? "top-right" : "maximize" : c <= S ? p <= T ? "top-left" : p >= window.innerHeight - T ? "bottom-left" : "left-half" : c >= window.innerWidth - S ? p <= T ? "top-right" : p >= window.innerHeight - T ? "bottom-right" : "right-half" : null;
  }
  function Cl(c, p) {
    if (q(lr, c, !0), q(dr, p, !0), !a(wr) || u() || m() || a(je) === "mac") {
      q(Y, null);
      return;
    }
    q(Y, Pl(c, p) ?? Rl(c, p), !0);
  }
  function Il(c, p) {
    if (!Vt) return;
    const S = xe() ?? ao(), T = Rr({
      ...S,
      x: c - S.width * di,
      y: p - Qe
    });
    s(T.x), l(T.y), d(T.width), w(T.height), ur("normal"), V(null), Vt = !1, Tr = !0, zn = c, Tn = p, ui = s(), fi = l();
  }
  function Ta(c) {
    !c.shiftKey || ze || a(yt) !== "pin" || !Ue() || Me() || (Ue()(), ze = !0);
  }
  function Al(c) {
    if (u() || m() || o() === "minimized" || za(c.target)) return;
    q(wr, !0), ze = !1, q(Y, null), q(lr, c.clientX, !0), q(dr, c.clientY, !0), zn = c.clientX, Tn = c.clientY, ui = s(), fi = l(), Tr = !1, Vt = !1;
    const p = En();
    di = p.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (c.clientX - p.x) / p.width)), Qe = Math.max(12, Math.min(28, Math.round(c.clientY - p.y || 18))), o() === "maximized" || V() ? (Ft = o() === "maximized" ? "maximize" : V(), xe(xe() ?? ao()), Vt = !0) : Ft = null, Ta(c), c.currentTarget.setPointerCapture(c.pointerId);
  }
  function lo(c) {
    a(wr) && (Ta(c), Vt && (Math.abs(c.clientX - zn) > 2 || Math.abs(c.clientY - Tn) > 2) && Il(c.clientX, c.clientY), s(io(ui + (c.clientX - zn), d())), l(oo(fi + (c.clientY - Tn), w())), Cl(c.clientX, c.clientY));
  }
  function nn(c) {
    if (!a(wr)) return;
    const p = a(Y);
    q(Y, null), q(wr, !1), Vt = !1, p ? so(p, En()) : Tr && Ft && a(to) && !c.shiftKey && !ze ? so(Ft, En()) : V(null), Ft = null, Tr = !1, ze = !1;
    const S = c.currentTarget;
    "hasPointerCapture" in S && S.hasPointerCapture(c.pointerId) && S.releasePointerCapture(c.pointerId), window.removeEventListener("pointermove", lo), window.removeEventListener("pointerup", nn), window.removeEventListener("pointercancel", nn);
  }
  function Ll(c, p) {
    u() || m() || o() === "maximized" || o() === "minimized" || (V() && V(null), p.stopPropagation(), p.preventDefault(), q(qe, !0), dt = c, jn = p.clientX, li = p.clientY, en = s(), _n = l(), Et = d(), zr = w(), q(Y, null), window.addEventListener("pointermove", $a), window.addEventListener("pointerup", Pn), window.addEventListener("pointercancel", Pn));
  }
  function $a(c) {
    if (!a(qe)) return;
    const p = c.clientX - jn, S = c.clientY - li;
    let T = en, le = _n, ye = Et, We = zr;
    if (a(Er) === "mirrored" && (dt === "e" || dt === "w")) {
      const co = dt === "e" ? p : -p;
      ye = Math.max(sr, Et + co * 2), T = en - (ye - Et) / 2;
    } else dt.includes("e") && (ye = Math.max(sr, Et + p));
    dt.includes("s") && (We = Math.max(Jr, zr + S)), a(Er) !== "mirrored" && dt.includes("w") && (ye = Math.max(sr, Et - p), T = en + (Et - ye)), dt.includes("n") && (We = Math.max(Jr, zr - S), le = _n + (zr - We));
    const Ut = Rr({ x: T, y: le, width: ye, height: We });
    s(Ut.x), l(Ut.y), d(Ut.width), w(Ut.height);
  }
  function Pn() {
    a(qe) && (q(qe, !1), window.removeEventListener("pointermove", $a), window.removeEventListener("pointerup", Pn), window.removeEventListener("pointercancel", Pn));
  }
  function Bl(c) {
    var S;
    if (typeof window > "u") return;
    const p = Rr({
      x: c.clientX - Math.round(d() * 0.38),
      y: c.clientY - 18,
      width: d(),
      height: w()
    });
    s(p.x), l(p.y), ui = s(), fi = l(), zn = c.clientX, Tn = c.clientY, q(lr, c.clientX, !0), q(dr, c.clientY, !0), q(Y, null), Ft = null, Tr = !1, Vt = !1, ze = !0, q(wr, !0), window.addEventListener("pointermove", lo), window.addEventListener("pointerup", nn), window.addEventListener("pointercancel", nn), (S = Nt()) == null || S();
  }
  Ei(() => {
    const c = ke() ? `${ke().pointerId}:${ke().clientX}:${ke().clientY}` : "";
    !ke() || c === Qr || (Qr = c, Bl(ke()));
  }), Ei(() => {
    o() === "maximized" && V() !== "maximize" && V("maximize"), o() === "normal" && V() === "maximize" && V(null);
  });
  var Ol = {
    get title() {
      return r();
    },
    set title(c) {
      r(c), C();
    },
    get helpText() {
      return n();
    },
    set helpText(c = "") {
      n(c), C();
    },
    get helpPlacement() {
      return i();
    },
    set helpPlacement(c = "auto") {
      i(c), C();
    },
    get state() {
      return o();
    },
    set state(c = "normal") {
      o(c), C();
    },
    get x() {
      return s();
    },
    set x(c = 100) {
      s(c), C();
    },
    get y() {
      return l();
    },
    set y(c = 100) {
      l(c), C();
    },
    get width() {
      return d();
    },
    set width(c = 600) {
      d(c), C();
    },
    get height() {
      return w();
    },
    set height(c = 400) {
      w(c), C();
    },
    get locked() {
      return u();
    },
    set locked(c = !1) {
      u(c), C();
    },
    get chromeless() {
      return m();
    },
    set chromeless(c = !1) {
      m(c), C();
    },
    get buttonLayout() {
      return b();
    },
    set buttonLayout(c) {
      b(c), C();
    },
    get systemButtonPlacement() {
      return f();
    },
    set systemButtonPlacement(c) {
      f(c), C();
    },
    get sideResizeMode() {
      return g();
    },
    set sideResizeMode(c) {
      g(c), C();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(c) {
      y(c), C();
    },
    get borderRadius() {
      return v();
    },
    set borderRadius(c) {
      v(c), C();
    },
    get chromePadding() {
      return x();
    },
    set chromePadding(c) {
      x(c), C();
    },
    get chromeStyle() {
      return L();
    },
    set chromeStyle(c) {
      L(c), C();
    },
    get alignment() {
      return H();
    },
    set alignment(c) {
      H(c), C();
    },
    get themePreset() {
      return te();
    },
    set themePreset(c) {
      te(c), C();
    },
    get fontPreset() {
      return Q();
    },
    set fontPreset(c) {
      Q(c), C();
    },
    get snapRestoreOnRelease() {
      return we();
    },
    set snapRestoreOnRelease(c) {
      we(c), C();
    },
    get shiftDragAction() {
      return oe();
    },
    set shiftDragAction(c) {
      oe(c), C();
    },
    get zIndex() {
      return be();
    },
    set zIndex(c = 100) {
      be(c), C();
    },
    get pinned() {
      return Me();
    },
    set pinned(c = !1) {
      Me(c), C();
    },
    get dragSeed() {
      return ke();
    },
    set dragSeed(c = null) {
      ke(c), C();
    },
    get restoreFrame() {
      return xe();
    },
    set restoreFrame(c = null) {
      xe(c), C();
    },
    get snapTarget() {
      return V();
    },
    set snapTarget(c = null) {
      V(c), C();
    },
    get onClose() {
      return Je();
    },
    set onClose(c) {
      Je(c), C();
    },
    get onPinToggle() {
      return Ue();
    },
    set onPinToggle(c) {
      Ue(c), C();
    },
    get onConsumeDragSeed() {
      return Nt();
    },
    set onConsumeDragSeed(c) {
      Nt(c), C();
    },
    get onStateChange() {
      return $t();
    },
    set onStateChange(c) {
      $t(c), C();
    },
    get children() {
      return or();
    },
    set children(c) {
      or(c), C();
    }
  }, Ea = jh(), Pa = On(Ea);
  {
    var Wl = (c) => {
      var p = fh();
      let S;
      fe(() => S = qi(p, "", S, {
        left: `${a($n).x}px`,
        top: `${a($n).y}px`,
        width: `${a($n).width}px`,
        height: `${a($n).height}px`,
        "z-index": be() + 2
      })), ee(c, p);
    };
    ue(Pa, (c) => {
      a($n) && !m() && c(Wl);
    });
  }
  var Ra = J(Pa, 2);
  {
    var Dl = (c) => {
      var p = gh();
      let S;
      Ri(p, 21, () => Mr, (T) => T.id, (T, le) => {
        var ye = mh();
        let We;
        var Ut = Ie(ye);
        fe(() => {
          We = he(ye, 1, "snap-cell svelte-1k3ojqh", null, We, { "is-active": a(Y) === a(le).id }), X(ye, "data-snap-target", a(le).id), he(Ut, 1, `snap-shape shape-${a(le).preview}`, "svelte-1k3ojqh");
        }), ee(T, ye);
      }), D(p), Go(p, (T) => q(Ht, T), () => a(Ht)), fe(() => S = qi(p, "", S, { "z-index": be() + 3 })), ee(c, p);
    };
    ue(Ra, (c) => {
      a(Sl) && !m() && c(Dl);
    });
  }
  var et = J(Ra, 2);
  let Ca, Ia;
  var Aa = F(et);
  {
    var Nl = (c) => {
      var p = kh();
      let S;
      var T = F(p), le = F(T);
      {
        var ye = (ne) => {
          var de = _o();
          let ie;
          var ct = F(de);
          ht(ct, { name: "pin" }), D(de), fe(() => {
            ie = he(de, 1, Ne(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", ie, {
              "efs-win7-tool-button": !a(R) && a(se),
              "is-active": Me(),
              active: Me()
            }), X(de, "aria-label", Me() ? "Unpin window" : "Pin window"), X(de, "aria-pressed", Me());
          }), De("click", de, function(...Ye) {
            var tt;
            (tt = Ue()) == null || tt.apply(this, Ye);
          }), ee(ne, de);
        };
        ue(le, (ne) => {
          Ue() && ne(ye);
        });
      }
      var We = J(le, 2);
      let Ut;
      var co = F(We);
      ht(co, { name: "center" }), D(We);
      var Rn = J(We, 2);
      let Ba;
      var Gl = F(Rn);
      {
        let ne = /* @__PURE__ */ E(() => o() === "rolled-up" ? "roll-up" : "roll-down");
        ht(Gl, {
          get name() {
            return a(ne);
          }
        });
      }
      D(Rn), D(T);
      var gi = J(T, 2);
      let Oa;
      var Ul = Ie(gi, !0), ho = J(gi, 2), Wa = F(ho);
      {
        var Yl = (ne) => {
          var de = ph(), ie = F(de);
          let ct;
          var Ye = F(ie);
          ht(Ye, { name: "help" }), D(ie);
          var tt = J(ie, 2), Ze = F(tt), fr = Ie(Ze, !0), kt = J(Ze, 2), mr = Ie(kt, !0);
          D(tt), D(de), fe(() => {
            ct = he(
              ie,
              1,
              Ne(a(R) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              ct,
              {
                "efs-win7-tool-button": !a(R) && a(se),
                "is-help": !a(R) && a(se)
              }
            ), X(ie, "aria-label", a(Oe) ? "Help" : `About ${r()}`), X(ie, "title", `About ${r()}`), Ee(fr, r()), Ee(mr, n());
          }), ee(ne, de);
        };
        ue(Wa, (ne) => {
          a(pa) && a(va) === "before" && ne(Yl);
        });
      }
      var pi = J(Wa, 2);
      let Da;
      var Zl = F(pi);
      {
        var Xl = (ne) => {
          var de = vh(), ie = On(de);
          {
            var ct = (ce) => {
              var pe = _o();
              let rt;
              var fo = F(pe);
              {
                var mo = (xt) => {
                  {
                    let Yt = /* @__PURE__ */ E(() => ya(a(je)));
                    ht(xt, {
                      name: "close",
                      get variant() {
                        return a(Yt);
                      }
                    });
                  }
                };
                ue(fo, (xt) => {
                  a(se) || xt(mo);
                });
              }
              D(pe), fe(() => {
                rt = he(
                  pe,
                  1,
                  Ne(a(R) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  rt,
                  {
                    "is-close": !a(R) && a(Oe)
                  }
                ), X(pe, "aria-label", a(se) ? "Close" : "Close window");
              }), De("click", pe, function(...xt) {
                var Yt;
                (Yt = Je()) == null || Yt.apply(this, xt);
              }), ee(ce, pe);
            };
            ue(ie, (ce) => {
              Je() && ce(ct);
            });
          }
          var Ye = J(ie, 2);
          let tt;
          var Ze = F(Ye);
          {
            var fr = (ce) => {
              {
                let pe = /* @__PURE__ */ E(() => o() === "minimized" ? "restore" : "minimize"), rt = /* @__PURE__ */ E(() => ka(a(je), o() === "minimized"));
                ht(ce, {
                  get name() {
                    return a(pe);
                  },
                  get variant() {
                    return a(rt);
                  }
                });
              }
            };
            ue(Ze, (ce) => {
              a(se) || ce(fr);
            });
          }
          D(Ye);
          var kt = J(Ye, 2);
          let mr;
          var wo = F(kt);
          {
            var uo = (ce) => {
              {
                let pe = /* @__PURE__ */ E(() => o() === "maximized" ? "restore" : "maximize"), rt = /* @__PURE__ */ E(() => xa(a(je), o() === "maximized"));
                ht(ce, {
                  get name() {
                    return a(pe);
                  },
                  get variant() {
                    return a(rt);
                  }
                });
              }
            };
            ue(wo, (ce) => {
              a(se) || ce(uo);
            });
          }
          D(kt), fe(() => {
            tt = he(
              Ye,
              1,
              Ne(a(R) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              tt,
              {
                "is-minimize": !a(R) && a(Oe) && o() !== "minimized",
                "is-restore": !a(R) && a(Oe) && o() === "minimized"
              }
            ), X(Ye, "aria-label", a(se) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), mr = he(
              kt,
              1,
              Ne(a(R) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              mr,
              {
                "is-maximize": !a(R) && a(Oe) && o() !== "maximized",
                "is-restore": !a(R) && a(Oe) && o() === "maximized"
              }
            ), X(kt, "aria-label", a(se) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), De("click", Ye, () => o() === "minimized" ? ur("normal") : Sa()), De("click", kt, mi), ee(ne, de);
        }, Kl = /* @__PURE__ */ E(() => no(a(je))), Jl = (ne) => {
          var de = bh(), ie = On(de);
          let ct;
          var Ye = F(ie);
          {
            var tt = (ce) => {
              {
                let pe = /* @__PURE__ */ E(() => o() === "minimized" ? "restore" : "minimize"), rt = /* @__PURE__ */ E(() => ka(a(je), o() === "minimized"));
                ht(ce, {
                  get name() {
                    return a(pe);
                  },
                  get variant() {
                    return a(rt);
                  }
                });
              }
            };
            ue(Ye, (ce) => {
              a(se) || ce(tt);
            });
          }
          D(ie);
          var Ze = J(ie, 2);
          let fr;
          var kt = F(Ze);
          {
            var mr = (ce) => {
              {
                let pe = /* @__PURE__ */ E(() => o() === "maximized" ? "restore" : "maximize"), rt = /* @__PURE__ */ E(() => xa(a(je), o() === "maximized"));
                ht(ce, {
                  get name() {
                    return a(pe);
                  },
                  get variant() {
                    return a(rt);
                  }
                });
              }
            };
            ue(kt, (ce) => {
              a(se) || ce(mr);
            });
          }
          D(Ze);
          var wo = J(Ze, 2);
          {
            var uo = (ce) => {
              var pe = _o();
              let rt;
              var fo = F(pe);
              {
                var mo = (xt) => {
                  {
                    let Yt = /* @__PURE__ */ E(() => ya(a(je)));
                    ht(xt, {
                      name: "close",
                      get variant() {
                        return a(Yt);
                      }
                    });
                  }
                };
                ue(fo, (xt) => {
                  a(se) || xt(mo);
                });
              }
              D(pe), fe(() => {
                rt = he(
                  pe,
                  1,
                  Ne(a(R) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  rt,
                  {
                    "is-close": !a(R) && a(Oe)
                  }
                ), X(pe, "aria-label", a(se) ? "Close" : "Close window");
              }), De("click", pe, function(...xt) {
                var Yt;
                (Yt = Je()) == null || Yt.apply(this, xt);
              }), ee(ce, pe);
            };
            ue(wo, (ce) => {
              Je() && ce(uo);
            });
          }
          fe(() => {
            ct = he(
              ie,
              1,
              Ne(a(R) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              ct,
              {
                "is-minimize": !a(R) && a(Oe) && o() !== "minimized",
                "is-restore": !a(R) && a(Oe) && o() === "minimized"
              }
            ), X(ie, "aria-label", a(se) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), fr = he(
              Ze,
              1,
              Ne(a(R) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              fr,
              {
                "is-maximize": !a(R) && a(Oe) && o() !== "maximized",
                "is-restore": !a(R) && a(Oe) && o() === "maximized"
              }
            ), X(Ze, "aria-label", a(se) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), De("click", ie, () => o() === "minimized" ? ur("normal") : Sa()), De("click", Ze, mi), ee(ne, de);
        };
        ue(Zl, (ne) => {
          a(Kl) ? ne(Xl) : ne(Jl, -1);
        });
      }
      D(pi);
      var Ql = J(pi, 2);
      {
        var ed = (ne) => {
          var de = yh(), ie = F(de);
          let ct;
          var Ye = F(ie);
          ht(Ye, { name: "help" }), D(ie);
          var tt = J(ie, 2), Ze = F(tt), fr = Ie(Ze, !0), kt = J(Ze, 2), mr = Ie(kt, !0);
          D(tt), D(de), fe(() => {
            ct = he(
              ie,
              1,
              Ne(a(R) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              ct,
              {
                "efs-win7-tool-button": !a(R) && a(se),
                "is-help": !a(R) && a(se)
              }
            ), X(ie, "aria-label", a(Oe) ? "Help" : `About ${r()}`), X(ie, "title", `About ${r()}`), Ee(fr, r()), Ee(mr, n());
          }), ee(ne, de);
        };
        ue(Ql, (ne) => {
          a(pa) && a(va) === "after" && ne(ed);
        });
      }
      D(ho), D(p), fe(
        (ne, de) => {
          S = he(
            p,
            1,
            Ne(a(R) ? "title-bar" : `window-chrome chrome-${a(Mn)}`),
            "svelte-1k3ojqh",
            S,
            {
              "layout-mac": ne,
              "layout-windows": de,
              "title-bar": !a(R) && a(Oe)
            }
          ), X(p, "aria-label", `${r()} window controls`), Ut = he(We, 1, Ne(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Ut, {
            "efs-win7-tool-button": !a(R) && a(se)
          }), Ba = he(Rn, 1, Ne(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Ba, {
            "efs-win7-tool-button": !a(R) && a(se),
            "is-active": o() === "rolled-up",
            active: o() === "rolled-up"
          }), X(Rn, "aria-label", o() === "rolled-up" ? "Restore height" : "Roll up"), Oa = he(
            gi,
            1,
            Ne(a(R) ? "title-bar-text" : `window-title align-${a(Pr)}`),
            "svelte-1k3ojqh",
            Oa,
            {
              "title-bar-text": !a(R) && a(Oe)
            }
          ), X(gi, "title", r()), Ee(Ul, r()), Da = he(
            pi,
            1,
            Ne(a(R) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            Da,
            {
              "title-bar-controls": !a(R) && a(Oe)
            }
          );
        },
        [
          () => !a(R) && no(a(je)),
          () => !a(R) && !no(a(je))
        ]
      ), De("pointerdown", p, Al), De("pointermove", p, lo), De("pointerup", p, nn), lc("pointercancel", p, nn), De("dblclick", p, El), De("click", We, Ml), De("click", Rn, zl), ts(T, "clientWidth", (ne) => q($r, ne)), ts(ho, "clientWidth", (ne) => q(cr, ne)), ee(c, p);
    };
    ue(Aa, (c) => {
      m() || c(Nl);
    });
  }
  var La = J(Aa, 2);
  {
    var Hl = (c) => {
      var p = xh();
      let S;
      var T = F(p);
      bc(T, () => or() ?? kr), D(p), Go(p, (le) => q($e, le), () => a($e)), fe(() => S = he(p, 1, "window-content svelte-1k3ojqh", null, S, { "window-body": a(se) })), ee(c, p);
    };
    ue(La, (c) => {
      o() !== "rolled-up" && o() !== "minimized" && c(Hl);
    });
  }
  var Fl = J(La, 2);
  {
    var Vl = (c) => {
      var p = al(), S = On(p);
      Ri(S, 16, () => ar, (T) => T, (T, le) => {
        var ye = qh();
        fe(() => he(ye, 1, `resize-handle dir-${le}`, "svelte-1k3ojqh")), De("pointerdown", ye, (We) => Ll(le, We)), ee(T, ye);
      }), ee(c, p);
    };
    ue(Fl, (c) => {
      !m() && o() !== "maximized" && o() !== "minimized" && c(Vl);
    });
  }
  return D(et), fe(() => {
    Ca = he(et, 1, "window-shell svelte-1k3ojqh", null, Ca, {
      win7: a(se),
      "win7-theme": a(R),
      "basic7-theme": a(ba),
      window: a(se),
      active: a(se),
      glass: a(R),
      "is-ready": a(K),
      "is-dragging": a(wr),
      "is-resizing": a(qe),
      "compact-controls": a(rn),
      maximized: o() === "maximized",
      minimized: o() === "minimized",
      "rolled-up": o() === "rolled-up",
      chromeless: m()
    }), X(et, "data-layout", a(R) ? void 0 : a(je)), X(et, "data-system-placement", a(Gt)), X(et, "data-style", a(R) ? void 0 : a(Mn)), X(et, "data-theme", a(hr)), X(et, "data-font", a(eo)), X(et, "data-beam", a(R) ? void 0 : a(Qi)), X(et, "data-gloss", a(R) ? void 0 : a(hi)), X(et, "data-title-tone", a(R) ? void 0 : a(ro)), X(et, "data-title-effect", a(R) ? void 0 : a(jl)), Ia = qi(et, "", Ia, {
      "--window-border-width": `${a(Sn)}px`,
      "--window-radius": `${a(Ki)}px`,
      "--window-chrome-padding": `${a(Ji)}px`,
      "--window-titlebar-height": `${a(tn)}px`,
      "--window-shell-scale": `${a(ci)}`,
      "--window-title-guard": `${a(_l)}px`,
      transform: o() === "normal" || o() === "rolled-up" ? `translate(${s()}px, ${l()}px)` : void 0,
      width: o() === "normal" || o() === "rolled-up" ? `${d()}px` : void 0,
      height: o() === "normal" ? `${w()}px` : void 0,
      "z-index": be()
    });
  }), ee(e, Ea), Ui(Ol);
}
ol([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
ma(
  kl,
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
const Sh = 3500, as = 7e3, Mh = 60;
let ss = !1;
function So(e) {
  return e.slice().sort((t, r) => r.timestamp - t.timestamp).slice(0, Mh);
}
function zh() {
  const { subscribe: e, set: t, update: r } = pl([]);
  return {
    subscribe: e,
    add: (n) => r((i) => So([n, ...i])),
    upsert: (n) => r((i) => {
      const o = i.findIndex((l) => l.id === n.id);
      if (o === -1)
        return So([n, ...i]);
      const s = [...i];
      return s[o] = n, So(s);
    }),
    patch: (n, i) => r(
      (o) => o.map((s) => s.id === n ? { ...s, ...i, id: s.id } : s)
    ),
    updateStatus: (n, i, o) => r((s) => s.map((l) => l.id === n ? { ...l, status: i, durationMs: o ?? l.durationMs } : l)),
    remove: (n) => r((i) => i.filter((o) => o.id !== n)),
    clear: () => t([])
  };
}
const pt = zh();
function Th() {
  const { subscribe: e, set: t } = pl({
    state: "idle",
    pendingCount: 0,
    slowCount: 0,
    lastError: null
  });
  return {
    subscribe: e,
    set: (r) => t(r)
  };
}
const xl = Th();
let ls = !1, $h = 0, Zo = 0, Ii = null, Mo = null;
const Ur = /* @__PURE__ */ new Map();
function ql(e) {
  try {
    if (e instanceof URL)
      return e;
    if (typeof e == "string")
      return new URL(e, window.location.origin);
    if (e instanceof Request)
      return new URL(e.url, window.location.origin);
  } catch {
  }
  return null;
}
function Eh(e, t) {
  return typeof (t == null ? void 0 : t.method) == "string" && t.method.trim() !== "" ? t.method.toUpperCase() : e instanceof Request && e.method.trim() !== "" ? e.method.toUpperCase() : "GET";
}
function Ph(e) {
  return e ? e.origin === window.location.origin ? `${e.pathname}${e.search}` : e.toString() : "Unknown request";
}
function Rh(e) {
  if (typeof window > "u")
    return !1;
  const t = ql(e);
  return !t || t.origin !== window.location.origin || t.pathname.includes("/_efsdb/api/auth/refresh") ? !1 : t.pathname.startsWith("/_efsdb/") || t.pathname.startsWith("/api/");
}
function rr() {
  const e = Array.from(Ur.values()).filter((n) => n.slow).length, t = Date.now();
  let r = "idle";
  Zo > t && Ii ? r = "error" : e > 0 ? r = "long" : Ur.size > 0 && (r = "processing"), xl.set({
    state: r,
    pendingCount: Ur.size,
    slowCount: e,
    lastError: r === "error" ? Ii : null
  });
}
function ds(e) {
  Ii = e, Zo = Date.now() + as, Mo && clearTimeout(Mo), Mo = setTimeout(() => {
    Date.now() >= Zo && (Ii = null, rr());
  }, as + 50), rr();
}
function Ch(e, t) {
  const r = ++$h, n = ql(e), i = Ph(n), o = Eh(e, t), s = Date.now(), l = `request-${r}`, d = {
    notificationId: l,
    method: o,
    path: i,
    startedAt: s,
    slow: !1,
    slowTimer: null
  };
  return d.slowTimer = setTimeout(() => {
    const w = Ur.get(r);
    w && (w.slow = !0, pt.patch(w.notificationId, {
      details: `${w.path} is taking longer than expected.`,
      timestamp: Date.now()
    }), rr());
  }, Sh), Ur.set(r, d), pt.upsert({
    id: l,
    title: o === "GET" ? "Loading data" : "Running action",
    status: "processing",
    category: "system",
    initiator: o,
    details: i,
    timestamp: s
  }), rr(), r;
}
function cs(e, t, r, n, i) {
  pt.upsert({
    id: `${e.notificationId}-alert`,
    title: t,
    details: r,
    status: "error",
    category: "alerts",
    initiator: e.method,
    durationMs: n,
    timestamp: i
  });
}
function hs(e, t, r) {
  const n = Ur.get(e);
  if (!n)
    return;
  Ur.delete(e), n.slowTimer && clearTimeout(n.slowTimer);
  const i = Date.now(), o = i - n.startedAt;
  if (r instanceof DOMException && r.name === "AbortError") {
    pt.patch(n.notificationId, {
      status: "info",
      details: `${n.path} was cancelled.`,
      durationMs: o,
      timestamp: i
    }), rr();
    return;
  }
  if (r) {
    const s = r instanceof Error ? r.message : "Request failed";
    pt.patch(n.notificationId, {
      status: "error",
      details: `${n.path} failed: ${s}`,
      durationMs: o,
      timestamp: i
    }), cs(
      n,
      n.method === "GET" ? "System request failed" : "System action failed",
      `${n.path} failed: ${s}`,
      o,
      i
    ), ds(s), rr();
    return;
  }
  if (t && !t.ok) {
    const s = t.statusText ? `${t.status} ${t.statusText}` : `HTTP ${t.status}`;
    pt.patch(n.notificationId, {
      status: "error",
      details: `${n.path} failed: ${s}`,
      durationMs: o,
      timestamp: i
    }), cs(
      n,
      n.method === "GET" ? "System request failed" : "System action failed",
      `${n.path} failed: ${s}`,
      o,
      i
    ), ds(s), rr();
    return;
  }
  pt.patch(n.notificationId, {
    status: "completed",
    details: n.slow ? `${n.path} completed in ${(o / 1e3).toFixed(1)}s.` : `${n.path} completed.`,
    durationMs: o,
    timestamp: i
  }), rr();
}
function Ih() {
  if (ls || typeof window > "u" || typeof window.fetch != "function")
    return;
  ls = !0;
  const e = window.fetch.bind(window);
  window.fetch = async (t, r) => {
    if (!Rh(t))
      return e(t, r);
    const n = Ch(t, r);
    try {
      const i = await e(t, r);
      return hs(n, i), i;
    } catch (i) {
      throw hs(n, void 0, i), i;
    }
  }, rr();
}
function Ah() {
  if (ss || typeof window > "u")
    return;
  ss = !0;
  const e = Date.now();
  pt.upsert({
    id: "seed-inbox-init",
    title: "Notifications initialized",
    details: "System activity inbox is ready. The footer orb reflects live request state as work starts.",
    status: "info",
    category: "general",
    initiator: "Init",
    timestamp: e - 2e4
  }), pt.upsert({
    id: "seed-production-published",
    title: "Production published",
    details: "Synced from staged and published to production on first launch.",
    status: "completed",
    category: "general",
    initiator: "Deploy",
    timestamp: e - 1e4
  }), pt.upsert({
    id: "seed-system-log-ready",
    title: "System log stream online",
    details: "Fetches, actions, sync work, and publish steps will be written here as live activity.",
    status: "info",
    category: "system",
    initiator: "Logger",
    timestamp: e - 15e3
  }), pt.upsert({
    id: "seed-alert-watch",
    title: "Alerts standing by",
    details: "Failures, sync drift, and publish issues will appear here when something needs attention.",
    status: "info",
    category: "alerts",
    initiator: "Watch",
    timestamp: e - 5e3
  });
}
var Lh = /* @__PURE__ */ ge('<span class="tab-bubble svelte-1s22qoj"> </span>'), Bh = /* @__PURE__ */ ge('<button type="button"> <!></button>'), Oh = /* @__PURE__ */ ge('<div class="empty-state svelte-1s22qoj"> </div>'), Wh = /* @__PURE__ */ ge('<span class="inline-bubble svelte-1s22qoj"> </span>'), Dh = /* @__PURE__ */ ge('<span class="svelte-1s22qoj"> </span>'), Nh = /* @__PURE__ */ ge('<div><div class="notification-header svelte-1s22qoj"><span></span> <span class="title svelte-1s22qoj"> <!></span> <span class="time svelte-1s22qoj"> </span></div> <div class="notification-body svelte-1s22qoj"><div class="details svelte-1s22qoj"> </div> <div class="meta svelte-1s22qoj"><span class="svelte-1s22qoj"> </span> <!></div></div></div>'), Hh = /* @__PURE__ */ ge('<div class="notifications-list svelte-1s22qoj"></div>'), Fh = /* @__PURE__ */ ge('<div class="notifications-panel svelte-1s22qoj" role="dialog" aria-label="System activity"><header class="panel-status-row svelte-1s22qoj"><div class="panel-status-copy svelte-1s22qoj"><span class="panel-eyebrow svelte-1s22qoj"> </span> <p class="panel-summary svelte-1s22qoj"> </p></div> <span class="activity-pill svelte-1s22qoj"> </span></header> <div class="chat-tabs svelte-1s22qoj"></div> <div class="notifications-scroll svelte-1s22qoj"><!></div></div>'), Vh = /* @__PURE__ */ ge('<div class="notifications-window svelte-1s22qoj"><!></div>');
const Gh = {
  hash: "svelte-1s22qoj",
  code: `:host {position:relative;z-index:12050;isolation:isolate;}.notifications-window.svelte-1s22qoj {position:fixed;inset:0;z-index:12050;pointer-events:none;isolation:isolate;}.notifications-window.svelte-1s22qoj .window-shell {pointer-events:auto;--window-panel: var(--shell-panel-solid, #ffffff);--window-surface: var(--shell-panel-solid-subtle, #f8fafc);--window-border: var(--shell-border, #e2e8f0);--window-control-size: 1.85rem;--window-aux-width: 1.92rem;--window-system-width: 2rem;--window-control-gap: 0.08rem;--window-control-radius: 9px;}.notifications-window.svelte-1s22qoj .window-chrome {min-height:2.25rem;padding-block:0.22rem;padding-inline:0.45rem 0.4rem;gap:0.45rem;}.notifications-window.svelte-1s22qoj .window-tools {gap:0.1rem;}.notifications-window.svelte-1s22qoj .window-tools .window-button:not(:first-child) {display:none;}.notifications-window.svelte-1s22qoj .system-controls .window-button:not(.close-button) {display:none;}.notifications-window.svelte-1s22qoj .window-title {font:var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.04em;}.notifications-panel.svelte-1s22qoj {display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--shell-panel-solid, #ffffff);color:var(--shell-text, #0f172a);font-family:ui-sans-serif, system-ui, sans-serif;}.panel-status-row.svelte-1s22qoj {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:0.95rem 1rem 0.85rem;border-bottom:1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 12%);background:radial-gradient(circle at top right, rgba(34, 197, 94, 0.08), transparent 38%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 76%),
      var(--shell-panel-solid-subtle, #f8fafc);}.panel-status-copy.svelte-1s22qoj {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.panel-eyebrow.svelte-1s22qoj {color:var(--shell-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.12em;text-transform:uppercase;}.panel-title.svelte-1s22qoj {margin:0;color:var(--shell-text-strong, #020617);font:var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.panel-summary.svelte-1s22qoj {margin:0;color:var(--shell-text, #0f172a);font:var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.activity-pill.svelte-1s22qoj {display:inline-flex;align-items:center;min-height:2rem;padding:0 0.75rem;border:1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 8%);border-radius:999px;font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.06em;text-transform:uppercase;white-space:nowrap;}.activity-pill[data-state='idle'].svelte-1s22qoj {border-color:color-mix(in srgb, #22c55e, transparent 62%);background:color-mix(in srgb, #22c55e, transparent 88%);color:#15803d;}.activity-pill[data-state='processing'].svelte-1s22qoj {border-color:color-mix(in srgb, #eab308, transparent 54%);background:color-mix(in srgb, #eab308, transparent 86%);color:#a16207;}.activity-pill[data-state='long'].svelte-1s22qoj {border-color:color-mix(in srgb, #f97316, transparent 50%);background:color-mix(in srgb, #f97316, transparent 84%);color:#c2410c;}.activity-pill[data-state='error'].svelte-1s22qoj {border-color:color-mix(in srgb, #ef4444, transparent 48%);background:color-mix(in srgb, #ef4444, transparent 84%);color:#b91c1c;flex-shrink:0;}.chat-tabs.svelte-1s22qoj {display:flex;background:var(--shell-panel-solid-muted, #eef3f8);border-bottom:1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 12%);padding:0 0.75rem;gap:0.25rem;flex-shrink:0;}.chat-tab.svelte-1s22qoj {padding:0.75rem 1rem;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--shell-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:0.5rem;}.chat-tab.svelte-1s22qoj:hover {color:var(--shell-text, #0f172a);}.chat-tab.active.svelte-1s22qoj {color:var(--shell-text-strong, #020617);border-bottom-color:var(--accent, #007acc);}.tab-bubble.svelte-1s22qoj {background:#ef4444;color:white;font-size:10px;font-weight:700;padding:2px 6px;border-radius:99px;line-height:1;}.inline-bubble.svelte-1s22qoj {display:inline-flex;align-items:center;justify-content:center;background:#ef4444;color:white;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;margin-left:0.5rem;}.notifications-scroll.svelte-1s22qoj {flex:1;overflow-y:auto;background:var(--shell-panel-solid-subtle, #f8fafc);}.empty-state.svelte-1s22qoj {padding:2rem;text-align:center;color:var(--shell-muted, #64748b);font:var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.notifications-list.svelte-1s22qoj {display:flex;flex-direction:column;gap:1px;background:var(--shell-border, #e2e8f0);}.notification-item.svelte-1s22qoj {background:var(--shell-panel-solid, #ffffff);padding:0.75rem 1rem;transition:background-color 0.2s;}.notification-item.svelte-1s22qoj:hover {background:var(--shell-panel-solid-subtle, #f8fafc);}.notification-header.svelte-1s22qoj {display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;}.status-indicator.svelte-1s22qoj {width:8px;height:8px;border-radius:50%;flex-shrink:0;}.status-indicator.info.svelte-1s22qoj {background:#8b5cf6;}.status-indicator.processing.svelte-1s22qoj {background:#eab308; animation: svelte-1s22qoj-pulse 1.8s infinite;}.status-indicator.queued.svelte-1s22qoj {background:#94a3b8;}.status-indicator.completed.svelte-1s22qoj {background:#22c55e;}.status-indicator.error.svelte-1s22qoj {background:#ef4444;}.title.svelte-1s22qoj {font-weight:500;font:var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text-strong, #020617);flex:1;display:flex;align-items:center;}.time.svelte-1s22qoj {font:var(--efs-font-body-xs, 12px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-muted, #64748b);}.notification-body.svelte-1s22qoj {padding-left:1rem;}.details.svelte-1s22qoj {font:var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text, #0f172a);margin-bottom:0.25rem;line-height:1.4;}.meta.svelte-1s22qoj {display:flex;align-items:center;gap:0.5rem;font:var(--efs-font-body-xs, 12px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-muted, #64748b);font-family:ui-monospace, monospace;}

  @keyframes svelte-1s22qoj-pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @media (max-width: 47.99rem) {.panel-status-row.svelte-1s22qoj {flex-direction:column;}.activity-pill.svelte-1s22qoj {align-self:flex-start;}
  }`
};
function Uh(e, t) {
  Gi(t, !0), fa(e, Gh);
  const r = () => rs(pt, "$notificationStore", i), n = () => rs(xl, "$activityStore", i), [i, o] = Rc(), s = 420, l = 540, d = 16, w = 12, u = 12050;
  let m = /* @__PURE__ */ Z(!1), b = /* @__PURE__ */ Z(!1), f = /* @__PURE__ */ Z("normal"), g = /* @__PURE__ */ Z("general"), y = /* @__PURE__ */ Z("footer"), v = /* @__PURE__ */ Z(null), x = /* @__PURE__ */ Z(w), L = /* @__PURE__ */ Z(w), H = /* @__PURE__ */ Z(s), te = /* @__PURE__ */ Z(l), Q = /* @__PURE__ */ Z(null);
  const we = [
    { id: "general", label: "General" },
    { id: "system", label: "System" },
    { id: "alerts", label: "Alerts" }
  ], oe = /* @__PURE__ */ E(() => r().filter((k) => k.category === a(g))), be = /* @__PURE__ */ E(() => r().filter((k) => k.category === "alerts" && k.status === "error").reduce((k, K) => k + (K.count || 1), 0)), Me = /* @__PURE__ */ E(() => {
    switch (n().state) {
      case "processing":
        return n().pendingCount === 1 ? "Processing" : `Processing ${n().pendingCount}`;
      case "long":
        return n().slowCount === 1 ? "Long response" : `Long responses ${n().slowCount}`;
      case "error":
        return "Failure detected";
      default:
        return "Listening";
    }
  }), ke = /* @__PURE__ */ E(() => {
    switch (n().state) {
      case "processing":
        return n().pendingCount === 1 ? "One request is currently running." : `${n().pendingCount} requests are currently running.`;
      case "long":
        return n().slowCount === 1 ? "A request is taking longer than expected." : `${n().slowCount} requests are taking longer than expected.`;
      case "error":
        return n().lastError ?? "A recent request failed.";
      default:
        return "The footer orb will pulse green until new activity starts.";
    }
  });
  function xe(k = a(y)) {
    const K = k === "nav" ? ["nav-notification-trigger", "footer-notification-trigger"] : ["footer-notification-trigger", "nav-notification-trigger"];
    for (const qe of K) {
      const Y = document.getElementById(qe);
      if (Y instanceof HTMLElement) {
        q(v, Y, !0), q(y, qe === "nav-notification-trigger" ? "nav" : "footer", !0);
        return;
      }
    }
    q(v, null);
  }
  function V() {
    if (!a(v) || typeof window > "u")
      return;
    const k = a(v).getBoundingClientRect(), K = Math.min(s, Math.max(320, window.innerWidth - w * 2)), qe = Math.min(l, Math.max(320, window.innerHeight - w * 2));
    let Y = k.right - K, Ht = a(y) === "nav" ? k.bottom + d : k.top - qe - d;
    Y = Math.min(Math.max(w, Y), Math.max(w, window.innerWidth - K - w)), Ht = Math.min(Math.max(w, Ht), Math.max(w, window.innerHeight - qe - w)), q(H, K, !0), q(te, qe, !0), q(x, Math.round(Y), !0), q(L, Math.round(Ht), !0);
  }
  function Je(k) {
    var qe;
    const K = (qe = k == null ? void 0 : k.detail) == null ? void 0 : qe.source;
    return K === "nav" || K === "footer" ? K : null;
  }
  function Ue() {
    return a(be) > 0 ? "alerts" : r().some((k) => k.category === "general") ? "general" : r().some((k) => k.category === "system") ? "system" : r().some((k) => k.category === "alerts") ? "alerts" : "general";
  }
  function Nt(k) {
    const K = Je(k) ?? a(y), qe = a(y);
    if (q(y, K, !0), a(f) === "minimized" && q(f, "normal"), a(b)) {
      (!a(m) || a(g) === "general") && q(g, Ue(), !0), q(m, !0);
      return;
    }
    if (a(m) && qe === K) {
      $t();
      return;
    }
    xe(K), V(), (!a(m) || a(g) === "general") && q(g, Ue(), !0), q(m, !0);
  }
  function $t() {
    q(m, !1);
  }
  function or() {
    q(b, !a(b));
  }
  function Mr(k) {
    if (!a(m) || a(b))
      return;
    const K = k.composedPath();
    a(Q) && K.includes(a(Q)) || a(v) && K.includes(a(v)) || $t();
  }
  function Be() {
    const k = document.getElementById("nav-notification-bubble");
    if (k instanceof HTMLElement) {
      if (a(be) > 0) {
        k.style.display = "flex", k.textContent = a(be) > 99 ? "99+" : a(be).toString();
        return;
      }
      k.style.display = "none";
    }
  }
  function ar() {
    const k = document.getElementById("footer-notification-trigger");
    if (!(k instanceof HTMLElement))
      return;
    k.dataset.status = n().state;
    const K = n().state === "error" ? `System activity failed: ${a(ke)}` : `System activity: ${a(ke)}`;
    k.setAttribute("title", K), k.setAttribute("aria-label", K);
  }
  ul(() => {
    document.addEventListener("efsdb:notifications:toggle", Nt), document.addEventListener("pointerdown", Mr, !0), Ih(), Ah(), xe(a(y)), V(), Be(), ar();
    const k = setInterval(
      () => {
        Be(), ar();
      },
      1e3
    );
    return () => {
      document.removeEventListener("efsdb:notifications:toggle", Nt), document.removeEventListener("pointerdown", Mr, !0), clearInterval(k);
    };
  }), Ei(() => {
    a(be), n().state, n().pendingCount, n().slowCount, n().lastError, Be(), ar();
  });
  var sr = al(), Jr = On(sr);
  {
    var Xi = (k) => {
      var K = Vh(), qe = F(K);
      kl(qe, {
        title: "System Activity",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 16,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return a(b);
        },
        zIndex: u,
        onClose: $t,
        onPinToggle: or,
        get state() {
          return a(f);
        },
        set state(Y) {
          q(f, Y, !0);
        },
        get x() {
          return a(x);
        },
        set x(Y) {
          q(x, Y, !0);
        },
        get y() {
          return a(L);
        },
        set y(Y) {
          q(L, Y, !0);
        },
        get width() {
          return a(H);
        },
        set width(Y) {
          q(H, Y, !0);
        },
        get height() {
          return a(te);
        },
        set height(Y) {
          q(te, Y, !0);
        },
        children: (Y, Ht) => {
          var lr = Fh(), dr = F(lr), Qr = F(dr), jn = F(Qr), li = Ie(jn, !0), en = J(jn, 2), _n = Ie(en, !0);
          D(Qr);
          var Et = J(Qr, 2), zr = Ie(Et, !0);
          D(dr);
          var dt = J(dr, 2);
          Ri(dt, 21, () => we, (Qe) => Qe.id, (Qe, ze) => {
            var Te = Bh();
            let re;
            var $e = F(Te), $r = J($e);
            {
              var cr = (je) => {
                var Gt = Lh(), Er = Ie(Gt, !0);
                fe(() => Ee(Er, a(be))), ee(je, Gt);
              };
              ue($r, (je) => {
                a(ze).id === "alerts" && a(be) > 0 && je(cr);
              });
            }
            D(Te), fe(() => {
              re = he(Te, 1, "chat-tab svelte-1s22qoj", null, re, { active: a(g) === a(ze).id }), Ee($e, `${a(ze).label ?? ""} `);
            }), De("click", Te, () => q(g, a(ze).id, !0)), ee(Qe, Te);
          }), D(dt);
          var Ft = J(dt, 2), Tr = F(Ft);
          {
            var Vt = (Qe) => {
              var ze = Oh(), Te = Ie(ze);
              fe(
                (re) => Ee(Te, `No recent activity in ${re ?? ""}. The footer orb stays green
              when idle, turns yellow while requests run, orange when they drag, and red after failures.`),
                [
                  () => {
                    var re;
                    return (re = we.find(($e) => $e.id === a(g))) == null ? void 0 : re.label;
                  }
                ]
              ), ee(Qe, ze);
            }, di = (Qe) => {
              var ze = Hh();
              Ri(ze, 21, () => a(oe), (Te) => Te.id, (Te, re) => {
                var $e = Nh();
                let $r;
                var cr = F($e), je = F(cr), Gt = J(je, 2), Er = F(Gt), Sn = J(Er);
                {
                  var Ki = (yt) => {
                    var Pr = Wh(), rn = Ie(Pr, !0);
                    fe(() => Ee(rn, a(re).count)), ee(yt, Pr);
                  };
                  ue(Sn, (yt) => {
                    a(re).count && yt(Ki);
                  });
                }
                D(Gt);
                var Ji = J(Gt, 2), tn = Ie(Ji, !0);
                D(cr);
                var ci = J(cr, 2), Mn = F(ci), Qi = Ie(Mn, !0), hi = J(Mn, 2), wi = F(hi), hr = Ie(wi, !0), eo = J(wi, 2);
                {
                  var to = (yt) => {
                    var Pr = Dh(), rn = Ie(Pr);
                    fe((ro) => Ee(rn, `• ${ro ?? ""}s`), [() => (a(re).durationMs / 1e3).toFixed(1)]), ee(yt, Pr);
                  };
                  ue(eo, (yt) => {
                    a(re).durationMs && yt(to);
                  });
                }
                D(hi), D(ci), D($e), fe(
                  (yt) => {
                    $r = he($e, 1, "notification-item svelte-1s22qoj", null, $r, { completed: a(re).status === "completed" }), he(je, 1, `status-indicator ${a(re).status ?? ""}`, "svelte-1s22qoj"), Ee(Er, `${a(re).title ?? ""} `), Ee(tn, yt), Ee(Qi, a(re).details), Ee(hr, a(re).initiator);
                  },
                  [
                    () => new Date(a(re).timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                  ]
                ), ee(Te, $e);
              }), D(ze), ee(Qe, ze);
            };
            ue(Tr, (Qe) => {
              a(oe).length === 0 ? Qe(Vt) : Qe(di, -1);
            });
          }
          D(Ft), D(lr), fe(() => {
            Ee(li, a(y) === "nav" ? "Inbox launch" : "Footer activity"), Ee(_n, a(ke)), X(Et, "data-state", n().state), Ee(zr, a(Me));
          }), ee(Y, lr);
        },
        $$slots: { default: !0 }
      }), D(K), Go(K, (Y) => q(Q, Y), () => a(Q)), ee(k, K);
    };
    ue(Jr, (k) => {
      a(m) && k(Xi);
    });
  }
  ee(e, sr), Ui(), o();
}
ol(["click"]);
customElements.define("efsdb-notifications", ma(Uh, {}, [], [], { mode: "open" }));
export {
  Uh as Notifications
};
