var Ya = Object.defineProperty;
var Cs = (e) => {
  throw TypeError(e);
};
var Ga = (e, t, n) => t in e ? Ya(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var X = (e, t, n) => Ga(e, typeof t != "symbol" ? t + "" : t, n), Si = (e, t, n) => t.has(e) || Cs("Cannot " + n);
var f = (e, t, n) => (Si(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => t.has(e) ? Cs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n, r) => (Si(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Y = (e, t, n) => (Si(e, t, "access private method"), n);
var uo;
typeof window < "u" && ((uo = window.__svelte ?? (window.__svelte = {})).v ?? (uo.v = /* @__PURE__ */ new Set())).add("5");
const Za = 1, Xa = 2, ho = 4, Ka = 8, Ja = 16, Qa = 1, el = 4, tl = 8, nl = 16, rl = 1, il = 2, po = "[", Qi = "[!", Is = "[?", es = "]", Jn = {}, we = Symbol(), wo = "http://www.w3.org/1999/xhtml", sl = !1;
var vo = Array.isArray, ol = Array.prototype.indexOf, Qn = Array.prototype.includes, ri = Array.from, Yr = Object.keys, yr = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, al = Object.getOwnPropertyDescriptors, ll = Object.prototype, dl = Array.prototype, go = Object.getPrototypeOf, Ls = Object.isExtensible;
const Qt = () => {
};
function ul(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function mo() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const ce = 2, er = 4, ii = 8, bo = 1 << 24, an = 16, pt = 32, rn = 64, Pi = 128, nt = 512, de = 1024, xe = 2048, Mt = 4096, Ue = 8192, rt = 16384, ln = 32768, Ai = 1 << 25, En = 65536, Ns = 1 << 17, cl = 1 << 18, Pn = 1 << 19, fl = 1 << 20, kt = 1 << 25, Rn = 65536, Ci = 1 << 21, ts = 1 << 22, en = 1 << 23, gr = Symbol("$state"), yo = Symbol("legacy props"), hl = Symbol(""), Ct = new class extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "StaleReactionError");
    X(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var co;
const pl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((co = globalThis.document) != null && co.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), si = 3, Er = 8;
function wl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function vl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function gl(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ml(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function yl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function _l() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function kl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ql() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function oi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $l() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function Wt(e) {
  F = e;
}
let I;
function Ae(e) {
  if (e === null)
    throw oi(), Jn;
  return I = e;
}
function ai() {
  return Ae(/* @__PURE__ */ St(I));
}
function z(e) {
  if (F) {
    if (/* @__PURE__ */ St(I) !== null)
      throw oi(), Jn;
    I = e;
  }
}
function El(e = 1) {
  if (F) {
    for (var t = e, n = I; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ St(n);
    I = n;
  }
}
function Gr(e = !0) {
  for (var t = 0, n = I; ; ) {
    if (n.nodeType === Er) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === es) {
        if (t === 0) return n;
        t -= 1;
      } else (r === po || r === Qi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ St(n)
    );
    e && n.remove(), n = i;
  }
}
function _o(e) {
  if (!e || e.nodeType !== Er)
    throw oi(), Jn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function xo(e) {
  return e === this.v;
}
function ko(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Mo(e) {
  return !ko(e, this.v);
}
let Rl = !1, Ce = null;
function tr(e) {
  Ce = e;
}
function li(e, t = !1, n) {
  Ce = {
    p: Ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      L
    ),
    l: null
  };
}
function di(e) {
  var t = (
    /** @type {ComponentContext} */
    Ce
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ko(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ce = t.p, e ?? /** @type {T} */
  {};
}
function qo() {
  return !0;
}
let gn = [];
function So() {
  var e = gn;
  gn = [], ul(e);
}
function tn(e) {
  if (gn.length === 0 && !mr) {
    var t = gn;
    queueMicrotask(() => {
      t === gn && So();
    });
  }
  gn.push(e);
}
function zl() {
  for (; gn.length > 0; )
    So();
}
function jo(e) {
  var t = L;
  if (t === null)
    return T.f |= en, e;
  if ((t.f & ln) === 0 && (t.f & er) === 0)
    throw e;
  Jt(e, t);
}
function Jt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Pi) !== 0) {
      if ((t.f & ln) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Tl = -7169;
function oe(e, t) {
  e.f = e.f & Tl | t;
}
function ns(e) {
  (e.f & nt) !== 0 || e.deps === null ? oe(e, de) : oe(e, Mt);
}
function $o(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ce) === 0 || (t.f & Rn) === 0 || (t.f ^= Rn, $o(
        /** @type {Derived} */
        t.deps
      ));
}
function Eo(e, t, n) {
  (e.f & xe) !== 0 ? t.add(e) : (e.f & Mt) !== 0 && n.add(e), $o(e.deps), oe(e, de);
}
function Ro(e, t, n) {
  if (e == null)
    return t(void 0), Qt;
  const r = ir(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Fn = [];
function zo(e, t = Qt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (ko(e, a) && (e = a, n)) {
      const d = !Fn.length;
      for (const l of r)
        l[1](), Fn.push(l, e);
      if (d) {
        for (let l = 0; l < Fn.length; l += 2)
          Fn[l][0](Fn[l + 1]);
        Fn.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, d = Qt) {
    const l = [a, d];
    return r.add(l), r.size === 1 && (n = t(i, s) || Qt), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Pl(e) {
  let t;
  return Ro(e, (n) => t = n)(), t;
}
let Nr = !1, Ii = Symbol();
function Ds(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ss(void 0),
    unsubscribe: Qt
  });
  if (r.store !== e && !(Ii in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Qt;
    else {
      var i = !0;
      r.unsubscribe = Ro(e, (s) => {
        i ? r.source.v = s : b(r.source, s);
      }), i = !1;
    }
  return e && Ii in n ? Pl(e) : c(r.source);
}
function Al() {
  const e = {};
  function t() {
    us(() => {
      for (var n in e)
        e[n].unsubscribe();
      yr(e, Ii, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Cl(e) {
  var t = Nr;
  try {
    return Nr = !1, [e(), Nr];
  } finally {
    Nr = t;
  }
}
const vn = /* @__PURE__ */ new Set();
let C = null, ge = null, Li = null, mr = !1, ji = !1, Hn = null, Or = null;
var Os = 0;
let Il = 1;
var Un, Bn, Yn, Gn, xr, We, _n, It, Lt, Zn, ke, Ni, Di, Oi, Wi, To;
const Jr = class Jr {
  constructor() {
    R(this, ke);
    // for debugging. TODO remove once async is stable
    X(this, "id", Il++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    X(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    X(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Un, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Bn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, Yn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    R(this, Gn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, xr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    R(this, We, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, _n, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, It, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    R(this, Lt, /* @__PURE__ */ new Map());
    X(this, "is_fork", !1);
    R(this, Zn, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Lt).has(t) || f(this, Lt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = f(this, Lt).get(t);
    if (n) {
      f(this, Lt).delete(t);
      for (var r of n.d)
        oe(r, xe), this.schedule(r);
      for (r of n.m)
        oe(r, Mt), this.schedule(r);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(t, n) {
    n !== we && !this.previous.has(t) && this.previous.set(t, n), (t.f & en) === 0 && (this.current.set(t, t.v), ge == null || ge.set(t, t.v));
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, ge = null;
  }
  flush() {
    try {
      ji = !0, C = this, Y(this, ke, Di).call(this);
    } finally {
      Os = 0, Li = null, Hn = null, Or = null, ji = !1, C = null, ge = null, nn.clear();
    }
  }
  discard() {
    for (const t of f(this, Bn)) t(this);
    f(this, Bn).clear(), vn.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    E(this, Yn, f(this, Yn) + 1), t && E(this, Gn, f(this, Gn) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n) {
    E(this, Yn, f(this, Yn) - 1), t && E(this, Gn, f(this, Gn) - 1), !(f(this, Zn) || n) && (E(this, Zn, !0), tn(() => {
      E(this, Zn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      f(this, _n).add(r);
    for (const r of n)
      f(this, It).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, Un).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Bn).add(t);
  }
  settled() {
    return (f(this, xr) ?? E(this, xr, mo())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new Jr();
      ji || (vn.add(C), mr || tn(() => {
        C === t && t.flush();
      }));
    }
    return C;
  }
  apply() {
    {
      ge = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Li = t, (i = t.b) != null && i.is_pending && (t.f & (er | ii | bo)) !== 0 && (t.f & ln) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Hn !== null && n === L && (T === null || (T.f & ce) === 0))
        return;
      if ((r & (rn | pt)) !== 0) {
        if ((r & de) === 0)
          return;
        n.f ^= de;
      }
    }
    f(this, We).push(n);
  }
};
Un = new WeakMap(), Bn = new WeakMap(), Yn = new WeakMap(), Gn = new WeakMap(), xr = new WeakMap(), We = new WeakMap(), _n = new WeakMap(), It = new WeakMap(), Lt = new WeakMap(), Zn = new WeakMap(), ke = new WeakSet(), Ni = function() {
  return this.is_fork || f(this, Gn) > 0;
}, Di = function() {
  var a, d;
  if (Os++ > 1e3 && (vn.delete(this), Ll()), !Y(this, ke, Ni).call(this)) {
    for (const l of f(this, _n))
      f(this, It).delete(l), oe(l, xe), this.schedule(l);
    for (const l of f(this, It))
      oe(l, Mt), this.schedule(l);
  }
  const t = f(this, We);
  E(this, We, []), this.apply();
  var n = Hn = [], r = [], i = Or = [];
  for (const l of t)
    try {
      Y(this, ke, Oi).call(this, l, n, r);
    } catch (h) {
      throw Io(l), h;
    }
  if (C = null, i.length > 0) {
    var s = Jr.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (Hn = null, Or = null, Y(this, ke, Ni).call(this)) {
    Y(this, ke, Wi).call(this, r), Y(this, ke, Wi).call(this, n);
    for (const [l, h] of f(this, Lt))
      Co(l, h);
  } else {
    f(this, Yn) === 0 && vn.delete(this), f(this, _n).clear(), f(this, It).clear();
    for (const l of f(this, Un)) l(this);
    f(this, Un).clear(), Ws(r), Ws(n), (a = f(this, xr)) == null || a.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (f(this, We).length > 0) {
    const l = o ?? (o = this);
    f(l, We).push(...f(this, We).filter((h) => !f(l, We).includes(h)));
  }
  o !== null && (vn.add(o), Y(d = o, ke, Di).call(d)), vn.has(this) || Y(this, ke, To).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Oi = function(t, n, r) {
  t.f ^= de;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (pt | rn)) !== 0, a = o && (s & de) !== 0, d = a || (s & Ue) !== 0 || f(this, Lt).has(i);
    if (!d && i.fn !== null) {
      o ? i.f ^= de : (s & er) !== 0 ? n.push(i) : Rr(i) && ((s & an) !== 0 && f(this, It).add(i), rr(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Wi = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Eo(t[n], f(this, _n), f(this, It));
}, To = function() {
  var d;
  for (const l of vn) {
    var t = l.id < this.id, n = [];
    for (const [h, m] of this.current) {
      if (l.current.has(h))
        if (t && m !== l.current.get(h))
          l.current.set(h, m);
        else
          continue;
      n.push(h);
    }
    var r = [...l.current.keys()].filter((h) => !this.current.has(h));
    if (r.length === 0)
      t && l.discard();
    else if (n.length > 0) {
      l.activate();
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var o of n)
        Po(o, r, i, s);
      if (f(l, We).length > 0) {
        l.apply();
        for (var a of f(l, We))
          Y(d = l, ke, Oi).call(d, a, [], []);
        E(l, We, []);
      }
      l.deactivate();
    }
  }
};
let sn = Jr;
function A(e) {
  var t = mr;
  mr = !0;
  try {
    for (var n; ; ) {
      if (zl(), C === null)
        return (
          /** @type {T} */
          n
        );
      C.flush();
    }
  } finally {
    mr = t;
  }
}
function Ll() {
  try {
    _l();
  } catch (e) {
    Jt(e, Li);
  }
}
let ut = null;
function Ws(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (rt | Ue)) === 0 && Rr(r) && (ut = /* @__PURE__ */ new Set(), rr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qo(r), (ut == null ? void 0 : ut.size) > 0)) {
        nn.clear();
        for (const i of ut) {
          if ((i.f & (rt | Ue)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            ut.has(o) && (ut.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const d = s[a];
            (d.f & (rt | Ue)) === 0 && rr(d);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
function Po(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ce) !== 0 ? Po(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (ts | an)) !== 0 && (s & xe) === 0 && Ao(i, t, r) && (oe(i, xe), rs(
        /** @type {Effect} */
        i
      ));
    }
}
function Ao(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Qn.call(t, i))
        return !0;
      if ((i.f & ce) !== 0 && Ao(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function rs(e) {
  C.schedule(e);
}
function Co(e, t) {
  if (!((e.f & pt) !== 0 && (e.f & de) !== 0)) {
    (e.f & xe) !== 0 ? t.d.push(e) : (e.f & Mt) !== 0 && t.m.push(e), oe(e, de);
    for (var n = e.first; n !== null; )
      Co(n, t), n = n.next;
  }
}
function Io(e) {
  oe(e, de);
  for (var t = e.first; t !== null; )
    Io(t), t = t.next;
}
function Nl(e) {
  let t = 0, n = zn(0), r;
  return () => {
    ds() && (c(n), hs(() => (t === 0 && (r = ir(() => e(() => br(n)))), t += 1, () => {
      tn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, br(n));
      });
    })));
  };
}
var Dl = En | Pn;
function Ol(e, t, n, r) {
  new Wl(e, t, n, r);
}
var Fe, kr, yt, xn, ze, _t, He, ct, Nt, kn, Xt, Xn, Mr, qr, Dt, Qr, Q, Lo, No, Do, Fi, Wr, Fr, Hi;
class Wl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    R(this, Q);
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
    R(this, Fe);
    /** @type {TemplateNode | null} */
    R(this, kr, F ? I : null);
    /** @type {BoundaryProps} */
    R(this, yt);
    /** @type {((anchor: Node) => void)} */
    R(this, xn);
    /** @type {Effect} */
    R(this, ze);
    /** @type {Effect | null} */
    R(this, _t, null);
    /** @type {Effect | null} */
    R(this, He, null);
    /** @type {Effect | null} */
    R(this, ct, null);
    /** @type {DocumentFragment | null} */
    R(this, Nt, null);
    R(this, kn, 0);
    R(this, Xt, 0);
    R(this, Xn, !1);
    /** @type {Set<Effect>} */
    R(this, Mr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, qr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, Dt, null);
    R(this, Qr, Nl(() => (E(this, Dt, zn(f(this, kn))), () => {
      E(this, Dt, null);
    })));
    var s;
    E(this, Fe, t), E(this, yt, n), E(this, xn, (o) => {
      var a = (
        /** @type {Effect} */
        L
      );
      a.b = this, a.f |= Pi, r(o);
    }), this.parent = /** @type {Effect} */
    L.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((o) => o), E(this, ze, ci(() => {
      if (F) {
        const o = (
          /** @type {Comment} */
          f(this, kr)
        );
        ai();
        const a = o.data === Qi;
        if (o.data.startsWith(Is)) {
          const l = JSON.parse(o.data.slice(Is.length));
          Y(this, Q, No).call(this, l);
        } else a ? Y(this, Q, Do).call(this) : Y(this, Q, Lo).call(this);
      } else
        Y(this, Q, Fi).call(this);
    }, Dl)), F && E(this, Fe, I);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Eo(t, f(this, Mr), f(this, qr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, yt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    Y(this, Q, Hi).call(this, t, n), E(this, kn, f(this, kn) + t), !(!f(this, Dt) || f(this, Xn)) && (E(this, Xn, !0), tn(() => {
      E(this, Xn, !1), f(this, Dt) && nr(f(this, Dt), f(this, kn));
    }));
  }
  get_effect_pending() {
    return f(this, Qr).call(this), c(
      /** @type {Source<number>} */
      f(this, Dt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = f(this, yt).onerror;
    let r = f(this, yt).failed;
    if (!n && !r)
      throw t;
    f(this, _t) && ($e(f(this, _t)), E(this, _t, null)), f(this, He) && ($e(f(this, He)), E(this, He, null)), f(this, ct) && ($e(f(this, ct)), E(this, ct, null)), F && (Ae(
      /** @type {TemplateNode} */
      f(this, kr)
    ), El(), Ae(Gr()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        $l();
        return;
      }
      i = !0, s && jl(), f(this, ct) !== null && Sn(f(this, ct), () => {
        E(this, ct, null);
      }), Y(this, Q, Fr).call(this, () => {
        Y(this, Q, Fi).call(this);
      });
    }, a = (d) => {
      try {
        s = !0, n == null || n(d, o), s = !1;
      } catch (l) {
        Jt(l, f(this, ze) && f(this, ze).parent);
      }
      r && E(this, ct, Y(this, Q, Fr).call(this, () => {
        try {
          return et(() => {
            var l = (
              /** @type {Effect} */
              L
            );
            l.b = this, l.f |= Pi, r(
              f(this, Fe),
              () => d,
              () => o
            );
          });
        } catch (l) {
          return Jt(
            l,
            /** @type {Effect} */
            f(this, ze).parent
          ), null;
        }
      }));
    };
    tn(() => {
      var d;
      try {
        d = this.transform_error(t);
      } catch (l) {
        Jt(l, f(this, ze) && f(this, ze).parent);
        return;
      }
      d !== null && typeof d == "object" && typeof /** @type {any} */
      d.then == "function" ? d.then(
        a,
        /** @param {unknown} e */
        (l) => Jt(l, f(this, ze) && f(this, ze).parent)
      ) : a(d);
    });
  }
}
Fe = new WeakMap(), kr = new WeakMap(), yt = new WeakMap(), xn = new WeakMap(), ze = new WeakMap(), _t = new WeakMap(), He = new WeakMap(), ct = new WeakMap(), Nt = new WeakMap(), kn = new WeakMap(), Xt = new WeakMap(), Xn = new WeakMap(), Mr = new WeakMap(), qr = new WeakMap(), Dt = new WeakMap(), Qr = new WeakMap(), Q = new WeakSet(), Lo = function() {
  try {
    E(this, _t, et(() => f(this, xn).call(this, f(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
No = function(t) {
  const n = f(this, yt).failed;
  n && E(this, ct, et(() => {
    n(
      f(this, Fe),
      () => t,
      () => () => {
      }
    );
  }));
}, Do = function() {
  const t = f(this, yt).pending;
  t && (this.is_pending = !0, E(this, He, et(() => t(f(this, Fe)))), tn(() => {
    var n = E(this, Nt, document.createDocumentFragment()), r = it();
    n.append(r), E(this, _t, Y(this, Q, Fr).call(this, () => et(() => f(this, xn).call(this, r)))), f(this, Xt) === 0 && (f(this, Fe).before(n), E(this, Nt, null), Sn(
      /** @type {Effect} */
      f(this, He),
      () => {
        E(this, He, null);
      }
    ), Y(this, Q, Wr).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, Fi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Xt, 0), E(this, kn, 0), E(this, _t, et(() => {
      f(this, xn).call(this, f(this, Fe));
    })), f(this, Xt) > 0) {
      var t = E(this, Nt, document.createDocumentFragment());
      vs(f(this, _t), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        f(this, yt).pending
      );
      E(this, He, et(() => n(f(this, Fe))));
    } else
      Y(this, Q, Wr).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Wr = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, Mr), f(this, qr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Fr = function(t) {
  var n = L, r = T, i = Ce;
  qt(f(this, ze)), ot(f(this, ze)), tr(f(this, ze).ctx);
  try {
    return sn.ensure(), t();
  } catch (s) {
    return jo(s), null;
  } finally {
    qt(n), ot(r), tr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Hi = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && Y(r = this.parent, Q, Hi).call(r, t, n);
    return;
  }
  E(this, Xt, f(this, Xt) + t), f(this, Xt) === 0 && (Y(this, Q, Wr).call(this, n), f(this, He) && Sn(f(this, He), () => {
    E(this, He, null);
  }), f(this, Nt) && (f(this, Fe).before(f(this, Nt)), E(this, Nt, null)));
};
function Fl(e, t, n, r) {
  const i = ui;
  var s = e.filter((w) => !w.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    L
  ), a = Hl(), d = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((w) => w.promise)) : null;
  function l(w) {
    a();
    try {
      r(w);
    } catch (y) {
      (o.f & rt) === 0 && Jt(y, o);
    }
    Zr();
  }
  if (n.length === 0) {
    d.then(() => l(t.map(i)));
    return;
  }
  var h = Oo();
  function m() {
    Promise.all(n.map((w) => /* @__PURE__ */ Vl(w))).then((w) => l([...t.map(i), ...w])).catch((w) => Jt(w, o)).finally(() => h());
  }
  d ? d.then(() => {
    a(), m(), Zr();
  }) : m();
}
function Hl() {
  var e = (
    /** @type {Effect} */
    L
  ), t = T, n = Ce, r = (
    /** @type {Batch} */
    C
  );
  return function(s = !0) {
    qt(e), ot(t), tr(n), s && (e.f & rt) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Zr(e = !0) {
  qt(null), ot(null), tr(null), e && (C == null || C.deactivate());
}
function Oo() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    L.b
  ), t = (
    /** @type {Batch} */
    C
  ), n = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function ui(e) {
  var t = ce | xe, n = T !== null && (T.f & ce) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return L !== null && (L.f |= Pn), {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: xo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      we
    ),
    wv: 0,
    parent: n ?? L,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vl(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    L
  );
  r === null && vl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = zn(
    /** @type {V} */
    we
  ), o = !T, a = /* @__PURE__ */ new Map();
  return Ql(() => {
    var y;
    var d = (
      /** @type {Effect} */
      L
    ), l = mo();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(Zr);
    } catch (v) {
      l.reject(v), Zr();
    }
    var h = (
      /** @type {Batch} */
      C
    );
    if (o) {
      if ((d.f & ln) !== 0)
        var m = Oo();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (y = a.get(h)) == null || y.reject(Ct), a.delete(h);
      else {
        for (const v of a.values())
          v.reject(Ct);
        a.clear();
      }
      a.set(h, l);
    }
    const w = (v, S = void 0) => {
      if (m) {
        var g = S === Ct;
        m(g);
      }
      if (!(S === Ct || (d.f & rt) !== 0)) {
        if (h.activate(), S)
          s.f |= en, nr(s, S);
        else {
          (s.f & en) !== 0 && (s.f ^= en), nr(s, v);
          for (const [q, D] of a) {
            if (a.delete(q), q === h) break;
            D.reject(Ct);
          }
        }
        h.deactivate();
      }
    };
    l.promise.then(w, (v) => w(null, v || "unknown"));
  }), us(() => {
    for (const d of a.values())
      d.reject(Ct);
  }), new Promise((d) => {
    function l(h) {
      function m() {
        h === i ? d(s) : l(i);
      }
      h.then(m, m);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = /* @__PURE__ */ ui(e);
  return na(t), t;
}
// @__NO_SIDE_EFFECTS__
function Wo(e) {
  const t = /* @__PURE__ */ ui(e);
  return t.equals = Mo, t;
}
function Ul(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      $e(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Bl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ce) === 0)
      return (t.f & rt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function is(e) {
  var t, n = L;
  qt(Bl(e));
  try {
    e.f &= ~Rn, Ul(e), t = oa(e);
  } finally {
    qt(n);
  }
  return t;
}
function Fo(e) {
  var t = e.v, n = is(e);
  if (!e.equals(n) && (e.wv = ia(), (!(C != null && C.is_fork) || e.deps === null) && (e.v = n, C == null || C.capture(e, t), e.deps === null))) {
    oe(e, de);
    return;
  }
  on || (ge !== null ? (ds() || C != null && C.is_fork) && ge.set(e, n) : ns(e));
}
function Yl(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Ct), r.teardown = Qt, r.ac = null, _r(r, 0), ps(r));
}
function Ho(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && rr(t);
}
let Vi = /* @__PURE__ */ new Set();
const nn = /* @__PURE__ */ new Map();
let Vo = !1;
function zn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: xo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const n = zn(e);
  return na(n), n;
}
// @__NO_SIDE_EFFECTS__
function ss(e, t = !1, n = !0) {
  const r = zn(e);
  return t || (r.equals = Mo), r;
}
function b(e, t, n = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ht || (T.f & Ns) !== 0) && qo() && (T.f & (ce | an | ts | Ns)) !== 0 && (st === null || !Qn.call(st, e)) && Sl();
  let r = n ? mn(t) : t;
  return nr(e, r, Or);
}
function nr(e, t, n = null) {
  if (!e.equals(t)) {
    var r = e.v;
    on ? nn.set(e, t) : nn.set(e, r), e.v = t;
    var i = sn.ensure();
    if (i.capture(e, r), (e.f & ce) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & xe) !== 0 && is(s), ge === null && ns(s);
    }
    e.wv = ia(), Uo(e, xe, n), L !== null && (L.f & de) !== 0 && (L.f & (pt | rn)) === 0 && (Ke === null ? nd([e]) : Ke.push(e)), !i.is_fork && Vi.size > 0 && !Vo && Gl();
  }
  return t;
}
function Gl() {
  Vo = !1;
  for (const e of Vi)
    (e.f & de) !== 0 && oe(e, Mt), Rr(e) && rr(e);
  Vi.clear();
}
function br(e) {
  b(e, e.v + 1);
}
function Uo(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], a = o.f, d = (a & xe) === 0;
      if (d && oe(o, t), (a & ce) !== 0) {
        var l = (
          /** @type {Derived} */
          o
        );
        ge == null || ge.delete(l), (a & Rn) === 0 && (a & nt && (o.f |= Rn), Uo(l, Mt, n));
      } else if (d) {
        var h = (
          /** @type {Effect} */
          o
        );
        (a & an) !== 0 && ut !== null && ut.add(h), n !== null ? n.push(h) : rs(h);
      }
    }
}
function mn(e) {
  if (typeof e != "object" || e === null || gr in e)
    return e;
  const t = go(e);
  if (t !== ll && t !== dl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = vo(e), i = /* @__PURE__ */ W(0), s = jn, o = (a) => {
    if (jn === s)
      return a();
    var d = T, l = jn;
    ot(null), Vs(s);
    var h = a();
    return ot(d), Vs(l), h;
  };
  return r && n.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, d, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Ml();
        var h = n.get(d);
        return h === void 0 ? o(() => {
          var m = /* @__PURE__ */ W(l.value);
          return n.set(d, m), m;
        }) : b(h, l.value, !0), !0;
      },
      deleteProperty(a, d) {
        var l = n.get(d);
        if (l === void 0) {
          if (d in a) {
            const h = o(() => /* @__PURE__ */ W(we));
            n.set(d, h), br(i);
          }
        } else
          b(l, we), br(i);
        return !0;
      },
      get(a, d, l) {
        var y;
        if (d === gr)
          return e;
        var h = n.get(d), m = d in a;
        if (h === void 0 && (!m || (y = qn(a, d)) != null && y.writable) && (h = o(() => {
          var v = mn(m ? a[d] : we), S = /* @__PURE__ */ W(v);
          return S;
        }), n.set(d, h)), h !== void 0) {
          var w = c(h);
          return w === we ? void 0 : w;
        }
        return Reflect.get(a, d, l);
      },
      getOwnPropertyDescriptor(a, d) {
        var l = Reflect.getOwnPropertyDescriptor(a, d);
        if (l && "value" in l) {
          var h = n.get(d);
          h && (l.value = c(h));
        } else if (l === void 0) {
          var m = n.get(d), w = m == null ? void 0 : m.v;
          if (m !== void 0 && w !== we)
            return {
              enumerable: !0,
              configurable: !0,
              value: w,
              writable: !0
            };
        }
        return l;
      },
      has(a, d) {
        var w;
        if (d === gr)
          return !0;
        var l = n.get(d), h = l !== void 0 && l.v !== we || Reflect.has(a, d);
        if (l !== void 0 || L !== null && (!h || (w = qn(a, d)) != null && w.writable)) {
          l === void 0 && (l = o(() => {
            var y = h ? mn(a[d]) : we, v = /* @__PURE__ */ W(y);
            return v;
          }), n.set(d, l));
          var m = c(l);
          if (m === we)
            return !1;
        }
        return h;
      },
      set(a, d, l, h) {
        var $;
        var m = n.get(d), w = d in a;
        if (r && d === "length")
          for (var y = l; y < /** @type {Source<number>} */
          m.v; y += 1) {
            var v = n.get(y + "");
            v !== void 0 ? b(v, we) : y in a && (v = o(() => /* @__PURE__ */ W(we)), n.set(y + "", v));
          }
        if (m === void 0)
          (!w || ($ = qn(a, d)) != null && $.writable) && (m = o(() => /* @__PURE__ */ W(void 0)), b(m, mn(l)), n.set(d, m));
        else {
          w = m.v !== we;
          var S = o(() => mn(l));
          b(m, S);
        }
        var g = Reflect.getOwnPropertyDescriptor(a, d);
        if (g != null && g.set && g.set.call(h, l), !w) {
          if (r && typeof d == "string") {
            var q = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(d);
            Number.isInteger(D) && D >= q.v && b(q, D + 1);
          }
          br(i);
        }
        return !0;
      },
      ownKeys(a) {
        c(i);
        var d = Reflect.ownKeys(a).filter((m) => {
          var w = n.get(m);
          return w === void 0 || w.v !== we;
        });
        for (var [l, h] of n)
          h.v !== we && !(l in a) && d.push(l);
        return d;
      },
      setPrototypeOf() {
        ql();
      }
    }
  );
}
var Fs, Bo, Yo, Go;
function Ui() {
  if (Fs === void 0) {
    Fs = window, Bo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yo = qn(t, "firstChild").get, Go = qn(t, "nextSibling").get, Ls(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ls(n) && (n.__t = void 0);
  }
}
function it(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return (
    /** @type {TemplateNode | null} */
    Yo.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return (
    /** @type {TemplateNode | null} */
    Go.call(e)
  );
}
function P(e, t) {
  if (!F)
    return /* @__PURE__ */ Tn(e);
  var n = /* @__PURE__ */ Tn(I);
  if (n === null)
    n = I.appendChild(it());
  else if (t && n.nodeType !== si) {
    var r = it();
    return n == null || n.before(r), Ae(r), r;
  }
  return t && as(
    /** @type {Text} */
    n
  ), Ae(n), n;
}
function wr(e, t = !1) {
  if (!F) {
    var n = /* @__PURE__ */ Tn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ St(n) : n;
  }
  if (t) {
    if ((I == null ? void 0 : I.nodeType) !== si) {
      var r = it();
      return I == null || I.before(r), Ae(r), r;
    }
    as(
      /** @type {Text} */
      I
    );
  }
  return I;
}
function K(e, t = 1, n = !1) {
  let r = F ? I : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ St(r);
  if (!F)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== si) {
      var s = it();
      return r === null ? i == null || i.after(s) : r.before(s), Ae(s), s;
    }
    as(
      /** @type {Text} */
      r
    );
  }
  return Ae(r), r;
}
function Zo(e) {
  e.textContent = "";
}
function Xo() {
  return !1;
}
function os(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(wo, e, void 0)
  );
}
function as(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === si; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function ls(e) {
  var t = T, n = L;
  ot(null), qt(null);
  try {
    return e();
  } finally {
    ot(t), qt(n);
  }
}
function Zl(e) {
  L === null && (T === null && yl(), bl()), on && ml();
}
function Xl(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function jt(e, t) {
  var n = L;
  n !== null && (n.f & Ue) !== 0 && (e |= Ue);
  var r = {
    ctx: Ce,
    deps: null,
    nodes: null,
    f: e | xe | nt,
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
  }, i = r;
  if ((e & er) !== 0)
    Hn !== null ? Hn.push(r) : sn.ensure().schedule(r);
  else if (t !== null) {
    try {
      rr(r);
    } catch (o) {
      throw $e(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Pn) === 0 && (i = i.first, (e & an) !== 0 && (e & En) !== 0 && i !== null && (i.f |= En));
  }
  if (i !== null && (i.parent = n, n !== null && Xl(i, n), T !== null && (T.f & ce) !== 0 && (e & rn) === 0)) {
    var s = (
      /** @type {Derived} */
      T
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function ds() {
  return T !== null && !ht;
}
function us(e) {
  const t = jt(ii, null);
  return oe(t, de), t.teardown = e, t;
}
function cs(e) {
  Zl();
  var t = (
    /** @type {Effect} */
    L.f
  ), n = !T && (t & pt) !== 0 && (t & ln) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ce
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ko(e);
}
function Ko(e) {
  return jt(er | fl, e);
}
function Kl(e) {
  sn.ensure();
  const t = jt(rn | Pn, e);
  return () => {
    $e(t);
  };
}
function Jl(e) {
  sn.ensure();
  const t = jt(rn | Pn, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sn(t, () => {
      $e(t), r(void 0);
    }) : ($e(t), r(void 0));
  });
}
function fs(e) {
  return jt(er, e);
}
function Ql(e) {
  return jt(ts | Pn, e);
}
function hs(e, t = 0) {
  return jt(ii | t, e);
}
function ve(e, t = [], n = [], r = []) {
  Fl(r, t, n, (i) => {
    jt(ii, () => e(...i.map(c)));
  });
}
function ci(e, t = 0) {
  var n = jt(an | t, e);
  return n;
}
function et(e) {
  return jt(pt | Pn, e);
}
function Jo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = on, r = T;
    Hs(!0), ot(null);
    try {
      t.call(null);
    } finally {
      Hs(n), ot(r);
    }
  }
}
function ps(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ls(() => {
      i.abort(Ct);
    });
    var r = n.next;
    (n.f & rn) !== 0 ? n.parent = null : $e(n, t), n = r;
  }
}
function ed(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & pt) === 0 && $e(t), t = n;
  }
}
function $e(e, t = !0) {
  var n = !1;
  (t || (e.f & cl) !== 0) && e.nodes !== null && e.nodes.end !== null && (td(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), oe(e, Ai), ps(e, t && !n), _r(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Jo(e), e.f ^= Ai, e.f |= rt;
  var i = e.parent;
  i !== null && i.first !== null && Qo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function td(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ St(e);
    e.remove(), e = n;
  }
}
function Qo(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Sn(e, t, n = !0) {
  var r = [];
  ea(e, r, !0);
  var i = () => {
    n && $e(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of r)
      a.out(o);
  } else
    i();
}
function ea(e, t, n) {
  if ((e.f & Ue) === 0) {
    e.f ^= Ue;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, o = (i.f & En) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & pt) !== 0 && (e.f & an) !== 0;
      ea(i, t, o ? n : !1), i = s;
    }
  }
}
function ws(e) {
  ta(e, !0);
}
function ta(e, t) {
  if ((e.f & Ue) !== 0) {
    e.f ^= Ue, (e.f & de) === 0 && (oe(e, xe), sn.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & En) !== 0 || (n.f & pt) !== 0;
      ta(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function vs(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ St(n);
      t.append(n), n = i;
    }
}
let Hr = !1, on = !1;
function Hs(e) {
  on = e;
}
let T = null, ht = !1;
function ot(e) {
  T = e;
}
let L = null;
function qt(e) {
  L = e;
}
let st = null;
function na(e) {
  T !== null && (st === null ? st = [e] : st.push(e));
}
let Pe = null, Oe = 0, Ke = null;
function nd(e) {
  Ke = e;
}
let ra = 1, bn = 0, jn = bn;
function Vs(e) {
  jn = e;
}
function ia() {
  return ++ra;
}
function Rr(e) {
  var t = e.f;
  if ((t & xe) !== 0)
    return !0;
  if (t & ce && (e.f &= ~Rn), (t & Mt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Rr(
        /** @type {Derived} */
        s
      ) && Fo(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & nt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ge === null && oe(e, de);
  }
  return !1;
}
function sa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(st !== null && Qn.call(st, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & ce) !== 0 ? sa(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? oe(s, xe) : (s.f & de) !== 0 && oe(s, Mt), rs(
        /** @type {Effect} */
        s
      ));
    }
}
function oa(e) {
  var S;
  var t = Pe, n = Oe, r = Ke, i = T, s = st, o = Ce, a = ht, d = jn, l = e.f;
  Pe = /** @type {null | Value[]} */
  null, Oe = 0, Ke = null, T = (l & (pt | rn)) === 0 ? e : null, st = null, tr(e.ctx), ht = !1, jn = ++bn, e.ac !== null && (ls(() => {
    e.ac.abort(Ct);
  }), e.ac = null);
  try {
    e.f |= Ci;
    var h = (
      /** @type {Function} */
      e.fn
    ), m = h();
    e.f |= ln;
    var w = e.deps, y = C == null ? void 0 : C.is_fork;
    if (Pe !== null) {
      var v;
      if (y || _r(e, Oe), w !== null && Oe > 0)
        for (w.length = Oe + Pe.length, v = 0; v < Pe.length; v++)
          w[Oe + v] = Pe[v];
      else
        e.deps = w = Pe;
      if (ds() && (e.f & nt) !== 0)
        for (v = Oe; v < w.length; v++)
          ((S = w[v]).reactions ?? (S.reactions = [])).push(e);
    } else !y && w !== null && Oe < w.length && (_r(e, Oe), w.length = Oe);
    if (qo() && Ke !== null && !ht && w !== null && (e.f & (ce | Mt | xe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Ke.length; v++)
        sa(
          Ke[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (bn++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = bn;
      if (t !== null)
        for (const g of t)
          g.rv = bn;
      Ke !== null && (r === null ? r = Ke : r.push(.../** @type {Source[]} */
      Ke));
    }
    return (e.f & en) !== 0 && (e.f ^= en), m;
  } catch (g) {
    return jo(g);
  } finally {
    e.f ^= Ci, Pe = t, Oe = n, Ke = r, T = i, st = s, tr(o), ht = a, jn = d;
  }
}
function rd(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ol.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pe === null || !Qn.call(Pe, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & nt) !== 0 && (s.f ^= nt, s.f &= ~Rn), ns(s), Yl(s), _r(s, 0);
  }
}
function _r(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      rd(e, n[r]);
}
function rr(e) {
  var t = e.f;
  if ((t & rt) === 0) {
    oe(e, de);
    var n = L, r = Hr;
    L = e, Hr = !0;
    try {
      (t & (an | bo)) !== 0 ? ed(e) : ps(e), Jo(e);
      var i = oa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ra;
      var s;
      sl && Rl && (e.f & xe) !== 0 && e.deps;
    } finally {
      Hr = r, L = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & ce) !== 0;
  if (T !== null && !ht) {
    var r = L !== null && (L.f & rt) !== 0;
    if (!r && (st === null || !Qn.call(st, e))) {
      var i = T.deps;
      if ((T.f & Ci) !== 0)
        e.rv < bn && (e.rv = bn, Pe === null && i !== null && i[Oe] === e ? Oe++ : Pe === null ? Pe = [e] : Pe.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [T] : Qn.call(s, T) || s.push(T);
      }
    }
  }
  if (on && nn.has(e))
    return nn.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (on) {
      var a = o.v;
      return ((o.f & de) === 0 && o.reactions !== null || la(o)) && (a = is(o)), nn.set(o, a), a;
    }
    var d = (o.f & nt) === 0 && !ht && T !== null && (Hr || (T.f & nt) !== 0), l = (o.f & ln) === 0;
    Rr(o) && (d && (o.f |= nt), Fo(o)), d && !l && (Ho(o), aa(o));
  }
  if (ge != null && ge.has(e))
    return ge.get(e);
  if ((e.f & en) !== 0)
    throw e.v;
  return e.v;
}
function aa(e) {
  if (e.f |= nt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ce) !== 0 && (t.f & nt) === 0 && (Ho(
        /** @type {Derived} */
        t
      ), aa(
        /** @type {Derived} */
        t
      ));
}
function la(e) {
  if (e.v === we) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (nn.has(t) || (t.f & ce) !== 0 && la(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ir(e) {
  var t = ht;
  try {
    return ht = !0, e();
  } finally {
    ht = t;
  }
}
const yn = Symbol("events"), da = /* @__PURE__ */ new Set(), Bi = /* @__PURE__ */ new Set();
function id(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Yi.call(t, s), !s.cancelBubble)
      return ls(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function sd(e, t, n, r, i) {
  var s = { capture: r, passive: i }, o = id(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && us(() => {
    t.removeEventListener(e, o, s);
  });
}
function je(e, t, n) {
  (t[yn] ?? (t[yn] = {}))[e] = n;
}
function ua(e) {
  for (var t = 0; t < e.length; t++)
    da.add(e[t]);
  for (var n of Bi)
    n(e);
}
let Us = null;
function Yi(e) {
  var g, q;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Us = e;
  var o = 0, a = Us === e && e[yn];
  if (a) {
    var d = i.indexOf(a);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[yn] = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1)
      return;
    d <= l && (o = d);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    yr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = T, m = L;
    ot(null), qt(null);
    try {
      for (var w, y = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var S = (q = s[yn]) == null ? void 0 : q[r];
          S != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && S.call(s, e);
        } catch (D) {
          w ? y.push(D) : w = D;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        s = v;
      }
      if (w) {
        for (let D of y)
          queueMicrotask(() => {
            throw D;
          });
        throw w;
      }
    } finally {
      e[yn] = t, delete e.currentTarget, ot(h), qt(m);
    }
  }
}
var fo;
const $i = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((fo = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : fo.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function od(e) {
  return (
    /** @type {string} */
    ($i == null ? void 0 : $i.createHTML(e)) ?? e
  );
}
function ad(e) {
  var t = os("template");
  return t.innerHTML = od(e.replaceAll("<!>", "<!---->")), t.content;
}
function Vn(e, t) {
  var n = (
    /** @type {Effect} */
    L
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & rl) !== 0, r = (t & il) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (F)
      return Vn(I, null), I;
    i === void 0 && (i = ad(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Tn(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Bo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tn(o)
      ), d = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Vn(a, d);
    } else
      Vn(o, o);
    return o;
  };
}
function ca() {
  if (F)
    return Vn(I, null), I;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = it();
  return e.append(t, n), Vn(t, n), e;
}
function B(e, t) {
  if (F) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      L
    );
    ((n.f & ln) === 0 || n.nodes.end === null) && (n.nodes.end = I), ai();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ld = ["touchstart", "touchmove"];
function dd(e) {
  return ld.includes(e);
}
function De(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function fa(e, t) {
  return ha(e, t);
}
function ud(e, t) {
  Ui(), t.intro = t.intro ?? !1;
  const n = t.target, r = F, i = I;
  try {
    for (var s = /* @__PURE__ */ Tn(n); s && (s.nodeType !== Er || /** @type {Comment} */
    s.data !== po); )
      s = /* @__PURE__ */ St(s);
    if (!s)
      throw Jn;
    Wt(!0), Ae(
      /** @type {Comment} */
      s
    );
    const o = ha(e, { ...t, anchor: s });
    return Wt(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Jn && console.warn("Failed to hydrate: ", o), t.recover === !1 && xl(), Ui(), Zo(n), Wt(!1), fa(e, t);
  } finally {
    Wt(r), Ae(i);
  }
}
const Dr = /* @__PURE__ */ new Map();
function ha(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0, transformError: a }) {
  Ui();
  var d = void 0, l = Jl(() => {
    var h = n ?? t.appendChild(it());
    Ol(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (y) => {
        li({});
        var v = (
          /** @type {ComponentContext} */
          Ce
        );
        if (s && (v.c = s), i && (r.$$events = i), F && Vn(
          /** @type {TemplateNode} */
          y,
          null
        ), d = e(y, r) || {}, F && (L.nodes.end = I, I === null || I.nodeType !== Er || /** @type {Comment} */
        I.data !== es))
          throw oi(), Jn;
        di();
      },
      a
    );
    var m = /* @__PURE__ */ new Set(), w = (y) => {
      for (var v = 0; v < y.length; v++) {
        var S = y[v];
        if (!m.has(S)) {
          m.add(S);
          var g = dd(S);
          for (const $ of [t, document]) {
            var q = Dr.get($);
            q === void 0 && (q = /* @__PURE__ */ new Map(), Dr.set($, q));
            var D = q.get(S);
            D === void 0 ? ($.addEventListener(S, Yi, { passive: g }), q.set(S, 1)) : q.set(S, D + 1);
          }
        }
      }
    };
    return w(ri(da)), Bi.add(w), () => {
      var g;
      for (var y of m)
        for (const q of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Dr.get(q)
          ), S = (
            /** @type {number} */
            v.get(y)
          );
          --S == 0 ? (q.removeEventListener(y, Yi), v.delete(y), v.size === 0 && Dr.delete(q)) : v.set(y, S);
        }
      Bi.delete(w), h !== n && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Gi.set(d, l), d;
}
let Gi = /* @__PURE__ */ new WeakMap();
function cd(e, t) {
  const n = Gi.get(e);
  return n ? (Gi.delete(e), n(t)) : Promise.resolve();
}
var ft, xt, Ve, Mn, Sr, jr, ei;
class pa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    X(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, ft, /* @__PURE__ */ new Map());
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
    R(this, xt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, Mn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, Sr, !0);
    /**
     * @param {Batch} batch
     */
    R(this, jr, (t) => {
      if (f(this, ft).has(t)) {
        var n = (
          /** @type {Key} */
          f(this, ft).get(t)
        ), r = f(this, xt).get(n);
        if (r)
          ws(r), f(this, Mn).delete(n);
        else {
          var i = f(this, Ve).get(n);
          i && (f(this, xt).set(n, i.effect), f(this, Ve).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of f(this, ft)) {
          if (f(this, ft).delete(s), s === t)
            break;
          const a = f(this, Ve).get(o);
          a && ($e(a.effect), f(this, Ve).delete(o));
        }
        for (const [s, o] of f(this, xt)) {
          if (s === n || f(this, Mn).has(s)) continue;
          const a = () => {
            if (Array.from(f(this, ft).values()).includes(s)) {
              var l = document.createDocumentFragment();
              vs(o, l), l.append(it()), f(this, Ve).set(s, { effect: o, fragment: l });
            } else
              $e(o);
            f(this, Mn).delete(s), f(this, xt).delete(s);
          };
          f(this, Sr) || !r ? (f(this, Mn).add(s), Sn(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, ei, (t) => {
      f(this, ft).delete(t);
      const n = Array.from(f(this, ft).values());
      for (const [r, i] of f(this, Ve))
        n.includes(r) || ($e(i.effect), f(this, Ve).delete(r));
    });
    this.anchor = t, E(this, Sr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      C
    ), i = Xo();
    if (n && !f(this, xt).has(t) && !f(this, Ve).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = it();
        s.append(o), f(this, Ve).set(t, {
          effect: et(() => n(o)),
          fragment: s
        });
      } else
        f(this, xt).set(
          t,
          et(() => n(this.anchor))
        );
    if (f(this, ft).set(r, t), i) {
      for (const [a, d] of f(this, xt))
        a === t ? r.unskip_effect(d) : r.skip_effect(d);
      for (const [a, d] of f(this, Ve))
        a === t ? r.unskip_effect(d.effect) : r.skip_effect(d.effect);
      r.oncommit(f(this, jr)), r.ondiscard(f(this, ei));
    } else
      F && (this.anchor = I), f(this, jr).call(this, r);
  }
}
ft = new WeakMap(), xt = new WeakMap(), Ve = new WeakMap(), Mn = new WeakMap(), Sr = new WeakMap(), jr = new WeakMap(), ei = new WeakMap();
function fd(e, t, ...n) {
  var r = new pa(e);
  ci(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((s) => i(s, ...n)));
  }, En);
}
function wa(e) {
  Ce === null && wl(), cs(() => {
    const t = ir(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Te(e, t, n = !1) {
  var r;
  F && (r = I, ai());
  var i = new pa(e), s = n ? En : 0;
  function o(a, d) {
    if (F) {
      var l = _o(
        /** @type {TemplateNode} */
        r
      );
      if (a !== parseInt(l.substring(1))) {
        var h = Gr();
        Ae(h), i.anchor = h, Wt(!1), i.ensure(a, d), Wt(!0);
        return;
      }
    }
    i.ensure(a, d);
  }
  ci(() => {
    var a = !1;
    t((d, l = 0) => {
      a = !0, o(l, d);
    }), a || o(-1, null);
  }, s);
}
function hd(e, t, n) {
  for (var r = [], i = t.length, s, o = t.length, a = 0; a < i; a++) {
    let m = t[a];
    Sn(
      m,
      () => {
        if (s) {
          if (s.pending.delete(m), s.done.add(m), s.pending.size === 0) {
            var w = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Zi(e, ri(s.done)), w.delete(s), w.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var d = r.length === 0 && n !== null;
    if (d) {
      var l = (
        /** @type {Element} */
        n
      ), h = (
        /** @type {Element} */
        l.parentNode
      );
      Zo(h), h.append(l), e.items.clear();
    }
    Zi(e, t, !d);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Zi(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const a of o)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r != null && r.has(s)) {
      s.f |= kt;
      const o = document.createDocumentFragment();
      vs(s, o);
    } else
      $e(t[i], n);
  }
}
var Bs;
function Xr(e, t, n, r, i, s = null) {
  var o = e, a = /* @__PURE__ */ new Map(), d = (t & ho) !== 0;
  if (d) {
    var l = (
      /** @type {Element} */
      e
    );
    o = F ? Ae(/* @__PURE__ */ Tn(l)) : l.appendChild(it());
  }
  F && ai();
  var h = null, m = /* @__PURE__ */ Wo(() => {
    var $ = n();
    return vo($) ? $ : $ == null ? [] : ri($);
  }), w, y = /* @__PURE__ */ new Map(), v = !0;
  function S($) {
    (D.effect.f & rt) === 0 && (D.pending.delete($), D.fallback = h, pd(D, w, o, t, r), h !== null && (w.length === 0 ? (h.f & kt) === 0 ? ws(h) : (h.f ^= kt, vr(h, null, o)) : Sn(h, () => {
      h = null;
    })));
  }
  function g($) {
    D.pending.delete($);
  }
  var q = ci(() => {
    w = /** @type {V[]} */
    c(m);
    var $ = w.length;
    let V = !1;
    if (F) {
      var be = _o(o) === Qi;
      be !== ($ === 0) && (o = Gr(), Ae(o), Wt(!1), V = !0);
    }
    for (var fe = /* @__PURE__ */ new Set(), G = (
      /** @type {Batch} */
      C
    ), Z = Xo(), he = 0; he < $; he += 1) {
      F && I.nodeType === Er && /** @type {Comment} */
      I.data === es && (o = /** @type {Comment} */
      I, V = !0, Wt(!1));
      var pe = w[he], Ee = r(pe, he), ae = v ? null : a.get(Ee);
      ae ? (ae.v && nr(ae.v, pe), ae.i && nr(ae.i, he), Z && G.unskip_effect(ae.e)) : (ae = wd(
        a,
        v ? o : Bs ?? (Bs = it()),
        pe,
        Ee,
        he,
        i,
        t,
        n
      ), v || (ae.e.f |= kt), a.set(Ee, ae)), fe.add(Ee);
    }
    if ($ === 0 && s && !h && (v ? h = et(() => s(o)) : (h = et(() => s(Bs ?? (Bs = it()))), h.f |= kt)), $ > fe.size && gl(), F && $ > 0 && Ae(Gr()), !v)
      if (y.set(G, fe), Z) {
        for (const [wt, $t] of a)
          fe.has(wt) || G.skip_effect($t.e);
        G.oncommit(S), G.ondiscard(g);
      } else
        S(G);
    V && Wt(!0), c(m);
  }), D = { effect: q, items: a, pending: y, outrogroups: null, fallback: h };
  v = !1, F && (o = I);
}
function pr(e) {
  for (; e !== null && (e.f & pt) === 0; )
    e = e.next;
  return e;
}
function pd(e, t, n, r, i) {
  var pe, Ee, ae, wt, $t, dn, Be, Et, Rt;
  var s = (r & Ka) !== 0, o = t.length, a = e.items, d = pr(e.effect.first), l, h = null, m, w = [], y = [], v, S, g, q;
  if (s)
    for (q = 0; q < o; q += 1)
      v = t[q], S = i(v, q), g = /** @type {EachItem} */
      a.get(S).e, (g.f & kt) === 0 && ((Ee = (pe = g.nodes) == null ? void 0 : pe.a) == null || Ee.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(g));
  for (q = 0; q < o; q += 1) {
    if (v = t[q], S = i(v, q), g = /** @type {EachItem} */
    a.get(S).e, e.outrogroups !== null)
      for (const Me of e.outrogroups)
        Me.pending.delete(g), Me.done.delete(g);
    if ((g.f & Ue) !== 0 && (ws(g), s && ((wt = (ae = g.nodes) == null ? void 0 : ae.a) == null || wt.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(g))), (g.f & kt) !== 0)
      if (g.f ^= kt, g === d)
        vr(g, null, n);
      else {
        var D = h ? h.next : d;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Zt(e, h, g), Zt(e, g, D), vr(g, D, n), h = g, w = [], y = [], d = pr(h.next);
        continue;
      }
    if (g !== d) {
      if (l !== void 0 && l.has(g)) {
        if (w.length < y.length) {
          var $ = y[0], V;
          h = $.prev;
          var be = w[0], fe = w[w.length - 1];
          for (V = 0; V < w.length; V += 1)
            vr(w[V], $, n);
          for (V = 0; V < y.length; V += 1)
            l.delete(y[V]);
          Zt(e, be.prev, fe.next), Zt(e, h, be), Zt(e, fe, $), d = $, h = fe, q -= 1, w = [], y = [];
        } else
          l.delete(g), vr(g, d, n), Zt(e, g.prev, g.next), Zt(e, g, h === null ? e.effect.first : h.next), Zt(e, h, g), h = g;
        continue;
      }
      for (w = [], y = []; d !== null && d !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(d), y.push(d), d = pr(d.next);
      if (d === null)
        continue;
    }
    (g.f & kt) === 0 && w.push(g), h = g, d = pr(g.next);
  }
  if (e.outrogroups !== null) {
    for (const Me of e.outrogroups)
      Me.pending.size === 0 && (Zi(e, ri(Me.done)), ($t = e.outrogroups) == null || $t.delete(Me));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (d !== null || l !== void 0) {
    var G = [];
    if (l !== void 0)
      for (g of l)
        (g.f & Ue) === 0 && G.push(g);
    for (; d !== null; )
      (d.f & Ue) === 0 && d !== e.fallback && G.push(d), d = pr(d.next);
    var Z = G.length;
    if (Z > 0) {
      var he = (r & ho) !== 0 && o === 0 ? n : null;
      if (s) {
        for (q = 0; q < Z; q += 1)
          (Be = (dn = G[q].nodes) == null ? void 0 : dn.a) == null || Be.measure();
        for (q = 0; q < Z; q += 1)
          (Rt = (Et = G[q].nodes) == null ? void 0 : Et.a) == null || Rt.fix();
      }
      hd(e, G, he);
    }
  }
  s && tn(() => {
    var Me, re;
    if (m !== void 0)
      for (g of m)
        (re = (Me = g.nodes) == null ? void 0 : Me.a) == null || re.apply();
  });
}
function wd(e, t, n, r, i, s, o, a) {
  var d = (o & Za) !== 0 ? (o & Ja) === 0 ? /* @__PURE__ */ ss(n, !1, !1) : zn(n) : null, l = (o & Xa) !== 0 ? zn(i) : null;
  return {
    v: d,
    i: l,
    e: et(() => (s(t, d ?? n, l ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function vr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & kt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ St(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Zt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function gs(e, t) {
  fs(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const i = os("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function va(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = va(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function vd() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = va(e)) && (r && (r += " "), r += t);
  return r;
}
function gd(e) {
  return typeof e == "object" ? vd(e) : e ?? "";
}
const Ys = [...` 	
\r\f \v\uFEFF`];
function md(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || Ys.includes(r[o - 1])) && (a === r.length || Ys.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function Gs(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function bd(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += Gs(r)), i && (n += Gs(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function Qe(e, t, n, r, i, s) {
  var o = e.__className;
  if (F || o !== n || o === void 0) {
    var a = md(n, r, s);
    (!F || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = n;
  } else if (s && i !== s)
    for (var d in s) {
      var l = !!s[d];
      (i == null || l !== !!i[d]) && e.classList.toggle(d, l);
    }
  return s;
}
function Ei(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function Vr(e, t, n, r) {
  var i = e.__style;
  if (F || i !== t) {
    var s = bd(t, r);
    (!F || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (Ei(e, n == null ? void 0 : n[0], r[0]), Ei(e, n == null ? void 0 : n[1], r[1], "important")) : Ei(e, n, r));
  return r;
}
const yd = Symbol("is custom element"), _d = Symbol("is html"), xd = pl ? "link" : "LINK";
function se(e, t, n, r) {
  var i = kd(e);
  F && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === xd) || i[t] !== (i[t] = n) && (t === "loading" && (e[hl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Md(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function kd(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [yd]: e.nodeName.includes("-"),
      [_d]: e.namespaceURI === wo
    })
  );
}
var Zs = /* @__PURE__ */ new Map();
function Md(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Zs.get(t);
  if (n) return n;
  Zs.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = al(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = go(i);
  }
  return n;
}
var Kt, Kn, $r, ti, ga;
const ni = class ni {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    R(this, ti);
    /** */
    R(this, Kt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    R(this, Kn);
    /** @type {ResizeObserverOptions} */
    R(this, $r);
    E(this, $r, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = f(this, Kt).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), f(this, Kt).set(t, r), Y(this, ti, ga).call(this).observe(t, f(this, $r)), () => {
      var i = f(this, Kt).get(t);
      i.delete(n), i.size === 0 && (f(this, Kt).delete(t), f(this, Kn).unobserve(t));
    };
  }
};
Kt = new WeakMap(), Kn = new WeakMap(), $r = new WeakMap(), ti = new WeakSet(), ga = function() {
  return f(this, Kn) ?? E(this, Kn, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        ni.entries.set(n.target, n);
        for (var r of f(this, Kt).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
X(ni, "entries", /* @__PURE__ */ new WeakMap());
let Xi = ni;
var qd = /* @__PURE__ */ new Xi({
  box: "border-box"
});
function Xs(e, t, n) {
  var r = qd.observe(e, () => n(e[t]));
  fs(() => (ir(() => n(e[t])), r));
}
function Ks(e, t) {
  return e === t || (e == null ? void 0 : e[gr]) === t;
}
function Ki(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Ce.r
  ), s = (
    /** @type {Effect} */
    L
  );
  return fs(() => {
    var o, a;
    return hs(() => {
      o = a, a = [], ir(() => {
        e !== n(...a) && (t(e, ...a), o && Ks(n(...o), e) && t(null, ...o));
      });
    }), () => {
      let d = s;
      for (; d !== i && d.parent !== null && d.parent.f & Ai; )
        d = d.parent;
      const l = () => {
        a && Ks(n(...a), e) && t(null, ...a);
      }, h = d.teardown;
      d.teardown = () => {
        l(), h == null || h();
      };
    };
  }), e;
}
function N(e, t, n, r) {
  var D;
  var i = (n & tl) !== 0, s = (n & nl) !== 0, o = (
    /** @type {V} */
    r
  ), a = !0, d = () => (a && (a = !1, o = s ? ir(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o);
  let l;
  if (i) {
    var h = gr in e || yo in e;
    l = ((D = qn(e, t)) == null ? void 0 : D.set) ?? (h && t in e ? ($) => e[t] = $ : void 0);
  }
  var m, w = !1;
  i ? [m, w] = Cl(() => (
    /** @type {V} */
    e[t]
  )) : m = /** @type {V} */
  e[t], m === void 0 && r !== void 0 && (m = d(), l && (kl(), l(m)));
  var y;
  if (y = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? d() : (a = !0, $);
  }, (n & el) === 0)
    return y;
  if (l) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function($, V) {
        return arguments.length > 0 ? ((!V || v || w) && l(V ? y() : $), $) : y();
      })
    );
  }
  var S = !1, g = ((n & Qa) !== 0 ? ui : Wo)(() => (S = !1, y()));
  i && c(g);
  var q = (
    /** @type {Effect} */
    L
  );
  return (
    /** @type {() => V} */
    (function($, V) {
      if (arguments.length > 0) {
        const be = V ? c(g) : i ? mn($) : $;
        return b(g, be), S = !0, o !== void 0 && (o = be), $;
      }
      return on && S || (q.f & rt) !== 0 ? g.v : c(g);
    })
  );
}
function Sd(e) {
  return new jd(e);
}
var Ot, Je;
class jd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    R(this, Ot);
    /** @type {Record<string, any>} */
    R(this, Je);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (o, a) => {
      var d = /* @__PURE__ */ ss(a, !1, !1);
      return n.set(o, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return c(n.get(a) ?? r(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === yo ? !0 : (c(n.get(a) ?? r(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, d) {
          return b(n.get(a) ?? r(a, d), d), Reflect.set(o, a, d);
        }
      }
    );
    E(this, Je, (t.hydrate ? ud : fa)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && A(), E(this, Ot, i.$$events);
    for (const o of Object.keys(f(this, Je)))
      o === "$set" || o === "$destroy" || o === "$on" || yr(this, o, {
        get() {
          return f(this, Je)[o];
        },
        /** @param {any} value */
        set(a) {
          f(this, Je)[o] = a;
        },
        enumerable: !0
      });
    f(this, Je).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, f(this, Je).$destroy = () => {
      cd(f(this, Je));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, Je).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    f(this, Ot)[t] = f(this, Ot)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return f(this, Ot)[t].push(r), () => {
      f(this, Ot)[t] = f(this, Ot)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    f(this, Je).$destroy();
  }
}
Ot = new WeakMap(), Je = new WeakMap();
let ma;
typeof HTMLElement == "function" && (ma = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
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
    this.$$ctor = t, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const o = os("slot");
          i !== "default" && (o.name = i), B(s, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = $d(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Ur(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Sd({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Kl(() => {
        hs(() => {
          var i;
          this.$$r = !0;
          for (const s of Yr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const o = Ur(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const o = this.$$c.$on(i, s);
          this.$$l_u.set(s, o);
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ur(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Yr(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Ur(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
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
function $d(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ms(e, t, n, r, i, s) {
  let o = class extends ma {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Yr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Yr(t).forEach((a) => {
    yr(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(d) {
        var m;
        d = Ur(a, d, t), this.$$d[a] = d;
        var l = this.$$c;
        if (l) {
          var h = (m = qn(l, a)) == null ? void 0 : m.get;
          h ? l[a] = d : l.$set({ [a]: d });
        }
      }
    });
  }), r.forEach((a) => {
    yr(o.prototype, a, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const x = (e, t = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" aria-hidden="true">${e}</svg>`, k = (e, t = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${t}">${e}</g>`, Js = (e) => `<g fill="#000">${e}</g>`, Ed = {
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
          k(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: x(
          k(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: x(
          `${Js('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: x(
          k(
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
          `${k('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${Js(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: x(
          k(
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
          k(
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
          k('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
          k(
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
          k(
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
          k(
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
          k(
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
          k(
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
          k('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
          k(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: x(k('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
          k(
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
          k(
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
          k(
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
          k('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: x(k('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
          k(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: x(k('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
          k(
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
          k(
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
        svg: x(
          k(
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
          k('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
          k('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: x(
          k('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: x(k('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: x(k('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: x(k('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: x(k('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: x(k('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: x(k('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: x(k('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: x(
          k('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
          k('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: x(
          k('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: x(k('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: x(k('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Rd(e, t) {
  const n = Ed[e], r = n.variants;
  return (r[t ?? n.defaultVariant] ?? r[n.defaultVariant]).svg;
}
const Qs = /* @__PURE__ */ new Map();
function zd(e, t) {
  const n = `${e}:${t ?? "default"}`, r = Qs.get(n);
  if (r)
    return r;
  const i = Rd(e, t), s = `url("data:image/svg+xml;utf8,${encodeURIComponent(i)}")`;
  return Qs.set(n, s), s;
}
var Td = /* @__PURE__ */ ee("<span></span>");
const Pd = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function bt(e, t) {
  li(t, !0), gs(e, Pd);
  let n = N(t, "name", 7), r = N(t, "variant", 7), i = N(t, "decorative", 7, !0), s = N(t, "label", 7), o = N(t, "title", 7), a = N(t, "size", 7, "1rem"), d = N(t, "className", 7, ""), l = /* @__PURE__ */ H(() => zd(n(), r())), h = /* @__PURE__ */ H(() => s() ?? o() ?? n());
  var m = {
    get name() {
      return n();
    },
    set name(v) {
      n(v), A();
    },
    get variant() {
      return r();
    },
    set variant(v) {
      r(v), A();
    },
    get decorative() {
      return i();
    },
    set decorative(v = !0) {
      i(v), A();
    },
    get label() {
      return s();
    },
    set label(v) {
      s(v), A();
    },
    get title() {
      return o();
    },
    set title(v) {
      o(v), A();
    },
    get size() {
      return a();
    },
    set size(v = "1rem") {
      a(v), A();
    },
    get className() {
      return d();
    },
    set className(v = "") {
      d(v), A();
    }
  }, w = Td();
  let y;
  return ve(
    (v) => {
      Qe(w, 1, v, "svelte-1a09gvd"), se(w, "aria-hidden", i()), se(w, "aria-label", i() ? void 0 : c(h)), se(w, "role", i() ? void 0 : "img"), se(w, "title", o()), y = Vr(w, "", y, { "--icon-mask": c(l), width: a(), height: a() });
    },
    [() => gd(`app-icon ${d()}`.trim())]
  ), B(e, w), di(m);
}
ms(
  bt,
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
const Ad = "efsdb:window-settings", eo = {
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
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "system"
    }
  },
  aero: {
    id: "aero",
    label: "Aero glass",
    shadow: "0 16px 34px rgba(0, 0, 0, 0.2), 0 28px 58px rgba(0, 0, 0, 0.24)",
    settings: {
      buttonLayout: "windows-7",
      systemButtonPlacement: "right",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 8,
      chromePadding: 6,
      chromeStyle: "glass",
      alignment: "center",
      snapRestoreOnRelease: !0,
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
      alignment: "left",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "system"
    }
  },
  "mac-os-x": {
    id: "mac-os-x",
    label: "Mac OS X",
    shadow: "0 18px 42px rgba(0, 0, 0, 0.24), 0 32px 62px rgba(0, 0, 0, 0.2)",
    settings: {
      buttonLayout: "mac",
      systemButtonPlacement: "left",
      sideResizeMode: "anchored",
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 6,
      chromeStyle: "solid",
      alignment: "center",
      snapRestoreOnRelease: !1,
      shiftDragAction: "pin",
      fontPreset: "mac-system"
    }
  },
  ios: {
    id: "ios",
    label: "iOS frosted",
    shadow: "0 26px 64px rgba(0, 0, 0, 0.18)",
    settings: {
      buttonLayout: "windows-11",
      systemButtonPlacement: "right",
      sideResizeMode: "mirrored",
      borderWidth: 1,
      borderRadius: 22,
      chromePadding: 8,
      chromeStyle: "glass",
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
  }
}, to = {
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
}, me = {
  buttonLayout: "windows-11",
  systemButtonPlacement: "right",
  sideResizeMode: "anchored",
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
  chromeStyle: "solid",
  alignment: "center",
  snapRestoreOnRelease: !1,
  shiftDragAction: "pin",
  themePreset: "inherit",
  fontPreset: "system"
}, no = /* @__PURE__ */ new Set();
let ba = Vd();
function Cd(e) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Id(e) {
  switch (e) {
    case "mac":
    case "windows-7":
    case "windows-8":
    case "windows-10":
    case "windows-11":
      return e;
    case "windows":
    default:
      return me.buttonLayout;
  }
}
function Ld(e) {
  return e === "left" ? "left" : me.systemButtonPlacement;
}
function Nd(e) {
  return e === "mirrored" ? "mirrored" : me.sideResizeMode;
}
function Dd(e) {
  switch (e) {
    case "inherit":
    case "aero":
    case "slate":
    case "paper":
    case "windows-9x":
    case "mac-os-x":
    case "ios":
    case "android":
      return e;
    default:
      return me.themePreset;
  }
}
function Od(e) {
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
      return me.fontPreset;
  }
}
function Wd(e) {
  switch (e) {
    case "none":
    case "pin":
      return e;
    default:
      return me.shiftDragAction;
  }
}
function Ri(e, t, n, r) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(n, Math.min(r, Math.round(i))) : t;
}
function Fd(e) {
  return {
    buttonLayout: Id(e == null ? void 0 : e.buttonLayout),
    systemButtonPlacement: Ld(e == null ? void 0 : e.systemButtonPlacement),
    sideResizeMode: Nd(e == null ? void 0 : e.sideResizeMode),
    borderWidth: Ri(
      e == null ? void 0 : e.borderWidth,
      me.borderWidth,
      0,
      12
    ),
    borderRadius: Ri(
      e == null ? void 0 : e.borderRadius,
      me.borderRadius,
      0,
      32
    ),
    chromePadding: Ri(
      e == null ? void 0 : e.chromePadding,
      me.chromePadding,
      0,
      20
    ),
    chromeStyle: (e == null ? void 0 : e.chromeStyle) === "glass" || (e == null ? void 0 : e.chromeStyle) === "transparent" ? e.chromeStyle : me.chromeStyle,
    alignment: (e == null ? void 0 : e.alignment) === "left" || (e == null ? void 0 : e.alignment) === "right" ? e.alignment : me.alignment,
    snapRestoreOnRelease: typeof (e == null ? void 0 : e.snapRestoreOnRelease) == "boolean" ? e.snapRestoreOnRelease : me.snapRestoreOnRelease,
    shiftDragAction: Wd(e == null ? void 0 : e.shiftDragAction),
    themePreset: Dd(e == null ? void 0 : e.themePreset),
    fontPreset: Od(e == null ? void 0 : e.fontPreset)
  };
}
function Hd(e) {
  return (eo[e] ?? eo.inherit).shadow;
}
function Vd() {
  const e = Cd(Ad);
  if (!e)
    return Br(me), { ...me };
  try {
    const t = JSON.parse(e), n = Fd(t);
    return Br(n), n;
  } catch {
    return Br(me), { ...me };
  }
}
function Br(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement.style, n = to[e.fontPreset] ?? to.system, r = Hd(e.themePreset);
  t.setProperty("--efs-font-sans", n.stack), t.setProperty("--efs-window-font-family", n.stack), t.setProperty("--efs-window-border-width", `${e.borderWidth}px`), t.setProperty("--efs-window-radius", `${e.borderRadius}px`), t.setProperty("--efs-window-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-window-system-button-placement", e.systemButtonPlacement), t.setProperty("--efs-window-side-resize-mode", e.sideResizeMode), t.setProperty("--efs-window-shell-shadow", r), t.setProperty("--efs-widget-border-width", `${e.borderWidth}px`), t.setProperty("--efs-widget-radius", `${e.borderRadius}px`), t.setProperty("--efs-widget-chrome-padding", `${e.chromePadding}px`), t.setProperty("--efs-widget-shadow", r), t.removeProperty("--efs-window-theme-panel"), t.removeProperty("--efs-window-theme-surface"), t.removeProperty("--efs-window-theme-border"), t.removeProperty("--efs-window-theme-shadow"), t.removeProperty("--efs-window-theme-hover");
}
function Ud(e) {
  return no.add(e), e(ba), () => {
    no.delete(e);
  };
}
typeof window < "u" && window.addEventListener("efsdb-themechange", () => {
  Br(ba);
});
var Bd = /* @__PURE__ */ ee('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), Yd = /* @__PURE__ */ ee("<div><span></span></div>"), Gd = /* @__PURE__ */ ee('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Zd = /* @__PURE__ */ ee('<button type="button"><!></button>'), Xd = /* @__PURE__ */ ee('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), Kd = /* @__PURE__ */ ee('<!> <button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button>', 1), Jd = /* @__PURE__ */ ee('<button type="button" class="window-button system close close-button svelte-1k3ojqh" aria-label="Close window"><!></button>'), Qd = /* @__PURE__ */ ee('<button type="button" class="window-button system minimize-button svelte-1k3ojqh"><!></button> <button type="button" class="window-button system maximize-button svelte-1k3ojqh"><!></button> <!>', 1), eu = /* @__PURE__ */ ee('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" class="window-button svelte-1k3ojqh" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-controls system-controls svelte-1k3ojqh"><!></div></div>'), tu = /* @__PURE__ */ ee('<div class="window-content svelte-1k3ojqh"><!></div>'), nu = /* @__PURE__ */ ee('<button type="button" tabindex="-1" aria-hidden="true"></button>'), ru = /* @__PURE__ */ ee("<!> <!> <div><!> <!> <!></div>", 1);
const iu = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--shell-panel, rgba(15, 23, 42, 0.94));--window-surface: var(--shell-surface, rgba(15, 23, 42, 0.98));--window-border: var(--shell-border, rgba(148, 163, 184, 0.24));--window-hover: var(--shell-row-hover, rgba(125, 211, 252, 0.12));--window-shadow: var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42)));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-control-size: 2.15rem;--window-aux-width: 2.35rem;--window-system-width: 2.75rem;--window-control-gap: 0.14rem;--window-control-radius: 10px;--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;min-width:min(100vw - 1rem, 18rem);min-height:0;border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow), inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='transparent'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-1k3ojqh {--window-control-size: 1.92rem;--window-aux-width: 2.05rem;--window-system-width: 2.28rem;--window-control-gap: 0.08rem;--window-control-radius: 8px;}.window-shell.is-ready.svelte-1k3ojqh {opacity:1;}.window-shell.is-dragging.svelte-1k3ojqh,
  .window-shell.is-resizing.svelte-1k3ojqh {transition:none;}.window-shell.maximized.svelte-1k3ojqh {inset:0 !important;width:100vw !important;height:100vh !important;transform:none !important;border-radius:0;}.window-shell.minimized.svelte-1k3ojqh {opacity:0;pointer-events:none;transform:translate(0, calc(100vh + 2rem)) scale(0.98) !important;}.window-shell.rolled-up.svelte-1k3ojqh {height:auto !important;min-height:0;}.window-shell.chromeless.svelte-1k3ojqh {border:none;box-shadow:none;background:transparent;}.window-chrome.svelte-1k3ojqh {position:relative;isolation:isolate;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:0.65rem;min-height:calc(var(--window-control-size) + var(--window-chrome-padding));padding-block:max(0.18rem, calc(var(--window-chrome-padding) * 0.5));padding-inline:max(0.35rem, var(--window-chrome-padding));border-bottom:1px solid color-mix(in srgb, var(--window-border), transparent 18%);user-select:none;touch-action:none;cursor:grab;background:transparent;}.window-shell[data-style='transparent'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {border-bottom-color:transparent;}.window-tools.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:0;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-button.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:1px solid color-mix(in srgb, var(--window-border), transparent 44%);border-radius:var(--window-control-radius);background:color-mix(in srgb, var(--window-panel), transparent 8%);color:var(--window-muted);cursor:pointer;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);transition:background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;}.window-button.svelte-1k3ojqh .app-icon {width:0.9rem;height:0.9rem;}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-primary), transparent 68%);background:color-mix(in srgb, var(--window-hover), transparent 12%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 56%);background:color-mix(in srgb, var(--window-primary), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-theme='aero'].svelte-1k3ojqh {--window-control-radius: 8px;}.window-shell[data-theme='aero'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 70%),
      transparent;}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh {--window-control-size: 1.88rem;--window-aux-width: 2rem;--window-system-width: 2rem;--window-control-radius: 0;box-shadow:var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.45rem;padding-block:max(0.12rem, calc(var(--window-chrome-padding) * 0.4));}.window-shell[data-theme='windows-9x'].svelte-1k3ojqh .window-button:where(.svelte-1k3ojqh) {border-color:color-mix(in srgb, var(--window-border), transparent 12%);border-radius:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.4rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh {--window-control-size: 1.9rem;--window-aux-width: 2rem;--window-system-width: 0.96rem;--window-control-radius: 999px;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {gap:0.55rem;min-height:calc(var(--window-control-size) + max(0.5rem, calc(var(--window-chrome-padding) * 0.72)));padding-block:max(0.16rem, calc(var(--window-chrome-padding) * 0.4));}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.2rem;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:1.85rem;height:1.85rem;border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 38%);background:color-mix(in srgb, var(--window-panel), transparent 18%);box-shadow:none;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {width:0.92rem;height:0.92rem;border-radius:999px;border-color:rgba(0, 0, 0, 0.14);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);color:rgba(0, 0, 0, 0.54);}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.5rem;height:0.5rem;opacity:0;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh):hover .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible .app-icon {opacity:0.72;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:#ff5f57;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .minimize-button:where(.svelte-1k3ojqh) {background:#febc2e;}.window-shell[data-theme='mac-os-x'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .maximize-button:where(.svelte-1k3ojqh) {background:#28c840;}.window-shell[data-theme='ios'].svelte-1k3ojqh {box-shadow:var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='ios'].svelte-1k3ojqh {--window-control-radius: 999px;}.window-shell[data-theme='android'].svelte-1k3ojqh {--window-control-radius: 8px;}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size: 1.86rem;--window-aux-width: 1.96rem;--window-system-width: 2.16rem;--window-control-gap: 0.06rem;}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(var(--window-control-size) + max(0.45rem, calc(var(--window-chrome-padding) * 0.84)));}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}
  }`
};
function ya(e, t) {
  li(t, !0), gs(e, iu);
  let n = N(t, "title", 7), r = N(t, "state", 15, "normal"), i = N(t, "x", 15, 100), s = N(t, "y", 15, 100), o = N(t, "width", 15, 600), a = N(t, "height", 15, 400), d = N(t, "locked", 7, !1), l = N(t, "chromeless", 7, !1), h = N(t, "buttonLayout", 7), m = N(t, "systemButtonPlacement", 7), w = N(t, "sideResizeMode", 7), y = N(t, "borderWidth", 7), v = N(t, "borderRadius", 7), S = N(t, "chromePadding", 7), g = N(t, "chromeStyle", 7), q = N(t, "alignment", 7), D = N(t, "themePreset", 7), $ = N(t, "fontPreset", 7), V = N(t, "snapRestoreOnRelease", 7), be = N(t, "shiftDragAction", 7), fe = N(t, "zIndex", 7, 100), G = N(t, "pinned", 7, !1), Z = N(t, "dragSeed", 7, null), he = N(t, "onClose", 7), pe = N(t, "onPinToggle", 7), Ee = N(t, "onConsumeDragSeed", 7), ae = N(t, "onStateChange", 7), wt = N(t, "children", 7);
  const $t = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], dn = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], Be = 360, Et = 240, Rt = 44, Me = 1400;
  let re = /* @__PURE__ */ W(mn({ ...me })), sr = /* @__PURE__ */ W(!1), un = /* @__PURE__ */ W(!1), Ye = /* @__PURE__ */ W(null), M = /* @__PURE__ */ W(null), O = /* @__PURE__ */ W(null), ue = /* @__PURE__ */ W(null), U = /* @__PURE__ */ W(0), zt = /* @__PURE__ */ W(0), An = "", Cn = 0, In = 0, Ht = 0, or = 0, vt = 0, cn = 0, Ge = "se", Vt = null, Tt = !1, gt = !1, zr = 0.5, Tr = 18, Ut = !1, ye = /* @__PURE__ */ W(null), ie = 0, le = /* @__PURE__ */ W(null), te = /* @__PURE__ */ W(0), Ze = /* @__PURE__ */ W(0);
  wa(() => {
    const u = requestAnimationFrame(() => {
      b(sr, !0);
    }), p = Ud((_) => {
      b(re, { ..._ }, !0);
    });
    return () => {
      cancelAnimationFrame(u), p(), ur(), ie && typeof window < "u" && window.clearTimeout(ie);
    };
  });
  let at = /* @__PURE__ */ H(() => h() ?? c(re).buttonLayout), fn = /* @__PURE__ */ H(() => m() ?? c(re).systemButtonPlacement), Pt = /* @__PURE__ */ H(() => w() ?? c(re).sideResizeMode), lt = /* @__PURE__ */ H(() => y() ?? c(re).borderWidth), Ln = /* @__PURE__ */ H(() => v() ?? c(re).borderRadius), fi = /* @__PURE__ */ H(() => S() ?? c(re).chromePadding), Pr = /* @__PURE__ */ H(() => g() ?? c(re).chromeStyle), Ar = /* @__PURE__ */ H(() => q() ?? c(re).alignment), hi = /* @__PURE__ */ H(() => D() ?? c(re).themePreset), Cr = /* @__PURE__ */ H(() => $() ?? c(re).fontPreset), ar = /* @__PURE__ */ H(() => V() ?? c(re).snapRestoreOnRelease), pi = /* @__PURE__ */ H(() => be() ?? c(re).shiftDragAction), Ir = /* @__PURE__ */ H(() => o() < 560 ? "left" : c(Ar)), Nn = /* @__PURE__ */ H(() => o() < 520), wi = /* @__PURE__ */ H(() => Math.max(c(te), c(Ze)) + (c(Nn) ? 12 : 18)), mt = /* @__PURE__ */ W(!1), hn = 0, qe = 0, Xe = 0, Bt = 0, vi = /* @__PURE__ */ H(() => c(mt) && !l() && !d() && c(at) !== "mac" && typeof window < "u" && c(zt) <= 84 && Math.abs(c(U) - window.innerWidth / 2) <= 232), lr = /* @__PURE__ */ H(() => c(Ye) ? _s(c(Ye)) : null);
  function Yt(u) {
    var p;
    r() !== u && (r(u), (p = ae()) == null || p(r()));
  }
  function dr() {
    return { x: i(), y: s(), width: o(), height: a() };
  }
  function gi(u, p = o()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerWidth - p, u));
  }
  function mi(u, p = a()) {
    return typeof window > "u" ? Math.max(0, u) : Math.max(0, Math.min(window.innerHeight - Math.min(p, Rt), u));
  }
  function pn(u) {
    const p = Math.max(Be, Math.round(u.width)), _ = Math.max(Et, Math.round(u.height));
    return {
      x: gi(Math.round(u.x), p),
      y: mi(Math.round(u.y), _),
      width: p,
      height: _
    };
  }
  function bi() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : pn({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function bs(u) {
    const p = pn(u);
    i(p.x), s(p.y), o(p.width), a(p.height), b(M, null), Yt("normal");
  }
  function ys() {
    bs(c(O) ?? bi());
  }
  function _s(u) {
    if (typeof window > "u") return null;
    const p = window.innerWidth, _ = window.innerHeight, j = Math.round(p / 2), J = Math.round(_ / 2);
    switch (u) {
      case "maximize":
        return { x: 0, y: 0, width: p, height: _ };
      case "left-half":
        return { x: 0, y: 0, width: j, height: _ };
      case "right-half":
        return {
          x: p - j,
          y: 0,
          width: j,
          height: _
        };
      case "top-left":
        return { x: 0, y: 0, width: j, height: J };
      case "top-right":
        return {
          x: p - j,
          y: 0,
          width: j,
          height: J
        };
      case "bottom-left":
        return {
          x: 0,
          y: _ - J,
          width: j,
          height: J
        };
      case "bottom-right":
        return {
          x: p - j,
          y: _ - J,
          width: j,
          height: J
        };
    }
  }
  function yi(u, p = dr()) {
    if (b(O, pn(p), !0), u === "maximize") {
      typeof window < "u" && (i(0), s(0), o(window.innerWidth), a(window.innerHeight)), b(M, "maximize"), Yt("maximized");
      return;
    }
    const _ = _s(u);
    _ && (b(M, u, !0), Yt("normal"), i(_.x), s(_.y), o(_.width), a(_.height));
  }
  function ka() {
    typeof window > "u" || ((r() === "maximized" || c(M)) && ys(), i(gi(Math.round((window.innerWidth - o()) / 2), o())), s(mi(Math.round((window.innerHeight - a()) / 2), a())));
  }
  function Lr() {
    if (r() === "maximized") {
      ys();
      return;
    }
    yi("maximize");
  }
  function Ma() {
    Yt(r() === "rolled-up" ? "normal" : "rolled-up");
  }
  function xs() {
    Yt("minimized");
  }
  function qa() {
    b(ye, null), ie && typeof window < "u" && window.clearTimeout(ie), ie = 0;
  }
  function ks(u) {
    if (typeof window > "u") {
      b(ye, u, !0);
      return;
    }
    qa(), b(ye, u, !0), ie = window.setTimeout(
      () => {
        b(ye, null), ie = 0;
      },
      Me
    );
  }
  function Sa() {
    var J, ne;
    if (typeof window > "u" || !c(le))
      return !1;
    const u = 24, p = Math.ceil(Math.max(c(le).scrollWidth, ((J = c(le).firstElementChild) == null ? void 0 : J.scrollWidth) ?? 0)), _ = Math.ceil(Math.max(c(le).scrollHeight, ((ne = c(le).firstElementChild) == null ? void 0 : ne.scrollHeight) ?? 0)), j = pn({
      x: Math.round((window.innerWidth - p) / 2),
      y: Math.round((window.innerHeight - _ - Rt) / 2),
      width: Math.min(window.innerWidth - u * 2, Math.max(Be, p + c(lt) * 2)),
      height: Math.min(window.innerHeight - u * 2, Math.max(Et, _ + Rt + c(lt) * 2))
    });
    return b(O, dr(), !0), bs(j), !0;
  }
  function ja(u) {
    if (d() || l() || Ms(u.target))
      return;
    if (c(ye) === "fit-content") {
      ks("maximize"), Lr();
      return;
    }
    const p = Sa();
    ks(p ? "fit-content" : "maximize"), p || Lr();
  }
  function Ms(u) {
    return !!(u != null && u.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function $a(u, p) {
    if (!c(ue)) return null;
    for (const _ of c(ue).querySelectorAll("[data-snap-target]")) {
      const j = _.getBoundingClientRect();
      if (u >= j.left && u <= j.right && p >= j.top && p <= j.bottom)
        return _.dataset.snapTarget;
    }
    return null;
  }
  function Ea(u, p) {
    if (typeof window > "u") return null;
    const _ = 18, j = Math.max(72, Math.round(window.innerHeight * 0.14));
    return p <= _ ? u <= window.innerWidth * 0.33 ? "top-left" : u >= window.innerWidth * 0.67 ? "top-right" : "maximize" : u <= _ ? p <= j ? "top-left" : p >= window.innerHeight - j ? "bottom-left" : "left-half" : u >= window.innerWidth - _ ? p <= j ? "top-right" : p >= window.innerHeight - j ? "bottom-right" : "right-half" : null;
  }
  function Ra(u, p) {
    if (b(U, u, !0), b(zt, p, !0), !c(mt) || d() || l() || c(at) === "mac") {
      b(Ye, null);
      return;
    }
    b(Ye, $a(u, p) ?? Ea(u, p), !0);
  }
  function za(u, p) {
    if (!gt) return;
    const _ = c(O) ?? bi(), j = pn({
      ..._,
      x: u - _.width * zr,
      y: p - Tr
    });
    i(j.x), s(j.y), o(j.width), a(j.height), Yt("normal"), b(M, null), gt = !1, Tt = !0, hn = u, qe = p, Xe = i(), Bt = s();
  }
  function qs(u) {
    !u.shiftKey || Ut || c(pi) !== "pin" || !pe() || G() || (pe()(), Ut = !0);
  }
  function Ta(u) {
    if (d() || l() || r() === "minimized" || Ms(u.target)) return;
    b(mt, !0), Ut = !1, b(Ye, null), b(U, u.clientX, !0), b(zt, u.clientY, !0), hn = u.clientX, qe = u.clientY, Xe = i(), Bt = s(), Tt = !1, gt = !1;
    const p = dr();
    zr = p.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (u.clientX - p.x) / p.width)), Tr = Math.max(12, Math.min(28, Math.round(u.clientY - p.y || 18))), r() === "maximized" || c(M) ? (Vt = r() === "maximized" ? "maximize" : c(M), b(O, c(O) ?? bi(), !0), gt = !0) : Vt = null, qs(u), u.currentTarget.setPointerCapture(u.pointerId);
  }
  function _i(u) {
    c(mt) && (qs(u), gt && (Math.abs(u.clientX - hn) > 2 || Math.abs(u.clientY - qe) > 2) && za(u.clientX, u.clientY), i(gi(Xe + (u.clientX - hn), o())), s(mi(Bt + (u.clientY - qe), a())), Ra(u.clientX, u.clientY));
  }
  function Dn(u) {
    if (!c(mt)) return;
    const p = c(Ye);
    b(Ye, null), b(mt, !1), gt = !1, p ? yi(p, dr()) : Tt && Vt && c(ar) && !u.shiftKey && !Ut ? yi(Vt, dr()) : b(M, null), Vt = null, Tt = !1, Ut = !1;
    const _ = u.currentTarget;
    "hasPointerCapture" in _ && _.hasPointerCapture(u.pointerId) && _.releasePointerCapture(u.pointerId), window.removeEventListener("pointermove", _i), window.removeEventListener("pointerup", Dn), window.removeEventListener("pointercancel", Dn);
  }
  function Pa(u, p) {
    d() || l() || r() === "maximized" || r() === "minimized" || (c(M) && b(M, null), p.stopPropagation(), p.preventDefault(), b(un, !0), Ge = u, Cn = p.clientX, In = p.clientY, Ht = i(), or = s(), vt = o(), cn = a(), b(Ye, null), window.addEventListener("pointermove", Ss), window.addEventListener("pointerup", ur), window.addEventListener("pointercancel", ur));
  }
  function Ss(u) {
    if (!c(un)) return;
    const p = u.clientX - Cn, _ = u.clientY - In;
    let j = Ht, J = or, ne = vt, Re = cn;
    if (c(Pt) === "mirrored" && (Ge === "e" || Ge === "w")) {
      const wn = Ge === "e" ? p : -p;
      ne = Math.max(Be, vt + wn * 2), j = Ht - (ne - vt) / 2;
    } else Ge.includes("e") && (ne = Math.max(Be, vt + p));
    Ge.includes("s") && (Re = Math.max(Et, cn + _)), c(Pt) !== "mirrored" && Ge.includes("w") && (ne = Math.max(Be, vt - p), j = Ht + (vt - ne)), Ge.includes("n") && (Re = Math.max(Et, cn - _), J = or + (cn - Re));
    const Gt = pn({ x: j, y: J, width: ne, height: Re });
    i(Gt.x), s(Gt.y), o(Gt.width), a(Gt.height);
  }
  function ur() {
    c(un) && (b(un, !1), window.removeEventListener("pointermove", Ss), window.removeEventListener("pointerup", ur), window.removeEventListener("pointercancel", ur));
  }
  function Aa(u) {
    var _;
    if (typeof window > "u") return;
    const p = pn({
      x: u.clientX - Math.round(o() * 0.38),
      y: u.clientY - 18,
      width: o(),
      height: a()
    });
    i(p.x), s(p.y), Xe = i(), Bt = s(), hn = u.clientX, qe = u.clientY, b(U, u.clientX, !0), b(zt, u.clientY, !0), b(Ye, null), Vt = null, Tt = !1, gt = !1, Ut = !0, b(mt, !0), window.addEventListener("pointermove", _i), window.addEventListener("pointerup", Dn), window.addEventListener("pointercancel", Dn), (_ = Ee()) == null || _();
  }
  cs(() => {
    const u = Z() ? `${Z().pointerId}:${Z().clientX}:${Z().clientY}` : "";
    !Z() || u === An || (An = u, Aa(Z()));
  });
  var Ca = {
    get title() {
      return n();
    },
    set title(u) {
      n(u), A();
    },
    get state() {
      return r();
    },
    set state(u = "normal") {
      r(u), A();
    },
    get x() {
      return i();
    },
    set x(u = 100) {
      i(u), A();
    },
    get y() {
      return s();
    },
    set y(u = 100) {
      s(u), A();
    },
    get width() {
      return o();
    },
    set width(u = 600) {
      o(u), A();
    },
    get height() {
      return a();
    },
    set height(u = 400) {
      a(u), A();
    },
    get locked() {
      return d();
    },
    set locked(u = !1) {
      d(u), A();
    },
    get chromeless() {
      return l();
    },
    set chromeless(u = !1) {
      l(u), A();
    },
    get buttonLayout() {
      return h();
    },
    set buttonLayout(u) {
      h(u), A();
    },
    get systemButtonPlacement() {
      return m();
    },
    set systemButtonPlacement(u) {
      m(u), A();
    },
    get sideResizeMode() {
      return w();
    },
    set sideResizeMode(u) {
      w(u), A();
    },
    get borderWidth() {
      return y();
    },
    set borderWidth(u) {
      y(u), A();
    },
    get borderRadius() {
      return v();
    },
    set borderRadius(u) {
      v(u), A();
    },
    get chromePadding() {
      return S();
    },
    set chromePadding(u) {
      S(u), A();
    },
    get chromeStyle() {
      return g();
    },
    set chromeStyle(u) {
      g(u), A();
    },
    get alignment() {
      return q();
    },
    set alignment(u) {
      q(u), A();
    },
    get themePreset() {
      return D();
    },
    set themePreset(u) {
      D(u), A();
    },
    get fontPreset() {
      return $();
    },
    set fontPreset(u) {
      $(u), A();
    },
    get snapRestoreOnRelease() {
      return V();
    },
    set snapRestoreOnRelease(u) {
      V(u), A();
    },
    get shiftDragAction() {
      return be();
    },
    set shiftDragAction(u) {
      be(u), A();
    },
    get zIndex() {
      return fe();
    },
    set zIndex(u = 100) {
      fe(u), A();
    },
    get pinned() {
      return G();
    },
    set pinned(u = !1) {
      G(u), A();
    },
    get dragSeed() {
      return Z();
    },
    set dragSeed(u = null) {
      Z(u), A();
    },
    get onClose() {
      return he();
    },
    set onClose(u) {
      he(u), A();
    },
    get onPinToggle() {
      return pe();
    },
    set onPinToggle(u) {
      pe(u), A();
    },
    get onConsumeDragSeed() {
      return Ee();
    },
    set onConsumeDragSeed(u) {
      Ee(u), A();
    },
    get onStateChange() {
      return ae();
    },
    set onStateChange(u) {
      ae(u), A();
    },
    get children() {
      return wt();
    },
    set children(u) {
      wt(u), A();
    }
  }, js = ru(), $s = wr(js);
  {
    var Ia = (u) => {
      var p = Bd();
      let _;
      ve(() => _ = Vr(p, "", _, {
        left: `${c(lr).x}px`,
        top: `${c(lr).y}px`,
        width: `${c(lr).width}px`,
        height: `${c(lr).height}px`,
        "z-index": fe() + 2
      })), B(u, p);
    };
    Te($s, (u) => {
      c(lr) && !l() && u(Ia);
    });
  }
  var Es = K($s, 2);
  {
    var La = (u) => {
      var p = Gd();
      let _;
      Xr(p, 21, () => $t, (j) => j.id, (j, J) => {
        var ne = Yd();
        let Re;
        var Gt = P(ne);
        z(ne), ve(() => {
          Re = Qe(ne, 1, "snap-cell svelte-1k3ojqh", null, Re, { "is-active": c(Ye) === c(J).id }), se(ne, "data-snap-target", c(J).id), Qe(Gt, 1, `snap-shape shape-${c(J).preview}`, "svelte-1k3ojqh");
        }), B(j, ne);
      }), z(p), Ki(p, (j) => b(ue, j), () => c(ue)), ve(() => _ = Vr(p, "", _, { "z-index": fe() + 3 })), B(u, p);
    };
    Te(Es, (u) => {
      c(vi) && !l() && u(La);
    });
  }
  var At = K(Es, 2);
  let Rs, zs;
  var Ts = P(At);
  {
    var Na = (u) => {
      var p = eu();
      let _;
      var j = P(p), J = P(j);
      {
        var ne = (_e) => {
          var Ie = Zd();
          let dt;
          var fr = P(Ie);
          bt(fr, { name: "pin" }), z(Ie), ve(() => {
            dt = Qe(Ie, 1, "window-button svelte-1k3ojqh", null, dt, { "is-active": G() }), se(Ie, "aria-label", G() ? "Unpin window" : "Pin window"), se(Ie, "aria-pressed", G());
          }), je("click", Ie, function(...Le) {
            var On;
            (On = pe()) == null || On.apply(this, Le);
          }), B(_e, Ie);
        };
        Te(J, (_e) => {
          pe() && _e(ne);
        });
      }
      var Re = K(J, 2), Gt = P(Re);
      bt(Gt, { name: "center" }), z(Re);
      var wn = K(Re, 2);
      let As;
      var Fa = P(wn);
      {
        let _e = /* @__PURE__ */ H(() => r() === "rolled-up" ? "roll-up" : "roll-down");
        bt(Fa, {
          get name() {
            return c(_e);
          }
        });
      }
      z(wn), z(j);
      var cr = K(j, 2), Ha = P(cr, !0);
      z(cr);
      var xi = K(cr, 2), Va = P(xi);
      {
        var Ua = (_e) => {
          var Ie = Kd(), dt = wr(Ie);
          {
            var fr = (Se) => {
              var Ne = Xd(), Mi = P(Ne);
              bt(Mi, { name: "close", variant: "rounded" }), z(Ne), je("click", Ne, function(...qi) {
                var hr;
                (hr = he()) == null || hr.apply(this, qi);
              }), B(Se, Ne);
            };
            Te(dt, (Se) => {
              he() && Se(fr);
            });
          }
          var Le = K(dt, 2), On = P(Le);
          {
            let Se = /* @__PURE__ */ H(() => r() === "minimized" ? "restore" : "minimize");
            bt(On, {
              get name() {
                return c(Se);
              },
              variant: "tray"
            });
          }
          z(Le);
          var Wn = K(Le, 2), ki = P(Wn);
          {
            let Se = /* @__PURE__ */ H(() => r() === "maximized" ? "restore" : "maximize"), Ne = /* @__PURE__ */ H(() => r() === "maximized" ? "stack" : "expand");
            bt(ki, {
              get name() {
                return c(Se);
              },
              get variant() {
                return c(Ne);
              }
            });
          }
          z(Wn), ve(() => {
            se(Le, "aria-label", r() === "minimized" ? "Restore window" : "Minimize window"), se(Wn, "aria-label", r() === "maximized" ? "Restore window" : "Maximize window");
          }), je("click", Le, () => r() === "minimized" ? Yt("normal") : xs()), je("click", Wn, Lr), B(_e, Ie);
        }, Ba = (_e) => {
          var Ie = Qd(), dt = wr(Ie), fr = P(dt);
          {
            let Se = /* @__PURE__ */ H(() => r() === "minimized" ? "restore" : "minimize");
            bt(fr, {
              get name() {
                return c(Se);
              },
              variant: "tray"
            });
          }
          z(dt);
          var Le = K(dt, 2), On = P(Le);
          {
            let Se = /* @__PURE__ */ H(() => r() === "maximized" ? "restore" : "maximize"), Ne = /* @__PURE__ */ H(() => r() === "maximized" ? "stack" : "expand");
            bt(On, {
              get name() {
                return c(Se);
              },
              get variant() {
                return c(Ne);
              }
            });
          }
          z(Le);
          var Wn = K(Le, 2);
          {
            var ki = (Se) => {
              var Ne = Jd(), Mi = P(Ne);
              bt(Mi, { name: "close", variant: "rounded" }), z(Ne), je("click", Ne, function(...qi) {
                var hr;
                (hr = he()) == null || hr.apply(this, qi);
              }), B(Se, Ne);
            };
            Te(Wn, (Se) => {
              he() && Se(ki);
            });
          }
          ve(() => {
            se(dt, "aria-label", r() === "minimized" ? "Restore window" : "Minimize window"), se(Le, "aria-label", r() === "maximized" ? "Restore window" : "Maximize window");
          }), je("click", dt, () => r() === "minimized" ? Yt("normal") : xs()), je("click", Le, Lr), B(_e, Ie);
        };
        Te(Va, (_e) => {
          c(at) === "mac" ? _e(Ua) : _e(Ba, -1);
        });
      }
      z(xi), z(p), ve(() => {
        _ = Qe(p, 1, `window-chrome chrome-${c(Pr) ?? ""}`, "svelte-1k3ojqh", _, {
          "layout-mac": c(at) === "mac",
          "layout-windows": c(at) !== "mac"
        }), se(p, "aria-label", `${n()} window controls`), As = Qe(wn, 1, "window-button svelte-1k3ojqh", null, As, { "is-active": r() === "rolled-up" }), se(wn, "aria-label", r() === "rolled-up" ? "Restore height" : "Roll up"), Qe(cr, 1, `window-title align-${c(Ir) ?? ""}`, "svelte-1k3ojqh"), se(cr, "title", n()), De(Ha, n());
      }), je("pointerdown", p, Ta), je("pointermove", p, _i), je("pointerup", p, Dn), sd("pointercancel", p, Dn), je("dblclick", p, ja), je("click", Re, ka), je("click", wn, Ma), Xs(j, "clientWidth", (_e) => b(te, _e)), Xs(xi, "clientWidth", (_e) => b(Ze, _e)), B(u, p);
    };
    Te(Ts, (u) => {
      l() || u(Na);
    });
  }
  var Ps = K(Ts, 2);
  {
    var Da = (u) => {
      var p = tu(), _ = P(p);
      fd(_, () => wt() ?? Qt), z(p), Ki(p, (j) => b(le, j), () => c(le)), B(u, p);
    };
    Te(Ps, (u) => {
      r() !== "rolled-up" && r() !== "minimized" && u(Da);
    });
  }
  var Oa = K(Ps, 2);
  {
    var Wa = (u) => {
      var p = ca(), _ = wr(p);
      Xr(_, 16, () => dn, (j) => j, (j, J) => {
        var ne = nu();
        ve(() => Qe(ne, 1, `resize-handle dir-${J}`, "svelte-1k3ojqh")), je("pointerdown", ne, (Re) => Pa(J, Re)), B(j, ne);
      }), B(u, p);
    };
    Te(Oa, (u) => {
      !l() && r() !== "maximized" && r() !== "minimized" && u(Wa);
    });
  }
  return z(At), ve(() => {
    Rs = Qe(At, 1, "window-shell svelte-1k3ojqh", null, Rs, {
      "is-ready": c(sr),
      "is-dragging": c(mt),
      "is-resizing": c(un),
      "compact-controls": c(Nn),
      maximized: r() === "maximized",
      minimized: r() === "minimized",
      "rolled-up": r() === "rolled-up",
      chromeless: l()
    }), se(At, "data-layout", c(at)), se(At, "data-system-placement", c(fn)), se(At, "data-style", c(Pr)), se(At, "data-theme", c(hi)), se(At, "data-font", c(Cr)), zs = Vr(At, "", zs, {
      "--window-border-width": `${c(lt)}px`,
      "--window-radius": `${c(Ln)}px`,
      "--window-chrome-padding": `${c(fi)}px`,
      "--window-title-guard": `${c(wi)}px`,
      transform: r() === "normal" || r() === "rolled-up" ? `translate(${i()}px, ${s()}px)` : void 0,
      width: r() === "normal" || r() === "rolled-up" ? `${o()}px` : void 0,
      height: r() === "normal" ? `${a()}px` : void 0,
      "z-index": fe()
    });
  }), B(e, js), di(Ca);
}
ua([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
ms(
  ya,
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
const su = 3500, ro = 7e3, ou = 60;
let io = !1;
function zi(e) {
  return e.slice().sort((t, n) => n.timestamp - t.timestamp).slice(0, ou);
}
function au() {
  const { subscribe: e, set: t, update: n } = zo([]);
  return {
    subscribe: e,
    add: (r) => n((i) => zi([r, ...i])),
    upsert: (r) => n((i) => {
      const s = i.findIndex((a) => a.id === r.id);
      if (s === -1)
        return zi([r, ...i]);
      const o = [...i];
      return o[s] = r, zi(o);
    }),
    patch: (r, i) => n(
      (s) => s.map((o) => o.id === r ? { ...o, ...i, id: o.id } : o)
    ),
    updateStatus: (r, i, s) => n((o) => o.map((a) => a.id === r ? { ...a, status: i, durationMs: s ?? a.durationMs } : a)),
    remove: (r) => n((i) => i.filter((s) => s.id !== r)),
    clear: () => t([])
  };
}
const tt = au();
function lu() {
  const { subscribe: e, set: t } = zo({
    state: "idle",
    pendingCount: 0,
    slowCount: 0,
    lastError: null
  });
  return {
    subscribe: e,
    set: (n) => t(n)
  };
}
const _a = lu();
let so = !1, du = 0, Ji = 0, Kr = null, Ti = null;
const $n = /* @__PURE__ */ new Map();
function xa(e) {
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
function uu(e, t) {
  return typeof (t == null ? void 0 : t.method) == "string" && t.method.trim() !== "" ? t.method.toUpperCase() : e instanceof Request && e.method.trim() !== "" ? e.method.toUpperCase() : "GET";
}
function cu(e) {
  return e ? e.origin === window.location.origin ? `${e.pathname}${e.search}` : e.toString() : "Unknown request";
}
function fu(e) {
  if (typeof window > "u")
    return !1;
  const t = xa(e);
  return !t || t.origin !== window.location.origin || t.pathname.includes("/_efsdb/api/auth/refresh") ? !1 : t.pathname.startsWith("/_efsdb/") || t.pathname.startsWith("/api/");
}
function Ft() {
  const e = Array.from($n.values()).filter((r) => r.slow).length, t = Date.now();
  let n = "idle";
  Ji > t && Kr ? n = "error" : e > 0 ? n = "long" : $n.size > 0 && (n = "processing"), _a.set({
    state: n,
    pendingCount: $n.size,
    slowCount: e,
    lastError: n === "error" ? Kr : null
  });
}
function oo(e) {
  Kr = e, Ji = Date.now() + ro, Ti && clearTimeout(Ti), Ti = setTimeout(() => {
    Date.now() >= Ji && (Kr = null, Ft());
  }, ro + 50), Ft();
}
function hu(e, t) {
  const n = ++du, r = xa(e), i = cu(r), s = uu(e, t), o = Date.now(), a = `request-${n}`, d = {
    notificationId: a,
    method: s,
    path: i,
    startedAt: o,
    slow: !1,
    slowTimer: null
  };
  return d.slowTimer = setTimeout(() => {
    const l = $n.get(n);
    l && (l.slow = !0, tt.patch(l.notificationId, {
      details: `${l.path} is taking longer than expected.`,
      timestamp: Date.now()
    }), Ft());
  }, su), $n.set(n, d), tt.upsert({
    id: a,
    title: s === "GET" ? "Loading data" : "Running action",
    status: "processing",
    category: "system",
    initiator: s,
    details: i,
    timestamp: o
  }), Ft(), n;
}
function ao(e, t, n, r, i) {
  tt.upsert({
    id: `${e.notificationId}-alert`,
    title: t,
    details: n,
    status: "error",
    category: "alerts",
    initiator: e.method,
    durationMs: r,
    timestamp: i
  });
}
function lo(e, t, n) {
  const r = $n.get(e);
  if (!r)
    return;
  $n.delete(e), r.slowTimer && clearTimeout(r.slowTimer);
  const i = Date.now(), s = i - r.startedAt;
  if (n instanceof DOMException && n.name === "AbortError") {
    tt.patch(r.notificationId, {
      status: "info",
      details: `${r.path} was cancelled.`,
      durationMs: s,
      timestamp: i
    }), Ft();
    return;
  }
  if (n) {
    const o = n instanceof Error ? n.message : "Request failed";
    tt.patch(r.notificationId, {
      status: "error",
      details: `${r.path} failed: ${o}`,
      durationMs: s,
      timestamp: i
    }), ao(
      r,
      r.method === "GET" ? "System request failed" : "System action failed",
      `${r.path} failed: ${o}`,
      s,
      i
    ), oo(o), Ft();
    return;
  }
  if (t && !t.ok) {
    const o = t.statusText ? `${t.status} ${t.statusText}` : `HTTP ${t.status}`;
    tt.patch(r.notificationId, {
      status: "error",
      details: `${r.path} failed: ${o}`,
      durationMs: s,
      timestamp: i
    }), ao(
      r,
      r.method === "GET" ? "System request failed" : "System action failed",
      `${r.path} failed: ${o}`,
      s,
      i
    ), oo(o), Ft();
    return;
  }
  tt.patch(r.notificationId, {
    status: "completed",
    details: r.slow ? `${r.path} completed in ${(s / 1e3).toFixed(1)}s.` : `${r.path} completed.`,
    durationMs: s,
    timestamp: i
  }), Ft();
}
function pu() {
  if (so || typeof window > "u" || typeof window.fetch != "function")
    return;
  so = !0;
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    if (!fu(t))
      return e(t, n);
    const r = hu(t, n);
    try {
      const i = await e(t, n);
      return lo(r, i), i;
    } catch (i) {
      throw lo(r, void 0, i), i;
    }
  }, Ft();
}
function wu() {
  if (io || typeof window > "u")
    return;
  io = !0;
  const e = Date.now();
  tt.upsert({
    id: "seed-inbox-init",
    title: "Notifications initialized",
    details: "System activity inbox is ready. The footer orb reflects live request state as work starts.",
    status: "info",
    category: "general",
    initiator: "Init",
    timestamp: e - 2e4
  }), tt.upsert({
    id: "seed-production-published",
    title: "Production published",
    details: "Synced from staged and published to production on first launch.",
    status: "completed",
    category: "general",
    initiator: "Deploy",
    timestamp: e - 1e4
  }), tt.upsert({
    id: "seed-system-log-ready",
    title: "System log stream online",
    details: "Fetches, actions, sync work, and publish steps will be written here as live activity.",
    status: "info",
    category: "system",
    initiator: "Logger",
    timestamp: e - 15e3
  }), tt.upsert({
    id: "seed-alert-watch",
    title: "Alerts standing by",
    details: "Failures, sync drift, and publish issues will appear here when something needs attention.",
    status: "info",
    category: "alerts",
    initiator: "Watch",
    timestamp: e - 5e3
  });
}
var vu = /* @__PURE__ */ ee('<span class="tab-bubble svelte-1s22qoj"> </span>'), gu = /* @__PURE__ */ ee('<button type="button"> <!></button>'), mu = /* @__PURE__ */ ee('<div class="empty-state svelte-1s22qoj"> </div>'), bu = /* @__PURE__ */ ee('<span class="inline-bubble svelte-1s22qoj"> </span>'), yu = /* @__PURE__ */ ee('<span class="svelte-1s22qoj"> </span>'), _u = /* @__PURE__ */ ee('<div><div class="notification-header svelte-1s22qoj"><span></span> <span class="title svelte-1s22qoj"> <!></span> <span class="time svelte-1s22qoj"> </span></div> <div class="notification-body svelte-1s22qoj"><div class="details svelte-1s22qoj"> </div> <div class="meta svelte-1s22qoj"><span class="svelte-1s22qoj"> </span> <!></div></div></div>'), xu = /* @__PURE__ */ ee('<div class="notifications-list svelte-1s22qoj"></div>'), ku = /* @__PURE__ */ ee('<div class="notifications-panel svelte-1s22qoj" role="dialog" aria-label="System activity"><header class="panel-status-row svelte-1s22qoj"><div class="panel-status-copy svelte-1s22qoj"><span class="panel-eyebrow svelte-1s22qoj"> </span> <p class="panel-summary svelte-1s22qoj"> </p></div> <span class="activity-pill svelte-1s22qoj"> </span></header> <div class="chat-tabs svelte-1s22qoj"></div> <div class="notifications-scroll svelte-1s22qoj"><!></div></div>'), Mu = /* @__PURE__ */ ee('<div class="notifications-window svelte-1s22qoj"><!></div>');
const qu = {
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
function Su(e, t) {
  li(t, !0), gs(e, qu);
  const n = () => Ds(tt, "$notificationStore", i), r = () => Ds(_a, "$activityStore", i), [i, s] = Al(), o = 420, a = 540, d = 16, l = 12, h = 12050;
  let m = /* @__PURE__ */ W(!1), w = /* @__PURE__ */ W(!1), y = /* @__PURE__ */ W("normal"), v = /* @__PURE__ */ W("general"), S = /* @__PURE__ */ W("footer"), g = /* @__PURE__ */ W(null), q = /* @__PURE__ */ W(l), D = /* @__PURE__ */ W(l), $ = /* @__PURE__ */ W(o), V = /* @__PURE__ */ W(a), be = /* @__PURE__ */ W(null);
  const fe = [
    { id: "general", label: "General" },
    { id: "system", label: "System" },
    { id: "alerts", label: "Alerts" }
  ], G = /* @__PURE__ */ H(() => n().filter((M) => M.category === c(v))), Z = /* @__PURE__ */ H(() => n().filter((M) => M.category === "alerts" && M.status === "error").reduce((M, O) => M + (O.count || 1), 0)), he = /* @__PURE__ */ H(() => {
    switch (r().state) {
      case "processing":
        return r().pendingCount === 1 ? "Processing" : `Processing ${r().pendingCount}`;
      case "long":
        return r().slowCount === 1 ? "Long response" : `Long responses ${r().slowCount}`;
      case "error":
        return "Failure detected";
      default:
        return "Listening";
    }
  }), pe = /* @__PURE__ */ H(() => {
    switch (r().state) {
      case "processing":
        return r().pendingCount === 1 ? "One request is currently running." : `${r().pendingCount} requests are currently running.`;
      case "long":
        return r().slowCount === 1 ? "A request is taking longer than expected." : `${r().slowCount} requests are taking longer than expected.`;
      case "error":
        return r().lastError ?? "A recent request failed.";
      default:
        return "The footer orb will pulse green until new activity starts.";
    }
  });
  function Ee(M = c(S)) {
    const O = M === "nav" ? ["nav-notification-trigger", "footer-notification-trigger"] : ["footer-notification-trigger", "nav-notification-trigger"];
    for (const ue of O) {
      const U = document.getElementById(ue);
      if (U instanceof HTMLElement) {
        b(g, U, !0), b(S, ue === "nav-notification-trigger" ? "nav" : "footer", !0);
        return;
      }
    }
    b(g, null);
  }
  function ae() {
    if (!c(g) || typeof window > "u")
      return;
    const M = c(g).getBoundingClientRect(), O = Math.min(o, Math.max(320, window.innerWidth - l * 2)), ue = Math.min(a, Math.max(320, window.innerHeight - l * 2));
    let U = M.right - O, zt = c(S) === "nav" ? M.bottom + d : M.top - ue - d;
    U = Math.min(Math.max(l, U), Math.max(l, window.innerWidth - O - l)), zt = Math.min(Math.max(l, zt), Math.max(l, window.innerHeight - ue - l)), b($, O, !0), b(V, ue, !0), b(q, Math.round(U), !0), b(D, Math.round(zt), !0);
  }
  function wt(M) {
    var ue;
    const O = (ue = M == null ? void 0 : M.detail) == null ? void 0 : ue.source;
    return O === "nav" || O === "footer" ? O : null;
  }
  function $t() {
    return c(Z) > 0 ? "alerts" : n().some((M) => M.category === "general") ? "general" : n().some((M) => M.category === "system") ? "system" : n().some((M) => M.category === "alerts") ? "alerts" : "general";
  }
  function dn(M) {
    const O = wt(M) ?? c(S), ue = c(S);
    if (b(S, O, !0), c(y) === "minimized" && b(y, "normal"), c(w)) {
      (!c(m) || c(v) === "general") && b(v, $t(), !0), b(m, !0);
      return;
    }
    if (c(m) && ue === O) {
      Be();
      return;
    }
    Ee(O), ae(), (!c(m) || c(v) === "general") && b(v, $t(), !0), b(m, !0);
  }
  function Be() {
    b(m, !1);
  }
  function Et() {
    b(w, !c(w));
  }
  function Rt(M) {
    if (!c(m) || c(w))
      return;
    const O = M.composedPath();
    c(be) && O.includes(c(be)) || c(g) && O.includes(c(g)) || Be();
  }
  function Me() {
    const M = document.getElementById("nav-notification-bubble");
    if (M instanceof HTMLElement) {
      if (c(Z) > 0) {
        M.style.display = "flex", M.textContent = c(Z) > 99 ? "99+" : c(Z).toString();
        return;
      }
      M.style.display = "none";
    }
  }
  function re() {
    const M = document.getElementById("footer-notification-trigger");
    if (!(M instanceof HTMLElement))
      return;
    M.dataset.status = r().state;
    const O = r().state === "error" ? `System activity failed: ${c(pe)}` : `System activity: ${c(pe)}`;
    M.setAttribute("title", O), M.setAttribute("aria-label", O);
  }
  wa(() => {
    document.addEventListener("efsdb:notifications:toggle", dn), document.addEventListener("pointerdown", Rt, !0), pu(), wu(), Ee(c(S)), ae(), Me(), re();
    const M = setInterval(
      () => {
        Me(), re();
      },
      1e3
    );
    return () => {
      document.removeEventListener("efsdb:notifications:toggle", dn), document.removeEventListener("pointerdown", Rt, !0), clearInterval(M);
    };
  }), cs(() => {
    c(Z), r().state, r().pendingCount, r().slowCount, r().lastError, Me(), re();
  });
  var sr = ca(), un = wr(sr);
  {
    var Ye = (M) => {
      var O = Mu(), ue = P(O);
      ya(ue, {
        title: "System Activity",
        chromeStyle: "solid",
        buttonLayout: "windows-11",
        alignment: "left",
        chromePadding: 6,
        borderRadius: 16,
        snapRestoreOnRelease: !1,
        shiftDragAction: "pin",
        get pinned() {
          return c(w);
        },
        zIndex: h,
        onClose: Be,
        onPinToggle: Et,
        get state() {
          return c(y);
        },
        set state(U) {
          b(y, U, !0);
        },
        get x() {
          return c(q);
        },
        set x(U) {
          b(q, U, !0);
        },
        get y() {
          return c(D);
        },
        set y(U) {
          b(D, U, !0);
        },
        get width() {
          return c($);
        },
        set width(U) {
          b($, U, !0);
        },
        get height() {
          return c(V);
        },
        set height(U) {
          b(V, U, !0);
        },
        children: (U, zt) => {
          var An = ku(), Cn = P(An), In = P(Cn), Ht = P(In), or = P(Ht, !0);
          z(Ht);
          var vt = K(Ht, 2), cn = P(vt, !0);
          z(vt), z(In);
          var Ge = K(In, 2), Vt = P(Ge, !0);
          z(Ge), z(Cn);
          var Tt = K(Cn, 2);
          Xr(Tt, 21, () => fe, (ye) => ye.id, (ye, ie) => {
            var le = gu();
            let te;
            var Ze = P(le), at = K(Ze);
            {
              var fn = (Pt) => {
                var lt = vu(), Ln = P(lt, !0);
                z(lt), ve(() => De(Ln, c(Z))), B(Pt, lt);
              };
              Te(at, (Pt) => {
                c(ie).id === "alerts" && c(Z) > 0 && Pt(fn);
              });
            }
            z(le), ve(() => {
              te = Qe(le, 1, "chat-tab svelte-1s22qoj", null, te, { active: c(v) === c(ie).id }), De(Ze, `${c(ie).label ?? ""} `);
            }), je("click", le, () => b(v, c(ie).id, !0)), B(ye, le);
          }), z(Tt);
          var gt = K(Tt, 2), zr = P(gt);
          {
            var Tr = (ye) => {
              var ie = mu(), le = P(ie);
              z(ie), ve(
                (te) => De(le, `No recent activity in ${te ?? ""}. The footer orb stays green
              when idle, turns yellow while requests run, orange when they drag, and red after failures.`),
                [
                  () => {
                    var te;
                    return (te = fe.find((Ze) => Ze.id === c(v))) == null ? void 0 : te.label;
                  }
                ]
              ), B(ye, ie);
            }, Ut = (ye) => {
              var ie = xu();
              Xr(ie, 21, () => c(G), (le) => le.id, (le, te) => {
                var Ze = _u();
                let at;
                var fn = P(Ze), Pt = P(fn), lt = K(Pt, 2), Ln = P(lt), fi = K(Ln);
                {
                  var Pr = (qe) => {
                    var Xe = bu(), Bt = P(Xe, !0);
                    z(Xe), ve(() => De(Bt, c(te).count)), B(qe, Xe);
                  };
                  Te(fi, (qe) => {
                    c(te).count && qe(Pr);
                  });
                }
                z(lt);
                var Ar = K(lt, 2), hi = P(Ar, !0);
                z(Ar), z(fn);
                var Cr = K(fn, 2), ar = P(Cr), pi = P(ar, !0);
                z(ar);
                var Ir = K(ar, 2), Nn = P(Ir), wi = P(Nn, !0);
                z(Nn);
                var mt = K(Nn, 2);
                {
                  var hn = (qe) => {
                    var Xe = yu(), Bt = P(Xe);
                    z(Xe), ve((vi) => De(Bt, `• ${vi ?? ""}s`), [() => (c(te).durationMs / 1e3).toFixed(1)]), B(qe, Xe);
                  };
                  Te(mt, (qe) => {
                    c(te).durationMs && qe(hn);
                  });
                }
                z(Ir), z(Cr), z(Ze), ve(
                  (qe) => {
                    at = Qe(Ze, 1, "notification-item svelte-1s22qoj", null, at, { completed: c(te).status === "completed" }), Qe(Pt, 1, `status-indicator ${c(te).status ?? ""}`, "svelte-1s22qoj"), De(Ln, `${c(te).title ?? ""} `), De(hi, qe), De(pi, c(te).details), De(wi, c(te).initiator);
                  },
                  [
                    () => new Date(c(te).timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                  ]
                ), B(le, Ze);
              }), z(ie), B(ye, ie);
            };
            Te(zr, (ye) => {
              c(G).length === 0 ? ye(Tr) : ye(Ut, -1);
            });
          }
          z(gt), z(An), ve(() => {
            De(or, c(S) === "nav" ? "Inbox launch" : "Footer activity"), De(cn, c(pe)), se(Ge, "data-state", r().state), De(Vt, c(he));
          }), B(U, An);
        },
        $$slots: { default: !0 }
      }), z(O), Ki(O, (U) => b(be, U), () => c(be)), B(M, O);
    };
    Te(un, (M) => {
      c(m) && M(Ye);
    });
  }
  B(e, sr), di(), s();
}
ua(["click"]);
customElements.define("efsdb-notifications", ms(Su, {}, [], [], { mode: "open" }));
export {
  Su as Notifications
};
