var mv = Object.defineProperty;
var cc = (t) => {
  throw TypeError(t);
};
var fv = (t, r, n) => r in t ? mv(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var Rt = (t, r, n) => fv(t, typeof r != "symbol" ? r + "" : r, n), ql = (t, r, n) => r.has(t) || cc("Cannot " + n);
var T = (t, r, n) => (ql(t, r, "read from private field"), n ? n.call(t) : r.get(t)), Ge = (t, r, n) => r.has(t) ? cc("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, n), Fe = (t, r, n, a) => (ql(t, r, "write to private field"), a ? a.call(t, n) : r.set(t, n), n), Ne = (t, r, n) => (ql(t, r, "access private method"), n);
var Cc;
typeof window < "u" && ((Cc = window.__svelte ?? (window.__svelte = {})).v ?? (Cc.v = /* @__PURE__ */ new Set())).add("5");
const bv = 1, yv = 2, Ec = 4, xv = 8, kv = 16, _v = 1, qv = 4, Sv = 8, Tv = 16, jv = 1, Pv = 2, Rc = "[", fd = "[!", gc = "[?", bd = "]", Xa = {}, gr = Symbol("uninitialized"), zv = "http://www.w3.org/1999/xhtml", Oc = !1;
var Ks = Array.isArray, Mv = Array.prototype.indexOf, Fi = Array.prototype.includes, Js = Array.from, Rs = Object.keys, Ni = Object.defineProperty, So = Object.getOwnPropertyDescriptor, Wv = Object.getOwnPropertyDescriptors, Cv = Object.prototype, $v = Array.prototype, Ic = Object.getPrototypeOf, vc = Object.isExtensible;
const $o = () => {
};
function Av(t) {
  for (var r = 0; r < t.length; r++)
    t[r]();
}
function Dc() {
  var t, r, n = new Promise((a, o) => {
    t = a, r = o;
  });
  return { promise: n, resolve: t, reject: r };
}
function Ev(t, r) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const a of t)
    if (n.push(a), n.length === r) break;
  return n;
}
const Ar = 2, ii = 4, Zs = 8, Lc = 1 << 24, zn = 16, $n = 32, ka = 64, Ll = 128, yd = 256, Cn = 512, vr = 1024, er = 2048, fn = 4096, Nr = 8192, Tr = 16384, Ao = 32768, Hi = 1 << 25, Mo = 65536, Os = 1 << 17, Rv = 1 << 18, Eo = 1 << 19, Ov = 1 << 20, Un = 1 << 25, Is = 1 << 21, Ko = 1 << 22, Ga = 1 << 23, To = Symbol("$state"), Bc = Symbol("component"), Fc = Symbol("legacy props"), Iv = Symbol(""), Cs = Symbol("attributes"), Bl = Symbol("class"), Fl = Symbol("style"), zi = Symbol("text"), Ei = Symbol("form reset"), es = new class extends Error {
  constructor() {
    super(...arguments);
    Rt(this, "name", "StaleReactionError");
    Rt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var $c;
const Nc = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!(($c = globalThis.document) != null && $c.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), ts = 3, gi = 8;
function Dv() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Qs(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Lv() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Bv() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let dt = !1;
function xa(t) {
  dt = t;
}
let Ke;
function Hr(t) {
  if (t === null)
    throw Qs(), Xa;
  return Ke = t;
}
function rs() {
  return Hr(/* @__PURE__ */ Qn(Ke));
}
function h(t) {
  if (dt) {
    if (/* @__PURE__ */ Qn(Ke) !== null)
      throw Qs(), Xa;
    Ke = t;
  }
}
function Cr(t = 1) {
  if (dt) {
    for (var r = t, n = Ke; r--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Qn(n);
    Ke = n;
  }
}
function Ds(t = !0) {
  for (var r = 0, n = Ke; ; ) {
    if (n.nodeType === gi) {
      var a = (
        /** @type {Comment} */
        n.data
      );
      if (a === bd) {
        if (r === 0) return n;
        r -= 1;
      } else (a === Rc || a === fd || // "[1", "[2", etc. for if blocks
      a[0] === "[" && !isNaN(Number(a.slice(1)))) && (r += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qn(n)
    );
    t && n.remove(), n = o;
  }
}
function xd(t) {
  if (!t || t.nodeType !== gi)
    throw Qs(), Xa;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Hc(t) {
  return t === this.v;
}
function Fv(t, r) {
  return t != t ? r == r : t !== r || t !== null && typeof t == "object" || typeof t == "function";
}
function Gc(t) {
  return !Fv(t, this.v);
}
function Vc(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Nv() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hv(t, r, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Gv(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vv() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yv(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Uv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Kv(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function eh() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let th = !1, jr = null;
function si(t) {
  jr = t;
}
function Ot(t, r = !1, n) {
  jr = {
    p: jr,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      rt
    ),
    l: null
  };
}
function It(t) {
  var r = (
    /** @type {ComponentContext} */
    jr
  ), n = r.e;
  if (n !== null) {
    r.e = null;
    for (var a of n)
      wg(a);
  }
  return t !== void 0 && (r.x = t), r.i = !0, jr = r.p, kd(t);
}
function kd(t = {}) {
  return Ni(t, Bc, { value: !0 }), t;
}
function Yc() {
  return !0;
}
let mo = [];
function Uc() {
  var t = mo;
  mo = [], Av(t);
}
function Xn(t) {
  if (mo.length === 0 && !Ri) {
    var r = mo;
    queueMicrotask(() => {
      r === mo && Uc();
    });
  }
  mo.push(t);
}
function rh() {
  for (; mo.length > 0; )
    Uc();
}
const nh = -7169;
function Jt(t, r) {
  t.f = t.f & nh | r;
}
function _d(t) {
  (t.f & Cn) !== 0 || t.deps === null ? Jt(t, vr) : Jt(t, fn);
}
function Xc(t, r, n) {
  (t.f & er) !== 0 ? r.add(t) : (t.f & fn) !== 0 && n.add(t), Jt(t, vr);
}
let hc = !1;
function Kc() {
  hc || (hc = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var r;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (r = n[Ei]) == null || r.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function vi(t) {
  var r = nt, n = rt;
  bn(null), Zn(null);
  try {
    return t();
  } finally {
    bn(r), Zn(n);
  }
}
function Jc(t, r, n, a = n) {
  t.addEventListener(r, () => vi(n));
  const o = (
    /** @type {any} */
    t[Ei]
  );
  o ? t[Ei] = () => {
    o(), a(!0);
  } : t[Ei] = () => a(!0), Kc();
}
function ah(t, r, n, a) {
  const o = Gi;
  var i = t.filter((k) => !k.settled), s = r.map(o);
  if (n.length === 0 && i.length === 0) {
    a(s);
    return;
  }
  var l = (
    /** @type {Effect} */
    rt
  ), g = oh(), w = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((k) => k.promise)) : null;
  function x(k) {
    if ((l.f & Tr) === 0) {
      g();
      try {
        a([...s, ...k]);
      } catch (M) {
        Vn(M, l);
      }
      Ls();
    }
  }
  var q = Zc();
  if (n.length === 0) {
    w.then(() => x([])).finally(q);
    return;
  }
  function p() {
    Promise.all(n.map((k) => /* @__PURE__ */ ih(k))).then(x).catch((k) => Vn(k, l)).finally(q);
  }
  w ? w.then(() => {
    if ((l.f & Tr) !== 0) {
      q();
      return;
    }
    g(), p(), Ls();
  }) : p();
}
function oh() {
  var t = (
    /** @type {Effect} */
    rt
  ), r = nt, n = jr, a = (
    /** @type {Batch} */
    De
  );
  return function(i = !0) {
    Zn(t), bn(r), si(n), i && (t.f & Tr) === 0 && (a == null || a.activate(), a == null || a.apply());
  };
}
function Ls(t = !0) {
  Zn(null), bn(null), si(null), t && (De == null || De.deactivate());
}
function Zc() {
  var t = (
    /** @type {Effect} */
    rt
  ), r = t.b, n = (
    /** @type {Batch} */
    De
  ), a = !!(r != null && r.is_rendered());
  return r == null || r.update_pending_count(1, n), n.increment(a, t), () => {
    r == null || r.update_pending_count(-1, n), n.decrement(a, t);
  };
}
// @__NO_SIDE_EFFECTS__
function Gi(t) {
  var r = Ar | er;
  return rt !== null && (rt.f |= Eo), {
    ctx: jr,
    deps: null,
    effects: null,
    equals: Hc,
    f: r,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gr
    ),
    wv: 0,
    parent: rt,
    ac: null
  };
}
const Mi = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ih(t, r, n) {
  let a = (
    /** @type {Effect | null} */
    rt
  );
  a === null && Nv();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Wo(
    /** @type {V} */
    gr
  ), s = !nt, l = /* @__PURE__ */ new Set();
  return fh(() => {
    var k, M;
    var g = (
      /** @type {Effect} */
      rt
    ), w = Dc();
    o = w.promise;
    try {
      Promise.resolve(t()).then(w.resolve, (P) => {
        P !== es && w.reject(P);
      }).finally(Ls);
    } catch (P) {
      w.reject(P), Ls();
    }
    var x = (
      /** @type {Batch} */
      De
    );
    if (s) {
      if ((g.f & Ao) !== 0)
        var q = Zc();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (k = a.b) != null && k.is_rendered()
      )
        (M = x.async_deriveds.get(g)) == null || M.reject(Mi);
      else
        for (const P of l.values())
          P.reject(Mi);
      l.add(w), x.async_deriveds.set(g, w);
    }
    const p = (P, S = void 0) => {
      q == null || q(), l.delete(w), S !== Mi && (x.activate(), S ? (i.f |= Ga, li(i, S)) : ((i.f & Ga) !== 0 && (i.f ^= Ga), li(i, P)), x.deactivate());
    };
    w.promise.then(p, (P) => p(null, P || "unknown"));
  }), zd(() => {
    for (const g of l)
      g.reject(Mi);
  }), new Promise((g) => {
    function w(x) {
      function q() {
        x === o ? g(i) : w(o);
      }
      x.then(q, q);
    }
    w(o);
  });
}
// @__NO_SIDE_EFFECTS__
function _(t) {
  const r = /* @__PURE__ */ Gi(t);
  return xg(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qc(t) {
  const r = /* @__PURE__ */ Gi(t);
  return r.equals = Gc, r;
}
function sh(t) {
  var r = t.effects;
  if (r !== null) {
    t.effects = null;
    for (var n = 0; n < r.length; n += 1)
      Gr(
        /** @type {Effect} */
        r[n]
      );
  }
}
function qd(t) {
  var r, n = rt, a = t.parent;
  if (!_a && a !== null && t.v !== gr && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (a.f & (Tr | Nr)) !== 0)
    return Dv(), t.v;
  Zn(a);
  try {
    sh(t), r = Sg(t);
  } finally {
    Zn(n);
  }
  return r;
}
function eg(t) {
  var r = qd(t);
  if (!t.equals(r) && (t.wv = _g(), (!(De != null && De.is_fork) || t.deps === null) && (De !== null ? (De.capture(t, r, !0), Va == null || Va.capture(t, r, !0)) : t.v = r, t.deps === null))) {
    Jt(t, vr);
    return;
  }
  _a || (Sr !== null ? (Pd() || De != null && De.is_fork) && Sr.set(t, r) : _d(t));
}
function lh(t) {
  var r;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((r = n.teardown) == null || r.call(n), n.ac !== null && vi(() => {
        n.ac.abort(es), n.ac = null;
      }), n.fn !== null && (n.teardown = $o), Vi(n, 0), Md(n));
}
function tg(t) {
  if (t.effects !== null)
    for (const r of t.effects)
      r.teardown && r.fn !== null && di(r);
}
let Sl = null, Uo = null, De = null, Va = null, Sr = null, Nl = null, Ri = !1, Tl = !1, Oi = null, $s = null;
var uc = 0;
let dh = 1;
var Zo, Fa, yo, Qo, ei, ti, wa, ri, tn, Yi, ma, jn, Nn, ni, xo, mt, Hl, Gl, Wi, Vl, rg, ng, Xo, ch, Ci;
const Gs = class Gs {
  constructor() {
    Ge(this, mt);
    Rt(this, "id", dh++);
    /** True as soon as `#process` was called */
    Ge(this, Zo, !1);
    Rt(this, "linked", !0);
    /** @type {Batch | null} */
    Ge(this, Fa, null);
    /** @type {Batch | null} */
    Ge(this, yo, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Rt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Rt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Rt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Ge(this, Qo, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Ge(this, ei, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ge(this, ti, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Ge(this, wa, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ge(this, ri, null);
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
    Ge(this, tn, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Ge(this, Yi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Ge(this, ma, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Ge(this, jn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Ge(this, Nn, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Ge(this, ni, /* @__PURE__ */ new Set());
    Rt(this, "is_fork", !1);
    Ge(this, xo, !1);
    Uo === null ? Sl = Uo = this : (Fe(Uo, yo, this), Fe(this, Fa, Uo)), Uo = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(r) {
    T(this, Nn).has(r) || T(this, Nn).set(r, { d: [], m: [] }), T(this, ni).delete(r);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(r, n = (a) => this.schedule(a)) {
    var a = T(this, Nn).get(r);
    if (a) {
      T(this, Nn).delete(r);
      for (var o of a.d)
        Jt(o, er), n(o);
      for (o of a.m)
        Jt(o, fn), n(o);
    }
    T(this, ni).add(r);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(r, n, a = !1) {
    r.v !== gr && !this.previous.has(r) && this.previous.set(r, r.v), (r.f & Ga) === 0 && (this.current.set(r, [n, a]), Sr == null || Sr.set(r, n)), this.is_fork || (r.v = n);
  }
  activate() {
    De = this;
  }
  deactivate() {
    De = null, Sr = null;
  }
  flush() {
    try {
      Tl = !0, De = this, Ne(this, mt, Wi).call(this);
    } finally {
      uc = 0, Nl = null, Oi = null, $s = null, Tl = !1, De = null, Sr = null, Kn.clear();
    }
  }
  discard() {
    var r;
    for (const n of T(this, ei)) n(this);
    T(this, ei).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Mi);
    Ne(this, mt, Ci).call(this), (r = T(this, ri)) == null || r.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(r) {
    T(this, Yi).push(r);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(r, n) {
    if (Fe(this, ti, T(this, ti) + 1), r) {
      let a = T(this, wa).get(n) ?? 0;
      T(this, wa).set(n, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(r, n) {
    if (Fe(this, ti, T(this, ti) - 1), r) {
      let a = T(this, wa).get(n) ?? 0;
      a === 1 ? T(this, wa).delete(n) : T(this, wa).set(n, a - 1);
    }
    T(this, xo) || (Fe(this, xo, !0), Xn(() => {
      Fe(this, xo, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(r, n) {
    for (const a of r)
      T(this, ma).add(a);
    for (const a of n)
      T(this, jn).add(a);
    r.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(r) {
    T(this, Qo).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(r) {
    T(this, ei).add(r);
  }
  settled() {
    return (T(this, ri) ?? Fe(this, ri, Dc())).promise;
  }
  static ensure() {
    if (De === null) {
      const r = De = new Gs();
      !Tl && !Ri && Xn(() => {
        T(r, Zo) || r.flush();
      });
    }
    return De;
  }
  apply() {
    {
      Sr = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(r) {
    var n;
    if (Nl = r, (n = r.b) != null && n.is_pending && (r.f & (ii | Zs | Lc)) !== 0 && (r.f & Ao) === 0) {
      r.b.defer_effect(r);
      return;
    }
    T(this, tn).push(r);
  }
};
Zo = new WeakMap(), Fa = new WeakMap(), yo = new WeakMap(), Qo = new WeakMap(), ei = new WeakMap(), ti = new WeakMap(), wa = new WeakMap(), ri = new WeakMap(), tn = new WeakMap(), Yi = new WeakMap(), ma = new WeakMap(), jn = new WeakMap(), Nn = new WeakMap(), ni = new WeakMap(), xo = new WeakMap(), mt = new WeakSet(), Hl = function() {
  if (this.is_fork) return !0;
  for (const a of T(this, wa).keys()) {
    for (var r = a, n = !1; r.parent !== null; ) {
      if (T(this, Nn).has(r)) {
        n = !0;
        break;
      }
      r = r.parent;
    }
    if (!n)
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
Gl = function() {
  var r = [];
  for (const i of T(this, tn))
    if (!((i.f & Tr) !== 0 || (i.f & (er | fn)) === 0)) {
      for (var n = i, a = !1; n.parent !== null; ) {
        n = n.parent;
        var o = n.f;
        if ((o & (ka | $n)) !== 0) {
          if ((o & vr) === 0) {
            a = !0;
            break;
          }
          n.f ^= vr;
        }
      }
      a || r.push(n);
    }
  return Fe(this, tn, []), r;
}, Wi = function() {
  var l, g, w, x;
  Fe(this, Zo, !0);
  for (const q of T(this, ma))
    T(this, jn).delete(q), Jt(q, er), this.schedule(q);
  for (const q of T(this, jn))
    Jt(q, fn), this.schedule(q);
  this.apply();
  for (var r = Oi = [], n = [], a = $s = []; T(this, tn).length > 0; ) {
    uc++ > 1e3 && (Ne(this, mt, Ci).call(this), gh());
    for (const q of Ne(this, mt, Gl).call(this))
      try {
        Ne(this, mt, Vl).call(this, q, r, n);
      } catch (p) {
        throw ig(q), Ne(this, mt, Hl).call(this) || this.discard(), p;
      }
  }
  if (De = null, a.length > 0) {
    var o = Gs.ensure();
    for (const q of a)
      o.schedule(q);
  }
  if (Oi = null, $s = null, Ne(this, mt, Hl).call(this)) {
    Ne(this, mt, Xo).call(this, n), Ne(this, mt, Xo).call(this, r);
    for (const [q, p] of T(this, Nn))
      og(q, p);
    a.length > 0 && /** @type {unknown} */
    Ne(l = De, mt, Wi).call(l);
    return;
  }
  const i = Ne(this, mt, rg).call(this);
  if (i) {
    Ne(this, mt, Xo).call(this, n), Ne(this, mt, Xo).call(this, r), Ne(g = i, mt, ng).call(g, this);
    return;
  }
  T(this, ma).clear(), T(this, jn).clear();
  for (const q of T(this, Qo)) q(this);
  T(this, Qo).clear(), Va = this, pc(n), pc(r), Va = null, (w = T(this, ri)) == null || w.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    De
  );
  if (T(this, ti) === 0 && (T(this, tn).length === 0 || s !== null) && Ne(this, mt, Ci).call(this), T(this, tn).length > 0)
    if (s !== null) {
      for (const q of T(this, tn))
        T(s, tn).push(q);
      Fe(this, tn, []);
    } else
      s = this;
  s !== null && (Kn.clear(), Ne(x = s, mt, Wi).call(x));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Vl = function(r, n, a) {
  r.f ^= vr;
  for (var o = r.first; o !== null; ) {
    var i = o.f, s = (i & ($n | ka)) !== 0, l = s && (i & vr) !== 0, g = l || (i & Nr) !== 0 || T(this, Nn).has(o);
    if (!g && o.fn !== null) {
      s ? o.f ^= vr : (i & ii) !== 0 ? n.push(o) : as(o) && ((i & zn) !== 0 && T(this, jn).add(o), di(o));
      var w = o.first;
      if (w !== null) {
        o = w;
        continue;
      }
    }
    for (; o !== null; ) {
      var x = o.next;
      if (x !== null) {
        o = x;
        break;
      }
      o = o.parent;
    }
  }
}, rg = function() {
  for (var r = T(this, Fa); r !== null; ) {
    if (!r.is_fork) {
      for (const [n, [, a]] of this.current)
        if (r.current.has(n) && !a)
          return r;
    }
    r = T(r, Fa);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ng = function(r) {
  var a;
  for (const [o, i] of r.current)
    !this.previous.has(o) && r.previous.has(o) && this.previous.set(o, r.previous.get(o)), this.current.set(o, i);
  for (const [o, i] of r.async_deriveds) {
    const s = this.async_deriveds.get(o);
    s && i.promise.then(s.resolve).catch(s.reject);
  }
  r.async_deriveds.clear(), this.transfer_effects(T(r, ma), T(r, jn));
  const n = (o) => {
    var i = o.reactions;
    if (i !== null && !((o.f & Ar) !== 0 && (o.f & (er | fn)) === 0))
      for (const g of i) {
        var s = g.f;
        if ((s & Ar) !== 0)
          n(
            /** @type {Derived} */
            g
          );
        else {
          var l = (
            /** @type {Effect} */
            g
          );
          s & (Ko | zn) && !this.async_deriveds.has(l) && (T(this, jn).delete(l), Jt(l, er), this.schedule(l));
        }
      }
  };
  for (const o of this.current.keys())
    n(o);
  this.oncommit(() => r.discard()), Ne(a = r, mt, Ci).call(a), De = this, Ne(this, mt, Wi).call(this);
}, /**
 * @param {Effect[]} effects
 */
Xo = function(r) {
  for (var n = 0; n < r.length; n += 1)
    Xc(r[n], T(this, ma), T(this, jn));
}, ch = function() {
  var q, p;
  for (let k = Sl; k !== null; k = T(k, yo)) {
    var r = k.id < this.id, n = [];
    for (const [M, [P, S]] of this.current) {
      if (k.current.has(M)) {
        var a = (
          /** @type {[any, boolean]} */
          k.current.get(M)[0]
        );
        if (r && P !== a)
          k.current.set(M, [P, S]);
        else
          continue;
      }
      n.push(M);
    }
    if (r)
      for (const [M, P] of this.async_deriveds) {
        const S = k.async_deriveds.get(M);
        S && P.promise.then(S.resolve).catch(S.reject);
      }
    var o = [...k.current.keys()].filter(
      (M) => !/** @type {[any, boolean]} */
      k.current.get(M)[1]
    );
    if (!(!T(k, Zo) || o.length === 0)) {
      var i = o.filter((M) => !this.current.has(M));
      if (i.length === 0)
        r && k.discard();
      else if (n.length > 0) {
        if (r)
          for (const M of T(this, ni))
            k.unskip_effect(M, (P) => {
              var S;
              (P.f & (zn | Ko)) !== 0 ? k.schedule(P) : Ne(S = k, mt, Xo).call(S, [P]);
            });
        k.activate();
        var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var g of n)
          ag(g, i, s, l);
        l = /* @__PURE__ */ new Map();
        var w = [...k.current].filter(([M, P]) => {
          const S = this.current.get(M);
          return S ? S[0] !== P[0] || S[1] !== P[1] : !0;
        }).map(([M]) => M);
        if (w.length > 0)
          for (const M of T(this, Yi))
            (M.f & (Tr | Nr | Os)) === 0 && Sd(M, w, l) && ((M.f & (Ko | zn)) !== 0 ? (Jt(M, er), k.schedule(M)) : T(k, ma).add(M));
        if (T(k, tn).length > 0 && !T(k, xo)) {
          k.apply();
          for (var x of Ne(q = k, mt, Gl).call(q))
            Ne(p = k, mt, Vl).call(p, x, [], []);
        }
        k.deactivate();
      }
    }
  }
}, Ci = function() {
  if (this.linked) {
    var r = T(this, Fa), n = T(this, yo);
    r === null ? Sl = n : Fe(r, yo, n), n === null ? Uo = r : Fe(n, Fa, r), this.linked = !1;
  }
};
let Ka = Gs;
function f(t) {
  var r = Ri, n = Va;
  Va = null, Ri = !0;
  try {
    for (var a; ; ) {
      if (rh(), De === null)
        return (
          /** @type {T} */
          a
        );
      De.flush();
    }
  } finally {
    Ri = r, Va = n;
  }
}
function gh() {
  try {
    Uv();
  } catch (t) {
    Vn(t, Nl);
  }
}
let Tn = null;
function pc(t) {
  var r = t.length;
  if (r !== 0) {
    for (var n = 0; n < r; ) {
      var a = t[n++];
      if ((a.f & (Tr | Nr)) === 0 && as(a) && (Tn = /* @__PURE__ */ new Set(), di(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && fg(a), (Tn == null ? void 0 : Tn.size) > 0)) {
        Kn.clear();
        for (const o of Tn) {
          if ((o.f & (Tr | Nr)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Tn.has(s) && (Tn.delete(s), i.push(s)), s = s.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const g = i[l];
            (g.f & (Tr | Nr)) === 0 && di(g);
          }
        }
        Tn.clear();
      }
    }
    Tn = null;
  }
}
function ag(t, r, n, a) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Ar) !== 0 ? ag(
        /** @type {Derived} */
        o,
        r,
        n,
        a
      ) : (i & (Ko | zn)) !== 0 && (i & er) === 0 && Sd(o, r, a) && (Jt(o, er), Td(
        /** @type {Effect} */
        o
      ));
    }
}
function Sd(t, r, n) {
  const a = n.get(t);
  if (a !== void 0) return a;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (Fi.call(r, o))
        return !0;
      if ((o.f & Ar) !== 0 && Sd(
        /** @type {Derived} */
        o,
        r,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function Td(t) {
  De.schedule(t);
}
function og(t, r) {
  if (!((t.f & $n) !== 0 && (t.f & vr) !== 0)) {
    (t.f & er) !== 0 ? r.d.push(t) : (t.f & fn) !== 0 && r.m.push(t), Jt(t, vr);
    for (var n = t.first; n !== null; )
      og(n, r), n = n.next;
  }
}
function ig(t) {
  Jt(t, vr);
  for (var r = t.first; r !== null; )
    ig(r), r = r.next;
}
let Bs = /* @__PURE__ */ new Set();
const Kn = /* @__PURE__ */ new Map();
let sg = !1;
function Wo(t, r) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Hc,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(t, r) {
  const n = Wo(t);
  return xg(n), n;
}
// @__NO_SIDE_EFFECTS__
function lg(t, r = !1, n = !0) {
  const a = Wo(t);
  return r || (a.equals = Gc), a;
}
function $(t, r, n = !1) {
  nt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || (nt.f & Os) !== 0) && Yc() && (nt.f & (Ar | zn | Ko | Os)) !== 0 && (Jn === null || !Jn.has(t)) && Qv();
  let a = n ? wt(r) : r;
  return li(t, a, $s);
}
var wo = null, Yl = 0;
function li(t, r, n = null) {
  if (!t.equals(r)) {
    _a ? Kn.set(t, r) : Kn.has(t) || Kn.set(t, t.v);
    var a = Ka.ensure();
    if (a.capture(t, r), (t.f & Ar) !== 0) {
      const o = (
        /** @type {Derived} */
        t
      );
      (t.f & er) !== 0 && qd(o), Sr === null && _d(o);
    }
    t.wv = _g(), wo = null, Yl = 0, dg(t, er, n), wo = null, rt !== null && (rt.f & vr) !== 0 && (rt.f & ($n | ka)) === 0 && (hn === null ? xh([t]) : hn.push(t)), !a.is_fork && Bs.size > 0 && !sg && vh();
  }
  return r;
}
function vh() {
  sg = !1;
  for (const t of Bs) {
    (t.f & vr) !== 0 && Jt(t, fn);
    let r;
    try {
      r = as(t);
    } catch {
      r = !0;
    }
    r && di(t);
  }
  Bs.clear();
}
function Ii(t) {
  $(t, t.v + 1);
}
function dg(t, r, n) {
  var a = t.reactions;
  if (a !== null) {
    var o = a.length;
    if (Yl += o, Yl > 1e5 && wo === null && (wo = /* @__PURE__ */ new Set()), wo !== null) {
      if (wo.has(t)) return;
      wo.add(t);
    }
    for (var i = 0; i < o; i++) {
      var s = a[i], l = s.f, g = (l & er) === 0;
      if (g && Jt(s, r), (l & Os) !== 0)
        Bs.add(
          /** @type {Effect} */
          s
        );
      else if ((l & Ar) !== 0) {
        var w = (
          /** @type {Derived} */
          s
        );
        Sr == null || Sr.delete(w), dg(w, fn, n);
      } else if (g) {
        var x = (
          /** @type {Effect} */
          s
        );
        (l & zn) !== 0 && Tn !== null && Tn.add(x), n !== null ? n.push(x) : Td(x);
      }
    }
  }
}
function wt(t) {
  if (typeof t != "object" || t === null || To in t || Bc in t)
    return t;
  const r = Ic(t);
  if (r !== Cv && r !== $v)
    return t;
  var n = /* @__PURE__ */ new Map(), a = Ks(t), o = /* @__PURE__ */ fe(0), i = Po, s = (l) => {
    if (Po === i)
      return l();
    var g = nt, w = Po;
    bn(null), fc(i);
    var x = l();
    return bn(g), fc(w), x;
  };
  return a && n.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, g, w) {
        (!("value" in w) || w.configurable === !1 || w.enumerable === !1 || w.writable === !1) && Jv();
        var x = n.get(g);
        return x === void 0 ? s(() => {
          var q = /* @__PURE__ */ fe(w.value);
          return n.set(g, q), q;
        }) : $(x, w.value, !0), !0;
      },
      deleteProperty(l, g) {
        var w = n.get(g);
        if (w === void 0) {
          if (g in l) {
            const x = s(() => /* @__PURE__ */ fe(gr));
            n.set(g, x), Ii(o);
          }
        } else
          $(w, gr), Ii(o);
        return !0;
      },
      get(l, g, w) {
        var k;
        if (g === To)
          return t;
        var x = n.get(g), q = g in l;
        if (x === void 0 && (!q || (k = So(l, g)) != null && k.writable) && (x = s(() => {
          var M = wt(q ? l[g] : gr), P = /* @__PURE__ */ fe(M);
          return P;
        }), n.set(g, x)), x !== void 0) {
          var p = e(x);
          return p === gr ? void 0 : p;
        }
        return Reflect.get(l, g, w);
      },
      getOwnPropertyDescriptor(l, g) {
        var p;
        (p = this.has) == null || p.call(this, l, g);
        var w = Reflect.getOwnPropertyDescriptor(l, g), x = n.get(g);
        if (x !== void 0) {
          var q = e(x);
          if (q === gr)
            return;
          if (w && "value" in w)
            w.value = q;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: q,
              writable: !0
            };
        }
        return w;
      },
      has(l, g) {
        var p;
        if (g === To)
          return !0;
        var w = n.get(g), x = w !== void 0 && w.v !== gr || Reflect.has(l, g);
        if (w !== void 0 || rt !== null && (!x || (p = So(l, g)) != null && p.writable)) {
          w === void 0 && (w = s(() => {
            var k = x ? wt(l[g]) : gr, M = /* @__PURE__ */ fe(k);
            return M;
          }), n.set(g, w));
          var q = e(w);
          if (q === gr)
            return !1;
        }
        return x;
      },
      set(l, g, w, x) {
        var C;
        var q = n.get(g), p = g in l;
        if (a && g === "length")
          for (var k = w; k < /** @type {Source<number>} */
          q.v; k += 1) {
            var M = n.get(k + "");
            M !== void 0 ? $(M, gr) : k in l && (M = s(() => /* @__PURE__ */ fe(gr)), n.set(k + "", M));
          }
        if (q === void 0)
          (!p || (C = So(l, g)) != null && C.writable) && (q = s(() => /* @__PURE__ */ fe(void 0)), $(q, wt(w)), n.set(g, q));
        else {
          p = q.v !== gr;
          var P = s(() => wt(w));
          $(q, P);
        }
        var S = Reflect.getOwnPropertyDescriptor(l, g);
        if (S != null && S.set && S.set.call(x, w), !p) {
          if (a && typeof g == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), W = Number(g);
            Number.isInteger(W) && W >= E.v && $(E, W + 1);
          }
          Ii(o);
        }
        return !0;
      },
      ownKeys(l) {
        e(o);
        var g = Reflect.ownKeys(l).filter((q) => {
          var p = n.get(q);
          return p === void 0 || p.v !== gr;
        });
        for (var [w, x] of n)
          x.v !== gr && !(w in l) && g.push(w);
        return g;
      },
      setPrototypeOf() {
        Zv();
      }
    }
  );
}
function wc(t) {
  try {
    if (t !== null && typeof t == "object" && To in t)
      return t[To];
  } catch {
  }
  return t;
}
function cg(t, r) {
  return Object.is(wc(t), wc(r));
}
var Di, gg, vg, hg;
function Ul() {
  if (Di === void 0) {
    Di = window, gg = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, r = Node.prototype, n = Text.prototype;
    vg = So(r, "firstChild").get, hg = So(r, "nextSibling").get, vc(t) && (t[Bl] = void 0, t[Cs] = null, t[Fl] = void 0, t.__e = void 0), vc(n) && (n[zi] = void 0);
  }
}
function Jr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ja(t) {
  return (
    /** @type {TemplateNode | null} */
    vg.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Qn(t) {
  return (
    /** @type {TemplateNode | null} */
    hg.call(t)
  );
}
function u(t, r) {
  if (!dt)
    return /* @__PURE__ */ Ja(t);
  var n = /* @__PURE__ */ Ja(Ke);
  if (n === null)
    n = Ke.appendChild(Jr());
  else if (r && n.nodeType !== ts) {
    var a = Jr();
    return n == null || n.before(a), Hr(a), a;
  }
  return r && el(
    /** @type {Text} */
    n
  ), Hr(n), n;
}
function Zt(t, r = !1) {
  if (!dt) {
    var n = /* @__PURE__ */ Ja(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qn(n) : n;
  }
  if (r) {
    if ((Ke == null ? void 0 : Ke.nodeType) !== ts) {
      var a = Jr();
      return Ke == null || Ke.before(a), Hr(a), a;
    }
    el(
      /** @type {Text} */
      Ke
    );
  }
  return Ke;
}
function ge(t, r = !1) {
  if (!dt)
    return /* @__PURE__ */ Ja(t);
  var n = u(t, r);
  return h(t), n;
}
function d(t, r = 1, n = !1) {
  let a = dt ? Ke : t;
  for (var o; r--; )
    o = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ Qn(a);
  if (!dt)
    return a;
  if (n) {
    if ((a == null ? void 0 : a.nodeType) !== ts) {
      var i = Jr();
      return a === null ? o == null || o.after(i) : a.before(i), Hr(i), i;
    }
    el(
      /** @type {Text} */
      a
    );
  }
  return Hr(a), a;
}
function ug(t) {
  t.textContent = "";
}
function pg() {
  return !1;
}
function jd(t, r, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  );
}
function el(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let r = t.nextSibling;
  for (; r !== null && r.nodeType === ts; )
    r.remove(), t.nodeValue += /** @type {string} */
    r.nodeValue, r = t.nextSibling;
}
function hh(t) {
  var r = rt;
  if (r === null)
    return nt.f |= Ga, t;
  if ((r.f & Ao) === 0 && (r.f & ii) === 0)
    throw t;
  Vn(t, r);
}
function Vn(t, r) {
  if (t === Xa)
    throw t;
  if (!(r !== null && (r.f & Tr) !== 0)) {
    for (; r !== null; ) {
      if ((r.f & Ll) !== 0 && (r.f & (Tr | Hi)) === 0) {
        if ((r.f & Ao) === 0)
          throw t;
        try {
          r.b.error(t);
          return;
        } catch (n) {
          t = n;
        }
      }
      r = r.parent;
    }
    throw t;
  }
}
function uh(t) {
  rt === null && (nt === null && Yv(), Vv()), _a && Gv();
}
function ph(t, r) {
  var n = r.last;
  n === null ? r.last = r.first = t : (n.next = t, t.prev = n, r.last = t);
}
function ea(t, r) {
  var n = rt;
  n !== null && (n.f & Nr) !== 0 && (t |= Nr);
  var a = {
    ctx: jr,
    deps: null,
    nodes: null,
    f: t | er | Cn,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  De == null || De.register_created_effect(a);
  var o = a;
  if ((t & ii) !== 0)
    Oi !== null ? Oi.push(a) : Ka.ensure().schedule(a);
  else if (r !== null) {
    try {
      di(a);
    } catch (s) {
      throw Gr(a), s;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & Eo) === 0 && (o = o.first, (t & zn) !== 0 && (t & Mo) !== 0 && o !== null && (o.f |= Mo));
  }
  if (o !== null && (o.parent = n, n !== null && ph(o, n), nt !== null && (nt.f & Ar) !== 0 && (t & ka) === 0)) {
    var i = (
      /** @type {Derived} */
      nt
    );
    (i.effects ?? (i.effects = [])).push(o);
  }
  return a;
}
function Pd() {
  return nt !== null && !Mn;
}
function zd(t) {
  const r = ea(Zs, null);
  return Jt(r, vr), r.teardown = t, r;
}
function mn(t) {
  uh();
  var r = (
    /** @type {Effect} */
    rt.f
  ), n = !nt && (r & $n) !== 0 && jr !== null && !jr.i;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      jr
    );
    (a.e ?? (a.e = [])).push(t);
  } else
    return wg(t);
}
function wg(t) {
  return ea(ii | Ov, t);
}
function wh(t) {
  Ka.ensure();
  const r = ea(ka | Eo, t);
  return () => {
    Gr(r);
  };
}
function mh(t) {
  Ka.ensure();
  const r = ea(ka | Eo, t);
  return (n = {}) => new Promise((a) => {
    n.outro ? jo(r, () => {
      Gr(r), a(void 0);
    }) : (Gr(r), a(void 0));
  });
}
function ns(t) {
  return ea(ii, t);
}
function fh(t) {
  return ea(Ko | Eo, t);
}
function tl(t, r = 0) {
  return ea(Zs | r, t);
}
function pe(t, r = [], n = [], a = []) {
  ah(a, r, n, (o) => {
    ea(Zs, () => {
      t(...o.map(e));
    });
  });
}
function rl(t, r = 0) {
  var n = ea(zn | r, t);
  return n;
}
function wn(t) {
  return ea($n | Eo, t);
}
function mg(t) {
  var r = t.teardown;
  if (r !== null) {
    const n = _a, a = nt;
    mc(!0), bn(null);
    try {
      r.call(null);
    } catch (o) {
      Vn(o, t.parent);
    } finally {
      mc(n), bn(a);
    }
  }
}
function Md(t, r = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && vi(() => {
      o.abort(es);
    });
    var a = n.next;
    (n.f & ka) !== 0 ? n.parent = null : Gr(n, r), n = a;
  }
}
function bh(t) {
  for (var r = t.first; r !== null; ) {
    var n = r.next;
    (r.f & $n) === 0 && Gr(r), r = n;
  }
}
function Gr(t, r = !0) {
  var n = !1;
  (r || (t.f & Rv) !== 0) && t.nodes !== null && t.nodes.end !== null && (yh(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= Hi, Md(t, r && !n), Vi(t, 0);
  var a = t.nodes && t.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  mg(t), t.f ^= Hi, t.f |= Tr;
  var o = t.parent;
  o !== null && o.first !== null && fg(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function yh(t, r) {
  for (; t !== null; ) {
    var n = t === r ? null : /* @__PURE__ */ Qn(t);
    t.remove(), t = n;
  }
}
function fg(t) {
  var r = t.parent, n = t.prev, a = t.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), r !== null && (r.first === t && (r.first = a), r.last === t && (r.last = n));
}
function jo(t, r, n = !0) {
  var a = [];
  t.f |= yd, bg(t, a, !0);
  var o = () => {
    n && Gr(t), r && r();
  }, i = a.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var l of a)
      l.out(s);
  } else
    o();
}
function bg(t, r, n) {
  if ((t.f & Nr) === 0) {
    t.f ^= Nr;
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || n) && r.push(l);
    for (var o = t.first; o !== null; ) {
      var i = o.next;
      if ((o.f & ka) === 0) {
        var s = (o.f & Mo) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (o.f & $n) !== 0 && (t.f & zn) !== 0;
        bg(o, r, s ? n : !1);
      }
      o = i;
    }
  }
}
function Fs(t) {
  t.f &= ~yd, yg(t, !0);
}
function yg(t, r) {
  if ((t.f & yd) === 0 && (t.f & Nr) !== 0) {
    t.f ^= Nr, (t.f & vr) === 0 && (Jt(t, er), Ka.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var a = n.next, o = (n.f & Mo) !== 0 || (n.f & $n) !== 0;
      yg(n, o ? r : !1), n = a;
    }
    var i = t.nodes && t.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || r) && s.in();
  }
}
function Wd(t, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end; n !== null; ) {
      var o = n === a ? null : /* @__PURE__ */ Qn(n);
      r.append(n), n = o;
    }
}
let _a = !1;
function mc(t) {
  _a = t;
}
let nt = null, Mn = !1;
function bn(t) {
  nt = t;
}
let rt = null;
function Zn(t) {
  rt = t;
}
let Jn = null;
function xg(t) {
  nt !== null && ((nt.f & Is) !== 0 || (nt.f & Ar) !== 0) && (Jn ?? (Jn = /* @__PURE__ */ new Set())).add(t);
}
let Kr = null, sn = 0, hn = null;
function xh(t) {
  hn = t;
}
let kg = 1, fo = 0, Po = fo;
function fc(t) {
  Po = t;
}
function _g() {
  return ++kg;
}
function as(t) {
  var r = t.f;
  if ((r & er) !== 0)
    return !0;
  if ((r & fn) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), a = n.length, o = 0; o < a; o++) {
      var i = n[o];
      if (as(
        /** @type {Derived} */
        i
      ) && eg(
        /** @type {Derived} */
        i
      ), i.wv > t.wv)
        return !0;
    }
    (r & Cn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Sr === null && Jt(t, vr);
  }
  return !1;
}
function qg(t, r, n = !0) {
  var a = t.reactions;
  if (a !== null && !(Jn !== null && Jn.has(t)))
    for (var o = 0; o < a.length; o++) {
      var i = a[o];
      (i.f & Ar) !== 0 ? qg(
        /** @type {Derived} */
        i,
        r,
        !1
      ) : r === i && (n ? Jt(i, er) : (i.f & vr) !== 0 && Jt(i, fn), Td(
        /** @type {Effect} */
        i
      ));
    }
}
function Sg(t) {
  var r = Kr, n = sn, a = hn, o = nt, i = Jn, s = jr, l = Mn, g = Po, w = t.f;
  Kr = /** @type {null | Value[]} */
  null, sn = 0, hn = null, nt = (w & ($n | ka)) === 0 ? t : null, Jn = null, si(t.ctx), Mn = !1, Po = ++fo, t.ac !== null && (vi(() => {
    t.ac.abort(es);
  }), t.ac = null);
  try {
    t.f |= Is;
    var x = (
      /** @type {Function} */
      t.fn
    ), q = x();
    t.f |= Ao;
    var p = bc(t);
    if (Yc() && hn !== null && !Mn && p !== null && (t.f & (Ar | fn | er)) === 0)
      for (var k = 0; k < /** @type {Source[]} */
      hn.length; k++)
        qg(
          hn[k],
          /** @type {Effect} */
          t
        );
    if (o !== null && o !== t) {
      if (fo++, o.deps !== null)
        for (let M = 0; M < n; M += 1)
          o.deps[M].rv = fo;
      if (r !== null)
        for (const M of r)
          M.rv = fo;
      hn !== null && (a === null ? a = hn : a.push(.../** @type {Source[]} */
      hn));
    }
    return (t.f & Ga) !== 0 && (t.f ^= Ga), q;
  } catch (M) {
    return bc(t), hh(M);
  } finally {
    t.f ^= Is, Kr = r, sn = n, hn = a, nt = o, Jn = i, si(s), Mn = l, Po = g;
  }
}
function bc(t) {
  var o;
  var r = t.deps, n = De == null ? void 0 : De.is_fork;
  if (Kr !== null) {
    var a;
    if (n || Vi(t, sn), r !== null && sn > 0)
      for (r.length = sn + Kr.length, a = 0; a < Kr.length; a++)
        r[sn + a] = Kr[a];
    else
      t.deps = r = Kr;
    if (Pd() && (t.f & Cn) !== 0)
      for (a = sn; a < r.length; a++)
        ((o = r[a]).reactions ?? (o.reactions = [])).push(t);
  } else !n && r !== null && sn < r.length && (Vi(t, sn), r.length = sn);
  return r;
}
function kh(t, r) {
  let n = r.reactions;
  if (n !== null) {
    var a = Mv.call(n, t);
    if (a !== -1) {
      var o = n.length - 1;
      o === 0 ? n = r.reactions = null : (n[a] = n[o], n.pop());
    }
  }
  if (n === null && (r.f & Ar) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kr === null || !Fi.call(Kr, r))) {
    var i = (
      /** @type {Derived} */
      r
    );
    (i.f & Cn) !== 0 && (i.f ^= Cn), i.v !== gr && _d(i), i.ac !== null && vi(() => {
      i.ac.abort(es), i.ac = null, Jt(i, er);
    }), lh(i), Vi(i, 0);
  }
}
function Vi(t, r) {
  var n = t.deps;
  if (n !== null)
    for (var a = r; a < n.length; a++)
      kh(t, n[a]);
}
function di(t) {
  var r = t.f;
  if ((r & Tr) === 0) {
    Jt(t, vr);
    var n = rt;
    rt = t;
    try {
      (r & (zn | Lc)) !== 0 ? bh(t) : Md(t), mg(t);
      var a = Sg(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = kg;
      var o;
      Oc && th && (t.f & er) !== 0 && t.deps;
    } finally {
      rt = n;
    }
  }
}
async function Tg() {
  await Promise.resolve(), f();
}
function e(t) {
  var r = t.f, n = (r & Ar) !== 0;
  if (nt !== null && !Mn) {
    var a = rt !== null && (rt.f & Tr) !== 0;
    if (!a && (Jn === null || !Jn.has(t))) {
      var o = nt.deps;
      if ((nt.f & Is) !== 0)
        t.rv < fo && (t.rv = fo, Kr === null && o !== null && o[sn] === t ? sn++ : Kr === null ? Kr = [t] : Kr.push(t));
      else {
        nt.deps ?? (nt.deps = []), Fi.call(nt.deps, t) || nt.deps.push(t);
        var i = t.reactions;
        i === null ? t.reactions = [nt] : Fi.call(i, nt) || i.push(nt);
      }
    }
  }
  if (_a && Kn.has(t))
    return Kn.get(t);
  if (n) {
    var s = (
      /** @type {Derived} */
      t
    );
    if (_a) {
      var l = s.v;
      return ((s.f & vr) === 0 && s.reactions !== null || Pg(s)) && (l = qd(s)), Kn.set(s, l), l;
    }
    var g = (s.f & Cn) === 0 && !Mn && nt !== null && (nt.f & Cn) !== 0, w = (s.f & Ao) === 0;
    as(s) && (g && (s.f |= Cn), eg(s)), g && !w && (tg(s), jg(s));
  }
  if (Sr != null && Sr.has(t))
    return Sr.get(t);
  if ((t.f & Ga) !== 0)
    throw t.v;
  return t.v;
}
function jg(t) {
  if (t.f |= Cn, t.deps !== null)
    for (const n of t.deps) {
      var r = n.reactions;
      r === null ? n.reactions = [t] : Fi.call(r, t) || r.push(t), (n.f & Ar) !== 0 && (n.f & Cn) === 0 && (tg(
        /** @type {Derived} */
        n
      ), jg(
        /** @type {Derived} */
        n
      ));
    }
}
function Pg(t) {
  if (t.v === gr) return !0;
  if (t.deps === null) return !1;
  for (const r of t.deps)
    if (Kn.has(r) || (r.f & Ar) !== 0 && Pg(
      /** @type {Derived} */
      r
    ))
      return !0;
  return !1;
}
function Za(t) {
  var r = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = r;
  }
}
const bo = Symbol("events"), zg = /* @__PURE__ */ new Set(), Xl = /* @__PURE__ */ new Set();
function _h(t, r, n, a = {}) {
  function o(i) {
    if (a.capture || Kl.call(r, i), !i.cancelBubble)
      return vi(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (o.__removed = !1, Xn(() => {
    o.__removed || r.addEventListener(t, o, a);
  })) : r.addEventListener(t, o, a), o;
}
function zo(t, r, n, a, o) {
  var i = { capture: a, passive: o }, s = _h(t, r, n, i);
  (r === document.body || // @ts-ignore
  r === window || // @ts-ignore
  r === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  r instanceof HTMLMediaElement) && zd(() => {
    s.__removed = !0, r.removeEventListener(t, s, i);
  });
}
function ae(t, r, n) {
  (r[bo] ?? (r[bo] = {}))[t] = n;
}
function ln(t) {
  for (var r = 0; r < t.length; r++)
    zg.add(t[r]);
  for (var n of Xl)
    n(t);
}
let jl = null, Pl = !1;
function Kl(t) {
  var P, S;
  var r = this, n = (
    /** @type {Node} */
    r.ownerDocument
  ), a = t.type, o = ((P = t.composedPath) == null ? void 0 : P.call(t)) || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  jl = t, Pl || (Pl = !0, setTimeout(() => {
    Pl = !1, jl = null;
  }));
  var s = 0, l = jl === t && t[bo];
  if (l) {
    var g = o.indexOf(l);
    if (g !== -1 && (r === document || r === /** @type {any} */
    window)) {
      t[bo] = r;
      return;
    }
    var w = o.indexOf(r);
    if (w === -1)
      return;
    g <= w && (s = g);
  }
  if (i = /** @type {Element} */
  o[s] || t.target, i !== r) {
    Ni(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var x = nt, q = rt;
    bn(null), Zn(null);
    try {
      for (var p, k = []; i !== null && i !== r; ) {
        try {
          var M = (S = i[bo]) == null ? void 0 : S[a];
          M != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && M.call(i, t);
        } catch (E) {
          p ? k.push(E) : p = E;
        }
        if (t.cancelBubble) break;
        s++, i = s < o.length ? (
          /** @type {Element} */
          o[s]
        ) : null;
      }
      if (p) {
        for (let E of k)
          queueMicrotask(() => {
            throw E;
          });
        throw p;
      }
    } finally {
      t[bo] = r, delete t.currentTarget, bn(x), Zn(q);
    }
  }
}
var Ac;
const zl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ac = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ac.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function qh(t) {
  return (
    /** @type {string} */
    (zl == null ? void 0 : zl.createHTML(t)) ?? t
  );
}
function Sh(t) {
  var r = jd("template");
  return r.innerHTML = qh(t.replaceAll("<!>", "<!---->")), r.content;
}
function Ya(t, r) {
  var n = (
    /** @type {Effect} */
    rt
  );
  n.nodes === null && (n.nodes = { start: t, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(t, r) {
  var n = (r & jv) !== 0, a = (r & Pv) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (dt)
      return Ya(Ke, null), Ke;
    o === void 0 && (o = Sh(i ? t : "<!>" + t), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Ja(o)));
    var s = (
      /** @type {TemplateNode} */
      a || gg ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ja(s)
      ), g = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ya(l, g);
    } else
      Ya(s, s);
    return s;
  };
}
function Xr(t = "") {
  if (!dt) {
    var r = Jr(t + "");
    return Ya(r, r), r;
  }
  var n = Ke;
  return n.nodeType !== ts ? (n.before(n = Jr()), Hr(n)) : el(
    /** @type {Text} */
    n
  ), Ya(n, n), n;
}
function qa() {
  if (dt)
    return Ya(Ke, null), Ke;
  var t = document.createDocumentFragment(), r = document.createComment(""), n = Jr();
  return t.append(r, n), Ya(r, n), t;
}
function V(t, r) {
  if (dt) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      rt
    );
    ((n.f & Ao) === 0 || n.nodes.end === null) && (n.nodes.end = Ke), rs();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    r
  );
}
function os() {
  var t, r;
  if (dt && Ke && Ke.nodeType === gi && ((t = Ke.textContent) != null && t.startsWith("$"))) {
    const n = Ke.textContent.substring(1);
    return rs(), n;
  }
  return (r = window.__svelte ?? (window.__svelte = {})).uid ?? (r.uid = 1), `c${window.__svelte.uid++}`;
}
const Th = ["touchstart", "touchmove"];
function jh(t) {
  return Th.includes(t);
}
function Ph(t) {
  let r = 0, n = Wo(0), a;
  return () => {
    Pd() && (e(n), tl(() => (r === 0 && (a = Za(() => t(() => Ii(n)))), r += 1, () => {
      Xn(() => {
        r -= 1, r === 0 && (a == null || a(), a = void 0, Ii(n));
      });
    })));
  };
}
var zh = Mo | Eo;
function Mh(t, r, n, a) {
  new Wh(t, r, n, a);
}
var rn, Ui, un, ko, Wr, nn, Br, an, Hn, _o, Na, ai, Xi, Ki, fa, Vs, at, Mg, Wg, Jl, La, Cg, Zl, $i, As, Ql, ed;
class Wh {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(r, n, a, o) {
    Ge(this, at);
    /** @type {Boundary | null} */
    Rt(this, "parent");
    Rt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Rt(this, "transform_error");
    /** @type {TemplateNode} */
    Ge(this, rn);
    /** @type {TemplateNode | null} */
    Ge(this, Ui, dt ? Ke : null);
    /** @type {BoundaryProps} */
    Ge(this, un);
    /** @type {((anchor: Node) => void)} */
    Ge(this, ko);
    /** @type {Effect} */
    Ge(this, Wr);
    /** @type {Effect | null} */
    Ge(this, nn, null);
    /** @type {Effect | null} */
    Ge(this, Br, null);
    /** @type {Effect | null} */
    Ge(this, an, null);
    /** @type {DocumentFragment | null} */
    Ge(this, Hn, null);
    Ge(this, _o, 0);
    Ge(this, Na, 0);
    Ge(this, ai, !1);
    /** @type {Set<Effect>} */
    Ge(this, Xi, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Ge(this, Ki, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ge(this, fa, null);
    Ge(this, Vs, Ph(() => (Fe(this, fa, Wo(T(this, _o))), () => {
      Fe(this, fa, null);
    })));
    var i;
    Fe(this, rn, r), Fe(this, un, n), Fe(this, ko, (s) => {
      var l = (
        /** @type {Effect} */
        rt
      );
      l.b = this, l.f |= Ll, a(s);
    }), this.parent = /** @type {Effect} */
    rt.b, this.transform_error = o ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((s) => s), Fe(this, Wr, rl(() => {
      if (dt) {
        const s = xd(
          /** @type {TemplateNode} */
          T(this, Ui)
        );
        rs();
        const l = s === fd;
        if (s.startsWith(gc)) {
          const w = JSON.parse(s.slice(gc.length));
          Ne(this, at, Wg).call(this, w);
        } else l ? Ne(this, at, Cg).call(this) : Ne(this, at, Mg).call(this);
      } else
        Ne(this, at, Zl).call(this);
    }, zh)), dt && Fe(this, rn, Ke);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(r) {
    Xc(r, T(this, Xi), T(this, Ki));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!T(this, un).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(r, n) {
    Ne(this, at, Ql).call(this, r, n), Fe(this, _o, T(this, _o) + r), !(!T(this, fa) || T(this, ai)) && (Fe(this, ai, !0), Xn(() => {
      Fe(this, ai, !1), T(this, fa) && li(T(this, fa), T(this, _o));
    }));
  }
  get_effect_pending() {
    return T(this, Vs).call(this), e(
      /** @type {Source<number>} */
      T(this, fa)
    );
  }
  /** @param {unknown} error */
  error(r) {
    if (r === Xa || !T(this, un).onerror && !T(this, un).failed)
      throw r;
    De != null && De.is_fork ? (T(this, nn) && De.skip_effect(T(this, nn)), T(this, Br) && De.skip_effect(T(this, Br)), T(this, an) && De.skip_effect(T(this, an)), De.oncommit(() => {
      Ne(this, at, La).call(this) || Ne(this, at, ed).call(this, r);
    })) : Ne(this, at, ed).call(this, r);
  }
}
rn = new WeakMap(), Ui = new WeakMap(), un = new WeakMap(), ko = new WeakMap(), Wr = new WeakMap(), nn = new WeakMap(), Br = new WeakMap(), an = new WeakMap(), Hn = new WeakMap(), _o = new WeakMap(), Na = new WeakMap(), ai = new WeakMap(), Xi = new WeakMap(), Ki = new WeakMap(), fa = new WeakMap(), Vs = new WeakMap(), at = new WeakSet(), Mg = function() {
  try {
    Fe(this, nn, wn(() => T(this, ko).call(this, T(this, rn))));
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Wg = function(r) {
  const n = T(this, un).failed, { reset: a, invoke_onerror: o } = Ne(this, at, Jl).call(this, r);
  Xn(o), n && Fe(this, an, wn(() => {
    n(
      T(this, rn),
      () => r,
      () => a
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
Jl = function(r) {
  var n = !1, a = !1;
  const o = () => {
    if (!Ne(this, at, La).call(this)) {
      if (n) {
        Bv();
        return;
      }
      n = !0, a && eh(), T(this, an) !== null && jo(T(this, an), () => {
        Fe(this, an, null);
      }), Ne(this, at, As).call(this, () => {
        Ne(this, at, Zl).call(this);
      });
    }
  };
  return { reset: o, invoke_onerror: () => {
    var s, l;
    if (!Ne(this, at, La).call(this))
      try {
        a = !0, (l = (s = T(this, un)).onerror) == null || l.call(s, r, o), a = !1;
      } catch (g) {
        Vn(g, T(this, Wr) && T(this, Wr).parent);
      }
  } };
}, La = function() {
  return (T(this, Wr).f & (Tr | Hi)) !== 0;
}, Cg = function() {
  const r = T(this, un).pending;
  r && (this.is_pending = !0, Fe(this, Br, wn(() => r(T(this, rn)))), Xn(() => {
    if (!Ne(this, at, La).call(this)) {
      var n = Fe(this, Hn, document.createDocumentFragment()), a = Jr(), o = !1;
      if (n.append(a), Fe(this, nn, Ne(this, at, As).call(this, () => {
        try {
          return wn(() => T(this, ko).call(this, a));
        } catch (i) {
          try {
            this.error(i), o = !0;
          } catch (s) {
            Vn(s, T(this, Wr).parent);
          }
          return null;
        }
      })), T(this, nn) === null) {
        Fe(this, Hn, null), o && Ne(this, at, $i).call(
          this,
          /** @type {Batch} */
          De
        );
        return;
      }
      T(this, Na) === 0 && (T(this, rn).before(n), Fe(this, Hn, null), jo(
        /** @type {Effect} */
        T(this, Br),
        () => {
          Fe(this, Br, null);
        }
      ), Ne(this, at, $i).call(
        this,
        /** @type {Batch} */
        De
      ));
    }
  }));
}, Zl = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Fe(this, Na, 0), Fe(this, _o, 0), Fe(this, nn, wn(() => {
      T(this, ko).call(this, T(this, rn));
    })), T(this, Na) > 0) {
      var r = Fe(this, Hn, document.createDocumentFragment());
      Wd(T(this, nn), r);
      const n = (
        /** @type {(anchor: Node) => void} */
        T(this, un).pending
      );
      Fe(this, Br, wn(() => n(T(this, rn))));
    } else
      Ne(this, at, $i).call(
        this,
        /** @type {Batch} */
        De
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
$i = function(r) {
  this.is_pending = !1, r.transfer_effects(T(this, Xi), T(this, Ki));
}, /**
 * @template T
 * @param {() => T} fn
 */
As = function(r) {
  var n = rt, a = nt, o = jr;
  Zn(T(this, Wr)), bn(T(this, Wr)), si(T(this, Wr).ctx);
  try {
    return Ka.ensure(), r();
  } finally {
    Zn(n), bn(a), si(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ql = function(r, n) {
  var a;
  if (!this.has_pending_snippet()) {
    this.parent && Ne(a = this.parent, at, Ql).call(a, r, n);
    return;
  }
  Fe(this, Na, T(this, Na) + r), T(this, Na) === 0 && (Ne(this, at, $i).call(this, n), T(this, Br) && jo(T(this, Br), () => {
    Fe(this, Br, null);
  }), T(this, Hn) && (T(this, rn).before(T(this, Hn)), Fe(this, Hn, null)));
}, /**
 * @param {unknown} error
 */
ed = function(r) {
  T(this, nn) && (Gr(T(this, nn)), Fe(this, nn, null)), T(this, Br) && (Gr(T(this, Br)), Fe(this, Br, null)), T(this, an) && (Gr(T(this, an)), Fe(this, an, null)), dt && (Hr(
    /** @type {TemplateNode} */
    T(this, Ui)
  ), Cr(), Hr(Ds()));
  let n = T(this, un).failed;
  const a = (o) => {
    if (Ne(this, at, La).call(this)) return;
    const { reset: i, invoke_onerror: s } = Ne(this, at, Jl).call(this, o);
    s(), n && !Ne(this, at, La).call(this) && Fe(this, an, Ne(this, at, As).call(this, () => {
      try {
        return wn(() => {
          var l = (
            /** @type {Effect} */
            rt
          );
          l.b = this, l.f |= Ll, n(
            T(this, rn),
            () => o,
            () => i
          );
        });
      } catch (l) {
        return Vn(
          l,
          /** @type {Effect} */
          T(this, Wr).parent
        ), null;
      }
    }));
  };
  Xn(() => {
    if (!Ne(this, at, La).call(this)) {
      var o;
      try {
        o = this.transform_error(r);
      } catch (i) {
        Vn(i, T(this, Wr) && T(this, Wr).parent);
        return;
      }
      o !== null && typeof o == "object" && typeof /** @type {any} */
      o.then == "function" ? o.then(
        a,
        /** @param {unknown} e */
        (i) => Vn(i, T(this, Wr) && T(this, Wr).parent)
      ) : a(o);
    }
  });
};
function oe(t, r) {
  var n = r == null ? "" : typeof r == "object" ? `${r}` : r;
  n !== /** @type {any} */
  (t[zi] ?? (t[zi] = t.nodeValue)) && (t[zi] = n, t.nodeValue = `${n}`);
}
function $g(t, r) {
  return Ag(t, r);
}
function Ch(t, r) {
  Ul(), r.intro = r.intro ?? !1;
  const n = r.target, a = dt, o = Ke;
  try {
    for (var i = /* @__PURE__ */ Ja(n); i && (i.nodeType !== gi || /** @type {Comment} */
    i.data !== Rc); )
      i = /* @__PURE__ */ Qn(i);
    if (!i)
      throw Xa;
    xa(!0), Hr(
      /** @type {Comment} */
      i
    );
    const s = Ag(t, { ...r, anchor: i });
    return xa(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Xa && console.warn("Failed to hydrate: ", s), r.recover === !1 && Xv(), Ul(), ug(n), xa(!1), $g(t, r);
  } finally {
    xa(a), Hr(o);
  }
}
const Ms = /* @__PURE__ */ new Map();
function Ag(t, { target: r, anchor: n, props: a = {}, events: o, context: i, intro: s = !0, transformError: l }) {
  Ul();
  var g = void 0, w = mh(() => {
    var x = n ?? r.appendChild(Jr());
    Mh(
      /** @type {TemplateNode} */
      x,
      {
        pending: () => {
        }
      },
      (k) => {
        Ot({});
        var M = (
          /** @type {ComponentContext} */
          jr
        );
        if (i && (M.c = i), o && (a.$$events = o), dt && Ya(
          /** @type {TemplateNode} */
          k,
          null
        ), g = t(k, a) || kd(), dt && (rt.nodes.end = Ke, Ke === null || Ke.nodeType !== gi || /** @type {Comment} */
        Ke.data !== bd))
          throw Qs(), Xa;
        It();
      },
      l
    );
    var q = /* @__PURE__ */ new Set(), p = (k) => {
      for (var M = 0; M < k.length; M++) {
        var P = k[M];
        if (!q.has(P)) {
          q.add(P);
          var S = jh(P);
          for (const C of [r, document]) {
            var E = Ms.get(C);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Ms.set(C, E));
            var W = E.get(P);
            W === void 0 ? (C.addEventListener(P, Kl, { passive: S }), E.set(P, 1)) : E.set(P, W + 1);
          }
        }
      }
    };
    return p(Js(zg)), Xl.add(p), () => {
      var S;
      for (var k of q)
        for (const E of [r, document]) {
          var M = (
            /** @type {Map<string, number>} */
            Ms.get(E)
          ), P = (
            /** @type {number} */
            M.get(k)
          );
          --P == 0 ? (E.removeEventListener(k, Kl), M.delete(k), M.size === 0 && Ms.delete(E)) : M.set(k, P);
        }
      Xl.delete(p), x !== n && ((S = x.parentNode) == null || S.removeChild(x));
    };
  });
  return td.set(g, w), g;
}
let td = /* @__PURE__ */ new WeakMap();
function $h(t, r) {
  const n = td.get(t);
  return n ? (td.delete(t), n(r)) : Promise.resolve();
}
var Pn, Gn, on, qo, Ji, Zi, Ys;
class Eg {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(r, n = !0) {
    /** @type {TemplateNode} */
    Rt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Ge(this, Pn, /* @__PURE__ */ new Map());
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
    Ge(this, Gn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Ge(this, on, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Ge(this, qo, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Ge(this, Ji, !0);
    /**
     * @param {Batch} batch
     */
    Ge(this, Zi, (r) => {
      if (T(this, Pn).has(r)) {
        var n = (
          /** @type {Key} */
          T(this, Pn).get(r)
        ), a = T(this, Gn).get(n);
        if (a)
          Fs(a), T(this, qo).delete(n);
        else {
          var o = T(this, on).get(n);
          o && (Fs(o.effect), T(this, Gn).set(n, o.effect), T(this, on).delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), a = o.effect);
        }
        for (const [i, s] of T(this, Pn)) {
          if (T(this, Pn).delete(i), i === r)
            break;
          const l = T(this, on).get(s);
          l && (Gr(l.effect), T(this, on).delete(s));
        }
        for (const [i, s] of T(this, Gn)) {
          if (i === n || T(this, qo).has(i)) continue;
          const l = () => {
            if (Array.from(T(this, Pn).values()).includes(i)) {
              var w = document.createDocumentFragment();
              Wd(s, w), w.append(Jr()), T(this, on).set(i, { effect: s, fragment: w });
            } else
              Gr(s);
            T(this, qo).delete(i), T(this, Gn).delete(i);
          };
          T(this, Ji) || !a ? (T(this, qo).add(i), jo(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Ge(this, Ys, (r) => {
      T(this, Pn).delete(r);
      const n = Array.from(T(this, Pn).values());
      for (const [a, o] of T(this, on))
        n.includes(a) || (Gr(o.effect), T(this, on).delete(a));
    });
    this.anchor = r, Fe(this, Ji, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(r, n) {
    var a = (
      /** @type {Batch} */
      De
    ), o = pg();
    if (n && !T(this, Gn).has(r) && !T(this, on).has(r))
      if (o) {
        var i = document.createDocumentFragment(), s = Jr();
        i.append(s), T(this, on).set(r, {
          effect: wn(() => n(s)),
          fragment: i
        });
      } else
        T(this, Gn).set(
          r,
          wn(() => n(this.anchor))
        );
    if (T(this, Pn).set(a, r), o) {
      for (const [l, g] of T(this, Gn))
        l === r ? a.unskip_effect(g) : a.skip_effect(g);
      for (const [l, g] of T(this, on))
        l === r ? a.unskip_effect(g.effect) : a.skip_effect(g.effect);
      a.oncommit(T(this, Zi)), a.ondiscard(T(this, Ys));
    } else
      dt && (this.anchor = Ke), T(this, Zi).call(this, a);
  }
}
Pn = new WeakMap(), Gn = new WeakMap(), on = new WeakMap(), qo = new WeakMap(), Ji = new WeakMap(), Zi = new WeakMap(), Ys = new WeakMap();
function Ua(t, r, ...n) {
  var a = new Eg(t);
  rl(() => {
    const o = r() ?? null;
    a.ensure(o, o && ((i) => o(i, ...n)));
  }, Mo);
}
function Ro(t) {
  jr === null && Vc(), mn(() => {
    const r = Za(t);
    if (typeof r == "function") return (
      /** @type {() => void} */
      r
    );
  });
}
function Ah(t) {
  jr === null && Vc(), Ro(() => () => Za(t));
}
function ce(t, r, n = !1) {
  var a;
  dt && (a = Ke, rs());
  var o = new Eg(t), i = n ? Mo : 0;
  function s(l, g) {
    if (dt) {
      var w = xd(
        /** @type {TemplateNode} */
        a
      );
      if (l !== parseInt(w.substring(1))) {
        var x = Ds();
        Hr(x), o.anchor = x, xa(!1), o.ensure(l, g), xa(!0);
        return;
      }
    }
    o.ensure(l, g);
  }
  rl(() => {
    var l = !1;
    r((g, w = 0) => {
      l = !0, s(w, g);
    }), l || s(-1, null);
  }, i);
}
function Eh(t, r, n) {
  for (var a = [], o = r.length, i, s = r.length, l = 0; l < o; l++) {
    let q = r[l];
    jo(
      q,
      () => {
        if (i) {
          if (i.pending.delete(q), i.done.add(q), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            rd(t, Js(i.done)), p.delete(i), p.size === 0 && (t.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var g = a.length === 0 && n !== null && t.pending.size === 0;
    if (g) {
      var w = (
        /** @type {Element} */
        n
      ), x = (
        /** @type {Element} */
        w.parentNode
      );
      ug(x), x.append(w), t.items.clear();
    }
    rd(t, r, !g);
  } else
    i = {
      pending: new Set(r),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function rd(t, r, n = !0) {
  var a;
  if (t.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const s of t.pending.values())
      for (const l of s)
        a.add(
          /** @type {EachItem} */
          t.items.get(l).e
        );
  }
  for (var o = 0; o < r.length; o++) {
    var i = r[o];
    if (a != null && a.has(i)) {
      i.f |= Un;
      const s = document.createDocumentFragment();
      Wd(i, s);
    } else
      Gr(r[o], n);
  }
}
var yc;
function Lt(t, r, n, a, o, i = null) {
  var s = t, l = /* @__PURE__ */ new Map(), g = (r & Ec) !== 0;
  if (g) {
    var w = (
      /** @type {Element} */
      t
    );
    s = dt ? Hr(/* @__PURE__ */ Ja(w)) : w.appendChild(Jr());
  }
  dt && rs();
  var x = null, q = /* @__PURE__ */ Qc(() => {
    var W = n();
    return (
      /** @type {V[]} */
      Ks(W) ? W : W == null ? [] : Js(W)
    );
  }), p = /* @__PURE__ */ new Map(), k = !0;
  function M(W) {
    if ((E.effect.f & Tr) === 0) {
      E.pending.delete(W);
      var C = e(q);
      E.fallback = x, Rh(E, C, s, r, a), x !== null && (C.length === 0 ? (x.f & Un) === 0 ? Fs(x) : (x.f ^= Un, Ai(x, null, s)) : jo(x, () => {
        x = null;
      }));
    }
  }
  function P(W) {
    E.pending.delete(W);
  }
  var S = rl(() => {
    var W = (
      /** @type {V[]} */
      e(q)
    ), C = W.length;
    let I = !1;
    if (dt) {
      var R = xd(s) === fd;
      R !== (C === 0) && (s = Ds(), Hr(s), xa(!1), I = !0);
    }
    for (var H = /* @__PURE__ */ new Set(), Y = (
      /** @type {Batch} */
      De
    ), O = pg(), b = 0; b < C; b += 1) {
      dt && Ke.nodeType === gi && /** @type {Comment} */
      Ke.data === bd && (s = /** @type {Comment} */
      Ke, I = !0, xa(!1));
      var he = W[b], J = a(he, b), re = k ? null : l.get(J);
      re ? (re.v && li(re.v, he), re.i && li(re.i, b), O && Y.unskip_effect(re.e)) : (re = Oh(
        l,
        k ? s : yc ?? (yc = Jr()),
        he,
        J,
        b,
        o,
        r,
        n
      ), k || (re.e.f |= Un), l.set(J, re)), H.add(J);
    }
    if (C === 0 && i && !x && (k ? x = wn(() => i(s)) : (x = wn(() => i(yc ?? (yc = Jr()))), x.f |= Un)), C > H.size && Hv(), dt && C > 0 && Hr(Ds()), !k)
      if (p.set(Y, H), O) {
        for (const [le, ve] of l)
          H.has(le) || Y.skip_effect(ve.e);
        Y.oncommit(M), Y.ondiscard(P);
      } else
        M(Y);
    I && xa(!0), e(q);
  }), E = { effect: S, items: l, pending: p, outrogroups: null, fallback: x };
  k = !1, dt && (s = Ke);
}
function Pi(t) {
  for (; t !== null && (t.f & $n) === 0; )
    t = t.next;
  return t;
}
function Rh(t, r, n, a, o) {
  var he, J, re, le, ve, Te, je, te, be;
  var i = (a & xv) !== 0, s = r.length, l = t.items, g = Pi(t.effect.first), w, x = null, q, p = [], k = [], M, P, S, E;
  if (i)
    for (E = 0; E < s; E += 1)
      M = r[E], P = o(M, E), S = /** @type {EachItem} */
      l.get(P).e, (S.f & Un) === 0 && ((J = (he = S.nodes) == null ? void 0 : he.a) == null || J.measure(), (q ?? (q = /* @__PURE__ */ new Set())).add(S));
  for (E = 0; E < s; E += 1) {
    if (M = r[E], P = o(M, E), S = /** @type {EachItem} */
    l.get(P).e, t.outrogroups !== null)
      for (const ke of t.outrogroups)
        ke.pending.delete(S), ke.done.delete(S);
    if ((S.f & Nr) !== 0 && (Fs(S), i && ((le = (re = S.nodes) == null ? void 0 : re.a) == null || le.unfix(), (q ?? (q = /* @__PURE__ */ new Set())).delete(S))), (S.f & Un) !== 0)
      if (S.f ^= Un, S === g)
        Ai(S, null, n);
      else {
        var W = x ? x.next : g;
        S === t.effect.last && (t.effect.last = S.prev), S.prev && (S.prev.next = S.next), S.next && (S.next.prev = S.prev), Da(t, x, S), Da(t, S, W), Ai(S, W, n), x = S, p = [], k = [], g = Pi(x.next);
        continue;
      }
    if (S !== g) {
      if (w !== void 0 && w.has(S)) {
        if (p.length < k.length) {
          var C = k[0], I;
          x = C.prev;
          var R = p[0], H = p[p.length - 1];
          for (I = 0; I < p.length; I += 1)
            Ai(p[I], C, n);
          for (I = 0; I < k.length; I += 1)
            w.delete(k[I]);
          Da(t, R.prev, H.next), Da(t, x, R), Da(t, H, C), g = C, x = H, E -= 1, p = [], k = [];
        } else
          w.delete(S), Ai(S, g, n), Da(t, S.prev, S.next), Da(t, S, x === null ? t.effect.first : x.next), Da(t, x, S), x = S;
        continue;
      }
      for (p = [], k = []; g !== null && g !== S; )
        (w ?? (w = /* @__PURE__ */ new Set())).add(g), k.push(g), g = Pi(g.next);
      if (g === null)
        continue;
    }
    (S.f & Un) === 0 && p.push(S), x = S, g = Pi(S.next);
  }
  if (t.outrogroups !== null) {
    for (const ke of t.outrogroups)
      ke.pending.size === 0 && (rd(t, Js(ke.done)), (ve = t.outrogroups) == null || ve.delete(ke));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (g !== null || w !== void 0) {
    var Y = [];
    if (w !== void 0)
      for (S of w)
        (S.f & Nr) === 0 && Y.push(S);
    for (; g !== null; )
      (g.f & Nr) === 0 && g !== t.fallback && Y.push(g), g = Pi(g.next);
    var O = Y.length;
    if (O > 0) {
      var b = (a & Ec) !== 0 && s === 0 ? n : null;
      if (i) {
        for (E = 0; E < O; E += 1)
          (je = (Te = Y[E].nodes) == null ? void 0 : Te.a) == null || je.measure();
        for (E = 0; E < O; E += 1)
          (be = (te = Y[E].nodes) == null ? void 0 : te.a) == null || be.fix();
      }
      Eh(t, Y, b);
    }
  }
  i && Xn(() => {
    var ke, B;
    if (q !== void 0)
      for (S of q)
        (B = (ke = S.nodes) == null ? void 0 : ke.a) == null || B.apply();
  });
}
function Oh(t, r, n, a, o, i, s, l) {
  var g = (s & bv) !== 0 ? (s & kv) === 0 ? /* @__PURE__ */ lg(n, !1, !1) : Wo(n) : null, w = (s & yv) !== 0 ? Wo(o) : null;
  return {
    v: g,
    i: w,
    e: wn(() => (i(r, g ?? n, w ?? o, l), () => {
      t.delete(a);
    }))
  };
}
function Ai(t, r, n) {
  if (t.nodes)
    for (var a = t.nodes.start, o = t.nodes.end, i = r && (r.f & Un) === 0 ? (
      /** @type {EffectNodes} */
      r.nodes.start
    ) : n; a !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qn(a)
      );
      if (i.before(a), a === o)
        return;
      a = s;
    }
}
function Da(t, r, n) {
  r === null ? t.effect.first = n : r.next = n, n === null ? t.effect.last = r : n.prev = r;
}
function Bt(t, r) {
  ns(() => {
    var o, i;
    t = ((i = (o = rt == null ? void 0 : rt.parent) == null ? void 0 : o.nodes) == null ? void 0 : i.start) ?? t;
    var n = t.getRootNode(), a = (
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
    if (!a.querySelector("#" + r.hash)) {
      const s = jd("style");
      s.id = r.hash, s.textContent = r.code, a.appendChild(s);
    }
  });
}
function Ih(t, r, n) {
  ns(() => {
    var a = Za(() => r(t, n == null ? void 0 : n()) || {});
    if (a != null && a.destroy)
      return () => (
        /** @type {Function} */
        a.destroy()
      );
  });
}
function Rg(t) {
  var r, n, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (r = 0; r < o; r++) t[r] && (n = Rg(t[r])) && (a && (a += " "), a += n);
  } else for (n in t) t[n] && (a && (a += " "), a += n);
  return a;
}
function Dh() {
  for (var t, r, n = 0, a = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (r = Rg(t)) && (a && (a += " "), a += r);
  return a;
}
function Wt(t) {
  return typeof t == "object" ? Dh(t) : t ?? "";
}
const xc = [...` 	
\r\f \v\uFEFF`];
function Lh(t, r, n) {
  var a = t == null ? "" : "" + t;
  if (r && (a = a ? a + " " + r : r), n) {
    for (var o of Object.keys(n))
      if (n[o])
        a = a ? a + " " + o : o;
      else if (a.length)
        for (var i = o.length, s = 0; (s = a.indexOf(o, s)) >= 0; ) {
          var l = s + i;
          (s === 0 || xc.includes(a[s - 1])) && (l === a.length || xc.includes(a[l])) ? a = (s === 0 ? "" : a.substring(0, s)) + a.substring(l + 1) : s = l;
        }
  }
  return a === "" ? null : a;
}
function kc(t, r = !1) {
  var n = r ? " !important;" : ";", a = "";
  for (var o of Object.keys(t)) {
    var i = t[o];
    i != null && i !== "" && (a += " " + o + ": " + i + n);
  }
  return a;
}
function Ml(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Bh(t, r) {
  if (r) {
    var n = "", a, o;
    if (Array.isArray(r) ? (a = r[0], o = r[1]) : a = r, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var i = !1, s = 0, l = !1, g = [];
      a && g.push(...Object.keys(a).map(Ml)), o && g.push(...Object.keys(o).map(Ml));
      var w = 0, x = -1;
      const P = t.length;
      for (var q = 0; q < P; q++) {
        var p = t[q];
        if (l ? p === "/" && t[q - 1] === "*" && (l = !1) : i ? i === p && (i = !1) : p === "/" && t[q + 1] === "*" ? l = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !l && i === !1 && s === 0) {
          if (p === ":" && x === -1)
            x = q;
          else if (p === ";" || q === P - 1) {
            if (x !== -1) {
              var k = Ml(t.substring(w, x).trim());
              if (!g.includes(k)) {
                p !== ";" && q++;
                var M = t.substring(w, q).trim();
                n += " " + M + ";";
              }
            }
            w = q + 1, x = -1;
          }
        }
      }
    }
    return a && (n += kc(a)), o && (n += kc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function se(t, r, n, a, o, i) {
  var s = (
    /** @type {any} */
    t[Bl]
  );
  if (dt || s !== n || s === void 0) {
    var l = Lh(n, a, i);
    (!dt || l !== t.getAttribute("class")) && (l == null ? t.removeAttribute("class") : t.className = l), t[Bl] = n;
  } else if (i && o !== i)
    for (var g in i) {
      var w = !!i[g];
      (o == null || w !== !!o[g]) && t.classList.toggle(g, w);
    }
  return i;
}
function Wl(t, r = {}, n, a) {
  for (var o in n) {
    var i = n[o];
    r[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, a));
  }
}
function $r(t, r, n, a) {
  var o = (
    /** @type {any} */
    t[Fl]
  );
  if (dt || o !== r) {
    var i = Bh(r, a);
    (!dt || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t[Fl] = r;
  } else a && (Array.isArray(a) ? (Wl(t, n == null ? void 0 : n[0], a[0]), Wl(t, n == null ? void 0 : n[1], a[1], "important")) : Wl(t, n, a));
  return a;
}
function Fh(t, r) {
  r ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Nh(t, r) {
  var n = t.__defaultValue, a = t.multiple, o = a ? n ?? [] : null;
  if (!(a && !Ks(o))) {
    t.selectedIndex;
    for (var i of t.options) {
      var s = Jo(i);
      Fh(
        i,
        a ? (
          /** @type {any[]} */
          o.includes(s)
        ) : cg(s, n)
      );
    }
  }
}
function mr(t, r, n = !1) {
  if (t.multiple) {
    if (r == null)
      return;
    if (!Ks(r))
      return Lv();
    for (var a of t.options)
      a.selected = r.includes(Jo(a));
    return;
  }
  for (a of t.options) {
    var o = Jo(a);
    if (cg(o, r)) {
      a.selected = !0;
      return;
    }
  }
  (!n || r !== void 0) && (t.selectedIndex = -1);
}
function fr(t) {
  var r = new MutationObserver((n) => {
    n.every(Hh) || ("__defaultValue" in t && Nh(t), "__value" in t && mr(t, t.__value));
  });
  r.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), zd(() => {
    r.disconnect();
  });
}
function Og(t, r, n = r) {
  var a = /* @__PURE__ */ new WeakSet(), o = !0;
  Jc(t, "change", (i) => {
    var s = i ? "[selected]" : ":checked", l;
    if (t.multiple)
      l = [].map.call(t.querySelectorAll(s), Jo);
    else {
      var g = t.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      l = g && Jo(g);
    }
    n(l), t.__value = l, De !== null && a.add(De);
  }), ns(() => {
    var i = r();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        De
      );
      if (a.has(s))
        return;
    }
    if (mr(t, i, o), o && i === void 0) {
      var l = t.querySelector(":checked");
      l !== null && (i = Jo(l), n(i));
    }
    t.__value = i, o = !1;
  });
}
function Jo(t) {
  return "__value" in t ? t.__value : t.value;
}
function Hh(t) {
  if (
    /** @type {Element} */
    t.target.closest("selectedcontent") !== null
  )
    return !0;
  if (t.type === "childList") {
    var r = [...t.addedNodes, ...t.removedNodes];
    return r.length > 0 && r.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Gh = Symbol("is custom element"), Vh = Symbol("is html"), Yh = Nc ? "link" : "LINK", Uh = Nc ? "progress" : "PROGRESS";
function Tt(t) {
  if (dt) {
    var r = !1, n = () => {
      if (!r) {
        if (r = !0, t.hasAttribute("value")) {
          var a = t.value;
          z(t, "value", null), t.value = a;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          z(t, "checked", null), t.checked = o;
        }
      }
    };
    t[Ei] = n, Xn(n), Kc();
  }
}
function Fr(t, r) {
  var n = Cd(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  r ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === r && (r !== 0 || t.nodeName !== Uh) || (t.value = r ?? "");
}
function nd(t, r) {
  var n = Cd(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  r ?? void 0) && (t.checked = r);
}
function z(t, r, n, a) {
  var o = Cd(t);
  dt && (o[r] = t.getAttribute(r), r === "src" || r === "srcset" || r === "href" && t.nodeName === Yh) || o[r] !== (o[r] = n) && (r === "loading" && (t[Iv] = n), n == null ? t.removeAttribute(r) : typeof n != "string" && Xh(t).has(r) ? t[r] = n : t.setAttribute(r, n));
}
function Cd(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Cs] ?? (t[Cs] = {
      [Gh]: t.nodeName.includes("-"),
      [Vh]: t.namespaceURI === zv
    })
  );
}
var _c = /* @__PURE__ */ new Map();
function Xh(t) {
  var r = t.getAttribute("is") || t.nodeName, n = _c.get(r);
  if (n) return n;
  _c.set(r, n = /* @__PURE__ */ new Set());
  for (var a, o = t, i = Element.prototype; i !== o; ) {
    a = Wv(o);
    for (var s in a)
      a[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    o = Ic(o);
  }
  return n;
}
function Wn(t, r, n = r) {
  var a = /* @__PURE__ */ new WeakSet();
  Jc(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Cl(t) ? $l(i) : i, n(i), De !== null && a.add(De), await Tg(), i !== (i = r())) {
      var s = t.selectionStart, l = t.selectionEnd, g = t.value.length;
      if (t.value = i ?? "", l !== null) {
        var w = t.value.length;
        s === l && l === g && w > g ? (t.selectionStart = w, t.selectionEnd = w) : (t.selectionStart = s, t.selectionEnd = Math.min(l, w));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (dt && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Za(r) == null && t.value) && (n(Cl(t) ? $l(t.value) : t.value), De !== null && a.add(De)), tl(() => {
    var o = r();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        De
      );
      if (a.has(i))
        return;
    }
    Cl(t) && o === $l(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function Cl(t) {
  var r = t.type;
  return r === "number" || r === "range";
}
function $l(t) {
  return t === "" ? null : +t;
}
var Ha, oi, Qi, Us, Ig;
const Xs = class Xs {
  /** @param {ResizeObserverOptions} options */
  constructor(r) {
    Ge(this, Us);
    /** */
    Ge(this, Ha, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Ge(this, oi);
    /** @type {ResizeObserverOptions} */
    Ge(this, Qi);
    Fe(this, Qi, r);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(r, n) {
    var a = T(this, Ha).get(r) || /* @__PURE__ */ new Set();
    return a.add(n), T(this, Ha).set(r, a), Ne(this, Us, Ig).call(this).observe(r, T(this, Qi)), () => {
      var o = T(this, Ha).get(r);
      o.delete(n), o.size === 0 && (T(this, Ha).delete(r), T(this, oi).unobserve(r));
    };
  }
};
Ha = new WeakMap(), oi = new WeakMap(), Qi = new WeakMap(), Us = new WeakSet(), Ig = function() {
  return T(this, oi) ?? Fe(this, oi, new ResizeObserver(
    /** @param {any} entries */
    (r) => {
      for (var n of r) {
        Xs.entries.set(n.target, n);
        for (var a of T(this, Ha).get(n.target) || [])
          a(n);
      }
    }
  ));
}, /** @static */
Rt(Xs, "entries", /* @__PURE__ */ new WeakMap());
let ad = Xs;
var Kh = /* @__PURE__ */ new ad({
  box: "border-box"
});
function qc(t, r, n) {
  var a = Kh.observe(t, () => n(t[r]));
  ns(() => (Za(() => n(t[r])), a));
}
function Al(t, r) {
  return t === r || (t == null ? void 0 : t[To]) === r;
}
function ci(t = kd(), r, n, a) {
  var o = (
    /** @type {ComponentContext} */
    jr.r
  ), i = (
    /** @type {Effect} */
    rt
  );
  return ns(() => {
    var s, l;
    return tl(() => {
      s = l, l = [], Za(() => {
        Al(n(...l), t) || (r(t, ...l), s && Al(n(...s), t) && r(null, ...s));
      });
    }), () => {
      let g = i;
      for (; g !== o && g.parent !== null && g.parent.f & Hi; )
        g = g.parent;
      const w = () => {
        l && Al(n(...l), t) && r(null, ...l);
      }, x = g.teardown;
      g.teardown = () => {
        w(), x == null || x();
      };
    };
  }), t;
}
let Ws = !1;
function Jh(t) {
  var r = Ws;
  try {
    return Ws = !1, [t(), Ws];
  } finally {
    Ws = r;
  }
}
function y(t, r, n, a) {
  var I;
  var o = !0, i = (n & Sv) !== 0, s = (n & Tv) !== 0, l = (
    /** @type {V} */
    a
  ), g = !0, w = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), x = () => s && o ? (w ?? (w = /* @__PURE__ */ Gi(
    /** @type {() => V} */
    a
  )), e(w)) : (g && (g = !1, l = s ? Za(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), l);
  let q;
  if (i) {
    var p = To in t || Fc in t;
    q = ((I = So(t, r)) == null ? void 0 : I.set) ?? (p && r in t ? (R) => t[r] = R : void 0);
  }
  var k, M = !1;
  i ? [k, M] = Jh(() => (
    /** @type {V} */
    t[r]
  )) : k = /** @type {V} */
  t[r], k === void 0 && a !== void 0 && (k = x(), q && (Kv(), q(k)));
  var P;
  if (P = () => {
    var R = (
      /** @type {V} */
      t[r]
    );
    return R === void 0 ? x() : (g = !0, R);
  }, (n & qv) === 0)
    return P;
  if (q) {
    var S = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(R, H) {
        return arguments.length > 0 ? ((!H || S || M) && q(H ? P() : R), R) : P();
      })
    );
  }
  var E = !1, W = ((n & _v) !== 0 ? Gi : Qc)(() => (E = !1, P()));
  i && e(W);
  var C = (
    /** @type {Effect} */
    rt
  );
  return (
    /** @type {() => V} */
    (function(R, H) {
      if (arguments.length > 0) {
        const Y = H ? e(W) : i ? wt(R) : R;
        return $(W, Y), E = !0, l !== void 0 && (l = Y), R;
      }
      return _a && E || (C.f & Tr) !== 0 ? W.v : e(W);
    })
  );
}
function Zh(t) {
  return new Qh(t);
}
var ba, pn;
class Qh {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(r) {
    /** @type {any} */
    Ge(this, ba);
    /** @type {Record<string, any>} */
    Ge(this, pn);
    var i;
    var n = /* @__PURE__ */ new Map(), a = (s, l) => {
      var g = /* @__PURE__ */ lg(l, !1, !1);
      return n.set(s, g), g;
    };
    const o = new Proxy(
      { ...r.props || {}, $$events: {} },
      {
        get(s, l) {
          return e(n.get(l) ?? a(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Fc ? !0 : (e(n.get(l) ?? a(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, g) {
          return $(n.get(l) ?? a(l, g), g), Reflect.set(s, l, g);
        }
      }
    );
    Fe(this, pn, (r.hydrate ? Ch : $g)(r.component, {
      target: r.target,
      anchor: r.anchor,
      props: o,
      context: r.context,
      intro: r.intro ?? !1,
      recover: r.recover,
      transformError: r.transformError
    })), (!((i = r == null ? void 0 : r.props) != null && i.$$host) || r.sync === !1) && f(), Fe(this, ba, o.$$events);
    for (const s of Object.keys(T(this, pn)))
      s === "$set" || s === "$destroy" || s === "$on" || Ni(this, s, {
        get() {
          return T(this, pn)[s];
        },
        /** @param {any} value */
        set(l) {
          T(this, pn)[s] = l;
        },
        enumerable: !0
      });
    T(this, pn).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, T(this, pn).$destroy = () => {
      $h(T(this, pn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(r) {
    T(this, pn).$set(r);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(r, n) {
    T(this, ba)[r] = T(this, ba)[r] || [];
    const a = (...o) => n.call(this, ...o);
    return T(this, ba)[r].push(a), () => {
      T(this, ba)[r] = T(this, ba)[r].filter(
        /** @param {any} fn */
        (o) => o !== a
      );
    };
  }
  $destroy() {
    T(this, pn).$destroy();
  }
}
ba = new WeakMap(), pn = new WeakMap();
let Dg;
typeof HTMLElement == "function" && (Dg = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(r, n, a) {
    super();
    /** The Svelte component constructor */
    Rt(this, "$$ctor");
    /** Slots */
    Rt(this, "$$s");
    /** @type {any} The Svelte component instance */
    Rt(this, "$$c");
    /** Whether or not the custom element is connected */
    Rt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Rt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Rt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Rt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Rt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Rt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Rt(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    Rt(this, "$$shadowRoot", null);
    this.$$ctor = r, this.$$s = n, a && (this.$$shadowRoot = this.attachShadow(a));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(r, n, a) {
    if (this.$$l[r] = this.$$l[r] || [], this.$$l[r].push(n), this.$$c) {
      const o = this.$$c.$on(r, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(r, n, a);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(r, n, a) {
    if (super.removeEventListener(r, n, a), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(i) {
        return (s) => {
          const l = jd("slot");
          i !== "default" && (l.name = i), V(s, l);
        };
      };
      var r = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const a = {}, o = eu(this);
      for (const i of this.$$s)
        i in o && (i === "default" && !this.$$d.children ? (this.$$d.children = n(i), a.default = !0) : a[i] = n(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Es(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Zh({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: a,
          $$host: this
        }
      }), this.$$me = wh(() => {
        tl(() => {
          var i;
          this.$$r = !0;
          for (const s of Rs(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = Es(
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
  attributeChangedCallback(r, n, a) {
    var o;
    this.$$r || (r = this.$$g_p(r), this.$$d[r] = Es(r, a, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [r]: this.$$d[r] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(r) {
    return Rs(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === r || !this.$$p_d[n].attribute && n.toLowerCase() === r
    ) || r;
  }
});
function Es(t, r, n, a) {
  var i;
  const o = (i = n[t]) == null ? void 0 : i.type;
  if (r = o === "Boolean" && typeof r != "boolean" ? r != null : r, !a || !n[t])
    return r;
  if (a === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return r == null ? null : JSON.stringify(r);
      case "Boolean":
        return r ? "" : null;
      case "Number":
        return r ?? null;
      default:
        return r;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return r && JSON.parse(r);
      case "Boolean":
        return r;
      // conversion already handled above
      case "Number":
        return r != null ? +r : r;
      default:
        return r;
    }
}
function eu(t) {
  const r = {};
  return t.childNodes.forEach((n) => {
    r[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), r;
}
function Ft(t, r, n, a, o, i) {
  let s = class extends Dg {
    constructor() {
      super(t, n, o), this.$$p_d = r;
    }
    static get observedAttributes() {
      return Rs(r).map(
        (l) => (r[l].attribute || l).toLowerCase()
      );
    }
  };
  return Rs(r).forEach((l) => {
    Ni(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(g) {
        var q;
        g = Es(l, g, r), this.$$d[l] = g;
        var w = this.$$c;
        if (w) {
          var x = (q = So(w, l)) == null ? void 0 : q.get;
          x ? w[l] = g : w.$set({ [l]: g });
        }
      }
    });
  }), a.forEach((l) => {
    Ni(s.prototype, l, {
      get() {
        var g;
        return (g = this.$$c) == null ? void 0 : g[l];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
const El = "efsdb-bootstrap";
function tu() {
  var a;
  const t = document.getElementById(El);
  if (!(t instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${El}`);
  const r = ((a = t.textContent) == null ? void 0 : a.trim()) ?? "";
  if (r === "")
    throw new Error(`Empty bootstrap script: #${El}`);
  const n = JSON.parse(r);
  if (!n || typeof n != "object")
    throw new Error("Invalid bootstrap payload");
  return n;
}
function ru(t) {
  const r = tu();
  if (r.app !== t)
    throw new Error(`Bootstrap app mismatch. Expected ${t}, received ${r.app}`);
  return r;
}
function nu() {
  return window;
}
function Rl() {
  var r, n;
  const t = (n = (r = nu()).getEfsdbTheme) == null ? void 0 : n.call(r);
  return t === "light" || t === "green" ? t : "dark";
}
function au(t) {
  const r = (n) => {
    const a = n.detail, o = a == null ? void 0 : a.theme;
    t(o === "light" || o === "green" ? o : "dark");
  };
  return window.addEventListener("efsdb-themechange", r), () => window.removeEventListener("efsdb-themechange", r);
}
function od() {
  return window;
}
function ou() {
  var t, r;
  return ((r = (t = od()).getAccessToken) == null ? void 0 : r.call(t)) ?? null;
}
async function iu() {
  return typeof od().refreshAccessToken != "function" ? null : od().refreshAccessToken();
}
async function Sa(t, r = {}) {
  const n = new Headers(r.headers ?? {}), a = ou();
  return a && n.set("Authorization", `Bearer ${a}`), fetch(t, {
    credentials: "same-origin",
    ...r,
    headers: n
  });
}
async function Ta(t) {
  const r = t.headers.get("content-type") || "";
  if (!r.includes("application/json"))
    throw new Error(`Expected JSON, got: ${r || "unknown"}`);
  return await t.json();
}
async function Qa(t) {
  var n;
  if ((t.headers.get("content-type") || "").includes("application/json")) {
    const a = await t.json().catch(() => null), o = (n = a == null ? void 0 : a.error) == null ? void 0 : n.message;
    if (typeof o == "string" && o.trim() !== "")
      return o;
  }
  return `HTTP ${t.status}`;
}
function Lg(t) {
  const r = new URLSearchParams();
  for (const [a, o] of Object.entries(t))
    if (!(o == null || o === "")) {
      if (Array.isArray(o)) {
        for (const i of o)
          i !== "" && r.append(a, i);
        continue;
      }
      r.set(a, String(o));
    }
  const n = r.toString();
  return n === "" ? "" : `?${n}`;
}
async function su(t) {
  const r = await Sa(`/_efsdb/api/facets${Lg({
    entity: t.entity,
    field: t.field,
    q: t.q
  })}`);
  if (!r.ok)
    throw new Error(await Qa(r));
  return Ta(r);
}
async function lu(t) {
  const r = await Sa(`/_efsdb/api/search${Lg({
    entity: t.entity,
    q: t.q,
    limit: t.limit,
    cursor: t.cursor,
    sort: t.sort
  })}`);
  if (!r.ok)
    throw new Error(await Qa(r));
  return Ta(r);
}
async function du(t = {}, r) {
  var w, x;
  const n = t.entity ?? "public_workspace_files", a = ((w = t.q) == null ? void 0 : w.trim()) || void 0, o = ((x = t.field) == null ? void 0 : x.filter((q) => q.trim() !== "")) ?? [], i = lu({
    entity: n,
    q: a,
    limit: t.limit ?? 10
  }), s = o.length > 0 ? su({
    entity: n,
    q: a,
    field: o
  }) : Promise.resolve({ results: {} }), [l, g] = await Promise.allSettled([i, s]);
  if (l.status === "rejected")
    throw l.reason instanceof Error ? l.reason : new Error("Unable to load workspace search results");
  return {
    results: l.value.results,
    facets: g.status === "fulfilled" ? g.value.results : {}
  };
}
async function cu(t) {
  const r = await Sa(`${t.replace(/\/$/, "")}/users`);
  if (!r.ok)
    throw new Error(await Qa(r));
  return Ta(r);
}
async function gu(t, r) {
  const n = await Sa(`${t.replace(/\/$/, "")}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!n.ok)
    throw new Error(await Qa(n));
  return Ta(n);
}
async function vu(t) {
  const r = await Sa(`${t.replace(/\/$/, "")}/roles`);
  if (!r.ok)
    throw new Error(await Qa(r));
  return Ta(r);
}
async function hu(t, r) {
  const n = await Sa(`${t.replace(/\/$/, "")}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!n.ok)
    throw new Error(await Qa(n));
  return Ta(n);
}
async function uu(t) {
  const r = await Sa(`${t.replace(/\/$/, "")}/settings`);
  if (!r.ok)
    throw new Error(await Qa(r));
  return Ta(r);
}
async function pu() {
  return iu();
}
async function wu(t) {
  const r = await Sa(`${t.replace(/\/$/, "")}/whoami`);
  return r.ok ? Ta(r) : null;
}
async function mu(t, r) {
  const n = await Sa(`${t.replace(/\/$/, "")}/display-mode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ roleId: r })
  });
  if (!n.ok)
    throw new Error(await Qa(n));
  return Ta(n);
}
const Ol = "efsdb:admin:global:edge-dock-open-request";
function fu(t) {
  if (!t)
    return null;
  try {
    const r = JSON.parse(t);
    return typeof r.widgetId != "string" ? null : {
      widgetId: r.widgetId,
      pinned: r.pinned !== !1,
      issuedAt: Number.isFinite(r.issuedAt) ? Number(r.issuedAt) : Date.now(),
      source: "global-dock"
    };
  } catch {
    return null;
  }
}
const Ee = (t, r = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r}" aria-hidden="true">${t}</svg>`, Re = (t, r = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${r}">${t}</g>`, Sc = (t) => `<g fill="#000">${t}</g>`, bu = {
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
        svg: Ee(
          Re(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: Ee(
          Re(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: Ee(
          `${Sc('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${Re(
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
        svg: Ee(
          Re(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          `${Re('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${Sc(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: Ee(
          Re('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: Ee(
          Re(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: Ee(
          Re('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: Ee(
          Re(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: Ee(Re('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: Ee(
          Re(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: Ee(
          Re('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: Ee(Re('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: Ee(
          Re(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: Ee(Re('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: Ee(
          Re(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: Ee(
          Re(
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
        svg: Ee(
          Re(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: Ee(
          Re('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: Ee(
          Re('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: Ee(
          Re('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: Ee(Re('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: Ee(Re('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: Ee(Re('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: Ee(Re('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: Ee(Re('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: Ee(Re('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: Ee(Re('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: Ee(
          Re('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: Ee(
          Re('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: Ee(
          Re('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: Ee(Re('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: Ee(Re('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function yu(t, r) {
  const n = bu[t], a = n.variants;
  return (a[r ?? n.defaultVariant] ?? a[n.defaultVariant]).svg;
}
const Tc = /* @__PURE__ */ new Map();
function $d(t, r) {
  const n = `${t}:${r ?? "default"}`, a = Tc.get(n);
  if (a)
    return a;
  const o = yu(t, r), i = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return Tc.set(n, i), i;
}
const sr = [
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
], xu = {
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
}, jc = sr.reduce(
  (t, r) => (t[r] = $d(xu[r]), t),
  {}
), Ie = {
  "create-user": { title: "Create user", width: 620, height: 540, x: 96, y: 76 },
  "user-directory": { title: "User directory", width: 660, height: 620, x: 152, y: 104 },
  "create-role": { title: "Create role", width: 640, height: 560, x: 208, y: 92 },
  "role-directory": { title: "Role catalog", width: 720, height: 620, x: 264, y: 118 },
  "display-mode": { title: "Display mode", width: 640, height: 560, x: 320, y: 86 },
  "window-preferences": { title: "Window preferences", width: 720, height: 680, x: 148, y: 188 },
  "dock-preferences": { title: "Dock preferences", width: 700, height: 620, x: 214, y: 206 },
  "settings-payload": { title: "Settings payload", width: 840, height: 640, x: 218, y: 142 },
  "catalog-search": { title: "Search control", width: 700, height: 420, x: 252, y: 72 },
  "catalog-results": { title: "Search results", width: 760, height: 620, x: 286, y: 136 },
  "catalog-facets": { title: "Facet distribution", width: 620, height: 560, x: 342, y: 174 }
}, qr = {
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
var ku = /* @__PURE__ */ ee('<span class="overview-pill svelte-171qv50"> </span>'), _u = /* @__PURE__ */ ee('<article class="overview-metric svelte-171qv50"><span class="overview-metric-label svelte-171qv50"> </span> <strong class="overview-metric-value svelte-171qv50"> </strong> <span class="overview-metric-detail svelte-171qv50"> </span></article>'), qu = /* @__PURE__ */ ee('<div class="notice svelte-171qv50">Loading admin control-plane data…</div>'), Su = /* @__PURE__ */ ee('<div data-testid="admin-notice"> </div>'), Tu = /* @__PURE__ */ ee('<section class="admin-shell svelte-171qv50"><header class="workspace-overview svelte-171qv50"><div class="overview-copy svelte-171qv50"><span class="overview-eyebrow svelte-171qv50">Admin workspace</span> <h1 class="overview-title svelte-171qv50">Users, roles, modes, and search</h1> <div class="overview-pill-row svelte-171qv50" aria-label="Workspace focus areas"></div> <p class="overview-subtitle svelte-171qv50">Compact control surface for provisioning, policy, and discovery.</p></div> <div class="overview-metrics svelte-171qv50" aria-label="Admin summary metrics"></div></header> <!> <!> <div class="shell-body svelte-171qv50"><!></div></section>');
const ju = {
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
function Bg(t, r) {
  Ot(r, !0), Bt(t, ju);
  const n = ["Users", "Roles", "Modes", "Search"];
  let a = y(r, "notice", 7), o = y(r, "loading", 7), i = y(r, "metrics", 7), s = y(r, "children", 7);
  var l = {
    get notice() {
      return a();
    },
    set notice(C) {
      a(C), f();
    },
    get loading() {
      return o();
    },
    set loading(C) {
      o(C), f();
    },
    get metrics() {
      return i();
    },
    set metrics(C) {
      i(C), f();
    },
    get children() {
      return s();
    },
    set children(C) {
      s(C), f();
    }
  }, g = Tu(), w = u(g), x = u(w), q = d(u(x), 4);
  Lt(q, 20, () => n, (C) => C, (C, I) => {
    var R = ku(), H = ge(R, !0);
    pe(() => oe(H, I)), V(C, R);
  }), h(q), Cr(2), h(x);
  var p = d(x, 2);
  Lt(p, 21, i, (C) => C.label, (C, I) => {
    var R = _u(), H = u(R), Y = ge(H, !0), O = d(H, 2), b = ge(O, !0), he = d(O, 2), J = ge(he, !0);
    h(R), pe(() => {
      oe(Y, e(I).label), oe(b, e(I).value), oe(J, e(I).detail);
    }), V(C, R);
  }), h(p), h(w);
  var k = d(w, 2);
  {
    var M = (C) => {
      var I = qu();
      V(C, I);
    };
    ce(k, (C) => {
      o() && C(M);
    });
  }
  var P = d(k, 2);
  {
    var S = (C) => {
      var I = Su(), R = ge(I, !0);
      pe(() => {
        se(I, 1, Wt(a().error ? "flash-error" : "notice"), "svelte-171qv50"), oe(R, a().message);
      }), V(C, I);
    };
    ce(P, (C) => {
      a() && C(S);
    });
  }
  var E = d(P, 2), W = u(E);
  return Ua(W, () => s() ?? $o), h(E), h(g), V(t, g), It(l);
}
Ft(Bg, { notice: {}, loading: {}, metrics: {}, children: {} }, [], [], { mode: "open" });
var Pu = /* @__PURE__ */ ee('<div class="tool-popover svelte-qjuage" role="presentation"><!></div>');
const zu = {
  hash: "svelte-qjuage",
  code: `.tool-popover.svelte-qjuage {position:fixed;max-height:min(42rem, calc(100vh - 1.5rem));overflow:visible;pointer-events:auto;}

  @media (max-width: 47.99rem) {.tool-popover.svelte-qjuage {width:min(100vw - 1rem, 28rem);}
  }`
};
function Fg(t, r) {
  Ot(r, !0), Bt(t, zu);
  let n = y(r, "open", 7, !1), a = y(r, "anchor", 7, null), o = y(r, "placement", 7, "bottom-end"), i = y(r, "offset", 7, 12), s = y(r, "width", 7, "min(28rem, calc(100vw - 1.5rem))"), l = y(r, "zIndex", 7, 460), g = y(r, "onClose", 7), w = y(r, "children", 7), x = /* @__PURE__ */ fe(null), q = /* @__PURE__ */ fe(0), p = /* @__PURE__ */ fe(0);
  function k() {
    if (!n() || !a() || !e(x) || typeof window > "u")
      return;
    const W = a().getBoundingClientRect(), C = e(x).getBoundingClientRect(), I = 12;
    let R = o().startsWith("bottom") ? W.bottom + i() : W.top - C.height - i(), H = o().endsWith("end") ? W.right - C.width : W.left;
    R = Math.min(Math.max(I, R), Math.max(I, window.innerHeight - C.height - I)), H = Math.min(Math.max(I, H), Math.max(I, window.innerWidth - C.width - I)), $(q, R, !0), $(p, H, !0);
  }
  mn(() => {
    if (!n() || !a() || typeof window > "u" || typeof document > "u")
      return;
    const W = requestAnimationFrame(() => {
      k();
    }), C = () => {
      k();
    }, I = (R) => {
      var Y;
      const H = R.composedPath();
      e(x) && H.includes(e(x)) || a() && H.includes(a()) || (Y = g()) == null || Y();
    };
    return window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), document.addEventListener("pointerdown", I, !0), () => {
      cancelAnimationFrame(W), window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0), document.removeEventListener("pointerdown", I, !0);
    };
  });
  var M = {
    get open() {
      return n();
    },
    set open(W = !1) {
      n(W), f();
    },
    get anchor() {
      return a();
    },
    set anchor(W = null) {
      a(W), f();
    },
    get placement() {
      return o();
    },
    set placement(W = "bottom-end") {
      o(W), f();
    },
    get offset() {
      return i();
    },
    set offset(W = 12) {
      i(W), f();
    },
    get width() {
      return s();
    },
    set width(W = "min(28rem, calc(100vw - 1.5rem))") {
      s(W), f();
    },
    get zIndex() {
      return l();
    },
    set zIndex(W = 460) {
      l(W), f();
    },
    get onClose() {
      return g();
    },
    set onClose(W) {
      g(W), f();
    },
    get children() {
      return w();
    },
    set children(W) {
      w(W), f();
    }
  }, P = qa(), S = Zt(P);
  {
    var E = (W) => {
      var C = Pu();
      let I;
      var R = u(C);
      Ua(R, () => w() ?? $o), h(C), ci(C, (H) => $(x, H), () => e(x)), pe(() => I = $r(C, "", I, {
        top: `${e(q)}px`,
        left: `${e(p)}px`,
        width: s(),
        "z-index": l()
      })), V(W, C);
    };
    ce(S, (W) => {
      n() && W(E);
    });
  }
  return V(t, P), It(M);
}
Ft(
  Fg,
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
var Mu = /* @__PURE__ */ ee("<span></span>");
const Wu = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function tt(t, r) {
  Ot(r, !0), Bt(t, Wu);
  let n = y(r, "name", 7), a = y(r, "variant", 7), o = y(r, "decorative", 7, !0), i = y(r, "label", 7), s = y(r, "title", 7), l = y(r, "size", 7, "1rem"), g = y(r, "className", 7, ""), w = /* @__PURE__ */ _(() => $d(n(), a())), x = /* @__PURE__ */ _(() => i() ?? s() ?? n());
  var q = {
    get name() {
      return n();
    },
    set name(M) {
      n(M), f();
    },
    get variant() {
      return a();
    },
    set variant(M) {
      a(M), f();
    },
    get decorative() {
      return o();
    },
    set decorative(M = !0) {
      o(M), f();
    },
    get label() {
      return i();
    },
    set label(M) {
      i(M), f();
    },
    get title() {
      return s();
    },
    set title(M) {
      s(M), f();
    },
    get size() {
      return l();
    },
    set size(M = "1rem") {
      l(M), f();
    },
    get className() {
      return g();
    },
    set className(M = "") {
      g(M), f();
    }
  }, p = Mu();
  let k;
  return pe(
    (M) => {
      se(p, 1, M, "svelte-1a09gvd"), z(p, "aria-hidden", o()), z(p, "aria-label", o() ? void 0 : e(x)), z(p, "role", o() ? void 0 : "img"), z(p, "title", s()), k = $r(p, "", k, { "--icon-mask": e(w), width: l(), height: l() });
    },
    [() => Wt(`app-icon ${g()}`.trim())]
  ), V(t, p), It(q);
}
Ft(
  tt,
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
const Ad = "efsdb:window-settings", Ng = "efsdb:window-settings:profiles", Co = {
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
}, Cu = /* @__PURE__ */ new Set(["aero"]);
function id(t) {
  return Cu.has(t);
}
function Oo(t) {
  if (!id(t.themePreset))
    return t;
  const r = Co[t.themePreset];
  return r ? {
    ...t,
    ...r.settings,
    themePreset: t.themePreset
  } : t;
}
const Li = {
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
}, Oe = {
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
}, Ns = /* @__PURE__ */ new Set();
let Yn = Ug();
function Hg(t) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function Gg(t, r) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(t, r);
    } catch {
    }
}
function $u(t) {
  switch (t) {
    case "mac":
    case "windows-7":
    case "windows-8":
    case "windows-10":
    case "windows-11":
    case "ubuntu":
    case "xubuntu":
    case "gnome":
      return t;
    case "windows":
    default:
      return Oe.buttonLayout;
  }
}
function Au(t) {
  return t === "left" ? "left" : Oe.systemButtonPlacement;
}
function Eu(t) {
  return t === "mirrored" ? "mirrored" : Oe.sideResizeMode;
}
function Ru(t) {
  switch (t) {
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
      return t;
    default:
      return Oe.themePreset;
  }
}
function Ou(t) {
  switch (t) {
    case "system":
    case "segoe-ui":
    case "mac-system":
    case "ios-system":
    case "android-system":
    case "linux-system":
    case "humanist":
    case "serif":
    case "mono":
      return t;
    default:
      return Oe.fontPreset;
  }
}
function Iu(t) {
  switch (t) {
    case "none":
    case "pin":
      return t;
    default:
      return Oe.shiftDragAction;
  }
}
function Du(t) {
  switch (t) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return t;
    default:
      return Oe.chromeColorSource;
  }
}
function Lu(t) {
  switch (t) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return t;
    default:
      return Oe.chromeGlossStyle;
  }
}
function Bu(t) {
  switch (t) {
    case "windows-7":
    case "vista":
    case "xp-luna":
    case "windows-9x":
    case "kde":
    case "mica":
    case "none":
      return t;
    default:
      return Oe.chromeBeamStyle;
  }
}
function Fu(t) {
  switch (t) {
    case "light":
    case "dark":
    case "auto":
      return t;
    default:
      return Oe.titleTone;
  }
}
function Nu(t) {
  switch (t) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return t;
    default:
      return Oe.titleEffect;
  }
}
function Hu(t) {
  switch (t) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return t;
    default:
      return Oe.dockLabelMode;
  }
}
function Gu(t) {
  return t === "expanded" ? "expanded" : Oe.pageThemeSpread;
}
function Lr(t, r, n, a) {
  const o = Number(t);
  return Number.isFinite(o) ? Math.max(n, Math.min(a, Math.round(o))) : r;
}
function is(t) {
  const r = (t == null ? void 0 : t.chromeBeamStyle) == null && (t != null && t.chromeTexture) ? (t == null ? void 0 : t.chromeGlossStyle) === "vista" || (t == null ? void 0 : t.chromeGlossStyle) === "windows-7" || (t == null ? void 0 : t.chromeGlossStyle) === "kde" || (t == null ? void 0 : t.chromeGlossStyle) === "mica" ? t.chromeGlossStyle : (t == null ? void 0 : t.themePreset) === "windows-vista" ? "vista" : (t == null ? void 0 : t.themePreset) === "windows-11-mica" ? "mica" : (t == null ? void 0 : t.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : Bu(t == null ? void 0 : t.chromeBeamStyle), n = (t == null ? void 0 : t.chromeGlossStyle) == null && (t != null && t.chromeTexture) ? (t == null ? void 0 : t.themePreset) === "windows-vista" ? "vista" : (t == null ? void 0 : t.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : Lu(t == null ? void 0 : t.chromeGlossStyle);
  return {
    buttonLayout: $u(t == null ? void 0 : t.buttonLayout),
    systemButtonPlacement: Au(t == null ? void 0 : t.systemButtonPlacement),
    sideResizeMode: Eu(t == null ? void 0 : t.sideResizeMode),
    borderWidth: Lr(
      t == null ? void 0 : t.borderWidth,
      Oe.borderWidth,
      0,
      12
    ),
    borderRadius: Lr(
      t == null ? void 0 : t.borderRadius,
      Oe.borderRadius,
      0,
      32
    ),
    chromePadding: Lr(
      t == null ? void 0 : t.chromePadding,
      Oe.chromePadding,
      0,
      20
    ),
    titleBarHeight: Lr(
      t == null ? void 0 : t.titleBarHeight,
      Oe.titleBarHeight,
      28,
      72
    ),
    windowScale: Lr(
      t == null ? void 0 : t.windowScale,
      Oe.windowScale,
      75,
      140
    ),
    chromeStyle: (t == null ? void 0 : t.chromeStyle) === "glass" || (t == null ? void 0 : t.chromeStyle) === "transparent" || (t == null ? void 0 : t.chromeStyle) === "mica" || (t == null ? void 0 : t.chromeStyle) === "frost" || (t == null ? void 0 : t.chromeStyle) === "pane" ? t.chromeStyle : Oe.chromeStyle,
    chromeTexture: r !== "none" || (typeof (t == null ? void 0 : t.chromeTexture) == "boolean" ? t.chromeTexture : Oe.chromeTexture),
    chromeBeamStyle: r,
    chromeBeamIntensity: Lr(
      t == null ? void 0 : t.chromeBeamIntensity,
      Oe.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: n,
    chromeGlossIntensity: Lr(
      t == null ? void 0 : t.chromeGlossIntensity,
      Oe.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Lr(
      t == null ? void 0 : t.chromeGlossSpacing,
      Oe.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (t == null ? void 0 : t.chromeColorize) == "boolean" ? t.chromeColorize : Oe.chromeColorize,
    chromeColorSource: Du(t == null ? void 0 : t.chromeColorSource),
    chromeColorIntensity: Lr(
      t == null ? void 0 : t.chromeColorIntensity,
      Oe.chromeColorIntensity,
      0,
      100
    ),
    alignment: (t == null ? void 0 : t.alignment) === "left" || (t == null ? void 0 : t.alignment) === "right" ? t.alignment : Oe.alignment,
    titleTone: Fu(t == null ? void 0 : t.titleTone),
    titleEffect: Nu(t == null ? void 0 : t.titleEffect),
    snapRestoreOnRelease: typeof (t == null ? void 0 : t.snapRestoreOnRelease) == "boolean" ? t.snapRestoreOnRelease : Oe.snapRestoreOnRelease,
    shiftDragAction: Iu(t == null ? void 0 : t.shiftDragAction),
    themePreset: Ru(t == null ? void 0 : t.themePreset),
    fontPreset: Ou(t == null ? void 0 : t.fontPreset),
    globalEdgeDock: typeof (t == null ? void 0 : t.globalEdgeDock) == "boolean" ? t.globalEdgeDock : Oe.globalEdgeDock,
    dockButtonSize: Lr(
      t == null ? void 0 : t.dockButtonSize,
      Oe.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Lr(
      t == null ? void 0 : t.dockButtonWidth,
      Oe.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Lr(
      t == null ? void 0 : t.dockIconScale,
      Oe.dockIconScale,
      70,
      160
    ),
    dockGap: Lr(t == null ? void 0 : t.dockGap, Oe.dockGap, 4, 24),
    dockOffset: Lr(t == null ? void 0 : t.dockOffset, Oe.dockOffset, 8, 36),
    dockLabelMode: Hu(t == null ? void 0 : t.dockLabelMode),
    pageThemeSpread: Gu(t == null ? void 0 : t.pageThemeSpread)
  };
}
function Hs(t, r) {
  return t.buttonLayout === r.buttonLayout && t.systemButtonPlacement === r.systemButtonPlacement && t.sideResizeMode === r.sideResizeMode && t.borderWidth === r.borderWidth && t.borderRadius === r.borderRadius && t.chromePadding === r.chromePadding && t.titleBarHeight === r.titleBarHeight && t.windowScale === r.windowScale && t.chromeStyle === r.chromeStyle && t.chromeTexture === r.chromeTexture && t.chromeBeamStyle === r.chromeBeamStyle && t.chromeBeamIntensity === r.chromeBeamIntensity && t.chromeGlossStyle === r.chromeGlossStyle && t.chromeGlossIntensity === r.chromeGlossIntensity && t.chromeGlossSpacing === r.chromeGlossSpacing && t.chromeColorize === r.chromeColorize && t.chromeColorSource === r.chromeColorSource && t.chromeColorIntensity === r.chromeColorIntensity && t.alignment === r.alignment && t.titleTone === r.titleTone && t.titleEffect === r.titleEffect && t.snapRestoreOnRelease === r.snapRestoreOnRelease && t.shiftDragAction === r.shiftDragAction && t.themePreset === r.themePreset && t.fontPreset === r.fontPreset && t.globalEdgeDock === r.globalEdgeDock && t.dockButtonSize === r.dockButtonSize && t.dockButtonWidth === r.dockButtonWidth && t.dockIconScale === r.dockIconScale && t.dockGap === r.dockGap && t.dockOffset === r.dockOffset && t.dockLabelMode === r.dockLabelMode && t.pageThemeSpread === r.pageThemeSpread;
}
function Ed(t) {
  if (t.titleTone !== "auto")
    return t.titleTone;
  switch (t.themePreset) {
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
function Rd(t) {
  if (t.titleEffect !== "auto")
    return t.titleEffect;
  switch (t.themePreset) {
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
function Ba(t) {
  const r = Co[t] ?? Co.inherit;
  return Oo(
    is({
      ...Oe,
      ...r.settings,
      themePreset: r.id
    })
  );
}
function Vg(t) {
  return (Co[t] ?? Co.inherit).shadow;
}
function Vu(t) {
  switch (t) {
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
function Yg(t) {
  const r = Oo(t), n = r.chromeTexture ? Math.max(0, Math.min(1, r.chromeBeamIntensity / 100)) : 0, a = r.chromeTexture ? r.chromeBeamStyle : "none", i = `${(a === "vista" ? 0.98 : a === "windows-7" ? 0.94 : a === "xp-luna" ? 0.82 : a === "windows-9x" ? 0.72 : a === "kde" ? 0.7 : a === "mica" ? 0.62 : 0) * n}`, s = Math.max(0, Math.min(1, r.chromeGlossIntensity / 100)), l = r.chromeColorize ? `${Math.max(0, Math.min(0.88, r.chromeColorIntensity / 100))}` : "0", g = Vu(r.chromeColorSource), w = Lr(r.chromeColorIntensity, 48, 0, 100), x = r.chromeColorize ? Math.round(34 + w / 100 * 42) : 0, q = r.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - x}%, ${g} ${x}%)` : "#4580c4", p = {
    "--efs-window-chrome-texture-opacity": i,
    "--efs-window-chrome-beam-intensity": `${n}`,
    "--efs-window-chrome-gloss-intensity": `${s}`,
    "--efs-window-chrome-gloss-spacing": `${r.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": l,
    "--efs-window-chrome-tint": g,
    "--efs-window-titlebar-height": `${r.titleBarHeight}px`,
    "--efs-window-shell-scale": `${r.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": i,
    "--efs-widget-chrome-beam-intensity": `${n}`,
    "--efs-widget-chrome-gloss-intensity": `${s}`,
    "--efs-widget-chrome-gloss-spacing": `${r.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": l,
    "--efs-widget-theme-tint": g,
    "--efs-widget-titlebar-height": `${r.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${r.windowScale / 100}`,
    "--efs-win7-window-bg": q
  };
  if (!r.chromeColorize)
    return p;
  const k = w, M = Math.round(k / 100 * 34), P = Math.round(k / 100 * 26), S = Math.round(10 + k / 100 * 46), E = Math.round(6 + k / 100 * 32), W = Math.round(k / 100 * 28), C = Math.round(k / 100 * 22), I = Math.round(12 + k / 100 * 46), R = Math.round(10 + k / 100 * 34), H = Math.round(90 - k / 100 * 16), Y = Math.round(92 - k / 100 * 18);
  return p["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - M}%, ${g} ${M}%)`, p["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - P}%, ${g} ${P}%)`, p["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - S}%, ${g} ${S}%)`, p["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - E}%, ${g} ${E}%)`, p["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${g}, transparent ${H}%), var(--efs-window-shell-shadow)`, p["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - W}%, ${g} ${W}%)`, p["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - C}%, ${g} ${C}%)`, p["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - I}%, ${g} ${I}%)`, p["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - R}%, ${g} ${R}%)`, p["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${g}, transparent ${Y}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, p;
}
function Ug() {
  const t = Hg(Ad);
  if (!t)
    return Bi(Oe), { ...Oe };
  try {
    const r = JSON.parse(t), n = Oo(is(r));
    return Bi(n), n;
  } catch {
    return Bi(Oe), { ...Oe };
  }
}
function Yu() {
  return [
    {
      id: "profile-balanced",
      label: "Balanced",
      settings: Ba("inherit")
    },
    {
      id: "profile-aero",
      label: "Windows 7",
      settings: Ba("aero")
    },
    {
      id: "profile-basic",
      label: "Windows 7 Basic",
      settings: Ba("windows-basic")
    },
    {
      id: "profile-flat",
      label: "Flat edge",
      settings: Ba("windows-10-flat")
    },
    {
      id: "profile-paper",
      label: "Paper",
      settings: Ba("paper")
    }
  ];
}
function Xg() {
  const t = Hg(Ng);
  if (!t)
    return [];
  try {
    return JSON.parse(t).filter(
      (n) => typeof (n == null ? void 0 : n.id) == "string" && typeof (n == null ? void 0 : n.label) == "string"
    ).map((n) => ({
      id: n.id,
      label: n.label,
      settings: Oo(is(n.settings)),
      custom: !0
    }));
  } catch {
    return [];
  }
}
function Uu(t) {
  Gg(Ng, JSON.stringify(t));
}
function Xu(t) {
  return t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 36);
}
function Ku(t) {
  if (!t)
    return [];
  const r = [t], n = /* @__PURE__ */ new Set();
  for (; r.length > 0; ) {
    const a = r.shift();
    if (!(!a || n.has(a))) {
      n.add(a);
      try {
        const o = a.parent;
        o && o !== a && !n.has(o) && r.push(o);
      } catch {
      }
      try {
        for (let o = 0; o < a.frames.length; o += 1) {
          const i = a.frames[o];
          i && !n.has(i) && r.push(i);
        }
      } catch {
      }
    }
  }
  return [...n];
}
function Il(t, r) {
  const n = Oo(r), a = t.documentElement.style, o = t.documentElement, i = n.chromeGlossStyle, s = n.chromeTexture ? n.chromeBeamStyle : "none", l = Math.max(n.dockButtonSize, n.dockButtonWidth), g = Li[n.fontPreset] ?? Li.system, w = Vg(n.themePreset), x = Yg(n), q = [
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
  a.setProperty("--efs-font-sans", g.stack), a.setProperty("--shell-font-sans", g.stack), a.setProperty("--efs-window-font-family", g.stack), a.setProperty("--efs-window-border-width", `${n.borderWidth}px`), a.setProperty("--efs-window-radius", `${n.borderRadius}px`), a.setProperty("--efs-window-chrome-padding", `${n.chromePadding}px`), a.setProperty("--efs-window-titlebar-height", `${n.titleBarHeight}px`), a.setProperty("--efs-window-shell-scale", `${n.windowScale / 100}`), a.setProperty("--efs-window-system-button-placement", n.systemButtonPlacement), a.setProperty("--efs-window-side-resize-mode", n.sideResizeMode), a.setProperty("--efs-window-shell-shadow", w), a.setProperty("--efs-widget-border-width", `${n.borderWidth}px`), a.setProperty("--efs-widget-radius", `${n.borderRadius}px`), a.setProperty("--efs-widget-chrome-padding", `${n.chromePadding}px`), a.setProperty("--efs-widget-titlebar-height", `${n.titleBarHeight}px`), a.setProperty("--efs-widget-shell-scale", `${n.windowScale / 100}`), a.setProperty("--efs-widget-shadow", w), a.setProperty("--efs-dock-button-size", `${n.dockButtonSize}px`), a.setProperty("--efs-dock-button-width", `${l}px`), a.setProperty("--efs-dock-gap", `${n.dockGap}px`), a.setProperty("--efs-dock-offset", `${n.dockOffset}px`), a.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(n.dockButtonSize * 0.39))}px`
  ), a.setProperty("--efs-dock-icon-scale", `${n.dockIconScale / 100}`), a.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(l + n.dockButtonSize * 1.8))}px`
  ), a.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(n.dockButtonSize * 0.31))}px`
  ), a.setProperty("--efs-dock-label-mode", n.dockLabelMode), a.setProperty("--efs-dock-global-enabled", n.globalEdgeDock ? "1" : "0"), a.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), a.setProperty("--efs-page-theme-spread", n.pageThemeSpread), o.setAttribute("data-efs-page-theme", n.pageThemeSpread), o.setAttribute("data-efs-window-gloss", i), o.setAttribute("data-efs-window-beam", s), q.forEach((p) => a.removeProperty(p)), Object.entries(x).forEach(([p, k]) => a.setProperty(p, k));
}
function Bi(t) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    Il(document, t);
    return;
  }
  let r = window;
  try {
    r = window.top ?? window;
  } catch {
    r = window;
  }
  const n = Ku(r);
  if (n.length === 0) {
    Il(document, t);
    return;
  }
  n.forEach((a) => {
    try {
      Il(a.document, t);
    } catch {
    }
  });
}
function Od() {
  return Yn;
}
function Pc() {
  return [...Yu(), ...Xg()];
}
function Ju(t, r) {
  const n = t.trim();
  if (!n)
    return Pc();
  const a = Xg(), o = Xu(n) || `profile-${Date.now()}`, s = {
    id: a.findIndex((l) => l.id === o) === -1 ? o : `${o}-${Date.now()}`,
    label: n,
    settings: Oo(is(r)),
    custom: !0
  };
  return Uu([...a, s]), Pc();
}
function Id(t) {
  Yn = Oo(
    is({
      ...Yn,
      ...t
    })
  ), Bi(Yn), Gg(Ad, JSON.stringify(Yn)), Ns.forEach((r) => r(Yn));
}
function hi(t) {
  return Ns.add(t), t(Yn), () => {
    Ns.delete(t);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  Bi(Yn);
}), window.addEventListener("efsdb-window-settings-sync", (t) => {
  const r = t.detail;
  !r || typeof r != "object" || Id(r);
}), window.addEventListener("storage", (t) => {
  t.key === Ad && (Yn = Ug(), Ns.forEach((r) => r(Yn)));
}));
var Zu = /* @__PURE__ */ ee('<span class="widget-state svelte-dsom6b"> </span>'), zc = /* @__PURE__ */ ee('<button type="button"><!></button>'), Qu = /* @__PURE__ */ ee('<div class="widget-extra-actions svelte-dsom6b"><!></div>'), ep = /* @__PURE__ */ ee('<header><div class="widget-heading svelte-dsom6b"><span class="widget-eyebrow svelte-dsom6b"> </span> <div class="widget-title-row svelte-dsom6b"><h2> </h2> <!></div></div> <div class="widget-toolbar svelte-dsom6b"><!> <!> <div class="widget-help svelte-dsom6b"><button type="button"><!></button> <div class="widget-help-tooltip svelte-dsom6b" role="tooltip"><strong class="svelte-dsom6b"> </strong> <span class="svelte-dsom6b"> </span></div></div> <!></div></header>'), tp = /* @__PURE__ */ ee("<footer><!></footer>"), rp = /* @__PURE__ */ ee("<article><!> <div><!></div> <!></article>");
const np = {
  hash: "svelte-dsom6b",
  code: `.widget-frame.svelte-dsom6b {--widget-panel: var(--efs-widget-theme-panel, var(--efs-window-theme-panel, var(--shell-panel)));--widget-surface: var(\r
      --efs-widget-theme-surface,\r
      var(--efs-window-theme-surface, var(--shell-surface, var(--shell-panel)))\r
    );--widget-border: var(--efs-widget-theme-border, var(--efs-window-theme-border, var(--shell-border)));--widget-hover: var(--efs-widget-theme-hover, var(--efs-window-theme-hover, var(--shell-row-hover)));--widget-shadow: var(--efs-widget-theme-shadow, var(--efs-widget-shadow, var(--shell-card-shadow)));--widget-tint: var(\r
      --efs-widget-theme-tint,\r
      var(--efs-window-chrome-tint, var(--shell-primary, var(--accent, #5b8cff)))\r
    );--widget-chrome-texture-opacity: var(\r
      --efs-widget-chrome-texture-opacity,\r
      var(--efs-window-chrome-texture-opacity, 0)\r
    );--widget-beam-intensity: var(\r
      --efs-widget-chrome-beam-intensity,\r
      var(--efs-window-chrome-beam-intensity, 0)\r
    );--widget-gloss-intensity: var(--efs-widget-chrome-gloss-intensity, 0.68);--widget-gloss-spacing: var(--efs-widget-chrome-gloss-spacing, 18px);--widget-titlebar-height: 44px;--widget-shell-scale: 1;--widget-control-size:\r
      min(\r
        calc(2.18rem * var(--widget-shell-scale)),\r
        max(1.9rem, calc(var(--widget-titlebar-height) - max(0.72rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.85))))\r
      );--widget-control-radius: max(10px, calc(var(--efs-widget-radius, 26px) * 0.5));--widget-title-size: clamp(0.98rem, calc(1rem * var(--widget-shell-scale)), 1.24rem);--widget-chrome-colorize-opacity: var(\r
      --efs-widget-chrome-colorize-opacity,\r
      var(--efs-window-chrome-colorize-opacity, 0)\r
    );--widget-w7-glass-stripes:\r
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
        left center / 100vw 100vh no-repeat;--widget-vista-glass-stripes:\r
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
        left center / 100vw 100vh no-repeat;position:relative;isolation:isolate;display:flex;flex-direction:column;height:100%;min-width:0;min-height:100%;border:var(--efs-widget-border-width, 1px) solid\r
      color-mix(in srgb, var(--widget-border), transparent 6%);border-radius:var(--efs-widget-radius, 26px);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 32%),\r
      linear-gradient(135deg, color-mix(in srgb, var(--widget-panel), white 6%), transparent 38%),\r
      var(--widget-panel);box-shadow:var(--widget-shadow);overflow:clip;}.widget-frame.svelte-dsom6b::before {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 88%), transparent 28%),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 94%), transparent 46%);opacity:calc(var(--widget-chrome-colorize-opacity) * 0.72);}.widget-frame.window-mode.svelte-dsom6b {min-height:auto;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible;}.widget-frame.window-mode.svelte-dsom6b::before {display:none;}.widget-header.svelte-dsom6b,\r
  .widget-body.svelte-dsom6b,\r
  .widget-footer.svelte-dsom6b {position:relative;z-index:1;padding-inline:max(0.9rem, calc(var(--efs-widget-chrome-padding, 12px) + 0.28rem));}.widget-header.svelte-dsom6b {isolation:isolate;display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;min-height:var(--widget-titlebar-height);padding-top:max(0.42rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.5));padding-bottom:max(0.28rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.44));overflow:hidden;border-bottom:1px solid color-mix(in srgb, var(--widget-border), transparent 18%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),\r
      color-mix(in srgb, var(--widget-panel), transparent 2%);}.widget-header.svelte-dsom6b::before,\r
  .widget-header.svelte-dsom6b::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.widget-header.svelte-dsom6b::before {background:linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);opacity:var(--widget-chrome-colorize-opacity);}.widget-header.svelte-dsom6b::after {background:linear-gradient(\r
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
      );mix-blend-mode:screen;opacity:calc(var(--widget-chrome-texture-opacity) * 0.78);}.widget-frame[data-gloss='none'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after,\r
  .widget-frame[data-gloss='none'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {opacity:0;}.widget-frame[data-beam='windows-7'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:var(--widget-w7-glass-stripes),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.6 + var(--widget-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.28 + var(--widget-beam-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.06 + var(--widget-beam-intensity) * 0.05)) 48%,\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        154% 128% at 52% -34%,\r
        rgba(255, 255, 255, calc(0.56 + var(--widget-beam-intensity) * 0.22)),\r
        transparent 38%\r
      ),\r
      radial-gradient(\r
        116% 116% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.18 + var(--widget-beam-intensity) * 0.1)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        104deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.26 + var(--widget-beam-intensity) * 0.16)) 22%,\r
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.08)) 40%,\r
        transparent 60%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.44 + var(--widget-beam-intensity) * 0.98),\r
      1\r
    );}.widget-frame[data-beam='vista'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:var(--widget-vista-glass-stripes),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.68 + var(--widget-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.34 + var(--widget-beam-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.05)) 52%,\r
        transparent 76%\r
      ),\r
      radial-gradient(\r
        164% 136% at 50% -42%,\r
        rgba(255, 255, 255, calc(0.62 + var(--widget-beam-intensity) * 0.24)),\r
        transparent 40%\r
      ),\r
      radial-gradient(\r
        120% 122% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.22 + var(--widget-beam-intensity) * 0.14)),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        106deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.16)) 20%,\r
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.08)) 40%,\r
        transparent 62%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 78%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 1),\r
      1\r
    );}.widget-frame[data-beam='xp-luna'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 88%, var(--widget-tint) 12%),\r
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        146% 120% at 16% -6%,\r
        color-mix(in srgb, white 84%, var(--widget-tint) 16%),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        96deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.14 + var(--widget-beam-intensity) * 0.08)) 22%,\r
        transparent 48%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 76%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.62 + var(--widget-beam-intensity) * 0.88),\r
      1\r
    );}.widget-frame[data-beam='windows-9x'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.14)) 0 2px,\r
        rgba(255, 255, 255, calc(0.12 + var(--widget-beam-intensity) * 0.06)) 2px 5px,\r
        transparent 5px\r
      ),\r
      linear-gradient(\r
        90deg,\r
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 0 1px,\r
        transparent 1px 100%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 74%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.78),\r
      1\r
    );}.widget-frame[data-beam='kde'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.24 + var(--widget-beam-intensity) * 0.1)),\r
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.05)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        142% 118% at 18% -8%,\r
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)),\r
        transparent 42%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 80%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.52 + var(--widget-beam-intensity) * 0.82),\r
      1\r
    );}.widget-frame[data-beam='mica'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:radial-gradient(\r
        144% 124% at 18% -18%,\r
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.06)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.04)),\r
        transparent 76%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 90%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.74),\r
      1\r
    );}.widget-frame[data-gloss='windows-7'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.28 + var(--widget-gloss-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.1)) 18%,\r
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 56%,\r
        transparent 86%\r
      ),\r
      radial-gradient(134% 120% at 12% -18%, rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.18)), transparent 44%),\r
      radial-gradient(112% 96% at 100% 0%, rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.1)), transparent 42%),\r
      linear-gradient(\r
        114deg,\r
        transparent 12%,\r
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.1)) calc(32% + var(--widget-gloss-spacing) * 0.18),\r
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.03)) calc(58% + var(--widget-gloss-spacing) * 0.08),\r
        transparent 82%\r
      );opacity:calc(var(--widget-chrome-texture-opacity) * 1.02);}.widget-frame[data-gloss='vista'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.34 + var(--widget-gloss-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.13 + var(--widget-gloss-intensity) * 0.12)) 18%,\r
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.05)) 58%,\r
        transparent 88%\r
      ),\r
      radial-gradient(138% 122% at 8% -20%, rgba(255, 255, 255, calc(0.22 + var(--widget-gloss-intensity) * 0.22)), transparent 44%),\r
      radial-gradient(118% 104% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),\r
      linear-gradient(\r
        116deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.12)) calc(30% + var(--widget-gloss-spacing) * 0.2),\r
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)) calc(58% + var(--widget-gloss-spacing) * 0.1),\r
        transparent 82%\r
      );opacity:calc(var(--widget-chrome-texture-opacity) * 1.08);}.widget-frame[data-gloss='kde'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.16)),\r
        rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.06)) 24%,\r
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 58%,\r
        transparent 84%\r
      ),\r
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),\r
      linear-gradient(\r
        124deg,\r
        transparent 10%,\r
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.08)) calc(28% + var(--widget-gloss-spacing) * 0.16),\r
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),\r
        transparent 84%\r
      );opacity:calc(var(--widget-chrome-texture-opacity) * 0.96);}.widget-frame[data-gloss='mica'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),\r
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.06)), transparent 40%),\r
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 52%, transparent 80%),\r
      linear-gradient(\r
        138deg,\r
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)),\r
        transparent 28%,\r
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),\r
        transparent 86%\r
      );opacity:calc(var(--widget-chrome-texture-opacity) * 0.92);}.widget-heading.svelte-dsom6b {position:relative;z-index:1;display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.widget-eyebrow.svelte-dsom6b {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.widget-title-row.svelte-dsom6b {display:flex;flex-wrap:wrap;align-items:center;gap:0.6rem;}.widget-title.svelte-dsom6b {margin:0;font:var(--efs-font-title-md);line-height:1.15;color:var(--shell-text);font-size:var(--widget-title-size);text-wrap:balance;}.widget-frame[data-title-tone='light'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {color:rgba(255, 255, 255, 0.97);}.widget-frame[data-title-tone='dark'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {color:rgba(24, 28, 36, 0.92);}.widget-frame[data-title-effect='plain'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:none;}.widget-frame[data-title-effect='shadow'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(0, 0, 0, 0.18), 0 8px 18px rgba(0, 0, 0, 0.12);}.widget-frame[data-title-effect='glow'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.82),\r
      0 0 10px rgba(255, 255, 255, 0.64),\r
      0 0 18px color-mix(in srgb, var(--widget-tint), transparent 58%);}.widget-frame[data-title-effect='emboss'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.78),\r
      0 -1px 0 rgba(0, 0, 0, 0.28);}.widget-help.svelte-dsom6b {position:relative;display:inline-flex;align-items:center;}.widget-help-button.svelte-dsom6b .app-icon {width:0.95rem;height:0.95rem;}.widget-help-button.svelte-dsom6b:focus-visible {outline:none;box-shadow:var(--shell-focus-ring);}.widget-help-tooltip.svelte-dsom6b {position:absolute;right:0;top:calc(100% + 0.7rem);z-index:6;display:flex;flex-direction:column;gap:0.45rem;width:min(18rem, 70vw);padding:0.9rem 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:16px;background:radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 88%),\r
        transparent 34%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),\r
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:var(--shell-card-shadow),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,\r
      transform 140ms ease;}.widget-help-tooltip.svelte-dsom6b::before {content:'';position:absolute;top:-0.42rem;right:0.95rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-left:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-panel), transparent 2%);transform:rotate(45deg);}.widget-help-tooltip.svelte-dsom6b strong:where(.svelte-dsom6b) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.widget-help-tooltip.svelte-dsom6b span:where(.svelte-dsom6b) {color:color-mix(in srgb, var(--shell-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.widget-help.svelte-dsom6b:hover .widget-help-tooltip:where(.svelte-dsom6b),\r
  .widget-help.svelte-dsom6b:focus-within .widget-help-tooltip:where(.svelte-dsom6b) {opacity:1;transform:translateY(0);}.widget-state.svelte-dsom6b {display:inline-flex;align-items:center;justify-content:center;min-height:1.55rem;padding:0 0.65rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);background:color-mix(in srgb, var(--shell-row-hover), transparent 12%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.widget-state[data-state='pinned'].svelte-dsom6b {border-color:color-mix(in srgb, var(--widget-tint), transparent 64%);background:color-mix(in srgb, var(--widget-tint), transparent 88%);color:var(--shell-text);}.widget-toolbar.svelte-dsom6b {position:relative;z-index:1;display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:0.45rem;}.widget-extra-actions.svelte-dsom6b {display:inline-flex;flex-wrap:wrap;gap:0.55rem;}.widget-icon-button.svelte-dsom6b {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--widget-control-size);height:var(--widget-control-size);border:1px solid color-mix(in srgb, var(--widget-border), transparent 6%);border-radius:var(--widget-control-radius);background:color-mix(in srgb, var(--widget-surface), transparent 6%);color:var(--shell-muted);cursor:pointer;overflow:hidden;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      color 160ms ease,\r
      box-shadow 160ms ease;}.widget-icon-button.svelte-dsom6b::before,\r
  .widget-icon-button.svelte-dsom6b::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.widget-icon-button.svelte-dsom6b::before {background:linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 74%),\r
      radial-gradient(circle at top left, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 56%);opacity:calc(var(--widget-chrome-colorize-opacity) * 0.7);}.widget-icon-button.svelte-dsom6b::after {background:linear-gradient(\r
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
      );mix-blend-mode:screen;opacity:calc(var(--widget-chrome-texture-opacity) * 0.44);}.widget-frame[data-gloss='windows-7'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,\r
  .widget-frame[data-gloss='vista'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,\r
  .widget-frame[data-gloss='kde'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,\r
  .widget-frame[data-gloss='mica'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.14)),\r
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 44%,\r
        transparent 100%\r
      ),\r
      radial-gradient(126% 114% at 18% -22%, rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.06)), transparent 46%),\r
      linear-gradient(\r
        128deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, calc(0.015 + var(--widget-gloss-intensity) * 0.03)) calc(42% + var(--widget-gloss-spacing) * 0.08),\r
        transparent 86%\r
      );}.widget-icon-button.svelte-dsom6b .app-icon {position:relative;z-index:1;width:calc(1rem * var(--widget-shell-scale));height:calc(1rem * var(--widget-shell-scale));}.widget-icon-button.svelte-dsom6b:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--widget-tint), transparent 44%);background:color-mix(in srgb, var(--widget-hover), var(--widget-tint) 18%);color:var(--shell-text);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.04);}.widget-icon-button.is-active.svelte-dsom6b {border-color:color-mix(in srgb, var(--widget-tint), transparent 54%);background:color-mix(in srgb, var(--widget-tint), transparent 84%);color:var(--shell-text);}.widget-body.svelte-dsom6b {display:flex;flex:1;flex-direction:column;gap:1rem;min-height:0;overflow:auto;overflow-x:hidden;padding-top:1rem;padding-bottom:1.15rem;background:color-mix(in srgb, var(--widget-surface), transparent 4%);scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--shell-primary), transparent 42%) transparent;}.widget-frame.window-mode.svelte-dsom6b .widget-body:where(.svelte-dsom6b) {padding-inline:0;padding-top:0;padding-bottom:0;background:transparent;}.widget-body.svelte-dsom6b * {min-width:0;}.widget-body.svelte-dsom6b input,\r
  .widget-body.svelte-dsom6b select,\r
  .widget-body.svelte-dsom6b textarea,\r
  .widget-body.svelte-dsom6b button,\r
  .widget-body.svelte-dsom6b table {max-width:100%;}.widget-body.svelte-dsom6b table {width:100%;table-layout:fixed;}.widget-body.svelte-dsom6b td,\r
  .widget-body.svelte-dsom6b th,\r
  .widget-body.svelte-dsom6b p,\r
  .widget-body.svelte-dsom6b code,\r
  .widget-body.svelte-dsom6b span {overflow-wrap:anywhere;}.widget-body.svelte-dsom6b::-webkit-scrollbar {width:0.8rem;height:0.8rem;}.widget-body.svelte-dsom6b::-webkit-scrollbar-track {background:transparent;}.widget-body.svelte-dsom6b::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 46%);background-clip:padding-box;}.widget-footer.svelte-dsom6b {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding-top:1rem;padding-bottom:1.1rem;border-top:1px solid color-mix(in srgb, var(--widget-border), transparent 18%);background:color-mix(in srgb, var(--widget-panel), transparent 4%);}.widget-frame.window-mode.svelte-dsom6b .widget-footer:where(.svelte-dsom6b) {padding-inline:0;padding-bottom:0;background:transparent;border-top-color:color-mix(in srgb, var(--widget-border), transparent 26%);}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::before,\r
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::after {display:none;}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-heading:where(.svelte-dsom6b),\r
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-title-row:where(.svelte-dsom6b) {gap:0;}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-eyebrow:where(.svelte-dsom6b),\r
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-state:where(.svelte-dsom6b) {display:none;}.widget-frame.basic7-theme.svelte-dsom6b {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,\r
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,\r
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%\r
      );font-family:var(--w7-font);color:var(--w7-el-c);}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) {border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;overflow:visible;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode)::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),\r
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;opacity:1;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode)::after {content:none;display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header.title-bar:where(.svelte-dsom6b) {min-height:0;align-items:flex-start;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),\r
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.54),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::before,\r
  .widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::after {display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-heading:where(.svelte-dsom6b) {gap:0;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-eyebrow:where(.svelte-dsom6b),\r
  .widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-state:where(.svelte-dsom6b) {display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-title-row:where(.svelte-dsom6b) {gap:0;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-title.title-bar-text:where(.svelte-dsom6b) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-size:9pt;font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);text-wrap:nowrap;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-toolbar:where(.svelte-dsom6b) {gap:0.35rem;padding-top:calc(var(--w7-w-space) - 1px);}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b) {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;color:var(--w7-el-c);transform:none;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::before,\r
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {inset:0;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):hover,\r
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):active,\r
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button.is-active:where(.svelte-dsom6b) {color:var(--w7-el-c);transform:none;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):focus-visible {outline-offset:-4px;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b) .app-icon {width:0.78rem;height:0.78rem;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-body.window-body:where(.svelte-dsom6b) {margin:var(--w7-w-space);margin-top:0;padding:var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-footer.window-footer:where(.svelte-dsom6b) {margin:var(--w7-w-space);margin-top:calc(-1 * var(--w7-w-space) - 1px);padding:10px;border:1px solid var(--w7-w-bd);border-top:0;background:var(--w7-surface);box-shadow:var(--efs-win7-footer-shadow, 0 0.5px 1px 0.5px #fff);position:relative;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-footer.window-footer:where(.svelte-dsom6b)::before {content:'';position:absolute;inset:0 auto auto 0;width:100%;height:2px;box-shadow:inset 0 1px #0000004d, inset 0 -1px #fff;}:host(:not([theme='light'])) .widget-frame.basic7-theme.svelte-dsom6b {--efs-win7-surface: #1c2229;--efs-win7-text: #e7edf8;--efs-win7-text-muted: #8591a2;--efs-win7-window-border: rgba(8, 12, 18, 0.82);--efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);--efs-win7-footer-shadow: 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.12);--efs-win7-scrollbar: #5f7ea2;}\r
\r
  @media (max-width: 47.99rem) {.widget-header.svelte-dsom6b {flex-direction:column;}.widget-toolbar.svelte-dsom6b {justify-content:flex-start;}\r
  }`
};
function dn(t, r) {
  Ot(r, !0), Bt(t, np);
  let n = y(r, "eyebrow", 7), a = y(r, "title", 7), o = y(r, "description", 7), i = y(r, "mode", 7, "card"), s = y(r, "dataTestid", 7), l = y(r, "open", 7, !1), g = y(r, "pinned", 7, !1), w = y(r, "allowPopout", 7, !0), x = y(r, "onOpen", 7), q = y(r, "onTogglePin", 7), p = y(r, "actions", 7), k = y(r, "children", 7), M = y(r, "footer", 7), P = /* @__PURE__ */ fe(wt({ ...Oe })), S = /* @__PURE__ */ _(() => e(P).themePreset), E = /* @__PURE__ */ _(() => Math.max(28, e(P).titleBarHeight ?? Oe.titleBarHeight)), W = /* @__PURE__ */ _(() => Math.max(0.75, (e(P).windowScale ?? Oe.windowScale) / 100)), C = /* @__PURE__ */ _(() => e(P).chromeTexture ? e(P).chromeBeamStyle : "none"), I = /* @__PURE__ */ _(() => e(P).chromeGlossStyle), R = /* @__PURE__ */ _(() => Ed({
    themePreset: e(S),
    titleTone: e(P).titleTone
  })), H = /* @__PURE__ */ _(() => Rd({
    themePreset: e(S),
    titleEffect: e(P).titleEffect
  })), Y = /* @__PURE__ */ _(() => e(S) === "aero"), O = /* @__PURE__ */ _(() => e(S) === "windows-basic"), b = /* @__PURE__ */ _(() => e(Y) || e(O));
  Ro(() => {
    const F = hi((ue) => {
      $(P, { ...ue }, !0);
    });
    return () => {
      F();
    };
  });
  var he = {
    get eyebrow() {
      return n();
    },
    set eyebrow(F) {
      n(F), f();
    },
    get title() {
      return a();
    },
    set title(F) {
      a(F), f();
    },
    get description() {
      return o();
    },
    set description(F) {
      o(F), f();
    },
    get mode() {
      return i();
    },
    set mode(F = "card") {
      i(F), f();
    },
    get dataTestid() {
      return s();
    },
    set dataTestid(F) {
      s(F), f();
    },
    get open() {
      return l();
    },
    set open(F = !1) {
      l(F), f();
    },
    get pinned() {
      return g();
    },
    set pinned(F = !1) {
      g(F), f();
    },
    get allowPopout() {
      return w();
    },
    set allowPopout(F = !0) {
      w(F), f();
    },
    get onOpen() {
      return x();
    },
    set onOpen(F) {
      x(F), f();
    },
    get onTogglePin() {
      return q();
    },
    set onTogglePin(F) {
      q(F), f();
    },
    get actions() {
      return p();
    },
    set actions(F) {
      p(F), f();
    },
    get children() {
      return k();
    },
    set children(F) {
      k(F), f();
    },
    get footer() {
      return M();
    },
    set footer(F) {
      M(F), f();
    }
  }, J = rp();
  let re, le;
  var ve = u(J);
  {
    var Te = (F) => {
      var ue = ep();
      let Se;
      var Pe = u(ue), Ue = u(Pe), ye = ge(Ue, !0), _e = d(Ue, 2), ot = u(_e);
      let _t;
      var Pt = ge(ot, !0), zt = d(ot, 2);
      {
        var Nt = (m) => {
          var me = Zu(), $e = ge(me, !0);
          pe(() => {
            z(me, "data-state", g() ? "pinned" : "open"), oe($e, g() ? "Pinned" : "Open");
          }), V(m, me);
        };
        ce(zt, (m) => {
          l() && m(Nt);
        });
      }
      h(_e), h(Pe);
      var qt = d(Pe, 2), ft = u(qt);
      {
        var vt = (m) => {
          var me = zc();
          let $e;
          var K = u(me);
          tt(K, { name: "popout" }), h(me), pe(() => {
            $e = se(me, 1, "widget-icon-button svelte-dsom6b", null, $e, { "efs-win7-tool-button": e(b) }), z(me, "aria-label", l() ? "Focus widget window" : "Pop out widget"), z(me, "title", l() ? "Focus widget window" : "Pop out widget");
          }), ae("click", me, function(...it) {
            var Be;
            (Be = x()) == null || Be.apply(this, it);
          }), V(m, me);
        };
        ce(ft, (m) => {
          w() && x() && m(vt);
        });
      }
      var ct = d(ft, 2);
      {
        var yt = (m) => {
          var me = zc();
          let $e;
          var K = u(me);
          tt(K, { name: "pin" }), h(me), pe(() => {
            $e = se(me, 1, "widget-icon-button svelte-dsom6b", null, $e, {
              "efs-win7-tool-button": e(b),
              "is-active": g(),
              active: g()
            }), z(me, "aria-label", g() ? "Unpin widget" : "Pin widget"), z(me, "aria-pressed", g()), z(me, "title", g() ? "Unpin widget" : "Pin widget");
          }), ae("click", me, function(...it) {
            var Be;
            (Be = q()) == null || Be.apply(this, it);
          }), V(m, me);
        };
        ce(ct, (m) => {
          q() && m(yt);
        });
      }
      var we = d(ct, 2), ze = u(we);
      let Je;
      var N = u(ze);
      tt(N, { name: "help" }), h(ze);
      var D = d(ze, 2), Me = u(D), L = ge(Me, !0), de = d(Me, 2), Le = ge(de, !0);
      h(D), h(we);
      var We = d(we, 2);
      {
        var Ve = (m) => {
          var me = Qu(), $e = u(me);
          Ua($e, p), h(me), V(m, me);
        };
        ce(We, (m) => {
          p() && m(Ve);
        });
      }
      h(qt), h(ue), pe(() => {
        Se = se(ue, 1, "widget-header svelte-dsom6b", null, Se, { "title-bar": e(b) }), oe(ye, n()), _t = se(ot, 1, "widget-title svelte-dsom6b", null, _t, { "title-bar-text": e(b) }), oe(Pt, a()), Je = se(ze, 1, "widget-icon-button widget-help-button svelte-dsom6b", null, Je, { "efs-win7-tool-button": e(b) }), z(ze, "aria-label", `About ${a()}`), z(ze, "title", `About ${a()}`), oe(L, a()), oe(Le, o());
      }), V(F, ue);
    };
    ce(ve, (F) => {
      i() !== "window" && F(Te);
    });
  }
  var je = d(ve, 2);
  let te;
  var be = u(je);
  Ua(be, () => k() ?? $o), h(je);
  var ke = d(je, 2);
  {
    var B = (F) => {
      var ue = tp();
      let Se;
      var Pe = u(ue);
      Ua(Pe, M), h(ue), pe(() => Se = se(ue, 1, "widget-footer svelte-dsom6b", null, Se, { "window-footer": e(b) })), V(F, ue);
    };
    ce(ke, (F) => {
      M() && F(B);
    });
  }
  return h(J), pe(() => {
    re = se(J, 1, "widget-frame svelte-dsom6b", null, re, {
      "window-mode": i() === "window",
      win7: e(b),
      "win7-theme": e(Y),
      "basic7-theme": e(O),
      window: e(b),
      active: e(b),
      glass: e(Y)
    }), z(J, "data-testid", s()), z(J, "data-theme", e(S)), z(J, "data-beam", e(Y) ? void 0 : e(C)), z(J, "data-gloss", e(Y) ? void 0 : e(I)), z(J, "data-title-tone", e(Y) ? void 0 : e(R)), z(J, "data-title-effect", e(Y) ? void 0 : e(H)), le = $r(J, "", le, {
      "--widget-titlebar-height": `${e(E)}px`,
      "--widget-shell-scale": `${e(W)}`
    }), te = se(je, 1, "widget-body svelte-dsom6b", null, te, { "window-body": e(b) });
  }), V(t, J), It(he);
}
ln(["click"]);
Ft(
  dn,
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
var ap = /* @__PURE__ */ ee('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon svelte-wqeobd"></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button type="button"><!></button> <button type="button"><!></button> <button type="button" title="Open widget"><!></button></div></article>'), op = /* @__PURE__ */ ee('<div class="empty-state svelte-wqeobd">No custom buttons yet. Build one below and it will show up here.</div>'), ip = /* @__PURE__ */ ee('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon button-row-icon-app svelte-wqeobd"><!></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd">Macro</span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button class="row-action svelte-wqeobd" type="button" title="Run now"><!></button> <button class="row-action destructive svelte-wqeobd" type="button" title="Delete custom button"><!></button></div></article>'), sp = /* @__PURE__ */ ee("<option> </option>"), lp = /* @__PURE__ */ ee('<div><button type="button"><span class="step-icon svelte-wqeobd"></span> <span class="svelte-wqeobd"> </span></button> <button type="button" title="Pin when opened"><!></button></div>'), dp = /* @__PURE__ */ ee('<div class="manager-summary svelte-wqeobd"><span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span></div> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Workspace widgets</strong> <span class="svelte-wqeobd">Accent rows are loaded. Matte rows stay available until you add them.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Workspace widgets"></div></section> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Custom buttons</strong> <span class="svelte-wqeobd">Chain widgets together for repeat admin flows and keep the button on the toolbar if you use it often.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Custom toolbar actions"><!> <!></div> <form class="builder svelte-wqeobd"><div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Button label</span> <input type="text" maxlength="28" placeholder="Search stack" class="svelte-wqeobd"/></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Toolbar text</span> <input type="text" maxlength="18" placeholder="Stack" class="svelte-wqeobd"/></label></div> <div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Icon</span> <select class="svelte-wqeobd"></select></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Summary</span> <input type="text" maxlength="96" placeholder="Open a focused set of admin widgets together." class="svelte-wqeobd"/></label></div> <div class="field svelte-wqeobd"><span class="svelte-wqeobd">Steps</span> <div class="step-list svelte-wqeobd" role="group" aria-label="Custom button steps"></div></div> <div class="builder-actions svelte-wqeobd"><button class="create-button svelte-wqeobd" type="submit"><!> Add custom button</button></div></form></section>', 1);
const cp = {
  hash: "svelte-wqeobd",
  code: `.manager-summary.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.manager-summary.svelte-wqeobd span:where(.svelte-wqeobd),\r
  .row-chip.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;min-height:1.8rem;padding:0 0.72rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.manager-section.svelte-wqeobd {display:flex;flex-direction:column;gap:0.8rem;}.section-heading.svelte-wqeobd {display:flex;flex-direction:column;gap:0.22rem;}.section-heading.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.section-heading.svelte-wqeobd span:where(.svelte-wqeobd),\r
  .empty-state.svelte-wqeobd {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.button-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.6rem;}.button-row.svelte-wqeobd {display:grid;gap:0.55rem;padding:0.72rem 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);transition:border-color 160ms ease,\r
      background-color 160ms ease,\r
      box-shadow 160ms ease,\r
      opacity 160ms ease;}.button-row.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 72%),\r
      color-mix(in srgb, var(--shell-primary), transparent 88%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 78%);}.button-row.is-muted.svelte-wqeobd {opacity:0.82;}.button-row-main.svelte-wqeobd {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.72rem;width:100%;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;text-align:left;}.button-row-icon.svelte-wqeobd {display:inline-flex;width:2.15rem;height:2.15rem;align-items:center;justify-content:center;border-radius:14px;background:color-mix(in srgb, var(--shell-panel), transparent 4%);color:var(--shell-text);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 18%);flex:none;}.button-row-icon.svelte-wqeobd::before {content:'';width:1rem;height:1rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}.button-row-icon-app.svelte-wqeobd::before {content:none;}.button-row-icon.svelte-wqeobd .app-icon {width:1rem;height:1rem;}.button-row-copy.svelte-wqeobd {display:flex;flex-direction:column;gap:0.16rem;min-width:0;}.button-row-copy.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.button-row-copy.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;overflow-wrap:anywhere;}.button-row-meta.svelte-wqeobd,\r
  .button-row-actions.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.row-action.svelte-wqeobd,\r
  .pin-toggle.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;width:2.1rem;height:2.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);cursor:pointer;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      color 160ms ease;}.row-action.svelte-wqeobd:hover,\r
  .pin-toggle.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 46%);color:var(--shell-text);}.row-action.is-active.svelte-wqeobd,\r
  .pin-toggle.is-active.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.row-action.destructive.svelte-wqeobd:hover {border-color:color-mix(in srgb, #ef4444, transparent 28%);background:color-mix(in srgb, #ef4444, transparent 90%);color:#fca5a5;}.row-action.svelte-wqeobd .app-icon,\r
  .pin-toggle.svelte-wqeobd .app-icon {width:0.92rem;height:0.92rem;}.builder.svelte-wqeobd {display:flex;flex-direction:column;gap:0.75rem;padding-top:0.4rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 18%);}.builder-grid.svelte-wqeobd {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.65rem;}.field.svelte-wqeobd {display:flex;flex-direction:column;gap:0.38rem;min-width:0;}.field.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.field.svelte-wqeobd input:where(.svelte-wqeobd),\r
  .field.svelte-wqeobd select:where(.svelte-wqeobd) {width:100%;min-width:0;padding:0.72rem 0.82rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:14px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-text);font:var(--efs-font-body-sm);}.step-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.45rem;}.step-row.svelte-wqeobd {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.5rem;align-items:center;}.step-toggle.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.6rem;min-height:2.4rem;padding:0 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:16px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-muted);cursor:pointer;transition:border-color 160ms ease,\r
      background-color 160ms ease,\r
      color 160ms ease;}.step-toggle.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);color:var(--shell-text);}.step-icon.svelte-wqeobd {display:inline-flex;width:0.95rem;height:0.95rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;flex:none;}.builder-actions.svelte-wqeobd {display:flex;justify-content:flex-end;}.create-button.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.55rem;min-height:2.55rem;padding:0 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);cursor:pointer;font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      opacity 160ms ease;}.create-button.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 38%);}.create-button.svelte-wqeobd:disabled,\r
  .pin-toggle.svelte-wqeobd:disabled {opacity:0.42;cursor:not-allowed;}.create-button.svelte-wqeobd .app-icon {width:0.95rem;height:0.95rem;}.widget-frame.win7-theme .manager-summary.svelte-wqeobd span:where(.svelte-wqeobd),\r
  .widget-frame.win7-theme .row-chip.svelte-wqeobd {min-height:22px;padding:0 8px;border-color:color-mix(in srgb, var(--w7-el-bd), transparent 14%);border-radius:var(--w7-el-bdr);background:linear-gradient(\r
      180deg,\r
      color-mix(in srgb, var(--w7-surface), white 20%),\r
      color-mix(in srgb, var(--w7-surface), transparent 4%)\r
    );box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 18%);color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .section-heading.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--w7-el-c);font:var(--w7-font);font-weight:600;letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .section-heading.svelte-wqeobd span:where(.svelte-wqeobd),\r
  .widget-frame.win7-theme .empty-state.svelte-wqeobd,\r
  .widget-frame.win7-theme .field.svelte-wqeobd span:where(.svelte-wqeobd) {color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .button-row.svelte-wqeobd {gap:0.45rem;padding:6px;border-color:color-mix(in srgb, var(--w7-w-bd), transparent 14%);border-radius:var(--w7-el-bdr);background:linear-gradient(\r
      180deg,\r
      color-mix(in srgb, var(--w7-surface), white 14%),\r
      var(--w7-surface)\r
    );box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 16%);}.widget-frame.win7-theme .button-row.is-selected.svelte-wqeobd {border-color:var(--w7-li-bd-hl);background:var(--w7-li-bg-hl);box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 12%);}.widget-frame.win7-theme .button-row.is-muted.svelte-wqeobd {opacity:0.92;}.widget-frame.win7-theme .button-row-main.svelte-wqeobd {align-items:center;gap:0.65rem;}.widget-frame.win7-theme .button-row-icon.svelte-wqeobd {width:23px;height:23px;border-color:var(--w7-el-bd);border-radius:var(--w7-el-bdr);background:var(--w7-el-grad);color:var(--w7-el-c);box-shadow:var(--w7-el-sd);}.widget-frame.win7-theme .button-row-copy.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--w7-el-c);font:var(--w7-font);font-weight:600;}.widget-frame.win7-theme .button-row-copy.svelte-wqeobd span:where(.svelte-wqeobd) {color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);}.widget-frame.win7-theme .row-action.svelte-wqeobd,\r
  .widget-frame.win7-theme .pin-toggle.svelte-wqeobd {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;transform:none;}.widget-frame.win7-theme .row-action.svelte-wqeobd:hover,\r
  .widget-frame.win7-theme .pin-toggle.svelte-wqeobd:hover:not(:disabled),\r
  .widget-frame.win7-theme .row-action.is-active.svelte-wqeobd,\r
  .widget-frame.win7-theme .pin-toggle.is-active.svelte-wqeobd {transform:none;color:var(--w7-el-c);}.widget-frame.win7-theme .row-action.destructive.svelte-wqeobd {color:color-mix(in srgb, #7d0d01, var(--w7-el-c) 22%);}.widget-frame.win7-theme .builder.svelte-wqeobd {padding-top:6px;border-top-color:color-mix(in srgb, var(--w7-w-bd), transparent 18%);}.widget-frame.win7-theme .field.svelte-wqeobd input:where(.svelte-wqeobd),\r
  .widget-frame.win7-theme .field.svelte-wqeobd select:where(.svelte-wqeobd),\r
  .widget-frame.win7-theme .step-toggle.svelte-wqeobd,\r
  .widget-frame.win7-theme .create-button.svelte-wqeobd {font:var(--w7-font);}.widget-frame.win7-theme .step-toggle.svelte-wqeobd,\r
  .widget-frame.win7-theme .create-button.svelte-wqeobd {min-height:23px;letter-spacing:0;text-transform:none;transform:none;}.widget-frame.win7-theme .step-toggle.svelte-wqeobd {gap:0.45rem;}.widget-frame.win7-theme .create-button.svelte-wqeobd:hover:not(:disabled) {transform:none;}\r
\r
  @media (max-width: 47.99rem) {.builder-grid.svelte-wqeobd {grid-template-columns:1fr;}\r
  }`
};
function Kg(t, r) {
  Ot(r, !0), Bt(t, cp);
  let n = y(r, "items", 7), a = y(r, "actionIconOptions", 7), o = y(r, "mode", 7, "card"), i = y(r, "onToggleToolbar", 7), s = y(r, "onToggleWorkspace", 7), l = y(r, "onToggleEdgePin", 7), g = y(r, "onOpenWidget", 7), w = y(r, "onToggleToolbarAction", 7), x = y(r, "onRunAction", 7), q = y(r, "onDeleteAction", 7), p = y(r, "onCreateAction", 7), k = /* @__PURE__ */ _(() => n().filter((O) => O.kind === "widget")), M = /* @__PURE__ */ _(() => n().filter((O) => O.kind === "action")), P = /* @__PURE__ */ _(() => n().filter((O) => O.inToolbar).length), S = /* @__PURE__ */ _(() => e(k).filter((O) => O.inWorkspace).length), E = /* @__PURE__ */ _(() => {
    var O;
    return ((O = a()[0]) == null ? void 0 : O.value) ?? "buttons-manager";
  }), W = /* @__PURE__ */ fe(wt({
    label: "",
    barLabel: "",
    summary: "",
    iconName: "buttons-manager",
    steps: []
  }));
  function C(O) {
    return e(W).steps.some((b) => b.widgetId === O);
  }
  function I(O) {
    if (C(O)) {
      e(W).steps = e(W).steps.filter((b) => b.widgetId !== O);
      return;
    }
    e(W).steps = [...e(W).steps, { widgetId: O, pinned: !1 }];
  }
  function R(O) {
    e(W).steps = e(W).steps.map((b) => b.widgetId === O ? { ...b, pinned: !b.pinned } : b);
  }
  function H() {
    const O = e(W).label.trim();
    !O || e(W).steps.length === 0 || (p()({
      label: O,
      barLabel: e(W).barLabel.trim(),
      summary: e(W).summary.trim(),
      iconName: e(W).iconName,
      steps: e(W).steps
    }), $(
      W,
      {
        label: "",
        barLabel: "",
        summary: "",
        iconName: e(E),
        steps: []
      },
      !0
    ));
  }
  mn(() => {
    a().some((O) => O.value === e(W).iconName) || (e(W).iconName = e(E));
  });
  var Y = {
    get items() {
      return n();
    },
    set items(O) {
      n(O), f();
    },
    get actionIconOptions() {
      return a();
    },
    set actionIconOptions(O) {
      a(O), f();
    },
    get mode() {
      return o();
    },
    set mode(O = "card") {
      o(O), f();
    },
    get onToggleToolbar() {
      return i();
    },
    set onToggleToolbar(O) {
      i(O), f();
    },
    get onToggleWorkspace() {
      return s();
    },
    set onToggleWorkspace(O) {
      s(O), f();
    },
    get onToggleEdgePin() {
      return l();
    },
    set onToggleEdgePin(O) {
      l(O), f();
    },
    get onOpenWidget() {
      return g();
    },
    set onOpenWidget(O) {
      g(O), f();
    },
    get onToggleToolbarAction() {
      return w();
    },
    set onToggleToolbarAction(O) {
      w(O), f();
    },
    get onRunAction() {
      return x();
    },
    set onRunAction(O) {
      x(O), f();
    },
    get onDeleteAction() {
      return q();
    },
    set onDeleteAction(O) {
      q(O), f();
    },
    get onCreateAction() {
      return p();
    },
    set onCreateAction(O) {
      p(O), f();
    }
  };
  return dn(t, {
    eyebrow: "Workspace tools",
    title: "Buttons & widgets",
    description: "Add or remove toolbar buttons, hide widgets from the canvas, pin shortcuts to the browser edge, and build custom button chains.",
    get mode() {
      return o();
    },
    allowPopout: !1,
    children: (O, b) => {
      var he = dp(), J = Zt(he), re = u(J), le = ge(re), ve = d(re, 2), Te = ge(ve), je = d(ve, 2), te = ge(je);
      h(J);
      var be = d(J, 2), ke = d(u(be), 2);
      Lt(ke, 21, () => e(k), (N) => N.id, (N, D) => {
        var Me = ap();
        let L;
        var de = u(Me), Le = u(de);
        let We;
        var Ve = d(Le, 2), m = u(Ve), me = ge(m, !0), $e = d(m, 2), K = ge($e, !0);
        h(Ve), h(de);
        var it = d(de, 2), Be = u(it), bt = ge(Be, !0), He = d(Be, 2), Ze = ge(He, !0), gt = d(He, 2), Mt = ge(gt, !0);
        h(it);
        var tr = d(it, 2), Xe = u(tr);
        let Ct;
        var Dt = u(Xe);
        tt(Dt, { name: "restore" }), h(Xe);
        var $t = d(Xe, 2);
        let br;
        var Pr = u($t);
        tt(Pr, { name: "edge" }), h($t);
        var rr = d($t, 2);
        let zr;
        var Er = u(rr);
        tt(Er, { name: "open" }), h(rr), h(tr), h(Me), pe(() => {
          L = se(Me, 1, "button-row svelte-wqeobd", null, L, {
            "is-selected": e(D).inToolbar,
            "is-muted": !e(D).inToolbar && !e(D).inWorkspace && !e(D).edgePinned
          }), z(de, "aria-pressed", e(D).inToolbar), z(de, "aria-label", e(D).inToolbar ? `Remove ${e(D).label} from the toolbar` : `Add ${e(D).label} to the toolbar`), We = $r(Le, "", We, { "--icon-mask": e(D).iconMask }), oe(me, e(D).label), oe(K, e(D).summary), oe(bt, e(D).group), oe(Ze, e(D).presentation === "label" ? e(D).barLabel : "Icon button"), oe(Mt, e(D).inWorkspace ? "Canvas" : "Hidden"), Ct = se(Xe, 1, "row-action svelte-wqeobd", null, Ct, {
            "is-active": e(D).inWorkspace,
            active: e(D).inWorkspace
          }), z(Xe, "aria-pressed", e(D).inWorkspace), z(Xe, "aria-label", e(D).inWorkspace ? `Remove ${e(D).label} from the workspace canvas` : `Add ${e(D).label} back to the workspace canvas`), z(Xe, "title", e(D).inWorkspace ? "Remove from canvas" : "Add to canvas"), br = se($t, 1, "row-action svelte-wqeobd", null, br, {
            "is-active": e(D).edgePinned,
            active: e(D).edgePinned
          }), z($t, "aria-pressed", e(D).edgePinned), z($t, "aria-label", e(D).edgePinned ? `Remove ${e(D).label} from the browser edge` : `Pin ${e(D).label} to the browser edge`), z($t, "title", e(D).edgePinned ? "Unpin edge shortcut" : "Pin to edge"), zr = se(rr, 1, "row-action svelte-wqeobd", null, zr, { "is-active": e(D).open }), z(rr, "aria-label", `Open ${e(D).label}`);
        }), ae("click", de, () => i()(e(D).id)), ae("click", Xe, () => s()(e(D).id)), ae("click", $t, () => l()(e(D).id)), ae("click", rr, () => g()(e(D).id)), V(N, Me);
      }), h(ke), h(be);
      var B = d(be, 2), F = d(u(B), 2), ue = u(F);
      {
        var Se = (N) => {
          var D = op();
          V(N, D);
        };
        ce(ue, (N) => {
          e(M).length === 0 && N(Se);
        });
      }
      var Pe = d(ue, 2);
      Lt(Pe, 17, () => e(M), (N) => N.id, (N, D) => {
        var Me = ip();
        let L;
        var de = u(Me), Le = u(de), We = u(Le);
        tt(We, {
          get name() {
            return e(D).iconName;
          }
        }), h(Le);
        var Ve = d(Le, 2), m = u(Ve), me = ge(m, !0), $e = d(m, 2), K = ge($e, !0);
        h(Ve), h(de);
        var it = d(de, 2), Be = d(u(it), 2), bt = ge(Be), He = d(Be, 2), Ze = ge(He, !0);
        h(it);
        var gt = d(it, 2), Mt = u(gt), tr = u(Mt);
        tt(tr, { name: "open" }), h(Mt);
        var Xe = d(Mt, 2), Ct = u(Xe);
        tt(Ct, { name: "close" }), h(Xe), h(gt), h(Me), pe(() => {
          L = se(Me, 1, "button-row svelte-wqeobd", null, L, { "is-selected": e(D).inToolbar }), z(de, "aria-pressed", e(D).inToolbar), z(de, "aria-label", e(D).inToolbar ? `Remove ${e(D).label} from the toolbar` : `Add ${e(D).label} to the toolbar`), oe(me, e(D).label), oe(K, e(D).summary), oe(bt, `${e(D).stepCount ?? ""} step${e(D).stepCount === 1 ? "" : "s"}`), oe(Ze, e(D).barLabel), z(Mt, "aria-label", `Run ${e(D).label}`), z(Xe, "aria-label", `Delete ${e(D).label}`);
        }), ae("click", de, () => w()(e(D).id)), ae("click", Mt, () => x()(e(D).id)), ae("click", Xe, () => q()(e(D).id)), V(N, Me);
      }), h(F);
      var Ue = d(F, 2), ye = u(Ue), _e = u(ye), ot = d(u(_e), 2);
      Tt(ot), h(_e);
      var _t = d(_e, 2), Pt = d(u(_t), 2);
      Tt(Pt), h(_t), h(ye);
      var zt = d(ye, 2), Nt = u(zt), qt = d(u(Nt), 2);
      Lt(qt, 21, a, (N) => N.value, (N, D) => {
        var Me = sp(), L = ge(Me, !0), de = {};
        pe(() => {
          oe(L, e(D).label), de !== (de = e(D).value) && (Me.value = (Me.__value = de) ?? "");
        }), V(N, Me);
      }), h(qt), fr(qt), h(Nt);
      var ft = d(Nt, 2), vt = d(u(ft), 2);
      Tt(vt), h(ft), h(zt);
      var ct = d(zt, 2), yt = d(u(ct), 2);
      Lt(yt, 21, () => e(k), (N) => N.id, (N, D) => {
        var Me = lp();
        let L;
        var de = u(Me);
        let Le;
        var We = u(de);
        let Ve;
        var m = d(We, 2), me = ge(m, !0);
        h(de);
        var $e = d(de, 2);
        let K;
        var it = u($e);
        tt(it, { name: "pin" }), h($e), h(Me), pe(
          (Be, bt, He, Ze, gt, Mt, tr) => {
            L = se(Me, 1, "step-row svelte-wqeobd", null, L, { "is-selected": Be }), Le = se(de, 1, "step-toggle svelte-wqeobd", null, Le, { "is-selected": bt, active: He }), z(de, "aria-pressed", Ze), Ve = $r(We, "", Ve, { "--icon-mask": e(D).iconMask }), oe(me, e(D).label), K = se($e, 1, "pin-toggle svelte-wqeobd", null, K, { "is-active": gt, active: Mt }), $e.disabled = tr, z($e, "aria-label", `Pin ${e(D).label} when this custom button runs`);
          },
          [
            () => C(e(D).id),
            () => C(e(D).id),
            () => C(e(D).id),
            () => C(e(D).id),
            () => {
              var Be;
              return C(e(D).id) && ((Be = e(W).steps.find((bt) => bt.widgetId === e(D).id)) == null ? void 0 : Be.pinned);
            },
            () => {
              var Be;
              return C(e(D).id) && ((Be = e(W).steps.find((bt) => bt.widgetId === e(D).id)) == null ? void 0 : Be.pinned);
            },
            () => !C(e(D).id)
          ]
        ), ae("click", de, () => I(e(D).id)), ae("click", $e, () => R(e(D).id)), V(N, Me);
      }), h(yt), h(ct);
      var we = d(ct, 2), ze = u(we), Je = u(ze);
      tt(Je, { name: "buttons-manager" }), Cr(), h(ze), h(we), h(Ue), h(B), pe(
        (N) => {
          oe(le, `${e(P) ?? ""} on toolbar`), oe(Te, `${e(S) ?? ""} on canvas`), oe(te, `${e(M).length ?? ""} custom`), ze.disabled = N;
        },
        [
          () => e(W).label.trim().length === 0 || e(W).steps.length === 0
        ]
      ), zo("submit", Ue, (N) => {
        N.preventDefault(), H();
      }), Wn(ot, () => e(W).label, (N) => e(W).label = N), Wn(Pt, () => e(W).barLabel, (N) => e(W).barLabel = N), Og(qt, () => e(W).iconName, (N) => e(W).iconName = N), Wn(vt, () => e(W).summary, (N) => e(W).summary = N), V(O, he);
    },
    $$slots: { default: !0 }
  }), It(Y);
}
ln(["click"]);
Ft(
  Kg,
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
var gp = /* @__PURE__ */ ee('<button type="button"><span class="svelte-1gyj5vm"> </span> <!></button>'), vp = /* @__PURE__ */ ee('<span class="activity-label svelte-1gyj5vm"> </span>'), hp = /* @__PURE__ */ ee('<button type="button"><span class="activity-icon svelte-1gyj5vm"></span> <!></button>'), up = /* @__PURE__ */ ee('<section class="workspace-toolbar-shell svelte-1gyj5vm"><div class="workspace-toolbar-main svelte-1gyj5vm" role="toolbar" aria-label="Admin workspace toolbar"><div class="workspace-toolbar-start svelte-1gyj5vm"><button type="button"><!> <span class="svelte-1gyj5vm">Buttons + widgets</span></button> <div class="workspace-strip svelte-1gyj5vm" aria-label="Workspace slots"><!> <button class="save-button svelte-1gyj5vm" type="button" aria-label="Save workspace" title="Save workspace"><!> <span class="svelte-1gyj5vm">Save</span></button> <span class="workspace-saved svelte-1gyj5vm"> </span></div></div> <div class="activity-bar svelte-1gyj5vm"></div> <div class="workspace-toolbar-end svelte-1gyj5vm"><div><button class="control-button reset-button svelte-1gyj5vm" type="button" aria-label="Reset workspace" title="Reset workspace"><!> <span class="svelte-1gyj5vm">Reset</span></button> <button class="reset-question svelte-1gyj5vm" type="button" tabindex="-1" aria-hidden="true" title="Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.">❓</button> <div class="reset-tooltip svelte-1gyj5vm" role="tooltip">Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.</div></div> <button type="button"><!> <span class="svelte-1gyj5vm"> </span></button></div></div> <!></section>');
const pp = {
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
function Jg(t, r) {
  Ot(r, !0), Bt(t, pp);
  let n = y(r, "items", 7), a = y(r, "profiles", 7), o = y(r, "editing", 7), i = y(r, "compact", 7), s = y(r, "layoutDirty", 7), l = y(r, "managerOpen", 7), g = y(r, "actionIconOptions", 7), w = y(r, "onToggleEditing", 7), x = y(r, "onResetLayout", 7), q = y(r, "onSaveWorkspace", 7), p = y(r, "onToggleManager", 7), k = y(r, "onActivateWidget", 7), M = y(r, "onToggleToolbar", 7), P = y(r, "onToggleWorkspace", 7), S = y(r, "onToggleEdgePin", 7), E = y(r, "onActivateAction", 7), W = y(r, "onToggleToolbarAction", 7), C = y(r, "onDeleteAction", 7), I = y(r, "onCreateAction", 7), R = /* @__PURE__ */ fe(null), H = /* @__PURE__ */ fe(!1), Y = null, O = /* @__PURE__ */ _(() => n().filter((N) => N.inToolbar)), b = /* @__PURE__ */ _(() => a()[0] ?? null), he = /* @__PURE__ */ _(() => {
    var N;
    return (N = e(b)) != null && N.savedAt ? `Saved ${new Intl.DateTimeFormat(void 0, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date(e(b).savedAt))}` : "Unsaved";
  });
  function J(N) {
    return N.kind === "widget";
  }
  function re(N) {
    return !J(N) || N.presentation === "label";
  }
  function le() {
    Y && (clearTimeout(Y), Y = null), $(H, !1);
  }
  function ve() {
    le(), $(H, !0), Y = setTimeout(
      () => {
        $(H, !1), Y = null;
      },
      2400
    );
  }
  function Te() {
    if (!(i() || !s())) {
      if (e(H)) {
        le(), x()();
        return;
      }
      ve();
    }
  }
  Ah(() => {
    le();
  });
  var je = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), f();
    },
    get profiles() {
      return a();
    },
    set profiles(N) {
      a(N), f();
    },
    get editing() {
      return o();
    },
    set editing(N) {
      o(N), f();
    },
    get compact() {
      return i();
    },
    set compact(N) {
      i(N), f();
    },
    get layoutDirty() {
      return s();
    },
    set layoutDirty(N) {
      s(N), f();
    },
    get managerOpen() {
      return l();
    },
    set managerOpen(N) {
      l(N), f();
    },
    get actionIconOptions() {
      return g();
    },
    set actionIconOptions(N) {
      g(N), f();
    },
    get onToggleEditing() {
      return w();
    },
    set onToggleEditing(N) {
      w(N), f();
    },
    get onResetLayout() {
      return x();
    },
    set onResetLayout(N) {
      x(N), f();
    },
    get onSaveWorkspace() {
      return q();
    },
    set onSaveWorkspace(N) {
      q(N), f();
    },
    get onToggleManager() {
      return p();
    },
    set onToggleManager(N) {
      p(N), f();
    },
    get onActivateWidget() {
      return k();
    },
    set onActivateWidget(N) {
      k(N), f();
    },
    get onToggleToolbar() {
      return M();
    },
    set onToggleToolbar(N) {
      M(N), f();
    },
    get onToggleWorkspace() {
      return P();
    },
    set onToggleWorkspace(N) {
      P(N), f();
    },
    get onToggleEdgePin() {
      return S();
    },
    set onToggleEdgePin(N) {
      S(N), f();
    },
    get onActivateAction() {
      return E();
    },
    set onActivateAction(N) {
      E(N), f();
    },
    get onToggleToolbarAction() {
      return W();
    },
    set onToggleToolbarAction(N) {
      W(N), f();
    },
    get onDeleteAction() {
      return C();
    },
    set onDeleteAction(N) {
      C(N), f();
    },
    get onCreateAction() {
      return I();
    },
    set onCreateAction(N) {
      I(N), f();
    }
  }, te = up(), be = u(te), ke = u(be), B = u(ke);
  let F;
  var ue = u(B);
  tt(ue, { name: "buttons-manager" }), Cr(2), h(B), ci(B, (N) => $(R, N), () => e(R));
  var Se = d(B, 2), Pe = u(Se);
  Lt(Pe, 17, a, (N) => N.id, (N, D) => {
    var Me = gp();
    let L;
    var de = u(Me), Le = ge(de, !0), We = d(de, 2);
    {
      var Ve = (m) => {
        tt(m, { name: "layout-lock" });
      };
      ce(We, (m) => {
        e(D).locked && m(Ve);
      });
    }
    h(Me), pe(() => {
      L = se(Me, 1, "workspace-pill svelte-1gyj5vm", null, L, {
        "is-active": !e(D).locked,
        "is-locked": e(D).locked
      }), Me.disabled = e(D).locked, z(Me, "aria-label", e(D).locked ? `${e(D).label} is locked` : `${e(D).label} is active`), z(Me, "title", e(D).locked ? `${e(D).label} is locked` : `${e(D).label} is active`), oe(Le, e(D).label);
    }), V(N, Me);
  });
  var Ue = d(Pe, 2), ye = u(Ue);
  tt(ye, { name: "restore" }), Cr(2), h(Ue);
  var _e = d(Ue, 2), ot = ge(_e, !0);
  h(Se), h(ke);
  var _t = d(ke, 2);
  Lt(_t, 21, () => e(O), (N) => N.id, (N, D) => {
    var Me = hp();
    let L;
    var de = u(Me);
    let Le;
    var We = d(de, 2);
    {
      var Ve = (me) => {
        var $e = vp(), K = ge($e, !0);
        pe(() => oe(K, e(D).barLabel)), V(me, $e);
      }, m = /* @__PURE__ */ _(() => re(e(D)));
      ce(We, (me) => {
        e(m) && me(Ve);
      });
    }
    h(Me), pe(
      (me, $e, K) => {
        L = se(Me, 1, "activity-button svelte-1gyj5vm", null, L, { "is-active": me, "is-label": $e }), z(Me, "aria-label", K), z(Me, "title", e(D).label), Le = $r(de, "", Le, { "--icon-mask": e(D).iconMask });
      },
      [
        () => J(e(D)) && e(D).open,
        () => re(e(D)),
        () => J(e(D)) ? `Open ${e(D).label}` : `Run ${e(D).label}`
      ]
    ), ae("click", Me, () => J(e(D)) ? k()(e(D).id) : E()(e(D).id)), V(N, Me);
  }), h(_t);
  var Pt = d(_t, 2), zt = u(Pt);
  let Nt;
  var qt = u(zt), ft = u(qt);
  tt(ft, { name: "layout-reset" }), Cr(2), h(qt), Cr(4), h(zt);
  var vt = d(zt, 2);
  let ct;
  var yt = u(vt);
  {
    let N = /* @__PURE__ */ _(() => o() ? "layout-unlock" : "layout-lock");
    tt(yt, {
      get name() {
        return e(N);
      }
    });
  }
  var we = d(yt, 2), ze = ge(we, !0);
  h(vt), h(Pt), h(be);
  var Je = d(be, 2);
  return Fg(Je, {
    get open() {
      return l();
    },
    get anchor() {
      return e(R);
    },
    placement: "bottom-start",
    width: "min(24rem, calc(100vw - 1rem))",
    zIndex: 520,
    get onClose() {
      return p();
    },
    children: (N, D) => {
      Kg(N, {
        get items() {
          return n();
        },
        get actionIconOptions() {
          return g();
        },
        get onToggleToolbar() {
          return M();
        },
        get onToggleWorkspace() {
          return P();
        },
        get onToggleEdgePin() {
          return S();
        },
        get onOpenWidget() {
          return k();
        },
        get onToggleToolbarAction() {
          return W();
        },
        get onRunAction() {
          return E();
        },
        get onDeleteAction() {
          return C();
        },
        get onCreateAction() {
          return I();
        }
      });
    },
    $$slots: { default: !0 }
  }), h(te), pe(() => {
    F = se(B, 1, "manager-button svelte-1gyj5vm", null, F, { "is-active": l() }), z(B, "aria-label", l() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), z(B, "aria-pressed", l()), z(B, "title", l() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), oe(ot, e(he)), Nt = se(zt, 1, "reset-shell svelte-1gyj5vm", null, Nt, { "is-armed": e(H) }), qt.disabled = !s() || i(), ct = se(vt, 1, "control-button svelte-1gyj5vm", null, ct, { "is-active": o() }), z(vt, "aria-label", o() ? "Lock layout editing" : "Unlock layout editing"), z(vt, "aria-pressed", o()), vt.disabled = i(), z(vt, "title", i() ? "Layout editing is disabled on compact screens" : o() ? "Lock layout editing" : "Unlock layout editing"), oe(ze, o() ? "Layout unlocked" : "Layout locked");
  }), ae("click", B, function(...N) {
    var D;
    (D = p()) == null || D.apply(this, N);
  }), ae("click", Ue, function(...N) {
    var D;
    (D = q()) == null || D.apply(this, N);
  }), ae("click", qt, Te), ae("click", vt, function(...N) {
    var D;
    (D = w()) == null || D.apply(this, N);
  }), V(t, te), It(je);
}
ln(["click"]);
Ft(
  Jg,
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
var wp = /* @__PURE__ */ ee('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), mp = /* @__PURE__ */ ee("<div><span></span></div>"), fp = /* @__PURE__ */ ee('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Dl = /* @__PURE__ */ ee('<button type="button"><!></button>'), bp = /* @__PURE__ */ ee('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), yp = /* @__PURE__ */ ee('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), xp = /* @__PURE__ */ ee('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), kp = /* @__PURE__ */ ee('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), _p = /* @__PURE__ */ ee('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), qp = /* @__PURE__ */ ee("<div><!></div>"), Sp = /* @__PURE__ */ ee('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Tp = /* @__PURE__ */ ee("<!> <!> <div><!> <!> <!></div>", 1);
const jp = {
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
function Zg(t, r) {
  Ot(r, !0), Bt(t, jp);
  let n = y(r, "title", 7), a = y(r, "helpText", 7, ""), o = y(r, "helpPlacement", 7, "auto"), i = y(r, "state", 15, "normal"), s = y(r, "x", 15, 100), l = y(r, "y", 15, 100), g = y(r, "width", 15, 600), w = y(r, "height", 15, 400), x = y(r, "locked", 7, !1), q = y(r, "chromeless", 7, !1), p = y(r, "buttonLayout", 7), k = y(r, "systemButtonPlacement", 7), M = y(r, "sideResizeMode", 7), P = y(r, "borderWidth", 7), S = y(r, "borderRadius", 7), E = y(r, "chromePadding", 7), W = y(r, "chromeStyle", 7), C = y(r, "alignment", 7), I = y(r, "themePreset", 7), R = y(r, "fontPreset", 7), H = y(r, "snapRestoreOnRelease", 7), Y = y(r, "shiftDragAction", 7), O = y(r, "zIndex", 7, 100), b = y(r, "pinned", 7, !1), he = y(r, "dragSeed", 7, null), J = y(r, "restoreFrame", 15, null), re = y(r, "snapTarget", 15, null), le = y(r, "onClose", 7), ve = y(r, "onPinToggle", 7), Te = y(r, "onConsumeDragSeed", 7), je = y(r, "onStateChange", 7), te = y(r, "children", 7);
  const be = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], ke = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), B = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], F = 360, ue = 240, Se = 1400;
  let Pe = /* @__PURE__ */ fe(wt({ ...Oe })), Ue = /* @__PURE__ */ fe(!1), ye = /* @__PURE__ */ fe(!1), _e = /* @__PURE__ */ fe(null), ot = /* @__PURE__ */ fe(null), _t = /* @__PURE__ */ fe(0), Pt = /* @__PURE__ */ fe(0), zt = "", Nt = 0, qt = 0, ft = 0, vt = 0, ct = 0, yt = 0, we = "se", ze = null, Je = !1, N = !1, D = 0.5, Me = 18, L = !1, de = /* @__PURE__ */ fe(null), Le = 0, We = /* @__PURE__ */ fe(null), Ve = /* @__PURE__ */ fe(0), m = /* @__PURE__ */ fe(0);
  Ro(() => {
    const v = requestAnimationFrame(() => {
      $(Ue, !0);
    }), A = hi((X) => {
      $(Pe, { ...X }, !0);
    });
    return () => {
      cancelAnimationFrame(v), A(), nr(), Le && typeof window < "u" && window.clearTimeout(Le);
    };
  });
  let me = /* @__PURE__ */ _(() => p() ?? e(Pe).buttonLayout), $e = /* @__PURE__ */ _(() => k() ?? e(Pe).systemButtonPlacement), K = /* @__PURE__ */ _(() => M() ?? e(Pe).sideResizeMode), it = /* @__PURE__ */ _(() => P() ?? e(Pe).borderWidth), Be = /* @__PURE__ */ _(() => S() ?? e(Pe).borderRadius), bt = /* @__PURE__ */ _(() => E() ?? e(Pe).chromePadding), He = /* @__PURE__ */ _(() => Math.max(28, e(Pe).titleBarHeight ?? Oe.titleBarHeight)), Ze = /* @__PURE__ */ _(() => Math.max(0.75, (e(Pe).windowScale ?? Oe.windowScale) / 100)), gt = /* @__PURE__ */ _(() => W() ?? e(Pe).chromeStyle), Mt = /* @__PURE__ */ _(() => e(Pe).chromeTexture ? e(Pe).chromeBeamStyle : "none"), tr = /* @__PURE__ */ _(() => e(Pe).chromeGlossStyle), Xe = /* @__PURE__ */ _(() => C() ?? e(Pe).alignment), Ct = /* @__PURE__ */ _(() => I() ?? e(Pe).themePreset), Dt = /* @__PURE__ */ _(() => R() ?? e(Pe).fontPreset), $t = /* @__PURE__ */ _(() => H() ?? e(Pe).snapRestoreOnRelease), br = /* @__PURE__ */ _(() => Y() ?? e(Pe).shiftDragAction), Pr = /* @__PURE__ */ _(() => g() < 560 ? "left" : e(Xe)), rr = /* @__PURE__ */ _(() => g() < 520), zr = /* @__PURE__ */ _(() => Ed({
    themePreset: e(Ct),
    titleTone: e(Pe).titleTone
  })), Er = /* @__PURE__ */ _(() => Rd({
    themePreset: e(Ct),
    titleEffect: e(Pe).titleEffect
  })), ta = /* @__PURE__ */ _(() => a().trim().length > 0), yn = /* @__PURE__ */ _(() => o() === "auto" ? e($e) === "left" ? "after" : "before" : o()), Ae = /* @__PURE__ */ _(() => e(Ct) === "aero"), Ht = /* @__PURE__ */ _(() => e(Ct) === "windows-basic"), Ce = /* @__PURE__ */ _(() => e(Ae) || e(Ht)), Gt = /* @__PURE__ */ _(() => e(Ce) || e(Ct) === "windows-vista"), Io = /* @__PURE__ */ _(() => Math.max(e(Ve), e(m)) + (e(rr) ? 12 : 18));
  function eo(v) {
    return ke.has(v);
  }
  function Do(v) {
    switch (v) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function hr(v, A = !1) {
    if (A)
      return v === "mac" || v === "ubuntu" || v === "xubuntu" ? void 0 : "stack";
    switch (v) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function to(v, A = !1) {
    if (A)
      return "stack";
    switch (v) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let Rr = /* @__PURE__ */ fe(!1), An = 0, En = 0, ra = 0, xn = 0, ro = /* @__PURE__ */ _(() => e(Rr) && !q() && !x() && e(me) !== "mac" && typeof window < "u" && e(Pt) <= 84 && Math.abs(e(_t) - window.innerWidth / 2) <= 232), Rn = /* @__PURE__ */ _(() => e(_e) ? aa(e(_e)) : null);
  function cn(v) {
    var A;
    i() !== v && (i(v), (A = je()) == null || A(i()));
  }
  function Vt() {
    return { x: s(), y: l(), width: g(), height: w() };
  }
  function lr(v, A = g()) {
    return typeof window > "u" ? Math.max(0, v) : Math.max(0, Math.min(window.innerWidth - A, v));
  }
  function no(v, A = w()) {
    return typeof window > "u" ? Math.max(0, v) : Math.max(0, Math.min(window.innerHeight - Math.min(A, e(He)), v));
  }
  function Or(v) {
    const A = Math.max(F, Math.round(v.width)), X = Math.max(ue, Math.round(v.height));
    return {
      x: lr(Math.round(v.x), A),
      y: no(Math.round(v.y), X),
      width: A,
      height: X
    };
  }
  function ja() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : Or({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function kn(v) {
    const A = Or(v);
    s(A.x), l(A.y), g(A.width), w(A.height), re(null), cn("normal");
  }
  function na() {
    kn(J() ?? ja());
  }
  function aa(v) {
    if (typeof window > "u") return null;
    const A = window.innerWidth, X = window.innerHeight, ie = Math.round(A / 2), qe = Math.round(X / 2);
    switch (v) {
      case "maximize":
        return { x: 0, y: 0, width: A, height: X };
      case "left-half":
        return { x: 0, y: 0, width: ie, height: X };
      case "right-half":
        return {
          x: A - ie,
          y: 0,
          width: ie,
          height: X
        };
      case "top-left":
        return { x: 0, y: 0, width: ie, height: qe };
      case "top-right":
        return {
          x: A - ie,
          y: 0,
          width: ie,
          height: qe
        };
      case "bottom-left":
        return {
          x: 0,
          y: X - qe,
          width: ie,
          height: qe
        };
      case "bottom-right":
        return {
          x: A - ie,
          y: X - qe,
          width: ie,
          height: qe
        };
    }
  }
  function ur(v, A = Vt()) {
    if (J(Or(A)), v === "maximize") {
      typeof window < "u" && (s(0), l(0), g(window.innerWidth), w(window.innerHeight)), re("maximize"), cn("maximized");
      return;
    }
    const X = aa(v);
    X && (re(v), cn("normal"), s(X.x), l(X.y), g(X.width), w(X.height));
  }
  function ui() {
    typeof window > "u" || ((i() === "maximized" || re()) && na(), s(lr(Math.round((window.innerWidth - g()) / 2), g())), l(no(Math.round((window.innerHeight - w()) / 2), w())));
  }
  function oa() {
    if (i() === "maximized") {
      na();
      return;
    }
    ur("maximize");
  }
  function ao() {
    cn(i() === "rolled-up" ? "normal" : "rolled-up");
  }
  function Pa() {
    cn("minimized");
  }
  function pi() {
    $(de, null), Le && typeof window < "u" && window.clearTimeout(Le), Le = 0;
  }
  function Lo(v) {
    if (typeof window > "u") {
      $(de, v, !0);
      return;
    }
    pi(), $(de, v, !0), Le = window.setTimeout(
      () => {
        $(de, null), Le = 0;
      },
      Se
    );
  }
  function wi() {
    var qe, st;
    if (typeof window > "u" || !e(We))
      return !1;
    const v = 24, A = Math.ceil(Math.max(e(We).scrollWidth, ((qe = e(We).firstElementChild) == null ? void 0 : qe.scrollWidth) ?? 0)), X = Math.ceil(Math.max(e(We).scrollHeight, ((st = e(We).firstElementChild) == null ? void 0 : st.scrollHeight) ?? 0)), ie = Or({
      x: Math.round((window.innerWidth - A) / 2),
      y: Math.round((window.innerHeight - X - e(He)) / 2),
      width: Math.min(window.innerWidth - v * 2, Math.max(F, A + e(it) * 2)),
      height: Math.min(window.innerHeight - v * 2, Math.max(ue, X + e(He) + e(it) * 2))
    });
    return J(Vt()), kn(ie), !0;
  }
  function Bo(v) {
    if (x() || q() || Fo(v.target))
      return;
    if (e(de) === "fit-content") {
      Lo("maximize"), oa();
      return;
    }
    const A = wi();
    Lo(A ? "fit-content" : "maximize"), A || oa();
  }
  function Fo(v) {
    return !!(v != null && v.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function mi(v, A) {
    if (!e(ot)) return null;
    for (const X of e(ot).querySelectorAll("[data-snap-target]")) {
      const ie = X.getBoundingClientRect();
      if (v >= ie.left && v <= ie.right && A >= ie.top && A <= ie.bottom)
        return X.dataset.snapTarget;
    }
    return null;
  }
  function fi(v, A) {
    if (typeof window > "u") return null;
    const X = 18, ie = Math.max(72, Math.round(window.innerHeight * 0.14));
    return A <= X ? v <= window.innerWidth * 0.33 ? "top-left" : v >= window.innerWidth * 0.67 ? "top-right" : "maximize" : v <= X ? A <= ie ? "top-left" : A >= window.innerHeight - ie ? "bottom-left" : "left-half" : v >= window.innerWidth - X ? A <= ie ? "top-right" : A >= window.innerHeight - ie ? "bottom-right" : "right-half" : null;
  }
  function bi(v, A) {
    if ($(_t, v, !0), $(Pt, A, !0), !e(Rr) || x() || q() || e(me) === "mac") {
      $(_e, null);
      return;
    }
    $(_e, mi(v, A) ?? fi(v, A), !0);
  }
  function ut(v, A) {
    if (!N) return;
    const X = J() ?? ja(), ie = Or({
      ...X,
      x: v - X.width * D,
      y: A - Me
    });
    s(ie.x), l(ie.y), g(ie.width), w(ie.height), cn("normal"), re(null), N = !1, Je = !0, An = v, En = A, ra = s(), xn = l();
  }
  function Qe(v) {
    !v.shiftKey || L || e(br) !== "pin" || !ve() || b() || (ve()(), L = !0);
  }
  function yr(v) {
    if (x() || q() || i() === "minimized" || Fo(v.target)) return;
    $(Rr, !0), L = !1, $(_e, null), $(_t, v.clientX, !0), $(Pt, v.clientY, !0), An = v.clientX, En = v.clientY, ra = s(), xn = l(), Je = !1, N = !1;
    const A = Vt();
    D = A.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (v.clientX - A.x) / A.width)), Me = Math.max(12, Math.min(28, Math.round(v.clientY - A.y || 18))), i() === "maximized" || re() ? (ze = i() === "maximized" ? "maximize" : re(), J(J() ?? ja()), N = !0) : ze = null, Qe(v), v.currentTarget.setPointerCapture(v.pointerId);
  }
  function xr(v) {
    e(Rr) && (Qe(v), N && (Math.abs(v.clientX - An) > 2 || Math.abs(v.clientY - En) > 2) && ut(v.clientX, v.clientY), s(lr(ra + (v.clientX - An), g())), l(no(xn + (v.clientY - En), w())), bi(v.clientX, v.clientY));
  }
  function Yt(v) {
    if (!e(Rr)) return;
    const A = e(_e);
    $(_e, null), $(Rr, !1), N = !1, A ? ur(A, Vt()) : Je && ze && e($t) && !v.shiftKey && !L ? ur(ze, Vt()) : re(null), ze = null, Je = !1, L = !1;
    const X = v.currentTarget;
    "hasPointerCapture" in X && X.hasPointerCapture(v.pointerId) && X.releasePointerCapture(v.pointerId), window.removeEventListener("pointermove", xr), window.removeEventListener("pointerup", Yt), window.removeEventListener("pointercancel", Yt);
  }
  function pr(v, A) {
    x() || q() || i() === "maximized" || i() === "minimized" || (re() && re(null), A.stopPropagation(), A.preventDefault(), $(ye, !0), we = v, Nt = A.clientX, qt = A.clientY, ft = s(), vt = l(), ct = g(), yt = w(), $(_e, null), window.addEventListener("pointermove", oo), window.addEventListener("pointerup", nr), window.addEventListener("pointercancel", nr));
  }
  function oo(v) {
    if (!e(ye)) return;
    const A = v.clientX - Nt, X = v.clientY - qt;
    let ie = ft, qe = vt, st = ct, At = yt;
    if (e(K) === "mirrored" && (we === "e" || we === "w")) {
      const or = we === "e" ? A : -A;
      st = Math.max(F, ct + or * 2), ie = ft - (st - ct) / 2;
    } else we.includes("e") && (st = Math.max(F, ct + A));
    we.includes("s") && (At = Math.max(ue, yt + X)), e(K) !== "mirrored" && we.includes("w") && (st = Math.max(F, ct - A), ie = ft + (ct - st)), we.includes("n") && (At = Math.max(ue, yt - X), qe = vt + (yt - At));
    const Xt = Or({ x: ie, y: qe, width: st, height: At });
    s(Xt.x), l(Xt.y), g(Xt.width), w(Xt.height);
  }
  function nr() {
    e(ye) && ($(ye, !1), window.removeEventListener("pointermove", oo), window.removeEventListener("pointerup", nr), window.removeEventListener("pointercancel", nr));
  }
  function Ut(v) {
    var X;
    if (typeof window > "u") return;
    const A = Or({
      x: v.clientX - Math.round(g() * 0.38),
      y: v.clientY - 18,
      width: g(),
      height: w()
    });
    s(A.x), l(A.y), ra = s(), xn = l(), An = v.clientX, En = v.clientY, $(_t, v.clientX, !0), $(Pt, v.clientY, !0), $(_e, null), ze = null, Je = !1, N = !1, L = !0, $(Rr, !0), window.addEventListener("pointermove", xr), window.addEventListener("pointerup", Yt), window.addEventListener("pointercancel", Yt), (X = Te()) == null || X();
  }
  mn(() => {
    const v = he() ? `${he().pointerId}:${he().clientX}:${he().clientY}` : "";
    !he() || v === zt || (zt = v, Ut(he()));
  }), mn(() => {
    i() === "maximized" && re() !== "maximize" && re("maximize"), i() === "normal" && re() === "maximize" && re(null);
  });
  var kr = {
    get title() {
      return n();
    },
    set title(v) {
      n(v), f();
    },
    get helpText() {
      return a();
    },
    set helpText(v = "") {
      a(v), f();
    },
    get helpPlacement() {
      return o();
    },
    set helpPlacement(v = "auto") {
      o(v), f();
    },
    get state() {
      return i();
    },
    set state(v = "normal") {
      i(v), f();
    },
    get x() {
      return s();
    },
    set x(v = 100) {
      s(v), f();
    },
    get y() {
      return l();
    },
    set y(v = 100) {
      l(v), f();
    },
    get width() {
      return g();
    },
    set width(v = 600) {
      g(v), f();
    },
    get height() {
      return w();
    },
    set height(v = 400) {
      w(v), f();
    },
    get locked() {
      return x();
    },
    set locked(v = !1) {
      x(v), f();
    },
    get chromeless() {
      return q();
    },
    set chromeless(v = !1) {
      q(v), f();
    },
    get buttonLayout() {
      return p();
    },
    set buttonLayout(v) {
      p(v), f();
    },
    get systemButtonPlacement() {
      return k();
    },
    set systemButtonPlacement(v) {
      k(v), f();
    },
    get sideResizeMode() {
      return M();
    },
    set sideResizeMode(v) {
      M(v), f();
    },
    get borderWidth() {
      return P();
    },
    set borderWidth(v) {
      P(v), f();
    },
    get borderRadius() {
      return S();
    },
    set borderRadius(v) {
      S(v), f();
    },
    get chromePadding() {
      return E();
    },
    set chromePadding(v) {
      E(v), f();
    },
    get chromeStyle() {
      return W();
    },
    set chromeStyle(v) {
      W(v), f();
    },
    get alignment() {
      return C();
    },
    set alignment(v) {
      C(v), f();
    },
    get themePreset() {
      return I();
    },
    set themePreset(v) {
      I(v), f();
    },
    get fontPreset() {
      return R();
    },
    set fontPreset(v) {
      R(v), f();
    },
    get snapRestoreOnRelease() {
      return H();
    },
    set snapRestoreOnRelease(v) {
      H(v), f();
    },
    get shiftDragAction() {
      return Y();
    },
    set shiftDragAction(v) {
      Y(v), f();
    },
    get zIndex() {
      return O();
    },
    set zIndex(v = 100) {
      O(v), f();
    },
    get pinned() {
      return b();
    },
    set pinned(v = !1) {
      b(v), f();
    },
    get dragSeed() {
      return he();
    },
    set dragSeed(v = null) {
      he(v), f();
    },
    get restoreFrame() {
      return J();
    },
    set restoreFrame(v = null) {
      J(v), f();
    },
    get snapTarget() {
      return re();
    },
    set snapTarget(v = null) {
      re(v), f();
    },
    get onClose() {
      return le();
    },
    set onClose(v) {
      le(v), f();
    },
    get onPinToggle() {
      return ve();
    },
    set onPinToggle(v) {
      ve(v), f();
    },
    get onConsumeDragSeed() {
      return Te();
    },
    set onConsumeDragSeed(v) {
      Te(v), f();
    },
    get onStateChange() {
      return je();
    },
    set onStateChange(v) {
      je(v), f();
    },
    get children() {
      return te();
    },
    set children(v) {
      te(v), f();
    }
  }, On = Tp(), za = Zt(On);
  {
    var ia = (v) => {
      var A = wp();
      let X;
      pe(() => X = $r(A, "", X, {
        left: `${e(Rn).x}px`,
        top: `${e(Rn).y}px`,
        width: `${e(Rn).width}px`,
        height: `${e(Rn).height}px`,
        "z-index": O() + 2
      })), V(v, A);
    };
    ce(za, (v) => {
      e(Rn) && !q() && v(ia);
    });
  }
  var sa = d(za, 2);
  {
    var Ma = (v) => {
      var A = fp();
      let X;
      Lt(A, 21, () => be, (ie) => ie.id, (ie, qe) => {
        var st = mp();
        let At;
        var Xt = ge(st);
        pe(() => {
          At = se(st, 1, "snap-cell svelte-1k3ojqh", null, At, { "is-active": e(_e) === e(qe).id }), z(st, "data-snap-target", e(qe).id), se(Xt, 1, `snap-shape shape-${e(qe).preview}`, "svelte-1k3ojqh");
        }), V(ie, st);
      }), h(A), ci(A, (ie) => $(ot, ie), () => e(ot)), pe(() => X = $r(A, "", X, { "z-index": O() + 3 })), V(v, A);
    };
    ce(sa, (v) => {
      e(ro) && !q() && v(Ma);
    });
  }
  var ar = d(sa, 2);
  let _n, In;
  var Dn = u(ar);
  {
    var No = (v) => {
      var A = _p();
      let X;
      var ie = u(A), qe = u(ie);
      {
        var st = (pt) => {
          var xt = Dl();
          let ht;
          var wr = u(xt);
          tt(wr, { name: "pin" }), h(xt), pe(() => {
            ht = se(xt, 1, Wt(e(Ae) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", ht, {
              "efs-win7-tool-button": !e(Ae) && e(Ce),
              "is-active": b(),
              active: b()
            }), z(xt, "aria-label", b() ? "Unpin window" : "Pin window"), z(xt, "aria-pressed", b());
          }), ae("click", xt, function(...ir) {
            var _r;
            (_r = ve()) == null || _r.apply(this, ir);
          }), V(pt, xt);
        };
        ce(qe, (pt) => {
          ve() && pt(st);
        });
      }
      var At = d(qe, 2);
      let Xt;
      var or = u(At);
      tt(or, { name: "center" }), h(At);
      var qn = d(At, 2);
      let io;
      var la = u(qn);
      {
        let pt = /* @__PURE__ */ _(() => i() === "rolled-up" ? "roll-up" : "roll-down");
        tt(la, {
          get name() {
            return e(pt);
          }
        });
      }
      h(qn), h(ie);
      var Ln = d(ie, 2);
      let so;
      var Ho = ge(Ln, !0), da = d(Ln, 2), ca = u(da);
      {
        var lo = (pt) => {
          var xt = bp(), ht = u(xt);
          let wr;
          var ir = u(ht);
          tt(ir, { name: "help" }), h(ht);
          var _r = d(ht, 2), Kt = u(_r), Ir = ge(Kt, !0), Mr = d(Kt, 2), Vr = ge(Mr, !0);
          h(_r), h(xt), pe(() => {
            wr = se(
              ht,
              1,
              Wt(e(Ae) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              wr,
              {
                "efs-win7-tool-button": !e(Ae) && e(Ce),
                "is-help": !e(Ae) && e(Ce)
              }
            ), z(ht, "aria-label", e(Gt) ? "Help" : `About ${n()}`), z(ht, "title", `About ${n()}`), oe(Ir, n()), oe(Vr, a());
          }), V(pt, xt);
        };
        ce(ca, (pt) => {
          e(ta) && e(yn) === "before" && pt(lo);
        });
      }
      var ga = d(ca, 2);
      let Zr;
      var Wa = u(ga);
      {
        var co = (pt) => {
          var xt = yp(), ht = Zt(xt);
          {
            var wr = (St) => {
              var jt = Dl();
              let dr;
              var va = u(jt);
              {
                var Fn = (cr) => {
                  {
                    let Ur = /* @__PURE__ */ _(() => Do(e(me)));
                    tt(cr, {
                      name: "close",
                      get variant() {
                        return e(Ur);
                      }
                    });
                  }
                };
                ce(va, (cr) => {
                  e(Ce) || cr(Fn);
                });
              }
              h(jt), pe(() => {
                dr = se(
                  jt,
                  1,
                  Wt(e(Ae) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  dr,
                  {
                    "is-close": !e(Ae) && e(Gt)
                  }
                ), z(jt, "aria-label", e(Ce) ? "Close" : "Close window");
              }), ae("click", jt, function(...cr) {
                var Ur;
                (Ur = le()) == null || Ur.apply(this, cr);
              }), V(St, jt);
            };
            ce(ht, (St) => {
              le() && St(wr);
            });
          }
          var ir = d(ht, 2);
          let _r;
          var Kt = u(ir);
          {
            var Ir = (St) => {
              {
                let jt = /* @__PURE__ */ _(() => i() === "minimized" ? "restore" : "minimize"), dr = /* @__PURE__ */ _(() => hr(e(me), i() === "minimized"));
                tt(St, {
                  get name() {
                    return e(jt);
                  },
                  get variant() {
                    return e(dr);
                  }
                });
              }
            };
            ce(Kt, (St) => {
              e(Ce) || St(Ir);
            });
          }
          h(ir);
          var Mr = d(ir, 2);
          let Vr;
          var Yr = u(Mr);
          {
            var Bn = (St) => {
              {
                let jt = /* @__PURE__ */ _(() => i() === "maximized" ? "restore" : "maximize"), dr = /* @__PURE__ */ _(() => to(e(me), i() === "maximized"));
                tt(St, {
                  get name() {
                    return e(jt);
                  },
                  get variant() {
                    return e(dr);
                  }
                });
              }
            };
            ce(Yr, (St) => {
              e(Ce) || St(Bn);
            });
          }
          h(Mr), pe(() => {
            _r = se(
              ir,
              1,
              Wt(e(Ae) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              _r,
              {
                "is-minimize": !e(Ae) && e(Gt) && i() !== "minimized",
                "is-restore": !e(Ae) && e(Gt) && i() === "minimized"
              }
            ), z(ir, "aria-label", e(Ce) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), Vr = se(
              Mr,
              1,
              Wt(e(Ae) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Vr,
              {
                "is-maximize": !e(Ae) && e(Gt) && i() !== "maximized",
                "is-restore": !e(Ae) && e(Gt) && i() === "maximized"
              }
            ), z(Mr, "aria-label", e(Ce) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), ae("click", ir, () => i() === "minimized" ? cn("normal") : Pa()), ae("click", Mr, oa), V(pt, xt);
        }, go = /* @__PURE__ */ _(() => eo(e(me))), Ca = (pt) => {
          var xt = xp(), ht = Zt(xt);
          let wr;
          var ir = u(ht);
          {
            var _r = (St) => {
              {
                let jt = /* @__PURE__ */ _(() => i() === "minimized" ? "restore" : "minimize"), dr = /* @__PURE__ */ _(() => hr(e(me), i() === "minimized"));
                tt(St, {
                  get name() {
                    return e(jt);
                  },
                  get variant() {
                    return e(dr);
                  }
                });
              }
            };
            ce(ir, (St) => {
              e(Ce) || St(_r);
            });
          }
          h(ht);
          var Kt = d(ht, 2);
          let Ir;
          var Mr = u(Kt);
          {
            var Vr = (St) => {
              {
                let jt = /* @__PURE__ */ _(() => i() === "maximized" ? "restore" : "maximize"), dr = /* @__PURE__ */ _(() => to(e(me), i() === "maximized"));
                tt(St, {
                  get name() {
                    return e(jt);
                  },
                  get variant() {
                    return e(dr);
                  }
                });
              }
            };
            ce(Mr, (St) => {
              e(Ce) || St(Vr);
            });
          }
          h(Kt);
          var Yr = d(Kt, 2);
          {
            var Bn = (St) => {
              var jt = Dl();
              let dr;
              var va = u(jt);
              {
                var Fn = (cr) => {
                  {
                    let Ur = /* @__PURE__ */ _(() => Do(e(me)));
                    tt(cr, {
                      name: "close",
                      get variant() {
                        return e(Ur);
                      }
                    });
                  }
                };
                ce(va, (cr) => {
                  e(Ce) || cr(Fn);
                });
              }
              h(jt), pe(() => {
                dr = se(
                  jt,
                  1,
                  Wt(e(Ae) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  dr,
                  {
                    "is-close": !e(Ae) && e(Gt)
                  }
                ), z(jt, "aria-label", e(Ce) ? "Close" : "Close window");
              }), ae("click", jt, function(...cr) {
                var Ur;
                (Ur = le()) == null || Ur.apply(this, cr);
              }), V(St, jt);
            };
            ce(Yr, (St) => {
              le() && St(Bn);
            });
          }
          pe(() => {
            wr = se(
              ht,
              1,
              Wt(e(Ae) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              wr,
              {
                "is-minimize": !e(Ae) && e(Gt) && i() !== "minimized",
                "is-restore": !e(Ae) && e(Gt) && i() === "minimized"
              }
            ), z(ht, "aria-label", e(Ce) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), Ir = se(
              Kt,
              1,
              Wt(e(Ae) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Ir,
              {
                "is-maximize": !e(Ae) && e(Gt) && i() !== "maximized",
                "is-restore": !e(Ae) && e(Gt) && i() === "maximized"
              }
            ), z(Kt, "aria-label", e(Ce) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), ae("click", ht, () => i() === "minimized" ? cn("normal") : Pa()), ae("click", Kt, oa), V(pt, xt);
        };
        ce(Wa, (pt) => {
          e(go) ? pt(co) : pt(Ca, -1);
        });
      }
      h(ga);
      var vo = d(ga, 2);
      {
        var ho = (pt) => {
          var xt = kp(), ht = u(xt);
          let wr;
          var ir = u(ht);
          tt(ir, { name: "help" }), h(ht);
          var _r = d(ht, 2), Kt = u(_r), Ir = ge(Kt, !0), Mr = d(Kt, 2), Vr = ge(Mr, !0);
          h(_r), h(xt), pe(() => {
            wr = se(
              ht,
              1,
              Wt(e(Ae) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              wr,
              {
                "efs-win7-tool-button": !e(Ae) && e(Ce),
                "is-help": !e(Ae) && e(Ce)
              }
            ), z(ht, "aria-label", e(Gt) ? "Help" : `About ${n()}`), z(ht, "title", `About ${n()}`), oe(Ir, n()), oe(Vr, a());
          }), V(pt, xt);
        };
        ce(vo, (pt) => {
          e(ta) && e(yn) === "after" && pt(ho);
        });
      }
      h(da), h(A), pe(
        (pt, xt) => {
          X = se(
            A,
            1,
            Wt(e(Ae) ? "title-bar" : `window-chrome chrome-${e(gt)}`),
            "svelte-1k3ojqh",
            X,
            {
              "layout-mac": pt,
              "layout-windows": xt,
              "title-bar": !e(Ae) && e(Gt)
            }
          ), z(A, "aria-label", `${n()} window controls`), Xt = se(At, 1, Wt(e(Ae) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Xt, {
            "efs-win7-tool-button": !e(Ae) && e(Ce)
          }), io = se(qn, 1, Wt(e(Ae) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", io, {
            "efs-win7-tool-button": !e(Ae) && e(Ce),
            "is-active": i() === "rolled-up",
            active: i() === "rolled-up"
          }), z(qn, "aria-label", i() === "rolled-up" ? "Restore height" : "Roll up"), so = se(
            Ln,
            1,
            Wt(e(Ae) ? "title-bar-text" : `window-title align-${e(Pr)}`),
            "svelte-1k3ojqh",
            so,
            {
              "title-bar-text": !e(Ae) && e(Gt)
            }
          ), z(Ln, "title", n()), oe(Ho, n()), Zr = se(
            ga,
            1,
            Wt(e(Ae) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            Zr,
            {
              "title-bar-controls": !e(Ae) && e(Gt)
            }
          );
        },
        [
          () => !e(Ae) && eo(e(me)),
          () => !e(Ae) && !eo(e(me))
        ]
      ), ae("pointerdown", A, yr), ae("pointermove", A, xr), ae("pointerup", A, Yt), zo("pointercancel", A, Yt), ae("dblclick", A, Bo), ae("click", At, ui), ae("click", qn, ao), qc(ie, "clientWidth", (pt) => $(Ve, pt)), qc(da, "clientWidth", (pt) => $(m, pt)), V(v, A);
    };
    ce(Dn, (v) => {
      q() || v(No);
    });
  }
  var c = d(Dn, 2);
  {
    var j = (v) => {
      var A = qp();
      let X;
      var ie = u(A);
      Ua(ie, () => te() ?? $o), h(A), ci(A, (qe) => $(We, qe), () => e(We)), pe(() => X = se(A, 1, "window-content svelte-1k3ojqh", null, X, { "window-body": e(Ce) })), V(v, A);
    };
    ce(c, (v) => {
      i() !== "rolled-up" && i() !== "minimized" && v(j);
    });
  }
  var Z = d(c, 2);
  {
    var xe = (v) => {
      var A = qa(), X = Zt(A);
      Lt(X, 16, () => B, (ie) => ie, (ie, qe) => {
        var st = Sp();
        pe(() => se(st, 1, `resize-handle dir-${qe}`, "svelte-1k3ojqh")), ae("pointerdown", st, (At) => pr(qe, At)), V(ie, st);
      }), V(v, A);
    };
    ce(Z, (v) => {
      !q() && i() !== "maximized" && i() !== "minimized" && v(xe);
    });
  }
  return h(ar), pe(() => {
    _n = se(ar, 1, "window-shell svelte-1k3ojqh", null, _n, {
      win7: e(Ce),
      "win7-theme": e(Ae),
      "basic7-theme": e(Ht),
      window: e(Ce),
      active: e(Ce),
      glass: e(Ae),
      "is-ready": e(Ue),
      "is-dragging": e(Rr),
      "is-resizing": e(ye),
      "compact-controls": e(rr),
      maximized: i() === "maximized",
      minimized: i() === "minimized",
      "rolled-up": i() === "rolled-up",
      chromeless: q()
    }), z(ar, "data-layout", e(Ae) ? void 0 : e(me)), z(ar, "data-system-placement", e($e)), z(ar, "data-style", e(Ae) ? void 0 : e(gt)), z(ar, "data-theme", e(Ct)), z(ar, "data-font", e(Dt)), z(ar, "data-beam", e(Ae) ? void 0 : e(Mt)), z(ar, "data-gloss", e(Ae) ? void 0 : e(tr)), z(ar, "data-title-tone", e(Ae) ? void 0 : e(zr)), z(ar, "data-title-effect", e(Ae) ? void 0 : e(Er)), In = $r(ar, "", In, {
      "--window-border-width": `${e(it)}px`,
      "--window-radius": `${e(Be)}px`,
      "--window-chrome-padding": `${e(bt)}px`,
      "--window-titlebar-height": `${e(He)}px`,
      "--window-shell-scale": `${e(Ze)}`,
      "--window-title-guard": `${e(Io)}px`,
      transform: i() === "normal" || i() === "rolled-up" ? `translate(${s()}px, ${l()}px)` : void 0,
      width: i() === "normal" || i() === "rolled-up" ? `${g()}px` : void 0,
      height: i() === "normal" ? `${w()}px` : void 0,
      "z-index": O()
    });
  }), V(t, On), It(kr);
}
ln([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Ft(
  Zg,
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
var Pp = /* @__PURE__ */ ee('<button type="button"></button>'), zp = /* @__PURE__ */ ee('<div class="widget-window-content svelte-k2j6ru"><!></div>'), Mp = /* @__PURE__ */ ee('<!> <div role="presentation"><!></div>', 1);
const Wp = {
  hash: "svelte-k2j6ru",
  code: `.widget-window-backdrop.svelte-k2j6ru {position:fixed;inset:0;border:0;padding:0;background:radial-gradient(\r
        circle at top,\r
        color-mix(in srgb, var(--shell-primary, #ffffff), transparent 88%),\r
        transparent 28%\r
      ),\r
      color-mix(in srgb, var(--shell-panel, rgba(2, 6, 23, 0.6)), rgba(2, 6, 23, 0.56) 52%);backdrop-filter:blur(10px);cursor:default;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-backdrop.ready.svelte-k2j6ru {opacity:1;}.widget-window-layer.svelte-k2j6ru {position:relative;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-layer.ready.svelte-k2j6ru {opacity:1;}.widget-window-content.svelte-k2j6ru {width:100%;min-width:0;min-height:0;box-sizing:border-box;padding:1rem;background:transparent;}\r
\r
  @media (max-width: 47.99rem) {.widget-window-content.svelte-k2j6ru {padding:0.75rem;}\r
  }`
};
function gn(t, r) {
  Ot(r, !0), Bt(t, Wp);
  function n(B, F, ue, Se) {
    return { x: B, y: F, width: ue, height: Se };
  }
  let a = y(r, "title", 7), o = y(r, "helpText", 7, ""), i = y(r, "helpPlacement", 7, "auto"), s = y(r, "pinned", 7), l = y(r, "windowState", 15, "normal"), g = y(r, "dragSeed", 7, null), w = y(r, "frame", 15, null), x = y(r, "restoreFrame", 15, null), q = y(r, "snapTarget", 15, null), p = y(r, "defaultWidth", 7), k = y(r, "defaultHeight", 7), M = y(r, "defaultX", 7), P = y(r, "defaultY", 7), S = y(r, "zIndex", 7), E = y(r, "onClose", 7), W = y(r, "onFocus", 7), C = y(r, "onPinToggle", 7), I = y(r, "onConsumeDragSeed", 7), R = y(r, "children", 7);
  const H = () => n(M(), P(), p(), k());
  let Y = /* @__PURE__ */ fe(null), O = /* @__PURE__ */ fe(!1), b = /* @__PURE__ */ fe(!1), he = /* @__PURE__ */ fe(wt(Oe.titleBarHeight));
  mn(() => {
    w() == null && w(H());
  });
  async function J() {
    var _e, ot;
    if (e(O) || typeof window > "u" || (await Tg(), !e(Y)))
      return;
    const B = 40, F = Math.max(420, window.innerWidth - B * 2), ue = Math.max(300, window.innerHeight - B * 2), Se = Math.ceil(Math.max(e(Y).scrollWidth, ((_e = e(Y).firstElementChild) == null ? void 0 : _e.scrollWidth) ?? 0) + 6), Pe = Math.ceil(Math.max(e(Y).scrollHeight, ((ot = e(Y).firstElementChild) == null ? void 0 : ot.scrollHeight) ?? 0) + e(he)), Ue = Math.min(F, Math.max(420, Se)), ye = Math.min(ue, Math.max(300, Pe));
    w({
      width: Ue,
      height: ye,
      x: Math.max(B / 2, Math.round((window.innerWidth - Ue) / 2)),
      y: Math.max(B / 2, Math.round((window.innerHeight - ye) / 2))
    }), $(O, !0);
  }
  Ro(() => {
    const B = requestAnimationFrame(() => {
      g() ? $(O, !0) : J(), $(b, !0);
    }), F = hi((ue) => {
      $(he, ue.titleBarHeight ?? Oe.titleBarHeight, !0);
    });
    return () => {
      cancelAnimationFrame(B), F();
    };
  });
  var re = {
    get title() {
      return a();
    },
    set title(B) {
      a(B), f();
    },
    get helpText() {
      return o();
    },
    set helpText(B = "") {
      o(B), f();
    },
    get helpPlacement() {
      return i();
    },
    set helpPlacement(B = "auto") {
      i(B), f();
    },
    get pinned() {
      return s();
    },
    set pinned(B) {
      s(B), f();
    },
    get windowState() {
      return l();
    },
    set windowState(B = "normal") {
      l(B), f();
    },
    get dragSeed() {
      return g();
    },
    set dragSeed(B = null) {
      g(B), f();
    },
    get frame() {
      return w();
    },
    set frame(B = null) {
      w(B), f();
    },
    get restoreFrame() {
      return x();
    },
    set restoreFrame(B = null) {
      x(B), f();
    },
    get snapTarget() {
      return q();
    },
    set snapTarget(B = null) {
      q(B), f();
    },
    get defaultWidth() {
      return p();
    },
    set defaultWidth(B) {
      p(B), f();
    },
    get defaultHeight() {
      return k();
    },
    set defaultHeight(B) {
      k(B), f();
    },
    get defaultX() {
      return M();
    },
    set defaultX(B) {
      M(B), f();
    },
    get defaultY() {
      return P();
    },
    set defaultY(B) {
      P(B), f();
    },
    get zIndex() {
      return S();
    },
    set zIndex(B) {
      S(B), f();
    },
    get onClose() {
      return E();
    },
    set onClose(B) {
      E(B), f();
    },
    get onFocus() {
      return W();
    },
    set onFocus(B) {
      W(B), f();
    },
    get onPinToggle() {
      return C();
    },
    set onPinToggle(B) {
      C(B), f();
    },
    get onConsumeDragSeed() {
      return I();
    },
    set onConsumeDragSeed(B) {
      I(B), f();
    },
    get children() {
      return R();
    },
    set children(B) {
      R(B), f();
    }
  }, le = Mp(), ve = Zt(le);
  {
    var Te = (B) => {
      var F = Pp();
      let ue, Se;
      pe(() => {
        ue = se(F, 1, "widget-window-backdrop svelte-k2j6ru", null, ue, { ready: e(b) }), z(F, "aria-label", `Close ${a()}`), Se = $r(F, "", Se, { "z-index": S() - 1 });
      }), ae("click", F, function(...Pe) {
        var Ue;
        (Ue = E()) == null || Ue.apply(this, Pe);
      }), V(B, F);
    };
    ce(ve, (B) => {
      !s() && l() !== "minimized" && B(Te);
    });
  }
  var je = d(ve, 2);
  let te;
  var be = u(je);
  {
    var ke = (B) => {
      Zg(B, {
        get title() {
          return a();
        },
        get helpText() {
          return o();
        },
        get helpPlacement() {
          return i();
        },
        get pinned() {
          return s();
        },
        get zIndex() {
          return S();
        },
        get dragSeed() {
          return g();
        },
        get onClose() {
          return E();
        },
        get onConsumeDragSeed() {
          return I();
        },
        get onPinToggle() {
          return C();
        },
        get state() {
          return l();
        },
        set state(F) {
          l(F);
        },
        get x() {
          return w().x;
        },
        set x(F) {
          w(w().x = F, !0);
        },
        get y() {
          return w().y;
        },
        set y(F) {
          w(w().y = F, !0);
        },
        get width() {
          return w().width;
        },
        set width(F) {
          w(w().width = F, !0);
        },
        get height() {
          return w().height;
        },
        set height(F) {
          w(w().height = F, !0);
        },
        get restoreFrame() {
          return x();
        },
        set restoreFrame(F) {
          x(F);
        },
        get snapTarget() {
          return q();
        },
        set snapTarget(F) {
          q(F);
        },
        children: (F, ue) => {
          var Se = zp(), Pe = u(Se);
          Ua(Pe, () => R() ?? $o), h(Se), ci(Se, (Ue) => $(Y, Ue), () => e(Y)), V(F, Se);
        },
        $$slots: { default: !0 }
      });
    };
    ce(be, (B) => {
      w() && B(ke);
    });
  }
  return h(je), pe(() => te = se(je, 1, "widget-window-layer svelte-k2j6ru", null, te, { ready: e(b) })), ae("pointerdown", je, function(...B) {
    var F;
    (F = W()) == null || F.apply(this, B);
  }), V(t, le), It(re);
}
ln(["click", "pointerdown"]);
Ft(
  gn,
  {
    title: {},
    helpText: {},
    helpPlacement: {},
    pinned: {},
    windowState: {},
    dragSeed: {},
    frame: {},
    restoreFrame: {},
    snapTarget: {},
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
var Cp = /* @__PURE__ */ ee('<div class="workspace-placeholder-slot svelte-xhbaig" role="presentation" aria-hidden="true"><div class="workspace-placeholder svelte-xhbaig"><span class="workspace-placeholder-label svelte-xhbaig"> </span></div></div>'), $p = /* @__PURE__ */ ee('<div role="presentation" aria-hidden="true"></div>'), Ap = /* @__PURE__ */ ee('<!> <div role="presentation"><div class="workspace-surface svelte-xhbaig" role="presentation"><!> <!></div></div>', 1);
const Ep = {
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
function vn(t, r) {
  Ot(r, !0), Bt(t, Ep);
  const n = 12, a = 24, o = 3, i = 8;
  let s = y(r, "title", 7), l = y(r, "layout", 7), g = y(r, "canvasWidth", 7), w = y(r, "compact", 7, !1), x = y(r, "editable", 7, !1), q = y(r, "zIndex", 7, 1), p = y(r, "onChange", 7), k = y(r, "onPreviewChange", 7), M = y(r, "onShiftPopoutStart", 7), P = y(r, "onFocus", 7), S = y(r, "children", 7), E = /* @__PURE__ */ fe(null), W = /* @__PURE__ */ fe(!1), C = /* @__PURE__ */ fe(!1), I = /* @__PURE__ */ fe(null), R = /* @__PURE__ */ fe(wt({ x: 0, y: 0, width: 0, height: 0 })), H = 0, Y = 0, O = 0, b = 0, he = {
    col: 1,
    row: 1,
    width: o,
    height: i
  }, J = {
    col: 1,
    row: 1,
    width: o,
    height: i
  }, re = { x: 0, y: 0, width: 0, height: 0 }, le = { x: 0, y: 0, width: 0, height: 0 }, ve = "se", Te = /* @__PURE__ */ _(() => e(W) || e(C)), je = /* @__PURE__ */ _(() => e(I) ?? l());
  function te(L) {
    return g() <= 0 ? 0 : Math.round(L / (g() / n));
  }
  function be(L) {
    return Math.round(L / a);
  }
  function ke(L, de) {
    return Math.max(1, Math.min(n - de + 1, L));
  }
  function B() {
    var de;
    const L = (de = e(E)) == null ? void 0 : de.getBoundingClientRect();
    return L ? {
      x: L.left,
      y: L.top,
      width: L.width,
      height: L.height
    } : { x: 0, y: 0, width: 0, height: 0 };
  }
  function F() {
    return g() <= 0 ? 240 : Math.max(240, g() / n * o);
  }
  function ue() {
    return a * i;
  }
  function Se(L) {
    return !!(L != null && L.closest('button, a, input, select, textarea, label, [role="button"], [contenteditable="true"]'));
  }
  function Pe(L) {
    return !!(L != null && L.closest(".widget-header"));
  }
  function Ue(L) {
    var de;
    $(I, L, !0), (de = k()) == null || de(L);
  }
  function ye() {
    var L;
    $(I, null), (L = k()) == null || L(null);
  }
  function _e(L) {
    var Le, We, Ve;
    if (!w() && L.shiftKey && L.button === 0 && !Se(L.target) && Pe(L.target)) {
      (Le = P()) == null || Le(), (We = M()) == null || We({
        pointerId: L.pointerId,
        clientX: L.clientX,
        clientY: L.clientY
      }), L.preventDefault(), L.stopPropagation();
      return;
    }
    if (w() || !x() || L.button !== 0 || Se(L.target) || !Pe(L.target))
      return;
    $(W, !0), H = L.clientX, Y = L.clientY, he = { ...l() }, re = B(), $(R, { ...re }, !0), Ue({ ...l() }), L.currentTarget.setPointerCapture(L.pointerId), (Ve = P()) == null || Ve(), L.preventDefault(), L.stopPropagation();
  }
  function ot(L) {
    if (!e(W)) return;
    const de = he.width, Le = {
      ...he,
      col: ke(he.col + te(L.clientX - H), de),
      row: Math.max(1, he.row + be(L.clientY - Y))
    };
    $(
      R,
      {
        ...re,
        x: re.x + (L.clientX - H),
        y: re.y + (L.clientY - Y)
      },
      !0
    ), Ue(Le);
  }
  function _t(L) {
    if (!e(W)) return;
    $(W, !1), L.currentTarget.releasePointerCapture(L.pointerId), e(I) && p()(e(I)), ye();
  }
  function Pt(L, de) {
    var We;
    if (w() || !x() || de.button !== 0) return;
    $(C, !0), ve = L, O = de.clientX, b = de.clientY, J = { ...l() }, le = B(), $(R, { ...le }, !0), Ue({ ...l() }), de.currentTarget.setPointerCapture(de.pointerId), (We = P()) == null || We(), de.preventDefault(), de.stopPropagation();
  }
  function zt(L) {
    if (!e(C)) return;
    const de = te(L.clientX - O), Le = be(L.clientY - b);
    let We = J.col, Ve = J.row, m = J.width, me = J.height;
    ve.includes("e") && (m = Math.max(o, Math.min(n - J.col + 1, J.width + de))), ve.includes("s") && (me = Math.max(i, J.height + Le)), ve.includes("w") && (We = Math.max(1, Math.min(J.col + de, J.col + J.width - o)), m = J.width + (J.col - We)), ve.includes("n") && (Ve = Math.max(1, Math.min(J.row + Le, J.row + J.height - i)), me = J.height + (J.row - Ve));
    const $e = {
      col: ke(We, m),
      row: Math.max(1, Ve),
      width: m,
      height: me
    }, K = L.clientX - O, it = L.clientY - b, Be = F(), bt = ue();
    let He = { ...le };
    ve.includes("e") && (He.width = Math.max(Be, le.width + K)), ve.includes("s") && (He.height = Math.max(bt, le.height + it)), ve.includes("w") && (He.width = Math.max(Be, le.width - K), He.x = le.x + (le.width - He.width)), ve.includes("n") && (He.height = Math.max(bt, le.height - it), He.y = le.y + (le.height - He.height)), $(R, He, !0), Ue($e);
  }
  function Nt(L) {
    if (!e(C)) return;
    $(C, !1), L.currentTarget.releasePointerCapture(L.pointerId), e(I) && p()(e(I)), ye();
  }
  var qt = {
    get title() {
      return s();
    },
    set title(L) {
      s(L), f();
    },
    get layout() {
      return l();
    },
    set layout(L) {
      l(L), f();
    },
    get canvasWidth() {
      return g();
    },
    set canvasWidth(L) {
      g(L), f();
    },
    get compact() {
      return w();
    },
    set compact(L = !1) {
      w(L), f();
    },
    get editable() {
      return x();
    },
    set editable(L = !1) {
      x(L), f();
    },
    get zIndex() {
      return q();
    },
    set zIndex(L = 1) {
      q(L), f();
    },
    get onChange() {
      return p();
    },
    set onChange(L) {
      p(L), f();
    },
    get onPreviewChange() {
      return k();
    },
    set onPreviewChange(L) {
      k(L), f();
    },
    get onShiftPopoutStart() {
      return M();
    },
    set onShiftPopoutStart(L) {
      M(L), f();
    },
    get onFocus() {
      return P();
    },
    set onFocus(L) {
      P(L), f();
    },
    get children() {
      return S();
    },
    set children(L) {
      S(L), f();
    }
  }, ft = Ap(), vt = Zt(ft);
  {
    var ct = (L) => {
      var de = Cp();
      let Le;
      var We = u(de), Ve = u(We), m = ge(Ve, !0);
      h(We), h(de), pe(() => {
        Le = $r(de, "", Le, {
          "--widget-col": e(je).col,
          "--widget-row": e(je).row,
          "--widget-width": e(je).width,
          "--widget-height": e(je).height
        }), oe(m, s());
      }), V(L, de);
    };
    ce(vt, (L) => {
      e(Te) && L(ct);
    });
  }
  var yt = d(vt, 2);
  let we, ze;
  var Je = u(yt), N = u(Je);
  {
    var D = (L) => {
      var de = qa(), Le = Zt(de);
      Lt(Le, 16, () => ["n", "s", "e", "w", "ne", "nw", "se", "sw"], (We) => We, (We, Ve) => {
        var m = $p();
        pe(() => se(m, 1, `resize-handle resize-${Ve}`, "svelte-xhbaig")), ae("pointerdown", m, (me) => Pt(Ve, me)), ae("pointermove", m, zt), ae("pointerup", m, Nt), zo("pointercancel", m, Nt), V(We, m);
      }), V(L, de);
    };
    ce(N, (L) => {
      !w() && x() && L(D);
    });
  }
  var Me = d(N, 2);
  return Ua(Me, () => S() ?? $o), h(Je), h(yt), ci(yt, (L) => $(E, L), () => e(E)), pe(() => {
    we = se(yt, 1, "workspace-item svelte-xhbaig", null, we, {
      compact: w(),
      editable: x() && !w(),
      dragging: e(W),
      resizing: e(C),
      floating: e(Te)
    }), ze = $r(yt, "", ze, {
      "--widget-col": l().col,
      "--widget-row": l().row,
      "--widget-width": l().width,
      "--widget-height": l().height,
      "--floating-x": `${e(R).x}px`,
      "--floating-y": `${e(R).y}px`,
      "--floating-width": `${e(R).width}px`,
      "--floating-height": `${e(R).height}px`,
      "z-index": e(Te) ? q() + 240 : q()
    });
  }), ae("pointerdown", yt, () => {
    var L;
    return (L = P()) == null ? void 0 : L();
  }), ae("pointerdown", Je, _e), ae("pointermove", Je, ot), ae("pointerup", Je, _t), zo("pointercancel", Je, _t), V(t, ft), It(qt);
}
ln(["pointerdown", "pointermove", "pointerup"]);
Ft(
  vn,
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
var Rp = /* @__PURE__ */ ee("<span> </span>");
const Op = {
  hash: "svelte-bx51m",
  code: ".pill.svelte-bx51m {display:inline-flex;align-items:center;min-height:24px;padding:0 0.65rem;border:1px solid var(--efs-border-subtle);border-radius:999px;background:color-mix(in oklab, var(--efs-bg-surface-2), transparent 5%);color:var(--efs-text-secondary);font:var(--efs-font-label);letter-spacing:0.02em;white-space:nowrap;}.pill.mono.svelte-bx51m {font-family:var(--efs-font-mono);}.pill[data-tone='accent'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-accent-primary), transparent 68%);background:color-mix(in oklab, var(--efs-accent-soft), transparent 12%);color:var(--efs-accent-strong);}.pill[data-tone='success'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-success), transparent 68%);background:color-mix(in oklab, var(--efs-state-success), transparent 88%);color:var(--efs-state-success);}.pill[data-tone='warning'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-warning), transparent 68%);background:color-mix(in oklab, var(--efs-state-warning), transparent 88%);color:var(--efs-state-warning);}.pill[data-tone='danger'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-danger), transparent 68%);background:color-mix(in oklab, var(--efs-state-danger), transparent 88%);color:var(--efs-state-danger);}.pill[data-tone='info'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-info), transparent 68%);background:color-mix(in oklab, var(--efs-state-info), transparent 88%);color:var(--efs-state-info);}.pill[data-tone='natural'].svelte-bx51m {border-color:var(--efs-mode-natural-border);background:var(--efs-mode-natural-bg);color:var(--efs-accent-strong);}.pill[data-tone='raw'].svelte-bx51m {border-color:var(--efs-mode-raw-border);background:var(--efs-mode-raw-bg);color:color-mix(in oklab, var(--efs-state-info), white 14%);}"
};
function kt(t, r) {
  Ot(r, !0), Bt(t, Op);
  let n = y(r, "label", 7), a = y(r, "tone", 7, "neutral"), o = y(r, "monospaced", 7, !1);
  var i = {
    get label() {
      return n();
    },
    set label(w) {
      n(w), f();
    },
    get tone() {
      return a();
    },
    set tone(w = "neutral") {
      a(w), f();
    },
    get monospaced() {
      return o();
    },
    set monospaced(w = !1) {
      o(w), f();
    }
  }, s = Rp();
  let l;
  var g = ge(s, !0);
  return pe(() => {
    l = se(s, 1, "pill svelte-bx51m", null, l, { mono: o() }), z(s, "data-tone", a()), oe(g, n());
  }), V(t, s), It(i);
}
Ft(kt, { label: {}, tone: {}, monospaced: {} }, [], [], { mode: "open" });
var Ip = /* @__PURE__ */ ee('<div class="footer-row svelte-173e4c2"><!></div>'), Dp = /* @__PURE__ */ ee('<div class="empty-state svelte-173e4c2">Facet counts will appear here after a search runs.</div>'), Lp = /* @__PURE__ */ ee('<div class="empty-state svelte-173e4c2">No facets are available for the active domain.</div>'), Bp = /* @__PURE__ */ ee('<div class="facet-bucket svelte-173e4c2"><span class="facet-label svelte-173e4c2"> </span> <span class="facet-count svelte-173e4c2"> </span></div>'), Fp = /* @__PURE__ */ ee('<section class="facet-group svelte-173e4c2"><header class="facet-group-head svelte-173e4c2"><span class="facet-name svelte-173e4c2"> </span></header> <div class="facet-buckets svelte-173e4c2"></div></section>'), Np = /* @__PURE__ */ ee('<div class="facet-groups svelte-173e4c2"></div>');
const Hp = {
  hash: "svelte-173e4c2",
  code: `.facet-groups.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.8rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.facet-group.svelte-173e4c2,
  .empty-state.svelte-173e4c2 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.facet-group.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.75rem;}.facet-group-head.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;}.facet-name.svelte-173e4c2 {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.1em;text-transform:uppercase;}.facet-buckets.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.45rem;}.facet-bucket.svelte-173e4c2 {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.75rem;align-items:center;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.facet-label.svelte-173e4c2 {min-width:0;word-break:break-word;}.facet-count.svelte-173e4c2 {display:inline-flex;align-items:center;justify-content:center;min-width:2rem;min-height:1.9rem;padding:0 0.65rem;border-radius:999px;background:color-mix(in srgb, var(--shell-row-hover), transparent 2%);color:var(--shell-text);font-weight:700;}.empty-state.svelte-173e4c2 {min-height:8rem;display:flex;align-items:center;justify-content:center;color:var(--shell-muted);line-height:1.6;text-align:center;}.footer-row.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function sd(t, r) {
  Ot(r, !0), Bt(t, Hp);
  let n = y(r, "loaded", 7), a = y(r, "facets", 7), o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), s = y(r, "open", 7, !1), l = y(r, "pinned", 7, !1), g = y(r, "onOpen", 7), w = y(r, "onTogglePin", 7), x = /* @__PURE__ */ _(() => Object.entries(a())), q = /* @__PURE__ */ _(() => o() === "card" ? e(x).slice(0, 3) : e(x));
  var p = {
    get loaded() {
      return n();
    },
    set loaded(k) {
      n(k), f();
    },
    get facets() {
      return a();
    },
    set facets(k) {
      a(k), f();
    },
    get mode() {
      return o();
    },
    set mode(k = "card") {
      o(k), f();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(k) {
      i(k), f();
    },
    get open() {
      return s();
    },
    set open(k = !1) {
      s(k), f();
    },
    get pinned() {
      return l();
    },
    set pinned(k = !1) {
      l(k), f();
    },
    get onOpen() {
      return g();
    },
    set onOpen(k) {
      g(k), f();
    },
    get onTogglePin() {
      return w();
    },
    set onTogglePin(k) {
      w(k), f();
    }
  };
  return dn(t, {
    eyebrow: "Facets",
    title: "Distribution map",
    description: "See how the current result set breaks down by indexed dimensions and high-signal categories.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return i();
    },
    get open() {
      return s();
    },
    get pinned() {
      return l();
    },
    get onOpen() {
      return g();
    },
    get onTogglePin() {
      return w();
    },
    footer: (M) => {
      var P = Ip(), S = u(P);
      {
        let E = /* @__PURE__ */ _(() => `${e(x).length} facet group${e(x).length === 1 ? "" : "s"}`);
        kt(S, {
          get label() {
            return e(E);
          },
          tone: "accent"
        });
      }
      h(P), V(M, P);
    },
    children: (M, P) => {
      var S = qa(), E = Zt(S);
      {
        var W = (R) => {
          var H = Dp();
          V(R, H);
        }, C = (R) => {
          var H = Lp();
          V(R, H);
        }, I = (R) => {
          var H = Np();
          Lt(H, 21, () => e(q), ([Y, O]) => Y, (Y, O) => {
            var b = /* @__PURE__ */ _(() => Ev(e(O), 2));
            let he = () => e(b)[0], J = () => e(b)[1];
            var re = Fp(), le = u(re), ve = u(le), Te = ge(ve, !0);
            h(le);
            var je = d(le, 2);
            Lt(je, 21, J, (te) => `${he()}:${te.value}`, (te, be) => {
              var ke = Bp(), B = u(ke), F = ge(B, !0), ue = d(B, 2), Se = ge(ue, !0);
              h(ke), pe(() => {
                oe(F, e(be).label), oe(Se, e(be).count);
              }), V(te, ke);
            }), h(je), h(re), pe(() => oe(Te, he())), V(Y, re);
          }), h(H), V(R, H);
        };
        ce(E, (R) => {
          n() ? e(x).length === 0 ? R(C, 1) : R(I, -1) : R(W);
        });
      }
      V(M, S);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(p);
}
Ft(
  sd,
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
var Gp = /* @__PURE__ */ ee('<div class="footer-row svelte-11gg2b4"><span class="footer-copy svelte-11gg2b4"><!></span></div>'), Vp = /* @__PURE__ */ ee('<div class="empty-state svelte-11gg2b4">Loading workspace discovery data…</div>'), Yp = /* @__PURE__ */ ee('<div class="empty-state svelte-11gg2b4">Search results will appear here.</div>'), Up = /* @__PURE__ */ ee('<div class="empty-state svelte-11gg2b4">No results found for the current filters.</div>'), Xp = /* @__PURE__ */ ee('<article class="result-row svelte-11gg2b4"><div class="result-header svelte-11gg2b4"><strong class="result-title svelte-11gg2b4"> </strong> <!></div> <div class="result-meta svelte-11gg2b4"> </div></article>'), Kp = /* @__PURE__ */ ee('<div class="result-list svelte-11gg2b4"></div>');
const Jp = {
  hash: "svelte-11gg2b4",
  code: `.result-list.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.result-row.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.result-row.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.5rem;padding:0.95rem 1rem;}.result-header.svelte-11gg2b4 {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;}.result-title.svelte-11gg2b4 {color:var(--shell-text);line-height:1.45;word-break:break-word;}.result-meta.svelte-11gg2b4,
  .footer-copy.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.empty-state.svelte-11gg2b4 {min-height:8rem;display:flex;align-items:center;justify-content:center;text-align:center;}.footer-row.svelte-11gg2b4 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function ld(t, r) {
  Ot(r, !0), Bt(t, Jp);
  let n = y(r, "loaded", 7), a = y(r, "loading", 7), o = y(r, "searchResults", 7), i = y(r, "mode", 7, "card"), s = y(r, "dataTestid", 7), l = y(r, "open", 7, !1), g = y(r, "pinned", 7, !1), w = y(r, "onOpen", 7), x = y(r, "onTogglePin", 7), q = /* @__PURE__ */ _(() => i() === "card" ? o().slice(0, 7) : o());
  function p(P) {
    return String(P.summary.logicalPath ?? P.summary.username ?? P.summary.name ?? P.id);
  }
  function k(P) {
    return String(P.summary.mime ?? P.summary.roleId ?? P.id);
  }
  var M = {
    get loaded() {
      return n();
    },
    set loaded(P) {
      n(P), f();
    },
    get loading() {
      return a();
    },
    set loading(P) {
      a(P), f();
    },
    get searchResults() {
      return o();
    },
    set searchResults(P) {
      o(P), f();
    },
    get mode() {
      return i();
    },
    set mode(P = "card") {
      i(P), f();
    },
    get dataTestid() {
      return s();
    },
    set dataTestid(P) {
      s(P), f();
    },
    get open() {
      return l();
    },
    set open(P = !1) {
      l(P), f();
    },
    get pinned() {
      return g();
    },
    set pinned(P = !1) {
      g(P), f();
    },
    get onOpen() {
      return w();
    },
    set onOpen(P) {
      w(P), f();
    },
    get onTogglePin() {
      return x();
    },
    set onTogglePin(P) {
      x(P), f();
    }
  };
  return dn(t, {
    eyebrow: "Results",
    title: "Matched records",
    description: "Browse the strongest hits from the current search and inspect their routing or identity metadata.",
    get mode() {
      return i();
    },
    get dataTestid() {
      return s();
    },
    get open() {
      return l();
    },
    get pinned() {
      return g();
    },
    get onOpen() {
      return w();
    },
    get onTogglePin() {
      return x();
    },
    footer: (S) => {
      var E = Gp(), W = u(E), C = u(W);
      {
        var I = (H) => {
          var Y = Xr();
          pe(() => oe(Y, `Showing ${e(q).length ?? ""} of ${o().length ?? ""} matches.`)), V(H, Y);
        }, R = (H) => {
          var Y = Xr();
          pe(() => oe(Y, `${o().length ?? ""} total result${o().length === 1 ? "" : "s"}.`)), V(H, Y);
        };
        ce(C, (H) => {
          o().length > e(q).length ? H(I) : H(R, -1);
        });
      }
      h(W), h(E), V(S, E);
    },
    children: (S, E) => {
      var W = qa(), C = Zt(W);
      {
        var I = (O) => {
          var b = Vp();
          V(O, b);
        }, R = (O) => {
          var b = Yp();
          V(O, b);
        }, H = (O) => {
          var b = Up();
          V(O, b);
        }, Y = (O) => {
          var b = Kp();
          Lt(b, 21, () => e(q), (he) => he.id, (he, J) => {
            var re = Xp(), le = u(re), ve = u(le), Te = ge(ve, !0), je = d(ve, 2);
            {
              var te = (B) => {
                {
                  let F = /* @__PURE__ */ _(() => String(e(J).summary.workspaceArea));
                  kt(B, {
                    get label() {
                      return e(F);
                    },
                    tone: "natural"
                  });
                }
              };
              ce(je, (B) => {
                e(J).summary.workspaceArea && B(te);
              });
            }
            h(le);
            var be = d(le, 2), ke = ge(be, !0);
            h(re), pe(
              (B, F) => {
                oe(Te, B), oe(ke, F);
              },
              [
                () => p(e(J)),
                () => k(e(J))
              ]
            ), V(he, re);
          }), h(b), V(O, b);
        };
        ce(C, (O) => {
          a() && !n() ? O(I) : n() ? o().length === 0 ? O(H, 2) : O(Y, -1) : O(R, 1);
        });
      }
      V(S, W);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(M);
}
Ft(
  ld,
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
var Zp = /* @__PURE__ */ ee('<div class="footer-row svelte-sveo96"><!> <span class="footer-copy svelte-sveo96">Press Enter inside the search field to run the query.</span></div>'), Qp = /* @__PURE__ */ ee('<div class="search-layout svelte-sveo96"><div class="field-stack svelte-sveo96"><label class="svelte-sveo96">Domain</label> <select class="svelte-sveo96"><option>Workspace resources</option><option>System users</option><option>System roles</option></select></div> <div class="field-stack field-grow svelte-sveo96"><label class="svelte-sveo96">Search query</label> <input type="search" placeholder="routes, components, users, roles..." class="svelte-sveo96"/></div> <button class="primary-action svelte-sveo96" type="button"> </button></div>');
const ew = {
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
function dd(t, r) {
  const n = os();
  Ot(r, !0), Bt(t, ew);
  let a = y(r, "query", 15), o = y(r, "entity", 7), i = y(r, "loading", 7), s = y(r, "mode", 7, "card"), l = y(r, "dataTestid", 7), g = y(r, "open", 7, !1), w = y(r, "pinned", 7, !1), x = y(r, "onOpen", 7), q = y(r, "onTogglePin", 7), p = y(r, "onSearch", 7), k = y(r, "onEntityChange", 7);
  function M(S) {
    switch (S) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  var P = {
    get query() {
      return a();
    },
    set query(S) {
      a(S), f();
    },
    get entity() {
      return o();
    },
    set entity(S) {
      o(S), f();
    },
    get loading() {
      return i();
    },
    set loading(S) {
      i(S), f();
    },
    get mode() {
      return s();
    },
    set mode(S = "card") {
      s(S), f();
    },
    get dataTestid() {
      return l();
    },
    set dataTestid(S) {
      l(S), f();
    },
    get open() {
      return g();
    },
    set open(S = !1) {
      g(S), f();
    },
    get pinned() {
      return w();
    },
    set pinned(S = !1) {
      w(S), f();
    },
    get onOpen() {
      return x();
    },
    set onOpen(S) {
      x(S), f();
    },
    get onTogglePin() {
      return q();
    },
    set onTogglePin(S) {
      q(S), f();
    },
    get onSearch() {
      return p();
    },
    set onSearch(S) {
      p(S), f();
    },
    get onEntityChange() {
      return k();
    },
    set onEntityChange(S) {
      k(S), f();
    }
  };
  return dn(t, {
    eyebrow: "Discovery",
    title: "Search the control plane",
    description: "Query workspace resources and system records from a single launcher widget.",
    get mode() {
      return s();
    },
    get dataTestid() {
      return l();
    },
    get open() {
      return g();
    },
    get pinned() {
      return w();
    },
    get onOpen() {
      return x();
    },
    get onTogglePin() {
      return q();
    },
    footer: (E) => {
      var W = Zp(), C = u(W);
      {
        let I = /* @__PURE__ */ _(() => M(o()));
        kt(C, {
          get label() {
            return e(I);
          },
          tone: "accent"
        });
      }
      Cr(2), h(W), V(E, W);
    },
    children: (E, W) => {
      var C = Qp(), I = u(C), R = u(I), H = d(R, 2), Y = u(H);
      Y.value = Y.__value = "public_workspace_files";
      var O = d(Y);
      O.value = O.__value = "system_users";
      var b = d(O);
      b.value = b.__value = "system_roles", h(H);
      var he;
      fr(H), h(I);
      var J = d(I, 2), re = u(J), le = d(re, 2);
      Tt(le), h(J);
      var ve = d(J, 2), Te = ge(ve, !0);
      h(C), pe(() => {
        z(R, "for", `${n}-entity`), z(H, "id", `${n}-entity`), he !== (he = o()) && (H.value = (H.__value = he) ?? "", mr(H, he)), z(re, "for", `${n}-query`), z(le, "id", `${n}-query`), ve.disabled = i(), oe(Te, i() ? "Searching…" : "Search");
      }), ae("change", H, (je) => k()(je.currentTarget.value)), ae("keydown", le, (je) => je.key === "Enter" && p()()), Wn(le, a), ae("click", ve, function(...je) {
        var te;
        (te = p()) == null || te.apply(this, je);
      }), V(E, C);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(P);
}
ln(["change", "keydown", "click"]);
Ft(
  dd,
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
var tw = /* @__PURE__ */ ee('<div class="widget-footer-row svelte-1angecb"><span class="widget-hint svelte-1angecb"> </span> <!></div>'), rw = /* @__PURE__ */ ee("<div> </div>"), nw = /* @__PURE__ */ ee('<div><div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role id</label> <input type="text" placeholder="member_auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role name</label> <input type="text" placeholder="Member Auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Description</label> <input type="text" placeholder="Can inspect decoded content and reports" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Entitlements</label> <input type="text" placeholder="NATURAL_VIEW, RAW_VIEW" autocomplete="off" class="svelte-1angecb"/></div></div> <div class="action-row svelte-1angecb"><button class="primary-action svelte-1angecb" type="button"> </button> <span class="meta-copy svelte-1angecb">Operator-only roles remain excluded from assignment.</span></div> <!>', 1);
const aw = {
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
function cd(t, r) {
  const n = os();
  Ot(r, !0), Bt(t, aw);
  let a = y(r, "roles", 7), o = y(r, "form", 15), i = y(r, "result", 7), s = y(r, "busy", 7), l = y(r, "mode", 7, "card"), g = y(r, "dataTestid", 7), w = y(r, "open", 7, !1), x = y(r, "pinned", 7, !1), q = y(r, "onOpen", 7), p = y(r, "onTogglePin", 7), k = y(r, "onSubmit", 7), M = /* @__PURE__ */ _(() => a().filter((S) => !S.system).length);
  var P = {
    get roles() {
      return a();
    },
    set roles(S) {
      a(S), f();
    },
    get form() {
      return o();
    },
    set form(S) {
      o(S), f();
    },
    get result() {
      return i();
    },
    set result(S) {
      i(S), f();
    },
    get busy() {
      return s();
    },
    set busy(S) {
      s(S), f();
    },
    get mode() {
      return l();
    },
    set mode(S = "card") {
      l(S), f();
    },
    get dataTestid() {
      return g();
    },
    set dataTestid(S) {
      g(S), f();
    },
    get open() {
      return w();
    },
    set open(S = !1) {
      w(S), f();
    },
    get pinned() {
      return x();
    },
    set pinned(S = !1) {
      x(S), f();
    },
    get onOpen() {
      return q();
    },
    set onOpen(S) {
      q(S), f();
    },
    get onTogglePin() {
      return p();
    },
    set onTogglePin(S) {
      p(S), f();
    },
    get onSubmit() {
      return k();
    },
    set onSubmit(S) {
      k(S), f();
    }
  };
  return dn(t, {
    eyebrow: "Create role",
    title: "Add a custom tenant role",
    description: "Compose entitlements into reusable role presets and keep provisioning fast.",
    get mode() {
      return l();
    },
    get dataTestid() {
      return g();
    },
    get open() {
      return w();
    },
    get pinned() {
      return x();
    },
    get onOpen() {
      return q();
    },
    get onTogglePin() {
      return p();
    },
    footer: (E) => {
      var W = tw(), C = u(W), I = ge(C), R = d(C, 2);
      kt(R, { label: "comma-separated entitlements", tone: "info" }), h(W), pe(() => oe(I, `${e(M) ?? ""} custom roles configured.`)), V(E, W);
    },
    children: (E, W) => {
      var C = nw(), I = Zt(C);
      let R;
      var H = u(I), Y = u(H), O = d(Y, 2);
      Tt(O), h(H);
      var b = d(H, 2), he = u(b), J = d(he, 2);
      Tt(J), h(b);
      var re = d(b, 2), le = u(re), ve = d(le, 2);
      Tt(ve), h(re);
      var Te = d(re, 2), je = u(Te), te = d(je, 2);
      Tt(te), h(Te), h(I);
      var be = d(I, 2), ke = u(be), B = ge(ke, !0);
      Cr(2), h(be);
      var F = d(be, 2);
      {
        var ue = (Se) => {
          var Pe = rw(), Ue = ge(Pe, !0);
          pe(() => {
            se(Pe, 1, Wt(i().error ? "flash-error" : "notice")), oe(Ue, i().message);
          }), V(Se, Pe);
        };
        ce(F, (Se) => {
          i() && Se(ue);
        });
      }
      pe(() => {
        R = se(I, 1, "form-grid svelte-1angecb", null, R, { "form-grid-window": l() === "window" }), z(Y, "for", `${n}-role-id`), z(O, "id", `${n}-role-id`), z(he, "for", `${n}-role-name`), z(J, "id", `${n}-role-name`), z(le, "for", `${n}-role-description`), z(ve, "id", `${n}-role-description`), z(je, "for", `${n}-role-entitlements`), z(te, "id", `${n}-role-entitlements`), ke.disabled = s(), oe(B, s() ? "Creating…" : "Create role");
      }), Wn(O, () => o().id, (Se) => o(o().id = Se, !0)), Wn(J, () => o().name, (Se) => o(o().name = Se, !0)), Wn(ve, () => o().description, (Se) => o(o().description = Se, !0)), Wn(te, () => o().entitlements, (Se) => o(o().entitlements = Se, !0)), ae("click", ke, function(...Se) {
        var Pe;
        (Pe = k()) == null || Pe.apply(this, Se);
      }), V(E, C);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(P);
}
ln(["click"]);
Ft(
  cd,
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
var ow = /* @__PURE__ */ ee('<div class="widget-footer-row svelte-yr1mcc"><span class="widget-hint svelte-yr1mcc">Leave the login key blank to generate one automatically.</span> <!></div>'), iw = /* @__PURE__ */ ee("<option> </option>"), sw = /* @__PURE__ */ ee("<div> </div>"), lw = /* @__PURE__ */ ee('<div><div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Username</label> <input type="text" placeholder="member-jane" autocomplete="username" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Display name</label> <input type="text" placeholder="Jane Doe" autocomplete="name" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Tenant role</label> <select class="svelte-yr1mcc"></select></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Custom login key</label> <input type="text" placeholder="leave blank to generate" autocomplete="off" class="svelte-yr1mcc"/></div></div> <div class="action-row svelte-yr1mcc"><button class="primary-action svelte-yr1mcc" type="button"> </button> <span class="meta-copy svelte-yr1mcc"> </span></div> <!>', 1);
const dw = {
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
function gd(t, r) {
  const n = os();
  Ot(r, !0), Bt(t, dw);
  let a = y(r, "roles", 7), o = y(r, "form", 15), i = y(r, "result", 7), s = y(r, "actualRole", 7), l = y(r, "busy", 7), g = y(r, "mode", 7, "card"), w = y(r, "dataTestid", 7), x = y(r, "open", 7, !1), q = y(r, "pinned", 7, !1), p = y(r, "onOpen", 7), k = y(r, "onTogglePin", 7), M = y(r, "onSubmit", 7), P = /* @__PURE__ */ _(() => a().filter((E) => !E.operatorOnly));
  var S = {
    get roles() {
      return a();
    },
    set roles(E) {
      a(E), f();
    },
    get form() {
      return o();
    },
    set form(E) {
      o(E), f();
    },
    get result() {
      return i();
    },
    set result(E) {
      i(E), f();
    },
    get actualRole() {
      return s();
    },
    set actualRole(E) {
      s(E), f();
    },
    get busy() {
      return l();
    },
    set busy(E) {
      l(E), f();
    },
    get mode() {
      return g();
    },
    set mode(E = "card") {
      g(E), f();
    },
    get dataTestid() {
      return w();
    },
    set dataTestid(E) {
      w(E), f();
    },
    get open() {
      return x();
    },
    set open(E = !1) {
      x(E), f();
    },
    get pinned() {
      return q();
    },
    set pinned(E = !1) {
      q(E), f();
    },
    get onOpen() {
      return p();
    },
    set onOpen(E) {
      p(E), f();
    },
    get onTogglePin() {
      return k();
    },
    set onTogglePin(E) {
      k(E), f();
    },
    get onSubmit() {
      return M();
    },
    set onSubmit(E) {
      M(E), f();
    }
  };
  return dn(t, {
    eyebrow: "Create user",
    title: "Provision a new login key",
    description: "Create a tenant account, assign a role, and issue a credential without leaving the dashboard.",
    get mode() {
      return g();
    },
    get dataTestid() {
      return w();
    },
    get open() {
      return x();
    },
    get pinned() {
      return q();
    },
    get onOpen() {
      return p();
    },
    get onTogglePin() {
      return k();
    },
    footer: (W) => {
      var C = ow(), I = d(u(C), 2);
      {
        let R = /* @__PURE__ */ _(() => `actual ${s()}`);
        kt(I, {
          get label() {
            return e(R);
          },
          tone: "accent",
          monospaced: !0
        });
      }
      h(C), V(W, C);
    },
    children: (W, C) => {
      var I = lw(), R = Zt(I);
      let H;
      var Y = u(R), O = u(Y), b = d(O, 2);
      Tt(b), h(Y);
      var he = d(Y, 2), J = u(he), re = d(J, 2);
      Tt(re), h(he);
      var le = d(he, 2), ve = u(le), Te = d(ve, 2);
      Lt(Te, 21, () => e(P), (ye) => ye.id, (ye, _e) => {
        var ot = iw(), _t = ge(ot, !0), Pt = {};
        pe(() => {
          oe(_t, e(_e).name), Pt !== (Pt = e(_e).id) && (ot.value = (ot.__value = Pt) ?? "");
        }), V(ye, ot);
      }), h(Te), fr(Te), h(le);
      var je = d(le, 2), te = u(je), be = d(te, 2);
      Tt(be), h(je), h(R);
      var ke = d(R, 2), B = u(ke), F = ge(B, !0), ue = d(B, 2), Se = ge(ue);
      h(ke);
      var Pe = d(ke, 2);
      {
        var Ue = (ye) => {
          var _e = sw(), ot = ge(_e, !0);
          pe(() => {
            se(_e, 1, Wt(i().error ? "flash-error" : "notice")), oe(ot, i().message);
          }), V(ye, _e);
        };
        ce(Pe, (ye) => {
          i() && ye(Ue);
        });
      }
      pe(() => {
        H = se(R, 1, "form-grid svelte-yr1mcc", null, H, { "form-grid-window": g() === "window" }), z(O, "for", `${n}-username`), z(b, "id", `${n}-username`), z(J, "for", `${n}-name`), z(re, "id", `${n}-name`), z(ve, "for", `${n}-role`), z(Te, "id", `${n}-role`), z(te, "for", `${n}-key`), z(be, "id", `${n}-key`), B.disabled = l(), oe(F, l() ? "Creating…" : "Create user"), oe(Se, `${e(P).length ?? ""} assignable roles`);
      }), Wn(b, () => o().username, (ye) => o(o().username = ye, !0)), Wn(re, () => o().name, (ye) => o(o().name = ye, !0)), Og(Te, () => o().roleId, (ye) => o(o().roleId = ye, !0)), Wn(be, () => o().loginKey, (ye) => o(o().loginKey = ye, !0)), ae("click", B, function(...ye) {
        var _e;
        (_e = M()) == null || _e.apply(this, ye);
      }), V(W, I);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(S);
}
ln(["click"]);
Ft(
  gd,
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
var cw = /* @__PURE__ */ ee('<div class="footer-row svelte-13dkq1y"><div class="context-strip svelte-13dkq1y"><!> <!></div></div>'), gw = /* @__PURE__ */ ee('<div class="empty-state svelte-13dkq1y">No alternate display modes are available for this session.</div>'), vw = /* @__PURE__ */ ee('<button class="mode-button svelte-13dkq1y" type="button"><span class="mode-label svelte-13dkq1y"> </span> <span class="mode-copy svelte-13dkq1y"> </span></button>'), hw = /* @__PURE__ */ ee('<div class="mode-grid svelte-13dkq1y"></div>'), Mc = /* @__PURE__ */ ee('<span class="detail-chip svelte-13dkq1y"> </span>'), uw = /* @__PURE__ */ ee('<div class="detail-grid svelte-13dkq1y"><section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Effective entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section> <section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Actual entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section></div>'), pw = /* @__PURE__ */ ee("<!> <!>", 1);
const ww = {
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
function vd(t, r) {
  Ot(r, !0), Bt(t, ww);
  let n = y(r, "user", 7), a = y(r, "busy", 7), o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), s = y(r, "open", 7, !1), l = y(r, "pinned", 7, !1), g = y(r, "onOpen", 7), w = y(r, "onTogglePin", 7), x = y(r, "onChange", 7);
  var q = {
    get user() {
      return n();
    },
    set user(p) {
      n(p), f();
    },
    get busy() {
      return a();
    },
    set busy(p) {
      a(p), f();
    },
    get mode() {
      return o();
    },
    set mode(p = "card") {
      o(p), f();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(p) {
      i(p), f();
    },
    get open() {
      return s();
    },
    set open(p = !1) {
      s(p), f();
    },
    get pinned() {
      return l();
    },
    set pinned(p = !1) {
      l(p), f();
    },
    get onOpen() {
      return g();
    },
    set onOpen(p) {
      g(p), f();
    },
    get onTogglePin() {
      return w();
    },
    set onTogglePin(p) {
      w(p), f();
    },
    get onChange() {
      return x();
    },
    set onChange(p) {
      x(p), f();
    }
  };
  return dn(t, {
    eyebrow: "Display mode",
    title: "Effective role switching",
    description: "Jump between safe operating contexts without losing the tenant-admin identity behind the session.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return i();
    },
    get open() {
      return s();
    },
    get pinned() {
      return l();
    },
    get onOpen() {
      return g();
    },
    get onTogglePin() {
      return w();
    },
    footer: (k) => {
      var M = qa(), P = Zt(M);
      {
        var S = (E) => {
          var W = cw(), C = u(W), I = u(C);
          {
            let H = /* @__PURE__ */ _(() => `actual ${n().actualRole}`);
            kt(I, {
              get label() {
                return e(H);
              },
              tone: "accent",
              monospaced: !0
            });
          }
          var R = d(I, 2);
          {
            let H = /* @__PURE__ */ _(() => `effective ${n().role}`);
            kt(R, {
              get label() {
                return e(H);
              },
              tone: "info",
              monospaced: !0
            });
          }
          h(C), h(W), V(E, W);
        };
        ce(P, (E) => {
          n() && E(S);
        });
      }
      V(k, M);
    },
    children: (k, M) => {
      var P = pw(), S = Zt(P);
      {
        var E = (R) => {
          var H = gw();
          V(R, H);
        }, W = (R) => {
          var H = hw();
          Lt(H, 20, () => {
            var Y;
            return ((Y = n()) == null ? void 0 : Y.availableDisplayModes) ?? [];
          }, (Y) => Y, (Y, O) => {
            var b = vw(), he = u(b), J = ge(he, !0), re = d(he, 2), le = ge(re, !0);
            h(b), pe(() => {
              var ve, Te, je;
              z(b, "data-active", O === ((ve = n()) == null ? void 0 : ve.role)), b.disabled = a(), oe(J, O), oe(le, O === ((Te = n()) == null ? void 0 : Te.actualRole) ? "admin baseline" : O === ((je = n()) == null ? void 0 : je.role) ? "active context" : "switch context");
            }), ae("click", b, () => x()(O)), V(Y, b);
          }), h(H), V(R, H);
        };
        ce(S, (R) => {
          var H;
          (((H = n()) == null ? void 0 : H.availableDisplayModes) ?? []).length === 0 ? R(E) : R(W, -1);
        });
      }
      var C = d(S, 2);
      {
        var I = (R) => {
          var H = uw(), Y = u(H), O = d(u(Y), 2);
          Lt(O, 20, () => n().entitlements ?? [], (J) => J, (J, re) => {
            var le = Mc(), ve = ge(le, !0);
            pe(() => oe(ve, re)), V(J, le);
          }), h(O), h(Y);
          var b = d(Y, 2), he = d(u(b), 2);
          Lt(he, 20, () => n().actualEntitlements ?? [], (J) => J, (J, re) => {
            var le = Mc(), ve = ge(le, !0);
            pe(() => oe(ve, re)), V(J, le);
          }), h(he), h(b), h(H), V(R, H);
        };
        ce(C, (R) => {
          o() === "window" && n() && R(I);
        });
      }
      V(k, P);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(q);
}
ln(["click"]);
Ft(
  vd,
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
var mw = /* @__PURE__ */ ee('<div class="inline-help svelte-15n0qxd"><button class="inline-help-button svelte-15n0qxd" type="button"><!></button> <div class="inline-help-tooltip svelte-15n0qxd" role="tooltip"><strong class="svelte-15n0qxd"> </strong> <span class="svelte-15n0qxd"> </span></div></div>');
const fw = {
  hash: "svelte-15n0qxd",
  code: `.inline-help.svelte-15n0qxd {position:relative;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;}.inline-help-button.svelte-15n0qxd {display:inline-flex;align-items:center;justify-content:center;width:1.65rem;height:1.65rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent 62%),\r
      color-mix(in srgb, var(--shell-surface), transparent 2%);color:color-mix(in srgb, var(--shell-text), transparent 18%);cursor:help;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),\r
      0 6px 16px rgba(0, 0, 0, 0.14);transition:border-color 140ms ease,\r
      color 140ms ease,\r
      transform 140ms ease,\r
      box-shadow 140ms ease;}.inline-help-button.svelte-15n0qxd:hover,\r
  .inline-help-button.svelte-15n0qxd:focus-visible {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 46%);color:var(--shell-text-strong);box-shadow:var(--shell-focus-ring);}.inline-help-button.svelte-15n0qxd .app-icon {width:0.8rem;height:0.8rem;}.inline-help-tooltip.svelte-15n0qxd {position:absolute;top:calc(100% + 0.65rem);z-index:12;display:flex;flex-direction:column;gap:0.35rem;width:min(19rem, calc(100vw - 2rem));padding:0.8rem 0.9rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:16px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 28%),\r
      color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);box-shadow:0 22px 44px rgba(0, 0, 0, 0.22);opacity:0;pointer-events:none;transform:translateY(-0.35rem);transition:opacity 140ms ease,\r
      transform 140ms ease;}.inline-help[data-align='right'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd) {right:0;}.inline-help[data-align='left'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd) {left:0;}.inline-help-tooltip.svelte-15n0qxd::before {content:'';position:absolute;top:-0.42rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-left:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);transform:rotate(45deg);}.inline-help[data-align='right'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd)::before {right:0.9rem;}.inline-help[data-align='left'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd)::before {left:0.9rem;}.inline-help-tooltip.svelte-15n0qxd strong:where(.svelte-15n0qxd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.inline-help-tooltip.svelte-15n0qxd span:where(.svelte-15n0qxd) {color:color-mix(in srgb, var(--shell-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.inline-help.svelte-15n0qxd:hover .inline-help-tooltip:where(.svelte-15n0qxd),\r
  .inline-help.svelte-15n0qxd:focus-within .inline-help-tooltip:where(.svelte-15n0qxd) {opacity:1;transform:translateY(0);}`
};
function ya(t, r) {
  Ot(r, !0), Bt(t, fw);
  let n = y(r, "title", 7), a = y(r, "text", 7), o = y(r, "align", 7, "right");
  var i = {
    get title() {
      return n();
    },
    set title(M) {
      n(M), f();
    },
    get text() {
      return a();
    },
    set text(M) {
      a(M), f();
    },
    get align() {
      return o();
    },
    set align(M = "right") {
      o(M), f();
    }
  }, s = mw(), l = u(s), g = u(l);
  tt(g, { name: "help" }), h(l);
  var w = d(l, 2), x = u(w), q = ge(x, !0), p = d(x, 2), k = ge(p, !0);
  return h(w), h(s), pe(() => {
    z(s, "data-align", o()), z(l, "aria-label", `About ${n()}`), z(l, "title", `About ${n()}`), oe(q, n()), oe(k, a());
  }), V(t, s), It(i);
}
Ft(ya, { title: {}, text: {}, align: {} }, [], [], { mode: "open" });
var bw = /* @__PURE__ */ ee('<div class="footer-row svelte-1rru5q2"><div class="footer-pills svelte-1rru5q2"><!> <!> <!> <!> <!></div> <div class="footer-actions svelte-1rru5q2"><button class="prefs-button svelte-1rru5q2" type="button">Revert</button> <button class="prefs-button svelte-1rru5q2" type="button">Defaults</button> <button class="prefs-button is-primary svelte-1rru5q2" type="button">Apply</button></div></div>'), yw = /* @__PURE__ */ ee(`<div class="prefs-layout svelte-1rru5q2"><div class="prefs-copy svelte-1rru5q2"><div class="prefs-copy-main svelte-1rru5q2"><p class="svelte-1rru5q2">Move dock behavior out of the window manager and stage it here. This sheet controls how
          pinned admin tools reveal labels, how wide or compact each button feels, and whether the
          rail is available across the rest of the site.</p></div> <div class="prefs-copy-pills svelte-1rru5q2"><!> <!></div></div> <section class="preview-stage svelte-1rru5q2" aria-label="Pinned dock preview"><div class="preview-head svelte-1rru5q2"><div><span class="preview-kicker svelte-1rru5q2">Preview only</span> <h4 class="svelte-1rru5q2">Dock label reveal and button shape</h4></div> <button class="prefs-button is-primary svelte-1rru5q2" type="button">Apply</button></div> <div class="preview-surface svelte-1rru5q2"><div class="preview-canvas svelte-1rru5q2"><div class="preview-route-card svelte-1rru5q2"><span class="preview-route-kicker svelte-1rru5q2">Page shell</span> <strong class="svelte-1rru5q2">Any route can host pinned tools</strong> <p class="svelte-1rru5q2">Use the global dock toggle to mirror pinned admin tools outside the admin workspace.</p></div> <div class="preview-dock svelte-1rru5q2"><div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Windows</span> <button class="preview-dock-button is-active svelte-1rru5q2" type="button" aria-label="Windows"><!></button> <span class="preview-dock-label svelte-1rru5q2">Windows</span></div> <div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Search</span> <button class="preview-dock-button svelte-1rru5q2" type="button" aria-label="Search"><!></button> <span class="preview-dock-label svelte-1rru5q2">Search</span></div> <div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Modes</span> <button class="preview-dock-button svelte-1rru5q2" type="button" aria-label="Modes"><!></button> <span class="preview-dock-label svelte-1rru5q2">Modes</span></div></div></div></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Presence</span> <h4 class="svelte-1rru5q2">Where the dock is allowed to appear</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><label class="field-toggle field-toggle-feature svelte-1rru5q2"><input type="checkbox" class="svelte-1rru5q2"/> <span>Show pinned admin tools on every page, not just inside the admin workspace.</span></label></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Labels</span> <h4 class="svelte-1rru5q2">How titles reveal around dock buttons</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><div class="prefs-grid svelte-1rru5q2"><div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2">Dock labels</label> <select class="svelte-1rru5q2"><option>Hover labels</option><option>Always show labels</option><option>Pop-out labels</option><option>Hide labels</option></select></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="8" max="36" step="1" class="svelte-1rru5q2"/></div></div></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Geometry</span> <h4 class="svelte-1rru5q2">Button size, width, and icon scale</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><div class="prefs-grid svelte-1rru5q2"><div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="40" max="72" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="40" max="168" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="70" max="160" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="4" max="24" step="1" class="svelte-1rru5q2"/></div></div></div></section></div>`);
const xw = {
  hash: "svelte-1rru5q2",
  code: `.prefs-layout.svelte-1rru5q2 {display:flex;flex-direction:column;gap:1rem;}.prefs-copy.svelte-1rru5q2,\r
  .footer-row.svelte-1rru5q2,\r
  .preview-head.svelte-1rru5q2,\r
  .prefs-section-title.svelte-1rru5q2 {display:flex;align-items:center;justify-content:space-between;gap:0.9rem;}.prefs-copy.svelte-1rru5q2 {flex-wrap:wrap;}.prefs-copy-main.svelte-1rru5q2 {flex:1 1 30rem;}.prefs-copy-main.svelte-1rru5q2 p:where(.svelte-1rru5q2) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.prefs-copy-pills.svelte-1rru5q2,\r
  .footer-pills.svelte-1rru5q2 {display:flex;flex-wrap:wrap;gap:0.55rem;}.footer-row.svelte-1rru5q2 {flex-wrap:wrap;}.footer-actions.svelte-1rru5q2 {display:inline-flex;flex-wrap:wrap;gap:0.65rem;}.preview-stage.svelte-1rru5q2,\r
  .prefs-section.svelte-1rru5q2 {display:flex;flex-direction:column;gap:0.9rem;padding:1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),\r
      color-mix(in srgb, var(--shell-surface), transparent 2%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.04);}.preview-kicker.svelte-1rru5q2,\r
  .group-kicker.svelte-1rru5q2 {display:inline-flex;color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.preview-head.svelte-1rru5q2 h4:where(.svelte-1rru5q2),\r
  .prefs-heading-stack.svelte-1rru5q2 h4:where(.svelte-1rru5q2) {margin:0.18rem 0 0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-surface.svelte-1rru5q2 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 16%);border-radius:18px;background:radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 28%),\r
      color-mix(in srgb, var(--shell-panel), transparent 6%);padding:1rem;}.preview-canvas.svelte-1rru5q2 {display:flex;min-height:13rem;align-items:flex-end;justify-content:space-between;gap:1rem;}.preview-route-card.svelte-1rru5q2 {display:flex;max-width:18rem;flex-direction:column;gap:0.45rem;padding:1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),\r
      color-mix(in srgb, var(--shell-surface), transparent 4%);}.preview-route-kicker.svelte-1rru5q2 {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.12em;text-transform:uppercase;}.preview-route-card.svelte-1rru5q2 strong:where(.svelte-1rru5q2) {color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-route-card.svelte-1rru5q2 p:where(.svelte-1rru5q2) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.preview-dock.svelte-1rru5q2 {display:inline-flex;gap:var(--preview-dock-gap);align-items:flex-end;padding-inline-end:var(--preview-dock-offset);}.preview-dock-item.svelte-1rru5q2 {position:relative;display:inline-flex;align-items:center;gap:0.65rem;}.preview-dock-button.svelte-1rru5q2 {display:inline-flex;align-items:center;justify-content:center;width:var(--preview-dock-width);height:var(--preview-dock-size);border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:min(999px, calc(var(--preview-dock-size) * 0.52));background:radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 86%), transparent 54%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),\r
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:0 18px 44px rgba(0, 0, 0, 0.32),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 86%);}.preview-dock-button.is-active.svelte-1rru5q2 {border-color:color-mix(in srgb, var(--shell-primary), transparent 36%);background:radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 82%), transparent 52%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.09), transparent 72%),\r
      color-mix(in srgb, var(--shell-primary), transparent 88%);}.preview-dock-button.svelte-1rru5q2 .app-icon {width:var(--preview-dock-icon-size);height:var(--preview-dock-icon-size);transform:scale(var(--preview-dock-icon-scale));transform-origin:center;}.preview-dock-label.svelte-1rru5q2,\r
  .preview-dock-popout.svelte-1rru5q2 {color:color-mix(in srgb, var(--shell-text), transparent 12%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;}.preview-dock-popout.svelte-1rru5q2 {position:absolute;right:calc(100% - 0.65rem);z-index:0;padding:0.55rem 1rem 0.55rem 1.15rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-right:0;border-radius:999px 0 0 999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 36%),\r
      color-mix(in srgb, var(--shell-inset-bg), transparent 4%);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.03);opacity:0;transform:scaleX(0.76);transform-origin:right center;}.preview-dock[data-label-mode='hover'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2),\r
  .preview-dock[data-label-mode='hidden'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2),\r
  .preview-dock[data-label-mode='always'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2),\r
  .preview-dock[data-label-mode='hover'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2),\r
  .preview-dock[data-label-mode='hidden'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2) {display:none;}.preview-dock[data-label-mode='popout'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2) {display:none;}.preview-dock[data-label-mode='popout'].svelte-1rru5q2 .preview-dock-item:where(.svelte-1rru5q2):first-child .preview-dock-popout:where(.svelte-1rru5q2) {opacity:1;transform:scaleX(1);}.prefs-section-head.svelte-1rru5q2 {padding-bottom:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--shell-border), transparent 28%);}.prefs-heading-stack.svelte-1rru5q2 {display:flex;min-width:0;flex-direction:column;}.prefs-section-body.svelte-1rru5q2 {display:flex;flex-direction:column;gap:1rem;}.prefs-grid.svelte-1rru5q2 {display:flex;flex-wrap:wrap;gap:0.85rem 1rem;}.prefs-grid.svelte-1rru5q2 > :where(.svelte-1rru5q2) {flex:1 1 15rem;min-width:0;}.field-stack.svelte-1rru5q2 {display:flex;flex-direction:column;gap:0.55rem;}.field-stack.svelte-1rru5q2 label:where(.svelte-1rru5q2) {color:color-mix(in srgb, var(--shell-text), transparent 10%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1rru5q2 select:where(.svelte-1rru5q2),\r
  .field-stack.svelte-1rru5q2 input[type='range']:where(.svelte-1rru5q2) {width:100%;}.field-toggle.svelte-1rru5q2 {display:flex;align-items:flex-start;gap:0.8rem;padding:0.95rem 1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:18px;background:color-mix(in srgb, var(--shell-inset-bg), transparent 6%);color:color-mix(in srgb, var(--shell-text), transparent 10%);font:var(--efs-font-body-sm);line-height:1.6;}.field-toggle-feature.svelte-1rru5q2 {background:radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 46%),\r
      color-mix(in srgb, var(--shell-inset-bg), transparent 6%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06),\r
      0 12px 24px color-mix(in srgb, var(--shell-primary), transparent 97%);}.field-toggle.svelte-1rru5q2 input:where(.svelte-1rru5q2) {margin-top:0.18rem;}.prefs-button.svelte-1rru5q2 {display:inline-flex;align-items:center;justify-content:center;min-height:2.6rem;padding:0.7rem 1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 62%),\r
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.prefs-button.is-primary.svelte-1rru5q2 {border-color:color-mix(in srgb, var(--shell-primary), transparent 36%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 58%),\r
      color-mix(in srgb, var(--shell-primary), transparent 84%);}.prefs-button.svelte-1rru5q2:hover:not(:disabled) {border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);color:var(--shell-text-strong);}\r
\r
  @media (max-width: 56rem) {.preview-canvas.svelte-1rru5q2 {flex-direction:column;align-items:stretch;}.preview-dock.svelte-1rru5q2 {justify-content:center;padding-inline-end:0;}\r
  }`
};
function hd(t, r) {
  const n = os();
  Ot(r, !0), Bt(t, xw);
  const a = {
    hover: "Hover labels",
    always: "Always show labels",
    popout: "Pop-out labels",
    hidden: "Hidden labels"
  };
  let o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), s = y(r, "open", 7, !1), l = y(r, "pinned", 7, !1), g = y(r, "onOpen", 7), w = y(r, "onTogglePin", 7);
  function x(I = Od()) {
    return { ...Oe, ...I };
  }
  let q = /* @__PURE__ */ fe(wt(x())), p = /* @__PURE__ */ fe(wt(x())), k = /* @__PURE__ */ _(() => !Hs(e(p), e(q))), M = /* @__PURE__ */ _(() => [
    `--preview-dock-size:${e(p).dockButtonSize}px`,
    `--preview-dock-width:${Math.max(e(p).dockButtonSize, e(p).dockButtonWidth)}px`,
    `--preview-dock-gap:${e(p).dockGap}px`,
    `--preview-dock-icon-size:${Math.max(16, Math.round(e(p).dockButtonSize * 0.39))}px`,
    `--preview-dock-icon-scale:${e(p).dockIconScale / 100}`,
    `--preview-dock-offset:${e(p).dockOffset}px`
  ].join(";"));
  Ro(() => {
    const I = hi((R) => {
      const H = x(R), Y = !Hs(e(p), e(q));
      $(q, H, !0), Y || $(p, H, !0);
    });
    return () => {
      I();
    };
  });
  function P(I) {
    $(p, { ...e(p), ...I }, !0);
  }
  function S() {
    Id(e(p));
  }
  function E() {
    $(p, x(e(q)), !0);
  }
  function W() {
    $(
      p,
      {
        ...x(e(q)),
        globalEdgeDock: Oe.globalEdgeDock,
        dockButtonSize: Oe.dockButtonSize,
        dockButtonWidth: Oe.dockButtonWidth,
        dockIconScale: Oe.dockIconScale,
        dockGap: Oe.dockGap,
        dockOffset: Oe.dockOffset,
        dockLabelMode: Oe.dockLabelMode
      },
      !0
    );
  }
  var C = {
    get mode() {
      return o();
    },
    set mode(I = "card") {
      o(I), f();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(I) {
      i(I), f();
    },
    get open() {
      return s();
    },
    set open(I = !1) {
      s(I), f();
    },
    get pinned() {
      return l();
    },
    set pinned(I = !1) {
      l(I), f();
    },
    get onOpen() {
      return g();
    },
    set onOpen(I) {
      g(I), f();
    },
    get onTogglePin() {
      return w();
    },
    set onTogglePin(I) {
      w(I), f();
    }
  };
  return dn(t, {
    eyebrow: "Pinned Dock",
    title: "Pinned tool preferences",
    description: "Control cross-page pinned tools here. This widget owns label reveal, button proportion, icon scale, spacing, and whether pinned tools appear outside the admin workspace.",
    get mode() {
      return o();
    },
    get dataTestid() {
      return i();
    },
    get open() {
      return s();
    },
    get pinned() {
      return l();
    },
    get onOpen() {
      return g();
    },
    get onTogglePin() {
      return w();
    },
    footer: (R) => {
      var H = bw(), Y = u(H), O = u(Y);
      {
        let te = /* @__PURE__ */ _(() => e(k) ? "Preview pending" : "Applied"), be = /* @__PURE__ */ _(() => e(k) ? "warning" : "accent");
        kt(O, {
          get label() {
            return e(te);
          },
          get tone() {
            return e(be);
          }
        });
      }
      var b = d(O, 2);
      {
        let te = /* @__PURE__ */ _(() => e(p).globalEdgeDock ? "Pinned tools on every page" : "Pinned tools stay in admin"), be = /* @__PURE__ */ _(() => e(p).globalEdgeDock ? "accent" : "neutral");
        kt(b, {
          get label() {
            return e(te);
          },
          get tone() {
            return e(be);
          }
        });
      }
      var he = d(b, 2);
      kt(he, {
        get label() {
          return a[e(p).dockLabelMode];
        },
        tone: "info"
      });
      var J = d(he, 2);
      {
        let te = /* @__PURE__ */ _(() => `${e(p).dockButtonWidth}px width`);
        kt(J, {
          get label() {
            return e(te);
          },
          tone: "neutral"
        });
      }
      var re = d(J, 2);
      {
        let te = /* @__PURE__ */ _(() => `${e(p).dockIconScale}% icons`);
        kt(re, {
          get label() {
            return e(te);
          },
          tone: "neutral"
        });
      }
      h(Y);
      var le = d(Y, 2), ve = u(le), Te = d(ve, 2), je = d(Te, 2);
      h(le), h(H), pe(() => {
        ve.disabled = !e(k), je.disabled = !e(k);
      }), ae("click", ve, E), ae("click", Te, W), ae("click", je, S), V(R, H);
    },
    children: (R, H) => {
      var Y = yw(), O = u(Y), b = d(u(O), 2), he = u(b);
      {
        let Ce = /* @__PURE__ */ _(() => e(p).globalEdgeDock ? "Global rail enabled" : "Admin-only rail"), Gt = /* @__PURE__ */ _(() => e(p).globalEdgeDock ? "accent" : "neutral");
        kt(he, {
          get label() {
            return e(Ce);
          },
          get tone() {
            return e(Gt);
          }
        });
      }
      var J = d(he, 2);
      kt(J, {
        get label() {
          return a[e(p).dockLabelMode];
        },
        tone: "info"
      }), h(b), h(O);
      var re = d(O, 2), le = u(re), ve = d(u(le), 2);
      h(le);
      var Te = d(le, 2), je = u(Te), te = d(u(je), 2), be = u(te), ke = d(u(be), 2), B = u(ke);
      tt(B, { name: "window-preferences" }), h(ke), Cr(2), h(be);
      var F = d(be, 2), ue = d(u(F), 2), Se = u(ue);
      tt(Se, { name: "catalog-search" }), h(ue), Cr(2), h(F);
      var Pe = d(F, 2), Ue = d(u(Pe), 2), ye = u(Ue);
      tt(ye, { name: "display-mode" }), h(Ue), Cr(2), h(Pe), h(te), h(je), h(Te), h(re);
      var _e = d(re, 2), ot = u(_e), _t = u(ot), Pt = d(u(_t), 2);
      ya(Pt, {
        title: "Pinned dock presence",
        text: "Enable global dock access when pinned admin tools should be reachable from any page. Turn it off to keep the dock inside the admin workspace only."
      }), h(_t), h(ot);
      var zt = d(ot, 2), Nt = u(zt), qt = u(Nt);
      Tt(qt), Cr(2), h(Nt), h(zt), h(_e);
      var ft = d(_e, 2), vt = u(ft), ct = u(vt), yt = d(u(ct), 2);
      ya(yt, {
        title: "Dock labels",
        text: "Hover labels stay compact, always shows titles full-time, pop-out grows the title tag out beside the active button, and hidden leaves icons only."
      }), h(ct), h(vt);
      var we = d(vt, 2), ze = u(we), Je = u(ze), N = u(Je), D = d(N, 2), Me = u(D);
      Me.value = Me.__value = "hover";
      var L = d(Me);
      L.value = L.__value = "always";
      var de = d(L);
      de.value = de.__value = "popout";
      var Le = d(de);
      Le.value = Le.__value = "hidden", h(D);
      var We;
      fr(D), h(Je);
      var Ve = d(Je, 2), m = u(Ve), me = ge(m), $e = d(m, 2);
      Tt($e), h(Ve), h(ze), h(we), h(ft);
      var K = d(ft, 2), it = u(K), Be = u(it), bt = d(u(Be), 2);
      ya(bt, {
        title: "Dock geometry",
        text: "Increase width to get the longer Windows 8 or 10 style capsule buttons. Raise icon scale if the glyphs feel too small after widening the rail."
      }), h(Be), h(it);
      var He = d(it, 2), Ze = u(He), gt = u(Ze), Mt = u(gt), tr = ge(Mt), Xe = d(Mt, 2);
      Tt(Xe), h(gt);
      var Ct = d(gt, 2), Dt = u(Ct), $t = ge(Dt), br = d(Dt, 2);
      Tt(br), h(Ct);
      var Pr = d(Ct, 2), rr = u(Pr), zr = ge(rr), Er = d(rr, 2);
      Tt(Er), h(Pr);
      var ta = d(Pr, 2), yn = u(ta), Ae = ge(yn), Ht = d(yn, 2);
      Tt(Ht), h(ta), h(Ze), h(He), h(K), h(Y), pe(() => {
        ve.disabled = !e(k), $r(Te, e(M)), z(te, "data-label-mode", e(p).dockLabelMode), nd(qt, e(p).globalEdgeDock), z(N, "for", `${n}-dock-label-mode`), z(D, "id", `${n}-dock-label-mode`), We !== (We = e(p).dockLabelMode) && (D.value = (D.__value = We) ?? "", mr(D, We)), z(m, "for", `${n}-dock-offset`), oe(me, `Dock inset (${e(p).dockOffset ?? ""}px)`), z($e, "id", `${n}-dock-offset`), Fr($e, e(p).dockOffset), z(Mt, "for", `${n}-dock-size`), oe(tr, `Dock button size (${e(p).dockButtonSize ?? ""}px)`), z(Xe, "id", `${n}-dock-size`), Fr(Xe, e(p).dockButtonSize), z(Dt, "for", `${n}-dock-width`), oe($t, `Dock button width (${e(p).dockButtonWidth ?? ""}px)`), z(br, "id", `${n}-dock-width`), Fr(br, e(p).dockButtonWidth), z(rr, "for", `${n}-dock-icon-scale`), oe(zr, `Dock icon scale (${e(p).dockIconScale ?? ""}%)`), z(Er, "id", `${n}-dock-icon-scale`), Fr(Er, e(p).dockIconScale), z(yn, "for", `${n}-dock-gap`), oe(Ae, `Dock spacing (${e(p).dockGap ?? ""}px)`), z(Ht, "id", `${n}-dock-gap`), Fr(Ht, e(p).dockGap);
      }), ae("click", ve, S), ae("change", qt, (Ce) => P({ globalEdgeDock: Ce.currentTarget.checked })), ae("change", D, (Ce) => P({ dockLabelMode: Ce.currentTarget.value })), ae("input", $e, (Ce) => P({ dockOffset: Number.parseInt(Ce.currentTarget.value, 10) })), ae("input", Xe, (Ce) => P({
        dockButtonSize: Number.parseInt(Ce.currentTarget.value, 10)
      })), ae("input", br, (Ce) => P({
        dockButtonWidth: Number.parseInt(Ce.currentTarget.value, 10)
      })), ae("input", Er, (Ce) => P({
        dockIconScale: Number.parseInt(Ce.currentTarget.value, 10)
      })), ae("input", Ht, (Ce) => P({ dockGap: Number.parseInt(Ce.currentTarget.value, 10) })), V(R, Y);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(C);
}
ln(["click", "change", "input"]);
Ft(
  hd,
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
var kw = /* @__PURE__ */ ee('<div class="footer-row svelte-zhcicw"><span class="footer-copy svelte-zhcicw"><!></span></div>'), _w = /* @__PURE__ */ ee('<div class="empty-state svelte-zhcicw">No roles found.</div>'), qw = /* @__PURE__ */ ee('<p class="role-description svelte-zhcicw"> </p>'), Sw = /* @__PURE__ */ ee('<span class="entitlement-chip svelte-zhcicw"> </span>'), Tw = /* @__PURE__ */ ee('<article class="role-row svelte-zhcicw"><div class="role-row-header svelte-zhcicw"><div class="role-identity svelte-zhcicw"><strong class="role-name svelte-zhcicw"> </strong> <span class="role-id svelte-zhcicw"> </span></div> <div class="role-badges svelte-zhcicw"><!> <!></div></div> <!> <div class="entitlement-wrap svelte-zhcicw"></div></article>'), jw = /* @__PURE__ */ ee('<div class="list-shell svelte-zhcicw"></div>');
const Pw = {
  hash: "svelte-zhcicw",
  code: `.list-shell.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.role-row.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.role-row-header.svelte-zhcicw {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.75rem;}.role-identity.svelte-zhcicw,
  .role-badges.svelte-zhcicw {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.role-badges.svelte-zhcicw {align-items:flex-end;}.role-name.svelte-zhcicw {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.role-id.svelte-zhcicw,
  .role-description.svelte-zhcicw,
  .footer-copy.svelte-zhcicw,
  .empty-state.svelte-zhcicw {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.role-id.svelte-zhcicw {font-family:var(--efs-font-mono);}.role-description.svelte-zhcicw {margin:0;}.entitlement-wrap.svelte-zhcicw {display:flex;flex-wrap:wrap;gap:0.45rem;}.entitlement-chip.svelte-zhcicw {display:inline-flex;align-items:center;min-height:1.9rem;padding:0 0.75rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);background:color-mix(in srgb, var(--shell-row-hover), transparent 10%);color:var(--shell-text);font-family:var(--efs-font-mono);font:var(--efs-font-label);font-family:var(--efs-font-mono);}.empty-state.svelte-zhcicw {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-zhcicw {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.role-badges.svelte-zhcicw {align-items:flex-start;}
  }`
};
function ud(t, r) {
  Ot(r, !0), Bt(t, Pw);
  let n = y(r, "roles", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), s = y(r, "pinned", 7, !1), l = y(r, "onOpen", 7), g = y(r, "onTogglePin", 7), w = /* @__PURE__ */ _(() => a() === "card" ? n().slice(0, 6) : n());
  var x = {
    get roles() {
      return n();
    },
    set roles(q) {
      n(q), f();
    },
    get mode() {
      return a();
    },
    set mode(q = "card") {
      a(q), f();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(q) {
      o(q), f();
    },
    get open() {
      return i();
    },
    set open(q = !1) {
      i(q), f();
    },
    get pinned() {
      return s();
    },
    set pinned(q = !1) {
      s(q), f();
    },
    get onOpen() {
      return l();
    },
    set onOpen(q) {
      l(q), f();
    },
    get onTogglePin() {
      return g();
    },
    set onTogglePin(q) {
      g(q), f();
    }
  };
  return dn(t, {
    eyebrow: "Roles",
    title: "Tenant role catalog",
    description: "Inspect role ids, entitlement bundles, and which presets are reserved for operator workflows.",
    get mode() {
      return a();
    },
    get dataTestid() {
      return o();
    },
    get open() {
      return i();
    },
    get pinned() {
      return s();
    },
    get onOpen() {
      return l();
    },
    get onTogglePin() {
      return g();
    },
    footer: (p) => {
      var k = kw(), M = u(k), P = u(M);
      {
        var S = (W) => {
          var C = Xr();
          pe(() => oe(C, `Showing ${e(w).length ?? ""} of ${n().length ?? ""} roles.`)), V(W, C);
        }, E = (W) => {
          var C = Xr();
          pe(() => oe(C, `${n().length ?? ""} total role${n().length === 1 ? "" : "s"}.`)), V(W, C);
        };
        ce(P, (W) => {
          n().length > e(w).length ? W(S) : W(E, -1);
        });
      }
      h(M), h(k), V(p, k);
    },
    children: (p, k) => {
      var M = qa(), P = Zt(M);
      {
        var S = (W) => {
          var C = _w();
          V(W, C);
        }, E = (W) => {
          var C = jw();
          Lt(C, 21, () => e(w), (I) => I.id, (I, R) => {
            var H = Tw(), Y = u(H), O = u(Y), b = u(O), he = ge(b, !0), J = d(b, 2), re = ge(J, !0);
            h(O);
            var le = d(O, 2), ve = u(le);
            {
              var Te = (F) => {
                kt(F, { label: "system", tone: "warning" });
              };
              ce(ve, (F) => {
                e(R).system && F(Te);
              });
            }
            var je = d(ve, 2);
            {
              var te = (F) => {
                kt(F, { label: "operator only", tone: "danger" });
              };
              ce(je, (F) => {
                e(R).operatorOnly && F(te);
              });
            }
            h(le), h(Y);
            var be = d(Y, 2);
            {
              var ke = (F) => {
                var ue = qw(), Se = ge(ue, !0);
                pe(() => oe(Se, e(R).description)), V(F, ue);
              };
              ce(be, (F) => {
                e(R).description && F(ke);
              });
            }
            var B = d(be, 2);
            Lt(B, 21, () => e(R).entitlements, (F) => `${e(R).id}:${F}`, (F, ue) => {
              var Se = Sw(), Pe = ge(Se, !0);
              pe(() => oe(Pe, e(ue))), V(F, Se);
            }), h(B), h(H), pe(() => {
              oe(he, e(R).name), oe(re, e(R).id);
            }), V(I, H);
          }), h(C), V(W, C);
        };
        ce(P, (W) => {
          n().length === 0 ? W(S) : W(E, -1);
        });
      }
      V(p, M);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(x);
}
Ft(
  ud,
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
var zw = /* @__PURE__ */ ee('<div class="footer-row svelte-1wpzpgs"><!> <span class="footer-copy svelte-1wpzpgs">Read-only payload mirror from the current tenant.</span></div>'), Mw = /* @__PURE__ */ ee('<div class="code-shell svelte-1wpzpgs"><pre class="svelte-1wpzpgs"> </pre></div>');
const Ww = {
  hash: "svelte-1wpzpgs",
  code: `.code-shell.svelte-1wpzpgs {min-height:0;}pre.svelte-1wpzpgs {margin:0;min-height:14rem;max-height:min(32rem, 62vh);overflow:auto;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 24%),
      color-mix(in srgb, var(--shell-surface), black 8%);color:var(--shell-text);padding:1rem 1.1rem;font-family:var(--efs-font-mono);font:var(--efs-font-body-xs);font-family:var(--efs-font-mono);line-height:1.8;white-space:pre-wrap;word-break:break-word;}.footer-row.svelte-1wpzpgs {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-copy.svelte-1wpzpgs {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}`
};
function pd(t, r) {
  Ot(r, !0), Bt(t, Ww);
  let n = y(r, "settings", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), s = y(r, "pinned", 7, !1), l = y(r, "onOpen", 7), g = y(r, "onTogglePin", 7), w = /* @__PURE__ */ _(() => n() ? Object.keys(n()).length : 0), x = /* @__PURE__ */ _(() => JSON.stringify(n() ?? {}, null, 2));
  var q = {
    get settings() {
      return n();
    },
    set settings(p) {
      n(p), f();
    },
    get mode() {
      return a();
    },
    set mode(p = "card") {
      a(p), f();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(p) {
      o(p), f();
    },
    get open() {
      return i();
    },
    set open(p = !1) {
      i(p), f();
    },
    get pinned() {
      return s();
    },
    set pinned(p = !1) {
      s(p), f();
    },
    get onOpen() {
      return l();
    },
    set onOpen(p) {
      l(p), f();
    },
    get onTogglePin() {
      return g();
    },
    set onTogglePin(p) {
      g(p), f();
    }
  };
  return dn(t, {
    eyebrow: "Settings",
    title: "Raw tenant configuration",
    description: "Inspect the live settings payload that shapes explorer policy, display defaults, and shell behavior.",
    get mode() {
      return a();
    },
    get dataTestid() {
      return o();
    },
    get open() {
      return i();
    },
    get pinned() {
      return s();
    },
    get onOpen() {
      return l();
    },
    get onTogglePin() {
      return g();
    },
    footer: (k) => {
      var M = zw(), P = u(M);
      {
        let S = /* @__PURE__ */ _(() => `${e(w)} top-level keys`);
        kt(P, {
          get label() {
            return e(S);
          },
          tone: "accent"
        });
      }
      Cr(2), h(M), V(k, M);
    },
    children: (k, M) => {
      var P = Mw(), S = u(P), E = ge(S, !0);
      h(P), pe(() => oe(E, e(x))), V(k, P);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(q);
}
Ft(
  pd,
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
var Cw = /* @__PURE__ */ ee('<div class="footer-row svelte-1vpo77r"><span class="footer-copy svelte-1vpo77r"><!></span></div>'), $w = /* @__PURE__ */ ee('<div class="empty-state svelte-1vpo77r">No users provisioned yet.</div>'), Aw = /* @__PURE__ */ ee('<article class="user-row svelte-1vpo77r"><div class="user-row-main svelte-1vpo77r"><div class="user-identity svelte-1vpo77r"><strong class="user-name svelte-1vpo77r"> </strong> <span class="user-display svelte-1vpo77r"> </span></div> <div class="user-meta svelte-1vpo77r"><!> <span class="user-role svelte-1vpo77r"> </span></div></div></article>'), Ew = /* @__PURE__ */ ee('<div class="list-shell svelte-1vpo77r"></div>');
const Rw = {
  hash: "svelte-1vpo77r",
  code: `.list-shell.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.user-row.svelte-1vpo77r {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.user-row-main.svelte-1vpo77r {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.9rem;padding:0.95rem 1rem;}.user-identity.svelte-1vpo77r,
  .user-meta.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.user-meta.svelte-1vpo77r {align-items:flex-end;}.user-name.svelte-1vpo77r {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.user-display.svelte-1vpo77r,
  .user-role.svelte-1vpo77r,
  .footer-copy.svelte-1vpo77r,
  .empty-state.svelte-1vpo77r {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.user-role.svelte-1vpo77r {font-family:var(--efs-font-mono);}.empty-state.svelte-1vpo77r {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-1vpo77r {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.user-meta.svelte-1vpo77r {align-items:flex-start;}
  }`
};
function wd(t, r) {
  Ot(r, !0), Bt(t, Rw);
  let n = y(r, "users", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), s = y(r, "pinned", 7, !1), l = y(r, "onOpen", 7), g = y(r, "onTogglePin", 7), w = /* @__PURE__ */ _(() => a() === "card" ? n().slice(0, 6) : n());
  function x(p) {
    switch (p.toLowerCase()) {
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
  var q = {
    get users() {
      return n();
    },
    set users(p) {
      n(p), f();
    },
    get mode() {
      return a();
    },
    set mode(p = "card") {
      a(p), f();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(p) {
      o(p), f();
    },
    get open() {
      return i();
    },
    set open(p = !1) {
      i(p), f();
    },
    get pinned() {
      return s();
    },
    set pinned(p = !1) {
      s(p), f();
    },
    get onOpen() {
      return l();
    },
    set onOpen(p) {
      l(p), f();
    },
    get onTogglePin() {
      return g();
    },
    set onTogglePin(p) {
      g(p), f();
    }
  };
  return dn(t, {
    eyebrow: "Users",
    title: "Provisioned accounts",
    description: "Review active logins, role assignments, and account state without switching context.",
    get mode() {
      return a();
    },
    get dataTestid() {
      return o();
    },
    get open() {
      return i();
    },
    get pinned() {
      return s();
    },
    get onOpen() {
      return l();
    },
    get onTogglePin() {
      return g();
    },
    footer: (k) => {
      var M = Cw(), P = u(M), S = u(P);
      {
        var E = (C) => {
          var I = Xr();
          pe(() => oe(I, `Showing ${e(w).length ?? ""} of ${n().length ?? ""} users.`)), V(C, I);
        }, W = (C) => {
          var I = Xr();
          pe(() => oe(I, `${n().length ?? ""} total user${n().length === 1 ? "" : "s"}.`)), V(C, I);
        };
        ce(S, (C) => {
          n().length > e(w).length ? C(E) : C(W, -1);
        });
      }
      h(P), h(M), V(k, M);
    },
    children: (k, M) => {
      var P = qa(), S = Zt(P);
      {
        var E = (C) => {
          var I = $w();
          V(C, I);
        }, W = (C) => {
          var I = Ew();
          Lt(I, 21, () => e(w), (R) => R.id, (R, H) => {
            var Y = Aw(), O = u(Y), b = u(O), he = u(b), J = ge(he, !0), re = d(he, 2), le = ge(re, !0);
            h(b);
            var ve = d(b, 2), Te = u(ve);
            {
              let be = /* @__PURE__ */ _(() => x(e(H).status));
              kt(Te, {
                get label() {
                  return e(H).status;
                },
                get tone() {
                  return e(be);
                }
              });
            }
            var je = d(Te, 2), te = ge(je, !0);
            h(ve), h(O), h(Y), pe(() => {
              oe(J, e(H).username), oe(le, e(H).name || "No display name"), oe(te, e(H).roleId);
            }), V(R, Y);
          }), h(I), V(C, I);
        };
        ce(S, (C) => {
          n().length === 0 ? C(E) : C(W, -1);
        });
      }
      V(k, P);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(q);
}
Ft(
  wd,
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
var Ow = /* @__PURE__ */ ee('<div class="footer-row svelte-1u1chkd"><div class="footer-pills svelte-1u1chkd"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div> <div class="footer-actions svelte-1u1chkd"><button class="prefs-button svelte-1u1chkd" type="button">Revert</button> <button class="prefs-button svelte-1u1chkd" type="button">Defaults</button> <button class="prefs-button is-primary svelte-1u1chkd" type="button">Apply</button></div></div>'), Wc = /* @__PURE__ */ ee("<option> </option>"), Iw = /* @__PURE__ */ ee('<button type="button" aria-label="Close" tabindex="-1"><!></button> <button type="button" aria-label="Minimize" tabindex="-1"><!></button> <button type="button" aria-label="Maximize" tabindex="-1"><!></button>', 1), Dw = /* @__PURE__ */ ee('<button type="button" aria-label="Minimize" tabindex="-1"><!></button> <button type="button" aria-label="Maximize" tabindex="-1"><!></button> <button type="button" aria-label="Close" tabindex="-1"><!></button>', 1), Lw = /* @__PURE__ */ ee('<div class="prefs-layout svelte-1u1chkd"><section class="prefs-section theme-group svelte-1u1chkd"><div class="prefs-section-head svelte-1u1chkd"><div class="prefs-section-title svelte-1u1chkd"><div class="prefs-heading-stack svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Shell Package And Presets</span> <h4 class="svelte-1u1chkd">Preset, font, coverage, and custom save</h4></div> <!></div></div> <div class="prefs-section-body package-body svelte-1u1chkd"><div class="prefs-grid prefs-grid-compact svelte-1u1chkd"><div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Preset</label> <select class="svelte-1u1chkd"></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Site font</label> <select class="svelte-1u1chkd"></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Theme coverage</label> <select class="svelte-1u1chkd"><option>Contained shell</option><option>Expand across site</option></select></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="preset-strip svelte-1u1chkd"><div class="preset-strip-copy svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Preset Status</span> <strong class="svelte-1u1chkd"> </strong> <span class="svelte-1u1chkd"><!></span></div> <div class="profiles-save package-save svelte-1u1chkd"><input type="text" class="svelte-1u1chkd"/> <button class="prefs-button svelte-1u1chkd" type="button">Save custom preset</button></div></div></div></section> <section class="preview-stage svelte-1u1chkd" aria-label="Window manager preview"><div class="preview-stage-head svelte-1u1chkd"><div><span class="preview-kicker svelte-1u1chkd">Preview only</span> <h4 class="preview-heading svelte-1u1chkd">Title treatment and shell chrome</h4> <p class="preview-status svelte-1u1chkd"> </p></div></div> <div><div class="preview-window-shadow svelte-1u1chkd"></div> <div><div>Window manager preview</div> <div aria-hidden="true"><!></div></div> <div><div class="preview-body-grid svelte-1u1chkd"><article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Pinned widget</span> <strong class="svelte-1u1chkd">Workspace buttons</strong> <p class="svelte-1u1chkd">Preview title balance, chrome edge weight, and live legibility against content.</p></article> <article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Content density</span> <strong class="svelte-1u1chkd">Responsive shell</strong> <p class="svelte-1u1chkd">Preview how the header chrome, border width, and glass treatment sit over content.</p></article></div></div></div> <div class="preview-apply-row svelte-1u1chkd"><div class="preview-apply-copy svelte-1u1chkd"><strong class="svelte-1u1chkd">Apply preview to the live shell</strong> <span class="svelte-1u1chkd">Commit the current frame, title, and chrome settings before you leave this panel or save a custom shell package.</span></div> <button class="prefs-button is-primary svelte-1u1chkd" type="button">Apply</button></div></section> <section class="prefs-section custom-section svelte-1u1chkd"><div class="prefs-section-head svelte-1u1chkd"><div class="prefs-section-title svelte-1u1chkd"><div class="prefs-heading-stack svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Chrome Treatment</span> <h4 class="svelte-1u1chkd">Frame geometry and optical finish</h4></div> <!></div></div> <div class="prefs-section-body svelte-1u1chkd"><div class="custom-state-copy svelte-1u1chkd"><strong class="svelte-1u1chkd"><!></strong> <span class="svelte-1u1chkd"><!></span></div> <fieldset class="preset-controlled-fields svelte-1u1chkd"><div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Frame geometry</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Button layout</label> <select class="svelte-1u1chkd"><option>Windows 11</option><option>Windows 10</option><option>Windows 8</option><option>Windows 7</option><option>macOS</option><option>Ubuntu</option><option>Xubuntu</option><option>GNOME</option></select></div> <div><label class="svelte-1u1chkd">System button side</label> <select class="svelte-1u1chkd"><option>Right edge</option><option>Left edge</option></select></div> <div><label class="svelte-1u1chkd">Chrome style</label> <select class="svelte-1u1chkd"><option>Solid</option><option>Glass</option><option>Mica</option><option>Frost</option><option>Pane</option><option>Transparent</option></select></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Beam, glass, and colorization</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Beam / texture profile</label> <select class="svelte-1u1chkd"><option>No beam</option><option>Windows 7 Aero beam</option><option>Vista beam</option><option>XP Luna beam</option><option>Windows 9x bevel</option><option>KDE sheen</option><option>Mica highlight</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd">Gloss profile</label> <select class="svelte-1u1chkd"><option>No gloss</option><option>Windows 7 glass</option><option>Vista glass</option><option>KDE satin</option><option>Mica haze</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="8" max="36" step="1" class="svelte-1u1chkd"/></div> <label><input type="checkbox" class="svelte-1u1chkd"/> <span>Tint the titlebar, borders, and controls using the current app theme colors.</span></label> <div><label class="svelte-1u1chkd">Theme color source</label> <select class="svelte-1u1chkd"><option>Primary accent</option><option>Accent highlight</option><option>Accent wash</option><option>Secondary accent</option><option>Secondary wash</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Interaction and frame details</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Title alignment</label> <select class="svelte-1u1chkd"><option>Left</option><option>Center</option><option>Right</option></select></div> <div><label class="svelte-1u1chkd">Title tone</label> <select class="svelte-1u1chkd"><option>Preset default</option><option>Light title</option><option>Dark title</option></select></div> <div><label class="svelte-1u1chkd">Title effect</label> <select class="svelte-1u1chkd"><option>Preset effect</option><option>Flat</option><option>Shadowed</option><option>Aero glow</option><option>Embossed</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="28" max="72" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="75" max="140" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd">Shift drag action</label> <select class="svelte-1u1chkd"><option>Pin window</option><option>No extra action</option></select></div> <div><label class="svelte-1u1chkd">Side resize mode</label> <select class="svelte-1u1chkd"><option>Anchored sides</option><option>Mirror both sides</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="12" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="32" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="20" step="1" class="svelte-1u1chkd"/></div> <label><input type="checkbox" class="svelte-1u1chkd"/> <span>Restore the previous snap if you drag free and release without shift.</span></label></div></fieldset></div></section></div>');
const Bw = {
  hash: "svelte-1u1chkd",
  code: `.prefs-layout.svelte-1u1chkd {display:flex;flex-direction:column;gap:1rem;}.package-body.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.95rem;}.preset-strip.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.85rem;padding:0.9rem 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),\r
      color-mix(in srgb, var(--shell-surface), transparent 8%);}.preset-strip[data-custom='true'].svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 48%);background:radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 90%),\r
        transparent 36%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),\r
      color-mix(in srgb, var(--shell-surface), transparent 8%);}.preset-strip-copy.svelte-1u1chkd {display:flex;flex:1 1 18rem;min-width:0;flex-direction:column;gap:0.24rem;}.preset-strip-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preset-strip-copy.svelte-1u1chkd span:where(.svelte-1u1chkd):last-child {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.package-save.svelte-1u1chkd {align-items:stretch;min-width:min(100%, 23rem);}.preview-stage.svelte-1u1chkd {position:relative;overflow:hidden;padding:1.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:24px;background:linear-gradient(\r
        90deg,\r
        transparent 0,\r
        transparent calc(100% / 6 - 1px),\r
        color-mix(in srgb, var(--shell-border), transparent 88%) calc(100% / 6 - 1px),\r
        transparent calc(100% / 6)\r
      ),\r
      radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 90%),\r
        transparent 30%\r
      ),\r
      color-mix(in srgb, var(--shell-surface), transparent 4%);}.preview-stage-head.svelte-1u1chkd,\r
  .preview-apply-row.svelte-1u1chkd,\r
  .prefs-section-title.svelte-1u1chkd,\r
  .prefs-mini-title-wrap.svelte-1u1chkd {display:flex;align-items:center;justify-content:space-between;gap:0.85rem;}.preview-kicker.svelte-1u1chkd {display:inline-flex;color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.preview-heading.svelte-1u1chkd {margin:0.18rem 0 0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-status.svelte-1u1chkd {margin:0.32rem 0 0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.preview-window.svelte-1u1chkd {--preview-radius: 18px;--preview-titlebar-height: 44px;--preview-shell-scale: 1;--preview-system-width: calc(2.55rem * var(--preview-shell-scale));--preview-system-height:\r
      min(\r
        calc(2rem * var(--preview-shell-scale)),\r
        max(1.56rem, calc(var(--preview-titlebar-height) - max(0.65rem, calc(var(--preview-chrome-padding) * 0.85))))\r
      );--preview-system-radius: max(8px, calc(10px * var(--preview-shell-scale)));--preview-system-icon-size: calc(0.88rem * var(--preview-shell-scale));--preview-control-border-width: clamp(0px, calc(var(--preview-border-width) * 0.9), 3px);--preview-control-radius: max(8px, calc(10px * var(--preview-shell-scale)));--preview-top-space:\r
      max(0.16rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.52));--preview-bottom-space:\r
      max(0.12rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.48));--preview-panel: var(--efs-window-theme-panel, var(--shell-panel));--preview-surface: var(--efs-window-theme-surface, var(--shell-surface));--preview-border: var(--efs-window-theme-border, var(--shell-border));--preview-hover: var(--efs-window-theme-hover, var(--shell-row-hover));--preview-shadow: var(--efs-window-theme-shadow, var(--preview-shadow-base, 0 24px 56px rgba(0, 0, 0, 0.32)));--preview-tint: var(--efs-window-chrome-tint, var(--shell-primary));--preview-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--preview-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--preview-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--preview-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--preview-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--preview-w7-glass-stripes:\r
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
        left center / 100vw 100vh no-repeat;--preview-vista-glass-stripes:\r
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
        left center / 100vw 100vh no-repeat;position:relative;isolation:isolate;margin-inline:auto;width:min(100%, 34rem);border:var(--preview-border-width) solid color-mix(in srgb, var(--preview-border), transparent 12%);border-radius:var(--preview-radius);overflow:hidden;font-family:var(--preview-font-family);background:radial-gradient(\r
        circle at top right,\r
        color-mix(in srgb, var(--preview-tint), transparent 92%),\r
        transparent 28%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 42%),\r
      color-mix(in srgb, var(--preview-surface), transparent 2%);}.preview-window.svelte-1u1chkd::before {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 28%),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 94%), transparent 46%);opacity:calc(var(--preview-chrome-colorize-opacity) * 0.72);}.preview-window-shadow.svelte-1u1chkd {position:absolute;inset:0;z-index:0;pointer-events:none;box-shadow:var(--preview-shadow),\r
      inset 0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 26%);}.preview-window[data-layout='windows-7'].svelte-1u1chkd {--preview-system-width: 3rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.8rem;--preview-system-radius: 0 0 8px 8px;}.preview-window[data-layout='windows-8'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-10'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 2rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-11'].svelte-1u1chkd {--preview-system-height: 2rem;--preview-system-icon-size: 0.88rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd {--preview-system-width: 2rem;--preview-system-height: 1.75rem;--preview-system-icon-size: 0.76rem;--preview-system-radius: 0;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd {--preview-system-width: 0.9rem;--preview-system-height: 0.9rem;--preview-system-icon-size: 0.48rem;--preview-system-radius: 999px;}.preview-window[data-layout='ubuntu'].svelte-1u1chkd,\r
  .preview-window[data-layout='xubuntu'].svelte-1u1chkd {--preview-system-width: 1rem;--preview-system-height: 1rem;--preview-system-icon-size: 0.5rem;--preview-system-radius: 999px;--preview-control-radius: 999px;}.preview-window[data-layout='gnome'].svelte-1u1chkd {--preview-system-width: 2.6rem;--preview-system-height: 1.82rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 999px;--preview-control-radius: 12px;}.preview-window[data-style='transparent'].svelte-1u1chkd {background:color-mix(in srgb, var(--preview-surface), transparent 12%);}.preview-window[data-style='mica'].svelte-1u1chkd {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 30%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 52%),\r
      color-mix(in srgb, var(--preview-surface), transparent 10%);}.preview-window[data-style='frost'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),\r
      color-mix(in srgb, var(--preview-surface), transparent 16%);}.preview-window[data-style='pane'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.04) 66%, transparent 100%),\r
      color-mix(in srgb, var(--preview-surface), transparent 8%);}.preview-window[data-style='glass'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}.preview-window[data-style='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 40%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),\r
      color-mix(in srgb, var(--preview-panel), transparent 12%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.preview-window[data-style='frost'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.05) 72%),\r
      color-mix(in srgb, var(--preview-panel), transparent 18%);backdrop-filter:blur(16px) saturate(1.12);-webkit-backdrop-filter:blur(16px) saturate(1.12);}.preview-window[data-style='pane'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06) 68%),\r
      color-mix(in srgb, var(--preview-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.preview-chrome.svelte-1u1chkd {position:relative;z-index:1;isolation:isolate;display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;min-height:calc(\r
      var(--preview-system-height) + var(--preview-top-space) + var(--preview-bottom-space)\r
    );padding-top:var(--preview-top-space);padding-bottom:var(--preview-bottom-space);padding-inline:var(--preview-chrome-padding);border-bottom:1px solid color-mix(in srgb, var(--preview-border), transparent 20%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),\r
      color-mix(in srgb, var(--preview-panel), transparent 2%);overflow:hidden;}.preview-chrome.svelte-1u1chkd::before,\r
  .preview-chrome.svelte-1u1chkd::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.preview-chrome.svelte-1u1chkd::before {background:linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);opacity:var(--preview-chrome-colorize-opacity);}.preview-chrome.svelte-1u1chkd::after {background:linear-gradient(\r
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
      );mix-blend-mode:screen;opacity:calc(var(--preview-chrome-texture-opacity) * 0.78);}.preview-window[data-style='transparent'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:transparent;border-bottom-color:transparent;}.preview-window[data-system-placement='left'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {justify-content:flex-start;}.preview-title.svelte-1u1chkd {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));max-width:max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));color:var(--shell-text);font:var(--efs-font-title-sm);font-size:clamp(0.82rem, calc(0.84rem * var(--preview-shell-scale)), 1.08rem);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;transform:translate(-50%, -50%);}.preview-window[data-title-tone='light'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {color:rgba(255, 255, 255, 0.96);}.preview-window[data-title-tone='dark'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {color:rgba(0, 0, 0, 0.88);}.preview-window[data-title-effect='plain'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:none;}.preview-window[data-title-effect='shadow'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 1px 2px rgba(0, 0, 0, 0.4);}.preview-window[data-title-effect='glow'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 0 10px rgba(255, 255, 255, 0.98),\r
      0 0 12px rgba(255, 255, 255, 0.9),\r
      0 0 18px rgba(255, 255, 255, 0.75);}.preview-window[data-title-effect='emboss'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.46),\r
      0 -1px 0 rgba(0, 0, 0, 0.42);}.preview-title.align-left.svelte-1u1chkd {text-align:left;}.preview-title.align-center.svelte-1u1chkd {text-align:center;}.preview-title.align-right.svelte-1u1chkd {text-align:right;}.preview-title.title-bar-text.svelte-1u1chkd {letter-spacing:0;line-height:15px;padding-top:0.18rem;}.preview-controls.svelte-1u1chkd {display:inline-flex;align-items:center;gap:0.25rem;flex:none;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.18rem, calc(var(--preview-chrome-padding) * 0.38));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-controls.windows.svelte-1u1chkd {gap:0.12rem;}.preview-control.svelte-1u1chkd {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:calc(2rem * var(--preview-shell-scale));height:calc(2rem * var(--preview-shell-scale));border:var(--preview-control-border-width) solid\r
      color-mix(in srgb, var(--preview-border), transparent 16%);border-radius:var(--preview-control-radius);background:color-mix(in srgb, var(--preview-panel), transparent 8%);color:var(--shell-muted);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);overflow:hidden;}.preview-control.svelte-1u1chkd::before,\r
  .preview-control.svelte-1u1chkd::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.preview-control.svelte-1u1chkd::before {background:linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 74%),\r
      radial-gradient(circle at top left, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 56%);opacity:calc(var(--preview-chrome-colorize-opacity) * 0.7);}.preview-control.svelte-1u1chkd::after {background:linear-gradient(\r
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
      );mix-blend-mode:screen;opacity:calc(var(--preview-chrome-texture-opacity) * 0.44);}.preview-control.svelte-1u1chkd .app-icon {position:relative;z-index:1;width:var(--preview-system-icon-size);height:var(--preview-system-icon-size);}.preview-controls.windows.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {width:var(--preview-system-width);height:var(--preview-system-height);border-radius:var(--preview-system-radius);border-color:transparent;background:transparent;}.preview-controls.windows.variant-windows-7.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),\r
      color-mix(in srgb, var(--preview-panel), transparent 12%);border-color:color-mix(in srgb, var(--preview-border), transparent 24%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.preview-controls.windows.variant-ubuntu.svelte-1u1chkd,\r
  .preview-controls.windows.variant-xubuntu.svelte-1u1chkd {gap:0.32rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-color:color-mix(in srgb, var(--preview-border), transparent 6%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.34),\r
      inset -1px -1px 0 rgba(0, 0, 0, 0.24);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) {gap:0.35rem;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {color:rgba(0, 0, 0, 0.46);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(1) {background:#ff6059;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(2) {background:#f5c042;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(3) {background:#2dcf5f;}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-chrome:where(.svelte-1u1chkd) {--preview-w7-title-bg:\r
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),\r
      #4580c4;--preview-w7-control-bg:\r
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);--preview-w7-control-border: #0000004d;background:linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),\r
      var(--preview-w7-title-bg);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.54),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.54);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.48),\r
        rgba(255, 255, 255, 0.22) 18%,\r
        rgba(255, 255, 255, 0.06) 56%,\r
        transparent 88%\r
      ),\r
      radial-gradient(134% 124% at 10% -20%, rgba(255, 255, 255, 0.38), transparent 42%),\r
      radial-gradient(92% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%),\r
      linear-gradient(\r
        112deg,\r
        transparent 12%,\r
        rgba(255, 255, 255, 0.16) 38%,\r
        rgba(255, 255, 255, 0.05) 58%,\r
        transparent 80%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.92);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.22);border:1px solid var(--preview-w7-control-border);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.8),\r
      1px 0 0 rgba(255, 255, 255, 0.66),\r
      -1px 0 0 rgba(255, 255, 255, 0.66);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border:0;border-right:1px solid var(--preview-w7-control-border);border-radius:0;background:var(--preview-w7-control-bg);color:rgba(0, 0, 0, 0.76);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):last-child {border-right:0;}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.close:where(.svelte-1u1chkd) {min-width:var(--preview-system-width);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),\r
      linear-gradient(\r
        rgba(224, 161, 151, 0.9),\r
        rgba(207, 121, 106, 0.95) 25% 50%,\r
        rgba(213, 79, 54, 0.96) 50%\r
      );color:rgba(255, 255, 255, 0.94);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.22rem, calc(var(--preview-chrome-padding) * 0.62));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.24));--preview-vista-title-bg:\r
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),\r
      #6c8fbe;--preview-vista-control-bg:\r
      linear-gradient(\r
        rgba(255, 255, 255, 0.62),\r
        rgba(255, 255, 255, 0.34) 45%,\r
        rgba(0, 0, 0, 0.12) 50%,\r
        rgba(0, 0, 0, 0.14) 76%,\r
        rgba(255, 255, 255, 0.54)\r
      );background:linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),\r
      var(--preview-vista-title-bg);backdrop-filter:blur(9px) saturate(1.02);-webkit-backdrop-filter:blur(9px) saturate(1.02);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.62),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.62);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, 0.56),\r
        rgba(255, 255, 255, 0.28) 18%,\r
        rgba(255, 255, 255, 0.08) 58%,\r
        transparent 90%\r
      ),\r
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, 0.44), transparent 44%),\r
      radial-gradient(104% 118% at 100% 0%, rgba(255, 255, 255, 0.24), transparent 42%),\r
      linear-gradient(\r
        116deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, 0.18) 36%,\r
        rgba(255, 255, 255, 0.06) 58%,\r
        transparent 82%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.96);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.26);border:1px solid rgba(0, 0, 0, 0.35);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.84),\r
      1px 0 0 rgba(255, 255, 255, 0.72),\r
      -1px 0 0 rgba(255, 255, 255, 0.72);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border:0;border-right:1px solid rgba(0, 0, 0, 0.35);border-radius:0;background:var(--preview-vista-control-bg);color:rgba(0, 0, 0, 0.82);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.72),\r
      inset 0 1px 0 rgba(255, 255, 255, 0.38);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):last-child {border-right:0;}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.close:where(.svelte-1u1chkd) {min-width:var(--preview-system-width);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),\r
      linear-gradient(\r
        rgba(233, 176, 166, 0.94),\r
        rgba(211, 110, 95, 0.96) 25% 50%,\r
        rgba(201, 52, 37, 0.98) 50%\r
      );color:rgba(255, 255, 255, 0.96);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),\r
      color-mix(in srgb, var(--preview-panel), transparent 10%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),\r
      radial-gradient(\r
        124% 134% at 100% 0%,\r
        color-mix(in srgb, var(--preview-tint), transparent 88%),\r
        transparent 38%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),\r
      linear-gradient(\r
        138deg,\r
        rgba(255, 255, 255, 0.1),\r
        transparent 28%,\r
        rgba(255, 255, 255, 0.04) 58%,\r
        transparent 84%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.62);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:11px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),\r
      color-mix(in srgb, var(--preview-panel), transparent 8%);}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.1));}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:0;}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.14rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),\r
      0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 68%);}.preview-window[data-theme='xubuntu'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),\r
      color-mix(in srgb, var(--preview-panel), transparent 14%);}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.16rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:color-mix(in srgb, var(--preview-panel), transparent 2%);box-shadow:none;}.preview-window[data-beam='windows-7'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:var(--preview-w7-glass-stripes),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.6 + var(--preview-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.28 + var(--preview-beam-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.06 + var(--preview-beam-intensity) * 0.05)) 48%,\r
        transparent 74%\r
      ),\r
      radial-gradient(\r
        154% 128% at 52% -34%,\r
        rgba(255, 255, 255, calc(0.56 + var(--preview-beam-intensity) * 0.22)),\r
        transparent 38%\r
      ),\r
      radial-gradient(\r
        116% 116% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.18 + var(--preview-beam-intensity) * 0.1)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        104deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.26 + var(--preview-beam-intensity) * 0.16)) 22%,\r
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.08)) 40%,\r
        transparent 60%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.44 + var(--preview-beam-intensity) * 0.98),\r
      1\r
    );}.preview-window[data-beam='vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:var(--preview-vista-glass-stripes),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.68 + var(--preview-beam-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.34 + var(--preview-beam-intensity) * 0.14)) 18%,\r
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.05)) 52%,\r
        transparent 76%\r
      ),\r
      radial-gradient(\r
        164% 136% at 50% -42%,\r
        rgba(255, 255, 255, calc(0.62 + var(--preview-beam-intensity) * 0.24)),\r
        transparent 40%\r
      ),\r
      radial-gradient(\r
        120% 122% at 100% 0%,\r
        rgba(255, 255, 255, calc(0.22 + var(--preview-beam-intensity) * 0.14)),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        106deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.16)) 20%,\r
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.08)) 40%,\r
        transparent 62%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 78%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 1),\r
      1\r
    );}.preview-window[data-beam='xp-luna'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 88%, var(--preview-tint) 12%),\r
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        146% 120% at 16% -6%,\r
        color-mix(in srgb, white 84%, var(--preview-tint) 16%),\r
        transparent 44%\r
      ),\r
      linear-gradient(\r
        96deg,\r
        transparent 0,\r
        rgba(255, 255, 255, calc(0.14 + var(--preview-beam-intensity) * 0.08)) 22%,\r
        transparent 48%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 76%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.62 + var(--preview-beam-intensity) * 0.88),\r
      1\r
    );}.preview-window[data-beam='windows-9x'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.14)) 0 2px,\r
        rgba(255, 255, 255, calc(0.12 + var(--preview-beam-intensity) * 0.06)) 2px 5px,\r
        transparent 5px\r
      ),\r
      linear-gradient(\r
        90deg,\r
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 0 1px,\r
        transparent 1px 100%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 74%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.78),\r
      1\r
    );}.preview-window[data-beam='kde'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.24 + var(--preview-beam-intensity) * 0.1)),\r
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.05)) 30%,\r
        transparent 78%\r
      ),\r
      radial-gradient(\r
        142% 118% at 18% -8%,\r
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)),\r
        transparent 42%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 80%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.52 + var(--preview-beam-intensity) * 0.82),\r
      1\r
    );}.preview-window[data-beam='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:radial-gradient(\r
        144% 124% at 18% -18%,\r
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.06)),\r
        transparent 42%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.04)),\r
        transparent 76%\r
      ),\r
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 90%), transparent 76%),\r
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 42%);opacity:clamp(\r
      0,\r
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.74),\r
      1\r
    );}.preview-window[data-gloss='none'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after,\r
  .preview-window[data-gloss='none'].svelte-1u1chkd .preview-control:where(.svelte-1u1chkd)::after {opacity:0;}.preview-window[data-gloss='windows-7'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.3 + var(--preview-gloss-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.1)) 18%,\r
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.04)) 58%,\r
        transparent 88%\r
      ),\r
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.18)), transparent 46%),\r
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.07 + var(--preview-gloss-intensity) * 0.1)), transparent 42%),\r
      linear-gradient(\r
        114deg,\r
        transparent 12%,\r
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.1)) calc(28% + var(--preview-gloss-spacing) * 0.22),\r
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.03)) calc(54% + var(--preview-gloss-spacing) * 0.1),\r
        transparent 82%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 1.02);}.preview-window[data-gloss='vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.36 + var(--preview-gloss-intensity) * 0.22)),\r
        rgba(255, 255, 255, calc(0.14 + var(--preview-gloss-intensity) * 0.12)) 18%,\r
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.05)) 58%,\r
        transparent 90%\r
      ),\r
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, calc(0.22 + var(--preview-gloss-intensity) * 0.22)), transparent 44%),\r
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.09 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),\r
      linear-gradient(\r
        116deg,\r
        transparent 14%,\r
        rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.12)) calc(30% + var(--preview-gloss-spacing) * 0.22),\r
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)) calc(58% + var(--preview-gloss-spacing) * 0.12),\r
        transparent 82%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 1.08);}.preview-window[data-gloss='kde'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.16)),\r
        rgba(255, 255, 255, calc(0.06 + var(--preview-gloss-intensity) * 0.06)) 24%,\r
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 58%,\r
        transparent 84%\r
      ),\r
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),\r
      linear-gradient(\r
        124deg,\r
        transparent 10%,\r
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.08)) calc(28% + var(--preview-gloss-spacing) * 0.16),\r
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),\r
        transparent 84%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.96);}.preview-window[data-gloss='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),\r
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.06)), transparent 40%),\r
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--preview-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 52%, transparent 80%),\r
      linear-gradient(\r
        138deg,\r
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)),\r
        transparent 28%,\r
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),\r
        transparent 86%\r
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.92);}.preview-window[data-gloss='windows-7'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),\r
  .preview-window[data-gloss='vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),\r
  .preview-window[data-gloss='kde'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),\r
  .preview-window[data-gloss='mica'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(\r
        180deg,\r
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.18)),\r
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.05)) 72%,\r
        transparent 100%\r
      ),\r
      color-mix(in srgb, var(--preview-panel), transparent 10%);}.preview-controls.windows.svelte-1u1chkd .preview-control.close:where(.svelte-1u1chkd) {color:color-mix(in srgb, var(--shell-text), transparent 12%);}.preview-body.svelte-1u1chkd {position:relative;z-index:1;padding:1rem;}.preview-body-grid.svelte-1u1chkd {display:grid;gap:0.9rem;grid-template-columns:repeat(auto-fit, minmax(12rem, 1fr));}.preview-card.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.35rem;min-width:0;padding:0.95rem 1rem;border:1px solid color-mix(in srgb, var(--preview-border), transparent 16%);border-radius:18px;background:color-mix(in srgb, var(--preview-panel), transparent 6%);}.preview-card-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.preview-card.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.preview-card.svelte-1u1chkd p:where(.svelte-1u1chkd) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.preview-window.win7-theme.svelte-1u1chkd .preview-window-shadow:where(.svelte-1u1chkd),\r
  .preview-window.win7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before,\r
  .preview-window.win7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {display:none;}.preview-window.basic7-theme.svelte-1u1chkd {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:\r
      linear-gradient(\r
        180deg,\r
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,\r
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,\r
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%\r
      );border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;color:var(--w7-el-c);font-family:var(--w7-font);overflow:visible;}.preview-window.basic7-theme.svelte-1u1chkd::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),\r
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;opacity:1;}.preview-window.basic7-theme.svelte-1u1chkd::after {content:none;display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-window-shadow:where(.svelte-1u1chkd) {display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {min-height:0;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),\r
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),\r
      inset 1px 0 0 rgba(255, 255, 255, 0.54),\r
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before,\r
  .preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-title.title-bar-text:where(.svelte-1u1chkd) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-size:9pt;font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);}.preview-window.basic7-theme.svelte-1u1chkd .preview-body.window-body:where(.svelte-1u1chkd) {margin:var(--w7-w-space);margin-top:0;padding:var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);}.preview-window.basic7-theme.svelte-1u1chkd .preview-card:where(.svelte-1u1chkd) {border-color:color-mix(in srgb, var(--w7-w-bd), transparent 26%);background:color-mix(in srgb, var(--w7-surface), transparent 4%);}.preview-window.basic7-theme.svelte-1u1chkd .preview-card-kicker:where(.svelte-1u1chkd),\r
  .preview-window.basic7-theme.svelte-1u1chkd .preview-card:where(.svelte-1u1chkd) p:where(.svelte-1u1chkd) {color:color-mix(in srgb, var(--w7-el-c), transparent 28%);}.prefs-section.svelte-1u1chkd,\r
  .profiles-panel.svelte-1u1chkd {position:relative;display:flex;flex-direction:column;gap:0.95rem;padding:1rem 1.05rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 26%),\r
      color-mix(in srgb, var(--shell-surface), transparent 4%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),\r
      inset 0 -1px 0 rgba(0, 0, 0, 0.18);}.prefs-section-head.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.85rem;padding-bottom:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--shell-border), transparent 22%);}.prefs-heading-stack.svelte-1u1chkd {display:flex;min-width:0;flex-direction:column;gap:0.22rem;}.prefs-heading-stack.svelte-1u1chkd h4:where(.svelte-1u1chkd) {margin:0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);letter-spacing:0.01em;}.prefs-section-body.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.85rem;}.custom-state-copy.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.24rem;}.custom-state-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.custom-state-copy.svelte-1u1chkd span:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.prefs-mini-head.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:0.45rem 1rem;}.prefs-mini-title.svelte-1u1chkd {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.12em;text-transform:uppercase;}.prefs-grid.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.9rem;align-items:stretch;}.prefs-grid.svelte-1u1chkd > :where(.svelte-1u1chkd) {flex:1 1 15rem;min-width:min(100%, 15rem);}.prefs-grid-compact.svelte-1u1chkd > :where(.svelte-1u1chkd) {flex-basis:14rem;}.theme-note.svelte-1u1chkd {margin:0;max-width:48rem;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.preview-apply-row.svelte-1u1chkd {margin-top:0.95rem;padding-top:0.95rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 24%);}.preview-apply-copy.svelte-1u1chkd {display:flex;flex:1 1 18rem;min-width:0;flex-direction:column;gap:0.22rem;}.preview-apply-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.preview-apply-copy.svelte-1u1chkd span:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.group-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.prefs-section-divider.svelte-1u1chkd {width:100%;height:1px;background:linear-gradient(\r
        90deg,\r
        transparent 0,\r
        color-mix(in srgb, var(--shell-primary), transparent 82%) 18%,\r
        color-mix(in srgb, var(--shell-border), transparent 18%) 50%,\r
        color-mix(in srgb, var(--shell-primary), transparent 82%) 82%,\r
        transparent 100%\r
      );}.field-stack.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.45rem;min-width:0;transition:opacity 160ms ease,\r
      filter 160ms ease,\r
      transform 160ms ease;}.field-stack.svelte-1u1chkd label:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd),\r
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      box-shadow 160ms ease,\r
      opacity 160ms ease,\r
      background-color 160ms ease;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd):disabled,\r
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd):disabled {opacity:0.52;cursor:not-allowed;}.field-stack.svelte-1u1chkd input[type='range']:where(.svelte-1u1chkd) {padding-inline:0.75rem;accent-color:var(--shell-primary);}.field-toggle.svelte-1u1chkd {display:flex;gap:0.75rem;align-items:flex-start;justify-content:flex-start;min-height:3rem;padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);font:var(--efs-font-body-sm);line-height:1.55;transition:opacity 160ms ease,\r
      filter 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      box-shadow 160ms ease;}.field-toggle-feature.svelte-1u1chkd {background:radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 90%),\r
        transparent 48%\r
      ),\r
      color-mix(in srgb, var(--shell-surface), transparent 8%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),\r
      0 12px 28px color-mix(in srgb, var(--shell-primary), transparent 96%);}.field-toggle.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:1rem;height:1rem;margin:0.15rem 0 0;accent-color:var(--shell-primary);}.custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):not(.is-overridden),\r
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):not(.is-overridden) {opacity:0.6;filter:saturate(0.74);}.preset-controlled-fields.svelte-1u1chkd {min-inline-size:0;margin:0;padding:0;border:0;}.preset-controlled-fields.svelte-1u1chkd:disabled {opacity:0.84;}.custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):hover,\r
  .custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):focus-within,\r
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):hover,\r
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):focus-within,\r
  .custom-section.svelte-1u1chkd .field-stack.is-overridden:where(.svelte-1u1chkd),\r
  .custom-section.svelte-1u1chkd .field-toggle.is-overridden:where(.svelte-1u1chkd) {opacity:1;filter:none;}.field-stack.is-overridden.svelte-1u1chkd label:where(.svelte-1u1chkd),\r
  .field-toggle.is-overridden.svelte-1u1chkd {color:var(--shell-text);}.field-stack.is-overridden.svelte-1u1chkd select:where(.svelte-1u1chkd),\r
  .field-stack.is-overridden.svelte-1u1chkd input:where(.svelte-1u1chkd),\r
  .field-toggle.is-overridden.svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);background:radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 92%),\r
        transparent 48%\r
      ),\r
      color-mix(in srgb, var(--shell-surface), transparent 8%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06),\r
      0 12px 26px color-mix(in srgb, var(--shell-primary), transparent 96%);}.profiles-save.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.75rem;align-items:stretch;}.profiles-save.svelte-1u1chkd input:where(.svelte-1u1chkd) {flex:1 1 14rem;width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd):focus,\r
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd):focus,\r
  .profiles-save.svelte-1u1chkd input:where(.svelte-1u1chkd):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.footer-row.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-pills.svelte-1u1chkd,\r
  .footer-actions.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.6rem;}.prefs-button.svelte-1u1chkd {display:inline-flex;align-items:center;justify-content:center;min-height:2.4rem;padding:0 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:transform 160ms ease,\r
      border-color 160ms ease,\r
      background-color 160ms ease,\r
      color 160ms ease,\r
      opacity 160ms ease,\r
      box-shadow 160ms ease;}.prefs-button.svelte-1u1chkd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);background:color-mix(in srgb, var(--shell-row-hover), transparent 4%);color:var(--shell-text);}.prefs-button.is-primary.svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 56%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.prefs-button.svelte-1u1chkd:disabled {opacity:0.45;cursor:not-allowed;transform:none;}\r
\r
  @media (max-width: 47.99rem) {.prefs-section.svelte-1u1chkd,\r
    .profiles-panel.svelte-1u1chkd {padding:0.9rem;border-radius:20px;}.prefs-section-head.svelte-1u1chkd {padding-bottom:0.75rem;}.profiles-save.svelte-1u1chkd {flex-direction:column;}.preview-stage.svelte-1u1chkd,\r
    .preview-body.svelte-1u1chkd {padding-inline:0.85rem;}.preview-window.svelte-1u1chkd {--preview-system-width: 2.3rem;--preview-system-height: 1.75rem;}.preview-chrome.svelte-1u1chkd {gap:0.35rem;min-height:calc(\r
        var(--preview-system-height) +\r
          max(0.3rem, calc(var(--preview-top-space) * 0.92)) +\r
          max(0.12rem, calc(var(--preview-bottom-space) * 0.9))\r
      );padding-inline:max(0.55rem, calc(var(--preview-chrome-padding) * 0.82));}.preview-title.svelte-1u1chkd {font-size:0.82rem;width:max(0px, calc(100% - 6.6rem));max-width:max(0px, calc(100% - 6.6rem));}.preview-control.svelte-1u1chkd .app-icon {width:min(0.72rem, var(--preview-system-icon-size));height:min(0.72rem, var(--preview-system-icon-size));}\r
  }`
};
function md(t, r) {
  const n = os();
  Ot(r, !0), Bt(t, Bw);
  const a = {
    mac: "macOS",
    "windows-7": "Windows 7",
    "windows-8": "Windows 8",
    "windows-10": "Windows 10",
    "windows-11": "Windows 11",
    ubuntu: "Ubuntu",
    xubuntu: "Xubuntu",
    gnome: "GNOME"
  }, o = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), i = Object.fromEntries(Object.entries(Co).map(([we, ze]) => [we, ze.label])), s = Object.fromEntries(Object.entries(Li).map(([we, ze]) => [we, ze.label])), l = { contained: "Contained shell", expanded: "Expand across site" }, g = {
    accent: "Primary accent",
    "accent-strong": "Accent highlight",
    "accent-soft": "Accent wash",
    "accent-secondary": "Secondary accent",
    "accent-secondary-soft": "Secondary wash"
  }, w = {
    none: "No gloss",
    "windows-7": "Windows 7 glass",
    vista: "Vista glass",
    kde: "KDE satin",
    mica: "Mica haze"
  }, x = {
    none: "No beam",
    "windows-7": "Windows 7 Aero beam",
    vista: "Vista beam",
    "xp-luna": "XP Luna beam",
    "windows-9x": "Windows 9x bevel",
    kde: "KDE sheen",
    mica: "Mica highlight"
  }, q = {
    none: 0,
    "windows-7": 90,
    vista: 96,
    "xp-luna": 84,
    "windows-9x": 86,
    kde: 78,
    mica: 74
  }, p = {
    auto: "Preset default",
    light: "Light title",
    dark: "Dark title"
  }, k = {
    auto: "Preset effect",
    plain: "Flat",
    shadow: "Shadowed",
    glow: "Aero glow",
    emboss: "Embossed"
  }, M = Object.values(Co), P = Object.values(Li), S = [
    "buttonLayout",
    "systemButtonPlacement",
    "sideResizeMode",
    "borderWidth",
    "borderRadius",
    "chromePadding",
    "titleBarHeight",
    "windowScale",
    "chromeStyle",
    "chromeTexture",
    "chromeBeamStyle",
    "chromeBeamIntensity",
    "chromeGlossStyle",
    "chromeGlossIntensity",
    "chromeGlossSpacing",
    "chromeColorize",
    "chromeColorSource",
    "chromeColorIntensity",
    "alignment",
    "titleTone",
    "titleEffect",
    "snapRestoreOnRelease",
    "shiftDragAction"
  ];
  let E = y(r, "mode", 7, "card"), W = y(r, "dataTestid", 7), C = y(r, "open", 7, !1), I = y(r, "pinned", 7, !1), R = y(r, "onOpen", 7), H = y(r, "onTogglePin", 7);
  function Y(we = Od()) {
    return { ...Oe, ...we };
  }
  let O = /* @__PURE__ */ fe(wt(Y())), b = /* @__PURE__ */ fe(wt(Y())), he = /* @__PURE__ */ fe(""), J = /* @__PURE__ */ _(() => !Hs(e(b), e(O))), re = /* @__PURE__ */ _(() => e(J) ? "warning" : "accent"), le = /* @__PURE__ */ _(() => Ba(e(b).themePreset)), ve = /* @__PURE__ */ _(() => S.filter((we) => e(b)[we] !== e(le)[we])), Te = /* @__PURE__ */ _(() => e(ve).length > 0), je = /* @__PURE__ */ _(() => `${i[e(b).themePreset]}${e(Te) ? " (custom)" : ""}`), te = /* @__PURE__ */ _(() => Ed(e(b))), be = /* @__PURE__ */ _(() => Rd(e(b))), ke = /* @__PURE__ */ _(() => id(e(b).themePreset)), B = /* @__PURE__ */ _(() => e(b).themePreset === "aero"), F = /* @__PURE__ */ _(() => e(b).themePreset === "windows-basic"), ue = /* @__PURE__ */ _(() => e(B) || e(F)), Se = /* @__PURE__ */ _(() => e(ue) || e(b).themePreset === "windows-vista"), Pe = /* @__PURE__ */ _(() => Vg(e(b).themePreset)), Ue = /* @__PURE__ */ _(() => {
    const we = Yg(e(b));
    return Object.entries({
      "--preview-border-width": `${e(b).borderWidth}px`,
      "--preview-radius": `${e(b).borderRadius}px`,
      "--preview-chrome-padding": `${e(b).chromePadding}px`,
      "--preview-titlebar-height": `${e(b).titleBarHeight}px`,
      "--preview-shell-scale": `${e(b).windowScale / 100}`,
      "--preview-font-family": Li[e(b).fontPreset].stack,
      "--preview-shadow-base": e(Pe),
      ...we
    }).map(([ze, Je]) => `${ze}:${Je}`).join(";");
  });
  Ro(() => {
    const we = hi((ze) => {
      const Je = Y(ze), N = !Hs(e(b), e(O));
      $(O, Je, !0), N || $(b, Je, !0);
    });
    return () => {
      we();
    };
  });
  function ye(we) {
    const ze = { ...e(b), ...we };
    if (!id(ze.themePreset)) {
      $(b, ze, !0);
      return;
    }
    const Je = Ba(ze.themePreset);
    $(
      b,
      {
        ...ze,
        ...Je,
        globalEdgeDock: ze.globalEdgeDock,
        dockButtonSize: ze.dockButtonSize,
        dockButtonWidth: ze.dockButtonWidth,
        dockIconScale: ze.dockIconScale,
        dockGap: ze.dockGap,
        dockOffset: ze.dockOffset,
        dockLabelMode: ze.dockLabelMode,
        pageThemeSpread: ze.pageThemeSpread
      },
      !0
    );
  }
  function _e(we) {
    return e(b)[we] !== e(le)[we];
  }
  function ot(we) {
    return o.has(we);
  }
  function _t(we) {
    switch (we) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function Pt(we, ze = !1) {
    if (ze)
      return we === "mac" || we === "ubuntu" || we === "xubuntu" ? void 0 : "stack";
    switch (we) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function zt(we, ze = !1) {
    if (ze)
      return "stack";
    switch (we) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  function Nt(we) {
    const ze = Ba(we);
    $(
      b,
      {
        ...ze,
        globalEdgeDock: e(b).globalEdgeDock,
        dockButtonSize: e(b).dockButtonSize,
        dockButtonWidth: e(b).dockButtonWidth,
        dockIconScale: e(b).dockIconScale,
        dockGap: e(b).dockGap,
        dockOffset: e(b).dockOffset,
        dockLabelMode: e(b).dockLabelMode,
        pageThemeSpread: e(b).pageThemeSpread
      },
      !0
    );
  }
  function qt() {
    Id(e(b));
  }
  function ft() {
    $(b, Y(e(O)), !0);
  }
  function vt() {
    $(b, Y(Oe), !0);
  }
  function ct() {
    Ju(e(he), e(b)), $(he, "");
  }
  var yt = {
    get mode() {
      return E();
    },
    set mode(we = "card") {
      E(we), f();
    },
    get dataTestid() {
      return W();
    },
    set dataTestid(we) {
      W(we), f();
    },
    get open() {
      return C();
    },
    set open(we = !1) {
      C(we), f();
    },
    get pinned() {
      return I();
    },
    set pinned(we = !1) {
      I(we), f();
    },
    get onOpen() {
      return R();
    },
    set onOpen(we) {
      R(we), f();
    },
    get onTogglePin() {
      return H();
    },
    set onTogglePin(we) {
      H(we), f();
    }
  };
  return dn(t, {
    eyebrow: "Window manager",
    title: "Floating panel preferences",
    description: "Tune floating widget chrome, title readability, snap behavior, and shell typography here first. Site color theme still lives in Settings > Theme Studio.",
    get mode() {
      return E();
    },
    get dataTestid() {
      return W();
    },
    get open() {
      return C();
    },
    get pinned() {
      return I();
    },
    get onOpen() {
      return R();
    },
    get onTogglePin() {
      return H();
    },
    footer: (ze) => {
      var Je = Ow(), N = u(Je), D = u(N);
      {
        let Ze = /* @__PURE__ */ _(() => e(J) ? "Preview pending" : "Applied");
        kt(D, {
          get label() {
            return e(Ze);
          },
          get tone() {
            return e(re);
          }
        });
      }
      var Me = d(D, 2);
      {
        let Ze = /* @__PURE__ */ _(() => `${a[e(b).buttonLayout]} chrome`);
        kt(Me, {
          get label() {
            return e(Ze);
          },
          tone: "accent"
        });
      }
      var L = d(Me, 2);
      kt(L, {
        get label() {
          return e(je);
        },
        tone: "info"
      });
      var de = d(L, 2);
      {
        let Ze = /* @__PURE__ */ _(() => `${e(b).titleBarHeight}px bar • ${e(b).windowScale}% scale`);
        kt(de, {
          get label() {
            return e(Ze);
          },
          tone: "neutral"
        });
      }
      var Le = d(de, 2);
      {
        let Ze = /* @__PURE__ */ _(() => e(b).chromeTexture && e(b).chromeBeamStyle !== "none" ? `${x[e(b).chromeBeamStyle]} ${e(b).chromeBeamIntensity}%` : "Beam off"), gt = /* @__PURE__ */ _(() => e(b).chromeTexture && e(b).chromeBeamStyle !== "none" ? "accent" : "neutral");
        kt(Le, {
          get label() {
            return e(Ze);
          },
          get tone() {
            return e(gt);
          }
        });
      }
      var We = d(Le, 2);
      {
        let Ze = /* @__PURE__ */ _(() => e(b).chromeGlossStyle === "none" ? "Gloss off" : `${w[e(b).chromeGlossStyle]} ${e(b).chromeGlossIntensity}%`), gt = /* @__PURE__ */ _(() => e(b).chromeGlossStyle === "none" ? "neutral" : "info");
        kt(We, {
          get label() {
            return e(Ze);
          },
          get tone() {
            return e(gt);
          }
        });
      }
      var Ve = d(We, 2);
      {
        let Ze = /* @__PURE__ */ _(() => e(b).chromeColorize ? `${g[e(b).chromeColorSource]} ${e(b).chromeColorIntensity}%` : "Chrome neutral"), gt = /* @__PURE__ */ _(() => e(b).chromeColorize ? "accent" : "neutral");
        kt(Ve, {
          get label() {
            return e(Ze);
          },
          get tone() {
            return e(gt);
          }
        });
      }
      var m = d(Ve, 2);
      kt(m, {
        get label() {
          return p[e(b).titleTone];
        },
        tone: "neutral"
      });
      var me = d(m, 2);
      kt(me, {
        get label() {
          return k[e(b).titleEffect];
        },
        tone: "info"
      });
      var $e = d(me, 2);
      {
        let Ze = /* @__PURE__ */ _(() => e(b).pageThemeSpread === "expanded" ? "accent" : "neutral");
        kt($e, {
          get label() {
            return l[e(b).pageThemeSpread];
          },
          get tone() {
            return e(Ze);
          }
        });
      }
      var K = d($e, 2);
      kt(K, {
        get label() {
          return s[e(b).fontPreset];
        },
        tone: "neutral"
      }), h(N);
      var it = d(N, 2), Be = u(it), bt = d(Be, 2), He = d(bt, 2);
      h(it), h(Je), pe(() => {
        Be.disabled = !e(J), He.disabled = !e(J);
      }), ae("click", Be, ft), ae("click", bt, vt), ae("click", He, qt), V(ze, Je);
    },
    children: (ze, Je) => {
      var N = Lw(), D = u(N), Me = u(D), L = u(Me), de = d(u(L), 2);
      ya(de, {
        title: "Shell package and presets",
        text: "Choose the chrome family first, keep the same site coverage dropdown used by the header Settings popover, and only save a custom preset when you want to keep a forked version of the current shell package."
      }), h(L), h(Me);
      var Le = d(Me, 2), We = u(Le), Ve = u(We), m = u(Ve), me = d(m, 2);
      Lt(me, 21, () => M, (Q) => Q.id, (Q, et) => {
        var Qt = Wc(), ua = ge(Qt, !0), Qr = {};
        pe(() => {
          oe(ua, e(et).id === e(b).themePreset ? e(je) : e(et).label), Qr !== (Qr = e(et).id) && (Qt.value = (Qt.__value = Qr) ?? "");
        }), V(Q, Qt);
      }), h(me);
      var $e;
      fr(me), h(Ve);
      var K = d(Ve, 2), it = u(K), Be = d(it, 2);
      Lt(Be, 21, () => P, (Q) => Q.id, (Q, et) => {
        var Qt = Wc(), ua = ge(Qt, !0), Qr = {};
        pe(() => {
          oe(ua, e(et).label), Qr !== (Qr = e(et).id) && (Qt.value = (Qt.__value = Qr) ?? "");
        }), V(Q, Qt);
      }), h(Be);
      var bt;
      fr(Be), h(K);
      var He = d(K, 2), Ze = u(He), gt = d(Ze, 2), Mt = u(gt);
      Mt.value = Mt.__value = "contained";
      var tr = d(Mt);
      tr.value = tr.__value = "expanded", h(gt);
      var Xe;
      fr(gt), h(He), h(We);
      var Ct = d(We, 4), Dt = u(Ct), $t = d(u(Dt), 2), br = ge($t, !0), Pr = d($t, 2), rr = u(Pr);
      {
        var zr = (Q) => {
          var et = Xr("Windows 7 is locked to the vendor 7.css Aero package. Chrome and font controls are disabled so the shell stays on the exact preset.");
          V(Q, et);
        }, Er = (Q) => {
          var et = Xr();
          pe(() => oe(et, `${e(ve).length ?? ""} custom control${e(ve).length === 1 ? "" : "s"} differ from the preset. Changed fields below stay bright and highlighted until you save a custom preset.`)), V(Q, et);
        }, ta = (Q) => {
          var et = Xr("Preset defaults are intact. The custom controls below stay subdued until you diverge from this package.");
          V(Q, et);
        };
        ce(rr, (Q) => {
          e(ke) ? Q(zr) : e(Te) ? Q(Er, 1) : Q(ta, -1);
        });
      }
      h(Pr), h(Dt);
      var yn = d(Dt, 2), Ae = u(yn);
      Tt(Ae);
      var Ht = d(Ae, 2);
      h(yn), h(Ct), h(Le), h(D);
      var Ce = d(D, 2), Gt = u(Ce), Io = u(Gt), eo = d(u(Io), 4), Do = ge(eo, !0);
      h(Io), h(Gt);
      var hr = d(Gt, 2);
      let to;
      var Rr = d(u(hr), 2);
      let An;
      var En = u(Rr);
      let ra;
      var xn = d(En, 2);
      let ro;
      var Rn = u(xn);
      {
        var cn = (Q) => {
          var et = Iw(), Qt = Zt(et), ua = u(Qt);
          {
            var Qr = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => _t(e(b).buttonLayout));
                tt(Et, {
                  name: "close",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(ua, (Et) => {
              e(ue) || Et(Qr);
            });
          }
          h(Qt);
          var Sn = d(Qt, 2), qi = u(Sn);
          {
            var Si = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => Pt(e(b).buttonLayout));
                tt(Et, {
                  name: "minimize",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(qi, (Et) => {
              e(ue) || Et(Si);
            });
          }
          h(Sn);
          var pa = d(Sn, 2), Ti = u(pa);
          {
            var ji = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => zt(e(b).buttonLayout));
                tt(Et, {
                  name: "maximize",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(Ti, (Et) => {
              e(ue) || Et(ji);
            });
          }
          h(pa), pe(() => {
            se(Qt, 1, Wt(e(B) ? "is-close" : "preview-control system close is-close"), "svelte-1u1chkd"), se(Sn, 1, Wt(e(B) ? "is-minimize" : "preview-control system is-minimize"), "svelte-1u1chkd"), se(pa, 1, Wt(e(B) ? "is-maximize" : "preview-control system is-maximize"), "svelte-1u1chkd");
          }), V(Q, et);
        }, Vt = /* @__PURE__ */ _(() => ot(e(b).buttonLayout)), lr = (Q) => {
          var et = Dw(), Qt = Zt(et), ua = u(Qt);
          {
            var Qr = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => Pt(e(b).buttonLayout));
                tt(Et, {
                  name: "minimize",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(ua, (Et) => {
              e(ue) || Et(Qr);
            });
          }
          h(Qt);
          var Sn = d(Qt, 2), qi = u(Sn);
          {
            var Si = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => zt(e(b).buttonLayout));
                tt(Et, {
                  name: "maximize",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(qi, (Et) => {
              e(ue) || Et(Si);
            });
          }
          h(Sn);
          var pa = d(Sn, 2), Ti = u(pa);
          {
            var ji = (Et) => {
              {
                let en = /* @__PURE__ */ _(() => _t(e(b).buttonLayout));
                tt(Et, {
                  name: "close",
                  get variant() {
                    return e(en);
                  }
                });
              }
            };
            ce(Ti, (Et) => {
              e(ue) || Et(ji);
            });
          }
          h(pa), pe(() => {
            se(Qt, 1, Wt(e(B) ? "is-minimize" : "preview-control system is-minimize"), "svelte-1u1chkd"), se(Sn, 1, Wt(e(B) ? "is-maximize" : "preview-control system is-maximize"), "svelte-1u1chkd"), se(pa, 1, Wt(e(B) ? "is-close" : "preview-control system close is-close"), "svelte-1u1chkd");
          }), V(Q, et);
        };
        ce(Rn, (Q) => {
          e(Vt) ? Q(cn) : Q(lr, -1);
        });
      }
      h(xn), h(Rr);
      var no = d(Rr, 2);
      let Or;
      h(hr);
      var ja = d(hr, 2), kn = d(u(ja), 2);
      h(ja), h(Ce);
      var na = d(Ce, 2), aa = u(na), ur = u(aa), ui = d(u(ur), 2);
      ya(ui, {
        title: "Chrome treatment",
        text: "This sheet separates structure from finish: choose layout, button side, and geometry first, then layer beam, gloss, tint, and sheen until the shell lands where you want it."
      }), h(ur), h(aa);
      var oa = d(aa, 2), ao = u(oa), Pa = u(ao), pi = u(Pa);
      {
        var Lo = (Q) => {
          var et = Xr("Windows 7 Aero is locked.");
          V(Q, et);
        }, wi = (Q) => {
          var et = Xr();
          pe(() => oe(et, e(Te) ? "Preset overrides are active." : "Preset defaults are active.")), V(Q, et);
        };
        ce(pi, (Q) => {
          e(ke) ? Q(Lo) : Q(wi, -1);
        });
      }
      h(Pa);
      var Bo = d(Pa, 2), Fo = u(Bo);
      {
        var mi = (Q) => {
          var et = Xr("This preset renders directly through vendor `7.css`. Frame geometry, beam, gloss, tint, title treatment, and font controls are disabled here so the preview and live shell stay exact.");
          V(Q, et);
        }, fi = (Q) => {
          var et = Xr("Changed controls are highlighted and back at full strength. Untouched controls still read as preset-owned.");
          V(Q, et);
        }, bi = (Q) => {
          var et = Xr("The controls below stay intentionally subdued until you fork this preset. The first tweak marks the package as custom.");
          V(Q, et);
        };
        ce(Fo, (Q) => {
          e(ke) ? Q(mi) : e(Te) ? Q(fi, 1) : Q(bi, -1);
        });
      }
      h(Bo), h(ao);
      var ut = d(ao, 2), Qe = d(u(ut), 2), yr = u(Qe), xr = d(u(yr), 2);
      ya(xr, {
        title: "Frame geometry",
        text: "These controls affect the overall silhouette first: button family, control side, and whether the shell reads like a pane, mica surface, or flat frame."
      }), h(yr), h(Qe);
      var Yt = d(Qe, 2), pr = u(Yt);
      let oo;
      var nr = u(pr), Ut = d(nr, 2), kr = u(Ut);
      kr.value = kr.__value = "windows-11";
      var On = d(kr);
      On.value = On.__value = "windows-10";
      var za = d(On);
      za.value = za.__value = "windows-8";
      var ia = d(za);
      ia.value = ia.__value = "windows-7";
      var sa = d(ia);
      sa.value = sa.__value = "mac";
      var Ma = d(sa);
      Ma.value = Ma.__value = "ubuntu";
      var ar = d(Ma);
      ar.value = ar.__value = "xubuntu";
      var _n = d(ar);
      _n.value = _n.__value = "gnome", h(Ut);
      var In;
      fr(Ut), h(pr);
      var Dn = d(pr, 2);
      let No;
      var c = u(Dn), j = d(c, 2), Z = u(j);
      Z.value = Z.__value = "right";
      var xe = d(Z);
      xe.value = xe.__value = "left", h(j);
      var v;
      fr(j), h(Dn);
      var A = d(Dn, 2);
      let X;
      var ie = u(A), qe = d(ie, 2), st = u(qe);
      st.value = st.__value = "solid";
      var At = d(st);
      At.value = At.__value = "glass";
      var Xt = d(At);
      Xt.value = Xt.__value = "mica";
      var or = d(Xt);
      or.value = or.__value = "frost";
      var qn = d(or);
      qn.value = qn.__value = "pane";
      var io = d(qn);
      io.value = io.__value = "transparent", h(qe);
      var la;
      fr(qe), h(A), h(Yt);
      var Ln = d(Yt, 4), so = u(Ln), Ho = d(u(so), 2);
      ya(Ho, {
        title: "Beam, glass, and colorization",
        text: "Beam controls the broad OS-style light sweep, gloss controls the finish pass, and colorization decides whether the active site palette is allowed to tint the chrome."
      }), h(so), h(Ln);
      var da = d(Ln, 2), ca = u(da);
      let lo;
      var ga = u(ca), Zr = d(ga, 2), Wa = u(Zr);
      Wa.value = Wa.__value = "none";
      var co = d(Wa);
      co.value = co.__value = "windows-7";
      var go = d(co);
      go.value = go.__value = "vista";
      var Ca = d(go);
      Ca.value = Ca.__value = "xp-luna";
      var vo = d(Ca);
      vo.value = vo.__value = "windows-9x";
      var ho = d(vo);
      ho.value = ho.__value = "kde";
      var pt = d(ho);
      pt.value = pt.__value = "mica", h(Zr);
      var xt;
      fr(Zr), h(ca);
      var ht = d(ca, 2);
      let wr;
      var ir = u(ht), _r = ge(ir), Kt = d(ir, 2);
      Tt(Kt), h(ht);
      var Ir = d(ht, 2);
      let Mr;
      var Vr = u(Ir), Yr = d(Vr, 2), Bn = u(Yr);
      Bn.value = Bn.__value = "none";
      var St = d(Bn);
      St.value = St.__value = "windows-7";
      var jt = d(St);
      jt.value = jt.__value = "vista";
      var dr = d(jt);
      dr.value = dr.__value = "kde";
      var va = d(dr);
      va.value = va.__value = "mica", h(Yr);
      var Fn;
      fr(Yr), h(Ir);
      var cr = d(Ir, 2);
      let Ur;
      var Go = u(cr), nl = ge(Go), $a = d(Go, 2);
      Tt($a), h(cr);
      var Vo = d(cr, 2);
      let yi;
      var xi = u(Vo), ss = ge(xi), uo = d(xi, 2);
      Tt(uo), h(Vo);
      var po = d(Vo, 2);
      let ls;
      var ki = u(po);
      Tt(ki), Cr(2), h(po);
      var Yo = d(po, 2);
      let ne;
      var Ye = u(Yo), U = d(Ye, 2), G = u(U);
      G.value = G.__value = "accent";
      var lt = d(G);
      lt.value = lt.__value = "accent-strong";
      var Dr = d(lt);
      Dr.value = Dr.__value = "accent-soft";
      var ha = d(Dr);
      ha.value = ha.__value = "accent-secondary";
      var Dd = d(ha);
      Dd.value = Dd.__value = "accent-secondary-soft", h(U);
      var ds;
      fr(U), h(Yo);
      var al = d(Yo, 2);
      let Ld;
      var ol = u(al), ev = ge(ol), _i = d(ol, 2);
      Tt(_i), h(al), h(da);
      var il = d(da, 4), Bd = u(il), tv = d(u(Bd), 2);
      ya(tv, {
        title: "Interaction and frame details",
        text: "Use these controls to keep title text readable, tune drag and resize behavior, and adjust the final edge weight after the shell finish is already chosen."
      }), h(Bd), h(il);
      var Fd = d(il, 2), cs = u(Fd);
      let Nd;
      var Hd = u(cs), Aa = d(Hd, 2), sl = u(Aa);
      sl.value = sl.__value = "left";
      var ll = d(sl);
      ll.value = ll.__value = "center";
      var Gd = d(ll);
      Gd.value = Gd.__value = "right", h(Aa);
      var gs;
      fr(Aa), h(cs);
      var vs = d(cs, 2);
      let Vd;
      var Yd = u(vs), Ea = d(Yd, 2), dl = u(Ea);
      dl.value = dl.__value = "auto";
      var cl = d(dl);
      cl.value = cl.__value = "light";
      var Ud = d(cl);
      Ud.value = Ud.__value = "dark", h(Ea);
      var hs;
      fr(Ea), h(vs);
      var us = d(vs, 2);
      let Xd;
      var Kd = u(us), Ra = d(Kd, 2), gl = u(Ra);
      gl.value = gl.__value = "auto";
      var vl = d(gl);
      vl.value = vl.__value = "plain";
      var hl = d(vl);
      hl.value = hl.__value = "shadow";
      var ul = d(hl);
      ul.value = ul.__value = "glow";
      var Jd = d(ul);
      Jd.value = Jd.__value = "emboss", h(Ra);
      var ps;
      fr(Ra), h(us);
      var ws = d(us, 2);
      let Zd;
      var pl = u(ws), rv = ge(pl), ms = d(pl, 2);
      Tt(ms), h(ws);
      var fs = d(ws, 2);
      let Qd;
      var wl = u(fs), nv = ge(wl), bs = d(wl, 2);
      Tt(bs), h(fs);
      var ys = d(fs, 2);
      let ec;
      var tc = u(ys), Oa = d(tc, 2), ml = u(Oa);
      ml.value = ml.__value = "pin";
      var rc = d(ml);
      rc.value = rc.__value = "none", h(Oa);
      var xs;
      fr(Oa), h(ys);
      var ks = d(ys, 2);
      let nc;
      var ac = u(ks), Ia = d(ac, 2), fl = u(Ia);
      fl.value = fl.__value = "anchored";
      var oc = d(fl);
      oc.value = oc.__value = "mirrored", h(Ia);
      var _s;
      fr(Ia), h(ks);
      var qs = d(ks, 2);
      let ic;
      var bl = u(qs), av = ge(bl), Ss = d(bl, 2);
      Tt(Ss), h(qs);
      var Ts = d(qs, 2);
      let sc;
      var yl = u(Ts), ov = ge(yl), js = d(yl, 2);
      Tt(js), h(Ts);
      var Ps = d(Ts, 2);
      let lc;
      var xl = u(Ps), iv = ge(xl), zs = d(xl, 2);
      Tt(zs), h(Ps);
      var kl = d(Ps, 2);
      let dc;
      var _l = u(kl);
      Tt(_l), Cr(2), h(kl), h(Fd), h(ut), h(oa), h(na), h(N), pe(
        (Q, et, Qt, ua, Qr, Sn, qi, Si, pa, Ti, ji, Et, en, sv, lv, dv, cv, gv, vv, hv, uv, pv, wv) => {
          z(m, "for", `${n}-theme`), z(me, "id", `${n}-theme`), $e !== ($e = e(b).themePreset) && (me.value = (me.__value = $e) ?? "", mr(me, $e)), z(it, "for", `${n}-font`), z(Be, "id", `${n}-font`), Be.disabled = e(ke), bt !== (bt = e(b).fontPreset) && (Be.value = (Be.__value = bt) ?? "", mr(Be, bt)), z(Ze, "for", `${n}-page-theme-spread`), z(gt, "id", `${n}-page-theme-spread`), Xe !== (Xe = e(b).pageThemeSpread) && (gt.value = (gt.__value = Xe) ?? "", mr(gt, Xe)), z(Ct, "data-custom", e(Te)), oe(br, e(je)), z(Ae, "id", `${n}-profile-name`), z(Ae, "placeholder", `${i[e(b).themePreset]} custom`), Fr(Ae, e(he)), Ht.disabled = Q, z(Ce, "data-layout", e(b).buttonLayout), z(Ce, "data-style", e(b).chromeStyle), oe(Do, e(J) ? "Draft differs from the live shell until you apply it." : "Preview matches the live shell."), to = se(hr, 1, "preview-window svelte-1u1chkd", null, to, {
            win7: e(ue),
            "win7-theme": e(B),
            "basic7-theme": e(F),
            window: e(ue),
            active: e(ue),
            glass: e(B)
          }), z(hr, "data-layout", e(ke) ? void 0 : e(b).buttonLayout), z(hr, "data-theme", e(b).themePreset), z(hr, "data-beam", e(ke) ? void 0 : e(b).chromeTexture ? e(b).chromeBeamStyle : "none"), z(hr, "data-gloss", e(ke) ? void 0 : e(b).chromeGlossStyle), z(hr, "data-system-placement", e(b).systemButtonPlacement), z(hr, "data-style", e(ke) ? void 0 : e(b).chromeStyle), z(hr, "data-title-tone", e(ke) ? void 0 : e(te)), z(hr, "data-title-effect", e(ke) ? void 0 : e(be)), $r(hr, e(Ue)), An = se(Rr, 1, Wt(e(B) ? "title-bar" : "preview-chrome"), "svelte-1u1chkd", An, {
            "title-bar": !e(B) && e(Se)
          }), ra = se(
            En,
            1,
            Wt(e(B) ? "title-bar-text" : `preview-title align-${e(b).alignment}`),
            "svelte-1u1chkd",
            ra,
            {
              "title-bar-text": !e(B) && e(Se)
            }
          ), ro = se(
            xn,
            1,
            Wt(e(B) ? "title-bar-controls" : `preview-controls windows variant-${e(b).buttonLayout}`),
            "svelte-1u1chkd",
            ro,
            {
              "title-bar-controls": !e(B) && e(Se)
            }
          ), Or = se(no, 1, "preview-body svelte-1u1chkd", null, Or, { "window-body": e(ue) }), kn.disabled = !e(J), z(na, "data-pristine", !e(Te)), ut.disabled = e(ke), oo = se(pr, 1, "field-stack svelte-1u1chkd", null, oo, { "is-overridden": et }), z(nr, "for", `${n}-layout`), z(Ut, "id", `${n}-layout`), In !== (In = e(b).buttonLayout) && (Ut.value = (Ut.__value = In) ?? "", mr(Ut, In)), No = se(Dn, 1, "field-stack svelte-1u1chkd", null, No, { "is-overridden": Qt }), z(c, "for", `${n}-system-placement`), z(j, "id", `${n}-system-placement`), v !== (v = e(b).systemButtonPlacement) && (j.value = (j.__value = v) ?? "", mr(j, v)), X = se(A, 1, "field-stack svelte-1u1chkd", null, X, { "is-overridden": ua }), z(ie, "for", `${n}-chrome`), z(qe, "id", `${n}-chrome`), la !== (la = e(b).chromeStyle) && (qe.value = (qe.__value = la) ?? "", mr(qe, la)), lo = se(ca, 1, "field-stack svelte-1u1chkd", null, lo, { "is-overridden": Qr }), z(ga, "for", `${n}-beam-style`), z(Zr, "id", `${n}-beam-style`), xt !== (xt = e(b).chromeTexture ? e(b).chromeBeamStyle : "none") && (Zr.value = (Zr.__value = xt) ?? "", mr(Zr, xt)), wr = se(ht, 1, "field-stack svelte-1u1chkd", null, wr, { "is-overridden": Sn }), z(ir, "for", `${n}-beam-intensity`), oe(_r, `Beam intensity (${(e(b).chromeTexture ? e(b).chromeBeamIntensity : 0) ?? ""}%)`), z(Kt, "id", `${n}-beam-intensity`), Fr(Kt, e(b).chromeBeamIntensity), Kt.disabled = !e(b).chromeTexture || e(b).chromeBeamStyle === "none", Mr = se(Ir, 1, "field-stack svelte-1u1chkd", null, Mr, { "is-overridden": qi }), z(Vr, "for", `${n}-gloss-style`), z(Yr, "id", `${n}-gloss-style`), Fn !== (Fn = e(b).chromeGlossStyle) && (Yr.value = (Yr.__value = Fn) ?? "", mr(Yr, Fn)), Ur = se(cr, 1, "field-stack svelte-1u1chkd", null, Ur, { "is-overridden": Si }), z(Go, "for", `${n}-gloss-intensity`), oe(nl, `Gloss intensity (${e(b).chromeGlossIntensity ?? ""}%)`), z($a, "id", `${n}-gloss-intensity`), Fr($a, e(b).chromeGlossIntensity), $a.disabled = e(b).chromeGlossStyle === "none", yi = se(Vo, 1, "field-stack svelte-1u1chkd", null, yi, { "is-overridden": pa }), z(xi, "for", `${n}-gloss-spacing`), oe(ss, `Gloss sweep spacing (${e(b).chromeGlossSpacing ?? ""}px)`), z(uo, "id", `${n}-gloss-spacing`), Fr(uo, e(b).chromeGlossSpacing), uo.disabled = e(b).chromeGlossStyle === "none", ls = se(po, 1, "field-toggle svelte-1u1chkd", null, ls, { "is-overridden": Ti }), nd(ki, e(b).chromeColorize), ne = se(Yo, 1, "field-stack svelte-1u1chkd", null, ne, { "is-overridden": ji }), z(Ye, "for", `${n}-chrome-color-source`), z(U, "id", `${n}-chrome-color-source`), U.disabled = !e(b).chromeColorize, ds !== (ds = e(b).chromeColorSource) && (U.value = (U.__value = ds) ?? "", mr(U, ds)), Ld = se(al, 1, "field-stack svelte-1u1chkd", null, Ld, { "is-overridden": Et }), z(ol, "for", `${n}-chrome-color-intensity`), oe(ev, `Colorize intensity (${e(b).chromeColorIntensity ?? ""}%)`), z(_i, "id", `${n}-chrome-color-intensity`), Fr(_i, e(b).chromeColorIntensity), _i.disabled = !e(b).chromeColorize, Nd = se(cs, 1, "field-stack svelte-1u1chkd", null, Nd, { "is-overridden": en }), z(Hd, "for", `${n}-alignment`), z(Aa, "id", `${n}-alignment`), gs !== (gs = e(b).alignment) && (Aa.value = (Aa.__value = gs) ?? "", mr(Aa, gs)), Vd = se(vs, 1, "field-stack svelte-1u1chkd", null, Vd, { "is-overridden": sv }), z(Yd, "for", `${n}-title-tone`), z(Ea, "id", `${n}-title-tone`), hs !== (hs = e(b).titleTone) && (Ea.value = (Ea.__value = hs) ?? "", mr(Ea, hs)), Xd = se(us, 1, "field-stack svelte-1u1chkd", null, Xd, { "is-overridden": lv }), z(Kd, "for", `${n}-title-effect`), z(Ra, "id", `${n}-title-effect`), ps !== (ps = e(b).titleEffect) && (Ra.value = (Ra.__value = ps) ?? "", mr(Ra, ps)), Zd = se(ws, 1, "field-stack svelte-1u1chkd", null, Zd, { "is-overridden": dv }), z(pl, "for", `${n}-titlebar-height`), oe(rv, `Titlebar height (${e(b).titleBarHeight ?? ""}px)`), z(ms, "id", `${n}-titlebar-height`), Fr(ms, e(b).titleBarHeight), Qd = se(fs, 1, "field-stack svelte-1u1chkd", null, Qd, { "is-overridden": cv }), z(wl, "for", `${n}-window-scale`), oe(nv, `Shell scale (${e(b).windowScale ?? ""}%)`), z(bs, "id", `${n}-window-scale`), Fr(bs, e(b).windowScale), ec = se(ys, 1, "field-stack svelte-1u1chkd", null, ec, { "is-overridden": gv }), z(tc, "for", `${n}-shift-action`), z(Oa, "id", `${n}-shift-action`), xs !== (xs = e(b).shiftDragAction) && (Oa.value = (Oa.__value = xs) ?? "", mr(Oa, xs)), nc = se(ks, 1, "field-stack svelte-1u1chkd", null, nc, { "is-overridden": vv }), z(ac, "for", `${n}-side-resize`), z(Ia, "id", `${n}-side-resize`), _s !== (_s = e(b).sideResizeMode) && (Ia.value = (Ia.__value = _s) ?? "", mr(Ia, _s)), ic = se(qs, 1, "field-stack svelte-1u1chkd", null, ic, { "is-overridden": hv }), z(bl, "for", `${n}-border`), oe(av, `Border width (${e(b).borderWidth ?? ""}px)`), z(Ss, "id", `${n}-border`), Fr(Ss, e(b).borderWidth), sc = se(Ts, 1, "field-stack svelte-1u1chkd", null, sc, { "is-overridden": uv }), z(yl, "for", `${n}-radius`), oe(ov, `Border radius (${e(b).borderRadius ?? ""}px)`), z(js, "id", `${n}-radius`), Fr(js, e(b).borderRadius), lc = se(Ps, 1, "field-stack svelte-1u1chkd", null, lc, { "is-overridden": pv }), z(xl, "for", `${n}-padding`), oe(iv, `Chrome inset (${e(b).chromePadding ?? ""}px)`), z(zs, "id", `${n}-padding`), Fr(zs, e(b).chromePadding), dc = se(kl, 1, "field-toggle svelte-1u1chkd", null, dc, { "is-overridden": wv }), nd(_l, e(b).snapRestoreOnRelease);
        },
        [
          () => !e(he).trim() || !e(Te),
          () => _e("buttonLayout"),
          () => _e("systemButtonPlacement"),
          () => _e("chromeStyle"),
          () => _e("chromeBeamStyle"),
          () => _e("chromeBeamIntensity"),
          () => _e("chromeGlossStyle"),
          () => _e("chromeGlossIntensity"),
          () => _e("chromeGlossSpacing"),
          () => _e("chromeColorize"),
          () => _e("chromeColorSource"),
          () => _e("chromeColorIntensity"),
          () => _e("alignment"),
          () => _e("titleTone"),
          () => _e("titleEffect"),
          () => _e("titleBarHeight"),
          () => _e("windowScale"),
          () => _e("shiftDragAction"),
          () => _e("sideResizeMode"),
          () => _e("borderWidth"),
          () => _e("borderRadius"),
          () => _e("chromePadding"),
          () => _e("snapRestoreOnRelease")
        ]
      ), ae("change", me, (Q) => Nt(Q.currentTarget.value)), ae("change", Be, (Q) => ye({ fontPreset: Q.currentTarget.value })), ae("change", gt, (Q) => ye({ pageThemeSpread: Q.currentTarget.value })), ae("input", Ae, (Q) => {
        $(he, Q.currentTarget.value, !0);
      }), ae("click", Ht, ct), ae("click", kn, qt), ae("change", Ut, (Q) => ye({ buttonLayout: Q.currentTarget.value })), ae("change", j, (Q) => ye({ systemButtonPlacement: Q.currentTarget.value })), ae("change", qe, (Q) => ye({ chromeStyle: Q.currentTarget.value })), ae("change", Zr, (Q) => {
        const et = Q.currentTarget.value;
        ye({
          chromeTexture: et !== "none",
          chromeBeamStyle: et,
          chromeBeamIntensity: et === "none" ? 0 : e(b).chromeBeamIntensity > 0 ? e(b).chromeBeamIntensity : q[et]
        });
      }), ae("input", Kt, (Q) => ye({
        chromeBeamIntensity: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("change", Yr, (Q) => {
        const et = Q.currentTarget.value;
        ye({ chromeGlossStyle: et });
      }), ae("input", $a, (Q) => ye({
        chromeGlossIntensity: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("input", uo, (Q) => ye({
        chromeGlossSpacing: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("change", ki, (Q) => ye({ chromeColorize: Q.currentTarget.checked })), ae("change", U, (Q) => ye({ chromeColorSource: Q.currentTarget.value })), ae("input", _i, (Q) => ye({
        chromeColorIntensity: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("change", Aa, (Q) => ye({ alignment: Q.currentTarget.value })), ae("change", Ea, (Q) => ye({ titleTone: Q.currentTarget.value })), ae("change", Ra, (Q) => ye({ titleEffect: Q.currentTarget.value })), ae("input", ms, (Q) => ye({
        titleBarHeight: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("input", bs, (Q) => ye({ windowScale: Number.parseInt(Q.currentTarget.value, 10) })), ae("change", Oa, (Q) => ye({ shiftDragAction: Q.currentTarget.value })), ae("change", Ia, (Q) => ye({ sideResizeMode: Q.currentTarget.value })), ae("input", Ss, (Q) => ye({ borderWidth: Number.parseInt(Q.currentTarget.value, 10) })), ae("input", js, (Q) => ye({ borderRadius: Number.parseInt(Q.currentTarget.value, 10) })), ae("input", zs, (Q) => ye({
        chromePadding: Number.parseInt(Q.currentTarget.value, 10)
      })), ae("change", _l, (Q) => ye({ snapRestoreOnRelease: Q.currentTarget.checked })), V(ze, N);
    },
    $$slots: { footer: !0, default: !0 }
  }), It(yt);
}
ln(["click", "change", "input"]);
Ft(
  md,
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
var Fw = /* @__PURE__ */ ee('<button class="tool-dock-remove svelte-5ypgve" type="button">×</button>'), Nw = /* @__PURE__ */ ee('<div class="tool-dock-item svelte-5ypgve"><span class="tool-dock-popout svelte-5ypgve" aria-hidden="true"> </span> <button type="button"><span class="tool-dock-tooltip svelte-5ypgve"> </span> <span class="tool-dock-icon svelte-5ypgve"></span></button> <!></div>'), Hw = /* @__PURE__ */ ee('<div role="toolbar" aria-label="Pinned actions"></div>');
const Gw = {
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
function Qg(t, r) {
  Ot(r, !0), Bt(t, Gw);
  const n = 6, a = 0.08, o = 0.92;
  let i = y(r, "items", 23, () => []), s = y(r, "position", 23, () => ({ edge: "right", ratio: 0.84 })), l = y(r, "labelMode", 7, "hover"), g = y(r, "onActivate", 7), w = y(r, "onRemove", 7), x = y(r, "onPositionChange", 7), q = /* @__PURE__ */ fe(null), p = /* @__PURE__ */ fe(null), k = /* @__PURE__ */ fe(null);
  function M(te) {
    return Math.max(a, Math.min(o, te));
  }
  function P(te, be) {
    return { edge: te, ratio: M(be) };
  }
  function S(te, be) {
    var Se;
    if (typeof window > "u")
      return e(q) ?? P(s().edge, s().ratio);
    const ke = Math.max(window.innerWidth, 1), B = Math.max(window.innerHeight, 1), F = {
      left: te,
      right: ke - te,
      top: be,
      bottom: B - be
    }, ue = ((Se = Object.entries(F).sort((Pe, Ue) => Pe[1] - Ue[1])[0]) == null ? void 0 : Se[0]) ?? (e(q) ?? P(s().edge, s().ratio)).edge;
    return ue === "left" || ue === "right" ? P(ue, be / B) : P(ue, te / ke);
  }
  function E(te, be) {
    be.button === 0 && $(
      p,
      {
        itemId: te,
        pointerId: be.pointerId,
        startX: be.clientX,
        startY: be.clientY,
        dragging: !1
      },
      !0
    );
  }
  function W(te) {
    var B;
    if (!e(p) || te.pointerId !== e(p).pointerId)
      return;
    const be = Math.hypot(te.clientX - e(p).startX, te.clientY - e(p).startY) >= n;
    if (!e(p).dragging && !be)
      return;
    e(p).dragging || ($(p, { ...e(p), dragging: !0 }, !0), $(k, e(p).itemId, !0));
    const ke = S(te.clientX, te.clientY);
    $(q, ke, !0), (B = x()) == null || B(ke);
  }
  function C(te) {
    var ke;
    if (!e(p) || te.pointerId !== e(p).pointerId)
      return;
    const be = e(p).itemId;
    e(p).dragging ? ((ke = x()) == null || ke(e(R)), typeof window < "u" && window.requestAnimationFrame(() => {
      e(k) === be && $(k, null), $(q, null);
    })) : $(q, null), $(p, null);
  }
  function I(te) {
    var be;
    if (e(k) === te) {
      $(k, null);
      return;
    }
    (be = g()) == null || be(te);
  }
  let R = /* @__PURE__ */ _(() => e(q) ?? P(s().edge, s().ratio)), H = /* @__PURE__ */ _(() => e(R).edge === "left" || e(R).edge === "right" ? `${(e(R).ratio * 100).toFixed(3)}%` : void 0), Y = /* @__PURE__ */ _(() => e(R).edge === "top" || e(R).edge === "bottom" ? `${(e(R).ratio * 100).toFixed(3)}%` : void 0), O = /* @__PURE__ */ _(() => e(R).edge === "top" ? "var(--efs-dock-offset, 1rem)" : void 0), b = /* @__PURE__ */ _(() => e(R).edge === "right" ? "var(--efs-dock-offset, 1rem)" : void 0), he = /* @__PURE__ */ _(() => e(R).edge === "bottom" ? "var(--efs-dock-offset, 1rem)" : void 0), J = /* @__PURE__ */ _(() => e(R).edge === "left" ? "var(--efs-dock-offset, 1rem)" : void 0), re = /* @__PURE__ */ _(() => e(R).edge === "left" || e(R).edge === "right" ? "translateY(-100%)" : "translateX(-50%)");
  var le = {
    get items() {
      return i();
    },
    set items(te = []) {
      i(te), f();
    },
    get position() {
      return s();
    },
    set position(te = { edge: "right", ratio: 0.84 }) {
      s(te), f();
    },
    get labelMode() {
      return l();
    },
    set labelMode(te = "hover") {
      l(te), f();
    },
    get onActivate() {
      return g();
    },
    set onActivate(te) {
      g(te), f();
    },
    get onRemove() {
      return w();
    },
    set onRemove(te) {
      w(te), f();
    },
    get onPositionChange() {
      return x();
    },
    set onPositionChange(te) {
      x(te), f();
    }
  }, ve = qa();
  zo("pointermove", Di, W), zo("pointerup", Di, C), zo("pointercancel", Di, C);
  var Te = Zt(ve);
  {
    var je = (te) => {
      var be = Hw();
      let ke, B;
      Lt(be, 21, i, (F) => F.id, (F, ue) => {
        var Se = Nw(), Pe = u(Se), Ue = ge(Pe, !0), ye = d(Pe, 2);
        let _e;
        var ot = u(ye), _t = ge(ot, !0), Pt = d(ot, 2);
        let zt;
        h(ye);
        var Nt = d(ye, 2);
        {
          var qt = (ft) => {
            var vt = Fw();
            pe(() => {
              z(vt, "aria-label", `Remove ${e(ue).label}`), z(vt, "title", `Remove ${e(ue).label}`);
            }), ae("click", vt, (ct) => {
              ct.stopPropagation(), w()(e(ue).id);
            }), V(ft, vt);
          };
          ce(Nt, (ft) => {
            w() && ft(qt);
          });
        }
        h(Se), pe(() => {
          oe(Ue, e(ue).label), _e = se(ye, 1, "tool-dock-button svelte-5ypgve", null, _e, { "is-active": e(ue).active }), z(ye, "aria-label", e(ue).label), z(ye, "title", e(ue).label), oe(_t, e(ue).label), zt = $r(Pt, "", zt, { "--icon-mask": e(ue).iconMask });
        }), ae("pointerdown", ye, (ft) => E(e(ue).id, ft)), ae("click", ye, () => I(e(ue).id)), V(F, Se);
      }), h(be), pe(
        (F) => {
          ke = se(be, 1, "tool-dock svelte-5ypgve", null, ke, { "is-dragging": F }), z(be, "data-edge", e(R).edge), z(be, "data-label-mode", l()), B = $r(be, "", B, {
            top: e(H) ?? e(O),
            left: e(Y) ?? e(J),
            right: e(b),
            bottom: e(he),
            transform: e(re)
          });
        },
        [() => {
          var F;
          return !!((F = e(p)) != null && F.dragging);
        }]
      ), V(te, be);
    };
    ce(Te, (te) => {
      i().length > 0 && te(je);
    });
  }
  return V(t, ve), It(le);
}
ln(["pointerdown", "click"]);
Ft(
  Qg,
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
var Vw = /* @__PURE__ */ ee("<!> <div><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>", 1), Yw = /* @__PURE__ */ ee("<!> <!>", 1);
const Uw = {
  hash: "svelte-vg7d0z",
  code: `\r
  @import '../../../styles/win7.css';\r
  @import '../../../styles/win7-overrides.css';:host {display:block;padding:clamp(1rem, 1rem + 0.8vw, 1.75rem);font-family:var(\r
        --admin-efs-font-sans,\r
        var(--admin-shell-font-sans, var(--efs-font-sans, var(--shell-font-sans)))\r
      );color-scheme:dark;color:var(--admin-shell-text, #e6eefb);background:radial-gradient(\r
        circle at top left,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),\r
          transparent 88%\r
        ),\r
        transparent 28%\r
      ),\r
      radial-gradient(\r
        circle at bottom right,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),\r
          transparent 94%\r
        ),\r
        transparent 24%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 38%),\r
      color-mix(\r
        in srgb,\r
        var(--admin-shell-body-bg, var(--admin-shell-bg, rgba(5, 11, 25, 0.94))),\r
        transparent 0%\r
      );--shell-primary: var(--admin-shell-primary, var(--admin-accent, #8bc6ff));--shell-primary-text: var(--admin-shell-primary-text, var(--admin-shell-pill-text, #07101f));--shell-panel: color-mix(\r
      in srgb,\r
      var(--admin-shell-panel-bg, var(--admin-shell-panel, rgba(7, 15, 32, 0.88))),\r
      transparent 4%\r
    );--shell-surface: color-mix(\r
      in srgb,\r
      var(--admin-shell-soft-bg, var(--admin-shell-surface, rgba(5, 11, 25, 0.94))),\r
      transparent 2%\r
    );--shell-border: color-mix(\r
      in srgb,\r
      var(--admin-shell-border, rgba(132, 146, 166, 0.18)),\r
      transparent 6%\r
    );--shell-text: var(--admin-shell-text, #e6eefb);--shell-text-strong: var(--admin-shell-text-strong, var(--admin-shell-text, #f8fafc));--shell-muted: var(--admin-shell-muted, #94a8c7);--shell-card-shadow:\r
      var(--admin-shell-card-shadow, var(--admin-shell-shadow, 0 28px 60px rgba(0, 0, 0, 0.34)));--shell-focus-ring:\r
      var(\r
        --admin-shell-focus-ring,\r
        0 0 0 4px\r
          color-mix(\r
            in srgb,\r
            var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),\r
            transparent 76%\r
          )\r
      );--shell-row-hover:\r
      var(\r
        --admin-shell-row-hover,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),\r
          transparent 92%\r
        )\r
      );}:host([theme='light']) {color-scheme:light;color:var(--admin-shell-text, #0f172a);background:radial-gradient(\r
        circle at top left,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #0f172a)),\r
          transparent 90%\r
        ),\r
        transparent 24%\r
      ),\r
      radial-gradient(\r
        circle at bottom right,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #0f172a)),\r
          transparent 92%\r
        ),\r
        transparent 26%\r
      ),\r
      linear-gradient(\r
        180deg,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-panel-bg, var(--admin-shell-panel, #ffffff)),\r
          white 4%\r
        ),\r
        color-mix(in srgb, var(--admin-shell-body-bg, var(--admin-shell-bg, #f8fafc)), transparent 8%)\r
      );}:host([theme='dark']),\r
  :host([theme='green']) {color-scheme:dark;color:var(--admin-shell-text, #e6eefb);background:radial-gradient(\r
        circle at top left,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #7dd3fc)),\r
          transparent 88%\r
        ),\r
        transparent 26%\r
      ),\r
      radial-gradient(\r
        circle at bottom right,\r
        color-mix(\r
          in srgb,\r
          var(--admin-shell-primary, var(--admin-accent, #34d399)),\r
          transparent 94%\r
        ),\r
        transparent 24%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 34%),\r
      color-mix(\r
        in srgb,\r
        var(--admin-shell-body-bg, var(--admin-shell-bg, rgba(4, 11, 24, 0.96))),\r
        transparent 0%\r
      );}:host([data-page-theme='expanded']) {--shell-panel: color-mix(\r
      in srgb,\r
      var(--admin-shell-panel-bg, var(--admin-shell-panel, rgba(7, 15, 32, 0.88))),\r
      var(--shell-primary) 6%\r
    );--shell-surface: color-mix(\r
      in srgb,\r
      var(--admin-shell-soft-bg, var(--admin-shell-surface, rgba(5, 11, 25, 0.94))),\r
      var(--shell-primary) 7%\r
    );--shell-border: color-mix(\r
      in srgb,\r
      var(--shell-primary),\r
      var(--admin-shell-border, rgba(132, 146, 166, 0.18)) 78%\r
    );--shell-card-shadow:\r
      0 22px 48px color-mix(in srgb, var(--shell-primary), transparent 92%),\r
      var(--admin-shell-card-shadow, var(--admin-shell-shadow, 0 28px 60px rgba(0, 0, 0, 0.34)));--shell-row-hover:\r
      color-mix(in srgb, var(--shell-primary), var(--admin-shell-hover-bg, transparent) 86%);}:host([data-page-theme='expanded']) .workspace-canvas.svelte-vg7d0z::before {border:1px solid color-mix(in srgb, var(--shell-primary), var(--shell-border) 72%);background:linear-gradient(\r
        90deg,\r
        transparent 0,\r
        transparent calc(100% / 12 - 1px),\r
        color-mix(in srgb, var(--shell-primary), transparent 86%) calc(100% / 12 - 1px),\r
        transparent calc(100% / 12)\r
      ),\r
      linear-gradient(\r
        180deg,\r
        transparent 0,\r
        transparent 23px,\r
        color-mix(in srgb, var(--shell-primary), transparent 90%) 23px,\r
        transparent 24px\r
      ),\r
      radial-gradient(\r
        circle at top left,\r
        color-mix(in srgb, var(--shell-primary), transparent 88%),\r
        transparent 42%\r
      ),\r
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%);box-shadow:0 20px 42px color-mix(in srgb, var(--shell-primary), transparent 94%),\r
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 90%);}.workspace-canvas.svelte-vg7d0z {position:relative;isolation:isolate;display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));grid-auto-rows:24px;grid-auto-flow:dense;gap:1rem;min-height:90rem;padding:0.35rem;align-items:stretch;}.workspace-canvas.svelte-vg7d0z::before {content:'';position:absolute;inset:0.35rem;z-index:0;border-radius:32px;background:linear-gradient(\r
        90deg,\r
        transparent 0,\r
        transparent calc(100% / 12 - 1px),\r
        color-mix(in srgb, var(--shell-border), transparent 82%) calc(100% / 12 - 1px),\r
        transparent calc(100% / 12)\r
      ),\r
      linear-gradient(\r
        180deg,\r
        transparent 0,\r
        transparent 23px,\r
        color-mix(in srgb, var(--shell-border), transparent 88%) 23px,\r
        transparent 24px\r
      );opacity:0.5;pointer-events:none;}.compact-workspace.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.compact-workspace.svelte-vg7d0z::before {display:none;}\r
\r
  @media (max-width: 63.99rem) {:host {padding:1rem;}.workspace-canvas.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.workspace-canvas.svelte-vg7d0z::before {display:none;}\r
  }`
};
function Xw(t, r) {
  Ot(r, !0), Bt(t, Uw);
  const n = "widget-windows", a = "workspace-layouts", o = "workspace-ui", i = "workspace-profile-meta", s = "workspace-profile-snapshot", l = "edge-dock-widgets", g = "edge-dock-state", w = 12, x = 3, q = 8, p = [
    "create-user",
    "user-directory",
    "create-role",
    "role-directory",
    "catalog-search",
    "window-preferences",
    "dock-preferences"
  ], k = ["workspace-discovery"], M = [
    ["--accent", "--admin-accent"],
    ["--shell-primary", "--admin-shell-primary"],
    ["--shell-primary-text", "--admin-shell-primary-text"],
    ["--shell-pill-text", "--admin-shell-pill-text"],
    ["--shell-bg", "--admin-shell-bg"],
    ["--shell-body-bg", "--admin-shell-body-bg"],
    ["--shell-panel", "--admin-shell-panel"],
    ["--shell-panel-bg", "--admin-shell-panel-bg"],
    ["--shell-surface", "--admin-shell-surface"],
    ["--shell-soft-bg", "--admin-shell-soft-bg"],
    ["--shell-inset-bg", "--admin-shell-inset-bg"],
    ["--shell-border", "--admin-shell-border"],
    ["--shell-border-strong", "--admin-shell-border-strong"],
    ["--shell-text", "--admin-shell-text"],
    ["--shell-text-strong", "--admin-shell-text-strong"],
    ["--shell-muted", "--admin-shell-muted"],
    ["--shell-hover-bg", "--admin-shell-hover-bg"],
    ["--shell-row-hover", "--admin-shell-row-hover"],
    ["--shell-shadow", "--admin-shell-shadow"],
    ["--shell-card-shadow", "--admin-shell-card-shadow"],
    ["--shell-focus-ring", "--admin-shell-focus-ring"],
    ["--shell-font-sans", "--admin-shell-font-sans"],
    ["--efs-font-sans", "--admin-efs-font-sans"]
  ], P = ["efsdb-theme-palettechange"], S = [
    { value: "buttons-manager", label: "Workspace tools" },
    { value: "catalog-search", label: "Discovery" },
    { value: "window-preferences", label: "Window manager" },
    { value: "dock", label: "Pinned dock" },
    { value: "display-mode", label: "Display mode" },
    { value: "create-user", label: "Create user" },
    { value: "create-role", label: "Create role" },
    { value: "edge", label: "Edge shortcut" },
    { value: "restore", label: "Restore" }
  ], E = ["workspace-primary", "workspace-pro-2", "workspace-pro-3"];
  function W() {
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
  function C() {
    return [
      {
        id: E[0],
        label: "Workspace 1",
        savedAt: null
      },
      {
        id: E[1],
        label: "Workspace 2",
        locked: !0,
        savedAt: null
      },
      {
        id: E[2],
        label: "Workspace 3",
        locked: !0,
        savedAt: null
      }
    ];
  }
  const I = ru("admin"), R = I.apiBase ?? "/_efsdb/api/admin", H = I.authBase ?? "/_efsdb/api/auth", Y = r.$$host;
  function O(c) {
    return typeof window > "u" ? `efsdb:admin:${c}` : `efsdb:admin:${window.location.pathname}:${c}`;
  }
  function b(c) {
    return `efsdb:admin:global:${c}`;
  }
  function he() {
    return {
      "create-user": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "user-directory": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "create-role": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "role-directory": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "display-mode": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "window-preferences": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "dock-preferences": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "settings-payload": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "catalog-search": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "catalog-results": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      },
      "catalog-facets": {
        open: !1,
        pinned: !1,
        windowState: "normal",
        snapTarget: null,
        frame: null,
        restoreFrame: null
      }
    };
  }
  function J() {
    return {
      "create-user": { col: 1, row: 1, width: 4, height: 18 },
      "create-role": { col: 5, row: 1, width: 4, height: 18 },
      "display-mode": { col: 9, row: 1, width: 4, height: 16 },
      "user-directory": { col: 1, row: 19, width: 6, height: 18 },
      "role-directory": { col: 7, row: 19, width: 6, height: 18 },
      "catalog-search": { col: 1, row: 37, width: 4, height: 14 },
      "catalog-results": { col: 5, row: 37, width: 5, height: 18 },
      "catalog-facets": { col: 10, row: 37, width: 3, height: 18 },
      "window-preferences": { col: 1, row: 51, width: 6, height: 22 },
      "dock-preferences": { col: 7, row: 51, width: 6, height: 16 },
      "settings-payload": { col: 1, row: 73, width: 12, height: 14 }
    };
  }
  function re() {
    return {
      editing: !1,
      toolbarWidgets: [...p],
      edgePinnedWidgets: [],
      hiddenWidgets: [],
      customActions: W(),
      toolbarCustomActions: [...k]
    };
  }
  function le() {
    return { edge: "right", ratio: 0.84 };
  }
  function ve(c) {
    return typeof c == "string" && sr.includes(c);
  }
  function Te(c, j) {
    if (!Array.isArray(c))
      return [...j];
    const Z = [], xe = /* @__PURE__ */ new Set();
    for (const v of c)
      !ve(v) || xe.has(v) || (xe.add(v), Z.push(v));
    return Z;
  }
  function je(c, j, Z) {
    if (!Array.isArray(c))
      return [...Z];
    const xe = new Set(j), v = [], A = /* @__PURE__ */ new Set();
    for (const X of c)
      typeof X != "string" || A.has(X) || !xe.has(X) || (A.add(X), v.push(X));
    return v;
  }
  function te(c) {
    return typeof c == "string" && S.some((j) => j.value === c);
  }
  function be(c) {
    const j = W();
    if (!Array.isArray(c))
      return j;
    const Z = [], xe = /* @__PURE__ */ new Set();
    for (const v of c) {
      if (!v || typeof v != "object")
        continue;
      const A = v, X = typeof A.id == "string" ? A.id.trim() : "";
      if (!X || xe.has(X))
        continue;
      const ie = Array.isArray(A.steps) ? A.steps.flatMap((qe) => !qe || typeof qe != "object" || qe.type !== "open-widget" || !ve(qe.widgetId) ? [] : [
        {
          type: "open-widget",
          widgetId: qe.widgetId,
          pinned: !!qe.pinned
        }
      ]) : [];
      ie.length !== 0 && (xe.add(X), Z.push({
        id: X,
        label: typeof A.label == "string" && A.label.trim() ? A.label.trim() : X,
        barLabel: typeof A.barLabel == "string" && A.barLabel.trim() ? A.barLabel.trim() : typeof A.label == "string" && A.label.trim() ? A.label.trim() : X,
        iconName: te(A.iconName) ? A.iconName : "buttons-manager",
        summary: typeof A.summary == "string" && A.summary.trim() ? A.summary.trim() : `Open ${ie.length} workspace widget${ie.length === 1 ? "" : "s"}.`,
        steps: ie
      }));
    }
    return Z.length > 0 ? Z : j;
  }
  function ke(c) {
    const j = C();
    if (!Array.isArray(c))
      return j;
    const Z = /* @__PURE__ */ new Map();
    for (const xe of c) {
      if (!xe || typeof xe != "object")
        continue;
      const v = xe;
      typeof v.id == "string" && Z.set(v.id, {
        id: v.id,
        label: typeof v.label == "string" && v.label.trim() ? v.label.trim() : v.id,
        locked: !!v.locked,
        savedAt: typeof v.savedAt == "string" && v.savedAt.trim() ? v.savedAt : null
      });
    }
    return j.map((xe) => {
      const v = Z.get(xe.id);
      return v ? {
        ...xe,
        savedAt: v.savedAt ?? xe.savedAt ?? null
      } : xe;
    });
  }
  function B(c) {
    const j = Math.max(x, Math.min(w, Math.round(c.width)));
    return {
      col: Math.max(1, Math.min(w - j + 1, Math.round(c.col))),
      row: Math.max(1, Math.round(c.row)),
      width: j,
      height: Math.max(q, Math.round(c.height))
    };
  }
  function F(c, j) {
    return c.col < j.col + j.width && c.col + c.width > j.col && c.row < j.row + j.height && c.row + c.height > j.row;
  }
  function ue(c, j) {
    const Z = B(c), xe = Math.max(1, Z.row + Z.height + 96, ...Object.values(j).map((v) => v ? v.row + v.height + 4 : 1));
    for (let v = 1; v <= xe; v += 1)
      for (let A = 1; A <= w - Z.width + 1; A += 1) {
        const X = { ...Z, col: A, row: v };
        if (!Object.values(j).some((qe) => qe && F(X, qe)))
          return X;
      }
    return Z;
  }
  function Se(c) {
    return [...sr].sort((j, Z) => {
      const xe = c[j], v = c[Z];
      return xe.row - v.row || xe.col - v.col;
    });
  }
  function Pe(c, j, Z) {
    const xe = sr.reduce(
      (ie, qe) => (ie[qe] = { ...c[qe] }, ie),
      {}
    );
    xe[j] = B(Z);
    const v = { [j]: xe[j] }, A = Se(xe).filter((ie) => ie !== j);
    for (const ie of A)
      v[ie] = ue(xe[ie], v);
    const X = v;
    for (const ie of A) {
      let qe = X[ie];
      for (; qe.row > 1; ) {
        const st = { ...qe, row: qe.row - 1 };
        if (Object.entries(X).some(([Xt, or]) => Xt !== ie && F(st, or)))
          break;
        qe = st;
      }
      X[ie] = qe;
    }
    return X;
  }
  function Ue(c) {
    return c === "normal" || c === "maximized" || c === "minimized" || c === "rolled-up";
  }
  function ye(c) {
    return c === "maximize" || c === "left-half" || c === "right-half" || c === "top-left" || c === "top-right" || c === "bottom-left" || c === "bottom-right";
  }
  function _e(c) {
    if (!c || typeof c != "object")
      return null;
    const j = c, Z = Number(j.x), xe = Number(j.y), v = Number(j.width), A = Number(j.height);
    return [Z, xe, v, A].every((X) => Number.isFinite(X)) ? {
      x: Math.round(Z),
      y: Math.round(xe),
      width: Math.max(320, Math.round(v)),
      height: Math.max(220, Math.round(A))
    } : null;
  }
  function ot(c) {
    const j = he();
    if (!c || typeof c != "object")
      return j;
    const Z = c;
    for (const xe of sr) {
      const v = Z[xe];
      v && (j[xe] = {
        open: !!v.open,
        pinned: !!v.pinned,
        windowState: Ue(v.windowState) ? v.windowState : "normal",
        frame: _e(v.frame),
        restoreFrame: _e(v.restoreFrame),
        snapTarget: ye(v.snapTarget) ? v.snapTarget : null
      });
    }
    return j;
  }
  function _t(c) {
    const j = J();
    if (!c || typeof c != "object")
      return j;
    const Z = c;
    for (const xe of sr) {
      const v = Z[xe];
      v && (j[xe] = B({
        col: v.col ?? j[xe].col,
        row: v.row ?? j[xe].row,
        width: v.width ?? j[xe].width,
        height: v.height ?? j[xe].height
      }));
    }
    return j;
  }
  function Pt(c) {
    const j = re();
    if (!c || typeof c != "object")
      return j;
    const Z = c, xe = be(Z.customActions);
    return {
      editing: !!Z.editing,
      toolbarWidgets: Te(Z.toolbarWidgets ?? Z.favoriteWidgets, j.toolbarWidgets),
      edgePinnedWidgets: Te(Z.edgePinnedWidgets, j.edgePinnedWidgets),
      hiddenWidgets: Te(Z.hiddenWidgets, j.hiddenWidgets),
      customActions: xe,
      toolbarCustomActions: je(Z.toolbarCustomActions, xe.map((v) => v.id), j.toolbarCustomActions)
    };
  }
  function zt(c) {
    const j = le();
    if (!c || typeof c != "object")
      return j;
    const Z = c, xe = Z.edge === "left" || Z.edge === "right" || Z.edge === "top" || Z.edge === "bottom" ? Z.edge : j.edge, v = Number.isFinite(Z.ratio) ? Math.max(0.08, Math.min(0.92, Number(Z.ratio))) : j.ratio;
    return { edge: xe, ratio: v };
  }
  function Nt(c, j) {
    return sr.every((Z) => {
      const xe = c[Z], v = j[Z];
      return xe.col === v.col && xe.row === v.row && xe.width === v.width && xe.height === v.height;
    });
  }
  function qt(c, j) {
    const Z = new Set(j), xe = sr.reduce(
      (ie, qe) => (ie[qe] = { ...c[qe] }, ie),
      {}
    ), v = Se(c).filter((ie) => !Z.has(ie)), A = {};
    for (const ie of v)
      A[ie] = ue(xe[ie], A);
    const X = A;
    for (const ie of v) {
      let qe = X[ie];
      for (; qe.row > 1; ) {
        const st = { ...qe, row: qe.row - 1 };
        if (Object.entries(X).some(([Xt, or]) => Xt !== ie && F(st, or)))
          break;
        qe = st;
      }
      X[ie] = qe, xe[ie] = qe;
    }
    return xe;
  }
  function ft(c, j) {
    return c.length === j.length && c.every((Z, xe) => Z === j[xe]);
  }
  function vt(c) {
    switch (c) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  let ct = /* @__PURE__ */ fe(wt(I.user ?? null)), yt = /* @__PURE__ */ fe(wt([])), we = /* @__PURE__ */ fe(wt([])), ze = /* @__PURE__ */ fe(null), Je = /* @__PURE__ */ fe(wt([])), N = /* @__PURE__ */ fe(wt({})), D = /* @__PURE__ */ fe(null), Me = /* @__PURE__ */ fe(!0), L = /* @__PURE__ */ fe(!1), de = /* @__PURE__ */ fe(!1), Le = /* @__PURE__ */ fe(!1), We = /* @__PURE__ */ fe(!1), Ve = /* @__PURE__ */ fe(!1), m = /* @__PURE__ */ fe(wt(he())), me = /* @__PURE__ */ fe(wt([])), $e = /* @__PURE__ */ fe(wt(J())), K = /* @__PURE__ */ fe(wt(re())), it = /* @__PURE__ */ fe(wt(C())), Be = /* @__PURE__ */ fe(null), bt = /* @__PURE__ */ fe(wt([...sr])), He = /* @__PURE__ */ fe(!1), Ze = /* @__PURE__ */ fe(0), gt = /* @__PURE__ */ fe(!1), Mt = /* @__PURE__ */ fe(!1), tr = /* @__PURE__ */ fe(wt(le())), Xe = /* @__PURE__ */ fe(wt({})), Ct = /* @__PURE__ */ fe(wt({})), Dt = /* @__PURE__ */ fe(wt({ username: "", name: "", roleId: "", loginKey: "" })), $t = /* @__PURE__ */ fe(wt({
    id: "",
    name: "",
    description: "",
    entitlements: "NATURAL_VIEW"
  })), br = /* @__PURE__ */ fe(null), Pr = /* @__PURE__ */ fe(null), rr = /* @__PURE__ */ fe(""), zr = /* @__PURE__ */ fe("public_workspace_files"), Er = /* @__PURE__ */ fe(wt(Od())), ta = /* @__PURE__ */ _(() => e(yt).filter((c) => c.status.toLowerCase() === "active").length), yn = /* @__PURE__ */ _(() => e(we).filter((c) => !c.operatorOnly).length), Ae = /* @__PURE__ */ _(() => {
    var c, j;
    return ((j = (c = e(ct)) == null ? void 0 : c.availableDisplayModes) == null ? void 0 : j.length) ?? 0;
  }), Ht = /* @__PURE__ */ _(() => e(K).editing && !e(He)), Ce = /* @__PURE__ */ _(() => e(Be) ? Pe(e($e), e(Be).widgetId, e(Be).layout) : e($e)), Gt = /* @__PURE__ */ _(() => !Nt(e($e), J()) || !ft(e(K).hiddenWidgets, re().hiddenWidgets) || !ft(e(K).toolbarWidgets, re().toolbarWidgets) || !ft(e(K).toolbarCustomActions, re().toolbarCustomActions)), Io = /* @__PURE__ */ _(() => [
    ...e(K).toolbarWidgets,
    ...sr.filter((c) => !e(K).toolbarWidgets.includes(c))
  ]), eo = /* @__PURE__ */ _(() => [
    ...e(K).toolbarCustomActions,
    ...e(K).customActions.map((c) => c.id).filter((c) => !e(K).toolbarCustomActions.includes(c))
  ]), Do = /* @__PURE__ */ _(() => e(K).edgePinnedWidgets), hr = /* @__PURE__ */ _(() => e(Io).map((c) => ({
    kind: "widget",
    id: c,
    label: qr[c].label,
    barLabel: qr[c].barLabel,
    iconMask: jc[c],
    open: e(m)[c].open && e(m)[c].windowState !== "minimized",
    inToolbar: e(K).toolbarWidgets.includes(c),
    edgePinned: e(K).edgePinnedWidgets.includes(c),
    inWorkspace: !e(K).hiddenWidgets.includes(c),
    presentation: qr[c].presentation,
    group: qr[c].group,
    summary: qr[c].summary
  }))), to = /* @__PURE__ */ _(() => e(eo).map((c) => e(K).customActions.find((j) => j.id === c)).filter((c) => !!c).map((c) => ({
    kind: "action",
    id: c.id,
    label: c.label,
    barLabel: c.barLabel,
    iconMask: $d(c.iconName),
    iconName: c.iconName,
    inToolbar: e(K).toolbarCustomActions.includes(c.id),
    group: "Macros",
    summary: c.summary,
    stepCount: c.steps.length
  }))), Rr = /* @__PURE__ */ _(() => [
    ...e(hr),
    ...e(to)
  ]), An = /* @__PURE__ */ _(() => e(Er).dockLabelMode), En = /* @__PURE__ */ _(() => e(Do).map((c) => ({
    id: c,
    label: qr[c].label,
    iconMask: jc[c],
    active: e(m)[c].open && e(m)[c].windowState !== "minimized"
  }))), ra = /* @__PURE__ */ _(() => [
    {
      label: "Users",
      value: String(e(yt).length),
      detail: `${e(ta)} active provisioned accounts`
    },
    {
      label: "Roles",
      value: String(e(we).length),
      detail: `${e(yn)} assignable presets`
    },
    {
      label: "Modes",
      value: String(e(Ae)),
      detail: e(ct) ? `actual ${e(ct).actualRole}` : "awaiting session"
    },
    {
      label: "Search",
      value: e(We) ? String(e(Je).length) : "0",
      detail: e(We) ? vt(e(zr)) : "run a search to inspect"
    }
  ]);
  function xn(c = Rl()) {
    if (typeof window > "u")
      return;
    const j = window.document.documentElement, Z = window.getComputedStyle(j);
    M.forEach(([v, A]) => {
      const X = Z.getPropertyValue(v).trim();
      if (X) {
        Y.style.setProperty(A, X);
        return;
      }
      Y.style.removeProperty(A);
    });
    const xe = j.getAttribute("data-theme") === "light" || c === "light" ? "light" : "dark";
    Y.setAttribute("theme", xe);
  }
  function ro(c = e(Er)) {
    Y.setAttribute("data-page-theme", c.pageThemeSpread);
  }
  function Rn(c) {
    xn(c);
  }
  function cn() {
    $(me, sr.filter((c) => e(m)[c].open), !0);
  }
  function Vt(c) {
    $(
      me,
      [
        ...e(me).filter((j) => j !== c),
        c
      ],
      !0
    );
  }
  function lr(c) {
    $(
      bt,
      [
        ...e(bt).filter((j) => j !== c),
        c
      ],
      !0
    );
  }
  function no(c, j) {
    $(Xe, { ...e(Xe), [c]: j }, !0);
  }
  function Or(c) {
    if (!(c in e(Xe)))
      return;
    const j = { ...e(Xe) };
    delete j[c], $(Xe, j, !0);
  }
  function ja(c, j) {
    $(Ct, { ...e(Ct), [c]: j }, !0);
  }
  function kn(c) {
    if (!(c in e(Ct)))
      return;
    const j = { ...e(Ct) };
    delete j[c], $(Ct, j, !0);
  }
  function na(c) {
    for (const j of sr)
      e(m)[j].pinned = c.includes(j) && e(m)[j].open;
  }
  function aa(c) {
    const j = fu(c);
    !j || !sr.includes(j.widgetId) || (ut(j.widgetId, { pinned: j.pinned }), typeof localStorage < "u" && localStorage.removeItem(Ol));
  }
  function ur(c) {
    Or(c);
  }
  function ui() {
    e(He) || (e(K).editing = !e(K).editing);
  }
  function oa() {
    $(gt, !e(gt));
  }
  function ao() {
    const c = (/* @__PURE__ */ new Date()).toISOString();
    $(it, e(it).map((j, Z) => Z === 0 ? { ...j, savedAt: c } : j), !0), !(typeof localStorage > "u") && localStorage.setItem(O(s), JSON.stringify({
      layouts: sr.reduce(
        (j, Z) => (j[Z] = e($e)[Z], j),
        {}
      ),
      ui: {
        hiddenWidgets: e(K).hiddenWidgets,
        toolbarWidgets: e(K).toolbarWidgets,
        toolbarCustomActions: e(K).toolbarCustomActions,
        customActions: e(K).customActions
      }
    }));
  }
  function Pa(c) {
    if (e(K).toolbarWidgets.includes(c)) {
      e(K).toolbarWidgets = e(K).toolbarWidgets.filter((j) => j !== c);
      return;
    }
    e(K).toolbarWidgets = [...e(K).toolbarWidgets, c];
  }
  function pi(c) {
    const j = e(K).hiddenWidgets.includes(c) ? e(K).hiddenWidgets.filter((Z) => Z !== c) : [...e(K).hiddenWidgets, c];
    e(K).hiddenWidgets = j, $($e, qt(e($e), j), !0), $(bt, sr.filter((Z) => !j.includes(Z)), !0);
  }
  function Lo(c) {
    if (e(K).toolbarCustomActions.includes(c)) {
      e(K).toolbarCustomActions = e(K).toolbarCustomActions.filter((j) => j !== c);
      return;
    }
    e(K).toolbarCustomActions = [...e(K).toolbarCustomActions, c];
  }
  function wi(c) {
    const j = e(K).customActions.find((Z) => Z.id === c);
    if (j) {
      $(gt, !1);
      for (const Z of j.steps)
        ut(Z.widgetId, { pinned: !!Z.pinned });
    }
  }
  function Bo(c) {
    e(K).customActions = e(K).customActions.filter((j) => j.id !== c), e(K).toolbarCustomActions = e(K).toolbarCustomActions.filter((j) => j !== c);
  }
  function Fo(c) {
    const j = c.label.trim();
    if (!j)
      return;
    const Z = c.steps.filter((X) => ve(X.widgetId)).map((X) => ({
      type: "open-widget",
      widgetId: X.widgetId,
      pinned: !!X.pinned
    }));
    if (Z.length === 0)
      return;
    const xe = `workspace-action-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, v = c.barLabel.trim() || j, A = c.summary.trim() || `Open ${Z.length} workspace widget${Z.length === 1 ? "" : "s"}.`;
    e(K).customActions = [
      ...e(K).customActions,
      {
        id: xe,
        label: j,
        barLabel: v,
        iconName: c.iconName,
        summary: A,
        steps: Z
      }
    ], e(K).toolbarCustomActions = [...e(K).toolbarCustomActions, xe];
  }
  function mi(c) {
    if (e(K).edgePinnedWidgets.includes(c)) {
      e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((j) => j !== c), e(m)[c].pinned = !1, kn(c);
      return;
    }
    e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, c], e(m)[c].open && (e(m)[c].pinned = !0);
  }
  function fi(c) {
    if (ve(c)) {
      if (e(m)[c].open && e(m)[c].windowState !== "minimized") {
        ja(c, e(m)[c].windowState), e(m)[c].windowState = "minimized";
        return;
      }
      if (e(m)[c].open && e(m)[c].windowState === "minimized") {
        e(m)[c].windowState = e(Ct)[c] ?? "normal", Vt(c);
        return;
      }
      ut(c, { pinned: !0 });
    }
  }
  function bi(c) {
    ve(c) && (e(m)[c].pinned = !1, e(m)[c].open = !1, e(m)[c].windowState = "normal", e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((j) => j !== c), kn(c), Or(c), $(me, e(me).filter((j) => j !== c), !0));
  }
  function ut(c, j = {}) {
    e(m)[c].open = !0, e(m)[c].windowState = "normal", j.pinned && (e(m)[c].pinned = !0, e(K).edgePinnedWidgets.includes(c) || (e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, c])), j.dragSeed ? no(c, j.dragSeed) : Or(c), kn(c), $(gt, !1), Vt(c);
  }
  function Qe(c) {
    e(m)[c].open = !0, e(m)[c].windowState = "normal", e(m)[c].pinned = !e(m)[c].pinned, e(m)[c].pinned && !e(K).edgePinnedWidgets.includes(c) ? e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, c] : e(m)[c].pinned || (e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((j) => j !== c), kn(c)), Vt(c);
  }
  function yr(c) {
    return e(m)[c].open && e(m)[c].windowState !== "minimized";
  }
  function xr(c) {
    return !e(K).hiddenWidgets.includes(c) && !yr(c);
  }
  function Yt(c, j) {
    $(Be, null), $($e, Pe(e($e), c, j), !0), lr(c);
  }
  function pr(c, j) {
    var Z;
    if (!j) {
      ((Z = e(Be)) == null ? void 0 : Z.widgetId) === c && $(Be, null);
      return;
    }
    $(Be, { widgetId: c, layout: B(j) }, !0), lr(c);
  }
  function oo() {
    const c = re();
    $(Be, null), $($e, J(), !0), $(bt, [...sr], !0), e(K).editing = !1, e(K).hiddenWidgets = [...c.hiddenWidgets], e(K).toolbarWidgets = [...c.toolbarWidgets], e(K).toolbarCustomActions = je(c.toolbarCustomActions, e(K).customActions.map((j) => j.id), []), $(gt, !1);
  }
  function nr(c) {
    e(m)[c].open = !1, e(m)[c].pinned = !1, e(m)[c].windowState = "normal", e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((j) => j !== c), kn(c), Or(c), $(me, e(me).filter((j) => j !== c), !0);
  }
  function Ut(c) {
    const j = e(me).indexOf(c);
    return 240 + (j === -1 ? 0 : j * 4);
  }
  function kr(c) {
    const j = e(bt).indexOf(c);
    return 10 + (j === -1 ? 0 : j);
  }
  function On(c) {
    const j = () => {
      $(Ze, c.clientWidth, !0);
    };
    j();
    const Z = new ResizeObserver(() => {
      j();
    });
    return Z.observe(c), {
      destroy() {
        Z.disconnect();
      }
    };
  }
  async function za() {
    const [c, j, Z, xe] = await Promise.all([
      wu(H),
      cu(R),
      vu(R),
      uu(R)
    ]);
    if ($(ct, c, !0), $(yt, j.results, !0), $(we, Z.results, !0), $(ze, xe.result, !0), !e(Dt).roleId) {
      const v = e(we).find((A) => !A.operatorOnly);
      e(Dt).roleId = (v == null ? void 0 : v.id) ?? "";
    }
    await _n();
  }
  async function ia() {
    $(Me, !0), $(D, null);
    try {
      if (!await pu()) {
        $(
          D,
          {
            message: "Sign in is required before the admin control plane can load.",
            error: !0
          },
          !0
        );
        return;
      }
      await za();
    } catch (c) {
      $(
        D,
        {
          message: c instanceof Error ? c.message : "Failed to load admin control-plane data.",
          error: !0
        },
        !0
      );
    } finally {
      $(Me, !1);
    }
  }
  async function sa() {
    $(L, !0), $(br, null);
    try {
      const c = await gu(R, {
        username: e(Dt).username,
        name: e(Dt).name,
        roleId: e(Dt).roleId,
        ...e(Dt).loginKey.trim() !== "" ? { loginKey: e(Dt).loginKey.trim() } : {}
      });
      $(
        br,
        {
          message: `Created ${c.user.username}. Login key: ${c.loginKey}`,
          error: !1
        },
        !0
      ), e(Dt).username = "", e(Dt).name = "", e(Dt).loginKey = "", await ia();
    } catch (c) {
      $(
        br,
        {
          message: c instanceof Error ? c.message : "Unable to create user",
          error: !0
        },
        !0
      );
    } finally {
      $(L, !1);
    }
  }
  async function Ma() {
    $(de, !0), $(Pr, null);
    try {
      const c = await hu(R, {
        id: e($t).id,
        name: e($t).name,
        description: e($t).description,
        entitlements: e($t).entitlements.split(",").map((j) => j.trim()).filter(Boolean)
      });
      $(Pr, { message: `Created role ${c.result.id}`, error: !1 }, !0), e($t).id = "", e($t).name = "", e($t).description = "", e($t).entitlements = "NATURAL_VIEW", await ia();
    } catch (c) {
      $(
        Pr,
        {
          message: c instanceof Error ? c.message : "Unable to create role",
          error: !0
        },
        !0
      );
    } finally {
      $(de, !1);
    }
  }
  async function ar(c) {
    $(Le, !0), $(D, null);
    try {
      await mu(H, c), window.location.reload();
    } catch (j) {
      $(
        D,
        {
          message: j instanceof Error ? j.message : "Unable to switch display mode",
          error: !0
        },
        !0
      );
    } finally {
      $(Le, !1);
    }
  }
  async function _n() {
    $(Ve, !0);
    try {
      const c = await du({
        entity: e(zr),
        q: e(rr),
        limit: 12,
        field: e(zr) === "public_workspace_files" ? ["workspaceArea", "resourceKind"] : []
      });
      $(Je, c.results, !0), $(N, c.facets, !0), $(We, !0);
    } catch (c) {
      $(
        D,
        {
          message: c instanceof Error ? c.message : "Unable to load workspace discovery data",
          error: !0
        },
        !0
      );
    } finally {
      $(Ve, !1);
    }
  }
  mn(() => {
    if (!e(Mt) || typeof localStorage > "u")
      return;
    const c = sr.reduce(
      (j, Z) => (j[Z] = {
        open: e(m)[Z].open,
        pinned: e(m)[Z].pinned,
        windowState: e(m)[Z].windowState,
        frame: e(m)[Z].frame ?? null,
        restoreFrame: e(m)[Z].restoreFrame ?? null,
        snapTarget: e(m)[Z].snapTarget ?? null
      }, j),
      {}
    );
    localStorage.setItem(O(n), JSON.stringify(c));
  }), mn(() => {
    !e(Mt) || typeof localStorage > "u" || localStorage.setItem(O(a), JSON.stringify(sr.reduce(
      (c, j) => (c[j] = e($e)[j], c),
      {}
    )));
  }), mn(() => {
    !e(Mt) || typeof localStorage > "u" || localStorage.setItem(b(l), JSON.stringify(e(K).edgePinnedWidgets));
  }), mn(() => {
    !e(Mt) || typeof localStorage > "u" || localStorage.setItem(b(g), JSON.stringify(e(tr)));
  }), mn(() => {
    !e(Mt) || typeof localStorage > "u" || localStorage.setItem(O(o), JSON.stringify({
      editing: e(K).editing,
      toolbarWidgets: e(K).toolbarWidgets,
      edgePinnedWidgets: e(K).edgePinnedWidgets,
      hiddenWidgets: e(K).hiddenWidgets,
      customActions: e(K).customActions,
      toolbarCustomActions: e(K).toolbarCustomActions
    }));
  }), mn(() => {
    !e(Mt) || typeof localStorage > "u" || localStorage.setItem(O(i), JSON.stringify(e(it)));
  }), Ro(() => {
    Rn(Rl()), ro(e(Er));
    const c = () => {
      xn(Rl());
    }, j = au((X) => {
      Rn(X);
    }), Z = hi((X) => {
      $(Er, X, !0), ro(X);
    });
    P.forEach((X) => {
      window.addEventListener(X, c);
    });
    try {
      const X = localStorage.getItem(O(n));
      X && ($(m, ot(JSON.parse(X)), !0), cn());
      const ie = localStorage.getItem(O(a));
      ie && $($e, _t(JSON.parse(ie)), !0);
      const qe = localStorage.getItem(O(o));
      qe && $(K, Pt(JSON.parse(qe)), !0);
      const st = localStorage.getItem(O(i));
      st && $(it, ke(JSON.parse(st)), !0);
      const At = localStorage.getItem(b(l));
      At && (e(K).edgePinnedWidgets = Te(JSON.parse(At), e(K).edgePinnedWidgets)), e(K).toolbarCustomActions = je(e(K).toolbarCustomActions, e(K).customActions.map((or) => or.id), re().toolbarCustomActions), e(K).edgePinnedWidgets = Te(
        [
          ...e(K).edgePinnedWidgets,
          ...sr.filter((or) => e(m)[or].pinned)
        ],
        e(K).edgePinnedWidgets
      ), na(e(K).edgePinnedWidgets), $($e, qt(e($e), e(K).hiddenWidgets), !0), $(bt, sr.filter((or) => !e(K).hiddenWidgets.includes(or)), !0);
      const Xt = localStorage.getItem(b(g));
      Xt && $(tr, zt(JSON.parse(Xt)), !0), aa(localStorage.getItem(Ol));
    } catch {
    }
    const xe = window.matchMedia("(max-width: 63.99rem)"), v = () => {
      $(He, xe.matches, !0);
    };
    v(), xe.addEventListener("change", v);
    const A = (X) => {
      if (X.key === b(l)) {
        try {
          const ie = Te(X.newValue ? JSON.parse(X.newValue) : [], []);
          e(K).edgePinnedWidgets = ie, na(ie);
        } catch {
        }
        return;
      }
      if (X.key === b(g)) {
        try {
          $(
            tr,
            X.newValue ? zt(JSON.parse(X.newValue)) : le(),
            !0
          );
        } catch {
          $(tr, le(), !0);
        }
        return;
      }
      X.key === Ol && aa(X.newValue);
    };
    return window.addEventListener("storage", A), $(Mt, !0), ia(), () => {
      window.removeEventListener("storage", A), xe.removeEventListener("change", v), P.forEach((X) => {
        window.removeEventListener(X, c);
      }), j(), Z();
    };
  });
  var In = Yw(), Dn = Zt(In);
  Bg(Dn, {
    get notice() {
      return e(D);
    },
    get loading() {
      return e(Me);
    },
    get metrics() {
      return e(ra);
    },
    children: (c, j) => {
      var Z = Vw(), xe = Zt(Z);
      Jg(xe, {
        get items() {
          return e(Rr);
        },
        get profiles() {
          return e(it);
        },
        get editing() {
          return e(Ht);
        },
        get compact() {
          return e(He);
        },
        get layoutDirty() {
          return e(Gt);
        },
        get managerOpen() {
          return e(gt);
        },
        get customActionIconOptions() {
          return S;
        },
        onToggleEditing: ui,
        onResetLayout: oo,
        onSaveWorkspace: ao,
        onToggleManager: oa,
        onActivateWidget: ut,
        onToggleToolbar: Pa,
        onToggleWorkspace: pi,
        onToggleEdgePin: mi,
        onActivateAction: wi,
        onToggleToolbarAction: Lo,
        onDeleteAction: Bo,
        onCreateAction: Fo
      });
      var v = d(xe, 2);
      let A;
      var X = u(v);
      {
        var ie = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("create-user"));
            vn(ne, {
              title: "Create user",
              get layout() {
                return e(Ce)["create-user"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("create-user", U),
              onPreviewChange: (U) => pr("create-user", U),
              onShiftPopoutStart: (U) => ut("create-user", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("create-user"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => {
                    var ha;
                    return ((ha = e(ct)) == null ? void 0 : ha.actualRole) ?? "unknown";
                  }), Dr = /* @__PURE__ */ _(() => yr("create-user"));
                  gd(U, {
                    get roles() {
                      return e(we);
                    },
                    get form() {
                      return e(Dt);
                    },
                    get result() {
                      return e(br);
                    },
                    get actualRole() {
                      return e(lt);
                    },
                    get busy() {
                      return e(L);
                    },
                    dataTestid: "admin-users-panel",
                    get open() {
                      return e(Dr);
                    },
                    get pinned() {
                      return e(m)["create-user"].pinned;
                    },
                    onOpen: () => ut("create-user"),
                    onTogglePin: () => Qe("create-user"),
                    onSubmit: () => void sa()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, qe = /* @__PURE__ */ _(() => xr("create-user"));
        ce(X, (ne) => {
          e(qe) && ne(ie);
        });
      }
      var st = d(X, 2);
      {
        var At = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("create-role"));
            vn(ne, {
              title: "Create role",
              get layout() {
                return e(Ce)["create-role"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("create-role", U),
              onPreviewChange: (U) => pr("create-role", U),
              onShiftPopoutStart: (U) => ut("create-role", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("create-role"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("create-role"));
                  cd(U, {
                    get roles() {
                      return e(we);
                    },
                    get form() {
                      return e($t);
                    },
                    get result() {
                      return e(Pr);
                    },
                    get busy() {
                      return e(de);
                    },
                    dataTestid: "admin-roles-panel",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["create-role"].pinned;
                    },
                    onOpen: () => ut("create-role"),
                    onTogglePin: () => Qe("create-role"),
                    onSubmit: () => void Ma()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Xt = /* @__PURE__ */ _(() => xr("create-role"));
        ce(st, (ne) => {
          e(Xt) && ne(At);
        });
      }
      var or = d(st, 2);
      {
        var qn = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("display-mode"));
            vn(ne, {
              title: "Display mode",
              get layout() {
                return e(Ce)["display-mode"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("display-mode", U),
              onPreviewChange: (U) => pr("display-mode", U),
              onShiftPopoutStart: (U) => ut("display-mode", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("display-mode"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("display-mode"));
                  vd(U, {
                    get user() {
                      return e(ct);
                    },
                    get busy() {
                      return e(Le);
                    },
                    dataTestid: "admin-display-mode-panel",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["display-mode"].pinned;
                    },
                    onOpen: () => ut("display-mode"),
                    onTogglePin: () => Qe("display-mode"),
                    onChange: (Dr) => void ar(Dr)
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, io = /* @__PURE__ */ _(() => xr("display-mode"));
        ce(or, (ne) => {
          e(io) && ne(qn);
        });
      }
      var la = d(or, 2);
      {
        var Ln = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("user-directory"));
            vn(ne, {
              title: "Users",
              get layout() {
                return e(Ce)["user-directory"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("user-directory", U),
              onPreviewChange: (U) => pr("user-directory", U),
              onShiftPopoutStart: (U) => ut("user-directory", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("user-directory"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("user-directory"));
                  wd(U, {
                    get users() {
                      return e(yt);
                    },
                    dataTestid: "admin-users-table",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["user-directory"].pinned;
                    },
                    onOpen: () => ut("user-directory"),
                    onTogglePin: () => Qe("user-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, so = /* @__PURE__ */ _(() => xr("user-directory"));
        ce(la, (ne) => {
          e(so) && ne(Ln);
        });
      }
      var Ho = d(la, 2);
      {
        var da = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("role-directory"));
            vn(ne, {
              title: "Role catalog",
              get layout() {
                return e(Ce)["role-directory"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("role-directory", U),
              onPreviewChange: (U) => pr("role-directory", U),
              onShiftPopoutStart: (U) => ut("role-directory", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("role-directory"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("role-directory"));
                  ud(U, {
                    get roles() {
                      return e(we);
                    },
                    dataTestid: "admin-roles-table",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["role-directory"].pinned;
                    },
                    onOpen: () => ut("role-directory"),
                    onTogglePin: () => Qe("role-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ca = /* @__PURE__ */ _(() => xr("role-directory"));
        ce(Ho, (ne) => {
          e(ca) && ne(da);
        });
      }
      var lo = d(Ho, 2);
      {
        var ga = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("catalog-search"));
            vn(ne, {
              title: "Discovery",
              get layout() {
                return e(Ce)["catalog-search"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("catalog-search", U),
              onPreviewChange: (U) => pr("catalog-search", U),
              onShiftPopoutStart: (U) => ut("catalog-search", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("catalog-search"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("catalog-search"));
                  dd(U, {
                    get query() {
                      return e(rr);
                    },
                    get entity() {
                      return e(zr);
                    },
                    get loading() {
                      return e(Ve);
                    },
                    dataTestid: "admin-catalog-panel",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["catalog-search"].pinned;
                    },
                    onOpen: () => ut("catalog-search"),
                    onTogglePin: () => Qe("catalog-search"),
                    onSearch: () => void _n(),
                    onEntityChange: (Dr) => {
                      $(zr, Dr, !0), $(rr, ""), _n();
                    }
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Zr = /* @__PURE__ */ _(() => xr("catalog-search"));
        ce(lo, (ne) => {
          e(Zr) && ne(ga);
        });
      }
      var Wa = d(lo, 2);
      {
        var co = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("catalog-results"));
            vn(ne, {
              title: "Search results",
              get layout() {
                return e(Ce)["catalog-results"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("catalog-results", U),
              onPreviewChange: (U) => pr("catalog-results", U),
              onShiftPopoutStart: (U) => ut("catalog-results", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("catalog-results"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("catalog-results"));
                  ld(U, {
                    get loaded() {
                      return e(We);
                    },
                    get loading() {
                      return e(Ve);
                    },
                    get searchResults() {
                      return e(Je);
                    },
                    dataTestid: "admin-search-results",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["catalog-results"].pinned;
                    },
                    onOpen: () => ut("catalog-results"),
                    onTogglePin: () => Qe("catalog-results")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, go = /* @__PURE__ */ _(() => xr("catalog-results"));
        ce(Wa, (ne) => {
          e(go) && ne(co);
        });
      }
      var Ca = d(Wa, 2);
      {
        var vo = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("catalog-facets"));
            vn(ne, {
              title: "Facet distribution",
              get layout() {
                return e(Ce)["catalog-facets"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("catalog-facets", U),
              onPreviewChange: (U) => pr("catalog-facets", U),
              onShiftPopoutStart: (U) => ut("catalog-facets", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("catalog-facets"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("catalog-facets"));
                  sd(U, {
                    get loaded() {
                      return e(We);
                    },
                    get facets() {
                      return e(N);
                    },
                    dataTestid: "admin-facets",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["catalog-facets"].pinned;
                    },
                    onOpen: () => ut("catalog-facets"),
                    onTogglePin: () => Qe("catalog-facets")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ho = /* @__PURE__ */ _(() => xr("catalog-facets"));
        ce(Ca, (ne) => {
          e(ho) && ne(vo);
        });
      }
      var pt = d(Ca, 2);
      {
        var xt = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("window-preferences"));
            vn(ne, {
              title: "Window preferences",
              get layout() {
                return e(Ce)["window-preferences"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("window-preferences", U),
              onPreviewChange: (U) => pr("window-preferences", U),
              onShiftPopoutStart: (U) => ut("window-preferences", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("window-preferences"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("window-preferences"));
                  md(U, {
                    dataTestid: "admin-settings-panel",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["window-preferences"].pinned;
                    },
                    onOpen: () => ut("window-preferences"),
                    onTogglePin: () => Qe("window-preferences")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ht = /* @__PURE__ */ _(() => xr("window-preferences"));
        ce(pt, (ne) => {
          e(ht) && ne(xt);
        });
      }
      var wr = d(pt, 2);
      {
        var ir = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("dock-preferences"));
            vn(ne, {
              title: "Dock preferences",
              get layout() {
                return e(Ce)["dock-preferences"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("dock-preferences", U),
              onPreviewChange: (U) => pr("dock-preferences", U),
              onShiftPopoutStart: (U) => ut("dock-preferences", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("dock-preferences"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("dock-preferences"));
                  hd(U, {
                    dataTestid: "admin-dock-settings-panel",
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["dock-preferences"].pinned;
                    },
                    onOpen: () => ut("dock-preferences"),
                    onTogglePin: () => Qe("dock-preferences")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, _r = /* @__PURE__ */ _(() => xr("dock-preferences"));
        ce(wr, (ne) => {
          e(_r) && ne(ir);
        });
      }
      var Kt = d(wr, 2);
      {
        var Ir = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => kr("settings-payload"));
            vn(ne, {
              title: "Settings payload",
              get layout() {
                return e(Ce)["settings-payload"];
              },
              get canvasWidth() {
                return e(Ze);
              },
              get compact() {
                return e(He);
              },
              get editable() {
                return e(Ht);
              },
              get zIndex() {
                return e(Ye);
              },
              onChange: (U) => Yt("settings-payload", U),
              onPreviewChange: (U) => pr("settings-payload", U),
              onShiftPopoutStart: (U) => ut("settings-payload", { pinned: !0, dragSeed: U }),
              onFocus: () => lr("settings-payload"),
              children: (U, G) => {
                {
                  let lt = /* @__PURE__ */ _(() => yr("settings-payload"));
                  pd(U, {
                    get settings() {
                      return e(ze);
                    },
                    get open() {
                      return e(lt);
                    },
                    get pinned() {
                      return e(m)["settings-payload"].pinned;
                    },
                    onOpen: () => ut("settings-payload"),
                    onTogglePin: () => Qe("settings-payload")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Mr = /* @__PURE__ */ _(() => xr("settings-payload"));
        ce(Kt, (ne) => {
          e(Mr) && ne(Ir);
        });
      }
      h(v), Ih(v, (ne) => On == null ? void 0 : On(ne));
      var Vr = d(v, 2);
      {
        var Yr = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("create-user")), U = /* @__PURE__ */ _(() => e(Xe)["create-user"] ?? null);
            gn(ne, {
              get title() {
                return Ie["create-user"].title;
              },
              get helpText() {
                return qr["create-user"].summary;
              },
              get pinned() {
                return e(m)["create-user"].pinned;
              },
              get defaultWidth() {
                return Ie["create-user"].width;
              },
              get defaultHeight() {
                return Ie["create-user"].height;
              },
              get defaultX() {
                return Ie["create-user"].x;
              },
              get defaultY() {
                return Ie["create-user"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("create-user"),
              onFocus: () => Vt("create-user"),
              onPinToggle: () => Qe("create-user"),
              onConsumeDragSeed: () => ur("create-user"),
              get windowState() {
                return e(m)["create-user"].windowState;
              },
              set windowState(G) {
                e(m)["create-user"].windowState = G;
              },
              get frame() {
                return e(m)["create-user"].frame;
              },
              set frame(G) {
                e(m)["create-user"].frame = G;
              },
              get restoreFrame() {
                return e(m)["create-user"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["create-user"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["create-user"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["create-user"].snapTarget = G;
              },
              children: (G, lt) => {
                {
                  let Dr = /* @__PURE__ */ _(() => {
                    var ha;
                    return ((ha = e(ct)) == null ? void 0 : ha.actualRole) ?? "unknown";
                  });
                  gd(G, {
                    mode: "window",
                    get roles() {
                      return e(we);
                    },
                    get form() {
                      return e(Dt);
                    },
                    get result() {
                      return e(br);
                    },
                    get actualRole() {
                      return e(Dr);
                    },
                    get busy() {
                      return e(L);
                    },
                    get pinned() {
                      return e(m)["create-user"].pinned;
                    },
                    onTogglePin: () => Qe("create-user"),
                    onSubmit: () => void sa()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(Vr, (ne) => {
          e(m)["create-user"].open && ne(Yr);
        });
      }
      var Bn = d(Vr, 2);
      {
        var St = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("user-directory")), U = /* @__PURE__ */ _(() => e(Xe)["user-directory"] ?? null);
            gn(ne, {
              get title() {
                return Ie["user-directory"].title;
              },
              get helpText() {
                return qr["user-directory"].summary;
              },
              get pinned() {
                return e(m)["user-directory"].pinned;
              },
              get defaultWidth() {
                return Ie["user-directory"].width;
              },
              get defaultHeight() {
                return Ie["user-directory"].height;
              },
              get defaultX() {
                return Ie["user-directory"].x;
              },
              get defaultY() {
                return Ie["user-directory"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("user-directory"),
              onFocus: () => Vt("user-directory"),
              onPinToggle: () => Qe("user-directory"),
              onConsumeDragSeed: () => ur("user-directory"),
              get windowState() {
                return e(m)["user-directory"].windowState;
              },
              set windowState(G) {
                e(m)["user-directory"].windowState = G;
              },
              get frame() {
                return e(m)["user-directory"].frame;
              },
              set frame(G) {
                e(m)["user-directory"].frame = G;
              },
              get restoreFrame() {
                return e(m)["user-directory"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["user-directory"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["user-directory"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["user-directory"].snapTarget = G;
              },
              children: (G, lt) => {
                wd(G, {
                  mode: "window",
                  get users() {
                    return e(yt);
                  },
                  get pinned() {
                    return e(m)["user-directory"].pinned;
                  },
                  onTogglePin: () => Qe("user-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(Bn, (ne) => {
          e(m)["user-directory"].open && ne(St);
        });
      }
      var jt = d(Bn, 2);
      {
        var dr = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("create-role")), U = /* @__PURE__ */ _(() => e(Xe)["create-role"] ?? null);
            gn(ne, {
              get title() {
                return Ie["create-role"].title;
              },
              get helpText() {
                return qr["create-role"].summary;
              },
              get pinned() {
                return e(m)["create-role"].pinned;
              },
              get defaultWidth() {
                return Ie["create-role"].width;
              },
              get defaultHeight() {
                return Ie["create-role"].height;
              },
              get defaultX() {
                return Ie["create-role"].x;
              },
              get defaultY() {
                return Ie["create-role"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("create-role"),
              onFocus: () => Vt("create-role"),
              onPinToggle: () => Qe("create-role"),
              onConsumeDragSeed: () => ur("create-role"),
              get windowState() {
                return e(m)["create-role"].windowState;
              },
              set windowState(G) {
                e(m)["create-role"].windowState = G;
              },
              get frame() {
                return e(m)["create-role"].frame;
              },
              set frame(G) {
                e(m)["create-role"].frame = G;
              },
              get restoreFrame() {
                return e(m)["create-role"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["create-role"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["create-role"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["create-role"].snapTarget = G;
              },
              children: (G, lt) => {
                cd(G, {
                  mode: "window",
                  get roles() {
                    return e(we);
                  },
                  get form() {
                    return e($t);
                  },
                  get result() {
                    return e(Pr);
                  },
                  get busy() {
                    return e(de);
                  },
                  get pinned() {
                    return e(m)["create-role"].pinned;
                  },
                  onTogglePin: () => Qe("create-role"),
                  onSubmit: () => void Ma()
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(jt, (ne) => {
          e(m)["create-role"].open && ne(dr);
        });
      }
      var va = d(jt, 2);
      {
        var Fn = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("role-directory")), U = /* @__PURE__ */ _(() => e(Xe)["role-directory"] ?? null);
            gn(ne, {
              get title() {
                return Ie["role-directory"].title;
              },
              get helpText() {
                return qr["role-directory"].summary;
              },
              get pinned() {
                return e(m)["role-directory"].pinned;
              },
              get defaultWidth() {
                return Ie["role-directory"].width;
              },
              get defaultHeight() {
                return Ie["role-directory"].height;
              },
              get defaultX() {
                return Ie["role-directory"].x;
              },
              get defaultY() {
                return Ie["role-directory"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("role-directory"),
              onFocus: () => Vt("role-directory"),
              onPinToggle: () => Qe("role-directory"),
              onConsumeDragSeed: () => ur("role-directory"),
              get windowState() {
                return e(m)["role-directory"].windowState;
              },
              set windowState(G) {
                e(m)["role-directory"].windowState = G;
              },
              get frame() {
                return e(m)["role-directory"].frame;
              },
              set frame(G) {
                e(m)["role-directory"].frame = G;
              },
              get restoreFrame() {
                return e(m)["role-directory"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["role-directory"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["role-directory"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["role-directory"].snapTarget = G;
              },
              children: (G, lt) => {
                ud(G, {
                  mode: "window",
                  get roles() {
                    return e(we);
                  },
                  get pinned() {
                    return e(m)["role-directory"].pinned;
                  },
                  onTogglePin: () => Qe("role-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(va, (ne) => {
          e(m)["role-directory"].open && ne(Fn);
        });
      }
      var cr = d(va, 2);
      {
        var Ur = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("display-mode")), U = /* @__PURE__ */ _(() => e(Xe)["display-mode"] ?? null);
            gn(ne, {
              get title() {
                return Ie["display-mode"].title;
              },
              get helpText() {
                return qr["display-mode"].summary;
              },
              get pinned() {
                return e(m)["display-mode"].pinned;
              },
              get defaultWidth() {
                return Ie["display-mode"].width;
              },
              get defaultHeight() {
                return Ie["display-mode"].height;
              },
              get defaultX() {
                return Ie["display-mode"].x;
              },
              get defaultY() {
                return Ie["display-mode"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("display-mode"),
              onFocus: () => Vt("display-mode"),
              onPinToggle: () => Qe("display-mode"),
              onConsumeDragSeed: () => ur("display-mode"),
              get windowState() {
                return e(m)["display-mode"].windowState;
              },
              set windowState(G) {
                e(m)["display-mode"].windowState = G;
              },
              get frame() {
                return e(m)["display-mode"].frame;
              },
              set frame(G) {
                e(m)["display-mode"].frame = G;
              },
              get restoreFrame() {
                return e(m)["display-mode"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["display-mode"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["display-mode"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["display-mode"].snapTarget = G;
              },
              children: (G, lt) => {
                vd(G, {
                  mode: "window",
                  get user() {
                    return e(ct);
                  },
                  get busy() {
                    return e(Le);
                  },
                  get pinned() {
                    return e(m)["display-mode"].pinned;
                  },
                  onTogglePin: () => Qe("display-mode"),
                  onChange: (Dr) => void ar(Dr)
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(cr, (ne) => {
          e(m)["display-mode"].open && ne(Ur);
        });
      }
      var Go = d(cr, 2);
      {
        var nl = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("window-preferences")), U = /* @__PURE__ */ _(() => e(Xe)["window-preferences"] ?? null);
            gn(ne, {
              get title() {
                return Ie["window-preferences"].title;
              },
              get helpText() {
                return qr["window-preferences"].summary;
              },
              get pinned() {
                return e(m)["window-preferences"].pinned;
              },
              get defaultWidth() {
                return Ie["window-preferences"].width;
              },
              get defaultHeight() {
                return Ie["window-preferences"].height;
              },
              get defaultX() {
                return Ie["window-preferences"].x;
              },
              get defaultY() {
                return Ie["window-preferences"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("window-preferences"),
              onFocus: () => Vt("window-preferences"),
              onPinToggle: () => Qe("window-preferences"),
              onConsumeDragSeed: () => ur("window-preferences"),
              get windowState() {
                return e(m)["window-preferences"].windowState;
              },
              set windowState(G) {
                e(m)["window-preferences"].windowState = G;
              },
              get frame() {
                return e(m)["window-preferences"].frame;
              },
              set frame(G) {
                e(m)["window-preferences"].frame = G;
              },
              get restoreFrame() {
                return e(m)["window-preferences"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["window-preferences"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["window-preferences"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["window-preferences"].snapTarget = G;
              },
              children: (G, lt) => {
                md(G, {
                  mode: "window",
                  get pinned() {
                    return e(m)["window-preferences"].pinned;
                  },
                  onTogglePin: () => Qe("window-preferences")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(Go, (ne) => {
          e(m)["window-preferences"].open && ne(nl);
        });
      }
      var $a = d(Go, 2);
      {
        var Vo = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("dock-preferences")), U = /* @__PURE__ */ _(() => e(Xe)["dock-preferences"] ?? null);
            gn(ne, {
              get title() {
                return Ie["dock-preferences"].title;
              },
              get helpText() {
                return qr["dock-preferences"].summary;
              },
              get pinned() {
                return e(m)["dock-preferences"].pinned;
              },
              get defaultWidth() {
                return Ie["dock-preferences"].width;
              },
              get defaultHeight() {
                return Ie["dock-preferences"].height;
              },
              get defaultX() {
                return Ie["dock-preferences"].x;
              },
              get defaultY() {
                return Ie["dock-preferences"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("dock-preferences"),
              onFocus: () => Vt("dock-preferences"),
              onPinToggle: () => Qe("dock-preferences"),
              onConsumeDragSeed: () => ur("dock-preferences"),
              get windowState() {
                return e(m)["dock-preferences"].windowState;
              },
              set windowState(G) {
                e(m)["dock-preferences"].windowState = G;
              },
              get frame() {
                return e(m)["dock-preferences"].frame;
              },
              set frame(G) {
                e(m)["dock-preferences"].frame = G;
              },
              get restoreFrame() {
                return e(m)["dock-preferences"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["dock-preferences"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["dock-preferences"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["dock-preferences"].snapTarget = G;
              },
              children: (G, lt) => {
                hd(G, {
                  mode: "window",
                  get pinned() {
                    return e(m)["dock-preferences"].pinned;
                  },
                  onTogglePin: () => Qe("dock-preferences")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce($a, (ne) => {
          e(m)["dock-preferences"].open && ne(Vo);
        });
      }
      var yi = d($a, 2);
      {
        var xi = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("settings-payload")), U = /* @__PURE__ */ _(() => e(Xe)["settings-payload"] ?? null);
            gn(ne, {
              get title() {
                return Ie["settings-payload"].title;
              },
              get helpText() {
                return qr["settings-payload"].summary;
              },
              get pinned() {
                return e(m)["settings-payload"].pinned;
              },
              get defaultWidth() {
                return Ie["settings-payload"].width;
              },
              get defaultHeight() {
                return Ie["settings-payload"].height;
              },
              get defaultX() {
                return Ie["settings-payload"].x;
              },
              get defaultY() {
                return Ie["settings-payload"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("settings-payload"),
              onFocus: () => Vt("settings-payload"),
              onPinToggle: () => Qe("settings-payload"),
              onConsumeDragSeed: () => ur("settings-payload"),
              get windowState() {
                return e(m)["settings-payload"].windowState;
              },
              set windowState(G) {
                e(m)["settings-payload"].windowState = G;
              },
              get frame() {
                return e(m)["settings-payload"].frame;
              },
              set frame(G) {
                e(m)["settings-payload"].frame = G;
              },
              get restoreFrame() {
                return e(m)["settings-payload"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["settings-payload"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["settings-payload"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["settings-payload"].snapTarget = G;
              },
              children: (G, lt) => {
                pd(G, {
                  mode: "window",
                  get settings() {
                    return e(ze);
                  },
                  get pinned() {
                    return e(m)["settings-payload"].pinned;
                  },
                  onTogglePin: () => Qe("settings-payload")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(yi, (ne) => {
          e(m)["settings-payload"].open && ne(xi);
        });
      }
      var ss = d(yi, 2);
      {
        var uo = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("catalog-search")), U = /* @__PURE__ */ _(() => e(Xe)["catalog-search"] ?? null);
            gn(ne, {
              get title() {
                return Ie["catalog-search"].title;
              },
              get helpText() {
                return qr["catalog-search"].summary;
              },
              get pinned() {
                return e(m)["catalog-search"].pinned;
              },
              get defaultWidth() {
                return Ie["catalog-search"].width;
              },
              get defaultHeight() {
                return Ie["catalog-search"].height;
              },
              get defaultX() {
                return Ie["catalog-search"].x;
              },
              get defaultY() {
                return Ie["catalog-search"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("catalog-search"),
              onFocus: () => Vt("catalog-search"),
              onPinToggle: () => Qe("catalog-search"),
              onConsumeDragSeed: () => ur("catalog-search"),
              get windowState() {
                return e(m)["catalog-search"].windowState;
              },
              set windowState(G) {
                e(m)["catalog-search"].windowState = G;
              },
              get frame() {
                return e(m)["catalog-search"].frame;
              },
              set frame(G) {
                e(m)["catalog-search"].frame = G;
              },
              get restoreFrame() {
                return e(m)["catalog-search"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["catalog-search"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["catalog-search"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["catalog-search"].snapTarget = G;
              },
              children: (G, lt) => {
                dd(G, {
                  mode: "window",
                  get query() {
                    return e(rr);
                  },
                  get entity() {
                    return e(zr);
                  },
                  get loading() {
                    return e(Ve);
                  },
                  get pinned() {
                    return e(m)["catalog-search"].pinned;
                  },
                  onTogglePin: () => Qe("catalog-search"),
                  onSearch: () => void _n(),
                  onEntityChange: (Dr) => {
                    $(zr, Dr, !0), $(rr, ""), _n();
                  }
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(ss, (ne) => {
          e(m)["catalog-search"].open && ne(uo);
        });
      }
      var po = d(ss, 2);
      {
        var ls = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("catalog-results")), U = /* @__PURE__ */ _(() => e(Xe)["catalog-results"] ?? null);
            gn(ne, {
              get title() {
                return Ie["catalog-results"].title;
              },
              get helpText() {
                return qr["catalog-results"].summary;
              },
              get pinned() {
                return e(m)["catalog-results"].pinned;
              },
              get defaultWidth() {
                return Ie["catalog-results"].width;
              },
              get defaultHeight() {
                return Ie["catalog-results"].height;
              },
              get defaultX() {
                return Ie["catalog-results"].x;
              },
              get defaultY() {
                return Ie["catalog-results"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("catalog-results"),
              onFocus: () => Vt("catalog-results"),
              onPinToggle: () => Qe("catalog-results"),
              onConsumeDragSeed: () => ur("catalog-results"),
              get windowState() {
                return e(m)["catalog-results"].windowState;
              },
              set windowState(G) {
                e(m)["catalog-results"].windowState = G;
              },
              get frame() {
                return e(m)["catalog-results"].frame;
              },
              set frame(G) {
                e(m)["catalog-results"].frame = G;
              },
              get restoreFrame() {
                return e(m)["catalog-results"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["catalog-results"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["catalog-results"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["catalog-results"].snapTarget = G;
              },
              children: (G, lt) => {
                ld(G, {
                  mode: "window",
                  get loaded() {
                    return e(We);
                  },
                  get loading() {
                    return e(Ve);
                  },
                  get searchResults() {
                    return e(Je);
                  },
                  get pinned() {
                    return e(m)["catalog-results"].pinned;
                  },
                  onTogglePin: () => Qe("catalog-results")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(po, (ne) => {
          e(m)["catalog-results"].open && ne(ls);
        });
      }
      var ki = d(po, 2);
      {
        var Yo = (ne) => {
          {
            let Ye = /* @__PURE__ */ _(() => Ut("catalog-facets")), U = /* @__PURE__ */ _(() => e(Xe)["catalog-facets"] ?? null);
            gn(ne, {
              get title() {
                return Ie["catalog-facets"].title;
              },
              get helpText() {
                return qr["catalog-facets"].summary;
              },
              get pinned() {
                return e(m)["catalog-facets"].pinned;
              },
              get defaultWidth() {
                return Ie["catalog-facets"].width;
              },
              get defaultHeight() {
                return Ie["catalog-facets"].height;
              },
              get defaultX() {
                return Ie["catalog-facets"].x;
              },
              get defaultY() {
                return Ie["catalog-facets"].y;
              },
              get zIndex() {
                return e(Ye);
              },
              get dragSeed() {
                return e(U);
              },
              onClose: () => nr("catalog-facets"),
              onFocus: () => Vt("catalog-facets"),
              onPinToggle: () => Qe("catalog-facets"),
              onConsumeDragSeed: () => ur("catalog-facets"),
              get windowState() {
                return e(m)["catalog-facets"].windowState;
              },
              set windowState(G) {
                e(m)["catalog-facets"].windowState = G;
              },
              get frame() {
                return e(m)["catalog-facets"].frame;
              },
              set frame(G) {
                e(m)["catalog-facets"].frame = G;
              },
              get restoreFrame() {
                return e(m)["catalog-facets"].restoreFrame;
              },
              set restoreFrame(G) {
                e(m)["catalog-facets"].restoreFrame = G;
              },
              get snapTarget() {
                return e(m)["catalog-facets"].snapTarget;
              },
              set snapTarget(G) {
                e(m)["catalog-facets"].snapTarget = G;
              },
              children: (G, lt) => {
                sd(G, {
                  mode: "window",
                  get loaded() {
                    return e(We);
                  },
                  get facets() {
                    return e(N);
                  },
                  get pinned() {
                    return e(m)["catalog-facets"].pinned;
                  },
                  onTogglePin: () => Qe("catalog-facets")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ce(ki, (ne) => {
          e(m)["catalog-facets"].open && ne(Yo);
        });
      }
      pe(() => A = se(v, 1, "workspace-canvas svelte-vg7d0z", null, A, { "compact-workspace": e(He) })), V(c, Z);
    },
    $$slots: { default: !0 }
  });
  var No = d(Dn, 2);
  Qg(No, {
    get items() {
      return e(En);
    },
    get position() {
      return e(tr);
    },
    get labelMode() {
      return e(An);
    },
    onActivate: fi,
    onRemove: bi,
    onPositionChange: (c) => {
      $(tr, c, !0);
    }
  }), V(t, In), It();
}
customElements.define("efsdb-admin", Ft(Xw, {}, [], [], { mode: "open" }));
