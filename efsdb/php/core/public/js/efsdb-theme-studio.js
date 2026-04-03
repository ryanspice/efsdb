var wl = Object.defineProperty;
var ua = (e) => {
  throw TypeError(e);
};
var ml = (e, t, r) => t in e ? wl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => ml(e, typeof t != "symbol" ? t + "" : t, r), fi = (e, t, r) => t.has(e) || ua("Cannot " + r);
var u = (e, t, r) => (fi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), I = (e, t, r) => t.has(e) ? ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (fi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), te = (e, t, r) => (fi(e, t, "access private method"), r);
var Oa;
typeof window < "u" && ((Oa = window.__svelte ?? (window.__svelte = {})).v ?? (Oa.v = /* @__PURE__ */ new Set())).add("5");
const gl = 1, vl = 2, Ba = 4, bl = 8, yl = 16, xl = 1, kl = 4, _l = 8, ql = 16, Sl = 1, Ml = 2, Wa = "[", Bi = "[!", fa = "[?", Wi = "]", Mn = {}, Se = Symbol(), Fa = "http://www.w3.org/1999/xhtml", jl = !1;
var Va = Array.isArray, $l = Array.prototype.indexOf, jn = Array.prototype.includes, Ho = Array.from, Co = Object.keys, Io = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, zl = Object.getOwnPropertyDescriptors, El = Object.prototype, Pl = Array.prototype, Ha = Object.getPrototypeOf, pa = Object.isExtensible;
const gn = () => {
};
function Tl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ga() {
  var e, t, r = new Promise((n, o) => {
    e = n, t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
const xe = 2, $n = 4, Go = 8, Ua = 1 << 24, _r = 16, zt = 32, yr = 64, _i = 128, ft = 512, ge = 1024, Pe = 2048, Dt = 4096, ot = 8192, pt = 16384, qr = 32768, qi = 1 << 25, Hr = 65536, wa = 1 << 17, Rl = 1 << 18, Zr = 1 << 19, Al = 1 << 20, Ot = 1 << 25, Gr = 65536, Si = 1 << 21, Fi = 1 << 22, vr = 1 << 23, Xn = Symbol("$state"), Ya = Symbol("legacy props"), Cl = Symbol(""), Kt = new class extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "StaleReactionError");
    ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Da;
const Za = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Da = globalThis.document) != null && Da.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Uo = 3, ho = 8;
function Il(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ll() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ol(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Yl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Yo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Z = !1;
function or(e) {
  Z = e;
}
let F;
function Fe(e) {
  if (e === null)
    throw Yo(), Mn;
  return F = e;
}
function Zo() {
  return Fe(/* @__PURE__ */ Bt(F));
}
function k(e) {
  if (Z) {
    if (/* @__PURE__ */ Bt(F) !== null)
      throw Yo(), Mn;
    F = e;
  }
}
function Rr(e = 1) {
  if (Z) {
    for (var t = e, r = F; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(r);
    F = r;
  }
}
function Lo(e = !0) {
  for (var t = 0, r = F; ; ) {
    if (r.nodeType === ho) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Wi) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Wa || n === Bi || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(r)
    );
    e && r.remove(), r = o;
  }
}
function Xa(e) {
  if (!e || e.nodeType !== ho)
    throw Yo(), Mn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ka(e) {
  return e === this.v;
}
function Ja(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qa(e) {
  return !Ja(e, this.v);
}
let Xl = !1, Ve = null;
function zn(e) {
  Ve = e;
}
function Xo(e, t = !1, r) {
  Ve = {
    p: Ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      V
    ),
    l: null
  };
}
function Ko(e) {
  var t = (
    /** @type {ComponentContext} */
    Ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      $s(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ve = t.p, e ?? /** @type {T} */
  {};
}
function es() {
  return !0;
}
let Ar = [];
function ts() {
  var e = Ar;
  Ar = [], Tl(e);
}
function ir(e) {
  if (Ar.length === 0 && !Kn) {
    var t = Ar;
    queueMicrotask(() => {
      t === Ar && ts();
    });
  }
  Ar.push(e);
}
function Kl() {
  for (; Ar.length > 0; )
    ts();
}
function rs(e) {
  var t = V;
  if (t === null)
    return N.f |= vr, e;
  if ((t.f & qr) === 0 && (t.f & $n) === 0)
    throw e;
  gr(e, t);
}
function gr(e, t) {
  for (; t !== null; ) {
    if ((t.f & _i) !== 0) {
      if ((t.f & qr) === 0)
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
const Jl = -7169;
function pe(e, t) {
  e.f = e.f & Jl | t;
}
function Vi(e) {
  (e.f & ft) !== 0 || e.deps === null ? pe(e, ge) : pe(e, Dt);
}
function ns(e) {
  if (e !== null)
    for (const t of e)
      (t.f & xe) === 0 || (t.f & Gr) === 0 || (t.f ^= Gr, ns(
        /** @type {Derived} */
        t.deps
      ));
}
function os(e, t, r) {
  (e.f & Pe) !== 0 ? t.add(e) : (e.f & Dt) !== 0 && r.add(e), ns(e.deps), pe(e, ge);
}
function Ql(e, t, r) {
  if (e == null)
    return t(void 0), gn;
  const n = Xr(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const un = [];
function ed(e, t = gn) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ja(e, s) && (e = s, r)) {
      const d = !un.length;
      for (const l of n)
        l[1](), un.push(l, e);
      if (d) {
        for (let l = 0; l < un.length; l += 2)
          un[l][0](un[l + 1]);
        un.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, d = gn) {
    const l = [s, d];
    return n.add(l), n.size === 1 && (r = t(o, i) || gn), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function td(e) {
  let t;
  return Ql(e, (r) => t = r)(), t;
}
let jo = !1;
function rd(e) {
  var t = jo;
  try {
    return jo = !1, [e(), jo];
  } finally {
    jo = t;
  }
}
const Tr = /* @__PURE__ */ new Set();
let L = null, Me = null, Mi = null, Kn = !1, pi = !1, wn = null, Eo = null;
var ma = 0;
let nd = 1;
var bn, yn, xn, kn, no, Je, Or, Jt, Qt, _n, Te, ji, $i, zi, Ei, is;
const No = class No {
  constructor() {
    I(this, Te);
    // for debugging. TODO remove once async is stable
    ie(this, "id", nd++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, bn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, yn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, xn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, kn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, no, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    I(this, Je, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, Or, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, Jt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    I(this, Qt, /* @__PURE__ */ new Map());
    ie(this, "is_fork", !1);
    I(this, _n, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, Qt).has(t) || u(this, Qt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = u(this, Qt).get(t);
    if (r) {
      u(this, Qt).delete(t);
      for (var n of r.d)
        pe(n, Pe), this.schedule(n);
      for (n of r.m)
        pe(n, Dt), this.schedule(n);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, r) {
    r !== Se && !this.previous.has(t) && this.previous.set(t, r), (t.f & vr) === 0 && (this.current.set(t, t.v), Me == null || Me.set(t, t.v));
  }
  activate() {
    L = this;
  }
  deactivate() {
    L = null, Me = null;
  }
  flush() {
    try {
      pi = !0, L = this, te(this, Te, $i).call(this);
    } finally {
      ma = 0, Mi = null, wn = null, Eo = null, pi = !1, L = null, Me = null, br.clear();
    }
  }
  discard() {
    for (const t of u(this, yn)) t(this);
    u(this, yn).clear(), Tr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    A(this, xn, u(this, xn) + 1), t && A(this, kn, u(this, kn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r) {
    A(this, xn, u(this, xn) - 1), t && A(this, kn, u(this, kn) - 1), !(u(this, _n) || r) && (A(this, _n, !0), ir(() => {
      A(this, _n, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      u(this, Or).add(n);
    for (const n of r)
      u(this, Jt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    u(this, bn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, yn).add(t);
  }
  settled() {
    return (u(this, no) ?? A(this, no, Ga())).promise;
  }
  static ensure() {
    if (L === null) {
      const t = L = new No();
      pi || (Tr.add(L), Kn || ir(() => {
        L === t && t.flush();
      }));
    }
    return L;
  }
  apply() {
    {
      Me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var o;
    if (Mi = t, (o = t.b) != null && o.is_pending && (t.f & ($n | Go | Ua)) !== 0 && (t.f & qr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (wn !== null && r === V && (N === null || (N.f & xe) === 0))
        return;
      if ((n & (yr | zt)) !== 0) {
        if ((n & ge) === 0)
          return;
        r.f ^= ge;
      }
    }
    u(this, Je).push(r);
  }
};
bn = new WeakMap(), yn = new WeakMap(), xn = new WeakMap(), kn = new WeakMap(), no = new WeakMap(), Je = new WeakMap(), Or = new WeakMap(), Jt = new WeakMap(), Qt = new WeakMap(), _n = new WeakMap(), Te = new WeakSet(), ji = function() {
  return this.is_fork || u(this, kn) > 0;
}, $i = function() {
  var s, d;
  if (ma++ > 1e3 && (Tr.delete(this), od()), !te(this, Te, ji).call(this)) {
    for (const l of u(this, Or))
      u(this, Jt).delete(l), pe(l, Pe), this.schedule(l);
    for (const l of u(this, Jt))
      pe(l, Dt), this.schedule(l);
  }
  const t = u(this, Je);
  A(this, Je, []), this.apply();
  var r = wn = [], n = [], o = Eo = [];
  for (const l of t)
    try {
      te(this, Te, zi).call(this, l, r, n);
    } catch (f) {
      throw ds(l), f;
    }
  if (L = null, o.length > 0) {
    var i = No.ensure();
    for (const l of o)
      i.schedule(l);
  }
  if (wn = null, Eo = null, te(this, Te, ji).call(this)) {
    te(this, Te, Ei).call(this, n), te(this, Te, Ei).call(this, r);
    for (const [l, f] of u(this, Qt))
      ls(l, f);
  } else {
    u(this, xn) === 0 && Tr.delete(this), u(this, Or).clear(), u(this, Jt).clear();
    for (const l of u(this, bn)) l(this);
    u(this, bn).clear(), ga(n), ga(r), (s = u(this, no)) == null || s.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    L
  );
  if (u(this, Je).length > 0) {
    const l = a ?? (a = this);
    u(l, Je).push(...u(this, Je).filter((f) => !u(l, Je).includes(f)));
  }
  a !== null && (Tr.add(a), te(d = a, Te, $i).call(d)), Tr.has(this) || te(this, Te, is).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
zi = function(t, r, n) {
  t.f ^= ge;
  for (var o = t.first; o !== null; ) {
    var i = o.f, a = (i & (zt | yr)) !== 0, s = a && (i & ge) !== 0, d = s || (i & ot) !== 0 || u(this, Qt).has(o);
    if (!d && o.fn !== null) {
      a ? o.f ^= ge : (i & $n) !== 0 ? r.push(o) : uo(o) && ((i & _r) !== 0 && u(this, Jt).add(o), Pn(o));
      var l = o.first;
      if (l !== null) {
        o = l;
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
}, /**
 * @param {Effect[]} effects
 */
Ei = function(t) {
  for (var r = 0; r < t.length; r += 1)
    os(t[r], u(this, Or), u(this, Jt));
}, is = function() {
  var d;
  for (const l of Tr) {
    var t = l.id < this.id, r = [];
    for (const [f, w] of this.current) {
      if (l.current.has(f))
        if (t && w !== l.current.get(f))
          l.current.set(f, w);
        else
          continue;
      r.push(f);
    }
    var n = [...l.current.keys()].filter((f) => !this.current.has(f));
    if (n.length === 0)
      t && l.discard();
    else if (r.length > 0) {
      l.activate();
      var o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
      for (var a of r)
        as(a, n, o, i);
      if (u(l, Je).length > 0) {
        l.apply();
        for (var s of u(l, Je))
          te(d = l, Te, zi).call(d, s, [], []);
        A(l, Je, []);
      }
      l.deactivate();
    }
  }
};
let xr = No;
function W(e) {
  var t = Kn;
  Kn = !0;
  try {
    for (var r; ; ) {
      if (Kl(), L === null)
        return (
          /** @type {T} */
          r
        );
      L.flush();
    }
  } finally {
    Kn = t;
  }
}
function od() {
  try {
    Wl();
  } catch (e) {
    gr(e, Mi);
  }
}
let St = null;
function ga(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (pt | ot)) === 0 && uo(n) && (St = /* @__PURE__ */ new Set(), Pn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Es(n), (St == null ? void 0 : St.size) > 0)) {
        br.clear();
        for (const o of St) {
          if ((o.f & (pt | ot)) !== 0) continue;
          const i = [o];
          let a = o.parent;
          for (; a !== null; )
            St.has(a) && (St.delete(a), i.push(a)), a = a.parent;
          for (let s = i.length - 1; s >= 0; s--) {
            const d = i[s];
            (d.f & (pt | ot)) === 0 && Pn(d);
          }
        }
        St.clear();
      }
    }
    St = null;
  }
}
function as(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & xe) !== 0 ? as(
        /** @type {Derived} */
        o,
        t,
        r,
        n
      ) : (i & (Fi | _r)) !== 0 && (i & Pe) === 0 && ss(o, t, n) && (pe(o, Pe), Hi(
        /** @type {Effect} */
        o
      ));
    }
}
function ss(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (jn.call(t, o))
        return !0;
      if ((o.f & xe) !== 0 && ss(
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
function Hi(e) {
  L.schedule(e);
}
function ls(e, t) {
  if (!((e.f & zt) !== 0 && (e.f & ge) !== 0)) {
    (e.f & Pe) !== 0 ? t.d.push(e) : (e.f & Dt) !== 0 && t.m.push(e), pe(e, ge);
    for (var r = e.first; r !== null; )
      ls(r, t), r = r.next;
  }
}
function ds(e) {
  pe(e, ge);
  for (var t = e.first; t !== null; )
    ds(t), t = t.next;
}
function id(e) {
  let t = 0, r = Ur(0), n;
  return () => {
    Zi() && (c(r), ei(() => (t === 0 && (n = Xr(() => e(() => Jn(r)))), t += 1, () => {
      ir(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, Jn(r));
      });
    })));
  };
}
var ad = Hr | Zr;
function sd(e, t, r, n) {
  new ld(e, t, r, n);
}
var Qe, oo, Ct, Dr, Be, It, et, Mt, er, Nr, wr, qn, io, ao, tr, Bo, ce, cs, hs, us, Pi, Po, To, Ti;
class ld {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, o) {
    I(this, ce);
    /** @type {Boundary | null} */
    ie(this, "parent");
    ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ie(this, "transform_error");
    /** @type {TemplateNode} */
    I(this, Qe);
    /** @type {TemplateNode | null} */
    I(this, oo, Z ? F : null);
    /** @type {BoundaryProps} */
    I(this, Ct);
    /** @type {((anchor: Node) => void)} */
    I(this, Dr);
    /** @type {Effect} */
    I(this, Be);
    /** @type {Effect | null} */
    I(this, It, null);
    /** @type {Effect | null} */
    I(this, et, null);
    /** @type {Effect | null} */
    I(this, Mt, null);
    /** @type {DocumentFragment | null} */
    I(this, er, null);
    I(this, Nr, 0);
    I(this, wr, 0);
    I(this, qn, !1);
    /** @type {Set<Effect>} */
    I(this, io, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    I(this, ao, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, tr, null);
    I(this, Bo, id(() => (A(this, tr, Ur(u(this, Nr))), () => {
      A(this, tr, null);
    })));
    var i;
    A(this, Qe, t), A(this, Ct, r), A(this, Dr, (a) => {
      var s = (
        /** @type {Effect} */
        V
      );
      s.b = this, s.f |= _i, n(a);
    }), this.parent = /** @type {Effect} */
    V.b, this.transform_error = o ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((a) => a), A(this, Be, ti(() => {
      if (Z) {
        const a = (
          /** @type {Comment} */
          u(this, oo)
        );
        Zo();
        const s = a.data === Bi;
        if (a.data.startsWith(fa)) {
          const l = JSON.parse(a.data.slice(fa.length));
          te(this, ce, hs).call(this, l);
        } else s ? te(this, ce, us).call(this) : te(this, ce, cs).call(this);
      } else
        te(this, ce, Pi).call(this);
    }, ad)), Z && A(this, Qe, F);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    os(t, u(this, io), u(this, ao));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, Ct).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    te(this, ce, Ti).call(this, t, r), A(this, Nr, u(this, Nr) + t), !(!u(this, tr) || u(this, qn)) && (A(this, qn, !0), ir(() => {
      A(this, qn, !1), u(this, tr) && En(u(this, tr), u(this, Nr));
    }));
  }
  get_effect_pending() {
    return u(this, Bo).call(this), c(
      /** @type {Source<number>} */
      u(this, tr)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = u(this, Ct).onerror;
    let n = u(this, Ct).failed;
    if (!r && !n)
      throw t;
    u(this, It) && (Ie(u(this, It)), A(this, It, null)), u(this, et) && (Ie(u(this, et)), A(this, et, null)), u(this, Mt) && (Ie(u(this, Mt)), A(this, Mt, null)), Z && (Fe(
      /** @type {TemplateNode} */
      u(this, oo)
    ), Rr(), Fe(Lo()));
    var o = !1, i = !1;
    const a = () => {
      if (o) {
        Zl();
        return;
      }
      o = !0, i && Yl(), u(this, Mt) !== null && Fr(u(this, Mt), () => {
        A(this, Mt, null);
      }), te(this, ce, To).call(this, () => {
        te(this, ce, Pi).call(this);
      });
    }, s = (d) => {
      try {
        i = !0, r == null || r(d, a), i = !1;
      } catch (l) {
        gr(l, u(this, Be) && u(this, Be).parent);
      }
      n && A(this, Mt, te(this, ce, To).call(this, () => {
        try {
          return ut(() => {
            var l = (
              /** @type {Effect} */
              V
            );
            l.b = this, l.f |= _i, n(
              u(this, Qe),
              () => d,
              () => a
            );
          });
        } catch (l) {
          return gr(
            l,
            /** @type {Effect} */
            u(this, Be).parent
          ), null;
        }
      }));
    };
    ir(() => {
      var d;
      try {
        d = this.transform_error(t);
      } catch (l) {
        gr(l, u(this, Be) && u(this, Be).parent);
        return;
      }
      d !== null && typeof d == "object" && typeof /** @type {any} */
      d.then == "function" ? d.then(
        s,
        /** @param {unknown} e */
        (l) => gr(l, u(this, Be) && u(this, Be).parent)
      ) : s(d);
    });
  }
}
Qe = new WeakMap(), oo = new WeakMap(), Ct = new WeakMap(), Dr = new WeakMap(), Be = new WeakMap(), It = new WeakMap(), et = new WeakMap(), Mt = new WeakMap(), er = new WeakMap(), Nr = new WeakMap(), wr = new WeakMap(), qn = new WeakMap(), io = new WeakMap(), ao = new WeakMap(), tr = new WeakMap(), Bo = new WeakMap(), ce = new WeakSet(), cs = function() {
  try {
    A(this, It, ut(() => u(this, Dr).call(this, u(this, Qe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
hs = function(t) {
  const r = u(this, Ct).failed;
  r && A(this, Mt, ut(() => {
    r(
      u(this, Qe),
      () => t,
      () => () => {
      }
    );
  }));
}, us = function() {
  const t = u(this, Ct).pending;
  t && (this.is_pending = !0, A(this, et, ut(() => t(u(this, Qe)))), ir(() => {
    var r = A(this, er, document.createDocumentFragment()), n = wt();
    r.append(n), A(this, It, te(this, ce, To).call(this, () => ut(() => u(this, Dr).call(this, n)))), u(this, wr) === 0 && (u(this, Qe).before(r), A(this, er, null), Fr(
      /** @type {Effect} */
      u(this, et),
      () => {
        A(this, et, null);
      }
    ), te(this, ce, Po).call(
      this,
      /** @type {Batch} */
      L
    ));
  }));
}, Pi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, wr, 0), A(this, Nr, 0), A(this, It, ut(() => {
      u(this, Dr).call(this, u(this, Qe));
    })), u(this, wr) > 0) {
      var t = A(this, er, document.createDocumentFragment());
      Qi(u(this, It), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        u(this, Ct).pending
      );
      A(this, et, ut(() => r(u(this, Qe))));
    } else
      te(this, ce, Po).call(
        this,
        /** @type {Batch} */
        L
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Po = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, io), u(this, ao));
}, /**
 * @template T
 * @param {() => T} fn
 */
To = function(t) {
  var r = V, n = N, o = Ve;
  Nt(u(this, Be)), gt(u(this, Be)), zn(u(this, Be).ctx);
  try {
    return xr.ensure(), t();
  } catch (i) {
    return rs(i), null;
  } finally {
    Nt(r), gt(n), zn(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ti = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && te(n = this.parent, ce, Ti).call(n, t, r);
    return;
  }
  A(this, wr, u(this, wr) + t), u(this, wr) === 0 && (te(this, ce, Po).call(this, r), u(this, et) && Fr(u(this, et), () => {
    A(this, et, null);
  }), u(this, er) && (u(this, Qe).before(u(this, er)), A(this, er, null)));
};
function dd(e, t, r, n) {
  const o = Jo;
  var i = e.filter((p) => !p.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(o));
    return;
  }
  var a = (
    /** @type {Effect} */
    V
  ), s = cd(), d = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function l(p) {
    s();
    try {
      n(p);
    } catch (y) {
      (a.f & pt) === 0 && gr(y, a);
    }
    Oo();
  }
  if (r.length === 0) {
    d.then(() => l(t.map(o)));
    return;
  }
  var f = fs();
  function w() {
    Promise.all(r.map((p) => /* @__PURE__ */ hd(p))).then((p) => l([...t.map(o), ...p])).catch((p) => gr(p, a)).finally(() => f());
  }
  d ? d.then(() => {
    s(), w(), Oo();
  }) : w();
}
function cd() {
  var e = (
    /** @type {Effect} */
    V
  ), t = N, r = Ve, n = (
    /** @type {Batch} */
    L
  );
  return function(i = !0) {
    Nt(e), gt(t), zn(r), i && (e.f & pt) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Oo(e = !0) {
  Nt(null), gt(null), zn(null), e && (L == null || L.deactivate());
}
function fs() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    V.b
  ), t = (
    /** @type {Batch} */
    L
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r), (n = !1) => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  var t = xe | Pe, r = N !== null && (N.f & xe) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return V !== null && (V.f |= Zr), {
    ctx: Ve,
    deps: null,
    effects: null,
    equals: Ka,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Se
    ),
    wv: 0,
    parent: r ?? V,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hd(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    V
  );
  n === null && Ll();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ur(
    /** @type {V} */
    Se
  ), a = !N, s = /* @__PURE__ */ new Map();
  return xd(() => {
    var y;
    var d = (
      /** @type {Effect} */
      V
    ), l = Ga();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(Oo);
    } catch (v) {
      l.reject(v), Oo();
    }
    var f = (
      /** @type {Batch} */
      L
    );
    if (a) {
      if ((d.f & qr) !== 0)
        var w = fs();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (y = s.get(f)) == null || y.reject(Kt), s.delete(f);
      else {
        for (const v of s.values())
          v.reject(Kt);
        s.clear();
      }
      s.set(f, l);
    }
    const p = (v, M = void 0) => {
      if (w) {
        var b = M === Kt;
        w(b);
      }
      if (!(M === Kt || (d.f & pt) !== 0)) {
        if (f.activate(), M)
          i.f |= vr, En(i, M);
        else {
          (i.f & vr) !== 0 && (i.f ^= vr), En(i, v);
          for (const [q, O] of s) {
            if (s.delete(q), q === f) break;
            O.reject(Kt);
          }
        }
        f.deactivate();
      }
    };
    l.promise.then(p, (v) => p(null, v || "unknown"));
  }), Ms(() => {
    for (const d of s.values())
      d.reject(Kt);
  }), new Promise((d) => {
    function l(f) {
      function w() {
        f === o ? d(i) : l(o);
      }
      f.then(w, w);
    }
    l(o);
  });
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = /* @__PURE__ */ Jo(e);
  return Rs(t), t;
}
// @__NO_SIDE_EFFECTS__
function ps(e) {
  const t = /* @__PURE__ */ Jo(e);
  return t.equals = Qa, t;
}
function ud(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function fd(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & xe) === 0)
      return (t.f & pt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Gi(e) {
  var t, r = V;
  Nt(fd(e));
  try {
    e.f &= ~Gr, ud(e), t = Ls(e);
  } finally {
    Nt(r);
  }
  return t;
}
function ws(e) {
  var t = e.v, r = Gi(e);
  if (!e.equals(r) && (e.wv = Cs(), (!(L != null && L.is_fork) || e.deps === null) && (e.v = r, L == null || L.capture(e, t), e.deps === null))) {
    pe(e, ge);
    return;
  }
  kr || (Me !== null ? (Zi() || L != null && L.is_fork) && Me.set(e, r) : Vi(e));
}
function pd(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Kt), n.teardown = gn, n.ac = null, to(n, 0), Ki(n));
}
function ms(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Pn(t);
}
let Ri = /* @__PURE__ */ new Set();
const br = /* @__PURE__ */ new Map();
let gs = !1;
function Ur(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ka,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const r = Ur(e);
  return Rs(r), r;
}
// @__NO_SIDE_EFFECTS__
function vs(e, t = !1, r = !0) {
  const n = Ur(e);
  return t || (n.equals = Qa), n;
}
function g(e, t, r = !1) {
  N !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$t || (N.f & wa) !== 0) && es() && (N.f & (xe | _r | Fi | wa)) !== 0 && (mt === null || !jn.call(mt, e)) && Ul();
  let n = r ? Cr(t) : t;
  return En(e, n, Eo);
}
function En(e, t, r = null) {
  if (!e.equals(t)) {
    var n = e.v;
    kr ? br.set(e, t) : br.set(e, n), e.v = t;
    var o = xr.ensure();
    if (o.capture(e, n), (e.f & xe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Pe) !== 0 && Gi(i), Me === null && Vi(i);
    }
    e.wv = Cs(), bs(e, Pe, r), V !== null && (V.f & ge) !== 0 && (V.f & (zt | yr)) === 0 && (dt === null ? qd([e]) : dt.push(e)), !o.is_fork && Ri.size > 0 && !gs && wd();
  }
  return t;
}
function wd() {
  gs = !1;
  for (const e of Ri)
    (e.f & ge) !== 0 && pe(e, Dt), uo(e) && Pn(e);
  Ri.clear();
}
function Jn(e) {
  g(e, e.v + 1);
}
function bs(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f, d = (s & Pe) === 0;
      if (d && pe(a, t), (s & xe) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        Me == null || Me.delete(l), (s & Gr) === 0 && (s & ft && (a.f |= Gr), bs(l, Dt, r));
      } else if (d) {
        var f = (
          /** @type {Effect} */
          a
        );
        (s & _r) !== 0 && St !== null && St.add(f), r !== null ? r.push(f) : Hi(f);
      }
    }
}
function Cr(e) {
  if (typeof e != "object" || e === null || Xn in e)
    return e;
  const t = Ha(e);
  if (t !== El && t !== Pl)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Va(e), o = /* @__PURE__ */ D(0), i = Vr, a = (s) => {
    if (Vr === i)
      return s();
    var d = N, l = Vr;
    gt(null), xa(i);
    var f = s();
    return gt(d), xa(l), f;
  };
  return n && r.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, d, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Hl();
        var f = r.get(d);
        return f === void 0 ? a(() => {
          var w = /* @__PURE__ */ D(l.value);
          return r.set(d, w), w;
        }) : g(f, l.value, !0), !0;
      },
      deleteProperty(s, d) {
        var l = r.get(d);
        if (l === void 0) {
          if (d in s) {
            const f = a(() => /* @__PURE__ */ D(Se));
            r.set(d, f), Jn(o);
          }
        } else
          g(l, Se), Jn(o);
        return !0;
      },
      get(s, d, l) {
        var y;
        if (d === Xn)
          return e;
        var f = r.get(d), w = d in s;
        if (f === void 0 && (!w || (y = Wr(s, d)) != null && y.writable) && (f = a(() => {
          var v = Cr(w ? s[d] : Se), M = /* @__PURE__ */ D(v);
          return M;
        }), r.set(d, f)), f !== void 0) {
          var p = c(f);
          return p === Se ? void 0 : p;
        }
        return Reflect.get(s, d, l);
      },
      getOwnPropertyDescriptor(s, d) {
        var l = Reflect.getOwnPropertyDescriptor(s, d);
        if (l && "value" in l) {
          var f = r.get(d);
          f && (l.value = c(f));
        } else if (l === void 0) {
          var w = r.get(d), p = w == null ? void 0 : w.v;
          if (w !== void 0 && p !== Se)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return l;
      },
      has(s, d) {
        var p;
        if (d === Xn)
          return !0;
        var l = r.get(d), f = l !== void 0 && l.v !== Se || Reflect.has(s, d);
        if (l !== void 0 || V !== null && (!f || (p = Wr(s, d)) != null && p.writable)) {
          l === void 0 && (l = a(() => {
            var y = f ? Cr(s[d]) : Se, v = /* @__PURE__ */ D(y);
            return v;
          }), r.set(d, l));
          var w = c(l);
          if (w === Se)
            return !1;
        }
        return f;
      },
      set(s, d, l, f) {
        var S;
        var w = r.get(d), p = d in s;
        if (n && d === "length")
          for (var y = l; y < /** @type {Source<number>} */
          w.v; y += 1) {
            var v = r.get(y + "");
            v !== void 0 ? g(v, Se) : y in s && (v = a(() => /* @__PURE__ */ D(Se)), r.set(y + "", v));
          }
        if (w === void 0)
          (!p || (S = Wr(s, d)) != null && S.writable) && (w = a(() => /* @__PURE__ */ D(void 0)), g(w, Cr(l)), r.set(d, w));
        else {
          p = w.v !== Se;
          var M = a(() => Cr(l));
          g(w, M);
        }
        var b = Reflect.getOwnPropertyDescriptor(s, d);
        if (b != null && b.set && b.set.call(f, l), !p) {
          if (n && typeof d == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), O = Number(d);
            Number.isInteger(O) && O >= q.v && g(q, O + 1);
          }
          Jn(o);
        }
        return !0;
      },
      ownKeys(s) {
        c(o);
        var d = Reflect.ownKeys(s).filter((w) => {
          var p = r.get(w);
          return p === void 0 || p.v !== Se;
        });
        for (var [l, f] of r)
          f.v !== Se && !(l in s) && d.push(l);
        return d;
      },
      setPrototypeOf() {
        Gl();
      }
    }
  );
}
var va, ys, xs, ks;
function Ai() {
  if (va === void 0) {
    va = window, ys = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    xs = Wr(t, "firstChild").get, ks = Wr(t, "nextSibling").get, pa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pa(r) && (r.__t = void 0);
  }
}
function wt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return (
    /** @type {TemplateNode | null} */
    xs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return (
    /** @type {TemplateNode | null} */
    ks.call(e)
  );
}
function _(e, t) {
  if (!Z)
    return /* @__PURE__ */ Yr(e);
  var r = /* @__PURE__ */ Yr(F);
  if (r === null)
    r = F.appendChild(wt());
  else if (t && r.nodeType !== Uo) {
    var n = wt();
    return r == null || r.before(n), Fe(n), n;
  }
  return t && Yi(
    /** @type {Text} */
    r
  ), Fe(r), r;
}
function mn(e, t = !1) {
  if (!Z) {
    var r = /* @__PURE__ */ Yr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Bt(r) : r;
  }
  if (t) {
    if ((F == null ? void 0 : F.nodeType) !== Uo) {
      var n = wt();
      return F == null || F.before(n), Fe(n), n;
    }
    Yi(
      /** @type {Text} */
      F
    );
  }
  return F;
}
function T(e, t = 1, r = !1) {
  let n = Z ? F : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(n);
  if (!Z)
    return n;
  if (r) {
    if ((n == null ? void 0 : n.nodeType) !== Uo) {
      var i = wt();
      return n === null ? o == null || o.after(i) : n.before(i), Fe(i), i;
    }
    Yi(
      /** @type {Text} */
      n
    );
  }
  return Fe(n), n;
}
function _s(e) {
  e.textContent = "";
}
function qs() {
  return !1;
}
function Ui(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fa, e, void 0)
  );
}
function Yi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Uo; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let ba = !1;
function Ss() {
  ba || (ba = !0, document.addEventListener(
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
function Qo(e) {
  var t = N, r = V;
  gt(null), Nt(null);
  try {
    return e();
  } finally {
    gt(t), Nt(r);
  }
}
function md(e, t, r, n = r) {
  e.addEventListener(t, () => Qo(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), Ss();
}
function gd(e) {
  V === null && (N === null && Bl(), Nl()), kr && Dl();
}
function vd(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Wt(e, t) {
  var r = V;
  r !== null && (r.f & ot) !== 0 && (e |= ot);
  var n = {
    ctx: Ve,
    deps: null,
    nodes: null,
    f: e | Pe | ft,
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
  }, o = n;
  if ((e & $n) !== 0)
    wn !== null ? wn.push(n) : xr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Pn(n);
    } catch (a) {
      throw Ie(n), a;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & Zr) === 0 && (o = o.first, (e & _r) !== 0 && (e & Hr) !== 0 && o !== null && (o.f |= Hr));
  }
  if (o !== null && (o.parent = r, r !== null && vd(o, r), N !== null && (N.f & xe) !== 0 && (e & yr) === 0)) {
    var i = (
      /** @type {Derived} */
      N
    );
    (i.effects ?? (i.effects = [])).push(o);
  }
  return n;
}
function Zi() {
  return N !== null && !$t;
}
function Ms(e) {
  const t = Wt(Go, null);
  return pe(t, ge), t.teardown = e, t;
}
function js(e) {
  gd();
  var t = (
    /** @type {Effect} */
    V.f
  ), r = !N && (t & zt) !== 0 && (t & qr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return $s(e);
}
function $s(e) {
  return Wt($n | Al, e);
}
function bd(e) {
  xr.ensure();
  const t = Wt(yr | Zr, e);
  return () => {
    Ie(t);
  };
}
function yd(e) {
  xr.ensure();
  const t = Wt(yr | Zr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Fr(t, () => {
      Ie(t), n(void 0);
    }) : (Ie(t), n(void 0));
  });
}
function Xi(e) {
  return Wt($n, e);
}
function xd(e) {
  return Wt(Fi | Zr, e);
}
function ei(e, t = 0) {
  return Wt(Go | t, e);
}
function Ce(e, t = [], r = [], n = []) {
  dd(n, t, r, (o) => {
    Wt(Go, () => e(...o.map(c)));
  });
}
function ti(e, t = 0) {
  var r = Wt(_r | t, e);
  return r;
}
function ut(e) {
  return Wt(zt | Zr, e);
}
function zs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = kr, n = N;
    ya(!0), gt(null);
    try {
      t.call(null);
    } finally {
      ya(r), gt(n);
    }
  }
}
function Ki(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const o = r.ac;
    o !== null && Qo(() => {
      o.abort(Kt);
    });
    var n = r.next;
    (r.f & yr) !== 0 ? r.parent = null : Ie(r, t), r = n;
  }
}
function kd(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & zt) === 0 && Ie(t), t = r;
  }
}
function Ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Rl) !== 0) && e.nodes !== null && e.nodes.end !== null && (_d(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), pe(e, qi), Ki(e, t && !r), to(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  zs(e), e.f ^= qi, e.f |= pt;
  var o = e.parent;
  o !== null && o.first !== null && Es(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function _d(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Bt(e);
    e.remove(), e = r;
  }
}
function Es(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Fr(e, t, r = !0) {
  var n = [];
  Ps(e, n, !0);
  var o = () => {
    r && Ie(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var a = () => --i || o();
    for (var s of n)
      s.out(a);
  } else
    o();
}
function Ps(e, t, r) {
  if ((e.f & ot) === 0) {
    e.f ^= ot;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var i = o.next, a = (o.f & Hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & zt) !== 0 && (e.f & _r) !== 0;
      Ps(o, t, a ? r : !1), o = i;
    }
  }
}
function Ji(e) {
  Ts(e, !0);
}
function Ts(e, t) {
  if ((e.f & ot) !== 0) {
    e.f ^= ot, (e.f & ge) === 0 && (pe(e, Pe), xr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & Hr) !== 0 || (r.f & zt) !== 0;
      Ts(r, o ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function Qi(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var o = r === n ? null : /* @__PURE__ */ Bt(r);
      t.append(r), r = o;
    }
}
let Ro = !1, kr = !1;
function ya(e) {
  kr = e;
}
let N = null, $t = !1;
function gt(e) {
  N = e;
}
let V = null;
function Nt(e) {
  V = e;
}
let mt = null;
function Rs(e) {
  N !== null && (mt === null ? mt = [e] : mt.push(e));
}
let We = null, Ke = 0, dt = null;
function qd(e) {
  dt = e;
}
let As = 1, Ir = 0, Vr = Ir;
function xa(e) {
  Vr = e;
}
function Cs() {
  return ++As;
}
function uo(e) {
  var t = e.f;
  if ((t & Pe) !== 0)
    return !0;
  if (t & xe && (e.f &= ~Gr), (t & Dt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, o = 0; o < n; o++) {
      var i = r[o];
      if (uo(
        /** @type {Derived} */
        i
      ) && ws(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ft) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Me === null && pe(e, ge);
  }
  return !1;
}
function Is(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(mt !== null && jn.call(mt, e)))
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      (i.f & xe) !== 0 ? Is(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? pe(i, Pe) : (i.f & ge) !== 0 && pe(i, Dt), Hi(
        /** @type {Effect} */
        i
      ));
    }
}
function Ls(e) {
  var M;
  var t = We, r = Ke, n = dt, o = N, i = mt, a = Ve, s = $t, d = Vr, l = e.f;
  We = /** @type {null | Value[]} */
  null, Ke = 0, dt = null, N = (l & (zt | yr)) === 0 ? e : null, mt = null, zn(e.ctx), $t = !1, Vr = ++Ir, e.ac !== null && (Qo(() => {
    e.ac.abort(Kt);
  }), e.ac = null);
  try {
    e.f |= Si;
    var f = (
      /** @type {Function} */
      e.fn
    ), w = f();
    e.f |= qr;
    var p = e.deps, y = L == null ? void 0 : L.is_fork;
    if (We !== null) {
      var v;
      if (y || to(e, Ke), p !== null && Ke > 0)
        for (p.length = Ke + We.length, v = 0; v < We.length; v++)
          p[Ke + v] = We[v];
      else
        e.deps = p = We;
      if (Zi() && (e.f & ft) !== 0)
        for (v = Ke; v < p.length; v++)
          ((M = p[v]).reactions ?? (M.reactions = [])).push(e);
    } else !y && p !== null && Ke < p.length && (to(e, Ke), p.length = Ke);
    if (es() && dt !== null && !$t && p !== null && (e.f & (xe | Dt | Pe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      dt.length; v++)
        Is(
          dt[v],
          /** @type {Effect} */
          e
        );
    if (o !== null && o !== e) {
      if (Ir++, o.deps !== null)
        for (let b = 0; b < r; b += 1)
          o.deps[b].rv = Ir;
      if (t !== null)
        for (const b of t)
          b.rv = Ir;
      dt !== null && (n === null ? n = dt : n.push(.../** @type {Source[]} */
      dt));
    }
    return (e.f & vr) !== 0 && (e.f ^= vr), w;
  } catch (b) {
    return rs(b);
  } finally {
    e.f ^= Si, We = t, Ke = r, dt = n, N = o, mt = i, zn(a), $t = s, Vr = d;
  }
}
function Sd(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = $l.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  if (r === null && (t.f & xe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !jn.call(We, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ft) !== 0 && (i.f ^= ft, i.f &= ~Gr), Vi(i), pd(i), to(i, 0);
  }
}
function to(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Sd(e, r[n]);
}
function Pn(e) {
  var t = e.f;
  if ((t & pt) === 0) {
    pe(e, ge);
    var r = V, n = Ro;
    V = e, Ro = !0;
    try {
      (t & (_r | Ua)) !== 0 ? kd(e) : Ki(e), zs(e);
      var o = Ls(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = As;
      var i;
      jl && Xl && (e.f & Pe) !== 0 && e.deps;
    } finally {
      Ro = n, V = r;
    }
  }
}
async function Md() {
  await Promise.resolve(), W();
}
function c(e) {
  var t = e.f, r = (t & xe) !== 0;
  if (N !== null && !$t) {
    var n = V !== null && (V.f & pt) !== 0;
    if (!n && (mt === null || !jn.call(mt, e))) {
      var o = N.deps;
      if ((N.f & Si) !== 0)
        e.rv < Ir && (e.rv = Ir, We === null && o !== null && o[Ke] === e ? Ke++ : We === null ? We = [e] : We.push(e));
      else {
        (N.deps ?? (N.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [N] : jn.call(i, N) || i.push(N);
      }
    }
  }
  if (kr && br.has(e))
    return br.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (kr) {
      var s = a.v;
      return ((a.f & ge) === 0 && a.reactions !== null || Ds(a)) && (s = Gi(a)), br.set(a, s), s;
    }
    var d = (a.f & ft) === 0 && !$t && N !== null && (Ro || (N.f & ft) !== 0), l = (a.f & qr) === 0;
    uo(a) && (d && (a.f |= ft), ws(a)), d && !l && (ms(a), Os(a));
  }
  if (Me != null && Me.has(e))
    return Me.get(e);
  if ((e.f & vr) !== 0)
    throw e.v;
  return e.v;
}
function Os(e) {
  if (e.f |= ft, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & xe) !== 0 && (t.f & ft) === 0 && (ms(
        /** @type {Derived} */
        t
      ), Os(
        /** @type {Derived} */
        t
      ));
}
function Ds(e) {
  if (e.v === Se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (br.has(t) || (t.f & xe) !== 0 && Ds(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xr(e) {
  var t = $t;
  try {
    return $t = !0, e();
  } finally {
    $t = t;
  }
}
const Lr = Symbol("events"), Ns = /* @__PURE__ */ new Set(), Ci = /* @__PURE__ */ new Set();
function jd(e, t, r, n = {}) {
  function o(i) {
    if (n.capture || Ii.call(t, i), !i.cancelBubble)
      return Qo(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ir(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function $d(e, t, r, n, o) {
  var i = { capture: n, passive: o }, a = jd(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ms(() => {
    t.removeEventListener(e, a, i);
  });
}
function de(e, t, r) {
  (t[Lr] ?? (t[Lr] = {}))[e] = r;
}
function Bs(e) {
  for (var t = 0; t < e.length; t++)
    Ns.add(e[t]);
  for (var r of Ci)
    r(e);
}
let ka = null;
function Ii(e) {
  var b, q;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  ka = e;
  var a = 0, s = ka === e && e[Lr];
  if (s) {
    var d = o.indexOf(s);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Lr] = t;
      return;
    }
    var l = o.indexOf(t);
    if (l === -1)
      return;
    d <= l && (a = d);
  }
  if (i = /** @type {Element} */
  o[a] || e.target, i !== t) {
    Io(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var f = N, w = V;
    gt(null), Nt(null);
    try {
      for (var p, y = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var M = (q = i[Lr]) == null ? void 0 : q[n];
          M != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && M.call(i, e);
        } catch (O) {
          p ? y.push(O) : p = O;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (p) {
        for (let O of y)
          queueMicrotask(() => {
            throw O;
          });
        throw p;
      }
    } finally {
      e[Lr] = t, delete e.currentTarget, gt(f), Nt(w);
    }
  }
}
var Na;
const wi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Na = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Na.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function zd(e) {
  return (
    /** @type {string} */
    (wi == null ? void 0 : wi.createHTML(e)) ?? e
  );
}
function Ed(e) {
  var t = Ui("template");
  return t.innerHTML = zd(e.replaceAll("<!>", "<!---->")), t.content;
}
function vn(e, t) {
  var r = (
    /** @type {Effect} */
    V
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  var r = (t & Sl) !== 0, n = (t & Ml) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Z)
      return vn(F, null), F;
    o === void 0 && (o = Ed(i ? e : "<!>" + e), r || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Yr(o)));
    var a = (
      /** @type {TemplateNode} */
      n || ys ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yr(a)
      ), d = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      vn(s, d);
    } else
      vn(a, a);
    return a;
  };
}
function Ws() {
  if (Z)
    return vn(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = wt();
  return e.append(t, r), vn(t, r), e;
}
function ne(e, t) {
  if (Z) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      V
    );
    ((r.f & qr) === 0 || r.nodes.end === null) && (r.nodes.end = F), Zo();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Pd = ["touchstart", "touchmove"];
function Td(e) {
  return Pd.includes(e);
}
function Ne(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Fs(e, t) {
  return Vs(e, t);
}
function Rd(e, t) {
  Ai(), t.intro = t.intro ?? !1;
  const r = t.target, n = Z, o = F;
  try {
    for (var i = /* @__PURE__ */ Yr(r); i && (i.nodeType !== ho || /** @type {Comment} */
    i.data !== Wa); )
      i = /* @__PURE__ */ Bt(i);
    if (!i)
      throw Mn;
    or(!0), Fe(
      /** @type {Comment} */
      i
    );
    const a = Vs(e, { ...t, anchor: i });
    return or(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Mn && console.warn("Failed to hydrate: ", a), t.recover === !1 && Fl(), Ai(), _s(r), or(!1), Fs(e, t);
  } finally {
    or(n), Fe(o);
  }
}
const $o = /* @__PURE__ */ new Map();
function Vs(e, { target: t, anchor: r, props: n = {}, events: o, context: i, intro: a = !0, transformError: s }) {
  Ai();
  var d = void 0, l = yd(() => {
    var f = r ?? t.appendChild(wt());
    sd(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (y) => {
        Xo({});
        var v = (
          /** @type {ComponentContext} */
          Ve
        );
        if (i && (v.c = i), o && (n.$$events = o), Z && vn(
          /** @type {TemplateNode} */
          y,
          null
        ), d = e(y, n) || {}, Z && (V.nodes.end = F, F === null || F.nodeType !== ho || /** @type {Comment} */
        F.data !== Wi))
          throw Yo(), Mn;
        Ko();
      },
      s
    );
    var w = /* @__PURE__ */ new Set(), p = (y) => {
      for (var v = 0; v < y.length; v++) {
        var M = y[v];
        if (!w.has(M)) {
          w.add(M);
          var b = Td(M);
          for (const S of [t, document]) {
            var q = $o.get(S);
            q === void 0 && (q = /* @__PURE__ */ new Map(), $o.set(S, q));
            var O = q.get(M);
            O === void 0 ? (S.addEventListener(M, Ii, { passive: b }), q.set(M, 1)) : q.set(M, O + 1);
          }
        }
      }
    };
    return p(Ho(Ns)), Ci.add(p), () => {
      var b;
      for (var y of w)
        for (const q of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            $o.get(q)
          ), M = (
            /** @type {number} */
            v.get(y)
          );
          --M == 0 ? (q.removeEventListener(y, Ii), v.delete(y), v.size === 0 && $o.delete(q)) : v.set(y, M);
        }
      Ci.delete(p), f !== r && ((b = f.parentNode) == null || b.removeChild(f));
    };
  });
  return Li.set(d, l), d;
}
let Li = /* @__PURE__ */ new WeakMap();
function Ad(e, t) {
  const r = Li.get(e);
  return r ? (Li.delete(e), r(t)) : Promise.resolve();
}
var jt, Lt, tt, Br, so, lo, Wo;
class Hs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, jt, /* @__PURE__ */ new Map());
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
    I(this, Lt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, tt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Br, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, so, !0);
    /**
     * @param {Batch} batch
     */
    I(this, lo, (t) => {
      if (u(this, jt).has(t)) {
        var r = (
          /** @type {Key} */
          u(this, jt).get(t)
        ), n = u(this, Lt).get(r);
        if (n)
          Ji(n), u(this, Br).delete(r);
        else {
          var o = u(this, tt).get(r);
          o && (u(this, Lt).set(r, o.effect), u(this, tt).delete(r), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), n = o.effect);
        }
        for (const [i, a] of u(this, jt)) {
          if (u(this, jt).delete(i), i === t)
            break;
          const s = u(this, tt).get(a);
          s && (Ie(s.effect), u(this, tt).delete(a));
        }
        for (const [i, a] of u(this, Lt)) {
          if (i === r || u(this, Br).has(i)) continue;
          const s = () => {
            if (Array.from(u(this, jt).values()).includes(i)) {
              var l = document.createDocumentFragment();
              Qi(a, l), l.append(wt()), u(this, tt).set(i, { effect: a, fragment: l });
            } else
              Ie(a);
            u(this, Br).delete(i), u(this, Lt).delete(i);
          };
          u(this, so) || !n ? (u(this, Br).add(i), Fr(a, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Wo, (t) => {
      u(this, jt).delete(t);
      const r = Array.from(u(this, jt).values());
      for (const [n, o] of u(this, tt))
        r.includes(n) || (Ie(o.effect), u(this, tt).delete(n));
    });
    this.anchor = t, A(this, so, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      L
    ), o = qs();
    if (r && !u(this, Lt).has(t) && !u(this, tt).has(t))
      if (o) {
        var i = document.createDocumentFragment(), a = wt();
        i.append(a), u(this, tt).set(t, {
          effect: ut(() => r(a)),
          fragment: i
        });
      } else
        u(this, Lt).set(
          t,
          ut(() => r(this.anchor))
        );
    if (u(this, jt).set(n, t), o) {
      for (const [s, d] of u(this, Lt))
        s === t ? n.unskip_effect(d) : n.skip_effect(d);
      for (const [s, d] of u(this, tt))
        s === t ? n.unskip_effect(d.effect) : n.skip_effect(d.effect);
      n.oncommit(u(this, lo)), n.ondiscard(u(this, Wo));
    } else
      Z && (this.anchor = F), u(this, lo).call(this, n);
  }
}
jt = new WeakMap(), Lt = new WeakMap(), tt = new WeakMap(), Br = new WeakMap(), so = new WeakMap(), lo = new WeakMap(), Wo = new WeakMap();
function Cd(e, t, ...r) {
  var n = new Hs(e);
  ti(() => {
    const o = t() ?? null;
    n.ensure(o, o && ((i) => o(i, ...r)));
  }, Hr);
}
function Gs(e) {
  Ve === null && Il(), js(() => {
    const t = Xr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function rt(e, t, r = !1) {
  var n;
  Z && (n = F, Zo());
  var o = new Hs(e), i = r ? Hr : 0;
  function a(s, d) {
    if (Z) {
      var l = Xa(
        /** @type {TemplateNode} */
        n
      );
      if (s !== parseInt(l.substring(1))) {
        var f = Lo();
        Fe(f), o.anchor = f, or(!1), o.ensure(s, d), or(!0);
        return;
      }
    }
    o.ensure(s, d);
  }
  ti(() => {
    var s = !1;
    t((d, l = 0) => {
      s = !0, a(l, d);
    }), s || a(-1, null);
  }, i);
}
function Id(e, t, r) {
  for (var n = [], o = t.length, i, a = t.length, s = 0; s < o; s++) {
    let w = t[s];
    Fr(
      w,
      () => {
        if (i) {
          if (i.pending.delete(w), i.done.add(w), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Oi(e, Ho(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var d = n.length === 0 && r !== null;
    if (d) {
      var l = (
        /** @type {Element} */
        r
      ), f = (
        /** @type {Element} */
        l.parentNode
      );
      _s(f), f.append(l), e.items.clear();
    }
    Oi(e, t, !d);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Oi(e, t, r = !0) {
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
  for (var o = 0; o < t.length; o++) {
    var i = t[o];
    if (n != null && n.has(i)) {
      i.f |= Ot;
      const a = document.createDocumentFragment();
      Qi(i, a);
    } else
      Ie(t[o], r);
  }
}
var _a;
function Qn(e, t, r, n, o, i = null) {
  var a = e, s = /* @__PURE__ */ new Map(), d = (t & Ba) !== 0;
  if (d) {
    var l = (
      /** @type {Element} */
      e
    );
    a = Z ? Fe(/* @__PURE__ */ Yr(l)) : l.appendChild(wt());
  }
  Z && Zo();
  var f = null, w = /* @__PURE__ */ ps(() => {
    var S = r();
    return Va(S) ? S : S == null ? [] : Ho(S);
  }), p, y = /* @__PURE__ */ new Map(), v = !0;
  function M(S) {
    (O.effect.f & pt) === 0 && (O.pending.delete(S), O.fallback = f, Ld(O, p, a, t, n), f !== null && (p.length === 0 ? (f.f & Ot) === 0 ? Ji(f) : (f.f ^= Ot, Un(f, null, a)) : Fr(f, () => {
      f = null;
    })));
  }
  function b(S) {
    O.pending.delete(S);
  }
  var q = ti(() => {
    p = /** @type {V[]} */
    c(w);
    var S = p.length;
    let B = !1;
    if (Z) {
      var ae = Xa(a) === Bi;
      ae !== (S === 0) && (a = Lo(), Fe(a), or(!1), B = !0);
    }
    for (var X = /* @__PURE__ */ new Set(), K = (
      /** @type {Batch} */
      L
    ), oe = qs(), we = 0; we < S; we += 1) {
      Z && F.nodeType === ho && /** @type {Comment} */
      F.data === Wi && (a = /** @type {Comment} */
      F, B = !0, or(!1));
      var P = p[we], Re = n(P, we), fe = v ? null : s.get(Re);
      fe ? (fe.v && En(fe.v, P), fe.i && En(fe.i, we), oe && K.unskip_effect(fe.e)) : (fe = Od(
        s,
        v ? a : _a ?? (_a = wt()),
        P,
        Re,
        we,
        o,
        t,
        r
      ), v || (fe.e.f |= Ot), s.set(Re, fe)), X.add(Re);
    }
    if (S === 0 && i && !f && (v ? f = ut(() => i(a)) : (f = ut(() => i(_a ?? (_a = wt()))), f.f |= Ot)), S > X.size && Ol(), Z && S > 0 && Fe(Lo()), !v)
      if (y.set(K, X), oe) {
        for (const [it, vt] of s)
          X.has(it) || K.skip_effect(vt.e);
        K.oncommit(M), K.ondiscard(b);
      } else
        M(K);
    B && or(!0), c(w);
  }), O = { effect: q, items: s, pending: y, outrogroups: null, fallback: f };
  v = !1, Z && (a = F);
}
function Vn(e) {
  for (; e !== null && (e.f & zt) === 0; )
    e = e.next;
  return e;
}
function Ld(e, t, r, n, o) {
  var P, Re, fe, it, vt, Sr, Ft, Et, Vt;
  var i = (n & bl) !== 0, a = t.length, s = e.items, d = Vn(e.effect.first), l, f = null, w, p = [], y = [], v, M, b, q;
  if (i)
    for (q = 0; q < a; q += 1)
      v = t[q], M = o(v, q), b = /** @type {EachItem} */
      s.get(M).e, (b.f & Ot) === 0 && ((Re = (P = b.nodes) == null ? void 0 : P.a) == null || Re.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(b));
  for (q = 0; q < a; q += 1) {
    if (v = t[q], M = o(v, q), b = /** @type {EachItem} */
    s.get(M).e, e.outrogroups !== null)
      for (const je of e.outrogroups)
        je.pending.delete(b), je.done.delete(b);
    if ((b.f & ot) !== 0 && (Ji(b), i && ((it = (fe = b.nodes) == null ? void 0 : fe.a) == null || it.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(b))), (b.f & Ot) !== 0)
      if (b.f ^= Ot, b === d)
        Un(b, null, r);
      else {
        var O = f ? f.next : d;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), fr(e, f, b), fr(e, b, O), Un(b, O, r), f = b, p = [], y = [], d = Vn(f.next);
        continue;
      }
    if (b !== d) {
      if (l !== void 0 && l.has(b)) {
        if (p.length < y.length) {
          var S = y[0], B;
          f = S.prev;
          var ae = p[0], X = p[p.length - 1];
          for (B = 0; B < p.length; B += 1)
            Un(p[B], S, r);
          for (B = 0; B < y.length; B += 1)
            l.delete(y[B]);
          fr(e, ae.prev, X.next), fr(e, f, ae), fr(e, X, S), d = S, f = X, q -= 1, p = [], y = [];
        } else
          l.delete(b), Un(b, d, r), fr(e, b.prev, b.next), fr(e, b, f === null ? e.effect.first : f.next), fr(e, f, b), f = b;
        continue;
      }
      for (p = [], y = []; d !== null && d !== b; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(d), y.push(d), d = Vn(d.next);
      if (d === null)
        continue;
    }
    (b.f & Ot) === 0 && p.push(b), f = b, d = Vn(b.next);
  }
  if (e.outrogroups !== null) {
    for (const je of e.outrogroups)
      je.pending.size === 0 && (Oi(e, Ho(je.done)), (vt = e.outrogroups) == null || vt.delete(je));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || l !== void 0) {
    var K = [];
    if (l !== void 0)
      for (b of l)
        (b.f & ot) === 0 && K.push(b);
    for (; d !== null; )
      (d.f & ot) === 0 && d !== e.fallback && K.push(d), d = Vn(d.next);
    var oe = K.length;
    if (oe > 0) {
      var we = (n & Ba) !== 0 && a === 0 ? r : null;
      if (i) {
        for (q = 0; q < oe; q += 1)
          (Ft = (Sr = K[q].nodes) == null ? void 0 : Sr.a) == null || Ft.measure();
        for (q = 0; q < oe; q += 1)
          (Vt = (Et = K[q].nodes) == null ? void 0 : Et.a) == null || Vt.fix();
      }
      Id(e, K, we);
    }
  }
  i && ir(() => {
    var je, Ht;
    if (w !== void 0)
      for (b of w)
        (Ht = (je = b.nodes) == null ? void 0 : je.a) == null || Ht.apply();
  });
}
function Od(e, t, r, n, o, i, a, s) {
  var d = (a & gl) !== 0 ? (a & yl) === 0 ? /* @__PURE__ */ vs(r, !1, !1) : Ur(r) : null, l = (a & vl) !== 0 ? Ur(o) : null;
  return {
    v: d,
    i: l,
    e: ut(() => (i(t, d ?? r, l ?? o, s), () => {
      e.delete(n);
    }))
  };
}
function Un(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, o = e.nodes.end, i = t && (t.f & Ot) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(n)
      );
      if (i.before(n), n === o)
        return;
      n = a;
    }
}
function fr(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ea(e, t) {
  Xi(() => {
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
      const o = Ui("style");
      o.id = t.hash, o.textContent = t.code, n.appendChild(o);
    }
  });
}
function Us(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Us(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Dd() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Us(e)) && (n && (n += " "), n += t);
  return n;
}
function Nd(e) {
  return typeof e == "object" ? Dd(e) : e ?? "";
}
const qa = [...` 	
\r\f \v\uFEFF`];
function Bd(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var o of Object.keys(r))
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, a = 0; (a = n.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || qa.includes(n[a - 1])) && (s === n.length || qa.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
        }
  }
  return n === "" ? null : n;
}
function Sa(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var o of Object.keys(e)) {
    var i = e[o];
    i != null && i !== "" && (n += " " + o + ": " + i + r);
  }
  return n;
}
function mi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Wd(e, t) {
  if (t) {
    var r = "", n, o;
    if (Array.isArray(t) ? (n = t[0], o = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, d = [];
      n && d.push(...Object.keys(n).map(mi)), o && d.push(...Object.keys(o).map(mi));
      var l = 0, f = -1;
      const M = e.length;
      for (var w = 0; w < M; w++) {
        var p = e[w];
        if (s ? p === "/" && e[w - 1] === "*" && (s = !1) : i ? i === p && (i = !1) : p === "/" && e[w + 1] === "*" ? s = !0 : p === '"' || p === "'" ? i = p : p === "(" ? a++ : p === ")" && a--, !s && i === !1 && a === 0) {
          if (p === ":" && f === -1)
            f = w;
          else if (p === ";" || w === M - 1) {
            if (f !== -1) {
              var y = mi(e.substring(l, f).trim());
              if (!d.includes(y)) {
                p !== ";" && w++;
                var v = e.substring(l, w).trim();
                r += " " + v + ";";
              }
            }
            l = w + 1, f = -1;
          }
        }
      }
    }
    return n && (r += Sa(n)), o && (r += Sa(o, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function ht(e, t, r, n, o, i) {
  var a = e.__className;
  if (Z || a !== r || a === void 0) {
    var s = Bd(r, n, i);
    (!Z || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (i && o !== i)
    for (var d in i) {
      var l = !!i[d];
      (o == null || l !== !!o[d]) && e.classList.toggle(d, l);
    }
  return i;
}
function gi(e, t = {}, r, n) {
  for (var o in r) {
    var i = r[o];
    t[o] !== i && (r[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, n));
  }
}
function nt(e, t, r, n) {
  var o = e.__style;
  if (Z || o !== t) {
    var i = Wd(t, n);
    (!Z || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else n && (Array.isArray(n) ? (gi(e, r == null ? void 0 : r[0], n[0]), gi(e, r == null ? void 0 : r[1], n[1], "important")) : gi(e, r, n));
  return n;
}
const Fd = Symbol("is custom element"), Vd = Symbol("is html"), Hd = Za ? "link" : "LINK", Gd = Za ? "progress" : "PROGRESS";
function zo(e) {
  if (Z) {
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
    e.__on_r = r, ir(r), Ss();
  }
}
function Ud(e, t) {
  var r = Ys(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Gd) || (e.value = t ?? "");
}
function re(e, t, r, n) {
  var o = Ys(e);
  Z && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Hd) || o[t] !== (o[t] = r) && (t === "loading" && (e[Cl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Yd(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ys(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Fd]: e.nodeName.includes("-"),
      [Vd]: e.namespaceURI === Fa
    })
  );
}
var Ma = /* @__PURE__ */ new Map();
function Yd(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Ma.get(t);
  if (r) return r;
  Ma.set(t, r = []);
  for (var n, o = e, i = Element.prototype; i !== o; ) {
    n = zl(o);
    for (var a in n)
      n[a].set && r.push(a);
    o = Ha(o);
  }
  return r;
}
function vi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  md(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = bi(e) ? yi(i) : i, r(i), L !== null && n.add(L), await Md(), i !== (i = t())) {
      var a = e.selectionStart, s = e.selectionEnd, d = e.value.length;
      if (e.value = i ?? "", s !== null) {
        var l = e.value.length;
        a === s && s === d && l > d ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = a, e.selectionEnd = Math.min(s, l));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Z && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xr(t) == null && e.value) && (r(bi(e) ? yi(e.value) : e.value), L !== null && n.add(L)), ei(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        L
      );
      if (n.has(i))
        return;
    }
    bi(e) && o === yi(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function bi(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function yi(e) {
  return e === "" ? null : +e;
}
var mr, Sn, co, Fo, Zs;
const Vo = class Vo {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    I(this, Fo);
    /** */
    I(this, mr, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    I(this, Sn);
    /** @type {ResizeObserverOptions} */
    I(this, co);
    A(this, co, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = u(this, mr).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), u(this, mr).set(t, n), te(this, Fo, Zs).call(this).observe(t, u(this, co)), () => {
      var o = u(this, mr).get(t);
      o.delete(r), o.size === 0 && (u(this, mr).delete(t), u(this, Sn).unobserve(t));
    };
  }
};
mr = new WeakMap(), Sn = new WeakMap(), co = new WeakMap(), Fo = new WeakSet(), Zs = function() {
  return u(this, Sn) ?? A(this, Sn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        Vo.entries.set(r.target, r);
        for (var n of u(this, mr).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
ie(Vo, "entries", /* @__PURE__ */ new WeakMap());
let Di = Vo;
var Zd = /* @__PURE__ */ new Di({
  box: "border-box"
});
function ja(e, t, r) {
  var n = Zd.observe(e, () => r(e[t]));
  Xi(() => (Xr(() => r(e[t])), n));
}
function $a(e, t) {
  return e === t || (e == null ? void 0 : e[Xn]) === t;
}
function Ni(e = {}, t, r, n) {
  var o = (
    /** @type {ComponentContext} */
    Ve.r
  ), i = (
    /** @type {Effect} */
    V
  );
  return Xi(() => {
    var a, s;
    return ei(() => {
      a = s, s = [], Xr(() => {
        e !== r(...s) && (t(e, ...s), a && $a(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let d = i;
      for (; d !== o && d.parent !== null && d.parent.f & qi; )
        d = d.parent;
      const l = () => {
        s && $a(r(...s), e) && t(null, ...s);
      }, f = d.teardown;
      d.teardown = () => {
        l(), f == null || f();
      };
    };
  }), e;
}
function H(e, t, r, n) {
  var O;
  var o = (r & _l) !== 0, i = (r & ql) !== 0, a = (
    /** @type {V} */
    n
  ), s = !0, d = () => (s && (s = !1, a = i ? Xr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let l;
  if (o) {
    var f = Xn in e || Ya in e;
    l = ((O = Wr(e, t)) == null ? void 0 : O.set) ?? (f && t in e ? (S) => e[t] = S : void 0);
  }
  var w, p = !1;
  o ? [w, p] = rd(() => (
    /** @type {V} */
    e[t]
  )) : w = /** @type {V} */
  e[t], w === void 0 && n !== void 0 && (w = d(), l && (Vl(), l(w)));
  var y;
  if (y = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? d() : (s = !0, S);
  }, (r & kl) === 0)
    return y;
  if (l) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, B) {
        return arguments.length > 0 ? ((!B || v || p) && l(B ? y() : S), S) : y();
      })
    );
  }
  var M = !1, b = ((r & xl) !== 0 ? Jo : ps)(() => (M = !1, y()));
  o && c(b);
  var q = (
    /** @type {Effect} */
    V
  );
  return (
    /** @type {() => V} */
    (function(S, B) {
      if (arguments.length > 0) {
        const ae = B ? c(b) : o ? Cr(S) : S;
        return g(b, ae), M = !0, a !== void 0 && (a = ae), S;
      }
      return kr && M || (q.f & pt) !== 0 ? b.v : c(b);
    })
  );
}
function Xd(e) {
  return new Kd(e);
}
var rr, ct;
class Kd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    I(this, rr);
    /** @type {Record<string, any>} */
    I(this, ct);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (a, s) => {
      var d = /* @__PURE__ */ vs(s, !1, !1);
      return r.set(a, d), d;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return c(r.get(s) ?? n(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Ya ? !0 : (c(r.get(s) ?? n(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, d) {
          return g(r.get(s) ?? n(s, d), d), Reflect.set(a, s, d);
        }
      }
    );
    A(this, ct, (t.hydrate ? Rd : Fs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && W(), A(this, rr, o.$$events);
    for (const a of Object.keys(u(this, ct)))
      a === "$set" || a === "$destroy" || a === "$on" || Io(this, a, {
        get() {
          return u(this, ct)[a];
        },
        /** @param {any} value */
        set(s) {
          u(this, ct)[a] = s;
        },
        enumerable: !0
      });
    u(this, ct).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(o, a);
    }, u(this, ct).$destroy = () => {
      Ad(u(this, ct));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    u(this, ct).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    u(this, rr)[t] = u(this, rr)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return u(this, rr)[t].push(n), () => {
      u(this, rr)[t] = u(this, rr)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    u(this, ct).$destroy();
  }
}
rr = new WeakMap(), ct = new WeakMap();
let Xs;
typeof HTMLElement == "function" && (Xs = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    ie(this, "$$shadowRoot", null);
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
          const a = Ui("slot");
          o !== "default" && (a.name = o), ne(i, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Jd(this);
      for (const o of this.$$s)
        o in n && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Ao(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Xd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = bd(() => {
        ei(() => {
          var o;
          this.$$r = !0;
          for (const i of Co(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const a = Ao(
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
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const a = this.$$c.$on(o, i);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ao(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Co(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ao(e, t, r, n) {
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
function Jd(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ta(e, t, r, n, o, i) {
  let a = class extends Xs {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Co(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Co(t).forEach((s) => {
    Io(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(d) {
        var w;
        d = Ao(s, d, t), this.$$d[s] = d;
        var l = this.$$c;
        if (l) {
          var f = (w = Wr(l, s)) == null ? void 0 : w.get;
          f ? l[s] = d : l.$set({ [s]: d });
        }
      }
    });
  }), n.forEach((s) => {
    Io(a.prototype, s, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const z = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, E = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, za = (e) => `<g fill="#000">${e}</g>`, Qd = {
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
        svg: z(
          E(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: z(
          E(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: z(
          `${za('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${E(
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
        svg: z(
          E(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          `${E('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${za(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: z(
          E('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: z(
          E(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: z(
          E('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: z(
          E(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: z(E('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: z(
          E(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: z(
          E('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: z(E('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: z(
          E(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: z(E('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: z(
          E(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: z(
          E(
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
        svg: z(
          E(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: z(
          E('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: z(
          E('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: z(
          E('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: z(E('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: z(E('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: z(E('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: z(E('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: z(E('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: z(E('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: z(E('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: z(
          E('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: z(
          E('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: z(
          E('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: z(E('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: z(E('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function ec(e, t) {
  const r = Qd[e], n = r.variants;
  return (n[t ?? r.defaultVariant] ?? n[r.defaultVariant]).svg;
}
const Ea = /* @__PURE__ */ new Map();
function tc(e, t) {
  const r = `${e}:${t ?? "default"}`, n = Ea.get(r);
  if (n)
    return n;
  const o = ec(e, t), i = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return Ea.set(r, i), i;
}
var rc = /* @__PURE__ */ ue("<span></span>");
const nc = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function At(e, t) {
  Xo(t, !0), ea(e, nc);
  let r = H(t, "name", 7), n = H(t, "variant", 7), o = H(t, "decorative", 7, !0), i = H(t, "label", 7), a = H(t, "title", 7), s = H(t, "size", 7, "1rem"), d = H(t, "className", 7, ""), l = /* @__PURE__ */ U(() => tc(r(), n())), f = /* @__PURE__ */ U(() => i() ?? a() ?? r());
  var w = {
    get name() {
      return r();
    },
    set name(v) {
      r(v), W();
    },
    get variant() {
      return n();
    },
    set variant(v) {
      n(v), W();
    },
    get decorative() {
      return o();
    },
    set decorative(v = !0) {
      o(v), W();
    },
    get label() {
      return i();
    },
    set label(v) {
      i(v), W();
    },
    get title() {
      return a();
    },
    set title(v) {
      a(v), W();
    },
    get size() {
      return s();
    },
    set size(v = "1rem") {
      s(v), W();
    },
    get className() {
      return d();
    },
    set className(v = "") {
      d(v), W();
    }
  }, p = rc();
  let y;
  return Ce(
    (v) => {
      ht(p, 1, v, "svelte-1a09gvd"), re(p, "aria-hidden", o()), re(p, "aria-label", o() ? void 0 : c(f)), re(p, "role", o() ? void 0 : "img"), re(p, "title", a()), y = nt(p, "", y, { "--icon-mask": c(l), width: s(), height: s() });
    },
    [() => Nd(`app-icon ${d()}`.trim())]
  ), ne(e, p), Ko(w);
}
ta(
  At,
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
const ra = "efsdb:window-settings", Pa = {
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
      chromeTexture: !0,
      chromeBeamStyle: "windows-7",
      chromeBeamIntensity: 90,
      chromeGlossStyle: "windows-7",
      chromeGlossIntensity: 54,
      chromeGlossSpacing: 18,
      chromeColorize: !0,
      chromeColorSource: "accent",
      chromeColorIntensity: 58,
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
      chromeTexture: !0,
      chromeBeamStyle: "mica",
      chromeBeamIntensity: 74,
      chromeGlossStyle: "mica",
      chromeGlossIntensity: 58,
      chromeGlossSpacing: 26,
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
      chromeTexture: !0,
      chromeBeamStyle: "windows-9x",
      chromeBeamIntensity: 86,
      chromeGlossStyle: "none",
      chromeGlossIntensity: 0,
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
}, Ta = {
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
}, Y = {
  buttonLayout: "windows-11",
  systemButtonPlacement: "right",
  sideResizeMode: "anchored",
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
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
}, Do = /* @__PURE__ */ new Set();
let nr = Js();
function oc(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function ic(e, t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, t);
    } catch {
    }
}
function ac(e) {
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
      return Y.buttonLayout;
  }
}
function sc(e) {
  return e === "left" ? "left" : Y.systemButtonPlacement;
}
function lc(e) {
  return e === "mirrored" ? "mirrored" : Y.sideResizeMode;
}
function dc(e) {
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
      return Y.themePreset;
  }
}
function cc(e) {
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
      return Y.fontPreset;
  }
}
function hc(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return Y.shiftDragAction;
  }
}
function uc(e) {
  switch (e) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return e;
    default:
      return Y.chromeColorSource;
  }
}
function fc(e) {
  switch (e) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return e;
    default:
      return Y.chromeGlossStyle;
  }
}
function pc(e) {
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
      return Y.chromeBeamStyle;
  }
}
function wc(e) {
  switch (e) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return e;
    default:
      return Y.dockLabelMode;
  }
}
function mc(e) {
  return e === "expanded" ? "expanded" : Y.pageThemeSpread;
}
function Xe(e, t, r, n) {
  const o = Number(e);
  return Number.isFinite(o) ? Math.max(r, Math.min(n, Math.round(o))) : t;
}
function Ks(e) {
  const t = (e == null ? void 0 : e.chromeBeamStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.chromeGlossStyle) === "vista" || (e == null ? void 0 : e.chromeGlossStyle) === "windows-7" || (e == null ? void 0 : e.chromeGlossStyle) === "kde" || (e == null ? void 0 : e.chromeGlossStyle) === "mica" ? e.chromeGlossStyle : (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : (e == null ? void 0 : e.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : pc(e == null ? void 0 : e.chromeBeamStyle), r = (e == null ? void 0 : e.chromeGlossStyle) == null && (e != null && e.chromeTexture) ? (e == null ? void 0 : e.themePreset) === "windows-vista" ? "vista" : (e == null ? void 0 : e.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : fc(e == null ? void 0 : e.chromeGlossStyle);
  return {
    buttonLayout: ac(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: sc(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: lc(e == null ? void 0 : e.sideResizeMode),
    borderWidth: Xe(
      e == null ? void 0 : e.borderWidth,
      Y.borderWidth,
      0,
      12
    ),
    borderRadius: Xe(
      e == null ? void 0 : e.borderRadius,
      Y.borderRadius,
      0,
      32
    ),
    chromePadding: Xe(
      e == null ? void 0 : e.chromePadding,
      Y.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" || (e == null ? void 0 : e.chromeStyle) === "mica" || (e == null ? void 0 : e.chromeStyle) === "frost" || (e == null ? void 0 : e.chromeStyle) === "pane" ? e.chromeStyle : Y.chromeStyle,
    chromeTexture: t !== "none" || (typeof (e == null ? void 0 : e.chromeTexture) == "boolean" ? e.chromeTexture : Y.chromeTexture),
    chromeBeamStyle: t,
    chromeBeamIntensity: Xe(
      e == null ? void 0 : e.chromeBeamIntensity,
      Y.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: r,
    chromeGlossIntensity: Xe(
      e == null ? void 0 : e.chromeGlossIntensity,
      Y.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Xe(
      e == null ? void 0 : e.chromeGlossSpacing,
      Y.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (e == null ? void 0 : e.chromeColorize) == "boolean" ? e.chromeColorize : Y.chromeColorize,
    chromeColorSource: uc(e == null ? void 0 : e.chromeColorSource),
    chromeColorIntensity: Xe(
      e == null ? void 0 : e.chromeColorIntensity,
      Y.chromeColorIntensity,
      0,
      100
    ),
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : Y.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : Y.snapRestoreOnRelease,
    shiftDragAction: hc(e == null ? void 0 : e.shiftDragAction),
    themePreset: dc(e == null ? void 0 : e.themePreset),
    fontPreset: cc(e == null ? void 0 : e.fontPreset),
    globalEdgeDock: typeof (e == null ? void 0 : e.globalEdgeDock) == "boolean" ? e.globalEdgeDock : Y.globalEdgeDock,
    dockButtonSize: Xe(
      e == null ? void 0 : e.dockButtonSize,
      Y.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Xe(
      e == null ? void 0 : e.dockButtonWidth,
      Y.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Xe(
      e == null ? void 0 : e.dockIconScale,
      Y.dockIconScale,
      70,
      160
    ),
    dockGap: Xe(e == null ? void 0 : e.dockGap, Y.dockGap, 4, 24),
    dockOffset: Xe(e == null ? void 0 : e.dockOffset, Y.dockOffset, 8, 36),
    dockLabelMode: wc(e == null ? void 0 : e.dockLabelMode),
    pageThemeSpread: mc(e == null ? void 0 : e.pageThemeSpread)
  };
}
function gc(e) {
  return (Pa[e] ?? Pa.inherit).shadow;
}
function vc(e) {
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
function bc(e) {
  const t = e.chromeTexture ? Math.max(0, Math.min(1, e.chromeBeamIntensity / 100)) : 0, r = e.chromeTexture ? e.chromeBeamStyle : "none", o = `${(r === "vista" ? 0.98 : r === "windows-7" ? 0.94 : r === "xp-luna" ? 0.82 : r === "windows-9x" ? 0.72 : r === "kde" ? 0.7 : r === "mica" ? 0.62 : 0) * t}`, i = Math.max(0, Math.min(1, e.chromeGlossIntensity / 100)), a = e.chromeColorize ? `${Math.max(0, Math.min(0.88, e.chromeColorIntensity / 100))}` : "0", s = vc(e.chromeColorSource), d = {
    "--efs-window-chrome-texture-opacity": o,
    "--efs-window-chrome-beam-intensity": `${t}`,
    "--efs-window-chrome-gloss-intensity": `${i}`,
    "--efs-window-chrome-gloss-spacing": `${e.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": a,
    "--efs-window-chrome-tint": s,
    "--efs-widget-chrome-texture-opacity": o,
    "--efs-widget-chrome-beam-intensity": `${t}`,
    "--efs-widget-chrome-gloss-intensity": `${i}`,
    "--efs-widget-chrome-gloss-spacing": `${e.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": a,
    "--efs-widget-theme-tint": s
  };
  if (!e.chromeColorize)
    return d;
  const l = Xe(e.chromeColorIntensity, 48, 0, 100), f = Math.round(l / 100 * 34), w = Math.round(l / 100 * 26), p = Math.round(10 + l / 100 * 46), y = Math.round(6 + l / 100 * 32), v = Math.round(l / 100 * 28), M = Math.round(l / 100 * 22), b = Math.round(12 + l / 100 * 46), q = Math.round(10 + l / 100 * 34), O = Math.round(90 - l / 100 * 16), S = Math.round(92 - l / 100 * 18);
  return d["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - f}%, ${s} ${f}%)`, d["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - w}%, ${s} ${w}%)`, d["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - p}%, ${s} ${p}%)`, d["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - y}%, ${s} ${y}%)`, d["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${s}, transparent ${O}%), var(--efs-window-shell-shadow)`, d["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - v}%, ${s} ${v}%)`, d["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - M}%, ${s} ${M}%)`, d["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - b}%, ${s} ${b}%)`, d["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - q}%, ${s} ${q}%)`, d["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${s}, transparent ${S}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, d;
}
function Js() {
  const e = oc(ra);
  if (!e)
    return eo(Y), { ...Y };
  try {
    const t = JSON.parse(e), r = Ks(t);
    return eo(r), r;
  } catch {
    return eo(Y), { ...Y };
  }
}
function yc(e) {
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
function xi(e, t) {
  const r = e.documentElement.style, n = e.documentElement, o = t.chromeGlossStyle, i = t.chromeTexture ? t.chromeBeamStyle : "none", a = Math.max(t.dockButtonSize, t.dockButtonWidth), s = Ta[t.fontPreset] ?? Ta.system, d = gc(t.themePreset), l = bc(t), f = [
    "--efs-window-chrome-texture-opacity",
    "--efs-window-chrome-beam-intensity",
    "--efs-window-chrome-gloss-intensity",
    "--efs-window-chrome-gloss-spacing",
    "--efs-window-chrome-colorize-opacity",
    "--efs-window-chrome-tint",
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
    "--efs-widget-theme-panel",
    "--efs-widget-theme-surface",
    "--efs-widget-theme-border",
    "--efs-widget-theme-shadow",
    "--efs-widget-theme-hover"
  ];
  r.setProperty("--efs-font-sans", s.stack), r.setProperty("--shell-font-sans", s.stack), r.setProperty("--efs-window-font-family", s.stack), r.setProperty("--efs-window-border-width", `${t.borderWidth}px`), r.setProperty("--efs-window-radius", `${t.borderRadius}px`), r.setProperty("--efs-window-chrome-padding", `${t.chromePadding}px`), r.setProperty("--efs-window-system-button-placement", t.systemButtonPlacement), r.setProperty("--efs-window-side-resize-mode", t.sideResizeMode), r.setProperty("--efs-window-shell-shadow", d), r.setProperty("--efs-widget-border-width", `${t.borderWidth}px`), r.setProperty("--efs-widget-radius", `${t.borderRadius}px`), r.setProperty("--efs-widget-chrome-padding", `${t.chromePadding}px`), r.setProperty("--efs-widget-shadow", d), r.setProperty("--efs-dock-button-size", `${t.dockButtonSize}px`), r.setProperty("--efs-dock-button-width", `${a}px`), r.setProperty("--efs-dock-gap", `${t.dockGap}px`), r.setProperty("--efs-dock-offset", `${t.dockOffset}px`), r.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(t.dockButtonSize * 0.39))}px`
  ), r.setProperty("--efs-dock-icon-scale", `${t.dockIconScale / 100}`), r.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(a + t.dockButtonSize * 1.8))}px`
  ), r.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(t.dockButtonSize * 0.31))}px`
  ), r.setProperty("--efs-dock-label-mode", t.dockLabelMode), r.setProperty("--efs-dock-global-enabled", t.globalEdgeDock ? "1" : "0"), r.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), r.setProperty("--efs-page-theme-spread", t.pageThemeSpread), n.setAttribute("data-efs-page-theme", t.pageThemeSpread), n.setAttribute("data-efs-window-gloss", o), n.setAttribute("data-efs-window-beam", i), f.forEach((w) => r.removeProperty(w)), Object.entries(l).forEach(([w, p]) => r.setProperty(w, p));
}
function eo(e) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    xi(document, e);
    return;
  }
  let t = window;
  try {
    t = window.top ?? window;
  } catch {
    t = window;
  }
  const r = yc(t);
  if (r.length === 0) {
    xi(document, e);
    return;
  }
  r.forEach((n) => {
    try {
      xi(n.document, e);
    } catch {
    }
  });
}
function xc(e) {
  nr = Ks({
    ...nr,
    ...e
  }), eo(nr), ic(ra, JSON.stringify(nr)), Do.forEach((t) => t(nr));
}
function kc(e) {
  return Do.add(e), e(nr), () => {
    Do.delete(e);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  eo(nr);
}), window.addEventListener("efsdb-window-settings-sync", (e) => {
  const t = e.detail;
  !t || typeof t != "object" || xc(t);
}), window.addEventListener("storage", (e) => {
  e.key === ra && (nr = Js(), Do.forEach((t) => t(nr)));
}));
var _c = /* @__PURE__ */ ue('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), qc = /* @__PURE__ */ ue("<div><span></span></div>"), Sc = /* @__PURE__ */ ue('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Mc = /* @__PURE__ */ ue('<button type="button"><!></button>'), jc = /* @__PURE__ */ ue('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), $c = /* @__PURE__ */ ue('<!> <button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button>', 1), zc = /* @__PURE__ */ ue('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), Ec = /* @__PURE__ */ ue('<button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button> <!>', 1), Pc = /* @__PURE__ */ ue('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" class="window-button svelte-1k3ojqh" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-1k3ojqh"><!></div></div>'), Tc = /* @__PURE__ */ ue('<div class="window-content svelte-1k3ojqh"><!></div>'), Rc = /* @__PURE__ */ ue('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Ac = /* @__PURE__ */ ue("<!> <!> <div><!> <!> <!></div>", 1);
const Cc = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--efs-window-theme-panel, var(--shell-panel, rgba(15, 23, 42, 0.94)));--window-surface: var(--efs-window-theme-surface, var(--shell-surface, rgba(15, 23, 42, 0.98)));--window-border: var(--efs-window-theme-border, var(--shell-border, rgba(148, 163, 184, 0.24)));--window-hover: var(--efs-window-theme-hover, var(--shell-row-hover, rgba(125, 211, 252, 0.12)));--window-shadow: var(--efs-window-theme-shadow, var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42))));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-chrome-tint: var(--efs-window-chrome-tint, var(--window-primary));--window-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--window-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--window-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--window-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--window-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--window-control-size: 2.15rem;--window-aux-width: 2.35rem;--window-system-width: 2.75rem;--window-system-height: var(--window-control-size);--window-control-gap: 0.14rem;--window-control-radius: 10px;--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: 0.9rem;--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.58 + 0.04rem));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.32));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;isolation:isolate;min-width:min(100vw - 1rem, 18rem);min-height:0;border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow), inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
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
    );padding-top:var(--window-chrome-top-space);padding-bottom:var(--window-chrome-bottom-space);padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;overflow:hidden;background:transparent;}.window-shell[data-style='transparent'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:transparent;}.window-shell[data-style='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--window-panel), transparent 12%);}.window-shell[data-style='frost'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 18%);}.window-shell[data-style='pane'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-chrome.svelte-1k3ojqh::before,
  .window-chrome.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.window-chrome.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 88%), transparent 74%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 42%);opacity:var(--window-chrome-colorize-opacity);}.window-chrome.svelte-1k3ojqh::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34),
        rgba(255, 255, 255, 0.14) 18%,
        rgba(255, 255, 255, 0.04) 52%,
        transparent 82%
      ),
      radial-gradient(132% 118% at 12% -18%, rgba(255, 255, 255, 0.28), transparent 44%),
      radial-gradient(116% 94% at 100% 0%, rgba(255, 255, 255, 0.16), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.12) 38%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 80%
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.78);}.window-tools.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-button.svelte-1k3ojqh {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid
      color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);overflow:hidden;transition:background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;}.window-button.svelte-1k3ojqh::before,
  .window-button.svelte-1k3ojqh::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.window-button.svelte-1k3ojqh::before {background:linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 56%);opacity:calc(var(--window-chrome-colorize-opacity) * 0.72);}.window-button.svelte-1k3ojqh::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.28),
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.02) 76%,
        transparent 100%
      ),
      radial-gradient(130% 118% at 18% -24%, rgba(255, 255, 255, 0.18), transparent 46%),
      linear-gradient(
        118deg,
        transparent 16%,
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.03) 64%,
        transparent 86%
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.44);}.window-button.svelte-1k3ojqh .app-icon {position:relative;z-index:1;width:var(--window-icon-size);height:var(--window-icon-size);}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 68%);background:color-mix(in srgb, var(--window-hover), var(--window-chrome-tint) 16%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 56%);background:color-mix(in srgb, var(--window-chrome-tint), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;border-color:color-mix(in srgb, var(--window-border), transparent 24%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 12%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh,
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-1k3ojqh {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='aero'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 72%),
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-theme='aero'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.48),
        rgba(255, 255, 255, 0.22) 18%,
        rgba(255, 255, 255, 0.06) 56%,
        transparent 88%
      ),
      radial-gradient(134% 124% at 10% -20%, rgba(255, 255, 255, 0.38), transparent 42%),
      radial-gradient(92% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%),
      linear-gradient(
        112deg,
        transparent 12%,
        rgba(255, 255, 255, 0.16) 38%,
        rgba(255, 255, 255, 0.05) 58%,
        transparent 80%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.92);}.window-shell[data-theme='aero'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 24%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.08) 72%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 12%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.28);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.06) 72%),
      color-mix(in srgb, var(--window-panel), transparent 8%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.56),
        rgba(255, 255, 255, 0.28) 18%,
        rgba(255, 255, 255, 0.08) 58%,
        transparent 90%
      ),
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, 0.44), transparent 44%),
      radial-gradient(104% 118% at 100% 0%, rgba(255, 255, 255, 0.24), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.18) 36%,
        rgba(255, 255, 255, 0.06) 58%,
        transparent 82%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.96);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 18%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.1) 72%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 10%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.34),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 80%);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--window-panel), transparent 10%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),
      radial-gradient(
        124% 134% at 100% 0%,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 38%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, 0.1),
        transparent 28%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 84%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh {--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:color-mix(in srgb, var(--window-border), transparent 10%);}.window-shell[data-theme='windows-10-flat'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-system-height: 1.75rem;--window-system-icon-size: 0.76rem;--window-control-radius: 0;--window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));--window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));box-shadow:var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.45rem;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-system-height: 0.96rem;--window-system-icon-size: 0.48rem;--window-control-radius: 999px;--window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.55rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh):hover .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .minimize-button:where(.svelte-1k3ojqh) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .maximize-button:where(.svelte-1k3ojqh) {background:#28c840;}.window-shell[data-theme='ios'].svelte-1k3ojqh {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-1k3ojqh {--window-control-radius: 999px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));--window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));}.window-shell[data-theme='android'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh {--window-aux-width: 2.05rem;--window-control-size: 2rem;--window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='ubuntu-yaru'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh {--window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));--window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-1k3ojqh {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-shell[data-beam='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.54 + var(--window-beam-intensity) * 0.2)),
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.12)) 16%,
        rgba(255, 255, 255, calc(0.05 + var(--window-beam-intensity) * 0.04)) 46%,
        transparent 72%
      ),
      radial-gradient(
        156% 132% at 52% -36%,
        rgba(255, 255, 255, calc(0.52 + var(--window-beam-intensity) * 0.24)),
        transparent 38%
      ),
      radial-gradient(
        118% 118% at 100% 0%,
        rgba(255, 255, 255, calc(0.14 + var(--window-beam-intensity) * 0.12)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.18)) 20%,
        rgba(255, 255, 255, calc(0.06 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.52 + var(--window-beam-intensity) * 0.96),
      1
    );}.window-shell[data-beam='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.62 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.58 + var(--window-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        124% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.16)) 18%,
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 78%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.56 + var(--window-beam-intensity) * 1),
      1
    );}.window-shell[data-beam='xp-luna'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--window-chrome-tint) 12%),
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        148% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--window-chrome-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.1)) 22%,
        transparent 48%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 76%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.62 + var(--window-beam-intensity) * 0.88),
      1
    );}.window-shell[data-beam='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.16)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--window-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 72%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.78),
      1
    );}.window-shell[data-beam='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--window-beam-intensity) * 0.12)),
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.06)) 30%,
        transparent 78%
      ),
      radial-gradient(
        144% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 86%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 80%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.52 + var(--window-beam-intensity) * 0.82),
      1
    );}.window-shell[data-beam='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:radial-gradient(
        146% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.06)),
        transparent 76%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 90%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 42%
      );opacity:clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.74),
      1
    );}.window-shell[data-gloss='none'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='none'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {opacity:0;}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.3 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)) 58%,
        transparent 88%
      ),
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.22)), transparent 46%),
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.12)) calc(28% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(54% + var(--window-gloss-spacing) * 0.1),
        transparent 82%
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.02);}.window-shell[data-gloss='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.38 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.16 + var(--window-gloss-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.06)) 62%,
        transparent 90%
      ),
      radial-gradient(138% 128% at 8% -22%, rgba(255, 255, 255, calc(0.26 + var(--window-gloss-intensity) * 0.24)), transparent 46%),
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.14)) calc(30% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.05)) calc(56% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );opacity:calc(var(--window-chrome-texture-opacity) * 1.06);}.window-shell[data-gloss='kde'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.08)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.03)) 60%,
        transparent 86%
      ),
      radial-gradient(132% 116% at 14% -16%, rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.08)) calc(26% + var(--window-gloss-spacing) * 0.2),
        rgba(255, 255, 255, calc(0.015 + var(--window-gloss-intensity) * 0.03)) calc(58% + var(--window-gloss-spacing) * 0.12),
        transparent 86%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.94);}.window-shell[data-gloss='mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:radial-gradient(146% 120% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      radial-gradient(126% 136% at 100% 0%, color-mix(in srgb, var(--window-chrome-tint), transparent calc(92% - var(--window-gloss-intensity) * 10%)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.1 + var(--window-gloss-intensity) * 0.1)), rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.02)) 52%, transparent 82%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--window-gloss-intensity) * 0.02)) calc(58% + var(--window-gloss-spacing) * 0.1),
        transparent 86%
      );opacity:calc(var(--window-chrome-texture-opacity) * 0.96);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.08)) 72%,
        transparent 100%
      ),
      color-mix(in srgb, var(--window-panel), transparent 10%);}.window-shell[data-gloss='windows-7'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='vista'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='kde'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-gloss='mica'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.06)) 44%,
        transparent 100%
      ),
      radial-gradient(128% 118% at 18% -24%, rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.08)), transparent 46%),
      linear-gradient(
        130deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(40% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size: 1.86rem;--window-aux-width: 1.96rem;--window-system-width: 2.16rem;--window-control-gap: 0.06rem;}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}
  }`
};
function Qs(e, t) {
  Xo(t, !0), ea(e, Cc);
  let r = H(t, "title", 7), n = H(t, "state", 15, "normal"), o = H(t, "x", 15, 100), i = H(t, "y", 15, 100), a = H(t, "width", 15, 600), s = H(t, "height", 15, 400), d = H(t, "locked", 7, !1), l = H(t, "chromeless", 7, !1), f = H(t, "buttonLayout", 7), w = H(t, "systemButtonPlacement", 7), p = H(t, "sideResizeMode", 7), y = H(t, "borderWidth", 7), v = H(t, "borderRadius", 7), M = H(t, "chromePadding", 7), b = H(t, "chromeStyle", 7), q = H(t, "alignment", 7), O = H(t, "themePreset", 7), S = H(t, "fontPreset", 7), B = H(t, "snapRestoreOnRelease", 7), ae = H(t, "shiftDragAction", 7), X = H(t, "zIndex", 7, 100), K = H(t, "pinned", 7, !1), oe = H(t, "dragSeed", 7, null), we = H(t, "onClose", 7), P = H(t, "onPinToggle", 7), Re = H(t, "onConsumeDragSeed", 7), fe = H(t, "onStateChange", 7), it = H(t, "children", 7);
  const vt = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], Sr = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), Ft = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], Et = 360, Vt = 240, je = 44, Ht = 1400;
  let ve = /* @__PURE__ */ D(Cr({ ...Y })), Tn = /* @__PURE__ */ D(!1), ar = /* @__PURE__ */ D(!1), at = /* @__PURE__ */ D(null), st = /* @__PURE__ */ D(null), sr = /* @__PURE__ */ D(null), Kr = /* @__PURE__ */ D(null), Jr = /* @__PURE__ */ D(0), Mr = /* @__PURE__ */ D(0), Gt = "", Rn = 0, fo = 0, Qr = 0, x = 0, j = 0, G = 0, C = "se", ee = null, ke = !1, Le = !1, Ut = 0.5, en = 18, lr = !1, dr = /* @__PURE__ */ D(null), Yt = 0, bt = /* @__PURE__ */ D(null), po = /* @__PURE__ */ D(0), tn = /* @__PURE__ */ D(0);
  Gs(() => {
    const h = requestAnimationFrame(() => {
      g(Tn, !0);
    }), m = kc(($) => {
      g(ve, { ...$ }, !0);
    });
    return () => {
      cancelAnimationFrame(h), m(), Nn(), Yt && typeof window < "u" && window.clearTimeout(Yt);
    };
  });
  let $e = /* @__PURE__ */ U(() => f() ?? c(ve).buttonLayout), wo = /* @__PURE__ */ U(() => w() ?? c(ve).systemButtonPlacement), mo = /* @__PURE__ */ U(() => p() ?? c(ve).sideResizeMode), rn = /* @__PURE__ */ U(() => y() ?? c(ve).borderWidth), ri = /* @__PURE__ */ U(() => v() ?? c(ve).borderRadius), ni = /* @__PURE__ */ U(() => M() ?? c(ve).chromePadding), go = /* @__PURE__ */ U(() => b() ?? c(ve).chromeStyle), vo = /* @__PURE__ */ U(() => c(ve).chromeTexture ? c(ve).chromeBeamStyle : "none"), bo = /* @__PURE__ */ U(() => c(ve).chromeGlossStyle), nn = /* @__PURE__ */ U(() => q() ?? c(ve).alignment), oi = /* @__PURE__ */ U(() => O() ?? c(ve).themePreset), ii = /* @__PURE__ */ U(() => S() ?? c(ve).fontPreset), _e = /* @__PURE__ */ U(() => B() ?? c(ve).snapRestoreOnRelease), ze = /* @__PURE__ */ U(() => ae() ?? c(ve).shiftDragAction), me = /* @__PURE__ */ U(() => a() < 560 ? "left" : c(nn)), J = /* @__PURE__ */ U(() => a() < 520), Ee = /* @__PURE__ */ U(() => Math.max(c(po), c(tn)) + (c(J) ? 12 : 18));
  function He(h) {
    return Sr.has(h);
  }
  function lt(h) {
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
  function Ge(h, m = !1) {
    if (m)
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
  function Zt(h, m = !1) {
    if (m)
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
  let be = /* @__PURE__ */ D(!1), Oe = 0, Pt = 0, Tt = 0, Rt = 0, jr = /* @__PURE__ */ U(() => c(be) && !l() && !d() && c($e) !== "mac" && typeof window < "u" && c(Mr) <= 84 && Math.abs(c(Jr) - window.innerWidth / 2) <= 232), yt = /* @__PURE__ */ U(() => c(at) ? Cn(c(at)) : null);
  function xt(h) {
    var m;
    n() !== h && (n(h), (m = fe()) == null || m(n()));
  }
  function $r() {
    return { x: o(), y: i(), width: a(), height: s() };
  }
  function on(h, m = a()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerWidth - m, h));
  }
  function an(h, m = s()) {
    return typeof window > "u" ? Math.max(0, h) : Math.max(0, Math.min(window.innerHeight - Math.min(m, je), h));
  }
  function kt(h) {
    const m = Math.max(Et, Math.round(h.width)), $ = Math.max(Vt, Math.round(h.height));
    return {
      x: on(Math.round(h.x), m),
      y: an(Math.round(h.y), $),
      width: m,
      height: $
    };
  }
  function sn() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : kt({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function yo(h) {
    const m = kt(h);
    o(m.x), i(m.y), a(m.width), s(m.height), g(st, null), xt("normal");
  }
  function An() {
    yo(c(sr) ?? sn());
  }
  function Cn(h) {
    if (typeof window > "u") return null;
    const m = window.innerWidth, $ = window.innerHeight, R = Math.round(m / 2), se = Math.round($ / 2);
    switch (h) {
      case "maximize":
        return { x: 0, y: 0, width: m, height: $ };
      case "left-half":
        return { x: 0, y: 0, width: R, height: $ };
      case "right-half":
        return {
          x: m - R,
          y: 0,
          width: R,
          height: $
        };
      case "top-left":
        return { x: 0, y: 0, width: R, height: se };
      case "top-right":
        return {
          x: m - R,
          y: 0,
          width: R,
          height: se
        };
      case "bottom-left":
        return {
          x: 0,
          y: $ - se,
          width: R,
          height: se
        };
      case "bottom-right":
        return {
          x: m - R,
          y: $ - se,
          width: R,
          height: se
        };
    }
  }
  function zr(h, m = $r()) {
    if (g(sr, kt(m), !0), h === "maximize") {
      typeof window < "u" && (o(0), i(0), a(window.innerWidth), s(window.innerHeight)), g(st, "maximize"), xt("maximized");
      return;
    }
    const $ = Cn(h);
    $ && (g(st, h, !0), xt("normal"), o($.x), i($.y), a($.width), s($.height));
  }
  function ai() {
    typeof window > "u" || ((n() === "maximized" || c(st)) && An(), o(on(Math.round((window.innerWidth - a()) / 2), a())), i(an(Math.round((window.innerHeight - s()) / 2), s())));
  }
  function cr() {
    if (n() === "maximized") {
      An();
      return;
    }
    zr("maximize");
  }
  function si() {
    xt(n() === "rolled-up" ? "normal" : "rolled-up");
  }
  function ln() {
    xt("minimized");
  }
  function li() {
    g(dr, null), Yt && typeof window < "u" && window.clearTimeout(Yt), Yt = 0;
  }
  function In(h) {
    if (typeof window > "u") {
      g(dr, h, !0);
      return;
    }
    li(), g(dr, h, !0), Yt = window.setTimeout(
      () => {
        g(dr, null), Yt = 0;
      },
      Ht
    );
  }
  function di() {
    var se, he;
    if (typeof window > "u" || !c(bt))
      return !1;
    const h = 24, m = Math.ceil(Math.max(c(bt).scrollWidth, ((se = c(bt).firstElementChild) == null ? void 0 : se.scrollWidth) ?? 0)), $ = Math.ceil(Math.max(c(bt).scrollHeight, ((he = c(bt).firstElementChild) == null ? void 0 : he.scrollHeight) ?? 0)), R = kt({
      x: Math.round((window.innerWidth - m) / 2),
      y: Math.round((window.innerHeight - $ - je) / 2),
      width: Math.min(window.innerWidth - h * 2, Math.max(Et, m + c(rn) * 2)),
      height: Math.min(window.innerHeight - h * 2, Math.max(Vt, $ + je + c(rn) * 2))
    });
    return g(sr, $r(), !0), yo(R), !0;
  }
  function xo(h) {
    if (d() || l() || Ln(h.target))
      return;
    if (c(dr) === "fit-content") {
      In("maximize"), cr();
      return;
    }
    const m = di();
    In(m ? "fit-content" : "maximize"), m || cr();
  }
  function Ln(h) {
    return !!(h != null && h.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function ko(h, m) {
    if (!c(Kr)) return null;
    for (const $ of c(Kr).querySelectorAll("[data-snap-target]")) {
      const R = $.getBoundingClientRect();
      if (h >= R.left && h <= R.right && m >= R.top && m <= R.bottom)
        return $.dataset.snapTarget;
    }
    return null;
  }
  function _o(h, m) {
    if (typeof window > "u") return null;
    const $ = 18, R = Math.max(72, Math.round(window.innerHeight * 0.14));
    return m <= $ ? h <= window.innerWidth * 0.33 ? "top-left" : h >= window.innerWidth * 0.67 ? "top-right" : "maximize" : h <= $ ? m <= R ? "top-left" : m >= window.innerHeight - R ? "bottom-left" : "left-half" : h >= window.innerWidth - $ ? m <= R ? "top-right" : m >= window.innerHeight - R ? "bottom-right" : "right-half" : null;
  }
  function On(h, m) {
    if (g(Jr, h, !0), g(Mr, m, !0), !c(be) || d() || l() || c($e) === "mac") {
      g(at, null);
      return;
    }
    g(at, ko(h, m) ?? _o(h, m), !0);
  }
  function qo(h, m) {
    if (!Le) return;
    const $ = c(sr) ?? sn(), R = kt({
      ...$,
      x: h - $.width * Ut,
      y: m - en
    });
    o(R.x), i(R.y), a(R.width), s(R.height), xt("normal"), g(st, null), Le = !1, ke = !0, Oe = h, Pt = m, Tt = o(), Rt = i();
  }
  function So(h) {
    !h.shiftKey || lr || c(ze) !== "pin" || !P() || K() || (P()(), lr = !0);
  }
  function Mo(h) {
    if (d() || l() || n() === "minimized" || Ln(h.target)) return;
    g(be, !0), lr = !1, g(at, null), g(Jr, h.clientX, !0), g(Mr, h.clientY, !0), Oe = h.clientX, Pt = h.clientY, Tt = o(), Rt = i(), ke = !1, Le = !1;
    const m = $r();
    Ut = m.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (h.clientX - m.x) / m.width)), en = Math.max(12, Math.min(28, Math.round(h.clientY - m.y || 18))), n() === "maximized" || c(st) ? (ee = n() === "maximized" ? "maximize" : c(st), g(sr, c(sr) ?? sn(), !0), Le = !0) : ee = null, So(h), h.currentTarget.setPointerCapture(h.pointerId);
  }
  function dn(h) {
    c(be) && (So(h), Le && (Math.abs(h.clientX - Oe) > 2 || Math.abs(h.clientY - Pt) > 2) && qo(h.clientX, h.clientY), o(on(Tt + (h.clientX - Oe), a())), i(an(Rt + (h.clientY - Pt), s())), On(h.clientX, h.clientY));
  }
  function hr(h) {
    if (!c(be)) return;
    const m = c(at);
    g(at, null), g(be, !1), Le = !1, m ? zr(m, $r()) : ke && ee && c(_e) && !h.shiftKey && !lr ? zr(ee, $r()) : g(st, null), ee = null, ke = !1, lr = !1;
    const $ = h.currentTarget;
    "hasPointerCapture" in $ && $.hasPointerCapture(h.pointerId) && $.releasePointerCapture(h.pointerId), window.removeEventListener("pointermove", dn), window.removeEventListener("pointerup", hr), window.removeEventListener("pointercancel", hr);
  }
  function Xt(h, m) {
    d() || l() || n() === "maximized" || n() === "minimized" || (c(st) && g(st, null), m.stopPropagation(), m.preventDefault(), g(ar, !0), C = h, Rn = m.clientX, fo = m.clientY, Qr = o(), x = i(), j = a(), G = s(), g(at, null), window.addEventListener("pointermove", Dn), window.addEventListener("pointerup", Nn), window.addEventListener("pointercancel", Nn));
  }
  function Dn(h) {
    if (!c(ar)) return;
    const m = h.clientX - Rn, $ = h.clientY - fo;
    let R = Qr, se = x, he = j, De = G;
    if (c(mo) === "mirrored" && (C === "e" || C === "w")) {
      const Er = C === "e" ? m : -m;
      he = Math.max(Et, j + Er * 2), R = Qr - (he - j) / 2;
    } else C.includes("e") && (he = Math.max(Et, j + m));
    C.includes("s") && (De = Math.max(Vt, G + $)), c(mo) !== "mirrored" && C.includes("w") && (he = Math.max(Et, j - m), R = Qr + (j - he)), C.includes("n") && (De = Math.max(Vt, G - $), se = x + (G - De));
    const ur = kt({ x: R, y: se, width: he, height: De });
    o(ur.x), i(ur.y), a(ur.width), s(ur.height);
  }
  function Nn() {
    c(ar) && (g(ar, !1), window.removeEventListener("pointermove", Dn), window.removeEventListener("pointerup", Nn), window.removeEventListener("pointercancel", Nn));
  }
  function tl(h) {
    var $;
    if (typeof window > "u") return;
    const m = kt({
      x: h.clientX - Math.round(a() * 0.38),
      y: h.clientY - 18,
      width: a(),
      height: s()
    });
    o(m.x), i(m.y), Tt = o(), Rt = i(), Oe = h.clientX, Pt = h.clientY, g(Jr, h.clientX, !0), g(Mr, h.clientY, !0), g(at, null), ee = null, ke = !1, Le = !1, lr = !0, g(be, !0), window.addEventListener("pointermove", dn), window.addEventListener("pointerup", hr), window.addEventListener("pointercancel", hr), ($ = Re()) == null || $();
  }
  js(() => {
    const h = oe() ? `${oe().pointerId}:${oe().clientX}:${oe().clientY}` : "";
    !oe() || h === Gt || (Gt = h, tl(oe()));
  });
  var rl = {
    get title() {
      return r();
    },
    set title(h) {
      r(h), W();
    },
    get state() {
      return n();
    },
    set state(h = "normal") {
      n(h), W();
    },
    get x() {
      return o();
    },
    set x(h = 100) {
      o(h), W();
    },
    get y() {
      return i();
    },
    set y(h = 100) {
      i(h), W();
    },
    get width() {
      return a();
    },
    set width(h = 600) {
      a(h), W();
    },
    get height() {
      return s();
    },
    set height(h = 400) {
      s(h), W();
    },
    get locked() {
      return d();
    },
    set locked(h = !1) {
      d(h), W();
    },
    get chromeless() {
      return l();
    },
    set chromeless(h = !1) {
      l(h), W();
    },
    get buttonLayout() {
      return f();
    },
    set buttonLayout(h) {
      f(h), W();
    },
    get systemButtonPlacement() {
      return w();
    },
    set systemButtonPlacement(h) {
      w(h), W();
    },
    get sideResizeMode() {
      return p();
    },
    set sideResizeMode(h) {
      p(h), W();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(h) {
      y(h), W();
    },
    get borderRadius() {
      return v();
    },
    set borderRadius(h) {
      v(h), W();
    },
    get chromePadding() {
      return M();
    },
    set chromePadding(h) {
      M(h), W();
    },
    get chromeStyle() {
      return b();
    },
    set chromeStyle(h) {
      b(h), W();
    },
    get alignment() {
      return q();
    },
    set alignment(h) {
      q(h), W();
    },
    get themePreset() {
      return O();
    },
    set themePreset(h) {
      O(h), W();
    },
    get fontPreset() {
      return S();
    },
    set fontPreset(h) {
      S(h), W();
    },
    get snapRestoreOnRelease() {
      return B();
    },
    set snapRestoreOnRelease(h) {
      B(h), W();
    },
    get shiftDragAction() {
      return ae();
    },
    set shiftDragAction(h) {
      ae(h), W();
    },
    get zIndex() {
      return X();
    },
    set zIndex(h = 100) {
      X(h), W();
    },
    get pinned() {
      return K();
    },
    set pinned(h = !1) {
      K(h), W();
    },
    get dragSeed() {
      return oe();
    },
    set dragSeed(h = null) {
      oe(h), W();
    },
    get onClose() {
      return we();
    },
    set onClose(h) {
      we(h), W();
    },
    get onPinToggle() {
      return P();
    },
    set onPinToggle(h) {
      P(h), W();
    },
    get onConsumeDragSeed() {
      return Re();
    },
    set onConsumeDragSeed(h) {
      Re(h), W();
    },
    get onStateChange() {
      return fe();
    },
    set onStateChange(h) {
      fe(h), W();
    },
    get children() {
      return it();
    },
    set children(h) {
      it(h), W();
    }
  }, oa = Ac(), ia = mn(oa);
  {
    var nl = (h) => {
      var m = _c();
      let $;
      Ce(() => $ = nt(m, "", $, {
        left: `${c(yt).x}px`,
        top: `${c(yt).y}px`,
        width: `${c(yt).width}px`,
        height: `${c(yt).height}px`,
        "z-index": X() + 2
      })), ne(h, m);
    };
    rt(ia, (h) => {
      c(yt) && !l() && h(nl);
    });
  }
  var aa = T(ia, 2);
  {
    var ol = (h) => {
      var m = Sc();
      let $;
      Qn(m, 21, () => vt, (R) => R.id, (R, se) => {
        var he = qc();
        let De;
        var ur = _(he);
        k(he), Ce(() => {
          De = ht(he, 1, "snap-cell svelte-1k3ojqh", null, De, { "is-active": c(at) === c(se).id }), re(he, "data-snap-target", c(se).id), ht(ur, 1, `snap-shape shape-${c(se).preview}`, "svelte-1k3ojqh");
        }), ne(R, he);
      }), k(m), Ni(m, (R) => g(Kr, R), () => c(Kr)), Ce(() => $ = nt(m, "", $, { "z-index": X() + 3 })), ne(h, m);
    };
    rt(aa, (h) => {
      c(jr) && !l() && h(ol);
    });
  }
  var _t = T(aa, 2);
  let sa, la;
  var da = _(_t);
  {
    var il = (h) => {
      var m = Pc();
      let $;
      var R = _(m), se = _(R);
      {
        var he = (ye) => {
          var Ue = Mc();
          let qt;
          var Wn = _(Ue);
          At(Wn, { name: "pin" }), k(Ue), Ce(() => {
            qt = ht(Ue, 1, "window-button svelte-1k3ojqh", null, qt, { "is-active": K() }), re(Ue, "aria-label", K() ? "Unpin window" : "Pin window"), re(Ue, "aria-pressed", K());
          }), de("click", Ue, function(...Ye) {
            var cn;
            (cn = P()) == null || cn.apply(this, Ye);
          }), ne(ye, Ue);
        };
        rt(se, (ye) => {
          P() && ye(he);
        });
      }
      var De = T(se, 2), ur = _(De);
      At(ur, { name: "center" }), k(De);
      var Er = T(De, 2);
      let ha;
      var dl = _(Er);
      {
        let ye = /* @__PURE__ */ U(() => n() === "rolled-up" ? "roll-up" : "roll-down");
        At(dl, {
          get name() {
            return c(ye);
          }
        });
      }
      k(Er), k(R);
      var Bn = T(R, 2), cl = _(Bn, !0);
      k(Bn);
      var ci = T(Bn, 2), hl = _(ci);
      {
        var ul = (ye) => {
          var Ue = $c(), qt = mn(Ue);
          {
            var Wn = (Ae) => {
              var qe = jc(), ui = _(qe);
              {
                let Pr = /* @__PURE__ */ U(() => lt(c($e)));
                At(ui, {
                  name: "close",
                  get variant() {
                    return c(Pr);
                  }
                });
              }
              k(qe), de("click", qe, function(...Pr) {
                var Fn;
                (Fn = we()) == null || Fn.apply(this, Pr);
              }), ne(Ae, qe);
            };
            rt(qt, (Ae) => {
              we() && Ae(Wn);
            });
          }
          var Ye = T(qt, 2), cn = _(Ye);
          {
            let Ae = /* @__PURE__ */ U(() => n() === "minimized" ? "restore" : "minimize"), qe = /* @__PURE__ */ U(() => Ge(c($e), n() === "minimized"));
            At(cn, {
              get name() {
                return c(Ae);
              },
              get variant() {
                return c(qe);
              }
            });
          }
          k(Ye);
          var hn = T(Ye, 2), hi = _(hn);
          {
            let Ae = /* @__PURE__ */ U(() => n() === "maximized" ? "restore" : "maximize"), qe = /* @__PURE__ */ U(() => Zt(c($e), n() === "maximized"));
            At(hi, {
              get name() {
                return c(Ae);
              },
              get variant() {
                return c(qe);
              }
            });
          }
          k(hn), Ce(() => {
            re(Ye, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), re(hn, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), de("click", Ye, () => n() === "minimized" ? xt("normal") : ln()), de("click", hn, cr), ne(ye, Ue);
        }, fl = /* @__PURE__ */ U(() => He(c($e))), pl = (ye) => {
          var Ue = Ec(), qt = mn(Ue), Wn = _(qt);
          {
            let Ae = /* @__PURE__ */ U(() => n() === "minimized" ? "restore" : "minimize"), qe = /* @__PURE__ */ U(() => Ge(c($e), n() === "minimized"));
            At(Wn, {
              get name() {
                return c(Ae);
              },
              get variant() {
                return c(qe);
              }
            });
          }
          k(qt);
          var Ye = T(qt, 2), cn = _(Ye);
          {
            let Ae = /* @__PURE__ */ U(() => n() === "maximized" ? "restore" : "maximize"), qe = /* @__PURE__ */ U(() => Zt(c($e), n() === "maximized"));
            At(cn, {
              get name() {
                return c(Ae);
              },
              get variant() {
                return c(qe);
              }
            });
          }
          k(Ye);
          var hn = T(Ye, 2);
          {
            var hi = (Ae) => {
              var qe = zc(), ui = _(qe);
              {
                let Pr = /* @__PURE__ */ U(() => lt(c($e)));
                At(ui, {
                  name: "close",
                  get variant() {
                    return c(Pr);
                  }
                });
              }
              k(qe), de("click", qe, function(...Pr) {
                var Fn;
                (Fn = we()) == null || Fn.apply(this, Pr);
              }), ne(Ae, qe);
            };
            rt(hn, (Ae) => {
              we() && Ae(hi);
            });
          }
          Ce(() => {
            re(qt, "aria-label", n() === "minimized" ? "Restore window" : "Minimize window"), re(Ye, "aria-label", n() === "maximized" ? "Restore window" : "Maximize window");
          }), de("click", qt, () => n() === "minimized" ? xt("normal") : ln()), de("click", Ye, cr), ne(ye, Ue);
        };
        rt(hl, (ye) => {
          c(fl) ? ye(ul) : ye(pl, -1);
        });
      }
      k(ci), k(m), Ce(
        (ye) => {
          $ = ht(m, 1, `window-chrome chrome-${c(go) ?? ""}`, "svelte-1k3ojqh", $, ye), re(m, "aria-label", `${r()} window controls`), ha = ht(Er, 1, "window-button svelte-1k3ojqh", null, ha, { "is-active": n() === "rolled-up" }), re(Er, "aria-label", n() === "rolled-up" ? "Restore height" : "Roll up"), ht(Bn, 1, `window-title align-${c(me) ?? ""}`, "svelte-1k3ojqh"), re(Bn, "title", r()), Ne(cl, r());
        },
        [
          () => ({
            "layout-mac": He(c($e)),
            "layout-windows": !He(c($e))
          })
        ]
      ), de("pointerdown", m, Mo), de("pointermove", m, dn), de("pointerup", m, hr), $d("pointercancel", m, hr), de("dblclick", m, xo), de("click", De, ai), de("click", Er, si), ja(R, "clientWidth", (ye) => g(po, ye)), ja(ci, "clientWidth", (ye) => g(tn, ye)), ne(h, m);
    };
    rt(da, (h) => {
      l() || h(il);
    });
  }
  var ca = T(da, 2);
  {
    var al = (h) => {
      var m = Tc(), $ = _(m);
      Cd($, () => it() ?? gn), k(m), Ni(m, (R) => g(bt, R), () => c(bt)), ne(h, m);
    };
    rt(ca, (h) => {
      n() !== "rolled-up" && n() !== "minimized" && h(al);
    });
  }
  var sl = T(ca, 2);
  {
    var ll = (h) => {
      var m = Ws(), $ = mn(m);
      Qn($, 16, () => Ft, (R) => R, (R, se) => {
        var he = Rc();
        Ce(() => ht(he, 1, `resize-handle dir-${se}`, "svelte-1k3ojqh")), de("pointerdown", he, (De) => Xt(se, De)), ne(R, he);
      }), ne(h, m);
    };
    rt(sl, (h) => {
      !l() && n() !== "maximized" && n() !== "minimized" && h(ll);
    });
  }
  return k(_t), Ce(() => {
    sa = ht(_t, 1, "window-shell svelte-1k3ojqh", null, sa, {
      "is-ready": c(Tn),
      "is-dragging": c(be),
      "is-resizing": c(ar),
      "compact-controls": c(J),
      maximized: n() === "maximized",
      minimized: n() === "minimized",
      "rolled-up": n() === "rolled-up",
      chromeless: l()
    }), re(_t, "data-layout", c($e)), re(_t, "data-system-placement", c(wo)), re(_t, "data-style", c(go)), re(_t, "data-theme", c(oi)), re(_t, "data-font", c(ii)), re(_t, "data-beam", c(vo)), re(_t, "data-gloss", c(bo)), la = nt(_t, "", la, {
      "--window-border-width": `${c(rn)}px`,
      "--window-radius": `${c(ri)}px`,
      "--window-chrome-padding": `${c(ni)}px`,
      "--window-title-guard": `${c(Ee)}px`,
      transform: n() === "normal" || n() === "rolled-up" ? `translate(${o()}px, ${i()}px)` : void 0,
      width: n() === "normal" || n() === "rolled-up" ? `${a()}px` : void 0,
      height: n() === "normal" ? `${s()}px` : void 0,
      "z-index": X()
    });
  }), ne(e, oa), Ko(rl);
}
Bs([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
ta(
  Qs,
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
const ki = "efsdb:theme-studio", Yn = "#5b8cff", Zn = "light", fn = 66, pn = 56, Ic = [
  { id: "azure", label: "Azure Glass", seed: "#4f7cff", mode: "light", vividness: 68, contrast: 58 },
  { id: "violet", label: "Violet Signal", seed: "#7c5cff", mode: "dark", vividness: 72, contrast: 63 },
  { id: "mint", label: "Mint Grid", seed: "#14b8a6", mode: "light", vividness: 62, contrast: 54 },
  { id: "ember", label: "Ember Ops", seed: "#f97316", mode: "dark", vividness: 74, contrast: 67 },
  { id: "rose", label: "Rose Runtime", seed: "#e11d48", mode: "light", vividness: 69, contrast: 55 },
  { id: "gold", label: "Golden Build", seed: "#d4a017", mode: "dark", vividness: 58, contrast: 62 }
];
function Q(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function na(e) {
  const t = (e ?? "").trim().replace("#", "");
  return /^[0-9a-fA-F]{3}$/.test(t) ? `#${t.split("").map((r) => `${r}${r}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(t) ? `#${t.toLowerCase()}` : Yn;
}
function ro(e) {
  const t = na(e).slice(1), r = Number.parseInt(t, 16);
  return {
    r: r >> 16 & 255,
    g: r >> 8 & 255,
    b: r & 255
  };
}
function el(e, t, r) {
  return `#${(Q(Math.round(e), 0, 255) << 16 | Q(Math.round(t), 0, 255) << 8 | Q(Math.round(r), 0, 255)).toString(16).padStart(6, "0")}`;
}
function Lc(e, t, r) {
  const n = e / 255, o = t / 255, i = r / 255, a = Math.max(n, o, i), s = Math.min(n, o, i), d = a - s;
  let l = 0;
  const f = (a + s) / 2, w = d === 0 ? 0 : d / (1 - Math.abs(2 * f - 1));
  if (d !== 0) {
    switch (a) {
      case n:
        l = (o - i) / d % 6;
        break;
      case o:
        l = (i - n) / d + 2;
        break;
      default:
        l = (n - o) / d + 4;
        break;
    }
    l *= 60, l < 0 && (l += 360);
  }
  return {
    h: l,
    s: w * 100,
    l: f * 100
  };
}
function Oc(e, t, r) {
  const n = (e % 360 + 360) % 360, o = Q(t, 0, 100) / 100, i = Q(r, 0, 100) / 100, a = (1 - Math.abs(2 * i - 1)) * o, s = a * (1 - Math.abs(n / 60 % 2 - 1)), d = i - a / 2;
  let l = 0, f = 0, w = 0;
  return n < 60 ? (l = a, f = s) : n < 120 ? (l = s, f = a) : n < 180 ? (f = a, w = s) : n < 240 ? (f = s, w = a) : n < 300 ? (l = s, w = a) : (l = a, w = s), {
    r: (l + d) * 255,
    g: (f + d) * 255,
    b: (w + d) * 255
  };
}
function Hn(e, t, r) {
  const { r: n, g: o, b: i } = Oc(e, t, r);
  return el(n, o, i);
}
function le(e, t, r) {
  const n = ro(e), o = ro(t), i = Q(r, 0, 1);
  return el(
    n.r + (o.r - n.r) * i,
    n.g + (o.g - n.g) * i,
    n.b + (o.b - n.b) * i
  );
}
function Ze(e, t) {
  const { r, g: n, b: o } = ro(e);
  return `rgba(${r}, ${n}, ${o}, ${Q(t, 0, 1).toFixed(3)})`;
}
function Ra(e) {
  const { r: t, g: r, b: n } = ro(e), o = [t, r, n].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
}
function Aa(e, t) {
  const r = Ra(e), n = Ra(t), o = Math.max(r, n), i = Math.min(r, n);
  return (o + 0.05) / (i + 0.05);
}
function Ca(e, t = "#f8fbff", r = "#08111f") {
  return Aa(e, t) >= Aa(e, r) ? t : r;
}
function Ia(e, t, r, n, o) {
  const i = (e - t) / (r - t);
  return n + i * (o - n);
}
function Gn(e, t = Zn, r = fn, n = pn) {
  const o = na(e), i = ro(o), { h: a, s, l: d } = Lc(i.r, i.g, i.b), l = t === "dark", f = Ia(r, 0, 100, -16, 18), w = Ia(n, 0, 100, -12, 14), p = o, y = Hn(
    a,
    Q(s + 6 + f * 0.5, 18, 98),
    Q(d + (l ? 10 : -12) - w * 0.2, 16, 78)
  ), v = le(
    p,
    l ? "#0b1220" : "#ffffff",
    l ? 0.74 : 0.82
  ), M = Hn(
    a + 30,
    Q(s * 0.84 + f * 0.45, 18, 90),
    Q(d + (l ? 4 : -3), 18, 72)
  ), b = le(
    M,
    l ? "#0b1220" : "#ffffff",
    l ? 0.76 : 0.84
  ), q = Hn(
    a + 2,
    Q(8 + s * 0.08, 6, 18),
    l ? Q(10 + w * 0.34, 7, 18) : Q(98 - w * 0.24, 93, 99)
  ), O = Hn(
    a + 8,
    Q(10 + s * 0.1, 7, 20),
    l ? Q(14 + w * 0.38, 10, 23) : Q(95 - w * 0.18, 90, 97)
  ), S = Hn(
    a,
    Q(8 + s * 0.06, 5, 16),
    l ? Q(8 + w * 0.24, 5, 14) : Q(92 - w * 0.18, 88, 95)
  ), B = le(O, p, l ? 0.18 : 0.1), ae = le(B, y, 0.32), X = l ? "#e6eefc" : "#0f172a", K = l ? le(X, q, 0.45) : le(X, q, 0.58), oe = le(p, l ? "#ffffff" : "#0f172a", l ? 0.18 : 0.1), we = l ? "#3ddc97" : "#138a5b", P = l ? "#f6b73c" : "#b66a00", Re = l ? "#ff6b81" : "#c92a4b", fe = Ca(p), it = Ca(M), vt = l ? "0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)" : "0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)";
  return {
    seed: o,
    mode: t,
    vividness: Q(Math.round(r), 0, 100),
    contrast: Q(Math.round(n), 0, 100),
    accent: p,
    accentStrong: y,
    accentSoft: v,
    accentSecondary: M,
    accentSecondarySoft: b,
    surface: q,
    surfaceAlt: O,
    surfaceInset: S,
    border: B,
    borderStrong: ae,
    text: X,
    textMuted: K,
    onAccent: fe,
    onSecondary: it,
    focus: oe,
    success: we,
    warning: P,
    danger: Re,
    shadow: vt
  };
}
function Dc(e) {
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
function La(e, t = document.documentElement) {
  const r = e.mode === "dark", n = r ? `radial-gradient(circle at top left, ${Ze(e.accent, 0.14)}, transparent 28%), linear-gradient(180deg, ${le(e.surface, "#08111f", 0.28)} 0%, ${le(e.surfaceInset, "#020617", 0.46)} 100%)` : `radial-gradient(circle at top left, ${Ze(e.accent, 0.1)}, transparent 26%), linear-gradient(180deg, ${le(e.surfaceAlt, "#ffffff", 0.34)} 0%, ${le(e.surface, "#ffffff", 0.14)} 100%)`, o = r ? `radial-gradient(circle at 12% 18%, transparent 0 118px, ${Ze(e.accent, 0.08)} 119px 120px, transparent 121px), radial-gradient(circle at 78% 22%, transparent 0 184px, ${Ze(e.accentSecondary, 0.06)} 185px 186px, transparent 187px)` : `radial-gradient(circle at 18% 16%, transparent 0 126px, ${Ze(e.accent, 0.06)} 127px 128px, transparent 129px), radial-gradient(circle at 82% 18%, transparent 0 168px, ${Ze(e.accentSecondary, 0.05)} 169px 170px, transparent 171px)`, i = r ? Ze(e.surface, 0.9) : Ze(e.surface, 0.94), a = le(e.surfaceAlt, e.accentSoft, r ? 0.18 : 0.24), s = le(e.surfaceInset, e.accentSoft, r ? 0.1 : 0.14), d = le(s, e.borderStrong, r ? 0.26 : 0.22), l = r ? Ze(le(e.surface, e.accentSoft, 0.12), 0.88) : Ze(le(e.surface, e.accentSoft, 0.18), 0.94), f = le(e.surfaceAlt, e.accentSoft, r ? 0.3 : 0.42), w = le(e.surfaceInset, e.accentSoft, r ? 0.14 : 0.18), p = le(e.surfaceInset, r ? "#020617" : "#ffffff", r ? 0.28 : 0.2), y = r ? Ze(le(e.surface, "#020617", 0.18), 0.86) : Ze(le(e.surface, "#ffffff", 0.2), 0.96), v = le(e.surfaceAlt, e.accentSoft, r ? 0.24 : 0.28), M = Ze(e.text, r ? 0.2 : 0.16), b = {
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
    "--shell-soft-bg": a,
    "--shell-inset-bg": s,
    "--shell-inset-strong-bg": d,
    "--shell-nav-bg": l,
    "--shell-hover-bg": f,
    "--shell-row-hover": f,
    "--shell-code-bg": w,
    "--shell-pre-bg": p,
    "--shell-input-bg": y,
    "--shell-input-placeholder": e.textMuted,
    "--shell-shadow": e.shadow,
    "--shell-pill-text": e.onAccent,
    "--shell-nav-text": e.textMuted,
    "--shell-code-text": e.text,
    "--shell-chip-bg": v,
    "--shell-scrollbar": M,
    "--shell-border": e.border,
    "--shell-border-strong": e.borderStrong,
    "--shell-text": e.text,
    "--shell-text-strong": e.text,
    "--shell-muted": e.textMuted
  };
  Object.entries(b).forEach(([q, O]) => t.style.setProperty(q, O)), t.dataset.themeMode = e.mode, t.dataset.theme = e.mode, t.style.colorScheme = e.mode;
}
function Nc() {
  const e = Gn(Yn, Zn, fn, pn), { subscribe: t, set: r, update: n } = ed({
    seed: Yn,
    mode: Zn,
    vividness: fn,
    contrast: pn,
    palette: e,
    lastAppliedAt: null
  });
  return {
    subscribe: t,
    hydrate() {
      if (typeof window > "u") return;
      const o = window.localStorage.getItem(ki);
      if (o)
        try {
          const i = JSON.parse(o), a = na(i.seed), s = i.mode === "dark" ? "dark" : "light", d = Q(Number(i.vividness ?? fn), 0, 100), l = Q(Number(i.contrast ?? pn), 0, 100), f = Gn(a, s, d, l);
          r({
            seed: a,
            mode: s,
            vividness: d,
            contrast: l,
            palette: f,
            lastAppliedAt: typeof i.lastAppliedAt == "number" ? i.lastAppliedAt : null
          });
        } catch {
        }
    },
    reset() {
      const o = Gn(Yn, Zn, fn, pn), i = {
        seed: Yn,
        mode: Zn,
        vividness: fn,
        contrast: pn,
        palette: o,
        lastAppliedAt: null
      };
      typeof window < "u" && window.localStorage.setItem(ki, JSON.stringify(i)), r(i);
    },
    preview(o, i, a, s) {
      return Gn(o, i, a, s);
    },
    apply(o, i, a, s) {
      const d = Gn(o, i, a, s);
      return n(() => {
        const l = {
          seed: d.seed,
          mode: i,
          vividness: Q(a, 0, 100),
          contrast: Q(s, 0, 100),
          palette: d,
          lastAppliedAt: Date.now()
        };
        return typeof window < "u" && window.localStorage.setItem(ki, JSON.stringify(l)), l;
      }), d;
    }
  };
}
const pr = Nc();
var Bc = /* @__PURE__ */ ue('<button type="button"> </button>'), Wc = /* @__PURE__ */ ue(
  `<section class="hero-card svelte-1m44pqp"><div class="hero-glow svelte-1m44pqp"></div> <div class="hero-top svelte-1m44pqp"><div class="orb-wrap svelte-1m44pqp"><div class="theme-orb svelte-1m44pqp"></div></div> <div class="hero-copy svelte-1m44pqp"><h3 class="svelte-1m44pqp">Seed color</h3> <p class="svelte-1m44pqp">Pick one color and let the panel derive secondary accent, surfaces, borders, and
                    readable text automatically.</p></div></div> <div class="color-input-row svelte-1m44pqp"><label class="color-chip svelte-1m44pqp"><input type="color" aria-label="Choose seed color" class="svelte-1m44pqp"/> <span class="svelte-1m44pqp"></span></label> <label class="hex-field svelte-1m44pqp"><span class="svelte-1m44pqp">Hex</span> <input type="text" maxlength="7" spellcheck="false" class="svelte-1m44pqp"/></label> <div class="mode-toggle svelte-1m44pqp" role="tablist" aria-label="Theme mode"><button type="button">Light</button> <button type="button">Dark</button></div></div> <div class="slider-grid svelte-1m44pqp"><label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Vividness</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label> <label class="slider-card svelte-1m44pqp"><div class="slider-label-row svelte-1m44pqp"><span>Contrast</span> <strong> </strong></div> <input type="range" min="0" max="100" step="1" class="svelte-1m44pqp"/></label></div> <div class="swatch-row svelte-1m44pqp"><button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Accent</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Hover</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Secondary</small></button> <button type="button" class="swatch-card svelte-1m44pqp"><span class="swatch svelte-1m44pqp"></span> <small class="svelte-1m44pqp">Surface</small></button></div></section> <section class="preview-shell svelte-1m44pqp"><div class="preview-topbar svelte-1m44pqp"><div class="preview-dots svelte-1m44pqp"><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span><span class="svelte-1m44pqp"></span></div> <div class="preview-search svelte-1m44pqp">Search routes, layouts, content…</div> <button type="button" class="preview-ghost svelte-1m44pqp">Manage</button></div> <div class="preview-body svelte-1m44pqp"><aside class="preview-sidebar svelte-1m44pqp"><button type="button" class="sidebar-item active svelte-1m44pqp">Explorer</button> <button type="button" class="sidebar-item svelte-1m44pqp">Content</button> <button type="button" class="sidebar-item svelte-1m44pqp">Layouts</button> <button type="button" class="sidebar-item svelte-1m44pqp">Deployments</button></aside> <div class="preview-content svelte-1m44pqp"><div class="metric-row svelte-1m44pqp"><article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Primary Accent</small> <strong class="svelte-1m44pqp"> </strong></article> <article class="metric-card svelte-1m44pqp"><small class="svelte-1m44pqp">Secondary Accent</small> <strong class="svelte-1m44pqp"> </strong></article></div> <article class="callout-card svelte-1m44pqp"><div><small class="svelte-1m44pqp">Live Preview</small> <h4 class="svelte-1m44pqp">Shell-friendly theme tokens</h4> <p class="svelte-1m44pqp">This palette stays readable across surfaces while keeping the accent system
                        expressive enough for a real SaaS product.</p></div> <div class="callout-actions svelte-1m44pqp"><button type="button" class="primary-btn svelte-1m44pqp">Primary action</button> <button type="button" class="secondary-btn svelte-1m44pqp">Secondary</button></div></article></div></div></section>`,
  1
), Fc = /* @__PURE__ */ ue('<button type="button" class="preset-card svelte-1m44pqp"><div class="preset-band svelte-1m44pqp"><span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span> <span class="svelte-1m44pqp"></span></div> <div class="preset-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></button>'), Vc = /* @__PURE__ */ ue('<section class="preset-grid svelte-1m44pqp"></section>'), Hc = /* @__PURE__ */ ue('<div class="token-row svelte-1m44pqp"><div class="token-swatch svelte-1m44pqp"></div> <div class="token-copy svelte-1m44pqp"><strong> </strong> <small class="svelte-1m44pqp"> </small></div></div>'), Gc = /* @__PURE__ */ ue('<section class="token-list svelte-1m44pqp"></section>'), Uc = /* @__PURE__ */ ue('<div class="theme-panel svelte-1m44pqp" role="dialog" aria-label="Theme Studio"><header class="panel-status-row svelte-1m44pqp"><div class="panel-status-copy svelte-1m44pqp"><span class="panel-eyebrow svelte-1m44pqp"> </span> <h2 class="panel-title svelte-1m44pqp">Adaptive theme engine</h2> <p class="panel-summary svelte-1m44pqp"> </p></div> <span class="mode-pill svelte-1m44pqp"> </span></header> <div class="studio-tabs svelte-1m44pqp"></div> <div class="studio-scroll svelte-1m44pqp"><!> <!> <!></div> <footer class="panel-actions svelte-1m44pqp"><button type="button" class="ghost-btn svelte-1m44pqp">Reset</button> <button type="button" class="ghost-btn svelte-1m44pqp"> </button> <button type="button" class="primary-btn svelte-1m44pqp">Apply Theme</button></footer></div>'), Yc = /* @__PURE__ */ ue('<div class="theme-studio-window svelte-1m44pqp"><!></div>');
const Zc = {
  hash: "svelte-1m44pqp",
  code: `:host {position:relative;z-index:12060;isolation:isolate;}.theme-studio-window.svelte-1m44pqp {position:fixed;inset:0;z-index:12060;pointer-events:none;isolation:isolate;}.theme-studio-window.svelte-1m44pqp .window-shell {pointer-events:auto;--window-panel: var(--efs-window-theme-panel, var(--shell-panel-solid, #ffffff));--window-surface: var(--efs-window-theme-surface, var(--shell-panel-solid-subtle, #f8fafc));--window-border: var(--efs-window-theme-border, var(--shell-border, #dbe4f0));--window-control-size: 1.85rem;--window-aux-width: 1.92rem;--window-system-width: 2rem;--window-control-gap: 0.08rem;--window-control-radius: 9px;}.theme-studio-window.svelte-1m44pqp .window-chrome {min-height:2.25rem;padding-block:0.22rem;padding-inline:0.45rem 0.4rem;gap:0.45rem;}.theme-studio-window.svelte-1m44pqp .window-tools {gap:0.1rem;}.theme-studio-window.svelte-1m44pqp .window-tools .window-button:not(:first-child) {display:none;}.theme-studio-window.svelte-1m44pqp .system-controls .window-button:not(.close-button) {display:none;}.theme-studio-window.svelte-1m44pqp .window-title {font:var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.04em;}.theme-panel.svelte-1m44pqp {display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);font-family:"Segoe UI Variable", "Segoe UI", system-ui, sans-serif;}.panel-status-row.svelte-1m44pqp {display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:1rem 1rem 0.9rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 85%), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 78%),
      var(--preview-surface-alt, #f7faff);}.panel-status-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;min-width:0;}.panel-eyebrow.svelte-1m44pqp {color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.4 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.12em;text-transform:uppercase;}.panel-title.svelte-1m44pqp {margin:0;font:var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);color:var(--preview-text, #0f172a);}.panel-summary.svelte-1m44pqp {margin:0;color:var(--preview-text, #0f172a);font:var(--efs-font-body-sm, 13px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);}.mode-pill.svelte-1m44pqp {display:inline-flex;align-items:center;min-height:2rem;padding:0 0.75rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 4%);border-radius:999px;background:color-mix(in srgb, var(--preview-surface, #fff), var(--preview-accent, #5b8cff) 6%);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;color:var(--preview-text, #0f172a);}.studio-tabs.svelte-1m44pqp {display:flex;background:var(--preview-surface-inset, #eef3f8);border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);padding:0 0.75rem;gap:0.25rem;flex-shrink:0;}.studio-tab.svelte-1m44pqp {padding:0.75rem 1rem;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--preview-text-muted, #64748b);font:var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 0.18s ease;}.studio-tab.svelte-1m44pqp:hover,
  .studio-tab.active.svelte-1m44pqp {color:var(--preview-text, #0f172a);}.studio-tab.active.svelte-1m44pqp {border-bottom-color:var(--preview-accent, #5b8cff);}.studio-scroll.svelte-1m44pqp {flex:1;overflow-y:auto;background:var(--preview-surface-alt, #f8fafc);padding:1rem;display:flex;flex-direction:column;gap:1rem;}.hero-card.svelte-1m44pqp,
  .preview-shell.svelte-1m44pqp,
  .preset-card.svelte-1m44pqp,
  .token-row.svelte-1m44pqp {border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);border-radius:18px;box-shadow:var(--preview-shadow, 0 18px 60px rgba(15, 23, 42, 0.12));}.hero-card.svelte-1m44pqp {position:relative;overflow:hidden;padding:1rem;background:radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 80%), transparent 34%),
      radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--preview-secondary, #8b5cf6), transparent 86%), transparent 28%),
      var(--preview-surface, #ffffff);}.hero-glow.svelte-1m44pqp {position:absolute;inset:-10% 10% auto auto;width:10rem;height:10rem;border-radius:999px;background:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 76%);filter:blur(50px);opacity:0.9;pointer-events:none;}.hero-top.svelte-1m44pqp {position:relative;display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:center;margin-bottom:1rem;}.orb-wrap.svelte-1m44pqp {width:4.5rem;height:4.5rem;display:grid;place-items:center;border-radius:1.25rem;background:color-mix(in srgb, var(--preview-accent-soft, #e8efff), transparent 10%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 25%);}.theme-orb.svelte-1m44pqp {width:3.1rem;height:3.1rem;border-radius:999px;background:radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.88), transparent 22%),
      linear-gradient(145deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.45),
      0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 64%);}.hero-copy.svelte-1m44pqp h3:where(.svelte-1m44pqp) {margin:0 0 0.2rem;font-size:1rem;line-height:1.2;}.hero-copy.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.82rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.color-input-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;margin-bottom:0.9rem;align-items:center;}.color-chip.svelte-1m44pqp {width:3rem;height:3rem;border-radius:1rem;padding:0.2rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface-alt, #f8fafc);cursor:pointer;display:block;}.color-chip.svelte-1m44pqp input:where(.svelte-1m44pqp) {position:absolute;opacity:0;pointer-events:none;}.color-chip.svelte-1m44pqp span:where(.svelte-1m44pqp) {display:block;width:100%;height:100%;border-radius:0.8rem;background:linear-gradient(135deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));}.hex-field.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.3rem;}.hex-field.svelte-1m44pqp span:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp),
  .preview-search.svelte-1m44pqp {min-height:2.7rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #ffffff);color:var(--preview-text, #0f172a);border-radius:0.95rem;padding:0 0.9rem;font:inherit;outline:none;}.hex-field.svelte-1m44pqp input:where(.svelte-1m44pqp):focus {border-color:var(--preview-accent, #5b8cff);box-shadow:0 0 0 3px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 82%);}.mode-toggle.svelte-1m44pqp {display:inline-flex;padding:0.2rem;border-radius:999px;background:var(--preview-surface-inset, #eef3f8);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);gap:0.2rem;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp),
  .ghost-btn.svelte-1m44pqp,
  .primary-btn.svelte-1m44pqp,
  .secondary-btn.svelte-1m44pqp,
  .preview-ghost.svelte-1m44pqp,
  .sidebar-item.svelte-1m44pqp,
  .swatch-card.svelte-1m44pqp,
  .preset-card.svelte-1m44pqp {font:inherit;}.mode-toggle.svelte-1m44pqp button:where(.svelte-1m44pqp) {min-width:4.35rem;min-height:2.35rem;padding:0 0.85rem;border-radius:999px;border:none;background:transparent;color:var(--preview-text-muted, #64748b);cursor:pointer;}.mode-toggle.svelte-1m44pqp button.active:where(.svelte-1m44pqp) {background:var(--preview-accent, #5b8cff);color:var(--preview-on-accent, #ffffff);}.slider-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;margin-bottom:0.9rem;}.slider-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.55rem;padding:0.8rem 0.9rem;border-radius:1rem;background:color-mix(in srgb, var(--preview-surface-alt, #f8fafc), var(--preview-accent, #5b8cff) 4%);border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);}.slider-label-row.svelte-1m44pqp {display:flex;justify-content:space-between;gap:0.75rem;font-size:0.82rem;}input[type='range'].svelte-1m44pqp {width:100%;accent-color:var(--preview-accent, #5b8cff);}.swatch-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:0.6rem;}.swatch-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.4rem;padding:0.65rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);color:var(--preview-text, #0f172a);cursor:default;}.swatch.svelte-1m44pqp {height:2.35rem;border-radius:0.8rem;border:1px solid rgba(255, 255, 255, 0.28);}.swatch-card.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);font-size:0.74rem;}.preview-shell.svelte-1m44pqp {overflow:hidden;background:var(--preview-surface, #fff);}.preview-topbar.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr) auto;gap:0.75rem;align-items:center;padding:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface-alt, #f8fafc);}.preview-dots.svelte-1m44pqp {display:flex;gap:0.35rem;}.preview-dots.svelte-1m44pqp span:where(.svelte-1m44pqp) {width:0.62rem;height:0.62rem;border-radius:999px;background:var(--preview-border-strong, #c7d4e6);}.preview-search.svelte-1m44pqp {display:flex;align-items:center;color:var(--preview-text-muted, #64748b);font-size:0.82rem;}.preview-ghost.svelte-1m44pqp,
  .ghost-btn.svelte-1m44pqp,
  .secondary-btn.svelte-1m44pqp {min-height:2.5rem;padding:0 0.9rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);background:var(--preview-surface, #fff);color:var(--preview-text, #0f172a);cursor:pointer;}.preview-body.svelte-1m44pqp {display:grid;grid-template-columns:11rem minmax(0, 1fr);min-height:18rem;}.preview-sidebar.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.45rem;padding:0.9rem;background:var(--preview-surface-inset, #eef3f8);border-right:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.sidebar-item.svelte-1m44pqp {min-height:2.45rem;border-radius:0.9rem;border:1px solid transparent;background:transparent;color:var(--preview-text-muted, #64748b);text-align:left;padding:0 0.85rem;cursor:pointer;}.sidebar-item.active.svelte-1m44pqp {background:var(--preview-accent-soft, #e8efff);border-color:color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 75%);color:var(--preview-text, #0f172a);}.preview-content.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.85rem;padding:0.95rem;background:var(--preview-surface, #fff);}.metric-row.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.75rem;}.metric-card.svelte-1m44pqp,
  .callout-card.svelte-1m44pqp {border-radius:1rem;border:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);background:var(--preview-surface-alt, #f8fafc);}.metric-card.svelte-1m44pqp {padding:0.85rem 0.95rem;}.metric-card.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .callout-card.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .token-copy.svelte-1m44pqp small:where(.svelte-1m44pqp),
  .preset-copy.svelte-1m44pqp small:where(.svelte-1m44pqp) {color:var(--preview-text-muted, #64748b);}.metric-card.svelte-1m44pqp strong:where(.svelte-1m44pqp) {display:block;margin-top:0.25rem;}.callout-card.svelte-1m44pqp {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:1rem;align-items:center;padding:1rem;}.callout-card.svelte-1m44pqp h4:where(.svelte-1m44pqp) {margin:0.15rem 0 0.35rem;font-size:1rem;}.callout-card.svelte-1m44pqp p:where(.svelte-1m44pqp) {margin:0;font-size:0.83rem;line-height:1.55;color:var(--preview-text-muted, #64748b);}.callout-actions.svelte-1m44pqp {display:flex;gap:0.6rem;align-items:center;}.primary-btn.svelte-1m44pqp {min-height:2.6rem;padding:0 1rem;border-radius:0.95rem;border:1px solid color-mix(in srgb, var(--preview-accent-strong, #3b62db), transparent 18%);background:linear-gradient(
      180deg,
      color-mix(in srgb, var(--preview-accent, #5b8cff), white 8%),
      var(--preview-accent, #5b8cff)
    );color:var(--preview-on-accent, #ffffff);cursor:pointer;box-shadow:0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 72%);}.secondary-btn.svelte-1m44pqp {background:color-mix(in srgb, var(--preview-secondary-soft, #ede9fe), var(--preview-surface, #fff) 8%);}.preset-grid.svelte-1m44pqp {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.9rem;}.preset-card.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;padding:0.8rem;background:var(--preview-surface, #fff);cursor:pointer;text-align:left;}.preset-band.svelte-1m44pqp {display:grid;grid-template-columns:repeat(3, 1fr);gap:0.45rem;}.preset-band.svelte-1m44pqp span:where(.svelte-1m44pqp) {height:3rem;border-radius:0.9rem;}.preset-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.18rem;}.token-list.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.75rem;}.token-row.svelte-1m44pqp {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.8rem;align-items:center;padding:0.8rem;background:var(--preview-surface, #fff);}.token-swatch.svelte-1m44pqp {width:2.7rem;height:2.7rem;border-radius:0.95rem;border:1px solid rgba(255, 255, 255, 0.28);}.token-copy.svelte-1m44pqp {display:flex;flex-direction:column;gap:0.12rem;}.panel-actions.svelte-1m44pqp {display:flex;justify-content:flex-end;gap:0.65rem;padding:0.9rem 1rem 1rem;border-top:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);background:var(--preview-surface, #fff);}

  @media (max-width: 47.99rem) {.panel-status-row.svelte-1m44pqp,
    .hero-top.svelte-1m44pqp,
    .color-input-row.svelte-1m44pqp,
    .preview-body.svelte-1m44pqp,
    .callout-card.svelte-1m44pqp {grid-template-columns:1fr;display:flex;flex-direction:column;}.slider-grid.svelte-1m44pqp,
    .metric-row.svelte-1m44pqp,
    .preset-grid.svelte-1m44pqp,
    .swatch-row.svelte-1m44pqp {grid-template-columns:1fr;}.preview-sidebar.svelte-1m44pqp {border-right:0;border-bottom:1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);}.mode-pill.svelte-1m44pqp {align-self:flex-start;}.panel-actions.svelte-1m44pqp {flex-wrap:wrap;}
  }`
};
function Xc(e, t) {
  Xo(t, !0), ea(e, Zc);
  const r = 468, n = 696, o = 16, i = 12, a = 12060;
  let s = /* @__PURE__ */ D(!1), d = /* @__PURE__ */ D(!1), l = /* @__PURE__ */ D("normal"), f = /* @__PURE__ */ D("theme"), w = /* @__PURE__ */ D("toolbar"), p = /* @__PURE__ */ D(null), y = /* @__PURE__ */ D(null), v = /* @__PURE__ */ D(null), M = /* @__PURE__ */ D(i), b = /* @__PURE__ */ D(i), q = /* @__PURE__ */ D(r), O = /* @__PURE__ */ D(n), S = /* @__PURE__ */ D("#5b8cff"), B = /* @__PURE__ */ D("light"), ae = /* @__PURE__ */ D(66), X = /* @__PURE__ */ D(56), K = /* @__PURE__ */ D("Copy CSS"), oe = /* @__PURE__ */ D("One seed color drives the whole palette.");
  const we = [
    { id: "theme", label: "Theme" },
    { id: "presets", label: "Presets" },
    { id: "tokens", label: "Tokens" }
  ], P = /* @__PURE__ */ U(() => pr.preview(c(S), c(B), c(ae), c(X)));
  function Re(x) {
    if (!x || typeof x != "object")
      return null;
    const j = x, G = Number(j.left), C = Number(j.top), ee = Number(j.right), ke = Number(j.bottom), Le = Number(j.width), Ut = Number(j.height);
    return [G, C, ee, ke, Le, Ut].every(Number.isFinite) ? { left: G, top: C, right: ee, bottom: ke, width: Le, height: Ut } : null;
  }
  function fe() {
    return c(y) ? c(y) : c(p) ? c(p).getBoundingClientRect() : null;
  }
  function it(x) {
    if (!x)
      return [];
    const j = [x], G = /* @__PURE__ */ new Set();
    for (; j.length > 0; ) {
      const C = j.shift();
      if (!(!C || G.has(C))) {
        G.add(C);
        try {
          const ee = C.parent;
          ee && ee !== C && !G.has(ee) && j.push(ee);
        } catch {
        }
        try {
          for (let ee = 0; ee < C.frames.length; ee += 1) {
            const ke = C.frames[ee];
            ke && !G.has(ke) && j.push(ke);
          }
        } catch {
        }
      }
    }
    return [...G];
  }
  function vt(x) {
    if (typeof window > "u")
      return;
    let j = window;
    try {
      j = window.top ?? window;
    } catch {
      j = window;
    }
    const G = it(j), C = G.find((ee) => ee === j) ?? G[0] ?? window;
    try {
      C.document.dispatchEvent(new C.CustomEvent("efsdb:theme-studio:applied", { detail: { palette: x } }));
      return;
    } catch {
    }
    La(x);
  }
  function Sr(x = c(w)) {
    const j = x === "toolbar" ? ["toolbar-theme-trigger", "fab-theme-trigger"] : ["fab-theme-trigger", "toolbar-theme-trigger"];
    for (const G of j) {
      const C = document.getElementById(G);
      if (C instanceof HTMLElement) {
        g(p, C, !0), g(w, G === "fab-theme-trigger" ? "fab" : "toolbar", !0);
        return;
      }
    }
    g(p, null);
  }
  function Ft() {
    if (typeof window > "u") return;
    const x = fe();
    if (!x) return;
    const j = Math.min(r, Math.max(360, window.innerWidth - i * 2)), G = Math.min(n, Math.max(420, window.innerHeight - i * 2));
    let C = x.right - j, ee = c(w) === "toolbar" ? x.bottom + o : x.top - G - o;
    C = Math.min(Math.max(i, C), Math.max(i, window.innerWidth - j - i)), ee = Math.min(Math.max(i, ee), Math.max(i, window.innerHeight - G - i)), g(q, Math.round(j), !0), g(O, Math.round(G), !0), g(M, Math.round(C), !0), g(b, Math.round(ee), !0);
  }
  function Et(x) {
    var G;
    const j = (G = x == null ? void 0 : x.detail) == null ? void 0 : G.source;
    return j === "toolbar" || j === "fab" ? j : null;
  }
  function Vt(x) {
    var j;
    return Re((j = x == null ? void 0 : x.detail) == null ? void 0 : j.anchorRect);
  }
  function je(x) {
    const j = Et(x) ?? c(w), G = c(w);
    if (g(w, j, !0), g(y, Vt(x), !0), c(l) === "minimized" && g(l, "normal"), c(d)) {
      g(s, !0);
      return;
    }
    if (c(s) && G === j) {
      Ht();
      return;
    }
    c(y) ? g(p, null) : Sr(j), Ft(), g(s, !0);
  }
  function Ht() {
    g(s, !1);
  }
  function ve() {
    g(d, !c(d));
  }
  function Tn(x) {
    if (!c(s) || c(d)) return;
    const j = x.composedPath();
    c(v) && j.includes(c(v)) || c(p) && j.includes(c(p)) || Ht();
  }
  function ar() {
    !c(s) || c(d) || Ht();
  }
  function at(x) {
    const j = x.trim().replace("#", "");
    return /^[0-9a-fA-F]{6}$/.test(j) ? `#${j.toLowerCase()}` : /^[0-9a-fA-F]{3}$/.test(j) ? `#${j.split("").map((G) => `${G}${G}`).join("").toLowerCase()}` : c(S);
  }
  async function st() {
    if (!(navigator != null && navigator.clipboard)) {
      g(K, "Copy CSS");
      return;
    }
    await navigator.clipboard.writeText(Dc(c(P))), g(K, "Copied"), g(oe, "CSS variables copied to clipboard."), setTimeout(
      () => {
        g(K, "Copy CSS");
      },
      1600
    );
  }
  function sr() {
    const x = pr.apply(c(S), c(B), c(ae), c(X));
    vt(x), g(oe, `Applied ${x.seed} in ${x.mode} mode.`);
  }
  function Kr() {
    pr.reset();
    const x = pr.preview("#5b8cff", "light", 66, 56);
    g(S, x.seed, !0), g(B, x.mode, !0), g(ae, x.vividness, !0), g(X, x.contrast, !0), vt(x), g(oe, "Theme reset to the default shell palette.");
  }
  function Jr(x) {
    g(S, x.seed, !0), g(B, x.mode, !0), g(ae, x.vividness, !0), g(X, x.contrast, !0), g(f, "theme"), g(oe, `${x.label} loaded.`);
  }
  function Mr() {
    pr.hydrate();
    const x = td(pr);
    if (g(S, x.seed, !0), g(ae, x.vividness, !0), g(X, x.contrast, !0), typeof window < "u" && typeof window.getEfsdbTheme == "function") {
      const j = window.getEfsdbTheme();
      g(B, j === "dark" ? "dark" : "light", !0);
      return;
    }
    g(B, x.mode, !0), La(x.palette);
  }
  function Gt(x) {
    x && x.key && x.key !== "efsdb-theme" && x.key !== "efsdb:theme-studio" || Mr();
  }
  Gs(() => (document.addEventListener("efsdb:theme-studio:toggle", je), document.addEventListener("efsdb:theme-studio:frame-pointerdown", ar), document.addEventListener("pointerdown", Tn, !0), window.addEventListener("resize", Ft), window.addEventListener("efsdb-themechange", Gt), window.addEventListener("efsdb-theme-palettechange", Gt), window.addEventListener("storage", Gt), Mr(), Sr(c(w)), Ft(), () => {
    document.removeEventListener("efsdb:theme-studio:toggle", je), document.removeEventListener("efsdb:theme-studio:frame-pointerdown", ar), document.removeEventListener("pointerdown", Tn, !0), window.removeEventListener("resize", Ft), window.removeEventListener("efsdb-themechange", Gt), window.removeEventListener("efsdb-theme-palettechange", Gt), window.removeEventListener("storage", Gt);
  }));
  var Rn = Ws(), fo = mn(Rn);
  {
    var Qr = (x) => {
      var j = Yc(), G = _(j);
      Qs(G, {
        title: "Theme Studio",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 18,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return c(d);
        },
        zIndex: a,
        onClose: Ht,
        onPinToggle: ve,
        get state() {
          return c(l);
        },
        set state(C) {
          g(l, C, !0);
        },
        get x() {
          return c(M);
        },
        set x(C) {
          g(M, C, !0);
        },
        get y() {
          return c(b);
        },
        set y(C) {
          g(b, C, !0);
        },
        get width() {
          return c(q);
        },
        set width(C) {
          g(q, C, !0);
        },
        get height() {
          return c(O);
        },
        set height(C) {
          g(O, C, !0);
        },
        children: (C, ee) => {
          var ke = Uc(), Le = _(ke), Ut = _(Le), en = _(Ut), lr = _(en, !0);
          k(en);
          var dr = T(en, 4), Yt = _(dr, !0);
          k(dr), k(Ut);
          var bt = T(Ut, 2), po = _(bt, !0);
          k(bt), k(Le);
          var tn = T(Le, 2);
          Qn(tn, 21, () => we, (_e) => _e.id, (_e, ze) => {
            var me = Bc();
            let J;
            var Ee = _(me, !0);
            k(me), Ce(() => {
              J = ht(me, 1, "studio-tab svelte-1m44pqp", null, J, { active: c(f) === c(ze).id }), Ne(Ee, c(ze).label);
            }), de("click", me, () => g(f, c(ze).id, !0)), ne(_e, me);
          }), k(tn);
          var $e = T(tn, 2), wo = _($e);
          {
            var mo = (_e) => {
              var ze = Wc(), me = mn(ze), J = T(_(me), 4), Ee = _(J), He = _(Ee);
              zo(He), Rr(2), k(Ee);
              var lt = T(Ee, 2), Ge = T(_(lt), 2);
              zo(Ge), k(lt);
              var Zt = T(lt, 2), be = _(Zt);
              let Oe;
              var Pt = T(be, 2);
              let Tt;
              k(Zt), k(J);
              var Rt = T(J, 2), jr = _(Rt), yt = _(jr), xt = T(_(yt), 2), $r = _(xt, !0);
              k(xt), k(yt);
              var on = T(yt, 2);
              zo(on), k(jr);
              var an = T(jr, 2), kt = _(an), sn = T(_(kt), 2), yo = _(sn, !0);
              k(sn), k(kt);
              var An = T(kt, 2);
              zo(An), k(an), k(Rt);
              var Cn = T(Rt, 2), zr = _(Cn), ai = _(zr);
              Rr(2), k(zr);
              var cr = T(zr, 2), si = _(cr);
              Rr(2), k(cr);
              var ln = T(cr, 2), li = _(ln);
              Rr(2), k(ln);
              var In = T(ln, 2), di = _(In);
              Rr(2), k(In), k(Cn), k(me);
              var xo = T(me, 2), Ln = T(_(xo), 2), ko = T(_(Ln), 2), _o = _(ko), On = _(_o), qo = T(_(On), 2), So = _(qo, !0);
              k(qo), k(On);
              var Mo = T(On, 2), dn = T(_(Mo), 2), hr = _(dn, !0);
              k(dn), k(Mo), k(_o), Rr(2), k(ko), k(Ln), k(xo), Ce(() => {
                Ud(Ge, c(S)), Oe = ht(be, 1, "svelte-1m44pqp", null, Oe, { active: c(B) === "light" }), Tt = ht(Pt, 1, "svelte-1m44pqp", null, Tt, { active: c(B) === "dark" }), Ne($r, c(ae)), Ne(yo, c(X)), nt(ai, `background:${c(P).accent}`), nt(si, `background:${c(P).accentStrong}`), nt(li, `background:${c(P).accentSecondary}`), nt(di, `background:${c(P).surfaceAlt}`), Ne(So, c(P).accent), Ne(hr, c(P).accentSecondary);
              }), vi(He, () => c(S), (Xt) => g(S, Xt)), de("input", Ge, (Xt) => {
                const Dn = Xt.currentTarget;
                g(S, at(Dn.value), !0), Dn.value = c(S);
              }), de("click", be, () => g(B, "light")), de("click", Pt, () => g(B, "dark")), vi(on, () => c(ae), (Xt) => g(ae, Xt)), vi(An, () => c(X), (Xt) => g(X, Xt)), ne(_e, ze);
            };
            rt(wo, (_e) => {
              c(f) === "theme" && _e(mo);
            });
          }
          var rn = T(wo, 2);
          {
            var ri = (_e) => {
              var ze = Vc();
              Qn(ze, 21, () => Ic, (me) => me.id, (me, J) => {
                var Ee = Fc(), He = _(Ee), lt = _(He), Ge = T(lt, 2), Zt = T(Ge, 2);
                k(He);
                var be = T(He, 2), Oe = _(be), Pt = _(Oe, !0);
                k(Oe);
                var Tt = T(Oe, 2), Rt = _(Tt);
                k(Tt), k(be), k(Ee), Ce(
                  (jr, yt) => {
                    nt(lt, `background:${c(J).seed}`), nt(Ge, jr), nt(Zt, yt), Ne(Pt, c(J).label), Ne(Rt, `${c(J).seed ?? ""} · ${c(J).mode ?? ""}`);
                  },
                  [
                    () => `background:${pr.preview(c(J).seed, c(J).mode, c(J).vividness, c(J).contrast).accentSecondary}`,
                    () => `background:${pr.preview(c(J).seed, c(J).mode, c(J).vividness, c(J).contrast).surfaceAlt}`
                  ]
                ), de("click", Ee, () => Jr(c(J))), ne(me, Ee);
              }), k(ze), ne(_e, ze);
            };
            rt(rn, (_e) => {
              c(f) === "presets" && _e(ri);
            });
          }
          var ni = T(rn, 2);
          {
            var go = (_e) => {
              var ze = Gc();
              Qn(
                ze,
                21,
                () => [
                  ["--accent", c(P).accent],
                  ["--accent-strong", c(P).accentStrong],
                  ["--accent-soft", c(P).accentSoft],
                  ["--accent-secondary", c(P).accentSecondary],
                  [
                    "--accent-secondary-soft",
                    c(P).accentSecondarySoft
                  ],
                  ["--surface", c(P).surface],
                  ["--surface-alt", c(P).surfaceAlt],
                  ["--surface-inset", c(P).surfaceInset],
                  ["--border", c(P).border],
                  ["--border-strong", c(P).borderStrong],
                  ["--text", c(P).text],
                  ["--text-muted", c(P).textMuted]
                ],
                (me) => me[0],
                (me, J) => {
                  var Ee = Hc(), He = _(Ee), lt = T(He, 2), Ge = _(lt), Zt = _(Ge, !0);
                  k(Ge);
                  var be = T(Ge, 2), Oe = _(be, !0);
                  k(be), k(lt), k(Ee), Ce(() => {
                    nt(He, `background:${c(J)[1]}`), Ne(Zt, c(J)[0]), Ne(Oe, c(J)[1]);
                  }), ne(me, Ee);
                }
              ), k(ze), ne(_e, ze);
            };
            rt(ni, (_e) => {
              c(f) === "tokens" && _e(go);
            });
          }
          k($e);
          var vo = T($e, 2), bo = _(vo), nn = T(bo, 2), oi = _(nn, !0);
          k(nn);
          var ii = T(nn, 2);
          k(vo), k(ke), Ce(() => {
            nt(ke, `--preview-accent:${c(P).accent};
                --preview-accent-strong:${c(P).accentStrong};
                --preview-accent-soft:${c(P).accentSoft};
                --preview-secondary:${c(P).accentSecondary};
                --preview-secondary-soft:${c(P).accentSecondarySoft};
                --preview-surface:${c(P).surface};
                --preview-surface-alt:${c(P).surfaceAlt};
                --preview-surface-inset:${c(P).surfaceInset};
                --preview-border:${c(P).border};
                --preview-border-strong:${c(P).borderStrong};
                --preview-text:${c(P).text};
                --preview-text-muted:${c(P).textMuted};
                --preview-on-accent:${c(P).onAccent};
                --preview-shadow:${c(P).shadow};`), Ne(lr, c(w) === "toolbar" ? "Toolbar launch" : "Fab launch"), Ne(Yt, c(oe)), re(bt, "data-mode", c(B)), Ne(po, c(B) === "dark" ? "Dark mode" : "Light mode"), Ne(oi, c(K));
          }), de("click", bo, Kr), de("click", nn, st), de("click", ii, sr), ne(C, ke);
        },
        $$slots: { default: !0 }
      }), k(j), Ni(j, (C) => g(v, C), () => c(v)), ne(x, j);
    };
    rt(fo, (x) => {
      c(s) && x(Qr);
    });
  }
  ne(e, Rn), Ko();
}
Bs(["click", "input"]);
customElements.define("efsdb-theme-studio", ta(Xc, {}, [], [], { mode: "open" }));
export {
  Xc as ThemeStudio
};
