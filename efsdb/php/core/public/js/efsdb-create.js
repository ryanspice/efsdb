var js = Object.defineProperty;
var Kn = (e) => {
  throw TypeError(e);
};
var Hs = (e, t, r) => t in e ? js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var L = (e, t, r) => Hs(e, typeof t != "symbol" ? t + "" : t, r), tn = (e, t, r) => t.has(e) || Kn("Cannot " + r);
var a = (e, t, r) => (tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? Kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (tn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), y = (e, t, r) => (tn(e, t, "access private method"), r);
var _i;
typeof window < "u" && ((_i = window.__svelte ?? (window.__svelte = {})).v ?? (_i.v = /* @__PURE__ */ new Set())).add("5");
const Ys = 1, Bs = 4, qs = 8, Us = 16, bi = 1, Ws = 2, wi = "[", yi = "[!", Jn = "[?", xi = "]", at = {}, W = Symbol("uninitialized"), Vs = "http://www.w3.org/1999/xhtml", $i = !1;
var On = Array.isArray, Xs = Array.prototype.indexOf, dr = Array.prototype.includes, Gs = Array.from, Pr = Object.keys, hr = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, Ks = Object.getOwnPropertyDescriptors, Js = Object.prototype, Zs = Array.prototype, Ei = Object.getPrototypeOf, Zn = Object.isExtensible;
const ki = () => {
};
function Qs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Si() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const te = 2, qt = 4, Wr = 8, Ti = 1 << 24, Se = 16, Ie = 32, Ge = 64, cn = 128, Mn = 256, ze = 512, V = 1024, q = 2048, be = 4096, we = 8192, ee = 16384, St = 32768, Lr = 1 << 25, kt = 65536, Dr = 1 << 17, el = 1 << 18, Tt = 1 << 19, tl = 1 << 20, Ir = 1 << 21, Rt = 1 << 22, st = 1 << 23, Pt = Symbol("$state"), zi = Symbol("component"), Ci = Symbol("legacy props"), rl = Symbol(""), Or = Symbol("attributes"), dn = Symbol("class"), hn = Symbol("style"), rr = Symbol("text"), ar = Symbol("form reset"), yr = new class extends Error {
  constructor() {
    super(...arguments);
    L(this, "name", "StaleReactionError");
    L(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var gi;
const nl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((gi = globalThis.document) != null && gi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Vr = 3, Xr = 8;
function il() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function sl() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ll() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let O = !1;
function Mt(e) {
  O = e;
}
let z;
function Ce(e) {
  if (e === null)
    throw Gr(), at;
  return z = e;
}
function Nn() {
  return Ce(/* @__PURE__ */ Ze(z));
}
function H(e) {
  if (O) {
    if (/* @__PURE__ */ Ze(z) !== null)
      throw Gr(), at;
    z = e;
  }
}
function vn(e = 1) {
  if (O) {
    for (var t = e, r = z; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(r);
    z = r;
  }
}
function Ai(e = !0) {
  for (var t = 0, r = z; ; ) {
    if (r.nodeType === Xr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === xi) {
        if (t === 0) return r;
        t -= 1;
      } else (n === wi || n === yi || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(r)
    );
    e && r.remove(), r = i;
  }
}
function Oi(e) {
  if (!e || e.nodeType !== Xr)
    throw Gr(), at;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Mi(e) {
  return e === this.v;
}
function al(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ni(e) {
  return !al(e, this.v);
}
function ol(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ul(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function cl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function dl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _l() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ml() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function bl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let wl = !1, ie = null;
function Ut(e) {
  ie = e;
}
function Rn(e, t = !1, r) {
  ie = {
    p: ie,
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
function Pn(e) {
  var t = (
    /** @type {ComponentContext} */
    ie
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      es(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ie = t.p, Ri(e);
}
function Ri(e = {}) {
  return hr(e, zi, { value: !0 }), e;
}
function Pi() {
  return !0;
}
let vt = [];
function Li() {
  var e = vt;
  vt = [], Qs(e);
}
function Ve(e) {
  if (vt.length === 0 && !or) {
    var t = vt;
    queueMicrotask(() => {
      t === vt && Li();
    });
  }
  vt.push(e);
}
function yl() {
  for (; vt.length > 0; )
    Li();
}
const xl = -7169;
function B(e, t) {
  e.f = e.f & xl | t;
}
function Ln(e) {
  (e.f & ze) !== 0 || e.deps === null ? B(e, V) : B(e, be);
}
function Di(e, t, r) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & be) !== 0 && r.add(e), B(e, V);
}
let Qn = !1;
function Ii() {
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
            (t = r[ar]) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Vt(e) {
  var t = k, r = T;
  ye(null), Fe(null);
  try {
    return e();
  } finally {
    ye(t), Fe(r);
  }
}
function Fi(e, t, r, n = r) {
  e.addEventListener(t, () => Vt(r));
  const i = (
    /** @type {any} */
    e[ar]
  );
  i ? e[ar] = () => {
    i(), n(!0);
  } : e[ar] = () => n(!0), Ii();
}
function $l(e, t, r, n) {
  const i = jr;
  var s = e.filter((c) => !c.settled), l = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(l);
    return;
  }
  var o = (
    /** @type {Effect} */
    T
  ), f = El(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function v(c) {
    if ((o.f & ee) === 0) {
      f();
      try {
        n([...l, ...c]);
      } catch (h) {
        Pe(h, o);
      }
      Fr();
    }
  }
  var d = ji();
  if (r.length === 0) {
    u.then(() => v([])).finally(d);
    return;
  }
  function m() {
    Promise.all(r.map((c) => /* @__PURE__ */ kl(c))).then(v).catch((c) => Pe(c, o)).finally(d);
  }
  u ? u.then(() => {
    if ((o.f & ee) !== 0) {
      d();
      return;
    }
    f(), m(), Fr();
  }) : m();
}
function El() {
  var e = (
    /** @type {Effect} */
    T
  ), t = k, r = ie, n = (
    /** @type {Batch} */
    g
  );
  return function(s = !0) {
    Fe(e), ye(t), Ut(r), s && (e.f & ee) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Fr(e = !0) {
  Fe(null), ye(null), Ut(null), e && (g == null || g.deactivate());
}
function ji() {
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
function jr(e) {
  var t = te | q;
  return T !== null && (T.f |= Tt), {
    ctx: ie,
    deps: null,
    effects: null,
    equals: Mi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
const nr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function kl(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && fl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = xr(
    /** @type {V} */
    W
  ), l = !k, o = /* @__PURE__ */ new Set();
  return Hl(() => {
    var c, h;
    var f = (
      /** @type {Effect} */
      T
    ), u = Si();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (_) => {
        _ !== yr && u.reject(_);
      }).finally(Fr);
    } catch (_) {
      u.reject(_), Fr();
    }
    var v = (
      /** @type {Batch} */
      g
    );
    if (l) {
      if ((f.f & St) !== 0)
        var d = ji();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (c = n.b) != null && c.is_rendered()
      )
        (h = v.async_deriveds.get(f)) == null || h.reject(nr);
      else
        for (const _ of o.values())
          _.reject(nr);
      o.add(u), v.async_deriveds.set(f, u);
    }
    const m = (_, E = void 0) => {
      d == null || d(), o.delete(u), E !== nr && (v.activate(), E ? (s.f |= st, Yr(s, E)) : ((s.f & st) !== 0 && (s.f ^= st), Yr(s, _)), v.deactivate());
    };
    u.promise.then(m, (_) => m(null, _ || "unknown"));
  }), Bn(() => {
    for (const f of o)
      f.reject(nr);
  }), new Promise((f) => {
    function u(v) {
      function d() {
        v === i ? f(s) : u(i);
      }
      v.then(d, d);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Sl(e) {
  const t = /* @__PURE__ */ jr(e);
  return t.equals = Ni, t;
}
function Tl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      le(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Dn(e) {
  var t, r = T, n = e.parent;
  if (!Je && n !== null && e.v !== W && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (ee | we)) !== 0)
    return il(), e.v;
  Fe(n);
  try {
    Tl(e), t = us(e);
  } finally {
    Fe(r);
  }
  return t;
}
function Hi(e) {
  var t = Dn(e);
  if (!e.equals(t) && (e.wv = os(), (!(g != null && g.is_fork) || e.deps === null) && (g !== null ? (g.capture(e, t, !0), lt == null || lt.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    B(e, V);
    return;
  }
  Je || (J !== null ? (Yn() || g != null && g.is_fork) && J.set(e, t) : Ln(e));
}
function zl(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && Vt(() => {
        r.ac.abort(yr), r.ac = null;
      }), r.fn !== null && (r.teardown = ki), vr(r, 0), Wn(r));
}
function Yi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Wt(t);
}
let rn = null, At = null, g = null, lt = null, J = null, pn = null, or = !1, nn = !1, fr = null, Mr = null;
var ei = 0;
let Cl = 1;
var Dt, nt, mt, It, Ft, jt, Be, Ht, oe, pr, qe, Ee, Oe, Yt, bt, C, _n, gn, ir, mn, Bi, qi, Ot, Al, sr;
const Br = class Br {
  constructor() {
    $(this, C);
    L(this, "id", Cl++);
    /** True as soon as `#process` was called */
    $(this, Dt, !1);
    L(this, "linked", !0);
    /** @type {Batch | null} */
    $(this, nt, null);
    /** @type {Batch | null} */
    $(this, mt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    L(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    L(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    L(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, It, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, Ft, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, jt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    $(this, Be, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, Ht, null);
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
    $(this, oe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    $(this, pr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, Ee, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    $(this, Yt, /* @__PURE__ */ new Set());
    L(this, "is_fork", !1);
    $(this, bt, !1);
    At === null ? rn = At = this : (w(At, mt, this), w(this, nt, At)), At = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Oe).has(t) || a(this, Oe).set(t, { d: [], m: [] }), a(this, Yt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, Oe).get(t);
    if (n) {
      a(this, Oe).delete(t);
      for (var i of n.d)
        B(i, q), r(i);
      for (i of n.m)
        B(i, be), r(i);
    }
    a(this, Yt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== W && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & st) === 0 && (this.current.set(t, [r, n]), J == null || J.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, J = null;
  }
  flush() {
    try {
      nn = !0, g = this, y(this, C, ir).call(this);
    } finally {
      ei = 0, pn = null, fr = null, Mr = null, nn = !1, g = null, J = null, Le.clear();
    }
  }
  discard() {
    var t;
    for (const r of a(this, Ft)) r(this);
    a(this, Ft).clear();
    for (const r of this.async_deriveds.values())
      r.reject(nr);
    y(this, C, sr).call(this), (t = a(this, Ht)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, pr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (w(this, jt, a(this, jt) + 1), t) {
      let n = a(this, Be).get(r) ?? 0;
      a(this, Be).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (w(this, jt, a(this, jt) - 1), t) {
      let n = a(this, Be).get(r) ?? 0;
      n === 1 ? a(this, Be).delete(r) : a(this, Be).set(r, n - 1);
    }
    a(this, bt) || (w(this, bt, !0), Ve(() => {
      w(this, bt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, qe).add(n);
    for (const n of r)
      a(this, Ee).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, It).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, Ft).add(t);
  }
  settled() {
    return (a(this, Ht) ?? w(this, Ht, Si())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Br();
      !nn && !or && Ve(() => {
        a(t, Dt) || t.flush();
      });
    }
    return g;
  }
  apply() {
    {
      J = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (pn = t, (r = t.b) != null && r.is_pending && (t.f & (qt | Wr | Ti)) !== 0 && (t.f & St) === 0) {
      t.b.defer_effect(t);
      return;
    }
    a(this, oe).push(t);
  }
};
Dt = new WeakMap(), nt = new WeakMap(), mt = new WeakMap(), It = new WeakMap(), Ft = new WeakMap(), jt = new WeakMap(), Be = new WeakMap(), Ht = new WeakMap(), oe = new WeakMap(), pr = new WeakMap(), qe = new WeakMap(), Ee = new WeakMap(), Oe = new WeakMap(), Yt = new WeakMap(), bt = new WeakMap(), C = new WeakSet(), _n = function() {
  if (this.is_fork) return !0;
  for (const n of a(this, Be).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (a(this, Oe).has(t)) {
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
gn = function() {
  var t = [];
  for (const s of a(this, oe))
    if (!((s.f & ee) !== 0 || (s.f & (q | be)) === 0)) {
      for (var r = s, n = !1; r.parent !== null; ) {
        r = r.parent;
        var i = r.f;
        if ((i & (Ge | Ie)) !== 0) {
          if ((i & V) === 0) {
            n = !0;
            break;
          }
          r.f ^= V;
        }
      }
      n || t.push(r);
    }
  return w(this, oe, []), t;
}, ir = function() {
  var o, f, u, v;
  w(this, Dt, !0);
  for (const d of a(this, qe))
    a(this, Ee).delete(d), B(d, q), this.schedule(d);
  for (const d of a(this, Ee))
    B(d, be), this.schedule(d);
  this.apply();
  for (var t = fr = [], r = [], n = Mr = []; a(this, oe).length > 0; ) {
    ei++ > 1e3 && (y(this, C, sr).call(this), Ol());
    for (const d of y(this, C, gn).call(this))
      try {
        y(this, C, mn).call(this, d, t, r);
      } catch (m) {
        throw Vi(d), y(this, C, _n).call(this) || this.discard(), m;
      }
  }
  if (g = null, n.length > 0) {
    var i = Br.ensure();
    for (const d of n)
      i.schedule(d);
  }
  if (fr = null, Mr = null, y(this, C, _n).call(this)) {
    y(this, C, Ot).call(this, r), y(this, C, Ot).call(this, t);
    for (const [d, m] of a(this, Oe))
      Wi(d, m);
    n.length > 0 && /** @type {unknown} */
    y(o = g, C, ir).call(o);
    return;
  }
  const s = y(this, C, Bi).call(this);
  if (s) {
    y(this, C, Ot).call(this, r), y(this, C, Ot).call(this, t), y(f = s, C, qi).call(f, this);
    return;
  }
  a(this, qe).clear(), a(this, Ee).clear();
  for (const d of a(this, It)) d(this);
  a(this, It).clear(), lt = this, ti(r), ti(t), lt = null, (u = a(this, Ht)) == null || u.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (a(this, jt) === 0 && (a(this, oe).length === 0 || l !== null) && y(this, C, sr).call(this), a(this, oe).length > 0)
    if (l !== null) {
      for (const d of a(this, oe))
        a(l, oe).push(d);
      w(this, oe, []);
    } else
      l = this;
  l !== null && (Le.clear(), y(v = l, C, ir).call(v));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= V;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (Ie | Ge)) !== 0, o = l && (s & V) !== 0, f = o || (s & we) !== 0 || a(this, Oe).has(i);
    if (!f && i.fn !== null) {
      l ? i.f ^= V : (s & qt) !== 0 ? r.push(i) : $r(i) && ((s & Se) !== 0 && a(this, Ee).add(i), Wt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var v = i.next;
      if (v !== null) {
        i = v;
        break;
      }
      i = i.parent;
    }
  }
}, Bi = function() {
  for (var t = a(this, nt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = a(t, nt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
qi = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && s.promise.then(l.resolve).catch(l.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(a(t, qe), a(t, Ee));
  const r = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & te) !== 0 && (i.f & (q | be)) === 0))
      for (const f of s) {
        var l = f.f;
        if ((l & te) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var o = (
            /** @type {Effect} */
            f
          );
          l & (Rt | Se) && !this.async_deriveds.has(o) && (a(this, Ee).delete(o), B(o, q), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), y(n = t, C, sr).call(n), g = this, y(this, C, ir).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ot = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Di(t[r], a(this, qe), a(this, Ee));
}, Al = function() {
  var d, m;
  for (let c = rn; c !== null; c = a(c, mt)) {
    var t = c.id < this.id, r = [];
    for (const [h, [_, E]] of this.current) {
      if (c.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && _ !== n)
          c.current.set(h, [_, E]);
        else
          continue;
      }
      r.push(h);
    }
    if (t)
      for (const [h, _] of this.async_deriveds) {
        const E = c.async_deriveds.get(h);
        E && _.promise.then(E.resolve).catch(E.reject);
      }
    var i = [...c.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      c.current.get(h)[1]
    );
    if (!(!a(c, Dt) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const h of a(this, Yt))
            c.unskip_effect(h, (_) => {
              var E;
              (_.f & (Se | Rt)) !== 0 ? c.schedule(_) : y(E = c, C, Ot).call(E, [_]);
            });
        c.activate();
        var l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var f of r)
          Ui(f, s, l, o);
        o = /* @__PURE__ */ new Map();
        var u = [...c.current].filter(([h, _]) => {
          const E = this.current.get(h);
          return E ? E[0] !== _[0] || E[1] !== _[1] : !0;
        }).map(([h]) => h);
        if (u.length > 0)
          for (const h of a(this, pr))
            (h.f & (ee | we | Dr)) === 0 && In(h, u, o) && ((h.f & (Rt | Se)) !== 0 ? (B(h, q), c.schedule(h)) : a(c, qe).add(h));
        if (a(c, oe).length > 0 && !a(c, bt)) {
          c.apply();
          for (var v of y(d = c, C, gn).call(d))
            y(m = c, C, mn).call(m, v, [], []);
        }
        c.deactivate();
      }
    }
  }
}, sr = function() {
  if (this.linked) {
    var t = a(this, nt), r = a(this, mt);
    t === null ? rn = r : w(t, mt, r), r === null ? At = t : w(r, nt, t), this.linked = !1;
  }
};
let ot = Br;
function ae(e) {
  var t = or, r = lt;
  lt = null, or = !0;
  try {
    for (var n; ; ) {
      if (yl(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    or = t, lt = r;
  }
}
function Ol() {
  try {
    hl();
  } catch (e) {
    Pe(e, pn);
  }
}
let $e = null;
function ti(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ee | we)) === 0 && $r(n) && ($e = /* @__PURE__ */ new Set(), Wt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ns(n), ($e == null ? void 0 : $e.size) > 0)) {
        Le.clear();
        for (const i of $e) {
          if ((i.f & (ee | we)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            $e.has(l) && ($e.delete(l), s.push(l)), l = l.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const f = s[o];
            (f.f & (ee | we)) === 0 && Wt(f);
          }
        }
        $e.clear();
      }
    }
    $e = null;
  }
}
function Ui(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & te) !== 0 ? Ui(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Rt | Se)) !== 0 && (s & q) === 0 && In(i, t, n) && (B(i, q), Fn(
        /** @type {Effect} */
        i
      ));
    }
}
function In(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (dr.call(t, i))
        return !0;
      if ((i.f & te) !== 0 && In(
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
function Fn(e) {
  g.schedule(e);
}
function Wi(e, t) {
  if (!((e.f & Ie) !== 0 && (e.f & V) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & be) !== 0 && t.m.push(e), B(e, V);
    for (var r = e.first; r !== null; )
      Wi(r, t), r = r.next;
  }
}
function Vi(e) {
  B(e, V);
  for (var t = e.first; t !== null; )
    Vi(t), t = t.next;
}
let Hr = /* @__PURE__ */ new Set();
const Le = /* @__PURE__ */ new Map();
let Xi = !1;
function xr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Mi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = xr(e);
  return ql(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ml(e, t = !1, r = !0) {
  const n = xr(e);
  return t || (n.equals = Ni), n;
}
function b(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Te || (k.f & Dr) !== 0) && Pi() && (k.f & (te | Se | Rt | Dr)) !== 0 && (De === null || !De.has(e)) && ml();
  let n = r ? Nt(t) : t;
  return Yr(e, n, Mr);
}
var dt = null, bn = 0;
function Yr(e, t, r = null) {
  if (!e.equals(t)) {
    Je ? Le.set(e, t) : Le.has(e) || Le.set(e, e.v);
    var n = ot.ensure();
    if (n.capture(e, t), (e.f & te) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && Dn(i), J === null && Ln(i);
    }
    e.wv = os(), dt = null, bn = 0, Gi(e, q, r), dt = null, T !== null && (T.f & V) !== 0 && (T.f & (Ie | Ge)) === 0 && (ve === null ? Ul([e]) : ve.push(e)), !n.is_fork && Hr.size > 0 && !Xi && Nl();
  }
  return t;
}
function Nl() {
  Xi = !1;
  for (const e of Hr) {
    (e.f & V) !== 0 && B(e, be);
    let t;
    try {
      t = $r(e);
    } catch {
      t = !0;
    }
    t && Wt(e);
  }
  Hr.clear();
}
function ur(e) {
  b(e, e.v + 1);
}
function Gi(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (bn += i, bn > 1e5 && dt === null && (dt = /* @__PURE__ */ new Set()), dt !== null) {
      if (dt.has(e)) return;
      dt.add(e);
    }
    for (var s = 0; s < i; s++) {
      var l = n[s], o = l.f, f = (o & q) === 0;
      if (f && B(l, t), (o & Dr) !== 0)
        Hr.add(
          /** @type {Effect} */
          l
        );
      else if ((o & te) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        J == null || J.delete(u), Gi(u, be, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          l
        );
        (o & Se) !== 0 && $e !== null && $e.add(v), r !== null ? r.push(v) : Fn(v);
      }
    }
  }
}
function Nt(e) {
  if (typeof e != "object" || e === null || Pt in e || zi in e)
    return e;
  const t = Ei(e);
  if (t !== Js && t !== Zs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = On(e), i = /* @__PURE__ */ I(0), s = Et, l = (o) => {
    if (Et === s)
      return o();
    var f = k, u = Et;
    ye(null), ai(s);
    var v = o();
    return ye(f), ai(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && _l();
        var v = r.get(f);
        return v === void 0 ? l(() => {
          var d = /* @__PURE__ */ I(u.value);
          return r.set(f, d), d;
        }) : b(v, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const v = l(() => /* @__PURE__ */ I(W));
            r.set(f, v), ur(i);
          }
        } else
          b(u, W), ur(i);
        return !0;
      },
      get(o, f, u) {
        var c;
        if (f === Pt)
          return e;
        var v = r.get(f), d = f in o;
        if (v === void 0 && (!d || (c = $t(o, f)) != null && c.writable) && (v = l(() => {
          var h = Nt(d ? o[f] : W), _ = /* @__PURE__ */ I(h);
          return _;
        }), r.set(f, v)), v !== void 0) {
          var m = p(v);
          return m === W ? void 0 : m;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var m;
        (m = this.has) == null || m.call(this, o, f);
        var u = Reflect.getOwnPropertyDescriptor(o, f), v = r.get(f);
        if (v !== void 0) {
          var d = p(v);
          if (d === W)
            return;
          if (u && "value" in u)
            u.value = d;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        var m;
        if (f === Pt)
          return !0;
        var u = r.get(f), v = u !== void 0 && u.v !== W || Reflect.has(o, f);
        if (u !== void 0 || T !== null && (!v || (m = $t(o, f)) != null && m.writable)) {
          u === void 0 && (u = l(() => {
            var c = v ? Nt(o[f]) : W, h = /* @__PURE__ */ I(c);
            return h;
          }), r.set(f, u));
          var d = p(u);
          if (d === W)
            return !1;
        }
        return v;
      },
      set(o, f, u, v) {
        var F;
        var d = r.get(f), m = f in o;
        if (n && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          d.v; c += 1) {
            var h = r.get(c + "");
            h !== void 0 ? b(h, W) : c in o && (h = l(() => /* @__PURE__ */ I(W)), r.set(c + "", h));
          }
        if (d === void 0)
          (!m || (F = $t(o, f)) != null && F.writable) && (d = l(() => /* @__PURE__ */ I(void 0)), b(d, Nt(u)), r.set(f, d));
        else {
          m = d.v !== W;
          var _ = l(() => Nt(u));
          b(d, _);
        }
        var E = Reflect.getOwnPropertyDescriptor(o, f);
        if (E != null && E.set && E.set.call(v, u), !m) {
          if (n && typeof f == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), R = Number(f);
            Number.isInteger(R) && R >= M.v && b(M, R + 1);
          }
          ur(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var f = Reflect.ownKeys(o).filter((d) => {
          var m = r.get(d);
          return m === void 0 || m.v !== W;
        });
        for (var [u, v] of r)
          v.v !== W && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        gl();
      }
    }
  );
}
function ri(e) {
  try {
    if (e !== null && typeof e == "object" && Pt in e)
      return e[Pt];
  } catch {
  }
  return e;
}
function Ki(e, t) {
  return Object.is(ri(e), ri(t));
}
var ni, Ji, Zi, Qi;
function wn() {
  if (ni === void 0) {
    ni = window, Ji = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Zi = $t(t, "firstChild").get, Qi = $t(t, "nextSibling").get, Zn(e) && (e[dn] = void 0, e[Or] = null, e[hn] = void 0, e.__e = void 0), Zn(r) && (r[rr] = void 0);
  }
}
function Ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return (
    /** @type {TemplateNode | null} */
    Zi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return (
    /** @type {TemplateNode | null} */
    Qi.call(e)
  );
}
function Y(e, t) {
  if (!O)
    return /* @__PURE__ */ me(e);
  var r = /* @__PURE__ */ me(z);
  if (r === null)
    r = z.appendChild(Ke());
  else if (t && r.nodeType !== Vr) {
    var n = Ke();
    return r == null || r.before(n), Ce(n), n;
  }
  return t && Hn(
    /** @type {Text} */
    r
  ), Ce(r), r;
}
function ii(e, t = !1) {
  if (!O) {
    var r = /* @__PURE__ */ me(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ze(r) : r;
  }
  if (t) {
    if ((z == null ? void 0 : z.nodeType) !== Vr) {
      var n = Ke();
      return z == null || z.before(n), Ce(n), n;
    }
    Hn(
      /** @type {Text} */
      z
    );
  }
  return z;
}
function yn(e, t = !1) {
  if (!O)
    return /* @__PURE__ */ me(e);
  var r = Y(e, t);
  return H(e), r;
}
function D(e, t = 1, r = !1) {
  let n = O ? z : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(n);
  if (!O)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Vr) {
      var s = Ke();
      return n === null ? i == null || i.after(s) : n.before(s), Ce(s), s;
    }
    Hn(
      /** @type {Text} */
      n
    );
  }
  return Ce(n), n;
}
function Rl(e) {
  e.textContent = "";
}
function Pl() {
  return !1;
}
function jn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function Hn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Vr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Ll(e) {
  var t = T;
  if (t === null)
    return k.f |= st, e;
  if ((t.f & St) === 0 && (t.f & qt) === 0)
    throw e;
  Pe(e, t);
}
function Pe(e, t) {
  if (e === at)
    throw e;
  if (!(t !== null && (t.f & ee) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & cn) !== 0 && (t.f & (ee | Lr)) === 0) {
        if ((t.f & St) === 0)
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
function Dl(e) {
  T === null && (k === null && dl(), cl()), Je && ul();
}
function Il(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t) {
  var r = T;
  r !== null && (r.f & we) !== 0 && (e |= we);
  var n = {
    ctx: ie,
    deps: null,
    nodes: null,
    f: e | q | ze,
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
  var i = n;
  if ((e & qt) !== 0)
    fr !== null ? fr.push(n) : ot.ensure().schedule(n);
  else if (t !== null) {
    try {
      Wt(n);
    } catch (l) {
      throw le(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Tt) === 0 && (i = i.first, (e & Se) !== 0 && (e & kt) !== 0 && i !== null && (i.f |= kt));
  }
  if (i !== null && (i.parent = r, r !== null && Il(i, r), k !== null && (k.f & te) !== 0 && (e & Ge) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Yn() {
  return k !== null && !Te;
}
function Bn(e) {
  const t = je(Wr, null);
  return B(t, V), t.teardown = e, t;
}
function xn(e) {
  Dl();
  var t = (
    /** @type {Effect} */
    T.f
  ), r = !k && (t & Ie) !== 0 && ie !== null && !ie.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ie
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return es(e);
}
function es(e) {
  return je(qt | tl, e);
}
function Fl(e) {
  ot.ensure();
  const t = je(Ge | Tt, e);
  return () => {
    le(t);
  };
}
function jl(e) {
  ot.ensure();
  const t = je(Ge | Tt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? cr(t, () => {
      le(t), n(void 0);
    }) : (le(t), n(void 0));
  });
}
function ts(e) {
  return je(qt, e);
}
function Hl(e) {
  return je(Rt | Tt, e);
}
function qn(e, t = 0) {
  return je(Wr | t, e);
}
function ht(e, t = [], r = [], n = []) {
  $l(n, t, r, (i) => {
    je(Wr, () => {
      e(...i.map(p));
    });
  });
}
function Un(e, t = 0) {
  var r = je(Se | t, e);
  return r;
}
function Ye(e) {
  return je(Ie | Tt, e);
}
function rs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Je, n = k;
    li(!0), ye(null);
    try {
      t.call(null);
    } catch (i) {
      Pe(i, e.parent);
    } finally {
      li(r), ye(n);
    }
  }
}
function Wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Vt(() => {
      i.abort(yr);
    });
    var n = r.next;
    (r.f & Ge) !== 0 ? r.parent = null : le(r, t), r = n;
  }
}
function Yl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ie) === 0 && le(t), t = r;
  }
}
function le(e, t = !0) {
  var r = !1;
  (t || (e.f & el) !== 0) && e.nodes !== null && e.nodes.end !== null && (Bl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Lr, Wn(e, t && !r), vr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  rs(e), e.f ^= Lr, e.f |= ee;
  var i = e.parent;
  i !== null && i.first !== null && ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Bl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ze(e);
    e.remove(), e = r;
  }
}
function ns(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function cr(e, t, r = !0) {
  var n = [];
  e.f |= Mn, is(e, n, !0);
  var i = () => {
    r && le(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var o of n)
      o.out(l);
  } else
    i();
}
function is(e, t, r) {
  if ((e.f & we) === 0) {
    e.f ^= we;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ge) === 0) {
        var l = (i.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ie) !== 0 && (e.f & Se) !== 0;
        is(i, t, l ? r : !1);
      }
      i = s;
    }
  }
}
function si(e) {
  e.f &= ~Mn, ss(e, !0);
}
function ss(e, t) {
  if ((e.f & Mn) === 0 && (e.f & we) !== 0) {
    e.f ^= we, (e.f & V) === 0 && (B(e, q), ot.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & kt) !== 0 || (r.f & Ie) !== 0;
      ss(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function ls(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ze(r);
      t.append(r), r = i;
    }
}
let Je = !1;
function li(e) {
  Je = e;
}
let k = null, Te = !1;
function ye(e) {
  k = e;
}
let T = null;
function Fe(e) {
  T = e;
}
let De = null;
function ql(e) {
  k !== null && ((k.f & Ir) !== 0 || (k.f & te) !== 0) && (De ?? (De = /* @__PURE__ */ new Set())).add(e);
}
let se = null, he = 0, ve = null;
function Ul(e) {
  ve = e;
}
let as = 1, pt = 0, Et = pt;
function ai(e) {
  Et = e;
}
function os() {
  return ++as;
}
function $r(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if ((t & be) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if ($r(
        /** @type {Derived} */
        s
      ) && Hi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    J === null && B(e, V);
  }
  return !1;
}
function fs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(De !== null && De.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & te) !== 0 ? fs(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? B(s, q) : (s.f & V) !== 0 && B(s, be), Fn(
        /** @type {Effect} */
        s
      ));
    }
}
function us(e) {
  var t = se, r = he, n = ve, i = k, s = De, l = ie, o = Te, f = Et, u = e.f;
  se = /** @type {null | Value[]} */
  null, he = 0, ve = null, k = (u & (Ie | Ge)) === 0 ? e : null, De = null, Ut(e.ctx), Te = !1, Et = ++pt, e.ac !== null && (Vt(() => {
    e.ac.abort(yr);
  }), e.ac = null);
  try {
    e.f |= Ir;
    var v = (
      /** @type {Function} */
      e.fn
    ), d = v();
    e.f |= St;
    var m = oi(e);
    if (Pi() && ve !== null && !Te && m !== null && (e.f & (te | be | q)) === 0)
      for (var c = 0; c < /** @type {Source[]} */
      ve.length; c++)
        fs(
          ve[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (pt++, i.deps !== null)
        for (let h = 0; h < r; h += 1)
          i.deps[h].rv = pt;
      if (t !== null)
        for (const h of t)
          h.rv = pt;
      ve !== null && (n === null ? n = ve : n.push(.../** @type {Source[]} */
      ve));
    }
    return (e.f & st) !== 0 && (e.f ^= st), d;
  } catch (h) {
    return oi(e), Ll(h);
  } finally {
    e.f ^= Ir, se = t, he = r, ve = n, k = i, De = s, Ut(l), Te = o, Et = f;
  }
}
function oi(e) {
  var i;
  var t = e.deps, r = g == null ? void 0 : g.is_fork;
  if (se !== null) {
    var n;
    if (r || vr(e, he), t !== null && he > 0)
      for (t.length = he + se.length, n = 0; n < se.length; n++)
        t[he + n] = se[n];
    else
      e.deps = t = se;
    if (Yn() && (e.f & ze) !== 0)
      for (n = he; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && he < t.length && (vr(e, he), t.length = he);
  return t;
}
function Wl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xs.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !dr.call(se, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ze) !== 0 && (s.f ^= ze), s.v !== W && Ln(s), s.ac !== null && Vt(() => {
      s.ac.abort(yr), s.ac = null, B(s, q);
    }), zl(s), vr(s, 0);
  }
}
function vr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Wl(e, r[n]);
}
function Wt(e) {
  var t = e.f;
  if ((t & ee) === 0) {
    B(e, V);
    var r = T;
    T = e;
    try {
      (t & (Se | Ti)) !== 0 ? Yl(e) : Wn(e), rs(e);
      var n = us(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = as;
      var i;
      $i && wl && (e.f & q) !== 0 && e.deps;
    } finally {
      T = r;
    }
  }
}
async function Vl() {
  await Promise.resolve(), ae();
}
function p(e) {
  var t = e.f, r = (t & te) !== 0;
  if (k !== null && !Te) {
    var n = T !== null && (T.f & ee) !== 0;
    if (!n && (De === null || !De.has(e))) {
      var i = k.deps;
      if ((k.f & Ir) !== 0)
        e.rv < pt && (e.rv = pt, se === null && i !== null && i[he] === e ? he++ : se === null ? se = [e] : se.push(e));
      else {
        k.deps ?? (k.deps = []), dr.call(k.deps, e) || k.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : dr.call(s, k) || s.push(k);
      }
    }
  }
  if (Je && Le.has(e))
    return Le.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Je) {
      var o = l.v;
      return ((l.f & V) === 0 && l.reactions !== null || ds(l)) && (o = Dn(l)), Le.set(l, o), o;
    }
    var f = (l.f & ze) === 0 && !Te && k !== null && (k.f & ze) !== 0, u = (l.f & St) === 0;
    $r(l) && (f && (l.f |= ze), Hi(l)), f && !u && (Yi(l), cs(l));
  }
  if (J != null && J.has(e))
    return J.get(e);
  if ((e.f & st) !== 0)
    throw e.v;
  return e.v;
}
function cs(e) {
  if (e.f |= ze, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : dr.call(t, e) || t.push(e), (r.f & te) !== 0 && (r.f & ze) === 0 && (Yi(
        /** @type {Derived} */
        r
      ), cs(
        /** @type {Derived} */
        r
      ));
    }
}
function ds(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Le.has(t) || (t.f & te) !== 0 && ds(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Kr(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const _t = Symbol("events"), hs = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new Set();
function Xl(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || En.call(t, s), !s.cancelBubble)
      return Vt(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ve(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function Gl(e, t, r, n, i) {
  var s = { capture: n, passive: i }, l = Xl(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Bn(() => {
    l.__removed = !0, t.removeEventListener(e, l, s);
  });
}
function ge(e, t, r) {
  (t[_t] ?? (t[_t] = {}))[e] = r;
}
function vs(e) {
  for (var t = 0; t < e.length; t++)
    hs.add(e[t]);
  for (var r of $n)
    r(e);
}
let sn = null, ln = !1;
function En(e) {
  var _, E;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  sn = e, ln || (ln = !0, setTimeout(() => {
    ln = !1, sn = null;
  }));
  var l = 0, o = sn === e && e[_t];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[_t] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    hr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = k, d = T;
    ye(null), Fe(null);
    try {
      for (var m, c = []; s !== null && s !== t; ) {
        try {
          var h = (E = s[_t]) == null ? void 0 : E[n];
          h != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && h.call(s, e);
        } catch (M) {
          m ? c.push(M) : m = M;
        }
        if (e.cancelBubble) break;
        l++, s = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (m) {
        for (let M of c)
          queueMicrotask(() => {
            throw M;
          });
        throw m;
      }
    } finally {
      e[_t] = t, delete e.currentTarget, ye(v), Fe(d);
    }
  }
}
var mi;
const an = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((mi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : mi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Kl(e) {
  return (
    /** @type {string} */
    (an == null ? void 0 : an.createHTML(e)) ?? e
  );
}
function ps(e) {
  var t = jn("template");
  return t.innerHTML = Kl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xe(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ft(e, t) {
  var r = (t & bi) !== 0, n = (t & Ws) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (O)
      return Xe(z, null), z;
    i === void 0 && (i = ps(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ me(i)));
    var l = (
      /** @type {TemplateNode} */
      n || Ji ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Xe(o, f);
    } else
      Xe(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Jl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & bi) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (O)
      return Xe(z, null), z;
    if (!l) {
      var o = (
        /** @type {DocumentFragment} */
        ps(s)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ me(o)
      );
      if (i)
        for (l = document.createDocumentFragment(); /* @__PURE__ */ me(f); )
          l.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ me(f)
          );
      else
        l = /** @type {Element} */
        /* @__PURE__ */ me(f);
    }
    var u = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    if (i) {
      var v = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Xe(v, d);
    } else
      Xe(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Xt(e, t) {
  return /* @__PURE__ */ Jl(e, t, "svg");
}
function Zl() {
  if (O)
    return Xe(z, null), z;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ke();
  return e.append(t, r), Xe(t, r), e;
}
function Q(e, t) {
  if (O) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      T
    );
    ((r.f & St) === 0 || r.nodes.end === null) && (r.nodes.end = z), Nn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ql = ["touchstart", "touchmove"];
function ea(e) {
  return Ql.includes(e);
}
function ta(e) {
  let t = 0, r = xr(0), n;
  return () => {
    Yn() && (p(r), qn(() => (t === 0 && (n = Kr(() => e(() => ur(r)))), t += 1, () => {
      Ve(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, ur(r));
      });
    })));
  };
}
var ra = kt | Tt;
function na(e, t, r, n) {
  new ia(e, t, r, n);
}
var fe, _r, pe, wt, Z, ue, ne, ce, Me, yt, it, Bt, gr, mr, Ue, qr, S, _s, gs, kn, rt, ms, Sn, lr, Nr, Tn, zn;
class ia {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    $(this, S);
    /** @type {Boundary | null} */
    L(this, "parent");
    L(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    L(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, fe);
    /** @type {TemplateNode | null} */
    $(this, _r, O ? z : null);
    /** @type {BoundaryProps} */
    $(this, pe);
    /** @type {((anchor: Node) => void)} */
    $(this, wt);
    /** @type {Effect} */
    $(this, Z);
    /** @type {Effect | null} */
    $(this, ue, null);
    /** @type {Effect | null} */
    $(this, ne, null);
    /** @type {Effect | null} */
    $(this, ce, null);
    /** @type {DocumentFragment | null} */
    $(this, Me, null);
    $(this, yt, 0);
    $(this, it, 0);
    $(this, Bt, !1);
    /** @type {Set<Effect>} */
    $(this, gr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, mr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, Ue, null);
    $(this, qr, ta(() => (w(this, Ue, xr(a(this, yt))), () => {
      w(this, Ue, null);
    })));
    var s;
    w(this, fe, t), w(this, pe, r), w(this, wt, (l) => {
      var o = (
        /** @type {Effect} */
        T
      );
      o.b = this, o.f |= cn, n(l);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((l) => l), w(this, Z, Un(() => {
      if (O) {
        const l = Oi(
          /** @type {TemplateNode} */
          a(this, _r)
        );
        Nn();
        const o = l === yi;
        if (l.startsWith(Jn)) {
          const u = JSON.parse(l.slice(Jn.length));
          y(this, S, gs).call(this, u);
        } else o ? y(this, S, ms).call(this) : y(this, S, _s).call(this);
      } else
        y(this, S, Sn).call(this);
    }, ra)), O && w(this, fe, z);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Di(t, a(this, gr), a(this, mr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, pe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    y(this, S, Tn).call(this, t, r), w(this, yt, a(this, yt) + t), !(!a(this, Ue) || a(this, Bt)) && (w(this, Bt, !0), Ve(() => {
      w(this, Bt, !1), a(this, Ue) && Yr(a(this, Ue), a(this, yt));
    }));
  }
  get_effect_pending() {
    return a(this, qr).call(this), p(
      /** @type {Source<number>} */
      a(this, Ue)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === at || !a(this, pe).onerror && !a(this, pe).failed)
      throw t;
    g != null && g.is_fork ? (a(this, ue) && g.skip_effect(a(this, ue)), a(this, ne) && g.skip_effect(a(this, ne)), a(this, ce) && g.skip_effect(a(this, ce)), g.oncommit(() => {
      y(this, S, rt).call(this) || y(this, S, zn).call(this, t);
    })) : y(this, S, zn).call(this, t);
  }
}
fe = new WeakMap(), _r = new WeakMap(), pe = new WeakMap(), wt = new WeakMap(), Z = new WeakMap(), ue = new WeakMap(), ne = new WeakMap(), ce = new WeakMap(), Me = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), Bt = new WeakMap(), gr = new WeakMap(), mr = new WeakMap(), Ue = new WeakMap(), qr = new WeakMap(), S = new WeakSet(), _s = function() {
  try {
    w(this, ue, Ye(() => a(this, wt).call(this, a(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
gs = function(t) {
  const r = a(this, pe).failed, { reset: n, invoke_onerror: i } = y(this, S, kn).call(this, t);
  Ve(i), r && w(this, ce, Ye(() => {
    r(
      a(this, fe),
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
kn = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (!y(this, S, rt).call(this)) {
      if (r) {
        ll();
        return;
      }
      r = !0, n && bl(), a(this, ce) !== null && cr(a(this, ce), () => {
        w(this, ce, null);
      }), y(this, S, Nr).call(this, () => {
        y(this, S, Sn).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var l, o;
    if (!y(this, S, rt).call(this))
      try {
        n = !0, (o = (l = a(this, pe)).onerror) == null || o.call(l, t, i), n = !1;
      } catch (f) {
        Pe(f, a(this, Z) && a(this, Z).parent);
      }
  } };
}, rt = function() {
  return (a(this, Z).f & (ee | Lr)) !== 0;
}, ms = function() {
  const t = a(this, pe).pending;
  t && (this.is_pending = !0, w(this, ne, Ye(() => t(a(this, fe)))), Ve(() => {
    if (!y(this, S, rt).call(this)) {
      var r = w(this, Me, document.createDocumentFragment()), n = Ke(), i = !1;
      if (r.append(n), w(this, ue, y(this, S, Nr).call(this, () => {
        try {
          return Ye(() => a(this, wt).call(this, n));
        } catch (s) {
          try {
            this.error(s), i = !0;
          } catch (l) {
            Pe(l, a(this, Z).parent);
          }
          return null;
        }
      })), a(this, ue) === null) {
        w(this, Me, null), i && y(this, S, lr).call(
          this,
          /** @type {Batch} */
          g
        );
        return;
      }
      a(this, it) === 0 && (a(this, fe).before(r), w(this, Me, null), cr(
        /** @type {Effect} */
        a(this, ne),
        () => {
          w(this, ne, null);
        }
      ), y(this, S, lr).call(
        this,
        /** @type {Batch} */
        g
      ));
    }
  }));
}, Sn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, it, 0), w(this, yt, 0), w(this, ue, Ye(() => {
      a(this, wt).call(this, a(this, fe));
    })), a(this, it) > 0) {
      var t = w(this, Me, document.createDocumentFragment());
      ls(a(this, ue), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, pe).pending
      );
      w(this, ne, Ye(() => r(a(this, fe))));
    } else
      y(this, S, lr).call(
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
lr = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, gr), a(this, mr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Nr = function(t) {
  var r = T, n = k, i = ie;
  Fe(a(this, Z)), ye(a(this, Z)), Ut(a(this, Z).ctx);
  try {
    return ot.ensure(), t();
  } finally {
    Fe(r), ye(n), Ut(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Tn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && y(n = this.parent, S, Tn).call(n, t, r);
    return;
  }
  w(this, it, a(this, it) + t), a(this, it) === 0 && (y(this, S, lr).call(this, r), a(this, ne) && cr(a(this, ne), () => {
    w(this, ne, null);
  }), a(this, Me) && (a(this, fe).before(a(this, Me)), w(this, Me, null)));
}, /**
 * @param {unknown} error
 */
zn = function(t) {
  a(this, ue) && (le(a(this, ue)), w(this, ue, null)), a(this, ne) && (le(a(this, ne)), w(this, ne, null)), a(this, ce) && (le(a(this, ce)), w(this, ce, null)), O && (Ce(
    /** @type {TemplateNode} */
    a(this, _r)
  ), vn(), Ce(Ai()));
  let r = a(this, pe).failed;
  const n = (i) => {
    if (y(this, S, rt).call(this)) return;
    const { reset: s, invoke_onerror: l } = y(this, S, kn).call(this, i);
    l(), r && !y(this, S, rt).call(this) && w(this, ce, y(this, S, Nr).call(this, () => {
      try {
        return Ye(() => {
          var o = (
            /** @type {Effect} */
            T
          );
          o.b = this, o.f |= cn, r(
            a(this, fe),
            () => i,
            () => s
          );
        });
      } catch (o) {
        return Pe(
          o,
          /** @type {Effect} */
          a(this, Z).parent
        ), null;
      }
    }));
  };
  Ve(() => {
    if (!y(this, S, rt).call(this)) {
      var i;
      try {
        i = this.transform_error(t);
      } catch (s) {
        Pe(s, a(this, Z) && a(this, Z).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        n,
        /** @param {unknown} e */
        (s) => Pe(s, a(this, Z) && a(this, Z).parent)
      ) : n(i);
    }
  });
};
function Cn(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[rr] ?? (e[rr] = e.nodeValue)) && (e[rr] = r, e.nodeValue = `${r}`);
}
function bs(e, t) {
  return ws(e, t);
}
function sa(e, t) {
  wn(), t.intro = t.intro ?? !1;
  const r = t.target, n = O, i = z;
  try {
    for (var s = /* @__PURE__ */ me(r); s && (s.nodeType !== Xr || /** @type {Comment} */
    s.data !== wi); )
      s = /* @__PURE__ */ Ze(s);
    if (!s)
      throw at;
    Mt(!0), Ce(
      /** @type {Comment} */
      s
    );
    const l = ws(e, { ...t, anchor: s });
    return Mt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== at && console.warn("Failed to hydrate: ", l), t.recover === !1 && vl(), wn(), Rl(r), Mt(!1), bs(e, t);
  } finally {
    Mt(n), Ce(i);
  }
}
const Cr = /* @__PURE__ */ new Map();
function ws(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: o }) {
  wn();
  var f = void 0, u = jl(() => {
    var v = r ?? t.appendChild(Ke());
    na(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (c) => {
        Rn({});
        var h = (
          /** @type {ComponentContext} */
          ie
        );
        if (s && (h.c = s), i && (n.$$events = i), O && Xe(
          /** @type {TemplateNode} */
          c,
          null
        ), f = e(c, n) || Ri(), O && (T.nodes.end = z, z === null || z.nodeType !== Xr || /** @type {Comment} */
        z.data !== xi))
          throw Gr(), at;
        Pn();
      },
      o
    );
    var d = /* @__PURE__ */ new Set(), m = (c) => {
      for (var h = 0; h < c.length; h++) {
        var _ = c[h];
        if (!d.has(_)) {
          d.add(_);
          var E = ea(_);
          for (const F of [t, document]) {
            var M = Cr.get(F);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Cr.set(F, M));
            var R = M.get(_);
            R === void 0 ? (F.addEventListener(_, En, { passive: E }), M.set(_, 1)) : M.set(_, R + 1);
          }
        }
      }
    };
    return m(Gs(hs)), $n.add(m), () => {
      var E;
      for (var c of d)
        for (const M of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Cr.get(M)
          ), _ = (
            /** @type {number} */
            h.get(c)
          );
          --_ == 0 ? (M.removeEventListener(c, En), h.delete(c), h.size === 0 && Cr.delete(M)) : h.set(c, _);
        }
      $n.delete(m), v !== r && ((E = v.parentNode) == null || E.removeChild(v));
    };
  });
  return An.set(f, u), f;
}
let An = /* @__PURE__ */ new WeakMap();
function la(e, t) {
  const r = An.get(e);
  return r ? (An.delete(e), r(t)) : Promise.resolve();
}
var ke, Ne, de, xt, br, wr, Ur;
class ys {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    L(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, ke, /* @__PURE__ */ new Map());
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
    $(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, de, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, xt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, br, !0);
    /**
     * @param {Batch} batch
     */
    $(this, wr, (t) => {
      if (a(this, ke).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, ke).get(t)
        ), n = a(this, Ne).get(r);
        if (n)
          si(n), a(this, xt).delete(r);
        else {
          var i = a(this, de).get(r);
          i && (si(i.effect), a(this, Ne).set(r, i.effect), a(this, de).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, l] of a(this, ke)) {
          if (a(this, ke).delete(s), s === t)
            break;
          const o = a(this, de).get(l);
          o && (le(o.effect), a(this, de).delete(l));
        }
        for (const [s, l] of a(this, Ne)) {
          if (s === r || a(this, xt).has(s)) continue;
          const o = () => {
            if (Array.from(a(this, ke).values()).includes(s)) {
              var u = document.createDocumentFragment();
              ls(l, u), u.append(Ke()), a(this, de).set(s, { effect: l, fragment: u });
            } else
              le(l);
            a(this, xt).delete(s), a(this, Ne).delete(s);
          };
          a(this, br) || !n ? (a(this, xt).add(s), cr(l, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, Ur, (t) => {
      a(this, ke).delete(t);
      const r = Array.from(a(this, ke).values());
      for (const [n, i] of a(this, de))
        r.includes(n) || (le(i.effect), a(this, de).delete(n));
    });
    this.anchor = t, w(this, br, r);
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
    ), i = Pl();
    if (r && !a(this, Ne).has(t) && !a(this, de).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = Ke();
        s.append(l), a(this, de).set(t, {
          effect: Ye(() => r(l)),
          fragment: s
        });
      } else
        a(this, Ne).set(
          t,
          Ye(() => r(this.anchor))
        );
    if (a(this, ke).set(n, t), i) {
      for (const [o, f] of a(this, Ne))
        o === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of a(this, de))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(a(this, wr)), n.ondiscard(a(this, Ur));
    } else
      O && (this.anchor = z), a(this, wr).call(this, n);
  }
}
ke = new WeakMap(), Ne = new WeakMap(), de = new WeakMap(), xt = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), Ur = new WeakMap();
function fi(e, t, ...r) {
  var n = new ys(e);
  Un(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, kt);
}
function aa(e) {
  ie === null && ol(), xn(() => {
    const t = Kr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Re(e, t, r = !1) {
  var n;
  O && (n = z, Nn());
  var i = new ys(e), s = r ? kt : 0;
  function l(o, f) {
    if (O) {
      var u = Oi(
        /** @type {TemplateNode} */
        n
      );
      if (o !== parseInt(u.substring(1))) {
        var v = Ai();
        Ce(v), i.anchor = v, Mt(!1), i.ensure(o, f), Mt(!0);
        return;
      }
    }
    i.ensure(o, f);
  }
  Un(() => {
    var o = !1;
    t((f, u = 0) => {
      o = !0, l(u, f);
    }), o || l(-1, null);
  }, s);
}
function xs(e, t) {
  ts(() => {
    var i, s;
    e = ((s = (i = T == null ? void 0 : T.parent) == null ? void 0 : i.nodes) == null ? void 0 : s.start) ?? e;
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
      const l = jn("style");
      l.id = t.hash, l.textContent = t.code, n.appendChild(l);
    }
  });
}
const ui = [...` 	
\r\f \v\uFEFF`];
function oa(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0; ) {
          var o = l + s;
          (l === 0 || ui.includes(n[l - 1])) && (o === n.length || ui.includes(n[o])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(o + 1) : l = o;
        }
  }
  return n === "" ? null : n;
}
function ci(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function fa(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += ci(n)), i && (r += ci(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function gt(e, t, r, n, i, s) {
  var l = (
    /** @type {any} */
    e[dn]
  );
  if (O || l !== r || l === void 0) {
    var o = oa(r, n, s);
    (!O || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e[dn] = r;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function on(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function di(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[hn]
  );
  if (O || i !== t) {
    var s = fa(t, n);
    (!O || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[hn] = t;
  } else n && (Array.isArray(n) ? (on(e, r == null ? void 0 : r[0], n[0]), on(e, r == null ? void 0 : r[1], n[1], "important")) : on(e, r, n));
  return n;
}
function ua(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ca(e, t) {
  var r = e.__defaultValue, n = e.multiple, i = n ? r ?? [] : null;
  if (!(n && !On(i))) {
    e.selectedIndex;
    for (var s of e.options) {
      var l = Lt(s);
      ua(
        s,
        n ? (
          /** @type {any[]} */
          i.includes(l)
        ) : Ki(l, r)
      );
    }
  }
}
function $s(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!On(t))
      return sl();
    for (var n of e.options)
      n.selected = t.includes(Lt(n));
    return;
  }
  for (n of e.options) {
    var i = Lt(n);
    if (Ki(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function da(e) {
  var t = new MutationObserver((r) => {
    r.every(va) || ("__defaultValue" in e && ca(e), "__value" in e && $s(e, e.__value));
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
  }), Bn(() => {
    t.disconnect();
  });
}
function ha(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Fi(e, "change", (s) => {
    var l = s ? "[selected]" : ":checked", o;
    if (e.multiple)
      o = [].map.call(e.querySelectorAll(l), Lt);
    else {
      var f = e.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      o = f && Lt(f);
    }
    r(o), e.__value = o, g !== null && n.add(g);
  }), ts(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (n.has(l))
        return;
    }
    if ($s(e, s, i), i && s === void 0) {
      var o = e.querySelector(":checked");
      o !== null && (s = Lt(o), r(s));
    }
    e.__value = s, i = !1;
  });
}
function Lt(e) {
  return "__value" in e ? e.__value : e.value;
}
function va(e) {
  if (
    /** @type {Element} */
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((r) => r.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const pa = Symbol("is custom element"), _a = Symbol("is html"), ga = nl ? "link" : "LINK";
function hi(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Ae(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Ae(e, "checked", null), e.checked = i;
        }
      }
    };
    e[ar] = r, Ve(r), Ii();
  }
}
function Ae(e, t, r, n) {
  var i = ma(e);
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ga) || i[t] !== (i[t] = r) && (t === "loading" && (e[rl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ba(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function ma(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Or] ?? (e[Or] = {
      [pa]: e.nodeName.includes("-"),
      [_a]: e.namespaceURI === Vs
    })
  );
}
var vi = /* @__PURE__ */ new Map();
function ba(e) {
  var t = e.getAttribute("is") || e.nodeName, r = vi.get(t);
  if (r) return r;
  vi.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = Ks(i);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    i = Ei(i);
  }
  return r;
}
function pi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Fi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = fn(e) ? un(s) : s, r(s), g !== null && n.add(g), await Vl(), s !== (s = t())) {
      var l = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var u = e.value.length;
        l === o && o === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (O && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Kr(t) == null && e.value) && (r(fn(e) ? un(e.value) : e.value), g !== null && n.add(g)), qn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        g
      );
      if (n.has(s))
        return;
    }
    fn(e) && i === un(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function fn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function un(e) {
  return e === "" ? null : +e;
}
let Ar = !1;
function wa(e) {
  var t = Ar;
  try {
    return Ar = !1, [e(), Ar];
  } finally {
    Ar = t;
  }
}
function xe(e, t, r, n) {
  var P;
  var i = !0, s = (r & qs) !== 0, l = (r & Us) !== 0, o = (
    /** @type {V} */
    n
  ), f = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => l && i ? (u ?? (u = /* @__PURE__ */ jr(
    /** @type {() => V} */
    n
  )), p(u)) : (f && (f = !1, o = l ? Kr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o);
  let d;
  if (s) {
    var m = Pt in e || Ci in e;
    d = ((P = $t(e, t)) == null ? void 0 : P.set) ?? (m && t in e ? (N) => e[t] = N : void 0);
  }
  var c, h = !1;
  s ? [c, h] = wa(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t], c === void 0 && n !== void 0 && (c = v(), d && (pl(), d(c)));
  var _;
  if (_ = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? v() : (f = !0, N);
  }, (r & Bs) === 0)
    return _;
  if (d) {
    var E = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(N, X) {
        return arguments.length > 0 ? ((!X || E || h) && d(X ? _() : N), N) : _();
      })
    );
  }
  var M = !1, R = ((r & Ys) !== 0 ? jr : Sl)(() => (M = !1, _()));
  s && p(R);
  var F = (
    /** @type {Effect} */
    T
  );
  return (
    /** @type {() => V} */
    (function(N, X) {
      if (arguments.length > 0) {
        const He = X ? p(R) : s ? Nt(N) : N;
        return b(R, He), M = !0, o !== void 0 && (o = He), N;
      }
      return Je && M || (F.f & ee) !== 0 ? R.v : p(R);
    })
  );
}
function ya(e) {
  return new xa(e);
}
var We, _e;
class xa {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $(this, We);
    /** @type {Record<string, any>} */
    $(this, _e);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var f = /* @__PURE__ */ Ml(o, !1, !1);
      return r.set(l, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return p(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === Ci ? !0 : (p(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, f) {
          return b(r.get(o) ?? n(o, f), f), Reflect.set(l, o, f);
        }
      }
    );
    w(this, _e, (t.hydrate ? sa : bs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && ae(), w(this, We, i.$$events);
    for (const l of Object.keys(a(this, _e)))
      l === "$set" || l === "$destroy" || l === "$on" || hr(this, l, {
        get() {
          return a(this, _e)[l];
        },
        /** @param {any} value */
        set(o) {
          a(this, _e)[l] = o;
        },
        enumerable: !0
      });
    a(this, _e).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, a(this, _e).$destroy = () => {
      la(a(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    a(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    a(this, We)[t] = a(this, We)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return a(this, We)[t].push(n), () => {
      a(this, We)[t] = a(this, We)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    a(this, _e).$destroy();
  }
}
We = new WeakMap(), _e = new WeakMap();
let Es;
typeof HTMLElement == "function" && (Es = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    L(this, "$$ctor");
    /** Slots */
    L(this, "$$s");
    /** @type {any} The Svelte component instance */
    L(this, "$$c");
    /** Whether or not the custom element is connected */
    L(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    L(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    L(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    L(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    L(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    L(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    L(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    L(this, "$$shadowRoot", null);
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
          const l = jn("slot");
          i !== "default" && (l.name = i), Q(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = $a(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Rr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ya({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Fl(() => {
        qn(() => {
          var i;
          this.$$r = !0;
          for (const s of Pr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = Rr(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Rr(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Pr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Rr(e, t, r, n) {
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
function $a(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ks(e, t, r, n, i, s) {
  let l = class extends Es {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Pr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Pr(t).forEach((o) => {
    hr(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var d;
        f = Rr(o, f, t), this.$$d[o] = f;
        var u = this.$$c;
        if (u) {
          var v = (d = $t(u, o)) == null ? void 0 : d.get;
          v ? u[o] = f : u.$set({ [o]: f });
        }
      }
    });
  }), n.forEach((o) => {
    hr(l.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var Ea = /* @__PURE__ */ Xt('<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" opacity="0.3"></path><rect x="7" y="7" width="10" height="10" fill="currentColor"></rect>', 1), ka = /* @__PURE__ */ Xt('<rect x="7" y="7" width="10" height="10" fill="none"></rect>'), Sa = /* @__PURE__ */ Xt('<rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), Ta = /* @__PURE__ */ Xt('<rect x="1" y="7" width="8" height="2" fill="currentColor"></rect>'), za = /* @__PURE__ */ Xt('<rect x="2" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect><rect x="0" y="2" width="8" height="8" fill="var(--shell-panel-bg, #ffffff)" stroke="currentColor" stroke-width="1.5"></rect>', 1), Ca = /* @__PURE__ */ Xt('<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), Aa = /* @__PURE__ */ ft('<div class="dialog-footer svelte-ygb1nh"><!></div>'), Oa = /* @__PURE__ */ ft("<div><!></div> <!>", 1), Ma = /* @__PURE__ */ ft('<div tabindex="-1" role="dialog"><div><div class="dialog-titlebar svelte-ygb1nh" role="heading" aria-level="2"><span class="dialog-title svelte-ygb1nh"> </span> <div class="dialog-controls svelte-ygb1nh"><button type="button"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn minimize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn maximize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn close svelte-ygb1nh" title="Close" aria-label="Close dialog"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5"></line><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5"></line></svg></button></div></div> <!></div></div>');
const Na = {
  hash: "svelte-ygb1nh",
  code: `.dialog-wrapper.svelte-ygb1nh {position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:flex-start;padding:0;}.dialog-wrapper.is-modal.svelte-ygb1nh {background:color-mix(in srgb, var(--shell-text-strong, #020617), transparent 72%);}.dialog-wrapper.minimized.svelte-ygb1nh {align-items:flex-end;justify-content:flex-start;}.dialog.svelte-ygb1nh {position:absolute;display:flex;flex-direction:column;background:var(--shell-panel, var(--shell-panel-bg, #ffffff));border:1px solid var(--shell-border, #e2e8f0);border-radius:12px;box-shadow:var(--shell-shadow, 0 16px 48px rgba(0, 0, 0, 0.15));overflow:hidden;min-width:min(20rem, calc(100vw - 24px));min-height:200px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);font-family:var(--font-ui, system-ui, sans-serif);color:var(--shell-text, #0f172a);}.dialog-titlebar.svelte-ygb1nh {display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));border-bottom:1px solid var(--shell-border, #e2e8f0);cursor:grab;user-select:none;flex-shrink:0;}.dialog-titlebar.svelte-ygb1nh:active {cursor:grabbing;}.dialog-title.svelte-ygb1nh {font:var(--efs-font-title-sm, 600 15px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text-strong, #020617);letter-spacing:0.01em;}.dialog-controls.svelte-ygb1nh {display:flex;gap:6px;align-items:center;}.ctrl-btn.svelte-ygb1nh {width:20px;height:20px;border:none;border-radius:4px;background:transparent;color:var(--shell-muted, #64748b);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background 0.15s, color 0.15s;}.ctrl-btn.svelte-ygb1nh:hover {background:var(--shell-hover-bg, #e2e8f0);color:var(--shell-text-strong, #020617);}.ctrl-btn.close.svelte-ygb1nh:hover {background:var(--efs-state-danger, #dc2626);color:var(--shell-pill-text, #fff);}.dialog-body.svelte-ygb1nh {flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;}.dialog-body.flush.svelte-ygb1nh {padding:0;gap:0;}.dialog-footer.svelte-ygb1nh {display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid var(--shell-border, #e2e8f0);background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));flex-shrink:0;}\r
\r
  @media (max-width: 47.99rem) {.dialog.svelte-ygb1nh {min-width:0;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);border-radius:10px;}.dialog-titlebar.svelte-ygb1nh {padding:12px;}.dialog-body.svelte-ygb1nh {padding:14px;gap:12px;}.dialog-footer.svelte-ygb1nh {flex-wrap:wrap;padding:12px 14px;}\r
  }`
};
function Ss(e, t) {
  Rn(t, !0), xs(e, Na);
  let r = xe(t, "title", 7), n = xe(t, "open", 15, !1), i = xe(t, "modal", 15, !0), s = xe(t, "defaultWidth", 7, 480), l = xe(t, "defaultHeight", 7, 380), o = xe(t, "defaultX", 7, 120), f = xe(t, "defaultY", 7, 80), u = xe(t, "flushBody", 7, !1), v = xe(t, "onClose", 7), d = xe(t, "children", 7), m = xe(t, "footer", 7), c = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(!1), _ = /* @__PURE__ */ I(0), E = /* @__PURE__ */ I(0), M = !1;
  function R() {
    if (typeof window > "u")
      return { x: o(), y: f() };
    const x = window.innerWidth <= 768 ? 8 : 12, re = Math.max(x, window.innerWidth - s() - x), ut = Math.max(x, window.innerHeight - l() - x);
    return {
      x: Math.min(Math.max(x, o()), re),
      y: Math.min(Math.max(x, f()), ut)
    };
  }
  xn(() => {
    if (!M) {
      const { x, y: re } = R();
      b(_, x, !0), b(E, re, !0), M = !0;
    }
  });
  let F = /* @__PURE__ */ I(!1), P = 0, N = 0;
  xn(() => {
    n() && (b(c, !1), b(h, !1));
  });
  function X(x) {
    p(h) || x.target.closest(".dialog-controls") || (b(F, !0), P = x.clientX - p(_), N = x.clientY - p(E), window.addEventListener("pointermove", He), window.addEventListener("pointerup", Gt));
  }
  function He(x) {
    p(F) && (b(_, x.clientX - P), b(E, x.clientY - N));
  }
  function Gt() {
    b(F, !1), window.removeEventListener("pointermove", He), window.removeEventListener("pointerup", Gt);
  }
  function Er(x) {
    x.key === "Escape" && (p(h) ? b(h, !1) : p(c) ? b(c, !1) : v()());
  }
  var Jr = {
    get title() {
      return r();
    },
    set title(x) {
      r(x), ae();
    },
    get open() {
      return n();
    },
    set open(x = !1) {
      n(x), ae();
    },
    get modal() {
      return i();
    },
    set modal(x = !0) {
      i(x), ae();
    },
    get defaultWidth() {
      return s();
    },
    set defaultWidth(x = 480) {
      s(x), ae();
    },
    get defaultHeight() {
      return l();
    },
    set defaultHeight(x = 380) {
      l(x), ae();
    },
    get defaultX() {
      return o();
    },
    set defaultX(x = 120) {
      o(x), ae();
    },
    get defaultY() {
      return f();
    },
    set defaultY(x = 80) {
      f(x), ae();
    },
    get flushBody() {
      return u();
    },
    set flushBody(x = !1) {
      u(x), ae();
    },
    get onClose() {
      return v();
    },
    set onClose(x) {
      v(x), ae();
    },
    get children() {
      return d();
    },
    set children(x) {
      d(x), ae();
    },
    get footer() {
      return m();
    },
    set footer(x) {
      m(x), ae();
    }
  }, zt = Zl(), Kt = ii(zt);
  {
    var Jt = (x) => {
      var re = Ma();
      let ut, kr;
      var ct = Y(re);
      let Sr, Zt;
      var Qe = Y(ct), Qt = Y(Qe), Zr = yn(Qt, !0), U = D(Qt, 2), j = Y(U);
      let G;
      var et = Y(j), er = Y(et);
      {
        var tr = (A) => {
          var K = Ea();
          vn(), Q(A, K);
        }, Tr = (A) => {
          var K = ka();
          Q(A, K);
        };
        Re(er, (A) => {
          i() ? A(tr) : A(Tr, -1);
        });
      }
      H(et), H(j);
      var tt = D(j, 2), Vn = Y(tt), Ts = Y(Vn);
      {
        var zs = (A) => {
          var K = Sa();
          Q(A, K);
        }, Cs = (A) => {
          var K = Ta();
          Q(A, K);
        };
        Re(Ts, (A) => {
          p(c) ? A(zs) : A(Cs, -1);
        });
      }
      H(Vn), H(tt);
      var Ct = D(tt, 2), Xn = Y(Ct), As = Y(Xn);
      {
        var Os = (A) => {
          var K = za();
          vn(), Q(A, K);
        }, Ms = (A) => {
          var K = Ca();
          Q(A, K);
        };
        Re(As, (A) => {
          p(h) ? A(Os) : A(Ms, -1);
        });
      }
      H(Xn), H(Ct);
      var Ns = D(Ct, 2);
      H(U), H(Qe);
      var Rs = D(Qe, 2);
      {
        var Ps = (A) => {
          var K = Oa(), zr = ii(K);
          let Gn;
          var Ls = Y(zr);
          fi(Ls, () => d() ?? ki), H(zr);
          var Ds = D(zr, 2);
          {
            var Is = (Qr) => {
              var en = Aa(), Fs = Y(en);
              fi(Fs, m), H(en), Q(Qr, en);
            };
            Re(Ds, (Qr) => {
              m() && Qr(Is);
            });
          }
          ht(() => Gn = gt(zr, 1, "dialog-body svelte-ygb1nh", null, Gn, { flush: u() })), Q(A, K);
        };
        Re(Rs, (A) => {
          p(c) || A(Ps);
        });
      }
      H(ct), H(re), ht(() => {
        ut = gt(re, 1, "dialog-wrapper svelte-ygb1nh", null, ut, { "is-modal": i(), minimized: p(c) }), Ae(re, "aria-modal", i() ? "true" : "false"), Ae(re, "aria-label", r()), kr = di(re, "", kr, { "pointer-events": i() ? "auto" : "none" }), Sr = gt(ct, 1, "dialog svelte-ygb1nh", null, Sr, { maximized: p(h) }), Zt = di(ct, "", Zt, {
          left: p(h) ? "0" : p(_) + "px",
          top: p(h) ? "0" : p(E) + "px",
          width: p(h) ? "100%" : s() + "px",
          height: p(h) ? "100%" : l() + "px",
          "pointer-events": "auto"
        }), Cn(Zr, r()), G = gt(j, 1, "ctrl-btn unprioritize svelte-ygb1nh", null, G, { active: !i() }), Ae(j, "title", i() ? "Unprioritize (drop backdrop)" : "Prioritize (show backdrop)"), Ae(j, "aria-label", i() ? "Unprioritize" : "Prioritize"), Ae(tt, "title", p(c) ? "Restore" : "Minimize"), Ae(tt, "aria-label", p(c) ? "Restore dialog" : "Minimize dialog"), Ae(Ct, "title", p(h) ? "Restore" : "Maximize"), Ae(Ct, "aria-label", p(h) ? "Restore dialog" : "Maximize dialog");
      }), ge("click", re, (A) => {
        i() && A.target === A.currentTarget && v()();
      }), ge("keydown", re, Er), ge("pointerdown", Qe, X), ge("click", j, () => {
        i(!i());
      }), ge("click", tt, () => {
        b(c, !p(c)), b(h, !1);
      }), ge("click", Ct, () => {
        b(h, !p(h)), b(c, !1);
      }), ge("click", Ns, function(...A) {
        var K;
        (K = v()) == null || K.apply(this, A);
      }), Q(x, re);
    };
    Re(Kt, (x) => {
      n() && x(Jt);
    });
  }
  return Q(e, zt), Pn(Jr);
}
vs(["click", "keydown", "pointerdown"]);
ks(
  Ss,
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
var Ra = /* @__PURE__ */ ft('<div class="error-msg svelte-6llngz"> </div>'), Pa = /* @__PURE__ */ ft('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Framework</span> <select name="framework" class="input-field svelte-6llngz"><option>Svelte</option><option>SvelteKit</option><option>React</option><option>Angular</option></select></label>'), La = /* @__PURE__ */ ft('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">GitHub Repository URL</span> <input name="githubUrl" type="url" autocomplete="off" spellcheck="false" placeholder="https://github.com/user/repo" required="" class="input-field svelte-6llngz"/></label>'), Da = /* @__PURE__ */ ft('<label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Archive File (.zip, .tar.gz)</span> <input type="file" accept=".zip,.tar,.tar.gz,.tgz" required="" class="input-field file-input svelte-6llngz"/></label>'), Ia = /* @__PURE__ */ ft('<div class="creator-content svelte-6llngz"><div class="header svelte-6llngz"><div class="eyebrow svelte-6llngz">Component Creator</div> <h3 class="title svelte-6llngz">New Component</h3> <p class="copy svelte-6llngz">Create a new component to use in your routes, or import an existing one.</p></div> <div class="mode-tabs svelte-6llngz"><button type="button">Template</button> <button type="button">GitHub</button> <button type="button">Upload</button></div> <!> <form class="form-grid svelte-6llngz"><label class="field-label svelte-6llngz"><span class="label-text svelte-6llngz">Component Name</span> <input name="name" type="text" autocomplete="off" spellcheck="false" placeholder="my-component" required="" class="input-field svelte-6llngz"/></label> <!> <!> <!> <div class="actions svelte-6llngz"><button type="button" class="ghost-button svelte-6llngz">Cancel</button> <button type="submit" class="pill-button svelte-6llngz"> </button></div></form></div>');
const Fa = {
  hash: "svelte-6llngz",
  code: ".creator-content.svelte-6llngz {padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem;color:var(--shell-text, #0f172a);}.header.svelte-6llngz {display:flex;flex-direction:column;gap:0.25rem;}.eyebrow.svelte-6llngz {font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--shell-muted, #64748b);}.title.svelte-6llngz {margin:0;font-size:1.125rem;font-weight:600;}.copy.svelte-6llngz {margin:0;font-size:0.875rem;line-height:1.5;color:var(--shell-muted, #64748b);}.form-grid.svelte-6llngz {display:flex;flex-direction:column;gap:1rem;}.field-label.svelte-6llngz {display:flex;flex-direction:column;gap:0.35rem;}.label-text.svelte-6llngz {font-size:0.875rem;font-weight:600;color:var(--shell-muted, #64748b);}.input-field.svelte-6llngz {padding:0.5rem 0.75rem;background:var(--shell-input-bg, #ffffff);border:1px solid var(--shell-border, #e2e8f0);border-radius:0.375rem;color:var(--shell-text, #0f172a);font-family:inherit;font-size:0.875rem;transition:border-color 0.15s, box-shadow 0.15s;}.input-field.svelte-6llngz:focus {outline:none;border-color:var(--shell-border-strong, #cbd5e1);box-shadow:0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);}.input-field.svelte-6llngz:disabled {opacity:0.6;cursor:not-allowed;}.actions.svelte-6llngz {display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;margin-top:0.5rem;}.ghost-button.svelte-6llngz {background:transparent;border:none;color:var(--shell-text, #0f172a);padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.ghost-button.svelte-6llngz:hover:not(:disabled) {background:var(--shell-hover-bg, rgba(0,0,0,0.05));}.ghost-button.svelte-6llngz:disabled {opacity:0.5;cursor:not-allowed;}.pill-button.svelte-6llngz {background:var(--shell-primary, #0f172a);color:var(--shell-primary-text, #ffffff);border:none;padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:opacity 0.15s, transform 0.15s;}.pill-button.svelte-6llngz:hover:not(:disabled) {opacity:0.9;transform:translateY(-1px);}.pill-button.svelte-6llngz:disabled {opacity:0.5;cursor:not-allowed;}.mode-tabs.svelte-6llngz {display:flex;gap:0.5rem;padding:0.25rem;background:var(--shell-inset-bg, rgba(0,0,0,0.05));border-radius:0.5rem;margin-bottom:0.5rem;}.tab.svelte-6llngz {flex:1;background:transparent;border:none;padding:0.5rem;border-radius:0.375rem;font-size:0.875rem;font-weight:500;color:var(--shell-muted, #64748b);cursor:pointer;transition:all 0.2s;}.tab.svelte-6llngz:hover {color:var(--shell-text, #0f172a);}.tab.active.svelte-6llngz {background:var(--shell-surface, #ffffff);color:var(--shell-text, #0f172a);box-shadow:0 1px 3px rgba(0,0,0,0.1);}.file-input.svelte-6llngz {padding:0.4rem;}.error-msg.svelte-6llngz {padding:0.5rem 0.75rem;background:rgba(239, 68, 68, 0.1);border:1px solid rgba(239, 68, 68, 0.2);border-radius:0.375rem;color:#ef4444;font-size:0.875rem;}"
};
function ja(e, t) {
  Rn(t, !0), xs(e, Fa);
  let r = /* @__PURE__ */ I(!1), n = /* @__PURE__ */ I(""), i = /* @__PURE__ */ I("sveltekit"), s = /* @__PURE__ */ I(!1), l = /* @__PURE__ */ I(""), o = /* @__PURE__ */ I(""), f = /* @__PURE__ */ I("staging"), u = /* @__PURE__ */ I(
    "create"
    // 'create', 'github', 'upload'
  ), v = /* @__PURE__ */ I(""), d = /* @__PURE__ */ I(null);
  const m = typeof window < "u" ? 520 : 450, c = typeof window < "u" ? Math.max(16, window.innerWidth / 2 - m / 2) : 120, h = typeof window < "u" ? Math.max(16, window.innerHeight * 0.2) : 100;
  aa(() => {
    const R = (F) => {
      const P = F.detail;
      if (P && P.path && b(o, P.path, !0), P && P.env)
        b(f, P.env, !0);
      else {
        const N = new URLSearchParams(window.location.search);
        b(f, N.get("env") || "staging", !0);
      }
      b(r, !0), b(n, ""), b(l, ""), b(i, "sveltekit");
    };
    return window.addEventListener("efsdb:create-component", R), () => {
      window.removeEventListener("efsdb:create-component", R);
    };
  });
  async function _(R) {
    var F;
    if (R.preventDefault(), !p(n).trim()) {
      b(l, "Component name is required.");
      return;
    }
    if (p(u) === "github" && !p(v).trim()) {
      b(l, "GitHub repository URL is required.");
      return;
    }
    if (p(u) === "upload" && !p(d)) {
      b(l, "Please select a ZIP or TAR archive to upload.");
      return;
    }
    b(s, !0), b(l, "");
    try {
      let P;
      if (p(u) === "create")
        P = await fetch("/_efsdb/api/explorer/create-component", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: p(n).trim(),
            framework: p(i),
            env: p(f)
          })
        });
      else {
        const X = new FormData();
        X.append("name", p(n).trim()), X.append("env", p(f)), X.append("source", p(u)), p(u) === "github" ? X.append("githubUrl", p(v).trim()) : p(u) === "upload" && p(d) && X.append("archive", p(d)), P = await fetch("/_efsdb/api/explorer/import-component", { method: "POST", body: X });
      }
      let N;
      try {
        N = await P.json();
      } catch {
        N = { error: { message: "Invalid response from server" } };
      }
      if (!P.ok || N.error)
        throw new Error(((F = N == null ? void 0 : N.error) == null ? void 0 : F.message) || `HTTP ${P.status}`);
      b(r, !1), window.location.reload();
    } catch (P) {
      b(l, P instanceof Error ? P.message : "An unknown error occurred.", !0);
    } finally {
      b(s, !1);
    }
  }
  function E() {
    b(r, !1);
  }
  function M(R) {
    const F = R.target;
    F.files && F.files.length > 0 ? b(d, F.files[0], !0) : b(d, null);
  }
  Ss(e, {
    title: "Component Creator",
    modal: !1,
    get defaultWidth() {
      return m;
    },
    defaultHeight: 380,
    get defaultX() {
      return c;
    },
    get defaultY() {
      return h;
    },
    onClose: () => b(r, !1),
    get open() {
      return p(r);
    },
    set open(R) {
      b(r, R, !0);
    },
    children: (R, F) => {
      var P = Ia(), N = D(Y(P), 2), X = Y(N), He = D(X, 2), Gt = D(He, 2);
      H(N);
      var Er = D(N, 2);
      {
        var Jr = (U) => {
          var j = Ra(), G = yn(j, !0);
          ht(() => Cn(G, p(l))), Q(U, j);
        };
        Re(Er, (U) => {
          p(l) && U(Jr);
        });
      }
      var zt = D(Er, 2), Kt = Y(zt), Jt = D(Y(Kt), 2);
      hi(Jt), H(Kt);
      var x = D(Kt, 2);
      {
        var re = (U) => {
          var j = Pa(), G = D(Y(j), 2), et = Y(G);
          et.value = et.__value = "svelte";
          var er = D(et);
          er.value = er.__value = "sveltekit";
          var tr = D(er);
          tr.value = tr.__value = "react";
          var Tr = D(tr);
          Tr.value = Tr.__value = "angular", H(G), da(G), H(j), ht(() => G.disabled = p(s)), ha(G, () => p(i), (tt) => b(i, tt)), Q(U, j);
        };
        Re(x, (U) => {
          p(u) === "create" && U(re);
        });
      }
      var ut = D(x, 2);
      {
        var kr = (U) => {
          var j = La(), G = D(Y(j), 2);
          hi(G), H(j), ht(() => G.disabled = p(s)), pi(G, () => p(v), (et) => b(v, et)), Q(U, j);
        };
        Re(ut, (U) => {
          p(u) === "github" && U(kr);
        });
      }
      var ct = D(ut, 2);
      {
        var Sr = (U) => {
          var j = Da(), G = D(Y(j), 2);
          H(j), ht(() => G.disabled = p(s)), ge("change", G, M), Q(U, j);
        };
        Re(ct, (U) => {
          p(u) === "upload" && U(Sr);
        });
      }
      var Zt = D(ct, 2), Qe = Y(Zt), Qt = D(Qe, 2), Zr = yn(Qt, !0);
      H(Zt), H(zt), H(P), ht(() => {
        gt(X, 1, `tab ${p(u) === "create" ? "active" : ""}`, "svelte-6llngz"), gt(He, 1, `tab ${p(u) === "github" ? "active" : ""}`, "svelte-6llngz"), gt(Gt, 1, `tab ${p(u) === "upload" ? "active" : ""}`, "svelte-6llngz"), Jt.disabled = p(s), Qe.disabled = p(s), Qt.disabled = p(s), Cn(Zr, p(s) ? "Creating..." : "Create Component");
      }), ge("click", X, () => b(u, "create")), ge("click", He, () => b(u, "github")), ge("click", Gt, () => b(u, "upload")), Gl("submit", zt, _), pi(Jt, () => p(n), (U) => b(n, U)), ge("click", Qe, E), Q(R, P);
    },
    $$slots: { default: !0 }
  }), Pn();
}
vs(["click", "change"]);
customElements.define("efsdb-create", ks(ja, {}, [], [], { mode: "open" }));
export {
  ja as Create
};
