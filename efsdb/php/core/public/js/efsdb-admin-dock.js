var Ls = Object.defineProperty;
var eo = (e) => {
  throw TypeError(e);
};
var Bs = (e, t, r) => t in e ? Ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var W = (e, t, r) => Bs(e, typeof t != "symbol" ? t + "" : t, r), qr = (e, t, r) => t.has(e) || eo("Cannot " + r);
var l = (e, t, r) => (qr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? eo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (qr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), x = (e, t, r) => (qr(e, t, "access private method"), r);
var _o;
typeof window < "u" && ((_o = window.__svelte ?? (window.__svelte = {})).v ?? (_o.v = /* @__PURE__ */ new Set())).add("5");
const Ds = 1, Ns = 2, Ws = 16, Hs = 1, Vs = 4, Gs = 8, Fs = 16, Ys = 2, Mo = "[", An = "[!", to = "[?", On = "]", it = {}, F = Symbol("uninitialized"), Us = "http://www.w3.org/1999/xhtml", xo = !1;
var $o = Array.isArray, js = Array.prototype.indexOf, or = Array.prototype.includes, Hr = Array.from, Tr = Object.keys, sr = Object.defineProperty, wt = Object.getOwnPropertyDescriptor, Xs = Object.getOwnPropertyDescriptors, Zs = Object.prototype, qs = Array.prototype, Eo = Object.getPrototypeOf, ro = Object.isExtensible;
const Ks = () => {
};
function Js(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Po() {
  var e, t, r = new Promise((n, o) => {
    e = n, t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
const K = 2, Wt = 4, Vr = 8, To = 1 << 24, $e = 16, Te = 32, Ze = 64, fn = 128, In = 256, Pe = 512, Y = 1024, G = 2048, me = 4096, ee = 8192, j = 16384, St = 32768, Rr = 1 << 25, Ht = 65536, Ar = 1 << 17, Qs = 1 << 18, Mt = 1 << 19, ei = 1 << 20, Ue = 1 << 25, Or = 1 << 21, Ot = 1 << 22, ot = 1 << 23, Sr = Symbol("$state"), Ro = Symbol("component"), Ao = Symbol("legacy props"), ti = Symbol(""), Mr = Symbol("attributes"), hn = Symbol("class"), un = Symbol("style"), jt = Symbol("text"), gr = new class extends Error {
  constructor() {
    super(...arguments);
    W(this, "name", "StaleReactionError");
    W(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var ko;
const ri = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((ko = globalThis.document) != null && ko.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Gr = 3, mr = 8;
function ni() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Fr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function oi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let z = !1;
function je(e) {
  z = e;
}
let C;
function oe(e) {
  if (e === null)
    throw Fr(), it;
  return C = e;
}
function Yr() {
  return oe(/* @__PURE__ */ Ne(C));
}
function xr(e) {
  if (z) {
    if (/* @__PURE__ */ Ne(C) !== null)
      throw Fr(), it;
    C = e;
  }
}
function si(e = 1) {
  if (z) {
    for (var t = e, r = C; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r);
    C = r;
  }
}
function Ir(e = !0) {
  for (var t = 0, r = C; ; ) {
    if (r.nodeType === mr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === On) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Mo || n === An || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    );
    e && r.remove(), r = o;
  }
}
function Cn(e) {
  if (!e || e.nodeType !== mr)
    throw Fr(), it;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Oo(e) {
  return e === this.v;
}
function ii(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Io(e) {
  return !ii(e, this.v);
}
function ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function li() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function di(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ci(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ui() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function gi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function mi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function vi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function bi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let yi = !1, te = null;
function Vt(e) {
  te = e;
}
function zn(e, t = !1, r) {
  te = {
    p: te,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      O
    ),
    l: null
  };
}
function Ln(e) {
  var t = (
    /** @type {ComponentContext} */
    te
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ns(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, te = t.p, Co(e);
}
function Co(e = {}) {
  return sr(e, Ro, { value: !0 }), e;
}
function zo() {
  return !0;
}
let ct = [];
function Lo() {
  var e = ct;
  ct = [], Js(e);
}
function nt(e) {
  if (ct.length === 0 && !Qt) {
    var t = ct;
    queueMicrotask(() => {
      t === ct && Lo();
    });
  }
  ct.push(e);
}
function _i() {
  for (; ct.length > 0; )
    Lo();
}
const ki = -7169;
function V(e, t) {
  e.f = e.f & ki | t;
}
function Bn(e) {
  (e.f & Pe) !== 0 || e.deps === null ? V(e, Y) : V(e, me);
}
function Bo(e, t, r) {
  (e.f & G) !== 0 ? t.add(e) : (e.f & me) !== 0 && r.add(e), V(e, Y);
}
function vr(e) {
  var t = R, r = O;
  we(null), De(null);
  try {
    return e();
  } finally {
    we(t), De(r);
  }
}
function Si(e, t, r, n) {
  const o = ir;
  var s = e.filter((h) => !h.settled), i = t.map(o);
  if (r.length === 0 && s.length === 0) {
    n(i);
    return;
  }
  var a = (
    /** @type {Effect} */
    O
  ), d = Mi(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function p(h) {
    if ((a.f & j) === 0) {
      d();
      try {
        n([...i, ...h]);
      } catch (f) {
        Ce(f, a);
      }
      Cr();
    }
  }
  var u = Do();
  if (r.length === 0) {
    c.then(() => p([])).finally(u);
    return;
  }
  function g() {
    Promise.all(r.map((h) => /* @__PURE__ */ xi(h))).then(p).catch((h) => Ce(h, a)).finally(u);
  }
  c ? c.then(() => {
    if ((a.f & j) !== 0) {
      u();
      return;
    }
    d(), g(), Cr();
  }) : g();
}
function Mi() {
  var e = (
    /** @type {Effect} */
    O
  ), t = R, r = te, n = (
    /** @type {Batch} */
    E
  );
  return function(s = !0) {
    De(e), we(t), Vt(r), s && (e.f & j) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Cr(e = !0) {
  De(null), we(null), Vt(null), e && (E == null || E.deactivate());
}
function Do() {
  var e = (
    /** @type {Effect} */
    O
  ), t = e.b, r = (
    /** @type {Batch} */
    E
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  var t = K | G;
  return O !== null && (O.f |= Mt), {
    ctx: te,
    deps: null,
    effects: null,
    equals: Oo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
const Xt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function xi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    O
  );
  n === null && li();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = _t(
    /** @type {V} */
    F
  ), i = !R, a = /* @__PURE__ */ new Set();
  return Ni(() => {
    var h, f;
    var d = (
      /** @type {Effect} */
      O
    ), c = Po();
    o = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (v) => {
        v !== gr && c.reject(v);
      }).finally(Cr);
    } catch (v) {
      c.reject(v), Cr();
    }
    var p = (
      /** @type {Batch} */
      E
    );
    if (i) {
      if ((d.f & St) !== 0)
        var u = Do();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = n.b) != null && h.is_rendered()
      )
        (f = p.async_deriveds.get(d)) == null || f.reject(Xt);
      else
        for (const v of a.values())
          v.reject(Xt);
      a.add(c), p.async_deriveds.set(d, c);
    }
    const g = (v, k = void 0) => {
      u == null || u(), a.delete(c), k !== Xt && (p.activate(), k ? (s.f |= ot, Gt(s, k)) : ((s.f & ot) !== 0 && (s.f ^= ot), Gt(s, v)), p.deactivate());
    };
    c.promise.then(g, (v) => g(null, v || "unknown"));
  }), rs(() => {
    for (const d of a)
      d.reject(Xt);
  }), new Promise((d) => {
    function c(p) {
      function u() {
        p === o ? d(s) : c(o);
      }
      p.then(u, u);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ ir(e);
  return ds(t), t;
}
// @__NO_SIDE_EFFECTS__
function No(e) {
  const t = /* @__PURE__ */ ir(e);
  return t.equals = Io, t;
}
function $i(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Dn(e) {
  var t, r = O, n = e.parent;
  if (!qe && n !== null && e.v !== F && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (j | ee)) !== 0)
    return ni(), e.v;
  De(n);
  try {
    $i(e), t = us(e);
  } finally {
    De(r);
  }
  return t;
}
function Wo(e) {
  var t = Dn(e);
  if (!e.equals(t) && (e.wv = fs(), (!(E != null && E.is_fork) || e.deps === null) && (E !== null ? (E.capture(e, t, !0), st == null || st.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    V(e, Y);
    return;
  }
  qe || (U !== null ? (Gn() || E != null && E.is_fork) && U.set(e, t) : Bn(e));
}
function Ei(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && vr(() => {
        r.ac.abort(gr), r.ac = null;
      }), r.fn !== null && (r.teardown = Ks), ar(r, 0), Yn(r));
}
function Ho(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Ft(t);
}
let Kr = null, Et = null, E = null, st = null, U = null, pn = null, Qt = !1, Jr = !1, er = null, $r = null;
var no = 0;
let Pi = 1;
var It, tt, ut, Ct, zt, Lt, Ve, Bt, se, dr, Ge, Me, Ae, Dt, pt, L, gn, mn, Zt, vn, Vo, Go, Rt, Ti, qt;
const Dr = class Dr {
  constructor() {
    P(this, L);
    W(this, "id", Pi++);
    /** True as soon as `#process` was called */
    P(this, It, !1);
    W(this, "linked", !0);
    /** @type {Batch | null} */
    P(this, tt, null);
    /** @type {Batch | null} */
    P(this, ut, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    W(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    W(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    W(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    P(this, Ct, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    P(this, zt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    P(this, Lt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    P(this, Ve, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    P(this, Bt, null);
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
    P(this, se, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    P(this, dr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    P(this, Ge, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    P(this, Me, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    P(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    P(this, Dt, /* @__PURE__ */ new Set());
    W(this, "is_fork", !1);
    P(this, pt, !1);
    Et === null ? Kr = Et = this : (M(Et, ut, this), M(this, tt, Et)), Et = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ae).has(t) || l(this, Ae).set(t, { d: [], m: [] }), l(this, Dt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ae).get(t);
    if (n) {
      l(this, Ae).delete(t);
      for (var o of n.d)
        V(o, G), r(o);
      for (o of n.m)
        V(o, me), r(o);
    }
    l(this, Dt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ot) === 0 && (this.current.set(t, [r, n]), U == null || U.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, U = null;
  }
  flush() {
    try {
      Jr = !0, E = this, x(this, L, Zt).call(this);
    } finally {
      no = 0, pn = null, er = null, $r = null, Jr = !1, E = null, U = null, Le.clear();
    }
  }
  discard() {
    var t;
    for (const r of l(this, zt)) r(this);
    l(this, zt).clear();
    for (const r of this.async_deriveds.values())
      r.reject(Xt);
    x(this, L, qt).call(this), (t = l(this, Bt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, dr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (M(this, Lt, l(this, Lt) + 1), t) {
      let n = l(this, Ve).get(r) ?? 0;
      l(this, Ve).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (M(this, Lt, l(this, Lt) - 1), t) {
      let n = l(this, Ve).get(r) ?? 0;
      n === 1 ? l(this, Ve).delete(r) : l(this, Ve).set(r, n - 1);
    }
    l(this, pt) || (M(this, pt, !0), nt(() => {
      M(this, pt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ge).add(n);
    for (const n of r)
      l(this, Me).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Ct).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, zt).add(t);
  }
  settled() {
    return (l(this, Bt) ?? M(this, Bt, Po())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Dr();
      !Jr && !Qt && nt(() => {
        l(t, It) || t.flush();
      });
    }
    return E;
  }
  apply() {
    {
      U = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (pn = t, (r = t.b) != null && r.is_pending && (t.f & (Wt | Vr | To)) !== 0 && (t.f & St) === 0) {
      t.b.defer_effect(t);
      return;
    }
    l(this, se).push(t);
  }
};
It = new WeakMap(), tt = new WeakMap(), ut = new WeakMap(), Ct = new WeakMap(), zt = new WeakMap(), Lt = new WeakMap(), Ve = new WeakMap(), Bt = new WeakMap(), se = new WeakMap(), dr = new WeakMap(), Ge = new WeakMap(), Me = new WeakMap(), Ae = new WeakMap(), Dt = new WeakMap(), pt = new WeakMap(), L = new WeakSet(), gn = function() {
  if (this.is_fork) return !0;
  for (const n of l(this, Ve).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (l(this, Ae).has(t)) {
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
mn = function() {
  var t = [];
  for (const s of l(this, se))
    if (!((s.f & j) !== 0 || (s.f & (G | me)) === 0)) {
      for (var r = s, n = !1; r.parent !== null; ) {
        r = r.parent;
        var o = r.f;
        if ((o & (Ze | Te)) !== 0) {
          if ((o & Y) === 0) {
            n = !0;
            break;
          }
          r.f ^= Y;
        }
      }
      n || t.push(r);
    }
  return M(this, se, []), t;
}, Zt = function() {
  var a, d, c, p;
  M(this, It, !0);
  for (const u of l(this, Ge))
    l(this, Me).delete(u), V(u, G), this.schedule(u);
  for (const u of l(this, Me))
    V(u, me), this.schedule(u);
  this.apply();
  for (var t = er = [], r = [], n = $r = []; l(this, se).length > 0; ) {
    no++ > 1e3 && (x(this, L, qt).call(this), Ri());
    for (const u of x(this, L, mn).call(this))
      try {
        x(this, L, vn).call(this, u, t, r);
      } catch (g) {
        throw Uo(u), x(this, L, gn).call(this) || this.discard(), g;
      }
  }
  if (E = null, n.length > 0) {
    var o = Dr.ensure();
    for (const u of n)
      o.schedule(u);
  }
  if (er = null, $r = null, x(this, L, gn).call(this)) {
    x(this, L, Rt).call(this, r), x(this, L, Rt).call(this, t);
    for (const [u, g] of l(this, Ae))
      Yo(u, g);
    n.length > 0 && /** @type {unknown} */
    x(a = E, L, Zt).call(a);
    return;
  }
  const s = x(this, L, Vo).call(this);
  if (s) {
    x(this, L, Rt).call(this, r), x(this, L, Rt).call(this, t), x(d = s, L, Go).call(d, this);
    return;
  }
  l(this, Ge).clear(), l(this, Me).clear();
  for (const u of l(this, Ct)) u(this);
  l(this, Ct).clear(), st = this, oo(r), oo(t), st = null, (c = l(this, Bt)) == null || c.resolve();
  var i = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (l(this, Lt) === 0 && (l(this, se).length === 0 || i !== null) && x(this, L, qt).call(this), l(this, se).length > 0)
    if (i !== null) {
      for (const u of l(this, se))
        l(i, se).push(u);
      M(this, se, []);
    } else
      i = this;
  i !== null && (Le.clear(), x(p = i, L, Zt).call(p));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
vn = function(t, r, n) {
  t.f ^= Y;
  for (var o = t.first; o !== null; ) {
    var s = o.f, i = (s & (Te | Ze)) !== 0, a = i && (s & Y) !== 0, d = a || (s & ee) !== 0 || l(this, Ae).has(o);
    if (!d && o.fn !== null) {
      i ? o.f ^= Y : (s & Wt) !== 0 ? r.push(o) : wr(o) && ((s & $e) !== 0 && l(this, Me).add(o), Ft(o));
      var c = o.first;
      if (c !== null) {
        o = c;
        continue;
      }
    }
    for (; o !== null; ) {
      var p = o.next;
      if (p !== null) {
        o = p;
        break;
      }
      o = o.parent;
    }
  }
}, Vo = function() {
  for (var t = l(this, tt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = l(t, tt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Go = function(t) {
  var n;
  for (const [o, s] of t.current)
    !this.previous.has(o) && t.previous.has(o) && this.previous.set(o, t.previous.get(o)), this.current.set(o, s);
  for (const [o, s] of t.async_deriveds) {
    const i = this.async_deriveds.get(o);
    i && s.promise.then(i.resolve).catch(i.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(l(t, Ge), l(t, Me));
  const r = (o) => {
    var s = o.reactions;
    if (s !== null && !((o.f & K) !== 0 && (o.f & (G | me)) === 0))
      for (const d of s) {
        var i = d.f;
        if ((i & K) !== 0)
          r(
            /** @type {Derived} */
            d
          );
        else {
          var a = (
            /** @type {Effect} */
            d
          );
          i & (Ot | $e) && !this.async_deriveds.has(a) && (l(this, Me).delete(a), V(a, G), this.schedule(a));
        }
      }
  };
  for (const o of this.current.keys())
    r(o);
  this.oncommit(() => t.discard()), x(n = t, L, qt).call(n), E = this, x(this, L, Zt).call(this);
}, /**
 * @param {Effect[]} effects
 */
Rt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Bo(t[r], l(this, Ge), l(this, Me));
}, Ti = function() {
  var u, g;
  for (let h = Kr; h !== null; h = l(h, ut)) {
    var t = h.id < this.id, r = [];
    for (const [f, [v, k]] of this.current) {
      if (h.current.has(f)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(f)[0]
        );
        if (t && v !== n)
          h.current.set(f, [v, k]);
        else
          continue;
      }
      r.push(f);
    }
    if (t)
      for (const [f, v] of this.async_deriveds) {
        const k = h.async_deriveds.get(f);
        k && v.promise.then(k.resolve).catch(k.reject);
      }
    var o = [...h.current.keys()].filter(
      (f) => !/** @type {[any, boolean]} */
      h.current.get(f)[1]
    );
    if (!(!l(h, It) || o.length === 0)) {
      var s = o.filter((f) => !this.current.has(f));
      if (s.length === 0)
        t && h.discard();
      else if (r.length > 0) {
        if (t)
          for (const f of l(this, Dt))
            h.unskip_effect(f, (v) => {
              var k;
              (v.f & ($e | Ot)) !== 0 ? h.schedule(v) : x(k = h, L, Rt).call(k, [v]);
            });
        h.activate();
        var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var d of r)
          Fo(d, s, i, a);
        a = /* @__PURE__ */ new Map();
        var c = [...h.current].filter(([f, v]) => {
          const k = this.current.get(f);
          return k ? k[0] !== v[0] || k[1] !== v[1] : !0;
        }).map(([f]) => f);
        if (c.length > 0)
          for (const f of l(this, dr))
            (f.f & (j | ee | Ar)) === 0 && Nn(f, c, a) && ((f.f & (Ot | $e)) !== 0 ? (V(f, G), h.schedule(f)) : l(h, Ge).add(f));
        if (l(h, se).length > 0 && !l(h, pt)) {
          h.apply();
          for (var p of x(u = h, L, mn).call(u))
            x(g = h, L, vn).call(g, p, [], []);
        }
        h.deactivate();
      }
    }
  }
}, qt = function() {
  if (this.linked) {
    var t = l(this, tt), r = l(this, ut);
    t === null ? Kr = r : M(t, ut, r), r === null ? Et = t : M(r, tt, t), this.linked = !1;
  }
};
let at = Dr;
function lt(e) {
  var t = Qt, r = st;
  st = null, Qt = !0;
  try {
    for (var n; ; ) {
      if (_i(), E === null)
        return (
          /** @type {T} */
          n
        );
      E.flush();
    }
  } finally {
    Qt = t, st = r;
  }
}
function Ri() {
  try {
    ui();
  } catch (e) {
    Ce(e, pn);
  }
}
let Se = null;
function oo(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (j | ee)) === 0 && wr(n) && (Se = /* @__PURE__ */ new Set(), Ft(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && is(n), (Se == null ? void 0 : Se.size) > 0)) {
        Le.clear();
        for (const o of Se) {
          if ((o.f & (j | ee)) !== 0) continue;
          const s = [o];
          let i = o.parent;
          for (; i !== null; )
            Se.has(i) && (Se.delete(i), s.push(i)), i = i.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const d = s[a];
            (d.f & (j | ee)) === 0 && Ft(d);
          }
        }
        Se.clear();
      }
    }
    Se = null;
  }
}
function Fo(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const s = o.f;
      (s & K) !== 0 ? Fo(
        /** @type {Derived} */
        o,
        t,
        r,
        n
      ) : (s & (Ot | $e)) !== 0 && (s & G) === 0 && Nn(o, t, n) && (V(o, G), Wn(
        /** @type {Effect} */
        o
      ));
    }
}
function Nn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (or.call(t, o))
        return !0;
      if ((o.f & K) !== 0 && Nn(
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
function Wn(e) {
  E.schedule(e);
}
function Yo(e, t) {
  if (!((e.f & Te) !== 0 && (e.f & Y) !== 0)) {
    (e.f & G) !== 0 ? t.d.push(e) : (e.f & me) !== 0 && t.m.push(e), V(e, Y);
    for (var r = e.first; r !== null; )
      Yo(r, t), r = r.next;
  }
}
function Uo(e) {
  V(e, Y);
  for (var t = e.first; t !== null; )
    Uo(t), t = t.next;
}
let zr = /* @__PURE__ */ new Set();
const Le = /* @__PURE__ */ new Map();
let jo = !1;
function _t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oo,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  const r = _t(e);
  return ds(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xo(e, t = !1, r = !0) {
  const n = _t(e);
  return t || (n.equals = Io), n;
}
function D(e, t, r = !1) {
  R !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (R.f & Ar) !== 0) && zo() && (R.f & (K | $e | Ot | Ar)) !== 0 && (Be === null || !Be.has(e)) && wi();
  let n = r ? Xe(t) : t;
  return Gt(e, n, $r);
}
var dt = null, wn = 0;
function Gt(e, t, r = null) {
  if (!e.equals(t)) {
    qe ? Le.set(e, t) : Le.has(e) || Le.set(e, e.v);
    var n = at.ensure();
    if (n.capture(e, t), (e.f & K) !== 0) {
      const o = (
        /** @type {Derived} */
        e
      );
      (e.f & G) !== 0 && Dn(o), U === null && Bn(o);
    }
    e.wv = fs(), dt = null, wn = 0, Zo(e, G, r), dt = null, O !== null && (O.f & Y) !== 0 && (O.f & (Te | Ze)) === 0 && (he === null ? Vi([e]) : he.push(e)), !n.is_fork && zr.size > 0 && !jo && Ai();
  }
  return t;
}
function Ai() {
  jo = !1;
  for (const e of zr) {
    (e.f & Y) !== 0 && V(e, me);
    let t;
    try {
      t = wr(e);
    } catch {
      t = !0;
    }
    t && Ft(e);
  }
  zr.clear();
}
function tr(e) {
  D(e, e.v + 1);
}
function Zo(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var o = n.length;
    if (wn += o, wn > 1e5 && dt === null && (dt = /* @__PURE__ */ new Set()), dt !== null) {
      if (dt.has(e)) return;
      dt.add(e);
    }
    for (var s = 0; s < o; s++) {
      var i = n[s], a = i.f, d = (a & G) === 0;
      if (d && V(i, t), (a & Ar) !== 0)
        zr.add(
          /** @type {Effect} */
          i
        );
      else if ((a & K) !== 0) {
        var c = (
          /** @type {Derived} */
          i
        );
        U == null || U.delete(c), Zo(c, me, r);
      } else if (d) {
        var p = (
          /** @type {Effect} */
          i
        );
        (a & $e) !== 0 && Se !== null && Se.add(p), r !== null ? r.push(p) : Wn(p);
      }
    }
  }
}
function Xe(e) {
  if (typeof e != "object" || e === null || Sr in e || Ro in e)
    return e;
  const t = Eo(e);
  if (t !== Zs && t !== qs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = $o(e), o = /* @__PURE__ */ q(0), s = yt, i = (a) => {
    if (yt === s)
      return a();
    var d = R, c = yt;
    we(null), ao(s);
    var p = a();
    return we(d), ao(c), p;
  };
  return n && r.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, d, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && mi();
        var p = r.get(d);
        return p === void 0 ? i(() => {
          var u = /* @__PURE__ */ q(c.value);
          return r.set(d, u), u;
        }) : D(p, c.value, !0), !0;
      },
      deleteProperty(a, d) {
        var c = r.get(d);
        if (c === void 0) {
          if (d in a) {
            const p = i(() => /* @__PURE__ */ q(F));
            r.set(d, p), tr(o);
          }
        } else
          D(c, F), tr(o);
        return !0;
      },
      get(a, d, c) {
        var h;
        if (d === Sr)
          return e;
        var p = r.get(d), u = d in a;
        if (p === void 0 && (!u || (h = wt(a, d)) != null && h.writable) && (p = i(() => {
          var f = Xe(u ? a[d] : F), v = /* @__PURE__ */ q(f);
          return v;
        }), r.set(d, p)), p !== void 0) {
          var g = m(p);
          return g === F ? void 0 : g;
        }
        return Reflect.get(a, d, c);
      },
      getOwnPropertyDescriptor(a, d) {
        var g;
        (g = this.has) == null || g.call(this, a, d);
        var c = Reflect.getOwnPropertyDescriptor(a, d), p = r.get(d);
        if (p !== void 0) {
          var u = m(p);
          if (u === F)
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
      has(a, d) {
        var g;
        if (d === Sr)
          return !0;
        var c = r.get(d), p = c !== void 0 && c.v !== F || Reflect.has(a, d);
        if (c !== void 0 || O !== null && (!p || (g = wt(a, d)) != null && g.writable)) {
          c === void 0 && (c = i(() => {
            var h = p ? Xe(a[d]) : F, f = /* @__PURE__ */ q(h);
            return f;
          }), r.set(d, c));
          var u = m(c);
          if (u === F)
            return !1;
        }
        return p;
      },
      set(a, d, c, p) {
        var S;
        var u = r.get(d), g = d in a;
        if (n && d === "length")
          for (var h = c; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var f = r.get(h + "");
            f !== void 0 ? D(f, F) : h in a && (f = i(() => /* @__PURE__ */ q(F)), r.set(h + "", f));
          }
        if (u === void 0)
          (!g || (S = wt(a, d)) != null && S.writable) && (u = i(() => /* @__PURE__ */ q(void 0)), D(u, Xe(c)), r.set(d, u));
        else {
          g = u.v !== F;
          var v = i(() => Xe(c));
          D(u, v);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, d);
        if (k != null && k.set && k.set.call(p, c), !g) {
          if (n && typeof d == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), _ = Number(d);
            Number.isInteger(_) && _ >= $.v && D($, _ + 1);
          }
          tr(o);
        }
        return !0;
      },
      ownKeys(a) {
        m(o);
        var d = Reflect.ownKeys(a).filter((u) => {
          var g = r.get(u);
          return g === void 0 || g.v !== F;
        });
        for (var [c, p] of r)
          p.v !== F && !(c in a) && d.push(c);
        return d;
      },
      setPrototypeOf() {
        vi();
      }
    }
  );
}
var rr, qo, Ko, Jo;
function bn() {
  if (rr === void 0) {
    rr = window, qo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ko = wt(t, "firstChild").get, Jo = wt(t, "nextSibling").get, ro(e) && (e[hn] = void 0, e[Mr] = null, e[un] = void 0, e.__e = void 0), ro(r) && (r[jt] = void 0);
  }
}
function ve(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ko.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return (
    /** @type {TemplateNode | null} */
    Jo.call(e)
  );
}
function yn(e, t) {
  if (!z)
    return /* @__PURE__ */ kt(e);
  var r = /* @__PURE__ */ kt(C);
  if (r === null)
    r = C.appendChild(ve());
  else if (t && r.nodeType !== Gr) {
    var n = ve();
    return r == null || r.before(n), oe(n), n;
  }
  return t && Vn(
    /** @type {Text} */
    r
  ), oe(r), r;
}
function Qo(e, t = !1) {
  if (!z) {
    var r = /* @__PURE__ */ kt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ne(r) : r;
  }
  if (t) {
    if ((C == null ? void 0 : C.nodeType) !== Gr) {
      var n = ve();
      return C == null || C.before(n), oe(n), n;
    }
    Vn(
      /** @type {Text} */
      C
    );
  }
  return C;
}
function so(e, t = !1) {
  if (!z)
    return /* @__PURE__ */ kt(e);
  var r = yn(e, t);
  return xr(e), r;
}
function Qr(e, t = 1, r = !1) {
  let n = z ? C : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(n);
  if (!z)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Gr) {
      var s = ve();
      return n === null ? o == null || o.after(s) : n.before(s), oe(s), s;
    }
    Vn(
      /** @type {Text} */
      n
    );
  }
  return oe(n), n;
}
function es(e) {
  e.textContent = "";
}
function ts() {
  return !1;
}
function Hn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function Vn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Gr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Oi(e) {
  var t = O;
  if (t === null)
    return R.f |= ot, e;
  if ((t.f & St) === 0 && (t.f & Wt) === 0)
    throw e;
  Ce(e, t);
}
function Ce(e, t) {
  if (e === it)
    throw e;
  if (!(t !== null && (t.f & j) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & fn) !== 0 && (t.f & (j | Rr)) === 0) {
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
function Ii(e) {
  O === null && (R === null && hi(), fi()), qe && ci();
}
function Ci(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function We(e, t) {
  var r = O;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: te,
    deps: null,
    nodes: null,
    f: e | G | Pe,
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
  E == null || E.register_created_effect(n);
  var o = n;
  if ((e & Wt) !== 0)
    er !== null ? er.push(n) : at.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ft(n);
    } catch (i) {
      throw re(n), i;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & Mt) === 0 && (o = o.first, (e & $e) !== 0 && (e & Ht) !== 0 && o !== null && (o.f |= Ht));
  }
  if (o !== null && (o.parent = r, r !== null && Ci(o, r), R !== null && (R.f & K) !== 0 && (e & Ze) === 0)) {
    var s = (
      /** @type {Derived} */
      R
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return n;
}
function Gn() {
  return R !== null && !Ee;
}
function rs(e) {
  const t = We(Vr, null);
  return V(t, Y), t.teardown = e, t;
}
function zi(e) {
  Ii();
  var t = (
    /** @type {Effect} */
    O.f
  ), r = !R && (t & Te) !== 0 && te !== null && !te.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      te
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ns(e);
}
function ns(e) {
  return We(Wt | ei, e);
}
function Li(e) {
  at.ensure();
  const t = We(Ze | Mt, e);
  return () => {
    re(t);
  };
}
function Bi(e) {
  at.ensure();
  const t = We(Ze | Mt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? bt(t, () => {
      re(t), n(void 0);
    }) : (re(t), n(void 0));
  });
}
function Di(e) {
  return We(Wt, e);
}
function Ni(e) {
  return We(Ot | Mt, e);
}
function os(e, t = 0) {
  return We(Vr | t, e);
}
function en(e, t = [], r = [], n = []) {
  Si(n, t, r, (o) => {
    We(Vr, () => {
      e(...o.map(m));
    });
  });
}
function Fn(e, t = 0) {
  var r = We($e | t, e);
  return r;
}
function ge(e) {
  return We(Te | Mt, e);
}
function ss(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = qe, n = R;
    io(!0), we(null);
    try {
      t.call(null);
    } catch (o) {
      Ce(o, e.parent);
    } finally {
      io(r), we(n);
    }
  }
}
function Yn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const o = r.ac;
    o !== null && vr(() => {
      o.abort(gr);
    });
    var n = r.next;
    (r.f & Ze) !== 0 ? r.parent = null : re(r, t), r = n;
  }
}
function Wi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Te) === 0 && re(t), t = r;
  }
}
function re(e, t = !0) {
  var r = !1;
  (t || (e.f & Qs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Hi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Rr, Yn(e, t && !r), ar(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ss(e), e.f ^= Rr, e.f |= j;
  var o = e.parent;
  o !== null && o.first !== null && is(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Hi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ne(e);
    e.remove(), e = r;
  }
}
function is(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function bt(e, t, r = !0) {
  var n = [];
  e.f |= In, as(e, n, !0);
  var o = () => {
    r && re(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var i = () => --s || o();
    for (var a of n)
      a.out(i);
  } else
    o();
}
function as(e, t, r) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var s = o.next;
      if ((o.f & Ze) === 0) {
        var i = (o.f & Ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (o.f & Te) !== 0 && (e.f & $e) !== 0;
        as(o, t, i ? r : !1);
      }
      o = s;
    }
  }
}
function Lr(e) {
  e.f &= ~In, ls(e, !0);
}
function ls(e, t) {
  if ((e.f & In) === 0 && (e.f & ee) !== 0) {
    e.f ^= ee, (e.f & Y) === 0 && (V(e, G), at.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & Ht) !== 0 || (r.f & Te) !== 0;
      ls(r, o ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const i of s)
        (i.is_global || t) && i.in();
  }
}
function Un(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var o = r === n ? null : /* @__PURE__ */ Ne(r);
      t.append(r), r = o;
    }
}
let qe = !1;
function io(e) {
  qe = e;
}
let R = null, Ee = !1;
function we(e) {
  R = e;
}
let O = null;
function De(e) {
  O = e;
}
let Be = null;
function ds(e) {
  R !== null && ((R.f & Or) !== 0 || (R.f & K) !== 0) && (Be ?? (Be = /* @__PURE__ */ new Set())).add(e);
}
let ne = null, ce = 0, he = null;
function Vi(e) {
  he = e;
}
let cs = 1, ft = 0, yt = ft;
function ao(e) {
  yt = e;
}
function fs() {
  return ++cs;
}
function wr(e) {
  var t = e.f;
  if ((t & G) !== 0)
    return !0;
  if ((t & me) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, o = 0; o < n; o++) {
      var s = r[o];
      if (wr(
        /** @type {Derived} */
        s
      ) && Wo(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Pe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    U === null && V(e, Y);
  }
  return !1;
}
function hs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Be !== null && Be.has(e)))
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      (s.f & K) !== 0 ? hs(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? V(s, G) : (s.f & Y) !== 0 && V(s, me), Wn(
        /** @type {Effect} */
        s
      ));
    }
}
function us(e) {
  var t = ne, r = ce, n = he, o = R, s = Be, i = te, a = Ee, d = yt, c = e.f;
  ne = /** @type {null | Value[]} */
  null, ce = 0, he = null, R = (c & (Te | Ze)) === 0 ? e : null, Be = null, Vt(e.ctx), Ee = !1, yt = ++ft, e.ac !== null && (vr(() => {
    e.ac.abort(gr);
  }), e.ac = null);
  try {
    e.f |= Or;
    var p = (
      /** @type {Function} */
      e.fn
    ), u = p();
    e.f |= St;
    var g = lo(e);
    if (zo() && he !== null && !Ee && g !== null && (e.f & (K | me | G)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      he.length; h++)
        hs(
          he[h],
          /** @type {Effect} */
          e
        );
    if (o !== null && o !== e) {
      if (ft++, o.deps !== null)
        for (let f = 0; f < r; f += 1)
          o.deps[f].rv = ft;
      if (t !== null)
        for (const f of t)
          f.rv = ft;
      he !== null && (n === null ? n = he : n.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & ot) !== 0 && (e.f ^= ot), u;
  } catch (f) {
    return lo(e), Oi(f);
  } finally {
    e.f ^= Or, ne = t, ce = r, he = n, R = o, Be = s, Vt(i), Ee = a, yt = d;
  }
}
function lo(e) {
  var o;
  var t = e.deps, r = E == null ? void 0 : E.is_fork;
  if (ne !== null) {
    var n;
    if (r || ar(e, ce), t !== null && ce > 0)
      for (t.length = ce + ne.length, n = 0; n < ne.length; n++)
        t[ce + n] = ne[n];
    else
      e.deps = t = ne;
    if (Gn() && (e.f & Pe) !== 0)
      for (n = ce; n < t.length; n++)
        ((o = t[n]).reactions ?? (o.reactions = [])).push(e);
  } else !r && t !== null && ce < t.length && (ar(e, ce), t.length = ce);
  return t;
}
function Gi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = js.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  if (r === null && (t.f & K) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !or.call(ne, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Pe) !== 0 && (s.f ^= Pe), s.v !== F && Bn(s), s.ac !== null && vr(() => {
      s.ac.abort(gr), s.ac = null, V(s, G);
    }), Ei(s), ar(s, 0);
  }
}
function ar(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Gi(e, r[n]);
}
function Ft(e) {
  var t = e.f;
  if ((t & j) === 0) {
    V(e, Y);
    var r = O;
    O = e;
    try {
      (t & ($e | To)) !== 0 ? Wi(e) : Yn(e), ss(e);
      var n = us(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = cs;
      var o;
      xo && yi && (e.f & G) !== 0 && e.deps;
    } finally {
      O = r;
    }
  }
}
function m(e) {
  var t = e.f, r = (t & K) !== 0;
  if (R !== null && !Ee) {
    var n = O !== null && (O.f & j) !== 0;
    if (!n && (Be === null || !Be.has(e))) {
      var o = R.deps;
      if ((R.f & Or) !== 0)
        e.rv < ft && (e.rv = ft, ne === null && o !== null && o[ce] === e ? ce++ : ne === null ? ne = [e] : ne.push(e));
      else {
        R.deps ?? (R.deps = []), or.call(R.deps, e) || R.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [R] : or.call(s, R) || s.push(R);
      }
    }
  }
  if (qe && Le.has(e))
    return Le.get(e);
  if (r) {
    var i = (
      /** @type {Derived} */
      e
    );
    if (qe) {
      var a = i.v;
      return ((i.f & Y) === 0 && i.reactions !== null || gs(i)) && (a = Dn(i)), Le.set(i, a), a;
    }
    var d = (i.f & Pe) === 0 && !Ee && R !== null && (R.f & Pe) !== 0, c = (i.f & St) === 0;
    wr(i) && (d && (i.f |= Pe), Wo(i)), d && !c && (Ho(i), ps(i));
  }
  if (U != null && U.has(e))
    return U.get(e);
  if ((e.f & ot) !== 0)
    throw e.v;
  return e.v;
}
function ps(e) {
  if (e.f |= Pe, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : or.call(t, e) || t.push(e), (r.f & K) !== 0 && (r.f & Pe) === 0 && (Ho(
        /** @type {Derived} */
        r
      ), ps(
        /** @type {Derived} */
        r
      ));
    }
}
function gs(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Le.has(t) || (t.f & K) !== 0 && gs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function jn(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const ht = Symbol("events"), ms = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
function Fi(e, t, r, n = {}) {
  function o(s) {
    if (n.capture || kn.call(t, s), !s.cancelBubble)
      return vr(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (o.__removed = !1, nt(() => {
    o.__removed || t.addEventListener(e, o, n);
  })) : t.addEventListener(e, o, n), o;
}
function tn(e, t, r, n, o) {
  var s = { capture: n, passive: o }, i = Fi(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && rs(() => {
    i.__removed = !0, t.removeEventListener(e, i, s);
  });
}
function rn(e, t, r) {
  (t[ht] ?? (t[ht] = {}))[e] = r;
}
function Yi(e) {
  for (var t = 0; t < e.length; t++)
    ms.add(e[t]);
  for (var r of _n)
    r(e);
}
let nn = null, on = !1;
function kn(e) {
  var v, k;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], s = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  nn = e, on || (on = !0, setTimeout(() => {
    on = !1, nn = null;
  }));
  var i = 0, a = nn === e && e[ht];
  if (a) {
    var d = o.indexOf(a);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ht] = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    d <= c && (i = d);
  }
  if (s = /** @type {Element} */
  o[i] || e.target, s !== t) {
    sr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var p = R, u = O;
    we(null), De(null);
    try {
      for (var g, h = []; s !== null && s !== t; ) {
        try {
          var f = (k = s[ht]) == null ? void 0 : k[n];
          f != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && f.call(s, e);
        } catch ($) {
          g ? h.push($) : g = $;
        }
        if (e.cancelBubble) break;
        i++, s = i < o.length ? (
          /** @type {Element} */
          o[i]
        ) : null;
      }
      if (g) {
        for (let $ of h)
          queueMicrotask(() => {
            throw $;
          });
        throw g;
      }
    } finally {
      e[ht] = t, delete e.currentTarget, we(p), De(u);
    }
  }
}
var So;
const sn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((So = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : So.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ui(e) {
  return (
    /** @type {string} */
    (sn == null ? void 0 : sn.createHTML(e)) ?? e
  );
}
function ji(e) {
  var t = Hn("template");
  return t.innerHTML = Ui(e.replaceAll("<!>", "<!---->")), t.content;
}
function lr(e, t) {
  var r = (
    /** @type {Effect} */
    O
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Xn(e, t) {
  var r = (t & Ys) !== 0, n, o = !e.startsWith("<!>");
  return () => {
    if (z)
      return lr(C, null), C;
    n === void 0 && (n = ji(o ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ kt(n));
    var s = (
      /** @type {TemplateNode} */
      r || qo ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return lr(s, s), s;
  };
}
function vs() {
  if (z)
    return lr(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ve();
  return e.append(t, r), lr(t, r), e;
}
function At(e, t) {
  if (z) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      O
    );
    ((r.f & St) === 0 || r.nodes.end === null) && (r.nodes.end = C), Yr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Xi = ["touchstart", "touchmove"];
function Zi(e) {
  return Xi.includes(e);
}
function qi(e) {
  let t = 0, r = _t(0), n;
  return () => {
    Gn() && (m(r), os(() => (t === 0 && (n = jn(() => e(() => tr(r)))), t += 1, () => {
      nt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, tr(r));
      });
    })));
  };
}
var Ki = Ht | Mt;
function Ji(e, t, r, n) {
  new Qi(e, t, r, n);
}
var ie, cr, ue, gt, Z, ae, Q, le, Oe, mt, rt, Nt, fr, hr, Fe, Nr, A, ws, bs, Sn, et, ys, Mn, Kt, Er, xn, $n;
class Qi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, o) {
    P(this, A);
    /** @type {Boundary | null} */
    W(this, "parent");
    W(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    W(this, "transform_error");
    /** @type {TemplateNode} */
    P(this, ie);
    /** @type {TemplateNode | null} */
    P(this, cr, z ? C : null);
    /** @type {BoundaryProps} */
    P(this, ue);
    /** @type {((anchor: Node) => void)} */
    P(this, gt);
    /** @type {Effect} */
    P(this, Z);
    /** @type {Effect | null} */
    P(this, ae, null);
    /** @type {Effect | null} */
    P(this, Q, null);
    /** @type {Effect | null} */
    P(this, le, null);
    /** @type {DocumentFragment | null} */
    P(this, Oe, null);
    P(this, mt, 0);
    P(this, rt, 0);
    P(this, Nt, !1);
    /** @type {Set<Effect>} */
    P(this, fr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    P(this, hr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    P(this, Fe, null);
    P(this, Nr, qi(() => (M(this, Fe, _t(l(this, mt))), () => {
      M(this, Fe, null);
    })));
    var s;
    M(this, ie, t), M(this, ue, r), M(this, gt, (i) => {
      var a = (
        /** @type {Effect} */
        O
      );
      a.b = this, a.f |= fn, n(i);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = o ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((i) => i), M(this, Z, Fn(() => {
      if (z) {
        const i = Cn(
          /** @type {TemplateNode} */
          l(this, cr)
        );
        Yr();
        const a = i === An;
        if (i.startsWith(to)) {
          const c = JSON.parse(i.slice(to.length));
          x(this, A, bs).call(this, c);
        } else a ? x(this, A, ys).call(this) : x(this, A, ws).call(this);
      } else
        x(this, A, Mn).call(this);
    }, Ki)), z && M(this, ie, C);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Bo(t, l(this, fr), l(this, hr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    x(this, A, xn).call(this, t, r), M(this, mt, l(this, mt) + t), !(!l(this, Fe) || l(this, Nt)) && (M(this, Nt, !0), nt(() => {
      M(this, Nt, !1), l(this, Fe) && Gt(l(this, Fe), l(this, mt));
    }));
  }
  get_effect_pending() {
    return l(this, Nr).call(this), m(
      /** @type {Source<number>} */
      l(this, Fe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === it || !l(this, ue).onerror && !l(this, ue).failed)
      throw t;
    E != null && E.is_fork ? (l(this, ae) && E.skip_effect(l(this, ae)), l(this, Q) && E.skip_effect(l(this, Q)), l(this, le) && E.skip_effect(l(this, le)), E.oncommit(() => {
      x(this, A, et).call(this) || x(this, A, $n).call(this, t);
    })) : x(this, A, $n).call(this, t);
  }
}
ie = new WeakMap(), cr = new WeakMap(), ue = new WeakMap(), gt = new WeakMap(), Z = new WeakMap(), ae = new WeakMap(), Q = new WeakMap(), le = new WeakMap(), Oe = new WeakMap(), mt = new WeakMap(), rt = new WeakMap(), Nt = new WeakMap(), fr = new WeakMap(), hr = new WeakMap(), Fe = new WeakMap(), Nr = new WeakMap(), A = new WeakSet(), ws = function() {
  try {
    M(this, ae, ge(() => l(this, gt).call(this, l(this, ie))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
bs = function(t) {
  const r = l(this, ue).failed, { reset: n, invoke_onerror: o } = x(this, A, Sn).call(this, t);
  nt(o), r && M(this, le, ge(() => {
    r(
      l(this, ie),
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
Sn = function(t) {
  var r = !1, n = !1;
  const o = () => {
    if (!x(this, A, et).call(this)) {
      if (r) {
        oi();
        return;
      }
      r = !0, n && bi(), l(this, le) !== null && bt(l(this, le), () => {
        M(this, le, null);
      }), x(this, A, Er).call(this, () => {
        x(this, A, Mn).call(this);
      });
    }
  };
  return { reset: o, invoke_onerror: () => {
    var i, a;
    if (!x(this, A, et).call(this))
      try {
        n = !0, (a = (i = l(this, ue)).onerror) == null || a.call(i, t, o), n = !1;
      } catch (d) {
        Ce(d, l(this, Z) && l(this, Z).parent);
      }
  } };
}, et = function() {
  return (l(this, Z).f & (j | Rr)) !== 0;
}, ys = function() {
  const t = l(this, ue).pending;
  t && (this.is_pending = !0, M(this, Q, ge(() => t(l(this, ie)))), nt(() => {
    if (!x(this, A, et).call(this)) {
      var r = M(this, Oe, document.createDocumentFragment()), n = ve(), o = !1;
      if (r.append(n), M(this, ae, x(this, A, Er).call(this, () => {
        try {
          return ge(() => l(this, gt).call(this, n));
        } catch (s) {
          try {
            this.error(s), o = !0;
          } catch (i) {
            Ce(i, l(this, Z).parent);
          }
          return null;
        }
      })), l(this, ae) === null) {
        M(this, Oe, null), o && x(this, A, Kt).call(
          this,
          /** @type {Batch} */
          E
        );
        return;
      }
      l(this, rt) === 0 && (l(this, ie).before(r), M(this, Oe, null), bt(
        /** @type {Effect} */
        l(this, Q),
        () => {
          M(this, Q, null);
        }
      ), x(this, A, Kt).call(
        this,
        /** @type {Batch} */
        E
      ));
    }
  }));
}, Mn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, rt, 0), M(this, mt, 0), M(this, ae, ge(() => {
      l(this, gt).call(this, l(this, ie));
    })), l(this, rt) > 0) {
      var t = M(this, Oe, document.createDocumentFragment());
      Un(l(this, ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ue).pending
      );
      M(this, Q, ge(() => r(l(this, ie))));
    } else
      x(this, A, Kt).call(
        this,
        /** @type {Batch} */
        E
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Kt = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, fr), l(this, hr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Er = function(t) {
  var r = O, n = R, o = te;
  De(l(this, Z)), we(l(this, Z)), Vt(l(this, Z).ctx);
  try {
    return at.ensure(), t();
  } finally {
    De(r), we(n), Vt(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
xn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && x(n = this.parent, A, xn).call(n, t, r);
    return;
  }
  M(this, rt, l(this, rt) + t), l(this, rt) === 0 && (x(this, A, Kt).call(this, r), l(this, Q) && bt(l(this, Q), () => {
    M(this, Q, null);
  }), l(this, Oe) && (l(this, ie).before(l(this, Oe)), M(this, Oe, null)));
}, /**
 * @param {unknown} error
 */
$n = function(t) {
  l(this, ae) && (re(l(this, ae)), M(this, ae, null)), l(this, Q) && (re(l(this, Q)), M(this, Q, null)), l(this, le) && (re(l(this, le)), M(this, le, null)), z && (oe(
    /** @type {TemplateNode} */
    l(this, cr)
  ), si(), oe(Ir()));
  let r = l(this, ue).failed;
  const n = (o) => {
    if (x(this, A, et).call(this)) return;
    const { reset: s, invoke_onerror: i } = x(this, A, Sn).call(this, o);
    i(), r && !x(this, A, et).call(this) && M(this, le, x(this, A, Er).call(this, () => {
      try {
        return ge(() => {
          var a = (
            /** @type {Effect} */
            O
          );
          a.b = this, a.f |= fn, r(
            l(this, ie),
            () => o,
            () => s
          );
        });
      } catch (a) {
        return Ce(
          a,
          /** @type {Effect} */
          l(this, Z).parent
        ), null;
      }
    }));
  };
  nt(() => {
    if (!x(this, A, et).call(this)) {
      var o;
      try {
        o = this.transform_error(t);
      } catch (s) {
        Ce(s, l(this, Z) && l(this, Z).parent);
        return;
      }
      o !== null && typeof o == "object" && typeof /** @type {any} */
      o.then == "function" ? o.then(
        n,
        /** @param {unknown} e */
        (s) => Ce(s, l(this, Z) && l(this, Z).parent)
      ) : n(o);
    }
  });
};
function co(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[jt] ?? (e[jt] = e.nodeValue)) && (e[jt] = r, e.nodeValue = `${r}`);
}
function _s(e, t) {
  return ks(e, t);
}
function ea(e, t) {
  bn(), t.intro = t.intro ?? !1;
  const r = t.target, n = z, o = C;
  try {
    for (var s = /* @__PURE__ */ kt(r); s && (s.nodeType !== mr || /** @type {Comment} */
    s.data !== Mo); )
      s = /* @__PURE__ */ Ne(s);
    if (!s)
      throw it;
    je(!0), oe(
      /** @type {Comment} */
      s
    );
    const i = ks(e, { ...t, anchor: s });
    return je(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i instanceof Error && i.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw i;
    return i !== it && console.warn("Failed to hydrate: ", i), t.recover === !1 && pi(), bn(), es(r), je(!1), _s(e, t);
  } finally {
    je(n), oe(o);
  }
}
const _r = /* @__PURE__ */ new Map();
function ks(e, { target: t, anchor: r, props: n = {}, events: o, context: s, intro: i = !0, transformError: a }) {
  bn();
  var d = void 0, c = Bi(() => {
    var p = r ?? t.appendChild(ve());
    Ji(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (h) => {
        zn({});
        var f = (
          /** @type {ComponentContext} */
          te
        );
        if (s && (f.c = s), o && (n.$$events = o), z && lr(
          /** @type {TemplateNode} */
          h,
          null
        ), d = e(h, n) || Co(), z && (O.nodes.end = C, C === null || C.nodeType !== mr || /** @type {Comment} */
        C.data !== On))
          throw Fr(), it;
        Ln();
      },
      a
    );
    var u = /* @__PURE__ */ new Set(), g = (h) => {
      for (var f = 0; f < h.length; f++) {
        var v = h[f];
        if (!u.has(v)) {
          u.add(v);
          var k = Zi(v);
          for (const S of [t, document]) {
            var $ = _r.get(S);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), _r.set(S, $));
            var _ = $.get(v);
            _ === void 0 ? (S.addEventListener(v, kn, { passive: k }), $.set(v, 1)) : $.set(v, _ + 1);
          }
        }
      }
    };
    return g(Hr(ms)), _n.add(g), () => {
      var k;
      for (var h of u)
        for (const $ of [t, document]) {
          var f = (
            /** @type {Map<string, number>} */
            _r.get($)
          ), v = (
            /** @type {number} */
            f.get(h)
          );
          --v == 0 ? ($.removeEventListener(h, kn), f.delete(h), f.size === 0 && _r.delete($)) : f.set(h, v);
        }
      _n.delete(g), p !== r && ((k = p.parentNode) == null || k.removeChild(p));
    };
  });
  return En.set(d, c), d;
}
let En = /* @__PURE__ */ new WeakMap();
function ta(e, t) {
  const r = En.get(e);
  return r ? (En.delete(e), r(t)) : Promise.resolve();
}
var xe, Ie, de, vt, ur, pr, Wr;
class ra {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    W(this, "anchor");
    /** @type {Map<Batch, Key>} */
    P(this, xe, /* @__PURE__ */ new Map());
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
    P(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    P(this, de, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    P(this, vt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    P(this, ur, !0);
    /**
     * @param {Batch} batch
     */
    P(this, pr, (t) => {
      if (l(this, xe).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, xe).get(t)
        ), n = l(this, Ie).get(r);
        if (n)
          Lr(n), l(this, vt).delete(r);
        else {
          var o = l(this, de).get(r);
          o && (Lr(o.effect), l(this, Ie).set(r, o.effect), l(this, de).delete(r), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), n = o.effect);
        }
        for (const [s, i] of l(this, xe)) {
          if (l(this, xe).delete(s), s === t)
            break;
          const a = l(this, de).get(i);
          a && (re(a.effect), l(this, de).delete(i));
        }
        for (const [s, i] of l(this, Ie)) {
          if (s === r || l(this, vt).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, xe).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Un(i, c), c.append(ve()), l(this, de).set(s, { effect: i, fragment: c });
            } else
              re(i);
            l(this, vt).delete(s), l(this, Ie).delete(s);
          };
          l(this, ur) || !n ? (l(this, vt).add(s), bt(i, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    P(this, Wr, (t) => {
      l(this, xe).delete(t);
      const r = Array.from(l(this, xe).values());
      for (const [n, o] of l(this, de))
        r.includes(n) || (re(o.effect), l(this, de).delete(n));
    });
    this.anchor = t, M(this, ur, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      E
    ), o = ts();
    if (r && !l(this, Ie).has(t) && !l(this, de).has(t))
      if (o) {
        var s = document.createDocumentFragment(), i = ve();
        s.append(i), l(this, de).set(t, {
          effect: ge(() => r(i)),
          fragment: s
        });
      } else
        l(this, Ie).set(
          t,
          ge(() => r(this.anchor))
        );
    if (l(this, xe).set(n, t), o) {
      for (const [a, d] of l(this, Ie))
        a === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [a, d] of l(this, de))
        a === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(l(this, pr)), n.ondiscard(l(this, Wr));
    } else
      z && (this.anchor = C), l(this, pr).call(this, n);
  }
}
xe = new WeakMap(), Ie = new WeakMap(), de = new WeakMap(), vt = new WeakMap(), ur = new WeakMap(), pr = new WeakMap(), Wr = new WeakMap();
function na(e) {
  te === null && ai(), zi(() => {
    const t = jn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pn(e, t, r = !1) {
  var n;
  z && (n = C, Yr());
  var o = new ra(e), s = r ? Ht : 0;
  function i(a, d) {
    if (z) {
      var c = Cn(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(c.substring(1))) {
        var p = Ir();
        oe(p), o.anchor = p, je(!1), o.ensure(a, d), je(!0);
        return;
      }
    }
    o.ensure(a, d);
  }
  Fn(() => {
    var a = !1;
    t((d, c = 0) => {
      a = !0, i(c, d);
    }), a || i(-1, null);
  }, s);
}
function oa(e, t, r) {
  for (var n = [], o = t.length, s, i = t.length, a = 0; a < o; a++) {
    let u = t[a];
    bt(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Tn(e, Hr(s.done)), g.delete(s), g.size === 0 && (e.outrogroups = null);
          }
        } else
          i -= 1;
      },
      !1
    );
  }
  if (i === 0) {
    var d = n.length === 0 && r !== null && e.pending.size === 0;
    if (d) {
      var c = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        c.parentNode
      );
      es(p), p.append(c), e.items.clear();
    }
    Tn(e, t, !d);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Tn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const i of e.pending.values())
      for (const a of i)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    if (n != null && n.has(s)) {
      s.f |= Ue;
      const i = document.createDocumentFragment();
      Un(s, i);
    } else
      re(t[o], r);
  }
}
var fo;
function sa(e, t, r, n, o, s = null) {
  var i = e, a = /* @__PURE__ */ new Map();
  {
    var d = (
      /** @type {Element} */
      e
    );
    i = z ? oe(/* @__PURE__ */ kt(d)) : d.appendChild(ve());
  }
  z && Yr();
  var c = null, p = /* @__PURE__ */ No(() => {
    var $ = r();
    return (
      /** @type {V[]} */
      $o($) ? $ : $ == null ? [] : Hr($)
    );
  }), u = /* @__PURE__ */ new Map(), g = !0;
  function h($) {
    if ((k.effect.f & j) === 0) {
      k.pending.delete($);
      var _ = m(p);
      k.fallback = c, ia(k, _, i, t, n), c !== null && (_.length === 0 ? (c.f & Ue) === 0 ? Lr(c) : (c.f ^= Ue, Jt(c, null, i)) : bt(c, () => {
        c = null;
      }));
    }
  }
  function f($) {
    k.pending.delete($);
  }
  var v = Fn(() => {
    var $ = (
      /** @type {V[]} */
      m(p)
    ), _ = $.length;
    let S = !1;
    if (z) {
      var B = Cn(i) === An;
      B !== (_ === 0) && (i = Ir(), oe(i), je(!1), S = !0);
    }
    for (var w = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      E
    ), be = ts(), ye = 0; ye < _; ye += 1) {
      z && C.nodeType === mr && /** @type {Comment} */
      C.data === On && (i = /** @type {Comment} */
      C, S = !0, je(!1));
      var fe = $[ye], xt = n(fe, ye), _e = g ? null : a.get(xt);
      _e ? (_e.v && Gt(_e.v, fe), _e.i && Gt(_e.i, ye), be && H.unskip_effect(_e.e)) : (_e = aa(
        a,
        g ? i : fo ?? (fo = ve()),
        fe,
        xt,
        ye,
        o,
        t,
        r
      ), g || (_e.e.f |= Ue), a.set(xt, _e)), w.add(xt);
    }
    if (_ === 0 && s && !c && (g ? c = ge(() => s(i)) : (c = ge(() => s(fo ?? (fo = ve()))), c.f |= Ue)), _ > w.size && di(), z && _ > 0 && oe(Ir()), !g)
      if (u.set(H, w), be) {
        for (const [jr, Xr] of a)
          w.has(jr) || H.skip_effect(Xr.e);
        H.oncommit(h), H.ondiscard(f);
      } else
        h(H);
    S && je(!0), m(p);
  }), k = { effect: v, items: a, pending: u, outrogroups: null, fallback: c };
  g = !1, z && (i = C);
}
function Ut(e) {
  for (; e !== null && (e.f & Te) === 0; )
    e = e.next;
  return e;
}
function ia(e, t, r, n, o) {
  var ye;
  var s = t.length, i = e.items, a = Ut(e.effect.first), d, c = null, p = [], u = [], g, h, f, v;
  for (v = 0; v < s; v += 1) {
    if (g = t[v], h = o(g, v), f = /** @type {EachItem} */
    i.get(h).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(f), fe.done.delete(f);
    if ((f.f & ee) !== 0 && Lr(f), (f.f & Ue) !== 0)
      if (f.f ^= Ue, f === a)
        Jt(f, null, r);
      else {
        var k = c ? c.next : a;
        f === e.effect.last && (e.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), Qe(e, c, f), Qe(e, f, k), Jt(f, k, r), c = f, p = [], u = [], a = Ut(c.next);
        continue;
      }
    if (f !== a) {
      if (d !== void 0 && d.has(f)) {
        if (p.length < u.length) {
          var $ = u[0], _;
          c = $.prev;
          var S = p[0], B = p[p.length - 1];
          for (_ = 0; _ < p.length; _ += 1)
            Jt(p[_], $, r);
          for (_ = 0; _ < u.length; _ += 1)
            d.delete(u[_]);
          Qe(e, S.prev, B.next), Qe(e, c, S), Qe(e, B, $), a = $, c = B, v -= 1, p = [], u = [];
        } else
          d.delete(f), Jt(f, a, r), Qe(e, f.prev, f.next), Qe(e, f, c === null ? e.effect.first : c.next), Qe(e, c, f), c = f;
        continue;
      }
      for (p = [], u = []; a !== null && a !== f; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(a), u.push(a), a = Ut(a.next);
      if (a === null)
        continue;
    }
    (f.f & Ue) === 0 && p.push(f), c = f, a = Ut(f.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (Tn(e, Hr(fe.done)), (ye = e.outrogroups) == null || ye.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || d !== void 0) {
    var w = [];
    if (d !== void 0)
      for (f of d)
        (f.f & ee) === 0 && w.push(f);
    for (; a !== null; )
      (a.f & ee) === 0 && a !== e.fallback && w.push(a), a = Ut(a.next);
    var H = w.length;
    if (H > 0) {
      var be = s === 0 ? r : null;
      oa(e, w, be);
    }
  }
}
function aa(e, t, r, n, o, s, i, a) {
  var d = (i & Ds) !== 0 ? (i & Ws) === 0 ? /* @__PURE__ */ Xo(r, !1, !1) : _t(r) : null, c = (i & Ns) !== 0 ? _t(o) : null;
  return {
    v: d,
    i: c,
    e: ge(() => (s(t, d ?? r, c ?? o, a), () => {
      e.delete(n);
    }))
  };
}
function Jt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, o = e.nodes.end, s = t && (t.f & Ue) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(n)
      );
      if (s.before(n), n === o)
        return;
      n = i;
    }
}
function Qe(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function la(e, t) {
  Di(() => {
    var o, s;
    e = ((s = (o = O == null ? void 0 : O.parent) == null ? void 0 : o.nodes) == null ? void 0 : s.start) ?? e;
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
      const i = Hn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const ho = [...` 	
\r\f \v\uFEFF`];
function da(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var o of Object.keys(r))
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var s = o.length, i = 0; (i = n.indexOf(o, i)) >= 0; ) {
          var a = i + s;
          (i === 0 || ho.includes(n[i - 1])) && (a === n.length || ho.includes(n[a])) ? n = (i === 0 ? "" : n.substring(0, i)) + n.substring(a + 1) : i = a;
        }
  }
  return n === "" ? null : n;
}
function uo(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var o of Object.keys(e)) {
    var s = e[o];
    s != null && s !== "" && (n += " " + o + ": " + s + r);
  }
  return n;
}
function ca(e, t) {
  if (t) {
    var r = "", n, o;
    return Array.isArray(t) ? (n = t[0], o = t[1]) : n = t, n && (r += uo(n)), o && (r += uo(o, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function po(e, t, r, n, o, s) {
  var i = (
    /** @type {any} */
    e[hn]
  );
  if (z || i !== r || i === void 0) {
    var a = da(r, n, s);
    (!z || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e[hn] = r;
  } else if (s && o !== s)
    for (var d in s) {
      var c = !!s[d];
      (o == null || c !== !!o[d]) && e.classList.toggle(d, c);
    }
  return s;
}
function an(e, t = {}, r, n) {
  for (var o in r) {
    var s = r[o];
    t[o] !== s && (r[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, s, n));
  }
}
function go(e, t, r, n) {
  var o = (
    /** @type {any} */
    e[un]
  );
  if (z || o !== t) {
    var s = ca(t, n);
    (!z || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[un] = t;
  } else n && (Array.isArray(n) ? (an(e, r == null ? void 0 : r[0], n[0]), an(e, r == null ? void 0 : r[1], n[1], "important")) : an(e, r, n));
  return n;
}
const fa = Symbol("is custom element"), ha = Symbol("is html"), ua = ri ? "link" : "LINK";
function Pt(e, t, r, n) {
  var o = pa(e);
  z && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ua) || o[t] !== (o[t] = r) && (t === "loading" && (e[ti] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ga(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function pa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Mr] ?? (e[Mr] = {
      [fa]: e.nodeName.includes("-"),
      [ha]: e.namespaceURI === Us
    })
  );
}
var mo = /* @__PURE__ */ new Map();
function ga(e) {
  var t = e.getAttribute("is") || e.nodeName, r = mo.get(t);
  if (r) return r;
  mo.set(t, r = /* @__PURE__ */ new Set());
  for (var n, o = e, s = Element.prototype; s !== o; ) {
    n = Xs(o);
    for (var i in n)
      n[i].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      i !== "innerHTML" && i !== "textContent" && i !== "innerText" && r.add(i);
    o = Eo(o);
  }
  return r;
}
let kr = !1;
function ma(e) {
  var t = kr;
  try {
    return kr = !1, [e(), kr];
  } finally {
    kr = t;
  }
}
function Tt(e, t, r, n) {
  var B;
  var o = !0, s = (r & Gs) !== 0, i = (r & Fs) !== 0, a = (
    /** @type {V} */
    n
  ), d = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), p = () => i && o ? (c ?? (c = /* @__PURE__ */ ir(
    /** @type {() => V} */
    n
  )), m(c)) : (d && (d = !1, a = i ? jn(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let u;
  if (s) {
    var g = Sr in e || Ao in e;
    u = ((B = wt(e, t)) == null ? void 0 : B.set) ?? (g && t in e ? (w) => e[t] = w : void 0);
  }
  var h, f = !1;
  s ? [h, f] = ma(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = p(), u && (gi(), u(h)));
  var v;
  if (v = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? p() : (d = !0, w);
  }, (r & Vs) === 0)
    return v;
  if (u) {
    var k = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, H) {
        return arguments.length > 0 ? ((!H || k || f) && u(H ? v() : w), w) : v();
      })
    );
  }
  var $ = !1, _ = ((r & Hs) !== 0 ? ir : No)(() => ($ = !1, v()));
  s && m(_);
  var S = (
    /** @type {Effect} */
    O
  );
  return (
    /** @type {() => V} */
    (function(w, H) {
      if (arguments.length > 0) {
        const be = H ? m(_) : s ? Xe(w) : w;
        return D(_, be), $ = !0, a !== void 0 && (a = be), w;
      }
      return qe && $ || (S.f & j) !== 0 ? _.v : m(_);
    })
  );
}
function va(e) {
  return new wa(e);
}
var Ye, pe;
class wa {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    P(this, Ye);
    /** @type {Record<string, any>} */
    P(this, pe);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (i, a) => {
      var d = /* @__PURE__ */ Xo(a, !1, !1);
      return r.set(i, d), d;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, a) {
          return m(r.get(a) ?? n(a, Reflect.get(i, a)));
        },
        has(i, a) {
          return a === Ao ? !0 : (m(r.get(a) ?? n(a, Reflect.get(i, a))), Reflect.has(i, a));
        },
        set(i, a, d) {
          return D(r.get(a) ?? n(a, d), d), Reflect.set(i, a, d);
        }
      }
    );
    M(this, pe, (t.hydrate ? ea : _s)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && lt(), M(this, Ye, o.$$events);
    for (const i of Object.keys(l(this, pe)))
      i === "$set" || i === "$destroy" || i === "$on" || sr(this, i, {
        get() {
          return l(this, pe)[i];
        },
        /** @param {any} value */
        set(a) {
          l(this, pe)[i] = a;
        },
        enumerable: !0
      });
    l(this, pe).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, l(this, pe).$destroy = () => {
      ta(l(this, pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    l(this, pe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    l(this, Ye)[t] = l(this, Ye)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return l(this, Ye)[t].push(n), () => {
      l(this, Ye)[t] = l(this, Ye)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    l(this, pe).$destroy();
  }
}
Ye = new WeakMap(), pe = new WeakMap();
let Ss;
typeof HTMLElement == "function" && (Ss = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    W(this, "$$ctor");
    /** Slots */
    W(this, "$$s");
    /** @type {any} The Svelte component instance */
    W(this, "$$c");
    /** Whether or not the custom element is connected */
    W(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    W(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    W(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    W(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    W(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    W(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    W(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    W(this, "$$shadowRoot", null);
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
      let r = function(s) {
        return (i) => {
          const a = Hn("slot");
          s !== "default" && (a.name = s), At(i, a);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = ba(this);
      for (const s of this.$$s)
        s in o && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Pr(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = va({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Li(() => {
        os(() => {
          var s;
          this.$$r = !0;
          for (const i of Tr(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const a = Pr(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const a = this.$$c.$on(s, i);
          this.$$l_u.set(i, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Pr(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function Pr(e, t, r, n) {
  var s;
  const o = (s = r[e]) == null ? void 0 : s.type;
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
function ba(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ms(e, t, r, n, o, s) {
  let i = class extends Ss {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Tr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Tr(t).forEach((a) => {
    sr(i.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(d) {
        var u;
        d = Pr(a, d, t), this.$$d[a] = d;
        var c = this.$$c;
        if (c) {
          var p = (u = wt(c, a)) == null ? void 0 : u.get;
          p ? c[a] = d : c.$set({ [a]: d });
        }
      }
    });
  }), n.forEach((a) => {
    sr(i.prototype, a, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[a];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
var ya = /* @__PURE__ */ Xn('<button class="tool-dock-remove svelte-5ypgve" type="button">×</button>'), _a = /* @__PURE__ */ Xn('<div class="tool-dock-item svelte-5ypgve"><span class="tool-dock-popout svelte-5ypgve" aria-hidden="true"> </span> <button type="button"><span class="tool-dock-tooltip svelte-5ypgve"> </span> <span class="tool-dock-icon svelte-5ypgve"></span></button> <!></div>'), ka = /* @__PURE__ */ Xn('<div role="toolbar" aria-label="Pinned actions"></div>');
const Sa = {
  hash: "svelte-5ypgve",
  code: `.tool-dock.svelte-5ypgve {position:fixed;z-index:520;display:inline-flex;gap:var(--efs-dock-gap, 0.6rem);align-items:flex-end;pointer-events:none;}.tool-dock-item.svelte-5ypgve {position:relative;display:inline-flex;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve,\r
  .tool-dock[data-edge='right'].svelte-5ypgve {flex-direction:column-reverse;}.tool-dock[data-edge='top'].svelte-5ypgve,\r
  .tool-dock[data-edge='bottom'].svelte-5ypgve {flex-direction:row;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve {align-items:flex-start;}.tool-dock.is-dragging.svelte-5ypgve {transition:none;}.tool-dock-button.svelte-5ypgve {position:relative;z-index:1;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem));height:var(--efs-dock-button-size, 3.1rem);border:1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);border-radius:min(999px, calc(var(--efs-dock-button-size, 3.1rem) * 0.52));background:radial-gradient(\r
        circle at 30% 30%,\r
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),\r
        transparent 54%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),\r
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.92)), transparent 2%);color:var(--shell-text, #f8fafc);box-shadow:0 18px 44px rgba(0, 0, 0, 0.32),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%);cursor:grab;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      box-shadow 160ms ease;}.tool-dock.is-dragging.svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve),\r
  .tool-dock-button.svelte-5ypgve:active {cursor:grabbing;}.tool-dock-button.svelte-5ypgve:hover {transform:translateY(-2px) scale(1.02);border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 36%);box-shadow:0 22px 54px rgba(0, 0, 0, 0.38),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 78%);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover,\r
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover {transform:translateY(0) translateX(1px) scale(1.02);}.tool-dock-button.is-active.svelte-5ypgve {border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 38%);background:radial-gradient(\r
        circle at 30% 30%,\r
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 82%),\r
        transparent 56%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),\r
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);}.tool-dock-icon.svelte-5ypgve {display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-icon-size, 1.2rem);height:var(--efs-dock-icon-size, 1.2rem);background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;transform:scale(var(--efs-dock-icon-scale, 1));transform-origin:center;}.tool-dock-remove.svelte-5ypgve {position:absolute;right:-0.1rem;bottom:-0.08rem;z-index:2;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-remove-size, 1rem);height:var(--efs-dock-remove-size, 1rem);border:1px solid color-mix(in srgb, var(--shell-text, #f8fafc), transparent 18%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),\r
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), var(--shell-text, #f8fafc) 12%);color:var(--shell-text-strong, var(--shell-text, #f8fafc));font:700 calc(var(--efs-dock-remove-size, 1rem) * 0.72) / 1\r
      var(--efs-font-sans, sans-serif);box-shadow:0 6px 14px rgba(0, 0, 0, 0.28);cursor:pointer;transition:transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;}.tool-dock-remove.svelte-5ypgve:hover {transform:scale(1.06);background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),\r
      color-mix(in srgb, #dc2626, var(--shell-panel, rgba(10, 16, 30, 0.96)) 18%);box-shadow:0 8px 18px rgba(0, 0, 0, 0.34);}.tool-dock-tooltip.svelte-5ypgve {position:absolute;z-index:2;opacity:0;pointer-events:none;white-space:nowrap;padding:0.55rem 0.75rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 52%);border-radius:12px;background:radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),\r
        transparent 34%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),\r
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%);color:var(--shell-text, #f8fafc);font:var(--efs-font-body-sm, 600 0.875rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.42),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 18%);transition:opacity 140ms ease,\r
      transform 140ms ease;}.tool-dock-popout.svelte-5ypgve {position:absolute;z-index:0;opacity:0;pointer-events:none;display:none;align-items:center;max-width:var(--efs-dock-popout-width, 10rem);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0.5rem 0.85rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 56%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, var(--shell-inset-bg, rgba(2, 6, 23, 0.92)), transparent 0%),\r
        color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%)\r
      );color:var(--shell-text, #f8fafc);font:var(--efs-font-body-xs, 600 0.75rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.34),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 20%);transition:opacity 180ms ease,\r
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {right:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(0.35rem);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {left:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(-0.35rem);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {top:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(-0.35rem);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {bottom:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(0.35rem);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;right:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:right center;padding-right:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;left:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:left center;padding-left:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {left:50%;min-width:max-content;padding-inline:0.85rem;transform-origin:center center;}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {bottom:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock-button.svelte-5ypgve:hover .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock-button.svelte-5ypgve:focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='always'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='hidden'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {display:inline-flex;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateY(-50%) scaleX(1);}.tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateX(-50%) scaleX(1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-label-mode='always'][data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='always'][data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}.tool-dock[data-label-mode='always'][data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),\r
  .tool-dock[data-label-mode='always'][data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}\r
\r
  @media (max-width: 47.99rem) {.tool-dock-tooltip.svelte-5ypgve {display:none;}.tool-dock-popout.svelte-5ypgve {display:none !important;}\r
  }`
};
function xs(e, t) {
  zn(t, !0), la(e, Sa);
  const r = 6, n = 0.08, o = 0.92;
  let s = Tt(t, "items", 23, () => []), i = Tt(t, "position", 23, () => ({ edge: "right", ratio: 0.84 })), a = Tt(t, "labelMode", 7, "hover"), d = Tt(t, "onActivate", 7), c = Tt(t, "onRemove", 7), p = Tt(t, "onPositionChange", 7), u = /* @__PURE__ */ q(null), g = /* @__PURE__ */ q(null), h = /* @__PURE__ */ q(null);
  function f(I) {
    return Math.max(n, Math.min(o, I));
  }
  function v(I, N) {
    return { edge: I, ratio: f(N) };
  }
  function k(I, N) {
    var $t;
    if (typeof window > "u")
      return m(u) ?? v(i().edge, i().ratio);
    const ke = Math.max(window.innerWidth, 1), Ke = Math.max(window.innerHeight, 1), Re = {
      left: I,
      right: ke - I,
      top: N,
      bottom: Ke - N
    }, X = (($t = Object.entries(Re).sort((br, Zr) => br[1] - Zr[1])[0]) == null ? void 0 : $t[0]) ?? (m(u) ?? v(i().edge, i().ratio)).edge;
    return X === "left" || X === "right" ? v(X, N / Ke) : v(X, I / ke);
  }
  function $(I, N) {
    N.button === 0 && D(
      g,
      {
        itemId: I,
        pointerId: N.pointerId,
        startX: N.clientX,
        startY: N.clientY,
        dragging: !1
      },
      !0
    );
  }
  function _(I) {
    var Ke;
    if (!m(g) || I.pointerId !== m(g).pointerId)
      return;
    const N = Math.hypot(I.clientX - m(g).startX, I.clientY - m(g).startY) >= r;
    if (!m(g).dragging && !N)
      return;
    m(g).dragging || (D(g, { ...m(g), dragging: !0 }, !0), D(h, m(g).itemId, !0));
    const ke = k(I.clientX, I.clientY);
    D(u, ke, !0), (Ke = p()) == null || Ke(ke);
  }
  function S(I) {
    var ke;
    if (!m(g) || I.pointerId !== m(g).pointerId)
      return;
    const N = m(g).itemId;
    m(g).dragging ? ((ke = p()) == null || ke(m(w)), typeof window < "u" && window.requestAnimationFrame(() => {
      m(h) === N && D(h, null), D(u, null);
    })) : D(u, null), D(g, null);
  }
  function B(I) {
    var N;
    if (m(h) === I) {
      D(h, null);
      return;
    }
    (N = d()) == null || N(I);
  }
  let w = /* @__PURE__ */ He(() => m(u) ?? v(i().edge, i().ratio)), H = /* @__PURE__ */ He(() => m(w).edge === "left" || m(w).edge === "right" ? `${(m(w).ratio * 100).toFixed(3)}%` : void 0), be = /* @__PURE__ */ He(() => m(w).edge === "top" || m(w).edge === "bottom" ? `${(m(w).ratio * 100).toFixed(3)}%` : void 0), ye = /* @__PURE__ */ He(() => m(w).edge === "top" ? "var(--efs-dock-offset, 1rem)" : void 0), fe = /* @__PURE__ */ He(() => m(w).edge === "right" ? "var(--efs-dock-offset, 1rem)" : void 0), xt = /* @__PURE__ */ He(() => m(w).edge === "bottom" ? "var(--efs-dock-offset, 1rem)" : void 0), _e = /* @__PURE__ */ He(() => m(w).edge === "left" ? "var(--efs-dock-offset, 1rem)" : void 0), jr = /* @__PURE__ */ He(() => m(w).edge === "left" || m(w).edge === "right" ? "translateY(-100%)" : "translateX(-50%)");
  var Xr = {
    get items() {
      return s();
    },
    set items(I = []) {
      s(I), lt();
    },
    get position() {
      return i();
    },
    set position(I = { edge: "right", ratio: 0.84 }) {
      i(I), lt();
    },
    get labelMode() {
      return a();
    },
    set labelMode(I = "hover") {
      a(I), lt();
    },
    get onActivate() {
      return d();
    },
    set onActivate(I) {
      d(I), lt();
    },
    get onRemove() {
      return c();
    },
    set onRemove(I) {
      c(I), lt();
    },
    get onPositionChange() {
      return p();
    },
    set onPositionChange(I) {
      p(I), lt();
    }
  }, qn = vs();
  tn("pointermove", rr, _), tn("pointerup", rr, S), tn("pointercancel", rr, S);
  var Ts = Qo(qn);
  {
    var Rs = (I) => {
      var N = ka();
      let ke, Ke;
      sa(N, 21, s, (Re) => Re.id, (Re, X) => {
        var $t = _a(), br = yn($t), Zr = so(br, !0), Je = Qr(br, 2);
        let Kn;
        var Jn = yn(Je), As = so(Jn, !0), Os = Qr(Jn, 2);
        let Qn;
        xr(Je);
        var Is = Qr(Je, 2);
        {
          var Cs = (Yt) => {
            var yr = ya();
            en(() => {
              Pt(yr, "aria-label", `Remove ${m(X).label}`), Pt(yr, "title", `Remove ${m(X).label}`);
            }), rn("click", yr, (zs) => {
              zs.stopPropagation(), c()(m(X).id);
            }), At(Yt, yr);
          };
          Pn(Is, (Yt) => {
            c() && Yt(Cs);
          });
        }
        xr($t), en(() => {
          co(Zr, m(X).label), Kn = po(Je, 1, "tool-dock-button svelte-5ypgve", null, Kn, { "is-active": m(X).active }), Pt(Je, "aria-label", m(X).label), Pt(Je, "title", m(X).label), co(As, m(X).label), Qn = go(Os, "", Qn, { "--icon-mask": m(X).iconMask });
        }), rn("pointerdown", Je, (Yt) => $(m(X).id, Yt)), rn("click", Je, () => B(m(X).id)), At(Re, $t);
      }), xr(N), en(
        (Re) => {
          ke = po(N, 1, "tool-dock svelte-5ypgve", null, ke, { "is-dragging": Re }), Pt(N, "data-edge", m(w).edge), Pt(N, "data-label-mode", a()), Ke = go(N, "", Ke, {
            top: m(H) ?? m(ye),
            left: m(be) ?? m(_e),
            right: m(fe),
            bottom: m(xt),
            transform: m(jr)
          });
        },
        [() => {
          var Re;
          return !!((Re = m(g)) != null && Re.dragging);
        }]
      ), At(I, N);
    };
    Pn(Ts, (I) => {
      s().length > 0 && I(Rs);
    });
  }
  return At(e, qn), Ln(Xr);
}
Yi(["pointerdown", "click"]);
Ms(
  xs,
  {
    items: {},
    position: {},
    labelMode: {},
    onActivate: {},
    onRemove: {},
    onPositionChange: {}
  },
  [],
  [],
  { mode: "open" }
);
const Zn = "efsdb:window-settings", Rn = {
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
}, Ma = /* @__PURE__ */ new Set(["aero"]);
function xa(e) {
  return Ma.has(e);
}
function Ur(e) {
  if (!xa(e.themePreset))
    return e;
  const t = Rn[e.themePreset];
  return t ? {
    ...e,
    ...t.settings,
    themePreset: e.themePreset
  } : e;
}
const vo = {
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
}, T = {
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
}, Br = /* @__PURE__ */ new Set();
let ze = Es();
function $a(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Ea(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function Pa(e) {
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
      return T.buttonLayout;
  }
}
function Ta(e) {
  return e === "left" ? "left" : T.systemButtonPlacement;
}
function Ra(e) {
  return e === "mirrored" ? "mirrored" : T.sideResizeMode;
}
function Aa(e) {
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
      return T.themePreset;
  }
}
function Oa(e) {
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
      return T.fontPreset;
  }
}
function Ia(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return T.shiftDragAction;
  }
}
function Ca(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return T.chromeColorSource;
  }
}
function za(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return T.chromeGlossStyle;
  }
}
function La(e) {
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
      return T.chromeBeamStyle;
  }
}
function Ba(e) {
  switch (e) {
    case "light":
    case "dark":
    case "auto":
      return e;
    default:
      return T.titleTone;
  }
}
function Da(e) {
  switch (e) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return e;
    default:
      return T.titleEffect;
  }
}
function Na(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return T.dockLabelMode;
  }
}
function Wa(e) {
  return e === "expanded" ? "expanded" : T.pageThemeSpread;
}
function J(e, t, r, n) {
  const o = Number(e);
  return Number.isFinite(o) ? Math.max(r, Math.min(n, Math.round(o))) : t;
}
function $s(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : La(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : za(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: Pa(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: Ta(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: Ra(e == null ? void 0 : e.sideResizeMode),
    borderWidth: J(
      e == null ? void 0 : e.borderWidth,
      T.borderWidth,
      0,
      12
    ),
    borderRadius: J(
      e == null ? void 0 : e.borderRadius,
      T.borderRadius,
      0,
      32
    ),
    chromePadding: J(
      e == null ? void 0 : e.chromePadding,
      T.chromePadding,
      0,
      20
    ),
    titleBarHeight: J(
      e == null ? void 0 : e.titleBarHeight,
      T.titleBarHeight,
      28,
      72
    ),
    windowScale: J(
      e == null ? void 0 : e.windowScale,
      T.windowScale,
      75,
      140
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : T.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : T.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: J(
      e == null ? void 0 : e.chromeBeamIntensity,
      T.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: J(
      e == null ? void 0 : e.chromeGlossIntensity,
      T.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: J(
      e == null ? void 0 : e.chromeGlossSpacing,
      T.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : T.chromeColorize,
    chromeColorSource: Ca(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: J(
      e == null ? void 0 : e.chromeColorIntensity,
      T.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : T.alignment,
    titleTone: Ba(e == null ? void 0 : e.titleTone),
    titleEffect: Da(e == null ? void 0 : e.titleEffect),
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : T.snapRestoreOnRelease,
    shiftDragAction: Ia(e == null ? void 0 : e.shiftDragAction),
    themePreset: Aa(e == null ? void 0 : e.themePreset),
    fontPreset: Oa(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : T.globalEdgeDock,
    dockButtonSize: J(
      e == null ? void 0 : e.dockButtonSize,
      T.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: J(
      e == null ? void 0 : e.dockButtonWidth,
      T.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: J(
      e == null ? void 0 : e.dockIconScale,
      T.dockIconScale,
      70,
      160
    ),
    dockGap: J(e == null ? void 0 : e.dockGap, T.dockGap, 4, 24),
    dockOffset: J(e == null ? void 0 : e.dockOffset, T.dockOffset, 8, 36),
    dockLabelMode: Na(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: Wa(e == null ? void 0 : e.pageThemeSpread)
  };
}
function Ha(e) {
  return (Rn[e] ?? Rn.inherit).shadow;
}
function Va(e) {
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
function Ga(e) {
  const t = Ur(e), r = t.chromeTexture ? Math.max(0, Math.min(1, t.chromeBeamIntensity / 100)) : 0, n = t.chromeTexture ? t.chromeBeamStyle : "none", s = `${(n === "vista" ? 0.98 : n === "windows-7" ? 0.94 : n === "xp-luna" ? 0.82 : n === "windows-9x" ? 0.72 : n === "kde" ? 0.7 : n === "mica" ? 0.62 : 0) * r}`, i = Math.max(0, Math.min(1, t.chromeGlossIntensity / 100)), a = t.chromeColorize ? `${Math.max(0, Math.min(0.88, t.chromeColorIntensity / 100))}` : "0", d = Va(t.chromeColorSource), c = J(t.chromeColorIntensity, 48, 0, 100), p = t.chromeColorize ? Math.round(34 + c / 100 * 42) : 0, u = t.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - p}%, ${d} ${p}%)` : "#4580c4", g = {
    "--efs-window-chrome-texture-opacity": s,
    "--efs-window-chrome-beam-intensity": `${r}`,
    "--efs-window-chrome-gloss-intensity": `${i}`,
    "--efs-window-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": a,
    "--efs-window-chrome-tint": d,
    "--efs-window-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-window-shell-scale": `${t.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": s,
    "--efs-widget-chrome-beam-intensity": `${r}`,
    "--efs-widget-chrome-gloss-intensity": `${i}`,
    "--efs-widget-chrome-gloss-spacing": `${t.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": a,
    "--efs-widget-theme-tint": d,
    "--efs-widget-titlebar-height": `${t.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${t.windowScale / 100}`,
    "--efs-win7-window-bg": u
  };
  if (!t.chromeColorize)
    return g;
  const h = c, f = Math.round(h / 100 * 34), v = Math.round(h / 100 * 26), k = Math.round(10 + h / 100 * 46), $ = Math.round(6 + h / 100 * 32), _ = Math.round(h / 100 * 28), S = Math.round(h / 100 * 22), B = Math.round(12 + h / 100 * 46), w = Math.round(10 + h / 100 * 34), H = Math.round(90 - h / 100 * 16), be = Math.round(92 - h / 100 * 18);
  return g["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - f}%, ${d} ${f}%)`, g["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - v}%, ${d} ${v}%)`, g["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - k}%, ${d} ${k}%)`, g["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - $}%, ${d} ${$}%)`, g["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${d}, transparent ${H}%), var(--efs-window-shell-shadow)`, g["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - _}%, ${d} ${_}%)`, g["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - S}%, ${d} ${S}%)`, g["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - B}%, ${d} ${B}%)`, g["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - w}%, ${d} ${w}%)`, g["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${d}, transparent ${be}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, g;
}
function Es() {
  const e = $a(Zn);
  if (!e)
    return nr(T), { ...T };
  try {
    const t = JSON.parse(e), r = Ur($s(t));
    return nr(r), r;
  } catch {
    return nr(T), { ...T };
  }
}
function Fa(e) {
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
          const s = n.frames[o];
          s && !r.has(s) && t.push(s);
        }
      } catch {
      }
    }
  }
  return [...r];
}
function ln(e, t) {
  const r = Ur(t), n = e.documentElement.style, o = e.documentElement, s = r.chromeGlossStyle, i = r.chromeTexture ? r.chromeBeamStyle : "none", a = Math.max(r.dockButtonSize, r.dockButtonWidth), d = vo[r.fontPreset] ?? vo.system, c = Ha(r.themePreset), p = Ga(r), u = [
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
  n.setProperty("--efs-font-sans", d.stack), n.setProperty("--shell-font-sans", d.stack), n.setProperty("--efs-window-font-family", d.stack), n.setProperty("--efs-window-border-width", `${r.borderWidth}px`), n.setProperty("--efs-window-radius", `${r.borderRadius}px`), n.setProperty("--efs-window-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-window-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-window-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-window-system-button-placement", r.systemButtonPlacement), n.setProperty("--efs-window-side-resize-mode", r.sideResizeMode), n.setProperty("--efs-window-shell-shadow", c), n.setProperty("--efs-widget-border-width", `${r.borderWidth}px`), n.setProperty("--efs-widget-radius", `${r.borderRadius}px`), n.setProperty("--efs-widget-chrome-padding", `${r.chromePadding}px`), n.setProperty("--efs-widget-titlebar-height", `${r.titleBarHeight}px`), n.setProperty("--efs-widget-shell-scale", `${r.windowScale / 100}`), n.setProperty("--efs-widget-shadow", c), n.setProperty("--efs-dock-button-size", `${r.dockButtonSize}px`), n.setProperty("--efs-dock-button-width", `${a}px`), n.setProperty("--efs-dock-gap", `${r.dockGap}px`), n.setProperty("--efs-dock-offset", `${r.dockOffset}px`), n.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(r.dockButtonSize * 0.39))}px`
  ), n.setProperty("--efs-dock-icon-scale", `${r.dockIconScale / 100}`), n.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(a + r.dockButtonSize * 1.8))}px`
  ), n.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(r.dockButtonSize * 0.31))}px`
  ), n.setProperty("--efs-dock-label-mode", r.dockLabelMode), n.setProperty("--efs-dock-global-enabled", r.globalEdgeDock ? "1" : "0"), n.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), n.setProperty("--efs-page-theme-spread", r.pageThemeSpread), o.setAttribute("data-efs-page-theme", r.pageThemeSpread), o.setAttribute("data-efs-window-gloss", s), o.setAttribute("data-efs-window-beam", i), u.forEach((g) => n.removeProperty(g)), Object.entries(p).forEach(([g, h]) => n.setProperty(g, h));
}
function nr(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    ln(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = Fa(t);
  if (r.length === 0) {
    ln(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      ln(n.document, e);
    } catch {
    }
  });
}
function Ya() {
  return ze;
}
function Ua(e) {
  ze = Ur(
    $s({
      ...ze,
      ...e
    })
  ), nr(ze), Ea(Zn, JSON.stringify(ze)), Br.forEach((t) => t(ze));
}
function ja(e) {
  return Br.add(e), e(ze), () => {
    Br.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  nr(ze);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || Ua(t);
}), window.addEventListener("storage", (e) => {
  e.key === Zn && (ze = Es(), Br.forEach((t) => t(ze)));
}));
const wo = "/_efsdb/admin", dn = "efsdb:admin:global:edge-dock-widgets", cn = "efsdb:admin:global:edge-dock-state", Xa = "efsdb:admin:global:edge-dock-open-request";
function Za(e, t = !0) {
  return {
    widgetId: e,
    pinned: t,
    issuedAt: Date.now(),
    source: "global-dock"
  };
}
const b = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, y = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, bo = (e) => `<g fill="#000">${e}</g>`, qa = {
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
        svg: b(
          y(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: b(
          y(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: b(
          `${bo('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${y(
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
        svg: b(
          y(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          `${y('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${bo(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: b(
          y('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: b(
          y(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: b(
          y('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: b(
          y(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: b(y('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: b(
          y(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: b(
          y('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: b(y('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: b(
          y(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: b(y('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: b(
          y(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: b(
          y(
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
        svg: b(
          y(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: b(
          y('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: b(
          y('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: b(
          y('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: b(y('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: b(y('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: b(y('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: b(y('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: b(y('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: b(y('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: b(y('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: b(
          y('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: b(
          y('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: b(
          y('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: b(y('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: b(y('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Ka(e, t) {
  const r = qa[e], n = r.variants;
  return (n[r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const yo = /* @__PURE__ */ new Map();
function Ja(e, t) {
  const r = `${e}:default`, n = yo.get(r);
  if (n)
    return n;
  const o = Ka(e), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return yo.set(r, s), s;
}
const Ps = [
  "create-user",
  "user-directory",
  "create-role",
  "role-directory",
  "display-mode",
  "window-preferences",
  "dock-preferences",
  "settings-payload",
  "catalog-search",
  "catalog-results",
  "catalog-facets"
], Qa = {
  "create-user": "create-user",
  "user-directory": "user-directory",
  "create-role": "create-role",
  "role-directory": "role-directory",
  "display-mode": "display-mode",
  "window-preferences": "window-preferences",
  "dock-preferences": "dock",
  "settings-payload": "settings-payload",
  "catalog-search": "catalog-search",
  "catalog-results": "catalog-results",
  "catalog-facets": "catalog-facets"
}, el = Ps.reduce(
  (e, t) => (e[t] = Ja(Qa[t]), e),
  {}
), tl = {
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
    summary: "Tune floating widget chrome, title readability, snap behavior, and shell typography here first. Site color theme still lives in Settings > Theme Studio."
  },
  "dock-preferences": {
    label: "Pinned dock",
    barLabel: "Dock",
    presentation: "icon",
    group: "Windowing",
    summary: "Adjust pinned tool behavior, label reveal, button size, and cross-page dock presence."
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
};
function rl(e, t) {
  zn(t, !0);
  const r = t.$$host;
  let n = /* @__PURE__ */ q(Xe([])), o = /* @__PURE__ */ q(Xe({ edge: "right", ratio: 0.84 })), s = /* @__PURE__ */ q(Xe(Ya())), i = /* @__PURE__ */ q(!1), a = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ He(() => m(i) && !m(a) && m(s).globalEdgeDock && m(n).length > 0);
  function c(_) {
    return typeof _ == "string" && Ps.includes(_);
  }
  function p() {
    if (typeof localStorage > "u")
      return [];
    try {
      const _ = localStorage.getItem(dn);
      if (!_)
        return [];
      const S = JSON.parse(_);
      if (!Array.isArray(S))
        return [];
      const B = /* @__PURE__ */ new Set();
      return S.flatMap((w) => !c(w) || B.has(w) ? [] : (B.add(w), [
        {
          id: w,
          label: tl[w].label,
          iconMask: el[w],
          active: !1
        }
      ]));
    } catch {
      return [];
    }
  }
  function u() {
    if (typeof localStorage > "u")
      return { edge: "right", ratio: 0.84 };
    try {
      const _ = localStorage.getItem(cn);
      if (!_)
        return { edge: "right", ratio: 0.84 };
      const S = JSON.parse(_), B = S.edge === "left" || S.edge === "right" || S.edge === "top" || S.edge === "bottom" ? S.edge : "right", w = Number(S.ratio);
      return {
        edge: B,
        ratio: Number.isFinite(w) ? Math.max(0.08, Math.min(0.92, w)) : 0.84
      };
    } catch {
      return { edge: "right", ratio: 0.84 };
    }
  }
  function g() {
    D(n, p(), !0), D(o, u(), !0);
  }
  function h(_) {
    var w;
    typeof localStorage < "u" && localStorage.setItem(Xa, JSON.stringify(Za(_, !0)));
    const S = new URL(wo, window.location.origin), B = window.open(S.toString(), "efsdb-admin-global");
    (w = B == null ? void 0 : B.focus) == null || w.call(B);
  }
  function f(_) {
    if (typeof localStorage > "u")
      return;
    const S = m(n).filter((B) => B.id !== _).map((B) => B.id);
    localStorage.setItem(dn, JSON.stringify(S)), D(n, p(), !0);
  }
  na(() => {
    try {
      D(i, window.top === window);
    } catch {
      D(i, !1);
    }
    D(a, window.location.pathname.startsWith(wo), !0), r.setAttribute("theme", document.documentElement.dataset.theme ?? "light"), g();
    const _ = ja((w) => {
      D(s, w, !0);
    }), S = (w) => {
      (w.key === dn || w.key === cn) && g();
    }, B = (w) => {
      const H = w.detail;
      H != null && H.theme && r.setAttribute("theme", H.theme);
    };
    return window.addEventListener("storage", S), window.addEventListener("efsdb-themechange", B), () => {
      window.removeEventListener("storage", S), window.removeEventListener("efsdb-themechange", B), _();
    };
  });
  var v = vs(), k = Qo(v);
  {
    var $ = (_) => {
      xs(_, {
        get items() {
          return m(n);
        },
        get position() {
          return m(o);
        },
        get labelMode() {
          return m(s).dockLabelMode;
        },
        onActivate: (S) => {
          c(S) && h(S);
        },
        onRemove: (S) => {
          c(S) && f(S);
        },
        onPositionChange: (S) => {
          D(o, S, !0), typeof localStorage < "u" && localStorage.setItem(cn, JSON.stringify(S));
        }
      });
    };
    Pn(k, (_) => {
      m(d) && _($);
    });
  }
  At(e, v), Ln();
}
customElements.define("efsdb-admin-dock", Ms(rl, {}, [], [], { mode: "open" }));
