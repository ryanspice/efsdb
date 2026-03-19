var Wi = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var Ji = (e, t, r) => t in e ? Wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var D = (e, t, r) => Ji(e, typeof t != "symbol" ? t + "" : t, r), Nr = (e, t, r) => t.has(e) || bn("Cannot " + r);
var u = (e, t, r) => (Nr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, n) => (Nr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), I = (e, t, r) => (Nr(e, t, "access private method"), r);
var On;
typeof window < "u" && ((On = window.__svelte ?? (window.__svelte = {})).v ?? (On.v = /* @__PURE__ */ new Set())).add("5");
const Xi = 1, Zi = 2, Qi = 16, es = 2, Qr = "[", hr = "[!", wn = "[?", en = "]", St = {}, U = Symbol(), Ln = "http://www.w3.org/1999/xhtml", Dr = !1;
var Pn = Array.isArray, ts = Array.prototype.indexOf, At = Array.prototype.includes, _r = Array.from, or = Object.keys, ur = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, rs = Object.getOwnPropertyDescriptors, ns = Object.prototype, is = Array.prototype, Fn = Object.getPrototypeOf, yn = Object.isExtensible;
const ss = () => {
};
function ls(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function zn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const B = 2, Xt = 4, pr = 8, Un = 1 << 24, Ue = 16, ye = 32, Ze = 64, Ir = 128, oe = 512, z = 1024, q = 2048, we = 4096, re = 8192, Pe = 16384, Je = 32768, Nt = 65536, $n = 1 << 17, jn = 1 << 18, _t = 1 << 19, as = 1 << 20, Ye = 1 << 25, vt = 65536, Lr = 1 << 21, tn = 1 << 22, Ge = 1 << 23, ir = Symbol("$state"), fs = Symbol("legacy props"), os = Symbol(""), rt = new class extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "StaleReactionError");
    D(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Dn;
const us = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Dn = globalThis.document) != null && Dn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), rn = 3, Zt = 8;
function cs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ds() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function hs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _s() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ms() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function bs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ws() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ys() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $s() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Es() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let A = !1;
function Le(e) {
  A = e;
}
let R;
function ne(e) {
  if (e === null)
    throw gr(), St;
  return R = e;
}
function mr() {
  return ne(/* @__PURE__ */ je(R));
}
function T(e) {
  if (A) {
    if (/* @__PURE__ */ je(R) !== null)
      throw gr(), St;
    R = e;
  }
}
function Bn(e = 1) {
  if (A) {
    for (var t = e, r = R; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ je(r);
    R = r;
  }
}
function cr(e = !0) {
  for (var t = 0, r = R; ; ) {
    if (r.nodeType === Zt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === en) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Qr || n === hr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(r)
    );
    e && r.remove(), r = s;
  }
}
function qn(e) {
  if (!e || e.nodeType !== Zt)
    throw gr(), St;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Hn(e) {
  return e === this.v;
}
function xs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vn(e) {
  return !xs(e, this.v);
}
let ks = !1, ie = null;
function Rt(e) {
  ie = e;
}
function Yn(e, t = !1, r) {
  ie = {
    p: ie,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Kn(e) {
  var t = (
    /** @type {ComponentContext} */
    ie
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      wi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ie = t.p, e ?? /** @type {T} */
  {};
}
function Gn() {
  return !0;
}
let nt = [];
function Wn() {
  var e = nt;
  nt = [], ls(e);
}
function Fe(e) {
  if (nt.length === 0 && !jt) {
    var t = nt;
    queueMicrotask(() => {
      t === nt && Wn();
    });
  }
  nt.push(e);
}
function Ts() {
  for (; nt.length > 0; )
    Wn();
}
function Jn(e) {
  var t = x;
  if (t === null)
    return E.f |= Ge, e;
  if ((t.f & Je) === 0 && (t.f & Xt) === 0)
    throw e;
  Ke(e, t);
}
function Ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ir) !== 0) {
      if ((t.f & Je) === 0)
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
const Ss = -7169;
function L(e, t) {
  e.f = e.f & Ss | t;
}
function nn(e) {
  (e.f & oe) !== 0 || e.deps === null ? L(e, z) : L(e, we);
}
function Xn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & B) === 0 || (t.f & vt) === 0 || (t.f ^= vt, Xn(
        /** @type {Derived} */
        t.deps
      ));
}
function Zn(e, t, r) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & we) !== 0 && r.add(e), Xn(e.deps), L(e, z);
}
const tr = /* @__PURE__ */ new Set();
let b = null, Pr = null, j = null, G = [], br = null, Fr = !1, jt = !1;
var wt, yt, lt, $t, Yt, Kt, at, Me, Et, se, zr, Ur, jr, Qn;
const cn = class cn {
  constructor() {
    y(this, se);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    D(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    D(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    y(this, wt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, yt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    y(this, lt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    y(this, $t, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    y(this, Yt, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    y(this, Kt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    y(this, at, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    y(this, Me, /* @__PURE__ */ new Map());
    D(this, "is_fork", !1);
    y(this, Et, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, Me).has(t) || u(this, Me).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = u(this, Me).get(t);
    if (r) {
      u(this, Me).delete(t);
      for (var n of r.d)
        L(n, q), me(n);
      for (n of r.m)
        L(n, we), me(n);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var s;
    G = [], this.apply();
    var r = [], n = [];
    for (const i of t)
      I(this, se, Ur).call(this, i, r, n);
    if (I(this, se, zr).call(this)) {
      I(this, se, jr).call(this, n), I(this, se, jr).call(this, r);
      for (const [i, l] of u(this, Me))
        ni(i, l);
    } else {
      for (const i of u(this, wt)) i();
      u(this, wt).clear(), u(this, lt) === 0 && I(this, se, Qn).call(this), Pr = this, b = null, En(n), En(r), Pr = null, (s = u(this, Yt)) == null || s.resolve();
    }
    j = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    r !== U && !this.previous.has(t) && this.previous.set(t, r), (t.f & Ge) === 0 && (this.current.set(t, t.v), j == null || j.set(t, t.v));
  }
  activate() {
    b = this, this.apply();
  }
  deactivate() {
    b === this && (b = null, j = null);
  }
  flush() {
    if (this.activate(), G.length > 0) {
      if (ei(), b !== null && b !== this)
        return;
    } else u(this, lt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of u(this, yt)) t(this);
    u(this, yt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    m(this, lt, u(this, lt) + 1), t && m(this, $t, u(this, $t) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    m(this, lt, u(this, lt) - 1), t && m(this, $t, u(this, $t) - 1), !u(this, Et) && (m(this, Et, !0), Fe(() => {
      m(this, Et, !1), I(this, se, zr).call(this) ? G.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of u(this, Kt))
      u(this, at).delete(t), L(t, q), me(t);
    for (const t of u(this, at))
      L(t, we), me(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    u(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, yt).add(t);
  }
  settled() {
    return (u(this, Yt) ?? m(this, Yt, zn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new cn();
      tr.add(b), jt || Fe(() => {
        b === t && t.flush();
      });
    }
    return b;
  }
  apply() {
  }
};
wt = new WeakMap(), yt = new WeakMap(), lt = new WeakMap(), $t = new WeakMap(), Yt = new WeakMap(), Kt = new WeakMap(), at = new WeakMap(), Me = new WeakMap(), Et = new WeakMap(), se = new WeakSet(), zr = function() {
  return this.is_fork || u(this, $t) > 0;
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ur = function(t, r, n) {
  t.f ^= z;
  for (var s = t.first; s !== null; ) {
    var i = s.f, l = (i & (ye | Ze)) !== 0, a = l && (i & z) !== 0, f = a || (i & re) !== 0 || u(this, Me).has(s);
    if (!f && s.fn !== null) {
      l ? s.f ^= z : (i & Xt) !== 0 ? r.push(s) : Qt(s) && ((i & Ue) !== 0 && u(this, at).add(s), Mt(s));
      var o = s.first;
      if (o !== null) {
        s = o;
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
}, /**
 * @param {Effect[]} effects
 */
jr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Zn(t[r], u(this, Kt), u(this, at));
}, Qn = function() {
  var s;
  if (tr.size > 1) {
    this.previous.clear();
    var t = j, r = !0;
    for (const i of tr) {
      if (i === this) {
        r = !1;
        continue;
      }
      const l = [];
      for (const [f, o] of this.current) {
        if (i.current.has(f))
          if (r && o !== i.current.get(f))
            i.current.set(f, o);
          else
            continue;
        l.push(f);
      }
      if (l.length === 0)
        continue;
      const a = [...i.current.keys()].filter((f) => !this.current.has(f));
      if (a.length > 0) {
        var n = G;
        G = [];
        const f = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (const d of l)
          ti(d, a, f, o);
        if (G.length > 0) {
          b = i, i.apply();
          for (const d of G)
            I(s = i, se, Ur).call(s, d, [], []);
          i.deactivate();
        }
        G = n;
      }
    }
    b = null, j = t;
  }
  tr.delete(this);
};
let ze = cn;
function Bt(e) {
  var t = jt;
  jt = !0;
  try {
    for (var r; ; ) {
      if (Ts(), G.length === 0 && (b == null || b.flush(), G.length === 0))
        return br = null, /** @type {T} */
        r;
      ei();
    }
  } finally {
    jt = t;
  }
}
function ei() {
  Fr = !0;
  var e = null;
  try {
    for (var t = 0; G.length > 0; ) {
      var r = ze.ensure();
      if (t++ > 1e3) {
        var n, s;
        As();
      }
      r.process(G), We.clear();
    }
  } finally {
    G = [], Fr = !1, br = null;
  }
}
function As() {
  try {
    gs();
  } catch (e) {
    Ke(e, br);
  }
}
let _e = null;
function En(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Pe | re)) === 0 && Qt(n) && (_e = /* @__PURE__ */ new Set(), Mt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ei(n), (_e == null ? void 0 : _e.size) > 0)) {
        We.clear();
        for (const s of _e) {
          if ((s.f & (Pe | re)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            _e.has(l) && (_e.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const f = i[a];
            (f.f & (Pe | re)) === 0 && Mt(f);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function ti(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & B) !== 0 ? ti(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (tn | Ue)) !== 0 && (i & q) === 0 && ri(s, t, n) && (L(s, q), me(
        /** @type {Effect} */
        s
      ));
    }
}
function ri(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (At.call(t, s))
        return !0;
      if ((s.f & B) !== 0 && ri(
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
function me(e) {
  var t = br = e, r = t.b;
  if (r != null && r.is_pending && (e.f & (Xt | pr | Un)) !== 0 && (e.f & Je) === 0) {
    r.defer_effect(e);
    return;
  }
  for (; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Fr && t === x && (n & Ue) !== 0 && (n & jn) === 0 && (n & Je) !== 0)
      return;
    if ((n & (Ze | ye)) !== 0) {
      if ((n & z) === 0)
        return;
      t.f ^= z;
    }
  }
  G.push(t);
}
function ni(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & z) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & we) !== 0 && t.m.push(e), L(e, z);
    for (var r = e.first; r !== null; )
      ni(r, t), r = r.next;
  }
}
function Ns(e) {
  let t = 0, r = ht(0), n;
  return () => {
    an() && (g(r), $r(() => (t === 0 && (n = Er(() => e(() => qt(r)))), t += 1, () => {
      Fe(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, qt(r));
      });
    })));
  };
}
var Rs = Nt | _t;
function Cs(e, t, r, n) {
  new Ms(e, t, r, n);
}
var Q, Gt, ke, ft, K, Te, ee, pe, Oe, ot, Ve, xt, kt, Tt, De, dr, O, ii, si, li, Br, sr, lr, qr;
class Ms {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    y(this, O);
    /** @type {Boundary | null} */
    D(this, "parent");
    D(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    D(this, "transform_error");
    /** @type {TemplateNode} */
    y(this, Q);
    /** @type {TemplateNode | null} */
    y(this, Gt, A ? R : null);
    /** @type {BoundaryProps} */
    y(this, ke);
    /** @type {((anchor: Node) => void)} */
    y(this, ft);
    /** @type {Effect} */
    y(this, K);
    /** @type {Effect | null} */
    y(this, Te, null);
    /** @type {Effect | null} */
    y(this, ee, null);
    /** @type {Effect | null} */
    y(this, pe, null);
    /** @type {DocumentFragment | null} */
    y(this, Oe, null);
    y(this, ot, 0);
    y(this, Ve, 0);
    y(this, xt, !1);
    /** @type {Set<Effect>} */
    y(this, kt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    y(this, Tt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    y(this, De, null);
    y(this, dr, Ns(() => (m(this, De, ht(u(this, ot))), () => {
      m(this, De, null);
    })));
    var i;
    m(this, Q, t), m(this, ke, r), m(this, ft, (l) => {
      var a = (
        /** @type {Effect} */
        x
      );
      a.b = this, a.f |= Ir, n(l);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((l) => l), m(this, K, fn(() => {
      if (A) {
        const l = (
          /** @type {Comment} */
          u(this, Gt)
        );
        mr();
        const a = l.data === hr;
        if (l.data.startsWith(wn)) {
          const o = JSON.parse(l.data.slice(wn.length));
          I(this, O, si).call(this, o);
        } else a ? I(this, O, li).call(this) : I(this, O, ii).call(this);
      } else
        I(this, O, Br).call(this);
    }, Rs)), A && m(this, Q, R);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Zn(t, u(this, kt), u(this, Tt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, ke).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    I(this, O, qr).call(this, t), m(this, ot, u(this, ot) + t), !(!u(this, De) || u(this, xt)) && (m(this, xt, !0), Fe(() => {
      m(this, xt, !1), u(this, De) && Ct(u(this, De), u(this, ot));
    }));
  }
  get_effect_pending() {
    return u(this, dr).call(this), g(
      /** @type {Source<number>} */
      u(this, De)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, ke).onerror;
    let n = u(this, ke).failed;
    if (!r && !n)
      throw t;
    u(this, Te) && (Y(u(this, Te)), m(this, Te, null)), u(this, ee) && (Y(u(this, ee)), m(this, ee, null)), u(this, pe) && (Y(u(this, pe)), m(this, pe, null)), A && (ne(
      /** @type {TemplateNode} */
      u(this, Gt)
    ), Bn(), ne(cr()));
    var s = !1, i = !1;
    const l = () => {
      if (s) {
        Es();
        return;
      }
      s = !0, i && $s(), u(this, pe) !== null && ct(u(this, pe), () => {
        m(this, pe, null);
      }), I(this, O, lr).call(this, () => {
        ze.ensure(), I(this, O, Br).call(this);
      });
    }, a = (f) => {
      try {
        i = !0, r == null || r(f, l), i = !1;
      } catch (o) {
        Ke(o, u(this, K) && u(this, K).parent);
      }
      n && m(this, pe, I(this, O, lr).call(this, () => {
        ze.ensure();
        try {
          return fe(() => {
            var o = (
              /** @type {Effect} */
              x
            );
            o.b = this, o.f |= Ir, n(
              u(this, Q),
              () => f,
              () => l
            );
          });
        } catch (o) {
          return Ke(
            o,
            /** @type {Effect} */
            u(this, K).parent
          ), null;
        }
      }));
    };
    Fe(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (o) {
        Ke(o, u(this, K) && u(this, K).parent);
        return;
      }
      f !== null && typeof f == "object" && typeof /** @type {any} */
      f.then == "function" ? f.then(
        a,
        /** @param {unknown} e */
        (o) => Ke(o, u(this, K) && u(this, K).parent)
      ) : a(f);
    });
  }
}
Q = new WeakMap(), Gt = new WeakMap(), ke = new WeakMap(), ft = new WeakMap(), K = new WeakMap(), Te = new WeakMap(), ee = new WeakMap(), pe = new WeakMap(), Oe = new WeakMap(), ot = new WeakMap(), Ve = new WeakMap(), xt = new WeakMap(), kt = new WeakMap(), Tt = new WeakMap(), De = new WeakMap(), dr = new WeakMap(), O = new WeakSet(), ii = function() {
  try {
    m(this, Te, fe(() => u(this, ft).call(this, u(this, Q))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
si = function(t) {
  const r = u(this, ke).failed;
  r && m(this, pe, fe(() => {
    r(
      u(this, Q),
      () => t,
      () => () => {
      }
    );
  }));
}, li = function() {
  const t = u(this, ke).pending;
  t && (this.is_pending = !0, m(this, ee, fe(() => t(u(this, Q)))), Fe(() => {
    var r = m(this, Oe, document.createDocumentFragment()), n = Ae();
    r.append(n), m(this, Te, I(this, O, lr).call(this, () => (ze.ensure(), fe(() => u(this, ft).call(this, n))))), u(this, Ve) === 0 && (u(this, Q).before(r), m(this, Oe, null), ct(
      /** @type {Effect} */
      u(this, ee),
      () => {
        m(this, ee, null);
      }
    ), I(this, O, sr).call(this));
  }));
}, Br = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, Ve, 0), m(this, ot, 0), m(this, Te, fe(() => {
      u(this, ft).call(this, u(this, Q));
    })), u(this, Ve) > 0) {
      var t = m(this, Oe, document.createDocumentFragment());
      Ti(u(this, Te), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        u(this, ke).pending
      );
      m(this, ee, fe(() => r(u(this, Q))));
    } else
      I(this, O, sr).call(this);
  } catch (r) {
    this.error(r);
  }
}, sr = function() {
  this.is_pending = !1;
  for (const t of u(this, kt))
    L(t, q), me(t);
  for (const t of u(this, Tt))
    L(t, we), me(t);
  u(this, kt).clear(), u(this, Tt).clear();
}, /**
 * @template T
 * @param {() => T} fn
 */
lr = function(t) {
  var r = x, n = E, s = ie;
  Ne(u(this, K)), ce(u(this, K)), Rt(u(this, K).ctx);
  try {
    return t();
  } catch (i) {
    return Jn(i), null;
  } finally {
    Ne(r), ce(n), Rt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
qr = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && I(r = this.parent, O, qr).call(r, t);
    return;
  }
  m(this, Ve, u(this, Ve) + t), u(this, Ve) === 0 && (I(this, O, sr).call(this), u(this, ee) && ct(u(this, ee), () => {
    m(this, ee, null);
  }), u(this, Oe) && (u(this, Q).before(u(this, Oe)), m(this, Oe, null)));
};
function Os(e, t, r, n) {
  const s = wr;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var l = (
    /** @type {Effect} */
    x
  ), a = Ds(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function o(v) {
    a();
    try {
      n(v);
    } catch (h) {
      (l.f & Pe) === 0 && Ke(h, l);
    }
    Hr();
  }
  if (r.length === 0) {
    f.then(() => o(t.map(s)));
    return;
  }
  function d() {
    a(), Promise.all(r.map((v) => /* @__PURE__ */ Ls(v))).then((v) => o([...t.map(s), ...v])).catch((v) => Ke(v, l));
  }
  f ? f.then(d) : d();
}
function Ds() {
  var e = x, t = E, r = ie, n = b;
  return function(i = !0) {
    Ne(e), ce(t), Rt(r), i && (n == null || n.activate());
  };
}
function Hr(e = !0) {
  Ne(null), ce(null), Rt(null), e && (b == null || b.deactivate());
}
function Is() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    x.b
  ), t = (
    /** @type {Batch} */
    b
  ), r = e.is_rendered();
  return e.update_pending_count(1), t.increment(r), () => {
    e.update_pending_count(-1), t.decrement(r);
  };
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  var t = B | q, r = E !== null && (E.f & B) !== 0 ? (
    /** @type {Derived} */
    E
  ) : null;
  return x !== null && (x.f |= _t), {
    ctx: ie,
    deps: null,
    effects: null,
    equals: Hn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      U
    ),
    wv: 0,
    parent: r ?? x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ls(e, t, r) {
  /** @type {Effect | null} */
  x === null && ds();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ht(
    /** @type {V} */
    U
  ), l = !E, a = /* @__PURE__ */ new Map();
  return Ws(() => {
    var h;
    var f = zn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Hr);
    } catch (_) {
      f.reject(_), Hr();
    }
    var o = (
      /** @type {Batch} */
      b
    );
    if (l) {
      var d = Is();
      (h = a.get(o)) == null || h.reject(rt), a.delete(o), a.set(o, f);
    }
    const v = (_, c = void 0) => {
      if (o.activate(), c)
        c !== rt && (i.f |= Ge, Ct(i, c));
      else {
        (i.f & Ge) !== 0 && (i.f ^= Ge), Ct(i, _);
        for (const [$, w] of a) {
          if (a.delete($), $ === o) break;
          w.reject(rt);
        }
      }
      d && d();
    };
    f.promise.then(v, (_) => v(null, _ || "unknown"));
  }), bi(() => {
    for (const f of a.values())
      f.reject(rt);
  }), new Promise((f) => {
    function o(d) {
      function v() {
        d === s ? f(i) : o(s);
      }
      d.then(v, v);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ wr(e);
  return Si(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  const t = /* @__PURE__ */ wr(e);
  return t.equals = Vn, t;
}
function zs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Y(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Us(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & B) === 0)
      return (t.f & Pe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function sn(e) {
  var t, r = x;
  Ne(Us(e));
  try {
    e.f &= ~vt, zs(e), t = Ci(e);
  } finally {
    Ne(r);
  }
  return t;
}
function ai(e) {
  var t = sn(e);
  if (!e.equals(t) && (e.wv = Ni(), (!(b != null && b.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    L(e, z);
    return;
  }
  Xe || (j !== null ? (an() || b != null && b.is_fork) && j.set(e, t) : nn(e));
}
function js(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(rt), n.teardown = ss, n.ac = null, Vt(n, 0), on(n));
}
function fi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let Vr = /* @__PURE__ */ new Set();
const We = /* @__PURE__ */ new Map();
let oi = !1;
function ht(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Hn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const r = ht(e);
  return Si(r), r;
}
// @__NO_SIDE_EFFECTS__
function ui(e, t = !1, r = !0) {
  const n = ht(e);
  return t || (n.equals = Vn), n;
}
function k(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (E.f & $n) !== 0) && Gn() && (E.f & (B | Ue | tn | $n)) !== 0 && (ue === null || !At.call(ue, e)) && ys();
  let n = r ? zt(t) : t;
  return Ct(e, n);
}
function Ct(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Xe ? We.set(e, t) : We.set(e, r), e.v = t;
    var n = ze.ensure();
    if (n.capture(e, r), (e.f & B) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && sn(s), nn(s);
    }
    e.wv = Ni(), ci(e, q), x !== null && (x.f & z) !== 0 && (x.f & (ye | Ze)) === 0 && (le === null ? Zs([e]) : le.push(e)), !n.is_fork && Vr.size > 0 && !oi && Bs();
  }
  return t;
}
function Bs() {
  oi = !1;
  for (const e of Vr)
    (e.f & z) !== 0 && L(e, we), Qt(e) && Mt(e);
  Vr.clear();
}
function qt(e) {
  k(e, e.v + 1);
}
function ci(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s], l = i.f, a = (l & q) === 0;
      if (a && L(i, t), (l & B) !== 0) {
        var f = (
          /** @type {Derived} */
          i
        );
        j == null || j.delete(f), (l & vt) === 0 && (l & oe && (i.f |= vt), ci(f, we));
      } else a && ((l & Ue) !== 0 && _e !== null && _e.add(
        /** @type {Effect} */
        i
      ), me(
        /** @type {Effect} */
        i
      ));
    }
}
function zt(e) {
  if (typeof e != "object" || e === null || ir in e)
    return e;
  const t = Fn(e);
  if (t !== ns && t !== is)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Pn(e), s = /* @__PURE__ */ W(0), i = dt, l = (a) => {
    if (dt === i)
      return a();
    var f = E, o = dt;
    ce(null), Sn(i);
    var d = a();
    return ce(f), Sn(o), d;
  };
  return n && r.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && bs();
        var d = r.get(f);
        return d === void 0 ? l(() => {
          var v = /* @__PURE__ */ W(o.value);
          return r.set(f, v), v;
        }) : k(d, o.value, !0), !0;
      },
      deleteProperty(a, f) {
        var o = r.get(f);
        if (o === void 0) {
          if (f in a) {
            const d = l(() => /* @__PURE__ */ W(U));
            r.set(f, d), qt(s);
          }
        } else
          k(o, U), qt(s);
        return !0;
      },
      get(a, f, o) {
        var _;
        if (f === ir)
          return e;
        var d = r.get(f), v = f in a;
        if (d === void 0 && (!v || (_ = bt(a, f)) != null && _.writable) && (d = l(() => {
          var c = zt(v ? a[f] : U), $ = /* @__PURE__ */ W(c);
          return $;
        }), r.set(f, d)), d !== void 0) {
          var h = g(d);
          return h === U ? void 0 : h;
        }
        return Reflect.get(a, f, o);
      },
      getOwnPropertyDescriptor(a, f) {
        var o = Reflect.getOwnPropertyDescriptor(a, f);
        if (o && "value" in o) {
          var d = r.get(f);
          d && (o.value = g(d));
        } else if (o === void 0) {
          var v = r.get(f), h = v == null ? void 0 : v.v;
          if (v !== void 0 && h !== U)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(a, f) {
        var h;
        if (f === ir)
          return !0;
        var o = r.get(f), d = o !== void 0 && o.v !== U || Reflect.has(a, f);
        if (o !== void 0 || x !== null && (!d || (h = bt(a, f)) != null && h.writable)) {
          o === void 0 && (o = l(() => {
            var _ = d ? zt(a[f]) : U, c = /* @__PURE__ */ W(_);
            return c;
          }), r.set(f, o));
          var v = g(o);
          if (v === U)
            return !1;
        }
        return d;
      },
      set(a, f, o, d) {
        var V;
        var v = r.get(f), h = f in a;
        if (n && f === "length")
          for (var _ = o; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var c = r.get(_ + "");
            c !== void 0 ? k(c, U) : _ in a && (c = l(() => /* @__PURE__ */ W(U)), r.set(_ + "", c));
          }
        if (v === void 0)
          (!h || (V = bt(a, f)) != null && V.writable) && (v = l(() => /* @__PURE__ */ W(void 0)), k(v, zt(o)), r.set(f, v));
        else {
          h = v.v !== U;
          var $ = l(() => zt(o));
          k(v, $);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, f);
        if (w != null && w.set && w.set.call(d, o), !h) {
          if (n && typeof f == "string") {
            var S = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(f);
            Number.isInteger(C) && C >= S.v && k(S, C + 1);
          }
          qt(s);
        }
        return !0;
      },
      ownKeys(a) {
        g(s);
        var f = Reflect.ownKeys(a).filter((v) => {
          var h = r.get(v);
          return h === void 0 || h.v !== U;
        });
        for (var [o, d] of r)
          d.v !== U && !(o in a) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        ws();
      }
    }
  );
}
var xn, di, vi, hi;
function Yr() {
  if (xn === void 0) {
    xn = window, di = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    vi = bt(t, "firstChild").get, hi = bt(t, "nextSibling").get, yn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), yn(r) && (r.__t = void 0);
  }
}
function Ae(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return (
    /** @type {TemplateNode | null} */
    vi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return (
    /** @type {TemplateNode | null} */
    hi.call(e)
  );
}
function N(e, t) {
  if (!A)
    return /* @__PURE__ */ Ht(e);
  var r = /* @__PURE__ */ Ht(R);
  if (r === null)
    r = R.appendChild(Ae());
  else if (t && r.nodeType !== rn) {
    var n = Ae();
    return r == null || r.before(n), ne(n), n;
  }
  return t && gi(
    /** @type {Text} */
    r
  ), ne(r), r;
}
function P(e, t = 1, r = !1) {
  let n = A ? R : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ je(n);
  if (!A)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== rn) {
      var i = Ae();
      return n === null ? s == null || s.after(i) : n.before(i), ne(i), i;
    }
    gi(
      /** @type {Text} */
      n
    );
  }
  return ne(n), n;
}
function _i(e) {
  e.textContent = "";
}
function pi() {
  return !1;
}
function ln(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ln, e, void 0)
  );
}
function gi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === rn; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let kn = !1;
function mi() {
  kn || (kn = !0, document.addEventListener(
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
function yr(e) {
  var t = E, r = x;
  ce(null), Ne(null);
  try {
    return e();
  } finally {
    ce(t), Ne(r);
  }
}
function qs(e, t, r, n = r) {
  e.addEventListener(t, () => yr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), mi();
}
function Hs(e) {
  x === null && (E === null && ps(), _s()), Xe && hs();
}
function Vs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Re(e, t, r) {
  var n = x;
  n !== null && (n.f & re) !== 0 && (e |= re);
  var s = {
    ctx: ie,
    deps: null,
    nodes: null,
    f: e | q | oe,
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
  };
  if (r)
    try {
      Mt(s);
    } catch (a) {
      throw Y(s), a;
    }
  else t !== null && me(s);
  var i = s;
  if (r && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & _t) === 0 && (i = i.first, (e & Ue) !== 0 && (e & Nt) !== 0 && i !== null && (i.f |= Nt)), i !== null && (i.parent = n, n !== null && Vs(i, n), E !== null && (E.f & B) !== 0 && (e & Ze) === 0)) {
    var l = (
      /** @type {Derived} */
      E
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return s;
}
function an() {
  return E !== null && !be;
}
function bi(e) {
  const t = Re(pr, null, !1);
  return L(t, z), t.teardown = e, t;
}
function Ys(e) {
  Hs();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !E && (t & ye) !== 0 && (t & Je) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ie
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return wi(e);
}
function wi(e) {
  return Re(Xt | as, e, !1);
}
function Ks(e) {
  ze.ensure();
  const t = Re(Ze | _t, e, !0);
  return () => {
    Y(t);
  };
}
function Gs(e) {
  ze.ensure();
  const t = Re(Ze | _t, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? ct(t, () => {
      Y(t), n(void 0);
    }) : (Y(t), n(void 0));
  });
}
function yi(e) {
  return Re(Xt, e, !1);
}
function Ws(e) {
  return Re(tn | _t, e, !0);
}
function $r(e, t = 0) {
  return Re(pr | t, e, !0);
}
function mt(e, t = [], r = [], n = []) {
  Os(n, t, r, (s) => {
    Re(pr, () => e(...s.map(g)), !0);
  });
}
function fn(e, t = 0) {
  var r = Re(Ue | t, e, !0);
  return r;
}
function fe(e) {
  return Re(ye | _t, e, !0);
}
function $i(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Xe, n = E;
    Tn(!0), ce(null);
    try {
      t.call(null);
    } finally {
      Tn(r), ce(n);
    }
  }
}
function on(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && yr(() => {
      s.abort(rt);
    });
    var n = r.next;
    (r.f & Ze) !== 0 ? r.parent = null : Y(r, t), r = n;
  }
}
function Js(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && Y(t), t = r;
  }
}
function Y(e, t = !0) {
  var r = !1;
  (t || (e.f & jn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Xs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), on(e, t && !r), Vt(e, 0), L(e, Pe);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  $i(e);
  var s = e.parent;
  s !== null && s.first !== null && Ei(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Xs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ je(e);
    e.remove(), e = r;
  }
}
function Ei(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ct(e, t, r = !0) {
  var n = [];
  xi(e, n, !0);
  var s = () => {
    r && Y(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function xi(e, t, r) {
  if ((e.f & re) === 0) {
    e.f ^= re;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next, l = (s.f & Nt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & ye) !== 0 && (e.f & Ue) !== 0;
      xi(s, t, l ? r : !1), s = i;
    }
  }
}
function un(e) {
  ki(e, !0);
}
function ki(e, t) {
  if ((e.f & re) !== 0) {
    e.f ^= re, (e.f & z) === 0 && (L(e, q), me(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Nt) !== 0 || (r.f & ye) !== 0;
      ki(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function Ti(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ je(r);
      t.append(r), r = s;
    }
}
let ar = !1, Xe = !1;
function Tn(e) {
  Xe = e;
}
let E = null, be = !1;
function ce(e) {
  E = e;
}
let x = null;
function Ne(e) {
  x = e;
}
let ue = null;
function Si(e) {
  E !== null && (ue === null ? ue = [e] : ue.push(e));
}
let J = null, Z = 0, le = null;
function Zs(e) {
  le = e;
}
let Ai = 1, it = 0, dt = it;
function Sn(e) {
  dt = e;
}
function Ni() {
  return ++Ai;
}
function Qt(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & B && (e.f &= ~vt), (t & we) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Qt(
        /** @type {Derived} */
        i
      ) && ai(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & oe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    j === null && L(e, z);
  }
  return !1;
}
function Ri(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ue !== null && At.call(ue, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & B) !== 0 ? Ri(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? L(i, q) : (i.f & z) !== 0 && L(i, we), me(
        /** @type {Effect} */
        i
      ));
    }
}
function Ci(e) {
  var $;
  var t = J, r = Z, n = le, s = E, i = ue, l = ie, a = be, f = dt, o = e.f;
  J = /** @type {null | Value[]} */
  null, Z = 0, le = null, E = (o & (ye | Ze)) === 0 ? e : null, ue = null, Rt(e.ctx), be = !1, dt = ++it, e.ac !== null && (yr(() => {
    e.ac.abort(rt);
  }), e.ac = null);
  try {
    e.f |= Lr;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d();
    e.f |= Je;
    var h = e.deps, _ = b == null ? void 0 : b.is_fork;
    if (J !== null) {
      var c;
      if (_ || Vt(e, Z), h !== null && Z > 0)
        for (h.length = Z + J.length, c = 0; c < J.length; c++)
          h[Z + c] = J[c];
      else
        e.deps = h = J;
      if (an() && (e.f & oe) !== 0)
        for (c = Z; c < h.length; c++)
          (($ = h[c]).reactions ?? ($.reactions = [])).push(e);
    } else !_ && h !== null && Z < h.length && (Vt(e, Z), h.length = Z);
    if (Gn() && le !== null && !be && h !== null && (e.f & (B | we | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      le.length; c++)
        Ri(
          le[c],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (it++, s.deps !== null)
        for (let w = 0; w < r; w += 1)
          s.deps[w].rv = it;
      if (t !== null)
        for (const w of t)
          w.rv = it;
      le !== null && (n === null ? n = le : n.push(.../** @type {Source[]} */
      le));
    }
    return (e.f & Ge) !== 0 && (e.f ^= Ge), v;
  } catch (w) {
    return Jn(w);
  } finally {
    e.f ^= Lr, J = t, Z = r, le = n, E = s, ue = i, Rt(l), be = a, dt = f;
  }
}
function Qs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ts.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & B) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !At.call(J, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & oe) !== 0 && (i.f ^= oe, i.f &= ~vt), nn(i), js(i), Vt(i, 0);
  }
}
function Vt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Qs(e, r[n]);
}
function Mt(e) {
  var t = e.f;
  if ((t & Pe) === 0) {
    L(e, z);
    var r = x, n = ar;
    x = e, ar = !0;
    try {
      (t & (Ue | Un)) !== 0 ? Js(e) : on(e), $i(e);
      var s = Ci(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ai;
      var i;
      Dr && ks && (e.f & q) !== 0 && e.deps;
    } finally {
      ar = n, x = r;
    }
  }
}
async function el() {
  await Promise.resolve(), Bt();
}
function g(e) {
  var t = e.f, r = (t & B) !== 0;
  if (E !== null && !be) {
    var n = x !== null && (x.f & Pe) !== 0;
    if (!n && (ue === null || !At.call(ue, e))) {
      var s = E.deps;
      if ((E.f & Lr) !== 0)
        e.rv < it && (e.rv = it, J === null && s !== null && s[Z] === e ? Z++ : J === null ? J = [e] : J.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [E] : At.call(i, E) || i.push(E);
      }
    }
  }
  if (Xe && We.has(e))
    return We.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Xe) {
      var a = l.v;
      return ((l.f & z) === 0 && l.reactions !== null || Oi(l)) && (a = sn(l)), We.set(l, a), a;
    }
    var f = (l.f & oe) === 0 && !be && E !== null && (ar || (E.f & oe) !== 0), o = (l.f & Je) === 0;
    Qt(l) && (f && (l.f |= oe), ai(l)), f && !o && (fi(l), Mi(l));
  }
  if (j != null && j.has(e))
    return j.get(e);
  if ((e.f & Ge) !== 0)
    throw e.v;
  return e.v;
}
function Mi(e) {
  if (e.f |= oe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & B) !== 0 && (t.f & oe) === 0 && (fi(
        /** @type {Derived} */
        t
      ), Mi(
        /** @type {Derived} */
        t
      ));
}
function Oi(e) {
  if (e.v === U) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (We.has(t) || (t.f & B) !== 0 && Oi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Er(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const st = Symbol("events"), Di = /* @__PURE__ */ new Set(), Kr = /* @__PURE__ */ new Set();
function tl(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || Gr.call(t, i), !i.cancelBubble)
      return yr(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function rl(e, t, r, n, s) {
  var i = { capture: n, passive: s }, l = tl(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && bi(() => {
    t.removeEventListener(e, l, i);
  });
}
function nl(e, t, r) {
  (t[st] ?? (t[st] = {}))[e] = r;
}
function il(e) {
  for (var t = 0; t < e.length; t++)
    Di.add(e[t]);
  for (var r of Kr)
    r(e);
}
let An = null;
function Gr(e) {
  var w, S;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  An = e;
  var l = 0, a = An === e && e[st];
  if (a) {
    var f = s.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[st] = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    f <= o && (l = f);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    ur(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = E, v = x;
    ce(null), Ne(null);
    try {
      for (var h, _ = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = (S = i[st]) == null ? void 0 : S[n];
          $ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && $.call(i, e);
        } catch (C) {
          h ? _.push(C) : h = C;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (h) {
        for (let C of _)
          queueMicrotask(() => {
            throw C;
          });
        throw h;
      }
    } finally {
      e[st] = t, delete e.currentTarget, ce(d), Ne(v);
    }
  }
}
var In;
const Rr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((In = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : In.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function sl(e) {
  return (
    /** @type {string} */
    (Rr == null ? void 0 : Rr.createHTML(e)) ?? e
  );
}
function ll(e) {
  var t = ln("template");
  return t.innerHTML = sl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Wr(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  var r = (t & es) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (A)
      return Wr(R, null), R;
    n === void 0 && (n = ll(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(n));
    var i = (
      /** @type {TemplateNode} */
      r || di ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Wr(i, i), i;
  };
}
function xe(e, t) {
  if (A) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      x
    );
    ((r.f & Je) === 0 || r.nodes.end === null) && (r.nodes.end = R), mr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const al = ["touchstart", "touchmove"];
function fl(e) {
  return al.includes(e);
}
function he(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Ii(e, t) {
  return Li(e, t);
}
function ol(e, t) {
  Yr(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, s = R;
  try {
    for (var i = /* @__PURE__ */ Ht(r); i && (i.nodeType !== Zt || /** @type {Comment} */
    i.data !== Qr); )
      i = /* @__PURE__ */ je(i);
    if (!i)
      throw St;
    Le(!0), ne(
      /** @type {Comment} */
      i
    );
    const l = Li(e, { ...t, anchor: i });
    return Le(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== St && console.warn("Failed to hydrate: ", l), t.recover === !1 && ms(), Yr(), _i(r), Le(!1), Ii(e, t);
  } finally {
    Le(n), ne(s);
  }
}
const rr = /* @__PURE__ */ new Map();
function Li(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  Yr();
  var f = void 0, o = Gs(() => {
    var d = r ?? t.appendChild(Ae());
    Cs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (_) => {
        Yn({});
        var c = (
          /** @type {ComponentContext} */
          ie
        );
        if (i && (c.c = i), s && (n.$$events = s), A && Wr(
          /** @type {TemplateNode} */
          _,
          null
        ), f = e(_, n) || {}, A && (x.nodes.end = R, R === null || R.nodeType !== Zt || /** @type {Comment} */
        R.data !== en))
          throw gr(), St;
        Kn();
      },
      a
    );
    var v = /* @__PURE__ */ new Set(), h = (_) => {
      for (var c = 0; c < _.length; c++) {
        var $ = _[c];
        if (!v.has($)) {
          v.add($);
          var w = fl($);
          for (const V of [t, document]) {
            var S = rr.get(V);
            S === void 0 && (S = /* @__PURE__ */ new Map(), rr.set(V, S));
            var C = S.get($);
            C === void 0 ? (V.addEventListener($, Gr, { passive: w }), S.set($, 1)) : S.set($, C + 1);
          }
        }
      }
    };
    return h(_r(Di)), Kr.add(h), () => {
      var w;
      for (var _ of v)
        for (const S of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            rr.get(S)
          ), $ = (
            /** @type {number} */
            c.get(_)
          );
          --$ == 0 ? (S.removeEventListener(_, Gr), c.delete(_), c.size === 0 && rr.delete(S)) : c.set(_, $);
        }
      Kr.delete(h), d !== r && ((w = d.parentNode) == null || w.removeChild(d));
    };
  });
  return Jr.set(f, o), f;
}
let Jr = /* @__PURE__ */ new WeakMap();
function ul(e, t) {
  const r = Jr.get(e);
  return r ? (Jr.delete(e), r(t)) : Promise.resolve();
}
var ge, Se, te, ut, Wt, Jt, vr;
class cl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    D(this, "anchor");
    /** @type {Map<Batch, Key>} */
    y(this, ge, /* @__PURE__ */ new Map());
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
    y(this, Se, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    y(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    y(this, ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    y(this, Wt, !0);
    y(this, Jt, () => {
      var t = (
        /** @type {Batch} */
        b
      );
      if (u(this, ge).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, ge).get(t)
        ), n = u(this, Se).get(r);
        if (n)
          un(n), u(this, ut).delete(r);
        else {
          var s = u(this, te).get(r);
          s && (u(this, Se).set(r, s.effect), u(this, te).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, l] of u(this, ge)) {
          if (u(this, ge).delete(i), i === t)
            break;
          const a = u(this, te).get(l);
          a && (Y(a.effect), u(this, te).delete(l));
        }
        for (const [i, l] of u(this, Se)) {
          if (i === r || u(this, ut).has(i)) continue;
          const a = () => {
            if (Array.from(u(this, ge).values()).includes(i)) {
              var o = document.createDocumentFragment();
              Ti(l, o), o.append(Ae()), u(this, te).set(i, { effect: l, fragment: o });
            } else
              Y(l);
            u(this, ut).delete(i), u(this, Se).delete(i);
          };
          u(this, Wt) || !n ? (u(this, ut).add(i), ct(l, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    y(this, vr, (t) => {
      u(this, ge).delete(t);
      const r = Array.from(u(this, ge).values());
      for (const [n, s] of u(this, te))
        r.includes(n) || (Y(s.effect), u(this, te).delete(n));
    });
    this.anchor = t, m(this, Wt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), s = pi();
    if (r && !u(this, Se).has(t) && !u(this, te).has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = Ae();
        i.append(l), u(this, te).set(t, {
          effect: fe(() => r(l)),
          fragment: i
        });
      } else
        u(this, Se).set(
          t,
          fe(() => r(this.anchor))
        );
    if (u(this, ge).set(n, t), s) {
      for (const [a, f] of u(this, Se))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of u(this, te))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(u(this, Jt)), n.ondiscard(u(this, vr));
    } else
      A && (this.anchor = R), u(this, Jt).call(this);
  }
}
ge = new WeakMap(), Se = new WeakMap(), te = new WeakMap(), ut = new WeakMap(), Wt = new WeakMap(), Jt = new WeakMap(), vr = new WeakMap();
function dl(e) {
  ie === null && cs(), Ys(() => {
    const t = Er(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nr(e, t, r = !1) {
  A && mr();
  var n = new cl(e), s = r ? Nt : 0;
  function i(l, a) {
    if (A) {
      const d = qn(e);
      var f;
      if (d === Qr ? f = 0 : d === hr ? f = !1 : f = parseInt(d.substring(1)), l !== f) {
        var o = cr();
        ne(o), n.anchor = o, Le(!1), n.ensure(l, a), Le(!0);
        return;
      }
    }
    n.ensure(l, a);
  }
  fn(() => {
    var l = !1;
    t((a, f = 0) => {
      l = !0, i(f, a);
    }), l || i(!1, null);
  }, s);
}
function vl(e, t, r) {
  for (var n = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let v = t[a];
    ct(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Xr(_r(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var o = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        o.parentNode
      );
      _i(d), d.append(o), e.items.clear();
    }
    Xr(t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Xr(e, t = !0) {
  for (var r = 0; r < e.length; r++)
    Y(e[r], t);
}
var Nn;
function Rn(e, t, r, n, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    l = A ? ne(/* @__PURE__ */ Ht(f)) : f.appendChild(Ae());
  }
  A && mr();
  var o = null, d = /* @__PURE__ */ Fs(() => {
    var w = r();
    return Pn(w) ? w : w == null ? [] : _r(w);
  }), v, h = !0;
  function _() {
    $.fallback = o, hl($, v, l, t, n), o !== null && (v.length === 0 ? (o.f & Ye) === 0 ? un(o) : (o.f ^= Ye, Ut(o, null, l)) : ct(o, () => {
      o = null;
    }));
  }
  var c = fn(() => {
    v = /** @type {V[]} */
    g(d);
    var w = v.length;
    let S = !1;
    if (A) {
      var C = qn(l) === hr;
      C !== (w === 0) && (l = cr(), ne(l), Le(!1), S = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), $e = (
      /** @type {Batch} */
      b
    ), de = pi(), Ee = 0; Ee < w; Ee += 1) {
      A && R.nodeType === Zt && /** @type {Comment} */
      R.data === en && (l = /** @type {Comment} */
      R, S = !0, Le(!1));
      var Qe = v[Ee], Ce = n(Qe, Ee), F = h ? null : a.get(Ce);
      F ? (F.v && Ct(F.v, Qe), F.i && Ct(F.i, Ee), de && $e.unskip_effect(F.e)) : (F = _l(
        a,
        h ? l : Nn ?? (Nn = Ae()),
        Qe,
        Ce,
        Ee,
        s,
        t,
        r
      ), h || (F.e.f |= Ye), a.set(Ce, F)), V.add(Ce);
    }
    if (w === 0 && i && !o && (h ? o = fe(() => i(l)) : (o = fe(() => i(Nn ?? (Nn = Ae()))), o.f |= Ye)), w > V.size && vs(), A && w > 0 && ne(cr()), !h)
      if (de) {
        for (const [p, M] of a)
          V.has(p) || $e.skip_effect(M.e);
        $e.oncommit(_), $e.ondiscard(() => {
        });
      } else
        _();
    S && Le(!0), g(d);
  }), $ = { effect: c, items: a, outrogroups: null, fallback: o };
  h = !1, A && (l = R);
}
function Ft(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function hl(e, t, r, n, s) {
  var Ce;
  var i = t.length, l = e.items, a = Ft(e.effect.first), f, o = null, d = [], v = [], h, _, c, $;
  for ($ = 0; $ < i; $ += 1) {
    if (h = t[$], _ = s(h, $), c = /** @type {EachItem} */
    l.get(_).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(c), F.done.delete(c);
    if ((c.f & Ye) !== 0)
      if (c.f ^= Ye, c === a)
        Ut(c, null, r);
      else {
        var w = o ? o.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), He(e, o, c), He(e, c, w), Ut(c, w, r), o = c, d = [], v = [], a = Ft(o.next);
        continue;
      }
    if ((c.f & re) !== 0 && un(c), c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (d.length < v.length) {
          var S = v[0], C;
          o = S.prev;
          var V = d[0], $e = d[d.length - 1];
          for (C = 0; C < d.length; C += 1)
            Ut(d[C], S, r);
          for (C = 0; C < v.length; C += 1)
            f.delete(v[C]);
          He(e, V.prev, $e.next), He(e, o, V), He(e, $e, S), a = S, o = $e, $ -= 1, d = [], v = [];
        } else
          f.delete(c), Ut(c, a, r), He(e, c.prev, c.next), He(e, c, o === null ? e.effect.first : o.next), He(e, o, c), o = c;
        continue;
      }
      for (d = [], v = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), v.push(a), a = Ft(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ye) === 0 && d.push(c), o = c, a = Ft(c.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (Xr(_r(F.done)), (Ce = e.outrogroups) == null || Ce.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var de = [];
    if (f !== void 0)
      for (c of f)
        (c.f & re) === 0 && de.push(c);
    for (; a !== null; )
      (a.f & re) === 0 && a !== e.fallback && de.push(a), a = Ft(a.next);
    var Ee = de.length;
    if (Ee > 0) {
      var Qe = i === 0 ? r : null;
      vl(e, de, Qe);
    }
  }
}
function _l(e, t, r, n, s, i, l, a) {
  var f = (l & Xi) !== 0 ? (l & Qi) === 0 ? /* @__PURE__ */ ui(r, !1, !1) : ht(r) : null, o = (l & Zi) !== 0 ? ht(s) : null;
  return {
    v: f,
    i: o,
    e: fe(() => (i(t, f ?? r, o ?? s, a), () => {
      e.delete(n);
    }))
  };
}
function Ut(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ je(n)
      );
      if (i.before(n), n === s)
        return;
      n = l;
    }
}
function He(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function pl(e, t) {
  yi(() => {
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
      const s = ln("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const gl = Symbol("is custom element"), ml = Symbol("is html"), bl = us ? "link" : "LINK";
function wl(e) {
  if (A) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Zr(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          Zr(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, Fe(r), mi();
  }
}
function Zr(e, t, r, n) {
  var s = yl(e);
  A && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === bl) || s[t] !== (s[t] = r) && (t === "loading" && (e[os] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && $l(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [gl]: e.nodeName.includes("-"),
      [ml]: e.namespaceURI === Ln
    })
  );
}
var Cn = /* @__PURE__ */ new Map();
function $l(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Cn.get(t);
  if (r) return r;
  Cn.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = rs(s);
    for (var l in n)
      n[l].set && r.push(l);
    s = Fn(s);
  }
  return r;
}
function El(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  qs(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Cr(e) ? Mr(i) : i, r(i), b !== null && n.add(b), await el(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var o = e.value.length;
        l === a && a === f && o > f ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = l, e.selectionEnd = Math.min(a, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Er(t) == null && e.value) && (r(Cr(e) ? Mr(e.value) : e.value), b !== null && n.add(b)), $r(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Pr ?? b
      );
      if (n.has(i))
        return;
    }
    Cr(e) && s === Mr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Cr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Mr(e) {
  return e === "" ? null : +e;
}
function Mn(e, t) {
  return e === t || (e == null ? void 0 : e[ir]) === t;
}
function xl(e = {}, t, r, n) {
  return yi(() => {
    var s, i;
    return $r(() => {
      s = i, i = [], Er(() => {
        e !== r(...i) && (t(e, ...i), s && Mn(r(...s), e) && t(null, ...s));
      });
    }), () => {
      Fe(() => {
        i && Mn(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Or(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, l = () => (i && (i = !1, s = /** @type {V} */
  n), s), a;
  a = /** @type {V} */
  e[t], a === void 0 && n !== void 0 && (a = l());
  var f;
  f = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? l() : (i = !0, h);
  };
  var o = !1, d = /* @__PURE__ */ wr(() => (o = !1, f())), v = (
    /** @type {Effect} */
    x
  );
  return (
    /** @type {() => V} */
    (function(h, _) {
      if (arguments.length > 0) {
        const c = _ ? g(d) : h;
        return k(d, c), o = !0, s !== void 0 && (s = c), h;
      }
      return Xe && o || (v.f & Pe) !== 0 ? d.v : g(d);
    })
  );
}
function kl(e) {
  return new Tl(e);
}
var Ie, ae;
class Tl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    y(this, Ie);
    /** @type {Record<string, any>} */
    y(this, ae);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (l, a) => {
      var f = /* @__PURE__ */ ui(a, !1, !1);
      return r.set(l, f), f;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, a) {
          return g(r.get(a) ?? n(a, Reflect.get(l, a)));
        },
        has(l, a) {
          return a === fs ? !0 : (g(r.get(a) ?? n(a, Reflect.get(l, a))), Reflect.has(l, a));
        },
        set(l, a, f) {
          return k(r.get(a) ?? n(a, f), f), Reflect.set(l, a, f);
        }
      }
    );
    m(this, ae, (t.hydrate ? ol : Ii)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && Bt(), m(this, Ie, s.$$events);
    for (const l of Object.keys(u(this, ae)))
      l === "$set" || l === "$destroy" || l === "$on" || ur(this, l, {
        get() {
          return u(this, ae)[l];
        },
        /** @param {any} value */
        set(a) {
          u(this, ae)[l] = a;
        },
        enumerable: !0
      });
    u(this, ae).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, u(this, ae).$destroy = () => {
      ul(u(this, ae));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    u(this, ae).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    u(this, Ie)[t] = u(this, Ie)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return u(this, Ie)[t].push(n), () => {
      u(this, Ie)[t] = u(this, Ie)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    u(this, ae).$destroy();
  }
}
Ie = new WeakMap(), ae = new WeakMap();
let Pi;
typeof HTMLElement == "function" && (Pi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    D(this, "$$ctor");
    /** Slots */
    D(this, "$$s");
    /** @type {any} The Svelte component instance */
    D(this, "$$c");
    /** Whether or not the custom element is connected */
    D(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    D(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    D(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    D(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    D(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    D(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    D(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    D(this, "$$shadowRoot", null);
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
          const a = ln("slot");
          i !== "default" && (a.name = i), xe(l, a);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Sl(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = r(i), n.default = !0) : n[i] = r(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = fr(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = kl({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ks(() => {
        $r(() => {
          var i;
          this.$$r = !0;
          for (const l of or(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = fr(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = fr(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return or(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function fr(e, t, r, n) {
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
function Sl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Al(e, t, r, n, s, i) {
  let l = class extends Pi {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return or(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return or(t).forEach((a) => {
    ur(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var v;
        f = fr(a, f, t), this.$$d[a] = f;
        var o = this.$$c;
        if (o) {
          var d = (v = bt(o, a)) == null ? void 0 : v.get;
          d ? o[a] = f : o.$set({ [a]: f });
        }
      }
    });
  }), n.forEach((a) => {
    ur(l.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var Nl = /* @__PURE__ */ Be('<div class="spinner svelte-1rfg02"><div class="bounce1 svelte-1rfg02"></div> <div class="bounce2 svelte-1rfg02"></div> <div class="bounce3 svelte-1rfg02"></div></div>'), Rl = /* @__PURE__ */ Be('<span class="tag svelte-1rfg02"> </span>'), Cl = /* @__PURE__ */ Be('<span class="tag accent svelte-1rfg02"> </span>'), Ml = /* @__PURE__ */ Be('<div class="detail-item full-width svelte-1rfg02"><div class="detail-label svelte-1rfg02">Available Display Modes</div> <div class="tags svelte-1rfg02"></div></div>'), Ol = /* @__PURE__ */ Be('<a class="btn btn-primary svelte-1rfg02">Open Admin</a>'), Dl = /* @__PURE__ */ Be('<div class="profile-card svelte-1rfg02"><div class="profile-header svelte-1rfg02"><div class="avatar svelte-1rfg02"> </div> <div class="user-info svelte-1rfg02"><h2 class="svelte-1rfg02"> </h2> <span class="badge svelte-1rfg02"> </span></div></div> <div class="details-grid svelte-1rfg02"><div class="detail-item svelte-1rfg02"><div class="detail-label svelte-1rfg02">Account</div> <span class="svelte-1rfg02"> </span></div> <div class="detail-item svelte-1rfg02"><div class="detail-label svelte-1rfg02">Actual Role</div> <span class="svelte-1rfg02"> </span></div> <div class="detail-item svelte-1rfg02"><div class="detail-label svelte-1rfg02">Display Mode</div> <span class="svelte-1rfg02"> </span></div> <div class="detail-item svelte-1rfg02"><div class="detail-label svelte-1rfg02">UID / GID</div> <span class="svelte-1rfg02"> </span></div> <div class="detail-item full-width svelte-1rfg02"><div class="detail-label svelte-1rfg02">Entitlements</div> <div class="tags svelte-1rfg02"></div></div> <!></div> <div class="actions svelte-1rfg02"><button class="btn btn-outline svelte-1rfg02" type="button">Logout</button> <!></div></div>'), Il = /* @__PURE__ */ Be('<div class="alert error svelte-1rfg02"> </div>'), Ll = /* @__PURE__ */ Be('<div class="login-card svelte-1rfg02"><div class="eyebrow svelte-1rfg02">EFSDB Access</div> <h2 class="svelte-1rfg02">Sign in with a provisioned login key.</h2> <p class="subtitle svelte-1rfg02">Use a tenant-admin or member login key created through bootstrap or the operator CLI. Public magic keys are disabled.</p> <!> <form class="svelte-1rfg02"><div class="form-group svelte-1rfg02"><label for="key" class="svelte-1rfg02">Login Key</label> <input type="password" id="key" placeholder="Paste tenant login key" required="" class="svelte-1rfg02"/></div> <button type="submit" class="btn btn-primary full-width svelte-1rfg02"> </button></form> <div class="hint svelte-1rfg02">Development may emit the initial tenant-admin key once in the server console. Production requires injected bootstrap material.</div></div>'), Pl = /* @__PURE__ */ Be('<div class="login-shell svelte-1rfg02"><!></div>');
const Fl = {
  hash: "svelte-1rfg02",
  code: `:host {display:block;font-family:'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;color:var(--text, #eef4df);--primary: #c6ff00;--primary-hover: #d6ff49;--primary-text: #10200d;--danger: #ff7b8b;--success: #bde270;--bg-card: rgba(21, 31, 19, 0.92);--bg-input: rgba(14, 22, 13, 0.94);--border: rgba(198, 255, 0, 0.18);--border-strong: rgba(198, 255, 0, 0.35);--muted: #a2b392;--shadow: 0 18px 40px rgba(0, 0, 0, 0.28);}:host([theme='light']) {color:var(--text, #24311b);--primary: #c6ff00;--primary-hover: #d4ff45;--primary-text: #13210f;--danger: #b44a5a;--success: #6d8f27;--bg-card: rgba(255, 255, 255, 0.9);--bg-input: rgba(245, 248, 238, 0.96);--border: rgba(116, 145, 45, 0.18);--border-strong: rgba(116, 145, 45, 0.35);--muted: #5f7050;--shadow: 0 18px 40px rgba(34, 48, 22, 0.12);}.login-shell.svelte-1rfg02 {display:flex;justify-content:center;align-items:center;min-height:320px;width:100%;}.login-card.svelte-1rfg02,
  .profile-card.svelte-1rfg02 {background:var(--bg-card);border:1px solid var(--border);border-radius:24px;padding:1.6rem;width:min(100%, 500px);box-shadow:var(--shadow);backdrop-filter:blur(16px);}.eyebrow.svelte-1rfg02 {color:var(--primary);font-size:0.78rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:0.8rem;}h2.svelte-1rfg02 {margin:0;font-size:clamp(1.35rem, 2.1vw, 1.85rem);line-height:1.12;font-weight:800;}.subtitle.svelte-1rfg02 {color:var(--muted);font-size:0.9rem;margin:0.9rem 0 1.3rem 0;line-height:1.55;}.form-group.svelte-1rfg02 {margin-bottom:1.2rem;}label.svelte-1rfg02 {display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.55rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;}input.svelte-1rfg02 {width:100%;background:var(--bg-input);border:1px solid var(--border);border-radius:16px;padding:0.88rem 1rem;color:inherit;font-size:0.96rem;box-sizing:border-box;transition:border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;}input.svelte-1rfg02:focus {outline:none;border-color:var(--border-strong);box-shadow:0 0 0 4px rgba(198, 255, 0, 0.12);transform:translateY(-1px);}.btn.svelte-1rfg02 {display:inline-flex;justify-content:center;align-items:center;padding:0.82rem 1.1rem;border-radius:16px;font-weight:700;font-size:0.86rem;cursor:pointer;transition:transform 0.2s,
      background 0.2s,
      border-color 0.2s;border:1px solid transparent;text-decoration:none;}.btn.svelte-1rfg02:hover:not(:disabled) {transform:translateY(-1px);}.btn-primary.svelte-1rfg02 {background:var(--primary);color:var(--primary-text);}.btn-primary.svelte-1rfg02:hover:not(:disabled) {background:var(--primary-hover);}.btn-primary.svelte-1rfg02:disabled {opacity:0.65;cursor:not-allowed;}.btn-outline.svelte-1rfg02 {background:transparent;border-color:var(--border);color:var(--muted);}.btn-outline.svelte-1rfg02:hover {border-color:var(--border-strong);color:var(--text, #eef4df);}.full-width.svelte-1rfg02 {width:100%;}.alert.svelte-1rfg02 {padding:0.85rem 1rem;border-radius:16px;font-size:0.9rem;margin-bottom:1rem;}.error.svelte-1rfg02 {background:rgba(255, 123, 139, 0.12);border:1px solid rgba(255, 123, 139, 0.3);color:var(--danger);}.profile-header.svelte-1rfg02 {display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem;padding-bottom:1.2rem;border-bottom:1px solid var(--border);}.avatar.svelte-1rfg02 {width:3.25rem;height:3.25rem;background:linear-gradient(135deg, var(--primary), #85c84c);color:var(--primary-text);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.3rem;}.user-info.svelte-1rfg02 {min-width:0;}.user-info.svelte-1rfg02 h2:where(.svelte-1rfg02) {font-size:1.35rem;margin-bottom:0.4rem;word-break:break-word;}.badge.svelte-1rfg02 {display:inline-block;padding:0.3rem 0.7rem;border-radius:999px;font-size:0.73rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;background:rgba(198, 255, 0, 0.16);color:var(--primary);}.details-grid.svelte-1rfg02 {display:grid;grid-template-columns:1fr 1fr;gap:0.85rem;margin-bottom:1.2rem;}.detail-item.svelte-1rfg02 {display:flex;flex-direction:column;gap:0.35rem;}.detail-item.full-width.svelte-1rfg02 {grid-column:1 / -1;}.detail-item.svelte-1rfg02 .detail-label:where(.svelte-1rfg02) {margin:0;font-size:0.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:600;}.detail-item.svelte-1rfg02 span:where(.svelte-1rfg02) {font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;font-size:0.9rem;word-break:break-word;}.tags.svelte-1rfg02 {display:flex;flex-wrap:wrap;gap:0.5rem;}.tag.svelte-1rfg02 {background:rgba(14, 22, 13, 0.9);border:1px solid var(--border);padding:0.3rem 0.55rem;border-radius:999px;font-size:0.74rem;font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;}.tag.accent.svelte-1rfg02 {border-color:rgba(198, 255, 0, 0.35);color:var(--primary);}.actions.svelte-1rfg02 {display:flex;justify-content:space-between;gap:1rem;margin-top:1rem;}.hint.svelte-1rfg02 {margin-top:1.35rem;color:var(--muted);font-size:0.79rem;line-height:1.55;}.spinner.svelte-1rfg02 {margin:20px auto 0;width:70px;text-align:center;}.spinner.svelte-1rfg02 > div:where(.svelte-1rfg02) {width:12px;height:12px;background-color:var(--muted);border-radius:100%;display:inline-block;
    animation: svelte-1rfg02-sk-bouncedelay 1.4s infinite ease-in-out both;}.spinner.svelte-1rfg02 .bounce1:where(.svelte-1rfg02) {animation-delay:-0.32s;}.spinner.svelte-1rfg02 .bounce2:where(.svelte-1rfg02) {animation-delay:-0.16s;}

  @keyframes svelte-1rfg02-sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }

  @media (max-width: 640px) {.login-card.svelte-1rfg02,
    .profile-card.svelte-1rfg02 {padding:1.2rem;border-radius:20px;}.details-grid.svelte-1rfg02 {grid-template-columns:1fr;}.detail-item.full-width.svelte-1rfg02 {grid-column:auto;}.actions.svelte-1rfg02 {flex-direction:column;}
  }`
};
function zl(e, t) {
  Yn(t, !0), pl(e, Fl);
  let r = Or(t, "apiBase", 7, "/api/auth"), n = Or(t, "redirectUrl", 7, "?action=admin"), s = Or(t, "homeUrl", 7, "?");
  const i = t.$$host;
  let l = /* @__PURE__ */ W(null), a = /* @__PURE__ */ W(!0), f = /* @__PURE__ */ W(""), o = /* @__PURE__ */ W(""), d = /* @__PURE__ */ W(null), v = /* @__PURE__ */ W(null);
  function h(p) {
    return `${r().replace(/\/$/, "")}/${p.replace(/^\//, "")}`;
  }
  function _(p) {
    k(d, p, !0);
    const M = window.setAccessToken;
    typeof M == "function" && M(p);
  }
  function c(p) {
    i.dispatchEvent(new CustomEvent("authchange", {
      detail: { state: p, accessToken: g(d), user: g(l) },
      bubbles: !0,
      composed: !0
    }));
  }
  async function $(p) {
    if (!(p.headers.get("content-type") || "").includes("application/json"))
      return {};
    const H = await p.json();
    return typeof H == "object" && H !== null ? H : {};
  }
  async function w() {
    const p = await fetch(h("refresh"), { method: "POST", credentials: "same-origin" });
    if (!p.ok)
      return _(null), k(l, null), c("logged_out"), !1;
    const M = await $(p);
    return k(l, M.user ?? null, !0), _(typeof M.accessToken == "string" ? M.accessToken : null), g(l) && g(d) ? (c("authenticated"), !0) : (c("logged_out"), !1);
  }
  async function S() {
    k(a, !0), k(f, "");
    try {
      await w();
    } catch (p) {
      console.error(p), _(null), k(l, null), c("logged_out");
    } finally {
      k(a, !1), g(l) || requestAnimationFrame(() => {
        var p;
        return (p = g(v)) == null ? void 0 : p.focus();
      });
    }
  }
  async function C() {
    var p;
    k(a, !0), k(f, "");
    try {
      const M = await fetch(h("login"), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: g(o) })
      }), H = await $(M);
      if (!M.ok || typeof H.accessToken != "string" || !H.user) {
        k(f, ((p = H.error) == null ? void 0 : p.message) || "Login failed", !0), k(a, !1);
        return;
      }
      if (k(l, H.user, !0), _(H.accessToken), c("authenticated"), n().trim() !== "") {
        window.location.assign(n());
        return;
      }
    } catch (M) {
      console.error(M), k(f, "Network error");
    }
    k(a, !1);
  }
  async function V() {
    k(a, !0), k(f, "");
    try {
      await fetch(h("logout"), { method: "POST", credentials: "same-origin" });
    } catch (p) {
      console.error(p);
    } finally {
      _(null), k(l, null), k(o, ""), c("logged_out"), k(a, !1), requestAnimationFrame(() => {
        var p;
        return (p = g(v)) == null ? void 0 : p.focus();
      }), s().trim() !== "" && window.location.assign(s());
    }
  }
  dl(() => {
    S();
  });
  var $e = {
    get apiBase() {
      return r();
    },
    set apiBase(p = "/api/auth") {
      r(p), Bt();
    },
    get redirectUrl() {
      return n();
    },
    set redirectUrl(p = "?action=admin") {
      n(p), Bt();
    },
    get homeUrl() {
      return s();
    },
    set homeUrl(p = "?") {
      s(p), Bt();
    }
  }, de = Pl(), Ee = N(de);
  {
    var Qe = (p) => {
      var M = Nl();
      xe(p, M);
    }, Ce = (p) => {
      var M = Dl(), H = N(M), Ot = N(H), Dt = N(Ot, !0);
      T(Ot);
      var pt = P(Ot, 2), et = N(pt), It = N(et, !0);
      T(et);
      var er = P(et, 2), ve = N(er, !0);
      T(er), T(pt), T(H);
      var tt = P(H, 2), Lt = N(tt), dn = P(N(Lt), 2), Fi = N(dn, !0);
      T(dn), T(Lt);
      var xr = P(Lt, 2), vn = P(N(xr), 2), zi = N(vn, !0);
      T(vn), T(xr);
      var kr = P(xr, 2), hn = P(N(kr), 2), Ui = N(hn, !0);
      T(hn), T(kr);
      var Tr = P(kr, 2), _n = P(N(Tr), 2), ji = N(_n);
      T(_n), T(Tr);
      var Sr = P(Tr, 2), pn = P(N(Sr), 2);
      Rn(pn, 20, () => g(l).entitlements || [], (X) => X, (X, qe) => {
        var gt = Rl(), Pt = N(gt, !0);
        T(gt), mt(() => he(Pt, qe)), xe(X, gt);
      }), T(pn), T(Sr);
      var Bi = P(Sr, 2);
      {
        var qi = (X) => {
          var qe = Ml(), gt = P(N(qe), 2);
          Rn(gt, 20, () => g(l).availableDisplayModes || [], (Pt) => Pt, (Pt, Ki) => {
            var Ar = Cl(), Gi = N(Ar, !0);
            T(Ar), mt(() => he(Gi, Ki)), xe(Pt, Ar);
          }), T(gt), T(qe), xe(X, qe);
        };
        nr(Bi, (X) => {
          (g(l).availableDisplayModes || []).length > 1 && X(qi);
        });
      }
      T(tt);
      var gn = P(tt, 2), mn = N(gn), Hi = P(mn, 2);
      {
        var Vi = (X) => {
          var qe = Ol();
          mt(() => Zr(qe, "href", n())), xe(X, qe);
        }, Yi = /* @__PURE__ */ Ps(() => n().trim() !== "");
        nr(Hi, (X) => {
          g(Yi) && X(Vi);
        });
      }
      T(gn), T(M), mt(
        (X) => {
          he(Dt, X), he(It, g(l).username), he(ve, g(l).role), he(Fi, g(l).id), he(zi, g(l).actualRole), he(Ui, g(l).displayMode || g(l).role), he(ji, `${g(l).uid ?? "n/a" ?? ""} / ${g(l).gid ?? "n/a" ?? ""}`);
        },
        [() => g(l).username.charAt(0).toUpperCase()]
      ), nl("click", mn, V), xe(p, M);
    }, F = (p) => {
      var M = Ll(), H = P(N(M), 6);
      {
        var Ot = (ve) => {
          var tt = Il(), Lt = N(tt, !0);
          T(tt), mt(() => he(Lt, g(f))), xe(ve, tt);
        };
        nr(H, (ve) => {
          g(f) && ve(Ot);
        });
      }
      var Dt = P(H, 2), pt = N(Dt), et = P(N(pt), 2);
      wl(et), xl(et, (ve) => k(v, ve), () => g(v)), T(pt);
      var It = P(pt, 2), er = N(It, !0);
      T(It), T(Dt), Bn(2), T(M), mt(() => {
        It.disabled = g(a), he(er, g(a) ? "Authenticating..." : "Login");
      }), rl("submit", Dt, (ve) => {
        ve.preventDefault(), C();
      }), El(et, () => g(o), (ve) => k(o, ve)), xe(p, M);
    };
    nr(Ee, (p) => {
      g(a) ? p(Qe) : g(l) ? p(Ce, 1) : p(F, !1);
    });
  }
  return T(de), xe(e, de), Kn($e);
}
il(["click"]);
customElements.define("efsdb-login", Al(
  zl,
  {
    apiBase: { attribute: "api-base", type: "String" },
    redirectUrl: { attribute: "redirect-url", type: "String" },
    homeUrl: { attribute: "home-url", type: "String" }
  },
  [],
  [],
  { mode: "open" }
));
