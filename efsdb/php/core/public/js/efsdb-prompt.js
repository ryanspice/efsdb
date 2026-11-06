var Ms = Object.defineProperty;
var Bn = (e) => {
  throw TypeError(e);
};
var Os = (e, t, r) => t in e ? Ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var N = (e, t, r) => Os(e, typeof t != "symbol" ? t + "" : t, r), Vr = (e, t, r) => t.has(e) || Bn("Cannot " + r);
var o = (e, t, r) => (Vr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? Bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (Vr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), y = (e, t, r) => (Vr(e, t, "access private method"), r);
var li;
typeof window < "u" && ((li = window.__svelte ?? (window.__svelte = {})).v ?? (li.v = /* @__PURE__ */ new Set())).add("5");
const js = 1, Rs = 4, Ns = 8, Ps = 16, fi = 1, Ls = 2, ui = "[", ci = "[!", Hn = "[?", di = "]", tt = {}, I = Symbol("uninitialized"), Ds = "http://www.w3.org/1999/xhtml", hi = !1;
var Is = Array.isArray, Fs = Array.prototype.indexOf, Zt = Array.prototype.includes, zs = Array.from, kr = Object.keys, Qt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, Ys = Object.getOwnPropertyDescriptors, Bs = Object.prototype, Hs = Array.prototype, vi = Object.getPrototypeOf, Wn = Object.isExtensible;
const _i = () => {
};
function Ws(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pi() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const q = 2, Rt = 4, Lr = 8, gi = 1 << 24, we = 16, Oe = 32, We = 64, en = 128, mn = 256, $e = 512, F = 1024, D = 2048, de = 4096, he = 8192, U = 16384, gt = 32768, Sr = 1 << 25, pt = 65536, Tr = 1 << 17, Vs = 1 << 18, mt = 1 << 19, Us = 1 << 20, Ar = 1 << 21, kt = 1 << 22, Qe = 1 << 23, mr = Symbol("$state"), mi = Symbol("component"), bi = Symbol("legacy props"), qs = Symbol(""), br = Symbol("attributes"), tn = Symbol("class"), rn = Symbol("style"), Yt = Symbol("text"), Ut = Symbol("form reset"), or = new class extends Error {
  constructor() {
    super(...arguments);
    N(this, "name", "StaleReactionError");
    N(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var oi;
const Xs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((oi = globalThis.document) != null && oi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Dr = 3, Ir = 8;
function Gs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Fr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ks() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function xt(e) {
  j = e;
}
let C;
function xe(e) {
  if (e === null)
    throw Fr(), tt;
  return C = e;
}
function bn() {
  return xe(/* @__PURE__ */ qe(C));
}
function X(e) {
  if (j) {
    if (/* @__PURE__ */ qe(C) !== null)
      throw Fr(), tt;
    C = e;
  }
}
function nn(e = 1) {
  if (j) {
    for (var t = e, r = C; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ qe(r);
    C = r;
  }
}
function wi(e = !0) {
  for (var t = 0, r = C; ; ) {
    if (r.nodeType === Ir) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === di) {
        if (t === 0) return r;
        t -= 1;
      } else (n === ui || n === ci || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(r)
    );
    e && r.remove(), r = i;
  }
}
function yi(e) {
  if (!e || e.nodeType !== Ir)
    throw Fr(), tt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function $i(e) {
  return e === this.v;
}
function Js(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xi(e) {
  return !Js(e, this.v);
}
function Zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Qs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function el(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function il() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ll() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ol() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function al() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function fl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ul = !1, J = null;
function Nt(e) {
  J = e;
}
function wn(e, t = !1, r) {
  J = {
    p: J,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      S
    ),
    l: null
  };
}
function yn(e) {
  var t = (
    /** @type {ComponentContext} */
    J
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Bi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, J = t.p, Ei(e);
}
function Ei(e = {}) {
  return Qt(e, mi, { value: !0 }), e;
}
function ki() {
  return !0;
}
let lt = [];
function Si() {
  var e = lt;
  lt = [], Ws(e);
}
function Be(e) {
  if (lt.length === 0 && !qt) {
    var t = lt;
    queueMicrotask(() => {
      t === lt && Si();
    });
  }
  lt.push(e);
}
function cl() {
  for (; lt.length > 0; )
    Si();
}
const dl = -7169;
function L(e, t) {
  e.f = e.f & dl | t;
}
function $n(e) {
  (e.f & $e) !== 0 || e.deps === null ? L(e, F) : L(e, de);
}
function Ti(e, t, r) {
  (e.f & D) !== 0 ? t.add(e) : (e.f & de) !== 0 && r.add(e), L(e, F);
}
function hl(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, Be(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Vn = !1;
function Ai() {
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
            (t = r[Ut]) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ar(e) {
  var t = E, r = S;
  ve(null), je(null);
  try {
    return e();
  } finally {
    ve(t), je(r);
  }
}
function vl(e, t, r, n = r) {
  e.addEventListener(t, () => ar(r));
  const i = (
    /** @type {any} */
    e[Ut]
  );
  i ? e[Ut] = () => {
    i(), n(!0);
  } : e[Ut] = () => n(!0), Ai();
}
function _l(e, t, r, n) {
  const i = Mr;
  var s = e.filter((c) => !c.settled), l = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    S
  ), f = pl(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function v(c) {
    if ((a.f & U) === 0) {
      f();
      try {
        n([...l, ...c]);
      } catch (d) {
        Ae(d, a);
      }
      Cr();
    }
  }
  var h = Ci();
  if (r.length === 0) {
    u.then(() => v([])).finally(h);
    return;
  }
  function b() {
    Promise.all(r.map((c) => /* @__PURE__ */ gl(c))).then(v).catch((c) => Ae(c, a)).finally(h);
  }
  u ? u.then(() => {
    if ((a.f & U) !== 0) {
      h();
      return;
    }
    f(), b(), Cr();
  }) : b();
}
function pl() {
  var e = (
    /** @type {Effect} */
    S
  ), t = E, r = J, n = (
    /** @type {Batch} */
    m
  );
  return function(s = !0) {
    je(e), ve(t), Nt(r), s && (e.f & U) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Cr(e = !0) {
  je(null), ve(null), Nt(null), e && (m == null || m.deactivate());
}
function Ci() {
  var e = (
    /** @type {Effect} */
    S
  ), t = e.b, r = (
    /** @type {Batch} */
    m
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = q | D;
  return S !== null && (S.f |= mt), {
    ctx: J,
    deps: null,
    effects: null,
    equals: $i,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
const Bt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function gl(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && Qs();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = fr(
    /** @type {V} */
    I
  ), l = !E, a = /* @__PURE__ */ new Set();
  return Pl(() => {
    var c, d;
    var f = (
      /** @type {Effect} */
      S
    ), u = pi();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (_) => {
        _ !== or && u.reject(_);
      }).finally(Cr);
    } catch (_) {
      u.reject(_), Cr();
    }
    var v = (
      /** @type {Batch} */
      m
    );
    if (l) {
      if ((f.f & gt) !== 0)
        var h = Ci();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (c = n.b) != null && c.is_rendered()
      )
        (d = v.async_deriveds.get(f)) == null || d.reject(Bt);
      else
        for (const _ of a.values())
          _.reject(Bt);
      a.add(u), v.async_deriveds.set(f, u);
    }
    const b = (_, x = void 0) => {
      h == null || h(), a.delete(u), x !== Bt && (v.activate(), x ? (s.f |= Qe, jr(s, x)) : ((s.f & Qe) !== 0 && (s.f ^= Qe), jr(s, _)), v.deactivate());
    };
    u.promise.then(b, (_) => b(null, _ || "unknown"));
  }), Ol(() => {
    for (const f of a)
      f.reject(Bt);
  }), new Promise((f) => {
    function u(v) {
      function h() {
        v === i ? f(s) : u(i);
      }
      v.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = xi, t;
}
function bl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ee(
        /** @type {Effect} */
        t[r]
      );
  }
}
function xn(e) {
  var t, r = S, n = e.parent;
  if (!Ue && n !== null && e.v !== I && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (U | he)) !== 0)
    return Gs(), e.v;
  je(n);
  try {
    bl(e), t = Ji(e);
  } finally {
    je(r);
  }
  return t;
}
function Mi(e) {
  var t = xn(e);
  if (!e.equals(t) && (e.wv = Gi(), (!(m != null && m.is_fork) || e.deps === null) && (m !== null ? (m.capture(e, t, !0), et == null || et.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    L(e, F);
    return;
  }
  Ue || (H !== null ? (An() || m != null && m.is_fork) && H.set(e, t) : $n(e));
}
function wl(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && ar(() => {
        r.ac.abort(or), r.ac = null;
      }), r.fn !== null && (r.teardown = _i), er(r, 0), On(r));
}
function Oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Pt(t);
}
let Ur = null, yt = null, m = null, et = null, H = null, sn = null, qt = !1, qr = !1, Xt = null, wr = null;
var Un = 0;
let yl = 1;
var St, Je, ft, Tt, At, Ct, Ie, Mt, re, tr, Fe, me, ke, Ot, ut, M, ln, on, Ht, an, ji, Ri, $t, $l, Wt;
const Rr = class Rr {
  constructor() {
    $(this, M);
    N(this, "id", yl++);
    /** True as soon as `#process` was called */
    $(this, St, !1);
    N(this, "linked", !0);
    /** @type {Batch | null} */
    $(this, Je, null);
    /** @type {Batch | null} */
    $(this, ft, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    N(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    N(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    N(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, Tt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, At, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, Ct, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    $(this, Ie, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, Mt, null);
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
    $(this, re, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    $(this, tr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, Fe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, me, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, ke, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    $(this, Ot, /* @__PURE__ */ new Set());
    N(this, "is_fork", !1);
    $(this, ut, !1);
    yt === null ? Ur = yt = this : (w(yt, ft, this), w(this, Je, yt)), yt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, ke).has(t) || o(this, ke).set(t, { d: [], m: [] }), o(this, Ot).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, ke).get(t);
    if (n) {
      o(this, ke).delete(t);
      for (var i of n.d)
        L(i, D), r(i);
      for (i of n.m)
        L(i, de), r(i);
    }
    o(this, Ot).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Qe) === 0 && (this.current.set(t, [r, n]), H == null || H.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    m = this;
  }
  deactivate() {
    m = null, H = null;
  }
  flush() {
    try {
      qr = !0, m = this, y(this, M, Ht).call(this);
    } finally {
      Un = 0, sn = null, Xt = null, wr = null, qr = !1, m = null, H = null, Ce.clear();
    }
  }
  discard() {
    var t;
    for (const r of o(this, At)) r(this);
    o(this, At).clear();
    for (const r of this.async_deriveds.values())
      r.reject(Bt);
    y(this, M, Wt).call(this), (t = o(this, Mt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, tr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (w(this, Ct, o(this, Ct) + 1), t) {
      let n = o(this, Ie).get(r) ?? 0;
      o(this, Ie).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (w(this, Ct, o(this, Ct) - 1), t) {
      let n = o(this, Ie).get(r) ?? 0;
      n === 1 ? o(this, Ie).delete(r) : o(this, Ie).set(r, n - 1);
    }
    o(this, ut) || (w(this, ut, !0), Be(() => {
      w(this, ut, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, Fe).add(n);
    for (const n of r)
      o(this, me).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, At).add(t);
  }
  settled() {
    return (o(this, Mt) ?? w(this, Mt, pi())).promise;
  }
  static ensure() {
    if (m === null) {
      const t = m = new Rr();
      !qr && !qt && Be(() => {
        o(t, St) || t.flush();
      });
    }
    return m;
  }
  apply() {
    {
      H = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var r;
    if (sn = t, (r = t.b) != null && r.is_pending && (t.f & (Rt | Lr | gi)) !== 0 && (t.f & gt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    o(this, re).push(t);
  }
};
St = new WeakMap(), Je = new WeakMap(), ft = new WeakMap(), Tt = new WeakMap(), At = new WeakMap(), Ct = new WeakMap(), Ie = new WeakMap(), Mt = new WeakMap(), re = new WeakMap(), tr = new WeakMap(), Fe = new WeakMap(), me = new WeakMap(), ke = new WeakMap(), Ot = new WeakMap(), ut = new WeakMap(), M = new WeakSet(), ln = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, Ie).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (o(this, ke).has(t)) {
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
  for (const s of o(this, re))
    if (!((s.f & U) !== 0 || (s.f & (D | de)) === 0)) {
      for (var r = s, n = !1; r.parent !== null; ) {
        r = r.parent;
        var i = r.f;
        if ((i & (We | Oe)) !== 0) {
          if ((i & F) === 0) {
            n = !0;
            break;
          }
          r.f ^= F;
        }
      }
      n || t.push(r);
    }
  return w(this, re, []), t;
}, Ht = function() {
  var a, f, u, v;
  w(this, St, !0);
  for (const h of o(this, Fe))
    o(this, me).delete(h), L(h, D), this.schedule(h);
  for (const h of o(this, me))
    L(h, de), this.schedule(h);
  this.apply();
  for (var t = Xt = [], r = [], n = wr = []; o(this, re).length > 0; ) {
    Un++ > 1e3 && (y(this, M, Wt).call(this), xl());
    for (const h of y(this, M, on).call(this))
      try {
        y(this, M, an).call(this, h, t, r);
      } catch (b) {
        throw Li(h), y(this, M, ln).call(this) || this.discard(), b;
      }
  }
  if (m = null, n.length > 0) {
    var i = Rr.ensure();
    for (const h of n)
      i.schedule(h);
  }
  if (Xt = null, wr = null, y(this, M, ln).call(this)) {
    y(this, M, $t).call(this, r), y(this, M, $t).call(this, t);
    for (const [h, b] of o(this, ke))
      Pi(h, b);
    n.length > 0 && /** @type {unknown} */
    y(a = m, M, Ht).call(a);
    return;
  }
  const s = y(this, M, ji).call(this);
  if (s) {
    y(this, M, $t).call(this, r), y(this, M, $t).call(this, t), y(f = s, M, Ri).call(f, this);
    return;
  }
  o(this, Fe).clear(), o(this, me).clear();
  for (const h of o(this, Tt)) h(this);
  o(this, Tt).clear(), et = this, qn(r), qn(t), et = null, (u = o(this, Mt)) == null || u.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    m
  );
  if (o(this, Ct) === 0 && (o(this, re).length === 0 || l !== null) && y(this, M, Wt).call(this), o(this, re).length > 0)
    if (l !== null) {
      for (const h of o(this, re))
        o(l, re).push(h);
      w(this, re, []);
    } else
      l = this;
  l !== null && (Ce.clear(), y(v = l, M, Ht).call(v));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
an = function(t, r, n) {
  t.f ^= F;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (Oe | We)) !== 0, a = l && (s & F) !== 0, f = a || (s & he) !== 0 || o(this, ke).has(i);
    if (!f && i.fn !== null) {
      l ? i.f ^= F : (s & Rt) !== 0 ? r.push(i) : ur(i) && ((s & we) !== 0 && o(this, me).add(i), Pt(i));
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
}, ji = function() {
  for (var t = o(this, Je); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, Je);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ri = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && s.promise.then(l.resolve).catch(l.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(o(t, Fe), o(t, me));
  const r = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & q) !== 0 && (i.f & (D | de)) === 0))
      for (const f of s) {
        var l = f.f;
        if ((l & q) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var a = (
            /** @type {Effect} */
            f
          );
          l & (kt | we) && !this.async_deriveds.has(a) && (o(this, me).delete(a), L(a, D), this.schedule(a));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), y(n = t, M, Wt).call(n), m = this, y(this, M, Ht).call(this);
}, /**
 * @param {Effect[]} effects
 */
$t = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ti(t[r], o(this, Fe), o(this, me));
}, $l = function() {
  var h, b;
  for (let c = Ur; c !== null; c = o(c, ft)) {
    var t = c.id < this.id, r = [];
    for (const [d, [_, x]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && _ !== n)
          c.current.set(d, [_, x]);
        else
          continue;
      }
      r.push(d);
    }
    if (t)
      for (const [d, _] of this.async_deriveds) {
        const x = c.async_deriveds.get(d);
        x && _.promise.then(x.resolve).catch(x.reject);
      }
    var i = [...c.current.keys()].filter(
      (d) => !/** @type {[any, boolean]} */
      c.current.get(d)[1]
    );
    if (!(!o(c, St) || i.length === 0)) {
      var s = i.filter((d) => !this.current.has(d));
      if (s.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const d of o(this, Ot))
            c.unskip_effect(d, (_) => {
              var x;
              (_.f & (we | kt)) !== 0 ? c.schedule(_) : y(x = c, M, $t).call(x, [_]);
            });
        c.activate();
        var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var f of r)
          Ni(f, s, l, a);
        a = /* @__PURE__ */ new Map();
        var u = [...c.current].filter(([d, _]) => {
          const x = this.current.get(d);
          return x ? x[0] !== _[0] || x[1] !== _[1] : !0;
        }).map(([d]) => d);
        if (u.length > 0)
          for (const d of o(this, tr))
            (d.f & (U | he | Tr)) === 0 && En(d, u, a) && ((d.f & (kt | we)) !== 0 ? (L(d, D), c.schedule(d)) : o(c, Fe).add(d));
        if (o(c, re).length > 0 && !o(c, ut)) {
          c.apply();
          for (var v of y(h = c, M, on).call(h))
            y(b = c, M, an).call(b, v, [], []);
        }
        c.deactivate();
      }
    }
  }
}, Wt = function() {
  if (this.linked) {
    var t = o(this, Je), r = o(this, ft);
    t === null ? Ur = r : w(t, ft, r), r === null ? yt = t : w(r, Je, t), this.linked = !1;
  }
};
let rt = Rr;
function te(e) {
  var t = qt, r = et;
  et = null, qt = !0;
  try {
    for (var n; ; ) {
      if (cl(), m === null)
        return (
          /** @type {T} */
          n
        );
      m.flush();
    }
  } finally {
    qt = t, et = r;
  }
}
function xl() {
  try {
    nl();
  } catch (e) {
    Ae(e, sn);
  }
}
let pe = null;
function qn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (U | he)) === 0 && ur(n) && (pe = /* @__PURE__ */ new Set(), Pt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Wi(n), (pe == null ? void 0 : pe.size) > 0)) {
        Ce.clear();
        for (const i of pe) {
          if ((i.f & (U | he)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            pe.has(l) && (pe.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (U | he)) === 0 && Pt(f);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function Ni(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & q) !== 0 ? Ni(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (kt | we)) !== 0 && (s & D) === 0 && En(i, t, n) && (L(i, D), kn(
        /** @type {Effect} */
        i
      ));
    }
}
function En(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Zt.call(t, i))
        return !0;
      if ((i.f & q) !== 0 && En(
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
function kn(e) {
  m.schedule(e);
}
function Pi(e, t) {
  if (!((e.f & Oe) !== 0 && (e.f & F) !== 0)) {
    (e.f & D) !== 0 ? t.d.push(e) : (e.f & de) !== 0 && t.m.push(e), L(e, F);
    for (var r = e.first; r !== null; )
      Pi(r, t), r = r.next;
  }
}
function Li(e) {
  L(e, F);
  for (var t = e.first; t !== null; )
    Li(t), t = t.next;
}
let Or = /* @__PURE__ */ new Set();
const Ce = /* @__PURE__ */ new Map();
let Di = !1;
function fr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $i,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const r = fr(e);
  return Il(r), r;
}
// @__NO_SIDE_EFFECTS__
function El(e, t = !1, r = !0) {
  const n = fr(e);
  return t || (n.equals = xi), n;
}
function A(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ye || (E.f & Tr) !== 0) && ki() && (E.f & (q | we | kt | Tr)) !== 0 && (Me === null || !Me.has(e)) && al();
  let n = r ? Et(t) : t;
  return jr(e, n, wr);
}
var st = null, fn = 0;
function jr(e, t, r = null) {
  if (!e.equals(t)) {
    Ue ? Ce.set(e, t) : Ce.has(e) || Ce.set(e, e.v);
    var n = rt.ensure();
    if (n.capture(e, t), (e.f & q) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & D) !== 0 && xn(i), H === null && $n(i);
    }
    e.wv = Gi(), st = null, fn = 0, Ii(e, D, r), st = null, S !== null && (S.f & F) !== 0 && (S.f & (Oe | We)) === 0 && (ae === null ? Fl([e]) : ae.push(e)), !n.is_fork && Or.size > 0 && !Di && kl();
  }
  return t;
}
function kl() {
  Di = !1;
  for (const e of Or) {
    (e.f & F) !== 0 && L(e, de);
    let t;
    try {
      t = ur(e);
    } catch {
      t = !0;
    }
    t && Pt(e);
  }
  Or.clear();
}
function Gt(e) {
  A(e, e.v + 1);
}
function Ii(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (fn += i, fn > 1e5 && st === null && (st = /* @__PURE__ */ new Set()), st !== null) {
      if (st.has(e)) return;
      st.add(e);
    }
    for (var s = 0; s < i; s++) {
      var l = n[s], a = l.f, f = (a & D) === 0;
      if (f && L(l, t), (a & Tr) !== 0)
        Or.add(
          /** @type {Effect} */
          l
        );
      else if ((a & q) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        H == null || H.delete(u), Ii(u, de, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          l
        );
        (a & we) !== 0 && pe !== null && pe.add(v), r !== null ? r.push(v) : kn(v);
      }
    }
  }
}
function Et(e) {
  if (typeof e != "object" || e === null || mr in e || mi in e)
    return e;
  const t = vi(e);
  if (t !== Bs && t !== Hs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Is(e), i = /* @__PURE__ */ P(0), s = _t, l = (a) => {
    if (_t === s)
      return a();
    var f = E, u = _t;
    ve(null), Zn(s);
    var v = a();
    return ve(f), Zn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ll();
        var v = r.get(f);
        return v === void 0 ? l(() => {
          var h = /* @__PURE__ */ P(u.value);
          return r.set(f, h), h;
        }) : A(v, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in a) {
            const v = l(() => /* @__PURE__ */ P(I));
            r.set(f, v), Gt(i);
          }
        } else
          A(u, I), Gt(i);
        return !0;
      },
      get(a, f, u) {
        var c;
        if (f === mr)
          return e;
        var v = r.get(f), h = f in a;
        if (v === void 0 && (!h || (c = vt(a, f)) != null && c.writable) && (v = l(() => {
          var d = Et(h ? a[f] : I), _ = /* @__PURE__ */ P(d);
          return _;
        }), r.set(f, v)), v !== void 0) {
          var b = g(v);
          return b === I ? void 0 : b;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var b;
        (b = this.has) == null || b.call(this, a, f);
        var u = Reflect.getOwnPropertyDescriptor(a, f), v = r.get(f);
        if (v !== void 0) {
          var h = g(v);
          if (h === I)
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
        var b;
        if (f === mr)
          return !0;
        var u = r.get(f), v = u !== void 0 && u.v !== I || Reflect.has(a, f);
        if (u !== void 0 || S !== null && (!v || (b = vt(a, f)) != null && b.writable)) {
          u === void 0 && (u = l(() => {
            var c = v ? Et(a[f]) : I, d = /* @__PURE__ */ P(c);
            return d;
          }), r.set(f, u));
          var h = g(u);
          if (h === I)
            return !1;
        }
        return v;
      },
      set(a, f, u, v) {
        var R;
        var h = r.get(f), b = f in a;
        if (n && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? A(d, I) : c in a && (d = l(() => /* @__PURE__ */ P(I)), r.set(c + "", d));
          }
        if (h === void 0)
          (!b || (R = vt(a, f)) != null && R.writable) && (h = l(() => /* @__PURE__ */ P(void 0)), A(h, Et(u)), r.set(f, h));
        else {
          b = h.v !== I;
          var _ = l(() => Et(u));
          A(h, _);
        }
        var x = Reflect.getOwnPropertyDescriptor(a, f);
        if (x != null && x.set && x.set.call(v, u), !b) {
          if (n && typeof f == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(f);
            Number.isInteger(z) && z >= T.v && A(T, z + 1);
          }
          Gt(i);
        }
        return !0;
      },
      ownKeys(a) {
        g(i);
        var f = Reflect.ownKeys(a).filter((h) => {
          var b = r.get(h);
          return b === void 0 || b.v !== I;
        });
        for (var [u, v] of r)
          v.v !== I && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        ol();
      }
    }
  );
}
var Xn, Fi, zi, Yi;
function un() {
  if (Xn === void 0) {
    Xn = window, Fi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    zi = vt(t, "firstChild").get, Yi = vt(t, "nextSibling").get, Wn(e) && (e[tn] = void 0, e[br] = null, e[rn] = void 0, e.__e = void 0), Wn(r) && (r[Yt] = void 0);
  }
}
function Ve(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return (
    /** @type {TemplateNode | null} */
    zi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
function G(e, t) {
  if (!j)
    return /* @__PURE__ */ ce(e);
  var r = /* @__PURE__ */ ce(C);
  if (r === null)
    r = C.appendChild(Ve());
  else if (t && r.nodeType !== Dr) {
    var n = Ve();
    return r == null || r.before(n), xe(n), n;
  }
  return t && Tn(
    /** @type {Text} */
    r
  ), xe(r), r;
}
function Gn(e, t = !1) {
  if (!j) {
    var r = /* @__PURE__ */ ce(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ qe(r) : r;
  }
  if (t) {
    if ((C == null ? void 0 : C.nodeType) !== Dr) {
      var n = Ve();
      return C == null || C.before(n), xe(n), n;
    }
    Tn(
      /** @type {Text} */
      C
    );
  }
  return C;
}
function yr(e, t = !1) {
  if (!j)
    return /* @__PURE__ */ ce(e);
  var r = G(e, t);
  return X(e), r;
}
function De(e, t = 1, r = !1) {
  let n = j ? C : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(n);
  if (!j)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Dr) {
      var s = Ve();
      return n === null ? i == null || i.after(s) : n.before(s), xe(s), s;
    }
    Tn(
      /** @type {Text} */
      n
    );
  }
  return xe(n), n;
}
function Sl(e) {
  e.textContent = "";
}
function Tl() {
  return !1;
}
function Sn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function Tn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Dr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Al(e) {
  var t = S;
  if (t === null)
    return E.f |= Qe, e;
  if ((t.f & gt) === 0 && (t.f & Rt) === 0)
    throw e;
  Ae(e, t);
}
function Ae(e, t) {
  if (e === tt)
    throw e;
  if (!(t !== null && (t.f & U) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & en) !== 0 && (t.f & (U | Sr)) === 0) {
        if ((t.f & gt) === 0)
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
function Cl(e) {
  S === null && (E === null && rl(), tl()), Ue && el();
}
function Ml(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Re(e, t) {
  var r = S;
  r !== null && (r.f & he) !== 0 && (e |= he);
  var n = {
    ctx: J,
    deps: null,
    nodes: null,
    f: e | D | $e,
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
  m == null || m.register_created_effect(n);
  var i = n;
  if ((e & Rt) !== 0)
    Xt !== null ? Xt.push(n) : rt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Pt(n);
    } catch (l) {
      throw ee(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & mt) === 0 && (i = i.first, (e & we) !== 0 && (e & pt) !== 0 && i !== null && (i.f |= pt));
  }
  if (i !== null && (i.parent = r, r !== null && Ml(i, r), E !== null && (E.f & q) !== 0 && (e & We) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function An() {
  return E !== null && !ye;
}
function Ol(e) {
  const t = Re(Lr, null);
  return L(t, F), t.teardown = e, t;
}
function cn(e) {
  Cl();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !E && (t & Oe) !== 0 && J !== null && !J.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      J
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Bi(e);
}
function Bi(e) {
  return Re(Rt | Us, e);
}
function jl(e) {
  rt.ensure();
  const t = Re(We | mt, e);
  return () => {
    ee(t);
  };
}
function Rl(e) {
  rt.ensure();
  const t = Re(We | mt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Jt(t, () => {
      ee(t), n(void 0);
    }) : (ee(t), n(void 0));
  });
}
function Nl(e) {
  return Re(Rt, e);
}
function Pl(e) {
  return Re(kt | mt, e);
}
function Cn(e, t = 0) {
  return Re(Lr | t, e);
}
function Kt(e, t = [], r = [], n = []) {
  _l(n, t, r, (i) => {
    Re(Lr, () => {
      e(...i.map(g));
    });
  });
}
function Mn(e, t = 0) {
  var r = Re(we | t, e);
  return r;
}
function Le(e) {
  return Re(Oe | mt, e);
}
function Hi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ue, n = E;
    Jn(!0), ve(null);
    try {
      t.call(null);
    } catch (i) {
      Ae(i, e.parent);
    } finally {
      Jn(r), ve(n);
    }
  }
}
function On(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ar(() => {
      i.abort(or);
    });
    var n = r.next;
    (r.f & We) !== 0 ? r.parent = null : ee(r, t), r = n;
  }
}
function Ll(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && ee(t), t = r;
  }
}
function ee(e, t = !0) {
  var r = !1;
  (t || (e.f & Vs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Dl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Sr, On(e, t && !r), er(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Hi(e), e.f ^= Sr, e.f |= U;
  var i = e.parent;
  i !== null && i.first !== null && Wi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Dl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ qe(e);
    e.remove(), e = r;
  }
}
function Wi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Jt(e, t, r = !0) {
  var n = [];
  e.f |= mn, Vi(e, n, !0);
  var i = () => {
    r && ee(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of n)
      a.out(l);
  } else
    i();
}
function Vi(e, t, r) {
  if ((e.f & he) === 0) {
    e.f ^= he;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & We) === 0) {
        var l = (i.f & pt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Oe) !== 0 && (e.f & we) !== 0;
        Vi(i, t, l ? r : !1);
      }
      i = s;
    }
  }
}
function Kn(e) {
  e.f &= ~mn, Ui(e, !0);
}
function Ui(e, t) {
  if ((e.f & mn) === 0 && (e.f & he) !== 0) {
    e.f ^= he, (e.f & F) === 0 && (L(e, D), rt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & pt) !== 0 || (r.f & Oe) !== 0;
      Ui(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function qi(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ qe(r);
      t.append(r), r = i;
    }
}
let Ue = !1;
function Jn(e) {
  Ue = e;
}
let E = null, ye = !1;
function ve(e) {
  E = e;
}
let S = null;
function je(e) {
  S = e;
}
let Me = null;
function Il(e) {
  E !== null && ((E.f & Ar) !== 0 || (E.f & q) !== 0) && (Me ?? (Me = /* @__PURE__ */ new Set())).add(e);
}
let Q = null, oe = 0, ae = null;
function Fl(e) {
  ae = e;
}
let Xi = 1, ot = 0, _t = ot;
function Zn(e) {
  _t = e;
}
function Gi() {
  return ++Xi;
}
function ur(e) {
  var t = e.f;
  if ((t & D) !== 0)
    return !0;
  if ((t & de) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (ur(
        /** @type {Derived} */
        s
      ) && Mi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & $e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    H === null && L(e, F);
  }
  return !1;
}
function Ki(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Me.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & q) !== 0 ? Ki(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? L(s, D) : (s.f & F) !== 0 && L(s, de), kn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ji(e) {
  var t = Q, r = oe, n = ae, i = E, s = Me, l = J, a = ye, f = _t, u = e.f;
  Q = /** @type {null | Value[]} */
  null, oe = 0, ae = null, E = (u & (Oe | We)) === 0 ? e : null, Me = null, Nt(e.ctx), ye = !1, _t = ++ot, e.ac !== null && (ar(() => {
    e.ac.abort(or);
  }), e.ac = null);
  try {
    e.f |= Ar;
    var v = (
      /** @type {Function} */
      e.fn
    ), h = v();
    e.f |= gt;
    var b = Qn(e);
    if (ki() && ae !== null && !ye && b !== null && (e.f & (q | de | D)) === 0)
      for (var c = 0; c < /** @type {Source[]} */
      ae.length; c++)
        Ki(
          ae[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ot++, i.deps !== null)
        for (let d = 0; d < r; d += 1)
          i.deps[d].rv = ot;
      if (t !== null)
        for (const d of t)
          d.rv = ot;
      ae !== null && (n === null ? n = ae : n.push(.../** @type {Source[]} */
      ae));
    }
    return (e.f & Qe) !== 0 && (e.f ^= Qe), h;
  } catch (d) {
    return Qn(e), Al(d);
  } finally {
    e.f ^= Ar, Q = t, oe = r, ae = n, E = i, Me = s, Nt(l), ye = a, _t = f;
  }
}
function Qn(e) {
  var i;
  var t = e.deps, r = m == null ? void 0 : m.is_fork;
  if (Q !== null) {
    var n;
    if (r || er(e, oe), t !== null && oe > 0)
      for (t.length = oe + Q.length, n = 0; n < Q.length; n++)
        t[oe + n] = Q[n];
    else
      e.deps = t = Q;
    if (An() && (e.f & $e) !== 0)
      for (n = oe; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && oe < t.length && (er(e, oe), t.length = oe);
  return t;
}
function zl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Fs.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Zt.call(Q, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & $e) !== 0 && (s.f ^= $e), s.v !== I && $n(s), s.ac !== null && ar(() => {
      s.ac.abort(or), s.ac = null, L(s, D);
    }), wl(s), er(s, 0);
  }
}
function er(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      zl(e, r[n]);
}
function Pt(e) {
  var t = e.f;
  if ((t & U) === 0) {
    L(e, F);
    var r = S;
    S = e;
    try {
      (t & (we | gi)) !== 0 ? Ll(e) : On(e), Hi(e);
      var n = Ji(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Xi;
      var i;
      hi && ul && (e.f & D) !== 0 && e.deps;
    } finally {
      S = r;
    }
  }
}
async function Yl() {
  await Promise.resolve(), te();
}
function g(e) {
  var t = e.f, r = (t & q) !== 0;
  if (E !== null && !ye) {
    var n = S !== null && (S.f & U) !== 0;
    if (!n && (Me === null || !Me.has(e))) {
      var i = E.deps;
      if ((E.f & Ar) !== 0)
        e.rv < ot && (e.rv = ot, Q === null && i !== null && i[oe] === e ? oe++ : Q === null ? Q = [e] : Q.push(e));
      else {
        E.deps ?? (E.deps = []), Zt.call(E.deps, e) || E.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Zt.call(s, E) || s.push(E);
      }
    }
  }
  if (Ue && Ce.has(e))
    return Ce.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Ue) {
      var a = l.v;
      return ((l.f & F) === 0 && l.reactions !== null || Qi(l)) && (a = xn(l)), Ce.set(l, a), a;
    }
    var f = (l.f & $e) === 0 && !ye && E !== null && (E.f & $e) !== 0, u = (l.f & gt) === 0;
    ur(l) && (f && (l.f |= $e), Mi(l)), f && !u && (Oi(l), Zi(l));
  }
  if (H != null && H.has(e))
    return H.get(e);
  if ((e.f & Qe) !== 0)
    throw e.v;
  return e.v;
}
function Zi(e) {
  if (e.f |= $e, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : Zt.call(t, e) || t.push(e), (r.f & q) !== 0 && (r.f & $e) === 0 && (Oi(
        /** @type {Derived} */
        r
      ), Zi(
        /** @type {Derived} */
        r
      ));
    }
}
function Qi(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ce.has(t) || (t.f & q) !== 0 && Qi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zr(e) {
  var t = ye;
  try {
    return ye = !0, e();
  } finally {
    ye = t;
  }
}
const at = Symbol("events"), es = /* @__PURE__ */ new Set(), dn = /* @__PURE__ */ new Set();
function Ee(e, t, r) {
  (t[at] ?? (t[at] = {}))[e] = r;
}
function ts(e) {
  for (var t = 0; t < e.length; t++)
    es.add(e[t]);
  for (var r of dn)
    r(e);
}
let Xr = null, Gr = !1;
function ei(e) {
  var _, x;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Xr = e, Gr || (Gr = !0, setTimeout(() => {
    Gr = !1, Xr = null;
  }));
  var l = 0, a = Xr === e && e[at];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[at] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    Qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = E, h = S;
    ve(null), je(null);
    try {
      for (var b, c = []; s !== null && s !== t; ) {
        try {
          var d = (x = s[at]) == null ? void 0 : x[n];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && d.call(s, e);
        } catch (T) {
          b ? c.push(T) : b = T;
        }
        if (e.cancelBubble) break;
        l++, s = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (b) {
        for (let T of c)
          queueMicrotask(() => {
            throw T;
          });
        throw b;
      }
    } finally {
      e[at] = t, delete e.currentTarget, ve(v), je(h);
    }
  }
}
var ai;
const Kr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((ai = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ai.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Bl(e) {
  return (
    /** @type {string} */
    (Kr == null ? void 0 : Kr.createHTML(e)) ?? e
  );
}
function rs(e) {
  var t = Sn("template");
  return t.innerHTML = Bl(e.replaceAll("<!>", "<!---->")), t.content;
}
function He(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  var r = (t & fi) !== 0, n = (t & Ls) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (j)
      return He(C, null), C;
    i === void 0 && (i = rs(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ce(i)));
    var l = (
      /** @type {TemplateNode} */
      n || Fi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      He(a, f);
    } else
      He(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Hl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & fi) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (j)
      return He(C, null), C;
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        rs(s)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ ce(a)
      );
      if (i)
        for (l = document.createDocumentFragment(); /* @__PURE__ */ ce(f); )
          l.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ce(f)
          );
      else
        l = /** @type {Element} */
        /* @__PURE__ */ ce(f);
    }
    var u = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    if (i) {
      var v = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      He(v, h);
    } else
      He(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Dt(e, t) {
  return /* @__PURE__ */ Hl(e, t, "svg");
}
function Wl() {
  if (j)
    return He(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ve();
  return e.append(t, r), He(t, r), e;
}
function Z(e, t) {
  if (j) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      S
    );
    ((r.f & gt) === 0 || r.nodes.end === null) && (r.nodes.end = C), bn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Vl = ["touchstart", "touchmove"];
function Ul(e) {
  return Vl.includes(e);
}
function ql(e) {
  let t = 0, r = fr(0), n;
  return () => {
    An() && (g(r), Cn(() => (t === 0 && (n = zr(() => e(() => Gt(r)))), t += 1, () => {
      Be(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Gt(r));
      });
    })));
  };
}
var Xl = pt | mt;
function Gl(e, t, r, n) {
  new Kl(e, t, r, n);
}
var ne, rr, fe, ct, V, ie, K, se, Se, dt, Ze, jt, nr, ir, ze, Nr, k, ns, is, hn, Ge, ss, vn, Vt, $r, _n, pn;
class Kl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    $(this, k);
    /** @type {Boundary | null} */
    N(this, "parent");
    N(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    N(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, ne);
    /** @type {TemplateNode | null} */
    $(this, rr, j ? C : null);
    /** @type {BoundaryProps} */
    $(this, fe);
    /** @type {((anchor: Node) => void)} */
    $(this, ct);
    /** @type {Effect} */
    $(this, V);
    /** @type {Effect | null} */
    $(this, ie, null);
    /** @type {Effect | null} */
    $(this, K, null);
    /** @type {Effect | null} */
    $(this, se, null);
    /** @type {DocumentFragment | null} */
    $(this, Se, null);
    $(this, dt, 0);
    $(this, Ze, 0);
    $(this, jt, !1);
    /** @type {Set<Effect>} */
    $(this, nr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, ir, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, ze, null);
    $(this, Nr, ql(() => (w(this, ze, fr(o(this, dt))), () => {
      w(this, ze, null);
    })));
    var s;
    w(this, ne, t), w(this, fe, r), w(this, ct, (l) => {
      var a = (
        /** @type {Effect} */
        S
      );
      a.b = this, a.f |= en, n(l);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((l) => l), w(this, V, Mn(() => {
      if (j) {
        const l = yi(
          /** @type {TemplateNode} */
          o(this, rr)
        );
        bn();
        const a = l === ci;
        if (l.startsWith(Hn)) {
          const u = JSON.parse(l.slice(Hn.length));
          y(this, k, is).call(this, u);
        } else a ? y(this, k, ss).call(this) : y(this, k, ns).call(this);
      } else
        y(this, k, vn).call(this);
    }, Xl)), j && w(this, ne, C);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ti(t, o(this, nr), o(this, ir));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    y(this, k, _n).call(this, t, r), w(this, dt, o(this, dt) + t), !(!o(this, ze) || o(this, jt)) && (w(this, jt, !0), Be(() => {
      w(this, jt, !1), o(this, ze) && jr(o(this, ze), o(this, dt));
    }));
  }
  get_effect_pending() {
    return o(this, Nr).call(this), g(
      /** @type {Source<number>} */
      o(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === tt || !o(this, fe).onerror && !o(this, fe).failed)
      throw t;
    m != null && m.is_fork ? (o(this, ie) && m.skip_effect(o(this, ie)), o(this, K) && m.skip_effect(o(this, K)), o(this, se) && m.skip_effect(o(this, se)), m.oncommit(() => {
      y(this, k, Ge).call(this) || y(this, k, pn).call(this, t);
    })) : y(this, k, pn).call(this, t);
  }
}
ne = new WeakMap(), rr = new WeakMap(), fe = new WeakMap(), ct = new WeakMap(), V = new WeakMap(), ie = new WeakMap(), K = new WeakMap(), se = new WeakMap(), Se = new WeakMap(), dt = new WeakMap(), Ze = new WeakMap(), jt = new WeakMap(), nr = new WeakMap(), ir = new WeakMap(), ze = new WeakMap(), Nr = new WeakMap(), k = new WeakSet(), ns = function() {
  try {
    w(this, ie, Le(() => o(this, ct).call(this, o(this, ne))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
is = function(t) {
  const r = o(this, fe).failed, { reset: n, invoke_onerror: i } = y(this, k, hn).call(this, t);
  Be(i), r && w(this, se, Le(() => {
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
hn = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (!y(this, k, Ge).call(this)) {
      if (r) {
        Ks();
        return;
      }
      r = !0, n && fl(), o(this, se) !== null && Jt(o(this, se), () => {
        w(this, se, null);
      }), y(this, k, $r).call(this, () => {
        y(this, k, vn).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var l, a;
    if (!y(this, k, Ge).call(this))
      try {
        n = !0, (a = (l = o(this, fe)).onerror) == null || a.call(l, t, i), n = !1;
      } catch (f) {
        Ae(f, o(this, V) && o(this, V).parent);
      }
  } };
}, Ge = function() {
  return (o(this, V).f & (U | Sr)) !== 0;
}, ss = function() {
  const t = o(this, fe).pending;
  t && (this.is_pending = !0, w(this, K, Le(() => t(o(this, ne)))), Be(() => {
    if (!y(this, k, Ge).call(this)) {
      var r = w(this, Se, document.createDocumentFragment()), n = Ve(), i = !1;
      if (r.append(n), w(this, ie, y(this, k, $r).call(this, () => {
        try {
          return Le(() => o(this, ct).call(this, n));
        } catch (s) {
          try {
            this.error(s), i = !0;
          } catch (l) {
            Ae(l, o(this, V).parent);
          }
          return null;
        }
      })), o(this, ie) === null) {
        w(this, Se, null), i && y(this, k, Vt).call(
          this,
          /** @type {Batch} */
          m
        );
        return;
      }
      o(this, Ze) === 0 && (o(this, ne).before(r), w(this, Se, null), Jt(
        /** @type {Effect} */
        o(this, K),
        () => {
          w(this, K, null);
        }
      ), y(this, k, Vt).call(
        this,
        /** @type {Batch} */
        m
      ));
    }
  }));
}, vn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ze, 0), w(this, dt, 0), w(this, ie, Le(() => {
      o(this, ct).call(this, o(this, ne));
    })), o(this, Ze) > 0) {
      var t = w(this, Se, document.createDocumentFragment());
      qi(o(this, ie), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, fe).pending
      );
      w(this, K, Le(() => r(o(this, ne))));
    } else
      y(this, k, Vt).call(
        this,
        /** @type {Batch} */
        m
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Vt = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, nr), o(this, ir));
}, /**
 * @template T
 * @param {() => T} fn
 */
$r = function(t) {
  var r = S, n = E, i = J;
  je(o(this, V)), ve(o(this, V)), Nt(o(this, V).ctx);
  try {
    return rt.ensure(), t();
  } finally {
    je(r), ve(n), Nt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
_n = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && y(n = this.parent, k, _n).call(n, t, r);
    return;
  }
  w(this, Ze, o(this, Ze) + t), o(this, Ze) === 0 && (y(this, k, Vt).call(this, r), o(this, K) && Jt(o(this, K), () => {
    w(this, K, null);
  }), o(this, Se) && (o(this, ne).before(o(this, Se)), w(this, Se, null)));
}, /**
 * @param {unknown} error
 */
pn = function(t) {
  o(this, ie) && (ee(o(this, ie)), w(this, ie, null)), o(this, K) && (ee(o(this, K)), w(this, K, null)), o(this, se) && (ee(o(this, se)), w(this, se, null)), j && (xe(
    /** @type {TemplateNode} */
    o(this, rr)
  ), nn(), xe(wi()));
  let r = o(this, fe).failed;
  const n = (i) => {
    if (y(this, k, Ge).call(this)) return;
    const { reset: s, invoke_onerror: l } = y(this, k, hn).call(this, i);
    l(), r && !y(this, k, Ge).call(this) && w(this, se, y(this, k, $r).call(this, () => {
      try {
        return Le(() => {
          var a = (
            /** @type {Effect} */
            S
          );
          a.b = this, a.f |= en, r(
            o(this, ne),
            () => i,
            () => s
          );
        });
      } catch (a) {
        return Ae(
          a,
          /** @type {Effect} */
          o(this, V).parent
        ), null;
      }
    }));
  };
  Be(() => {
    if (!y(this, k, Ge).call(this)) {
      var i;
      try {
        i = this.transform_error(t);
      } catch (s) {
        Ae(s, o(this, V) && o(this, V).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        n,
        /** @param {unknown} e */
        (s) => Ae(s, o(this, V) && o(this, V).parent)
      ) : n(i);
    }
  });
};
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Yt] ?? (e[Yt] = e.nodeValue)) && (e[Yt] = r, e.nodeValue = `${r}`);
}
function ls(e, t) {
  return os(e, t);
}
function Jl(e, t) {
  un(), t.intro = t.intro ?? !1;
  const r = t.target, n = j, i = C;
  try {
    for (var s = /* @__PURE__ */ ce(r); s && (s.nodeType !== Ir || /** @type {Comment} */
    s.data !== ui); )
      s = /* @__PURE__ */ qe(s);
    if (!s)
      throw tt;
    xt(!0), xe(
      /** @type {Comment} */
      s
    );
    const l = os(e, { ...t, anchor: s });
    return xt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== tt && console.warn("Failed to hydrate: ", l), t.recover === !1 && il(), un(), Sl(r), xt(!1), ls(e, t);
  } finally {
    xt(n), xe(i);
  }
}
const _r = /* @__PURE__ */ new Map();
function os(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: a }) {
  un();
  var f = void 0, u = Rl(() => {
    var v = r ?? t.appendChild(Ve());
    Gl(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (c) => {
        wn({});
        var d = (
          /** @type {ComponentContext} */
          J
        );
        if (s && (d.c = s), i && (n.$$events = i), j && He(
          /** @type {TemplateNode} */
          c,
          null
        ), f = e(c, n) || Ei(), j && (S.nodes.end = C, C === null || C.nodeType !== Ir || /** @type {Comment} */
        C.data !== di))
          throw Fr(), tt;
        yn();
      },
      a
    );
    var h = /* @__PURE__ */ new Set(), b = (c) => {
      for (var d = 0; d < c.length; d++) {
        var _ = c[d];
        if (!h.has(_)) {
          h.add(_);
          var x = Ul(_);
          for (const R of [t, document]) {
            var T = _r.get(R);
            T === void 0 && (T = /* @__PURE__ */ new Map(), _r.set(R, T));
            var z = T.get(_);
            z === void 0 ? (R.addEventListener(_, ei, { passive: x }), T.set(_, 1)) : T.set(_, z + 1);
          }
        }
      }
    };
    return b(zs(es)), dn.add(b), () => {
      var x;
      for (var c of h)
        for (const T of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            _r.get(T)
          ), _ = (
            /** @type {number} */
            d.get(c)
          );
          --_ == 0 ? (T.removeEventListener(c, ei), d.delete(c), d.size === 0 && _r.delete(T)) : d.set(c, _);
        }
      dn.delete(b), v !== r && ((x = v.parentNode) == null || x.removeChild(v));
    };
  });
  return gn.set(f, u), f;
}
let gn = /* @__PURE__ */ new WeakMap();
function Zl(e, t) {
  const r = gn.get(e);
  return r ? (gn.delete(e), r(t)) : Promise.resolve();
}
var be, Te, le, ht, sr, lr, Pr;
class as {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    N(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, be, /* @__PURE__ */ new Map());
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
    $(this, Te, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, ht, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, sr, !0);
    /**
     * @param {Batch} batch
     */
    $(this, lr, (t) => {
      if (o(this, be).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, be).get(t)
        ), n = o(this, Te).get(r);
        if (n)
          Kn(n), o(this, ht).delete(r);
        else {
          var i = o(this, le).get(r);
          i && (Kn(i.effect), o(this, Te).set(r, i.effect), o(this, le).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, l] of o(this, be)) {
          if (o(this, be).delete(s), s === t)
            break;
          const a = o(this, le).get(l);
          a && (ee(a.effect), o(this, le).delete(l));
        }
        for (const [s, l] of o(this, Te)) {
          if (s === r || o(this, ht).has(s)) continue;
          const a = () => {
            if (Array.from(o(this, be).values()).includes(s)) {
              var u = document.createDocumentFragment();
              qi(l, u), u.append(Ve()), o(this, le).set(s, { effect: l, fragment: u });
            } else
              ee(l);
            o(this, ht).delete(s), o(this, Te).delete(s);
          };
          o(this, sr) || !n ? (o(this, ht).add(s), Jt(l, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, Pr, (t) => {
      o(this, be).delete(t);
      const r = Array.from(o(this, be).values());
      for (const [n, i] of o(this, le))
        r.includes(n) || (ee(i.effect), o(this, le).delete(n));
    });
    this.anchor = t, w(this, sr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      m
    ), i = Tl();
    if (r && !o(this, Te).has(t) && !o(this, le).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = Ve();
        s.append(l), o(this, le).set(t, {
          effect: Le(() => r(l)),
          fragment: s
        });
      } else
        o(this, Te).set(
          t,
          Le(() => r(this.anchor))
        );
    if (o(this, be).set(n, t), i) {
      for (const [a, f] of o(this, Te))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of o(this, le))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, lr)), n.ondiscard(o(this, Pr));
    } else
      j && (this.anchor = C), o(this, lr).call(this, n);
  }
}
be = new WeakMap(), Te = new WeakMap(), le = new WeakMap(), ht = new WeakMap(), sr = new WeakMap(), lr = new WeakMap(), Pr = new WeakMap();
function ti(e, t, ...r) {
  var n = new as(e);
  Mn(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, pt);
}
function Ql(e) {
  J === null && Zs(), cn(() => {
    const t = zr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ke(e, t, r = !1) {
  var n;
  j && (n = C, bn());
  var i = new as(e), s = r ? pt : 0;
  function l(a, f) {
    if (j) {
      var u = yi(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(u.substring(1))) {
        var v = wi();
        xe(v), i.anchor = v, xt(!1), i.ensure(a, f), xt(!0);
        return;
      }
    }
    i.ensure(a, f);
  }
  Mn(() => {
    var a = !1;
    t((f, u = 0) => {
      a = !0, l(u, f);
    }), a || l(-1, null);
  }, s);
}
function fs(e, t) {
  Nl(() => {
    var i, s;
    e = ((s = (i = S == null ? void 0 : S.parent) == null ? void 0 : i.nodes) == null ? void 0 : s.start) ?? e;
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
      const l = Sn("style");
      l.id = t.hash, l.textContent = t.code, n.appendChild(l);
    }
  });
}
const ri = [...` 	
\r\f \v\uFEFF`];
function eo(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || ri.includes(n[l - 1])) && (a === n.length || ri.includes(n[a])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(a + 1) : l = a;
        }
  }
  return n === "" ? null : n;
}
function ni(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function to(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += ni(n)), i && (r += ni(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function pr(e, t, r, n, i, s) {
  var l = (
    /** @type {any} */
    e[tn]
  );
  if (j || l !== r || l === void 0) {
    var a = eo(r, n, s);
    (!j || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e[tn] = r;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function Jr(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function ii(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[rn]
  );
  if (j || i !== t) {
    var s = to(t, n);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[rn] = t;
  } else n && (Array.isArray(n) ? (Jr(e, r == null ? void 0 : r[0], n[0]), Jr(e, r == null ? void 0 : r[1], n[1], "important")) : Jr(e, r, n));
  return n;
}
const ro = Symbol("is custom element"), no = Symbol("is html"), io = Xs ? "link" : "LINK";
function so(e) {
  if (j) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ge(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ge(e, "checked", null), e.checked = i;
        }
      }
    };
    e[Ut] = r, Be(r), Ai();
  }
}
function ge(e, t, r, n) {
  var i = lo(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === io) || i[t] !== (i[t] = r) && (t === "loading" && (e[qs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && oo(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function lo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[br] ?? (e[br] = {
      [ro]: e.nodeName.includes("-"),
      [no]: e.namespaceURI === Ds
    })
  );
}
var si = /* @__PURE__ */ new Map();
function oo(e) {
  var t = e.getAttribute("is") || e.nodeName, r = si.get(t);
  if (r) return r;
  si.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = Ys(i);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    i = vi(i);
  }
  return r;
}
function ao(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  vl(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Zr(e) ? Qr(s) : s, r(s), m !== null && n.add(m), await Yl(), s !== (s = t())) {
      var l = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        l === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (j && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zr(t) == null && e.value) && (r(Zr(e) ? Qr(e.value) : e.value), m !== null && n.add(m)), Cn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        m
      );
      if (n.has(s))
        return;
    }
    Zr(e) && i === Qr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Zr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Qr(e) {
  return e === "" ? null : +e;
}
let gr = !1;
function fo(e) {
  var t = gr;
  try {
    return gr = !1, [e(), gr];
  } finally {
    gr = t;
  }
}
function _e(e, t, r, n) {
  var Xe;
  var i = !0, s = (r & Ns) !== 0, l = (r & Ps) !== 0, a = (
    /** @type {V} */
    n
  ), f = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => l && i ? (u ?? (u = /* @__PURE__ */ Mr(
    /** @type {() => V} */
    n
  )), g(u)) : (f && (f = !1, a = l ? zr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let h;
  if (s) {
    var b = mr in e || bi in e;
    h = ((Xe = vt(e, t)) == null ? void 0 : Xe.set) ?? (b && t in e ? (W) => e[t] = W : void 0);
  }
  var c, d = !1;
  s ? [c, d] = fo(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t], c === void 0 && n !== void 0 && (c = v(), h && (sl(), h(c)));
  var _;
  if (_ = () => {
    var W = (
      /** @type {V} */
      e[t]
    );
    return W === void 0 ? v() : (f = !0, W);
  }, (r & Rs) === 0)
    return _;
  if (h) {
    var x = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(W, Ne) {
        return arguments.length > 0 ? ((!Ne || x || d) && h(Ne ? _() : W), W) : _();
      })
    );
  }
  var T = !1, z = ((r & js) !== 0 ? Mr : ml)(() => (T = !1, _()));
  s && g(z);
  var R = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(W, Ne) {
      if (arguments.length > 0) {
        const nt = Ne ? g(z) : s ? Et(W) : W;
        return A(z, nt), T = !0, a !== void 0 && (a = nt), W;
      }
      return Ue && T || (R.f & U) !== 0 ? z.v : g(z);
    })
  );
}
function uo(e) {
  return new co(e);
}
var Ye, ue;
class co {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $(this, Ye);
    /** @type {Record<string, any>} */
    $(this, ue);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (l, a) => {
      var f = /* @__PURE__ */ El(a, !1, !1);
      return r.set(l, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, a) {
          return g(r.get(a) ?? n(a, Reflect.get(l, a)));
        },
        has(l, a) {
          return a === bi ? !0 : (g(r.get(a) ?? n(a, Reflect.get(l, a))), Reflect.has(l, a));
        },
        set(l, a, f) {
          return A(r.get(a) ?? n(a, f), f), Reflect.set(l, a, f);
        }
      }
    );
    w(this, ue, (t.hydrate ? Jl : ls)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && te(), w(this, Ye, i.$$events);
    for (const l of Object.keys(o(this, ue)))
      l === "$set" || l === "$destroy" || l === "$on" || Qt(this, l, {
        get() {
          return o(this, ue)[l];
        },
        /** @param {any} value */
        set(a) {
          o(this, ue)[l] = a;
        },
        enumerable: !0
      });
    o(this, ue).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, o(this, ue).$destroy = () => {
      Zl(o(this, ue));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    o(this, ue).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    o(this, Ye)[t] = o(this, Ye)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return o(this, Ye)[t].push(n), () => {
      o(this, Ye)[t] = o(this, Ye)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    o(this, ue).$destroy();
  }
}
Ye = new WeakMap(), ue = new WeakMap();
let us;
typeof HTMLElement == "function" && (us = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    N(this, "$$ctor");
    /** Slots */
    N(this, "$$s");
    /** @type {any} The Svelte component instance */
    N(this, "$$c");
    /** Whether or not the custom element is connected */
    N(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    N(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    N(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    N(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    N(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    N(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    N(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    N(this, "$$shadowRoot", null);
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
          const l = Sn("slot");
          i !== "default" && (l.name = i), Z(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = ho(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Er(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = uo({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = jl(() => {
        Cn(() => {
          var i;
          this.$$r = !0;
          for (const s of kr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = Er(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Er(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return kr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Er(e, t, r, n) {
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
function ho(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function cs(e, t, r, n, i, s) {
  let l = class extends us {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return kr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return kr(t).forEach((a) => {
    Qt(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var h;
        f = Er(a, f, t), this.$$d[a] = f;
        var u = this.$$c;
        if (u) {
          var v = (h = vt(u, a)) == null ? void 0 : h.get;
          v ? u[a] = f : u.$set({ [a]: f });
        }
      }
    });
  }), n.forEach((a) => {
    Qt(l.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var vo = /* @__PURE__ */ Dt('<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" opacity="0.3"></path><rect x="7" y="7" width="10" height="10" fill="currentColor"></rect>', 1), _o = /* @__PURE__ */ Dt('<rect x="7" y="7" width="10" height="10" fill="none"></rect>'), po = /* @__PURE__ */ Dt('<rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), go = /* @__PURE__ */ Dt('<rect x="1" y="7" width="8" height="2" fill="currentColor"></rect>'), mo = /* @__PURE__ */ Dt('<rect x="2" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect><rect x="0" y="2" width="8" height="8" fill="var(--shell-panel-bg, #ffffff)" stroke="currentColor" stroke-width="1.5"></rect>', 1), bo = /* @__PURE__ */ Dt('<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5"></rect>'), wo = /* @__PURE__ */ Lt('<div class="dialog-footer svelte-ygb1nh"><!></div>'), yo = /* @__PURE__ */ Lt("<div><!></div> <!>", 1), $o = /* @__PURE__ */ Lt('<div tabindex="-1" role="dialog"><div><div class="dialog-titlebar svelte-ygb1nh" role="heading" aria-level="2"><span class="dialog-title svelte-ygb1nh"> </span> <div class="dialog-controls svelte-ygb1nh"><button type="button"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn minimize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn maximize svelte-ygb1nh"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><!></svg></button> <button type="button" class="ctrl-btn close svelte-ygb1nh" title="Close" aria-label="Close dialog"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5"></line><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5"></line></svg></button></div></div> <!></div></div>');
const xo = {
  hash: "svelte-ygb1nh",
  code: `.dialog-wrapper.svelte-ygb1nh {position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:flex-start;padding:0;}.dialog-wrapper.is-modal.svelte-ygb1nh {background:color-mix(in srgb, var(--shell-text-strong, #020617), transparent 72%);}.dialog-wrapper.minimized.svelte-ygb1nh {align-items:flex-end;justify-content:flex-start;}.dialog.svelte-ygb1nh {position:absolute;display:flex;flex-direction:column;background:var(--shell-panel, var(--shell-panel-bg, #ffffff));border:1px solid var(--shell-border, #e2e8f0);border-radius:12px;box-shadow:var(--shell-shadow, 0 16px 48px rgba(0, 0, 0, 0.15));overflow:hidden;min-width:min(20rem, calc(100vw - 24px));min-height:200px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);font-family:var(--font-ui, system-ui, sans-serif);color:var(--shell-text, #0f172a);}.dialog-titlebar.svelte-ygb1nh {display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));border-bottom:1px solid var(--shell-border, #e2e8f0);cursor:grab;user-select:none;flex-shrink:0;}.dialog-titlebar.svelte-ygb1nh:active {cursor:grabbing;}.dialog-title.svelte-ygb1nh {font:var(--efs-font-title-sm, 600 15px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--shell-text-strong, #020617);letter-spacing:0.01em;}.dialog-controls.svelte-ygb1nh {display:flex;gap:6px;align-items:center;}.ctrl-btn.svelte-ygb1nh {width:20px;height:20px;border:none;border-radius:4px;background:transparent;color:var(--shell-muted, #64748b);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background 0.15s, color 0.15s;}.ctrl-btn.svelte-ygb1nh:hover {background:var(--shell-hover-bg, #e2e8f0);color:var(--shell-text-strong, #020617);}.ctrl-btn.close.svelte-ygb1nh:hover {background:var(--efs-state-danger, #dc2626);color:var(--shell-pill-text, #fff);}.dialog-body.svelte-ygb1nh {flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;}.dialog-body.flush.svelte-ygb1nh {padding:0;gap:0;}.dialog-footer.svelte-ygb1nh {display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid var(--shell-border, #e2e8f0);background:var(--shell-surface, var(--shell-inset-bg, #f1f5f9));flex-shrink:0;}\r
\r
  @media (max-width: 47.99rem) {.dialog.svelte-ygb1nh {min-width:0;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);border-radius:10px;}.dialog-titlebar.svelte-ygb1nh {padding:12px;}.dialog-body.svelte-ygb1nh {padding:14px;gap:12px;}.dialog-footer.svelte-ygb1nh {flex-wrap:wrap;padding:12px 14px;}\r
  }`
};
function ds(e, t) {
  wn(t, !0), fs(e, xo);
  let r = _e(t, "title", 7), n = _e(t, "open", 15, !1), i = _e(t, "modal", 15, !0), s = _e(t, "defaultWidth", 7, 480), l = _e(t, "defaultHeight", 7, 380), a = _e(t, "defaultX", 7, 120), f = _e(t, "defaultY", 7, 80), u = _e(t, "flushBody", 7, !1), v = _e(t, "onClose", 7), h = _e(t, "children", 7), b = _e(t, "footer", 7), c = /* @__PURE__ */ P(!1), d = /* @__PURE__ */ P(!1), _ = /* @__PURE__ */ P(0), x = /* @__PURE__ */ P(0), T = !1;
  function z() {
    if (typeof window > "u")
      return { x: a(), y: f() };
    const p = window.innerWidth <= 768 ? 8 : 12, Y = Math.max(p, window.innerWidth - s() - p), cr = Math.max(p, window.innerHeight - l() - p);
    return {
      x: Math.min(Math.max(p, a()), Y),
      y: Math.min(Math.max(p, f()), cr)
    };
  }
  cn(() => {
    if (!T) {
      const { x: p, y: Y } = z();
      A(_, p, !0), A(x, Y, !0), T = !0;
    }
  });
  let R = /* @__PURE__ */ P(!1), Xe = 0, W = 0;
  cn(() => {
    n() && (A(c, !1), A(d, !1));
  });
  function Ne(p) {
    g(d) || p.target.closest(".dialog-controls") || (A(R, !0), Xe = p.clientX - g(_), W = p.clientY - g(x), window.addEventListener("pointermove", nt), window.addEventListener("pointerup", It));
  }
  function nt(p) {
    g(R) && (A(_, p.clientX - Xe), A(x, p.clientY - W));
  }
  function It() {
    A(R, !1), window.removeEventListener("pointermove", nt), window.removeEventListener("pointerup", It);
  }
  function Ft(p) {
    p.key === "Escape" && (g(d) ? A(d, !1) : g(c) ? A(c, !1) : v()());
  }
  var Yr = {
    get title() {
      return r();
    },
    set title(p) {
      r(p), te();
    },
    get open() {
      return n();
    },
    set open(p = !1) {
      n(p), te();
    },
    get modal() {
      return i();
    },
    set modal(p = !0) {
      i(p), te();
    },
    get defaultWidth() {
      return s();
    },
    set defaultWidth(p = 480) {
      s(p), te();
    },
    get defaultHeight() {
      return l();
    },
    set defaultHeight(p = 380) {
      l(p), te();
    },
    get defaultX() {
      return a();
    },
    set defaultX(p = 120) {
      a(p), te();
    },
    get defaultY() {
      return f();
    },
    set defaultY(p = 80) {
      f(p), te();
    },
    get flushBody() {
      return u();
    },
    set flushBody(p = !1) {
      u(p), te();
    },
    get onClose() {
      return v();
    },
    set onClose(p) {
      v(p), te();
    },
    get children() {
      return h();
    },
    set children(p) {
      h(p), te();
    },
    get footer() {
      return b();
    },
    set footer(p) {
      b(p), te();
    }
  }, zt = Wl(), Br = Gn(zt);
  {
    var Pe = (p) => {
      var Y = $o();
      let cr, jn;
      var dr = G(Y);
      let Rn, Nn;
      var hr = G(dr), Pn = G(hr), hs = yr(Pn, !0), Ln = De(Pn, 2), it = G(Ln);
      let Dn;
      var In = G(it), vs = G(In);
      {
        var _s = (O) => {
          var B = vo();
          nn(), Z(O, B);
        }, ps = (O) => {
          var B = _o();
          Z(O, B);
        };
        Ke(vs, (O) => {
          i() ? O(_s) : O(ps, -1);
        });
      }
      X(In), X(it);
      var bt = De(it, 2), Fn = G(bt), gs = G(Fn);
      {
        var ms = (O) => {
          var B = po();
          Z(O, B);
        }, bs = (O) => {
          var B = go();
          Z(O, B);
        };
        Ke(gs, (O) => {
          g(c) ? O(ms) : O(bs, -1);
        });
      }
      X(Fn), X(bt);
      var wt = De(bt, 2), zn = G(wt), ws = G(zn);
      {
        var ys = (O) => {
          var B = mo();
          nn(), Z(O, B);
        }, $s = (O) => {
          var B = bo();
          Z(O, B);
        };
        Ke(ws, (O) => {
          g(d) ? O(ys) : O($s, -1);
        });
      }
      X(zn), X(wt);
      var xs = De(wt, 2);
      X(Ln), X(hr);
      var Es = De(hr, 2);
      {
        var ks = (O) => {
          var B = yo(), vr = Gn(B);
          let Yn;
          var Ss = G(vr);
          ti(Ss, () => h() ?? _i), X(vr);
          var Ts = De(vr, 2);
          {
            var As = (Hr) => {
              var Wr = wo(), Cs = G(Wr);
              ti(Cs, b), X(Wr), Z(Hr, Wr);
            };
            Ke(Ts, (Hr) => {
              b() && Hr(As);
            });
          }
          Kt(() => Yn = pr(vr, 1, "dialog-body svelte-ygb1nh", null, Yn, { flush: u() })), Z(O, B);
        };
        Ke(Es, (O) => {
          g(c) || O(ks);
        });
      }
      X(dr), X(Y), Kt(() => {
        cr = pr(Y, 1, "dialog-wrapper svelte-ygb1nh", null, cr, { "is-modal": i(), minimized: g(c) }), ge(Y, "aria-modal", i() ? "true" : "false"), ge(Y, "aria-label", r()), jn = ii(Y, "", jn, { "pointer-events": i() ? "auto" : "none" }), Rn = pr(dr, 1, "dialog svelte-ygb1nh", null, Rn, { maximized: g(d) }), Nn = ii(dr, "", Nn, {
          left: g(d) ? "0" : g(_) + "px",
          top: g(d) ? "0" : g(x) + "px",
          width: g(d) ? "100%" : s() + "px",
          height: g(d) ? "100%" : l() + "px",
          "pointer-events": "auto"
        }), xr(hs, r()), Dn = pr(it, 1, "ctrl-btn unprioritize svelte-ygb1nh", null, Dn, { active: !i() }), ge(it, "title", i() ? "Unprioritize (drop backdrop)" : "Prioritize (show backdrop)"), ge(it, "aria-label", i() ? "Unprioritize" : "Prioritize"), ge(bt, "title", g(c) ? "Restore" : "Minimize"), ge(bt, "aria-label", g(c) ? "Restore dialog" : "Minimize dialog"), ge(wt, "title", g(d) ? "Restore" : "Maximize"), ge(wt, "aria-label", g(d) ? "Restore dialog" : "Maximize dialog");
      }), Ee("click", Y, (O) => {
        i() && O.target === O.currentTarget && v()();
      }), Ee("keydown", Y, Ft), Ee("pointerdown", hr, Ne), Ee("click", it, () => {
        i(!i());
      }), Ee("click", bt, () => {
        A(c, !g(c)), A(d, !1);
      }), Ee("click", wt, () => {
        A(d, !g(d)), A(c, !1);
      }), Ee("click", xs, function(...O) {
        var B;
        (B = v()) == null || B.apply(this, O);
      }), Z(p, Y);
    };
    Ke(Br, (p) => {
      n() && p(Pe);
    });
  }
  return Z(e, zt), yn(Yr);
}
ts(["click", "keydown", "pointerdown"]);
cs(
  ds,
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
var Eo = /* @__PURE__ */ Lt('<p class="message svelte-jbjdy7"> </p>'), ko = /* @__PURE__ */ Lt('<input type="text" class="input-field svelte-jbjdy7"/>'), So = /* @__PURE__ */ Lt('<div class="prompt-content svelte-jbjdy7"><!> <!> <div class="actions svelte-jbjdy7"><button type="button" class="ghost-button svelte-jbjdy7"> </button> <button type="button" class="pill-button svelte-jbjdy7"> </button></div></div>');
const To = {
  hash: "svelte-jbjdy7",
  code: ".prompt-content.svelte-jbjdy7 {padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem;color:var(--shell-text, #0f172a);}.message.svelte-jbjdy7 {margin:0;font-size:0.875rem;line-height:1.5;color:var(--shell-muted, #64748b);}.input-field.svelte-jbjdy7 {padding:0.5rem 0.75rem;background:var(--shell-input-bg, #ffffff);border:1px solid var(--shell-border, #e2e8f0);border-radius:0.375rem;color:var(--shell-text, #0f172a);font-family:inherit;font-size:0.875rem;transition:border-color 0.15s, box-shadow 0.15s;width:100%;box-sizing:border-box;}.input-field.svelte-jbjdy7:focus {outline:none;border-color:var(--shell-border-strong, #cbd5e1);box-shadow:0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);}.actions.svelte-jbjdy7 {display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;margin-top:0.5rem;}.ghost-button.svelte-jbjdy7 {background:transparent;border:none;color:var(--shell-text, #0f172a);padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.ghost-button.svelte-jbjdy7:hover {background:var(--shell-hover-bg, rgba(0,0,0,0.05));}.pill-button.svelte-jbjdy7 {background:var(--shell-primary, #0f172a);color:var(--shell-primary-text, #ffffff);border:none;padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:opacity 0.15s, transform 0.15s;}.pill-button.svelte-jbjdy7:hover {opacity:0.9;transform:translateY(-1px);}"
};
function Ao(e, t) {
  wn(t, !0), fs(e, To);
  let r = /* @__PURE__ */ P(!1), n = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P("confirm"), l = /* @__PURE__ */ P(""), a = /* @__PURE__ */ P(""), f = /* @__PURE__ */ P("Confirm"), u = /* @__PURE__ */ P("Cancel"), v = /* @__PURE__ */ P(null);
  const h = 400, b = typeof window < "u" ? Math.max(16, window.innerWidth / 2 - h / 2) : 120, c = typeof window < "u" ? Math.max(16, window.innerHeight * 0.3) : 100;
  Ql(() => {
    const T = (z) => {
      const R = z.detail;
      R && (A(n, R.title || "Confirm", !0), A(i, R.message || "", !0), A(s, R.type === "input" ? "input" : "confirm", !0), A(l, R.defaultValue || "", !0), A(a, R.placeholder || "", !0), A(f, R.confirmLabel || "Confirm", !0), A(u, R.cancelLabel || "Cancel", !0), A(v, R.resolve || null, !0), A(r, !0));
    };
    return window.addEventListener("efsdb:prompt", T), () => {
      window.removeEventListener("efsdb:prompt", T);
    };
  });
  function d() {
    g(v) && g(v)(g(s) === "input" ? g(l) : !0), A(r, !1);
  }
  function _() {
    g(v) && g(v)(g(s) === "input" ? null : !1), A(r, !1);
  }
  function x(T) {
    T.key === "Enter" ? (T.preventDefault(), d()) : T.key === "Escape" && _();
  }
  ds(e, {
    get title() {
      return g(n);
    },
    modal: !0,
    defaultWidth: h,
    defaultHeight: 200,
    get defaultX() {
      return b;
    },
    get defaultY() {
      return c;
    },
    onClose: _,
    get open() {
      return g(r);
    },
    set open(T) {
      A(r, T, !0);
    },
    children: (T, z) => {
      var R = So(), Xe = G(R);
      {
        var W = (Pe) => {
          var p = Eo(), Y = yr(p, !0);
          Kt(() => xr(Y, g(i))), Z(Pe, p);
        };
        Ke(Xe, (Pe) => {
          g(i) && Pe(W);
        });
      }
      var Ne = De(Xe, 2);
      {
        var nt = (Pe) => {
          var p = ko();
          so(p), hl(p), Kt(() => ge(p, "placeholder", g(a))), Ee("keydown", p, x), ao(p, () => g(l), (Y) => A(l, Y)), Z(Pe, p);
        };
        Ke(Ne, (Pe) => {
          g(s) === "input" && Pe(nt);
        });
      }
      var It = De(Ne, 2), Ft = G(It), Yr = yr(Ft, !0), zt = De(Ft, 2), Br = yr(zt, !0);
      X(It), X(R), Kt(() => {
        xr(Yr, g(u)), xr(Br, g(f));
      }), Ee("click", Ft, _), Ee("click", zt, d), Z(T, R);
    },
    $$slots: { default: !0 }
  }), yn();
}
ts(["keydown", "click"]);
customElements.define("efsdb-prompt", cs(Ao, {}, [], [], { mode: "open" }));
export {
  Ao as default
};
