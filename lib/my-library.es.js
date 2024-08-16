import fr, { useState as $r } from "react";
function Dr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var De = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Mr() {
  if (Xe) return me;
  Xe = 1;
  var u = fr, D = Symbol.for("react.element"), k = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, P = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(f, d, _) {
    var s, h = {}, I = null, F = null;
    _ !== void 0 && (I = "" + _), d.key !== void 0 && (I = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (s in d) v.call(d, s) && !l.hasOwnProperty(s) && (h[s] = d[s]);
    if (f && f.defaultProps) for (s in d = f.defaultProps, d) h[s] === void 0 && (h[s] = d[s]);
    return { $$typeof: D, type: f, key: I, ref: F, props: h, _owner: P.current };
  }
  return me.Fragment = k, me.jsx = C, me.jsxs = C, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Fr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var u = fr, D = Symbol.for("react.element"), k = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          o[c - 1] = arguments[c];
        V("error", e, o);
      }
    }
    function V(e, r, o) {
      {
        var c = U.ReactDebugCurrentFrame, x = c.getStackAddendum();
        x !== "" && (r += "%s", o = o.concat([x]));
        var $ = o.map(function(S) {
          return String(S);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, a = !1, re = !1, pe = !1, ye = !1, ie;
    ie = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === l || ye || e === P || e === _ || e === s || pe || e === F || q || a || re || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === h || e.$$typeof === C || e.$$typeof === f || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ue(e, r, o) {
      var c = e.displayName;
      if (c)
        return c;
      var x = r.displayName || r.name || "";
      return x !== "" ? o + "(" + x + ")" : o;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case k:
          return "Portal";
        case l:
          return "Profiler";
        case P:
          return "StrictMode";
        case _:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return se(r) + ".Consumer";
          case C:
            var o = e;
            return se(o._context) + ".Provider";
          case d:
            return ue(e, e.render, "ForwardRef");
          case h:
            var c = e.displayName || null;
            return c !== null ? c : K(e.type) || "Memo";
          case I: {
            var x = e, $ = x._payload, S = x._init;
            try {
              return K(S($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, te = 0, X, ee, ne, fe, t, i, m;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function p() {
      {
        if (te === 0) {
          X = console.log, ee = console.info, ne = console.warn, fe = console.error, t = console.group, i = console.groupCollapsed, m = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function O() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: X
            }),
            info: G({}, e, {
              value: ee
            }),
            warn: G({}, e, {
              value: ne
            }),
            error: G({}, e, {
              value: fe
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: i
            }),
            groupEnd: G({}, e, {
              value: m
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var y = U.ReactCurrentDispatcher, b;
    function g(e, r, o) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (x) {
            var c = x.stack.trim().match(/\n( *(at )?)/);
            b = c && c[1] || "";
          }
        return `
` + b + e;
      }
    }
    var w = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function n(e, r) {
      if (!e || w)
        return "";
      {
        var o = T.get(e);
        if (o !== void 0)
          return o;
      }
      var c;
      w = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = y.current, y.current = null, p();
      try {
        if (r) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (H) {
              c = H;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (H) {
              c = H;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            c = H;
          }
          e();
        }
      } catch (H) {
        if (H && c && typeof H.stack == "string") {
          for (var R = H.stack.split(`
`), J = c.stack.split(`
`), W = R.length - 1, L = J.length - 1; W >= 1 && L >= 0 && R[W] !== J[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (R[W] !== J[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || R[W] !== J[L]) {
                    var Q = `
` + R[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Q), Q;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        w = !1, y.current = $, O(), Error.prepareStackTrace = x;
      }
      var de = e ? e.displayName || e.name : "", ae = de ? g(de) : "";
      return typeof e == "function" && T.set(e, ae), ae;
    }
    function Z(e, r, o) {
      return n(e, !1);
    }
    function ce(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, ce(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case _:
          return g("Suspense");
        case s:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Z(e.render);
          case h:
            return oe(e.type, r, o);
          case I: {
            var c = e, x = c._payload, $ = c._init;
            try {
              return oe($(x), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ye = {}, We = U.ReactDebugCurrentFrame;
    function Te(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        We.setExtraStackFrame(o);
      } else
        We.setExtraStackFrame(null);
    }
    function dr(e, r, o, c, x) {
      {
        var $ = Function.call.bind(he);
        for (var S in e)
          if ($(e, S)) {
            var R = void 0;
            try {
              if (typeof e[S] != "function") {
                var J = Error((c || "React class") + ": " + o + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              R = e[S](r, S, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              R = W;
            }
            R && !(R instanceof Error) && (Te(x), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, S, typeof R), Te(null)), R instanceof Error && !(R.message in Ye) && (Ye[R.message] = !0, Te(x), Y("Failed %s type: %s", o, R.message), Te(null));
          }
      }
    }
    var vr = Array.isArray;
    function Re(e) {
      return vr(e);
    }
    function pr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function yr(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function Le(e) {
      if (yr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), qe(e);
    }
    var Ee = U.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Ve, Oe;
    Oe = {};
    function hr(e) {
      if (he.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Er(e) {
      if (he.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mr(e, r) {
      if (typeof e.ref == "string" && Ee.current && r && Ee.current.stateNode !== r) {
        var o = K(Ee.current.type);
        Oe[o] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ee.current.type), e.ref), Oe[o] = !0);
      }
    }
    function gr(e, r) {
      {
        var o = function() {
          Ue || (Ue = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Tr(e, r) {
      {
        var o = function() {
          Ve || (Ve = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var _r = function(e, r, o, c, x, $, S) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: S,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Rr(e, r, o, c, x) {
      {
        var $, S = {}, R = null, J = null;
        o !== void 0 && (Le(o), R = "" + o), Er(r) && (Le(r.key), R = "" + r.key), hr(r) && (J = r.ref, mr(r, x));
        for ($ in r)
          he.call(r, $) && !br.hasOwnProperty($) && (S[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            S[$] === void 0 && (S[$] = W[$]);
        }
        if (R || J) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && gr(S, L), J && Tr(S, L);
        }
        return _r(e, R, J, x, c, Ee.current, S);
      }
    }
    var Se = U.ReactCurrentOwner, Ne = U.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(o);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function ze() {
      {
        if (Se.current) {
          var e = K(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Or(e) {
      return "";
    }
    var Be = {};
    function Sr(e) {
      {
        var r = ze();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Sr(r);
        if (Be[o])
          return;
        Be[o] = !0;
        var c = "";
        e && e._owner && e._owner !== Se.current && (c = " It was passed a child from " + K(e._owner.type) + "."), le(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), le(null);
      }
    }
    function Ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var o = 0; o < e.length; o++) {
            var c = e[o];
            Ce(c) && Je(c, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = N(e);
          if (typeof x == "function" && x !== e.entries)
            for (var $ = x.call(e), S; !(S = $.next()).done; )
              Ce(S.value) && Je(S.value, r);
        }
      }
    }
    function Pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          o = r.propTypes;
        else
          return;
        if (o) {
          var c = K(r);
          dr(o, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var x = K(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var c = r[o];
          if (c !== "children" && c !== "key") {
            le(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var Ge = {};
    function He(e, r, o, c, x, $) {
      {
        var S = be(e);
        if (!S) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Or();
          J ? R += J : R += ze();
          var W;
          e === null ? W = "null" : Re(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (K(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, R);
        }
        var L = Rr(e, r, o, x, $);
        if (L == null)
          return L;
        if (S) {
          var Q = r.children;
          if (Q !== void 0)
            if (c)
              if (Re(Q)) {
                for (var de = 0; de < Q.length; de++)
                  Ke(Q[de], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(Q, e);
        }
        if (he.call(r, "key")) {
          var ae = K(e), H = Object.keys(r).filter(function(Ir) {
            return Ir !== "key";
          }), we = H.length > 0 ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[ae + we]) {
            var kr = H.length > 0 ? "{" + H.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, ae, kr, ae), Ge[ae + we] = !0;
          }
        }
        return e === v ? Cr(L) : Pr(L), L;
      }
    }
    function wr(e, r, o) {
      return He(e, r, o, !0);
    }
    function xr(e, r, o) {
      return He(e, r, o, !1);
    }
    var jr = xr, Ar = wr;
    ge.Fragment = v, ge.jsx = jr, ge.jsxs = Ar;
  }()), ge;
}
process.env.NODE_ENV === "production" ? De.exports = Mr() : De.exports = Fr();
var Qe = De.exports, Me = { exports: {} }, _e = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Yr() {
  if (er) return j;
  er = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, k = u ? Symbol.for("react.portal") : 60106, v = u ? Symbol.for("react.fragment") : 60107, P = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, f = u ? Symbol.for("react.context") : 60110, d = u ? Symbol.for("react.async_mode") : 60111, _ = u ? Symbol.for("react.concurrent_mode") : 60111, s = u ? Symbol.for("react.forward_ref") : 60112, h = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function V(a) {
    if (typeof a == "object" && a !== null) {
      var re = a.$$typeof;
      switch (re) {
        case D:
          switch (a = a.type, a) {
            case d:
            case _:
            case v:
            case l:
            case P:
            case h:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case f:
                case s:
                case z:
                case F:
                case C:
                  return a;
                default:
                  return re;
              }
          }
        case k:
          return re;
      }
    }
  }
  function q(a) {
    return V(a) === _;
  }
  return j.AsyncMode = d, j.ConcurrentMode = _, j.ContextConsumer = f, j.ContextProvider = C, j.Element = D, j.ForwardRef = s, j.Fragment = v, j.Lazy = z, j.Memo = F, j.Portal = k, j.Profiler = l, j.StrictMode = P, j.Suspense = h, j.isAsyncMode = function(a) {
    return q(a) || V(a) === d;
  }, j.isConcurrentMode = q, j.isContextConsumer = function(a) {
    return V(a) === f;
  }, j.isContextProvider = function(a) {
    return V(a) === C;
  }, j.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === D;
  }, j.isForwardRef = function(a) {
    return V(a) === s;
  }, j.isFragment = function(a) {
    return V(a) === v;
  }, j.isLazy = function(a) {
    return V(a) === z;
  }, j.isMemo = function(a) {
    return V(a) === F;
  }, j.isPortal = function(a) {
    return V(a) === k;
  }, j.isProfiler = function(a) {
    return V(a) === l;
  }, j.isStrictMode = function(a) {
    return V(a) === P;
  }, j.isSuspense = function(a) {
    return V(a) === h;
  }, j.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === v || a === _ || a === l || a === P || a === h || a === I || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === F || a.$$typeof === C || a.$$typeof === f || a.$$typeof === s || a.$$typeof === N || a.$$typeof === U || a.$$typeof === Y || a.$$typeof === M);
  }, j.typeOf = V, j;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Wr() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, k = u ? Symbol.for("react.portal") : 60106, v = u ? Symbol.for("react.fragment") : 60107, P = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, f = u ? Symbol.for("react.context") : 60110, d = u ? Symbol.for("react.async_mode") : 60111, _ = u ? Symbol.for("react.concurrent_mode") : 60111, s = u ? Symbol.for("react.forward_ref") : 60112, h = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function V(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === v || n === _ || n === l || n === P || n === h || n === I || typeof n == "object" && n !== null && (n.$$typeof === z || n.$$typeof === F || n.$$typeof === C || n.$$typeof === f || n.$$typeof === s || n.$$typeof === N || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === M);
    }
    function q(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case D:
            var ce = n.type;
            switch (ce) {
              case d:
              case _:
              case v:
              case l:
              case P:
              case h:
                return ce;
              default:
                var oe = ce && ce.$$typeof;
                switch (oe) {
                  case f:
                  case s:
                  case z:
                  case F:
                  case C:
                    return oe;
                  default:
                    return Z;
                }
            }
          case k:
            return Z;
        }
      }
    }
    var a = d, re = _, pe = f, ye = C, ie = D, be = s, ue = v, se = z, K = F, G = k, te = l, X = P, ee = h, ne = !1;
    function fe(n) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || q(n) === d;
    }
    function t(n) {
      return q(n) === _;
    }
    function i(n) {
      return q(n) === f;
    }
    function m(n) {
      return q(n) === C;
    }
    function E(n) {
      return typeof n == "object" && n !== null && n.$$typeof === D;
    }
    function p(n) {
      return q(n) === s;
    }
    function O(n) {
      return q(n) === v;
    }
    function y(n) {
      return q(n) === z;
    }
    function b(n) {
      return q(n) === F;
    }
    function g(n) {
      return q(n) === k;
    }
    function w(n) {
      return q(n) === l;
    }
    function T(n) {
      return q(n) === P;
    }
    function B(n) {
      return q(n) === h;
    }
    A.AsyncMode = a, A.ConcurrentMode = re, A.ContextConsumer = pe, A.ContextProvider = ye, A.Element = ie, A.ForwardRef = be, A.Fragment = ue, A.Lazy = se, A.Memo = K, A.Portal = G, A.Profiler = te, A.StrictMode = X, A.Suspense = ee, A.isAsyncMode = fe, A.isConcurrentMode = t, A.isContextConsumer = i, A.isContextProvider = m, A.isElement = E, A.isForwardRef = p, A.isFragment = O, A.isLazy = y, A.isMemo = b, A.isPortal = g, A.isProfiler = w, A.isStrictMode = T, A.isSuspense = B, A.isValidElementType = V, A.typeOf = q;
  }()), A;
}
var tr;
function cr() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? _e.exports = Yr() : _e.exports = Wr()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, nr;
function qr() {
  if (nr) return xe;
  nr = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
  function v(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function P() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var C = {}, f = 0; f < 10; f++)
        C["_" + String.fromCharCode(f)] = f;
      var d = Object.getOwnPropertyNames(C).map(function(s) {
        return C[s];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(s) {
        _[s] = s;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = P() ? Object.assign : function(l, C) {
    for (var f, d = v(l), _, s = 1; s < arguments.length; s++) {
      f = Object(arguments[s]);
      for (var h in f)
        D.call(f, h) && (d[h] = f[h]);
      if (u) {
        _ = u(f);
        for (var I = 0; I < _.length; I++)
          k.call(f, _[I]) && (d[_[I]] = f[_[I]]);
      }
    }
    return d;
  }, xe;
}
var je, or;
function Fe() {
  if (or) return je;
  or = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = u, je;
}
var Ae, ar;
function lr() {
  return ar || (ar = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var ke, ir;
function Lr() {
  if (ir) return ke;
  ir = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = Fe(), k = {}, v = lr();
    u = function(l) {
      var C = "Warning: " + l;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function P(l, C, f, d, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var s in l)
        if (v(l, s)) {
          var h;
          try {
            if (typeof l[s] != "function") {
              var I = Error(
                (d || "React class") + ": " + f + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            h = l[s](C, s, d, f, null, D);
          } catch (z) {
            h = z;
          }
          if (h && !(h instanceof Error) && u(
            (d || "React class") + ": type specification of " + f + " `" + s + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in k)) {
            k[h.message] = !0;
            var F = _ ? _() : "";
            u(
              "Failed " + f + " type: " + h.message + (F ?? "")
            );
          }
        }
    }
  }
  return P.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (k = {});
  }, ke = P, ke;
}
var Ie, ur;
function Ur() {
  if (ur) return Ie;
  ur = 1;
  var u = cr(), D = qr(), k = Fe(), v = lr(), P = Lr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(f) {
    var d = "Warning: " + f;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return Ie = function(f, d) {
    var _ = typeof Symbol == "function" && Symbol.iterator, s = "@@iterator";
    function h(t) {
      var i = t && (_ && t[_] || t[s]);
      if (typeof i == "function")
        return i;
    }
    var I = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: V,
      element: q(),
      elementType: a(),
      instanceOf: re,
      node: be(),
      objectOf: ye,
      oneOf: pe,
      oneOfType: ie,
      shape: se,
      exact: K
    };
    function z(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function N(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, m = 0;
      function E(O, y, b, g, w, T, B) {
        if (g = g || I, T = T || b, B !== k) {
          if (d) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = g + ":" + b;
            !i[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[Z] = !0, m++);
          }
        }
        return y[b] == null ? O ? y[b] === null ? new M("The " + w + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + w + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(y, b, g, w, T);
      }
      var p = E.bind(null, !1);
      return p.isRequired = E.bind(null, !0), p;
    }
    function U(t) {
      function i(m, E, p, O, y, b) {
        var g = m[E], w = X(g);
        if (w !== t) {
          var T = ee(g);
          return new M(
            "Invalid " + O + " `" + y + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return N(i);
    }
    function Y() {
      return N(C);
    }
    function V(t) {
      function i(m, E, p, O, y) {
        if (typeof t != "function")
          return new M("Property `" + y + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var b = m[E];
        if (!Array.isArray(b)) {
          var g = X(b);
          return new M("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected an array."));
        }
        for (var w = 0; w < b.length; w++) {
          var T = t(b, w, p, O, y + "[" + w + "]", k);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return N(i);
    }
    function q() {
      function t(i, m, E, p, O) {
        var y = i[m];
        if (!f(y)) {
          var b = X(y);
          return new M("Invalid " + p + " `" + O + "` of type " + ("`" + b + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(t);
    }
    function a() {
      function t(i, m, E, p, O) {
        var y = i[m];
        if (!u.isValidElementType(y)) {
          var b = X(y);
          return new M("Invalid " + p + " `" + O + "` of type " + ("`" + b + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(t);
    }
    function re(t) {
      function i(m, E, p, O, y) {
        if (!(m[E] instanceof t)) {
          var b = t.name || I, g = fe(m[E]);
          return new M("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return N(i);
    }
    function pe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), C;
      function i(m, E, p, O, y) {
        for (var b = m[E], g = 0; g < t.length; g++)
          if (z(b, t[g]))
            return null;
        var w = JSON.stringify(t, function(B, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + O + " `" + y + "` of value `" + String(b) + "` " + ("supplied to `" + p + "`, expected one of " + w + "."));
      }
      return N(i);
    }
    function ye(t) {
      function i(m, E, p, O, y) {
        if (typeof t != "function")
          return new M("Property `" + y + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var b = m[E], g = X(b);
        if (g !== "object")
          return new M("Invalid " + O + " `" + y + "` of type " + ("`" + g + "` supplied to `" + p + "`, expected an object."));
        for (var w in b)
          if (v(b, w)) {
            var T = t(b, w, p, O, y + "." + w, k);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return N(i);
    }
    function ie(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var i = 0; i < t.length; i++) {
        var m = t[i];
        if (typeof m != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(m) + " at index " + i + "."
          ), C;
      }
      function E(p, O, y, b, g) {
        for (var w = [], T = 0; T < t.length; T++) {
          var B = t[T], n = B(p, O, y, b, g, k);
          if (n == null)
            return null;
          n.data && v(n.data, "expectedType") && w.push(n.data.expectedType);
        }
        var Z = w.length > 0 ? ", expected one of type [" + w.join(", ") + "]" : "";
        return new M("Invalid " + b + " `" + g + "` supplied to " + ("`" + y + "`" + Z + "."));
      }
      return N(E);
    }
    function be() {
      function t(i, m, E, p, O) {
        return G(i[m]) ? null : new M("Invalid " + p + " `" + O + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return N(t);
    }
    function ue(t, i, m, E, p) {
      return new M(
        (t || "React class") + ": " + i + " type `" + m + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function se(t) {
      function i(m, E, p, O, y) {
        var b = m[E], g = X(b);
        if (g !== "object")
          return new M("Invalid " + O + " `" + y + "` of type `" + g + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var w in t) {
          var T = t[w];
          if (typeof T != "function")
            return ue(p, O, y, w, ee(T));
          var B = T(b, w, p, O, y + "." + w, k);
          if (B)
            return B;
        }
        return null;
      }
      return N(i);
    }
    function K(t) {
      function i(m, E, p, O, y) {
        var b = m[E], g = X(b);
        if (g !== "object")
          return new M("Invalid " + O + " `" + y + "` of type `" + g + "` " + ("supplied to `" + p + "`, expected `object`."));
        var w = D({}, m[E], t);
        for (var T in w) {
          var B = t[T];
          if (v(t, T) && typeof B != "function")
            return ue(p, O, y, T, ee(B));
          if (!B)
            return new M(
              "Invalid " + O + " `" + y + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(m[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(b, T, p, O, y + "." + T, k);
          if (n)
            return n;
        }
        return null;
      }
      return N(i);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || f(t))
            return !0;
          var i = h(t);
          if (i) {
            var m = i.call(t), E;
            if (i !== t.entries) {
              for (; !(E = m.next()).done; )
                if (!G(E.value))
                  return !1;
            } else
              for (; !(E = m.next()).done; ) {
                var p = E.value;
                if (p && !G(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function X(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(i, t) ? "symbol" : i;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = X(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = ee(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function fe(t) {
      return !t.constructor || !t.constructor.name ? I : t.constructor.name;
    }
    return F.checkPropTypes = P, F.resetWarningCache = P.resetWarningCache, F.PropTypes = F, F;
  }, Ie;
}
var $e, sr;
function Vr() {
  if (sr) return $e;
  sr = 1;
  var u = Fe();
  function D() {
  }
  function k() {
  }
  return k.resetWarningCache = D, $e = function() {
    function v(C, f, d, _, s, h) {
      if (h !== u) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    v.isRequired = v;
    function P() {
      return v;
    }
    var l = {
      array: v,
      bigint: v,
      bool: v,
      func: v,
      number: v,
      object: v,
      string: v,
      symbol: v,
      any: v,
      arrayOf: P,
      element: v,
      elementType: v,
      instanceOf: P,
      node: v,
      objectOf: P,
      oneOf: P,
      oneOfType: P,
      shape: P,
      exact: P,
      checkPropTypes: k,
      resetWarningCache: D
    };
    return l.PropTypes = l, l;
  }, $e;
}
if (process.env.NODE_ENV !== "production") {
  var Nr = cr(), zr = !0;
  Me.exports = Ur()(Nr.isElement, zr);
} else
  Me.exports = Vr()();
var Br = Me.exports;
const ve = /* @__PURE__ */ Dr(Br), Jr = ({
  children: u,
  content: D,
  position: k = "top",
  trigger: v = "hover",
  delay: P = 0,
  theme: l = "dark",
  ...C
}) => {
  const [f, d] = $r(!1), _ = () => {
    P ? setTimeout(() => d(!0), P) : d(!0);
  }, s = () => d(!1), h = {
    hover: {
      onMouseEnter: _,
      onMouseLeave: s
    },
    focus: {
      onFocus: _,
      onBlur: s
    },
    click: {
      onClick: () => d(!f)
    }
  };
  return /* @__PURE__ */ Qe.jsxs("div", { className: "relative inline-block", ...h[v], ...C, children: [
    u,
    f && /* @__PURE__ */ Qe.jsx("div", { className: `tooltip tooltip-${k} tooltip-${l} ${f ? "tooltip-visible" : ""}`, children: D })
  ] });
};
Jr.propTypes = {
  children: ve.node.isRequired,
  content: ve.node.isRequired,
  position: ve.oneOf(["top", "right", "bottom", "left"]),
  trigger: ve.oneOf(["hover", "focus", "click"]),
  delay: ve.number,
  theme: ve.oneOf(["light", "dark"])
};
export {
  Jr as Tooltip
};
