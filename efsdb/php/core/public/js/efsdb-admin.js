var Ng = Object.defineProperty;
var Rd = (t) => {
  throw TypeError(t);
};
var Hg = (t, r, n) => r in t ? Ng(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var Ht = (t, r, n) => Hg(t, typeof r != "symbol" ? r + "" : r, n), Js = (t, r, n) => r.has(t) || Rd("Cannot " + n);
var C = (t, r, n) => (Js(t, r, "read from private field"), n ? n.call(t) : r.get(t)), Ve = (t, r, n) => r.has(t) ? Rd("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, n), Ne = (t, r, n, a) => (Js(t, r, "write to private field"), a ? a.call(t, n) : r.set(t, n), n), Rt = (t, r, n) => (Js(t, r, "access private method"), n);
var nc;
typeof window < "u" && ((nc = window.__svelte ?? (window.__svelte = {})).v ?? (nc.v = /* @__PURE__ */ new Set())).add("5");
const Gg = 1, Vg = 2, ic = 4, Yg = 8, Ug = 16, Xg = 1, Kg = 4, Jg = 8, Zg = 16, Qg = 1, ev = 2, sc = "[", Dl = "[!", Od = "[?", Ll = "]", Jo = {}, _r = Symbol(), lc = "http://www.w3.org/1999/xhtml", tv = !1;
var Bl = Array.isArray, rv = Array.prototype.indexOf, Zo = Array.prototype.includes, Ps = Array.from, ms = Object.keys, fs = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, nv = Object.getOwnPropertyDescriptors, av = Object.prototype, ov = Array.prototype, dc = Object.getPrototypeOf, Id = Object.isExtensible;
const zo = () => {
};
function iv(t) {
  for (var r = 0; r < t.length; r++)
    t[r]();
}
function cc() {
  var t, r, n = new Promise((a, o) => {
    t = a, r = o;
  });
  return { promise: n, resolve: t, reject: r };
}
function sv(t, r) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const a of t)
    if (n.push(a), n.length === r) break;
  return n;
}
const pr = 2, Qo = 4, zs = 8, gc = 1 << 24, Ha = 16, zn = 32, Ba = 64, ll = 128, hn = 512, sr = 1024, zr = 2048, Bn = 4096, tn = 8192, un = 16384, Ga = 32768, dl = 1 << 25, qo = 65536, Dd = 1 << 17, lv = 1 << 18, Mo = 1 << 19, dv = 1 << 20, Ln = 1 << 25, So = 65536, cl = 1 << 21, Fl = 1 << 22, Oa = 1 << 23, yo = Symbol("$state"), vc = Symbol("legacy props"), cv = Symbol(""), oa = new class extends Error {
  constructor() {
    super(...arguments);
    Ht(this, "name", "StaleReactionError");
    Ht(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var ac;
const hc = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((ac = globalThis.document) != null && ac.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ei = 3, ai = 8;
function uc(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function gv() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vv(t, r, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function hv(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function uv() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function pv(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function wv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function mv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function fv(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function bv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kv() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ms(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function _v() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qv() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let lt = !1;
function va(t) {
  lt = t;
}
let Ue;
function Ir(t) {
  if (t === null)
    throw Ms(), Jo;
  return Ue = t;
}
function Ri() {
  return Ir(/* @__PURE__ */ Nn(Ue));
}
function s(t) {
  if (lt) {
    if (/* @__PURE__ */ Nn(Ue) !== null)
      throw Ms(), Jo;
    Ue = t;
  }
}
function jr(t = 1) {
  if (lt) {
    for (var r = t, n = Ue; r--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Nn(n);
    Ue = n;
  }
}
function bs(t = !0) {
  for (var r = 0, n = Ue; ; ) {
    if (n.nodeType === ai) {
      var a = (
        /** @type {Comment} */
        n.data
      );
      if (a === Ll) {
        if (r === 0) return n;
        r -= 1;
      } else (a === sc || a === Dl || // "[1", "[2", etc. for if blocks
      a[0] === "[" && !isNaN(Number(a.slice(1)))) && (r += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Nn(n)
    );
    t && n.remove(), n = o;
  }
}
function pc(t) {
  if (!t || t.nodeType !== ai)
    throw Ms(), Jo;
  return (
    /** @type {Comment} */
    t.data
  );
}
function wc(t) {
  return t === this.v;
}
function Sv(t, r) {
  return t != t ? r == r : t !== r || t !== null && typeof t == "object" || typeof t == "function";
}
function mc(t) {
  return !Sv(t, this.v);
}
let Tv = !1, Lr = null;
function ei(t) {
  Lr = t;
}
function $t(t, r = !1, n) {
  Lr = {
    p: Lr,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      it
    ),
    l: null
  };
}
function At(t) {
  var r = (
    /** @type {ComponentContext} */
    Lr
  ), n = r.e;
  if (n !== null) {
    r.e = null;
    for (var a of n)
      Gc(a);
  }
  return t !== void 0 && (r.x = t), r.i = !0, Lr = r.p, t ?? /** @type {T} */
  {};
}
function fc() {
  return !0;
}
let vo = [];
function bc() {
  var t = vo;
  vo = [], iv(t);
}
function ha(t) {
  if (vo.length === 0 && !xi) {
    var r = vo;
    queueMicrotask(() => {
      r === vo && bc();
    });
  }
  vo.push(t);
}
function jv() {
  for (; vo.length > 0; )
    bc();
}
function yc(t) {
  var r = it;
  if (r === null)
    return et.f |= Oa, t;
  if ((r.f & Ga) === 0 && (r.f & Qo) === 0)
    throw t;
  Ra(t, r);
}
function Ra(t, r) {
  for (; r !== null; ) {
    if ((r.f & ll) !== 0) {
      if ((r.f & Ga) === 0)
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
const Pv = -7169;
function nr(t, r) {
  t.f = t.f & Pv | r;
}
function Nl(t) {
  (t.f & hn) !== 0 || t.deps === null ? nr(t, sr) : nr(t, Bn);
}
function xc(t) {
  if (t !== null)
    for (const r of t)
      (r.f & pr) === 0 || (r.f & So) === 0 || (r.f ^= So, xc(
        /** @type {Derived} */
        r.deps
      ));
}
function kc(t, r, n) {
  (t.f & zr) !== 0 ? r.add(t) : (t.f & Bn) !== 0 && n.add(t), xc(t.deps), nr(t, sr);
}
let cs = !1;
function zv(t) {
  var r = cs;
  try {
    return cs = !1, [t(), cs];
  } finally {
    cs = r;
  }
}
const go = /* @__PURE__ */ new Set();
let He = null, qr = null, gl = null, xi = !1, Zs = !1, No = null, vs = null;
var Ld = 0;
let Mv = 1;
var Ho, Go, Vo, Yo, Pi, Jr, po, ia, sa, Uo, Mr, vl, hl, ul, pl, _c;
const _s = class _s {
  constructor() {
    Ve(this, Mr);
    // for debugging. TODO remove once async is stable
    Ht(this, "id", Mv++);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ht(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ht(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Ve(this, Ho, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Ve(this, Go, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ve(this, Vo, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    Ve(this, Yo, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ve(this, Pi, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    Ve(this, Jr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Ve(this, po, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Ve(this, ia, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Ve(this, sa, /* @__PURE__ */ new Map());
    Ht(this, "is_fork", !1);
    Ve(this, Uo, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(r) {
    C(this, sa).has(r) || C(this, sa).set(r, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(r) {
    var n = C(this, sa).get(r);
    if (n) {
      C(this, sa).delete(r);
      for (var a of n.d)
        nr(a, zr), this.schedule(a);
      for (a of n.m)
        nr(a, Bn), this.schedule(a);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} old_value
   */
  capture(r, n) {
    n !== _r && !this.previous.has(r) && this.previous.set(r, n), (r.f & Oa) === 0 && (this.current.set(r, r.v), qr == null || qr.set(r, r.v));
  }
  activate() {
    He = this;
  }
  deactivate() {
    He = null, qr = null;
  }
  flush() {
    try {
      Zs = !0, He = this, Rt(this, Mr, hl).call(this);
    } finally {
      Ld = 0, gl = null, No = null, vs = null, Zs = !1, He = null, qr = null, Ia.clear();
    }
  }
  discard() {
    for (const r of C(this, Go)) r(this);
    C(this, Go).clear(), go.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(r) {
    Ne(this, Vo, C(this, Vo) + 1), r && Ne(this, Yo, C(this, Yo) + 1);
  }
  /**
   * @param {boolean} blocking
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(r, n) {
    Ne(this, Vo, C(this, Vo) - 1), r && Ne(this, Yo, C(this, Yo) - 1), !(C(this, Uo) || n) && (Ne(this, Uo, !0), ha(() => {
      Ne(this, Uo, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(r, n) {
    for (const a of r)
      C(this, po).add(a);
    for (const a of n)
      C(this, ia).add(a);
    r.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(r) {
    C(this, Ho).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(r) {
    C(this, Go).add(r);
  }
  settled() {
    return (C(this, Pi) ?? Ne(this, Pi, cc())).promise;
  }
  static ensure() {
    if (He === null) {
      const r = He = new _s();
      Zs || (go.add(He), xi || ha(() => {
        He === r && r.flush();
      }));
    }
    return He;
  }
  apply() {
    {
      qr = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(r) {
    var o;
    if (gl = r, (o = r.b) != null && o.is_pending && (r.f & (Qo | zs | gc)) !== 0 && (r.f & Ga) === 0) {
      r.b.defer_effect(r);
      return;
    }
    for (var n = r; n.parent !== null; ) {
      n = n.parent;
      var a = n.f;
      if (No !== null && n === it && (et === null || (et.f & pr) === 0))
        return;
      if ((a & (Ba | zn)) !== 0) {
        if ((a & sr) === 0)
          return;
        n.f ^= sr;
      }
    }
    C(this, Jr).push(n);
  }
};
Ho = new WeakMap(), Go = new WeakMap(), Vo = new WeakMap(), Yo = new WeakMap(), Pi = new WeakMap(), Jr = new WeakMap(), po = new WeakMap(), ia = new WeakMap(), sa = new WeakMap(), Uo = new WeakMap(), Mr = new WeakSet(), vl = function() {
  return this.is_fork || C(this, Yo) > 0;
}, hl = function() {
  var c, h;
  if (Ld++ > 1e3 && (go.delete(this), Wv()), !Rt(this, Mr, vl).call(this)) {
    for (const u of C(this, po))
      C(this, ia).delete(u), nr(u, zr), this.schedule(u);
    for (const u of C(this, ia))
      nr(u, Bn), this.schedule(u);
  }
  const r = C(this, Jr);
  Ne(this, Jr, []), this.apply();
  var n = No = [], a = [], o = vs = [];
  for (const u of r)
    try {
      Rt(this, Mr, ul).call(this, u, n, a);
    } catch (x) {
      throw jc(u), x;
    }
  if (He = null, o.length > 0) {
    var i = _s.ensure();
    for (const u of o)
      i.schedule(u);
  }
  if (No = null, vs = null, Rt(this, Mr, vl).call(this)) {
    Rt(this, Mr, pl).call(this, a), Rt(this, Mr, pl).call(this, n);
    for (const [u, x] of C(this, sa))
      Tc(u, x);
  } else {
    C(this, Vo) === 0 && go.delete(this), C(this, po).clear(), C(this, ia).clear();
    for (const u of C(this, Ho)) u(this);
    C(this, Ho).clear(), Bd(a), Bd(n), (c = C(this, Pi)) == null || c.resolve();
  }
  var d = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    He
  );
  if (C(this, Jr).length > 0) {
    const u = d ?? (d = this);
    C(u, Jr).push(...C(this, Jr).filter((x) => !C(u, Jr).includes(x)));
  }
  d !== null && (go.add(d), Rt(h = d, Mr, hl).call(h)), go.has(this) || Rt(this, Mr, _c).call(this);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ul = function(r, n, a) {
  r.f ^= sr;
  for (var o = r.first; o !== null; ) {
    var i = o.f, d = (i & (zn | Ba)) !== 0, c = d && (i & sr) !== 0, h = c || (i & tn) !== 0 || C(this, sa).has(o);
    if (!h && o.fn !== null) {
      d ? o.f ^= sr : (i & Qo) !== 0 ? n.push(o) : Ii(o) && ((i & Ha) !== 0 && C(this, ia).add(o), ri(o));
      var u = o.first;
      if (u !== null) {
        o = u;
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
}, /**
 * @param {Effect[]} effects
 */
pl = function(r) {
  for (var n = 0; n < r.length; n += 1)
    kc(r[n], C(this, po), C(this, ia));
}, _c = function() {
  var h;
  for (const u of go) {
    var r = u.id < this.id, n = [];
    for (const [x, q] of this.current) {
      if (u.current.has(x))
        if (r && q !== u.current.get(x))
          u.current.set(x, q);
        else
          continue;
      n.push(x);
    }
    var a = [...u.current.keys()].filter((x) => !this.current.has(x));
    if (a.length === 0)
      r && u.discard();
    else if (n.length > 0) {
      u.activate();
      var o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
      for (var d of n)
        qc(d, a, o, i);
      if (C(u, Jr).length > 0) {
        u.apply();
        for (var c of C(u, Jr))
          Rt(h = u, Mr, ul).call(h, c, [], []);
        Ne(u, Jr, []);
      }
      u.deactivate();
    }
  }
};
let Fa = _s;
function b(t) {
  var r = xi;
  xi = !0;
  try {
    for (var n; ; ) {
      if (jv(), He === null)
        return (
          /** @type {T} */
          n
        );
      He.flush();
    }
  } finally {
    xi = r;
  }
}
function Wv() {
  try {
    wv();
  } catch (t) {
    Ra(t, gl);
  }
}
let qn = null;
function Bd(t) {
  var r = t.length;
  if (r !== 0) {
    for (var n = 0; n < r; ) {
      var a = t[n++];
      if ((a.f & (un | tn)) === 0 && Ii(a) && (qn = /* @__PURE__ */ new Set(), ri(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && Yc(a), (qn == null ? void 0 : qn.size) > 0)) {
        Ia.clear();
        for (const o of qn) {
          if ((o.f & (un | tn)) !== 0) continue;
          const i = [o];
          let d = o.parent;
          for (; d !== null; )
            qn.has(d) && (qn.delete(d), i.push(d)), d = d.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const h = i[c];
            (h.f & (un | tn)) === 0 && ri(h);
          }
        }
        qn.clear();
      }
    }
    qn = null;
  }
}
function qc(t, r, n, a) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & pr) !== 0 ? qc(
        /** @type {Derived} */
        o,
        r,
        n,
        a
      ) : (i & (Fl | Ha)) !== 0 && (i & zr) === 0 && Sc(o, r, a) && (nr(o, zr), Hl(
        /** @type {Effect} */
        o
      ));
    }
}
function Sc(t, r, n) {
  const a = n.get(t);
  if (a !== void 0) return a;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (Zo.call(r, o))
        return !0;
      if ((o.f & pr) !== 0 && Sc(
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
function Hl(t) {
  He.schedule(t);
}
function Tc(t, r) {
  if (!((t.f & zn) !== 0 && (t.f & sr) !== 0)) {
    (t.f & zr) !== 0 ? r.d.push(t) : (t.f & Bn) !== 0 && r.m.push(t), nr(t, sr);
    for (var n = t.first; n !== null; )
      Tc(n, r), n = n.next;
  }
}
function jc(t) {
  nr(t, sr);
  for (var r = t.first; r !== null; )
    jc(r), r = r.next;
}
function Cv(t) {
  let r = 0, n = To(0), a;
  return () => {
    Yl() && (e(n), As(() => (r === 0 && (a = Va(() => t(() => ki(n)))), r += 1, () => {
      ha(() => {
        r -= 1, r === 0 && (a == null || a(), a = void 0, ki(n));
      });
    })));
  };
}
var $v = qo | Mo;
function Av(t, r, n, a) {
  new Ev(t, r, n, a);
}
var Zr, zi, Rn, wo, Hr, On, Qr, Sn, la, mo, Aa, Xo, Mi, Wi, da, qs, Kt, Pc, zc, Mc, wl, hs, us, ml;
class Ev {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(r, n, a, o) {
    Ve(this, Kt);
    /** @type {Boundary | null} */
    Ht(this, "parent");
    Ht(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ht(this, "transform_error");
    /** @type {TemplateNode} */
    Ve(this, Zr);
    /** @type {TemplateNode | null} */
    Ve(this, zi, lt ? Ue : null);
    /** @type {BoundaryProps} */
    Ve(this, Rn);
    /** @type {((anchor: Node) => void)} */
    Ve(this, wo);
    /** @type {Effect} */
    Ve(this, Hr);
    /** @type {Effect | null} */
    Ve(this, On, null);
    /** @type {Effect | null} */
    Ve(this, Qr, null);
    /** @type {Effect | null} */
    Ve(this, Sn, null);
    /** @type {DocumentFragment | null} */
    Ve(this, la, null);
    Ve(this, mo, 0);
    Ve(this, Aa, 0);
    Ve(this, Xo, !1);
    /** @type {Set<Effect>} */
    Ve(this, Mi, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Ve(this, Wi, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ve(this, da, null);
    Ve(this, qs, Cv(() => (Ne(this, da, To(C(this, mo))), () => {
      Ne(this, da, null);
    })));
    var i;
    Ne(this, Zr, r), Ne(this, Rn, n), Ne(this, wo, (d) => {
      var c = (
        /** @type {Effect} */
        it
      );
      c.b = this, c.f |= ll, a(d);
    }), this.parent = /** @type {Effect} */
    it.b, this.transform_error = o ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((d) => d), Ne(this, Hr, Es(() => {
      if (lt) {
        const d = (
          /** @type {Comment} */
          C(this, zi)
        );
        Ri();
        const c = d.data === Dl;
        if (d.data.startsWith(Od)) {
          const u = JSON.parse(d.data.slice(Od.length));
          Rt(this, Kt, zc).call(this, u);
        } else c ? Rt(this, Kt, Mc).call(this) : Rt(this, Kt, Pc).call(this);
      } else
        Rt(this, Kt, wl).call(this);
    }, $v)), lt && Ne(this, Zr, Ue);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(r) {
    kc(r, C(this, Mi), C(this, Wi));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!C(this, Rn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(r, n) {
    Rt(this, Kt, ml).call(this, r, n), Ne(this, mo, C(this, mo) + r), !(!C(this, da) || C(this, Xo)) && (Ne(this, Xo, !0), ha(() => {
      Ne(this, Xo, !1), C(this, da) && ti(C(this, da), C(this, mo));
    }));
  }
  get_effect_pending() {
    return C(this, qs).call(this), e(
      /** @type {Source<number>} */
      C(this, da)
    );
  }
  /** @param {unknown} error */
  error(r) {
    var n = C(this, Rn).onerror;
    let a = C(this, Rn).failed;
    if (!n && !a)
      throw r;
    C(this, On) && (Dr(C(this, On)), Ne(this, On, null)), C(this, Qr) && (Dr(C(this, Qr)), Ne(this, Qr, null)), C(this, Sn) && (Dr(C(this, Sn)), Ne(this, Sn, null)), lt && (Ir(
      /** @type {TemplateNode} */
      C(this, zi)
    ), jr(), Ir(bs()));
    var o = !1, i = !1;
    const d = () => {
      if (o) {
        qv();
        return;
      }
      o = !0, i && kv(), C(this, Sn) !== null && xo(C(this, Sn), () => {
        Ne(this, Sn, null);
      }), Rt(this, Kt, us).call(this, () => {
        Rt(this, Kt, wl).call(this);
      });
    }, c = (h) => {
      try {
        i = !0, n == null || n(h, d), i = !1;
      } catch (u) {
        Ra(u, C(this, Hr) && C(this, Hr).parent);
      }
      a && Ne(this, Sn, Rt(this, Kt, us).call(this, () => {
        try {
          return gn(() => {
            var u = (
              /** @type {Effect} */
              it
            );
            u.b = this, u.f |= ll, a(
              C(this, Zr),
              () => h,
              () => d
            );
          });
        } catch (u) {
          return Ra(
            u,
            /** @type {Effect} */
            C(this, Hr).parent
          ), null;
        }
      }));
    };
    ha(() => {
      var h;
      try {
        h = this.transform_error(r);
      } catch (u) {
        Ra(u, C(this, Hr) && C(this, Hr).parent);
        return;
      }
      h !== null && typeof h == "object" && typeof /** @type {any} */
      h.then == "function" ? h.then(
        c,
        /** @param {unknown} e */
        (u) => Ra(u, C(this, Hr) && C(this, Hr).parent)
      ) : c(h);
    });
  }
}
Zr = new WeakMap(), zi = new WeakMap(), Rn = new WeakMap(), wo = new WeakMap(), Hr = new WeakMap(), On = new WeakMap(), Qr = new WeakMap(), Sn = new WeakMap(), la = new WeakMap(), mo = new WeakMap(), Aa = new WeakMap(), Xo = new WeakMap(), Mi = new WeakMap(), Wi = new WeakMap(), da = new WeakMap(), qs = new WeakMap(), Kt = new WeakSet(), Pc = function() {
  try {
    Ne(this, On, gn(() => C(this, wo).call(this, C(this, Zr))));
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
zc = function(r) {
  const n = C(this, Rn).failed;
  n && Ne(this, Sn, gn(() => {
    n(
      C(this, Zr),
      () => r,
      () => () => {
      }
    );
  }));
}, Mc = function() {
  const r = C(this, Rn).pending;
  r && (this.is_pending = !0, Ne(this, Qr, gn(() => r(C(this, Zr)))), ha(() => {
    var n = Ne(this, la, document.createDocumentFragment()), a = Yr();
    n.append(a), Ne(this, On, Rt(this, Kt, us).call(this, () => gn(() => C(this, wo).call(this, a)))), C(this, Aa) === 0 && (C(this, Zr).before(n), Ne(this, la, null), xo(
      /** @type {Effect} */
      C(this, Qr),
      () => {
        Ne(this, Qr, null);
      }
    ), Rt(this, Kt, hs).call(
      this,
      /** @type {Batch} */
      He
    ));
  }));
}, wl = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ne(this, Aa, 0), Ne(this, mo, 0), Ne(this, On, gn(() => {
      C(this, wo).call(this, C(this, Zr));
    })), C(this, Aa) > 0) {
      var r = Ne(this, la, document.createDocumentFragment());
      Jl(C(this, On), r);
      const n = (
        /** @type {(anchor: Node) => void} */
        C(this, Rn).pending
      );
      Ne(this, Qr, gn(() => n(C(this, Zr))));
    } else
      Rt(this, Kt, hs).call(
        this,
        /** @type {Batch} */
        He
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
hs = function(r) {
  this.is_pending = !1, r.transfer_effects(C(this, Mi), C(this, Wi));
}, /**
 * @template T
 * @param {() => T} fn
 */
us = function(r) {
  var n = it, a = et, o = Lr;
  Fn(C(this, Hr)), wn(C(this, Hr)), ei(C(this, Hr).ctx);
  try {
    return Fa.ensure(), r();
  } catch (i) {
    return yc(i), null;
  } finally {
    Fn(n), wn(a), ei(o);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ml = function(r, n) {
  var a;
  if (!this.has_pending_snippet()) {
    this.parent && Rt(a = this.parent, Kt, ml).call(a, r, n);
    return;
  }
  Ne(this, Aa, C(this, Aa) + r), C(this, Aa) === 0 && (Rt(this, Kt, hs).call(this, n), C(this, Qr) && xo(C(this, Qr), () => {
    Ne(this, Qr, null);
  }), C(this, la) && (C(this, Zr).before(C(this, la)), Ne(this, la, null)));
};
function Rv(t, r, n, a) {
  const o = Ws;
  var i = t.filter((w) => !w.settled);
  if (n.length === 0 && i.length === 0) {
    a(r.map(o));
    return;
  }
  var d = (
    /** @type {Effect} */
    it
  ), c = Ov(), h = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((w) => w.promise)) : null;
  function u(w) {
    c();
    try {
      a(w);
    } catch (P) {
      (d.f & un) === 0 && Ra(P, d);
    }
    ys();
  }
  if (n.length === 0) {
    h.then(() => u(r.map(o)));
    return;
  }
  var x = Wc();
  function q() {
    Promise.all(n.map((w) => /* @__PURE__ */ Iv(w))).then((w) => u([...r.map(o), ...w])).catch((w) => Ra(w, d)).finally(() => x());
  }
  h ? h.then(() => {
    c(), q(), ys();
  }) : q();
}
function Ov() {
  var t = (
    /** @type {Effect} */
    it
  ), r = et, n = Lr, a = (
    /** @type {Batch} */
    He
  );
  return function(i = !0) {
    Fn(t), wn(r), ei(n), i && (t.f & un) === 0 && (a == null || a.activate(), a == null || a.apply());
  };
}
function ys(t = !0) {
  Fn(null), wn(null), ei(null), t && (He == null || He.deactivate());
}
function Wc() {
  var t = (
    /** @type {Boundary} */
    /** @type {Effect} */
    it.b
  ), r = (
    /** @type {Batch} */
    He
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Ws(t) {
  var r = pr | zr, n = et !== null && (et.f & pr) !== 0 ? (
    /** @type {Derived} */
    et
  ) : null;
  return it !== null && (it.f |= Mo), {
    ctx: Lr,
    deps: null,
    effects: null,
    equals: wc,
    f: r,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      _r
    ),
    wv: 0,
    parent: n ?? it,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Iv(t, r, n) {
  let a = (
    /** @type {Effect | null} */
    it
  );
  a === null && gv();
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = To(
    /** @type {V} */
    _r
  ), d = !et, c = /* @__PURE__ */ new Map();
  return Uv(() => {
    var P;
    var h = (
      /** @type {Effect} */
      it
    ), u = cc();
    o = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).finally(ys);
    } catch (W) {
      u.reject(W), ys();
    }
    var x = (
      /** @type {Batch} */
      He
    );
    if (d) {
      if ((h.f & Ga) !== 0)
        var q = Wc();
      if (
        /** @type {Boundary} */
        a.b.is_rendered()
      )
        (P = c.get(x)) == null || P.reject(oa), c.delete(x);
      else {
        for (const W of c.values())
          W.reject(oa);
        c.clear();
      }
      c.set(x, u);
    }
    const w = (W, M = void 0) => {
      if (q) {
        var _ = M === oa;
        q(_);
      }
      if (!(M === oa || (h.f & un) !== 0)) {
        if (x.activate(), M)
          i.f |= Oa, ti(i, M);
        else {
          (i.f & Oa) !== 0 && (i.f ^= Oa), ti(i, W);
          for (const [E, z] of c) {
            if (c.delete(E), E === x) break;
            z.reject(oa);
          }
        }
        x.deactivate();
      }
    };
    u.promise.then(w, (W) => w(null, W || "unknown"));
  }), Ul(() => {
    for (const h of c.values())
      h.reject(oa);
  }), new Promise((h) => {
    function u(x) {
      function q() {
        x === o ? h(i) : u(o);
      }
      x.then(q, q);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function k(t) {
  const r = /* @__PURE__ */ Ws(t);
  return Kc(r), r;
}
// @__NO_SIDE_EFFECTS__
function Cc(t) {
  const r = /* @__PURE__ */ Ws(t);
  return r.equals = mc, r;
}
function Dv(t) {
  var r = t.effects;
  if (r !== null) {
    t.effects = null;
    for (var n = 0; n < r.length; n += 1)
      Dr(
        /** @type {Effect} */
        r[n]
      );
  }
}
function Lv(t) {
  for (var r = t.parent; r !== null; ) {
    if ((r.f & pr) === 0)
      return (r.f & un) === 0 ? (
        /** @type {Effect} */
        r
      ) : null;
    r = r.parent;
  }
  return null;
}
function Gl(t) {
  var r, n = it;
  Fn(Lv(t));
  try {
    t.f &= ~So, Dv(t), r = eg(t);
  } finally {
    Fn(n);
  }
  return r;
}
function $c(t) {
  var r = t.v, n = Gl(t);
  if (!t.equals(n) && (t.wv = Zc(), (!(He != null && He.is_fork) || t.deps === null) && (t.v = n, He == null || He.capture(t, r), t.deps === null))) {
    nr(t, sr);
    return;
  }
  Na || (qr !== null ? (Yl() || He != null && He.is_fork) && qr.set(t, n) : Nl(t));
}
function Bv(t) {
  var r, n;
  if (t.effects !== null)
    for (const a of t.effects)
      (a.teardown || a.ac) && ((r = a.teardown) == null || r.call(a), (n = a.ac) == null || n.abort(oa), a.teardown = zo, a.ac = null, ji(a, 0), Xl(a));
}
function Ac(t) {
  if (t.effects !== null)
    for (const r of t.effects)
      r.teardown && ri(r);
}
let fl = /* @__PURE__ */ new Set();
const Ia = /* @__PURE__ */ new Map();
let Ec = !1;
function To(t, r) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: wc,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, r) {
  const n = To(t);
  return Kc(n), n;
}
// @__NO_SIDE_EFFECTS__
function Rc(t, r = !1, n = !0) {
  const a = To(t);
  return r || (a.equals = mc), a;
}
function $(t, r, n = !1) {
  et !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!jn || (et.f & Dd) !== 0) && fc() && (et.f & (pr | Ha | Fl | Dd)) !== 0 && (pn === null || !Zo.call(pn, t)) && xv();
  let a = n ? ht(r) : r;
  return ti(t, a, vs);
}
function ti(t, r, n = null) {
  if (!t.equals(r)) {
    var a = t.v;
    Na ? Ia.set(t, r) : Ia.set(t, a), t.v = r;
    var o = Fa.ensure();
    if (o.capture(t, a), (t.f & pr) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & zr) !== 0 && Gl(i), qr === null && Nl(i);
    }
    t.wv = Zc(), Oc(t, zr, n), it !== null && (it.f & sr) !== 0 && (it.f & (zn | Ba)) === 0 && (dn === null ? Jv([t]) : dn.push(t)), !o.is_fork && fl.size > 0 && !Ec && Fv();
  }
  return r;
}
function Fv() {
  Ec = !1;
  for (const t of fl)
    (t.f & sr) !== 0 && nr(t, Bn), Ii(t) && ri(t);
  fl.clear();
}
function ki(t) {
  $(t, t.v + 1);
}
function Oc(t, r, n) {
  var a = t.reactions;
  if (a !== null)
    for (var o = a.length, i = 0; i < o; i++) {
      var d = a[i], c = d.f, h = (c & zr) === 0;
      if (h && nr(d, r), (c & pr) !== 0) {
        var u = (
          /** @type {Derived} */
          d
        );
        qr == null || qr.delete(u), (c & So) === 0 && (c & hn && (d.f |= So), Oc(u, Bn, n));
      } else if (h) {
        var x = (
          /** @type {Effect} */
          d
        );
        (c & Ha) !== 0 && qn !== null && qn.add(x), n !== null ? n.push(x) : Hl(x);
      }
    }
}
function ht(t) {
  if (typeof t != "object" || t === null || yo in t)
    return t;
  const r = dc(t);
  if (r !== av && r !== ov)
    return t;
  var n = /* @__PURE__ */ new Map(), a = Bl(t), o = /* @__PURE__ */ me(0), i = ko, d = (c) => {
    if (ko === i)
      return c();
    var h = et, u = ko;
    wn(null), Gd(i);
    var x = c();
    return wn(h), Gd(u), x;
  };
  return a && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, h, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && bv();
        var x = n.get(h);
        return x === void 0 ? d(() => {
          var q = /* @__PURE__ */ me(u.value);
          return n.set(h, q), q;
        }) : $(x, u.value, !0), !0;
      },
      deleteProperty(c, h) {
        var u = n.get(h);
        if (u === void 0) {
          if (h in c) {
            const x = d(() => /* @__PURE__ */ me(_r));
            n.set(h, x), ki(o);
          }
        } else
          $(u, _r), ki(o);
        return !0;
      },
      get(c, h, u) {
        var P;
        if (h === yo)
          return t;
        var x = n.get(h), q = h in c;
        if (x === void 0 && (!q || (P = bo(c, h)) != null && P.writable) && (x = d(() => {
          var W = ht(q ? c[h] : _r), M = /* @__PURE__ */ me(W);
          return M;
        }), n.set(h, x)), x !== void 0) {
          var w = e(x);
          return w === _r ? void 0 : w;
        }
        return Reflect.get(c, h, u);
      },
      getOwnPropertyDescriptor(c, h) {
        var u = Reflect.getOwnPropertyDescriptor(c, h);
        if (u && "value" in u) {
          var x = n.get(h);
          x && (u.value = e(x));
        } else if (u === void 0) {
          var q = n.get(h), w = q == null ? void 0 : q.v;
          if (q !== void 0 && w !== _r)
            return {
              enumerable: !0,
              configurable: !0,
              value: w,
              writable: !0
            };
        }
        return u;
      },
      has(c, h) {
        var w;
        if (h === yo)
          return !0;
        var u = n.get(h), x = u !== void 0 && u.v !== _r || Reflect.has(c, h);
        if (u !== void 0 || it !== null && (!x || (w = bo(c, h)) != null && w.writable)) {
          u === void 0 && (u = d(() => {
            var P = x ? ht(c[h]) : _r, W = /* @__PURE__ */ me(P);
            return W;
          }), n.set(h, u));
          var q = e(u);
          if (q === _r)
            return !1;
        }
        return x;
      },
      set(c, h, u, x) {
        var T;
        var q = n.get(h), w = h in c;
        if (a && h === "length")
          for (var P = u; P < /** @type {Source<number>} */
          q.v; P += 1) {
            var W = n.get(P + "");
            W !== void 0 ? $(W, _r) : P in c && (W = d(() => /* @__PURE__ */ me(_r)), n.set(P + "", W));
          }
        if (q === void 0)
          (!w || (T = bo(c, h)) != null && T.writable) && (q = d(() => /* @__PURE__ */ me(void 0)), $(q, ht(u)), n.set(h, q));
        else {
          w = q.v !== _r;
          var M = d(() => ht(u));
          $(q, M);
        }
        var _ = Reflect.getOwnPropertyDescriptor(c, h);
        if (_ != null && _.set && _.set.call(x, u), !w) {
          if (a && typeof h == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), z = Number(h);
            Number.isInteger(z) && z >= E.v && $(E, z + 1);
          }
          ki(o);
        }
        return !0;
      },
      ownKeys(c) {
        e(o);
        var h = Reflect.ownKeys(c).filter((q) => {
          var w = n.get(q);
          return w === void 0 || w.v !== _r;
        });
        for (var [u, x] of n)
          x.v !== _r && !(u in c) && h.push(u);
        return h;
      },
      setPrototypeOf() {
        yv();
      }
    }
  );
}
function Fd(t) {
  try {
    if (t !== null && typeof t == "object" && yo in t)
      return t[yo];
  } catch {
  }
  return t;
}
function Nv(t, r) {
  return Object.is(Fd(t), Fd(r));
}
var _i, Ic, Dc, Lc;
function bl() {
  if (_i === void 0) {
    _i = window, Ic = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, r = Node.prototype, n = Text.prototype;
    Dc = bo(r, "firstChild").get, Lc = bo(r, "nextSibling").get, Id(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Id(n) && (n.__t = void 0);
  }
}
function Yr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function jo(t) {
  return (
    /** @type {TemplateNode | null} */
    Dc.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Nn(t) {
  return (
    /** @type {TemplateNode | null} */
    Lc.call(t)
  );
}
function l(t, r) {
  if (!lt)
    return /* @__PURE__ */ jo(t);
  var n = /* @__PURE__ */ jo(Ue);
  if (n === null)
    n = Ue.appendChild(Yr());
  else if (r && n.nodeType !== Ei) {
    var a = Yr();
    return n == null || n.before(a), Ir(a), a;
  }
  return r && Cs(
    /** @type {Text} */
    n
  ), Ir(n), n;
}
function Xt(t, r = !1) {
  if (!lt) {
    var n = /* @__PURE__ */ jo(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Nn(n) : n;
  }
  if (r) {
    if ((Ue == null ? void 0 : Ue.nodeType) !== Ei) {
      var a = Yr();
      return Ue == null || Ue.before(a), Ir(a), a;
    }
    Cs(
      /** @type {Text} */
      Ue
    );
  }
  return Ue;
}
function g(t, r = 1, n = !1) {
  let a = lt ? Ue : t;
  for (var o; r--; )
    o = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ Nn(a);
  if (!lt)
    return a;
  if (n) {
    if ((a == null ? void 0 : a.nodeType) !== Ei) {
      var i = Yr();
      return a === null ? o == null || o.after(i) : a.before(i), Ir(i), i;
    }
    Cs(
      /** @type {Text} */
      a
    );
  }
  return Ir(a), a;
}
function Bc(t) {
  t.textContent = "";
}
function Fc() {
  return !1;
}
function Vl(t, r, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(lc, t, void 0)
  );
}
function Cs(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let r = t.nextSibling;
  for (; r !== null && r.nodeType === Ei; )
    r.remove(), t.nodeValue += /** @type {string} */
    r.nodeValue, r = t.nextSibling;
}
let Nd = !1;
function Nc() {
  Nd || (Nd = !0, document.addEventListener(
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
            (r = n.__on_r) == null || r.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function $s(t) {
  var r = et, n = it;
  wn(null), Fn(null);
  try {
    return t();
  } finally {
    wn(r), Fn(n);
  }
}
function Hc(t, r, n, a = n) {
  t.addEventListener(r, () => $s(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), a(!0);
  } : t.__on_r = () => a(!0), Nc();
}
function Hv(t) {
  it === null && (et === null && pv(), uv()), Na && hv();
}
function Gv(t, r) {
  var n = r.last;
  n === null ? r.last = r.first = t : (n.next = t, t.prev = n, r.last = t);
}
function Hn(t, r) {
  var n = it;
  n !== null && (n.f & tn) !== 0 && (t |= tn);
  var a = {
    ctx: Lr,
    deps: null,
    nodes: null,
    f: t | zr | hn,
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
  }, o = a;
  if ((t & Qo) !== 0)
    No !== null ? No.push(a) : Fa.ensure().schedule(a);
  else if (r !== null) {
    try {
      ri(a);
    } catch (d) {
      throw Dr(a), d;
    }
    o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && // either `null`, or a singular child
    (o.f & Mo) === 0 && (o = o.first, (t & Ha) !== 0 && (t & qo) !== 0 && o !== null && (o.f |= qo));
  }
  if (o !== null && (o.parent = n, n !== null && Gv(o, n), et !== null && (et.f & pr) !== 0 && (t & Ba) === 0)) {
    var i = (
      /** @type {Derived} */
      et
    );
    (i.effects ?? (i.effects = [])).push(o);
  }
  return a;
}
function Yl() {
  return et !== null && !jn;
}
function Ul(t) {
  const r = Hn(zs, null);
  return nr(r, sr), r.teardown = t, r;
}
function vn(t) {
  Hv();
  var r = (
    /** @type {Effect} */
    it.f
  ), n = !et && (r & zn) !== 0 && (r & Ga) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      Lr
    );
    (a.e ?? (a.e = [])).push(t);
  } else
    return Gc(t);
}
function Gc(t) {
  return Hn(Qo | dv, t);
}
function Vv(t) {
  Fa.ensure();
  const r = Hn(Ba | Mo, t);
  return () => {
    Dr(r);
  };
}
function Yv(t) {
  Fa.ensure();
  const r = Hn(Ba | Mo, t);
  return (n = {}) => new Promise((a) => {
    n.outro ? xo(r, () => {
      Dr(r), a(void 0);
    }) : (Dr(r), a(void 0));
  });
}
function Oi(t) {
  return Hn(Qo, t);
}
function Uv(t) {
  return Hn(Fl | Mo, t);
}
function As(t, r = 0) {
  return Hn(zs | r, t);
}
function we(t, r = [], n = [], a = []) {
  Rv(a, r, n, (o) => {
    Hn(zs, () => t(...o.map(e)));
  });
}
function Es(t, r = 0) {
  var n = Hn(Ha | r, t);
  return n;
}
function gn(t) {
  return Hn(zn | Mo, t);
}
function Vc(t) {
  var r = t.teardown;
  if (r !== null) {
    const n = Na, a = et;
    Hd(!0), wn(null);
    try {
      r.call(null);
    } finally {
      Hd(n), wn(a);
    }
  }
}
function Xl(t, r = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && $s(() => {
      o.abort(oa);
    });
    var a = n.next;
    (n.f & Ba) !== 0 ? n.parent = null : Dr(n, r), n = a;
  }
}
function Xv(t) {
  for (var r = t.first; r !== null; ) {
    var n = r.next;
    (r.f & zn) === 0 && Dr(r), r = n;
  }
}
function Dr(t, r = !0) {
  var n = !1;
  (r || (t.f & lv) !== 0) && t.nodes !== null && t.nodes.end !== null && (Kv(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), nr(t, dl), Xl(t, r && !n), ji(t, 0);
  var a = t.nodes && t.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Vc(t), t.f ^= dl, t.f |= un;
  var o = t.parent;
  o !== null && o.first !== null && Yc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Kv(t, r) {
  for (; t !== null; ) {
    var n = t === r ? null : /* @__PURE__ */ Nn(t);
    t.remove(), t = n;
  }
}
function Yc(t) {
  var r = t.parent, n = t.prev, a = t.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), r !== null && (r.first === t && (r.first = a), r.last === t && (r.last = n));
}
function xo(t, r, n = !0) {
  var a = [];
  Uc(t, a, !0);
  var o = () => {
    n && Dr(t), r && r();
  }, i = a.length;
  if (i > 0) {
    var d = () => --i || o();
    for (var c of a)
      c.out(d);
  } else
    o();
}
function Uc(t, r, n) {
  if ((t.f & tn) === 0) {
    t.f ^= tn;
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || n) && r.push(c);
    for (var o = t.first; o !== null; ) {
      var i = o.next, d = (o.f & qo) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & zn) !== 0 && (t.f & Ha) !== 0;
      Uc(o, r, d ? n : !1), o = i;
    }
  }
}
function Kl(t) {
  Xc(t, !0);
}
function Xc(t, r) {
  if ((t.f & tn) !== 0) {
    t.f ^= tn, (t.f & sr) === 0 && (nr(t, zr), Fa.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var a = n.next, o = (n.f & qo) !== 0 || (n.f & zn) !== 0;
      Xc(n, o ? r : !1), n = a;
    }
    var i = t.nodes && t.nodes.t;
    if (i !== null)
      for (const d of i)
        (d.is_global || r) && d.in();
  }
}
function Jl(t, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end; n !== null; ) {
      var o = n === a ? null : /* @__PURE__ */ Nn(n);
      r.append(n), n = o;
    }
}
let ps = !1, Na = !1;
function Hd(t) {
  Na = t;
}
let et = null, jn = !1;
function wn(t) {
  et = t;
}
let it = null;
function Fn(t) {
  it = t;
}
let pn = null;
function Kc(t) {
  et !== null && (pn === null ? pn = [t] : pn.push(t));
}
let Gr = null, Kr = 0, dn = null;
function Jv(t) {
  dn = t;
}
let Jc = 1, ho = 0, ko = ho;
function Gd(t) {
  ko = t;
}
function Zc() {
  return ++Jc;
}
function Ii(t) {
  var r = t.f;
  if ((r & zr) !== 0)
    return !0;
  if (r & pr && (t.f &= ~So), (r & Bn) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), a = n.length, o = 0; o < a; o++) {
      var i = n[o];
      if (Ii(
        /** @type {Derived} */
        i
      ) && $c(
        /** @type {Derived} */
        i
      ), i.wv > t.wv)
        return !0;
    }
    (r & hn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qr === null && nr(t, sr);
  }
  return !1;
}
function Qc(t, r, n = !0) {
  var a = t.reactions;
  if (a !== null && !(pn !== null && Zo.call(pn, t)))
    for (var o = 0; o < a.length; o++) {
      var i = a[o];
      (i.f & pr) !== 0 ? Qc(
        /** @type {Derived} */
        i,
        r,
        !1
      ) : r === i && (n ? nr(i, zr) : (i.f & sr) !== 0 && nr(i, Bn), Hl(
        /** @type {Effect} */
        i
      ));
    }
}
function eg(t) {
  var M;
  var r = Gr, n = Kr, a = dn, o = et, i = pn, d = Lr, c = jn, h = ko, u = t.f;
  Gr = /** @type {null | Value[]} */
  null, Kr = 0, dn = null, et = (u & (zn | Ba)) === 0 ? t : null, pn = null, ei(t.ctx), jn = !1, ko = ++ho, t.ac !== null && ($s(() => {
    t.ac.abort(oa);
  }), t.ac = null);
  try {
    t.f |= cl;
    var x = (
      /** @type {Function} */
      t.fn
    ), q = x();
    t.f |= Ga;
    var w = t.deps, P = He == null ? void 0 : He.is_fork;
    if (Gr !== null) {
      var W;
      if (P || ji(t, Kr), w !== null && Kr > 0)
        for (w.length = Kr + Gr.length, W = 0; W < Gr.length; W++)
          w[Kr + W] = Gr[W];
      else
        t.deps = w = Gr;
      if (Yl() && (t.f & hn) !== 0)
        for (W = Kr; W < w.length; W++)
          ((M = w[W]).reactions ?? (M.reactions = [])).push(t);
    } else !P && w !== null && Kr < w.length && (ji(t, Kr), w.length = Kr);
    if (fc() && dn !== null && !jn && w !== null && (t.f & (pr | Bn | zr)) === 0)
      for (W = 0; W < /** @type {Source[]} */
      dn.length; W++)
        Qc(
          dn[W],
          /** @type {Effect} */
          t
        );
    if (o !== null && o !== t) {
      if (ho++, o.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          o.deps[_].rv = ho;
      if (r !== null)
        for (const _ of r)
          _.rv = ho;
      dn !== null && (a === null ? a = dn : a.push(.../** @type {Source[]} */
      dn));
    }
    return (t.f & Oa) !== 0 && (t.f ^= Oa), q;
  } catch (_) {
    return yc(_);
  } finally {
    t.f ^= cl, Gr = r, Kr = n, dn = a, et = o, pn = i, ei(d), jn = c, ko = h;
  }
}
function Zv(t, r) {
  let n = r.reactions;
  if (n !== null) {
    var a = rv.call(n, t);
    if (a !== -1) {
      var o = n.length - 1;
      o === 0 ? n = r.reactions = null : (n[a] = n[o], n.pop());
    }
  }
  if (n === null && (r.f & pr) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Gr === null || !Zo.call(Gr, r))) {
    var i = (
      /** @type {Derived} */
      r
    );
    (i.f & hn) !== 0 && (i.f ^= hn, i.f &= ~So), Nl(i), Bv(i), ji(i, 0);
  }
}
function ji(t, r) {
  var n = t.deps;
  if (n !== null)
    for (var a = r; a < n.length; a++)
      Zv(t, n[a]);
}
function ri(t) {
  var r = t.f;
  if ((r & un) === 0) {
    nr(t, sr);
    var n = it, a = ps;
    it = t, ps = !0;
    try {
      (r & (Ha | gc)) !== 0 ? Xv(t) : Xl(t), Vc(t);
      var o = eg(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Jc;
      var i;
      tv && Tv && (t.f & zr) !== 0 && t.deps;
    } finally {
      ps = a, it = n;
    }
  }
}
async function tg() {
  await Promise.resolve(), b();
}
function e(t) {
  var r = t.f, n = (r & pr) !== 0;
  if (et !== null && !jn) {
    var a = it !== null && (it.f & un) !== 0;
    if (!a && (pn === null || !Zo.call(pn, t))) {
      var o = et.deps;
      if ((et.f & cl) !== 0)
        t.rv < ho && (t.rv = ho, Gr === null && o !== null && o[Kr] === t ? Kr++ : Gr === null ? Gr = [t] : Gr.push(t));
      else {
        (et.deps ?? (et.deps = [])).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [et] : Zo.call(i, et) || i.push(et);
      }
    }
  }
  if (Na && Ia.has(t))
    return Ia.get(t);
  if (n) {
    var d = (
      /** @type {Derived} */
      t
    );
    if (Na) {
      var c = d.v;
      return ((d.f & sr) === 0 && d.reactions !== null || ng(d)) && (c = Gl(d)), Ia.set(d, c), c;
    }
    var h = (d.f & hn) === 0 && !jn && et !== null && (ps || (et.f & hn) !== 0), u = (d.f & Ga) === 0;
    Ii(d) && (h && (d.f |= hn), $c(d)), h && !u && (Ac(d), rg(d));
  }
  if (qr != null && qr.has(t))
    return qr.get(t);
  if ((t.f & Oa) !== 0)
    throw t.v;
  return t.v;
}
function rg(t) {
  if (t.f |= hn, t.deps !== null)
    for (const r of t.deps)
      (r.reactions ?? (r.reactions = [])).push(t), (r.f & pr) !== 0 && (r.f & hn) === 0 && (Ac(
        /** @type {Derived} */
        r
      ), rg(
        /** @type {Derived} */
        r
      ));
}
function ng(t) {
  if (t.v === _r) return !0;
  if (t.deps === null) return !1;
  for (const r of t.deps)
    if (Ia.has(r) || (r.f & pr) !== 0 && ng(
      /** @type {Derived} */
      r
    ))
      return !0;
  return !1;
}
function Va(t) {
  var r = jn;
  try {
    return jn = !0, t();
  } finally {
    jn = r;
  }
}
const uo = Symbol("events"), ag = /* @__PURE__ */ new Set(), yl = /* @__PURE__ */ new Set();
function Qv(t, r, n, a = {}) {
  function o(i) {
    if (a.capture || xl.call(r, i), !i.cancelBubble)
      return $s(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ha(() => {
    r.addEventListener(t, o, a);
  }) : r.addEventListener(t, o, a), o;
}
function _o(t, r, n, a, o) {
  var i = { capture: a, passive: o }, d = Qv(t, r, n, i);
  (r === document.body || // @ts-ignore
  r === window || // @ts-ignore
  r === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  r instanceof HTMLMediaElement) && Ul(() => {
    r.removeEventListener(t, d, i);
  });
}
function ae(t, r, n) {
  (r[uo] ?? (r[uo] = {}))[t] = n;
}
function rn(t) {
  for (var r = 0; r < t.length; r++)
    ag.add(t[r]);
  for (var n of yl)
    n(t);
}
let Vd = null;
function xl(t) {
  var _, E;
  var r = this, n = (
    /** @type {Node} */
    r.ownerDocument
  ), a = t.type, o = ((_ = t.composedPath) == null ? void 0 : _.call(t)) || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  Vd = t;
  var d = 0, c = Vd === t && t[uo];
  if (c) {
    var h = o.indexOf(c);
    if (h !== -1 && (r === document || r === /** @type {any} */
    window)) {
      t[uo] = r;
      return;
    }
    var u = o.indexOf(r);
    if (u === -1)
      return;
    h <= u && (d = h);
  }
  if (i = /** @type {Element} */
  o[d] || t.target, i !== r) {
    fs(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var x = et, q = it;
    wn(null), Fn(null);
    try {
      for (var w, P = []; i !== null; ) {
        var W = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var M = (E = i[uo]) == null ? void 0 : E[a];
          M != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && M.call(i, t);
        } catch (z) {
          w ? P.push(z) : w = z;
        }
        if (t.cancelBubble || W === r || W === null)
          break;
        i = W;
      }
      if (w) {
        for (let z of P)
          queueMicrotask(() => {
            throw z;
          });
        throw w;
      }
    } finally {
      t[uo] = r, delete t.currentTarget, wn(x), Fn(q);
    }
  }
}
var oc;
const Qs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((oc = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : oc.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function eh(t) {
  return (
    /** @type {string} */
    (Qs == null ? void 0 : Qs.createHTML(t)) ?? t
  );
}
function th(t) {
  var r = Vl("template");
  return r.innerHTML = eh(t.replaceAll("<!>", "<!---->")), r.content;
}
function Da(t, r) {
  var n = (
    /** @type {Effect} */
    it
  );
  n.nodes === null && (n.nodes = { start: t, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Z(t, r) {
  var n = (r & Qg) !== 0, a = (r & ev) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (lt)
      return Da(Ue, null), Ue;
    o === void 0 && (o = th(i ? t : "<!>" + t), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ jo(o)));
    var d = (
      /** @type {TemplateNode} */
      a || Ic ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jo(d)
      ), h = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Da(c, h);
    } else
      Da(d, d);
    return d;
  };
}
function Vr(t = "") {
  if (!lt) {
    var r = Yr(t + "");
    return Da(r, r), r;
  }
  var n = Ue;
  return n.nodeType !== Ei ? (n.before(n = Yr()), Ir(n)) : Cs(
    /** @type {Text} */
    n
  ), Da(n, n), n;
}
function ua() {
  if (lt)
    return Da(Ue, null), Ue;
  var t = document.createDocumentFragment(), r = document.createComment(""), n = Yr();
  return t.append(r, n), Da(r, n), t;
}
function G(t, r) {
  if (lt) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      it
    );
    ((n.f & Ga) === 0 || n.nodes.end === null) && (n.nodes.end = Ue), Ri();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    r
  );
}
function Di() {
  var t, r;
  if (lt && Ue && Ue.nodeType === ai && ((t = Ue.textContent) != null && t.startsWith("$"))) {
    const n = Ue.textContent.substring(1);
    return Ri(), n;
  }
  return (r = window.__svelte ?? (window.__svelte = {})).uid ?? (r.uid = 1), `c${window.__svelte.uid++}`;
}
const rh = ["touchstart", "touchmove"];
function nh(t) {
  return rh.includes(t);
}
function oe(t, r) {
  var n = r == null ? "" : typeof r == "object" ? `${r}` : r;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = `${n}`);
}
function og(t, r) {
  return ig(t, r);
}
function ah(t, r) {
  bl(), r.intro = r.intro ?? !1;
  const n = r.target, a = lt, o = Ue;
  try {
    for (var i = /* @__PURE__ */ jo(n); i && (i.nodeType !== ai || /** @type {Comment} */
    i.data !== sc); )
      i = /* @__PURE__ */ Nn(i);
    if (!i)
      throw Jo;
    va(!0), Ir(
      /** @type {Comment} */
      i
    );
    const d = ig(t, { ...r, anchor: i });
    return va(!1), /**  @type {Exports} */
    d;
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some((c) => c.startsWith("https://svelte.dev/e/")))
      throw d;
    return d !== Jo && console.warn("Failed to hydrate: ", d), r.recover === !1 && mv(), bl(), Bc(n), va(!1), og(t, r);
  } finally {
    va(a), Ir(o);
  }
}
const gs = /* @__PURE__ */ new Map();
function ig(t, { target: r, anchor: n, props: a = {}, events: o, context: i, intro: d = !0, transformError: c }) {
  bl();
  var h = void 0, u = Yv(() => {
    var x = n ?? r.appendChild(Yr());
    Av(
      /** @type {TemplateNode} */
      x,
      {
        pending: () => {
        }
      },
      (P) => {
        $t({});
        var W = (
          /** @type {ComponentContext} */
          Lr
        );
        if (i && (W.c = i), o && (a.$$events = o), lt && Da(
          /** @type {TemplateNode} */
          P,
          null
        ), h = t(P, a) || {}, lt && (it.nodes.end = Ue, Ue === null || Ue.nodeType !== ai || /** @type {Comment} */
        Ue.data !== Ll))
          throw Ms(), Jo;
        At();
      },
      c
    );
    var q = /* @__PURE__ */ new Set(), w = (P) => {
      for (var W = 0; W < P.length; W++) {
        var M = P[W];
        if (!q.has(M)) {
          q.add(M);
          var _ = nh(M);
          for (const T of [r, document]) {
            var E = gs.get(T);
            E === void 0 && (E = /* @__PURE__ */ new Map(), gs.set(T, E));
            var z = E.get(M);
            z === void 0 ? (T.addEventListener(M, xl, { passive: _ }), E.set(M, 1)) : E.set(M, z + 1);
          }
        }
      }
    };
    return w(Ps(ag)), yl.add(w), () => {
      var _;
      for (var P of q)
        for (const E of [r, document]) {
          var W = (
            /** @type {Map<string, number>} */
            gs.get(E)
          ), M = (
            /** @type {number} */
            W.get(P)
          );
          --M == 0 ? (E.removeEventListener(P, xl), W.delete(P), W.size === 0 && gs.delete(E)) : W.set(P, M);
        }
      yl.delete(w), x !== n && ((_ = x.parentNode) == null || _.removeChild(x));
    };
  });
  return kl.set(h, u), h;
}
let kl = /* @__PURE__ */ new WeakMap();
function oh(t, r) {
  const n = kl.get(t);
  return n ? (kl.delete(t), n(r)) : Promise.resolve();
}
var Tn, In, en, fo, Ci, $i, Ss;
class sg {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(r, n = !0) {
    /** @type {TemplateNode} */
    Ht(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Ve(this, Tn, /* @__PURE__ */ new Map());
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
    Ve(this, In, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Ve(this, en, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Ve(this, fo, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Ve(this, Ci, !0);
    /**
     * @param {Batch} batch
     */
    Ve(this, $i, (r) => {
      if (C(this, Tn).has(r)) {
        var n = (
          /** @type {Key} */
          C(this, Tn).get(r)
        ), a = C(this, In).get(n);
        if (a)
          Kl(a), C(this, fo).delete(n);
        else {
          var o = C(this, en).get(n);
          o && (C(this, In).set(n, o.effect), C(this, en).delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), a = o.effect);
        }
        for (const [i, d] of C(this, Tn)) {
          if (C(this, Tn).delete(i), i === r)
            break;
          const c = C(this, en).get(d);
          c && (Dr(c.effect), C(this, en).delete(d));
        }
        for (const [i, d] of C(this, In)) {
          if (i === n || C(this, fo).has(i)) continue;
          const c = () => {
            if (Array.from(C(this, Tn).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Jl(d, u), u.append(Yr()), C(this, en).set(i, { effect: d, fragment: u });
            } else
              Dr(d);
            C(this, fo).delete(i), C(this, In).delete(i);
          };
          C(this, Ci) || !a ? (C(this, fo).add(i), xo(d, c, !1)) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Ve(this, Ss, (r) => {
      C(this, Tn).delete(r);
      const n = Array.from(C(this, Tn).values());
      for (const [a, o] of C(this, en))
        n.includes(a) || (Dr(o.effect), C(this, en).delete(a));
    });
    this.anchor = r, Ne(this, Ci, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(r, n) {
    var a = (
      /** @type {Batch} */
      He
    ), o = Fc();
    if (n && !C(this, In).has(r) && !C(this, en).has(r))
      if (o) {
        var i = document.createDocumentFragment(), d = Yr();
        i.append(d), C(this, en).set(r, {
          effect: gn(() => n(d)),
          fragment: i
        });
      } else
        C(this, In).set(
          r,
          gn(() => n(this.anchor))
        );
    if (C(this, Tn).set(a, r), o) {
      for (const [c, h] of C(this, In))
        c === r ? a.unskip_effect(h) : a.skip_effect(h);
      for (const [c, h] of C(this, en))
        c === r ? a.unskip_effect(h.effect) : a.skip_effect(h.effect);
      a.oncommit(C(this, $i)), a.ondiscard(C(this, Ss));
    } else
      lt && (this.anchor = Ue), C(this, $i).call(this, a);
  }
}
Tn = new WeakMap(), In = new WeakMap(), en = new WeakMap(), fo = new WeakMap(), Ci = new WeakMap(), $i = new WeakMap(), Ss = new WeakMap();
function La(t, r, ...n) {
  var a = new sg(t);
  Es(() => {
    const o = r() ?? null;
    a.ensure(o, o && ((i) => o(i, ...n)));
  }, qo);
}
function Wo(t) {
  Lr === null && uc(), vn(() => {
    const r = Va(t);
    if (typeof r == "function") return (
      /** @type {() => void} */
      r
    );
  });
}
function ih(t) {
  Lr === null && uc(), Wo(() => () => Va(t));
}
function ge(t, r, n = !1) {
  var a;
  lt && (a = Ue, Ri());
  var o = new sg(t), i = n ? qo : 0;
  function d(c, h) {
    if (lt) {
      var u = pc(
        /** @type {TemplateNode} */
        a
      );
      if (c !== parseInt(u.substring(1))) {
        var x = bs();
        Ir(x), o.anchor = x, va(!1), o.ensure(c, h), va(!0);
        return;
      }
    }
    o.ensure(c, h);
  }
  Es(() => {
    var c = !1;
    r((h, u = 0) => {
      c = !0, d(u, h);
    }), c || d(-1, null);
  }, i);
}
function sh(t, r, n) {
  for (var a = [], o = r.length, i, d = r.length, c = 0; c < o; c++) {
    let q = r[c];
    xo(
      q,
      () => {
        if (i) {
          if (i.pending.delete(q), i.done.add(q), i.pending.size === 0) {
            var w = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            _l(t, Ps(i.done)), w.delete(i), w.size === 0 && (t.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var h = a.length === 0 && n !== null;
    if (h) {
      var u = (
        /** @type {Element} */
        n
      ), x = (
        /** @type {Element} */
        u.parentNode
      );
      Bc(x), x.append(u), t.items.clear();
    }
    _l(t, r, !h);
  } else
    i = {
      pending: new Set(r),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function _l(t, r, n = !0) {
  var a;
  if (t.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const d of t.pending.values())
      for (const c of d)
        a.add(
          /** @type {EachItem} */
          t.items.get(c).e
        );
  }
  for (var o = 0; o < r.length; o++) {
    var i = r[o];
    if (a != null && a.has(i)) {
      i.f |= Ln;
      const d = document.createDocumentFragment();
      Jl(i, d);
    } else
      Dr(r[o], n);
  }
}
var Yd;
function Ot(t, r, n, a, o, i = null) {
  var d = t, c = /* @__PURE__ */ new Map(), h = (r & ic) !== 0;
  if (h) {
    var u = (
      /** @type {Element} */
      t
    );
    d = lt ? Ir(/* @__PURE__ */ jo(u)) : u.appendChild(Yr());
  }
  lt && Ri();
  var x = null, q = /* @__PURE__ */ Cc(() => {
    var T = n();
    return Bl(T) ? T : T == null ? [] : Ps(T);
  }), w, P = /* @__PURE__ */ new Map(), W = !0;
  function M(T) {
    (z.effect.f & un) === 0 && (z.pending.delete(T), z.fallback = x, lh(z, w, d, r, a), x !== null && (w.length === 0 ? (x.f & Ln) === 0 ? Kl(x) : (x.f ^= Ln, yi(x, null, d)) : xo(x, () => {
      x = null;
    })));
  }
  function _(T) {
    z.pending.delete(T);
  }
  var E = Es(() => {
    w = /** @type {V[]} */
    e(q);
    var T = w.length;
    let R = !1;
    if (lt) {
      var D = pc(d) === Dl;
      D !== (T === 0) && (d = bs(), Ir(d), va(!1), R = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      He
    ), O = Fc(), m = 0; m < T; m += 1) {
      lt && Ue.nodeType === ai && /** @type {Comment} */
      Ue.data === Ll && (d = /** @type {Comment} */
      Ue, R = !0, va(!1));
      var he = w[m], J = a(he, m), ee = W ? null : c.get(J);
      ee ? (ee.v && ti(ee.v, he), ee.i && ti(ee.i, m), O && X.unskip_effect(ee.e)) : (ee = dh(
        c,
        W ? d : Yd ?? (Yd = Yr()),
        he,
        J,
        m,
        o,
        r,
        n
      ), W || (ee.e.f |= Ln), c.set(J, ee)), V.add(J);
    }
    if (T === 0 && i && !x && (W ? x = gn(() => i(d)) : (x = gn(() => i(Yd ?? (Yd = Yr()))), x.f |= Ln)), T > V.size && vv(), lt && T > 0 && Ir(bs()), !W)
      if (P.set(X, V), O) {
        for (const [se, de] of c)
          V.has(se) || X.skip_effect(de.e);
        X.oncommit(M), X.ondiscard(_);
      } else
        M(X);
    R && va(!0), e(q);
  }), z = { effect: E, items: c, pending: P, outrogroups: null, fallback: x };
  W = !1, lt && (d = Ue);
}
function bi(t) {
  for (; t !== null && (t.f & zn) === 0; )
    t = t.next;
  return t;
}
function lh(t, r, n, a, o) {
  var he, J, ee, se, de, je, _e, re, fe;
  var i = (a & Yg) !== 0, d = r.length, c = t.items, h = bi(t.effect.first), u, x = null, q, w = [], P = [], W, M, _, E;
  if (i)
    for (E = 0; E < d; E += 1)
      W = r[E], M = o(W, E), _ = /** @type {EachItem} */
      c.get(M).e, (_.f & Ln) === 0 && ((J = (he = _.nodes) == null ? void 0 : he.a) == null || J.measure(), (q ?? (q = /* @__PURE__ */ new Set())).add(_));
  for (E = 0; E < d; E += 1) {
    if (W = r[E], M = o(W, E), _ = /** @type {EachItem} */
    c.get(M).e, t.outrogroups !== null)
      for (const xe of t.outrogroups)
        xe.pending.delete(_), xe.done.delete(_);
    if ((_.f & tn) !== 0 && (Kl(_), i && ((se = (ee = _.nodes) == null ? void 0 : ee.a) == null || se.unfix(), (q ?? (q = /* @__PURE__ */ new Set())).delete(_))), (_.f & Ln) !== 0)
      if (_.f ^= Ln, _ === h)
        yi(_, null, n);
      else {
        var z = x ? x.next : h;
        _ === t.effect.last && (t.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ca(t, x, _), Ca(t, _, z), yi(_, z, n), x = _, w = [], P = [], h = bi(x.next);
        continue;
      }
    if (_ !== h) {
      if (u !== void 0 && u.has(_)) {
        if (w.length < P.length) {
          var T = P[0], R;
          x = T.prev;
          var D = w[0], V = w[w.length - 1];
          for (R = 0; R < w.length; R += 1)
            yi(w[R], T, n);
          for (R = 0; R < P.length; R += 1)
            u.delete(P[R]);
          Ca(t, D.prev, V.next), Ca(t, x, D), Ca(t, V, T), h = T, x = V, E -= 1, w = [], P = [];
        } else
          u.delete(_), yi(_, h, n), Ca(t, _.prev, _.next), Ca(t, _, x === null ? t.effect.first : x.next), Ca(t, x, _), x = _;
        continue;
      }
      for (w = [], P = []; h !== null && h !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(h), P.push(h), h = bi(h.next);
      if (h === null)
        continue;
    }
    (_.f & Ln) === 0 && w.push(_), x = _, h = bi(_.next);
  }
  if (t.outrogroups !== null) {
    for (const xe of t.outrogroups)
      xe.pending.size === 0 && (_l(t, Ps(xe.done)), (de = t.outrogroups) == null || de.delete(xe));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (h !== null || u !== void 0) {
    var X = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & tn) === 0 && X.push(_);
    for (; h !== null; )
      (h.f & tn) === 0 && h !== t.fallback && X.push(h), h = bi(h.next);
    var O = X.length;
    if (O > 0) {
      var m = (a & ic) !== 0 && d === 0 ? n : null;
      if (i) {
        for (E = 0; E < O; E += 1)
          (_e = (je = X[E].nodes) == null ? void 0 : je.a) == null || _e.measure();
        for (E = 0; E < O; E += 1)
          (fe = (re = X[E].nodes) == null ? void 0 : re.a) == null || fe.fix();
      }
      sh(t, X, m);
    }
  }
  i && ha(() => {
    var xe, B;
    if (q !== void 0)
      for (_ of q)
        (B = (xe = _.nodes) == null ? void 0 : xe.a) == null || B.apply();
  });
}
function dh(t, r, n, a, o, i, d, c) {
  var h = (d & Gg) !== 0 ? (d & Ug) === 0 ? /* @__PURE__ */ Rc(n, !1, !1) : To(n) : null, u = (d & Vg) !== 0 ? To(o) : null;
  return {
    v: h,
    i: u,
    e: gn(() => (i(r, h ?? n, u ?? o, c), () => {
      t.delete(a);
    }))
  };
}
function yi(t, r, n) {
  if (t.nodes)
    for (var a = t.nodes.start, o = t.nodes.end, i = r && (r.f & Ln) === 0 ? (
      /** @type {EffectNodes} */
      r.nodes.start
    ) : n; a !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nn(a)
      );
      if (i.before(a), a === o)
        return;
      a = d;
    }
}
function Ca(t, r, n) {
  r === null ? t.effect.first = n : r.next = n, n === null ? t.effect.last = r : n.prev = r;
}
function It(t, r) {
  Oi(() => {
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
      const o = Vl("style");
      o.id = r.hash, o.textContent = r.code, a.appendChild(o);
    }
  });
}
function ch(t, r, n) {
  Oi(() => {
    var a = Va(() => r(t, n == null ? void 0 : n()) || {});
    if (a != null && a.destroy)
      return () => (
        /** @type {Function} */
        a.destroy()
      );
  });
}
function lg(t) {
  var r, n, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (r = 0; r < o; r++) t[r] && (n = lg(t[r])) && (a && (a += " "), a += n);
  } else for (n in t) t[n] && (a && (a += " "), a += n);
  return a;
}
function gh() {
  for (var t, r, n = 0, a = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (r = lg(t)) && (a && (a += " "), a += r);
  return a;
}
function St(t) {
  return typeof t == "object" ? gh(t) : t ?? "";
}
const Ud = [...` 	
\r\f \v\uFEFF`];
function vh(t, r, n) {
  var a = t == null ? "" : "" + t;
  if (r && (a = a ? a + " " + r : r), n) {
    for (var o of Object.keys(n))
      if (n[o])
        a = a ? a + " " + o : o;
      else if (a.length)
        for (var i = o.length, d = 0; (d = a.indexOf(o, d)) >= 0; ) {
          var c = d + i;
          (d === 0 || Ud.includes(a[d - 1])) && (c === a.length || Ud.includes(a[c])) ? a = (d === 0 ? "" : a.substring(0, d)) + a.substring(c + 1) : d = c;
        }
  }
  return a === "" ? null : a;
}
function Xd(t, r = !1) {
  var n = r ? " !important;" : ";", a = "";
  for (var o of Object.keys(t)) {
    var i = t[o];
    i != null && i !== "" && (a += " " + o + ": " + i + n);
  }
  return a;
}
function el(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function hh(t, r) {
  if (r) {
    var n = "", a, o;
    if (Array.isArray(r) ? (a = r[0], o = r[1]) : a = r, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, d = 0, c = !1, h = [];
      a && h.push(...Object.keys(a).map(el)), o && h.push(...Object.keys(o).map(el));
      var u = 0, x = -1;
      const M = t.length;
      for (var q = 0; q < M; q++) {
        var w = t[q];
        if (c ? w === "/" && t[q - 1] === "*" && (c = !1) : i ? i === w && (i = !1) : w === "/" && t[q + 1] === "*" ? c = !0 : w === '"' || w === "'" ? i = w : w === "(" ? d++ : w === ")" && d--, !c && i === !1 && d === 0) {
          if (w === ":" && x === -1)
            x = q;
          else if (w === ";" || q === M - 1) {
            if (x !== -1) {
              var P = el(t.substring(u, x).trim());
              if (!h.includes(P)) {
                w !== ";" && q++;
                var W = t.substring(u, q).trim();
                n += " " + W + ";";
              }
            }
            u = q + 1, x = -1;
          }
        }
      }
    }
    return a && (n += Xd(a)), o && (n += Xd(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function le(t, r, n, a, o, i) {
  var d = t.__className;
  if (lt || d !== n || d === void 0) {
    var c = vh(n, a, i);
    (!lt || c !== t.getAttribute("class")) && (c == null ? t.removeAttribute("class") : t.className = c), t.__className = n;
  } else if (i && o !== i)
    for (var h in i) {
      var u = !!i[h];
      (o == null || u !== !!o[h]) && t.classList.toggle(h, u);
    }
  return i;
}
function tl(t, r = {}, n, a) {
  for (var o in n) {
    var i = n[o];
    r[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, a));
  }
}
function Pr(t, r, n, a) {
  var o = t.__style;
  if (lt || o !== r) {
    var i = hh(r, a);
    (!lt || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = r;
  } else a && (Array.isArray(a) ? (tl(t, n == null ? void 0 : n[0], a[0]), tl(t, n == null ? void 0 : n[1], a[1], "important")) : tl(t, n, a));
  return a;
}
function ur(t, r, n = !1) {
  if (t.multiple) {
    if (r == null)
      return;
    if (!Bl(r))
      return _v();
    for (var a of t.options)
      a.selected = r.includes(qi(a));
    return;
  }
  for (a of t.options) {
    var o = qi(a);
    if (Nv(o, r)) {
      a.selected = !0;
      return;
    }
  }
  (!n || r !== void 0) && (t.selectedIndex = -1);
}
function kr(t) {
  var r = new MutationObserver(() => {
    ur(t, t.__value);
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
  }), Ul(() => {
    r.disconnect();
  });
}
function dg(t, r, n = r) {
  var a = /* @__PURE__ */ new WeakSet(), o = !0;
  Hc(t, "change", (i) => {
    var d = i ? "[selected]" : ":checked", c;
    if (t.multiple)
      c = [].map.call(t.querySelectorAll(d), qi);
    else {
      var h = t.querySelector(d) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      c = h && qi(h);
    }
    n(c), t.__value = c, He !== null && a.add(He);
  }), Oi(() => {
    var i = r();
    if (t === document.activeElement) {
      var d = (
        /** @type {Batch} */
        He
      );
      if (a.has(d))
        return;
    }
    if (ur(t, i, o), o && i === void 0) {
      var c = t.querySelector(":checked");
      c !== null && (i = qi(c), n(i));
    }
    t.__value = i, o = !1;
  }), kr(t);
}
function qi(t) {
  return "__value" in t ? t.__value : t.value;
}
const uh = Symbol("is custom element"), ph = Symbol("is html"), wh = hc ? "link" : "LINK", mh = hc ? "progress" : "PROGRESS";
function bt(t) {
  if (lt) {
    var r = !1, n = () => {
      if (!r) {
        if (r = !0, t.hasAttribute("value")) {
          var a = t.value;
          j(t, "value", null), t.value = a;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          j(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, ha(n), Nc();
  }
}
function Or(t, r) {
  var n = Zl(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  r ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === r && (r !== 0 || t.nodeName !== mh) || (t.value = r ?? "");
}
function ql(t, r) {
  var n = Zl(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  r ?? void 0) && (t.checked = r);
}
function j(t, r, n, a) {
  var o = Zl(t);
  lt && (o[r] = t.getAttribute(r), r === "src" || r === "srcset" || r === "href" && t.nodeName === wh) || o[r] !== (o[r] = n) && (r === "loading" && (t[cv] = n), n == null ? t.removeAttribute(r) : typeof n != "string" && fh(t).includes(r) ? t[r] = n : t.setAttribute(r, n));
}
function Zl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [uh]: t.nodeName.includes("-"),
      [ph]: t.namespaceURI === lc
    })
  );
}
var Kd = /* @__PURE__ */ new Map();
function fh(t) {
  var r = t.getAttribute("is") || t.nodeName, n = Kd.get(r);
  if (n) return n;
  Kd.set(r, n = []);
  for (var a, o = t, i = Element.prototype; i !== o; ) {
    a = nv(o);
    for (var d in a)
      a[d].set && n.push(d);
    o = dc(o);
  }
  return n;
}
function Pn(t, r, n = r) {
  var a = /* @__PURE__ */ new WeakSet();
  Hc(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = rl(t) ? nl(i) : i, n(i), He !== null && a.add(He), await tg(), i !== (i = r())) {
      var d = t.selectionStart, c = t.selectionEnd, h = t.value.length;
      if (t.value = i ?? "", c !== null) {
        var u = t.value.length;
        d === c && c === h && u > h ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = d, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (lt && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Va(r) == null && t.value) && (n(rl(t) ? nl(t.value) : t.value), He !== null && a.add(He)), As(() => {
    var o = r();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        He
      );
      if (a.has(i))
        return;
    }
    rl(t) && o === nl(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function rl(t) {
  var r = t.type;
  return r === "number" || r === "range";
}
function nl(t) {
  return t === "" ? null : +t;
}
var Ea, Ko, Ai, Ts, cg;
const js = class js {
  /** @param {ResizeObserverOptions} options */
  constructor(r) {
    Ve(this, Ts);
    /** */
    Ve(this, Ea, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Ve(this, Ko);
    /** @type {ResizeObserverOptions} */
    Ve(this, Ai);
    Ne(this, Ai, r);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(r, n) {
    var a = C(this, Ea).get(r) || /* @__PURE__ */ new Set();
    return a.add(n), C(this, Ea).set(r, a), Rt(this, Ts, cg).call(this).observe(r, C(this, Ai)), () => {
      var o = C(this, Ea).get(r);
      o.delete(n), o.size === 0 && (C(this, Ea).delete(r), C(this, Ko).unobserve(r));
    };
  }
};
Ea = new WeakMap(), Ko = new WeakMap(), Ai = new WeakMap(), Ts = new WeakSet(), cg = function() {
  return C(this, Ko) ?? Ne(this, Ko, new ResizeObserver(
    /** @param {any} entries */
    (r) => {
      for (var n of r) {
        js.entries.set(n.target, n);
        for (var a of C(this, Ea).get(n.target) || [])
          a(n);
      }
    }
  ));
}, /** @static */
Ht(js, "entries", /* @__PURE__ */ new WeakMap());
let Sl = js;
var bh = /* @__PURE__ */ new Sl({
  box: "border-box"
});
function Jd(t, r, n) {
  var a = bh.observe(t, () => n(t[r]));
  Oi(() => (Va(() => n(t[r])), a));
}
function Zd(t, r) {
  return t === r || (t == null ? void 0 : t[yo]) === r;
}
function ni(t = {}, r, n, a) {
  var o = (
    /** @type {ComponentContext} */
    Lr.r
  ), i = (
    /** @type {Effect} */
    it
  );
  return Oi(() => {
    var d, c;
    return As(() => {
      d = c, c = [], Va(() => {
        t !== n(...c) && (r(t, ...c), d && Zd(n(...d), t) && r(null, ...d));
      });
    }), () => {
      let h = i;
      for (; h !== o && h.parent !== null && h.parent.f & dl; )
        h = h.parent;
      const u = () => {
        c && Zd(n(...c), t) && r(null, ...c);
      }, x = h.teardown;
      h.teardown = () => {
        u(), x == null || x();
      };
    };
  }), t;
}
function y(t, r, n, a) {
  var z;
  var o = (n & Jg) !== 0, i = (n & Zg) !== 0, d = (
    /** @type {V} */
    a
  ), c = !0, h = () => (c && (c = !1, d = i ? Va(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), d);
  let u;
  if (o) {
    var x = yo in t || vc in t;
    u = ((z = bo(t, r)) == null ? void 0 : z.set) ?? (x && r in t ? (T) => t[r] = T : void 0);
  }
  var q, w = !1;
  o ? [q, w] = zv(() => (
    /** @type {V} */
    t[r]
  )) : q = /** @type {V} */
  t[r], q === void 0 && a !== void 0 && (q = h(), u && (fv(), u(q)));
  var P;
  if (P = () => {
    var T = (
      /** @type {V} */
      t[r]
    );
    return T === void 0 ? h() : (c = !0, T);
  }, (n & Kg) === 0)
    return P;
  if (u) {
    var W = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(T, R) {
        return arguments.length > 0 ? ((!R || W || w) && u(R ? P() : T), T) : P();
      })
    );
  }
  var M = !1, _ = ((n & Xg) !== 0 ? Ws : Cc)(() => (M = !1, P()));
  o && e(_);
  var E = (
    /** @type {Effect} */
    it
  );
  return (
    /** @type {() => V} */
    (function(T, R) {
      if (arguments.length > 0) {
        const D = R ? e(_) : o ? ht(T) : T;
        return $(_, D), M = !0, d !== void 0 && (d = D), T;
      }
      return Na && M || (E.f & un) !== 0 ? _.v : e(_);
    })
  );
}
function yh(t) {
  return new xh(t);
}
var ca, cn;
class xh {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(r) {
    /** @type {any} */
    Ve(this, ca);
    /** @type {Record<string, any>} */
    Ve(this, cn);
    var i;
    var n = /* @__PURE__ */ new Map(), a = (d, c) => {
      var h = /* @__PURE__ */ Rc(c, !1, !1);
      return n.set(d, h), h;
    };
    const o = new Proxy(
      { ...r.props || {}, $$events: {} },
      {
        get(d, c) {
          return e(n.get(c) ?? a(c, Reflect.get(d, c)));
        },
        has(d, c) {
          return c === vc ? !0 : (e(n.get(c) ?? a(c, Reflect.get(d, c))), Reflect.has(d, c));
        },
        set(d, c, h) {
          return $(n.get(c) ?? a(c, h), h), Reflect.set(d, c, h);
        }
      }
    );
    Ne(this, cn, (r.hydrate ? ah : og)(r.component, {
      target: r.target,
      anchor: r.anchor,
      props: o,
      context: r.context,
      intro: r.intro ?? !1,
      recover: r.recover,
      transformError: r.transformError
    })), (!((i = r == null ? void 0 : r.props) != null && i.$$host) || r.sync === !1) && b(), Ne(this, ca, o.$$events);
    for (const d of Object.keys(C(this, cn)))
      d === "$set" || d === "$destroy" || d === "$on" || fs(this, d, {
        get() {
          return C(this, cn)[d];
        },
        /** @param {any} value */
        set(c) {
          C(this, cn)[d] = c;
        },
        enumerable: !0
      });
    C(this, cn).$set = /** @param {Record<string, any>} next */
    (d) => {
      Object.assign(o, d);
    }, C(this, cn).$destroy = () => {
      oh(C(this, cn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(r) {
    C(this, cn).$set(r);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(r, n) {
    C(this, ca)[r] = C(this, ca)[r] || [];
    const a = (...o) => n.call(this, ...o);
    return C(this, ca)[r].push(a), () => {
      C(this, ca)[r] = C(this, ca)[r].filter(
        /** @param {any} fn */
        (o) => o !== a
      );
    };
  }
  $destroy() {
    C(this, cn).$destroy();
  }
}
ca = new WeakMap(), cn = new WeakMap();
let gg;
typeof HTMLElement == "function" && (gg = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(r, n, a) {
    super();
    /** The Svelte component constructor */
    Ht(this, "$$ctor");
    /** Slots */
    Ht(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ht(this, "$$c");
    /** Whether or not the custom element is connected */
    Ht(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ht(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ht(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ht(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ht(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ht(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ht(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    Ht(this, "$$shadowRoot", null);
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
        return (d) => {
          const c = Vl("slot");
          i !== "default" && (c.name = i), G(d, c);
        };
      };
      var r = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const a = {}, o = kh(this);
      for (const i of this.$$s)
        i in o && (i === "default" && !this.$$d.children ? (this.$$d.children = n(i), a.default = !0) : a[i] = n(i));
      for (const i of this.attributes) {
        const d = this.$$g_p(i.name);
        d in this.$$d || (this.$$d[d] = ws(d, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = yh({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: a,
          $$host: this
        }
      }), this.$$me = Vv(() => {
        As(() => {
          var i;
          this.$$r = !0;
          for (const d of ms(this.$$c)) {
            if (!((i = this.$$p_d[d]) != null && i.reflect)) continue;
            this.$$d[d] = this.$$c[d];
            const c = ws(
              d,
              this.$$d[d],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[d].attribute || d) : this.setAttribute(this.$$p_d[d].attribute || d, c);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const d of this.$$l[i]) {
          const c = this.$$c.$on(i, d);
          this.$$l_u.set(d, c);
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
    this.$$r || (r = this.$$g_p(r), this.$$d[r] = ws(r, a, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [r]: this.$$d[r] }));
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
    return ms(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === r || !this.$$p_d[n].attribute && n.toLowerCase() === r
    ) || r;
  }
});
function ws(t, r, n, a) {
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
function kh(t) {
  const r = {};
  return t.childNodes.forEach((n) => {
    r[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), r;
}
function Dt(t, r, n, a, o, i) {
  let d = class extends gg {
    constructor() {
      super(t, n, o), this.$$p_d = r;
    }
    static get observedAttributes() {
      return ms(r).map(
        (c) => (r[c].attribute || c).toLowerCase()
      );
    }
  };
  return ms(r).forEach((c) => {
    fs(d.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(h) {
        var q;
        h = ws(c, h, r), this.$$d[c] = h;
        var u = this.$$c;
        if (u) {
          var x = (q = bo(u, c)) == null ? void 0 : q.get;
          x ? u[c] = h : u.$set({ [c]: h });
        }
      }
    });
  }), a.forEach((c) => {
    fs(d.prototype, c, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[c];
      }
    });
  }), t.element = /** @type {any} */
  d, d;
}
const al = "efsdb-bootstrap";
function _h() {
  var a;
  const t = document.getElementById(al);
  if (!(t instanceof HTMLScriptElement))
    throw new Error(`Missing bootstrap script: #${al}`);
  const r = ((a = t.textContent) == null ? void 0 : a.trim()) ?? "";
  if (r === "")
    throw new Error(`Empty bootstrap script: #${al}`);
  const n = JSON.parse(r);
  if (!n || typeof n != "object")
    throw new Error("Invalid bootstrap payload");
  return n;
}
function qh(t) {
  const r = _h();
  if (r.app !== t)
    throw new Error(`Bootstrap app mismatch. Expected ${t}, received ${r.app}`);
  return r;
}
function Sh() {
  return window;
}
function ol() {
  var r, n;
  const t = (n = (r = Sh()).getEfsdbTheme) == null ? void 0 : n.call(r);
  return t === "light" || t === "green" ? t : "dark";
}
function Th(t) {
  const r = (n) => {
    const a = n.detail, o = a == null ? void 0 : a.theme;
    t(o === "light" || o === "green" ? o : "dark");
  };
  return window.addEventListener("efsdb-themechange", r), () => window.removeEventListener("efsdb-themechange", r);
}
function Tl() {
  return window;
}
function jh() {
  var t, r;
  return ((r = (t = Tl()).getAccessToken) == null ? void 0 : r.call(t)) ?? null;
}
async function Ph() {
  return typeof Tl().refreshAccessToken != "function" ? null : Tl().refreshAccessToken();
}
async function pa(t, r = {}) {
  const n = new Headers(r.headers ?? {}), a = jh();
  return a && n.set("Authorization", `Bearer ${a}`), fetch(t, {
    credentials: "same-origin",
    ...r,
    headers: n
  });
}
async function wa(t) {
  const r = t.headers.get("content-type") || "";
  if (!r.includes("application/json"))
    throw new Error(`Expected JSON, got: ${r || "unknown"}`);
  return await t.json();
}
async function Ya(t) {
  var n;
  if ((t.headers.get("content-type") || "").includes("application/json")) {
    const a = await t.json().catch(() => null), o = (n = a == null ? void 0 : a.error) == null ? void 0 : n.message;
    if (typeof o == "string" && o.trim() !== "")
      return o;
  }
  return `HTTP ${t.status}`;
}
function vg(t) {
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
async function zh(t) {
  const r = await pa(`/_efsdb/api/facets${vg({
    entity: t.entity,
    field: t.field,
    q: t.q
  })}`);
  if (!r.ok)
    throw new Error(await Ya(r));
  return wa(r);
}
async function Mh(t) {
  const r = await pa(`/_efsdb/api/search${vg({
    entity: t.entity,
    q: t.q,
    limit: t.limit,
    cursor: t.cursor,
    sort: t.sort
  })}`);
  if (!r.ok)
    throw new Error(await Ya(r));
  return wa(r);
}
async function Wh(t = {}, r) {
  var u, x;
  const n = t.entity ?? "public_workspace_files", a = ((u = t.q) == null ? void 0 : u.trim()) || void 0, o = ((x = t.field) == null ? void 0 : x.filter((q) => q.trim() !== "")) ?? [], i = Mh({
    entity: n,
    q: a,
    limit: t.limit ?? 10
  }), d = o.length > 0 ? zh({
    entity: n,
    q: a,
    field: o
  }) : Promise.resolve({ results: {} }), [c, h] = await Promise.allSettled([i, d]);
  if (c.status === "rejected")
    throw c.reason instanceof Error ? c.reason : new Error("Unable to load workspace search results");
  return {
    results: c.value.results,
    facets: h.status === "fulfilled" ? h.value.results : {}
  };
}
async function Ch(t) {
  const r = await pa(`${t.replace(/\/$/, "")}/users`);
  if (!r.ok)
    throw new Error(await Ya(r));
  return wa(r);
}
async function $h(t, r) {
  const n = await pa(`${t.replace(/\/$/, "")}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!n.ok)
    throw new Error(await Ya(n));
  return wa(n);
}
async function Ah(t) {
  const r = await pa(`${t.replace(/\/$/, "")}/roles`);
  if (!r.ok)
    throw new Error(await Ya(r));
  return wa(r);
}
async function Eh(t, r) {
  const n = await pa(`${t.replace(/\/$/, "")}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!n.ok)
    throw new Error(await Ya(n));
  return wa(n);
}
async function Rh(t) {
  const r = await pa(`${t.replace(/\/$/, "")}/settings`);
  if (!r.ok)
    throw new Error(await Ya(r));
  return wa(r);
}
async function Oh() {
  return Ph();
}
async function Ih(t) {
  const r = await pa(`${t.replace(/\/$/, "")}/whoami`);
  return r.ok ? wa(r) : null;
}
async function Dh(t, r) {
  const n = await pa(`${t.replace(/\/$/, "")}/display-mode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ roleId: r })
  });
  if (!n.ok)
    throw new Error(await Ya(n));
  return wa(n);
}
const il = "efsdb:admin:global:edge-dock-open-request";
function Lh(t) {
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
const Ae = (t, r = "0 0 20 20") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r}" aria-hidden="true">${t}</svg>`, Ee = (t, r = "1.5") => `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${r}">${t}</g>`, Qd = (t) => `<g fill="#000">${t}</g>`, Bh = {
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
        svg: Ae(
          Ee(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: "rounded",
        label: "Rounded badge",
        tone: "popular",
        svg: Ae(
          Ee(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: "classic",
        label: "Classic account add",
        tone: "classic",
        svg: Ae(
          `${Qd('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${Ee(
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
        svg: Ae(
          Ee(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            "1.45"
          )
        )
      },
      roster: {
        id: "roster",
        label: "Roster grid",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            "1.55"
          )
        )
      },
      badge: {
        id: "badge",
        label: "Badge plus",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            "1.45"
          )
        )
      },
      ledger: {
        id: "ledger",
        label: "Ledger tabs",
        tone: "classic",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            "1.45"
          )
        )
      },
      dual: {
        id: "dual",
        label: "Split mode",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            "1.45"
          )
        )
      },
      sliders: {
        id: "sliders",
        label: "Sliders window",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            "1.45"
          )
        )
      },
      braces: {
        id: "braces",
        label: "Schema braces",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', "1.5")
        )
      },
      spotlight: {
        id: "spotlight",
        label: "Spotlight search",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          `${Ee('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', "1.55")} ${Qd(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: "checklist",
        label: "Checklist rows",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            "1.35"
          )
        )
      },
      funnel: {
        id: "funnel",
        label: "Filter funnel",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', "1.45")
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
        svg: Ae(
          Ee(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      shield: {
        id: "shield",
        label: "Shield lock",
        tone: "classic",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            "1.55"
          )
        )
      },
      wrench: {
        id: "wrench",
        label: "Unlock tool",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            "1.5"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Reset arrow",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', "1.45")
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
        svg: Ae(
          Ee(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            "1.35"
          )
        )
      },
      plus: {
        id: "plus",
        label: "Add button",
        tone: "popular",
        svg: Ae(Ee('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', "1.6"))
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
        svg: Ae(
          Ee(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            "1.6"
          )
        )
      },
      window: {
        id: "window",
        label: "External window",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            "1.45"
          )
        )
      },
      office: {
        id: "office",
        label: "Office pin",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', "1.35")
        )
      },
      bookmark: {
        id: "bookmark",
        label: "Bookmark pin",
        tone: "classic",
        svg: Ae(Ee('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', "1.4"))
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
        svg: Ae(
          Ee(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            "1.35"
          )
        )
      },
      info: {
        id: "info",
        label: "Info badge",
        tone: "popular",
        svg: Ae(Ee('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', "1.45"))
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
        svg: Ae(
          Ee(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            "1.4"
          )
        )
      },
      dock: {
        id: "dock",
        label: "Floating dock",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            "1.45"
          )
        )
      },
      rail: {
        id: "rail",
        label: "Dock rail",
        tone: "popular",
        svg: Ae(
          Ee(
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
        svg: Ae(
          Ee(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            "1.45"
          )
        )
      },
      arrow: {
        id: "arrow",
        label: "Open arrow",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', "1.45")
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
        svg: Ae(
          Ee('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', "1.45")
        )
      },
      target: {
        id: "target",
        label: "Target center",
        tone: "popular",
        svg: Ae(
          Ee('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', "1.35")
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
        svg: Ae(Ee('<path d="M5.5 11.5 10 7l4.5 4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic collapse",
        tone: "classic",
        svg: Ae(Ee('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', "1.45"))
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
        svg: Ae(Ee('<path d="M5.5 8.5 10 13l4.5-4.5"/>', "1.55"))
      },
      classic: {
        id: "classic",
        label: "Classic expand",
        tone: "classic",
        svg: Ae(Ee('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', "1.45"))
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
        svg: Ae(Ee('<path d="M5.5 10.5h9"/>', "1.65"))
      },
      tray: {
        id: "tray",
        label: "Tray minimize",
        tone: "popular",
        svg: Ae(Ee('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', "1.45"))
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
        svg: Ae(Ee('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', "1.45"))
      },
      expand: {
        id: "expand",
        label: "Expand corners",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', "1.45")
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
        svg: Ae(
          Ee('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', "1.45")
        )
      },
      stack: {
        id: "stack",
        label: "Stack restore",
        tone: "popular",
        svg: Ae(
          Ee('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', "1.35")
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
        svg: Ae(Ee('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', "1.55"))
      },
      rounded: {
        id: "rounded",
        label: "Rounded close",
        tone: "popular",
        svg: Ae(Ee('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', "1.7"))
      }
    }
  }
};
function Fh(t, r) {
  const n = Bh[t], a = n.variants;
  return (a[r ?? n.defaultVariant] ?? a[n.defaultVariant]).svg;
}
const ec = /* @__PURE__ */ new Map();
function Ql(t, r) {
  const n = `${t}:${r ?? "default"}`, a = ec.get(n);
  if (a)
    return a;
  const o = Fh(t, r), i = `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
  return ec.set(n, i), i;
}
const rr = [
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
], Nh = {
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
}, tc = rr.reduce(
  (t, r) => (t[r] = Ql(Nh[r]), t),
  {}
), Oe = {
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
}, xr = {
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
var Hh = /* @__PURE__ */ Z('<span class="overview-pill svelte-171qv50"> </span>'), Gh = /* @__PURE__ */ Z('<article class="overview-metric svelte-171qv50"><span class="overview-metric-label svelte-171qv50"> </span> <strong class="overview-metric-value svelte-171qv50"> </strong> <span class="overview-metric-detail svelte-171qv50"> </span></article>'), Vh = /* @__PURE__ */ Z('<div class="notice svelte-171qv50">Loading admin control-plane data…</div>'), Yh = /* @__PURE__ */ Z('<div data-testid="admin-notice"> </div>'), Uh = /* @__PURE__ */ Z('<section class="admin-shell svelte-171qv50"><header class="workspace-overview svelte-171qv50"><div class="overview-copy svelte-171qv50"><span class="overview-eyebrow svelte-171qv50">Admin workspace</span> <h1 class="overview-title svelte-171qv50">Users, roles, modes, and search</h1> <div class="overview-pill-row svelte-171qv50" aria-label="Workspace focus areas"></div> <p class="overview-subtitle svelte-171qv50">Compact control surface for provisioning, policy, and discovery.</p></div> <div class="overview-metrics svelte-171qv50" aria-label="Admin summary metrics"></div></header> <!> <!> <div class="shell-body svelte-171qv50"><!></div></section>');
const Xh = {
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
function hg(t, r) {
  $t(r, !0), It(t, Xh);
  const n = ["Users", "Roles", "Modes", "Search"];
  let a = y(r, "notice", 7), o = y(r, "loading", 7), i = y(r, "metrics", 7), d = y(r, "children", 7);
  var c = {
    get notice() {
      return a();
    },
    set notice(T) {
      a(T), b();
    },
    get loading() {
      return o();
    },
    set loading(T) {
      o(T), b();
    },
    get metrics() {
      return i();
    },
    set metrics(T) {
      i(T), b();
    },
    get children() {
      return d();
    },
    set children(T) {
      d(T), b();
    }
  }, h = Uh(), u = l(h), x = l(u), q = g(l(x), 4);
  Ot(q, 20, () => n, (T) => T, (T, R) => {
    var D = Hh(), V = l(D, !0);
    s(D), we(() => oe(V, R)), G(T, D);
  }), s(q), jr(2), s(x);
  var w = g(x, 2);
  Ot(w, 21, i, (T) => T.label, (T, R) => {
    var D = Gh(), V = l(D), X = l(V, !0);
    s(V);
    var O = g(V, 2), m = l(O, !0);
    s(O);
    var he = g(O, 2), J = l(he, !0);
    s(he), s(D), we(() => {
      oe(X, e(R).label), oe(m, e(R).value), oe(J, e(R).detail);
    }), G(T, D);
  }), s(w), s(u);
  var P = g(u, 2);
  {
    var W = (T) => {
      var R = Vh();
      G(T, R);
    };
    ge(P, (T) => {
      o() && T(W);
    });
  }
  var M = g(P, 2);
  {
    var _ = (T) => {
      var R = Yh(), D = l(R, !0);
      s(R), we(() => {
        le(R, 1, St(a().error ? "flash-error" : "notice"), "svelte-171qv50"), oe(D, a().message);
      }), G(T, R);
    };
    ge(M, (T) => {
      a() && T(_);
    });
  }
  var E = g(M, 2), z = l(E);
  return La(z, () => d() ?? zo), s(E), s(h), G(t, h), At(c);
}
Dt(hg, { notice: {}, loading: {}, metrics: {}, children: {} }, [], [], { mode: "open" });
var Kh = /* @__PURE__ */ Z('<div class="tool-popover svelte-qjuage" role="presentation"><!></div>');
const Jh = {
  hash: "svelte-qjuage",
  code: `.tool-popover.svelte-qjuage {position:fixed;max-height:min(42rem, calc(100vh - 1.5rem));overflow:visible;pointer-events:auto;}

  @media (max-width: 47.99rem) {.tool-popover.svelte-qjuage {width:min(100vw - 1rem, 28rem);}
  }`
};
function ug(t, r) {
  $t(r, !0), It(t, Jh);
  let n = y(r, "open", 7, !1), a = y(r, "anchor", 7, null), o = y(r, "placement", 7, "bottom-end"), i = y(r, "offset", 7, 12), d = y(r, "width", 7, "min(28rem, calc(100vw - 1.5rem))"), c = y(r, "zIndex", 7, 460), h = y(r, "onClose", 7), u = y(r, "children", 7), x = /* @__PURE__ */ me(null), q = /* @__PURE__ */ me(0), w = /* @__PURE__ */ me(0);
  function P() {
    if (!n() || !a() || !e(x) || typeof window > "u")
      return;
    const z = a().getBoundingClientRect(), T = e(x).getBoundingClientRect(), R = 12;
    let D = o().startsWith("bottom") ? z.bottom + i() : z.top - T.height - i(), V = o().endsWith("end") ? z.right - T.width : z.left;
    D = Math.min(Math.max(R, D), Math.max(R, window.innerHeight - T.height - R)), V = Math.min(Math.max(R, V), Math.max(R, window.innerWidth - T.width - R)), $(q, D, !0), $(w, V, !0);
  }
  vn(() => {
    if (!n() || !a() || typeof window > "u" || typeof document > "u")
      return;
    const z = requestAnimationFrame(() => {
      P();
    }), T = () => {
      P();
    }, R = (D) => {
      var X;
      const V = D.composedPath();
      e(x) && V.includes(e(x)) || a() && V.includes(a()) || (X = h()) == null || X();
    };
    return window.addEventListener("resize", T), window.addEventListener("scroll", T, !0), document.addEventListener("pointerdown", R, !0), () => {
      cancelAnimationFrame(z), window.removeEventListener("resize", T), window.removeEventListener("scroll", T, !0), document.removeEventListener("pointerdown", R, !0);
    };
  });
  var W = {
    get open() {
      return n();
    },
    set open(z = !1) {
      n(z), b();
    },
    get anchor() {
      return a();
    },
    set anchor(z = null) {
      a(z), b();
    },
    get placement() {
      return o();
    },
    set placement(z = "bottom-end") {
      o(z), b();
    },
    get offset() {
      return i();
    },
    set offset(z = 12) {
      i(z), b();
    },
    get width() {
      return d();
    },
    set width(z = "min(28rem, calc(100vw - 1.5rem))") {
      d(z), b();
    },
    get zIndex() {
      return c();
    },
    set zIndex(z = 460) {
      c(z), b();
    },
    get onClose() {
      return h();
    },
    set onClose(z) {
      h(z), b();
    },
    get children() {
      return u();
    },
    set children(z) {
      u(z), b();
    }
  }, M = ua(), _ = Xt(M);
  {
    var E = (z) => {
      var T = Kh();
      let R;
      var D = l(T);
      La(D, () => u() ?? zo), s(T), ni(T, (V) => $(x, V), () => e(x)), we(() => R = Pr(T, "", R, {
        top: `${e(q)}px`,
        left: `${e(w)}px`,
        width: d(),
        "z-index": c()
      })), G(z, T);
    };
    ge(_, (z) => {
      n() && z(E);
    });
  }
  return G(t, M), At(W);
}
Dt(
  ug,
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
var Zh = /* @__PURE__ */ Z("<span></span>");
const Qh = {
  hash: "svelte-1a09gvd",
  code: ".app-icon.svelte-1a09gvd {display:inline-flex;flex:none;align-items:center;justify-content:center;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}"
};
function tt(t, r) {
  $t(r, !0), It(t, Qh);
  let n = y(r, "name", 7), a = y(r, "variant", 7), o = y(r, "decorative", 7, !0), i = y(r, "label", 7), d = y(r, "title", 7), c = y(r, "size", 7, "1rem"), h = y(r, "className", 7, ""), u = /* @__PURE__ */ k(() => Ql(n(), a())), x = /* @__PURE__ */ k(() => i() ?? d() ?? n());
  var q = {
    get name() {
      return n();
    },
    set name(W) {
      n(W), b();
    },
    get variant() {
      return a();
    },
    set variant(W) {
      a(W), b();
    },
    get decorative() {
      return o();
    },
    set decorative(W = !0) {
      o(W), b();
    },
    get label() {
      return i();
    },
    set label(W) {
      i(W), b();
    },
    get title() {
      return d();
    },
    set title(W) {
      d(W), b();
    },
    get size() {
      return c();
    },
    set size(W = "1rem") {
      c(W), b();
    },
    get className() {
      return h();
    },
    set className(W = "") {
      h(W), b();
    }
  }, w = Zh();
  let P;
  return we(
    (W) => {
      le(w, 1, W, "svelte-1a09gvd"), j(w, "aria-hidden", o()), j(w, "aria-label", o() ? void 0 : e(x)), j(w, "role", o() ? void 0 : "img"), j(w, "title", d()), P = Pr(w, "", P, { "--icon-mask": e(u), width: c(), height: c() });
    },
    [() => St(`app-icon ${h()}`.trim())]
  ), G(t, w), At(q);
}
Dt(
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
const ed = "efsdb:window-settings", pg = "efsdb:window-settings:profiles", Po = {
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
}, eu = /* @__PURE__ */ new Set(["aero"]);
function jl(t) {
  return eu.has(t);
}
function Co(t) {
  if (!jl(t.themePreset))
    return t;
  const r = Po[t.themePreset];
  return r ? {
    ...t,
    ...r.settings,
    themePreset: t.themePreset
  } : t;
}
const Si = {
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
}, Re = {
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
}, xs = /* @__PURE__ */ new Set();
let Dn = yg();
function wg(t) {
  if (typeof window > "u")
    return null;
  try {
    return window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function mg(t, r) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(t, r);
    } catch {
    }
}
function tu(t) {
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
      return Re.buttonLayout;
  }
}
function ru(t) {
  return t === "left" ? "left" : Re.systemButtonPlacement;
}
function nu(t) {
  return t === "mirrored" ? "mirrored" : Re.sideResizeMode;
}
function au(t) {
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
      return Re.themePreset;
  }
}
function ou(t) {
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
      return Re.fontPreset;
  }
}
function iu(t) {
  switch (t) {
    case "none":
    case "pin":
      return t;
    default:
      return Re.shiftDragAction;
  }
}
function su(t) {
  switch (t) {
    case "accent":
    case "accent-strong":
    case "accent-soft":
    case "accent-secondary":
    case "accent-secondary-soft":
      return t;
    default:
      return Re.chromeColorSource;
  }
}
function lu(t) {
  switch (t) {
    case "windows-7":
    case "vista":
    case "kde":
    case "mica":
    case "none":
      return t;
    default:
      return Re.chromeGlossStyle;
  }
}
function du(t) {
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
      return Re.chromeBeamStyle;
  }
}
function cu(t) {
  switch (t) {
    case "light":
    case "dark":
    case "auto":
      return t;
    default:
      return Re.titleTone;
  }
}
function gu(t) {
  switch (t) {
    case "plain":
    case "shadow":
    case "glow":
    case "emboss":
    case "auto":
      return t;
    default:
      return Re.titleEffect;
  }
}
function vu(t) {
  switch (t) {
    case "always":
    case "popout":
    case "hidden":
    case "hover":
      return t;
    default:
      return Re.dockLabelMode;
  }
}
function hu(t) {
  return t === "expanded" ? "expanded" : Re.pageThemeSpread;
}
function Rr(t, r, n, a) {
  const o = Number(t);
  return Number.isFinite(o) ? Math.max(n, Math.min(a, Math.round(o))) : r;
}
function Li(t) {
  const r = (t == null ? void 0 : t.chromeBeamStyle) == null && (t != null && t.chromeTexture) ? (t == null ? void 0 : t.chromeGlossStyle) === "vista" || (t == null ? void 0 : t.chromeGlossStyle) === "windows-7" || (t == null ? void 0 : t.chromeGlossStyle) === "kde" || (t == null ? void 0 : t.chromeGlossStyle) === "mica" ? t.chromeGlossStyle : (t == null ? void 0 : t.themePreset) === "windows-vista" ? "vista" : (t == null ? void 0 : t.themePreset) === "windows-11-mica" ? "mica" : (t == null ? void 0 : t.themePreset) === "windows-9x" ? "windows-9x" : "windows-7" : du(t == null ? void 0 : t.chromeBeamStyle), n = (t == null ? void 0 : t.chromeGlossStyle) == null && (t != null && t.chromeTexture) ? (t == null ? void 0 : t.themePreset) === "windows-vista" ? "vista" : (t == null ? void 0 : t.themePreset) === "windows-11-mica" ? "mica" : "windows-7" : lu(t == null ? void 0 : t.chromeGlossStyle);
  return {
    buttonLayout: tu(t == null ? void 0 : t.buttonLayout),
    systemButtonPlacement: ru(t == null ? void 0 : t.systemButtonPlacement),
    sideResizeMode: nu(t == null ? void 0 : t.sideResizeMode),
    borderWidth: Rr(
      t == null ? void 0 : t.borderWidth,
      Re.borderWidth,
      0,
      12
    ),
    borderRadius: Rr(
      t == null ? void 0 : t.borderRadius,
      Re.borderRadius,
      0,
      32
    ),
    chromePadding: Rr(
      t == null ? void 0 : t.chromePadding,
      Re.chromePadding,
      0,
      20
    ),
    titleBarHeight: Rr(
      t == null ? void 0 : t.titleBarHeight,
      Re.titleBarHeight,
      28,
      72
    ),
    windowScale: Rr(
      t == null ? void 0 : t.windowScale,
      Re.windowScale,
      75,
      140
    ),
    chromeStyle: (t == null ? void 0 : t.chromeStyle) === "glass" || (t == null ? void 0 : t.chromeStyle) === "transparent" || (t == null ? void 0 : t.chromeStyle) === "mica" || (t == null ? void 0 : t.chromeStyle) === "frost" || (t == null ? void 0 : t.chromeStyle) === "pane" ? t.chromeStyle : Re.chromeStyle,
    chromeTexture: r !== "none" || (typeof (t == null ? void 0 : t.chromeTexture) == "boolean" ? t.chromeTexture : Re.chromeTexture),
    chromeBeamStyle: r,
    chromeBeamIntensity: Rr(
      t == null ? void 0 : t.chromeBeamIntensity,
      Re.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: n,
    chromeGlossIntensity: Rr(
      t == null ? void 0 : t.chromeGlossIntensity,
      Re.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: Rr(
      t == null ? void 0 : t.chromeGlossSpacing,
      Re.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize: typeof (t == null ? void 0 : t.chromeColorize) == "boolean" ? t.chromeColorize : Re.chromeColorize,
    chromeColorSource: su(t == null ? void 0 : t.chromeColorSource),
    chromeColorIntensity: Rr(
      t == null ? void 0 : t.chromeColorIntensity,
      Re.chromeColorIntensity,
      0,
      100
    ),
    alignment: (t == null ? void 0 : t.alignment) === "left" || (t == null ? void 0 : t.alignment) === "right" ? t.alignment : Re.alignment,
    titleTone: cu(t == null ? void 0 : t.titleTone),
    titleEffect: gu(t == null ? void 0 : t.titleEffect),
    snapRestoreOnRelease: typeof (t == null ? void 0 : t.snapRestoreOnRelease) == "boolean" ? t.snapRestoreOnRelease : Re.snapRestoreOnRelease,
    shiftDragAction: iu(t == null ? void 0 : t.shiftDragAction),
    themePreset: au(t == null ? void 0 : t.themePreset),
    fontPreset: ou(t == null ? void 0 : t.fontPreset),
    globalEdgeDock: typeof (t == null ? void 0 : t.globalEdgeDock) == "boolean" ? t.globalEdgeDock : Re.globalEdgeDock,
    dockButtonSize: Rr(
      t == null ? void 0 : t.dockButtonSize,
      Re.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: Rr(
      t == null ? void 0 : t.dockButtonWidth,
      Re.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: Rr(
      t == null ? void 0 : t.dockIconScale,
      Re.dockIconScale,
      70,
      160
    ),
    dockGap: Rr(t == null ? void 0 : t.dockGap, Re.dockGap, 4, 24),
    dockOffset: Rr(t == null ? void 0 : t.dockOffset, Re.dockOffset, 8, 36),
    dockLabelMode: vu(t == null ? void 0 : t.dockLabelMode),
    pageThemeSpread: hu(t == null ? void 0 : t.pageThemeSpread)
  };
}
function ks(t, r) {
  return t.buttonLayout === r.buttonLayout && t.systemButtonPlacement === r.systemButtonPlacement && t.sideResizeMode === r.sideResizeMode && t.borderWidth === r.borderWidth && t.borderRadius === r.borderRadius && t.chromePadding === r.chromePadding && t.titleBarHeight === r.titleBarHeight && t.windowScale === r.windowScale && t.chromeStyle === r.chromeStyle && t.chromeTexture === r.chromeTexture && t.chromeBeamStyle === r.chromeBeamStyle && t.chromeBeamIntensity === r.chromeBeamIntensity && t.chromeGlossStyle === r.chromeGlossStyle && t.chromeGlossIntensity === r.chromeGlossIntensity && t.chromeGlossSpacing === r.chromeGlossSpacing && t.chromeColorize === r.chromeColorize && t.chromeColorSource === r.chromeColorSource && t.chromeColorIntensity === r.chromeColorIntensity && t.alignment === r.alignment && t.titleTone === r.titleTone && t.titleEffect === r.titleEffect && t.snapRestoreOnRelease === r.snapRestoreOnRelease && t.shiftDragAction === r.shiftDragAction && t.themePreset === r.themePreset && t.fontPreset === r.fontPreset && t.globalEdgeDock === r.globalEdgeDock && t.dockButtonSize === r.dockButtonSize && t.dockButtonWidth === r.dockButtonWidth && t.dockIconScale === r.dockIconScale && t.dockGap === r.dockGap && t.dockOffset === r.dockOffset && t.dockLabelMode === r.dockLabelMode && t.pageThemeSpread === r.pageThemeSpread;
}
function td(t) {
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
function rd(t) {
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
function $a(t) {
  const r = Po[t] ?? Po.inherit;
  return Co(
    Li({
      ...Re,
      ...r.settings,
      themePreset: r.id
    })
  );
}
function fg(t) {
  return (Po[t] ?? Po.inherit).shadow;
}
function uu(t) {
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
function bg(t) {
  const r = Co(t), n = r.chromeTexture ? Math.max(0, Math.min(1, r.chromeBeamIntensity / 100)) : 0, a = r.chromeTexture ? r.chromeBeamStyle : "none", i = `${(a === "vista" ? 0.98 : a === "windows-7" ? 0.94 : a === "xp-luna" ? 0.82 : a === "windows-9x" ? 0.72 : a === "kde" ? 0.7 : a === "mica" ? 0.62 : 0) * n}`, d = Math.max(0, Math.min(1, r.chromeGlossIntensity / 100)), c = r.chromeColorize ? `${Math.max(0, Math.min(0.88, r.chromeColorIntensity / 100))}` : "0", h = uu(r.chromeColorSource), u = Rr(r.chromeColorIntensity, 48, 0, 100), x = r.chromeColorize ? Math.round(34 + u / 100 * 42) : 0, q = r.chromeColorize ? `color-mix(in srgb, #4580c4 ${100 - x}%, ${h} ${x}%)` : "#4580c4", w = {
    "--efs-window-chrome-texture-opacity": i,
    "--efs-window-chrome-beam-intensity": `${n}`,
    "--efs-window-chrome-gloss-intensity": `${d}`,
    "--efs-window-chrome-gloss-spacing": `${r.chromeGlossSpacing}px`,
    "--efs-window-chrome-colorize-opacity": c,
    "--efs-window-chrome-tint": h,
    "--efs-window-titlebar-height": `${r.titleBarHeight}px`,
    "--efs-window-shell-scale": `${r.windowScale / 100}`,
    "--efs-widget-chrome-texture-opacity": i,
    "--efs-widget-chrome-beam-intensity": `${n}`,
    "--efs-widget-chrome-gloss-intensity": `${d}`,
    "--efs-widget-chrome-gloss-spacing": `${r.chromeGlossSpacing}px`,
    "--efs-widget-chrome-colorize-opacity": c,
    "--efs-widget-theme-tint": h,
    "--efs-widget-titlebar-height": `${r.titleBarHeight}px`,
    "--efs-widget-shell-scale": `${r.windowScale / 100}`,
    "--efs-win7-window-bg": q
  };
  if (!r.chromeColorize)
    return w;
  const P = u, W = Math.round(P / 100 * 34), M = Math.round(P / 100 * 26), _ = Math.round(10 + P / 100 * 46), E = Math.round(6 + P / 100 * 32), z = Math.round(P / 100 * 28), T = Math.round(P / 100 * 22), R = Math.round(12 + P / 100 * 46), D = Math.round(10 + P / 100 * 34), V = Math.round(90 - P / 100 * 16), X = Math.round(92 - P / 100 * 18);
  return w["--efs-window-theme-panel"] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - W}%, ${h} ${W}%)`, w["--efs-window-theme-surface"] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - M}%, ${h} ${M}%)`, w["--efs-window-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - _}%, ${h} ${_}%)`, w["--efs-window-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - E}%, ${h} ${E}%)`, w["--efs-window-theme-shadow"] = `0 0 0 1px color-mix(in srgb, ${h}, transparent ${V}%), var(--efs-window-shell-shadow)`, w["--efs-widget-theme-panel"] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - z}%, ${h} ${z}%)`, w["--efs-widget-theme-surface"] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - T}%, ${h} ${T}%)`, w["--efs-widget-theme-border"] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - R}%, ${h} ${R}%)`, w["--efs-widget-theme-hover"] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - D}%, ${h} ${D}%)`, w["--efs-widget-theme-shadow"] = `0 18px 44px color-mix(in srgb, ${h}, transparent ${X}%), var(--efs-widget-shadow, var(--shell-card-shadow))`, w;
}
function yg() {
  const t = wg(ed);
  if (!t)
    return Ti(Re), { ...Re };
  try {
    const r = JSON.parse(t), n = Co(Li(r));
    return Ti(n), n;
  } catch {
    return Ti(Re), { ...Re };
  }
}
function pu() {
  return [
    {
      id: "profile-balanced",
      label: "Balanced",
      settings: $a("inherit")
    },
    {
      id: "profile-aero",
      label: "Windows 7",
      settings: $a("aero")
    },
    {
      id: "profile-basic",
      label: "Windows 7 Basic",
      settings: $a("windows-basic")
    },
    {
      id: "profile-flat",
      label: "Flat edge",
      settings: $a("windows-10-flat")
    },
    {
      id: "profile-paper",
      label: "Paper",
      settings: $a("paper")
    }
  ];
}
function xg() {
  const t = wg(pg);
  if (!t)
    return [];
  try {
    return JSON.parse(t).filter(
      (n) => typeof (n == null ? void 0 : n.id) == "string" && typeof (n == null ? void 0 : n.label) == "string"
    ).map((n) => ({
      id: n.id,
      label: n.label,
      settings: Co(Li(n.settings)),
      custom: !0
    }));
  } catch {
    return [];
  }
}
function wu(t) {
  mg(pg, JSON.stringify(t));
}
function mu(t) {
  return t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 36);
}
function fu(t) {
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
function sl(t, r) {
  const n = Co(r), a = t.documentElement.style, o = t.documentElement, i = n.chromeGlossStyle, d = n.chromeTexture ? n.chromeBeamStyle : "none", c = Math.max(n.dockButtonSize, n.dockButtonWidth), h = Si[n.fontPreset] ?? Si.system, u = fg(n.themePreset), x = bg(n), q = [
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
  a.setProperty("--efs-font-sans", h.stack), a.setProperty("--shell-font-sans", h.stack), a.setProperty("--efs-window-font-family", h.stack), a.setProperty("--efs-window-border-width", `${n.borderWidth}px`), a.setProperty("--efs-window-radius", `${n.borderRadius}px`), a.setProperty("--efs-window-chrome-padding", `${n.chromePadding}px`), a.setProperty("--efs-window-titlebar-height", `${n.titleBarHeight}px`), a.setProperty("--efs-window-shell-scale", `${n.windowScale / 100}`), a.setProperty("--efs-window-system-button-placement", n.systemButtonPlacement), a.setProperty("--efs-window-side-resize-mode", n.sideResizeMode), a.setProperty("--efs-window-shell-shadow", u), a.setProperty("--efs-widget-border-width", `${n.borderWidth}px`), a.setProperty("--efs-widget-radius", `${n.borderRadius}px`), a.setProperty("--efs-widget-chrome-padding", `${n.chromePadding}px`), a.setProperty("--efs-widget-titlebar-height", `${n.titleBarHeight}px`), a.setProperty("--efs-widget-shell-scale", `${n.windowScale / 100}`), a.setProperty("--efs-widget-shadow", u), a.setProperty("--efs-dock-button-size", `${n.dockButtonSize}px`), a.setProperty("--efs-dock-button-width", `${c}px`), a.setProperty("--efs-dock-gap", `${n.dockGap}px`), a.setProperty("--efs-dock-offset", `${n.dockOffset}px`), a.setProperty(
    "--efs-dock-icon-size",
    `${Math.max(16, Math.round(n.dockButtonSize * 0.39))}px`
  ), a.setProperty("--efs-dock-icon-scale", `${n.dockIconScale / 100}`), a.setProperty(
    "--efs-dock-popout-width",
    `${Math.max(128, Math.round(c + n.dockButtonSize * 1.8))}px`
  ), a.setProperty(
    "--efs-dock-remove-size",
    `${Math.max(14, Math.round(n.dockButtonSize * 0.31))}px`
  ), a.setProperty("--efs-dock-label-mode", n.dockLabelMode), a.setProperty("--efs-dock-global-enabled", n.globalEdgeDock ? "1" : "0"), a.setProperty("--shell-focus-ring", "0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)"), a.setProperty("--efs-page-theme-spread", n.pageThemeSpread), o.setAttribute("data-efs-page-theme", n.pageThemeSpread), o.setAttribute("data-efs-window-gloss", i), o.setAttribute("data-efs-window-beam", d), q.forEach((w) => a.removeProperty(w)), Object.entries(x).forEach(([w, P]) => a.setProperty(w, P));
}
function Ti(t) {
  if (typeof document > "u")
    return;
  if (typeof window > "u") {
    sl(document, t);
    return;
  }
  let r = window;
  try {
    r = window.top ?? window;
  } catch {
    r = window;
  }
  const n = fu(r);
  if (n.length === 0) {
    sl(document, t);
    return;
  }
  n.forEach((a) => {
    try {
      sl(a.document, t);
    } catch {
    }
  });
}
function nd() {
  return Dn;
}
function rc() {
  return [...pu(), ...xg()];
}
function bu(t, r) {
  const n = t.trim();
  if (!n)
    return rc();
  const a = xg(), o = mu(n) || `profile-${Date.now()}`, d = {
    id: a.findIndex((c) => c.id === o) === -1 ? o : `${o}-${Date.now()}`,
    label: n,
    settings: Co(Li(r)),
    custom: !0
  };
  return wu([...a, d]), rc();
}
function ad(t) {
  Dn = Co(
    Li({
      ...Dn,
      ...t
    })
  ), Ti(Dn), mg(ed, JSON.stringify(Dn)), xs.forEach((r) => r(Dn));
}
function oi(t) {
  return xs.add(t), t(Dn), () => {
    xs.delete(t);
  };
}
typeof window < "u" && (window.addEventListener("efsdb-themechange", () => {
  Ti(Dn);
}), window.addEventListener("efsdb-window-settings-sync", (t) => {
  const r = t.detail;
  !r || typeof r != "object" || ad(r);
}), window.addEventListener("storage", (t) => {
  t.key === ed && (Dn = yg(), xs.forEach((r) => r(Dn)));
}));
var yu = /* @__PURE__ */ Z('<span class="widget-state svelte-dsom6b"> </span>'), xu = /* @__PURE__ */ Z('<button type="button"><!></button>'), ku = /* @__PURE__ */ Z('<button type="button"><!></button>'), _u = /* @__PURE__ */ Z('<div class="widget-extra-actions svelte-dsom6b"><!></div>'), qu = /* @__PURE__ */ Z('<header><div class="widget-heading svelte-dsom6b"><span class="widget-eyebrow svelte-dsom6b"> </span> <div class="widget-title-row svelte-dsom6b"><h2> </h2> <!></div></div> <div class="widget-toolbar svelte-dsom6b"><!> <!> <div class="widget-help svelte-dsom6b"><button type="button"><!></button> <div class="widget-help-tooltip svelte-dsom6b" role="tooltip"><strong class="svelte-dsom6b"> </strong> <span class="svelte-dsom6b"> </span></div></div> <!></div></header>'), Su = /* @__PURE__ */ Z("<footer><!></footer>"), Tu = /* @__PURE__ */ Z("<article><!> <div><!></div> <!></article>");
const ju = {
  hash: "svelte-dsom6b",
  code: `.widget-frame.svelte-dsom6b {--widget-panel: var(--efs-widget-theme-panel, var(--efs-window-theme-panel, var(--shell-panel)));--widget-surface: var(
      --efs-widget-theme-surface,
      var(--efs-window-theme-surface, var(--shell-surface, var(--shell-panel)))
    );--widget-border: var(--efs-widget-theme-border, var(--efs-window-theme-border, var(--shell-border)));--widget-hover: var(--efs-widget-theme-hover, var(--efs-window-theme-hover, var(--shell-row-hover)));--widget-shadow: var(--efs-widget-theme-shadow, var(--efs-widget-shadow, var(--shell-card-shadow)));--widget-tint: var(
      --efs-widget-theme-tint,
      var(--efs-window-chrome-tint, var(--shell-primary, var(--accent, #5b8cff)))
    );--widget-chrome-texture-opacity: var(
      --efs-widget-chrome-texture-opacity,
      var(--efs-window-chrome-texture-opacity, 0)
    );--widget-beam-intensity: var(
      --efs-widget-chrome-beam-intensity,
      var(--efs-window-chrome-beam-intensity, 0)
    );--widget-gloss-intensity: var(--efs-widget-chrome-gloss-intensity, 0.68);--widget-gloss-spacing: var(--efs-widget-chrome-gloss-spacing, 18px);--widget-titlebar-height: 44px;--widget-shell-scale: 1;--widget-control-size:
      min(
        calc(2.18rem * var(--widget-shell-scale)),
        max(1.9rem, calc(var(--widget-titlebar-height) - max(0.72rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.85))))
      );--widget-control-radius: max(10px, calc(var(--efs-widget-radius, 26px) * 0.5));--widget-title-size: clamp(0.98rem, calc(1rem * var(--widget-shell-scale)), 1.24rem);--widget-chrome-colorize-opacity: var(
      --efs-widget-chrome-colorize-opacity,
      var(--efs-window-chrome-colorize-opacity, 0)
    );--widget-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;--widget-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;position:relative;isolation:isolate;display:flex;flex-direction:column;height:100%;min-width:0;min-height:100%;border:var(--efs-widget-border-width, 1px) solid
      color-mix(in srgb, var(--widget-border), transparent 6%);border-radius:var(--efs-widget-radius, 26px);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 32%),
      linear-gradient(135deg, color-mix(in srgb, var(--widget-panel), white 6%), transparent 38%),
      var(--widget-panel);box-shadow:var(--widget-shadow);overflow:clip;}.widget-frame.svelte-dsom6b::before {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 88%), transparent 28%),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 94%), transparent 46%);opacity:calc(var(--widget-chrome-colorize-opacity) * 0.72);}.widget-frame.window-mode.svelte-dsom6b {min-height:auto;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible;}.widget-frame.window-mode.svelte-dsom6b::before {display:none;}.widget-header.svelte-dsom6b,
  .widget-body.svelte-dsom6b,
  .widget-footer.svelte-dsom6b {position:relative;z-index:1;padding-inline:max(0.9rem, calc(var(--efs-widget-chrome-padding, 12px) + 0.28rem));}.widget-header.svelte-dsom6b {isolation:isolate;display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;min-height:var(--widget-titlebar-height);padding-top:max(0.42rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.5));padding-bottom:max(0.28rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.44));overflow:hidden;border-bottom:1px solid color-mix(in srgb, var(--widget-border), transparent 18%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--widget-panel), transparent 2%);}.widget-header.svelte-dsom6b::before,
  .widget-header.svelte-dsom6b::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.widget-header.svelte-dsom6b::before {background:linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);opacity:var(--widget-chrome-colorize-opacity);}.widget-header.svelte-dsom6b::after {background:linear-gradient(
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
      );mix-blend-mode:screen;opacity:calc(var(--widget-chrome-texture-opacity) * 0.78);}.widget-frame[data-gloss='none'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after,
  .widget-frame[data-gloss='none'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {opacity:0;}.widget-frame[data-beam='windows-7'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:var(--widget-w7-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--widget-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--widget-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.06 + var(--widget-beam-intensity) * 0.05)) 48%,
        transparent 74%
      ),
      radial-gradient(
        154% 128% at 52% -34%,
        rgba(255, 255, 255, calc(0.56 + var(--widget-beam-intensity) * 0.22)),
        transparent 38%
      ),
      radial-gradient(
        116% 116% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--widget-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--widget-beam-intensity) * 0.16)) 22%,
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.44 + var(--widget-beam-intensity) * 0.98),
      1
    );}.widget-frame[data-beam='vista'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:var(--widget-vista-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--widget-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--widget-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--widget-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        120% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--widget-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.16)) 20%,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 78%), transparent 42%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 1),
      1
    );}.widget-frame[data-beam='xp-luna'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--widget-tint) 12%),
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        146% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--widget-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.14 + var(--widget-beam-intensity) * 0.08)) 22%,
        transparent 48%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 76%), transparent 42%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.62 + var(--widget-beam-intensity) * 0.88),
      1
    );}.widget-frame[data-beam='windows-9x'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.14)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--widget-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 74%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.78),
      1
    );}.widget-frame[data-beam='kde'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--widget-beam-intensity) * 0.1)),
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.05)) 30%,
        transparent 78%
      ),
      radial-gradient(
        142% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 80%), transparent 42%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.52 + var(--widget-beam-intensity) * 0.82),
      1
    );}.widget-frame[data-beam='mica'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::before {background:radial-gradient(
        144% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.06)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.04)),
        transparent 76%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 90%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 42%);opacity:clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.74),
      1
    );}.widget-frame[data-gloss='windows-7'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.28 + var(--widget-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.1)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 56%,
        transparent 86%
      ),
      radial-gradient(134% 120% at 12% -18%, rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.18)), transparent 44%),
      radial-gradient(112% 96% at 100% 0%, rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.1)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.1)) calc(32% + var(--widget-gloss-spacing) * 0.18),
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.03)) calc(58% + var(--widget-gloss-spacing) * 0.08),
        transparent 82%
      );opacity:calc(var(--widget-chrome-texture-opacity) * 1.02);}.widget-frame[data-gloss='vista'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.34 + var(--widget-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.13 + var(--widget-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.05)) 58%,
        transparent 88%
      ),
      radial-gradient(138% 122% at 8% -20%, rgba(255, 255, 255, calc(0.22 + var(--widget-gloss-intensity) * 0.22)), transparent 44%),
      radial-gradient(118% 104% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.12)) calc(30% + var(--widget-gloss-spacing) * 0.2),
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)) calc(58% + var(--widget-gloss-spacing) * 0.1),
        transparent 82%
      );opacity:calc(var(--widget-chrome-texture-opacity) * 1.08);}.widget-frame[data-gloss='kde'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.16)),
        rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.06)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 58%,
        transparent 84%
      ),
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.08)) calc(28% + var(--widget-gloss-spacing) * 0.16),
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),
        transparent 84%
      );opacity:calc(var(--widget-chrome-texture-opacity) * 0.96);}.widget-frame[data-gloss='mica'].svelte-dsom6b .widget-header:where(.svelte-dsom6b)::after {background:radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.06)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 52%, transparent 80%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),
        transparent 86%
      );opacity:calc(var(--widget-chrome-texture-opacity) * 0.92);}.widget-heading.svelte-dsom6b {position:relative;z-index:1;display:flex;flex-direction:column;gap:0.45rem;min-width:0;}.widget-eyebrow.svelte-dsom6b {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.widget-title-row.svelte-dsom6b {display:flex;flex-wrap:wrap;align-items:center;gap:0.6rem;}.widget-title.svelte-dsom6b {margin:0;font:var(--efs-font-title-md);line-height:1.15;color:var(--shell-text);font-size:var(--widget-title-size);text-wrap:balance;}.widget-frame[data-title-tone='light'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {color:rgba(255, 255, 255, 0.97);}.widget-frame[data-title-tone='dark'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {color:rgba(24, 28, 36, 0.92);}.widget-frame[data-title-effect='plain'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:none;}.widget-frame[data-title-effect='shadow'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(0, 0, 0, 0.18), 0 8px 18px rgba(0, 0, 0, 0.12);}.widget-frame[data-title-effect='glow'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.64),
      0 0 18px color-mix(in srgb, var(--widget-tint), transparent 58%);}.widget-frame[data-title-effect='emboss'].svelte-dsom6b .widget-title:where(.svelte-dsom6b) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.78),
      0 -1px 0 rgba(0, 0, 0, 0.28);}.widget-help.svelte-dsom6b {position:relative;display:inline-flex;align-items:center;}.widget-help-button.svelte-dsom6b .app-icon {width:0.95rem;height:0.95rem;}.widget-help-button.svelte-dsom6b:focus-visible {outline:none;box-shadow:var(--shell-focus-ring);}.widget-help-tooltip.svelte-dsom6b {position:absolute;right:0;top:calc(100% + 0.7rem);z-index:6;display:flex;flex-direction:column;gap:0.45rem;width:min(18rem, 70vw);padding:0.9rem 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:16px;background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 88%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:var(--shell-card-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,
      transform 140ms ease;}.widget-help-tooltip.svelte-dsom6b::before {content:'';position:absolute;top:-0.42rem;right:0.95rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-left:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-panel), transparent 2%);transform:rotate(45deg);}.widget-help-tooltip.svelte-dsom6b strong:where(.svelte-dsom6b) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.widget-help-tooltip.svelte-dsom6b span:where(.svelte-dsom6b) {color:color-mix(in srgb, var(--shell-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.widget-help.svelte-dsom6b:hover .widget-help-tooltip:where(.svelte-dsom6b),
  .widget-help.svelte-dsom6b:focus-within .widget-help-tooltip:where(.svelte-dsom6b) {opacity:1;transform:translateY(0);}.widget-state.svelte-dsom6b {display:inline-flex;align-items:center;justify-content:center;min-height:1.55rem;padding:0 0.65rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);background:color-mix(in srgb, var(--shell-row-hover), transparent 12%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.widget-state[data-state='pinned'].svelte-dsom6b {border-color:color-mix(in srgb, var(--widget-tint), transparent 64%);background:color-mix(in srgb, var(--widget-tint), transparent 88%);color:var(--shell-text);}.widget-toolbar.svelte-dsom6b {position:relative;z-index:1;display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:0.45rem;}.widget-extra-actions.svelte-dsom6b {display:inline-flex;flex-wrap:wrap;gap:0.55rem;}.widget-icon-button.svelte-dsom6b {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--widget-control-size);height:var(--widget-control-size);border:1px solid color-mix(in srgb, var(--widget-border), transparent 6%);border-radius:var(--widget-control-radius);background:color-mix(in srgb, var(--widget-surface), transparent 6%);color:var(--shell-muted);cursor:pointer;overflow:hidden;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      box-shadow 160ms ease;}.widget-icon-button.svelte-dsom6b::before,
  .widget-icon-button.svelte-dsom6b::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.widget-icon-button.svelte-dsom6b::before {background:linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 56%);opacity:calc(var(--widget-chrome-colorize-opacity) * 0.7);}.widget-icon-button.svelte-dsom6b::after {background:linear-gradient(
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
      );mix-blend-mode:screen;opacity:calc(var(--widget-chrome-texture-opacity) * 0.44);}.widget-frame[data-gloss='windows-7'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,
  .widget-frame[data-gloss='vista'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,
  .widget-frame[data-gloss='kde'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after,
  .widget-frame[data-gloss='mica'].svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.14)),
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 44%,
        transparent 100%
      ),
      radial-gradient(126% 114% at 18% -22%, rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.06)), transparent 46%),
      linear-gradient(
        128deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.015 + var(--widget-gloss-intensity) * 0.03)) calc(42% + var(--widget-gloss-spacing) * 0.08),
        transparent 86%
      );}.widget-icon-button.svelte-dsom6b .app-icon {position:relative;z-index:1;width:calc(1rem * var(--widget-shell-scale));height:calc(1rem * var(--widget-shell-scale));}.widget-icon-button.svelte-dsom6b:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--widget-tint), transparent 44%);background:color-mix(in srgb, var(--widget-hover), var(--widget-tint) 18%);color:var(--shell-text);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.04);}.widget-icon-button.is-active.svelte-dsom6b {border-color:color-mix(in srgb, var(--widget-tint), transparent 54%);background:color-mix(in srgb, var(--widget-tint), transparent 84%);color:var(--shell-text);}.widget-body.svelte-dsom6b {display:flex;flex:1;flex-direction:column;gap:1rem;min-height:0;overflow:auto;overflow-x:hidden;padding-top:1rem;padding-bottom:1.15rem;background:color-mix(in srgb, var(--widget-surface), transparent 4%);scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--shell-primary), transparent 42%) transparent;}.widget-frame.window-mode.svelte-dsom6b .widget-body:where(.svelte-dsom6b) {padding-inline:0;padding-top:0;padding-bottom:0;background:transparent;}.widget-body.svelte-dsom6b * {min-width:0;}.widget-body.svelte-dsom6b input,
  .widget-body.svelte-dsom6b select,
  .widget-body.svelte-dsom6b textarea,
  .widget-body.svelte-dsom6b button,
  .widget-body.svelte-dsom6b table {max-width:100%;}.widget-body.svelte-dsom6b table {width:100%;table-layout:fixed;}.widget-body.svelte-dsom6b td,
  .widget-body.svelte-dsom6b th,
  .widget-body.svelte-dsom6b p,
  .widget-body.svelte-dsom6b code,
  .widget-body.svelte-dsom6b span {overflow-wrap:anywhere;}.widget-body.svelte-dsom6b::-webkit-scrollbar {width:0.8rem;height:0.8rem;}.widget-body.svelte-dsom6b::-webkit-scrollbar-track {background:transparent;}.widget-body.svelte-dsom6b::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 46%);background-clip:padding-box;}.widget-footer.svelte-dsom6b {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding-top:1rem;padding-bottom:1.1rem;border-top:1px solid color-mix(in srgb, var(--widget-border), transparent 18%);background:color-mix(in srgb, var(--widget-panel), transparent 4%);}.widget-frame.window-mode.svelte-dsom6b .widget-footer:where(.svelte-dsom6b) {padding-inline:0;padding-bottom:0;background:transparent;border-top-color:color-mix(in srgb, var(--widget-border), transparent 26%);}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::before,
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::after {display:none;}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-heading:where(.svelte-dsom6b),
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-title-row:where(.svelte-dsom6b) {gap:0;}.widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-eyebrow:where(.svelte-dsom6b),
  .widget-frame.win7-theme.svelte-dsom6b:not(.window-mode) .widget-state:where(.svelte-dsom6b) {display:none;}.widget-frame.basic7-theme.svelte-dsom6b {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );font-family:var(--w7-font);color:var(--w7-el-c);}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) {border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;overflow:visible;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode)::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;opacity:1;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode)::after {content:none;display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header.title-bar:where(.svelte-dsom6b) {min-height:0;align-items:flex-start;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::before,
  .widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-header:where(.svelte-dsom6b)::after {display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-heading:where(.svelte-dsom6b) {gap:0;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-eyebrow:where(.svelte-dsom6b),
  .widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-state:where(.svelte-dsom6b) {display:none;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-title-row:where(.svelte-dsom6b) {gap:0;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-title.title-bar-text:where(.svelte-dsom6b) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-size:9pt;font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);text-wrap:nowrap;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-toolbar:where(.svelte-dsom6b) {gap:0.35rem;padding-top:calc(var(--w7-w-space) - 1px);}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b) {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;color:var(--w7-el-c);transform:none;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::before,
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b)::after {inset:0;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):hover,
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):active,
  .widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button.is-active:where(.svelte-dsom6b) {color:var(--w7-el-c);transform:none;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b):focus-visible {outline-offset:-4px;}.widget-frame.basic7-theme.svelte-dsom6b .widget-icon-button:where(.svelte-dsom6b) .app-icon {width:0.78rem;height:0.78rem;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-body.window-body:where(.svelte-dsom6b) {margin:var(--w7-w-space);margin-top:0;padding:var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-footer.window-footer:where(.svelte-dsom6b) {margin:var(--w7-w-space);margin-top:calc(-1 * var(--w7-w-space) - 1px);padding:10px;border:1px solid var(--w7-w-bd);border-top:0;background:var(--w7-surface);box-shadow:var(--efs-win7-footer-shadow, 0 0.5px 1px 0.5px #fff);position:relative;}.widget-frame.basic7-theme.svelte-dsom6b:not(.window-mode) .widget-footer.window-footer:where(.svelte-dsom6b)::before {content:'';position:absolute;inset:0 auto auto 0;width:100%;height:2px;box-shadow:inset 0 1px #0000004d, inset 0 -1px #fff;}:host(:not([theme='light'])) .widget-frame.basic7-theme.svelte-dsom6b {--efs-win7-surface: #1c2229;--efs-win7-text: #e7edf8;--efs-win7-text-muted: #8591a2;--efs-win7-window-border: rgba(8, 12, 18, 0.82);--efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);--efs-win7-footer-shadow: 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.12);--efs-win7-scrollbar: #5f7ea2;}

  @media (max-width: 47.99rem) {.widget-header.svelte-dsom6b {flex-direction:column;}.widget-toolbar.svelte-dsom6b {justify-content:flex-start;}
  }`
};
function nn(t, r) {
  $t(r, !0), It(t, ju);
  let n = y(r, "eyebrow", 7), a = y(r, "title", 7), o = y(r, "description", 7), i = y(r, "mode", 7, "card"), d = y(r, "dataTestid", 7), c = y(r, "open", 7, !1), h = y(r, "pinned", 7, !1), u = y(r, "allowPopout", 7, !0), x = y(r, "onOpen", 7), q = y(r, "onTogglePin", 7), w = y(r, "actions", 7), P = y(r, "children", 7), W = y(r, "footer", 7), M = /* @__PURE__ */ me(ht({ ...Re })), _ = /* @__PURE__ */ k(() => e(M).themePreset), E = /* @__PURE__ */ k(() => Math.max(28, e(M).titleBarHeight ?? Re.titleBarHeight)), z = /* @__PURE__ */ k(() => Math.max(0.75, (e(M).windowScale ?? Re.windowScale) / 100)), T = /* @__PURE__ */ k(() => e(M).chromeTexture ? e(M).chromeBeamStyle : "none"), R = /* @__PURE__ */ k(() => e(M).chromeGlossStyle), D = /* @__PURE__ */ k(() => td({
    themePreset: e(_),
    titleTone: e(M).titleTone
  })), V = /* @__PURE__ */ k(() => rd({
    themePreset: e(_),
    titleEffect: e(M).titleEffect
  })), X = /* @__PURE__ */ k(() => e(_) === "aero"), O = /* @__PURE__ */ k(() => e(_) === "windows-basic"), m = /* @__PURE__ */ k(() => e(X) || e(O));
  Wo(() => {
    const F = oi((ve) => {
      $(M, { ...ve }, !0);
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
      n(F), b();
    },
    get title() {
      return a();
    },
    set title(F) {
      a(F), b();
    },
    get description() {
      return o();
    },
    set description(F) {
      o(F), b();
    },
    get mode() {
      return i();
    },
    set mode(F = "card") {
      i(F), b();
    },
    get dataTestid() {
      return d();
    },
    set dataTestid(F) {
      d(F), b();
    },
    get open() {
      return c();
    },
    set open(F = !1) {
      c(F), b();
    },
    get pinned() {
      return h();
    },
    set pinned(F = !1) {
      h(F), b();
    },
    get allowPopout() {
      return u();
    },
    set allowPopout(F = !0) {
      u(F), b();
    },
    get onOpen() {
      return x();
    },
    set onOpen(F) {
      x(F), b();
    },
    get onTogglePin() {
      return q();
    },
    set onTogglePin(F) {
      q(F), b();
    },
    get actions() {
      return w();
    },
    set actions(F) {
      w(F), b();
    },
    get children() {
      return P();
    },
    set children(F) {
      P(F), b();
    },
    get footer() {
      return W();
    },
    set footer(F) {
      W(F), b();
    }
  }, J = Tu();
  let ee, se;
  var de = l(J);
  {
    var je = (F) => {
      var ve = qu();
      let qe;
      var Te = l(ve), Ge = l(Te), be = l(Ge, !0);
      s(Ge);
      var ke = g(Ge, 2), Qe = l(ke);
      let mt;
      var Tt = l(Qe, !0);
      s(Qe);
      var _t = g(Qe, 2);
      {
        var Lt = (f) => {
          var pe = yu(), Me = l(pe, !0);
          s(pe), we(() => {
            j(pe, "data-state", h() ? "pinned" : "open"), oe(Me, h() ? "Pinned" : "Open");
          }), G(f, pe);
        };
        ge(_t, (f) => {
          c() && f(Lt);
        });
      }
      s(ke), s(Te);
      var yt = g(Te, 2), ut = l(yt);
      {
        var dt = (f) => {
          var pe = xu();
          let Me;
          var K = l(pe);
          tt(K, { name: "popout" }), s(pe), we(() => {
            Me = le(pe, 1, "widget-icon-button svelte-dsom6b", null, Me, { "efs-win7-tool-button": e(m) }), j(pe, "aria-label", c() ? "Focus widget window" : "Pop out widget"), j(pe, "title", c() ? "Focus widget window" : "Pop out widget");
          }), ae("click", pe, function(...nt) {
            var Le;
            (Le = x()) == null || Le.apply(this, nt);
          }), G(f, pe);
        };
        ge(ut, (f) => {
          u() && x() && f(dt);
        });
      }
      var st = g(ut, 2);
      {
        var pt = (f) => {
          var pe = ku();
          let Me;
          var K = l(pe);
          tt(K, { name: "pin" }), s(pe), we(() => {
            Me = le(pe, 1, "widget-icon-button svelte-dsom6b", null, Me, {
              "efs-win7-tool-button": e(m),
              "is-active": h(),
              active: h()
            }), j(pe, "aria-label", h() ? "Unpin widget" : "Pin widget"), j(pe, "aria-pressed", h()), j(pe, "title", h() ? "Unpin widget" : "Pin widget");
          }), ae("click", pe, function(...nt) {
            var Le;
            (Le = q()) == null || Le.apply(this, nt);
          }), G(f, pe);
        };
        ge(st, (f) => {
          q() && f(pt);
        });
      }
      var ue = g(st, 2), Pe = l(ue);
      let Xe;
      var N = l(Pe);
      tt(N, { name: "help" }), s(Pe);
      var I = g(Pe, 2), ze = l(I), L = l(ze, !0);
      s(ze);
      var ce = g(ze, 2), De = l(ce, !0);
      s(ce), s(I), s(ue);
      var Ce = g(ue, 2);
      {
        var Be = (f) => {
          var pe = _u(), Me = l(pe);
          La(Me, w), s(pe), G(f, pe);
        };
        ge(Ce, (f) => {
          w() && f(Be);
        });
      }
      s(yt), s(ve), we(() => {
        qe = le(ve, 1, "widget-header svelte-dsom6b", null, qe, { "title-bar": e(m) }), oe(be, n()), mt = le(Qe, 1, "widget-title svelte-dsom6b", null, mt, { "title-bar-text": e(m) }), oe(Tt, a()), Xe = le(Pe, 1, "widget-icon-button widget-help-button svelte-dsom6b", null, Xe, { "efs-win7-tool-button": e(m) }), j(Pe, "aria-label", `About ${a()}`), j(Pe, "title", `About ${a()}`), oe(L, a()), oe(De, o());
      }), G(F, ve);
    };
    ge(de, (F) => {
      i() !== "window" && F(je);
    });
  }
  var _e = g(de, 2);
  let re;
  var fe = l(_e);
  La(fe, () => P() ?? zo), s(_e);
  var xe = g(_e, 2);
  {
    var B = (F) => {
      var ve = Su();
      let qe;
      var Te = l(ve);
      La(Te, W), s(ve), we(() => qe = le(ve, 1, "widget-footer svelte-dsom6b", null, qe, { "window-footer": e(m) })), G(F, ve);
    };
    ge(xe, (F) => {
      W() && F(B);
    });
  }
  return s(J), we(() => {
    ee = le(J, 1, "widget-frame svelte-dsom6b", null, ee, {
      "window-mode": i() === "window",
      win7: e(m),
      "win7-theme": e(X),
      "basic7-theme": e(O),
      window: e(m),
      active: e(m),
      glass: e(X)
    }), j(J, "data-testid", d()), j(J, "data-theme", e(_)), j(J, "data-beam", e(X) ? void 0 : e(T)), j(J, "data-gloss", e(X) ? void 0 : e(R)), j(J, "data-title-tone", e(X) ? void 0 : e(D)), j(J, "data-title-effect", e(X) ? void 0 : e(V)), se = Pr(J, "", se, {
      "--widget-titlebar-height": `${e(E)}px`,
      "--widget-shell-scale": `${e(z)}`
    }), re = le(_e, 1, "widget-body svelte-dsom6b", null, re, { "window-body": e(m) });
  }), G(t, J), At(he);
}
rn(["click"]);
Dt(
  nn,
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
var Pu = /* @__PURE__ */ Z('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon svelte-wqeobd"></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button type="button"><!></button> <button type="button"><!></button> <button type="button" title="Open widget"><!></button></div></article>'), zu = /* @__PURE__ */ Z('<div class="empty-state svelte-wqeobd">No custom buttons yet. Build one below and it will show up here.</div>'), Mu = /* @__PURE__ */ Z('<article role="listitem"><button class="button-row-main svelte-wqeobd" type="button"><span class="button-row-icon button-row-icon-app svelte-wqeobd"><!></span> <span class="button-row-copy svelte-wqeobd"><strong class="svelte-wqeobd"> </strong> <span class="svelte-wqeobd"> </span></span></button> <div class="button-row-meta svelte-wqeobd" aria-hidden="true"><span class="row-chip svelte-wqeobd">Macro</span> <span class="row-chip svelte-wqeobd"> </span> <span class="row-chip svelte-wqeobd"> </span></div> <div class="button-row-actions svelte-wqeobd"><button class="row-action svelte-wqeobd" type="button" title="Run now"><!></button> <button class="row-action destructive svelte-wqeobd" type="button" title="Delete custom button"><!></button></div></article>'), Wu = /* @__PURE__ */ Z("<option> </option>"), Cu = /* @__PURE__ */ Z('<div><button type="button"><span class="step-icon svelte-wqeobd"></span> <span class="svelte-wqeobd"> </span></button> <button type="button" title="Pin when opened"><!></button></div>'), $u = /* @__PURE__ */ Z('<div class="manager-summary svelte-wqeobd"><span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span> <span class="svelte-wqeobd"> </span></div> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Workspace widgets</strong> <span class="svelte-wqeobd">Accent rows are loaded. Matte rows stay available until you add them.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Workspace widgets"></div></section> <section class="manager-section svelte-wqeobd"><div class="section-heading svelte-wqeobd"><strong class="svelte-wqeobd">Custom buttons</strong> <span class="svelte-wqeobd">Chain widgets together for repeat admin flows and keep the button on the toolbar if you use it often.</span></div> <div class="button-list svelte-wqeobd" role="list" aria-label="Custom toolbar actions"><!> <!></div> <form class="builder svelte-wqeobd"><div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Button label</span> <input type="text" maxlength="28" placeholder="Search stack" class="svelte-wqeobd"/></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Toolbar text</span> <input type="text" maxlength="18" placeholder="Stack" class="svelte-wqeobd"/></label></div> <div class="builder-grid svelte-wqeobd"><label class="field svelte-wqeobd"><span class="svelte-wqeobd">Icon</span> <select class="svelte-wqeobd"></select></label> <label class="field svelte-wqeobd"><span class="svelte-wqeobd">Summary</span> <input type="text" maxlength="96" placeholder="Open a focused set of admin widgets together." class="svelte-wqeobd"/></label></div> <div class="field svelte-wqeobd"><span class="svelte-wqeobd">Steps</span> <div class="step-list svelte-wqeobd" role="group" aria-label="Custom button steps"></div></div> <div class="builder-actions svelte-wqeobd"><button class="create-button svelte-wqeobd" type="submit"><!> Add custom button</button></div></form></section>', 1);
const Au = {
  hash: "svelte-wqeobd",
  code: `.manager-summary.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.manager-summary.svelte-wqeobd span:where(.svelte-wqeobd),
  .row-chip.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;min-height:1.8rem;padding:0 0.72rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.manager-section.svelte-wqeobd {display:flex;flex-direction:column;gap:0.8rem;}.section-heading.svelte-wqeobd {display:flex;flex-direction:column;gap:0.22rem;}.section-heading.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.section-heading.svelte-wqeobd span:where(.svelte-wqeobd),
  .empty-state.svelte-wqeobd {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.button-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.6rem;}.button-row.svelte-wqeobd {display:grid;gap:0.55rem;padding:0.72rem 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);transition:border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;}.button-row.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 88%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 78%);}.button-row.is-muted.svelte-wqeobd {opacity:0.82;}.button-row-main.svelte-wqeobd {display:grid;grid-template-columns:auto minmax(0, 1fr);gap:0.72rem;width:100%;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;text-align:left;}.button-row-icon.svelte-wqeobd {display:inline-flex;width:2.15rem;height:2.15rem;align-items:center;justify-content:center;border-radius:14px;background:color-mix(in srgb, var(--shell-panel), transparent 4%);color:var(--shell-text);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 18%);flex:none;}.button-row-icon.svelte-wqeobd::before {content:'';width:1rem;height:1rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;}.button-row-icon-app.svelte-wqeobd::before {content:none;}.button-row-icon.svelte-wqeobd .app-icon {width:1rem;height:1rem;}.button-row-copy.svelte-wqeobd {display:flex;flex-direction:column;gap:0.16rem;min-width:0;}.button-row-copy.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.button-row-copy.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;overflow-wrap:anywhere;}.button-row-meta.svelte-wqeobd,
  .button-row-actions.svelte-wqeobd {display:flex;flex-wrap:wrap;gap:0.45rem;}.row-action.svelte-wqeobd,
  .pin-toggle.svelte-wqeobd {display:inline-flex;align-items:center;justify-content:center;width:2.1rem;height:2.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;}.row-action.svelte-wqeobd:hover,
  .pin-toggle.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 46%);color:var(--shell-text);}.row-action.is-active.svelte-wqeobd,
  .pin-toggle.is-active.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.row-action.destructive.svelte-wqeobd:hover {border-color:color-mix(in srgb, #ef4444, transparent 28%);background:color-mix(in srgb, #ef4444, transparent 90%);color:#fca5a5;}.row-action.svelte-wqeobd .app-icon,
  .pin-toggle.svelte-wqeobd .app-icon {width:0.92rem;height:0.92rem;}.builder.svelte-wqeobd {display:flex;flex-direction:column;gap:0.75rem;padding-top:0.4rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 18%);}.builder-grid.svelte-wqeobd {display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:0.65rem;}.field.svelte-wqeobd {display:flex;flex-direction:column;gap:0.38rem;min-width:0;}.field.svelte-wqeobd span:where(.svelte-wqeobd) {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.field.svelte-wqeobd input:where(.svelte-wqeobd),
  .field.svelte-wqeobd select:where(.svelte-wqeobd) {width:100%;min-width:0;padding:0.72rem 0.82rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:14px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-text);font:var(--efs-font-body-sm);}.step-list.svelte-wqeobd {display:flex;flex-direction:column;gap:0.45rem;}.step-row.svelte-wqeobd {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.5rem;align-items:center;}.step-toggle.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.6rem;min-height:2.4rem;padding:0 0.8rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:16px;background:color-mix(in srgb, var(--shell-surface), transparent 4%);color:var(--shell-muted);cursor:pointer;transition:border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;}.step-toggle.is-selected.svelte-wqeobd {border-color:color-mix(in srgb, var(--shell-primary), transparent 52%);background:color-mix(in srgb, var(--shell-primary), transparent 88%);color:var(--shell-text);}.step-icon.svelte-wqeobd {display:inline-flex;width:0.95rem;height:0.95rem;background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;flex:none;}.builder-actions.svelte-wqeobd {display:flex;justify-content:flex-end;}.create-button.svelte-wqeobd {display:inline-flex;align-items:center;gap:0.55rem;min-height:2.55rem;padding:0 1rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:999px;background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);cursor:pointer;font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      opacity 160ms ease;}.create-button.svelte-wqeobd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 38%);}.create-button.svelte-wqeobd:disabled,
  .pin-toggle.svelte-wqeobd:disabled {opacity:0.42;cursor:not-allowed;}.create-button.svelte-wqeobd .app-icon {width:0.95rem;height:0.95rem;}.widget-frame.win7-theme .manager-summary.svelte-wqeobd span:where(.svelte-wqeobd),
  .widget-frame.win7-theme .row-chip.svelte-wqeobd {min-height:22px;padding:0 8px;border-color:color-mix(in srgb, var(--w7-el-bd), transparent 14%);border-radius:var(--w7-el-bdr);background:linear-gradient(
      180deg,
      color-mix(in srgb, var(--w7-surface), white 20%),
      color-mix(in srgb, var(--w7-surface), transparent 4%)
    );box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 18%);color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .section-heading.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--w7-el-c);font:var(--w7-font);font-weight:600;letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .section-heading.svelte-wqeobd span:where(.svelte-wqeobd),
  .widget-frame.win7-theme .empty-state.svelte-wqeobd,
  .widget-frame.win7-theme .field.svelte-wqeobd span:where(.svelte-wqeobd) {color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);letter-spacing:0;text-transform:none;}.widget-frame.win7-theme .button-row.svelte-wqeobd {gap:0.45rem;padding:6px;border-color:color-mix(in srgb, var(--w7-w-bd), transparent 14%);border-radius:var(--w7-el-bdr);background:linear-gradient(
      180deg,
      color-mix(in srgb, var(--w7-surface), white 14%),
      var(--w7-surface)
    );box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 16%);}.widget-frame.win7-theme .button-row.is-selected.svelte-wqeobd {border-color:var(--w7-li-bd-hl);background:var(--w7-li-bg-hl);box-shadow:inset 0 0 0 1px color-mix(in srgb, white, transparent 12%);}.widget-frame.win7-theme .button-row.is-muted.svelte-wqeobd {opacity:0.92;}.widget-frame.win7-theme .button-row-main.svelte-wqeobd {align-items:center;gap:0.65rem;}.widget-frame.win7-theme .button-row-icon.svelte-wqeobd {width:23px;height:23px;border-color:var(--w7-el-bd);border-radius:var(--w7-el-bdr);background:var(--w7-el-grad);color:var(--w7-el-c);box-shadow:var(--w7-el-sd);}.widget-frame.win7-theme .button-row-copy.svelte-wqeobd strong:where(.svelte-wqeobd) {color:var(--w7-el-c);font:var(--w7-font);font-weight:600;}.widget-frame.win7-theme .button-row-copy.svelte-wqeobd span:where(.svelte-wqeobd) {color:color-mix(in srgb, var(--w7-el-c), transparent 30%);font:var(--w7-font);}.widget-frame.win7-theme .row-action.svelte-wqeobd,
  .widget-frame.win7-theme .pin-toggle.svelte-wqeobd {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;transform:none;}.widget-frame.win7-theme .row-action.svelte-wqeobd:hover,
  .widget-frame.win7-theme .pin-toggle.svelte-wqeobd:hover:not(:disabled),
  .widget-frame.win7-theme .row-action.is-active.svelte-wqeobd,
  .widget-frame.win7-theme .pin-toggle.is-active.svelte-wqeobd {transform:none;color:var(--w7-el-c);}.widget-frame.win7-theme .row-action.destructive.svelte-wqeobd {color:color-mix(in srgb, #7d0d01, var(--w7-el-c) 22%);}.widget-frame.win7-theme .builder.svelte-wqeobd {padding-top:6px;border-top-color:color-mix(in srgb, var(--w7-w-bd), transparent 18%);}.widget-frame.win7-theme .field.svelte-wqeobd input:where(.svelte-wqeobd),
  .widget-frame.win7-theme .field.svelte-wqeobd select:where(.svelte-wqeobd),
  .widget-frame.win7-theme .step-toggle.svelte-wqeobd,
  .widget-frame.win7-theme .create-button.svelte-wqeobd {font:var(--w7-font);}.widget-frame.win7-theme .step-toggle.svelte-wqeobd,
  .widget-frame.win7-theme .create-button.svelte-wqeobd {min-height:23px;letter-spacing:0;text-transform:none;transform:none;}.widget-frame.win7-theme .step-toggle.svelte-wqeobd {gap:0.45rem;}.widget-frame.win7-theme .create-button.svelte-wqeobd:hover:not(:disabled) {transform:none;}

  @media (max-width: 47.99rem) {.builder-grid.svelte-wqeobd {grid-template-columns:1fr;}
  }`
};
function kg(t, r) {
  $t(r, !0), It(t, Au);
  let n = y(r, "items", 7), a = y(r, "actionIconOptions", 7), o = y(r, "mode", 7, "card"), i = y(r, "onToggleToolbar", 7), d = y(r, "onToggleWorkspace", 7), c = y(r, "onToggleEdgePin", 7), h = y(r, "onOpenWidget", 7), u = y(r, "onToggleToolbarAction", 7), x = y(r, "onRunAction", 7), q = y(r, "onDeleteAction", 7), w = y(r, "onCreateAction", 7), P = /* @__PURE__ */ k(() => n().filter((O) => O.kind === "widget")), W = /* @__PURE__ */ k(() => n().filter((O) => O.kind === "action")), M = /* @__PURE__ */ k(() => n().filter((O) => O.inToolbar).length), _ = /* @__PURE__ */ k(() => e(P).filter((O) => O.inWorkspace).length), E = /* @__PURE__ */ k(() => {
    var O;
    return ((O = a()[0]) == null ? void 0 : O.value) ?? "buttons-manager";
  }), z = /* @__PURE__ */ me(ht({
    label: "",
    barLabel: "",
    summary: "",
    iconName: "buttons-manager",
    steps: []
  }));
  function T(O) {
    return e(z).steps.some((m) => m.widgetId === O);
  }
  function R(O) {
    if (T(O)) {
      e(z).steps = e(z).steps.filter((m) => m.widgetId !== O);
      return;
    }
    e(z).steps = [...e(z).steps, { widgetId: O, pinned: !1 }];
  }
  function D(O) {
    e(z).steps = e(z).steps.map((m) => m.widgetId === O ? { ...m, pinned: !m.pinned } : m);
  }
  function V() {
    const O = e(z).label.trim();
    !O || e(z).steps.length === 0 || (w()({
      label: O,
      barLabel: e(z).barLabel.trim(),
      summary: e(z).summary.trim(),
      iconName: e(z).iconName,
      steps: e(z).steps
    }), $(
      z,
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
  vn(() => {
    a().some((O) => O.value === e(z).iconName) || (e(z).iconName = e(E));
  });
  var X = {
    get items() {
      return n();
    },
    set items(O) {
      n(O), b();
    },
    get actionIconOptions() {
      return a();
    },
    set actionIconOptions(O) {
      a(O), b();
    },
    get mode() {
      return o();
    },
    set mode(O = "card") {
      o(O), b();
    },
    get onToggleToolbar() {
      return i();
    },
    set onToggleToolbar(O) {
      i(O), b();
    },
    get onToggleWorkspace() {
      return d();
    },
    set onToggleWorkspace(O) {
      d(O), b();
    },
    get onToggleEdgePin() {
      return c();
    },
    set onToggleEdgePin(O) {
      c(O), b();
    },
    get onOpenWidget() {
      return h();
    },
    set onOpenWidget(O) {
      h(O), b();
    },
    get onToggleToolbarAction() {
      return u();
    },
    set onToggleToolbarAction(O) {
      u(O), b();
    },
    get onRunAction() {
      return x();
    },
    set onRunAction(O) {
      x(O), b();
    },
    get onDeleteAction() {
      return q();
    },
    set onDeleteAction(O) {
      q(O), b();
    },
    get onCreateAction() {
      return w();
    },
    set onCreateAction(O) {
      w(O), b();
    }
  };
  return nn(t, {
    eyebrow: "Workspace tools",
    title: "Buttons & widgets",
    description: "Add or remove toolbar buttons, hide widgets from the canvas, pin shortcuts to the browser edge, and build custom button chains.",
    get mode() {
      return o();
    },
    allowPopout: !1,
    children: (O, m) => {
      var he = $u(), J = Xt(he), ee = l(J), se = l(ee);
      s(ee);
      var de = g(ee, 2), je = l(de);
      s(de);
      var _e = g(de, 2), re = l(_e);
      s(_e), s(J);
      var fe = g(J, 2), xe = g(l(fe), 2);
      Ot(xe, 21, () => e(P), (N) => N.id, (N, I) => {
        var ze = Pu();
        let L;
        var ce = l(ze), De = l(ce);
        let Ce;
        var Be = g(De, 2), f = l(Be), pe = l(f, !0);
        s(f);
        var Me = g(f, 2), K = l(Me, !0);
        s(Me), s(Be), s(ce);
        var nt = g(ce, 2), Le = l(nt), xt = l(Le, !0);
        s(Le);
        var Ie = g(Le, 2), Ke = l(Ie, !0);
        s(Ie);
        var at = g(Ie, 2), jt = l(at, !0);
        s(at), s(nt);
        var lr = g(nt, 2), Je = l(lr);
        let Pt;
        var Wt = l(Je);
        tt(Wt, { name: "restore" }), s(Je);
        var qt = g(Je, 2);
        let wr;
        var Sr = l(qt);
        tt(Sr, { name: "edge" }), s(qt);
        var Jt = g(qt, 2);
        let Tr;
        var Wr = l(Jt);
        tt(Wr, { name: "open" }), s(Jt), s(lr), s(ze), we(() => {
          L = le(ze, 1, "button-row svelte-wqeobd", null, L, {
            "is-selected": e(I).inToolbar,
            "is-muted": !e(I).inToolbar && !e(I).inWorkspace && !e(I).edgePinned
          }), j(ce, "aria-pressed", e(I).inToolbar), j(ce, "aria-label", e(I).inToolbar ? `Remove ${e(I).label} from the toolbar` : `Add ${e(I).label} to the toolbar`), Ce = Pr(De, "", Ce, { "--icon-mask": e(I).iconMask }), oe(pe, e(I).label), oe(K, e(I).summary), oe(xt, e(I).group), oe(Ke, e(I).presentation === "label" ? e(I).barLabel : "Icon button"), oe(jt, e(I).inWorkspace ? "Canvas" : "Hidden"), Pt = le(Je, 1, "row-action svelte-wqeobd", null, Pt, {
            "is-active": e(I).inWorkspace,
            active: e(I).inWorkspace
          }), j(Je, "aria-pressed", e(I).inWorkspace), j(Je, "aria-label", e(I).inWorkspace ? `Remove ${e(I).label} from the workspace canvas` : `Add ${e(I).label} back to the workspace canvas`), j(Je, "title", e(I).inWorkspace ? "Remove from canvas" : "Add to canvas"), wr = le(qt, 1, "row-action svelte-wqeobd", null, wr, {
            "is-active": e(I).edgePinned,
            active: e(I).edgePinned
          }), j(qt, "aria-pressed", e(I).edgePinned), j(qt, "aria-label", e(I).edgePinned ? `Remove ${e(I).label} from the browser edge` : `Pin ${e(I).label} to the browser edge`), j(qt, "title", e(I).edgePinned ? "Unpin edge shortcut" : "Pin to edge"), Tr = le(Jt, 1, "row-action svelte-wqeobd", null, Tr, { "is-active": e(I).open }), j(Jt, "aria-label", `Open ${e(I).label}`);
        }), ae("click", ce, () => i()(e(I).id)), ae("click", Je, () => d()(e(I).id)), ae("click", qt, () => c()(e(I).id)), ae("click", Jt, () => h()(e(I).id)), G(N, ze);
      }), s(xe), s(fe);
      var B = g(fe, 2), F = g(l(B), 2), ve = l(F);
      {
        var qe = (N) => {
          var I = zu();
          G(N, I);
        };
        ge(ve, (N) => {
          e(W).length === 0 && N(qe);
        });
      }
      var Te = g(ve, 2);
      Ot(Te, 17, () => e(W), (N) => N.id, (N, I) => {
        var ze = Mu();
        let L;
        var ce = l(ze), De = l(ce), Ce = l(De);
        tt(Ce, {
          get name() {
            return e(I).iconName;
          }
        }), s(De);
        var Be = g(De, 2), f = l(Be), pe = l(f, !0);
        s(f);
        var Me = g(f, 2), K = l(Me, !0);
        s(Me), s(Be), s(ce);
        var nt = g(ce, 2), Le = g(l(nt), 2), xt = l(Le);
        s(Le);
        var Ie = g(Le, 2), Ke = l(Ie, !0);
        s(Ie), s(nt);
        var at = g(nt, 2), jt = l(at), lr = l(jt);
        tt(lr, { name: "open" }), s(jt);
        var Je = g(jt, 2), Pt = l(Je);
        tt(Pt, { name: "close" }), s(Je), s(at), s(ze), we(() => {
          L = le(ze, 1, "button-row svelte-wqeobd", null, L, { "is-selected": e(I).inToolbar }), j(ce, "aria-pressed", e(I).inToolbar), j(ce, "aria-label", e(I).inToolbar ? `Remove ${e(I).label} from the toolbar` : `Add ${e(I).label} to the toolbar`), oe(pe, e(I).label), oe(K, e(I).summary), oe(xt, `${e(I).stepCount ?? ""} step${e(I).stepCount === 1 ? "" : "s"}`), oe(Ke, e(I).barLabel), j(jt, "aria-label", `Run ${e(I).label}`), j(Je, "aria-label", `Delete ${e(I).label}`);
        }), ae("click", ce, () => u()(e(I).id)), ae("click", jt, () => x()(e(I).id)), ae("click", Je, () => q()(e(I).id)), G(N, ze);
      }), s(F);
      var Ge = g(F, 2), be = l(Ge), ke = l(be), Qe = g(l(ke), 2);
      bt(Qe), s(ke);
      var mt = g(ke, 2), Tt = g(l(mt), 2);
      bt(Tt), s(mt), s(be);
      var _t = g(be, 2), Lt = l(_t), yt = g(l(Lt), 2);
      Ot(yt, 21, a, (N) => N.value, (N, I) => {
        var ze = Wu(), L = l(ze, !0);
        s(ze);
        var ce = {};
        we(() => {
          oe(L, e(I).label), ce !== (ce = e(I).value) && (ze.value = (ze.__value = e(I).value) ?? "");
        }), G(N, ze);
      }), s(yt), s(Lt);
      var ut = g(Lt, 2), dt = g(l(ut), 2);
      bt(dt), s(ut), s(_t);
      var st = g(_t, 2), pt = g(l(st), 2);
      Ot(pt, 21, () => e(P), (N) => N.id, (N, I) => {
        var ze = Cu();
        let L;
        var ce = l(ze);
        let De;
        var Ce = l(ce);
        let Be;
        var f = g(Ce, 2), pe = l(f, !0);
        s(f), s(ce);
        var Me = g(ce, 2);
        let K;
        var nt = l(Me);
        tt(nt, { name: "pin" }), s(Me), s(ze), we(
          (Le, xt, Ie, Ke, at) => {
            L = le(ze, 1, "step-row svelte-wqeobd", null, L, Le), De = le(ce, 1, "step-toggle svelte-wqeobd", null, De, xt), j(ce, "aria-pressed", Ie), Be = Pr(Ce, "", Be, { "--icon-mask": e(I).iconMask }), oe(pe, e(I).label), K = le(Me, 1, "pin-toggle svelte-wqeobd", null, K, Ke), Me.disabled = at, j(Me, "aria-label", `Pin ${e(I).label} when this custom button runs`);
          },
          [
            () => ({ "is-selected": T(e(I).id) }),
            () => ({
              "is-selected": T(e(I).id),
              active: T(e(I).id)
            }),
            () => T(e(I).id),
            () => {
              var Le, xt;
              return {
                "is-active": T(e(I).id) && ((Le = e(z).steps.find((Ie) => Ie.widgetId === e(I).id)) == null ? void 0 : Le.pinned),
                active: T(e(I).id) && ((xt = e(z).steps.find((Ie) => Ie.widgetId === e(I).id)) == null ? void 0 : xt.pinned)
              };
            },
            () => !T(e(I).id)
          ]
        ), ae("click", ce, () => R(e(I).id)), ae("click", Me, () => D(e(I).id)), G(N, ze);
      }), s(pt), s(st);
      var ue = g(st, 2), Pe = l(ue), Xe = l(Pe);
      tt(Xe, { name: "buttons-manager" }), jr(), s(Pe), s(ue), s(Ge), s(B), we(
        (N) => {
          oe(se, `${e(M) ?? ""} on toolbar`), oe(je, `${e(_) ?? ""} on canvas`), oe(re, `${e(W).length ?? ""} custom`), Pe.disabled = N;
        },
        [
          () => e(z).label.trim().length === 0 || e(z).steps.length === 0
        ]
      ), _o("submit", Ge, (N) => {
        N.preventDefault(), V();
      }), Pn(Qe, () => e(z).label, (N) => e(z).label = N), Pn(Tt, () => e(z).barLabel, (N) => e(z).barLabel = N), dg(yt, () => e(z).iconName, (N) => e(z).iconName = N), Pn(dt, () => e(z).summary, (N) => e(z).summary = N), G(O, he);
    },
    $$slots: { default: !0 }
  }), At(X);
}
rn(["click"]);
Dt(
  kg,
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
var Eu = /* @__PURE__ */ Z('<button type="button"><span class="svelte-1gyj5vm"> </span> <!></button>'), Ru = /* @__PURE__ */ Z('<span class="activity-label svelte-1gyj5vm"> </span>'), Ou = /* @__PURE__ */ Z('<button type="button"><span class="activity-icon svelte-1gyj5vm"></span> <!></button>'), Iu = /* @__PURE__ */ Z('<section class="workspace-toolbar-shell svelte-1gyj5vm"><div class="workspace-toolbar-main svelte-1gyj5vm" role="toolbar" aria-label="Admin workspace toolbar"><div class="workspace-toolbar-start svelte-1gyj5vm"><button type="button"><!> <span class="svelte-1gyj5vm">Buttons + widgets</span></button> <div class="workspace-strip svelte-1gyj5vm" aria-label="Workspace slots"><!> <button class="save-button svelte-1gyj5vm" type="button" aria-label="Save workspace" title="Save workspace"><!> <span class="svelte-1gyj5vm">Save</span></button> <span class="workspace-saved svelte-1gyj5vm"> </span></div></div> <div class="activity-bar svelte-1gyj5vm"></div> <div class="workspace-toolbar-end svelte-1gyj5vm"><div><button class="control-button reset-button svelte-1gyj5vm" type="button" aria-label="Reset workspace" title="Reset workspace"><!> <span class="svelte-1gyj5vm">Reset</span></button> <button class="reset-question svelte-1gyj5vm" type="button" tabindex="-1" aria-hidden="true" title="Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.">❓</button> <div class="reset-tooltip svelte-1gyj5vm" role="tooltip">Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.</div></div> <button type="button"><!> <span class="svelte-1gyj5vm"> </span></button></div></div> <!></section>');
const Du = {
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
function _g(t, r) {
  $t(r, !0), It(t, Du);
  let n = y(r, "items", 7), a = y(r, "profiles", 7), o = y(r, "editing", 7), i = y(r, "compact", 7), d = y(r, "layoutDirty", 7), c = y(r, "managerOpen", 7), h = y(r, "actionIconOptions", 7), u = y(r, "onToggleEditing", 7), x = y(r, "onResetLayout", 7), q = y(r, "onSaveWorkspace", 7), w = y(r, "onToggleManager", 7), P = y(r, "onActivateWidget", 7), W = y(r, "onToggleToolbar", 7), M = y(r, "onToggleWorkspace", 7), _ = y(r, "onToggleEdgePin", 7), E = y(r, "onActivateAction", 7), z = y(r, "onToggleToolbarAction", 7), T = y(r, "onDeleteAction", 7), R = y(r, "onCreateAction", 7), D = /* @__PURE__ */ me(null), V = /* @__PURE__ */ me(!1), X = null, O = /* @__PURE__ */ k(() => n().filter((N) => N.inToolbar)), m = /* @__PURE__ */ k(() => a()[0] ?? null), he = /* @__PURE__ */ k(() => {
    var N;
    return (N = e(m)) != null && N.savedAt ? `Saved ${new Intl.DateTimeFormat(void 0, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date(e(m).savedAt))}` : "Unsaved";
  });
  function J(N) {
    return N.kind === "widget";
  }
  function ee(N) {
    return !J(N) || N.presentation === "label";
  }
  function se() {
    X && (clearTimeout(X), X = null), $(V, !1);
  }
  function de() {
    se(), $(V, !0), X = setTimeout(
      () => {
        $(V, !1), X = null;
      },
      2400
    );
  }
  function je() {
    if (!(i() || !d())) {
      if (e(V)) {
        se(), x()();
        return;
      }
      de();
    }
  }
  ih(() => {
    se();
  });
  var _e = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), b();
    },
    get profiles() {
      return a();
    },
    set profiles(N) {
      a(N), b();
    },
    get editing() {
      return o();
    },
    set editing(N) {
      o(N), b();
    },
    get compact() {
      return i();
    },
    set compact(N) {
      i(N), b();
    },
    get layoutDirty() {
      return d();
    },
    set layoutDirty(N) {
      d(N), b();
    },
    get managerOpen() {
      return c();
    },
    set managerOpen(N) {
      c(N), b();
    },
    get actionIconOptions() {
      return h();
    },
    set actionIconOptions(N) {
      h(N), b();
    },
    get onToggleEditing() {
      return u();
    },
    set onToggleEditing(N) {
      u(N), b();
    },
    get onResetLayout() {
      return x();
    },
    set onResetLayout(N) {
      x(N), b();
    },
    get onSaveWorkspace() {
      return q();
    },
    set onSaveWorkspace(N) {
      q(N), b();
    },
    get onToggleManager() {
      return w();
    },
    set onToggleManager(N) {
      w(N), b();
    },
    get onActivateWidget() {
      return P();
    },
    set onActivateWidget(N) {
      P(N), b();
    },
    get onToggleToolbar() {
      return W();
    },
    set onToggleToolbar(N) {
      W(N), b();
    },
    get onToggleWorkspace() {
      return M();
    },
    set onToggleWorkspace(N) {
      M(N), b();
    },
    get onToggleEdgePin() {
      return _();
    },
    set onToggleEdgePin(N) {
      _(N), b();
    },
    get onActivateAction() {
      return E();
    },
    set onActivateAction(N) {
      E(N), b();
    },
    get onToggleToolbarAction() {
      return z();
    },
    set onToggleToolbarAction(N) {
      z(N), b();
    },
    get onDeleteAction() {
      return T();
    },
    set onDeleteAction(N) {
      T(N), b();
    },
    get onCreateAction() {
      return R();
    },
    set onCreateAction(N) {
      R(N), b();
    }
  }, re = Iu(), fe = l(re), xe = l(fe), B = l(xe);
  let F;
  var ve = l(B);
  tt(ve, { name: "buttons-manager" }), jr(2), s(B), ni(B, (N) => $(D, N), () => e(D));
  var qe = g(B, 2), Te = l(qe);
  Ot(Te, 17, a, (N) => N.id, (N, I) => {
    var ze = Eu();
    let L;
    var ce = l(ze), De = l(ce, !0);
    s(ce);
    var Ce = g(ce, 2);
    {
      var Be = (f) => {
        tt(f, { name: "layout-lock" });
      };
      ge(Ce, (f) => {
        e(I).locked && f(Be);
      });
    }
    s(ze), we(() => {
      L = le(ze, 1, "workspace-pill svelte-1gyj5vm", null, L, {
        "is-active": !e(I).locked,
        "is-locked": e(I).locked
      }), ze.disabled = e(I).locked, j(ze, "aria-label", e(I).locked ? `${e(I).label} is locked` : `${e(I).label} is active`), j(ze, "title", e(I).locked ? `${e(I).label} is locked` : `${e(I).label} is active`), oe(De, e(I).label);
    }), G(N, ze);
  });
  var Ge = g(Te, 2), be = l(Ge);
  tt(be, { name: "restore" }), jr(2), s(Ge);
  var ke = g(Ge, 2), Qe = l(ke, !0);
  s(ke), s(qe), s(xe);
  var mt = g(xe, 2);
  Ot(mt, 21, () => e(O), (N) => N.id, (N, I) => {
    var ze = Ou();
    let L;
    var ce = l(ze);
    let De;
    var Ce = g(ce, 2);
    {
      var Be = (pe) => {
        var Me = Ru(), K = l(Me, !0);
        s(Me), we(() => oe(K, e(I).barLabel)), G(pe, Me);
      }, f = /* @__PURE__ */ k(() => ee(e(I)));
      ge(Ce, (pe) => {
        e(f) && pe(Be);
      });
    }
    s(ze), we(
      (pe, Me) => {
        L = le(ze, 1, "activity-button svelte-1gyj5vm", null, L, pe), j(ze, "aria-label", Me), j(ze, "title", e(I).label), De = Pr(ce, "", De, { "--icon-mask": e(I).iconMask });
      },
      [
        () => ({
          "is-active": J(e(I)) && e(I).open,
          "is-label": ee(e(I))
        }),
        () => J(e(I)) ? `Open ${e(I).label}` : `Run ${e(I).label}`
      ]
    ), ae("click", ze, () => J(e(I)) ? P()(e(I).id) : E()(e(I).id)), G(N, ze);
  }), s(mt);
  var Tt = g(mt, 2), _t = l(Tt);
  let Lt;
  var yt = l(_t), ut = l(yt);
  tt(ut, { name: "layout-reset" }), jr(2), s(yt), jr(4), s(_t);
  var dt = g(_t, 2);
  let st;
  var pt = l(dt);
  {
    let N = /* @__PURE__ */ k(() => o() ? "layout-unlock" : "layout-lock");
    tt(pt, {
      get name() {
        return e(N);
      }
    });
  }
  var ue = g(pt, 2), Pe = l(ue, !0);
  s(ue), s(dt), s(Tt), s(fe);
  var Xe = g(fe, 2);
  return ug(Xe, {
    get open() {
      return c();
    },
    get anchor() {
      return e(D);
    },
    placement: "bottom-start",
    width: "min(24rem, calc(100vw - 1rem))",
    zIndex: 520,
    get onClose() {
      return w();
    },
    children: (N, I) => {
      kg(N, {
        get items() {
          return n();
        },
        get actionIconOptions() {
          return h();
        },
        get onToggleToolbar() {
          return W();
        },
        get onToggleWorkspace() {
          return M();
        },
        get onToggleEdgePin() {
          return _();
        },
        get onOpenWidget() {
          return P();
        },
        get onToggleToolbarAction() {
          return z();
        },
        get onRunAction() {
          return E();
        },
        get onDeleteAction() {
          return T();
        },
        get onCreateAction() {
          return R();
        }
      });
    },
    $$slots: { default: !0 }
  }), s(re), we(() => {
    F = le(B, 1, "manager-button svelte-1gyj5vm", null, F, { "is-active": c() }), j(B, "aria-label", c() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), j(B, "aria-pressed", c()), j(B, "title", c() ? "Close buttons and widgets manager" : "Open buttons and widgets manager"), oe(Qe, e(he)), Lt = le(_t, 1, "reset-shell svelte-1gyj5vm", null, Lt, { "is-armed": e(V) }), yt.disabled = !d() || i(), st = le(dt, 1, "control-button svelte-1gyj5vm", null, st, { "is-active": o() }), j(dt, "aria-label", o() ? "Lock layout editing" : "Unlock layout editing"), j(dt, "aria-pressed", o()), dt.disabled = i(), j(dt, "title", i() ? "Layout editing is disabled on compact screens" : o() ? "Lock layout editing" : "Unlock layout editing"), oe(Pe, o() ? "Layout unlocked" : "Layout locked");
  }), ae("click", B, function(...N) {
    var I;
    (I = w()) == null || I.apply(this, N);
  }), ae("click", Ge, function(...N) {
    var I;
    (I = q()) == null || I.apply(this, N);
  }), ae("click", yt, je), ae("click", dt, function(...N) {
    var I;
    (I = u()) == null || I.apply(this, N);
  }), G(t, re), At(_e);
}
rn(["click"]);
Dt(
  _g,
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
var Lu = /* @__PURE__ */ Z('<div class="snap-preview svelte-1k3ojqh" aria-hidden="true"></div>'), Bu = /* @__PURE__ */ Z("<div><span></span></div>"), Fu = /* @__PURE__ */ Z('<div class="snap-picker svelte-1k3ojqh" aria-hidden="true"></div>'), Nu = /* @__PURE__ */ Z('<button type="button"><!></button>'), Hu = /* @__PURE__ */ Z('<div class="window-help svelte-1k3ojqh" data-placement="before"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Gu = /* @__PURE__ */ Z('<button type="button"><!></button>'), Vu = /* @__PURE__ */ Z('<!> <button type="button"><!></button> <button type="button"><!></button>', 1), Yu = /* @__PURE__ */ Z('<button type="button"><!></button>'), Uu = /* @__PURE__ */ Z('<button type="button"><!></button> <button type="button"><!></button> <!>', 1), Xu = /* @__PURE__ */ Z('<div class="window-help svelte-1k3ojqh" data-placement="after"><button type="button"><!></button> <div class="window-help-tooltip svelte-1k3ojqh" role="tooltip"><strong class="svelte-1k3ojqh"> </strong> <span class="svelte-1k3ojqh"> </span></div></div>'), Ku = /* @__PURE__ */ Z('<div role="group"><div class="window-controls window-tools svelte-1k3ojqh"><!> <button type="button" aria-label="Center window"><!></button> <button type="button"><!></button></div> <div> </div> <div class="window-system-cluster svelte-1k3ojqh"><!> <div><!></div> <!></div></div>'), Ju = /* @__PURE__ */ Z("<div><!></div>"), Zu = /* @__PURE__ */ Z('<button type="button" tabindex="-1" aria-hidden="true"></button>'), Qu = /* @__PURE__ */ Z("<!> <!> <div><!> <!> <!></div>", 1);
const ep = {
  hash: "svelte-1k3ojqh",
  code: `.window-shell.svelte-1k3ojqh {--window-panel: var(--efs-window-theme-panel, var(--shell-panel, rgba(15, 23, 42, 0.94)));--window-surface: var(--efs-window-theme-surface, var(--shell-surface, rgba(15, 23, 42, 0.98)));--window-border: var(--efs-window-theme-border, var(--shell-border, rgba(148, 163, 184, 0.24)));--window-hover: var(--efs-window-theme-hover, var(--shell-row-hover, rgba(125, 211, 252, 0.12)));--window-shadow: var(--efs-window-theme-shadow, var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42))));--window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));--window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));--window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));--window-chrome-tint: var(--efs-window-chrome-tint, var(--window-primary));--window-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--window-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--window-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--window-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--window-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--window-titlebar-height: 44px;--window-shell-scale: 1;--window-control-size-base: calc(2.15rem * var(--window-shell-scale));--window-control-size:
      min(
        var(--window-control-size-base),
        max(1.7rem, calc(var(--window-titlebar-height) - max(0.46rem, calc(var(--window-chrome-padding) * 0.9))))
      );--window-aux-width: calc(2.35rem * var(--window-shell-scale));--window-system-width: calc(2.75rem * var(--window-shell-scale));--window-system-height: var(--window-control-size);--window-control-gap: calc(0.14rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(10px * var(--window-shell-scale)));--window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);--window-icon-size: calc(0.9rem * var(--window-shell-scale));--window-system-icon-size: var(--window-icon-size);--window-chrome-top-space:
      max(0.18rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.52));--window-chrome-bottom-space:
      max(0.12rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.48));--window-title-guard: 0px;position:fixed;top:0;left:0;display:flex;flex-direction:column;isolation:isolate;min-width:min(100vw - 1rem, 18rem);min-height:0;opacity:0;transform-origin:top center;transition:transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;will-change:transform, width, height;pointer-events:auto;}.window-shell.svelte-1k3ojqh:not(.win7-theme) {border:var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);border-radius:var(--window-radius);background:color-mix(in srgb, var(--window-surface), transparent 2%);box-shadow:var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);overflow:clip;color:var(--window-text);font-family:var(--efs-window-font-family, var(--efs-font-sans, sans-serif));}.window-shell[data-style='solid'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);}.window-shell[data-style='glass'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);backdrop-filter:blur(18px) saturate(1.08);-webkit-backdrop-filter:blur(18px) saturate(1.08);}.window-shell[data-style='mica'].svelte-1k3ojqh {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),
      color-mix(in srgb, var(--window-surface), transparent 10%);backdrop-filter:blur(22px) saturate(1.08);-webkit-backdrop-filter:blur(22px) saturate(1.08);}.window-shell[data-style='frost'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 18%);backdrop-filter:blur(24px) saturate(1.14);-webkit-backdrop-filter:blur(24px) saturate(1.14);}.window-shell[data-style='pane'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 8%);backdrop-filter:blur(16px) saturate(1.04);-webkit-backdrop-filter:blur(16px) saturate(1.04);}.window-shell[data-style='transparent'].svelte-1k3ojqh {background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);}.window-shell.compact-controls.svelte-1k3ojqh {--window-control-size-base: calc(1.92rem * var(--window-shell-scale));--window-aux-width: calc(2.05rem * var(--window-shell-scale));--window-system-width: calc(2.28rem * var(--window-shell-scale));--window-control-gap: calc(0.08rem * var(--window-shell-scale));--window-control-radius: max(8px, calc(8px * var(--window-shell-scale)));}.window-shell.is-ready.svelte-1k3ojqh {opacity:1;}.window-shell.is-dragging.svelte-1k3ojqh,
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
  .window-system-cluster.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {position:relative;z-index:1;min-width:0;}.window-tools.svelte-1k3ojqh {justify-self:start;}.window-system-cluster.svelte-1k3ojqh,
  .system-controls.svelte-1k3ojqh {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {justify-self:end;}.window-shell[data-system-placement='left'].svelte-1k3ojqh .window-system-cluster:where(.svelte-1k3ojqh),
  .window-shell[data-system-placement='left'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {justify-self:start;}.window-title.svelte-1k3ojqh {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));max-width:max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--efs-font-title-sm);font-weight:600;letter-spacing:0.01em;color:var(--window-text);pointer-events:none;transform:translate(-50%, -50%);}.window-title.align-left.svelte-1k3ojqh {text-align:left;}.window-title.align-center.svelte-1k3ojqh {text-align:center;}.window-title.align-right.svelte-1k3ojqh {text-align:right;}.window-shell[data-title-tone='light'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(255, 255, 255, 0.96);}.window-shell[data-title-tone='dark'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {color:rgba(12, 18, 28, 0.88);}.window-shell[data-title-effect='plain'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:none;}.window-shell[data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(0, 0, 0, 0.16),
      0 2px 12px rgba(0, 0, 0, 0.18);}.window-shell[data-title-tone='dark'][data-title-effect='shadow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.42),
      0 8px 18px rgba(255, 255, 255, 0.32);}.window-shell[data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 1px 0 rgba(255, 255, 255, 0.58);}.window-shell[data-title-tone='light'][data-title-effect='glow'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 0 12px rgba(12, 18, 28, 0.44),
      0 1px 0 rgba(0, 0, 0, 0.38);}.window-shell[data-title-effect='emboss'].svelte-1k3ojqh .window-title:where(.svelte-1k3ojqh) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.28),
      0 -1px 0 rgba(0, 0, 0, 0.38);}.window-controls.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:var(--window-control-gap);min-width:0;white-space:nowrap;}.window-system-cluster.svelte-1k3ojqh {display:inline-flex;align-items:center;gap:max(0.28rem, calc(var(--window-control-gap) * 0.75));min-width:0;}.window-help.svelte-1k3ojqh {position:relative;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;}.window-help-tooltip.svelte-1k3ojqh {position:absolute;top:calc(100% + 0.65rem);z-index:8;display:flex;flex-direction:column;gap:0.4rem;width:min(18rem, calc(100vw - 2rem));padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-radius:16px;background:radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 90%), transparent 34%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--window-panel), transparent 2%);color:var(--window-text);box-shadow:var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 26%);opacity:0;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 140ms ease,
      transform 140ms ease;}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {right:0;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh) {left:0;}.window-help-tooltip.svelte-1k3ojqh::before {content:'';position:absolute;top:-0.42rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);border-left:1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);background:color-mix(in srgb, var(--window-panel), transparent 2%);transform:rotate(45deg);}.window-help[data-placement='before'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {right:0.9rem;}.window-help[data-placement='after'].svelte-1k3ojqh .window-help-tooltip:where(.svelte-1k3ojqh)::before {left:0.9rem;}.window-help-tooltip.svelte-1k3ojqh strong:where(.svelte-1k3ojqh) {font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.window-help-tooltip.svelte-1k3ojqh span:where(.svelte-1k3ojqh) {color:color-mix(in srgb, var(--window-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.window-help.svelte-1k3ojqh:hover .window-help-tooltip:where(.svelte-1k3ojqh),
  .window-help.svelte-1k3ojqh:focus-within .window-help-tooltip:where(.svelte-1k3ojqh) {opacity:1;transform:translateY(0);}.window-button.svelte-1k3ojqh {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:var(--window-aux-width);height:var(--window-control-size);min-width:0;border:var(--window-control-border-width) solid
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
      );mix-blend-mode:screen;opacity:calc(var(--window-chrome-texture-opacity) * 0.44);}.window-button.svelte-1k3ojqh .app-icon {position:relative;z-index:1;width:var(--window-icon-size);height:var(--window-icon-size);}.help-button.svelte-1k3ojqh .app-icon {width:min(var(--window-icon-size), 0.92rem);height:min(var(--window-icon-size), 0.92rem);}.window-button.svelte-1k3ojqh:hover {transform:translateY(-1px);border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 68%);background:color-mix(in srgb, var(--window-hover), var(--window-chrome-tint) 16%);color:var(--window-text);}.window-button.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-chrome-tint), transparent 56%);background:color-mix(in srgb, var(--window-chrome-tint), transparent 82%);color:var(--window-text);}.window-button.close.svelte-1k3ojqh:hover {border-color:rgba(255, 255, 255, 0.12);background:rgba(239, 68, 68, 0.9);color:white;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) {width:var(--window-system-width);height:var(--window-system-height);}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:var(--window-system-icon-size);height:var(--window-system-icon-size);}.window-shell[data-layout='windows-7'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.8rem;}.window-shell[data-layout='windows-7'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0 0 11px 11px;border-color:color-mix(in srgb, var(--window-border), transparent 24%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 12%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.window-shell[data-layout='windows-8'].svelte-1k3ojqh,
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh {--window-system-width: 3rem;--window-system-height: 1.95rem;--window-system-icon-size: 0.82rem;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {padding-right:0;}.window-shell[data-layout='windows-8'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='windows-10'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:0;border-color:transparent;background:transparent;box-shadow:none;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:10px;}.window-shell[data-layout='windows-11'].svelte-1k3ojqh {--window-system-height: 2rem;--window-system-icon-size: 0.88rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh,
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh {--window-system-width: 1rem;--window-system-height: 1rem;--window-system-icon-size: 0.5rem;--window-control-radius: 999px;--window-control-gap: 0.24rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0.32rem;}.window-shell[data-layout='ubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-layout='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;border-color:color-mix(in srgb, var(--window-border), transparent 18%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.12);}.window-shell[data-layout='gnome'].svelte-1k3ojqh {--window-system-width: 2.6rem;--window-system-height: 1.82rem;--window-system-icon-size: 0.82rem;--window-control-radius: 999px;}.window-shell[data-layout='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border-radius:999px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) {--window-control-radius: 8px;--window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-w7-title-bg:
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),
      #4580c4;--window-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;--window-w7-control-bg:
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);--window-w7-control-border: #0000004d;border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82),
      inset 0 0 0 2px rgba(255, 255, 255, 0.08);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),
      var(--window-w7-title-bg);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.52),
        rgba(255, 255, 255, 0.24) 18%,
        rgba(255, 255, 255, 0.08) 52%,
        transparent 86%
      ),
      radial-gradient(140% 126% at 10% -18%, rgba(255, 255, 255, 0.42), transparent 42%),
      radial-gradient(94% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.62);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.22);border:1px solid var(--window-w7-control-border);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.8),
      1px 0 0 rgba(255, 255, 255, 0.66),
      -1px 0 0 rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid var(--window-w7-control-border);border-radius:0;background:var(--window-w7-control-bg);color:rgba(0, 0, 0, 0.76);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(224, 161, 151, 0.9),
        rgba(207, 121, 106, 0.95) 25% 50%,
        rgba(213, 79, 54, 0.96) 50%
      );color:rgba(255, 255, 255, 0.94);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh {--window-control-radius: 8px;--window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));--window-vista-title-bg:
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),
      #6c8fbe;--window-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;--window-vista-control-bg:
      linear-gradient(
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.34) 45%,
        rgba(0, 0, 0, 0.12) 50%,
        rgba(0, 0, 0, 0.14) 76%,
        rgba(255, 255, 255, 0.54)
      );border-color:rgba(0, 0, 0, 0.7);box-shadow:var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.88),
      inset 0 0 0 2px rgba(255, 255, 255, 0.12);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),
      var(--window-vista-title-bg);backdrop-filter:blur(9px) saturate(1.02);-webkit-backdrop-filter:blur(9px) saturate(1.02);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 1px 0 0 rgba(255, 255, 255, 0.62),
      inset -1px 0 0 rgba(255, 255, 255, 0.62);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.3) 18%,
        rgba(255, 255, 255, 0.1) 58%,
        transparent 90%
      ),
      radial-gradient(142% 128% at 8% -22%, rgba(255, 255, 255, 0.48), transparent 44%),
      radial-gradient(106% 118% at 100% 0%, rgba(255, 255, 255, 0.26), transparent 42%);opacity:calc(var(--window-chrome-texture-opacity) * 0.68);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.26);border:1px solid rgba(0, 0, 0, 0.35);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.84),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {border:0;border-right:1px solid rgba(0, 0, 0, 0.35);border-radius:0;background:var(--window-vista-control-bg);color:rgba(0, 0, 0, 0.82);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.72),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:max(var(--window-system-width), 3rem);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(233, 176, 166, 0.94),
        rgba(211, 110, 95, 0.96) 25% 50%,
        rgba(201, 52, 37, 0.98) 50%
      );color:rgba(255, 255, 255, 0.96);}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh {--window-control-radius: 11px;--window-system-icon-size: 0.88rem;}.window-shell[data-theme='windows-11-mica'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
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
      color-mix(in srgb, var(--window-panel), transparent 14%);}.window-shell[data-theme='xubuntu'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}.window-shell[data-theme='gnome'].svelte-1k3ojqh {--window-control-radius: 12px;--window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));--window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));}.window-shell[data-theme='gnome'].svelte-1k3ojqh .system-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:none;}.window-shell[data-beam='windows-7'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-w7-glass-stripes, none),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.14)) 16%,
        rgba(255, 255, 255, calc(0.06 + var(--window-beam-intensity) * 0.05)) 46%,
        transparent 72%
      ),
      radial-gradient(
        156% 132% at 52% -36%,
        rgba(255, 255, 255, calc(0.56 + var(--window-beam-intensity) * 0.24)),
        transparent 38%
      ),
      radial-gradient(
        118% 118% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--window-beam-intensity) * 0.18)) 20%,
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.08)) 40%,
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
      calc(var(--window-chrome-colorize-opacity) * 0.44 + var(--window-beam-intensity) * 0.98),
      1
    );}.window-shell[data-beam='vista'].svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before {background:var(--window-vista-glass-stripes, var(--window-w7-glass-stripes, none)),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--window-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        124% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--window-beam-intensity) * 0.16)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.08)) 40%,
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
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 1),
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
      );}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar:where(.svelte-1k3ojqh) {padding-top:0;padding-inline:6px;gap:0.55rem;border-bottom:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-text:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-text:where(.svelte-1k3ojqh) {line-height:15px;padding-top:6px;letter-spacing:0;font-weight:600;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) {gap:0;align-self:start;overflow:hidden;background:rgba(255, 255, 255, 0.18);border:1px solid rgba(0, 0, 0, 0.3);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.82),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {position:relative;min-width:29px;min-height:19px;width:auto;height:auto;padding:0;border:0;border-right:1px solid rgba(0, 0, 0, 0.3);border-radius:0;box-shadow:none;box-sizing:border-box;background:none;color:rgba(12, 18, 28, 0.84);overflow:visible;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {inset:0;border-radius:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::before {box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh)::after {opacity:0;transition:opacity 120ms linear;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover {transform:none;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child {border-right:0;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):last-child::after {border-bottom-right-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::before,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):first-child::after {border-bottom-left-radius:5px;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:0.72rem;height:0.72rem;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-w7-control-bg, var(--window-vista-control-bg));}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh) {background:var(--window-vista-control-bg);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,
  .window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):hover::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):focus-visible::after {opacity:1;}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(93, 196, 240, 0.82),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82);background:radial-gradient(circle at bottom, rgba(42, 206, 218, 0.9), transparent 65%),
      linear-gradient(#b6d9ee 50%, #1a6ca1 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button)::after {box-shadow:0 0 7px 3px rgba(104, 196, 244, 0.86),
      inset 0 0 0 1px rgba(255, 255, 255, 0.86);background:radial-gradient(circle at bottom, rgba(118, 220, 255, 0.94), transparent 65%),
      linear-gradient(#d3e9f8 48%, #4f88b7 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .window-button.system:where(.svelte-1k3ojqh):not(.close-button):active::after {background:radial-gradient(circle at bottom, rgba(11, 253, 250, 0.88), transparent 65%),
      linear-gradient(#86a7bc 50%, #092747 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh),
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {min-width:48px;color:rgba(255, 255, 255, 0.96);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);}.window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh) {background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(#efb0a6, #d36e5f 25% 50%, #c93425 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh)::after {box-shadow:0 0 7px 3px rgba(230, 142, 117, 0.9),
      inset 0 0 0 1px rgba(255, 255, 255, 0.78);background:radial-gradient(circle at 50% 170%, rgba(244, 230, 118, 0.9) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%);}.window-shell[data-theme='aero'].svelte-1k3ojqh:not(.win7-theme) .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after,
  .window-shell[data-theme='windows-vista'].svelte-1k3ojqh .title-bar-controls:where(.svelte-1k3ojqh) .close-button:where(.svelte-1k3ojqh):active::after {background:radial-gradient(circle at 50% 170%, rgba(220, 192, 63, 0.92) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%);}.window-shell.win7-theme.svelte-1k3ojqh {overflow:visible;color:var(--w7-el-c);font-family:var(--w7-font);}.window-shell.win7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:0 var(--w7-w-space) var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:0 0 0 1px #fff9;color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}.window-shell.basic7-theme.svelte-1k3ojqh {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;color:var(--w7-el-c);font-family:var(--w7-font);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;}.window-shell.basic7-theme.svelte-1k3ojqh::after {content:none;display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome.title-bar:where(.svelte-1k3ojqh) {min-height:0;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::before,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-chrome:where(.svelte-1k3ojqh)::after {display:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) {gap:0.35rem;padding-top:calc(var(--w7-w-space) - 1px);}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) {width:23px;min-width:23px;height:23px;min-height:23px;padding:0;color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::before,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh)::after {inset:0;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):hover,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):active,
  .window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button.is-active:where(.svelte-1k3ojqh) {color:var(--w7-el-c);transform:none;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh):focus-visible {outline-offset:-4px;}.window-shell.basic7-theme.svelte-1k3ojqh .window-tools:where(.svelte-1k3ojqh) .window-button:where(.svelte-1k3ojqh) .app-icon {width:0.78rem;height:0.78rem;}.window-shell.basic7-theme.svelte-1k3ojqh .window-title.title-bar-text:where(.svelte-1k3ojqh) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);}.window-shell.basic7-theme.svelte-1k3ojqh .window-content.window-body:where(.svelte-1k3ojqh) {margin:var(--w7-w-space);margin-top:0;border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);scrollbar-color:var(--efs-win7-scrollbar, #7f9db9) transparent;}:host(:not([theme='light'])) .window-shell.basic7-theme.svelte-1k3ojqh {--efs-win7-surface: #1c2229;--efs-win7-text: #e7edf8;--efs-win7-text-muted: #8591a2;--efs-win7-window-border: rgba(8, 12, 18, 0.82);--efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);--efs-win7-scrollbar: #5f7ea2;}.window-content.svelte-1k3ojqh {flex:1;min-height:0;overflow:auto;background:transparent;scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--window-primary), transparent 44%) transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar {width:0.82rem;height:0.82rem;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-track {background:transparent;}.window-content.svelte-1k3ojqh::-webkit-scrollbar-thumb {border:3px solid transparent;border-radius:999px;background:color-mix(in srgb, var(--window-primary), transparent 46%);background-clip:padding-box;}.resize-handle.svelte-1k3ojqh {position:absolute;z-index:4;border:0;padding:0;background:transparent;}.resize-handle.dir-n.svelte-1k3ojqh, .resize-handle.dir-s.svelte-1k3ojqh {left:0.8rem;right:0.8rem;height:0.7rem;cursor:ns-resize;}.resize-handle.dir-n.svelte-1k3ojqh {top:-0.35rem;}.resize-handle.dir-s.svelte-1k3ojqh {bottom:-0.35rem;}.resize-handle.dir-e.svelte-1k3ojqh, .resize-handle.dir-w.svelte-1k3ojqh {top:0.8rem;bottom:0.8rem;width:0.7rem;cursor:ew-resize;}.resize-handle.dir-e.svelte-1k3ojqh {right:-0.35rem;}.resize-handle.dir-w.svelte-1k3ojqh {left:-0.35rem;}.resize-handle.dir-ne.svelte-1k3ojqh, .resize-handle.dir-nw.svelte-1k3ojqh, .resize-handle.dir-se.svelte-1k3ojqh, .resize-handle.dir-sw.svelte-1k3ojqh {width:1rem;height:1rem;}.resize-handle.dir-ne.svelte-1k3ojqh {top:-0.35rem;right:-0.35rem;cursor:nesw-resize;}.resize-handle.dir-nw.svelte-1k3ojqh {top:-0.35rem;left:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-se.svelte-1k3ojqh {right:-0.35rem;bottom:-0.35rem;cursor:nwse-resize;}.resize-handle.dir-sw.svelte-1k3ojqh {left:-0.35rem;bottom:-0.35rem;cursor:nesw-resize;}.window-shell.win7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.window-shell.basic7-theme.svelte-1k3ojqh .resize-handle:where(.svelte-1k3ojqh) {min-width:0;min-height:0;box-shadow:none;}.snap-preview.svelte-1k3ojqh {position:fixed;pointer-events:none;border:1px solid color-mix(in srgb, var(--window-primary), transparent 22%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);}.snap-picker.svelte-1k3ojqh {position:fixed;top:0.85rem;left:50%;transform:translateX(-50%);display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:0.45rem;padding:0.55rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);box-shadow:var(--window-shadow);pointer-events:none;}.snap-cell.svelte-1k3ojqh {display:inline-flex;align-items:center;justify-content:center;width:2.7rem;height:2.45rem;border:1px solid color-mix(in srgb, var(--window-border), transparent 12%);border-radius:12px;background:color-mix(in srgb, var(--window-surface), transparent 6%);}.snap-cell.is-active.svelte-1k3ojqh {border-color:color-mix(in srgb, var(--window-primary), transparent 40%);background:color-mix(in srgb, var(--window-primary), transparent 84%);}.snap-shape.svelte-1k3ojqh {display:inline-flex;width:1.25rem;height:1rem;border:1px solid color-mix(in srgb, var(--window-primary), transparent 28%);border-radius:0.28rem;background:color-mix(in srgb, var(--window-primary), transparent 72%);}.shape-left.svelte-1k3ojqh {width:1.05rem;margin-right:0.2rem;}.shape-right.svelte-1k3ojqh {width:1.05rem;margin-left:0.2rem;}.shape-tl.svelte-1k3ojqh {clip-path:inset(0 45% 45% 0 round 0.28rem);}.shape-tr.svelte-1k3ojqh {clip-path:inset(0 0 45% 45% round 0.28rem);}.shape-bl.svelte-1k3ojqh {clip-path:inset(45% 45% 0 0 round 0.28rem);}.shape-br.svelte-1k3ojqh {clip-path:inset(45% 0 0 45% round 0.28rem);}

  @media (max-width: 47.99rem) {.window-shell.svelte-1k3ojqh {--window-control-size-base: calc(1.86rem * var(--window-shell-scale));--window-aux-width: calc(1.96rem * var(--window-shell-scale));--window-system-width: calc(2.16rem * var(--window-shell-scale));--window-control-gap: calc(0.06rem * var(--window-shell-scale));}.window-chrome.svelte-1k3ojqh {gap:0.3rem;padding-inline:max(0.3rem, calc(var(--window-chrome-padding) * 0.72));min-height:calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );}.window-title.svelte-1k3ojqh {font-size:0.82rem;}.window-button.svelte-1k3ojqh .app-icon {width:0.8rem;height:0.8rem;}.system-controls.svelte-1k3ojqh .window-button.system:where(.svelte-1k3ojqh) .app-icon {width:min(0.72rem, var(--window-system-icon-size));height:min(0.72rem, var(--window-system-icon-size));}.snap-picker.svelte-1k3ojqh {grid-template-columns:repeat(4, minmax(0, 1fr));width:min(calc(100vw - 1rem), 17rem);}.snap-cell.svelte-1k3ojqh {width:auto;}
  }`
};
function qg(t, r) {
  $t(r, !0), It(t, ep);
  let n = y(r, "title", 7), a = y(r, "helpText", 7, ""), o = y(r, "helpPlacement", 7, "auto"), i = y(r, "state", 15, "normal"), d = y(r, "x", 15, 100), c = y(r, "y", 15, 100), h = y(r, "width", 15, 600), u = y(r, "height", 15, 400), x = y(r, "locked", 7, !1), q = y(r, "chromeless", 7, !1), w = y(r, "buttonLayout", 7), P = y(r, "systemButtonPlacement", 7), W = y(r, "sideResizeMode", 7), M = y(r, "borderWidth", 7), _ = y(r, "borderRadius", 7), E = y(r, "chromePadding", 7), z = y(r, "chromeStyle", 7), T = y(r, "alignment", 7), R = y(r, "themePreset", 7), D = y(r, "fontPreset", 7), V = y(r, "snapRestoreOnRelease", 7), X = y(r, "shiftDragAction", 7), O = y(r, "zIndex", 7, 100), m = y(r, "pinned", 7, !1), he = y(r, "dragSeed", 7, null), J = y(r, "restoreFrame", 15, null), ee = y(r, "snapTarget", 15, null), se = y(r, "onClose", 7), de = y(r, "onPinToggle", 7), je = y(r, "onConsumeDragSeed", 7), _e = y(r, "onStateChange", 7), re = y(r, "children", 7);
  const fe = [
    { id: "top-left", preview: "tl" },
    { id: "maximize", preview: "full" },
    { id: "top-right", preview: "tr" },
    { id: "left-half", preview: "left" },
    { id: "right-half", preview: "right" },
    { id: "bottom-left", preview: "bl" },
    { id: "bottom-right", preview: "br" }
  ], xe = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), B = ["n", "s", "e", "w", "ne", "nw", "se", "sw"], F = 360, ve = 240, qe = 1400;
  let Te = /* @__PURE__ */ me(ht({ ...Re })), Ge = /* @__PURE__ */ me(!1), be = /* @__PURE__ */ me(!1), ke = /* @__PURE__ */ me(null), Qe = /* @__PURE__ */ me(null), mt = /* @__PURE__ */ me(0), Tt = /* @__PURE__ */ me(0), _t = "", Lt = 0, yt = 0, ut = 0, dt = 0, st = 0, pt = 0, ue = "se", Pe = null, Xe = !1, N = !1, I = 0.5, ze = 18, L = !1, ce = /* @__PURE__ */ me(null), De = 0, Ce = /* @__PURE__ */ me(null), Be = /* @__PURE__ */ me(0), f = /* @__PURE__ */ me(0);
  Wo(() => {
    const p = requestAnimationFrame(() => {
      $(Ge, !0);
    }), A = oi((U) => {
      $(Te, { ...U }, !0);
    });
    return () => {
      cancelAnimationFrame(p), A(), Qt(), De && typeof window < "u" && window.clearTimeout(De);
    };
  });
  let pe = /* @__PURE__ */ k(() => w() ?? e(Te).buttonLayout), Me = /* @__PURE__ */ k(() => P() ?? e(Te).systemButtonPlacement), K = /* @__PURE__ */ k(() => W() ?? e(Te).sideResizeMode), nt = /* @__PURE__ */ k(() => M() ?? e(Te).borderWidth), Le = /* @__PURE__ */ k(() => _() ?? e(Te).borderRadius), xt = /* @__PURE__ */ k(() => E() ?? e(Te).chromePadding), Ie = /* @__PURE__ */ k(() => Math.max(28, e(Te).titleBarHeight ?? Re.titleBarHeight)), Ke = /* @__PURE__ */ k(() => Math.max(0.75, (e(Te).windowScale ?? Re.windowScale) / 100)), at = /* @__PURE__ */ k(() => z() ?? e(Te).chromeStyle), jt = /* @__PURE__ */ k(() => e(Te).chromeTexture ? e(Te).chromeBeamStyle : "none"), lr = /* @__PURE__ */ k(() => e(Te).chromeGlossStyle), Je = /* @__PURE__ */ k(() => T() ?? e(Te).alignment), Pt = /* @__PURE__ */ k(() => R() ?? e(Te).themePreset), Wt = /* @__PURE__ */ k(() => D() ?? e(Te).fontPreset), qt = /* @__PURE__ */ k(() => V() ?? e(Te).snapRestoreOnRelease), wr = /* @__PURE__ */ k(() => X() ?? e(Te).shiftDragAction), Sr = /* @__PURE__ */ k(() => h() < 560 ? "left" : e(Je)), Jt = /* @__PURE__ */ k(() => h() < 520), Tr = /* @__PURE__ */ k(() => td({
    themePreset: e(Pt),
    titleTone: e(Te).titleTone
  })), Wr = /* @__PURE__ */ k(() => rd({
    themePreset: e(Pt),
    titleEffect: e(Te).titleEffect
  })), Gn = /* @__PURE__ */ k(() => a().trim().length > 0), an = /* @__PURE__ */ k(() => o() === "auto" ? e(Me) === "left" ? "after" : "before" : o()), $e = /* @__PURE__ */ k(() => e(Pt) === "aero"), Bt = /* @__PURE__ */ k(() => e(Pt) === "windows-basic"), We = /* @__PURE__ */ k(() => e($e) || e(Bt)), Ft = /* @__PURE__ */ k(() => e(We) || e(Pt) === "windows-vista"), $o = /* @__PURE__ */ k(() => Math.max(e(Be), e(f)) + (e(Jt) ? 12 : 18));
  function ma(p) {
    return xe.has(p);
  }
  function Ao(p) {
    switch (p) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function dr(p, A = !1) {
    if (A)
      return p === "mac" || p === "ubuntu" || p === "xubuntu" ? void 0 : "stack";
    switch (p) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function Ua(p, A = !1) {
    if (A)
      return "stack";
    switch (p) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  let Cr = /* @__PURE__ */ me(!1), Mn = 0, Wn = 0, Vn = 0, mn = 0, Xa = /* @__PURE__ */ k(() => e(Cr) && !q() && !x() && e(pe) !== "mac" && typeof window < "u" && e(Tt) <= 84 && Math.abs(e(mt) - window.innerWidth / 2) <= 232), Cn = /* @__PURE__ */ k(() => e(ke) ? Un(e(ke)) : null);
  function on(p) {
    var A;
    i() !== p && (i(p), (A = _e()) == null || A(i()));
  }
  function Gt() {
    return { x: d(), y: c(), width: h(), height: u() };
  }
  function ar(p, A = h()) {
    return typeof window > "u" ? Math.max(0, p) : Math.max(0, Math.min(window.innerWidth - A, p));
  }
  function Ka(p, A = u()) {
    return typeof window > "u" ? Math.max(0, p) : Math.max(0, Math.min(window.innerHeight - Math.min(A, e(Ie)), p));
  }
  function $r(p) {
    const A = Math.max(F, Math.round(p.width)), U = Math.max(ve, Math.round(p.height));
    return {
      x: ar(Math.round(p.x), A),
      y: Ka(Math.round(p.y), U),
      width: A,
      height: U
    };
  }
  function fa() {
    return typeof window > "u" ? { x: 96, y: 72, width: 920, height: 640 } : $r({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }
  function fn(p) {
    const A = $r(p);
    d(A.x), c(A.y), h(A.width), u(A.height), ee(null), on("normal");
  }
  function Yn() {
    fn(J() ?? fa());
  }
  function Un(p) {
    if (typeof window > "u") return null;
    const A = window.innerWidth, U = window.innerHeight, ie = Math.round(A / 2), Se = Math.round(U / 2);
    switch (p) {
      case "maximize":
        return { x: 0, y: 0, width: A, height: U };
      case "left-half":
        return { x: 0, y: 0, width: ie, height: U };
      case "right-half":
        return {
          x: A - ie,
          y: 0,
          width: ie,
          height: U
        };
      case "top-left":
        return { x: 0, y: 0, width: ie, height: Se };
      case "top-right":
        return {
          x: A - ie,
          y: 0,
          width: ie,
          height: Se
        };
      case "bottom-left":
        return {
          x: 0,
          y: U - Se,
          width: ie,
          height: Se
        };
      case "bottom-right":
        return {
          x: A - ie,
          y: U - Se,
          width: ie,
          height: Se
        };
    }
  }
  function cr(p, A = Gt()) {
    if (J($r(A)), p === "maximize") {
      typeof window < "u" && (d(0), c(0), h(window.innerWidth), u(window.innerHeight)), ee("maximize"), on("maximized");
      return;
    }
    const U = Un(p);
    U && (ee(p), on("normal"), d(U.x), c(U.y), h(U.width), u(U.height));
  }
  function ii() {
    typeof window > "u" || ((i() === "maximized" || ee()) && Yn(), d(ar(Math.round((window.innerWidth - h()) / 2), h())), c(Ka(Math.round((window.innerHeight - u()) / 2), u())));
  }
  function Xn() {
    if (i() === "maximized") {
      Yn();
      return;
    }
    cr("maximize");
  }
  function Ja() {
    on(i() === "rolled-up" ? "normal" : "rolled-up");
  }
  function ba() {
    on("minimized");
  }
  function si() {
    $(ce, null), De && typeof window < "u" && window.clearTimeout(De), De = 0;
  }
  function Eo(p) {
    if (typeof window > "u") {
      $(ce, p, !0);
      return;
    }
    si(), $(ce, p, !0), De = window.setTimeout(
      () => {
        $(ce, null), De = 0;
      },
      qe
    );
  }
  function li() {
    var Se, rt;
    if (typeof window > "u" || !e(Ce))
      return !1;
    const p = 24, A = Math.ceil(Math.max(e(Ce).scrollWidth, ((Se = e(Ce).firstElementChild) == null ? void 0 : Se.scrollWidth) ?? 0)), U = Math.ceil(Math.max(e(Ce).scrollHeight, ((rt = e(Ce).firstElementChild) == null ? void 0 : rt.scrollHeight) ?? 0)), ie = $r({
      x: Math.round((window.innerWidth - A) / 2),
      y: Math.round((window.innerHeight - U - e(Ie)) / 2),
      width: Math.min(window.innerWidth - p * 2, Math.max(F, A + e(nt) * 2)),
      height: Math.min(window.innerHeight - p * 2, Math.max(ve, U + e(Ie) + e(nt) * 2))
    });
    return J(Gt()), fn(ie), !0;
  }
  function Ro(p) {
    if (x() || q() || Oo(p.target))
      return;
    if (e(ce) === "fit-content") {
      Eo("maximize"), Xn();
      return;
    }
    const A = li();
    Eo(A ? "fit-content" : "maximize"), A || Xn();
  }
  function Oo(p) {
    return !!(p != null && p.closest('button, a, input, select, textarea, [role="button"]'));
  }
  function di(p, A) {
    if (!e(Qe)) return null;
    for (const U of e(Qe).querySelectorAll("[data-snap-target]")) {
      const ie = U.getBoundingClientRect();
      if (p >= ie.left && p <= ie.right && A >= ie.top && A <= ie.bottom)
        return U.dataset.snapTarget;
    }
    return null;
  }
  function ci(p, A) {
    if (typeof window > "u") return null;
    const U = 18, ie = Math.max(72, Math.round(window.innerHeight * 0.14));
    return A <= U ? p <= window.innerWidth * 0.33 ? "top-left" : p >= window.innerWidth * 0.67 ? "top-right" : "maximize" : p <= U ? A <= ie ? "top-left" : A >= window.innerHeight - ie ? "bottom-left" : "left-half" : p >= window.innerWidth - U ? A <= ie ? "top-right" : A >= window.innerHeight - ie ? "bottom-right" : "right-half" : null;
  }
  function gi(p, A) {
    if ($(mt, p, !0), $(Tt, A, !0), !e(Cr) || x() || q() || e(pe) === "mac") {
      $(ke, null);
      return;
    }
    $(ke, di(p, A) ?? ci(p, A), !0);
  }
  function gt(p, A) {
    if (!N) return;
    const U = J() ?? fa(), ie = $r({
      ...U,
      x: p - U.width * I,
      y: A - ze
    });
    d(ie.x), c(ie.y), h(ie.width), u(ie.height), on("normal"), ee(null), N = !1, Xe = !0, Mn = p, Wn = A, Vn = d(), mn = c();
  }
  function Ze(p) {
    !p.shiftKey || L || e(wr) !== "pin" || !de() || m() || (de()(), L = !0);
  }
  function mr(p) {
    if (x() || q() || i() === "minimized" || Oo(p.target)) return;
    $(Cr, !0), L = !1, $(ke, null), $(mt, p.clientX, !0), $(Tt, p.clientY, !0), Mn = p.clientX, Wn = p.clientY, Vn = d(), mn = c(), Xe = !1, N = !1;
    const A = Gt();
    I = A.width <= 0 ? 0.5 : Math.max(0.1, Math.min(0.9, (p.clientX - A.x) / A.width)), ze = Math.max(12, Math.min(28, Math.round(p.clientY - A.y || 18))), i() === "maximized" || ee() ? (Pe = i() === "maximized" ? "maximize" : ee(), J(J() ?? fa()), N = !0) : Pe = null, Ze(p), p.currentTarget.setPointerCapture(p.pointerId);
  }
  function fr(p) {
    e(Cr) && (Ze(p), N && (Math.abs(p.clientX - Mn) > 2 || Math.abs(p.clientY - Wn) > 2) && gt(p.clientX, p.clientY), d(ar(Vn + (p.clientX - Mn), h())), c(Ka(mn + (p.clientY - Wn), u())), gi(p.clientX, p.clientY));
  }
  function Vt(p) {
    if (!e(Cr)) return;
    const A = e(ke);
    $(ke, null), $(Cr, !1), N = !1, A ? cr(A, Gt()) : Xe && Pe && e(qt) && !p.shiftKey && !L ? cr(Pe, Gt()) : ee(null), Pe = null, Xe = !1, L = !1;
    const U = p.currentTarget;
    "hasPointerCapture" in U && U.hasPointerCapture(p.pointerId) && U.releasePointerCapture(p.pointerId), window.removeEventListener("pointermove", fr), window.removeEventListener("pointerup", Vt), window.removeEventListener("pointercancel", Vt);
  }
  function gr(p, A) {
    x() || q() || i() === "maximized" || i() === "minimized" || (ee() && ee(null), A.stopPropagation(), A.preventDefault(), $(be, !0), ue = p, Lt = A.clientX, yt = A.clientY, ut = d(), dt = c(), st = h(), pt = u(), $(ke, null), window.addEventListener("pointermove", Za), window.addEventListener("pointerup", Qt), window.addEventListener("pointercancel", Qt));
  }
  function Za(p) {
    if (!e(be)) return;
    const A = p.clientX - Lt, U = p.clientY - yt;
    let ie = ut, Se = dt, rt = st, zt = pt;
    if (e(K) === "mirrored" && (ue === "e" || ue === "w")) {
      const tr = ue === "e" ? A : -A;
      rt = Math.max(F, st + tr * 2), ie = ut - (rt - st) / 2;
    } else ue.includes("e") && (rt = Math.max(F, st + A));
    ue.includes("s") && (zt = Math.max(ve, pt + U)), e(K) !== "mirrored" && ue.includes("w") && (rt = Math.max(F, st - A), ie = ut + (st - rt)), ue.includes("n") && (zt = Math.max(ve, pt - U), Se = dt + (pt - zt));
    const Ut = $r({ x: ie, y: Se, width: rt, height: zt });
    d(Ut.x), c(Ut.y), h(Ut.width), u(Ut.height);
  }
  function Qt() {
    e(be) && ($(be, !1), window.removeEventListener("pointermove", Za), window.removeEventListener("pointerup", Qt), window.removeEventListener("pointercancel", Qt));
  }
  function Yt(p) {
    var U;
    if (typeof window > "u") return;
    const A = $r({
      x: p.clientX - Math.round(h() * 0.38),
      y: p.clientY - 18,
      width: h(),
      height: u()
    });
    d(A.x), c(A.y), Vn = d(), mn = c(), Mn = p.clientX, Wn = p.clientY, $(mt, p.clientX, !0), $(Tt, p.clientY, !0), $(ke, null), Pe = null, Xe = !1, N = !1, L = !0, $(Cr, !0), window.addEventListener("pointermove", fr), window.addEventListener("pointerup", Vt), window.addEventListener("pointercancel", Vt), (U = je()) == null || U();
  }
  vn(() => {
    const p = he() ? `${he().pointerId}:${he().clientX}:${he().clientY}` : "";
    !he() || p === _t || (_t = p, Yt(he()));
  }), vn(() => {
    i() === "maximized" && ee() !== "maximize" && ee("maximize"), i() === "normal" && ee() === "maximize" && ee(null);
  });
  var br = {
    get title() {
      return n();
    },
    set title(p) {
      n(p), b();
    },
    get helpText() {
      return a();
    },
    set helpText(p = "") {
      a(p), b();
    },
    get helpPlacement() {
      return o();
    },
    set helpPlacement(p = "auto") {
      o(p), b();
    },
    get state() {
      return i();
    },
    set state(p = "normal") {
      i(p), b();
    },
    get x() {
      return d();
    },
    set x(p = 100) {
      d(p), b();
    },
    get y() {
      return c();
    },
    set y(p = 100) {
      c(p), b();
    },
    get width() {
      return h();
    },
    set width(p = 600) {
      h(p), b();
    },
    get height() {
      return u();
    },
    set height(p = 400) {
      u(p), b();
    },
    get locked() {
      return x();
    },
    set locked(p = !1) {
      x(p), b();
    },
    get chromeless() {
      return q();
    },
    set chromeless(p = !1) {
      q(p), b();
    },
    get buttonLayout() {
      return w();
    },
    set buttonLayout(p) {
      w(p), b();
    },
    get systemButtonPlacement() {
      return P();
    },
    set systemButtonPlacement(p) {
      P(p), b();
    },
    get sideResizeMode() {
      return W();
    },
    set sideResizeMode(p) {
      W(p), b();
    },
    get borderWidth() {
      return M();
    },
    set borderWidth(p) {
      M(p), b();
    },
    get borderRadius() {
      return _();
    },
    set borderRadius(p) {
      _(p), b();
    },
    get chromePadding() {
      return E();
    },
    set chromePadding(p) {
      E(p), b();
    },
    get chromeStyle() {
      return z();
    },
    set chromeStyle(p) {
      z(p), b();
    },
    get alignment() {
      return T();
    },
    set alignment(p) {
      T(p), b();
    },
    get themePreset() {
      return R();
    },
    set themePreset(p) {
      R(p), b();
    },
    get fontPreset() {
      return D();
    },
    set fontPreset(p) {
      D(p), b();
    },
    get snapRestoreOnRelease() {
      return V();
    },
    set snapRestoreOnRelease(p) {
      V(p), b();
    },
    get shiftDragAction() {
      return X();
    },
    set shiftDragAction(p) {
      X(p), b();
    },
    get zIndex() {
      return O();
    },
    set zIndex(p = 100) {
      O(p), b();
    },
    get pinned() {
      return m();
    },
    set pinned(p = !1) {
      m(p), b();
    },
    get dragSeed() {
      return he();
    },
    set dragSeed(p = null) {
      he(p), b();
    },
    get restoreFrame() {
      return J();
    },
    set restoreFrame(p = null) {
      J(p), b();
    },
    get snapTarget() {
      return ee();
    },
    set snapTarget(p = null) {
      ee(p), b();
    },
    get onClose() {
      return se();
    },
    set onClose(p) {
      se(p), b();
    },
    get onPinToggle() {
      return de();
    },
    set onPinToggle(p) {
      de(p), b();
    },
    get onConsumeDragSeed() {
      return je();
    },
    set onConsumeDragSeed(p) {
      je(p), b();
    },
    get onStateChange() {
      return _e();
    },
    set onStateChange(p) {
      _e(p), b();
    },
    get children() {
      return re();
    },
    set children(p) {
      re(p), b();
    }
  }, $n = Qu(), ya = Xt($n);
  {
    var Kn = (p) => {
      var A = Lu();
      let U;
      we(() => U = Pr(A, "", U, {
        left: `${e(Cn).x}px`,
        top: `${e(Cn).y}px`,
        width: `${e(Cn).width}px`,
        height: `${e(Cn).height}px`,
        "z-index": O() + 2
      })), G(p, A);
    };
    ge(ya, (p) => {
      e(Cn) && !q() && p(Kn);
    });
  }
  var Jn = g(ya, 2);
  {
    var xa = (p) => {
      var A = Fu();
      let U;
      Ot(A, 21, () => fe, (ie) => ie.id, (ie, Se) => {
        var rt = Bu();
        let zt;
        var Ut = l(rt);
        s(rt), we(() => {
          zt = le(rt, 1, "snap-cell svelte-1k3ojqh", null, zt, { "is-active": e(ke) === e(Se).id }), j(rt, "data-snap-target", e(Se).id), le(Ut, 1, `snap-shape shape-${e(Se).preview}`, "svelte-1k3ojqh");
        }), G(ie, rt);
      }), s(A), ni(A, (ie) => $(Qe, ie), () => e(Qe)), we(() => U = Pr(A, "", U, { "z-index": O() + 3 })), G(p, A);
    };
    ge(Jn, (p) => {
      e(Xa) && !q() && p(xa);
    });
  }
  var er = g(Jn, 2);
  let bn, ka;
  var An = l(er);
  {
    var Io = (p) => {
      var A = Ku();
      let U;
      var ie = l(A), Se = l(ie);
      {
        var rt = (vt) => {
          var Mt = Nu();
          let ct;
          var vr = l(Mt);
          tt(vr, { name: "pin" }), s(Mt), we(() => {
            ct = le(Mt, 1, St(e($e) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", ct, {
              "efs-win7-tool-button": !e($e) && e(We),
              "is-active": m(),
              active: m()
            }), j(Mt, "aria-label", m() ? "Unpin window" : "Pin window"), j(Mt, "aria-pressed", m());
          }), ae("click", Mt, function(...Zt) {
            var yr;
            (yr = de()) == null || yr.apply(this, Zt);
          }), G(vt, Mt);
        };
        ge(Se, (vt) => {
          de() && vt(rt);
        });
      }
      var zt = g(Se, 2);
      let Ut;
      var tr = l(zt);
      tt(tr, { name: "center" }), s(zt);
      var yn = g(zt, 2);
      let Qa;
      var eo = l(yn);
      {
        let vt = /* @__PURE__ */ k(() => i() === "rolled-up" ? "roll-up" : "roll-down");
        tt(eo, {
          get name() {
            return e(vt);
          }
        });
      }
      s(yn), s(ie);
      var xn = g(ie, 2);
      let to;
      var Do = l(xn, !0);
      s(xn);
      var Zn = g(xn, 2), Qn = l(Zn);
      {
        var ro = (vt) => {
          var Mt = Hu(), ct = l(Mt);
          let vr;
          var Zt = l(ct);
          tt(Zt, { name: "help" }), s(ct);
          var yr = g(ct, 2), Et = l(yr), Ar = l(Et, !0);
          s(Et);
          var hr = g(Et, 2), Br = l(hr, !0);
          s(hr), s(yr), s(Mt), we(() => {
            vr = le(
              ct,
              1,
              St(e($e) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              vr,
              {
                "efs-win7-tool-button": !e($e) && e(We),
                "is-help": !e($e) && e(We)
              }
            ), j(ct, "aria-label", e(Ft) ? "Help" : `About ${n()}`), j(ct, "title", `About ${n()}`), oe(Ar, n()), oe(Br, a());
          }), G(vt, Mt);
        };
        ge(Qn, (vt) => {
          e(Gn) && e(an) === "before" && vt(ro);
        });
      }
      var ea = g(Qn, 2);
      let Ur;
      var _a = l(ea);
      {
        var no = (vt) => {
          var Mt = Vu(), ct = Xt(Mt);
          {
            var vr = (ft) => {
              var kt = Gu();
              let or;
              var ta = l(kt);
              {
                var Sa = (ir) => {
                  {
                    let Nr = /* @__PURE__ */ k(() => Ao(e(pe)));
                    tt(ir, {
                      name: "close",
                      get variant() {
                        return e(Nr);
                      }
                    });
                  }
                };
                ge(ta, (ir) => {
                  e(We) || ir(Sa);
                });
              }
              s(kt), we(() => {
                or = le(
                  kt,
                  1,
                  St(e($e) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  or,
                  {
                    "is-close": !e($e) && e(Ft)
                  }
                ), j(kt, "aria-label", e(We) ? "Close" : "Close window");
              }), ae("click", kt, function(...ir) {
                var Nr;
                (Nr = se()) == null || Nr.apply(this, ir);
              }), G(ft, kt);
            };
            ge(ct, (ft) => {
              se() && ft(vr);
            });
          }
          var Zt = g(ct, 2);
          let yr;
          var Et = l(Zt);
          {
            var Ar = (ft) => {
              {
                let kt = /* @__PURE__ */ k(() => i() === "minimized" ? "restore" : "minimize"), or = /* @__PURE__ */ k(() => dr(e(pe), i() === "minimized"));
                tt(ft, {
                  get name() {
                    return e(kt);
                  },
                  get variant() {
                    return e(or);
                  }
                });
              }
            };
            ge(Et, (ft) => {
              e(We) || ft(Ar);
            });
          }
          s(Zt);
          var hr = g(Zt, 2);
          let Br;
          var Fr = l(hr);
          {
            var En = (ft) => {
              {
                let kt = /* @__PURE__ */ k(() => i() === "maximized" ? "restore" : "maximize"), or = /* @__PURE__ */ k(() => Ua(e(pe), i() === "maximized"));
                tt(ft, {
                  get name() {
                    return e(kt);
                  },
                  get variant() {
                    return e(or);
                  }
                });
              }
            };
            ge(Fr, (ft) => {
              e(We) || ft(En);
            });
          }
          s(hr), we(() => {
            yr = le(
              Zt,
              1,
              St(e($e) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              yr,
              {
                "is-minimize": !e($e) && e(Ft) && i() !== "minimized",
                "is-restore": !e($e) && e(Ft) && i() === "minimized"
              }
            ), j(Zt, "aria-label", e(We) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), Br = le(
              hr,
              1,
              St(e($e) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Br,
              {
                "is-maximize": !e($e) && e(Ft) && i() !== "maximized",
                "is-restore": !e($e) && e(Ft) && i() === "maximized"
              }
            ), j(hr, "aria-label", e(We) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), ae("click", Zt, () => i() === "minimized" ? on("normal") : ba()), ae("click", hr, Xn), G(vt, Mt);
        }, ao = /* @__PURE__ */ k(() => ma(e(pe))), qa = (vt) => {
          var Mt = Uu(), ct = Xt(Mt);
          let vr;
          var Zt = l(ct);
          {
            var yr = (ft) => {
              {
                let kt = /* @__PURE__ */ k(() => i() === "minimized" ? "restore" : "minimize"), or = /* @__PURE__ */ k(() => dr(e(pe), i() === "minimized"));
                tt(ft, {
                  get name() {
                    return e(kt);
                  },
                  get variant() {
                    return e(or);
                  }
                });
              }
            };
            ge(Zt, (ft) => {
              e(We) || ft(yr);
            });
          }
          s(ct);
          var Et = g(ct, 2);
          let Ar;
          var hr = l(Et);
          {
            var Br = (ft) => {
              {
                let kt = /* @__PURE__ */ k(() => i() === "maximized" ? "restore" : "maximize"), or = /* @__PURE__ */ k(() => Ua(e(pe), i() === "maximized"));
                tt(ft, {
                  get name() {
                    return e(kt);
                  },
                  get variant() {
                    return e(or);
                  }
                });
              }
            };
            ge(hr, (ft) => {
              e(We) || ft(Br);
            });
          }
          s(Et);
          var Fr = g(Et, 2);
          {
            var En = (ft) => {
              var kt = Yu();
              let or;
              var ta = l(kt);
              {
                var Sa = (ir) => {
                  {
                    let Nr = /* @__PURE__ */ k(() => Ao(e(pe)));
                    tt(ir, {
                      name: "close",
                      get variant() {
                        return e(Nr);
                      }
                    });
                  }
                };
                ge(ta, (ir) => {
                  e(We) || ir(Sa);
                });
              }
              s(kt), we(() => {
                or = le(
                  kt,
                  1,
                  St(e($e) ? "is-close" : "window-button system close close-button"),
                  "svelte-1k3ojqh",
                  or,
                  {
                    "is-close": !e($e) && e(Ft)
                  }
                ), j(kt, "aria-label", e(We) ? "Close" : "Close window");
              }), ae("click", kt, function(...ir) {
                var Nr;
                (Nr = se()) == null || Nr.apply(this, ir);
              }), G(ft, kt);
            };
            ge(Fr, (ft) => {
              se() && ft(En);
            });
          }
          we(() => {
            vr = le(
              ct,
              1,
              St(e($e) ? i() === "minimized" ? "is-restore" : "is-minimize" : "window-button system minimize-button"),
              "svelte-1k3ojqh",
              vr,
              {
                "is-minimize": !e($e) && e(Ft) && i() !== "minimized",
                "is-restore": !e($e) && e(Ft) && i() === "minimized"
              }
            ), j(ct, "aria-label", e(We) ? i() === "minimized" ? "Restore" : "Minimize" : i() === "minimized" ? "Restore window" : "Minimize window"), Ar = le(
              Et,
              1,
              St(e($e) ? i() === "maximized" ? "is-restore" : "is-maximize" : "window-button system maximize-button"),
              "svelte-1k3ojqh",
              Ar,
              {
                "is-maximize": !e($e) && e(Ft) && i() !== "maximized",
                "is-restore": !e($e) && e(Ft) && i() === "maximized"
              }
            ), j(Et, "aria-label", e(We) ? i() === "maximized" ? "Restore" : "Maximize" : i() === "maximized" ? "Restore window" : "Maximize window");
          }), ae("click", ct, () => i() === "minimized" ? on("normal") : ba()), ae("click", Et, Xn), G(vt, Mt);
        };
        ge(_a, (vt) => {
          e(ao) ? vt(no) : vt(qa, -1);
        });
      }
      s(ea);
      var oo = g(ea, 2);
      {
        var io = (vt) => {
          var Mt = Xu(), ct = l(Mt);
          let vr;
          var Zt = l(ct);
          tt(Zt, { name: "help" }), s(ct);
          var yr = g(ct, 2), Et = l(yr), Ar = l(Et, !0);
          s(Et);
          var hr = g(Et, 2), Br = l(hr, !0);
          s(hr), s(yr), s(Mt), we(() => {
            vr = le(
              ct,
              1,
              St(e($e) ? "efs-win7-tool-button" : "window-button system help-button"),
              "svelte-1k3ojqh",
              vr,
              {
                "efs-win7-tool-button": !e($e) && e(We),
                "is-help": !e($e) && e(We)
              }
            ), j(ct, "aria-label", e(Ft) ? "Help" : `About ${n()}`), j(ct, "title", `About ${n()}`), oe(Ar, n()), oe(Br, a());
          }), G(vt, Mt);
        };
        ge(oo, (vt) => {
          e(Gn) && e(an) === "after" && vt(io);
        });
      }
      s(Zn), s(A), we(
        (vt) => {
          U = le(
            A,
            1,
            St(e($e) ? "title-bar" : `window-chrome chrome-${e(at)}`),
            "svelte-1k3ojqh",
            U,
            vt
          ), j(A, "aria-label", `${n()} window controls`), Ut = le(zt, 1, St(e($e) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Ut, {
            "efs-win7-tool-button": !e($e) && e(We)
          }), Qa = le(yn, 1, St(e($e) ? "efs-win7-tool-button" : "window-button"), "svelte-1k3ojqh", Qa, {
            "efs-win7-tool-button": !e($e) && e(We),
            "is-active": i() === "rolled-up",
            active: i() === "rolled-up"
          }), j(yn, "aria-label", i() === "rolled-up" ? "Restore height" : "Roll up"), to = le(
            xn,
            1,
            St(e($e) ? "title-bar-text" : `window-title align-${e(Sr)}`),
            "svelte-1k3ojqh",
            to,
            {
              "title-bar-text": !e($e) && e(Ft)
            }
          ), j(xn, "title", n()), oe(Do, n()), Ur = le(
            ea,
            1,
            St(e($e) ? "title-bar-controls" : "window-controls system-controls"),
            "svelte-1k3ojqh",
            Ur,
            {
              "title-bar-controls": !e($e) && e(Ft)
            }
          );
        },
        [
          () => ({
            "layout-mac": !e($e) && ma(e(pe)),
            "layout-windows": !e($e) && !ma(e(pe)),
            "title-bar": !e($e) && e(Ft)
          })
        ]
      ), ae("pointerdown", A, mr), ae("pointermove", A, fr), ae("pointerup", A, Vt), _o("pointercancel", A, Vt), ae("dblclick", A, Ro), ae("click", zt, ii), ae("click", yn, Ja), Jd(ie, "clientWidth", (vt) => $(Be, vt)), Jd(Zn, "clientWidth", (vt) => $(f, vt)), G(p, A);
    };
    ge(An, (p) => {
      q() || p(Io);
    });
  }
  var v = g(An, 2);
  {
    var S = (p) => {
      var A = Ju();
      let U;
      var ie = l(A);
      La(ie, () => re() ?? zo), s(A), ni(A, (Se) => $(Ce, Se), () => e(Ce)), we(() => U = le(A, 1, "window-content svelte-1k3ojqh", null, U, { "window-body": e(We) })), G(p, A);
    };
    ge(v, (p) => {
      i() !== "rolled-up" && i() !== "minimized" && p(S);
    });
  }
  var Q = g(v, 2);
  {
    var ye = (p) => {
      var A = ua(), U = Xt(A);
      Ot(U, 16, () => B, (ie) => ie, (ie, Se) => {
        var rt = Zu();
        we(() => le(rt, 1, `resize-handle dir-${Se}`, "svelte-1k3ojqh")), ae("pointerdown", rt, (zt) => gr(Se, zt)), G(ie, rt);
      }), G(p, A);
    };
    ge(Q, (p) => {
      !q() && i() !== "maximized" && i() !== "minimized" && p(ye);
    });
  }
  return s(er), we(() => {
    bn = le(er, 1, "window-shell svelte-1k3ojqh", null, bn, {
      win7: e(We),
      "win7-theme": e($e),
      "basic7-theme": e(Bt),
      window: e(We),
      active: e(We),
      glass: e($e),
      "is-ready": e(Ge),
      "is-dragging": e(Cr),
      "is-resizing": e(be),
      "compact-controls": e(Jt),
      maximized: i() === "maximized",
      minimized: i() === "minimized",
      "rolled-up": i() === "rolled-up",
      chromeless: q()
    }), j(er, "data-layout", e($e) ? void 0 : e(pe)), j(er, "data-system-placement", e(Me)), j(er, "data-style", e($e) ? void 0 : e(at)), j(er, "data-theme", e(Pt)), j(er, "data-font", e(Wt)), j(er, "data-beam", e($e) ? void 0 : e(jt)), j(er, "data-gloss", e($e) ? void 0 : e(lr)), j(er, "data-title-tone", e($e) ? void 0 : e(Tr)), j(er, "data-title-effect", e($e) ? void 0 : e(Wr)), ka = Pr(er, "", ka, {
      "--window-border-width": `${e(nt)}px`,
      "--window-radius": `${e(Le)}px`,
      "--window-chrome-padding": `${e(xt)}px`,
      "--window-titlebar-height": `${e(Ie)}px`,
      "--window-shell-scale": `${e(Ke)}`,
      "--window-title-guard": `${e($o)}px`,
      transform: i() === "normal" || i() === "rolled-up" ? `translate(${d()}px, ${c()}px)` : void 0,
      width: i() === "normal" || i() === "rolled-up" ? `${h()}px` : void 0,
      height: i() === "normal" ? `${u()}px` : void 0,
      "z-index": O()
    });
  }), G(t, $n), At(br);
}
rn([
  "pointerdown",
  "pointermove",
  "pointerup",
  "dblclick",
  "click"
]);
Dt(
  qg,
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
var tp = /* @__PURE__ */ Z('<button type="button"></button>'), rp = /* @__PURE__ */ Z('<div class="widget-window-content svelte-k2j6ru"><!></div>'), np = /* @__PURE__ */ Z('<!> <div role="presentation"><!></div>', 1);
const ap = {
  hash: "svelte-k2j6ru",
  code: `.widget-window-backdrop.svelte-k2j6ru {position:fixed;inset:0;border:0;padding:0;background:radial-gradient(
        circle at top,
        color-mix(in srgb, var(--shell-primary, #ffffff), transparent 88%),
        transparent 28%
      ),
      color-mix(in srgb, var(--shell-panel, rgba(2, 6, 23, 0.6)), rgba(2, 6, 23, 0.56) 52%);backdrop-filter:blur(10px);cursor:default;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-backdrop.ready.svelte-k2j6ru {opacity:1;}.widget-window-layer.svelte-k2j6ru {position:relative;opacity:0;transition:opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);}.widget-window-layer.ready.svelte-k2j6ru {opacity:1;}.widget-window-content.svelte-k2j6ru {width:100%;min-width:0;min-height:0;box-sizing:border-box;padding:1rem;background:transparent;}

  @media (max-width: 47.99rem) {.widget-window-content.svelte-k2j6ru {padding:0.75rem;}
  }`
};
function sn(t, r) {
  $t(r, !0), It(t, ap);
  function n(B, F, ve, qe) {
    return { x: B, y: F, width: ve, height: qe };
  }
  let a = y(r, "title", 7), o = y(r, "helpText", 7, ""), i = y(r, "helpPlacement", 7, "auto"), d = y(r, "pinned", 7), c = y(r, "windowState", 15, "normal"), h = y(r, "dragSeed", 7, null), u = y(r, "frame", 15, null), x = y(r, "restoreFrame", 15, null), q = y(r, "snapTarget", 15, null), w = y(r, "defaultWidth", 7), P = y(r, "defaultHeight", 7), W = y(r, "defaultX", 7), M = y(r, "defaultY", 7), _ = y(r, "zIndex", 7), E = y(r, "onClose", 7), z = y(r, "onFocus", 7), T = y(r, "onPinToggle", 7), R = y(r, "onConsumeDragSeed", 7), D = y(r, "children", 7);
  const V = () => n(W(), M(), w(), P());
  let X = /* @__PURE__ */ me(null), O = /* @__PURE__ */ me(!1), m = /* @__PURE__ */ me(!1), he = /* @__PURE__ */ me(ht(Re.titleBarHeight));
  vn(() => {
    u() == null && u(V());
  });
  async function J() {
    var ke, Qe;
    if (e(O) || typeof window > "u" || (await tg(), !e(X)))
      return;
    const B = 40, F = Math.max(420, window.innerWidth - B * 2), ve = Math.max(300, window.innerHeight - B * 2), qe = Math.ceil(Math.max(e(X).scrollWidth, ((ke = e(X).firstElementChild) == null ? void 0 : ke.scrollWidth) ?? 0) + 6), Te = Math.ceil(Math.max(e(X).scrollHeight, ((Qe = e(X).firstElementChild) == null ? void 0 : Qe.scrollHeight) ?? 0) + e(he)), Ge = Math.min(F, Math.max(420, qe)), be = Math.min(ve, Math.max(300, Te));
    u({
      width: Ge,
      height: be,
      x: Math.max(B / 2, Math.round((window.innerWidth - Ge) / 2)),
      y: Math.max(B / 2, Math.round((window.innerHeight - be) / 2))
    }), $(O, !0);
  }
  Wo(() => {
    const B = requestAnimationFrame(() => {
      h() ? $(O, !0) : J(), $(m, !0);
    }), F = oi((ve) => {
      $(he, ve.titleBarHeight ?? Re.titleBarHeight, !0);
    });
    return () => {
      cancelAnimationFrame(B), F();
    };
  });
  var ee = {
    get title() {
      return a();
    },
    set title(B) {
      a(B), b();
    },
    get helpText() {
      return o();
    },
    set helpText(B = "") {
      o(B), b();
    },
    get helpPlacement() {
      return i();
    },
    set helpPlacement(B = "auto") {
      i(B), b();
    },
    get pinned() {
      return d();
    },
    set pinned(B) {
      d(B), b();
    },
    get windowState() {
      return c();
    },
    set windowState(B = "normal") {
      c(B), b();
    },
    get dragSeed() {
      return h();
    },
    set dragSeed(B = null) {
      h(B), b();
    },
    get frame() {
      return u();
    },
    set frame(B = null) {
      u(B), b();
    },
    get restoreFrame() {
      return x();
    },
    set restoreFrame(B = null) {
      x(B), b();
    },
    get snapTarget() {
      return q();
    },
    set snapTarget(B = null) {
      q(B), b();
    },
    get defaultWidth() {
      return w();
    },
    set defaultWidth(B) {
      w(B), b();
    },
    get defaultHeight() {
      return P();
    },
    set defaultHeight(B) {
      P(B), b();
    },
    get defaultX() {
      return W();
    },
    set defaultX(B) {
      W(B), b();
    },
    get defaultY() {
      return M();
    },
    set defaultY(B) {
      M(B), b();
    },
    get zIndex() {
      return _();
    },
    set zIndex(B) {
      _(B), b();
    },
    get onClose() {
      return E();
    },
    set onClose(B) {
      E(B), b();
    },
    get onFocus() {
      return z();
    },
    set onFocus(B) {
      z(B), b();
    },
    get onPinToggle() {
      return T();
    },
    set onPinToggle(B) {
      T(B), b();
    },
    get onConsumeDragSeed() {
      return R();
    },
    set onConsumeDragSeed(B) {
      R(B), b();
    },
    get children() {
      return D();
    },
    set children(B) {
      D(B), b();
    }
  }, se = np(), de = Xt(se);
  {
    var je = (B) => {
      var F = tp();
      let ve, qe;
      we(() => {
        ve = le(F, 1, "widget-window-backdrop svelte-k2j6ru", null, ve, { ready: e(m) }), j(F, "aria-label", `Close ${a()}`), qe = Pr(F, "", qe, { "z-index": _() - 1 });
      }), ae("click", F, function(...Te) {
        var Ge;
        (Ge = E()) == null || Ge.apply(this, Te);
      }), G(B, F);
    };
    ge(de, (B) => {
      !d() && c() !== "minimized" && B(je);
    });
  }
  var _e = g(de, 2);
  let re;
  var fe = l(_e);
  {
    var xe = (B) => {
      qg(B, {
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
          return d();
        },
        get zIndex() {
          return _();
        },
        get dragSeed() {
          return h();
        },
        get onClose() {
          return E();
        },
        get onConsumeDragSeed() {
          return R();
        },
        get onPinToggle() {
          return T();
        },
        get state() {
          return c();
        },
        set state(F) {
          c(F);
        },
        get x() {
          return u().x;
        },
        set x(F) {
          u(u().x = F, !0);
        },
        get y() {
          return u().y;
        },
        set y(F) {
          u(u().y = F, !0);
        },
        get width() {
          return u().width;
        },
        set width(F) {
          u(u().width = F, !0);
        },
        get height() {
          return u().height;
        },
        set height(F) {
          u(u().height = F, !0);
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
        children: (F, ve) => {
          var qe = rp(), Te = l(qe);
          La(Te, () => D() ?? zo), s(qe), ni(qe, (Ge) => $(X, Ge), () => e(X)), G(F, qe);
        },
        $$slots: { default: !0 }
      });
    };
    ge(fe, (B) => {
      u() && B(xe);
    });
  }
  return s(_e), we(() => re = le(_e, 1, "widget-window-layer svelte-k2j6ru", null, re, { ready: e(m) })), ae("pointerdown", _e, function(...B) {
    var F;
    (F = z()) == null || F.apply(this, B);
  }), G(t, se), At(ee);
}
rn(["click", "pointerdown"]);
Dt(
  sn,
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
var op = /* @__PURE__ */ Z('<div class="workspace-placeholder-slot svelte-xhbaig" role="presentation" aria-hidden="true"><div class="workspace-placeholder svelte-xhbaig"><span class="workspace-placeholder-label svelte-xhbaig"> </span></div></div>'), ip = /* @__PURE__ */ Z('<div role="presentation" aria-hidden="true"></div>'), sp = /* @__PURE__ */ Z('<!> <div role="presentation"><div class="workspace-surface svelte-xhbaig" role="presentation"><!> <!></div></div>', 1);
const lp = {
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
function ln(t, r) {
  $t(r, !0), It(t, lp);
  const n = 12, a = 24, o = 3, i = 8;
  let d = y(r, "title", 7), c = y(r, "layout", 7), h = y(r, "canvasWidth", 7), u = y(r, "compact", 7, !1), x = y(r, "editable", 7, !1), q = y(r, "zIndex", 7, 1), w = y(r, "onChange", 7), P = y(r, "onPreviewChange", 7), W = y(r, "onShiftPopoutStart", 7), M = y(r, "onFocus", 7), _ = y(r, "children", 7), E = /* @__PURE__ */ me(null), z = /* @__PURE__ */ me(!1), T = /* @__PURE__ */ me(!1), R = /* @__PURE__ */ me(null), D = /* @__PURE__ */ me(ht({ x: 0, y: 0, width: 0, height: 0 })), V = 0, X = 0, O = 0, m = 0, he = {
    col: 1,
    row: 1,
    width: o,
    height: i
  }, J = {
    col: 1,
    row: 1,
    width: o,
    height: i
  }, ee = { x: 0, y: 0, width: 0, height: 0 }, se = { x: 0, y: 0, width: 0, height: 0 }, de = "se", je = /* @__PURE__ */ k(() => e(z) || e(T)), _e = /* @__PURE__ */ k(() => e(R) ?? c());
  function re(L) {
    return h() <= 0 ? 0 : Math.round(L / (h() / n));
  }
  function fe(L) {
    return Math.round(L / a);
  }
  function xe(L, ce) {
    return Math.max(1, Math.min(n - ce + 1, L));
  }
  function B() {
    var ce;
    const L = (ce = e(E)) == null ? void 0 : ce.getBoundingClientRect();
    return L ? {
      x: L.left,
      y: L.top,
      width: L.width,
      height: L.height
    } : { x: 0, y: 0, width: 0, height: 0 };
  }
  function F() {
    return h() <= 0 ? 240 : Math.max(240, h() / n * o);
  }
  function ve() {
    return a * i;
  }
  function qe(L) {
    return !!(L != null && L.closest('button, a, input, select, textarea, label, [role="button"], [contenteditable="true"]'));
  }
  function Te(L) {
    return !!(L != null && L.closest(".widget-header"));
  }
  function Ge(L) {
    var ce;
    $(R, L, !0), (ce = P()) == null || ce(L);
  }
  function be() {
    var L;
    $(R, null), (L = P()) == null || L(null);
  }
  function ke(L) {
    var De, Ce, Be;
    if (!u() && L.shiftKey && L.button === 0 && !qe(L.target) && Te(L.target)) {
      (De = M()) == null || De(), (Ce = W()) == null || Ce({
        pointerId: L.pointerId,
        clientX: L.clientX,
        clientY: L.clientY
      }), L.preventDefault(), L.stopPropagation();
      return;
    }
    if (u() || !x() || L.button !== 0 || qe(L.target) || !Te(L.target))
      return;
    $(z, !0), V = L.clientX, X = L.clientY, he = { ...c() }, ee = B(), $(D, { ...ee }, !0), Ge({ ...c() }), L.currentTarget.setPointerCapture(L.pointerId), (Be = M()) == null || Be(), L.preventDefault(), L.stopPropagation();
  }
  function Qe(L) {
    if (!e(z)) return;
    const ce = he.width, De = {
      ...he,
      col: xe(he.col + re(L.clientX - V), ce),
      row: Math.max(1, he.row + fe(L.clientY - X))
    };
    $(
      D,
      {
        ...ee,
        x: ee.x + (L.clientX - V),
        y: ee.y + (L.clientY - X)
      },
      !0
    ), Ge(De);
  }
  function mt(L) {
    if (!e(z)) return;
    $(z, !1), L.currentTarget.releasePointerCapture(L.pointerId), e(R) && w()(e(R)), be();
  }
  function Tt(L, ce) {
    var Ce;
    if (u() || !x() || ce.button !== 0) return;
    $(T, !0), de = L, O = ce.clientX, m = ce.clientY, J = { ...c() }, se = B(), $(D, { ...se }, !0), Ge({ ...c() }), ce.currentTarget.setPointerCapture(ce.pointerId), (Ce = M()) == null || Ce(), ce.preventDefault(), ce.stopPropagation();
  }
  function _t(L) {
    if (!e(T)) return;
    const ce = re(L.clientX - O), De = fe(L.clientY - m);
    let Ce = J.col, Be = J.row, f = J.width, pe = J.height;
    de.includes("e") && (f = Math.max(o, Math.min(n - J.col + 1, J.width + ce))), de.includes("s") && (pe = Math.max(i, J.height + De)), de.includes("w") && (Ce = Math.max(1, Math.min(J.col + ce, J.col + J.width - o)), f = J.width + (J.col - Ce)), de.includes("n") && (Be = Math.max(1, Math.min(J.row + De, J.row + J.height - i)), pe = J.height + (J.row - Be));
    const Me = {
      col: xe(Ce, f),
      row: Math.max(1, Be),
      width: f,
      height: pe
    }, K = L.clientX - O, nt = L.clientY - m, Le = F(), xt = ve();
    let Ie = { ...se };
    de.includes("e") && (Ie.width = Math.max(Le, se.width + K)), de.includes("s") && (Ie.height = Math.max(xt, se.height + nt)), de.includes("w") && (Ie.width = Math.max(Le, se.width - K), Ie.x = se.x + (se.width - Ie.width)), de.includes("n") && (Ie.height = Math.max(xt, se.height - nt), Ie.y = se.y + (se.height - Ie.height)), $(D, Ie, !0), Ge(Me);
  }
  function Lt(L) {
    if (!e(T)) return;
    $(T, !1), L.currentTarget.releasePointerCapture(L.pointerId), e(R) && w()(e(R)), be();
  }
  var yt = {
    get title() {
      return d();
    },
    set title(L) {
      d(L), b();
    },
    get layout() {
      return c();
    },
    set layout(L) {
      c(L), b();
    },
    get canvasWidth() {
      return h();
    },
    set canvasWidth(L) {
      h(L), b();
    },
    get compact() {
      return u();
    },
    set compact(L = !1) {
      u(L), b();
    },
    get editable() {
      return x();
    },
    set editable(L = !1) {
      x(L), b();
    },
    get zIndex() {
      return q();
    },
    set zIndex(L = 1) {
      q(L), b();
    },
    get onChange() {
      return w();
    },
    set onChange(L) {
      w(L), b();
    },
    get onPreviewChange() {
      return P();
    },
    set onPreviewChange(L) {
      P(L), b();
    },
    get onShiftPopoutStart() {
      return W();
    },
    set onShiftPopoutStart(L) {
      W(L), b();
    },
    get onFocus() {
      return M();
    },
    set onFocus(L) {
      M(L), b();
    },
    get children() {
      return _();
    },
    set children(L) {
      _(L), b();
    }
  }, ut = sp(), dt = Xt(ut);
  {
    var st = (L) => {
      var ce = op();
      let De;
      var Ce = l(ce), Be = l(Ce), f = l(Be, !0);
      s(Be), s(Ce), s(ce), we(() => {
        De = Pr(ce, "", De, {
          "--widget-col": e(_e).col,
          "--widget-row": e(_e).row,
          "--widget-width": e(_e).width,
          "--widget-height": e(_e).height
        }), oe(f, d());
      }), G(L, ce);
    };
    ge(dt, (L) => {
      e(je) && L(st);
    });
  }
  var pt = g(dt, 2);
  let ue, Pe;
  var Xe = l(pt), N = l(Xe);
  {
    var I = (L) => {
      var ce = ua(), De = Xt(ce);
      Ot(De, 16, () => ["n", "s", "e", "w", "ne", "nw", "se", "sw"], (Ce) => Ce, (Ce, Be) => {
        var f = ip();
        we(() => le(f, 1, `resize-handle resize-${Be}`, "svelte-xhbaig")), ae("pointerdown", f, (pe) => Tt(Be, pe)), ae("pointermove", f, _t), ae("pointerup", f, Lt), _o("pointercancel", f, Lt), G(Ce, f);
      }), G(L, ce);
    };
    ge(N, (L) => {
      !u() && x() && L(I);
    });
  }
  var ze = g(N, 2);
  return La(ze, () => _() ?? zo), s(Xe), s(pt), ni(pt, (L) => $(E, L), () => e(E)), we(() => {
    ue = le(pt, 1, "workspace-item svelte-xhbaig", null, ue, {
      compact: u(),
      editable: x() && !u(),
      dragging: e(z),
      resizing: e(T),
      floating: e(je)
    }), Pe = Pr(pt, "", Pe, {
      "--widget-col": c().col,
      "--widget-row": c().row,
      "--widget-width": c().width,
      "--widget-height": c().height,
      "--floating-x": `${e(D).x}px`,
      "--floating-y": `${e(D).y}px`,
      "--floating-width": `${e(D).width}px`,
      "--floating-height": `${e(D).height}px`,
      "z-index": e(je) ? q() + 240 : q()
    });
  }), ae("pointerdown", pt, () => {
    var L;
    return (L = M()) == null ? void 0 : L();
  }), ae("pointerdown", Xe, ke), ae("pointermove", Xe, Qe), ae("pointerup", Xe, mt), _o("pointercancel", Xe, mt), G(t, ut), At(yt);
}
rn(["pointerdown", "pointermove", "pointerup"]);
Dt(
  ln,
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
var dp = /* @__PURE__ */ Z("<span> </span>");
const cp = {
  hash: "svelte-bx51m",
  code: ".pill.svelte-bx51m {display:inline-flex;align-items:center;min-height:24px;padding:0 0.65rem;border:1px solid var(--efs-border-subtle);border-radius:999px;background:color-mix(in oklab, var(--efs-bg-surface-2), transparent 5%);color:var(--efs-text-secondary);font:var(--efs-font-label);letter-spacing:0.02em;white-space:nowrap;}.pill.mono.svelte-bx51m {font-family:var(--efs-font-mono);}.pill[data-tone='accent'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-accent-primary), transparent 68%);background:color-mix(in oklab, var(--efs-accent-soft), transparent 12%);color:var(--efs-accent-strong);}.pill[data-tone='success'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-success), transparent 68%);background:color-mix(in oklab, var(--efs-state-success), transparent 88%);color:var(--efs-state-success);}.pill[data-tone='warning'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-warning), transparent 68%);background:color-mix(in oklab, var(--efs-state-warning), transparent 88%);color:var(--efs-state-warning);}.pill[data-tone='danger'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-danger), transparent 68%);background:color-mix(in oklab, var(--efs-state-danger), transparent 88%);color:var(--efs-state-danger);}.pill[data-tone='info'].svelte-bx51m {border-color:color-mix(in oklab, var(--efs-state-info), transparent 68%);background:color-mix(in oklab, var(--efs-state-info), transparent 88%);color:var(--efs-state-info);}.pill[data-tone='natural'].svelte-bx51m {border-color:var(--efs-mode-natural-border);background:var(--efs-mode-natural-bg);color:var(--efs-accent-strong);}.pill[data-tone='raw'].svelte-bx51m {border-color:var(--efs-mode-raw-border);background:var(--efs-mode-raw-bg);color:color-mix(in oklab, var(--efs-state-info), white 14%);}"
};
function wt(t, r) {
  $t(r, !0), It(t, cp);
  let n = y(r, "label", 7), a = y(r, "tone", 7, "neutral"), o = y(r, "monospaced", 7, !1);
  var i = {
    get label() {
      return n();
    },
    set label(u) {
      n(u), b();
    },
    get tone() {
      return a();
    },
    set tone(u = "neutral") {
      a(u), b();
    },
    get monospaced() {
      return o();
    },
    set monospaced(u = !1) {
      o(u), b();
    }
  }, d = dp();
  let c;
  var h = l(d, !0);
  return s(d), we(() => {
    c = le(d, 1, "pill svelte-bx51m", null, c, { mono: o() }), j(d, "data-tone", a()), oe(h, n());
  }), G(t, d), At(i);
}
Dt(wt, { label: {}, tone: {}, monospaced: {} }, [], [], { mode: "open" });
var gp = /* @__PURE__ */ Z('<div class="footer-row svelte-173e4c2"><!></div>'), vp = /* @__PURE__ */ Z('<div class="empty-state svelte-173e4c2">Facet counts will appear here after a search runs.</div>'), hp = /* @__PURE__ */ Z('<div class="empty-state svelte-173e4c2">No facets are available for the active domain.</div>'), up = /* @__PURE__ */ Z('<div class="facet-bucket svelte-173e4c2"><span class="facet-label svelte-173e4c2"> </span> <span class="facet-count svelte-173e4c2"> </span></div>'), pp = /* @__PURE__ */ Z('<section class="facet-group svelte-173e4c2"><header class="facet-group-head svelte-173e4c2"><span class="facet-name svelte-173e4c2"> </span></header> <div class="facet-buckets svelte-173e4c2"></div></section>'), wp = /* @__PURE__ */ Z('<div class="facet-groups svelte-173e4c2"></div>');
const mp = {
  hash: "svelte-173e4c2",
  code: `.facet-groups.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.8rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.facet-group.svelte-173e4c2,
  .empty-state.svelte-173e4c2 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.facet-group.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.75rem;}.facet-group-head.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;}.facet-name.svelte-173e4c2 {color:var(--shell-text);font:var(--efs-font-label);letter-spacing:0.1em;text-transform:uppercase;}.facet-buckets.svelte-173e4c2 {display:flex;flex-direction:column;gap:0.45rem;}.facet-bucket.svelte-173e4c2 {display:grid;grid-template-columns:minmax(0, 1fr) auto;gap:0.75rem;align-items:center;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.facet-label.svelte-173e4c2 {min-width:0;word-break:break-word;}.facet-count.svelte-173e4c2 {display:inline-flex;align-items:center;justify-content:center;min-width:2rem;min-height:1.9rem;padding:0 0.65rem;border-radius:999px;background:color-mix(in srgb, var(--shell-row-hover), transparent 2%);color:var(--shell-text);font-weight:700;}.empty-state.svelte-173e4c2 {min-height:8rem;display:flex;align-items:center;justify-content:center;color:var(--shell-muted);line-height:1.6;text-align:center;}.footer-row.svelte-173e4c2 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function Pl(t, r) {
  $t(r, !0), It(t, mp);
  let n = y(r, "loaded", 7), a = y(r, "facets", 7), o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), d = y(r, "open", 7, !1), c = y(r, "pinned", 7, !1), h = y(r, "onOpen", 7), u = y(r, "onTogglePin", 7), x = /* @__PURE__ */ k(() => Object.entries(a())), q = /* @__PURE__ */ k(() => o() === "card" ? e(x).slice(0, 3) : e(x));
  var w = {
    get loaded() {
      return n();
    },
    set loaded(P) {
      n(P), b();
    },
    get facets() {
      return a();
    },
    set facets(P) {
      a(P), b();
    },
    get mode() {
      return o();
    },
    set mode(P = "card") {
      o(P), b();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(P) {
      i(P), b();
    },
    get open() {
      return d();
    },
    set open(P = !1) {
      d(P), b();
    },
    get pinned() {
      return c();
    },
    set pinned(P = !1) {
      c(P), b();
    },
    get onOpen() {
      return h();
    },
    set onOpen(P) {
      h(P), b();
    },
    get onTogglePin() {
      return u();
    },
    set onTogglePin(P) {
      u(P), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get pinned() {
      return c();
    },
    get onOpen() {
      return h();
    },
    get onTogglePin() {
      return u();
    },
    footer: (W) => {
      var M = gp(), _ = l(M);
      {
        let E = /* @__PURE__ */ k(() => `${e(x).length} facet group${e(x).length === 1 ? "" : "s"}`);
        wt(_, {
          get label() {
            return e(E);
          },
          tone: "accent"
        });
      }
      s(M), G(W, M);
    },
    children: (W, M) => {
      var _ = ua(), E = Xt(_);
      {
        var z = (D) => {
          var V = vp();
          G(D, V);
        }, T = (D) => {
          var V = hp();
          G(D, V);
        }, R = (D) => {
          var V = wp();
          Ot(V, 21, () => e(q), ([X, O]) => X, (X, O) => {
            var m = /* @__PURE__ */ k(() => sv(e(O), 2));
            let he = () => e(m)[0], J = () => e(m)[1];
            var ee = pp(), se = l(ee), de = l(se), je = l(de, !0);
            s(de), s(se);
            var _e = g(se, 2);
            Ot(_e, 21, J, (re) => `${he()}:${re.value}`, (re, fe) => {
              var xe = up(), B = l(xe), F = l(B, !0);
              s(B);
              var ve = g(B, 2), qe = l(ve, !0);
              s(ve), s(xe), we(() => {
                oe(F, e(fe).label), oe(qe, e(fe).count);
              }), G(re, xe);
            }), s(_e), s(ee), we(() => oe(je, he())), G(X, ee);
          }), s(V), G(D, V);
        };
        ge(E, (D) => {
          n() ? e(x).length === 0 ? D(T, 1) : D(R, -1) : D(z);
        });
      }
      G(W, _);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(w);
}
Dt(
  Pl,
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
var fp = /* @__PURE__ */ Z('<div class="footer-row svelte-11gg2b4"><span class="footer-copy svelte-11gg2b4"><!></span></div>'), bp = /* @__PURE__ */ Z('<div class="empty-state svelte-11gg2b4">Loading workspace discovery data…</div>'), yp = /* @__PURE__ */ Z('<div class="empty-state svelte-11gg2b4">Search results will appear here.</div>'), xp = /* @__PURE__ */ Z('<div class="empty-state svelte-11gg2b4">No results found for the current filters.</div>'), kp = /* @__PURE__ */ Z('<article class="result-row svelte-11gg2b4"><div class="result-header svelte-11gg2b4"><strong class="result-title svelte-11gg2b4"> </strong> <!></div> <div class="result-meta svelte-11gg2b4"> </div></article>'), _p = /* @__PURE__ */ Z('<div class="result-list svelte-11gg2b4"></div>');
const qp = {
  hash: "svelte-11gg2b4",
  code: `.result-list.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(30rem, 58vh);overflow:auto;padding-right:0.1rem;}.result-row.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.result-row.svelte-11gg2b4 {display:flex;flex-direction:column;gap:0.5rem;padding:0.95rem 1rem;}.result-header.svelte-11gg2b4 {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;}.result-title.svelte-11gg2b4 {color:var(--shell-text);line-height:1.45;word-break:break-word;}.result-meta.svelte-11gg2b4,
  .footer-copy.svelte-11gg2b4,
  .empty-state.svelte-11gg2b4 {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.empty-state.svelte-11gg2b4 {min-height:8rem;display:flex;align-items:center;justify-content:center;text-align:center;}.footer-row.svelte-11gg2b4 {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}`
};
function zl(t, r) {
  $t(r, !0), It(t, qp);
  let n = y(r, "loaded", 7), a = y(r, "loading", 7), o = y(r, "searchResults", 7), i = y(r, "mode", 7, "card"), d = y(r, "dataTestid", 7), c = y(r, "open", 7, !1), h = y(r, "pinned", 7, !1), u = y(r, "onOpen", 7), x = y(r, "onTogglePin", 7), q = /* @__PURE__ */ k(() => i() === "card" ? o().slice(0, 7) : o());
  function w(M) {
    return String(M.summary.logicalPath ?? M.summary.username ?? M.summary.name ?? M.id);
  }
  function P(M) {
    return String(M.summary.mime ?? M.summary.roleId ?? M.id);
  }
  var W = {
    get loaded() {
      return n();
    },
    set loaded(M) {
      n(M), b();
    },
    get loading() {
      return a();
    },
    set loading(M) {
      a(M), b();
    },
    get searchResults() {
      return o();
    },
    set searchResults(M) {
      o(M), b();
    },
    get mode() {
      return i();
    },
    set mode(M = "card") {
      i(M), b();
    },
    get dataTestid() {
      return d();
    },
    set dataTestid(M) {
      d(M), b();
    },
    get open() {
      return c();
    },
    set open(M = !1) {
      c(M), b();
    },
    get pinned() {
      return h();
    },
    set pinned(M = !1) {
      h(M), b();
    },
    get onOpen() {
      return u();
    },
    set onOpen(M) {
      u(M), b();
    },
    get onTogglePin() {
      return x();
    },
    set onTogglePin(M) {
      x(M), b();
    }
  };
  return nn(t, {
    eyebrow: "Results",
    title: "Matched records",
    description: "Browse the strongest hits from the current search and inspect their routing or identity metadata.",
    get mode() {
      return i();
    },
    get dataTestid() {
      return d();
    },
    get open() {
      return c();
    },
    get pinned() {
      return h();
    },
    get onOpen() {
      return u();
    },
    get onTogglePin() {
      return x();
    },
    footer: (_) => {
      var E = fp(), z = l(E), T = l(z);
      {
        var R = (V) => {
          var X = Vr();
          we(() => oe(X, `Showing ${e(q).length ?? ""} of ${o().length ?? ""} matches.`)), G(V, X);
        }, D = (V) => {
          var X = Vr();
          we(() => oe(X, `${o().length ?? ""} total result${o().length === 1 ? "" : "s"}.`)), G(V, X);
        };
        ge(T, (V) => {
          o().length > e(q).length ? V(R) : V(D, -1);
        });
      }
      s(z), s(E), G(_, E);
    },
    children: (_, E) => {
      var z = ua(), T = Xt(z);
      {
        var R = (O) => {
          var m = bp();
          G(O, m);
        }, D = (O) => {
          var m = yp();
          G(O, m);
        }, V = (O) => {
          var m = xp();
          G(O, m);
        }, X = (O) => {
          var m = _p();
          Ot(m, 21, () => e(q), (he) => he.id, (he, J) => {
            var ee = kp(), se = l(ee), de = l(se), je = l(de, !0);
            s(de);
            var _e = g(de, 2);
            {
              var re = (B) => {
                {
                  let F = /* @__PURE__ */ k(() => String(e(J).summary.workspaceArea));
                  wt(B, {
                    get label() {
                      return e(F);
                    },
                    tone: "natural"
                  });
                }
              };
              ge(_e, (B) => {
                e(J).summary.workspaceArea && B(re);
              });
            }
            s(se);
            var fe = g(se, 2), xe = l(fe, !0);
            s(fe), s(ee), we(
              (B, F) => {
                oe(je, B), oe(xe, F);
              },
              [
                () => w(e(J)),
                () => P(e(J))
              ]
            ), G(he, ee);
          }), s(m), G(O, m);
        };
        ge(T, (O) => {
          a() && !n() ? O(R) : n() ? o().length === 0 ? O(V, 2) : O(X, -1) : O(D, 1);
        });
      }
      G(_, z);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(W);
}
Dt(
  zl,
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
var Sp = /* @__PURE__ */ Z('<div class="footer-row svelte-sveo96"><!> <span class="footer-copy svelte-sveo96">Press Enter inside the search field to run the query.</span></div>'), Tp = /* @__PURE__ */ Z('<div class="search-layout svelte-sveo96"><div class="field-stack svelte-sveo96"><label class="svelte-sveo96">Domain</label> <select class="svelte-sveo96"><option>Workspace resources</option><option>System users</option><option>System roles</option></select></div> <div class="field-stack field-grow svelte-sveo96"><label class="svelte-sveo96">Search query</label> <input type="search" placeholder="routes, components, users, roles..." class="svelte-sveo96"/></div> <button class="primary-action svelte-sveo96" type="button"> </button></div>');
const jp = {
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
function Ml(t, r) {
  const n = Di();
  $t(r, !0), It(t, jp);
  let a = y(r, "query", 15), o = y(r, "entity", 7), i = y(r, "loading", 7), d = y(r, "mode", 7, "card"), c = y(r, "dataTestid", 7), h = y(r, "open", 7, !1), u = y(r, "pinned", 7, !1), x = y(r, "onOpen", 7), q = y(r, "onTogglePin", 7), w = y(r, "onSearch", 7), P = y(r, "onEntityChange", 7);
  function W(_) {
    switch (_) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  var M = {
    get query() {
      return a();
    },
    set query(_) {
      a(_), b();
    },
    get entity() {
      return o();
    },
    set entity(_) {
      o(_), b();
    },
    get loading() {
      return i();
    },
    set loading(_) {
      i(_), b();
    },
    get mode() {
      return d();
    },
    set mode(_ = "card") {
      d(_), b();
    },
    get dataTestid() {
      return c();
    },
    set dataTestid(_) {
      c(_), b();
    },
    get open() {
      return h();
    },
    set open(_ = !1) {
      h(_), b();
    },
    get pinned() {
      return u();
    },
    set pinned(_ = !1) {
      u(_), b();
    },
    get onOpen() {
      return x();
    },
    set onOpen(_) {
      x(_), b();
    },
    get onTogglePin() {
      return q();
    },
    set onTogglePin(_) {
      q(_), b();
    },
    get onSearch() {
      return w();
    },
    set onSearch(_) {
      w(_), b();
    },
    get onEntityChange() {
      return P();
    },
    set onEntityChange(_) {
      P(_), b();
    }
  };
  return nn(t, {
    eyebrow: "Discovery",
    title: "Search the control plane",
    description: "Query workspace resources and system records from a single launcher widget.",
    get mode() {
      return d();
    },
    get dataTestid() {
      return c();
    },
    get open() {
      return h();
    },
    get pinned() {
      return u();
    },
    get onOpen() {
      return x();
    },
    get onTogglePin() {
      return q();
    },
    footer: (E) => {
      var z = Sp(), T = l(z);
      {
        let R = /* @__PURE__ */ k(() => W(o()));
        wt(T, {
          get label() {
            return e(R);
          },
          tone: "accent"
        });
      }
      jr(2), s(z), G(E, z);
    },
    children: (E, z) => {
      var T = Tp(), R = l(T), D = l(R), V = g(D, 2), X = l(V);
      X.value = X.__value = "public_workspace_files";
      var O = g(X);
      O.value = O.__value = "system_users";
      var m = g(O);
      m.value = m.__value = "system_roles", s(V);
      var he;
      kr(V), s(R);
      var J = g(R, 2), ee = l(J), se = g(ee, 2);
      bt(se), s(J);
      var de = g(J, 2), je = l(de, !0);
      s(de), s(T), we(() => {
        j(D, "for", `${n}-entity`), j(V, "id", `${n}-entity`), he !== (he = o()) && (V.value = (V.__value = o()) ?? "", ur(V, o())), j(ee, "for", `${n}-query`), j(se, "id", `${n}-query`), de.disabled = i(), oe(je, i() ? "Searching…" : "Search");
      }), ae("change", V, (_e) => P()(_e.currentTarget.value)), ae("keydown", se, (_e) => _e.key === "Enter" && w()()), Pn(se, a), ae("click", de, function(..._e) {
        var re;
        (re = w()) == null || re.apply(this, _e);
      }), G(E, T);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(M);
}
rn(["change", "keydown", "click"]);
Dt(
  Ml,
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
var Pp = /* @__PURE__ */ Z('<div class="widget-footer-row svelte-1angecb"><span class="widget-hint svelte-1angecb"> </span> <!></div>'), zp = /* @__PURE__ */ Z("<div> </div>"), Mp = /* @__PURE__ */ Z('<div><div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role id</label> <input type="text" placeholder="member_auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack svelte-1angecb"><label class="svelte-1angecb">Role name</label> <input type="text" placeholder="Member Auditor" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Description</label> <input type="text" placeholder="Can inspect decoded content and reports" autocomplete="off" class="svelte-1angecb"/></div> <div class="field-stack field-span-full svelte-1angecb"><label class="svelte-1angecb">Entitlements</label> <input type="text" placeholder="NATURAL_VIEW, RAW_VIEW" autocomplete="off" class="svelte-1angecb"/></div></div> <div class="action-row svelte-1angecb"><button class="primary-action svelte-1angecb" type="button"> </button> <span class="meta-copy svelte-1angecb">Operator-only roles remain excluded from assignment.</span></div> <!>', 1);
const Wp = {
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
function Wl(t, r) {
  const n = Di();
  $t(r, !0), It(t, Wp);
  let a = y(r, "roles", 7), o = y(r, "form", 15), i = y(r, "result", 7), d = y(r, "busy", 7), c = y(r, "mode", 7, "card"), h = y(r, "dataTestid", 7), u = y(r, "open", 7, !1), x = y(r, "pinned", 7, !1), q = y(r, "onOpen", 7), w = y(r, "onTogglePin", 7), P = y(r, "onSubmit", 7), W = /* @__PURE__ */ k(() => a().filter((_) => !_.system).length);
  var M = {
    get roles() {
      return a();
    },
    set roles(_) {
      a(_), b();
    },
    get form() {
      return o();
    },
    set form(_) {
      o(_), b();
    },
    get result() {
      return i();
    },
    set result(_) {
      i(_), b();
    },
    get busy() {
      return d();
    },
    set busy(_) {
      d(_), b();
    },
    get mode() {
      return c();
    },
    set mode(_ = "card") {
      c(_), b();
    },
    get dataTestid() {
      return h();
    },
    set dataTestid(_) {
      h(_), b();
    },
    get open() {
      return u();
    },
    set open(_ = !1) {
      u(_), b();
    },
    get pinned() {
      return x();
    },
    set pinned(_ = !1) {
      x(_), b();
    },
    get onOpen() {
      return q();
    },
    set onOpen(_) {
      q(_), b();
    },
    get onTogglePin() {
      return w();
    },
    set onTogglePin(_) {
      w(_), b();
    },
    get onSubmit() {
      return P();
    },
    set onSubmit(_) {
      P(_), b();
    }
  };
  return nn(t, {
    eyebrow: "Create role",
    title: "Add a custom tenant role",
    description: "Compose entitlements into reusable role presets and keep provisioning fast.",
    get mode() {
      return c();
    },
    get dataTestid() {
      return h();
    },
    get open() {
      return u();
    },
    get pinned() {
      return x();
    },
    get onOpen() {
      return q();
    },
    get onTogglePin() {
      return w();
    },
    footer: (E) => {
      var z = Pp(), T = l(z), R = l(T);
      s(T);
      var D = g(T, 2);
      wt(D, { label: "comma-separated entitlements", tone: "info" }), s(z), we(() => oe(R, `${e(W) ?? ""} custom roles configured.`)), G(E, z);
    },
    children: (E, z) => {
      var T = Mp(), R = Xt(T);
      let D;
      var V = l(R), X = l(V), O = g(X, 2);
      bt(O), s(V);
      var m = g(V, 2), he = l(m), J = g(he, 2);
      bt(J), s(m);
      var ee = g(m, 2), se = l(ee), de = g(se, 2);
      bt(de), s(ee);
      var je = g(ee, 2), _e = l(je), re = g(_e, 2);
      bt(re), s(je), s(R);
      var fe = g(R, 2), xe = l(fe), B = l(xe, !0);
      s(xe), jr(2), s(fe);
      var F = g(fe, 2);
      {
        var ve = (qe) => {
          var Te = zp(), Ge = l(Te, !0);
          s(Te), we(() => {
            le(Te, 1, St(i().error ? "flash-error" : "notice")), oe(Ge, i().message);
          }), G(qe, Te);
        };
        ge(F, (qe) => {
          i() && qe(ve);
        });
      }
      we(() => {
        D = le(R, 1, "form-grid svelte-1angecb", null, D, { "form-grid-window": c() === "window" }), j(X, "for", `${n}-role-id`), j(O, "id", `${n}-role-id`), j(he, "for", `${n}-role-name`), j(J, "id", `${n}-role-name`), j(se, "for", `${n}-role-description`), j(de, "id", `${n}-role-description`), j(_e, "for", `${n}-role-entitlements`), j(re, "id", `${n}-role-entitlements`), xe.disabled = d(), oe(B, d() ? "Creating…" : "Create role");
      }), Pn(O, () => o().id, (qe) => o(o().id = qe, !0)), Pn(J, () => o().name, (qe) => o(o().name = qe, !0)), Pn(de, () => o().description, (qe) => o(o().description = qe, !0)), Pn(re, () => o().entitlements, (qe) => o(o().entitlements = qe, !0)), ae("click", xe, function(...qe) {
        var Te;
        (Te = P()) == null || Te.apply(this, qe);
      }), G(E, T);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(M);
}
rn(["click"]);
Dt(
  Wl,
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
var Cp = /* @__PURE__ */ Z('<div class="widget-footer-row svelte-yr1mcc"><span class="widget-hint svelte-yr1mcc">Leave the login key blank to generate one automatically.</span> <!></div>'), $p = /* @__PURE__ */ Z("<option> </option>"), Ap = /* @__PURE__ */ Z("<div> </div>"), Ep = /* @__PURE__ */ Z('<div><div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Username</label> <input type="text" placeholder="member-jane" autocomplete="username" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Display name</label> <input type="text" placeholder="Jane Doe" autocomplete="name" class="svelte-yr1mcc"/></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Tenant role</label> <select class="svelte-yr1mcc"></select></div> <div class="field-stack svelte-yr1mcc"><label class="svelte-yr1mcc">Custom login key</label> <input type="text" placeholder="leave blank to generate" autocomplete="off" class="svelte-yr1mcc"/></div></div> <div class="action-row svelte-yr1mcc"><button class="primary-action svelte-yr1mcc" type="button"> </button> <span class="meta-copy svelte-yr1mcc"> </span></div> <!>', 1);
const Rp = {
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
function Cl(t, r) {
  const n = Di();
  $t(r, !0), It(t, Rp);
  let a = y(r, "roles", 7), o = y(r, "form", 15), i = y(r, "result", 7), d = y(r, "actualRole", 7), c = y(r, "busy", 7), h = y(r, "mode", 7, "card"), u = y(r, "dataTestid", 7), x = y(r, "open", 7, !1), q = y(r, "pinned", 7, !1), w = y(r, "onOpen", 7), P = y(r, "onTogglePin", 7), W = y(r, "onSubmit", 7), M = /* @__PURE__ */ k(() => a().filter((E) => !E.operatorOnly));
  var _ = {
    get roles() {
      return a();
    },
    set roles(E) {
      a(E), b();
    },
    get form() {
      return o();
    },
    set form(E) {
      o(E), b();
    },
    get result() {
      return i();
    },
    set result(E) {
      i(E), b();
    },
    get actualRole() {
      return d();
    },
    set actualRole(E) {
      d(E), b();
    },
    get busy() {
      return c();
    },
    set busy(E) {
      c(E), b();
    },
    get mode() {
      return h();
    },
    set mode(E = "card") {
      h(E), b();
    },
    get dataTestid() {
      return u();
    },
    set dataTestid(E) {
      u(E), b();
    },
    get open() {
      return x();
    },
    set open(E = !1) {
      x(E), b();
    },
    get pinned() {
      return q();
    },
    set pinned(E = !1) {
      q(E), b();
    },
    get onOpen() {
      return w();
    },
    set onOpen(E) {
      w(E), b();
    },
    get onTogglePin() {
      return P();
    },
    set onTogglePin(E) {
      P(E), b();
    },
    get onSubmit() {
      return W();
    },
    set onSubmit(E) {
      W(E), b();
    }
  };
  return nn(t, {
    eyebrow: "Create user",
    title: "Provision a new login key",
    description: "Create a tenant account, assign a role, and issue a credential without leaving the dashboard.",
    get mode() {
      return h();
    },
    get dataTestid() {
      return u();
    },
    get open() {
      return x();
    },
    get pinned() {
      return q();
    },
    get onOpen() {
      return w();
    },
    get onTogglePin() {
      return P();
    },
    footer: (z) => {
      var T = Cp(), R = g(l(T), 2);
      {
        let D = /* @__PURE__ */ k(() => `actual ${d()}`);
        wt(R, {
          get label() {
            return e(D);
          },
          tone: "accent",
          monospaced: !0
        });
      }
      s(T), G(z, T);
    },
    children: (z, T) => {
      var R = Ep(), D = Xt(R);
      let V;
      var X = l(D), O = l(X), m = g(O, 2);
      bt(m), s(X);
      var he = g(X, 2), J = l(he), ee = g(J, 2);
      bt(ee), s(he);
      var se = g(he, 2), de = l(se), je = g(de, 2);
      Ot(je, 21, () => e(M), (be) => be.id, (be, ke) => {
        var Qe = $p(), mt = l(Qe, !0);
        s(Qe);
        var Tt = {};
        we(() => {
          oe(mt, e(ke).name), Tt !== (Tt = e(ke).id) && (Qe.value = (Qe.__value = e(ke).id) ?? "");
        }), G(be, Qe);
      }), s(je), s(se);
      var _e = g(se, 2), re = l(_e), fe = g(re, 2);
      bt(fe), s(_e), s(D);
      var xe = g(D, 2), B = l(xe), F = l(B, !0);
      s(B);
      var ve = g(B, 2), qe = l(ve);
      s(ve), s(xe);
      var Te = g(xe, 2);
      {
        var Ge = (be) => {
          var ke = Ap(), Qe = l(ke, !0);
          s(ke), we(() => {
            le(ke, 1, St(i().error ? "flash-error" : "notice")), oe(Qe, i().message);
          }), G(be, ke);
        };
        ge(Te, (be) => {
          i() && be(Ge);
        });
      }
      we(() => {
        V = le(D, 1, "form-grid svelte-yr1mcc", null, V, { "form-grid-window": h() === "window" }), j(O, "for", `${n}-username`), j(m, "id", `${n}-username`), j(J, "for", `${n}-name`), j(ee, "id", `${n}-name`), j(de, "for", `${n}-role`), j(je, "id", `${n}-role`), j(re, "for", `${n}-key`), j(fe, "id", `${n}-key`), B.disabled = c(), oe(F, c() ? "Creating…" : "Create user"), oe(qe, `${e(M).length ?? ""} assignable roles`);
      }), Pn(m, () => o().username, (be) => o(o().username = be, !0)), Pn(ee, () => o().name, (be) => o(o().name = be, !0)), dg(je, () => o().roleId, (be) => o(o().roleId = be, !0)), Pn(fe, () => o().loginKey, (be) => o(o().loginKey = be, !0)), ae("click", B, function(...be) {
        var ke;
        (ke = W()) == null || ke.apply(this, be);
      }), G(z, R);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(_);
}
rn(["click"]);
Dt(
  Cl,
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
var Op = /* @__PURE__ */ Z('<div class="footer-row svelte-13dkq1y"><div class="context-strip svelte-13dkq1y"><!> <!></div></div>'), Ip = /* @__PURE__ */ Z('<div class="empty-state svelte-13dkq1y">No alternate display modes are available for this session.</div>'), Dp = /* @__PURE__ */ Z('<button class="mode-button svelte-13dkq1y" type="button"><span class="mode-label svelte-13dkq1y"> </span> <span class="mode-copy svelte-13dkq1y"> </span></button>'), Lp = /* @__PURE__ */ Z('<div class="mode-grid svelte-13dkq1y"></div>'), Bp = /* @__PURE__ */ Z('<span class="detail-chip svelte-13dkq1y"> </span>'), Fp = /* @__PURE__ */ Z('<span class="detail-chip svelte-13dkq1y"> </span>'), Np = /* @__PURE__ */ Z('<div class="detail-grid svelte-13dkq1y"><section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Effective entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section> <section class="detail-card svelte-13dkq1y"><h3 class="detail-title svelte-13dkq1y">Actual entitlements</h3> <div class="chip-wrap svelte-13dkq1y"></div></section></div>'), Hp = /* @__PURE__ */ Z("<!> <!>", 1);
const Gp = {
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
function $l(t, r) {
  $t(r, !0), It(t, Gp);
  let n = y(r, "user", 7), a = y(r, "busy", 7), o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), d = y(r, "open", 7, !1), c = y(r, "pinned", 7, !1), h = y(r, "onOpen", 7), u = y(r, "onTogglePin", 7), x = y(r, "onChange", 7);
  var q = {
    get user() {
      return n();
    },
    set user(w) {
      n(w), b();
    },
    get busy() {
      return a();
    },
    set busy(w) {
      a(w), b();
    },
    get mode() {
      return o();
    },
    set mode(w = "card") {
      o(w), b();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(w) {
      i(w), b();
    },
    get open() {
      return d();
    },
    set open(w = !1) {
      d(w), b();
    },
    get pinned() {
      return c();
    },
    set pinned(w = !1) {
      c(w), b();
    },
    get onOpen() {
      return h();
    },
    set onOpen(w) {
      h(w), b();
    },
    get onTogglePin() {
      return u();
    },
    set onTogglePin(w) {
      u(w), b();
    },
    get onChange() {
      return x();
    },
    set onChange(w) {
      x(w), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get pinned() {
      return c();
    },
    get onOpen() {
      return h();
    },
    get onTogglePin() {
      return u();
    },
    footer: (P) => {
      var W = ua(), M = Xt(W);
      {
        var _ = (E) => {
          var z = Op(), T = l(z), R = l(T);
          {
            let V = /* @__PURE__ */ k(() => `actual ${n().actualRole}`);
            wt(R, {
              get label() {
                return e(V);
              },
              tone: "accent",
              monospaced: !0
            });
          }
          var D = g(R, 2);
          {
            let V = /* @__PURE__ */ k(() => `effective ${n().role}`);
            wt(D, {
              get label() {
                return e(V);
              },
              tone: "info",
              monospaced: !0
            });
          }
          s(T), s(z), G(E, z);
        };
        ge(M, (E) => {
          n() && E(_);
        });
      }
      G(P, W);
    },
    children: (P, W) => {
      var M = Hp(), _ = Xt(M);
      {
        var E = (D) => {
          var V = Ip();
          G(D, V);
        }, z = (D) => {
          var V = Lp();
          Ot(V, 20, () => {
            var X;
            return ((X = n()) == null ? void 0 : X.availableDisplayModes) ?? [];
          }, (X) => X, (X, O) => {
            var m = Dp(), he = l(m), J = l(he, !0);
            s(he);
            var ee = g(he, 2), se = l(ee, !0);
            s(ee), s(m), we(() => {
              var de, je, _e;
              j(m, "data-active", O === ((de = n()) == null ? void 0 : de.role)), m.disabled = a(), oe(J, O), oe(se, O === ((je = n()) == null ? void 0 : je.actualRole) ? "admin baseline" : O === ((_e = n()) == null ? void 0 : _e.role) ? "active context" : "switch context");
            }), ae("click", m, () => x()(O)), G(X, m);
          }), s(V), G(D, V);
        };
        ge(_, (D) => {
          var V;
          (((V = n()) == null ? void 0 : V.availableDisplayModes) ?? []).length === 0 ? D(E) : D(z, -1);
        });
      }
      var T = g(_, 2);
      {
        var R = (D) => {
          var V = Np(), X = l(V), O = g(l(X), 2);
          Ot(O, 20, () => n().entitlements ?? [], (J) => J, (J, ee) => {
            var se = Bp(), de = l(se, !0);
            s(se), we(() => oe(de, ee)), G(J, se);
          }), s(O), s(X);
          var m = g(X, 2), he = g(l(m), 2);
          Ot(he, 20, () => n().actualEntitlements ?? [], (J) => J, (J, ee) => {
            var se = Fp(), de = l(se, !0);
            s(se), we(() => oe(de, ee)), G(J, se);
          }), s(he), s(m), s(V), G(D, V);
        };
        ge(T, (D) => {
          o() === "window" && n() && D(R);
        });
      }
      G(P, M);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(q);
}
rn(["click"]);
Dt(
  $l,
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
var Vp = /* @__PURE__ */ Z('<div class="inline-help svelte-15n0qxd"><button class="inline-help-button svelte-15n0qxd" type="button"><!></button> <div class="inline-help-tooltip svelte-15n0qxd" role="tooltip"><strong class="svelte-15n0qxd"> </strong> <span class="svelte-15n0qxd"> </span></div></div>');
const Yp = {
  hash: "svelte-15n0qxd",
  code: `.inline-help.svelte-15n0qxd {position:relative;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;}.inline-help-button.svelte-15n0qxd {display:inline-flex;align-items:center;justify-content:center;width:1.65rem;height:1.65rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent 62%),
      color-mix(in srgb, var(--shell-surface), transparent 2%);color:color-mix(in srgb, var(--shell-text), transparent 18%);cursor:help;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 6px 16px rgba(0, 0, 0, 0.14);transition:border-color 140ms ease,
      color 140ms ease,
      transform 140ms ease,
      box-shadow 140ms ease;}.inline-help-button.svelte-15n0qxd:hover,
  .inline-help-button.svelte-15n0qxd:focus-visible {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 46%);color:var(--shell-text-strong);box-shadow:var(--shell-focus-ring);}.inline-help-button.svelte-15n0qxd .app-icon {width:0.8rem;height:0.8rem;}.inline-help-tooltip.svelte-15n0qxd {position:absolute;top:calc(100% + 0.65rem);z-index:12;display:flex;flex-direction:column;gap:0.35rem;width:min(19rem, calc(100vw - 2rem));padding:0.8rem 0.9rem;border:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-radius:16px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 28%),
      color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);box-shadow:0 22px 44px rgba(0, 0, 0, 0.22);opacity:0;pointer-events:none;transform:translateY(-0.35rem);transition:opacity 140ms ease,
      transform 140ms ease;}.inline-help[data-align='right'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd) {right:0;}.inline-help[data-align='left'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd) {left:0;}.inline-help-tooltip.svelte-15n0qxd::before {content:'';position:absolute;top:-0.42rem;width:0.75rem;height:0.75rem;border-top:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);border-left:1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);background:color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);transform:rotate(45deg);}.inline-help[data-align='right'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd)::before {right:0.9rem;}.inline-help[data-align='left'].svelte-15n0qxd .inline-help-tooltip:where(.svelte-15n0qxd)::before {left:0.9rem;}.inline-help-tooltip.svelte-15n0qxd strong:where(.svelte-15n0qxd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.inline-help-tooltip.svelte-15n0qxd span:where(.svelte-15n0qxd) {color:color-mix(in srgb, var(--shell-text), transparent 18%);font:var(--efs-font-body-sm);line-height:1.55;}.inline-help.svelte-15n0qxd:hover .inline-help-tooltip:where(.svelte-15n0qxd),
  .inline-help.svelte-15n0qxd:focus-within .inline-help-tooltip:where(.svelte-15n0qxd) {opacity:1;transform:translateY(0);}`
};
function ga(t, r) {
  $t(r, !0), It(t, Yp);
  let n = y(r, "title", 7), a = y(r, "text", 7), o = y(r, "align", 7, "right");
  var i = {
    get title() {
      return n();
    },
    set title(W) {
      n(W), b();
    },
    get text() {
      return a();
    },
    set text(W) {
      a(W), b();
    },
    get align() {
      return o();
    },
    set align(W = "right") {
      o(W), b();
    }
  }, d = Vp(), c = l(d), h = l(c);
  tt(h, { name: "help" }), s(c);
  var u = g(c, 2), x = l(u), q = l(x, !0);
  s(x);
  var w = g(x, 2), P = l(w, !0);
  return s(w), s(u), s(d), we(() => {
    j(d, "data-align", o()), j(c, "aria-label", `About ${n()}`), j(c, "title", `About ${n()}`), oe(q, n()), oe(P, a());
  }), G(t, d), At(i);
}
Dt(ga, { title: {}, text: {}, align: {} }, [], [], { mode: "open" });
var Up = /* @__PURE__ */ Z('<div class="footer-row svelte-1rru5q2"><div class="footer-pills svelte-1rru5q2"><!> <!> <!> <!> <!></div> <div class="footer-actions svelte-1rru5q2"><button class="prefs-button svelte-1rru5q2" type="button">Revert</button> <button class="prefs-button svelte-1rru5q2" type="button">Defaults</button> <button class="prefs-button is-primary svelte-1rru5q2" type="button">Apply</button></div></div>'), Xp = /* @__PURE__ */ Z(`<div class="prefs-layout svelte-1rru5q2"><div class="prefs-copy svelte-1rru5q2"><div class="prefs-copy-main svelte-1rru5q2"><p class="svelte-1rru5q2">Move dock behavior out of the window manager and stage it here. This sheet controls how
          pinned admin tools reveal labels, how wide or compact each button feels, and whether the
          rail is available across the rest of the site.</p></div> <div class="prefs-copy-pills svelte-1rru5q2"><!> <!></div></div> <section class="preview-stage svelte-1rru5q2" aria-label="Pinned dock preview"><div class="preview-head svelte-1rru5q2"><div><span class="preview-kicker svelte-1rru5q2">Preview only</span> <h4 class="svelte-1rru5q2">Dock label reveal and button shape</h4></div> <button class="prefs-button is-primary svelte-1rru5q2" type="button">Apply</button></div> <div class="preview-surface svelte-1rru5q2"><div class="preview-canvas svelte-1rru5q2"><div class="preview-route-card svelte-1rru5q2"><span class="preview-route-kicker svelte-1rru5q2">Page shell</span> <strong class="svelte-1rru5q2">Any route can host pinned tools</strong> <p class="svelte-1rru5q2">Use the global dock toggle to mirror pinned admin tools outside the admin workspace.</p></div> <div class="preview-dock svelte-1rru5q2"><div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Windows</span> <button class="preview-dock-button is-active svelte-1rru5q2" type="button" aria-label="Windows"><!></button> <span class="preview-dock-label svelte-1rru5q2">Windows</span></div> <div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Search</span> <button class="preview-dock-button svelte-1rru5q2" type="button" aria-label="Search"><!></button> <span class="preview-dock-label svelte-1rru5q2">Search</span></div> <div class="preview-dock-item svelte-1rru5q2"><span class="preview-dock-popout svelte-1rru5q2">Modes</span> <button class="preview-dock-button svelte-1rru5q2" type="button" aria-label="Modes"><!></button> <span class="preview-dock-label svelte-1rru5q2">Modes</span></div></div></div></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Presence</span> <h4 class="svelte-1rru5q2">Where the dock is allowed to appear</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><label class="field-toggle field-toggle-feature svelte-1rru5q2"><input type="checkbox" class="svelte-1rru5q2"/> <span>Show pinned admin tools on every page, not just inside the admin workspace.</span></label></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Labels</span> <h4 class="svelte-1rru5q2">How titles reveal around dock buttons</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><div class="prefs-grid svelte-1rru5q2"><div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2">Dock labels</label> <select class="svelte-1rru5q2"><option>Hover labels</option><option>Always show labels</option><option>Pop-out labels</option><option>Hide labels</option></select></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="8" max="36" step="1" class="svelte-1rru5q2"/></div></div></div></section> <section class="prefs-section svelte-1rru5q2"><div class="prefs-section-head svelte-1rru5q2"><div class="prefs-section-title svelte-1rru5q2"><div class="prefs-heading-stack svelte-1rru5q2"><span class="group-kicker svelte-1rru5q2">Geometry</span> <h4 class="svelte-1rru5q2">Button size, width, and icon scale</h4></div> <!></div></div> <div class="prefs-section-body svelte-1rru5q2"><div class="prefs-grid svelte-1rru5q2"><div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="40" max="72" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="40" max="168" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="70" max="160" step="1" class="svelte-1rru5q2"/></div> <div class="field-stack svelte-1rru5q2"><label class="svelte-1rru5q2"> </label> <input type="range" min="4" max="24" step="1" class="svelte-1rru5q2"/></div></div></div></section></div>`);
const Kp = {
  hash: "svelte-1rru5q2",
  code: `.prefs-layout.svelte-1rru5q2 {display:flex;flex-direction:column;gap:1rem;}.prefs-copy.svelte-1rru5q2,
  .footer-row.svelte-1rru5q2,
  .preview-head.svelte-1rru5q2,
  .prefs-section-title.svelte-1rru5q2 {display:flex;align-items:center;justify-content:space-between;gap:0.9rem;}.prefs-copy.svelte-1rru5q2 {flex-wrap:wrap;}.prefs-copy-main.svelte-1rru5q2 {flex:1 1 30rem;}.prefs-copy-main.svelte-1rru5q2 p:where(.svelte-1rru5q2) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.prefs-copy-pills.svelte-1rru5q2,
  .footer-pills.svelte-1rru5q2 {display:flex;flex-wrap:wrap;gap:0.55rem;}.footer-row.svelte-1rru5q2 {flex-wrap:wrap;}.footer-actions.svelte-1rru5q2 {display:inline-flex;flex-wrap:wrap;gap:0.65rem;}.preview-stage.svelte-1rru5q2,
  .prefs-section.svelte-1rru5q2 {display:flex;flex-direction:column;gap:0.9rem;padding:1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),
      color-mix(in srgb, var(--shell-surface), transparent 2%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.04);}.preview-kicker.svelte-1rru5q2,
  .group-kicker.svelte-1rru5q2 {display:inline-flex;color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.preview-head.svelte-1rru5q2 h4:where(.svelte-1rru5q2),
  .prefs-heading-stack.svelte-1rru5q2 h4:where(.svelte-1rru5q2) {margin:0.18rem 0 0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-surface.svelte-1rru5q2 {border:1px solid color-mix(in srgb, var(--shell-border), transparent 16%);border-radius:18px;background:radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 28%),
      color-mix(in srgb, var(--shell-panel), transparent 6%);padding:1rem;}.preview-canvas.svelte-1rru5q2 {display:flex;min-height:13rem;align-items:flex-end;justify-content:space-between;gap:1rem;}.preview-route-card.svelte-1rru5q2 {display:flex;max-width:18rem;flex-direction:column;gap:0.45rem;padding:1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:18px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),
      color-mix(in srgb, var(--shell-surface), transparent 4%);}.preview-route-kicker.svelte-1rru5q2 {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.12em;text-transform:uppercase;}.preview-route-card.svelte-1rru5q2 strong:where(.svelte-1rru5q2) {color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-route-card.svelte-1rru5q2 p:where(.svelte-1rru5q2) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.preview-dock.svelte-1rru5q2 {display:inline-flex;gap:var(--preview-dock-gap);align-items:flex-end;padding-inline-end:var(--preview-dock-offset);}.preview-dock-item.svelte-1rru5q2 {position:relative;display:inline-flex;align-items:center;gap:0.65rem;}.preview-dock-button.svelte-1rru5q2 {display:inline-flex;align-items:center;justify-content:center;width:var(--preview-dock-width);height:var(--preview-dock-size);border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:min(999px, calc(var(--preview-dock-size) * 0.52));background:radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 86%), transparent 54%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text);box-shadow:0 18px 44px rgba(0, 0, 0, 0.32),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 86%);}.preview-dock-button.is-active.svelte-1rru5q2 {border-color:color-mix(in srgb, var(--shell-primary), transparent 36%);background:radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 82%), transparent 52%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.09), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 88%);}.preview-dock-button.svelte-1rru5q2 .app-icon {width:var(--preview-dock-icon-size);height:var(--preview-dock-icon-size);transform:scale(var(--preview-dock-icon-scale));transform-origin:center;}.preview-dock-label.svelte-1rru5q2,
  .preview-dock-popout.svelte-1rru5q2 {color:color-mix(in srgb, var(--shell-text), transparent 12%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;}.preview-dock-popout.svelte-1rru5q2 {position:absolute;right:calc(100% - 0.65rem);z-index:0;padding:0.55rem 1rem 0.55rem 1.15rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-right:0;border-radius:999px 0 0 999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 36%),
      color-mix(in srgb, var(--shell-inset-bg), transparent 4%);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.03);opacity:0;transform:scaleX(0.76);transform-origin:right center;}.preview-dock[data-label-mode='hover'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2),
  .preview-dock[data-label-mode='hidden'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2),
  .preview-dock[data-label-mode='always'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2),
  .preview-dock[data-label-mode='hover'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2),
  .preview-dock[data-label-mode='hidden'].svelte-1rru5q2 .preview-dock-popout:where(.svelte-1rru5q2) {display:none;}.preview-dock[data-label-mode='popout'].svelte-1rru5q2 .preview-dock-label:where(.svelte-1rru5q2) {display:none;}.preview-dock[data-label-mode='popout'].svelte-1rru5q2 .preview-dock-item:where(.svelte-1rru5q2):first-child .preview-dock-popout:where(.svelte-1rru5q2) {opacity:1;transform:scaleX(1);}.prefs-section-head.svelte-1rru5q2 {padding-bottom:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--shell-border), transparent 28%);}.prefs-heading-stack.svelte-1rru5q2 {display:flex;min-width:0;flex-direction:column;}.prefs-section-body.svelte-1rru5q2 {display:flex;flex-direction:column;gap:1rem;}.prefs-grid.svelte-1rru5q2 {display:flex;flex-wrap:wrap;gap:0.85rem 1rem;}.prefs-grid.svelte-1rru5q2 > :where(.svelte-1rru5q2) {flex:1 1 15rem;min-width:0;}.field-stack.svelte-1rru5q2 {display:flex;flex-direction:column;gap:0.55rem;}.field-stack.svelte-1rru5q2 label:where(.svelte-1rru5q2) {color:color-mix(in srgb, var(--shell-text), transparent 10%);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1rru5q2 select:where(.svelte-1rru5q2),
  .field-stack.svelte-1rru5q2 input[type='range']:where(.svelte-1rru5q2) {width:100%;}.field-toggle.svelte-1rru5q2 {display:flex;align-items:flex-start;gap:0.8rem;padding:0.95rem 1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:18px;background:color-mix(in srgb, var(--shell-inset-bg), transparent 6%);color:color-mix(in srgb, var(--shell-text), transparent 10%);font:var(--efs-font-body-sm);line-height:1.6;}.field-toggle-feature.svelte-1rru5q2 {background:radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 46%),
      color-mix(in srgb, var(--shell-inset-bg), transparent 6%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06),
      0 12px 24px color-mix(in srgb, var(--shell-primary), transparent 97%);}.field-toggle.svelte-1rru5q2 input:where(.svelte-1rru5q2) {margin-top:0.18rem;}.prefs-button.svelte-1rru5q2 {display:inline-flex;align-items:center;justify-content:center;min-height:2.6rem;padding:0.7rem 1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 62%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.prefs-button.is-primary.svelte-1rru5q2 {border-color:color-mix(in srgb, var(--shell-primary), transparent 36%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 58%),
      color-mix(in srgb, var(--shell-primary), transparent 84%);}.prefs-button.svelte-1rru5q2:hover:not(:disabled) {border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);color:var(--shell-text-strong);}

  @media (max-width: 56rem) {.preview-canvas.svelte-1rru5q2 {flex-direction:column;align-items:stretch;}.preview-dock.svelte-1rru5q2 {justify-content:center;padding-inline-end:0;}
  }`
};
function Al(t, r) {
  const n = Di();
  $t(r, !0), It(t, Kp);
  const a = {
    hover: "Hover labels",
    always: "Always show labels",
    popout: "Pop-out labels",
    hidden: "Hidden labels"
  };
  let o = y(r, "mode", 7, "card"), i = y(r, "dataTestid", 7), d = y(r, "open", 7, !1), c = y(r, "pinned", 7, !1), h = y(r, "onOpen", 7), u = y(r, "onTogglePin", 7);
  function x(R = nd()) {
    return { ...Re, ...R };
  }
  let q = /* @__PURE__ */ me(ht(x())), w = /* @__PURE__ */ me(ht(x())), P = /* @__PURE__ */ k(() => !ks(e(w), e(q))), W = /* @__PURE__ */ k(() => [
    `--preview-dock-size:${e(w).dockButtonSize}px`,
    `--preview-dock-width:${Math.max(e(w).dockButtonSize, e(w).dockButtonWidth)}px`,
    `--preview-dock-gap:${e(w).dockGap}px`,
    `--preview-dock-icon-size:${Math.max(16, Math.round(e(w).dockButtonSize * 0.39))}px`,
    `--preview-dock-icon-scale:${e(w).dockIconScale / 100}`,
    `--preview-dock-offset:${e(w).dockOffset}px`
  ].join(";"));
  Wo(() => {
    const R = oi((D) => {
      const V = x(D), X = !ks(e(w), e(q));
      $(q, V, !0), X || $(w, V, !0);
    });
    return () => {
      R();
    };
  });
  function M(R) {
    $(w, { ...e(w), ...R }, !0);
  }
  function _() {
    ad(e(w));
  }
  function E() {
    $(w, x(e(q)), !0);
  }
  function z() {
    $(
      w,
      {
        ...x(e(q)),
        globalEdgeDock: Re.globalEdgeDock,
        dockButtonSize: Re.dockButtonSize,
        dockButtonWidth: Re.dockButtonWidth,
        dockIconScale: Re.dockIconScale,
        dockGap: Re.dockGap,
        dockOffset: Re.dockOffset,
        dockLabelMode: Re.dockLabelMode
      },
      !0
    );
  }
  var T = {
    get mode() {
      return o();
    },
    set mode(R = "card") {
      o(R), b();
    },
    get dataTestid() {
      return i();
    },
    set dataTestid(R) {
      i(R), b();
    },
    get open() {
      return d();
    },
    set open(R = !1) {
      d(R), b();
    },
    get pinned() {
      return c();
    },
    set pinned(R = !1) {
      c(R), b();
    },
    get onOpen() {
      return h();
    },
    set onOpen(R) {
      h(R), b();
    },
    get onTogglePin() {
      return u();
    },
    set onTogglePin(R) {
      u(R), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get pinned() {
      return c();
    },
    get onOpen() {
      return h();
    },
    get onTogglePin() {
      return u();
    },
    footer: (D) => {
      var V = Up(), X = l(V), O = l(X);
      {
        let re = /* @__PURE__ */ k(() => e(P) ? "Preview pending" : "Applied"), fe = /* @__PURE__ */ k(() => e(P) ? "warning" : "accent");
        wt(O, {
          get label() {
            return e(re);
          },
          get tone() {
            return e(fe);
          }
        });
      }
      var m = g(O, 2);
      {
        let re = /* @__PURE__ */ k(() => e(w).globalEdgeDock ? "Pinned tools on every page" : "Pinned tools stay in admin"), fe = /* @__PURE__ */ k(() => e(w).globalEdgeDock ? "accent" : "neutral");
        wt(m, {
          get label() {
            return e(re);
          },
          get tone() {
            return e(fe);
          }
        });
      }
      var he = g(m, 2);
      wt(he, {
        get label() {
          return a[e(w).dockLabelMode];
        },
        tone: "info"
      });
      var J = g(he, 2);
      {
        let re = /* @__PURE__ */ k(() => `${e(w).dockButtonWidth}px width`);
        wt(J, {
          get label() {
            return e(re);
          },
          tone: "neutral"
        });
      }
      var ee = g(J, 2);
      {
        let re = /* @__PURE__ */ k(() => `${e(w).dockIconScale}% icons`);
        wt(ee, {
          get label() {
            return e(re);
          },
          tone: "neutral"
        });
      }
      s(X);
      var se = g(X, 2), de = l(se), je = g(de, 2), _e = g(je, 2);
      s(se), s(V), we(() => {
        de.disabled = !e(P), _e.disabled = !e(P);
      }), ae("click", de, E), ae("click", je, z), ae("click", _e, _), G(D, V);
    },
    children: (D, V) => {
      var X = Xp(), O = l(X), m = g(l(O), 2), he = l(m);
      {
        let We = /* @__PURE__ */ k(() => e(w).globalEdgeDock ? "Global rail enabled" : "Admin-only rail"), Ft = /* @__PURE__ */ k(() => e(w).globalEdgeDock ? "accent" : "neutral");
        wt(he, {
          get label() {
            return e(We);
          },
          get tone() {
            return e(Ft);
          }
        });
      }
      var J = g(he, 2);
      wt(J, {
        get label() {
          return a[e(w).dockLabelMode];
        },
        tone: "info"
      }), s(m), s(O);
      var ee = g(O, 2), se = l(ee), de = g(l(se), 2);
      s(se);
      var je = g(se, 2), _e = l(je), re = g(l(_e), 2), fe = l(re), xe = g(l(fe), 2), B = l(xe);
      tt(B, { name: "window-preferences" }), s(xe), jr(2), s(fe);
      var F = g(fe, 2), ve = g(l(F), 2), qe = l(ve);
      tt(qe, { name: "catalog-search" }), s(ve), jr(2), s(F);
      var Te = g(F, 2), Ge = g(l(Te), 2), be = l(Ge);
      tt(be, { name: "display-mode" }), s(Ge), jr(2), s(Te), s(re), s(_e), s(je), s(ee);
      var ke = g(ee, 2), Qe = l(ke), mt = l(Qe), Tt = g(l(mt), 2);
      ga(Tt, {
        title: "Pinned dock presence",
        text: "Enable global dock access when pinned admin tools should be reachable from any page. Turn it off to keep the dock inside the admin workspace only."
      }), s(mt), s(Qe);
      var _t = g(Qe, 2), Lt = l(_t), yt = l(Lt);
      bt(yt), jr(2), s(Lt), s(_t), s(ke);
      var ut = g(ke, 2), dt = l(ut), st = l(dt), pt = g(l(st), 2);
      ga(pt, {
        title: "Dock labels",
        text: "Hover labels stay compact, always shows titles full-time, pop-out grows the title tag out beside the active button, and hidden leaves icons only."
      }), s(st), s(dt);
      var ue = g(dt, 2), Pe = l(ue), Xe = l(Pe), N = l(Xe), I = g(N, 2), ze = l(I);
      ze.value = ze.__value = "hover";
      var L = g(ze);
      L.value = L.__value = "always";
      var ce = g(L);
      ce.value = ce.__value = "popout";
      var De = g(ce);
      De.value = De.__value = "hidden", s(I);
      var Ce;
      kr(I), s(Xe);
      var Be = g(Xe, 2), f = l(Be), pe = l(f);
      s(f);
      var Me = g(f, 2);
      bt(Me), s(Be), s(Pe), s(ue), s(ut);
      var K = g(ut, 2), nt = l(K), Le = l(nt), xt = g(l(Le), 2);
      ga(xt, {
        title: "Dock geometry",
        text: "Increase width to get the longer Windows 8 or 10 style capsule buttons. Raise icon scale if the glyphs feel too small after widening the rail."
      }), s(Le), s(nt);
      var Ie = g(nt, 2), Ke = l(Ie), at = l(Ke), jt = l(at), lr = l(jt);
      s(jt);
      var Je = g(jt, 2);
      bt(Je), s(at);
      var Pt = g(at, 2), Wt = l(Pt), qt = l(Wt);
      s(Wt);
      var wr = g(Wt, 2);
      bt(wr), s(Pt);
      var Sr = g(Pt, 2), Jt = l(Sr), Tr = l(Jt);
      s(Jt);
      var Wr = g(Jt, 2);
      bt(Wr), s(Sr);
      var Gn = g(Sr, 2), an = l(Gn), $e = l(an);
      s(an);
      var Bt = g(an, 2);
      bt(Bt), s(Gn), s(Ke), s(Ie), s(K), s(X), we(() => {
        de.disabled = !e(P), Pr(je, e(W)), j(re, "data-label-mode", e(w).dockLabelMode), ql(yt, e(w).globalEdgeDock), j(N, "for", `${n}-dock-label-mode`), j(I, "id", `${n}-dock-label-mode`), Ce !== (Ce = e(w).dockLabelMode) && (I.value = (I.__value = e(w).dockLabelMode) ?? "", ur(I, e(w).dockLabelMode)), j(f, "for", `${n}-dock-offset`), oe(pe, `Dock inset (${e(w).dockOffset ?? ""}px)`), j(Me, "id", `${n}-dock-offset`), Or(Me, e(w).dockOffset), j(jt, "for", `${n}-dock-size`), oe(lr, `Dock button size (${e(w).dockButtonSize ?? ""}px)`), j(Je, "id", `${n}-dock-size`), Or(Je, e(w).dockButtonSize), j(Wt, "for", `${n}-dock-width`), oe(qt, `Dock button width (${e(w).dockButtonWidth ?? ""}px)`), j(wr, "id", `${n}-dock-width`), Or(wr, e(w).dockButtonWidth), j(Jt, "for", `${n}-dock-icon-scale`), oe(Tr, `Dock icon scale (${e(w).dockIconScale ?? ""}%)`), j(Wr, "id", `${n}-dock-icon-scale`), Or(Wr, e(w).dockIconScale), j(an, "for", `${n}-dock-gap`), oe($e, `Dock spacing (${e(w).dockGap ?? ""}px)`), j(Bt, "id", `${n}-dock-gap`), Or(Bt, e(w).dockGap);
      }), ae("click", de, _), ae("change", yt, (We) => M({ globalEdgeDock: We.currentTarget.checked })), ae("change", I, (We) => M({ dockLabelMode: We.currentTarget.value })), ae("input", Me, (We) => M({ dockOffset: Number.parseInt(We.currentTarget.value, 10) })), ae("input", Je, (We) => M({
        dockButtonSize: Number.parseInt(We.currentTarget.value, 10)
      })), ae("input", wr, (We) => M({
        dockButtonWidth: Number.parseInt(We.currentTarget.value, 10)
      })), ae("input", Wr, (We) => M({
        dockIconScale: Number.parseInt(We.currentTarget.value, 10)
      })), ae("input", Bt, (We) => M({ dockGap: Number.parseInt(We.currentTarget.value, 10) })), G(D, X);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(T);
}
rn(["click", "change", "input"]);
Dt(
  Al,
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
var Jp = /* @__PURE__ */ Z('<div class="footer-row svelte-zhcicw"><span class="footer-copy svelte-zhcicw"><!></span></div>'), Zp = /* @__PURE__ */ Z('<div class="empty-state svelte-zhcicw">No roles found.</div>'), Qp = /* @__PURE__ */ Z('<p class="role-description svelte-zhcicw"> </p>'), ew = /* @__PURE__ */ Z('<span class="entitlement-chip svelte-zhcicw"> </span>'), tw = /* @__PURE__ */ Z('<article class="role-row svelte-zhcicw"><div class="role-row-header svelte-zhcicw"><div class="role-identity svelte-zhcicw"><strong class="role-name svelte-zhcicw"> </strong> <span class="role-id svelte-zhcicw"> </span></div> <div class="role-badges svelte-zhcicw"><!> <!></div></div> <!> <div class="entitlement-wrap svelte-zhcicw"></div></article>'), rw = /* @__PURE__ */ Z('<div class="list-shell svelte-zhcicw"></div>');
const nw = {
  hash: "svelte-zhcicw",
  code: `.list-shell.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.role-row.svelte-zhcicw {display:flex;flex-direction:column;gap:0.75rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);padding:0.95rem 1rem;}.role-row-header.svelte-zhcicw {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.75rem;}.role-identity.svelte-zhcicw,
  .role-badges.svelte-zhcicw {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.role-badges.svelte-zhcicw {align-items:flex-end;}.role-name.svelte-zhcicw {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.role-id.svelte-zhcicw,
  .role-description.svelte-zhcicw,
  .footer-copy.svelte-zhcicw,
  .empty-state.svelte-zhcicw {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.role-id.svelte-zhcicw {font-family:var(--efs-font-mono);}.role-description.svelte-zhcicw {margin:0;}.entitlement-wrap.svelte-zhcicw {display:flex;flex-wrap:wrap;gap:0.45rem;}.entitlement-chip.svelte-zhcicw {display:inline-flex;align-items:center;min-height:1.9rem;padding:0 0.75rem;border-radius:999px;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);background:color-mix(in srgb, var(--shell-row-hover), transparent 10%);color:var(--shell-text);font-family:var(--efs-font-mono);font:var(--efs-font-label);font-family:var(--efs-font-mono);}.empty-state.svelte-zhcicw {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-zhcicw {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.role-badges.svelte-zhcicw {align-items:flex-start;}
  }`
};
function El(t, r) {
  $t(r, !0), It(t, nw);
  let n = y(r, "roles", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), d = y(r, "pinned", 7, !1), c = y(r, "onOpen", 7), h = y(r, "onTogglePin", 7), u = /* @__PURE__ */ k(() => a() === "card" ? n().slice(0, 6) : n());
  var x = {
    get roles() {
      return n();
    },
    set roles(q) {
      n(q), b();
    },
    get mode() {
      return a();
    },
    set mode(q = "card") {
      a(q), b();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(q) {
      o(q), b();
    },
    get open() {
      return i();
    },
    set open(q = !1) {
      i(q), b();
    },
    get pinned() {
      return d();
    },
    set pinned(q = !1) {
      d(q), b();
    },
    get onOpen() {
      return c();
    },
    set onOpen(q) {
      c(q), b();
    },
    get onTogglePin() {
      return h();
    },
    set onTogglePin(q) {
      h(q), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get onOpen() {
      return c();
    },
    get onTogglePin() {
      return h();
    },
    footer: (w) => {
      var P = Jp(), W = l(P), M = l(W);
      {
        var _ = (z) => {
          var T = Vr();
          we(() => oe(T, `Showing ${e(u).length ?? ""} of ${n().length ?? ""} roles.`)), G(z, T);
        }, E = (z) => {
          var T = Vr();
          we(() => oe(T, `${n().length ?? ""} total role${n().length === 1 ? "" : "s"}.`)), G(z, T);
        };
        ge(M, (z) => {
          n().length > e(u).length ? z(_) : z(E, -1);
        });
      }
      s(W), s(P), G(w, P);
    },
    children: (w, P) => {
      var W = ua(), M = Xt(W);
      {
        var _ = (z) => {
          var T = Zp();
          G(z, T);
        }, E = (z) => {
          var T = rw();
          Ot(T, 21, () => e(u), (R) => R.id, (R, D) => {
            var V = tw(), X = l(V), O = l(X), m = l(O), he = l(m, !0);
            s(m);
            var J = g(m, 2), ee = l(J, !0);
            s(J), s(O);
            var se = g(O, 2), de = l(se);
            {
              var je = (F) => {
                wt(F, { label: "system", tone: "warning" });
              };
              ge(de, (F) => {
                e(D).system && F(je);
              });
            }
            var _e = g(de, 2);
            {
              var re = (F) => {
                wt(F, { label: "operator only", tone: "danger" });
              };
              ge(_e, (F) => {
                e(D).operatorOnly && F(re);
              });
            }
            s(se), s(X);
            var fe = g(X, 2);
            {
              var xe = (F) => {
                var ve = Qp(), qe = l(ve, !0);
                s(ve), we(() => oe(qe, e(D).description)), G(F, ve);
              };
              ge(fe, (F) => {
                e(D).description && F(xe);
              });
            }
            var B = g(fe, 2);
            Ot(B, 21, () => e(D).entitlements, (F) => `${e(D).id}:${F}`, (F, ve) => {
              var qe = ew(), Te = l(qe, !0);
              s(qe), we(() => oe(Te, e(ve))), G(F, qe);
            }), s(B), s(V), we(() => {
              oe(he, e(D).name), oe(ee, e(D).id);
            }), G(R, V);
          }), s(T), G(z, T);
        };
        ge(M, (z) => {
          n().length === 0 ? z(_) : z(E, -1);
        });
      }
      G(w, W);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(x);
}
Dt(
  El,
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
var aw = /* @__PURE__ */ Z('<div class="footer-row svelte-1wpzpgs"><!> <span class="footer-copy svelte-1wpzpgs">Read-only payload mirror from the current tenant.</span></div>'), ow = /* @__PURE__ */ Z('<div class="code-shell svelte-1wpzpgs"><pre class="svelte-1wpzpgs"> </pre></div>');
const iw = {
  hash: "svelte-1wpzpgs",
  code: `.code-shell.svelte-1wpzpgs {min-height:0;}pre.svelte-1wpzpgs {margin:0;min-height:14rem;max-height:min(32rem, 62vh);overflow:auto;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 24%),
      color-mix(in srgb, var(--shell-surface), black 8%);color:var(--shell-text);padding:1rem 1.1rem;font-family:var(--efs-font-mono);font:var(--efs-font-body-xs);font-family:var(--efs-font-mono);line-height:1.8;white-space:pre-wrap;word-break:break-word;}.footer-row.svelte-1wpzpgs {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-copy.svelte-1wpzpgs {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}`
};
function Rl(t, r) {
  $t(r, !0), It(t, iw);
  let n = y(r, "settings", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), d = y(r, "pinned", 7, !1), c = y(r, "onOpen", 7), h = y(r, "onTogglePin", 7), u = /* @__PURE__ */ k(() => n() ? Object.keys(n()).length : 0), x = /* @__PURE__ */ k(() => JSON.stringify(n() ?? {}, null, 2));
  var q = {
    get settings() {
      return n();
    },
    set settings(w) {
      n(w), b();
    },
    get mode() {
      return a();
    },
    set mode(w = "card") {
      a(w), b();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(w) {
      o(w), b();
    },
    get open() {
      return i();
    },
    set open(w = !1) {
      i(w), b();
    },
    get pinned() {
      return d();
    },
    set pinned(w = !1) {
      d(w), b();
    },
    get onOpen() {
      return c();
    },
    set onOpen(w) {
      c(w), b();
    },
    get onTogglePin() {
      return h();
    },
    set onTogglePin(w) {
      h(w), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get onOpen() {
      return c();
    },
    get onTogglePin() {
      return h();
    },
    footer: (P) => {
      var W = aw(), M = l(W);
      {
        let _ = /* @__PURE__ */ k(() => `${e(u)} top-level keys`);
        wt(M, {
          get label() {
            return e(_);
          },
          tone: "accent"
        });
      }
      jr(2), s(W), G(P, W);
    },
    children: (P, W) => {
      var M = ow(), _ = l(M), E = l(_, !0);
      s(_), s(M), we(() => oe(E, e(x))), G(P, M);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(q);
}
Dt(
  Rl,
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
var sw = /* @__PURE__ */ Z('<div class="footer-row svelte-1vpo77r"><span class="footer-copy svelte-1vpo77r"><!></span></div>'), lw = /* @__PURE__ */ Z('<div class="empty-state svelte-1vpo77r">No users provisioned yet.</div>'), dw = /* @__PURE__ */ Z('<article class="user-row svelte-1vpo77r"><div class="user-row-main svelte-1vpo77r"><div class="user-identity svelte-1vpo77r"><strong class="user-name svelte-1vpo77r"> </strong> <span class="user-display svelte-1vpo77r"> </span></div> <div class="user-meta svelte-1vpo77r"><!> <span class="user-role svelte-1vpo77r"> </span></div></div></article>'), cw = /* @__PURE__ */ Z('<div class="list-shell svelte-1vpo77r"></div>');
const gw = {
  hash: "svelte-1vpo77r",
  code: `.list-shell.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.75rem;min-height:0;max-height:min(28rem, 56vh);overflow:auto;padding-right:0.1rem;}.user-row.svelte-1vpo77r {border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);}.user-row-main.svelte-1vpo77r {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.9rem;padding:0.95rem 1rem;}.user-identity.svelte-1vpo77r,
  .user-meta.svelte-1vpo77r {display:flex;flex-direction:column;gap:0.35rem;min-width:0;}.user-meta.svelte-1vpo77r {align-items:flex-end;}.user-name.svelte-1vpo77r {color:var(--shell-text);font:var(--efs-font-body-md);line-height:1.3;}.user-display.svelte-1vpo77r,
  .user-role.svelte-1vpo77r,
  .footer-copy.svelte-1vpo77r,
  .empty-state.svelte-1vpo77r {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.user-role.svelte-1vpo77r {font-family:var(--efs-font-mono);}.empty-state.svelte-1vpo77r {min-height:8rem;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);border-radius:20px;}.footer-row.svelte-1vpo77r {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}

  @media (max-width: 47.99rem) {.user-meta.svelte-1vpo77r {align-items:flex-start;}
  }`
};
function Ol(t, r) {
  $t(r, !0), It(t, gw);
  let n = y(r, "users", 7), a = y(r, "mode", 7, "card"), o = y(r, "dataTestid", 7), i = y(r, "open", 7, !1), d = y(r, "pinned", 7, !1), c = y(r, "onOpen", 7), h = y(r, "onTogglePin", 7), u = /* @__PURE__ */ k(() => a() === "card" ? n().slice(0, 6) : n());
  function x(w) {
    switch (w.toLowerCase()) {
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
    set users(w) {
      n(w), b();
    },
    get mode() {
      return a();
    },
    set mode(w = "card") {
      a(w), b();
    },
    get dataTestid() {
      return o();
    },
    set dataTestid(w) {
      o(w), b();
    },
    get open() {
      return i();
    },
    set open(w = !1) {
      i(w), b();
    },
    get pinned() {
      return d();
    },
    set pinned(w = !1) {
      d(w), b();
    },
    get onOpen() {
      return c();
    },
    set onOpen(w) {
      c(w), b();
    },
    get onTogglePin() {
      return h();
    },
    set onTogglePin(w) {
      h(w), b();
    }
  };
  return nn(t, {
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
      return d();
    },
    get onOpen() {
      return c();
    },
    get onTogglePin() {
      return h();
    },
    footer: (P) => {
      var W = sw(), M = l(W), _ = l(M);
      {
        var E = (T) => {
          var R = Vr();
          we(() => oe(R, `Showing ${e(u).length ?? ""} of ${n().length ?? ""} users.`)), G(T, R);
        }, z = (T) => {
          var R = Vr();
          we(() => oe(R, `${n().length ?? ""} total user${n().length === 1 ? "" : "s"}.`)), G(T, R);
        };
        ge(_, (T) => {
          n().length > e(u).length ? T(E) : T(z, -1);
        });
      }
      s(M), s(W), G(P, W);
    },
    children: (P, W) => {
      var M = ua(), _ = Xt(M);
      {
        var E = (T) => {
          var R = lw();
          G(T, R);
        }, z = (T) => {
          var R = cw();
          Ot(R, 21, () => e(u), (D) => D.id, (D, V) => {
            var X = dw(), O = l(X), m = l(O), he = l(m), J = l(he, !0);
            s(he);
            var ee = g(he, 2), se = l(ee, !0);
            s(ee), s(m);
            var de = g(m, 2), je = l(de);
            {
              let fe = /* @__PURE__ */ k(() => x(e(V).status));
              wt(je, {
                get label() {
                  return e(V).status;
                },
                get tone() {
                  return e(fe);
                }
              });
            }
            var _e = g(je, 2), re = l(_e, !0);
            s(_e), s(de), s(O), s(X), we(() => {
              oe(J, e(V).username), oe(se, e(V).name || "No display name"), oe(re, e(V).roleId);
            }), G(D, X);
          }), s(R), G(T, R);
        };
        ge(_, (T) => {
          n().length === 0 ? T(E) : T(z, -1);
        });
      }
      G(P, M);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(q);
}
Dt(
  Ol,
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
var vw = /* @__PURE__ */ Z('<div class="footer-row svelte-1u1chkd"><div class="footer-pills svelte-1u1chkd"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div> <div class="footer-actions svelte-1u1chkd"><button class="prefs-button svelte-1u1chkd" type="button">Revert</button> <button class="prefs-button svelte-1u1chkd" type="button">Defaults</button> <button class="prefs-button is-primary svelte-1u1chkd" type="button">Apply</button></div></div>'), hw = /* @__PURE__ */ Z("<option> </option>"), uw = /* @__PURE__ */ Z("<option> </option>"), pw = /* @__PURE__ */ Z('<button type="button" aria-label="Close" tabindex="-1"><!></button> <button type="button" aria-label="Minimize" tabindex="-1"><!></button> <button type="button" aria-label="Maximize" tabindex="-1"><!></button>', 1), ww = /* @__PURE__ */ Z('<button type="button" aria-label="Minimize" tabindex="-1"><!></button> <button type="button" aria-label="Maximize" tabindex="-1"><!></button> <button type="button" aria-label="Close" tabindex="-1"><!></button>', 1), mw = /* @__PURE__ */ Z('<div class="prefs-layout svelte-1u1chkd"><section class="prefs-section theme-group svelte-1u1chkd"><div class="prefs-section-head svelte-1u1chkd"><div class="prefs-section-title svelte-1u1chkd"><div class="prefs-heading-stack svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Shell Package And Presets</span> <h4 class="svelte-1u1chkd">Preset, font, coverage, and custom save</h4></div> <!></div></div> <div class="prefs-section-body package-body svelte-1u1chkd"><div class="prefs-grid prefs-grid-compact svelte-1u1chkd"><div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Preset</label> <select class="svelte-1u1chkd"></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Site font</label> <select class="svelte-1u1chkd"></select></div> <div class="field-stack svelte-1u1chkd"><label class="svelte-1u1chkd">Theme coverage</label> <select class="svelte-1u1chkd"><option>Contained shell</option><option>Expand across site</option></select></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="preset-strip svelte-1u1chkd"><div class="preset-strip-copy svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Preset Status</span> <strong class="svelte-1u1chkd"> </strong> <span class="svelte-1u1chkd"><!></span></div> <div class="profiles-save package-save svelte-1u1chkd"><input type="text" class="svelte-1u1chkd"/> <button class="prefs-button svelte-1u1chkd" type="button">Save custom preset</button></div></div></div></section> <section class="preview-stage svelte-1u1chkd" aria-label="Window manager preview"><div class="preview-stage-head svelte-1u1chkd"><div><span class="preview-kicker svelte-1u1chkd">Preview only</span> <h4 class="preview-heading svelte-1u1chkd">Title treatment and shell chrome</h4> <p class="preview-status svelte-1u1chkd"> </p></div></div> <div><div class="preview-window-shadow svelte-1u1chkd"></div> <div><div>Window manager preview</div> <div aria-hidden="true"><!></div></div> <div><div class="preview-body-grid svelte-1u1chkd"><article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Pinned widget</span> <strong class="svelte-1u1chkd">Workspace buttons</strong> <p class="svelte-1u1chkd">Preview title balance, chrome edge weight, and live legibility against content.</p></article> <article class="preview-card svelte-1u1chkd"><span class="preview-card-kicker svelte-1u1chkd">Content density</span> <strong class="svelte-1u1chkd">Responsive shell</strong> <p class="svelte-1u1chkd">Preview how the header chrome, border width, and glass treatment sit over content.</p></article></div></div></div> <div class="preview-apply-row svelte-1u1chkd"><div class="preview-apply-copy svelte-1u1chkd"><strong class="svelte-1u1chkd">Apply preview to the live shell</strong> <span class="svelte-1u1chkd">Commit the current frame, title, and chrome settings before you leave this panel or save a custom shell package.</span></div> <button class="prefs-button is-primary svelte-1u1chkd" type="button">Apply</button></div></section> <section class="prefs-section custom-section svelte-1u1chkd"><div class="prefs-section-head svelte-1u1chkd"><div class="prefs-section-title svelte-1u1chkd"><div class="prefs-heading-stack svelte-1u1chkd"><span class="group-kicker svelte-1u1chkd">Chrome Treatment</span> <h4 class="svelte-1u1chkd">Frame geometry and optical finish</h4></div> <!></div></div> <div class="prefs-section-body svelte-1u1chkd"><div class="custom-state-copy svelte-1u1chkd"><strong class="svelte-1u1chkd"><!></strong> <span class="svelte-1u1chkd"><!></span></div> <fieldset class="preset-controlled-fields svelte-1u1chkd"><div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Frame geometry</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Button layout</label> <select class="svelte-1u1chkd"><option>Windows 11</option><option>Windows 10</option><option>Windows 8</option><option>Windows 7</option><option>macOS</option><option>Ubuntu</option><option>Xubuntu</option><option>GNOME</option></select></div> <div><label class="svelte-1u1chkd">System button side</label> <select class="svelte-1u1chkd"><option>Right edge</option><option>Left edge</option></select></div> <div><label class="svelte-1u1chkd">Chrome style</label> <select class="svelte-1u1chkd"><option>Solid</option><option>Glass</option><option>Mica</option><option>Frost</option><option>Pane</option><option>Transparent</option></select></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Beam, glass, and colorization</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Beam / texture profile</label> <select class="svelte-1u1chkd"><option>No beam</option><option>Windows 7 Aero beam</option><option>Vista beam</option><option>XP Luna beam</option><option>Windows 9x bevel</option><option>KDE sheen</option><option>Mica highlight</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd">Gloss profile</label> <select class="svelte-1u1chkd"><option>No gloss</option><option>Windows 7 glass</option><option>Vista glass</option><option>KDE satin</option><option>Mica haze</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="8" max="36" step="1" class="svelte-1u1chkd"/></div> <label><input type="checkbox" class="svelte-1u1chkd"/> <span>Tint the titlebar, borders, and controls using the current app theme colors.</span></label> <div><label class="svelte-1u1chkd">Theme color source</label> <select class="svelte-1u1chkd"><option>Primary accent</option><option>Accent highlight</option><option>Accent wash</option><option>Secondary accent</option><option>Secondary wash</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1u1chkd"/></div></div> <div class="prefs-section-divider svelte-1u1chkd" aria-hidden="true"></div> <div class="prefs-mini-head svelte-1u1chkd"><div class="prefs-mini-title-wrap svelte-1u1chkd"><span class="prefs-mini-title svelte-1u1chkd">Interaction and frame details</span> <!></div></div> <div class="prefs-grid svelte-1u1chkd"><div><label class="svelte-1u1chkd">Title alignment</label> <select class="svelte-1u1chkd"><option>Left</option><option>Center</option><option>Right</option></select></div> <div><label class="svelte-1u1chkd">Title tone</label> <select class="svelte-1u1chkd"><option>Preset default</option><option>Light title</option><option>Dark title</option></select></div> <div><label class="svelte-1u1chkd">Title effect</label> <select class="svelte-1u1chkd"><option>Preset effect</option><option>Flat</option><option>Shadowed</option><option>Aero glow</option><option>Embossed</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="28" max="72" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="75" max="140" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd">Shift drag action</label> <select class="svelte-1u1chkd"><option>Pin window</option><option>No extra action</option></select></div> <div><label class="svelte-1u1chkd">Side resize mode</label> <select class="svelte-1u1chkd"><option>Anchored sides</option><option>Mirror both sides</option></select></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="12" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="32" step="1" class="svelte-1u1chkd"/></div> <div><label class="svelte-1u1chkd"> </label> <input type="range" min="0" max="20" step="1" class="svelte-1u1chkd"/></div> <label><input type="checkbox" class="svelte-1u1chkd"/> <span>Restore the previous snap if you drag free and release without shift.</span></label></div></fieldset></div></section></div>');
const fw = {
  hash: "svelte-1u1chkd",
  code: `.prefs-layout.svelte-1u1chkd {display:flex;flex-direction:column;gap:1rem;}.package-body.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.95rem;}.preset-strip.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.85rem;padding:0.9rem 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:20px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),
      color-mix(in srgb, var(--shell-surface), transparent 8%);}.preset-strip[data-custom='true'].svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 48%);background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 36%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-surface), transparent 8%);}.preset-strip-copy.svelte-1u1chkd {display:flex;flex:1 1 18rem;min-width:0;flex-direction:column;gap:0.24rem;}.preset-strip-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preset-strip-copy.svelte-1u1chkd span:where(.svelte-1u1chkd):last-child {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.package-save.svelte-1u1chkd {align-items:stretch;min-width:min(100%, 23rem);}.preview-stage.svelte-1u1chkd {position:relative;overflow:hidden;padding:1.1rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 10%);border-radius:24px;background:linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 6 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 88%) calc(100% / 6 - 1px),
        transparent calc(100% / 6)
      ),
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 30%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 4%);}.preview-stage-head.svelte-1u1chkd,
  .preview-apply-row.svelte-1u1chkd,
  .prefs-section-title.svelte-1u1chkd,
  .prefs-mini-title-wrap.svelte-1u1chkd {display:flex;align-items:center;justify-content:space-between;gap:0.85rem;}.preview-kicker.svelte-1u1chkd {display:inline-flex;color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.preview-heading.svelte-1u1chkd {margin:0.18rem 0 0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);}.preview-status.svelte-1u1chkd {margin:0.32rem 0 0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.5;}.preview-window.svelte-1u1chkd {--preview-radius: 18px;--preview-titlebar-height: 44px;--preview-shell-scale: 1;--preview-system-width: calc(2.55rem * var(--preview-shell-scale));--preview-system-height:
      min(
        calc(2rem * var(--preview-shell-scale)),
        max(1.56rem, calc(var(--preview-titlebar-height) - max(0.65rem, calc(var(--preview-chrome-padding) * 0.85))))
      );--preview-system-radius: max(8px, calc(10px * var(--preview-shell-scale)));--preview-system-icon-size: calc(0.88rem * var(--preview-shell-scale));--preview-control-border-width: clamp(0px, calc(var(--preview-border-width) * 0.9), 3px);--preview-control-radius: max(8px, calc(10px * var(--preview-shell-scale)));--preview-top-space:
      max(0.16rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.52));--preview-bottom-space:
      max(0.12rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.48));--preview-panel: var(--efs-window-theme-panel, var(--shell-panel));--preview-surface: var(--efs-window-theme-surface, var(--shell-surface));--preview-border: var(--efs-window-theme-border, var(--shell-border));--preview-hover: var(--efs-window-theme-hover, var(--shell-row-hover));--preview-shadow: var(--efs-window-theme-shadow, var(--preview-shadow-base, 0 24px 56px rgba(0, 0, 0, 0.32)));--preview-tint: var(--efs-window-chrome-tint, var(--shell-primary));--preview-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);--preview-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);--preview-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);--preview-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);--preview-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);--preview-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;--preview-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;position:relative;isolation:isolate;margin-inline:auto;width:min(100%, 34rem);border:var(--preview-border-width) solid color-mix(in srgb, var(--preview-border), transparent 12%);border-radius:var(--preview-radius);overflow:hidden;font-family:var(--preview-font-family);background:radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--preview-tint), transparent 92%),
        transparent 28%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 42%),
      color-mix(in srgb, var(--preview-surface), transparent 2%);}.preview-window.svelte-1u1chkd::before {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 28%),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 94%), transparent 46%);opacity:calc(var(--preview-chrome-colorize-opacity) * 0.72);}.preview-window-shadow.svelte-1u1chkd {position:absolute;inset:0;z-index:0;pointer-events:none;box-shadow:var(--preview-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 26%);}.preview-window[data-layout='windows-7'].svelte-1u1chkd {--preview-system-width: 3rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.8rem;--preview-system-radius: 0 0 8px 8px;}.preview-window[data-layout='windows-8'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 1.95rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-10'].svelte-1u1chkd {--preview-system-width: 2.8rem;--preview-system-height: 2rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 0;}.preview-window[data-layout='windows-11'].svelte-1u1chkd {--preview-system-height: 2rem;--preview-system-icon-size: 0.88rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd {--preview-system-width: 2rem;--preview-system-height: 1.75rem;--preview-system-icon-size: 0.76rem;--preview-system-radius: 0;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd {--preview-system-width: 0.9rem;--preview-system-height: 0.9rem;--preview-system-icon-size: 0.48rem;--preview-system-radius: 999px;}.preview-window[data-layout='ubuntu'].svelte-1u1chkd,
  .preview-window[data-layout='xubuntu'].svelte-1u1chkd {--preview-system-width: 1rem;--preview-system-height: 1rem;--preview-system-icon-size: 0.5rem;--preview-system-radius: 999px;--preview-control-radius: 999px;}.preview-window[data-layout='gnome'].svelte-1u1chkd {--preview-system-width: 2.6rem;--preview-system-height: 1.82rem;--preview-system-icon-size: 0.82rem;--preview-system-radius: 999px;--preview-control-radius: 12px;}.preview-window[data-style='transparent'].svelte-1u1chkd {background:color-mix(in srgb, var(--preview-surface), transparent 12%);}.preview-window[data-style='mica'].svelte-1u1chkd {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 30%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 52%),
      color-mix(in srgb, var(--preview-surface), transparent 10%);}.preview-window[data-style='frost'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 16%);}.preview-window[data-style='pane'].svelte-1u1chkd {background:linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.04) 66%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 8%);}.preview-window[data-style='glass'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}.preview-window[data-style='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.preview-window[data-style='frost'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.05) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 18%);backdrop-filter:blur(16px) saturate(1.12);-webkit-backdrop-filter:blur(16px) saturate(1.12);}.preview-window[data-style='pane'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06) 68%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);}.preview-chrome.svelte-1u1chkd {position:relative;z-index:1;isolation:isolate;display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;min-height:calc(
      var(--preview-system-height) + var(--preview-top-space) + var(--preview-bottom-space)
    );padding-top:var(--preview-top-space);padding-bottom:var(--preview-bottom-space);padding-inline:var(--preview-chrome-padding);border-bottom:1px solid color-mix(in srgb, var(--preview-border), transparent 20%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),
      color-mix(in srgb, var(--preview-panel), transparent 2%);overflow:hidden;}.preview-chrome.svelte-1u1chkd::before,
  .preview-chrome.svelte-1u1chkd::after {content:'';position:absolute;inset:0;z-index:0;pointer-events:none;}.preview-chrome.svelte-1u1chkd::before {background:linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);opacity:var(--preview-chrome-colorize-opacity);}.preview-chrome.svelte-1u1chkd::after {background:linear-gradient(
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
      );mix-blend-mode:screen;opacity:calc(var(--preview-chrome-texture-opacity) * 0.78);}.preview-window[data-style='transparent'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:transparent;border-bottom-color:transparent;}.preview-window[data-system-placement='left'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {justify-content:flex-start;}.preview-title.svelte-1u1chkd {position:absolute;top:50%;left:50%;z-index:1;min-width:0;width:max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));max-width:max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));color:var(--shell-text);font:var(--efs-font-title-sm);font-size:clamp(0.82rem, calc(0.84rem * var(--preview-shell-scale)), 1.08rem);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;transform:translate(-50%, -50%);}.preview-window[data-title-tone='light'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {color:rgba(255, 255, 255, 0.96);}.preview-window[data-title-tone='dark'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {color:rgba(0, 0, 0, 0.88);}.preview-window[data-title-effect='plain'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:none;}.preview-window[data-title-effect='shadow'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 1px 2px rgba(0, 0, 0, 0.4);}.preview-window[data-title-effect='glow'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 0 10px rgba(255, 255, 255, 0.98),
      0 0 12px rgba(255, 255, 255, 0.9),
      0 0 18px rgba(255, 255, 255, 0.75);}.preview-window[data-title-effect='emboss'].svelte-1u1chkd .preview-title:where(.svelte-1u1chkd) {text-shadow:0 1px 0 rgba(255, 255, 255, 0.46),
      0 -1px 0 rgba(0, 0, 0, 0.42);}.preview-title.align-left.svelte-1u1chkd {text-align:left;}.preview-title.align-center.svelte-1u1chkd {text-align:center;}.preview-title.align-right.svelte-1u1chkd {text-align:right;}.preview-title.title-bar-text.svelte-1u1chkd {letter-spacing:0;line-height:15px;padding-top:0.18rem;}.preview-controls.svelte-1u1chkd {display:inline-flex;align-items:center;gap:0.25rem;flex:none;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.18rem, calc(var(--preview-chrome-padding) * 0.38));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-controls.windows.svelte-1u1chkd {gap:0.12rem;}.preview-control.svelte-1u1chkd {display:inline-flex;position:relative;isolation:isolate;align-items:center;justify-content:center;width:calc(2rem * var(--preview-shell-scale));height:calc(2rem * var(--preview-shell-scale));border:var(--preview-control-border-width) solid
      color-mix(in srgb, var(--preview-border), transparent 16%);border-radius:var(--preview-control-radius);background:color-mix(in srgb, var(--preview-panel), transparent 8%);color:var(--shell-muted);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06);overflow:hidden;}.preview-control.svelte-1u1chkd::before,
  .preview-control.svelte-1u1chkd::after {content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;}.preview-control.svelte-1u1chkd::before {background:linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 56%);opacity:calc(var(--preview-chrome-colorize-opacity) * 0.7);}.preview-control.svelte-1u1chkd::after {background:linear-gradient(
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
      );mix-blend-mode:screen;opacity:calc(var(--preview-chrome-texture-opacity) * 0.44);}.preview-control.svelte-1u1chkd .app-icon {position:relative;z-index:1;width:var(--preview-system-icon-size);height:var(--preview-system-icon-size);}.preview-controls.windows.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {width:var(--preview-system-width);height:var(--preview-system-height);border-radius:var(--preview-system-radius);border-color:transparent;background:transparent;}.preview-controls.windows.variant-windows-7.svelte-1u1chkd .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);border-color:color-mix(in srgb, var(--preview-border), transparent 24%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.26);}.preview-controls.windows.variant-ubuntu.svelte-1u1chkd,
  .preview-controls.windows.variant-xubuntu.svelte-1u1chkd {gap:0.32rem;}.preview-window[data-theme='windows-9x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-color:color-mix(in srgb, var(--preview-border), transparent 6%);background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02));box-shadow:inset 1px 1px 0 rgba(255, 255, 255, 0.34),
      inset -1px -1px 0 rgba(0, 0, 0, 0.24);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) {gap:0.35rem;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {color:rgba(0, 0, 0, 0.46);}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(1) {background:#ff6059;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(2) {background:#f5c042;}.preview-window[data-theme='mac-os-x'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):nth-child(3) {background:#2dcf5f;}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-chrome:where(.svelte-1u1chkd) {--preview-w7-title-bg:
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),
      #4580c4;--preview-w7-control-bg:
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);--preview-w7-control-border: #0000004d;background:linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),
      var(--preview-w7-title-bg);backdrop-filter:blur(10px) saturate(1.04);-webkit-backdrop-filter:blur(10px) saturate(1.04);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(
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
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.92);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.22);border:1px solid var(--preview-w7-control-border);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.8),
      1px 0 0 rgba(255, 255, 255, 0.66),
      -1px 0 0 rgba(255, 255, 255, 0.66);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border:0;border-right:1px solid var(--preview-w7-control-border);border-radius:0;background:var(--preview-w7-control-bg);color:rgba(0, 0, 0, 0.76);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.66);}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):last-child {border-right:0;}.preview-window[data-theme='aero'].svelte-1u1chkd:not(.win7-theme) .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.close:where(.svelte-1u1chkd) {min-width:var(--preview-system-width);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(224, 161, 151, 0.9),
        rgba(207, 121, 106, 0.95) 25% 50%,
        rgba(213, 79, 54, 0.96) 50%
      );color:rgba(255, 255, 255, 0.94);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.22rem, calc(var(--preview-chrome-padding) * 0.62));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.24));--preview-vista-title-bg:
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),
      #6c8fbe;--preview-vista-control-bg:
      linear-gradient(
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.34) 45%,
        rgba(0, 0, 0, 0.12) 50%,
        rgba(0, 0, 0, 0.14) 76%,
        rgba(255, 255, 255, 0.54)
      );background:linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),
      var(--preview-vista-title-bg);backdrop-filter:blur(9px) saturate(1.02);-webkit-backdrop-filter:blur(9px) saturate(1.02);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 1px 0 0 rgba(255, 255, 255, 0.62),
      inset -1px 0 0 rgba(255, 255, 255, 0.62);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(
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
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.96);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) {gap:0;overflow:hidden;background:rgba(255, 255, 255, 0.26);border:1px solid rgba(0, 0, 0, 0.35);border-top:0;border-radius:0 0 5px 5px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.84),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border:0;border-right:1px solid rgba(0, 0, 0, 0.35);border-radius:0;background:var(--preview-vista-control-bg);color:rgba(0, 0, 0, 0.82);box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.72),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd):last-child {border-right:0;}.preview-window[data-theme='windows-vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.close:where(.svelte-1u1chkd) {min-width:var(--preview-system-width);background:radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(233, 176, 166, 0.94),
        rgba(211, 110, 95, 0.96) 25% 50%,
        rgba(201, 52, 37, 0.98) 50%
      );color:rgba(255, 255, 255, 0.96);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {background:radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 10%);backdrop-filter:blur(14px) saturate(1.08);-webkit-backdrop-filter:blur(14px) saturate(1.08);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),
      radial-gradient(
        124% 134% at 100% 0%,
        color-mix(in srgb, var(--preview-tint), transparent 88%),
        transparent 38%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, 0.1),
        transparent 28%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 84%
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.62);}.preview-window[data-theme='windows-11-mica'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:11px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.1));}.preview-window[data-theme='windows-10-flat'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {border-radius:0;}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.14rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='ubuntu-yaru'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 68%);}.preview-window[data-theme='xubuntu'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.42));--preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));background:linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--preview-panel), transparent 14%);}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {--preview-top-space: max(0.16rem, calc(var(--preview-chrome-padding) * 0.46));--preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));}.preview-window[data-theme='gnome'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:color-mix(in srgb, var(--preview-panel), transparent 2%);box-shadow:none;}.preview-window[data-beam='windows-7'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:var(--preview-w7-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--preview-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--preview-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.06 + var(--preview-beam-intensity) * 0.05)) 48%,
        transparent 74%
      ),
      radial-gradient(
        154% 128% at 52% -34%,
        rgba(255, 255, 255, calc(0.56 + var(--preview-beam-intensity) * 0.22)),
        transparent 38%
      ),
      radial-gradient(
        116% 116% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--preview-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--preview-beam-intensity) * 0.16)) 22%,
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.44 + var(--preview-beam-intensity) * 0.98),
      1
    );}.preview-window[data-beam='vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:var(--preview-vista-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--preview-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--preview-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--preview-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        120% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--preview-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.16)) 20%,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 78%), transparent 42%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 1),
      1
    );}.preview-window[data-beam='xp-luna'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--preview-tint) 12%),
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        146% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--preview-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.14 + var(--preview-beam-intensity) * 0.08)) 22%,
        transparent 48%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 76%), transparent 42%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.62 + var(--preview-beam-intensity) * 0.88),
      1
    );}.preview-window[data-beam='windows-9x'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.14)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--preview-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 74%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.78),
      1
    );}.preview-window[data-beam='kde'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--preview-beam-intensity) * 0.1)),
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.05)) 30%,
        transparent 78%
      ),
      radial-gradient(
        142% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 80%), transparent 42%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.52 + var(--preview-beam-intensity) * 0.82),
      1
    );}.preview-window[data-beam='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before {background:radial-gradient(
        144% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.06)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.04)),
        transparent 76%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 90%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 42%);opacity:clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.74),
      1
    );}.preview-window[data-gloss='none'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after,
  .preview-window[data-gloss='none'].svelte-1u1chkd .preview-control:where(.svelte-1u1chkd)::after {opacity:0;}.preview-window[data-gloss='windows-7'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.3 + var(--preview-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.1)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.04)) 58%,
        transparent 88%
      ),
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.18)), transparent 46%),
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.07 + var(--preview-gloss-intensity) * 0.1)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.1)) calc(28% + var(--preview-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.03)) calc(54% + var(--preview-gloss-spacing) * 0.1),
        transparent 82%
      );opacity:calc(var(--preview-chrome-texture-opacity) * 1.02);}.preview-window[data-gloss='vista'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.36 + var(--preview-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.14 + var(--preview-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.05)) 58%,
        transparent 90%
      ),
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, calc(0.22 + var(--preview-gloss-intensity) * 0.22)), transparent 44%),
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.09 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.12)) calc(30% + var(--preview-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)) calc(58% + var(--preview-gloss-spacing) * 0.12),
        transparent 82%
      );opacity:calc(var(--preview-chrome-texture-opacity) * 1.08);}.preview-window[data-gloss='kde'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.16)),
        rgba(255, 255, 255, calc(0.06 + var(--preview-gloss-intensity) * 0.06)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 58%,
        transparent 84%
      ),
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.08)) calc(28% + var(--preview-gloss-spacing) * 0.16),
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),
        transparent 84%
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.96);}.preview-window[data-gloss='mica'].svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {background:radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.06)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--preview-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 52%, transparent 80%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),
        transparent 86%
      );opacity:calc(var(--preview-chrome-texture-opacity) * 0.92);}.preview-window[data-gloss='windows-7'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),
  .preview-window[data-gloss='vista'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),
  .preview-window[data-gloss='kde'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd),
  .preview-window[data-gloss='mica'].svelte-1u1chkd .preview-controls.windows:where(.svelte-1u1chkd) .preview-control.system:where(.svelte-1u1chkd) {background:linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.05)) 72%,
        transparent 100%
      ),
      color-mix(in srgb, var(--preview-panel), transparent 10%);}.preview-controls.windows.svelte-1u1chkd .preview-control.close:where(.svelte-1u1chkd) {color:color-mix(in srgb, var(--shell-text), transparent 12%);}.preview-body.svelte-1u1chkd {position:relative;z-index:1;padding:1rem;}.preview-body-grid.svelte-1u1chkd {display:grid;gap:0.9rem;grid-template-columns:repeat(auto-fit, minmax(12rem, 1fr));}.preview-card.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.35rem;min-width:0;padding:0.95rem 1rem;border:1px solid color-mix(in srgb, var(--preview-border), transparent 16%);border-radius:18px;background:color-mix(in srgb, var(--preview-panel), transparent 6%);}.preview-card-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.08em;text-transform:uppercase;}.preview-card.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text);font:var(--efs-font-title-sm);}.preview-card.svelte-1u1chkd p:where(.svelte-1u1chkd) {margin:0;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.preview-window.win7-theme.svelte-1u1chkd .preview-window-shadow:where(.svelte-1u1chkd),
  .preview-window.win7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before,
  .preview-window.win7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {display:none;}.preview-window.basic7-theme.svelte-1u1chkd {--w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;--w7-w-space: 6px;--w7-w-bd: var(--efs-win7-window-border, #000000b3);--w7-w-bdr: 6px;--w7-w-bg: var(--efs-win7-window-bg, #4580c4);--w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );border:1px solid var(--w7-w-bd);border-radius:var(--w7-w-bdr);background:transparent;box-shadow:2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;color:var(--w7-el-c);font-family:var(--w7-font);overflow:visible;}.preview-window.basic7-theme.svelte-1u1chkd::before {content:'';position:absolute;z-index:-1;inset:0;border-radius:var(--w7-w-bdr);background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);background-color:var(--w7-w-bg);box-shadow:inset 0 0 0 1px #fffd;opacity:1;}.preview-window.basic7-theme.svelte-1u1chkd::after {content:none;display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-window-shadow:where(.svelte-1u1chkd) {display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd) {min-height:0;padding:var(--w7-w-space);padding-top:0;border:1px solid var(--w7-w-bd);border-bottom:0;border-radius:var(--w7-w-bdr) var(--w7-w-bdr) 0 0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);background-attachment:scroll;background-color:var(--w7-w-bg);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);overflow:visible;}.preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::before,
  .preview-window.basic7-theme.svelte-1u1chkd .preview-chrome:where(.svelte-1u1chkd)::after {display:none;}.preview-window.basic7-theme.svelte-1u1chkd .preview-title.title-bar-text:where(.svelte-1u1chkd) {padding-top:var(--w7-w-space);color:#000;font:var(--w7-font);font-size:9pt;font-weight:400;letter-spacing:0;line-height:15px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.72);}.preview-window.basic7-theme.svelte-1u1chkd .preview-body.window-body:where(.svelte-1u1chkd) {margin:var(--w7-w-space);margin-top:0;padding:var(--w7-w-space);border:1px solid var(--w7-w-bd);background:var(--w7-surface);box-shadow:var(--efs-win7-body-shadow, 0 0 0 1px #fff9);color:var(--w7-el-c);}.preview-window.basic7-theme.svelte-1u1chkd .preview-card:where(.svelte-1u1chkd) {border-color:color-mix(in srgb, var(--w7-w-bd), transparent 26%);background:color-mix(in srgb, var(--w7-surface), transparent 4%);}.preview-window.basic7-theme.svelte-1u1chkd .preview-card-kicker:where(.svelte-1u1chkd),
  .preview-window.basic7-theme.svelte-1u1chkd .preview-card:where(.svelte-1u1chkd) p:where(.svelte-1u1chkd) {color:color-mix(in srgb, var(--w7-el-c), transparent 28%);}.prefs-section.svelte-1u1chkd,
  .profiles-panel.svelte-1u1chkd {position:relative;display:flex;flex-direction:column;gap:0.95rem;padding:1rem 1.05rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 12%);border-radius:22px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 26%),
      color-mix(in srgb, var(--shell-surface), transparent 4%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),
      inset 0 -1px 0 rgba(0, 0, 0, 0.18);}.prefs-section-head.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:0.85rem;padding-bottom:0.85rem;border-bottom:1px solid color-mix(in srgb, var(--shell-border), transparent 22%);}.prefs-heading-stack.svelte-1u1chkd {display:flex;min-width:0;flex-direction:column;gap:0.22rem;}.prefs-heading-stack.svelte-1u1chkd h4:where(.svelte-1u1chkd) {margin:0;color:var(--shell-text-strong);font:var(--efs-font-title-sm);letter-spacing:0.01em;}.prefs-section-body.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.85rem;}.custom-state-copy.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.24rem;}.custom-state-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.custom-state-copy.svelte-1u1chkd span:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.prefs-mini-head.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:0.45rem 1rem;}.prefs-mini-title.svelte-1u1chkd {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.12em;text-transform:uppercase;}.prefs-grid.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.9rem;align-items:stretch;}.prefs-grid.svelte-1u1chkd > :where(.svelte-1u1chkd) {flex:1 1 15rem;min-width:min(100%, 15rem);}.prefs-grid-compact.svelte-1u1chkd > :where(.svelte-1u1chkd) {flex-basis:14rem;}.theme-note.svelte-1u1chkd {margin:0;max-width:48rem;color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.6;}.preview-apply-row.svelte-1u1chkd {margin-top:0.95rem;padding-top:0.95rem;border-top:1px solid color-mix(in srgb, var(--shell-border), transparent 24%);}.preview-apply-copy.svelte-1u1chkd {display:flex;flex:1 1 18rem;min-width:0;flex-direction:column;gap:0.22rem;}.preview-apply-copy.svelte-1u1chkd strong:where(.svelte-1u1chkd) {color:var(--shell-text-strong);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.preview-apply-copy.svelte-1u1chkd span:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-body-sm);line-height:1.55;}.group-kicker.svelte-1u1chkd {color:var(--shell-muted);font:var(--efs-font-micro);letter-spacing:0.14em;text-transform:uppercase;}.prefs-section-divider.svelte-1u1chkd {width:100%;height:1px;background:linear-gradient(
        90deg,
        transparent 0,
        color-mix(in srgb, var(--shell-primary), transparent 82%) 18%,
        color-mix(in srgb, var(--shell-border), transparent 18%) 50%,
        color-mix(in srgb, var(--shell-primary), transparent 82%) 82%,
        transparent 100%
      );}.field-stack.svelte-1u1chkd {display:flex;flex-direction:column;gap:0.45rem;min-width:0;transition:opacity 160ms ease,
      filter 160ms ease,
      transform 160ms ease;}.field-stack.svelte-1u1chkd label:where(.svelte-1u1chkd) {color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd),
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;transition:transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease,
      background-color 160ms ease;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd):disabled,
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd):disabled {opacity:0.52;cursor:not-allowed;}.field-stack.svelte-1u1chkd input[type='range']:where(.svelte-1u1chkd) {padding-inline:0.75rem;accent-color:var(--shell-primary);}.field-toggle.svelte-1u1chkd {display:flex;gap:0.75rem;align-items:flex-start;justify-content:flex-start;min-height:3rem;padding:0.85rem 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);font:var(--efs-font-body-sm);line-height:1.55;transition:opacity 160ms ease,
      filter 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease;}.field-toggle-feature.svelte-1u1chkd {background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 48%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 8%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 12px 28px color-mix(in srgb, var(--shell-primary), transparent 96%);}.field-toggle.svelte-1u1chkd input:where(.svelte-1u1chkd) {width:1rem;height:1rem;margin:0.15rem 0 0;accent-color:var(--shell-primary);}.custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):not(.is-overridden),
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):not(.is-overridden) {opacity:0.6;filter:saturate(0.74);}.preset-controlled-fields.svelte-1u1chkd {min-inline-size:0;margin:0;padding:0;border:0;}.preset-controlled-fields.svelte-1u1chkd:disabled {opacity:0.84;}.custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):hover,
  .custom-section.svelte-1u1chkd .field-stack:where(.svelte-1u1chkd):focus-within,
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):hover,
  .custom-section.svelte-1u1chkd .field-toggle:where(.svelte-1u1chkd):focus-within,
  .custom-section.svelte-1u1chkd .field-stack.is-overridden:where(.svelte-1u1chkd),
  .custom-section.svelte-1u1chkd .field-toggle.is-overridden:where(.svelte-1u1chkd) {opacity:1;filter:none;}.field-stack.is-overridden.svelte-1u1chkd label:where(.svelte-1u1chkd),
  .field-toggle.is-overridden.svelte-1u1chkd {color:var(--shell-text);}.field-stack.is-overridden.svelte-1u1chkd select:where(.svelte-1u1chkd),
  .field-stack.is-overridden.svelte-1u1chkd input:where(.svelte-1u1chkd),
  .field-toggle.is-overridden.svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 42%);background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 92%),
        transparent 48%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 8%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.06),
      0 12px 26px color-mix(in srgb, var(--shell-primary), transparent 96%);}.profiles-save.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.75rem;align-items:stretch;}.profiles-save.svelte-1u1chkd input:where(.svelte-1u1chkd) {flex:1 1 14rem;width:100%;min-height:3rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 6%);border-radius:18px;background:color-mix(in srgb, var(--shell-surface), transparent 10%);color:var(--shell-text);padding:0.8rem 0.95rem;}.field-stack.svelte-1u1chkd select:where(.svelte-1u1chkd):focus,
  .field-stack.svelte-1u1chkd input:where(.svelte-1u1chkd):focus,
  .profiles-save.svelte-1u1chkd input:where(.svelte-1u1chkd):focus {outline:none;transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);box-shadow:var(--shell-focus-ring);}.footer-row.svelte-1u1chkd {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;width:100%;}.footer-pills.svelte-1u1chkd,
  .footer-actions.svelte-1u1chkd {display:flex;flex-wrap:wrap;gap:0.6rem;}.prefs-button.svelte-1u1chkd {display:inline-flex;align-items:center;justify-content:center;min-height:2.4rem;padding:0 0.95rem;border:1px solid color-mix(in srgb, var(--shell-border), transparent 8%);border-radius:999px;background:color-mix(in srgb, var(--shell-surface), transparent 8%);color:var(--shell-muted);font:var(--efs-font-label);letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease,
      box-shadow 160ms ease;}.prefs-button.svelte-1u1chkd:hover:not(:disabled) {transform:translateY(-1px);border-color:color-mix(in srgb, var(--shell-primary), transparent 44%);background:color-mix(in srgb, var(--shell-row-hover), transparent 4%);color:var(--shell-text);}.prefs-button.is-primary.svelte-1u1chkd {border-color:color-mix(in srgb, var(--shell-primary), transparent 56%);background:color-mix(in srgb, var(--shell-primary), transparent 84%);color:var(--shell-text);}.prefs-button.svelte-1u1chkd:disabled {opacity:0.45;cursor:not-allowed;transform:none;}

  @media (max-width: 47.99rem) {.prefs-section.svelte-1u1chkd,
    .profiles-panel.svelte-1u1chkd {padding:0.9rem;border-radius:20px;}.prefs-section-head.svelte-1u1chkd {padding-bottom:0.75rem;}.profiles-save.svelte-1u1chkd {flex-direction:column;}.preview-stage.svelte-1u1chkd,
    .preview-body.svelte-1u1chkd {padding-inline:0.85rem;}.preview-window.svelte-1u1chkd {--preview-system-width: 2.3rem;--preview-system-height: 1.75rem;}.preview-chrome.svelte-1u1chkd {gap:0.35rem;min-height:calc(
        var(--preview-system-height) +
          max(0.3rem, calc(var(--preview-top-space) * 0.92)) +
          max(0.12rem, calc(var(--preview-bottom-space) * 0.9))
      );padding-inline:max(0.55rem, calc(var(--preview-chrome-padding) * 0.82));}.preview-title.svelte-1u1chkd {font-size:0.82rem;width:max(0px, calc(100% - 6.6rem));max-width:max(0px, calc(100% - 6.6rem));}.preview-control.svelte-1u1chkd .app-icon {width:min(0.72rem, var(--preview-system-icon-size));height:min(0.72rem, var(--preview-system-icon-size));}
  }`
};
function Il(t, r) {
  const n = Di();
  $t(r, !0), It(t, fw);
  const a = {
    mac: "macOS",
    "windows-7": "Windows 7",
    "windows-8": "Windows 8",
    "windows-10": "Windows 10",
    "windows-11": "Windows 11",
    ubuntu: "Ubuntu",
    xubuntu: "Xubuntu",
    gnome: "GNOME"
  }, o = /* @__PURE__ */ new Set(["mac", "ubuntu", "xubuntu"]), i = Object.fromEntries(Object.entries(Po).map(([ue, Pe]) => [ue, Pe.label])), d = Object.fromEntries(Object.entries(Si).map(([ue, Pe]) => [ue, Pe.label])), c = { contained: "Contained shell", expanded: "Expand across site" }, h = {
    accent: "Primary accent",
    "accent-strong": "Accent highlight",
    "accent-soft": "Accent wash",
    "accent-secondary": "Secondary accent",
    "accent-secondary-soft": "Secondary wash"
  }, u = {
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
  }, w = {
    auto: "Preset default",
    light: "Light title",
    dark: "Dark title"
  }, P = {
    auto: "Preset effect",
    plain: "Flat",
    shadow: "Shadowed",
    glow: "Aero glow",
    emboss: "Embossed"
  }, W = Object.values(Po), M = Object.values(Si), _ = [
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
  let E = y(r, "mode", 7, "card"), z = y(r, "dataTestid", 7), T = y(r, "open", 7, !1), R = y(r, "pinned", 7, !1), D = y(r, "onOpen", 7), V = y(r, "onTogglePin", 7);
  function X(ue = nd()) {
    return { ...Re, ...ue };
  }
  let O = /* @__PURE__ */ me(ht(X())), m = /* @__PURE__ */ me(ht(X())), he = /* @__PURE__ */ me(""), J = /* @__PURE__ */ k(() => !ks(e(m), e(O))), ee = /* @__PURE__ */ k(() => e(J) ? "warning" : "accent"), se = /* @__PURE__ */ k(() => $a(e(m).themePreset)), de = /* @__PURE__ */ k(() => _.filter((ue) => e(m)[ue] !== e(se)[ue])), je = /* @__PURE__ */ k(() => e(de).length > 0), _e = /* @__PURE__ */ k(() => `${i[e(m).themePreset]}${e(je) ? " (custom)" : ""}`), re = /* @__PURE__ */ k(() => td(e(m))), fe = /* @__PURE__ */ k(() => rd(e(m))), xe = /* @__PURE__ */ k(() => jl(e(m).themePreset)), B = /* @__PURE__ */ k(() => e(m).themePreset === "aero"), F = /* @__PURE__ */ k(() => e(m).themePreset === "windows-basic"), ve = /* @__PURE__ */ k(() => e(B) || e(F)), qe = /* @__PURE__ */ k(() => e(ve) || e(m).themePreset === "windows-vista"), Te = /* @__PURE__ */ k(() => fg(e(m).themePreset)), Ge = /* @__PURE__ */ k(() => {
    const ue = bg(e(m));
    return Object.entries({
      "--preview-border-width": `${e(m).borderWidth}px`,
      "--preview-radius": `${e(m).borderRadius}px`,
      "--preview-chrome-padding": `${e(m).chromePadding}px`,
      "--preview-titlebar-height": `${e(m).titleBarHeight}px`,
      "--preview-shell-scale": `${e(m).windowScale / 100}`,
      "--preview-font-family": Si[e(m).fontPreset].stack,
      "--preview-shadow-base": e(Te),
      ...ue
    }).map(([Pe, Xe]) => `${Pe}:${Xe}`).join(";");
  });
  Wo(() => {
    const ue = oi((Pe) => {
      const Xe = X(Pe), N = !ks(e(m), e(O));
      $(O, Xe, !0), N || $(m, Xe, !0);
    });
    return () => {
      ue();
    };
  });
  function be(ue) {
    const Pe = { ...e(m), ...ue };
    if (!jl(Pe.themePreset)) {
      $(m, Pe, !0);
      return;
    }
    const Xe = $a(Pe.themePreset);
    $(
      m,
      {
        ...Pe,
        ...Xe,
        globalEdgeDock: Pe.globalEdgeDock,
        dockButtonSize: Pe.dockButtonSize,
        dockButtonWidth: Pe.dockButtonWidth,
        dockIconScale: Pe.dockIconScale,
        dockGap: Pe.dockGap,
        dockOffset: Pe.dockOffset,
        dockLabelMode: Pe.dockLabelMode,
        pageThemeSpread: Pe.pageThemeSpread
      },
      !0
    );
  }
  function ke(ue) {
    return e(m)[ue] !== e(se)[ue];
  }
  function Qe(ue) {
    return o.has(ue);
  }
  function mt(ue) {
    switch (ue) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
      case "windows-7":
        return "rounded";
      default:
        return;
    }
  }
  function Tt(ue, Pe = !1) {
    if (Pe)
      return ue === "mac" || ue === "ubuntu" || ue === "xubuntu" ? void 0 : "stack";
    switch (ue) {
      case "mac":
      case "ubuntu":
      case "xubuntu":
        return;
      default:
        return "tray";
    }
  }
  function _t(ue, Pe = !1) {
    if (Pe)
      return "stack";
    switch (ue) {
      case "windows-10":
      case "windows-11":
      case "gnome":
        return "expand";
      default:
        return;
    }
  }
  function Lt(ue) {
    const Pe = $a(ue);
    $(
      m,
      {
        ...Pe,
        globalEdgeDock: e(m).globalEdgeDock,
        dockButtonSize: e(m).dockButtonSize,
        dockButtonWidth: e(m).dockButtonWidth,
        dockIconScale: e(m).dockIconScale,
        dockGap: e(m).dockGap,
        dockOffset: e(m).dockOffset,
        dockLabelMode: e(m).dockLabelMode,
        pageThemeSpread: e(m).pageThemeSpread
      },
      !0
    );
  }
  function yt() {
    ad(e(m));
  }
  function ut() {
    $(m, X(e(O)), !0);
  }
  function dt() {
    $(m, X(Re), !0);
  }
  function st() {
    bu(e(he), e(m)), $(he, "");
  }
  var pt = {
    get mode() {
      return E();
    },
    set mode(ue = "card") {
      E(ue), b();
    },
    get dataTestid() {
      return z();
    },
    set dataTestid(ue) {
      z(ue), b();
    },
    get open() {
      return T();
    },
    set open(ue = !1) {
      T(ue), b();
    },
    get pinned() {
      return R();
    },
    set pinned(ue = !1) {
      R(ue), b();
    },
    get onOpen() {
      return D();
    },
    set onOpen(ue) {
      D(ue), b();
    },
    get onTogglePin() {
      return V();
    },
    set onTogglePin(ue) {
      V(ue), b();
    }
  };
  return nn(t, {
    eyebrow: "Window manager",
    title: "Floating panel preferences",
    description: "Tune floating widget chrome, title readability, snap behavior, and shell typography here first. Site color theme still lives in Settings > Theme Studio.",
    get mode() {
      return E();
    },
    get dataTestid() {
      return z();
    },
    get open() {
      return T();
    },
    get pinned() {
      return R();
    },
    get onOpen() {
      return D();
    },
    get onTogglePin() {
      return V();
    },
    footer: (Pe) => {
      var Xe = vw(), N = l(Xe), I = l(N);
      {
        let Ke = /* @__PURE__ */ k(() => e(J) ? "Preview pending" : "Applied");
        wt(I, {
          get label() {
            return e(Ke);
          },
          get tone() {
            return e(ee);
          }
        });
      }
      var ze = g(I, 2);
      {
        let Ke = /* @__PURE__ */ k(() => `${a[e(m).buttonLayout]} chrome`);
        wt(ze, {
          get label() {
            return e(Ke);
          },
          tone: "accent"
        });
      }
      var L = g(ze, 2);
      wt(L, {
        get label() {
          return e(_e);
        },
        tone: "info"
      });
      var ce = g(L, 2);
      {
        let Ke = /* @__PURE__ */ k(() => `${e(m).titleBarHeight}px bar • ${e(m).windowScale}% scale`);
        wt(ce, {
          get label() {
            return e(Ke);
          },
          tone: "neutral"
        });
      }
      var De = g(ce, 2);
      {
        let Ke = /* @__PURE__ */ k(() => e(m).chromeTexture && e(m).chromeBeamStyle !== "none" ? `${x[e(m).chromeBeamStyle]} ${e(m).chromeBeamIntensity}%` : "Beam off"), at = /* @__PURE__ */ k(() => e(m).chromeTexture && e(m).chromeBeamStyle !== "none" ? "accent" : "neutral");
        wt(De, {
          get label() {
            return e(Ke);
          },
          get tone() {
            return e(at);
          }
        });
      }
      var Ce = g(De, 2);
      {
        let Ke = /* @__PURE__ */ k(() => e(m).chromeGlossStyle === "none" ? "Gloss off" : `${u[e(m).chromeGlossStyle]} ${e(m).chromeGlossIntensity}%`), at = /* @__PURE__ */ k(() => e(m).chromeGlossStyle === "none" ? "neutral" : "info");
        wt(Ce, {
          get label() {
            return e(Ke);
          },
          get tone() {
            return e(at);
          }
        });
      }
      var Be = g(Ce, 2);
      {
        let Ke = /* @__PURE__ */ k(() => e(m).chromeColorize ? `${h[e(m).chromeColorSource]} ${e(m).chromeColorIntensity}%` : "Chrome neutral"), at = /* @__PURE__ */ k(() => e(m).chromeColorize ? "accent" : "neutral");
        wt(Be, {
          get label() {
            return e(Ke);
          },
          get tone() {
            return e(at);
          }
        });
      }
      var f = g(Be, 2);
      wt(f, {
        get label() {
          return w[e(m).titleTone];
        },
        tone: "neutral"
      });
      var pe = g(f, 2);
      wt(pe, {
        get label() {
          return P[e(m).titleEffect];
        },
        tone: "info"
      });
      var Me = g(pe, 2);
      {
        let Ke = /* @__PURE__ */ k(() => e(m).pageThemeSpread === "expanded" ? "accent" : "neutral");
        wt(Me, {
          get label() {
            return c[e(m).pageThemeSpread];
          },
          get tone() {
            return e(Ke);
          }
        });
      }
      var K = g(Me, 2);
      wt(K, {
        get label() {
          return d[e(m).fontPreset];
        },
        tone: "neutral"
      }), s(N);
      var nt = g(N, 2), Le = l(nt), xt = g(Le, 2), Ie = g(xt, 2);
      s(nt), s(Xe), we(() => {
        Le.disabled = !e(J), Ie.disabled = !e(J);
      }), ae("click", Le, ut), ae("click", xt, dt), ae("click", Ie, yt), G(Pe, Xe);
    },
    children: (Pe, Xe) => {
      var N = mw(), I = l(N), ze = l(I), L = l(ze), ce = g(l(L), 2);
      ga(ce, {
        title: "Shell package and presets",
        text: "Choose the chrome family first, keep the same site coverage dropdown used by the header Settings popover, and only save a custom preset when you want to keep a forked version of the current shell package."
      }), s(L), s(ze);
      var De = g(ze, 2), Ce = l(De), Be = l(Ce), f = l(Be), pe = g(f, 2);
      Ot(pe, 21, () => W, (te) => te.id, (te, Ye) => {
        var Nt = hw(), na = l(Nt, !0);
        s(Nt);
        var kn = {};
        we(() => {
          oe(na, e(Ye).id === e(m).themePreset ? e(_e) : e(Ye).label), kn !== (kn = e(Ye).id) && (Nt.value = (Nt.__value = e(Ye).id) ?? "");
        }), G(te, Nt);
      }), s(pe);
      var Me;
      kr(pe), s(Be);
      var K = g(Be, 2), nt = l(K), Le = g(nt, 2);
      Ot(Le, 21, () => M, (te) => te.id, (te, Ye) => {
        var Nt = uw(), na = l(Nt, !0);
        s(Nt);
        var kn = {};
        we(() => {
          oe(na, e(Ye).label), kn !== (kn = e(Ye).id) && (Nt.value = (Nt.__value = e(Ye).id) ?? "");
        }), G(te, Nt);
      }), s(Le);
      var xt;
      kr(Le), s(K);
      var Ie = g(K, 2), Ke = l(Ie), at = g(Ke, 2), jt = l(at);
      jt.value = jt.__value = "contained";
      var lr = g(jt);
      lr.value = lr.__value = "expanded", s(at);
      var Je;
      kr(at), s(Ie), s(Ce);
      var Pt = g(Ce, 4), Wt = l(Pt), qt = g(l(Wt), 2), wr = l(qt, !0);
      s(qt);
      var Sr = g(qt, 2), Jt = l(Sr);
      {
        var Tr = (te) => {
          var Ye = Vr("Windows 7 is locked to the vendor 7.css Aero package. Chrome and font controls are disabled so the shell stays on the exact preset.");
          G(te, Ye);
        }, Wr = (te) => {
          var Ye = Vr();
          we(() => oe(Ye, `${e(de).length ?? ""} custom control${e(de).length === 1 ? "" : "s"} differ from the preset. Changed fields below stay bright and highlighted until you save a custom preset.`)), G(te, Ye);
        }, Gn = (te) => {
          var Ye = Vr("Preset defaults are intact. The custom controls below stay subdued until you diverge from this package.");
          G(te, Ye);
        };
        ge(Jt, (te) => {
          e(xe) ? te(Tr) : e(je) ? te(Wr, 1) : te(Gn, -1);
        });
      }
      s(Sr), s(Wt);
      var an = g(Wt, 2), $e = l(an);
      bt($e);
      var Bt = g($e, 2);
      s(an), s(Pt), s(De), s(I);
      var We = g(I, 2), Ft = l(We), $o = l(Ft), ma = g(l($o), 4), Ao = l(ma, !0);
      s(ma), s($o), s(Ft);
      var dr = g(Ft, 2);
      let Ua;
      var Cr = g(l(dr), 2);
      let Mn;
      var Wn = l(Cr);
      let Vn;
      var mn = g(Wn, 2);
      let Xa;
      var Cn = l(mn);
      {
        var on = (te) => {
          var Ye = pw(), Nt = Xt(Ye), na = l(Nt);
          {
            var kn = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => mt(e(m).buttonLayout));
                tt(Ct, {
                  name: "close",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(na, (Ct) => {
              e(ve) || Ct(kn);
            });
          }
          s(Nt);
          var _n = g(Nt, 2), pi = l(_n);
          {
            var wi = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => Tt(e(m).buttonLayout));
                tt(Ct, {
                  name: "minimize",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(pi, (Ct) => {
              e(ve) || Ct(wi);
            });
          }
          s(_n);
          var aa = g(_n, 2), mi = l(aa);
          {
            var fi = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => _t(e(m).buttonLayout));
                tt(Ct, {
                  name: "maximize",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(mi, (Ct) => {
              e(ve) || Ct(fi);
            });
          }
          s(aa), we(() => {
            le(Nt, 1, St(e(B) ? "is-close" : "preview-control system close is-close"), "svelte-1u1chkd"), le(_n, 1, St(e(B) ? "is-minimize" : "preview-control system is-minimize"), "svelte-1u1chkd"), le(aa, 1, St(e(B) ? "is-maximize" : "preview-control system is-maximize"), "svelte-1u1chkd");
          }), G(te, Ye);
        }, Gt = /* @__PURE__ */ k(() => Qe(e(m).buttonLayout)), ar = (te) => {
          var Ye = ww(), Nt = Xt(Ye), na = l(Nt);
          {
            var kn = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => Tt(e(m).buttonLayout));
                tt(Ct, {
                  name: "minimize",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(na, (Ct) => {
              e(ve) || Ct(kn);
            });
          }
          s(Nt);
          var _n = g(Nt, 2), pi = l(_n);
          {
            var wi = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => _t(e(m).buttonLayout));
                tt(Ct, {
                  name: "maximize",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(pi, (Ct) => {
              e(ve) || Ct(wi);
            });
          }
          s(_n);
          var aa = g(_n, 2), mi = l(aa);
          {
            var fi = (Ct) => {
              {
                let Xr = /* @__PURE__ */ k(() => mt(e(m).buttonLayout));
                tt(Ct, {
                  name: "close",
                  get variant() {
                    return e(Xr);
                  }
                });
              }
            };
            ge(mi, (Ct) => {
              e(ve) || Ct(fi);
            });
          }
          s(aa), we(() => {
            le(Nt, 1, St(e(B) ? "is-minimize" : "preview-control system is-minimize"), "svelte-1u1chkd"), le(_n, 1, St(e(B) ? "is-maximize" : "preview-control system is-maximize"), "svelte-1u1chkd"), le(aa, 1, St(e(B) ? "is-close" : "preview-control system close is-close"), "svelte-1u1chkd");
          }), G(te, Ye);
        };
        ge(Cn, (te) => {
          e(Gt) ? te(on) : te(ar, -1);
        });
      }
      s(mn), s(Cr);
      var Ka = g(Cr, 2);
      let $r;
      s(dr);
      var fa = g(dr, 2), fn = g(l(fa), 2);
      s(fa), s(We);
      var Yn = g(We, 2), Un = l(Yn), cr = l(Un), ii = g(l(cr), 2);
      ga(ii, {
        title: "Chrome treatment",
        text: "This sheet separates structure from finish: choose layout, button side, and geometry first, then layer beam, gloss, tint, and sheen until the shell lands where you want it."
      }), s(cr), s(Un);
      var Xn = g(Un, 2), Ja = l(Xn), ba = l(Ja), si = l(ba);
      {
        var Eo = (te) => {
          var Ye = Vr("Windows 7 Aero is locked.");
          G(te, Ye);
        }, li = (te) => {
          var Ye = Vr();
          we(() => oe(Ye, e(je) ? "Preset overrides are active." : "Preset defaults are active.")), G(te, Ye);
        };
        ge(si, (te) => {
          e(xe) ? te(Eo) : te(li, -1);
        });
      }
      s(ba);
      var Ro = g(ba, 2), Oo = l(Ro);
      {
        var di = (te) => {
          var Ye = Vr("This preset renders directly through vendor `7.css`. Frame geometry, beam, gloss, tint, title treatment, and font controls are disabled here so the preview and live shell stay exact.");
          G(te, Ye);
        }, ci = (te) => {
          var Ye = Vr("Changed controls are highlighted and back at full strength. Untouched controls still read as preset-owned.");
          G(te, Ye);
        }, gi = (te) => {
          var Ye = Vr("The controls below stay intentionally subdued until you fork this preset. The first tweak marks the package as custom.");
          G(te, Ye);
        };
        ge(Oo, (te) => {
          e(xe) ? te(di) : e(je) ? te(ci, 1) : te(gi, -1);
        });
      }
      s(Ro), s(Ja);
      var gt = g(Ja, 2), Ze = g(l(gt), 2), mr = l(Ze), fr = g(l(mr), 2);
      ga(fr, {
        title: "Frame geometry",
        text: "These controls affect the overall silhouette first: button family, control side, and whether the shell reads like a pane, mica surface, or flat frame."
      }), s(mr), s(Ze);
      var Vt = g(Ze, 2), gr = l(Vt);
      let Za;
      var Qt = l(gr), Yt = g(Qt, 2), br = l(Yt);
      br.value = br.__value = "windows-11";
      var $n = g(br);
      $n.value = $n.__value = "windows-10";
      var ya = g($n);
      ya.value = ya.__value = "windows-8";
      var Kn = g(ya);
      Kn.value = Kn.__value = "windows-7";
      var Jn = g(Kn);
      Jn.value = Jn.__value = "mac";
      var xa = g(Jn);
      xa.value = xa.__value = "ubuntu";
      var er = g(xa);
      er.value = er.__value = "xubuntu";
      var bn = g(er);
      bn.value = bn.__value = "gnome", s(Yt);
      var ka;
      kr(Yt), s(gr);
      var An = g(gr, 2);
      let Io;
      var v = l(An), S = g(v, 2), Q = l(S);
      Q.value = Q.__value = "right";
      var ye = g(Q);
      ye.value = ye.__value = "left", s(S);
      var p;
      kr(S), s(An);
      var A = g(An, 2);
      let U;
      var ie = l(A), Se = g(ie, 2), rt = l(Se);
      rt.value = rt.__value = "solid";
      var zt = g(rt);
      zt.value = zt.__value = "glass";
      var Ut = g(zt);
      Ut.value = Ut.__value = "mica";
      var tr = g(Ut);
      tr.value = tr.__value = "frost";
      var yn = g(tr);
      yn.value = yn.__value = "pane";
      var Qa = g(yn);
      Qa.value = Qa.__value = "transparent", s(Se);
      var eo;
      kr(Se), s(A), s(Vt);
      var xn = g(Vt, 4), to = l(xn), Do = g(l(to), 2);
      ga(Do, {
        title: "Beam, glass, and colorization",
        text: "Beam controls the broad OS-style light sweep, gloss controls the finish pass, and colorization decides whether the active site palette is allowed to tint the chrome."
      }), s(to), s(xn);
      var Zn = g(xn, 2), Qn = l(Zn);
      let ro;
      var ea = l(Qn), Ur = g(ea, 2), _a = l(Ur);
      _a.value = _a.__value = "none";
      var no = g(_a);
      no.value = no.__value = "windows-7";
      var ao = g(no);
      ao.value = ao.__value = "vista";
      var qa = g(ao);
      qa.value = qa.__value = "xp-luna";
      var oo = g(qa);
      oo.value = oo.__value = "windows-9x";
      var io = g(oo);
      io.value = io.__value = "kde";
      var vt = g(io);
      vt.value = vt.__value = "mica", s(Ur);
      var Mt;
      kr(Ur), s(Qn);
      var ct = g(Qn, 2);
      let vr;
      var Zt = l(ct), yr = l(Zt);
      s(Zt);
      var Et = g(Zt, 2);
      bt(Et), s(ct);
      var Ar = g(ct, 2);
      let hr;
      var Br = l(Ar), Fr = g(Br, 2), En = l(Fr);
      En.value = En.__value = "none";
      var ft = g(En);
      ft.value = ft.__value = "windows-7";
      var kt = g(ft);
      kt.value = kt.__value = "vista";
      var or = g(kt);
      or.value = or.__value = "kde";
      var ta = g(or);
      ta.value = ta.__value = "mica", s(Fr);
      var Sa;
      kr(Fr), s(Ar);
      var ir = g(Ar, 2);
      let Nr;
      var so = l(ir), Rs = l(so);
      s(so);
      var Ta = g(so, 2);
      bt(Ta), s(ir);
      var Lo = g(ir, 2);
      let vi;
      var Bo = l(Lo), Bi = l(Bo);
      s(Bo);
      var lo = g(Bo, 2);
      bt(lo), s(Lo);
      var co = g(Lo, 2);
      let Fi;
      var hi = l(co);
      bt(hi), jr(2), s(co);
      var Fo = g(co, 2);
      let ne;
      var Fe = l(Fo), Y = g(Fe, 2), H = l(Y);
      H.value = H.__value = "accent";
      var ot = g(H);
      ot.value = ot.__value = "accent-strong";
      var Er = g(ot);
      Er.value = Er.__value = "accent-soft";
      var ra = g(Er);
      ra.value = ra.__value = "accent-secondary";
      var od = g(ra);
      od.value = od.__value = "accent-secondary-soft", s(Y);
      var id;
      kr(Y), s(Fo);
      var Os = g(Fo, 2);
      let sd;
      var Ni = l(Os), Tg = l(Ni);
      s(Ni);
      var ui = g(Ni, 2);
      bt(ui), s(Os), s(Zn);
      var Is = g(Zn, 4), ld = l(Is), jg = g(l(ld), 2);
      ga(jg, {
        title: "Interaction and frame details",
        text: "Use these controls to keep title text readable, tune drag and resize behavior, and adjust the final edge weight after the shell finish is already chosen."
      }), s(ld), s(Is);
      var dd = g(Is, 2), Hi = l(dd);
      let cd;
      var gd = l(Hi), ja = g(gd, 2), Ds = l(ja);
      Ds.value = Ds.__value = "left";
      var Ls = g(Ds);
      Ls.value = Ls.__value = "center";
      var vd = g(Ls);
      vd.value = vd.__value = "right", s(ja);
      var hd;
      kr(ja), s(Hi);
      var Gi = g(Hi, 2);
      let ud;
      var pd = l(Gi), Pa = g(pd, 2), Bs = l(Pa);
      Bs.value = Bs.__value = "auto";
      var Fs = g(Bs);
      Fs.value = Fs.__value = "light";
      var wd = g(Fs);
      wd.value = wd.__value = "dark", s(Pa);
      var md;
      kr(Pa), s(Gi);
      var Vi = g(Gi, 2);
      let fd;
      var bd = l(Vi), za = g(bd, 2), Ns = l(za);
      Ns.value = Ns.__value = "auto";
      var Hs = g(Ns);
      Hs.value = Hs.__value = "plain";
      var Gs = g(Hs);
      Gs.value = Gs.__value = "shadow";
      var Vs = g(Gs);
      Vs.value = Vs.__value = "glow";
      var yd = g(Vs);
      yd.value = yd.__value = "emboss", s(za);
      var xd;
      kr(za), s(Vi);
      var Yi = g(Vi, 2);
      let kd;
      var Ui = l(Yi), Pg = l(Ui);
      s(Ui);
      var Xi = g(Ui, 2);
      bt(Xi), s(Yi);
      var Ki = g(Yi, 2);
      let _d;
      var Ji = l(Ki), zg = l(Ji);
      s(Ji);
      var Zi = g(Ji, 2);
      bt(Zi), s(Ki);
      var Qi = g(Ki, 2);
      let qd;
      var Sd = l(Qi), Ma = g(Sd, 2), Ys = l(Ma);
      Ys.value = Ys.__value = "pin";
      var Td = g(Ys);
      Td.value = Td.__value = "none", s(Ma);
      var jd;
      kr(Ma), s(Qi);
      var es = g(Qi, 2);
      let Pd;
      var zd = l(es), Wa = g(zd, 2), Us = l(Wa);
      Us.value = Us.__value = "anchored";
      var Md = g(Us);
      Md.value = Md.__value = "mirrored", s(Wa);
      var Wd;
      kr(Wa), s(es);
      var ts = g(es, 2);
      let Cd;
      var rs = l(ts), Mg = l(rs);
      s(rs);
      var ns = g(rs, 2);
      bt(ns), s(ts);
      var as = g(ts, 2);
      let $d;
      var os = l(as), Wg = l(os);
      s(os);
      var is = g(os, 2);
      bt(is), s(as);
      var ss = g(as, 2);
      let Ad;
      var ls = l(ss), Cg = l(ls);
      s(ls);
      var ds = g(ls, 2);
      bt(ds), s(ss);
      var Xs = g(ss, 2);
      let Ed;
      var Ks = l(Xs);
      bt(Ks), jr(2), s(Xs), s(dd), s(gt), s(Xn), s(Yn), s(N), we(
        (te, Ye, Nt, na, kn, _n, pi, wi, aa, mi, fi, Ct, Xr, $g, Ag, Eg, Rg, Og, Ig, Dg, Lg, Bg, Fg) => {
          j(f, "for", `${n}-theme`), j(pe, "id", `${n}-theme`), Me !== (Me = e(m).themePreset) && (pe.value = (pe.__value = e(m).themePreset) ?? "", ur(pe, e(m).themePreset)), j(nt, "for", `${n}-font`), j(Le, "id", `${n}-font`), Le.disabled = e(xe), xt !== (xt = e(m).fontPreset) && (Le.value = (Le.__value = e(m).fontPreset) ?? "", ur(Le, e(m).fontPreset)), j(Ke, "for", `${n}-page-theme-spread`), j(at, "id", `${n}-page-theme-spread`), Je !== (Je = e(m).pageThemeSpread) && (at.value = (at.__value = e(m).pageThemeSpread) ?? "", ur(at, e(m).pageThemeSpread)), j(Pt, "data-custom", e(je)), oe(wr, e(_e)), j($e, "id", `${n}-profile-name`), j($e, "placeholder", `${i[e(m).themePreset]} custom`), Or($e, e(he)), Bt.disabled = te, j(We, "data-layout", e(m).buttonLayout), j(We, "data-style", e(m).chromeStyle), oe(Ao, e(J) ? "Draft differs from the live shell until you apply it." : "Preview matches the live shell."), Ua = le(dr, 1, "preview-window svelte-1u1chkd", null, Ua, {
            win7: e(ve),
            "win7-theme": e(B),
            "basic7-theme": e(F),
            window: e(ve),
            active: e(ve),
            glass: e(B)
          }), j(dr, "data-layout", e(xe) ? void 0 : e(m).buttonLayout), j(dr, "data-theme", e(m).themePreset), j(dr, "data-beam", e(xe) ? void 0 : e(m).chromeTexture ? e(m).chromeBeamStyle : "none"), j(dr, "data-gloss", e(xe) ? void 0 : e(m).chromeGlossStyle), j(dr, "data-system-placement", e(m).systemButtonPlacement), j(dr, "data-style", e(xe) ? void 0 : e(m).chromeStyle), j(dr, "data-title-tone", e(xe) ? void 0 : e(re)), j(dr, "data-title-effect", e(xe) ? void 0 : e(fe)), Pr(dr, e(Ge)), Mn = le(Cr, 1, St(e(B) ? "title-bar" : "preview-chrome"), "svelte-1u1chkd", Mn, {
            "title-bar": !e(B) && e(qe)
          }), Vn = le(
            Wn,
            1,
            St(e(B) ? "title-bar-text" : `preview-title align-${e(m).alignment}`),
            "svelte-1u1chkd",
            Vn,
            {
              "title-bar-text": !e(B) && e(qe)
            }
          ), Xa = le(
            mn,
            1,
            St(e(B) ? "title-bar-controls" : `preview-controls windows variant-${e(m).buttonLayout}`),
            "svelte-1u1chkd",
            Xa,
            {
              "title-bar-controls": !e(B) && e(qe)
            }
          ), $r = le(Ka, 1, "preview-body svelte-1u1chkd", null, $r, { "window-body": e(ve) }), fn.disabled = !e(J), j(Yn, "data-pristine", !e(je)), gt.disabled = e(xe), Za = le(gr, 1, "field-stack svelte-1u1chkd", null, Za, Ye), j(Qt, "for", `${n}-layout`), j(Yt, "id", `${n}-layout`), ka !== (ka = e(m).buttonLayout) && (Yt.value = (Yt.__value = e(m).buttonLayout) ?? "", ur(Yt, e(m).buttonLayout)), Io = le(An, 1, "field-stack svelte-1u1chkd", null, Io, Nt), j(v, "for", `${n}-system-placement`), j(S, "id", `${n}-system-placement`), p !== (p = e(m).systemButtonPlacement) && (S.value = (S.__value = e(m).systemButtonPlacement) ?? "", ur(S, e(m).systemButtonPlacement)), U = le(A, 1, "field-stack svelte-1u1chkd", null, U, na), j(ie, "for", `${n}-chrome`), j(Se, "id", `${n}-chrome`), eo !== (eo = e(m).chromeStyle) && (Se.value = (Se.__value = e(m).chromeStyle) ?? "", ur(Se, e(m).chromeStyle)), ro = le(Qn, 1, "field-stack svelte-1u1chkd", null, ro, kn), j(ea, "for", `${n}-beam-style`), j(Ur, "id", `${n}-beam-style`), Mt !== (Mt = e(m).chromeTexture ? e(m).chromeBeamStyle : "none") && (Ur.value = (Ur.__value = e(m).chromeTexture ? e(m).chromeBeamStyle : "none") ?? "", ur(Ur, e(m).chromeTexture ? e(m).chromeBeamStyle : "none")), vr = le(ct, 1, "field-stack svelte-1u1chkd", null, vr, _n), j(Zt, "for", `${n}-beam-intensity`), oe(yr, `Beam intensity (${(e(m).chromeTexture ? e(m).chromeBeamIntensity : 0) ?? ""}%)`), j(Et, "id", `${n}-beam-intensity`), Or(Et, e(m).chromeBeamIntensity), Et.disabled = !e(m).chromeTexture || e(m).chromeBeamStyle === "none", hr = le(Ar, 1, "field-stack svelte-1u1chkd", null, hr, pi), j(Br, "for", `${n}-gloss-style`), j(Fr, "id", `${n}-gloss-style`), Sa !== (Sa = e(m).chromeGlossStyle) && (Fr.value = (Fr.__value = e(m).chromeGlossStyle) ?? "", ur(Fr, e(m).chromeGlossStyle)), Nr = le(ir, 1, "field-stack svelte-1u1chkd", null, Nr, wi), j(so, "for", `${n}-gloss-intensity`), oe(Rs, `Gloss intensity (${e(m).chromeGlossIntensity ?? ""}%)`), j(Ta, "id", `${n}-gloss-intensity`), Or(Ta, e(m).chromeGlossIntensity), Ta.disabled = e(m).chromeGlossStyle === "none", vi = le(Lo, 1, "field-stack svelte-1u1chkd", null, vi, aa), j(Bo, "for", `${n}-gloss-spacing`), oe(Bi, `Gloss sweep spacing (${e(m).chromeGlossSpacing ?? ""}px)`), j(lo, "id", `${n}-gloss-spacing`), Or(lo, e(m).chromeGlossSpacing), lo.disabled = e(m).chromeGlossStyle === "none", Fi = le(co, 1, "field-toggle svelte-1u1chkd", null, Fi, mi), ql(hi, e(m).chromeColorize), ne = le(Fo, 1, "field-stack svelte-1u1chkd", null, ne, fi), j(Fe, "for", `${n}-chrome-color-source`), j(Y, "id", `${n}-chrome-color-source`), Y.disabled = !e(m).chromeColorize, id !== (id = e(m).chromeColorSource) && (Y.value = (Y.__value = e(m).chromeColorSource) ?? "", ur(Y, e(m).chromeColorSource)), sd = le(Os, 1, "field-stack svelte-1u1chkd", null, sd, Ct), j(Ni, "for", `${n}-chrome-color-intensity`), oe(Tg, `Colorize intensity (${e(m).chromeColorIntensity ?? ""}%)`), j(ui, "id", `${n}-chrome-color-intensity`), Or(ui, e(m).chromeColorIntensity), ui.disabled = !e(m).chromeColorize, cd = le(Hi, 1, "field-stack svelte-1u1chkd", null, cd, Xr), j(gd, "for", `${n}-alignment`), j(ja, "id", `${n}-alignment`), hd !== (hd = e(m).alignment) && (ja.value = (ja.__value = e(m).alignment) ?? "", ur(ja, e(m).alignment)), ud = le(Gi, 1, "field-stack svelte-1u1chkd", null, ud, $g), j(pd, "for", `${n}-title-tone`), j(Pa, "id", `${n}-title-tone`), md !== (md = e(m).titleTone) && (Pa.value = (Pa.__value = e(m).titleTone) ?? "", ur(Pa, e(m).titleTone)), fd = le(Vi, 1, "field-stack svelte-1u1chkd", null, fd, Ag), j(bd, "for", `${n}-title-effect`), j(za, "id", `${n}-title-effect`), xd !== (xd = e(m).titleEffect) && (za.value = (za.__value = e(m).titleEffect) ?? "", ur(za, e(m).titleEffect)), kd = le(Yi, 1, "field-stack svelte-1u1chkd", null, kd, Eg), j(Ui, "for", `${n}-titlebar-height`), oe(Pg, `Titlebar height (${e(m).titleBarHeight ?? ""}px)`), j(Xi, "id", `${n}-titlebar-height`), Or(Xi, e(m).titleBarHeight), _d = le(Ki, 1, "field-stack svelte-1u1chkd", null, _d, Rg), j(Ji, "for", `${n}-window-scale`), oe(zg, `Shell scale (${e(m).windowScale ?? ""}%)`), j(Zi, "id", `${n}-window-scale`), Or(Zi, e(m).windowScale), qd = le(Qi, 1, "field-stack svelte-1u1chkd", null, qd, Og), j(Sd, "for", `${n}-shift-action`), j(Ma, "id", `${n}-shift-action`), jd !== (jd = e(m).shiftDragAction) && (Ma.value = (Ma.__value = e(m).shiftDragAction) ?? "", ur(Ma, e(m).shiftDragAction)), Pd = le(es, 1, "field-stack svelte-1u1chkd", null, Pd, Ig), j(zd, "for", `${n}-side-resize`), j(Wa, "id", `${n}-side-resize`), Wd !== (Wd = e(m).sideResizeMode) && (Wa.value = (Wa.__value = e(m).sideResizeMode) ?? "", ur(Wa, e(m).sideResizeMode)), Cd = le(ts, 1, "field-stack svelte-1u1chkd", null, Cd, Dg), j(rs, "for", `${n}-border`), oe(Mg, `Border width (${e(m).borderWidth ?? ""}px)`), j(ns, "id", `${n}-border`), Or(ns, e(m).borderWidth), $d = le(as, 1, "field-stack svelte-1u1chkd", null, $d, Lg), j(os, "for", `${n}-radius`), oe(Wg, `Border radius (${e(m).borderRadius ?? ""}px)`), j(is, "id", `${n}-radius`), Or(is, e(m).borderRadius), Ad = le(ss, 1, "field-stack svelte-1u1chkd", null, Ad, Bg), j(ls, "for", `${n}-padding`), oe(Cg, `Chrome inset (${e(m).chromePadding ?? ""}px)`), j(ds, "id", `${n}-padding`), Or(ds, e(m).chromePadding), Ed = le(Xs, 1, "field-toggle svelte-1u1chkd", null, Ed, Fg), ql(Ks, e(m).snapRestoreOnRelease);
        },
        [
          () => !e(he).trim() || !e(je),
          () => ({ "is-overridden": ke("buttonLayout") }),
          () => ({ "is-overridden": ke("systemButtonPlacement") }),
          () => ({ "is-overridden": ke("chromeStyle") }),
          () => ({ "is-overridden": ke("chromeBeamStyle") }),
          () => ({ "is-overridden": ke("chromeBeamIntensity") }),
          () => ({ "is-overridden": ke("chromeGlossStyle") }),
          () => ({ "is-overridden": ke("chromeGlossIntensity") }),
          () => ({ "is-overridden": ke("chromeGlossSpacing") }),
          () => ({ "is-overridden": ke("chromeColorize") }),
          () => ({ "is-overridden": ke("chromeColorSource") }),
          () => ({ "is-overridden": ke("chromeColorIntensity") }),
          () => ({ "is-overridden": ke("alignment") }),
          () => ({ "is-overridden": ke("titleTone") }),
          () => ({ "is-overridden": ke("titleEffect") }),
          () => ({ "is-overridden": ke("titleBarHeight") }),
          () => ({ "is-overridden": ke("windowScale") }),
          () => ({ "is-overridden": ke("shiftDragAction") }),
          () => ({ "is-overridden": ke("sideResizeMode") }),
          () => ({ "is-overridden": ke("borderWidth") }),
          () => ({ "is-overridden": ke("borderRadius") }),
          () => ({ "is-overridden": ke("chromePadding") }),
          () => ({ "is-overridden": ke("snapRestoreOnRelease") })
        ]
      ), ae("change", pe, (te) => Lt(te.currentTarget.value)), ae("change", Le, (te) => be({ fontPreset: te.currentTarget.value })), ae("change", at, (te) => be({ pageThemeSpread: te.currentTarget.value })), ae("input", $e, (te) => {
        $(he, te.currentTarget.value, !0);
      }), ae("click", Bt, st), ae("click", fn, yt), ae("change", Yt, (te) => be({ buttonLayout: te.currentTarget.value })), ae("change", S, (te) => be({ systemButtonPlacement: te.currentTarget.value })), ae("change", Se, (te) => be({ chromeStyle: te.currentTarget.value })), ae("change", Ur, (te) => {
        const Ye = te.currentTarget.value;
        be({
          chromeTexture: Ye !== "none",
          chromeBeamStyle: Ye,
          chromeBeamIntensity: Ye === "none" ? 0 : e(m).chromeBeamIntensity > 0 ? e(m).chromeBeamIntensity : q[Ye]
        });
      }), ae("input", Et, (te) => be({
        chromeBeamIntensity: Number.parseInt(te.currentTarget.value, 10)
      })), ae("change", Fr, (te) => {
        const Ye = te.currentTarget.value;
        be({ chromeGlossStyle: Ye });
      }), ae("input", Ta, (te) => be({
        chromeGlossIntensity: Number.parseInt(te.currentTarget.value, 10)
      })), ae("input", lo, (te) => be({
        chromeGlossSpacing: Number.parseInt(te.currentTarget.value, 10)
      })), ae("change", hi, (te) => be({ chromeColorize: te.currentTarget.checked })), ae("change", Y, (te) => be({ chromeColorSource: te.currentTarget.value })), ae("input", ui, (te) => be({
        chromeColorIntensity: Number.parseInt(te.currentTarget.value, 10)
      })), ae("change", ja, (te) => be({ alignment: te.currentTarget.value })), ae("change", Pa, (te) => be({ titleTone: te.currentTarget.value })), ae("change", za, (te) => be({ titleEffect: te.currentTarget.value })), ae("input", Xi, (te) => be({
        titleBarHeight: Number.parseInt(te.currentTarget.value, 10)
      })), ae("input", Zi, (te) => be({ windowScale: Number.parseInt(te.currentTarget.value, 10) })), ae("change", Ma, (te) => be({ shiftDragAction: te.currentTarget.value })), ae("change", Wa, (te) => be({ sideResizeMode: te.currentTarget.value })), ae("input", ns, (te) => be({ borderWidth: Number.parseInt(te.currentTarget.value, 10) })), ae("input", is, (te) => be({ borderRadius: Number.parseInt(te.currentTarget.value, 10) })), ae("input", ds, (te) => be({
        chromePadding: Number.parseInt(te.currentTarget.value, 10)
      })), ae("change", Ks, (te) => be({ snapRestoreOnRelease: te.currentTarget.checked })), G(Pe, N);
    },
    $$slots: { footer: !0, default: !0 }
  }), At(pt);
}
rn(["click", "change", "input"]);
Dt(
  Il,
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
var bw = /* @__PURE__ */ Z('<button class="tool-dock-remove svelte-5ypgve" type="button">×</button>'), yw = /* @__PURE__ */ Z('<div class="tool-dock-item svelte-5ypgve"><span class="tool-dock-popout svelte-5ypgve" aria-hidden="true"> </span> <button type="button"><span class="tool-dock-tooltip svelte-5ypgve"> </span> <span class="tool-dock-icon svelte-5ypgve"></span></button> <!></div>'), xw = /* @__PURE__ */ Z('<div role="toolbar" aria-label="Pinned actions"></div>');
const kw = {
  hash: "svelte-5ypgve",
  code: `.tool-dock.svelte-5ypgve {position:fixed;z-index:520;display:inline-flex;gap:var(--efs-dock-gap, 0.6rem);align-items:flex-end;pointer-events:none;}.tool-dock-item.svelte-5ypgve {position:relative;display:inline-flex;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve,
  .tool-dock[data-edge='right'].svelte-5ypgve {flex-direction:column-reverse;}.tool-dock[data-edge='top'].svelte-5ypgve,
  .tool-dock[data-edge='bottom'].svelte-5ypgve {flex-direction:row;align-items:center;}.tool-dock[data-edge='left'].svelte-5ypgve {align-items:flex-start;}.tool-dock.is-dragging.svelte-5ypgve {transition:none;}.tool-dock-button.svelte-5ypgve {position:relative;z-index:1;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem));height:var(--efs-dock-button-size, 3.1rem);border:1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);border-radius:min(999px, calc(var(--efs-dock-button-size, 3.1rem) * 0.52));background:radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 54%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.92)), transparent 2%);color:var(--shell-text, #f8fafc);box-shadow:0 18px 44px rgba(0, 0, 0, 0.32),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%);cursor:grab;transition:transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease;}.tool-dock.is-dragging.svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve),
  .tool-dock-button.svelte-5ypgve:active {cursor:grabbing;}.tool-dock-button.svelte-5ypgve:hover {transform:translateY(-2px) scale(1.02);border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 36%);box-shadow:0 22px 54px rgba(0, 0, 0, 0.38),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 78%);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover,
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover {transform:translateY(0) translateX(1px) scale(1.02);}.tool-dock-button.is-active.svelte-5ypgve {border-color:color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 38%);background:radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 82%),
        transparent 56%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);}.tool-dock-icon.svelte-5ypgve {display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-icon-size, 1.2rem);height:var(--efs-dock-icon-size, 1.2rem);background:currentColor;mask:var(--icon-mask) center / contain no-repeat;-webkit-mask:var(--icon-mask) center / contain no-repeat;transform:scale(var(--efs-dock-icon-scale, 1));transform-origin:center;}.tool-dock-remove.svelte-5ypgve {position:absolute;right:-0.1rem;bottom:-0.08rem;z-index:2;pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:var(--efs-dock-remove-size, 1rem);height:var(--efs-dock-remove-size, 1rem);border:1px solid color-mix(in srgb, var(--shell-text, #f8fafc), transparent 18%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), var(--shell-text, #f8fafc) 12%);color:var(--shell-text-strong, var(--shell-text, #f8fafc));font:700 calc(var(--efs-dock-remove-size, 1rem) * 0.72) / 1
      var(--efs-font-sans, sans-serif);box-shadow:0 6px 14px rgba(0, 0, 0, 0.28);cursor:pointer;transition:transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;}.tool-dock-remove.svelte-5ypgve:hover {transform:scale(1.06);background:linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, #dc2626, var(--shell-panel, rgba(10, 16, 30, 0.96)) 18%);box-shadow:0 8px 18px rgba(0, 0, 0, 0.34);}.tool-dock-tooltip.svelte-5ypgve {position:absolute;z-index:2;opacity:0;pointer-events:none;white-space:nowrap;padding:0.55rem 0.75rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 52%);border-radius:12px;background:radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%);color:var(--shell-text, #f8fafc);font:var(--efs-font-body-sm, 600 0.875rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.42),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 18%);transition:opacity 140ms ease,
      transform 140ms ease;}.tool-dock-popout.svelte-5ypgve {position:absolute;z-index:0;opacity:0;pointer-events:none;display:none;align-items:center;max-width:var(--efs-dock-popout-width, 10rem);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0.5rem 0.85rem;border:1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 56%);border-radius:999px;background:linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--shell-inset-bg, rgba(2, 6, 23, 0.92)), transparent 0%),
        color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%)
      );color:var(--shell-text, #f8fafc);font:var(--efs-font-body-xs, 600 0.75rem/1.3 sans-serif);box-shadow:0 16px 34px rgba(0, 0, 0, 0.34),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 20%);transition:opacity 180ms ease,
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {right:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(0.35rem);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {left:calc(100% + 0.75rem);top:50%;transform:translateY(-50%) translateX(-0.35rem);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {top:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(-0.35rem);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {bottom:calc(100% + 0.75rem);left:50%;transform:translateX(-50%) translateY(0.35rem);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;right:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:right center;padding-right:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:50%;left:calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);transform:translateY(-50%) scaleX(0.72);transform-origin:left center;padding-left:calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {left:50%;min-width:max-content;padding-inline:0.85rem;transform-origin:center center;}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {top:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {bottom:calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);transform:translateX(-50%) scaleX(0.82);}.tool-dock-button.svelte-5ypgve:hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock-button.svelte-5ypgve:focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='always'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='hidden'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {display:none;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-popout:where(.svelte-5ypgve) {display:inline-flex;}.tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {opacity:1;}.tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='right'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='left'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateY(-50%) scaleX(1);}.tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='top'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):hover .tool-dock-popout:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='popout'][data-edge='bottom'].svelte-5ypgve .tool-dock-item:where(.svelte-5ypgve):focus-within .tool-dock-popout:where(.svelte-5ypgve) {transform:translateX(-50%) scaleX(1);}.tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='right'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='left'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-label-mode='always'][data-edge='right'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='always'][data-edge='left'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateY(-50%) translateX(0);}.tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='top'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):hover .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-edge='bottom'].svelte-5ypgve .tool-dock-button:where(.svelte-5ypgve):focus-visible .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}.tool-dock[data-label-mode='always'][data-edge='top'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve),
  .tool-dock[data-label-mode='always'][data-edge='bottom'].svelte-5ypgve .tool-dock-tooltip:where(.svelte-5ypgve) {transform:translateX(-50%) translateY(0);}

  @media (max-width: 47.99rem) {.tool-dock-tooltip.svelte-5ypgve {display:none;}.tool-dock-popout.svelte-5ypgve {display:none !important;}
  }`
};
function Sg(t, r) {
  $t(r, !0), It(t, kw);
  const n = 6, a = 0.08, o = 0.92;
  let i = y(r, "items", 23, () => []), d = y(r, "position", 23, () => ({ edge: "right", ratio: 0.84 })), c = y(r, "labelMode", 7, "hover"), h = y(r, "onActivate", 7), u = y(r, "onRemove", 7), x = y(r, "onPositionChange", 7), q = /* @__PURE__ */ me(null), w = /* @__PURE__ */ me(null), P = /* @__PURE__ */ me(null);
  function W(re) {
    return Math.max(a, Math.min(o, re));
  }
  function M(re, fe) {
    return { edge: re, ratio: W(fe) };
  }
  function _(re, fe) {
    var qe;
    if (typeof window > "u")
      return e(q) ?? M(d().edge, d().ratio);
    const xe = Math.max(window.innerWidth, 1), B = Math.max(window.innerHeight, 1), F = {
      left: re,
      right: xe - re,
      top: fe,
      bottom: B - fe
    }, ve = ((qe = Object.entries(F).sort((Te, Ge) => Te[1] - Ge[1])[0]) == null ? void 0 : qe[0]) ?? (e(q) ?? M(d().edge, d().ratio)).edge;
    return ve === "left" || ve === "right" ? M(ve, fe / B) : M(ve, re / xe);
  }
  function E(re, fe) {
    fe.button === 0 && $(
      w,
      {
        itemId: re,
        pointerId: fe.pointerId,
        startX: fe.clientX,
        startY: fe.clientY,
        dragging: !1
      },
      !0
    );
  }
  function z(re) {
    var B;
    if (!e(w) || re.pointerId !== e(w).pointerId)
      return;
    const fe = Math.hypot(re.clientX - e(w).startX, re.clientY - e(w).startY) >= n;
    if (!e(w).dragging && !fe)
      return;
    e(w).dragging || ($(w, { ...e(w), dragging: !0 }, !0), $(P, e(w).itemId, !0));
    const xe = _(re.clientX, re.clientY);
    $(q, xe, !0), (B = x()) == null || B(xe);
  }
  function T(re) {
    var xe;
    if (!e(w) || re.pointerId !== e(w).pointerId)
      return;
    const fe = e(w).itemId;
    e(w).dragging ? ((xe = x()) == null || xe(e(D)), typeof window < "u" && window.requestAnimationFrame(() => {
      e(P) === fe && $(P, null), $(q, null);
    })) : $(q, null), $(w, null);
  }
  function R(re) {
    var fe;
    if (e(P) === re) {
      $(P, null);
      return;
    }
    (fe = h()) == null || fe(re);
  }
  let D = /* @__PURE__ */ k(() => e(q) ?? M(d().edge, d().ratio)), V = /* @__PURE__ */ k(() => e(D).edge === "left" || e(D).edge === "right" ? `${(e(D).ratio * 100).toFixed(3)}%` : void 0), X = /* @__PURE__ */ k(() => e(D).edge === "top" || e(D).edge === "bottom" ? `${(e(D).ratio * 100).toFixed(3)}%` : void 0), O = /* @__PURE__ */ k(() => e(D).edge === "top" ? "var(--efs-dock-offset, 1rem)" : void 0), m = /* @__PURE__ */ k(() => e(D).edge === "right" ? "var(--efs-dock-offset, 1rem)" : void 0), he = /* @__PURE__ */ k(() => e(D).edge === "bottom" ? "var(--efs-dock-offset, 1rem)" : void 0), J = /* @__PURE__ */ k(() => e(D).edge === "left" ? "var(--efs-dock-offset, 1rem)" : void 0), ee = /* @__PURE__ */ k(() => e(D).edge === "left" || e(D).edge === "right" ? "translateY(-100%)" : "translateX(-50%)");
  var se = {
    get items() {
      return i();
    },
    set items(re = []) {
      i(re), b();
    },
    get position() {
      return d();
    },
    set position(re = { edge: "right", ratio: 0.84 }) {
      d(re), b();
    },
    get labelMode() {
      return c();
    },
    set labelMode(re = "hover") {
      c(re), b();
    },
    get onActivate() {
      return h();
    },
    set onActivate(re) {
      h(re), b();
    },
    get onRemove() {
      return u();
    },
    set onRemove(re) {
      u(re), b();
    },
    get onPositionChange() {
      return x();
    },
    set onPositionChange(re) {
      x(re), b();
    }
  }, de = ua();
  _o("pointermove", _i, z), _o("pointerup", _i, T), _o("pointercancel", _i, T);
  var je = Xt(de);
  {
    var _e = (re) => {
      var fe = xw();
      let xe, B;
      Ot(fe, 21, i, (F) => F.id, (F, ve) => {
        var qe = yw(), Te = l(qe), Ge = l(Te, !0);
        s(Te);
        var be = g(Te, 2);
        let ke;
        var Qe = l(be), mt = l(Qe, !0);
        s(Qe);
        var Tt = g(Qe, 2);
        let _t;
        s(be);
        var Lt = g(be, 2);
        {
          var yt = (ut) => {
            var dt = bw();
            we(() => {
              j(dt, "aria-label", `Remove ${e(ve).label}`), j(dt, "title", `Remove ${e(ve).label}`);
            }), ae("click", dt, (st) => {
              st.stopPropagation(), u()(e(ve).id);
            }), G(ut, dt);
          };
          ge(Lt, (ut) => {
            u() && ut(yt);
          });
        }
        s(qe), we(() => {
          oe(Ge, e(ve).label), ke = le(be, 1, "tool-dock-button svelte-5ypgve", null, ke, { "is-active": e(ve).active }), j(be, "aria-label", e(ve).label), j(be, "title", e(ve).label), oe(mt, e(ve).label), _t = Pr(Tt, "", _t, { "--icon-mask": e(ve).iconMask });
        }), ae("pointerdown", be, (ut) => E(e(ve).id, ut)), ae("click", be, () => R(e(ve).id)), G(F, qe);
      }), s(fe), we(
        (F) => {
          xe = le(fe, 1, "tool-dock svelte-5ypgve", null, xe, F), j(fe, "data-edge", e(D).edge), j(fe, "data-label-mode", c()), B = Pr(fe, "", B, {
            top: e(V) ?? e(O),
            left: e(X) ?? e(J),
            right: e(m),
            bottom: e(he),
            transform: e(ee)
          });
        },
        [
          () => {
            var F;
            return { "is-dragging": !!((F = e(w)) != null && F.dragging) };
          }
        ]
      ), G(re, fe);
    };
    ge(je, (re) => {
      i().length > 0 && re(_e);
    });
  }
  return G(t, de), At(se);
}
rn(["pointerdown", "click"]);
Dt(
  Sg,
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
var _w = /* @__PURE__ */ Z("<!> <div><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>", 1), qw = /* @__PURE__ */ Z("<!> <!>", 1);
const Sw = {
  hash: "svelte-vg7d0z",
  code: `
  @import '../../../styles/win7.css';
  @import '../../../styles/win7-overrides.css';:host {display:block;padding:clamp(1rem, 1rem + 0.8vw, 1.75rem);font-family:var(
        --admin-efs-font-sans,
        var(--admin-shell-font-sans, var(--efs-font-sans, var(--shell-font-sans)))
      );color-scheme:dark;color:var(--admin-shell-text, #e6eefb);background:radial-gradient(
        circle at top left,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),
          transparent 88%
        ),
        transparent 28%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),
          transparent 94%
        ),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 38%),
      color-mix(
        in srgb,
        var(--admin-shell-body-bg, var(--admin-shell-bg, rgba(5, 11, 25, 0.94))),
        transparent 0%
      );--shell-primary: var(--admin-shell-primary, var(--admin-accent, #8bc6ff));--shell-primary-text: var(--admin-shell-primary-text, var(--admin-shell-pill-text, #07101f));--shell-panel: color-mix(
      in srgb,
      var(--admin-shell-panel-bg, var(--admin-shell-panel, rgba(7, 15, 32, 0.88))),
      transparent 4%
    );--shell-surface: color-mix(
      in srgb,
      var(--admin-shell-soft-bg, var(--admin-shell-surface, rgba(5, 11, 25, 0.94))),
      transparent 2%
    );--shell-border: color-mix(
      in srgb,
      var(--admin-shell-border, rgba(132, 146, 166, 0.18)),
      transparent 6%
    );--shell-text: var(--admin-shell-text, #e6eefb);--shell-text-strong: var(--admin-shell-text-strong, var(--admin-shell-text, #f8fafc));--shell-muted: var(--admin-shell-muted, #94a8c7);--shell-card-shadow:
      var(--admin-shell-card-shadow, var(--admin-shell-shadow, 0 28px 60px rgba(0, 0, 0, 0.34)));--shell-focus-ring:
      var(
        --admin-shell-focus-ring,
        0 0 0 4px
          color-mix(
            in srgb,
            var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),
            transparent 76%
          )
      );--shell-row-hover:
      var(
        --admin-shell-row-hover,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #8bc6ff)),
          transparent 92%
        )
      );}:host([theme='light']) {color-scheme:light;color:var(--admin-shell-text, #0f172a);background:radial-gradient(
        circle at top left,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #0f172a)),
          transparent 90%
        ),
        transparent 24%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #0f172a)),
          transparent 92%
        ),
        transparent 26%
      ),
      linear-gradient(
        180deg,
        color-mix(
          in srgb,
          var(--admin-shell-panel-bg, var(--admin-shell-panel, #ffffff)),
          white 4%
        ),
        color-mix(in srgb, var(--admin-shell-body-bg, var(--admin-shell-bg, #f8fafc)), transparent 8%)
      );}:host([theme='dark']),
  :host([theme='green']) {color-scheme:dark;color:var(--admin-shell-text, #e6eefb);background:radial-gradient(
        circle at top left,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #7dd3fc)),
          transparent 88%
        ),
        transparent 26%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(
          in srgb,
          var(--admin-shell-primary, var(--admin-accent, #34d399)),
          transparent 94%
        ),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 34%),
      color-mix(
        in srgb,
        var(--admin-shell-body-bg, var(--admin-shell-bg, rgba(4, 11, 24, 0.96))),
        transparent 0%
      );}:host([data-page-theme='expanded']) {--shell-panel: color-mix(
      in srgb,
      var(--admin-shell-panel-bg, var(--admin-shell-panel, rgba(7, 15, 32, 0.88))),
      var(--shell-primary) 6%
    );--shell-surface: color-mix(
      in srgb,
      var(--admin-shell-soft-bg, var(--admin-shell-surface, rgba(5, 11, 25, 0.94))),
      var(--shell-primary) 7%
    );--shell-border: color-mix(
      in srgb,
      var(--shell-primary),
      var(--admin-shell-border, rgba(132, 146, 166, 0.18)) 78%
    );--shell-card-shadow:
      0 22px 48px color-mix(in srgb, var(--shell-primary), transparent 92%),
      var(--admin-shell-card-shadow, var(--admin-shell-shadow, 0 28px 60px rgba(0, 0, 0, 0.34)));--shell-row-hover:
      color-mix(in srgb, var(--shell-primary), var(--admin-shell-hover-bg, transparent) 86%);}:host([data-page-theme='expanded']) .workspace-canvas.svelte-vg7d0z::before {border:1px solid color-mix(in srgb, var(--shell-primary), var(--shell-border) 72%);background:linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 12 - 1px),
        color-mix(in srgb, var(--shell-primary), transparent 86%) calc(100% / 12 - 1px),
        transparent calc(100% / 12)
      ),
      linear-gradient(
        180deg,
        transparent 0,
        transparent 23px,
        color-mix(in srgb, var(--shell-primary), transparent 90%) 23px,
        transparent 24px
      ),
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 88%),
        transparent 42%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%);box-shadow:0 20px 42px color-mix(in srgb, var(--shell-primary), transparent 94%),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 90%);}.workspace-canvas.svelte-vg7d0z {position:relative;isolation:isolate;display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));grid-auto-rows:24px;grid-auto-flow:dense;gap:1rem;min-height:90rem;padding:0.35rem;align-items:stretch;}.workspace-canvas.svelte-vg7d0z::before {content:'';position:absolute;inset:0.35rem;z-index:0;border-radius:32px;background:linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 12 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 82%) calc(100% / 12 - 1px),
        transparent calc(100% / 12)
      ),
      linear-gradient(
        180deg,
        transparent 0,
        transparent 23px,
        color-mix(in srgb, var(--shell-border), transparent 88%) 23px,
        transparent 24px
      );opacity:0.5;pointer-events:none;}.compact-workspace.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.compact-workspace.svelte-vg7d0z::before {display:none;}

  @media (max-width: 63.99rem) {:host {padding:1rem;}.workspace-canvas.svelte-vg7d0z {grid-template-columns:minmax(0, 1fr);grid-auto-rows:auto;min-height:0;padding:0;}.workspace-canvas.svelte-vg7d0z::before {display:none;}
  }`
};
function Tw(t, r) {
  $t(r, !0), It(t, Sw);
  const n = "widget-windows", a = "workspace-layouts", o = "workspace-ui", i = "workspace-profile-meta", d = "workspace-profile-snapshot", c = "edge-dock-widgets", h = "edge-dock-state", u = 12, x = 3, q = 8, w = [
    "create-user",
    "user-directory",
    "create-role",
    "role-directory",
    "catalog-search",
    "window-preferences",
    "dock-preferences"
  ], P = ["workspace-discovery"], W = [
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
  ], M = ["efsdb-theme-palettechange"], _ = [
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
  function z() {
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
  function T() {
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
  const R = qh("admin"), D = R.apiBase ?? "/_efsdb/api/admin", V = R.authBase ?? "/_efsdb/api/auth", X = r.$$host;
  function O(v) {
    return typeof window > "u" ? `efsdb:admin:${v}` : `efsdb:admin:${window.location.pathname}:${v}`;
  }
  function m(v) {
    return `efsdb:admin:global:${v}`;
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
  function ee() {
    return {
      editing: !1,
      toolbarWidgets: [...w],
      edgePinnedWidgets: [],
      hiddenWidgets: [],
      customActions: z(),
      toolbarCustomActions: [...P]
    };
  }
  function se() {
    return { edge: "right", ratio: 0.84 };
  }
  function de(v) {
    return typeof v == "string" && rr.includes(v);
  }
  function je(v, S) {
    if (!Array.isArray(v))
      return [...S];
    const Q = [], ye = /* @__PURE__ */ new Set();
    for (const p of v)
      !de(p) || ye.has(p) || (ye.add(p), Q.push(p));
    return Q;
  }
  function _e(v, S, Q) {
    if (!Array.isArray(v))
      return [...Q];
    const ye = new Set(S), p = [], A = /* @__PURE__ */ new Set();
    for (const U of v)
      typeof U != "string" || A.has(U) || !ye.has(U) || (A.add(U), p.push(U));
    return p;
  }
  function re(v) {
    return typeof v == "string" && _.some((S) => S.value === v);
  }
  function fe(v) {
    const S = z();
    if (!Array.isArray(v))
      return S;
    const Q = [], ye = /* @__PURE__ */ new Set();
    for (const p of v) {
      if (!p || typeof p != "object")
        continue;
      const A = p, U = typeof A.id == "string" ? A.id.trim() : "";
      if (!U || ye.has(U))
        continue;
      const ie = Array.isArray(A.steps) ? A.steps.flatMap((Se) => !Se || typeof Se != "object" || Se.type !== "open-widget" || !de(Se.widgetId) ? [] : [
        {
          type: "open-widget",
          widgetId: Se.widgetId,
          pinned: !!Se.pinned
        }
      ]) : [];
      ie.length !== 0 && (ye.add(U), Q.push({
        id: U,
        label: typeof A.label == "string" && A.label.trim() ? A.label.trim() : U,
        barLabel: typeof A.barLabel == "string" && A.barLabel.trim() ? A.barLabel.trim() : typeof A.label == "string" && A.label.trim() ? A.label.trim() : U,
        iconName: re(A.iconName) ? A.iconName : "buttons-manager",
        summary: typeof A.summary == "string" && A.summary.trim() ? A.summary.trim() : `Open ${ie.length} workspace widget${ie.length === 1 ? "" : "s"}.`,
        steps: ie
      }));
    }
    return Q.length > 0 ? Q : S;
  }
  function xe(v) {
    const S = T();
    if (!Array.isArray(v))
      return S;
    const Q = /* @__PURE__ */ new Map();
    for (const ye of v) {
      if (!ye || typeof ye != "object")
        continue;
      const p = ye;
      typeof p.id == "string" && Q.set(p.id, {
        id: p.id,
        label: typeof p.label == "string" && p.label.trim() ? p.label.trim() : p.id,
        locked: !!p.locked,
        savedAt: typeof p.savedAt == "string" && p.savedAt.trim() ? p.savedAt : null
      });
    }
    return S.map((ye) => {
      const p = Q.get(ye.id);
      return p ? {
        ...ye,
        savedAt: p.savedAt ?? ye.savedAt ?? null
      } : ye;
    });
  }
  function B(v) {
    const S = Math.max(x, Math.min(u, Math.round(v.width)));
    return {
      col: Math.max(1, Math.min(u - S + 1, Math.round(v.col))),
      row: Math.max(1, Math.round(v.row)),
      width: S,
      height: Math.max(q, Math.round(v.height))
    };
  }
  function F(v, S) {
    return v.col < S.col + S.width && v.col + v.width > S.col && v.row < S.row + S.height && v.row + v.height > S.row;
  }
  function ve(v, S) {
    const Q = B(v), ye = Math.max(1, Q.row + Q.height + 96, ...Object.values(S).map((p) => p ? p.row + p.height + 4 : 1));
    for (let p = 1; p <= ye; p += 1)
      for (let A = 1; A <= u - Q.width + 1; A += 1) {
        const U = { ...Q, col: A, row: p };
        if (!Object.values(S).some((Se) => Se && F(U, Se)))
          return U;
      }
    return Q;
  }
  function qe(v) {
    return [...rr].sort((S, Q) => {
      const ye = v[S], p = v[Q];
      return ye.row - p.row || ye.col - p.col;
    });
  }
  function Te(v, S, Q) {
    const ye = rr.reduce(
      (ie, Se) => (ie[Se] = { ...v[Se] }, ie),
      {}
    );
    ye[S] = B(Q);
    const p = { [S]: ye[S] }, A = qe(ye).filter((ie) => ie !== S);
    for (const ie of A)
      p[ie] = ve(ye[ie], p);
    const U = p;
    for (const ie of A) {
      let Se = U[ie];
      for (; Se.row > 1; ) {
        const rt = { ...Se, row: Se.row - 1 };
        if (Object.entries(U).some(([Ut, tr]) => Ut !== ie && F(rt, tr)))
          break;
        Se = rt;
      }
      U[ie] = Se;
    }
    return U;
  }
  function Ge(v) {
    return v === "normal" || v === "maximized" || v === "minimized" || v === "rolled-up";
  }
  function be(v) {
    return v === "maximize" || v === "left-half" || v === "right-half" || v === "top-left" || v === "top-right" || v === "bottom-left" || v === "bottom-right";
  }
  function ke(v) {
    if (!v || typeof v != "object")
      return null;
    const S = v, Q = Number(S.x), ye = Number(S.y), p = Number(S.width), A = Number(S.height);
    return [Q, ye, p, A].every((U) => Number.isFinite(U)) ? {
      x: Math.round(Q),
      y: Math.round(ye),
      width: Math.max(320, Math.round(p)),
      height: Math.max(220, Math.round(A))
    } : null;
  }
  function Qe(v) {
    const S = he();
    if (!v || typeof v != "object")
      return S;
    const Q = v;
    for (const ye of rr) {
      const p = Q[ye];
      p && (S[ye] = {
        open: !!p.open,
        pinned: !!p.pinned,
        windowState: Ge(p.windowState) ? p.windowState : "normal",
        frame: ke(p.frame),
        restoreFrame: ke(p.restoreFrame),
        snapTarget: be(p.snapTarget) ? p.snapTarget : null
      });
    }
    return S;
  }
  function mt(v) {
    const S = J();
    if (!v || typeof v != "object")
      return S;
    const Q = v;
    for (const ye of rr) {
      const p = Q[ye];
      p && (S[ye] = B({
        col: p.col ?? S[ye].col,
        row: p.row ?? S[ye].row,
        width: p.width ?? S[ye].width,
        height: p.height ?? S[ye].height
      }));
    }
    return S;
  }
  function Tt(v) {
    const S = ee();
    if (!v || typeof v != "object")
      return S;
    const Q = v, ye = fe(Q.customActions);
    return {
      editing: !!Q.editing,
      toolbarWidgets: je(Q.toolbarWidgets ?? Q.favoriteWidgets, S.toolbarWidgets),
      edgePinnedWidgets: je(Q.edgePinnedWidgets, S.edgePinnedWidgets),
      hiddenWidgets: je(Q.hiddenWidgets, S.hiddenWidgets),
      customActions: ye,
      toolbarCustomActions: _e(Q.toolbarCustomActions, ye.map((p) => p.id), S.toolbarCustomActions)
    };
  }
  function _t(v) {
    const S = se();
    if (!v || typeof v != "object")
      return S;
    const Q = v, ye = Q.edge === "left" || Q.edge === "right" || Q.edge === "top" || Q.edge === "bottom" ? Q.edge : S.edge, p = Number.isFinite(Q.ratio) ? Math.max(0.08, Math.min(0.92, Number(Q.ratio))) : S.ratio;
    return { edge: ye, ratio: p };
  }
  function Lt(v, S) {
    return rr.every((Q) => {
      const ye = v[Q], p = S[Q];
      return ye.col === p.col && ye.row === p.row && ye.width === p.width && ye.height === p.height;
    });
  }
  function yt(v, S) {
    const Q = new Set(S), ye = rr.reduce(
      (ie, Se) => (ie[Se] = { ...v[Se] }, ie),
      {}
    ), p = qe(v).filter((ie) => !Q.has(ie)), A = {};
    for (const ie of p)
      A[ie] = ve(ye[ie], A);
    const U = A;
    for (const ie of p) {
      let Se = U[ie];
      for (; Se.row > 1; ) {
        const rt = { ...Se, row: Se.row - 1 };
        if (Object.entries(U).some(([Ut, tr]) => Ut !== ie && F(rt, tr)))
          break;
        Se = rt;
      }
      U[ie] = Se, ye[ie] = Se;
    }
    return ye;
  }
  function ut(v, S) {
    return v.length === S.length && v.every((Q, ye) => Q === S[ye]);
  }
  function dt(v) {
    switch (v) {
      case "system_users":
        return "System users";
      case "system_roles":
        return "System roles";
      default:
        return "Workspace resources";
    }
  }
  let st = /* @__PURE__ */ me(ht(R.user ?? null)), pt = /* @__PURE__ */ me(ht([])), ue = /* @__PURE__ */ me(ht([])), Pe = /* @__PURE__ */ me(null), Xe = /* @__PURE__ */ me(ht([])), N = /* @__PURE__ */ me(ht({})), I = /* @__PURE__ */ me(null), ze = /* @__PURE__ */ me(!0), L = /* @__PURE__ */ me(!1), ce = /* @__PURE__ */ me(!1), De = /* @__PURE__ */ me(!1), Ce = /* @__PURE__ */ me(!1), Be = /* @__PURE__ */ me(!1), f = /* @__PURE__ */ me(ht(he())), pe = /* @__PURE__ */ me(ht([])), Me = /* @__PURE__ */ me(ht(J())), K = /* @__PURE__ */ me(ht(ee())), nt = /* @__PURE__ */ me(ht(T())), Le = /* @__PURE__ */ me(null), xt = /* @__PURE__ */ me(ht([...rr])), Ie = /* @__PURE__ */ me(!1), Ke = /* @__PURE__ */ me(0), at = /* @__PURE__ */ me(!1), jt = /* @__PURE__ */ me(!1), lr = /* @__PURE__ */ me(ht(se())), Je = /* @__PURE__ */ me(ht({})), Pt = /* @__PURE__ */ me(ht({})), Wt = /* @__PURE__ */ me(ht({ username: "", name: "", roleId: "", loginKey: "" })), qt = /* @__PURE__ */ me(ht({
    id: "",
    name: "",
    description: "",
    entitlements: "NATURAL_VIEW"
  })), wr = /* @__PURE__ */ me(null), Sr = /* @__PURE__ */ me(null), Jt = /* @__PURE__ */ me(""), Tr = /* @__PURE__ */ me("public_workspace_files"), Wr = /* @__PURE__ */ me(ht(nd())), Gn = /* @__PURE__ */ k(() => e(pt).filter((v) => v.status.toLowerCase() === "active").length), an = /* @__PURE__ */ k(() => e(ue).filter((v) => !v.operatorOnly).length), $e = /* @__PURE__ */ k(() => {
    var v, S;
    return ((S = (v = e(st)) == null ? void 0 : v.availableDisplayModes) == null ? void 0 : S.length) ?? 0;
  }), Bt = /* @__PURE__ */ k(() => e(K).editing && !e(Ie)), We = /* @__PURE__ */ k(() => e(Le) ? Te(e(Me), e(Le).widgetId, e(Le).layout) : e(Me)), Ft = /* @__PURE__ */ k(() => !Lt(e(Me), J()) || !ut(e(K).hiddenWidgets, ee().hiddenWidgets) || !ut(e(K).toolbarWidgets, ee().toolbarWidgets) || !ut(e(K).toolbarCustomActions, ee().toolbarCustomActions)), $o = /* @__PURE__ */ k(() => [
    ...e(K).toolbarWidgets,
    ...rr.filter((v) => !e(K).toolbarWidgets.includes(v))
  ]), ma = /* @__PURE__ */ k(() => [
    ...e(K).toolbarCustomActions,
    ...e(K).customActions.map((v) => v.id).filter((v) => !e(K).toolbarCustomActions.includes(v))
  ]), Ao = /* @__PURE__ */ k(() => e(K).edgePinnedWidgets), dr = /* @__PURE__ */ k(() => e($o).map((v) => ({
    kind: "widget",
    id: v,
    label: xr[v].label,
    barLabel: xr[v].barLabel,
    iconMask: tc[v],
    open: e(f)[v].open && e(f)[v].windowState !== "minimized",
    inToolbar: e(K).toolbarWidgets.includes(v),
    edgePinned: e(K).edgePinnedWidgets.includes(v),
    inWorkspace: !e(K).hiddenWidgets.includes(v),
    presentation: xr[v].presentation,
    group: xr[v].group,
    summary: xr[v].summary
  }))), Ua = /* @__PURE__ */ k(() => e(ma).map((v) => e(K).customActions.find((S) => S.id === v)).filter((v) => !!v).map((v) => ({
    kind: "action",
    id: v.id,
    label: v.label,
    barLabel: v.barLabel,
    iconMask: Ql(v.iconName),
    iconName: v.iconName,
    inToolbar: e(K).toolbarCustomActions.includes(v.id),
    group: "Macros",
    summary: v.summary,
    stepCount: v.steps.length
  }))), Cr = /* @__PURE__ */ k(() => [
    ...e(dr),
    ...e(Ua)
  ]), Mn = /* @__PURE__ */ k(() => e(Wr).dockLabelMode), Wn = /* @__PURE__ */ k(() => e(Ao).map((v) => ({
    id: v,
    label: xr[v].label,
    iconMask: tc[v],
    active: e(f)[v].open && e(f)[v].windowState !== "minimized"
  }))), Vn = /* @__PURE__ */ k(() => [
    {
      label: "Users",
      value: String(e(pt).length),
      detail: `${e(Gn)} active provisioned accounts`
    },
    {
      label: "Roles",
      value: String(e(ue).length),
      detail: `${e(an)} assignable presets`
    },
    {
      label: "Modes",
      value: String(e($e)),
      detail: e(st) ? `actual ${e(st).actualRole}` : "awaiting session"
    },
    {
      label: "Search",
      value: e(Ce) ? String(e(Xe).length) : "0",
      detail: e(Ce) ? dt(e(Tr)) : "run a search to inspect"
    }
  ]);
  function mn(v = ol()) {
    if (typeof window > "u")
      return;
    const S = window.document.documentElement, Q = window.getComputedStyle(S);
    W.forEach(([p, A]) => {
      const U = Q.getPropertyValue(p).trim();
      if (U) {
        X.style.setProperty(A, U);
        return;
      }
      X.style.removeProperty(A);
    });
    const ye = S.getAttribute("data-theme") === "light" || v === "light" ? "light" : "dark";
    X.setAttribute("theme", ye);
  }
  function Xa(v = e(Wr)) {
    X.setAttribute("data-page-theme", v.pageThemeSpread);
  }
  function Cn(v) {
    mn(v);
  }
  function on() {
    $(pe, rr.filter((v) => e(f)[v].open), !0);
  }
  function Gt(v) {
    $(
      pe,
      [
        ...e(pe).filter((S) => S !== v),
        v
      ],
      !0
    );
  }
  function ar(v) {
    $(
      xt,
      [
        ...e(xt).filter((S) => S !== v),
        v
      ],
      !0
    );
  }
  function Ka(v, S) {
    $(Je, { ...e(Je), [v]: S }, !0);
  }
  function $r(v) {
    if (!(v in e(Je)))
      return;
    const S = { ...e(Je) };
    delete S[v], $(Je, S, !0);
  }
  function fa(v, S) {
    $(Pt, { ...e(Pt), [v]: S }, !0);
  }
  function fn(v) {
    if (!(v in e(Pt)))
      return;
    const S = { ...e(Pt) };
    delete S[v], $(Pt, S, !0);
  }
  function Yn(v) {
    for (const S of rr)
      e(f)[S].pinned = v.includes(S) && e(f)[S].open;
  }
  function Un(v) {
    const S = Lh(v);
    !S || !rr.includes(S.widgetId) || (gt(S.widgetId, { pinned: S.pinned }), typeof localStorage < "u" && localStorage.removeItem(il));
  }
  function cr(v) {
    $r(v);
  }
  function ii() {
    e(Ie) || (e(K).editing = !e(K).editing);
  }
  function Xn() {
    $(at, !e(at));
  }
  function Ja() {
    const v = (/* @__PURE__ */ new Date()).toISOString();
    $(nt, e(nt).map((S, Q) => Q === 0 ? { ...S, savedAt: v } : S), !0), !(typeof localStorage > "u") && localStorage.setItem(O(d), JSON.stringify({
      layouts: rr.reduce(
        (S, Q) => (S[Q] = e(Me)[Q], S),
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
  function ba(v) {
    if (e(K).toolbarWidgets.includes(v)) {
      e(K).toolbarWidgets = e(K).toolbarWidgets.filter((S) => S !== v);
      return;
    }
    e(K).toolbarWidgets = [...e(K).toolbarWidgets, v];
  }
  function si(v) {
    const S = e(K).hiddenWidgets.includes(v) ? e(K).hiddenWidgets.filter((Q) => Q !== v) : [...e(K).hiddenWidgets, v];
    e(K).hiddenWidgets = S, $(Me, yt(e(Me), S), !0), $(xt, rr.filter((Q) => !S.includes(Q)), !0);
  }
  function Eo(v) {
    if (e(K).toolbarCustomActions.includes(v)) {
      e(K).toolbarCustomActions = e(K).toolbarCustomActions.filter((S) => S !== v);
      return;
    }
    e(K).toolbarCustomActions = [...e(K).toolbarCustomActions, v];
  }
  function li(v) {
    const S = e(K).customActions.find((Q) => Q.id === v);
    if (S) {
      $(at, !1);
      for (const Q of S.steps)
        gt(Q.widgetId, { pinned: !!Q.pinned });
    }
  }
  function Ro(v) {
    e(K).customActions = e(K).customActions.filter((S) => S.id !== v), e(K).toolbarCustomActions = e(K).toolbarCustomActions.filter((S) => S !== v);
  }
  function Oo(v) {
    const S = v.label.trim();
    if (!S)
      return;
    const Q = v.steps.filter((U) => de(U.widgetId)).map((U) => ({
      type: "open-widget",
      widgetId: U.widgetId,
      pinned: !!U.pinned
    }));
    if (Q.length === 0)
      return;
    const ye = `workspace-action-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, p = v.barLabel.trim() || S, A = v.summary.trim() || `Open ${Q.length} workspace widget${Q.length === 1 ? "" : "s"}.`;
    e(K).customActions = [
      ...e(K).customActions,
      {
        id: ye,
        label: S,
        barLabel: p,
        iconName: v.iconName,
        summary: A,
        steps: Q
      }
    ], e(K).toolbarCustomActions = [...e(K).toolbarCustomActions, ye];
  }
  function di(v) {
    if (e(K).edgePinnedWidgets.includes(v)) {
      e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((S) => S !== v), e(f)[v].pinned = !1, fn(v);
      return;
    }
    e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, v], e(f)[v].open && (e(f)[v].pinned = !0);
  }
  function ci(v) {
    if (de(v)) {
      if (e(f)[v].open && e(f)[v].windowState !== "minimized") {
        fa(v, e(f)[v].windowState), e(f)[v].windowState = "minimized";
        return;
      }
      if (e(f)[v].open && e(f)[v].windowState === "minimized") {
        e(f)[v].windowState = e(Pt)[v] ?? "normal", Gt(v);
        return;
      }
      gt(v, { pinned: !0 });
    }
  }
  function gi(v) {
    de(v) && (e(f)[v].pinned = !1, e(f)[v].open = !1, e(f)[v].windowState = "normal", e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((S) => S !== v), fn(v), $r(v), $(pe, e(pe).filter((S) => S !== v), !0));
  }
  function gt(v, S = {}) {
    e(f)[v].open = !0, e(f)[v].windowState = "normal", S.pinned && (e(f)[v].pinned = !0, e(K).edgePinnedWidgets.includes(v) || (e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, v])), S.dragSeed ? Ka(v, S.dragSeed) : $r(v), fn(v), $(at, !1), Gt(v);
  }
  function Ze(v) {
    e(f)[v].open = !0, e(f)[v].windowState = "normal", e(f)[v].pinned = !e(f)[v].pinned, e(f)[v].pinned && !e(K).edgePinnedWidgets.includes(v) ? e(K).edgePinnedWidgets = [...e(K).edgePinnedWidgets, v] : e(f)[v].pinned || (e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((S) => S !== v), fn(v)), Gt(v);
  }
  function mr(v) {
    return e(f)[v].open && e(f)[v].windowState !== "minimized";
  }
  function fr(v) {
    return !e(K).hiddenWidgets.includes(v) && !mr(v);
  }
  function Vt(v, S) {
    $(Le, null), $(Me, Te(e(Me), v, S), !0), ar(v);
  }
  function gr(v, S) {
    var Q;
    if (!S) {
      ((Q = e(Le)) == null ? void 0 : Q.widgetId) === v && $(Le, null);
      return;
    }
    $(Le, { widgetId: v, layout: B(S) }, !0), ar(v);
  }
  function Za() {
    const v = ee();
    $(Le, null), $(Me, J(), !0), $(xt, [...rr], !0), e(K).editing = !1, e(K).hiddenWidgets = [...v.hiddenWidgets], e(K).toolbarWidgets = [...v.toolbarWidgets], e(K).toolbarCustomActions = _e(v.toolbarCustomActions, e(K).customActions.map((S) => S.id), []), $(at, !1);
  }
  function Qt(v) {
    e(f)[v].open = !1, e(f)[v].pinned = !1, e(f)[v].windowState = "normal", e(K).edgePinnedWidgets = e(K).edgePinnedWidgets.filter((S) => S !== v), fn(v), $r(v), $(pe, e(pe).filter((S) => S !== v), !0);
  }
  function Yt(v) {
    const S = e(pe).indexOf(v);
    return 240 + (S === -1 ? 0 : S * 4);
  }
  function br(v) {
    const S = e(xt).indexOf(v);
    return 10 + (S === -1 ? 0 : S);
  }
  function $n(v) {
    const S = () => {
      $(Ke, v.clientWidth, !0);
    };
    S();
    const Q = new ResizeObserver(() => {
      S();
    });
    return Q.observe(v), {
      destroy() {
        Q.disconnect();
      }
    };
  }
  async function ya() {
    const [v, S, Q, ye] = await Promise.all([
      Ih(V),
      Ch(D),
      Ah(D),
      Rh(D)
    ]);
    if ($(st, v, !0), $(pt, S.results, !0), $(ue, Q.results, !0), $(Pe, ye.result, !0), !e(Wt).roleId) {
      const p = e(ue).find((A) => !A.operatorOnly);
      e(Wt).roleId = (p == null ? void 0 : p.id) ?? "";
    }
    await bn();
  }
  async function Kn() {
    $(ze, !0), $(I, null);
    try {
      if (!await Oh()) {
        $(
          I,
          {
            message: "Sign in is required before the admin control plane can load.",
            error: !0
          },
          !0
        );
        return;
      }
      await ya();
    } catch (v) {
      $(
        I,
        {
          message: v instanceof Error ? v.message : "Failed to load admin control-plane data.",
          error: !0
        },
        !0
      );
    } finally {
      $(ze, !1);
    }
  }
  async function Jn() {
    $(L, !0), $(wr, null);
    try {
      const v = await $h(D, {
        username: e(Wt).username,
        name: e(Wt).name,
        roleId: e(Wt).roleId,
        ...e(Wt).loginKey.trim() !== "" ? { loginKey: e(Wt).loginKey.trim() } : {}
      });
      $(
        wr,
        {
          message: `Created ${v.user.username}. Login key: ${v.loginKey}`,
          error: !1
        },
        !0
      ), e(Wt).username = "", e(Wt).name = "", e(Wt).loginKey = "", await Kn();
    } catch (v) {
      $(
        wr,
        {
          message: v instanceof Error ? v.message : "Unable to create user",
          error: !0
        },
        !0
      );
    } finally {
      $(L, !1);
    }
  }
  async function xa() {
    $(ce, !0), $(Sr, null);
    try {
      const v = await Eh(D, {
        id: e(qt).id,
        name: e(qt).name,
        description: e(qt).description,
        entitlements: e(qt).entitlements.split(",").map((S) => S.trim()).filter(Boolean)
      });
      $(Sr, { message: `Created role ${v.result.id}`, error: !1 }, !0), e(qt).id = "", e(qt).name = "", e(qt).description = "", e(qt).entitlements = "NATURAL_VIEW", await Kn();
    } catch (v) {
      $(
        Sr,
        {
          message: v instanceof Error ? v.message : "Unable to create role",
          error: !0
        },
        !0
      );
    } finally {
      $(ce, !1);
    }
  }
  async function er(v) {
    $(De, !0), $(I, null);
    try {
      await Dh(V, v), window.location.reload();
    } catch (S) {
      $(
        I,
        {
          message: S instanceof Error ? S.message : "Unable to switch display mode",
          error: !0
        },
        !0
      );
    } finally {
      $(De, !1);
    }
  }
  async function bn() {
    $(Be, !0);
    try {
      const v = await Wh({
        entity: e(Tr),
        q: e(Jt),
        limit: 12,
        field: e(Tr) === "public_workspace_files" ? ["workspaceArea", "resourceKind"] : []
      });
      $(Xe, v.results, !0), $(N, v.facets, !0), $(Ce, !0);
    } catch (v) {
      $(
        I,
        {
          message: v instanceof Error ? v.message : "Unable to load workspace discovery data",
          error: !0
        },
        !0
      );
    } finally {
      $(Be, !1);
    }
  }
  vn(() => {
    if (!e(jt) || typeof localStorage > "u")
      return;
    const v = rr.reduce(
      (S, Q) => (S[Q] = {
        open: e(f)[Q].open,
        pinned: e(f)[Q].pinned,
        windowState: e(f)[Q].windowState,
        frame: e(f)[Q].frame ?? null,
        restoreFrame: e(f)[Q].restoreFrame ?? null,
        snapTarget: e(f)[Q].snapTarget ?? null
      }, S),
      {}
    );
    localStorage.setItem(O(n), JSON.stringify(v));
  }), vn(() => {
    !e(jt) || typeof localStorage > "u" || localStorage.setItem(O(a), JSON.stringify(rr.reduce(
      (v, S) => (v[S] = e(Me)[S], v),
      {}
    )));
  }), vn(() => {
    !e(jt) || typeof localStorage > "u" || localStorage.setItem(m(c), JSON.stringify(e(K).edgePinnedWidgets));
  }), vn(() => {
    !e(jt) || typeof localStorage > "u" || localStorage.setItem(m(h), JSON.stringify(e(lr)));
  }), vn(() => {
    !e(jt) || typeof localStorage > "u" || localStorage.setItem(O(o), JSON.stringify({
      editing: e(K).editing,
      toolbarWidgets: e(K).toolbarWidgets,
      edgePinnedWidgets: e(K).edgePinnedWidgets,
      hiddenWidgets: e(K).hiddenWidgets,
      customActions: e(K).customActions,
      toolbarCustomActions: e(K).toolbarCustomActions
    }));
  }), vn(() => {
    !e(jt) || typeof localStorage > "u" || localStorage.setItem(O(i), JSON.stringify(e(nt)));
  }), Wo(() => {
    Cn(ol()), Xa(e(Wr));
    const v = () => {
      mn(ol());
    }, S = Th((U) => {
      Cn(U);
    }), Q = oi((U) => {
      $(Wr, U, !0), Xa(U);
    });
    M.forEach((U) => {
      window.addEventListener(U, v);
    });
    try {
      const U = localStorage.getItem(O(n));
      U && ($(f, Qe(JSON.parse(U)), !0), on());
      const ie = localStorage.getItem(O(a));
      ie && $(Me, mt(JSON.parse(ie)), !0);
      const Se = localStorage.getItem(O(o));
      Se && $(K, Tt(JSON.parse(Se)), !0);
      const rt = localStorage.getItem(O(i));
      rt && $(nt, xe(JSON.parse(rt)), !0);
      const zt = localStorage.getItem(m(c));
      zt && (e(K).edgePinnedWidgets = je(JSON.parse(zt), e(K).edgePinnedWidgets)), e(K).toolbarCustomActions = _e(e(K).toolbarCustomActions, e(K).customActions.map((tr) => tr.id), ee().toolbarCustomActions), e(K).edgePinnedWidgets = je(
        [
          ...e(K).edgePinnedWidgets,
          ...rr.filter((tr) => e(f)[tr].pinned)
        ],
        e(K).edgePinnedWidgets
      ), Yn(e(K).edgePinnedWidgets), $(Me, yt(e(Me), e(K).hiddenWidgets), !0), $(xt, rr.filter((tr) => !e(K).hiddenWidgets.includes(tr)), !0);
      const Ut = localStorage.getItem(m(h));
      Ut && $(lr, _t(JSON.parse(Ut)), !0), Un(localStorage.getItem(il));
    } catch {
    }
    const ye = window.matchMedia("(max-width: 63.99rem)"), p = () => {
      $(Ie, ye.matches, !0);
    };
    p(), ye.addEventListener("change", p);
    const A = (U) => {
      if (U.key === m(c)) {
        try {
          const ie = je(U.newValue ? JSON.parse(U.newValue) : [], []);
          e(K).edgePinnedWidgets = ie, Yn(ie);
        } catch {
        }
        return;
      }
      if (U.key === m(h)) {
        try {
          $(
            lr,
            U.newValue ? _t(JSON.parse(U.newValue)) : se(),
            !0
          );
        } catch {
          $(lr, se(), !0);
        }
        return;
      }
      U.key === il && Un(U.newValue);
    };
    return window.addEventListener("storage", A), $(jt, !0), Kn(), () => {
      window.removeEventListener("storage", A), ye.removeEventListener("change", p), M.forEach((U) => {
        window.removeEventListener(U, v);
      }), S(), Q();
    };
  });
  var ka = qw(), An = Xt(ka);
  hg(An, {
    get notice() {
      return e(I);
    },
    get loading() {
      return e(ze);
    },
    get metrics() {
      return e(Vn);
    },
    children: (v, S) => {
      var Q = _w(), ye = Xt(Q);
      _g(ye, {
        get items() {
          return e(Cr);
        },
        get profiles() {
          return e(nt);
        },
        get editing() {
          return e(Bt);
        },
        get compact() {
          return e(Ie);
        },
        get layoutDirty() {
          return e(Ft);
        },
        get managerOpen() {
          return e(at);
        },
        get customActionIconOptions() {
          return _;
        },
        onToggleEditing: ii,
        onResetLayout: Za,
        onSaveWorkspace: Ja,
        onToggleManager: Xn,
        onActivateWidget: gt,
        onToggleToolbar: ba,
        onToggleWorkspace: si,
        onToggleEdgePin: di,
        onActivateAction: li,
        onToggleToolbarAction: Eo,
        onDeleteAction: Ro,
        onCreateAction: Oo
      });
      var p = g(ye, 2);
      let A;
      var U = l(p);
      {
        var ie = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("create-user"));
            ln(ne, {
              title: "Create user",
              get layout() {
                return e(We)["create-user"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("create-user", Y),
              onPreviewChange: (Y) => gr("create-user", Y),
              onShiftPopoutStart: (Y) => gt("create-user", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("create-user"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => {
                    var ra;
                    return ((ra = e(st)) == null ? void 0 : ra.actualRole) ?? "unknown";
                  }), Er = /* @__PURE__ */ k(() => mr("create-user"));
                  Cl(Y, {
                    get roles() {
                      return e(ue);
                    },
                    get form() {
                      return e(Wt);
                    },
                    get result() {
                      return e(wr);
                    },
                    get actualRole() {
                      return e(ot);
                    },
                    get busy() {
                      return e(L);
                    },
                    dataTestid: "admin-users-panel",
                    get open() {
                      return e(Er);
                    },
                    get pinned() {
                      return e(f)["create-user"].pinned;
                    },
                    onOpen: () => gt("create-user"),
                    onTogglePin: () => Ze("create-user"),
                    onSubmit: () => void Jn()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Se = /* @__PURE__ */ k(() => fr("create-user"));
        ge(U, (ne) => {
          e(Se) && ne(ie);
        });
      }
      var rt = g(U, 2);
      {
        var zt = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("create-role"));
            ln(ne, {
              title: "Create role",
              get layout() {
                return e(We)["create-role"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("create-role", Y),
              onPreviewChange: (Y) => gr("create-role", Y),
              onShiftPopoutStart: (Y) => gt("create-role", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("create-role"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("create-role"));
                  Wl(Y, {
                    get roles() {
                      return e(ue);
                    },
                    get form() {
                      return e(qt);
                    },
                    get result() {
                      return e(Sr);
                    },
                    get busy() {
                      return e(ce);
                    },
                    dataTestid: "admin-roles-panel",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["create-role"].pinned;
                    },
                    onOpen: () => gt("create-role"),
                    onTogglePin: () => Ze("create-role"),
                    onSubmit: () => void xa()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Ut = /* @__PURE__ */ k(() => fr("create-role"));
        ge(rt, (ne) => {
          e(Ut) && ne(zt);
        });
      }
      var tr = g(rt, 2);
      {
        var yn = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("display-mode"));
            ln(ne, {
              title: "Display mode",
              get layout() {
                return e(We)["display-mode"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("display-mode", Y),
              onPreviewChange: (Y) => gr("display-mode", Y),
              onShiftPopoutStart: (Y) => gt("display-mode", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("display-mode"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("display-mode"));
                  $l(Y, {
                    get user() {
                      return e(st);
                    },
                    get busy() {
                      return e(De);
                    },
                    dataTestid: "admin-display-mode-panel",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["display-mode"].pinned;
                    },
                    onOpen: () => gt("display-mode"),
                    onTogglePin: () => Ze("display-mode"),
                    onChange: (Er) => void er(Er)
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Qa = /* @__PURE__ */ k(() => fr("display-mode"));
        ge(tr, (ne) => {
          e(Qa) && ne(yn);
        });
      }
      var eo = g(tr, 2);
      {
        var xn = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("user-directory"));
            ln(ne, {
              title: "Users",
              get layout() {
                return e(We)["user-directory"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("user-directory", Y),
              onPreviewChange: (Y) => gr("user-directory", Y),
              onShiftPopoutStart: (Y) => gt("user-directory", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("user-directory"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("user-directory"));
                  Ol(Y, {
                    get users() {
                      return e(pt);
                    },
                    dataTestid: "admin-users-table",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["user-directory"].pinned;
                    },
                    onOpen: () => gt("user-directory"),
                    onTogglePin: () => Ze("user-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, to = /* @__PURE__ */ k(() => fr("user-directory"));
        ge(eo, (ne) => {
          e(to) && ne(xn);
        });
      }
      var Do = g(eo, 2);
      {
        var Zn = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("role-directory"));
            ln(ne, {
              title: "Role catalog",
              get layout() {
                return e(We)["role-directory"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("role-directory", Y),
              onPreviewChange: (Y) => gr("role-directory", Y),
              onShiftPopoutStart: (Y) => gt("role-directory", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("role-directory"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("role-directory"));
                  El(Y, {
                    get roles() {
                      return e(ue);
                    },
                    dataTestid: "admin-roles-table",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["role-directory"].pinned;
                    },
                    onOpen: () => gt("role-directory"),
                    onTogglePin: () => Ze("role-directory")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Qn = /* @__PURE__ */ k(() => fr("role-directory"));
        ge(Do, (ne) => {
          e(Qn) && ne(Zn);
        });
      }
      var ro = g(Do, 2);
      {
        var ea = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("catalog-search"));
            ln(ne, {
              title: "Discovery",
              get layout() {
                return e(We)["catalog-search"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("catalog-search", Y),
              onPreviewChange: (Y) => gr("catalog-search", Y),
              onShiftPopoutStart: (Y) => gt("catalog-search", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("catalog-search"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("catalog-search"));
                  Ml(Y, {
                    get query() {
                      return e(Jt);
                    },
                    get entity() {
                      return e(Tr);
                    },
                    get loading() {
                      return e(Be);
                    },
                    dataTestid: "admin-catalog-panel",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["catalog-search"].pinned;
                    },
                    onOpen: () => gt("catalog-search"),
                    onTogglePin: () => Ze("catalog-search"),
                    onSearch: () => void bn(),
                    onEntityChange: (Er) => {
                      $(Tr, Er, !0), $(Jt, ""), bn();
                    }
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, Ur = /* @__PURE__ */ k(() => fr("catalog-search"));
        ge(ro, (ne) => {
          e(Ur) && ne(ea);
        });
      }
      var _a = g(ro, 2);
      {
        var no = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("catalog-results"));
            ln(ne, {
              title: "Search results",
              get layout() {
                return e(We)["catalog-results"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("catalog-results", Y),
              onPreviewChange: (Y) => gr("catalog-results", Y),
              onShiftPopoutStart: (Y) => gt("catalog-results", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("catalog-results"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("catalog-results"));
                  zl(Y, {
                    get loaded() {
                      return e(Ce);
                    },
                    get loading() {
                      return e(Be);
                    },
                    get searchResults() {
                      return e(Xe);
                    },
                    dataTestid: "admin-search-results",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["catalog-results"].pinned;
                    },
                    onOpen: () => gt("catalog-results"),
                    onTogglePin: () => Ze("catalog-results")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ao = /* @__PURE__ */ k(() => fr("catalog-results"));
        ge(_a, (ne) => {
          e(ao) && ne(no);
        });
      }
      var qa = g(_a, 2);
      {
        var oo = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("catalog-facets"));
            ln(ne, {
              title: "Facet distribution",
              get layout() {
                return e(We)["catalog-facets"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("catalog-facets", Y),
              onPreviewChange: (Y) => gr("catalog-facets", Y),
              onShiftPopoutStart: (Y) => gt("catalog-facets", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("catalog-facets"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("catalog-facets"));
                  Pl(Y, {
                    get loaded() {
                      return e(Ce);
                    },
                    get facets() {
                      return e(N);
                    },
                    dataTestid: "admin-facets",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["catalog-facets"].pinned;
                    },
                    onOpen: () => gt("catalog-facets"),
                    onTogglePin: () => Ze("catalog-facets")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, io = /* @__PURE__ */ k(() => fr("catalog-facets"));
        ge(qa, (ne) => {
          e(io) && ne(oo);
        });
      }
      var vt = g(qa, 2);
      {
        var Mt = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("window-preferences"));
            ln(ne, {
              title: "Window preferences",
              get layout() {
                return e(We)["window-preferences"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("window-preferences", Y),
              onPreviewChange: (Y) => gr("window-preferences", Y),
              onShiftPopoutStart: (Y) => gt("window-preferences", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("window-preferences"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("window-preferences"));
                  Il(Y, {
                    dataTestid: "admin-settings-panel",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["window-preferences"].pinned;
                    },
                    onOpen: () => gt("window-preferences"),
                    onTogglePin: () => Ze("window-preferences")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, ct = /* @__PURE__ */ k(() => fr("window-preferences"));
        ge(vt, (ne) => {
          e(ct) && ne(Mt);
        });
      }
      var vr = g(vt, 2);
      {
        var Zt = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("dock-preferences"));
            ln(ne, {
              title: "Dock preferences",
              get layout() {
                return e(We)["dock-preferences"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("dock-preferences", Y),
              onPreviewChange: (Y) => gr("dock-preferences", Y),
              onShiftPopoutStart: (Y) => gt("dock-preferences", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("dock-preferences"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("dock-preferences"));
                  Al(Y, {
                    dataTestid: "admin-dock-settings-panel",
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["dock-preferences"].pinned;
                    },
                    onOpen: () => gt("dock-preferences"),
                    onTogglePin: () => Ze("dock-preferences")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, yr = /* @__PURE__ */ k(() => fr("dock-preferences"));
        ge(vr, (ne) => {
          e(yr) && ne(Zt);
        });
      }
      var Et = g(vr, 2);
      {
        var Ar = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => br("settings-payload"));
            ln(ne, {
              title: "Settings payload",
              get layout() {
                return e(We)["settings-payload"];
              },
              get canvasWidth() {
                return e(Ke);
              },
              get compact() {
                return e(Ie);
              },
              get editable() {
                return e(Bt);
              },
              get zIndex() {
                return e(Fe);
              },
              onChange: (Y) => Vt("settings-payload", Y),
              onPreviewChange: (Y) => gr("settings-payload", Y),
              onShiftPopoutStart: (Y) => gt("settings-payload", { pinned: !0, dragSeed: Y }),
              onFocus: () => ar("settings-payload"),
              children: (Y, H) => {
                {
                  let ot = /* @__PURE__ */ k(() => mr("settings-payload"));
                  Rl(Y, {
                    get settings() {
                      return e(Pe);
                    },
                    get open() {
                      return e(ot);
                    },
                    get pinned() {
                      return e(f)["settings-payload"].pinned;
                    },
                    onOpen: () => gt("settings-payload"),
                    onTogglePin: () => Ze("settings-payload")
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        }, hr = /* @__PURE__ */ k(() => fr("settings-payload"));
        ge(Et, (ne) => {
          e(hr) && ne(Ar);
        });
      }
      s(p), ch(p, (ne) => $n == null ? void 0 : $n(ne));
      var Br = g(p, 2);
      {
        var Fr = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("create-user")), Y = /* @__PURE__ */ k(() => e(Je)["create-user"] ?? null);
            sn(ne, {
              get title() {
                return Oe["create-user"].title;
              },
              get helpText() {
                return xr["create-user"].summary;
              },
              get pinned() {
                return e(f)["create-user"].pinned;
              },
              get defaultWidth() {
                return Oe["create-user"].width;
              },
              get defaultHeight() {
                return Oe["create-user"].height;
              },
              get defaultX() {
                return Oe["create-user"].x;
              },
              get defaultY() {
                return Oe["create-user"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("create-user"),
              onFocus: () => Gt("create-user"),
              onPinToggle: () => Ze("create-user"),
              onConsumeDragSeed: () => cr("create-user"),
              get windowState() {
                return e(f)["create-user"].windowState;
              },
              set windowState(H) {
                e(f)["create-user"].windowState = H;
              },
              get frame() {
                return e(f)["create-user"].frame;
              },
              set frame(H) {
                e(f)["create-user"].frame = H;
              },
              get restoreFrame() {
                return e(f)["create-user"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["create-user"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["create-user"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["create-user"].snapTarget = H;
              },
              children: (H, ot) => {
                {
                  let Er = /* @__PURE__ */ k(() => {
                    var ra;
                    return ((ra = e(st)) == null ? void 0 : ra.actualRole) ?? "unknown";
                  });
                  Cl(H, {
                    mode: "window",
                    get roles() {
                      return e(ue);
                    },
                    get form() {
                      return e(Wt);
                    },
                    get result() {
                      return e(wr);
                    },
                    get actualRole() {
                      return e(Er);
                    },
                    get busy() {
                      return e(L);
                    },
                    get pinned() {
                      return e(f)["create-user"].pinned;
                    },
                    onTogglePin: () => Ze("create-user"),
                    onSubmit: () => void Jn()
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(Br, (ne) => {
          e(f)["create-user"].open && ne(Fr);
        });
      }
      var En = g(Br, 2);
      {
        var ft = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("user-directory")), Y = /* @__PURE__ */ k(() => e(Je)["user-directory"] ?? null);
            sn(ne, {
              get title() {
                return Oe["user-directory"].title;
              },
              get helpText() {
                return xr["user-directory"].summary;
              },
              get pinned() {
                return e(f)["user-directory"].pinned;
              },
              get defaultWidth() {
                return Oe["user-directory"].width;
              },
              get defaultHeight() {
                return Oe["user-directory"].height;
              },
              get defaultX() {
                return Oe["user-directory"].x;
              },
              get defaultY() {
                return Oe["user-directory"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("user-directory"),
              onFocus: () => Gt("user-directory"),
              onPinToggle: () => Ze("user-directory"),
              onConsumeDragSeed: () => cr("user-directory"),
              get windowState() {
                return e(f)["user-directory"].windowState;
              },
              set windowState(H) {
                e(f)["user-directory"].windowState = H;
              },
              get frame() {
                return e(f)["user-directory"].frame;
              },
              set frame(H) {
                e(f)["user-directory"].frame = H;
              },
              get restoreFrame() {
                return e(f)["user-directory"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["user-directory"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["user-directory"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["user-directory"].snapTarget = H;
              },
              children: (H, ot) => {
                Ol(H, {
                  mode: "window",
                  get users() {
                    return e(pt);
                  },
                  get pinned() {
                    return e(f)["user-directory"].pinned;
                  },
                  onTogglePin: () => Ze("user-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(En, (ne) => {
          e(f)["user-directory"].open && ne(ft);
        });
      }
      var kt = g(En, 2);
      {
        var or = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("create-role")), Y = /* @__PURE__ */ k(() => e(Je)["create-role"] ?? null);
            sn(ne, {
              get title() {
                return Oe["create-role"].title;
              },
              get helpText() {
                return xr["create-role"].summary;
              },
              get pinned() {
                return e(f)["create-role"].pinned;
              },
              get defaultWidth() {
                return Oe["create-role"].width;
              },
              get defaultHeight() {
                return Oe["create-role"].height;
              },
              get defaultX() {
                return Oe["create-role"].x;
              },
              get defaultY() {
                return Oe["create-role"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("create-role"),
              onFocus: () => Gt("create-role"),
              onPinToggle: () => Ze("create-role"),
              onConsumeDragSeed: () => cr("create-role"),
              get windowState() {
                return e(f)["create-role"].windowState;
              },
              set windowState(H) {
                e(f)["create-role"].windowState = H;
              },
              get frame() {
                return e(f)["create-role"].frame;
              },
              set frame(H) {
                e(f)["create-role"].frame = H;
              },
              get restoreFrame() {
                return e(f)["create-role"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["create-role"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["create-role"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["create-role"].snapTarget = H;
              },
              children: (H, ot) => {
                Wl(H, {
                  mode: "window",
                  get roles() {
                    return e(ue);
                  },
                  get form() {
                    return e(qt);
                  },
                  get result() {
                    return e(Sr);
                  },
                  get busy() {
                    return e(ce);
                  },
                  get pinned() {
                    return e(f)["create-role"].pinned;
                  },
                  onTogglePin: () => Ze("create-role"),
                  onSubmit: () => void xa()
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(kt, (ne) => {
          e(f)["create-role"].open && ne(or);
        });
      }
      var ta = g(kt, 2);
      {
        var Sa = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("role-directory")), Y = /* @__PURE__ */ k(() => e(Je)["role-directory"] ?? null);
            sn(ne, {
              get title() {
                return Oe["role-directory"].title;
              },
              get helpText() {
                return xr["role-directory"].summary;
              },
              get pinned() {
                return e(f)["role-directory"].pinned;
              },
              get defaultWidth() {
                return Oe["role-directory"].width;
              },
              get defaultHeight() {
                return Oe["role-directory"].height;
              },
              get defaultX() {
                return Oe["role-directory"].x;
              },
              get defaultY() {
                return Oe["role-directory"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("role-directory"),
              onFocus: () => Gt("role-directory"),
              onPinToggle: () => Ze("role-directory"),
              onConsumeDragSeed: () => cr("role-directory"),
              get windowState() {
                return e(f)["role-directory"].windowState;
              },
              set windowState(H) {
                e(f)["role-directory"].windowState = H;
              },
              get frame() {
                return e(f)["role-directory"].frame;
              },
              set frame(H) {
                e(f)["role-directory"].frame = H;
              },
              get restoreFrame() {
                return e(f)["role-directory"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["role-directory"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["role-directory"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["role-directory"].snapTarget = H;
              },
              children: (H, ot) => {
                El(H, {
                  mode: "window",
                  get roles() {
                    return e(ue);
                  },
                  get pinned() {
                    return e(f)["role-directory"].pinned;
                  },
                  onTogglePin: () => Ze("role-directory")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(ta, (ne) => {
          e(f)["role-directory"].open && ne(Sa);
        });
      }
      var ir = g(ta, 2);
      {
        var Nr = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("display-mode")), Y = /* @__PURE__ */ k(() => e(Je)["display-mode"] ?? null);
            sn(ne, {
              get title() {
                return Oe["display-mode"].title;
              },
              get helpText() {
                return xr["display-mode"].summary;
              },
              get pinned() {
                return e(f)["display-mode"].pinned;
              },
              get defaultWidth() {
                return Oe["display-mode"].width;
              },
              get defaultHeight() {
                return Oe["display-mode"].height;
              },
              get defaultX() {
                return Oe["display-mode"].x;
              },
              get defaultY() {
                return Oe["display-mode"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("display-mode"),
              onFocus: () => Gt("display-mode"),
              onPinToggle: () => Ze("display-mode"),
              onConsumeDragSeed: () => cr("display-mode"),
              get windowState() {
                return e(f)["display-mode"].windowState;
              },
              set windowState(H) {
                e(f)["display-mode"].windowState = H;
              },
              get frame() {
                return e(f)["display-mode"].frame;
              },
              set frame(H) {
                e(f)["display-mode"].frame = H;
              },
              get restoreFrame() {
                return e(f)["display-mode"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["display-mode"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["display-mode"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["display-mode"].snapTarget = H;
              },
              children: (H, ot) => {
                $l(H, {
                  mode: "window",
                  get user() {
                    return e(st);
                  },
                  get busy() {
                    return e(De);
                  },
                  get pinned() {
                    return e(f)["display-mode"].pinned;
                  },
                  onTogglePin: () => Ze("display-mode"),
                  onChange: (Er) => void er(Er)
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(ir, (ne) => {
          e(f)["display-mode"].open && ne(Nr);
        });
      }
      var so = g(ir, 2);
      {
        var Rs = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("window-preferences")), Y = /* @__PURE__ */ k(() => e(Je)["window-preferences"] ?? null);
            sn(ne, {
              get title() {
                return Oe["window-preferences"].title;
              },
              get helpText() {
                return xr["window-preferences"].summary;
              },
              get pinned() {
                return e(f)["window-preferences"].pinned;
              },
              get defaultWidth() {
                return Oe["window-preferences"].width;
              },
              get defaultHeight() {
                return Oe["window-preferences"].height;
              },
              get defaultX() {
                return Oe["window-preferences"].x;
              },
              get defaultY() {
                return Oe["window-preferences"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("window-preferences"),
              onFocus: () => Gt("window-preferences"),
              onPinToggle: () => Ze("window-preferences"),
              onConsumeDragSeed: () => cr("window-preferences"),
              get windowState() {
                return e(f)["window-preferences"].windowState;
              },
              set windowState(H) {
                e(f)["window-preferences"].windowState = H;
              },
              get frame() {
                return e(f)["window-preferences"].frame;
              },
              set frame(H) {
                e(f)["window-preferences"].frame = H;
              },
              get restoreFrame() {
                return e(f)["window-preferences"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["window-preferences"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["window-preferences"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["window-preferences"].snapTarget = H;
              },
              children: (H, ot) => {
                Il(H, {
                  mode: "window",
                  get pinned() {
                    return e(f)["window-preferences"].pinned;
                  },
                  onTogglePin: () => Ze("window-preferences")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(so, (ne) => {
          e(f)["window-preferences"].open && ne(Rs);
        });
      }
      var Ta = g(so, 2);
      {
        var Lo = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("dock-preferences")), Y = /* @__PURE__ */ k(() => e(Je)["dock-preferences"] ?? null);
            sn(ne, {
              get title() {
                return Oe["dock-preferences"].title;
              },
              get helpText() {
                return xr["dock-preferences"].summary;
              },
              get pinned() {
                return e(f)["dock-preferences"].pinned;
              },
              get defaultWidth() {
                return Oe["dock-preferences"].width;
              },
              get defaultHeight() {
                return Oe["dock-preferences"].height;
              },
              get defaultX() {
                return Oe["dock-preferences"].x;
              },
              get defaultY() {
                return Oe["dock-preferences"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("dock-preferences"),
              onFocus: () => Gt("dock-preferences"),
              onPinToggle: () => Ze("dock-preferences"),
              onConsumeDragSeed: () => cr("dock-preferences"),
              get windowState() {
                return e(f)["dock-preferences"].windowState;
              },
              set windowState(H) {
                e(f)["dock-preferences"].windowState = H;
              },
              get frame() {
                return e(f)["dock-preferences"].frame;
              },
              set frame(H) {
                e(f)["dock-preferences"].frame = H;
              },
              get restoreFrame() {
                return e(f)["dock-preferences"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["dock-preferences"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["dock-preferences"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["dock-preferences"].snapTarget = H;
              },
              children: (H, ot) => {
                Al(H, {
                  mode: "window",
                  get pinned() {
                    return e(f)["dock-preferences"].pinned;
                  },
                  onTogglePin: () => Ze("dock-preferences")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(Ta, (ne) => {
          e(f)["dock-preferences"].open && ne(Lo);
        });
      }
      var vi = g(Ta, 2);
      {
        var Bo = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("settings-payload")), Y = /* @__PURE__ */ k(() => e(Je)["settings-payload"] ?? null);
            sn(ne, {
              get title() {
                return Oe["settings-payload"].title;
              },
              get helpText() {
                return xr["settings-payload"].summary;
              },
              get pinned() {
                return e(f)["settings-payload"].pinned;
              },
              get defaultWidth() {
                return Oe["settings-payload"].width;
              },
              get defaultHeight() {
                return Oe["settings-payload"].height;
              },
              get defaultX() {
                return Oe["settings-payload"].x;
              },
              get defaultY() {
                return Oe["settings-payload"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("settings-payload"),
              onFocus: () => Gt("settings-payload"),
              onPinToggle: () => Ze("settings-payload"),
              onConsumeDragSeed: () => cr("settings-payload"),
              get windowState() {
                return e(f)["settings-payload"].windowState;
              },
              set windowState(H) {
                e(f)["settings-payload"].windowState = H;
              },
              get frame() {
                return e(f)["settings-payload"].frame;
              },
              set frame(H) {
                e(f)["settings-payload"].frame = H;
              },
              get restoreFrame() {
                return e(f)["settings-payload"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["settings-payload"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["settings-payload"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["settings-payload"].snapTarget = H;
              },
              children: (H, ot) => {
                Rl(H, {
                  mode: "window",
                  get settings() {
                    return e(Pe);
                  },
                  get pinned() {
                    return e(f)["settings-payload"].pinned;
                  },
                  onTogglePin: () => Ze("settings-payload")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(vi, (ne) => {
          e(f)["settings-payload"].open && ne(Bo);
        });
      }
      var Bi = g(vi, 2);
      {
        var lo = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("catalog-search")), Y = /* @__PURE__ */ k(() => e(Je)["catalog-search"] ?? null);
            sn(ne, {
              get title() {
                return Oe["catalog-search"].title;
              },
              get helpText() {
                return xr["catalog-search"].summary;
              },
              get pinned() {
                return e(f)["catalog-search"].pinned;
              },
              get defaultWidth() {
                return Oe["catalog-search"].width;
              },
              get defaultHeight() {
                return Oe["catalog-search"].height;
              },
              get defaultX() {
                return Oe["catalog-search"].x;
              },
              get defaultY() {
                return Oe["catalog-search"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("catalog-search"),
              onFocus: () => Gt("catalog-search"),
              onPinToggle: () => Ze("catalog-search"),
              onConsumeDragSeed: () => cr("catalog-search"),
              get windowState() {
                return e(f)["catalog-search"].windowState;
              },
              set windowState(H) {
                e(f)["catalog-search"].windowState = H;
              },
              get frame() {
                return e(f)["catalog-search"].frame;
              },
              set frame(H) {
                e(f)["catalog-search"].frame = H;
              },
              get restoreFrame() {
                return e(f)["catalog-search"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["catalog-search"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["catalog-search"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["catalog-search"].snapTarget = H;
              },
              children: (H, ot) => {
                Ml(H, {
                  mode: "window",
                  get query() {
                    return e(Jt);
                  },
                  get entity() {
                    return e(Tr);
                  },
                  get loading() {
                    return e(Be);
                  },
                  get pinned() {
                    return e(f)["catalog-search"].pinned;
                  },
                  onTogglePin: () => Ze("catalog-search"),
                  onSearch: () => void bn(),
                  onEntityChange: (Er) => {
                    $(Tr, Er, !0), $(Jt, ""), bn();
                  }
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(Bi, (ne) => {
          e(f)["catalog-search"].open && ne(lo);
        });
      }
      var co = g(Bi, 2);
      {
        var Fi = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("catalog-results")), Y = /* @__PURE__ */ k(() => e(Je)["catalog-results"] ?? null);
            sn(ne, {
              get title() {
                return Oe["catalog-results"].title;
              },
              get helpText() {
                return xr["catalog-results"].summary;
              },
              get pinned() {
                return e(f)["catalog-results"].pinned;
              },
              get defaultWidth() {
                return Oe["catalog-results"].width;
              },
              get defaultHeight() {
                return Oe["catalog-results"].height;
              },
              get defaultX() {
                return Oe["catalog-results"].x;
              },
              get defaultY() {
                return Oe["catalog-results"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("catalog-results"),
              onFocus: () => Gt("catalog-results"),
              onPinToggle: () => Ze("catalog-results"),
              onConsumeDragSeed: () => cr("catalog-results"),
              get windowState() {
                return e(f)["catalog-results"].windowState;
              },
              set windowState(H) {
                e(f)["catalog-results"].windowState = H;
              },
              get frame() {
                return e(f)["catalog-results"].frame;
              },
              set frame(H) {
                e(f)["catalog-results"].frame = H;
              },
              get restoreFrame() {
                return e(f)["catalog-results"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["catalog-results"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["catalog-results"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["catalog-results"].snapTarget = H;
              },
              children: (H, ot) => {
                zl(H, {
                  mode: "window",
                  get loaded() {
                    return e(Ce);
                  },
                  get loading() {
                    return e(Be);
                  },
                  get searchResults() {
                    return e(Xe);
                  },
                  get pinned() {
                    return e(f)["catalog-results"].pinned;
                  },
                  onTogglePin: () => Ze("catalog-results")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(co, (ne) => {
          e(f)["catalog-results"].open && ne(Fi);
        });
      }
      var hi = g(co, 2);
      {
        var Fo = (ne) => {
          {
            let Fe = /* @__PURE__ */ k(() => Yt("catalog-facets")), Y = /* @__PURE__ */ k(() => e(Je)["catalog-facets"] ?? null);
            sn(ne, {
              get title() {
                return Oe["catalog-facets"].title;
              },
              get helpText() {
                return xr["catalog-facets"].summary;
              },
              get pinned() {
                return e(f)["catalog-facets"].pinned;
              },
              get defaultWidth() {
                return Oe["catalog-facets"].width;
              },
              get defaultHeight() {
                return Oe["catalog-facets"].height;
              },
              get defaultX() {
                return Oe["catalog-facets"].x;
              },
              get defaultY() {
                return Oe["catalog-facets"].y;
              },
              get zIndex() {
                return e(Fe);
              },
              get dragSeed() {
                return e(Y);
              },
              onClose: () => Qt("catalog-facets"),
              onFocus: () => Gt("catalog-facets"),
              onPinToggle: () => Ze("catalog-facets"),
              onConsumeDragSeed: () => cr("catalog-facets"),
              get windowState() {
                return e(f)["catalog-facets"].windowState;
              },
              set windowState(H) {
                e(f)["catalog-facets"].windowState = H;
              },
              get frame() {
                return e(f)["catalog-facets"].frame;
              },
              set frame(H) {
                e(f)["catalog-facets"].frame = H;
              },
              get restoreFrame() {
                return e(f)["catalog-facets"].restoreFrame;
              },
              set restoreFrame(H) {
                e(f)["catalog-facets"].restoreFrame = H;
              },
              get snapTarget() {
                return e(f)["catalog-facets"].snapTarget;
              },
              set snapTarget(H) {
                e(f)["catalog-facets"].snapTarget = H;
              },
              children: (H, ot) => {
                Pl(H, {
                  mode: "window",
                  get loaded() {
                    return e(Ce);
                  },
                  get facets() {
                    return e(N);
                  },
                  get pinned() {
                    return e(f)["catalog-facets"].pinned;
                  },
                  onTogglePin: () => Ze("catalog-facets")
                });
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(hi, (ne) => {
          e(f)["catalog-facets"].open && ne(Fo);
        });
      }
      we(() => A = le(p, 1, "workspace-canvas svelte-vg7d0z", null, A, { "compact-workspace": e(Ie) })), G(v, Q);
    },
    $$slots: { default: !0 }
  });
  var Io = g(An, 2);
  Sg(Io, {
    get items() {
      return e(Wn);
    },
    get position() {
      return e(lr);
    },
    get labelMode() {
      return e(Mn);
    },
    onActivate: ci,
    onRemove: gi,
    onPositionChange: (v) => {
      $(lr, v, !0);
    }
  }), G(t, ka), At();
}
customElements.define("efsdb-admin", Dt(Tw, {}, [], [], { mode: "open" }));
