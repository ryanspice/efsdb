var Rl = Object.defineProperty;
var ga = (e) => {
  throw TypeError(e);
};
var $l = (e, t, r) => t in e ? Rl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var X = (e, t, r) => $l(e, typeof t != "symbol" ? t + "" : t, r), Li = (e, t, r) => t.has(e) || ga("Cannot " + r);
var c = (e, t, r) => (Li(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), z = (e, t, r, n) => (Li(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), T = (e, t, r) => (Li(e, t, "access private method"), r);
var Aa;
typeof window < "u" && ((Aa = window.__svelte ?? (window.__svelte = {})).v ?? (Aa.v = /* @__PURE__ */ new Set())).add("5");
const Cl = 1, Al = 2, La = 4, Il = 8, Bl = 16, Ll = 1, Ol = 4, Wl = 8, Dl = 16, Nl = 1, Hl = 2, Oa = "[", mo = "[!", pa = "[?", go = "]", Kt = {}, me = Symbol("uninitialized"), Fl = "http://www.w3.org/1999/xhtml", Wa = !1;
var Da = Array.isArray, Vl = Array.prototype.indexOf, vn = Array.prototype.includes, mi = Array.from, ri = Object.keys, bn = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, Ul = Object.prototype, Yl = Array.prototype, Na = Object.getPrototypeOf, va = Object.isExtensible;
const Ha = () => {
};
function Zl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fa() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const qe = 2, Nr = 4, gi = 8, Va = 1 << 24, ut = 16, gt = 32, Bt = 64, Yi = 128, po = 256, mt = 512, ge = 1024, he = 2048, rt = 4096, Re = 8192, xe = 16384, yr = 32768, yn = 1 << 25, vr = 65536, ni = 1 << 17, Xl = 1 << 18, kr = 1 << 19, Kl = 1 << 20, xt = 1 << 25, ii = 1 << 21, Rr = 1 << 22, Zt = 1 << 23, un = Symbol("$state"), Ga = Symbol("component"), Ua = Symbol("legacy props"), Jl = Symbol(""), Kn = Symbol("attributes"), Zi = Symbol("class"), Xi = Symbol("style"), an = Symbol("text"), Pn = new class extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "StaleReactionError");
    X(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ia;
const Ql = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ia = globalThis.document) != null && Ia.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), pi = 3, En = 8;
function ed() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function vi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function td() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let N = !1;
function At(e) {
  N = e;
}
let D;
function Oe(e) {
  if (e === null)
    throw vi(), Kt;
  return D = e;
}
function Rn() {
  return Oe(/* @__PURE__ */ St(D));
}
function K(e) {
  if (N) {
    if (/* @__PURE__ */ St(D) !== null)
      throw vi(), Kt;
    D = e;
  }
}
function rd(e = 1) {
  if (N) {
    for (var t = e, r = D; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ St(r);
    D = r;
  }
}
function oi(e = !0) {
  for (var t = 0, r = D; ; ) {
    if (r.nodeType === En) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === go) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Oa || n === mo || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ St(r)
    );
    e && r.remove(), r = i;
  }
}
function vo(e) {
  if (!e || e.nodeType !== En)
    throw vi(), Kt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ya(e) {
  return e === this.v;
}
function nd(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Za(e) {
  return !nd(e, this.v);
}
function id(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function od() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ad(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function sd(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ld() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function dd(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function wd(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ud() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function md() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let pd = !1, je = null;
function Hr(e) {
  je = e;
}
function bi(e, t = !1, r) {
  je = {
    p: je,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      I
    ),
    l: null
  };
}
function yi(e) {
  var t = (
    /** @type {ComponentContext} */
    je
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ps(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, je = t.p, bo(e);
}
function bo(e = {}) {
  return bn(e, Ga, { value: !0 }), e;
}
function Xa() {
  return !0;
}
let ar = [];
function Ka() {
  var e = ar;
  ar = [], Zl(e);
}
function It(e) {
  if (ar.length === 0 && !fn) {
    var t = ar;
    queueMicrotask(() => {
      t === ar && Ka();
    });
  }
  ar.push(e);
}
function vd() {
  for (; ar.length > 0; )
    Ka();
}
const bd = -7169;
function oe(e, t) {
  e.f = e.f & bd | t;
}
function yo(e) {
  (e.f & mt) !== 0 || e.deps === null ? oe(e, ge) : oe(e, rt);
}
function Ja(e, t, r) {
  (e.f & he) !== 0 ? t.add(e) : (e.f & rt) !== 0 && r.add(e), oe(e, ge);
}
function $n(e) {
  var t = L, r = I;
  it(null), qt(null);
  try {
    return e();
  } finally {
    it(t), qt(r);
  }
}
function yd(e, t, r, n) {
  const i = kn;
  var o = e.filter((f) => !f.settled), a = t.map(i);
  if (r.length === 0 && o.length === 0) {
    n(a);
    return;
  }
  var s = (
    /** @type {Effect} */
    I
  ), d = kd(), w = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((f) => f.promise)) : null;
  function u(f) {
    if ((s.f & xe) === 0) {
      d();
      try {
        n([...a, ...f]);
      } catch (p) {
        kt(p, s);
      }
      ai();
    }
  }
  var m = Qa();
  if (r.length === 0) {
    w.then(() => u([])).finally(m);
    return;
  }
  function v() {
    Promise.all(r.map((f) => /* @__PURE__ */ xd(f))).then(u).catch((f) => kt(f, s)).finally(m);
  }
  w ? w.then(() => {
    if ((s.f & xe) !== 0) {
      m();
      return;
    }
    d(), v(), ai();
  }) : v();
}
function kd() {
  var e = (
    /** @type {Effect} */
    I
  ), t = L, r = je, n = (
    /** @type {Batch} */
    R
  );
  return function(o = !0) {
    qt(e), it(t), Hr(r), o && (e.f & xe) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function ai(e = !0) {
  qt(null), it(null), Hr(null), e && (R == null || R.deactivate());
}
function Qa() {
  var e = (
    /** @type {Effect} */
    I
  ), t = e.b, r = (
    /** @type {Batch} */
    R
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  var t = qe | he;
  return I !== null && (I.f |= kr), {
    ctx: je,
    deps: null,
    effects: null,
    equals: Ya,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      me
    ),
    wv: 0,
    parent: I,
    ac: null
  };
}
const sn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function xd(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    I
  );
  n === null && od();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = br(
    /** @type {V} */
    me
  ), a = !L, s = /* @__PURE__ */ new Set();
  return Cd(() => {
    var f, p;
    var d = (
      /** @type {Effect} */
      I
    ), w = Fa();
    i = w.promise;
    try {
      Promise.resolve(e()).then(w.resolve, (y) => {
        y !== Pn && w.reject(y);
      }).finally(ai);
    } catch (y) {
      w.reject(y), ai();
    }
    var u = (
      /** @type {Batch} */
      R
    );
    if (a) {
      if ((d.f & yr) !== 0)
        var m = Qa();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (f = n.b) != null && f.is_rendered()
      )
        (p = u.async_deriveds.get(d)) == null || p.reject(sn);
      else
        for (const y of s.values())
          y.reject(sn);
      s.add(w), u.async_deriveds.set(d, w);
    }
    const v = (y, b = void 0) => {
      m == null || m(), s.delete(w), b !== sn && (u.activate(), b ? (o.f |= Zt, Fr(o, b)) : ((o.f & Zt) !== 0 && (o.f ^= Zt), Fr(o, y)), u.deactivate());
    };
    w.promise.then(v, (y) => v(null, y || "unknown"));
  }), gs(() => {
    for (const d of s)
      d.reject(sn);
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
function C(e) {
  const t = /* @__PURE__ */ kn(e);
  return xs(t), t;
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  const t = /* @__PURE__ */ kn(e);
  return t.equals = Za, t;
}
function _d(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      $e(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ko(e) {
  var t, r = I, n = e.parent;
  if (!Lt && n !== null && e.v !== me && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (xe | Re)) !== 0)
    return ed(), e.v;
  qt(n);
  try {
    _d(e), t = Ss(e);
  } finally {
    qt(r);
  }
  return t;
}
function ts(e) {
  var t = ko(e);
  if (!e.equals(t) && (e.wv = js(), (!(R != null && R.is_fork) || e.deps === null) && (R !== null ? (R.capture(e, t, !0), Xt == null || Xt.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    oe(e, ge);
    return;
  }
  Lt || (ke !== null ? (qo() || R != null && R.is_fork) && ke.set(e, t) : yo(e));
}
function jd(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && $n(() => {
        r.ac.abort(Pn), r.ac = null;
      }), r.fn !== null && (r.teardown = Ha), xn(r, 0), zo(r));
}
function rs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Vr(t);
}
let Oi = null, Tr = null, R = null, Xt = null, ke = null, Ki = null, fn = !1, Wi = !1, mn = null, Jn = null;
var ba = 0;
let qd = 1;
var Cr, Gt, hr, Ar, Ir, Br, Pt, Lr, He, _n, Et, ct, vt, Or, cr, H, Ji, Qi, ln, eo, ns, is, Er, Sd, dn;
const hi = class hi {
  constructor() {
    E(this, H);
    X(this, "id", qd++);
    /** True as soon as `#process` was called */
    E(this, Cr, !1);
    X(this, "linked", !0);
    /** @type {Batch | null} */
    E(this, Gt, null);
    /** @type {Batch | null} */
    E(this, hr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    X(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    X(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    X(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ar, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    E(this, Br, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, Pt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, Lr, null);
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
    E(this, He, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, _n, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, Et, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, ct, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, vt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Or, /* @__PURE__ */ new Set());
    X(this, "is_fork", !1);
    E(this, cr, !1);
    Tr === null ? Oi = Tr = this : (z(Tr, hr, this), z(this, Gt, Tr)), Tr = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    c(this, vt).has(t) || c(this, vt).set(t, { d: [], m: [] }), c(this, Or).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = c(this, vt).get(t);
    if (n) {
      c(this, vt).delete(t);
      for (var i of n.d)
        oe(i, he), r(i);
      for (i of n.m)
        oe(i, rt), r(i);
    }
    c(this, Or).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== me && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Zt) === 0 && (this.current.set(t, [r, n]), ke == null || ke.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    R = this;
  }
  deactivate() {
    R = null, ke = null;
  }
  flush() {
    try {
      Wi = !0, R = this, T(this, H, ln).call(this);
    } finally {
      ba = 0, Ki = null, mn = null, Jn = null, Wi = !1, R = null, ke = null, _t.clear();
    }
  }
  discard() {
    var t;
    for (const r of c(this, Ir)) r(this);
    c(this, Ir).clear();
    for (const r of this.async_deriveds.values())
      r.reject(sn);
    T(this, H, dn).call(this), (t = c(this, Lr)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    c(this, _n).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (z(this, Br, c(this, Br) + 1), t) {
      let n = c(this, Pt).get(r) ?? 0;
      c(this, Pt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (z(this, Br, c(this, Br) - 1), t) {
      let n = c(this, Pt).get(r) ?? 0;
      n === 1 ? c(this, Pt).delete(r) : c(this, Pt).set(r, n - 1);
    }
    c(this, cr) || (z(this, cr, !0), It(() => {
      z(this, cr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      c(this, Et).add(n);
    for (const n of r)
      c(this, ct).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    c(this, Ar).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    c(this, Ir).add(t);
  }
  settled() {
    return (c(this, Lr) ?? z(this, Lr, Fa())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new hi();
      !Wi && !fn && It(() => {
        c(t, Cr) || t.flush();
      });
    }
    return R;
  }
  apply() {
    {
      ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (Ki = t, (r = t.b) != null && r.is_pending && (t.f & (Nr | gi | Va)) !== 0 && (t.f & yr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    c(this, He).push(t);
  }
};
Cr = new WeakMap(), Gt = new WeakMap(), hr = new WeakMap(), Ar = new WeakMap(), Ir = new WeakMap(), Br = new WeakMap(), Pt = new WeakMap(), Lr = new WeakMap(), He = new WeakMap(), _n = new WeakMap(), Et = new WeakMap(), ct = new WeakMap(), vt = new WeakMap(), Or = new WeakMap(), cr = new WeakMap(), H = new WeakSet(), Ji = function() {
  if (this.is_fork) return !0;
  for (const n of c(this, Pt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (c(this, vt).has(t)) {
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
Qi = function() {
  var t = [];
  for (const o of c(this, He))
    if (!((o.f & xe) !== 0 || (o.f & (he | rt)) === 0)) {
      for (var r = o, n = !1; r.parent !== null; ) {
        r = r.parent;
        var i = r.f;
        if ((i & (Bt | gt)) !== 0) {
          if ((i & ge) === 0) {
            n = !0;
            break;
          }
          r.f ^= ge;
        }
      }
      n || t.push(r);
    }
  return z(this, He, []), t;
}, ln = function() {
  var s, d, w, u;
  z(this, Cr, !0);
  for (const m of c(this, Et))
    c(this, ct).delete(m), oe(m, he), this.schedule(m);
  for (const m of c(this, ct))
    oe(m, rt), this.schedule(m);
  this.apply();
  for (var t = mn = [], r = [], n = Jn = []; c(this, He).length > 0; ) {
    ba++ > 1e3 && (T(this, H, dn).call(this), Md());
    for (const m of T(this, H, Qi).call(this))
      try {
        T(this, H, eo).call(this, m, t, r);
      } catch (v) {
        throw ss(m), T(this, H, Ji).call(this) || this.discard(), v;
      }
  }
  if (R = null, n.length > 0) {
    var i = hi.ensure();
    for (const m of n)
      i.schedule(m);
  }
  if (mn = null, Jn = null, T(this, H, Ji).call(this)) {
    T(this, H, Er).call(this, r), T(this, H, Er).call(this, t);
    for (const [m, v] of c(this, vt))
      as(m, v);
    n.length > 0 && /** @type {unknown} */
    T(s = R, H, ln).call(s);
    return;
  }
  const o = T(this, H, ns).call(this);
  if (o) {
    T(this, H, Er).call(this, r), T(this, H, Er).call(this, t), T(d = o, H, is).call(d, this);
    return;
  }
  c(this, Et).clear(), c(this, ct).clear();
  for (const m of c(this, Ar)) m(this);
  c(this, Ar).clear(), Xt = this, ya(r), ya(t), Xt = null, (w = c(this, Lr)) == null || w.resolve();
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    R
  );
  if (c(this, Br) === 0 && (c(this, He).length === 0 || a !== null) && T(this, H, dn).call(this), c(this, He).length > 0)
    if (a !== null) {
      for (const m of c(this, He))
        c(a, He).push(m);
      z(this, He, []);
    } else
      a = this;
  a !== null && (_t.clear(), T(u = a, H, ln).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
eo = function(t, r, n) {
  t.f ^= ge;
  for (var i = t.first; i !== null; ) {
    var o = i.f, a = (o & (gt | Bt)) !== 0, s = a && (o & ge) !== 0, d = s || (o & Re) !== 0 || c(this, vt).has(i);
    if (!d && i.fn !== null) {
      a ? i.f ^= ge : (o & Nr) !== 0 ? r.push(i) : Cn(i) && ((o & ut) !== 0 && c(this, ct).add(i), Vr(i));
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
}, ns = function() {
  for (var t = c(this, Gt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = c(t, Gt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
is = function(t) {
  var n;
  for (const [i, o] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, o);
  for (const [i, o] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && o.promise.then(a.resolve).catch(a.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(c(t, Et), c(t, ct));
  const r = (i) => {
    var o = i.reactions;
    if (o !== null && !((i.f & qe) !== 0 && (i.f & (he | rt)) === 0))
      for (const d of o) {
        var a = d.f;
        if ((a & qe) !== 0)
          r(
            /** @type {Derived} */
            d
          );
        else {
          var s = (
            /** @type {Effect} */
            d
          );
          a & (Rr | ut) && !this.async_deriveds.has(s) && (c(this, ct).delete(s), oe(s, he), this.schedule(s));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), T(n = t, H, dn).call(n), R = this, T(this, H, ln).call(this);
}, /**
 * @param {Effect[]} effects
 */
Er = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ja(t[r], c(this, Et), c(this, ct));
}, Sd = function() {
  var m, v;
  for (let f = Oi; f !== null; f = c(f, hr)) {
    var t = f.id < this.id, r = [];
    for (const [p, [y, b]] of this.current) {
      if (f.current.has(p)) {
        var n = (
          /** @type {[any, boolean]} */
          f.current.get(p)[0]
        );
        if (t && y !== n)
          f.current.set(p, [y, b]);
        else
          continue;
      }
      r.push(p);
    }
    if (t)
      for (const [p, y] of this.async_deriveds) {
        const b = f.async_deriveds.get(p);
        b && y.promise.then(b.resolve).catch(b.reject);
      }
    var i = [...f.current.keys()].filter(
      (p) => !/** @type {[any, boolean]} */
      f.current.get(p)[1]
    );
    if (!(!c(f, Cr) || i.length === 0)) {
      var o = i.filter((p) => !this.current.has(p));
      if (o.length === 0)
        t && f.discard();
      else if (r.length > 0) {
        if (t)
          for (const p of c(this, Or))
            f.unskip_effect(p, (y) => {
              var b;
              (y.f & (ut | Rr)) !== 0 ? f.schedule(y) : T(b = f, H, Er).call(b, [y]);
            });
        f.activate();
        var a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
        for (var d of r)
          os(d, o, a, s);
        s = /* @__PURE__ */ new Map();
        var w = [...f.current].filter(([p, y]) => {
          const b = this.current.get(p);
          return b ? b[0] !== y[0] || b[1] !== y[1] : !0;
        }).map(([p]) => p);
        if (w.length > 0)
          for (const p of c(this, _n))
            (p.f & (xe | Re | ni)) === 0 && xo(p, w, s) && ((p.f & (Rr | ut)) !== 0 ? (oe(p, he), f.schedule(p)) : c(f, Et).add(p));
        if (c(f, He).length > 0 && !c(f, cr)) {
          f.apply();
          for (var u of T(m = f, H, Qi).call(m))
            T(v = f, H, eo).call(v, u, [], []);
        }
        f.deactivate();
      }
    }
  }
}, dn = function() {
  if (this.linked) {
    var t = c(this, Gt), r = c(this, hr);
    t === null ? Oi = r : z(t, hr, r), r === null ? Tr = t : z(r, Gt, t), this.linked = !1;
  }
};
let Jt = hi;
function q(e) {
  var t = fn, r = Xt;
  Xt = null, fn = !0;
  try {
    for (var n; ; ) {
      if (vd(), R === null)
        return (
          /** @type {T} */
          n
        );
      R.flush();
    }
  } finally {
    fn = t, Xt = r;
  }
}
function Md() {
  try {
    hd();
  } catch (e) {
    kt(e, Ki);
  }
}
let ht = null;
function ya(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (xe | Re)) === 0 && Cn(n) && (ht = /* @__PURE__ */ new Set(), Vr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && bs(n), (ht == null ? void 0 : ht.size) > 0)) {
        _t.clear();
        for (const i of ht) {
          if ((i.f & (xe | Re)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            ht.has(a) && (ht.delete(a), o.push(a)), a = a.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const d = o[s];
            (d.f & (xe | Re)) === 0 && Vr(d);
          }
        }
        ht.clear();
      }
    }
    ht = null;
  }
}
function os(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & qe) !== 0 ? os(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (Rr | ut)) !== 0 && (o & he) === 0 && xo(i, t, n) && (oe(i, he), _o(
        /** @type {Effect} */
        i
      ));
    }
}
function xo(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (vn.call(t, i))
        return !0;
      if ((i.f & qe) !== 0 && xo(
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
function _o(e) {
  R.schedule(e);
}
function as(e, t) {
  if (!((e.f & gt) !== 0 && (e.f & ge) !== 0)) {
    (e.f & he) !== 0 ? t.d.push(e) : (e.f & rt) !== 0 && t.m.push(e), oe(e, ge);
    for (var r = e.first; r !== null; )
      as(r, t), r = r.next;
  }
}
function ss(e) {
  oe(e, ge);
  for (var t = e.first; t !== null; )
    ss(t), t = t.next;
}
let si = /* @__PURE__ */ new Set();
const _t = /* @__PURE__ */ new Map();
let ls = !1;
function br(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ya,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  const r = br(e);
  return xs(r), r;
}
// @__NO_SIDE_EFFECTS__
function ds(e, t = !1, r = !0) {
  const n = br(e);
  return t || (n.equals = Za), n;
}
function B(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ft || (L.f & ni) !== 0) && Xa() && (L.f & (qe | ut | Rr | ni)) !== 0 && (jt === null || !jt.has(e)) && md();
  let n = r ? sr(t) : t;
  return Fr(e, n, Jn);
}
var or = null, to = 0;
function Fr(e, t, r = null) {
  if (!e.equals(t)) {
    Lt ? _t.set(e, t) : _t.has(e) || _t.set(e, e.v);
    var n = Jt.ensure();
    if (n.capture(e, t), (e.f & qe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & he) !== 0 && ko(i), ke === null && yo(i);
    }
    e.wv = js(), or = null, to = 0, hs(e, he, r), or = null, I !== null && (I.f & ge) !== 0 && (I.f & (gt | Bt)) === 0 && (Je === null ? Bd([e]) : Je.push(e)), !n.is_fork && si.size > 0 && !ls && zd();
  }
  return t;
}
function zd() {
  ls = !1;
  for (const e of si) {
    (e.f & ge) !== 0 && oe(e, rt);
    let t;
    try {
      t = Cn(e);
    } catch {
      t = !0;
    }
    t && Vr(e);
  }
  si.clear();
}
function gn(e) {
  B(e, e.v + 1);
}
function hs(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (to += i, to > 1e5 && or === null && (or = /* @__PURE__ */ new Set()), or !== null) {
      if (or.has(e)) return;
      or.add(e);
    }
    for (var o = 0; o < i; o++) {
      var a = n[o], s = a.f, d = (s & he) === 0;
      if (d && oe(a, t), (s & ni) !== 0)
        si.add(
          /** @type {Effect} */
          a
        );
      else if ((s & qe) !== 0) {
        var w = (
          /** @type {Derived} */
          a
        );
        ke == null || ke.delete(w), hs(w, rt, r);
      } else if (d) {
        var u = (
          /** @type {Effect} */
          a
        );
        (s & ut) !== 0 && ht !== null && ht.add(u), r !== null ? r.push(u) : _o(u);
      }
    }
  }
}
function sr(e) {
  if (typeof e != "object" || e === null || un in e || Ga in e)
    return e;
  const t = Na(e);
  if (t !== Ul && t !== Yl)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Da(e), i = /* @__PURE__ */ de(0), o = pr, a = (s) => {
    if (pr === o)
      return s();
    var d = L, w = pr;
    it(null), _a(o);
    var u = s();
    return it(d), _a(w), u;
  };
  return n && r.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, d, w) {
        (!("value" in w) || w.configurable === !1 || w.enumerable === !1 || w.writable === !1) && ud();
        var u = r.get(d);
        return u === void 0 ? a(() => {
          var m = /* @__PURE__ */ de(w.value);
          return r.set(d, m), m;
        }) : B(u, w.value, !0), !0;
      },
      deleteProperty(s, d) {
        var w = r.get(d);
        if (w === void 0) {
          if (d in s) {
            const u = a(() => /* @__PURE__ */ de(me));
            r.set(d, u), gn(i);
          }
        } else
          B(w, me), gn(i);
        return !0;
      },
      get(s, d, w) {
        var f;
        if (d === un)
          return e;
        var u = r.get(d), m = d in s;
        if (u === void 0 && (!m || (f = mr(s, d)) != null && f.writable) && (u = a(() => {
          var p = sr(m ? s[d] : me), y = /* @__PURE__ */ de(p);
          return y;
        }), r.set(d, u)), u !== void 0) {
          var v = l(u);
          return v === me ? void 0 : v;
        }
        return Reflect.get(s, d, w);
      },
      getOwnPropertyDescriptor(s, d) {
        var v;
        (v = this.has) == null || v.call(this, s, d);
        var w = Reflect.getOwnPropertyDescriptor(s, d), u = r.get(d);
        if (u !== void 0) {
          var m = l(u);
          if (m === me)
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
      has(s, d) {
        var v;
        if (d === un)
          return !0;
        var w = r.get(d), u = w !== void 0 && w.v !== me || Reflect.has(s, d);
        if (w !== void 0 || I !== null && (!u || (v = mr(s, d)) != null && v.writable)) {
          w === void 0 && (w = a(() => {
            var f = u ? sr(s[d]) : me, p = /* @__PURE__ */ de(f);
            return p;
          }), r.set(d, w));
          var m = l(w);
          if (m === me)
            return !1;
        }
        return u;
      },
      set(s, d, w, u) {
        var F;
        var m = r.get(d), v = d in s;
        if (n && d === "length")
          for (var f = w; f < /** @type {Source<number>} */
          m.v; f += 1) {
            var p = r.get(f + "");
            p !== void 0 ? B(p, me) : f in s && (p = a(() => /* @__PURE__ */ de(me)), r.set(f + "", p));
          }
        if (m === void 0)
          (!v || (F = mr(s, d)) != null && F.writable) && (m = a(() => /* @__PURE__ */ de(void 0)), B(m, sr(w)), r.set(d, m));
        else {
          v = m.v !== me;
          var y = a(() => sr(w));
          B(m, y);
        }
        var b = Reflect.getOwnPropertyDescriptor(s, d);
        if (b != null && b.set && b.set.call(u, w), !v) {
          if (n && typeof d == "string") {
            var k = (
              /** @type {Source<number>} */
              r.get("length")
            ), W = Number(d);
            Number.isInteger(W) && W >= k.v && B(k, W + 1);
          }
          gn(i);
        }
        return !0;
      },
      ownKeys(s) {
        l(i);
        var d = Reflect.ownKeys(s).filter((m) => {
          var v = r.get(m);
          return v === void 0 || v.v !== me;
        });
        for (var [w, u] of r)
          u.v !== me && !(w in s) && d.push(w);
        return d;
      },
      setPrototypeOf() {
        fd();
      }
    }
  );
}
var ka, cs, ws, us;
function ro() {
  if (ka === void 0) {
    ka = window, cs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ws = mr(t, "firstChild").get, us = mr(t, "nextSibling").get, va(e) && (e[Zi] = void 0, e[Kn] = null, e[Xi] = void 0, e.__e = void 0), va(r) && (r[an] = void 0);
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return (
    /** @type {TemplateNode | null} */
    ws.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return (
    /** @type {TemplateNode | null} */
    us.call(e)
  );
}
function re(e, t) {
  if (!N)
    return /* @__PURE__ */ Qt(e);
  var r = /* @__PURE__ */ Qt(D);
  if (r === null)
    r = D.appendChild(nt());
  else if (t && r.nodeType !== pi) {
    var n = nt();
    return r == null || r.before(n), Oe(n), n;
  }
  return t && jo(
    /** @type {Text} */
    r
  ), Oe(r), r;
}
function hn(e, t = !1) {
  if (!N) {
    var r = /* @__PURE__ */ Qt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ St(r) : r;
  }
  if (t) {
    if ((D == null ? void 0 : D.nodeType) !== pi) {
      var n = nt();
      return D == null || D.before(n), Oe(n), n;
    }
    jo(
      /** @type {Text} */
      D
    );
  }
  return D;
}
function Pr(e, t = !1) {
  if (!N)
    return /* @__PURE__ */ Qt(e);
  var r = re(e, t);
  return K(e), r;
}
function ve(e, t = 1, r = !1) {
  let n = N ? D : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ St(n);
  if (!N)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== pi) {
      var o = nt();
      return n === null ? i == null || i.after(o) : n.before(o), Oe(o), o;
    }
    jo(
      /** @type {Text} */
      n
    );
  }
  return Oe(n), n;
}
function fs(e) {
  e.textContent = "";
}
function ms() {
  return !1;
}
function ki(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function jo(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === pi; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Td(e) {
  var t = I;
  if (t === null)
    return L.f |= Zt, e;
  if ((t.f & yr) === 0 && (t.f & Nr) === 0)
    throw e;
  kt(e, t);
}
function kt(e, t) {
  if (e === Kt)
    throw e;
  if (!(t !== null && (t.f & xe) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Yi) !== 0 && (t.f & (xe | yn)) === 0) {
        if ((t.f & yr) === 0)
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
function Pd(e) {
  I === null && (L === null && dd(), ld()), Lt && sd();
}
function Ed(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Mt(e, t) {
  var r = I;
  r !== null && (r.f & Re) !== 0 && (e |= Re);
  var n = {
    ctx: je,
    deps: null,
    nodes: null,
    f: e | he | mt,
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
  R == null || R.register_created_effect(n);
  var i = n;
  if ((e & Nr) !== 0)
    mn !== null ? mn.push(n) : Jt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Vr(n);
    } catch (a) {
      throw $e(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & kr) === 0 && (i = i.first, (e & ut) !== 0 && (e & vr) !== 0 && i !== null && (i.f |= vr));
  }
  if (i !== null && (i.parent = r, r !== null && Ed(i, r), L !== null && (L.f & qe) !== 0 && (e & Bt) === 0)) {
    var o = (
      /** @type {Derived} */
      L
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return n;
}
function qo() {
  return L !== null && !ft;
}
function gs(e) {
  const t = Mt(gi, null);
  return oe(t, ge), t.teardown = e, t;
}
function no(e) {
  Pd();
  var t = (
    /** @type {Effect} */
    I.f
  ), r = !L && (t & gt) !== 0 && je !== null && !je.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      je
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ps(e);
}
function ps(e) {
  return Mt(Nr | Kl, e);
}
function Rd(e) {
  Jt.ensure();
  const t = Mt(Bt | kr, e);
  return () => {
    $e(t);
  };
}
function $d(e) {
  Jt.ensure();
  const t = Mt(Bt | kr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? gr(t, () => {
      $e(t), n(void 0);
    }) : ($e(t), n(void 0));
  });
}
function So(e) {
  return Mt(Nr, e);
}
function Cd(e) {
  return Mt(Rr | kr, e);
}
function Mo(e, t = 0) {
  return Mt(gi | t, e);
}
function ze(e, t = [], r = [], n = []) {
  yd(n, t, r, (i) => {
    Mt(gi, () => {
      e(...i.map(l));
    });
  });
}
function xi(e, t = 0) {
  var r = Mt(ut | t, e);
  return r;
}
function tt(e) {
  return Mt(gt | kr, e);
}
function vs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Lt, n = L;
    xa(!0), it(null);
    try {
      t.call(null);
    } catch (i) {
      kt(i, e.parent);
    } finally {
      xa(r), it(n);
    }
  }
}
function zo(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && $n(() => {
      i.abort(Pn);
    });
    var n = r.next;
    (r.f & Bt) !== 0 ? r.parent = null : $e(r, t), r = n;
  }
}
function Ad(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & gt) === 0 && $e(t), t = r;
  }
}
function $e(e, t = !0) {
  var r = !1;
  (t || (e.f & Xl) !== 0) && e.nodes !== null && e.nodes.end !== null && (Id(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= yn, zo(e, t && !r), xn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  vs(e), e.f ^= yn, e.f |= xe;
  var i = e.parent;
  i !== null && i.first !== null && bs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Id(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ St(e);
    e.remove(), e = r;
  }
}
function bs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function gr(e, t, r = !0) {
  var n = [];
  e.f |= po, ys(e, n, !0);
  var i = () => {
    r && $e(e), t && t();
  }, o = n.length;
  if (o > 0) {
    var a = () => --o || i();
    for (var s of n)
      s.out(a);
  } else
    i();
}
function ys(e, t, r) {
  if ((e.f & Re) === 0) {
    e.f ^= Re;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var o = i.next;
      if ((i.f & Bt) === 0) {
        var a = (i.f & vr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & gt) !== 0 && (e.f & ut) !== 0;
        ys(i, t, a ? r : !1);
      }
      i = o;
    }
  }
}
function li(e) {
  e.f &= ~po, ks(e, !0);
}
function ks(e, t) {
  if ((e.f & po) === 0 && (e.f & Re) !== 0) {
    e.f ^= Re, (e.f & ge) === 0 && (oe(e, he), Jt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & vr) !== 0 || (r.f & gt) !== 0;
      ks(r, i ? t : !1), r = n;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const a of o)
        (a.is_global || t) && a.in();
  }
}
function To(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ St(r);
      t.append(r), r = i;
    }
}
let Lt = !1;
function xa(e) {
  Lt = e;
}
let L = null, ft = !1;
function it(e) {
  L = e;
}
let I = null;
function qt(e) {
  I = e;
}
let jt = null;
function xs(e) {
  L !== null && ((L.f & ii) !== 0 || (L.f & qe) !== 0) && (jt ?? (jt = /* @__PURE__ */ new Set())).add(e);
}
let Le = null, Ye = 0, Je = null;
function Bd(e) {
  Je = e;
}
let _s = 1, lr = 0, pr = lr;
function _a(e) {
  pr = e;
}
function js() {
  return ++_s;
}
function Cn(e) {
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if ((t & rt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var o = r[i];
      if (Cn(
        /** @type {Derived} */
        o
      ) && ts(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & mt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ke === null && oe(e, ge);
  }
  return !1;
}
function qs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(jt !== null && jt.has(e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & qe) !== 0 ? qs(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? oe(o, he) : (o.f & ge) !== 0 && oe(o, rt), _o(
        /** @type {Effect} */
        o
      ));
    }
}
function Ss(e) {
  var t = Le, r = Ye, n = Je, i = L, o = jt, a = je, s = ft, d = pr, w = e.f;
  Le = /** @type {null | Value[]} */
  null, Ye = 0, Je = null, L = (w & (gt | Bt)) === 0 ? e : null, jt = null, Hr(e.ctx), ft = !1, pr = ++lr, e.ac !== null && ($n(() => {
    e.ac.abort(Pn);
  }), e.ac = null);
  try {
    e.f |= ii;
    var u = (
      /** @type {Function} */
      e.fn
    ), m = u();
    e.f |= yr;
    var v = ja(e);
    if (Xa() && Je !== null && !ft && v !== null && (e.f & (qe | rt | he)) === 0)
      for (var f = 0; f < /** @type {Source[]} */
      Je.length; f++)
        qs(
          Je[f],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (lr++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = lr;
      if (t !== null)
        for (const p of t)
          p.rv = lr;
      Je !== null && (n === null ? n = Je : n.push(.../** @type {Source[]} */
      Je));
    }
    return (e.f & Zt) !== 0 && (e.f ^= Zt), m;
  } catch (p) {
    return ja(e), Td(p);
  } finally {
    e.f ^= ii, Le = t, Ye = r, Je = n, L = i, jt = o, Hr(a), ft = s, pr = d;
  }
}
function ja(e) {
  var i;
  var t = e.deps, r = R == null ? void 0 : R.is_fork;
  if (Le !== null) {
    var n;
    if (r || xn(e, Ye), t !== null && Ye > 0)
      for (t.length = Ye + Le.length, n = 0; n < Le.length; n++)
        t[Ye + n] = Le[n];
    else
      e.deps = t = Le;
    if (qo() && (e.f & mt) !== 0)
      for (n = Ye; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && Ye < t.length && (xn(e, Ye), t.length = Ye);
  return t;
}
function Ld(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Vl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & qe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Le === null || !vn.call(Le, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & mt) !== 0 && (o.f ^= mt), o.v !== me && yo(o), o.ac !== null && $n(() => {
      o.ac.abort(Pn), o.ac = null, oe(o, he);
    }), jd(o), xn(o, 0);
  }
}
function xn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ld(e, r[n]);
}
function Vr(e) {
  var t = e.f;
  if ((t & xe) === 0) {
    oe(e, ge);
    var r = I;
    I = e;
    try {
      (t & (ut | Va)) !== 0 ? Ad(e) : zo(e), vs(e);
      var n = Ss(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = _s;
      var i;
      Wa && pd && (e.f & he) !== 0 && e.deps;
    } finally {
      I = r;
    }
  }
}
function l(e) {
  var t = e.f, r = (t & qe) !== 0;
  if (L !== null && !ft) {
    var n = I !== null && (I.f & xe) !== 0;
    if (!n && (jt === null || !jt.has(e))) {
      var i = L.deps;
      if ((L.f & ii) !== 0)
        e.rv < lr && (e.rv = lr, Le === null && i !== null && i[Ye] === e ? Ye++ : Le === null ? Le = [e] : Le.push(e));
      else {
        L.deps ?? (L.deps = []), vn.call(L.deps, e) || L.deps.push(e);
        var o = e.reactions;
        o === null ? e.reactions = [L] : vn.call(o, L) || o.push(L);
      }
    }
  }
  if (Lt && _t.has(e))
    return _t.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Lt) {
      var s = a.v;
      return ((a.f & ge) === 0 && a.reactions !== null || zs(a)) && (s = ko(a)), _t.set(a, s), s;
    }
    var d = (a.f & mt) === 0 && !ft && L !== null && (L.f & mt) !== 0, w = (a.f & yr) === 0;
    Cn(a) && (d && (a.f |= mt), ts(a)), d && !w && (rs(a), Ms(a));
  }
  if (ke != null && ke.has(e))
    return ke.get(e);
  if ((e.f & Zt) !== 0)
    throw e.v;
  return e.v;
}
function Ms(e) {
  if (e.f |= mt, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : vn.call(t, e) || t.push(e), (r.f & qe) !== 0 && (r.f & mt) === 0 && (rs(
        /** @type {Derived} */
        r
      ), Ms(
        /** @type {Derived} */
        r
      ));
    }
}
function zs(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (_t.has(t) || (t.f & qe) !== 0 && zs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function An(e) {
  var t = ft;
  try {
    return ft = !0, e();
  } finally {
    ft = t;
  }
}
const dr = Symbol("events"), Ts = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set();
function Od(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || oo.call(t, o), !o.cancelBubble)
      return $n(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, It(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function Wd(e, t, r, n, i) {
  var o = { capture: n, passive: i }, a = Od(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && gs(() => {
    a.__removed = !0, t.removeEventListener(e, a, o);
  });
}
function Be(e, t, r) {
  (t[dr] ?? (t[dr] = {}))[e] = r;
}
function Dd(e) {
  for (var t = 0; t < e.length; t++)
    Ts.add(e[t]);
  for (var r of io)
    r(e);
}
let Di = null, Ni = !1;
function oo(e) {
  var y, b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Di = e, Ni || (Ni = !0, setTimeout(() => {
    Ni = !1, Di = null;
  }));
  var a = 0, s = Di === e && e[dr];
  if (s) {
    var d = i.indexOf(s);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[dr] = t;
      return;
    }
    var w = i.indexOf(t);
    if (w === -1)
      return;
    d <= w && (a = d);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    bn(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var u = L, m = I;
    it(null), qt(null);
    try {
      for (var v, f = []; o !== null && o !== t; ) {
        try {
          var p = (b = o[dr]) == null ? void 0 : b[n];
          p != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && p.call(o, e);
        } catch (k) {
          v ? f.push(k) : v = k;
        }
        if (e.cancelBubble) break;
        a++, o = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (v) {
        for (let k of f)
          queueMicrotask(() => {
            throw k;
          });
        throw v;
      }
    } finally {
      e[dr] = t, delete e.currentTarget, it(u), qt(m);
    }
  }
}
var Ba;
const Hi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ba = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ba.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Nd(e) {
  return (
    /** @type {string} */
    (Hi == null ? void 0 : Hi.createHTML(e)) ?? e
  );
}
function Hd(e) {
  var t = ki("template");
  return t.innerHTML = Nd(e.replaceAll("<!>", "<!---->")), t.content;
}
function $r(e, t) {
  var r = (
    /** @type {Effect} */
    I
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & Nl) !== 0, n = (t & Hl) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (N)
      return $r(D, null), D;
    i === void 0 && (i = Hd(o ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || cs ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(a)
      ), d = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $r(s, d);
    } else
      $r(a, a);
    return a;
  };
}
function Ps() {
  if (N)
    return $r(D, null), D;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nt();
  return e.append(t, r), $r(t, r), e;
}
function le(e, t) {
  if (N) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      I
    );
    ((r.f & yr) === 0 || r.nodes.end === null) && (r.nodes.end = D), Rn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Fd = ["touchstart", "touchmove"];
function Vd(e) {
  return Fd.includes(e);
}
function Gd(e) {
  let t = 0, r = br(0), n;
  return () => {
    qo() && (l(r), Mo(() => (t === 0 && (n = An(() => e(() => gn(r)))), t += 1, () => {
      It(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, gn(r));
      });
    })));
  };
}
var Ud = vr | kr;
function Yd(e, t, r, n) {
  new Zd(e, t, r, n);
}
var Fe, jn, Qe, wr, _e, Ve, Ee, Ge, bt, ur, Ut, Wr, qn, Sn, Rt, ci, O, Es, Rs, ao, Vt, $s, so, cn, Qn, lo, ho;
class Zd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    E(this, O);
    /** @type {Boundary | null} */
    X(this, "parent");
    X(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    X(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, Fe);
    /** @type {TemplateNode | null} */
    E(this, jn, N ? D : null);
    /** @type {BoundaryProps} */
    E(this, Qe);
    /** @type {((anchor: Node) => void)} */
    E(this, wr);
    /** @type {Effect} */
    E(this, _e);
    /** @type {Effect | null} */
    E(this, Ve, null);
    /** @type {Effect | null} */
    E(this, Ee, null);
    /** @type {Effect | null} */
    E(this, Ge, null);
    /** @type {DocumentFragment | null} */
    E(this, bt, null);
    E(this, ur, 0);
    E(this, Ut, 0);
    E(this, Wr, !1);
    /** @type {Set<Effect>} */
    E(this, qn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, Sn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, Rt, null);
    E(this, ci, Gd(() => (z(this, Rt, br(c(this, ur))), () => {
      z(this, Rt, null);
    })));
    var o;
    z(this, Fe, t), z(this, Qe, r), z(this, wr, (a) => {
      var s = (
        /** @type {Effect} */
        I
      );
      s.b = this, s.f |= Yi, n(a);
    }), this.parent = /** @type {Effect} */
    I.b, this.transform_error = i ?? ((o = this.parent) == null ? void 0 : o.transform_error) ?? ((a) => a), z(this, _e, xi(() => {
      if (N) {
        const a = vo(
          /** @type {TemplateNode} */
          c(this, jn)
        );
        Rn();
        const s = a === mo;
        if (a.startsWith(pa)) {
          const w = JSON.parse(a.slice(pa.length));
          T(this, O, Rs).call(this, w);
        } else s ? T(this, O, $s).call(this) : T(this, O, Es).call(this);
      } else
        T(this, O, so).call(this);
    }, Ud)), N && z(this, Fe, D);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ja(t, c(this, qn), c(this, Sn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!c(this, Qe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    T(this, O, lo).call(this, t, r), z(this, ur, c(this, ur) + t), !(!c(this, Rt) || c(this, Wr)) && (z(this, Wr, !0), It(() => {
      z(this, Wr, !1), c(this, Rt) && Fr(c(this, Rt), c(this, ur));
    }));
  }
  get_effect_pending() {
    return c(this, ci).call(this), l(
      /** @type {Source<number>} */
      c(this, Rt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === Kt || !c(this, Qe).onerror && !c(this, Qe).failed)
      throw t;
    R != null && R.is_fork ? (c(this, Ve) && R.skip_effect(c(this, Ve)), c(this, Ee) && R.skip_effect(c(this, Ee)), c(this, Ge) && R.skip_effect(c(this, Ge)), R.oncommit(() => {
      T(this, O, Vt).call(this) || T(this, O, ho).call(this, t);
    })) : T(this, O, ho).call(this, t);
  }
}
Fe = new WeakMap(), jn = new WeakMap(), Qe = new WeakMap(), wr = new WeakMap(), _e = new WeakMap(), Ve = new WeakMap(), Ee = new WeakMap(), Ge = new WeakMap(), bt = new WeakMap(), ur = new WeakMap(), Ut = new WeakMap(), Wr = new WeakMap(), qn = new WeakMap(), Sn = new WeakMap(), Rt = new WeakMap(), ci = new WeakMap(), O = new WeakSet(), Es = function() {
  try {
    z(this, Ve, tt(() => c(this, wr).call(this, c(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Rs = function(t) {
  const r = c(this, Qe).failed, { reset: n, invoke_onerror: i } = T(this, O, ao).call(this, t);
  It(i), r && z(this, Ge, tt(() => {
    r(
      c(this, Fe),
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
ao = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (!T(this, O, Vt).call(this)) {
      if (r) {
        td();
        return;
      }
      r = !0, n && gd(), c(this, Ge) !== null && gr(c(this, Ge), () => {
        z(this, Ge, null);
      }), T(this, O, Qn).call(this, () => {
        T(this, O, so).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var a, s;
    if (!T(this, O, Vt).call(this))
      try {
        n = !0, (s = (a = c(this, Qe)).onerror) == null || s.call(a, t, i), n = !1;
      } catch (d) {
        kt(d, c(this, _e) && c(this, _e).parent);
      }
  } };
}, Vt = function() {
  return (c(this, _e).f & (xe | yn)) !== 0;
}, $s = function() {
  const t = c(this, Qe).pending;
  t && (this.is_pending = !0, z(this, Ee, tt(() => t(c(this, Fe)))), It(() => {
    if (!T(this, O, Vt).call(this)) {
      var r = z(this, bt, document.createDocumentFragment()), n = nt(), i = !1;
      if (r.append(n), z(this, Ve, T(this, O, Qn).call(this, () => {
        try {
          return tt(() => c(this, wr).call(this, n));
        } catch (o) {
          try {
            this.error(o), i = !0;
          } catch (a) {
            kt(a, c(this, _e).parent);
          }
          return null;
        }
      })), c(this, Ve) === null) {
        z(this, bt, null), i && T(this, O, cn).call(
          this,
          /** @type {Batch} */
          R
        );
        return;
      }
      c(this, Ut) === 0 && (c(this, Fe).before(r), z(this, bt, null), gr(
        /** @type {Effect} */
        c(this, Ee),
        () => {
          z(this, Ee, null);
        }
      ), T(this, O, cn).call(
        this,
        /** @type {Batch} */
        R
      ));
    }
  }));
}, so = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), z(this, Ut, 0), z(this, ur, 0), z(this, Ve, tt(() => {
      c(this, wr).call(this, c(this, Fe));
    })), c(this, Ut) > 0) {
      var t = z(this, bt, document.createDocumentFragment());
      To(c(this, Ve), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        c(this, Qe).pending
      );
      z(this, Ee, tt(() => r(c(this, Fe))));
    } else
      T(this, O, cn).call(
        this,
        /** @type {Batch} */
        R
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
cn = function(t) {
  this.is_pending = !1, t.transfer_effects(c(this, qn), c(this, Sn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Qn = function(t) {
  var r = I, n = L, i = je;
  qt(c(this, _e)), it(c(this, _e)), Hr(c(this, _e).ctx);
  try {
    return Jt.ensure(), t();
  } finally {
    qt(r), it(n), Hr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
lo = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && T(n = this.parent, O, lo).call(n, t, r);
    return;
  }
  z(this, Ut, c(this, Ut) + t), c(this, Ut) === 0 && (T(this, O, cn).call(this, r), c(this, Ee) && gr(c(this, Ee), () => {
    z(this, Ee, null);
  }), c(this, bt) && (c(this, Fe).before(c(this, bt)), z(this, bt, null)));
}, /**
 * @param {unknown} error
 */
ho = function(t) {
  c(this, Ve) && ($e(c(this, Ve)), z(this, Ve, null)), c(this, Ee) && ($e(c(this, Ee)), z(this, Ee, null)), c(this, Ge) && ($e(c(this, Ge)), z(this, Ge, null)), N && (Oe(
    /** @type {TemplateNode} */
    c(this, jn)
  ), rd(), Oe(oi()));
  let r = c(this, Qe).failed;
  const n = (i) => {
    if (T(this, O, Vt).call(this)) return;
    const { reset: o, invoke_onerror: a } = T(this, O, ao).call(this, i);
    a(), r && !T(this, O, Vt).call(this) && z(this, Ge, T(this, O, Qn).call(this, () => {
      try {
        return tt(() => {
          var s = (
            /** @type {Effect} */
            I
          );
          s.b = this, s.f |= Yi, r(
            c(this, Fe),
            () => i,
            () => o
          );
        });
      } catch (s) {
        return kt(
          s,
          /** @type {Effect} */
          c(this, _e).parent
        ), null;
      }
    }));
  };
  It(() => {
    if (!T(this, O, Vt).call(this)) {
      var i;
      try {
        i = this.transform_error(t);
      } catch (o) {
        kt(o, c(this, _e) && c(this, _e).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        n,
        /** @param {unknown} e */
        (o) => kt(o, c(this, _e) && c(this, _e).parent)
      ) : n(i);
    }
  });
};
function nn(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[an] ?? (e[an] = e.nodeValue)) && (e[an] = r, e.nodeValue = `${r}`);
}
function Cs(e, t) {
  return As(e, t);
}
function Xd(e, t) {
  ro(), t.intro = t.intro ?? !1;
  const r = t.target, n = N, i = D;
  try {
    for (var o = /* @__PURE__ */ Qt(r); o && (o.nodeType !== En || /** @type {Comment} */
    o.data !== Oa); )
      o = /* @__PURE__ */ St(o);
    if (!o)
      throw Kt;
    At(!0), Oe(
      /** @type {Comment} */
      o
    );
    const a = As(e, { ...t, anchor: o });
    return At(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Kt && console.warn("Failed to hydrate: ", a), t.recover === !1 && cd(), ro(), fs(r), At(!1), Cs(e, t);
  } finally {
    At(n), Oe(i);
  }
}
const Zn = /* @__PURE__ */ new Map();
function As(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
  ro();
  var d = void 0, w = $d(() => {
    var u = r ?? t.appendChild(nt());
    Yd(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (f) => {
        bi({});
        var p = (
          /** @type {ComponentContext} */
          je
        );
        if (o && (p.c = o), i && (n.$$events = i), N && $r(
          /** @type {TemplateNode} */
          f,
          null
        ), d = e(f, n) || bo(), N && (I.nodes.end = D, D === null || D.nodeType !== En || /** @type {Comment} */
        D.data !== go))
          throw vi(), Kt;
        yi();
      },
      s
    );
    var m = /* @__PURE__ */ new Set(), v = (f) => {
      for (var p = 0; p < f.length; p++) {
        var y = f[p];
        if (!m.has(y)) {
          m.add(y);
          var b = Vd(y);
          for (const F of [t, document]) {
            var k = Zn.get(F);
            k === void 0 && (k = /* @__PURE__ */ new Map(), Zn.set(F, k));
            var W = k.get(y);
            W === void 0 ? (F.addEventListener(y, oo, { passive: b }), k.set(y, 1)) : k.set(y, W + 1);
          }
        }
      }
    };
    return v(mi(Ts)), io.add(v), () => {
      var b;
      for (var f of m)
        for (const k of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Zn.get(k)
          ), y = (
            /** @type {number} */
            p.get(f)
          );
          --y == 0 ? (k.removeEventListener(f, oo), p.delete(f), p.size === 0 && Zn.delete(k)) : p.set(f, y);
        }
      io.delete(v), u !== r && ((b = u.parentNode) == null || b.removeChild(u));
    };
  });
  return co.set(d, w), d;
}
let co = /* @__PURE__ */ new WeakMap();
function Kd(e, t) {
  const r = co.get(e);
  return r ? (co.delete(e), r(t)) : Promise.resolve();
}
var wt, yt, Ue, fr, Mn, zn, wi;
class Is {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    X(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, wt, /* @__PURE__ */ new Map());
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
    E(this, yt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, fr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Mn, !0);
    /**
     * @param {Batch} batch
     */
    E(this, zn, (t) => {
      if (c(this, wt).has(t)) {
        var r = (
          /** @type {Key} */
          c(this, wt).get(t)
        ), n = c(this, yt).get(r);
        if (n)
          li(n), c(this, fr).delete(r);
        else {
          var i = c(this, Ue).get(r);
          i && (li(i.effect), c(this, yt).set(r, i.effect), c(this, Ue).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, a] of c(this, wt)) {
          if (c(this, wt).delete(o), o === t)
            break;
          const s = c(this, Ue).get(a);
          s && ($e(s.effect), c(this, Ue).delete(a));
        }
        for (const [o, a] of c(this, yt)) {
          if (o === r || c(this, fr).has(o)) continue;
          const s = () => {
            if (Array.from(c(this, wt).values()).includes(o)) {
              var w = document.createDocumentFragment();
              To(a, w), w.append(nt()), c(this, Ue).set(o, { effect: a, fragment: w });
            } else
              $e(a);
            c(this, fr).delete(o), c(this, yt).delete(o);
          };
          c(this, Mn) || !n ? (c(this, fr).add(o), gr(a, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, wi, (t) => {
      c(this, wt).delete(t);
      const r = Array.from(c(this, wt).values());
      for (const [n, i] of c(this, Ue))
        r.includes(n) || ($e(i.effect), c(this, Ue).delete(n));
    });
    this.anchor = t, z(this, Mn, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      R
    ), i = ms();
    if (r && !c(this, yt).has(t) && !c(this, Ue).has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = nt();
        o.append(a), c(this, Ue).set(t, {
          effect: tt(() => r(a)),
          fragment: o
        });
      } else
        c(this, yt).set(
          t,
          tt(() => r(this.anchor))
        );
    if (c(this, wt).set(n, t), i) {
      for (const [s, d] of c(this, yt))
        s === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [s, d] of c(this, Ue))
        s === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(c(this, zn)), n.ondiscard(c(this, wi));
    } else
      N && (this.anchor = D), c(this, zn).call(this, n);
  }
}
wt = new WeakMap(), yt = new WeakMap(), Ue = new WeakMap(), fr = new WeakMap(), Mn = new WeakMap(), zn = new WeakMap(), wi = new WeakMap();
function Jd(e, t, ...r) {
  var n = new Is(e);
  xi(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((o) => i(o, ...r)));
  }, vr);
}
function Qd(e) {
  je === null && id(), no(() => {
    const t = An(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function be(e, t, r = !1) {
  var n;
  N && (n = D, Rn());
  var i = new Is(e), o = r ? vr : 0;
  function a(s, d) {
    if (N) {
      var w = vo(
        /** @type {TemplateNode} */
        n
      );
      if (s !== parseInt(w.substring(1))) {
        var u = oi();
        Oe(u), i.anchor = u, At(!1), i.ensure(s, d), At(!0);
        return;
      }
    }
    i.ensure(s, d);
  }
  xi(() => {
    var s = !1;
    t((d, w = 0) => {
      s = !0, a(w, d);
    }), s || a(-1, null);
  }, o);
}
function eh(e, t, r) {
  for (var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++) {
    let m = t[s];
    gr(
      m,
      () => {
        if (o) {
          if (o.pending.delete(m), o.done.add(m), o.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            wo(e, mi(o.done)), v.delete(o), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var d = n.length === 0 && r !== null && e.pending.size === 0;
    if (d) {
      var w = (
        /** @type {Element} */
        r
      ), u = (
        /** @type {Element} */
        w.parentNode
      );
      fs(u), u.append(w), e.items.clear();
    }
    wo(e, t, !d);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function wo(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const s of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(s).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    if (n != null && n.has(o)) {
      o.f |= xt;
      const a = document.createDocumentFragment();
      To(o, a);
    } else
      $e(t[i], r);
  }
}
var qa;
function Sa(e, t, r, n, i, o = null) {
  var a = e, s = /* @__PURE__ */ new Map(), d = (t & La) !== 0;
  if (d) {
    var w = (
      /** @type {Element} */
      e
    );
    a = N ? Oe(/* @__PURE__ */ Qt(w)) : w.appendChild(nt());
  }
  N && Rn();
  var u = null, m = /* @__PURE__ */ es(() => {
    var W = r();
    return (
      /** @type {V[]} */
      Da(W) ? W : W == null ? [] : mi(W)
    );
  }), v = /* @__PURE__ */ new Map(), f = !0;
  function p(W) {
    if ((k.effect.f & xe) === 0) {
      k.pending.delete(W);
      var F = l(m);
      k.fallback = u, th(k, F, a, t, n), u !== null && (F.length === 0 ? (u.f & xt) === 0 ? li(u) : (u.f ^= xt, wn(u, null, a)) : gr(u, () => {
        u = null;
      }));
    }
  }
  function y(W) {
    k.pending.delete(W);
  }
  var b = xi(() => {
    var W = (
      /** @type {V[]} */
      l(m)
    ), F = W.length;
    let S = !1;
    if (N) {
      var U = vo(a) === mo;
      U !== (F === 0) && (a = oi(), Oe(a), At(!1), S = !0);
    }
    for (var ae = /* @__PURE__ */ new Set(), J = (
      /** @type {Batch} */
      R
    ), Q = ms(), ye = 0; ye < F; ye += 1) {
      N && D.nodeType === En && /** @type {Comment} */
      D.data === go && (a = /** @type {Comment} */
      D, S = !0, At(!1));
      var fe = W[ye], pe = n(fe, ye), V = f ? null : s.get(pe);
      V ? (V.v && Fr(V.v, fe), V.i && Fr(V.i, ye), Q && J.unskip_effect(V.e)) : (V = rh(
        s,
        f ? a : qa ?? (qa = nt()),
        fe,
        pe,
        ye,
        i,
        t,
        r
      ), f || (V.e.f |= xt), s.set(pe, V)), ae.add(pe);
    }
    if (F === 0 && o && !u && (f ? u = tt(() => o(a)) : (u = tt(() => o(qa ?? (qa = nt()))), u.f |= xt)), F > ae.size && ad(), N && F > 0 && Oe(oi()), !f)
      if (v.set(J, ae), Q) {
        for (const [ot, at] of s)
          ae.has(ot) || J.skip_effect(at.e);
        J.oncommit(p), J.ondiscard(y);
      } else
        p(J);
    S && At(!0), l(m);
  }), k = { effect: b, items: s, pending: v, outrogroups: null, fallback: u };
  f = !1, N && (a = D);
}
function on(e) {
  for (; e !== null && (e.f & gt) === 0; )
    e = e.next;
  return e;
}
function th(e, t, r, n, i) {
  var fe, pe, V, ot, at, xr, _r, jr, In;
  var o = (n & Il) !== 0, a = t.length, s = e.items, d = on(e.effect.first), w, u = null, m, v = [], f = [], p, y, b, k;
  if (o)
    for (k = 0; k < a; k += 1)
      p = t[k], y = i(p, k), b = /** @type {EachItem} */
      s.get(y).e, (b.f & xt) === 0 && ((pe = (fe = b.nodes) == null ? void 0 : fe.a) == null || pe.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(b));
  for (k = 0; k < a; k += 1) {
    if (p = t[k], y = i(p, k), b = /** @type {EachItem} */
    s.get(y).e, e.outrogroups !== null)
      for (const st of e.outrogroups)
        st.pending.delete(b), st.done.delete(b);
    if ((b.f & Re) !== 0 && (li(b), o && ((ot = (V = b.nodes) == null ? void 0 : V.a) == null || ot.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(b))), (b.f & xt) !== 0)
      if (b.f ^= xt, b === d)
        wn(b, null, r);
      else {
        var W = u ? u.next : d;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), Ft(e, u, b), Ft(e, b, W), wn(b, W, r), u = b, v = [], f = [], d = on(u.next);
        continue;
      }
    if (b !== d) {
      if (w !== void 0 && w.has(b)) {
        if (v.length < f.length) {
          var F = f[0], S;
          u = F.prev;
          var U = v[0], ae = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            wn(v[S], F, r);
          for (S = 0; S < f.length; S += 1)
            w.delete(f[S]);
          Ft(e, U.prev, ae.next), Ft(e, u, U), Ft(e, ae, F), d = F, u = ae, k -= 1, v = [], f = [];
        } else
          w.delete(b), wn(b, d, r), Ft(e, b.prev, b.next), Ft(e, b, u === null ? e.effect.first : u.next), Ft(e, u, b), u = b;
        continue;
      }
      for (v = [], f = []; d !== null && d !== b; )
        (w ?? (w = /* @__PURE__ */ new Set())).add(d), f.push(d), d = on(d.next);
      if (d === null)
        continue;
    }
    (b.f & xt) === 0 && v.push(b), u = b, d = on(b.next);
  }
  if (e.outrogroups !== null) {
    for (const st of e.outrogroups)
      st.pending.size === 0 && (wo(e, mi(st.done)), (at = e.outrogroups) == null || at.delete(st));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || w !== void 0) {
    var J = [];
    if (w !== void 0)
      for (b of w)
        (b.f & Re) === 0 && J.push(b);
    for (; d !== null; )
      (d.f & Re) === 0 && d !== e.fallback && J.push(d), d = on(d.next);
    var Q = J.length;
    if (Q > 0) {
      var ye = (n & La) !== 0 && a === 0 ? r : null;
      if (o) {
        for (k = 0; k < Q; k += 1)
          (_r = (xr = J[k].nodes) == null ? void 0 : xr.a) == null || _r.measure();
        for (k = 0; k < Q; k += 1)
          (In = (jr = J[k].nodes) == null ? void 0 : jr.a) == null || In.fix();
      }
      eh(e, J, ye);
    }
  }
  o && It(() => {
    var st, Bn;
    if (m !== void 0)
      for (b of m)
        (Bn = (st = b.nodes) == null ? void 0 : st.a) == null || Bn.apply();
  });
}
function rh(e, t, r, n, i, o, a, s) {
  var d = (a & Cl) !== 0 ? (a & Bl) === 0 ? /* @__PURE__ */ ds(r, !1, !1) : br(r) : null, w = (a & Al) !== 0 ? br(i) : null;
  return {
    v: d,
    i: w,
    e: tt(() => (o(t, d ?? r, w ?? i, s), () => {
      e.delete(n);
    }))
  };
}
function wn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & xt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ St(n)
      );
      if (o.before(n), n === i)
        return;
      n = a;
    }
}
function Ft(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function nh(e, t, r, n, i) {
  var s, d;
  if (N && Rn(), (s = t.$$host) != null && s.$$shadowRoot) {
    const w = ki("slot");
    le(e, w);
    return;
  }
  var o = (d = t.$$slots) == null ? void 0 : d[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => n : n);
}
function Po(e, t) {
  So(() => {
    var i, o;
    e = ((o = (i = I == null ? void 0 : I.parent) == null ? void 0 : i.nodes) == null ? void 0 : o.start) ?? e;
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
      const a = ki("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function Bs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Bs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ih() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Bs(e)) && (n && (n += " "), n += t);
  return n;
}
function Te(e) {
  return typeof e == "object" ? ih(e) : e ?? "";
}
const Ma = [...` 	
\r\f \v\uFEFF`];
function oh(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var o = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var s = a + o;
          (a === 0 || Ma.includes(n[a - 1])) && (s === n.length || Ma.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
        }
  }
  return n === "" ? null : n;
}
function za(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function ah(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += za(n)), i && (r += za(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function ue(e, t, r, n, i, o) {
  var a = (
    /** @type {any} */
    e[Zi]
  );
  if (N || a !== r || a === void 0) {
    var s = oh(r, n, o);
    (!N || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e[Zi] = r;
  } else if (o && i !== o)
    for (var d in o) {
      var w = !!o[d];
      (i == null || w !== !!i[d]) && e.classList.toggle(d, w);
    }
  return o;
}
function Fi(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function ei(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[Xi]
  );
  if (N || i !== t) {
    var o = ah(t, n);
    (!N || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e[Xi] = t;
  } else n && (Array.isArray(n) ? (Fi(e, r == null ? void 0 : r[0], n[0]), Fi(e, r == null ? void 0 : r[1], n[1], "important")) : Fi(e, r, n));
  return n;
}
const sh = Symbol("is custom element"), lh = Symbol("is html"), dh = Ql ? "link" : "LINK";
function G(e, t, r, n) {
  var i = hh(e);
  N && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === dh) || i[t] !== (i[t] = r) && (t === "loading" && (e[Jl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ch(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function hh(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Kn] ?? (e[Kn] = {
      [sh]: e.nodeName.includes("-"),
      [lh]: e.namespaceURI === Fl
    })
  );
}
var Ta = /* @__PURE__ */ new Map();
function ch(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Ta.get(t);
  if (r) return r;
  Ta.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = Gl(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = Na(i);
  }
  return r;
}
var Yt, Dr, Tn, ui, Ls;
const fi = class fi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    E(this, ui);
    /** */
    E(this, Yt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    E(this, Dr);
    /** @type {ResizeObserverOptions} */
    E(this, Tn);
    z(this, Tn, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = c(this, Yt).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), c(this, Yt).set(t, n), T(this, ui, Ls).call(this).observe(t, c(this, Tn)), () => {
      var i = c(this, Yt).get(t);
      i.delete(r), i.size === 0 && (c(this, Yt).delete(t), c(this, Dr).unobserve(t));
    };
  }
};
Yt = new WeakMap(), Dr = new WeakMap(), Tn = new WeakMap(), ui = new WeakSet(), Ls = function() {
  return c(this, Dr) ?? z(this, Dr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        fi.entries.set(r.target, r);
        for (var n of c(this, Yt).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
X(fi, "entries", /* @__PURE__ */ new WeakMap());
let uo = fi;
var wh = /* @__PURE__ */ new uo({
  box: "border-box"
});
function Pa(e, t, r) {
  var n = wh.observe(e, () => r(e[t]));
  So(() => (An(() => r(e[t])), n));
}
function Vi(e, t) {
  return e === t || (e == null ? void 0 : e[un]) === t;
}
function Ea(e = bo(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    je.r
  ), o = (
    /** @type {Effect} */
    I
  );
  return So(() => {
    var a, s;
    return Mo(() => {
      a = s, s = [], An(() => {
        Vi(r(...s), e) || (t(e, ...s), a && Vi(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let d = o;
      for (; d !== i && d.parent !== null && d.parent.f & yn; )
        d = d.parent;
      const w = () => {
        s && Vi(r(...s), e) && t(null, ...s);
      }, u = d.teardown;
      d.teardown = () => {
        w(), u == null || u();
      };
    };
  }), e;
}
let Xn = !1;
function uh(e) {
  var t = Xn;
  try {
    return Xn = !1, [e(), Xn];
  } finally {
    Xn = t;
  }
}
function M(e, t, r, n) {
  var S;
  var i = !0, o = (r & Wl) !== 0, a = (r & Dl) !== 0, s = (
    /** @type {V} */
    n
  ), d = !0, w = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), u = () => a && i ? (w ?? (w = /* @__PURE__ */ kn(
    /** @type {() => V} */
    n
  )), l(w)) : (d && (d = !1, s = a ? An(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let m;
  if (o) {
    var v = un in e || Ua in e;
    m = ((S = mr(e, t)) == null ? void 0 : S.set) ?? (v && t in e ? (U) => e[t] = U : void 0);
  }
  var f, p = !1;
  o ? [f, p] = uh(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && n !== void 0 && (f = u(), m && (wd(), m(f)));
  var y;
  if (y = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? u() : (d = !0, U);
  }, (r & Ol) === 0)
    return y;
  if (m) {
    var b = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(U, ae) {
        return arguments.length > 0 ? ((!ae || b || p) && m(ae ? y() : U), U) : y();
      })
    );
  }
  var k = !1, W = ((r & Ll) !== 0 ? kn : es)(() => (k = !1, y()));
  o && l(W);
  var F = (
    /** @type {Effect} */
    I
  );
  return (
    /** @type {() => V} */
    (function(U, ae) {
      if (arguments.length > 0) {
        const J = ae ? l(W) : o ? sr(U) : U;
        return B(W, J), k = !0, s !== void 0 && (s = J), U;
      }
      return Lt && k || (F.f & xe) !== 0 ? W.v : l(W);
    })
  );
}
function fh(e) {
  return new mh(e);
}
var $t, et;
class mh {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    E(this, $t);
    /** @type {Record<string, any>} */
    E(this, et);
    var o;
    var r = /* @__PURE__ */ new Map(), n = (a, s) => {
      var d = /* @__PURE__ */ ds(s, !1, !1);
      return r.set(a, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return l(r.get(s) ?? n(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Ua ? !0 : (l(r.get(s) ?? n(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, d) {
          return B(r.get(s) ?? n(s, d), d), Reflect.set(a, s, d);
        }
      }
    );
    z(this, et, (t.hydrate ? Xd : Cs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && q(), z(this, $t, i.$$events);
    for (const a of Object.keys(c(this, et)))
      a === "$set" || a === "$destroy" || a === "$on" || bn(this, a, {
        get() {
          return c(this, et)[a];
        },
        /** @param {any} value */
        set(s) {
          c(this, et)[a] = s;
        },
        enumerable: !0
      });
    c(this, et).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, c(this, et).$destroy = () => {
      Kd(c(this, et));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    c(this, et).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    c(this, $t)[t] = c(this, $t)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return c(this, $t)[t].push(n), () => {
      c(this, $t)[t] = c(this, $t)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    c(this, et).$destroy();
  }
}
$t = new WeakMap(), et = new WeakMap();
let Os;
typeof HTMLElement == "function" && (Os = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    X(this, "$$ctor");
    /** Slots */
    X(this, "$$s");
    /** @type {any} The Svelte component instance */
    X(this, "$$c");
    /** Whether or not the custom element is connected */
    X(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    X(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    X(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    X(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    X(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    X(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    X(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    X(this, "$$shadowRoot", null);
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
      let r = function(o) {
        return (a) => {
          const s = ki("slot");
          o !== "default" && (s.name = o), le(a, s);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = gh(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = r(o), n.default = !0) : n[o] = r(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = ti(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = fh({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Rd(() => {
        Mo(() => {
          var o;
          this.$$r = !0;
          for (const a of ri(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = ti(
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
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ti(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return ri(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ti(e, t, r, n) {
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
function gh(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Eo(e, t, r, n, i, o) {
  let a = class extends Os {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ri(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ri(t).forEach((s) => {
    bn(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(d) {
        var m;
        d = ti(s, d, t), this.$$d[s] = d;
        var w = this.$$c;
        if (w) {
          var u = (m = mr(w, s)) == null ? void 0 : m.get;
          u ? w[s] = d : w.$set({ [s]: d });
        }
      }
    });
  }), n.forEach((s) => {
    bn(a.prototype, s, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const x = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, _ = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, Ra = (e) => `<g fill="#000">${e}</g>`, ph = {
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
        svg: x(
          _(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: x(
          _(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: x(
          `${Ra('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${_(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
          _('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: x(
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
        svg: x(
          `${_('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${Ra(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(_('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
          _('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: x(_('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: x(
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
        svg: x(_('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
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
        svg: x(
          _('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: x(
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
        svg: x(_('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: x(_('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: x(_('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: x(_('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: x(_('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: x(_('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: x(_('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: x(
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
        svg: x(
          _('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: x(
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
        svg: x(_('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: x(_('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function vh(e, t) {
  const r = ph[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const $a = /* @__PURE__ */ new Map();
function bh(e, t) {
  const r = `${e}:${t ?? "default"}`, n = $a.get(r);
  if (n)
    return n;
  const i = vh(e, t), o = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return $a.set(r, o), o;
}
var yh = /* @__PURE__ */ Ce("<span></span>");
const kh = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function Ke(e, t) {
  bi(t, !0), Po(e, kh);
  let r = M(t, "name", 7), n = M(t, "variant", 7), i = M(t, "decorative", 7, !0), o = M(t, "label", 7), a = M(t, "title", 7), s = M(t, "size", 7, "1rem"), d = M(t, "className", 7, ""), w = /* @__PURE__ */ C(() => bh(r(), n())), u = /* @__PURE__ */ C(() => o() ?? a() ?? r());
  var m = {
    get name() {
      return r();
    },
    set name(p) {
      r(p), q();
    },
    get variant() {
      return n();
    },
    set variant(p) {
      n(p), q();
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
      return s();
    },
    set size(p = "1rem") {
      s(p), q();
    },
    get className() {
      return d();
    },
    set className(p = "") {
      d(p), q();
    }
  }, v = yh();
  let f;
  return ze(
    (p) => {
      ue(v, 1, p, "svelte-1a09gvd"), G(v, "aria-hidden", i()), G(v, "aria-label", i() ? void 0 : l(u)), G(v, "role", i() ? void 0 : "img"), G(v, "title", a()), f = ei(v, "", f, { "--icon-mask": l(w), width: s(), height: s() });
    },
    [() => Te(`app-icon ${d()}`.trim())]
  ), le(e, v), yi(m);
}
Eo(
  Ke,
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
const Ro = "efsdb:window-settings", fo = {
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
}, xh = /* @__PURE__ */ new Set(["aero"]);
function _h(e) {
  return xh.has(e);
}
function _i(e) {
  if (!_h(e.themePreset))
    return e;
  const t = fo[e.themePreset];
  return t ? {
    ...e,
    ...t.settings,
    themePreset: e.themePreset
  } : e;
}
const Ca = {
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
}, A = {
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
}, di = /* @__PURE__ */ new Set();
let Ct = Ds();
function jh(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function qh(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function Sh(e) {
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
      return A.buttonLayout;
  }
}
function Mh(e) {
  return e === "left" ? "left" : A.systemButtonPlacement;
}
function zh(e) {
  return e === "mirrored" ? "mirrored" : A.sideResizeMode;
}
function Th(e) {
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
      return A.themePreset;
  }
}
function Ph(e) {
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
      return A.fontPreset;
  }
}
function Eh(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return A.shiftDragAction;
  }
}
function Rh(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return A.chromeColorSource;
  }
}
function $h(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return A.chromeGlossStyle;
  }
}
function Ch(e) {
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
      return A.chromeBeamStyle;
  }
}
function Ah(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return A.titleTone;
  }
}
function Ih(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return A.titleEffect;
  }
}
function Bh(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return A.dockLabelMode;
  }
}
function Lh(e) {
  return e === "expanded" ? "expanded" : A.pageThemeSpread;
}
function Pe(e, t, r, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(r, Math.min(n, Math.round(i))) : t;
}
function Ws(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : Ch(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : $h(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: Sh(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: Mh(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: zh(e == null ? void 0 : e.sideResizeMode),
    borderWidth: Pe(
      e == null ? void 0 : e.borderWidth,
      A.borderWidth,
      0,
      12
    ),
    borderRadius: Pe(
      e == null ? void 0 : e.borderRadius,
      A.borderRadius,
      0,
      32
    ),
    chromePadding: Pe(
      e == null ? void 0 : e.chromePadding,
      A.chromePadding,
      0,
      20
    ),
    titleBarHeight: Pe(
      e == null ? void 0 : e.titleBarHeight,
      A.titleBarHeight,
      28,
      72
    ),
    windowScale: Pe(
      e == null ? void 0 : e.windowScale,
      A.windowScale,
      75,
      140
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : A.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : A.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: Pe(
      e == null ? void 0 : e.chromeBeamIntensity,
      A.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: Pe(
      e == null ? void 0 : e.chromeGlossIntensity,
      A.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Pe(
      e == null ? void 0 : e.chromeGlossSpacing,
      A.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : A.chromeColorize,
    chromeColorSource: Rh(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: Pe(
      e == null ? void 0 : e.chromeColorIntensity,
      A.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : A.alignment,
    titleTone: Ah(e == null ? void 0 : e.titleTone),
    titleEffect: Ih(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : A.snapRestoreOnRelease,
    shiftDragAction: Eh(e == null ? void 0 : e.shiftDragAction),
    themePreset: Th(e == null ? void 0 : e.themePreset),
    fontPreset: Ph(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : A.globalEdgeDock,
    dockButtonSize: Pe(
      e == null ? void 0 : e.dockButtonSize,
      A.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Pe(
      e == null ? void 0 : e.dockButtonWidth,
      A.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Pe(
      e == null ? void 0 : e.dockIconScale,
      A.dockIconScale,
      70,
      160
    ),
    dockGap: Pe(e == null ? void 0 : e.dockGap, A.dockGap, 4, 24),
    dockOffset: Pe(e == null ? void 0 : e.dockOffset, A.dockOffset, 8, 36),
    dockLabelMode: Bh(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: Lh(e == null ? void 0 : e.pageThemeSpread)
  };
}
function Oh(e) {
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
function Wh(e) {
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
function Dh(e) {
  return (fo[e] ?? fo.inherit).shadow;
}
function Nh(e) {
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
function Hh(e) {
  const t = _i(e), r = t.chromeTexture ? Math.max(0, Math.min(1, t.chromeBeamIntensity / 100)) : 0, n = t.chromeTexture ? t.chromeBeamStyle : "none", o = `${(n === "vista" ? 0.98 : n === "windows-7" ? 0.94 : n === "xp-luna" ? 0.82 : n === "windows-9x" ? 0.72 : n === "kde" ? 0.7 : n === "mica" ? 0.62 : 0) * r}`, a = Math.max(0, Math.min(1, t.chromeGlossIntensity / 100)), s = t.chromeColorize ? `${Math.max(0, Math.min(0.88, t.chromeColorIntensity / 100))}` : "0", d = Nh(t.chromeColorSource), w = Pe(t.chromeColorIntensity, 48, 0, 100), u = t.chromeColorize ? Math.round(34 + w / 100 * 42) : 0, m = t.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - u}%, ${d} ${u}%)` : "#4580c4", v = {
    "--efs-window-chrome-texture-opacity": o,
    "--efs-window-chrome-beam-intensity": `${r}`,
    "--efs-window-chrome-gloss-intensity": `${a}`,
    "--efs-window-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": s,
    "--efs-window-chrome-tint": d,
    "--efs-window-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-window-shell-scale": `${t.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": o,
    "--efs-widget-chrome-beam-intensity": `${r}`,
    "--efs-widget-chrome-gloss-intensity": `${a}`,
    "--efs-widget-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": s,
    "--efs-widget-theme-tint": d,
    "--efs-widget-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${t.windowScale / 100}`,
    "--efs-win7-window-bg": m
  };
  if (!t.chromeColorize)
    return v;
  const f = w, p = Math.round(f / 100 * 34), y = Math.round(f / 100 * 26), b = Math.round(10 + f / 100 * 46), k = Math.round(6 + f / 100 * 32), W = Math.round(f / 100 * 28), F = Math.round(f / 100 * 22), S = Math.round(12 + f / 100 * 46), U = Math.round(10 + f / 100 * 34), ae = Math.round(90 - f / 100 * 16), J = Math.round(92 - f / 100 * 18);
  return v["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - p}%, ${d} ${p}%)`, v["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - y}%, ${d} ${y}%)`, v["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - b}%, ${d} ${b}%)`, v["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - k}%, ${d} ${k}%)`, v["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${d}, transparent ${ae}%), var(--efs-window-shell-shadow)`, v["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - W}%, ${d} ${W}%)`, v["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - F}%, ${d} ${F}%)`, v["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - S}%, ${d} ${S}%)`, v["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - U}%, ${d} ${U}%)`, v["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${d}, transparent ${J}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, v;
}
function Ds() {
  const e = jh(Ro);
  if (!e)
    return pn(A), { ...A };
  try {
    const t = JSON.parse(e), r = _i(Ws(t));
    return pn(r), r;
  } catch {
    return pn(A), { ...A };
  }
}
function Fh(e) {
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
function Gi(e, t) {
  const r = _i(t), n = e.documentElement.style, i = e.documentElement, o = r.chromeGlossStyle, a = r.chromeTexture ? r.chromeBeamStyle : "none", s = Math.max(r.dockButtonSize, r.dockButtonWidth), d = Ca[r.fontPreset] ?? Ca.system, w = Dh(r.themePreset), u = Hh(r), m = [
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
  n.setProperty("--efs-font-sans", d.stack), n.setProperty("--shell-font-sans", d.stack), n.setProperty("--efs-window-font-family", d.stack), n.setProperty("--efs-window-border-width", `${r.borderWidth}px`), n.setProperty("--efs-window-radius", `${r.borderRadius}px`), n.setProperty("--efs-window-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-window-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-window-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-window-system-button-placement", r.systemButtonPlacement), n.setProperty("--efs-window-side-resize-mode", r.sideResizeMode), n.setProperty("--efs-window-shell-shadow", w), n.setProperty("--efs-widget-border-width", `${r.borderWidth}px`), n.setProperty("--efs-widget-radius", `${r.borderRadius}px`), n.setProperty("--efs-widget-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-widget-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-widget-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-widget-shadow", w), n.setProperty("--efs-dock-button-size", `${r.dockButtonSize}px`), n.setProperty("--efs-dock-button-width", `${s}px`), n.setProperty("--efs-dock-gap", `${r.dockGap}px`), n.setProperty("--efs-dock-offset", `${r.dockOffset}px`), n.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(r.dockButtonSize * 0.39))}px`
  ), n.setProperty("--efs-dock-icon-scale", `${r.dockIconScale / 100}`), n.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(s + r.dockButtonSize * 1.8))}px`
  ), n.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(r.dockButtonSize * 0.31))}px`
  ), n.setProperty("--efs-dock-label-mode", r.dockLabelMode), n.setProperty("--efs-dock-global-enabled", r.globalEdgeDock ? "1" : "0"), n.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), n.setProperty("--efs-page-theme-spread", r.pageThemeSpread), i.setAttribute("data-efs-page-theme", r.pageThemeSpread), i.setAttribute("data-efs-window-gloss", o), i.setAttribute("data-efs-window-beam", a), m.forEach((v) => n.removeProperty(v)), Object.entries(u).forEach(([v, f]) => n.setProperty(v, f));
}
function pn(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    Gi(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = Fh(t);
  if (r.length === 0) {
    Gi(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      Gi(n.document, e);
    } catch {
    }
  });
}
function Vh(e) {
  Ct = _i(
    Ws({
      ...Ct,
      ...e
    })
  ), pn(Ct), qh(Ro, JSON.stringify(Ct)), di.forEach((t) => t(Ct));
}
function Gh(e) {
  return di.add(e), e(Ct), () => {
    di.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  pn(Ct);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || Vh(t);
}), window.addEventListener("storage", (e) => {
  e.key === Ro && (Ct = Ds(), di.forEach((t) => t(Ct)));
}));
var Uh = /* @__PURE__ */ Ce('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), Yh = /* @__PURE__ */ Ce("<div><span></span></div>"), Zh = /* @__PURE__ */ Ce('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Ui = /* @__PURE__ */ Ce('<button type="button"><!></button>'), Xh = /* @__PURE__ */ Ce('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Kh = /* @__PURE__ */ Ce('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), Jh = /* @__PURE__ */ Ce('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), Qh = /* @__PURE__ */ Ce('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), ec = /* @__PURE__ */ Ce('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), tc = /* @__PURE__ */ Ce("<div><!></div>"), rc = /* @__PURE__ */ Ce('<button type="button" tabindex="-1" aria-hidden="true"></button>'), nc = /* @__PURE__ */ Ce("<!> <!> <div><!> <!> <!></div>", 1);
const ic = {
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
function Ns(e, t) {
  bi(t, !0), Po(e, ic);
  let r = M(t, "title", 7), n = M(t, "helpText", 7, ""), i = M(t, "helpPlacement", 7, "auto"), o = M(t, "state", 15, "normal"), a = M(t, "x", 15, 100), s = M(t, "y", 15, 100), d = M(t, "width", 15, 600), w = M(t, "height", 15, 400), u = M(t, "locked", 7, !1), m = M(t, "chromeless", 7, !1), v = M(t, "buttonLayout", 7), f = M(t, "systemButtonPlacement", 7), p = M(t, "sideResizeMode", 7), y = M(t, "borderWidth", 7), b = M(t, "borderRadius", 7), k = M(t, "chromePadding", 7), W = M(t, "chromeStyle", 7), F = M(t, "alignment", 7), S = M(t, "themePreset", 7), U = M(t, "fontPreset", 7), ae = M(t, "snapRestoreOnRelease", 7), J = M(t, "shiftDragAction", 7), Q = M(t, "zIndex", 7, 100), ye = M(t, "pinned", 7, !1), fe = M(t, "dragSeed", 7, null), pe = M(t, "restoreFrame", 15, null), V = M(t, "snapTarget", 15, null), ot = M(t, "onClose", 7), at = M(t, "onPinToggle", 7), xr = M(t, "onConsumeDragSeed", 7), _r = M(t, "onStateChange", 7), jr = M(t, "children", 7);
  const In = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], st = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), Bn = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], Gr = 360, Ln = 240, Hs = 1400;
  let ce = /* @__PURE__ */ de(sr({ ...A })), $o = /* @__PURE__ */ de(!1), Ur = /* @__PURE__ */ de(!1), pt = /* @__PURE__ */ de(null), On = /* @__PURE__ */ de(null), Wn = /* @__PURE__ */ de(0), Dn = /* @__PURE__ */ de(0), Co = "", Ao = 0, Io = 0, Nn = 0, ji = 0, er = 0, Yr = 0, Ot = "se", qr = null, Zr = !1, tr = !1, Bo = 0.5, Lo = 18, Sr = !1, Xr = /* @__PURE__ */ de(null), rr = 0, nr = /* @__PURE__ */ de(null), Oo = /* @__PURE__ */ de(0), Wo = /* @__PURE__ */ de(0);
  Qd(() => {
    const h = requestAnimationFrame(() => {
      B($o, !0);
    }), g = Gh((j) => {
      B(ce, { ...j }, !0);
    });
    return () => {
      cancelAnimationFrame(h), g(), tn(), rr && typeof window < "u" && window.clearTimeout(rr);
    };
  });
  let Ze = /* @__PURE__ */ C(() => v() ?? l(ce).buttonLayout), Do = /* @__PURE__ */ C(() => f() ?? l(ce).systemButtonPlacement), No = /* @__PURE__ */ C(() => p() ?? l(ce).sideResizeMode), qi = /* @__PURE__ */ C(() => y() ?? l(ce).borderWidth), Fs = /* @__PURE__ */ C(() => b() ?? l(ce).borderRadius), Vs = /* @__PURE__ */ C(() => k() ?? l(ce).chromePadding), Hn = /* @__PURE__ */ C(() => Math.max(28, l(ce).titleBarHeight ?? A.titleBarHeight)), Gs = /* @__PURE__ */ C(() => Math.max(0.75, (l(ce).windowScale ?? A.windowScale) / 100)), Ho = /* @__PURE__ */ C(() => W() ?? l(ce).chromeStyle), Us = /* @__PURE__ */ C(() => l(ce).chromeTexture ? l(ce).chromeBeamStyle : "none"), Ys = /* @__PURE__ */ C(() => l(ce).chromeGlossStyle), Zs = /* @__PURE__ */ C(() => F() ?? l(ce).alignment), Mr = /* @__PURE__ */ C(() => S() ?? l(ce).themePreset), Xs = /* @__PURE__ */ C(() => U() ?? l(ce).fontPreset), Ks = /* @__PURE__ */ C(() => ae() ?? l(ce).snapRestoreOnRelease), Js = /* @__PURE__ */ C(() => J() ?? l(ce).shiftDragAction), Qs = /* @__PURE__ */ C(() => d() < 560 ? "left" : l(Zs)), Fo = /* @__PURE__ */ C(() => d() < 520), el = /* @__PURE__ */ C(() => Oh({
    themePreset: l(Mr),
    titleTone: l(ce).titleTone
  })), tl = /* @__PURE__ */ C(() => Wh({
    themePreset: l(Mr),
    titleEffect: l(ce).titleEffect
  })), Vo = /* @__PURE__ */ C(() => n().trim().length > 0), Go = /* @__PURE__ */ C(() => i() === "auto" ? l(Do) === "left" ? "after" : "before" : i()), $ = /* @__PURE__ */ C(() => l(Mr) === "aero"), Uo = /* @__PURE__ */ C(() => l(Mr) === "windows-basic"), ee = /* @__PURE__ */ C(() => l($) || l(Uo)), Se = /* @__PURE__ */ C(() => l(ee) || l(Mr) === "windows-vista"), rl = /* @__PURE__ */ C(() => Math.max(l(Oo), l(Wo)) + (l(Fo) ? 12 : 18));
  function Si(h) {
    return st.has(h);
  }
  function Yo(h) {
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
  function Zo(h, g = !1) {
    if (g)
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
  function Xo(h, g = !1) {
    if (g)
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
  let Wt = /* @__PURE__ */ de(!1), Kr = 0, Jr = 0, Fn = 0, Vn = 0, nl = /* @__PURE__ */ C(() => l(Wt) && !m() && !u() && l(Ze) !== "mac" && typeof window < "u" && l(Dn) <= 84 && Math.abs(l(Wn) - window.innerWidth / 2) <= 232), Qr = /* @__PURE__ */ C(() => l(pt) ? Qo(l(pt)) : null);
  function Dt(h) {
    var g;
    o() !== h && (o(h), (g = _r()) == null || g(o()));
  }
  function en() {
    return { x: a(), y: s(), width: d(), height: w() };
  }
  function Mi(h, g = d()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerWidth - g, h));
  }
  function zi(h, g = w()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerHeight - Math.min(g, l(Hn)), h));
  }
  function ir(h) {
    const g = Math.max(Gr, Math.round(h.width)), j = Math.max(Ln, Math.round(h.height));
    return {
      x: Mi(Math.round(h.x), g),
      y: zi(Math.round(h.y), j),
      width: g,
      height: j
    };
  }
  function Ti() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : ir({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function Ko(h) {
    const g = ir(h);
    a(g.x), s(g.y), d(g.width), w(g.height), V(null), Dt("normal");
  }
  function Jo() {
    Ko(pe() ?? Ti());
  }
  function Qo(h) {
    if (typeof window > "u") return null;
    const g = window.innerWidth, j = window.innerHeight, P = Math.round(g / 2), te = Math.round(j / 2);
    switch (h) {
      case "maximize":
        return { x: 0, y: 0, width: g, height: j };
      case "left-half":
        return { x: 0, y: 0, width: P, height: j };
      case "right-half":
        return {
          x: g - P,
          y: 0,
          width: P,
          height: j
        };
      case "top-left":
        return { x: 0, y: 0, width: P, height: te };
      case "top-right":
        return {
          x: g - P,
          y: 0,
          width: P,
          height: te
        };
      case "bottom-left":
        return {
          x: 0,
          y: j - te,
          width: P,
          height: te
        };
      case "bottom-right":
        return {
          x: g - P,
          y: j - te,
          width: P,
          height: te
        };
    }
  }
  function Pi(h, g = en()) {
    if (pe(ir(g)), h === "maximize") {
      typeof window < "u" && (a(0), s(0), d(window.innerWidth), w(window.innerHeight)), V("maximize"), Dt("maximized");
      return;
    }
    const j = Qo(h);
    j && (V(h), Dt("normal"), a(j.x), s(j.y), d(j.width), w(j.height));
  }
  function il() {
    typeof window > "u" || ((o() === "maximized" || V()) && Jo(), a(Mi(Math.round((window.innerWidth - d()) / 2), d())), s(zi(Math.round((window.innerHeight - w()) / 2), w())));
  }
  function Gn() {
    if (o() === "maximized") {
      Jo();
      return;
    }
    Pi("maximize");
  }
  function ol() {
    Dt(o() === "rolled-up" ? "normal" : "rolled-up");
  }
  function ea() {
    Dt("minimized");
  }
  function al() {
    B(Xr, null), rr && typeof window < "u" && window.clearTimeout(rr), rr = 0;
  }
  function ta(h) {
    if (typeof window > "u") {
      B(Xr, h, !0);
      return;
    }
    al(), B(Xr, h, !0), rr = window.setTimeout(
      () => {
        B(Xr, null), rr = 0;
      },
      Hs
    );
  }
  function sl() {
    var te, we;
    if (typeof window > "u" || !l(nr))
      return !1;
    const h = 24, g = Math.ceil(Math.max(l(nr).scrollWidth, ((te = l(nr).firstElementChild) == null ? void 0 : te.scrollWidth) ?? 0)), j = Math.ceil(Math.max(l(nr).scrollHeight, ((we = l(nr).firstElementChild) == null ? void 0 : we.scrollHeight) ?? 0)), P = ir({
      x: Math.round((window.innerWidth - g) / 2),
      y: Math.round((window.innerHeight - j - l(Hn)) / 2),
      width: Math.min(window.innerWidth - h * 2, Math.max(Gr, g + l(qi) * 2)),
      height: Math.min(window.innerHeight - h * 2, Math.max(Ln, j + l(Hn) + l(qi) * 2))
    });
    return pe(en()), Ko(P), !0;
  }
  function ll(h) {
    if (u() || m() || ra(h.target))
      return;
    if (l(Xr) === "fit-content") {
      ta("maximize"), Gn();
      return;
    }
    const g = sl();
    ta(g ? "fit-content" : "maximize"), g || Gn();
  }
  function ra(h) {
    return !!(h != null && h.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function dl(h, g) {
    if (!l(On)) return null;
    for (const j of l(On).querySelectorAll("[data-snap-target]")) {
      const P = j.getBoundingClientRect();
      if (h >= P.left && h <= P.right && g >= P.top && g <= P.bottom)
        return j.dataset.snapTarget;
    }
    return null;
  }
  function hl(h, g) {
    if (typeof window > "u") return null;
    const j = 18, P = Math.max(72, Math.round(window.innerHeight * 0.14));
    return g <= j ? h <= window.innerWidth * 0.33 ? "top-left" : h >= window.innerWidth * 0.67 ? "top-right" : "maximize" : h <= j ? g <= P ? "top-left" : g >= window.innerHeight - P ? "bottom-left" : "left-half" : h >= window.innerWidth - j ? g <= P ? "top-right" : g >= window.innerHeight - P ? "bottom-right" : "right-half" : null;
  }
  function cl(h, g) {
    if (B(Wn, h, !0), B(Dn, g, !0), !l(Wt) || u() || m() || l(Ze) === "mac") {
      B(pt, null);
      return;
    }
    B(pt, dl(h, g) ?? hl(h, g), !0);
  }
  function wl(h, g) {
    if (!tr) return;
    const j = pe() ?? Ti(), P = ir({
      ...j,
      x: h - j.width * Bo,
      y: g - Lo
    });
    a(P.x), s(P.y), d(P.width), w(P.height), Dt("normal"), V(null), tr = !1, Zr = !0, Kr = h, Jr = g, Fn = a(), Vn = s();
  }
  function na(h) {
    !h.shiftKey || Sr || l(Js) !== "pin" || !at() || ye() || (at()(), Sr = !0);
  }
  function ul(h) {
    if (u() || m() || o() === "minimized" || ra(h.target)) return;
    B(Wt, !0), Sr = !1, B(pt, null), B(Wn, h.clientX, !0), B(Dn, h.clientY, !0), Kr = h.clientX, Jr = h.clientY, Fn = a(), Vn = s(), Zr = !1, tr = !1;
    const g = en();
    Bo = g.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (h.clientX - g.x) / g.width)), Lo = Math.max(12, Math.min(28, Math.round(h.clientY - g.y || 18))), o() === "maximized" || V() ? (qr = o() === "maximized" ? "maximize" : V(), pe(pe() ?? Ti()), tr = !0) : qr = null, na(h), h.currentTarget.setPointerCapture(h.pointerId);
  }
  function Ei(h) {
    l(Wt) && (na(h), tr && (Math.abs(h.clientX - Kr) > 2 || Math.abs(h.clientY - Jr) > 2) && wl(h.clientX, h.clientY), a(Mi(Fn + (h.clientX - Kr), d())), s(zi(Vn + (h.clientY - Jr), w())), cl(h.clientX, h.clientY));
  }
  function zr(h) {
    if (!l(Wt)) return;
    const g = l(pt);
    B(pt, null), B(Wt, !1), tr = !1, g ? Pi(g, en()) : Zr && qr && l(Ks) && !h.shiftKey && !Sr ? Pi(qr, en()) : V(null), qr = null, Zr = !1, Sr = !1;
    const j = h.currentTarget;
    "hasPointerCapture" in j && j.hasPointerCapture(h.pointerId) && j.releasePointerCapture(h.pointerId), window.removeEventListener("pointermove", Ei), window.removeEventListener("pointerup", zr), window.removeEventListener("pointercancel", zr);
  }
  function fl(h, g) {
    u() || m() || o() === "maximized" || o() === "minimized" || (V() && V(null), g.stopPropagation(), g.preventDefault(), B(Ur, !0), Ot = h, Ao = g.clientX, Io = g.clientY, Nn = a(), ji = s(), er = d(), Yr = w(), B(pt, null), window.addEventListener("pointermove", ia), window.addEventListener("pointerup", tn), window.addEventListener("pointercancel", tn));
  }
  function ia(h) {
    if (!l(Ur)) return;
    const g = h.clientX - Ao, j = h.clientY - Io;
    let P = Nn, te = ji, we = er, Me = Yr;
    if (l(No) === "mirrored" && (Ot === "e" || Ot === "w")) {
      const Ri = Ot === "e" ? g : -g;
      we = Math.max(Gr, er + Ri * 2), P = Nn - (we - er) / 2;
    } else Ot.includes("e") && (we = Math.max(Gr, er + g));
    Ot.includes("s") && (Me = Math.max(Ln, Yr + j)), l(No) !== "mirrored" && Ot.includes("w") && (we = Math.max(Gr, er - g), P = Nn + (er - we)), Ot.includes("n") && (Me = Math.max(Ln, Yr - j), te = ji + (Yr - Me));
    const zt = ir({ x: P, y: te, width: we, height: Me });
    a(zt.x), s(zt.y), d(zt.width), w(zt.height);
  }
  function tn() {
    l(Ur) && (B(Ur, !1), window.removeEventListener("pointermove", ia), window.removeEventListener("pointerup", tn), window.removeEventListener("pointercancel", tn));
  }
  function ml(h) {
    var j;
    if (typeof window > "u") return;
    const g = ir({
      x: h.clientX - Math.round(d() * 0.38),
      y: h.clientY - 18,
      width: d(),
      height: w()
    });
    a(g.x), s(g.y), Fn = a(), Vn = s(), Kr = h.clientX, Jr = h.clientY, B(Wn, h.clientX, !0), B(Dn, h.clientY, !0), B(pt, null), qr = null, Zr = !1, tr = !1, Sr = !0, B(Wt, !0), window.addEventListener("pointermove", Ei), window.addEventListener("pointerup", zr), window.addEventListener("pointercancel", zr), (j = xr()) == null || j();
  }
  no(() => {
    const h = fe() ? `${fe().pointerId}:${fe().clientX}:${fe().clientY}` : "";
    !fe() || h === Co || (Co = h, ml(fe()));
  }), no(() => {
    o() === "maximized" && V() !== "maximize" && V("maximize"), o() === "normal" && V() === "maximize" && V(null);
  });
  var gl = {
    get title() {
      return r();
    },
    set title(h) {
      r(h), q();
    },
    get helpText() {
      return n();
    },
    set helpText(h = "") {
      n(h), q();
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
      return s();
    },
    set y(h = 100) {
      s(h), q();
    },
    get width() {
      return d();
    },
    set width(h = 600) {
      d(h), q();
    },
    get height() {
      return w();
    },
    set height(h = 400) {
      w(h), q();
    },
    get locked() {
      return u();
    },
    set locked(h = !1) {
      u(h), q();
    },
    get chromeless() {
      return m();
    },
    set chromeless(h = !1) {
      m(h), q();
    },
    get buttonLayout() {
      return v();
    },
    set buttonLayout(h) {
      v(h), q();
    },
    get systemButtonPlacement() {
      return f();
    },
    set systemButtonPlacement(h) {
      f(h), q();
    },
    get sideResizeMode() {
      return p();
    },
    set sideResizeMode(h) {
      p(h), q();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(h) {
      y(h), q();
    },
    get borderRadius() {
      return b();
    },
    set borderRadius(h) {
      b(h), q();
    },
    get chromePadding() {
      return k();
    },
    set chromePadding(h) {
      k(h), q();
    },
    get chromeStyle() {
      return W();
    },
    set chromeStyle(h) {
      W(h), q();
    },
    get alignment() {
      return F();
    },
    set alignment(h) {
      F(h), q();
    },
    get themePreset() {
      return S();
    },
    set themePreset(h) {
      S(h), q();
    },
    get fontPreset() {
      return U();
    },
    set fontPreset(h) {
      U(h), q();
    },
    get snapRestoreOnRelease() {
      return ae();
    },
    set snapRestoreOnRelease(h) {
      ae(h), q();
    },
    get shiftDragAction() {
      return J();
    },
    set shiftDragAction(h) {
      J(h), q();
    },
    get zIndex() {
      return Q();
    },
    set zIndex(h = 100) {
      Q(h), q();
    },
    get pinned() {
      return ye();
    },
    set pinned(h = !1) {
      ye(h), q();
    },
    get dragSeed() {
      return fe();
    },
    set dragSeed(h = null) {
      fe(h), q();
    },
    get restoreFrame() {
      return pe();
    },
    set restoreFrame(h = null) {
      pe(h), q();
    },
    get snapTarget() {
      return V();
    },
    set snapTarget(h = null) {
      V(h), q();
    },
    get onClose() {
      return ot();
    },
    set onClose(h) {
      ot(h), q();
    },
    get onPinToggle() {
      return at();
    },
    set onPinToggle(h) {
      at(h), q();
    },
    get onConsumeDragSeed() {
      return xr();
    },
    set onConsumeDragSeed(h) {
      xr(h), q();
    },
    get onStateChange() {
      return _r();
    },
    set onStateChange(h) {
      _r(h), q();
    },
    get children() {
      return jr();
    },
    set children(h) {
      jr(h), q();
    }
  }, oa = nc(), aa = hn(oa);
  {
    var pl = (h) => {
      var g = Uh();
      let j;
      ze(() => j = ei(g, "", j, {
        left: `${l(Qr).x}px`,
        top: `${l(Qr).y}px`,
        width: `${l(Qr).width}px`,
        height: `${l(Qr).height}px`,
        "z-index": Q() + 2
      })), le(h, g);
    };
    be(aa, (h) => {
      l(Qr) && !m() && h(pl);
    });
  }
  var sa = ve(aa, 2);
  {
    var vl = (h) => {
      var g = Zh();
      let j;
      Sa(g, 21, () => In, (P) => P.id, (P, te) => {
        var we = Yh();
        let Me;
        var zt = Pr(we);
        ze(() => {
          Me = ue(we, 1, "snap-cell svelte-1k3ojqh", null, Me, { "is-active": l(pt) === l(te).id }), G(we, "data-snap-target", l(te).id), ue(zt, 1, `snap-shape shape-${l(te).preview}`, "svelte-1k3ojqh");
        }), le(P, we);
      }), K(g), Ea(g, (P) => B(On, P), () => l(On)), ze(() => j = ei(g, "", j, { "z-index": Q() + 3 })), le(h, g);
    };
    be(sa, (h) => {
      l(nl) && !m() && h(vl);
    });
  }
  var We = ve(sa, 2);
  let la, da;
  var ha = re(We);
  {
    var bl = (h) => {
      var g = ec();
      let j;
      var P = re(g), te = re(P);
      {
        var we = (Y) => {
          var ne = Ui();
          let Z;
          var Xe = re(ne);
          Ke(Xe, { name: "pin" }), K(ne), ze(() => {
            Z = ue(ne, 1, Te(l($) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Z, {
              "efs-win7-tool-button": !l($) && l(ee),
              "is-active": ye(),
              active: ye()
            }), G(ne, "aria-label", ye() ? "Unpin window" : "Pin window"), G(ne, "aria-pressed", ye());
          }), Be("click", ne, function(...Ae) {
            var De;
            (De = at()) == null || De.apply(this, Ae);
          }), le(Y, ne);
        };
        be(te, (Y) => {
          at() && Y(we);
        });
      }
      var Me = ve(te, 2);
      let zt;
      var Ri = re(Me);
      Ke(Ri, { name: "center" }), K(Me);
      var rn = ve(Me, 2);
      let wa;
      var _l = re(rn);
      {
        let Y = /* @__PURE__ */ C(() => o() === "rolled-up" ? "roll-up" : "roll-down");
        Ke(_l, {
          get name() {
            return l(Y);
          }
        });
      }
      K(rn), K(P);
      var Un = ve(P, 2);
      let ua;
      var jl = Pr(Un, !0), $i = ve(Un, 2), fa = re($i);
      {
        var ql = (Y) => {
          var ne = Xh(), Z = re(ne);
          let Xe;
          var Ae = re(Z);
          Ke(Ae, { name: "help" }), K(Z);
          var De = ve(Z, 2), Ie = re(De), Nt = Pr(Ie, !0), lt = ve(Ie, 2), Ht = Pr(lt, !0);
          K(De), K(ne), ze(() => {
            Xe = ue(
              Z,
              1,
              Te(l($) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              Xe,
              {
                "efs-win7-tool-button": !l($) && l(ee),
                "is-help": !l($) && l(ee)
              }
            ), G(Z, "aria-label", l(Se) ? "Help" : `About ${r()}`), G(Z, "title", `About ${r()}`), nn(Nt, r()), nn(Ht, n());
          }), le(Y, ne);
        };
        be(fa, (Y) => {
          l(Vo) && l(Go) === "before" && Y(ql);
        });
      }
      var Yn = ve(fa, 2);
      let ma;
      var Sl = re(Yn);
      {
        var Ml = (Y) => {
          var ne = Kh(), Z = hn(ne);
          {
            var Xe = (ie) => {
              var se = Ui();
              let Ne;
              var Ii = re(se);
              {
                var Bi = (dt) => {
                  {
                    let Tt = /* @__PURE__ */ C(() => Yo(l(Ze)));
                    Ke(dt, {
                      name: "close",
                      get variant() {
                        return l(Tt);
                      }
                    });
                  }
                };
                be(Ii, (dt) => {
                  l(ee) || dt(Bi);
                });
              }
              K(se), ze(() => {
                Ne = ue(
                  se,
                  1,
                  Te(l($) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  Ne,
                  {
                    "is-close": !l($) && l(Se)
                  }
                ), G(se, "aria-label", l(ee) ? "Close" : "Close window");
              }), Be("click", se, function(...dt) {
                var Tt;
                (Tt = ot()) == null || Tt.apply(this, dt);
              }), le(ie, se);
            };
            be(Z, (ie) => {
              ot() && ie(Xe);
            });
          }
          var Ae = ve(Z, 2);
          let De;
          var Ie = re(Ae);
          {
            var Nt = (ie) => {
              {
                let se = /* @__PURE__ */ C(() => o() === "minimized" ? "restore" : "minimize"), Ne = /* @__PURE__ */ C(() => Zo(l(Ze), o() === "minimized"));
                Ke(ie, {
                  get name() {
                    return l(se);
                  },
                  get variant() {
                    return l(Ne);
                  }
                });
              }
            };
            be(Ie, (ie) => {
              l(ee) || ie(Nt);
            });
          }
          K(Ae);
          var lt = ve(Ae, 2);
          let Ht;
          var Ci = re(lt);
          {
            var Ai = (ie) => {
              {
                let se = /* @__PURE__ */ C(() => o() === "maximized" ? "restore" : "maximize"), Ne = /* @__PURE__ */ C(() => Xo(l(Ze), o() === "maximized"));
                Ke(ie, {
                  get name() {
                    return l(se);
                  },
                  get variant() {
                    return l(Ne);
                  }
                });
              }
            };
            be(Ci, (ie) => {
              l(ee) || ie(Ai);
            });
          }
          K(lt), ze(() => {
            De = ue(
              Ae,
              1,
              Te(l($) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              De,
              {
                "is-minimize": !l($) && l(Se) && o() !== "minimized",
                "is-restore": !l($) && l(Se) && o() === "minimized"
              }
            ), G(Ae, "aria-label", l(ee) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), Ht = ue(
              lt,
              1,
              Te(l($) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Ht,
              {
                "is-maximize": !l($) && l(Se) && o() !== "maximized",
                "is-restore": !l($) && l(Se) && o() === "maximized"
              }
            ), G(lt, "aria-label", l(ee) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), Be("click", Ae, () => o() === "minimized" ? Dt("normal") : ea()), Be("click", lt, Gn), le(Y, ne);
        }, zl = /* @__PURE__ */ C(() => Si(l(Ze))), Tl = (Y) => {
          var ne = Jh(), Z = hn(ne);
          let Xe;
          var Ae = re(Z);
          {
            var De = (ie) => {
              {
                let se = /* @__PURE__ */ C(() => o() === "minimized" ? "restore" : "minimize"), Ne = /* @__PURE__ */ C(() => Zo(l(Ze), o() === "minimized"));
                Ke(ie, {
                  get name() {
                    return l(se);
                  },
                  get variant() {
                    return l(Ne);
                  }
                });
              }
            };
            be(Ae, (ie) => {
              l(ee) || ie(De);
            });
          }
          K(Z);
          var Ie = ve(Z, 2);
          let Nt;
          var lt = re(Ie);
          {
            var Ht = (ie) => {
              {
                let se = /* @__PURE__ */ C(() => o() === "maximized" ? "restore" : "maximize"), Ne = /* @__PURE__ */ C(() => Xo(l(Ze), o() === "maximized"));
                Ke(ie, {
                  get name() {
                    return l(se);
                  },
                  get variant() {
                    return l(Ne);
                  }
                });
              }
            };
            be(lt, (ie) => {
              l(ee) || ie(Ht);
            });
          }
          K(Ie);
          var Ci = ve(Ie, 2);
          {
            var Ai = (ie) => {
              var se = Ui();
              let Ne;
              var Ii = re(se);
              {
                var Bi = (dt) => {
                  {
                    let Tt = /* @__PURE__ */ C(() => Yo(l(Ze)));
                    Ke(dt, {
                      name: "close",
                      get variant() {
                        return l(Tt);
                      }
                    });
                  }
                };
                be(Ii, (dt) => {
                  l(ee) || dt(Bi);
                });
              }
              K(se), ze(() => {
                Ne = ue(
                  se,
                  1,
                  Te(l($) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  Ne,
                  {
                    "is-close": !l($) && l(Se)
                  }
                ), G(se, "aria-label", l(ee) ? "Close" : "Close window");
              }), Be("click", se, function(...dt) {
                var Tt;
                (Tt = ot()) == null || Tt.apply(this, dt);
              }), le(ie, se);
            };
            be(Ci, (ie) => {
              ot() && ie(Ai);
            });
          }
          ze(() => {
            Xe = ue(
              Z,
              1,
              Te(l($) ? o() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              Xe,
              {
                "is-minimize": !l($) && l(Se) && o() !== "minimized",
                "is-restore": !l($) && l(Se) && o() === "minimized"
              }
            ), G(Z, "aria-label", l(ee) ? o() === "minimized" ? "Restore" : "Minimize" : o() === "minimized" ? "Restore window" : "Minimize window"), Nt = ue(
              Ie,
              1,
              Te(l($) ? o() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Nt,
              {
                "is-maximize": !l($) && l(Se) && o() !== "maximized",
                "is-restore": !l($) && l(Se) && o() === "maximized"
              }
            ), G(Ie, "aria-label", l(ee) ? o() === "maximized" ? "Restore" : "Maximize" : o() === "maximized" ? "Restore window" : "Maximize window");
          }), Be("click", Z, () => o() === "minimized" ? Dt("normal") : ea()), Be("click", Ie, Gn), le(Y, ne);
        };
        be(Sl, (Y) => {
          l(zl) ? Y(Ml) : Y(Tl, -1);
        });
      }
      K(Yn);
      var Pl = ve(Yn, 2);
      {
        var El = (Y) => {
          var ne = Qh(), Z = re(ne);
          let Xe;
          var Ae = re(Z);
          Ke(Ae, { name: "help" }), K(Z);
          var De = ve(Z, 2), Ie = re(De), Nt = Pr(Ie, !0), lt = ve(Ie, 2), Ht = Pr(lt, !0);
          K(De), K(ne), ze(() => {
            Xe = ue(
              Z,
              1,
              Te(l($) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              Xe,
              {
                "efs-win7-tool-button": !l($) && l(ee),
                "is-help": !l($) && l(ee)
              }
            ), G(Z, "aria-label", l(Se) ? "Help" : `About ${r()}`), G(Z, "title", `About ${r()}`), nn(Nt, r()), nn(Ht, n());
          }), le(Y, ne);
        };
        be(Pl, (Y) => {
          l(Vo) && l(Go) === "after" && Y(El);
        });
      }
      K($i), K(g), ze(
        (Y, ne) => {
          j = ue(
            g,
            1,
            Te(l($) ? "title-bar" : `window-chrome chrome-${l(Ho)}`),
            "svelte-1k3ojqh",
            j,
            {
              "layout-mac": Y,
              "layout-windows": ne,
              "title-bar": !l($) && l(Se)
            }
          ), G(g, "aria-label", `${r()} window controls`), zt = ue(Me, 1, Te(l($) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", zt, {
            "efs-win7-tool-button": !l($) && l(ee)
          }), wa = ue(rn, 1, Te(l($) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", wa, {
            "efs-win7-tool-button": !l($) && l(ee),
            "is-active": o() === "rolled-up",
            active: o() === "rolled-up"
          }), G(rn, "aria-label", o() === "rolled-up" ? "Restore height" : "Roll up"), ua = ue(
            Un,
            1,
            Te(l($) ? "title-bar-text" : `window-title align-${l(Qs)}`),
            "svelte-1k3ojqh",
            ua,
            {
              "title-bar-text": !l($) && l(Se)
            }
          ), G(Un, "title", r()), nn(jl, r()), ma = ue(
            Yn,
            1,
            Te(l($) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            ma,
            {
              "title-bar-controls": !l($) && l(Se)
            }
          );
        },
        [
          () => !l($) && Si(l(Ze)),
          () => !l($) && !Si(l(Ze))
        ]
      ), Be("pointerdown", g, ul), Be("pointermove", g, Ei), Be("pointerup", g, zr), Wd("pointercancel", g, zr), Be("dblclick", g, ll), Be("click", Me, il), Be("click", rn, ol), Pa(P, "clientWidth", (Y) => B(Oo, Y)), Pa($i, "clientWidth", (Y) => B(Wo, Y)), le(h, g);
    };
    be(ha, (h) => {
      m() || h(bl);
    });
  }
  var ca = ve(ha, 2);
  {
    var yl = (h) => {
      var g = tc();
      let j;
      var P = re(g);
      Jd(P, () => jr() ?? Ha), K(g), Ea(g, (te) => B(nr, te), () => l(nr)), ze(() => j = ue(g, 1, "window-content svelte-1k3ojqh", null, j, { "window-body": l(ee) })), le(h, g);
    };
    be(ca, (h) => {
      o() !== "rolled-up" && o() !== "minimized" && h(yl);
    });
  }
  var kl = ve(ca, 2);
  {
    var xl = (h) => {
      var g = Ps(), j = hn(g);
      Sa(j, 16, () => Bn, (P) => P, (P, te) => {
        var we = rc();
        ze(() => ue(we, 1, `resize-handle dir-${te}`, "svelte-1k3ojqh")), Be("pointerdown", we, (Me) => fl(te, Me)), le(P, we);
      }), le(h, g);
    };
    be(kl, (h) => {
      !m() && o() !== "maximized" && o() !== "minimized" && h(xl);
    });
  }
  return K(We), ze(() => {
    la = ue(We, 1, "window-shell svelte-1k3ojqh", null, la, {
      win7: l(ee),
      "win7-theme": l($),
      "basic7-theme": l(Uo),
      window: l(ee),
      active: l(ee),
      glass: l($),
      "is-ready": l($o),
      "is-dragging": l(Wt),
      "is-resizing": l(Ur),
      "compact-controls": l(Fo),
      maximized: o() === "maximized",
      minimized: o() === "minimized",
      "rolled-up": o() === "rolled-up",
      chromeless: m()
    }), G(We, "data-layout", l($) ? void 0 : l(Ze)), G(We, "data-system-placement", l(Do)), G(We, "data-style", l($) ? void 0 : l(Ho)), G(We, "data-theme", l(Mr)), G(We, "data-font", l(Xs)), G(We, "data-beam", l($) ? void 0 : l(Us)), G(We, "data-gloss", l($) ? void 0 : l(Ys)), G(We, "data-title-tone", l($) ? void 0 : l(el)), G(We, "data-title-effect", l($) ? void 0 : l(tl)), da = ei(We, "", da, {
      "--window-border-width": `${l(qi)}px`,
      "--window-radius": `${l(Fs)}px`,
      "--window-chrome-padding": `${l(Vs)}px`,
      "--window-titlebar-height": `${l(Hn)}px`,
      "--window-shell-scale": `${l(Gs)}`,
      "--window-title-guard": `${l(rl)}px`,
      transform: o() === "normal" || o() === "rolled-up" ? `translate(${a()}px, ${s()}px)` : void 0,
      width: o() === "normal" || o() === "rolled-up" ? `${d()}px` : void 0,
      height: o() === "normal" ? `${w()}px` : void 0,
      "z-index": Q()
    });
  }), le(e, oa), yi(gl);
}
Dd([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Eo(
  Ns,
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
var oc = /* @__PURE__ */ Ce('<div class="window-content svelte-495ihg"><!></div>'), ac = /* @__PURE__ */ Ce('<div class="window-layer svelte-495ihg"><!></div>');
const sc = {
  hash: "svelte-495ihg",
  code: `\r
  @import '../../../styles/win7.css';\r
  @import '../../../styles/win7-overrides.css';:host {display:contents;}:host([hidden]) {display:none;}.window-layer.svelte-495ihg {position:fixed;inset:0;z-index:12040;pointer-events:none;isolation:isolate;}.window-layer.svelte-495ihg .window-shell {pointer-events:auto;--window-panel: var(--efs-window-theme-panel, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)));--window-surface: var(--efs-window-theme-surface, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)));--window-border: var(--efs-window-theme-border, var(--shell-border, #e2e8f0));}.window-content.svelte-495ihg {width:100%;height:100%;min-width:0;min-height:0;box-sizing:border-box;padding:0;background:transparent;}`
};
function lc(e, t) {
  bi(t, !0), Po(e, sc);
  let r = M(t, "open", 7, !1), n = M(t, "title", 7, "Window"), i = M(t, "x", 15, 120), o = M(t, "y", 15, 96), a = M(t, "width", 15, 640), s = M(t, "height", 15, 520), d = M(t, "zIndex", 7, 12040), w = M(t, "pinned", 7, !1), u = M(t, "buttonLayout", 7, "windows-11"), m = M(t, "chromeStyle", 7, "solid"), v = M(t, "alignment", 7, "left"), f = M(t, "themePreset", 7, "inherit"), p = M(t, "onClose", 7, null), y = /* @__PURE__ */ de("normal");
  var b = {
    get open() {
      return r();
    },
    set open(S = !1) {
      r(S), q();
    },
    get title() {
      return n();
    },
    set title(S = "Window") {
      n(S), q();
    },
    get x() {
      return i();
    },
    set x(S = 120) {
      i(S), q();
    },
    get y() {
      return o();
    },
    set y(S = 96) {
      o(S), q();
    },
    get width() {
      return a();
    },
    set width(S = 640) {
      a(S), q();
    },
    get height() {
      return s();
    },
    set height(S = 520) {
      s(S), q();
    },
    get zIndex() {
      return d();
    },
    set zIndex(S = 12040) {
      d(S), q();
    },
    get pinned() {
      return w();
    },
    set pinned(S = !1) {
      w(S), q();
    },
    get buttonLayout() {
      return u();
    },
    set buttonLayout(S = "windows-11") {
      u(S), q();
    },
    get chromeStyle() {
      return m();
    },
    set chromeStyle(S = "solid") {
      m(S), q();
    },
    get alignment() {
      return v();
    },
    set alignment(S = "left") {
      v(S), q();
    },
    get themePreset() {
      return f();
    },
    set themePreset(S = "inherit") {
      f(S), q();
    },
    get onClose() {
      return p();
    },
    set onClose(S = null) {
      p(S), q();
    }
  }, k = Ps(), W = hn(k);
  {
    var F = (S) => {
      var U = ac(), ae = re(U);
      {
        let J = /* @__PURE__ */ C(() => p() ?? void 0);
        Ns(ae, {
          get title() {
            return n();
          },
          get pinned() {
            return w();
          },
          get zIndex() {
            return d();
          },
          get buttonLayout() {
            return u();
          },
          get chromeStyle() {
            return m();
          },
          get alignment() {
            return v();
          },
          get themePreset() {
            return f();
          },
          get onClose() {
            return l(J);
          },
          get state() {
            return l(y);
          },
          set state(Q) {
            B(y, Q, !0);
          },
          get x() {
            return i();
          },
          set x(Q) {
            i(Q);
          },
          get y() {
            return o();
          },
          set y(Q) {
            o(Q);
          },
          get width() {
            return a();
          },
          set width(Q) {
            a(Q);
          },
          get height() {
            return s();
          },
          set height(Q) {
            s(Q);
          },
          children: (Q, ye) => {
            var fe = oc(), pe = re(fe);
            nh(pe, t, "default", {}), K(fe), le(Q, fe);
          },
          $$slots: { default: !0 }
        });
      }
      K(U), le(S, U);
    };
    be(W, (S) => {
      r() && S(F);
    });
  }
  return le(e, k), yi(b);
}
customElements.define("efsdb-window-shell", Eo(
  lc,
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
