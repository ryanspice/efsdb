var wd = Object.defineProperty;
var as = (e) => {
  throw TypeError(e);
};
var fd = (e, t, r) => t in e ? wd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => fd(e, typeof t != "symbol" ? t + "" : t, r), Vi = (e, t, r) => t.has(e) || as("Cannot " + r);
var w = (e, t, r) => (Vi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), L = (e, t, r) => t.has(e) ? as("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (Vi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (Vi(e, t, "access private method"), r);
var $s;
typeof window < "u" && (($s = window.__svelte ?? (window.__svelte = {})).v ?? ($s.v = /* @__PURE__ */ new Set())).add("5");
const ud = 1, pd = 2, Ps = 4, md = 8, gd = 16, vd = 1, bd = 4, yd = 8, xd = 16, kd = 1, qd = 2, Rs = "[", Ma = "[!", ss = "[?", za = "]", Pr = {}, Pe = Symbol("uninitialized"), _d = "http://www.w3.org/1999/xhtml", As = !1;
var Cs = Array.isArray, jd = Array.prototype.indexOf, zo = Array.prototype.includes, ki = Array.from, di = Object.keys, $o = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Sd = Object.getOwnPropertyDescriptors, Md = Object.prototype, zd = Array.prototype, Is = Object.getPrototypeOf, ls = Object.isExtensible;
const Tn = () => {
};
function $d(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ls() {
  var e, t, r = new Promise((n, o) => {
    e = n, t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
const Ve = 2, Dn = 4, qi = 8, Bs = 1 << 24, Dt = 16, Ft = 32, gr = 64, aa = 128, $a = 256, Ht = 512, Ae = 1024, je = 2048, zt = 4096, Je = 8192, We = 16384, fn = 32768, To = 1 << 25, hn = 65536, ci = 1 << 17, Td = 1 << 18, un = 1 << 19, Ed = 1 << 20, Jt = 1 << 25, hi = 1 << 21, En = 1 << 22, Tr = 1 << 23, xo = Symbol("$state"), Os = Symbol("component"), Ws = Symbol("legacy props"), Pd = Symbol(""), ii = Symbol("attributes"), sa = Symbol("class"), la = Symbol("style"), fo = Symbol("text"), ko = Symbol("form reset"), Do = new class extends Error {
  constructor() {
    super(...arguments);
    we(this, "name", "StaleReactionError");
    we(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ts;
const Ds = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ts = globalThis.document) != null && Ts.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), _i = 3, No = 8;
function Rd() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ji(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ad() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Q = !1;
function mr(e) {
  Q = e;
}
let K;
function it(e) {
  if (e === null)
    throw ji(), Pr;
  return K = e;
}
function Si() {
  return it(/* @__PURE__ */ nr(K));
}
function _(e) {
  if (Q) {
    if (/* @__PURE__ */ nr(K) !== null)
      throw ji(), Pr;
    K = e;
  }
}
function Xr(e = 1) {
  if (Q) {
    for (var t = e, r = K; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ nr(r);
    K = r;
  }
}
function wi(e = !0) {
  for (var t = 0, r = K; ; ) {
    if (r.nodeType === No) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === za) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Rs || n === Ma || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nr(r)
    );
    e && r.remove(), r = o;
  }
}
function Ta(e) {
  if (!e || e.nodeType !== No)
    throw ji(), Pr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ns(e) {
  return e === this.v;
}
function Hs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fs(e) {
  return !Hs(e, this.v);
}
function Cd(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Id() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ld(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Bd(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Od() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wd(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hd(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ud() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Yd = !1, Fe = null;
function Nn(e) {
  Fe = e;
}
function Mi(e, t = !1, r) {
  Fe = {
    p: Fe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      U
    ),
    l: null
  };
}
function zi(e) {
  var t = (
    /** @type {ComponentContext} */
    Fe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      fl(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Fe = t.p, Ea(e);
}
function Ea(e = {}) {
  return $o(e, Os, { value: !0 }), e;
}
function Vs() {
  return !0;
}
let Jr = [];
function Gs() {
  var e = Jr;
  Jr = [], $d(e);
}
function Qt(e) {
  if (Jr.length === 0 && !qo) {
    var t = Jr;
    queueMicrotask(() => {
      t === Jr && Gs();
    });
  }
  Jr.push(e);
}
function Zd() {
  for (; Jr.length > 0; )
    Gs();
}
const Xd = -7169;
function ye(e, t) {
  e.f = e.f & Xd | t;
}
function Pa(e) {
  (e.f & Ht) !== 0 || e.deps === null ? ye(e, Ae) : ye(e, zt);
}
function Us(e, t, r) {
  (e.f & je) !== 0 ? t.add(e) : (e.f & zt) !== 0 && r.add(e), ye(e, Ae);
}
let ds = !1;
function Ys() {
  ds || (ds = !0, document.addEventListener(
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
            (t = r[ko]) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Vn(e) {
  var t = Y, r = U;
  Tt(null), rr(null);
  try {
    return e();
  } finally {
    Tt(t), rr(r);
  }
}
function Kd(e, t, r, n = r) {
  e.addEventListener(t, () => Vn(r));
  const o = (
    /** @type {any} */
    e[ko]
  );
  o ? e[ko] = () => {
    o(), n(!0);
  } : e[ko] = () => n(!0), Ys();
}
function Jd(e, t, r, n) {
  const o = Eo;
  var i = e.filter((p) => !p.settled), s = t.map(o);
  if (r.length === 0 && i.length === 0) {
    n(s);
    return;
  }
  var l = (
    /** @type {Effect} */
    U
  ), d = Qd(), c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function f(p) {
    if ((l.f & We) === 0) {
      d();
      try {
        n([...s, ...p]);
      } catch (g) {
        Kt(g, l);
      }
      fi();
    }
  }
  var u = Zs();
  if (r.length === 0) {
    c.then(() => f([])).finally(u);
    return;
  }
  function m() {
    Promise.all(r.map((p) => /* @__PURE__ */ ec(p))).then(f).catch((p) => Kt(p, l)).finally(u);
  }
  c ? c.then(() => {
    if ((l.f & We) !== 0) {
      u();
      return;
    }
    d(), m(), fi();
  }) : m();
}
function Qd() {
  var e = (
    /** @type {Effect} */
    U
  ), t = Y, r = Fe, n = (
    /** @type {Batch} */
    P
  );
  return function(i = !0) {
    rr(e), Tt(t), Nn(r), i && (e.f & We) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function fi(e = !0) {
  rr(null), Tt(null), Nn(null), e && (P == null || P.deactivate());
}
function Zs() {
  var e = (
    /** @type {Effect} */
    U
  ), t = e.b, r = (
    /** @type {Batch} */
    P
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  var t = Ve | je;
  return U !== null && (U.f |= un), {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Ns,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Pe
    ),
    wv: 0,
    parent: U,
    ac: null
  };
}
const uo = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ec(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    U
  );
  n === null && Id();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wn(
    /** @type {V} */
    Pe
  ), s = !Y, l = /* @__PURE__ */ new Set();
  return wc(() => {
    var p, g;
    var d = (
      /** @type {Effect} */
      U
    ), c = Ls();
    o = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (x) => {
        x !== Do && c.reject(x);
      }).finally(fi);
    } catch (x) {
      c.reject(x), fi();
    }
    var f = (
      /** @type {Batch} */
      P
    );
    if (s) {
      if ((d.f & fn) !== 0)
        var u = Zs();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (p = n.b) != null && p.is_rendered()
      )
        (g = f.async_deriveds.get(d)) == null || g.reject(uo);
      else
        for (const x of l.values())
          x.reject(uo);
      l.add(c), f.async_deriveds.set(d, c);
    }
    const m = (x, b = void 0) => {
      u == null || u(), l.delete(c), b !== uo && (f.activate(), b ? (i.f |= Tr, Hn(i, b)) : ((i.f & Tr) !== 0 && (i.f ^= Tr), Hn(i, x)), f.deactivate());
    };
    c.promise.then(m, (x) => m(null, x || "unknown"));
  }), wl(() => {
    for (const d of l)
      d.reject(uo);
  }), new Promise((d) => {
    function c(f) {
      function u() {
        f === o ? d(i) : c(o);
      }
      f.then(u, u);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = /* @__PURE__ */ Eo(e);
  return vl(t), t;
}
// @__NO_SIDE_EFFECTS__
function Xs(e) {
  const t = /* @__PURE__ */ Eo(e);
  return t.equals = Fs, t;
}
function tc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Qe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ra(e) {
  var t, r = U, n = e.parent;
  if (!vr && n !== null && e.v !== Pe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (We | Je)) !== 0)
    return Rd(), e.v;
  rr(n);
  try {
    tc(e), t = kl(e);
  } finally {
    rr(r);
  }
  return t;
}
function Ks(e) {
  var t = Ra(e);
  if (!e.equals(t) && (e.wv = yl(), (!(P != null && P.is_fork) || e.deps === null) && (P !== null ? (P.capture(e, t, !0), Er == null || Er.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ye(e, Ae);
    return;
  }
  vr || (Oe !== null ? (Ba() || P != null && P.is_fork) && Oe.set(e, t) : Pa(e));
}
function rc(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && Vn(() => {
        r.ac.abort(Do), r.ac = null;
      }), r.fn !== null && (r.teardown = Tn), Po(r, 0), Wa(r));
}
function Js(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Fn(t);
}
let Gi = null, _n = null, P = null, Er = null, Oe = null, da = null, qo = !1, Ui = !1, _o = null, ai = null;
var cs = 0;
let nc = 1;
var Rn, Mr, rn, An, Cn, In, hr, Ln, ct, Ao, wr, Ot, Yt, Bn, nn, ne, ca, ha, po, wa, Qs, el, Sn, oc, mo;
const gi = class gi {
  constructor() {
    L(this, ne);
    we(this, "id", nc++);
    /** True as soon as `#process` was called */
    L(this, Rn, !1);
    we(this, "linked", !0);
    /** @type {Batch | null} */
    L(this, Mr, null);
    /** @type {Batch | null} */
    L(this, rn, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    we(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    we(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    we(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, An, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, Cn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, In, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    L(this, hr, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, Ln, null);
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
    L(this, ct, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    L(this, Ao, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, wr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, Ot, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, Yt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    L(this, Bn, /* @__PURE__ */ new Set());
    we(this, "is_fork", !1);
    L(this, nn, !1);
    _n === null ? Gi = _n = this : (A(_n, rn, this), A(this, Mr, _n)), _n = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    w(this, Yt).has(t) || w(this, Yt).set(t, { d: [], m: [] }), w(this, Bn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = w(this, Yt).get(t);
    if (n) {
      w(this, Yt).delete(t);
      for (var o of n.d)
        ye(o, je), r(o);
      for (o of n.m)
        ye(o, zt), r(o);
    }
    w(this, Bn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Pe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Tr) === 0 && (this.current.set(t, [r, n]), Oe == null || Oe.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    P = this;
  }
  deactivate() {
    P = null, Oe = null;
  }
  flush() {
    try {
      Ui = !0, P = this, C(this, ne, po).call(this);
    } finally {
      cs = 0, da = null, _o = null, ai = null, Ui = !1, P = null, Oe = null, er.clear();
    }
  }
  discard() {
    var t;
    for (const r of w(this, Cn)) r(this);
    w(this, Cn).clear();
    for (const r of this.async_deriveds.values())
      r.reject(uo);
    C(this, ne, mo).call(this), (t = w(this, Ln)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    w(this, Ao).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (A(this, In, w(this, In) + 1), t) {
      let n = w(this, hr).get(r) ?? 0;
      w(this, hr).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (A(this, In, w(this, In) - 1), t) {
      let n = w(this, hr).get(r) ?? 0;
      n === 1 ? w(this, hr).delete(r) : w(this, hr).set(r, n - 1);
    }
    w(this, nn) || (A(this, nn, !0), Qt(() => {
      A(this, nn, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      w(this, wr).add(n);
    for (const n of r)
      w(this, Ot).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    w(this, An).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    w(this, Cn).add(t);
  }
  settled() {
    return (w(this, Ln) ?? A(this, Ln, Ls())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new gi();
      !Ui && !qo && Qt(() => {
        w(t, Rn) || t.flush();
      });
    }
    return P;
  }
  apply() {
    {
      Oe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (da = t, (r = t.b) != null && r.is_pending && (t.f & (Dn | qi | Bs)) !== 0 && (t.f & fn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    w(this, ct).push(t);
  }
};
Rn = new WeakMap(), Mr = new WeakMap(), rn = new WeakMap(), An = new WeakMap(), Cn = new WeakMap(), In = new WeakMap(), hr = new WeakMap(), Ln = new WeakMap(), ct = new WeakMap(), Ao = new WeakMap(), wr = new WeakMap(), Ot = new WeakMap(), Yt = new WeakMap(), Bn = new WeakMap(), nn = new WeakMap(), ne = new WeakSet(), ca = function() {
  if (this.is_fork) return !0;
  for (const n of w(this, hr).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (w(this, Yt).has(t)) {
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
ha = function() {
  var t = [];
  for (const i of w(this, ct))
    if (!((i.f & We) !== 0 || (i.f & (je | zt)) === 0)) {
      for (var r = i, n = !1; r.parent !== null; ) {
        r = r.parent;
        var o = r.f;
        if ((o & (gr | Ft)) !== 0) {
          if ((o & Ae) === 0) {
            n = !0;
            break;
          }
          r.f ^= Ae;
        }
      }
      n || t.push(r);
    }
  return A(this, ct, []), t;
}, po = function() {
  var l, d, c, f;
  A(this, Rn, !0);
  for (const u of w(this, wr))
    w(this, Ot).delete(u), ye(u, je), this.schedule(u);
  for (const u of w(this, Ot))
    ye(u, zt), this.schedule(u);
  this.apply();
  for (var t = _o = [], r = [], n = ai = []; w(this, ct).length > 0; ) {
    cs++ > 1e3 && (C(this, ne, mo).call(this), ic());
    for (const u of C(this, ne, ha).call(this))
      try {
        C(this, ne, wa).call(this, u, t, r);
      } catch (m) {
        throw nl(u), C(this, ne, ca).call(this) || this.discard(), m;
      }
  }
  if (P = null, n.length > 0) {
    var o = gi.ensure();
    for (const u of n)
      o.schedule(u);
  }
  if (_o = null, ai = null, C(this, ne, ca).call(this)) {
    C(this, ne, Sn).call(this, r), C(this, ne, Sn).call(this, t);
    for (const [u, m] of w(this, Yt))
      rl(u, m);
    n.length > 0 && /** @type {unknown} */
    C(l = P, ne, po).call(l);
    return;
  }
  const i = C(this, ne, Qs).call(this);
  if (i) {
    C(this, ne, Sn).call(this, r), C(this, ne, Sn).call(this, t), C(d = i, ne, el).call(d, this);
    return;
  }
  w(this, wr).clear(), w(this, Ot).clear();
  for (const u of w(this, An)) u(this);
  w(this, An).clear(), Er = this, hs(r), hs(t), Er = null, (c = w(this, Ln)) == null || c.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    P
  );
  if (w(this, In) === 0 && (w(this, ct).length === 0 || s !== null) && C(this, ne, mo).call(this), w(this, ct).length > 0)
    if (s !== null) {
      for (const u of w(this, ct))
        w(s, ct).push(u);
      A(this, ct, []);
    } else
      s = this;
  s !== null && (er.clear(), C(f = s, ne, po).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wa = function(t, r, n) {
  t.f ^= Ae;
  for (var o = t.first; o !== null; ) {
    var i = o.f, s = (i & (Ft | gr)) !== 0, l = s && (i & Ae) !== 0, d = l || (i & Je) !== 0 || w(this, Yt).has(o);
    if (!d && o.fn !== null) {
      s ? o.f ^= Ae : (i & Dn) !== 0 ? r.push(o) : Ho(o) && ((i & Dt) !== 0 && w(this, Ot).add(o), Fn(o));
      var c = o.first;
      if (c !== null) {
        o = c;
        continue;
      }
    }
    for (; o !== null; ) {
      var f = o.next;
      if (f !== null) {
        o = f;
        break;
      }
      o = o.parent;
    }
  }
}, Qs = function() {
  for (var t = w(this, Mr); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = w(t, Mr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
el = function(t) {
  var n;
  for (const [o, i] of t.current)
    !this.previous.has(o) && t.previous.has(o) && this.previous.set(o, t.previous.get(o)), this.current.set(o, i);
  for (const [o, i] of t.async_deriveds) {
    const s = this.async_deriveds.get(o);
    s && i.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(w(t, wr), w(t, Ot));
  const r = (o) => {
    var i = o.reactions;
    if (i !== null && !((o.f & Ve) !== 0 && (o.f & (je | zt)) === 0))
      for (const d of i) {
        var s = d.f;
        if ((s & Ve) !== 0)
          r(
            /** @type {Derived} */
            d
          );
        else {
          var l = (
            /** @type {Effect} */
            d
          );
          s & (En | Dt) && !this.async_deriveds.has(l) && (w(this, Ot).delete(l), ye(l, je), this.schedule(l));
        }
      }
  };
  for (const o of this.current.keys())
    r(o);
  this.oncommit(() => t.discard()), C(n = t, ne, mo).call(n), P = this, C(this, ne, po).call(this);
}, /**
 * @param {Effect[]} effects
 */
Sn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Us(t[r], w(this, wr), w(this, Ot));
}, oc = function() {
  var u, m;
  for (let p = Gi; p !== null; p = w(p, rn)) {
    var t = p.id < this.id, r = [];
    for (const [g, [x, b]] of this.current) {
      if (p.current.has(g)) {
        var n = (
          /** @type {[any, boolean]} */
          p.current.get(g)[0]
        );
        if (t && x !== n)
          p.current.set(g, [x, b]);
        else
          continue;
      }
      r.push(g);
    }
    if (t)
      for (const [g, x] of this.async_deriveds) {
        const b = p.async_deriveds.get(g);
        b && x.promise.then(b.resolve).catch(b.reject);
      }
    var o = [...p.current.keys()].filter(
      (g) => !/** @type {[any, boolean]} */
      p.current.get(g)[1]
    );
    if (!(!w(p, Rn) || o.length === 0)) {
      var i = o.filter((g) => !this.current.has(g));
      if (i.length === 0)
        t && p.discard();
      else if (r.length > 0) {
        if (t)
          for (const g of w(this, Bn))
            p.unskip_effect(g, (x) => {
              var b;
              (x.f & (Dt | En)) !== 0 ? p.schedule(x) : C(b = p, ne, Sn).call(b, [x]);
            });
        p.activate();
        var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var d of r)
          tl(d, i, s, l);
        l = /* @__PURE__ */ new Map();
        var c = [...p.current].filter(([g, x]) => {
          const b = this.current.get(g);
          return b ? b[0] !== x[0] || b[1] !== x[1] : !0;
        }).map(([g]) => g);
        if (c.length > 0)
          for (const g of w(this, Ao))
            (g.f & (We | Je | ci)) === 0 && Aa(g, c, l) && ((g.f & (En | Dt)) !== 0 ? (ye(g, je), p.schedule(g)) : w(p, wr).add(g));
        if (w(p, ct).length > 0 && !w(p, nn)) {
          p.apply();
          for (var f of C(u = p, ne, ha).call(u))
            C(m = p, ne, wa).call(m, f, [], []);
        }
        p.deactivate();
      }
    }
  }
}, mo = function() {
  if (this.linked) {
    var t = w(this, Mr), r = w(this, rn);
    t === null ? Gi = r : A(t, rn, r), r === null ? _n = t : A(r, Mr, t), this.linked = !1;
  }
};
let Rr = gi;
function D(e) {
  var t = qo, r = Er;
  Er = null, qo = !0;
  try {
    for (var n; ; ) {
      if (Zd(), P === null)
        return (
          /** @type {T} */
          n
        );
      P.flush();
    }
  } finally {
    qo = t, Er = r;
  }
}
function ic() {
  try {
    Dd();
  } catch (e) {
    Kt(e, da);
  }
}
let Bt = null;
function hs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (We | Je)) === 0 && Ho(n) && (Bt = /* @__PURE__ */ new Set(), Fn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && pl(n), (Bt == null ? void 0 : Bt.size) > 0)) {
        er.clear();
        for (const o of Bt) {
          if ((o.f & (We | Je)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Bt.has(s) && (Bt.delete(s), i.push(s)), s = s.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const d = i[l];
            (d.f & (We | Je)) === 0 && Fn(d);
          }
        }
        Bt.clear();
      }
    }
    Bt = null;
  }
}
function tl(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ve) !== 0 ? tl(
        /** @type {Derived} */
        o,
        t,
        r,
        n
      ) : (i & (En | Dt)) !== 0 && (i & je) === 0 && Aa(o, t, n) && (ye(o, je), Ca(
        /** @type {Effect} */
        o
      ));
    }
}
function Aa(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (zo.call(t, o))
        return !0;
      if ((o.f & Ve) !== 0 && Aa(
        /** @type {Derived} */
        o,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Ca(e) {
  P.schedule(e);
}
function rl(e, t) {
  if (!((e.f & Ft) !== 0 && (e.f & Ae) !== 0)) {
    (e.f & je) !== 0 ? t.d.push(e) : (e.f & zt) !== 0 && t.m.push(e), ye(e, Ae);
    for (var r = e.first; r !== null; )
      rl(r, t), r = r.next;
  }
}
function nl(e) {
  ye(e, Ae);
  for (var t = e.first; t !== null; )
    nl(t), t = t.next;
}
let ui = /* @__PURE__ */ new Set();
const er = /* @__PURE__ */ new Map();
let ol = !1;
function wn(e, t) {
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
function G(e, t) {
  const r = wn(e);
  return vl(r), r;
}
// @__NO_SIDE_EFFECTS__
function il(e, t = !1, r = !0) {
  const n = wn(e);
  return t || (n.equals = Fs), n;
}
function y(e, t, r = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nt || (Y.f & ci) !== 0) && Vs() && (Y.f & (Ve | Dt | En | ci)) !== 0 && (tr === null || !tr.has(e)) && Gd();
  let n = r ? Qr(t) : t;
  return Hn(e, n, ai);
}
var Kr = null, fa = 0;
function Hn(e, t, r = null) {
  if (!e.equals(t)) {
    vr ? er.set(e, t) : er.has(e) || er.set(e, e.v);
    var n = Rr.ensure();
    if (n.capture(e, t), (e.f & Ve) !== 0) {
      const o = (
        /** @type {Derived} */
        e
      );
      (e.f & je) !== 0 && Ra(o), Oe === null && Pa(o);
    }
    e.wv = yl(), Kr = null, fa = 0, al(e, je, r), Kr = null, U !== null && (U.f & Ae) !== 0 && (U.f & (Ft | gr)) === 0 && (_t === null ? pc([e]) : _t.push(e)), !n.is_fork && ui.size > 0 && !ol && ac();
  }
  return t;
}
function ac() {
  ol = !1;
  for (const e of ui) {
    (e.f & Ae) !== 0 && ye(e, zt);
    let t;
    try {
      t = Ho(e);
    } catch {
      t = !0;
    }
    t && Fn(e);
  }
  ui.clear();
}
function jo(e) {
  y(e, e.v + 1);
}
function al(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var o = n.length;
    if (fa += o, fa > 1e5 && Kr === null && (Kr = /* @__PURE__ */ new Set()), Kr !== null) {
      if (Kr.has(e)) return;
      Kr.add(e);
    }
    for (var i = 0; i < o; i++) {
      var s = n[i], l = s.f, d = (l & je) === 0;
      if (d && ye(s, t), (l & ci) !== 0)
        ui.add(
          /** @type {Effect} */
          s
        );
      else if ((l & Ve) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        Oe == null || Oe.delete(c), al(c, zt, r);
      } else if (d) {
        var f = (
          /** @type {Effect} */
          s
        );
        (l & Dt) !== 0 && Bt !== null && Bt.add(f), r !== null ? r.push(f) : Ca(f);
      }
    }
  }
}
function Qr(e) {
  if (typeof e != "object" || e === null || xo in e || Os in e)
    return e;
  const t = Is(e);
  if (t !== Md && t !== zd)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Cs(e), o = /* @__PURE__ */ G(0), i = cn, s = (l) => {
    if (cn === i)
      return l();
    var d = Y, c = cn;
    Tt(null), us(i);
    var f = l();
    return Tt(d), us(c), f;
  };
  return n && r.set("length", /* @__PURE__ */ G(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, d, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Fd();
        var f = r.get(d);
        return f === void 0 ? s(() => {
          var u = /* @__PURE__ */ G(c.value);
          return r.set(d, u), u;
        }) : y(f, c.value, !0), !0;
      },
      deleteProperty(l, d) {
        var c = r.get(d);
        if (c === void 0) {
          if (d in l) {
            const f = s(() => /* @__PURE__ */ G(Pe));
            r.set(d, f), jo(o);
          }
        } else
          y(c, Pe), jo(o);
        return !0;
      },
      get(l, d, c) {
        var p;
        if (d === xo)
          return e;
        var f = r.get(d), u = d in l;
        if (f === void 0 && (!u || (p = ln(l, d)) != null && p.writable) && (f = s(() => {
          var g = Qr(u ? l[d] : Pe), x = /* @__PURE__ */ G(g);
          return x;
        }), r.set(d, f)), f !== void 0) {
          var m = a(f);
          return m === Pe ? void 0 : m;
        }
        return Reflect.get(l, d, c);
      },
      getOwnPropertyDescriptor(l, d) {
        var m;
        (m = this.has) == null || m.call(this, l, d);
        var c = Reflect.getOwnPropertyDescriptor(l, d), f = r.get(d);
        if (f !== void 0) {
          var u = a(f);
          if (u === Pe)
            return;
          if (c && "value" in c)
            c.value = u;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return c;
      },
      has(l, d) {
        var m;
        if (d === xo)
          return !0;
        var c = r.get(d), f = c !== void 0 && c.v !== Pe || Reflect.has(l, d);
        if (c !== void 0 || U !== null && (!f || (m = ln(l, d)) != null && m.writable)) {
          c === void 0 && (c = s(() => {
            var p = f ? Qr(l[d]) : Pe, g = /* @__PURE__ */ G(p);
            return g;
          }), r.set(d, c));
          var u = a(c);
          if (u === Pe)
            return !1;
        }
        return f;
      },
      set(l, d, c, f) {
        var W;
        var u = r.get(d), m = d in l;
        if (n && d === "length")
          for (var p = c; p < /** @type {Source<number>} */
          u.v; p += 1) {
            var g = r.get(p + "");
            g !== void 0 ? y(g, Pe) : p in l && (g = s(() => /* @__PURE__ */ G(Pe)), r.set(p + "", g));
          }
        if (u === void 0)
          (!m || (W = ln(l, d)) != null && W.writable) && (u = s(() => /* @__PURE__ */ G(void 0)), y(u, Qr(c)), r.set(d, u));
        else {
          m = u.v !== Pe;
          var x = s(() => Qr(c));
          y(u, x);
        }
        var b = Reflect.getOwnPropertyDescriptor(l, d);
        if (b != null && b.set && b.set.call(f, c), !m) {
          if (n && typeof d == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), O = Number(d);
            Number.isInteger(O) && O >= q.v && y(q, O + 1);
          }
          jo(o);
        }
        return !0;
      },
      ownKeys(l) {
        a(o);
        var d = Reflect.ownKeys(l).filter((u) => {
          var m = r.get(u);
          return m === void 0 || m.v !== Pe;
        });
        for (var [c, f] of r)
          f.v !== Pe && !(c in l) && d.push(c);
        return d;
      },
      setPrototypeOf() {
        Vd();
      }
    }
  );
}
var ws, sl, ll, dl;
function ua() {
  if (ws === void 0) {
    ws = window, sl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ll = ln(t, "firstChild").get, dl = ln(t, "nextSibling").get, ls(e) && (e[sa] = void 0, e[ii] = null, e[la] = void 0, e.__e = void 0), ls(r) && (r[fo] = void 0);
  }
}
function $t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return (
    /** @type {TemplateNode | null} */
    ll.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return (
    /** @type {TemplateNode | null} */
    dl.call(e)
  );
}
function $(e, t) {
  if (!Q)
    return /* @__PURE__ */ Ar(e);
  var r = /* @__PURE__ */ Ar(K);
  if (r === null)
    r = K.appendChild($t());
  else if (t && r.nodeType !== _i) {
    var n = $t();
    return r == null || r.before(n), it(n), n;
  }
  return t && La(
    /** @type {Text} */
    r
  ), it(r), r;
}
function $n(e, t = !1) {
  if (!Q) {
    var r = /* @__PURE__ */ Ar(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ nr(r) : r;
  }
  if (t) {
    if ((K == null ? void 0 : K.nodeType) !== _i) {
      var n = $t();
      return K == null || K.before(n), it(n), n;
    }
    La(
      /** @type {Text} */
      K
    );
  }
  return K;
}
function Re(e, t = !1) {
  if (!Q)
    return /* @__PURE__ */ Ar(e);
  var r = $(e, t);
  return _(e), r;
}
function z(e, t = 1, r = !1) {
  let n = Q ? K : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ nr(n);
  if (!Q)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== _i) {
      var i = $t();
      return n === null ? o == null || o.after(i) : n.before(i), it(i), i;
    }
    La(
      /** @type {Text} */
      n
    );
  }
  return it(n), n;
}
function cl(e) {
  e.textContent = "";
}
function hl() {
  return !1;
}
function Ia(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function La(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === _i; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function sc(e) {
  var t = U;
  if (t === null)
    return Y.f |= Tr, e;
  if ((t.f & fn) === 0 && (t.f & Dn) === 0)
    throw e;
  Kt(e, t);
}
function Kt(e, t) {
  if (e === Pr)
    throw e;
  if (!(t !== null && (t.f & We) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & aa) !== 0 && (t.f & (We | To)) === 0) {
        if ((t.f & fn) === 0)
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
function lc(e) {
  U === null && (Y === null && Wd(), Od()), vr && Bd();
}
function dc(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function or(e, t) {
  var r = U;
  r !== null && (r.f & Je) !== 0 && (e |= Je);
  var n = {
    ctx: Fe,
    deps: null,
    nodes: null,
    f: e | je | Ht,
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
  var o = n;
  if ((e & Dn) !== 0)
    _o !== null ? _o.push(n) : Rr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Fn(n);
    } catch (s) {
      throw Qe(n), s;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & un) === 0 && (o = o.first, (e & Dt) !== 0 && (e & hn) !== 0 && o !== null && (o.f |= hn));
  }
  if (o !== null && (o.parent = r, r !== null && dc(o, r), Y !== null && (Y.f & Ve) !== 0 && (e & gr) === 0)) {
    var i = (
      /** @type {Derived} */
      Y
    );
    (i.effects ?? (i.effects = [])).push(o);
  }
  return n;
}
function Ba() {
  return Y !== null && !Nt;
}
function wl(e) {
  const t = or(qi, null);
  return ye(t, Ae), t.teardown = e, t;
}
function pa(e) {
  lc();
  var t = (
    /** @type {Effect} */
    U.f
  ), r = !Y && (t & Ft) !== 0 && Fe !== null && !Fe.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Fe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return fl(e);
}
function fl(e) {
  return or(Dn | Ed, e);
}
function cc(e) {
  Rr.ensure();
  const t = or(gr | un, e);
  return () => {
    Qe(t);
  };
}
function hc(e) {
  Rr.ensure();
  const t = or(gr | un, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dn(t, () => {
      Qe(t), n(void 0);
    }) : (Qe(t), n(void 0));
  });
}
function Oa(e) {
  return or(Dn, e);
}
function wc(e) {
  return or(En | un, e);
}
function $i(e, t = 0) {
  return or(qi | t, e);
}
function Ee(e, t = [], r = [], n = []) {
  Jd(n, t, r, (o) => {
    or(qi, () => {
      e(...o.map(a));
    });
  });
}
function Ti(e, t = 0) {
  var r = or(Dt | t, e);
  return r;
}
function Mt(e) {
  return or(Ft | un, e);
}
function ul(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = vr, n = Y;
    fs(!0), Tt(null);
    try {
      t.call(null);
    } catch (o) {
      Kt(o, e.parent);
    } finally {
      fs(r), Tt(n);
    }
  }
}
function Wa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const o = r.ac;
    o !== null && Vn(() => {
      o.abort(Do);
    });
    var n = r.next;
    (r.f & gr) !== 0 ? r.parent = null : Qe(r, t), r = n;
  }
}
function fc(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ft) === 0 && Qe(t), t = r;
  }
}
function Qe(e, t = !0) {
  var r = !1;
  (t || (e.f & Td) !== 0) && e.nodes !== null && e.nodes.end !== null && (uc(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= To, Wa(e, t && !r), Po(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ul(e), e.f ^= To, e.f |= We;
  var o = e.parent;
  o !== null && o.first !== null && pl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function uc(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ nr(e);
    e.remove(), e = r;
  }
}
function pl(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dn(e, t, r = !0) {
  var n = [];
  e.f |= $a, ml(e, n, !0);
  var o = () => {
    r && Qe(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var l of n)
      l.out(s);
  } else
    o();
}
function ml(e, t, r) {
  if ((e.f & Je) === 0) {
    e.f ^= Je;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var o = e.first; o !== null; ) {
      var i = o.next;
      if ((o.f & gr) === 0) {
        var s = (o.f & hn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (o.f & Ft) !== 0 && (e.f & Dt) !== 0;
        ml(o, t, s ? r : !1);
      }
      o = i;
    }
  }
}
function pi(e) {
  e.f &= ~$a, gl(e, !0);
}
function gl(e, t) {
  if ((e.f & $a) === 0 && (e.f & Je) !== 0) {
    e.f ^= Je, (e.f & Ae) === 0 && (ye(e, je), Rr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & hn) !== 0 || (r.f & Ft) !== 0;
      gl(r, o ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function Da(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var o = r === n ? null : /* @__PURE__ */ nr(r);
      t.append(r), r = o;
    }
}
let vr = !1;
function fs(e) {
  vr = e;
}
let Y = null, Nt = !1;
function Tt(e) {
  Y = e;
}
let U = null;
function rr(e) {
  U = e;
}
let tr = null;
function vl(e) {
  Y !== null && ((Y.f & hi) !== 0 || (Y.f & Ve) !== 0) && (tr ?? (tr = /* @__PURE__ */ new Set())).add(e);
}
let ot = null, mt = 0, _t = null;
function pc(e) {
  _t = e;
}
let bl = 1, en = 0, cn = en;
function us(e) {
  cn = e;
}
function yl() {
  return ++bl;
}
function Ho(e) {
  var t = e.f;
  if ((t & je) !== 0)
    return !0;
  if ((t & zt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, o = 0; o < n; o++) {
      var i = r[o];
      if (Ho(
        /** @type {Derived} */
        i
      ) && Ks(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ht) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Oe === null && ye(e, Ae);
  }
  return !1;
}
function xl(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(tr !== null && tr.has(e)))
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      (i.f & Ve) !== 0 ? xl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ye(i, je) : (i.f & Ae) !== 0 && ye(i, zt), Ca(
        /** @type {Effect} */
        i
      ));
    }
}
function kl(e) {
  var t = ot, r = mt, n = _t, o = Y, i = tr, s = Fe, l = Nt, d = cn, c = e.f;
  ot = /** @type {null | Value[]} */
  null, mt = 0, _t = null, Y = (c & (Ft | gr)) === 0 ? e : null, tr = null, Nn(e.ctx), Nt = !1, cn = ++en, e.ac !== null && (Vn(() => {
    e.ac.abort(Do);
  }), e.ac = null);
  try {
    e.f |= hi;
    var f = (
      /** @type {Function} */
      e.fn
    ), u = f();
    e.f |= fn;
    var m = ps(e);
    if (Vs() && _t !== null && !Nt && m !== null && (e.f & (Ve | zt | je)) === 0)
      for (var p = 0; p < /** @type {Source[]} */
      _t.length; p++)
        xl(
          _t[p],
          /** @type {Effect} */
          e
        );
    if (o !== null && o !== e) {
      if (en++, o.deps !== null)
        for (let g = 0; g < r; g += 1)
          o.deps[g].rv = en;
      if (t !== null)
        for (const g of t)
          g.rv = en;
      _t !== null && (n === null ? n = _t : n.push(.../** @type {Source[]} */
      _t));
    }
    return (e.f & Tr) !== 0 && (e.f ^= Tr), u;
  } catch (g) {
    return ps(e), sc(g);
  } finally {
    e.f ^= hi, ot = t, mt = r, _t = n, Y = o, tr = i, Nn(s), Nt = l, cn = d;
  }
}
function ps(e) {
  var o;
  var t = e.deps, r = P == null ? void 0 : P.is_fork;
  if (ot !== null) {
    var n;
    if (r || Po(e, mt), t !== null && mt > 0)
      for (t.length = mt + ot.length, n = 0; n < ot.length; n++)
        t[mt + n] = ot[n];
    else
      e.deps = t = ot;
    if (Ba() && (e.f & Ht) !== 0)
      for (n = mt; n < t.length; n++)
        ((o = t[n]).reactions ?? (o.reactions = [])).push(e);
  } else !r && t !== null && mt < t.length && (Po(e, mt), t.length = mt);
  return t;
}
function mc(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = jd.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  if (r === null && (t.f & Ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !zo.call(ot, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ht) !== 0 && (i.f ^= Ht), i.v !== Pe && Pa(i), i.ac !== null && Vn(() => {
      i.ac.abort(Do), i.ac = null, ye(i, je);
    }), rc(i), Po(i, 0);
  }
}
function Po(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      mc(e, r[n]);
}
function Fn(e) {
  var t = e.f;
  if ((t & We) === 0) {
    ye(e, Ae);
    var r = U;
    U = e;
    try {
      (t & (Dt | Bs)) !== 0 ? fc(e) : Wa(e), ul(e);
      var n = kl(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = bl;
      var o;
      As && Yd && (e.f & je) !== 0 && e.deps;
    } finally {
      U = r;
    }
  }
}
async function gc() {
  await Promise.resolve(), D();
}
function a(e) {
  var t = e.f, r = (t & Ve) !== 0;
  if (Y !== null && !Nt) {
    var n = U !== null && (U.f & We) !== 0;
    if (!n && (tr === null || !tr.has(e))) {
      var o = Y.deps;
      if ((Y.f & hi) !== 0)
        e.rv < en && (e.rv = en, ot === null && o !== null && o[mt] === e ? mt++ : ot === null ? ot = [e] : ot.push(e));
      else {
        Y.deps ?? (Y.deps = []), zo.call(Y.deps, e) || Y.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Y] : zo.call(i, Y) || i.push(Y);
      }
    }
  }
  if (vr && er.has(e))
    return er.get(e);
  if (r) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (vr) {
      var l = s.v;
      return ((s.f & Ae) === 0 && s.reactions !== null || _l(s)) && (l = Ra(s)), er.set(s, l), l;
    }
    var d = (s.f & Ht) === 0 && !Nt && Y !== null && (Y.f & Ht) !== 0, c = (s.f & fn) === 0;
    Ho(s) && (d && (s.f |= Ht), Ks(s)), d && !c && (Js(s), ql(s));
  }
  if (Oe != null && Oe.has(e))
    return Oe.get(e);
  if ((e.f & Tr) !== 0)
    throw e.v;
  return e.v;
}
function ql(e) {
  if (e.f |= Ht, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : zo.call(t, e) || t.push(e), (r.f & Ve) !== 0 && (r.f & Ht) === 0 && (Js(
        /** @type {Derived} */
        r
      ), ql(
        /** @type {Derived} */
        r
      ));
    }
}
function _l(e) {
  if (e.v === Pe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (er.has(t) || (t.f & Ve) !== 0 && _l(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pn(e) {
  var t = Nt;
  try {
    return Nt = !0, e();
  } finally {
    Nt = t;
  }
}
const tn = Symbol("events"), jl = /* @__PURE__ */ new Set(), ma = /* @__PURE__ */ new Set();
function vc(e, t, r, n = {}) {
  function o(i) {
    if (n.capture || ga.call(t, i), !i.cancelBubble)
      return Vn(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (o.__removed = !1, Qt(() => {
    o.__removed || t.addEventListener(e, o, n);
  })) : t.addEventListener(e, o, n), o;
}
function bc(e, t, r, n, o) {
  var i = { capture: n, passive: o }, s = vc(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && wl(() => {
    s.__removed = !0, t.removeEventListener(e, s, i);
  });
}
function be(e, t, r) {
  (t[tn] ?? (t[tn] = {}))[e] = r;
}
function Sl(e) {
  for (var t = 0; t < e.length; t++)
    jl.add(e[t]);
  for (var r of ma)
    r(e);
}
let Yi = null, Zi = !1;
function ga(e) {
  var x, b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((x = e.composedPath) == null ? void 0 : x.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Yi = e, Zi || (Zi = !0, setTimeout(() => {
    Zi = !1, Yi = null;
  }));
  var s = 0, l = Yi === e && e[tn];
  if (l) {
    var d = o.indexOf(l);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[tn] = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    d <= c && (s = d);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    $o(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var f = Y, u = U;
    Tt(null), rr(null);
    try {
      for (var m, p = []; i !== null && i !== t; ) {
        try {
          var g = (b = i[tn]) == null ? void 0 : b[n];
          g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && g.call(i, e);
        } catch (q) {
          m ? p.push(q) : m = q;
        }
        if (e.cancelBubble) break;
        s++, i = s < o.length ? (
          /** @type {Element} */
          o[s]
        ) : null;
      }
      if (m) {
        for (let q of p)
          queueMicrotask(() => {
            throw q;
          });
        throw m;
      }
    } finally {
      e[tn] = t, delete e.currentTarget, Tt(f), rr(u);
    }
  }
}
var Es;
const Xi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Es = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Es.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function yc(e) {
  return (
    /** @type {string} */
    (Xi == null ? void 0 : Xi.createHTML(e)) ?? e
  );
}
function xc(e) {
  var t = Ia("template");
  return t.innerHTML = yc(e.replaceAll("<!>", "<!---->")), t.content;
}
function Pn(e, t) {
  var r = (
    /** @type {Effect} */
    U
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  var r = (t & kd) !== 0, n = (t & qd) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Q)
      return Pn(K, null), K;
    o === void 0 && (o = xc(i ? e : "<!>" + e), r || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Ar(o)));
    var s = (
      /** @type {TemplateNode} */
      n || sl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ar(s)
      ), d = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Pn(l, d);
    } else
      Pn(s, s);
    return s;
  };
}
function Ml() {
  if (Q)
    return Pn(K, null), K;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = $t();
  return e.append(t, r), Pn(t, r), e;
}
function ce(e, t) {
  if (Q) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      U
    );
    ((r.f & fn) === 0 || r.nodes.end === null) && (r.nodes.end = K), Si();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const kc = ["touchstart", "touchmove"];
function qc(e) {
  return kc.includes(e);
}
function _c(e) {
  let t = 0, r = wn(0), n;
  return () => {
    Ba() && (a(r), $i(() => (t === 0 && (n = pn(() => e(() => jo(r)))), t += 1, () => {
      Qt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, jo(r));
      });
    })));
  };
}
var jc = hn | un;
function Sc(e, t, r, n) {
  new Mc(e, t, r, n);
}
var ht, Co, jt, on, He, wt, Ke, ft, Zt, an, zr, On, Io, Lo, fr, vi, Z, zl, $l, va, Sr, Tl, ba, go, si, ya, xa;
class Mc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, o) {
    L(this, Z);
    /** @type {Boundary | null} */
    we(this, "parent");
    we(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    we(this, "transform_error");
    /** @type {TemplateNode} */
    L(this, ht);
    /** @type {TemplateNode | null} */
    L(this, Co, Q ? K : null);
    /** @type {BoundaryProps} */
    L(this, jt);
    /** @type {((anchor: Node) => void)} */
    L(this, on);
    /** @type {Effect} */
    L(this, He);
    /** @type {Effect | null} */
    L(this, wt, null);
    /** @type {Effect | null} */
    L(this, Ke, null);
    /** @type {Effect | null} */
    L(this, ft, null);
    /** @type {DocumentFragment | null} */
    L(this, Zt, null);
    L(this, an, 0);
    L(this, zr, 0);
    L(this, On, !1);
    /** @type {Set<Effect>} */
    L(this, Io, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, Lo, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, fr, null);
    L(this, vi, _c(() => (A(this, fr, wn(w(this, an))), () => {
      A(this, fr, null);
    })));
    var i;
    A(this, ht, t), A(this, jt, r), A(this, on, (s) => {
      var l = (
        /** @type {Effect} */
        U
      );
      l.b = this, l.f |= aa, n(s);
    }), this.parent = /** @type {Effect} */
    U.b, this.transform_error = o ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((s) => s), A(this, He, Ti(() => {
      if (Q) {
        const s = Ta(
          /** @type {TemplateNode} */
          w(this, Co)
        );
        Si();
        const l = s === Ma;
        if (s.startsWith(ss)) {
          const c = JSON.parse(s.slice(ss.length));
          C(this, Z, $l).call(this, c);
        } else l ? C(this, Z, Tl).call(this) : C(this, Z, zl).call(this);
      } else
        C(this, Z, ba).call(this);
    }, jc)), Q && A(this, ht, K);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Us(t, w(this, Io), w(this, Lo));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!w(this, jt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    C(this, Z, ya).call(this, t, r), A(this, an, w(this, an) + t), !(!w(this, fr) || w(this, On)) && (A(this, On, !0), Qt(() => {
      A(this, On, !1), w(this, fr) && Hn(w(this, fr), w(this, an));
    }));
  }
  get_effect_pending() {
    return w(this, vi).call(this), a(
      /** @type {Source<number>} */
      w(this, fr)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === Pr || !w(this, jt).onerror && !w(this, jt).failed)
      throw t;
    P != null && P.is_fork ? (w(this, wt) && P.skip_effect(w(this, wt)), w(this, Ke) && P.skip_effect(w(this, Ke)), w(this, ft) && P.skip_effect(w(this, ft)), P.oncommit(() => {
      C(this, Z, Sr).call(this) || C(this, Z, xa).call(this, t);
    })) : C(this, Z, xa).call(this, t);
  }
}
ht = new WeakMap(), Co = new WeakMap(), jt = new WeakMap(), on = new WeakMap(), He = new WeakMap(), wt = new WeakMap(), Ke = new WeakMap(), ft = new WeakMap(), Zt = new WeakMap(), an = new WeakMap(), zr = new WeakMap(), On = new WeakMap(), Io = new WeakMap(), Lo = new WeakMap(), fr = new WeakMap(), vi = new WeakMap(), Z = new WeakSet(), zl = function() {
  try {
    A(this, wt, Mt(() => w(this, on).call(this, w(this, ht))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
$l = function(t) {
  const r = w(this, jt).failed, { reset: n, invoke_onerror: o } = C(this, Z, va).call(this, t);
  Qt(o), r && A(this, ft, Mt(() => {
    r(
      w(this, ht),
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
va = function(t) {
  var r = !1, n = !1;
  const o = () => {
    if (!C(this, Z, Sr).call(this)) {
      if (r) {
        Ad();
        return;
      }
      r = !0, n && Ud(), w(this, ft) !== null && dn(w(this, ft), () => {
        A(this, ft, null);
      }), C(this, Z, si).call(this, () => {
        C(this, Z, ba).call(this);
      });
    }
  };
  return { reset: o, invoke_onerror: () => {
    var s, l;
    if (!C(this, Z, Sr).call(this))
      try {
        n = !0, (l = (s = w(this, jt)).onerror) == null || l.call(s, t, o), n = !1;
      } catch (d) {
        Kt(d, w(this, He) && w(this, He).parent);
      }
  } };
}, Sr = function() {
  return (w(this, He).f & (We | To)) !== 0;
}, Tl = function() {
  const t = w(this, jt).pending;
  t && (this.is_pending = !0, A(this, Ke, Mt(() => t(w(this, ht)))), Qt(() => {
    if (!C(this, Z, Sr).call(this)) {
      var r = A(this, Zt, document.createDocumentFragment()), n = $t(), o = !1;
      if (r.append(n), A(this, wt, C(this, Z, si).call(this, () => {
        try {
          return Mt(() => w(this, on).call(this, n));
        } catch (i) {
          try {
            this.error(i), o = !0;
          } catch (s) {
            Kt(s, w(this, He).parent);
          }
          return null;
        }
      })), w(this, wt) === null) {
        A(this, Zt, null), o && C(this, Z, go).call(
          this,
          /** @type {Batch} */
          P
        );
        return;
      }
      w(this, zr) === 0 && (w(this, ht).before(r), A(this, Zt, null), dn(
        /** @type {Effect} */
        w(this, Ke),
        () => {
          A(this, Ke, null);
        }
      ), C(this, Z, go).call(
        this,
        /** @type {Batch} */
        P
      ));
    }
  }));
}, ba = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, zr, 0), A(this, an, 0), A(this, wt, Mt(() => {
      w(this, on).call(this, w(this, ht));
    })), w(this, zr) > 0) {
      var t = A(this, Zt, document.createDocumentFragment());
      Da(w(this, wt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        w(this, jt).pending
      );
      A(this, Ke, Mt(() => r(w(this, ht))));
    } else
      C(this, Z, go).call(
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
go = function(t) {
  this.is_pending = !1, t.transfer_effects(w(this, Io), w(this, Lo));
}, /**
 * @template T
 * @param {() => T} fn
 */
si = function(t) {
  var r = U, n = Y, o = Fe;
  rr(w(this, He)), Tt(w(this, He)), Nn(w(this, He).ctx);
  try {
    return Rr.ensure(), t();
  } finally {
    rr(r), Tt(n), Nn(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ya = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, Z, ya).call(n, t, r);
    return;
  }
  A(this, zr, w(this, zr) + t), w(this, zr) === 0 && (C(this, Z, go).call(this, r), w(this, Ke) && dn(w(this, Ke), () => {
    A(this, Ke, null);
  }), w(this, Zt) && (w(this, ht).before(w(this, Zt)), A(this, Zt, null)));
}, /**
 * @param {unknown} error
 */
xa = function(t) {
  w(this, wt) && (Qe(w(this, wt)), A(this, wt, null)), w(this, Ke) && (Qe(w(this, Ke)), A(this, Ke, null)), w(this, ft) && (Qe(w(this, ft)), A(this, ft, null)), Q && (it(
    /** @type {TemplateNode} */
    w(this, Co)
  ), Xr(), it(wi()));
  let r = w(this, jt).failed;
  const n = (o) => {
    if (C(this, Z, Sr).call(this)) return;
    const { reset: i, invoke_onerror: s } = C(this, Z, va).call(this, o);
    s(), r && !C(this, Z, Sr).call(this) && A(this, ft, C(this, Z, si).call(this, () => {
      try {
        return Mt(() => {
          var l = (
            /** @type {Effect} */
            U
          );
          l.b = this, l.f |= aa, r(
            w(this, ht),
            () => o,
            () => i
          );
        });
      } catch (l) {
        return Kt(
          l,
          /** @type {Effect} */
          w(this, He).parent
        ), null;
      }
    }));
  };
  Qt(() => {
    if (!C(this, Z, Sr).call(this)) {
      var o;
      try {
        o = this.transform_error(t);
      } catch (i) {
        Kt(i, w(this, He) && w(this, He).parent);
        return;
      }
      o !== null && typeof o == "object" && typeof /** @type {any} */
      o.then == "function" ? o.then(
        n,
        /** @param {unknown} e */
        (i) => Kt(i, w(this, He) && w(this, He).parent)
      ) : n(o);
    }
  });
};
function Le(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[fo] ?? (e[fo] = e.nodeValue)) && (e[fo] = r, e.nodeValue = `${r}`);
}
function El(e, t) {
  return Pl(e, t);
}
function zc(e, t) {
  ua(), t.intro = t.intro ?? !1;
  const r = t.target, n = Q, o = K;
  try {
    for (var i = /* @__PURE__ */ Ar(r); i && (i.nodeType !== No || /** @type {Comment} */
    i.data !== Rs); )
      i = /* @__PURE__ */ nr(i);
    if (!i)
      throw Pr;
    mr(!0), it(
      /** @type {Comment} */
      i
    );
    const s = Pl(e, { ...t, anchor: i });
    return mr(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Pr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Nd(), ua(), cl(r), mr(!1), El(e, t);
  } finally {
    mr(n), it(o);
  }
}
const ri = /* @__PURE__ */ new Map();
function Pl(e, { target: t, anchor: r, props: n = {}, events: o, context: i, intro: s = !0, transformError: l }) {
  ua();
  var d = void 0, c = hc(() => {
    var f = r ?? t.appendChild($t());
    Sc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        Mi({});
        var g = (
          /** @type {ComponentContext} */
          Fe
        );
        if (i && (g.c = i), o && (n.$$events = o), Q && Pn(
          /** @type {TemplateNode} */
          p,
          null
        ), d = e(p, n) || Ea(), Q && (U.nodes.end = K, K === null || K.nodeType !== No || /** @type {Comment} */
        K.data !== za))
          throw ji(), Pr;
        zi();
      },
      l
    );
    var u = /* @__PURE__ */ new Set(), m = (p) => {
      for (var g = 0; g < p.length; g++) {
        var x = p[g];
        if (!u.has(x)) {
          u.add(x);
          var b = qc(x);
          for (const W of [t, document]) {
            var q = ri.get(W);
            q === void 0 && (q = /* @__PURE__ */ new Map(), ri.set(W, q));
            var O = q.get(x);
            O === void 0 ? (W.addEventListener(x, ga, { passive: b }), q.set(x, 1)) : q.set(x, O + 1);
          }
        }
      }
    };
    return m(ki(jl)), ma.add(m), () => {
      var b;
      for (var p of u)
        for (const q of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            ri.get(q)
          ), x = (
            /** @type {number} */
            g.get(p)
          );
          --x == 0 ? (q.removeEventListener(p, ga), g.delete(p), g.size === 0 && ri.delete(q)) : g.set(p, x);
        }
      ma.delete(m), f !== r && ((b = f.parentNode) == null || b.removeChild(f));
    };
  });
  return ka.set(d, c), d;
}
let ka = /* @__PURE__ */ new WeakMap();
function $c(e, t) {
  const r = ka.get(e);
  return r ? (ka.delete(e), r(t)) : Promise.resolve();
}
var Wt, Xt, ut, sn, Bo, Oo, bi;
class Rl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    we(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, Wt, /* @__PURE__ */ new Map());
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
    L(this, Xt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, ut, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, sn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Bo, !0);
    /**
     * @param {Batch} batch
     */
    L(this, Oo, (t) => {
      if (w(this, Wt).has(t)) {
        var r = (
          /** @type {Key} */
          w(this, Wt).get(t)
        ), n = w(this, Xt).get(r);
        if (n)
          pi(n), w(this, sn).delete(r);
        else {
          var o = w(this, ut).get(r);
          o && (pi(o.effect), w(this, Xt).set(r, o.effect), w(this, ut).delete(r), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), n = o.effect);
        }
        for (const [i, s] of w(this, Wt)) {
          if (w(this, Wt).delete(i), i === t)
            break;
          const l = w(this, ut).get(s);
          l && (Qe(l.effect), w(this, ut).delete(s));
        }
        for (const [i, s] of w(this, Xt)) {
          if (i === r || w(this, sn).has(i)) continue;
          const l = () => {
            if (Array.from(w(this, Wt).values()).includes(i)) {
              var c = document.createDocumentFragment();
              Da(s, c), c.append($t()), w(this, ut).set(i, { effect: s, fragment: c });
            } else
              Qe(s);
            w(this, sn).delete(i), w(this, Xt).delete(i);
          };
          w(this, Bo) || !n ? (w(this, sn).add(i), dn(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, bi, (t) => {
      w(this, Wt).delete(t);
      const r = Array.from(w(this, Wt).values());
      for (const [n, o] of w(this, ut))
        r.includes(n) || (Qe(o.effect), w(this, ut).delete(n));
    });
    this.anchor = t, A(this, Bo, r);
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
    ), o = hl();
    if (r && !w(this, Xt).has(t) && !w(this, ut).has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = $t();
        i.append(s), w(this, ut).set(t, {
          effect: Mt(() => r(s)),
          fragment: i
        });
      } else
        w(this, Xt).set(
          t,
          Mt(() => r(this.anchor))
        );
    if (w(this, Wt).set(n, t), o) {
      for (const [l, d] of w(this, Xt))
        l === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [l, d] of w(this, ut))
        l === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(w(this, Oo)), n.ondiscard(w(this, bi));
    } else
      Q && (this.anchor = K), w(this, Oo).call(this, n);
  }
}
Wt = new WeakMap(), Xt = new WeakMap(), ut = new WeakMap(), sn = new WeakMap(), Bo = new WeakMap(), Oo = new WeakMap(), bi = new WeakMap();
function Tc(e, t, ...r) {
  var n = new Rl(e);
  Ti(() => {
    const o = t() ?? null;
    n.ensure(o, o && ((i) => o(i, ...r)));
  }, hn);
}
function Al(e) {
  Fe === null && Cd(), pa(() => {
    const t = pn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function _e(e, t, r = !1) {
  var n;
  Q && (n = K, Si());
  var o = new Rl(e), i = r ? hn : 0;
  function s(l, d) {
    if (Q) {
      var c = Ta(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(c.substring(1))) {
        var f = wi();
        it(f), o.anchor = f, mr(!1), o.ensure(l, d), mr(!0);
        return;
      }
    }
    o.ensure(l, d);
  }
  Ti(() => {
    var l = !1;
    t((d, c = 0) => {
      l = !0, s(c, d);
    }), l || s(-1, null);
  }, i);
}
function Ec(e, t, r) {
  for (var n = [], o = t.length, i, s = t.length, l = 0; l < o; l++) {
    let u = t[l];
    dn(
      u,
      () => {
        if (i) {
          if (i.pending.delete(u), i.done.add(u), i.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            qa(e, ki(i.done)), m.delete(i), m.size === 0 && (e.outrogroups = null);
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
      var c = (
        /** @type {Element} */
        r
      ), f = (
        /** @type {Element} */
        c.parentNode
      );
      cl(f), f.append(c), e.items.clear();
    }
    qa(e, t, !d);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function qa(e, t, r = !0) {
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
  for (var o = 0; o < t.length; o++) {
    var i = t[o];
    if (n != null && n.has(i)) {
      i.f |= Jt;
      const s = document.createDocumentFragment();
      Da(i, s);
    } else
      Qe(t[o], r);
  }
}
var ms;
function So(e, t, r, n, o, i = null) {
  var s = e, l = /* @__PURE__ */ new Map(), d = (t & Ps) !== 0;
  if (d) {
    var c = (
      /** @type {Element} */
      e
    );
    s = Q ? it(/* @__PURE__ */ Ar(c)) : c.appendChild($t());
  }
  Q && Si();
  var f = null, u = /* @__PURE__ */ Xs(() => {
    var O = r();
    return (
      /** @type {V[]} */
      Cs(O) ? O : O == null ? [] : ki(O)
    );
  }), m = /* @__PURE__ */ new Map(), p = !0;
  function g(O) {
    if ((q.effect.f & We) === 0) {
      q.pending.delete(O);
      var W = a(u);
      q.fallback = f, Pc(q, W, s, t, n), f !== null && (W.length === 0 ? (f.f & Jt) === 0 ? pi(f) : (f.f ^= Jt, vo(f, null, s)) : dn(f, () => {
        f = null;
      }));
    }
  }
  function x(O) {
    q.pending.delete(O);
  }
  var b = Ti(() => {
    var O = (
      /** @type {V[]} */
      a(u)
    ), W = O.length;
    let V = !1;
    if (Q) {
      var J = Ta(s) === Ma;
      J !== (W === 0) && (s = wi(), it(s), mr(!1), V = !0);
    }
    for (var te = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      P
    ), Me = hl(), ze = 0; ze < W; ze += 1) {
      Q && K.nodeType === No && /** @type {Comment} */
      K.data === za && (s = /** @type {Comment} */
      K, V = !0, mr(!1));
      var E = O[ze], $e = n(E, ze), ee = p ? null : l.get($e);
      ee ? (ee.v && Hn(ee.v, E), ee.i && Hn(ee.i, ze), Me && ie.unskip_effect(ee.e)) : (ee = Rc(
        l,
        p ? s : ms ?? (ms = $t()),
        E,
        $e,
        ze,
        o,
        t,
        r
      ), p || (ee.e.f |= Jt), l.set($e, ee)), te.add($e);
    }
    if (W === 0 && i && !f && (p ? f = Mt(() => i(s)) : (f = Mt(() => i(ms ?? (ms = $t()))), f.f |= Jt)), W > te.size && Ld(), Q && W > 0 && it(wi()), !p)
      if (m.set(ie, te), Me) {
        for (const [Ge, De] of l)
          te.has(Ge) || ie.skip_effect(De.e);
        ie.oncommit(g), ie.ondiscard(x);
      } else
        g(ie);
    V && mr(!0), a(u);
  }), q = { effect: b, items: l, pending: m, outrogroups: null, fallback: f };
  p = !1, Q && (s = K);
}
function co(e) {
  for (; e !== null && (e.f & Ft) === 0; )
    e = e.next;
  return e;
}
function Pc(e, t, r, n, o) {
  var E, $e, ee, Ge, De, ir, Et, br, mn;
  var i = (n & md) !== 0, s = t.length, l = e.items, d = co(e.effect.first), c, f = null, u, m = [], p = [], g, x, b, q;
  if (i)
    for (q = 0; q < s; q += 1)
      g = t[q], x = o(g, q), b = /** @type {EachItem} */
      l.get(x).e, (b.f & Jt) === 0 && (($e = (E = b.nodes) == null ? void 0 : E.a) == null || $e.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(b));
  for (q = 0; q < s; q += 1) {
    if (g = t[q], x = o(g, q), b = /** @type {EachItem} */
    l.get(x).e, e.outrogroups !== null)
      for (const et of e.outrogroups)
        et.pending.delete(b), et.done.delete(b);
    if ((b.f & Je) !== 0 && (pi(b), i && ((Ge = (ee = b.nodes) == null ? void 0 : ee.a) == null || Ge.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(b))), (b.f & Jt) !== 0)
      if (b.f ^= Jt, b === d)
        vo(b, null, r);
      else {
        var O = f ? f.next : d;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), _r(e, f, b), _r(e, b, O), vo(b, O, r), f = b, m = [], p = [], d = co(f.next);
        continue;
      }
    if (b !== d) {
      if (c !== void 0 && c.has(b)) {
        if (m.length < p.length) {
          var W = p[0], V;
          f = W.prev;
          var J = m[0], te = m[m.length - 1];
          for (V = 0; V < m.length; V += 1)
            vo(m[V], W, r);
          for (V = 0; V < p.length; V += 1)
            c.delete(p[V]);
          _r(e, J.prev, te.next), _r(e, f, J), _r(e, te, W), d = W, f = te, q -= 1, m = [], p = [];
        } else
          c.delete(b), vo(b, d, r), _r(e, b.prev, b.next), _r(e, b, f === null ? e.effect.first : f.next), _r(e, f, b), f = b;
        continue;
      }
      for (m = [], p = []; d !== null && d !== b; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(d), p.push(d), d = co(d.next);
      if (d === null)
        continue;
    }
    (b.f & Jt) === 0 && m.push(b), f = b, d = co(b.next);
  }
  if (e.outrogroups !== null) {
    for (const et of e.outrogroups)
      et.pending.size === 0 && (qa(e, ki(et.done)), (De = e.outrogroups) == null || De.delete(et));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || c !== void 0) {
    var ie = [];
    if (c !== void 0)
      for (b of c)
        (b.f & Je) === 0 && ie.push(b);
    for (; d !== null; )
      (d.f & Je) === 0 && d !== e.fallback && ie.push(d), d = co(d.next);
    var Me = ie.length;
    if (Me > 0) {
      var ze = (n & Ps) !== 0 && s === 0 ? r : null;
      if (i) {
        for (q = 0; q < Me; q += 1)
          (Et = (ir = ie[q].nodes) == null ? void 0 : ir.a) == null || Et.measure();
        for (q = 0; q < Me; q += 1)
          (mn = (br = ie[q].nodes) == null ? void 0 : br.a) == null || mn.fix();
      }
      Ec(e, ie, ze);
    }
  }
  i && Qt(() => {
    var et, ar;
    if (u !== void 0)
      for (b of u)
        (ar = (et = b.nodes) == null ? void 0 : et.a) == null || ar.apply();
  });
}
function Rc(e, t, r, n, o, i, s, l) {
  var d = (s & ud) !== 0 ? (s & gd) === 0 ? /* @__PURE__ */ il(r, !1, !1) : wn(r) : null, c = (s & pd) !== 0 ? wn(o) : null;
  return {
    v: d,
    i: c,
    e: Mt(() => (i(t, d ?? r, c ?? o, l), () => {
      e.delete(n);
    }))
  };
}
function vo(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, o = e.nodes.end, i = t && (t.f & Jt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nr(n)
      );
      if (i.before(n), n === o)
        return;
      n = s;
    }
}
function _r(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Na(e, t) {
  Oa(() => {
    var o, i;
    e = ((i = (o = U == null ? void 0 : U.parent) == null ? void 0 : o.nodes) == null ? void 0 : i.start) ?? e;
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
      const s = Ia("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function Cl(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Cl(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ac() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Cl(e)) && (n && (n += " "), n += t);
  return n;
}
function Ze(e) {
  return typeof e == "object" ? Ac(e) : e ?? "";
}
const gs = [...` 	
\r\f \v\uFEFF`];
function Cc(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var o of Object.keys(r))
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var l = s + i;
          (s === 0 || gs.includes(n[s - 1])) && (l === n.length || gs.includes(n[l])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1) : s = l;
        }
  }
  return n === "" ? null : n;
}
function vs(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var o of Object.keys(e)) {
    var i = e[o];
    i != null && i !== "" && (n += " " + o + ": " + i + r);
  }
  return n;
}
function Ki(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ic(e, t) {
  if (t) {
    var r = "", n, o;
    if (Array.isArray(t) ? (n = t[0], o = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
      var i = !1, s = 0, l = !1, d = [];
      n && d.push(...Object.keys(n).map(Ki)), o && d.push(...Object.keys(o).map(Ki));
      var c = 0, f = -1;
      const x = e.length;
      for (var u = 0; u < x; u++) {
        var m = e[u];
        if (l ? m === "/" && e[u - 1] === "*" && (l = !1) : i ? i === m && (i = !1) : m === "/" && e[u + 1] === "*" ? l = !0 : m === '"' || m === "'" ? i = m : m === "(" ? s++ : m === ")" && s--, !l && i === !1 && s === 0) {
          if (m === ":" && f === -1)
            f = u;
          else if (m === ";" || u === x - 1) {
            if (f !== -1) {
              var p = Ki(e.substring(c, f).trim());
              if (!d.includes(p)) {
                m !== ";" && u++;
                var g = e.substring(c, u).trim();
                r += " " + g + ";";
              }
            }
            c = u + 1, f = -1;
          }
        }
      }
    }
    return n && (r += vs(n)), o && (r += vs(o, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function me(e, t, r, n, o, i) {
  var s = (
    /** @type {any} */
    e[sa]
  );
  if (Q || s !== r || s === void 0) {
    var l = Cc(r, n, i);
    (!Q || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e[sa] = r;
  } else if (i && o !== i)
    for (var d in i) {
      var c = !!i[d];
      (o == null || c !== !!o[d]) && e.classList.toggle(d, c);
    }
  return i;
}
function Ji(e, t = {}, r, n) {
  for (var o in r) {
    var i = r[o];
    t[o] !== i && (r[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, n));
  }
}
function pt(e, t, r, n) {
  var o = (
    /** @type {any} */
    e[la]
  );
  if (Q || o !== t) {
    var i = Ic(t, n);
    (!Q || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e[la] = t;
  } else n && (Array.isArray(n) ? (Ji(e, r == null ? void 0 : r[0], n[0]), Ji(e, r == null ? void 0 : r[1], n[1], "important")) : Ji(e, r, n));
  return n;
}
const Lc = Symbol("is custom element"), Bc = Symbol("is html"), Oc = Ds ? "link" : "LINK", Wc = Ds ? "progress" : "PROGRESS";
function ni(e) {
  if (Q) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          re(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          re(e, "checked", null), e.checked = o;
        }
      }
    };
    e[ko] = r, Qt(r), Ys();
  }
}
function Dc(e, t) {
  var r = Il(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Wc) || (e.value = t ?? "");
}
function re(e, t, r, n) {
  var o = Il(e);
  Q && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Oc) || o[t] !== (o[t] = r) && (t === "loading" && (e[Pd] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Nc(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Il(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[ii] ?? (e[ii] = {
      [Lc]: e.nodeName.includes("-"),
      [Bc]: e.namespaceURI === _d
    })
  );
}
var bs = /* @__PURE__ */ new Map();
function Nc(e) {
  var t = e.getAttribute("is") || e.nodeName, r = bs.get(t);
  if (r) return r;
  bs.set(t, r = /* @__PURE__ */ new Set());
  for (var n, o = e, i = Element.prototype; i !== o; ) {
    n = Sd(o);
    for (var s in n)
      n[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && r.add(s);
    o = Is(o);
  }
  return r;
}
function Qi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Kd(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = ea(e) ? ta(i) : i, r(i), P !== null && n.add(P), await gc(), i !== (i = t())) {
      var s = e.selectionStart, l = e.selectionEnd, d = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var c = e.value.length;
        s === l && l === d && c > d ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = s, e.selectionEnd = Math.min(l, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Q && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  pn(t) == null && e.value) && (r(ea(e) ? ta(e.value) : e.value), P !== null && n.add(P)), $i(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        P
      );
      if (n.has(i))
        return;
    }
    ea(e) && o === ta(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function ea(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ta(e) {
  return e === "" ? null : +e;
}
var $r, Wn, Wo, yi, Ll;
const xi = class xi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    L(this, yi);
    /** */
    L(this, $r, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    L(this, Wn);
    /** @type {ResizeObserverOptions} */
    L(this, Wo);
    A(this, Wo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = w(this, $r).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), w(this, $r).set(t, n), C(this, yi, Ll).call(this).observe(t, w(this, Wo)), () => {
      var o = w(this, $r).get(t);
      o.delete(r), o.size === 0 && (w(this, $r).delete(t), w(this, Wn).unobserve(t));
    };
  }
};
$r = new WeakMap(), Wn = new WeakMap(), Wo = new WeakMap(), yi = new WeakSet(), Ll = function() {
  return w(this, Wn) ?? A(this, Wn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        xi.entries.set(r.target, r);
        for (var n of w(this, $r).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
we(xi, "entries", /* @__PURE__ */ new WeakMap());
let _a = xi;
var Hc = /* @__PURE__ */ new _a({
  box: "border-box"
});
function ys(e, t, r) {
  var n = Hc.observe(e, () => r(e[t]));
  Oa(() => (pn(() => r(e[t])), n));
}
function ra(e, t) {
  return e === t || (e == null ? void 0 : e[xo]) === t;
}
function ja(e = Ea(), t, r, n) {
  var o = (
    /** @type {ComponentContext} */
    Fe.r
  ), i = (
    /** @type {Effect} */
    U
  );
  return Oa(() => {
    var s, l;
    return $i(() => {
      s = l, l = [], pn(() => {
        ra(r(...l), e) || (t(e, ...l), s && ra(r(...s), e) && t(null, ...s));
      });
    }), () => {
      let d = i;
      for (; d !== o && d.parent !== null && d.parent.f & To; )
        d = d.parent;
      const c = () => {
        l && ra(r(...l), e) && t(null, ...l);
      }, f = d.teardown;
      d.teardown = () => {
        c(), f == null || f();
      };
    };
  }), e;
}
function Fc(e, t, r) {
  if (e == null)
    return t(void 0), Tn;
  const n = pn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const jn = [];
function Vc(e, t = Tn) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function o(l) {
    if (Hs(e, l) && (e = l, r)) {
      const d = !jn.length;
      for (const c of n)
        c[1](), jn.push(c, e);
      if (d) {
        for (let c = 0; c < jn.length; c += 2)
          jn[c][0](jn[c + 1]);
        jn.length = 0;
      }
    }
  }
  function i(l) {
    o(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, d = Tn) {
    const c = [l, d];
    return n.add(c), n.size === 1 && (r = t(o, i) || Tn), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Gc(e) {
  let t;
  return Fc(e, (r) => t = r)(), t;
}
let oi = !1;
function Uc(e) {
  var t = oi;
  try {
    return oi = !1, [e(), oi];
  } finally {
    oi = t;
  }
}
function F(e, t, r, n) {
  var V;
  var o = !0, i = (r & yd) !== 0, s = (r & xd) !== 0, l = (
    /** @type {V} */
    n
  ), d = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), f = () => s && o ? (c ?? (c = /* @__PURE__ */ Eo(
    /** @type {() => V} */
    n
  )), a(c)) : (d && (d = !1, l = s ? pn(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let u;
  if (i) {
    var m = xo in e || Ws in e;
    u = ((V = ln(e, t)) == null ? void 0 : V.set) ?? (m && t in e ? (J) => e[t] = J : void 0);
  }
  var p, g = !1;
  i ? [p, g] = Uc(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = f(), u && (Hd(), u(p)));
  var x;
  if (x = () => {
    var J = (
      /** @type {V} */
      e[t]
    );
    return J === void 0 ? f() : (d = !0, J);
  }, (r & bd) === 0)
    return x;
  if (u) {
    var b = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(J, te) {
        return arguments.length > 0 ? ((!te || b || g) && u(te ? x() : J), J) : x();
      })
    );
  }
  var q = !1, O = ((r & vd) !== 0 ? Eo : Xs)(() => (q = !1, x()));
  i && a(O);
  var W = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(J, te) {
      if (arguments.length > 0) {
        const ie = te ? a(O) : i ? Qr(J) : J;
        return y(O, ie), q = !0, l !== void 0 && (l = ie), J;
      }
      return vr && q || (W.f & We) !== 0 ? O.v : a(O);
    })
  );
}
function Yc(e) {
  return new Zc(e);
}
var ur, St;
class Zc {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    L(this, ur);
    /** @type {Record<string, any>} */
    L(this, St);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (s, l) => {
      var d = /* @__PURE__ */ il(l, !1, !1);
      return r.set(s, d), d;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return a(r.get(l) ?? n(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Ws ? !0 : (a(r.get(l) ?? n(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, d) {
          return y(r.get(l) ?? n(l, d), d), Reflect.set(s, l, d);
        }
      }
    );
    A(this, St, (t.hydrate ? zc : El)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && D(), A(this, ur, o.$$events);
    for (const s of Object.keys(w(this, St)))
      s === "$set" || s === "$destroy" || s === "$on" || $o(this, s, {
        get() {
          return w(this, St)[s];
        },
        /** @param {any} value */
        set(l) {
          w(this, St)[s] = l;
        },
        enumerable: !0
      });
    w(this, St).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, w(this, St).$destroy = () => {
      $c(w(this, St));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    w(this, St).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    w(this, ur)[t] = w(this, ur)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return w(this, ur)[t].push(n), () => {
      w(this, ur)[t] = w(this, ur)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    w(this, St).$destroy();
  }
}
ur = new WeakMap(), St = new WeakMap();
let Bl;
typeof HTMLElement == "function" && (Bl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    we(this, "$$ctor");
    /** Slots */
    we(this, "$$s");
    /** @type {any} The Svelte component instance */
    we(this, "$$c");
    /** Whether or not the custom element is connected */
    we(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    we(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    we(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    we(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    we(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    we(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    we(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    we(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = r, n && (this.$$shadowRoot = this.attachShadow(n));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
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
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const s = Ia("slot");
          o !== "default" && (s.name = o), ce(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Xc(this);
      for (const o of this.$$s)
        o in n && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = li(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Yc({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = cc(() => {
        $i(() => {
          var o;
          this.$$r = !0;
          for (const i of di(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = li(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const s = this.$$c.$on(o, i);
          this.$$l_u.set(i, s);
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
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = li(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return di(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function li(e, t, r, n) {
  var i;
  const o = (i = r[e]) == null ? void 0 : i.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Xc(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ha(e, t, r, n, o, i) {
  let s = class extends Bl {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return di(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return di(t).forEach((l) => {
    $o(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(d) {
        var u;
        d = li(l, d, t), this.$$d[l] = d;
        var c = this.$$c;
        if (c) {
          var f = (u = ln(c, l)) == null ? void 0 : u.get;
          f ? c[l] = d : c.$set({ [l]: d });
        }
      }
    });
  }), n.forEach((l) => {
    $o(s.prototype, l, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[l];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const j = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, S = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, xs = (e) => `<g fill="#000">${e}</g>`, Kc = {
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
          S(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: j(
          S(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: j(
          `${xs('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: j(
          S(
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
          `${S('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${xs(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: j(
          S(
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
          S(
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
          S('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
          S(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: j(S('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
          S(
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
          S(
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
          S(
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
          S('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: j(S('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
          S(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: j(S('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
          S(
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
          S(
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
          S(
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
          S(
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
          S(
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
          S('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
          S('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: j(
          S('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: j(S('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: j(S('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: j(S('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: j(S('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: j(S('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: j(S('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: j(S('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: j(
          S('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
          S('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: j(
          S('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: j(S('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: j(S('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Jc(e, t) {
  const r = Kc[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const ks = /* @__PURE__ */ new Map();
function Qc(e, t) {
  const r = `${e}:${t ?? "default"}`, n = ks.get(r);
  if (n)
    return n;
  const o = Jc(e, t), i = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return ks.set(r, i), i;
}
var eh = /* @__PURE__ */ Se("<span></span>");
const th = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function qt(e, t) {
  Mi(t, !0), Na(e, th);
  let r = F(t, "name", 7), n = F(t, "variant", 7), o = F(t, "decorative", 7, !0), i = F(t, "label", 7), s = F(t, "title", 7), l = F(t, "size", 7, "1rem"), d = F(t, "className", 7, ""), c = /* @__PURE__ */ B(() => Qc(r(), n())), f = /* @__PURE__ */ B(() => i() ?? s() ?? r());
  var u = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), D();
    },
    get variant() {
      return n();
    },
    set variant(g) {
      n(g), D();
    },
    get decorative() {
      return o();
    },
    set decorative(g = !0) {
      o(g), D();
    },
    get label() {
      return i();
    },
    set label(g) {
      i(g), D();
    },
    get title() {
      return s();
    },
    set title(g) {
      s(g), D();
    },
    get size() {
      return l();
    },
    set size(g = "1rem") {
      l(g), D();
    },
    get className() {
      return d();
    },
    set className(g = "") {
      d(g), D();
    }
  }, m = eh();
  let p;
  return Ee(
    (g) => {
      me(m, 1, g, "svelte-1a09gvd"), re(m, "aria-hidden", o()), re(m, "aria-label", o() ? void 0 : a(f)), re(m, "role", o() ? void 0 : "img"), re(m, "title", s()), p = pt(m, "", p, { "--icon-mask": a(c), width: l(), height: l() });
    },
    [() => Ze(`app-icon ${d()}`.trim())]
  ), ce(e, m), zi(u);
}
Ha(
  qt,
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
const Fa = "efsdb:window-settings", Sa = {
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
}, rh = /* @__PURE__ */ new Set(["aero"]);
function nh(e) {
  return rh.has(e);
}
function Ei(e) {
  if (!nh(e.themePreset))
    return e;
  const t = Sa[e.themePreset];
  return t ? {
    ...e,
    ...t.settings,
    themePreset: e.themePreset
  } : e;
}
const qs = {
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
}, H = {
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
}, mi = /* @__PURE__ */ new Set();
let pr = Wl();
function oh(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function ih(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function ah(e) {
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
      return H.buttonLayout;
  }
}
function sh(e) {
  return e === "left" ? "left" : H.systemButtonPlacement;
}
function lh(e) {
  return e === "mirrored" ? "mirrored" : H.sideResizeMode;
}
function dh(e) {
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
      return H.themePreset;
  }
}
function ch(e) {
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
      return H.fontPreset;
  }
}
function hh(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return H.shiftDragAction;
  }
}
function wh(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return H.chromeColorSource;
  }
}
function fh(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return H.chromeGlossStyle;
  }
}
function uh(e) {
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
      return H.chromeBeamStyle;
  }
}
function ph(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return H.titleTone;
  }
}
function mh(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return H.titleEffect;
  }
}
function gh(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return H.dockLabelMode;
  }
}
function vh(e) {
  return e === "expanded" ? "expanded" : H.pageThemeSpread;
}
function Xe(e, t, r, n) {
  const o = Number(e);
  return Number.isFinite(o) ? Math.max(r, Math.min(n, Math.round(o))) : t;
}
function Ol(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : uh(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : fh(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: ah(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: sh(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: lh(e == null ? void 0 : e.sideResizeMode),
    borderWidth: Xe(
      e == null ? void 0 : e.borderWidth,
      H.borderWidth,
      0,
      12
    ),
    borderRadius: Xe(
      e == null ? void 0 : e.borderRadius,
      H.borderRadius,
      0,
      32
    ),
    chromePadding: Xe(
      e == null ? void 0 : e.chromePadding,
      H.chromePadding,
      0,
      20
    ),
    titleBarHeight: Xe(
      e == null ? void 0 : e.titleBarHeight,
      H.titleBarHeight,
      28,
      72
    ),
    windowScale: Xe(
      e == null ? void 0 : e.windowScale,
      H.windowScale,
      75,
      140
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : H.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : H.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: Xe(
      e == null ? void 0 : e.chromeBeamIntensity,
      H.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: Xe(
      e == null ? void 0 : e.chromeGlossIntensity,
      H.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Xe(
      e == null ? void 0 : e.chromeGlossSpacing,
      H.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : H.chromeColorize,
    chromeColorSource: wh(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: Xe(
      e == null ? void 0 : e.chromeColorIntensity,
      H.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : H.alignment,
    titleTone: ph(e == null ? void 0 : e.titleTone),
    titleEffect: mh(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : H.snapRestoreOnRelease,
    shiftDragAction: hh(e == null ? void 0 : e.shiftDragAction),
    themePreset: dh(e == null ? void 0 : e.themePreset),
    fontPreset: ch(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : H.globalEdgeDock,
    dockButtonSize: Xe(
      e == null ? void 0 : e.dockButtonSize,
      H.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Xe(
      e == null ? void 0 : e.dockButtonWidth,
      H.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Xe(
      e == null ? void 0 : e.dockIconScale,
      H.dockIconScale,
      70,
      160
    ),
    dockGap: Xe(e == null ? void 0 : e.dockGap, H.dockGap, 4, 24),
    dockOffset: Xe(e == null ? void 0 : e.dockOffset, H.dockOffset, 8, 36),
    dockLabelMode: gh(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: vh(e == null ? void 0 : e.pageThemeSpread)
  };
}
function bh(e) {
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
function yh(e) {
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
function xh(e) {
  return (Sa[e] ?? Sa.inherit).shadow;
}
function kh(e) {
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
function qh(e) {
  const t = Ei(e), r = t.chromeTexture ? Math.max(0, Math.min(1, t.chromeBeamIntensity / 100)) : 0, n = t.chromeTexture ? t.chromeBeamStyle : "none", i = `${(n === "vista" ? 0.98 : n === "windows-7" ? 0.94 : n === "xp-luna" ? 0.82 : n === "windows-9x" ? 0.72 : n === "kde" ? 0.7 : n === "mica" ? 0.62 : 0) * r}`, s = Math.max(0, Math.min(1, t.chromeGlossIntensity / 100)), l = t.chromeColorize ? `${Math.max(0, Math.min(0.88, t.chromeColorIntensity / 100))}` : "0", d = kh(t.chromeColorSource), c = Xe(t.chromeColorIntensity, 48, 0, 100), f = t.chromeColorize ? Math.round(34 + c / 100 * 42) : 0, u = t.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - f}%, ${d} ${f}%)` : "#4580c4", m = {
    "--efs-window-chrome-texture-opacity": i,
    "--efs-window-chrome-beam-intensity": `${r}`,
    "--efs-window-chrome-gloss-intensity": `${s}`,
    "--efs-window-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": l,
    "--efs-window-chrome-tint": d,
    "--efs-window-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-window-shell-scale": `${t.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": i,
    "--efs-widget-chrome-beam-intensity": `${r}`,
    "--efs-widget-chrome-gloss-intensity": `${s}`,
    "--efs-widget-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": l,
    "--efs-widget-theme-tint": d,
    "--efs-widget-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${t.windowScale / 100}`,
    "--efs-win7-window-bg": u
  };
  if (!t.chromeColorize)
    return m;
  const p = c, g = Math.round(p / 100 * 34), x = Math.round(p / 100 * 26), b = Math.round(10 + p / 100 * 46), q = Math.round(6 + p / 100 * 32), O = Math.round(p / 100 * 28), W = Math.round(p / 100 * 22), V = Math.round(12 + p / 100 * 46), J = Math.round(10 + p / 100 * 34), te = Math.round(90 - p / 100 * 16), ie = Math.round(92 - p / 100 * 18);
  return m["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - g}%, ${d} ${g}%)`, m["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - x}%, ${d} ${x}%)`, m["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - b}%, ${d} ${b}%)`, m["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - q}%, ${d} ${q}%)`, m["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${d}, transparent ${te}%), var(--efs-window-shell-shadow)`, m["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - O}%, ${d} ${O}%)`, m["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - W}%, ${d} ${W}%)`, m["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - V}%, ${d} ${V}%)`, m["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - J}%, ${d} ${J}%)`, m["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${d}, transparent ${ie}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, m;
}
function Wl() {
  const e = oh(Fa);
  if (!e)
    return Mo(H), { ...H };
  try {
    const t = JSON.parse(e), r = Ei(Ol(t));
    return Mo(r), r;
  } catch {
    return Mo(H), { ...H };
  }
}
function _h(e) {
  if (!e)
    return [];
  const t = [e], r = /* @__PURE__ */ new Set();
  for (; t.length > 0; ) {
    const n = t.shift();
    if (!(!n || r.has(n))) {
      r.add(n);
      try {
        const o = n.parent;
        o && o !== n && !r.has(o) && t.push(o);
      } catch {
      }
      try {
        for (let o = 0; o < n.frames.length; o += 1) {
          const i = n.frames[o];
          i && !r.has(i) && t.push(i);
        }
      } catch {
      }
    }
  }
  return [...r];
}
function na(e, t) {
  const r = Ei(t), n = e.documentElement.style, o = e.documentElement, i = r.chromeGlossStyle, s = r.chromeTexture ? r.chromeBeamStyle : "none", l = Math.max(r.dockButtonSize, r.dockButtonWidth), d = qs[r.fontPreset] ?? qs.system, c = xh(r.themePreset), f = qh(r), u = [
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
  n.setProperty("--efs-font-sans", d.stack), n.setProperty("--shell-font-sans", d.stack), n.setProperty("--efs-window-font-family", d.stack), n.setProperty("--efs-window-border-width", `${r.borderWidth}px`), n.setProperty("--efs-window-radius", `${r.borderRadius}px`), n.setProperty("--efs-window-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-window-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-window-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-window-system-button-placement", r.systemButtonPlacement), n.setProperty("--efs-window-side-resize-mode", r.sideResizeMode), n.setProperty("--efs-window-shell-shadow", c), n.setProperty("--efs-widget-border-width", `${r.borderWidth}px`), n.setProperty("--efs-widget-radius", `${r.borderRadius}px`), n.setProperty("--efs-widget-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-widget-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-widget-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-widget-shadow", c), n.setProperty("--efs-dock-button-size", `${r.dockButtonSize}px`), n.setProperty("--efs-dock-button-width", `${l}px`), n.setProperty("--efs-dock-gap", `${r.dockGap}px`), n.setProperty("--efs-dock-offset", `${r.dockOffset}px`), n.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(r.dockButtonSize * 0.39))}px`
  ), n.setProperty("--efs-dock-icon-scale", `${r.dockIconScale / 100}`), n.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(l + r.dockButtonSize * 1.8))}px`
  ), n.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(r.dockButtonSize * 0.31))}px`
  ), n.setProperty("--efs-dock-label-mode", r.dockLabelMode), n.setProperty("--efs-dock-global-enabled", r.globalEdgeDock ? "1" : "0"), n.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), n.setProperty("--efs-page-theme-spread", r.pageThemeSpread), o.setAttribute("data-efs-page-theme", r.pageThemeSpread), o.setAttribute("data-efs-window-gloss", i), o.setAttribute("data-efs-window-beam", s), u.forEach((m) => n.removeProperty(m)), Object.entries(f).forEach(([m, p]) => n.setProperty(m, p));
}
function Mo(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    na(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = _h(t);
  if (r.length === 0) {
    na(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      na(n.document, e);
    } catch {
    }
  });
}
function jh(e) {
  pr = Ei(
    Ol({
      ...pr,
      ...e
    })
  ), Mo(pr), ih(Fa, JSON.stringify(pr)), mi.forEach((t) => t(pr));
}
function Sh(e) {
  return mi.add(e), e(pr), () => {
    mi.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  Mo(pr);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || jh(t);
}), window.addEventListener("storage", (e) => {
  e.key === Fa && (pr = Wl(), mi.forEach((t) => t(pr)));
}));
var Mh = /* @__PURE__ */ Se('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), zh = /* @__PURE__ */ Se("<div><span></span></div>"), $h = /* @__PURE__ */ Se('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), oa = /* @__PURE__ */ Se('<button type="button"><!></button>'), Th = /* @__PURE__ */ Se('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Eh = /* @__PURE__ */ Se('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), Ph = /* @__PURE__ */ Se('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), Rh = /* @__PURE__ */ Se('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Ah = /* @__PURE__ */ Se('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), Ch = /* @__PURE__ */ Se("<div><!></div>"), Ih = /* @__PURE__ */ Se('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Lh = /* @__PURE__ */ Se("<!> <!> <div><!> <!> <!></div>", 1);
const Bh = {
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
function Dl(e, t) {
  Mi(t, !0), Na(e, Bh);
  let r = F(t, "title", 7), n = F(t, "helpText", 7, ""), o = F(t, "helpPlacement", 7, "auto"), i = F(t, "state", 15, "normal"), s = F(t, "x", 15, 100), l = F(t, "y", 15, 100), d = F(t, "width", 15, 600), c = F(t, "height", 15, 400), f = F(t, "locked", 7, !1), u = F(t, "chromeless", 7, !1), m = F(t, "buttonLayout", 7), p = F(t, "systemButtonPlacement", 7), g = F(t, "sideResizeMode", 7), x = F(t, "borderWidth", 7), b = F(t, "borderRadius", 7), q = F(t, "chromePadding", 7), O = F(t, "chromeStyle", 7), W = F(t, "alignment", 7), V = F(t, "themePreset", 7), J = F(t, "fontPreset", 7), te = F(t, "snapRestoreOnRelease", 7), ie = F(t, "shiftDragAction", 7), Me = F(t, "zIndex", 7, 100), ze = F(t, "pinned", 7, !1), E = F(t, "dragSeed", 7, null), $e = F(t, "restoreFrame", 15, null), ee = F(t, "snapTarget", 15, null), Ge = F(t, "onClose", 7), De = F(t, "onPinToggle", 7), ir = F(t, "onConsumeDragSeed", 7), Et = F(t, "onStateChange", 7), br = F(t, "children", 7);
  const mn = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], et = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), ar = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], Cr = 360, Ir = 240, Fo = 1400;
  let ge = /* @__PURE__ */ G(Qr({ ...H })), Vo = /* @__PURE__ */ G(!1), Lr = /* @__PURE__ */ G(!1), gt = /* @__PURE__ */ G(null), gn = /* @__PURE__ */ G(null), Br = /* @__PURE__ */ G(0), Pt = /* @__PURE__ */ G(0), Gn = "", Go = 0, Uo = 0, k = 0, T = 0, X = 0, N = 0, ae = "se", Ce = null, vt = !1, tt = !1, Un = 0.5, Yo = 18, yr = !1, Or = /* @__PURE__ */ G(null), Vt = 0, sr = /* @__PURE__ */ G(null), vn = /* @__PURE__ */ G(0), bn = /* @__PURE__ */ G(0);
  Al(() => {
    const h = requestAnimationFrame(() => {
      y(Vo, !0);
    }), v = Sh((M) => {
      y(ge, { ...M }, !0);
    });
    return () => {
      cancelAnimationFrame(h), v(), so(), Vt && typeof window < "u" && window.clearTimeout(Vt);
    };
  });
  let Ue = /* @__PURE__ */ B(() => m() ?? a(ge).buttonLayout), Zo = /* @__PURE__ */ B(() => p() ?? a(ge).systemButtonPlacement), Yn = /* @__PURE__ */ B(() => g() ?? a(ge).sideResizeMode), Zn = /* @__PURE__ */ B(() => x() ?? a(ge).borderWidth), Pi = /* @__PURE__ */ B(() => b() ?? a(ge).borderRadius), Ri = /* @__PURE__ */ B(() => q() ?? a(ge).chromePadding), Wr = /* @__PURE__ */ B(() => Math.max(28, a(ge).titleBarHeight ?? H.titleBarHeight)), Xo = /* @__PURE__ */ B(() => Math.max(0.75, (a(ge).windowScale ?? H.windowScale) / 100)), yn = /* @__PURE__ */ B(() => O() ?? a(ge).chromeStyle), Ai = /* @__PURE__ */ B(() => a(ge).chromeTexture ? a(ge).chromeBeamStyle : "none"), Ci = /* @__PURE__ */ B(() => a(ge).chromeGlossStyle), Be = /* @__PURE__ */ B(() => W() ?? a(ge).alignment), xe = /* @__PURE__ */ B(() => V() ?? a(ge).themePreset), Ie = /* @__PURE__ */ B(() => J() ?? a(ge).fontPreset), se = /* @__PURE__ */ B(() => te() ?? a(ge).snapRestoreOnRelease), Ne = /* @__PURE__ */ B(() => ie() ?? a(ge).shiftDragAction), Rt = /* @__PURE__ */ B(() => d() < 560 ? "left" : a(Be)), bt = /* @__PURE__ */ B(() => d() < 520), At = /* @__PURE__ */ B(() => bh({
    themePreset: a(xe),
    titleTone: a(ge).titleTone
  })), xr = /* @__PURE__ */ B(() => yh({
    themePreset: a(xe),
    titleEffect: a(ge).titleEffect
  })), Ct = /* @__PURE__ */ B(() => n().trim().length > 0), Gt = /* @__PURE__ */ B(() => o() === "auto" ? a(Zo) === "left" ? "after" : "before" : o()), R = /* @__PURE__ */ B(() => a(xe) === "aero"), Dr = /* @__PURE__ */ B(() => a(xe) === "windows-basic"), oe = /* @__PURE__ */ B(() => a(R) || a(Dr)), ke = /* @__PURE__ */ B(() => a(oe) || a(xe) === "windows-vista"), Nr = /* @__PURE__ */ B(() => Math.max(a(vn), a(bn)) + (a(bt) ? 12 : 18));
  function Xn(h) {
    return et.has(h);
  }
  function Ko(h) {
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
  function Kn(h, v = !1) {
    if (v)
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
  function Jn(h, v = !1) {
    if (v)
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
  let yt = /* @__PURE__ */ G(!1), Hr = 0, Fr = 0, Vr = 0, Gr = 0, Qn = /* @__PURE__ */ B(() => a(yt) && !u() && !f() && a(Ue) !== "mac" && typeof window < "u" && a(Pt) <= 84 && Math.abs(a(Br) - window.innerWidth / 2) <= 232), Ur = /* @__PURE__ */ B(() => a(gt) ? oo(a(gt)) : null);
  function xt(h) {
    var v;
    i() !== h && (i(h), (v = Et()) == null || v(i()));
  }
  function Yr() {
    return { x: s(), y: l(), width: d(), height: c() };
  }
  function Zr(h, v = d()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerWidth - v, h));
  }
  function eo(h, v = c()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerHeight - Math.min(v, a(Wr)), h));
  }
  function Ut(h) {
    const v = Math.max(Cr, Math.round(h.width)), M = Math.max(Ir, Math.round(h.height));
    return {
      x: Zr(Math.round(h.x), v),
      y: eo(Math.round(h.y), M),
      width: v,
      height: M
    };
  }
  function to() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : Ut({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function ro(h) {
    const v = Ut(h);
    s(v.x), l(v.y), d(v.width), c(v.height), ee(null), xt("normal");
  }
  function no() {
    ro($e() ?? to());
  }
  function oo(h) {
    if (typeof window > "u") return null;
    const v = window.innerWidth, M = window.innerHeight, I = Math.round(v / 2), fe = Math.round(M / 2);
    switch (h) {
      case "maximize":
        return { x: 0, y: 0, width: v, height: M };
      case "left-half":
        return { x: 0, y: 0, width: I, height: M };
      case "right-half":
        return {
          x: v - I,
          y: 0,
          width: I,
          height: M
        };
      case "top-left":
        return { x: 0, y: 0, width: I, height: fe };
      case "top-right":
        return {
          x: v - I,
          y: 0,
          width: I,
          height: fe
        };
      case "bottom-left":
        return {
          x: 0,
          y: M - fe,
          width: I,
          height: fe
        };
      case "bottom-right":
        return {
          x: v - I,
          y: M - fe,
          width: I,
          height: fe
        };
    }
  }
  function xn(h, v = Yr()) {
    if ($e(Ut(v)), h === "maximize") {
      typeof window < "u" && (s(0), l(0), d(window.innerWidth), c(window.innerHeight)), ee("maximize"), xt("maximized");
      return;
    }
    const M = oo(h);
    M && (ee(h), xt("normal"), s(M.x), l(M.y), d(M.width), c(M.height));
  }
  function io() {
    typeof window > "u" || ((i() === "maximized" || ee()) && no(), s(Zr(Math.round((window.innerWidth - d()) / 2), d())), l(eo(Math.round((window.innerHeight - c()) / 2), c())));
  }
  function kn() {
    if (i() === "maximized") {
      no();
      return;
    }
    xn("maximize");
  }
  function Ii() {
    xt(i() === "rolled-up" ? "normal" : "rolled-up");
  }
  function ao() {
    xt("minimized");
  }
  function Li() {
    y(Or, null), Vt && typeof window < "u" && window.clearTimeout(Vt), Vt = 0;
  }
  function Jo(h) {
    if (typeof window > "u") {
      y(Or, h, !0);
      return;
    }
    Li(), y(Or, h, !0), Vt = window.setTimeout(
      () => {
        y(Or, null), Vt = 0;
      },
      Fo
    );
  }
  function lr() {
    var fe, Te;
    if (typeof window > "u" || !a(sr))
      return !1;
    const h = 24, v = Math.ceil(Math.max(a(sr).scrollWidth, ((fe = a(sr).firstElementChild) == null ? void 0 : fe.scrollWidth) ?? 0)), M = Math.ceil(Math.max(a(sr).scrollHeight, ((Te = a(sr).firstElementChild) == null ? void 0 : Te.scrollHeight) ?? 0)), I = Ut({
      x: Math.round((window.innerWidth - v) / 2),
      y: Math.round((window.innerHeight - M - a(Wr)) / 2),
      width: Math.min(window.innerWidth - h * 2, Math.max(Cr, v + a(Zn) * 2)),
      height: Math.min(window.innerHeight - h * 2, Math.max(Ir, M + a(Wr) + a(Zn) * 2))
    });
    return $e(Yr()), ro(I), !0;
  }
  function Qo(h) {
    if (f() || u() || Ga(h.target))
      return;
    if (a(Or) === "fit-content") {
      Jo("maximize"), kn();
      return;
    }
    const v = lr();
    Jo(v ? "fit-content" : "maximize"), v || kn();
  }
  function Ga(h) {
    return !!(h != null && h.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function Hl(h, v) {
    if (!a(gn)) return null;
    for (const M of a(gn).querySelectorAll("[data-snap-target]")) {
      const I = M.getBoundingClientRect();
      if (h >= I.left && h <= I.right && v >= I.top && v <= I.bottom)
        return M.dataset.snapTarget;
    }
    return null;
  }
  function Fl(h, v) {
    if (typeof window > "u") return null;
    const M = 18, I = Math.max(72, Math.round(window.innerHeight * 0.14));
    return v <= M ? h <= window.innerWidth * 0.33 ? "top-left" : h >= window.innerWidth * 0.67 ? "top-right" : "maximize" : h <= M ? v <= I ? "top-left" : v >= window.innerHeight - I ? "bottom-left" : "left-half" : h >= window.innerWidth - M ? v <= I ? "top-right" : v >= window.innerHeight - I ? "bottom-right" : "right-half" : null;
  }
  function Vl(h, v) {
    if (y(Br, h, !0), y(Pt, v, !0), !a(yt) || f() || u() || a(Ue) === "mac") {
      y(gt, null);
      return;
    }
    y(gt, Hl(h, v) ?? Fl(h, v), !0);
  }
  function Gl(h, v) {
    if (!tt) return;
    const M = $e() ?? to(), I = Ut({
      ...M,
      x: h - M.width * Un,
      y: v - Yo
    });
    s(I.x), l(I.y), d(I.width), c(I.height), xt("normal"), ee(null), tt = !1, vt = !0, Hr = h, Fr = v, Vr = s(), Gr = l();
  }
  function Ua(h) {
    !h.shiftKey || yr || a(Ne) !== "pin" || !De() || ze() || (De()(), yr = !0);
  }
  function Ul(h) {
    if (f() || u() || i() === "minimized" || Ga(h.target)) return;
    y(yt, !0), yr = !1, y(gt, null), y(Br, h.clientX, !0), y(Pt, h.clientY, !0), Hr = h.clientX, Fr = h.clientY, Vr = s(), Gr = l(), vt = !1, tt = !1;
    const v = Yr();
    Un = v.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (h.clientX - v.x) / v.width)), Yo = Math.max(12, Math.min(28, Math.round(h.clientY - v.y || 18))), i() === "maximized" || ee() ? (Ce = i() === "maximized" ? "maximize" : ee(), $e($e() ?? to()), tt = !0) : Ce = null, Ua(h), h.currentTarget.setPointerCapture(h.pointerId);
  }
  function Bi(h) {
    a(yt) && (Ua(h), tt && (Math.abs(h.clientX - Hr) > 2 || Math.abs(h.clientY - Fr) > 2) && Gl(h.clientX, h.clientY), s(Zr(Vr + (h.clientX - Hr), d())), l(eo(Gr + (h.clientY - Fr), c())), Vl(h.clientX, h.clientY));
  }
  function qn(h) {
    if (!a(yt)) return;
    const v = a(gt);
    y(gt, null), y(yt, !1), tt = !1, v ? xn(v, Yr()) : vt && Ce && a(se) && !h.shiftKey && !yr ? xn(Ce, Yr()) : ee(null), Ce = null, vt = !1, yr = !1;
    const M = h.currentTarget;
    "hasPointerCapture" in M && M.hasPointerCapture(h.pointerId) && M.releasePointerCapture(h.pointerId), window.removeEventListener("pointermove", Bi), window.removeEventListener("pointerup", qn), window.removeEventListener("pointercancel", qn);
  }
  function Yl(h, v) {
    f() || u() || i() === "maximized" || i() === "minimized" || (ee() && ee(null), v.stopPropagation(), v.preventDefault(), y(Lr, !0), ae = h, Go = v.clientX, Uo = v.clientY, k = s(), T = l(), X = d(), N = c(), y(gt, null), window.addEventListener("pointermove", Ya), window.addEventListener("pointerup", so), window.addEventListener("pointercancel", so));
  }
  function Ya(h) {
    if (!a(Lr)) return;
    const v = h.clientX - Go, M = h.clientY - Uo;
    let I = k, fe = T, Te = X, Ye = N;
    if (a(Yn) === "mirrored" && (ae === "e" || ae === "w")) {
      const Oi = ae === "e" ? v : -v;
      Te = Math.max(Cr, X + Oi * 2), I = k - (Te - X) / 2;
    } else ae.includes("e") && (Te = Math.max(Cr, X + v));
    ae.includes("s") && (Ye = Math.max(Ir, N + M)), a(Yn) !== "mirrored" && ae.includes("w") && (Te = Math.max(Cr, X - v), I = k + (X - Te)), ae.includes("n") && (Ye = Math.max(Ir, N - M), fe = T + (N - Ye));
    const dr = Ut({ x: I, y: fe, width: Te, height: Ye });
    s(dr.x), l(dr.y), d(dr.width), c(dr.height);
  }
  function so() {
    a(Lr) && (y(Lr, !1), window.removeEventListener("pointermove", Ya), window.removeEventListener("pointerup", so), window.removeEventListener("pointercancel", so));
  }
  function Zl(h) {
    var M;
    if (typeof window > "u") return;
    const v = Ut({
      x: h.clientX - Math.round(d() * 0.38),
      y: h.clientY - 18,
      width: d(),
      height: c()
    });
    s(v.x), l(v.y), Vr = s(), Gr = l(), Hr = h.clientX, Fr = h.clientY, y(Br, h.clientX, !0), y(Pt, h.clientY, !0), y(gt, null), Ce = null, vt = !1, tt = !1, yr = !0, y(yt, !0), window.addEventListener("pointermove", Bi), window.addEventListener("pointerup", qn), window.addEventListener("pointercancel", qn), (M = ir()) == null || M();
  }
  pa(() => {
    const h = E() ? `${E().pointerId}:${E().clientX}:${E().clientY}` : "";
    !E() || h === Gn || (Gn = h, Zl(E()));
  }), pa(() => {
    i() === "maximized" && ee() !== "maximize" && ee("maximize"), i() === "normal" && ee() === "maximize" && ee(null);
  });
  var Xl = {
    get title() {
      return r();
    },
    set title(h) {
      r(h), D();
    },
    get helpText() {
      return n();
    },
    set helpText(h = "") {
      n(h), D();
    },
    get helpPlacement() {
      return o();
    },
    set helpPlacement(h = "auto") {
      o(h), D();
    },
    get state() {
      return i();
    },
    set state(h = "normal") {
      i(h), D();
    },
    get x() {
      return s();
    },
    set x(h = 100) {
      s(h), D();
    },
    get y() {
      return l();
    },
    set y(h = 100) {
      l(h), D();
    },
    get width() {
      return d();
    },
    set width(h = 600) {
      d(h), D();
    },
    get height() {
      return c();
    },
    set height(h = 400) {
      c(h), D();
    },
    get locked() {
      return f();
    },
    set locked(h = !1) {
      f(h), D();
    },
    get chromeless() {
      return u();
    },
    set chromeless(h = !1) {
      u(h), D();
    },
    get buttonLayout() {
      return m();
    },
    set buttonLayout(h) {
      m(h), D();
    },
    get systemButtonPlacement() {
      return p();
    },
    set systemButtonPlacement(h) {
      p(h), D();
    },
    get sideResizeMode() {
      return g();
    },
    set sideResizeMode(h) {
      g(h), D();
    },
    get borderWidth() {
      return x();
    },
    set borderWidth(h) {
      x(h), D();
    },
    get borderRadius() {
      return b();
    },
    set borderRadius(h) {
      b(h), D();
    },
    get chromePadding() {
      return q();
    },
    set chromePadding(h) {
      q(h), D();
    },
    get chromeStyle() {
      return O();
    },
    set chromeStyle(h) {
      O(h), D();
    },
    get alignment() {
      return W();
    },
    set alignment(h) {
      W(h), D();
    },
    get themePreset() {
      return V();
    },
    set themePreset(h) {
      V(h), D();
    },
    get fontPreset() {
      return J();
    },
    set fontPreset(h) {
      J(h), D();
    },
    get snapRestoreOnRelease() {
      return te();
    },
    set snapRestoreOnRelease(h) {
      te(h), D();
    },
    get shiftDragAction() {
      return ie();
    },
    set shiftDragAction(h) {
      ie(h), D();
    },
    get zIndex() {
      return Me();
    },
    set zIndex(h = 100) {
      Me(h), D();
    },
    get pinned() {
      return ze();
    },
    set pinned(h = !1) {
      ze(h), D();
    },
    get dragSeed() {
      return E();
    },
    set dragSeed(h = null) {
      E(h), D();
    },
    get restoreFrame() {
      return $e();
    },
    set restoreFrame(h = null) {
      $e(h), D();
    },
    get snapTarget() {
      return ee();
    },
    set snapTarget(h = null) {
      ee(h), D();
    },
    get onClose() {
      return Ge();
    },
    set onClose(h) {
      Ge(h), D();
    },
    get onPinToggle() {
      return De();
    },
    set onPinToggle(h) {
      De(h), D();
    },
    get onConsumeDragSeed() {
      return ir();
    },
    set onConsumeDragSeed(h) {
      ir(h), D();
    },
    get onStateChange() {
      return Et();
    },
    set onStateChange(h) {
      Et(h), D();
    },
    get children() {
      return br();
    },
    set children(h) {
      br(h), D();
    }
  }, Za = Lh(), Xa = $n(Za);
  {
    var Kl = (h) => {
      var v = Mh();
      let M;
      Ee(() => M = pt(v, "", M, {
        left: `${a(Ur).x}px`,
        top: `${a(Ur).y}px`,
        width: `${a(Ur).width}px`,
        height: `${a(Ur).height}px`,
        "z-index": Me() + 2
      })), ce(h, v);
    };
    _e(Xa, (h) => {
      a(Ur) && !u() && h(Kl);
    });
  }
  var Ka = z(Xa, 2);
  {
    var Jl = (h) => {
      var v = $h();
      let M;
      So(v, 21, () => mn, (I) => I.id, (I, fe) => {
        var Te = zh();
        let Ye;
        var dr = Re(Te);
        Ee(() => {
          Ye = me(Te, 1, "snap-cell svelte-1k3ojqh", null, Ye, { "is-active": a(gt) === a(fe).id }), re(Te, "data-snap-target", a(fe).id), me(dr, 1, `snap-shape shape-${a(fe).preview}`, "svelte-1k3ojqh");
        }), ce(I, Te);
      }), _(v), ja(v, (I) => y(gn, I), () => a(gn)), Ee(() => M = pt(v, "", M, { "z-index": Me() + 3 })), ce(h, v);
    };
    _e(Ka, (h) => {
      a(Qn) && !u() && h(Jl);
    });
  }
  var at = z(Ka, 2);
  let Ja, Qa;
  var es = $(at);
  {
    var Ql = (h) => {
      var v = Ah();
      let M;
      var I = $(v), fe = $(I);
      {
        var Te = (le) => {
          var ue = oa();
          let de;
          var kt = $(ue);
          qt(kt, { name: "pin" }), _(ue), Ee(() => {
            de = me(ue, 1, Ze(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", de, {
              "efs-win7-tool-button": !a(R) && a(oe),
              "is-active": ze(),
              active: ze()
            }), re(ue, "aria-label", ze() ? "Unpin window" : "Pin window"), re(ue, "aria-pressed", ze());
          }), be("click", ue, function(...rt) {
            var st;
            (st = De()) == null || st.apply(this, rt);
          }), ce(le, ue);
        };
        _e(fe, (le) => {
          De() && le(Te);
        });
      }
      var Ye = z(fe, 2);
      let dr;
      var Oi = $(Ye);
      qt(Oi, { name: "center" }), _(Ye);
      var lo = z(Ye, 2);
      let rs;
      var nd = $(lo);
      {
        let le = /* @__PURE__ */ B(() => i() === "rolled-up" ? "roll-up" : "roll-down");
        qt(nd, {
          get name() {
            return a(le);
          }
        });
      }
      _(lo), _(I);
      var ei = z(I, 2);
      let ns;
      var od = Re(ei, !0), Wi = z(ei, 2), os = $(Wi);
      {
        var id = (le) => {
          var ue = Th(), de = $(ue);
          let kt;
          var rt = $(de);
          qt(rt, { name: "help" }), _(de);
          var st = z(de, 2), nt = $(st), kr = Re(nt, !0), It = z(nt, 2), qr = Re(It, !0);
          _(st), _(ue), Ee(() => {
            kt = me(
              de,
              1,
              Ze(a(R) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              kt,
              {
                "efs-win7-tool-button": !a(R) && a(oe),
                "is-help": !a(R) && a(oe)
              }
            ), re(de, "aria-label", a(ke) ? "Help" : `About ${r()}`), re(de, "title", `About ${r()}`), Le(kr, r()), Le(qr, n());
          }), ce(le, ue);
        };
        _e(os, (le) => {
          a(Ct) && a(Gt) === "before" && le(id);
        });
      }
      var ti = z(os, 2);
      let is;
      var ad = $(ti);
      {
        var sd = (le) => {
          var ue = Eh(), de = $n(ue);
          {
            var kt = (pe) => {
              var qe = oa();
              let lt;
              var Hi = $(qe);
              {
                var Fi = (Lt) => {
                  {
                    let cr = /* @__PURE__ */ B(() => Ko(a(Ue)));
                    qt(Lt, {
                      name: "close",
                      get variant() {
                        return a(cr);
                      }
                    });
                  }
                };
                _e(Hi, (Lt) => {
                  a(oe) || Lt(Fi);
                });
              }
              _(qe), Ee(() => {
                lt = me(
                  qe,
                  1,
                  Ze(a(R) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  lt,
                  {
                    "is-close": !a(R) && a(ke)
                  }
                ), re(qe, "aria-label", a(oe) ? "Close" : "Close window");
              }), be("click", qe, function(...Lt) {
                var cr;
                (cr = Ge()) == null || cr.apply(this, Lt);
              }), ce(pe, qe);
            };
            _e(de, (pe) => {
              Ge() && pe(kt);
            });
          }
          var rt = z(de, 2);
          let st;
          var nt = $(rt);
          {
            var kr = (pe) => {
              {
                let qe = /* @__PURE__ */ B(() => i() === "minimized" ? "restore" : "minimize"), lt = /* @__PURE__ */ B(() => Kn(a(Ue), i() === "minimized"));
                qt(pe, {
                  get name() {
                    return a(qe);
                  },
                  get variant() {
                    return a(lt);
                  }
                });
              }
            };
            _e(nt, (pe) => {
              a(oe) || pe(kr);
            });
          }
          _(rt);
          var It = z(rt, 2);
          let qr;
          var Di = $(It);
          {
            var Ni = (pe) => {
              {
                let qe = /* @__PURE__ */ B(() => i() === "maximized" ? "restore" : "maximize"), lt = /* @__PURE__ */ B(() => Jn(a(Ue), i() === "maximized"));
                qt(pe, {
                  get name() {
                    return a(qe);
                  },
                  get variant() {
                    return a(lt);
                  }
                });
              }
            };
            _e(Di, (pe) => {
              a(oe) || pe(Ni);
            });
          }
          _(It), Ee(() => {
            st = me(
              rt,
              1,
              Ze(a(R) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              st,
              {
                "is-minimize": !a(R) && a(ke) && i() !== "minimized",
                "is-restore": !a(R) && a(ke) && i() === "minimized"
              }
            ), re(rt, "aria-label", a(oe) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), qr = me(
              It,
              1,
              Ze(a(R) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              qr,
              {
                "is-maximize": !a(R) && a(ke) && i() !== "maximized",
                "is-restore": !a(R) && a(ke) && i() === "maximized"
              }
            ), re(It, "aria-label", a(oe) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), be("click", rt, () => i() === "minimized" ? xt("normal") : ao()), be("click", It, kn), ce(le, ue);
        }, ld = /* @__PURE__ */ B(() => Xn(a(Ue))), dd = (le) => {
          var ue = Ph(), de = $n(ue);
          let kt;
          var rt = $(de);
          {
            var st = (pe) => {
              {
                let qe = /* @__PURE__ */ B(() => i() === "minimized" ? "restore" : "minimize"), lt = /* @__PURE__ */ B(() => Kn(a(Ue), i() === "minimized"));
                qt(pe, {
                  get name() {
                    return a(qe);
                  },
                  get variant() {
                    return a(lt);
                  }
                });
              }
            };
            _e(rt, (pe) => {
              a(oe) || pe(st);
            });
          }
          _(de);
          var nt = z(de, 2);
          let kr;
          var It = $(nt);
          {
            var qr = (pe) => {
              {
                let qe = /* @__PURE__ */ B(() => i() === "maximized" ? "restore" : "maximize"), lt = /* @__PURE__ */ B(() => Jn(a(Ue), i() === "maximized"));
                qt(pe, {
                  get name() {
                    return a(qe);
                  },
                  get variant() {
                    return a(lt);
                  }
                });
              }
            };
            _e(It, (pe) => {
              a(oe) || pe(qr);
            });
          }
          _(nt);
          var Di = z(nt, 2);
          {
            var Ni = (pe) => {
              var qe = oa();
              let lt;
              var Hi = $(qe);
              {
                var Fi = (Lt) => {
                  {
                    let cr = /* @__PURE__ */ B(() => Ko(a(Ue)));
                    qt(Lt, {
                      name: "close",
                      get variant() {
                        return a(cr);
                      }
                    });
                  }
                };
                _e(Hi, (Lt) => {
                  a(oe) || Lt(Fi);
                });
              }
              _(qe), Ee(() => {
                lt = me(
                  qe,
                  1,
                  Ze(a(R) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  lt,
                  {
                    "is-close": !a(R) && a(ke)
                  }
                ), re(qe, "aria-label", a(oe) ? "Close" : "Close window");
              }), be("click", qe, function(...Lt) {
                var cr;
                (cr = Ge()) == null || cr.apply(this, Lt);
              }), ce(pe, qe);
            };
            _e(Di, (pe) => {
              Ge() && pe(Ni);
            });
          }
          Ee(() => {
            kt = me(
              de,
              1,
              Ze(a(R) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              kt,
              {
                "is-minimize": !a(R) && a(ke) && i() !== "minimized",
                "is-restore": !a(R) && a(ke) && i() === "minimized"
              }
            ), re(de, "aria-label", a(oe) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), kr = me(
              nt,
              1,
              Ze(a(R) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              kr,
              {
                "is-maximize": !a(R) && a(ke) && i() !== "maximized",
                "is-restore": !a(R) && a(ke) && i() === "maximized"
              }
            ), re(nt, "aria-label", a(oe) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), be("click", de, () => i() === "minimized" ? xt("normal") : ao()), be("click", nt, kn), ce(le, ue);
        };
        _e(ad, (le) => {
          a(ld) ? le(sd) : le(dd, -1);
        });
      }
      _(ti);
      var cd = z(ti, 2);
      {
        var hd = (le) => {
          var ue = Rh(), de = $(ue);
          let kt;
          var rt = $(de);
          qt(rt, { name: "help" }), _(de);
          var st = z(de, 2), nt = $(st), kr = Re(nt, !0), It = z(nt, 2), qr = Re(It, !0);
          _(st), _(ue), Ee(() => {
            kt = me(
              de,
              1,
              Ze(a(R) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              kt,
              {
                "efs-win7-tool-button": !a(R) && a(oe),
                "is-help": !a(R) && a(oe)
              }
            ), re(de, "aria-label", a(ke) ? "Help" : `About ${r()}`), re(de, "title", `About ${r()}`), Le(kr, r()), Le(qr, n());
          }), ce(le, ue);
        };
        _e(cd, (le) => {
          a(Ct) && a(Gt) === "after" && le(hd);
        });
      }
      _(Wi), _(v), Ee(
        (le, ue) => {
          M = me(
            v,
            1,
            Ze(a(R) ? "title-bar" : `window-chrome chrome-${a(yn)}`),
            "svelte-1k3ojqh",
            M,
            {
              "layout-mac": le,
              "layout-windows": ue,
              "title-bar": !a(R) && a(ke)
            }
          ), re(v, "aria-label", `${r()} window controls`), dr = me(Ye, 1, Ze(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", dr, {
            "efs-win7-tool-button": !a(R) && a(oe)
          }), rs = me(lo, 1, Ze(a(R) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", rs, {
            "efs-win7-tool-button": !a(R) && a(oe),
            "is-active": i() === "rolled-up",
            active: i() === "rolled-up"
          }), re(lo, "aria-label", i() === "rolled-up" ? "Restore height" : "Roll up"), ns = me(
            ei,
            1,
            Ze(a(R) ? "title-bar-text" : `window-title align-${a(Rt)}`),
            "svelte-1k3ojqh",
            ns,
            {
              "title-bar-text": !a(R) && a(ke)
            }
          ), re(ei, "title", r()), Le(od, r()), is = me(
            ti,
            1,
            Ze(a(R) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            is,
            {
              "title-bar-controls": !a(R) && a(ke)
            }
          );
        },
        [
          () => !a(R) && Xn(a(Ue)),
          () => !a(R) && !Xn(a(Ue))
        ]
      ), be("pointerdown", v, Ul), be("pointermove", v, Bi), be("pointerup", v, qn), bc("pointercancel", v, qn), be("dblclick", v, Qo), be("click", Ye, io), be("click", lo, Ii), ys(I, "clientWidth", (le) => y(vn, le)), ys(Wi, "clientWidth", (le) => y(bn, le)), ce(h, v);
    };
    _e(es, (h) => {
      u() || h(Ql);
    });
  }
  var ts = z(es, 2);
  {
    var ed = (h) => {
      var v = Ch();
      let M;
      var I = $(v);
      Tc(I, () => br() ?? Tn), _(v), ja(v, (fe) => y(sr, fe), () => a(sr)), Ee(() => M = me(v, 1, "window-content svelte-1k3ojqh", null, M, { "window-body": a(oe) })), ce(h, v);
    };
    _e(ts, (h) => {
      i() !== "rolled-up" && i() !== "minimized" && h(ed);
    });
  }
  var td = z(ts, 2);
  {
    var rd = (h) => {
      var v = Ml(), M = $n(v);
      So(M, 16, () => ar, (I) => I, (I, fe) => {
        var Te = Ih();
        Ee(() => me(Te, 1, `resize-handle dir-${fe}`, "svelte-1k3ojqh")), be("pointerdown", Te, (Ye) => Yl(fe, Ye)), ce(I, Te);
      }), ce(h, v);
    };
    _e(td, (h) => {
      !u() && i() !== "maximized" && i() !== "minimized" && h(rd);
    });
  }
  return _(at), Ee(() => {
    Ja = me(at, 1, "window-shell svelte-1k3ojqh", null, Ja, {
      win7: a(oe),
      "win7-theme": a(R),
      "basic7-theme": a(Dr),
      window: a(oe),
      active: a(oe),
      glass: a(R),
      "is-ready": a(Vo),
      "is-dragging": a(yt),
      "is-resizing": a(Lr),
      "compact-controls": a(bt),
      maximized: i() === "maximized",
      minimized: i() === "minimized",
      "rolled-up": i() === "rolled-up",
      chromeless: u()
    }), re(at, "data-layout", a(R) ? void 0 : a(Ue)), re(at, "data-system-placement", a(Zo)), re(at, "data-style", a(R) ? void 0 : a(yn)), re(at, "data-theme", a(xe)), re(at, "data-font", a(Ie)), re(at, "data-beam", a(R) ? void 0 : a(Ai)), re(at, "data-gloss", a(R) ? void 0 : a(Ci)), re(at, "data-title-tone", a(R) ? void 0 : a(At)), re(at, "data-title-effect", a(R) ? void 0 : a(xr)), Qa = pt(at, "", Qa, {
      "--window-border-width": `${a(Zn)}px`,
      "--window-radius": `${a(Pi)}px`,
      "--window-chrome-padding": `${a(Ri)}px`,
      "--window-titlebar-height": `${a(Wr)}px`,
      "--window-shell-scale": `${a(Xo)}`,
      "--window-title-guard": `${a(Nr)}px`,
      transform: i() === "normal" || i() === "rolled-up" ? `translate(${s()}px, ${l()}px)` : void 0,
      width: i() === "normal" || i() === "rolled-up" ? `${d()}px` : void 0,
      height: i() === "normal" ? `${c()}px` : void 0,
      "z-index": Me()
    });
  }), ce(e, Za), zi(Xl);
}
Sl([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Ha(
  Dl,
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
const ia = "efsdb:theme-studio", bo = "#5b8cff", yo = "light", Mn = 66, zn = 56, Oh = [
  { id: "azure", label: "Azure Glass", seed: "#4f7cff", mode: "light", vividness: 68, contrast: 58 },
  { id: "violet", label: "Violet Signal", seed: "#7c5cff", mode: "dark", vividness: 72, contrast: 63 },
  { id: "mint", label: "Mint Grid", seed: "#14b8a6", mode: "light", vividness: 62, contrast: 54 },
  { id: "ember", label: "Ember Ops", seed: "#f97316", mode: "dark", vividness: 74, contrast: 67 },
  { id: "rose", label: "Rose Runtime", seed: "#e11d48", mode: "light", vividness: 69, contrast: 55 },
  { id: "gold", label: "Golden Build", seed: "#d4a017", mode: "dark", vividness: 58, contrast: 62 }
];
function he(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Va(e) {
  const t = (e ?? "").trim().replace("#", "");
  return /^[0-9a-fA-F]{3}$/.test(t) ? `#${t.split("").map((r) => `${r}${r}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(t) ? `#${t.toLowerCase()}` : bo;
}
function Ro(e) {
  const t = Va(e).slice(1), r = Number.parseInt(t, 16);
  return {
    r: r >> 16 & 255,
    g: r >> 8 & 255,
    b: r & 255
  };
}
function Nl(e, t, r) {
  return `#${(he(Math.round(e), 0, 255) << 16 | he(Math.round(t), 0, 255) << 8 | he(Math.round(r), 0, 255)).toString(16).padStart(6, "0")}`;
}
function Wh(e, t, r) {
  const n = e / 255, o = t / 255, i = r / 255, s = Math.max(n, o, i), l = Math.min(n, o, i), d = s - l;
  let c = 0;
  const f = (s + l) / 2, u = d === 0 ? 0 : d / (1 - Math.abs(2 * f - 1));
  if (d !== 0) {
    switch (s) {
      case n:
        c = (o - i) / d % 6;
        break;
      case o:
        c = (i - n) / d + 2;
        break;
      default:
        c = (n - o) / d + 4;
        break;
    }
    c *= 60, c < 0 && (c += 360);
  }
  return {
    h: c,
    s: u * 100,
    l: f * 100
  };
}
function Dh(e, t, r) {
  const n = (e % 360 + 360) % 360, o = he(t, 0, 100) / 100, i = he(r, 0, 100) / 100, s = (1 - Math.abs(2 * i - 1)) * o, l = s * (1 - Math.abs(n / 60 % 2 - 1)), d = i - s / 2;
  let c = 0, f = 0, u = 0;
  return n < 60 ? (c = s, f = l) : n < 120 ? (c = l, f = s) : n < 180 ? (f = s, u = l) : n < 240 ? (f = l, u = s) : n < 300 ? (c = l, u = s) : (c = s, u = l), {
    r: (c + d) * 255,
    g: (f + d) * 255,
    b: (u + d) * 255
  };
}
function ho(e, t, r) {
  const { r: n, g: o, b: i } = Dh(e, t, r);
  return Nl(n, o, i);
}
function ve(e, t, r) {
  const n = Ro(e), o = Ro(t), i = he(r, 0, 1);
  return Nl(
    n.r + (o.r - n.r) * i,
    n.g + (o.g - n.g) * i,
    n.b + (o.b - n.b) * i
  );
}
function dt(e, t) {
  const { r, g: n, b: o } = Ro(e);
  return `rgba(${r}, ${n}, ${o}, ${he(t, 0, 1).toFixed(3)})`;
}
function _s(e) {
  const { r: t, g: r, b: n } = Ro(e), o = [t, r, n].map((i) => {
    const s = i / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
}
function js(e, t) {
  const r = _s(e), n = _s(t), o = Math.max(r, n), i = Math.min(r, n);
  return (o + 0.05) / (i + 0.05);
}
function Ss(e, t = "#f8fbff", r = "#08111f") {
  return js(e, t) >= js(e, r) ? t : r;
}
function Ms(e, t, r, n, o) {
  const i = (e - t) / (r - t);
  return n + i * (o - n);
}
function wo(e, t = yo, r = Mn, n = zn) {
  const o = Va(e), i = Ro(o), { h: s, s: l, l: d } = Wh(i.r, i.g, i.b), c = t === "dark", f = Ms(r, 0, 100, -16, 18), u = Ms(n, 0, 100, -12, 14), m = o, p = ho(
    s,
    he(l + 6 + f * 0.5, 18, 98),
    he(d + (c ? 10 : -12) - u * 0.2, 16, 78)
  ), g = ve(
    m,
    c ? "#0b1220" : "#ffffff",
    c ? 0.74 : 0.82
  ), x = ho(
    s + 30,
    he(l * 0.84 + f * 0.45, 18, 90),
    he(d + (c ? 4 : -3), 18, 72)
  ), b = ve(
    x,
    c ? "#0b1220" : "#ffffff",
    c ? 0.76 : 0.84
  ), q = ho(
    s + 2,
    he(8 + l * 0.08, 6, 18),
    c ? he(10 + u * 0.34, 7, 18) : he(98 - u * 0.24, 93, 99)
  ), O = ho(
    s + 8,
    he(10 + l * 0.1, 7, 20),
    c ? he(14 + u * 0.38, 10, 23) : he(95 - u * 0.18, 90, 97)
  ), W = ho(
    s,
    he(8 + l * 0.06, 5, 16),
    c ? he(8 + u * 0.24, 5, 14) : he(92 - u * 0.18, 88, 95)
  ), V = ve(O, m, c ? 0.18 : 0.1), J = ve(V, p, 0.32), te = c ? "#e6eefc" : "#0f172a", ie = c ? ve(te, q, 0.45) : ve(te, q, 0.58), Me = ve(m, c ? "#ffffff" : "#0f172a", c ? 0.18 : 0.1), ze = c ? "#3ddc97" : "#138a5b", E = c ? "#f6b73c" : "#b66a00", $e = c ? "#ff6b81" : "#c92a4b", ee = Ss(m), Ge = Ss(x), De = c ? "0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)" : "0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)";
  return {
    seed: o,
    mode: t,
    vividness: he(Math.round(r), 0, 100),
    contrast: he(Math.round(n), 0, 100),
    accent: m,
    accentStrong: p,
    accentSoft: g,
    accentSecondary: x,
    accentSecondarySoft: b,
    surface: q,
    surfaceAlt: O,
    surfaceInset: W,
    border: V,
    borderStrong: J,
    text: te,
    textMuted: ie,
    onAccent: ee,
    onSecondary: Ge,
    focus: Me,
    success: ze,
    warning: E,
    danger: $e,
    shadow: De
  };
}
function Nh(e) {
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
function zs(e, t = document.documentElement) {
  const r = e.mode === "dark", n = r ? `radial-gradient(circle at top left, ${dt(e.accent, 0.14)}, transparent 28%), linear-gradient(180deg, ${ve(e.surface, "#08111f", 0.28)} 0%, ${ve(e.surfaceInset, "#020617", 0.46)} 100%)` : `radial-gradient(circle at top left, ${dt(e.accent, 0.1)}, transparent 26%), linear-gradient(180deg, ${ve(e.surfaceAlt, "#ffffff", 0.34)} 0%, ${ve(e.surface, "#ffffff", 0.14)} 100%)`, o = r ? `radial-gradient(circle at 12% 18%, transparent 0 118px, ${dt(e.accent, 0.08)} 119px 120px, transparent 121px), radial-gradient(circle at 78% 22%, transparent 0 184px, ${dt(e.accentSecondary, 0.06)} 185px 186px, transparent 187px)` : `radial-gradient(circle at 18% 16%, transparent 0 126px, ${dt(e.accent, 0.06)} 127px 128px, transparent 129px), radial-gradient(circle at 82% 18%, transparent 0 168px, ${dt(e.accentSecondary, 0.05)} 169px 170px, transparent 171px)`, i = r ? dt(e.surface, 0.9) : dt(e.surface, 0.94), s = ve(e.surfaceAlt, e.accentSoft, r ? 0.18 : 0.24), l = ve(e.surfaceInset, e.accentSoft, r ? 0.1 : 0.14), d = ve(l, e.borderStrong, r ? 0.26 : 0.22), c = r ? dt(ve(e.surface, e.accentSoft, 0.12), 0.88) : dt(ve(e.surface, e.accentSoft, 0.18), 0.94), f = ve(e.surfaceAlt, e.accentSoft, r ? 0.3 : 0.42), u = ve(e.surfaceInset, e.accentSoft, r ? 0.14 : 0.18), m = ve(e.surfaceInset, r ? "#020617" : "#ffffff", r ? 0.28 : 0.2), p = r ? dt(ve(e.surface, "#020617", 0.18), 0.86) : dt(ve(e.surface, "#ffffff", 0.2), 0.96), g = ve(e.surfaceAlt, e.accentSoft, r ? 0.24 : 0.28), x = dt(e.text, r ? 0.2 : 0.16), b = {
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
    "--efs-state-success": e.success,
    "--efs-state-warning": e.warning,
    "--efs-state-danger": e.danger,
    "--shell-primary": e.accent,
    "--shell-primary-strong": e.accentStrong,
    "--shell-primary-soft": e.accentSoft,
    "--shell-body-bg": n,
    "--shell-overlay": o,
    "--shell-overlay-opacity": r ? "0.76" : "0.54",
    "--shell-panel-bg": i,
    "--shell-panel-solid": e.surface,
    "--shell-panel-solid-subtle": e.surfaceAlt,
    "--shell-panel-solid-muted": e.surfaceInset,
    "--shell-panel": e.surface,
    "--shell-surface": e.surfaceAlt,
    "--shell-soft-bg": s,
    "--shell-inset-bg": l,
    "--shell-inset-strong-bg": d,
    "--shell-nav-bg": c,
    "--shell-hover-bg": f,
    "--shell-row-hover": f,
    "--shell-code-bg": u,
    "--shell-pre-bg": m,
    "--shell-input-bg": p,
    "--shell-input-placeholder": e.textMuted,
    "--shell-shadow": e.shadow,
    "--shell-pill-text": e.onAccent,
    "--shell-nav-text": e.textMuted,
    "--shell-code-text": e.text,
    "--shell-chip-bg": g,
    "--shell-scrollbar": x,
    "--shell-border": e.border,
    "--shell-border-strong": e.borderStrong,
    "--shell-text": e.text,
    "--shell-text-strong": e.text,
    "--shell-muted": e.textMuted
  };
  Object.entries(b).forEach(([q, O]) => t.style.setProperty(q, O)), t.dataset.themeMode = e.mode, t.dataset.theme = e.mode, t.style.colorScheme = e.mode;
}
function Hh() {
  const e = wo(bo, yo, Mn, zn), { subscribe: t, set: r, update: n } = Vc({
    seed: bo,
    mode: yo,
    vividness: Mn,
    contrast: zn,
    palette: e,
    lastAppliedAt: null
  });
  return {
    subscribe: t,
    hydrate() {
      if (typeof window > "u") return;
      const o = window.localStorage.getItem(ia);
      if (o)
        try {
          const i = JSON.parse(o), s = Va(i.seed), l = i.mode === "dark" ? "dark" : "light", d = he(Number(i.vividness ?? Mn), 0, 100), c = he(Number(i.contrast ?? zn), 0, 100), f = wo(s, l, d, c);
          r({
            seed: s,
            mode: l,
            vividness: d,
            contrast: c,
            palette: f,
            lastAppliedAt: typeof i.lastAppliedAt == "number" ? i.lastAppliedAt : null
          });
        } catch {
        }
    },
    reset() {
      const o = wo(bo, yo, Mn, zn), i = {
        seed: bo,
        mode: yo,
        vividness: Mn,
        contrast: zn,
        palette: o,
        lastAppliedAt: null
      };
      typeof window < "u" && window.localStorage.setItem(ia, JSON.stringify(i)), r(i);
    },
    preview(o, i, s, l) {
      return wo(o, i, s, l);
    },
    apply(o, i, s, l) {
      const d = wo(o, i, s, l);
      return n(() => {
        const c = {
          seed: d.seed,
          mode: i,
          vividness: he(s, 0, 100),
          contrast: he(l, 0, 100),
          palette: d,
          lastAppliedAt: Date.now()
        };
        return typeof window < "u" && window.localStorage.setItem(ia, JSON.stringify(c)), c;
      }), d;
    }
  };
}
const jr = Hh();
var Fh = /* @__PURE__ */ Se('<button type="button"> </button>'), Vh = /* @__PURE__ */ Se(
  `<section class="hero-card svelte-1m44pqp"><div class="hero-glow svelte-1m44pqp"></div> <div class="hero-top svelte-1m44pqp"><div class="orb-wrap svelte-1m44pqp"><div class="theme-orb svelte-1m44pqp"></div></div> <div class="hero-copy svelte-1m44pqp"><h3 class="svelte-1m44pqp">Seed color</h3> <p class="svelte-1m44pqp">Pick one color and let the panel derive secondary accent, surfaces, borders, and
                    readable text automatically.</p></div></div> <div class="color-input-row svelte-1m44pqp"><label class="color-chip svelte-1m44pqp"><input type="color" aria-label="Choose seed color" class="svelte-1m44pqp"/> <span class="svelte-1m44pqp"></span></label> <label class="hex-field svelte-1m44pqp"><span class="svelte-1m44pqp">Hex</span> <input type="text" maxlength="7" spellcheck="false" class="svelte-1m44pqp"/></label> <div class="mode-toggle svelte-1m44pqp" role="tablist" aria-label="Theme mode"><button type="button">Light</button> <button type="button">Dark</button></div></div> <div class="slider-grid svelte-1m44pqp"><label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Vividness</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label> <label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Contrast</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label></div> <div class="swatch-row svelte-1m44pqp"><button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Accent</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Hover</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Secondary</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Surface</small></button></div></section> <section class="preview-shell svelte-1m44pqp"><div class="preview-topbar svelte-1m44pqp"><div class="preview-dots svelte-1m44pqp"><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span></div> <div class="preview-search svelte-1m44pqp">Search routes, layouts, content…</div> <button type="button" class="preview-ghost svelte-1m44pqp">Manage</button></div> <div class="preview-body svelte-1m44pqp"><aside class="preview-sidebar svelte-1m44pqp"><button type="button" class="sidebar-item active svelte-1m44pqp">Explorer</button> <button type="button" class="sidebar-item svelte-1m44pqp">Content</button> <button type="button" class="sidebar-item svelte-1m44pqp">Layouts</button> <button type="button" class="sidebar-item svelte-1m44pqp">Deployments</button></aside> <div class="preview-content svelte-1m44pqp"><div class="metric-row svelte-1m44pqp"><article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Primary Accent</small> <strong class="svelte-1m44pqp"> </strong></article> <article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Secondary Accent</small> <strong class="svelte-1m44pqp"> </strong></article></div> <article class="callout-card svelte-1m44pqp"><div><small class="svelte-1m44pqp">Live Preview</small> <h4 class="svelte-1m44pqp">Shell-friendly theme tokens</h4> <p class="svelte-1m44pqp">This palette stays readable across surfaces while keeping the accent system
                        expressive enough for a real SaaS product.</p></div> <div class="callout-actions svelte-1m44pqp"><button type="button" class="primary-btn svelte-1m44pqp">Primary action</button> <button type="button" class="secondary-btn svelte-1m44pqp">Secondary</button></div></article></div></div></section>`,
  1
), Gh = /* @__PURE__ */ Se('<button type="button" class="preset-card svelte-1m44pqp"><div class="preset-band svelte-1m44pqp"><span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span></div> <div class="preset-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></button>'), Uh = /* @__PURE__ */ Se('<section class="preset-grid svelte-1m44pqp"></section>'), Yh = /* @__PURE__ */ Se('<div class="token-row svelte-1m44pqp"><div class="token-swatch svelte-1m44pqp"></div> <div class="token-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></div>'), Zh = /* @__PURE__ */ Se('<section class="token-list svelte-1m44pqp"></section>'), Xh = /* @__PURE__ */ Se('<div class="theme-panel svelte-1m44pqp" role="dialog" aria-label="Theme Studio"><header class="panel-status-row svelte-1m44pqp"><div class="panel-status-copy svelte-1m44pqp"><span class="panel-eyebrow svelte-1m44pqp"> </span> <h2 class="panel-title svelte-1m44pqp">Adaptive theme engine</h2> <p class="panel-summary svelte-1m44pqp"> </p></div> <span class="mode-pill svelte-1m44pqp"> </span></header> <div class="studio-tabs svelte-1m44pqp"></div> <div class="studio-scroll svelte-1m44pqp"><!> <!> <!></div> <footer class="panel-actions svelte-1m44pqp"><button type="button" class="ghost-btn svelte-1m44pqp">Reset</button> <button type="button" class="ghost-btn svelte-1m44pqp"> </button> <button type="button" class="primary-btn svelte-1m44pqp">Apply Theme</button></footer></div>'), Kh = /* @__PURE__ */ Se('<div class="theme-studio-window svelte-1m44pqp"><!></div>');
const Jh = {
  hash: "svelte-1m44pqp",
  code: `:host {position:relative;z-index:12060;isolation:isolate;}.theme-studio-window.svelte-1m44pqp {position:fixed;inset:0;z-index:12060;pointer-events:none;isolation:isolate;}.theme-studio-window.svelte-1m44pqp .window-shell {pointer-events:auto;--window-panel: var(--efs-window-theme-panel, var(--shell-panel-solid, #ffffff));--window-surface: var(--efs-window-theme-surface, var(--shell-panel-solid-subtle, #f8fafc));--window-border: var(--efs-window-theme-border, var(--shell-border, #dbe4f0));--window-control-size: 1.85rem;--window-aux-width: 1.92rem;--window-system-width: 2rem;--window-control-gap: 0.08rem;--window-control-radius: 9px;}.theme-studio-window.svelte-1m44pqp .window-chrome {min-height:2.25rem;padding-block:0.22rem;padding-inline:0.45rem 0.4rem;gap:0.45rem;}.theme-studio-window.svelte-1m44pqp .window-tools {gap:0.1rem;}.theme-studio-window.svelte-1m44pqp .window-tools .window-button:not(:first-child) {display:none;}.theme-studio-window.svelte-1m44pqp .system-controls .window-button:not(.close-button) {display:none;}.theme-studio-window.svelte-1m44pqp .window-title {font:var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.04em;}.theme-panel.svelte-1m44pqp {display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);font-family:"Segoe UI Variable", "Segoe UI", system-ui, sans-serif;}.panel-status-row.svelte-1m44pqp {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:1rem 1rem 0.9rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 85%), transparent 42%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 78%),\r
      var(--preview-surface-alt, #f7faff);}.panel-status-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;min-width:0;}.panel-eyebrow.svelte-1m44pqp {color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.4 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.12em;text-transform:uppercase;}.panel-title.svelte-1m44pqp {margin:0;font:var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--preview-text, #0f172a);}.panel-summary.svelte-1m44pqp {margin:0;color:var(--preview-text, #0f172a);font:var(--efs-font-body-sm, 13px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.mode-pill.svelte-1m44pqp {display:inline-flex;align-items:center;min-height:2rem;padding:0 0.75rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 4%);border-radius:999px;background:color-mix(in srgb, var(--preview-surface, #fff), var(--preview-accent, #5b8cff) 6%);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;color:var(--preview-text, #0f172a);}.studio-tabs.svelte-1m44pqp {display:flex;background:var(--preview-surface-inset, #eef3f8);border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);padding:0 0.75rem;gap:0.25rem;flex-shrink:0;}.studio-tab.svelte-1m44pqp {padding:0.75rem 1rem;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 0.18s ease;}.studio-tab.svelte-1m44pqp:hover,\r
  .studio-tab.active.svelte-1m44pqp {color:var(--preview-text, #0f172a);}.studio-tab.active.svelte-1m44pqp {border-bottom-color:var(--preview-accent, #5b8cff);}.studio-scroll.svelte-1m44pqp {flex:1;overflow-y:auto;background:var(--preview-surface-alt, #f8fafc);padding:1rem;display:flex;flex-direction:column;gap:1rem;}.hero-card.svelte-1m44pqp,\r
  .preview-shell.svelte-1m44pqp,\r
  .preset-card.svelte-1m44pqp,\r
  .token-row.svelte-1m44pqp {border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);border-radius:18px;box-shadow:var(--preview-shadow, 0 18px 60px rgba(15, 23, 42, 0.12));}.hero-card.svelte-1m44pqp {position:relative;overflow:hidden;padding:1rem;background:radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 80%), transparent 34%),\r
      radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--preview-secondary, #8b5cf6), transparent 86%), transparent 28%),\r
      var(--preview-surface, #ffffff);}.hero-glow.svelte-1m44pqp {position:absolute;inset:-10% 10% auto auto;width:10rem;height:10rem;border-radius:999px;background:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 76%);filter:blur(50px);opacity:0.9;pointer-events:none;}.hero-top.svelte-1m44pqp {position:relative;display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:center;margin-bottom:1rem;}.orb-wrap.svelte-1m44pqp {width:4.5rem;height:4.5rem;display:grid;place-items:center;border-radius:1.25rem;background:color-mix(in srgb, var(--preview-accent-soft, #e8efff), transparent 10%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 25%);}.theme-orb.svelte-1m44pqp {width:3.1rem;height:3.1rem;border-radius:999px;background:radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.88), transparent 22%),\r
      linear-gradient(145deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.45),\r
      0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 64%);}.hero-copy.svelte-1m44pqp h3:where(.svelte-1m44pqp) {margin:0 0 0.2rem;font-size:1rem;line-height:1.2;}.hero-copy.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.82rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.color-input-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;margin-bottom:0.9rem;align-items:center;}.color-chip.svelte-1m44pqp {width:3rem;height:3rem;border-radius:1rem;padding:0.2rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface-alt, #f8fafc);cursor:pointer;display:block;}.color-chip.svelte-1m44pqp input:where(.svelte-1m44pqp) {position:absolute;opacity:0;pointer-events:none;}.color-chip.svelte-1m44pqp span:where(.svelte-1m44pqp) {display:block;width:100%;height:100%;border-radius:0.8rem;background:linear-gradient(135deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));}.hex-field.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;}.hex-field.svelte-1m44pqp span:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp),\r
  .preview-search.svelte-1m44pqp {min-height:2.7rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);border-radius:0.95rem;padding:0 0.9rem;font:inherit;outline:none;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp):focus {border-color:var(--preview-accent, #5b8cff);box-shadow:0 0 0 3px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 82%);}.mode-toggle.svelte-1m44pqp {display:inline-flex;padding:0.2rem;border-radius:999px;background:var(--preview-surface-inset, #eef3f8);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);gap:0.2rem;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp),\r
  .ghost-btn.svelte-1m44pqp,\r
  .primary-btn.svelte-1m44pqp,\r
  .secondary-btn.svelte-1m44pqp,\r
  .preview-ghost.svelte-1m44pqp,\r
  .sidebar-item.svelte-1m44pqp,\r
  .swatch-card.svelte-1m44pqp,\r
  .preset-card.svelte-1m44pqp {font:inherit;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp) {min-width:4.35rem;min-height:2.35rem;padding:0 0.85rem;border-radius:999px;border:none;background:transparent;color:var(--preview-text-muted, #64748b);cursor:pointer;}.mode-toggle.svelte-1m44pqp button.active:where(.svelte-1m44pqp) {background:var(--preview-accent, #5b8cff);color:var(--preview-on-accent, #ffffff);}.slider-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;margin-bottom:0.9rem;}.slider-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.55rem;padding:0.8rem 0.9rem;border-radius:1rem;background:color-mix(in srgb, var(--preview-surface-alt, #f8fafc), var(--preview-accent, #5b8cff) 4%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);}.slider-label-row.svelte-1m44pqp {display:flex;justify-content:space-between;gap:0.75rem;font-size:0.82rem;}input[type='range'].svelte-1m44pqp {width:100%;accent-color:var(--preview-accent, #5b8cff);}.swatch-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:0.6rem;}.swatch-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.4rem;padding:0.65rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);color:var(--preview-text, #0f172a);cursor:default;}.swatch.svelte-1m44pqp {height:2.35rem;border-radius:0.8rem;border:1px solid rgba(255, 255, 255, 0.28);}.swatch-card.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.74rem;}.preview-shell.svelte-1m44pqp {overflow:hidden;background:var(--preview-surface, #fff);}.preview-topbar.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;align-items:center;padding:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface-alt, #f8fafc);}.preview-dots.svelte-1m44pqp {display:flex;gap:0.35rem;}.preview-dots.svelte-1m44pqp span:where(.svelte-1m44pqp) {width:0.62rem;height:0.62rem;border-radius:999px;background:var(--preview-border-strong, #c7d4e6);}.preview-search.svelte-1m44pqp {display:flex;align-items:center;color:var(--preview-text-muted, #64748b);font-size:0.82rem;}.preview-ghost.svelte-1m44pqp,\r
  .ghost-btn.svelte-1m44pqp,\r
  .secondary-btn.svelte-1m44pqp {min-height:2.5rem;padding:0 0.9rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #fff);color:var(--preview-text, #0f172a);cursor:pointer;}.preview-body.svelte-1m44pqp {display:grid;grid-template-columns:11rem minmax(0, 1fr);min-height:18rem;}.preview-sidebar.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.45rem;padding:0.9rem;background:var(--preview-surface-inset, #eef3f8);border-right:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.sidebar-item.svelte-1m44pqp {min-height:2.45rem;border-radius:0.9rem;border:1px solid transparent;background:transparent;color:var(--preview-text-muted, #64748b);text-align:left;padding:0 0.85rem;cursor:pointer;}.sidebar-item.active.svelte-1m44pqp {background:var(--preview-accent-soft, #e8efff);border-color:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 75%);color:var(--preview-text, #0f172a);}.preview-content.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.85rem;padding:0.95rem;background:var(--preview-surface, #fff);}.metric-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;}.metric-card.svelte-1m44pqp,\r
  .callout-card.svelte-1m44pqp {border-radius:1rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);}.metric-card.svelte-1m44pqp {padding:0.85rem 0.95rem;}.metric-card.svelte-1m44pqp small:where(.svelte-1m44pqp),\r
  .callout-card.svelte-1m44pqp small:where(.svelte-1m44pqp),\r
  .token-copy.svelte-1m44pqp small:where(.svelte-1m44pqp),\r
  .preset-copy.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);}.metric-card.svelte-1m44pqp strong:where(.svelte-1m44pqp) {display:block;margin-top:0.25rem;}.callout-card.svelte-1m44pqp {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:1rem;align-items:center;padding:1rem;}.callout-card.svelte-1m44pqp h4:where(.svelte-1m44pqp) {margin:0.15rem 0 0.35rem;font-size:1rem;}.callout-card.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.83rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.callout-actions.svelte-1m44pqp {display:flex;gap:0.6rem;align-items:center;}.primary-btn.svelte-1m44pqp {min-height:2.6rem;padding:0 1rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-accent-strong, #3b62db), transparent 18%);background:linear-gradient(\r
      180deg,\r
      color-mix(in srgb, var(--preview-accent, #5b8cff), white 8%),\r
      var(--preview-accent, #5b8cff)\r
    );color:var(--preview-on-accent, #ffffff);cursor:pointer;box-shadow:0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 72%);}.secondary-btn.svelte-1m44pqp {background:color-mix(in srgb, var(--preview-secondary-soft, #ede9fe), var(--preview-surface, #fff) 8%);}.preset-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.9rem;}.preset-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;padding:0.8rem;background:var(--preview-surface, #fff);cursor:pointer;text-align:left;}.preset-band.svelte-1m44pqp {display:grid;grid-template-columns:repeat(3, 1fr);gap:0.45rem;}.preset-band.svelte-1m44pqp span:where(.svelte-1m44pqp) {height:3rem;border-radius:0.9rem;}.preset-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.18rem;}.token-list.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;}.token-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.8rem;align-items:center;padding:0.8rem;background:var(--preview-surface, #fff);}.token-swatch.svelte-1m44pqp {width:2.7rem;height:2.7rem;border-radius:0.95rem;border:1px solid rgba(255, 255, 255, 0.28);}.token-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.12rem;}.panel-actions.svelte-1m44pqp {display:flex;justify-content:flex-end;gap:0.65rem;padding:0.9rem 1rem 1rem;border-top:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface, #fff);}\r
\r
  @media (max-width: 47.99rem) {.panel-status-row.svelte-1m44pqp,\r
    .hero-top.svelte-1m44pqp,\r
    .color-input-row.svelte-1m44pqp,\r
    .preview-body.svelte-1m44pqp,\r
    .callout-card.svelte-1m44pqp {grid-template-columns:1fr;display:flex;flex-direction:column;}.slider-grid.svelte-1m44pqp,\r
    .metric-row.svelte-1m44pqp,\r
    .preset-grid.svelte-1m44pqp,\r
    .swatch-row.svelte-1m44pqp {grid-template-columns:1fr;}.preview-sidebar.svelte-1m44pqp {border-right:0;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.mode-pill.svelte-1m44pqp {align-self:flex-start;}.panel-actions.svelte-1m44pqp {flex-wrap:wrap;}\r
  }`
};
function Qh(e, t) {
  Mi(t, !0), Na(e, Jh);
  const r = 468, n = 696, o = 16, i = 12, s = 12060;
  let l = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G("normal"), f = /* @__PURE__ */ G("theme"), u = /* @__PURE__ */ G("toolbar"), m = /* @__PURE__ */ G(null), p = /* @__PURE__ */ G(null), g = /* @__PURE__ */ G(null), x = /* @__PURE__ */ G(i), b = /* @__PURE__ */ G(i), q = /* @__PURE__ */ G(r), O = /* @__PURE__ */ G(n), W = /* @__PURE__ */ G("#5b8cff"), V = /* @__PURE__ */ G("light"), J = /* @__PURE__ */ G(66), te = /* @__PURE__ */ G(56), ie = /* @__PURE__ */ G("Copy CSS"), Me = /* @__PURE__ */ G("One seed color drives the whole palette.");
  const ze = [
    { id: "theme", label: "Theme" },
    { id: "presets", label: "Presets" },
    { id: "tokens", label: "Tokens" }
  ], E = /* @__PURE__ */ B(() => jr.preview(a(W), a(V), a(J), a(te)));
  function $e(k) {
    if (!k || typeof k != "object")
      return null;
    const T = k, X = Number(T.left), N = Number(T.top), ae = Number(T.right), Ce = Number(T.bottom), vt = Number(T.width), tt = Number(T.height);
    return [X, N, ae, Ce, vt, tt].every(Number.isFinite) ? { left: X, top: N, right: ae, bottom: Ce, width: vt, height: tt } : null;
  }
  function ee() {
    return a(p) ? a(p) : a(m) ? a(m).getBoundingClientRect() : null;
  }
  function Ge(k) {
    if (!k)
      return [];
    const T = [k], X = /* @__PURE__ */ new Set();
    for (; T.length > 0; ) {
      const N = T.shift();
      if (!(!N || X.has(N))) {
        X.add(N);
        try {
          const ae = N.parent;
          ae && ae !== N && !X.has(ae) && T.push(ae);
        } catch {
        }
        try {
          for (let ae = 0; ae < N.frames.length; ae += 1) {
            const Ce = N.frames[ae];
            Ce && !X.has(Ce) && T.push(Ce);
          }
        } catch {
        }
      }
    }
    return [...X];
  }
  function De(k) {
    if (typeof window > "u")
      return;
    let T = window;
    try {
      T = window.top ?? window;
    } catch {
      T = window;
    }
    const X = Ge(T), N = X.find((ae) => ae === T) ?? X[0] ?? window;
    try {
      N.document.dispatchEvent(new N.CustomEvent("efsdb:theme-studio:applied", { detail: { palette: k } }));
      return;
    } catch {
    }
    zs(k);
  }
  function ir(k = a(u)) {
    const T = k === "toolbar" ? ["toolbar-theme-trigger", "fab-theme-trigger"] : ["fab-theme-trigger", "toolbar-theme-trigger"];
    for (const X of T) {
      const N = document.getElementById(X);
      if (N instanceof HTMLElement) {
        y(m, N, !0), y(u, X === "fab-theme-trigger" ? "fab" : "toolbar", !0);
        return;
      }
    }
    y(m, null);
  }
  function Et() {
    if (typeof window > "u") return;
    const k = ee();
    if (!k) return;
    const T = Math.min(r, Math.max(360, window.innerWidth - i * 2)), X = Math.min(n, Math.max(420, window.innerHeight - i * 2));
    let N = k.right - T, ae = a(u) === "toolbar" ? k.bottom + o : k.top - X - o;
    N = Math.min(Math.max(i, N), Math.max(i, window.innerWidth - T - i)), ae = Math.min(Math.max(i, ae), Math.max(i, window.innerHeight - X - i)), y(q, Math.round(T), !0), y(O, Math.round(X), !0), y(x, Math.round(N), !0), y(b, Math.round(ae), !0);
  }
  function br(k) {
    var X;
    const T = (X = k == null ? void 0 : k.detail) == null ? void 0 : X.source;
    return T === "toolbar" || T === "fab" ? T : null;
  }
  function mn(k) {
    var T;
    return $e((T = k == null ? void 0 : k.detail) == null ? void 0 : T.anchorRect);
  }
  function et(k) {
    const T = br(k) ?? a(u), X = a(u);
    if (y(u, T, !0), y(p, mn(k), !0), a(c) === "minimized" && y(c, "normal"), a(d)) {
      y(l, !0);
      return;
    }
    if (a(l) && X === T) {
      ar();
      return;
    }
    a(p) ? y(m, null) : ir(T), Et(), y(l, !0);
  }
  function ar() {
    y(l, !1);
  }
  function Cr() {
    y(d, !a(d));
  }
  function Ir(k) {
    if (!a(l) || a(d)) return;
    const T = k.composedPath();
    a(g) && T.includes(a(g)) || a(m) && T.includes(a(m)) || ar();
  }
  function Fo() {
    !a(l) || a(d) || ar();
  }
  function ge(k) {
    const T = k.trim().replace("#", "");
    return /^[0-9a-fA-F]{6}$/.test(T) ? `#${T.toLowerCase()}` : /^[0-9a-fA-F]{3}$/.test(T) ? `#${T.split("").map((X) => `${X}${X}`).join("").toLowerCase()}` : a(W);
  }
  async function Vo() {
    if (!(navigator != null && navigator.clipboard)) {
      y(ie, "Copy CSS");
      return;
    }
    await navigator.clipboard.writeText(Nh(a(E))), y(ie, "Copied"), y(Me, "CSS variables copied to clipboard."), setTimeout(
      () => {
        y(ie, "Copy CSS");
      },
      1600
    );
  }
  function Lr() {
    const k = jr.apply(a(W), a(V), a(J), a(te));
    De(k), y(Me, `Applied ${k.seed} in ${k.mode} mode.`);
  }
  function gt() {
    jr.reset();
    const k = jr.preview("#5b8cff", "light", 66, 56);
    y(W, k.seed, !0), y(V, k.mode, !0), y(J, k.vividness, !0), y(te, k.contrast, !0), De(k), y(Me, "Theme reset to the default shell palette.");
  }
  function gn(k) {
    y(W, k.seed, !0), y(V, k.mode, !0), y(J, k.vividness, !0), y(te, k.contrast, !0), y(f, "theme"), y(Me, `${k.label} loaded.`);
  }
  function Br() {
    jr.hydrate();
    const k = Gc(jr);
    if (y(W, k.seed, !0), y(J, k.vividness, !0), y(te, k.contrast, !0), typeof window < "u" && typeof window.getEfsdbTheme == "function") {
      const T = window.getEfsdbTheme();
      y(V, T === "dark" ? "dark" : "light", !0);
      return;
    }
    y(V, k.mode, !0), zs(k.palette);
  }
  function Pt(k) {
    k && k.key && k.key !== "efsdb-theme" && k.key !== "efsdb:theme-studio" || Br();
  }
  Al(() => (document.addEventListener("efsdb:theme-studio:toggle", et), document.addEventListener("efsdb:theme-studio:frame-pointerdown", Fo), document.addEventListener("pointerdown", Ir, !0), window.addEventListener("resize", Et), window.addEventListener("efsdb-themechange", Pt), window.addEventListener("efsdb-theme-palettechange", Pt), window.addEventListener("storage", Pt), Br(), ir(a(u)), Et(), () => {
    document.removeEventListener("efsdb:theme-studio:toggle", et), document.removeEventListener("efsdb:theme-studio:frame-pointerdown", Fo), document.removeEventListener("pointerdown", Ir, !0), window.removeEventListener("resize", Et), window.removeEventListener("efsdb-themechange", Pt), window.removeEventListener("efsdb-theme-palettechange", Pt), window.removeEventListener("storage", Pt);
  }));
  var Gn = Ml(), Go = $n(Gn);
  {
    var Uo = (k) => {
      var T = Kh(), X = $(T);
      Dl(X, {
        title: "Theme Studio",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 18,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return a(d);
        },
        zIndex: s,
        onClose: ar,
        onPinToggle: Cr,
        get state() {
          return a(c);
        },
        set state(N) {
          y(c, N, !0);
        },
        get x() {
          return a(x);
        },
        set x(N) {
          y(x, N, !0);
        },
        get y() {
          return a(b);
        },
        set y(N) {
          y(b, N, !0);
        },
        get width() {
          return a(q);
        },
        set width(N) {
          y(q, N, !0);
        },
        get height() {
          return a(O);
        },
        set height(N) {
          y(O, N, !0);
        },
        children: (N, ae) => {
          var Ce = Xh(), vt = $(Ce), tt = $(vt), Un = $(tt), Yo = Re(Un, !0), yr = z(Un, 4), Or = Re(yr, !0);
          _(tt);
          var Vt = z(tt, 2), sr = Re(Vt, !0);
          _(vt);
          var vn = z(vt, 2);
          So(vn, 21, () => ze, (Be) => Be.id, (Be, xe) => {
            var Ie = Fh();
            let se;
            var Ne = Re(Ie, !0);
            Ee(() => {
              se = me(Ie, 1, "studio-tab svelte-1m44pqp", null, se, { active: a(f) === a(xe).id }), Le(Ne, a(xe).label);
            }), be("click", Ie, () => y(f, a(xe).id, !0)), ce(Be, Ie);
          }), _(vn);
          var bn = z(vn, 2), Ue = $(bn);
          {
            var Zo = (Be) => {
              var xe = Vh(), Ie = $n(xe), se = z($(Ie), 4), Ne = $(se), Rt = $(Ne);
              ni(Rt), Xr(2), _(Ne);
              var bt = z(Ne, 2), At = z($(bt), 2);
              ni(At), _(bt);
              var xr = z(bt, 2), Ct = $(xr);
              let Gt;
              var R = z(Ct, 2);
              let Dr;
              _(xr), _(se);
              var oe = z(se, 2), ke = $(oe), Nr = $(ke), Xn = z($(Nr), 2), Ko = Re(Xn, !0);
              _(Nr);
              var Kn = z(Nr, 2);
              ni(Kn), _(ke);
              var Jn = z(ke, 2), yt = $(Jn), Hr = z($(yt), 2), Fr = Re(Hr, !0);
              _(yt);
              var Vr = z(yt, 2);
              ni(Vr), _(Jn), _(oe);
              var Gr = z(oe, 2), Qn = $(Gr), Ur = $(Qn);
              Xr(2), _(Qn);
              var xt = z(Qn, 2), Yr = $(xt);
              Xr(2), _(xt);
              var Zr = z(xt, 2), eo = $(Zr);
              Xr(2), _(Zr);
              var Ut = z(Zr, 2), to = $(Ut);
              Xr(2), _(Ut), _(Gr), _(Ie);
              var ro = z(Ie, 2), no = z($(ro), 2), oo = z($(no), 2), xn = $(oo), io = $(xn), kn = z($(io), 2), Ii = Re(kn, !0);
              _(io);
              var ao = z(io, 2), Li = z($(ao), 2), Jo = Re(Li, !0);
              _(ao), _(xn), Xr(2), _(oo), _(no), _(ro), Ee(() => {
                Dc(At, a(W)), Gt = me(Ct, 1, "svelte-1m44pqp", null, Gt, { active: a(V) === "light" }), Dr = me(R, 1, "svelte-1m44pqp", null, Dr, { active: a(V) === "dark" }), Le(Ko, a(J)), Le(Fr, a(te)), pt(Ur, `background:${a(E).accent}`), pt(Yr, `background:${a(E).accentStrong}`), pt(eo, `background:${a(E).accentSecondary}`), pt(to, `background:${a(E).surfaceAlt}`), Le(Ii, a(E).accent), Le(Jo, a(E).accentSecondary);
              }), Qi(Rt, () => a(W), (lr) => y(W, lr)), be("input", At, (lr) => {
                const Qo = lr.currentTarget;
                y(W, ge(Qo.value), !0), Qo.value = a(W);
              }), be("click", Ct, () => y(V, "light")), be("click", R, () => y(V, "dark")), Qi(Kn, () => a(J), (lr) => y(J, lr)), Qi(Vr, () => a(te), (lr) => y(te, lr)), ce(Be, xe);
            };
            _e(Ue, (Be) => {
              a(f) === "theme" && Be(Zo);
            });
          }
          var Yn = z(Ue, 2);
          {
            var Zn = (Be) => {
              var xe = Uh();
              So(xe, 21, () => Oh, (Ie) => Ie.id, (Ie, se) => {
                var Ne = Gh(), Rt = $(Ne), bt = $(Rt), At = z(bt, 2), xr = z(At, 2);
                _(Rt);
                var Ct = z(Rt, 2), Gt = $(Ct), R = Re(Gt, !0), Dr = z(Gt, 2), oe = Re(Dr);
                _(Ct), _(Ne), Ee(
                  (ke, Nr) => {
                    pt(bt, `background:${a(se).seed}`), pt(At, ke), pt(xr, Nr), Le(R, a(se).label), Le(oe, `${a(se).seed ?? ""} · ${a(se).mode ?? ""}`);
                  },
                  [
                    () => `background:${jr.preview(a(se).seed, a(se).mode, a(se).vividness, a(se).contrast).accentSecondary}`,
                    () => `background:${jr.preview(a(se).seed, a(se).mode, a(se).vividness, a(se).contrast).surfaceAlt}`
                  ]
                ), be("click", Ne, () => gn(a(se))), ce(Ie, Ne);
              }), _(xe), ce(Be, xe);
            };
            _e(Yn, (Be) => {
              a(f) === "presets" && Be(Zn);
            });
          }
          var Pi = z(Yn, 2);
          {
            var Ri = (Be) => {
              var xe = Zh();
              So(
                xe,
                21,
                () => [
                  ["--accent", a(E).accent],
                  ["--accent-strong", a(E).accentStrong],
                  ["--accent-soft", a(E).accentSoft],
                  ["--accent-secondary", a(E).accentSecondary],
                  [
                    "--accent-secondary-soft",
                    a(E).accentSecondarySoft
                  ],
                  ["--surface", a(E).surface],
                  ["--surface-alt", a(E).surfaceAlt],
                  ["--surface-inset", a(E).surfaceInset],
                  ["--border", a(E).border],
                  ["--border-strong", a(E).borderStrong],
                  ["--text", a(E).text],
                  ["--text-muted", a(E).textMuted]
                ],
                (Ie) => Ie[0],
                (Ie, se) => {
                  var Ne = Yh(), Rt = $(Ne), bt = z(Rt, 2), At = $(bt), xr = Re(At, !0), Ct = z(At, 2), Gt = Re(Ct, !0);
                  _(bt), _(Ne), Ee(() => {
                    pt(Rt, `background:${a(se)[1]}`), Le(xr, a(se)[0]), Le(Gt, a(se)[1]);
                  }), ce(Ie, Ne);
                }
              ), _(xe), ce(Be, xe);
            };
            _e(Pi, (Be) => {
              a(f) === "tokens" && Be(Ri);
            });
          }
          _(bn);
          var Wr = z(bn, 2), Xo = $(Wr), yn = z(Xo, 2), Ai = Re(yn, !0), Ci = z(yn, 2);
          _(Wr), _(Ce), Ee(() => {
            pt(Ce, `--preview-accent:${a(E).accent};
                --preview-accent-strong:${a(E).accentStrong};
                --preview-accent-soft:${a(E).accentSoft};
                --preview-secondary:${a(E).accentSecondary};
                --preview-secondary-soft:${a(E).accentSecondarySoft};
                --preview-surface:${a(E).surface};
                --preview-surface-alt:${a(E).surfaceAlt};
                --preview-surface-inset:${a(E).surfaceInset};
                --preview-border:${a(E).border};
                --preview-border-strong:${a(E).borderStrong};
                --preview-text:${a(E).text};
                --preview-text-muted:${a(E).textMuted};
                --preview-on-accent:${a(E).onAccent};
                --preview-shadow:${a(E).shadow};`), Le(Yo, a(u) === "toolbar" ? "Toolbar launch" : "Fab launch"), Le(Or, a(Me)), re(Vt, "data-mode", a(V)), Le(sr, a(V) === "dark" ? "Dark mode" : "Light mode"), Le(Ai, a(ie));
          }), be("click", Xo, gt), be("click", yn, Vo), be("click", Ci, Lr), ce(N, Ce);
        },
        $$slots: { default: !0 }
      }), _(T), ja(T, (N) => y(g, N), () => a(g)), ce(k, T);
    };
    _e(Go, (k) => {
      a(l) && k(Uo);
    });
  }
  ce(e, Gn), zi();
}
Sl(["click", "input"]);
customElements.define("efsdb-theme-studio", Ha(Qh, {}, [], [], { mode: "open" }));
export {
  Qh as ThemeStudio
};
